---
title: "Moonshot's Kimi K3.1 Pro gives up some hacking skill before its open release"
seoTitle: "Kimi K3.1 Pro: Moonshot's Open Model Trims Hacking Skills"
description: "Moonshot AI's Kimi K3.1 Pro is in Kimi's apps and API now, with open weights promised by 4 November and hacking data removed from training."
focusKeyword: "Kimi K3.1 Pro"
keywords:
  - "Kimi K3.1 release date"
  - "Kimi open weights release date"
  - "Kimi API pricing"
  - "Moonshot Kimi"
  - "Kimi K3.1 Pro Highspeed"
date: 2026-10-23
category: ai
draft: false
image: "/images/posts/kimi-k3-1-pro/cover.jpg"
imageAlt: "TechSpotlight poster in Kimi colours with the name Kimi and the words 'Less hacking skill, on purpose'"
imageCredit:
  name: "TechSpotlight News"
  source: "Cover card"
  url: "https://tec-spotlight-news.techspotlightid-official.workers.dev/"
summary:
  - "Moonshot AI released Kimi K3.1 Pro on 23 October in Kimi's apps and API, with a 1-million-token context and full weights promised by 4 November."
  - "Moonshot says it removed hacking-related data from training, cutting its own exploit-test score from 90.5% to 81% before the open release."
  - "Most scores are Moonshot's own; Artificial Analysis independently ranks it fourth on its index. The open-weights licence is not announced yet."
# relatedGuide: using-chinese-ai-models-from-abroad (guide not written yet; suggested earlier by the researcher: "Using Chinese AI models (DeepSeek, Qwen, Kimi) safely from abroad: what is allowed, pricing and privacy". FLAG for Pyla: needs their own testing.)
sources:
  - name: "Kimi: Kimi K3.1 Pro tech blog (official)"
    url: "https://www.kimi.ai/blog/kimi-k3-1-pro"
  - name: "Kimi API Platform: model pricing (official)"
    url: "https://platform.kimi.ai/docs/pricing/chat"
  - name: "Kimi on X: Introducing Kimi K3.1 Pro (official)"
    url: "https://x.com/Kimi_Moonshot/status/2113680701770068067"
  - name: "TNW: Moonshot releases Kimi K3.1 Pro and says it cut its hacking skills (23 October)"
    url: "https://thenextweb.com/news/moonshot-kimi-k3-1-pro-open-weight-cyber"
  - name: "Artificial Analysis: Kimi K3.1 Pro launch benchmarks"
    url: "https://artificialanalysis.ai/articles/kimi-k3-1-pro-launch-benchmarks"
  - name: "Simon Willison: Introducing Kimi K3.1 Pro (23 October)"
    url: "https://simonwillison.net/2026/Oct/23/kimi-k31-pro/"
  - name: "Unite.AI: Moonshot AI releases Kimi K3.1 Pro, first model in new K3.1 series"
    url: "https://www.unite.ai/moonshot-ai-releases-kimi-k3-1-pro-first-model-in-new-k3-1-series/"
---

Most AI labs race to show how much their new model can do. Moonshot AI did something less common on Friday. It released Kimi K3.1 Pro and, in the same post, showed how much hacking skill it had taken out on purpose.

You can use it today in Kimi's apps and API. The full model files, called weights, are due by 4 November, Moonshot says. Once they are out, anyone can download the model and run it on their own machines. That is why the safety choice matters: a released model cannot be taken back.

## What Kimi K3.1 Pro brings, by Moonshot's count

Moonshot, a Chinese AI company, calls K3.1 Pro the first model in a new K3.1 series. It is Kimi K3 with far more computing power spent on the last stage of training. Its official post on X puts the size at 2.8 trillion parameters, with 104 billion working at any one time. It can read about 1 million tokens (roughly several long novels) in one go.

A second model, Kimi K3.1 Pro Highspeed, has the same abilities but answers two to three times faster, according to Moonshot. Both are in the Kimi website and phone apps (iOS, Android and HarmonyOS), the Kimi Work desktop app, Kimi Code and the API.

On Kimi API pricing, K3.1 Pro costs US$2 per million input tokens and US$10 per million output tokens (checked on 23 October 2026). The Highspeed version costs twice that. Artificial Analysis, an independent testing firm, says those rates are 33% lower than Kimi K3's.

Moonshot's headline number comes from Terminal-Bench 4.0, which checks how well AI agents handle coding jobs in a command window. By the company's own count, K3.1 Pro scored 65.7%, against 58.2% for OpenAI's GPT-6 Astra. Artificial Analysis ran its own check and measured 67%, up from 13% for K3. It also ranks the model fourth on its overall intelligence index.

The company also reports fewer made-up facts. On an in-house test built to trip models up, 8.3% of K3.1 Pro's claims were false, compared with 23.4% for K3. That test is meant to be hard, so the figure is not an everyday error rate. Artificial Analysis's separate test also found fewer errors, with its hallucination rate falling from 53% to 44%.

## Moonshot cut the hacking data, and showed the cost

The most unusual part of the release is about cyber skills. Moonshot says hacking-related material had slipped into its broad training data, and hacking tasks sat among the practice exercises used to sharpen the model. For the open release, it filtered both out.

To show the effect, it shared results from xdev-bench-hard, an in-house test in which a model tries to exploit real, known security flaws. An internal version trained without the filters passed 90.5% of the problems. The model Moonshot released passed 81.0%. For comparison, Kimi K3 managed 33.3%, and DeepSeek's open model, [DeepSeek V4.1 Flash](/news/deepseek-v4-1-flash-open-weights/), reached 85.7% by Moonshot's count.

So the cut was real, but the model is still far stronger at this than its predecessor. Moonshot says its hacking skill trails the best closed models that have been public for at least three months. It also says it plans to raise the cyber skill of its open models step by step, arguing that defenders need these tools too.

## If you build with AI, what to check before 4 November

For developers, the Kimi open weights release date is the one to mark: by 4 November 2026, Moonshot says. The licence has not been announced yet, so check it before you plan to use the model in a product.

If you only use the Kimi app, the new model is there now. As with any AI tool, check facts it gives you on money, health or law.

Security teams should watch closely. A strong open model can help them audit old code that rarely gets a review. The same model, in the wrong hands, can help attackers.

## A rare open look at a hard trade-off

There is a lot to welcome here. Moonshot measured a risk, acted on it, and published the numbers, including the score it gave up. Most labs share far less. Lower prices and an open release also give smaller teams more choice, as Meta's recent [Muse Spark Open](/news/meta-muse-spark-open-mac-studio/) did in its own way.

The concerns are real too. Almost every score is Moonshot's own, and its exploit test is in-house. An 81% score on that test is still high for a model anyone can download. On balance, this looks like a meaningful step in how open models are released, not a final answer.

The next date to watch is 4 November. When the weights arrive, outside researchers can test Moonshot's claims for themselves, and that is where trust is earned.
