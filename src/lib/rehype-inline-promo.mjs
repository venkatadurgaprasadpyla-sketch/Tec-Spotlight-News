// Places one tidy affiliate banner in the middle of an article (before its
// third section heading), chosen to fit the article's topic. Nothing is added
// when no suitable tool has a link yet (previews show a labelled sample).
import { pickPromos, PROMO_REL } from './promos.mjs';

function el(tagName, properties, children = []) {
  return { type: 'element', tagName, properties, children };
}
const text = (value) => ({ type: 'text', value });

/** The banner as page elements; also used for the "sample" look on previews. */
export function promoElement(tool) {
  return el('aside', { className: ['promo', 'promo-inline'], ariaLabel: 'Sponsored' }, [
    el('span', { className: ['promo-label'] }, [text(tool.sample ? 'Sample banner (affiliate link not added yet)' : 'Sponsored · affiliate link')]),
    el('div', { className: ['promo-body'] }, [
      el('strong', { className: ['promo-name'] }, [text(tool.name)]),
      el('span', { className: ['promo-tag'] }, [text(tool.tagline)]),
    ]),
    el('a', { className: ['btn', 'promo-btn'], href: tool.link || '#', rel: PROMO_REL.split(' '), target: '_blank' }, [text(tool.cta)]),
  ]);
}

export default function rehypeInlinePromo() {
  return (tree, file) => {
    const path = String(file.path ?? file.history?.[0] ?? '');
    const m = path.match(/content\/(news|guides)\/([^/]+)\.md$/);
    if (!m) return;
    const fm = file.data?.astro?.frontmatter ?? {};
    if (fm.promos === false) return;
    const [tool] = pickPromos({ slug: m[2], category: fm.category, tools: fm.tools ?? [], count: 1 });
    if (!tool) return;
    const h2s = tree.children.map((c, i) => (c.type === 'element' && c.tagName === 'h2' ? i : -1)).filter((i) => i >= 0);
    if (h2s.length < 2) return;
    const at = h2s[Math.min(2, h2s.length - 1)];
    tree.children.splice(at, 0, promoElement(tool));
  };
}
