import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const common = {
  title: z.string(),
  // Shown in search results and share cards. Keep under 155 characters.
  description: z.string().max(155),
  // Optional shorter title for search engines (under 60 characters).
  seoTitle: z.string().max(60).optional(),
  // The main search phrase this post is written to be found for (from keyword research).
  focusKeyword: z.string().optional(),
  // A few related search phrases and questions the post also answers.
  keywords: z.array(z.string()).default([]),
  date: z.coerce.date(),
  updated: z.coerce.date().optional(),
  author: z.string().default('Pyla'),
  image: z.string().optional(),
  imageAlt: z.string().optional(),
  // Who took the cover photo, shown under it. Needed for free stock photos
  // (for example Unsplash or Pexels).
  imageCredit: z.object({ name: z.string(), source: z.string(), url: z.string().url() }).optional(),
  // Drafts never appear on the live site.
  draft: z.boolean().default(false),
  // True when the post has affiliate links, so the disclosure shows at the top.
  affiliate: z.boolean().default(false),
  // Set to false to keep sponsored banners off a sensitive story (for example child safety).
  promos: z.boolean().default(true),
  // Keys from data/affiliates.json for the "Try it" buttons.
  tools: z.array(z.string()).default([]),
  // Optional shop links for gadget posts (shown by visitor country).
  shop: z
    .object({
      amazonIn: z.string().url().optional(),
      flipkart: z.string().url().optional(),
      amazonAe: z.string().url().optional(),
    })
    .optional(),
};

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    ...common,
    category: z.enum(['ai', 'apps-software', 'phones-gadgets', 'launches', 'deals', 'business', 'science']),
    // The three-line summary shown under the headline.
    summary: z.array(z.string()).min(1).max(3),
    // Slug of the guide this brief points readers to.
    relatedGuide: z.string().optional(),
    sources: z.array(z.object({ name: z.string(), url: z.string().url() })).default([]),
  }),
});

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    ...common,
    category: z.enum(['best-tools', 'comparisons', 'reviews', 'alternatives', 'how-to']),
    // One-sentence verdict shown in the box at the top.
    verdict: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { news, guides };
