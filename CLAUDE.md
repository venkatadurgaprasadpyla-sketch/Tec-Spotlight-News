# TechSpotlight News

Short, honest tech news and money-earning guides for readers in India and the UAE.
The full product brief is `docs/PROJECT-BRIEF.md`; the agreed plan is `docs/PRD.md`, `docs/roadmap.md` and `docs/risks.md`.

## Working with the owner

- The owner (writes as **Pyla**) is not technical. Explain everything in plain English, with no jargon.
- Ask questions one at a time, with options to pick from.
- Work in phases. Show what changed and how to check it, then wait for "approved".
- **Never push to `main` or publish anything without the owner saying "publish" or "approved".** Pushing to `main` puts it live.
- Log every important choice in `docs/decisions.md` (date, options, choice, why).
- Never delete anything without asking.

## The site

- Built with Astro (static site). Hosted on Cloudflare Workers (worker `tec-spotlight-news`, settings in `wrangler.jsonc`); `main` is the live site, every other branch gets a private preview link.
- Commands: `npm run dev` (local preview), `npm run build` (build into `dist/`), `npm run check` (type check).
- Site-wide settings (name, author, contact email, ads on/off): `src/data/site.ts`.
- Brand: colours in `src/styles/global.css`, logos in `public/images/brand/` (originals in `images/brand/`). Font: Sora, self-hosted.

## Content

- News briefs: `src/content/news/<slug>.md`. Guides (money pages): `src/content/guides/<slug>.md`. The fields each post needs are defined in `src/content.config.ts`.
- `draft: true` posts show only on preview links and local preview, never on the live site. The two `sample-*` posts are layout samples and must stay drafts.
- Work-in-progress drafts from the content pipeline live in `drafts/YYYY-MM-DD/`, outside the site.
- News brief layout (500–800 words): headline, 3-line summary (`summary`), cover photo, then a story told like a senior journalist: lede, nut graf, the facts, the open question, the reader angle (India and UAE), Pyla's view under a "My view: ..." heading, kicker. Headings are written for each story, never generic. Then related guide (`relatedGuide`) and sources (`sources`). Full rules: the `techspotlight-voice` skill.
- Guide layout: who it's for, quick verdict (`verdict`) and summary table, How I tested, details, pros and cons, pricing with date checked, alternatives, FAQ, my verdict, affiliate buttons (`tools`).

## Money rules

- Affiliate links live only in `data/affiliates.json`. In posts, write `[Try Gamma](affiliate:gamma)`; the build swaps in the real link with `rel="sponsored nofollow"`. Buttons come from the `tools` field.
- Posts with affiliate links set `affiliate: true` so the disclosure shows at the top.
- Gadget posts can add `shop` links. India sees Amazon.in and Flipkart; UAE sees Amazon.ae; Flipkart is never shown in the UAE. Never show fixed Amazon prices ("Check latest price"). Software prices show "(checked on <date>)".
- Never recommend a tool because it pays more.
- AdSense slots exist (`AdSlot` component) but stay off until `SITE.adsEnabled` is turned on after approval.

## Writing voice

Empathy first, short clear sentences, calm and humble, no hype words ("insane", "game-changer", "killer", "mind-blowing"), label rumours, the reader is the hero. Every post needs the owner's own take; if missing, insert `[YOUR TAKE: <question>]`. Never invent experiences the owner didn't have. Full rules: section 4 of the brief (a voice skill comes in Phase 2).

## Images

Only official press kits, the owner's own screenshots, their Canva graphics, or free stock photos from Unsplash or Pexels (never Unsplash+). Every post gets a cover photo at the top (`image`, `imageAlt`, `imageCredit`); stock photos always credit the photographer. Never copy images from news sites or other websites. Every image needs alt text. Images go in `public/images/posts/<slug>/`.

## Changes from the old CLAUDE.md

There was no previous CLAUDE.md in this repository (it held only a README), so this file is new.
