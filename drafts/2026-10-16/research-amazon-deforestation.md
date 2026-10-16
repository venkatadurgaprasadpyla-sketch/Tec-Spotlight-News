# Research: Brazil's Amazon deforestation at lowest level since 1988 (PRODES 2026)

Researcher notes for the /auto-news run of 16 Oct 2026 (20:09 UTC slot). Checked between about 20:12 and 20:35 UTC on 16 October 2026.

- Planned slug: `amazon-deforestation-record-low-2026`
- Category: `science`
- Story type: official satellite data release, with a clear "what to watch"

---

## 1. Verified facts (checked against the official text)

Official source [1] is the Brazilian Ministry of Environment and Climate Change (MMA) notice, published 16 Oct 2026 at 14:54 Brasília time (17:54 UTC) and updated at 16:52. It is in Portuguese; the translations below are mine. Figures were cross-checked with INPE's technical presentation [2], which is linked from the notice.

### Amazon (Legal Amazon, PRODES)
| Fact | Official text says | Check |
|---|---|---|
| 2026 figure | 3,335 km² cleared (in the notice's Portuguese style, "3.335 km²") | Confirmed [1]; Reuters [3], Guardian [4] and Straits Times [5] agree |
| Period | 1 August 2025 to 31 July 2026 | Confirmed [1] (FAQ: "1º de agosto de 2025 a 31 de julho de 2026") |
| Change | down 41.8% from 5,731 km² | Confirmed [1]. My own check: 1 − 3,335/5,731 = 41.8% |
| What the 5,731 is | the **consolidated** (final) INPE figure for Aug 2024 to Jul 2025 | Confirmed [1] |
| Record | lowest in the series, which began in 1988 | Confirmed [1] |
| Previous low | 4,571 km² in 2012 | Confirmed [1][2]. The gap is 1,236 km²; the Guardian likens it to the size of Rio de Janeiro [4] |
| In square miles | about 1,288 sq mi | Reuters gives 1,287.65 sq mi [3] |

Breakdown by state (official table [1]): Pará 1,130 km² (−45.3%), Mato Grosso 849 (−46.7%), Amazonas 525 (−46.4%), Roraima 286 (**+0.4%, the only state that rose**), Acre 252 (−22.2%), Rondônia 149 (−34.9%), Maranhão 128 (−39.0%), Amapá 8 (−52.9%), Tocantins 8 (−73.3%).

### Cerrado (savanna, PRODES Cerrado)
- 5,516.69 km², down **23.8%** from 7,235.27 km². Lowest in the Cerrado series, which **began in 2001** (not 1988). Confirmed [1]. My check: 1 − 5,516.69/7,235.27 = 23.75%, so 23.8%.
- The previous Cerrado low was 6,319 km² in 2019 [1].
- Biggest clearing: Maranhão 1,718.59 km², Tocantins 1,263.06, Piauí 625.24. The four Matopiba states (Maranhão, Tocantins, Piauí, Bahia) made up 74.3% of the total [1].
- The Cerrado figure is **already final (consolidated)**, because the whole biome was mapped [1]. INPE mapped 265 images, 100% of the territory [2].
- The Cerrado count covers all native vegetation (forest, savanna and grassland), not only forest [1].

### Who announced it
- **João Paulo Capobianco, Minister of the Environment and Climate Change** ("ministro do Meio Ambiente e Mudança do Clima") [1]. The Straits Times (AFP) also calls him environment minister [5].
- Note: the Guardian calls Marina Silva the "former environment minister" [4]. Capobianco is the minister now. The writer should not call Silva the minister.
- Capobianco's quote in the notice, in my translation: falling deforestation is "not an isolated episode, nor the result of luck"; it is a year-by-year process resting on three pillars: science, democracy (society taking part in policy) and cooperation between the federal government, the states and the cities [1].
- At the press conference, in AFP's English: "It's an absolutely stratospheric drop... it's like a dream" [5].

### Caveats (from the ministry itself)
1. **The Amazon figure is an estimate.** The notice says the rate released at this time of year is an estimate based on "priority images". The consolidated rate, using all the images, comes out in the **first half of next year** [1]. INPE's presentation says the 2026 estimate used **271 priority images out of 516** [2].
   - Context showing estimates move: last year's estimate was **5,796 km²** (Reuters, 30 Oct 2025 [6]), and the final figure became **5,731 km²** [1]. The writer can mention this as the kind of change to expect. **I can't predict this year's revision.**
2. **Fires are not counted.** The notice's FAQ says PRODES 2026 covers Aug 2025 to Jul 2026, so the **October fires are outside the period**. Even within the same period there can be less clearing and more fire, and burned areas are not automatically counted as deforestation [1].
3. **Degradation is measured separately.** Deforestation means the native vegetation cover is removed. Degradation is a loss of quality, structure or function without full removal. PRODES does count the stage where progressive degradation makes the canopy collapse [1].
4. Other points from the notice's FAQ [1]:
   - The figure includes both **legal (authorised) and illegal** clearing.
   - Amazon and Cerrado figures **can't simply be added**, because the areas overlap (the Legal Amazon includes some Cerrado).
   - Restoration is **not subtracted**: it is not a net figure.
   - DETER (fast alerts) and PRODES (official annual rate) are different systems; adding up DETER alerts does not give the PRODES figure.

### Other official items in the notice (optional for the writer)
- The ministry credits the restored PPCDAm and PPCerrado action plans (both brought back in 2023), satellite monitoring, enforcement, land-use planning and green finance [1].
- Ibama, 2023–2026: 76,095 enforcement actions, 25,101 fines against flora offences totalling R$11.8 billion, and 18,630 km² embargoed [1].
- New: **SIM-Biomas**, R$147.6 million from the Amazon Fund (via BNDES) to INPE/Funcate over 60 months. It will use **AI to combine PRODES and DETER** and give PRODES data through the year, extend DETER to the Caatinga, Atlantic Forest and Pampa, and improve burned-area mapping from 1 km to 30 m resolution in all biomes [1]. **This is a good tech angle for TechSpotlight.**

---

## 2. Context (with sources)

### How PRODES works
- Run by INPE (Brazil's National Institute for Space Research). It is the official **annual** count of clear-cutting of native vegetation, with a monitoring year from **1 August to 31 July** [1][7]. Reuters explains that the August–July year is used because there is less cloud cover mid-year to hide clearing in satellite images [3].
- It uses about **30 m resolution satellite images, mainly Landsat** (with Sentinel-2 or CBERS when clouds block Landsat), and maps clearings of at least **6.25 hectares** (0.0625 km²). Smaller patches are not counted [7][8][9].
- The October estimate maps "priority" scenes, chosen to cover where most recent clearing and alerts happened. The consolidated figure maps all scenes [1][2][9].
- **I could not confirm which satellites were used for the 2026 images**, so the brief should just say "satellite images".
- Sister system **DETER** gives near-real-time alerts to guide enforcement [1]. In August, DETER showed 2,874 km² of alerts for the same year, down 36% and the lowest in its series. Observatório do Clima said then that this pointed to a record PRODES low [10].

### Peak and long-term trend
- The peak was in **2004 at 27,772 km²** (INPE series, in INPE's 2026 presentation [2]; also in Nature Ecology & Evolution, 2021 [11]).
- My check: 3,335 km² is about **88% below the 2004 peak**.
- 2022: 11,594 km² [2]. From 2022 to 2026 the rate is down 71.2% (my check: 1 − 3,335/11,594 = 71.2%). The Guardian [4] and the Straits Times/AFP [5] both report the 71.2% four-year drop.
  - **Wording caution:** the Guardian says "since the start of the Lula administration in 2022". Lula took office on 1 January 2023; 2022 is the PRODES year before. Safer wording: "down 71.2% from 2022".
- The Guardian reports that Amazon deforestation rose 59.5% during Jair Bolsonaro's 2019–2022 term [4] (sourced by them to Sumaúma). Use only if attributed.

### Brazil's 2030 goal
- The government's goal is **zero *illegal* deforestation by 2030**, plus making up for legal clearing by regrowing degraded land. It was announced by Lula at COP27 and written into the 5th phase of PPCDAm in 2023 [12].
- On 16 Oct, Lula repeated on X: "Our goal is to achieve zero illegal deforestation by 2030" (quoted by AFP/Straits Times [5]).
- **Note:** this is "zero *illegal*" deforestation, not zero deforestation. Scientists such as Carlos Nobre have argued the target should be zero *total* deforestation [12]. The writer must keep the word "illegal".
- Separately, Brazil also backs the international pledge to "halt and reverse deforestation by 2030" (Glasgow, 2021), which was reaffirmed in COP30 outcomes [13].

### COP30 in Belém
- The UN climate summit COP30 was held in **Belém, in the Brazilian Amazon, in November 2025**. The UN says it closed on **22 November 2025** [14]. Forest outcomes are summarised by Carbon Brief [13].
- The next COP (COP31) is coming up; Reuters runs a "ahead of COP31" line today [3]. **I did not check COP31's dates or host**, so don't state them.

### Independent comment
- **Marcio Astrini, executive secretary of Observatório do Clima** (Climate Observatory, a network of Brazilian NGOs), quoted by the Guardian today. In my paraphrase: the figure shows ending forest destruction is entirely possible, but everything depends on the election, and the country will choose between ending deforestation and ending the forest [4].
- The Guardian also writes that the results "brought some conservationists to tears" [4] (not attributed to a named person).
- I found **no Imazon or named-scientist reaction to today's figure yet** (searched at about 20:20 UTC). OC's own site had no new release on the PRODES figure when I checked; its latest item was the August DETER release [10].
- **Earlier independent caution (this year):** Imazon data showed clearing down 36% from August 2025 to March 2026, but **fires surged** (reported by Climate Action [15]; I did not open the Imazon original). This supports the "fires and degradation" caveat.

### The election (only as the Guardian and the Straits Times report it)
- The Guardian [4] frames the data ahead of Brazil's **presidential run-off on 25 October 2026** between incumbent Luiz Inácio Lula da Silva and Flávio Bolsonaro (son of former president Jair Bolsonaro). It says Lula trailed in the first round and that the two have sharply different views on the rainforest.
- The Straits Times (AFP) [5] says polls show the two neck-and-neck and that the data "boost" Lula.
- The ministry notice sits in the site's **"notícias-defeso-eleitoral"** (election-period news) section [1].
- **Guidance:** one or two sentences, attributed ("The Guardian notes..."). Stick to the data and its caveats, take no side, and frame what happens next as "what to watch". The Guardian piece has strong partisan framing; don't carry it over.

---

## 3. What I am unsure of / could not confirm

1. **TerraBrasilis:** I did not read the 2026 figure directly on terrabrasilis.dpi.inpe.br; the portal is an interactive dashboard that doesn't scrape well. The figures are confirmed instead through INPE's own presentation PDF hosted on gov.br [2] and the ministry notice [1]. Link TerraBrasilis as "where the data and maps live", not as the place we read the number.
2. **Final figure:** the Amazon 3,335 km² will be revised in the first half of 2027. The direction and size of the change are unknown.
3. **Satellites used in 2026:** not stated in what I read; say "satellite images".
4. **Exact time of the press conference:** not checked. Use "on Friday 16 October".
5. **Imazon reaction to today's data:** none found.
6. The **71.2% "since Lula took office"** wording in the Guardian is loose (the base year is 2022, Lula started January 2023). Use "since 2022".
7. Brazil holds **about 60% of the Amazon rainforest**, per AFP/Straits Times [5]. This is widely cited, but I didn't check it with an official source; attribute it if used.

---

## 4. Reader angle ideas (for the writer; analysis, not facts)
- Satellites as the referee: a public, repeatable, 38-year data series that anyone can download (TerraBrasilis). This is a science and tech story as much as a political one.
- Why it matters worldwide: the Amazon stores huge amounts of carbon and shapes rainfall well beyond Brazil. Keep any numbers sourced or leave them out.
- What to watch: the final figure in early 2027; whether fire and degradation numbers tell a different story; whether the Cerrado (still larger in area cleared than the Amazon this year: 5,517 vs 3,335 km²) keeps falling; how the 25 Oct election affects enforcement policy; and SIM-Biomas bringing PRODES-style data through the year.
- Related TechSpotlight story to link: `thwaites-glacier-sea-level` (climate science).

## 5. Related guide
- **No guide fits yet** (only `sample-guide` exists in `src/content/guides/`). Flag `relatedGuide` as missing.
- Suggested new guide: "How to explore forest and climate data yourself: free satellite tools (Global Forest Watch, TerraBrasilis, Copernicus Browser) compared" (`how-to`). Note: these are free tools, so it is unlikely to earn affiliate income.

---

## 6. Keyword plan

Semrush: **not used** (the caller says there are no API units left). The phrases below come from Google's autocomplete (via Firecrawl, 16 Oct 2026, about 20:17–20:20 UTC). The suggestions carry no volume or difficulty numbers.

Suggestions seen:
- `amazon deforestation` (US and GB): map, **2026**, rate, over time, graph, reddit, cattle ranching, satellite images, statistics, case study
- `amazon deforestation 2026` (US): amazon rainforest 2026, amazon jungle 2026, amazon deforestation map 2026
- `brazil deforestation` (US): rate, **2026**, map, statistics, 2025, rate 2025, data, news, policies
- `amazon rainforest deforestation` (gl=br, English): map, statistics, facts, 2026, case study, before and after, for kids, causes
- `is amazon deforestation` (US): **slowing down**, **decreasing**
- `what is prodes`: no relevant suggestions (Google offers "protestant" and similar), so readers don't search for "PRODES" by name. Explain it in the text, but don't target it.

| Phrase | Volume (country) | Difficulty | Why picked |
|---|---|---|---|
| **amazon deforestation 2026** (focus) | Google suggestion (US, GB) | Google suggestion | Specific and timely; this story answers it directly with the official 2026 figure. Better odds for a new site than the broad "amazon deforestation". |
| amazon deforestation rate | Google suggestion (US, GB) | Google suggestion | The story gives the official annual rate and the trend from 2004 and 2022. |
| is amazon deforestation decreasing | Google suggestion (US) | Google suggestion | A real question the story answers honestly: yes for clearing, with fire and degradation caveats. |
| brazil deforestation 2026 | Google suggestion (US) | Google suggestion | Covers the Cerrado figure as well as the Amazon. |
| amazon deforestation satellite images | Google suggestion (US, GB) | Google suggestion | Fits the tech angle (how PRODES and SIM-Biomas work). |
| amazon deforestation statistics | Google suggestion (US, GB, BR) | Google suggestion | The state-by-state numbers and the 1988–2026 series. |

- Optional extra: `is amazon deforestation slowing down` (US suggestion) as an H2 or FAQ-style phrasing.
- Suggested `seoTitle`: **"Amazon deforestation 2026: lowest level since 1988"** (50 characters)
- Suggested web address: `/news/amazon-deforestation-record-low-2026/` (matches the planned slug)

---

## 7. Cover photo suggestion

**First choice:** "Aerial View of Amazon River in Brasil" by **Miguel Cuenca** on Pexels
- Page: https://www.pexels.com/photo/aerial-view-of-amazon-river-in-brasil-38814719/
- Licence: Pexels free licence. Size 8256 × 5504 (landscape). Location tagged Brasil. Pexels description: the Amazon River winding through forest.
- No logos, text or watermarks are mentioned on the page (based on the page text; I could not view the image itself). The writer or SEO step should eyeball it, then resize to about 1600 px wide and keep it under 250 KB.
- Suggested alt text: "The Amazon River winding through unbroken green rainforest in Brazil, seen from above (stock photo)"

**Backup:** "Aerial View of Amazon River and Rainforest" by Gustavo Denuncio, Pexels: https://www.pexels.com/photo/aerial-view-of-amazon-river-and-rainforest-29759409/ (I didn't open its page to check the location or size; check before use).

**Rejected:**
- Pexels 38141183 (Oncy Oni): it is tagged "Amazon" but was taken in **Indonesia**, and it is portrait.
- Pexels 35047469 (Filipe Braggio): taken in **Rio de Janeiro**, so it shows Atlantic Forest, not the Amazon.

---

## 8. Sources (original first)

1. Brazil Ministry of Environment and Climate Change (MMA), "Brasil alcança menores taxas de desmatamento da série histórica na Amazônia e no Cerrado", 16 Oct 2026 (Portuguese): https://www.gov.br/mma/pt-br/noticias-defeso-eleitoral/brasil-alcanca-menores-taxas-de-desmatamento-da-serie-historica-na-amazonia-e-no-cerrado
2. INPE technical presentation, PRODES 2026 press conference (PDF, linked from [1]): https://www.gov.br/mma/pt-br/noticias-defeso-eleitoral/apresentacao-coletiva-prodes-2026_inpe.pdf
3. Reuters, "Deforestation in Brazil's Amazon falls to lowest on record in 2025/26", 16 Oct 2026: https://www.reuters.com/business/environment/deforestation-brazils-amazon-falls-lowest-record-202526-2026-10-16/
4. The Guardian (Jonathan Watts), "Brazilian Amazon deforestation falls to lowest on record as pivotal vote looms", 16 Oct 2026: https://www.theguardian.com/environment/2026/oct/16/brazil-amazon-deforestation-lowest-on-record-election
5. The Straits Times (AFP), "Deforestation in Brazil Amazon hits nearly four-decade low", 16 Oct 2026 (17 Oct SGT): https://www.straitstimes.com/world/deforestation-in-brazil-amazon-hits-nearly-four-decade-low
6. Reuters, "Deforestation in Brazil's Amazon hits 11-year low ahead of COP30", 30 Oct 2025 (last year's 5,796 km² estimate): https://www.reuters.com/sustainability/cop/brazils-amazon-deforestation-falls-11-12-months-through-july-2025-10-30/
7. Global Forest Watch, "2025 Tree Cover Loss Data Explained" (PRODES 6.25 ha minimum, Aug–Jul year): https://www.globalnaturewatch.org/blog/data-and-tools/2025-tree-cover-loss-data-explained/
8. Revista Pesquisa FAPESP, "Multiple systems use satellites to monitor deforestation in the Amazon": https://revistapesquisa.fapesp.br/en/multiple-systems-use-satellites-to-monitor-deforestation-in-the-amazon/
9. INPE technical note, PRODES 2023 estimate (priority scenes, Landsat-8/9, Sentinel-2 when cloudy): https://www.gov.br/inpe/pt-br/assuntos/ultimas-noticias/estimativa-de-desmatamento-na-amazonia-legal-para-2023-e-de-9-001-km2/2023_1020_Nota_tecnica_Estimativa_Taxa_2023_SEI.pdf
10. Observatório do Clima, "Amazon deforestation alerts hit all-time low in 2026" (DETER, August 2026): https://oc.eco.br/en/amazon-deforestation-alerts-hit-all-time-low-in-2026/
11. Nature Ecology & Evolution, "The Brazilian Amazon deforestation rate in 2020 is the greatest of the decade" (2004 peak of 27,772 km²): https://www.nature.com/articles/s41559-020-01368-x
12. InfoAmazonia, "At COP30, researchers call for expansion of Brazil's zero deforestation target by 2030", Nov 2025: https://infoamazonia.org/en/2025/11/17/at-cop30-researchers-call-for-expansion-of-brazils-zero-deforestation-target-by-2030/
13. Carbon Brief, "COP30: Key outcomes for food, forests, land and nature": https://www.carbonbrief.org/cop30-key-outcomes-for-food-forests-land-and-nature-at-the-un-climate-talks-in-belem
14. United Nations, "COP30 closes with agreement to step up support for developing countries": https://www.un.org/en/climatechange/cop30
15. Climate Action, "Amazon deforestation hits six-year low. What it means for corporate nature" (Imazon data, fires): https://www.climateaction.org/news/amazon-deforestation-hits-six-year-low.-what-it-means-for-corporate-nature
16. INPE TerraBrasilis (data, maps and downloads): https://terrabrasilis.dpi.inpe.br/
