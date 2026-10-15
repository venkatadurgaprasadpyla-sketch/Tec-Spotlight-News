#!/usr/bin/env node
// SEO and quality score for TechSpotlight posts.
//
//   npm run seo-check                         check every news brief and guide
//   npm run seo-check -- path/to/post.md ...  check only these files
//
// Each check is PASS, WARN or FAIL. A post passes the gate when it has no FAIL
// and scores at least 90%. The CTO/SEO reviewer runs this before a draft goes
// to Pyla; the editor's and reviewer's judgement covers what a script can't.

import { readFileSync, existsSync, statSync, readdirSync } from 'node:fs';
import { join, basename } from 'node:path';
import { parse } from 'yaml';

const PASS_SCORE = 90;
const HYPE = ['insane', 'mind-blowing', 'game-changer', 'game-changing', 'killer', 'revolutionary', 'jaw-dropping', 'epic', 'crazy', 'unbelievable', 'must-have', 'massive'];
const GENERIC_HEADINGS = ['what happened', 'why people are talking', 'why people are talking about it', 'what this means for you', 'my take', 'conclusion', 'introduction', 'overview'];
const BANNED_OPENERS = ["in today's fast-paced world", "let's dive in", 'in this article', 'in conclusion', 'to sum up', 'without further ado'];

const files = process.argv.slice(2).length
  ? process.argv.slice(2)
  : ['src/content/news', 'src/content/guides'].flatMap((d) =>
      existsSync(d) ? readdirSync(d).filter((f) => f.endsWith('.md') && !f.startsWith('sample-')).map((f) => join(d, f)) : [],
    );

let failed = 0;
for (const file of files) failed += check(file) ? 0 : 1;
process.exit(failed ? 1 : 0);

function check(file) {
  const raw = readFileSync(file, 'utf8');
  const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) {
    console.log(`\n${file}\n  FAIL  No front matter found`);
    return false;
  }
  const d = parse(m[1]) ?? {};
  const body = m[2];
  const isNews = file.includes('news');
  const slug = basename(file, '.md').replace(/^news-|^guide-/, '');
  const results = [];
  const add = (status, area, msg) => results.push({ status, area, msg });
  const ok = (cond, area, good, bad, level = 'FAIL') => add(cond ? 'PASS' : level, area, cond ? good : bad);

  const text = plain(body);
  const words = text.split(/\s+/).filter(Boolean);
  const lower = text.toLowerCase();
  const kw = (d.focusKeyword ?? '').toLowerCase().trim();
  const headings = [...body.matchAll(/^(#{1,6})\s+(.+)$/gm)].map((h) => ({ level: h[1].length, text: h[2].trim() }));
  const seoTitle = d.seoTitle ?? d.title ?? '';

  // --- Keywords ---
  ok(!!kw, 'Keywords', `Focus keyword: "${d.focusKeyword}"`, 'No focusKeyword set (pick one from keyword research)');
  if (kw) {
    ok(seoTitle.toLowerCase().includes(kw) || allWords(seoTitle, kw), 'Keywords', 'Focus keyword is in the search title', 'Focus keyword is missing from seoTitle');
    ok((d.description ?? '').toLowerCase().includes(kw) || allWords(d.description ?? '', kw), 'Keywords', 'Focus keyword is in the description', 'Focus keyword is missing from description');
    const first100 = words.slice(0, 100).join(' ').toLowerCase();
    ok(first100.includes(kw) || allWords(first100, kw), 'Keywords', 'Focus keyword appears in the first 100 words', 'Focus keyword is not in the first 100 words');
    ok(headings.some((h) => h.level === 2 && allWords(h.text, kw, 0.6)), 'Keywords', 'A heading uses the focus keyword (or most of it)', 'No H2 heading uses the focus keyword', 'WARN');
    ok(allWords(d.imageAlt ?? '', kw, 0.5), 'Keywords', 'Cover alt text relates to the focus keyword', 'Cover alt text does not mention the topic', 'WARN');
    ok(allWords(slug.replace(/-/g, ' '), kw, 0.5), 'Keywords', 'Web address contains the main keyword words', `Web address "${slug}" shares few words with the keyword`, 'WARN');
    const hits = count(lower, kw);
    const density = ((hits * kw.split(/\s+/).length) / Math.max(words.length, 1)) * 100;
    ok(hits >= 2 && density <= 2.5, 'Keywords', `Keyword used ${hits} times (${density.toFixed(1)}%), natural`, `Keyword used ${hits} times (${density.toFixed(1)}%); aim for 2+ uses and under 2.5%`, 'WARN');
  }
  const extra = d.keywords ?? [];
  ok(extra.length >= 3, 'Keywords', `${extra.length} related keywords listed`, 'List at least 3 related keywords or questions in keywords');
  const unused = extra.filter((k) => !allWords(lower, k.toLowerCase(), 0.75));
  ok(unused.length === 0, 'Keywords', 'Every related keyword is covered in the text', `Related keywords not covered: ${unused.join('; ')}`, 'WARN');

  // --- Metadata ---
  ok(seoTitle.length >= 30 && seoTitle.length <= 60, 'Metadata', `Search title is ${seoTitle.length} characters`, `Search title is ${seoTitle.length} characters; keep it 30-60`);
  ok((d.title ?? '').length <= 110, 'Metadata', 'Headline fits Google News (110 characters max)', 'Headline is over 110 characters');
  const desc = d.description ?? '';
  ok(desc.length >= 120 && desc.length <= 155, 'Metadata', `Description is ${desc.length} characters`, `Description is ${desc.length} characters; keep it 120-155`, desc.length > 155 ? 'FAIL' : 'WARN');
  ok(/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug) && slug.split('-').length <= 7, 'Metadata', 'Web address is short, lowercase and hyphenated', `Web address "${slug}" should be lowercase, hyphenated and 7 words or fewer`);
  ok(!!d.date && new Date(d.date) <= new Date(Date.now() + 864e5), 'Metadata', 'Date is set and not in the future', 'Date is missing or in the future');

  // --- Cover image ---
  if (d.image) {
    const path = join('public', d.image);
    const exists = existsSync(path);
    ok(exists, 'Image', 'Cover image file exists', `Cover image not found at ${path}`);
    if (exists) {
      const size = statSync(path).size;
      ok(size <= 250_000, 'Image', `Cover image is ${Math.round(size / 1000)} KB`, `Cover image is ${Math.round(size / 1000)} KB; compress it under 250 KB so the page loads fast`, 'WARN');
      const dim = imageSize(path);
      if (dim) ok(dim.width >= 1200, 'Image', `Cover image is ${dim.width}x${dim.height}`, `Cover image is only ${dim.width} wide; Google Discover needs 1200+`);
    }
    const alt = d.imageAlt ?? '';
    ok(alt.length >= 15 && alt.length <= 125, 'Image', 'Alt text describes the image (15-125 characters)', `Alt text is ${alt.length} characters; describe the image in 15-125`);
    ok(!!d.imageCredit || !/unsplash|pexels/i.test(JSON.stringify(d)), 'Image', 'Photo credit present', 'Stock photo needs imageCredit');
  } else add('FAIL', 'Image', 'No cover image (every post needs image, imageAlt and imageCredit)');

  // --- Structure ---
  ok(!headings.some((h) => h.level === 1), 'Structure', 'Only one H1 (the headline)', 'Remove the H1 inside the text; the headline is already the H1');
  let skip = false;
  headings.reduce((prev, h) => ((h.level > prev + 1 && (skip = true)), h.level), 1);
  ok(!skip, 'Structure', 'Headings go in order (H2, then H3)', 'A heading level is skipped (for example H2 straight to H4)');
  const generic = headings.filter((h) => GENERIC_HEADINGS.includes(h.text.toLowerCase().replace(/[?:.!]/g, '').trim()));
  ok(generic.length === 0, 'Structure', 'Headings are specific to this story', `Generic headings: ${generic.map((h) => h.text).join('; ')}`);
  ok(headings.filter((h) => h.level === 2).length >= 3, 'Structure', `${headings.filter((h) => h.level === 2).length} section headings`, 'Use at least 3 H2 section headings so readers and Google can scan it', 'WARN');
  if (isNews) {
    ok(words.length >= 500 && words.length <= 800, 'Structure', `${words.length} words`, `${words.length} words; news briefs are 500-800`, words.length < 400 ? 'FAIL' : 'WARN');
    ok(headings.some((h) => /^my view:/i.test(h.text)), 'Structure', 'Has the "My view:" section', 'Missing a "My view: ..." section with Pyla\'s view');
    ok(Array.isArray(d.summary) && d.summary.length === 3 && d.summary.every((s) => s.length <= 160), 'Structure', '3-line summary, each line short', 'Summary should be exactly 3 lines of 160 characters or fewer');
    ok(/\n---\s*\n[\s\S]{40,}$/.test(body), 'Structure', 'Ends with a kicker after a line break', 'Add a short kicker after a horizontal rule (---)', 'WARN');
  }
  ok(!/\[YOUR TAKE/i.test(body), 'Structure', 'No placeholders left', 'A [YOUR TAKE: ...] placeholder still needs Pyla');

  // --- Readability ---
  const sentences = text.split(/(?<=[.!?])\s+(?=[A-Z"“'])/).filter((s) => s.split(/\s+/).length > 2);
  const avg = words.length / Math.max(sentences.length, 1);
  ok(avg <= 20, 'Readability', `Average sentence is ${avg.toFixed(1)} words`, `Average sentence is ${avg.toFixed(1)} words; aim for 20 or fewer`, 'WARN');
  const long = sentences.filter((s) => s.split(/\s+/).length > 30);
  ok(long.length <= 2, 'Readability', `${long.length} very long sentences`, `${long.length} sentences over 30 words; split them: "${long[0]?.slice(0, 60)}..."`, 'WARN');
  const fre = flesch(words, sentences.length);
  ok(fre >= 50, 'Readability', `Reading ease score ${fre.toFixed(0)} (50+ is easy for most readers)`, `Reading ease score ${fre.toFixed(0)}; aim for 50+ with shorter words and sentences`, 'WARN');
  const paras = body.split(/\n\s*\n/).filter((p) => !/^(#|-|\*|\||>|---)/.test(p.trim()) && p.trim());
  const bigParas = paras.filter((p) => plain(p).split(/\s+/).length > 90);
  ok(bigParas.length === 0, 'Readability', 'Paragraphs are short enough for phones', `${bigParas.length} paragraphs over 90 words; break them up`, 'WARN');

  // --- Voice ---
  const hype = HYPE.filter((w) => new RegExp(`\\b${w}\\b`, 'i').test(text));
  ok(hype.length === 0, 'Voice', 'No hype words', `Hype words: ${hype.join(', ')}`);
  const openers = BANNED_OPENERS.filter((o) => lower.includes(o));
  ok(openers.length === 0, 'Voice', 'No stock openers or closers', `Stock phrases: ${openers.join('; ')}`);

  // --- Links and trust ---
  const links = [...body.matchAll(/\]\(([^)\s]+)/g)].map((l) => l[1]);
  if (isNews) {
    const sources = d.sources ?? [];
    ok(sources.length >= 2, 'Trust', `${sources.length} sources listed`, 'List at least 2 sources, the original first');
    ok(sources.every((s) => /^https:\/\//.test(s.url)), 'Trust', 'All sources use secure links (https)', 'Some sources use http; switch to https if the site supports it', 'WARN');
  }
  ok(!links.some((l) => /^https?:\/\/(?!techspotlight\.news)/.test(l) && /amazon|flipkart|partnerstack|ref=|aff/i.test(l)), 'Trust', 'No raw affiliate links in the text', 'Raw affiliate link found; use affiliate:<tool>');
  ok(!links.some((l) => l.startsWith('affiliate:')) || d.affiliate === true, 'Trust', 'Affiliate disclosure set correctly', 'Has affiliate links but affiliate: true is missing');
  const internal = links.filter((l) => l.startsWith('/') || l.includes('techspotlight.news'));
  ok(internal.length > 0 || !!d.relatedGuide, 'Links', 'Links to another page on the site', 'No link to another TechSpotlight page in the text (the "More news" box still adds some)', 'WARN');

  // --- Report ---
  const scored = results;
  const points = scored.reduce((n, r) => n + (r.status === 'PASS' ? 1 : r.status === 'WARN' ? 0.5 : 0), 0);
  const score = Math.round((points / scored.length) * 100);
  const fails = results.filter((r) => r.status === 'FAIL').length;
  const passed = fails === 0 && score >= PASS_SCORE;
  console.log(`\n${file}\n${'-'.repeat(Math.min(file.length, 80))}`);
  for (const r of results) console.log(`  ${r.status.padEnd(4)}  ${r.area.padEnd(11)} ${r.msg}`);
  console.log(`\n  SEO score: ${score}%  ·  ${fails} fail(s)  ·  ${passed ? 'GATE PASSED' : `GATE NOT PASSED (needs 0 fails and ${PASS_SCORE}%+)`}`);
  return passed;
}

function plain(md) {
  return md
    .replace(/^#{1,6}\s+(.+)$/gm, '$1.')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/^---\s*$/gm, '')
    .replace(/[*_`>|]/g, '')
    .replace(/^\s*-\s+/gm, '')
    .trim();
}

function count(hay, needle) {
  return needle ? hay.split(needle).length - 1 : 0;
}

// True when most of the keyword's meaningful words appear in the text.
function allWords(text, kw, share = 1) {
  const stop = new Set(['a', 'an', 'the', 'for', 'of', 'to', 'in', 'on', 'and', 'with', 'is', 's']);
  const t = text.toLowerCase().replace(/['’]/g, '');
  const parts = kw.toLowerCase().replace(/['’]/g, '').split(/[^a-z0-9.]+/).filter((w) => w && !stop.has(w));
  if (!parts.length) return false;
  const found = parts.filter((w) => new RegExp(`\\b${w.replace(/\./g, '\\.')}`).test(t)).length;
  return found / parts.length >= share;
}

function flesch(words, sentenceCount) {
  const syl = words.reduce((n, w) => n + syllables(w), 0);
  return 206.835 - 1.015 * (words.length / Math.max(sentenceCount, 1)) - 84.6 * (syl / Math.max(words.length, 1));
}

function syllables(word) {
  const w = word.toLowerCase().replace(/[^a-z]/g, '');
  if (!w) return 0;
  if (w.length <= 3) return 1;
  const m = w.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '').replace(/^y/, '').match(/[aeiouy]{1,2}/g);
  return Math.max(1, m ? m.length : 1);
}

// Reads width and height from a JPEG or PNG header.
function imageSize(path) {
  const b = readFileSync(path);
  if (b[0] === 0x89 && b[1] === 0x50) return { width: b.readUInt32BE(16), height: b.readUInt32BE(20) };
  if (b[0] === 0xff && b[1] === 0xd8) {
    let i = 2;
    while (i < b.length) {
      if (b[i] !== 0xff) return null;
      const marker = b[i + 1];
      const len = b.readUInt16BE(i + 2);
      if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker))
        return { height: b.readUInt16BE(i + 5), width: b.readUInt16BE(i + 7) };
      i += 2 + len;
    }
  }
  return null;
}
