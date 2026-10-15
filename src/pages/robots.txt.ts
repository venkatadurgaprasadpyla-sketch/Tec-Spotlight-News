import type { APIRoute } from 'astro';
import { IS_PREVIEW } from '../data/posts';

// Preview links must never appear in Google, or they would compete with the live site.
export const GET: APIRoute = ({ site }) =>
  new Response(
    IS_PREVIEW
      ? 'User-agent: *\nDisallow: /\n'
      : `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap-index.xml', site)}\n`,
    { headers: { 'Content-Type': 'text/plain' } },
  );
