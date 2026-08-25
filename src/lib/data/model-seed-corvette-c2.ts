/**
 * Researched model draft — Chevrolet Corvette C2 Sting Ray (1963-1967).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedCorvetteC2 = {
 "slug": "chevrolet/corvette-c2",
 "make": "Chevrolet",
 "model": "Corvette",
 "generation": "C2 Sting Ray",
 "generationCode": "C2",
 "trim": null,
 "yearStart": 1963,
 "yearEnd": 1967,
 "bodyStyles": [
  "2-door Sport Coupe (split rear window 1963 only, one-piece rear glass 1964-1967)",
  "2-door Convertible (RPO C07 auxiliary hardtop optional)"
 ],
 "engines": [
  "327 cu in (5.4L) small-block V8, base: 250 bhp at 4,400 rpm, 350 lb-ft at 2,800 rpm, 10.5:1",
  "327 cu in L75, 300 bhp at 5,000 rpm, 360 lb-ft at 3,200 rpm, 10.5:1 (base engine from 1966)",
  "327 cu in L76 solid-lifter, 340 bhp at 6,000 rpm on 11.25:1 (1963), 365 bhp for 1964-1965",
  "327 cu in L84, Rochester Ramjet mechanical injection, 360 bhp and 352 lb-ft at 4,000 rpm (1963), 375 bhp for 1964-1965",
  "327 cu in L79 hydraulic-lifter, 350 bhp on 11:1 (1965-1967)",
  "396 cu in (6.5L) L78 Mark IV big-block, 425 bhp, solid lifters, 11:1 (mid-1965 only)",
  "427 cu in (7.0L) L36 Mark IV, 390 bhp (1966-1967)",
  "427 cu in L72 Mark IV, 425 bhp (1966)",
  "427 cu in L68, 400 bhp with three two-barrel carburettors (1967)",
  "427 cu in L71, 435 bhp (1967); RPO L89 added aluminium heads, 16 cars",
  "427 cu in L88, aluminium heads, 12.5:1, single 850 cfm Holley, rated 430 bhp at 5,200 rpm (1967)"
 ],
 "productionTotal": 117964,
 "productionNotes": "Every source consulted that states a generation total gives 117,964 cars, and the body-style split of 45,546 coupes to 72,418 convertibles published by CorvSport reconciles exactly with the model-year tables at Corvette Action Center: coupes 10,594 / 8,304 / 8,186 / 9,958 / 8,504 and convertibles 10,919 / 13,925 / 15,376 / 17,762 / 14,436 for 1963 to 1967. Two model-year rows are nonetheless contested. For 1965, Corvette Action Center, Wikipedia and the LSX Magazine buyer's guide give 23,562 (8,186 coupes, 15,376 convertibles), while CorvSport gives 23,564 with 15,378 convertibles and a VIN range ending 123564, adding that two cars were built after production officially closed. For 1963, CorvSport lists 10,396 coupes and 10,918 convertibles, which sum to 21,314 rather than the 21,513 the same page states as the year total, while Corvette Action Center, Vette Vues and Wikipedia all give 10,594 and 10,919. Option counts are far better documented than the totals: L84 fuel injection ran 2,610 cars in 1963, 1,325 in 1964 and 771 in 1965; RPO Z06 took 199 buyers, 63 of them with the N03 36.5-gallon tank; the L78 396 accounted for 2,157 cars in its part-year 1965 run; and 1967 closed the generation with 3,832 L36, 2,101 L68, 3,754 L71, 16 L89 and 20 L88 cars.",
 "notableTrims": [
  {
   "name": "1963 Sport Coupe 'split-window'",
   "note": "Fitted for one model year only, on all 10,594 coupes built for 1963. Period reviewers disliked the blind spot and Chevrolet sold one-piece replacement glass through dealers, so an unmolested split screen is a documentation question."
  },
  {
   "name": "RPO Z06 Special Performance Equipment (1963)",
   "note": "199 built, coupe only, and only with the L84 engine, a four-speed and Positraction. Sintered-metallic Al-Fin drum brakes, dual master cylinder, stiffer springs, larger front bar. 63 of the 199 also took the N03 36.5-gallon tank."
  },
  {
   "name": "L84 Rochester Ramjet fuel injection (1963-1965)",
   "note": "360 bhp in 1963, 375 bhp for 1964-1965. Take-up collapsed once the big-block arrived: 2,610 cars, then 1,325, then 771. Chevrolet dropped injection after 1965 and did not fit it again for twenty years."
  },
  {
   "name": "L71 427/435 with L89 aluminium heads (1967)",
   "note": "The 1967 range-topper short of the L88, at 435 bhp and 3,754 cars for $437.10. Only 16 buyers added the L89 aluminium heads at $368.65, which makes a genuine L71/L89 car one of the rarest street combinations of the generation."
  },
  {
   "name": "L88 427 (1967)",
   "note": "Twenty cars, in production from February 1967. Aluminium heads, 12.5:1 compression, a single 850 cfm Holley; mandatory M22 gearbox, J56 brakes, F41 suspension, K66 ignition and C48 heater delete. Rated 430 bhp, which nobody believed."
  },
  {
   "name": "Grand Sport (1963)",
   "note": "The competition Corvette Duntov could not get built. 125 were planned; GM's racing prohibition stopped the programme at five cars, three coupes and two roadsters, roughly a thousand pounds under a production Sting Ray."
  }
 ],
 "specs": {
  "layout": "Front engine, rear-wheel drive",
  "chassis": "Ladder frame with a welded steel 'birdcage' cockpit structure under bonded fibreglass panels",
  "suspension": "Independent front suspension with coil springs; independent rear located by trailing arms - the first IRS on a Corvette, and the change period testers credited for the traction gain",
  "engine": "327 cu in small-block V8 throughout; 396 cu in Mark IV from mid-1965; 427 cu in Mark IV from 1966",
  "bore_stroke": "4.00 in x 3.25 in (327 cu in)",
  "compression": "10.5:1 base and L75; 11.25:1 for L76 and L84 in 1963; 12.5:1 for the 1967 L88",
  "power": "250 bhp at 4,400 rpm base in 1963, rising to a rated 435 bhp for the 1967 L71 and a nominal 430 bhp at 5,200 rpm for the L88, a rating widely held to be deliberately understated",
  "torque": "350 lb-ft at 2,800 rpm base in 1963; 352 lb-ft at 4,000 rpm for the L84 fuel-injected 327",
  "fuel_system": "Four-barrel carburettor; Rochester Ramjet mechanical injection on L84 cars 1963-1965; a 427 with three two-barrel carburettors new for 1967",
  "transmission": "3-speed manual standard; M20 four-speed optional and taken by most buyers; M22 heavy-duty close-ratio four-speed from 1967; Powerglide automatic optional",
  "brakes": "11 in drums all round 1963-1964 with sintered-metallic and Al-Fin options; four-wheel discs standard from 1965, with a $64.50 drum credit taken by 316 cars",
  "weight": "3,048 lb curb for the 1963 coupe and 3,030 lb for the convertible per Corvette Action Center; GM's heritage record lists 2,859 lb, which reads as a shipping figure",
  "dimensions": "98.0 in wheelbase, 175.3 in long, 69.6 in wide, 49.8 in high; track 56.3/57.0 in",
  "fuel_capacity": "20.0 US gallons standard; 36.5-gallon RPO N03 fibreglass tank optional on coupes",
  "acceleration": "0-60 mph in 6.0 sec and 0-100 mph in 14.3 sec for a 360 bhp car tested by Motor Sport, April 1964; Road & Track recorded 6.3 sec for a 1965 L84 and 5.7 sec for a 1965 L78 396",
  "assembly": "St. Louis, Missouri"
 },
 "summary": "The second-generation Corvette (1963-1967) replaced the C1's leaf-sprung live axle with an independent rear end on a shorter 98-inch wheelbase, and added a closed coupe to the range for the first time. Bill Mitchell's Sting Ray body carried a divided rear screen for 1963 only; period reviewers disliked the blind spot it created and it was gone by 1964, which is why that one detail now separates the most valuable ordinary C2 from the rest. Chevrolet built 117,964 cars across five model years, 72,418 of them convertibles. The engine bay moved from Rochester-injected 327 small-blocks to Mark IV big-blocks: 396 cubic inches from mid-1965, 427 from 1966, and from February 1967 the L88, twenty cars with aluminium heads and no heater. Four-wheel disc brakes became standard for 1965 and mechanical fuel injection was dropped at the end of the same year. It is the shortest Corvette generation, and the one where the option sheet rather than the model year decides what a car is worth.",
 "history": "## A New Chassis Under a Show Car Body\nThe C2 was the first complete redesign of the Corvette since 1953, and General Motors' own heritage record frames it that way: a new chassis, an independent rear suspension, and the first coupe body the model line had ever been given. The wheelbase came down to 98.0 inches and the frame gained a welded steel 'birdcage' around the cockpit beneath bonded fibreglass panels. The independent rear end, with trailing arms locating the wheels, was the substantive change, and contemporary judgement was that traction and handling had moved on decisively from the live-axle cars. Bill Mitchell had driven the styling from his own Stingray racer; Zora Arkus-Duntov drove the engineering, and the two men did not agree about the roof.\n\n## The Window That Lasted One Year\nMitchell wanted the coupe's rear screen divided by a body-colour spine running the length of the deck. Duntov objected that it blocked the view, and much of the press agreed once cars reached the road. Mitchell relented for 1964, and a single piece of glass has been fitted to every Corvette coupe since. Chevrolet went further and sold conversion glass through its dealers, so a proportion of the 10,594 split-window coupes built were quietly modernised by their first or second owners. The market has since reversed that judgement hard enough that unpicking a 1960s conversion is now routine restoration work.\n\n## Fuel Injection, Then Cubic Inches\nThe 1963 range was four versions of the 327 small-block: 250 and 300 bhp on hydraulic lifters, a 340 bhp solid-lifter L76, and the L84 with Rochester Ramjet mechanical fuel injection at 360 bhp for $430.40. Injection was the halo option and 2,610 buyers took it. Then the Mark IV big-block arrived part-way through 1965 - 396 cubic inches, 425 bhp, and cheaper than the fuelie at $292.70 against $538.00. L84 sales fell to 1,325 in 1964 and 771 in 1965, and Chevrolet dropped injection at the end of that year; it did not return to a Corvette for twenty. The 427 replaced the 396 for 1966 in mild 390 bhp L36 and hard-edged 425 bhp L72 form, and for 1967 a 427 with three two-barrel carburettors joined the range.\n\n## Racing by Option Code\nGeneral Motors had signed up to the AMA's 1957 withdrawal from motorsport, so Duntov sold competition equipment as option codes instead. RPO Z06 for 1963 bundled sintered-metallic Al-Fin brakes, a dual master cylinder, stiffer springs and a larger front bar, available only on a fuel-injected four-speed coupe with Positraction; 199 people bought it and 63 of those added the 36.5-gallon tank. The Grand Sport was the unsanctioned version of the same idea: a lightweight competition Corvette, roughly a thousand pounds under a production Sting Ray, with an intended run of 125 cars for homologation. GM stopped it at five, and those three coupes and two roadsters beat the Cobras at Nassau in December 1963.\n\n## The Last Year, and the L88\nThe C2 ran a fifth season before the C3 arrived, and 1967 gave the generation both its widest engine list and its smallest: 22,940 cars, four 427 codes on the order sheet, and cast aluminium wheels that had been knock-offs in 1966 now sold as bolt-ons. In February 1967 Chevrolet released the L88 - aluminium heads, 12.5:1 compression, a single 850 cfm Holley, a mandatory heavy-duty gearbox, brakes, suspension and ignition, a compulsory heater delete and no radio or air conditioning available at all. It was rated at 430 bhp, a number the factory chose rather than measured. Twenty were built, at $947.90 on a $4,240.75 convertible.",
 "marketNotes": "As of August 2026, classic.com records an average sale price of $131,977 across the whole C2 market with 284 cars listed for sale - a deep, liquid market by classic-car standards. The spread within it is what matters. The base 327/250 carries a market benchmark of $86,035 and the L75 327/300 $89,592, the realistic entry point; the L79 327/350 sits at $85,009 and the 427/425 L72 at $112,351. Above that the injected cars and the rare option codes separate out, with the L84 327/360 at $191,483 and the 1967 L71 427/435 at $169,579. The 1963 Z06 is its own market: a $622,770 benchmark on a rising trend against a $559,478 average, with a recorded high of $1,100,000 at Barrett-Jackson in January 2026 and a low of $235,000 in April 2023. The L88 benchmark is $1,394,859 against an average of $1,855,840, with nothing listed for sale; the most recent L88 datum classic.com records is a $2,700,000 high bid at Mecum Kissimmee on 17 January 2026 that did not meet reserve. Figures quoted here are advertised sale totals inclusive of buyer's premium.",
 "whatToLookFor": "The structure is steel and it is hidden. The birdcage - the welded cage around the screen and door hinges - rots from the inside at the base of the windscreen pillars, where nothing above it can rust because the panels are fibreglass. Owners on CorvetteForum name the rear frame kick-ups behind the seats, the gussets by the number three body mount and the transmission crossmember as the areas that fail structurally, and note that corrosion works outward from inside the section, so surface appearance understates it. Insist on a lift, a torch and a wire brush on anything that looks scaled. On the body, a smooth, over-finished inner surface where a fibreglass bonding strip should be is evidence of accident repair. On paperwork: verify the VIN, trim tag and stamped engine pad before believing any claim about an L84, L78, L72, L71 or L88 car, because the price difference between a genuine one and a tribute is a large multiple of the cost of fitting the correct engine. The NCRS Historic Document Service supplies a shipping data report for 1962-1975 cars at $50, giving dealer code, dealer name and address and the production date - but explicitly not the option list.",
 "commonProblems": "Frame and birdcage corrosion is the defining structural fault and the only one that writes a car off economically; the rear kick-ups, the number three body mount area and the base of the windscreen pillars are where it is found, and none of it is visible without a lift. Fibreglass stress cracking around the screen surround, arch lips and panel cut-outs is near-universal, and is routinely buried under fresh paint along with poor bonding-strip repairs. The four-wheel disc brakes fitted from 1965 corrode internally in lines and calipers to the point that a stainless replacement industry grew up around them. The Rochester Ramjet unit on L84 cars is the other specialist liability: a mechanical injection system that fell out of general workshop knowledge for decades, so correct rebuilding is small-specialist work. Period testers already complained that the sintered-metallic linings needed warming and would grab if used cold. The most expensive fault is documentary: an undocumented car sold on a claimed rare engine code.",
 "valueTrajectory": "The C2 became blue-chip long before most of its contemporaries, and the movement since has been about widening gaps rather than a rising tide. As of August 2026 the classic.com benchmarks describe a market stretched across more than an order of magnitude: base-engine cars in the mid-to-high $80,000s, the L72 427/425 at $112,351, the fuel-injected L84 at $191,483, the 1963 Z06 at $622,770 on a rising trend and the L88 at $1,394,859 with nothing at all listed for sale. The generation average of $131,977 sits well above the volume cars because the top of the range drags it there. Two forces set the shape. The floor is held down by a very large surviving population of carburetted convertibles - 72,418 were built, and 284 C2s were listed for sale on a single day in August 2026 - which caps what an ordinary good car can do. The ceiling is set by counts that cannot change: 199 Z06s, 20 L88s, five Grand Sports. Documentation is doing almost all of the work at the top and very little at the bottom.",
 "overallConfidence": "high",
 "sources": [
  {
   "ref": "gm-heritage-1963",
   "title": "1963 Chevrolet Corvette Sting Ray",
   "url": "https://www.gm.com/heritage/collection/chevrolet/1963-chevrolet-corvette",
   "publisher": "General Motors",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "First full restyle since 1953, first Corvette coupe, new chassis with IRS, split window a one-year feature. 98.0 in wheelbase, 2,859 lb, '360 hp @ 5,000 rpm'."
  },
  {
   "ref": "wikipedia-c2",
   "title": "Chevrolet Corvette (C2)",
   "url": "https://en.wikipedia.org/wiki/Chevrolet_Corvette_(C2)",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Year totals 21,513 / 22,229 / 23,562 / 27,720 / 22,940; 1963 split 10,594 to 10,919; 771 injected cars in 1965; 199 Z06; 20 L88 buyers; five Grand Sports; Shinoda under Mitchell."
  },
  {
   "ref": "corvsport-c2-production",
   "title": "C2 Corvette Production Figures",
   "url": "https://www.corvsport.com/c2-corvette-production-figures/",
   "publisher": "CorvSport",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "States 117,964 C2 Corvettes over five model years, split 72,418 convertibles to 45,546 coupes. The year-by-year table sits behind a paywall."
  },
  {
   "ref": "corvsport-1963",
   "title": "The 1963 Corvette Guide: History, Performance, & More",
   "url": "https://www.corvsport.com/1963-c2-corvette/",
   "publisher": "CorvSport",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "States 21,513 total but 10,396 coupes and 10,918 convertibles, which do not sum to it. Z06 $1,818.45; L84 360 hp at 6,400 rpm; the Mitchell-Duntov window row."
  },
  {
   "ref": "corvsport-1965",
   "title": "1965 Chevrolet Corvette: History, Performance, & More",
   "url": "https://www.corvsport.com/1965-c2-corvette/",
   "publisher": "CorvSport",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Gives 23,564 for 1965 with 15,378 convertibles, VIN range ending 123564, two cars built after production closed. Discs standard, $64.50 drum credit on 316 cars."
  },
  {
   "ref": "cac-1963-production",
   "title": "1963 Corvette Production Numbers and Performance Numbers",
   "url": "https://www.corvetteactioncenter.com/specs/c2/1963/63prod.html",
   "publisher": "Corvette Action Center",
   "sourceType": "specialist",
   "reliability": "high",
   "notes": "21,513 total, 10,594 coupes, 10,919 convertibles; L75 8,033, L76 6,978, L84 2,610 at $430.40; Z06 199 at $1,818.45; N03 63 at $202.30."
  },
  {
   "ref": "cac-1963-specs",
   "title": "1963 Corvette Specifications",
   "url": "https://www.corvetteactioncenter.com/specs/c2/1963/63specs.html",
   "publisher": "Corvette Action Center",
   "sourceType": "specialist",
   "reliability": "high",
   "notes": "98.0 in wheelbase, 175.3 x 69.6 x 49.8 in, track 56.3/57.0 in, curb 3,048 lb coupe and 3,030 lb convertible, 20.0 gal, bore 4.00 x stroke 3.25 in. L84 360 bhp at 6,000 rpm, 352 lb-ft."
  },
  {
   "ref": "cac-1964-production",
   "title": "1964 Corvette Production Numbers and Performance Numbers",
   "url": "https://www.corvetteactioncenter.com/specs/c2/1964/64prod.html",
   "publisher": "Corvette Action Center",
   "sourceType": "specialist",
   "reliability": "high",
   "notes": "22,229 total, 8,304 coupes and 13,925 convertibles. L75 10,471, L76 7,171, L84 1,325 at $538; J56 heavy-duty brakes only 29 cars."
  },
  {
   "ref": "cac-1965-production",
   "title": "1965 Corvette Production Numbers and Performance Numbers",
   "url": "https://www.corvetteactioncenter.com/specs/c2/1965/65prod.html",
   "publisher": "Corvette Action Center",
   "sourceType": "specialist",
   "reliability": "high",
   "notes": "8,186 coupes, 15,376 convertibles, 23,562 total. L84 771 at $538.00, L78 2,157 at $292.70; drum credit on 316 cars. Road & Track: L84 0-60 in 6.3 sec."
  },
  {
   "ref": "cac-1966-production",
   "title": "1966 Corvette Production Numbers and Performance Numbers",
   "url": "https://www.corvetteactioncenter.com/specs/c2/1966/66prod.html",
   "publisher": "Corvette Action Center",
   "sourceType": "specialist",
   "reliability": "high",
   "notes": "9,958 coupes, 17,762 convertibles, 27,720 total. L36 427/390 5,116; F41 2,705; J56 382; Positraction 24,056."
  },
  {
   "ref": "cac-1967-production",
   "title": "1967 Corvette Production Numbers and Performance Numbers",
   "url": "https://www.corvetteactioncenter.com/specs/c2/1967/67prod.html",
   "publisher": "Corvette Action Center",
   "sourceType": "specialist",
   "reliability": "high",
   "notes": "8,504 coupes, 14,436 convertibles, 22,940 total, credited to Antonick's Corvette Black Book. L36 3,832, L68 2,101, L71 3,754, L79 6,375, L88 20, L89 16."
  },
  {
   "ref": "cac-l88-production",
   "title": "1967 - 1969 L88 Corvette Options and Production Numbers",
   "url": "https://www.corvetteactioncenter.com/specs/l88/l88prod.html",
   "publisher": "Corvette Action Center",
   "sourceType": "specialist",
   "reliability": "high",
   "notes": "L88 output 20 in 1967, 80 in 1968, 116 in 1969. Entered production February 1967; all twenty 1967 cars carried C48, F41, G81, J50, J56, K66 and M22."
  },
  {
   "ref": "vettevues-1963-brochure",
   "title": "1963 Corvette Sales Brochure: Split-Window Sting Ray Production, Options & Prices",
   "url": "https://vette-vues.com/1963-corvette-brochure/",
   "publisher": "Vette Vues Magazine",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "States 21,513 built for 1963: 10,594 split-window coupes and 10,919 convertibles. Independent corroboration of the split against CorvSport's differing figures."
  },
  {
   "ref": "vettevues-l88",
   "title": "What Is an L88 Corvette? Specs, Production, Value & History",
   "url": "https://vette-vues.com/l88-corvettes/",
   "publisher": "Vette Vues Magazine",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "12.5:1 compression, aluminium heads, solid-lifter camshaft, 850 cfm Holley, rated 430 hp at 5,200 rpm, estimated 500-560 hp on the dyno."
  },
  {
   "ref": "motorsport-1964-test",
   "title": "Road Test - Chevrolet Corvette Sting Ray, April 1964",
   "url": "https://www.motorsportmagazine.com/archive/article/april-1964/37/road-test/",
   "publisher": "Motor Sport",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Period British test of a 360 bhp car: 0-60 in 6.0 sec, 0-100 in 14.3 sec, quarter 14.0 sec at 98 mph. Criticises the ride and cold-brake grab."
  },
  {
   "ref": "classic-c2",
   "title": "Chevrolet Corvette - C2 Market",
   "url": "https://www.classic.com/m/chevrolet/corvette/c2/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "August 2026: average sale $131,977, 284 for sale. Benchmarks 327/250 $86,035, L75 $89,592, L79 $85,009, L72 $112,351, L36 $114,527, L84 $191,483, L71 $169,579."
  },
  {
   "ref": "classic-c2-z06",
   "title": "Chevrolet Corvette Z06 327/360 - C2 Market",
   "url": "https://www.classic.com/m/chevrolet/corvette/c2/327360-z06/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "August 2026: benchmark $622,770 trending up, average $559,478. High $1,100,000 at Barrett-Jackson 24 January 2026; low $235,000 on 14 April 2023."
  },
  {
   "ref": "classic-c2-l88",
   "title": "Chevrolet Corvette L88 (427/430) - C2 Market",
   "url": "https://www.classic.com/m/chevrolet/corvette/c2/427430-l88/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "August 2026: benchmark $1,394,859 falling, average $1,855,840, none listed. Records a $2,700,000 high bid at Mecum Kissimmee on 17 January 2026 that did not sell."
  },
  {
   "ref": "rm-am22-z06",
   "title": "1963 Chevrolet Corvette Sting Ray Z06 Coupe, Amelia Island 2022",
   "url": "https://rmsothebys.com/auctions/am22/lots/r0010-1963-chevrolet-corvette-sting-ray-z06-coupe/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold $423,000 at Amelia Island 2022. Chassis 30837S109268, one of 199 Z06s, NCRS Top Flight and Bloomington Gold. This catalogue states the Z06 option cost $1,293.35."
  },
  {
   "ref": "rm-az20-z06-tank",
   "title": "1963 Chevrolet Corvette Sting Ray Z06 'Big Tank' Coupe, Arizona 2020",
   "url": "https://rmsothebys.com/auctions/az20/lots/r0114-1963-chevrolet-corvette-sting-ray-z06-big-tank-splitwindow-coupe/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Chassis 30837S114083, not sold against a $500,000-$600,000 estimate. 199 Z06 cars, 63 with the $202.30 N03 tank, Z06 price $1,818.45."
  },
  {
   "ref": "rm-mo26-grandsport",
   "title": "1963 Chevrolet Corvette Grand Sport, The Monterey Auction 2026",
   "url": "https://rmsothebys.com/auctions/mo26/lots/r0081-1963-chevrolet-corvette-grand-sport/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Chassis 30837X100003 sold $18,705,000 at the Monterey Auction 2026 - one of five, first of three coupes. Roughly 3,200 lb standard against roughly 1,900 lb for the Grand Sport."
  },
  {
   "ref": "revs-grandsport",
   "title": "1963 Chevrolet Corvette Grand Sport Coupe",
   "url": "https://revsinstitute.org/vehicle/1963-chevrolet-corvette-grand-sport",
   "publisher": "Revs Institute",
   "sourceType": "specialist",
   "reliability": "high",
   "notes": "The programme intended 125 cars; five existed when the racing ban ended it at year-end 1962. Quotes 2,150 lb and a 377 cu in V8 at 485 hp."
  },
  {
   "ref": "ncrs-hds",
   "title": "Historic Document Service",
   "url": "https://www.ncrs.org/services/historic-document-service.php",
   "publisher": "National Corvette Restorers Society",
   "sourceType": "registry",
   "reliability": "high",
   "notes": "Shipping Data Reports cover 1962 after number 6000 through 1975, giving dealer code and zone, dealer name and address where available, and the production date - not the options."
  },
  {
   "ref": "lsxmag-c2-guide",
   "title": "The Corvette Online C2 Buyer's Guide",
   "url": "https://www.lsxmag.com/features/buyer-guides/the-corvette-online-c2-buyers-guide/",
   "publisher": "LSX Magazine",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Birdcage substructure and windscreen post bases, trailing-arm attachment at the frame kick-up, bonding strips as accident evidence, 1965-on disc brake corrosion. Gives 1965 as 23,562."
  },
  {
   "ref": "corvetteforum-c2-frame",
   "title": "C2 Frame rust",
   "url": "https://www.corvetteforum.com/forums/c1-and-c2-corvettes/4784804-frame-rust.html",
   "publisher": "CorvetteForum",
   "sourceType": "club-forum",
   "reliability": "low",
   "notes": "Owner reports used for fault pattern, never figures: rot at the rear frame kick-up welds, the gussets by the number three body mount, corrosion from inside out."
  }
 ],
 "claims": [
  {
   "section": "production",
   "claimText": "Chevrolet built 117,964 second-generation Corvettes across the 1963 to 1967 model years, comprising 45,546 coupes and 72,418 convertibles.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["corvsport-c2-production", "wikipedia-c2", "cac-1963-production", "cac-1964-production", "cac-1965-production", "cac-1966-production", "cac-1967-production"]
  },
  {
   "section": "production",
   "claimText": "The 1965 model-year total is given as either 23,562 or 23,564 cars depending on the source, a two-car difference in the convertible column.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["cac-1965-production", "corvsport-1965", "wikipedia-c2", "lsxmag-c2-guide"],
   "conflictNote": "Corvette Action Center states 8,186 coupes and 15,376 convertibles for 23,562; Wikipedia and LSX Magazine agree. CorvSport states 15,378 convertibles for 23,564, cites a VIN range ending 123564, and notes two cars built after production closed. Not resolved by any source consulted here."
  },
  {
   "section": "production",
   "claimText": "The 1963 model year produced 21,513 cars, split 10,594 coupes to 10,919 convertibles.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["cac-1963-production", "vettevues-1963-brochure", "wikipedia-c2", "corvsport-1963"],
   "conflictNote": "Corvette Action Center, Vette Vues and Wikipedia all give 10,594 coupes and 10,919 convertibles, summing to the agreed 21,513. CorvSport gives 10,396 and 10,918, summing to 21,314 and contradicting the total on its own page. Not resolved by any source consulted here."
  },
  {
   "section": "history",
   "claimText": "The divided rear screen was fitted to 1963 coupes only. Mitchell championed it over Duntov's objection that it obstructed the view, the press agreed with Duntov, and one-piece glass was adopted for 1964 and every coupe since; Chevrolet also sold replacement glass through its dealers.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["corvsport-1963", "gm-heritage-1963", "rm-az20-z06-tank", "vettevues-1963-brochure"]
  },
  {
   "section": "specs",
   "claimText": "Published figures for the engine speed at which the 1963 L84 made its rated 360 bhp do not agree, and the manufacturer's own figure is the outlier.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["gm-heritage-1963", "cac-1963-specs", "corvsport-1963"],
   "conflictNote": "GM's heritage record states '327 cid, ohv V8, 360 hp @ 5,000 rpm'. Corvette Action Center states 360 bhp at 6,000 rpm. CorvSport states 360 hp at 6,400 rpm. Not resolved by any source consulted here."
  },
  {
   "section": "production",
   "claimText": "Fuel injection was displaced by the big-block rather than abandoned for unreliability: L84 take-up ran 2,610 cars in 1963, 1,325 in 1964 and 771 in 1965, by which point it cost $538.00 against $292.70 for the 425 bhp L78 396, which 2,157 buyers chose. Injection was dropped after 1965.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["cac-1963-production", "cac-1964-production", "cac-1965-production", "corvsport-1965"]
  },
  {
   "section": "production",
   "claimText": "RPO Z06 was a 1963-only, coupe-only package taken by 199 buyers, requiring the L84 engine, a four-speed and Positraction, and providing sintered-metallic Al-Fin drum brakes, a dual master cylinder, stiffer springs and a larger front bar. 63 of the 199 also took the N03 36.5-gallon tank.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["cac-1963-production", "rm-az20-z06-tank", "corvsport-1963", "wikipedia-c2"]
  },
  {
   "section": "production",
   "claimText": "Sources disagree on what RPO Z06 cost a buyer in 1963, and two catalogue entries from the same auction house give different figures.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["rm-am22-z06", "rm-az20-z06-tank", "cac-1963-production", "corvsport-1963"],
   "conflictNote": "RM Sotheby's Amelia Island 2022 catalogue states $1,293.35. RM's own Arizona 2020 catalogue, Corvette Action Center's RPO table and CorvSport all state $1,818.45, with the tank separate as RPO N03. Not resolved by any source consulted here."
  },
  {
   "section": "production",
   "claimText": "Twenty 1967 Corvettes were built with the L88 427 at $947.90, the engine entering production in February 1967, and all twenty carried the mandatory M22 gearbox, J56 brakes, F41 suspension, K66 ignition and C48 heater delete. The rating of 430 bhp at 5,200 rpm was a deliberate understatement; Vette Vues puts the dyno figure at 500 to 560 hp, but no measured factory figure exists.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["cac-l88-production", "cac-1967-production", "vettevues-l88", "wikipedia-c2"]
  },
  {
   "section": "history",
   "claimText": "The Grand Sport was intended as a homologation run of 125 cars and was stopped by GM's racing prohibition at five - three coupes and two roadsters - which raced at Nassau in December 1963 under Penske, Hall, Thompson, Cannon and Pabst.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["revs-grandsport", "rm-mo26-grandsport", "corvsport-1963", "wikipedia-c2"]
  },
  {
   "section": "specs",
   "claimText": "Published weights for the 1963 Grand Sport differ by roughly 250 lb, and neither source states how the car was weighed.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["rm-mo26-grandsport", "revs-grandsport"],
   "conflictNote": "RM Sotheby's catalogue for chassis 30837X100003 states roughly 1,900 lb against about 3,200 lb for a standard 1963 car. The Revs Institute states 2,150 lb. Not resolved by any source consulted here."
  },
  {
   "section": "specs",
   "claimText": "Period independent testing of a 360 bhp car recorded 0-60 mph in 6.0 seconds, 0-100 mph in 14.3 seconds and a standing quarter of 14.0 seconds at about 98 mph, with testers criticising the ride on rough surfaces and brakes that grabbed unless warmed; Road & Track recorded 6.3 seconds to 60 mph for a 1965 L84.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["motorsport-1964-test", "cac-1965-production"]
  },
  {
   "section": "market",
   "claimText": "As of August 2026 classic.com records an average sale price of $131,977 across the C2 market with 284 cars listed for sale, and benchmarks running from $86,035 for a 327/250 through $191,483 for the L84 and $169,579 for the L71 to $1,394,859 for an L88.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["classic-c2", "classic-c2-l88"]
  },
  {
   "section": "market",
   "claimText": "Documented auction evidence brackets the range as of August 2026: a Z06 coupe with NCRS Top Flight and Bloomington Gold made $423,000 at RM Sotheby's Amelia Island in 2022, a Z06 reached $1,100,000 at Barrett-Jackson in January 2026, a 1967 L88 drew a $2,700,000 high bid at Mecum Kissimmee on 17 January 2026 without selling, and a Grand Sport made $18,705,000 at RM Sotheby's Monterey sale in 2026.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["rm-am22-z06", "classic-c2-z06", "classic-c2-l88", "rm-mo26-grandsport"]
  },
  {
   "section": "problems",
   "claimText": "The defining structural fault is corrosion of the steel under the fibreglass - the birdcage at the base of the windscreen pillars, the rear frame kick-ups, the gussets by the number three body mount and the transmission crossmember - which corrodes from the inside outwards and is invisible without a lift. Stress cracking at the screen posts and arch lips is near-universal, and the 1965-on discs corrode in their lines and calipers.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["lsxmag-c2-guide", "corvetteforum-c2-frame", "cac-1965-production"]
  },
  {
   "section": "summary",
   "claimText": "The NCRS Historic Document Service supplies shipping data reports for cars built from 1962 after number 6000 through 1975 at $50, giving the dealer code, dealer name and address where available and the production date, but explicitly not the options - so it corroborates a build date, never a specification.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["ncrs-hds", "lsxmag-c2-guide"]
  }
 ]
};
