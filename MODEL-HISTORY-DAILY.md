# Daily model histories: playbook

The standing procedure for the morning run that writes new model histories.
Change the run by editing this file or `MODEL-HISTORY-QUEUE.md`, never the
scheduled task. `MODEL-HISTORY-SPEC.md` is the content standard; where this
file is more specific, this file wins.

Set 2026-11-17. First run under it: eight histories, the same day.

## Settings

- Cars per run: **2**
- Writer model: Opus. Checker model: Sonnet. One writer and one checker per car.
- Market stamp: "as of <current month> <current year>".
- Push: straight to `main` (Chris, 2026-11-17), only after every gate passes.

## Who does what

| Role | Model | Job |
|---|---|---|
| Orchestrator | the session itself | Picks the cars, briefs the agents, adjudicates, registers, runs the gates, pushes, reports. Writes no history itself. |
| Writer | Opus subagent | Researches and writes one seed file. |
| Checker | Sonnet subagent | Audits one finished seed it did not write, then applies the fixes the orchestrator approves. |

## Orchestrator procedure

1. Attach `fullysorted/fullysorted.com` with push access and clone it to
   `/home/claude/fullysorted.com` (one clone, not in a subagent). Run
   `npm ci --no-audit --no-fund` there for the typecheck.
2. Read this file, `MODEL-HISTORY-QUEUE.md` and `MODEL-HISTORY-SPEC.md`
   sections 0 to 8. Take the first rows with status `queued`, up to the cars
   per run. Confirm no file with that stem exists.
3. Launch one writer per car in the background, model Opus, with the brief
   under "Writer brief". Give each the row's slug, file stem, export name,
   make, model, generation, years and scope notes.
4. When a writer finishes, run `node scripts/validate-seed.mjs <file>`. It
   must print `OK`. Then launch a checker for that file, model Sonnet, with
   the brief under "Checker brief".
5. Adjudicate each checker report. Send the same checker a fix list (it keeps
   its context, so it costs little): approve every fix that removes an
   unsupported statement, corrects a number to its source, or swaps in an
   evidence quote that carries the figure. Never approve a fix that adds a
   fact without a fetched source.
6. After the fix pass, validate again and read the diff of each file yourself:
   `summary`, `marketNotes`, `whatToLookFor` and `valueTrajectory` in full.
   Run the slop sweep under "Final read". A car whose checker verdict is
   `hold`, or that still fails any gate, is not registered: mark its row
   `held <date>: <reason>` and move on.
7. Register each passing car in `src/app/api/admin/seed-models/route.ts`: one
   import line and the export name appended to `SEEDS`. Mark its queue row
   `written <date>`.
8. Gates, all required:
   - `validate-seed.mjs` prints `OK` for every new file.
   - `npx tsc --noEmit` is clean.
   - `git status` shows only: the new seed files, `route.ts`,
     `MODEL-HISTORY-QUEUE.md`. Anything else is a stop.
9. Commit and push to `main`. Message: `Model histories: <Make Model>, <Make
   Model>`. Fetch and rebase first. Never force-push. If the push is refused,
   push the branch `histories/<date>` instead and say so in the report.
10. Report, in the session's final message, copy-paste clean:
    - What was written, with sources, claims and disputed counts per car.
    - Anything held, and why.
    - What Chris does next: open `/admin/models`, press "Seed new histories",
      review, publish.
    - Chris's Take questions, three per car, from the writers' receipts.
    - Post drafts for each car (see "Posts").

Never: touch any file outside the three named in step 8, change a price or fee
anywhere, edit a published history, send anything to anyone, or post anything.

## Writer brief

You are writing one cited model history for fullysorted.com. Read
`MODEL-HISTORY-SPEC.md` in full and the exemplar
`src/lib/data/model-seed-db9-manual.ts` in full, then this section.

1. You are creating a new file at the path you were given, with the slug and
   export name you were given. Spec section 1's "do not create a new file"
   was written for rewrites. Do not register the file or edit any other file.
2. The shell has no web access. Research with WebSearch and WebFetch only.
   `scripts/verify-quotes.mjs` cannot reach the web from here; do not run it.
3. Fetch only URLs that a search or an earlier fetch returned. A URL you
   construct or recall raises a permission prompt nobody is there to answer.
4. Quotes are verbatim. Ask each fetch for the words: "Quote the exact
   sentence or table row, word for word, in quotation marks, that states X.
   If the page does not state X, say NOT STATED." Use a quote only when the
   fetch returned it as the page's own words.
5. **The evidence quote carries the figure.** A claim that states 22,789 cites
   a quote that contains 22,789. A page title, a heading or a nearby sentence
   is not evidence. A claim may carry several evidence entries for one source.
6. **Every number in prose sits in a claim.** Prices, outputs, weights, times,
   counts, dates of change. If you cannot put it in a claim with a carrying
   quote, it does not go in the prose.
7. A ratio or comparison uses the source's own wording. "250 percent more
   than" and "250 percent of" are different numbers.
8. A figure from one low-reliability source does not go in. Say the figure is
   not documented.
9. No sentence tells the reader what to do or how to read a fact. No
   "check", "ask for", "should", "deserves", "the most important". No
   superlative without a source. Describe what separates a good car from a
   poor one and stop.
10. No private names: no owner, no seller, no named private collection.
    Designers, engineers, executives, racing drivers and bylined journalists
    in the public record are fine.
11. Market data: classic.com is citable when the fetch returned the figure
    itself; call it classic.com's figure. Auction results name the house, the
    sale, the month and year, the condition if the lot page gives it, and
    whether the figure includes buyer's premium; if the page does not say,
    say it does not say. Blocked, do not fetch: Bring a Trailer, Hagerty
    valuation tool pages, cars.bonhams.com, Glenmarch.
12. Budget: up to 8 searches and 22 fetches. Cover spec 4a categories 1, 2,
    3, 4 and 6; 5 and 7 as available. If a category cannot be covered, say so
    in `productionNotes` and in the receipt.
13. Never run git. Helper scripts go in `/tmp/<file stem>/`.
14. Validate: `node scripts/validate-seed.mjs <file>` must print `OK`.
15. Return only the receipt JSON from spec section 10, with
    `chrisTakeQuestions` filled.

## Checker brief

You did not write this file. Find what is wrong with it.

1. Run `validate-seed.mjs`. Report the result line.
2. Print the source URLs (`grep -o '"url": "[^"]*"' <file>`) so they are in
   your context, then fetch each once: "For each of these quotes, answer FOUND
   if the words appear on the page (ignoring case, punctuation and spacing),
   NEAR if the page says the same thing in other words and give its exact
   sentence, or MISSING. Say whether the page loaded real article content."
   A blocked page, a cookie wall or an empty shell is `unreachable`.
3. For each claim, check that its evidence quote contains the claim's figure.
4. Re-derive the six highest-risk numbers from the cited sources: production
   total (or why it is null), US price new, output, weight, 0-60, top speed.
   Re-add any sum the file computed, with a script.
5. One independent search for the production figure, or for whichever
   high-risk number rests on a single source, from a source the file does not
   cite. Report what it says against the file.
6. Sweep every prose field for: numbers no claim supports, imperative or
   interpretive sentences, unsourced superlatives, British tells (spec 4a),
   metric-first units, non-dollar values, banned copy (spec 7), dashes, and
   private names.
7. Fix only mechanical defects (a NEAR quote replaced with the page's words,
   a unit order, a dash, a private name). Report everything else.
8. Return only:

```json
{
  "slug": "",
  "validator": "",
  "quoteCheck": { "checked": 0, "found": 0, "near": 0, "missing": 0, "unreachable": 0 },
  "missingQuotes": [{ "claimIndex": 0, "ref": "", "quote": "", "pageSays": "" }],
  "numberCheck": [{ "number": "", "fileValue": "", "sourceValue": "", "ref": "", "ok": true }],
  "independentCheck": { "source": "", "url": "", "figure": "", "agrees": true },
  "proseDefects": [{ "field": "", "text": "", "problem": "" }],
  "fixedMechanically": [""],
  "verdict": "publish | fix-then-publish | hold",
  "notes": ""
}
```

## Final read

The orchestrator's own pass, after the fix list is applied. Search every new
file's prose fields, case-insensitive, for the words below and rewrite or cut
each hit. Evidence quotes are verbatim and exempt.

`iconic`, `legendary`, `holy grail`, `unicorn`, `investment`, `timeless`,
`stunning`, `beloved`, `sought-after`, `coveted`, `arguably`, `truly`,
`simply`, `of course`, `it is worth noting`, `needless to say`, `testament`,
`boasts`, `nestled`, `rich history`, `stands as`, `whether you`, `not just`,
`more than just`, `luxury`, `exclusive`, `curated`, `passion`, `should`,
`must`, `deserves`, `make sure`, `be sure`, `!`.

Then read each `summary` aloud in your head as a restoration shop owner
would. If a sentence could sit on any other car's page unchanged, cut it.

## Posts

Drafts only, for Chris to post once the page is published. Two per car.
Accounts: Instagram `@fully.sorted`, Facebook `fullysorted`, X `@fully_sorted`.

1. **The detail.** One fact from the history that a reader would repeat to a
   friend. It must come from a claim with status `verified`, or be a dispute
   stated as a dispute with both figures and both sources named. One or two
   sentences, then the page link:
   `https://www.fullysorted.com/research/models/<slug>`. An X version at 240
   characters or fewer including the link.
2. **Who sorted yours?** One line to owners of that model asking which shop
   looks after theirs. This is the live supply campaign; a real nomination
   gets the shop a page and an invitation.

Rules: the voice is a car person talking to car people. No em dashes, no
emoji, no exclamation marks, no hashtags beyond two plain model tags, none of
`luxury`, `exclusive`, `curated`, `passion`, `iconic`. No price or value
figure without its month and year. No claim about a fee. Nothing that names a
private person.

## Known gaps

- Hero photos. The Wikimedia Commons pipeline needs web access this container
  does not have. New pages publish without a hero photo until a session linked
  to the Mac runs it. The homepage history of the day only draws from pages
  with a photo.
- Reference books (spec 4b) need Chris's page photos, which live on the Mac.
- The quote check runs through WebFetch, which reads pages through a small
  model. It is strong evidence, not a byte-for-byte match. Running
  `scripts/verify-quotes.mjs` from the Mac remains the mechanical check.
