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
Omit `heroPhoto` and `heroPhotoCredit`; the orchestrator adds them afterwards
from the Wikimedia Commons pipeline (`public/images/models/credits.json`). A
placeholder URL is a liability.

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
| `summary` | 700–1,150 chars, one paragraph, no headings |
| `history` | **3,000–4,300 chars**, 4–6 `##` sections |
| `marketNotes` | **1,000–1,700 chars** — see §6 |
| `whatToLookFor` | **1,000–2,000 chars** |
| `commonProblems` | **900–1,700 chars** |
| `valueTrajectory` | **900–1,300 chars** |
| `overallConfidence` | `"high"` \| `"medium"` \| `"low"` |
| `sources` | **12 minimum**, 16+ preferred |
| `claims` | **14 minimum** |

**These are ranges, not minimums.** A field over its ceiling fails review the
same way one under its floor does — overlong `marketNotes` is padding, and an
18+ key `specs` block is usually restating the engine string. The exception is
`sources` and `claims`: exceeding those is fine provided every source is
referenced by at least one claim. Expect a finished file of 26,000-35,000 bytes.

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

## 4a. Source coverage map: the US reader's questions first

"Every source possible" does not mean every page on the internet. It means
every **category** below is checked once, in this order, and the fetch stops
when a category is covered. A source that answers no question in this map is
not worth a fetch.

The reader is an American owner or buyer. Their questions, in order:

1. **What exactly was sold in the US, and when.** US model years (not launch
   year in Europe), federalization changes, US-only trims and deletions, what
   was never imported. Sources: the manufacturer's US press release or press
   kit (media.<make>.com, media sites, or the archived US brochure),
   NHTSA (recalls, TSBs, VIN decoder for model-year confirmation), EPA fuel
   economy data for the US-spec engine (fueleconomy.gov).
2. **What it cost new, in dollars.** US MSRP by model year from the US press
   release, a period US road test, or a dealer price sheet. Never a converted
   home-market price. If none is documented: say so in `productionNotes`
   (spec 7a NO_US_PRICE phrase).
3. **What the period press said, here.** At least two US period road tests:
   Car and Driver, Road & Track, MotorTrend, Automobile, Autoweek. Their
   archives are fetchable for most cars since the 1990s; for older cars use
   the magazine's own retrospective or a reprint on the marque club site. A
   British test (Autocar, EVO, CAR) is a supplementary source for driving
   character, never for price, output or model-year facts, because the
   home-market car is often a different spec.
4. **How many were built, and how many of THIS variant.** Manufacturer heritage
   or archive first, then the marque registry or club (Aston Martin Heritage
   Trust, Porsche Club of America, Ferrari Club of America, Corvette Registry
   and their equivalents), then the reference books via Google Books snippets.
   Wikipedia is a pointer to these, never the citation.
5. **What goes wrong and what it costs to fix here.** US specialist shops and
   their tech articles, owner forums (6speedonline, Rennlist, FerrariChat,
   PistonHeads is UK and gets `low`), NHTSA complaint counts. Label a forum
   figure as a forum figure.
6. **What it trades for, here, now.** classic.com first (US-dollar, dated).
   Then individual lot pages: RM Sotheby's, Gooding, Broad Arrow, Mecum,
   Barrett-Jackson, and Cars and Bids or BaT results where fetchable (BaT
   itself is 403; BaT results quoted on classic.com are fine). Hagerty
   editorial articles are citable; Hagerty valuation pages are not (redirect
   loop). Every figure stamped with its month and year.
7. **Variant-specific facts when the page is about a variant.** For a page
   like "DB9, 2008, six-speed manual, US": the manual's take rate, how the
   manual car differs (gearbox supplier, final drive, clutch, badging,
   options), how many US manual cars the sources will actually support, and
   which years the manual was offered in the US versus elsewhere. If nobody
   publishes a number, the page says nobody publishes a number.

**Coverage rule.** A finished seed cites at least one source from each of
categories 1, 2, 3, 4 and 6. Categories 5 and 7 as available. A file that has
sixteen sources from category 6 and none from category 1 is under-sourced.

**British-perspective tells to remove on sight:** "on sale in the UK from",
"RHD", prices in pounds, "MoT", "tax", "kerb weight", "estate", "saloon",
"tyres", "bonnet", "boot", model years counted from the European launch. The
page reads as if written in Los Angeles about a car in Los Angeles.

## 4b. Reference books

The best information on most of these cars is in books: marque monographs,
serial-number registers, factory histories. They are the highest-reliability
source type on the site and the one most often missing.

How they enter a seed: Chris photographs the relevant pages from his own
copies into the project folder (`_book-pages/<slug>/`). The agent reads the
photos, logs each fact with author, title, year, edition and page under
`sourceType: "reference-book"`, `reliability: "high"`, and states the fact in
its own words. The `evidence` entry carries `page`, not `quote`.

Three lines that hold: facts are not owned, expression is, so nothing is
reproduced beyond a short attributed phrase where the exact wording matters;
no page image or passage is ever rendered on the site; the source is a copy
Chris owns or a Google Books snippet fetched normally. No pirated PDFs, ever.
If no book pages are in the folder for a car, the seed says nothing about
books and does not cite one from memory.

## 5. Claims — the honesty layer

```ts
{
  "section": "production",
  "claimText": "Full sentence, self-contained, readable out of context.",
  "confidence": "high",
  "status": "disputed",
  "sourceRefs": ["ref-a", "ref-b"],
  "conflictNote": "Source A states X. Source B states Y. Not resolved by any source consulted here.",
  "evidence": [
    { "ref": "ref-a", "quote": "the exact sentence, or the exact fragment of 8 to 30 words, as it appears on the page" },
    { "ref": "ref-b", "quote": "..." }
  ]
}
```

**Evidence is what makes a claim checkable without a second model.** Every
claim carries one `evidence` entry per `sourceRef`: the verbatim words from
that page that support the claim, 8 to 30 words, copied not paraphrased.
`scripts/verify-quotes.mjs` re-fetches each page and looks for the words. A
quote that cannot be found is a failed claim, whatever the prose says. For a
`reference-book` source the quote is replaced by `"page": 143` and the
orchestrator checks it against the page photo. Quotes are never rendered on
the site; they exist so that fabricated citations fail mechanically.

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

- Primary: **classic.com**. Every figure stamped **"as of September 2026"** in the
  prose. A market number without a date is a future lie.
- **Known-blocked to automated retrieval — never cite from memory:**
  Bring a Trailer (403), Hagerty valuation pages (redirect-loop),
  cars.bonhams.com (403), Glenmarch (403). If you cannot fetch it, it does not
  go in `sources`.
- Registry and club sites are often SPAs that return only app scaffolding to a
  fetch. Scaffolding is not a source.
- Auction results (RM Sotheby's, Gooding, Bonhams) are citable when you fetched
  the individual lot page. Name the house, the sale, the month and the year.
- Buyer's premium is charged **on top of** the advertised "Sold for". If you
  quote a hammer price, say which it is.
- Never state a value range you did not fetch. `null` and a sentence explaining
  the gap beats a plausible invention.

## 7. Voice

Unhurried, factual, US spelling (color, liter, curb weight, aluminum, percent, catalog). US market only: see section 7a for the units, currency and spelling standard, which is enforced by scripts/validate-seed.mjs. The 360 and older exemplars predate that rule; the spec wins. The register of a good marque registry
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

## 7a. US data standard

Every model history is written for a US reader. A US reader must never have to
convert anything to understand the car. This section is mechanically enforced by
`scripts/validate-seed.mjs`; a seed that breaks it does not ship.

**Units. US measure first, always.**

| Quantity | Write | Never |
| --- | --- | --- |
| Power | hp | bhp, PS, kW, CV |
| Torque | lb-ft | Nm, N-m, kgm, kgf |
| Weight | lb | kg, tonnes |
| Speed | mph | km/h, kph |
| Distance | miles, feet, inches | km, kilometers, meters |
| Dimensions (wheelbase, length, width, height, ride height, disc diameter) | inches first, mm in parentheses: `104.9 in (2,665 mm)` | mm alone |
| Temperature | Fahrenheit | Celsius |
| Fuel economy | mpg (US gallons; say so if a source used Imperial) | l/100km, Imperial mpg unlabeled |

Four things stay metric because metric is what US writing uses for them:
engine **bore and stroke** (`80 x 71 mm`), **displacement in cc**, wheel **bolt
patterns** (`5 x 130 mm`), and a metric figure that is itself a proper name (the
FIA 5,000 km record) - which takes the US equivalent in parentheses right after.

Convert with arithmetic, never by eye. 1 in = 25.4 mm, 1 lb = 0.45359237 kg,
1 mph = 1.609344 km/h, 1 lb-ft = 1.35582 Nm, 1 hp = 0.98632 PS = 0.7457 kW.
Round dimensions to one decimal inch. Never state the same figure twice in two
units of the same kind (`276 hp (276 hp)` is a conversion bug, not a spec).

**Currency. Dollars first, the home-market figure in parentheses.**

1. Anything a reader would use to judge what a car is worth - market values,
   auction results, price guidance, parts and labor costs, running costs - is
   US dollars from a US source. No exceptions. UK and European buyer guides
   (Magneto, Classic & Sports Car, Octane, Classics World, The Classic Valuer,
   Retro Motor, PistonHeads, Auto Express, WhichCar) are not value sources for
   this site, whatever the car.
2. Historical home-market prices are facts and may stay, in the
   `launch price / price when new` sense only, written US first:
   `$9,395 in the US (DM 23,240 in Germany)`. When no US price exists because
   the car was never sold here, say that in the sentence rather than leaving a
   bare foreign figure: `DM 23,240 in Germany; the car was not sold new in the US.`
3. A foreign auction result may only appear converted, with the rate and its
   date stated in the source notes, and only when no US comparable covers the
   same point. A US comparable always wins.
4. Never convert a currency by eye or at today's rate to stand in for a period
   price. If the US list price is not documented, say it is not documented.
   "No verified US list price exists for the 1969-71 car" is an acceptable
   sentence. Inventing one is not.

**Spelling and punctuation.** US spelling throughout: color, liter, aluminum,
tire, hood, trunk, windshield, curb, center, gasoline, labor, license, gray,
carburetor, sedan, percent (spelled out, never `%`), and -ize not -ise. The
exception is a proper name, which is quoted verbatim: Heritage Parts Centre
stays Heritage Parts Centre. No em dashes and no en dashes anywhere in rendered
copy; use ` - ` or a comma, and a plain hyphen between figures in a range.

**Sourcing. No guessing.** Every number in a model history traces to a source in
the `sources` array through a claim. If two good sources disagree, the claim is
`disputed` with both sides in `conflictNote` - that is what the
"Where sources differ" block is for. If only one source has a figure and it is
below the reliability bar, the figure does not go in. A gap stated plainly beats
a number nobody can stand behind.

## 7b. Soul

An encyclopedia has no soul because nobody in it ever had an opinion or
touched the car. These pages are written by someone who has. Four things, all
still sourced:

1. **Why this car exists.** The first `##` section of `history` is the problem
   the factory was solving, who pushed it through, and what nearly killed it.
   Not the launch date.
2. **The Cars and Coffee detail.** Every page has at least one specific thing
   a reader would repeat to a friend: a take rate, a supplier, a decision made
   for a reason nobody expected. Put it where it belongs, not in a box.
3. **Chris's Take is not yours to write.** Leave the field out. In the receipt,
   return `chrisTakeQuestions`: three pointed questions only someone who has
   driven, sold or judged the car could answer ("what does the manual DB9 feel
   like next to a Touchtronic car at 40 mph?"). Chris answers by voice; that
   becomes the field.
4. **Specifics over adjectives.** "The manual was a no-cost option that almost
   nobody ordered" beats "rare and desirable" every time. If a sentence tells
   the reader how to feel, delete it.

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

**Validate in your own container BEFORE writing to the Mac.** Write the file
locally first, then run a Node parse plus a mechanical check of floors, ceilings,
`sourceRefs` resolution and banned copy. Fix what it catches, then write once to
the device. Do not use the device as your draft surface.

1. The file must parse. `npx tsc --noEmit` if you can reach it.
2. Every `sourceRefs` entry resolves to a `ref` in `sources`.
3. Every `status: "disputed"` claim has a `conflictNote`.
4. No banned copy present.
5. Every market figure carries its "as of September 2026" stamp.
6. `node scripts/verify-quotes.mjs <file>` prints its summary. Fix or drop
   every `missing` claim before you finish; `unreachable` is reported, not
   fixed.

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
  "fetches": 18,
  "categoriesCovered": [1, 2, 3, 4, 5, 6, 7],
  "quoteCheck": { "checked": 14, "found": 14, "unreachable": 0, "missing": 0 },
  "chrisTakeQuestions": ["...", "...", "..."],
  "notes": "One line, only if something needs a human. Otherwise empty."
}
```

## 11. Research procedure and token budget

The cost of a seed is the pages you read, not the words you write. Budget:
**one search per category in 4a (at most 8 searches), at most 22 fetches, and
never a full-page read when a targeted extraction will do.**

1. Read this spec, the exemplar seed you were pointed at, and the existing
   seed for this model if there is one. Nothing else from the repo.
2. Search each category once. Pick the two most authoritative results per
   category. Skip a result whose domain is on the blocked list in section 6.
3. Fetch with an extraction prompt that names the facts you want ("US MSRP by
   model year, transmission options offered in the US, production figures
   with the sentence they appear in"). Do not ask for a summary of the page.
4. Log each fetched page into `sources` immediately with its `notes`, while
   you still know what it established. A source added at the end from memory
   is how fabricated citations happen.
5. **Two-source rule for every number.** Output, torque, weight, price,
   production, 0-60. A number with one source is `confidence: "medium"` at
   best and says so. Two sources that disagree is a `disputed` claim (section
   5), not an average.
6. Stop fetching when every category in 4a is covered and every number has
   two sources or an honest single-source note. More fetches past that point
   are cost, not quality.
7. Write the file, validate (section 9), return the receipt (section 10).

What a fetch may not do: cite a page it did not retrieve; treat a 403, a
redirect loop, a cookie wall or an SPA shell as a source; rely on a British
buyer guide for a dollar figure; pull a figure from a listing aggregator's
AI-written blurb.

## 12. Upgrade mode: bringing an existing seed up to this standard

Used for the 92 files already on disk. You are not rewriting from scratch, so
the token cost is the gap, not the whole page.

1. Read the existing seed. List which categories of 4a it already covers and
   which numbers have two sources. That list is your work order.
2. Fill the missing categories with the procedure in section 11. Do not
   re-fetch a source that is already in the file unless its `notes` are so
   vague you cannot tell what it established.
3. Run the British-perspective sweep from 4a and the units and currency rules
   from 7a over every prose field. Model years become US model years; add the
   sentence that says what was and was not sold here.
4. Re-verify the six highest-risk numbers (production total, US price, output,
   weight, 0-60, top speed) against the new sources. Where the file's number
   and a new source disagree, that is a new `disputed` claim.
5. Keep every verified claim and source that survives. Do not shorten prose to
   make room; the ceilings in section 3 were raised for this.
6. Receipt (section 10) plus two extra fields: `categoriesAdded` (array of 4a
   category numbers) and `numbersRechecked` (integer). Never return the diff.
