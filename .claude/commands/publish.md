---
description: Publish an approved draft to the live site, only after Pyla says OK.
argument-hint: <draft file or post name>
---

Publish: $ARGUMENTS

1. Find the draft in `src/content/` (saved with `draft: true`) or in `drafts/`. If it's unclear which one, ask Pyla.
2. Final check: no `[YOUR TAKE`, `[IMAGE`, `[AFFILIATE`, `[TESTING NOTE` or `[CONTACT EMAIL` placeholders left; all three gates passed it (auditor, editor-in-chief, seo-cto) or Pyla accepted the notes; `npm run seo-check -- <file>` shows GATE PASSED; every affiliate tool used has a link in `data/affiliates.json`; a news brief's `relatedGuide` exists. Stop and tell Pyla anything that's missing.
3. Make sure it is in `src/content/news/` or `src/content/guides/`, then set `draft: false` and today's date. Copy any images into `public/images/posts/<slug>/`, compressed, with alt text.
4. Run `npm run build` and `npm run check`. Fix any problem before going on.
5. Show Pyla a preview: the title, description, and the address it will have (`https://techspotlight.news/news/<slug>/` or `/guides/<slug>/`). If a Cloudflare preview link is available, share it.
6. **Wait for Pyla's explicit OK** ("publish", "approved", "yes, publish"). Anything else means stop.
7. Commit with a clear message ("Publish news brief: <title>"), merge to `main` and push. Cloudflare Workers Builds puts it live.
8. Tell Pyla the live link, and add the post to this week's count in `docs/metrics.md`.
