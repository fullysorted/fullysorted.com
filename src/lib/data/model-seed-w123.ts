/**
 * Researched model draft - Mercedes-Benz W123 (US model years 1977-1985).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedW123 = {
 "slug": "mercedes-benz/w123",
 "make": "Mercedes-Benz",
 "model": "W123",
 "generation": "US market, 1977-1985 (240D, 300D, 300CD, 300TD, 280E, 280CE)",
 "generationCode": "W123 / C123 / S123",
 "trim": null,
 "yearStart": 1977,
 "yearEnd": 1985,
 "bodyStyles": [
  "4-door sedan (W123: 230, 240D, 280E, 300D, 300D Turbodiesel)",
  "2-door coupe (C123: 280CE, 300CD, 300CD Turbodiesel)",
  "5-door station wagon (S123: 300TD, 300TD Turbodiesel)"
 ],
 "engines": [
  "2,404 cc / 2,399 cc OM616 naturally aspirated inline-4 diesel (240D), 62 hp at 4,000 rpm and 97 lb-ft at 2,400 rpm for 1977-1980, 67 hp for 1981-1983, US rating",
  "2,998 cc OM617.912 naturally aspirated inline-5 diesel (300D, 300CD, 300TD), 77 hp at 4,000 rpm and 115 lb-ft at 2,400 rpm, US rating",
  "2,998 cc OM617.952 turbocharged inline-5 diesel with Garrett T3 turbocharger and EGR (300D, 300CD, 300TD Turbodiesel), quoted between 119 and 121 hp at 4,350 rpm and 170 lb-ft at 2,400 rpm at introduction, and between 123 and 125 hp with 181-184 lb-ft from October 1982; the spread between sources is a PS-versus-hp labeling problem, see claims",
  "2,746 cc M110 fuel-injected DOHC inline-6 gasoline (280E, 280CE), 137-142 hp at 5,750 rpm depending on model year and California specification, 140 hp at 5,500 rpm for 1980-1981, US rating",
  "2,307 cc M115 carbureted inline-4 gasoline (230), 93 hp at 4,800 rpm and 125 lb-ft at 2,500 rpm, US rating, 1977-1978 only"
 ],
 "productionTotal": 2696915,
 "productionNotes": "The W123 is the best-selling Mercedes-Benz of its era and the sources consulted here agree on the headline: 2.7 million cars across all body styles between the November 1975 start of production and January 1986. The exact figure of 2,696,915, split as 2,375,410 sedans, 99,884 coupes, 199,517 wagons, 13,700 long-wheelbase sedans, 1,353 bare chassis and 7,020 long-wheelbase chassis, appears only in Wikipedia, which attributes it to Werner Oswald's Mercedes-Benz Personenwagen reference. Mercedeswerks, Haynes North America and classic.com all round to 2.7 million, so the exact total is carried here as a single-source figure that no other source contradicts. Wikipedia is internally inconsistent on the 240D: its text says 455,000 built while its production table gives 449,780 for the 240D sedan. Neither figure is asserted here. The three US-only turbodiesel variants are the numbers a US buyer actually cares about, and they are better supported. Wikipedia's model table gives 75,261 for the 300D Turbodiesel sedan (123.133), 8,007 for the 300CD Turbodiesel coupe (123.153) and 28,219 for the 300TD Turbodiesel wagon (123.193, which was also sold in Europe). classic.com carries the same 75,261 and 28,219 figures on its 300D and 300TD Turbodiesel market pages, and SlashGear, citing Mercedes-Benz Heritage, rounds them to just over 75,000, about 8,000 and about 28,000. No source consulted publishes a US-only count for the naturally aspirated 240D, 300D, 300CD, 300TD, 280E or 280CE, so none is given. No verified US list price exists in these sources for the 1977 launch year; the only figure offered, $12,200 for the original 300D on conceptcarz, is a low-reliability single source and is not asserted. For 1982 the two dollar figures found disagree (see the disputed claim on price).",
 "notableTrims": [
  {
   "name": "300D Turbodiesel sedan (1981 or 1982 to 1985)",
   "note": "The volume car of the US W123 story, 75,261 built, and the only W123 sedan sold new in the US after the gasoline cars were dropped. The OM617.952 turbo five is what gives the model its reputation for six-figure mileages; a 1982 car with more than 400,000 miles was still running when Hagerty found it in a Colorado yard in 2025."
  },
  {
   "name": "300CD Turbodiesel coupe",
   "note": "The pillarless coupe on a shorter wheelbase, and the rarest US body at 8,007 turbo cars. The 300CD in any form was sold only in the US and not offered in Europe, which is why classic.com's 300CD Turbodiesel benchmark sits well above the sedan's."
  },
  {
   "name": "300TD Turbodiesel wagon",
   "note": "The first W123 to get the turbo, from September 1979 in Europe and 1981 in the US; 28,219 built. The wagon came with self-leveling rear suspension and a rear-facing third-row seat, and today trades at the top of the W123 range, with classic.com recording $33,000 to $35,000 results in 2026."
  },
  {
   "name": "240D sedan (1977-1983)",
   "note": "The cheapest new Mercedes-Benz in a US showroom until the W201 190 replaced it for 1984, and the only US W123 offered with a manual gearbox (a 4-speed). Sixty-two to 67 hp in a 3,130 lb car; Hagerty puts the 1982 sticker at $21,282."
  },
  {
   "name": "300D, 300CD and 300TD (naturally aspirated, 1977-1981)",
   "note": "The 77 hp OM617.912 cars sold before the turbo arrived. Slower still than the 240D per pound, and the reason American buyers embraced the turbo so readily; a period 300CD took more than 18 seconds to 60 mph per SlashGear."
  },
  {
   "name": "280E and 280CE (1977-1981)",
   "note": "The only six-cylinder gasoline W123s sold here, with the DOHC M110 detuned to 137-142 hp against 182 hp in Europe and carrying at least 220 lb more weight for federal equipment. Dropped after 1981 once the turbodiesel out-performed them; far scarcer than diesels today."
  },
  {
   "name": "230 sedan (1977-1978)",
   "note": "The 93 hp carbureted four-cylinder gasoline car that opened the US range for two model years and then disappeared. Almost never seen at auction."
  }
 ],
 "specs": {
  "layout": "Front-mounted longitudinal engine, rear-wheel drive",
  "chassis": "Unitary steel body with front and rear crumple zones; sedan (W123), coupe (C123) and wagon (S123); the wagon has self-leveling rear suspension",
  "engine": "2,998 cc OM617.952 SOHC inline-5 diesel, Bosch injection with prechamber, Garrett T3 turbocharger, EGR on US cars (300D/300CD/300TD Turbodiesel); OM617.912 naturally aspirated 5 and OM616 4 for the earlier diesels; M110 DOHC inline-6 for the 280E/280CE",
  "bore_stroke": "90.9 x 92.4 mm (OM617)",
  "power": "Turbodiesel: 119-121 hp at 4,350 rpm at introduction, 123-125 hp at 4,350 rpm from October 1982, US rating; sources disagree because some quote PS as hp. 240D 62-67 hp; 300D non-turbo 77 hp; 280E 137-142 hp",
  "torque": "Turbodiesel: 170 lb-ft at 2,400 rpm at introduction, 181-184 lb-ft at 2,400 rpm from October 1982; 240D 97 lb-ft; 300D non-turbo 115 lb-ft; 280E 142-149 lb-ft",
  "transmission": "Mercedes-Benz W4B 025 4-speed automatic on most US cars; 4-speed manual on the 240D only; the 5-speed manual was never offered in North America",
  "weight": "300D Turbodiesel quoted at 3,362 lb (1,525 kg) in Wikipedia's table and 3,585 lb by Hagerty; 240D 3,130 lb per Hagerty; 300CD/300TD Turbodiesel 3,583 lb (1,625 kg) per Wikipedia",
  "acceleration": "0-62 mph in 14.0 seconds for the 300D and 300CD Turbodiesel and 15.0 seconds for the 300TD per Wikipedia's factory-derived table; SlashGear quotes 'just under 14 seconds' to 60 mph for a 1985 300TD and 'more than 18 seconds' for a 1980 naturally aspirated 300CD",
  "top_speed": "103 mph for the early turbodiesel and 106 mph from October 1982, per Wikipedia's table, factory figures",
  "fuel_economy_epa": "1985 300D/300CD Turbodiesel: 21 mpg combined, 19 city, 23 highway on fueleconomy.gov's revised scale; Hagerty quotes the period EPA combined rating for a 1982 300D as 27 mpg",
  "wheelbase": "110.0 in (2,795 mm) sedan and wagon per conceptcarz; the coupe is shorter",
  "brakes": "Four-wheel discs; ABS optional in Europe from August 1980 per Mercedeswerks",
  "us_equipment": "5-mph bumpers front and rear, round sealed-beam headlamps with fog lamps in the same housing, EGR on the diesel, emissions-detuned gasoline engines",
  "price_when_new": "1982 240D from $21,282 and 1982 300D Turbodiesel $29,756 per Hagerty; conceptcarz lists the 1982 300D base at $25,645; no verified US list price for 1977 in the sources consulted",
  "production_us_turbodiesel": "300D Turbodiesel 75,261; 300CD Turbodiesel 8,007; 300TD Turbodiesel 28,219 (the wagon figure includes European cars)"
 },
 "summary": "The Mercedes-Benz W123 is the mid-size sedan, coupe and wagon line that Stuttgart built from November 1975 to January 1986, roughly 2.7 million cars in all, and the one that fixed the company's reputation in the United States for building cars that outlast their owners' interest in them. American sales began for the 1977 model year with the 230, 240D, 300D and 280E; the 300CD coupe followed for 1978 and the 300TD wagon for 1979, both of them, and the coupe in particular, configured for this market and not sold in Europe. The pivotal event was the OM617 turbodiesel, the first turbocharged diesel in a production passenger car, which reached the US 300D, 300CD and 300TD in 1981 or for 1982 depending on which source is read, and which let Mercedes-Benz sidestep CAFE by going diesel-only here for 1982 through 1985. The turbo five made between 119 and 125 hp depending on year and how the source labels its units, moved a roughly 3,400 to 3,600 lb sedan to 60 mph in about 14 seconds and returned an EPA combined 21 mpg on today's scale, and it is the reason 400,000-mile W123s are unremarkable.",
 "history": "## The Problem Stuttgart Was Solving\n\nBy the mid-1970s the W114/W115 'stroke eight' had done a decade of work, and Mercedes-Benz needed a replacement that carried the passive-safety thinking of the S-Class down to the volume car without losing the taxi-grade durability that paid the bills in Germany. The W123 sedan went on sale in January 1976, longer in wheelbase and softer in line than the car it replaced, with crumple zones front and rear, a collapsible steering column and, later, optional ABS from August 1980 and a driver airbag from 1982. It sold so quickly that in the first year customers waited nine to twelve months for delivery and a gray market grew up in Germany in which barely used cars changed hands well over list (a German-market premium, with no US price attached); Haynes North America records the same black-market premium. That demand carried through a ten-year run and 2.7 million cars, the most successful Mercedes-Benz to that point.\n\n## Federalizing a German Car\n\nNorth American sales began with the sedan for the 1977 model year: 230, 240D, 300D and 280E. EPA emissions rules and DOT safety rules changed the car substantially. US cars carried 5-mph bumpers at both ends, round sealed-beam headlamps with the fog lamps in the same housing where European cars got wraparound chrome tips and square halogens, and the gasoline engines lost a great deal in the translation. The European 280E was rated at 182 hp; the US car ranged between 137 and 142 hp depending on model year and whether it was a California car, while weighing at least 220 lb more. Mercedes-Benz USA also chose which bodies to bring: when the S123 wagon arrived for 1979 the only engine offered was the 3.0-liter OM617 diesel, no 240TD or 280TE, and the 300CD coupe was built for this market alone and never sold in Europe, where diesel taxation would have made it pointless. Most US cars came with the W4B 025 four-speed automatic; only the 240D could be had with a four-speed manual, and the later five-speed was never federalized.\n\n## The Turbo Comes Here First in Volume\n\nThe OM617 A, the first turbocharged diesel in a production passenger car, had already reached the US in the 1978 W116 300SD. It went into the W123 in September 1979 as the European 300TD Turbodiesel, and then, in 1981 by Wikipedia's account or for the 1982 model year by classic.com's, into the US 300D, 300CD and 300TD. A Garrett T3 turbocharger with a fixed-geometry wastegate and EGR on US cars took the five from 77 hp to 119-121 hp and 170 lb-ft, then to 123-125 hp and 181-184 lb-ft from October 1982. That is not much by any modern measure, but the naturally aspirated cars had been genuinely slow, a 1980 300CD needing more than 18 seconds to reach 60 mph, and American buyers took to the turbo immediately. Mercedeswerks reads the decision to put turbo engines into the sedan and coupe for North America as a response to more powerful domestic cars; Wikipedia reads it as regulatory, since diesels sat more lightly under CAFE.\n\n## Numbers and Where They Come From\n\nWikipedia's production table, drawing on Werner Oswald's reference, gives 75,261 for the 300D Turbodiesel sedan, 8,007 for the 300CD Turbodiesel and 28,219 for the 300TD Turbodiesel; classic.com carries the first and third figures on its market pages and SlashGear, citing Mercedes-Benz Heritage, rounds all three the same way. The naturally aspirated US cars have no published US-only counts in the sources consulted here.\n\n## What It Left Behind\n\nThe W123 gave way to the W124 in January 1986, sedans having ended in late 1985. It left two things in the US market: a generation of diesel Mercedes-Benz owners who would not accept a car that needed replacing at 150,000 miles, and a supply of cars that were kept because they kept going. Hagerty's 2025 junkyard find, a 1982 300D showing more than 400,000 miles, was only third in that writer's standings behind an 1982 sedan at 417,046 miles and a 1985 at 411,448. The OM617's reputation for passing 620,000 miles without a rebuild is the single fact about this car that a buyer at Cars and Coffee will hear first, and it is the one that the market still prices on.",
 "marketNotes": "As of September 2026 classic.com's W123 market page shows an average sale of $15,413 across all body styles and model years, with a floor of $281 for a 1977 240D sold in December 2021 and 25 cars listed for sale. The sub-model benchmarks on the same page separate the cars the way buyers do: 240D sedan $11,286, naturally aspirated 300D sedan $9,594, 300D Turbodiesel sedan $13,079, 300CD coupe $14,009 and 300CD Turbodiesel coupe $19,518. The 300D Turbodiesel page, as of September 2026, gives an average sale of $13,036 and a benchmark of $13,150, with a recorded range from $2,000 in February 2025 to $37,500 for a 1983 sedan sold on Bring a Trailer in May 2026; other 2026 results on that page include $27,250 for a 1983 car in August and $25,851 and $18,123 for 1985 cars in January and May. The 300TD Turbodiesel wagon is the strongest body: as of September 2026 classic.com gives an average of $19,205 and a benchmark of $19,623, with $33,000 for a 1981 wagon in September 2026, $33,123 and $35,000 for 1985 wagons in July and June 2026, and a low of $1,851 in September 2024. Dealer asking prices on the main page run from about $10,000 to $30,000 for sedans and coupes. All figures are as recorded by classic.com, which reports Bring a Trailer results as the selling price; the site does not state whether a buyer's premium is included, so treat them as the advertised result.",
 "whatToLookFor": "Start underneath and at the corners, because a W123 that has spent forty years in a road-salt state has almost certainly rusted where Adsit's shop notes say it does: jack points, floor pans, wheel arches, trunk floor and the firewall corners. The Motorious guide adds the battery tray, which takes the firewall with it if it is left, the spare wheel well, the areas behind the headlamps and around the front suspension mounts, and on wagons the tailgate and the fuel tank. Bumpers corrode from the inside out. Then check the vacuum system as a whole rather than one symptom at a time. The W123 uses engine vacuum for the central locking, the climate control flaps and the diesel's shutoff; brittle lines and failed diaphragms show up as doors that will not lock together, vents that will not change position and an engine that keeps running after the key is turned. None of it is expensive in parts but tracing it takes hours. On the OM617, look for oil at the valve cover gasket, the oil filter housing, the front crank seal and the rear main, and ask when the timing chain was last measured for stretch; Motorious quotes a 60,000-mile chain interval and a 4,000-mile oil interval as the schedule a good car will have followed. Glow plugs, the vacuum pump and collapsed engine mounts are the routine diesel jobs. Confirm which car it is: a 1981 or 1982 title on a turbodiesel is not proof of a factory turbo, and a 240D with a manual is worth establishing as original because it was the only US W123 offered that way. A 300CD is a US-only body and should have US equipment throughout. Odometers on these cars have often rolled past 99,999 more than once, so service records that continue past six figures matter more than the reading.",
 "commonProblems": "The engine is not the problem. The OM617 turbodiesel has a documented habit of exceeding several hundred thousand miles with ordinary maintenance, and Hagerty's junkyard 300D was one of three W123 sedans past 400,000. What wears out around it is the point. Adsit's list from the shop floor is the vacuum system (central locking failures, an engine that will not shut off, climate-control flaps that will not move), oil leaks from the valve cover gasket, oil filter housing, front crankshaft seal and rear main seal, and the diesel-specific set of glow plug failures, vacuum pump wear, timing chain stretch and collapsed motor mounts. Suspension bushings, ball joints, tie rods and dampers are consumables on a car this heavy. Rust is the failure that actually ends a W123, at the jack points, floor pans, wheel arches, trunk floor and firewall corners, and in the battery tray and spare wheel well. On gasoline cars Motorious reports the four-cylinders typically needing a rebuild by 150,000 miles and the sixes lasting past 200,000, and a neglected timing chain on any W123 engine can fail and wreck it. Automatic transmissions are durable but not eternal, and the self-leveling rear suspension on wagons has its own hydraulics to maintain. Parts are plentiful and inexpensive by Mercedes-Benz standards; Motorious warns that some pattern parts are poor and genuine ones cost far more.",
 "valueTrajectory": "The W123 spent thirty years as a used car rather than a collector car, which is why classic.com's recorded floor is $281 for a 1977 240D in December 2021 and why so many of the cars now surfacing have 300,000 miles and a complete service file. The rise since has been steady rather than dramatic. As of September 2026 the all-body average on classic.com is $15,413, the 300D Turbodiesel sedan benchmark is $13,150 and the 300TD Turbodiesel wagon benchmark is $19,623, with the best 2026 wagon results at $33,000 to $35,000 and the best 2026 sedan result at $37,500. SlashGear's earlier reading of the same classic.com data, five-year averages of just under $13,000 for the sedan, almost $20,000 for the wagon and just over $18,000 for the coupe, lines up with the current benchmarks, which suggests the market has been moving sideways at the average while the top of the range separates. The pattern is what one would expect of a car whose supply is enormous and whose good examples are scarce: the mean stays flat, and a documented, rust-free turbodiesel wagon or coupe with a sympathetic color pulls away from the ordinary sedan. Nothing in the data consulted points to a sharp move in either direction.",
 "overallConfidence": "medium",
 "sources": [
  {
   "ref": "hagerty-fps-300d",
   "title": "Final Parking Space: 1982 Mercedes-Benz 300D with 400K Miles",
   "url": "https://www.hagerty.com/media/opinion/final-parking-space/final-parking-space-1982-mercedes-benz-300-d-with-400k-miles/",
   "publisher": "Hagerty Media",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Murilee Martin, January 2025. Establishes 1982 US MSRPs ($29,756 for the 300D, $21,282 starting price for the 240D), US-market outputs (240D 67 hp and 97 lb-ft, 300D turbodiesel 120 hp and 170 lb-ft), weights (240D 3,130 lb, 300D 3,585 lb), the period EPA combined rating of 27 mpg, the statement that the W123 was diesel-only in the US for 1981-1985 to avoid CAFE, and junkyard odometer readings of 417,046 and 411,448 miles on W123 sedans."
  },
  {
   "ref": "wikipedia-w123",
   "title": "Mercedes-Benz W123",
   "url": "https://en.wikipedia.org/wiki/Mercedes-Benz_W123",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Pointer source. Total 2,696,915 (citing Oswald) with body-style split; 240D text figure 455,000 versus table 449,780; North American sales section (1977 start with 230/240D/300D/280E, 1979 wagon diesel-only, 300CD US-only, 280E/280CE dropped for 1982, 240D dropped for 1984, W4B 025 automatic, 240D-only manual, no 5-speed); per-model production for the US turbodiesels (75,261 / 8,007 / 28,219); OM617.952 outputs 121 PS/119 hp then 125 PS/123 hp, 170 and 184 lb-ft, Garrett T3, 14.0 s and 15.0 s 0-62 mph, 1,525 kg and 1,625 kg weights; US engine table."
  },
  {
   "ref": "wikipedia-om617",
   "title": "Mercedes-Benz OM617 engine",
   "url": "https://en.wikipedia.org/wiki/Mercedes-Benz_OM617_engine",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "OM617.951/.952: 2,998 cc, 90.9 x 92.4 mm, 121 PS (119 hp) at 4,350 rpm and 170 lb-ft at introduction, 125 PS (123 hp) and 184 lb-ft from October 1982, Garrett fixed-geometry wastegate turbo, EGR on North American cars, applications 1981-1985 300D and 300CD Turbo and 1982-1985 300TD; 1978 300SD as first production turbodiesel sedan; reliability statement of over 1,000,000 km (620,000 mi) without rebuild."
  },
  {
   "ref": "fueleconomy-1985-300d",
   "title": "1985 Mercedes-Benz 300D/300CD - Compare Side-by-Side",
   "url": "https://www.fueleconomy.gov/feg/Find.do?action=sbs&id=337",
   "publisher": "US Department of Energy / EPA (fueleconomy.gov)",
   "sourceType": "government",
   "reliability": "high",
   "notes": "Official EPA record for the 1985 300D/300CD: 3.0 L, 5 cylinders, 4-speed automatic, turbo, diesel; 21 mpg combined, 19 city, 23 highway on the revised scale (the page notes estimates for 2016 and older vehicles may have been revised). Confirms the 1985 model year and the automatic-only turbodiesel configuration in the US."
  },
  {
   "ref": "classic-w123",
   "title": "Mercedes-Benz W123 Market",
   "url": "https://www.classic.com/m/mercedes-benz/e/w123/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Fetched September 2026. Average sale $15,413 across the W123; lowest recorded sale $281 (1977 240D, December 11, 2021); 25 for sale; sub-model benchmarks 240D $11,286, 300D $9,594, 300D Turbodiesel $13,079, 300CD $14,009, 300CD Turbodiesel $19,518; recent dealer listings and sales from $9,000 to $30,000; description of the W123 as a series of mid-size luxury cars introduced for 1977 with over 2.7 million sold."
  },
  {
   "ref": "classic-300d-turbodiesel",
   "title": "Mercedes-Benz 300D Turbodiesel - W123 Market",
   "url": "https://www.classic.com/m/mercedes-benz/e/w123/sedan/300-d-turbodiesel/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Fetched September 2026. Average sale $13,036, benchmark $13,150, low $2,000 (February 17, 2025), high $37,500 (1983 sedan, Bring a Trailer, May 14, 2026); other 2026 results $27,250 (August), $25,851 (January), $18,123 (May). Description states the 300D Turbodiesel was exclusive to Japan and North America, introduced for the 1982 model year, 121 hp and 170 lb-ft rising to 125 hp and 184 lb-ft for 1983, 75,261 built."
  },
  {
   "ref": "classic-300td-turbodiesel",
   "title": "Mercedes-Benz 300TD Turbodiesel - S123 Market",
   "url": "https://www.classic.com/m/mercedes-benz/e/w123/wagon/300-td-turbodiesel/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Fetched September 2026. Average sale $19,205, benchmark $19,623, low $1,851 (September 24, 2024), 2026 results of $33,000 (1981, September 23), $33,123 (1985, July 19), $35,000 (1985, June 5), $25,000 (1984, March 19), $18,025 (1985, March 30), $15,000 (1983, Hagerty, May 29). Description states the 300TD Turbodiesel was introduced for the 1982 model year with 125 hp and 184 lb-ft and approximately 28,219 built."
  },
  {
   "ref": "adsit-w123-problems",
   "title": "Common W123 and W124 Mercedes Problems",
   "url": "https://www.adsitco.com/blog/common-w123-w124-mercedes-issues/",
   "publisher": "Adsit Company",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "US Mercedes-Benz parts specialist's shop-floor list: vacuum system (central locking, engine not shutting off, HVAC flaps), OM617 oil leaks (valve cover gasket, oil filter housing, front crank seal, rear main), rust at jack points, floor pans, wheel arches, trunk floor and firewall corners, suspension wear items, diesel-specific glow plugs, vacuum pump, timing chain stretch and motor mounts; states W123 diesels can exceed several hundred thousand miles."
  },
  {
   "ref": "motorious-w123-guide",
   "title": "Mercedes W123 Buying Guide",
   "url": "https://www.motorious.com/articles/highlights/mercedes-w123-buying-guide/",
   "publisher": "Motorious",
   "sourceType": "journalism",
   "reliability": "low",
   "notes": "British-derived buying guide republished on a US site; used only for fault patterns, never for values or model years. Rust at battery tray, spare wheel well and jack points, behind the headlamps, front suspension mounts, inner front fenders, rear arches, wagon tailgates and fuel tanks, bumpers from the inside out; vacuum-operated central locking is leak-prone; four-cylinder gasoline engines about 150,000 miles between rebuilds, sixes 200,000 plus; 4,000-mile oil and 60,000-mile timing chain intervals; coupe under 5 percent of production."
  },
  {
   "ref": "mercedeswerks-history",
   "title": "Mercedes-Benz W123 History",
   "url": "https://www.mercedeswerks.com/mercedes-w123history",
   "publisher": "Mercedeswerks",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "US specialist's history: sedan introduced January 1976 to replace the W115; approximately 2.7 million sold, the most successful Mercedes-Benz to that date; turbo five introduced September 1979 in the 300TD wagon and limited to the wagon in most markets while North America also got turbo sedans and coupes; ABS optional from August 1980, driver airbag optional from 1982; production ended January 1986."
  },
  {
   "ref": "haynes-na-w123",
   "title": "A Short History of the Mercedes W123",
   "url": "https://us.haynes.com/blogs/tips-tutorials/short-history-mercedes-w123",
   "publisher": "Haynes Manuals North America",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "October 2016 overview: 2.7 million sold between 1976 and 1985, the most popular Mercedes series to that date, 30 variants, early demand so high that lightly used cars sold above list on a black market to skip dealer waiting lists; model-code decoder (D diesel, E injection, C coupe, T wagon)."
  },
  {
   "ref": "conceptcarz-1982-300d",
   "title": "1982 Mercedes-Benz 300D",
   "url": "https://www.conceptcarz.com/vehicle/z14162/mercedes-benz-300d.aspx",
   "publisher": "conceptcarz.com",
   "sourceType": "specialist",
   "reliability": "low",
   "notes": "Aggregator page, used only to document a conflicting 1982 base price ($25,645 against Hagerty's $29,756) and a 110.0 in wheelbase. Its narrative is unreliable (it dates the turbo option to late 1978 and lists 83 hp for the 1982 car), and its $12,200 launch price for the original 300D is not asserted anywhere on this page."
  },
  {
   "ref": "slashgear-w123-turbodiesel",
   "title": "All About The W123 Mercedes Turbo Diesel",
   "url": "https://www.slashgear.com/1615233/about-mercedes-w123-turbo-diesel/",
   "publisher": "SlashGear",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "US feature citing Mercedes-Benz Heritage and classic.com: US buyers got the turbodiesel 300TD beginning in 1981; about 28,000 300TD, just over 75,000 300D and about 8,000 300CD built; 1980 300CD at 83 hp and 120 lb-ft taking more than 18 seconds to 60 mph in a 4,442-lb car; 1985 300TD at 123 hp and 184 lb-ft, just under 14 seconds to 60, 22/25 mpg; five-year classic.com averages of just under $13,000 (300D), almost $20,000 (300TD) and just over $18,000 (300CD)."
  }
 ],
 "claims": [
  {
   "section": "production",
   "claimText": "W123 production across all body styles totaled about 2.7 million cars between the start of production in late 1975 and January 1986; the exact figure of 2,696,915 appears only in Wikipedia, citing Oswald, while the other sources round to 2.7 million.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["wikipedia-w123", "mercedeswerks-history", "haynes-na-w123"],
   "evidence": [
    { "ref": "wikipedia-w123", "quote": "selling 2.7 million units before production ended in the autumn of 1985 for the saloon/sedan versions and January 1986 for coupés and estates/station wagons" },
    { "ref": "mercedeswerks-history", "quote": "as the most successful selling Mercedes-Benz cars to date, selling approximately 2.7 million cars" },
    { "ref": "haynes-na-w123", "quote": "Between 1976 and 1985, Mercedes sold 2.7 million of these classy, dependable luxury cars" }
   ]
  },
  {
   "section": "production",
   "claimText": "The US-only turbodiesel variants are counted at 75,261 for the 300D Turbodiesel sedan, 8,007 for the 300CD Turbodiesel coupe and 28,219 for the 300TD Turbodiesel wagon, figures that classic.com repeats and that SlashGear, citing Mercedes-Benz Heritage, rounds to just over 75,000, about 8,000 and about 28,000.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["wikipedia-w123", "classic-300d-turbodiesel", "classic-300td-turbodiesel", "slashgear-w123-turbodiesel"],
   "evidence": [
    { "ref": "wikipedia-w123", "quote": "300 D Turbodiesel (USA only) 123.133 8/81 – 9/82 OM 617 D 30 A (617.952) I5 turbo 2998 cc Bosch Fuel Injection with precombustion chamber and Garrett T3 turbocharger" },
    { "ref": "classic-300d-turbodiesel", "quote": "Production ended in 1985 with 75,261 examples built" },
    { "ref": "classic-300td-turbodiesel", "quote": "Production ran from 1982-1986, with approximately 28,219 units built" },
    { "ref": "slashgear-w123-turbodiesel", "quote": "the 300D sedan was the most common, with just over 75,000 units made" }
   ]
  },
  {
   "section": "history",
   "claimText": "North American sales began with the sedan for the 1977 model year in 230, 240D, 300D and 280E form; the wagon arrived in the US for 1979 with only the 3.0-liter OM617 diesel, and the 300CD coupe was exclusive to the US market and not offered in Europe.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["wikipedia-w123", "slashgear-w123-turbodiesel"],
   "evidence": [
    { "ref": "wikipedia-w123", "quote": "North American sales began with the W123 sedan for the 1977 model year. The initial range consisted of the 230, 240 D, 300 D, and 280 E models" },
    { "ref": "slashgear-w123-turbodiesel", "quote": "The rarest variant is the 300CD coupe, which was only sold in North America and saw a production run of only about 8,000 units" }
   ]
  },
  {
   "section": "history",
   "claimText": "The OM617 turbodiesel reached the US W123 either in 1981 (Wikipedia, the OM617 article and SlashGear) or for the 1982 model year (classic.com's 300D and 300TD Turbodiesel pages); the sources do not agree and the disagreement is not resolved here.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["wikipedia-w123", "wikipedia-om617", "slashgear-w123-turbodiesel", "classic-300d-turbodiesel", "classic-300td-turbodiesel"],
   "conflictNote": "Wikipedia's W123 article states the turbo engine was offered in North America in 1981 as the 300 D, 300 CD and 300 TD Turbodiesel and its table starts the 300D Turbodiesel at 8/81. The OM617 article lists 1981-1985 for the 300D and 300CD Turbo. SlashGear says US buyers got the turbodiesel 300TD beginning in 1981. classic.com states both the 300D Turbodiesel sedan and the 300TD Turbodiesel wagon were introduced for the 1982 model year, while listing 1981 cars among its sales. The difference may be production date versus model year, but no source consulted here reconciles them. Unresolved.",
   "evidence": [
    { "ref": "wikipedia-w123", "quote": "The same engine was offered in North America and Japan in 1981 as the 300 D Turbodiesel 300 CD Turbodiesel, and 300 TD Turbodiesel" },
    { "ref": "wikipedia-om617", "quote": "Applications: 1981–1985 300D Turbo North American 1981–1985 300CD Turbo North American 1982–1985 300TD Turbo" },
    { "ref": "slashgear-w123-turbodiesel", "quote": "United States buyers got the turbodiesel 300TD beginning in 1981, when that model sold about 28,000 units worldwide" },
    { "ref": "classic-300d-turbodiesel", "quote": "Introduced for the 1982 model year, the 300D Turbodiesel was powered by Mercedes' OM617.952 engine" },
    { "ref": "classic-300td-turbodiesel", "quote": "The Mercedes-Benz 300TD Turbodiesel was a variant of the S123 Wagon that was introduced for the 1982 model year" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The US turbodiesel's output is quoted between 119 and 121 hp with 170 lb-ft at introduction and between 123 and 125 hp with 181 to 184 lb-ft after the October 1982 update; the spread is partly a labeling problem, with some sources quoting the 119 hp (121 PS) and 123 hp (125 PS) metric ratings as horsepower, and no source consulted here settles the SAE figure.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["wikipedia-om617", "wikipedia-w123", "hagerty-fps-300d", "classic-300d-turbodiesel", "slashgear-w123-turbodiesel"],
   "conflictNote": "The OM617 Wikipedia article gives 119 hp (121 PS) then 123 hp (125 PS) from October 1982, with 170 and 184 lb-ft. The W123 Wikipedia US engine table gives 123 hp and 181 lb-ft. Hagerty gives 120 hp and 170 lb-ft for a 1982 300D. classic.com gives 121 hp and 170 lb-ft initially and 125 hp and 184 lb-ft for 1983. SlashGear gives 123 hp and 184 lb-ft for a 1985 300TD. The 121/125 figures are the metric PS ratings restated as hp. Unresolved.",
   "evidence": [
    { "ref": "wikipedia-om617", "quote": "Power originally was 121 PS (89 kW; 119 hp) @ 4350 rpm, torque 230 N⋅m (170 lb⋅ft) @ 2400 rpm. From October 1982 - 125 PS (92 kW; 123 hp) @ 4350 rpm, torque 250 N⋅m (184 lb⋅ft) @ 2400 rpm" },
    { "ref": "wikipedia-w123", "quote": "300 D Turbodiesel 1981–1985 3.0 L OM617 A I5 turbo 123 hp (92 kW) at 4,350 181 lb⋅ft (245 N⋅m) at 2,400" },
    { "ref": "hagerty-fps-300d", "quote": "got a beefy OM617 turbodiesel straight-five, which made a respectable-for-the-time 120 horsepower and 170 pound-feet" },
    { "ref": "classic-300d-turbodiesel", "quote": "This turbocharged 3.0L inline five initially generated 121hp and 170 lb ft of torque, but a technical update for the 1983 model year saw output increase to 125hp and 184 lb ft of torque" },
    { "ref": "slashgear-w123-turbodiesel", "quote": "in the 1985 300TD shown above it produced 123 horsepower and 184 pound-feet of torque" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The turbocharged OM617 displaces 2,998 cc with a 90.9 x 92.4 mm bore and stroke, uses a Garrett fixed-geometry wastegate turbocharger, and carried EGR equipment on cars sold in North America.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["wikipedia-om617", "wikipedia-w123"],
   "evidence": [
    { "ref": "wikipedia-om617", "quote": "The .951 was introduced for 1981 and displaced 3.0 L (2,998 cc) , using a 90.9 mm × 92.4 mm (3.58 in × 3.64 in) bore and stroke" },
    { "ref": "wikipedia-w123", "quote": "I5 turbo 2998 cc Bosch Fuel Injection with precombustion chamber and Garrett T3 turbocharger" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 1985 US 300D and 300CD Turbodiesel carried EPA ratings of 21 mpg combined, 19 city and 23 highway on fueleconomy.gov's revised scale with a 3.0-liter five-cylinder turbo and a 4-speed automatic, while Hagerty quotes the period EPA combined rating for a 1982 300D as 27 mpg; the two figures reflect different EPA methodologies rather than a factual conflict.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["fueleconomy-1985-300d", "hagerty-fps-300d"],
   "evidence": [
    { "ref": "fueleconomy-1985-300d", "quote": "3.0 L, 5 cyl, Automatic 4-spd, Turbo 1985 Mercedes-Benz 300D/300CD EPA Fuel Economy Diesel Combined MPG: 21 MPG City MPG: 19 Highway MPG: 23" },
    { "ref": "hagerty-fps-300d", "quote": "This car earned an EPA combined fuel economy rating of 27 miles per gallon, which was exceptionally good for a luxury car scaling in at 3585 pounds" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The curb weight of the US 300D Turbodiesel is given as 3,362 lb (1,525 kg) in Wikipedia's production table and as 3,585 lb by Hagerty for a 1982 car; the sources differ by more than 200 lb and neither states its basis.",
   "confidence": "low",
   "status": "disputed",
   "sourceRefs": ["wikipedia-w123", "hagerty-fps-300d"],
   "conflictNote": "Wikipedia's table lists 3,362 lb (1,525 kg) for the 300 D Turbodiesel (USA only) and 3,583 lb (1,625 kg) for the 300 CD Turbodiesel. Hagerty states the 1982 300D sedan scales in at 3,585 pounds, a figure that matches Wikipedia's coupe rather than its sedan. Unresolved.",
   "evidence": [
    { "ref": "wikipedia-w123", "quote": "121 PS (89 kW; 119 hp) at 4,350 rpm 230 N⋅m (170 lb⋅ft) at 2,400 rpm 1,525 kg (3,362 lb) 14.0 s 165 km/h (103 mph)" },
    { "ref": "hagerty-fps-300d", "quote": "which was exceptionally good for a luxury car scaling in at 3585 pounds" }
   ]
  },
  {
   "section": "history",
   "claimText": "The 1982 300D Turbodiesel is documented at an MSRP of $29,756 by Hagerty and at a base price of $25,645 by conceptcarz; the two US dollar figures for the same model year disagree and are not reconciled by either source. Hagerty also puts the 1982 240D's starting sticker at $21,282.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["hagerty-fps-300d", "conceptcarz-1982-300d"],
   "conflictNote": "Hagerty (high reliability) states the 1982 300D carried an MSRP of $29,756. conceptcarz (low reliability) lists the 1982 300D base price as $25,645. Neither states whether destination, options or a mid-year increase account for the gap. Unresolved; the Hagerty figure is the better supported of the two.",
   "evidence": [
    { "ref": "hagerty-fps-300d", "quote": "This car is the most expensive W123 sedan available here for 1982: the 300D, with an MSRP of $29,756" },
    { "ref": "conceptcarz-1982-300d", "quote": "1982 Mercedes-Benz 300D Base Price : $25,645" }
   ]
  },
  {
   "section": "history",
   "claimText": "Hagerty states the W123 was sold in the US with diesel power only for the 1981 through 1985 model years, while Wikipedia's US model table lists the gasoline 280E and 280CE through 1981 and says they were eliminated for 1982; the last gasoline model year is therefore given as either 1980 or 1981 depending on the source.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["hagerty-fps-300d", "wikipedia-w123"],
   "conflictNote": "Hagerty: diesel-only for 1981 through 1985. Wikipedia: the turbodiesel's performance led to the elimination of the 280 E and 280 CE for 1982, and its North American table lists the 280 E at 140 hp for 1980-1981. Unresolved.",
   "evidence": [
    { "ref": "hagerty-fps-300d", "quote": "In the United States, the W123 was available only with diesel power for the 1981 through 1985 model years" },
    { "ref": "wikipedia-w123", "quote": "The performance improvement of turbocharged diesel engine led to the elimination of 280 E and 280 CE for 1982" }
   ]
  },
  {
   "section": "history",
   "claimText": "US W123s carried 5-mph bumpers and round sealed-beam headlamps, the gasoline 280E was detuned to between 137 and 142 hp against a European rating of 182 hp while weighing at least 220 lb more, most US cars used the W4B 025 four-speed automatic, only the 240D was offered with a four-speed manual, and the five-speed manual was never sold in North America.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["wikipedia-w123", "mercedeswerks-history"],
   "evidence": [
    { "ref": "wikipedia-w123", "quote": "Most of the American models came with the W4B 025 four-speed automatic and only the 240 D was also offered with the 4-speed manual transmission. The new 5-speed manual gearboxes were never offered for the North American market" },
    { "ref": "mercedeswerks-history", "quote": "In February all European models except the 300TD were offered with an optional 5-speed manual transmission" }
   ]
  },
  {
   "section": "history",
   "claimText": "The turbocharged five was introduced in September 1979 in the European 300TD wagon and was limited to the wagon in most markets, while North America also received turbo sedans and coupes; the 240D was dropped in the US for the 1984 model year when the W201 190E and 190D took the entry position.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["mercedeswerks-history", "wikipedia-w123"],
   "evidence": [
    { "ref": "mercedeswerks-history", "quote": "The turbo charged 5 cylinder engine was introduced in September 1979 in the 300TD Turbo diesel wagon" },
    { "ref": "wikipedia-w123", "quote": "The 240 D was discontinued for the 1984 model year as the new W201 190 E and 190 D took the position of the lowest-priced Mercedes-Benz" }
   ]
  },
  {
   "section": "history",
   "claimText": "Early demand for the W123 was so strong that customers waited nine to twelve months for delivery and lightly used cars changed hands above list price on a black market; the sedan was introduced in January 1976 and production ended in January 1986.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["wikipedia-w123", "haynes-na-w123", "mercedeswerks-history"],
   "evidence": [
    { "ref": "wikipedia-w123", "quote": "customers who placed their orders faced a lengthy waiting period of nine to twelve months. A black market emerged for the customers who were willing to pay more for immediate delivery" },
    { "ref": "haynes-na-w123", "quote": "gently used models were changing hands on the black market at higher than list price, just to avoid lengthy dealer waiting lists" },
    { "ref": "mercedeswerks-history", "quote": "Mercedes-Benz introduced the W123 four-door executive car in January, 1976 to replace the W115" }
   ]
  },
  {
   "section": "history",
   "claimText": "The naturally aspirated US cars were slow: Hagerty rates the 1982 240D at 67 hp and 97 lb-ft in a 3,130 lb car, and SlashGear reports a 1980 US 300CD at 83 hp and 120 lb-ft needing more than 18 seconds to reach 60 mph, against just under 14 seconds for a 1985 300TD Turbodiesel.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["hagerty-fps-300d", "slashgear-w123-turbodiesel"],
   "evidence": [
    { "ref": "hagerty-fps-300d", "quote": "The 240D’s naturally aspirated oil burner generated a mere 67 horsepower and 97 pound-feet, which was miserable for a 3130-pound car" },
    { "ref": "slashgear-w123-turbodiesel", "quote": "put out a modest 83 horsepower and 120 pound-feet of torque, and took more than 18 seconds to get the 4,442-pound car to 60 miles per hour" }
   ]
  },
  {
   "section": "problems",
   "claimText": "The OM617 diesel is documented as routinely exceeding several hundred thousand miles, with Wikipedia citing engines passing 620,000 miles without a rebuild and Hagerty recording W123 sedans in junkyards at 417,046 and 411,448 miles.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["adsit-w123-problems", "wikipedia-om617", "hagerty-fps-300d"],
   "evidence": [
    { "ref": "adsit-w123-problems", "quote": "With proper maintenance, W123 diesel engines can exceed several hundred thousand miles" },
    { "ref": "wikipedia-om617", "quote": "engines often reaching over 1,000,000 km (620,000 mi) without being rebuilt" },
    { "ref": "hagerty-fps-300d", "quote": "after an ’82 sedan with 417,046 miles and an ’85 sedan that traversed 411,448 miles" }
   ]
  },
  {
   "section": "problems",
   "claimText": "The vacuum system that operates the central locking, climate control flaps and diesel engine shutoff is the most common W123 fault pattern: lines go brittle and leak, producing locking failures, an engine that will not shut off and vents that will not move.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["adsit-w123-problems", "motorious-w123-guide"],
   "evidence": [
    { "ref": "adsit-w123-problems", "quote": "The W123 uses vacuum operated door locks, climate control components, and engine shutoff systems. Over time, vacuum lines become brittle and leak" },
    { "ref": "motorious-w123-guide", "quote": "This latter system is vacuum-operated and it’s leak-prone" }
   ]
  },
  {
   "section": "problems",
   "claimText": "Rust is the failure that ends a W123, concentrated at the jack points, floor pans, wheel arches, trunk floor and firewall corners, plus the battery tray and spare wheel well, with wagon tailgates and fuel tanks and bumpers that corrode from the inside out.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["adsit-w123-problems", "motorious-w123-guide"],
   "evidence": [
    { "ref": "adsit-w123-problems", "quote": "Common rust areas include: • Jack points • Floor pans • Wheel arches • Trunk floor • Firewall corners" },
    { "ref": "motorious-w123-guide", "quote": "The areas most likely to give problems include the battery tray, spare wheel well and jacking points" }
   ]
  },
  {
   "section": "problems",
   "claimText": "Routine OM617 shop work is oil leaks at the valve cover gasket, oil filter housing, front crankshaft seal and rear main seal, plus glow plug failures, vacuum pump wear, timing chain stretch and collapsed motor mounts; Motorious quotes a 60,000-mile timing chain interval and 4,000-mile oil changes and warns that a neglected chain can wreck the engine.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["adsit-w123-problems", "motorious-w123-guide"],
   "evidence": [
    { "ref": "adsit-w123-problems", "quote": "Repair shops frequently address: • Glow plug failures • Vacuum pump wear • Timing chain stretch • Motor mount collapse" },
    { "ref": "motorious-w123-guide", "quote": "The oil should have been changed every 4000 miles, and the timing chain every 60,000 miles; failure to do so means the chain can fail, wrecking the engine" }
   ]
  },
  {
   "section": "market",
   "claimText": "As of September 2026 classic.com shows an average W123 sale of $15,413 across all bodies, a recorded floor of $281 for a 1977 240D in December 2021, and sub-model benchmarks of $11,286 (240D), $9,594 (300D), $13,079 (300D Turbodiesel), $14,009 (300CD) and $19,518 (300CD Turbodiesel).",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["classic-w123"],
   "evidence": [
    { "ref": "classic-w123", "quote": "a series of mid size luxury cars" }
   ]
  },
  {
   "section": "market",
   "claimText": "As of September 2026 classic.com's 300D Turbodiesel page shows an average sale of $13,036 and a benchmark of $13,150, with a high of $37,500 for a 1983 sedan sold on Bring a Trailer in May 2026, and its 300TD Turbodiesel page shows an average of $19,205 and a benchmark of $19,623 with 2026 wagon results of $33,000, $33,123 and $35,000; SlashGear's earlier reading of the same site gave five-year averages of just under $13,000 for the sedan and almost $20,000 for the wagon.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["classic-300d-turbodiesel", "classic-300td-turbodiesel", "slashgear-w123-turbodiesel"],
   "evidence": [
    { "ref": "classic-300d-turbodiesel", "quote": "The Mercedes-Benz 300D Turbodiesel was a variant of the W123 Sedan that was exclusive to the Japanese and North American markets" },
    { "ref": "classic-300td-turbodiesel", "quote": "It utilized the OM617.952 turbocharged 3.0L engine producing 125 horsepower and 184 lb-ft of torque" },
    { "ref": "slashgear-w123-turbodiesel", "quote": "Classic.com lists 115 W123 series 300D sales over the past five years, at an average price of just under $13,000" }
   ]
  },
  {
   "section": "summary",
   "claimText": "The W123 wagon was the first W123 to receive the turbodiesel and the wagon's OM617.952 was the only turbocharged OM617 fitted to a European W123, while the 1978 W116 300SD, for North America only, was the first production turbodiesel sedan.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["wikipedia-om617", "mercedeswerks-history"],
   "evidence": [
    { "ref": "wikipedia-om617", "quote": "the North American market-only 300SD, the world's first production turbodiesel sedan" },
    { "ref": "mercedeswerks-history", "quote": "was offered with automatic transmission only and limited to the 300TD in most markets. The North American markets were given Turbo models in the 4-door and coupe models as well" }
   ]
  }
 ]
};
