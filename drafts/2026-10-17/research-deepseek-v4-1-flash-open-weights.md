# Research: DeepSeek V4.1-Flash-1017 open weights + public Search API

Researcher notes, checked 2026-10-17. Category: AI. Tools: WebSearch (extended) only. Firecrawl out of credits; Semrush returned "no API units" (see keyword plan). WebFetch could not reach outside pages, so official pages were confirmed through search-result summaries of those pages, not by opening them directly. **The writer or auditor should open the official pages before publishing.**

Labels: [OFFICIAL+1] = official page plus an independent source. [SINGLE] = only one source; label it or drop it. **Company claim** = DeepSeek's own figures, not independently tested.

## Headline facts

1. **[OFFICIAL+1] Release date and name.** On 17 Oct 2026 DeepSeek upgraded V4.1-Flash to **DeepSeek-V4.1-Flash-1017**. It is live in the API (model name `deepseek-flash`), the web chat and the app. The API calling method and prices did not change. Sources: DeepSeek news post news261017 and Change Log; MarkTechPost; Investing.com.
2. **[OFFICIAL+1] Open weights, MIT licence.** The Hugging Face model card says both the repository and the 1017 weights are under the MIT License. Weights are on Hugging Face and ModelScope. Sources: HF card deepseek-ai/DeepSeek-V4.1-Flash-1017; DeepSeek news post; MarkTechPost; pasqualepillitteri.it.
   - Note: no Jinja chat template ships with it, so self-hosters use DeepSeek's encoding reference [SINGLE: pasqualepillitteri.it summary].
   - "Open weights" is not the same as "open source": training data and training code are not released (general point raised by commentators).
3. **[OFFICIAL+1] What DeepSeek says changed.** DeepSeek calls it a minor update: better agent and coding results, shorter answers and shorter task run times. The news post is titled "Wish-Driven Programming Made Real" and says reinforcement learning with self-feedback improves end-to-end project building, from making games to 3D modelling. Sources: news261017; Change Log; tech-insider.
4. **[OFFICIAL+1] Search & Fetch APIs open to everyone.**
   - What they do: two separate endpoints for AI agents. **Search** runs a web search and returns results. **Fetch** pulls the content of a given web page. Developers can use them in their own apps or retrieval (RAG) pipelines. They also work as server-side tools inside DeepSeek Harness, Claude Code and Codex.
   - Price (official Search & Fetch guide): **US$0.75 per 1,000 successful requests, per endpoint.** Only HTTP 200 calls that return a result are billed; failed, empty or timed-out calls are free. The price does not depend on how many results come back. Sources: api-docs.deepseek.com/guides/search; FourWeekMBA; aiweekly. Chinese outlets quote CNY 5 per 1,000 (Pandaily, Phemex), which is the yuan price.
   - Free window: server-side calls through Harness, Claude Code or Codex are free until **00:00 Beijing time on 1 Nov 2026 (16:00 UTC, 31 Oct)**. Sources: news261017; tech-insider; Phemex.
   - Rate limit of **5 requests per second per account**, with each endpoint limited separately: reported by FourWeekMBA, Pandaily and aiweekly. The search summary did not show this number on DeepSeek's own page. Treat it as **reported, not officially confirmed**.

## Model size (sources differ, so use the model card)

- **Use this: [OFFICIAL+1]** the official HF card for V4.1-Flash describes a multimodal (text + image) Mixture-of-Experts model with a **552B-parameter backbone**, **8B active parameters per token for prefill and 16B for decode**, and a **context window of up to 1 million tokens**. DeepSeek calls it the smallest model in its new architecture family, with native image understanding. Sources: HF card; NVIDIA build model card; aiweekly; DeepSeek on X (10 Sep 2026); deepseek.com news page.
- Conflicting figures. **Don't use these as the headline.**
  - 196B of "Engram" conditional memory on top of the backbone: from MarkTechPost and the NVIDIA/LibertAI NVFP4 cards. It is unclear whether this applies to 1017.
  - The Hub metadata shows **763B** (some GGUF repos show 748B), probably because the Engram tables are counted. **Unconfirmed.**
  - A Dell listing shows "284B". This is likely wrong or refers to the older V4-Flash. **Drop it.**
  - MarkTechPost says the hardware requirements for 1017 are "not disclosed".
- The writer can safely say: "a mixture-of-experts model with a 552-billion-parameter backbone, of which only about 8 to 16 billion are active for each word it processes, per DeepSeek's model card."
- Running it at home: not realistic for most people. One estimate puts a 4-bit build at about 331 GB [SINGLE: MindStudio]. Another says the native FP4/FP8 checkpoint (about 146 GB) runs on 4x B200 GPUs [SINGLE]. vLLM has a published serving recipe (recipes.vllm.ai).

## Benchmarks: all **company claims** (DeepSeek's own numbers, no independent reproduction found at release)

| Benchmark | 1017 score | Sources | Status |
|---|---|---|---|
| DeepSWE v1.1 | 77.0 | Change Log; MarkTechPost; tech-insider | OFFICIAL+1 |
| Automation-Bench v1.0.6 | 60.5 | Change Log (via search summary) | OFFICIAL only, so check it |
| Agents' Last Exam | 35.4 | Change Log (via search summary) | OFFICIAL only, so check it |
| Apex Bench v1.1 | 72.1 | Change Log (via search summary) | OFFICIAL only, so check it |
| Terminal-Bench 4.0 | 42.3 | HF card (via summary); explainx | **Conflict:** an X user wrote 42.8. Use 42.3 only if the card confirms it |
| DeepSWE, previous Flash | 74.2 | MarkTechPost/aiweekly | [SINGLE chain], not seen on an official page |
| "Beats previous Flash on all 11 published benchmarks by 2.0–11.1 points" | | aiweekly citing MarkTechPost | [SINGLE] |
| HLE: Claude Opus 5 56.3 vs Flash-1017 42.6 | | aiweekly citing MarkTechPost | [SINGLE]. Drop it, or keep it neutral without praise or criticism |

## API pricing (`deepseek-flash`), checked 2026-10-17

- **[OFFICIAL+1]** Prices did not change with 1017 (Change Log). The current Flash prices took effect at 04:00 UTC on 10 Sep 2026 (news260910). Off-peak costs half of peak. Peak hours are 01:00–04:00 and 06:00–10:00 UTC, Monday to Friday, excluding Chinese public holidays. All other hours are off-peak. Sources: api-docs pricing page; benchlm.ai; activepieces.
- Rates per 1M tokens (US$), as reported by third parties (MarkTechPost, benchlm.ai, which says it re-verified on 4 Oct 2026):
  - Peak: input (cache miss) **$0.30**, output **$1.20**, input (cache hit) about $0.006
  - Off-peak: input **$0.15**, output **$0.60**, cache hit about $0.003
- **Flag:** the search summary of DeepSeek's own pricing table did not clearly show which column is Flash. The exact numbers match two independent third parties, but the writer should check them against https://api-docs.deepseek.com/quick_start/pricing/ before publishing.
- The older $0.14 / $0.28 V4-Flash prices are **out of date** (retired 10 Sep 2026). Don't use them.
- The old names `deepseek-v4-flash` and `deepseek-v4-flash-vision-exp` still work and are billed at the Flash price (pricing page).

## Earlier DeepSeek releases (official news pages)

- DeepSeek-V3.1: 21 Aug 2025 (news250821). R1 reasoning model: January 2025 (widely reported; it caused the early-2025 market stir).
- V4 Preview: 24 Apr 2026 (news260424). V4 paper on arXiv: 2606.19348.
- V4-Pro general release: 13 Aug 2026 (news260813). Peak/off-peak pricing started with V4.
- V4.1-Flash: 10 Sep 2026 (news260910; DeepSeek on X). KV-cache paper on arXiv: 2609.19969. DeepSeek says the KV cache uses about a quarter of the GPU memory (HBM) and an eighth of the SSD storage of the previous generation (company claim).
- V4.1-Flash-1017: 17 Oct 2026.

## Context (report neutrally)

- **Government restrictions** (mostly on government devices, not ordinary people):
  - Italy's data protection authority (Garante) ordered the app blocked on 30 Jan 2025. This covers the public app, not just government devices.
  - Australia banned it on federal government devices on 4 Feb 2025.
  - South Korea restricted access in ministries and paused new downloads from app stores in Feb 2025.
  - Taiwan restricted government use. In the US, NASA, the Navy and others restricted it (Tom's Guide).
  - Sources: redact.dev, upgrad, webopedia, Tom's Guide, Yahoo/South Korea, ai-regulation.com. These are mostly secondary pages, and Reuters originals were not reached. The facts are widely reported, but **check exact dates**.
  - The US FY2026 NDAA section 1532 bars the Department of Defense from buying or using covered AI including DeepSeek, with waivers [SINGLE: CRS summary via search, so check it]. Berlin's data commissioner reported the app to Apple and Google under GDPR [SINGLE].
- **Privacy:** DeepSeek's privacy policy (updated 10 Feb 2026) says it processes and stores personal data in the People's Republic of China (privacy policy, via several secondary pages). This applies to the app and API, **not** to someone running the open weights on their own machines. That difference matters for readers.
- **Export controls:** In early 2025 the US Commerce Department looked into whether DeepSeek used US chips that cannot legally be shipped to China (Reuters via TBS News, Yahoo, Tribune). DeepSeek has said it used H800 chips, which it could legally buy in 2023. Nvidia said it had no reason to believe DeepSeek got export-controlled products through Singapore. The House China committee opened an inquiry (April 2025). In Jan 2026 Rep. Moolenaar alleged that Nvidia helped DeepSeek optimise its model (Bloomberg). **No final enforcement outcome was found.** Present all of this as allegations or investigations. A separate "shell companies" claim is [SINGLE], so drop it.

## What it means

- **Developers worldwide:** they can download, change and use the weights commercially under MIT, or call the API at low per-token prices. Code written for OpenAI-style APIs works with a change of base URL (MindStudio and DeepSeek docs). The Search and Fetch APIs give agents a cheap built-in way to read the web, and they cost nothing until 31 Oct. Before Nov 1, check whether sending queries to DeepSeek's servers (in China) fits your data rules.
- **Ordinary users:** the free chat app updates automatically and should give shorter, faster answers (company claim). The same privacy points and government-device rules still apply. Open weights mainly let companies or cloud providers host the model elsewhere.

## Open questions

- Does the 1017 card list the same 552B backbone? What is the true total size including Engram?
- Will independent tests reproduce the DeepSWE and Terminal-Bench numbers?
- Is the 5 requests-per-second limit official? Where do the Search API's results and index come from, and how are queries logged?
- Will regulators treat the Search API like the app in terms of data rules?
- No safety or evaluation report was found for the 1017 update (not confirmed either way).

## Keyword plan

Semrush: **no API units left** (code `no_api_units`, trace 1b4a10a8bd2ccc2482f8a78331296a35). Firecrawl is out of credits, so Google suggestions could not be scraped. The phrases below come from search-result titles and the questions seen in WebSearch, with **no volume numbers**.

| Phrase | Volume | Difficulty | Why |
|---|---|---|---|
| **DeepSeek V4.1 Flash** (focus) | n/a (seen in many result titles) | n/a | Specific product name; the story answers it directly; few strong pages yet |
| DeepSeek V4.1 Flash 1017 | n/a | n/a | The exact version people search for |
| DeepSeek search API | n/a | n/a | New and specific; several titles already target it |
| DeepSeek open weights | n/a | n/a | Core of the story (MIT licence) |
| DeepSeek API pricing | n/a | n/a | Many pricing pages compete; covered by the pricing section |
| is DeepSeek safe | n/a (common question) | n/a | Answered by the privacy context |
| run DeepSeek V4.1 Flash locally | n/a | n/a | "How to" question seen in results |

- Suggested `seoTitle`: "DeepSeek V4.1 Flash: Free Weights and a Search API" (51 characters)
- Suggested address: `deepseek-v4-1-flash-open-weights`

## Cover photo (not verified on the page; the writer must check licence and photographer)

- Unsplash, "Server room with network cabinets" by Taylor Vick: https://unsplash.com/photos/server-room-with-network-cabinets-aWslrFhs1w4 (free Unsplash License, per search; confirm it is not Unsplash+).

## Sources

| URL | Publisher | Date |
|---|---|---|
| https://api-docs.deepseek.com/news/news261017/ | DeepSeek (official) | 2026-10-17 |
| https://api-docs.deepseek.com/updates/ | DeepSeek Change Log (official) | 2026-10-17 entry |
| https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017 | DeepSeek on Hugging Face (official) | 2026-10-17 |
| https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash | DeepSeek on Hugging Face (official) | 2026-09-10 |
| https://api-docs.deepseek.com/guides/search/ | DeepSeek (official) | checked 2026-10-17 |
| https://api-docs.deepseek.com/quick_start/pricing/ | DeepSeek (official) | checked 2026-10-17 |
| https://api-docs.deepseek.com/news/news260910/ | DeepSeek (official) | 2026-09-10 |
| https://api-docs.deepseek.com/news/news260813/ | DeepSeek (official) | 2026-08-13 |
| https://api-docs.deepseek.com/news/news260424/ | DeepSeek (official) | 2026-04-24 |
| https://api-docs.deepseek.com/news/news250821/ | DeepSeek (official) | 2025-08-21 |
| https://build.nvidia.com/deepseek-ai/deepseek-v4.1-flash/modelcard | NVIDIA | 2026 |
| https://www.marktechpost.com/2026/10/17/deepseek-just-released-v4-1-flash-1017-scores-77-0-on-deepswe-opens-search-api/ | MarkTechPost | 2026-10-17 |
| https://investing.com/news/stock-market-news/deepseek-releases-ai-model-update-opens-search-apis-to-all-users-4955445 | Investing.com | 2026-10-17 |
| https://tech-insider.org/deepseek-v4-1-flash-1017-deepswe-search-api-2026/ | Tech Insider | 2026-10-17 |
| https://aiweekly.co/alerts/deepseek-opens-v41-flash-1017-weights-and-075-search-api | AI Weekly | 2026-10-17 |
| https://fourweekmba.com/ai-deepseek-opens-its-search-api-at-0-75-per-1000-calls/ | FourWeekMBA | 2026-10 |
| https://pandaily.com/deepseek-api-search-fetch-endpoints-5-yuan-per-1000-requests-5-qps-agents-rag | Pandaily | 2026-10 |
| https://phemex.com/news/article/deepseek-to-charge-for-search-and-fetch-api-calls-starting-november-1-100230 | Phemex | 2026-10 |
| https://pasqualepillitteri.it/en/news/24844/deepseek-releases-41-flash-1017-mit-weights-shorter-outputs | Pasquale Pillitteri | 2026-10-17 |
| https://www.explainx.ai/blog/deepseek-v4-1-flash-1017-open-weights-mit-terminal-bench-4-42-benchmarks-pricing-2026 | explainx | 2026-10 |
| https://benchlm.ai/deepseek/api-pricing | BenchLM | checked 2026-10-04 |
| https://www.mindstudio.ai/blog/deepseek-v4-1-flash-local | MindStudio | 2026 |
| https://recipes.vllm.ai/deepseek-ai/DeepSeek-V4.1-Flash | vLLM | 2026 |
| https://x.com/deepseek_ai/status/2097930608790167907 | DeepSeek on X (official) | 2026-09-10 |
| https://tomsguide.com/computing/online-security/deepseek-ai-banned-by-nasa-us-navy-and-more-over-privacy-concerns | Tom's Guide | 2025 |
| https://www.yahoo.com/news/south-korea-blocks-deepseek-ai-110729963.html | Yahoo News | 2025 |
| https://redact.dev/blog/deepseek-ai-ban-privacy-concerns | Redact | 2025 |
| https://ai-regulation.com/deepseek-one-year-later-regulatory-storm-global-surge/ | MIAI | 2026 |
| https://introl.com/blog/deepseek-government-bans-spreading-worldwide-2026 | Introl | 2026 |
| https://www.tbsnews.net/worldbiz/usa/us-looking-whether-deepseek-used-restricted-ai-chips-source-1057751 | TBS News (Reuters) | 2025 |
| https://www.bloomberg.com/news/articles/2026-01-29/nvidia-worked-to-co-design-deepseek-model-us-lawmaker-says | Bloomberg | 2026-01-29 |
| https://chinaselectcommittee.house.gov/media/letters/nvidia-letter-mr-jensen-huang-ceo | US House Select Committee on the CCP | 2025-04 |
