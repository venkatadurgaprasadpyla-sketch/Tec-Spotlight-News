// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeAffiliateLinks from './src/lib/rehype-affiliate-links.mjs';

export default defineConfig({
  site: 'https://techspotlight.news',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  markdown: {
    rehypePlugins: [rehypeAffiliateLinks],
  },
});
