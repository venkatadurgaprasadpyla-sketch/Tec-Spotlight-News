import type { APIContext } from 'astro';
import { buildFeed } from '../lib/feed';
import { SITE } from '../data/site';

export const GET = (context: APIContext) => buildFeed(context, ['news', 'guides'], SITE.name);
