#!/usr/bin/env node
// Checks that every dollar figure and every comma-grouped count in a claim's
// claimText appears in at least one of that claim's evidence quotes.
//
// A claim that states 22,789 must cite a quote that contains 22,789. A page
// title or a nearby sentence is not evidence. Figures a seed computes itself
// (a sum of table rows) cannot be quoted: name them in the claim's
// `computed` array, e.g. "computed": ["341,870"], and this check skips them.
//
// Usage: node scripts/check-claim-figures.mjs src/lib/data/model-seed-<slug>.ts [...]
// Exit 0 = every figure is carried or declared computed; exit 1 = gaps listed.
// It needs no network. Whether the quote is really on the page is a separate
// check (scripts/verify-quotes.mjs, or the checker agent in MODEL-HISTORY-DAILY.md).
import fs from "node:fs";

const files = process.argv.slice(2);
if (!files.length) { console.error("usage: check-claim-figures.mjs <seed file> [...]"); process.exit(2); }

const bare = (s) => s.replace(/[$,\s]/g, "");
let failed = false;

for (const file of files) {
  const src = fs.readFileSync(file, "utf8");
  const m = src.match(/export const (\w+)\s*=\s*/);
  if (!m) { console.log(`FAIL ${file}: no export found`); failed = true; continue; }
  let o;
  try {
    const body = src.slice(m.index + m[0].length).trim().replace(/;\s*$/, "").replace(/\}\s*as const\s*$/, "}");
    o = (0, eval)("(" + body + ")");
  } catch (e) { console.log(`FAIL ${file}: does not parse (${e.message})`); failed = true; continue; }

  const gaps = [];
  (o.claims || []).forEach((c, i) => {
    const quotes = bare((c.evidence || []).map((e) => e.quote || "").join(" "));
    const computed = new Set((c.computed || []).map(bare));
    const figures = new Set([...String(c.claimText || "").matchAll(/\$[\d,]+(?:\.\d+)?|\b\d{1,3}(?:,\d{3})+\b/g)].map((x) => x[0].replace(/,$/, "")));
    for (const f of figures) {
      const b = bare(f);
      if (!quotes.includes(b) && !computed.has(b)) gaps.push(`claims[${i}] ${f}`);
    }
  });

  if (gaps.length) {
    failed = true;
    console.log(`FAIL ${o.slug}: ${gaps.length} figure(s) with no carrying quote`);
    for (const g of gaps) console.log("  " + g);
  } else {
    console.log(`OK ${o.slug}: every claim figure is carried by a quote or declared computed`);
  }
}
process.exit(failed ? 1 : 0);
