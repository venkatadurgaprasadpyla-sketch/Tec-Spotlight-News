# Research: Moonshot AI releases Kimi K3.1 Pro (story mode)

Researched 23 Oct 2026, ~20:30 UTC. Firecrawl out of credits: WebSearch (extended) plus direct reading with curl. Slug `kimi-k3-1-pro`, category `ai`. Breaking (last 6 hours, #1 on Hacker News).

Conflict-of-interest rule: the official blog and several outlets compare K3.1 Pro with Anthropic's Claude models. Those comparisons are left out on purpose. Comparisons with other labs (OpenAI, DeepSeek) are kept only where sourced.

## Confirmed facts (two independent sources, one official)

| Fact | Official source | Independent source(s) |
|---|---|---|
| Moonshot AI released Kimi K3.1 Pro, first of a new K3.1 series, plus a "Highspeed" version said to be 2-3x faster | Kimi blog | TNW; Unite.AI; Simon Willison |
| Released 23 Oct 2026 (Friday). Note: Unite.AI says 24 Oct (likely China time); TNW, Simon Willison and Artificial Analysis coverage are dated 23 Oct | Kimi API/blog live 23 Oct | TNW ("on Friday", 23 Oct 18:19 UTC); Simon Willison (23 Oct) |
| "3T-class" open-weight model; 2.8 trillion total parameters, 104 billion active (mixture of experts) | Kimi blog ("3T-class"); Kimi official X post (2.8T/104B) | Artificial Analysis (2.8T/104B) |
| 1-million-token context window | Kimi blog; Kimi X post | Unite.AI |
| Post-trained version of Kimi K3 with much more post-training compute | Kimi blog | TNW; Unite.AI |
| Available now in Kimi web and apps (iOS, Android, HarmonyOS), Kimi Work desktop (Windows, Apple silicon Mac), Kimi Code and the API (`kimi-k3.1-pro`, `kimi-k3.1-pro-highspeed`) | Kimi blog | Unite.AI; TNW (apps and API) |
| Full model weights promised "by Nov 4, 2026"; not yet published | Kimi blog | TNW; Simon Willison; Artificial Analysis |
| API price: US$2 per million input tokens, US$10 per million output, US$0.20 cache hits; Highspeed US$4 / US$20 | Kimi platform pricing page | Artificial Analysis; Simon Willison |
| Terminal-Bench 4.0 (coding agents): 65.7% by Moonshot's test, ahead of OpenAI's GPT-6 Astra at 58.2% | Kimi blog | TNW; Unite.AI |
| Independent check: Artificial Analysis measured 67% on Terminal-Bench 4.0 (Kimi K3: 13%) | n/a (independent) | Artificial Analysis |
| Moonshot's hallucination stress test (Kimi Hallu Bench Hard): false-claim rate down from 23.4% (K3) to 8.3%; Moonshot says this is a stress test, not everyday error rate | Kimi blog | TNW; Unite.AI |
| Cyber: Moonshot found hacking-related content in mid-training data and RL tasks, and removed it from both stages for the open release | Kimi blog | TNW; Unite.AI |
| xdev-bench-hard (Moonshot's in-house exploit test, pass@3): version without the cuts 90.5%; released K3.1 Pro 81.0%; K3 33.3%; DeepSeek V4.1-Flash 85.7% (Moonshot's figures) | Kimi blog (chart text) | TNW |
| Moonshot says K3.1 Pro's cyber capability stays behind frontier closed models that have been public for at least three months; aims not to push the open-weight frontier on cyber, but to raise it "progressively" | Kimi blog | Unite.AI; TNW |

## Independent benchmark (Artificial Analysis)

- Intelligence Index score 55, fourth overall, up 11 points from Kimi K3 (44). Once weights are out it would be the highest-scoring open-weights model (Artificial Analysis; Simon Willison also notes it is the first soon-to-be open model to score this high). Do not name the models ahead of it (two are Anthropic models).
- Artificial Analysis's own hallucination test: rate falls from 53% to 44%.
- Cost per Artificial Analysis task about US$1.98, roughly the same as K3, because it uses ~14% more output tokens while token prices are 33% lower (Artificial Analysis only: attribute).
- Licence: not announced yet (Artificial Analysis: "weights currently not published").

## Cut or labelled

- **Cut:** White House accusation (July) that Moonshot used banned Nvidia chips and copied a model (TNW only; and involves Anthropic).
- **Cut:** K3 sandbox escape in August (TNW only).
- **Cut:** All comparisons with Claude models (conflict of interest), including Moonshot's "narrowly behind" claim and Artificial Analysis's ranking names.
- **Cut:** Plan tiers needed in the Kimi app (Unite.AI citing docs; not checked on the official page).
- **Labelled:** every benchmark except Artificial Analysis's is Moonshot's own test.
- **Labelled:** "33% cheaper than K3" attributed to Artificial Analysis.
- Licence for the open weights: unknown, say so.

## Keyword plan

Semrush not used (Firecrawl/Semrush credits not available this run); Google suggestions read directly (gl=us and gl=gb).

| Phrase | Volume | Difficulty | Why |
|---|---|---|---|
| **Kimi K3.1 Pro** (focus) | Google suggestion (us) | Google suggestion | Exact product name, new, low competition, the story answers it fully |
| Kimi K3.1 release date | Google suggestion (us, gb) | Google suggestion | Readers ask when; answer: 23 Oct, weights by 4 Nov |
| Kimi open weights release date | Google suggestion (us, gb) | Google suggestion | The open-weights date is a key fact |
| Kimi API pricing | Google suggestion (us, gb) | Google suggestion | Official prices are in the story |
| Moonshot Kimi | Google suggestion (us, gb) | Google suggestion | Company + product name searches |
| Kimi K3.1 Pro Highspeed | Official model name | n/a | Covered naturally |

- Suggested seoTitle: "Kimi K3.1 Pro: Moonshot's Model Trims Its Hacking Skills" (check length).
- Web address: `/news/kimi-k3-1-pro/`.
- Most common question: "When will Kimi K3.1 Pro open weights be released?" Answer: Moonshot promises by 4 Nov 2026.

## Related on TechSpotlight

- `/news/deepseek-v4-1-flash-open-weights/` (DeepSeek's open model, cited in Moonshot's own cyber chart).
- `/news/meta-muse-spark-open-mac-studio/` (mentions Kimi K3 in benchmark comparison).
- Related guide: none yet. Suggested (already flagged earlier): `using-chinese-ai-models-from-abroad`.

## Cover

- Official: no Moonshot/Kimi press kit or media page with usage terms found (the blog's header image is not offered for press use), so not used.
- Unsplash: blocked by a bot check (401) for search and download.
- Used Pexels photo 193350 by Markus Spiske (laptop with green and purple code in a dark room), free to use under the Pexels licence; photographer confirmed by the image's own metadata and the Pexels page listing. https://www.pexels.com/photo/193350/

## Sources

- Kimi (official): Kimi K3.1 Pro tech blog. https://www.kimi.ai/blog/kimi-k3-1-pro
- Kimi API platform: pricing. https://platform.kimi.ai/docs/pricing/chat
- Kimi official X post. https://x.com/Kimi_Moonshot/status/2113680701770068067
- TNW, 23 Oct. https://thenextweb.com/news/moonshot-kimi-k3-1-pro-open-weight-cyber
- Artificial Analysis. https://artificialanalysis.ai/articles/kimi-k3-1-pro-launch-benchmarks
- Simon Willison, 23 Oct. https://simonwillison.net/2026/Oct/23/kimi-k31-pro/
- Unite.AI (AI-written, editor-reviewed; secondary only). https://www.unite.ai/moonshot-ai-releases-kimi-k3-1-pro-first-model-in-new-k3-1-series/
