#!/usr/bin/env node
// Mechanical check for a chassis-register seed file against REGISTER-SPEC.md.
// Usage: node scripts/validate-register-seed.mjs src/lib/data/register/ferrari-f40.ts
// Exit 0 = passes (warnings allowed); exit 1 = prints every failure.
import fs from "node:fs";

const file = process.argv[2];
if (!file) { console.error("usage: validate-register-seed.mjs <file>"); process.exit(2); }

// Seed files are `import type ...;` + `export const registerX: RegisterSeed = { ...json... };`
const src = fs.readFileSync(file, "utf8").replace(/^\s*import type[^\n]*\n/m, "");
const exportMatch = src.match(/export const (\w+)\s*(?::\s*RegisterSeed)?\s*=\s*/);
if (!exportMatch) { console.log("FAIL: no `export const registerX: RegisterSeed =` found"); process.exit(1); }
const body = src.slice(exportMatch.index + exportMatch[0].length).trim().replace(/;\s*$/, "");
let seed;
try { seed = JSON.parse(body); } catch (e) {
  try { seed = (0, eval)("(" + body + ")"); } catch (e2) { console.log("FAIL: does not parse as JSON or an object literal: " + e2.message); process.exit(1); }
}

const fails = [], warns = [];
const fail = (m) => fails.push(m);
const warn = (m) => warns.push(m);

const EVENT_TYPES = ["auction", "private_sale", "listing", "show", "registry", "factory", "service", "article"];
const OUTCOMES = ["sold", "not_sold", "withdrawn", "listed", "shown", "unknown"];
const SOURCE_TYPES = ["auction-house", "market-data", "registry", "journalism", "manufacturer", "club-forum", "owner"];
const STATUSES = ["confirmed", "disputed", "owner_reported"];
const CONFIDENCE = ["high", "medium", "low"];
const MARKET_SPECS = ["US", "Europe", "Japan", "UK", "Switzerland", "Middle East"];
// Variant closed set per model. Add entries as new registers are seeded.
const VARIANTS = {
  "ferrari/f40": ["F40", "F40 LM", "F40 GTE", "F40 Competizione", "F40 Prototype"],
};
const LIMITS = {
  chassis: 64, vin: 32, variant: 80, marketSpec: 40, exteriorColor: 80, interiorColor: 80, engineNumber: 64,
  title: 300, venue: 200, location: 200, sourceTitle: 300, sourcePublisher: 120,
};
const DATE_RE = /^\d{4}(-\d{2}(-\d{2})?)?$/;

// Banned content. The owner-name guard is a warning (it cannot tell a
// dealer from a person); everything else fails.
function checkText(where, text) {
  if (typeof text !== "string" || !text) return;
  if (/—/.test(text)) fail(`${where}: em dash (U+2014); use a comma or " - "`);
  for (const w of ["stunning", "rare", "investment"]) {
    if (new RegExp(`\\b${w}\\b`, "i").test(text)) fail(`${where}: banned word "${w}"`);
  }
  const mn = /(\bstated\s+)?\bmatching[\s-]numbers\b/gi;
  let m;
  while ((m = mn.exec(text))) if (!m[1]) fail(`${where}: "matching numbers" must be preceded by "stated"`);
  if (/\b(Mr|Mrs|Ms|Dr)\.\s/.test(text)) warn(`${where}: looks like a personal title ("Mr.", "Mrs.", "Dr."), owner names are never recorded`);
  if (/\bconsigned by\s+[A-Z][a-z]+\s+[A-Z][a-z]+/.test(text)) warn(`${where}: "consigned by <Name> <Name>" pattern, check it is not a private person`);
}

function walkStrings(where, obj) {
  if (typeof obj === "string") return checkText(where, obj);
  if (Array.isArray(obj)) return obj.forEach((v, i) => walkStrings(`${where}[${i}]`, v));
  if (obj && typeof obj === "object") for (const [k, v] of Object.entries(obj)) walkStrings(`${where}.${k}`, v);
}

// Top level
if (!seed || typeof seed !== "object") { console.log("FAIL: seed is not an object"); process.exit(1); }
if (!seed.modelSlug || !/^[a-z0-9-]+\/[a-z0-9-]+$/.test(seed.modelSlug)) fail(`modelSlug must be make/model lowercase kebab: ${seed.modelSlug}`);
if (!Array.isArray(seed.chassis) || !seed.chassis.length) fail("chassis must be a non-empty array");
const variants = VARIANTS[seed.modelSlug] || null;

const seen = new Set();
let eventCount = 0, disputedCount = 0;
for (const c of seed.chassis || []) {
  const id = c.chassis || "(no chassis)";
  const where = `chassis ${id}`;
  if (typeof c.chassis !== "string" || !c.chassis) fail(`${where}: chassis empty`);
  else if (!/^[A-Z0-9]+$/.test(c.chassis)) fail(`${where}: chassis must be uppercase A-Z0-9 with no spaces or "#"`);
  if (seen.has(c.chassis)) fail(`${where}: duplicate chassis`);
  seen.add(c.chassis);
  if (c.vin != null && !/^[A-Z0-9]{8,32}$/.test(c.vin)) fail(`${where}: vin must be null or 8-32 uppercase A-Z0-9 chars: ${c.vin}`);
  if (c.buildYear != null && (!Number.isInteger(c.buildYear) || c.buildYear < 1880 || c.buildYear > 2100)) fail(`${where}: buildYear not a plausible integer`);
  if (c.confidence != null && !CONFIDENCE.includes(c.confidence)) fail(`${where}: confidence "${c.confidence}" not high|medium|low`);
  if (variants && c.variant != null && !variants.includes(c.variant)) fail(`${where}: variant "${c.variant}" not in closed set for ${seed.modelSlug}`);
  if (c.marketSpec != null && !MARKET_SPECS.includes(c.marketSpec)) fail(`${where}: marketSpec "${c.marketSpec}" not in closed set`);
  for (const k of ["chassis", "vin", "variant", "marketSpec", "exteriorColor", "interiorColor", "engineNumber"]) {
    if (c[k] != null && String(c[k]).length > LIMITS[k]) fail(`${where}: ${k} is ${String(c[k]).length} chars; VARCHAR(${LIMITS[k]})`);
  }
  if (!Array.isArray(c.events) || !c.events.length) fail(`${where}: events must be a non-empty array`);
  const eventKeys = new Set();
  for (const [i, e] of (c.events || []).entries()) {
    eventCount++;
    const ew = `${where} event ${i + 1} (${e.title || "untitled"})`;
    if (!EVENT_TYPES.includes(e.eventType)) fail(`${ew}: eventType "${e.eventType}" not in closed set`);
    if (e.outcome != null && !OUTCOMES.includes(e.outcome)) fail(`${ew}: outcome "${e.outcome}" not in closed set`);
    if (e.sourceType != null && !SOURCE_TYPES.includes(e.sourceType)) fail(`${ew}: sourceType "${e.sourceType}" not in closed set`);
    if (e.status != null && !STATUSES.includes(e.status)) fail(`${ew}: status "${e.status}" not in closed set`);
    if (e.eventDate != null && !DATE_RE.test(e.eventDate)) fail(`${ew}: eventDate "${e.eventDate}" not YYYY, YYYY-MM or YYYY-MM-DD`);
    if (typeof e.sourceUrl !== "string" || !/^https?:\/\//.test(e.sourceUrl)) fail(`${ew}: sourceUrl must be an http(s) URL`);
    if (typeof e.title !== "string" || !e.title.trim()) fail(`${ew}: title missing`);
    if (e.priceAmount != null && typeof e.priceAmount !== "number") fail(`${ew}: priceAmount must be a number or null`);
    if (e.priceAmount != null && !/^[A-Z]{3}$/.test(e.priceCurrency || "")) fail(`${ew}: priceCurrency must be 3 uppercase letters when priceAmount is set`);
    for (const k of ["estimateLow", "estimateHigh", "mileage"]) if (e[k] != null && typeof e[k] !== "number") fail(`${ew}: ${k} must be a number or null`);
    if (e.mileage != null && e.mileageUnit != null && !["mi", "km"].includes(e.mileageUnit)) fail(`${ew}: mileageUnit must be mi or km`);
    if (e.details != null && String(e.details).length > 300) fail(`${ew}: details is ${String(e.details).length} chars, ceiling 300`);
    if (e.status === "disputed" && !(e.conflictNote && String(e.conflictNote).trim())) fail(`${ew}: disputed without a conflictNote`);
    if (e.status === "disputed") disputedCount++;
    for (const k of ["title", "venue", "location", "sourceTitle", "sourcePublisher"]) {
      if (e[k] != null && String(e[k]).length > LIMITS[k]) fail(`${ew}: ${k} is ${String(e[k]).length} chars; VARCHAR(${LIMITS[k]})`);
    }
    const key = `${e.sourceUrl}|${e.eventDate ?? ""}`;
    if (eventKeys.has(key)) warn(`${ew}: duplicate (sourceUrl, eventDate) within the chassis; the seed route will upsert one over the other`);
    eventKeys.add(key);
  }
}

walkStrings("seed", seed);

for (const w of warns) console.log("WARN: " + w);
for (const f of fails) console.log("FAIL: " + f);
console.log(`${fails.length ? "FAIL" : "PASS"}: ${file}: ${(seed.chassis || []).length} chassis, ${eventCount} events, ${disputedCount} disputed, ${fails.length} failures, ${warns.length} warnings`);
process.exit(fails.length ? 1 : 0);
