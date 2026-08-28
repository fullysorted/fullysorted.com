/**
 * Researched model draft — Chevrolet Chevelle SS (1968-1972).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedChevelleSs = {
 "slug": "chevrolet/chevelle-ss",
 "make": "Chevrolet",
 "model": "Chevelle SS",
 "generation": "Second generation",
 "generationCode": "GM A-body",
 "trim": null,
 "yearStart": 1968,
 "yearEnd": 1972,
 "bodyStyles": [
  "2-door hardtop sport coupe",
  "2-door convertible",
  "2-door sedan pickup (El Camino - its own SS 396 series in 1968, an RPO Z15 car from 1970)"
 ],
 "engines": [
  "396 cu in (6,489 cc) L35 Mark IV V8, 325 bhp gross, standard in the 1968 and 1969 SS 396",
  "396 cu in L34 Mark IV V8, 350 bhp gross; bored to 402 cu in (6,588 cc) for 1970 at 350 bhp at 5,200 rpm and 415 lb-ft at 3,400 rpm while keeping the 396 badge",
  "396 cu in L78 Mark IV V8, 375 bhp gross with solid lifters; 402 cu in from 1970 at 375 bhp at 5,600 rpm on 11.0:1 with a Holley four-barrel, withdrawn from the Chevelle order sheet on 30 October 1969",
  "402 cu in LS3 V8, 330 bhp gross at 4,800 rpm in 1970 outside the SS packages; 300 gross / 260 SAE net in 1971 and 240 SAE net in 1972 as a Z15 engine",
  "454 cu in (7,440 cc) LS5 V8, 360 bhp gross at 4,400 rpm and 500 lb-ft at 3,200 rpm for 1970; 365 gross and 285 SAE net for 1971; 270 SAE net for 1972",
  "454 cu in LS6 V8, 450 bhp gross at 5,600 rpm and 500 lb-ft at 3,600 rpm on 11.25:1 with solid lifters, forged crankshaft, rods and pistons, an aluminium intake and a Holley four-barrel - 1970 only"
 ],
 "productionTotal": null,
 "productionNotes": "No reconciled figure for second-generation SS production survives cross-checking, so none is asserted. The year-by-year counts published by specialist registries run: 62,785 SS 396 Chevelles for 1968 plus a further 5,190 El Camino SS 396s built within the same series; 86,307 RPO Z25 cars for 1969; 53,599 Z25 and 8,773 Z15 cars for 1970; 19,293 Z15 cars for 1971, of which 9,502 carried SS 454 equipment; and 24,946 Z15 cars for 1972, of which 5,333 were SS 454s. Those add to roughly 255,700 Chevelles. Hagerty's buyer's guide states that just under 192,000 SS Chevelles were built across the same five years, while listing year figures that themselves sum higher than its own total. Part of the gap is definitional, since the 1970-1972 counts fold in El Camino and the 1968 figure does not, but that does not close it and no source consulted here reconciles the two. Within 1970 the arithmetic is at least internally consistent: 4,298 LS5 and 4,475 LS6 cars make up the 8,773 Z15 total, and the 53,599 Z25 cars bring the year's Super Sport count to 62,372. The 4,475 LS6 figure is the one number every source agrees on. What no source can supply is the split by body style, because Chevrolet's option-level production records were destroyed. The LS6 Registry publishes a proportional calculation of roughly 3,387 sport coupes, 103 convertibles and 585 sedan pickups and states plainly that these are computed possibilities rather than records; other accounts put roughly 3,975 coupes and convertibles together, implying about 500 El Caminos. Convertible estimates run from twelve to more than a hundred.",
 "notableTrims": [
  {
   "name": "SS 396 series (1968)",
   "note": "The only year of the generation in which the SS was a distinct series rather than an option code, and so the one year a car can be authenticated from the VIN alone."
  },
  {
   "name": "RPO Z25 SS 396 (1969-1970)",
   "note": "The equipment package that replaced the series. 1970 is the year the engine beneath became a 402 while the badge stayed at 396."
  },
  {
   "name": "L78 396/375 (1968-1970)",
   "note": "Solid-lifter, 11.0:1 top 396, withdrawn from the 1970 order sheet on 30 October 1969, which makes a genuine 1970 L78 a short-window car."
  },
  {
   "name": "RPO Z15 SS 454 with LS5 (1970-1972)",
   "note": "The standard 454 package car, hydraulic-lifter and Quadrajet-fed at 360 bhp gross in 1970, and the great majority of Z15 big-block cars."
  },
  {
   "name": "RPO Z15 SS 454 with LS6 (1970)",
   "note": "One model year, 4,475 engines, 450 bhp gross. The most contested car in the American collector market and the one where documentation rather than specification sets the price."
  },
  {
   "name": "Z15 SS Equipment (1971-1972)",
   "note": "The badge decoupled from the drivetrain: Z15 could be combined with any of the four optional V8s, so a period-correct SS of these years may carry a 350."
  },
  {
   "name": "RPO ZL2 cowl induction hood",
   "note": "Take-up collapsed as the package softened - 28,888 hoods in 1970, 4,079 in 1971 and 3,659 in 1972 - making it a useful cross-check on a claimed specification."
  }
 ],
 "specs": {
  "layout": "Front longitudinal engine, rear-wheel drive",
  "chassis": "Separate perimeter frame, body-on-frame; 112-inch wheelbase for coupes, convertibles and the sedan pickup",
  "engine": "Mark IV big-block V8: 396 cu in (402 from 1970) or 454 cu in, cast-iron block and heads, single four-barrel; Rochester Quadrajet on L34, LS3 and LS5, Holley on L78 and LS6",
  "power": "325-375 bhp gross from the 396/402 (1968-1970); 360 bhp gross LS5 and 450 bhp gross LS6 for 1970; 365 gross / 285 SAE net LS5 for 1971; 270 SAE net for 1972. The 1968-1970 figures are gross ratings and are not comparable with the later net ones",
  "torque": "415 lb-ft at 3,400 rpm (L34 402, 1970); 500 lb-ft at 3,200 rpm (LS5 454, 1970); 500 lb-ft at 3,600 rpm (LS6 454, 1970); 465 lb-ft at 3,200 rpm (LS5, 1971)",
  "compression": "10.25:1 (L34, LS5) and 11.25:1 (LS6) for 1970, falling to 8.5:1 across the range for 1971 to suit low-lead and unleaded fuel",
  "transmission": "Three-speed and four-speed manuals (Muncie M20, M21, M22) or Turbo Hydra-Matic 400 automatic; big-block cars restricted to the four-speed or the TH400",
  "final_drive": "3.31:1 with the automatic and 3.55:1 with the four-speed on the 1970 LS6, 4.10:1 optional; Positraction available",
  "suspension": "Coil-sprung independent front with unequal-length wishbones; four-link coil-sprung live rear axle; RPO F41 heavy-duty package included with the SS",
  "brakes": "Power front discs and rear drums, standard with the SS packages",
  "weight": "Approximately 3,990 lb kerb as tested by Car Life for a 1970 SS 396, with 58 per cent over the front axle",
  "acceleration": "0-60 mph in 8.1 seconds and the standing quarter mile in 15.5 seconds at 90.42 mph for a 350 bhp 1970 SS 396 with 3.31 gearing (Car Life, January 1970)",
  "identification": "1968 SS 396 has its own VIN series; 1969-1971 SS cars carry no VIN evidence outside Oshawa-built cars; from 1972 the VIN carries an engine letter, W denoting the 454"
 },
 "summary": "The second-generation Chevelle SS covers the 1968-1972 A-body, and across those five model years the car changes character completely. It arrives in 1968 as a distinct SS 396 series on a new 112-inch coupe wheelbase, becomes an option package in 1969, and peaks in 1970, when General Motors lifted its self-imposed 400 cubic inch ceiling on intermediate cars and Chevrolet answered with the Z15 SS 454. At the top of that order sheet sat the LS6: 454 cubic inches, 11.25:1 compression, solid lifters, a Holley four-barrel and a gross rating of 450 bhp. It lasted one model year. From 1971 the SS became an equipment package orderable with any optional V8, output was quoted in SAE net alongside gross, and by 1972 the largest engine on the sheet read 270 bhp. Very little of the car's production breakdown is documented to the standard the market now demands of it.",
 "history": "## A Fresh Shell and a Series of Its Own\nChevrolet redrew the A-body for 1968 around two wheelbases: 112 inches for two-door coupes, convertibles and the El Camino, 116 inches for four-door sedans and wagons. The result was a long-bonnet, short-deck shape with a semi-fastback hardtop roof, and the SS 396 was a separate series that year rather than an option: 60,499 sport coupes, 2,286 convertibles and 5,190 El Caminos. Standard equipment was plainer than the badge suggests: a bench seat, an open differential and a three-speed manual, with buckets, gauges and a four-speed all extra. Three 396 cu in Mark IV engines were offered, the L35 at 325 bhp, the L34 at 350 and the solid-lifter L78 at 375.\n\n## The Option Code Years\nFor 1969 the SS 396 series was abolished and the same equipment returned as RPO Z25, taken by around 86,307 cars. That is the change which makes everything afterwards difficult: from this point the car is a package rather than a model, and the VIN stops recording it. For 1970 General Motors lifted its self-imposed 400 cu in ceiling on intermediate cars and Chevrolet used the room at once. The 396 was bored to 402 cu in but kept its badge; Z25 remained the SS 396 at $445.55, with the L34 350 bhp engine standard and the L78 375 bhp version available until 30 October 1969. Alongside it came RPO Z15, the SS 454, at $503.45.\n\n## Four Hundred and Fifty Gross\nZ15's standard engine was the LS5, a hydraulic-lifter 454 rated at 360 bhp at 4,400 rpm and 500 lb-ft at 3,200. For roughly $263 more the LS6 replaced it: 11.25:1 compression, forged crankshaft, rods and pistons, solid lifters, an aluminium intake and a Holley four-barrel, rated at 450 bhp at 5,600 rpm with the same 500 lb-ft at 3,600. That was a gross figure, taken on a stand without air cleaner, exhaust system, alternator or fan. Gearing was 3.31:1 with the automatic or 3.55:1 with the four-speed, with 4.10:1 available. The car around the engine was less accomplished: Car Life's January 1970 test of a 350 bhp SS 396 recorded 15.5 seconds at 90.42 mph from a 3,990 lb kerb weight carrying 58 per cent over the front axle, with heavy understeer and brakes that faded.\n\n## Two Numbers for the Same Engine\n1971 changed the arithmetic more than it changed the cars. General Motors required its engines to run on low-lead or unleaded fuel, compression fell to 8.5:1 or below, and Chevrolet began publishing SAE net figures, measured with the engine's own accessories and exhaust fitted, alongside the traditional gross ratings. The LS5 was quoted at 365 bhp gross and 285 bhp net; the 402 read 300 gross and 260 net. Neither pairing describes a like-for-like decline, and reading the 1971 figures straight against the 1970 ones without noting the method is the most common error made about these cars. Z15 itself became an equipment package orderable with any of the four optional V8s, which is why a genuine 1971 SS can carry a 350.\n\n## The Badge Outlives the Engine\nFor 1972 gross ratings were dropped entirely. The 454 LS5 read 270 bhp SAE net, the 402 read 240 and the two 350s 165 and 175. Z15 remained available on the Malibu sport coupe, convertible and El Camino, and 24,946 cars took it, more than in 1971. The lasting benefit to later owners was an engine letter in the VIN, W denoting the 454, which could only be ordered with the package. It was the final year for cowl induction on the 454, and the final year of the second-generation shell.",
 "marketNotes": "As of August 2026, classic.com's benchmark for the second-generation Chevelle SS stands at $87,120 on a rising trend, with an average recorded sale of $100,381 and 72 cars listed for sale. The tracked range runs from an anomalous $1 entry recorded against a 1970 SS 454 LS5 M22 on 24 March 2026 to $209,900 for a 1970 SS 454 LS6 on 30 June 2026. Auction evidence sits well above the benchmark at the documented end. Mecum sold a numbers-matching LS6 M22 convertible, chassis 136670B188926, for $770,000 including buyer's premium as lot S187 at Kissimmee on 17 January 2026 - the highest price paid for any Chevelle at public sale, ahead of the $600,000 record set in May 2024. A documented LS6 four-speed made $192,500 at Barrett-Jackson Palm Beach in April 2025, against reported sales near $87,000 for an example whose broadcast sheet could not be produced on the day. Hagerty's market writing places a four-speed roughly 15 per cent ahead of an otherwise equivalent automatic, and notes that big-block Chevelles, LS6 cars first, recovered their pre-2008 values faster than the rest of the field.",
 "whatToLookFor": "Identification comes before condition on this car. In 1968 the SS 396 was its own series and the VIN says so. From 1969 to 1971 it was an option code and no part of the VIN records it, so a car of those years cannot be authenticated from the metal alone. That is why the paper trail - build sheet, Protect-O-Plate, dealer invoice, warranty card, window sticker - carries so much of the value. The exception is 1972, when Chevrolet placed an engine letter in the VIN and the 454 code W could only be ordered alongside Z15. Cars assembled at Oshawa, Ontario carry their RPO codes on the Fisher body tag; a US-built 1970 trim tag carries no such record. Expect claims to outrun evidence, since Chevelle club officials report that cloned paperwork now circulates alongside cloned cars. On an LS6, treat the stamped partial VIN on the engine pad and the casting and assembly dates as a starting point rather than a conclusion, and ask what independent record supports any body-style rarity claimed, since the LS6 Registry publishes calculations and says so. Beyond the paperwork, check the frame and its body mounts before the panels, lift the boot mat, and look along the base of the rear screen.",
 "commonProblems": "Mechanically these are simple, over-built cars and the drivetrains have no signature failure. A long-standing Chevelle specialist quoted by Hagerty could think of nothing genuinely wrong with any of them beyond the fact that period gasket technology means they all leak oil. The structure is where the money goes. The perimeter frame and its body mounts corrode from the inside, and the panels rust in a consistent order: the base of the rear window first, which then drains into the boot and rots the parcel shelf and boot floor; the quarter panels behind the rear wheels; the lower corners of the doors; the bottoms of the front wings; and the floor pans, particularly under the windscreen. Cars fitted with a vinyl roof trap moisture beneath it and bubble along the rear pillars, and convertibles rot in the inner rockers, which is structural on an open car. Replacing the rear glass on a hardtop requires the quarter panel to come off, so a leaking rear screen is rarely a cheap repair. Big-block cars add mass to a nose that already carried 58 per cent of the weight, and worn front bushings, sagging springs and tired steering boxes are normal. Reproduction sheet metal is abundant, but fit quality varies and imported panels frequently need reworking.",
 "valueTrajectory": "Big-block Chevelles were among the quickest American muscle cars to recover after 2008, and LS6 cars led that recovery. The market has since separated along a single axis, and that axis is evidence rather than specification: a documented, numbers-matching LS6 trades in a different market from an SS 454 whose Z15 status rests on the seller's word. As of August 2026 the classic.com benchmark for the generation's SS cars is $87,120 and trending upward, while Mecum's January 2026 Kissimmee sale of a restored LS6 M22 convertible at $770,000 including premium set a new public high for any Chevelle, ahead of the $600,000 paid in May 2024. Reported results in the $120,000 to $200,000 band for documented LS6 coupes, against roughly $87,000 for an example whose broadcast sheet could not be produced, describe the same gap from the other end. The 1971 and 1972 cars have been the quiet movers, cheap for decades because their published output read as detuned when the change was largely one of measurement. Paperwork now prices these cars, and the supply of examples able to prove what they are does not increase.",
 "overallConfidence": "medium",
 "sources": [
  {
   "ref": "chevellestuff-1970-ss",
   "title": "1970 Chevelle's SS options (Malibu series)",
   "url": "https://www.chevellestuff.net/1970/70ss.htm",
   "publisher": "ChevelleStuff",
   "sourceType": "registry",
   "reliability": "high",
   "notes": "1970 option structure: Z25 SS 396 at $445.55 with L34 350 bhp standard and L78 375 bhp available only until 30 October 1969; Z15 SS 454 at $503.45 with LS5 standard and LS6 optional; and the 396 bored to 402 while keeping its badge."
  },
  {
   "ref": "chevellestuff-1970-production",
   "title": "1970 Chevelle/Monte Carlo Production Numbers by Series/Model",
   "url": "https://www.chevellestuff.net/1970/style_prod_no.htm",
   "publisher": "ChevelleStuff",
   "sourceType": "registry",
   "reliability": "high",
   "notes": "Source for the 1970 counts: 53,599 Malibu/El Camino cars with Z25 and 8,773 with Z15, the latter split 4,298 LS5 and 4,475 LS6, plus 3,823 Monte Carlos with the Z20 SS 454."
  },
  {
   "ref": "chevellestuff-1971-ss",
   "title": "1971 Chevelle SS (RPO Z15)",
   "url": "https://www.chevellestuff.net/1971/71ss.htm",
   "publisher": "ChevelleStuff",
   "sourceType": "registry",
   "reliability": "high",
   "notes": "1971 Z15 contents and the four optional V8s it could accompany; ZL2 cowl induction at 4,079 against 28,888 in 1970; and the statement that the LS6 was dropped with no price ever published and never reached Chevelle production."
  },
  {
   "ref": "chevellestuff-1971-production",
   "title": "1971 Chevelle/Monte Carlo Production Numbers by Series/Model",
   "url": "https://www.chevellestuff.net/1971/style_prod_no.htm",
   "publisher": "ChevelleStuff",
   "sourceType": "registry",
   "reliability": "high",
   "notes": "States 19,293 Malibu/El Camino Custom cars carried Z15 in 1971 with 9,502 of those SS 454s, plus 1,919 Monte Carlo SS 454s, and flags that plant VIN totals of 540,176 do not reconcile with the table."
  },
  {
   "ref": "chevellestuff-1972-ss",
   "title": "1972 Chevelle SS (RPO Z15)",
   "url": "https://www.chevellestuff.net/1972/72ss.htm",
   "publisher": "ChevelleStuff",
   "sourceType": "registry",
   "reliability": "high",
   "notes": "1972 Z15 availability on Malibu sport coupe, convertible and sedan pickup; SAE net ratings of 165, 175, 240 and 270 bhp; the new VIN engine letters W, U, J, H and F; and ZL2 cowl induction at 3,659."
  },
  {
   "ref": "chevellestuff-1972-production",
   "title": "1972 Chevelle/Monte Carlo Production Numbers by Series/Model",
   "url": "https://www.chevellestuff.net/1972/style_prod_no.htm",
   "publisher": "ChevelleStuff",
   "sourceType": "registry",
   "reliability": "high",
   "notes": "Gives 24,946 Z15 cars for 1972, of which 5,333 carried SS 454 equipment, and notes that plant VIN data of 649,269 exceeds the tabulated total of about 631,661."
  },
  {
   "ref": "ls6-registry-body-styles",
   "title": "How many LS6s, based on body style, were sold?",
   "url": "http://ls6registry.com/tech/models_sold.htm",
   "publisher": "LS6 Registry",
   "sourceType": "registry",
   "reliability": "medium",
   "notes": "The registry's statement that Chevrolet's option-level records were destroyed, a proportional calculation of about 3,387 coupes, 103 convertibles and 585 sedan pickups expressly labelled as computed rather than factual, a claim of at least 50 LS6 convertibles made for Briggs Chevrolet against a suggestion of 17, and a warning that 'one of xx' claims commonly lack basis."
  },
  {
   "ref": "chevyworld-ls5-ls6-production",
   "title": "LS5/LS6 Production Numbers",
   "url": "https://macswebs.com/chevyworld/chevelle/ls5_prod_numbers.html",
   "publisher": "ChevyWorld",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Chevelle LS5 counts of 4,298 (1970), 9,502 (1971) and 5,333 (1972) and LS6 4,475 for 1970 at $263.30 over the base Z15 engine. States the LS6 was a 1970-only Chevelle option and that some pre-production 1971 Chevelles were built with it but none reported sold to the public."
  },
  {
   "ref": "hagerty-buyers-guide",
   "title": "Your definitive 1968-72 Chevelle SS buyer's guide",
   "url": "https://www.hagerty.com/media/buying-and-selling/definitive-1968-72-chevelle-ss-buyers-guide/",
   "publisher": "Hagerty Media",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Year-by-year package changes; 1968 SS production of 62,785 and 1969 Z25 of 86,307; a summary of just under 192,000 SS cars for 1968-1972 alongside year figures that sum higher; VIN and Fisher tag identification limits and the Oshawa exception; the rust pattern from the rear window into the boot; cloned cars and cloned paperwork; and a specialist's view that the drivetrains have no inherent fault beyond period gaskets."
  },
  {
   "ref": "hagerty-big-block-market",
   "title": "The last great big-block Chevelles won't be forgotten",
   "url": "https://www.hagerty.com/media/market-trends/hagerty-insider/the-last-great-big-block-chevelles-wont-be-forgotten/",
   "publisher": "Hagerty Media",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Establishes that GM lifted its ban on engines above 400 cu in in intermediate cars for 1970, the LS6's $263 premium and forged internals, fewer than 9,000 SS 454s for 1970, a roughly 15 per cent four-speed premium, and that LS6 cars recovered pre-2008 values fastest."
  },
  {
   "ref": "wikipedia-chevelle",
   "title": "Chevrolet Chevelle",
   "url": "https://en.wikipedia.org/wiki/Chevrolet_Chevelle",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "The 1968 two-wheelbase redesign and the SS 396 as its own series with 60,499 coupes, 2,286 convertibles and 5,190 El Caminos; the 1970 Z25/Z15 split; the LS6 at 450 bhp gross with an 800 cfm Holley and 4,475 built; the 1971 move to paired gross and net ratings; and that no official records show any 1971 Chevelle assembled with the LS6."
  },
  {
   "ref": "overdrive-1970-factsheet",
   "title": "1970 Chevrolet Mid-Size Cars Fact Sheet",
   "url": "https://over-drive-magazine.com/2024/02/23/1970-chevrolet-mid-size-cars-fact-sheet/",
   "publisher": "Over-Drive Magazine",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Reprints the factory 1970 engine table: L34 402 at 350 bhp and 415 lb-ft, L78 402 at 375 bhp on 11.0:1, LS3 402 at 330 bhp, LS5 454 at 360 bhp and 500 lb-ft, LS6 454 at 450 bhp at 5,600 rpm and 500 lb-ft at 3,600 on 11.25:1, plus package prices and LS6 axle ratios."
  },
  {
   "ref": "overdrive-1971-factsheet",
   "title": "1971 Chevrolet Mid-Size Cars Fact Sheet",
   "url": "https://over-drive-magazine.com/2024/05/16/1971-chevrolet-mid-size-cars-fact-sheet/",
   "publisher": "Over-Drive Magazine",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Reprints the 1971 factory table with compression at 8.5:1 across the range and the LS5 454 at 365 bhp and 465 lb-ft. Also lists an LS6 454 at 425 bhp and 475 lb-ft in the SS package at about $720 - the catalogued 1971 LS6 that other sources say was never built."
  },
  {
   "ref": "oldcars-1971-chevelle-ss",
   "title": "Car of the Week: 1971 Chevrolet Chevelle SS",
   "url": "https://www.oldcarsweekly.com/features/car-of-the-week-1971-chevrolet-chevelle-ss",
   "publisher": "Old Cars Weekly",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "The 1971 Z15 package at $357 with its equipment list, LS5 at 285 net / 365 gross and LS6 at 325 net / 425 gross, Chevrolet's move to publishing both figures, and approximately 80,000 cars with the SS option in 1971 of which 19,292 had 454s - figures that conflict with the registry counts."
  },
  {
   "ref": "curbside-car-life-ss396",
   "title": "Vintage Car Life Review: 1970 Chevrolet Chevelle SS396 - Bruiser With A Glass Jaw",
   "url": "https://www.curbsideclassic.com/vintage-reviews/1970s-vintage-reviews/gm-brands-1970s-vintage-reviews/vintage-car-life-review-1970-chevrolet-chevelle-ss396-bruiser-with-a-glass-jaw/",
   "publisher": "Curbside Classic",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Reprints Car Life's January 1970 test of an L34 350 bhp SS 396 with 3.31 gearing: 3,990 lb kerb weight, 58 per cent front bias, 0-60 mph in 8.1 seconds, a quarter mile of 15.5 seconds at 90.42 mph, 80-0 mph in 259 feet with fade, and heavy understeer despite the F41 package."
  },
  {
   "ref": "classic-chevelle-ss-2nd-gen",
   "title": "Chevrolet Chevelle SS - 2nd Gen Market",
   "url": "https://www.classic.com/m/chevrolet/chevelle/2nd-gen/ss/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Market data as of August 2026: benchmark $87,120 trending upward, average sale $100,381, 72 cars listed, and a tracked range from an anomalous $1 entry against a 1970 SS 454 LS5 M22 on 24 March 2026 to $209,900 for a 1970 SS 454 LS6 on 30 June 2026."
  },
  {
   "ref": "classic-mecum-ls6-convertible",
   "title": "1970 Chevrolet Chevelle SS-454/ LS6 M22 Convertible sold at Mecum Kissimmee (2026)",
   "url": "https://www.classic.com/a/mecum-kissimmee-2026-PnBl3Kp/lots/1970-chevrolet-chevelle-ss-454-ls6-m22-convertible-n85eA1W",
   "publisher": "classic.com",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Individual lot record: lot S187, VIN 136670B188926, 454 LS6 with M22 four-speed, sold for $770,000 on 17 January 2026 at Mecum Kissimmee."
  },
  {
   "ref": "motorious-ls6-record",
   "title": "1970 Chevelle LS6 Convertible Sets New Auction Record at Mecum Kissimmee",
   "url": "https://www.motorious.com/articles/news/1970-chevelle-ls6-convertible/",
   "publisher": "Motorious",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Confirms the $770,000 result included buyer's fees and was the highest price paid for a Chevelle at public sale, ahead of a $600,000 record set in May 2024, and puts roughly 3,975 of the 4,475 LS6 engines in coupes and convertibles combined, with convertible estimates from a few dozen to slightly over 100."
  },
  {
   "ref": "autoevolution-undocumented-ls6",
   "title": "1970 Chevelle SS454 LS6 Four-Speed Sells (Too) Low, Has More Questions Than Rugrats",
   "url": "https://www.autoevolution.com/news/1970-chevelle-ss454-ls6-four-speed-sells-too-low-has-more-questions-than-rugrats-255522.html",
   "publisher": "autoevolution",
   "sourceType": "journalism",
   "reliability": "low",
   "notes": "Used for the documentation discount: an LS6 whose broadcast sheet could not be produced made $87,000 against a stated band of $120,000 to over $200,000 for LS6 coupes, and a documented M22 car at $192,500 at Barrett-Jackson Palm Beach in April 2025."
  },
  {
   "ref": "protouring-rust-thread",
   "title": "71 Chevelle rust areas to look for?",
   "url": "https://www.pro-touring.com/threads/26916-71-chevelle-rust-areas-to-look-for",
   "publisher": "Pro-Touring.com",
   "sourceType": "club-forum",
   "reliability": "low",
   "notes": "Owner reports of recurring corrosion sites on a 1971 car, used only for fault patterns: trunk floor, floor pans beneath the windscreen, inner and outer wheel arches, door bottoms, rockers, quarters, rear valance and window channels."
  }
 ],
 "claims": [
  {
   "section": "history",
   "claimText": "The 1968 redesign put two-door Chevelles on a 112-inch wheelbase and four-door bodies on 116 inches and made the SS 396 a series in its own right, with 60,499 sport coupes, 2,286 convertibles and 5,190 El Caminos built; for 1969 the series was abolished and the same equipment returned as RPO Z25, an option the VIN does not record, taken by approximately 86,307 cars.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-chevelle",
    "hagerty-buyers-guide"
   ]
  },
  {
   "section": "history",
   "claimText": "General Motors lifted its self-imposed 400 cubic inch ceiling on intermediate cars for 1970, which is what let the 454 into the Chevelle, and in the same year the 396 was bored to 402 cubic inches while keeping its badge. RPO Z25 (SS 396) then cost $445.55 with the L34 350 bhp engine standard and the L78 375 bhp version available only until 30 October 1969, while RPO Z15 (SS 454) cost $503.45.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "hagerty-big-block-market",
    "wikipedia-chevelle",
    "chevellestuff-1970-ss",
    "overdrive-1970-factsheet"
   ]
  },
  {
   "section": "specs",
   "claimText": "The standard Z15 engine for 1970, the LS5 454, was rated at 360 bhp gross at 4,400 rpm and 500 lb-ft at 3,200 rpm on 10.25:1 compression; for roughly $263 more the LS6 replaced it at 450 bhp gross at 5,600 rpm and 500 lb-ft at 3,600 rpm on 11.25:1 compression, with solid lifters, forged crankshaft, rods and pistons, an aluminium intake and a Holley four-barrel.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "overdrive-1970-factsheet",
    "wikipedia-chevelle",
    "hagerty-big-block-market",
    "chevyworld-ls5-ls6-production",
    "chevellestuff-1970-ss"
   ]
  },
  {
   "section": "specs",
   "claimText": "Car Life's January 1970 test of a 350 bhp SS 396 with 3.31 gearing recorded 0-60 mph in 8.1 seconds and a standing quarter mile of 15.5 seconds at 90.42 mph from a 3,990 lb kerb weight carrying 58 per cent of its mass over the front axle, with heavy understeer and brake fade; period LS6 results are generally quoted at 13.7 to 14.0 seconds at 103 to 107 mph.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "curbside-car-life-ss396"
   ]
  },
  {
   "section": "production",
   "claimText": "No reconciled total exists for second-generation Chevelle SS production: the registry year figures sum to roughly 255,700 cars, while Hagerty's buyer's guide states just under 192,000 for the same five years, so no single figure is asserted here.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "hagerty-buyers-guide",
    "chevellestuff-1970-production",
    "chevellestuff-1971-production",
    "chevellestuff-1972-production"
   ],
   "conflictNote": "ChevelleStuff and Hagerty between them give 62,785 SS 396 cars for 1968, 86,307 Z25 cars for 1969, 53,599 Z25 plus 8,773 Z15 cars for 1970, 19,293 Z15 cars for 1971 and 24,946 for 1972, which sum to about 255,700. Hagerty's same article states that just under 192,000 SS Chevelles were built across 1968-1972. Differing treatment of El Camino explains part of the gap but not all of it, and no source consulted here resolves the difference, so productionTotal is left null."
  },
  {
   "section": "production",
   "claimText": "For 1970, 53,599 Malibu and El Camino cars carried RPO Z25 and 8,773 carried RPO Z15, the latter splitting into 4,298 LS5 and 4,475 LS6 engines, giving a Super Sport total of 62,372 for the year, with a further 3,823 Monte Carlos taking the equivalent Z20 SS 454 package.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "chevellestuff-1970-production",
    "chevyworld-ls5-ls6-production",
    "autoevolution-undocumented-ls6"
   ]
  },
  {
   "section": "production",
   "claimText": "The 4,475 total for 1970 LS6 engines is agreed across sources, but the split by body style is not recorded anywhere and every published breakdown is an estimate.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "ls6-registry-body-styles",
    "motorious-ls6-record",
    "autoevolution-undocumented-ls6"
   ],
   "conflictNote": "The LS6 Registry states that Chevrolet's option-level records were destroyed and offers a proportional calculation of about 3,387 sport coupes, 103 convertibles and 585 sedan pickups, describing it explicitly as a computed possibility. Motorious puts roughly 3,975 coupes and convertibles together, implying about 500 El Caminos, and gives convertible estimates from a few dozen to slightly over 100. The registry separately records a claim of at least 50 LS6 convertibles made for Briggs Chevrolet against a suggestion that 17 were built. These cannot be resolved from any source consulted here."
  },
  {
   "section": "production",
   "claimText": "The LS6 was catalogued for the 1971 Chevelle at 425 bhp gross and 325 bhp net but sources disagree over whether any Chevelle was actually built with it.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "chevellestuff-1971-ss",
    "wikipedia-chevelle",
    "chevyworld-ls5-ls6-production",
    "oldcars-1971-chevelle-ss",
    "overdrive-1971-factsheet"
   ],
   "conflictNote": "The 1971 factory fact sheet reprinted by Over-Drive Magazine lists an LS6 454 at 425 bhp and 475 lb-ft in the SS package, and Old Cars Weekly presents it as an available 1971 engine at 325 net and 425 gross. ChevelleStuff states it was dropped with no price ever published and never reached Chevelle production; Wikipedia states no official records indicate any 1971 Chevelle was assembled with it; ChevyWorld states some pre-production 1971 Chevelles were built with the engine but none were reported sold to the public. The question is not resolved by any source consulted here."
  },
  {
   "section": "production",
   "claimText": "Published counts of how many 1971 Chevelles carried the SS option and how many of those had the 454 do not agree.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "chevellestuff-1971-production",
    "oldcars-1971-chevelle-ss"
   ],
   "conflictNote": "ChevelleStuff's production tables state that 19,293 Malibu and El Camino Custom cars carried RPO Z15 in 1971 and that 9,502 of those were SS 454s. Old Cars Weekly states that approximately 80,000 cars carried the SS option in 1971 with 19,292 of them fitted with 454s - close to ChevelleStuff's figure for the whole Z15 run rather than for the 454 cars within it. No source consulted here reconciles the two, so neither is presented as settled."
  },
  {
   "section": "specs",
   "claimText": "From 1971 General Motors required its engines to run on low-lead or unleaded fuel, compression fell to 8.5:1 or below across the Chevelle range, and Chevrolet began publishing SAE net figures alongside gross ratings, with the LS5 quoted at 365 bhp gross and 285 bhp net and the 402 at 300 gross and 260 net. Z15 itself became an equipment package of about $357 orderable with any of the four optional V8s, so a genuine 1971 SS may carry a 350.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-chevelle",
    "overdrive-1971-factsheet",
    "oldcars-1971-chevelle-ss",
    "chevellestuff-1971-ss"
   ]
  },
  {
   "section": "specs",
   "claimText": "For 1972 Chevrolet dropped gross ratings entirely, quoting 165 and 175 bhp SAE net for the two 350s, 240 bhp for the 402 and 270 bhp for the LS5 454; 24,946 cars took RPO Z15 that year, of which 5,333 had SS 454 equipment, and it was the last year cowl induction was available on the 454.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "chevellestuff-1972-ss",
    "chevellestuff-1972-production",
    "wikipedia-chevelle"
   ]
  },
  {
   "section": "problems",
   "claimText": "A 1969, 1970 or 1971 Chevelle SS cannot be authenticated from the VIN or, outside Oshawa-built cars, from the Fisher body tag, because the SS was an option code rather than a series; from 1972 the VIN carries an engine letter, with the 454 code W available only alongside the Z15 package. Chevelle club officials report that cloned paperwork now circulates with cloned cars and that 'one of X' rarity claims routinely fail to match what the clubs and registries have recorded.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "hagerty-buyers-guide",
    "chevellestuff-1972-ss",
    "chevellestuff-1971-ss",
    "ls6-registry-body-styles",
    "autoevolution-undocumented-ls6"
   ]
  },
  {
   "section": "problems",
   "claimText": "Corrosion follows a consistent pattern on these cars: the base of the rear window, which drains into the boot and rots the parcel shelf and boot floor, then the quarter panels behind the rear wheels, door bottoms, front wing bottoms, floor pans under the windscreen, inner and outer wheel arches and the rear valance, with vinyl-roofed cars trapping moisture beneath the covering and convertibles rotting in the inner rockers.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "hagerty-buyers-guide",
    "protouring-rust-thread"
   ]
  },
  {
   "section": "market",
   "claimText": "As of August 2026 classic.com records a benchmark of $87,120 for the second-generation Chevelle SS on a rising trend with an average recorded sale of $100,381, tracked results reaching $209,900 for a 1970 SS 454 LS6 on 30 June 2026, and the same benchmark for 1971 cars specifically with a high of $134,700 on 21 July 2026.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-chevelle-ss-2nd-gen"
   ]
  },
  {
   "section": "market",
   "claimText": "A numbers-matching 1970 SS 454 LS6 M22 convertible, chassis 136670B188926, sold for $770,000 including buyer's premium as lot S187 at Mecum Kissimmee on 17 January 2026, the highest price paid for any Chevelle at public sale and ahead of the previous record of $600,000 set in May 2024.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-mecum-ls6-convertible",
    "motorious-ls6-record"
   ]
  },
  {
   "section": "market",
   "claimText": "Documentation rather than specification separates LS6 prices: a documented M22 car made $192,500 at Barrett-Jackson Palm Beach in April 2025 against a reported band of $120,000 to over $200,000 for documented coupes, while an example whose broadcast sheet could not be produced made $87,000; a four-speed carries roughly a 15 per cent premium over an equivalent automatic.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "autoevolution-undocumented-ls6",
    "hagerty-big-block-market"
   ]
  }
 ]
};
