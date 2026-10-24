// Make an eye-catching "company card" cover (1200x630 JPEG) when no photo is available.
// Shows the company's logo on a bright tile, the company name, the section and the headline.
// Pyla's rule (2026-10-24): every story gets a picture; if there is no photo, use the company name and symbol.
//
// Usage:
//   node scripts/company-card.mjs <slug> "<headline>" "<section>" "<company name>" <logo>[,<logo2>] [#brandcolour]
//     [--doodles icon1,icon2,icon3] [--stat "-43%"]
// --doodles: 2-4 story-themed doodle stickers drawn around the logo, like a Google Doodle (Pyla, 2026-10-24).
//   Names are Lucide icons (https://lucide.dev/icons, ISC licence), e.g. qr-code, house, bot, trending-down, lock-open.
//   They are downloaded once into assets/logos/doodles/.
// --stat: one short number from the story (e.g. "-43%", "US$4.4B") shown as a starburst badge.
// <logo> is a file name in assets/logos/ (official logo files; "icon-*.svg" are topic symbols for stories
// without a company). Use "-" for no logo (the company name is then shown as a large wordmark).
// Writes public/images/posts/<slug>/cover.jpg (under 250 KB).
import { readFileSync, mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { resolve, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const flag = (name) => {
  const i = args.indexOf(name);
  return i === -1 ? '' : args.splice(i, 2)[1] || '';
};
const doodleArg = flag('--doodles');
const stat = flag('--stat');
const [slug, headline, section, company, logoArg = '-', colour = '#FFAE1A'] = args;
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
// Story doodles: white line drawings on bright, slightly tilted stickers around the logo tile.
const STICKER_COLOURS = ['#FFAE1A', colour, '#FF6B9A', '#2DD4BF', '#A78BFA'];
const SPOTS = stat
  ? [[805, 150, -10], [790, 492, 8], [1140, 500, -6]]
  : [[805, 150, -10], [1140, 140, 9], [790, 492, 8], [1140, 500, -6]];
function doodleSvg(name) {
  const dir = resolve(ROOT, 'assets/logos/doodles');
  const file = resolve(dir, `${name}.svg`);
  if (!existsSync(file)) {
    mkdirSync(dir, { recursive: true });
    execFileSync('curl', ['-sfL', '-o', file, `https://cdn.jsdelivr.net/npm/lucide-static@0.460.0/icons/${name}.svg`]);
  }
  return readFileSync(file, 'utf8').replace(/<!--[\s\S]*?-->/g, '').replace(/stroke-width="[^"]*"/, 'stroke-width="2.1"');
}
const doodles = (doodleArg ? doodleArg.split(',') : []).slice(0, SPOTS.length).map((name, i) => {
  const [x, y, r] = SPOTS[i];
  const bg = STICKER_COLOURS[i % STICKER_COLOURS.length];
  return `<div class="sticker" style="left:${x - 52}px;top:${y - 52}px;background:${bg};transform:rotate(${r}deg)">${doodleSvg(name.trim())}</div>`;
}).join('');
const statHtml = stat ? `<div class="stat"><span>${esc(stat)}</span></div>` : '';
const squiggles = doodles ? `<svg class="squiggle" viewBox="0 0 1200 630"><path d="M745 250 C 700 330, 760 400, 720 440" /><path d="M1175 260 C 1195 320, 1150 360, 1180 410" /><path d="M880 560 q 20 -18 40 0 t 40 0 t 40 0 t 40 0" /><circle cx="1060" cy="95" r="6" /><circle cx="742" cy="335" r="4" /><path d="M900 85 l 8 -16 l 8 16 l -16 -10 h 16 z" /></svg>` : '';
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
.left { position: absolute; left: 64px; top: 56px; bottom: 56px; width: ${doodles ? 640 : 660}px; display: flex; flex-direction: column; }
.brand { height: 40px; width: auto; align-self: flex-start; }
.chips { margin-top: 44px; display: flex; flex-wrap: wrap; gap: 10px 12px; align-items: center; }
.chip, .who { white-space: nowrap; }
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
.squiggle { position: absolute; inset: 0; width: 1200px; height: 630px; fill: none; stroke: #ffffff55; stroke-width: 4; stroke-linecap: round; stroke-dasharray: 2 12; }
.squiggle circle { fill: #FFAE1A; stroke: none; } .squiggle path:last-child { fill: #ffffff66; stroke: none; }
.sticker { position: absolute; width: 104px; height: 104px; border-radius: 30px; display: flex; align-items: center; justify-content: center;
  border: 4px solid #fff; box-shadow: 5px 6px 0 #0b0a22, 0 12px 30px #0007; z-index: 2; }
.sticker svg { width: 58px; height: 58px; color: #fff; filter: drop-shadow(1px 2px 0 #0003); }
.stat { position: absolute; left: 1022px; top: 66px; width: 170px; height: 170px; z-index: 3; transform: rotate(10deg);
  display: flex; align-items: center; justify-content: center; background: #FFAE1A; filter: drop-shadow(5px 6px 0 #0b0a22);
  clip-path: polygon(50% 0%, 61% 13%, 78% 7%, 81% 24%, 98% 28%, 91% 44%, 100% 58%, 86% 67%, 88% 85%, 70% 85%, 60% 100%, 47% 89%, 32% 98%, 26% 82%, 9% 80%, 13% 63%, 0% 52%, 11% 39%, 4% 22%, 21% 19%, 25% 3%, 40% 11%); }
.stat span { font-weight: 800; font-size: ${stat.length > 6 ? 26 : 34}px; color: #141233; letter-spacing: -.02em; text-align: center; line-height: 1; padding: 0 20px; }
</style></head><body><div class="dots"></div>${squiggles}
<div class="left"><img class="brand" src="${brand}" alt="">
<div class="chips"><span class="chip">${esc(section)}</span><span class="who">${esc(company)}</span></div>
<h1>${esc(headline)}</h1><div class="bar"></div></div>
<div class="tile">${tile}</div>${doodles}${statHtml}</body></html>`;

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
