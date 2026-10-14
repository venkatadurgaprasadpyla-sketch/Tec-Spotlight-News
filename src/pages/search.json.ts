import type { APIRoute } from 'astro';
import { getNews, getGuides } from '../data/posts';

// A small index the search page downloads and filters in the browser.
export const GET: APIRoute = async () => {
  const news = (await getNews()).map((p) => ({
    t: p.data.title,
    d: p.data.description,
    u: `/news/${p.id}/`,
    k: 'News',
    x: (p.body ?? '').slice(0, 2000),
  }));
  const guides = (await getGuides()).map((g) => ({
    t: g.data.title,
    d: g.data.description,
    u: `/guides/${g.id}/`,
    k: 'Guide',
    x: (g.body ?? '').slice(0, 2000),
  }));
  return new Response(JSON.stringify([...guides, ...news]), {
    headers: { 'Content-Type': 'application/json' },
  });
};
