import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getNews, getGuides } from '../data/posts';
import { SITE } from '../data/site';

export async function GET(context: APIContext) {
  const news = (await getNews()).filter((p) => !p.data.draft);
  const guides = (await getGuides()).filter((g) => !g.data.draft);
  const items = [
    ...news.map((p) => ({ title: p.data.title, description: p.data.description, pubDate: p.data.date, link: `/news/${p.id}/` })),
    ...guides.map((g) => ({ title: g.data.title, description: g.data.description, pubDate: g.data.date, link: `/guides/${g.id}/` })),
  ].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  return rss({
    title: SITE.name,
    description: SITE.description,
    site: context.site!,
    items,
  });
}
