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

// ---- marque checks (MARQUE-HISTORY-SPEC.md) ----
const fails = [], warns = [];
const len = (s) => (typeof s === "string" ? s.length : 0);
const SRC_TYPES = ["manufacturer", "journalism", "reference-book", "encyclopedia", "club-forum", "registry", "auction-house", "market-data", "specialist", "government"];
const SECTIONS = ["founding", "people", "racing", "models", "america", "ownership", "today"];
const range = (name, n, lo, hi) => { if (n < lo) fails.push(`${name}: ${n}, floor ${lo}`); if (n > hi) fails.push(`${name}: ${n}, ceiling ${hi}`); };
for (const k of ["slug", "name", "founded", "headquarters", "summary", "history", "inAmerica"]) if (!len(o[k])) fails.push(`missing ${k}`);
const base = file.split("/").pop().replace(/\.ts$/, "");
if (o.slug !== base) fails.push(`slug '${o.slug}' does not match file name '${base}'`);
range("summary chars", len(o.summary), 120, 320);
range("history chars", len(o.history), 3600, 6500);
range("inAmerica chars", len(o.inAmerica), 400, 1200);
const sources = o.sources || [], claims = o.claims || [], timeline = o.timeline || [];
range("sources", sources.length, 8, 18);
range("claims", claims.length, 10, 24);
range("timeline", timeline.length, 8, 16);
const refs = new Set(), used = new Set();
for (const s of sources) {
  if (refs.has(s.ref)) fails.push(`duplicate source ref ${s.ref}`); refs.add(s.ref);
  if (!SRC_TYPES.includes(s.sourceType)) fails.push(`source ${s.ref}: sourceType '${s.sourceType}' not in closed set`);
  if (!["high", "medium", "low"].includes(s.reliability)) fails.push(`source ${s.ref}: reliability invalid`);
  if (!/^https?:\/\//.test(s.url || "") && s.sourceType !== "reference-book") fails.push(`source ${s.ref}: url missing`);
  if (len(s.notes) < 40) fails.push(`source ${s.ref}: notes too thin`);
  if (len(s.title) > 300 || len(s.publisher) > 200) fails.push(`source ${s.ref}: title/publisher too long`);
}
for (const c of claims) {
  if (!SECTIONS.includes(c.section)) fails.push(`claim section '${c.section}' not in ${SECTIONS.join("|")}`);
  if (!["verified", "disputed", "unverified"].includes(c.status)) fails.push(`claim status '${c.status}' invalid`);
  if (!["high", "medium", "low"].includes(c.confidence)) fails.push(`claim confidence invalid`);
  if (c.status === "disputed" && len(c.conflictNote) < 20) fails.push(`disputed claim needs conflictNote: ${(c.claimText || "").slice(0, 50)}`);
  if (!Array.isArray(c.sourceRefs) || !c.sourceRefs.length) fails.push(`claim has no sourceRefs`);
  for (const r of c.sourceRefs || []) { if (!refs.has(r)) fails.push(`claim sourceRef '${r}' does not resolve`); used.add(r); }
  if (!Array.isArray(c.evidence) || !c.evidence.length) fails.push(`claim has no evidence: ${(c.claimText || "").slice(0, 50)}`);
}
for (const t of timeline) {
  if (!Number.isInteger(t.year)) fails.push(`timeline year not an integer: ${t.year}`);
  if (len(t.event) < 10 || len(t.event) > 120) fails.push(`timeline event length ${len(t.event)}: ${t.event}`);
  for (const r of t.sourceRefs || []) { if (!refs.has(r)) fails.push(`timeline sourceRef '${r}' does not resolve`); used.add(r); }
  if (!(t.sourceRefs || []).length) fails.push(`timeline entry has no sourceRefs: ${t.year}`);
}
for (const r of refs) if (!used.has(r)) fails.push(`source ${r} is not cited by any claim or timeline entry`);
const prose = ["summary", "history", "inAmerica"].map((k) => o[k] || "").join("\n") + "\n" + timeline.map((t) => t.event).join("\n");
for (const b of ["iconic", "legendary", "storied", "timeless", "boasts", "nestled", "holy grail", "unicorn", "investment-grade", "vetted", "guaranteed"]) if (new RegExp(`\\b${b}\\b`, "i").test(prose)) fails.push(`banned word: "${b}"`);
if (/—/.test(prose)) fails.push("em dash in prose");
if (/!/.test(prose)) fails.push("exclamation mark in prose");
if (/\$\s?\d/.test(o.history || "")) fails.push("price in history; values belong on model pages");
if (/\[[^\]]+\]\(|\*\*|^\s*[-*] /m.test(o.history || "")) fails.push("history has links, bold or bullets; plain paragraphs only");
const heads = (o.history || "").match(/^## .+$/gm) || [];
if (heads.length < 3 || heads.length > 6) fails.push(`history headings: ${heads.length}, want 3 to 6`);
if (/^## .+\n(?!\n)/m.test(o.history || "")) fails.push("heading not followed by a blank line");
if (/\b(colour|honour|favourite|tyre|aluminium|licence|programme|centre)\b/i.test(prose)) fails.push("British spelling in prose");
if (fails.length) { console.log("FAIL " + (o.slug || file)); for (const f of fails) console.log("  - " + f); process.exit(1); }
for (const w of warns) console.log("  warn: " + w);
console.log(`OK ${o.slug}: ${sources.length} sources, ${claims.length} claims, ${claims.filter((c) => c.status === "disputed").length} disputed, history ${len(o.history)} chars, timeline ${timeline.length}`);
