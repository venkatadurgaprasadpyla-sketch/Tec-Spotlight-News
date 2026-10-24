# Research: Google privacy policy lets connected Gmail, Drive and Photos data shape ads

Story mode. Researched 2026-10-24 ~00:30 UTC. Firecrawl out of credits: WebSearch (extended), curl and WebFetch used. Semrush not used (no API units noted in this run); keyword plan from Google suggestions read directly.

Slug: `google-gmail-photos-ads-privacy-policy` · Category: `apps-software` · Related story: `/news/gmail-ai-inbox/`

## Confirmed facts (two sources each, official first)

| # | Fact | Official source | Independent source |
|---|------|-----------------|--------------------|
| 1 | Google's current privacy policy is "Effective October 16, 2026". Previous version: October 1, 2026. | policies.google.com/privacy (header); policy archive lists Oct 1, 2026 as the previous version | The Verge (Jess Weatherbed, 23 Oct 2026, 16:52 UTC); ppc.land |
| 2 | The ads bullet changed. Old (Oct 1 version): "We don't show you personalized ads based on your content from Drive, Gmail, or Photos." New: "...from Drive, Gmail, or Google Photos, unless you choose to make data from these services available to other Google services that support personalized ads." | Official comparison page policies.google.com/privacy/archive/20261001-20261016 (marked as new text) and the Oct 1 archive version | The Verge; Android Authority (Shimul Sood, 23 Oct) |
| 3 | New paragraph: users "may choose to allow certain Google services, including services like Search or Gemini Apps, to access data from other Google services", e.g. Google Photos, Gmail and Drive. "For example, Search may process some of the data that you allow Search to access to personalize content, including ads." | Current policy | The Verge (quotes same text) |
| 4 | New example in the policy: if you ask Search about a hotel booking, Search may use booking details from an email to suggest things to do nearby; added text names "Personal Intelligence". | Comparison page (new text) | Android Authority (same hotel example) |
| 5 | Default unchanged: Gmail, Drive and Photos content is not used for personalized ads unless the person connects those apps. | Policy wording (conditional "unless you choose") + Search Help 16859283: "You get to choose if you want to connect your content apps" | Android Authority ("isn't used for targeted ads by default"); The Verge |
| 6 | Google Search Help FAQ: "Ads will not be based directly on your Gmail inbox or your Google Photos library." If connected, Search "may reference summaries, excerpts and inferences" from them, and "That same info may be used to show you ads". | support.google.com/websearch/answer/16859283 | ppc.land (quotes the same help line) |
| 7 | No ads based on sensitive categories (race, religion, sexual orientation, health); advertisers don't get the inbox or Photos library, nor name/email. | Policy + Search Help FAQ ("advertisers will not have access to your Gmail inbox or Google Photos") | The Verge |
| 8 | The "no ads from Drive, Gmail or Photos" sentence first appeared in the July 1, 2021 policy (absent Feb 4, 2021 version). | Policy archive 20210701 vs 20210204 (checked: sentence present / absent) | ppc.land (same finding) |
| 9 | Personal Intelligence in Search: connect Workspace (currently Gmail and Calendar for Search) and Google Photos so AI Mode tailors answers; 18+; personal accounts; Photos not in all regions; consenting lets all Search services (Search incl. AI Mode and Discover, Maps, Shopping, News, Flights, Hotels, Translate) access them. | Search Help 16859283 and 17212611 | Android Authority; The Verge |
| 10 | Personal Intelligence came to AI Mode in Search on 22 Jan 2026. | blog.google "Personal Intelligence in AI Mode in Search" (Jan 22, 2026) | 9to5Google (22 Jan 2026); Search Engine Journal |
| 11 | Disconnecting an app does not delete data already in Search Services History; that data can still be used for product improvement, including AI training. Delete it at activity.google.com. | Search Help 16859283 | Android Authority |
| 12 | Connected data may be used to train generative AI (summaries, excerpts, inferences) and a subset is seen by human reviewers. | Search Help 16859283 | (official only; mention lightly as Google's own FAQ wording, attributed) |
| 13 | Gemini Personal Intelligence: not available in the EEA, Switzerland, UK or Nigeria for now; personal accounts, 18+. | Gemini Apps Help 16598406 | Google suggestions show "google personal intelligence uk/europe" searches (weak); keep as "Google's help page says" |

## How to check or turn it off (confirmed on Google's own help pages)

Search (Search Help 16859283 + 17212611; same path reported by Android Authority):
1. In your Google Account, open **Search Services Personalization**.
2. Go to **Additional Personal Intelligence**, then **Connected Content Apps**, and disconnect Google Workspace and/or Google Photos.
3. Or turn off **Personalized Recommendations** completely (help page: "You can opt in or out of personalization at any time by changing your personalized recommendations setting").
4. Old data stays in Search Services History until you delete it at activity.google.com.

Gemini (Gemini Apps Help 16598406): gemini.google.com > Settings & help > Personal Intelligence > Connected Apps > turn the app off. Also delete chats that hold the info.

Ads in general: My Ad Center (named in the policy).

Note: Google's help page warns the Search settings are "being updated so may not match your current experience". Say so.

## Cut or labelled

- **Whether Gemini itself uses connected data for ads:** the policy names "Search or Gemini Apps" as services that can access the data, but its ads example and the help FAQ are about Search. Not confirmed that Gemini shows ads. Write only what the policy says.
- **Drive in Search:** Search Help says Workspace in Search is "currently Gmail and Google Calendar"; Drive is in the policy wording and in Gemini's Workspace connection. Don't claim Drive feeds Search ads today.
- **"Quietly" changed (Dexerto, others):** Google did publish an archive and comparison; no evidence of a user email. Not stated either way; avoid "quietly".
- **Number of users who connected apps:** Google has published none (ppc.land). Say unknown.
- **Google statement/spokesperson:** none found. Don't invent.
- **2017 end of Gmail ad scanning:** not verified in this run; cut.

## Keyword plan (Google suggestions, read directly; us and gb identical)

| Phrase | Volume | Why |
|---|---|---|
| google privacy policy update (FOCUS) | Google suggestion (us, gb) | Exactly the news; specific, fair chance to rank |
| google personal intelligence | Google suggestion | The feature behind the change |
| google personal intelligence settings | Google suggestion | Readers want the switch |
| how to turn off google personal intelligence | Google suggestion | Most common question; we answer from Google's help page |
| google personal intelligence data sharing | Google suggestion | Matches the privacy worry |
| google gmail privacy policy | Google suggestion | Gmail angle |

Suggested seoTitle: "Google Privacy Policy Update: Gmail, Photos and Ads" (51). Web address: `/news/google-gmail-photos-ads-privacy-policy/`.

## Cover

Google blog has a Personal Intelligence hero image (blog.google, Jan 2026), but no press/media-use licence is stated on that page; Google's press corner terms not confirmed. Prefer free stock (Unsplash/Pexels) of a phone showing Google/Gmail apps, else title card.

## Sources

- Google Privacy Policy (effective 16 Oct 2026): https://policies.google.com/privacy?hl=en-US
- Google Privacy Policy comparison, 1 Oct vs 16 Oct 2026: https://policies.google.com/privacy/archive/20261001-20261016?hl=en-US
- Google Search Help, Connect your Google content apps: https://support.google.com/websearch/answer/16859283?hl=en
- Google Search Help, Personal Intelligence in AI Mode: https://support.google.com/websearch/answer/17212611?hl=en
- Gemini Apps Help, Connect your Google apps: https://support.google.com/gemini/answer/16598406?hl=en
- Google blog, Personal Intelligence in AI Mode (22 Jan 2026): https://blog.google/products-and-platforms/products/search/personal-intelligence-ai-mode-search/
- The Verge (23 Oct 2026): https://www.theverge.com/tech/1017600/google-personal-intelligence-privacy-policy-ads-update
- Android Authority (23 Oct 2026): https://www.androidauthority.com/google-personal-intelligence-privacy-3727111/
- PPC Land: https://ppc.land/google-lets-connected-gmail-and-photos-data-shape-ads-5-years-after-pledge/
