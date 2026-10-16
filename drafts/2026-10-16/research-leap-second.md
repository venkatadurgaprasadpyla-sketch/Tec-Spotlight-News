# Research: the world votes to stop adding leap seconds (from 20 May 2027)

Researcher notes, 16 Oct 2026 (auto-news run 05:10 UTC). Category: **science** (strong tech angle).
All facts summarised in my own words; source numbers in [brackets].

## Sources (original first)

1. BIPM, Resolution 5 of the 28th CGPM (2026), "On the technical actions needed to ensure the continuity of UTC" (read in full, English version; the official text is the French one): https://www.bipm.org/en/cgpm-2026/resolution-5 (DOI https://www.doi.org/10.59161/CGPM2026RES5E)
2. BIPM, 28th CGPM meeting page (dates, venue, list of the 7 resolutions): https://www.bipm.org/en/cgpm-2026
3. BIPM, Statement by the CCTF President, Dr Noël Dimarcq, dated Versailles, 15 Oct 2026 (PDF): https://www.bipm.org/documents/d/guest/statement-cctf-president-cgpm-2026
4. BIPM, Resolution 4 of the 27th CGPM (2022), "On the use and future development of UTC": https://www.bipm.org/en/cgpm-2022/resolution-4
5. timeanddate.com, "The World Abandons Leap Seconds" (updated 15 Oct 2026; quotes Christian Bizouard of IERS and Patrizia Tavella of BIPM): https://www.timeanddate.com/news/astronomy/no-more-leap-seconds-utc-2026
6. Scientific American, Emma Gometz, 15 Oct 2026: https://www.scientificamerican.com/article/scientists-vote-to-end-leap-seconds-redefining-how-the-world-keeps-time/
7. The Guardian, 15 Oct 2026 (quotes Setnam Shemar, NPL; Christian Bizouard, IERS): https://www.theguardian.com/science/2026/oct/15/times-up-for-the-leap-second-as-scientists-swap-it-for-the-leap-hour
8. The Conversation, Michelle Bastian (University of Edinburgh), 15 Oct 2026, "...the outcome favours big tech": https://theconversation.com/experts-have-voted-to-stop-adding-extra-seconds-to-clock-time-the-outcome-favours-big-tech-294297
9. CNN, Katie Hunt, 13 Oct 2026 (background before the vote; Russia/UK history, critic Marek Ziebart, 2012/2016 outages): https://www.cnn.com/2026/10/13/science/leap-second-elimination-time-standard
10. CNET (not readable through Firecrawl, "site not supported"; listed only as further coverage, nothing taken from it): https://www.cnet.com/science/world-timekeepers-kill-the-leap-second/

## 1. Verified facts

### The decision (Resolution 5, read word for word [1])
- The CGPM **decides** two things: (a) "continuous UTC will become effective on **20 May 2027**"; (b) the maximum allowed gap |UT1 − UTC| will be **3,600 seconds (1 hour)**, which the text says ensures UTC's continuity "for several centuries". [1]
- Today the gap is kept under 1 second (a leap second is applied when UT1−UTC is predicted to approach 0.9 s, under ITU-R TF.460-6). [4] [5]
- Reasons the resolution gives ("recognizing" and "noting" sections) [1]:
  - Industry and national critical infrastructure (transport, energy distribution, telecoms, space projects) need UTC continuous, with no future adjustments.
  - Some systems need a fixed maximum gap so their software can be designed around it.
  - Many countries already have more than an hour between sun time and clock time because of time zones, and daylight saving shifts clocks by an hour regularly.
  - A March 2025 workshop of the CCTF and IERS (with Earth-rotation experts) estimated the chance of a **negative leap second** rises quickly, reaching **30% by 2035**.
  - A negative leap second has never been applied; it is judged high-risk for largely unprepared critical infrastructure, and preparing for it would cost time-dependent industries an amount estimated to be **similar to their millennium bug (Y2K) preparations**.
  - Internet of Things, smart grids, multi-sensor systems and virtual services raise the risk of malfunctions at any leap second, especially a negative one.
  - Big global service providers use **different mitigation methods** ("smearing") in their servers, so time is inconsistent between systems and does not conform to the SI unit.
  - ITU-T, URSI, IEEE 1588 working groups and individual industry representatives sent formal statements asking to bring the change forward.
  - Delay risked some organisations switching to a satellite-navigation time (GNSS time) instead of UTC, weakening one shared world standard.
- People who need Earth-rotation time (UT1) can get the UT1−UTC value from GNSS navigation messages and internet services from IERS, national metrology institutes and others. [1]
- Radio time signals: ITU-R Working Party 7A is studying code updates; ITU Resolution 655 (REV.WRC-23) allows a transition so radio systems can carry the bigger UT1−UTC value **until 2035, and no later than 2040**, where old equipment cannot be replaced sooner. [1]
- BIPM is asked to keep working with ITU, IAU, IUGG, IERS and others to inform users, keep monitoring UT1−UTC, and report regularly to the CIPM. [1]
- Official version of the resolution is the French text. [1]

### Vote date and place: CONFIRMED Thursday 15 October 2026, Versailles
- The 28th CGPM met **Tuesday 13 to Thursday 15 October 2026** at the Palais des Congrès de Versailles, France. [2]
- The CCTF President's official statement, dated Versailles 15 Oct 2026, says three time resolutions (4, 5 and 6) "were adopted at the CGPM earlier today". [3] This is the closest thing to a BIPM press release; no separate BIPM news release was found (the BIPM news page timed out twice through Firecrawl).
- Independent confirmation: The Conversation ("Thursday 15 October") [8], The Guardian ("on Thursday") [7], timeanddate (15 Oct, final day) [5], Scientific American ("this morning", dated 15 Oct) [6].
- The "Friday" claim is **wrong**: the meeting ended on Thursday 15 Oct. Do not use it.
- **Venue wording:** Versailles (near Paris), not Paris itself. BIPM is based near Paris (Sèvres); the meeting was at Versailles. Write "in Versailles, near Paris". [2] [9]
- **Vote count: not published.** SciAm says it "won by a majority vote" [6]. The Guardian says delegates from 69 countries cast votes [7]; BIPM has 69 member states, one vote per state [2] [5]. No source gives yes/no/abstain numbers or names any country voting against. Do not invent a count or say "unanimous".

### Other decisions at the same meeting (useful context, optional) [2] [3]
- Resolution 4 (2026): groundwork for a new definition of the second (optical clocks), to be put to the 29th CGPM in 2030.
- Resolution 6 (2026): working towards an international lunar reference time scale traceable to UTC.

### Background
- **2022:** CGPM Resolution 4 decided the maximum UT1−UTC gap would be increased "in, or before, 2035", asked for a new limit keeping UTC continuous for at least a century, and asked for a draft resolution for the 2026 meeting. It already flagged the possible first negative leap second. [4] The 2026 vote brings the date forward from "by 2035" to 20 May 2027. [3] [8]
- **27 leap seconds since 1972**, the last one at the end of 31 Dec 2016. [5] [6] [9]
- **Why 20 May:** it is World Metrology Day. [5] [6]
- **Why negative leap seconds:** Earth's spin is slowing over the long term, but has sped up in recent years, so the next correction might have to *remove* a second (clocks would skip 23:59:59). Never done before. [5] [6] [9]
- Past failures: the 2012 leap second hit Reddit, LinkedIn and Qantas's booking system [7] [8] [9]; the 2016 leap second briefly caused Cloudflare DNS problems for some customers [9].
- Google "smeared" a leap second (around the 2008 one) over about 20 hours rather than adding it in one step [8]; Meta called the leap second "a major source of pain" in a 2022 engineering blog [9].
- "After 30 years of debates" (Dimarcq, CCTF President) [3] [6].

### How long until the 1-hour limit? (sources disagree, so be careful)
- Resolution: "several centuries" [1]. CCTF President's statement: "several millennia" [3]. Tavella (BIPM) to CNN: more than 3,000 years [9]. SciAm: a leap hour likely not needed for more than 1,000 years [6]. Guardian: "thousands of years" [7]. timeanddate: many centuries, exact time unknown because Earth's spin is unpredictable [5].
- Safe wording: "at least several centuries, and probably much longer; nobody can say exactly, because Earth's spin is unpredictable."

### Who is affected
- **Critical infrastructure:** transport, energy grids, telecoms, space projects [1]; satellite navigation, telecoms, energy transmission [4].
- **Finance:** time stamps down to the microsecond; leap-second steps are a problem (Bizouard) [5]; time stamps keep orders accurate and provide audit trails [8].
- **Data centres / cloud / big tech:** server synchronisation; inconsistent smearing methods [1] [8].
- **Satellite navigation:** GPS and Galileo time do not include leap seconds; Russia's GLONASS does, which is why Russia opposed the change in 2022 [9]. (Inference, not sourced: GLONASS will need adapting; do not state specifics.)
- **Radio time signals:** up to 2035, at the latest 2040, to adapt [1].
- **Astronomers / navigators needing Earth-rotation time:** can no longer treat UTC as a close stand-in for Earth's rotation; must use published UT1−UTC corrections [1] [8].
- **What readers' devices will notice: nothing.** Phones, laptops and watches take time from networks and will simply never see a 61-second (or 59-second) minute again. Most people will not notice [6]; it is a behind-the-scenes shift (Devoy, Royal Observatory Greenwich) [9]. Time zones, daylight saving and the date are unchanged. Clock time and sun time will drift apart extremely slowly: a fraction of a second per year at most, invisible in daily life (Guardian/timeanddate framing [5] [7]; do not give a precise per-year figure, none is sourced).

### Dissent and critics
- **Russia** opposed ending leap seconds in 2022 because GLONASS builds leap seconds in [9]; The Guardian says Russia "has also opposed the move" [7]. **Not confirmed** how Russia voted on 15 Oct 2026.
- **United Kingdom** was once opposed (Greenwich heritage) but its position has since changed (Tavella to CNN) [9]; the UK's NPL scientist welcomed the vote [7].
- **Marek Ziebart** (UCL, space geodesy) argued before the vote that the technical problems are overstated and that keeping time tied to Earth's rotation has value [9].
- **Michelle Bastian** (Edinburgh) argues the outcome favours big computing/tech firms over astronomers and other users [8].
- Tavella herself admitted no solution pleases everyone, but a decision had to be made [5].

### What remains open
- What a future generation does when the gap nears one hour: a "leap hour", or something else. Bizouard: "It postpones the decision" [5] [7]. Note: SciAm's headline frames the "leap hour" as the new system [6], but the resolution never says "leap hour"; it only sets the 1-hour limit [1].
- Exactly when that will be (centuries to millennia) [1] [3] [5] [9].
- Software and radio systems that still need updates before 20 May 2027 (radio has until 2035/2040) [1].
- How GLONASS adapts (not reported).
- Whether a leap second could still be announced before 20 May 2027: **not checked.** IERS normally announces about six months ahead [9]; no source mentions one being scheduled. Writer should not claim either way unless the orchestrator checks the latest IERS Bulletin C.
- Exact vote tally (not published).

## 2. Keyword plan

Semrush: not used (no API units, per the brief). Google suggestions via Firecrawl, checked 16 Oct 2026.

Suggestions seen:
- "leap second" (gl=us): leap second vote, leap second news, leap seconds since 1970, leap second 2026, leap second meaning, leap seconds list, leap second history.
- "leap second" (gl=gb): leap second meaning, leap seconds since 1970, leap second 2026, leap seconds list, leap seconds between gps and utc.
- "what is a leap second" (gl=us): what is a negative leap second.
- "leap seconds abolished" (gl=us): leap seconds abolished, leap seconds history, when was the last leap second.
- "leap hour" (gl=us): leap hour, leap hour proposal.
- "leap second end" (gl=in): weak; only "leap second list/schedule".
- Questions people ask (Firecrawl search): "why are leap seconds being abolished", "what is a leap second and why is it being abandoned" (WEF, Independent headlines).

| Phrase | Volume | Difficulty | Why |
|---|---|---|---|
| **leap second vote** (focus) | Google suggestion (US, 2nd suggestion for "leap second", trending now) | Google suggestion | Exactly this story; specific, fresh, a new site can compete on a news phrase |
| leap seconds abolished | Google suggestion (US) | Google suggestion | Matches the "why abolished" question; evergreen |
| what is a negative leap second | Google suggestion (US) | Google suggestion | Core reason for the vote; easy to explain in one section |
| leap second 2026 | Google suggestion (US, GB) | Google suggestion | Date-led searches this week |
| when was the last leap second | Google suggestion (US) | Google suggestion | Answerable in one line (31 Dec 2016) |
| leap hour | Google suggestion (US) | Google suggestion | The "what happens next" angle |
| leap second meaning | Google suggestion (US, GB) | Google suggestion | Plain-English explainer line for beginners |

- **focusKeyword:** `leap second vote`
- **keywords (pick 5):** `leap seconds abolished`, `negative leap second`, `leap second 2026`, `when was the last leap second`, `leap hour`
- **seoTitle (50 chars):** `Leap second vote: UTC drops leap seconds from 2027`
  - Alternative (49): `Leap second vote: why clocks stop at 27 in 2027` (only if the writer leans on the 27 count; less clear, prefer the first)
- **description (147 chars):** `In a leap second vote on 15 Oct 2026, world timekeepers agreed to stop adding them from 20 May 2027. What changes, and what your phone will notice.`
  - Alternative (144): `World timekeepers voted on 15 Oct 2026 to stop adding leap seconds from 20 May 2027. Here is what changes, why, and what your phone will notice.`
- **slug:** `leap-second-vote-2027`

## 3. Cover photo

- **First choice (Pexels, free):** "Gray Roman Numeral Clock" by **Amar Saleem**. https://www.pexels.com/photo/gray-roman-numeral-clock-69357/ . Landscape, 6016 x 4016. Close-up of an antique clock face with Roman numerals and decorative design. Pexels page says free to use. Page text mentions no brand or logo; **orchestrator must check the screenshot** for any maker's name on the dial before using.
- **Backup (Unsplash, free Unsplash License, not Unsplash+):** "A close up of a white clock with black hands" by **Erik Mclean** (@introspectivedsgn). https://unsplash.com/photos/a-close-up-of-a-white-clock-with-black-hands-DNOk6osqjoY . Orientation not stated on the page; check for a brand name on the dial.
- Suggested alt text: "Close-up of an old clock face with Roman numerals and ornate hands".
- Credit line: "Photo: Amar Saleem / Pexels".
- Do not use the timeanddate, SciAm, CNN or Guardian images (iStock, Shutterstock, Getty).

## 4. Cautions for the writer

1. **Date:** the vote was **Thursday 15 Oct 2026**. Ignore the "Friday" claim. Place: **Versailles, near Paris**, not "Paris" alone.
2. **No vote count.** Say "approved by majority vote" or just "approved"; never "unanimous", never a number. Don't say any named country voted against in 2026 (not confirmed); Russia's opposition is historical (2022) and The Guardian's general statement.
3. **Leap seconds are not being replaced by a scheduled "leap hour".** The resolution only sets a 1-hour maximum gap. Any leap hour is a decision for the far future, and may never happen. Label SciAm's "leap hour system" framing carefully.
4. **"How long until 1 hour"** varies by source (several centuries [1] to several millennia [3]; 1,000+ / 3,000+ years in press). Use a range and say it's uncertain.
5. **Negative leap second:** 30% probability **by 2035** (from a March 2025 CCTF/IERS workshop), not "30% chance next year". It has never happened.
6. **Y2K comparison** is BIPM's own wording about preparation *costs* for a negative leap second, not a claim that the leap second itself is a Y2K-scale disaster. Attribute it.
7. **Readers' devices:** nothing visible changes. No settings to change, no update to install for ordinary users. Don't create worry.
8. **Time zones and daylight saving are untouched.** Make that clear; some readers may confuse this with DST debates.
9. GPS/Galileo don't use leap seconds; GLONASS does (CNN). Don't speculate how GLONASS will change.
10. Google's smear: The Conversation describes a ~20-hour smear around the 2008 leap second (from Google's 2011 blog). Keep it general: "big tech firms spread the extra second out in their own ways".
11. Official text is French; quote the English version only as "the BIPM's English text".
12. CNET was not readable; do not cite it as a source of any fact.
13. Possible leap second before 20 May 2027: not checked; don't claim one way or the other.
14. Category is science, but the reader angle is tech (phones, servers, banks, GPS). No affiliate fit is obvious; banners run as usual.

## 5. Suggested internal links

- Category: `/news/category/science/`
- Related existing stories in `src/content/news/` (all loose fits; use only where natural):
  - `thwaites-glacier-sea-level` (science): CNN notes melting polar ice also changes Earth's spin [9]; only link if the writer mentions what changes Earth's rotation.
  - `google-willow-magic-state-quantum` (science): precision physics; weak link, optional.
- Related guide: none existing that fits. Suggested future guide (low priority): none money-related; skip `relatedGuide` or use whatever the writer's template default is.
