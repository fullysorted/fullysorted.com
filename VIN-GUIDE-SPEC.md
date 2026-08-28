# VIN Decoding Guide — build spec

**Status:** queued, not built. Written 2026-08-28 during the research-hub wave.
**Decision on record:** Chris chose a data file plus a standalone
`/research/vin-guide` page, matching the glossary / importing / marketplaces
pattern. It composes with the existing `/vin` decoder tool rather than
replacing it.

---

## 1. Why this page and not an extension of /vin

`/vin` is a *tool*: paste a VIN, get a decode. It answers one question about
one car and it ranks for nothing. A reference page answers the question people
actually search — "how do I read a Porsche VIN", "what does the 10th digit
mean", "1967 Camaro VIN decoder" — and those are high-intent queries with
durable search volume that the tool page cannot capture.

They also serve different moments. The tool is for someone holding a car. The
guide is for someone reading a listing on a phone, working out whether the
seller's "numbers matching" claim survives contact with the VIN. That second
person is the one who then clicks through to an inspection provider.

Both should exist and cross-link. The guide links to the tool at the top of
every make section; the tool links to the guide's relevant `#anchor` when it
decodes a VIN it only partially understands.

---

## 2. The hard constraint that shapes everything

**The 17-character standardised VIN begins with model year 1981.** Before that
there was no cross-manufacturer standard at all, and every marque used its own
scheme — different lengths, different meanings, sometimes different schemes
between plants in the same year.

This splits the guide in two, and the split must be explicit on the page or it
will actively mislead:

- **1981 and later** — one universal structure (ISO 3779 / 49 CFR 565), which
  can be documented once as a position-by-position table and applies to every
  make. This is the part that can be generated with confidence.
- **Pre-1981** — per-make, per-era schemes with no common structure. This is
  the part collectors actually need, because it is where the money is, and it
  is the part that requires real research per marque.

A guide that documents only the modern standard is worth very little to this
audience. A guide that silently applies modern-standard logic to a 1967 car is
worse than nothing.

---

## 3. Data model

`src/lib/data/vinGuide.ts` — the page renders this, and never hardcodes a
code table in JSX.

```ts
export type VinPositionRule = {
  positions: string;        // "1-3", "9", "10" — 1-indexed, inclusive
  label: string;            // "World Manufacturer Identifier"
  meaning: string;          // prose, one or two sentences
  values?: { code: string; means: string }[];  // when it is a closed lookup
};

export type VinScheme = {
  id: string;               // "porsche-1965-1979" — stable, used as #anchor
  label: string;            // "Porsche, 1965–1979"
  yearStart: number;
  yearEnd: number;
  length: number | null;    // characters; null where it varied
  appliesTo: string;        // "911, 912, 914 built at Zuffenhausen"
  structure: VinPositionRule[];
  workedExample: {
    vin: string;            // a REAL vin from a documented car, or a
                            // clearly-labelled illustrative one
    isIllustrative: boolean;
    breakdown: { part: string; means: string }[];
    sourceRef: string;
  };
  caveats: string[];        // where the scheme breaks, overlaps, or is disputed
  sourceRefs: string[];
};

export type VinMake = {
  slug: string;             // "porsche"
  make: string;             // "Porsche"
  schemes: VinScheme[];     // ordered oldest first
  notes: string;            // marque-level gotchas
};
```

Plus a single `MODERN_VIN: VinPositionRule[]` for the 1981+ standard, rendered
once at the top rather than repeated per make, and a `VIN_SOURCES` array using
the same `{ref, title, url, publisher, sourceType, reliability, notes}` shape
as the model seeds — reuse it, do not invent a second source shape.

---

## 4. Make coverage — first pass

Ranked by how often the question is actually asked and by overlap with the
model histories already on the site. Fourteen makes:

**Tier 1 — build first (each already has model pages that can link in):**
Chevrolet · Ford · Porsche · BMW · Mercedes-Benz · Volkswagen

**Tier 2:** Mopar (Dodge/Plymouth/Chrysler — one shared scheme) · Toyota ·
Nissan/Datsun · Jaguar · Land Rover

**Tier 3:** Ferrari · Alfa Romeo · MG/Triumph (BMC/BL shared) · Mazda

Every one of these already has at least one model history live or drafted, so
each make section gets real internal links rather than sitting orphaned.

---

## 5. What must be right

These are the failure modes that make a VIN guide useless or dangerous.

1. **The 10th-digit year code table is not linear and skips letters.** I, O, Q,
   U, Z and 0 are never used. It cycles: 1980=A … 2000=Y, 2001=1 … 2009=9,
   2010=A again. **A letter alone is therefore ambiguous across a 30-year
   span** and must be read with the 7th digit (numeric vs alpha) to
   disambiguate 1980s from 2010s. Say this explicitly; most free decoders get
   it wrong.
2. **Check digit.** Position 9 on North American VINs is a computed check
   digit with a published weighting and modulus. Document the algorithm and
   note that it is the fastest way to spot a fabricated VIN. Note also that it
   is NOT required outside North America, so its absence is not evidence of
   anything on a European-market car.
3. **VIN is not the engine number, and "numbers matching" is a claim about
   both.** Say where the engine and gearbox stampings live per marque where
   known. This is the single most valuable thing on the page for this
   audience and the reason it converts to inspection leads.
4. **Never publish a VIN belonging to a real identifiable car** unless it is
   already public in an auction listing, and cite that listing. Otherwise mark
   `isIllustrative: true` and construct one. A real VIN republished here is a
   gift to a cloner.
5. **Pre-1981 sequence numbers are not production counts.** Plants started at
   arbitrary numbers and ran separate series. A low sequence number does not
   mean an early car.

---

## 6. Sourcing

Same standard as the model histories, and the same closed `sourceType` set.

Best primary sources:
- **49 CFR 565** (US government, definitive for the modern standard) and
  **ISO 3779** for the international structure.
- **NHTSA's vPIC database** — free, public, has a documented API, and is the
  authority on WMI assignments. Worth noting as a future data integration,
  not just a citation.
- Marque registries and factory build-record services (Porsche Certificate of
  Authenticity, Mercedes Datenkarte, BMW production records, Marti Reports
  for Ford, Pontiac/GM Historical Services). **Name these on the page** — a
  reader who wants certainty should be told where to buy it. Several are
  candidate affiliate or partner relationships for the Shop.

Blocked to automated retrieval, unchanged from the model-history work:
Bring a Trailer, Hagerty valuation pages, cars.bonhams.com, Glenmarch.

---

## 7. Page structure

```
/research/vin-guide
  ├── What a VIN is, and what it is not          (short, sets the 1981 split)
  ├── The modern VIN, position by position       (MODERN_VIN table)
  │     └── year-code table + check-digit method
  ├── Before 1981: why there is no single answer
  ├── By make                                    (14 sections, #slug anchors)
  │     └── per scheme: structure table, worked example, caveats
  ├── Where to buy a factory build record        (registries, per marque)
  └── Bridges: /vin (tool) · /services?type=inspection · /research/glossary
```

`?type=` is the real ServicesDirectory param. `?category=` is ignored.

## 8. Build notes

- Add `DefinedTermSet` or `FAQPage` JSON-LD as fits; the glossary page already
  does the former and is the pattern to copy.
- Deep-linkable `#anchor` per make and per scheme — people will link to
  "the Porsche section", not the page.
- Add to `ResearchNav` under **"the car"**, next to the existing VIN entry.
  Nine entries become ten; check both group arrays stay in sync.
- Add to the sitemap. The 2026-08-22 wave shipped four pages that had to be
  retrofitted into it — do it in the same commit this time.
- Give it a canonical. **Do not** reintroduce a site-wide canonical in
  `layout.tsx`; that bug is fixed and must stay fixed.
- No per-page OG image exists for research routes yet. Still outstanding
  site-wide; not a blocker for this page.

## 9. Effort

Roughly one agent per make, same fan-out shape as the model histories: spec on
disk, exemplars read locally, receipts back, one registration edit at the end.
Tier 1 and 2 is eleven agents — one wave. Tier 3 can follow.
