---
description: The scheduled run (every 5 hours). Checks the site's health, finds the top new stories in tech, big companies and science worldwide, writes two briefs, runs all three quality gates and saves them as drafts on the preview for Pyla.
---

Run the automatic news flow. It runs on a schedule about 5 times a day, so nobody is there to pick stories: you choose, then Pyla reviews. **Target: 2 stories per run (8 to 10 a day). Never publish.**

## 0. Site health check (you are the site's CTO)

Before writing anything, make sure the site is healthy, and fix what you can:

- `git pull origin claude/project-thread-t0ejfd`, then `npm run build`, `npm run check` and `npm run seo-check`. Every post must build and pass (GATE PASSED).
- Check the latest Cloudflare preview build on PR #1 succeeded (the Cloudflare bot comment). If it failed, read the log, fix it and push before anything else.
- Spot-check the source links of the newest drafts with curl (or Firecrawl); replace or flag dead ones. Also open the live site's home page and newest story and check they load.
- Fix small problems yourself (broken build, failing check, dead link, oversized image). Anything that needs Pyla (money, publishing, deleting) goes in the message to Pyla instead.

## If Firecrawl is out of credits (Pyla's rule, 2026-10-17)

Test one cheap Firecrawl search first. If it says the credits ran out, **don't stop**: use Claude's own web search (`WebSearch`, `mode: "extended"`) instead, everywhere this file says Firecrawl.

- **Direct web access (Pyla opened it, 2026-10-23):** pages can now be read directly with `WebFetch` or `curl`: official sources, company newsrooms, Hacker News (`https://hacker-news.firebaseio.com/v0/topstories.json`), Google Trends (`https://trends.google.com/trending/rss?geo=US`), Google suggestions (`https://suggestqueries.google.com/complete/search?client=firefox&q=<phrase>`) and the live site itself. Use these before Firecrawl. Some news sites still refuse (for example Reuters); search results are enough for those.
- **Finding stories and facts:** WebSearch for the last few hours' news, the trending lists and each story's facts, and open the official source directly to confirm. Every key fact (numbers, dates, names, quotes) must be confirmed by **two independent results**, one of them the official source. Anything only one result supports is cut or labelled.
- **Gates:** the auditor, editor-in-chief and seo-cto all use WebSearch for their checks. Keyword ideas come from Google suggestions read directly, plus WebSearch (related and "people also ask" searches).
- **Covers (Pyla's rule, 2026-10-23):** image sites can now be downloaded directly with curl. Pick the cover in this order:
  1. **Official press photo** from the company's or agency's own newsroom or media page, for a story about that company or agency (for example Apple Newsroom, Samsung Newsroom, Microsoft Source, NASA, ESA, the company's official Flickr). Use it only if the page offers it for press or public use. Never use photos credited to news agencies or photo libraries (Reuters, AP, AFP, Getty and similar), never embargoed images, and never images from news sites. Credit: `name: "<Company> Newsroom"` (or the photographer if the page names one), `source: "Press photo"` (`"Public domain"` for NASA), `url:` the page the photo came from.
  2. **Free stock photo** from Unsplash or Pexels (never Unsplash+), crediting the photographer.
  3. **Title card** only when neither fits: `python3 scripts/title-card.py <slug> "<headline>" "<section name>"`, with `imageCredit` `name: "TechSpotlight News"`, `source: "Title card"`, `url: "https://tec-spotlight-news.techspotlightid-official.workers.dev/"`, and alt text "TechSpotlight title card: <headline>".
  If a download is blocked, use the next option and note the blocked site in the run report.
- Tell Pyla once that the backup was used; don't repeat it every run.

## 1. Find what's new (since the last run, worldwide)

**Breaking news first (Pyla's rule, 2026-10-21).** Before the wider search, the researcher runs a breaking check:
- **Watchlist:** open `drafts/watchlist.md`. Any big event that has finished since the last run (keynotes, launch events, earnings, court rulings, rocket launches) must be covered in this run.
- **Last 6 hours:** search for what broke in the last 6 hours: "breaking tech news" with today's date, and each big company's name with "announces", "unveils", "launches" or "today". Check Google News top tech stories, Hacker News and Google Trends.
- **What counts as breaking:** it happened in the last 6 hours, it involves a big company, a major product or a major science result, and at least three major outlets or a trending list are covering it.
- **Priority:** a breaking story always takes the first slot, and two breaking stories take both. It still goes through every gate; speed never skips a check.
- **Coming up:** when the researcher sees a big event announced for later (date and time), add it to `drafts/watchlist.md` with the time in UTC, so the first run after it ends covers it.

Use the **researcher** agent (news mode). Cover all of these, using direct web access first and Firecrawl only if it has credits:

- **Technology:** AI, apps and software, phones and gadgets, launches, security, chips, internet and platforms.
- **Big companies:** news from major Fortune 500 and global tech companies (Apple, Microsoft, Alphabet/Google, Amazon, Meta, Nvidia, Tesla, Samsung, IBM, Intel, Oracle, Salesforce and others): launches, results, deals, layoffs, lawsuits, regulation.
- **Science and breakthroughs:** major findings in science and technology (space, health tech, energy, quantum, materials, biology, climate tech). Prefer the journal or institution's own announcement (Nature, Science, NASA, ESA, universities, EurekAlert).
- **What people search and share:** Google trending searches (`https://trends.google.com/trending/rss?geo=US`, and `GB`, `IN`, `AE`, keeping only tech and science items), Hacker News front page, Reddit (r/technology, r/artificial, r/science), and Firecrawl search for what people say on X and LinkedIn.
- **News search:** Firecrawl search with `sources: ["news"]` for the last few hours.

Rank by: breaking stories first (see above), then how many people are searching or talking about it, how much it matters to readers worldwide, and whether there are at least two good sources (one official). **Skip anything already covered** in `src/content/news/`, `drafts/` or a previous run's `candidates.md`. Skip celebrity gossip, sports and anything that isn't tech, business-of-tech or science. Never pick a story from one weak source.

## 2. Pick two stories

Pick the top two, preferably from different areas (for example one tech, one science or company story). Add the next best candidates, one line each, to `drafts/<today>/candidates.md` so Pyla can swap and the next run doesn't repeat them.

## 3. Write and check (run the two stories in parallel)

For each story:

1. **researcher:** facts, sources, keyword plan (Semrush if it has API units; otherwise Google suggestions), and a cover photo picked by the cover order above (official press photo first), with the page link and credit.
2. **writer:** draft into `drafts/<today>/news-<slug>.md`, with the right `category` (`ai`, `apps-software`, `phones-gadgets`, `launches`, `deals`, `business` for big-company news, `science` for science and breakthroughs). Write the whole article in one chief tech journalist voice with a fair judgment section (no separate "My view"; see the `techspotlight-voice` skill), and link related TechSpotlight stories where natural. Never claim an experience Pyla didn't have.
3. Get the cover yourself (the researcher has no shell): download the full-size image with curl, look at it, crop and scale it to 1200x630 with ffmpeg, keep it under 250 KB, save it to `public/images/posts/<slug>/cover.jpg`, and look at the result. Write alt text that describes what the photo shows.
4. Run the three gates in order, maximum 3 rounds each, applying each gate's exact fixes: **auditor**, then **editor-in-chief**, then **seo-cto**. No open items are allowed.

## 4. Save as drafts for Pyla

Copy each passed draft to `src/content/news/<slug>.md` with `draft: true`. Run `npm run build`, `npm run check` and `npm run seo-check`. Commit and push to the preview branch (`claude/project-thread-t0ejfd`). **Never push to `main`, never set `draft: false`.**

## 5. Tell Pyla (one short message per run)

In plain English: each headline, why it was picked, the gate results and SEO score, the article's conclusion in one sentence (Pyla can change it), and any site-health problem found or fixed. Keep it short; skip the health part when all is well. If a story didn't pass after 3 rounds, say so and leave it out of the preview. Nothing goes live until Pyla says "publish".

If something blocks the run (no strong new story, a build error you can't fix), save what you have, don't push a broken build, and tell Pyla plainly what happened.
