/**
 * Model draft — Porsche 911 (993), 1994–1998. The last air-cooled 911.
 *
 * This content was cross-checked across multiple INDEPENDENT sources
 * (Porsche AG newsroom, Wikipedia citing Kittler's "Deutsche Autos seit 1990"
 * vol. 6, Hagerty market analysis, Porsche Club of America technical Q&A, and
 * reputable journalism) per the Sourcing & Truth-Seeking methodology in
 * RESEARCH-AND-REGISTRY-ROADMAP.md.
 *
 * It is seeded as status = 'draft' — NOT published. Chris reviews each
 * section + claim in /admin/models before it can go live. Where sources
 * disagree (total production, GT2 road-car count, Turbo S volume, the real
 * prevalence/severity of secondary-air-injection clogging), the conflict is
 * recorded as a 'disputed' claim with both sides + sources.
 *
 * Nothing here is copied verbatim from any source — it is synthesized in our
 * own words, with citations stored alongside in `sources`.
 */

import type { SeedSource, SeedClaim } from './model-seed-964';

export const seed993 = {
  slug: 'porsche/911-993',
  make: 'Porsche',
  model: '911',
  generation: '993',
  generationCode: '993',
  trim: null as string | null,
  yearStart: 1994,
  yearEnd: 1998,
  bodyStyles: ['Coupe', 'Cabriolet', 'Targa'],
  engines: [
    'M64/05–06 3.6L air-cooled SOHC flat-six (272 PS / 268 hp, 1994–95)',
    'M64/21–22 3.6L air-cooled SOHC flat-six w/ VarioRam (285 PS / 282 hp, 1996–98)',
    'M64/20 3.8L air-cooled flat-six (Carrera RS / Clubsport, ~300 PS / 296 hp)',
    'M64/60 3.6L air-cooled twin-turbo flat-six (Turbo, 408 PS / 402 hp)',
    'M64/60S 3.6L twin-turbo flat-six (Turbo S, ~450 PS)',
    'M64/60R 3.6L twin-turbo flat-six (GT2 road, ~430 PS rising to ~450 PS)',
  ],
  productionTotal: 68881,
  productionNotes:
    'Porsche AG states 68,881 cars of Type 993 were built between 1993 and 1998. Note: the per-variant production table on Wikipedia (sourced to Kittler, "Deutsche Autos seit 1990," vol. 6, p.361) sums to roughly 68,029 across its listed model lines — close to, but not identical with, Porsche\'s round-number total. The difference (~850 cars) likely reflects low-volume/special variants (Turbo S, GT2 road cars, factory specials) not broken out in the same table. We carry Porsche\'s 68,881 as the headline figure and flag the discrepancy in the claims rather than picking a winner. The 993 was the last air-cooled 911; the very last car, a Carrera 4S, was completed 31 March 1998.',
  notableTrims: [
    { name: 'Carrera (C2)', note: 'Rear-drive base car. 3.6L M64, 272 PS at launch; 285 PS with VarioRam from MY1996. The 993 was the first 911 with a standard six-speed manual; a four-speed Tiptronic was optional.' },
    { name: 'Carrera 4 (C4)', note: 'All-wheel drive, now using a lighter viscous-coupling system derived from the 959 (replacing the 964\'s heavier three-differential setup). No Tiptronic option.' },
    { name: 'Carrera 4S / Carrera S', note: 'Wide Turbo-look body and brakes with the naturally aspirated engine. C4S (AWD, 1996), then RWD Carrera S (1997). The Carrera S is among the most valued normally aspirated 993s.' },
    { name: 'Targa', note: 'Introduced for MY1996 with an all-new retractable glass "greenhouse" roof that slid under the rear window — a design carried into the 996/997. ~4,583–4,619 built (sources vary slightly).' },
    { name: 'Turbo (3.6 twin-turbo)', note: 'First 911 Turbo with twin turbochargers AND all-wheel drive. 408 PS, fixed whale-tail wing housing the intercoolers.' },
    { name: 'Turbo S', note: 'Porsche Exclusiv high-spec Turbo (MY1997), ~450 PS (US ~424 hp SAE). The last air-cooled 911 Turbo. ~183 built per most sources (disputed).' },
    { name: 'GT2 (road / "GT")', note: 'Rear-drive, stripped, widebody homologation special for FIA GT2 racing. ~430 PS rising to ~450 PS for 1998. Road-car build count is genuinely disputed (see conflict).' },
    { name: 'Carrera RS (3.8)', note: 'Lightweight, naturally aspirated 3.8L, ~300 PS, seam-welded shell, fixed wing. 1,014 built including 227 Clubsport. Not US-legal.' },
    { name: 'RSR 3.8 / Cup', note: 'Pure motorsport variants. Porsche Motorsport built ~45 RSR 3.8 customer race cars; the 993 also underpinned the one-make Carrera Cup/Supercup.' },
  ],
  specs: {
    'Engine (Carrera)': 'M64, 3,600 cc air-cooled SOHC flat-six, twin-spark',
    'Power (Carrera, 1994–95)': '272 PS (268 hp) @ 6,100 rpm',
    'Power (Carrera, VarioRam 1996–98)': '285 PS (282 hp) @ 6,100 rpm',
    'Power (Turbo)': '408 PS (402 hp) — 3.6L twin-turbo',
    'Transmission': '6-speed manual (a 911 first, standard); 4-speed Tiptronic / Tiptronic S optional (RWD only)',
    'Drivetrain': 'Rear-engine; RWD (Carrera/S) or AWD (Carrera 4/4S/Turbo, viscous-coupling)',
    '0–60 mph (Carrera)': '~5.3–5.6 s',
    'Top speed (Carrera)': '~168–171 mph (270 km/h)',
    'Top speed (Turbo)': '~180 mph (290 km/h)',
    'Suspension': 'Front MacPherson struts; NEW all-alloy multilink rear ("Weissach axle") on a light-alloy subframe (LSA chassis) — derived from the stillborn 989 sedan',
    'Brakes': 'Larger cross-drilled discs vs 964; Turbo/RS share four-piston calipers',
    'Curb weight (Carrera coupe)': '~1,370–1,390 kg (3,020–3,064 lb)',
  },
  heroPhoto: null as string | null,
  overallConfidence: 'high' as const,

  summary: `The Porsche 993 is, for many enthusiasts, the definitive 911: the last of the air-cooled cars, sold from 1994 to 1998. Penned by English designer Tony Hatter, it kept the unmistakable 911 silhouette but smoothed and widened it — flared arches, flush glass, polyellipsoid headlamps, and a wide, angled tail that's widely regarded as one of the best-looking 911s ever made.

Underneath, the 993 was a major step over the 964. Porsche fitted an all-new all-alloy multilink rear suspension (the "Weissach axle") on a light-alloy subframe, which finally tamed the lift-off oversteer that had haunted earlier 911s and made the car far more composed and forgiving at the limit. It was also the first 911 with a standard six-speed manual gearbox, and from 1996 the naturally aspirated engine gained Porsche's VarioRam variable intake, lifting output to 285 PS.

The 993 occupies the air-cooled 911's "sweet spot": vintage flat-six character and looks, paired with enough modern composure and usability to be genuinely drivable every day. Add the fact that it closed out 35 years of air cooling, and you have one of the most coveted 911s of all.`,

  history: `## "Practically only the roofline remained"

Porsche has said that with the 993, every part of the car was redesigned from the ground up — though it also conceded that only about 20% of parts carried over and that, visually, "practically only the roofline remained unchanged" from the 964. The new body, by Tony Hatter, traded the upright 964 look for flatter front wings (made possible by polyellipsoid headlights), integrated bumpers, flush windows, and dramatically flared rear arches.

The 993 went on sale in 1994 (1995 model year in the US), initially as Coupe and Cabriolet, both offered in rear-drive and all-wheel-drive form.

## The chassis that changed the 911

The single biggest engineering story is the rear suspension. Porsche binned the long-running semi-trailing-arm layout and fitted an entirely new all-alloy multilink rear end — the "Weissach axle" — mounted to a light-alloy subframe (the LSA chassis), a design derived from the stillborn 989 four-door project. Its self-steering geometry sharply reduced the snap-oversteer reputation of earlier 911s, improved ride and refinement, and is still regarded as the high point of that rear-axle concept. The all-wheel-drive system was also re-thought: out went the 964's heavier three-differential arrangement, replaced by a lighter viscous-coupling setup borrowed in concept from the 959.

## VarioRam and the six-speed

At launch the 3.6-litre flat-six made 272 PS. For the 1996 model year Porsche added **VarioRam** — a variable-length intake system that changes runner length with rpm/load to fatten mid-range torque — lifting output to 285 PS. The 993 was also the first 911 to come standard with a six-speed manual; rear-drive cars could still be ordered with the (now refined) Tiptronic S automatic.

## A broad, now-legendary family

For its short run the 993 spawned a deep lineup: the rear- and all-wheel-drive **Carrera**; the widebody **Carrera 4S / Carrera S**; the glass-roof **Targa** (new for 1996); the twin-turbocharged, AWD **Turbo** and its Exclusiv-built **Turbo S**; the rear-drive, widebody **GT2** homologation special; the lightweight naturally aspirated **Carrera RS 3.8** (and Clubsport); and pure-race **RSR** and Cup cars.

The 993 was replaced in 1998 by the water-cooled 996 — the end of the air-cooled era. The very last air-cooled 911 built for the road, a Riviera Blue Carrera 4S, was completed on 31 March 1998 (and is famously owned by Jerry Seinfeld).`,

  marketNotes: `The 993 rode the air-cooled boom hard. Hagerty documented that 993 #2 ("excellent") values jumped about 31% between January 2014 and January 2017 (some variants up 70%+), with the auction record set in that window — a 1995 GT2 selling for roughly $2.4M (£1,848,000) at RM Sotheby's in 2016.

That frenzy then cooled. Hagerty's December 2019 analysis noted that the 993's Hagerty Vehicle Rating had fallen from 77 to 48, with very low auction-activity scores — buyers were still interested (insurance/quoting activity stayed high) but no longer paying peak prices. Hagerty reported average prices slipping roughly 2–8% with its September 2019 guide update, with Cabriolets down 11–15% and Targas/GT2s down about 12%, while a #3 ("good") 993 carried a median value around $79,000 at that time.

A durable pattern worth knowing: with most classics "top down, price up," but 993s invert it — **Coupes are worth meaningfully more than Cabriolets or Targas**, and manual cars over Tiptronics. The hierarchy runs roughly: GT2 / Carrera RS / Turbo S at the top, then Turbo, then widebody Carrera S/4S, then Targa/Cabriolet, with the manual Carrera coupe as the enthusiast benchmark.

These are directional, date-stamped observations (the hard figures above are 2016–2019 Hagerty data), NOT a current quote. Collector values move. Use the Fully Sorted Value Guide for live comps before buying or selling.`,

  whatToLookFor: `**Documentation and specialist history matter enormously.** A sorted, fully documented car beats a "better-spec" neglected one. Receipts from a recognized air-cooled Porsche specialist are gold on these.

**Secondary air injection (SAI).** On 1996-on (OBD-II) cars, carbon clogs the small secondary-air passages and trips a check-engine light, which can fail emissions/smog testing in some US states. Ask whether the SAI ports have been cleaned and whether a CEL is present — but understand the debate over how much it actually matters (see Common Problems).

**Rust.** The 993 is galvanized and generally rust-resistant, but check door sills, the bottoms of the doors, wheel arches, and under the carpets — neglect and poor repairs show up there.

**Targa roof and seals.** The glass "greenhouse" mechanism is complex and can be unreliable and expensive; check it operates smoothly and look for water ingress, cabin heat complaints, and rattles.

**Turbo specifics.** On Turbos, 1996 cars have weaker transmission input shafts and a non-flashable ECU; 1997–98 cars got stronger shafts and a modifiable ECU. Verify which you're looking at.

**Common annoyances to budget for.** Door check straps (a known 993 weak point, fiddly to fix), tired A/C compressors and plumbing, and lower cam-cover oil weeps. Confirm a real service history rather than assuming.`,

  commonProblems: `**Secondary air injection (SAI) clogging.** The 993's secondary-air system injects air into the exhaust ports on cold start to cut emissions. Over time carbon deposits clog the small passages. On 1996+ OBD-II cars this trips a check-engine light and can mean an automatic smog-test fail in CEL-checking states. There is a genuine debate about severity: many specialists treat clogged SAI ports as primarily an emissions/inspection nuisance with little effect on how the car drives, addressable by cleaning the ports; others have framed worst-case carbon-related work as very expensive. We flag this as disputed.

**Oil leaks.** Generally less troublesome than the 964's, but oil weeps (e.g. from the lower cam covers) are common and usually straightforward to address.

**Door check straps.** A well-known 993 failure point — the strap that holds the door open breaks; the repair is fiddly and can run up labor.

**Targa roof mechanism.** Complex, heavy, and prone to faults; repairs to the glass-roof system can be costly. Also adds weight high in the car.

**Air conditioning.** A/C compressors and associated plumbing can need attention and run into four-figure bills.

**Turbo driveline (1996 cars).** Early 993 Turbos used weaker transmission input shafts given the power + AWD loads; Porsche strengthened them for 1997–98.

**General.** Tired suspension bushings/dampers and deferred maintenance are the usual story on cheaper examples; budget accordingly.`,

  valueTrajectory: `Affordable used 911 in the 2000s → swept up in the air-cooled boom, with documented ~31% gains in "excellent" values from 2014–2017 and an all-time GT2 auction high (~$2.4M) in 2016 → cooled from ~2018, with Hagerty noting 2–8% average dips and the model's vehicle rating falling from 77 to 48 by late 2019. Long term, the 993's status as the last air-cooled 911 — plus a chassis enthusiasts adore and looks many consider the best of any 911 — gives it a durable floor. Coupes and manuals lead; the GT2, Carrera RS, and Turbo S sit at the very top; Cabriolets and Targas trail.`,

  sources: [
    {
      ref: 'porsche',
      title: 'The 993: Pinnacle of the air-cooled era and the last of its kind',
      url: 'https://newsroom.porsche.com/en/history/porsche-911-seven-generations-part-4-type-993-16486.html',
      publisher: 'Porsche AG (Newsroom)',
      sourceType: 'manufacturer',
      reliability: 'high',
      notes: 'Official manufacturer history. Source of the 68,881 total, the 408 PS twin-turbo, the GT2 "limited to 100 / up to 450 PS" line, the Weissach-axle / LSA chassis framing, VarioRam 272→285 PS, and the glass-roof Targa.',
    },
    {
      ref: 'wikipedia',
      title: 'Porsche 911 (993)',
      url: 'https://en.wikipedia.org/wiki/Porsche_911_(993)',
      publisher: 'Wikipedia',
      sourceType: 'reference-book',
      reliability: 'medium',
      notes: 'Aggregator. Per-variant production table sourced to Kittler, "Deutsche Autos seit 1990" vol.6 p.361 (sums to ~68,029). Source of "20% of parts carried over", multilink/989 derivation, GT2 "57 road-legal", RS 1,014 incl. 227 Clubsport, RSR ~45, last-car (Carrera 4S, 31 Mar 1998) detail. Cross-check figures against primaries.',
    },
    {
      ref: 'hagerty-2019',
      title: '1994–98 Porsche 911 (993) values are stalling out, and here is why',
      url: 'https://www.hagerty.com/media/buying-and-selling/1994-98-porsche-993-values-stalling-out-heres-why/',
      publisher: 'Hagerty Media',
      sourceType: 'journalism',
      reliability: 'high',
      notes: 'Dec 2019 market analysis. Source of the 2014–2017 +31% figure, the 2016 GT2 ~$2.4M auction record, the Hagerty Vehicle Rating 77→48 drop, 2–8% average dips, body-style spreads, and the ~$79k #3 median (all date-stamped 2016–2019).',
    },
    {
      ref: 'hagerty-guide',
      title: 'Buying Guide: 1995–98 Porsche 911 (993)',
      url: 'https://www.hagerty.co.uk/articles/buying-guide-1995-98-porsche-911-993/',
      publisher: 'Hagerty UK',
      sourceType: 'journalism',
      reliability: 'high',
      notes: 'Buyer guide; common faults (door check straps, lower cam-cover oil leaks, A/C, rust areas, sunroof/Targa).',
    },
    {
      ref: 'pca-sai',
      title: 'Tech Q&A — 993 Secondary Air Injection System Cleaning',
      url: 'https://www.pca.org/tech/1998-993-secondary-air-injection-system-cleaning',
      publisher: 'Porsche Club of America',
      sourceType: 'club-forum',
      reliability: 'high',
      notes: 'Marque-club technical reference on SAI port clogging/cleaning on the 993 (emissions/CEL issue).',
    },
    {
      ref: 'stuttcars',
      title: 'Porsche 911 (993) Sales & Production Numbers',
      url: 'https://www.stuttcars.com/porsche-911-993-sales-production-numbers/',
      publisher: 'StuttCars',
      sourceType: 'journalism',
      reliability: 'medium',
      notes: 'Enthusiast reference compiling per-year/per-variant build numbers (Turbo, Turbo S, Targa, GT2). Useful for cross-checking; treat as secondary.',
    },
    {
      ref: 'wiki-gt2',
      title: 'Porsche 911 GT2',
      url: 'https://en.wikipedia.org/wiki/Porsche_911_GT2',
      publisher: 'Wikipedia',
      sourceType: 'reference-book',
      reliability: 'medium',
      notes: 'Dedicated GT2 article used to corroborate the 993 GT2 road-car count dispute.',
    },
  ] as SeedSource[],

  claims: [
    {
      section: 'production',
      claimText: 'Total 993 production was about 68,881 cars (Porsche AG figure), 1994–1998, making it the last air-cooled 911 generation.',
      confidence: 'high',
      status: 'disputed',
      sourceRefs: ['porsche', 'wikipedia'],
      conflictNote:
        'Porsche AG states 68,881 built (1993–1998). Wikipedia\'s per-variant table, sourced to Kittler\'s "Deutsche Autos seit 1990" vol.6 p.361, sums to roughly 68,029 across its listed lines — about 850 short of Porsche\'s round number, most likely because low-volume specials (Turbo S, GT2 road cars, factory one-offs) are not all broken out. We carry 68,881 as the headline and note the spread.',
    },
    {
      section: 'history',
      claimText: 'The 993 introduced an all-new all-alloy multilink rear suspension (the "Weissach axle") on a light-alloy subframe, derived from the stillborn 989 sedan, which greatly reduced the 911 lift-off oversteer.',
      confidence: 'high',
      status: 'verified',
      sourceRefs: ['porsche', 'wikipedia', 'hagerty-2019'],
    },
    {
      section: 'specs',
      claimText: 'The naturally aspirated 3.6L M64 made 272 PS at launch (1994–95) and 285 PS from 1996 with the VarioRam variable-intake system; the 993 was also the first 911 with a standard six-speed manual.',
      confidence: 'high',
      status: 'verified',
      sourceRefs: ['porsche', 'wikipedia'],
    },
    {
      section: 'specs',
      claimText: 'The 993 Turbo (1995) used a 3.6L twin-turbocharged flat-six producing 408 PS and was the first 911 Turbo with all-wheel drive.',
      confidence: 'high',
      status: 'verified',
      sourceRefs: ['porsche', 'wikipedia'],
    },
    {
      section: 'history',
      claimText: 'The 993 Targa (new for the 1996 model year) introduced a retractable glass "greenhouse" roof that slides under the rear window, replacing the old removable-panel Targa design.',
      confidence: 'high',
      status: 'verified',
      sourceRefs: ['porsche', 'wikipedia'],
    },
    {
      section: 'production',
      claimText: 'The Carrera RS used a 3.8L naturally aspirated engine (~300 PS); 1,014 were built, including 227 Clubsport variants. It was not US-legal.',
      confidence: 'high',
      status: 'verified',
      sourceRefs: ['wikipedia'],
    },
    {
      section: 'production',
      claimText: 'Only a small number of street-legal 993 GT2 "GT" road cars were built for homologation — but the exact count is disputed.',
      confidence: 'medium',
      status: 'disputed',
      sourceRefs: ['porsche', 'wikipedia', 'wiki-gt2', 'stuttcars'],
      conflictNote:
        'Porsche AG\'s own history says the GT2 was "limited to an edition of 100." Wikipedia\'s 993 article states "Only 57 road-legal variants were built" (13 RHD). Other enthusiast/specialist tallies cite higher totals (~172–194 road cars across the run, including the 1998 Evo update). The figures count different things (early-spec only vs. the entire road-car run incl. 1998 cars). We present the spread rather than a single number.',
    },
    {
      section: 'production',
      claimText: 'The Turbo S (Porsche Exclusiv, MY1997, ~450 PS) was the last air-cooled 911 Turbo, built in roughly 183 units.',
      confidence: 'medium',
      status: 'disputed',
      sourceRefs: ['wikipedia', 'stuttcars'],
      conflictNote:
        'Wikipedia\'s prose says "the final 182 Porsche 911 Turbos built in 1997 were known as the Turbo S," while enthusiast production compilations commonly cite ~183 worldwide (with country splits). The figures cluster around 182–183; treat as approximate, not exact.',
    },
    {
      section: 'problems',
      claimText: 'Secondary air injection (SAI) ports clog with carbon over time; on 1996+ OBD-II cars this trips a check-engine light and can fail emissions testing — but how serious the underlying issue is is disputed.',
      confidence: 'medium',
      status: 'disputed',
      sourceRefs: ['pca-sai', 'hagerty-guide'],
      conflictNote:
        'One view (common among specialists and in PCA tech discussion): clogged SAI ports are primarily an emissions/CEL nuisance that can be cleared by cleaning the ports, with little to no effect on how the car drives. Another view circulating in some buyer guides frames worst-case carbon-related remediation as very expensive (engine-out cleaning). We present SAI as a real, well-documented 993 issue while flagging that severity/cost claims vary widely and the highest cost estimates are not well substantiated.',
    },
    {
      section: 'market',
      claimText: 'Air-cooled 993 values surged ~31% (excellent-condition) from 2014–2017 (GT2 auction record ~$2.4M in 2016), then cooled from ~2018, with Hagerty noting 2–8% average dips and a vehicle-rating fall from 77 to 48 by late 2019.',
      confidence: 'medium',
      status: 'unverified',
      sourceRefs: ['hagerty-2019'],
      conflictNote:
        'Market commentary is directional and date-stamped (Hagerty figures are 2016–2019). Values move; this is not a current quote and should be refreshed against live comps before publish.',
    },
  ] as SeedClaim[],
};

export type Seed993 = typeof seed993;
