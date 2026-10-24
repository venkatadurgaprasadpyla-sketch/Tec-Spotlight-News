# Research: Quest Diagnostics data breach (story mode)

Researcher notes, 24 Oct 2026, about 10:30 UTC. Firecrawl out of credits: WebSearch (extended), curl and direct page reads. Semrush not used (no API units assumed per run rules; Google suggestions used instead).

Slug: `quest-diagnostics-data-breach-2026` · Category: `business` (security angle)

## Official sources (read directly)

1. **Quest 8-K, Item 8.01** (event date 21 Oct 2026, signed 22 Oct 2026 by Sean D. Mersten, VP and Corporate Secretary). https://www.sec.gov/Archives/edgar/data/1022079/000094787126000941/ss6979200_8k.htm
   - Exact short quotes:
     - "learned of unauthorized access to its Quanum LSM system, which certain clients use to place test orders, receive and look up results"
     - "at this time the Company believes that an unauthorized party accessed certain patient records"
     - "has not materially disrupted the Company's business operations or its ability to serve patients"
   - Also: started incident response, notified **federal law enforcement**, hired **external cybersecurity experts**; "full scope of unauthorized access remains under investigation".
   - NOTE: the 8-K does **not** mention pausing other portals. That fact comes from Quest's own notice (below).
2. **Quest notice and FAQ** ("Quanum" page; marked noindex). https://www.questdiagnostics.com/links/quanum-notice
   - "As of 7:00 pm ET, October 23, 2026": Quest says it has "remediated" the incident; Quanum LSM "securely restored and is available to clients"; systems paused as a precaution also restored; core operations not impacted.
   - FAQ: Essential Insights and LabHQ were paused "out of an abundance of caution"; "no data was accessed in these other systems".
   - FAQ: "We believe some patient data within Quanum LSM was accessed"; asked whether PHI or PII was involved: "Yes, but we are still investigating to determine the specific data affected."
   - Quest will "notify those patients and providers that we have determined have been affected and report to the relevant regulatory authorities"; "this process takes time".
   - Quest "terminated the unauthorized access and contained the incident".
   - Providers using direct LIS interfaces or EMRs were not affected. Clients resetting Quanum LSM credentials: IT Connectivity Help Desk 1-800-697-9302 (a clinic number, not a patient line; do not print in story).
3. **Quest newsroom fact sheet** (scale): Quest "annually serves one in three adult Americans and half the physicians and hospitals in the United States". https://newsroom.questdiagnostics.com/Fact-sheet (wording also on newsroom home and IR site; HIPAA Journal repeats it).
4. **US HHS, HIPAA Breach Notification Rule**: individual notices "without unreasonable delay and in no case later than 60 days following the discovery of a breach"; must describe the breach, the data types, steps people should take. https://www.hhs.gov/hipaa/for-professionals/breach-notification/index.html (HHS page blocked to curl; wording confirmed via WebSearch result quoting HHS and the HHS guidance document page https://www.hhs.gov/guidance/document/breach-notification-rule). General law, not Quest-specific.

## Independent reporting

- TechCrunch, Zack Whittaker, 23 Oct: https://techcrunch.com/2026/10/23/lab-testing-giant-quest-diagnostics-confirms-patients-personal-and-health-data-was-compromised-during-breach/
- BleepingComputer, 23 Oct: https://www.bleepingcomputer.com/news/security/quest-diagnostics-confirms-data-breach-exposed-patient-records/
- AP via NBC News, 22 Oct: https://www.nbcnews.com/health/health-news/quest-diagnostics-reports-cyber-breach-affecting-certain-patient-recor-rcna605146
- Gizmodo, 22-23 Oct: https://gizmodo.com/quest-diagnostics-reports-unauthorized-access-of-patient-records-2000829419
- Fox Business, 23 Oct: https://www.foxbusiness.com/technology/major-medical-testing-company-quest-diagnostics-hit-cyberattack-patient-records-risk
- HIPAA Journal: https://www.hipaajournal.com/quest-diagnostics-data-breach-2026/

## Fact check table

| Fact | Sources | Status |
|---|---|---|
| Learned of unauthorised access 21 Oct 2026 (a Wednesday) | 8-K; TechCrunch, AP/NBC, BleepingComputer | Confirmed |
| System: Quanum Lab Services Manager (LSM), used by certain clients to order tests and get/look up results | 8-K; Quest notice; AP, BleepingComputer | Confirmed |
| Quest believes an unauthorised party accessed "certain patient records" | 8-K; Quest FAQ; all outlets | Confirmed |
| Personal or health information involved (PHI or PII), specific data still unknown | Quest FAQ; TechCrunch, Fox Business | Confirmed |
| Number of people affected not known | 8-K ("full scope... under investigation"); TechCrunch, AP | Confirmed |
| Federal law enforcement told; outside experts hired | 8-K; Fox, HIPAA Journal | Confirmed |
| Essential Insights and LabHQ paused as a precaution; Quest says no data accessed there | Quest FAQ; BleepingComputer | Confirmed |
| Business not materially disrupted | 8-K; Gizmodo, Fox | Confirmed |
| Quanum LSM and paused systems restored as of 7pm ET 23 Oct | Quest notice only (dated update) | Official only. Use as "Quest says" with time stamp. Fox said restoration was expected "as soon as Friday", consistent. |
| No group has claimed the attack | BleepingComputer; HIPAA Journal | Confirmed (as of 23-24 Oct); say "so far" |
| Quest says incident not related to the PHP flaw | Quest to AP (NBC) and to Gizmodo | Confirmed (two outlets quoting Quest) |
| Quest will notify affected patients and providers and regulators | Quest notice; Fox | Confirmed |
| Not said when access began / how attacker got in | TechCrunch; HIPAA Journal | Confirmed |
| Quest serves 1 in 3 adult Americans, half of US doctors and hospitals | Quest fact sheet; HIPAA Journal | Confirmed |
| 2019: about 11.9 million Quest patients affected via billing collector AMCA | NBC/AP; Fox; BleepingComputer; Quest 2019 8-K | Confirmed |
| Quanum used by about half a million clinicians | TechCrunch citing Quest materials | One source: CUT |
| Quest revenue about $11bn | Fox; HIPAA Journal | Not needed: CUT |
| 2016 breach, about 34,000 people | AP only | CUT |
| 19 class actions after 2019 | BleepingComputer only | CUT |
| Law firm investigating class action (Edelson Lechtzin press release) | PR Newswire only | CUT |
| Security firm CTO: looks like data theft/extortion | one quote, speculation about attackers | CUT (no attacker speculation) |
| TechCrunch: notice page carries "noindex" | TechCrunch only (verified page is a /links/ page) | CUT |

## What Quest has said to patients

- Quest will contact affected patients and providers directly once it knows who is affected; this "takes time".
- Quest has not (yet) offered credit monitoring or a patient helpline; the only phone number is for clinic credential resets.

## General reader steps (general good practice, framed as such, not Quest advice)

- Expect scam messages that mention Quest, a lab test or a bill. Do not click links or call numbers inside them; go to Quest's own website or your doctor's office yourself. (Google suggestion "quest data breach text message" shows people are already asking about this.)
- Read health insurer "explanation of benefits" statements and medical bills for tests or visits you did not have.
- A genuine breach letter will say what data was involved and what to do; US law (HIPAA) requires that notice within 60 days of discovery at the latest.
- Do not pay anyone who contacts you claiming to "unlock" or "delete" your records.

## Related TechSpotlight posts

- `/news/japan-data-breaches-yamato-nikkei/` (scam messages after breaches)
- `/news/php2shell-nodejs-security-patches/` (the PHP flaw Quest says is unrelated)
- relatedGuide: none yet. Suggest "How to spot a scam text or email after a data breach".

## Keyword plan (Google suggestions, gl=us and gl=gb, 24 Oct; no volume numbers)

| Phrase | Volume | Difficulty | Why |
|---|---|---|---|
| quest diagnostics data breach | Google suggestion (US, GB), top of list; also shown under plain "quest diagnostics" | Google suggestion | **Focus keyword.** Exactly what people type; story answers it directly |
| quest diagnostics breach 2026 | Google suggestion (US) | Google suggestion | Year-specific, separates from 2019 AMCA case |
| quanum lab services manager | Google suggestion (US, GB) | Google suggestion | The system named in the 8-K |
| quest diagnostics cyber attack | Google suggestion (US, under "quest diagnostics") | Google suggestion | Alternate wording |
| quest data breach text message | Google suggestion (US, GB) | Google suggestion | Readers worried about scam texts; reader section answers it |
| did quest diagnostics have a data breach | Google suggestion (US, GB) | Google suggestion | Common question; answer in first lines |

- Suggested seoTitle: "Quest Diagnostics Data Breach: What Patients Should Know" (56 chars)
- Web address: `/news/quest-diagnostics-data-breach-2026/`

## Cover

Quest newsroom media page: check for press images offered for media use; otherwise Unsplash/Pexels lab image (no hacker clichés); else title card.
