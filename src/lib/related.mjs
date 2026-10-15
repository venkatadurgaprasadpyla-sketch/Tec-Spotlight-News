// Finds which TechSpotlight posts are related to each other, so pages can link
// them for the reader: the "Related stories" box and the automatic links
// inside article text both use this.
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { parse } from 'yaml';
import { SHOW_SAMPLES } from './promos.mjs';

const root = new URL('../content/', import.meta.url);
const STOP = new Set(
  'a an and are as at be by for from has have how in into is it its of on or that the this to was what when where which who why will with you your new now more than about after over can'.split(' '),
);

/** Lowercase meaningful words in a piece of text. */
export function words(text) {
  return (text.toLowerCase().match(/[a-z0-9][a-z0-9.+-]*[a-z0-9]|[a-z0-9]/g) ?? []).filter((w) => w.length > 2 && !STOP.has(w));
}

/**
 * Every news brief and guide, read straight from the files (drafts only on previews).
 * @returns {{ kind: 'news'|'guide', slug: string, url: string, title: string, category: string, date: number, phrases: string[], terms: Set<string> }[]}
 */
export function loadPosts() {
  const posts = [];
  for (const [kind, dir, base] of [['news', 'news', '/news'], ['guide', 'guides', '/guides']]) {
    const folder = new URL(`${dir}/`, root);
    if (!existsSync(folder)) continue;
    for (const name of readdirSync(folder)) {
      if (!name.endsWith('.md') || name.startsWith('sample-')) continue;
      const text = readFileSync(new URL(name, folder), 'utf8');
      const m = text.match(/^---\n([\s\S]*?)\n---/);
      if (!m) continue;
      const d = parse(m[1]) ?? {};
      if (d.draft && !SHOW_SAMPLES) continue;
      const slug = name.replace(/\.md$/, '');
      const phrases = [d.focusKeyword, ...(d.keywords ?? [])].filter(Boolean);
      posts.push({
        kind,
        slug,
        url: `${base}/${slug}/`,
        title: d.title ?? slug,
        category: d.category ?? '',
        date: new Date(d.date ?? 0).valueOf(),
        phrases,
        terms: new Set(words([d.title, ...phrases].join(' '))),
      });
    }
  }
  return posts;
}

/**
 * How related two posts are: shared search phrases count most, then shared
 * words in titles and keywords, then the same category.
 */
export function relatedness(a, b) {
  let score = 0;
  const pa = new Set(a.phrases.map((p) => p.toLowerCase()));
  for (const p of b.phrases) if (pa.has(p.toLowerCase())) score += 4;
  for (const t of b.terms) if (a.terms.has(t)) score += 1;
  if (a.category && a.category === b.category) score += 2;
  return score;
}

/** Other posts ranked by how related they are to `slug`, most related first. */
export function relatedTo(slug, limit = 3) {
  const posts = loadPosts();
  const me = posts.find((p) => p.slug === slug);
  if (!me) return [];
  return posts
    .filter((p) => p !== me)
    .map((p) => ({ post: p, score: relatedness(me, p) }))
    .sort((x, y) => y.score - x.score || y.post.date - x.post.date)
    .slice(0, limit);
}
