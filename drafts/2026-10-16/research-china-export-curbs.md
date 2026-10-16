# Research: China proposes export curbs on 40 AI, solar and biomedicine technologies

- Planned slug: `china-ai-solar-tech-export-curbs`
- Category: ai (also business)
- Researched: 2026-10-16, about 15:10 to 15:25 UTC
- Tools: Firecrawl (scrape and search; hit the per-minute rate limit three times, waited and retried, nothing lost), WebSearch for background. Semrush not used (no API units, per the brief).

## 1. Official sources (in Chinese, translated by me)

- **A. Announcement No. 48 of 2026** (Ministry of Commerce, MOFCOM, and Ministry of Science and Technology, MOST), posted 16 Oct 2026 at 16:00 Beijing time (08:00 UTC). Issued by MOFCOM's Bureau of Security and Control.
  https://www.mofcom.gov.cn/zwgk/zcfb/art/2026/art_0a31a3c9ac404f7a9b0e917ce3412997.html
- **B. Attachment 1** (the draft list itself, a .wps file, read in full through Firecrawl): "Scope of AI, biomedicine and photovoltaic technologies proposed for the Catalogue of Technologies Prohibited and Restricted from Export (draft for comment)".
  https://www.mofcom.gov.cn/cms_files/filemanager/600926013/attach/20269/4f8fdb877dd448dfab8b65ba1f340bd5.wps (reached through the download link on page A)
- **C. Spokesperson Q&A**, MOFCOM press office, 16 Oct 2026 16:00.
  https://www.mofcom.gov.cn/syxwfb/art/2026/art_a4acff07e134447fbe7bbeb486df3ea6.html

## 2. Key facts, checked against the official text

| # | Fact | Status | Source |
|---|------|--------|--------|
| 1 | The two ministries propose to revise the catalogue (legal basis: Foreign Trade Law and the Regulations on Technology Import and Export), adding some AI, biomedicine and solar (photovoltaic) technologies. It is a **draft for public comment**. | Confirmed, official | A |
| 2 | **40 technologies in total: 23 AI** (large models, agents, computing clusters, information processing), **5 biomedicine** (cell and gene therapy, small nucleic acid drugs, pathogenic microbes), **12 solar** (polysilicon, wafer and cell manufacturing). | Confirmed, official | A, C |
| 3 | **14 to be banned, 26 to need a licence** ("restricted"). | Confirmed, official (C). I also counted the sub-items in the attachment: AI 6 banned + 17 restricted = 23; biomedicine 3 + 2 = 5; solar 5 + 7 = 12; banned 14, restricted 26. It matches. Note: the attachment groups them into fewer numbered rows, so "40" counts sub-items, not rows. | B, C |
| 4 | Banned examples named by the ministry: **AI-driven generation and mutation of malicious code**; **proprietary cell and gene therapy process platforms**; **perovskite and tandem solar module production technology**. | Confirmed, official | C |
| 5 | Licence examples named by the ministry: **AI-assisted vulnerability discovery**; **discovery and validation of brand-new cell and gene therapy targets**; **polysilicon engineering for single lines of 30,000+ tonnes a year**. | Confirmed, official | C, B |
| 6 | **Comment period: 16 Oct to 15 Nov 2026**, by email (jinxianmulu@mofcom.gov.cn), fax or post. | Confirmed, official | A |
| 7 | **Registration rule:** from the day of the announcement until the revised catalogue takes effect, anyone exporting a listed technology must **register first** on MOFCOM's online system (ecomp.mofcom.gov.cn). Covers: transfer of ownership abroad (for example, selling IP); licensing a technology for use abroad; a change of owner or controller to a foreign entity; other cases MOFCOM names. **Exports already started but not finished are included.** Details to give: exporter and recipient, destination country, the technology and its use, expected value. Exporters must judge for themselves whether they are covered. Solar key and core equipment on the list must also be registered. | Confirmed, official | A, C |
| 8 | **Finished products are not covered**: "products made using the relevant technologies are outside the scope of management" (Q&A). It is about transferring know-how abroad. | Confirmed, official | C. pv magazine says the same. |
| 9 | **Open-source or published technology is excluded**: technology already in the public domain through open source or published academic papers is not covered. | Confirmed, official | A (stated for AI); C |
| 10 | **"Does not target any specific country, region or entity"**; called a routine update. The catalogue has been revised many times since 2001, with items added and removed. | Confirmed, official (exact wording adds "region or entity") | C |
| 11 | **Most AI technology stays freely exportable**: "the vast majority of AI technologies can still be exported freely" once the rules take effect. | Confirmed, official | C |
| 12 | **App and API access is NOT covered.** For companies using a restricted model to offer **API calls, app or web interaction, SaaS apps, or lightweight on-device deployment**, this is "not within the scope of large-model technology export management". But **deploying a restricted model locally overseas IS covered**; if it runs on the company's own cloud abroad, simplified "automatic licensing" may apply. | **Now confirmed by the official Q&A** (earlier it rested on Dow Jones only). Reuters reports it the same way. | C; Reuters |
| 13 | Easier rules ("automatic licensing", described as "declare and export almost at once") for: open-sourcing AI technology, Chinese firms building and running their own computing centres abroad, chip tape-out and manufacturing abroad, joint R&D using foreign resources, and work on international standards. | Confirmed, official | C, B (footnote) |
| 14 | Reason given: national security. Examples: AI malicious-code tools could be used to attack critical infrastructure, defence and core government systems. Aim: keep AI "under human control". For solar: used in aerospace, defence, drones and high-security infrastructure. | Confirmed, official | C |
| 15 | Biomedicine: the bans only stop **transfer of ownership**. Licensing out, and outsourced R&D or manufacturing services, are not covered. Licensing out new targets gets automatic licensing. Exports for public-health emergencies, humanitarian aid and joint R&D get easier rules. | Confirmed, official | B, C |
| 16 | The Q&A also promises more support for technology exports between members of the "World AI Cooperation Organization" and for Global South capacity building. | Confirmed, official | C |

### AI items in detail (from the attachment, B)

- **Banned:** (1) deepfake-detection systems built mainly for China's cross-border data security, with 95%+ accuracy and recall; (2) three kinds of AI-driven offensive cyber tools (self-mutating malicious code, sandbox evasion and self-rewriting code, mass generation of malware variants), each with numeric thresholds and each limited to tools that could attack critical infrastructure, defence or core government systems; (3) **large models trained on China's "core data"** (as defined by the Data Security Law); (4) high-performance AI agents built mainly for critical infrastructure, defence or core government use.
- **Restricted (licence):** better deepfake detection (98%+) and image or video steganography; **AI-assisted vulnerability discovery** (for example, chaining two or more low or medium bugs into a working attack, or finding 5+ unknown high-severity flaws in one major project); voiceprint recognition and Chinese and minority-language translation tech; **large models trained on "important data"**, and the **core tech of any model** (weights, key checkpoints, source code, architecture, training and inference optimisation) with **training compute of 10^26 FLOPs or more, 2 trillion+ parameters, or "globally leading" capability** (defined as a top-10 global ranking in public evaluations at the time of export); **AI agents** above set thresholds (for example, splitting tasks into 20+ steps, 60+ agents working together, or 200+ tools); **AI chip design** (see below); and **computing-cluster technology** for clusters of more than 10,000 AI accelerator cards (interconnect of 800 GB/s+, fault tolerance, communications scheduling, running mixed chips from two or more vendors).
- **AI chip design (restricted), official wording:** AI processor design technology (architecture, own instruction set, IP cores, software stack) with **any** of: 14 nm or smaller process; floating-point or integer compute; **2.5D or 3D advanced packaging**; high-speed interconnect; new non-von-Neumann designs (compute-in-memory, brain-like); or use in self-driving, computer vision or smart voice. Also **memory chip design**: **3D flash** (density 8 Gb/mm² or more, I/O 1.5 Gbps or more, or bonding) and DRAM (18 nm or smaller, vertical-channel transistors, bonding or multi-layer stacking).
  - So the **2.5D/3D chip item is confirmed in the official attachment**, not only by Global Times. Writer's caution: the official item is "AI chip design technology that uses 2.5D/3D packaging" (one of several triggers), not a separate "2.5D/3D chip" category as Global Times worded it. Note too that "has floating-point or integer compute" as a trigger looks very broad; how it is read in practice is an open question (my reading; no source has commented on it).

### Solar items in detail (B; pv magazine agrees)

- **Banned:** large cold-hydrogenation fluidised-bed polysilicon processes (250,000+ t/yr trichlorosilane per line) and silane fluidised-bed processes (20,000+ t/yr); wafers 70 micrometres thick or thinner; edge passivation for thin cells; **perovskite-silicon tandem cells (182 mm+ wafers, 30%+ efficiency)**, perovskite slot-die coating 1.1 m+ wide, large single-junction perovskite modules (1 m²+, 18%+) and large tandem modules (1 m²+, 28%+). Equipment-making know-how is included.
- **Restricted:** polysilicon engineering for 30,000+ t/yr lines and 800+ t/yr reduction furnaces; crystal pulling, ingot machining and thin wafer cutting; high-efficiency **TOPCon and back-contact (XBC) cell** processes; **heterojunction (HJT) cell processes**, including p-type HJT measured under AM0 (space) light.
  - So the **HJT item is confirmed in the official attachment**, not only by Global Times. The space link (AM0) is in the official text; Global Times and pv magazine both point it out.
- The ban also covers the equipment carrying these technologies (a long list of named machines in a footnote). The Q&A says other solar equipment is not covered in principle.

### Biomedicine items (B)

- Banned (ownership transfer only): proprietary cell and gene therapy process platforms; proprietary siRNA drug platforms; gain-of-function and directed-passage work on pathogenic microbes.
- Restricted: discovery and validation of brand-new cell and gene therapy targets and brand-new siRNA targets.

## 3. What comes only from state media or a single outlet

| Claim | Who says it | Status after checking |
|-------|-------------|------------------------|
| 2.5D/3D AI chip design restricted; 3D flash restricted | Global Times (state media) | **Confirmed in official attachment B.** Can now be cited to the official text. |
| HJT solar cells restricted (space use) | Global Times; pv magazine | **Confirmed in official attachment B.** |
| API, app and website access outside the scope | Dow Jones (single outlet at first) | **Confirmed in official Q&A C**, and Reuters reports it too. |
| Chinese analysts say the catalogue "will not impede global technological exchanges"; quotes from Cui Fan (University of International Business and Economics) and Zhao Qiuyan (China Machine Think Tank); an anonymous solar executive | Global Times only | State media only. Use only if labelled as the view of Chinese state media and its experts. |
| China holds about 60% of the world's AI patents (WIPO data); Chinese drug licensing deals passed $130bn in 2025 | Global Times only | Not checked. Do not use, or label clearly. |
| Kimi K3 and Qwen 3.8-Max have more than 2 trillion parameters and could fall in the restricted group | AP only | Single outlet. AP notes the proposal **names no models**. If used, credit AP. |
| Chinese officials talked with Alibaba, ByteDance and Z.AI in July about limiting overseas access to top models | Reuters (July report); WSJ via Dow Jones reported similar talks | Earlier reporting, not official. Credit it as reporting. |
| China blocked Meta's $2bn purchase of AI start-up Manus in April 2026 | Dow Jones only (in this pass) | Not checked separately. Credit Dow Jones or leave out. |
| US asked Anthropic in June to bar foreign nationals from some models, later lifted | AP only | Not checked separately. Context only; leave out unless needed. |

## 4. Outside experts and industry voices

- **Lian Jye Su, chief analyst, Omdia** (via AP): the move "can be seen as a response to Western countries posting sovereignty requirements on AI, robotics, telecommunications, and other key technologies." AP says he believes the aim is to regulate access to Chinese technology better. (AP: https://apnews.com/article/china-export-restrictions-ai-chips-solar-us-5ac381c0c6d6628bbea2e0da7d855a5b)
- **Gary Ng, senior economist, Natixis** (via AP): "The world is getting more fragmented in trade and investment, but also in access to technologies." (same AP link)
- **pv magazine analysis (Vincent Shaw)**, its own view, not a quoted expert: in the near term the rules could delay solar factory projects abroad, raise compliance costs and limit the use of advanced Chinese production technology overseas. Over time they could strengthen China's control over how next-generation solar technology spreads. But they could also complicate Chinese makers' expansion abroad and invite retaliation. Licensing, installing production lines abroad, equipment exports and on-site support could all need approval. (https://www.pv-magazine.com/2026/10/16/china-proposes-ban-on-exports-of-perovskite-tandem-solar-manufacturing-technology/)
- **Reuters analysis:** the API/app exemption could let DeepSeek, Alibaba and others keep growing abroad while Beijing watches transfers of sensitive tech more closely. (https://www.reuters.com/world/asia-pacific/china-proposes-adding-40-ai-biotech-solar-technologies-export-control-list-2026-10-16/)
- **State-media experts** (Global Times only, label as such): Cui Fan (UIBE) says the update follows the law and international practice and helps stop cutting-edge technology being "cherry-picked". Zhao Qiuyan (China Machine Think Tank) says core models are banned and important models restricted, a tiered approach.
- **No Western industry group** (for example SEIA, SolarPower Europe, BIO or a tech trade body) had commented that I could find by about 15:20 UTC. Bloomberg's full text was paywalled; only its summary was readable.

## 5. Context: China's earlier export controls

| When | What | Source |
|------|------|--------|
| 3 Jul 2023 (in force 1 Aug 2023) | Licences required to export gallium and germanium products (8 gallium and 6 germanium items), after US, Japanese and Dutch chip curbs. China exported no wrought germanium in August 2023. | Reuters via Malay Mail https://www.malaymail.com/news/money/2023/07/04/china-to-restrict-exports-of-chipmaking-materials-as-us-mulls-new-curbs/77733 ; Mining Weekly https://www.miningweekly.com/article/china-exported-no-germanium-gallium-in-aug-after-export-curbs-2023-09-20 |
| 21 Dec 2023 | Same catalogue revised: **ban on exporting rare-earth extraction and separation technology**, plus rare-earth metal and alloy production and some magnet technology. | Reuters via Inquirer https://newsinfo.inquirer.net/1878126/china-bans-export-of-rare-earth-processing-technologies/amp ; China Briefing https://china-briefing.com/news/technologies-subject-to-export-control-in-china-prohibited-restricted-export-catalogue |
| 3 Dec 2024 | MOFCOM Announcement No. 46: gallium, germanium, antimony and superhard materials banned "in principle" for export to the US, a day after new US chip curbs. | PBS/AP https://www.pbs.org/newshour/world/china-bans-exports-to-u-s-of-key-high-tech-materials-in-response-to-chip-sanctions ; FMT https://www.freemalaysiatoday.com/category/business/2024/12/03/china-bans-exports-of-gallium-germanium-antimony-to-us |
| Jan 2025 draft, 15 Jul 2025 final | Same catalogue: **battery cathode (LFP, LMFP) preparation and lithium extraction and refining technologies** added to the restricted list. The draft-then-final pattern matches today's process. | Herbert Smith Freehills Kramer https://www.hsfkramer.com/notes/energy/2025-posts/china-battery-technology-export-restrictions-cathode-lithium-gallium ; Project Blue https://projectblue.com/blue/news-analysis/1266/china-restricts-export-of-battery-cathode-material-and-lithium-extraction-technologies |
| 4 Apr 2025 | Licences required for 7 medium and heavy rare earths (samarium, gadolinium, terbium, dysprosium, lutetium, scandium, yttrium) and magnets. Still in force. | China Briefing https://www.china-briefing.com/news/chinas-rare-earth-export-controls-impacts-on-businesses/ ; Pillsbury https://pillsburylaw.com/en/news-and-insights/china-suspends-export-controls-certain-critical-minerals-related-items.html |
| 9 Oct 2025 | Wider rare-earth controls (5 more elements and rules reaching overseas makers), **suspended for a year** after the US–China deal, reportedly until 10 Nov 2026. | FDD https://www.fdd.org/analysis/china-pauses-some-rare-earth-export-curbs-while-retaining-levers-of-control/ ; Mining Technology https://www.mining-technology.com/news/china-rare-earth-export-pause-nears-expiry-amid-persistent-supply-concentration/ |

- Global Times says the catalogue was first published in 2001 and revised in 2008, 2020, 2023 and 2025 (state media; the 2023 and 2025 revisions above agree).
- **Key difference to tell readers:** the 2023 to 2025 mineral controls stop **goods** (metals and magnets) leaving China. This catalogue, like the Dec 2023 rare-earth tech ban and the 2025 battery-tech curbs, stops **know-how** leaving (licences, blueprints, IP sales, whole production lines), not finished products.
- **Timing (my observation):** the comment period ends 15 Nov 2026, close to the reported 10 Nov 2026 end of the rare-earth pause. No outlet has linked the two; do not suggest a link as fact.
- **Earlier reporting:** in July 2026 the FT (via TechRepublic and others) and Reuters reported that Beijing was weighing limits on AI model weights and training data. Reuters said then it could not verify the FT report. Today's draft partly matches that reporting. https://techrepublic.com/article/news-apac-china-ai-model-export-controls

## 6. What is still uncertain

- When the final rules will be published and take effect after 15 Nov. No date is given.
- How "core data" and "important data" will be defined in practice (the text points to the Data Security Law and related rules).
- What "globally leading capability" (top 10 in public rankings) means for specific models. No models are named.
- Whether open-weight releases of large models count as "open source, already public" and are therefore free. The text suggests open-sourcing gets automatic licensing and public-domain tech is excluded, but weights of new frontier models released abroad may be a grey area. Unclear.
- How wide the AI chip design item is in practice (one trigger is any "floating-point or integer compute").
- Whether this answers US chip controls. AP and Reuters frame it as part of the US–China tech race; the ministry denies targeting any country.
- Bloomberg's full article was behind a paywall; only its summary was read (it says model weights and source code above performance thresholds would be restricted, which matches the attachment).

## 7. Reader angle (for the writer)

- Ordinary users of Chinese AI apps or APIs (DeepSeek, Qwen, Kimi and others) abroad: **no change** under this draft, per the Q&A.
- Solar buyers: finished Chinese panels are not affected; new factories abroad that rely on Chinese know-how and equipment could be slowed (pv magazine).
- Drug companies licensing Chinese biotech: licensing is mostly kept open; ownership sales of platforms are the target.
- Businesses working with Chinese partners on these technologies: the registration duty starts **now**, including deals already in progress.

## 8. Related guide

- Only `sample-guide` exists in `src/content/guides/` (a layout sample). No fitting guide.
- Suggested new guide: "Using Chinese AI models (DeepSeek, Qwen, Kimi) safely from abroad: what is allowed, pricing and privacy". It fits the API-exemption angle. Or leave `relatedGuide` empty.
- Possible internal link: `tsmc-q3-2026-record-profit` (chip-supply context), if the writer finds a natural place.

## 9. Keyword plan (Google suggestions via Firecrawl; Semrush not used, no API units)

Suggestions pulled on 2026-10-16:
- `china export controls` (gl=us): china export controls japan entities, **rare earth**, mp materials, **ai**, japan, **list**, japan companies, on rare earth minerals, critical minerals.
- `china export controls` (gl=gb): rare earth, japan entities, japan, critical minerals, rare earth minerals, **ai**, us firms, **list**, mp materials.
- `china export ban` (gl=us): oil, japan, list, silver, nexperia, rare earth, fertilizer, sulphuric acid.
- `china ai export` (gl=us): **china ai export controls**, china ai exports h1 2026, china ai exports, china's ai exports database, china ai chip export, china ai token export.
- Not pulled (rate limit): "china solar technology export", "what are export controls". Firecrawl news search shows readers' main questions are what is covered, whether apps and APIs are affected, and how it compares with rare earths.

| Phrase | Volume | Difficulty | Why |
|--------|--------|------------|-----|
| **china ai export controls** (focus) | Google suggestion (US top result for "china ai export"; "china export controls ai" also appears in US and UK) | Google suggestion, no numbers | Exact match for the story's main angle, specific enough for a new site, appears in both US and UK suggestions. |
| china export controls | Google suggestion (head term, US and UK) | Likely high (broad) | Use in the text and description; too broad to target alone. |
| china export controls list | Google suggestion (US and UK) | Google suggestion | The story explains what is on the new list. |
| china export controls rare earth | Google suggestion (top in UK) | Google suggestion | Context section compares with rare-earth curbs. |
| china ai chip export | Google suggestion (US) | Google suggestion | Covers the chip design item. |
| china solar technology export restrictions | Not checked (rate limit); built from the topic | Unknown | Covers the solar angle and pv magazine-style searches. Mark as unverified. |

- **Suggested seoTitle:** "China AI Export Controls: 40 Technologies Targeted" (50 characters)
  - Alternative: "China AI Export Controls Hit Models, Chips and Solar" (52 characters)
- **Web address:** `/news/china-ai-solar-tech-export-curbs` (the planned slug is fine; it is short and hyphenated).

## 10. Cover photo

- **Suggested:** "Aerial view of a large solar panel farm" by **Kristaps Ungurs** on Unsplash (Latvia). The page is titled "Free Photo on Unsplash" (standard Unsplash Licence, not Unsplash+).
  https://unsplash.com/photos/aerial-view-of-a-large-solar-panel-farm-va8Ou1Sgljo
  - Aerial shot of panel rows, so brand logos are unlikely, but I only read the page text and did not view the image. **Check visually for logos before use.** The full-size image should be well over 1200 px wide; compress it below 250 KB.
  - Credit: "Photo by Kristaps Ungurs on Unsplash".
- **Backup (not opened, search listing only):** Pexels "Solar Panels on a Field", https://www.pexels.com/photo/solar-panels-on-a-field-15751131/ ; the photographer is said to be Mark Stebnicki (from search text, not confirmed). The listing mentions warehouses and silos in the background, so check for signs or logos.

## 11. Source list (original first)

1. MOFCOM/MOST Announcement No. 48 (2026): https://www.mofcom.gov.cn/zwgk/zcfb/art/2026/art_0a31a3c9ac404f7a9b0e917ce3412997.html
2. MOFCOM spokesperson Q&A: https://www.mofcom.gov.cn/syxwfb/art/2026/art_a4acff07e134447fbe7bbeb486df3ea6.html
3. Attachment 1 (draft list): https://www.mofcom.gov.cn/cms_files/filemanager/600926013/attach/20269/4f8fdb877dd448dfab8b65ba1f340bd5.wps
4. AP (Chan Ho-Him): https://apnews.com/article/china-export-restrictions-ai-chips-solar-us-5ac381c0c6d6628bbea2e0da7d855a5b (also in the Washington Post: https://www.washingtonpost.com/business/2026/10/16/china-export-restrictions-ai-chips-solar-us/216d5918-c95c-11f1-aefb-abe4112d087e_story.html, paywalled)
5. Reuters (Eduardo Baptista): https://www.reuters.com/world/asia-pacific/china-proposes-adding-40-ai-biotech-solar-technologies-export-control-list-2026-10-16/
6. Dow Jones via Morningstar (Sherry Qin): https://www.morningstar.com/news/dow-jones/202610162068/china-proposes-export-controls-on-ai-technologies
7. Bloomberg (Nectar Gan, Luz Ding), summary only: https://www.bloomberg.com/news/articles/2026-10-16/china-proposes-export-controls-on-ai-models-chips-and-agents
8. pv magazine (Vincent Shaw): https://www.pv-magazine.com/2026/10/16/china-proposes-ban-on-exports-of-perovskite-tandem-solar-manufacturing-technology/
9. Global Times (state media): https://www.globaltimes.cn/page/202610/1372418.shtml
10. Background links in section 5.
