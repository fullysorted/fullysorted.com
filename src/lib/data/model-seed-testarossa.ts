/**
 * Researched model draft — Ferrari Testarossa (1984-1991).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedTestarossa = {
 "slug": "ferrari/testarossa",
 "heroPhoto": "/images/models/ferrari-testarossa.jpg",
 "heroPhotoCredit": "Photo: Calreyn88, CC BY-SA 4.0, via Wikimedia Commons",
 "make": "Ferrari",
 "model": "Testarossa",
 "generation": "Testarossa",
 "generationCode": "Tipo F110 AB",
 "trim": null,
 "yearStart": 1984,
 "yearEnd": 1991,
 "bodyStyles": [
  "2-door Berlinetta (fixed-roof coupe)",
  "2-door Spider (one factory car, chassis 62897, plus eleven Pininfarina commissions counted within the production total)"
 ],
 "engines": [
  "4,943 cc Tipo F113 A flat-12 (180-degree V12), DOHC per bank, four valves per cylinder, dry sump, Bosch K-Jetronic, no catalysts, 390 bhp at 6,300 rpm - European and UK specification 1984-1986",
  "4,943 cc Tipo F113 B, as above but Bosch KE-Jetronic and Marelli MED 120B ignition from March 1986; catalysts standard from chassis 82967 in 1989",
  "4,943 cc Tipo F113 A 040 with catalysts, KE-Jetronic and secondary air pump, 380 bhp at 5,750 rpm - US, Canadian and Japanese specification",
  "4,943 cc Tipo F113 A 046, later F113 B 046 - Swiss and Swedish specification, KE-Jetronic throughout"
 ],
 "productionTotal": 7177,
 "productionNotes": "Four independently consulted sources give the same total of 7,177 cars: Red Headed, Supercar Nostalgia, Classic & Sports Car and Petrolicious. Red Headed adds the serial range, 53081 to 91923, and a year-by-year breakdown nothing else consulted contradicts: 110 cars in 1984, 568, 819, 1,008, 1,072, 1,126, 1,308 in 1990 and 1,166 in 1991, with approximate US and Canadian volumes by US model year of 121, 300, 315, 390, 261, 452 and 266. The 1988 figure of 390 is echoed by RM Sotheby's catalogue for a 1988 US car sold at Monterey in August 2026. A further 150 to 200 European cars reached the United States as privately converted grey-market imports, outside that total. Of the 7,177, 438 were right-hand drive - Supercar Nostalgia gives that as the total, Classic & Sports Car as a United Kingdom figure. Eleven Pininfarina Spiders for the Sultan of Brunei sit inside the total; open cars by Straman, Pavesi and Lorenz & Rankl are aftermarket conversions and outside it. When production stopped is not agreed: Red Headed says late 1991, Wikipedia 1984 to 1991, Supercar Nostalgia early 1992, classic.com model years 1984 to 1992. Ferrari and Red Headed both state 2,261 512 TRs; Classic & Sports Car states 2,280. All agree the F512 M ran to 501 cars.",
 "notableTrims": [
  {
   "name": "Monospecchio, single-nut (1984 to March 1986)",
   "note": "The launch specification: one high-mounted driver's-side mirror at the top of the A-pillar, the result of a misread European rearward-visibility rule, and magnesium five-spoke wheels on a single centre nut with 415 mm Michelin TRX tyres. The cars collectors chase, and the tyres are why they are awkward to run."
  },
  {
   "name": "Five-bolt cars, the so-called 88.5 (from June 1988)",
   "note": "From chassis 75997 the centre-lock wheel gave way to a five-stud pattern by OZ and Speedline, with revised column, suspension, dampers and brakes and a wider track. Easier to live with, less sought after."
  },
  {
   "name": "United States and Canadian specification (Tipo F113 A 040)",
   "note": "Catalysed, KE-Jetronic, 380 bhp at 5,750 rpm rather than 390 at 6,300, with square side repeaters, larger bumpers, a third brake light from 1986 and, from 1987, a motorised belt up the A-pillar. US dry weight 1,660 kg against 1,506 kg."
  },
  {
   "name": "Swiss and Swedish specification (F113 A 046 / F113 B 046)",
   "note": "A third emissions specification: KE-Jetronic from the start but initially without catalysts, gaining them with the F113 B 046. Rarely identified correctly in listings; the engine type stamped on the block settles it."
  },
  {
   "name": "Testarossa Spider, chassis 62897",
   "note": "One factory Spider, built by Pininfarina in 1986 for Fiat chairman Gianni Agnelli, with reinforced chassis, cut-down screen, retractable roof and a Valeo transmission switchable to full automatic because a leg injury made a clutch pedal difficult."
  },
  {
   "name": "512 TR (1991-1994)",
   "note": "Not a facelift. Engine and gearbox dropped 30 mm, compression raised to 10:1, Motronic M2.7 and new plenums for 428 bhp at 6,750 rpm, with reworked shift, brakes and interior."
  },
  {
   "name": "F512 M (1994-1996)",
   "note": "The last Ferrari flat-12. Fixed headlamps under glass replaced the pop-ups, round tail lamps replaced the full-width grille, NACA ducts appeared in the front lid, and titanium rods with a lighter crank allowed a 7,500 rpm limiter."
  }
 ],
 "specs": {
  "layout": "Longitudinal mid-mounted engine, rear-wheel drive, gearbox beneath and behind the engine",
  "chassis": "Tipo F110 AB tubular steel frame with removable rear subframe; steel cabin and doors, aluminium panels, 2,550 mm wheelbase",
  "engine": "4,943 cc Tipo F113 flat-12 (180-degree V12), all-alloy, dry sump, twin side-mounted radiators",
  "valvetrain": "Twin belt-driven overhead camshafts per bank, 48 valves, driven from the crankshaft rather than idler gears",
  "bore_stroke": "82 mm x 78 mm",
  "compression": "9.2:1 to 9.3:1 European; 8.8:1 to 9.3:1 across the emissions variants per Red Headed",
  "fuel_ignition": "Bosch K-Jetronic (F113 A) or KE-Jetronic (later types), Marelli Microplex MED 120A then 120B",
  "lubrication": "Dry sump",
  "power": "390 bhp at 6,300 rpm claimed, European specification; 380 bhp at 5,750 rpm for US, Canadian and Japanese cars",
  "torque": "490 Nm (361 lb ft) at 4,500 rpm European; 470 Nm quoted for US specification",
  "transmission": "5-speed manual with open gate, twin-plate hydraulic clutch, limited-slip differential; ABS never fitted",
  "brakes": "Ventilated discs, 315 mm front and 310 mm rear",
  "wheels_tyres": "Single centre-nut magnesium five-spoke on 415 mm Michelin TRX to March 1986, then 8J and 10J x 16 in; five-stud OZ or Speedline from June 1988",
  "weight": "1,506 kg dry; 1,660 kg dry for the US version (Red Headed)",
  "top_speed_claimed": "290 km/h (180 mph) - manufacturer figure, not independently established",
  "top_speed_tested": "176 mph (Car and Driver), 181 mph (Road & Track), 178 mph (Motor), 180.1 mph (Autocar); Motor Sport's February 1992 panel listed 171 mph",
  "acceleration": "5.8 s to 100 km/h quoted; 5.0 s to 60 mph at Car and Driver and Road & Track, 5.3 s at Motor, 5.8 s at Autocar"
 },
 "summary": "The Ferrari Testarossa (1984-1991) replaced the 512 BBi and was designed around two specific complaints about that car: a cabin cooked by coolant pipes running the length of the chassis, and almost no luggage. Moving the radiators to the flanks fixed both, and produced the feature the car is known for, since several markets required large body openings to be covered and Pininfarina answered with slatted strakes. The team under Leonardo Fioravanti drew a car 146 mm wider than the Boxer, with a 4,943 cc four-valve flat-12 of 390 bhp behind the cabin. It was also the first twelve-cylinder Ferrari legally saleable in the United States since 1973, which is much of why 7,177 were built where the Boxer sold in hundreds. The launch cars carry a single high-mounted mirror and single-nut wheels, both of which went during the run.",
 "history": "## Fixing the Boxer\nFerrari began work on a 512 BBi successor in 1978. The Boxer sold respectably but carried two faults that mattered: a front-mounted radiator whose plumbing ran the length of the car and turned the cabin into an oven, and almost nowhere to put luggage. It was also not certifiable for the United States, shutting Ferrari out of its most valuable twelve-cylinder market. A plan to restyle the car was abandoned in favour of a new one. The Testarossa was made deliberately larger: 1,976 mm wide, a wheelbase stretched to 2,550 mm, a taller roofline and carpeted luggage space under the front lid. The name recalled the 500 TR and 250 Testa Rossa racers of the 1950s and the red cam covers they shared with the new four-valve heads.\n\n## The Strakes Were Not a Style Decision\nThe radiators moved to the flanks, eliminating the transfer pipework and the heat with it, and requiring two very large side intakes. Several markets outlawed openings of that size, so they had to be covered. Pininfarina's team - Emanuele Nicosia, who originated the design, with Ian Cameron, Guido Campoli and Diego Ottina under Leonardo Fioravanti - turned that requirement into the slatted ducts that define the car. Fioravanti, trained in aerodynamics, set the layout; the result needed no rear spoiler and recorded a drag coefficient of 0.36 against the Countach's 0.42. Air passed through the engine bay and out at the tail and engine lid. Cooling drove the shape, and the shape made the car wider at the rear than the front.\n\n## The American Return\nThe Testarossa was the first twelve-cylinder Ferrari certified for United States sale since 1973, and America took it in volume. US and Japanese cars used the Tipo F113 A 040 with catalysts, KE-Jetronic and a secondary air pump, rated 380 bhp at 5,750 rpm against 390 at 6,300 for Europe, with square side repeaters, heavier bumpers and, from 1987, a motorised belt up the A-pillar. Even so, waiting lists ran to two or three years, and 150 to 200 European cars were federalised privately and imported grey. Ferrari's supply of two US cars to Universal Television, chassis 63259 and 63631, repainted white for night filming, did the rest.\n\n## Seven Years of Quiet Revision\nThe Testarossa changed less than its seven-year run suggests, but the changes it made now divide the market. At Geneva in March 1986 the single high mirror gave way to twin low ones and the metric TRX wheels to 16-inch rims; European engines became the F113 B with KE-Jetronic. In June 1988, from chassis 75997, the single-nut wheels gave way to a five-stud pattern, bringing revised suspension, dampers, brakes and steering column with them. From 1989, at chassis 82967, catalytic converters became standard everywhere, and the specification was essentially static thereafter.\n\n## 512 TR, F512 M and the End of the Flat-12\nThe 512 TR, shown to press in Maranello in November 1991 and to the public at Los Angeles in January 1992, was a genuine re-engineering rather than a facelift. Engine and gearbox dropped 30 mm, compression rose to 10:1, Bosch Motronic M2.7 replaced the mechanical injection, and output reached 428 bhp. The F512 M of October 1994 exchanged the pop-up headlamps for fixed units under glass and the full-width tail grille for round lamps, and ran to 501 cars before the 550 Maranello ended twenty-five years of flat-12 road cars in 1996.",
 "marketNotes": "As of August 2026, classic.com puts the Testarossa market benchmark at $176,295 on a rising trend, with an average recorded sale of $167,345, tracked results running from $68,000 for a 1989 car on 27 January 2022 to $522,500 for another 1989 car on 15 August 2026, and 17 cars advertised between $169,000 and $425,980. The spread between those two 1989 examples is the whole story of this market. Monterey week 2026 bears it out: RM Sotheby's published a sold price of $472,500 for a 1988 US-specification car showing 1,059 miles with a January 2026 belt service, brakes and clutch, while Gooding Christie's realised $257,600 at Pebble Beach on 14 August 2026 for a 1989 US car with 15,740 miles that had sat in one Californian family for over thirty-five years. The successors sit above the Testarossa: as of August 2026 classic.com's benchmark is $302,708 for the 512 TR and $551,984 for the F512 M, both rising. For historical bearing, Classic & Sports Car's October 2018 guidance was 70,000 to 125,000 pounds with left-hand-drive cars around 30 per cent lower.",
 "whatToLookFor": "Establish the specification first, because the market prices it precisely. The engine type stamped on the block distinguishes the European F113 A and F113 B from the US-Japanese F113 A 040 and the Swiss-Swedish 046 variants, and it does not always match what a listing claims. A genuine single-mirror car should have a chassis number below 67079 for a European example or 67487 for a US one; twin mirrors on an early chassis are retrofits, not factory. Single-nut wheels ran to 75997, and the five-stud change brought different suspension, dampers, brakes and column, so a mismatch between wheel type and chassis number means someone has been busy. Cars on original 415 mm TRX tyres need those tyres, which Classic & Sports Car put at 400 to 500 pounds each. Then the paperwork. Cam-belt dates matter more than mileage here, and the interval is contested, so a documented history without gaps beats a single recent invoice. Because the belt job requires the engine and rear subframe to come out, that visit is when a competent shop deals with the water pump seals, clutch and coolant hoses; belts alone on a high-hours car is a partial job. Check every instrument, look hard at seat bolsters and the dash top, and treat long storage as a cost, not a virtue.",
 "commonProblems": "The flat-12 is described by specialists as strong; the recurring costs are the systems around it. Water pumps are the classic nuisance: FerrariChat contributors report the original pump weeping oil past a rear seal meant to hold back splash rather than pressurised oil, with a drain hole between the two seals as the tell, and the settled advice is to deal with it while the engine is out. Petrolicious notes that pre-1989 pumps can fail prematurely and that factory updates exist. Air-conditioning rubber deteriorates with disuse, and the system was never strong. Infrequent use also leaves dried fuel residue in the K-Jetronic or KE-Jetronic metering, which needs a Bosch specialist rather than a Ferrari one. The gearbox baulks when cold, second gear in particular, which is normal rather than a fault, but Petrolicious puts clutch life at around 15,000 miles and the clutch is another engine-out job. Electrics are the weak area, with period immobilisers unreliable and dash switchgear ageing badly; Classic & Sports Car quotes new dash tops at up to 2,000 pounds.",
 "valueTrajectory": "The Testarossa spent the 2000s as the cheap way into a twelve-cylinder Ferrari and has spent the 2010s and 2020s leaving that position. Classic & Sports Car's October 2018 range of 70,000 to 125,000 pounds and Petrolicious's 60,000 to 100,000 pounds for a good car both now read as historic. As of August 2026 classic.com's benchmark stands at $176,295 and is trending upward, but the benchmark understates what is happening at the top: the same model recorded $68,000 in January 2022 and $522,500 in August 2026, and Monterey week 2026 produced $472,500 for a 1,059-mile 1988 car and $257,600 for a 15,740-mile 1989 car within a day of each other. That is a market sorting itself by mileage, specification and documentation rather than lifting evenly. Single-mirror, single-nut launch cars and low-mileage examples carry the top of the range; ordinary five-stud cars with average miles have moved far less.",
 "overallConfidence": "high",
 "sources": [
  {
   "ref": "ferrari-testarossa",
   "title": "Testarossa",
   "url": "https://www.ferrari.com/en-EN/auto/testarossa",
   "publisher": "Ferrari S.p.A.",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Paris Motor Show debut October 1984, 512 BBi predecessor, Pininfarina design, and the enlarged side intakes named as the constraint that produced the strakes."
  },
  {
   "ref": "ferrari-512tr",
   "title": "512 TR",
   "url": "https://www.ferrari.com/en-EN/auto/512-tr",
   "publisher": "Ferrari S.p.A.",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "2,261 examples, chassis 89100 to 99743, 1991-1994; engine and gearbox lowered 30 mm, compression 9.3:1 to 10:1, Motronic M2.7, 428 bhp at 6,750 rpm (421 US)."
  },
  {
   "ref": "ferrari-f512m",
   "title": "F512 M",
   "url": "https://www.ferrari.com/en-EN/auto/f512-m",
   "publisher": "Ferrari S.p.A.",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Paris Salon autumn 1994, 501 examples, chassis 99376 to 105516, to early 1996; fixed headlamps under glass, twin round tail lamps, NACA ducts in the front lid."
  },
  {
   "ref": "wikipedia-testarossa",
   "title": "Ferrari Testarossa",
   "url": "https://en.wikipedia.org/wiki/Ferrari_Testarossa",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Type F110, 1984 to 1991, almost 10,000 cars across all variants; Cd 0.36 against the Countach's 0.42, 1,976 mm wide, 2,550 mm wheelbase, the Pininfarina team names, and the claim that the F512 M's 501 included 75 for North America and 75 right-hand drive."
  },
  {
   "ref": "supercarnostalgia-tr",
   "title": "Guide: Ferrari Testarossa - a Historical & Technical Appraisal",
   "url": "https://supercarnostalgia.com/blog/ferrari-testarossa",
   "publisher": "Supercar Nostalgia",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "7,177 built, 438 right-hand drive, production said to end early 1992; single mirror as a misread visibility law, March 1986 twin-mirror change, June 1988 five-bolt change, catalysts from 82967, the five engine types, Spider 62897, eleven Brunei Spiders."
  },
  {
   "ref": "redheaded-production",
   "title": "Red Headed - Testarossa: Production",
   "url": "https://www.red-headed.com/testarossa_production.html",
   "publisher": "Red Headed",
   "sourceType": "registry",
   "reliability": "medium",
   "notes": "July 1984 to late 1991, 7,177 cars, serials 53081 to 91923; yearly output 110/568/819/1008/1072/1126/1308/1166, US-Canadian volumes 121/300/315/390/261/452/266, and 150 to 200 grey-market US imports."
  },
  {
   "ref": "redheaded-versions",
   "title": "Red Headed - Testarossa: Versions",
   "url": "https://www.red-headed.com/testarossa_versions.html",
   "publisher": "Red Headed",
   "sourceType": "registry",
   "reliability": "medium",
   "notes": "Change points by chassis: twin low mirrors from 67079 (Europe) and 67487 (US), five-bolt wheels from 75997 in June 1988 with revised column, suspension, dampers and brakes, the five engine types by market, catalysts from 82967."
  },
  {
   "ref": "redheaded-specs",
   "title": "Red Headed - Testarossa: Specifications",
   "url": "https://www.red-headed.com/testarossa_specs.html",
   "publisher": "Red Headed",
   "sourceType": "registry",
   "reliability": "medium",
   "notes": "4,943 cc, 82 x 78 mm, compression 8.8:1 to 9.3:1, 390 HP at 6,300 rpm Euro and 380 at 5,750 US, 490 and 470 Nm, 315/310 mm discs, 1,506 kg and 1,660 kg US; period maxima 176, 181, 178, 180.1 mph."
  },
  {
   "ref": "redheaded-512tr",
   "title": "Red Headed - 512 TR: Production",
   "url": "https://www.red-headed.com/512tr_production.html",
   "publisher": "Red Headed",
   "sourceType": "registry",
   "reliability": "medium",
   "notes": "512 TR assembly began April 1991 and overlapped Testarossa production; 2,261 cars, serials 89100 to 99743, 408 to North America."
  },
  {
   "ref": "redheaded-f512m",
   "title": "Red Headed - F512 M: Production",
   "url": "https://www.red-headed.com/f512m_production.html",
   "publisher": "Red Headed",
   "sourceType": "registry",
   "reliability": "medium",
   "notes": "Built late 1994 to early 1996, 501 cars, serials 99375 to 105516, of which 75 to North America, each numbered as one of 75."
  },
  {
   "ref": "classic-testarossa",
   "title": "Ferrari Testarossa Market",
   "url": "https://www.classic.com/m/ferrari/testarossa/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of August 2026: benchmark $176,295 rising, average $167,345, lowest $68,000 (1989 car, 27 January 2022), highest $522,500 (1989 car, 15 August 2026, Mecum); 17 advertised, $169,000 to $425,980."
  },
  {
   "ref": "classic-512tr",
   "title": "Ferrari 512 TR Market",
   "url": "https://www.classic.com/m/ferrari/512-tr/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of August 2026: benchmark $302,708 rising, average $301,741, highest tracked $715,000 on 16 May 2026, lowest $102,000 on 20 March 2022."
  },
  {
   "ref": "classic-f512m",
   "title": "Ferrari F512 M Market",
   "url": "https://www.classic.com/m/ferrari/f512-m/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of August 2026: benchmark $551,984 rising, average $525,017, highest tracked $1,210,000 on 17 January 2026, lowest $161,500 on 13 September 2021."
  },
  {
   "ref": "csc-buyers-guide",
   "title": "Buyer's guide: Ferrari Testarossa",
   "url": "https://www.classicandsportscar.com/features/buyers-guide-ferrari-testarossa",
   "publisher": "Classic & Sports Car",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "October 2018. Testarossa 7,177 with 438 RHD; 512 TR 2,280; F512 M 501 with 41 RHD; family total 9,958. Cambelt every three years, 3,500 pounds a year, a 15,500-pound 2017 invoice, dash tops to 2,000 pounds, TRX tyres 400-500 pounds each, UK values 70,000-125,000."
  },
  {
   "ref": "petrolicious-guide",
   "title": "Ferrari Testarossa Buying Guide",
   "url": "https://petrolicious.com/blogs/articles/ferrari-testarossa-buying-guide-1",
   "publisher": "Petrolicious",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "7,177 built to 1991; pre-1989 water pumps failing early with factory updates, air-conditioning rubber perishing with disuse, weak electrics, second gear baulking cold, clutch about 15,000 miles engine-out, cambelts every 15,000 miles or three years."
  },
  {
   "ref": "motorsport-roadtest-1986",
   "title": "Ferrari Testarossa - road test, July 1986",
   "url": "https://www.motorsportmagazine.com/archive/article/july-1986/88/ferrari-testarossa/",
   "publisher": "Motor Sport",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Period test: 390 bhp at 6,300 rpm, 362 lb ft at 4,500 rpm, 180 mph quoted as achievable; silky clutch, crisp steering above 20 mph, good over-shoulder visibility, wandery under light braking, the single mirror obstructing junctions."
  },
  {
   "ref": "motorsport-1992-panel",
   "title": "Everyday supercar, February 1992",
   "url": "https://www.motorsportmagazine.com/archive/article/february-1992/44/road-test-25/",
   "publisher": "Motor Sport",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "A Mondial t test whose panel records the Testarossa at 127,005.25 pounds and 171 mph, and calls it no longer made as of February 1992."
  },
  {
   "ref": "rm-mo26",
   "title": "1988 Ferrari Testarossa, The Monterey Auction 2026",
   "url": "https://rmsothebys.com/auctions/mo26/lots/r0139-1988-ferrari-testarossa",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Lot 311, published result $472,500 USD marked Sold, Monterey August 2026. Chassis ZFFSG17A6J0076950, 1,059 miles, belt service January 2026 with brakes and clutch; catalogue states about 390 US cars built in 1988."
  },
  {
   "ref": "gooding-pb26",
   "title": "1989 Ferrari Testarossa, Pebble Beach Auctions 2026",
   "url": "https://www.goodingco.com/lot/1989-ferrari-testarossa-pb26",
   "publisher": "Gooding Christie's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Realised $257,600 at Pebble Beach 2026. Chassis ZFFSG17AXK0082851, US specification, 15,740 miles, a 1989 car with the 1988-and-a-half five-lug wheels and door mirrors."
  },
  {
   "ref": "jscuderia-menu",
   "title": "Ferrari Testarossa / TR 512 Service Menu",
   "url": "https://jscuderiautomotive.com/services/ferrari-service/ferrari-testarossa-tr-512-menu/",
   "publisher": "J. Scuderia Automotive",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Specialist menu: annual service from $799; major service from $12,100 with subframe removal, belt, tensioner and bearing work; engine-out belts every 30,000 miles or five years."
  },
  {
   "ref": "fchat-waterpump",
   "title": "Water Pump replacement during belt service on TR",
   "url": "https://www.ferrarichat.com/forum/threads/water-pump-replacement-during-belt-service-on-tr.654807/",
   "publisher": "FerrariChat",
   "sourceType": "club-forum",
   "reliability": "low",
   "notes": "Owners and technicians: the pump weeps oil past a rear seal meant to hold back splash; the drain hole between the twin seals is the tell, and the seals should be done while the engine is out."
  },
  {
   "ref": "fchat-cambelt",
   "title": "Testarossa Cambelt service",
   "url": "https://www.ferrarichat.com/forum/threads/testarossa-cambelt-service.629696/",
   "publisher": "FerrariChat",
   "sourceType": "club-forum",
   "reliability": "low",
   "notes": "Owner thread showing the interval is contested: three years regardless of mileage from one specialist, three to five or longer from others, up to ten years under 10,000 km from one mechanic."
  }
 ],
 "claims": [
  {
   "section": "production",
   "claimText": "Testarossa production totalled 7,177 cars, serials 53081 to 91923, of which 438 were right-hand drive; annual output climbed from 110 cars in 1984 to 1,308 in 1990, and roughly 390 of the 1988 US model year were United States specification.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["redheaded-production", "supercarnostalgia-tr", "csc-buyers-guide", "petrolicious-guide", "rm-mo26"]
  },
  {
   "section": "production",
   "claimText": "Sources do not agree on when Testarossa production ended, which is why some cars are titled as 1992.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["redheaded-production", "wikipedia-testarossa", "supercarnostalgia-tr", "classic-testarossa"],
   "conflictNote": "Red Headed states July 1984 to late 1991. Wikipedia states 1984 until 1991. Supercar Nostalgia states early 1992. classic.com lists model years 1984 to 1992. Red Headed records that Testarossa and 512 TR assembly overlapped from April 1991, which would explain but does not settle it. Not resolved by any source consulted here."
  },
  {
   "section": "production",
   "claimText": "The 512 TR that closed the Testarossa run is stated at either 2,261 or 2,280 cars depending on the source, and no single figure is asserted here.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["ferrari-512tr", "redheaded-512tr", "csc-buyers-guide"],
   "conflictNote": "Ferrari's archive states 2,261 examples, chassis 89100 to 99743, and Red Headed independently gives the same total and range plus 408 cars to North America. Classic & Sports Car states 2,280. The difference propagates into the family total, which Classic & Sports Car puts at 9,958. Not resolved by any source consulted here."
  },
  {
   "section": "production",
   "claimText": "The F512 M ran to 501 cars, chassis 99375 to 105516, built between late 1994 and early 1996, of which 75 went to North America; the right-hand-drive count is disputed.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["ferrari-f512m", "redheaded-f512m", "csc-buyers-guide", "wikipedia-testarossa"],
   "conflictNote": "Ferrari, Red Headed and Classic & Sports Car agree on 501 cars. Red Headed states 75 went to North America, each numbered as one of 75. Classic & Sports Car states 41 right-hand-drive cars. Wikipedia states both that 75 went to North America and that 75 were right-hand drive, which cannot be the same 75. Not resolved by any source consulted here."
  },
  {
   "section": "specs",
   "claimText": "The engine is a 4,943 cc Tipo F113 flat-12 - a 180-degree V12 - with twin belt-driven camshafts per bank, four valves per cylinder, dry sump and 82 x 78 mm bore and stroke, in a tubular steel Tipo F110 AB frame with a removable rear subframe.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["wikipedia-testarossa", "redheaded-specs", "supercarnostalgia-tr"]
  },
  {
   "section": "specs",
   "claimText": "Five engine types were fitted by market: F113 A and F113 B for Europe and the UK at 390 bhp and 490 Nm, the catalysed F113 A 040 for the United States, Canada and Japan at 380 bhp at 5,750 rpm and 470 Nm, and F113 A 046 then B 046 for Switzerland and Sweden.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["redheaded-specs", "redheaded-versions", "supercarnostalgia-tr"]
  },
  {
   "section": "specs",
   "claimText": "Ferrari's quoted 290 km/h (180 mph) is broadly supported by period testing - 176 mph at Car and Driver, 181 at Road & Track, 178 at Motor, 180.1 at Autocar, 0-60 mph in 5.0 s at the first two - although Motor Sport's February 1992 panel listed 171 mph.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["redheaded-specs", "motorsport-roadtest-1986", "motorsport-1992-panel"]
  },
  {
   "section": "history",
   "claimText": "The Testarossa was conceived to correct two defects of the 512 BBi - a cabin overheated by coolant plumbing running from a front radiator, and negligible luggage space - by moving the radiators to the flanks and enlarging the car to 1,976 mm wide on a 2,550 mm wheelbase.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["wikipedia-testarossa", "supercarnostalgia-tr", "ferrari-testarossa"]
  },
  {
   "section": "history",
   "claimText": "The side strakes existed because several markets prohibited body openings of the size the relocated radiators required; Pininfarina's team, originated by Emanuele Nicosia under Leonardo Fioravanti, made the covering a styling feature, and the car needed no rear spoiler at Cd 0.36.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["ferrari-testarossa", "wikipedia-testarossa"]
  },
  {
   "section": "history",
   "claimText": "The Testarossa was the first twelve-cylinder Ferrari legally saleable in the United States since 1973; waiting lists ran to two or three years, and 150 to 200 further European cars were federalised privately and imported as grey-market machines outside the factory total.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["redheaded-production", "supercarnostalgia-tr"]
  },
  {
   "section": "history",
   "claimText": "Three changes divide the run by chassis number: twin low mirrors from 67079 (Europe) and 67487 (US) in March 1986; five-stud wheels replacing the centre-nut design from 75997 in June 1988, with revised suspension, dampers, brakes and column; and catalytic converters standard from 82967 in 1989.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["redheaded-versions", "supercarnostalgia-tr", "gooding-pb26"]
  },
  {
   "section": "history",
   "claimText": "The 512 TR was a re-engineering rather than a facelift: engine and gearbox dropped 30 mm, compression raised to 10:1, Bosch Motronic M2.7 and 428 bhp at 6,750 rpm. The F512 M of October 1994 exchanged the pop-up headlamps for fixed units under glass and the tail grille for round lamps, and was Ferrari's last flat-12 road car.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["ferrari-512tr", "ferrari-f512m", "redheaded-512tr"]
  },
  {
   "section": "problems",
   "claimText": "The recommended cam-belt interval is genuinely contested, and because the job requires the engine and rear subframe to be removed the difference is expensive.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["csc-buyers-guide", "petrolicious-guide", "jscuderia-menu", "fchat-cambelt"],
   "conflictNote": "Classic & Sports Car states every three years. Petrolicious states every 15,000 miles or three years. J. Scuderia Automotive publishes every 30,000 miles or five years. Owners on FerrariChat report three years to nine or ten on low-mileage cars, and name tensioners rather than belts as the wear item. Not resolved by any source consulted here."
  },
  {
   "section": "problems",
   "claimText": "Water pump seals are the recurring Testarossa fault: the pump weeps oil past a rear seal designed to hold back splash rather than pressurised oil, the drain hole between the twin seals is the tell, and the settled advice is to address it during the engine-out belt service. Pre-1989 pumps are also reported to fail prematurely, with factory updates available.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["fchat-waterpump", "petrolicious-guide"]
  },
  {
   "section": "problems",
   "claimText": "Standing unused is the principal enemy of these cars: dried fuel residue fouls the K-Jetronic and KE-Jetronic metering, air-conditioning rubber perishes, and period electrics, immobilisers and dash switchgear age poorly, with dash tops quoted at up to 2,000 pounds.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["csc-buyers-guide", "petrolicious-guide"]
  },
  {
   "section": "problems",
   "claimText": "A major engine-out service is the defining running cost: J. Scuderia Automotive publishes an annual service from $799 and a major service with subframe removal, belts, tensioners and bearings from $12,100, while Classic & Sports Car budgets 3,500 pounds a year and cites a 15,500-pound invoice from 2017.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["jscuderia-menu", "csc-buyers-guide"]
  },
  {
   "section": "market",
   "claimText": "As of August 2026 classic.com records a Testarossa benchmark of $176,295 on a rising trend with an average sale of $167,345, tracked results from $68,000 for a 1989 car on 27 January 2022 to $522,500 for another on 15 August 2026, and 17 cars advertised between $169,000 and $425,980.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["classic-testarossa"]
  },
  {
   "section": "market",
   "claimText": "Monterey week 2026 showed mileage and documentation separating cars within a day: RM Sotheby's published a sold price of $472,500 for a 1,059-mile 1988 US car belt-serviced in January 2026, while Gooding Christie's realised $257,600 at Pebble Beach on 14 August 2026 for a 15,740-mile 1989 US car kept in one family for thirty-five years.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["rm-mo26", "gooding-pb26", "classic-testarossa"]
  },
  {
   "section": "market",
   "claimText": "Both successors trade above the Testarossa: as of August 2026 classic.com puts the 512 TR benchmark at $302,708 and the F512 M at $551,984, both rising, with highest tracked results of $715,000 and $1,210,000 respectively.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["classic-512tr", "classic-f512m"]
  },
  {
   "section": "summary",
   "claimText": "Period testing found the Testarossa unusually civilised for its class - a silky rather than heavy clutch, crisp steering above 20 mph, good over-the-shoulder visibility - while criticising a wandery feel under light braking, the single high mirror obstructing junctions, and instruments that were hard to read.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["motorsport-roadtest-1986"]
  }
 ]
};
