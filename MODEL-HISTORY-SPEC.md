# Model History Seed — House Standard

Every research agent reads this file before writing anything. It is the only
style authority. Where this file and an existing seed disagree, this file wins.

The reference implementations are `src/lib/data/model-seed-corvette-c3.ts`
(21 sources) and `src/lib/data/model-seed-f40.ts` (14 sources). **Read one of
them in full before you start.** Match its depth, its register and its shape.

---

## 0. The one rule

**Fully Sorted's differentiator is that it tells the truth about what is not
known.** Every competitor prints a single confident production figure. We print
the disagreement. If two credible sources give different numbers, that conflict
is the most valuable thing on the page — surface it, never smooth it.

Never resolve a conflict by picking the more common number, the rounder number,
or the one the manufacturer prefers. See §5.

---

## 1. Where the file goes

Path: `src/lib/data/model-seed-<slug>.ts`
Export: `export const seed<PascalSlug> = { ... };`

Both already exist for all 37 models and are registered in
`src/app/api/admin/seed-models/route.ts`. **Do not touch the route.** Do not
rename an export. Do not create a new file. You are rewriting one file in place
and nothing else.

## 2. File shape

Quoted-JSON style, as in `model-seed-f40.ts` — not the older backtick/template
literal style. Prose fields are double-quoted strings with `\n` escapes for
paragraph breaks; markdown `##` headings inside `history` are expected.

Header comment, three lines:

```ts
/**
 * Researched model draft — <Make> <Model> (<years>).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
```

Do **not** include a `status` field — the seed route sets `status='draft'`.
Omit `heroPhoto` entirely; we do not have licensed imagery and a placeholder
URL is a liability.

## 3. Required fields and floors

| Field | Requirement |
|---|---|
| `slug` | `make/model` lowercase, unchanged from the existing file |
| `make`, `model` | unchanged |
| `generation`, `generationCode`, `trim` | fill or `null` — never invent a factory code |
| `yearStart`, `yearEnd` | model-year run of this generation |
| `bodyStyles` | array of strings, specific ("2-door Berlinetta (fixed-roof coupe)") |
| `engines` | array; displacement in cc, code, aspiration, output with rpm, per variant |
| `productionTotal` | integer **only if sources agree**, otherwise `null` — see §5 |
| `productionNotes` | 900–2,500 chars. Where the numbers came from and why they differ |
| `notableTrims` | 4–8 entries of `{ name, note }`; the note says why a collector cares |
| `specs` | 12–18 keys, snake_case. Include `layout`, `chassis`, `engine`, `power`, `torque`, `transmission`, `weight`, `acceleration`. Mark manufacturer claims as claims |
| `summary` | 700–1,100 chars, one paragraph, no headings |
| `history` | **3,000–4,200 chars**, 4–6 `##` sections |
| `marketNotes` | **1,000–1,700 chars** — see §6 |
| `whatToLookFor` | **1,000–2,000 chars** |
| `commonProblems` | **900–1,700 chars** |
| `valueTrajectory` | **900–1,300 chars** |
| `overallConfidence` | `"high"` \| `"medium"` \| `"low"` |
| `sources` | **12 minimum**, 16+ preferred |
| `claims` | **14 minimum** |

A file that comes in under a floor gets sent back. The current thin files sit at
1,600–2,300 chars of history and 4–8 sources; that is the problem you are fixing.

## 4. Sources

```ts
{
  "ref": "kebab-case-stable-id",
  "title": "Exact page title",
  "url": "https://...",
  "publisher": "Organisation",
  "sourceType": "journalism",
  "reliability": "high",
  "notes": "What THIS source specifically establishes — figures, dates, claims."
}
```

`sourceType` is a **closed set**. The corpus has drifted to 25+ ad-hoc values;
use only these:

`manufacturer` · `journalism` · `reference-book` · `encyclopedia` ·
`club-forum` · `registry` · `auction-house` · `market-data` · `specialist` ·
`government`

`reliability` is `high` | `medium` | `low`. Wikipedia is `encyclopedia` /
`medium` — usable as a pointer, never as the sole support for a contested
figure. Forums are `club-forum` / `low` and may support ownership and fault
patterns, never production numbers.

Every source must be **independently fetched and read**. Twelve sources that all
restate one Wikipedia paragraph is one source. Spread across: the manufacturer
or heritage archive, period road tests, a marque registry or club, at least two
current market sources, and specialist ownership writing.

`notes` must be specific enough that a reviewer can tell which claim rests on
which source without re-fetching. "General overview" is a failed note.

## 5. Claims — the honesty layer

```ts
{
  "section": "production",
  "claimText": "Full sentence, self-contained, readable out of context.",
  "confidence": "high",
  "status": "disputed",
  "sourceRefs": ["ref-a", "ref-b"],
  "conflictNote": "Source A states X. Source B states Y. Not resolved by any source consulted here."
}
```

`section` is a closed set: `summary` · `history` · `specs` · `production` ·
`market` · `problems`.
`status` is `verified` | `disputed` | `unverified`.

**The disputed protocol.** When credible sources disagree:

1. `status: "disputed"`
2. `conflictNote` naming each figure and who states it, ending with an explicit
   statement that it is unresolved
3. If the disagreement is about the production total, `productionTotal` is
   `null` and `productionNotes` carries the explanation

Ten of the twelve good seeds carry at least one dispute, so a clean run is
unusual. **But never manufacture a conflict to look thorough.** If you genuinely
found no disagreement, say so in the receipt and name the sources you checked the
production figure against. An invented dispute discredits the honesty layer far
more thoroughly than a missing one does.

`sourceRefs` must reference `ref` values that exist in `sources`. A claim with
one `sourceRef` needs a reason to be single-sourced.

## 6. Market data protocol

- Primary: **classic.com**. Every figure stamped **"as of August 2026"** in the
  prose. A market number without a date is a future lie.
- **Bring a Trailer returns 403 to automated retrieval.** Do not cite a BaT
  figure you could not fetch. Do not reconstruct one from memory.
- **Hagerty valuation pages redirect-loop.** Same rule.
- Auction results (RM Sotheby's, Gooding, Bonhams) are citable when you fetched
  the individual lot page. Name the house, the sale, the month and the year.
- Buyer's premium is charged **on top of** the advertised "Sold for". If you
  quote a hammer price, say which it is.
- Never state a value range you did not fetch. `null` and a sentence explaining
  the gap beats a plausible invention.

## 7. Voice

British-inflected, unhurried, factual. The register of a good marque registry
newsletter, not a listing site. Specific over emphatic: "213 cars were
federalised for the United States" does the work that "incredibly rare" does not.

Assume the reader knows what a camshaft is and does not know this particular car.

**Banned copy — retired site-wide, never reintroduce:**
"no commission" · "zero commission" · "guaranteed" · "vetted" ·
"we verify before it goes live" · "get verified"

Also avoid: "iconic", "legendary", "holy grail", "unicorn", "investment-grade",
exclamation marks, and any sentence that tells the reader how to feel.

Do not give buying or valuation advice in the imperative — describe what
separates a good car from a bad one and let the reader conclude.

## 8. Fabrication — hard bans

- No figure, date, chassis range or production number that is not in a source
  you fetched in this session.
- No source entry for a page you did not successfully retrieve. A dead URL in
  `sources` is worse than a missing source.
- No filling a `null` from memory because the shape looks incomplete.
- No inferring a US-market figure from a global one, or a generation total from
  a model-line total.
- If you cannot reach the source floor of 12 for an obscure model, deliver what
  you have, set `overallConfidence: "low"`, and say so in the receipt. Under-
  delivering is recoverable; a fabricated figure on a page whose whole pitch is
  honesty is not.

## 9. Before you finish

1. `npx tsc --noEmit` must pass, or at minimum your file must parse.
2. Every `sourceRefs` entry resolves to a `ref` in `sources`.
3. Every `status: "disputed"` claim has a `conflictNote`.
4. No banned copy present.
5. Every market figure carries its "as of August 2026" stamp.

## 10. Your return value

Return **only** this JSON. Never return file content — it is already on disk.

```json
{
  "slug": "ferrari/f40",
  "wrote": true,
  "sources": 14,
  "claims": 14,
  "disputed": 2,
  "historyChars": 3895,
  "productionTotal": null,
  "overallConfidence": "high",
  "productionCheckedAgainst": ["ref-a", "ref-b"],
  "notes": "One line, only if something needs a human. Otherwise empty."
}
```
