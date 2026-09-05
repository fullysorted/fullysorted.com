# Chassis Register: specification

The register is the part of Fully Sorted that is allowed to be boring. It is a
list of cars, one row per chassis, and under each car a list of things that
demonstrably happened to it, each with a link to where that fact was
published. It never tells a story. Where the record is silent it says so.

The model histories at /research/models explain a model. The register at
/register records individual cars. The two link to each other and nothing else
overlaps.

## 1. Principles (non-negotiable)

1. **No generated facts.** A language model may only move a fact from a cited
   page into a row. It never fills a gap from memory, never infers an owner,
   never guesses a colour, never "completes" a chassis sequence.
2. **Every event has a source URL.** An event without a public URL does not
   exist to us. Owner-reported events carry `status: owner_reported` and stay
   visibly labelled as such forever, even after an admin accepts them.
3. **Gaps are content.** The chassis page prints the events it has and says,
   in plain words, that nothing else is on public record. A car with one
   auction appearance shows one auction appearance.
4. **Conflicts are shown, not resolved.** Two sources disagreeing on a date,
   a price or a VIN is recorded as `status: disputed` with a `conflictNote`
   naming both. We never pick the nicer number.
5. **No owner names, ever.** Not in `details`, not in `notes`, not in
   `conflictNote`, even when the source prints them. "Consigned by the family
   of the original owner" is fine; a name is not. Dealers and auction houses
   are venues, not owners, and may be named.
6. **No copied lot text.** `details` is our own sentence or two of facts
   (mileage stated, service noted, spec, notable provenance in generic terms).
   Never paste catalogue prose. Under 300 characters.
7. **Facts, not opinions.** No "stunning", "matching numbers" unless the
   source states it as a fact, no valuations, no "rare".

## 2. Data shape

One seed per model in `src/lib/data/register/<make>-<model>.ts` exporting a
`RegisterSeed` (see `src/lib/data/register.ts`):

```
{ modelSlug: "ferrari/f40", chassis: [ { chassis, vin, buildYear, variant,
  marketSpec, exteriorColor, interiorColor, engineNumber, notes, confidence,
  events: [ { eventType, eventDate, title, venue, location, outcome,
    priceAmount, priceCurrency, estimateLow, estimateHigh, mileage, mileageUnit,
    details, sourceUrl, sourceTitle, sourcePublisher, sourceType, status,
    conflictNote } ] } ] }
```

Field rules:

- `chassis`: the short serial as an owner would quote it. For Ferrari
  (ZFF... VINs) it is the numeric tail of the VIN with leading zeros dropped:
  `ZFFGJ34B000084028` -> `84028`. Use `chassisFromVin()` in
  `src/lib/register/chassis.ts`; when the VIN is unknown, use the serial the
  source printed. Uppercase, no spaces, no `#`.
- `vin`: the full string only when a source printed it. Never reconstruct.
- `buildYear`: the model year as titled by the source ("1991 Ferrari F40" ->
  1991). If two sources title the car differently, keep the earliest and add
  a disputed `registry` event, or leave null.
- `variant`: closed set per model. F40: `F40`, `F40 LM`, `F40 GTE`,
  `F40 Competizione`, `F40 Prototype`. Default `F40`.
- `marketSpec`: `US`, `Europe`, `Japan`, `UK`, `Switzerland`, `Middle East`,
  or null. Only when the source says so ("US-specification", "Euro-spec",
  "delivered new to Japan"). Never derive from the VIN prefix.
- `exteriorColor`/`interiorColor`: as the source names them ("Rosso Corsa",
  "Rosso cloth"). Null when not stated.
- `engineNumber`: only when printed.
- `notes`: null unless there is a chassis-level fact that is not an event
  (e.g. "Factory-converted to LM specification by Michelotto, per RM
  Sotheby's 2019 catalogue"). Must reference which event's source supports it.
- `confidence`: `high` = VIN and two or more independent sources agree;
  `medium` = one primary source; `low` = chassis only from an aggregator
  record with no primary source reachable.

Event rules:

- `eventType`: `auction` (any auction appearance, sold or not), `private_sale`
  (dealer/private sale reported with a date), `listing` (offered for sale
  without a reported result), `show` (concours/exhibition), `registry`
  (mention in a published register or reference), `factory` (build/delivery
  data from a manufacturer or certification), `service` (published service
  record), `article` (press coverage of this specific car).
- `eventDate`: `YYYY-MM-DD`, `YYYY-MM` or `YYYY`. Auction date is the sale day,
  not the catalogue date. Null only when no date at all is published.
- `title`: "<Venue> <Sale name>, Lot <n>" for auctions; "<Dealer> listing" for
  listings; "<Event name>" for shows. Under 120 characters in practice.
- `outcome`: `sold`, `not_sold`, `withdrawn`, `listed`, `shown`, `unknown`.
  An auction with no published result is `unknown`, not `not_sold`.
- `priceAmount`/`priceCurrency`: the published hammer-inclusive "sold for"
  figure in the currency published (USD, EUR, GBP, CHF, JPY...). Never convert.
  Null when not sold or not published.
- `estimateLow`/`estimateHigh`: only when published on the cited page.
- `mileage`/`mileageUnit`: the odometer figure the source states, with unit.
- `sourceType`: `auction-house` (the house's own lot page), `market-data`
  (classic.com and similar aggregators), `registry`, `journalism`,
  `manufacturer`, `club-forum`, `owner`.
- `sourcePublisher`: "RM Sotheby's", "Gooding & Company", "Broad Arrow",
  "Bonhams", "Artcurial", "Mecum", "Bring a Trailer", "classic.com",
  "Ultimatecarpage".
- `status`: `confirmed` when the fact is read directly from the cited page;
  `disputed` with a `conflictNote` when two sources differ; `owner_reported`
  only via the submission flow.

One auction appearance = one event. If the house page and classic.com both
describe the same sale, prefer the house page as the event's source and add
classic.com's URL to `details` only if it adds a fact (e.g. the house page no
longer shows the result). Do not create two events for one sale.

## 3. Sources and access rules (as of September 2026)

Fetchable and allowed: RM Sotheby's lot pages, Gooding & Company lot pages,
Artcurial lot pages, classic.com (search and vehicle pages), ultimatecarpage.
Indexed by search but not fetchable (cite the URL, take facts from the search
title or from classic.com): Broad Arrow, Bonhams (chassis appears in the URL
slug). Blocked or disallowed for automated retrieval, never fetched and never
cited from memory: Bring a Trailer, Mecum, Collecting Cars, Glenmarch.
Published registers (barchetta.cc and club registers) are not harvested; a
single chassis may cite one only when an agent reached it while checking a
specific claim.

Respect robots.txt on every fetch. One fetch per page; no retries on 403.

## 4. Pipeline

1. **Index**: from classic.com search pages, build `chassis-index.jsonl`: one
   line per sale record with VIN (from the URL slug, never from page text),
   date, price, status, seller, location, classic.com URL, original lot URL.
2. **Extract**: fan out over primary lot URLs in batches of ~20; each agent
   returns JSON rows in the seed shape and a receipt (count, failures). Agents
   read this file and `src/lib/register/chassis.ts` first.
3. **Merge**: `scripts/merge-register.mjs` groups rows by chassis, dedupes
   events on (sourceUrl, eventDate), flags conflicts (same chassis, same date,
   different price/VIN) as disputed, and writes the seed file.
4. **Validate**: `node scripts/validate-register-seed.mjs src/lib/data/register/ferrari-f40.ts`
   checks closed sets, VARCHAR limits, ISO dates, URL presence, banned words
   (owner-name patterns, marketing adjectives, em dashes), and that every
   disputed event carries a conflictNote.
5. **Verify**: a second agent re-fetches a random 10 percent of events plus
   every disputed one and every price above the model's median, and reports
   mismatches. Mismatches are corrected or flipped to disputed, never deleted.
6. **Seed**: `POST /api/admin/seed-register?model=ferrari/f40&offset=0&limit=100`
   from a logged-in admin tab, paging with `nextOffset` until null.

## 5. Pages

- `/register`: models with a register, chassis and event counts, coverage
  ("212 of about 1,315 built"), and the principles above in three sentences.
- `/register/<make>/<model>`: the table. Chassis, VIN, year, variant, spec,
  colour, events, first and last public record, latest outcome. Sorted by
  chassis. Search box filters by chassis or VIN client-side. Coverage line
  and a "your car is missing" submission link at the top.
- `/register/<make>/<model>/<chassis>`: header (chassis, VIN, year, variant,
  spec, colours, confidence), the event timeline oldest first with source
  links, gap notices between events more than five years apart and after the
  last one, disputed events highlighted with their conflict note, the
  submission form (add a record, correct a record, I own this car), prev/next
  chassis, MarqueNotice non-affiliation, link back to the model history.
- All pages: JSON-LD (`Vehicle` with `vehicleIdentificationNumber` on chassis
  pages, `ItemList` on the model register), canonical, in the sitemap. The
  ResearchNav carries a "Register" entry in the "car" group.
- No prices are aggregated into a value; the register is not a price guide.

## 6. Submissions

`POST /api/register/submit` with `{ modelSlug, chassis, vin?, kind, body,
eventDate?, sourceUrl?, submitterName?, submitterEmail?, submitterRelation }`.
Rate limited (5 per minute per client). Stored in `registry_submissions` as
pending. Admin reviews at `/admin/register`; approve creates the chassis (if
new, status published) and one `owner_reported` event whose `details` is the
submitted body and whose `sourceUrl` is the supplied URL or, failing that,
`https://fullysorted.com/register/<make>/<model>/<chassis>#submission-<id>`.
Submitter name and email are never rendered publicly.
