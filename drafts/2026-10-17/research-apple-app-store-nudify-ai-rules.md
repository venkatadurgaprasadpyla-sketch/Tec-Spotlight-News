# Research: Apple App Store rules on AI "nudify" apps and hidden features

Checked: 2026-10-17. Category: Apps & Software (also AI).
Method: WebSearch (extended) only. Firecrawl out of credits; WebFetch cannot reach outside sites, so Apple's page text was seen only as search snippets. Semrush returned "no_api_units" (not enough API units) on 2026-10-17, so the keyword plan has no volume numbers.

Rule used: each key fact needs Apple's developer site plus one independent outlet. Anything weaker is marked **Single-sourced** or **Unconfirmed**.

## Headline facts (confirmed: Apple + independent outlet)

1. **Date:** Apple posted "Updated App Review Guidelines are now available" on 16 Oct 2026. [Apple Developer news, 16 Oct 2026](https://developer.apple.com/news/?id=92th7e5i); [MacRumors, 16 Oct 2026](https://www.macrumors.com/2026/10/16/app-store-rules-deepfakes/); [9to5Mac, 16 Oct 2026](https://9to5mac.com/2026/10/16/apples-new-app-store-rules-crack-down-on-ai-nudification-and-bait-and-switch-apps/)
2. **Guideline 1.2 (user-generated content), clarified:** apps that let people create, generate, upload or share content now have "nonconsensual intimate imagery" named as a risk (next to intellectual property infringement and anonymous bullying). Coverage says this explicitly includes images made with AI tools, which apps must work to prevent and remove. Apple says the rule covers social media, user-generated content apps and AI content creation apps. Developers without adequate safeguards, or who don't fix problems after notice, can be treated as breaking the Developer Code of Conduct and risk removal. Required safeguards (existing): a filter for objectionable material, a way to report content, a way to block abusive users, published contact details. Sources: Apple news post (above); 9to5Mac (quotes the new 1.2 wording); MacRumors; [Mac Observer](https://www.macobserver.com/news/app-review-guidelines-nonconsensual-imagery-bait-and-switch/)
3. **New Guideline 2.5.19 (hidden features):** quoted by 9to5Mac as: no "hidden, dormant, or undocumented features"; an app's functions should be clear to users and App Review. MacRumors reports it adds that trying to hide undocumented features in the app binary (for example through code obfuscation) is grounds for removal from the App Store and ending the developer account. Apple's notes say this moves long-standing policy out of Guideline 2.3.1 into its own rule. Sources: Apple news post; 9to5Mac; MacRumors.
4. **Guideline 5 (Legal), clarified:** apps found to help human trafficking and/or child exploitation will be removed from the App Store **and blocked from alternative distribution** (the EU's other app marketplaces / web distribution). Sources: Apple news post (per search snippet); MacRumors (snippet cut off mid-sentence). Note: this is in Guideline 5, NOT 2.5.19; some blogs mix them up.
5. **Other changes in the same update:** new Guideline 2.3.14 on creative assets (linked to Apple's new Asset Library in App Store Connect, for uploading screenshots and previews ahead of time); 3.1.1(a) folds the music streaming entitlement into the StoreKit External Purchase Link bullet and clarifies links may go to a "permitted destination". Source: Apple news post only (seen via search snippet). **Single-sourced (Apple only)**; exact wording not seen. [ppc.land](https://ppc.land/apple-forces-4-rating-on-app-store-creative-assets-arriving-this-fall/) separately reports creative assets must meet a 4+ age rating (earlier article; not confirmed for this update).
6. **Translations** of the updated guidelines to follow within about a month. Source: Apple post (via search summary). **Single-sourced.**
7. Apple's post does not name a specific app or incident (per search summaries; unconfirmed from the full page).

## Why now (context)

- **Jan 2026, Tech Transparency Project (TTP):** found 47 nudify apps on Apple's App Store and 55 on Google Play, with 705 million+ downloads combined; Apple said it removed 28. [TTP](https://www.techtransparencyproject.org/articles/nudify-apps-widely-available-in-apple-and-google-app-stores); [CNBC, 27 Jan 2026](https://www.cnbc.com/2026/01/27/apple-google-host-dozens-of-ai-nudify-apps-like-grok-report-finds.html); [9to5Mac, 27 Jan 2026](https://9to5mac.com/2026/01/27/report-claims-app-store-hosts-widespread-nonconsensual-ai-undressing-apps/)
- **Apr 2026, TTP follow-up:** App Store search suggestions and paid search ads pointed people to nudify apps; 18 found on Apple, 20 on Google; Apple said it removed 15. [9to5Mac, 15 Apr 2026](https://9to5mac.com/2026/04/15/new-report-claims-app-store-search-suggestions-and-ads-steered-users-to-nudify-apps/); [404 Media](https://www.404media.co/app-stores-apple-google-nudify-undress-deepfakes/); [Winbuzzer, 17 Apr 2026](https://winbuzzer.com/2026/04/17/apple-google-steered-users-to-nudify-apps-report-xcxwbn/)
- **Apr 2026:** US Senator Jon Ossoff wrote to Apple and Google about nudify apps. [Letter to Apple (PDF)](https://www.ossoff.senate.gov/wp-content/uploads/2026/03/26.04.01_Letter-to-Apple-re-Nudify-Apps.pdf). **Single-sourced** (primary document only; dated 1 Apr 2026 per filename).
- **Jul 2026, San Francisco:** City Attorney David Chiu sent cease-and-desist letters: 8 apps on Apple's store, 5 on Google Play, 28 days to respond, citing California law. Apple said 3 were removed and developer accounts terminated (others under review); Google said all 5 suspended. [TechCrunch, 17 Jul 2026](https://techcrunch.com/2026/07/17/apple-and-google-ordered-to-purge-nudify-apps-from-app-stores/); [9to5Mac, 17 Jul 2026](https://9to5mac.com/2026/07/17/apple-ordered-to-remove-8-ai-nonconsensual-undressing-apps-from-the-app-store/); [AppleInsider, 17 Jul 2026](https://appleinsider.com/articles/26/07/17/apple-ordered-to-remove-8-nudify-ai-apps-from-the-iphones-app-store). Whether all 8 Apple apps are gone: **unconfirmed**.
- **Grok:** MacRumors reports Apple told xAI it would pull Grok unless it stopped allowing nude deepfakes; xAI added safeguards and Apple approved an update. **Single-sourced (MacRumors)**; timing not confirmed. Background: [Wikipedia, Grok sexual deepfake scandal](https://en.wikipedia.org/wiki/Grok_sexual_deepfake_scandal).
- **US Take It Down Act:** platform duty to remove nonconsensual intimate images within 48 hours of a valid request, enforced by the FTC since 19 May 2026; civil penalties about $53,088 per violation. [FTC business guidance](https://www.ftc.gov/business-guidance/resources/complying-take-it-down-act); [FTC consumer alert, May 2026](https://consumer.ftc.gov/consumer-alerts/2026/05/what-will-ftcs-enforcement-take-it-down-act-mean-you); [WilmerHale, 15 Jun 2026](https://www.wilmerhale.com/en/insights/client-alerts/20260615-the-take-it-down-act-goes-live). Note: no source links Apple's update directly to this law; frame as background only.
- **UK:** creating a nonconsensual intimate image is an offence in England and Wales (from 6 Feb 2026 per one source); a ban on nudification tools is going through the Crime and Policing Bill. Royal Assent **unconfirmed**. [UK Parliament committee](https://committees.parliament.uk/committee/135/science-innovation-and-technology-committee/news/211307/liz-kendall-details-governments-plans-to-tackle-intimate-ai-deepfakes/); [The Register, 14 Jan 2026](https://www.theregister.com/2026/01/14/uk_government_nudification_ban/)
- **EU:** Parliament and Council negotiators agreed to add AI systems that make nonconsensual intimate images / child abuse material to the AI Act's banned list (via the "Digital Omnibus"). Formal adoption and the reported 2 Dec deadline **unconfirmed**. [Yahoo News UK](https://uk.news.yahoo.com/ai-nudification-tools-set-banned-134524168.html)
- **Google Play:** its developer policy already bans apps that claim to undress people or see through clothing, even as "prank" apps, and requires AI apps to block restricted (including sexual) content and let users flag it. [Android Authority](https://www.androidauthority.com/google-responds-to-play-store-nudify-apps-3658237/); [CBS News](https://www.cbsnews.com/news/ai-nudify-apps-back-to-school-photo-risk/). Google's own policy page not reached; wording via press quotes.

## What it means

- **Users worldwide:** the rules apply in every App Store country. Apple says people can report offensive, illegal or abusive apps at https://reportaproblem.apple.com ([Renascence](https://www.renascence.io/news/115127/apple-tightens-app-store-rules-against-ai-nudify-apps); [Macworld](https://www.macworld.com/article/3116379/report-apple-app-store-fails-to-protect-users-from-nudify-apps.html)). Rules on paper did not stop earlier nudify apps; enforcement is what matters.
- **Developers:** AI image and social apps need real safeguards (filters, reporting, blocking, contact info) and must act on notices. 2.5.19 means everything an app can do should be visible to App Review.
- **EU:** the Guideline 5 change reaches alternative distribution, so a ban can't be dodged by moving to another marketplace (for those categories).

## Open questions

- How will 2.5.19 treat remote config, feature flags, A/B tests and server-driven paywalls? Developers are asking; Apple hasn't said ([Mac Observer](https://www.macobserver.com/news/app-review-guidelines-nonconsensual-imagery-bait-and-switch/); developer comment quoted in coverage). **Labelled as developer concern, not Apple position.**
- Will Apple fix search suggestions and ads that steered users to nudify apps (TTP April finding)? No statement found.
- Does the 1.2 change also reach big general AI apps (e.g., chatbots with image tools), not just dedicated "undress" apps? Coverage differs.
- Nudification apps were already banned in principle; the test is enforcement speed.

## Do NOT use (doubtful / mixed up in secondary blogs)

- Claims that 2.5.19 is the "nudify rule" (tech-insider.org, astig.ph headlines): wrong; nudify = 1.2, hidden features = 2.5.19.
- Claim that 2.5.19 carries the "removed and blocked from alternative distribution" penalty: that is Guideline 5.
- Low-quality aggregators (fourweekmba, explainx, lapaasvoice, techbytes, kucoin, scribehow): not used as sources.

## Keyword plan (no numbers: Semrush out of API units; Firecrawl out of credits; picked from search-phrase patterns)

| Phrase | Volume | Difficulty | Why |
|---|---|---|---|
| **apple nudify apps** (focus) | Google suggestion-style, worldwide | n/a | Exact phrase used across news and searches; specific; story answers it directly |
| app store review guidelines update | suggestion-style | n/a (likely high) | Developers search this after every update |
| app store guideline 2.5.19 | suggestion-style | n/a (likely low) | New, specific; low competition |
| nudify apps ban | suggestion-style | n/a | Matches reader intent (are they banned?) |
| apple deepfake apps | suggestion-style | n/a | Broader term in MacRumors headline |
| how to report an app on the app store | suggestion-style | n/a | Practical reader question the story can answer |

- seoTitle suggestion: "Apple Nudify Apps: New App Store Rules Explained" (48 chars)
- Web address: `apple-app-store-nudify-ai-rules`

## Cover photo

Not checked (no access to Unsplash/Pexels pages this run). Suggest the writer pick a generic iPhone App Store photo from Unsplash or Pexels and verify the photographer credit.

## Related guide

No existing guide checked as a fit; possible new guide: "How to keep kids safe from AI apps on iPhone (Screen Time, App Store limits)".
