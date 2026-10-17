# TechSpotlight News

Short, honest tech news from around the world, and money-earning guides, for readers worldwide (owner's decision 2026-10-15; the original brief's India/UAE focus no longer applies).
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
- Live address: https://tec-spotlight-news.techspotlightid-official.workers.dev (free Cloudflare address; the site address is set in `src/data/site.ts` and `astro.config.mjs`; switch both to techspotlight.news once the domain is bought). Went live 2026-10-15, then Pyla asked to take it offline the same day: `data/live.json` `"online": false` makes the live build (`scripts/build.mjs`) show only a "coming soon" page hidden from Google. To bring it back (only when Pyla says so), set `"online": true` and push to `main`. Previews always show the full site.
- RSS feeds: `/rss.xml` (everything), `/news/rss.xml`, `/guides/rss.xml` (`src/lib/feed.ts`): last 50 items with summary, section and cover photo.
- Commands: `npm run dev` (local preview), `npm run build` (build into `dist/`), `npm run check` (type check), `npm run seo-check -- <post.md>` (SEO and quality score).
- Preview links are hidden from Google (`noindex` and a blocking `robots.txt`); only `main` is indexed.
- Site-wide settings (name, author, contact email, ads on/off): `src/data/site.ts`.
- Brand: colours in `src/styles/global.css`. Logo: the terminal-style "> tech_spotlight" wordmark, inline in `src/components/Header.astro` with a blinking cursor (">_" icon on phones); logo files in `public/brand/`, icons at the root of `public/`, brand kit and spec in `brand-kit/` (older logos in `public/images/brand/` and `images/brand/` are no longer used). Font: Sora, self-hosted.

## Content

- News briefs: `src/content/news/<slug>.md`. Guides (money pages): `src/content/guides/<slug>.md`. The fields each post needs are defined in `src/content.config.ts`.
- `draft: true` posts show only on preview links and local preview, never on the live site. The two `sample-*` posts are layout samples and must stay drafts.
- Work-in-progress drafts from the content pipeline live in `drafts/YYYY-MM-DD/`, outside the site.
- News brief layout (500–800 words): headline, 3-line summary (`summary`), cover photo, then a story told like a senior journalist: lede, nut graf, the facts, the open question, the reader angle (what it means for readers, wherever they are), a judgment section that weighs good and bad (no separate "My view"), kicker. Related TechSpotlight stories are linked inside the text where natural. Headings are written for each story, never generic. Then related guide (`relatedGuide`) and sources (`sources`). Full rules: the `techspotlight-voice` skill.
- Guide layout: who it's for, quick verdict (`verdict`) and summary table, How I tested, details, pros and cons, pricing with date checked, alternatives, FAQ, my verdict, affiliate buttons (`tools`).

## Quality pipeline and SEO

Every post goes: researcher (facts and **keyword plan**) → writer → **auditor** (facts and rules) → **editor-in-chief** (story scorecard: every metric 4+, average 4.5+) → **seo-cto** (keywords, metadata, links, build, `npm run seo-check` GATE PASSED: no fails, 90%+). Only then is it saved in `src/content/` with `draft: true` and pushed to the preview for Pyla. Agents are in `.claude/agents/`.

A scheduled task runs `/auto-news` every 5 hours (8 to 10 stories a day, 2 per run): it checks the site's health first and fixes problems, then picks the top new stories in tech, big companies (Fortune 500) and science worldwide, runs the full pipeline, and saves them as drafts on the preview. It never publishes.

- Keywords: Semrush (`us` database plus other big markets the story touches) when the account has API units; otherwise Google's search suggestions via Firecrawl. Each post sets `focusKeyword` and 3–6 `keywords`, used naturally (people first, never stuffed).
- `seoTitle` 30–60 characters, `description` 120–155, short hyphenated web address, cover at least 1200 wide and under 250 KB.

## Money rules

- Affiliate links live only in `data/affiliates.json`. In posts, write `[Try Gamma](affiliate:gamma)`; the build swaps in the real link with `rel="sponsored nofollow"`. Buttons come from the `tools` field.
- Posts with affiliate links set `affiliate: true` so the disclosure shows at the top.
- Gadget posts can add `shop` links. India sees Amazon.in and Flipkart; UAE sees Amazon.ae; Flipkart is never shown in the UAE. Never show fixed Amazon prices ("Check latest price"). Software prices show "(checked on <date>)".
- Never recommend a tool because it pays more.
- Banners: one affiliate banner mid-article (`src/lib/rehype-inline-promo.mjs`), two tool cards at the end of each article and three on the home page (`PromoCards`), picked by topic from the `topics` in `data/affiliates.json`. A tool shows only once its `link` is filled in; previews show labelled samples. The disclosure shows whenever a banner does. Banners run on every story, sensitive ones included (owner's decision 2026-10-15); never set `promos: false` unless Pyla asks.
- AdSense spaces (`AdSlot`): top and end of articles, top and middle of the home page. They stay off until `SITE.adsEnabled` is turned on after approval; previews show dashed placeholders.
- Related stories: the build links the first mention of another story's search phrase (`src/lib/rehype-related-links.mjs`, max 3) and fills the "Related stories" box by shared topics (`src/lib/related.mjs`). Links to drafts become plain text on the live site.

## Writing voice

Empathy first, short clear sentences, calm and humble, no hype words ("insane", "game-changer", "killer", "mind-blowing"), label rumours, the reader is the hero. Every news brief is written in one chief tech journalist voice (no separate "My view" section): Claude weighs the good and the bad and lands on a calm conclusion, in a calm Nadella-style voice (owner's choice 2026-10-15); Pyla can edit it before "publish". UAE stories (owner's rule 2026-10-15): positive and appreciative, crediting the UAE authorities by name, with open questions framed as a constructive "what to watch"; facts stay accurate and nothing is invented or left out. Guides still need the owner's own testing. Never invent experiences the owner didn't have. Full rules: section 4 of the brief (a voice skill comes in Phase 2).

## Images

Only official press kits, the owner's own screenshots, their Canva graphics, or free stock photos from Unsplash or Pexels (never Unsplash+). Every post gets a cover photo at the top (`image`, `imageAlt`, `imageCredit`); stock photos always credit the photographer. Never copy images from news sites or other websites. Every image needs alt text. Images go in `public/images/posts/<slug>/`.

## Changes from the old CLAUDE.md

There was no previous CLAUDE.md in this repository (it held only a README), so this file is new.

## Token-saving rules (Pyla, 2026-10-17)

- I am non-technical. Keep replies short and simple: say what you did and what I need to do next, in a few lines. No long explanations unless I ask.
- Only do what I ask. Do not rewrite, reorganize or "improve" other code or files.
- Search for the exact part you need before opening files. Never read whole large files or the whole project when a small part is enough.
- Don't re-read files you've already read in this session unless they changed.
- Never print large output in the chat (scraped pages, logs, long code). Save it to a file and give me a 2-3 line summary.
- Group related changes and do them in one go instead of many small back-and-forth steps.
- If my request is unclear, ask me ONE short question before starting instead of guessing and redoing work.
- Don't run builds or tests repeatedly. Run once at the end unless something fails.
- If a task is simple (small text edit, rename, quick fix), tell me I can switch to a cheaper model with /model.
- When a task is finished or the chat is getting long, remind me to use /clear (new task) or /compact (same task).
