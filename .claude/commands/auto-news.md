---
description: The daily scheduled run. Finds the day's most-talked-about tech story worldwide, writes it, runs all three quality gates and saves it as a draft on the preview for Pyla.
---

Run the automatic daily news flow. It runs on a schedule, so nobody is there to pick a story: you choose, then Pyla reviews.

## 1. Find what's trending (last 24–48 hours, worldwide)

Use the **researcher** agent (news mode), and tell it to gather from all of these (use Firecrawl; direct web access is blocked here):

- **Google's trending searches:** `https://trends.google.com/trending/rss?geo=US`, and the same with `geo=GB`, `geo=IN` and `geo=AE`. Keep only technology items.
- **Social media and communities:** Hacker News front page (`https://news.ycombinator.com/`), Reddit r/technology and r/artificial (top of the day), and Firecrawl search for what people are saying on X and LinkedIn about the top topics.
- **News:** Firecrawl search with `sources: ["news"]` for tech news from the last day, plus official company blogs and press rooms.
- **Most searched:** Google search suggestions (keyword plan step) for the top candidates.

Rank by: how many people are searching or talking about it, how much it matters to readers worldwide, and whether there are at least two good sources (one official). Skip anything already covered in `src/content/news/` or `drafts/`. Skip celebrity gossip, sports and anything that isn't technology.

## 2. Pick one story

Choose the top story (the plan is one brief a day). Save the other four candidates, with one line each, in `drafts/<today>/candidates.md` so Pyla can swap.

## 3. Write and check

1. **researcher:** facts, sources, keyword plan (Semrush if it has API units; otherwise Google suggestions), and a free Unsplash or Pexels cover photo (not Unsplash+).
2. **writer:** draft into `drafts/<today>/news-<slug>.md`. Pyla's view can't be invented: put `[YOUR TAKE: <one specific question for Pyla>]` under a `## My view: ...` heading.
3. Download the cover with Firecrawl's screenshot if the photo site is blocked, crop to 1200x630 with ffmpeg, keep it under 250 KB, and save it to `public/images/posts/<slug>/cover.jpg`.
4. Run the three gates in order, maximum 3 rounds each, applying each gate's exact fixes: **auditor**, then **editor-in-chief**, then **seo-cto**. The only allowed open item is the `[YOUR TAKE]` placeholder.

## 4. Save as a draft for Pyla

Copy the draft to `src/content/news/<slug>.md` with `draft: true`. Run `npm run build`, `npm run check` and `npm run seo-check -- src/content/news/<slug>.md`. Commit and push to the preview branch (`claude/project-thread-t0ejfd`). **Never push to `main`, never set `draft: false`.**

## 5. Tell Pyla

One short message in plain English: the headline, why it was picked (trend or buzz signal), each gate's result, the SEO score, the question for their view, and the other four candidates in one line each. Ask for their view, a different story, or "publish". Nothing goes live until Pyla says "publish".

If something blocks the run (no strong tech story, a gate still failing after 3 rounds, a build error), save what you have, don't push a broken build, and tell Pyla plainly what happened.
