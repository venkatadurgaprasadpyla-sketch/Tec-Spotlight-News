---
description: The scheduled run (every 5 hours). Checks the site's health, finds the top new stories in tech, big companies and science worldwide, writes two briefs, runs all three quality gates and saves them as drafts on the preview for Pyla.
---

Run the automatic news flow. It runs on a schedule about 5 times a day, so nobody is there to pick stories: you choose, then Pyla reviews. **Target: 2 stories per run (8 to 10 a day). Never publish.**

## 0. Site health check (you are the site's CTO)

Before writing anything, make sure the site is healthy, and fix what you can:

- `git pull origin claude/project-thread-t0ejfd`, then `npm run build`, `npm run check` and `npm run seo-check`. Every post must build and pass (GATE PASSED).
- Check the latest Cloudflare preview build on PR #1 succeeded (the Cloudflare bot comment). If it failed, read the log, fix it and push before anything else.
- Spot-check the source links of the newest drafts with Firecrawl; replace or flag dead ones.
- Fix small problems yourself (broken build, failing check, dead link, oversized image). Anything that needs Pyla (money, publishing, deleting) goes in the message to Pyla instead.

## 1. Find what's new (since the last run, worldwide)

Use the **researcher** agent (news mode). Cover all of these, using Firecrawl (direct web access is blocked here):

- **Technology:** AI, apps and software, phones and gadgets, launches, security, chips, internet and platforms.
- **Big companies:** news from major Fortune 500 and global tech companies (Apple, Microsoft, Alphabet/Google, Amazon, Meta, Nvidia, Tesla, Samsung, IBM, Intel, Oracle, Salesforce and others): launches, results, deals, layoffs, lawsuits, regulation.
- **Science and breakthroughs:** major findings in science and technology (space, health tech, energy, quantum, materials, biology, climate tech). Prefer the journal or institution's own announcement (Nature, Science, NASA, ESA, universities, EurekAlert).
- **What people search and share:** Google trending searches (`https://trends.google.com/trending/rss?geo=US`, and `GB`, `IN`, `AE`, keeping only tech and science items), Hacker News front page, Reddit (r/technology, r/artificial, r/science), and Firecrawl search for what people say on X and LinkedIn.
- **News search:** Firecrawl search with `sources: ["news"]` for the last few hours.

Rank by: how many people are searching or talking about it, how much it matters to readers worldwide, and whether there are at least two good sources (one official). **Skip anything already covered** in `src/content/news/`, `drafts/` or a previous run's `candidates.md`. Skip celebrity gossip, sports and anything that isn't tech, business-of-tech or science. Never pick a story from one weak source.

## 2. Pick two stories

Pick the top two, preferably from different areas (for example one tech, one science or company story). Add the next best candidates, one line each, to `drafts/<today>/candidates.md` so Pyla can swap and the next run doesn't repeat them.

## 3. Write and check (run the two stories in parallel)

For each story:

1. **researcher:** facts, sources, keyword plan (Semrush if it has API units; otherwise Google suggestions), and a free Unsplash or Pexels cover photo (not Unsplash+).
2. **writer:** draft into `drafts/<today>/news-<slug>.md`, with the right `category` (`ai`, `apps-software`, `phones-gadgets`, `launches`, `deals`, `business` for big-company news, `science` for science and breakthroughs). Write the `## My view: ...` section yourself, as a neutral, independent tech journalist who weighs the good and the bad (owner's choice; see the `techspotlight-voice` skill). Never claim an experience Pyla didn't have.
3. Get the cover with Firecrawl's screenshot if the photo site is blocked, crop to 1200x630 with ffmpeg, keep it under 250 KB, save it to `public/images/posts/<slug>/cover.jpg`.
4. Run the three gates in order, maximum 3 rounds each, applying each gate's exact fixes: **auditor**, then **editor-in-chief**, then **seo-cto**. No open items are allowed.

## 4. Save as drafts for Pyla

Copy each passed draft to `src/content/news/<slug>.md` with `draft: true`. Run `npm run build`, `npm run check` and `npm run seo-check`. Commit and push to the preview branch (`claude/project-thread-t0ejfd`). **Never push to `main`, never set `draft: false`.**

## 5. Tell Pyla (one short message per run)

In plain English: each headline, why it was picked, the gate results and SEO score, the "My view" line in one sentence (Pyla can change it), and any site-health problem found or fixed. Keep it short; skip the health part when all is well. If a story didn't pass after 3 rounds, say so and leave it out of the preview. Nothing goes live until Pyla says "publish".

If something blocks the run (no strong new story, a build error you can't fix), save what you have, don't push a broken build, and tell Pyla plainly what happened.
