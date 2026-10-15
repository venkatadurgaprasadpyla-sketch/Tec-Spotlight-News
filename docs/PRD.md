# TechSpotlight News — Product spec (PRD)

*Draft for approval · 14 October 2026 · Source: [PROJECT-BRIEF.md](PROJECT-BRIEF.md) plus the Phase 0 interview (see [decisions.md](decisions.md)).*

## The one-line idea

Short, honest tech news from around the world for busy readers everywhere, where every news brief points to a useful guide that can earn money. (Changed 2026-10-15: the site was first planned for India and the UAE; the owner widened it to a worldwide audience.)

**Tagline:** "What matters in tech, explained for you."

## Who it is for

- **Readers worldwide:** students, professionals and small business owners who want to understand tech news and choose apps and AI tools.
- No country-specific section in every article; a story mentions a country only when the story is about it.
- Mostly reading on a phone, in short moments.

**About the owner:** writes as **Pyla**, connected to both India and the UAE.

## What we publish

| Type | How often | Length | Job |
|---|---|---|---|
| News brief | 1 a day (5 days a week) | 300–600 words | Bring visitors in. Always ends with "What this means for you" and links to a guide. |
| Guide ("money page") | 1 a week | 1,200–2,500 words | Help readers decide, and earn through honest affiliate links. Based on the owner's own free-trial testing. |

Page layouts follow section 5 of the brief exactly.

## How it earns

1. **PartnerStack affiliate programs** (main income). Starter five: Gamma, QuillBot, ElevenLabs, 1Password, Brevo. Apply once the site has a few good posts.
2. **Amazon.in, Flipkart, Amazon.ae** on gadget-related posts only, with buttons that change by country.
3. **Google AdSense**, applied for once we have about 20–30 quality posts. Ad spaces are built in but switched off until then.

Honesty rule: we never recommend a tool just because it pays more.

## The site

Pages: Home, News (AI, Apps & Software, Phones & Gadgets, Launches, Deals), Guides (Best Tools, Comparisons, Reviews, Alternatives, How-to), About, Editorial Policy, Affiliate Disclosure, Privacy Policy, Contact, Search.

- **Domain:** techspotlight.news (free to buy as of 14 Oct 2026; owner to buy it on Cloudflare).
- **Hosting:** Cloudflare Workers (static files), free. Every approved change goes live on its own.
- **How it's built:** a fast "static" site (pages are made ahead of time, so they load very quickly). I recommend a tool called **Astro**: posts are simple text files, it's free, and it works well with Cloudflare.
- **Look:** the brand colours and Sora font from the brief, light and dark mode, mobile first.

## How content gets made

Research → Write → Audit (up to 2 rounds of fixes) → **Owner approves** → Publish.

Three helpers (researcher, writer, auditor) and five commands (`/daily-news`, `/money-page`, `/publish`, `/weekly-review`, `/status`), all as described in section 7 of the brief. Drafts stay hidden until the owner says "publish".

## Targets for the first 90 days (resized to the owner's time)

The owner can give **3–5 hours a week**, so the brief's targets are scaled down:

| Measure | Brief's target | New target |
|---|---|---|
| News briefs | ~120 | ~60 |
| Guides | 20 | ~12 |
| AdSense application | ~week 6 | ~week 6–8 (once we pass 20–30 quality posts) |

We also track: auditor first-try pass rate, visitors (and the UAE share), affiliate clicks and sales, and monthly income. These go in `docs/metrics.md` from Phase 1.

## Not doing now

YouTube Shorts, a regional-language version, social media auto-posting, and a newsletter.
