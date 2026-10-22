# Research: PHP2Shell + Node.js security releases (21 Oct 2026)

Researcher notes, 22 Oct 2026. Tools: WebSearch (extended) only. Firecrawl out of credits, Semrush has no API units, so pages were not opened directly; facts below come from search-result summaries. Each key fact is matched to one official source plus one independent outlet.

- Category: apps-software (security)
- Suggested slug: `php2shell-nodejs-security-patches`
- Cover: branded title card (no photo needed)

## Story in 3 lines

1. On 21 Oct 2026 PHP put out emergency updates for two critical flaws, nicknamed "PHP2Shell" (CVE-2026-109618, CVE-2026-109619), both CVSS 9.2. They can let an attacker run code on a web server without logging in.
2. The details leaked before the planned release, so PHP brought the fix forward a day. Amazon, Cloudflare and watchTowr report attack attempts; nobody has publicly confirmed a successful break-in yet.
3. The same day, Node.js shipped fixes for 10 flaws (4 rated High), including a Brotli decoder bug, CVE-2026-111497, that could allow remote code execution. Fixed in 26.12.1, 24.22.1 and 22.23.4.

## Confirmed facts (two sources each, official first)

### PHP2Shell

| Fact | Official source | Independent source |
|---|---|---|
| Two flaws: CVE-2026-109618 (memory corruption during out-of-memory handling, GHSA-w8hw-w9fx-j79w) and CVE-2026-109619 (stale global state carried between requests, GHSA-6wmf-4rv5-p3rp) | CERT-EU advisory 2026-018 https://cert.europa.eu/publications/security-advisories/2026-018/ | Help Net Security https://www.helpnetsecurity.com/2026/10/21/php2shell-php-vulnerabilities-patched-cve-2026-109618-cve-2026-109619/ |
| Both rated CVSS 9.2 (v4.0); unauthenticated remote code execution | CERT-EU (above) | Qualys https://blog.qualys.com/vulnerabilities-threat-research/2026/10/20/php-announces-critical-security-release-for-two-vulnerabilities ; Tenable https://www.tenable.com/blog/php2shell-cve-2026-109618-cve-2026-109619-frequently-asked-questions-about-critical-php-remote |
| Fixed in PHP 8.5.12, 8.4.27, 8.3.36 and 8.2.35, released 21 Oct 2026 | CERT-EU (13:30 UTC); php.net advisory https://www.php.net/archive/2026.php#2026-10-21-5 (via AlmaLinux link); CISA alert https://www.cisa.gov/news-events/alerts/2026/10/21/critical-vulnerabilities-php-require-immediate-patching | BleepingComputer https://www.bleepingcomputer.com/news/security/php-ships-emergency-patches-for-critical-php2shell-flaws/ ; Help Net Security |
| CISA "strongly urges" organisations to patch immediately | CISA alert (above) | Search summaries of Greenbone / Aikido (https://www.aikido.dev/blog/critical-vulnerabilities-in-php-php2shell) |
| PHP 8.1 and older are no longer supported and get no official release; distros/LTS vendors (e.g. cPanel, TuxCare, Ubuntu, AlmaLinux) ship their own backported packages, often under different version numbers | CISA / php.net support policy; AlmaLinux https://almalinux.org/blog/2026-10-21-php2shell-cve-2026-109618-cve-2026-109619/ ; Ubuntu https://ubuntu.com/blog/php2shell-vulnerability-fixes-available | TuxCare https://tuxcare.com/blog/php2shell-cve/ ; Codeable https://www.codeable.io/blog/php-vulnerability-cve-2026-109618/ |
| Details leaked before the embargo; PHP moved the release forward by one day (planned 22 Oct) | CERT-EU notes PoCs began circulating | Check Point https://blog.checkpoint.com/security/php2shell-what-we-know-about-the-leaked-critical-php-vulnerabilities-cve-2026-109618-cve-2026-109619/ ; The Hacker News https://thehackernews.com/2026/10/someone-tried-to-exploit-php2shell-4.html |
| CERT-EU: patch now; if you can't, isolate internet-facing apps until fixed | CERT-EU | Brandefense https://brandefense.io/blog/php2shell-php-rce-cve-2026-109618-109619/ |
| WordPress Security Team (John Blackbourn): no WordPress update needed or planned; flaw is in PHP, affects any PHP server; check with your host and update PHP. Self-managed servers on PHP older than 8.2 should consider going offline while they upgrade | WordPress.org post (via search summaries); WordPress.com blog https://wordpress.com/blog/2026/10/21/php2shell-vulnerabilities/ | The Repository https://www.therepository.email/php-patches-critical-php2shell-vulnerabilities-as-hosts-across-the-wordpress-ecosystem-race-to-protect-customers ; Cybernews https://cybernews.com/security/php2shell-wordpress-amazon-cloudflare-ai-cyberattacks/ |
| Automattic says all sites it hosts are protected (WordPress.com, VIP, WP Cloud, Pressable, Tumblr) | WordPress.com blog (above) | Cybernews (above) |
| Hostinger: non-VPS customers need no action (firewall rules, upload-progress feature off, patched PHP rolled out); VPS customers must update | Hostinger blog https://www.hostinger.com/blog/protecting-php2shell/ | Search summary of hosting round-ups (The Repository) |

### Exploitation status (attribute carefully; use "attack attempts")

- **Amazon** (CISO CJ Moses): attempt on its MadPot honeypots on 17 Oct, four days before disclosure; more attempts by multiple actors on 21 Oct; unclear whether any would have succeeded. Sources: The Hacker News (above); Amazon post mirrored at https://noise.getoto.net/2026/10/22/amazon-threat-intelligence-identifies-php2shell-exploitation-prior-to-public-disclosure-in-madpot/
- **Cloudflare** CTO: "seeing early attacks emerging"; free WAF rules for all customers; no counts, no confirmed compromises. Sources: Tenable; Cybernews.
- **watchTowr**: first in-the-wild attempts hit its sensors; no successful attempts observed. Sources: SecurityWeek https://www.securityweek.com/php2shell-patches-land-as-first-exploitation-attempts-hit-sensors/ ; watchTowr https://watchtowr.com/intelligence/php-remote-code-execution-php2shell/
- **Counter-view:** Huntress saw no exploitation on partner systems; CISA had not observed exploitation; neither CVE is in CISA's KEV catalogue (as of 22 Oct morning). Sources: Huntress https://www.huntress.com/blog/php2shell-leaked-critical-php-vulnerabilities ; SOCRadar https://socradar.io/blog/php2shell-cve-2026-109618-cve-2026-109619/
- **Safe wording:** "Several security firms report attack attempts; no confirmed successful break-ins have been made public, and the US cyber agency CISA has not listed them as known-exploited."

### Node.js (21 Oct 2026)

| Fact | Official source | Independent source |
|---|---|---|
| Security releases for 26.x, 24.x, 22.x: fixed versions 26.12.1, 24.22.1, 22.23.4 | https://nodejs.org/en/blog/vulnerability/october-2026-security-releases | Cyber Kendra https://www.cyberkendra.com/2026/10/nodejs-october-2026-security-releases-cve-2026-111497.html ; CybersecurityNews https://cybersecuritynews.com/node-js-releases-security-updates/ |
| 10 flaws: 4 High, 3 Medium, 3 Low | nodejs.org | linuxcompatible.org https://www.linuxcompatible.org/story/nodejs-october-2026-security-update-10-vulnerabilities-patched-across-3-release-lines |
| CVE-2026-111497: High, out-of-bounds write in bundled Brotli decoder, could allow remote code execution; affects all three lines; reported by Matteo Collina, fixed by Antoine du Hamel | nodejs.org | Cyber Kendra; The Hacker News https://thehackernews.com/2026/10/nodejs-brotli-decoder-bug-could-allow.html |
| Other High: CVE-2026-105482 (dns.resolve truncates names with a NUL character; all lines), CVE-2026-105483 (TLS hostname check bypass with fullwidth-digit IPs; 26.x, 24.x), CVE-2026-106069 (TLS hostname bypass when a host loosely resolves to an IP; all lines) | nodejs.org | CybersecurityNews; Cyberpress https://cyberpress.org/node-js-patches-high-severity-rce-tls-certificate/ |
| No attacks reported; not in CISA KEV | nodejs.org advisory mentions none | Wardio https://wardio.net/guides/nodejs-brotli-cve-2026-111497/ ; search summary |

## Unconfirmed / drop (single-sourced)

- **Drop:** "Wiz discovered the flaws" (one summary only). Discoverer not confirmed.
- **Drop:** "affects PHP 5.4 through 8" / "all PHP versions since PHP 5" — CERT-EU says "could"; write "older versions are also likely affected", not a range.
- **Drop:** Sansec claim that CVE-2026-109618 can leak passwords/session tokens from memory.
- **Drop:** Hadrian "exploited at scale"; Cybernews headline "exploit attempts hit millions".
- **Drop:** exact release time conflict (13:30 UTC CERT-EU vs 14:00 UTC Check Point). Say "21 October".
- **Drop:** cPanel EasyApache 4 backports for 7.4/8.0/8.1 (one round-up only); say "control-panel and Linux vendors are shipping their own fixed packages".
- **Unconfirmed (Node):** no workaround for CVE-2026-111497 (one source); fetch() and Express 5 body parser decompress Brotli automatically (third-party analysis only); no CVSS score yet; end-of-life lines (25.x, 23.x, 20.x) get no fix — consistent with Node's support policy but not checked on nodejs.org; write "older, unsupported Node versions do not get this fix".
- **Unconfirmed:** WP Engine still deploying as of 21 Oct (one summary).
- **Drop:** interim config tweaks (session.upload_progress off, memory_limit) — Cloudflare says not a full fix; don't give as advice beyond "your host may already be doing this".

## Who is affected (plain English)

- Any website or app running on PHP: WordPress, Joomla, Drupal, Laravel sites, shops, forums. About three in four websites use PHP (well-known W3Techs figure; check before quoting a number, or say "a large share of the web").
- People on **managed hosting** (WordPress.com, big shared hosts): mostly protected by their host already, but should confirm.
- People with their **own server/VPS/cloud machine** or old PHP (8.1 or older): must act themselves.
- **Node.js**: developers and companies running apps/APIs on Node 22, 24 or 26; less relevant to everyday site owners unless their site/tool runs on Node.
- Visitors to websites: nothing to do.

## What to do (small site owners, anywhere)

1. **Ask your host today**: "Is the PHP on my site patched for PHP2Shell (CVE-2026-109618 and CVE-2026-109619)?" Hosts often patch quietly, sometimes under the old version number.
2. **Updating WordPress or plugins won't fix this**; the fix is in PHP, which sits underneath.
3. **Check your PHP version** in your hosting panel (or Tools > Site Health > Info > Server in WordPress). If it is 8.1 or older, switch to 8.2 or newer in the panel; back up and test first, since old plugins can break.
4. **Own server or VPS**: install your Linux/vendor's updated PHP package (upstream: 8.5.12 / 8.4.27 / 8.3.36 / 8.2.35), then restart the web server and PHP-FPM.
5. **Can't patch quickly?** CERT-EU's advice: take public-facing apps off the internet until fixed. A firewall service (e.g. Cloudflare's free rules) helps but is not a full fix.
6. **Node.js users**: update to 26.12.1, 24.22.1 or 22.23.4 (check with `node -v`); rebuild Docker images and check CI machines. Updating npm packages alone is not enough.
7. Keep backups and watch for unknown admin users or files.

## Keyword plan

Semrush: no API units. Google suggestion endpoint could not be scraped (Firecrawl out); phrases below come from how search results and headlines phrase the topic via WebSearch. No volume or difficulty numbers.

| Phrase | Volume / market | Difficulty | Why |
|---|---|---|---|
| **php2shell** (focus) | Google-suggestion-style, worldwide; trending name used by CISA-era coverage | No data | Specific, newsy name everyone searches; story answers it fully |
| php vulnerability | Search-result phrase, worldwide | No data (likely high) | Broad, natural in text |
| php security update | Search-result phrase | No data | Matches "what to do" intent |
| php2shell wordpress | Search-result phrase (many WP-focused articles) | No data | Big reader group; we answer "do I need to update WordPress?" |
| node.js security update | Search-result phrase / X trending | No data | Covers the second half of the story |
| CVE-2026-109618 | Search-result phrase | No data | Exact-match lookups from site owners |

- seoTitle: "PHP2Shell: PHP and Node.js patch serious server flaws" (53 chars)
- Alt: "PHP2Shell flaws: what website owners should do now" (50 chars)
- URL: `/news/php2shell-nodejs-security-patches`
- Description idea (~150): "PHP fixed two critical PHP2Shell flaws that let attackers take over web servers, and Node.js patched 10 bugs. Here is who is affected and what to do now."

## Related links

- News to link inside the text: `zero-click-spyware-ads` (phrase "zero-click attack"), `japan-data-breaches-yamato-nikkei` (phrase "data breach") where natural.
- Related guide: none exists (`src/content/guides/` has only `sample-guide`). Suggested new guide: "How to keep a small website safe (hosting, backups, updates)" or "Best managed WordPress hosting".

## Notes for writer

- Use "attack attempts", not "mass exploitation". Credit Amazon/Cloudflare/watchTowr by name.
- Don't invent version numbers for distros; tell readers to ask their host or vendor.
- Calm tone: serious, fixable, most hosted sites already covered.
