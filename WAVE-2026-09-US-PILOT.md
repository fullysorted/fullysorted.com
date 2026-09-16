# Wave addendum: US-perspective pilot, September 2026

Read `MODEL-HISTORY-SPEC.md` first, in full. Sections 4a (source coverage
map), 7a (US data standard), 11 (research procedure) and 12 (upgrade mode) are
new and are the point of this wave. This file lists only what is different.

## Why this wave exists

The 92 seeds on disk were researched from whatever ranked first, which skews
British. This pilot proves the new procedure on a handful of cars before it is
run over the rest. The output is judged on three things: every 4a category
covered, every number two-sourced or honestly single-sourced, and prose that
reads as written in the US about a US car.

## What is different

1. Pilot cars are NEW files unless the table says "upgrade". For a new file,
   spec section 1's "do not create a new file" does not apply; use the exact
   path and export name below. Do NOT touch
   `src/app/api/admin/seed-models/route.ts`; the orchestrator registers seeds.
2. Repo root for this run is given in the agent prompt. Write only
   `<root>/src/lib/data/model-seed-<file>.ts`. **Never run any git command.**
3. Validate with `node <root>/scripts/validate-seed.mjs <file>` (must print
   `OK`) and `node <root>/scripts/verify-quotes.mjs <file>` (no `missing`,
   no `no-evidence`). Fix every FAIL. Read every WARN and fix it unless there is a reason
   not to; put that reason in the receipt.
4. Every `##` heading inside `history` is followed by a blank line (`\n\n`).
5. `sourceType` is the closed set in spec section 4 only.
6. Market figures are stamped "as of September 2026".
7. No em dashes, no en dashes, no "%" in any rendered field. US spelling.
8. `generation` must not repeat `model`. For a variant page it names the
   variant ("2008 six-speed manual, US market"); otherwise `null`.
9. Fetch budget per car: 8 searches, 22 fetches. Log the count in the receipt.
10. Omit `heroPhoto`; the orchestrator adds it afterwards.

## Variant pages

A variant page is about one configuration of one car. The whole page serves
the person deciding between that configuration and the common one. Section 7
of the source map applies: take rate, what physically differs, how many the
sources will support, which model years it was offered in the US. Where the
sources do not publish a number, the page says exactly that in
`productionNotes` and `productionTotal` is `null`. A forum member's count of
known cars is citable as a `club-forum` / `low` source and is labeled as a
count of known cars, never as production.

Model-line history stays in `history` but at variant weight: two sections on
the line, the rest on the variant. Do not paste the full DB9 story into a
manual-car page.

## Pilot cars

| # | Car | slug | file | export | mode |
|---|---|---|---|---|---|
| 1 | Aston Martin DB9, 2008 model year, six-speed manual, US market | `aston-martin/db9-manual` | `model-seed-db9-manual.ts` | `seedDb9Manual` | new |

Row 1 is written for a reader who already owns one. Lead with what the
manual car is and how it differs, then what to look for, what goes wrong,
and what it trades for. The model-line story is background, two sections at
most.

Further rows are added by the orchestrator before the run.

## Agent prompt (verbatim, one car per agent)

```
You are researching one collector car model history for fullysorted.com.

Read <root>/MODEL-HISTORY-SPEC.md in full, then
<root>/WAVE-2026-09-US-PILOT.md, then the exemplar
<root>/src/lib/data/model-seed-f40.ts for file shape only (its sourceType
labels and single-newline headings are known defects; the spec wins).

Your car: <Make Model, generation or variant, years>.
Write: <root>/src/lib/data/model-seed-<file>.ts
Export: seed<PascalSlug>
Mode: <new | upgrade>. In upgrade mode, read the existing file first and
follow spec section 12.

Rules that end the job if broken: never run git; never cite a page you did
not fetch this session; never convert a foreign price into a US price; never
average two sources that disagree; never invent a dispute.

Work through the source coverage map (spec 4a) in order, one search per
category, extraction prompts not summaries, at most 22 fetches. Log each
source the moment you fetch it. Every number needs two sources or an honest
single-source note. Every claim carries verbatim evidence quotes (spec
section 5). Write the file, run
node <root>/scripts/validate-seed.mjs <file> until it prints OK, then
node <root>/scripts/verify-quotes.mjs <file> until nothing is missing, then
return only the JSON receipt from spec section 10.
```

Researchers run at high effort. There is no verify agent: verify-quotes.mjs
is the verifier. The orchestrator re-runs it on the finished file and reads
the receipt's `chrisTakeQuestions` back to Chris.
