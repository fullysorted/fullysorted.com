/**
 * Model draft — Datsun 240Z (Nissan S30), 1969–1973 (US-market 240Z).
 *
 * This content was cross-checked across multiple INDEPENDENT sources
 * (Nissan Heritage Collection, Wikipedia citing the Japan Automobile
 * Manufacturers Association "Automobile Guide Book" volumes + Road & Track +
 * Brian Long's "Datsun Z" history, Hagerty's buyer's guide, the IZCC/zhome.com
 * production research by Carl Beck, Japanese Nostalgic Car's Goertz reporting,
 * and ZCarGuide's technical guides) per the Sourcing & Truth-Seeking
 * methodology in RESEARCH-AND-REGISTRY-ROADMAP.md.
 *
 * It is seeded as status = 'draft' — NOT published. Chris reviews each
 * section + claim in /admin/models before it can go live. Where sources
 * disagree (production totals, the famous design-credit debate, the Series
 * naming conventions), the conflict is recorded as a 'disputed' claim with
 * both sides.
 *
 * Nothing here is copied verbatim from any source — it is synthesized in our
 * own words, with citations stored alongside in `sources`.
 */

import type { SeedSource, SeedClaim } from './model-seed-964';

export const seed240z = {
  slug: 'datsun/240z',
  make: 'Datsun',
  model: '240Z',
  generation: 'S30',
  generationCode: 'S30',
  trim: null as string | null,
  yearStart: 1969,
  yearEnd: 1973,
  bodyStyles: ['Coupe (2-seat fastback)'],
  engines: [
    'L24 2.4L SOHC inline-six (151 hp SAE gross / 140 PS DIN) — export 240Z',
    'L20A 2.0L SOHC inline-six (130 PS JIS) — Japanese-market Fairlady Z',
    'S20 2.0L DOHC 24-valve inline-six (160 PS JIS) — Japan-only Fairlady Z432',
  ],
  productionTotal: 164616,
  productionNotes:
    'Nissan-released figures (compiled by Carl Beck / IZCC at zhome.com) show 168,584 S30s exported from Japan across 1969–1973, of which 164,616 are documented specifically as 240Z; the ~3,968-car difference may be late-1973 cars that were in fact early-1974 260Zs. Export build by year: 1970 ≈ 17,005; 1971 ≈ 40,219; 1972 ≈ 60,025; 1973 ≈ 51,332. The United States took roughly 90% of 240Z output. These totals cover the export 240Z only — they do NOT include the separate Japanese-market Fairlady Z (L20-engined) or the Fairlady Z432/Z432R. Across the whole S30 family (240Z/260Z/280Z + Fairlady, 1969–1978) Nissan and the motoring press cite well over half a million cars, a sports-car production record for a single model line. Per-year/market figures here are flagged in the claims where sources phrase them differently.',
  notableTrims: [
    { name: '240Z (HLS30, LHD)', note: 'The left-hand-drive export car — the one Americans know. ~90% of all 240Z production went to the US.' },
    { name: '240Z (HS30, RHD)', note: 'Right-hand-drive export car for the UK, Australia and other RHD markets. Just ~4,287 RHD export cars were built — comparatively rare.' },
    { name: 'Fairlady Z (S30, JDM)', note: 'Japanese home-market car with the smaller 2.0L L20 six (130 PS JIS), to sit under Japan’s engine-displacement road-tax threshold. Sold as "Fairlady" to echo the earlier Datsun Sports roadster.' },
    { name: 'Fairlady 240Z (HS30-H / 240ZG)', note: 'Japan-only 2.4L home-market car. The 240ZG (Oct 1971) added a long fiberglass "aero-dyna" G-nose, over-fenders and spoiler to homologate for Group 4 racing.' },
    { name: 'Fairlady Z432 (PS30)', note: 'Japan-only halo car using the Skyline GT-R’s S20 2.0L DOHC 24-valve six (160 PS JIS). "432" = 4 valves/cyl, 3 carbs, 2 cams. ~420 built.' },
    { name: 'Fairlady Z432-R (PS30-SB)', note: 'Lightweight homologation special of the Z432 — thinner steel, fiberglass hood, acrylic windows, stripped interior, 100 L tank. Fewer than ~50 thought built; the most valuable Z.' },
  ],
  specs: {
    'Engine (240Z export)': 'Nissan L24, 2,393 cc SOHC cast-iron-block / alloy-head inline-six, 7-bearing crank',
    'Bore × stroke': '83 mm × 73.7 mm',
    'Compression ratio': '9.0:1',
    'Fuel system': 'Twin Hitachi 1.75 in (44 mm) SU-type (constant-velocity) carburetors',
    'Power (240Z export)': '151 hp (153 PS) SAE gross @ 5,600 rpm; 140 PS (138 hp) DIN',
    'Torque (240Z export)': '146 lb·ft (198 N·m) SAE gross @ 4,400 rpm',
    'Transmission': '4-speed manual (US standard); 5-speed manual (non-US); 3-speed automatic optional from late 1970',
    'Drivetrain': 'Front-engine, rear-wheel-drive',
    'Suspension': 'Four-wheel independent: front MacPherson struts; rear Chapman struts, coil springs',
    'Steering': 'Rack and pinion',
    'Brakes': 'Front discs, rear drums',
    '0–60 mph': '~8.0 s (period road tests)',
    'Top speed': '~125 mph (201 km/h)',
  },
  heroPhoto: null as string | null,
  overallConfidence: 'high' as const,

  summary: `The Datsun 240Z is the car that put Japan on the sports-car map. Launched for 1970 (built from late 1969), it paired a smooth 2.4-liter overhead-cam inline-six, four-wheel independent suspension and genuinely pretty long-hood fastback styling with a price that badly undercut the European competition. For roughly the cost of an MGB you got performance and sophistication closer to a Jaguar E-Type or BMW coupe — and from a dealer network that could actually service it.

The result was an instant hit with long waiting lists. Americans bought the overwhelming majority of them; the 240Z became Datsun's "halo" car and changed how the world saw Japanese automakers, who until then were known for sensible economy cars rather than desirable sports machines.

In Japan the same car was sold as the Nissan Fairlady Z, with a smaller 2.0-liter engine for tax reasons, and in rare halo form as the twin-cam Fairlady Z432. Today the early "Series I" US 240Zs are the most collectible of the breed, and clean, honest, rust-free examples have moved firmly from "affordable classic" toward blue-chip status.`,

  history: `## Mister K's idea

The Z was driven into existence by **Yutaka "Mister K" Katayama**, president of Nissan Motor Corporation U.S.A., who wanted an attainable, youth-oriented sports car for the American market with the look and feel of something far more expensive — his own touchstone was the Jaguar E-Type. The car went on sale in the US as a 1970 model in October 1969, and in Japan as the Nissan Fairlady Z (the "Fairlady" name carried over from Datsun's earlier sports roadster).

## The design-credit debate

Who actually styled the S30 is one of the most persistent arguments in collector-car history, so we present it neutrally. The factory and the Nissan enthusiast community credit a team led by **Yoshihiko Matsuo**, head of Nissan's Sports Car Styling Studio, and there is a well-documented trail of his sketches showing the shape evolving. A competing popular story gives credit to German designer **Albrecht Graf von Goertz** (of BMW 507 fame), who consulted for Nissan from 1963–1965 on an unrelated two-liter sports-car project (a stillborn Nissan–Yamaha collaboration) that was never produced. In a 1980 letter — written to head off a threatened lawsuit — Nissan stated that the 240Z was the work of its own design staff, while acknowledging that those designers had been "influenced by" and "had the benefit of" Goertz's earlier work for Nissan. Most marque historians today credit Matsuo's team for the production S30 and treat the "Goertz designed the Z" claim as a myth; we record both positions rather than pick a side.

## Why it mattered

The 240Z undercut its rivals dramatically while offering things they didn't: an overhead-cam straight-six (not a four), four-wheel independent suspension, front disc brakes, and a comfortable, well-equipped cabin. Period reviewers and buyers responded immediately, and the car generated long waiting lists. It also won on track and in rallying — including the 1973 East African Safari Rally in Shekhar Mehta's hands — and is widely credited, alongside the Datsun 510, with kick-starting the Japanese performance-aftermarket industry in the US.

## One car, several names

In export markets the car was the **Datsun 240Z** (chassis **HLS30** for left-hand drive, **HS30** for right-hand drive). In Japan it was the **Nissan Fairlady Z**, normally with the smaller 2.0-liter L20 six so it fell under a lower engine-displacement road-tax band; a 2.4-liter Fairlady 240Z (HS30) was also offered there at a higher tax cost. The Japan-only **Fairlady Z432 (PS30)** used the Skyline GT-R's exotic S20 twin-cam 24-valve two-liter, with the lightweight **Z432-R** as a homologation special. The Japan-only **240ZG** (HS30-H) wore the aerodynamic "G-nose."

The 240Z ran in the US through the 1973 model year, after which a larger-displacement **260Z** (2.6L) took over for 1974, followed by the fuel-injected **280Z** (2.8L) — but the 2.4-liter original is the car enthusiasts mean when they say "the Z."`,

  marketNotes: `The 240Z spent decades as a cheap, attainable classic, which is exactly why so many were modified, neglected, or lost to rust. That has changed sharply. Hagerty's buyer's guide noted that a #2 ("Excellent") condition 240Z worth roughly US$20,000 around 2011 had climbed to about US$54,500 by early 2021, with especially strong appreciation in the 2015–2018 window and several recent six-figure outliers for exceptional cars. Interest skews younger than most classics, toward Gen X and millennial buyers.

At the very top of the market, rarity rules: a 1970 Fairlady Z432-R sold at a Japanese auction in January 2020 for about A$1.17 million (roughly US$837,000) — but that is a Japan-only, sub-50-unit homologation special, not a US 240Z, and should not be read across to ordinary cars.

For an ordinary US 240Z, the value story is condition-and-rust-driven: early "Series I" cars, documented originality, and clean metal command large premiums, while rusty or heavily modified cars trade for far less. These are directional, date-stamped observations (the Hagerty figures above are early-2020s), not a price guarantee — collector values move. Use the Fully Sorted Value Guide for live comps before buying or selling.`,

  whatToLookFor: `**Rust is the number-one issue — assume it until proven otherwise.** These unibody cars rot in well-known places: the floor pans, frame rails, rocker/sill panels, the battery tray area (battery acid accelerates it), the front fenders behind the wheels, the dogleg/rear quarter and wheel arches, around the windshield and the rear hatch surround, and the spare-wheel well. Even a car advertised as "rust-free" frequently hides rot or past filler/fiberglass repairs. Sound metal here is worth more than almost any other attribute.

**Check for bad past repairs.** Because they were cheap for so long, many 240Zs were patched with body filler or fiberglass over rot. Most panels are now reproduced, so budget honestly rather than walking away from an otherwise good car — but price accordingly.

**SU carbs that have sat.** The twin Hitachi/SU-type carbs are simple and excellent when set up, but they fall out of tune and gum up if a car sits, and modern ethanol fuel is hard on them. A car that's been parked will usually want the carbs cleaned/rebuilt and properly balanced and tuned — ask the seller directly.

**Originality / running changes.** Nissan made constant running changes across Series I–IV; verify part numbers, badges and stampings if originality matters to you, and be wary of top-dollar cars with no paperwork. The earliest 1969–mid-1971 "Series I" cars (chrome sail-pillar 240Z badge, hatch vents) are the most prized.

**Drivetrain and rubber.** Listen and drive: the L24 is tough but check for the usual leaks/smoke; budget for perished suspension and weatherstrip rubber (all readily available) and old tires (check date codes).`,

  commonProblems: `**Rust (the defining problem).** The S30 unibody rusts in the floors, frame rails, rockers/sills, battery tray, front fenders, rear quarters/dogleg, wheel arches, windshield and hatch surrounds, and spare-wheel well. It is the single biggest factor in 240Z values and restoration cost.

**SU-type carburetor tuning.** The twin 1.75 in Hitachi SU-type (constant-velocity) carbs reward correct setup with smooth response and good economy, but they drift out of balance, wear (throttle-shaft/needle), and clog after sitting — and modern fuel doesn't help. Specialists often use a Gunson Colortune and a carb balancer to set mixture and synchronize them. A poorly running 240Z is very often just out-of-tune or tired carbs rather than anything catastrophic.

**Emissions-era running changes (1973).** For the 1973 model year US cars got emissions-oriented "flat-top" SU carburetors and a revised (E88) cylinder head; the flat-top carbs in particular are widely considered harder to keep tuned, and many owners convert to the earlier round-top SUs.

**General age items.** Perished suspension bushings and body weatherstripping, tired cooling systems, and decades-old wiring are routine on unrestored cars. The L-series six itself is robust and parts support (including upgrades from the later 280ZX) is strong.`,

  valueTrajectory: `Cheap, modified and rust-prone "affordable classic" through the 1990s–2000s → steady climb through the 2010s (Hagerty cites ~74% growth for #2 cars across 2015–2018) → strong demand into the early 2020s with occasional six-figure results for the best cars, while rough/rusty cars stay far cheaper. Series I US cars, documented original examples, and rare RHD/Japan-only variants (240ZG, Z432, Z432-R) sit at the top; rusty or heavily modified cars trail. The long arc is a car that moved from punchline to genuinely respected blue-chip Japanese classic, helped by a younger collector base.`,

  sources: [
    {
      ref: 'nissan-heritage',
      title: 'Fairlady Z432 (1969: PS30) — Nissan Heritage Collection',
      url: 'https://www.nissan-global.com/EN/HERITAGE_COLLECTION/fairlady_z_432.html',
      publisher: 'Nissan Motor Co.',
      sourceType: 'manufacturer',
      reliability: 'high',
      notes: 'Official manufacturer heritage entry. Source for the Z432 (S20 twin-cam, "432" = 4 valves/3 carbs/2 cams) and the Fairlady naming in Japan.',
    },
    {
      ref: 'wikipedia',
      title: 'Nissan Fairlady Z (S30)',
      url: 'https://en.wikipedia.org/wiki/Nissan_Fairlady_Z_(S30)',
      publisher: 'Wikipedia',
      sourceType: 'reference-book',
      reliability: 'medium',
      notes: 'Aggregator, but well-cited: L24 specs sourced to Northey "World of Automobiles" and Alla Bilar -74; JDM details to the JAMA Automobile Guide Book vols. 19–23; Z432/Z432-R to Road & Track and Sports Car Market. Cross-checked against primary sources here.',
    },
    {
      ref: 'hagerty',
      title: 'Your handy 1970–73 Datsun 240Z buyer’s guide',
      url: 'https://www.hagerty.com/media/buying-and-selling/your-handy-1970-73-datsun-240z-buyers-guide/',
      publisher: 'Hagerty',
      sourceType: 'journalism',
      reliability: 'high',
      notes: 'Sajeev Mehta buyer’s guide. Source for Series I–IV running changes, per-year US sales, rust guidance, and early-2020s value context. NB: its intro mis-labels the early engine "L20 2.4L" — a typo; it is the L24 (corrected against Wikipedia/Nissan).',
    },
    {
      ref: 'zhome-production',
      title: 'Production and Distribution of the Datsun 240Z',
      url: 'https://www.zhome.com/History/240ZProduction/240ZProduction.htm',
      publisher: 'Internet Z Car Club (Carl Beck, IZCC)',
      sourceType: 'registry',
      reliability: 'medium',
      notes: 'Marque-registry research compiling Nissan-released production/export figures by year and market, plus the 543-car 1969 run and the HLS30 #13 "first car sold" detail. Enthusiast-compiled; treat exact splits as best-documented rather than audited.',
    },
    {
      ref: 'jnc-goertz',
      title: 'Goertz Myths Will Never Die, Part II',
      url: 'https://japanesenostalgiccar.com/goertz-myths-will-never-die-part-ii/',
      publisher: 'Japanese Nostalgic Car',
      sourceType: 'journalism',
      reliability: 'medium',
      notes: 'Specialist reporting on the design-credit debate, including the full text of Nissan’s 1980 letter to Goertz. Used to present BOTH sides of the Matsuo-vs-Goertz question neutrally.',
    },
    {
      ref: 'zcarguide-carbs',
      title: 'Datsun 240Z Carburetor Guide — SU Carburetors',
      url: 'https://zcarguide.com/datsun-240z-carburetor-guide/',
      publisher: 'ZCarGuide',
      sourceType: 'club-forum',
      reliability: 'medium',
      notes: 'Enthusiast technical guide for the SU-type carbs: tuning, clogging after sitting, ethanol-fuel issues, Colortune use, and the 1973 flat-top conversion. Corroborates Hagerty.',
    },
    {
      ref: 'zcarguide-rust',
      title: 'Z Car Rust Inspection Guide — Common Rust Areas',
      url: 'https://zcarguide.com/datsun-240z-rust-inspection-guide-common-rust-areas/',
      publisher: 'ZCarGuide',
      sourceType: 'club-forum',
      reliability: 'medium',
      notes: 'Enthusiast rust-inspection reference (floors, frame rails, battery tray, fenders, arches, hatch surround). Corroborates Hagerty’s rust warnings.',
    },
  ] as SeedSource[],

  claims: [
    {
      section: 'production',
      claimText:
        'Roughly 164,616 export 240Zs were built/exported across 1969–1973 (out of ~168,584 total S30 export cars in that window), with the US taking about 90%.',
      confidence: 'medium',
      status: 'disputed',
      sourceRefs: ['zhome-production', 'wikipedia'],
      conflictNote:
        'Nissan-released figures compiled by IZCC/zhome.com give 168,584 S30s exported 1969–1973, of which 164,616 are documented as 240Z (the ~3,968 difference may be late-1973 cars that were really early 260Zs). Many secondary sources round this to "about 168,000 240Zs," which conflates the two numbers. We cite 164,616 as the best-documented 240Z-specific figure and note the ~168,000 rounding. Exact totals are enthusiast-compiled, not independently audited.',
    },
    {
      section: 'history',
      claimText:
        'The S30 was championed by Yutaka "Mister K" Katayama (Nissan USA) and styled by a team led by Yoshihiko Matsuo, head of Nissan’s Sports Car Styling Studio.',
      confidence: 'high',
      status: 'disputed',
      sourceRefs: ['wikipedia', 'jnc-goertz', 'nissan-heritage'],
      conflictNote:
        'Nissan and most marque historians credit Matsuo’s in-house team, backed by a documented sketch trail. A widespread popular account instead credits German designer Albrecht von Goertz, who consulted for Nissan 1963–65 on a separate, never-produced Nissan–Yamaha sports car. Nissan’s 1980 letter (drafted to avert a threatened Goertz lawsuit) called the 240Z the work of its own staff while acknowledging they had "the benefit of" Goertz’s earlier work. We present both sides and lean to Matsuo for the production car.',
    },
    {
      section: 'specs',
      claimText:
        'The export 240Z used the 2.4L (2,393 cc) Nissan L24 SOHC inline-six with twin Hitachi SU-type carburetors, producing 151 hp SAE gross (140 PS DIN).',
      confidence: 'high',
      status: 'verified',
      sourceRefs: ['wikipedia', 'hagerty'],
      conflictNote:
        'Figure is quoted differently by convention: 151 hp SAE gross vs 140 PS / 138 hp DIN are the same engine measured two ways, not a real disagreement. (Hagerty’s intro mistypes it as an "L20 2.4L"; the displacement is correct, the engine is the L24.)',
    },
    {
      section: 'specs',
      claimText:
        'The 240Z had four-wheel independent suspension (front MacPherson struts, rear Chapman struts), front disc brakes and rack-and-pinion steering — sophistication associated with far pricier European cars.',
      confidence: 'high',
      status: 'verified',
      sourceRefs: ['wikipedia', 'hagerty'],
    },
    {
      section: 'history',
      claimText:
        'The car was sold as the Datsun 240Z for export (HLS30 LHD / HS30 RHD) but as the Nissan Fairlady Z in Japan, where the standard car used the smaller 2.0L L20 six for road-tax reasons.',
      confidence: 'high',
      status: 'verified',
      sourceRefs: ['wikipedia', 'nissan-heritage', 'zhome-production'],
    },
    {
      section: 'history',
      claimText:
        'A Japan-only Fairlady Z432 (PS30) used the Skyline GT-R’s S20 2.0L DOHC 24-valve six (160 PS JIS); "432" denotes 4 valves per cylinder, 3 carburetors, 2 camshafts. Roughly 420 were built.',
      confidence: 'high',
      status: 'verified',
      sourceRefs: ['nissan-heritage', 'wikipedia'],
    },
    {
      section: 'history',
      claimText:
        'US 240Z production is commonly divided into "Series" (I–IV) reflecting running changes; early 1969–mid-1971 "Series I" cars (chrome sail-pillar badge, hatch vents) are the most collectible.',
      confidence: 'medium',
      status: 'disputed',
      sourceRefs: ['hagerty'],
      conflictNote:
        'The "Series I/II/III/IV" scheme is an enthusiast/market convention rather than an official Nissan model designation, and different sources draw the lines slightly differently (e.g., what counts as "Series I"). We use it descriptively, noting it is a collector convention, not a factory series code.',
    },
    {
      section: 'problems',
      claimText:
        'Rust is the defining problem on the S30 — floors, frame rails, rockers/sills, battery tray, front fenders, rear quarters, wheel arches, and the windshield and hatch surrounds — and is the biggest driver of value and restoration cost.',
      confidence: 'high',
      status: 'verified',
      sourceRefs: ['hagerty', 'zcarguide-rust'],
    },
    {
      section: 'problems',
      claimText:
        'The twin SU-type carburetors run well when properly set up but drift out of tune and clog after sitting (worsened by modern ethanol fuel); the 1973 emissions "flat-top" carbs are widely considered harder to keep tuned and are often converted back to round-tops.',
      confidence: 'high',
      status: 'verified',
      sourceRefs: ['zcarguide-carbs', 'hagerty'],
    },
    {
      section: 'market',
      claimText:
        'Values rose strongly through the 2010s into the early 2020s; Hagerty cited a #2-condition 240Z moving from ~US$20k (c.2011) to ~US$54,500 (early 2021), with occasional six-figure results for exceptional cars.',
      confidence: 'medium',
      status: 'unverified',
      sourceRefs: ['hagerty'],
      conflictNote:
        'Market commentary is directional and date-stamped (early-2020s Hagerty snapshot). Values move; this is not a current quote, and Japan-only outliers (e.g., the ~US$837k Z432-R auction result) must not be read across to ordinary US 240Zs. Refresh against live comps before publish.',
    },
  ] as SeedClaim[],
};

export type Seed240z = typeof seed240z;
