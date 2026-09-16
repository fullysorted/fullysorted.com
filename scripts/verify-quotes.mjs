#!/usr/bin/env node
// Mechanical citation check for a model-history seed.
//
//   node scripts/verify-quotes.mjs src/lib/data/model-seed-<slug>.ts [--json]
//
// For every claim, every `evidence` entry is checked against the live page of
// the source it names: the page is fetched, reduced to plain text, and the
// quoted words are searched for (whitespace, case and punctuation folded;
// an 85 percent ordered-token match passes so that a smart quote or a
// stripped comma does not fail a real citation). No model reads anything.
//
// Verdicts per evidence entry:
//   found        the words are on the page
//   missing      page fetched, words not there  -> the claim is not supported
//   unreachable  page could not be fetched (403, timeout, network)  -> reported, not failed
//   page         reference-book evidence; checked by a human against the page photo
//   no-evidence  the claim has a sourceRef with no evidence entry
//
// Exit code 1 when anything is `missing` or `no-evidence`.

import fs from "node:fs";

const args = process.argv.slice(2);
const file = args.find((a) => !a.startsWith("--"));
const asJson = args.includes("--json");
if (!file) { console.error("usage: verify-quotes.mjs <seed.ts> [--json]"); process.exit(2); }

// ---- parse the seed the same way validate-seed.mjs does ---------------------
const src = fs.readFileSync(file, "utf8");
function stripTsAssertions(input) {
  return input
    .replace(/\s+as\s+const\b/g, "")
    .replace(/\s+as\s+[A-Za-z_][\w<>\[\]|, ]*(?=[,;\n\r}\]])/g, "");
}
const exportMatch = src.match(/export const (\w+)\s*=\s*/);
if (!exportMatch) { console.log("FAIL: no `export const seedX =` found"); process.exit(2); }
const stripped = stripTsAssertions(src.slice(exportMatch.index + exportMatch[0].length));
let depth = 0, start = -1, end = -1, inStr = null, esc = false;
for (let i = 0; i < stripped.length; i++) {
  const ch = stripped[i];
  if (inStr) { if (esc) esc = false; else if (ch === "\\") esc = true; else if (ch === inStr) inStr = null; continue; }
  if (ch === '"' || ch === "'" || ch === "`") { inStr = ch; continue; }
  if (ch === "{") { if (depth === 0) start = i; depth++; }
  else if (ch === "}") { depth--; if (depth === 0) { end = i; break; } }
}
if (start === -1 || end === -1) { console.log("FAIL: no complete object literal"); process.exit(2); }
let seed;
try { seed = (0, eval)("(" + stripped.slice(start, end + 1) + ")"); }
catch (e) { console.log("FAIL: seed does not parse: " + e.message); process.exit(2); }

const sources = new Map((seed.sources || []).map((s) => [s.ref, s]));
const claims = seed.claims || [];

// ---- text folding -----------------------------------------------------------
const fold = (t) => t
  .toLowerCase()
  .replace(/[‘’‚′]/g, "'")
  .replace(/[“”„″]/g, '"')
  .replace(/[–—−]/g, "-")
  .replace(/&nbsp;|&#160;/g, " ")
  .replace(/[^a-z0-9$%.'"\-\s]/g, " ")
  .replace(/\s+/g, " ")
  .trim();
const tokens = (t) => fold(t).replace(/[.'"\-]/g, " ").split(/\s+/).filter(Boolean);

function htmlToText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<br\s*\/?>|<\/p>|<\/div>|<\/li>|<\/h[1-6]>|<\/tr>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));
}

// Ordered-token match: the fraction of quote tokens that appear in order in the
// page, allowing gaps. 1.0 is exact; 0.85 tolerates one dropped word in seven.
function orderedMatch(quoteToks, pageToks) {
  if (!quoteToks.length) return 0;
  const first = quoteToks[0];
  let best = 0;
  for (let i = 0; i < pageToks.length; i++) {
    if (pageToks[i] !== first) continue;
    let hit = 1, j = i + 1, q = 1;
    const limit = Math.min(pageToks.length, i + quoteToks.length * 2 + 4);
    while (q < quoteToks.length && j < limit) {
      if (pageToks[j] === quoteToks[q]) { hit++; q++; }
      j++;
    }
    best = Math.max(best, hit / quoteToks.length);
    if (best === 1) break;
  }
  return best;
}

// ---- fetch with a small cache so one page serves many claims ----------------
const pageCache = new Map();
async function getPage(url) {
  if (pageCache.has(url)) return pageCache.get(url);
  let result;
  try {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 20000);
    const res = await fetch(url, {
      signal: ctrl.signal,
      redirect: "follow",
      headers: {
        "user-agent": "Mozilla/5.0 (compatible; FullySortedCitationCheck/1.0; +https://fullysorted.com)",
        accept: "text/html,application/xhtml+xml,application/pdf;q=0.8,*/*;q=0.5",
      },
    });
    clearTimeout(t);
    if (!res.ok) result = { ok: false, why: `HTTP ${res.status}` };
    else {
      const ct = res.headers.get("content-type") || "";
      const body = await res.text();
      const text = ct.includes("html") ? htmlToText(body) : body;
      result = { ok: true, toks: tokens(text), chars: text.length };
    }
  } catch (e) {
    result = { ok: false, why: e.name === "AbortError" ? "timeout" : (e.cause?.code || e.message) };
  }
  pageCache.set(url, result);
  return result;
}

// ---- run --------------------------------------------------------------------
const rows = [];
for (let i = 0; i < claims.length; i++) {
  const c = claims[i];
  const evidence = Array.isArray(c.evidence) ? c.evidence : [];
  for (const ref of c.sourceRefs || []) {
    const src = sources.get(ref);
    const ev = evidence.find((e) => e.ref === ref);
    const row = { claim: i, ref, section: c.section, text: (c.claimText || "").slice(0, 90) };
    if (!src) { rows.push({ ...row, verdict: "missing", why: "sourceRef not in sources" }); continue; }
    if (!ev) { rows.push({ ...row, verdict: "no-evidence" }); continue; }
    if (src.sourceType === "reference-book" || ev.page != null) {
      rows.push({ ...row, verdict: "page", page: ev.page ?? null }); continue;
    }
    const quote = String(ev.quote || "");
    const qt = tokens(quote);
    if (qt.length < 5) { rows.push({ ...row, verdict: "missing", why: "quote under 5 words" }); continue; }
    const page = await getPage(src.url);
    if (!page.ok) { rows.push({ ...row, verdict: "unreachable", why: page.why, url: src.url }); continue; }
    const score = orderedMatch(qt, page.toks);
    rows.push({ ...row, verdict: score >= 0.85 ? "found" : "missing", score: Number(score.toFixed(2)), url: src.url });
  }
}

const summary = { checked: rows.length, found: 0, missing: 0, unreachable: 0, page: 0, "no-evidence": 0 };
for (const r of rows) summary[r.verdict]++;

if (asJson) {
  console.log(JSON.stringify({ file, summary, rows }, null, 2));
} else {
  for (const r of rows) {
    if (r.verdict === "found") continue;
    const extra = r.why ? ` (${r.why})` : r.score != null ? ` (match ${r.score})` : r.page != null ? ` (p. ${r.page})` : "";
    console.log(`${r.verdict.toUpperCase().padEnd(12)} claim ${r.claim} [${r.section}] via ${r.ref}${extra}\n             ${r.text}`);
  }
  console.log(`\nchecked ${summary.checked}: found ${summary.found}, missing ${summary.missing}, unreachable ${summary.unreachable}, book-page ${summary.page}, no-evidence ${summary["no-evidence"]}`);
}
process.exit(summary.missing || summary["no-evidence"] ? 1 : 0);
