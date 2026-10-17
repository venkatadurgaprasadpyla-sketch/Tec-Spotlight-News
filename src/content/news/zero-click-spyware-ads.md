---
title: "Researchers say spyware rode inside online ads, no click needed"
seoTitle: "Zero-click attack hid in online ads, researchers say"
description: "Researchers say a zero-click attack hid inside online ads and targeted at least 45 Al Jazeera devices. What we know, and simple steps to lower your risk."
focusKeyword: "zero-click attack"
keywords:
  - "zero-click spyware"
  - "zero click attack example"
  - "zero click attack prevention"
  - "spyware in ads"
  - "Citizen Lab"
  - "reset advertising ID"
date: 2026-10-15
category: apps-software
draft: false
image: "/images/posts/zero-click-spyware-ads/cover.jpg"
imageAlt: "A hand holding a small brass padlock, a reminder that a zero-click attack needs no tap to get in"
imageCredit:
  name: "Nathan Thomas"
  source: "Pexels"
  url: "https://www.pexels.com/photo/close-up-of-hand-holding-a-secure-padlock-36740854/"
summary:
  - "Citizen Lab says an Israel-based ad firm, Discover-Tech, bought online ads that could quietly deliver spyware to chosen people, with no click needed."
  - "At least 45 devices at Al Jazeera were targeted in 2024 and 2025, researchers say; the firm did not respond to requests for comment."
  - "Google, IAB Europe and several ad platforms have cut the firm off. Ad blockers and resetting your advertising ID can lower, not remove, the risk."
sources:
  - name: "Citizen Lab: Exposing AdFection, how Discover-Tech turned targeted ads into a pipeline for zero-click mercenary spyware"
    url: "https://citizenlab.ca/research/how-discover-tech-turned-targeted-ads-into-a-pipeline-for-spyware/"
  - name: "Citizen Lab: Exposing AdFection executive summary"
    url: "https://citizenlab.ca/research/exposing-adfection-executive-summary/"
  - name: "Confiant: ADINT, weaponized ad tech for zero-click spyware and mass identity vacuuming"
    url: "https://blog.confiant.com/p/adint-weaponized-ad-tech-for-zero-click-spyware-and-mass-identity-vacuuming"
  - name: "WIRED: 'Nightmare Scenario': zero-click spyware is infecting phones via targeted ads"
    url: "https://www.wired.com/story/nightmare-scenario-zero-click-spyware-is-infecting-phones-via-targeted-ads/"
  - name: "The Guardian: Online ads weaponised to deliver 'zero-click' spyware, researchers say"
    url: "https://www.theguardian.com/technology/2026/oct/15/israeli-firm-digital-ads-enabling-installation-of-zero-click-spyware-researchers-say"
  - name: "POLITICO Europe: Millions of phones exposed to Israeli spyware operation through online ads, researchers say"
    url: "https://www.politico.eu/article/israel-firm-advertising-spyware-mobile-phone-hacking/"
  - name: "Engadget: CitizenLab details new spyware triggered by online advertising"
    url: "https://www.engadget.com/2287417/citizenlab-details-new-spyware-triggered-by-online-advertising/"
  - name: "Consumer Reports: Security Planner"
    url: "https://securityplanner.consumerreports.org/"
---

You open a weather app, check the forecast and close it. You never tap anything. Yet new research says an ad loading quietly in the background can be enough to deliver spyware, if someone has chosen you as a target.

That is the claim in a report published on 15 October by Citizen Lab, a University of Toronto research group, alongside the ad-security firm Confiant. A zero-click attack is one that needs no tap or click from the victim. Citizen Lab calls this the first public technical confirmation of zero-click spyware delivered through targeted ads, and it names the technique "AdFection".

## How an online ad auction became a zero-click attack

Most online ads are sold in split-second auctions. Citizen Lab says an Israel-based company, Discover-Tech, presented itself as a normal ad firm and won those auctions. Its ads then quietly contacted Discover-Tech's servers. If the person was a chosen target, code came back. If not, nothing visible happened, though data such as cookies and the device's internet address was still collected.

The confirmed zero-click attack example is the news network Al Jazeera. Citizen Lab links attacks on it in 2024 and 2025 "with high confidence" to Candiru. This Israeli spyware maker was put on a US trade blacklist in 2021. At least 45 devices were targeted, and Citizen Lab says some were infected. The sample it recovered was Windows spyware, so phones and computers were at risk, not phones alone.

In four months of 2026, researchers say, these ads appeared in about 75,000 [phone apps](/news/category/apps-software/) and 120,000 websites, with bids reaching devices in 161 countries. Those apps and sites were not hacked; they showed ads sold through the normal system. Citizen Lab also says millions of devices were sent to Candiru-linked servers, likely for tracking. That does not mean millions were infected.

## Ads on NATO and EU networks, but no proof anyone there was hit

The ads also appeared on the networks of NATO, the United Nations, EU institutions and governments in 24 countries. Citizen Lab is careful: an ad appearing "does not in and of itself confirm targeting or infection." Who chose the Al Jazeera targets, and how many people were infected worldwide, is not confirmed.

Discover-Tech did not respond to requests for comment from the researchers or from several news outlets. Candiru (reportedly now called Integrity Labs) also did not respond to Citizen Lab before publication, nor did Bindecy and Intelos, two surveillance firms Citizen Lab links to Discover-Tech.

The ad industry has moved. Google told WIRED it blocked Discover-Tech "for systematically violating our policies", after a joint investigation with the researchers. IAB Europe, which keeps the vendor list behind many website consent pop-ups, told WIRED it had suspended the firm; Citizen Lab says it was removed on 8 October. Beeswax removed it, and Vungle (part of Liftoff) paused its access during a review. Eskimi blocked it permanently, saying the advertiser's tags "were built to evade automated scanning."

## Simple habits that make spyware in ads harder to reach you

A newsroom, not the public, was the confirmed target. But the lesson applies to everyone: an ad can run code and carry data about you. Citizen Lab suggests these steps for zero-click attack prevention:

- Use a trusted ad-blocking browser extension, or a privacy-focused browser.
- Reset your advertising ID in your iPhone or Android settings, and turn off ad tracking.
- Consider blocking ads for your whole home network, or a trusted VPN that blocks them.
- Follow the free Consumer Reports [Security Planner](https://securityplanner.consumerreports.org/).

These steps reduce risk; they are not a guarantee. Citizen Lab strongly recommends expert help for anyone at higher risk because of who they are or what they do, such as journalists, activists, lawyers and officials.

## Quick bans help, but ad companies need real checks on buyers

Researchers worked with a newsroom to trace the attacks, Google joined the investigation, and several companies acted before the report came out. That is how the system should respond.

The harder truth is that Discover-Tech carried "certified" and "approved" labels from major industry players for almost six years. In our reading, that points to a gap in how ad companies check their buyers, not one bad actor. Bill Marczak, a senior researcher at Citizen Lab, told WIRED: "Until this architecture changes, or ad companies get serious about customer vetting, we're going to keep seeing this kind of abuse."

On balance, the quick response is encouraging, but removing one firm is a patch; the lasting fix is stronger checks on who may buy ads.

Citizen Lab is asking regulators to investigate and has promised a second report on how phone numbers were linked to ad IDs. Watch whether regulators act, and whether ad companies tighten their checks before the next firm finds the same door.
