# Graph Report - Tec-Spotlight-News  (2026-10-21)

## Corpus Check
- 73 files · ~25,347 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 3, .css 1, .jsonc 1)

## Summary
- 309 nodes · 475 edges · 23 communities (18 shown, 5 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 14 edges (avg confidence: 0.89)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `c99fcbd4`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- posts.ts
- TechSpotlight News
- TechSpotlight News — Project Brief for Claude Code
- related.mjs
- package.json
- ArticleLayout.astro
- feed.ts
- pages/index.astro
- BaseLayout.astro
- seo-check.mjs
- TechSpotlight voice
- seo-cto.md
- writer.md
- researcher.md
- Roadmap
- tsconfig.json
- content.config.ts
- editor-in-chief.md
- auditor.md
- metrics.md
- risks.md

## God Nodes (most connected - your core abstractions)
1. `TechSpotlight News — Project Brief for Claude Code` - 14 edges
2. `getNews()` - 13 edges
3. `getGuides()` - 13 edges
4. `SITE` - 13 edges
5. `TechSpotlight News` - 11 edges
6. `buildFeed()` - 10 edges
7. `astro` - 9 edges
8. `main()` - 9 edges
9. `rehypeRelatedLinks()` - 9 edges
10. `TechSpotlight News — Product spec (PRD)` - 9 edges

## Surprising Connections (you probably didn't know these)
- `4. Save as drafts for Pyla` --references--> `main()`  [INFERRED]
  .claude/commands/auto-news.md → scripts/title-card.py
- `The site` --references--> `main()`  [INFERRED]
  CLAUDE.md → scripts/title-card.py
- `Working with the owner` --references--> `main()`  [INFERRED]
  CLAUDE.md → scripts/title-card.py
- `buildFeed()` --calls--> `getNews()`  [EXTRACTED]
  src/lib/feed.ts → src/data/posts.ts
- `getStaticPaths()` --calls--> `getNews()`  [EXTRACTED]
  src/pages/news/[slug].astro → src/data/posts.ts

## Import Cycles
- None detected.

## Communities (23 total, 5 thin omitted)

### Community 0 - "posts.ts"
Cohesion: 0.11
Nodes (24): Props, year, all, items, Props, ranked, rest, Props (+16 more)

### Community 1 - "TechSpotlight News"
Cohesion: 0.06
Nodes (23): Changes from the old CLAUDE.md, Code map (Graphify, 2026-10-21), 0. Site health check (you are the site's CTO), 1. Find what's new (since the last run, worldwide), 2. Pick two stories, 3. Write and check (run the two stories in parallel), 4. Save as drafts for Pyla, 5. Tell Pyla (one short message per run) (+15 more)

### Community 2 - "TechSpotlight News — Project Brief for Claude Code"
Cohesion: 0.07
Nodes (27): Decision log, How content gets made, How it earns, Not doing now, Targets for the first 90 days (resized to the owner's time), TechSpotlight News — Product spec (PRD), The one-line idea, The site (+19 more)

### Community 3 - "related.mjs"
Cohesion: 0.12
Nodes (20): @astrojs/sitemap, yaml, { online }, SHOW_SAMPLES, file, rehypeAffiliateLinks(), visit(), collectHrefs() (+12 more)

### Community 4 - "package.json"
Cohesion: 0.08
Nodes (25): dependencies, astro, @astrojs/rss, @astrojs/sitemap, @fontsource-variable/sora, yaml, devDependencies, @astrojs/check (+17 more)

### Community 5 - "ArticleLayout.astro"
Cohesion: 0.12
Nodes (15): Props, items, Props, boxes, Props, SHOW_DRAFTS, article, breadcrumbs (+7 more)

### Community 6 - "feed.ts"
Cohesion: 0.16
Nodes (11): astro, DISCLOSURE_TEXT, SITE, Props, buildFeed(), enclosure(), Kind, hasEmail (+3 more)

### Community 7 - "pages/index.astro"
Cohesion: 0.14
Nodes (16): Props, Tool, file, loadTools(), pickPromos(), PROMO_REL, el(), promoElement() (+8 more)

### Community 8 - "BaseLayout.astro"
Cohesion: 0.11
Nodes (8): btn, links, IS_PREVIEW, canonical, imageUrl, Props, Item, params

### Community 9 - "seo-check.mjs"
Cohesion: 0.26
Nodes (10): allWords(), BANNED_OPENERS, check(), count(), flesch(), GENERIC_HEADINGS, HYPE, imageSize() (+2 more)

### Community 10 - "TechSpotlight voice"
Cohesion: 0.22
Nodes (8): A worldwide audience, How a senior journalist thinks, Linking related stories, Self-check before handing over, Stories about the UAE (owner's rule, 2026-10-15), Story structure for news briefs (500–800 words), Style rules, TechSpotlight voice

### Community 11 - "seo-cto.md"
Cohesion: 0.29
Nodes (6): 1. Run the automatic score, 2. Keywords (judgement the script can't make), 3. Metadata and Google News readiness, 4. Technical checks, Scorecard, Your answer

### Community 12 - "writer.md"
Cohesion: 0.33
Nodes (5): Before writing, Guide (1,200–2,500 words), News brief (500–800 words), Rules, Search keywords

### Community 13 - "researcher.md"
Cohesion: 0.40
Nodes (4): Guide mode (for /money-page), Keyword plan (for every story or guide that will be written), News mode (for /daily-news), Rules

### Community 14 - "Roadmap"
Cohesion: 0.40
Nodes (4): Later, Next, Now, Roadmap

### Community 15 - "tsconfig.json"
Cohesion: 0.40
Nodes (4): astro/tsconfigs/strict, exclude, extends, include

### Community 16 - "content.config.ts"
Cohesion: 0.40
Nodes (4): collections, common, guides, news

### Community 17 - "editor-in-chief.md"
Cohesion: 0.50
Nodes (3): Hard stops (any one means REVISE, whatever the score), Scorecard (score each 1 to 5), Your answer

## Knowledge Gaps
- **3 isolated node(s):** `@astrojs/check`, `typescript`, `astro/tsconfigs/strict`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 175 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `astro` connect `feed.ts` to `posts.ts`, `related.mjs`, `package.json`, `BaseLayout.astro`, `content.config.ts`?**
  _High betweenness centrality (0.046) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `getNews()` (e.g. with `byDate()` and `visible()`) actually correct?**
  _`getNews()` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `@astrojs/check`, `typescript`, `astro/tsconfigs/strict` to the rest of the system?**
  _3 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `posts.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.10631229235880399 - nodes in this community are weakly interconnected._
- **Why does `@fontsource-variable/sora` connect `package.json` to `BaseLayout.astro`?**
  _High betweenness centrality (0.031) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `getGuides()` (e.g. with `byDate()` and `visible()`) actually correct?**
  _`getGuides()` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Should `TechSpotlight News` be split into smaller, more focused modules?**
  _Cohesion score 0.06417112299465241 - nodes in this community are weakly interconnected._