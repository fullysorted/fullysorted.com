/**
 * Model draft - Porsche 911 (993), 1994-1998. The last air-cooled 911.
 *
 * This content was cross-checked across multiple INDEPENDENT sources
 * (Porsche AG newsroom, Wikipedia citing Kittler's "Deutsche Autos seit 1990"
 * vol. 6, Hagerty market analysis, Porsche Club of America technical Q&A,
 * classic.com market data, Sports Car Market auction analysis and reputable
 * journalism) per the Sourcing & Truth-Seeking methodology in
 * RESEARCH-AND-REGISTRY-ROADMAP.md.
 *
 * It is seeded as status = 'draft' - NOT published. Chris reviews each
 * section + claim in /admin/models before it can go live. Where sources
 * disagree (total production, GT2 road-car count, Turbo S volume, the real
 * prevalence/severity of secondary-air-injection clogging), the conflict is
 * recorded as a 'disputed' claim with both sides + sources.
 *
 * Nothing here is copied verbatim from any source - it is synthesized in our
 * own words, with citations stored alongside in `sources`.
 *
 * US-market pass, September 2026: all market figures are US dollars fetched
 * from classic.com, Sports Car Market and Hagerty editorial this session.
 */

export const seed993 = {
  slug: 'porsche/911-993',
  make: 'Porsche',
  model: '911',
  generation: '993',
  generationCode: '993',
  trim: null,
  yearStart: 1994,
  yearEnd: 1998,
  bodyStyles: ['Coupe', 'Cabriolet', 'Targa'],
  engines: [
    'M64/05-06 3.6L air-cooled SOHC flat-six (268 hp / 268 hp, 1994-95)',
    'M64/21-22 3.6L air-cooled SOHC flat-six w/ VarioRam (281 hp / 282 hp, 1996-98)',
    'M64/20 3.8L air-cooled flat-six (Carrera RS / Clubsport, ~296 hp / 296 hp)',
    'M64/60 3.6L air-cooled twin-turbo flat-six (Turbo, 402 hp / 402 hp)',
    'M64/60S 3.6L twin-turbo flat-six (Turbo S, ~444 hp)',
    'M64/60R 3.6L twin-turbo flat-six (GT2 road, ~424 hp rising to ~444 hp)',
  ],
  productionTotal: 68881,
  productionNotes:
    'Porsche AG states 68,881 cars of Type 993 were built between 1993 and 1998. Note: the per-variant production table on Wikipedia (sourced to Kittler, "Deutsche Autos seit 1990" vol. 6, p.361) sums to roughly 68,029 across its listed model lines, close to but not identical with Porsche\'s round-number total. The difference (~850 cars) likely reflects low-volume and special variants (Turbo S, GT2 road cars, factory specials) not broken out in the same table. We carry Porsche\'s 68,881 as the headline figure and flag the discrepancy in the claims rather than picking a winner. Within that total the low-volume cars are the ones the market cares about and the ones the sources argue over: the Carrera RS 3.8 at 1,014 cars including 227 Clubsport, the Turbo S at roughly 182 to 183 built by Porsche Exclusiv for MY1997, the GT2 road car at anywhere from 57 to about 194 depending on what each tally counts, and roughly 45 RSR 3.8 customer race cars from Porsche Motorsport. The Targa is the only body style with its own soft spread in the sources, quoted at about 4,583 to 4,619 cars. The 993 was the last air-cooled 911; the very last car, a Riviera Blue Carrera 4S, was completed 31 March 1998.',
  notableTrims: [
    { name: 'Carrera (C2)', note: 'Rear-drive base car. 3.6L M64, 268 hp at launch; 281 hp with VarioRam from MY1996. The 993 was the first 911 with a standard six-speed manual; a four-speed Tiptronic was optional.' },
    { name: 'Carrera 4 (C4)', note: 'All-wheel drive, now using a lighter viscous-coupling system derived from the 959 (replacing the 964\'s heavier three-differential setup). No Tiptronic option.' },
    { name: 'Carrera 4S / Carrera S', note: 'Wide Turbo-look body and brakes with the naturally aspirated engine. C4S (AWD, 1996), then RWD Carrera S (1997). The Carrera S is among the most valued normally aspirated 993s.' },
    { name: 'Targa', note: 'Introduced for MY1996 with an all-new retractable glass "greenhouse" roof that slid under the rear window, a design carried into the 996/997. About 4,583 to 4,619 built (sources vary slightly).' },
    { name: 'Turbo (3.6 twin-turbo)', note: 'First 911 Turbo with twin turbochargers AND all-wheel drive. 402 hp, fixed whale-tail wing housing the intercoolers.' },
    { name: 'Turbo S', note: 'Porsche Exclusiv high-spec Turbo (MY1997), ~444 hp (US ~424 hp SAE). The last air-cooled 911 Turbo. About 183 built per most sources (disputed).' },
    { name: 'GT2 (road / "GT")', note: 'Rear-drive, stripped, widebody homologation special for FIA GT2 racing. ~424 hp rising to ~444 hp for 1998. Road-car build count is genuinely disputed (see conflict).' },
    { name: 'Carrera RS (3.8)', note: 'Lightweight, naturally aspirated 3.8L, ~296 hp, seam-welded shell, fixed wing. 1,014 built including 227 Clubsport. Not US-legal. Porsche Motorsport also built about 45 RSR 3.8 customer race cars on the same base.' },
  ],
  specs: {
    layout: 'Rear-mounted air-cooled flat-six; RWD (Carrera/Carrera S) or AWD (Carrera 4/4S/Turbo, viscous-coupling)',
    chassis: 'Fully galvanized steel unitary body; NEW light-alloy rear subframe (LSA) carrying an all-alloy multilink rear axle, front MacPherson struts',
    engine: 'M64, 3,600 cc air-cooled SOHC flat-six, twin-spark; 3.8L M64/20 in the Carrera RS; 3.6L twin-turbo M64/60 in the Turbo',
    power: '268 hp at 6,100 rpm (Carrera, 1994-95); 282 hp at 6,100 rpm (Carrera with VarioRam, 1996-98)',
    power_turbo: '402 hp for the 3.6L twin-turbo; about 444 hp for the Exclusiv-built Turbo S',
    torque: '243 lb-ft at 5,000 rpm (1994-95 Carrera); 251 lb-ft at 5,250 rpm with VarioRam',
    torque_turbo: '398 lb-ft at 4,500 rpm (993 Turbo)',
    transmission: '6-speed manual (a 911 first, standard); 4-speed Tiptronic / Tiptronic S optional (RWD only)',
    acceleration: '0-60 mph about 5.3 to 5.6 s (Carrera); about 3.7 to 4.0 s (Turbo)',
    top_speed: 'About 168 to 171 mph for the Carrera',
    top_speed_turbo: 'About 180 mph',
    suspension: 'Front MacPherson struts; NEW all-alloy multilink rear ("Weissach axle") on a light-alloy subframe, derived from the stillborn 989 sedan',
    brakes: 'Larger cross-drilled discs than the 964; Turbo and RS share four-piston calipers',
    weight: 'Curb weight about 1,370 to 3,064 lb (3,020 to 3,064 lb) for the Carrera coupe',
  },
  heroPhoto: null,
  overallConfidence: 'high',

  summary: `The Porsche 993 is, for many enthusiasts, the definitive 911: the last of the air-cooled cars, sold from 1994 to 1998. Penned by English designer Tony Hatter, it kept the unmistakable 911 silhouette but smoothed and widened it, with flared arches, flush glass, polyellipsoid headlamps and a wide, angled tail that is widely regarded as one of the best-looking 911s ever made.

Underneath, the 993 was a major step over the 964. Porsche fitted an all-new all-alloy multilink rear suspension (the "Weissach axle") on a light-alloy subframe, which finally tamed the lift-off oversteer that had haunted earlier 911s and made the car far more composed at the limit. It was also the first 911 with a standard six-speed manual gearbox, and from 1996 the naturally aspirated engine gained Porsche's VarioRam variable intake, lifting output to 281 hp.

The 993 occupies the air-cooled 911's sweet spot: vintage flat-six character and looks, paired with enough modern composure to be genuinely drivable every day.`,

  history: `## "Practically only the roofline remained"

Porsche has said that with the 993, every part of the car was redesigned from the ground up, though it also conceded that only about 20% of parts carried over and that, visually, "practically only the roofline remained unchanged" from the 964. The new body, by Tony Hatter, traded the upright 964 look for flatter front wings (made possible by polyellipsoid headlights), integrated bumpers, flush windows, and dramatically flared rear arches.

The 993 went on sale in 1994 (1995 model year in the US), initially as Coupe and Cabriolet, both offered in rear-drive and all-wheel-drive form. The whole body shell was galvanized, which is a large part of why sound 993s are still common three decades later while contemporaries from other makers are not.

## The chassis that changed the 911

The single biggest engineering story is the rear suspension. Porsche binned the long-running semi-trailing-arm layout and fitted an entirely new all-alloy multilink rear end, the "Weissach axle" mounted to a light-alloy subframe (the LSA chassis), a design derived from the stillborn 989 four-door project. Its self-steering geometry sharply reduced the snap-oversteer reputation of earlier 911s, improved ride and refinement, and is still regarded as the high point of that rear-axle concept. The all-wheel-drive system was also re-thought: out went the 964's heavier three-differential arrangement, replaced by a lighter viscous-coupling setup borrowed in concept from the 959.

## VarioRam and the six-speed

At launch the 3.6-liter flat-six made 268 hp. For the 1996 model year Porsche added **VarioRam**, a variable-length intake system that changes runner length with rpm and load to fatten mid-range torque, lifting output to 281 hp. The 993 was also the first 911 to come standard with a six-speed manual; rear-drive cars could still be ordered with the now much-improved Tiptronic S automatic, which is the specification the collector market has since discounted hardest.

## A broad family

For its short run the 993 spawned a deep lineup: the rear- and all-wheel-drive **Carrera**; the widebody **Carrera 4S / Carrera S**; the glass-roof **Targa** (new for 1996); the twin-turbocharged, AWD **Turbo** and its Exclusiv-built **Turbo S**; the rear-drive, widebody **GT2** homologation special; the lightweight naturally aspirated **Carrera RS 3.8** (and Clubsport); and pure-race **RSR** and Cup cars. The Carrera RS and the GT2 road car were never federalized for the United States, which is why US demand concentrates on the Carrera S, the Turbo and the Turbo S.

## The end of the air-cooled era

The 993 was replaced in 1998 by the water-cooled 996. The very last air-cooled 911 built for the road, a Riviera Blue Carrera 4S, was completed on 31 March 1998 and is famously owned by Jerry Seinfeld. That closing date is the whole basis of the model's standing: 35 years of air cooling stop here, and no later 911 can claim it. It is also why the 993 has behaved differently from its neighbors in the market, holding a floor through the softer years after 2018 that the 964 and the early 996 did not.`,

  marketNotes: `As of September 2026, classic.com's 993 market page puts the average recorded sale across the whole model line at $153,798, with a tracked high of $2,397,500 for a 1997 GT2 in December 2023 and a low of $12,930 for a 1995 Carrera project car in November 2025.

The variant benchmarks set out the hierarchy plainly, all as of September 2026: Carrera Cabriolet (manual) $70,406, Carrera coupe (manual) $99,206, Targa (manual) $103,959, Carrera 4S $167,482, Carrera S (manual) $188,884, Turbo $254,166, Carrera RS $394,442, Turbo S $641,970 and GT2 $1,455,014. Both the Carrera 4S and the Turbo pages carry an upward trend indicator: the 4S has run from a $60,000 low in April 2023 to $395,500 in August 2025, the Turbo from $86,000 in February 2022 to $614,200 in September 2024.

A durable pattern worth knowing: with most classics top down means price up, but 993s invert it. Coupes are worth meaningfully more than Cabriolets or Targas, and manual cars more than Tiptronics.

Sports Car Market, writing up the 2024 sale of the last customer-delivered air-cooled Turbo at $809,019, put comparable 993 Turbo results that year in a $290,000 to $665,000 band against an all-time high of $896,000 in 2023. Collector values move. Use the Fully Sorted Value Guide for live comps before buying or selling.`,

  whatToLookFor: `**Documentation and specialist history matter enormously.** A sorted, fully documented car beats a "better-spec" neglected one. Receipts from a recognized air-cooled Porsche specialist are gold on these.

**Secondary air injection (SAI).** On 1996-on (OBD-II) cars, carbon clogs the small secondary-air passages and trips a check-engine light, which can fail emissions and smog testing in some US states. Ask whether the SAI ports have been cleaned and whether a CEL is present, but understand the debate over how much it actually matters (see Common Problems).

**Rust.** The 993 is galvanized and generally rust-resistant, but check door sills, the bottoms of the doors, wheel arches, and under the carpets. Neglect and poor repairs show up there.

**Targa roof and seals.** The glass "greenhouse" mechanism is complex and can be unreliable and expensive; check it operates smoothly and look for water ingress, cabin heat complaints, and rattles.

**Turbo specifics.** On Turbos, 1996 cars have weaker transmission input shafts and a non-flashable ECU; 1997-98 cars got stronger shafts and a modifiable ECU. Verify which you are looking at, because the market prices the later cars higher.

**Transmission and body style drive the price.** A Tiptronic Cabriolet and a manual coupe are not the same asset, and the gap runs to six figures on classic.com's September 2026 benchmarks. Confirm the gearbox is original to the car.

**Common annoyances to budget for.** Door check straps (a known 993 weak point, fiddly to fix), tired A/C compressors and plumbing, and lower cam-cover oil weeps. Confirm a real service history rather than assuming.`,

  commonProblems: `**Secondary air injection (SAI) clogging.** The 993's secondary-air system injects air into the exhaust ports on cold start to cut emissions. Over time carbon deposits clog the small passages. On 1996+ OBD-II cars this trips a check-engine light and can mean an automatic smog-test fail in CEL-checking states such as California. There is a genuine debate about severity: many specialists treat clogged SAI ports as primarily an emissions and inspection nuisance with little effect on how the car drives, addressable by cleaning the ports; others have framed worst-case carbon-related work as very expensive. We flag this as disputed.

**Oil leaks.** Generally less troublesome than the 964's, but oil weeps (for example from the lower cam covers) are common and usually straightforward to address.

**Door check straps.** A well-known 993 failure point. The strap that holds the door open breaks; the repair is fiddly and can run up labor.

**Targa roof mechanism.** Complex, heavy, and prone to faults; repairs to the glass-roof system can be costly. It also adds weight high in the car.

**Air conditioning.** A/C compressors and associated plumbing can need attention, and the work is not a cheap afternoon at a specialist.

**Turbo driveline (1996 cars).** Early 993 Turbos used weaker transmission input shafts given the power and AWD loads; Porsche strengthened them for 1997-98.

**General.** Tired suspension bushings and dampers and deferred maintenance are the usual story on cheaper examples; budget accordingly.`,

  valueTrajectory: `An affordable used 911 through the 2000s, then swept up in the air-cooled boom: Hagerty documented gains of about 31 percent in excellent-condition values between January 2014 and January 2017, with some variants up more than 70 percent. The frenzy cooled from about 2018, and by December 2019 Hagerty reported average prices slipping roughly 2 to 8 percent, Cabriolets down 11 to 15 percent, Targas and GT2s down about 12 percent, and the model's Hagerty Vehicle Rating falling from 77 to 48.

What followed was not a collapse but a re-sort, with the rare and the correct pulling away from the ordinary. As of September 2026, classic.com's tracked benchmarks put the manual Carrera coupe at $99,206 while the widebody Carrera S sits at $188,884 and the Turbo at $254,166, both of the latter on upward indicators, and the GT2 at $1,455,014. The last air-cooled 911 badge, a chassis enthusiasts adore, and looks many consider the best of any 911 give the model a durable floor. Coupes and manuals lead; the GT2, Carrera RS and Turbo S sit at the very top; Cabriolets and Targas trail.`,

  sources: [
    {
      ref: 'porsche',
      title: 'The 993: Pinnacle of the air-cooled era and the last of its kind',
      url: 'https://newsroom.porsche.com/en/history/porsche-911-seven-generations-part-4-type-993-16486.html',
      publisher: 'Porsche AG (Newsroom)',
      sourceType: 'manufacturer',
      reliability: 'high',
      notes: 'Official manufacturer history. Source of the 68,881 total, the 402 hp twin-turbo, the GT2 "limited to 100 / up to 444 hp" line, the Weissach-axle and LSA chassis framing, VarioRam 272 to 281 hp, and the glass-roof Targa.',
    },
    {
      ref: 'wikipedia',
      title: 'Porsche 911 (993)',
      url: 'https://en.wikipedia.org/wiki/Porsche_911_(993)',
      publisher: 'Wikipedia',
      sourceType: 'reference-book',
      reliability: 'medium',
      notes: 'Aggregator. Per-variant production table sourced to Kittler, "Deutsche Autos seit 1990" vol.6 p.361 (sums to about 68,029). Source of "20% of parts carried over", multilink and 989 derivation, GT2 "57 road-legal", RS 1,014 incl. 227 Clubsport, RSR about 45, torque figures, and the last-car (Carrera 4S, 31 Mar 1998) detail. Cross-check figures against primaries.',
    },
    {
      ref: 'hagerty-2019',
      title: '1994-98 Porsche 911 (993) values are stalling out, and here is why',
      url: 'https://www.hagerty.com/media/buying-and-selling/1994-98-porsche-993-values-stalling-out-heres-why/',
      publisher: 'Hagerty Media',
      sourceType: 'journalism',
      reliability: 'high',
      notes: 'Dec 2019 US market analysis. Source of the 2014 to 2017 +31% figure, the Hagerty Vehicle Rating 77 to 48 drop, the 2 to 8% average dips, and the body-style spreads. Historical, not a current quote.',
    },
    {
      ref: 'hagerty-guide',
      title: 'Buying Guide: 1995-98 Porsche 911 (993)',
      url: 'https://www.hagerty.co.uk/articles/buying-guide-1995-98-porsche-911-993/',
      publisher: 'Hagerty UK',
      sourceType: 'journalism',
      reliability: 'high',
      notes: 'Buyer guide used for mechanical faults only, not values: door check straps, lower cam-cover oil leaks, A/C, rust areas, and the Targa and sunroof mechanisms.',
    },
    {
      ref: 'pca-sai',
      title: 'Tech Q&A - 993 Secondary Air Injection System Cleaning',
      url: 'https://www.pca.org/tech/1998-993-secondary-air-injection-system-cleaning',
      publisher: 'Porsche Club of America',
      sourceType: 'club-forum',
      reliability: 'high',
      notes: 'Marque-club technical reference on SAI port clogging and cleaning on the 993, treating it as an emissions and check-engine-light issue rather than a mechanical failure.',
    },
    {
      ref: 'stuttcars',
      title: 'Porsche 911 (993) Sales & Production Numbers',
      url: 'https://www.stuttcars.com/porsche-911-993-sales-production-numbers/',
      publisher: 'StuttCars',
      sourceType: 'journalism',
      reliability: 'medium',
      notes: 'Enthusiast reference compiling per-year and per-variant build numbers (Turbo, Turbo S, Targa, GT2). Useful for cross-checking; treat as secondary.',
    },
    {
      ref: 'wiki-gt2',
      title: 'Porsche 911 GT2',
      url: 'https://en.wikipedia.org/wiki/Porsche_911_GT2',
      publisher: 'Wikipedia',
      sourceType: 'reference-book',
      reliability: 'medium',
      notes: 'Dedicated GT2 article used to corroborate the 993 GT2 road-car count dispute and the 1998 Evo update.',
    },
    {
      ref: 'classic-993',
      title: 'Porsche 911 - 993 Market',
      url: 'https://www.classic.com/m/porsche/911/993/',
      publisher: 'CLASSIC.COM',
      sourceType: 'market-data',
      reliability: 'high',
      notes: 'US market aggregator, fetched September 2026. Source of the $153,798 model-line average, the $2,397,500 high (1997 GT2, December 2023), the $12,930 low (1995 Carrera project, November 2025), and every per-variant benchmark quoted in marketNotes.',
    },
    {
      ref: 'classic-c4s',
      title: 'Porsche 911 Carrera 4S - 993 Market',
      url: 'https://www.classic.com/m/porsche/911/993/carrera-4s/',
      publisher: 'CLASSIC.COM',
      sourceType: 'market-data',
      reliability: 'high',
      notes: 'Variant market page fetched September 2026: $167,482 benchmark on an upward indicator, $395,500 high (1998 car, August 2025) and $60,000 low (1996 car, April 2023).',
    },
    {
      ref: 'classic-turbo',
      title: 'Porsche 911 Turbo - 993 Market',
      url: 'https://www.classic.com/m/porsche/911/993/turbo/',
      publisher: 'CLASSIC.COM',
      sourceType: 'market-data',
      reliability: 'high',
      notes: 'Variant market page fetched September 2026: $254,166 benchmark on an upward indicator, $614,200 high (1998 car, September 2024) and $86,000 low (1995 car, February 2022).',
    },
    {
      ref: 'classic-gt2',
      title: 'Porsche 911 GT2 - 993 Market',
      url: 'https://www.classic.com/m/porsche/911/993/gt2/',
      publisher: 'CLASSIC.COM',
      sourceType: 'market-data',
      reliability: 'high',
      notes: 'Variant market page fetched September 2026: about $932,532 average recorded sale, $2,397,500 high (1997 car, December 2023) and a $201,250 low for a 1997 GT2 R in May 2025.',
    },
    {
      ref: 'scm-turbo-1998',
      title: '1998 Porsche 911 Turbo (profile)',
      url: 'https://www.sportscarmarket.com/profile/1998-porsche-911-turbo',
      publisher: 'Sports Car Market',
      sourceType: 'journalism',
      reliability: 'high',
      notes: 'Auction analysis of the last customer-delivered air-cooled 993 Turbo, sold for $809,019 in September 2024, with the analyst placing comparable 2024 993 Turbo results at $290,000 to $665,000 against a $896,000 all-time high set in 2023.',
    },
    {
      ref: 'scm-rs-clubsport',
      title: '1996 Porsche 993 RS Clubsport Coupe (profile)',
      url: 'https://www.sportscarmarket.com/profile/1996-porsche-993-rs-clubsport-coupe',
      publisher: 'Sports Car Market',
      sourceType: 'journalism',
      reliability: 'high',
      notes: 'Auction analysis establishing that excellent 993 Carrera RS cars trade at $395,000 to $450,000 in the US and Europe, and that the stripped Clubsport is the less wanted of the two RS specifications.',
    },
    {
      ref: 'classicdriver-turbo',
      title: 'Are prices for the air-cooled Porsche 911 Turbo finally shooting up?',
      url: 'https://www.classicdriver.com/en/article/cars/are-prices-air-cooled-porsche-911-turbo-finally-shooting',
      publisher: 'Classic Driver',
      sourceType: 'journalism',
      reliability: 'medium',
      notes: 'Earlier market commentary (2015) citing a Gooding estimate of $325,000 to $400,000 for a 993 Turbo S and HAGI data on the 964 and 993 Turbo climb. Used for direction of travel only, not for current values.',
    },
  ],

  claims: [
    {
      section: 'production',
      claimText: 'Total 993 production was about 68,881 cars (Porsche AG figure), 1994-1998, making it the last air-cooled 911 generation.',
      confidence: 'high',
      status: 'disputed',
      sourceRefs: ['porsche', 'wikipedia'],
      conflictNote:
        'Porsche AG states 68,881 built (1993-1998). Wikipedia\'s per-variant table, sourced to Kittler\'s "Deutsche Autos seit 1990" vol.6 p.361, sums to roughly 68,029 across its listed lines, about 850 short of Porsche\'s round number, most likely because low-volume specials (Turbo S, GT2 road cars, factory one-offs) are not all broken out. We carry 68,881 as the headline and note the spread.',
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
      claimText: 'The naturally aspirated 3.6L M64 made 268 hp at launch (1994-95) and 281 hp from 1996 with the VarioRam variable-intake system; the 993 was also the first 911 with a standard six-speed manual.',
      confidence: 'high',
      status: 'verified',
      sourceRefs: ['porsche', 'wikipedia'],
    },
    {
      section: 'specs',
      claimText: 'The 993 Turbo (1995) used a 3.6L twin-turbocharged flat-six producing 402 hp and was the first 911 Turbo with all-wheel drive.',
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
      claimText: 'The Carrera RS used a 3.8L naturally aspirated engine (about 296 hp); 1,014 were built, including 227 Clubsport variants. It was not US-legal.',
      confidence: 'high',
      status: 'verified',
      sourceRefs: ['wikipedia'],
    },
    {
      section: 'production',
      claimText: 'Only a small number of street-legal 993 GT2 "GT" road cars were built for homologation, but the exact count is disputed.',
      confidence: 'medium',
      status: 'disputed',
      sourceRefs: ['porsche', 'wikipedia', 'wiki-gt2', 'stuttcars'],
      conflictNote:
        'Porsche AG\'s own history says the GT2 was "limited to an edition of 100." Wikipedia\'s 993 article states "Only 57 road-legal variants were built" (13 RHD). Other enthusiast and specialist tallies cite higher totals (about 172 to 194 road cars across the run, including the 1998 Evo update). The figures count different things (early-spec only versus the entire road-car run including 1998 cars). We present the spread rather than a single number.',
    },
    {
      section: 'production',
      claimText: 'The Turbo S (Porsche Exclusiv, MY1997, about 444 hp) was the last air-cooled 911 Turbo, built in roughly 183 units.',
      confidence: 'medium',
      status: 'disputed',
      sourceRefs: ['wikipedia', 'stuttcars'],
      conflictNote:
        'Wikipedia\'s prose says "the final 182 Porsche 911 Turbos built in 1997 were known as the Turbo S" while enthusiast production compilations commonly cite about 183 worldwide (with country splits). The figures cluster around 182 to 183; treat as approximate, not exact.',
    },
    {
      section: 'problems',
      claimText: 'Secondary air injection (SAI) ports clog with carbon over time; on 1996+ OBD-II cars this trips a check-engine light and can fail emissions testing, but how serious the underlying issue is is disputed.',
      confidence: 'medium',
      status: 'disputed',
      sourceRefs: ['pca-sai', 'hagerty-guide'],
      conflictNote:
        'One view (common among specialists and in PCA tech discussion): clogged SAI ports are primarily an emissions and CEL nuisance that can be cleared by cleaning the ports, with little to no effect on how the car drives. Another view circulating in some buyer guides frames worst-case carbon-related remediation as very expensive (engine-out cleaning). We present SAI as a real, well-documented 993 issue while flagging that severity and cost claims vary widely and the highest cost estimates are not well substantiated.',
    },
    {
      section: 'market',
      claimText: 'Air-cooled 993 values surged about 31 percent (excellent condition) from 2014 to 2017, then cooled from about 2018, with Hagerty noting 2 to 8 percent average dips and a vehicle-rating fall from 77 to 48 by late 2019.',
      confidence: 'medium',
      status: 'unverified',
      sourceRefs: ['hagerty-2019'],
      conflictNote:
        'Market commentary is directional and date-stamped (Hagerty figures are 2016 to 2019). Values move; this is history, not a current quote, and the September 2026 classic.com benchmarks are carried separately.',
    },
    {
      section: 'market',
      claimText: 'As of September 2026, classic.com records an average sale of $153,798 across the 993 line, with a tracked high of $2,397,500 (1997 GT2, December 2023) and a low of $12,930 (1995 Carrera project, November 2025).',
      confidence: 'medium',
      status: 'verified',
      sourceRefs: ['classic-993'],
    },
    {
      section: 'market',
      claimText: 'As of September 2026 the 993 price hierarchy runs Carrera Cabriolet $70,406, Carrera coupe $99,206, Targa $103,959, Carrera 4S $167,482, Carrera S $188,884, Turbo $254,166, Carrera RS $394,442, Turbo S $641,970 and GT2 $1,455,014 on classic.com benchmarks.',
      confidence: 'medium',
      status: 'verified',
      sourceRefs: ['classic-993', 'classic-c4s', 'classic-turbo', 'classic-gt2'],
    },
    {
      section: 'market',
      claimText: 'Unlike most classics, 993 coupes are worth meaningfully more than Cabriolets and Targas, and manual cars more than Tiptronics.',
      confidence: 'high',
      status: 'verified',
      sourceRefs: ['classic-993', 'hagerty-2019', 'hagerty-guide'],
    },
    {
      section: 'market',
      claimText: 'The 993 Turbo has climbed steadily in the US: classic.com shows an upward indicator with a $254,166 benchmark as of September 2026, and Sports Car Market placed 2024 comparable sales at $290,000 to $665,000 against a $896,000 record set in 2023.',
      confidence: 'medium',
      status: 'verified',
      sourceRefs: ['classic-turbo', 'scm-turbo-1998', 'classicdriver-turbo'],
    },
    {
      section: 'market',
      claimText: 'Excellent 993 Carrera RS cars trade at roughly $395,000 to $450,000 per Sports Car Market, consistent with the $394,442 classic.com benchmark as of September 2026.',
      confidence: 'medium',
      status: 'verified',
      sourceRefs: ['scm-rs-clubsport', 'classic-993'],
    },
    {
      section: 'market',
      claimText: 'The 993 Carrera 4S has appreciated sharply, with classic.com recording a $60,000 low in April 2023 and a $395,500 high in August 2025 against a $167,482 benchmark as of September 2026.',
      confidence: 'medium',
      status: 'verified',
      sourceRefs: ['classic-c4s'],
    },
  ],
};
