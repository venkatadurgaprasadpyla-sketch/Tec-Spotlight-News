// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeAffiliateLinks from './src/lib/rehype-affiliate-links.mjs';
import rehypeRelatedLinks from './src/lib/rehype-related-links.mjs';
import rehypeInlinePromo from './src/lib/rehype-inline-promo.mjs';

export default defineConfig({
  site: 'https://techspotlight.news',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  markdown: {
    rehypePlugins: [rehypeAffiliateLinks, rehypeRelatedLinks, rehypeInlinePromo],
  },
});
