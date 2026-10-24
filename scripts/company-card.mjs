// Make an eye-catching "company card" cover (1200x630 JPEG) when no photo is available.
// Shows the company's logo on a bright tile, the company name, the section and the headline.
// Pyla's rule (2026-10-24): every story gets a picture; if there is no photo, use the company name and symbol.
//
// Usage:
//   node scripts/company-card.mjs <slug> "<headline>" "<section>" "<company name>" <logo>[,<logo2>] [#brandcolour]
// <logo> is a file name in assets/logos/ (official logo files; "icon-*.svg" are topic symbols for stories
// without a company). Use "-" for no logo (the company name is then shown as a large wordmark).
// Writes public/images/posts/<slug>/cover.jpg (under 250 KB).
import { readFileSync, mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { resolve, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const [slug, headline, section, company, logoArg = '-', colour = '#FFAE1A'] = process.argv.slice(2);
if (!slug || !headline || !section || !company) {
  console.error('Usage: node scripts/company-card.mjs <slug> "<headline>" "<section>" "<company>" <logo>[,<logo2>] [#colour]');
  process.exit(1);
}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const dataUrl = (file) => {
  const buf = readFileSync(file);
  const type = extname(file) === '.svg' ? 'image/svg+xml' : 'image/png';
  return `data:${type};base64,${buf.toString('base64')}`;
};

// Single-colour logos (Simple Icons, topic icons, pinned-tab marks) get the brand colour.
function logoHtml(name) {
  const file = resolve(ROOT, 'assets/logos', name);
  if (!existsSync(file)) throw new Error(`Logo not found: assets/logos/${name}`);
  if (extname(file) === '.svg') {
    let svg = readFileSync(file, 'utf8').replace(/<\?xml[^>]*>|<!DOCTYPE[^>]*>|<!--[\s\S]*?-->/g, '').trim();
    const mono = !/fill="#|fill:#|<image|<pattern|stroke="#/i.test(svg);
    if (mono) {
      const icon = /stroke="currentColor"/.test(svg);
      svg = svg.replace('<svg', `<svg style="color:${colour}${icon ? '' : `;fill:${colour}`}"`);
    }
    return `<div class="logo">${svg}</div>`;
  }
  return `<div class="logo"><img src="${dataUrl(file)}" alt=""></div>`;
}

const logos = logoArg === '-' ? [] : logoArg.split(',');
const tile = logos.length
  ? logos.map(logoHtml).join('<div class="plus">+</div>')
  : `<div class="wordmark">${esc(company)}</div>`;
const font = dataUrl(resolve(ROOT, 'node_modules/@fontsource-variable/sora/files/sora-latin-wght-normal.woff2')).replace('image/png', 'font/woff2');
const brand = dataUrl(resolve(ROOT, 'public/brand/techspotlight-wordmark-on-dark@2x.png'));
const size = headline.length > 85 ? 46 : headline.length > 60 ? 52 : 58;

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face { font-family: Sora; src: url(${font}) format('woff2'); font-weight: 100 800; }
* { margin: 0; box-sizing: border-box; }
body { width: 1200px; height: 630px; overflow: hidden; font-family: Sora, sans-serif; color: #fff;
  background: radial-gradient(circle at 86% 46%, ${colour}66 0, ${colour}22 26%, transparent 52%),
    radial-gradient(circle at 0% 100%, #2f2580 0, transparent 50%), linear-gradient(135deg, #141233, #1d1850 60%, #141233); }
.dots { position: absolute; inset: 0; background-image: radial-gradient(#ffffff14 1.5px, transparent 1.5px); background-size: 26px 26px;
  mask-image: linear-gradient(90deg, transparent 30%, #000 75%); }
.left { position: absolute; left: 64px; top: 56px; bottom: 56px; width: 660px; display: flex; flex-direction: column; }
.brand { height: 40px; width: auto; align-self: flex-start; }
.chips { margin-top: 44px; display: flex; gap: 12px; align-items: center; }
.chip { background: #FFAE1A; color: #141233; font-weight: 700; font-size: 20px; letter-spacing: .08em; text-transform: uppercase; padding: 8px 16px; border-radius: 999px; }
.who { font-weight: 700; font-size: 22px; letter-spacing: .06em; text-transform: uppercase; color: #FFAE1A; }
h1 { margin-top: 22px; font-weight: 750; font-size: ${size}px; line-height: 1.14; letter-spacing: -.01em;
  display: -webkit-box; -webkit-line-clamp: 5; -webkit-box-orient: vertical; overflow: hidden; }
.bar { margin-top: auto; width: 96px; height: 6px; border-radius: 3px; background: linear-gradient(90deg, #FFAE1A, ${colour}); }
.tile { position: absolute; right: 70px; top: 50%; transform: translateY(-50%) rotate(-3deg); width: 340px; height: 340px; border-radius: 44px;
  background: #fff; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 18px; padding: 44px;
  box-shadow: 0 30px 80px #0009, 0 0 0 10px #ffffff1f, 0 0 90px ${colour}88; }
.logo { display: flex; align-items: center; justify-content: center; width: 100%; flex: 1; min-height: 0; }
.logo svg, .logo img { max-width: 100%; max-height: 100%; width: 100%; height: 100%; object-fit: contain; }
.plus { font-size: 30px; font-weight: 700; color: #141233aa; line-height: 1; }
.wordmark { font-weight: 800; font-size: ${company.length > 10 ? 40 : 54}px; color: ${colour}; text-align: center; line-height: 1.1; }
</style></head><body><div class="dots"></div>
<div class="left"><img class="brand" src="${brand}" alt="">
<div class="chips"><span class="chip">${esc(section)}</span><span class="who">${esc(company)}</span></div>
<h1>${esc(headline)}</h1><div class="bar"></div></div>
<div class="tile">${tile}</div></body></html>`;

const { chromium } = await import(resolve(execFileSync('npm', ['root', '-g']).toString().trim(), 'playwright/index.mjs'));
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html, { waitUntil: 'load' });
await page.evaluate(() => document.fonts.ready);
const outDir = resolve(ROOT, 'public/images/posts', slug);
mkdirSync(outDir, { recursive: true });
const png = resolve(outDir, 'cover.png');
writeFileSync(png, await page.screenshot({ type: 'png' }));
await browser.close();
for (const q of [3, 5, 7, 9]) {
  execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-i', png, '-q:v', String(q), resolve(outDir, 'cover.jpg')]);
  if (readFileSync(resolve(outDir, 'cover.jpg')).length < 250_000) break;
}
execFileSync('rm', [png]);
console.log(`Wrote public/images/posts/${slug}/cover.jpg`);
