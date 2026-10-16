# Research notes: AI reads 101,243 body scans, links brown fat to better health; losartan switches it on in mice

- Suggested slug: `brown-fat-study-losartan`
- Category: science (health, with an AI angle)
- Researched: 2026-10-16 (about 10:00–10:25 UTC) by the TechSpotlight researcher
- Related guide: none fits (only `sample-guide` exists in `src/content/guides/`). Do not force a money page on a health story.
- **Date correction:** the brief and candidates.md say the paper came out on 15 Oct. The Nature page metadata says **published online 14 Oct 2026**, and both official releases are dated **14 Oct 2026** (NIH page time stamp 11:00 US Eastern, so about 15:00 UTC). Independent coverage (News-Medical) came out on 15 Oct. At the time of this run the story is about 43 hours old, which is still inside the 48-hour window. The writer should say "published this week" or "on 14 October", not "on 15 October".

## Sources (original first)

1. **The paper (open access, "© 2026 The Author(s)").** Gómez-Banoy N., Barrero J.A., ... Lafontaine D., Schöder H., Cohen P. "Artificial intelligence-enabled clinical phenotyping of human brown fat." *Nature*, published online 14 Oct 2026. DOI 10.1038/s41586-026-11162-7. https://www.nature.com/articles/s41586-026-11162-7
2. **NIH news release**, 14 Oct 2026: "A blood-pressure drug may activate health-promoting brown fat". https://www.nih.gov/news-events/news-releases/blood-pressure-drug-may-activate-health-promoting-brown-fat
3. **Rockefeller University news release**, 14 Oct 2026: "Researchers discover a commonly prescribed blood-pressure drug may stimulate 'healthy' brown fat". https://www.rockefeller.edu/news/40712-brown-fat-metabolism-losartan-heart-disease-diabetes/
4. News-Medical (Hugo Francisco de Souza), 15 Oct 2026: "AI study of 101,000 patients links brown fat to heart and mental health". https://www.news-medical.net/news/20261015/AI-study-of-101000-patients-links-brown-fat-to-heart-and-mental-health.aspx
5. Medical Xpress, Oct 2026 (seen in search; it appears to reprint the Rockefeller release, not fully read): https://medicalxpress.com/news/2026-10-commonly-blood-pressure-drug-healthy.html
6. Technology.org, 15 Oct 2026 (listed in candidates.md; I could not open it because of a scraper rate limit, so it is not used for any fact below): https://www.technology.org/2026/10/15/brown-fat-ai-pet-ct-study-diabetes-anxiety-losartan/
7. Earlier study by the same lab (background): Becher T. et al., "Brown adipose tissue is associated with cardiometabolic health", *Nature Medicine* 27, 58–65 (2021). https://doi.org/10.1038/s41591-020-1126-7 and Rockefeller's 2021 story: https://www.rockefeller.edu/news/29798-study-50000-people-finds-brown-fat-may-protect-many-diseases/

## Verified facts (source per fact)

### The paper and the people
- Title: "Artificial intelligence-enabled clinical phenotyping of human brown fat". Journal: *Nature*. Type: research Article. Online 14 Oct 2026. Open access. [1]
- 18 authors. **First author: Nicolás Gómez-Banoy, M.D.**, an endocrinologist and instructor in clinical investigation in Paul Cohen's lab at Rockefeller University, and a fellow in obesity medicine at Weill Cornell Medicine. [1][2][3]
- **Senior (last) author: Paul Cohen, M.D., Ph.D.**, head of the Laboratory of Molecular Metabolism at Rockefeller University (Albert Resnick, M.D. Associate Professor; senior attending physician). [1][3]
- Key co-authors from **Memorial Sloan Kettering Cancer Center (MSKCC)**: Heiko Schöder, M.D. (radiology) and Daniel Lafontaine (medical physics). [1][2][3]
- Institutions in the author list: Rockefeller University; Memorial Sloan Kettering Cancer Center; Weill Cornell Medicine (all New York); plus Universidad Nacional de Colombia (Bogotá) and the Max Delbrück Center / Heidelberg University (Mannheim, Germany). [1]
- **Funding: NIH**, through grants from NIDDK (DP1DK139983), the National Cancer Institute (P30CA008748), NIGMS (T32GM152349) and NCATS (UL1TR001866). [2]
- NIDDK director Griffin P. Rodgers, M.D., said the study gives a clinical reason to explore brown fat as a treatment target in people (paraphrase; he is from the funding agency, so he is **not** an independent voice). [2]

### Where the scans came from (the patient population)
- **101,243 patients** from one large cancer centre, Memorial Sloan Kettering in New York. [1][3]
- The scans were **18F-FDG PET-CT scans done as part of cancer care** (the NIH release says "patients being treated for cancer"; Rockefeller says scans "performed as part of their cancer surveillance"). They were not done to look for brown fat. [1][2][3]
- This study combines an earlier group of scans (June 2009 to March 2018, the cohort from the 2021 study) with new scans from **2018 to 2024**. [1]
- Brown fat is rarely seen on these scans: in the new 2018–2024 scans, 4.4% of scans reported brown fat, and **4,778 patients (7.9%)** had at least one scan positive for brown fat. [1]
- Cohen: the team "doubled" the number of patients from the 2021 study (about 50,000 then) and looked at **more than 500 diagnosis codes**, versus a few before. [2][3][7]
- For the main comparisons, the team matched groups by age, sex, BMI and outdoor temperature on the scan day: **8,897 people with brown fat vs 17,405 without** (26,302 in total). [1]
- Note for the writer: in that matched group, **20,404 of 26,302 were women** (about 78%), from a paper figure legend. [1] This is worth one short line about who was studied, if space allows.

### How the AI was used
- Brown fat burns energy to make heat, and the sugar-tracer PET-CT scans used in cancer care happen to light up active brown fat. [2]
- The team used a **machine-learning tool built by MSKCC colleagues** (Lafontaine and others; published 2025 in *EJNMMI Research*: an nnU-Net V2 model run inside the TriDFusion (3DF) image viewer). [1][3]
- What it did: it outlined brown fat in **six body regions** (neck, above the collarbone, middle of the chest, along the spine, armpit, abdomen) and measured how active it was in each (tracer uptake times volume). [1]
- It measured activity **semi-automatically in 8,709 patients**, which is 97.9% of the brown-fat-positive group. (Abstract wording: "approximately 8,700".) [1]
- Plain-English framing: the AI did the slow job of finding and measuring brown fat on thousands of scans, so the team could compare it with health records at a scale people could not manage by hand. The disease links come from statistics on medical records, not from the AI "diagnosing" anyone. [1][3]

### Exact figures (people with brown fat vs without, matched comparison) [1]
All are odds ratios (OR) with 95% confidence intervals; all P < 0.001.
| Condition | OR (95% CI) | Plain words |
|---|---|---|
| Type 2 diabetes | 0.42 (0.35–0.50) | about 58% lower odds |
| Chronic ischaemic (coronary) heart disease | 0.53 (0.44–0.62) | about 47% lower odds |
| High blood pressure (primary hypertension) | 0.79 (0.73–0.85) | about 21% lower odds |
| Cholesterol and blood-fat disorders | 0.76 (0.70–0.83) | about 24% lower odds |
| Depressive episode | 0.68 (0.61–0.76) | about 32% lower odds |
| Anxiety disorders | 0.78 (0.73–0.84) | about 22% lower odds |
| Sleep disorders | 0.77 (0.71–0.85) | about 23% lower odds |
| Respiratory failure | 0.46 (0.37–0.57) | about 54% lower odds |
| Ascites (fluid in the belly) | 0.51 (0.43–0.62) | about 49% lower odds |

- Type 2 diabetes and chronic ischaemic heart disease were the two strongest of the top 20 lower-prevalence diagnoses. [1] News-Medical also reports "58% lower odds" of type 2 diabetes and "47%" for heart disease, which matches. [4]
- "Lower odds" is **not** the same as "lower risk". Write "lower odds" or "less common among", never "cuts your risk by 58%".
- **More activity, more benefit:** higher brown-fat activity (not just having it) went with lower odds of cardiometabolic disease and healthier white-fat distribution. The **armpit (axillary)** region showed the strongest link; Gómez-Banoy says the armpit was tied to lower odds of high blood pressure. [1][2][3]
- People with brown fat had better blood-sugar measures, blood-fat profiles and heart-ultrasound measures, and lower inflammation markers. [1][3]
- **New:** the link to anxiety and depression is reported "for the first time" in this study, according to both releases. [2][3]
- Possible downsides found: five of the six diagnosis codes that were *more* common in people with brown fat were **skin conditions**; there was also a trend (not statistically significant after adjustment) toward more **osteoporosis**. [1] Rockefeller lists osteoporosis and skin disease as things to study next. [3]

### Medicines linked to brown fat (people) [1]
- Blood-pressure drugs of the ARB family were linked to *more* brown fat: **losartan OR 1.36** (1.13–1.63; P = 0.006), **valsartan OR 1.52** (1.14–2.02; P = 0.02).
- Some drugs were linked to *less* brown fat: beta blockers atenolol (OR 0.42) and propranolol (OR 0.38); antidepressants (SSRIs) fluoxetine (OR 0.33), escitalopram (OR 0.60), sertraline (OR 0.57); metformin was also negatively associated. Dexamethasone (a steroid) was positively associated (OR 1.22). [1][3]
- Rockefeller: SSRIs "had a dampening effect" on brown fat activity. [3] **Caution:** in the paper this is an association in records; do not tell readers antidepressants "switch off" brown fat.
- Cohen: "plenty of other medications" were linked to brown fat activity; "This is just a start." [2][3]

### What losartan did in cells and in mice [1][2][3]
- **Cells:** in lab-grown mouse brown fat cells, losartan at higher doses (50 and 100 micromolar; 10 had no effect) raised UCP1, the main heat-making protein, plus other heat-making genes, and raised the cells' energy burning. [1]
- **How:** it worked through a different switch (PPAR-gamma) from the one that lowers blood pressure (the AT1 receptor). The team says that could, in future, let scientists separate the two effects, so brown fat could be stimulated in people with normal blood pressure. [1][2][3]
- **Mice:** healthy mice given losartan (100 mg per kg per day, by mouth or in drinking water) burned more energy and used more oxygen and made more CO2, at room temperature and in the cold (4 °C), **with no change in body weight**, fat mass or lean mass. [1][2][3]
- The mouse dose is far above a human tablet dose relative to body size; do not compare it to tablets people take (my note; the paper does not make a human dose comparison).

### Limits (stated by the authors or the releases)
- **Association only.** It is a retrospective study of records. It shows that people with brown fat had these conditions less often, not that brown fat prevents them. The authors call for large prospective studies. [1][2]
- **A cancer-centre population.** All patients had scans for cancer care at one New York centre. The authors say they controlled for cancer variables but cannot rule out effects of tumour types or cancer treatments. [1] The results may not apply to the general population.
- **Brown fat may be undercounted.** Scans were done without cold exposure first, so brown fat that was present may not have shown up. [1]
- **Indirect measure.** The scan measures sugar uptake, an indirect sign of heat-making activity, not heat-making itself. [4]
- **Losartan was tested in cells and mice only.** It has not been shown to switch on brown fat in people. [1][2][4] NIH's own words: results "help form a basis for further investigation" in humans. [2]

### Independent expert comment
- **None found.** I searched news and web (Firecrawl, 16 Oct) for comment from scientists not involved. News-Medical quotes no outside expert. [4] Medical Xpress appears to reprint the Rockefeller release. [5] No Science Media Centre round-up found. The writer must not invent or imply outside comment; the only quotes available are from the authors (Cohen, Gómez-Banoy) and the funder (NIDDK's Rodgers).
- Background known before this study (for context only, from the paper's reference list): brown fat in adults was confirmed in 2009 (three *NEJM* papers), and a 2021 *Nature Medicine* study by the same lab linked it to lower cardiometabolic disease in about 50,000 patients. [1][7]

### What is still unknown
- Whether brown fat **causes** the better health, or healthier people simply keep more brown fat. Gómez-Banoy himself suggests the mental-health link could run through better metabolic health. [3]
- Whether losartan (or any ARB) switches on brown fat **in humans**, at what dose, and whether that improves health. No human trial is announced in the releases. [2][3]
- Whether the findings hold outside a cancer-patient population, in other countries and ethnic groups, and in men (the matched group was mostly women). [1]
- Whether brown fat has real downsides (skin conditions, bone health). [1][3]
- The genetics of people with a lot of brown fat (named by Rockefeller as a next step). [3]

## Keyword plan

Semrush: **not used** (the caller reports no API units left this run). Plan built from Google's suggestions via Firecrawl (`suggestqueries`, `client=firefox`), US (`gl=us`) and UK (`gl=gb`), checked 16 Oct 2026. No volume numbers are available from this method.

Suggestions seen:
- "brown fat" (US and UK): brown fat vs white fat; brown fat vs white fat in humans; brown fat activation; brown fat meaning; brown fat cells; brown fat in babies/newborns; brown fat cold plunge.
- "what is brown fat" (US): what is brown fat in the body; ...and what does it do; ...and why is it important for human health; **what is brown fat on a pet scan mean**; ...and where is it located.
- "brown fat and" (US): brown fat and cold plunge; ...cancer; ...cold showers; ...thermogenesis; **brown fat and pet scan**.
- "brown fat study" (US): brown fat study; brown fat research; ice bath brown fat study; **how do you know if you have brown fat**; is brown fat bad.
- "losartan brown fat" (US): **losartan brown fat** (Google returns the exact phrase itself, so it is already a known search); can you lose weight with losartan; does losartan affect weight; does losartan cause belly fat.
- "how to activate brown fat" (US): ...naturally; ...cells; ...to lose weight; how to increase brown fat.
- "losartan" (UK): losartan side effects; losartan uses; losartan 50 mg (strong medicine-information demand; we are **not** a medical-advice site, so do not target these).

| Phrase | Volume (country) | Difficulty | Why picked |
|---|---|---|---|
| **brown fat study** (focus) | Google suggestion (US) | not available | Specific, newsy, exactly what this story is; less contested than plain "brown fat", which health giants own. |
| what is brown fat | Google suggestion (US, UK) | not available | Readers need a one-line explainer; natural in the nut graf. |
| brown fat vs white fat | Google suggestion (US, UK, top) | not available | The story explains the difference in one or two lines. |
| losartan brown fat | Google suggestion (US, exact) | not available | The drug angle; covered honestly with the mice-only caveat. |
| brown fat on PET scan | Google suggestion (US: "brown fat and pet scan", "what is brown fat on a pet scan mean") | not available | Directly answered: why cancer scans can see brown fat. |
| brown fat activation | Google suggestion (US, UK) | not available | Use carefully: describe what the study found; no "how to" advice. |
| how do you know if you have brown fat | Google suggestion (US question) | not available | Optional FAQ-style line: only special scans show it; no home test. Answer only from sources. |

- **focusKeyword:** `brown fat study`
- **keywords:** `what is brown fat`, `brown fat vs white fat`, `losartan brown fat`, `brown fat on PET scan`, `brown fat activation`
- **seoTitle (51 characters):** `Brown fat study: AI links it to lower diabetes odds`
- **description (about 150 characters; seo-cto to recount):** `A brown fat study used AI on 101,243 PET-CT scans and tied it to lower odds of diabetes and heart disease. A blood-pressure pill boosted it in mice.`
- **Slug / web address:** `brown-fat-study-losartan` (alternative: `brown-fat-ai-study`)
- Avoid in title and description: "cure", "burns fat", "weight loss pill", "miracle", and any phrasing that suggests readers should take losartan.

## Cover photo (free stock, no brands expected)

- **Pick:** "Modern Medical Imaging Equipment in Hospital Room" by **MART PRODUCTION** on Pexels (free Pexels licence). Shows a modern CT scanning machine in a clean hospital imaging room, empty and ready for a patient; no people. Original 5386 x 3591. https://www.pexels.com/photo/technology-hospital-medicine-indoors-7089625/ (photographer: https://www.pexels.com/@mart-production/)
  - Suggested `imageAlt`: "An empty CT scanner in a bright hospital imaging room"
  - Suggested `imageCredit`: "Photo by MART PRODUCTION on Pexels"
- **Backup:** "A round window in the wall of a room" by **Jan Canty** on Unsplash (free Unsplash License, not Unsplash+; Unsplash tags it health and medicine; the round opening appears to be a scanner bore, but I could not confirm this from the page text alone). https://unsplash.com/photos/a-round-window-in-the-wall-of-a-room-WRXpD1gweNw
- **Check when you screenshot:** CT scanners often carry a maker's logo (Siemens, GE, Canon, Philips) on the ring. I could not see the image itself. If a logo is readable, crop it out or switch to the backup. Avoid the Unsplash results by Zyanya Citlalli and others marked "Unsplash+"; they are not free.

## Cautions for the writer

1. **Medical-safety line (must appear in the story, plainly):** readers should not start, stop or change any medicine, including losartan or antidepressants, because of this study. Anyone with questions should talk to their doctor or pharmacist.
2. **Association, not cause.** Say "linked to", "less common among", "lower odds". Never "brown fat prevents diabetes" or "cuts depression risk".
3. **Mice, not people.** Every losartan sentence must make clear it was shown in cells and mice. Do not call losartan a "weight-loss" or "fat-burning" drug; the mice did not lose weight.
4. **Scanned cancer patients.** Say the scans came from people having cancer-related PET-CT scans at one New York cancer centre, which may not reflect everyone.
5. **Odds, not risk.** "About 58% lower odds of type 2 diabetes" is fine; "58% less likely to get diabetes" overstates it.
6. **Date:** the paper and releases are from **14 Oct 2026**, not 15 Oct.
7. **SSRIs:** if mentioned, it is a records association; Rockefeller's phrase "dampening effect" goes beyond what records alone can show. Safer to leave out, or to frame it as a link only, plus the medical-safety line.
8. **No outside expert found.** Do not write "experts say" or "scientists not involved say". Attribute claims to the authors, Rockefeller or NIH.
9. **No how-to health advice.** Search demand for "how to activate brown fat" is high, but this study does not test cold plunges, supplements or exercise. Do not give tips. Brown fat fading with age is common background knowledge, but these sources do not state it, so leave it out unless a source is added.
10. **AI angle, honestly:** the AI measured brown fat on scans. It did not discover the drug by itself; the drug link came from statistical analysis of medication records, then lab tests.
11. Rodgers (NIDDK) is the funder, not an independent expert.
12. Do not use images from Nature, NIH or Rockefeller (news/organisation images); use only the stock photo above.

## Suggested internal links

- Science category page: `/news/category/science/`
- Related existing stories (all science, none on health; use only if a natural sentence fits, otherwise rely on the category link and the automatic "Related stories" box):
  - `/news/google-willow-magic-state-quantum/` (another "computers helping science" story)
  - `/news/thwaites-glacier-sea-level/` (model-driven science study; weak fit)
- No existing guide fits; `relatedGuide` can be left empty.
