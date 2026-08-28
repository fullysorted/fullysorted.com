/**
 * Researched model draft — Chevrolet Camaro (1967-1969).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedCamaro1stGen = {
 "slug": "chevrolet/camaro-1st-gen",
 "make": "Chevrolet",
 "model": "Camaro",
 "generation": "First generation",
 "generationCode": "F-body",
 "trim": null,
 "yearStart": 1967,
 "yearEnd": 1969,
 "bodyStyles": [
  "2-door sport coupe (unitised body with bolt-on front subframe)",
  "2-door convertible"
 ],
 "engines": [
  "230 cu in (3,769 cc) inline-six, 140 bhp at 4,400 rpm and 220 lb-ft at 1,600 rpm (base), and 250 cu in (4,097 cc) inline-six, 155 bhp at 4,200 rpm",
  "302 cu in (4,949 cc) DZ small-block V8, 327 block with 283 crankshaft, 11.0:1, single Holley four-barrel, 290 bhp at 5,800 rpm and 290 lb-ft at 4,200 rpm — Z/28 only",
  "307 cu in (5,031 cc) V8 at 200 bhp (1969 base V8); 327 cu in (5,354 cc) V8 at 210 bhp, or 275 bhp as RPO L30, for 1967-68",
  "350 cu in (5,735 cc) L48 V8, 295 bhp for 1967-68 and 300 bhp at 4,800 rpm for 1969 — Super Sport; 255 bhp LM1 for 1969",
  "396 cu in (6,489 cc) big-block V8: L35 325 bhp/4,800 rpm, L34 350 bhp/5,200 rpm, L78 375 bhp/5,600 rpm, L89 aluminium heads optional on the L78 for 1968-69 — Super Sport",
  "427 cu in (6,997 cc) L72 iron-block V8, 425 bhp at 5,600 rpm and 460 lb-ft at 4,000 rpm — COPO 9561, 1969 only",
  "427 cu in (6,997 cc) ZL1 all-aluminium V8, 12.5:1, 850 cfm Holley, 430 bhp at 5,200 rpm and 450 lb-ft at 4,400 rpm — COPO 9560, 1969 only"
 ],
 "productionTotal": null,
 "productionNotes": "No generation total is asserted here because the published model-year figures do not agree. The Camaro Research Group and Classic Industries both give 220,906 for 1967, 235,147 for 1968 and 243,085 for 1969, a run of 699,138; Wikipedia's first-generation article gives 121,051, 159,087 and 150,078 for the same three years. Neither set is reconciled to the other by any source consulted here, and Classic Industries adds that its own figures 'are not exact' and that neither Chevrolet nor GM knows exactly how many Camaros were delivered. Option-level data is firmer but carries its own warnings. The RPO tables the Research Group publishes are credited to Len Williamson and cover United States plants only, giving Z/28 at 602, 7,199 and 20,302, convertibles at 25,141, 20,440 and 17,573, and the Super Sport engines at L48 29,270/12,496/22,339, L35 4,003/10,773/6,752, L34 2,579 and 2,018, L78 1,138/4,575/3,823 and L89 aluminium heads at 272 and 311. The same document warns that 1967 Z/28 output may have been booked as 327 production and that ZL1 and L72 cars appear to have been counted inside the L78 total — which is why the COPO figures are derived rather than recorded. The Research Group also states that Chevrolet kept no statistics on option combinations, so any number for an RS/SS 396 four-speed convertible is an estimate by construction. Roughly three-quarters of 1967-69 cars were built at Norwood, Ohio and the rest at Van Nuys, California, with further CKD assembly overseas.",
 "notableTrims": [
  {
   "name": "RS (Rally Sport, RPO Z22)",
   "note": "An appearance package rather than a performance one, orderable alongside anything else: hidden headlights behind a full-width grille, revised tail lights, extra trim. Listed at $100 for 1967-68 and $125 for 1969, when 37,773 were fitted. The vacuum headlight doors are its standing weakness."
  },
  {
   "name": "SS (Super Sport)",
   "note": "The 350 cu in L48 was a Camaro exclusive in 1967 at 295 bhp; the 396 big-blocks ran L35, L34 and L78, with L89 aluminium heads for 1968-69. The L78 with those heads is the rarest ordinary route to a big-block, at 272 cars in 1968 and 311 in 1969."
  },
  {
   "name": "Z/28",
   "note": "Built to put the Camaro into SCCA Trans-Am. Coupe only, four-speed only, no air conditioning, power front discs mandatory. 602 cars in 1967 against 20,302 in 1969, so a 1967 is a different proposition in rarity and in carrying no badging beyond the stripes."
  },
  {
   "name": "COPO 9561 (L72 427)",
   "note": "Iron-block 427 at 425 bhp, ordered through Chevrolet's Central Office Production Order system to sidestep the corporate limit on engine size. At $489.75 it undercut an SS 396/375. No factory production record has ever surfaced."
  },
  {
   "name": "COPO 9560 (ZL1 427)",
   "note": "All-aluminium 427 at a rated 430 bhp, 12.5:1 compression and a 103-octane appetite. The engine option alone was $4,160.50 and stickers passed $7,300, which is why Fred Gibb Chevrolet could not sell the fifty it ordered."
  },
  {
   "name": "Yenko sYc 427",
   "note": "Don Yenko swapped L72 427s into SS Camaros in 1967 and 1968 before ordering them factory-built through COPO 9561 for 1969, adding stripes, badging and sYc headrest embroidery. The 1969 count is given as either 198 or 201."
  },
  {
   "name": "Z11 Indy Pace Car replica (1969)",
   "note": "Dover White convertible with Hugger Orange stripes, orange houndstooth trim and a ducted bonnet, the striping package listed at $35 on top of the convertible and RS/SS content. 3,675 built across Norwood and Los Angeles."
  }
 ],
 "specs": {
  "layout": "Front longitudinal engine, rear-wheel drive",
  "chassis": "Semi-unibody: unitised passenger cell with a bolt-on front subframe carrying engine, gearbox and front suspension, ending under the doors",
  "wheelbase": "108.0 in (2,743 mm); 186.0 in long and 74.0 in wide for 1969",
  "engine": "230 and 250 cu in inline-sixes; 302, 307, 327, 350 and 396 cu in V8s, plus the special-order 427 — eight engines catalogued for 1967, ten for 1968 and twelve for 1969",
  "power": "Manufacturer SAE gross ratings from 140 bhp (230 six) to 430 bhp (ZL1 427). Z/28 302 rated 290 bhp at 5,800 rpm; SS 396 L78 375 bhp; COPO L72 425 bhp at 5,600 rpm",
  "torque": "Z/28 302: 290 lb-ft at 4,200 rpm. SS 396 L78: 415 lb-ft at 3,600 rpm. COPO L72: 460 lb-ft at 4,000 rpm. All manufacturer claims",
  "transmission": "Three-speed manual standard; Muncie M20, M21 and heavy-duty M22 four-speeds; Powerglide, Torque-Drive and Turbo Hydra-Matic automatics. Z/28 four-speed only",
  "weight": "Approximately 3,135 lb shipping weight for a 1969 Z/28 coupe; no kerb figure is given by the sources consulted",
  "acceleration": "Period magazine tests of the 1969 Z/28 recorded 0-60 mph in 7.1-7.4 s and quarter-miles of 14.34-15.12 s",
  "bore_stroke": "Z/28 302: 4.00 in x 3.00 in, quoted as 4.002 x 3.005 in by the Camaro Research Group",
  "induction": "Single Holley four-barrel on the Z/28; a cross-ram twin four-barrel manifold was sold over the parts counter and never fitted on the assembly line",
  "brakes": "Drums standard; power front discs optional and mandatory on the Z/28. RPO JL8 four-wheel discs offered in 1969 only, 206 cars, at $500.30",
  "rear_axle": "Ten-bolt standard; twelve-bolt on Z/28, Super Sport and COPO cars, with 4.10:1 Positraction on the COPO 427s"
 },
 "summary": "Chevrolet met the Ford Mustang three years late, and with more engine. The Camaro was shown to the press in Detroit on 12 September 1966 and reached dealers on 29 September as a 1967 model, on the new rear-drive F-body it shared with the Pontiac Firebird: a unitised body carrying a bolt-on front subframe for the engine and front suspension, offered as a sport coupe or a convertible. Chevrolet's general manager Pete Estes gave reporters the description that has followed the car ever since, a small vicious animal that eats Mustangs. Across three model years the catalogue ran from a 140 bhp 230 cu in six to a 430 bhp all-aluminium 427, taking in the Rally Sport appearance package with its hidden headlights, the Super Sport with 350 and 396 engines, and the Z/28, a 302 cu in car built in the numbers the Trans-Am rulebook demanded. The 1969 cars were restyled and their model year ran on into November 1969 because the second-generation car was late. Behind all of it sat the COPO order system, through which a handful of dealers obtained 427s that Chevrolet did not officially sell.",
 "history": "## The Answer to the Mustang\nFord had put the Mustang on sale in April 1964 and Chevrolet had nothing to answer it with. Its reply was drawn internally as the F-car styling project under chief designer Henry Haga, with Charles Jordan and Irvin Rybicki contributing under Dave Holls and the interior by Suzanne Vanderbilt and Cathy Kascur. The press saw it in Detroit on 12 September 1966 and it went on sale on 29 September at $2,572 for the sport coupe and $2,809 for the convertible. Pete Estes, then running Chevrolet, supplied the quotable version of the brief: a small vicious animal that eats Mustangs. Chevrolet's own retrospective account is more measured, recording fifteen colours and eight engines.\n\n## Three Model Years, Three Different Cars\nStructurally the Camaro was a semi-unibody, a unitised passenger cell with a bolt-on front subframe that carried the engine and front suspension and ended under the doors. For 1968 the vent windows went, replaced by Astro Ventilation, side marker lights were added to meet federal rules, and the tail lights, grille and console were restyled. For 1969 the body was reworked at the nose, fenders, quarters and tailpan, with triple-lens tail lights and the ignition moved to the steering column. That model year then ran long, into November 1969, because the second-generation car was not ready — one reason 1969 is the largest and the most collected of the three.\n\n## Z/28: Homologation Written Into the Order Book\nRPO Z28 arrived in December 1966, first deliveries in January 1967, and is generally credited to Vince Piggins of Chevrolet's product promotion office. The SCCA's Trans-Am sedan class capped displacement at five litres, so Chevrolet assembled one: a 327 block with a 283 crankshaft, 302 cu in, 11.0:1, a single Holley four-barrel and a rating of 290 bhp at 5,800 rpm that almost nobody has taken at face value. The package was coupe only, four-speed only, without air conditioning and with power front discs mandatory. A cross-ram twin four-barrel manifold was sold over the dealer parts counter but never installed on the line, and for 1969 came the cowl-induction bonnet and, briefly, RPO JL8 four-wheel discs.\n\n## COPO: A Racing Engine Sold Through the Order Desk\nA corporate rule kept engines above 400 cu in out of Chevrolet's intermediate cars, so the 427s reached the Camaro through the Central Office Production Order system, meant for fleet and special equipment. COPO 9561 bought the iron-block L72 at 425 bhp for $489.75, cheaper than an SS 396/375. COPO 9560 bought the all-aluminium ZL1: the engine option alone was $4,160.50 and cars stickered above $7,300. Fred Gibb Chevrolet of La Harpe, Illinois ordered fifty on the understanding the cost would be far lower, could not shift them, and sent some back to be redistributed; sixty-nine were built in all. Don Yenko, swapping 427s into Camaros himself since 1967, ordered his 1969 cars this way instead.\n\n## Trans-Am, and the Title That Was Kept\nPenske Racing and Mark Donohue took the over-two-litre manufacturers' championship for Chevrolet in 1968 and again in 1969, but the second season is remembered for what followed: Donohue's Camaro was found to be under the class minimum weight, the wins were to be stripped and awarded to Ford, and General Motors is recorded as having threatened to pull its money out of the series. The result stood, and the title is still credited to Chevrolet.",
 "marketNotes": "As of August 2026 classic.com puts the average price of a first-generation Camaro at $80,870 across 419 cars listed, with the lowest recorded sale at $11,000 for a 1969 pro-street car on 9 April 2026 — a spread reflecting a market containing everything from six-cylinder coupes to aluminium-block COPOs. The site publishes separate benchmarks by variant, all trending upward: the Z/28 benchmark is $103,174 against an average sale of $109,633, with a high of $330,000 for a 1969 RS Z/28 on 23 January 2026; the COPO benchmark is $186,834 against an average of $176,193, with a high of $440,000 at Barrett-Jackson on 24 January 2026; the ZL-1 benchmark is $894,749 against an average of $710,900, ranging from $159,500 in July 2022 to $1,430,000 at Mecum Indianapolis on 16 May 2026. Lot evidence fills in the shape: RM Sotheby's sold ZL1 number 53 of 69 for $404,250 at Fort Lauderdale in 2016, and a Z11 pace car replica made $53,350 from the John Staluppi Collection in 2012, both as published totals rather than hammer prices. The gap between a documented COPO and a well-presented Z/28 is now roughly an order of magnitude.",
 "whatToLookFor": "Identity comes first, because the Camaro is among the most copied cars in the American hobby and the parts to build a convincing fake are all reproduced. The cowl tag and VIN together establish plant, build week and body, but neither encodes the engine, so a Z/28 claim rests on the DZ block casting and stamping, on a twelve-bolt axle, and ideally on paperwork. For COPO cars the standard of proof is higher: the ZL1 consigned to Mecum's Indianapolis sale in May 2026 came with copies of the chassis and body broadcast sheets and the shipping and sales invoices, and that is now what the market expects rather than what it hopes for. Any ZL1 claim is checked against the VIN list Vince Piggins kept at Chevrolet, published in Super Chevy in August 1981. Structurally, look at the points where the front subframe bolts to the unitised rear structure, at the rocker panels, rear fenders, floor pans, trunk pan and the mounts for the rear shock absorbers. It is common to find both rear quarters, the floors and the trunk metal replaced; the question is how well. On an RS, work the vacuum headlight doors through several cycles from cold.",
 "commonProblems": "Corrosion is the defining problem and it is structural rather than cosmetic. The subframe-to-body mounting points, rocker panels, rear fenders, floor pans, trunk pan and rear shock tower mounts are the recognised sites, and heavy filler is common in place of proper repair. The semi-unibody was never especially stiff; period testers noted body roll and a rear end that moved around when pressed, and a shell cut about for a larger engine, or repaired without attention to the firewall and subframe mounts, will flex. Fifty-year-old wiring is a recurring source of trouble, and a new harness is generally cheaper than chasing faults through the old one. The RS vacuum headlight doors were awkward when new, particularly in ice, and Chevrolet added slots to them for 1969 as a workaround. The engines are the least of it — conventional Chevrolet small- and big-blocks wanting little more than routine ignition and fuel service — though the solid-lifter units, the Z/28 302, the L78 396 and the COPO 427s, need periodic valve adjustment and were never offered with air conditioning. JL8 disc components are scarce, and reproduction panel quality is inconsistent enough that what a restoration is worth depends heavily on which parts went into it.",
 "valueTrajectory": "First-generation Camaro values have followed the broader American muscle market: a long climb through the 2000s, a correction after 2008, and a renewed rise since the middle of the last decade that has been sharply uneven between specifications. As of August 2026 classic.com shows all of the benchmarks it publishes for the generation trending upward, but at very different levels — an average first-generation car at $80,870, a Z/28 benchmark at $103,174, a COPO at $186,834 and a ZL-1 at $894,749 — and the ZL-1 figure has been pulled hard by a $1,430,000 sale at Mecum Indianapolis in May 2026 against a $159,500 result as recently as July 2022. The effect is stratification rather than a general lift: documented, correctly optioned cars are separating from the rest faster than the rest are moving at all, while ordinary six-cylinder and small-block coupes remain worth roughly what a good restoration costs, which caps them. Because the factory kept no record of option combinations, and no production record for COPO 9561 has been found, provenance paperwork rather than the car itself increasingly sets the price at the top.",
 "overallConfidence": "high",
 "sources": [
  {
   "ref": "crg-geninfo",
   "title": "General Info - Camaro FAQ",
   "url": "https://www.camaros.org/geninfo.shtml",
   "publisher": "Camaro Research Group",
   "sourceType": "registry",
   "reliability": "high",
   "notes": "Model-year totals of 220,906 (1967), 235,147 (1968) and 243,085 (1969); about 75 per cent built at Norwood, the rest at Van Nuys; and the statement that Chevrolet kept no statistical records on option combinations."
  },
  {
   "ref": "crg-model",
   "title": "Camaro - 67-69 Camaro Model Information",
   "url": "https://www.camaros.org/model.shtml",
   "publisher": "Camaro Research Group",
   "sourceType": "registry",
   "reliability": "high",
   "notes": "1968 and 1969 year-to-year changes; SS/RS/Z28 package content and restrictions; COPO 9560 'only 69 of these cars were built'; COPO 9561 'it is believed that 997 iron 427 cars were built'; Yenko estimates of 54, 64 and 198; Z10 at 450-500."
  },
  {
   "ref": "crg-z28",
   "title": "The First-Generation Camaro Z28 - CRG Research Report",
   "url": "https://www.camaros.org/Z28.shtml",
   "publisher": "Camaro Research Group",
   "sourceType": "registry",
   "reliability": "high",
   "notes": "Z28 introduced December 1966, credited to Vince Piggins; a 4.002 in bore 327 block with a 3.005 in stroke 283 crank to meet the Trans-Am five-litre limit; 'very conservatively rated at 290 hp at 5800 RPM'; 602/7,199/20,302; cross-ram sold through dealers only; JL8 206 cars."
  },
  {
   "ref": "crg-copo",
   "title": "CRG Research Report - COPO 427",
   "url": "https://camaros.org/copo.shtml",
   "publisher": "Camaro Research Group",
   "sourceType": "registry",
   "reliability": "high",
   "notes": "ZL1 total of 69 (50 to Fred Gibb Chevrolet, 19 to others), verified against a Chevrolet VIN list kept by Vince Piggins and published in Super Chevy in August 1981; ZL1 option $4,160.50 with stickers over $7,300; COPO 9561 at $489.75; ~997 L72 derived from 4,889 L78 less 69; 822 MN plus 193 MO engines = 1,015; COPO 9561 records have not surfaced."
  },
  {
   "ref": "crg-69pacer",
   "title": "CRG Research Report - 69 Pace Cars and Z10's",
   "url": "https://www.camaros.org/69pacer.shtml",
   "publisher": "Camaro Research Group",
   "sourceType": "registry",
   "reliability": "high",
   "notes": "3,675 Z11 pace car replicas, roughly 3,200-3,300 at Norwood and about 500 at Los Angeles; Z10 coupes estimated at 450-500 with about 200 documented and the note that 'production records have not been found'."
  },
  {
   "ref": "crg-options",
   "title": "1967-69 Chevrolet Camaro Regular Production Options (RPOs)",
   "url": "https://www.camaros.org/pdf/options.pdf",
   "publisher": "Camaro Research Group",
   "sourceType": "registry",
   "reliability": "high",
   "notes": "RPO counts and prices credited to Len Williamson, US plants only: Z28 602/7,199/20,302 at $340/$380/$435; L48 29,270/12,496/22,339; L35 4,003/10,773/6,752; L34 2,579 and 2,018; L78 1,138/4,575/3,823; L89 272 and 311; convertibles 25,141/20,440/17,573; JL8 206; Z11 about 3,675. Warns ZL1 and L72 sit inside the L78 total."
  },
  {
   "ref": "chevrolet-legacy",
   "title": "Chevy's Legacy: Camaro",
   "url": "https://www.chevrolet.com/legacy/camaro",
   "publisher": "Chevrolet (General Motors)",
   "sourceType": "manufacturer",
   "reliability": "medium",
   "notes": "Chevrolet's own retrospective: the Camaro as its pony-car entry, launched with fifteen exterior colours and eight engine choices; RS identified by hidden headlights; COPO special orders introduced for 1969; pace car duty in 1967 and 1969."
  },
  {
   "ref": "wikipedia-camaro-gen1",
   "title": "Chevrolet Camaro (first generation)",
   "url": "https://en.wikipedia.org/wiki/Chevrolet_Camaro_(first_generation)",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Gives per-year production of 121,051, 159,087 and 150,078, materially below the Camaro Research Group figures; RS 37,773 orders filled; JL8 206; around 1,000 L72 COPO cars and 69 ZL1s; 1969 model year extended into November 1969."
  },
  {
   "ref": "wikipedia-yenko",
   "title": "Yenko Camaro",
   "url": "https://en.wikipedia.org/wiki/Yenko_Camaro",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Yenko's L72 conversions of 1967-68 and the switch to factory COPO 9561 ordering for 1969; the GM edict against engines above 400 cu in; 1969 production given as 201 cars, 171 four-speed and 30 automatic."
  },
  {
   "ref": "wikipedia-ta-1969",
   "title": "1969 Trans-American Sedan Championship",
   "url": "https://en.wikipedia.org/wiki/1969_Trans-American_Sedan_Championship",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Chevrolet won the over-two-litre title on six Donohue wins, but records that Donohue ran an underweight Camaro, that the wins were to be stripped and reassigned to Ford, and that GM threatened to withdraw support from the series."
  },
  {
   "ref": "classicindustries-production",
   "title": "1967-2002 Camaro Production Numbers: First-Gen to Fourth-Gen",
   "url": "https://news.classicindustries.com/1967-2002-camaro-generations-production-numbers",
   "publisher": "Classic Industries",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Independently states 220,906, 235,147 and 243,085 for 1967-69, matching the Camaro Research Group, while adding that 'these production numbers are not exact' and that neither Chevrolet nor GM knows exactly how many were delivered."
  },
  {
   "ref": "classic-1stgen",
   "title": "Chevrolet Camaro - 1st Gen Market",
   "url": "https://www.classic.com/m/chevrolet/camaro/1st-gen/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Read August 2026: average price $80,870 across 419 cars listed; lowest recorded sale $11,000 for a 1969 pro-street car on 9 April 2026; variant benchmarks of $103,174, $186,834 and $894,749."
  },
  {
   "ref": "classic-z28",
   "title": "Chevrolet Camaro Z/28 - 1st Gen Market",
   "url": "https://www.classic.com/m/chevrolet/camaro/1st-gen/z28/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Read August 2026: Market Benchmark $103,174 trending up, average sale $109,633, highest recorded sale $330,000 for a 1969 RS Z/28 on 23 January 2026."
  },
  {
   "ref": "classic-zl1",
   "title": "Chevrolet Camaro - 1st Gen - ZL-1 Market",
   "url": "https://www.classic.com/m/chevrolet/camaro/1st-gen/zl-1/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Read August 2026: Market Benchmark $894,749 trending up, average price $710,900, lowest recorded sale $159,500 on 2 July 2022 and highest $1,430,000 on 16 May 2026 through Mecum at Indianapolis."
  },
  {
   "ref": "classic-copo",
   "title": "Chevrolet COPO Camaro - 1st Gen Market",
   "url": "https://www.classic.com/m/chevrolet/camaro/1st-gen/copo/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Read August 2026: Market Benchmark $186,834 trending up, average price $176,193, highest recorded sale $440,000 on 24 January 2026 at Barrett-Jackson and lowest $63,000 for a tribute car on 5 November 2021."
  },
  {
   "ref": "rm-fl16-zl1",
   "title": "1969 Chevrolet Camaro ZL1, Fort Lauderdale 2016",
   "url": "https://rmsothebys.com/auctions/fl16/lots/r0398-1969-chevrolet-camaro-zl1/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold for $404,250 at RM Sotheby's Fort Lauderdale sale in 2016, lot 510; ZL1 number 53 of 69. Catalogue states the 69 comprised 47 four-speed manuals and 22 automatics, and that a Berger Chevrolet test car stickered at $7,800."
  },
  {
   "ref": "rm-st12-pacecar",
   "title": "1969 Chevrolet Camaro Indy Pace Car Replica, The John Staluppi Collection",
   "url": "https://rmsothebys.com/auctions/st12/lots/r135-1969-chevrolet-camaro-indy-pace-car-replica/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold for $53,350 from the John Staluppi Collection in 2012: a 350/300 bhp automatic Z11 convertible. Catalogue independently states 3,675 pace cars of all types, this car one of 3,532 civilian replicas."
  },
  {
   "ref": "gmauthority-zl1-indy",
   "title": "Ultra Rare 1969 Chevy Camaro ZL1 Bound For Indy Auction",
   "url": "https://gmauthority.com/blog/2026/04/ultra-rare-1969-chevy-camaro-zl1-bound-for-indy-auction/",
   "publisher": "GM Authority",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "COPO 9560 car number two of 69, one of two shipped to Fred Gibb Chevrolet on New Year's Eve 1968 and prepared by Dick Harrell. States only twelve of the 69 had the heavy-duty four-speed. Consigned to Mecum Indianapolis for 16 May 2026 with broadcast sheets and shipping and sales invoices."
  },
  {
   "ref": "classicmotorsports-buyers",
   "title": "1967-'69 Chevrolet Camaro: Buy one now?",
   "url": "https://classicmotorsports.com/articles/tech-tips-1967-69-chevrolet-camaro/",
   "publisher": "Classic Motorsports",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "The semi-unibody with a front subframe ending under the doors; rust where the subframe meets the rear unibody and in rockers, rear fenders, floor pans, trunk pan and rear shock tower mounts; body roll from limited rigidity; finicky RS vacuum headlight doors; ageing wiring; inconsistent reproduction panels."
  },
  {
   "ref": "heacock-69z28",
   "title": "1969 Chevrolet Camaro Z28 - The Other Pony Car",
   "url": "https://heacockclassic.com/articles/1969-chevrolet-camaro-z28-the-other-pony-car/",
   "publisher": "Heacock Classic",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "302 at 290 bhp/5,800 rpm and 290 lb-ft/4,200 rpm while reporting insiders put real output above 375 bhp; cross-ram about $500 as a dealer option, impractical on the road; JL8 $500.30 and 206 cars; Z/28 602/7,199/20,302; Penske and Donohue taking the 1968 title; 0-60 in 7.1-7.4 s."
  },
  {
   "ref": "motorcities-firstgen",
   "title": "Remembering the First Generation 1967 Chevrolet Camaro",
   "url": "https://www.motorcities.org/story-of-the-week/2026/remembering-the-first-generation-1967-chevrolet-camaro",
   "publisher": "MotorCities National Heritage Area",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Records the internal F-car styling project, chief designer Henry Haga with Charles Jordan and Irvin Rybicki under Dave Holls, interior by Suzanne Vanderbilt and Cathy Kascur; the 29 September 1966 debut at $2,572 and $2,809."
  },
  {
   "ref": "automotivehistory-press-intro",
   "title": "September 12, 1966 - The press meets the Chevrolet Camaro",
   "url": "https://automotivehistory.org/1966-camaro-press-introduction/",
   "publisher": "This Day In Automotive History",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Fixes the press introduction to 12 September 1966 in Detroit and the on-sale date to 29 September 1966, and attributes to Pete Estes the description of the car as a 'small vicious animal that eats Mustangs'."
  },
  {
   "ref": "overdrive-69factsheet",
   "title": "1969 Chevrolet Camaro Fact Sheet",
   "url": "https://over-drive-magazine.com/2024/03/28/1969-chevrolet-camaro-fact-sheet/",
   "publisher": "Over-Drive Magazine",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Full 1969 dimensional and engine table: 108 in wheelbase, 186.0 in long, 74.0 in wide; 230 six 140 bhp, 250 155 bhp, 307 200 bhp, 350 at 255 and 300 bhp, 302 Z28 290 bhp/290 lb-ft, 396 at 325/350/375 bhp, L72 427 425 bhp/460 lb-ft, ZL1 427 430 bhp/450 lb-ft."
  },
  {
   "ref": "z28net-69specs",
   "title": "1969 Z/28 Specifications",
   "url": "http://www.z28.net/1969-z28-specifications/",
   "publisher": "Z28.net",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "1969 Z/28 detail: 4.00 x 3.00 in bore and stroke, 11.0:1, 290 bhp at 5,800 rpm and 290 lb-ft at 4,200 rpm, close-ratio four-speed, 11 in front discs with 9.5 in rear drums, and approximately 3,135 lb shipping weight."
  }
 ],
 "claims": [
  {
   "section": "summary",
   "claimText": "The Camaro was drawn internally as the F-car styling project under chief designer Henry Haga, shown to the press in Detroit on 12 September 1966 and put on sale on 29 September as a 1967 model at $2,572 for the sport coupe and $2,809 for the convertible, with Chevrolet general manager Pete Estes describing it to reporters as a small vicious animal that eats Mustangs.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "automotivehistory-press-intro",
    "motorcities-firstgen",
    "chevrolet-legacy"
   ]
  },
  {
   "section": "production",
   "claimText": "Published model-year production totals for the first-generation Camaro do not agree, and no generation total is asserted here.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "crg-geninfo",
    "classicindustries-production",
    "wikipedia-camaro-gen1"
   ],
   "conflictNote": "The Camaro Research Group and Classic Industries both give 220,906 for 1967, 235,147 for 1968 and 243,085 for 1969. Wikipedia's first-generation article gives 121,051, 159,087 and 150,078 for the same years, and Classic Industries states its own figures are not exact. The gap is not resolved by any source consulted here, so productionTotal is left null."
  },
  {
   "section": "production",
   "claimText": "Chevrolet retained no statistical records of option combinations; the surviving RPO counts are credited to Len Williamson and cover United States plants only, and the Camaro Research Group warns that 1967 Z/28 output may have been booked as 327 production and that ZL1 and L72 cars appear to have been counted inside the L78 396 total.",
   "confidence": "medium",
   "status": "unverified",
   "sourceRefs": [
    "crg-geninfo",
    "crg-options",
    "crg-copo"
   ]
  },
  {
   "section": "specs",
   "claimText": "The Z/28's 302 cu in V8 was assembled from a 327 block and a 283 crankshaft to fit the SCCA Trans-Am five-litre limit, running 11.0:1 compression and a single Holley four-barrel, rated at 290 bhp at 5,800 rpm and 290 lb-ft at 4,200 rpm.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "crg-z28",
    "z28net-69specs",
    "overdrive-69factsheet",
    "heacock-69z28"
   ]
  },
  {
   "section": "specs",
   "claimText": "The 290 bhp rating for the Z/28 302 is widely held to understate the engine's real output, but no primary dynamometer record supports a specific alternative figure.",
   "confidence": "low",
   "status": "unverified",
   "sourceRefs": [
    "crg-z28",
    "heacock-69z28"
   ],
   "conflictNote": "The Camaro Research Group calls the engine very conservatively rated; Heacock Classic reports that insiders put real output above 375 bhp. Neither cites a dynamometer sheet, and the true figure cannot be resolved from the sources consulted here."
  },
  {
   "section": "production",
   "claimText": "Z/28 production is given as 602 cars for 1967, 7,199 for 1968 and 20,302 for 1969 at list prices of $340, $380 and $435, alongside 25,141, 20,440 and 17,573 convertibles, 37,773 Rally Sport cars in 1969 and just 206 sets of RPO JL8 four-wheel disc brakes at $500.30; the cross-ram twin four-barrel manifold was a dealer parts-counter item never fitted on the line.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "crg-options",
    "crg-z28",
    "heacock-69z28",
    "wikipedia-camaro-gen1"
   ]
  },
  {
   "section": "production",
   "claimText": "Sixty-nine COPO 9560 ZL1 Camaros were built for 1969, fifty ordered by Fred Gibb Chevrolet and nineteen by other dealers, the total resting on a Chevrolet VIN list kept by Vince Piggins and first published in Super Chevy in August 1981.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "crg-copo",
    "rm-fl16-zl1",
    "gmauthority-zl1-indy",
    "wikipedia-camaro-gen1"
   ]
  },
  {
   "section": "production",
   "claimText": "The transmission split within the 69 ZL1 Camaros is stated differently by different sources and is not settled here.",
   "confidence": "low",
   "status": "disputed",
   "sourceRefs": [
    "rm-fl16-zl1",
    "gmauthority-zl1-indy",
    "crg-copo"
   ],
   "conflictNote": "RM Sotheby's catalogue states 47 four-speed manuals and 22 automatics. GM Authority states that only twelve of the 69 were ordered with the heavy-duty four-speed, which may refer to the M22 alone rather than to four-speeds generally. The two accounts are not resolved against one another by any source consulted here, so no split is asserted."
  },
  {
   "section": "production",
   "claimText": "No production record for COPO 9561, the iron-block L72 427 Camaro, has ever surfaced, and the commonly quoted totals are derived by arithmetic rather than recorded.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "crg-copo",
    "crg-model",
    "crg-options",
    "wikipedia-camaro-gen1"
   ],
   "conflictNote": "The Camaro Research Group derives approximately 997 cars by subtracting the 69 ZL1s from a recorded L78 total of 4,889, and separately notes engine records of 822 MN and 193 MO units totalling 1,015, some of them service and warranty stock. Its model page calls 997 'believed'; Wikipedia states 'around 1,000'. Because COPO 9561 production records have not surfaced the figure is not resolved, and no count is asserted."
  },
  {
   "section": "production",
   "claimText": "The number of 1969 Yenko Camaros ordered through COPO 9561 is given as either 198 or 201 depending on the source.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "crg-copo",
    "crg-model",
    "wikipedia-yenko",
    "wikipedia-camaro-gen1"
   ],
   "conflictNote": "The Camaro Research Group states that Don Yenko sold 198 cars directly and gives 198 as its 1969 estimate. Wikipedia's Yenko Camaro article gives 201, split as 171 four-speed and 30 automatic, and Wikipedia's first-generation Camaro article says Yenko ordered 201. The three-car difference is not resolved by any source consulted here."
  },
  {
   "section": "production",
   "claimText": "3,675 Z11 Indianapolis 500 pace car replicas were built for 1969, alongside an estimated 450 to 500 Z10 pace-car-liveried coupes for which no production record has been found.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "crg-69pacer",
    "rm-st12-pacecar",
    "crg-options"
   ]
  },
  {
   "section": "history",
   "claimText": "COPO 9561 added the 425 bhp L72 427 for $489.75, less than an SS 396/375, while COPO 9560 added the all-aluminium ZL1 427 at $4,160.50 for the engine option alone, taking sticker prices past $7,300 and leaving Fred Gibb Chevrolet unable to sell the fifty cars it had ordered.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "crg-copo",
    "crg-model",
    "rm-fl16-zl1"
   ]
  },
  {
   "section": "history",
   "claimText": "Penske Racing and Mark Donohue took the over-two-litre Trans-Am manufacturers' championship for Chevrolet in 1968 and again in 1969, but the 1969 title was retained only after Donohue's Camaro was found to be underweight and General Motors reportedly threatened to withdraw its support from the series rather than see the wins reassigned to Ford.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-ta-1969",
    "heacock-69z28"
   ]
  },
  {
   "section": "market",
   "claimText": "As of August 2026 classic.com records an average first-generation Camaro price of $80,870, with market benchmarks of $103,174 for the Z/28, $186,834 for the COPO and $894,749 for the ZL-1, all trending upward.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-1stgen",
    "classic-z28",
    "classic-copo",
    "classic-zl1"
   ]
  },
  {
   "section": "market",
   "claimText": "Auction evidence spans several orders of specification: a Z11 pace car replica made $53,350 from the John Staluppi Collection in 2012, ZL1 number 53 made $404,250 at RM Sotheby's Fort Lauderdale in 2016, and classic.com records a ZL-1 at $1,430,000 through Mecum at Indianapolis on 16 May 2026.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "rm-st12-pacecar",
    "rm-fl16-zl1",
    "classic-zl1"
   ]
  },
  {
   "section": "problems",
   "claimText": "Corrosion is structural rather than cosmetic, concentrating at the subframe-to-body mounting points, rocker panels, rear fenders, floor pans, trunk pan and rear shock tower mounts; ageing wiring, awkward RS vacuum headlight doors and inconsistent reproduction panel quality are the other recurring faults.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classicmotorsports-buyers",
    "crg-model"
   ]
  },
  {
   "section": "market",
   "claimText": "Because engines are not encoded in the VIN or cowl tag and reproduction parts are universally available, a Z/28, SS or COPO claim rests on block casting and stamping evidence and on paperwork, with documented COPO cars now expected to carry broadcast sheets and shipping and sales invoices.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "crg-model",
    "gmauthority-zl1-indy"
   ]
  }
 ]
};
