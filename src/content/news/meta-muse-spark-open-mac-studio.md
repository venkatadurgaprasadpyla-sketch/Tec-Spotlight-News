---
title: "Meta's Muse Spark Open puts a big AI model on two Mac desktops, for those who can afford them"
seoTitle: "Muse Spark Open: Meta's open-weight AI runs on two Macs"
description: "Meta released Muse Spark Open, an 816B open-weight AI model that runs on two Mac Studios. Here is who can use it, what it costs and the licence limits."
focusKeyword: "muse spark open"
keywords:
  - "muse spark open source"
  - "muse spark open weights"
  - "run llm locally on mac studio"
  - "mac studio m5 ultra 512gb price"
  - "what is an open weight model"
  - "meta open weight model"
date: 2026-10-15
category: ai
draft: true
image: "/images/posts/meta-muse-spark-open-mac-studio/cover.jpg"
imageAlt: "A computer monitor showing code on a home desk (stock photo, not the Mac Studio setup for Muse Spark Open)"
imageCredit:
  name: "Joy Real"
  source: "Unsplash"
  url: "https://unsplash.com/photos/computer-monitor-displaying-code-in-a-dimly-lit-room-EHn4lNPnsbA"
summary:
  - "Meta released Muse Spark Open, an 816-billion-parameter AI model whose weights anyone can download, built for coding and multi-step tasks."
  - "With Apple, Meta showed it running on two linked Mac Studio desktops with about a terabyte of memory between them, likely to cost tens of thousands of dollars."
  - "Meta calls it the most capable US open-weight model, but its own scores trail some Chinese rivals, and the licence has real conditions."
# relatedGuide: run-ai-models-locally (guide not written yet; suggested by the researcher, needs Pyla's own testing)
sources:
  - name: "Meta AI Research: Introducing Muse Spark Open"
    url: "https://research.meta.ai/blog/muse-spark-open"
  - name: "Hugging Face: Muse Spark Open model card"
    url: "https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B"
  - name: "Hugging Face: Muse Model License"
    url: "https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B/blob/main/LICENSE.md"
  - name: "Apple Machine Learning Research: Local and distributed large LLM inference with MLX and RDMA on Mac Studio"
    url: "https://machinelearning.apple.com/research/mlx-distributed-inference"
  - name: "Apple Newsroom: Apple introduces new Mac Studio with M5 Max and M5 Ultra (25 Aug 2026)"
    url: "https://www.apple.com/newsroom/2026/08/apple-introduces-new-mac-studio-with-m5-max-and-m5-ultra/"
  - name: "Together AI: Muse Spark Open model page"
    url: "https://www.together.ai/models/muse-spark-open"
  - name: "CNBC: Apple and Meta team up to make Muse AI model run on Mac computers"
    url: "https://www.cnbc.com/2026/10/15/apple-meta-partner-ai.html"
  - name: "VentureBeat: Meta unveils Muse Spark Open, and it runs on two paired Mac desktops"
    url: "https://venturebeat.com/technology/meta-unveils-muse-spark-open-the-new-top-u-s-open-weights-model-and-it-runs-on-two-paired-mac-desktops"
  - name: "The New Stack: Meta ships Muse Spark Open, its answer to China's best open-weight models"
    url: "https://thenewstack.io/meta-muse-spark-open/"
---

Picture a small team whose code is not allowed to leave the building, for legal or privacy reasons. Until now, using a top-tier AI model usually meant sending that code to someone else's cloud. On Thursday, Meta released Muse Spark Open, a large AI model you can download and run yourself. It also worked with Apple so the model runs on two linked Mac Studio desktops.

What is an open weight model? It is one whose "weights", the numbers learned in training that make it work, are free to download. Meta calls this one "the most capable US open-weight model to date". It arrives while open models from China lead: VentureBeat cites Hugging Face figures showing Chinese models made up 41% of downloads in the year to March 2026.

## Muse Spark Open: a data-centre-sized model on a desk

Meta Superintelligence Labs built the model. It has 816 billion parameters, but only 42 billion work on each word piece (token), because it splits tasks among smaller "expert" parts. It can read up to a million tokens at once and takes in text, images, video and audio, but replies in text only. Meta built it for coding and long, multi-step tasks that use tools.

The Muse Spark Open weights are on Hugging Face and the cloud stores of Amazon, Google and Microsoft.

The Apple part is the new twist: CNBC reports it is the companies' first public partnership since 2017, after years of disputes. Meta describes two Mac Studios with Apple's M5 Ultra chip, each with up to 512GB of memory. Apple links them with Thunderbolt 5 cables so they work like one machine with about a terabyte of memory across the two. Apple measured roughly 16 to 25 tokens a second on two Macs and about 37 on four. In practice, that is faster than most people read.

## Meta's 'most capable' label rests on its own scoreboard

The scores are mixed, and all come from Meta's own table. The model leads on JobBench, a test of agent tasks (61.8 against GLM 5.3's 61.4), and on MCP-Atlas, a tool-use test. It trails China's Kimi K3 on the Terminal-Bench coding test (76.4 against 85.0). On Artificial Analysis's overall index, Meta reports 39, below GLM 5.3 (45) and Kimi K3 (44). Against the US rivals in the same table, Inkling (26) and Nemotron 3 Ultra (23), it leads clearly. VentureBeat could not find an independent score.

"These aren't the most capable models that we've developed or released," Alexandr Wang, Meta's AI chief, told CNBC. Meta's paid Muse Wonder is stronger.

## What it costs, and why it is not open source

Running it at home is out of reach for most of us. Apple's M5 Ultra Mac Studio starts at US$5,499 (US price, checked on 15 October 2026), but Apple has not announced the Mac Studio M5 Ultra 512GB price; that model arrives in late October. CNBC puts the 256GB version at no less than US$10,799. Meta and Apple have not said whether two 256GB Macs can run the model. If you plan to run an LLM (large language model) locally on Mac Studio machines, wait until they confirm what works.

Most people will try it online instead. Together AI charges US$1.25 per million input tokens and US$4.25 per million output tokens (checked on 15 October 2026).

Is Muse Spark Open open source? No. It is open-weight, under Meta's own Muse Model License. You can use, change and share it free, but products must show "Built with Muse Spark Open". Firms that sell AI model access and earn over US$20 million a year need a separate deal with Meta first. Its usage policy bans many uses, including military, weapons and critical-infrastructure work. Hugging Face asks for your legal name and date of birth before you download, and Meta says the model is not for under-18s.

## A meaningful step for US open AI, priced for labs, not living rooms

The good is real. A big US lab has shared a model this size, and running it on your own desk keeps your code private. Apple, Intel, AMD and NVIDIA chips were supported on day one.

So are the limits. The 'most capable US' claim rests on Meta's own tests, Chinese rivals score higher on coding, and the hardware will likely cost tens of thousands of dollars.

On balance, this new Meta open weight model is a meaningful step, but its promise of AI on your desk belongs to well-funded teams for now, and a fair verdict should wait for independent tests. For more on the open-model race, see our [AI news](/news/category/ai/).

Three things to watch: Apple's price for the 512GB Mac Studio, the first independent scores, and whether Apple and Meta go further together. CNBC reports that neither company would say whether more is planned.
