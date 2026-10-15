// Picks which affiliate tools to show as banners on a page.
// Used by the build-time plugin (the banner in the middle of an article) and by
// the page components (end of article, home page), so they agree on the picks.
//
// A tool appears only when its link is filled in data/affiliates.json. Preview
// links show tools without a link as clearly labelled samples, so Pyla can see
// the design; the live site never does.
import { readFileSync } from 'node:fs';

const file = new URL('../../data/affiliates.json', import.meta.url);

/** @returns {Record<string, {name: string, link: string, tagline?: string, cta?: string, topics?: string[]}>} */
export function loadTools() {
  return JSON.parse(readFileSync(file, 'utf8')).tools;
}

const branch = process.env.WORKERS_CI_BRANCH ?? process.env.CF_PAGES_BRANCH;
/** True on preview links and local preview (never on the live site). */
export const SHOW_SAMPLES =
  (branch !== undefined && branch !== 'main') || (branch === undefined && process.argv.includes('dev'));

function hash(text) {
  let h = 0;
  for (const ch of text) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return h;
}

/**
 * The tools that fit a page, best first: tools the post names in `tools`,
 * then tools whose topics include the post's category. The order of the
 * topical ones rotates by page, so different articles show different tools.
 * @param {{ slug: string, category?: string, tools?: string[], count?: number }} opts
 * @returns {{ key: string, name: string, link: string, tagline: string, cta: string, sample: boolean }[]}
 */
export function pickPromos({ slug, category, tools = [], count = 3 }) {
  const all = loadTools();
  const shown = (key) => all[key] && (all[key].link || SHOW_SAMPLES);
  const named = tools.filter(shown);
  const topical = Object.keys(all)
    .filter((key) => !named.includes(key) && shown(key) && (!category || (all[key].topics ?? []).includes(category)));
  const start = topical.length ? hash(slug) % topical.length : 0;
  const rotated = [...topical.slice(start), ...topical.slice(0, start)];
  return [...named, ...rotated].slice(0, count).map((key) => ({
    key,
    name: all[key].name,
    link: all[key].link,
    tagline: all[key].tagline ?? '',
    cta: all[key].cta ?? `Try ${all[key].name}`,
    sample: !all[key].link,
  }));
}

export const PROMO_REL = 'sponsored nofollow noopener';
