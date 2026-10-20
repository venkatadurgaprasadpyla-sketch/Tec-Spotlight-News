---
title: "DeepSeek V4.1 Flash update ships open weights and a web search API for agents"
seoTitle: "DeepSeek V4.1 Flash: Open Weights and a Search API"
description: "DeepSeek V4.1 Flash gets a 17 October update with MIT open weights, unchanged API prices and a new search API for AI agents. Here is what changes."
focusKeyword: "DeepSeek V4.1 Flash"
keywords:
  - "DeepSeek V4.1 Flash 1017"
  - "DeepSeek open weights"
  - "DeepSeek search API"
  - "DeepSeek API pricing"
  - "is DeepSeek safe"
date: 2026-10-17
category: ai
draft: true
image: "/images/posts/deepseek-v4-1-flash-open-weights/cover.jpg"
imageAlt: "TechSpotlight title card: DeepSeek V4.1 Flash update ships open weights and a web search API for agents"
imageCredit:
  name: "TechSpotlight News"
  source: "Title card"
  url: "https://tec-spotlight-news.techspotlightid-official.workers.dev/"
summary:
  - "DeepSeek released V4.1-Flash-1017 on 17 October, with weights anyone can download under the MIT licence and no change to API prices."
  - "New Search and Fetch APIs let AI agents read the web for US$0.75 per 1,000 successful calls; agent-tool use is free until 31 October."
  - "Benchmark gains are DeepSeek's own claims. Data stored in China and government-device restrictions still shape who can use the app and API."
# relatedGuide: using-chinese-ai-models-from-abroad (guide not written yet; suggested earlier by the researcher: "Using Chinese AI models (DeepSeek, Qwen, Kimi) safely from abroad: what is allowed, pricing and privacy". FLAG for Pyla: needs their own testing.)
sources:
  - name: "DeepSeek: V4.1-Flash-1017 release news (17 October)"
    url: "https://api-docs.deepseek.com/news/news261017/"
  - name: "DeepSeek API Change Log"
    url: "https://api-docs.deepseek.com/updates/"
  - name: "Hugging Face: DeepSeek-V4.1-Flash-1017 model card"
    url: "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017"
  - name: "Hugging Face: DeepSeek-V4.1-Flash model card"
    url: "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash"
  - name: "DeepSeek: Search and Fetch API guide"
    url: "https://api-docs.deepseek.com/guides/search/"
  - name: "DeepSeek: Models and pricing"
    url: "https://api-docs.deepseek.com/quick_start/pricing/"
  - name: "NVIDIA: DeepSeek V4.1 Flash model card"
    url: "https://build.nvidia.com/deepseek-ai/deepseek-v4.1-flash/modelcard"
  - name: "MarkTechPost: DeepSeek releases V4.1-Flash-1017 and opens Search API (17 October)"
    url: "https://www.marktechpost.com/2026/10/17/deepseek-just-released-v4-1-flash-1017-scores-77-0-on-deepswe-opens-search-api/"
  - name: "Investing.com: DeepSeek releases AI model update, opens search APIs to all users (17 October)"
    url: "https://investing.com/news/stock-market-news/deepseek-releases-ai-model-update-opens-search-apis-to-all-users-4955445"
  - name: "Tech Insider: DeepSeek V4.1 Flash 1017, DeepSWE and the Search API (17 October)"
    url: "https://tech-insider.org/deepseek-v4-1-flash-1017-deepswe-search-api-2026/"
  - name: "AI Weekly: DeepSeek opens V4.1-Flash-1017 weights and $0.75 search API (17 October)"
    url: "https://aiweekly.co/alerts/deepseek-opens-v41-flash-1017-weights-and-075-search-api"
  - name: "FourWeekMBA: DeepSeek opens its search API at $0.75 per 1,000 calls"
    url: "https://fourweekmba.com/ai-deepseek-opens-its-search-api-at-0-75-per-1000-calls/"
  - name: "DeepSeek: Privacy Policy"
    url: "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html"
  - name: "Al Jazeera: Which countries have banned DeepSeek and why?"
    url: "https://www.aljazeera.com/news/2025/2/6/which-countries-have-banned-deepseek-and-why"
  - name: "Tom's Guide: DeepSeek AI banned by NASA, US Navy and more over privacy concerns"
    url: "https://tomsguide.com/computing/online-security/deepseek-ai-banned-by-nasa-us-navy-and-more-over-privacy-concerns"
  - name: "Yahoo News: South Korea blocks DeepSeek AI"
    url: "https://www.yahoo.com/news/south-korea-blocks-deepseek-ai-110729963.html"
---

A developer building an AI helper on a small budget usually faces two bills: one for the model and one for letting it look things up on the web. On 17 October, DeepSeek made both a little easier to plan for. It updated DeepSeek V4.1 Flash, published the new weights for anyone to download, and opened a web search service built for AI agents.

The update, called DeepSeek-V4.1-Flash-1017, is now live in DeepSeek's app, web chat and API. It matters because a capable model with open weights and steady prices gives teams more choice about where their AI runs. The new search tools, meanwhile, put DeepSeek in direct competition for the plumbing that AI agents depend on.

## DeepSeek V4.1 Flash 1017: what is new, and what stays the same

DeepSeek calls this a minor update. It says the model is better at agent and coding tasks, gives shorter answers and finishes jobs faster. Those are the company's own claims. Its headline figure, 77.0 on the DeepSWE coding benchmark, is also self-reported; we found no independent test of it yet.

The weights are on Hugging Face and ModelScope under the MIT licence. In plain terms, companies can download, change and use the model commercially. Open weights are not the same as fully open source, though: the training data and training code are not released.

According to DeepSeek's model card for V4.1 Flash, it is a mixture-of-experts model, a design where only part of the model works on each step. It has a 552-billion-parameter backbone, of which only about 8 to 16 billion are active for each word it processes. It can read up to 1 million tokens at once, roughly the length of several long books. Hugging Face's file listing shows a larger total, about 763 billion; DeepSeek has not explained the gap.

API prices did not change with this release, DeepSeek's change log says.

## A search API for agents, free until 31 October

DeepSeek's Search and Fetch APIs are now open to everyone. Search runs a web search and returns results; Fetch pulls the content of a page an agent asks for. They can run inside developers' own apps or as built-in tools in DeepSeek Harness, Claude Code and Codex.

The price is US$0.75 per 1,000 successful requests for each of the two tools, per DeepSeek's guide (checked on 17 October 2026). Failed or empty calls are not billed. Calls made through those agent tools are free until 16:00 UTC on 31 October, which is midnight on 1 November in Beijing.

## Where the data goes is still the open question

DeepSeek's privacy policy says it processes and stores personal data in China. That covers its app and API. In our reading, it is likely to cover search queries sent through the new API too, though DeepSeek has not said so separately.

Several governments have acted on this. Italy's data protection authority ordered DeepSeek to stop processing Italians' data. Australia banned it on federal government devices, South Korea restricted it in ministries, and US agencies including NASA and the Navy limited its use. These are mostly rules for official devices, not for the public.

Open weights change part of this picture. A company that runs the model on its own servers, or through a cloud host it already trusts, does not send prompts to DeepSeek at all. The search service, by design, cannot work that way.

## If you build with AI, what to check this month

For developers, the free window for search calls made through Harness, Claude Code or Codex is a low-cost chance to test the tools. Current token prices are on the [DeepSeek API pricing](https://api-docs.deepseek.com/quick_start/pricing/) page. Before 1 November, check whether sending queries to servers in China fits your company's data rules and your customers' expectations.

For everyday users: if you are asking "is DeepSeek safe", the honest answer is that it depends on what you share and where you work. Avoid entering personal or work data you would not want stored abroad, and follow any rules your employer or government sets.

## Open weights help most where trust is thin

Our reading: on balance, this is a useful, modest release. Open MIT weights let organisations run the model where they choose, which partly answers the privacy worry. Steady prices help small teams budget. The weak points are that the benchmark gains are self-reported, and the search service asks users to trust DeepSeek with their queries.

Meta's [Muse Spark Open](/news/meta-muse-spark-open-mac-studio/) showed the same pull towards downloadable models. Independent tests, and how regulators view the search service, will decide how far DeepSeek V4.1 Flash travels beyond its own app.

From 1 November, agent-tool search calls are billed too. Whether developers keep paying will show if DeepSeek can sell the plumbing, not just the model.
