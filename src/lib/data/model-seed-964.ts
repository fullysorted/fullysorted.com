/**
 * Pilot model draft — Porsche 911 (964), 1989–1994.
 *
 * This content was cross-checked across multiple INDEPENDENT sources
 * (Porsche AG, Wikipedia citing Kittler's "Deutsche Autos seit 1990",
 * Hagerty buying guide, Porsche Club of America technical Q&A, classic.com)
 * per the Sourcing & Truth-Seeking methodology in
 * RESEARCH-AND-REGISTRY-ROADMAP.md.
 *
 * It is seeded as status = 'draft' — NOT published. Chris reviews each
 * section + claim in /admin/models before it can go live. Where sources
 * disagree, the conflict is recorded as a 'disputed' claim with both sides.
 *
 * Nothing here is copied verbatim from any source — it is synthesized in our
 * own words, with citations stored alongside in `sources`.
 */

export interface SeedSource {
  ref: string; // local key used to link claims → sources
  title: string;
  url: string;
  publisher: string;
  sourceType:
    | 'manufacturer'
    | 'registry'
    | 'factory-record'
    | 'reference-book'
    | 'journalism'
    | 'club-forum';
  reliability: 'high' | 'medium' | 'low';
  notes?: string;
}

export interface SeedClaim {
  section: 'summary' | 'history' | 'production' | 'specs' | 'problems' | 'market';
  claimText: string;
  confidence: 'high' | 'medium' | 'low';
  status: 'verified' | 'unverified' | 'disputed';
  sourceRefs: string[];
  conflictNote?: string;
}

export const seed964 = {
  slug: 'porsche/911-964',
  make: 'Porsche',
  model: '911',
  generation: '964',
  generationCode: '964',
  trim: null as string | null,
  yearStart: 1989,
  yearEnd: 1994,
  bodyStyles: ['Coupe', 'Targa', 'Cabriolet'],
  engines: [
    'M64/01–03 3.6L air/oil-cooled flat-six (247 hp / 250 PS)',
    'M30/69 3.3L turbocharged flat-six (Turbo 3.3, 316 hp / 320 PS)',
    'M64/50 3.6L turbocharged flat-six (Turbo 3.6, ~355 hp / 360 PS)',
  ],
  productionTotal: 63762,
  productionNotes:
    'Total of 63,762 cars built across the run (Porsche AG figures, corroborated by Kittler). Porsche describes the 964 as the rarest 911 generation — the preceding G-series sold over 196,000 cars from 1974–1989. Build of the standard cars ran 1989–December 1993, with some special/Turbo variants completed into 1994. Per-variant figures below come from Kittler, "Deutsche Autos seit 1990" (vol. 6), as compiled on Wikipedia; where a figure is contested it is flagged in the claims.',
  notableTrims: [
    { name: 'Carrera 4 (C4)', note: 'The launch model (1989). First all-wheel-drive 911. ~20,395 built across body styles.' },
    { name: 'Carrera 2 (C2)', note: 'Rear-drive, added 1990. The enthusiasts’ pick — lighter and more communicative than the C4, and the only way to get the Tiptronic auto.' },
    { name: 'Carrera RS (Europe)', note: 'Lightweight, ~260 PS, stripped and stiffened. ~2,282 built. Not US-road-legal.' },
    { name: 'RS America', note: 'US-market spiritual RS: 701 built (1993–94), based on the US C2, lighter, M030 suspension, whale-tail.' },
    { name: 'Turbo 3.3', note: 'Launched March 1990 using a revised 930 3.3 engine; 3,660 built. Whale tail, wide arches.' },
    { name: 'Turbo 3.6', note: 'Jan 1993, 3.6 M64-based turbo, ~355 hp. One of the rarest/most sought 964s — see production conflict.' },
    { name: 'Turbo S Leichtbau / Flachbau', note: 'Ultra-rare lightweight and slant-nose Turbos built by Porsche Exclusiv.' },
    { name: '911 Speedster', note: 'Cut-down screen, C2-based, 1993–94. 936 built per most sources (see conflict).' },
    { name: '30 Jahre / 30th Anniversary', note: 'Wide Turbo body, AWD, NA engine. 911 units built — a deliberate nod to the 911 name.' },
  ],
  specs: {
    'Engine (Carrera)': 'M64, 3,600 cc air/oil-cooled SOHC flat-six',
    'Power (Carrera)': '250 PS (247 hp) @ 6,100 rpm',
    'Torque (Carrera)': '310 N·m (229 lb·ft) @ 4,800 rpm',
    'Transmission': '5-speed Getrag G50 manual; 4-speed Tiptronic auto (C2 only); G64 5-speed manual (C4)',
    'Drivetrain': 'Rear-engine; RWD (C2) or AWD (C4)',
    '0–60 mph': '~5.5 s (manual)',
    'Top speed': '~162 mph (260 km/h)',
    'Drag coefficient': '0.32',
    'Suspension': 'Front MacPherson struts; coil springs replace torsion bars (first major 911 chassis change)',
    'Brakes': 'Power-assisted, ABS standard (a 911 first)',
    'Curb weight (C2)': '~1,375 kg (3,031 lb)',
  },
  heroPhoto: null as string | null,
  overallConfidence: 'high' as const,

  summary: `The Porsche 964 is the 911 that dragged Stuttgart's icon into the modern era without losing its soul. Sold from 1989 to 1994, it was pitched by Porsche as roughly 85% new versus the outgoing G-series Carrera 3.2, yet from ten feet away it still read unmistakably as a 911 — the big change most people noticed was the smooth, body-colored bumpers.

Underneath, the changes were real. The 964 introduced the 3.6-liter M64 flat-six, all-wheel drive (the Carrera 4 was the very first AWD 911), ABS, power steering, and the option of Porsche's Tiptronic automatic. The torsion-bar suspension that had defined every 911 since 1963 was finally replaced with coil springs.

Today the 964 occupies a sweet spot collectors prize: classic air-cooled character and looks, paired with enough modern usability (ABS, power steering, decent climate control) that you can actually drive it. It's also the rarest 911 generation by volume, which underpins its standing in the market.`,

  history: `## A cautious revolution

Porsche developed the 964 through the mid-1980s under design lead Benjamin Dimson, with the brief to modernize the 911 without alienating the faithful. The result went on sale in 1989. Porsche has repeatedly described the car as around 85% new compared with its predecessor — though note that some respected outlets cite 87%, a small but honest discrepancy in the historical record (both numbers come from the same "almost entirely new" story Porsche told at launch).

The first 964 to reach customers was the **Carrera 4** — significantly, an all-wheel-drive car. Until then virtually every 911 (and nearly every Porsche save the limited 959) had been rear-drive. The rear-wheel-drive **Carrera 2** followed in 1990, and it's the C2 that most enthusiasts gravitate to: it's lighter, more communicative, and was the only way to get the new four-speed Tiptronic automatic.

## What actually changed

Beyond AWD, the 964 added ABS and power steering to the 911 for the first time, both standard. An electrically raised rear spoiler deployed above roughly 50 mph (80 km/h) and tucked away flush at lower speeds, cleaning up the aerodynamics without a permanent "whale tail." Flush bumpers and an underbody pan helped drop drag to a claimed Cd of 0.32. The suspension's switch from torsion bars to coil springs was the first fundamental chassis rethink in the model's history.

## A wide and growing family

For a short production run, the 964 spawned an unusually broad lineup: Coupe, Targa, and Cabriolet body styles in both C2 and C4; the **Turbo** (first the 3.3, then the 3.6); the track-focused European **Carrera RS** and its US-market cousin the **RS America**; the **Speedster**; rare **Turbo S** Leichtbau and Flachbau cars from Porsche Exclusiv; and the **30 Jahre** (30th Anniversary) special. The 964 also underpinned the one-make Carrera Cup, which grew into the global Supercup that still supports Formula 1 today.

The 964 was replaced by the 993 — the last and most beloved air-cooled 911 — in 1994, after Porsche had used it to keep the 911 alive through a difficult financial stretch.`,

  marketNotes: `The 964 spent years as the unloved, "cheap" air-cooled 911, which is exactly why it later became a darling of the restomod world (Singer and others built their reputations on 964 donor cars) — and why so many were modified or neglected. As air-cooled values climbed through the late 2010s and into the 2021–2022 peak, clean original 964s appreciated hard.

More recently the market has cooled and stabilized rather than crashed. Aggregated listing data (classic.com) through 2024–2025 shows transaction volume holding up while prices flatten, with standard Carrera 2 coupes broadly trading in the high-five-figures to around US$90k depending on condition, miles, and originality — and exceptional, low-mileage or rare-color cars trading well above that on collector logic. Coupes command a clear premium over Cabriolets and Tiptronic cars; manual C2 coupes are the most sought of the standard cars.

These are directional observations, not a price guarantee — collector values move, and the figures here should be treated as a snapshot (mid-2020s) rather than a current quote. Use the Fully Sorted Value Guide for live comps before buying or selling.`,

  whatToLookFor: `**Buy the car, not the spec.** A sorted, well-documented C4 beats a tired "better-spec" C2 every time. Service history and receipts from a known Porsche specialist matter enormously on these.

**Rust is real.** Because 964s were cheap for so long, neglect and poor repairs are common. Check the headlamp surrounds, where the front wing meets the bumper, around the front and rear screens, and the rear arches and inner arches near the suspension mounts. Sound there usually means a sound body.

**Engine leaks are expected — know which ones matter.** Almost every 964 weeps a little oil. A light film around joints is normal; the expensive ones are leaks that need the engine apart (see Common Problems). A broken cylinder head stud shows up as oil leaks or a high-rpm misfire and means a costly head rebuild.

**Flywheel rattle.** Earlier dual-mass flywheels (pre-1992) are failure-prone; a rattle/vibration at idle is the tell. Most should have been upgraded to the later LuK unit by now — confirm it.

**Distributor vent kit.** Look for evidence one has been fitted; it addresses a known failure of the distributor connecting belt that can cause serious engine damage if it lets go.

**Open cars:** check Cabriolet/Targa seals and headliner for damp, and budget for soft-top wear.

**Don't fear tasteful upgrades** if they're documented and done by a recognized specialist — many 964s have had sensible improvements.`,

  commonProblems: `**Dual-mass flywheel (DMF).** Introduced for MY1990. Early Freudenberg units are prone to premature wear, causing idle vibration and notchy shifts. Porsche revised this for 1992 (the Carrera 4 got a turbo-derived secondary mass; the Carrera 2 moved to a LuK-sourced DMF). Many early cars have already been converted to the sprung LuK unit — verify on any pre-1992 car.

**Oil leaks (cylinder head/base).** The M64 was originally built without head gaskets, and oil tended to weep from the base of the cylinders/head-stud area. Porsche changed the design during the 1991 model year to address it, so 1991-on cars are generally better. A broken head stud (showing as leaks or a high-speed misfire) is the bad case — a full twin-head rebuild runs into several thousand dollars/pounds.

**Case through-bolt O-rings.** Less common, but a leak from the engine-case through-bolt O-rings requires engine disassembly to fix and, under high rpm, can move real volumes of oil rather than just drip.

**Power-steering / accessory seals.** The new-for-964 power steering introduced its own weep points (e.g. the drive-cam seal).

**Distributor belt.** The twin-plug distributor uses an internal connecting belt; failure can be catastrophic. A distributor vent kit is the known preventative.

**General:** air conditioning was weak even when new and often needs attention; Cabriolet/Targa weather seals harden with age.`,

  valueTrajectory: `Cheap and overlooked through the 2000s and early 2010s → swept up in the air-cooled boom of the late 2010s → peak around 2021–2022 → cooling and stabilizing through 2024–2025 (volume steady, prices flat to softer). The long-run story is a car that went from punchline to blue-chip air-cooled 911, helped enormously by the restomod scene that made "964" a household word among enthusiasts. Manual C2 coupes, the RS family, and the 3.6 Turbo sit at the top; Cabriolets, Targas and Tiptronics trail.`,

  sources: [
    {
      ref: 'porsche',
      title: 'What is the Porsche 964? Six things you need to know',
      url: 'https://www.porsche.com/stories/mobility/six-things-you-need-to-know-about-the-964-porsche-911/',
      publisher: 'Porsche AG',
      sourceType: 'manufacturer',
      reliability: 'high',
      notes: 'Official manufacturer history. Source of the 63,762 total and "rarest 911" / 85%-new framing.',
    },
    {
      ref: 'wikipedia',
      title: 'Porsche 911 (964)',
      url: 'https://en.wikipedia.org/wiki/Porsche_911_(964)',
      publisher: 'Wikipedia',
      sourceType: 'reference-book',
      reliability: 'medium',
      notes: 'Per-variant production table sourced to Kittler, "Deutsche Autos seit 1990" vol. 6, p.353. Useful aggregator; cross-check figures against primary sources.',
    },
    {
      ref: 'hagerty',
      title: 'Buying Guide: Porsche 964 (1989–1993)',
      url: 'https://www.hagerty.co.uk/articles/buying-guides/buying-guide-porsche-964-1989-1993/',
      publisher: 'Hagerty UK',
      sourceType: 'journalism',
      reliability: 'high',
      notes: 'Buyer’s guide; common faults, driving character, and 2022-era value guidance. Cites the "87% new" figure.',
    },
    {
      ref: 'pca-dmf',
      title: 'Tech Q&A — 964 Dual Mass Flywheel',
      url: 'https://www.pca.org/tech/964-dual-mass-flywheel-1537319798',
      publisher: 'Porsche Club of America',
      sourceType: 'club-forum',
      reliability: 'high',
      notes: 'Marque-club technical reference for the DMF Freudenberg→LuK history.',
    },
    {
      ref: 'pca-oil',
      title: 'Tech Q&A — Oil Leaks 964',
      url: 'https://www.pca.org/tech/oil-leaks-964',
      publisher: 'Porsche Club of America',
      sourceType: 'club-forum',
      reliability: 'high',
      notes: 'Head-stud / cylinder-base leaks and through-bolt O-ring leaks.',
    },
    {
      ref: 'classic',
      title: 'Porsche 911 — 964 Carrera 2 Market',
      url: 'https://www.classic.com/m/porsche/911/964/carrera-2/',
      publisher: 'classic.com',
      sourceType: 'journalism',
      reliability: 'medium',
      notes: 'Aggregated public listing/auction data for directional value trends (snapshot, not a quote).',
    },
  ] as SeedSource[],

  claims: [
    {
      section: 'production',
      claimText: 'Total 964 production was 63,762 cars, making it the rarest 911 generation by volume.',
      confidence: 'high',
      status: 'verified',
      sourceRefs: ['porsche', 'wikipedia'],
    },
    {
      section: 'summary',
      claimText: 'Porsche describes the 964 as roughly 85% new versus the Carrera 3.2.',
      confidence: 'high',
      status: 'disputed',
      sourceRefs: ['porsche', 'wikipedia', 'hagerty'],
      conflictNote:
        'Porsche AG and Wikipedia state ~85% new; Hagerty’s buying guide says 87%. Both trace to Porsche’s own launch-era "almost entirely new" claim. We present 85% as the manufacturer figure and note the 87% variant rather than picking a winner.',
    },
    {
      section: 'history',
      claimText: 'The Carrera 4 (1989) was the first all-wheel-drive 911; the rear-drive Carrera 2 followed in 1990.',
      confidence: 'high',
      status: 'verified',
      sourceRefs: ['porsche', 'wikipedia'],
    },
    {
      section: 'specs',
      claimText: 'The naturally aspirated M64 is a 3.6L flat-six producing 250 PS (247 hp); the 964 added standard ABS and power steering and replaced torsion bars with coil springs.',
      confidence: 'high',
      status: 'verified',
      sourceRefs: ['wikipedia', 'porsche', 'hagerty'],
    },
    {
      section: 'production',
      claimText: 'The Turbo 3.6 was produced only for MY1993–1994 in small numbers.',
      confidence: 'medium',
      status: 'disputed',
      sourceRefs: ['wikipedia', 'porsche'],
      conflictNote:
        'Figures vary by source: the Kittler-based production table lists 1,437 Turbo 3.6 cars; Wikipedia’s prose says "fewer than 1,500"; some enthusiast write-ups say ~1,600. We cite ~1,437 as the best-documented figure and flag the spread.',
    },
    {
      section: 'production',
      claimText: 'Roughly 936 Speedsters were built (1993–94).',
      confidence: 'medium',
      status: 'disputed',
      sourceRefs: ['wikipedia', 'hagerty', 'porsche'],
      conflictNote:
        'Wikipedia (detailed table) and Hagerty cite 936 Speedsters; Porsche’s own article phrases it as "just 930 ... plus a further 15" wide-body cars. The ~936 figure is the most commonly documented; minor discrepancy noted.',
    },
    {
      section: 'problems',
      claimText: 'Pre-1992 dual-mass flywheels (Freudenberg) are failure-prone and were revised by Porsche in 1992 (LuK for the C2).',
      confidence: 'high',
      status: 'verified',
      sourceRefs: ['pca-dmf', 'hagerty'],
    },
    {
      section: 'problems',
      claimText: 'The M64 originally lacked head gaskets and tended to leak oil at the cylinder base; the design was revised during the 1991 model year.',
      confidence: 'high',
      status: 'verified',
      sourceRefs: ['pca-oil', 'hagerty'],
    },
    {
      section: 'market',
      claimText: 'Air-cooled 964 values peaked around 2021–2022 and have since cooled/stabilized, with volume steady and prices flat to softer through 2024–2025.',
      confidence: 'medium',
      status: 'unverified',
      sourceRefs: ['classic', 'hagerty'],
      conflictNote:
        'Market commentary is directional and date-stamped (mid-2020s snapshot). Values move; this is not a current quote. Should be refreshed against live comps before publish.',
    },
  ] as SeedClaim[],
};

export type Seed964 = typeof seed964;
