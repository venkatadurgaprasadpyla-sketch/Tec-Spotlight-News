import { getCollection, type CollectionEntry } from 'astro:content';

// Drafts show only in local preview and on Cloudflare preview links (any branch
// other than main). The live site, built from main, never includes them.
// Cloudflare Workers Builds sets WORKERS_CI_BRANCH; Pages sets CF_PAGES_BRANCH.
const branch = process.env.WORKERS_CI_BRANCH ?? process.env.CF_PAGES_BRANCH;
export const SHOW_DRAFTS = import.meta.env.DEV || (branch !== undefined && branch !== 'main');

const visible = <T extends { data: { draft: boolean } }>(e: T) => SHOW_DRAFTS || !e.data.draft;
const byDate = (a: { data: { date: Date } }, b: { data: { date: Date } }) =>
  b.data.date.valueOf() - a.data.date.valueOf();

export async function getNews(): Promise<CollectionEntry<'news'>[]> {
  return (await getCollection('news', visible)).sort(byDate);
}

export async function getGuides(): Promise<CollectionEntry<'guides'>[]> {
  return (await getCollection('guides', visible)).sort(byDate);
}

export function formatDate(d: Date): string {
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

export function readingTime(text: string): number {
  return Math.max(1, Math.round(text.split(/\s+/).length / 220));
}
