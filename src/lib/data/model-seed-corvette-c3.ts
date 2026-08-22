/**
 * Researched model draft — Chevrolet Corvette C3 (1968-1982).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedCorvetteC3 = {
 "slug": "chevrolet/corvette-c3",
 "make": "Chevrolet",
 "model": "Corvette",
 "generation": "C3",
 "generationCode": "C3",
 "trim": null,
 "yearStart": 1968,
 "yearEnd": 1982,
 "bodyStyles": [
  "2-door Coupe (removable T-top roof panels)",
  "2-door Convertible (1968-1975)"
 ],
 "engines": [
  "327 cu in (5.4L) small-block V8, 300 hp or 350 hp gross (1968 only)",
  "350 cu in (5.7L) small-block V8, base engine from 1969 to 1982",
  "350 cu in LT-1 solid-lifter small-block: 370 hp gross (1970), 330 hp gross (1971), 255 hp SAE net (1972)",
  "427 cu in (7.0L) Mk IV big-block V8, 390-435 hp gross (1968-1969)",
  "427 cu in L88 racing big-block, aluminium heads, nominally rated 430 hp gross (115 built 1968, 116 built 1969)",
  "427 cu in ZL1 all-aluminium big-block (2 cars, 1969)",
  "454 cu in (7.4L) LS5 big-block, introduced 1970; 365 hp gross (1971), 270 hp SAE net (1972)",
  "454 cu in LS6 big-block with aluminium heads, 425 hp gross / 325 hp net, 1971 only, 188 built",
  "454 cu in LS4 big-block, 270 hp SAE net (1973-1974) - the last Corvette big-block",
  "350 cu in L82 high-output small-block, roughly 205-250 hp SAE net (1973-1980)",
  "350 cu in small-block with throttle-body fuel injection, 200 hp SAE net (1982)"
 ],
 "productionTotal": null,
 "productionNotes": "Generation output is approximately 542,861 cars over fifteen model years, but published grand totals differ by a car or two and no single figure is universally agreed, so none is asserted here. Year-by-year figures are consistent across independent tabulations: 1968 28,566; 1969 38,762; 1970 17,316; 1971 21,801; 1972 27,004; 1973 30,464; 1974 37,502; 1975 38,465; 1976 46,558; 1977 49,213; 1978 46,776 or 46,777; 1979 53,807; 1980 40,614; 1981 40,606; 1982 25,407. The 1978 discrepancy is an allocation artifact: some tables list 40,275 coupes plus 6,502 Pace Car replicas (46,777) while others give a flat 46,776, and Corvette Central's table sums the generation to 542,861. Vette Vues publishes the same yearly rows but states a grand total of 542,078 and a convertible total of 70,399, both of which are inconsistent with its own columns (the convertible rows sum to 70,586). Convertibles ran 1968-1975 only. 1979 remains the highest-volume Corvette model year on record. Rare-option counts are well documented: L88 115 (1968) and 116 (1969), ZL1 2 (1969), LT-1 1,287 and ZR1 25 (1970), LS6 188 with ZR2 12 and ZR1 8 (1971), Pace Car replica 6,502 and Silver Anniversary paint 15,283 (1978).",
 "notableTrims": [
  {
   "name": "L88 / ZL1 (1968-1969)",
   "note": "Off-catalogue racing 427s deliberately under-rated at 430 hp gross. 115 L88s in 1968, 116 in 1969, and just two all-aluminium ZL1 cars. The blue-chip end of the generation and the reason documentation matters."
  },
  {
   "name": "LT-1 (1970-1972)",
   "note": "Solid-lifter 350 with 11:1 compression and a 6,500 rpm redline; 370 hp gross in 1970, 330 in 1971, 255 SAE net in 1972. No air conditioning in 1970-71. The small-block driver's pick and the strongest sub-big-block money."
  },
  {
   "name": "LS6 454 (1971 only)",
   "note": "Aluminium-head 454 rated 425 hp gross / 325 hp net, 188 built at $1,221. Uniquely for the period it could be ordered with an automatic. 12 of those cars carried the ZR2 package."
  },
  {
   "name": "Silver Anniversary (1978)",
   "note": "RPO B2Z two-tone silver-over-grey paint marking the Corvette's 25th year; 15,283 cars, $399. A paint option, not a limited edition, and priced accordingly."
  },
  {
   "name": "Indy 500 Pace Car Replica (1978)",
   "note": "RPO Z78, 6,502 built - roughly one per Chevrolet dealer - in black over silver with a red pinstripe, front and rear spoilers, glass T-tops and a long standard-equipment list. $13,653.21, about $4,300 over a base car. Widely speculated on when new and consequently plentiful, low-mileage and unremarkable in value."
  },
  {
   "name": "Collector Edition (1982)",
   "note": "Run-out model with a lift-up rear hatch glass that previewed the C4, sold at roughly $4,000 over base."
  }
 ],
 "specs": {
  "layout": "Front engine, rear-wheel drive",
  "construction": "Fibreglass body over a welded steel 'birdcage' cockpit structure and a full perimeter frame",
  "roof": "Removable T-top roof panels; removable rear window on 1968-1972 coupes; fixed fastback rear glass from 1978",
  "bumpers": "Chrome front and rear 1968-1972; 5 mph urethane front bumper from 1973; urethane rear from 1974",
  "base_power_1968": "327 cu in, 300 hp gross",
  "base_power_1971": "350 cu in, 270 hp gross",
  "base_power_1972": "350 cu in, 200 hp SAE net (same basic engine, new measurement standard)",
  "base_power_1975": "L48 350 cu in, 165 hp SAE net",
  "base_power_1978": "L48 350 cu in, 185 hp SAE net; L82 220 hp SAE net",
  "base_power_1982": "350 cu in, throttle-body fuel injection, 200 hp SAE net",
  "peak_power": "435 hp gross (L71 427, 1968-69); L88 nominally 430 hp gross and understood to be understated",
  "transmission": "3- and 4-speed manuals (including close-ratio boxes) or Turbo Hydra-Matic automatic",
  "brakes": "Four-wheel disc brakes",
  "emissions": "Catalytic converter and unleaded fuel from 1975; compression ratios cut from 1971 for 91-octane low-lead",
  "assembly": "St. Louis, Missouri; Bowling Green, Kentucky from 1981"
 },
 "summary": "The third-generation Corvette (1968-1982) took the Mako Shark II show car's waisted, high-fendered shape into production and then carried it, largely unchanged in silhouette, through fifteen model years and roughly 542,000 cars - the longest Corvette generation to date. It spans two almost unrelated cars. The 1968-1972 chrome-bumper models are late-muscle-era machinery: 427 and 454 big-blocks, the solid-lifter LT-1, removable rear windows and gross horsepower ratings. From 1973 federal 5 mph bumper standards brought urethane nose and tail sections, compression fell for low-lead fuel, and the 1972 switch from SAE gross to SAE net ratings made the advertised collapse in output look worse than the mechanical reality. Convertibles ended in 1975 and did not return until 1986. The market splits hard at the 1972/73 bumper line, which is precisely why the C3 remains one of the cheapest routes into a genuine classic American sports car.",
 "history": "## Mako Shark II to Production\nThe C3's shape came almost directly from the Mako Shark II (XP-755), a Bill Mitchell-directed show car unveiled at the New York International Automobile Show in April 1965 and drawn by a studio team including Larry Shinoda, Henry Haga, David Holls, Ken Eschebach and Art Carpenter. Two were built, only one of them running. Its high-crowned fenders, pinched waist, hidden headlamps and tunnelled rear window survived into the 1968 production car with remarkably little dilution; the show car itself was later reworked into the Manta Ray concept around the time the production Corvette launched. The 1968 car kept the Sting Ray chassis and running gear beneath the new body, adding removable T-top roof panels with a central brace and a rear window that lifted out entirely. Build quality did not keep pace with the styling: Car and Driver famously declared the 1968 Corvette 'unfit to road test', citing fit and finish, ventilation, noise and a cramped, hot cockpit. It sold 28,566 units anyway, a record at the time.\n\n## Chrome Bumpers and the Peak of the Big Blocks\nThe 1968-1972 cars are the ones the market treats as a separate model. Chrome bumpers front and rear, egg-crate grille, fender vents and - through 1972 - a removable rear window. The engine list in this window is the generation's high-water mark. For 1968 the base 327 made 300 hp gross, with 427 big-blocks from 390 to 435 hp and the off-catalogue L88 nominally rated at 430 hp gross, a figure understood at the time to be deliberately conservative. Only 115 L88s were built in 1968 and 116 in 1969, plus two all-aluminium ZL1 cars in 1969, the year the 350 replaced the 327 and the Stingray name returned as one word. In 1970 the solid-lifter LT-1 350 arrived with 11:1 compression and a 6,500 rpm redline at 370 hp gross; 1,287 were built. The 454 replaced the 427, and for 1971 alone the aluminium-head LS6 offered 425 hp gross - 188 cars, of which twelve carried the ZR2 package.\n\n## The Ratings Change and the Long Middle\nTwo things happened at once in the early 1970s and buyers still conflate them. First, compression ratios were genuinely cut from 1971 to suit 91-octane low-lead fuel ahead of catalytic converters. Second, and separately, the industry moved from SAE gross ratings - measured on a stripped engine with open exhaust and no accessories - to SAE net, measured as installed with production intake, exhaust and ancillaries. For 1972 the base 350 went from 270 hp gross to 200 hp net and the LT-1 from 330 gross to 255 net without a corresponding mechanical collapse. Contemporary analysis of the switch across the industry suggests the methodology change accounted for the larger share of the apparent drop, with real detuning making up the remainder. From 1973 a federally mandated 5 mph urethane front bumper replaced the chrome, the rear following for 1974. The 454 LS4 ended after 1974, and 1975 brought the catalytic converter, a 165 hp base L48 and the last C3 convertible - 4,629 cars, about 12 percent of the year - retired in anticipation of rollover standards that never arrived. The soft-top did not return until 1986.\n\n## Fastbacks, Anniversaries and the End of the Run\nWith performance stalled, Chevrolet sold style and volume, and it worked: 1976, 1977 and 1979 were all bigger years than any of the muscle-era ones, and 1979's 53,807 cars remains the highest-volume Corvette model year ever. For 1978 the car received a fastback rear window in place of the tunnelled backlight, plus two commemorative packages for the 25th anniversary: RPO B2Z Silver Anniversary two-tone paint at $399, taken by 15,283 buyers, and the RPO Z78 Indy 500 Pace Car replica at $13,653.21, roughly $4,300 over a base car, built to a run of 6,502 so that essentially every Chevrolet dealer received one. Heavily speculated on when new, Pace Cars were widely stored rather than driven and have never commanded the premium their original buyers expected. Assembly moved from St. Louis to Bowling Green, Kentucky in 1981, and 1982 closed the generation with a throttle-body-injected 350 and a Collector Edition whose lift-up rear hatch glass previewed the C4.",
 "marketNotes": "As of August 2026, classic.com shows an average sale price of roughly $38,100 across all C3 variants with about 427 cars listed for sale at once, and roughly $29,200 for standard-variant cars from a pool of about 345 listings - among the highest listing volumes for any classic sports car, and a reliable indicator of a liquid, buyer's market. The floor is genuinely low: classic.com's lowest recorded C3 sale is $2,800 for a 1972 car in February 2026. Value is concentrated almost entirely in specification and paperwork rather than year. The LT-1 carries a classic.com market benchmark of about $56,300 and an average sale near $55,000, with results spanning roughly $14,500 to $179,000 - a spread that reflects condition and documentation rather than model variation. At the top, classic.com's L88 benchmark sits around $420,000. The practical market line is 1972/73: chrome-bumper cars trade at a clear premium to urethane-bumper cars of otherwise similar condition, and 1976-1982 coupes are the cheapest entry point into the generation. Hagerty has separately made the case that the 1973-74 big-block cars, which combine 454 displacement with unloved bumper styling, are the value anomaly of the range.",
 "whatToLookFor": "Inspect the steel structure, not the fibreglass. The 'birdcage' - the welded steel frame around the windscreen and door hinges - rots from the inside at the base of the A-pillars and under the windscreen corners where it cannot be seen, and repairing it is a body-off job. A common field test is to lay a white towel in the footwells and slam the doors a few times: rust flakes falling onto the towel indicate serious decay. Also check the frame where it kicks up over the rear axle, the front frame horns, body mount points, floors and footwells, trailing arms and the brackets behind the bumpers; put the car on a lift with a torch before any money changes hands. On the body, feel the inner wheel-arch lips for cracks and look inside the wheel wells for evidence of botched repairs hidden under paint. T-tops leak and always have. For anything claiming a big-block, LT-1, L88 or ZL1, treat the claim as unproven until documented: check the VIN, trim tag and block casting and stamped numbers, and note that a plausible engine swap costs a fraction of the price difference between a real car and a tribute. For 1962-1975 cars the NCRS Historic Document Service can supply a GM shipping data report giving build date and original selling dealer, though it does not list options; NCRS also offers a document validation service for owners holding factory paperwork. Manual cars and correct original drivetrains carry the premium; heavily modified cars and automatics discount.",
 "commonProblems": "Structural corrosion is the defining C3 issue - birdcage, frame kick-ups over the rear axle, front frame horns, body mounts and floors - and it is invisible from above because the panels above it are fibreglass and never rust. Fibreglass itself cracks around wheel-arch lips and at stress points, and poor past repairs are routinely buried under fresh paint. T-top and rear-window seals leak, a complaint present from the 1968 launch. First-year 1968 cars carried well-documented assembly-quality problems including poor fit and finish, weak ventilation, high cabin noise and unreliable hidden-headlamp and wiper-door vacuum systems. Later cars trade those for emissions-era driveability: low compression, lean calibration, heat soak and a general lack of urge, particularly 1975-1980. Suspension bushes, trailing-arm bearings and brake calipers are consumables at this age. The most expensive fault is not mechanical at all - buying an undocumented car sold as a rare-option original.",
 "valueTrajectory": "The C3 is the outlier in classic Corvette appreciation: while C1 and C2 cars became blue-chip, most of the C3 run stayed cheap, and that remains true as of August 2026 with average sale prices around $38,000 across all variants and roughly $29,200 for standard cars. Growth has been concentrated at the extremes rather than the middle. Rare-option early cars - L88, ZL1, LS6, LT-1 - have followed the wider muscle-car market upward, with classic.com benchmarks of roughly $420,000 for the L88 and $56,300 for the LT-1, while ordinary 1976-1982 coupes have moved little in real terms and continue to sell for the price of a used commuter car. The chrome-bumper premium has widened rather than narrowed, making the 1968-1972 cars the segment most likely to keep appreciating. The clearest identified upside is the 1973-1974 big-block, which Hagerty has argued is undervalued purely because it wears the wrong bumpers. Against that, the sheer supply - over half a million cars built, hundreds listed at any moment - caps upside for the generic car, and rising restoration costs mean a cheap C3 with birdcage rust is a liability rather than an entry point.",
 "overallConfidence": "high",
 "sources": [
  {
   "ref": "wikipedia-c3",
   "title": "Chevrolet Corvette (C3)",
   "url": "https://en.wikipedia.org/wiki/Chevrolet_Corvette_(C3)",
   "publisher": "Wikipedia",
   "sourceType": "reference",
   "reliability": "medium",
   "notes": "Overview: Mako Shark II origin, chrome bumper years, LT-1 and LS6 outputs, 1972 SAE net switch, 1975 last convertible, 1978 anniversary editions."
  },
  {
   "ref": "corvsport-production",
   "title": "C3 Corvette Production Figures",
   "url": "https://www.corvsport.com/c3-corvette-production-figures/",
   "publisher": "CorvSport",
   "sourceType": "enthusiast-reference",
   "reliability": "high",
   "notes": "Year-by-year coupe/convertible/Pace Car table; states 542,862 generation total with 1978 as 40,275 + 6,502."
  },
  {
   "ref": "corvette-central-production",
   "title": "C3 Production Numbers",
   "url": "https://tech.corvettecentral.com/2010/03/c3-production-numbers/",
   "publisher": "Corvette Central Tech Blog",
   "sourceType": "specialist-supplier",
   "reliability": "medium",
   "notes": "Independent year-by-year table summing to 542,861, with 1978 listed as a flat 46,776."
  },
  {
   "ref": "vette-vues-production",
   "title": "C3 Corvette Production Numbers by Year (1968-1982)",
   "url": "https://vette-vues.com/c3-corvette-production-numbers-by-year-1968-1982/",
   "publisher": "Vette Vues Magazine",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Third year-by-year table; matching yearly rows but stated grand and convertible totals do not reconcile with its own columns."
  },
  {
   "ref": "motorcities-mako",
   "title": "Remembering A Concept Car Legend, The Mako Shark II",
   "url": "https://www.motorcities.org/story-of-the-week/2017/remembering-a-concept-car-legend-the-mako-shark-ii",
   "publisher": "MotorCities National Heritage Area",
   "sourceType": "heritage-organisation",
   "reliability": "high",
   "notes": "XP-755 design team under Bill Mitchell, April 1965 New York debut, two cars built, influence on the 1968 production car, Manta Ray rework."
  },
  {
   "ref": "hagerty-c3-guide",
   "title": "1968-82 Chevrolet Corvette (C3) buyers guide",
   "url": "https://www.hagerty.com/media/buying-and-selling/1968-82-chevrolet-corvette-buyers-guide/",
   "publisher": "Hagerty",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "LT-1 370 hp and 6,500 rpm redline, LS6 425 hp, 12 ZR2s, 1972 SAE net conversion, 1978 Pace Car pricing, 1982 Collector Edition, 1981 Bowling Green move, 1968 build-quality note."
  },
  {
   "ref": "hagerty-bigblock",
   "title": "The last big block Corvettes are a bargain",
   "url": "https://www.hagerty.com/media/car-profiles/big-block-corvette-bargains/",
   "publisher": "Hagerty",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "LS5 and LS4 net outputs and torque, 1974 as the final Mk IV big-block year, ~3,500 LS4 takers, urethane bumper styling and its effect on desirability."
  },
  {
   "ref": "ateupwithmotor-hp",
   "title": "Understanding Gross Versus Net Horsepower Ratings",
   "url": "https://ateupwithmotor.com/terms-technology-definitions/gross-versus-net-horsepower/",
   "publisher": "Ate Up With Motor",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Definitions of SAE gross and SAE net, the 1971-72 industry transition, and a worked example showing methodology accounted for the larger share of the apparent power drop."
  },
  {
   "ref": "corvsport-1968",
   "title": "1968 C3 Corvette: Specifications, VIN & Options",
   "url": "https://www.corvsport.com/1968-c3-corvette/",
   "publisher": "CorvSport",
   "sourceType": "enthusiast-reference",
   "reliability": "high",
   "notes": "1968 engine list with gross ratings, L88 115 units at $947.90, L89 624 units, T-tops and removable rear window, Car and Driver 'unfit to road test' verdict."
  },
  {
   "ref": "corvsport-1969",
   "title": "1969 C3 Corvette: Specifications, VIN & Options",
   "url": "https://www.corvsport.com/1969-c3-corvette/",
   "publisher": "CorvSport",
   "sourceType": "enthusiast-reference",
   "reliability": "high",
   "notes": "350 replaces the 327, Stingray as one word, L88 116 built, ZL1 2 built, 38,762 total."
  },
  {
   "ref": "corvsport-1971",
   "title": "1971 C3 Corvette: Specifications, VIN & Options",
   "url": "https://www.corvsport.com/1971-c3-corvette/",
   "publisher": "CorvSport",
   "sourceType": "enthusiast-reference",
   "reliability": "high",
   "notes": "LS6 425 hp with aluminium heads, 188 built at $1,221; LS5 365 hp; LT-1 330 hp; ZR1 8 and ZR2 12; compression cut for 91-octane low-lead."
  },
  {
   "ref": "corvsport-1972",
   "title": "1972 C3 Corvette: Specifications, VIN & Options",
   "url": "https://www.corvsport.com/1972-c3-corvette/",
   "publisher": "CorvSport",
   "sourceType": "enthusiast-reference",
   "reliability": "high",
   "notes": "Gross-to-net conversion figures (base 350 300 gross to 200 net, LT-1 330 to 255, LS5 365 to 270); last year for chrome bumpers, egg-crate grille and removable rear window."
  },
  {
   "ref": "vette-vues-1975",
   "title": "1975 Corvette Overview",
   "url": "https://vette-vues.com/1975-corvette-overview/",
   "publisher": "Vette Vues Magazine",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "4,629 convertibles, about 12 percent of the year, as the last C3 soft-top; return in 1986; catalytic converter introduced; L48 165 hp, L82 205 hp; 38,465 total."
  },
  {
   "ref": "vette-vues-1978",
   "title": "1978 Corvette Overview: Pace Car, Specs, Colors & Production",
   "url": "https://vette-vues.com/1978-corvette-pace-car-overview-and-specifications/",
   "publisher": "Vette Vues Magazine",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "46,776 total, 6,502 Pace Car replicas, RPO B2Z Silver Anniversary paint on 15,283 cars at $399, L48 185 hp and L82 220 hp, new fastback rear window."
  },
  {
   "ref": "corvsport-pacecar",
   "title": "1978 Corvette Indy Pace Car",
   "url": "https://www.corvsport.com/1978-corvette-indy-pace-car/",
   "publisher": "CorvSport",
   "sourceType": "enthusiast-reference",
   "reliability": "high",
   "notes": "RPO Z78 content and equipment list, 6,502 built at $13,653.21 (about $4,300 over base), one per dealer rationale, black-over-silver with red pinstripe."
  },
  {
   "ref": "corvette-c3-rust",
   "title": "C3 Corvette Rust and Corrosion Trouble Spots",
   "url": "https://corvette-c3.com/rustpics/",
   "publisher": "Corvette-C3.com",
   "sourceType": "club-forum",
   "reliability": "medium",
   "notes": "Birdcage rot at A-pillar bases and windscreen corners, frame kick-up over the rear axle, front frame horns, body mounts, floors, trailing arms; lift-and-torch inspection advice."
  },
  {
   "ref": "corvsport-tenrules",
   "title": "Ten Rules For Buying Your First C3 Corvette",
   "url": "https://www.corvsport.com/corvsport-curates-ten-rules-for-buying-your-first-c3-corvette/",
   "publisher": "CorvSport",
   "sourceType": "enthusiast-reference",
   "reliability": "medium",
   "notes": "White-towel door-slam birdcage test, kick-panel inspection, wheel-arch crack checks, VIN/trim tag and block number verification, hidden repair warnings."
  },
  {
   "ref": "ncrs-hds",
   "title": "Historic Document Service",
   "url": "https://www.ncrs.org/services/historic-document-service.php",
   "publisher": "National Corvette Restorers Society",
   "sourceType": "club-forum",
   "reliability": "high",
   "notes": "Shipping Data Report ($50) gives build date and original dealer for cars from 1962 (after no. 6000) through 1975; explicitly does not list options. Document Validation Service $110."
  },
  {
   "ref": "classic-c3",
   "title": "Chevrolet Corvette - C3 Market",
   "url": "https://www.classic.com/m/chevrolet/corvette/c3/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of August 2026: average sale price $38,147 across all C3 variants, 427 cars listed, lowest recorded sale $2,800 for a 1972 car (10 Feb 2026)."
  },
  {
   "ref": "classic-c3-standard",
   "title": "Chevrolet Corvette - Standard Variants - C3 Market",
   "url": "https://www.classic.com/m/chevrolet/corvette/c3/standard-variants/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of August 2026: average sale price $29,234 for standard-variant C3s, 345 listed; page also cites an L88 market benchmark of $420,052."
  },
  {
   "ref": "classic-c3-lt1",
   "title": "Chevrolet Corvette LT1 - C3 Market",
   "url": "https://www.classic.com/m/chevrolet/corvette/c3/lt1/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of August 2026: market benchmark $56,339, average sale $54,984, results from $14,500 to $179,000, 17 cars listed."
  }
 ],
 "claims": [
  {
   "section": "history",
   "claimText": "The C3's styling derives from the Mako Shark II (XP-755), a Bill Mitchell-directed show car shown at the New York International Automobile Show in April 1965 and later reworked into the Manta Ray concept.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "motorcities-mako",
    "wikipedia-c3"
   ]
  },
  {
   "section": "production",
   "claimText": "Total C3 production is approximately 542,861 cars across the 1968-1982 model years, but no single exact figure is agreed across published tabulations.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "corvette-central-production",
    "corvsport-production",
    "vette-vues-production"
   ],
   "conflictNote": "Corvette Central's table sums to 542,861 with 1978 as 46,776; CorvSport states 542,862 by listing 1978 as 40,275 coupes plus 6,502 Pace Cars (46,777). Vette Vues publishes the same yearly rows but states 542,078, which does not reconcile with its own columns. The spread is one to two cars in substance and an arithmetic error in the third case."
  },
  {
   "section": "production",
   "claimText": "Yearly output rose from 28,566 in 1968 to a record 53,807 in 1979, the highest-volume Corvette model year, before falling to 25,407 in the run-out year of 1982.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "corvsport-production",
    "corvette-central-production",
    "vette-vues-production",
    "wikipedia-c3"
   ]
  },
  {
   "section": "history",
   "claimText": "Chrome front and rear bumpers ran through 1972; a federally mandated 5 mph urethane front bumper arrived for 1973 and a urethane rear cover for 1974, and 1972 was also the last year for the removable rear window and egg-crate grille.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-c3",
    "corvsport-1972",
    "hagerty-bigblock"
   ]
  },
  {
   "section": "specs",
   "claimText": "The solid-lifter LT-1 350 was rated 370 hp gross in 1970 with an 11:1 compression ratio and a 6,500 rpm redline, 330 hp gross in 1971 and 255 hp SAE net in 1972, and could not be ordered with air conditioning in 1970-71.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "hagerty-c3-guide",
    "wikipedia-c3",
    "corvsport-1971",
    "corvsport-1972"
   ]
  },
  {
   "section": "production",
   "claimText": "The aluminium-head LS6 454 was offered in the Corvette for 1971 only, rated 425 hp gross (325 hp net), fitted to 188 cars at $1,221, of which twelve carried the ZR2 package.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "corvsport-1971",
    "wikipedia-c3",
    "hagerty-c3-guide"
   ]
  },
  {
   "section": "specs",
   "claimText": "The 1972 collapse in advertised output was primarily a change of measurement standard from SAE gross to SAE net rather than an equivalent mechanical detune: the base 350 fell from 300 hp gross to 200 hp net and the LT-1 from 330 gross to 255 net, while industry-wide analysis of the switch attributes the larger share of the apparent drop to methodology and the remainder to genuine compression and emissions changes.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "ateupwithmotor-hp",
    "corvsport-1972",
    "wikipedia-c3",
    "hagerty-c3-guide"
   ]
  },
  {
   "section": "production",
   "claimText": "The 1975 model year ended C3 convertible production at 4,629 cars, roughly 12 percent of that year's output, and the Corvette convertible did not return until 1986.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "vette-vues-1975",
    "wikipedia-c3"
   ]
  },
  {
   "section": "production",
   "claimText": "For 1978 Chevrolet built 6,502 Indy 500 Pace Car replicas (RPO Z78) at $13,653.21, roughly $4,300 above a base car, and sold RPO B2Z Silver Anniversary two-tone paint at $399 on 15,283 cars.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "corvsport-pacecar",
    "vette-vues-1978",
    "wikipedia-c3"
   ]
  },
  {
   "section": "production",
   "claimText": "Rare early performance options were built in tiny numbers: 115 L88s in 1968, 116 in 1969, and only two all-aluminium ZL1 cars in 1969.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "corvsport-1968",
    "corvsport-1969"
   ]
  },
  {
   "section": "problems",
   "claimText": "The dominant structural fault is corrosion of the steel birdcage at the A-pillar bases and windscreen corners, along with the frame kick-up over the rear axle, front frame horns, body mounts and floors - all hidden beneath fibreglass panels that never rust.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "corvette-c3-rust",
    "corvsport-tenrules"
   ]
  },
  {
   "section": "problems",
   "claimText": "First-year 1968 cars carried well-documented assembly-quality problems, to the point that Car and Driver described the car as 'unfit to road test'; T-top and rear-window leaks were a complaint from launch.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "corvsport-1968",
    "hagerty-c3-guide"
   ]
  },
  {
   "section": "problems",
   "claimText": "Because the price gap between a documented rare-option car and an ordinary one vastly exceeds the cost of an engine swap, buyers should verify VIN, trim tag and block casting and stamped numbers, and can obtain a GM shipping data report from the NCRS Historic Document Service for cars through 1975 - though that report gives build date and original dealer, not the option list.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "ncrs-hds",
    "corvsport-tenrules"
   ]
  },
  {
   "section": "market",
   "claimText": "As of August 2026 classic.com reports an average sale price of about $38,100 across all C3 variants with roughly 427 cars listed, and about $29,200 for standard variants from about 345 listings; the lowest recorded sale is $2,800 for a 1972 car in February 2026.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-c3",
    "classic-c3-standard"
   ]
  },
  {
   "section": "market",
   "claimText": "Value concentrates in rare specification rather than year: as of August 2026 classic.com carries an LT-1 market benchmark of roughly $56,300 with an average sale near $55,000 and results from about $14,500 to $179,000, against an L88 benchmark of roughly $420,000.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-c3-lt1",
    "classic-c3-standard"
   ]
  },
  {
   "section": "market",
   "claimText": "The 1973-1974 454 big-block cars are argued to be the value anomaly of the generation, combining big-block displacement with the less desirable urethane-bumper styling; only about 3,500 buyers took the $250 LS4 option in 1974, its final year.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "hagerty-bigblock"
   ]
  }
 ]
};
