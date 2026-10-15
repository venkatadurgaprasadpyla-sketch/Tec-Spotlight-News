---
description: Find today's tech stories, let Pyla pick, then write the briefs and run them through the three quality gates.
---

Run the daily news flow. Speak to Pyla in plain English, one question at a time.

1. Use the **researcher** agent (news mode) to find 5 candidate stories from the last 24–48 hours.
2. Show Pyla the 5 as a short numbered list: headline, one line on why it matters for India and the UAE, and the related guide. Ask which to write (the plan is 1 a day; up to 3 is fine). Recommend one.
3. For each chosen story, have the **researcher** make the **keyword plan** (Semrush, or Google suggestions if Semrush has no units) and find a free cover photo.
4. Use the **writer** agent to draft the brief into `drafts/<today>/`, using the keyword plan.
5. Run the three quality gates in order. A draft moves to the next gate only after it passes; if a gate says REVISE, send its notes to the writer and run that gate again (maximum 3 rounds per gate):
   1. **auditor**: facts, originality, money and image rules.
   2. **editor-in-chief**: story, accuracy, voice and reader value (every metric 4+, average 4.5+).
   3. **seo-cto**: keywords, metadata, links, image, build, and `npm run seo-check` showing GATE PASSED (90%+, no fails).
6. When all three pass, save the draft for Pyla: copy it to `src/content/news/<slug>.md` with `draft: true`, put the cover in `public/images/posts/<slug>/`, run `npm run build`, then commit and push to the preview branch (never `main`).
7. Show Pyla each draft with: the preview link, a one-line result from each gate (with the SEO score and focus keyword), and a **NEEDS FROM YOU** checklist (their take, anything else).
8. Stop. Nothing goes live until Pyla says "publish".
