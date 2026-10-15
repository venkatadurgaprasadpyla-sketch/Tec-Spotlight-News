# Decision log

| Date | Decision | Options considered | Chosen | Why |
|---|---|---|---|---|
| 2026-10-14 | Rebuild or adapt the old site? | Adapt an old tech review site; start fresh | Start fresh | The repository only had a one-line README, and the owner confirmed there is no old site to bring over. |
| 2026-10-14 | Domain name | Owner-chosen name; suggestions | techspotlight.news (to buy on Cloudflare) | Matches the brand exactly. Registry lookup on 2026-10-14 showed it unregistered. |
| 2026-10-14 | First affiliate programs to plan money pages around | Owner picks from PartnerStack directory; suggested starter five | Gamma, QuillBot, ElevenLabs, 1Password, Brevo | Mix of AI, safety and small-business tools with free plans or trials. Apply once the site has a few good posts. |
| 2026-10-14 | Weekly pace | ~1 hour a day (2-3 briefs/day, 1-2 guides/week); 3-5 hours a week (1 brief/day, 1 guide/week) | 3-5 hours a week: 1 brief a day, 1 guide a week | Fits the owner's time, since every post needs their approval and take. Grow later. 90-day targets in the brief will be resized in the PRD. |
| 2026-10-14 | Where the owner is based | India; UAE; both | Both | Lets the About page speak credibly to both audiences. |
| 2026-10-14 | Writer name shown on the site | Real full name; pen name | Pyla | Owner's choice. Used as the byline and on the About page. |
| 2026-10-14 | How to build the site | Astro; Hugo; WordPress | Astro 5 | Posts are plain text files, pages are very fast, free, and works well with Cloudflare Pages. Astro 5 is the well-proven version. |
| 2026-10-14 | Where the Sora font loads from | Google Fonts; self-hosted | Self-hosted | Faster, and readers' details aren't sent to Google just to load a font. |
| 2026-10-14 | Web addresses for categories | /news/ai/; /news/category/ai/ | /news/category/ai/ | Keeps post addresses short (/news/<post>/) and avoids clashes between post and category names. |
| 2026-10-14 | How to show sample posts | No samples; samples marked as drafts | Two sample posts marked as drafts | They show the layouts on preview links but never appear on the live site. |
| 2026-10-15 | Writing voice and content helpers | As in the brief | Voice skill, researcher, writer and auditor helpers, and five commands, as written in the brief | Follows section 7 of the brief. Drafts stay in drafts/ until Pyla says "publish". |
