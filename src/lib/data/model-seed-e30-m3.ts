/**
 * Model draft — BMW M3 (E30), 1986–1991.
 *
 * Cross-checked across multiple INDEPENDENT sources per the Sourcing &
 * Truth-Seeking methodology in RESEARCH-AND-REGISTRY-ROADMAP.md:
 *   - BMW M / BMW Group Classic (manufacturer / heritage)
 *   - Wikipedia "BMW M3", whose E30 production table cites Kittler,
 *     "Deutsche Autos 1945–1990" (a respected reference work)
 *   - Hagerty buyer's guide (reputable journalism / valuation)
 *   - autoevolution & SlashGear S14 engine deep-dives
 *   - Element Performance (independent E30 M3 marque specialist) on faults
 *
 * It is seeded as status = 'draft' — NOT published. Chris reviews each
 * section + claim in /admin/models before it can go live. Where sources
 * genuinely disagree (most notably the U.S.-market production total, where
 * Wikipedia/Kittler say 5,300 and Hagerty says 5,115; and the headline
 * power of the Sport Evolution, quoted as both 238 PS and 235 hp), the
 * conflict is recorded as a 'disputed' claim with both sides.
 *
 * Nothing here is copied verbatim from any source — it is synthesized in our
 * own words, with citations stored alongside in `sources`.
 *
 * Reuses the SeedSource / SeedClaim types from the 964 pilot so both drafts
 * share one shape for the /admin review tooling and the data layer.
 */

import type { SeedSource, SeedClaim } from './model-seed-964';

export const seedE30M3 = {
  slug: 'bmw/m3-e30',
  make: 'BMW',
  model: 'M3',
  generation: 'E30',
  generationCode: 'E30',
  trim: null as string | null,
  yearStart: 1986,
  yearEnd: 1991,
  bodyStyles: ['Coupe', 'Convertible'],
  engines: [
    'S14B23 2.3L DOHC inline-four (195–197 PS standard; 215 PS Evolution II / late M3)',
    'S14B25 2.5L DOHC inline-four (Sport Evolution, 238 PS / 235 hp)',
    'S14B20 2.0L DOHC inline-four (Italy/Portugal tax-special market cars)',
  ],
  productionTotal: 17970,
  productionNotes:
    'Total E30 M3 production was 17,970 cars per the Wikipedia "BMW M3" production table, which cites the reference work by Kittler — broken down as 17,184 coupés and 786 convertibles. BMW M itself promotes the E30 M3 as a homologation special built to satisfy Group A touring-car rules. Per-variant figures below (Evolution 505, Evolution II 501, Sport Evolution 600, Cecotto/Ravaglia 505, U.S. spec ~5,300) come from the same Kittler-sourced table; where a figure is contested by another reputable source it is flagged in the claims. Note a recurring confusion in casual write-ups: ~17,970 is the road-car total for the E30 M3 specifically; figures like 23,000+ usually fold in race cars or conflate the M3 with the wider E30 family and should be treated with caution.',
  notableTrims: [
    { name: 'M3 (standard / "base")', note: 'The homologation road car. Euro spec made ~195–197 PS from the 2.3L S14; a catalysed variant for tighter-emissions markets made ~195 PS (192 hp). Largest single cohort of the run.' },
    { name: 'M3 Evolution ("EVO1", 1987)', note: 'Homologation step: revised cylinder head (an "E" stamp), unchanged ~197 PS. 505 built Mar–May 1987. Not sold in the U.S.' },
    { name: 'M3 Evolution II ("EVO2", 1988)', note: '220 PS, lighter decklid, thinner glass, BBS 16in wheels, brake ducts, more aggressive aero. 501 built. Not sold in the U.S.' },
    { name: 'M3 Sport Evolution ("EVO3" / "Evo III", 1990)', note: 'The ultimate E30 M3: 2.5L S14, ~238 PS, adjustable front splitter and rear wing, lighter, lower, only Brilliant Red or Glossy Black. 600 built — the most collectible variant.' },
    { name: 'M3 Cecotto / Ravaglia (1989)', note: 'Named for works drivers Johnny Cecotto and Roberto Ravaglia. EVO2-style body kit, special colours, 215 PS late-spec engine. Commonly cited as 505 cars combined (≈480 Cecotto + 25 UK-market Ravaglia).' },
    { name: 'M3 Europameister (1988)', note: 'Celebrated the 1988 European Touring Car title. 148 cars in Macao Blue with extended grey leather and a Ravaglia-signed plaque.' },
    { name: 'M3 Convertible (Cabriolet)', note: 'Hand-finished open M3 built to ~786 units through June 1991. Far rarer than the coupé and not part of the Group A homologation story.' },
    { name: 'M3 Pickup (prototype)', note: 'A one-off 1986 factory workshop hack on the convertible floorpan; used by BMW M as a transporter for ~26 years. Never a production model.' },
  ],
  specs: {
    'Engine (standard)': 'S14B23, 2,302 cc DOHC 16-valve inline-four, individual throttle bodies, solid lifters',
    'Power (standard)': '195–197 PS (192–197 hp) @ ~6,750 rpm; 215 PS on late/Evolution cars',
    'Engine (Sport Evo)': 'S14B25, 2,467 cc — 238 PS (235 hp) @ 7,000 rpm',
    'Torque (standard)': '~230 N·m (170 lb·ft)',
    'Transmission': 'Getrag 5-speed manual; Euro cars used a dogleg first-gear pattern, U.S. cars a conventional H-pattern with overdrive 5th',
    'Drivetrain': 'Front-engine, rear-wheel drive; clutch-type limited-slip differential',
    'Redline': '~7,250 rpm',
    '0–60 mph': '~6.5–7.0 s (standard); ~6.5 s (Sport Evo)',
    'Top speed': '~146 mph standard; ~154 mph (250 km/h) Sport Evo',
    'Drag coefficient': '~0.33 (down from ~0.38 on the standard E30 coupe)',
    'Brakes': 'Four-wheel discs with Bosch ABS, derived from the E28 5 Series',
    'Bodywork': 'Bespoke vs standard E30: widened fenders front and rear, deeper valences, extended sills, re-angled rear glass via a reshaped C-pillar, taller bootlid and rear spoiler. Only the bonnet, roof panel and sunroof are commonly cited as shared with the regular E30 coupe.',
  },
  heroPhoto: null as string | null,
  overallConfidence: 'high' as const,

  summary: `The BMW M3 (E30) is the car that founded the M3 name, and it was born for one reason: to go racing. BMW needed a homologation special to qualify a 3 Series for Group A touring-car competition (most famously the DTM), and the rules required a run of road cars to make the racer legal. The result, shown at the 1985 Frankfurt show and built from 1986, was not a tarted-up 320i but a purpose-built machine with bespoke bodywork and a bespoke engine.

That engine is the heart of the legend: the four-cylinder S14, built on BMW's M10 block but topped with a twin-cam, 16-valve head derived from the M88/S38 six used in the M1 and the original M5 — effectively that famous six with two cylinders lopped off. Fed by four individual throttle bodies and spun to a ~7,250 rpm redline, it made roughly 195–197 PS at launch and climbed to 238 PS in the final Sport Evolution.

On the road the E30 M3 is celebrated less for outright pace than for balance, steering feel and the way the whole car was engineered around the corner rather than the straight. On the track it became the most successful touring car of its era. Today it is a blue-chip modern classic — the Sport Evolution especially — and the founding chapter of a model line that still runs today.`,

  history: `## Built to go racing

The E30 M3 exists because of Group A homologation. To field a competitive 3 Series in series such as the DTM (Deutsche Tourenwagen Meisterschaft), the European and World Touring Car Championships and beyond, BMW Motorsport had to build and sell a quota of road-going cars closely related to the racer. So the M3 was conceived from the outset as a motorsport tool that happened to be street-legal — BMW M markets it to this day as the homologation special that launched the M3 name. It debuted at the 1985 Frankfurt Motor Show and reached customers in 1986.

## A four-cylinder with six-cylinder genes

Rather than start from one of BMW's straight-sixes, engineer Paul Rosche built the S14 around the M10 four-cylinder block and crowned it with a twin-cam 16-valve aluminium head derived from the M88 (the engine of the M1 supercar, later the S38 of the original M5). In effect it is that motorsport six with two cylinders removed — lighter over the nose and happy to rev. With individual throttle bodies and solid lifters it produced about 195–197 PS at launch (a catalysed version for stricter markets made ~195 PS / 192 hp), rising to 215 PS on later and Cecotto/Ravaglia cars. The U.S. always received a catalysed car.

## Bodywork that only looks like a 3 Series

From a distance the M3 reads as an E30 coupe, but very little of the skin is shared. BMW widened the fenders front and rear to cover motorsport rubber, fitted deeper bumper valences and extended sills, reshaped the C-pillar to re-angle the rear glass, and added a taller bootlid with a prominent spoiler — changes that dropped the drag coefficient from roughly 0.38 to about 0.33. Most accounts say only the bonnet, roof and sunroof carry over from the standard car. Underneath were five-lug hubs, bigger anti-roll bars, stiffer lowered springs, a limited-slip differential and E28-sourced four-wheel discs with ABS.

## The Evolutions

Because homologation rewards continuous development, the M3 spawned a family of "Evolution" specials, each built in small numbers to legalise new parts for racing:

- **Evolution ("EVO1", 1987):** a revised head, unchanged power — 505 built.
- **Evolution II ("EVO2", 1988):** 220 PS, lighter decklid, thinner glass, brake ducts, BBS wheels — 501 built.
- **Sport Evolution ("EVO3", 1990):** the apex car. The S14 grew to 2.5 litres and ~238 PS, with an adjustable front splitter and rear wing, lower ride height, thinner glass and a lighter trunk. Just 600 were built, in only Brilliant Red or Glossy Black.

Alongside these came celebration editions tied to BMW's racing drivers and titles — the **Europameister** (148 cars, 1988), and the **Cecotto** and UK-only **Ravaglia** editions (commonly cited as 505 combined, 1989) — plus the rare hand-built **Convertible**.

## On the track and after

The E30 M3 became the most successful touring car of its generation, winning the DTM, the WTCC, the ETCC and championships in Italy, Australia, Japan and elsewhere across the late 1980s and early 1990s. Production ended in 1991. It was replaced by the very different six-cylinder E36 M3 in 1992 — a faster, more grown-up car, but one that traded the E30's raw, homologation-special purity for everyday usability, which is a big part of why the original is so revered today.`,

  marketNotes: `For years the E30 M3 was a relatively attainable enthusiast car, then it became one of the defining modern-classic success stories. Hagerty's buyer's guide notes the model began appreciating sharply in 2013–2014 and ran hard through about 2018, with median #2 (excellent) values up roughly 324% over that stretch before cooling after 2019. By the time of that guide, multiple E30 M3s had crossed Bring a Trailer above US$100,000, including an ultra-low-mileage example at a quarter-million dollars, while Hagerty's median quoted value sat around US$51k.

The hierarchy is consistent: the **Sport Evolution** sits at the top and has historically commanded roughly double a standard car; the limited Evolution and Cecotto/Ravaglia editions trade at a premium over base coupes; honest, documented, unmodified standard cars are the heart of the market; and heavily tracked, modified, or accident-repaired cars sell for materially less. Because Euro-spec cars (including the Evolutions never sold new in the U.S.) can now be imported to the U.S. under the 25-year rule, the American market increasingly includes cars Americans never originally got.

These are directional, date-stamped observations — a snapshot, not a price quote. Collector values move; use the Fully Sorted Value Guide for live comps before buying or selling.`,

  whatToLookFor: `**Provenance over everything.** The single best predictor of a good E30 M3 is a thick file of service history. These were motorsport cars; many were tracked or driven hard. Receipts from a known BMW/M specialist matter enormously.

**Rust is the number-one killer.** The shell is a regular-E30 base with period-typical corrosion protection. Check the rear wheel arches, sills/rockers (plastic covers hide decay), floorpans and the battery tray, sunroof drains, the bonded windscreen and rear-screen corners, around the taillights and licence-plate lights, and the rear subframe and shock towers. Sound metal there usually means a sound car.

**Confirm it really is an M3 — and the right one.** Many five-lug "basket-weave" BMW wheels look similar but use a different offset (factory M3 +24mm; special editions +27mm). Verify Evolution / Sport Evo / Cecotto authenticity against documentation, plaques and colours; values diverge sharply.

**Listen and feel on the test drive.** A clunk over bumps points to tired rear shock mounts; a buzzy, vibey cabin can mean failing engine mounts (the high-revving S14 is hard on them). Oil weeps are common and usually minor — read the Common Problems section for which ones matter.

**Look for honest track use, not hidden crash history.** A roof dent can betray a hard-tracked car run without a cage (the shell flexes); filled cage-mount holes, mismatched paint, body filler and missing trim suggest a converted race car or accident repair. Not always a deal-breaker, but it should be priced in.

**Confirm scheduled maintenance.** Valve clearances need checking roughly every 30,000 miles, and on tracked cars rod bearings are treated as a service item — ask when each was last done.`,

  commonProblems: `**Rust.** The E30 M3's biggest long-term threat. Because the bodyshell derives from the standard E30 with limited corrosion protection, moisture collects in box sections and behind the plastic sill covers. Hot spots: rear arches, floorpans and battery tray, inner/outer sills, windscreen and rear-screen corners, sunroof drains, subframe and shock-tower areas. (Element Performance and Hagerty both flag the same regions.)

**S14 valve adjustments.** The solid-lifter S14 needs its valve clearances checked and set at regular intervals (roughly every 30,000 miles). The engine is otherwise regarded as durable — a well-maintained S14 is widely considered good for very high mileage — but skipped adjustments accelerate wear.

**Oil leaks.** Common and usually cosmetic rather than catastrophic; budget for seals/gaskets over time and don't panic at a light weep.

**Engine and suspension mounts.** The high-revving four is hard on engine mounts; worn mounts make the cabin buzzy. Rear shock mounts are a known short-life item and a frequent source of clunks over bumps. Front control-arm bushings and rear subframe bushings also wear, dulling the steering and causing clunks.

**Track-car wear.** On hard-driven cars, rod bearings are treated as a maintenance item; abused examples may also show tired synchros, brakes and bushings.

**Parts cost and availability.** Many M3-specific parts (bodywork, glass, interior trim, wheels, S14 internals) are bespoke to this car and not shared with the ordinary E30, so they are expensive and sometimes hard to source — missing or incorrect parts meaningfully affect value and restoration cost.`,

  valueTrajectory: `Attainable enthusiast car for years → sharp appreciation beginning ~2013–2014 and running through ~2018 (Hagerty cites a ~324% rise in median #2 values over that window) → cooling/leveling after 2019, with the strongest examples now firmly six-figure territory and median quoted values in the tens of thousands. The Sport Evolution and the limited Evolution / Cecotto / Ravaglia cars sit at the top; documented, original, unmodified standard coupes form the core of the market; tracked, modified or repaired cars trail. Euro-spec cars increasingly enter the U.S. market under the 25-year import rule.`,

  sources: [
    {
      ref: 'bmw-m',
      title: 'The BMW M3 E30',
      url: 'https://www.bmw-m.com/en/topics/magazine-article-pool/bmw-m3-e30-portraet.html',
      publisher: 'BMW M GmbH',
      sourceType: 'manufacturer',
      reliability: 'high',
      notes: 'Official manufacturer/heritage portrait. Source for the homologation-special framing and the Group A / DTM origin story.',
    },
    {
      ref: 'bmw-classic-sportevo',
      title: 'BMW M3 (E30) Sport Evolution ("Evolution III")',
      url: 'https://www.bmwgroup-classic.com/en/models/bmw-classics/product-description-page.ad-238-1.bmw-m3-e30-sport-evolution-evolution-iii.html',
      publisher: 'BMW Group Classic',
      sourceType: 'manufacturer',
      reliability: 'high',
      notes: 'Manufacturer model description for the Sport Evolution (2.5L, 600 units, ~238 PS).',
    },
    {
      ref: 'wikipedia-m3',
      title: 'BMW M3',
      url: 'https://en.wikipedia.org/wiki/BMW_M3',
      publisher: 'Wikipedia',
      sourceType: 'reference-book',
      reliability: 'medium',
      notes: 'E30 production table (total 17,970 = 17,184 coupé + 786 convertible; Evolution 505; Evolution II 501; Sport Evo 600; US spec 5,300) cited to Kittler, "Deutsche Autos 1945–1990". Useful aggregator; cross-check against primary sources.',
    },
    {
      ref: 'hagerty',
      title: "Your handy 1986–91 BMW M3 (E30) buyer's guide",
      url: 'https://www.hagerty.com/media/buying-and-selling/your-handy-1986-91-bmw-m3-e30-buyers-guide/',
      publisher: 'Hagerty Media',
      sourceType: 'journalism',
      reliability: 'high',
      notes: 'Year-by-year model overview, common faults, and dated valuation context. States US total 5,115 and "just over 17,000" worldwide — differs from the Kittler/Wikipedia 5,300 figure (see disputed claim).',
    },
    {
      ref: 'autoevolution-s14',
      title: 'BMW S14: The Four-Cylinder Masterpiece That Powered the Legendary E30 M3',
      url: 'https://www.autoevolution.com/news/bmw-s14-the-four-cylinder-masterpiece-that-powered-the-legendary-e30-m3-175949.html',
      publisher: 'autoevolution',
      sourceType: 'journalism',
      reliability: 'medium',
      notes: 'Engine deep-dive: S14 = M10 block + M88-derived DOHC head (the M1/M5 six with two cylinders removed), designed by Paul Rosche.',
    },
    {
      ref: 'wikipedia-s14',
      title: 'BMW S14',
      url: 'https://en.wikipedia.org/wiki/BMW_S14',
      publisher: 'Wikipedia',
      sourceType: 'reference-book',
      reliability: 'medium',
      notes: 'Confirms S14 is based on the M10 block and M88 head with two cylinders removed; displacements 2.0/2.3/2.5L; up to 238 hp in the Sport Evolution.',
    },
    {
      ref: 'element-performance',
      title: 'BMW E30 M3 Common Issues and Maintenance',
      url: 'https://www.elementperformance.co.uk/bmw-e30-m3',
      publisher: 'Element Performance (independent BMW specialist)',
      sourceType: 'club-forum',
      reliability: 'medium',
      notes: 'Marque-specialist reference for rust hot-spots, S14 valve-adjustment intervals, mount and bushing wear.',
    },
  ] as SeedSource[],

  claims: [
    {
      section: 'history',
      claimText:
        'The E30 M3 was created as a Group A homologation special so BMW could race a 3 Series in touring-car series such as the DTM; it debuted at the 1985 Frankfurt Motor Show and was built from 1986.',
      confidence: 'high',
      status: 'verified',
      sourceRefs: ['bmw-m', 'wikipedia-m3', 'hagerty'],
    },
    {
      section: 'specs',
      claimText:
        'The S14 engine uses the M10 four-cylinder block with a DOHC 16-valve head derived from the M88/S38 six (the M1/M5 engine with two cylinders removed), designed by Paul Rosche; standard cars made ~195–197 PS, rising to 215 PS on later cars.',
      confidence: 'high',
      status: 'verified',
      sourceRefs: ['wikipedia-s14', 'autoevolution-s14', 'hagerty'],
    },
    {
      section: 'specs',
      claimText:
        'The M3 has bespoke bodywork versus a standard E30 coupe — widened fenders, deeper valences, extended sills, a reshaped C-pillar with re-angled rear glass, and a taller bootlid/spoiler — cutting drag from ~0.38 to ~0.33; only the bonnet, roof and sunroof are commonly cited as carried over.',
      confidence: 'high',
      status: 'verified',
      sourceRefs: ['hagerty', 'bmw-m'],
    },
    {
      section: 'production',
      claimText:
        'Total E30 M3 production was 17,970 cars (17,184 coupés and 786 convertibles).',
      confidence: 'high',
      status: 'verified',
      sourceRefs: ['wikipedia-m3'],
      conflictNote:
        'Wikipedia\'s production table (citing Kittler) gives 17,970 (17,184 coupé + 786 convertible). Hagerty\'s prose says "just over 17,000" worldwide — consistent in magnitude. Some enthusiast/blog sources quote 23,000+, but those figures generally fold in race cars or conflate the M3 with the broader E30 family and are treated as unreliable here. We use 17,970 as the best-documented road-car total.',
    },
    {
      section: 'production',
      claimText:
        'Roughly 5,300 E30 M3s were built to U.S. specification.',
      confidence: 'medium',
      status: 'disputed',
      sourceRefs: ['wikipedia-m3', 'hagerty'],
      conflictNote:
        'The Kittler-based Wikipedia table lists 5,300 U.S.-spec M3s. Hagerty\'s buyer\'s guide instead states "total sales of 5115 in America." The two reputable sources differ by ~185 cars; the gap may reflect built-vs-sold counting or model-year edge cases (a handful of 1991 cars titled as 1992). We present ~5,300 as the most commonly cited figure and record Hagerty\'s 5,115 as the competing number rather than picking a winner.',
    },
    {
      section: 'production',
      claimText:
        'The Evolution specials were built in small homologation runs: M3 Evolution (505), Evolution II (501) and Sport Evolution (600), the last with a 2.5L S14.',
      confidence: 'high',
      status: 'verified',
      sourceRefs: ['wikipedia-m3', 'bmw-classic-sportevo', 'hagerty'],
    },
    {
      section: 'specs',
      claimText:
        'The Sport Evolution\'s 2.5-litre S14 is rated at 238 PS / 235 hp at 7,000 rpm.',
      confidence: 'high',
      status: 'disputed',
      sourceRefs: ['bmw-classic-sportevo', 'wikipedia-m3', 'hagerty'],
      conflictNote:
        'This is a units artifact rather than a real disagreement: 175 kW equals 238 PS (metric horsepower) and 235 hp (SAE/imperial), so BMW Group Classic and Wikipedia cite "238 PS / 235 hp" while Hagerty writes "235 horsepower." Both describe the same engine output. Flagged so the two numbers aren\'t mistaken for conflicting power figures.',
    },
    {
      section: 'production',
      claimText:
        'BMW built driver-tribute and championship special editions: the Europameister (148, 1988) and the Cecotto plus UK-only Ravaglia editions (commonly cited as 505 combined, 1989).',
      confidence: 'medium',
      status: 'verified',
      sourceRefs: ['hagerty', 'bmw-m'],
      conflictNote:
        'Hagerty cites the Cecotto at 505 units and the Ravaglia at 25 (UK-exclusive). Other reputable write-ups describe the Cecotto and Ravaglia together as a single 505-car program (≈480 Cecotto + 25 Ravaglia). The exact split is recorded inconsistently across sources; the ~505 combined figure is the most consistent and is used here.',
    },
    {
      section: 'problems',
      claimText:
        'Rust is the E30 M3\'s primary long-term weakness (arches, sills, floorpans, battery tray, screen corners, sunroof drains, subframe/shock-tower areas) because the shell derives from the standard E30 with period-typical corrosion protection.',
      confidence: 'high',
      status: 'verified',
      sourceRefs: ['element-performance', 'hagerty'],
    },
    {
      section: 'problems',
      claimText:
        'The solid-lifter S14 requires periodic valve-clearance adjustment (roughly every 30,000 miles); common wear items include engine and rear shock mounts and suspension bushings, and many M3-specific parts are bespoke and costly.',
      confidence: 'high',
      status: 'verified',
      sourceRefs: ['hagerty', 'element-performance'],
    },
    {
      section: 'market',
      claimText:
        'E30 M3 values rose sharply from ~2013–2014 through ~2018 (Hagerty cites ~324% growth in median #2 values) before cooling after 2019, with top cars now six-figure and the Sport Evolution at the apex.',
      confidence: 'medium',
      status: 'unverified',
      sourceRefs: ['hagerty'],
      conflictNote:
        'Market commentary is directional and date-stamped to the Hagerty guide (last updated 2024). Values move; this is not a current quote and should be refreshed against live comps before publish.',
    },
  ] as SeedClaim[],
};

export type SeedE30M3 = typeof seedE30M3;
