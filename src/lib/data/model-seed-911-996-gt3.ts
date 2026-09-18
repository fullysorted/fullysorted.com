/**
 * Researched model draft - Porsche 911 GT3, 996 generation (US 2004-2005 model years), with the 996 GT3 RS and 996 GT2 as variants.
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seed911996Gt3 = {
 "slug": "porsche/911-996-gt3",
 "make": "Porsche",
 "model": "911 GT3",
 "generation": "996",
 "generationCode": "996",
 "trim": "GT3 (US 2004-2005 model years); GT3 RS and GT2 covered as variants",
 "yearStart": 2004,
 "yearEnd": 2005,
 "bodyStyles": [
  "2-door coupe, two seats, narrow Carrera body with GT3 front and rear aprons and fixed rear wing (GT3)",
  "2-door coupe, two seats, acrylic rear window, carbon fiber reinforced hood and wing (GT3 RS, not sold in the US)",
  "2-door coupe, two seats, wide Turbo body, rear-wheel drive (GT2)"
 ],
 "engines": [
  "3.6-liter M96/79 flat-six, naturally aspirated, dry sump, Mezger architecture derived from the 911 GT1; 381 hp at 7,400 rpm and 284 lb-ft at 5,000 rpm by Porsche's US figures, 8,200 rpm redline (996.2 GT3, US 2004-2005 model years, and 996 GT3 RS)",
  "3.6-liter flat-six, naturally aspirated, same GT1-derived architecture; 355 hp (360 PS) at 7,800 rpm (996.1 GT3, 1999-2001, not sold in the US)",
  "3.6-liter twin-turbocharged flat-six, same GT1-derived architecture; 456 hp at 5,700 rpm and 457 lb-ft at 3,500-4,500 rpm (996 GT2, US 2002-2003 model years); output rose to 476 hp for the later cars"
 ],
 "productionTotal": null,
 "productionNotes": "No figure fetched for this page comes from Porsche itself, and the secondary sources disagree by a wide margin, so productionTotal is left null. For the 996.2 GT3 (2004-2005 model years), Stuttcars prints 2,589 units, the Wikipedia specification table prints 2,313, and classic.com's model description says 4,457 units were built over 2004-2005. Nothing on any of the three pages explains the gap, and it is not resolved here. The US count is better documented than the world total. A Porsche Club of America member compiled Porsche Cars North America's monthly announcements into a table published on the PCA tech Q&A page in September 2007: 11 cars in May 2003, 257 by the end of calendar 2003, 607 in calendar 2004, 95 in calendar 2005, and a final cumulative total of 959 by October 2005, after which the monthly number went to zero. The page does not say whether the monthly figures are sales, deliveries or production, and it is a member compilation rather than a PCNA document, so it is carried here as a club figure of 959 US cars, not as a manufacturer count. The 996.1 GT3 (1999-2001) was never sold in the US; Classic Motorsports records that Porsche planned 1,350 and the factory reported delivering 1,868, and Wikipedia's table agrees at 1,868. The 996 GT3 RS was built for 2004 only, 682 units by both Stuttcars and Wikipedia, and Porsche's own launch text as reproduced by Stuttcars says it was sold worldwide with the exception of the USA and Canada. For the GT2, the only fetched total is classic.com's description of about 1,287 across the 2002-2004 model years; the US share is given as 303 by a PCARMARKET listing and as just over 300 by autoevolution, both with the word reportedly attached, and a museum page says the 2002 GT2 was limited to 176 examples without saying which market. On price, MotorWeek's 2004 test quotes a base sticker of $101,965 with freight and gas guzzler tax included; the pre-destination list price for the GT3 is not documented in any page fetched here. MotorWeek's 2002 GT2 test gives $180,665, and autoevolution records an original owner paying $186,205 in 2002.",
 "notableTrims": [
  {
   "name": "996.2 GT3, US 2004-2005 model years",
   "note": "The only 996 GT3 sold new in the United States: 381 hp by Porsche's US rating, 8,200 rpm redline, six-speed manual only, cast iron brakes standard with PCCB optional. The Clubsport package with roll cage and buckets was not offered here. About 959 US cars by the PCA member compilation, most of them delivered in calendar 2003 and 2004."
  },
  {
   "name": "996.1 GT3, 1999-2001 (not sold in the US)",
   "note": "The original GT3: 355 hp (360 PS), 7,800 rpm, 2,976 lb and a 187 mph top track speed by Porsche's retrospective. Porsche planned 1,350 and built 1,868. Any 996.1 in the US arrived by private import, so paperwork and federalization history matter more than options."
  },
  {
   "name": "996 GT3 RS, 2004 (not sold in the US)",
   "note": "682 cars with the same 381 hp engine, an acrylic rear window, carbon fiber reinforced hood and wing, suspension lowered 0.4 in (10 mm) on stiffer springs and Pirelli P Zero Corsa tires. Porsche's launch text excluded the USA and Canada, so a US car is an import with a story to check."
  },
  {
   "name": "996 GT2, US 2002-2003 model years",
   "note": "The Turbo's engine and wide body with the all-wheel drive removed, 456 hp and 457 lb-ft, ceramic brakes standard and 3,175 lb. MotorWeek priced it at $180,665. Two US listings put the US share at about 303 cars, both with the word reportedly attached."
  },
  {
   "name": "996 GT2, 476 hp update",
   "note": "Wikipedia records the later cars at 476 hp, and classic.com's market page describes the model at that figure. Which model years carried the higher rating in the US is not settled by anything fetched here, so a buyer checks the individual car rather than the badge."
  },
  {
   "name": "PCCB ceramic brakes (GT3 option, GT2 standard)",
   "note": "Optional on the GT3, standard on the GT2. Replacement rotors are the single most expensive consumable on either car, which is why a track-driven car on original ceramics gets inspected before it gets priced."
  }
 ],
 "specs": {
  "layout": "Rear-mounted flat-six, rear-wheel drive, two seats (GT3, GT3 RS and GT2 alike)",
  "chassis": "Steel 996 unibody; narrow Carrera shell on the GT3 and RS, wide Turbo shell on the GT2; RS adds acrylic rear window and carbon fiber reinforced hood and wing",
  "engine": "3.6-liter naturally aspirated dry-sump flat-six, M96/79 code per Stuttcars, derived from the 911 GT1 race engine and credited to Hans Mezger; twin-turbocharged in the GT2",
  "power": "381 hp at 7,400 rpm (996.2 GT3 and RS, Porsche US rating; MotorWeek prints 380 and Wikipedia's table 376 hp); 355 hp (360 PS) at 7,800 rpm (996.1); 456 hp at 5,700 rpm, later 476 hp (GT2). Manufacturer figures",
  "torque": "284 lb-ft at 5,000 rpm (996.2 GT3, up from 273 lb-ft on the 996.1); 457 lb-ft at 3,500-4,500 rpm (GT2)",
  "transmission": "Six-speed manual only on every variant; limited-slip differential; dual-mass flywheel on the non-RS cars",
  "weight": "3,043 lb (2004 GT3, MotorWeek); 3,042 lb (Wikipedia table); 2,976 lb (996.1, Porsche); 2,998 lb with a full tank (GT3 RS, Wikipedia); 3,175 lb (GT2, MotorWeek)",
  "acceleration": "0-60 mph: 4.3 sec claimed by Porsche's US retrospective and 4.5 sec tested by MotorWeek (2004 GT3); Classic Motorsports attributes 4.5 sec to Porsche; 3.9 sec (GT2, MotorWeek)",
  "quarter_mile": "12.9 sec at 112 mph (2004 GT3, MotorWeek test); 12.4 sec at 118 mph (2002 GT2, MotorWeek test)",
  "top_speed": "190 mph top track speed (2004 GT3, Porsche); Classic Motorsports prints 188 mph; 187 mph (996.1); 198 mph (GT2). Manufacturer figures",
  "redline": "8,200 rpm (996.2 GT3); 7,800 rpm (996.1)",
  "brakes": "Six-piston front calipers with 13.8 in (350 mm) front rotors (996.2 GT3); PCCB ceramic rotors optional on the GT3 and standard on the GT2; 60-0 mph in 114 ft (GT3) and 121 ft (GT2) by MotorWeek",
  "tires": "Pirelli P Zero Corsa on the GT3 RS per Porsche's launch text",
  "us_msrp": "$101,965 base sticker including freight and gas guzzler tax (2004 GT3, MotorWeek); pre-destination list price not documented; $180,665 (2002 GT2, MotorWeek)",
  "us_availability": "996.2 GT3 sold in the US for the 2004 and 2005 model years only; 996.1 GT3 and 996 GT3 RS never sold new in the US or Canada; GT2 sold in the US"
 },
 "summary": "The 996-generation 911 GT3 reached the United States late and briefly. The original 1999 car, a 355 hp (360 PS) homologation special built around a dry-sump flat-six descended from the Le Mans-winning 911 GT1, was never sold here. The revised car arrived for the 2004 model year with 381 hp by Porsche's US rating, an 8,200 rpm redline, a six-speed manual and nothing else, and it was gone after 2005. A Porsche Club of America member's compilation of Porsche Cars North America's monthly announcements puts the US total at 959 cars. MotorWeek's test car carried a base sticker of $101,965 with freight and gas guzzler tax. Its engine is the point: this is the Hans Mezger architecture shared with the 996 Turbo and the rear-drive GT2, not the M96 of the Carrera, so the intermediate-shaft bearing that defines 996 ownership conversations does not apply. What does apply is a set of glued coolant fittings that every specialist wants pinned or welded. As of September 2026 classic.com benchmarks the 996.2 GT3 at $118,118 against $60,721 average for a 996 Turbo, and the twin-turbo GT2 at $184,329.",
 "history": "## Why the GT3 exists, and why America waited\n\nThe GT3 was a homologation car named for the FIA's GT3 class, and its purpose was to give Porsche's customer racing program a production base. Porsche's own retrospective describes the first car, unveiled in 1999, as powered by a 3.6-liter naturally aspirated flat-six derived from the Le Mans-winning 911 GT1 race car, revving to 7,800 rpm, weighing 2,976 lb and reaching a top track speed of 187 mph, with a six-speed manual as the only gearbox. Classic Motorsports records that Porsche planned an initial run of 1,350 and the factory reported delivering 1,868. None of them came to the United States. Porsche's US newsroom is direct about it: the GT3 was offered in North America for the first time with the 2004 model year updates, and Stuttcars puts it the same way, that it was not until 2004 that North America got its first taste of the GT3 for local buyers.\n\n## The engine that skipped the IMS problem\n\nThe reason the car matters to a US buyer today is what sits behind the rear axle. RM Sotheby's catalog copy names it plainly: a water-cooled engine derived from the 911 GT1 racecar that won the 1998 24 Hours of Le Mans, named after its designer Hans Mezger. The Carrera of the same years used the M96, whose intermediate-shaft bearing has its own reputation. The GT3, the Turbo and the GT2 use the older race-derived block with a dry sump and a different bottom end, which is why a 996 GT3 ownership conversation is about coolant fittings, clutches and gearboxes, not bearings. The 997 GT3 that succeeded it kept the architecture through 2011.\n\n## 996.2: the US car, 2004-2005\n\nFor the 2004 model year Porsche's retrospective gives horsepower of 381, torque up from 273 to 285 lb-ft, redline raised to 8,200 rpm, 0-60 mph in 4.3 seconds and a top track speed of 190 mph. MotorWeek tested one at 4.5 seconds to 60 and 12.9 seconds at 112 mph in the quarter mile, weighed it at 3,043 lb and stopped it from 60 in 114 ft, all on a base sticker of $101,965 with freight and gas guzzler tax. The Clubsport package with its roll cage was not offered here, and Classic Motorsports calls US production very limited because the car was sold here for the 2004 and 2005 model years only. The PCA member compilation of PCNA's monthly announcements tells the story in detail: 11 cars in May 2003, 257 by the end of that calendar year, 607 through 2004, and a trickle of 95 in 2005 ending at 959.\n\n## The RS that stayed home\n\nThe 2004 GT3 RS used the same 381 hp engine in a lighter shell: an acrylic rear window, carbon fiber reinforced hood and rear wing, suspension lowered 0.4 in (10 mm) on stiffer springs and dampers, and Pirelli P Zero Corsa tires. Stuttcars reproduces the launch text, which says the RS was to be sold worldwide with the exception of the USA and Canada, and gives 682 built; Wikipedia's table agrees. Any 996 RS in the US today is a later import, and that history is part of the car.\n\n## The GT2: the same engine, turbocharged\n\nThe GT2 is the Mezger engine with the Turbo's two turbochargers and the Turbo's wide body, but rear-wheel drive because, as classic.com's description puts it, GT2 class racing prohibited all-wheel drive. MotorWeek's 2002 test recorded 456 hp, 457 lb-ft, 3,175 lb, 0-60 in 3.9 seconds, a 12.4 second quarter mile at 118 mph, ceramic brakes as standard and a price of $180,665. Wikipedia records the later cars at 476 hp. Unlike the GT3 it was sold here from the start, and two US listings put the US share at about 303 cars, both hedged with reportedly.",
 "marketNotes": "All figures are US dollars, US sales only, as of September 2026. classic.com benchmarks the 996.2 GT3 at $118,118 with an average sale of $112,054 and a lowest recorded sale of $47,751 in June 2022. The recent rows it lists run in both directions: $209,996 on Bring a Trailer on August 25, 2026 for a 2004 car with 18,000 miles in New York, $152,996 on Bring a Trailer in June 2026 with 32,000 miles, $134,000 on Bring a Trailer on September 9, 2026 with 43,000 miles, and $85,000 on PCARMARKET on August 31, 2026 with 28,000 miles. A lot page fetched directly from RM Sotheby's adds a 66,753-mile Arctic Silver 2004 car from the Magnus Walker collection sold in Los Angeles in 2026 for $159,500; the page does not say whether that figure includes the buyer's premium. Against that, classic.com's 996.2 Turbo page shows an average of $60,721 across 679 sales, with a 2004 manual coupe at $69,911 in June 2025 and a 2001 Tiptronic at $56,993, so a GT3 has been trading at roughly twice a Turbo. The GT2 sits higher: classic.com benchmarks the standard car at $184,329 and the Clubsport at $171,440, with a 45,000-mile 2003 car at $262,777 on Bring a Trailer on August 27, 2026 and a modified 2002 at $174,996 in June 2026. A 15,000-mile 2002 GT2 sold on Bring a Trailer in November 2025 for $211,996 against the $186,205 its first owner paid in 2002, and a 37,722-mile 2002 car sold on PCARMARKET in Maryland for $146,000.",
 "whatToLookFor": "Start with the engine's history rather than its reputation. The Mezger flat-six does not have the intermediate-shaft bearing, but it does have coolant fittings held in with adhesive, and the first question on any 996 GT3 or GT2 is whether they have been pinned or welded, by whom, and with what receipt. Grassroots Motorsports' technician says the water pipes are a must to have welded and that most still are not, which means most cars for sale have not had it done. A DME over-rev report is the second document. The 8,200 rpm redline and a manual gearbox mean a missed downshift leaves a record, and the ranges and their timestamps tell more about the car's life than the odometer does. Ask about the clutch and dual-mass flywheel, which Classic Motorsports flags on the non-RS cars, and about the limited-slip differential, which the Grassroots Motorsports guide says can fracture its body when it has timed out. On a car that has been raced or tracked, ask for the gearbox service history by events and hours, which is how the same guide says it should be judged. Check whether the brakes are iron or ceramic: PCCB was optional on the GT3 and standard on the GT2, and a set of ceramic rotors is the most expensive consumable on the car. The 996-wide items still apply: HVAC evaporator, ignition switch, coolant expansion tank, tie rod and control arm squeaks. On paperwork, a US-delivered car will show a build in the May 2003 to late 2005 window; a 996.1 or a GT3 RS in the US arrived by import and needs its entry documents. The RM Sotheby's Magnus Walker car shows a typical US option list: xenon headlamps, carbon interior trim, natural leather, carbon and aluminum shifter and hand brake. classic.com marks modified GT2s as such in its rows, and they trade below the unmodified cars.",
 "commonProblems": "The coolant fitting problem leads every guide because of how it fails. Sharkwerks explains that there is no metal-to-metal friction or press fit holding the tubes in the cast housings; after enough heat cycles the adhesive softens and the tube can come out of the block. The consequence is a sudden coolant dump, and on a track that is slippery coolant across the rear tires; Sharkwerks describes a GT3 that put out a cloud of steam and spun at a hairpin. Their fix drills through the casting into the tube and secures a bolt; other shops weld. Sharkwerks says the problem may eventually affect all 996 and 997 Turbo, GT2 and GT3 models, and Classic Motorsports puts it the same way for the GT3: if they get hot enough for long enough, the aluminum tubes epoxied into the housings come loose. Grassroots Motorsports' guide adds the rest of the list. Clutches, water pump and thermostat, brake consumables and wheel bearings are normal maintenance. Oil changes every 3,000 miles on a street car and every 1,200 miles with track use. The gearbox should be inspected on a schedule set by events and hours, and the limited-slip differential is a replacement item once it has timed out because the differential body can fracture. The non-RS cars have the dual-mass flywheel concerns of any manual 996. No source fetched for this page documents a GT3-specific rear main seal failure rate or a US dollar cost for the coolant fitting work, the clutch or a PCCB rotor set, so those are left unstated rather than guessed. Nothing fetched here associates the GT3, GT2 or Turbo with the intermediate-shaft bearing failures of the M96 Carrera engine.",
 "valueTrajectory": "As of September 2026 the documented arc is short but clear. classic.com's lowest recorded 996.2 GT3 sale is $47,751 in June 2022, its current benchmark is $118,118, and its recent rows include $152,996, $209,996 and $134,000 on Bring a Trailer in the summer of 2026, with mileage and originality explaining most of the spread between any two of them. RM Sotheby's got $159,500 for a 66,753-mile car in Los Angeles in 2026, which says high mileage is not the discount on a GT3 that it is on a Carrera. The GT2 shows the same shape a step higher: a lowest sale of $70,000 for a Clubsport in September 2023 on classic.com, a benchmark of $184,329 now, and a 15,000-mile car that returned more in November 2025 than its first owner paid in 2002. The comparison that frames both is the 996 Turbo, which classic.com averages at $60,721 across 679 sales; the GT3 has separated from its all-wheel-drive sibling and the GT2 has separated further. None of this is a forecast, and the number of US cars is small enough that a few sales move the benchmark.",
 "overallConfidence": "medium",
 "sources": [
  {
   "ref": "porsche-newsroom-gt3-25",
   "title": "Porsche celebrates the 911 GT3: 25 years of performance and passion",
   "url": "https://newsroom.porsche.com/en_US/2024/products/porsche-911-gt3-25-years-performance-37558.html",
   "publisher": "Porsche Newsroom USA",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Manufacturer retrospective. 1999 GT3: engine derived from the 911 GT1, 360 PS, 7,800 rpm, 187 mph, 2,976 lb, manual only. 2004 model year: offered in North America for the first time, 381 horsepower, 273 to 285 lb-ft, 8,200 rpm, 4.3 sec, 190 mph."
  },
  {
   "ref": "motorweek-2004-gt3",
   "title": "2004 Porsche 911 GT3 Program #2307",
   "url": "https://motorweek.org/road_tests/2004_porsche_911_gt3_program_2307/",
   "publisher": "MotorWeek (Maryland Public Television)",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "US period road test. Base sticker $101,965 with freight and gas guzzler tax, 380 horsepower, 284 lb-ft, 0-60 in 4.5 sec, quarter mile 12.9 sec at 112 mph, 3,043 lb, six-speed manual the only transmission, 60-0 in 114 ft."
  },
  {
   "ref": "pca-996-gt3-production",
   "title": "Tech Q&A - 996 Gt3 Production Numbers",
   "url": "https://www.pca.org/tech/996-gt3-production-numbers",
   "publisher": "Porsche Club of America",
   "sourceType": "club-forum",
   "reliability": "medium",
   "notes": "Member-submitted table dated September 29, 2007, compiled from PCNA's monthly announcements: monthly and cumulative counts May 2003 to October 2005, ending at 959; 257 in calendar 2003, 607 in 2004, 95 in 2005. Does not say whether the figures are sales, deliveries or production."
  },
  {
   "ref": "stuttcars-9962-gt3",
   "title": "Porsche 911 GT3 (996.2) (2004 - 2005)",
   "url": "https://www.stuttcars.com/porsche-911-gt3-996-2004-2005/",
   "publisher": "Stuttcars",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Model page with data table: 2,589 units, engine M96/79, 381 bhp at 7,400 rpm, 284 ft lbs at 5,000 rpm, 0-60 4.3 sec, 190 mph, six-piston front calipers with 350 mm rotors, ceramic optional. States North America got its first GT3 in 2004. No price given."
  },
  {
   "ref": "grassroots-996-gt3-tech",
   "title": "How to keep a 996-Chassis Porsche 911 GT3 running like new",
   "url": "https://grassrootsmotorsports.com/articles/tech-tips-996-chassis-porsche-911-gt3/",
   "publisher": "Grassroots Motorsports",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "US race-shop tech-tips article. Coolant pipes glued in place and must be welded, most still are not; clutches, water pump, thermostat, brakes, wheel bearings as maintenance; oil every 3,000 miles street and 1,200 track; gearbox service by events and hours; LSD body fractures; 996-wide items. No dollar costs."
  },
  {
   "ref": "sharkwerks-coolant-pipes",
   "title": "The Shark Werks GT1 Coolant Pipe Prevention / Fix on GT1 block (GT3, GT3RS, GT2, Turbo) Porsche Cars",
   "url": "https://www.sharkwerks.com/tech-articles/the-gt1-coolant-pipe-prevention-fix-on-gt1-block-gt3-gt2-turbo-cars",
   "publisher": "Sharkwerks",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "California Porsche specialist tech article. Explains that nothing but adhesive holds the tubes in the cast housings, that heat cycles loosen them, that all 996/997 Turbo, GT2 and GT3 models may be affected, describes a GT3 spinning in a steam cloud, and describes the drill-and-bolt fix. No price stated."
  },
  {
   "ref": "classic-9962-gt3",
   "title": "Porsche 911 GT3 - 996.2 Market - CLASSIC.COM",
   "url": "https://www.classic.com/m/porsche/911/996/9962/gt3/",
   "publisher": "CLASSIC.COM",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "Fetched September 17, 2026. Benchmark $118,118, average $112,054, lowest $47,751 on June 7, 2022, description states 381 hp and 4,457 built. Sold rows, all 2004: BaT $209,996 (Aug 25, 2026, 18k mi, NY), PCARMARKET $85,000 (Aug 31, 2026, 28k mi, MD), BaT $134,000 (Sep 9, 2026, 43k mi, PA), BaT $152,996 (Jun 26, 2026, 32k mi, OR)."
  },
  {
   "ref": "classicmotorsports-996-gt3",
   "title": "996 Porsche 911 GT3: Buy one now? | Buyer's Guide",
   "url": "https://classicmotorsports.com/articles/996-porsche-911-gt3-buyers-guide/",
   "publisher": "Classic Motorsports",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "US buyer's guide with Gordon Friedman of Autometrics Motorsports. 1999 car 360 hp, planned 1,350 and delivered 1,868; US car 380 hp, Porsche-claimed 4.5 sec and 188 mph; US sales 2004 and 2005 only, no Club Sport; coolant tubes epoxied into housings come loose; dual-mass flywheel concerns on non-RS cars."
  },
  {
   "ref": "classic-9962-gt2",
   "title": "Porsche 911 GT2 - 996.2 Market - CLASSIC.COM",
   "url": "https://www.classic.com/m/porsche/911/996/9962/gt2/",
   "publisher": "CLASSIC.COM",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "Fetched September 17, 2026. Rear-wheel drive, 476 hp, description says about 1,287 units over 2002-2004. Benchmark $184,329 standard and $171,440 Clubsport, lowest $70,000 for a 2002 Clubsport on September 14, 2023. US sold rows: BaT $262,777 (Aug 27, 2026, 2003, 45k mi, Moorpark CA), BaT $174,996 modified (Jun 29, 2026, 2002, 42k mi, CA). UK and Japan rows ignored."
  },
  {
   "ref": "rm-mw26-gt3",
   "title": "2004 Porsche 911 GT3 | Magnus Walker: The Outlaw Collection | RM Sotheby's",
   "url": "https://rmsothebys.com/auctions/mw26/lots/r0016-2004-porsche-911-gt3/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Lot 102, Los Angeles, 2026 sale. Sold $159,500; page does not state whether the premium is included. 66,753 miles, Arctic Silver Metallic, production completed June 11, 2003, option list quoted, Mezger engine described as derived from the 1998 Le Mans-winning 911 GT1."
  },
  {
   "ref": "autoevolution-2002-gt2",
   "title": "Man Buys New 2002 Porsche 911 GT2 for $186,205, Sells for $211,996 After 23 Years",
   "url": "https://www.autoevolution.com/news/man-buys-new-2002-porsche-911-gt2-for-186205-sells-for-211996-after-23-years-261016.html",
   "publisher": "autoevolution",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "November 15, 2025 report of a Bring a Trailer sale: 2002 GT2 bought new for $186,205, sold for $211,996 with 15,000 miles; 456 hp and 457 lb-ft for the pre-facelift car; just over 300 units reportedly for the US market 2002-2005."
  },
  {
   "ref": "classic-996-turbo",
   "title": "Porsche 911 Turbo - 996.2 Market - CLASSIC.COM",
   "url": "https://www.classic.com/m/porsche/911/996/turbo/",
   "publisher": "CLASSIC.COM",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "Fetched September 17, 2026 for the Turbo comparison. Average $60,721, lowest $23,425, top $182,047, 679 sales. Rows: 2004 manual $69,911 (Jun 28, 2025, 39k mi, Vero Beach FL), 2003 manual $64,996 (Jun 22, 2025, 58k mi), 2001 automatic $56,993 (Jun 17, 2025, 51k mi)."
  },
  {
   "ref": "stuttcars-996-gt3rs",
   "title": "Porsche 911 GT3 RS (996.2) (2004)",
   "url": "https://www.stuttcars.com/porsche-911-gt3-rs-996-2004/",
   "publisher": "Stuttcars",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Model page reproducing Porsche's launch text: 682 units, 381 bhp at 7,400 rpm, acrylic rear window, carbon fiber reinforced hood and wing, suspension lowered 10 mm, Pirelli P Zero Corsa, sold worldwide except the USA and Canada, German price 104,000 euro. Facts only, no US price."
  },
  {
   "ref": "wikipedia-911-gt3",
   "title": "Porsche 911 GT3",
   "url": "https://en.wikipedia.org/wiki/Porsche_911_GT3",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Pointer only. Specification table: 996.1 GT3 1,868, 355 hp (360 PS), 2,976 lb, 188 mph; 996.2 GT3 2,313, 376 hp (381 PS), 3,042 lb, 4.5 sec, 190 mph; 996 GT3 RS 682, 2,998 lb, not sold in the United States or Canada. Text: Clubsport option never offered to US customers. Infobox prints 1,868 for 1999-2005, which conflicts with its own table."
  },
  {
   "ref": "wikipedia-911-gt2",
   "title": "Porsche 911 GT2",
   "url": "https://en.wikipedia.org/wiki/Porsche_911_GT2",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Pointer only. 996 GT2: 456 hp later 476 hp, 472 lb-ft, 3,153 lb, 198 mph, lighter than the Turbo through rear-wheel drive. No production or US price data."
  },
  {
   "ref": "audrain-2002-gt2",
   "title": "2002 Porsche GT2 - Audrain Auto Museum",
   "url": "https://www.audrainautomuseum.org/porsche-then-now/2002-porsche-gt2",
   "publisher": "Audrain Auto Museum",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Museum exhibit page: 456 hp at 5,700 rpm, 457 lb-ft, 3.9 sec, 198 mph, 3,175 lb, rear-wheel drive, carbon-ceramic brakes, and a statement that the 2002 GT2 was limited to 176 examples without naming the market."
  },
  {
   "ref": "pcarmarket-2002-gt2",
   "title": "2002 Porsche 911 GT2 | PCARMARKET",
   "url": "https://www.pcarmarket.com/auction/2002-porsche-911-gt2-6",
   "publisher": "PCARMARKET",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "US online auction listing, Maryland, marked sold at $146,000 with 37,722 miles; sale date not shown on the page. States the car is one of 303 examples reportedly delivered to the United States."
  },
  {
   "ref": "motorweek-2002-gt2",
   "title": "2002 Porsche 911 GT2",
   "url": "https://motorweek.org/road_tests/2002_porsche_911_gt2/",
   "publisher": "MotorWeek (Maryland Public Television)",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "US period road test of the GT2: $180,665, 456 hp, 457 lb-ft, 0-60 in 3.9 sec, quarter mile 12.4 sec at 118 mph, 3,175 lb, six-speed manual only, ceramic brakes, 60-0 in 121 ft."
  }
 ],
 "claims": [
  {
   "section": "history",
   "claimText": "The 996 GT3 was first offered in North America for the 2004 model year; the 1999-2001 996.1 GT3 was never sold new in the United States.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["porsche-newsroom-gt3-25", "stuttcars-9962-gt3"],
   "evidence": [
    { "ref": "porsche-newsroom-gt3-25", "quote": "the 911 GT3 received significant updates, and was offered in North America for the first time" },
    { "ref": "stuttcars-9962-gt3", "quote": "It wasn't until 2004 that North America got its first taste of the GT3 for local buyers" }
   ]
  },
  {
   "section": "history",
   "claimText": "The 996 GT3 was sold in the United States for the 2004 and 2005 model years only, and the Clubsport package was not offered here.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["classicmotorsports-996-gt3", "wikipedia-911-gt3", "pca-996-gt3-production"],
   "evidence": [
    { "ref": "classicmotorsports-996-gt3", "quote": "Very limited production for the U.S., as it was only sold here for the 2004 and 2005 model years" },
    { "ref": "wikipedia-911-gt3", "quote": "The Clubsport option was never offered to US customers, ostensibly due to the additional DOT crash testing" },
    { "ref": "pca-996-gt3-production", "quote": "here is the data I collected from PCNA's monthly announcements" }
   ]
  },
  {
   "section": "production",
   "claimText": "A Porsche Club of America member's compilation of Porsche Cars North America's monthly announcements gives a cumulative US total of 959 GT3s from May 2003 to October 2005; this is a club figure from a single page, and the page does not say whether the counts are sales, deliveries or production.",
   "confidence": "medium",
   "status": "unverified",
   "sourceRefs": ["pca-996-gt3-production"],
   "evidence": [
    { "ref": "pca-996-gt3-production", "quote": "In response to the earlier question on 996 GT3 production, here is the data I collected from PCNA's monthly announcements" }
   ]
  },
  {
   "section": "production",
   "claimText": "Total production of the 996.2 GT3 is given as 2,589 by Stuttcars, 2,313 by the Wikipedia specification table and 4,457 by classic.com's model description; no manufacturer figure was found and the three do not agree.",
   "confidence": "low",
   "status": "disputed",
   "sourceRefs": ["stuttcars-9962-gt3", "wikipedia-911-gt3", "classic-9962-gt3"],
   "conflictNote": "Stuttcars prints 2,589 units for the 996.2 GT3. Wikipedia's table prints 2,313. classic.com's description states 4,457 units built over 2004-2005. None of the three names a Porsche document, and nothing fetched explains whether classic.com's figure includes another variant. Not resolved by any source consulted here.",
   "evidence": [
    { "ref": "stuttcars-9962-gt3", "quote": "The 996.2 GT3 was the first GT3 marketed in the North America" },
    { "ref": "wikipedia-911-gt3", "quote": "996.2 GT3 2003-2004 3,600 280 kW; 376 hp (381 PS) 385 N-m (284 lbf-ft) 1,380 kg (3,042 lb) 2,313" },
    { "ref": "classic-9962-gt3", "quote": "The Porsche 911 GT3 996.2 is a high-performance homologation model named after the" }
   ]
  },
  {
   "section": "production",
   "claimText": "Porsche planned an initial run of 1,350 of the original 996.1 GT3 and the factory reported delivering 1,868, a figure Wikipedia's table repeats.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["classicmotorsports-996-gt3", "wikipedia-911-gt3"],
   "evidence": [
    { "ref": "classicmotorsports-996-gt3", "quote": "Where Porsche planned to offer an initial run of 1350 copies, the factory reports that it has delivered 1868 units" },
    { "ref": "wikipedia-911-gt3", "quote": "996.1 GT3 1999-2001 3,600 265 kW; 355 hp (360 PS) 370 N-m (273 lbf-ft) 1,350 kg (2,976 lb) 1,868" }
   ]
  },
  {
   "section": "production",
   "claimText": "The 2004 996 GT3 RS was built in 682 units and was sold worldwide except in the USA and Canada.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["stuttcars-996-gt3rs", "wikipedia-911-gt3"],
   "evidence": [
    { "ref": "stuttcars-996-gt3rs", "quote": "The GT3 RS is to be sold worldwide with the exception of the USA and Canada" },
    { "ref": "wikipedia-911-gt3", "quote": "The 996 GT3 RS was not sold in the United States or Canada" }
   ]
  },
  {
   "section": "production",
   "claimText": "The US share of 996 GT2 production is given as 303 cars by a PCARMARKET listing and as just over 300 by autoevolution, both with the word reportedly attached; a museum page says the 2002 GT2 was limited to 176 examples without naming a market.",
   "confidence": "low",
   "status": "unverified",
   "sourceRefs": ["pcarmarket-2002-gt2", "autoevolution-2002-gt2", "audrain-2002-gt2"],
   "evidence": [
    { "ref": "pcarmarket-2002-gt2", "quote": "One of just 303 examples reportedly delivered to the United States" },
    { "ref": "autoevolution-2002-gt2", "quote": "Just over 300 units were reportedly produced for the U.S. market between 2002 and 2005" },
    { "ref": "audrain-2002-gt2", "quote": "Production of the 2002 GT2 was limited to just 176 examples" }
   ]
  },
  {
   "section": "specs",
   "claimText": "Porsche's US retrospective rates the 2004 GT3 at 381 horsepower with an 8,200 rpm redline, while MotorWeek and Classic Motorsports print 380 horsepower and Wikipedia's table prints 376 hp as the conversion of 381 PS.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["porsche-newsroom-gt3-25", "motorweek-2004-gt3", "classicmotorsports-996-gt3", "wikipedia-911-gt3"],
   "conflictNote": "Porsche Newsroom USA states horsepower grew to 381. MotorWeek's test and the Classic Motorsports guide both say 380 horsepower. Wikipedia's table gives 376 hp (381 PS), treating 381 as a metric rating. Whether Porsche's US figure is SAE horsepower or the PS number relabeled is not settled by any page fetched here.",
   "evidence": [
    { "ref": "porsche-newsroom-gt3-25", "quote": "horsepower grew to 381, torque increased from 273 to 285 lb.-ft., and the redline climbed to 8,200 rpm" },
    { "ref": "motorweek-2004-gt3", "quote": "race developed version of Porsche's 3.6-liter flat six engine spinning out 380 horsepower" },
    { "ref": "classicmotorsports-996-gt3", "quote": "Porsche bumps output to, in the American market, 380 horsepower" },
    { "ref": "wikipedia-911-gt3", "quote": "280 kW; 376 hp (381 PS) 385 N-m (284 lbf-ft) 1,380 kg (3,042 lb)" }
   ]
  },
  {
   "section": "specs",
   "claimText": "Porsche's US retrospective claims 0-60 mph in 4.3 seconds and a 190 mph top track speed for the 2004 GT3; Classic Motorsports attributes 4.5 seconds and 188 mph to Porsche, and MotorWeek tested 4.5 seconds with a 12.9 second quarter mile at 112 mph.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["porsche-newsroom-gt3-25", "classicmotorsports-996-gt3", "motorweek-2004-gt3"],
   "conflictNote": "Porsche Newsroom USA states 4.3 seconds and 190 mph. Classic Motorsports says that according to Porsche the time fell from 4.8 to 4.5 seconds and the top speed is 188 mph. MotorWeek's instrumented 4.5 seconds is a test, not a claim. Which figure Porsche published in 2003 for the US car is not resolved by any page fetched here.",
   "evidence": [
    { "ref": "porsche-newsroom-gt3-25", "quote": "accelerated from 0 to 60 miles per hour in 4.3 seconds and achieved a top track speed of 190 miles per hour" },
    { "ref": "classicmotorsports-996-gt3", "quote": "According to Porsche, this helps shave zero-to-60 times from 4.8 seconds to 4.5" },
    { "ref": "motorweek-2004-gt3", "quote": "The quarter mile is flattened in a mere 12.9 seconds at 112 miles-per-hour" }
   ]
  },
  {
   "section": "specs",
   "claimText": "MotorWeek weighed the 2004 GT3 at 3,043 lb, and Wikipedia's table gives 3,042 lb; the six-speed manual was the only transmission.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["motorweek-2004-gt3", "wikipedia-911-gt3", "porsche-newsroom-gt3-25"],
   "evidence": [
    { "ref": "motorweek-2004-gt3", "quote": "the GT3 weighs in at a svelte 3,043 pounds" },
    { "ref": "wikipedia-911-gt3", "quote": "1,380 kg (3,042 lb)" },
    { "ref": "porsche-newsroom-gt3-25", "quote": "Mated exclusively to a six-speed manual transmission" }
   ]
  },
  {
   "section": "specs",
   "claimText": "MotorWeek's 2004 test car carried a base sticker of $101,965 including freight and gas guzzler tax; no page fetched for this research documents the pre-destination US list price of the 996 GT3, so that figure is single-sourced and stated as MotorWeek printed it.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["motorweek-2004-gt3"],
   "evidence": [
    { "ref": "motorweek-2004-gt3", "quote": "With freight and gas guzzler tax, our GT3 carries a base sticker of $101,965" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 996.1 GT3 of 1999 made 355 hp (360 PS) from a 3.6-liter engine derived from the 911 GT1, revved to 7,800 rpm, weighed 2,976 lb and had a top track speed of 187 mph by Porsche's retrospective.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["porsche-newsroom-gt3-25", "classicmotorsports-996-gt3", "wikipedia-911-gt3"],
   "evidence": [
    { "ref": "porsche-newsroom-gt3-25", "quote": "the 911 GT3 weighed just 2,976 lbs. (1350 kg)" },
    { "ref": "classicmotorsports-996-gt3", "quote": "could rev to 7800 rpm while making some 360 horsepower" },
    { "ref": "wikipedia-911-gt3", "quote": "265 kW; 355 hp (360 PS)" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 996 GT3 RS used the same 381 hp engine with an acrylic rear window, a carbon fiber reinforced hood and rear wing and Pirelli P Zero Corsa tires, and Wikipedia's table gives its weight as 2,998 lb.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["stuttcars-996-gt3rs", "wikipedia-911-gt3"],
   "evidence": [
    { "ref": "stuttcars-996-gt3rs", "quote": "special weight-saving rear window made of acrylic material" },
    { "ref": "wikipedia-911-gt3", "quote": "1,360 kg (2,998 lb)" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 996 GT2 made 456 hp and 457 lb-ft, weighed 3,175 lb, reached 60 mph in 3.9 seconds and cost $180,665 in MotorWeek's 2002 test, with a six-speed manual and ceramic brakes as standard; Wikipedia records the later cars at 476 hp.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["motorweek-2002-gt2", "audrain-2002-gt2", "wikipedia-911-gt2"],
   "evidence": [
    { "ref": "motorweek-2002-gt2", "quote": "The only available gearbox is a heavily beefed-up 6-speed manual" },
    { "ref": "audrain-2002-gt2", "quote": "457 lb/ft. @ 3500 - 4500 RPM" },
    { "ref": "wikipedia-911-gt2", "quote": "which was later increased to 355 kW (483 PS; 476 hp)" }
   ]
  },
  {
   "section": "history",
   "claimText": "The GT2 kept the Turbo's engine and wide body but used rear-wheel drive because GT2 class racing prohibited all-wheel drive, which also made it lighter than the Turbo.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["classic-9962-gt2", "wikipedia-911-gt2", "audrain-2002-gt2"],
   "evidence": [
    { "ref": "classic-9962-gt2", "quote": "the 996 GT2 was a rear-wheel drive model as GT2 class racing prohibited all-wheel drive" },
    { "ref": "wikipedia-911-gt2", "quote": "The GT2 is significantly lighter than the Turbo due to its use of rear-wheel-drive" },
    { "ref": "audrain-2002-gt2", "quote": "The GT2 was built to compete in GT2 class racing; the car came with rear-wheel drive" }
   ]
  },
  {
   "section": "history",
   "claimText": "The GT3's engine is a water-cooled unit derived from the 911 GT1 race car that won Le Mans in 1998 and is named for its designer Hans Mezger.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["rm-mw26-gt3", "porsche-newsroom-gt3-25"],
   "evidence": [
    { "ref": "rm-mw26-gt3", "quote": "Named after its designer Hans Mezger, this water-cooled engine derived from the 911 GT1 racecar that won the 1998 24 Hours of Le Mans" },
    { "ref": "porsche-newsroom-gt3-25", "quote": "3.6-liter naturally-aspirated flat six engine that was derived from the Le Mans-winning Porsche 911 GT1 race car" }
   ]
  },
  {
   "section": "problems",
   "claimText": "On the GT1-block engines in the 996 and 997 Turbo, GT2 and GT3, coolant tubes are held in their cast housings by adhesive alone; heat cycles loosen them and a tube can come out, dumping coolant, and the accepted fixes are welding or pinning.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["sharkwerks-coolant-pipes", "grassroots-996-gt3-tech", "classicmotorsports-996-gt3"],
   "evidence": [
    { "ref": "sharkwerks-coolant-pipes", "quote": "There is no metal-to-metal friction or press-fit to keep these tubes in place, so after enough heat cycles the adhesive will soften/loosen up and the tube will come out of the cast block" },
    { "ref": "grassroots-996-gt3-tech", "quote": "The coolant water pipes are a must to have welded. Most still aren't" },
    { "ref": "classicmotorsports-996-gt3", "quote": "the aluminum tubes epoxied into the forged aluminum housings come loose" }
   ]
  },
  {
   "section": "problems",
   "claimText": "A race shop's guide sets GT3 oil changes at every 3,000 miles on the street and every 1,200 miles with track use, calls the limited-slip differential a replacement item once timed out because the body can fracture, and lists clutches, water pump, thermostat, brakes and wheel bearings as routine maintenance; the non-RS cars share the dual-mass flywheel concerns of other manual 996s.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["grassroots-996-gt3-tech", "classicmotorsports-996-gt3"],
   "evidence": [
    { "ref": "grassroots-996-gt3-tech", "quote": "Oil changes should come every 3000 miles for street cars, and every 1200 miles if the car sees track time" },
    { "ref": "classicmotorsports-996-gt3", "quote": "The non-RS models have the typical dual-mass flywheel concerns" }
   ]
  },
  {
   "section": "market",
   "claimText": "As of September 2026 classic.com benchmarks the 996.2 GT3 at $118,118 with a lowest recorded sale of $47,751 in June 2022, and lists US sales of $209,996, $152,996 and $134,000 on Bring a Trailer and $85,000 on PCARMARKET for 2004 cars in mid-2026.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["classic-9962-gt3"],
   "evidence": [
    { "ref": "classic-9962-gt3", "quote": "The Porsche 911 GT3 996.2 is a high-performance homologation model named after the" }
   ]
  },
  {
   "section": "market",
   "claimText": "RM Sotheby's sold a 66,753-mile Arctic Silver 2004 GT3 from the Magnus Walker collection in Los Angeles in 2026 for $159,500; the lot page does not say whether that figure includes the buyer's premium.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["rm-mw26-gt3"],
   "evidence": [
    { "ref": "rm-mw26-gt3", "quote": "66,753 miles on the odometer at cataloguing time" }
   ]
  },
  {
   "section": "market",
   "claimText": "As of September 2026 classic.com benchmarks the 996 GT2 at $184,329 for the standard car and $171,440 for the Clubsport, with a lowest sale of $70,000 for a 2002 Clubsport in September 2023; a 2002 GT2 bought new for $186,205 sold on Bring a Trailer in November 2025 for $211,996, and a 37,722-mile 2002 car sold on PCARMARKET for $146,000.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["classic-9962-gt2", "autoevolution-2002-gt2", "pcarmarket-2002-gt2"],
   "evidence": [
    { "ref": "classic-9962-gt2", "quote": "$70,000 for a 2002 PORSCHE 911 (996) GT2 Clubsport on September 14, 2023" },
    { "ref": "autoevolution-2002-gt2", "quote": "purchased new by its original owner back in 2002 for $186,205" },
    { "ref": "pcarmarket-2002-gt2", "quote": "under 38k miles on the odometer" }
   ]
  },
  {
   "section": "market",
   "claimText": "As of September 2026 classic.com averages the 996 Turbo at $60,721 across 679 sales, with a 2004 manual coupe at $69,911 in June 2025, which places the GT3 benchmark at roughly twice the Turbo average.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["classic-996-turbo", "classic-9962-gt3"],
   "evidence": [
    { "ref": "classic-996-turbo", "quote": "Porsche introduced the turbocharged version of the Type 996 for the 2001 model year" },
    { "ref": "classic-9962-gt3", "quote": "The Porsche 911 GT3 996.2 is a high-performance homologation model named after the" }
   ]
  }
 ]
};
