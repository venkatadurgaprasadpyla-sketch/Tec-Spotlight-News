# Research: Google's Willow chip "grows" cleaner magic states (magic state cultivation)

Checked 2026-10-15 by the researcher. Category: `science`.
Slug (from caller): `google-willow-magic-state-quantum`

## The paper (official source)

- **Title:** "Magic state cultivation on a superconducting quantum processor". *Science*, DOI 10.1126/science.aee7961. Page date (dc.Date) **2026-10-15**; listed as "Ahead of Print". [Science](https://doi.org/10.1126/science.aee7961)
- **Authors:** a very large Google Quantum AI team. First authors in order: E. Rosenfeld (lead), C. Gidney, G. Roberts, A. Morvan, N. Lacroix, D. Kafri, J. Marshall, M. Li, V. Sivak ... last authors include H. Neven, S. Boixo, C. Jones, J. Kelly, A. Bourassa, K. J. Satzinger. The arXiv version says "Emma Rosenfeld and 294 other authors" (about 295 in total). [Science metadata](https://doi.org/10.1126/science.aee7961), [arXiv](https://arxiv.org/abs/2512.13908)
- **Already shared as a preprint:** the same title and almost the same abstract were posted on arXiv on **15 Dec 2025** (2512.13908). So the result is not brand new; what is new today is the **peer-reviewed publication in Science**. The writer should say "now published in Science" rather than "just discovered". [arXiv](https://arxiv.org/abs/2512.13908)
- **Abstract, in short (our own words):** a universal quantum computer needs "non-Clifford" gates, which are expensive to protect from errors. Cultivation is a cheaper alternative to the usual "distillation" method. The team ran it on a superconducting chip, including a switch into a surface code, and built a new error-proof way to measure how good the state is. Result: **error cut by a factor of 40**, state fidelity **0.9999(1)** (Science abstract says "at least 0.9999(1)"), **keeping 8% of attempts**. [Science](https://doi.org/10.1126/science.aee7961), [Google Research pub page](https://research.google/pubs/magic-state-cultivation-on-a-superconducting-quantum-processor/)
- Google blog post: "Bringing the magic: Google breaks open a bottleneck in quantum computing", by Emma Rosenfeld (Research Scientist) and Craig Gidney (Quantum Software Engineer), Google Quantum AI, published 15 Oct 2026, 18:00 UTC. [Google blog](https://blog.google/innovation-and-ai/models-and-research/quantum-computing/magic-state-cultivation-quantum-computing/)

## Verified facts (each with source)

1. Magic state cultivation worked on Google's **Willow** processor and cut errors **about 40-fold** compared with states made without it. [Google blog](https://blog.google/innovation-and-ai/models-and-research/quantum-computing/magic-state-cultivation-quantum-computing/), [Science abstract](https://doi.org/10.1126/science.aee7961)
2. The magic states were **T-states** with a logical fidelity of **99.99%** (Google calls it a record). That is roughly **1 error in 10,000**. [Google blog]; "roughly one error in 10,000 attempts" also in [Scientific American](https://www.scientificamerican.com/article/googles-quantum-willow-chip-may-be-able-to-grow-magic-states/)
3. Without cultivation, about **4 in 1,000** attempts gave a faulty state. [Scientific American]
4. Only **8%** of attempts are kept; **92% are thrown away** by the quality check. [Science abstract]; Kenneth Brown via [Scientific American]; Isaac Kim via [New Scientist](https://www.newscientist.com/article/2593999-google-showcases-way-to-fix-quantum-computer-errors-more-efficiently/)
   - Rosenfeld says this share should rise as the method and hardware improve, and that the very careful benchmarking used here lowered it and may not be needed in real use. [New Scientist]
5. The experiment used **54 of Willow's 105** physical qubits. [Scientific American] (not checked against the paywalled paper text)
6. **The bottleneck:** some estimates say up to **95%** of a quantum computer's capacity could go into making magic states with the usual method (distillation), and each magic state can be **used only once**. [Google blog]; Rosenfeld quote in [Scientific American]
7. **History of the idea:** the bottleneck has been foreseen since **2004** (Google blog). In **2024** Google's Craig Gidney, Noah Shutty and Cody Jones proposed "magic state cultivation" (theory paper arXiv 2409.17595). [Google blog], [SciAm link to arXiv 2409.17595](https://arxiv.org/pdf/2409.17595)
8. In theory, cultivation could let quantum computers run important programs with about **one-tenth** the qubits previously expected (New Scientist, referring to Google's earlier theory work). [New Scientist]
9. **How it works (Google's description):** put a rough, noisy magic state into a small patch of qubits, run a series of coordinated checks, throw away flawed attempts, and grow the good state into a bigger, better-protected encoding. Hence "cultivation", like growing a plant. [Google blog], [Scientific American]
10. **The clever measurement trick:** instead of asking the qubit "are you 0 or 1?" (which destroys the state), the team asked "are you the right magic state, yes or no?" [Scientific American]
11. **Code switching ("grafting"):** the team moved a state from a distance-3 **colour code** into a distance-5 **surface code** (the type Google mainly uses), and it survived. [Google blog], [Interesting Engineering](https://interestingengineering.com/science/google-willow-quantum-chip-magic-state-errors)
12. **Lab story:** early data seemed to "defy the laws of physics". After months of work, Rosenfeld traced it to drift from electrical equipment and temperature changes that broke the team's usual measurement method. The fix: extra control plus a new benchmark that uses cultivation to measure itself. [Google blog]
13. **Not the first magic-state progress overall:** experiments on **ion-trap** quantum computers had already reached similar error rates (New Scientist links arXiv 2506.14688). Willow's superconducting qubits are faster, which Rosenfeld says could shorten total run time. [New Scientist]. So avoid "world first"; Google's own claim is "first demonstration of a practical solution" to the bottleneck, which is Google's framing.
14. **Google's own limit:** cultivation still has to be shown at a much larger scale; "plenty of technical challenges remain". [Google blog]

## Distance to real-world uses (key for "no hype")

All from [Scientific American](https://www.scientificamerican.com/article/googles-quantum-willow-chip-may-be-able-to-grow-magic-states/):
- Today: about **1 error in 10,000**.
- Simulating molecules (which Rosenfeld calls the more reachable goal): needs about **1 in a million to 1 in 100 million**, i.e. 100 to 10,000 times better.
- Breaking **RSA-2048** (used in website security, banking, e-ID cards): needs about **1 in 10 billion**, i.e. about a million times better.
- So this is **not** a threat to today's encryption. Zhenyu Cai (Imperial College London) also says Willow's errors must come down further before it can tackle truly useful problems. [New Scientist]

## Plain-English explainer: what is a magic state?

(For the writer; our own words, built from SciAm and the Google blog.)
- Normal computers build everything from a few simple logic steps (AND, OR, NOT). Quantum computers have their own basic steps, called **Clifford gates**. But a normal computer can copy anything made only from Clifford gates, so they alone give no quantum advantage.
- To do things normal computers cannot, you need one extra kind of step, usually the **T gate**. The cleanest way to run it with error protection is to feed in a specially prepared qubit, a **magic state**. It gets **used up** each time, and any flaw in it becomes a flaw in the calculation.
- Analogy ideas: a single-use "key ingredient" that must be very pure; or a one-time ticket that lets a program step past what normal computers can do. Old method (distillation) = boil down many dirty batches into one clean one (costly). New method (cultivation) = start one small seedling, check it repeatedly, pull it if it is sick, grow it if it is healthy.

## Quotes (verbatim, with speaker, role and source)

Google team:
- Emma Rosenfeld, research scientist at Google Quantum AI and lead author: "But there is one particular gate that unlocks the quantum computer's power." [Scientific American]
- Rosenfeld, on magic states: "It has to be made very, very precisely." [Scientific American]
- Rosenfeld: "You can have up to 95 percent of your quantum computer being spent just generating these high-fidelity magic states." [Scientific American]
- Rosenfeld, on the bottleneck: "It eats up a lot of qubits and a lot of time." [New Scientist]
- Rosenfeld: "This is the first demonstration that the concepts work. We're not done." [New Scientist] (best kicker candidate)
- Rosenfeld: "We're more galvanized than ever to get to these near-term scientific applications." [Scientific American]

Independent experts (not involved):
- Kenneth Brown, director of the Duke Quantum Center, Duke University: "The Google experiment shows that cultivation works in practice." He also notes the check discards 92% of attempts (paraphrase). [Scientific American]
- Isaac Kim, University of California, Davis: "This is an impressive demonstration of a promising recent idea pioneered by Google." and "It's an approach that can make fault-tolerant quantum computing substantially cheaper." He points out only 8% of runs gave usable magic states (paraphrase). [New Scientist]
- Dominik Hangleiter, ETH Zurich: says it demonstrates a building block for universal quantum computing and could be a big deal for building mid-sized machines with hundreds of logical qubits. New Scientist quotes him using the word "gamechanger", which our style bans; **paraphrase only**. [New Scientist]
- Zhenyu Cai, Imperial College London: a significant step, but Willow's errors need to come down further before truly useful problems (paraphrase). [New Scientist]

## What's unconfirmed / handle with care

- **54 of 105 qubits:** only from Scientific American; the full paper is paywalled and was not checked.
- **"Record" 99.99% fidelity:** Google's claim. New Scientist says ion-trap experiments reached similar error rates, so say "Google says" or avoid "record".
- **"First demonstration of a practical solution":** Google's framing; attribute it.
- **Fidelity wording:** Science abstract says "at least 0.9999(1)"; arXiv and Google Research page say "0.9999(1)". "About 99.99%" is safe.
- **"One-tenth the qubits":** a theory estimate from Google's earlier work, reported by New Scientist; not shown by this experiment.
- New Scientist's line that the technique "reduced Willow's errors 40 times" is loose; the 40x is for **magic-state** errors only, not the whole chip. Use the precise version.
- Scientific American's text has a typo ("quibit"); don't copy.
- No date or roadmap for a useful, error-corrected machine is given in any source. Do not invent one.
- **Rumour:** none found.

## The open question

Can cultivation keep working, and keep more than 8% of its attempts, when it is scaled up and run many times in parallel inside a much bigger machine, while errors fall another 100 to 10,000 times for chemistry uses? Google says this still needs to be shown.

## Reader angle (worldwide)

- **Your passwords and bank are not at risk from this.** Breaking RSA-2048 needs roughly a million times fewer errors than shown here. Still, governments and big firms are already moving to "post-quantum" encryption because the field moves step by step; readers can watch for passkeys and app updates that mention it.
- **Why ordinary people should care:** the first useful jobs are expected in chemistry and materials (e.g. new medicines, batteries, fertiliser), which Rosenfeld calls more reachable. Cheaper magic states mean smaller, cheaper machines could get there sooner.
- **For students and developers worldwide:** quantum error correction is a growing field; the work is open as a free arXiv preprint (2512.13908), so anyone can read it.
- Avoid big promises about timelines or "quantum supremacy".

## Fair good / bad points (for the judgment section)

Good:
- Moves a 20-year-old theory problem into a real hardware result, now peer-reviewed in Science.
- 40x fewer magic-state errors; about 99.99% fidelity.
- Shows the state can be moved into the surface code Google plans to use, so it fits Google's roadmap.
- Independent experts (Brown, Kim) agree it works in practice and could make error-protected quantum computing much cheaper.
- Honest lab story (a broken benchmark found and fixed) and a new self-checking measurement method.

Bad / limits:
- 92% of attempts thrown away; cost of that waste at scale is open.
- Small demo (one state, part of one chip), not a factory feeding a real program.
- Still 100 to 10,000x short of chemistry needs, about a million times short of code-breaking.
- Ion-trap machines reached similar quality earlier; Google's edge is speed, not a unique result.
- Results first appeared as a preprint in Dec 2025; today is the peer-reviewed version, not a new discovery.

## Related TechSpotlight stories / guide

- No existing quantum story in `src/content/news/` to link to. Only one guide exists (`sample-guide`, a layout sample), so **no relatedGuide** to set yet.
- Possible future guide: "Post-quantum security for normal people: passkeys and password managers that are getting ready" (would need the owner's testing).

## Keyword plan

**Semrush: no API units left** (error `no_api_units`, checked 2026-10-15; Semrush says more units can be added at https://www.semrush.com/mcp-access). So these are Google search suggestions via Firecrawl (`gl=us` and `gl=gb`, `hl=en`). No volume or difficulty numbers.

Starting phrases tried: "magic state" (US, UK), "google willow" (US, UK), "what is a magic state" (US), "quantum computing error" (US), "can quantum computers break" (US). Plus a Firecrawl web search on the topic.

| Phrase | Volume / country | Difficulty | Why |
|---|---|---|---|
| **magic state cultivation** (focus) | Google suggestion: 3rd for "magic state" in US, 2nd in UK; UK list even suggests the paper title | Google suggestion | Exactly what the story is about; specific and new, so a new site has a fair chance; rising with today's news. |
| google willow chip | Google suggestion (US + UK), 2nd for "google willow" | Google suggestion | The name most readers know; likely the biggest demand of the set; use in title/intro. |
| what is a magic state in quantum computing | Google suggestion (US), top for "what is a magic state" | Google suggestion | Our plain-English explainer section answers it directly. |
| quantum computing error correction breakthrough | Google suggestion (US) | Google suggestion | Matches the news angle; story can honestly call it a step. |
| can quantum computers break encryption | Google suggestion (US) | Google suggestion | The reader worry; we answer "not yet, and not close" with numbers. |
| magic state distillation | Google suggestion (US + UK), top for "magic state" | Google suggestion | The older method we compare against; one natural mention. |

Other suggestions seen (not chosen): "google willow quantum chip", "google willow multiverse", "google willow chip breakthrough", "magic states quantum computing", "magic state injection", "magic state factory", "quantum computing error rate", "can quantum computers break bitcoin", "can quantum computers break rsa". Note: "what is a magic state" also triggers Magic: The Gathering results; keep "quantum" in the phrase.

Questions people ask (Firecrawl search): what the actual significance of Willow is (Reddit r/AskEngineers), how the "growth" step of cultivation works (Quantum Computing Stack Exchange), what magic states are and why you need them.

- Suggested `focusKeyword`: `magic state cultivation`
- Suggested `keywords`: `google willow chip`, `what is a magic state in quantum computing`, `quantum computing error correction breakthrough`, `can quantum computers break encryption`, `magic state distillation`
- Suggested `seoTitle`: "Magic state cultivation: Google Willow cuts errors 40x" (54 characters)
- Suggested `description`: "Google's Willow chip made quantum 'magic states' 40 times cleaner. Here is what magic state cultivation is, why it matters, and what it does not change." (152 characters)
- Web address: `google-willow-magic-state-quantum` (caller's slug; a shorter option would be `google-willow-magic-state`)

## Cover photo

- **Photo:** "A quantum computer with gold plates and intricate silver wiring against a black background" by **Planet Volumes** on Unsplash.
- Page: https://unsplash.com/photos/quantum-computer-with-gold-plates-7dRmpT3vxV8
- Photographer profile: https://unsplash.com/@planetvolumes
- Licence check: page says **"Free to use under the Unsplash License"** (checked 2026-10-15). Not Unsplash+ (note: Planet Volumes also has Unsplash+ images, so use this exact page). Published 19 April 2023.
- It is a **3D render** (featured in "3D Renders", tagged "render"), not a photo of Google's Willow or its fridge. No brand logos. Do not caption it as Willow.
- Suggested alt text: "A gold-coloured quantum computer with stacked plates and silver wiring on a black background"
- Suggested `imageCredit`: "Photo: Planet Volumes / Unsplash"
- Cropped 1200 x 630 download (Unsplash's own image server): `https://images.unsplash.com/photo-1681908571122-97f349e1ace0?fm=jpg&q=70&w=1200&h=630&fit=crop` (source image is at least 3000 wide). **Not saved yet** (this session has no shell). Save to `public/images/posts/google-willow-magic-state-quantum/cover.jpg` and confirm it is under 250 KB.
- Google press images were **not** used: the blog's images are not in a press kit with stated reuse rights.

## Sources (official first)

1. Science paper (15 Oct 2026): https://doi.org/10.1126/science.aee7961
2. Google blog, Rosenfeld and Gidney (15 Oct 2026): https://blog.google/innovation-and-ai/models-and-research/quantum-computing/magic-state-cultivation-quantum-computing/
3. Google Research publication page: https://research.google/pubs/magic-state-cultivation-on-a-superconducting-quantum-processor/
4. arXiv preprint (15 Dec 2025, free to read): https://arxiv.org/abs/2512.13908
5. Scientific American, Jacek Krywko (15 Oct 2026): https://www.scientificamerican.com/article/googles-quantum-willow-chip-may-be-able-to-grow-magic-states/
6. New Scientist, Karmela Padavic-Callaghan (15 Oct 2026): https://www.newscientist.com/article/2593999-google-showcases-way-to-fix-quantum-computer-errors-more-efficiently/
7. Interesting Engineering, Neetika Walter (15 Oct 2026): https://interestingengineering.com/science/google-willow-quantum-chip-magic-state-errors
8. Background, 2024 theory paper: https://arxiv.org/pdf/2409.17595
