#!/usr/bin/env node
// Merge extraction-agent rows into one chassis-register seed file.
//
// Usage: node scripts/merge-register.mjs <dir-with-jsonl> <modelSlug>
//   e.g. node scripts/merge-register.mjs tmp/register/ferrari-f40 ferrari/f40
//
// Every *.jsonl under the directory holds one line per event:
//   { chassis, vin, buildYear, variant, marketSpec, exteriorColor, interiorColor,
//     engineNumber, notes, confidence, event: { ...RegisterSeedEvent } }
// with the chassis-level facts repeated on each line. Lines are grouped by
// normalized chassis (derived from the VIN when missing), chassis-level fields
// merge first-non-null-wins, conflicting VIN or buildYear values become a
// disputed `registry` event, events dedupe on (sourceUrl, eventDate), and two
// auctions on the same date with different prices are both flagged disputed.
// Nothing is ever dropped silently and nothing is resolved by choosing.
import fs from "node:fs";
import path from "node:path";

const dir = process.argv[2];
const modelSlug = process.argv[3];
if (!dir || !modelSlug || !/^[a-z0-9-]+\/[a-z0-9-]+$/.test(modelSlug)) {
  console.error("usage: merge-register.mjs <dir-with-jsonl> <make/model>");
  process.exit(2);
}

// Mirrors src/lib/register/chassis.ts. Kept inline so the script runs without a build.
function normalizeVin(input) {
  if (!input) return null;
  const v = String(input).toUpperCase().replace(/[^A-Z0-9]/g, "");
  return v.length >= 8 ? v : null;
}
function normalizeChassis(input) {
  if (!input) return null;
  const c = String(input).toUpperCase().replace(/^#/, "").replace(/[^A-Z0-9]/g, "");
  return c.length ? c : null;
}
function chassisFromVin(vin) {
  const v = normalizeVin(vin);
  if (!v) return null;
  if (v.startsWith("ZFF") && v.length === 17) {
    const digits = v.slice(11).replace(/\D/g, "");
    if (!digits) return null;
    const n = String(parseInt(digits, 10));
    return n === "NaN" ? null : n;
  }
  return null;
}
function chassisSortKey(chassis) {
  const m = chassis.match(/^(\D*)(\d+)(.*)$/);
  if (!m) return `~${chassis}`;
  return `${m[1]}${m[2].padStart(10, "0")}${m[3]}`;
}
const pascal = (s) => s.split(/[^a-z0-9]+/i).filter(Boolean).map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join("");

// Read every jsonl file.
function listJsonl(d) {
  const out = [];
  for (const ent of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, ent.name);
    if (ent.isDirectory()) out.push(...listJsonl(p));
    else if (ent.isFile() && ent.name.endsWith(".jsonl")) out.push(p);
  }
  return out.sort();
}
const files = listJsonl(dir);
if (!files.length) { console.error(`no *.jsonl files under ${dir}`); process.exit(1); }

const CHASSIS_FIELDS = ["vin", "buildYear", "variant", "marketSpec", "exteriorColor", "interiorColor", "engineNumber", "notes", "confidence"];
const EVENT_FIELDS = ["eventType", "eventDate", "title", "venue", "location", "outcome", "priceAmount", "priceCurrency", "estimateLow", "estimateHigh", "mileage", "mileageUnit", "details", "sourceUrl", "sourceTitle", "sourcePublisher", "sourceType", "status", "conflictNote"];
const nz = (v) => (v === undefined || v === "" ? null : v);

const groups = new Map(); // chassis -> { facts, sources: {field: sourceUrl}, events: [] }
let lines = 0, skipped = 0;
for (const file of files) {
  const text = fs.readFileSync(file, "utf8");
  for (const [i, raw] of text.split("\n").entries()) {
    const line = raw.trim();
    if (!line) continue;
    lines++;
    let row;
    try { row = JSON.parse(line); } catch (e) { console.error(`${file}:${i + 1}: bad JSON, skipped (${e.message})`); skipped++; continue; }
    const vin = normalizeVin(row.vin);
    const chassis = normalizeChassis(row.chassis) || chassisFromVin(vin);
    if (!chassis) { console.error(`${file}:${i + 1}: no chassis and no derivable VIN, skipped`); skipped++; continue; }
    const ev = row.event;
    if (!ev || typeof ev !== "object" || !ev.sourceUrl) { console.error(`${file}:${i + 1}: chassis ${chassis} line has no event with a sourceUrl, skipped`); skipped++; continue; }

    let g = groups.get(chassis);
    if (!g) { g = { chassis, facts: {}, sources: {}, events: [], conflicts: [] }; groups.set(chassis, g); }

    // Chassis-level merge: first non-null wins. VIN and buildYear conflicts are recorded, never chosen.
    const incoming = { ...row, vin };
    for (const k of CHASSIS_FIELDS) {
      const v = nz(incoming[k]);
      if (v == null) continue;
      if (g.facts[k] == null) { g.facts[k] = v; g.sources[k] = ev.sourceUrl; continue; }
      if ((k === "vin" || k === "buildYear") && String(g.facts[k]) !== String(v)) {
        g.conflicts.push({ field: k, first: g.facts[k], firstUrl: g.sources[k], second: v, secondUrl: ev.sourceUrl });
      }
    }

    const e = {};
    for (const k of EVENT_FIELDS) e[k] = nz(ev[k]);
    if (!e.status) e.status = "confirmed";
    g.events.push(e);
  }
}

const seenConflict = new Set();
let dupes = 0, priceDisputes = 0, fieldDisputes = 0;
const chassisOut = [];
for (const g of [...groups.values()].sort((a, b) => (chassisSortKey(a.chassis) < chassisSortKey(b.chassis) ? -1 : 1))) {
  // Dedupe events on (sourceUrl, eventDate); the first occurrence wins, later
  // ones only fill fields the first left null.
  const byKey = new Map();
  for (const e of g.events) {
    const key = `${e.sourceUrl}|${e.eventDate ?? ""}`;
    const prev = byKey.get(key);
    if (!prev) { byKey.set(key, e); continue; }
    dupes++;
    for (const k of EVENT_FIELDS) if (prev[k] == null && e[k] != null) prev[k] = e[k];
  }
  const events = [...byKey.values()];

  // Two auctions on the same day with different prices: both disputed.
  const auctionsByDate = new Map();
  for (const e of events) {
    if (e.eventType !== "auction" || !e.eventDate) continue;
    if (!auctionsByDate.has(e.eventDate)) auctionsByDate.set(e.eventDate, []);
    auctionsByDate.get(e.eventDate).push(e);
  }
  for (const [date, list] of auctionsByDate) {
    const prices = new Set(list.map((e) => (e.priceAmount == null ? "none" : `${e.priceAmount} ${e.priceCurrency || ""}`)));
    if (list.length < 2 || prices.size < 2) continue;
    priceDisputes++;
    const desc = list.map((e) => `${e.priceAmount == null ? "no price" : `${e.priceAmount} ${e.priceCurrency || ""}`.trim()} (${e.sourceUrl})`).join(" versus ");
    for (const e of list) {
      e.status = "disputed";
      e.conflictNote = e.conflictNote ? `${e.conflictNote} Also: ` : "";
      e.conflictNote += `Sources disagree on the ${date} auction price: ${desc}.`;
    }
  }

  // VIN / buildYear conflicts become a disputed registry event citing the second source.
  for (const c of g.conflicts) {
    const key = `${g.chassis}|${c.field}|${c.first}|${c.second}`;
    if (seenConflict.has(key)) continue;
    seenConflict.add(key);
    fieldDisputes++;
    const label = c.field === "vin" ? "VIN" : "model year";
    events.push({
      // Undated on purpose: the seed route keys events on (sourceUrl, eventDate)
      // and this record must not overwrite the real event from the same page.
      eventType: "registry", eventDate: null, title: `Sources disagree on ${label}`,
      venue: null, location: null, outcome: null, priceAmount: null, priceCurrency: null,
      estimateLow: null, estimateHigh: null, mileage: null, mileageUnit: null,
      details: null, sourceUrl: c.secondUrl, sourceTitle: null, sourcePublisher: null, sourceType: null,
      status: "disputed",
      conflictNote: `${label} is given as ${c.first} by ${c.firstUrl} and as ${c.second} by ${c.secondUrl}. The first value is shown on the chassis; neither has been chosen as correct.`,
    });
  }

  events.sort((a, b) => {
    if (a.eventDate == null && b.eventDate == null) return 0;
    if (a.eventDate == null) return 1;
    if (b.eventDate == null) return -1;
    return a.eventDate < b.eventDate ? -1 : a.eventDate > b.eventDate ? 1 : 0;
  });

  chassisOut.push({
    chassis: g.chassis,
    vin: g.facts.vin ?? null,
    buildYear: g.facts.buildYear ?? null,
    variant: g.facts.variant ?? null,
    marketSpec: g.facts.marketSpec ?? null,
    exteriorColor: g.facts.exteriorColor ?? null,
    interiorColor: g.facts.interiorColor ?? null,
    engineNumber: g.facts.engineNumber ?? null,
    notes: g.facts.notes ?? null,
    confidence: g.facts.confidence ?? "medium",
    events,
  });
}

const seed = { modelSlug, chassis: chassisOut };
const [make, model] = modelSlug.split("/");
const exportName = `register${pascal(make)}${pascal(model)}`;
const outDir = path.join("src", "lib", "data", "register");
const outFile = path.join(outDir, `${make}-${model}.ts`);
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, `import type { RegisterSeed } from '@/lib/data/register';\n\nexport const ${exportName}: RegisterSeed = ${JSON.stringify(seed, null, 1)};\n`);

// Register the export in index.ts when it is not there already.
const indexFile = path.join(outDir, "index.ts");
let index = fs.readFileSync(indexFile, "utf8");
if (!index.includes(exportName)) {
  const importLine = `import { ${exportName} } from './${make}-${model}';\n`;
  const lastImport = index.lastIndexOf("\nimport ");
  const insertAt = lastImport >= 0 ? index.indexOf("\n", lastImport + 1) + 1 : index.indexOf("\n") + 1;
  index = index.slice(0, insertAt) + importLine + index.slice(insertAt);
  if (/REGISTER_SEEDS: RegisterSeed\[\] = \[\];/.test(index)) {
    index = index.replace(/REGISTER_SEEDS: RegisterSeed\[\] = \[\];/, `REGISTER_SEEDS: RegisterSeed[] = [${exportName}];`);
  } else if (/REGISTER_SEEDS: RegisterSeed\[\] = \[([^\]]*)\];/.test(index)) {
    index = index.replace(/REGISTER_SEEDS: RegisterSeed\[\] = \[([^\]]*)\];/, (_, inner) => `REGISTER_SEEDS: RegisterSeed[] = [${inner.trim().replace(/,\s*$/, "")}, ${exportName}];`);
  } else {
    index += `\nREGISTER_SEEDS.push(${exportName});\n`;
  }
  fs.writeFileSync(indexFile, index);
  console.log(`registered ${exportName} in ${indexFile}`);
}

const eventTotal = chassisOut.reduce((n, c) => n + c.events.length, 0);
console.log(`${outFile}: ${chassisOut.length} chassis, ${eventTotal} events from ${lines} lines in ${files.length} files (${skipped} skipped, ${dupes} duplicate events merged, ${priceDisputes} price conflicts, ${fieldDisputes} VIN/year conflicts)`);
console.log(`next: node scripts/validate-register-seed.mjs ${outFile}`);
