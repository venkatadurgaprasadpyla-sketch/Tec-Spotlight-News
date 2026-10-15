# TechSpotlight brand kit: logo, header and favicons

This folder contains everything needed to put the new TechSpotlight logo on the website. Part 1 is for Durga (no coding needed). Part 2 is the technical spec for Claude Code.

---

## Part 1: What to do (plain steps)

1. **Unzip** `techspotlight-brand-kit.zip`. You'll get a folder called `brand-kit`.
2. **Open your website project in Claude Code** (the same project you used to build TechSpotlight).
3. **Put the `brand-kit` folder inside the project**, at the top level, next to files like `package.json`. In the Claude Code desktop app you can drag the folder in; otherwise ask Claude Code: *"I've downloaded a folder called brand-kit to my Downloads, please copy it into this project's root."*
4. **Paste this message into Claude Code:**

   > Read `brand-kit/README-FOR-CLAUDE-CODE.md` and follow Part 2 to add the new TechSpotlight logo, header and favicons to this site. Keep the blinking cursor. Don't change any page content, nav links or URLs. Show me a local preview and wait for my approval before deploying.

5. **Check the preview** Claude Code shows you. Look for the blinking amber cursor in the header on desktop, the small `>_` icon on a phone-sized screen, and the new icon in the browser tab.
6. **Approve and deploy** when you're happy. Say *"Looks good, deploy it."*
7. **YouTube avatar:** upload `social/youtube-avatar-800.png` in YouTube Studio under Customization, then Branding, then Picture. It's already sized for YouTube's circle crop.

Want to see the result before touching the site? Open `reference/header-preview.html` in your browser. It's a working demo of the header in light and dark themes.

---

## Part 2: Implementation spec (for Claude Code)

### Goal

Replace the current site header logo with the TechSpotlight terminal-style logo, add a full favicon set, and add a default social share image. The logo's cursor blinks. Keep everything else on the site unchanged.

### Brand tokens (already in the site's `:root`)

| Token | Value | Used for |
|---|---|---|
| `--header-bg` | `#221C5A` (dark theme `#100E2A`) | Header background, icon background |
| `--header-text` | `#FFFFFF` | Wordmark text, icon chevron |
| `--accent` | `#FFAE1A` | The `>` prompt in the wordmark, the `_` bar in the icon file |
| `--glow` | `#FFD36E` | Blinking cursor, nav link colour, focus outline |
| `--font` | Sora Variable | Nav and all site text (unchanged) |

The wordmark is **outlined vector paths** (JetBrains Mono Medium converted to shapes), so it needs no extra font download and renders identically everywhere. Do not replace it with live text.

### Files in this kit

```
brand-kit/
├── README-FOR-CLAUDE-CODE.md        this guide
├── logo/
│   ├── techspotlight-wordmark-on-dark.svg    full logo, white text (for the indigo header)
│   ├── techspotlight-wordmark-on-light.svg   full logo, indigo text (for white backgrounds)
│   ├── techspotlight-wordmark-on-dark@2x.png PNG fallbacks (96px tall)
│   ├── techspotlight-wordmark-on-light@2x.png
│   └── techspotlight-icon.svg                compact ">_" icon, rounded square
├── favicon/
│   ├── favicon.ico            16/32/48 multi-size
│   ├── favicon.svg            modern browsers
│   ├── favicon-16.png, favicon-32.png
│   ├── apple-touch-icon.png   180x180, full-bleed (iOS rounds it)
│   ├── icon-192.png, icon-512.png
│   ├── icon-maskable-512.png  Android adaptive icon (safe-zone padded)
│   ├── icon-maskable.svg      source for the maskable icon
│   └── site.webmanifest
├── social/
│   ├── og-image-1200x630.png  default link-preview image
│   └── youtube-avatar-800.png channel avatar (for Durga to upload manually)
└── reference/
    ├── header.html            drop-in header markup with inline SVG logo + icon
    ├── header.css             all header styles, blink animation, responsive swap
    └── header-preview.html    standalone working demo (open in a browser)
```

### Steps

**1. Inspect the project first.** Identify the framework (likely Astro, given the `@fontsource`-style "Sora Variable" font and Cloudflare Workers deployment), the static assets folder (usually `public/`), the base layout that renders `<head>`, and the existing header component. Report what you find before editing.

**2. Copy static assets.**
- Copy everything in `brand-kit/favicon/` to the **root** of the static folder (for example `public/favicon.ico`, `public/site.webmanifest`). The manifest references root paths.
- Copy `brand-kit/logo/` to `public/brand/` and `brand-kit/social/og-image-1200x630.png` to `public/brand/og-image.png`.
- Remove or replace any old favicon files so there's no conflict.

**3. Add head tags** to the base layout `<head>`:

```html
<link rel="icon" href="/favicon.ico" sizes="48x48">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="theme-color" content="#221C5A">
```

For social sharing, add a **default** `og:image` and `twitter:image` pointing to the absolute URL of `/brand/og-image.png` (use the site's configured base URL). Only use it as a fallback: if an article already sets its own image, the article's image wins. Add `<meta name="twitter:card" content="summary_large_image">` if not already present.

**4. Replace the header logo.** Use `reference/header.html` as the source of truth for the logo markup:
- Copy the entire `<a class="ts-logo">…</a>` block, including **both** inline SVGs (`.ts-logo__wordmark` and `.ts-logo__icon`), into the existing header component in place of the current logo or site title.
- Keep the site's **existing** nav items, links, search, theme toggle and anything else already in the header. The `ts-nav` links in the reference file are placeholders only. Apply the `ts-nav` styling to the existing nav if it fits; otherwise keep the existing nav styling and only make sure link colour uses `--glow`.
- The SVGs must stay **inline** (not `<img>`) because CSS colours and animates parts of them.

**5. Add the styles** from `reference/header.css` to the header component's styles (or the global stylesheet). Keep these behaviours exactly:
- **Blink:** `.ts-logo__cursor` blinks with `animation: ts-cursor-blink 1.06s steps(1, end) infinite`. Pure CSS, no JavaScript. This was explicitly requested by the site owner; keep it.
- **Reduced motion:** under `@media (prefers-reduced-motion: reduce)` the cursor stays solid and does not blink. Required for accessibility.
- **Responsive swap:** the header is a size container (`container-type: inline-size`). At `@container (max-width: 560px)` the full wordmark hides and the `>_` icon shows, and the icon's amber bar blinks instead.
- **Dark theme:** the site switches themes with `:root[data-theme="dark"]`; the header background follows `--header-bg`. No separate logo file is needed for dark mode.
- **Sizes:** wordmark `height: 34px`, icon `36px × 36px`. Header padding `14px 20px`, inner width follows `--max` (1120px).
- If the site's existing header styles conflict (for example a fixed height or a different background), reconcile them so the result matches `reference/header-preview.html`.

**6. Accessibility.** The logo link has `aria-label="TechSpotlight News home"` and both SVGs are `aria-hidden="true"`. Keep visible keyboard focus (`:focus-visible` outline in `--glow`). Don't add a second visible site name next to the logo.

**7. Preview, then stop.** Run the local dev server, check the pages below, and show the site owner. **Do not deploy until they approve.**

### Acceptance checklist

- [ ] Desktop (≥ 1024px): full `> tech_spotlight` logo in the header with a blinking gold cursor; nav unchanged and readable.
- [ ] Phone width (375px): the `>_` icon replaces the wordmark, the amber bar blinks, nothing overflows or wraps awkwardly.
- [ ] Dark theme: header turns `#100E2A`, logo still readable.
- [ ] OS "reduce motion" turned on: cursor is solid, no blinking.
- [ ] Browser tab shows the new `>_` favicon (hard refresh; favicons cache aggressively).
- [ ] Keyboard Tab reaches the logo and shows a focus outline; Enter goes to the home page.
- [ ] Pasting an article URL into a link-preview checker shows the article's own image, and a page without one shows `og-image.png`.
- [ ] No console errors; no layout shift in the header on load.
- [ ] Page content, URLs, nav links and other pages are unchanged.

### Do not

- Don't convert the wordmark back to live text or load an extra font for it.
- Don't use JavaScript or GIFs for the blink.
- Don't change the Sora font, site colours, article templates or routes.
- Don't commit the `brand-kit/` folder to the deployed site's public output; it can stay in the repo for reference, or be removed after the assets are copied.
