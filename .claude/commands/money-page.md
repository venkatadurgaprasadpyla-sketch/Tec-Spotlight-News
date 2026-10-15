---
description: Write a guide (money page) about a tool or topic, based on Pyla's own free-trial testing.
argument-hint: <tool or topic>
---

Write a guide about: $ARGUMENTS

Speak to Pyla in plain English and ask **one question at a time**:

1. Which kind of guide? Offer: Review, Comparison (X vs Y), Best tools, Alternatives, How-to. Recommend one.
2. Their free-trial notes: what they tried, for how long, what they liked and didn't.
3. Screenshots from their testing (they can upload them here).
4. Their affiliate link for each tool, if they have one. Add it to `data/affiliates.json` with the program, commission notes and today's date.

Then:

5. Use the **researcher** agent (guide mode) for official features, plans and prices, plus the **keyword plan** (Semrush, or Google suggestions if Semrush has no units).
6. Use the **writer** agent to draft the guide into `drafts/<today>/`, using only Pyla's real testing notes and the keyword plan.
7. Run the three quality gates in order (maximum 3 rounds each; on REVISE, back to the writer): **auditor** (facts and rules), **editor-in-chief** (every metric 4+, average 4.5+), **seo-cto** (keywords, metadata, links, build, and `npm run seo-check` GATE PASSED).
8. When all three pass, save it for Pyla: copy it to `src/content/guides/<slug>.md` with `draft: true`, run `npm run build`, commit and push to the preview branch (never `main`).
9. Show Pyla the preview link, a one-line result from each gate, and a **NEEDS FROM YOU** checklist.
10. Stop. Nothing is published until Pyla says "publish".
