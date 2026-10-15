---
title: "Google's Willow chip grows 'magic states' 40 times cleaner, a step toward useful quantum computers"
seoTitle: "Magic state cultivation: Google Willow cuts errors 40x"
description: "Google's Willow chip made quantum 'magic states' 40 times cleaner. Here is what magic state cultivation is, why it matters, and what it does not change."
focusKeyword: "magic state cultivation"
keywords:
  - "google willow chip"
  - "what is a magic state in quantum computing"
  - "quantum computing error correction breakthrough"
  - "can quantum computers break encryption"
  - "magic state distillation"
date: 2026-10-15
category: science
draft: true
image: "/images/posts/google-willow-magic-state-quantum/cover.jpg"
imageAlt: "Gold quantum computer with silver wiring, illustrating magic state cultivation (a render, not Google's Willow chip)"
imageCredit:
  name: "Planet Volumes"
  source: "Unsplash"
  url: "https://unsplash.com/photos/quantum-computer-with-gold-plates-7dRmpT3vxV8"
summary:
  - "Google's Willow chip used magic state cultivation to make key quantum ingredients about 40 times less error-prone; the work is now published in Science."
  - "The states reached about 99.99% fidelity, but the quality check throws away 92% of attempts, and the demo is small."
  - "Your passwords and bank are not at risk from this: breaking today's encryption needs roughly a million times fewer errors."
sources:
  - name: "Science: Magic state cultivation on a superconducting quantum processor (Rosenfeld et al., 2026)"
    url: "https://doi.org/10.1126/science.aee7961"
  - name: "Google blog: Bringing the magic, by Emma Rosenfeld and Craig Gidney (15 October 2026)"
    url: "https://blog.google/innovation-and-ai/models-and-research/quantum-computing/magic-state-cultivation-quantum-computing/"
  - name: "arXiv preprint 2512.13908 (15 December 2025, free to read)"
    url: "https://arxiv.org/abs/2512.13908"
  - name: "Scientific American: Google's quantum Willow chip may be able to grow magic states (15 October 2026)"
    url: "https://www.scientificamerican.com/article/googles-quantum-willow-chip-may-be-able-to-grow-magic-states/"
  - name: "New Scientist: Google showcases way to fix quantum computer errors more efficiently (15 October 2026)"
    url: "https://www.newscientist.com/article/2593999-google-showcases-way-to-fix-quantum-computer-errors-more-efficiently/"
---

Picture a kitchen where one ingredient is needed for every dish, can be used only once, and spoils the meal if it is even slightly impure. That is roughly the problem quantum computers have with "magic states". Google says its Willow chip has now shown a cheaper way to make them, using a method called magic state cultivation.

The work, from a team of about 295 people, with Google Quantum AI research scientist Emma Rosenfeld as lead author, is now published in Science. A preprint appeared in December 2025; what is new is independent peer review. It matters because, by some estimates Google cites, up to 95% of a future quantum computer could be busy just making these states with today's usual method.

## What is a magic state in quantum computing?

Ordinary computers rely on a handful of simple logic steps. Quantum computers have their own basic steps, but a normal computer can copy anything made only from those. To do what normal computers cannot, a quantum computer needs one extra step, usually called the T gate.

The safest way to run that step is to feed in a specially prepared qubit, a magic state. It is spent once, so even a tiny defect carries into the result. "It has to be made very, very precisely," Rosenfeld told Scientific American.

## How Willow grew a cleaner state

The usual method, magic state distillation, boils many noisy states down into one clean one. It works, but it is slow and needs many extra qubits. Magic state cultivation, proposed by Google's Craig Gidney, Noah Shutty and Cody Jones in 2024, is more like growing a seedling. Start a rough state on a small patch of qubits, check it again and again, pull it if it looks sick, and grow it into a bigger, better-protected form if it looks healthy.

On Willow, Google reports, this cut magic-state errors about 40-fold. Without cultivation, about 4 in 1,000 attempts were faulty; with it, the states reached about 99.99% fidelity, roughly one error in 10,000. Scientific American reports the run used 54 of Willow's 105 qubits. The team also moved a state from one error-protection scheme into the "surface code" Google plans to build on, and it survived.

Google calls the fidelity a record and the result the first practical answer to this bottleneck. New Scientist notes that ion-trap quantum computers had already reached similar error rates; Willow's qubits are faster, which Rosenfeld says could shorten run times.

## Ninety-two percent of attempts go in the bin

The price of all that checking is waste. Only 8% of attempts pass. Kenneth Brown, director of the Duke Quantum Center, told Scientific American that "cultivation works in practice", while pointing to that discard rate. Isaac Kim of the University of California, Davis, told New Scientist the approach "can make fault-tolerant quantum computing substantially cheaper".

Rosenfeld told New Scientist the share kept should rise as hardware improves. Google's earlier theory work suggests cultivation could let important programs run on about one-tenth the qubits once expected, but that is an estimate, not something this experiment showed. Google itself says it still has to be proven at a much larger scale.

## Can quantum computers break encryption yet? Not close

If you worry about your bank or passwords, here is the scale: breaking RSA-2048, the kind of encryption behind secure websites and banking, would need about one error in 10 billion, around a million times better than this. Simulating molecules for new medicines or batteries, the goal Rosenfeld calls more reachable, needs 100 to 10,000 times better. Zhenyu Cai of Imperial College London told New Scientist that Willow's errors must fall further before it tackles truly useful problems.

For students and developers, the preprint is free on arXiv. For everyone else, nothing changes today; keeping your phone and apps updated remains the best everyday protection.

## A real step on a long road, not the finish line

Is this a quantum computing error correction breakthrough? On balance, it is a meaningful step rather than a leap. The good is clear. A problem foreseen since 2004 moved from theory to peer-reviewed hardware. Outside experts back the result, and the state fits the system Google plans to use. Dominik Hangleiter of ETH Zurich told New Scientist it could matter a lot for mid-sized machines.

The limits are real too. This is one state on part of one chip, most attempts are thrown away, and others got similar quality first. The likelier reading is that Google has removed one roadblock, not the road. We will keep following it in our [science news](/news/category/science/).

"This is the first demonstration that the concepts work. We're not done," Rosenfeld told New Scientist. The thing to watch is whether the 8% keep rate climbs once cultivation runs at scale.
