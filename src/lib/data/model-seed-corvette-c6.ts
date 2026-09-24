/**
 * Researched model draft - Chevrolet Corvette C6, coupe, convertible, Z06, Grand Sport, ZR1 and 427 Convertible (US 2005-2013 model years).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedCorvetteC6 = {
 "slug": "chevrolet/corvette-c6",
 "heroPhoto": "/images/models/chevrolet-corvette-c6.jpg",
 "heroPhotoCredit": "Photo: MercurySable99, CC BY-SA 4.0, via Wikimedia Commons",
 "make": "Chevrolet",
 "model": "Corvette",
 "generation": "C6",
 "generationCode": "C6",
 "trim": "Coupe, Convertible, Z06, ZR1, Grand Sport and 427 Convertible (2005-2013 model years)",
 "yearStart": 2005,
 "yearEnd": 2013,
 "bodyStyles": [
  "2-door hatchback coupe with a removable roof panel, body color or transparent (2005-2013)",
  "2-door convertible with a soft top, power operation optional (2005-2013)",
  "2-door fixed-roof coupe on an aluminum frame, Z06 (2006-2013) and ZR1 (2009-2013)",
  "Grand Sport coupe and convertible with Z06-width fenders on the steel frame (2010-2013)",
  "427 Convertible, LS7 engine in the steel-frame convertible (2013 only)"
 ],
 "engines": [
  "6.0-liter (5,967 cc) LS2 pushrod V8, naturally aspirated, 400 hp at 6,000 rpm and 400 lb-ft at 4,400 rpm (2005-2007)",
  "6.2-liter (6,162 cc) LS3 pushrod V8, naturally aspirated, 430 hp at 6,500 rpm and 424 lb-ft at 4,600 rpm, or 436 hp and 428 lb-ft with the dual-mode exhaust (2008-2013; dry sump on manual Grand Sport coupes)",
  "7.0-liter (7,011 cc) LS7 pushrod V8, naturally aspirated, dry sump, titanium connecting rods and intake valves, 505 hp at 6,300 rpm and 470 lb-ft at 4,800 rpm (Z06 2006-2013, 427 Convertible 2013)",
  "6.2-liter LS9 pushrod V8, Eaton R2300 supercharger with intercooler, dry sump, 638 hp at 6,500 rpm and 604 lb-ft at 3,800 rpm (ZR1 2009-2013)"
 ],
 "productionTotal": null,
 "productionNotes": "The generation total depends on which table is read. CorvSport and Wikipedia both give 215,223 C6 Corvettes. Corvette Central's tech blog prints a year-by-year table by body and variant that totals 215,125. The two agree on every model year except 2011, which Wikipedia gives as 13,696 and Corvette Central as 13,598, a gap of exactly 98 cars that accounts for the whole difference. No fetched source explains it, and no Chevrolet or National Corvette Museum table was retrieved to settle it, so productionTotal is left empty. The agreed years are 37,372 (2005), 34,021 (2006), 40,561 (2007, the peak), 35,310 (2008), 16,956 (2009), 12,194 (2010), 11,647 (2012) and 13,466 (2013). CorvSport dates actual production from June 2004 to February 28, 2013. Corvette Central's variant columns give 6,272 Z06s in 2006, 3,461 Z06s and 1,415 ZR1s in 2009, and 2,552 427 Convertibles in 2013, the last figure matched by Wikipedia. Corvette Central alone states that Grand Sports outsold the base coupe and convertible in 2010, and its table carries 3,707 Grand Sport coupes and 2,335 convertibles that year. Wikipedia alone gives the special-edition counts: 399 Ron Fellows Z06s, 33 of them to Canada; about 125 GT1 Championship Editions against a plan of 600; and 252 Z06 Carbon Limited Editions against a plan of 500, though the same article elsewhere says about 250. Corvette Central's variant columns were not summed here because the 2010 row's Z06 and ZR1 columns cannot be confirmed against a second table. US prices also disagree: CorvSport's 2005 page lists the coupe at $44,245 and the convertible at $52,245 in its spec block and option table, but its text gives initial base prices of $43,710 and $51,445, $125 under the last C5 coupe, while Corvette Central says the 2005 undercut the 2004 base price by $300.",
 "notableTrims": [
  {
   "name": "2005 coupe and convertible (LS2)",
   "note": "The one-year car with the four-speed automatic, which 22,380 of 37,372 buyers chose. Manual cars must be parked in Reverse to stop a battery drain, and the 2005 differential is described as weaker than later units. Listed at $44,245 for the coupe."
  },
  {
   "name": "2006-2013 Z06",
   "note": "Aluminum frame, fixed roof, carbon fiber front fenders and the 505-hp LS7. Car and Driver tested a 3,147 lb car at 3.6 seconds to 60 mph for $65,800 base. The LS7 valve guide question attaches to every one."
  },
  {
   "name": "2008-2013 base car (LS3)",
   "note": "The LS3 at 430 hp, 436 hp with the dual-mode exhaust, plus the TR6060 six-speed and revised steering for 2008. Vette Vues calls 2008 the sweet spot of the run and the LS3 the most durable base engine."
  },
  {
   "name": "2009-2013 ZR1",
   "note": "The Blue Devil project: supercharged LS9 at 638 hp, carbon fiber roof, hood and fenders, a hood window over the intercooler and the first carbon-ceramic brakes on a Corvette. $103,300 including destination, plus a $1,700 gas guzzler tax."
  },
  {
   "name": "2010-2013 Grand Sport",
   "note": "Replaced the Z51 option with Z06 fenders, brakes and wheel sizes on the steel frame. Manual coupes got a dry-sump LS3 and launch control. It outsold the base coupe and convertible combined in 2010 per Corvette Central."
  },
  {
   "name": "2011 Z06 Carbon Limited Edition",
   "note": "Inferno Orange or Supersonic Blue, ZR1 carbon-ceramic brakes, Magnetic Selective Ride Control and a carbon hood. Chevrolet planned 500 and Wikipedia says 252 were built. classic.com benchmarks it at $85,149 as of September 2026."
  },
  {
   "name": "2013 427 Convertible",
   "note": "The final-year collector edition: the Z06's 7.0-liter LS7, manual gearbox, steering and brakes in the steel convertible. 2,552 built per Corvette Central and Wikipedia; the last C6 of all was a white 427 completed February 28, 2013."
  }
 ],
 "specs": {
  "layout": "Front-mid-engine V8, rear-wheel drive, rear transaxle; two seats",
  "chassis": "Steel frame on coupe, convertible, Grand Sport and 427; aluminum frame on Z06 and ZR1 with a magnesium engine cradle; carbon fiber and balsa composite floors on the Z06",
  "engine": "6.0-liter LS2 (2005-2007); 6.2-liter LS3 (2008-2013); 7.0-liter LS7 (Z06, 427 Convertible); 6.2-liter supercharged LS9 (ZR1)",
  "power": "400 hp (LS2); 430 hp, or 436 hp with dual-mode exhaust (LS3); 505 hp (LS7); 638 hp (LS9)",
  "torque": "400 lb-ft (LS2); 424 lb-ft, or 428 lb-ft with dual-mode exhaust (LS3); 470 lb-ft (LS7); 604 lb-ft (LS9)",
  "transmission": "Tremec T56 six-speed manual to 2007, TR6060 six-speed from 2008; four-speed 4L65-E automatic in 2005 only; six-speed 6L80 paddle-shift automatic from 2006 on base and Grand Sport; Z06, ZR1 and 427 manual only",
  "weight": "Base car 3,288 lb and Z06 3,147 lb (Car and Driver, 2005 test); Z51 coupe 3,273 lb and ZR1 3,350 lb (Wikipedia, citing Car and Driver)",
  "acceleration": "0-60 mph: 4.2 sec (Chevrolet claim for the 2005 coupe, per CorvSport) or 4.3 sec (Corvette Central); 4.1 sec for a 2009 Z51 coupe, 3.6 sec for the Z06 and 3.4 sec for the ZR1 (Car and Driver tests)",
  "quarter_mile": "11.7 sec for the 2006 Z06 (Car and Driver); 11.3 sec at 131 mph for the ZR1 (Chevrolet claim, via Jalopnik)",
  "top_speed": "186 mph for the 2005 base car (Corvette Central); 198 mph for the Z06 (manufacturer claim printed by Car and Driver); 205 mph for the ZR1 (Chevrolet, via Jalopnik and Wikipedia)",
  "brakes": "Z06: 14.0-inch front and 13.4-inch rear rotors with six-piston front calipers; ZR1: 15.5-inch front and 15.0-inch rear Brembo carbon-ceramic rotors (Car and Driver)",
  "epa_fuel_economy": "2009 per fueleconomy.gov: 6.2-liter manual 16 city, 26 highway; 6.2-liter automatic 15 city, 25 highway; 7.0-liter manual 15 city, 24 highway. ZR1 14 city, 20 highway per Chevrolet via Jalopnik",
  "dimensions": "Wheelbase 105.6 in (2,682 mm); length 174.6 in (4,435 mm), Z06 and ZR1 175.6 in (4,460 mm); width 72.6 in (1,844 mm), Grand Sport, Z06 and ZR1 75.9 in (1,928 mm) per Wikipedia",
  "us_msrp": "2005 coupe $44,245 or $43,710 and convertible $52,245 or $51,445 (CorvSport, both figures; see productionNotes); 2006 Z06 $65,800 (Car and Driver); 2009 ZR1 $103,300 including $850 destination, plus $1,700 gas guzzler tax (Chevrolet via Jalopnik)",
  "assembly": "Bowling Green, Kentucky; June 2004 to February 28, 2013"
 },
 "summary": "The C6 is the sixth-generation Corvette, sold in the United States for the 2005 through 2013 model years and built at Bowling Green, Kentucky, from June 2004 to February 28, 2013. It kept the rear-transaxle layout and transverse leaf springs of the C5 but gave up pop-up headlights for the first exposed lamps on a Corvette since 1962, on a body 5.1 inches shorter with a wheelbase 1.2 inches longer. The base car began with the 400-hp 6.0-liter LS2 and moved to the 6.2-liter LS3, 430 hp or 436 hp with the dual-mode exhaust, for 2008. Around it Chevrolet built the aluminum-framed Z06 with the 505-hp 7.0-liter LS7 for 2006, the supercharged 638-hp ZR1 at $103,300 for 2009, the wide-body Grand Sport for 2010 and the 427 Convertible for 2013. Sources put the total at 215,223 or 215,125, a split that sits entirely in the 2011 figure. LS7 valve guide wear, harmonic balancer failure and the 2005 manual car's battery drain are the documented faults. As of September 2026 classic.com averages the C6 at $52,184.",
 "history": "## Why the C6 kept the formula and changed the face\n\nThe C5 had already done the hard engineering: aluminum small-block, rear transaxle, transverse composite springs. Corvette Central describes the C6 as continuing the team's mission to improve on the previous generation in every category, and the brief was refinement rather than reinvention. Wikipedia credits the design to Tom Peters in 2001. The new body was 5.1 inches shorter than the C5, an inch narrower and on a wheelbase 1.2 inches longer, with a larger cabin and, for the first time since 1962, exposed headlights. The test was price. CorvSport notes that buyers expected a sizable increase and instead got a 2005 coupe priced below the last C5.\n\n## 2005: the LS2 car\n\nThe 6.0-liter LS2 made 400 hp and 400 lb-ft, only five horsepower short of the 2004 Z06 by CorvSport's reckoning. Chevrolet claimed 4.2 seconds to 60 mph; Corvette Central prints 4.3 seconds and 186 mph. CorvSport lists the coupe at $44,245 and the convertible at $52,245, and its option table shows how the cars were ordered: 22,380 of the 37,372 built had the four-speed automatic, and 15,345 took the $1,495 Z51 package. Black was the most popular color at 7,995 cars. Chevrolet did not offer Torch Red that year; the plant built a single Torch Red car to test the color, and the National Corvette Museum later acquired and sold it.\n\n## 2006: the Z06 and a 7.0-liter small-block\n\nThe Z06 returned for 2006 as a homologation car for racing, with a fixed roof, an aluminum frame that Car and Driver says weighed 136 lb, a magnesium engine cradle and carbon fiber front fenders and floors. Its 7.0-liter LS7 used titanium connecting rods and intake valves and a dry sump, and made 505 hp at 6,300 rpm on the way to a 7,000-rpm redline. Assistant chief engineer Tadge Juechter's team added coolers for every fluid except brake fluid. Car and Driver's October 2005 test car weighed 3,147 lb, 141 lb less than a base car, ran 3.6 seconds to 60 mph and 11.7 seconds in the quarter, stopped from 70 mph in 162 feet and cost $65,800 before options. The same year the base car got a six-speed paddle-shift automatic.\n\n## 2008-2009: the LS3 and the Blue Devil\n\nFor 2008 the base engine became the 6.2-liter LS3 at 430 hp, or 436 hp with the dual-mode exhaust, the Tremec TR6060 replaced the T56 and the steering was revised. Above the Z06, a project code-named Blue Devil, for the university of GM chief executive Rick Wagoner, became the 2009 ZR1. Its LS9 used an Eaton supercharger and a water-to-air intercooler visible through a window in the hood for 638 hp and 604 lb-ft, and it was the first Corvette with carbon-ceramic brakes. Chevrolet announced it in June 2008 at $103,300 including destination, plus a $1,700 gas guzzler tax, and claimed 205 mph.\n\n## 2010-2013: Grand Sport, special editions and the 427\n\nProduction fell to 16,956 for 2009 as the financial crisis took hold, and Wikipedia records that the 2009 GT1 Championship Edition was cut from a planned 600 cars to about 125 after the government takeover of General Motors. The Grand Sport replaced the Z51 option for 2010 with Z06 fenders and brakes on the steel frame, and Corvette Central says it outsold the base coupe and convertible that year. The 2011 Z06 Carbon Limited Edition was planned at 500 and built in 252 examples per Wikipedia. The run closed with the 2013 427 Convertible, the LS7 in the steel convertible, 2,552 built. The last C6, a white 427, was completed on February 28, 2013.",
 "marketNotes": "All figures are US dollars as of September 2026. classic.com averages the C6 across all variants at $52,184, a figure pulled upward by the ZR1, and records the lowest C6 sale as $8,500 for a 2006 coupe on November 9, 2023. Its CLASSIC.COM Market Benchmarks by variant are $40,621 for the Grand Sport, $48,457 for the Z06, $62,569 for the 2013 427 Collector Edition and $99,019 for the ZR1; no benchmark is shown for the base coupe or convertible. On its Z06 page classic.com averages the C6 Z06 at $52,548, benchmarks the standard Z06 at $48,455 and records the lowest Z06 sale as $25,300 for a 2008 on April 10, 2026. The Z06 special editions benchmark higher: $53,765 for the Ron Fellows Championship Edition, $64,072 for the GT1 Championship Edition, $76,654 for the Centennial Edition and $85,149 for the 2011 Carbon Limited Edition. Vette Vues, undated, places excellent LS3 base cars in the low-to-mid $30,000s, higher-mile or average early LS2 cars in the upper $20,000s and clean Z06s in the mid-to-upper $40,000s. The classic.com listing rows fetched were dealer asking prices rather than sales and are not used, no individual auction lot page was fetched, and a classic.com ZR1 page returned a 404 error, so no dated ZR1 sale is quoted here.",
 "whatToLookFor": "On a Z06 or 427 Convertible, the LS7 valve guides come first. Vette Vues says some production runs wore exhaust-side guides early; Vettes of Atlanta describes the wiggle test, a dial indicator on the valve stem, with movement over .0037 inch taken as a worn guide, and the fix of replacing the powdered-metal guides with manganese-bronze ones. That dealer puts a head repair at $3,500 to $6,500; no second fetched source prices it. Ask whether the heads have been done and by whom. On every C6, watch the crank pulley at idle for wobble and listen for belt chirp: the harmonic balancer's rubber separates, and Vettes of Atlanta prices replacement at $1,100 to $1,900, driven by 6 to 10 hours of labor. On a 2005 manual car, ask whether it has been parked in Reverse, the owner's workaround for a battery drain. Wipe the Magnetic Selective Ride Control shocks and look for oil at the seals, and listen for clunks from the torque tube coupler. Check the NHTSA recall record: 2005-2007 removable roofs and 2006-2007 Z06 roofs for adhesive separation, the 2005-2006 power steering hose and the 2005-2007 headlamp relay wire. Vettes of Atlanta relays a RepairPal average of about $737 a year in repairs for a 2006; that is one secondhand figure. For color, 2005 production ran from 7,995 Black cars down to 717 in Monterey Red and 760 in Velocity Yellow, a $750 paint option, and early 2005 red is Precision Red, paint code 27, before Victory Red, code 74.",
 "commonProblems": "The fault most attached to the C6 is LS7 valve guide wear on the Z06, which Vettes of Atlanta traces to owner forums and describes as a route to engine failure if a valve drops; the accepted cure is reworking the heads with bronze guides. The harmonic balancer on LS2, LS3 and LS7 engines loses the bond between its inner and outer rings and wobbles, and Vettes of Atlanta warns that a full separation can damage the timing cover and steering rack. The 2005 car carries three first-year issues: the four-speed automatic, a rear differential described as weaker than the 2006 and later unit, and a parasitic battery drain on manual cars unless they are parked in Reverse, which Vette Vues calls Dead Battery Syndrome. Vettes of Atlanta also reports differential seal leaks with age, automatic shifters stuck in Park from a failed plastic shift-cable bushing, torque tube coupler noise, and a Service Steering Column Lock message from the anti-theft lock or its sensor. Magnetic Ride shocks leak and are expensive to replace, per Vette Vues. NHTSA lists six recalls for the 2005 model year, including roof panel adhesive separation, rear brake lines exposed to exhaust manifold heat, a power steering hose that could fracture, a tilt and telescoping column signal fault and a headlamp relay wire that could break and cut the low beams. No fetched source documents a window regulator pattern.",
 "valueTrajectory": "The C6 is a car whose ordinary versions have fallen far below their sticker and whose limited versions have not. A 2005 coupe listed at $44,245 has sold for as little as $8,500, a 2006 coupe in November 2023 per classic.com. The Z06 cost $65,800 in 2006; as of September 2026 classic.com benchmarks the standard car at $48,455, and its lowest recorded sale was $25,300 for a 2008 in April 2026. The ZR1, $103,300 plus gas guzzler tax in 2009, benchmarks at $99,019, the closest any C6 comes to its new price. The special editions separate by rarity: the Carbon Limited Edition, 252 built per Wikipedia, benchmarks at $85,149, and the 2,552-car 427 Convertible at $62,569, while the Grand Sport sits at $40,621. Vette Vues, undated, reads the base-car market by engine, with LS3 cars ahead of early LS2 cars. On the evidence fetched, documented LS7 head work, mileage and edition decide more of a car's price than model year does. None of this is a forecast.",
 "overallConfidence": "medium",
 "sources": [
  {
   "ref": "corvettecentral-c6-production",
   "title": "C6 Production Numbers - Corvette Central Tech Blog",
   "url": "https://tech.corvettecentral.com/2013/04/c6-production-numbers/",
   "publisher": "Corvette Central",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "US parts supplier tech blog. Year-by-year table by coupe, convertible, Z06, ZR1, Grand Sport coupe and convertible and 427 Convertible, total 215,125 with 2011 at 13,598; 2013 427 Convertible 2,552; Grand Sport outsold base cars in 2010; 2005 base car 4.3 sec 0-60 and 186 mph; 2005 undercut the 2004 base price by $300."
  },
  {
   "ref": "corvsport-c6-production",
   "title": "C6 Corvette Production Figures",
   "url": "https://www.corvsport.com/c6-corvette-production-figures/",
   "publisher": "CorvSport",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Specialist production page, table behind a paywall. Text gives 215,223 C6 Corvettes, production June 2004 to February 28, 2013, 37,372 and 34,021 in 2005 and 2006, 40,561 peak in 2007, 35,310 in 2008, and the financial crisis cutting later years."
  },
  {
   "ref": "wikipedia-c6",
   "title": "Chevrolet Corvette (C6)",
   "url": "https://en.wikipedia.org/wiki/Chevrolet_Corvette_(C6)",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Pointer. Tom Peters design, exposed headlamps first since 1962, 5.1 in shorter and 1.2 in longer wheelbase, LS2/LS3/LS7/LS9 outputs, TR6060 from 2008, Z06 aluminum frame and homologation role, Blue Devil name, ZR1 205 mph, Grand Sport content, 427 Convertible 2,552, last car February 28, 2013, Ron Fellows 399, GT1 about 125, Carbon 252, yearly table with 2011 at 13,696 and total 215,223, dimensions and curb weights."
  },
  {
   "ref": "corvsport-2005",
   "title": "2005 C6 Chevrolet Corvette: Specifications, VIN, & Options",
   "url": "https://www.corvsport.com/2005-c6-corvette/",
   "publisher": "CorvSport",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Model-year guide. $44,245 coupe and $52,245 convertible in the spec block and option table against $43,710 and $51,445 initial base prices in the text; option take rates (automatic 22,380, Z51 15,345 at $1,495, F55 9,041); 2005 color counts (Black 7,995, Monterey Red 717, Velocity Yellow 760); single Torch Red car; Precision Red code 27 and Victory Red code 74; Chevrolet 0-60 claim of 4.2 sec."
  },
  {
   "ref": "caranddriver-2006-z06",
   "title": "Tested: 2006 Chevy Corvette Z06",
   "url": "https://www.caranddriver.com/reviews/a18201273/chevrolet-corvette-z06-road-test/",
   "publisher": "Car and Driver",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "US period road test, October 2005. $65,800 base and $69,995 as tested, 505 hp at 6,300 rpm and 470 lb-ft at 4,800 rpm, 136 lb aluminum frame, magnesium cradle, titanium rods and intake valves, Tadge Juechter, 3,147 lb against 3,288 lb for the base car, 3.6 sec to 60, 11.7 sec quarter, 162 ft from 70 mph, 0.98 g, 198 mph manufacturer claim, EPA 16/26."
  },
  {
   "ref": "caranddriver-2009-zr1-comparison",
   "title": "Tested: 2009 Chevy Corvette ZR1 vs. Z51 vs. Z06",
   "url": "https://www.caranddriver.com/reviews/a15390153/2009-chevrolet-corvette-zr1-tested-compared-with-z51-z06/",
   "publisher": "Car and Driver",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "US period comparison test. LS3 430 hp and 424 lb-ft, 436 and 428 with the $1,195 dual-mode exhaust; Z51 package $1,695; Z51 coupe from $50,785; ZR1 $31,745 more than the Z06 and about $105,000; LS9 638 hp and 604 lb-ft with Eaton R2300 supercharger; first Corvette carbon-ceramic brakes, 15.5 and 15.0 inch rotors; 0-60 in 4.1, 3.6 and 3.4 sec."
  },
  {
   "ref": "jalopnik-zr1-pricing",
   "title": "2009 Corvette ZR1 Pricing Released: 638 HP For $103,300!",
   "url": "https://www.jalopnik.com/2009-corvette-zr1-pricing-released-638-hp-for-103-300-396344/",
   "publisher": "Jalopnik",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "June 17, 2008 article reproducing Chevrolet's US pricing release: $103,300 MSRP including $850 destination, $1,700 gas guzzler tax, $10,000 3ZR package, EPA 14 city and 20 highway, Chevrolet claims of 3.4 sec 0-60, 11.3 sec at 131 mph and 205 mph."
  },
  {
   "ref": "nhtsa-2005-recalls",
   "title": "NHTSA recalls by vehicle: 2005 Chevrolet Corvette",
   "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=chevrolet&model=corvette&modelYear=2005",
   "publisher": "National Highway Traffic Safety Administration",
   "sourceType": "government",
   "reliability": "high",
   "notes": "Six federal recall records for the 2005 model year: 06V181000 and 09V491000 roof panel adhesive separation (2005-2007 removable roofs and 2006-2007 Z06), 05V455000 power steering hose, 04V525000 rear brake lines near the exhaust manifold, 10V172000 tilt and telescoping column signal fault, 14V251000 UBEC headlamp relay wire on 2005-2007 cars."
  },
  {
   "ref": "epa-2009-corvette",
   "title": "Gas Mileage of 2009 Chevrolet Corvette",
   "url": "https://www.fueleconomy.gov/feg/bymodel/2009_Chevrolet_Corvette.shtml",
   "publisher": "US Department of Energy and EPA (fueleconomy.gov)",
   "sourceType": "government",
   "reliability": "high",
   "notes": "Current EPA listing for 2009: 6.2-liter six-speed automatic 15 city, 25 highway, 18 combined; 6.2-liter six-speed manual 16 city, 26 highway, 19 combined; 7.0-liter manual 15 city, 24 highway, 18 combined."
  },
  {
   "ref": "vettevues-c6-buying-guide",
   "title": "The C6 Corvette Buying Guide (2005-2013): Avoid These Costly Mistakes",
   "url": "https://vette-vues.com/c6-corvette-buying-guide-2005-2013/",
   "publisher": "Vette Vues Magazine",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "US Corvette magazine buyer's guide. 2008 as the sweet spot, LS3 430/436 hp, TR6060, 4LT interior, EPA figures, undated value ranges (LS3 low-to-mid $30,000s, early LS2 upper $20,000s, Z06 mid-to-upper $40,000s), 2005 Dead Battery Syndrome, harmonic balancer wobble, LS7 exhaust valve guide wear, manual Grand Sport coupe dry sump, Magnetic Ride shock leaks."
  },
  {
   "ref": "vettesofatlanta-c6-ls7",
   "title": "C6 Corvette FAQ: LS7 & LS2 Flaws & Specs (2005-07)",
   "url": "https://vettesofatlanta.com/c6-corvette-faq-ls7-ls2-flaws-specs-2005-07/",
   "publisher": "Vettes of Atlanta",
   "sourceType": "specialist",
   "reliability": "low",
   "notes": "US Corvette dealer FAQ with loosely attributed sourcing. LS7 valve guide wiggle test threshold .0037 in, manganese-bronze guide fix, head repair $3,500 to $6,500, harmonic balancer $1,100 to $1,900 with 6 to 10 hours labor, 2005 manual Reverse parking for battery drain, weaker 2005 differential, shifter bushing, differential leaks, torque tube coupler, column lock message, RepairPal $737 annual repair average."
  },
  {
   "ref": "classic-c6",
   "title": "Chevrolet Corvette - C6 Market - CLASSIC.COM",
   "url": "https://www.classic.com/m/chevrolet/corvette/c6/",
   "publisher": "CLASSIC.COM",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "Fetched September 23, 2026 through a rendering fetch (403 to plain scripts). C6 average $52,184; lowest recorded sale $8,500 for a 2006 coupe on November 9, 2023; benchmarks Z06 $48,457, ZR1 $99,019, Grand Sport $40,621, 427 Collector Edition $62,569; no base-car benchmark. Listing rows were dealer asks and are not used."
  },
  {
   "ref": "classic-c6-z06",
   "title": "Chevrolet Corvette Z06 - C6 Market - CLASSIC.COM",
   "url": "https://www.classic.com/m/chevrolet/corvette/c6/z06/",
   "publisher": "CLASSIC.COM",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "Fetched September 23, 2026 through a rendering fetch. C6 Z06 average $52,548; standard Z06 benchmark $48,455; Carbon Limited Edition $85,149; Ron Fellows $53,765; GT1 $64,072; Centennial $76,654; lowest recorded Z06 sale $25,300 for a 2008 on April 10, 2026."
  }
 ],
 "claims": [
  {
   "section": "production",
   "claimText": "The C6 total is 215,223 per CorvSport and Wikipedia but 215,125 per Corvette Central, and the whole 98-car difference sits in the 2011 model year.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["corvsport-c6-production", "wikipedia-c6", "corvettecentral-c6-production"],
   "conflictNote": "CorvSport and Wikipedia state 215,223 C6 Corvettes, and Wikipedia gives 13,696 for 2011. Corvette Central's table gives 13,598 for 2011 and totals 215,125. Every other model year agrees. No Chevrolet or National Corvette Museum figure was fetched; not resolved by any source consulted here.",
   "evidence": [
    { "ref": "corvsport-c6-production", "quote": "Production variants included the Z06, ZR1, Grand Sport, and 427 Convertible. In all, there were 215,223 C6 Corvettes produced." },
    { "ref": "wikipedia-c6", "quote": "2011 13,696 Z06 Carbon limited edition; Z07 performance package added for Z06" },
    { "ref": "corvettecentral-c6-production", "quote": "2013 2,597 720 471 482 4,908 1,736 2,552 13,466 TOTAL 215,125" }
   ]
  },
  {
   "section": "production",
   "claimText": "Production ran 37,372 for 2005, 34,021 for 2006 and a peak of 40,561 for 2007, then 35,310 for 2008 before the financial crisis cut later years.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["corvsport-c6-production", "corvettecentral-c6-production", "wikipedia-c6"],
   "evidence": [
    { "ref": "corvsport-c6-production", "quote": "In its first and second year, a total of 37,372 and 34,021 units were produced respectively. 2007 was a screamer of a year" },
    { "ref": "corvettecentral-c6-production", "quote": "2005 26,728 10,644 37,372 2006 16,598 11,151 6,272 34,021 2007 21,484 10,918 8,159 40,561" },
    { "ref": "wikipedia-c6", "quote": "2008 35,310 LS3 introduced, Tremec TR6060 transmission, new steering system, NPP exhaust" }
   ]
  },
  {
   "section": "production",
   "claimText": "The 2009 model year fell to 16,956 cars, of which Corvette Central's table counts 3,461 Z06s and 1,415 of the new ZR1.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["corvettecentral-c6-production", "wikipedia-c6"],
   "evidence": [
    { "ref": "corvettecentral-c6-production", "quote": "2009 8,737 3,343 3,461 1,415 16,956 2010" },
    { "ref": "wikipedia-c6", "quote": "2009 16,956 ZR1 model added, new \"Spyder\" wheels for Z06" }
   ]
  },
  {
   "section": "production",
   "claimText": "Corvette Central alone states that Chevrolet built more Grand Sports than base coupes and convertibles in 2010; its table shows 3,707 Grand Sport coupes and 2,335 convertibles that year. Single-sourced because no second fetched table breaks out 2010 by variant.",
   "confidence": "medium",
   "status": "unverified",
   "sourceRefs": ["corvettecentral-c6-production"],
   "evidence": [
    { "ref": "corvettecentral-c6-production", "quote": "Speaking of the Grand Sport, Chevrolet produced more of these in 2010 than the base model coupes and convertibles." }
   ]
  },
  {
   "section": "production",
   "claimText": "The 2013 427 Convertible was built in 2,552 examples, and the last C6, a white 427 convertible, was completed on February 28, 2013.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["wikipedia-c6", "corvettecentral-c6-production", "corvsport-c6-production"],
   "evidence": [
    { "ref": "wikipedia-c6", "quote": "The last Corvette C6, a white 427 convertible, was completed on February 28, 2013." },
    { "ref": "corvettecentral-c6-production", "quote": "2013 2,597 720 471 482 4,908 1,736 2,552 13,466" },
    { "ref": "corvsport-c6-production", "quote": "The C6 Corvette generation was produced from 2005 to 2013 model years (actual production ran from June 2004" }
   ]
  },
  {
   "section": "production",
   "claimText": "Wikipedia alone gives the special-edition counts: 399 Ron Fellows Z06s with 33 for Canada, about 125 GT1 Championship Editions against a plan of 600, and 252 Z06 Carbon Limited Editions against a plan of 500.",
   "confidence": "low",
   "status": "unverified",
   "sourceRefs": ["wikipedia-c6"],
   "evidence": [
    { "ref": "wikipedia-c6", "quote": "Although Chevrolet planned to sell 500 of the Z06 Carbon Limited Edition, only 252 units were produced." }
   ]
  },
  {
   "section": "specs",
   "claimText": "CorvSport lists the 2005 coupe at $44,245 and convertible at $52,245 but also gives initial base prices of $43,710 and $51,445, $125 below the last C5 coupe, while Corvette Central says the 2005 undercut the 2004 base price by $300.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["corvsport-2005", "corvettecentral-c6-production"],
   "conflictNote": "CorvSport's spec block and option table state $44,245 for the coupe and $52,245 for the convertible; its text states initial base prices of $43,710 and $51,445 and a $125 saving over the 2004 coupe. Corvette Central states a $300 saving. Neither says whether destination is included. Not resolved by any source consulted here.",
   "evidence": [
    { "ref": "corvsport-2005", "quote": "Instead, the 2005 coupe's initial base price was $43,710, which was actually $125 less than the final 2004 C5 Coupe's base price." },
    { "ref": "corvettecentral-c6-production", "quote": "Somehow, the team managed to undercut the cost of the base 2004 Corvette by $300." }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 2005 coupe's 0-60 mph time is given as 4.2 seconds from Chevrolet's official figure by CorvSport and as 4.3 seconds by Corvette Central.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["corvsport-2005", "corvettecentral-c6-production"],
   "conflictNote": "CorvSport states that Chevrolet's official report put the 2005 coupe at 4.2 seconds to 60 mph. Corvette Central states 4.3 seconds. Neither names a test. Not resolved by any source consulted here.",
   "evidence": [
    { "ref": "corvsport-2005", "quote": "Chevy's official report put the 2005 Corvette Coupe's 0-60 time at just 4.2 seconds" },
    { "ref": "corvettecentral-c6-production", "quote": "The resulting base model Corvette for 2005 boasted numbers like a 4.3 second sprint to 60 miles per hour, a 186 MPH top speed" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The LS2 made 400 hp, and the 2008 LS3 made 430 hp and 424 lb-ft, or 436 hp and 428 lb-ft with the dual-mode exhaust.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["wikipedia-c6", "caranddriver-2009-zr1-comparison", "vettevues-c6-buying-guide"],
   "evidence": [
    { "ref": "wikipedia-c6", "quote": "Beginning with the 2008 model year, the Corvette received a new engine, the LS3" },
    { "ref": "caranddriver-2009-zr1-comparison", "quote": "which increases output from 430 horsepower and 424 lb-ft of torque to 436 and 428, respectively" },
    { "ref": "vettevues-c6-buying-guide", "quote": "The 6.0L LS2 (2005–2007) puts out 400 horsepower." }
   ]
  },
  {
   "section": "specs",
   "claimText": "Car and Driver's 2006 Z06 cost $65,800 base, made 505 hp and 470 lb-ft, weighed 3,147 lb and ran 3.6 seconds to 60 mph and 11.7 seconds in the quarter mile.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["caranddriver-2006-z06", "wikipedia-c6"],
   "evidence": [
    { "ref": "caranddriver-2006-z06", "quote": "PRICE Base/As Tested: $65,800/$69,995" },
    { "ref": "wikipedia-c6", "quote": "Car and Driver recorded a 0– 60 mph (97 km/h) acceleration time of 3.6 seconds and 1/4 mile in 11.7 seconds" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The Z06 used an aluminum frame, a magnesium engine cradle and a 7.0-liter LS7 with titanium connecting rods and a dry sump, and weighed 141 lb less than the base car.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["caranddriver-2006-z06", "wikipedia-c6", "caranddriver-2009-zr1-comparison"],
   "evidence": [
    { "ref": "caranddriver-2006-z06", "quote": "When all was said and done to the Z06, it weighed in at 3147 pounds, or 141 less than the base Vette." },
    { "ref": "wikipedia-c6", "quote": "In addition to the larger displacement engine, the Corvette Z06 has a dry sump oiling system, and connecting rods made out of titanium alloy" },
    { "ref": "caranddriver-2009-zr1-comparison", "quote": "With the aid of lightweight titanium valves and connecting rods, it revs to 7000 rpm, which is 500 more revs than the LS3 can manage." }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 2009 ZR1 was priced at $103,300 including an $850 destination charge, plus a $1,700 gas guzzler tax, and Car and Driver put it $31,745 above the Z06.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["jalopnik-zr1-pricing", "caranddriver-2009-zr1-comparison"],
   "evidence": [
    { "ref": "jalopnik-zr1-pricing", "quote": "That $103,300 (plus a $1,700 gas guzzler tax) which gets you a bare bones, lightweight interior based on that of the Z06." },
    { "ref": "caranddriver-2009-zr1-comparison", "quote": "The ZR1 costs $31,745 more than the Z06." }
   ]
  },
  {
   "section": "specs",
   "claimText": "The ZR1's supercharged LS9 made 638 hp and 604 lb-ft; Car and Driver ran it to 60 mph in 3.4 seconds, matching Chevrolet's claim, and Chevrolet claimed 205 mph.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["caranddriver-2009-zr1-comparison", "jalopnik-zr1-pricing", "wikipedia-c6"],
   "evidence": [
    { "ref": "caranddriver-2009-zr1-comparison", "quote": "An Eaton R2300 supercharger and Behr intercooler force fuel and air into the engine, resulting in 638 horsepower and 604 lb-ft of torque." },
    { "ref": "jalopnik-zr1-pricing", "quote": "The Corvette ZR1 also has a top speed of 205 mph" },
    { "ref": "wikipedia-c6", "quote": "GM confirmed a supercharged 6.2 L LS9 V8 having a power output of 638 hp" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 2009 EPA ratings are 16 city and 26 highway for the 6.2-liter manual, 15 and 25 for the automatic and 15 and 24 for the 7.0-liter Z06; Chevrolet gave the ZR1 14 and 20.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["epa-2009-corvette", "vettevues-c6-buying-guide", "jalopnik-zr1-pricing"],
   "evidence": [
    { "ref": "epa-2009-corvette", "quote": "7.0 L, Manual 6-spd Premium Gasoline Not Available How can I share my MPG? Combined MPG: 18 combined city/highway MPG City MPG: 15 city Highway MPG: 24 highway" },
    { "ref": "vettevues-c6-buying-guide", "quote": "EPA estimates tag manual transmissions around 16 city / 26 highway mpg and automatics near 15 city / 25 highway mpg" },
    { "ref": "jalopnik-zr1-pricing", "quote": "EPA-estimated fuel economy of 14 city and 20 highway" }
   ]
  },
  {
   "section": "history",
   "claimText": "The C6 was the first Corvette with exposed headlamps since 1962, 5.1 inches shorter than the C5 on a wheelbase 1.2 inches longer.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["wikipedia-c6", "corvsport-2005"],
   "evidence": [
    { "ref": "wikipedia-c6", "quote": "It is the first Corvette with exposed headlamps (as opposed to hidden headlamps ) since the 1962 model" },
    { "ref": "corvsport-2005", "quote": "Overall, the C6 measures 5.1 inches shorter and an inch narrower than the C5" }
   ]
  },
  {
   "section": "history",
   "claimText": "Of 37,372 cars built for 2005, 22,380 had the four-speed automatic and 15,345 the Z51 package; the figures come from CorvSport's option table alone.",
   "confidence": "medium",
   "status": "unverified",
   "sourceRefs": ["corvsport-2005"],
   "evidence": [
    { "ref": "corvsport-2005", "quote": "MX0 Four-speed Automatic Transmission 22,380 $0 QG7 Polished Aluminum Wheels 27,080 $1,295" }
   ]
  },
  {
   "section": "history",
   "claimText": "Chevrolet did not offer Torch Red for 2005; the plant built one Torch Red car to test the color, early cars used Precision Red (code 27), and Black was the most popular color at 7,995 cars. CorvSport is the only fetched source.",
   "confidence": "medium",
   "status": "unverified",
   "sourceRefs": ["corvsport-2005"],
   "evidence": [
    { "ref": "corvsport-2005", "quote": "the Bowling Green Corvette Assembly Plant built a single Torch Red Corvette, (a color carryover from the 2004 C5 Corvette) to demonstrate its viability" }
   ]
  },
  {
   "section": "history",
   "claimText": "The ZR1 grew out of a project code-named Blue Devil, after GM chief executive Rick Wagoner's university, and was the first Corvette with carbon-ceramic brakes.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["wikipedia-c6", "caranddriver-2009-zr1-comparison"],
   "evidence": [
    { "ref": "wikipedia-c6", "quote": "under the internal code name Blue Devil (named after CEO Rick Wagoner 's alma mater, Duke University )" },
    { "ref": "caranddriver-2009-zr1-comparison", "quote": "The ZR1 marks the first time a Corvette is equipped with carbon-ceramic brakes" }
   ]
  },
  {
   "section": "history",
   "claimText": "The Grand Sport replaced the Z51 option for 2010, and manual Grand Sport coupes received a dry-sump LS3.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["wikipedia-c6", "vettevues-c6-buying-guide"],
   "evidence": [
    { "ref": "wikipedia-c6", "quote": "The Grand Sport replaces the previous Z51 option." },
    { "ref": "vettevues-c6-buying-guide", "quote": "manual-transmission Grand Sport Coupes feature a hand-built engine utilizing a dry-sump oiling system" }
   ]
  },
  {
   "section": "problems",
   "claimText": "Some LS7 engines suffered premature valve guide wear, chiefly on the exhaust side; the fix is replacing the powdered-metal guides with manganese-bronze guides, which Vettes of Atlanta alone prices at $3,500 to $6,500.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["vettevues-c6-buying-guide", "vettesofatlanta-c6-ls7"],
   "evidence": [
    { "ref": "vettevues-c6-buying-guide", "quote": "select production runs suffered from premature valve guide wear, particularly on the exhaust side" },
    { "ref": "vettesofatlanta-c6-ls7", "quote": "The combined cost for a proper head repair and reinstallation typically falls in the range of $3,500 to $6,500" }
   ]
  },
  {
   "section": "problems",
   "claimText": "C6 harmonic balancers fail as the rubber between the rings degrades, and Vettes of Atlanta alone prices replacement at $1,100 to $1,900.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["vettevues-c6-buying-guide", "vettesofatlanta-c6-ls7"],
   "evidence": [
    { "ref": "vettevues-c6-buying-guide", "quote": "The crankshaft pulley (harmonic balancer) has an inner rubber dampener that degrades over time, causing the pulley to wobble." },
    { "ref": "vettesofatlanta-c6-ls7", "quote": "Replacing the harmonic balancer is a high-priority repair that typically ranges from $1,100 to $1,900 in 2026" }
   ]
  },
  {
   "section": "problems",
   "claimText": "Manual 2005 cars must be parked in Reverse to avoid a parasitic battery drain, the problem owners call Dead Battery Syndrome.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["vettevues-c6-buying-guide", "vettesofatlanta-c6-ls7"],
   "evidence": [
    { "ref": "vettevues-c6-buying-guide", "quote": "has a known electronic quirk called Dead Battery Syndrome (DBS) where manual versions must be parked in Reverse to shut down the electronics completely" },
    { "ref": "vettesofatlanta-c6-ls7", "quote": "Manual owners had the odd requirement of parking in Reverse to prevent parasitic battery drain." }
   ]
  },
  {
   "section": "problems",
   "claimText": "NHTSA lists roof panel adhesive separation recalls covering 2005-2007 removable roofs and 2006-2007 Z06s, plus a 2005-2007 headlamp relay wire recall.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["nhtsa-2005-recalls"],
   "evidence": [
    { "ref": "nhtsa-2005-recalls", "quote": "GENERAL MOTORS IS RECALLING CERTAIN MODEL YEAR 2005 THROUGH 2007 CORVETTE VEHICLES EQUIPPED WITH A REMOVABLE ROOF AND MODEL YEAR 2006 AND 2007 CORVETTE Z06 VEHICLES." }
   ]
  },
  {
   "section": "market",
   "claimText": "As of September 2026 classic.com averages the C6 at $52,184, with a lowest recorded sale of $8,500 for a 2006 coupe on November 9, 2023; Vette Vues places early LS2 cars in the upper $20,000s.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["classic-c6", "vettevues-c6-buying-guide"],
   "evidence": [
    { "ref": "classic-c6", "quote": "The lowest recorded sale price was $8,500 for a 2006 Chevrolet Corvette Coupe on November 09, 2023." },
    { "ref": "vettevues-c6-buying-guide", "quote": "High mileage or average grade early LS2 models commonly live within the upper $20,000 marketplace." }
   ]
  },
  {
   "section": "market",
   "claimText": "As of September 2026 classic.com averages the C6 Z06 at $52,548 and records its lowest Z06 sale as $25,300 for a 2008 on April 10, 2026; its C6 page benchmarks the ZR1 at $99,019.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["classic-c6-z06", "classic-c6"],
   "evidence": [
    { "ref": "classic-c6-z06", "quote": "The lowest recorded sale price was $25,300 for a 2008 Chevrolet Corvette Z06 on April 10, 2026." },
    { "ref": "classic-c6", "quote": "The average price of a Chevrolet Corvette - C6 is $52,184." }
   ]
  }
 ]
};
