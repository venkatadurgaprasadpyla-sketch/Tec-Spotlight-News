---
description: Find today's tech stories, let Pyla pick, then write and audit the news briefs.
---

Run the daily news flow. Speak to Pyla in plain English, one question at a time.

1. Use the **researcher** agent (news mode) to find 5 candidate stories from the last 24–48 hours.
2. Show Pyla the 5 as a short numbered list: headline, one line on why it matters for India and the UAE, and the related guide. Ask which to write (the plan is 1 a day; up to 3 is fine). Recommend one.
3. For each chosen story, use the **writer** agent to draft a news brief into `drafts/<today>/`.
4. Use the **auditor** agent on each draft. If REVISE, send the notes back to the writer and audit again. Maximum 2 rounds.
5. Show Pyla each final draft with:
   - the auditor's result (and any remaining notes),
   - a **NEEDS FROM YOU** checklist (their take, images, affiliate links).
6. Stop. Nothing is published until Pyla runs `/publish` or says "publish".
