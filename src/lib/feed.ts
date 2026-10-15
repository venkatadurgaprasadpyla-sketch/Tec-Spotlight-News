// Builds TechSpotlight's RSS feeds (/rss.xml, /news/rss.xml, /guides/rss.xml):
// newest first, last 50 items, each with a short summary, its section and its
// cover photo. Drafts appear only on preview links, never on the live site.
import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { statSync } from 'node:fs';
import { join } from 'node:path';
import { getNews, getGuides, SHOW_DRAFTS } from '../data/posts';
import { SITE, NEWS_CATEGORIES, GUIDE_CATEGORIES } from '../data/site';

const MAX_ITEMS = 50;

type Kind = 'news' | 'guides';

function enclosure(image: string | undefined, site: URL) {
  if (!image) return undefined;
  try {
    const length = statSync(join(process.cwd(), 'public', image)).size;
    const type = image.endsWith('.png') ? 'image/png' : image.endsWith('.webp') ? 'image/webp' : 'image/jpeg';
    return { url: new URL(image, site).toString(), length, type };
  } catch {
    return undefined;
  }
}

export async function buildFeed(context: APIContext, kinds: Kind[], title: string) {
  const site = context.site!;
  const shown = <T extends { id: string; data: { draft: boolean } }>(p: T) =>
    !p.id.startsWith('sample-') && (SHOW_DRAFTS || !p.data.draft);
  const items = [];
  if (kinds.includes('news')) {
    for (const p of (await getNews()).filter(shown)) {
      items.push({
        title: p.data.title,
        description: p.data.description,
        pubDate: p.data.date,
        link: new URL(`/news/${p.id}/`, site).toString(),
        categories: [NEWS_CATEGORIES.find((c) => c.slug === p.data.category)?.name ?? p.data.category],
        enclosure: enclosure(p.data.image, site),
      });
    }
  }
  if (kinds.includes('guides')) {
    for (const g of (await getGuides()).filter(shown)) {
      items.push({
        title: g.data.title,
        description: g.data.description,
        pubDate: g.data.date,
        link: new URL(`/guides/${g.id}/`, site).toString(),
        categories: [GUIDE_CATEGORIES.find((c) => c.slug === g.data.category)?.name ?? g.data.category],
        enclosure: enclosure(g.data.image, site),
      });
    }
  }
  items.sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  return rss({
    title,
    description: SITE.description,
    site,
    items: items.slice(0, MAX_ITEMS),
    customData: `<language>en</language>`,
  });
}
