---
title: "PHP2Shell: PHP rushes out fixes for two critical server flaws as Node.js patches 10 bugs"
seoTitle: "PHP2Shell: PHP and Node.js Patch Serious Server Flaws"
description: "PHP2Shell: PHP fixed two critical flaws that could let attackers take over web servers, and Node.js patched 10 bugs. Who is affected and what to do now."
focusKeyword: "php2shell"
keywords:
  - "php vulnerability"
  - "php security update"
  - "php2shell wordpress"
  - "node.js security update"
  - "CVE-2026-109618"
date: 2026-10-22
category: apps-software
draft: false
image: "/images/posts/php2shell-nodejs-security-patches/cover.jpg"
imageAlt: "TechSpotlight cover card with the PHP & Node.js logos beside the headline: PHP2Shell: PHP rushes out fixes for two critical server flaws as Node.js patches 10 bugs"
imageCredit:
  name: "TechSpotlight News"
  source: "Cover card"
  url: "https://tec-spotlight-news.techspotlightid-official.workers.dev/"
summary:
  - "PHP released emergency fixes on 21 October for two critical flaws nicknamed PHP2Shell, which could let an attacker run code on a web server without logging in."
  - "Details leaked early, so PHP shipped a day ahead of plan. Amazon, Cloudflare and watchTowr report attack attempts; no confirmed break-ins are public."
  - "The same day, Node.js fixed 10 flaws, including a Brotli decoder bug (CVE-2026-111497). Fixed versions are 26.12.1, 24.22.1 and 22.23.4."
# relatedGuide: none exists yet. Suggested future guide: "How to keep a small website safe (hosting, backups, updates)". FLAG for Pyla.
sources:
  - name: "PHP: news archive, 21 October 2026 security releases"
    url: "https://www.php.net/archive/2026.php#2026-10-21-5"
  - name: "CERT-EU: Security advisory 2026-018"
    url: "https://cert.europa.eu/publications/security-advisories/2026-018/"
  - name: "CISA: Critical vulnerabilities in PHP require immediate patching"
    url: "https://www.cisa.gov/news-events/alerts/2026/10/21/critical-vulnerabilities-php-require-immediate-patching"
  - name: "Node.js: October 2026 security releases"
    url: "https://nodejs.org/en/blog/vulnerability/october-2026-security-releases"
  - name: "WordPress.com: PHP2Shell vulnerabilities"
    url: "https://wordpress.com/blog/2026/10/21/php2shell-vulnerabilities/"
  - name: "Hostinger: Protecting customers from PHP2Shell"
    url: "https://www.hostinger.com/blog/protecting-php2shell/"
  - name: "Help Net Security: PHP2Shell vulnerabilities patched"
    url: "https://www.helpnetsecurity.com/2026/10/21/php2shell-php-vulnerabilities-patched-cve-2026-109618-cve-2026-109619/"
  - name: "BleepingComputer: PHP ships emergency patches for critical PHP2Shell flaws"
    url: "https://www.bleepingcomputer.com/news/security/php-ships-emergency-patches-for-critical-php2shell-flaws/"
  - name: "Tenable: PHP2Shell frequently asked questions"
    url: "https://www.tenable.com/blog/php2shell-cve-2026-109618-cve-2026-109619-frequently-asked-questions-about-critical-php-remote"
  - name: "The Hacker News: Someone tried to exploit PHP2Shell"
    url: "https://thehackernews.com/2026/10/someone-tried-to-exploit-php2shell-4.html"
  - name: "SecurityWeek: PHP2Shell patches land as first exploitation attempts hit sensors"
    url: "https://www.securityweek.com/php2shell-patches-land-as-first-exploitation-attempts-hit-sensors/"
  - name: "Huntress: PHP2Shell leaked critical PHP vulnerabilities"
    url: "https://www.huntress.com/blog/php2shell-leaked-critical-php-vulnerabilities"
  - name: "The Hacker News: Node.js Brotli decoder bug could allow code execution"
    url: "https://thehackernews.com/2026/10/nodejs-brotli-decoder-bug-could-allow.html"
---

If you run a small shop, a blog or a booking page, there is a good chance it runs on PHP. On 21 October, PHP released emergency fixes for two critical flaws now called PHP2Shell. In the worst case, they could let a stranger run their own code on your web server without logging in.

The timing made it tense. Details leaked online before the planned disclosure, so PHP shipped the fix a day early, on 21 October. Several security firms now report attack attempts, though no successful break-in has been confirmed in public. On the same day, Node.js, another engine behind many websites and apps, shipped its own batch of fixes.

## What PHP2Shell is, and which versions fix it

PHP is the language that runs much of the web, including WordPress, Drupal, Joomla and Laravel sites. The two flaws are CVE-2026-109618, a memory problem when the server runs short of memory, and CVE-2026-109619, where old data carries over from one visitor's request to the next. Both are rated 9.2 out of 10 for severity.

The fixed versions are PHP 8.5.12, 8.4.27, 8.3.36 and 8.2.35. The US cyber agency CISA "strongly urges" organisations to patch now. CERT-EU, the cyber team for EU institutions, says that if you cannot patch, you should take internet-facing apps offline until you can.

There is a catch for older sites. PHP 8.1 and earlier no longer get official releases, though older versions are likely affected too. Linux and long-term-support vendors such as Ubuntu, AlmaLinux and TuxCare are shipping their own fixed packages, often under different version numbers.

## Attack attempts, but no confirmed break-ins yet

Amazon says its decoy servers saw a PHP2Shell attempt on 17 October, four days before the fix, and more attempts from several groups on 21 October. It is not clear whether any would have worked. Cloudflare says it is "seeing early attacks emerging" and has added free firewall rules for all customers. watchTowr saw attempts reach its sensors, but none succeeded.

Not everyone sees the same picture. Huntress found no exploitation on its partners' systems. CISA had not observed exploitation either, and neither flaw was on its list of known-exploited bugs as of Thursday morning, 22 October.

## Node.js fixes 10 flaws, including a Brotli bug

Node.js released fixes for versions 26, 24 and 22, numbered 26.12.1, 24.22.1 and 22.23.4. They close 10 flaws: four rated High, three Medium and three Low. The most serious, CVE-2026-111497, sits in the built-in Brotli decoder, which unpacks compressed data. It could allow remote code execution. Two other High-rated bugs let attackers slip past the check that confirms a secure connection reaches the right site. No attacks on these Node.js bugs have been reported. Older, unsupported Node versions do not get these fixes.

## If you own a small website, here is what to do

Your visitors have nothing to do. If you run the site, work through these steps:

- **Ask your host today** whether your PHP is patched for PHP2Shell. Many hosts patch quietly. Automattic says every site it hosts, including WordPress.com, is protected. Hostinger says its non-VPS customers need no action, while VPS customers must update.
- **Updating WordPress will not fix this.** The WordPress Security Team says no WordPress update is needed. For PHP2Shell, WordPress sites are made safe by updating PHP underneath.
- **Check your PHP version** in your hosting panel. If it says 8.1 or older, move to a patched 8.2 or newer, after a backup.
- **Running your own server?** Install your vendor's PHP security update, then restart the web server and PHP itself (PHP-FPM).
- **Using Node.js?** Run `node -v` and update to a fixed version, then rebuild containers.

## Our reading: a serious PHP vulnerability, handled in the open

On balance, this looks like a serious PHP vulnerability that is being handled well. Defenders shared what they saw quickly, from the attempts Amazon logged to the free rules from Cloudflare. That openness is the good news. The harder truth is the long tail of old PHP versions on forgotten servers. In our view, those sites carry the real risk, because no one is watching them. Like a [zero-click attack](/news/zero-click-spyware-ads/), this kind of flaw needs no mistake from the victim.

The calm path is simple: confirm with your host, update, and keep a backup. Watch whether CISA adds PHP2Shell to its known-exploited list in the coming days, because that would mean the attempts have turned into real break-ins.
