#!/usr/bin/env node
// Mechanical check for a model seed file against MODEL-HISTORY-SPEC.md.
// Usage: node scripts/validate-seed.mjs src/lib/data/model-seed-<slug>.ts
// Exit 0 = passes; exit 1 = prints every failure. Warnings do not fail.
import fs from "node:fs";

const file = process.argv[2];
if (!file) { console.error("usage: validate-seed.mjs <file>"); process.exit(2); }
const src = fs.readFileSync(file, "utf8");
// TS-aware parse. Seeds may carry `as const` / `as SeedSource[]` assertions and
// trailing exports; a naive eval of the whole tail silently skipped 10 files until 2026-09-13.
function stripTsAssertions(input) {
  let out = "", i = 0;
  const n = input.length;
  const isIdent = (c) => /[A-Za-z0-9_$]/.test(c);
  while (i < n) {
    const c = input[i];
    if (c === '"' || c === "'" || c === "`") {
      const q = c; out += c; i++;
      while (i < n) {
        if (input[i] === "\\") { out += input[i] + (input[i + 1] || ""); i += 2; continue; }
        out += input[i];
        if (input[i] === q) { i++; break; }
        i++;
      }
      continue;
    }
    if (c === "/" && input[i + 1] === "/") { while (i < n && input[i] !== "\n") { out += input[i]; i++; } continue; }
    if (c === "/" && input[i + 1] === "*") { const e = input.indexOf("*/", i + 2); const stop = e === -1 ? n : e + 2; out += input.slice(i, stop); i = stop; continue; }
    const kw = /^(as|satisfies)\s/.exec(input.slice(i, i + 12));
    if (kw && (i === 0 || !isIdent(input[i - 1]))) {
      let j = i + kw[0].length, depth = 0;
      while (j < n) {
        const d = input[j];
        if (d === "<" || d === "[" || d === "(") { depth++; j++; continue; }
        if (d === ">" || d === "]" || d === ")") { if (depth === 0) break; depth--; j++; continue; }
        if (depth === 0 && (d === "," || d === "}" || d === ";" || d === "\n")) break;
        if (/[A-Za-z0-9_$.|&\s'"]/.test(d)) { j++; continue; }
        break;
      }
      i = j; continue;
    }
    out += c; i++;
  }
  return out;
}
const exportMatch = src.match(/export const (\w+)\s*=\s*/);
if (!exportMatch) { console.log("FAIL: no `export const seedX =` found"); process.exit(1); }
const stripped = stripTsAssertions(src.slice(exportMatch.index + exportMatch[0].length));
const start = stripped.indexOf("{");
let end = -1;
if (start !== -1) {
  let depth = 0;
  for (let i = start; i < stripped.length; i++) {
    const c = stripped[i];
    if (c === '"' || c === "'" || c === "`") {
      const q = c; i++;
      while (i < stripped.length) { if (stripped[i] === "\\") { i += 2; continue; } if (stripped[i] === q) break; i++; }
      continue;
    }
    if (c === "/" && stripped[i + 1] === "/") { while (i < stripped.length && stripped[i] !== "\n") i++; continue; }
    if (c === "/" && stripped[i + 1] === "*") { const e = stripped.indexOf("*/", i + 2); i = e === -1 ? stripped.length : e + 1; continue; }
    if (c === "{") depth++;
    else if (c === "}") { depth--; if (depth === 0) { end = i; break; } }
  }
}
if (start === -1 || end === -1) { console.log("FAIL: no complete object literal after `export const`"); process.exit(1); }
let o;
try { o = (0, eval)("(" + stripped.slice(start, end + 1) + ")"); } catch (e) { console.log("FAIL: does not parse as a plain object literal: " + e.message); process.exit(1); }

const fails = [], warns = [];
const len = (s) => (s || "").length;
const range = (k, lo, hi) => { const n = len(o[k]); if (n < lo) fails.push(`${k}: ${n} chars, floor ${lo}`); else if (n > hi) fails.push(`${k}: ${n} chars, ceiling ${hi}`); };

// Required scalar fields
for (const k of ["slug", "make", "model", "yearStart", "yearEnd", "overallConfidence"]) if (o[k] == null) fails.push(`${k} missing`);
if (o.slug && !/^[a-z0-9-]+\/[a-z0-9-]+$/.test(o.slug)) fails.push(`slug must be make/model lowercase kebab: ${o.slug}`);
if ("status" in o) fails.push("status must not be set (route sets draft)");
// heroPhoto is allowed since 2026-09-05: a site-relative path under /images/models/ plus a credit line.
if ("heroPhoto" in o && o.heroPhoto != null) {
  if (!/^\/images\/models\/[a-z0-9-]+\.(jpg|webp)$/.test(o.heroPhoto)) fails.push(`heroPhoto must be /images/models/<slug>.jpg: ${o.heroPhoto}`);
  if (!o.heroPhotoCredit) fails.push("heroPhotoCredit required when heroPhoto is set (Commons attribution)");
}
for (const k of ["generation", "generationCode", "trim"]) if (!(k in o)) fails.push(`${k} must be present (value or null)`);
// DB column limits (VARCHAR) — an overflow 500s the whole seed run
const lim = { make: 100, model: 200, generation: 100, generationCode: 50, trim: 200, slug: 300, overallConfidence: 20 };
for (const [k, l] of Object.entries(lim)) if (o[k] && String(o[k]).length > l) fails.push(`${k} is ${String(o[k]).length} chars; DB column is VARCHAR(${l})`);
if (!["high", "medium", "low"].includes(o.overallConfidence)) fails.push("overallConfidence not high|medium|low");
if (!Array.isArray(o.bodyStyles) || !o.bodyStyles.length) fails.push("bodyStyles must be a non-empty array");
if (!Array.isArray(o.engines) || !o.engines.length) fails.push("engines must be a non-empty array");
if (o.productionTotal != null && !Number.isInteger(o.productionTotal)) fails.push("productionTotal must be an integer or null");
const trims = o.notableTrims || [];
if (trims.length < 4 || trims.length > 8) fails.push(`notableTrims: ${trims.length}, want 4-8`);
for (const t of trims) if (!t.name || !t.note) fails.push("notableTrims entry missing name/note");
const specKeys = Object.keys(o.specs || {});
if (specKeys.length < 12 || specKeys.length > 18) fails.push(`specs: ${specKeys.length} keys, want 12-18`);
for (const k of ["layout", "chassis", "engine", "power", "torque", "transmission", "weight", "acceleration"]) if (!(k in (o.specs || {}))) fails.push(`specs missing key ${k}`);
for (const k of specKeys) if (!/^[a-z0-9_]+$/.test(k)) fails.push(`specs key not snake_case: ${k}`);

// Prose ranges
range("summary", 700, 1150);
if (/^##|\n##/.test(o.summary || "")) fails.push("summary must not contain headings");
range("history", 3000, 4300);
range("marketNotes", 1000, 1700);
range("whatToLookFor", 1000, 2050);
range("commonProblems", 900, 1700);
range("valueTrajectory", 900, 1300);
range("productionNotes", 900, 2500);
const h2 = (o.history || "").match(/(^|\n)## /g) || [];
if (h2.length < 4 || h2.length > 6) fails.push(`history: ${h2.length} ## sections, want 4-6`);
// Headings must be followed by a blank line — the renderer splits on \n\n
if (/## [^\n]+\n(?!\n)/.test(o.history || "")) fails.push("history: a ## heading must be followed by a blank line (\\n\\n), not a single \\n");

// Sources
const SRC_TYPES = ["manufacturer", "journalism", "reference-book", "encyclopedia", "club-forum", "registry", "auction-house", "market-data", "specialist", "government"];
const sources = o.sources || [];
if (sources.length < 12) fails.push(`sources: ${sources.length}, floor 12`);
const refs = new Set();
for (const s of sources) {
  if (!s.ref || !s.title || !s.url || !s.publisher) fails.push(`source missing ref/title/url/publisher: ${s.ref || s.title}`);
  if (refs.has(s.ref)) fails.push(`duplicate source ref ${s.ref}`);
  refs.add(s.ref);
  if (!SRC_TYPES.includes(s.sourceType)) fails.push(`source ${s.ref}: sourceType '${s.sourceType}' not in closed set`);
  if (!["high", "medium", "low"].includes(s.reliability)) fails.push(`source ${s.ref}: reliability invalid`);
  if (len(s.notes) < 40) fails.push(`source ${s.ref}: notes too thin (${len(s.notes)} chars) — say what it establishes`);
  if (/bringatrailer\.com|hagerty\.com\/valuation|cars\.bonhams\.com|glenmarch\.com/.test(s.url)) fails.push(`source ${s.ref}: blocked-to-retrieval host, cannot have been fetched`);
  if ((s.publisher || "").length > 200) fails.push(`source ${s.ref}: publisher > 200 chars`);
}
// Claims
const SECTIONS = ["summary", "history", "specs", "production", "market", "problems"];
const claims = o.claims || [];
if (claims.length < 14) fails.push(`claims: ${claims.length}, floor 14`);
const used = new Set();
for (const c of claims) {
  if (!SECTIONS.includes(c.section)) fails.push(`claim section '${c.section}' not in closed set`);
  if (!["verified", "disputed", "unverified"].includes(c.status)) fails.push(`claim status '${c.status}' invalid`);
  if (!["high", "medium", "low"].includes(c.confidence)) fails.push(`claim confidence invalid`);
  if (len(c.claimText) < 40) fails.push(`claim too short: ${c.claimText}`);
  if (!Array.isArray(c.sourceRefs) || !c.sourceRefs.length) fails.push(`claim has no sourceRefs: ${(c.claimText || "").slice(0, 60)}`);
  for (const r of c.sourceRefs || []) { if (!refs.has(r)) fails.push(`claim sourceRef '${r}' does not resolve`); used.add(r); }
  if (c.status === "disputed" && len(c.conflictNote) < 40) fails.push(`disputed claim lacks conflictNote: ${(c.claimText || "").slice(0, 60)}`);
}
for (const r of refs) if (!used.has(r)) warns.push(`source ${r} is not referenced by any claim`);
if (o.productionTotal == null && !claims.some((c) => c.section === "production" && c.status === "disputed")) warns.push("productionTotal is null but no disputed production claim explains why");

// Banned copy and voice
const prose = ["summary", "history", "marketNotes", "whatToLookFor", "commonProblems", "valueTrajectory", "productionNotes"].map((k) => o[k] || "").join("\n");
for (const b of ["no commission", "zero commission", "guaranteed", "vetted", "we verify before it goes live", "get verified", "iconic", "legendary", "holy grail", "unicorn", "investment-grade"]) {
  if (new RegExp(`\\b${b}\\b`, "i").test(prose)) fails.push(`banned copy: "${b}"`);
}
if (/!/.test(prose)) fails.push("exclamation mark in prose");
if (/—/.test(prose)) fails.push("em dash (U+2014) in prose — rewrite as a sentence or use ' - '");
if (/\$\s?[\d,]+/.test(o.marketNotes || "") && !/as of (august|september) 2026/i.test(o.marketNotes || "")) fails.push("marketNotes quotes a dollar figure without an 'as of <month> 2026' stamp");
if (/\$\s?[\d,]+/.test(o.valueTrajectory || "") && !/as of (august|september) 2026/i.test(o.valueTrajectory || "")) fails.push("valueTrajectory quotes a dollar figure without an 'as of <month> 2026' stamp");
if (/<[a-z]+[^>]*>/i.test(prose)) fails.push("raw HTML in prose");


// ---------------------------------------------------------------------------
// US DATA STANDARD (MODEL-HISTORY-SPEC.md section 7a). Every rendered string is
// checked. Rule of thumb: a US reader must never have to convert anything.
// ---------------------------------------------------------------------------
const rendered = [];
for (const k of ["summary", "history", "marketNotes", "whatToLookFor", "commonProblems", "valueTrajectory", "productionNotes"]) rendered.push([k, o[k] || ""]);
for (const [k, v] of Object.entries(o.specs || {})) rendered.push([`specs.${k}`, String(v ?? "")]);
(o.notableTrims || []).forEach((t, i) => rendered.push([`notableTrims[${i}]`, `${t.name || ""} ${t.note || ""}`]));
(o.engines || []).forEach((e, i) => rendered.push([`engines[${i}]`, Object.values(e || {}).map((x) => String(x ?? "")).join(" ")]));
(o.claims || []).forEach((c, i) => rendered.push([`claims[${i}]`, `${c.claimText || ""} ${c.conflictNote || ""}`]));

const sentences = (text) => String(text).split(/(?<=[.;:!?])\s+|\n+/);
const hasUsd = (s) => /\$\s?[\d,]/.test(s);
const hasInch = (s) => /\d[\d,.]*\s?(?:in\b|in\.|inch|-inch|")/.test(s);
const NO_US_PRICE = /not (?:sold|offered|imported|listed)(?: new)? in (?:the )?(?:US|America|the United States)|no (?:verified |documented )?US (?:list )?price/i;
// A foreign figure that is not a price a reader would compare (a development loss, a
// charity result) needs no US equivalent.
const NON_PRICE = /in the red|development (?:cost|budget)|investment|\blosses?\b|turnover|revenue|prize money|charity/i;
const usFail = (loc, msg) => fails.push(`US standard [${loc}]: ${msg}`);

// 1. Foreign currency may appear only alongside a US dollar figure in the same sentence.
// A currency code only counts when it sits next to a figure: "CAD" is also computer-aided design.
const FOREIGN_CCY = /[£€¥₹]\s?[\d]|\b(?:GBP|EUR|DEM|CHF|CAD|AUD|JPY|SEK|NOK|ITL)\s?[\d]|[\d][\d,.]*\s?(?:GBP|EUR|DEM|CHF|CAD|AUD|JPY|SEK|NOK|ITL)\b|\b(?:lire|lira)\b|(?<![A-Za-z])DM\s?[\d]/;
// 2. Metric units with an exact US equivalent are never acceptable: convert them.
// Each entry: [metric pattern, US-equivalent pattern, message]. A metric figure is
// allowed only when the US figure is in the same sentence AND comes first.
const METRIC_UNITS = [
  [/\bbhp\b/i, /\d\s?hp\b/, "bhp -> hp"],
  [/\d\s?PS\b/, /\d\s?hp\b/, "PS -> hp"],
  [/\d\s?kW\b/, /\d\s?hp\b/, "kW -> hp"],
  [/\b([2-9]\d|\d{3,4})\s+CV\b/, /\d\s?hp\b/, "CV -> hp (2CV, 4CV and 'CV joint' are fine)"],
  [/\d\s?(?:Nm|N·m|kgm|kg-m|kgf)\b/, /\d\s?lb[ ·-]?ft\b/, "metric torque -> lb-ft"],
  [/\d[\d,.]*\s?(?:kg|kilograms?|tonnes?)\b/, /\d[\d,.]*\s?(?:lb|pounds)\b/, "kg -> lb"],
  [/\d[\d,.]*\s?(?:km\/h|kph)\b/, /\d[\d,.]*\s?mph\b/, "km/h -> mph"],
  [/\d[\d,.]*\s?(?:km|kilometres?|kilometers?|metres?|meters?)\b/, /\d[\d,.]*\s?(?:miles?|feet|ft\b|in\b|inch)/, "metric distance -> miles/feet/inches"],
  [/\b\d+\s?(?:°C|degrees C\b|deg C\b)/, /\d+\s?(?:°F|degrees F\b)/, "Celsius -> Fahrenheit"],
];
// mm is correct US practice for engine bore and stroke and for wheel bolt patterns.
const MM_OK = (sent) =>
  /bore|stroke|bolt pattern|bolt circle|\bPCD\b|offset/i.test(sent) ||
  /\b\d{1,3}(?:\.\d+)?\s*[x×]\s*\d{1,3}(?:\.\d+)?\s*mm\b/.test(sent);
// 3. British spellings.
// Organisation names are quoted material, not our spelling.
const PROPER_NOUNS = /Heritage Parts Centre|Centre for|Motorsport UK/g;
const UK_SPELLING = /\b(aluminium|tyres?|bonnets?|boot lids?|kerb|litres?|colours?|centres?|petrol(?!ic)|windscreens?|fibre|saloons?|programmes?|grey|moulded|organisations?|realise[a-z]*|recognise[a-z]*|standardise[a-z]*|utilise[a-z]*|neighbour[a-z]*|behaviour[a-z]*|defence|licence|axled)\b/i;

for (const [loc, text] of rendered) {
  if (!text) continue;
  for (const sent of sentences(text)) {
    const fx = FOREIGN_CCY.exec(sent);
    if (fx) {
      const usd = /\$\s?[\d,]/.exec(sent);
      if (NO_US_PRICE.test(sent) || NON_PRICE.test(sent)) { /* explicitly exempt */ }
      else if (!usd) usFail(loc, `foreign currency with no US dollar figure, and no statement that the car had no US price: "${sent.trim().slice(0, 110)}"`);
      else if (usd.index > fx.index) usFail(loc, `US dollar figure must come before the home-market figure: "${sent.trim().slice(0, 110)}"`);
    }
    for (const [re, us, msg] of METRIC_UNITS) {
      const mm = re.exec(sent);
      if (!mm) continue;
      const um = us.exec(sent);
      if (!um) { usFail(loc, `${msg}, no US figure in the sentence: "${sent.trim().slice(0, 110)}"`); continue; }
      // A metric figure that IS a proper name (an FIA record distance, a class) may lead,
      // as long as the US equivalent follows immediately in parentheses.
      const named = /\brecord\b|\bFIA\b|\bclass\b|Group [A-Z]/i.test(sent);
      if (um.index > mm.index && !named) usFail(loc, `${msg}, US figure must come first: "${sent.trim().slice(0, 110)}"`);
    }
    // mm is allowed for bore, stroke and bolt patterns, or alongside an inch figure.
    if (/\d[\d,.]*\s?mm\b/.test(sent) && !/bore|stroke/i.test(loc) && !MM_OK(sent) && !hasInch(sent)) {
      usFail(loc, `millimeters with no inch figure in the same sentence: "${sent.trim().slice(0, 110)}"`);
    }
    const sentNP = sent.replace(PROPER_NOUNS, "");
    if (UK_SPELLING.test(sentNP)) usFail(loc, `British spelling "${(sentNP.match(UK_SPELLING) || [])[0]}": "${sent.trim().slice(0, 90)}"`);
  }
  if (/[—–]/.test(text)) usFail(loc, "em or en dash: use ' - ' or rewrite");
  if (/\d\s?%/.test(text)) usFail(loc, "'%' symbol: spell out 'percent'");
}

for (const w of warns) console.log("WARN: " + w);
if (fails.length) { for (const f of fails) console.log("FAIL: " + f); process.exit(1); }
console.log(`OK ${o.slug}: ${sources.length} sources, ${claims.length} claims, ${claims.filter((c) => c.status === "disputed").length} disputed, history ${len(o.history)} chars, productionTotal ${o.productionTotal}`);
