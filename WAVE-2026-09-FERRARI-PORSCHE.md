# Wave addendum — Ferrari + Porsche, September 2026

Read `MODEL-HISTORY-SPEC.md` first. It is the style authority. This file only
lists what is different for this wave.

## What is different

1. **You are creating a NEW file**, not rewriting one. Spec §1's "do not create a
   new file" does not apply. Use exactly the path and export name in the table
   below. Do NOT touch `src/app/api/admin/seed-models/route.ts`; the orchestrator
   registers the new seeds.
2. Repo root for this run is `/tmp/fs`. Write the file to
   `/tmp/fs/src/lib/data/model-seed-<file>.ts`. Nothing else in the repo is
   yours to edit. **Never run any git command.**
3. Validate with `node /tmp/fs/scripts/validate-seed.mjs <file>` before you
   finish. It must print `OK`. Fix every FAIL; read every WARN and fix it unless
   there is a reason not to (put that reason in the receipt).
4. **Every `##` heading inside `history` must be followed by a blank line**
   (`\n\n`). The exemplar `model-seed-f40.ts` uses a single `\n` after
   headings; that was a bug. Do not copy it.
5. The exemplar's `sourceType` values include `auction` and other drifted
   labels. Use only the closed set in spec §4 (`auction-house`, not `auction`).
6. Date stamp for market figures this wave: **"as of September 2026"**.
7. Em dashes are banned in site copy. Use " - " (spaced hyphen) or a full stop.
8. `generation` must not simply repeat `model`. If the car has no generation
   name distinct from its model name, set `generation` to `null`.
9. The page renders the sources list with a non-affiliation notice; you do not
   need to write one.

## Ferrari — 12 files

| slug | model | generation | yearStart–yearEnd | file | export |
|---|---|---|---|---|---|
| ferrari/250-gt-lusso | 250 GT Lusso | Tipo 168/U (Berlinetta Lusso) | 1962–1964 | model-seed-250-gt-lusso | seed250GtLusso |
| ferrari/275-gtb | 275 GTB | 275 GTB and GTB/4 | 1964–1968 | model-seed-275-gtb | seed275Gtb |
| ferrari/330-gtc | 330 GTC | 330 GTC and GTS | 1966–1968 | model-seed-330-gtc | seed330Gtc |
| ferrari/365-gtb4-daytona | 365 GTB/4 Daytona | Berlinetta and GTS/4 Spider | 1968–1973 | model-seed-365-gtb4-daytona | seed365Gtb4Daytona |
| ferrari/512-bb | 512 BB | 512 BB and BBi (with 365 GT4 BB context) | 1976–1984 | model-seed-512-bb | seed512Bb |
| ferrari/288-gto | 288 GTO | null | 1984–1987 | model-seed-288-gto | seed288Gto |
| ferrari/348 | 348 | TB/TS, GTB/GTS, Spider | 1989–1995 | model-seed-348 | seed348 |
| ferrari/456 | 456 | 456 GT, GTA, 456M | 1992–2003 | model-seed-456 | seed456 |
| ferrari/550-maranello | 550 Maranello | 550 Maranello and Barchetta | 1996–2001 | model-seed-550-maranello | seed550Maranello |
| ferrari/360 | 360 | Modena, Spider, Challenge Stradale | 1999–2005 | model-seed-360 | seed360 |
| ferrari/f50 | F50 | null | 1995–1997 | model-seed-f50 | seedF50 |
| ferrari/enzo | Enzo | null | 2002–2004 | model-seed-enzo | seedEnzo |

`make` is `Ferrari` for all twelve.

## Porsche — 12 files

| slug | model | generation | yearStart–yearEnd | file | export |
|---|---|---|---|---|---|
| porsche/911-long-hood | 911 | Long-hood (incl. 2.7 RS) | 1964–1973 | model-seed-911-long-hood | seed911LongHood |
| porsche/912 | 912 | 912 and 912E | 1965–1969 | model-seed-912 | seed912 |
| porsche/914 | 914 | 914/4 and 914/6 | 1969–1976 | model-seed-914 | seed914 |
| porsche/924 | 924 | 924, Turbo, Carrera GT | 1976–1988 | model-seed-924 | seed924 |
| porsche/944 | 944 | 944, S, S2 (naturally aspirated) | 1982–1991 | model-seed-944 | seed944 |
| porsche/968 | 968 | 968, CS, Turbo S | 1991–1995 | model-seed-968 | seed968 |
| porsche/959 | 959 | null | 1986–1993 | model-seed-959 | seed959 |
| porsche/911-996 | 911 | 996 Carrera | 1998–2004 | model-seed-911-996 | seed911996 |
| porsche/911-996-gt3 | 911 GT3 | 996 | 1999–2005 | model-seed-911-996-gt3 | seed911996Gt3 |
| porsche/911-997-gt3 | 911 GT3 | 997 | 2006–2011 | model-seed-911-997-gt3 | seed911997Gt3 |
| porsche/boxster-986 | Boxster | 986 | 1996–2004 | model-seed-boxster-986 | seedBoxster986 |
| porsche/carrera-gt | Carrera GT | null | 2004–2007 | model-seed-carrera-gt | seedCarreraGt |

`make` is `Porsche` for all twelve.

Existing Porsche pages you must not duplicate: 356, 911 SC, 930 Turbo,
Carrera 3.2, 964, 993, 928, 944 Turbo. Existing Ferrari pages: 308 GTB/GTS,
328, Dino 246, F355, F40, Testarossa. Link nothing; just do not overlap.
