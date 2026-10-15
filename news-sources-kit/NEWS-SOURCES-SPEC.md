# TechSpotlight: RSS feed and news-source monitoring spec

Two jobs in one file. Part A adds TechSpotlight's own RSS feed. Part B builds the "monitor" stage of the content pipeline: it watches hundreds of sources, finds what's trending, and hands a daily shortlist of 5 topics to the existing research → write → audit → approve → publish flow. **UAE tech news is a dedicated focus area** with its own sources, scoring boost and guaranteed shortlist slot.

**For Durga:** copy this folder (`news-sources-kit`) into your website project, then paste this into Claude Code:

> Read `news-sources-kit/NEWS-SOURCES-SPEC.md`. Do Part A first and show me the feed working. Then plan Part B with me before building it: tell me the setup, any accounts or costs, and how I'll see the daily shortlist. Wait for my approval at each step.

---

## Part A: TechSpotlight's own RSS feed

1. Add a feed at `/rss.xml` covering news briefs and reviews, newest first, last 50 items. If the site is Astro, use `@astrojs/rss`.
2. Each item: title, absolute link, publish date, a 1–2 sentence summary (not the full article), category, and the featured image as `enclosure` or `media:content`.
3. Add autodiscovery to every page's `<head>`:
   `<link rel="alternate" type="application/rss+xml" title="TechSpotlight News" href="/rss.xml">`
4. Optional: separate feeds at `/news/rss.xml` and `/reviews/rss.xml`.
5. Validate the output (well-formed XML, valid RSS 2.0, absolute URLs, correct dates) and show Durga the feed in the local preview.

---

## Part B: news-source monitoring

### What it produces

Once a day (and on demand), a **shortlist of the 5 hottest topics** for TechSpotlight's audience, plus a separate **UAE shortlist of the top 3 UAE tech topics**. Each topic includes a one-line summary, why it's trending (source count, social buzz, trend match), and links to every source that covered it. This shortlist is the input to the existing research and writing stage.

### Hard rules (protect the site's AdSense approval and reputation)

- **Monitor, never republish.** Store only each item's title, link, short summary, date and source. Never store or publish full article text from other sites.
- **Every published brief is original writing** with a visible link to the original sources. Copied or lightly reworded content risks AdSense rejection and search penalties.
- **Respect robots.txt, terms of service and rate limits.** Use the `user_agent` from `sources.yaml` (fill in the real site URL and contact email). Use conditional requests (`ETag` / `If-Modified-Since`) and cache results.
- **No scraping of platforms that forbid it.** X, LinkedIn, Instagram, TikTok and Threads are excluded (see "Social media" below).
- **SEC EDGAR** requires a descriptive User-Agent with a contact email and limits request rates; follow its published fair-access rules.

### Step 1: Agree the setup with Durga

Before building, propose and get approval for: where it runs (suggested: Cloudflare Workers cron triggers, since the site already deploys to Cloudflare), where items are stored (suggested: Cloudflare D1), how often it polls (suggested: every 30 minutes for news, every 6 hours for company sources), any costs beyond free tiers, and how Durga sees the shortlist (for example a private `/admin/shortlist` page, or an email each morning).

### Step 2: Load `sources.yaml`

`sources.yaml` is the starter registry, grouped into tech news, major news, science and research, company blogs, India regional sources, press wires, the **`uae_tech` focus section**, social signals and trending signals. Entries are one of three types:
- `url`: a known feed URL.
- `pattern`: generated from a URL template in `patterns` (Google News search, Reddit, YouTube, arXiv, SEC EDGAR, Bluesky, Mastodon, Google Trends).
- `discover`: a page whose feed must be found by autodiscovery (step 3).

`authority` (0–1) weights how much a source's coverage counts in ranking. Official company blogs are 1.0.

### Step 3: Validate every source (first run, then weekly)

For each entry: fetch it, confirm it parses as RSS/Atom with recent items, and record status. For `discover` entries, read the page's `<link rel="alternate" type="application/rss+xml|atom+xml">` tags; if none exist, fall back to a Google News search pattern for that source's name. Look up YouTube channel IDs from channel names. **Disable and log** anything that fails; never keep a broken feed silently. Produce a short report for Durga: working, fixed by fallback, disabled.

### Step 4: Fortune 500 companies

Most Fortune 500 companies don't publish RSS, so cover them with three routes, generated into `pipeline/companies.generated.yaml`:

1. **Company newsroom feed**, via autodiscovery on each company's newsroom or press page, where one exists.
2. **Google News search** per company: `"Company Name"` combined with tech terms (AI, launch, software, cloud, chip, data, app, cybersecurity). This keeps an oil or retail company's tech news and skips everything else.
3. **SEC EDGAR 8-K filings** (US public companies, by CIK) for major official announcements.

Get the company list (name, website, CIK where applicable) from a public source and note which year's list it is. Poll company sources in batches spread across the day, not all at once, to stay well within rate limits.

### Step 5: Social media and trending signals

These measure **buzz**, not facts. A story is only shortlisted if real news sources cover it.

- **Hacker News:** front-page items with 100+ points.
- **Reddit:** hot posts in the listed subreddits; upvotes and comments count as buzz.
- **YouTube:** new uploads from the listed tech channels show which products people are talking about.
- **Bluesky and Mastodon:** profile feeds, empty for now; Durga can add accounts later.
- **Google Trends:** daily trending searches for US, India and UAE; boost stories that match a trending search.
- **Wikipedia top pageviews:** daily spikes on tech topics as a backup trend signal.
- **Not included:** X, LinkedIn, Instagram, TikTok and Threads. They offer no free, permitted way to read feeds (X's API is paid). Revisit only if Durga decides the cost is worth it.

### Step 5b: UAE focus area

UAE tech news gets dedicated coverage, defined in the `uae_tech` section of `sources.yaml`:

- **Official sources:** WAM (Emirates News Agency), Dubai and Abu Dhabi media offices, the UAE government portal, TDRA and Dubai Future Foundation. Treat these as confirmation for UAE policy, regulation and government tech launches.
- **UAE news outlets:** Gulf News, Khaleej Times, The National, Arabian Business, Gulf Business, Zawya, Wamda and Computer News Middle East.
- **UAE companies and ecosystem:** G42, e&, du, Hub71, Dubai Internet City and MBZUAI, through the UAE edition of Google News (`google_news_search_uae`).
- **Broad UAE nets:** Google News UAE searches for UAE tech, AI, Dubai and Abu Dhabi launches, gadget launches and prices in the UAE, and startup funding.
- **Social and trends:** r/dubai, r/abudhabi and r/UAE as buzz signals, plus Google Trends for `AE`.
- **Events:** during the event weeks listed in `uae_tech.events` (for example GITEX Global), boost matching topics. Durga fills in each year's dates; skip events whose dates are still placeholders.
- **Arabic sources:** included but **off by default** (`arabic_optional.enabled: false`). If Durga turns them on, translate headlines to English before clustering, and never publish translated text as-is.

**How a topic counts as UAE:** it comes from a `uae_tech` source, or it names the UAE, Dubai, Abu Dhabi, Sharjah or a listed UAE company or body, or it matches a Google Trends `AE` search. Tag these clusters `focus: uae`. A global launch only counts as UAE if a UAE source covers its UAE availability, pricing or impact (for example "iPhone launches in the UAE at AED X").

### Step 6: Group, score and shortlist

1. **De-duplicate and cluster:** group items about the same event across sources (title similarity plus embeddings), so "Apple launches X" from 15 sites is one topic.
2. **Score each cluster** (tune weights with Durga):
   - coverage: number of distinct sources, weighted by `authority`
   - freshness: newer is better; drop anything older than `max_item_age_hours`
   - buzz: HN points, Reddit engagement, YouTube uploads on the topic
   - trend match: matches a Google Trends search in US/IN/AE
   - fit: relevance to TechSpotlight (gadgets, AI, software updates, deals, India angle) and to the PartnerStack "money pages"
   - UAE focus boost: extra weight for clusters tagged `focus: uae`, larger when an official UAE source confirms it or it falls in an event week
   - official confirmation: bonus if a company blog or SEC filing confirms it
3. **Shortlist the top 5** each morning, plus 5 reserves. Exclude topics already published on TechSpotlight in the last 7 days.
4. **Guaranteed UAE slot:** at least 1 of the top 5 is the best UAE topic, if one meets a minimum quality score (agree the threshold with Durga). Never force a weak UAE story in just to fill the slot.
5. **UAE shortlist:** separately list the top 3 UAE topics every day, so Durga can choose to publish more UAE stories.

### Step 7: Hand-off and visibility

Write both shortlists (main top 5 and UAE top 3) to the agreed place (step 1). Each topic: headline, 2-sentence summary, score breakdown, all source links, and suggested angle for TechSpotlight readers. For UAE topics, also note UAE pricing in AED and local availability when sources mention them, since the site shows AED prices and UAE store links to UAE visitors. Nothing is written or published automatically; Durga's existing approve-then-publish rule still applies.

### Acceptance checklist

- [ ] `/rss.xml` validates and appears in the page `<head>`.
- [ ] Validation report shows working, fallback and disabled sources.
- [ ] Fortune 500 companies generated with at least one working route each (newsroom, Google News, or EDGAR).
- [ ] One test run produces a shortlist of 5 clustered, scored topics with source links.
- [ ] The same run produces a UAE shortlist of 3 topics, and the main top 5 includes a UAE topic when one qualifies.
- [ ] Every `uae_tech` source is in the validation report as working, fallback or disabled.
- [ ] No full-text copies of other sites' articles are stored anywhere.
- [ ] Running costs confirmed with Durga before going live.
