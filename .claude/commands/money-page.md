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

5. Use the **researcher** agent (guide mode) for official features, plans and prices.
6. Use the **writer** agent to draft the guide into `drafts/<today>/`, using only Pyla's real testing notes.
7. Use the **auditor** agent. If REVISE, back to the writer. Maximum 2 rounds.
8. Show Pyla the final draft, the auditor's result and a **NEEDS FROM YOU** checklist.
9. Stop. Nothing is published until Pyla says "publish".
