/**
 * Model draft — Acura / Honda NSX (NA1/NA2), 1990–2005.
 *
 * Cross-checked across multiple INDEPENDENT sources per the Sourcing &
 * Truth-Seeking methodology in RESEARCH-AND-REGISTRY-ROADMAP.md:
 *   - Honda/Acura heritage material (Acura Newsroom NSX chronology),
 *   - Wikipedia's first-generation NSX article (noting its cited sources),
 *   - Hagerty (market + buyer journalism),
 *   - the NSX FAQ (long-standing owner/registry reference),
 *   - NSX Prime (the marque's primary owners' forum, production charts),
 *   - and reputable enthusiast/market journalism (Magneto, classic.com).
 *
 * Seeded as status = 'draft' — NOT published. Chris reviews each section +
 * claim in /admin/models before it can go live. Where sources disagree, the
 * conflict is recorded as a 'disputed' claim with both sides + sources.
 *
 * Nothing here is copied verbatim — synthesized in our own words, with
 * citations stored alongside in `sources`.
 *
 * Note on naming: marketed as "Acura NSX" in North America and Hong Kong, and
 * "Honda NSX" everywhere else. We slug it under Acura (our US-facing audience)
 * but the body text uses both names where it matters.
 */

import type { SeedSource, SeedClaim } from './model-seed-964';

export const seedNsx = {
  slug: 'acura/nsx-na1-na2',
  make: 'Acura',
  model: 'NSX',
  generation: 'NA1/NA2',
  generationCode: 'NA1/NA2',
  trim: null as string | null,
  yearStart: 1990,
  yearEnd: 2005,
  bodyStyles: ['Coupe', 'Targa (NSX-T)'],
  engines: [
    'C30A 3.0L DOHC VTEC V6 (NA1) — 270 hp / 274 PS manual; 252 hp automatic',
    'C32B 3.2L DOHC VTEC V6 (NA2) — 290 hp / 294 PS (1997-on, manual only)',
  ],
  productionTotal: 18734,
  productionNotes:
    'Honda reported worldwide sales of "more than 18,000 units" as of the end of June 2005, a few months before production ended on 30 November 2005 (Acura/Honda heritage material via Wikipedia). Total lifetime production is commonly summarized as "fewer than 20,000" across the full 1990–2005 run, with detailed enthusiast registries (NSX Prime production charts) putting the figure in the ~18,700 range. We record 18,734 as a widely-cited registry total but flag the spread in the claims — exact lifetime totals are NOT firmly established in a single primary source. The chassis-code split is the key fact: NA1 = original C30A 3.0L (all automatics for the whole run, plus all manuals 1991–1996); NA2 = C32B 3.2L (manual cars only, 1997–2005).',
  notableTrims: [
    { name: 'NSX Coupe (NA1)', note: 'The launch car (1990 JP / late 1990 US as Acura). Pop-up headlamps, C30A 3.0 VTEC V6, all-aluminum monocoque.' },
    { name: 'NSX-T (Targa)', note: 'Removable targa roof, introduced 1995. Became the default body in North America after 1994; added ~45 kg of bracing to offset lost rigidity.' },
    { name: 'NSX (NA2, 3.2)', note: '1997 update: C32B 3.2L, 290 hp, new 6-speed manual. Automatics kept the 3.0 (NA1) to the end.' },
    { name: 'NSX-R / Type R (NA1)', note: 'JDM-only track special, ~120 kg lighter. Built late 1992–Sept 1995. ~483 units per most records (some say 500 — see conflict).' },
    { name: 'NSX Type S', note: 'JDM "winding-road" trim, 1997–2001, lightweight options. 209 built per NSX Prime registry.' },
    { name: 'NSX Type S-Zero', note: 'Stripped, circuit-focused S. Only 30 built (1997–2001) — one of the rarest NA1/NA2 variants.' },
    { name: 'NSX Alex Zanardi Edition', note: 'US-only 1999 special honoring Zanardi’s 1997–98 CART titles. Exactly 51 built, all Formula Red, fixed roof, manual steering.' },
    { name: 'NSX-R (NA2, 2002)', note: 'Second R, JDM-only, on the facelift car. Extensive carbon fiber (incl. vented hood). 140 built (per most sources — see conflict).' },
  ],
  specs: {
    'Engine (NA1)': 'C30A — 2,977 cc DOHC 24-valve VTEC V6, titanium connecting rods',
    'Power (NA1 manual)': '270 hp (274 PS) @ 7,100 rpm; 252 hp on the automatic',
    'Engine (NA2)': 'C32B — 3,179 cc DOHC VTEC V6 (1997-on manual)',
    'Power (NA2)': '290 hp (294 PS) @ 7,100 rpm',
    'Redline': '8,000 rpm (C30A)',
    'Transmission': '5-speed manual or 4-speed automatic (NA1); 6-speed manual added 1997 (NA2); auto stayed 4-speed',
    'Layout': 'Transverse rear-mid-engine, rear-wheel drive',
    'Chassis': 'All-aluminum monocoque — a production-car first — with aluminum suspension arms',
    '0–60 mph': '~5.0–5.5 s (NA1); ~4.5–5.0 s (NA2 3.2/6-speed)',
    'Top speed': '~168–175 mph depending on year',
    'Drag coefficient': '0.32 (pre-facelift); 0.30 (2002 facelift)',
    'Curb weight': '~1,370 kg (3,010 lb) early coupe; ~1,230 kg (2,712 lb) NSX-R',
  },
  heroPhoto: null as string | null,
  overallConfidence: 'high' as const,

  summary: `The Honda NSX — sold as the Acura NSX in North America from late 1990 — is the car that proved a mid-engine supercar didn't have to be temperamental. Honda benchmarked the Ferrari 328/348, then set out to match that performance with the reliability, visibility, and ease of use of a Honda. The result, on sale from 1990 to 2005, rewrote what buyers could expect from an exotic.

Two things make the NSX historically important. First, it was the world's first production car with an all-aluminum monocoque body and chassis — a genuine engineering milestone that saved roughly 200 kg over steel. Second, its 3.0-liter C30A V6 was the first road application of Honda's VTEC variable valve timing in a V6, complete with titanium connecting rods and an 8,000-rpm redline.

The "everyday supercar" thesis is the NSX's enduring legacy: a car you could commute in, that wouldn't strand you, with light controls and a clear view out — yet would still run with the exotics of its day. That reputation, plus genuine rarity, is why clean original cars have appreciated sharply over the last decade.`,

  history: `## From a cut-in-half City to a Ferrari-fighter

The NSX traces back to early-1980s Honda experiments — famously a Honda City test mule cut in half with the engine moved behind the driver. That fed into the 1984 Pininfarina-designed HP-X concept, which evolved into the NS-X prototype ("New Sports eXperimental"). The production car was led by Executive Chief Engineer Shigeru Uehara and Chief Designer Masahito Nakano. Honda's brief was explicit: match Italian and German supercars, but do it with Honda reliability and a lower price.

## The VTEC V6 and the aluminum body

The original plan used a non-VTEC 3.0-liter DOHC V6. Late in development — reportedly at the urging of Honda president Tadashi Kume — the engine was re-engineered to use VTEC, gaining a stronger block and titanium connecting rods that pushed the redline to 8,000 rpm. The new C30A was physically larger, forcing engineers to tilt it back about 5 degrees to fit. The body was the other headline: an all-aluminum monocoque, a production first, paired with aluminum suspension arms and (later) the first electronic throttle in a Honda road car.

## Senna's role — handled carefully

The popular story is that Ayrton Senna "developed" the NSX. The more careful, sourced version: Senna, then a Honda-powered McLaren F1 driver, tested a prototype at Suzuka and told Honda the chassis felt insufficiently rigid. Honda used that feedback (among other inputs) and ultimately stiffened the structure by over 50%. But Wikipedia, citing Japanese-language sources, explicitly cautions that Senna was *not* the development driver — he drove the car only a handful of times and offered advice. The actual lead development driver was Motoharu "Gan-san" Kurosawa, with much chassis work done at the Nürburgring, plus on-track input from Satoru Nakajima and Bobby Rahal. We present Senna's contribution as real but limited, and flag the "development driver" framing as a disputed/overstated claim.

## Variants and the long run

Over 15 years the NSX spawned a broad family: the original **Coupe**; the targa-roofed **NSX-T** (1995-on); the JDM track-special **NSX-R / Type R** (NA1, ~1992–95); the JDM **Type S** and ultra-rare **Type S-Zero** (1997–2001); the US-only **Alex Zanardi Edition** (1999, 51 cars); and a second **NSX-R** (NA2) on the 2002 facelift car. The big mechanical watershed was 1997, when manual cars got the larger 3.2-liter C32B (the NA2) and a 6-speed gearbox; automatics kept the 3.0 (NA1) to the end. In December 2001 the car was facelifted — most visibly, the pop-up headlamps gave way to fixed xenon units — and it ran in that form until production ended 30 November 2005.`,

  marketNotes: `For years the NSX was the "sensible exotic" — admired but relatively affordable, in part because its Honda badge (or Acura badge in the US) capped its prestige next to Ferrari. That changed through the 2010s as the everyday-supercar reputation hardened into collector consensus and clean, unmodified, low-owner cars became scarce.

Hagerty has noted NSX values roughly tripling over the dozen years to the mid-2020s, with top-condition cars comfortably exceeding their original sticker. As a directional snapshot (mid-2020s), Hagerty's condition tiers have run broadly in the low-$40k range for fair cars up into six figures for the best examples, with rare variants (NSX-R, Zanardi, low-mile NA2 coupes) far above that. Two attributes consistently *reduce* value: the automatic transmission and the targa roof versus a fixed coupe.

These are date-stamped observations, not a price quote — collector values move, and the figures here should be treated as a mid-2020s snapshot. Use the Fully Sorted Value Guide for live comps before buying or selling.`,

  whatToLookFor: `**Snap-ring transmission (early manual cars).** A narrow band of 1991–early-1992 5-speed cars left the factory with an out-of-tolerance snap-ring groove that can let the ring walk and eventually fail, sometimes catastrophically. It's tied to a specific transmission serial range, and Honda issued a fix. Confirm whether an affected-range car has had the snap-ring service done — this is the single most important early-car check.

**Notchy 2nd gear when cold.** Many NSXs baulk slightly going into 2nd until warm. A little cold reluctance is normal; persistent grinding when warm is not.

**Timing belt + water pump.** An interference V6 — a snapped belt means major engine damage. Service interval is roughly 90k miles / 7 years on early cars and ~105k / 7 years on later cars; many specialists do the water pump at the same time. Get dated proof it's been done.

**Clutch life.** The early small-diameter clutch wears faster than a typical Honda (often ~40–50k miles). Budget for it.

**Aluminum body = expensive crash repair.** The all-aluminum structure is a strength, but accident repair needs aluminum-qualified shops. Inspect carefully for poor prior repairs, panel-gap inconsistency, and overspray.

**Originality and records.** Modified NSXs are common. A documented, unmodified car with service history from a known specialist is worth a clear premium — especially coupe over targa, manual over automatic.`,

  commonProblems: `**Snap-ring transmission failure (early cars).** A manufacturing tolerance issue on a defined range of 1991–early-1992 5-speed transmission cases: the snap-ring groove was cut too wide, so the ring can move and eventually break, with severe consequences. Failure is unpredictable (some affected cars run trouble-free for high mileage; others failed early). Honda addressed it; verify the fix on in-range cars (NSX FAQ documents the affected serial range).

**Timing belt (interference engine).** The C30A/C32B will be damaged if the belt fails. Replace on schedule (~90k mi/7 yr early, ~105k mi later) with the water pump.

**Clutch wear.** The early clutch is undersized and wears faster than typical Honda units; the 1997 6-speed moved to a different clutch design.

**Cold 2nd-gear notchiness.** Common and largely characteristic rather than a fault, but worn synchros are a real possibility on high-mile cars.

**Aluminum repair cost.** Not a "failure," but the defining ownership cost factor: body/structural repair is specialist work and pricey.

**General:** like any aging supercar, expect supercar-sized bills for major service despite the car's everyday-reliability reputation.`,

  valueTrajectory: `Long undervalued as the "affordable exotic" through the 2000s → steadily re-rated through the 2010s as the everyday-supercar legacy and engineering significance became collector consensus → values roughly tripled over the dozen years to the mid-2020s (Hagerty), with the best cars topping their original price. Manual coupes, the NA2 3.2 cars, and rare variants (NSX-R, Zanardi, Type S/S-Zero) sit at the top; automatics and targa cars trail. Snapshot only — refresh against live comps before any deal.`,

  sources: [
    {
      ref: 'acura',
      title: 'Acura NSX Chronology',
      url: 'https://acuranews.com/en-US/releases/release-232fd99dd573d73e0c630d004c34c1d0-acura-nsx-chronology',
      publisher: 'Acura (Honda) Newsroom',
      sourceType: 'manufacturer',
      reliability: 'high',
      notes: 'Official manufacturer heritage timeline. Used for launch dates, North American Acura branding, model-year milestones.',
    },
    {
      ref: 'wikipedia',
      title: 'Honda NSX (first generation)',
      url: 'https://en.wikipedia.org/wiki/Honda_NSX_(first_generation)',
      publisher: 'Wikipedia',
      sourceType: 'reference-book',
      reliability: 'medium',
      notes: 'Heavily cited aggregator. Source for the aluminum-monocoque "first," C30A VTEC/titanium-rod history, the Senna "not the development driver" caution (cites Japanese-language sources), NA1/NA2 power figures, and variant details. Cross-checked against primary/registry sources.',
    },
    {
      ref: 'hagerty',
      title: 'Why old NSX values are rising while new NSXs are falling',
      url: 'https://www.hagerty.com/media/market-trends/valuation/old-and-new-nsx-values/',
      publisher: 'Hagerty Media',
      sourceType: 'journalism',
      reliability: 'high',
      notes: 'Market journalism + valuation. "Values tripled over ~12 years," condition-tier guidance, automatic/targa value penalties.',
    },
    {
      ref: 'nsxfaq',
      title: 'Snap Ring Failure / Transmission — NSX FAQ',
      url: 'https://nsxfaq.com/nsx-faq/snap-ring-failure/',
      publisher: 'NSX FAQ',
      sourceType: 'club-forum',
      reliability: 'high',
      notes: 'Long-standing owner reference. Documents the snap-ring affected serial range, the cause (wide-cut groove), and Honda’s fix; also timing-belt and clutch guidance.',
    },
    {
      ref: 'nsxprime',
      title: 'NSX-R / Type S / Type S-Zero production numbers (registry charts)',
      url: 'https://www.nsxprime.com/threads/nsx-r-nsx-type-s-zero-type-s-production-numbers.81397/',
      publisher: 'NSX Prime',
      sourceType: 'registry',
      reliability: 'medium',
      notes: 'The marque’s primary owners’ forum, with community-compiled production charts. Source for Type S (209), Type S-Zero (30), NSX-R counts; treat exact totals as best-available enthusiast records, not factory-certified.',
    },
    {
      ref: 'thedrive-zanardi',
      title: 'One-of-51 Acura NSX Zanardi Edition',
      url: 'https://www.thedrive.com/news/32890/one-of-51-acura-nsx-zanardi-edition-for-sale-is-the-best-of-its-breed',
      publisher: 'The Drive',
      sourceType: 'journalism',
      reliability: 'high',
      notes: 'Corroborates the 51-unit US-only Zanardi Edition figure and its spec.',
    },
    {
      ref: 'magneto',
      title: '1990–2005 Honda/Acura NSX supercar Buying Guide',
      url: 'https://www.magnetomagazine.com/articles/acquire-honda-nsx-market-guide/',
      publisher: 'Magneto',
      sourceType: 'journalism',
      reliability: 'medium',
      notes: 'Independent buyer/market guide; corroborates the everyday-supercar thesis, variant lineup, and ownership-cost notes.',
    },
  ] as SeedSource[],

  claims: [
    {
      section: 'specs',
      claimText: 'The NSX was the first production car with an all-aluminum monocoque body and chassis, saving roughly 200 kg over steel.',
      confidence: 'high',
      status: 'verified',
      sourceRefs: ['wikipedia', 'acura', 'magneto'],
    },
    {
      section: 'specs',
      claimText: 'The C30A 3.0L V6 used VTEC and titanium connecting rods with an 8,000 rpm redline; the manual made 270 hp (274 PS) while the automatic was limited to 252 hp.',
      confidence: 'high',
      status: 'verified',
      sourceRefs: ['wikipedia'],
    },
    {
      section: 'history',
      claimText: 'Ayrton Senna tested a prototype at Suzuka and his feedback helped lead Honda to stiffen the chassis (by over 50%), but he was NOT the lead development driver — that was Motoharu Kurosawa.',
      confidence: 'medium',
      status: 'disputed',
      sourceRefs: ['wikipedia'],
      conflictNote:
        'Popular accounts (and much marketing-adjacent coverage) credit Senna as a/the NSX development driver. Wikipedia, citing Japanese-language sources, states this is incorrect: Senna drove the prototype only a few times and gave advice, while Motoharu "Gan-san" Kurosawa was the actual development driver (with Satoru Nakajima and Bobby Rahal also contributing). The ~50% rigidity increase is well-documented; Senna’s precise causal role is overstated in many tellings. We present his contribution as real but limited.',
    },
    {
      section: 'specs',
      claimText: 'NA1 cars use the C30A 3.0L V6; from 1997 manual cars got the C32B 3.2L (290 hp / 294 PS) and the NA2 code, while automatics kept the 3.0 (NA1) until 2005.',
      confidence: 'high',
      status: 'verified',
      sourceRefs: ['wikipedia', 'acura'],
    },
    {
      section: 'production',
      claimText: 'Total lifetime production was on the order of 18,000–19,000 cars (commonly summarized as "fewer than 20,000").',
      confidence: 'medium',
      status: 'disputed',
      sourceRefs: ['wikipedia', 'nsxprime'],
      conflictNote:
        'No single primary source gives a clean lifetime total. Honda reported "more than 18,000 units" sold as of end-June 2005 (Wikipedia), with production continuing to 30 Nov 2005; popular summaries say "fewer than 20,000"; enthusiast registries (NSX Prime) compile a figure around the ~18,700 mark. We record 18,734 as a widely-cited registry total but flag that the exact lifetime figure is not firmly established.',
    },
    {
      section: 'production',
      claimText: 'The first NSX-R (NA1, JDM-only) was built from late 1992 to September 1995 in roughly 483 units.',
      confidence: 'medium',
      status: 'disputed',
      sourceRefs: ['wikipedia', 'nsxprime'],
      conflictNote:
        'Wikipedia cites 483 NSX-R units; several other outlets round to "about 500." 483 is the more specific, better-documented figure; the ~500 figure is common in secondary coverage. Minor discrepancy noted rather than resolved.',
    },
    {
      section: 'production',
      claimText: 'The second-generation NSX-R (NA2, 2002 facelift, JDM-only) was built in 140 units.',
      confidence: 'medium',
      status: 'disputed',
      sourceRefs: ['nsxprime', 'wikipedia'],
      conflictNote:
        'Most sources state 140 NA2 NSX-Rs. A handful of write-ups cite slightly different counts and some conflate the standard NSX-R with the five homologation-special NSX-R GT cars. We use 140 for the road NSX-R and note the GT cars are a separate, tiny run.',
    },
    {
      section: 'production',
      claimText: 'The US-only Alex Zanardi Edition (1999) was built in exactly 51 examples, all Formula Red, with a fixed roof and manual steering.',
      confidence: 'high',
      status: 'verified',
      sourceRefs: ['thedrive-zanardi', 'wikipedia'],
    },
    {
      section: 'history',
      claimText: 'The December 2001 facelift (2002 model year) replaced the original pop-up headlamps with fixed xenon HID units and lowered drag to Cd 0.30.',
      confidence: 'high',
      status: 'disputed',
      sourceRefs: ['wikipedia', 'acura'],
      conflictNote:
        'Sources agree the pop-ups were replaced by fixed xenon lamps at the facelift, but the exact timing is described variously as "December 2001" (Wikipedia) versus "2002 model year" in US/Acura-framed coverage. These describe the same change from different calendar/model-year vantage points; we state "December 2001 facelift, MY2002" to bridge both and flag the framing difference.',
    },
    {
      section: 'problems',
      claimText: 'A defined range of 1991–early-1992 5-speed cars has a snap-ring transmission defect (an out-of-tolerance groove) that can cause the ring to fail; Honda issued a fix.',
      confidence: 'high',
      status: 'verified',
      sourceRefs: ['nsxfaq'],
    },
    {
      section: 'market',
      claimText: 'NSX values roughly tripled over the dozen years to the mid-2020s, with the best cars exceeding original price; automatics and targa roofs reduce value.',
      confidence: 'medium',
      status: 'unverified',
      sourceRefs: ['hagerty'],
      conflictNote:
        'Market commentary is directional and date-stamped (mid-2020s snapshot). Values move; this is not a current quote. Refresh against live comps before publish.',
    },
  ] as SeedClaim[],
};

export type SeedNsx = typeof seedNsx;
