/**
 * Model draft — Toyota Supra A80 (Mk4), 1993–2002 (US 1993.5–1998).
 *
 * Cross-checked across multiple INDEPENDENT sources per the Sourcing &
 * Truth-Seeking methodology in RESEARCH-AND-REGISTRY-ROADMAP.md:
 *   - Toyota UK Magazine (manufacturer heritage history)
 *   - Wikipedia (well-cited aggregator; note its underlying refs)
 *   - Hagerty (valuation data + buyer guidance)
 *   - Classic Motorsports (reputable buyer's-guide journalism)
 *   - JDMBUYSELL A80 buyer's guide (market/spec aggregator)
 *   - classic.com (aggregated public auction/listing data)
 *   - jza80.de / German Supra MKIV club (J-spec vs export-spec engine differences)
 *
 * Seeded as status = 'draft' — NOT published. Chris reviews each section +
 * claim in /admin/models before it can go live. Where sources disagree, the
 * conflict is recorded as a 'disputed' claim with BOTH sides + sources.
 *
 * Nothing here is copied verbatim — it is synthesized in our own words, with
 * citations stored alongside in `sources`.
 *
 * Honest gaps (flagged below): Toyota never published a clean global A80
 * production total or US turbo/6-speed sub-counts, so those figures rest on
 * enthusiast-registry estimates and are flagged 'disputed'/low-confidence.
 */

import type { SeedSource, SeedClaim } from './model-seed-964';

export const seedSupraA80 = {
  slug: 'toyota/supra-a80',
  make: 'Toyota',
  model: 'Supra',
  generation: 'A80 (Mk4)',
  generationCode: 'A80 / JZA80',
  trim: null as string | null,
  yearStart: 1993,
  yearEnd: 2002, // global run; US market ended after 1998
  bodyStyles: ['Coupe (3-door liftback)', 'Sport Roof (targa-style removable top)'],
  engines: [
    '2JZ-GE 3.0L naturally aspirated DOHC inline-six (~220 hp / 220 PS)',
    '2JZ-GTE 3.0L sequential twin-turbo DOHC inline-six (JDM 280 PS gentleman’s-agreement rating; US 320 hp; Europe ~330 PS)',
  ],
  productionTotal: null as number | null,
  productionNotes:
    'Toyota never published a clean, authoritative global A80 production total, so any single number should be treated with caution. Enthusiast registries and aggregators commonly cite roughly 45,000+ JDM cars (Dec 1992–Jul 2002) plus US and European volume, putting the worldwide total somewhere in the broad ~70,000-car range — but this is an estimate, not a factory figure. The car was sold concurrently in Japan, the US and Europe from 1993; the US run ended after the 1998 model year and Europe in the late 1990s, while Japan continued at much-reduced annual volumes until production ceased in July 2002 (Toyota cites forthcoming emissions rules as the reason). US turbo and 6-speed sub-counts are widely quoted by enthusiasts but are not factory-verified — see the disputed claims.',
  notableTrims: [
    { name: 'Base / SE (NA, US)', note: 'Naturally aspirated 2JZ-GE, the volume seller in the US; available with 5-speed manual or automatic.' },
    { name: 'Turbo (US)', note: 'Sequential twin-turbo 2JZ-GTE rated 320 hp. The collector car. Getrag V160 6-speed or 4-speed auto. For 1996 the US turbo was auto-only; the 6-speed returned for 1997–98.' },
    { name: 'RZ / RZ-S (JDM)', note: 'Top JDM twin-turbo trims; RZ paired the 2JZ-GTE with the Getrag V161 6-speed. 280 PS gentleman’s-agreement rating.' },
    { name: 'SZ / SZ-R (JDM)', note: 'Naturally aspirated 2JZ-GE JDM trims; SZ-R got a 6-speed manual.' },
    { name: 'Turbo (Europe)', note: 'Europe received only the twin-turbo car, rated ~330 PS in most references — a separate ECU/calibration from the US.' },
  ],
  specs: {
    'Engine (Turbo)': '2JZ-GTE, 2,997 cc DOHC inline-six, sequential twin-turbo (Hitachi/CT-series turbos), air-to-air intercooled',
    'Engine (NA)': '2JZ-GE, 2,997 cc DOHC inline-six, naturally aspirated',
    'Power (US Turbo)': '320 hp @ 5,600 rpm',
    'Power (JDM Turbo)': '280 PS (gentleman’s-agreement cap; widely believed underrated)',
    'Power (NA)': '~220 hp / 220 PS',
    'Torque (US Turbo)': '315 lb·ft @ 4,000 rpm (some sources cite 325 lb·ft)',
    'Transmission': 'Getrag V160 6-speed manual (US/EU Turbo) or V161 (JDM RZ); Toyota A340E 4-speed automatic; 5-speed manual on NA cars',
    'Drivetrain': 'Front engine, rear-wheel drive',
    '0–60 mph (US Turbo)': '~4.6–4.9 s (period road tests)',
    'Top speed': 'Electronically limited to ~155 mph (≈250 km/h)',
    'Construction': 'Steel monocoque; extensive weight-saving (hollow carpet fibers, aluminum components) cut ~100 kg vs the A70',
    'Curb weight (US Turbo)': '~1,500–1,570 kg (~3,300–3,450 lb) depending on spec',
  },
  heroPhoto: null as string | null,
  overallConfidence: 'high' as const,

  summary: `The fourth-generation Toyota Supra — chassis code A80, known to enthusiasts as the Mk4 — is the car that turned a competent Japanese grand tourer into a global legend. Launched in 1993 (Japan and the US) and built through 2002 for the home market, it paired flowing, aerodynamically aggressive styling with two new 3.0-liter inline-six engines from Toyota's JZ family: the naturally aspirated 2JZ-GE and the now-iconic twin-turbo 2JZ-GTE.

In the US, the Turbo's 2JZ-GTE was rated at 320 hp through a pair of sequential turbochargers — small turbo for low-rpm response, both turbos for top-end pull — fed through Toyota's first six-speed manual, the Getrag-built V160. Period road tests put it on pace with, and sometimes ahead of, far more expensive European exotics.

What cemented the Mk4's status, though, came later: an over-engineered cast-iron-block engine with massive tuning headroom, a starring role in The Fast and the Furious (2001), and a generation of enthusiasts who grew up wanting one. That combination took the A80 from used-sports-car to blue-chip modern collectible.`,

  history: `## A long-awaited successor

Toyota took its time replacing the A70 Supra, holding the third generation in production until it was confident the next car would clear the bar set by rivals like the Nissan 300ZX, Mazda RX-7 (FD) and Honda NSX. The A80 was developed over roughly four years under chief engineer Isao Tsuzuki and unveiled at the 1993 Chicago Auto Show, reaching US showrooms as a 1993.5 model.

The design brief was "less is more." The A80 was shorter, lower and wider than the car it replaced, and Toyota leaned hard on weight reduction — even specifying hollow carpet fibers and aluminum components — to shed about 100 kg versus the A70. The styling, with its long hood and available tall rear wing, owed more to the legendary 2000GT than to its immediate predecessor.

## Two engines, one legend

The A80 simplified the lineup to two 3.0-liter inline-sixes. The naturally aspirated **2JZ-GE** made around 220 hp and was the US volume seller. The headline act was the **2JZ-GTE**: a twin-turbocharged version running a *sequential* turbo arrangement, where a smaller turbo spools first for low-rpm response and a second comes online higher up, smoothing out the classic big-turbo lag.

Crucially, the 2JZ-GTE shared its overbuilt cast-iron block, forged crankshaft, and closed-deck-style bottom end with the engine Toyota also used in luxury sedans like the Aristo (sold in the US as the Lexus GS 300, in NA form). That sedan-and-motorsport pedigree is why the block tolerates boost far beyond its factory rating — the foundation of its tuning legend.

## The Getrag V160 six-speed

US and European Turbo cars came with the **Getrag V160 six-speed manual** — Toyota's first six-speed gearbox — while the JDM RZ used the closely related V161. Strong in stock form and prized by tuners, the V160/V161 became sought-after in its own right; with the cars long out of production, good used examples now command serious money.

## Tuning icon and the Fast & Furious halo

Two things turned the Mk4 from respected sports car into cult object. First, the aftermarket discovered that the 2JZ-GTE bottom end was almost absurdly strong — sorted builds make four-figure horsepower, and the most extreme drag examples have been quoted past 2,000 bhp. Second, the orange 1994 Turbo driven by Paul Walker in The Fast and the Furious (2001) put the car in front of a mass audience right as that generation came of age. Together they drove demand — and prices — for years afterward.

The US run ended after 1998; Japan carried the A80 at low volume until July 2002, when Toyota retired it rather than re-engineer it for tightening emissions rules. The nameplate stayed dormant until the A90 GR Supra arrived in 2019.`,

  marketNotes: `For years the Mk4 was an attainable, heavily-modified used sports car — which is exactly why clean, unmodified, documented examples are now scarce and valuable. As the enthusiasts who grew up on The Fast and the Furious reached buying age, demand for original cars climbed sharply.

The market inflection is well documented: per Hagerty valuation data, Mk4 Supra values jumped roughly 40% in the six months following a high-profile mid-2021 auction result, and the strongest unmodified US Turbo 6-speed cars have since crossed major auction blocks (Bring a Trailer, Barrett-Jackson) at six figures, with exceptional low-mile examples reported well into the low-to-mid six figures by the mid-2020s. Naturally-aspirated cars remain far more affordable. Film-provenance cars carry large premiums on top of all this.

These are directional, date-stamped observations (a mid-2020s snapshot), not a price quote. Originality drives everything here: factory-stock, fully-receipted Turbo 6-speed cars are the benchmark, while even high-quality modified builds typically trade at a discount unless period-correct and well documented. Use the Fully Sorted Value Guide for live comps before buying or selling.`,

  whatToLookFor: `**Originality is the whole game.** Because so many were modified, a genuinely stock, well-documented Turbo 6-speed is the most valuable configuration — and the easiest thing to get wrong. Verify the engine, turbos, ECU and gearbox are as-claimed, and treat undocumented "built" cars with caution.

**Confirm the drivetrain.** US value hinges on Turbo vs NA and, above all, the Getrag V160 6-speed vs the automatic. The V160 is the prize; make sure it's the real thing and shifts cleanly.

**Rust.** Check the hatch/liftback lip, rear quarters and arches, sills, and the spare-wheel well / boot floor for soft spots — especially on cars stored outdoors. Sound metal there usually means a sound shell.

**Sequential turbo system.** The twin-turbo plumbing (vacuum lines, actuators, solenoids) is complex and prone to transition faults and boost issues when neglected. A car that pulls smoothly through the turbo "handoff" mid-rpm is a good sign.

**Gearbox synchros.** V160 second/third-gear synchro wear is the common manual complaint — feel for crunch on quick shifts.

**Service history beats spec sheet.** A sorted, receipted car from a known specialist is worth far more than a tired "better-spec" example.`,

  commonProblems: `**The engine itself is the bright spot.** The 2JZ-GTE's cast-iron block, forged crank and robust bottom end are legitimately over-engineered — Toyota built it to luxury-sedan and motorsport standards, well beyond what the modest factory power figures required. Stock internals are widely considered good for very high power with bolt-ons, which is the core of the car's tuning reputation. Note this is a statement about the bottom end's strength, not a promise any given used car has been maintained.

**Sequential twin-turbo gremlins.** The two-stage turbo system relies on a web of vacuum lines, actuators and solenoids. Perished diaphragms and leaks cause boost creep or rough transitions between turbos; sorting it is fiddly but well-understood.

**Transmission wear.** V160 second/third-gear synchro wear is the typical manual fault; the automatic can show its age with slipping or harsh shifts.

**Rust.** Hatch lip, rear arches/quarters, sills and the boot/spare-well floor are the watch areas, particularly on outdoor-stored cars.

**Electrical / ECU age.** As with many 1990s cars, aging capacitors and wiring can cause faults; budget accordingly.

**Cooling and ancillaries.** Radiator, intercooler and related cooling components wear with age and matter more once a car is driven hard or modified.`,

  valueTrajectory: `Attainable, often-modified used sports car through the 2000s and early 2010s → demand built steadily on the back of the 2JZ tuning legend and the Fast & Furious halo → sharp surge from roughly 2021 (Hagerty noted ~40% in six months after a landmark mid-2021 sale) → blue-chip modern-collectible status by the mid-2020s, with original US Turbo 6-speed cars the clear top of the market and NA cars far more accessible. Modified cars and automatics trail; documented, stock, low-mile Turbo manuals lead.`,

  sources: [
    {
      ref: 'toyota-uk',
      title: 'History of the Toyota Supra',
      url: 'https://mag.toyota.co.uk/history-of-the-toyota-supra/',
      publisher: 'Toyota UK Magazine',
      sourceType: 'manufacturer',
      reliability: 'high',
      notes:
        'Manufacturer heritage history. Source for development under Isao Tsuzuki, 1993 Chicago debut, ~100 kg weight savings, JZ-series engine intro, 280 PS Japanese voluntary limit, first six-speed gearbox, 155/156 mph limiter, July 2002 end-of-production and the emissions rationale.',
    },
    {
      ref: 'wikipedia',
      title: 'Toyota Supra (A80 / fourth generation)',
      url: 'https://en.wikipedia.org/wiki/Toyota_Supra',
      publisher: 'Wikipedia',
      sourceType: 'reference-book',
      reliability: 'medium',
      notes:
        'Well-cited aggregator for chassis codes, engine specs, market timing and trim breakdown. Cross-checked against primary/Toyota figures; production sub-counts on enthusiast pages are not factory-verified.',
    },
    {
      ref: 'hagerty',
      title: 'Toyota Supra (Mk4) valuation & market data',
      url: 'https://www.hagerty.com/',
      publisher: 'Hagerty',
      sourceType: 'journalism',
      reliability: 'high',
      notes:
        'Valuation data: the ~40%-in-six-months surge following a mid-2021 auction result, and NA vs Turbo value spread. Date-stamped market context, not a quote.',
    },
    {
      ref: 'classicmotorsports',
      title: 'A80 Toyota Supra: Buy one now? — Buyer’s Guide',
      url: 'https://classicmotorsports.com/articles/fourth-generation-a80-toyota-supra-buyers-guide/',
      publisher: 'Classic Motorsports',
      sourceType: 'journalism',
      reliability: 'high',
      notes:
        'Reputable buyer guide: 2JZ + Getrag strength, US 1996 turbo auto-only then 6-speed return for 1997, mid-2020s six-figure auction context, tuning headroom framing.',
    },
    {
      ref: 'jdmbuysell',
      title: 'Toyota Supra A80 Buyer’s Guide',
      url: 'https://www.jdmbuysell.com/learn/toyota/supra/a80/',
      publisher: 'JDMBUYSELL',
      sourceType: 'journalism',
      reliability: 'medium',
      notes:
        'Spec/market aggregator: 2JZ-GE 220, 2JZ-GTE 280 PS JDM / 320 hp US / ~330 PS EU; V160 (US/EU) vs V161 (JDM RZ); condition risks (synchro wear, sequential-turbo faults, rust); stock cars as the auction benchmark.',
    },
    {
      ref: 'jza80-de',
      title: 'J-Spec and Export-Spec 2JZ-GTE Differences',
      url: 'https://jza80.de/j-spec-and-export-spec-2jz-gte-differences',
      publisher: 'German Supra MKIV Club (jza80.de)',
      sourceType: 'club-forum',
      reliability: 'medium',
      notes:
        'Marque-club technical reference on why export 2JZ-GTE engines were rated higher than the JDM 280 PS car (turbo internals, injectors and calibration differences).',
    },
    {
      ref: 'classic-com',
      title: 'Toyota Supra (4th Gen, A80) Market',
      url: 'https://www.classic.com/m/toyota/supra/4th-gen/',
      publisher: 'classic.com',
      sourceType: 'journalism',
      reliability: 'medium',
      notes:
        'Aggregated public auction/listing data for directional value trends (snapshot, not a quote). Used to corroborate the Turbo-6MT vs NA value spread.',
    },
  ] as SeedSource[],

  claims: [
    {
      section: 'history',
      claimText:
        'The A80 (Mk4) Supra was developed under chief engineer Isao Tsuzuki, unveiled at the 1993 Chicago Auto Show, and reached US showrooms as a 1993.5 model.',
      confidence: 'high',
      status: 'verified',
      sourceRefs: ['toyota-uk', 'wikipedia'],
    },
    {
      section: 'specs',
      claimText:
        'The A80 used two 3.0L inline-sixes: the naturally aspirated 2JZ-GE (~220 hp) and the sequential twin-turbo 2JZ-GTE.',
      confidence: 'high',
      status: 'verified',
      sourceRefs: ['toyota-uk', 'wikipedia', 'jdmbuysell'],
    },
    {
      section: 'specs',
      claimText:
        'The 2JZ-GTE was rated 280 PS in Japan, 320 hp in the US, and roughly 330 PS in Europe — the same basic engine with different turbos, injectors and calibration per market.',
      confidence: 'high',
      status: 'disputed',
      sourceRefs: ['toyota-uk', 'jdmbuysell', 'jza80-de', 'wikipedia'],
      conflictNote:
        'The JDM 280 PS figure reflects the Japanese makers’ "gentleman’s agreement" power cap, not a true measured ceiling — independent dyno tests routinely show JDM cars making more, and many sources state the JDM and export engines are far closer in real output than the 280-vs-320 spread implies. Export cars (US 320 hp / EU ~330 PS) used steel-wheel turbos, larger injectors and different ECU mapping. We present the published per-market ratings and flag that the JDM 280 PS is widely regarded as an artificially capped number, not actual peak output.',
    },
    {
      section: 'specs',
      claimText:
        'US and European Turbo cars used the Getrag V160 six-speed manual (Toyota’s first six-speed); the JDM RZ used the related V161.',
      confidence: 'high',
      status: 'verified',
      sourceRefs: ['toyota-uk', 'jdmbuysell', 'wikipedia'],
    },
    {
      section: 'production',
      claimText:
        'Total worldwide A80 production is commonly estimated in the broad ~70,000-car range (roughly 45,000+ JDM plus US and EU volume), but Toyota never published an authoritative global total.',
      confidence: 'low',
      status: 'disputed',
      sourceRefs: ['wikipedia'],
      conflictNote:
        'No clean factory total exists. Enthusiast registries cite ~45,223 JDM cars (Dec 1992–Jul 2002) and aggregators extrapolate a ~70,000 worldwide figure, but estimates vary and are not factory-verified. We record this as an estimate, not a fact.',
    },
    {
      section: 'production',
      claimText:
        'US-market Turbo cars — and especially Turbo cars with the V160 6-speed manual — are far rarer than NA cars, with US turbo 6-speed counts widely quoted in the low thousands.',
      confidence: 'low',
      status: 'disputed',
      sourceRefs: ['classicmotorsports', 'jdmbuysell'],
      conflictNote:
        'Toyota never published US turbo or 6-speed sub-counts. Enthusiast estimates circulate (e.g. total US Mk4 sales commonly cited around ~11,000, of which turbos and 6-speeds are a minority, with the manual-turbo count often quoted "in the low thousands" or "fewer than ~1,500" depending on the source and year-range). These figures are unverified estimates and disagree across sources; we report the relative scarcity as well-established but the exact counts as unconfirmed.',
    },
    {
      section: 'history',
      claimText:
        'A US-spec quirk: for the 1996 model year the US Turbo was available only with the automatic; the 6-speed manual returned to the US turbo for 1997–98.',
      confidence: 'medium',
      status: 'verified',
      sourceRefs: ['classicmotorsports'],
    },
    {
      section: 'problems',
      claimText:
        'The 2JZ-GTE bottom end (cast-iron block, forged crank, sedan/motorsport-derived design) is over-engineered relative to its factory power rating, giving it large tuning headroom; well-built engines reportedly make four-figure horsepower and extreme drag examples have been quoted past 2,000 bhp.',
      confidence: 'high',
      status: 'disputed',
      sourceRefs: ['toyota-uk', 'classicmotorsports', 'jdmbuysell'],
      conflictNote:
        'The bottom end’s strength is well established. The headline power claims (e.g. Toyota UK’s "up to 2041 bhp") describe extreme, heavily-modified one-off builds, not a guaranteed ceiling for any given engine — and real-world reliable headroom on stock internals is debated (commonly cited around ~700–800 hp with supporting mods). We flag the eye-catching numbers as outliers and frame the headroom as exceptional-but-build-dependent.',
    },
    {
      section: 'problems',
      claimText:
        'Common A80 issues include sequential twin-turbo faults (boost creep / transition problems from worn actuators), V160 second/third synchro wear, aging ECU/electrical components, and structural rust at the hatch lip, rear arches, sills and boot floor.',
      confidence: 'high',
      status: 'verified',
      sourceRefs: ['jdmbuysell', 'classicmotorsports'],
    },
    {
      section: 'market',
      claimText:
        'Mk4 Supra values surged from around 2021 (Hagerty noted roughly a 40% rise in six months after a landmark mid-2021 auction), reaching six figures for the best original US Turbo 6-speed cars by the mid-2020s, helped by the 2JZ tuning legend and the Fast & Furious halo.',
      confidence: 'medium',
      status: 'unverified',
      sourceRefs: ['hagerty', 'classicmotorsports', 'classic-com'],
      conflictNote:
        'Market commentary is directional and date-stamped (mid-2020s snapshot); values move and this is not a current quote. Specific top-end auction figures vary widely by car and provenance and should be refreshed against live comps before publish.',
    },
  ] as SeedClaim[],
};

export type SeedSupraA80 = typeof seedSupraA80;
