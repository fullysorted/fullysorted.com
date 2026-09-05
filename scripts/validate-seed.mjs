#!/usr/bin/env node
// Mechanical check for a model seed file against MODEL-HISTORY-SPEC.md.
// Usage: node scripts/validate-seed.mjs src/lib/data/model-seed-<slug>.ts
// Exit 0 = passes; exit 1 = prints every failure. Warnings do not fail.
import fs from "node:fs";

const file = process.argv[2];
if (!file) { console.error("usage: validate-seed.mjs <file>"); process.exit(2); }
const src = fs.readFileSync(file, "utf8");
const exportMatch = src.match(/export const (\w+)\s*=\s*/);
if (!exportMatch) { console.log("FAIL: no `export const seedX =` found"); process.exit(1); }
const body = src.slice(exportMatch.index + exportMatch[0].length).replace(/;\s*$/, "");
let o;
try { o = (0, eval)("(" + body + ")"); } catch (e) { console.log("FAIL: does not parse as a plain object literal: " + e.message); process.exit(1); }

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
range("summary", 700, 1100);
if (/^##|\n##/.test(o.summary || "")) fails.push("summary must not contain headings");
range("history", 3000, 4200);
range("marketNotes", 1000, 1700);
range("whatToLookFor", 1000, 2000);
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

for (const w of warns) console.log("WARN: " + w);
if (fails.length) { for (const f of fails) console.log("FAIL: " + f); process.exit(1); }
console.log(`OK ${o.slug}: ${sources.length} sources, ${claims.length} claims, ${claims.filter((c) => c.status === "disputed").length} disputed, history ${len(o.history)} chars, productionTotal ${o.productionTotal}`);
