// Links related TechSpotlight stories inside an article's text, automatically.
// When a sentence mentions another post's search phrase (for example
// "GenDubAI" or "AI tools for MSMEs"), the first mention becomes a link to that
// post. At most three links per article, one per post, never inside headings
// or existing links, and never to a post the writer already linked by hand.
import { loadPosts, relatedness } from './related.mjs';

const MAX_LINKS = 3;
const SKIP = new Set(['a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'code', 'pre', 'figcaption']);

function slugOf(file) {
  const path = String(file.path ?? file.history?.[0] ?? '');
  const m = path.match(/content\/(news|guides)\/([^/]+)\.md$/);
  return m ? m[2] : null;
}

// A phrase is specific enough to link when it has two or more words, or is a
// single name-like word (for example "GenDubAI").
function linkable(phrase) {
  const p = phrase.trim();
  return p.split(/\s+/).length >= 2 || (p.length >= 5 && /[A-Z]/.test(p.slice(1)));
}

function escape(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function collectHrefs(node, out) {
  if (node.type === 'element' && node.tagName === 'a') out.add(String(node.properties?.href ?? '').replace(/\/?$/, '/'));
  for (const child of node.children ?? []) collectHrefs(child, out);
}

// A hand-written link to a story that isn't live yet (still a draft) would be
// broken on the live site, so it becomes plain text there until that story is
// published.
function unwrapUnpublished(node, live) {
  if (!node.children) return;
  node.children = node.children.flatMap((child) => {
    if (child.type === 'element' && child.tagName === 'a') {
      const m = String(child.properties?.href ?? '').match(/^\/(news|guides)\/([a-z0-9-]+)\/?$/);
      if (m && !live.has(m[2])) return child.children;
    }
    unwrapUnpublished(child, live);
    return [child];
  });
}

export default function rehypeRelatedLinks() {
  return (tree, file) => {
    const slug = slugOf(file);
    if (!slug || slug.startsWith('sample-')) return;
    const posts = loadPosts();
    unwrapUnpublished(tree, new Set(posts.map((p) => p.slug)));
    const me = posts.find((p) => p.slug === slug);
    if (!me) return;
    const own = new Set(me.phrases.map((p) => p.toLowerCase()));
    const linked = new Set();
    collectHrefs(tree, linked);

    // Candidate targets, most related first, each with its linkable phrases.
    const targets = posts
      .filter((p) => p.slug !== slug && !linked.has(p.url))
      .sort((a, b) => relatedness(me, b) - relatedness(me, a))
      .map((p) => ({ post: p, phrases: p.phrases.filter((ph) => linkable(ph) && !own.has(ph.toLowerCase())) }))
      .filter((t) => t.phrases.length);
    if (!targets.length) return;

    let added = 0;
    const walk = (node, inside) => {
      if (added >= MAX_LINKS || !node.children) return;
      for (let i = 0; i < node.children.length && added < MAX_LINKS; i++) {
        const child = node.children[i];
        if (child.type === 'element') {
          if (!SKIP.has(child.tagName)) walk(child, inside || child.tagName === 'p' || child.tagName === 'li');
          continue;
        }
        if (child.type !== 'text' || !inside) continue;
        for (const t of targets) {
          if (t.done) continue;
          const re = new RegExp(`\\b(${t.phrases.map(escape).join('|')})\\b`, 'i');
          const m = re.exec(child.value);
          if (!m) continue;
          const before = child.value.slice(0, m.index);
          const after = child.value.slice(m.index + m[0].length);
          const link = {
            type: 'element',
            tagName: 'a',
            properties: { href: t.post.url, className: ['related-link'], title: t.post.title },
            children: [{ type: 'text', value: m[0] }],
          };
          node.children.splice(i, 1, { type: 'text', value: before }, link, { type: 'text', value: after });
          t.done = true;
          added++;
          i++; // continue scanning in the text after the new link
          break;
        }
      }
    };
    walk(tree, false);
  };
}
