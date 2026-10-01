# Marque History Spec

A marque history is the short, cited story of a make that sits at the top of
`/research/models/<make>`. It is a sibling of the model history and borrows
its honesty rules. Read `MODEL-HISTORY-SPEC.md` sections 4, 4a (US reader
first), 5 (claims and `evidence` quotes), 7, 7a, 7b and 8 before writing.
Everything there applies unless this file says otherwise.

## 1. Where the file goes

`src/lib/data/marque-histories/<make-slug>.ts`, one file per make. The make
slug is the first segment of the model slugs (`mercedes-benz`, `volkswagen`).
Do not edit `index.ts`, any other marque file, or anything else in the repo.
Never run any git command.

## 2. File shape

```ts
export const marqueFerrari = {
  "slug": "ferrari",
  "name": "Ferrari",
  "founded": "1939 (Auto Avio Costruzioni); first Ferrari-badged car 1947",
  "founder": "Enzo Ferrari",
  "headquarters": "Maranello, Italy",
  "summary": "One or two sentences. Why the marque matters to a collector, in plain words.",
  "history": "## Heading\n\nParagraph.\n\n## Heading\n\nParagraph.",
  "inAmerica": "One paragraph: when and how the make reached the US, who imported it, what US rules changed about the cars (bumpers, emissions, lights), and what that means for an American buyer today.",
  "timeline": [
    { "year": 1947, "event": "Short line, under 120 characters.", "sourceRefs": ["ref-a"] }
  ],
  "sources": [ /* same shape as model seeds: ref, title, url, publisher, sourceType, reliability, notes */ ],
  "claims": [ /* same shape as model seeds; section is one of: founding, people, racing, models, america, ownership, today */ ]
};
```

Export name is `marque` + PascalCase of the slug (`marqueMercedesBenz`).

## 3. Floors and ceilings

| Field | Floor | Ceiling |
|---|---|---|
| summary | 120 chars | 320 chars |
| history | 3,600 chars (about 600 words) | 6,500 chars (about 1,050 words) |
| inAmerica | 400 chars | 1,200 chars |
| timeline | 8 entries | 16 entries |
| sources | 8 | 18 |
| claims | 10 | 24 |

Every timeline entry and every claim carries `sourceRefs` that exist in
`sources`. Every claim carries `evidence` quotes per the model spec section 5.
Every source is cited by at least one claim or timeline entry.

## 4. What the history covers

1. Why the company exists: the founder, the problem or ambition, the first car.
2. The two or three turns that made the marque what collectors know: a racing
   program, a defining model, a crisis, an ownership change.
3. The collector-relevant eras in order, naming the models that have pages on
   this site (you are given the list) and the ones that do not.
4. Where it stands now, in one paragraph, without guessing at future plans.

Use `##` headings (3 to 6 of them) with a blank line after each heading. No
links, no bullet lists, no bold. Plain paragraphs.

## 5. Rules specific to marques

- The corporate-history traps are dates and names: founding year versus first
  car versus first car under the badge; company names before the current one;
  who owned it when. Two sources for each, or the claim says it has one.
- A disputed founding date or ownership fact is a `disputed` claim, never an
  average or a silent pick.
- Do not restate model-page detail (production totals, specs). Name the model
  and move on; the model page carries the numbers.
- Manufacturer heritage pages are fine for dates and names, never for
  adjectives. Their self-praise is not a claim.
- No market prices in a marque history. Values belong on model pages.
- US perspective: model years as sold here, US importers named, US-market
  versions called what Americans called them.
- Copy rules: no em dashes, US spelling, no exclamation marks, no emoji, no
  "iconic", "legendary", "storied", "timeless", "boasts", "nestled".
  Dry and direct. One concrete, surprising detail per section beats three
  adjectives.

## 6. Budget

At most 6 searches and 16 fetches. Use extraction prompts, never page
summaries. Blocked sources from the model spec section 6 stay blocked.

## 7. Before you finish

```
node scripts/validate-marque.mjs src/lib/data/marque-histories/<slug>.ts
node scripts/verify-quotes.mjs src/lib/data/marque-histories/<slug>.ts
```

Fix anything `missing` (re-quote from the page or drop the claim). Then
return only:

```json
{ "slug": "ferrari", "wrote": true, "sources": 12, "claims": 16, "disputed": 1,
  "historyChars": 4800, "timeline": 11,
  "quoteCheck": { "checked": 20, "found": 18, "unreachable": 2, "missing": 0 },
  "notes": "One line only if a human needs to look at something." }
```
