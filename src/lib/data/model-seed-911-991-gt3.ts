/**
 * Researched model draft - Porsche 911 GT3 and GT3 RS, 991 generation (US 2014-2019 model years), including the Touring and the 911 R.
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seed911991Gt3 = {
 "slug": "porsche/911-991-gt3",
 "make": "Porsche",
 "model": "911 GT3",
 "generation": "991",
 "generationCode": "991",
 "trim": "GT3, GT3 Touring, GT3 RS and 911 R (US 2014-2019 model years)",
 "yearStart": 2014,
 "yearEnd": 2019,
 "bodyStyles": [
  "2-door coupe, two seats, narrow Carrera body with fixed rear wing (GT3)",
  "2-door coupe, two seats, with a smaller retractable rear wing in place of the fixed wing (991.2 GT3 Touring Package)",
  "2-door coupe, two seats, wide body (GT3 RS)",
  "2-door coupe, two seats, lightweight panels and no wing (911 R)"
 ],
 "engines": [
  "3.8-liter flat-six, naturally aspirated, 475 hp, 9,000 rpm redline (991.1 GT3, US 2014-2016 model years)",
  "4.0-liter flat-six, naturally aspirated, 500 hp and about 338 lb-ft, 8,800 rpm redline per one US road impression (991.1 GT3 RS, US 2016)",
  "4.0-liter flat-six, naturally aspirated, with PDK or a six-speed manual; no fetched source states its output (991.2 GT3 and GT3 Touring, US 2018-2019)",
  "4.0-liter flat-six, naturally aspirated, 520 hp and 346 lb-ft (991.2 GT3 RS, US 2019)",
  "Flat-six, naturally aspirated, 500 hp at 8,250 rpm and 338 lb-ft at 6,250 rpm per RennDriver, six-speed manual only (911 R)"
 ],
 "productionTotal": null,
 "productionNotes": "No source gives a total for the 991 GT3 family, and none consulted here separates US cars for every variant. What exists is a patchwork. Sports Car Market lists 4,520 991.1 GT3 RS built worldwide with 1,530 for the US and Canada, and 4,750 991.2 GT3 RS with 1,760 for the US and Canada. It does not cite a Porsche document, and no second source consulted here prints a count that could be checked against it, so those figures stand on one specialist source. Wikipedia's production table carries figures for the GT3 and RS of both generations, but two of them are marked citation needed and none could be quoted from running text, so they are left out. No source consulted here gives a build total for the non-RS GT3 of either generation, so no GT3 total is printed and nothing is stated about how many 991.2 cars had a manual or the Touring Package. The 911 R is the one clean number: RennDriver gives 991 units and Flatsixes calls it a limited edition of only 991 units worldwide. Neither gives a US allocation; RennDriver says allocation went to existing GT customers with established purchase histories at their local Porsche dealers. The engine recall gives a firm early count: 785 GT3s had been delivered when Porsche replaced every engine, a useful floor for how few 991.1 cars existed in March 2014. No source gives the VIN range of those 785 cars. Classic.com's sales counts (114 Touring, 73 PDK 991.2 GT3) are sales it tracked, not production. US model-year labels also vary by source: classic.com lists the 991.1 GT3 as 2014 to 2016, the 991.1 RS as 2015 to 2016 and the 991.2 RS as 2018 to 2020, while Porsche's own US text calls the facelifted RS the 2019 model.",
 "notableTrims": [
  {
   "name": "991.1 GT3 (US 2014-2016 model years)",
   "note": "The first PDK-only GT3 and the car behind the 2014 engine replacement program. Listed at $130,400, 475 hp, 9,000 rpm redline. A car with documented replacement-engine paperwork is the starting point for any 2014 build."
  },
  {
   "name": "991.1 GT3 RS (US 2016)",
   "note": "500 hp four-liter engine, PDK only, from $175,900 in the US. Sports Car Market counts 4,520 built, 1,530 for the US and Canada, the car most buyers mean by a 991 RS."
  },
  {
   "name": "991.2 GT3 (US 2018-2019), PDK or six-speed manual",
   "note": "The generation that brought the manual back. Autoblog prices the Touring Package car at the same $143,600 as the standard car."
  },
  {
   "name": "991.2 GT3 Touring Package",
   "note": "Retractable wing in place of the fixed wing, manual only. Classic.com tracks 114 sales against 73 for the PDK car, with a benchmark about $50,000 higher."
  },
  {
   "name": "991.2 GT3 RS (US 2019) with Weissach Package",
   "note": "520 hp, $187,500 before fees, 0-60 mph in a claimed 3.0 seconds. The Weissach Package added $18,000, and magnesium wheels were a further weight-saving option."
  },
  {
   "name": "911 R (2016)",
   "note": "991 cars, six-speed manual only, 3,021 lb, $184,900. Radio and air conditioning deleted, available again at no charge. Prices passed $1 million in late 2016 and into 2017."
  }
 ],
 "specs": {
  "layout": "Rear-mounted flat-six, rear-wheel drive",
  "chassis": "911 coupe body; the RS adds a magnesium roof panel and a carbon fiber hood, front fenders, engine lid and wing (Sports Car Market)",
  "engine": "3.8-liter naturally aspirated flat-six (991.1 GT3); 4.0-liter naturally aspirated flat-six (GT3 RS, 991.2 GT3 and Touring)",
  "power": "475 hp (991.1 GT3); 500 hp (991.1 RS and 911 R); 520 hp (991.2 RS); 991.2 GT3 output not stated by a fetched source",
  "torque": "346 lb-ft (991.2 RS, Porsche US); about 338 lb-ft (991.1 RS and 911 R)",
  "transmission": "PDK dual-clutch only on the 991.1 GT3 and GT3 RS; 991.2 GT3 with PDK or six-speed manual; Touring Package manual only; 911 R six-speed manual only",
  "weight": "3,150 lb (991.1 RS, Autoweb); 3,021 lb (911 R, RennDriver)",
  "acceleration": "0-60 mph claimed at 3.3 seconds (991.1 GT3) and 3.0 seconds (2019 RS) by Porsche; 3.8 seconds for the 991.2 manual (Autoblog, Wikipedia) against 3.2 seconds for the PDK (Wikipedia)",
  "top_speed": "195 mph claimed for the 991.1 GT3 by Porsche; Wikipedia prints a claimed 202 mph for the same car",
  "nurburgring": "6:56.4 (991.2 GT3 RS) and 7:20 (991.1 GT3 RS), both per Wikipedia",
  "us_price_991_1": "$130,400 GT3 plus $950 destination; GT3 RS from $175,900",
  "us_price_991_2": "$143,600 GT3 and GT3 Touring (Autoblog); 2019 GT3 RS $187,500 plus $1,050; Weissach Package $18,000",
  "us_price_911_r": "$184,900 plus $1,050 destination",
  "redline": "9,000 rpm (991.1 GT3, Porsche); 8,800 rpm (991.1 RS, Autoweb)",
  "engine_warranty": "Transferable worldwide 10-year, 120,000 mile extended engine warranty after the finger follower problem (PistonHeads)",
  "recall_2014": "NHTSA 14V090000, engine: a piston connecting rod may come loose and damage the engine crankcase; all 785 GT3s delivered by March 2014 received new engines"
 },
 "summary": "The 991 GT3 is the stretch of the GT3 story in which Porsche gave up the manual and then gave it back. The 991.1 GT3 reached the US for the 2014 model year at $130,400 with a 3.8-liter, 475 hp engine, a 9,000 rpm redline and only a PDK. In March 2014 Porsche replaced the engines in all 785 cars delivered, after fires in Europe. The 991.1 GT3 RS followed in 2016 from $175,900 with a 500 hp four-liter engine. The facelifted 991.2 GT3 of 2018 and 2019 brought back a six-speed manual and added a Touring Package at $143,600 with a retractable wing, and the 2019 GT3 RS listed at $187,500 with 520 hp. The 911 R, 991 cars with a manual only, listed at $184,900. As of November 2026, classic.com's benchmarks run from $121,519 for a 991.1 GT3 to $239,559 for a 991.2 GT3 RS.",
 "history": "## A GT3 with no clutch pedal\n\nPorsche introduced the fifth-generation 911 GT3 in the US in 2013 at $130,400 before a $950 destination charge, due to go on sale in the United States in late 2013. The press release led with the numbers: a 3.8-liter boxer engine at 475 hp, a 9,000 rpm redline, and a claimed 3.3 seconds to 60 mph. The detail that mattered to owners was what it left out. The 991.1 GT3 came with a PDK dual-clutch gearbox and nothing else, and PistonHeads notes that manuals did not return until the 991.2 cars of 2017.\n\n## The engines that were all replaced\n\nIn March 2014 GTspirit reported two GT3s destroyed by fire in Europe, deliveries halted and owners told not to drive. Porsche said it would replace the engines in all 785 GT3s delivered so far. NHTSA's database carries it as recall 14V090000, engine and engine cooling: a piston connecting rod may come loose and damage the engine crankcase. What failed is worded three ways in the sources, a loosened piston rod screw connection, a metallurgical defect in the conrod bolts, or a supplier alloy error. A separate finger follower defect in the valvetrain followed, and PistonHeads describes a transferable 10-year, 120,000 mile engine warranty.\n\n## The RS, then the manual returns\n\nThe 991.1 GT3 RS came to the US for 2016 from $175,900 with a four-liter engine at 500 hp, PDK only. Sports Car Market counts 4,520 built, 1,530 for the US and Canada. An Autoweb road impression put it at 3,150 lb and under four seconds to 60 mph. The 991.2 GT3 of 2018 added a six-speed manual, and the Touring Package, which swapped the fixed wing for a smaller retractable one and could not be ordered with the PDK, was priced the same as the standard GT3 at $143,600 according to Autoblog.\n\n## What the road tests said\n\nThe US written record is thin on instrumented numbers and long on impressions. Autoweb's road impression of the 991.1 RS reports a 500 hp engine that screams to an 8,800 rpm redline, calls the idle an erratic beast barely leashed, and says the car can dance like Fred Astaire when there is no grip. Porsche claimed 3.3 seconds to 60 mph for the 991.1 GT3; Wikipedia says 3.5 seconds or less, and PistonHeads 3.5 seconds to 62 mph. For the 991.2 GT3, Autoblog, PistonHeads and Wikipedia all give 3.8 seconds for the manual, and Wikipedia gives 3.2 seconds for the PDK, so the manual costs about half a second on paper. No Car and Driver or Motor Trend instrumented test was reachable for this page, so none of these are measured US figures.\n\n## The 2019 RS and the 911 R\n\nThe 2019 GT3 RS listed at $187,500 plus $1,050 delivery, with 520 hp and 346 lb-ft and a claimed 3.0 seconds to 60 mph. The Weissach Package was $18,000. Wikipedia credits it with 6:56.4 around the Nurburgring Nordschleife. Sports Car Market counts 4,750 built, 1,760 for the US and Canada. The 911 R sits beside the generation rather than in it. Porsche built 991, all with a six-speed manual, at $184,900 plus $1,050 in the US, weighing 3,021 lb. Allocation went to existing GT customers with established purchase histories at their local dealers, which did not stop prices from passing $1 million in late 2016 and into 2017.",
 "marketNotes": "All figures are US dollars, as of November 2026, from classic.com. The 991.2 GT3 Touring has a benchmark of $224,999 and an average of $222,385 on 114 sales, from a low of $152,000 to a top sale of $316,250 for a 2018 car in Oyster Bay, New York, on May 23, 2025. The PDK 991.2 GT3 has a benchmark of $174,350 and an average of $176,303 on 73 sales, from $134,000 to $215,000. For the earlier cars the pages report listings rather than sales counts: $121,519 for the 991.1 GT3, $191,247 for the 991.1 GT3 RS and $239,559 for the 991.2 GT3 RS. Set against base price before options and fees, the 991.1 GT3 benchmark is about 93 percent of $130,400, the 991.1 RS about 109 percent of $175,900, the PDK 991.2 GT3 about 121 percent and the Touring about 157 percent of $143,600, and the 991.2 RS about 128 percent of $187,500. RennDriver, updated March 22, 2026, puts 911 R values at $400,000 to $700,000. The classic.com page for the manual non-Touring 991.2 GT3 returned no benchmark, so no manual-versus-PDK comparison is made beyond the Touring figures. No individual auction lot page was fetched for this page.",
 "whatToLookFor": "Start with the engine on any 2014 991.1 GT3. All 785 cars delivered by March 2014 had engines replaced under NHTSA recall 14V090000, so a car built then should carry the replacement paperwork, and the service file on any 991.1 should show what was done about the separate finger follower defect. The 10-year, 120,000 mile warranty is described as transferable, but no source consulted here gives its current status for any given car, so the documentation matters more than the claim. Next, the gearbox: PDK only on the 991.1 GT3 and RS, PDK or manual on the 991.2 GT3, and manual only on the Touring Package and the 911 R. A Touring is identifiable by the retractable wing in place of the fixed one. On an RS, confirm which options it left the factory with. The Weissach Package and the magnesium wheel option both took weight out, and PistonHeads says the Clubsport cage and extinguisher package remained a no-cost option. Sports Car Market notes that some costly options did not help resale, and TopSpeed prices a Lava Orange or Ultraviolet wrap at $3,140 each, so original paint against wrapped paint is a fair question on bright cars. On a 911 R, RennDriver prices low-mileage collector-quality cars at the top of its range and higher-mileage cars at the bottom, so odometer and delivery-mileage history are the main variable.",
 "commonProblems": "The one documented fault pattern is the 2014 engine problem. NHTSA's recall 14V090000 for the 2014 911 GT3 describes a piston connecting rod that may come loose and damage the crankcase, with an oil leak and fire risk. GTspirit reported the engine fires and the replacement of engines in all 785 delivered cars. The cause is worded as a loosened piston rod screw connection (GTspirit), a metallurgical defect in the conrod bolts (PistonHeads) and a supplier alloy error in the bolts (Wikipedia); no source consulted here gives Porsche's root-cause report. PistonHeads describes separate finger-follower rocker arm issues in the valvetrain, which Wikipedia puts down to a metallurgical defect in certain batches, and a transferable 10-year, 120,000 mile extended engine warranty. That UK guide also says 991 GT3s don't seem to break down, a UK view rather than US service data. No source consulted here documents PDK, clutch, front-axle-lift or coolant-fitting failures on 991 GT3 cars, so none are listed. Owner forum threads on Rennlist exist but were not fetched.",
 "valueTrajectory": "All figures are US dollars, as of November 2026 unless dated. Sports Car Market, in an article published May 13, 2021, reviewed 19 recent public sales of the 2016 GT3 RS at $122,000 to $209,000. Classic.com's benchmark for the 991.1 GT3 RS is $191,247 in November 2026, so the 991.1 RS has not moved far from its 2021 range, though the two figures come from different methods. The 991.2 cars sit higher: the benchmark for the PDK GT3 is $174,350, for the GT3 RS $239,559, and for the Touring $224,999, about $50,649 above the PDK car. PistonHeads, writing from the UK, found little price difference between 991.2 manuals and PDKs; classic.com's data separates the Touring from the PDK car but not the plain manual car, so the gap there is the Touring Package and manual together. The 911 R is the outlier. Prices passed $1 million in late 2016 and into 2017, and RennDriver, updated March 22, 2026, puts values at $400,000 to $700,000. Of the five classic.com benchmarks, only the 991.1 GT3 at $121,519 sits below its $130,400 base price.",
 "overallConfidence": "medium",
 "sources": [
  {
   "ref": "pcna-991-gt3-release",
   "title": "Porsche Introduces Fifth Generation of the 911 GT3, Celebrates 50 Years of 911 in the US",
   "url": "https://prnewswire.com/news-releases/porsche-introduces-fifth-generation-of-the-911-gt3-celebrates-50-years-of-911-in-the-us-200215241.html",
   "publisher": "Porsche Cars North America via PR Newswire",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "US launch release for the 991.1 GT3: price from $130,400 plus $950 destination, 3.8-liter 475 hp engine with 9,000 rpm redline, claimed 0-60 mph in 3.3 seconds and 195 mph, US on sale in late 2013."
  },
  {
   "ref": "pcna-2019-gt3rs-release",
   "title": "Born from racing: the new 2019 Porsche 911 GT3 RS",
   "url": "https://www.motorwayamerica.com/news/born-racing-%E2%80%94-new-2019-porsche-911-gt3-rs",
   "publisher": "Motorway America (republished Porsche US release text)",
   "sourceType": "manufacturer",
   "reliability": "medium",
   "notes": "US launch text for the 2019 GT3 RS: MSRP $187,500 plus $1,050, Weissach Package $18,000, four-liter engine at 520 hp and 346 lb-ft, claimed 0-60 mph in 3.0 seconds, expected at US dealers in the fall. The page republishes press-release wording; it is not Porsche's own site."
  },
  {
   "ref": "autoblog-2018-touring",
   "title": "Porsche 911 GT3 Touring Package revealed ahead of Frankfurt",
   "url": "https://www.autoblog.com/2017/09/11/porsche-911-gt3-touring-package-revealed-ahead-of-frankfurt/",
   "publisher": "Autoblog",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Touring Package on the 991.2 GT3: retractable rear wing in place of the fixed wing, six-speed manual added, PDK not available with the package, US price $143,600 same as the standard car, 0-60 mph in 3.8 seconds."
  },
  {
   "ref": "nhtsa-gt3-2014",
   "title": "NHTSA recalls by vehicle: Porsche 911 GT3, model year 2014",
   "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=PORSCHE&model=911%20GT3&modelYear=2014",
   "publisher": "NHTSA",
   "sourceType": "government",
   "reliability": "high",
   "notes": "Federal recall record 14V090000, Engine and Engine Cooling: a piston connecting rod may come loose and damage the crankcase, with oil leak and fire risk. The listing does not state units affected."
  },
  {
   "ref": "gtspirit-engine-fires",
   "title": "All 2014 Porsche 911 GT3s having new engines fitted following fires",
   "url": "https://gtspirit.com/2014/03/18/all-2014-porsche-911-gt3s-having-new-engines-fitted-following-fires/",
   "publisher": "GTspirit",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "March 2014 report: two GT3 fires in Europe, deliveries halted, owners told not to drive, engines replaced in all 785 cars delivered, cause given as a loosened piston rod screw connection. Silent on US cars."
  },
  {
   "ref": "pistonheads-991-gt3-guide",
   "title": "Porsche 911 GT3 (991) used buying guide",
   "url": "https://www.pistonheads.com/news/general/porsche-911-gt3-991--ph-used-buying-guide/43070",
   "publisher": "PistonHeads (UK)",
   "sourceType": "journalism",
   "reliability": "low",
   "notes": "UK buyer's guide used only for fault history and equipment facts, never price. Establishes the conrod bolt explanation, the finger-follower issue, the 10-year/120,000 mile engine warranty, the Clubsport package as a no-cost option, manual and PDK acceleration figures, and little price gap between 991.2 manuals and PDKs."
  },
  {
   "ref": "scm-2016-gt3rs",
   "title": "2016 Porsche 911 GT3 RS profile",
   "url": "https://www.sportscarmarket.com/profile/2016-porsche-911-gt3-rs",
   "publisher": "Sports Car Market",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "US collector-market profile (published May 13, 2021): base price $175,900, production of 4,520 991.1 RS (1,530 for the US and Canada) and 4,750 991.2 RS (1,760 for the US and Canada), 500 hp and 338 lb-ft, RS build spec, 19 recent sales at $122,000 to $209,000."
  },
  {
   "ref": "autoweb-2016-gt3rs-test",
   "title": "2016 Porsche 911 GT3 RS test drive",
   "url": "https://www.autoweb.com/2016-porsche-911-gt3-rs-test-drive",
   "publisher": "Autoweb (formerly Autobytel)",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "US road impression of the 991.1 RS: 500 hp, 8,800 rpm redline, 3,150 lb, 0-60 mph in under four seconds, PDK only. No price or torque stated. Internally inconsistent on output (an intro line says 510 hp)."
  },
  {
   "ref": "topspeed-gt3rs-configurator",
   "title": "Porsche 911 GT3 RS configurator goes live",
   "url": "https://www.topspeed.com/cars/car-news/porsche-911-gt3-rs-configurator-goes-live-ar168074.html",
   "publisher": "TopSpeed",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "US configurator story for the 2016 GT3 RS: at least $175,900, 500 hp, 339 lb-ft, PDK, option pricing including $3,140 wraps."
  },
  {
   "ref": "wikipedia-911-gt3",
   "title": "Porsche 911 GT3",
   "url": "https://en.wikipedia.org/wiki/Porsche_911_GT3",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Pointer only. 0-60 mph and top speed claims for the 991.1 GT3, 991.2 GT3 acceleration, Nurburgring times, the supplier-bolt explanation of the 2014 engine failures and the finger follower defect. Its production table is not used. Never the sole support for a contested figure."
  },
  {
   "ref": "renndriver-911r",
   "title": "Porsche 911 R: Specs, the Speculation Bubble, and Current Values",
   "url": "https://renndriver.com/guides/porsche-911-r/",
   "publisher": "RennDriver",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "911 R: 991 built, $184,900 US price, 500 hp at 8,250 rpm, 338 lb-ft at 6,250 rpm, 3,021 lb, allocation through existing GT customers, values updated March 22, 2026, prices past $1 million in late 2016 and 2017."
  },
  {
   "ref": "flatsixes-911r",
   "title": "2016 Porsche 911 R specifications",
   "url": "https://flatsixes.com/cars/porsche-limited-editions/2016-porsche-911-r-specifications/",
   "publisher": "Flatsixes",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "911 R second source: 991 units, $184,900 plus $1,050 destination, manual only, radio and A/C delete at no charge."
  },
  {
   "ref": "classic-9911-gt3",
   "title": "Porsche 911 GT3 - 991.1 market data",
   "url": "https://www.classic.com/m/porsche/911/991/9911/gt3/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "Market benchmark $121,519 for the 991.1 GT3, model years 2014 to 2016. The page reports listings rather than a sales count."
  },
  {
   "ref": "classic-9911-gt3rs",
   "title": "Porsche 911 GT3 RS - 991.1 market data",
   "url": "https://www.classic.com/m/porsche/911/991/9911/gt3-rs/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "Market benchmark $191,247 for the 991.1 GT3 RS, model years 2015 to 2016 as listed."
  },
  {
   "ref": "classic-9912-gt3-pdk",
   "title": "Porsche 911 GT3 - PDK - 991.2 market data",
   "url": "https://www.classic.com:443/m/porsche/911/991/9912/gt3/automatic/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "991.2 GT3 PDK: benchmark $174,350, average $176,303, 73 sales, low $134,000, top $215,000."
  },
  {
   "ref": "classic-9912-gt3-touring",
   "title": "Porsche 911 GT3 Touring - 991.2 market data",
   "url": "https://www.classic.com:443/m/porsche/911/991/9912/gt3/touring/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "991.2 GT3 Touring: benchmark $224,999, average $222,385, 114 sales, low $152,000, top $316,250 (2018 car, Oyster Bay, New York, May 23, 2025)."
  },
  {
   "ref": "classic-9912-gt3rs",
   "title": "Porsche 911 GT3 RS - 991.2 market data",
   "url": "https://www.classic.com/m/porsche/911/991/9912/gt3-rs/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "Market benchmark $239,559 for the 991.2 GT3 RS, model years 2018 to 2020 as listed; asking prices on 24 of 373 listings run $195,333 to $299,980."
  }
 ],
 "claims": [
  {
   "section": "specs",
   "claimText": "Porsche announced the 991.1 GT3 for the US at $130,400 plus a $950 destination charge, on sale in the United States in late 2013.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "pcna-991-gt3-release"
   ],
   "evidence": [
    {
     "ref": "pcna-991-gt3-release",
     "quote": "will be priced from $130,400, not including a $950 destination charge."
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 991.1 GT3 used a 3.8-liter boxer engine rated at 475 hp with a 9,000 rpm redline.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "pcna-991-gt3-release"
   ],
   "evidence": [
    {
     "ref": "pcna-991-gt3-release",
     "quote": "The powertrain is composed of a 3.8-liter boxer engine yielding 475 hp (125 hp/liter) and a 9,000 rpm redline."
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "Porsche claimed 0-60 mph in 3.3 seconds and 195 mph for the 991.1 GT3; Wikipedia says 3.5 seconds or less and a claimed 202 mph; PistonHeads gives 3.5 seconds to 62 mph.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "pcna-991-gt3-release",
    "wikipedia-911-gt3",
    "pistonheads-991-gt3-guide"
   ],
   "conflictNote": "The Porsche Cars North America release claims 3.3 seconds to 60 mph and a top track speed of 195 mph. Wikipedia says 3.5 seconds or less to 60 mph and a claimed top speed of 202 mph. PistonHeads gives 3.5 seconds to 62 mph. These are manufacturer claims and secondary restatements, not instrumented US tests. Not resolved by any source consulted here.",
   "evidence": [
    {
     "ref": "pcna-991-gt3-release",
     "quote": "The car now sprints from zero to 60 mph in 3.3 seconds on its way to a top track speed of 195 mph."
    },
    {
     "ref": "wikipedia-911-gt3",
     "quote": "accelerate from 0–97 km/h (0–60 mph) in 3.5 seconds or less"
    },
    {
     "ref": "wikipedia-911-gt3",
     "quote": "The GT3 has a claimed top speed of 325 km/h (202 mph)."
    },
    {
     "ref": "pistonheads-991-gt3-guide",
     "quote": "but more importantly a considerably shorter 0-62 time of 3.5sec."
    }
   ]
  },
  {
   "section": "problems",
   "claimText": "After engine fires in Europe in March 2014, Porsche replaced the engines in all 785 GT3s delivered to that point.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "gtspirit-engine-fires",
    "pistonheads-991-gt3-guide"
   ],
   "evidence": [
    {
     "ref": "gtspirit-engine-fires",
     "quote": "Porsche will replace all the engines of all 785 GT3s delivered thus far!"
    },
    {
     "ref": "pistonheads-991-gt3-guide",
     "quote": "All 785 of the cars that had been produced to that point were recalled and fitted with new engines"
    }
   ]
  },
  {
   "section": "problems",
   "claimText": "NHTSA records an engine recall on the 2014 911 GT3: a piston connecting rod may come loose and damage the crankcase, with a risk of oil leak and fire.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "nhtsa-gt3-2014"
   ],
   "evidence": [
    {
     "ref": "nhtsa-gt3-2014",
     "quote": "In the affected vehicles, a piston connecting rod may come loose and damage the engine crankcase."
    },
    {
     "ref": "nhtsa-gt3-2014",
     "quote": "A damaged crankcase may allow engine oil to leak onto hot components in the engine bay which may result in a fire."
    }
   ]
  },
  {
   "section": "problems",
   "claimText": "Sources word the cause of the 2014 GT3 engine failures differently: a loosened piston rod screw connection, a metallurgical defect in the conrod bolts, or a supplier alloy error in the bolts.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "gtspirit-engine-fires",
    "pistonheads-991-gt3-guide",
    "wikipedia-911-gt3"
   ],
   "conflictNote": "GTspirit quotes Porsche as blaming a loosened piston rod screw connection that damaged the crankcase. PistonHeads attributes the first failures to a metallurgical defect in the conrod bolts. Wikipedia says the bolt supplier made a production error in the alloy. NHTSA's recall text says only that a connecting rod may come loose. The wordings are compatible with a conrod bolt failure, but no source consulted here gives Porsche's root-cause report. Unresolved.",
   "evidence": [
    {
     "ref": "gtspirit-engine-fires",
     "quote": "the damage was caused by a loosened piston rod screw connection which damaged the crankcase."
    },
    {
     "ref": "pistonheads-991-gt3-guide",
     "quote": "The first failures on 2013-14 991 GT3s were attributed to a metallurgical defect in the conrod bolts."
    },
    {
     "ref": "wikipedia-911-gt3",
     "quote": "it was discovered that the supplier of the connecting rod bolts had made a production error in the alloy of the bolt."
    }
   ]
  },
  {
   "section": "problems",
   "claimText": "A separate finger follower defect affected the valvetrain, and PistonHeads describes a transferable worldwide 10-year, 120,000 mile extended engine warranty.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "pistonheads-991-gt3-guide",
    "wikipedia-911-gt3"
   ],
   "evidence": [
    {
     "ref": "pistonheads-991-gt3-guide",
     "quote": "a transferable worldwide 10 year/120,000 mile extended engine warranty"
    },
    {
     "ref": "pistonheads-991-gt3-guide",
     "quote": "Separate issues were discovered with the finger-follower rocker arms in the valvetrain"
    },
    {
     "ref": "wikipedia-911-gt3",
     "quote": "a metallurgical defect in certain batches of \"finger followers\" (valve train rocker arms)"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 991.1 GT3 was PDK only; a manual did not arrive on a GT3 until the 991.2 cars of 2017, which kept a 4.0-liter flat-six.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "pistonheads-991-gt3-guide",
    "autoblog-2018-touring"
   ],
   "evidence": [
    {
     "ref": "pistonheads-991-gt3-guide",
     "quote": "Manuals didn't arrive until the 991.2 cars of 2017, so are relatively expensive"
    },
    {
     "ref": "autoblog-2018-touring",
     "quote": "For the refreshed 991.2 model, Porsche adds a wonderful six-speed manual to the option sheet."
    },
    {
     "ref": "autoblog-2018-touring",
     "quote": "You still get the 4.0-liter flat-six and a six-speed manual."
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 991.2 GT3 with the Touring Package listed at $143,600, the same as the standard GT3, and swapped the fixed wing for a smaller retractable one.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "autoblog-2018-touring"
   ],
   "evidence": [
    {
     "ref": "autoblog-2018-touring",
     "quote": "The 911 GT3 with the Touring Package starts at $143,600, the same as the standard car."
    },
    {
     "ref": "autoblog-2018-touring",
     "quote": "Instead, it gets a smaller, retractable rear wing with a Gurney flap."
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The Touring Package could not be ordered with the PDK; the dual-clutch transmission was not available with it.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "autoblog-2018-touring"
   ],
   "evidence": [
    {
     "ref": "autoblog-2018-touring",
     "quote": "Porsche's seven-speed dual-clutch transmission is not available."
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 2019 911 GT3 RS listed at $187,500 before the $1,050 delivery fee, and the Weissach Package cost $18,000.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "pcna-2019-gt3rs-release"
   ],
   "evidence": [
    {
     "ref": "pcna-2019-gt3rs-release",
     "quote": "The MSRP is $187,500, not including available options or the $1,050 delivery, processing and handling fee."
    },
    {
     "ref": "pcna-2019-gt3rs-release",
     "quote": "The Weissach Package is available for $18,000."
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 2019 GT3 RS used a four-liter naturally aspirated engine making 520 hp and 346 lb-ft, with a claimed 0-60 mph time of 3.0 seconds.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "pcna-2019-gt3rs-release"
   ],
   "evidence": [
    {
     "ref": "pcna-2019-gt3rs-release",
     "quote": "a high-revving four-liter, naturally aspirated engine producing 520 horsepower and 346 lb.-ft. of torque."
    },
    {
     "ref": "pcna-2019-gt3rs-release",
     "quote": "The new 911 GT3 RS accelerates from 0 to 60 mph in 3.0 seconds,"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "Wikipedia credits the 991.2 GT3 RS with a 6:56.4 lap of the Nurburgring Nordschleife and puts the 991.1 RS at 7 minutes 20 seconds.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-911-gt3"
   ],
   "evidence": [
    {
     "ref": "wikipedia-911-gt3",
     "quote": "set a lap time of 6:56.4 around the Nürburgring Nordschleife."
    },
    {
     "ref": "wikipedia-911-gt3",
     "quote": "The Nürburgring Nordschleife time is 7 minutes and 20 seconds."
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 991.1 GT3 RS listed from $175,900 in the US, produced 500 hp, and was PDK only.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "topspeed-gt3rs-configurator",
    "autoweb-2016-gt3rs-test"
   ],
   "evidence": [
    {
     "ref": "topspeed-gt3rs-configurator",
     "quote": "So whether you have at least $175,900 to spare or you're just curious about the options"
    },
    {
     "ref": "autoweb-2016-gt3rs-test",
     "quote": "The 500-horsepower all-aluminum engine screams to an astonishing 8800-rpm redline"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 991.1 GT3 RS made about 338 lb-ft of torque: Sports Car Market prints 338 lb-ft and TopSpeed 339 lb-ft.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "scm-2016-gt3rs",
    "topspeed-gt3rs-configurator"
   ],
   "evidence": [
    {
     "ref": "scm-2016-gt3rs",
     "quote": "Powered by a 4.0-liter engine making 500 horsepower and 338 foot-pounds of torque"
    },
    {
     "ref": "topspeed-gt3rs-configurator",
     "quote": "with a naturally aspirated, 500-horsepower, 339-pound-feet, 4.0-liter, flat-six powerplant at the rear."
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "An Autoweb road impression of the 991.1 GT3 RS gave 3,150 lb and 0-60 mph in under four seconds.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "autoweb-2016-gt3rs-test"
   ],
   "evidence": [
    {
     "ref": "autoweb-2016-gt3rs-test",
     "quote": "The GT3 RS tips the scales at just 3,150 pounds."
    },
    {
     "ref": "autoweb-2016-gt3rs-test",
     "quote": "will rocket to 60 mph from a standstill in less than four seconds."
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "For the 991.2 GT3 the manual is quoted at 3.8 seconds to 60 mph by Autoblog and Wikipedia and 3.8 seconds to 62 mph by PistonHeads; Wikipedia gives 3.2 seconds for the PDK.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "autoblog-2018-touring",
    "pistonheads-991-gt3-guide",
    "wikipedia-911-gt3"
   ],
   "evidence": [
    {
     "ref": "autoblog-2018-touring",
     "quote": "The car hits 0-60 mph in 3.8 seconds."
    },
    {
     "ref": "pistonheads-991-gt3-guide",
     "quote": "In the real world that might be considered pretty academic as 3.8sec is hardly hanging about."
    },
    {
     "ref": "wikipedia-911-gt3",
     "quote": "acceleration time of 3.8 seconds (3.2 seconds for the PDK version)"
    }
   ]
  },
  {
   "section": "history",
   "claimText": "An Autoweb road impression of the 991.1 GT3 RS described the idle as an erratic beast barely leashed and said the car could dance like Fred Astaire when there is no grip.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "autoweb-2016-gt3rs-test"
   ],
   "evidence": [
    {
     "ref": "autoweb-2016-gt3rs-test",
     "quote": "even when settled down to idle sounds temperamental, an erratic beast barely leashed."
    },
    {
     "ref": "autoweb-2016-gt3rs-test",
     "quote": "a vehicle that can dance like Fred Astaire when there is no grip"
    }
   ]
  },
  {
   "section": "production",
   "claimText": "Sports Car Market counts 4,520 991.1 GT3 RS, 1,530 of them for the US and Canada, and 4,750 991.2 GT3 RS, 1,760 for the US and Canada.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "scm-2016-gt3rs"
   ],
   "evidence": [
    {
     "ref": "scm-2016-gt3rs",
     "quote": "These are the 2007–08 997.1 GT3 RS 3.6 (452 for U.S. and Canada out of 1,169 worldwide),"
    },
    {
     "ref": "scm-2016-gt3rs",
     "quote": "the 2016 991.1 GT3 RS 4.0 (1,530/4,520)"
    },
    {
     "ref": "scm-2016-gt3rs",
     "quote": "the 2019 991.2 GT3 RS 4.0 (1,760/4,750)."
    }
   ]
  },
  {
   "section": "production",
   "claimText": "The 911 R was limited to 991 cars, as both RennDriver and Flatsixes state.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "renndriver-911r",
    "flatsixes-911r"
   ],
   "evidence": [
    {
     "ref": "renndriver-911r",
     "quote": "Limited production (991 units) drove the speculation."
    },
    {
     "ref": "flatsixes-911r",
     "quote": "Limited edition of only 991 units worldwide"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 911 R listed at $184,900 in the US before a $1,050 destination charge, with a six-speed manual only and a curb weight of 3,021 lb.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "renndriver-911r",
    "flatsixes-911r"
   ],
   "evidence": [
    {
     "ref": "renndriver-911r",
     "quote": "Porsche priced the 911 R at $184,900 in the United States."
    },
    {
     "ref": "renndriver-911r",
     "quote": "The 911 R weighs 3,021 lbs (1,370 kg)."
    },
    {
     "ref": "flatsixes-911r",
     "quote": "The starting MSRP is $184,900, excluding the $1,050 destination charge."
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 911 R made 500 hp at 8,250 rpm and 338 lb-ft at 6,250 rpm, per RennDriver.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "renndriver-911r"
   ],
   "evidence": [
    {
     "ref": "renndriver-911r",
     "quote": "This engine produces 500 hp at 8,250 rpm and 338 lb-ft of torque at 6,250 rpm."
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "On the 911 R the radio and air conditioning were deleted and could be ordered back at no extra charge.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "flatsixes-911r"
   ],
   "evidence": [
    {
     "ref": "flatsixes-911r",
     "quote": "Radio and A/C deleted (can be ordered at no extra charge)"
    }
   ]
  },
  {
   "section": "problems",
   "claimText": "PistonHeads says the Clubsport cage and extinguisher package remained a no-cost option, and that 991.2 manuals and PDKs trade at little price difference.",
   "confidence": "low",
   "status": "verified",
   "sourceRefs": [
    "pistonheads-991-gt3-guide"
   ],
   "evidence": [
    {
     "ref": "pistonheads-991-gt3-guide",
     "quote": "The Clubsport race cage/extinguisher package remained a no-cost option."
    },
    {
     "ref": "pistonheads-991-gt3-guide",
     "quote": "There's not much price difference between 991.2 manuals and PDKs."
    }
   ]
  },
  {
   "section": "market",
   "claimText": "As of November 2026 classic.com's benchmark for the 991.2 GT3 Touring is $224,999 on 114 sales, against $174,350 on 73 sales for the PDK 991.2 GT3.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "classic-9912-gt3-touring",
    "classic-9912-gt3-pdk"
   ],
   "evidence": [
    {
     "ref": "classic-9912-gt3-touring",
     "quote": "CMB $224,999 Avg $222,385 Sales Count 114 Dollar Volume $25.4m"
    },
    {
     "ref": "classic-9912-gt3-pdk",
     "quote": "CMB $174,350 Avg $176,303 Sales Count 73 Dollar Volume $12.9m"
    }
   ]
  },
  {
   "section": "market",
   "claimText": "As of November 2026 classic.com lists market benchmarks of $121,519 for the 991.1 GT3, $191,247 for the 991.1 GT3 RS and $239,559 for the 991.2 GT3 RS.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "classic-9911-gt3",
    "classic-9911-gt3rs",
    "classic-9912-gt3rs"
   ],
   "evidence": [
    {
     "ref": "classic-9911-gt3",
     "quote": "CMB $121,519 Porsche 911 GT3 - 991.1 (2014 to 2016)"
    },
    {
     "ref": "classic-9911-gt3rs",
     "quote": "CMB $191,247 Porsche 911 GT3 RS - 991.1 (2015 to 2016)"
    },
    {
     "ref": "classic-9912-gt3rs",
     "quote": "CMB $239,559 Porsche 911 GT3 RS - 991.2 (2018 to 2020)"
    }
   ]
  },
  {
   "section": "market",
   "claimText": "RennDriver, updated March 22, 2026, puts 911 R values at $400,000 to $700,000, against prices that passed $1 million in late 2016 and into 2017.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "renndriver-911r"
   ],
   "evidence": [
    {
     "ref": "renndriver-911r",
     "quote": "A Porsche 911 R is worth between $400,000 and $700,000 as of 2026, depending on mileage and specification."
    },
    {
     "ref": "renndriver-911r",
     "quote": "By late 2016 and into 2017, prices had climbed past $1 million."
    }
   ]
  },
  {
   "section": "market",
   "claimText": "Sports Car Market, in May 2021, reviewed 19 recent public sales of the 2016 GT3 RS at $122,000 to $209,000.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "scm-2016-gt3rs"
   ],
   "evidence": [
    {
     "ref": "scm-2016-gt3rs",
     "quote": "A review of 19 recent public sales of 2016 GT3 RSs shows a range of $122,000 to $209,000."
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 991.1 GT3 RS had a magnesium roof panel and a carbon fiber hood, front fenders, engine lid and wing, and Sports Car Market says some costly options did not help resale.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "scm-2016-gt3rs"
   ],
   "evidence": [
    {
     "ref": "scm-2016-gt3rs",
     "quote": "An exotic build spec (a magnesium roof panel, carbon-fiber hood, front fenders, engine lid and wing)"
    },
    {
     "ref": "scm-2016-gt3rs",
     "quote": "some of the options Seinfeld paid dearly for did not help its resale value."
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "TopSpeed priced each of the two optional wraps for the 2016 GT3 RS, Lava Orange or Ultraviolet, at $3,140.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "topspeed-gt3rs-configurator"
   ],
   "evidence": [
    {
     "ref": "topspeed-gt3rs-configurator",
     "quote": "Things get a lot more enticing if you're willing to spend $3,140 on either of the two optional wraps."
    },
    {
     "ref": "topspeed-gt3rs-configurator",
     "quote": "Be it Lava Orange or Ultraviolet, the three grand will turn the 911 into the most attention-grabbing rig"
    }
   ]
  }
 ]
};
