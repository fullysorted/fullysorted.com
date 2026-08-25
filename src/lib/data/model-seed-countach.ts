/**
 * Researched model draft — Lamborghini Countach (1974–1990).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedCountach = {
 "slug": "lamborghini/countach",
 "make": "Lamborghini",
 "model": "Countach",
 "generation": "Countach (LP400 to 25th Anniversary)",
 "generationCode": null,
 "trim": null,
 "yearStart": 1974,
 "yearEnd": 1990,
 "bodyStyles": [
  "2-door coupe with forward-hinged scissor doors, narrow body (LP400)",
  "2-door coupe with riveted glassfibre wheel-arch extensions and optional rear wing (LP400 S onward)"
 ],
 "engines": [
  "3,929 cc 60-degree V12, type L 406, DOHC per bank, two valves per cylinder, six Weber carburettors; 375 PS (370 hp) at 8,000 rpm, 267 lb ft at 5,500 rpm as measured in the Motor Sport road test",
  "3,929 cc V12 in LP400 S tune, quoted variously at 375 bhp, 353 bhp for Series III export cars, 352 bhp, 350 PS at 7,500 rpm and 345 CV depending on source",
  "4,754 cc 60-degree V12, two valves per cylinder, quoted at 375 PS (370 hp) at 7,000 rpm for the LP500 S / 5000 S",
  "5,167 cc 60-degree V12 Quattrovalvole, four valves per cylinder, 455 PS (449 hp) at 7,000 rpm on downdraught Webers, 426 PS (420 hp) with Bosch injection"
 ],
 "productionTotal": null,
 "productionNotes": "No total is asserted because the credible sources do not agree and the gap is not a rounding artefact. Lamborghini's own heritage page states 1,999 units across the sixteen-year run, and Magneto's buying guide independently states 1,999. Wikipedia states 1,983, but cites LamboCARS.com for it, and LamboCARS states 1,983 — so those two are one source rather than two. Classic & Sports Car says approximately 2,000, and adds that 238 cars were built in right-hand drive. Per-variant counts inherit the same problem. Wikipedia gives LP400 157, LP400 S 237 across three series (50, 105, 82), LP500 S 321 and LP5000 QV 610 of which 66 were fuel-injected. LamboCARS's narrative text gives 150, 235 and 323 for the first three while its own specification tables give 157, 237 and 321; the two-car and two-figure differences are internal to that publisher and unexplained there. The Countach Register, which documents cars individually by chassis number, states flatly that only 150 were built with the periscopic roof and catalogues one car as 'the 149th of only 150'. RM Sotheby's contradicts that directly, describing a Paris 2025 car as 'one of only 157 examples of the LP400 Periscopio model produced'. Nothing consulted establishes whether 157 is a periscope-only figure or an LP400 total including later non-periscope cars. The QV is contested inside a single auction house: RM's Monaco 2024 catalogue says 610, its Monterey 2026 catalogue says approximately 631 of which roughly 300 were European carburetted. Only the 25th Anniversary is uncontested here, at 657 cars over roughly twenty months.",
 "notableTrims": [
  {
   "name": "LP400 'Periscopio' (1974-1978)",
   "note": "The narrow-body original on Michelin XWX 205/70 and 215/70 VR14 and 7.5J/9.5J magnesium wheels. The recessed roof channel gave a periscopic view rearwards, a direct answer to the car's near-total lack of three-quarter vision. The Countach Register counts 150 cars with the feature; RM Sotheby's and classic.com say 157. Deliveries ran December 1974 to February 1978."
  },
  {
   "name": "LP400 S Series I (1978-1979)",
   "note": "Fifty cars from chassis 1121001, the Geneva show car of March 1978. Pirelli P7 tyres on Campagnolo wheels widened to 8.5in front and 12in rear, thicker anti-roll bars, reversed lower rear wishbones and trailing arms. The riveted arch extensions and the optional rear wing, not offered at launch, date from here."
  },
  {
   "name": "LP400 S Series II and III (1979-1982)",
   "note": "Series II ran 105 cars from chassis 1121102 on concave wheels, the last 81 in aluminium rather than magnesium. Series III added 82 cars from June 1981 to spring 1982 and closed out the four-litre S; Supercar Nostalgia quotes 353 bhp for Series III export specification against 375 bhp elsewhere."
  },
  {
   "name": "LP500 S / 5000 S (1982-1985)",
   "note": "The V12 enlarged to 4,754 cc for mid-range flexibility rather than peak output, still quoted at 375 PS. Badged 5000 S in some markets, which is the root of a lasting confusion with the later 5000 QV. It holds the lowest recorded classic.com sale for the model line as of August 2026."
  },
  {
   "name": "5000 QV Quattrovalvole 'Downdraft' (1985-1988)",
   "note": "Four valves per cylinder on 5,167 cc. European cars moved from sidedraught to downdraught Weber carburettors, which required the power dome on the engine cover and gave the variant its nickname; RM Sotheby's puts the European car at 455 hp, about 87 more than the European 5000 S. US cars ran Bosch injection at a quoted 420 hp, with Wikipedia counting 66 injected examples."
  },
  {
   "name": "25th Anniversary (1988-1990)",
   "note": "657 cars in roughly twenty months, restyled in-house by Horacio Pagani with a raised nose, strake-cooled front bumper, revised tail and vertical radiator intake slats, and with chassis development by 1977 World Rally champion Sandro Munari. Electric windows, added sound deadening and power-reclining seats made it the only genuinely habitable Countach. Superseded by the Diablo."
  }
 ],
 "specs": {
  "layout": "Longitudinally mid-mounted engine ahead of the rear axle, gearbox forward between the seats, rear-wheel drive (LP = Longitudinale Posteriore)",
  "chassis": "Full spaceframe of welded round-section steel tubing in 30 mm, 25 mm and 15 mm diameters at 1 mm wall thickness, approximately 90 kg bare; floors, bulkheads and spare-wheel well bonded to the frame",
  "body": "Aluminium panels over the spaceframe with a steel roof and headlight pods; glassfibre engine cover and, from LP400 S, riveted wheel-arch extensions",
  "engine": "60-degree V12 laid out by Giotto Bizzarrini in 1963 and adapted for this installation by Paolo Stanzani; 3,929 cc (type L 406), then 4,754 cc, then 5,167 cc",
  "valvetrain": "Twin overhead camshafts per bank; two valves per cylinder to 1985, four on the Quattrovalvole",
  "bore_stroke": "82 mm x 62 mm on the 3,929 cc unit",
  "compression": "10.5:1 on the LP400 as tested by Motor Sport in 1977",
  "fuel_system": "Six Weber carburettors, sidedraught then downdraught on European Quattrovalvole cars; Bosch fuel injection on US-specification QV",
  "power": "375 PS (370 hp) at 8,000 rpm claimed for the LP400; LP400 S variously quoted at 375, 353, 352, 350 and 345 - see claims; 375 PS for the LP500 S; 455 PS (449 hp) carburetted and 426 PS (420 hp) injected for the QV. All manufacturer or catalogue claims",
  "torque": "267 lb ft at 5,500 rpm for the LP400 per Motor Sport; 269 lb ft at 5,000 rpm quoted for the LP400 S by Supercar Nostalgia",
  "transmission": "Five-speed manual with gated shift, gearbox longitudinal between the seats, drive taken rearwards through the sump",
  "suspension": "Double wishbones with coil springs and telescopic dampers front; upper lateral links, reversed lower wishbones and trailing arms with twinned spring-damper units rear; Koni dampers; rose joints throughout",
  "brakes": "10.51-inch ventilated discs with Girling aluminium calipers on the LP400",
  "wheels_tyres": "LP400: 7.5J front and 9.5J rear magnesium on Michelin XWX 205/70VR14 and 215/70VR14. LP400 S: Campagnolo 8.5in and 12in on Pirelli P7. Later cars ran 345/35R15 at the rear",
  "weight": "1,300.5 kg (2,867 lb) LP400, 1,351 kg (2,978 lb) LP400 S and 1,488 kg (3,280 lb) LP5000 QV per Wikipedia. Weight distribution 43 per cent front, 57 per cent rear as measured by Motor Sport",
  "acceleration": "0-60 mph recorded between 5.6 and 6.8 seconds for the LP400 and between 4.2 and 5.2 seconds for the 5000 QV across period tests collated by Autozine; RM Sotheby's quotes 4.8 seconds to 100 km/h for a European QV",
  "top_speed_claimed": "192 mph at 8,000 rpm projected for the LP400; approximately 300 km/h for the 25th Anniversary. Catalogue and manufacturer claims, not measured figures",
  "top_speed_tested": "Contested. Road & Track saw 163 mph in 1976 while its own gearing data implied 186 mph; Motor Sport reported a maximum of over 180 mph in 1977 without running the car to it; Wikipedia lists 288 km/h (179 mph) for the LP400 and 295 km/h (183 mph) for the 25th Anniversary; Autozine cites an Italian Ministry of Transportation run at Nardo giving 181.6 mph for the 5000 QV"
 },
 "summary": "The Lamborghini Countach ran from 1974 to 1990 and set the shape of the mid-engined supercar for a generation. Bertone showed the LP500 prototype at Geneva in 1971; the production LP400 that followed three years later kept the wedge and the forward-hinged doors but was rebuilt underneath around a full welded steel spaceframe carrying a 3,929 cc V12 laid out by Giotto Bizzarrini in 1963 and adapted by Paolo Stanzani. The car grew steadily wider, heavier and more powerful: the LP400 S of 1978 brought Pirelli P7 tyres and riveted arch extensions, the LP500 S of 1982 a 4,754 cc engine, the 5000 QV of 1985 four valves per cylinder and 5,167 cc, and the 25th Anniversary of 1988 a Horacio Pagani restyle and the only genuinely habitable cabin of the run. Total production is stated as either 1,999 or 1,983 depending on whose count is followed, and the per-variant figures are contested in the same way. The market splits sharply between the early narrow-body cars and everything after.",
 "history": "## The Show Car and the Production Car\nLamborghini's own heritage account places the Countach's first public appearance as a concept in 1971 and the start of series production in 1974, with a sixteen-year run to follow. The prototype and the production car shared a silhouette and very little else. Wikipedia's technical summary gives the LP500 prototype 1,130 kg on a partial spaceframe of sheet steel and square-section tubing, 401 cm long; the production car went to 414 cm on a full spaceframe of welded round-section steel tubing in 30 mm, 25 mm and 15 mm diameters, every tube of 1 mm wall thickness, the bare frame weighing about 90 kg. The engine was not new either: Lamborghini credits the 60-degree V12 to Giotto Bizzarrini in 1963, adapted for this installation by Paolo Stanzani, with the gearbox placed longitudinally between the seats and drive taken back through the sump.\n\n## The LP400 and the Periscopio Roof\nThe first production cars used a recessed channel in the roof to give a periscopic view rearwards, a direct admission that the car had almost no three-quarter vision. The Countach Register, which documents cars individually, records deliveries of periscope-roof cars from December 1974 to February 1978. Motor Sport tested one in July 1977 at three weeks and 1,700 km old, listing 375 bhp DIN at 8,000 rpm, 10.5:1 compression, 267 lb ft at 5,500 rpm, 43/57 weight distribution and a list price of £29,950. Clive Richardson found the steering 'kart-like in its directness and precision' and the boot genuinely usable, and was blunt about the rest: brake fade on road and circuit, a spongy pedal, tail break-away at modest speeds, first and reverse hard to select from rest, carpets already curling at the edges on a new car.\n\n## Wider Every Time\nThe LP400 S arrived at Geneva in March 1978 on Pirelli P7 tyres and Campagnolo wheels widened to 8.5 inches front and 12 inches rear, with thicker anti-roll bars and reversed lower wishbones at the rear. It came in three series — 50 cars from chassis 1121001, then 105 from 1121102, then 82 from June 1981 — and brought the riveted arch extensions and the optional rear wing that most people now picture when they picture a Countach. The Walter Wolf cars, engineered through Dallara, sat behind much of that development. In 1982 the V12 went to 4,754 cc for the LP500 S, badged 5000 S in some markets and a lasting source of confusion with what came next.\n\n## Quattrovalvole and the Downdraught\nThe 5000 QV of 1985 took the engine to 5,167 cc with four valves per cylinder. European cars moved from sidedraught to downdraught Weber carburettors, which required the power dome on the engine cover and, by RM Sotheby's account, lifted output to 455 hp, roughly 87 more than the European 5000 S. That change is the origin of the 'Downdraft' shorthand. US cars ran Bosch injection at a quoted 420 hp. The QV is the variant most often described as the one to drive rather than the one to look at.\n\n## Pagani, the Anniversary and the End\nFor the marque's silver jubilee Lamborghini set Horacio Pagani, then working in-house, to restyling the car. The 25th Anniversary of 1988 raised the nose, added strakes to the front bumper, reworked the tail and set vertical slats over the radiator intakes, while 1977 World Rally champion Sandro Munari developed the chassis. Electric windows, sound deadening and power-reclining seats made it the only Countach that could be called accommodating. It ran roughly twenty months to 657 cars and was replaced by the Diablo in 1990. Lamborghini notes that the car was entered in the Library of Congress as historically significant to American culture, which is a fair measure of how far the shape travelled beyond the people who could buy one.",
 "marketNotes": "As of August 2026, classic.com records an average sale price of $665,963 across the Countach model line and a lowest recorded sale of $257,600, for a 1982 5000 S in September 2021. Its per-variant benchmarks as of the same date read LP400 $891,662, LP500 S / 5000 S $655,913, LP5000 QV $696,927 and 25th Anniversary $602,837. One inconsistency is worth flagging rather than smoothing: classic.com's model-line table gives the LP400 S a benchmark of $1,032,715 while its dedicated LP400 S page, read the same day, gives $676,923 with an average sale of $617,364 and a lowest recorded sale of $432,500 in November 2021. Neither page reconciles the two. The LP400 page as of August 2026 shows a falling trend, an average of $878,007, a low of $714,444 in July 2024 and a high of $885,000 in January 2026. The 25th Anniversary page shows a rising trend, an average of $578,889, a high of $938,000 in July 2026 and a low of $260,000 in March 2022. The Classic Valuer, tracking 104 sold cars since 2020, gives the 25th Anniversary a median of £430,989 across a £172,864 to £960,500 spread at a 75 per cent sell-through rate. Fetched auction evidence as of August 2026: RM Sotheby's sold LP400 Periscopio chassis 1120142 for €820,625 at Paris 2025, failed to sell chassis 1120172 against a $1,100,000 to $1,400,000 estimate at Miami 2024, sold a European 5000 QV for €455,000 at Monaco 2024, and at Monterey in August 2026 sold a restored 1985 QV Downdraft for $1,325,000 and a 1,532 km 25th Anniversary for $797,000. Those are published sold prices, not hammer; buyer's premium is added on top of hammer.",
 "whatToLookFor": "The spaceframe is the car. Floors, bulkheads and the spare-wheel well are bonded to it, so corrosion in the steel tubes and evidence of past accident damage are the first things an inspection should settle, and the hardest to put right afterwards. Body materials vary across one car — aluminium panels, a steel roof and headlight pods, glassfibre engine cover and, from LP400 S, glassfibre arch extensions — and the aluminium corrodes readily where it meets the glassfibre. Original paint shows the weave of the glassfibre through it, which is a useful check on whether a car has been resprayed. Establish the variant precisely and check it against the paperwork: periscope roof and narrow body on an LP400, arch extensions and P7-era wheels on an S, the power dome on a European downdraught QV against Bosch injection on a US car. That last distinction moves real money as of August 2026. Rose joints wear quickly and take the handling with them, so listen for noise from the rear and have them assessed rather than assumed. Front tie-rods are easily bent by jacking in the wrong place and stub axles have been known to fracture, though replacements exist. Ask when the clutch was last changed, because the answer sets the size of the next bill, and when the valve clearances were last set; the interval is quoted at 15,000 miles and the job is labour-heavy. Check that the air conditioning works, since it rarely does. Match chassis and engine numbers against the Countach Register, which documents cars individually and is the closest thing to an independent census.",
 "commonProblems": "The V12 is durable when serviced and ruinous when not. Magneto puts an engine rebuild at £15,000 and notes that a full oil change takes sixteen litres, which is also why the car takes so long to warm through. Faulty Magneti Marelli electronic ignition is described as a common fault, as are oil leaks from the feed pipes running between the front-mounted radiator and the engine; on four-litre cars the oil cooler pipes perish along their run down the chassis and have to be replaced in length. Valve clearance adjustment falls due every 15,000 miles. The gearbox is noisy by design and awkward into second when cold; genuine bearing wear announces itself as noise beyond that. Clutch replacement requires the engine out. Rose joints throughout the suspension wear quickly and produce wayward handling, and the rear brakes and handbrake are prone to seizing. The brakes need a firm pedal even in health, and Motor Sport recorded fade and a spongy, feel-less pedal on a new car in 1977. Air conditioning was temperamental when new and is frequently inoperative now. Steel roof and headlight pods rust, aluminium panels corrode where glassfibre meets them, and trim is the one area where specialist support runs out — Classic & Sports Car states plainly that trim parts remain unavailable.",
 "valueTrajectory": "The Countach market is not one market. As of August 2026 classic.com's LP400 benchmark of $891,662 is on a falling trend while the 25th Anniversary benchmark of $602,837 and the LP400 S benchmark of $676,923 are both rising, which has narrowed the gap between the earliest and latest cars rather than widened it. That is a change of direction from guidance published earlier in the cycle: Classic & Sports Car's buyer's guide gave LP400s at £700,000 to £900,000-plus against £250,000 to £400,000 for a 25th Anniversary, and Magneto's condition table for a 1985 LP500 S ran from £219,000 fair to £337,000 concours. Both predate the August 2026 readings and are historical markers rather than current guidance. The strongest recent evidence sits with the Quattrovalvole: a restored European Downdraft made $1,325,000 at RM Sotheby's Monterey in August 2026 against a classic.com QV benchmark of $696,927, which suggests the top of that variant has separated from its own average. Against that, an LP400 Periscopio failed to sell at Miami in 2024 on a $1,100,000 to $1,400,000 estimate. Condition, documented chassis identity and correct variant specification account for most of the spread.",
 "overallConfidence": "high",
 "sources": [
  {
   "ref": "lamborghini-heritage",
   "title": "Countach — Lamborghini History",
   "url": "https://www.lamborghini.com/en-en/history/countach",
   "publisher": "Automobili Lamborghini S.p.A.",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Lamborghini's own record: concept 1971, production from 1974, sixteen-year run, 1,999 units produced. 60-degree DOHC V12 designed 1963 by Giotto Bizzarrini and adapted by Paolo Stanzani; 4 to 4.8 to 5.2 litres; LP-400 375 CV, 400 S 345 CV, Quattrovalvole and 25th Anniversary 455 CV; Bertone styling; Library of Congress entry."
  },
  {
   "ref": "countach-register-lp400",
   "title": "LP400 — the Countach Register",
   "url": "https://countach-register.com/lp400",
   "publisher": "Countach Register",
   "sourceType": "registry",
   "reliability": "high",
   "notes": "Chassis-by-chassis registry. States 'Only 150 cars were built with this unique and collectable feature' (the periscopic roof) and catalogues chassis 1120298 as 'the 149th of only 150 LP 400 Periscopio Countachs built'. Records chassis 1120042 delivered 12 December 1974 as car 21 and 1120296 delivered 13 December 1977 as car 148; delivery window December 1974 to February 1978."
  },
  {
   "ref": "countach-register-home",
   "title": "the Countach Register",
   "url": "https://countach-register.com/",
   "publisher": "Countach Register",
   "sourceType": "registry",
   "reliability": "high",
   "notes": "Registry scope: all variants from the LP500 prototype to the 25th Anniversary, describing the population only as 'almost 2000 Countach's built'. Publishes no single production total, which is itself evidence that the chassis-level count does not close cleanly."
  },
  {
   "ref": "wikipedia-countach",
   "title": "Lamborghini Countach",
   "url": "https://en.wikipedia.org/wiki/Lamborghini_Countach",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "States 1,983 total but cites LamboCARS.com for it, so it is not independent of that figure. Per-variant: LP400 157, LP400 S 50/105/82 = 237, LP500 S 321, LP5000 QV 610 of which 66 fuel-injected. Engine type L 406, 3,929 cc; spaceframe tubes 30/25/15 mm at 1 mm wall, ~90 kg; weights 1,300.5 / 1,351 / 1,488 kg; prototype 1,130 kg; 288 km/h LP400 and 295 km/h 25th Anniversary; LP400 S at 350 PS (345 hp) at 7,500 rpm."
  },
  {
   "ref": "lambocars-countach",
   "title": "Lamborghini Countach: Review, Price, Specs and Models",
   "url": "https://www.lambocars.com/lamborghini-models-hub/lamborghini-countach/",
   "publisher": "LamboCARS",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Gives 1,983 total and is the figure Wikipedia cites. Internally inconsistent per variant: narrative text gives LP400 150, LP400 S 235 and LP500 S 323 while its specification tables give 157, 237 and 321. Agrees on LP5000 QV 610 and 25th Anniversario 657."
  },
  {
   "ref": "lambocars-lp400s",
   "title": "Lamborghini Countach LP400 S Guide & History",
   "url": "https://www.lambocars.com/countach-lp400-s/",
   "publisher": "LamboCARS",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Quotes 352 bhp for standard LP400 S cars while noting some retained the 375 bhp LP400 engine and US imports fell to roughly 325 hp on emissions equipment. Rear tyres 345 mm on 12-inch rims; first 24 cars on magnesium wheels, later aluminium; wheel design simplified after 1981; rear wing not offered at launch, end plates added later."
  },
  {
   "ref": "classic-countach",
   "title": "Lamborghini Countach Market",
   "url": "https://www.classic.com/m/lamborghini/countach/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Model-line data as of August 2026: average sale $665,963, lowest recorded $257,600 for a 1982 5000 S in September 2021. Benchmarks LP400 $891,662, LP400 S $1,032,715, LP500 S/LP5000 S $655,913, LP5000 QV $696,927, 25th Anniversary $602,837. The LP400 S figure conflicts with the same publisher's LP400 S page."
  },
  {
   "ref": "classic-lp400",
   "title": "Lamborghini Countach LP400 Market",
   "url": "https://www.classic.com/m/lamborghini/countach/lp400/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "LP400 data as of August 2026: benchmark $891,662 on a falling trend, average $878,007, lowest $714,444 (1977 car, 11 July 2024), highest $885,000 (1977 car, 23 January 2026), none currently offered. States 157 examples produced 1974-1978."
  },
  {
   "ref": "classic-lp400s",
   "title": "Lamborghini Countach LP400 S Market",
   "url": "https://www.classic.com/m/lamborghini/countach/lp400-s/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "LP400 S data as of August 2026: benchmark $676,923 on a rising trend, average $617,364, lowest $432,500 (1981 car, 19 November 2021). States 237 built 1978-1982. Benchmark conflicts with the $1,032,715 shown for the same variant on the publisher's model-line page."
  },
  {
   "ref": "classic-25th",
   "title": "Lamborghini Countach 25th Anniversary Edition Market",
   "url": "https://www.classic.com/m/lamborghini/countach/25th-anniversary-edition/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "25th Anniversary data as of August 2026: benchmark $602,837 on a rising trend, average $578,889, highest $938,000 on 31 July 2026, lowest $260,000 on 6 March 2022. States 657 units built."
  },
  {
   "ref": "classicvaluer-25th",
   "title": "Price Guide: Lamborghini Countach 25th Anniversary",
   "url": "https://www.theclassicvaluer.com/cars/lamborghini/countach-25th-anniversary",
   "publisher": "The Classic Valuer",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "Aggregated auction record as of August 2026: 104 cars sold since 2020, 75 per cent sell-through, median £430,989, highest £960,500, lowest £172,864. Second market publisher alongside classic.com, sterling-denominated and auction-only."
  },
  {
   "ref": "rm-pa25-periscopio",
   "title": "1975 Lamborghini Countach LP400 'Periscopio' by Bertone, Paris 2025",
   "url": "https://rmsothebys.com/auctions/pa25/lots/r0025-1975-lamborghini-countach-lp400-periscopio-by-bertone/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold €820,625, Paris 2025, Lot 244. Chassis 1120142, sold new to a German owner 6 November 1975, later Florida then Sweden. Catalogue states 'One of only 157 examples of the LP400 Periscopio model produced' — directly contradicting the Countach Register's 150. Quotes 370 hp and 309 km/h."
  },
  {
   "ref": "rm-mi24-periscopio",
   "title": "1976 Lamborghini Countach LP400 'Periscopio' by Bertone, Miami 2024",
   "url": "https://rmsothebys.com/auctions/mi24/lots/r0062-1976-lamborghini-countach-lp400-periscopio-by-bertone/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Not sold at Miami 2024, Lot 143, against a $1,100,000-$1,400,000 estimate. Chassis and engine 1120172, matching numbers, described as 'the 86th first-generation LP 400 Periscopio produced', completed 22 December 1975, delivered to Canada January 1976."
  },
  {
   "ref": "rm-mo26-qv",
   "title": "1985 Lamborghini Countach LP5000 QV 'Downdraft' by Bertone, The Monterey Auction 2026",
   "url": "https://rmsothebys.com/auctions/mo26/lots/r0039-1985-lamborghini-countach-lp5000-qv-downdraft-by-bertone/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold $1,325,000, Monterey August 2026, Lot 364. Chassis ZA9C005A0FLA12877, engine 1080, matching numbers, 33,010 km, four-year restoration completed mid-2023. States approximately 631 LP5000 QVs built through mid-1988, roughly 300 European carburetted — conflicting with the 610 stated elsewhere. Explains the sidedraught-to-downdraught change, the power dome and 455 hp, about 87 more than the European 5000 S."
  },
  {
   "ref": "rm-mc24-qv",
   "title": "1988 Lamborghini Countach 5000 Quattrovalvole by Bertone, Monaco 2024",
   "url": "https://rmsothebys.com/auctions/mc24/lots/r0006-1988-lamborghini-countach-5000-quattrovalvole-by-bertone/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold €455,000, Monaco 2024, Lot 109. Chassis ZA9C005A0JLA12395, delivered Mannheim 7 July 1988, 40,473 km. States 'Just 610 examples were made before the 5000 QV made way for the Countach 25th Anniversary Edition in 1988' — conflicting with the same house's Monterey 2026 figure of ~631. Quotes 449 hp, six Weber carburettors, 0-100 km/h in 4.8 seconds."
  },
  {
   "ref": "rm-mo26-25th",
   "title": "1990 Lamborghini Countach 25th Anniversary Edition by Bertone, The Monterey Auction 2026",
   "url": "https://rmsothebys.com/auctions/mo26/lots/r0121-1990-lamborghini-countach-25th-anniversary-edition-by-bertone/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold $797,000, Monterey August 2026, Lot 363. Chassis ZA9CA05A3LLA12666, built May 1989, 1,532 km. States 657 examples over roughly twenty months; Pagani restyle with raised nose, strake-cooled bumper, revised tail and vertical radiator intake slats; chassis development by Sandro Munari; approximately 420 hp and around 300 km/h; electric windows, added sound deadening, power-reclining seats."
  },
  {
   "ref": "motorsport-1977",
   "title": "The Lamborghini Countach — Motor Sport, December 1977",
   "url": "https://www.motorsportmagazine.com/archive/article/december-1977/69/the-lamborghini-countach/",
   "publisher": "Motor Sport",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Period road test by Clive Richardson, car driven July 1977 at three weeks and 1,700 km old. Establishes 3,929 cc, 82 x 62 mm, 10.5:1, 375 bhp DIN at 8,000 rpm, 267 lb ft at 5,500 rpm, 43/57 weight distribution, 10.51in ventilated discs with Girling alloy calipers, 7.5J/9.5J magnesium wheels on Michelin XWX, £29,950 UK list. Faults recorded: brake fade on road and circuit, spongy feel-less pedal, tail break-away at modest speeds, first and reverse hard from rest, curling carpets, noise above 80 mph. Quotes over 180 mph without running the car to it."
  },
  {
   "ref": "curbside-rt-1976",
   "title": "Road & Track Vintage Road Test: 1976 Lamborghini Countach",
   "url": "https://www.curbsideclassic.com/vintage-reviews/road-track-vintage-road-test-1976-lamborghini-countach-fastest-car-weve-ever-tested/",
   "publisher": "Curbside Classic",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Reproduces and analyses the 1976 Road & Track test. R&T observed a brief 7,000 rpm equating to 163 mph while its own 23.3 mph/1000 rpm fifth-gear data calculates to 186 mph, against a projected 192 mph at 8,000 rpm. Used only to establish that the LP400's top speed was never cleanly measured in period."
  },
  {
   "ref": "classicandsportscar-guide",
   "title": "Lamborghini Countach buyer's guide: what to pay and what to look for",
   "url": "https://www.classicandsportscar.com/features/buyers-guide-lamborghini-countach",
   "publisher": "Classic & Sports Car",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Ownership guide. States approximately 2,000 cars built 1974-1990 with 238 in right-hand drive. Faults: spaceframe tube corrosion with floors, bulkheads and spare-wheel well bonded to it; rose joints wearing quickly; rear brakes and handbrake seizing; noisy gearbox as normal; clutch replacement requiring engine removal; four-litre oil cooler pipes perishing along the chassis; temperamental air conditioning; trim parts unavailable. Price guidance: LP400 £700,000-£900,000+, LP400 S £450,000-£650,000, QV £400,000-£600,000, 25th Anniversary £250,000-£400,000."
  },
  {
   "ref": "magneto-guide",
   "title": "1971-1990 Lamborghini Countach buying guide",
   "url": "https://www.magnetomagazine.com/articles/1971-1990-lamboghini-countach-buying-guide-from-magneto-magazine/",
   "publisher": "Magneto",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Independent corroboration of the 1,999 total. Faults: Magneti Marelli electronic ignition failures described as common; valve clearances every 15,000 miles; oil leaks from radiator-to-engine feed pipes; second gear difficult when cold; rose joint failure; front tie-rods bent by improper jacking; stub axle fracture; spaceframe rust; aluminium corrosion where glassfibre extensions are fitted; original paint showing glassfibre weave; engine rebuild £15,000; 16 litres of oil per change. Condition table for a 1985 LP500 S: fair £219,000, good £233,000, excellent £287,000, concours £337,000."
  },
  {
   "ref": "supercarnostalgia-lp400s",
   "title": "Lamborghini Countach LP400 S Guide",
   "url": "https://supercarnostalgia.com/blog/lamborghini-countach-lp400-s",
   "publisher": "Supercar Nostalgia",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Series-level LP400 S detail: Series 1 50 cars from chassis 1121001, Geneva March 1978; Series 2 105 cars from chassis 1121102, last 81 on aluminium rather than magnesium wheels; Series 3 82 cars June 1981 to spring 1982; total 237. Campagnolo wheels 8.5in and 12in on Pirelli P7, up from 7.5in and 9.5in; thicker anti-roll bars, reversed lower rear wishbones and trailing arms, Koni dampers. 375 bhp at 8,000 rpm and 269 lb ft at 5,000 rpm, Series 3 export cars 353 bhp. Walter Wolf cars 1120202 and 1121001 developed via Dallara."
  },
  {
   "ref": "autozine-countach",
   "title": "Lamborghini Countach — performance data",
   "url": "https://www.autozine.org/countach/countach_7.htm",
   "publisher": "Autozine",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Collates period independent test figures: LP400 0-60 mph 5.6-6.8 sec, quarter mile 14.1-14.4 sec; LP400 S 5.9 sec; LP500 S 4.8-5.6 sec at 155-164 mph; 5000 QV 4.2-5.2 sec with top speeds recorded between 166 and 190 mph. Identifies an Italian Ministry of Transportation run at Nardo giving 181.6 mph for the 5000 QV as the most credible, attributing the spread to engine run-in, build tolerance and test method."
  }
 ],
 "claims": [
  {
   "section": "production",
   "claimText": "Total Countach production between 1974 and 1990 is stated as either 1,999 cars or 1,983 cars depending on the source, and no single figure is asserted here.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "lamborghini-heritage",
    "magneto-guide",
    "wikipedia-countach",
    "lambocars-countach",
    "countach-register-home",
    "classicandsportscar-guide"
   ],
   "conflictNote": "Lamborghini's own heritage page states 1,999 units and Magneto's buying guide independently states 1,999. Wikipedia states 1,983 but cites LamboCARS.com for it, and LamboCARS states 1,983, so those two are a single source rather than two. The Countach Register declines to publish a total and describes the population only as 'almost 2000'. Classic & Sports Car says approximately 2,000. Not resolved by any source consulted here, so productionTotal is null."
  },
  {
   "section": "production",
   "claimText": "The number of LP400s built with the periscopic roof is contested: the Countach Register states 150 while RM Sotheby's and classic.com state 157.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "countach-register-lp400",
    "rm-pa25-periscopio",
    "rm-mi24-periscopio",
    "classic-lp400",
    "wikipedia-countach",
    "lambocars-countach"
   ],
   "conflictNote": "The Countach Register states 'Only 150 cars were built with this unique and collectable feature' and catalogues chassis 1120298 as 'the 149th of only 150 LP 400 Periscopio Countachs built'. RM Sotheby's Paris 2025 catalogue describes chassis 1120142 as 'One of only 157 examples of the LP400 Periscopio model produced', and classic.com's LP400 page states 157 produced 1974-1978. Wikipedia gives 157 for the LP400 without distinguishing periscope cars; LamboCARS gives 150 in its text and 157 in its table. No source consulted establishes whether 157 is a periscope-only count or an LP400 total including later non-periscope cars, so the difference is left unresolved."
  },
  {
   "section": "production",
   "claimText": "The 5000 QV production count is contested between roughly 610 and roughly 631 cars, with the higher figure attributed to approximately 300 European carburetted examples plus the remainder.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "rm-mc24-qv",
    "rm-mo26-qv",
    "wikipedia-countach",
    "lambocars-countach"
   ],
   "conflictNote": "RM Sotheby's Monaco 2024 catalogue states 'Just 610 examples were made'. The same auction house's Monterey 2026 catalogue states approximately 631 built through mid-1988, roughly 300 of them European carburetted cars. Wikipedia and LamboCARS both give 610, of which Wikipedia says 66 were fuel-injected. The discrepancy sits within one auction house's own catalogues and is not explained by either. No QV total is asserted."
  },
  {
   "section": "production",
   "claimText": "The LP400 S was built in three series — 50 cars from chassis 1121001, 105 from chassis 1121102 and 82 from June 1981 — totalling 237, although LamboCARS's narrative text gives 235.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "supercarnostalgia-lp400s",
    "wikipedia-countach",
    "classic-lp400s",
    "lambocars-countach"
   ],
   "conflictNote": "Supercar Nostalgia, Wikipedia and classic.com all give 237, and Wikipedia's series breakdown of 50, 105 and 82 sums to that. LamboCARS's narrative text gives 235 while its own specification table gives 237. The two-car difference is internal to LamboCARS and unexplained there; it is recorded rather than resolved."
  },
  {
   "section": "production",
   "claimText": "657 examples of the 25th Anniversary were built over roughly twenty months before the model was superseded by the Diablo in 1990. This is the only per-variant production figure on which every source consulted agrees.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "rm-mo26-25th",
    "classic-25th",
    "lambocars-countach"
   ]
  },
  {
   "section": "specs",
   "claimText": "The LP400 S power output is not agreed across sources, with published figures of 375 bhp at 8,000 rpm, 353 bhp for Series III export cars, 352 bhp, 350 PS (345 hp) at 7,500 rpm and 345 CV.",
   "confidence": "low",
   "status": "disputed",
   "sourceRefs": [
    "supercarnostalgia-lp400s",
    "wikipedia-countach",
    "lamborghini-heritage",
    "lambocars-lp400s"
   ],
   "conflictNote": "Supercar Nostalgia states 375 bhp at 8,000 rpm with 353 bhp for Series III export cars on smaller carburettors. Wikipedia states 350 PS (345 hp) at 7,500 rpm. Lamborghini's own heritage page states 345 CV for the 400 S. LamboCARS states 352 bhp for standard cars, notes some retained the 375 bhp LP400 engine, and puts US imports at roughly 325 hp on emissions equipment. These are not reconcilable without knowing which market and series each figure describes, and no source consulted supplies that."
  },
  {
   "section": "specs",
   "claimText": "The Countach's top speed was never cleanly measured in period and published figures diverge widely, from 163 mph observed by Road & Track in 1976 to a factory projection of 192 mph.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "curbside-rt-1976",
    "motorsport-1977",
    "wikipedia-countach",
    "autozine-countach"
   ],
   "conflictNote": "Road & Track in 1976 recorded a brief 7,000 rpm equating to 163 mph while its own fifth-gear gearing data of 23.3 mph per 1,000 rpm calculates to 186 mph, against a projected 192 mph at 8,000 rpm. Motor Sport in 1977 reported a maximum of over 180 mph without running the car to it. Wikipedia lists 288 km/h (179 mph) for the LP400 and 295 km/h (183 mph) for the 25th Anniversary. Autozine records 5000 QV results between 166 and 190 mph and identifies an Italian Ministry of Transportation run at Nardo giving 181.6 mph as the most credible. None of these is reconciled with the others."
  },
  {
   "section": "specs",
   "claimText": "The production chassis is a full spaceframe of welded round-section steel tubing in 30 mm, 25 mm and 15 mm diameters at 1 mm wall thickness, weighing approximately 90 kg bare, with floors, bulkheads and the spare-wheel well bonded to it.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-countach",
    "classicandsportscar-guide",
    "motorsport-1977"
   ]
  },
  {
   "section": "specs",
   "claimText": "The V12 was originally laid out by Giotto Bizzarrini in 1963 and adapted for the Countach installation by Paolo Stanzani, growing from 3,929 cc to 4,754 cc and finally to 5,167 cc with four valves per cylinder.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "lamborghini-heritage",
    "wikipedia-countach",
    "magneto-guide"
   ]
  },
  {
   "section": "specs",
   "claimText": "As tested by Motor Sport in July 1977, the LP400 gave 375 bhp DIN at 8,000 rpm and 267 lb ft at 5,500 rpm from 3,929 cc on an 82 mm bore and 62 mm stroke at 10.5:1 compression, with 43/57 weight distribution, 10.51-inch ventilated discs and Girling aluminium calipers, and a UK list price of £29,950.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "motorsport-1977"
   ],
   "conflictNote": null
  },
  {
   "section": "specs",
   "claimText": "European 5000 QV cars moved from sidedraught to downdraught Weber carburettors, which required the power dome on the engine cover and lifted output to a quoted 455 hp, approximately 87 more than the European 5000 S; US cars ran Bosch fuel injection at a quoted 420 to 426 hp.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "rm-mo26-qv",
    "wikipedia-countach",
    "rm-mc24-qv"
   ]
  },
  {
   "section": "history",
   "claimText": "The 25th Anniversary was restyled in-house by Horacio Pagani with a raised nose, strake-cooled front bumper, revised tail and vertical radiator intake slats, with chassis development by 1977 World Rally champion Sandro Munari, and gained electric windows, added sound deadening and power-reclining seats.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "rm-mo26-25th",
    "lambocars-countach"
   ]
  },
  {
   "section": "history",
   "claimText": "The LP400 S of March 1978 introduced Pirelli P7 tyres on Campagnolo wheels widened to 8.5 inches front and 12 inches rear, thicker anti-roll bars, reversed lower rear wishbones with trailing arms, riveted wheel-arch extensions and the rear wing, which was an option and was not available at launch.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "supercarnostalgia-lp400s",
    "lambocars-lp400s",
    "wikipedia-countach"
   ]
  },
  {
   "section": "problems",
   "claimText": "The steel spaceframe rusts and the mixed body materials corrode at their junctions: aluminium panels, a steel roof and headlight pods, and glassfibre engine cover and arch extensions, with original paint showing the glassfibre weave through it.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "magneto-guide",
    "classicandsportscar-guide"
   ]
  },
  {
   "section": "problems",
   "claimText": "Rose joints throughout the suspension wear quickly and degrade the handling, rear brakes and the handbrake are prone to seizing, clutch replacement requires engine removal, and the gearbox is noisy by design and awkward into second when cold.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classicandsportscar-guide",
    "magneto-guide",
    "motorsport-1977"
   ]
  },
  {
   "section": "problems",
   "claimText": "Recurring service items include faulty Magneti Marelli electronic ignition, oil leaks from the radiator-to-engine feed pipes, perished oil cooler pipes running the length of the chassis on four-litre cars, valve clearance adjustment every 15,000 miles, sixteen litres of oil per change and temperamental air conditioning; Magneto puts an engine rebuild at £15,000.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "magneto-guide",
    "classicandsportscar-guide"
   ]
  },
  {
   "section": "market",
   "claimText": "As of August 2026 classic.com records an average Countach sale of $665,963 and a lowest recorded sale of $257,600 for a 1982 5000 S in September 2021, with variant benchmarks of $891,662 for the LP400, $655,913 for the LP500 S / 5000 S, $696,927 for the LP5000 QV and $602,837 for the 25th Anniversary.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-countach",
    "classic-lp400",
    "classic-25th"
   ]
  },
  {
   "section": "market",
   "claimText": "classic.com's own LP400 S benchmark as of August 2026 differs between two of its pages, at $1,032,715 on the model-line table and $676,923 on the dedicated LP400 S page.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "classic-countach",
    "classic-lp400s"
   ],
   "conflictNote": "The classic.com Countach model-line page gives the LP400 S a CLASSIC.COM Market Benchmark of $1,032,715. The publisher's dedicated LP400 S market page, read the same day, gives $676,923 with an average sale of $617,364. Neither page explains the difference and no other source consulted resolves it, so both are recorded and neither is presented as the market level."
  },
  {
   "section": "market",
   "claimText": "Fetched auction results as of August 2026: RM Sotheby's sold LP400 Periscopio chassis 1120142 for €820,625 at Paris 2025 and did not sell chassis 1120172 at Miami 2024 against a $1,100,000-$1,400,000 estimate; a European 5000 QV made €455,000 at Monaco 2024; and at Monterey in August 2026 a restored 1985 QV Downdraft made $1,325,000 and a 1,532 km 25th Anniversary made $797,000. All are published sold prices, to which buyer's premium is added on top of hammer.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "rm-pa25-periscopio",
    "rm-mi24-periscopio",
    "rm-mc24-qv",
    "rm-mo26-qv",
    "rm-mo26-25th"
   ]
  },
  {
   "section": "market",
   "claimText": "The Classic Valuer, tracking 104 sold 25th Anniversary cars since 2020, reports a median of £430,989 across a £172,864 to £960,500 spread and a 75 per cent sell-through rate as of August 2026.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "classicvaluer-25th"
   ],
   "conflictNote": null
  },
  {
   "section": "summary",
   "claimText": "Approximately 238 Countaches were built in right-hand drive, out of a run Classic & Sports Car puts at approximately 2,000 cars.",
   "confidence": "low",
   "status": "unverified",
   "sourceRefs": [
    "classicandsportscar-guide"
   ],
   "conflictNote": null
  }
 ]
};
