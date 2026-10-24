// Make a bold "poster" cover (1200x630 JPEG) when no photo is available (style A, Pyla's choice 2026-10-24).
// The company's colour fills the picture, its logo is shown big, and a short hook of 3-6 words grabs attention;
// faint story doodles sit behind the logo, like a Google Doodle. The full headline is shown under the picture
// on the site, so the picture never repeats it.
//
// Usage:
//   node scripts/company-card.mjs <slug> "<hook>" "<sub line>" "<label>" "<company>" <logo>[,<logo2>] "#colour"
//     [--doodles icon1,icon2,icon3] [--keep-colours]
// <hook>: 3-6 words, facts from the story only; wrap one word or number in *stars* to highlight it.
// <sub line>: one short line under the hook. <label>: e.g. "Tesla · Earnings".
// <logo>: a file in assets/logos/ (official logo files or Simple Icons marks; "-" shows the company name instead).
// Logos are shown in white unless --keep-colours is given (for logos whose colours are the mark, like Microsoft).
// --doodles: Lucide icon names (https://lucide.dev/icons, ISC licence), downloaded once into assets/logos/doodles/.
// Writes public/images/posts/<slug>/cover.jpg (under 250 KB).
import { readFileSync, mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { resolve, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const flag = (name, takesValue = true) => {
  const i = args.indexOf(name);
  if (i === -1) return takesValue ? '' : false;
  return takesValue ? args.splice(i, 2)[1] || '' : !!args.splice(i, 1);
};
const doodleArg = flag('--doodles');
const keepColours = flag('--keep-colours', false);
const [slug, hook, sub, label, company, logoArg = '-', colour = '#2f2580'] = args;
if (!slug || !hook || !sub || !label || !company) {
  console.error('Usage: node scripts/company-card.mjs <slug> "<hook>" "<sub line>" "<label>" "<company>" <logo> "#colour" [--doodles a,b,c] [--keep-colours]');
  process.exit(1);
}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const dataUrl = (file, type) => `data:${type};base64,${readFileSync(file).toString('base64')}`;
const cleanSvg = (file) => readFileSync(file, 'utf8').replace(/<\?xml[^>]*>|<!DOCTYPE[^>]*>|<!--[\s\S]*?-->/g, '').trim();

// Dark version of the brand colour for the edges of the poster.
const mix = (hex, t) => {
  const n = parseInt(hex.slice(1), 16);
  return '#' + [16, 8, 0].map((s) => Math.round(((n >> s) & 255) * t).toString(16).padStart(2, '0')).join('');
};
const dark = mix(colour, 0.22);
const mid = mix(colour, 0.75);

function logoHtml(name) {
  const file = resolve(ROOT, 'assets/logos', name);
  if (!existsSync(file)) throw new Error(`Logo not found: assets/logos/${name}`);
  const inner = extname(file) === '.svg'
    ? cleanSvg(file).replace('<svg', /stroke="currentColor"/.test(cleanSvg(file)) ? '<svg style="color:#fff"' : '<svg style="fill:#fff;color:#fff"')
    : `<img src="${dataUrl(file, 'image/png')}" alt="">`;
  return `<div class="logo${keepColours ? '' : ' white'}">${inner}</div>`;
}

function doodleSvg(name) {
  const dir = resolve(ROOT, 'assets/logos/doodles');
  const file = resolve(dir, `${name}.svg`);
  if (!existsSync(file)) {
    mkdirSync(dir, { recursive: true });
    execFileSync('curl', ['-sfL', '-o', file, `https://cdn.jsdelivr.net/npm/lucide-static@0.460.0/icons/${name}.svg`]);
  }
  return cleanSvg(file).replace(/stroke-width="[^"]*"/, 'stroke-width="1.6"');
}

const logos = logoArg === '-' ? [] : logoArg.split(',');
const art = logos.length
  ? `<div class="art${logos.length > 1 ? ' two' : ''}">${logos.map(logoHtml).join('')}</div>`
  : `<div class="art word">${esc(company)}</div>`;
const icons = doodleArg ? doodleArg.split(',').map((d) => doodleSvg(d.trim())) : [];
const SPOTS = [[640, 40], [770, 95], [905, 28], [1040, 92], [1150, 30], [700, 235], [1165, 220], [640, 430], [765, 500],
  [905, 545], [1040, 505], [1160, 450], [690, 330], [1130, 345]];
const pattern = icons.length
  ? SPOTS.map(([x, y], i) => `<div class="pd" style="left:${x}px;top:${y}px;transform:rotate(${((i * 37) % 50) - 25}deg)">${icons[i % icons.length]}</div>`).join('')
  : '';
const hookHtml = esc(hook).replace(/\*([^*]+)\*/g, '<mark>$1</mark>');
const font = dataUrl(resolve(ROOT, 'node_modules/@fontsource-variable/sora/files/sora-latin-wght-normal.woff2'), 'font/woff2');
const brand = dataUrl(resolve(ROOT, 'public/brand/techspotlight-wordmark-on-dark@2x.png'), 'image/png');

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face { font-family: Sora; src: url(${font}) format('woff2'); font-weight: 100 800; }
* { margin: 0; box-sizing: border-box; }
body { width: 1200px; height: 630px; overflow: hidden; position: relative; font-family: Sora, sans-serif; color: #fff;
  background: radial-gradient(circle at 82% 50%, ${colour} 0, ${mid} 30%, ${dark} 78%); }
.pd { position: absolute; width: 66px; height: 66px; opacity: .2; }
.pd svg { width: 100%; height: 100%; color: #fff; }
.art { position: absolute; right: 28px; top: 50%; transform: translateY(-50%); width: 430px; height: 430px;
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 40px; filter: drop-shadow(0 18px 36px #0009); }
.art.two .logo { height: 170px; }
.logo { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; }
.logo svg, .logo img { width: 100%; height: 100%; object-fit: contain; }
.logo.white img, .logo.white svg { filter: brightness(0) invert(1); }
.art.word { font-weight: 800; font-size: ${company.length > 10 ? 64 : 100}px; line-height: 1; text-align: center; letter-spacing: -.03em; }
.txt { position: absolute; left: 64px; top: 58px; bottom: 58px; width: 640px; display: flex; flex-direction: column; }
.brand { height: 36px; width: auto; align-self: flex-start; }
.tag { align-self: flex-start; margin-top: 36px; background: #fff; color: ${dark}; font-weight: 800; font-size: 21px; letter-spacing: .1em;
  text-transform: uppercase; padding: 8px 16px; border-radius: 6px; }
h1 { max-width: 620px; margin-top: 20px; font-weight: 800; font-size: 104px; line-height: 1; letter-spacing: -.03em; text-shadow: 0 6px 30px #0006; }
h1 mark { background: #FFD23F; color: #141233; padding: 0 14px; border-radius: 10px; box-decoration-break: clone; -webkit-box-decoration-break: clone; text-shadow: none; }
p { margin-top: auto; font-size: 27px; font-weight: 600; line-height: 1.3; opacity: .94; }
</style></head><body>${pattern}${art}
<div class="txt"><img class="brand" src="${brand}" alt=""><span class="tag">${esc(label)}</span>
<h1>${hookHtml}</h1><p>${esc(sub)}</p></div></body></html>`;

const { chromium } = await import(resolve(execFileSync('npm', ['root', '-g']).toString().trim(), 'playwright/index.mjs'));
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html, { waitUntil: 'load' });
await page.evaluate(async () => {
  await document.fonts.ready;
  // Shrink the hook until the hook and the sub line fit without touching.
  const h1 = document.querySelector('h1');
  const p = document.querySelector('p');
  let size = 104;
  while (size > 56 && h1.getBoundingClientRect().bottom > p.getBoundingClientRect().top - 18) {
    size -= 4;
    h1.style.fontSize = `${size}px`;
  }
});
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
