/**
 * Researched model draft - Mercedes-Benz G-Class W463, US market (2002-2018 model years).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedGClassW463 = {
 "slug": "mercedes-benz/g-class-w463",
 "make": "Mercedes-Benz",
 "model": "G-Class",
 "generation": "W463, US market",
 "generationCode": "W463",
 "trim": "G500, G55 AMG, G550 and G63 AMG (US four-door wagon)",
 "yearStart": 2002,
 "yearEnd": 2018,
 "bodyStyles": [
  "4-door sport utility wagon on a separate ladder-type frame (the only body Mercedes-Benz USA sold)",
  "2-door short-wheelbase and cabriolet bodies, never sold new by Mercedes-Benz USA and seen in the US only as gray-market imports"
 ],
 "engines": [
  "5.0-liter V8, naturally aspirated, G500 for US model years 2002 through 2008: 292 hp and 336 lb-ft per MotorWeek, Consumer Guide and Mercedes-Benz Canada; Cars.com's launch report gives 300 hp and 330 lb-ft",
  "5.4-liter AMG V8, G55 AMG from the US 2003 model year: 349 hp per Consumer Guide and CarGurus, which disagree on whether this first engine was supercharged",
  "5.4-liter supercharged AMG V8, G55 AMG Kompressor from the US 2005 model year: 469 hp at 6,100 rpm and 516 lb-ft at 2,650 rpm",
  "5.5-liter V8, naturally aspirated, G550 from the US 2009 model year: 382 hp at 6,000 rpm and 391 lb-ft as listed for 2013 (CarGurus gives 392 hp)",
  "5.5-liter twin-turbocharged AMG V8, G63 AMG from the US 2013 model year: 536 hp at 5,250-5,750 rpm, with torque given as 560 lb-ft by Mercedes-Benz USA and 561 lb-ft by Edmunds"
 ],
 "productionTotal": null,
 "productionNotes": "No source consulted gives a production total for the W463 series, and none gives a count of cars sold new in the United States. What Mercedes-Benz publishes is a running total for every G-Class built since 1979, across the original W460 and W461 trucks as well as the W463: The Drive reported the 300,000th G-Class leaving the Graz line in July 2017, and the Mercedes-Benz G-Class site later celebrated 400,000. Neither figure separates the W463 from the other series, and subtracting one from the other gives an output rate for all series, not a W463 count, so no total is printed here. The only US-specific volume found is the launch allocation: Cars.com's preview of the first factory-imported truck stated that 1,500 units would be available in the United States by fall 2001 for the 2002 model year. How many trucks Europa International federalized before that is not stated by any source fetched. The start of the series is described in different terms: classic.com says the second generation was introduced in 1990, while the Mercedes-Benz G-Class site says the 463 series marked the beginning of an evolutionary process in 1989. The end of the US run is clearer: Mercedes-Benz dates the new generation to summer 2018, and CarGurus quotes a list price for the 2019 G550, which leaves 2018 as the last US model year of the W463. US list prices are documented for the 2002 G500 (two figures that differ, $72,500 and $73,165), and for the 2013 G550 and G63; a verbatim US list price for the G55 could not be retrieved from the sources fetched, so none is given. No marque registry publishes W463 data, and no period US road test of the G55 Kompressor could be fetched; the G55 figures rest on Edmunds' specification table and a Mercedes-Benz Canada release.",
 "notableTrims": [
  {
   "name": "Europa International gray-market imports (before 2002)",
   "note": "Federalized by the New Mexico importer Europa International rather than by Mercedes-Benz, starting with W463 models in limited numbers in 1993 and the G500 from 1998. Any two-door G or any truck built before 1999 in the US is one of these, per CarGurus."
  },
  {
   "name": "G500, 2002-2008 US model years",
   "note": "The first G sold through Mercedes-Benz dealers. A 5.0-liter V8, five-speed automatic, two-speed transfer case and three locking differentials. Cars.com reported a launch allocation of 1,500 trucks."
  },
  {
   "name": "G55 AMG, 2003-2004 US model years",
   "note": "The first AMG G for the US, with a 349 hp 5.4-liter V8. Sources disagree on whether this first engine was supercharged; Consumer Guide places the supercharger at 2005."
  },
  {
   "name": "G55 AMG Kompressor, 2005 onward",
   "note": "Supercharged 5.4-liter V8 at 469 hp and 516 lb-ft. As of November 2026 classic.com benchmarks it at $52,286 across 122 recorded sales; no classic.com benchmark was retrieved for the G500, G550 or G63."
  },
  {
   "name": "G550, 2009-2018 US model years",
   "note": "Replaced the G500 with a 5.5-liter V8. The 2013 truck gained the redesigned interior and a seven-speed automatic, and listed at about $113,000."
  },
  {
   "name": "G63 AMG, 2013-2018 US model years",
   "note": "Twin-turbocharged 5.5-liter V8 at 536 hp, seven-speed AMG Speedshift, a claimed 5.3 seconds to 60 mph, and an Edmunds-listed starting price of $134,300 for 2013."
  }
 ],
 "specs": {
  "layout": "Front-engine, full-time four-wheel drive with a two-speed transfer case",
  "chassis": "Separate fully boxed ladder-type frame with a steel body, assembled in Graz, Austria",
  "engine": "5.0-liter V8 (G500); 5.4-liter AMG V8, supercharged from 2005 (G55); 5.5-liter V8 (G550); 5.5-liter twin-turbo AMG V8 (G63)",
  "power": "G500 292 hp (Cars.com launch report: 300 hp); G55 349 hp, then 469 hp at 6,100 rpm; G550 382 hp at 6,000 rpm (CarGurus: 392 hp); G63 536 hp at 5,250-5,750 rpm",
  "torque": "G500 336 lb-ft (Cars.com: 330); G55 Kompressor 516 lb-ft at 2,650 rpm; G550 391 lb-ft; G63 560 lb-ft per Mercedes-Benz USA, 561 lb-ft per Edmunds",
  "transmission": "Five-speed automatic with Touchshift (G500, G55); seven-speed automatic with shift paddles (G550 and G63 from 2013)",
  "differentials": "Three locking differentials, front, center and rear, lockable while moving",
  "weight": "G500 nearly 5,500 lb (MotorWeek, 2002); G55 Kompressor 5,590 lb (Edmunds, 2005); 2013 G550 5,578 lb and G63 5,622 lb (Mercedes-Benz USA)",
  "acceleration": "2002 G500 0-60 mph 10.2 seconds (MotorWeek) against 7.9 seconds (Consumer Guide test); 2013 G550 6.0 seconds claimed, 6.6 seconds tested by Edmunds; 2013 G63 5.3 seconds claimed",
  "wheelbase": "112.2 in (2,850 mm), Edmunds, 2005 G55",
  "length": "185.6 in (4,714 mm), Edmunds, 2005 G55",
  "ground_clearance": "8.3 in (211 mm), Edmunds, 2005 G55",
  "fuel_economy": "2002 G500 EPA 13 mpg city and 15 highway (MotorWeek); 2005 G55 EPA 11 city and 13 highway (Edmunds)",
  "us_list_price": "2002 G500 $72,500 (Cars.com) or $73,165 (MotorWeek); 2013 G550 $113,000; 2013 G63 $134,300; G55 not documented here",
  "us_model_years": "2002 through 2018 for factory-imported trucks; earlier US trucks are Europa International or other gray-market imports"
 },
 "summary": "The W463 is the G-Class Mercedes-Benz finally brought to American dealers, after years in which the only way to buy one here was through Europa International, a New Mexico importer that federalized the trucks itself. Factory sales began with the 2002 G500, a 5.0-liter V8 on a separate ladder-type frame with a two-speed transfer case and three locking differentials; Cars.com reported a first allocation of 1,500 trucks. The G55 AMG followed for 2003 and became the supercharged 469 hp G55 Kompressor for 2005. For 2009 the G550 replaced the G500, and for 2013 the twin-turbo G63 AMG arrived with 536 hp alongside a redesigned interior, before the all-new truck of summer 2018 ended the run. No source publishes how many W463s were built or sold in the US, and the sources disagree on several basics, including the 2002 G500's output and price. As of November 2026 classic.com's market benchmark for the G55 AMG is $52,286 across 122 recorded sales; none was retrieved for the G500, G550 or G63. Cited workshop and forum sources report rust in the frame and undercarriage, wheel arches, door sills and hinges, and leaking transfer case seals.",
 "history": "## A military truck at the Mercedes dealer\n\nThe W463 began as a civilian refinement of a working truck. Autoblog's account traces it to examples Daimler first built for the Shah of Iran in 1979, and says the latest of those bowed in 1990. classic.com says Mercedes-Benz introduced the second generation in 1990, and the Mercedes-Benz G-Class site says the 463 series marked the beginning of an evolutionary process in 1989. The W463 kept the original's separate ladder frame, two-speed transfer case and three locking differentials while moving the cabin toward a road car. Through the 1990s Mercedes-Benz did not sell it in the United States, so American demand had to be met by someone else.\n\n## Europa International and the gray-market years\n\nThe gap was filled by importers. CarGurus records that Europa International, a New Mexico company, began selling W463 models here in limited numbers in 1993, and that its imports of the G500 from 1998 helped push Mercedes-Benz to certify the truck itself. Jalopnik describes Europa as spending millions of dollars revising G-Class models for US rules. In the US, any two-door G or any truck built before 1999 is a gray-market import.\n\n## The G500, 2002-2008\n\nFactory sales began with the 2002 model year. MotorWeek reported that the G-Class was available through the Mercedes-Benz dealer network for the first time in 2002, and Cars.com's preview stated that 1,500 units would reach the US by fall 2001. The two sources disagree on the opening price, $72,500 against $73,165, and on output: MotorWeek, Consumer Guide and Mercedes-Benz Canada give 292 hp and 336 lb-ft, while Cars.com gave 300 hp and 330 lb-ft. Power went through a five-speed automatic with Touchshift. MotorWeek's truck weighed nearly 5,500 lb and took 10.2 seconds to reach 60 mph; Consumer Guide's test G500 did it in 7.9 seconds. MotorWeek's tester carried an $1,800 chrome brush guard.\n\n## The G55 AMG\n\nConsumer Guide records a new high-performance model as the big news for the US 2003 model year: the G55 AMG, with a 349 hp 5.4-liter V8 and 51 lb-ft more torque than the G500. CarGurus calls that first engine supercharged; Consumer Guide places the supercharger at 2005, when the G55 rose to 469 hp. Edmunds lists the 2005 G55 at 469 hp at 6,100 rpm and 516 lb-ft at 2,650 rpm, at 5,590 lb, with EPA ratings of 11 mpg city and 13 highway. Consumer Guide also records a factory claim of 7.2 seconds to 60 mph for the G55 without saying which engine it applied to. The G63 AMG joined the lineup for 2013.\n\n## The G550 and G63, 2009-2018\n\nFor 2009 the G500 gave way to the G550 and its 5.5-liter V8, listed by Mercedes-Benz USA at 382 hp for 2013. The 2013 model year brought a redesigned interior and the G63 AMG, a twin-turbo 5.5-liter V8 at 536 hp through a seven-speed AMG Speedshift. Mercedes-Benz USA claimed 6.0 seconds to 60 mph for the G550 and 5.3 for the G63; Edmunds tested a G550 at 6.6 seconds. Autoblog found the steering slow and the doors shutting with old-school Mercedes-Benz precision. Mercedes-Benz built the 300,000th G-Class of all series in Graz in 2017, and the new generation began in summer 2018, which made 2018 the last US model year of the W463.",
 "marketNotes": "As of November 2026 classic.com's market benchmark for the W463 G55 AMG is $52,286, with an average of $53,443 across 122 recorded sales. classic.com also benchmarks individual G55 model years: as of November 2026 its figure is $50,962 for a 2003 G55 and $51,130 for a 2012 G55, so classic.com values the first and last G55 model years at nearly the same figure. A classic.com benchmark was retrieved for the G55 and not for the G500, G550 or G63, so this page carries no recorded-sale benchmark for those three. classic.com's individual G55 sale listings were not used, because the pages fetched did not show a location or currency for them, or showed sales outside the US in other currencies. CarGurus' buying guide, read in November 2026, puts good early US trucks at roughly $40,000 to $50,000, W463 G63s at about $75,000 to $125,000 used, and an older imported G at a minimum of $25,000. Those are editorial ranges from one source, not recorded sales. For comparison with the sticker, Cars.com and MotorWeek give $72,500 and $73,165 for the 2002 G500, and Edmunds and Autoblog give $113,000 for the 2013 G550, with Edmunds listing the 2013 G63 from $134,300.",
 "whatToLookFor": "Factory trucks sold through Mercedes-Benz dealers begin with the 2002 G500. A two-door body, or a truck built before 1999, is a gray-market import, and on those trucks the federalization work was done by an importer such as Europa International rather than by the factory. The specialist workshop and owner forum sources cited here report rust in the frame and suspension mounts, the wheel arches and fender wells, the door sills and hinges, the rear bumper and spare tire mount, where standing water bubbles the paint, and the windshield frame; one owner of a 2014 G550 describes windshield frame rust and bubbling on the left rear quarter next to the tailgate, and pulling the glass to treat corrosion from behind. The specialist reports tie the frame rust to road salt and moisture. In the drivetrain, the cited workshop articles report transfer case seal leaks on both the G500 and the G55, which they say lead to drivetrain noise and failure if left unchecked. On a G500, valve cover, crankshaft seal and oil pan leaks and fluid weeping from the transmission electrical connector are the known faults. On a G55 Kompressor, a whining supercharger points to worn bearings, and a slipping belt to a failing tensioner. Electrical faults are common across the run, and CarGurus singles out the 2002 through 2005 trucks for the most complaints: battery drain, door lock actuators and window regulators. NHTSA campaign 12V380000 covered a loose molding strip near the airbag on 189 trucks from the 2011 model year, with a dealer repair as the remedy.",
 "commonProblems": "Rust is the structural issue. Specialist writing on both the G500 and the G55 describes frame and undercarriage corrosion near welds and suspension mounts, rust at door hinges and wheel arches, and water collecting at the rear spare tire mount; an owner forum adds the windshield frame and the rear quarter beside the tailgate on a 2014 G550. The transfer case is the drivetrain weak point most often named, through worn internal seals and fluid leaks. On the G500's V8 the valve cover gaskets leak onto the exhaust manifold, and the front crankshaft seal and oil pan gasket follow; the five-speed automatic can leak at its electrical connector and shift harshly from a worn valve body. The G55 Kompressor adds supercharger bearing wear, belt tensioner failure and clogged catalytic converters. Electrical complaints run through every year, with CarGurus naming the 2002 through 2005 trucks as the most complained about: battery drain, alternators, door lock actuators and power window regulators. The NHTSA record for this generation is light. Campaign 12V380000 covered 189 model year 2011 G550 and G55 trucks built from September 20, 2010 through April 27, 2011, whose molding strip at the airbag cover could come loose, and campaign 22V168000 covered 22 vehicles across several models, including the 2014 G550, whose control units may have been given incorrect software during service. No US dollar repair costs from a US source were found, so none are given.",
 "valueTrajectory": "The documented arc runs from a $72,500 or $73,165 sticker for the 2002 G500, and about $113,000 for the 2013 G550, to a G55 market that, as of November 2026, classic.com benchmarks at $52,286 with an average of $53,443 across 122 recorded sales. That benchmark is close to flat across the G55's life: $50,962 for a 2003 truck and $51,130 for a 2012 truck, so on classic.com's figures the model year moves the value of a G55 very little. For the other variants this page has only CarGurus' editorial ranges, roughly $40,000 to $50,000 for good early US trucks and about $75,000 to $125,000 for W463 G63s, which sit above the G55 benchmark. CarGurus lists the 2019 G550 that replaced the W463 at $125,000 new and puts a good one today at no less than $90,000. Gray-market Europa trucks sit on a separate, thinner market for which CarGurus gives only a $25,000 minimum, and no recorded US sale of one was retrieved for this page.",
 "overallConfidence": "medium",
 "sources": [
  {
   "ref": "carscom-2002",
   "title": "2002 Mercedes-Benz G-Class: What's New",
   "url": "https://www.cars.com/articles/2002-mercedes-benz-g-class-whats-new-1420687124084",
   "publisher": "Cars.com",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Launch preview of the first factory-imported G500: 1,500 units available in the US by fall 2001, sticker price $72,500, 5.0-liter V8 at 300 hp and 330 lb-ft (other sources give 292 and 336), five-speed automatic and full-time four-wheel drive."
  },
  {
   "ref": "motorweek-2002",
   "title": "2002 Mercedes-Benz G500 Program #2122",
   "url": "https://motorweek.org/road_tests/2002_mercedes-benz_g500_program_2122",
   "publisher": "MotorWeek",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "US period road test: first availability through Mercedes-Benz dealers in 2002, base price $73,165, tester $74,965 with $1,800 chrome brush guard, 292 hp and 336 lb-ft, 0-60 mph in 10.2 seconds, nearly 5,500 lb, EPA 13 city and 15 highway, five-speed automatic with Touchshift, three locking differentials."
  },
  {
   "ref": "consumerguide-2002-06",
   "title": "2002-06 Mercedes-Benz G-Class",
   "url": "https://consumerguide.com/used/2002-06-mercedes-benz-g-class",
   "publisher": "Consumer Guide Automotive",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "US model-year narrative: G-Class added to the US line for 2002, G500 292 hp, G55 AMG new for 2003 with 349 hp and 51 lb-ft more torque, 469 hp supercharged G55 for 2005, factory 7.2 second 0-60 claim for the G55, test G500 at 7.9 seconds and 13 mpg, five-speed automatic on both models."
  },
  {
   "ref": "thedrive-300k",
   "title": "The 300,000th Mercedes-Benz G-Wagen Just Rolled Off the Production Line",
   "url": "https://www.thedrive.com/article/12703/the-300000th-mercedes-benz-g-wagen-just-rolled-off-the-production-line",
   "publisher": "The Drive",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "July 2017 report that the 300,000th G-Class, counting all series since 1979, left the line in Graz, Austria, and that Magna Steyr would continue to build it. No W463-only or US figure."
  },
  {
   "ref": "mb-gclass-400k",
   "title": "Production record G-Class",
   "url": "https://g-class.mercedes-benz.com/en/news/2021/production-record-g-class.html",
   "publisher": "Mercedes-Benz AG",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Manufacturer page on the 400,000th G-Class, all series since 1979; dates the 463 series to 1989 and the start of the new G-Class run to summer 2018; production in Graz with Magna Steyr. No W463 or US breakdown."
  },
  {
   "ref": "classic-w463",
   "title": "Mercedes-Benz G - W463 Pre-Facelift Market",
   "url": "https://www.classic.com/m/mercedes-benz/g/w463?page=5",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "Generation page dating the W463 to 1990 and listing the G 500, G 550 and G 63 AMG variants; market statistics did not load in November 2026, so no W463-wide benchmark is cited."
  },
  {
   "ref": "classic-g55",
   "title": "Mercedes-Benz G55 AMG - W463 Market",
   "url": "https://www.classic.com/m/mercedes-benz/g/w463/g-55-amg/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of November 2026: G55 AMG CMB $52,286, average $53,443, 122 recorded sales; its lowest and top sale figures are not used because the lowest was a Canadian sale of unconfirmed currency and the top sale had no listing on the page; describes the G55 as introduced in 2000 and the market range as 2000 to 2012."
  },
  {
   "ref": "classic-g55-2003",
   "title": "Mercedes-Benz G55 AMG - W463, 2003 Market",
   "url": "https://www.classic.com/m/mercedes-benz/g/w463/g-55-amg/year-2003/?page=2",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of November 2026: 2003 G55 CMB $50,962. Individual 2003 sales on the page show no location or currency and are not used."
  },
  {
   "ref": "classic-g55-2012",
   "title": "Mercedes-Benz G55 AMG - W463, 2012 Market",
   "url": "https://www.classic.com/m/mercedes-benz/g/w463/g-55-amg/year-2012",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of November 2026: 2012 G55 CMB $51,130. The only recorded 2012 sales on the page were in pounds and Swiss francs outside the US and are not used."
  },
  {
   "ref": "edmunds-2013",
   "title": "Used 2013 Mercedes-Benz G-Class G63 AMG Review",
   "url": "https://www.edmunds.com/mercedes-benz/g-class/2013/g63-amg/st-200442512/used/review/",
   "publisher": "Edmunds",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "US 2013 model year: G550 382 hp and 391 lb-ft, G63 536 hp and 561 lb-ft, seven-speed automatic only, Edmunds-tested G550 0-60 mph in 6.6 seconds at 5,500 lb, G63 claimed 5.3 seconds, G550 about $113,000 including destination, G63 from $134,300, new G63 and redesigned interior for 2013."
  },
  {
   "ref": "mbusa-2013-brochure",
   "title": "2013 G-Class brochure",
   "url": "https://www.mbusa.com/vcm/MB/DigitalAssets/pdfmb/brochures/2013-G-Class.pdf",
   "publisher": "Mercedes-Benz USA",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "US brochure: G550 382 hp at 6,000 rpm and 391 lb-ft; G63 536 hp at 5,250-5,750 rpm and 560 lb-ft; seven-speed automatics; G550 6.0 second and G63 5.3 second 0-60 mph claims; curb weights 5,578 lb and 5,622 lb; three lockable differentials; two-speed transfer case; fully boxed ladder-type frame; built almost entirely by hand in Graz."
  },
  {
   "ref": "autoblog-2013-g550",
   "title": "2013 Mercedes-Benz G550 Reviewed",
   "url": "https://www.autoblog.com/reviews/2013-mercedes-benz-g550-review",
   "publisher": "Autoblog",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "US road test of a 2013 G550: $113,000 plus $950 destination, $118,355 as tested, 382 hp and 391 lb-ft, 5,578 lb, about six seconds to 60 mph, slow steering, precise door shut; says Daimler first built examples for the Shah of Iran in 1979 and that the latest of those bowed in 1990, without naming the W463."
  },
  {
   "ref": "mbcanada-2006",
   "title": "Mercedes-Benz G-Class Delivers The Ultimate In Rugged Off-Road Capability",
   "url": "https://media.mercedes-benz.ca/releases/release-7319be5f470552d851b399858200056e-mercedes-benz-g-class-delivers-the-ultimate-in-rugged-off-road-capability",
   "publisher": "Mercedes-Benz Canada",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Manufacturer release for the 2006 model year: G500 292 hp and 336 lb-ft, G55 AMG 469 hp and 516 lb-ft, two-speed transfer case with electronically controlled ranges, three differentials lockable on the move, handcrafted in Graz. Canadian release; used for specification only, not price."
  },
  {
   "ref": "edmunds-2005-g55",
   "title": "Used 2005 Mercedes-Benz G-Class G55 AMG Features & Specs",
   "url": "https://www.edmunds.com/mercedes-benz/g-class/2005/st-100487231/features-specs",
   "publisher": "Edmunds",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "US specification table for the 2005 G55 AMG: 469 hp at 6,100 rpm, 516 lb-ft at 2,650 rpm, 5.4-liter V8, five-speed automatic, curb weight 5,590 lb, EPA 11 city and 13 highway, ground clearance 8.3 in, wheelbase 112.2 in, length 185.6 in. No MSRP returned."
  },
  {
   "ref": "jalopnik-europa",
   "title": "At $32,000, Is This 2000 Mercedes G500 'Europa' A Boxy Bargain?",
   "url": "https://jalopnik.com/at-32-000-is-this-2000-mercedes-g500-a-boxy-bargain-1851582344",
   "publisher": "Jalopnik",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Establishes that pre-2002 US trucks were federalized and sold by the importer Europa International, which spent millions of dollars revising G-Class models, and that Mercedes did not offer the G officially until 2002. Its asking price is not used."
  },
  {
   "ref": "cargurus-guide",
   "title": "Mercedes-Benz G-Class Buying Guide: Cost, Reliability, and the Best Years to Buy",
   "url": "https://cargurus.com/Cars/articles/mercedes-benz-g-class-buying-guide",
   "publisher": "CarGurus",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Europa International as a New Mexico importer from 1993, G500 imports from 1998, pre-1999 and two-door trucks as gray market, first official US models in 2002; G55 349 hp (called supercharged) then 469 hp; G550 for 2009 at 392 hp; G63 536 hp; 2002-2005 trucks the most complained about; editorial used-price ranges; 2019 G550 list price."
  },
  {
   "ref": "euroauto-g500",
   "title": "Common Problems of Mercedes G-Class W463 G 500",
   "url": "https://www.euroautopro.com.au/post/common-problems-of-mercedes-g-class-w463-g-500-updated",
   "publisher": "Euro Auto Pro",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Australian specialist workshop article on the W463 G500: rust at frame and suspension mounts, wheel arches, door sills and hinges, rear bumper and spare tire mount; transfer case leaks; valve cover, crankshaft seal and oil pan leaks; transmission connector leak and valve body; battery drain, door lock actuators and window regulators. Used for fault patterns only, not cost."
  },
  {
   "ref": "euroauto-g55",
   "title": "Common Problems of Mercedes G-Class W463 G 55 AMG Kompressor",
   "url": "https://www.euroautopro.com.au/post/common-problems-of-mercedes-g-class-w463-g-55-amg-kompressor",
   "publisher": "Euro Auto Pro",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Same Australian workshop on the G55 Kompressor: frame and undercarriage rust near welds and suspension mounts, door hinge and wheel arch corrosion, spare tire mount paint bubbling, transfer case seal leaks, supercharger bearing and belt tensioner failure, catalytic converter clogging, electrical faults. Not independent of euroauto-g500."
  },
  {
   "ref": "mbworld-windshield-rust",
   "title": "Windshield replacement and rust repair, NYC metro",
   "url": "https://mbworld.org/forums/g-class-w460-w461-w463/928028-windshield-replacement-rust-repair-nyc-metro.html",
   "publisher": "MBWorld forum",
   "sourceType": "club-forum",
   "reliability": "low",
   "notes": "US owner thread on a 2014 G550 with localized windshield frame rust and bubbling on the left rear quarter beside the tailgate, and a repair plan of removing the glass to treat corrosion behind it. Supports a fault pattern only."
  },
  {
   "ref": "nhtsa-12v380000",
   "title": "Mercedes Benz G550 2011: Structure, recall 12V380000",
   "url": "https://auto-recalls.justia.com/mercedes-benz/g550/2011/12v380000",
   "publisher": "Justia, reproducing NHTSA recall data",
   "sourceType": "government",
   "reliability": "medium",
   "notes": "NHTSA campaign 12V380000: model year 2011 G550 and G55 AMG built September 20, 2010 through April 27, 2011, 189 units, molding strip at the airbag cover flap could come loose; dealer remedy free of charge."
  },
  {
   "ref": "nhtsa-22v168000",
   "title": "Mercedes Benz G550 2014: Lighting control module software, recall 22V168000",
   "url": "https://auto-recalls.justia.com/mercedes-benz/g550/2014/22v168000",
   "publisher": "Justia, reproducing NHTSA recall data",
   "sourceType": "government",
   "reliability": "medium",
   "notes": "NHTSA campaign 22V168000: 22 vehicles across several models including the 2014 G550, control units given incorrect software configuration during service repair; remedy a software update."
  }
 ],
 "claims": [
  {
   "section": "history",
   "claimText": "Autoblog says Daimler first began building examples for the Shah of Iran in 1979 and that the latest of those bowed in 1990; classic.com says Mercedes-Benz introduced the second generation of the G-Class in 1990; the Mercedes-Benz G-Class site says the model series 463 marked the beginning of an evolutionary process in 1989.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["autoblog-2013-g550", "classic-w463", "mb-gclass-400k"],
   "evidence": [
    { "ref": "autoblog-2013-g550", "quote": "since Daimler first began building examples for the Shah of Iran in 1979, and the latest of those bowed in 1990" },
    { "ref": "classic-w463", "quote": "In 1990, Mercedes-Benz introduced the second generation of their G-Class SUV." },
    { "ref": "mb-gclass-400k", "quote": "In 1989 the vehicles of the model series 463 marked the beginning of an evolutionary process." }
   ]
  },
  {
   "section": "history",
   "claimText": "Before factory sales, W463s reached the US through Europa International, a New Mexico importer that began selling them in limited numbers in 1993 and imported the G500 from 1998; Mercedes-Benz did not offer the G officially until 2002, and any two-door or pre-1999 truck is a gray-market import.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["cargurus-guide", "jalopnik-europa"],
   "evidence": [
    { "ref": "cargurus-guide", "quote": "a New Mexico-based importer, Europa International, began selling the W463 models here in limited numbers in 1993" },
    { "ref": "cargurus-guide", "quote": "If you're looking at a two-door model or any G-Wagen built before 1999, it's a gray market import." },
    { "ref": "jalopnik-europa", "quote": "it would take until 2002 for Mercedes to federalize the G-Class and offer it here officially." },
    { "ref": "jalopnik-europa", "quote": "Europa International made a go of it for years, spending millions of dollars on revising G-Class models." }
   ]
  },
  {
   "section": "history",
   "claimText": "The G-Class was sold through the Mercedes-Benz dealer network for the first time for the 2002 model year, and Cars.com's preview stated that 1,500 units would be available in the United States by fall 2001.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["motorweek-2002", "consumerguide-2002-06", "carscom-2002"],
   "evidence": [
    { "ref": "motorweek-2002", "quote": "The G-Class is available through the Mercedes- Benz dealer network for the first time in 2002." },
    { "ref": "consumerguide-2002-06", "quote": "Mercedes added a second SUV to its U.S. line for 2002." },
    { "ref": "carscom-2002", "quote": "Only 1,500 units will be available in the United States by fall 2001, with a sticker price of $72,500." }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 2002 G500's US price is given as a $72,500 sticker by Cars.com and a $73,165 base price by MotorWeek, whose tester came to $74,965 with an $1,800 chrome brush guard.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["carscom-2002", "motorweek-2002"],
   "conflictNote": "Cars.com's launch preview gives a sticker price of $72,500. MotorWeek's road test gives a base price of $73,165. Neither says whether its figure includes destination, and the difference is not resolved by any source consulted here.",
   "evidence": [
    { "ref": "carscom-2002", "quote": "Only 1,500 units will be available in the United States by fall 2001, with a sticker price of $72,500." },
    { "ref": "motorweek-2002", "quote": "Well it won't be quite that expensive, but base price is still a hefty $73,165." },
    { "ref": "motorweek-2002", "quote": "Our tester, with the optional and way pricey $1,800 chrome brush guard, rang up to $74,965." }
   ]
  },
  {
   "section": "specs",
   "claimText": "The G500's 5.0-liter V8 is rated at 292 hp and 336 lb-ft by MotorWeek, Consumer Guide and Mercedes-Benz Canada, while Cars.com's 2002 launch report gave 300 hp and 330 lb-ft.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["motorweek-2002", "consumerguide-2002-06", "mbcanada-2006", "carscom-2002"],
   "conflictNote": "MotorWeek (2002 road test), Consumer Guide and Mercedes-Benz Canada (2006 release) give 292 hp, and MotorWeek and Mercedes-Benz Canada give 336 lb-ft. Cars.com's preview gives 300 hp and 330 lb-ft. The preview predates the test, but no source explains the difference, and it is unresolved here.",
   "evidence": [
    { "ref": "motorweek-2002", "quote": "produces 292 horsepower and 336 pound-feet of torque." },
    { "ref": "consumerguide-2002-06", "quote": "In the regular G500, a 5.0-liter V8 engine produced 292 horsepower" },
    { "ref": "mbcanada-2006", "quote": "While the 5.0-litre V8 in the G500 produces 292 hp and 336 lb-ft. of torque" },
    { "ref": "carscom-2002", "quote": "the all-aluminum, 5.0-liter V-8 produces 300 horsepower and 330 pounds-feet of torque." }
   ]
  },
  {
   "section": "specs",
   "claimText": "MotorWeek recorded 0-60 mph in 10.2 seconds in its 2002 G500, a truck of nearly 5,500 lb, while Consumer Guide's test G500 reached 60 mph in 7.9 seconds.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["motorweek-2002", "consumerguide-2002-06"],
   "conflictNote": "MotorWeek gives 10.2 seconds to 60 mph for its 2002 G500. Consumer Guide gives 7.9 seconds for a test G500. Neither describes test conditions that would explain the gap, and it is unresolved here.",
   "evidence": [
    { "ref": "motorweek-2002", "quote": "Mash that pedal to the German metal floor, and 60 MPH comes up in 10.2 seconds." },
    { "ref": "motorweek-2002", "quote": "Not too shabby for a nearly 5,500 pound truck." },
    { "ref": "consumerguide-2002-06", "quote": "A test G500 clocked a respectable 7.9 seconds for that feat" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The G500 and G55 used a five-speed automatic with Touchshift, a two-speed transfer case with electronically controlled high and low ranges, and three differentials, front, center and rear, that can be locked while the vehicle is moving; MotorWeek lists the 2002 G500 at EPA 13 mpg city and 15 highway.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["motorweek-2002", "consumerguide-2002-06", "mbcanada-2006"],
   "evidence": [
    { "ref": "motorweek-2002", "quote": "5-speed automatic transmission with Touchshift for manual shifting." },
    { "ref": "motorweek-2002", "quote": "Because the G500 is also outfitted with three locking differentials at the front, center, and rear." },
    { "ref": "motorweek-2002", "quote": "EPA Mileage: 13 MPG City 15 MPG Highway" },
    { "ref": "consumerguide-2002-06", "quote": "Like Mercedes' U.S.-built M-Class SUVs, both G-Wagens had a five-speed automatic transmission." },
    { "ref": "mbcanada-2006", "quote": "which includes a two-speed transfer case with electronically controlled high and low ranges" },
    { "ref": "mbcanada-2006", "quote": "all of which can be locked for off-road use while the vehicle is in motion" }
   ]
  },
  {
   "section": "history",
   "claimText": "The G55 AMG arrived in the US for 2003 with a 349 hp 5.4-liter V8; Consumer Guide says it carried 51 lb-ft more torque than the G500 and places the supercharger at 2005, while CarGurus describes the 349 hp engine itself as supercharged; Consumer Guide also records a factory claim of 7.2 seconds to 60 mph for the G55 without naming the engine.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["consumerguide-2002-06", "cargurus-guide"],
   "conflictNote": "Consumer Guide gives the first G55 a 349 hp 5.4-liter V8 and describes the 469 hp supercharged engine as the 2005 change. CarGurus calls the 349 hp engine supercharged. The CarGurus sentence gives no model-year range for the 349 hp engine. Both agree on 349 hp and on the later 469 hp; the aspiration of the first engine is not resolved by any source consulted here.",
   "evidence": [
    { "ref": "consumerguide-2002-06", "quote": "with a 349-horsepower 5.4-liter V8 and an extra 51 pound-feet of torque." },
    { "ref": "consumerguide-2002-06", "quote": "A new high-performance model was the big news for this European-sourced SUV." },
    { "ref": "consumerguide-2002-06", "quote": "The G55 from Mercedes' AMG performance division has a 469-hp supercharged 5.4-liter V8." },
    { "ref": "consumerguide-2002-06", "quote": "Mercedes claimed that the G55 accelerated to 60 mph in just 7.2 seconds." },
    { "ref": "cargurus-guide", "quote": "The AMG G55 used a supercharged 5.4-liter, 349-horsepower V8, though it was soon upgraded to 469 horses" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The supercharged G55 AMG produces 469 hp at 6,100 rpm and 516 lb-ft at 2,650 rpm, and Edmunds lists the 2005 truck at a curb weight of 5,590 lb with EPA ratings of 11 mpg city and 13 highway.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["edmunds-2005-g55", "mbcanada-2006"],
   "evidence": [
    { "ref": "edmunds-2005-g55", "quote": "Horsepower | 469 hp @ 6,100 rpm" },
    { "ref": "edmunds-2005-g55", "quote": "Torque | 516 lb-ft @ 2,650 rpm" },
    { "ref": "edmunds-2005-g55", "quote": "Curb weight | 5,590 lbs." },
    { "ref": "edmunds-2005-g55", "quote": "EPA city/highway MPG | 11/13 MPG" },
    { "ref": "mbcanada-2006", "quote": "the G55 AMG engine produces 469 horsepower and 516 lb-ft. of peak torque" }
   ]
  },
  {
   "section": "specs",
   "claimText": "Edmunds lists the 2005 G55 at a wheelbase of 112.2 in, a length of 185.6 in and ground clearance of 8.3 in; these dimensions are single-sourced.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["edmunds-2005-g55"],
   "evidence": [
    { "ref": "edmunds-2005-g55", "quote": "Wheelbase | 112.2 in." },
    { "ref": "edmunds-2005-g55", "quote": "Length | 185.6 in." },
    { "ref": "edmunds-2005-g55", "quote": "Ground clearance | 8.3 in." }
   ]
  },
  {
   "section": "specs",
   "claimText": "The G550 replaced the G500 for 2009 with a 5.5-liter V8; Mercedes-Benz USA, Edmunds and Autoblog give 382 hp and 391 lb-ft for the 2013 truck, while CarGurus gives 392 hp.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["cargurus-guide", "mbusa-2013-brochure", "edmunds-2013", "autoblog-2013-g550"],
   "conflictNote": "Mercedes-Benz USA's 2013 brochure gives 382 hp at 6,000 rpm, and Edmunds and Autoblog give 382 hp and 391 lb-ft. CarGurus gives 392 hp for the G550 from 2009. No source describes an output change between 2009 and 2013, and the difference is unresolved here.",
   "evidence": [
    { "ref": "cargurus-guide", "quote": "In 2009, the G500 gave way to the G550, now with a 392-horsepower 5.5-liter V8" },
    { "ref": "mbusa-2013-brochure", "quote": "382 hp @ 6,000 rpm" },
    { "ref": "edmunds-2013", "quote": "Powering the 2013 Mercedes-Benz G550 is a 5.5-liter V8 that produces 382 hp and 391 pound-feet of torque." },
    { "ref": "autoblog-2013-g550", "quote": "382 horsepower and 391 pound-feet of torque." }
   ]
  },
  {
   "section": "specs",
   "claimText": "Mercedes-Benz USA claimed 6.0 seconds to 60 mph for the 2013 G550 and listed its curb weight at 5,578 lb, with 5,622 lb for the G63; Edmunds tested a G550 at 6.6 seconds and Autoblog at around six seconds.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["mbusa-2013-brochure", "edmunds-2013", "autoblog-2013-g550"],
   "evidence": [
    { "ref": "mbusa-2013-brochure", "quote": "a 6.0-second rush from 0 to 60 mph." },
    { "ref": "mbusa-2013-brochure", "quote": "Curb weight 5,578 lbs 5,622 lbs" },
    { "ref": "edmunds-2013", "quote": "In Edmunds testing, the 5,500-pound G550 accelerated from zero to 60 mph in a surprisingly quick 6.6 seconds." },
    { "ref": "autoblog-2013-g550", "quote": "launch this 5,578-pound box to 60 miles per hour in around six seconds." }
   ]
  },
  {
   "section": "specs",
   "claimText": "The G63 AMG arrived for 2013 with a twin-turbocharged 5.5-liter V8 rated at 536 hp and a claimed 5.3 seconds to 60 mph; Mercedes-Benz USA gives its torque as 560 lb-ft and Edmunds as 561 lb-ft.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["mbusa-2013-brochure", "edmunds-2013", "cargurus-guide"],
   "conflictNote": "Mercedes-Benz USA's 2013 brochure gives 560 lb-ft. Edmunds gives 561 lb-ft. All three sources agree on 536 hp. The one lb-ft difference is unresolved by any source consulted here.",
   "evidence": [
    { "ref": "mbusa-2013-brochure", "quote": "560 lb-ft net torque" },
    { "ref": "mbusa-2013-brochure", "quote": "60 mph arrives in just 5.3 seconds." },
    { "ref": "edmunds-2013", "quote": "The G63 AMG receives a pair of turbochargers that boost output to 536 hp and 561 lb-ft of torque." },
    { "ref": "cargurus-guide", "quote": "The new AMG G63 packed a twin-turbo 536-horsepower version of the 5.5-liter V8" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 2013 G550 listed at $113,000, which Edmunds describes as including destination and Autoblog as before a $950 destination fee; Autoblog's tester came to $118,355, and Edmunds lists the 2013 G63 from $134,300.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["edmunds-2013", "autoblog-2013-g550"],
   "conflictNote": "Edmunds gives about $113,000 including the destination charge. Autoblog gives $113,000 plus a $950 destination fee. Whether destination is inside the figure is unresolved by any source consulted here.",
   "evidence": [
    { "ref": "edmunds-2013", "quote": "Including destination charge, it arrives with a Manufacturer's Suggested Retail Price (MSRP) of about $113,000." },
    { "ref": "edmunds-2013", "quote": "G63 AMG 4dr SUV 4WD (5.5L 8cyl Turbo 7A) which starts at $134,300" },
    { "ref": "autoblog-2013-g550", "quote": "The 2013 Mercedes-Benz G550 starts at $113,000, plus a $950 destination fee." },
    { "ref": "autoblog-2013-g550", "quote": "a heated steering wheel bumped the final price tag up to $118,355." }
   ]
  },
  {
   "section": "history",
   "claimText": "For 2013 the G-Class gained a redesigned interior and a seven-speed automatic as its only transmission, while keeping three lockable differentials, a two-speed transfer case and a fully boxed ladder-type frame, built almost entirely by hand in Graz, Austria.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["edmunds-2013", "mbusa-2013-brochure", "mbcanada-2006"],
   "evidence": [
    { "ref": "edmunds-2013", "quote": "Additionally, the interior gets a makeover, with updated electronics and more safety-related features." },
    { "ref": "edmunds-2013", "quote": "The only available transmission is a seven-speed automatic that sends power to all four wheels." },
    { "ref": "mbusa-2013-brochure", "quote": "every G-Class is crafted virtually entirely by hand in Graz, Austria." },
    { "ref": "mbusa-2013-brochure", "quote": "fully boxed ladder-type frame" },
    { "ref": "mbcanada-2006", "quote": "Handcrafted at a special manufacturing facility in Graz, Austria" }
   ]
  },
  {
   "section": "history",
   "claimText": "Autoblog found the 2013 G550's steering slow and its doors shutting with old-school Mercedes-Benz precision.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["autoblog-2013-g550"],
   "evidence": [
    { "ref": "autoblog-2013-g550", "quote": "The steering is slow." },
    { "ref": "autoblog-2013-g550", "quote": "shut with old-school Mercedes-Benz precision." }
   ]
  },
  {
   "section": "production",
   "claimText": "Mercedes-Benz publishes only running totals for every G-Class built since 1979, across all series: the 300,000th left the Graz line in 2017, with Magna Steyr continuing production, and the company later marked 400,000; no W463-only or US total is published.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["thedrive-300k", "mb-gclass-400k"],
   "evidence": [
    { "ref": "thedrive-300k", "quote": "The 300,000th model just rolled off the assembly line in Graz, Austria" },
    { "ref": "thedrive-300k", "quote": "Mercedes associate Magna Steyr will keep on manufacturing the majorly-successful SUV." },
    { "ref": "mb-gclass-400k", "quote": "We are so proud to have produced 400,000 of these off-road vehicles." },
    { "ref": "mb-gclass-400k", "quote": "The G-Class has been manufactured since 1979," }
   ]
  },
  {
   "section": "production",
   "claimText": "The new generation of the G-Class began in summer 2018, and CarGurus quotes a list price for the 2019 G550, leaving 2018 as the last US model year of the W463.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["mb-gclass-400k", "cargurus-guide"],
   "evidence": [
    { "ref": "mb-gclass-400k", "quote": "The new run of the G-Class started in top form in summer 2018." },
    { "ref": "cargurus-guide", "quote": "In 2019, the standard G550 listed for $125,000, and you won't find one in good condition today for less than $90,000." }
   ]
  },
  {
   "section": "market",
   "claimText": "As of November 2026 classic.com's market benchmark for the W463 G55 AMG is $52,286, with an average of $53,443 across 122 recorded sales.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["classic-g55"],
   "evidence": [
    { "ref": "classic-g55", "quote": "CMB $52,286" },
    { "ref": "classic-g55", "quote": "Avg $53,443" },
    { "ref": "classic-g55", "quote": "Sales Count 122" }
   ]
  },
  {
   "section": "market",
   "claimText": "As of November 2026 classic.com benchmarks the 2003 G55 at $50,962 and the 2012 G55 at $51,130.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["classic-g55-2003", "classic-g55-2012"],
   "evidence": [
    { "ref": "classic-g55-2003", "quote": "CMB $50,962" },
    { "ref": "classic-g55-2012", "quote": "CMB $51,130" }
   ]
  },
  {
   "section": "market",
   "claimText": "CarGurus' buying guide, read in November 2026, puts good early US G-Class trucks at roughly $40,000 to $50,000, W463 G63s at about $75,000 to $125,000 used, and an older imported G at a minimum of $25,000; these are editorial ranges from one source.",
   "confidence": "low",
   "status": "verified",
   "sourceRefs": ["cargurus-guide"],
   "evidence": [
    { "ref": "cargurus-guide", "quote": "good examples cost roughly $40,000 to $50,000" },
    { "ref": "cargurus-guide", "quote": "G63 models range from about $75,000 to $125,000 used" },
    { "ref": "cargurus-guide", "quote": "Expect to pay a minimum of $25,000 for an older imported G-Wagen" }
   ]
  },
  {
   "section": "problems",
   "claimText": "Rust on the W463 is reported in the frame and undercarriage near welds and suspension mounts, at wheel arches, door sills and hinges, at the rear bumper and spare tire mount, and at the windshield frame and rear quarter of a 2014 G550.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["euroauto-g500", "euroauto-g55", "mbworld-windshield-rust"],
   "evidence": [
    { "ref": "euroauto-g500", "quote": "The G 500's frame and undercarriage are particularly vulnerable to rust, primarily due to exposure to road salt and moisture." },
    { "ref": "euroauto-g55", "quote": "The frame and undercarriage are susceptible to rust, especially near welds and suspension mounts." },
    { "ref": "euroauto-g55", "quote": "Water accumulation in the rear spare tire mount area leads to paint bubbling and corrosion." },
    { "ref": "mbworld-windshield-rust", "quote": "localized windshield frame rust and early bubbling on the left rear quarter/fender area next to the tailgate" }
   ]
  },
  {
   "section": "problems",
   "claimText": "Transfer case seal leaks are the drivetrain fault most often named for the W463, reported by one specialist workshop on both the G500 and the G55; the two articles share a publisher and are not independent.",
   "confidence": "low",
   "status": "verified",
   "sourceRefs": ["euroauto-g500", "euroauto-g55"],
   "evidence": [
    { "ref": "euroauto-g500", "quote": "Owners often report transfer case leaks, which can cause drivetrain noise and failure if left unchecked." },
    { "ref": "euroauto-g55", "quote": "The seals inside the transfer case wear out, leading to fluid leaks." }
   ]
  },
  {
   "section": "problems",
   "claimText": "CarGurus names the 2002 through 2005 US trucks as generating the most complaints, mostly electrical, and specialist writing lists battery drain, door lock actuator failures and broken window regulators.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["cargurus-guide", "euroauto-g500"],
   "evidence": [
    { "ref": "cargurus-guide", "quote": "2002 through 2005 versions seem to generate the most complaints, mostly concerning electrical issues" },
    { "ref": "euroauto-g500", "quote": "Additionally, door lock actuators can fail, preventing the doors from locking or unlocking." },
    { "ref": "euroauto-g500", "quote": "One of the most frustrating issues reported by G 500 owners is battery drain." }
   ]
  },
  {
   "section": "problems",
   "claimText": "On the G500, valve cover gaskets leak onto the exhaust manifold and the transmission can leak at its electrical connector; on the G55 Kompressor, supercharger bearings wear and a failing belt tensioner lets the belt slip.",
   "confidence": "low",
   "status": "verified",
   "sourceRefs": ["euroauto-g500", "euroauto-g55"],
   "evidence": [
    { "ref": "euroauto-g500", "quote": "The valve cover gaskets are a major source of leakage, allowing oil to seep onto the exhaust manifold" },
    { "ref": "euroauto-g500", "quote": "One of the most notorious transmission issues in the G 500 is fluid leakage from the transmission electrical connector" },
    { "ref": "euroauto-g55", "quote": "Over time, the bearings inside the supercharger wear out, causing a whining noise and eventual failure." }
   ]
  },
  {
   "section": "problems",
   "claimText": "NHTSA campaign 12V380000 covered 189 model year 2011 G550 and G55 AMG trucks built from September 20, 2010 through April 27, 2011, whose airbag-cover molding strip could come loose, and campaign 22V168000 covered 22 vehicles, including the 2014 G550, given incorrect control unit software during service.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["nhtsa-12v380000", "nhtsa-22v168000"],
   "evidence": [
    { "ref": "nhtsa-12v380000", "quote": "model year 2011 G550 and G55 \"AMG\" vehicles manufactured from September 20, 2010, through April 27, 2011." },
    { "ref": "nhtsa-12v380000", "quote": "Potential Number Of Units Affected: 189" },
    { "ref": "nhtsa-22v168000", "quote": "Various control units may have been updated with incorrect software configuration during a service repair." }
   ]
  }
 ]
};
