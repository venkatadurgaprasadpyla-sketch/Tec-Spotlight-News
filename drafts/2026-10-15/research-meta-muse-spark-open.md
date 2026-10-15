# Research: Meta releases Muse Spark Open, and it runs on two Mac Studios

Checked: 2026-10-15 (about 20:15 UTC). Category: `ai`. All pages were read through Firecrawl. TechCrunch's page loaded behind a Cloudflare check, but the article text came through in full.

**Slug:** `meta-muse-spark-open-mac-studio`

## Source key

Official sources first.

- **A** = Meta AI Research blog, "Introducing Muse Spark Open, The Most Capable US Open-Weight Model to Date", 15 Oct 2026: https://research.meta.ai/blog/muse-spark-open
- **B** = Hugging Face model card and Muse Model License (Meta), released 15 Oct 2026: https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B (licence file: https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B/blob/main/LICENSE.md)
- **C** = Apple Machine Learning Research, "Local and Distributed Large LLM Inference with MLX and RDMA on Mac Studio", 15 Oct 2026: https://machinelearning.apple.com/research/mlx-distributed-inference
- **D** = Intel Newsroom, "Intel Offers Day-0 Support for Meta's Muse Spark Open", 15 Oct 2026: https://www.intel.com/content/www/us/en/newsroom/news/artificial-intelligence/intel-offers-day-0-support-for-meta-muse-spark-open.html
- **E** = Apple Newsroom press release, new Mac Studio with M5 Max and M5 Ultra, 25 Aug 2026: https://www.apple.com/newsroom/2026/08/apple-introduces-new-mac-studio-with-m5-max-and-m5-ultra/
- **F** = Together AI model page (hosted price): https://www.together.ai/models/muse-spark-open
- **G** = CNBC, Kif Leswing and Jonathan Vanian, 15 Oct 2026: https://www.cnbc.com/2026/10/15/apple-meta-partner-ai.html
- **H** = VentureBeat, Carl Franzen, 15 Oct 2026: https://venturebeat.com/technology/meta-unveils-muse-spark-open-the-new-top-u-s-open-weights-model-and-it-runs-on-two-paired-mac-desktops
- **I** = The New Stack, Frederic Lardinois, 15 Oct 2026: https://thenewstack.io/meta-muse-spark-open/
- **J** = TechCrunch, Lucas Ropek, 15 Oct 2026: https://techcrunch.com/2026/10/15/meta-launches-an-open-weight-model-that-runs-on-macs/

## Verified facts

### The release

| Fact | Detail | Source |
|---|---|---|
| What | Meta released the downloadable weights of **Muse Spark Open** | A, B |
| When | Thursday 15 Oct 2026 | A, B, G |
| Made by | Meta Superintelligence Labs | A, B |
| Size | 816B total parameters, **42B active** per token (mixture-of-experts: 256 experts, 8 used per token) | A, B |
| Memory of conversation (context window) | 1 million tokens | A, B |
| Input / output | Takes in text, images, video and audio. **Gives back text only.** It does not make pictures, audio or video. | B, H |
| Languages | Trained on data from more than 100 languages. Meta says it has not been tested on all of them. | B |
| Built for | Coding and "agentic" work: long, multi-step tasks, using tools, fixing its own mistakes | A, B, D |
| Age limit | Meta says it is not meant for people under 18 | B |
| Where to download | Hugging Face, Amazon SageMaker AI, Google Cloud Model Garden, Microsoft Foundry Models | A |
| Where to use it online (API) | Baseten, Fireworks AI, Groq, Modal, Nebius, OpenRouter, Together AI | A |
| Software that runs it | SGLang, vLLM, TensorRT-LLM, Hugging Face Transformers, Apple MLX, llama.cpp, Unsloth. Tuned for AMD, Apple, Intel and NVIDIA chips. | A, B |
| Download form | Hugging Face asks for your full legal name, date of birth and full organisation name before you can download. VentureBeat notes Meta used the same form for Llama 4. | B, H |
| Not Meta's best model | Meta AI chief Alexandr Wang told CNBC it is not the most capable model Meta has built (its paid Muse Wonder, released 12 Oct, is stronger) | G, H |

### The Apple and Meta part

| Fact | Detail | Source |
|---|---|---|
| Joint work | Apple and Meta worked together so the model runs locally on Mac Studio computers with the M5 Ultra chip | A, C, G |
| Setup Meta describes | **Two** Mac Studios with M5 Ultra, each with up to 512GB of memory, linked to act like one machine with about 1TB of memory, using Apple's MLX software | A |
| Why one Mac is not enough | Full-size weights need more than 1.6TB of memory. A squeezed 4-bit version (NVFP4) still needs about 493GB, plus working memory, so it does not fit on one machine | C |
| How they connect | Thunderbolt 5 cables (Apple used two cables between each pair of Macs) with a new low-delay link added in macOS 26.2 | C |
| Speed, measured by Apple | At an 8,192-token context: **2 Macs about 15.7 to 25.0 tokens a second** (depending on how the work is split); **4 Macs about 36.7 tokens a second** | C |
| Power | A single M5 Ultra Mac Studio peaked at about 300 to 341 watts in Apple's tests of other models | C |
| Meta's demos | Meta's own coding tool (Muse Code, running on this model) shipped bug fixes and features to Ice Cubes, an open-source Mastodon app, and drove DaVinci Resolve video software to pick and crop clips. **These are Meta's own demos, not independent tests.** | A, J, H |
| CNBC: 2 to 4 Macs | Customers can pair two to four Mac Studios | G |
| Background | First public Apple and Meta partnership since 2017, after years of disputes (including Apple's 2021 privacy change, which Meta estimated would cost it US$10 billion in 2022) | G |
| New Apple boss | John Ternus took over as Apple CEO from Tim Cook last month (September 2026) | G |

### Mac Studio prices (US dollars)

| Fact | Detail | Source |
|---|---|---|
| M5 Ultra Mac Studio starting price | **US$5,499** (US$5,099 education) | E (Apple) |
| 512GB version | "Coming in late October." **Apple has not announced the price.** | E (Apple), H |
| 256GB M5 Ultra price | "At least US$10,799". **This is CNBC's figure.** VentureBeat links it to Apple's store listing (256GB memory with 1TB storage). | G, H |
| Rough total | Four 256GB machines would be about US$43,196 before tax. **This is VentureBeat's sum, not a price for Meta's two-Mac setup.** | H |
| Writer note | Say "tens of thousands of dollars" and credit CNBC for the US$10,799 figure. Do not give a price for the 512GB model, because Apple has not given one. | |

### Licence (Muse Model License)

| Fact | Detail | Source |
|---|---|---|
| Name | Muse Model License. Meta's blog calls it "limited commercial terms" | A, B |
| Free uses | Use, copy, change, fine-tune, distil and share, with no fee, as long as you follow the conditions and the usage policy | B |
| Attribution rule | Products must clearly show **"Built with Muse Spark Open"** (in the app, documentation, website or settings) | B |
| The US$20 million rule | Only if you sell **AI models as a service** (others pay you for access to model outputs, for example through an API) **and** you and your related companies earn more than **US$20 million** in any 12 months: you must tell Meta and sign a separate deal **first** | B |
| What that rule does not cover | Internal use, research, other business uses, and using it to power features inside your own product (if that product is not itself a model service) | B, H |
| Banned uses (examples) | Military, warfare, nuclear and spying uses; running critical infrastructure; weapons; malware; fraud; pretending the output was written by a human | B, I |
| Outputs | Meta claims no ownership of what the model produces | B |
| **Do not call it open source** | The weights are open, but the licence has conditions. Use "open-weight". The New Stack: "the weights may be open but the license doesn't tell the same story." VentureBeat: "an open-weight release under a custom license." | B, H, I |

### Hosted price (for people without the hardware)

| Fact | Detail | Source |
|---|---|---|
| Together AI | **US$1.25 per million input tokens, US$0.15 per million cached input tokens, US$4.25 per million output tokens**, with a 1M-token context (checked 15 Oct 2026) | F |
| Other hosts | Prices and limits differ. Meta's own documents, as quoted by VentureBeat, say Groq limits the context to 131,072 tokens and needs approval. **Not checked directly.** | H |

### Other chip makers

| Fact | Detail | Source |
|---|---|---|
| Intel | Supports it from day one on Xeon processors, and on an upcoming data-centre GPU (code name "D-series", 160GB per card). Four of these cards can run the model. | D |
| AMD and NVIDIA | Meta's GPU code gives 1.03 to 3.95 times faster speeds at the "kernel" (low-level) level, and 3% faster overall on AMD MI350 | A |

### Benchmarks (Meta's own table, not independently confirmed)

| Test | Muse Spark Open | Best rival in Meta's table | Source |
|---|---|---|---|
| Artificial Analysis Intelligence Index | 39 | GLM 5.3: 45, Kimi K3: 44, Qwen3.8: 40 | B |
| JobBench (agent tasks) | **61.8 (top)** | GLM 5.3: 61.4 | B |
| MCP-Atlas (tool use) | **89.2 (top)** | Qwen3.8: 84.5 | B |
| Terminal-Bench 2.1 (coding) | 76.4 | Kimi K3: 85.0 | B |
| DeepSWE 1.1 (coding) | 60 | Kimi K3: 68 | B |
| US rivals' Intelligence Index | Inkling 26, Nemotron 3 Ultra 23 | | B |

- VentureBeat: Artificial Analysis lists six models from China, including Xiaomi's MiMo-V2.6-Pro at 46, all scoring higher than the 39 Meta reports. **VentureBeat could not find a separate Artificial Analysis score for Spark Open, so the 39 is Meta's own figure.** (H)
- The New Stack: it beats US rivals "often by 20 points or more" but trails the top Chinese models on coding. (I)

## Quotes worth using (short, with attribution)

- Mark Zuckerberg on X, via CNBC: "Muse Spark Open -- weights releasing today -- runs great on new Mac Studios thanks to work with @johnternus and Apple." (G)
- John Ternus, Apple CEO, on X, via CNBC: "Amazing to run a model of Muse Spark Open's caliber and scale this efficiently, right from your desk." (G)
- Alexandr Wang, Meta, to CNBC: "These aren't the most capable models that we've developed or released." (G)
- Wang, to CNBC: "We think that there will be a lot of companies and developers who sort of use this model and tinker with it at small scale and then seek to ramp up and scale up their usage." (G)
- Nathan Lambert (Interconnects) on X, via VentureBeat: "I waited so long for US open weight models to be relevant again." (H)
- VentureBeat's verdict: "a contender with specific strengths, rather than an overall open-weight leader." (H)
- The New Stack's headline section: "Muse Spark Open on the Mac you can't afford." (I)

## Not confirmed, or needs care

- **"Most capable US open-weight model to date"** is **Meta's claim**. Attribute it every time. Independent outlets (H, I) say its strengths are specific, and several models from China match or beat it on some tests. The benchmark table is Meta's own.
- **Mac Studio price:** the US$10,799 figure is **CNBC's** (VentureBeat links it to Apple's store). Apple has not announced the price of the 512GB model, which Meta's setup uses.
- **Memory needed:** the model card says "at least 700GB" of GPU memory for the 4-bit version. Apple says the 4-bit weights take about 493GB, plus working memory. The two figures differ (probably because of working memory and long contexts). Engadget, via TechCrunch, says about 1TB of RAM. Safe wording: "about a terabyte of combined memory across two machines".
- **Can two 256GB Macs (the model on sale today) run it?** Not stated anywhere. Meta and Apple describe 512GB machines. Do not suggest that buyers can do this today.
- **Version:** the file name of Meta's social image suggests the model is based on Muse Spark 1.2 ("muse-spark-1-2-open-weights"). **Not confirmed. Do not use.**
- **Speed:** VentureBeat says Meta's announcement gave no speed figure. Apple's blog (C) does give one. Credit the speed numbers to Apple.
- **Hosted prices** other than Together AI's were not checked.
- **Rumour:** none found worth reporting. CNBC says neither company would say whether this is the start of a deeper partnership. Leave it as an open question.

## Reader angle (worldwide)

- **Who can actually run it at home or in the office?** Very few people. You need two of Apple's most expensive desktops, with 512GB each. That model goes on sale in late October, at a price Apple has not yet given. CNBC says even the 256GB version costs at least US$10,799. Realistically, this is for well-funded developers, research labs and companies that must keep data on their own machines (for example, for privacy or legal reasons).
- **Everyone else** can try it through hosted services: Together AI charges US$1.25 per million input tokens and US$4.25 per million output tokens (checked 15 Oct 2026). Or wait for smaller versions. Meta's smaller open model, Muse Glimmer (30B, Apache 2.0 licence, released 10 Aug), runs on ordinary high-end laptops (H).
- **Small businesses and developers:** free for most uses. The US$20 million rule only applies to companies selling AI model access as a service. You must show "Built with Muse Spark Open" in your product. Military, critical-infrastructure and weapons uses are banned.
- **Privacy:** running it on your own machine means your code and files never leave your desk. This is the main real benefit of the Mac setup (C, G).
- **Download form:** Hugging Face asks for your legal name and date of birth. Some readers will want to know this before they sign up.
- **Under 18s:** Meta says it is not meant for them.
- **Big picture:** CNBC and VentureBeat frame it as the US answer to strong open models from China (Qwen, Kimi, GLM, DeepSeek). VentureBeat cites Hugging Face's figure that Chinese models made up 41% of downloads over the past year.

## Fair good and bad points

**Good**
- Real downloadable weights from a big US lab, at a scale (816B) that used to need a data centre.
- Runs privately on desktop machines. Apple published real speed figures (about 16 to 25 tokens a second on two Macs, about 37 on four), which is faster than most people read.
- Free for most businesses, including use inside their own products.
- Wide support from day one: Apple, Intel, AMD and NVIDIA chips, many software tools and cloud hosts.
- Leads Meta's table on tool-use and agent tests, and on refusing harmful requests (Meta's safety figures).
- Two former rivals, Apple and Meta, working together publicly.

**Bad / caution**
- "Most capable" is Meta's own claim, based on its own tests. Models from China score higher on several tests, including coding.
- The desktop setup costs tens of thousands of US dollars, and the 512GB Mac is not on sale yet (price unknown).
- Not open source: the licence has conditions (an attribution line, a deal needed for big model-service sellers, banned uses).
- The download form asks for a lot of personal information.
- Not Meta's best model. Muse Wonder (paid) is stronger.
- Meta's demos are its own, and no independent tests have been done yet.

## Keyword plan

**Semrush:** not used. Semrush said the account has **no API units left** ("additional API units are required", https://www.semrush.com/mcp-access). Pyla may want to top up.

**Fallback:** Google search suggestions through Firecrawl (US `gl=us`, UK `gl=gb`), plus a Firecrawl web search for the questions people ask. Suggestions show that people search for a phrase, but give no numbers.

Suggestions found (15 Oct 2026):
- `muse spark open` (US): muse spark open weights, muse spark open source, muse spark open size, muse spark open huggingface, muse spark open model, muse spark open openrouter, muse spark open benchmark
- `muse spark open` (UK): muse spark open source, muse spark open weights, muse spark opencode, **muse spark open source or not**, muse spark open model
- `meta muse spark` (US): meta muse spark open, meta muse spark cost, meta muse spark open weight
- `mac studio m5 ultra` (US): mac studio m5 ultra 512gb ram, mac studio m5 ultra 512gb price, mac studio m5 ultra release date, mac studio m5 ultra power consumption
- `run llm locally on mac` (US): run llm locally on mac studio
- `what is an open weight` (US): what is an open weight ai model, what is an open weight model
- `meta open weight` (UK): meta open weight models, meta new open weight model, meta latest open-weight model
- Reddit (r/LocalLLaMA) and other threads keep asking whether Meta's Muse Spark is "open source". The story can answer this clearly.

| Phrase | Volume (country) | Difficulty | Why picked |
|---|---|---|---|
| **muse spark open** (focus) | Google suggestion, US and UK | Google suggestion (no numbers). New name, so few pages compete yet. | The exact product name; the top suggestion in both countries. The story answers it fully. |
| muse spark open source | Google suggestion, US and UK ("…or not" in UK) | Google suggestion | A real question with a clear answer: no, it is open-weight with a custom licence. |
| muse spark open weights | Google suggestion, US and UK | Google suggestion | Matches the news itself (the weights were released). |
| run llm locally on mac studio | Google suggestion, US | Google suggestion | The Mac Studio angle. Lasting interest beyond the news. |
| mac studio m5 ultra 512gb price | Google suggestion, US | Google suggestion | Readers want the cost. The story can say honestly that the price is not announced yet. |
| what is an open weight model | Google suggestion, US | Google suggestion | Explainer question the story answers in one line for non-experts. |
| meta open weight model | Google suggestion, UK | Google suggestion | Broader phrase linking to Meta's open-model history (Llama, Glimmer). |

- **focusKeyword:** `muse spark open`
- **keywords (6):** `muse spark open source`, `muse spark open weights`, `run llm locally on mac studio`, `mac studio m5 ultra 512gb price`, `what is an open weight model`, `meta open weight model`
- **seoTitle (55 characters):** `Muse Spark Open: Meta's open-weight AI runs on two Macs`
- **description (151 characters):** `Meta released Muse Spark Open, an 816B open-weight AI model that runs on two Mac Studios. Here is who can use it, what it costs and the licence limits.`
- **Web address:** `/news/meta-muse-spark-open-mac-studio` (as given)

## Related guide

- No existing guide in `src/content/guides/` apart from `sample-guide` (a draft).
- **Suggested new guide:** "How to run AI models on your own computer (local AI) — what you need and what it costs". It would cover Ollama, LM Studio and MLX, small models like Muse Glimmer, and hardware tiers. Keyword idea: `run llm locally on mac` (a Google suggestion). Needs Pyla's own testing.

## Cover photo

**First choice (Unsplash, free):**
- Page: https://unsplash.com/photos/computer-monitor-displaying-code-in-a-dimly-lit-room-EHn4lNPnsbA
- Photographer: **Joy Real** (@joyreal328), Montreal, published 9 May 2026
- Licence: the page says "Free to use under the Unsplash License" (checked 15 Oct 2026). It is not Unsplash+. The photographer asks for the credit "Photo by Joy Real on Unsplash".
- imageAlt: `A computer monitor showing lines of code on a desk in a dimly lit room`
- imageCredit: `Photo by Joy Real on Unsplash`
- **Logo check:** the page's tags and description mention no brands, but I could not look at the image itself. **Check by eye before using** that no Apple, Meta or other logo is visible (for example on the monitor's frame).

**Backup (Unsplash, free):**
- Page: https://unsplash.com/photos/computer-monitors-in-dark-workspace-SrewPUfo2c0
- Photographer: **David Schultz** (@davidschultz), published 12 Dec 2020. The page says "Free to use under the Unsplash License".
- imageAlt: `Three computer monitors showing code in a dark room at night`
- **Logo check:** the tags include "laptop", so a laptop logo might be visible. Check by eye before using.

Both photos must be resized to at least 1200 px wide and under 250 KB, and saved in `public/images/posts/meta-muse-spark-open-mac-studio/`. Do not use any image from the news sources (CNBC, TechCrunch, VentureBeat, The New Stack), or from Meta's or Apple's pages.
