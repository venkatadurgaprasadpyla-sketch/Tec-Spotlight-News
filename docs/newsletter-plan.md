# Newsletter plan (draft for Pyla, 23 Oct 2026)

**Goal:** readers subscribe on the site. On the same day each story is published, subscribers get it by email, two stories per email.

Nothing goes live until Pyla says "approved".

## 1. What the reader sees

- **Sign-up boxes** in four places:
  - the home page;
  - the end of every story;
  - the site footer;
  - a new `/newsletter` page.
- **Sign-up form:** one email box and a button. The line above it reads "Two honest tech stories at a time. No spam, leave any time."
- **Confirm step:** a "Confirm your email" message goes out first (double opt-in). This keeps fake sign-ups out and meets privacy laws in Europe, the UK, India and the UAE.
- **Welcome email:** what to expect, plus links to 3 popular stories.
- **Each newsletter:**
  - Two story cards, each with the cover, headline, 3-line summary and a "Read the full story" button.
  - Footer: "Unsubscribe" in one click, and why they got the email.
  - The email carries no ads at first.

## 2. How the pipeline works (automatic)

1. **Only published stories go out.** Drafts are never emailed, so nothing reaches subscribers before Pyla says "publish".
2. **The site checks itself every 30 minutes.** A small free Cloudflare job reads the site's own news feed (`/news/rss.xml`, live site only). It also keeps a list of stories already mailed.
3. **Two new stories means one email.** When 2 stories published today have not been mailed yet, it sends one email with both.
4. **The odd one out gets an end-of-day email.** If one story is left over at 21:00 UTC (2:30 am IST, 1 am UAE), it goes out on its own, so every story published that day is mailed the same day.
5. **Safety.** It sends at most 6 emails a day and never sends the same story twice. A test mode sends only to Pyla's own address first.

## 3. Email service (Pyla creates the account)

| Service | Free plan (third-party reports, Oct 2026; to re-check on their site) | Fit |
|---|---|---|
| **Kit** (recommended) | Up to 10,000 subscribers, no cap on emails, Kit logo in emails | Best for growth if its free plan lets our job send by code (I'll confirm before building) |
| Brevo | 300 emails a day | At up to 5 emails a day, that covers only about 60 subscribers |
| MailerLite | Cut in 2026 to about 250 subscribers and 2,500 emails a month | Too small |

Brevo is on our affiliate starter list. That plays no part in this choice; we pick on fit only.

## 4. What Pyla needs to do (about 20 minutes, once)

1. **Create the email service account** (free) and confirm the email address.
2. **Buy the domain `techspotlight.news`** (already planned). Email services block or spam-folder newsletters sent "from" a Gmail address. A real domain, like `newsletter@techspotlight.news`, is needed for emails to reach inboxes. I'll give click-by-click steps.
3. **Give a postal address** for the email footer. Anti-spam law requires one; a PO box or business address is fine.
4. **Paste one secret key** into Cloudflare. I'll give click-by-click steps.

## 5. Phases

| Phase | What happens | Needs Pyla? |
|---|---|---|
| A | Build the sign-up boxes, `/newsletter` page, privacy-policy update and the sending job on the **preview** only | No |
| B | Pyla creates the account, sets up the domain and adds the key; test emails to Pyla only | Yes |
| C | Pyla says "approved" and the newsletter goes live on the main site | Yes |

## 6. Growing the list (marketing lead)

- **Every story:** ends with the sign-up box ("Liked this? Get the next two by email").
- **Social:** posts link to `/newsletter`.
- **What we track each week:**
  - sign-ups;
  - opens (aim 35%+);
  - clicks (aim 4%+);
  - unsubscribes (keep under 1% per email).
- **Watch-out:** 2 stories per email at ~10 stories a day means up to 5 emails a day. That is a lot, and some readers may unsubscribe. A later option is to let readers pick "every 2 stories" or "one daily round-up". We would add it only if unsubscribes run high.
