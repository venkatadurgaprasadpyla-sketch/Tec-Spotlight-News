# Research: Targeted ads used to deliver zero-click spyware ("AdFection", Discover-Tech / Candiru)

Checked: 2026-10-15 (about 15:00 UTC). Category: `apps-software`. All pages read through Firecrawl (direct web is blocked here).
I read the full Citizen Lab report (all 11 sections, the company correspondence section and the appendices).

**Suggested slug:** `zero-click-spyware-ads`

## Fairness note (read first)

- Citizen Lab and Confiant are researchers. Their findings are **allegations of wrongdoing against named companies**, backed by technical evidence; no court or regulator has ruled. Write "researchers say", "Citizen Lab found", "allegedly".
- **Discover-Tech, Candiru/Integrity Labs, Bindecy and Intelos did not respond** to Citizen Lab before its deadline (A, Correspondence). Discover-Tech and Integrity Partners also did not answer WIRED (E); The Guardian says Discover-Tech "has been approached for comment" (C); POLITICO says Discover-Tech and Integrity Labs did not immediately respond (D). I found **no statement from Discover-Tech anywhere** (searched 15 Oct, about 15:00 UTC). Say this plainly: "Discover-Tech did not respond to requests for comment from the researchers or from several news outlets."
- Two companies Citizen Lab links to Discover-Tech **deny involvement**: Volasim Ltd (Cyprus app maker) and Adtimizer Ltd (Israel). Citizen Lab itself says it has **no conclusive evidence** either knowingly took part (A, section 7). If they are named, their denials must be included. Simplest: do not name them.
- Affle (bought some Discover-Tech business assets in 2021): Citizen Lab says it has "no reason to believe" Affle controls the ad operations (A). Best left out.
- Ads showing on a network (NATO, UN, EU, ministries) does **not** mean anyone there was hacked. Citizen Lab says an ad impression "does not in and of itself confirm targeting or infection" (A, section 5). Must be said in the story.
- Ad vendors (Google, Yandex, Beeswax, Vungle, Eskimi, Sunteng, Xandr): Citizen Lab says they "are not necessarily aware" of misuse (A, section 9). Do not suggest they knowingly helped.
- Apps and websites that displayed the ads (Viber, Duolingo, BBC, etc.) were not hacked; they showed ads bought through the normal ad system. Say so if any are named.
- AliExpress / Amazon branding appeared on some ads; Citizen Lab says it has **no evidence** those firms bought the ads (A, sections 3 and 5). Leave out, or state that clearly.

## Verified facts (source per fact)

Source A = Citizen Lab full report, 15 Oct 2026 (official, primary)
Source B = Citizen Lab executive summary, 15 Oct 2026
Source F = Confiant Threat Intelligence write-up, 15 Oct 2026 (official, co-timed)
News: C = The Guardian, D = POLITICO Europe, E = WIRED, G = Engadget, H = Reuters via CTV News (headline and summary only; body did not load)

### What happened

| Fact | Source |
|---|---|
| Citizen Lab (University of Toronto) published the report on Thursday 15 Oct 2026, co-timed with Confiant's own investigation. | A, F |
| Citizen Lab calls it the **first public technical confirmation** of a zero-click mercenary spyware attack delivered through targeted advertising. It names the technique **"AdFection"**. | A (Key Findings) |
| The ads were bought by **Discover-Tech**, an Israel-based company (Discover-Tech Ltd, registered March 2020) that presents itself as a legitimate ad company. Citizen Lab says it found the firm works as a facilitator for several mercenary spyware partners. CEO: Dekel Boni. | A (Key Findings; section 7) |
| Discover-Tech's platform is called **Controlium**. Citizen Lab says it lets customers de-anonymise, fingerprint and automatically infect devices the moment an ad is rendered. | A |
| How it works (plain words): Discover-Tech wins an ad auction; the ad loads on a website or app; the ad quietly calls a Discover-Tech server (a "NOAS" server) and sends ad identifiers. If the person is a chosen target, the server sends back code; if not, it sends nothing. The user may not even see the ad (it can render in the background). | A (sections 1, 2) |
| Even people who are not targeted have data collected: the ad sends back browser data such as cookies and the device's public IPv6 address. | A (section 2) |
| **Al Jazeera:** in 2024 and 2025 the network was hit by zero-click attacks Citizen Lab links "with high confidence" to **Candiru** spyware delivered through Discover-Tech ads. **At least 45 devices were targeted.** | A (section 2) |
| Citizen Lab says devices at Al Jazeera **were infected** but does **not** give a number of infected devices. POLITICO: "45 devices ... targeted and some infected". Do NOT write "45 devices infected" (some outlets did). | A, D |
| The spyware sample recovered from one compromised Al Jazeera device was a **Windows DLL file** (so at least one victim was a Windows computer, not a phone). Citizen Lab matched it to the Candiru spyware it found in 2021. | A (section 2) |
| Al Jazeera gave its network logs to Citizen Lab and agreed to be named. The logs showed the pattern: contact with Discover-Tech ad domains, then a Candiru "validator" server, then a Candiru command server. Al Jazeera did not reply to WIRED. | A (section 2, Acknowledgements); E |
| **Candiru** is an Israeli spyware firm, added to the US Commerce Department Entity List on 3 Nov 2021. It now operates as **Integrity Labs** after a reported 2025 acquisition by US-based Integrity Partners (reported price US$30 million; Citizen Lab says the current status of the deal is "unclear"). | A (section 8) |
| Citizen Lab also links Discover-Tech to two other surveillance firms, **Bindecy** and **Intelos**. | A |
| **Scale (Citizen Lab):** Discover-Tech left nearly **4 billion** ad-bidding records exposed on its own server. In **March to June 2026** (four months) its MyDSP system bid on **3,770,286,576** ad impressions and won about **441,954,291 (11.7%)**. | A (section 5) |
| About **19%** of bids (at least **718,748,885**) were for ads carrying a script tag pointing to the NOAS server. Those ads were shown in **75,373** Android and iOS apps and on **120,768** websites (ads actually displayed, not just bids). Bids reached IP addresses in **161 countries**. | A (section 5) |
| Key Findings round this as "almost 200,000 unique websites and Android/iOS apps in dozens of countries". | A |
| Top countries by raw bids: Yemen, Pakistan, Montenegro, Brazil, Mexico, China, Belarus, Armenia, Czechia, Israel. Montenegro is highest per person. (IP location can be wrong.) | A (Tables 4, 5) |
| Apps that showed these ads include MX Player, Lark Player, Viber (about 700,000 on Android), Truecaller, Yahoo Mail, Opera Mini, Duolingo, period trackers and games; websites include Weather.com (about 400,000), Yahoo, AccuWeather, BBC, CBC, NYTimes, Fox News. | A (section 5); B |
| **Millions of devices** were sent to Candiru-linked servers, "likely for large-scale tracking and reconnaissance". Citizen Lab estimates hundreds of thousands to millions in 2025, and counted **3,637,213 "eligible users"** on one Discover-Tech server between January and June 2026 (it notes other customers may also use that feature). POLITICO stresses this does not mean all were infected. | A (Key Findings; section 4); D |
| Ads appeared on networks of **NATO, the United Nations, the European Parliament, the European Commission and the Council of the EU's General Secretariat**, plus government networks in 24 countries (including Australia, Norway, Sweden, Denmark, Czechia, Israel, Italy, Brazil, Mexico, Pakistan, the UAE). Citizen Lab: an impression alone does not confirm targeting or infection. | A (section 5) |
| Confiant separately saw the ads on networks including the US Department of Defense, the Dutch Ministry of Economic Affairs, Estonia's RIA, Spain's digital ministry, the IAEA and the International Criminal Court (per Citizen Lab's summary of Confiant). Confiant's own charts also list the US House of Representatives, UK Parliament and NATO. | A (section 5); F |
| Confiant: Discover-Tech serves roughly **10 million ad impressions per day across over 1,000 publisher domains**; its ads also copied publishers' first-party cookies (analytics IDs, session data, sometimes names or emails inside login tokens). Confiant's data window: 1 Apr to 10 Sep 2026. | F |
| Discover-Tech was listed as "certified" / "approved" by **Google** (from 2020) and on **IAB Europe's** consent-framework vendor list (from 2 Jul 2020). It ran ads through Google, Yandex, Beeswax (Comcast/FreeWheel), Vungle (Liftoff), Eskimi and Sunteng. | A (Key Findings; section 9) |
| A related actor Citizen Lab calls **DARK CARTOGRAPHER** used Discover-Tech infrastructure to link ad IDs to phone numbers through mobile-carrier weaknesses in 30+ countries; a separate report is coming. | A |
| Citizen Lab wrote to **13 companies** for comment before publishing. | A |

### What companies have done (only with their own statement or a named outlet)

| Company | Action | Source |
|---|---|---|
| Google | Removed Discover-Tech from its vendor lists and cut its access to Google ad exchanges in the first week of Oct 2026; added Safe Browsing warnings for linked domains. Google collaborated with the researchers. | A (Google statement to Citizen Lab); E (Google spokesperson) |
| IAB Europe | Removed from the Global Vendor List on **8 Oct 2026** (Citizen Lab). IAB Europe told WIRED it **suspended** Discover-Tech after an audit, and a definitive expulsion could follow if the spyware findings are further confirmed. IAB Europe did not reply to Citizen Lab before its deadline. Use "suspended" (IAB Europe's own word). | A (section 9); E |
| Beeswax (Comcast/FreeWheel) | Removed Discover-Tech from its platform. | A (Beeswax letter, 13 Oct); E |
| Vungle (Liftoff) | Paused Discover-Tech's access during a review. | A (Liftoff letter, 12 Oct) |
| Eskimi | Permanently blocked Discover-Tech's accounts and domains; says its last campaign was stopped on 6 Aug 2026 and spend was "a few hundred dollars". | A (Eskimi letter, 14 Oct) |
| Discover-Tech, Candiru/Integrity Labs, Bindecy, Intelos, Xandr (Microsoft), Sunteng, Affle | Did not respond to Citizen Lab in time. | A |

## Quotes (verbatim)

1. Bill Marczak, senior researcher, Citizen Lab (to WIRED, E):
   > "AdFection allows operators to automatically hack specific individuals with mercenary spyware as they use apps or browse the internet."
   > "Someone who gets hacked like this would not see anything amiss. In fact, they might not even see any ad at all."
2. Bill Marczak (to WIRED, E):
   > "Until this architecture changes, or ad companies get serious about customer vetting, we're going to keep seeing this kind of abuse."
3. Bill Marczak (to POLITICO, D):
   > "Plugging into the online ads ecosystem provides the mercenary spyware industry a stealthy delivery system."
4. Wolfie Christl, senior researcher, Citizen Lab (to WIRED, E):
   > "The risk of having your device infected with spyware simply by using a website or app that displays ads is a nightmare scenario."
5. Wolfie Christl (via The Guardian, C):
   > "The way the online advertising ecosystem works today is a security threat for states, the private sector, civil society and everyone else alike."
6. Google spokesperson (to WIRED, E):
   > "Following a joint investigation with Citizen Lab and Confiant, Google blocked Discover-Tech from our ad platforms for systematically violating our policies."
7. IAB Europe spokesperson (to WIRED, E):
   > "Further confirmation of the findings regarding spyware could also justify a definitive expulsion from the GVL."
8. Eskimi (letter to Citizen Lab, A), on why checks missed it:
   > "In this case, the advertiser's tags were built to evade automated scanning."
9. Hannah Neumann, German Greens MEP (to POLITICO, D):
   > "The possibility that EU institutions have been exposed should set off alarm bells across Brussels."
10. Citizen Lab report (A), on what an ad sighting proves:
   > "A Discover-Tech ad impression does not in and of itself confirm targeting or infection with spyware."

## Rumours, caveats, things to label

- **Not confirmed:** who Candiru's government customer was in the Al Jazeera attack. Nobody has named one. Do not guess.
- **Not confirmed:** how many people were actually infected worldwide. Only the Al Jazeera case is technically confirmed; the big numbers are about ads shown and devices profiled.
- Headlines say "phones" (WIRED, POLITICO). The confirmed Al Jazeera sample was **Windows** malware; Engadget says "phones and computers". Use "phones and computers" or "devices".
- The Guardian says "dozens of devices at Al Jazeera ... compromised" and "millions of users ... served ads ... since 2024". Citizen Lab's exact figure is "at least 45 devices targeted". Prefer Citizen Lab's wording.
- Candiru's sale to Integrity Partners: reported by Israeli media (Calcalist), status "unclear" per Citizen Lab. Write "reportedly".
- Reuters (H) also reported the story; I could only read its headline and summary, not the body.

## The open question

Who chose the targets? Citizen Lab shows the pipeline and one confirmed victim (Al Jazeera), but not which government customers used it, how many people were actually infected, or whether anyone on the government networks that saw the ads was hit. A bigger question: the ad industry's "certified" and "approved" labels were given to Discover-Tech for almost six years. Will regulators now require real vetting of ad companies, or will this be treated as one bad apple? (Citizen Lab calls on regulators to investigate Discover-Tech and Candiru/Integrity Labs; A, section 11.)

## Reader angle (worldwide)

- Ordinary people were not the targets in the confirmed case (a newsroom was), but their data was swept up: Citizen Lab says millions of devices were profiled just by being shown an ad in everyday apps like Viber, Truecaller, Duolingo or weather apps.
- The point that matters for everyone: an ad is not just a picture. It can run code and carry data about you, and the system that picks which ad you see in a split second can be used to pick you.
- Who is at higher risk: journalists, activists, lawyers, officials, people in defence or critical infrastructure. Citizen Lab urges news organisations to check their systems and get expert help.
- **Practical steps (from Citizen Lab's own "Protecting Yourself from AdFection" list, A section 11; Marczak tells WIRED that blocking ads as thoroughly as possible is the main defence, E):**
  1. Use a trusted ad-blocking browser extension.
  2. Consider a privacy-focused browser that blocks tracking.
  3. Reset your phone's advertising ID regularly and turn off ad tracking (iPhone and Android settings); use apps' opt-outs.
  4. Consider ad blocking for the whole home network (router), or a trusted VPN that blocks ads.
  5. Follow Consumer Reports' free Security Planner (https://securityplanner.consumerreports.org/).
  6. If your work puts you at higher risk, get expert help.
  Be honest in the story: Citizen Lab says these steps **reduce** some risk; they are not a guarantee. (Keeping phone, apps and browser updated is general good practice but is not on Citizen Lab's list, so don't attribute it to them.)
- Background: US agencies NSA and CISA already advised ad blocking against malicious ads in 2018 and 2020 (cited in A, section 10).

## Related guide

No guides exist yet except the sample. Suggested new guide (money page): **"Best ad blockers and privacy browsers for phones and laptops"** (needs Pyla's own testing). Leave `relatedGuide` empty until a guide exists.

## Keyword plan

**Semrush: no API units left** on the account (keyword_research returned `no_api_units`, 2026-10-15). The plan below uses Google's own search suggestions via Firecrawl (no numbers), plus a web search for the questions people ask. Firecrawl's rate limit slowed several lookups.

Phrases tried:
- "zero click spyware" (US), "spyware ads" (US), "spyware through ads" (GB): **no suggestions** (the topic is too new).
- "zero click" (US): "zero click attack" (top), "zero click exploits mobile", plus unrelated marketing phrases ("zero click search", "zero click marketing").
- "zero click attack" (GB): "zero click attack in cyber security", "zero click attack example", "zero click attack kya hai" (Hindi, India), "zero click attack reddit", "zero click attack prevention", "zero click attack iphone".
- "spyware on phone" (US): "... iphone", "... android", "... how to detect", "... signs", "spyware on my phone", "find spyware on phone".
- "candiru" (US): only fish results ("candiru fish", "candiru parasite"). **No demand for "Candiru spyware"**, so it is not a keyword (name it in the text only).
- Questions people ask (web search): "can you get spyware from an ad without clicking", "how to reset advertising ID", "how to block ads on phone".

| Phrase | Volume | Difficulty | Why |
|---|---|---|---|
| **zero-click attack** (focus) | Google suggestion: top for "zero click" (US); own suggestion list in GB | No numbers | The only on-topic phrase with clear demand in both US and GB. The story is a real, documented example and explains what it is and how to lower the risk. More specific than "spyware". |
| zero-click spyware | Not suggested (new phrase); used by every outlet (WIRED, Guardian, POLITICO) | No numbers | Exact news term this week; natural in the headline and lede. |
| zero click attack example | Google suggestion, GB | No numbers | The Al Jazeera case is a concrete example. |
| zero click attack prevention | Google suggestion, GB | No numbers | Matches Citizen Lab's protection steps (reduce risk, no guarantee). |
| spyware on phone | Google suggestion, US (many variants) | No numbers; likely broad and competitive | Use once, naturally ("spyware on your phone or computer"). Do not promise detection advice we don't have. |
| spyware in ads | No suggestion returned (new topic) | No numbers | Plain words readers will use this week. |
| reset advertising ID | Question people ask (web search) | No numbers | One of Citizen Lab's practical steps. |

- Suggested `focusKeyword`: **zero-click attack**
- Suggested `keywords` (3–6): "zero-click spyware", "zero click attack example", "zero click attack prevention", "spyware in ads", "Citizen Lab", "reset advertising ID"
- Suggested `seoTitle`: "Zero-click attack hid in online ads, researchers say" (52 characters)
- Alternative: "Zero-click attacks via online ads: what to know" (47 characters)
- Suggested web address: `zero-click-spyware-ads` (preferred) or `targeted-ads-spyware-adfection`

## Cover photo

- Photo: a smartphone on a wooden desk showing a padlock (security lock) icon, next to a small succulent plant. Calm and on-topic. The page names no brand; check on download that no brand logo is visible.
- Photographer: **Dan Nelson** (@danny144) on **Unsplash**. Page title reads "Free Photo on Unsplash" and the licence is the free Unsplash License (not Unsplash+).
- Page: https://unsplash.com/photos/smartphone-with-security-lock-icon-ah-HeguOe9k
- Direct image (cropped to 1200x630 by Unsplash's image service): https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?fm=jpg&q=75&w=1200&h=630&fit=crop
- Target file: `public/images/posts/zero-click-spyware-ads/cover.jpg`, under 250 KB. **Not downloaded** (as asked).
- imageAlt: "A smartphone on a wooden desk showing a padlock icon, a reminder of phone security"
- imageCredit: name "Dan Nelson", source "Unsplash", url (page above).
- Rejected: "A close up of a cell phone with an ad on the screen" by Solen Feyissa (https://unsplash.com/photos/a-close-up-of-a-cell-phone-with-an-ad-on-the-screen-KR_avoh1oKY). It is free, but its tags say "chatgpt", so the on-screen ad is probably a real brand's; that would wrongly tie an uninvolved company to a spyware story.

## Sources (official first)

1. A: Citizen Lab, "Exposing AdFection: How Discover-Tech Turned Targeted Ads Into a Pipeline for Zero-Click Mercenary Spyware" (15 Oct 2026): https://citizenlab.ca/research/how-discover-tech-turned-targeted-ads-into-a-pipeline-for-spyware/
2. B: Citizen Lab, "Exposing AdFection Executive Summary" (15 Oct 2026): https://citizenlab.ca/research/exposing-adfection-executive-summary/
3. F: Confiant Threat Intelligence, "ADINT: Weaponized Ad Tech for Zero-Click Spyware and Mass Identity Vacuuming" (15 Oct 2026): https://blog.confiant.com/p/adint-weaponized-ad-tech-for-zero-click-spyware-and-mass-identity-vacuuming
4. Company letters to Citizen Lab (PDFs; I read their text as quoted in the report, not the PDFs themselves): Liftoff https://citizenlab.ca/wp-content/uploads/2026/10/Liftoff-Response-to-Request-for-Comment.pdf ; Beeswax https://citizenlab.ca/wp-content/uploads/2026/10/Beeswax-Response-to-Request-for-Comment.pdf ; Eskimi https://citizenlab.ca/wp-content/uploads/2026/10/Eskimi-Response-to-Request-for-Comment.pdf ; Volasim https://citizenlab.ca/wp-content/uploads/2026/10/Volasim-Response-to-Request-for-Comment.pdf ; Adtimizer https://citizenlab.ca/wp-content/uploads/2026/10/Adtimizer-Response-to-Request-for-Comment.pdf
5. E: WIRED, Matt Burgess and Lily Hay Newman, "'Nightmare Scenario': Zero-Click Spyware Is Infecting Phones via Targeted Ads" (15 Oct 2026): https://www.wired.com/story/nightmare-scenario-zero-click-spyware-is-infecting-phones-via-targeted-ads/
6. C: The Guardian, Aisha Down, "Israeli firm's digital ads enabling installation of 'zero-click' spyware, researchers say" (15 Oct 2026): https://www.theguardian.com/technology/2026/oct/15/israeli-firm-digital-ads-enabling-installation-of-zero-click-spyware-researchers-say
7. D: POLITICO Europe, "Millions of phones exposed to Israeli spyware operation through online ads, researchers say" (15 Oct 2026): https://www.politico.eu/article/israel-firm-advertising-spyware-mobile-phone-hacking/
8. G: Engadget, "CitizenLab details new spyware triggered by online advertising" (15 Oct 2026): https://www.engadget.com/2287417/citizenlab-details-new-spyware-triggered-by-online-advertising/
9. H: Reuters via CTV News, "Israeli firm used online ads to run vast spy operation, researchers say" (15 Oct 2026; body not readable): https://www.ctvnews.ca/sci-tech/article/israeli-firm-used-online-ads-to-run-vast-spy-operation-researchers-say/
10. Consumer Reports Security Planner (practical advice linked by Citizen Lab): https://securityplanner.consumerreports.org/
