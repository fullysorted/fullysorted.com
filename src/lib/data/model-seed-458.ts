/**
 * Researched model draft - Ferrari 458 Italia, 458 Spider and 458 Speciale / Speciale A (US model years 2010-2015).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seed458 = {
 "slug": "ferrari/458",
 "heroPhoto": "/images/models/ferrari-458.jpg",
 "heroPhotoCredit": "Photo: Trans-nyan, CC BY-SA 4.0, via Wikimedia Commons",
 "make": "Ferrari",
 "model": "458",
 "generation": null,
 "generationCode": null,
 "trim": "458 Italia, 458 Spider, 458 Speciale, 458 Speciale A",
 "yearStart": 2010,
 "yearEnd": 2015,
 "bodyStyles": [
  "2-door mid-engine berlinetta (fixed-roof coupe): 458 Italia and 458 Speciale",
  "2-door mid-engine spider with retractable aluminum hardtop: 458 Spider and 458 Speciale A"
 ],
 "engines": [
  "4,497 cc F136 V8, naturally aspirated, 562 hp (570 PS) at 9,000 rpm and 398 lb-ft (540 Nm) at 6,000 rpm, 458 Italia and 458 Spider, US 2010-2015 model years",
  "4,497 cc F136 V8 revised for the Speciale with a 14:1 compression ratio, 597 hp (605 PS) at 9,000 rpm and 398 lb-ft (540 Nm) at 6,000 rpm, 458 Speciale (US 2014-2015) and 458 Speciale A (US 2015)"
 ],
 "productionTotal": null,
 "productionNotes": "Ferrari does not publish a production total for the 458 Italia or the 458 Spider, and none of the sources fetched for this page gives one. The only variant with a published number is the 458 Speciale A, which Ferrari announced at the 2014 Paris show as a run of 499 cars; a US news report of the unveiling and the Wikipedia article agree on 499, and Wikipedia adds that 49 of those were right-hand drive. The Speciale coupe was not a numbered limited edition and no source consulted here gives a total for it. The one figure that does exist for the early Italia is a recall count rather than a production count: when the engine bay fires became public in September 2010 Ferrari recalled every 458 sold to that point, which Wikipedia puts at 1,248 cars worldwide and which the NHTSA statement quoted by CNN Money puts at 303 cars in the United States. Those numbers date the US launch: the NHTSA campaign lists 2010 model year cars built from March 5, 2010, so by the first week of September 2010 fewer than a third of the cars delivered anywhere had gone to American buyers. US model years run 2010 through 2015 for the Italia, 2012 through 2015 for the Spider (Consumer Guide records the Spider joining the lineup for 2012), 2014 and 2015 for the Speciale and 2015 only for the Speciale A, per the NHTSA brake recall that names each variant by model year. No US-only count exists for any variant, so productionTotal is left null. Without a total, this page also does not state how many 458s survive or what share of the run is Speciales, because nobody has the denominator.",
 "notableTrims": [
  {
   "name": "458 Italia (US 2010-2015)",
   "note": "The base berlinetta and the volume car. 562 hp at 9,000 rpm, seven-speed dual-clutch only, no manual offered anywhere. US list price disputed for 2010 between $225,325 and $230,675; $225,325 for 2011 and 2012 per Consumer Guide."
  },
  {
   "name": "458 Spider (US 2012-2015)",
   "note": "Same engine under a retractable aluminum hardtop that Ferrari said weighs 55 lb less than a fabric roof. Introduced at Frankfurt in September 2011 and sold in the US from the 2012 model year. As of September 2026 classic.com prices it about $59,000 above the coupe."
  },
  {
   "name": "458 Speciale (US 2014-2015)",
   "note": "597 hp at 9,000 rpm from a 14:1 compression ratio, 2,844 lb dry per Ferrari, and the highest specific output of any naturally aspirated production engine at the time. The car the market has decided is the collectible 458."
  },
  {
   "name": "458 Speciale A (US 2015)",
   "note": "The open Speciale, limited to 499 cars, 110 lb heavier than the coupe with a 14-second aluminum roof. Announced at the 2014 Paris show as the last naturally aspirated V8 Ferrari road car. classic.com's benchmark as of September 2026 is $1,558,979."
  },
  {
   "name": "2010 model year Italia (recall cars)",
   "note": "The first US cars, built from March 5, 2010, and covered by the September 2010 fire recall that replaced the adhesive-bonded rear wheelhouse heat shields. A completed recall is a paperwork item, not a stigma, but it identifies a first-year car."
  },
  {
   "name": "2011-2012 Italia (crankshaft recall)",
   "note": "Consumer Guide records a separate recall for 2011-2012 cars whose crankshaft could fail from incorrect machining. Confirming the campaign was performed matters more on these two years than on any other."
  }
 ],
 "specs": {
  "layout": "Longitudinal mid-mounted V8, rear-wheel drive",
  "chassis": "Body designed by Pininfarina under Donato Coco; chassis construction is not detailed in the sources fetched for this page",
  "engine": "4,497 cc F136 V8, naturally aspirated, 9,000 rpm redline",
  "power": "562 hp (570 PS) at 9,000 rpm for the Italia and Spider; 597 hp (605 PS) at 9,000 rpm for the Speciale and Speciale A. KBB's data sheet lists the Italia at 578 hp, an outlier against every other source",
  "torque": "398 lb-ft (540 Nm) at 6,000 rpm, all variants",
  "transmission": "Seven-speed dual-clutch automated manual (Ferrari F1 DCT), the only gearbox offered; no manual was ever available",
  "weight": "Italia curb weight 3,450 lb (1,565 kg) per Wikipedia, single source; Speciale dry weight 2,844 lb (1,290 kg) per Ferrari; KBB lists the Speciale at 3,075 lb curb",
  "acceleration": "Italia: MotorWeek measured 0-60 mph in 3.9 seconds, Edmunds quotes 3.4 seconds, Ferrari claimed 0-62 mph in under 3.4 seconds. Speciale: Ferrari claims 0-62 mph in 3.0 seconds and 0-124 mph in 9.1 seconds",
  "quarter_mile": "11.9 seconds at 128 mph, MotorWeek 2011 test of a 458 Italia",
  "top_speed": "202 mph claimed for the Italia (Consumer Guide); more than 202 mph claimed for the Speciale (Ferrari)",
  "compression_ratio": "14:1 on the Speciale engine (Ferrari); the Italia figure is not given by any source fetched here",
  "wheelbase": "104.3 in (2,649 mm), Italia and Speciale, per KBB",
  "epa_fuel_economy": "Italia 12 city / 18 highway / 14 combined mpg (US gallons); Speciale 13 / 17 / 14 mpg per KBB",
  "fiorano_lap": "1 minute 23.5 seconds for the Speciale, Ferrari claim",
  "us_list_price": "2010 Italia $225,325 (Edmunds) or $230,675 (Consumer Guide), with MotorWeek quoting $230,325 including gas guzzler tax; 2011-2012 Italia $225,325 (Consumer Guide); Spider about $257,000 and Speciale A about $400,000 per a single US buyer's guide; no US list price for the Speciale coupe was found in the sources fetched",
  "us_model_years": "Italia 2010-2015, Spider 2012-2015, Speciale 2014-2015, Speciale A 2015, per NHTSA campaign 21V833000"
 },
 "summary": "The Ferrari 458 is the mid-engine V8 berlinetta that replaced the F430 for the 2010 US model year and gave way to the turbocharged 488 GTB for 2016, which makes it the last naturally aspirated mid-engine V8 Ferrari road car. The 4,497 cc F136 engine makes 562 hp at a 9,000 rpm redline and 398 lb-ft at 6,000 rpm, driving through a seven-speed dual-clutch gearbox; no manual was offered in any market. Four versions came to the US: the Italia coupe for 2010 through 2015, the Spider with its retractable aluminum hardtop from 2012, the 597 hp Speciale for 2014 and 2015, and the 499-car Speciale A for 2015. The first-year cars were recalled in September 2010 after engine bay fires traced to adhesive in the rear wheelhouse heat shields, 303 of them in the United States. Ferrari publishes no production total for the Italia or Spider. The 2010 US list price is itself disputed between $225,325 and $230,675 depending on the source. As of September 2026 classic.com's benchmarks run from $214,048 for an Italia coupe to $1,558,979 for a Speciale A, and RM Sotheby's sold a 1,332-mile Speciale coupe at its 2026 Monterey auction for $1,490,000.",
 "history": "## Why the 458 exists\n\nBy 2009 the F430 was six years old and Ferrari's mid-engine V8 line, the car that pays for everything else in Maranello, needed to answer the Lamborghini Gallardo and the McLaren that everyone knew was coming. The answer was unveiled at the 2009 Frankfurt show as the 458 Italia: a Pininfarina body developed under Donato Coco and the F136 V8 at 4,497 cc with a 9,000 rpm redline. The number in the name is the displacement and the cylinder count. The decision that defined the car was the gearbox. Ferrari fitted a seven-speed dual-clutch and offered nothing else, in any market, for the whole run; Edmunds listed the absence of a traditional manual as one of the car's three faults in 2010, and the market has since treated it as a footnote rather than a deal-breaker.\n\n## The US launch and the fires\n\nThe 458 Italia arrived in the US as a 2010 model year car, with the NHTSA record dating the first cars to March 5, 2010. Edmunds quotes an MSRP of $225,325, Consumer Guide $230,675, and MotorWeek $230,325 including gas guzzler tax; the three do not reconcile and this page does not pick one. Within six months the car had a public problem. Five 458s caught fire in different countries, and on September 1, 2010 Ferrari recalled every car sold to that point, 1,248 worldwide and 303 in the United States according to the NHTSA statement quoted by CNN Money. The cause was not the engine. Heat from the exhaust could deform the rear wheelhouse and heat shield assemblies, which were held together with a bonding adhesive; under high ambient temperatures the adhesive could overheat, smoke and ignite. The fix was to strip the adhesive and old shields from both rear wheelhouses and bond in new ones, and the campaign began the day after the report was filed.\n\n## What the period press found\n\nMotorWeek's 2011 test put a US-spec Italia to 60 mph in 3.9 seconds and through the quarter mile in 11.9 seconds at 128 mph, half a second slower to 60 than the 3.4 seconds Edmunds quotes and the sub-3.4 second 0-62 mph figure Ferrari claimed. Consumer Guide recorded a claimed top speed of 202 mph and EPA ratings of 12 mpg city and 18 highway, which is why every US car carried a gas guzzler tax. The 2011 model year brought no significant changes. For 2012 the Spider joined the lineup, having been introduced at the 2011 Frankfurt show with a retractable aluminum hardtop that Ferrari said weighs 55 lb less than a fabric roof.\n\n## The Speciale and the last of the line\n\nThe 458 Speciale followed for the 2014 US model year. The engine went to a 14:1 compression ratio and 597 hp (605 PS) at 9,000 rpm, with a dry weight of 2,844 lb (1,290 kg) and Ferrari's claim of 0-62 mph in 3.0 seconds, 0-124 mph in 9.1 seconds and a Fiorano lap of 1 minute 23.5 seconds. RM Sotheby's catalog notes it held the highest output per liter of any naturally aspirated production engine at the time. The open version, the Speciale A, was announced for the 2014 Paris show as a run of 499 cars, 110 lb heavier than the coupe, with a roof that stows in 14 seconds. The US coverage of that unveiling said out loud what the market later priced in: this would be the last Ferrari road car with a naturally aspirated V8. The 488 GTB that replaced the 458 for 2016 was turbocharged, and every mid-engine V8 Ferrari since has been.\n\n## The recall record after the fires\n\nThe fire campaign was the loud one but not the only one. NHTSA lists a 2014 recall of 2010-2014 Italias and Spiders whose front trunk secondary latch could fail to release from inside, three Takata passenger air bag inflator campaigns for 2010-2011 Italias in 2016, 2018 and 2020, and a 2021 campaign covering every 458 variant from 2010 to 2015 for a brake system that may leak fluid. Consumer Guide separately records a crankshaft machining recall on 2011-2012 cars. For a car that was on sale for six model years, that is an ordinary federal record with one unusual chapter.",
 "marketNotes": "As of September 2026 classic.com's market benchmarks for the four US variants sit far apart: $214,048 for a 458 Italia coupe, $273,209 for a 458 Spider, $649,309 for a 458 Speciale coupe and $1,558,979 for a 458 Speciale A. The average across every 458 listing classic.com tracks is $641,631, a figure pulled up by the Speciales and by racing cars; the lowest recorded sale on the page is $74,111 for a 2012 458 Challenge on September 24, 2024, which is a track car and not a benchmark for a road car. The top of the tracked listings is a 2015 Speciale Aperta at $2,799,900, which is an asking price rather than a sale. For a dated sale rather than a benchmark, RM Sotheby's sold a 2015 458 Speciale coupe, chassis ZFF75VFA6F0210948, in Bianco Avus with 1,332 miles, for $1,490,000 at its 2026 Monterey auction; the lot page does not state whether that figure includes buyer's premium. Against the classic.com Speciale benchmark that sale is more than double, and the difference is mileage, color and options rather than the model. Set against the disputed 2010 list price of $225,325 to $230,675, an Italia coupe as of September 2026 trades close to what it cost new sixteen years ago, and a Speciale at roughly two to five times its sticker.",
 "whatToLookFor": "The first check on any 2010 Italia is the September 2010 fire recall, campaign 10V389000: the adhesive-bonded rear wheelhouse heat shields on both sides should have been removed and replaced with the new protective shields, and a Ferrari dealer can confirm completion by VIN. On 2011 and 2012 cars the crankshaft machining recall that Consumer Guide records is the one to confirm, since the consequence was a seized engine. Every 2010-2015 458 falls under the 2021 brake fluid leak campaign, and 2010-2011 Italias under three successive Takata passenger inflator campaigns; the 2020 campaign replaced interim inflators fitted under the earlier ones, so a car that had the 2016 or 2018 work done may still be open. Transmission history matters on the earliest cars: a US buyer's guide reports multiple accounts of gearbox trouble on 2010-2011 Italias, so a dealer record of any dual-clutch work is worth more than the seller's assurance. The same guide lists bubbling paint around the wheel arches from galvanic corrosion, torn dashboard leather and the sticky interior buttons common to Ferraris of this era, all visible in ten minutes with the car in daylight. Carbon-ceramic rotors are standard and long-lived, but a set of high-performance tires runs about $2,000, so tread depth and date codes are a real number. On a Speciale, the options list is the value: RM Sotheby's 2026 Monterey lot carried Scuderia shields, exposed carbon front vents and side elements, an axle lift and the Advanced Frontlighting System, and the 1,332-mile odometer did the rest. On a Speciale A, the build number against the 499 total and whether the car was delivered new in the US are the two facts that set the price.",
 "commonProblems": "The 458's federal record is dominated by one event and several routine ones. The 2010 fire recall, campaign 10V389000, covered 2010 model year Italias whose rear wheelhouse and heat shield assemblies could deform from engine heat and let the bonding adhesive overheat, smoke and, under particularly high ambient temperatures, ignite; five fires were reported before the recall, 303 US cars were covered, and the fix was new heat shields without the adhesive. Consumer Guide records a crankshaft on 2011-2012 cars that may fail because of incorrect machining, potentially seizing the engine. NHTSA's later campaigns are less dramatic: a front trunk secondary latch on 2010-2014 Italias and Spiders that may not release from inside (14V487000), Takata passenger inflators on 2010-2011 Italias (16V341000, 18V188000 and 20V007000), and a brake system that may leak fluid on every 458 variant from 2010 to 2015 (21V833000). Off the federal record, a US buyer's guide reports gearbox complaints concentrated on 2010-2011 cars, galvanic corrosion bubbling at the wheel arches, torn dashboard leather and sticky interior buttons. The same guide puts a minor annual dealer service at about $1,100 and a major service with plugs and fluid flushes at about $3,000 as of September 2026, and notes the carbon-ceramic rotors and the dual-clutch unit are not routine expenses. Those cost figures come from one source and are labeled as such.",
 "valueTrajectory": "The 458 has split into two markets. As of September 2026 classic.com's benchmark for an Italia coupe is $214,048, which is within a few percent of the $225,325 to $230,675 the car listed for in 2010, so a sixteen-year-old base car has finished depreciating and is trading at roughly sticker. The Spider sits above it at $273,209, the premium for the folding hardtop holding in the used market as it did when new. The Speciale is a different asset. classic.com's benchmark for the coupe is $649,309 and for the 499-car Speciale A $1,558,979, and RM Sotheby's 2026 Monterey sale of a 1,332-mile Speciale coupe at $1,490,000 shows what a delivery-mileage example with the right options does against that benchmark. The reason is the sentence the US press wrote at the Paris unveiling in 2014: the last Ferrari road car with a naturally aspirated V8. The 488 that followed was turbocharged, and every mid-engine V8 Ferrari since has been, so the 458 is the end of a line rather than a step in one. What that means for an Italia owner is that the Speciale's rise has not pulled the base car with it; what it means for a Speciale owner is that mileage, options and color now separate cars by a factor of two.",
 "overallConfidence": "medium",
 "sources": [
  {
   "ref": "nhtsa-458-2010",
   "title": "NHTSA recalls by vehicle: 2010 Ferrari 458",
   "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=ferrari&model=458&modelYear=2010",
   "publisher": "National Highway Traffic Safety Administration",
   "sourceType": "government",
   "reliability": "high",
   "notes": "The fire recall 10V389000 filed September 1, 2010: rear wheelhouse and heat shield assemblies deform from engine heat, bonding adhesive overheats and can ignite under high ambient temperature, remedy is new heat shields without adhesive, campaign began September 2, 2010. Also 14V487000 front trunk latch on 2010-2014 Italia and Spider built March 5, 2010 to May 20, 2013."
  },
  {
   "ref": "nhtsa-italia-2010",
   "title": "NHTSA recalls by vehicle: 2010 Ferrari 458 Italia",
   "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=ferrari&model=458%20italia&modelYear=2010",
   "publisher": "National Highway Traffic Safety Administration",
   "sourceType": "government",
   "reliability": "high",
   "notes": "Takata passenger inflator campaigns 16V341000 (2010-2011 Italia built March 5, 2010 to July 29, 2011), 18V188000 and 20V007000, and brake fluid leak campaign 21V833000 naming 2010-2015 458 Italia, 2012-2015 458 Spider, 2014-2015 458 Speciale and 2015 458 Speciale Aperta. Establishes US model years by variant."
  },
  {
   "ref": "cnnmoney-recall-2010",
   "title": "Ferrari recalling 458 Italia after sudden car fires - report",
   "url": "https://money.cnn.com/2010/09/02/autos/ferrari_recall/index.htm",
   "publisher": "CNN Money",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "September 2, 2010 US report: five fires reported, NHTSA statement that 303 vehicles are recalled in the US, heat shield could deform and ignite, 570 horsepower quoted, base price around $230,000, 4.5-liter V8 and 7-speed transmission."
  },
  {
   "ref": "consumerguide-458",
   "title": "2010-12 Ferrari 458 Italia",
   "url": "https://consumerguide.com/used/2010-12-ferrari-458-italia/",
   "publisher": "Consumer Guide Automotive",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "US model-year narrative: launched for 2010 replacing the F430, 2010 sticker $230,675, 2011-2012 base coupe $225,325, 570 horsepower and 398 lb-ft, claimed 0-62 mph under 3.4 seconds and 202 mph, seven-speed twin-clutch sole transmission, EPA 12/18, no changes for 2011, Spider joined for 2012, crankshaft machining recall on 2011-2012 cars."
  },
  {
   "ref": "edmunds-2010",
   "title": "2010 Ferrari 458 Italia Review & Ratings",
   "url": "https://www.edmunds.com/ferrari/458-italia/2010/review/",
   "publisher": "Edmunds",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "2010 MSRP $225,325, 562 horsepower, 9,000 rpm redline, 398 lb-ft, 0-60 in 3.4 seconds, EPA 14 combined (12 city / 18 highway), seven-speed dual-clutch automated manual, all-new for 2010, and the con that no traditional manual transmission is available."
  },
  {
   "ref": "motorweek-2011",
   "title": "2011 Ferrari 458 Italia",
   "url": "https://motorweek.org/road_tests/2011_ferrari_458_italia/",
   "publisher": "MotorWeek",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "US period instrumented test: 4.5-liter V8 with 562 horsepower and 398 lb-ft, 0-60 in 3.9 seconds, quarter mile 11.9 seconds at 128 mph, seven-speed F1 dual-clutch, price $230,325 including gas guzzler tax. The only instrumented US period test fetched for this page."
  },
  {
   "ref": "kbb-2010-italia",
   "title": "2010 Ferrari 458 Italia Specs, Features & Options",
   "url": "https://www.kbb.com/ferrari/458-italia/2010/specs",
   "publisher": "Kelley Blue Book",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Data sheet: EPA 12 city / 18 highway / 14 combined, 398 lb-ft, 104.3 inch wheelbase, 4.5-liter V8. Lists 578 hp at 9,000 rpm, an outlier against every other source. Its price field shows $186,000, which does not match any documented 2010 MSRP and is not used here."
  },
  {
   "ref": "kbb-2014-speciale",
   "title": "2014 Ferrari 458 Speciale Specs, Features & Options",
   "url": "https://www.kbb.com/ferrari/458-speciale/2014/specs",
   "publisher": "Kelley Blue Book",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Speciale data sheet: 597 hp at 9,000 rpm, 398 lb-ft, EPA 13 city / 17 highway / 14 combined, dual-clutch automatic, 104.3 inch wheelbase, 3,075 lb curb weight. Its price field shows $798,000, which is not a list price and is not used here."
  },
  {
   "ref": "ferrari-speciale",
   "title": "Ferrari 458 Speciale",
   "url": "https://www.ferrari.com/en-US/auto/458-speciale",
   "publisher": "Ferrari S.p.A.",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Factory specification for the Speciale: 445 kW (605 cv) at 9,000 rpm, 540 Nm at 6,000 rpm, 135 cv per liter, 14:1 compression, 1,290 kg dry weight, 0-100 km/h 3.0 seconds, 0-200 km/h 9.1 seconds, top speed over 325 km/h, Fiorano lap 1'23''5. The Italia page on the same site refused automated retrieval."
  },
  {
   "ref": "foxnews-speciale-a",
   "title": "Ferrari 458 Speciale A Aperta revealed",
   "url": "https://www.foxnews.com/auto/ferrari-458-speciale-a-aperta-revealed",
   "publisher": "Fox News Autos",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "US report of the Speciale A unveiling: production run of 499 units, 597 horsepower at 9,000 rpm, 0-62 mph in 3.0 seconds, 110 pounds heavier than the coupe, retractable aluminum roof in 14 seconds, world debut October 2 at the 2014 Paris show, and the statement that it is the last Ferrari road car powered by a naturally aspirated V8."
  },
  {
   "ref": "wikipedia-458",
   "title": "Ferrari 458",
   "url": "https://en.wikipedia.org/wiki/Ferrari_458",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Pointer source: F430 successor unveiled at Frankfurt 2009, 4,497 cc F136 V8, 570 PS (562 hp) at 9,000 rpm, 540 Nm (398 lb-ft) at 6,000 rpm, 1,565 kg (3,450 lb) curb weight, Spider at Frankfurt 2011 with an aluminum hardtop 25 kg lighter than a soft roof, Speciale 605 PS (597 hp), Speciale A limited to 499 with 49 RHD, Pininfarina body under Donato Coco, September 1, 2010 recall of all 1,248 cars sold, succeeded by the 488 GTB in 2015."
  },
  {
   "ref": "classic-458",
   "title": "Ferrari 458 Market",
   "url": "https://www.classic.com/m/ferrari/458/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of September 2026: CMB $214,048 Italia coupe, $273,209 Spider, $649,309 Speciale, $1,558,979 Speciale A; average across all tracked 458 listings $641,631; lowest sale $74,111 for a 2012 458 Challenge on September 24, 2024; highest tracked listing a 2015 Speciale Aperta at $2,799,900; model years 2010 to 2015; replaced the F430 in 2010, succeeded by the 488 for 2016."
  },
  {
   "ref": "rm-monterey-2026-speciale",
   "title": "2015 Ferrari 458 Speciale | The Monterey Auction 2026",
   "url": "https://rmsothebys.com/auctions/mo26/lots/r0073-2015-ferrari-458-speciale/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Individual lot page, The Monterey Auction 2026 (sale date not shown on the page): sold for $1,490,000 USD, chassis ZFF75VFA6F0210948, 1,332 miles at cataloguing, Bianco Avus with Grigio Corsa stripes, Scuderia shields, exposed carbon, axle lift, Advanced Frontlighting System; 597 hp; highest output per liter of any naturally aspirated production engine at the time. Premium inclusion not stated."
  },
  {
   "ref": "exoticcarhacks-458",
   "title": "Ferrari 458 Italia Buyers Guide",
   "url": "https://www.exoticcarhacks.com/buyers-guides/ferrari-458-italia-buyers-guide/",
   "publisher": "Exotic Car Hacks",
   "sourceType": "specialist",
   "reliability": "low",
   "notes": "US owner-side guide: transmission complaints on 2010-2011 cars, galvanic corrosion at wheel arches, dashboard leather tears, sticky buttons, minor dealer service about $1,100, major about $3,000, tires about $2,000, Spider base about $257,000, Speciale A about $400,000 and 499 units. Its price figures are single-source and labeled as such."
  }
 ],
 "claims": [
  {
   "section": "specs",
   "claimText": "The 458 Italia's 4.5-liter V8 is rated at 562 hp (570 PS) at 9,000 rpm and 398 lb-ft of torque by Edmunds, MotorWeek and Wikipedia; Kelley Blue Book's data sheet lists 578 hp, which no other source supports.",
   "confidence": "high",
   "status": "disputed",
   "sourceRefs": ["edmunds-2010", "motorweek-2011", "wikipedia-458", "kbb-2010-italia"],
   "conflictNote": "Edmunds and MotorWeek state 562 horsepower and Wikipedia gives 562 hp (570 PS) at 9,000 rpm; Consumer Guide and CNN Money quote 570, which is the metric PS figure. KBB's data sheet lists 578 hp at 9,000 rpm. No source explains the KBB figure and it is not resolved here.",
   "evidence": [
    { "ref": "edmunds-2010", "quote": "screams to a 9,000-rpm redline and produces 562 horsepower" },
    { "ref": "motorweek-2011", "quote": "to put out 562-horsepower" },
    { "ref": "wikipedia-458", "quote": "570 PS (419 kW; 562 hp) at 9,000 rpm" },
    { "ref": "kbb-2010-italia", "quote": "Horsepower 578 @ 9000 RPM Torque 398 lb-ft" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 458 was offered only with a seven-speed dual-clutch automated manual transmission; no conventional manual gearbox was available.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["edmunds-2010", "consumerguide-458"],
   "evidence": [
    { "ref": "edmunds-2010", "quote": "A traditional manual transmission isn't offered." },
    { "ref": "consumerguide-458", "quote": "A seven-speed, twin-clutch automated-manual transmission, which behaved much like an automatic, was the sole transmission." }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 2010 US list price of the 458 Italia is given as $225,325 by Edmunds, $230,675 by Consumer Guide, and $230,325 including gas guzzler tax by MotorWeek, and the three figures are not reconciled by any source consulted.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["edmunds-2010", "consumerguide-458", "motorweek-2011"],
   "conflictNote": "Edmunds lists the 2010 458 Italia at $225,325 MSRP. Consumer Guide states the 2010 sticker price was $230,675 and gives $225,325 for 2011-2012. MotorWeek quotes $230,325 including gas guzzler tax. Whether the differences are the gas guzzler tax, destination, or a mid-year change is not stated by any of the three and is unresolved here.",
   "evidence": [
    { "ref": "edmunds-2010", "quote": "2dr Coupe (4.5L 8cyl 7AM) (Most Popular) - $225,325 MSRP" },
    { "ref": "consumerguide-458", "quote": "Sticker price in 2010 was $230,675." },
    { "ref": "motorweek-2011", "quote": "$230,325, which includes gas guzzler tax" }
   ]
  },
  {
   "section": "specs",
   "claimText": "MotorWeek's US test of a 2011 458 Italia recorded 0-60 mph in 3.9 seconds and the quarter mile in 11.9 seconds at 128 mph, while Edmunds quotes 3.4 seconds to 60 mph and Ferrari claimed 0-62 mph in under 3.4 seconds.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["motorweek-2011", "edmunds-2010", "consumerguide-458"],
   "evidence": [
    { "ref": "motorweek-2011", "quote": "11.9 seconds at 128 miles-per-hour" },
    { "ref": "edmunds-2010", "quote": "powerful enough to propel the 458 Italia to 60 mph in 3.4 seconds" },
    { "ref": "consumerguide-458", "quote": "Ferrari claimed 0-62 mph acceleration in less than 3.4 seconds and a top speed of 202 mph." }
   ]
  },
  {
   "section": "specs",
   "claimText": "The US-spec 458 Italia carries EPA ratings of 12 mpg city, 18 mpg highway and 14 mpg combined.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["edmunds-2010", "kbb-2010-italia"],
   "evidence": [
    { "ref": "edmunds-2010", "quote": "14 Combined MPG (12 City/18 Highway)" },
    { "ref": "kbb-2010-italia", "quote": "Fuel Economy City 12/Hwy 18/Comb 14 MPG" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 458 Speciale engine is rated by Ferrari at 597 hp (605 cv) at 9,000 rpm and 398 lb-ft (540 Nm) at 6,000 rpm with a 14:1 compression ratio, a dry weight of 2,844 lb (1,290 kg), 0-62 mph in 3.0 seconds and a top speed above 202 mph.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["ferrari-speciale", "foxnews-speciale-a", "kbb-2014-speciale"],
   "evidence": [
    { "ref": "ferrari-speciale", "quote": "445 kW (605 cv) at 9000 rpm" },
    { "ref": "foxnews-speciale-a", "quote": "597 horsepower at a screaming 9,000 rpm" },
    { "ref": "kbb-2014-speciale", "quote": "Horsepower 597 @ 9000 RPM Torque 398 lb-ft" }
   ]
  },
  {
   "section": "specs",
   "claimText": "Wikipedia gives the 458 Italia a curb weight of 3,450 lb (1,565 kg); this is the only Italia weight figure in the sources fetched, and KBB's 3,075 lb curb weight for the Speciale is likewise single-sourced.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["wikipedia-458", "kbb-2014-speciale"],
   "evidence": [
    { "ref": "wikipedia-458", "quote": "1,565 kg (3,450 lb)" },
    { "ref": "kbb-2014-speciale", "quote": "Curb Weight 3,075 pounds" }
   ]
  },
  {
   "section": "history",
   "claimText": "The 458 Italia succeeded the F430, was first shown at the 2009 Frankfurt Motor Show, launched in the US for the 2010 model year, and was succeeded by the 488 GTB for 2016.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["wikipedia-458", "consumerguide-458", "classic-458"],
   "evidence": [
    { "ref": "wikipedia-458", "quote": "The 458 is the successor of the F430, and was first officially unveiled at the 2009 Frankfurt Motor Show." },
    { "ref": "consumerguide-458", "quote": "Launched for 2010, the Ferrari 458 Italia coupe replaced the departed F430" },
    { "ref": "classic-458", "quote": "replaced the F430 in 2010 and was succeeded by the Ferrari 488 for model year 2016" }
   ]
  },
  {
   "section": "history",
   "claimText": "The 458 Spider was introduced at the 2011 Frankfurt Motor Show with a retractable aluminum hardtop that Ferrari said weighs 55 lb (25 kg) less than a soft roof, and it joined the US lineup for the 2012 model year.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["wikipedia-458", "consumerguide-458", "nhtsa-italia-2010"],
   "evidence": [
    { "ref": "wikipedia-458", "quote": "The 458 Spider was introduced at the 2011 Frankfurt Motor Show." },
    { "ref": "consumerguide-458", "quote": "A Spider convertible joined the original coupe in the 2012 Ferrari 458 Italia lineup." },
    { "ref": "nhtsa-italia-2010", "quote": "2010-2015 458 Italia, 2012-2015 458 Spider, 2014-2015 458 Speciale, 2015 458 Speciale Aperta" }
   ]
  },
  {
   "section": "history",
   "claimText": "The 458 Speciale A was announced for the 2014 Paris Auto Show as the last Ferrari road car powered by a naturally aspirated V8, weighing 110 lb more than the Speciale coupe with an aluminum roof that opens or closes in 14 seconds.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["foxnews-speciale-a", "wikipedia-458"],
   "evidence": [
    { "ref": "foxnews-speciale-a", "quote": "the last Ferrari road car powered by a naturally aspirated V-8" },
    { "ref": "wikipedia-458", "quote": "It was succeeded by the 488 GTB (Gran Turismo Berlinetta) in 2015." }
   ]
  },
  {
   "section": "production",
   "claimText": "The 458 Speciale A was limited to 499 cars, of which Wikipedia says 49 were right-hand drive.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["foxnews-speciale-a", "wikipedia-458", "exoticcarhacks-458"],
   "evidence": [
    { "ref": "foxnews-speciale-a", "quote": "the production run for this latest Prancing Horse will be just 499 units" },
    { "ref": "wikipedia-458", "quote": "the model was limited to only 499 examples (49 RHD examples)" },
    { "ref": "exoticcarhacks-458", "quote": "It is only limited to 1 of 499 produced and was sold out very quickly." }
   ]
  },
  {
   "section": "production",
   "claimText": "No source consulted publishes a production total for the 458 Italia, Spider or Speciale coupe; the only dated count is the September 2010 recall, which Wikipedia puts at 1,248 cars sold worldwide and the NHTSA statement quoted by CNN Money at 303 cars in the United States, so productionTotal is left null.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["wikipedia-458", "cnnmoney-recall-2010", "classic-458"],
   "conflictNote": "Wikipedia states Ferrari recalled all 1,248 of the 458s sold to date on September 1, 2010. CNN Money quotes the NHTSA statement that 303 vehicles are being recalled, which is the US share. Neither figure is a production total, no source gives one for the Italia, Spider or Speciale coupe, and the total is unresolved here.",
   "evidence": [
    { "ref": "wikipedia-458", "quote": "Ferrari officially recalled all 1,248 of the 458s sold to date" },
    { "ref": "cnnmoney-recall-2010", "quote": "303 vehicles are being recalled" },
    { "ref": "classic-458", "quote": "a mid-engine sports car produced by the Italian automobile manufacturer Ferrari" }
   ]
  },
  {
   "section": "problems",
   "claimText": "NHTSA campaign 10V389000, filed September 1, 2010, recalled 2010 model year 458 Italias because engine heat could deform the rear wheelhouse and heat shield assemblies and let the bonding adhesive overheat and ignite; five fires had been reported, and dealers replaced the shields without adhesive from September 2, 2010.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["nhtsa-458-2010", "cnnmoney-recall-2010"],
   "evidence": [
    { "ref": "nhtsa-458-2010", "quote": "CAUSING THE BONDING ADHESIVE USED IN THE ASSEMBLY TO OVERHEAT AND PRODUCE SMOKE" },
    { "ref": "cnnmoney-recall-2010", "quote": "after five fires were reported" }
   ]
  },
  {
   "section": "problems",
   "claimText": "NHTSA also lists a front trunk secondary latch campaign for 2010-2014 458 Italia and Spider (14V487000), Takata passenger air bag inflator campaigns for 2010-2011 Italias (16V341000, 18V188000, 20V007000), and a 2021 brake fluid leak campaign covering 2010-2015 458 Italia, 2012-2015 Spider, 2014-2015 Speciale and 2015 Speciale Aperta (21V833000).",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["nhtsa-458-2010", "nhtsa-italia-2010"],
   "evidence": [
    { "ref": "nhtsa-458-2010", "quote": "the secondary latch for the front trunk storage compartment may not release when the vehicle is stationary" },
    { "ref": "nhtsa-italia-2010", "quote": "The brake system may leak brake fluid, resulting in a loss of braking ability." }
   ]
  },
  {
   "section": "problems",
   "claimText": "Consumer Guide records a recall on 2011-2012 458 Italias for a crankshaft that may fail because of incorrect machining and seize the engine, and a US buyer's guide reports multiple transmission complaints on 2010-2011 cars along with galvanic corrosion at the wheel arches, dashboard leather tears and sticky interior buttons.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["consumerguide-458", "exoticcarhacks-458"],
   "evidence": [
    { "ref": "consumerguide-458", "quote": "Crankshaft may fail because of incorrect machining, potentially causing the engine to seize" },
    { "ref": "exoticcarhacks-458", "quote": "Multiple accounts of transmission issues have emerged for the 2010-2011 Ferrari 458 Italia models." }
   ]
  },
  {
   "section": "problems",
   "claimText": "A US buyer's guide puts a minor annual dealer service at about $1,100, a major service at about $3,000 and a set of high-performance tires at about $2,000 as of September 2026; these are single-source, low-reliability figures.",
   "confidence": "low",
   "status": "verified",
   "sourceRefs": ["exoticcarhacks-458"],
   "evidence": [
    { "ref": "exoticcarhacks-458", "quote": "A set of high-performance tires like Michelin PS4 will cost about $2,000." }
   ]
  },
  {
   "section": "market",
   "claimText": "As of September 2026 classic.com's market benchmarks are $214,048 for a 458 Italia coupe, $273,209 for a 458 Spider, $649,309 for a 458 Speciale and $1,558,979 for a 458 Speciale A, with an average of $641,631 across all tracked 458 listings and a lowest recorded sale of $74,111 for a 2012 458 Challenge on September 24, 2024.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["classic-458"],
   "evidence": [
    { "ref": "classic-458", "quote": "CMB (CLASSIC.COM Market Benchmark) $214,048" }
   ]
  },
  {
   "section": "market",
   "claimText": "RM Sotheby's sold a 2015 458 Speciale coupe, chassis ZFF75VFA6F0210948, showing 1,332 miles, for $1,490,000 at its 2026 Monterey auction; the lot page does not say whether buyer's premium is included.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["rm-monterey-2026-speciale"],
   "evidence": [
    { "ref": "rm-monterey-2026-speciale", "quote": "1,332 miles at the time of cataloguing" }
   ]
  },
  {
   "section": "market",
   "claimText": "A US buyer's guide gives the 458 Spider a base price of about $257,000, $31,000 more than the coupe, and the Speciale A a base price of about $400,000; both are single-source figures from a low-reliability source and no US list price for the Speciale coupe was found.",
   "confidence": "low",
   "status": "verified",
   "sourceRefs": ["exoticcarhacks-458"],
   "evidence": [
    { "ref": "exoticcarhacks-458", "quote": "Base price starts at $257,000 ($31,000 more than coupe)." }
   ]
  },
  {
   "section": "summary",
   "claimText": "The Speciale's naturally aspirated V8 held the highest output per liter of displacement of any naturally aspirated engine in a production vehicle at the time, and the 458 was the last mid-engine V8 Ferrari before the turbocharged 488.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["rm-monterey-2026-speciale", "foxnews-speciale-a", "classic-458"],
   "evidence": [
    { "ref": "rm-monterey-2026-speciale", "quote": "the highest output per liter of displacement of any naturally aspirated engine in a production vehicle at the time" },
    { "ref": "foxnews-speciale-a", "quote": "the most powerful naturally aspirated V-8 ever launched in a Ferrari road car" },
    { "ref": "classic-458", "quote": "succeeded by the Ferrari 488 for model year 2016" }
   ]
  }
 ]
};
