# TechSpotlight News — Project Brief for Claude Code

> Read this whole file before doing anything. I am the **Product Owner**. You are my **build team**. Work like an experienced product team: plan first, build in small phases, show me results, and wait for my approval at each gate.

---

## 0. About me and how to work with me

- I am **not technical**. I can't write code, run commands, or install software myself. Explain everything in plain English, with no jargon. If you must use a technical word, explain it in one line.
- **Plan before building.** Use plan mode. Don't write code until I approve the plan for that phase.
- **Interview me first.** Ask questions **one at a time**, and give me options when you can, so I can just pick one.
- **Work in small phases** (Section 11). At the end of each phase: show me what changed, tell me how to check it, and wait for my "approved".
- **Never publish or push to the live site** without my explicit "publish" or "approved".
- If something breaks, explain what happened in simple words and what you'll do to fix it.
- Keep a **decision log** (`docs/decisions.md`): every important choice, with the date, the options, what we chose, and why.

---

## 1. Product vision

**TechSpotlight News** gives busy readers in **India and the UAE** short, clear, trustworthy tech news, and honest guides to the software and AI tools worth their time and money.

**Tagline:** "What matters in tech, explained for you."

**Business model:**

> **News briefs bring visitors → Money pages convert them into income**

1. **News briefs** (daily, 2–3 per day): short, fast, useful summaries of what's happening in tech, each ending with "What this means for you".
2. **Money pages** (1–2 per week): evergreen guides that stay useful for months. Examples: best-of lists, X vs Y comparisons, honest reviews based on my own free-trial testing, alternatives pages, and how-to guides. They earn mainly through my **PartnerStack** affiliate programs, plus Amazon.in / Flipkart / Amazon.ae and Google AdSense.
3. **Every news brief links to at least one related money page.** This is how traffic turns into income.

**Primary goal: income.** Every decision should help bring visitors to money pages and convert them honestly.

**Important constraint:** I do not buy hardware to review. Reviews are of **software and AI tools** that I test on **free trials or free plans**.

---

## 2. Audience

- **India:** students, young professionals, and small business owners who want to know which apps and tools are worth using.
- **UAE:** professionals and the Indian/South Asian community in the UAE (higher-value traffic, so give UAE-specific angles where possible).
- Reading mostly on **mobile**, in short moments, so pages must be fast and easy to scan.

---

## 3. Brand

**Name:** TechSpotlight News (one word "TechSpotlight", then "News").

**Logo files** (I will upload them; put them in the site's images/brand folder):
- `techspotlight-logo.svg`: main logo for light backgrounds
- `techspotlight-logo-dark.svg`: for dark backgrounds or dark mode
- `techspotlight-icon.svg`: square icon, for the favicon and social images

**Logo idea:** a stage spotlight shaped like the letter **T**. The lamp is the crossbar, the beam is the stem, and the dot in the circle of light is "the story in the spotlight".

**Colours:**
| Name | Hex | Use |
|---|---|---|
| Ink Indigo | `#221C5A` | Main brand colour, headings, header |
| Spotlight Amber | `#FFAE1A` | Highlights, buttons, live/new markers (use sparingly) |
| Soft Glow | `#FFD36E` | Light accent backgrounds |
| Muted Violet | `#5B5694` | Secondary text, "News" in the logo |
| Paper | `#FFFFFF` / `#F6F5FB` | Page backgrounds |
| Night | `#141233` | Dark mode background |

**Font:** Sora (Google Fonts), bold for headings and regular for body. Use a system font fallback.

**Design direction:** clean, calm, and confident; not flashy. The amber "spotlight" accent is the one memorable thing, so everything else stays quiet. Mobile-first, very fast, easy to read. Support both light and dark mode.

---

## 4. Writing voice (use for EVERYTHING)

Write like a thoughtful, grounded person explaining tech to a friend who trusts them. The voice is inspired by Satya Nadella's style (empathetic, clear, calm, humble, optimistic), adapted for tech writing. It is **my** voice: never mention Nadella or Microsoft, and never use his quotes.

Create a skill at `.claude/skills/techspotlight-voice/SKILL.md` containing these rules, and make every writing task use it:

1. **Empathy first:** start from the reader's real life (their budget, their phone, their work), not the specs.
2. **Clarity and compression:** short sentences and one idea per paragraph. Cut anything that doesn't help the reader understand or decide.
3. **Learn-it-all, not know-it-all:** say what we know, what we don't know yet, and what to watch. Label rumours clearly.
4. **Calm optimism, no hype:** never use words like "insane", "mind-blowing", "game-changer" or "killer". Prefer phrases like "worth a closer look", "a meaningful step", or "here's what changes for you".
5. **Technology serves people:** the reader is the hero, not the product.
6. **Honest and fair:** respect every company, and when you criticise, be specific. Never invent experiences I didn't have.
7. **Human, not template:** vary sentence length. No robotic openers ("In today's fast-paced world…", "Let's dive in!") and no endings like "In conclusion…".
8. **My take is required:** every post has a short personal view from me. If I haven't given one, insert `[YOUR TAKE: <specific question>]` and ask me before publishing.
9. Use simple English that Indian and UAE readers follow easily.

---

## 5. Website structure

- **Home:** the latest news briefs, plus a featured "Guides" section (money pages).
- **News:** categories AI, Apps & Software, Phones & Gadgets, Launches, Deals.
- **Guides** (money pages): categories Best Tools, Comparisons, Reviews, Alternatives, How-to.
- **About:** who I am, and why readers can trust this site.
- **Editorial Policy:** how we research, how AI assists, how I test tools, and how we correct mistakes.
- **Affiliate Disclosure, Privacy Policy, Contact.** These are required for AdSense and affiliate programs.
- **Search**, plus simple category pages.
- **SEO basics:** sitemap, RSS feed, clean URLs, meta titles and descriptions, Open Graph images, and article schema.

**Page templates:**
- **News brief** (300–600 words): headline → 3-line summary → what happened → why people are talking → **What this means for you** (India/UAE angle) → my take → related guide box (money page link) → sources.
- **Money page** (1,200–2,500 words): who this is for → quick verdict or summary table → **How I tested** (my free-trial notes and screenshots) → detailed sections → pros and cons → pricing (official, with date checked) → alternatives → FAQ → my verdict → affiliate buttons.

---

## 6. Monetisation rules

- **PartnerStack** is the main income source. I will give you my affiliate links per tool. Keep them in one central file (`data/affiliates.json`: tool name, link, program, commission notes, date added) so links can be updated in one place.
- Amazon.in / Flipkart / Amazon.ae links are optional on gadget-related posts. Country-based buttons: India visitors see Amazon.in + Flipkart; UAE visitors see Amazon.ae; Flipkart is never shown to UAE visitors.
- Every affiliate link gets `rel="sponsored nofollow"`.
- Pages with affiliate links show this near the top: "This post contains affiliate links. I may earn a commission at no extra cost to you."
- Don't show fixed Amazon prices; use "Check latest price" instead. For software, show the official price with "(checked on <date>)".
- **Never** recommend a tool only because it pays more. Honest recommendations are what keep readers coming back.
- **AdSense:** prepare ad slots in the layout (turned off for now). We apply once we have about 20–30 quality posts.

---

## 7. The content pipeline (the core of this project)

**Flow:** Research → Write → Audit (max 2 revision rounds) → **I approve** → Publish

### Agents to create (`.claude/agents/`)

1. **researcher:** finds trending tech news (last 24–48h) across news sites, Reddit, Hacker News, Google Trends (India and UAE) and public social posts, and ranks stories by buzz and relevance to India/UAE. For money pages, it gathers official features, pricing and plans from the tool's own website. It always records source links and labels rumours.
2. **writer:** writes drafts using the TechSpotlight voice skill and the page templates. It never copies text from sources, adds a related money-page link to every news brief, and adds placeholders for what it needs from me (`[IMAGE: …]`, `[AFFILIATE: tool]`, `[YOUR TAKE: …]`).
3. **auditor:** a strict quality checker. It scores each draft against this checklist and returns **PASS** or **REVISE** with specific fixes:
   - [ ] Facts match the sources (names, dates, prices, versions)
   - [ ] No copied sentences from any source; no images taken from other websites
   - [ ] Follows the voice rules (no hype words, clear, empathetic, human)
   - [ ] "What this means for you" section has a real India/UAE angle
   - [ ] News brief links to a relevant money page
   - [ ] Affiliate disclosure is present, and links are tagged `rel="sponsored nofollow"`
   - [ ] SEO title (under 60 characters) and meta description (under 155 characters) use the main keyword
   - [ ] Not thin or mass-produced: it adds real value beyond the sources (AdSense and Google spam-policy risk)
   - [ ] `[YOUR TAKE]` is present or flagged for me
   - [ ] Rumours are clearly labelled
   If the result is REVISE, the writer fixes it and the auditor checks again. **Maximum 2 rounds.** After that, show me the draft with the auditor's remaining notes.
4. **seo-editor** (optional, add later): suggests keywords, internal links and titles. It can use Semrush if I connect it.

### Commands to create (`.claude/commands/`)

- **/daily-news:** the researcher finds 5 candidate stories → I pick 2–3 → the writer drafts them → the auditor reviews → I see each final draft with a "NEEDS FROM YOU" checklist.
- **/money-page <tool or topic>:** asks me for my free-trial notes, screenshots and PartnerStack link, one question at a time → research → write → audit → show me.
- **/publish <post>:** final check → show me a preview → wait for my OK → build → commit with a clear message → push to the main branch → Cloudflare publishes → tell me the live link.
- **/weekly-review:** a summary of posts published, what's pending, ideas for next week's money pages, and any broken links. (Later it can include traffic and earnings numbers that I paste in.)
- **/status:** tell me in plain English where the project is and what's next.

### Drafts

Drafts live in `drafts/YYYY-MM-DD/`. They are never visible on the live site until I say "publish".

---

## 8. Images and media rules

- Allowed: official press kits and brand media kits (PartnerStack programs usually provide them), my own screenshots from testing, graphics I make in Canva, and embeds of the original YouTube video or social post.
- Never download or copy images from other websites.
- Every image gets alt text. Compress images for fast loading.

---

## 9. Tech setup (keep it simple)

- The code is in my GitHub repository, and hosting is **Cloudflare Pages** (free; every push to main goes live automatically).
- The domain will be bought on Cloudflare (to be confirmed).
- First, **inspect the existing repository** (it was a tech review site). Tell me in plain English what's there, and recommend whether to rebuild or adapt it. **Don't delete anything without asking me.**
- Prefer a fast static site, with content as Markdown files, so posts are easy to add and edit.
- Use connectors I have when helpful: **Firecrawl** (research), **Gmail** (morning summary emails), **Canva** (featured images), **Google Drive** (backups of briefs). Ask before using any connector for the first time.
- Replace the old `CLAUDE.md` with a new one built from this brief (keep any useful rules from the old one, and list what you changed).

---

## 10. Success metrics (what we measure)

Track these in `docs/metrics.md` and update them weekly with numbers I paste in:
- Posts published per week (news briefs and money pages)
- Auditor first-try PASS rate
- Visitors (and the share from the UAE)
- Affiliate clicks and conversions
- Monthly income from PartnerStack, Amazon/Flipkart and AdSense

**Targets for the first 90 days:** 20 money pages, about 120 news briefs (2–3 per day, 5 days a week), and an AdSense application by about week 6.

---

## 11. Phases and approval gates

**Phase 0: Discovery (no code)**
Inspect the repository, then interview me (one question at a time). Write `docs/PRD.md` (a short product spec), `docs/roadmap.md` (Now / Next / Later), and `docs/risks.md` (top risks and what we'll do about each). → *I approve.*

**Phase 1: Foundation**
Brand, design system, page templates, and all required pages (About, Editorial Policy, Affiliate Disclosure, Privacy, Contact). Deploy to Cloudflare, with SEO basics. → *I approve.*

**Phase 2: Pipeline**
Voice skill, the three agents, the commands, the drafts folder, and the affiliates file. Test the full flow on one news brief and one money page. → *I approve.*

**Phase 3: Content launch**
First 10 money pages (you suggest topics that match my PartnerStack programs; I choose), then daily news briefs. → *I approve each post.*

**Phase 4: Automation**
A daily scheduled task (cloud) that runs research and drafts every morning and emails me a summary. A weekly review routine. → *I approve.*

**Parked for later** (don't build now): YouTube Shorts video pipeline (Higgsfield/ElevenLabs), regional-language version, social media auto-posting, newsletter.

---

## 12. Definition of done (for every phase)

- It works on mobile and desktop, in both light and dark mode.
- I've been told in plain English how to check it myself.
- The decision log is updated.
- Nothing went live without my approval.

---

**Start now with Phase 0:** inspect the repository, summarise what you found in plain English, then ask me your first question.
