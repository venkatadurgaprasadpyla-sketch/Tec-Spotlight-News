// Builds the site. When the live site is switched off (data/live.json
// "online": false), the live build (main) outputs only a "coming soon" page,
// hidden from Google, instead of the full site. Previews always build in full.
import { readFileSync, rmSync, mkdirSync, writeFileSync } from 'node:fs';
import { execSync } from 'node:child_process';

const { online } = JSON.parse(readFileSync(new URL('../data/live.json', import.meta.url), 'utf8'));
const branch = process.env.WORKERS_CI_BRANCH ?? process.env.CF_PAGES_BRANCH;

if (branch === 'main' && !online) {
  const page = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex, nofollow"><title>TechSpotlight News</title><style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#221C5A;color:#fff;font-family:system-ui,sans-serif;text-align:center}p{opacity:.8}</style></head><body><main><h1>TechSpotlight News</h1><p>Coming soon.</p></main></body></html>`;
  rmSync('dist', { recursive: true, force: true });
  mkdirSync('dist', { recursive: true });
  writeFileSync('dist/index.html', page);
  writeFileSync('dist/404.html', page);
  writeFileSync('dist/robots.txt', 'User-agent: *\nDisallow: /\n');
  console.log('Live site is switched off (data/live.json): built the "coming soon" page only.');
} else {
  execSync('astro build --force', { stdio: 'inherit' });
}
