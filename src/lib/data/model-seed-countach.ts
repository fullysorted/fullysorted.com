/**
 * Researched model draft - Lamborghini Countach (1974-1990).
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
  "2-door coupe with riveted glassfiber wheel-arch extensions and optional rear wing (LP400 S onward)"
 ],
 "engines": [
  "3,929 cc 60-degree V12, type L 406, DOHC per bank, two valves per cylinder, six Weber carburetors; 370 hp at 8,000 rpm, 267 lb ft at 5,500 rpm as measured in the Motor Sport road test",
  "3,929 cc V12 in LP400 S tune, quoted variously at 375 hp, 353 hp for Series III export cars, 352 hp, 345 hp at 7,500 rpm and 340 hp depending on source",
  "4,754 cc 60-degree V12, two valves per cylinder, quoted at 370 hp at 7,000 rpm for the LP500 S / 5000 S",
  "5,167 cc 60-degree V12 Quattrovalvole, four valves per cylinder, 449 hp at 7,000 rpm on downdraft Webers, 420 hp with Bosch injection"
 ],
 "productionTotal": null,
 "productionNotes": "No total is asserted because the credible sources do not agree and the gap is not a rounding artifact. Lamborghini's own heritage page states 1,999 units across the sixteen-year run, and Magneto's buying guide independently states 1,999. Wikipedia states 1,983, but cites LamboCARS.com for it, and LamboCARS states 1,983, so those two are one source rather than two. Classic & Sports Car says approximately 2,000, and adds that 238 cars were built in right-hand drive. Per-variant counts inherit the same problem. Wikipedia gives LP400 157, LP400 S 237 across three series (50, 105, 82), LP500 S 321 and LP5000 QV 610 of which 66 were fuel-injected. LamboCARS's narrative text gives 150, 235 and 323 for the first three while its own specification tables give 157, 237 and 321; the two-car and two-figure differences are internal to that publisher and unexplained there. The Countach Register, which documents cars individually by chassis number, states flatly that only 150 were built with the periscopic roof and catalogs one car as 'the 149th of only 150'. RM Sotheby's contradicts that directly, describing a Paris 2025 car as 'one of only 157 examples of the LP400 Periscopio model produced'. Nothing consulted establishes whether 157 is a periscope-only figure or an LP400 total including later non-periscope cars. The QV is contested inside a single auction house: RM's Monaco 2024 catalog says 610, its Monterey 2026 catalog says approximately 631 of which roughly 300 were European carbureted. Only the 25th Anniversary is uncontested here, at 657 cars over roughly twenty months.",
 "notableTrims": [
  {
   "name": "LP400 'Periscopio' (1974-1978)",
   "note": "The narrow-body original on Michelin XWX 205/70 and 215/70 VR14 and 7.5J/9.5J magnesium wheels. The recessed roof channel gave a periscopic view rearwards, a direct answer to the car's near-total lack of three-quarter vision. The Countach Register counts 150 cars with the feature; RM Sotheby's and classic.com say 157. Deliveries ran December 1974 to February 1978."
  },
  {
   "name": "LP400 S Series I (1978-1979)",
   "note": "Fifty cars from chassis 1121001, the Geneva show car of March 1978. Pirelli P7 tires on Campagnolo wheels widened to 8.5in front and 12in rear, thicker anti-roll bars, reversed lower rear wishbones and trailing arms. The riveted arch extensions and the optional rear wing, not offered at launch, date from here."
  },
  {
   "name": "LP400 S Series II and III (1979-1982)",
   "note": "Series II ran 105 cars from chassis 1121102 on concave wheels, the last 81 in aluminum rather than magnesium. Series III added 82 cars from June 1981 to spring 1982 and closed out the four-liter S; Supercar Nostalgia quotes 353 hp for Series III export specification against 375 hp elsewhere."
  },
  {
   "name": "LP500 S / 5000 S (1982-1985)",
   "note": "The V12 enlarged to 4,754 cc for mid-range flexibility rather than peak output, still quoted at 370 hp. Badged 5000 S in some markets, which is the root of a lasting confusion with the later 5000 QV. It holds the lowest recorded classic.com sale for the model line as of September 2026."
  },
  {
   "name": "5000 QV Quattrovalvole 'Downdraft' (1985-1988)",
   "note": "Four valves per cylinder on 5,167 cc. European cars moved from sidedraft to downdraft Weber carburetors, which required the power dome on the engine cover and gave the variant its nickname; RM Sotheby's puts the European car at 455 hp, about 87 more than the European 5000 S. US cars ran Bosch injection at a quoted 420 hp, with Wikipedia counting 66 injected examples."
  },
  {
   "name": "25th Anniversary (1988-1990)",
   "note": "657 cars in roughly twenty months, restyled in-house by Horacio Pagani with a raised nose, strake-cooled front bumper, revised tail and vertical radiator intake slats, and with chassis development by 1977 World Rally champion Sandro Munari. Electric windows, added sound deadening and power-reclining seats made it the only genuinely habitable Countach. Superseded by the Diablo."
  }
 ],
 "specs": {
  "layout": "Longitudinally mid-mounted engine ahead of the rear axle, gearbox forward between the seats, rear-wheel drive (LP = Longitudinale Posteriore)",
  "chassis": "Full spaceframe of welded round-section steel tubing in 30 mm, 25 mm and 15 mm diameters at 1 mm wall thickness, approximately 198 lb bare; floors, bulkheads and spare-wheel well bonded to the frame",
  "body": "Aluminum panels over the spaceframe with a steel roof and headlight pods; glassfiber engine cover and, from LP400 S, riveted wheel-arch extensions",
  "engine": "60-degree V12 laid out by Giotto Bizzarrini in 1963 and adapted for this installation by Paolo Stanzani; 3,929 cc (type L 406), then 4,754 cc, then 5,167 cc",
  "valvetrain": "Twin overhead camshafts per bank; two valves per cylinder to 1985, four on the Quattrovalvole",
  "bore_stroke": "82 mm x 62 mm on the 3,929 cc unit",
  "compression": "10.5:1 on the LP400 as tested by Motor Sport in 1977",
  "fuel_system": "Six Weber carburetors, sidedraft then downdraft on European Quattrovalvole cars; Bosch fuel injection on US-specification QV",
  "power": "370 hp at 8,000 rpm claimed for the LP400; LP400 S variously quoted at 375, 353, 352, 350 and 345 - see claims; 370 hp for the LP500 S; 449 hp carbureted and 420 hp injected for the QV. All manufacturer or catalog claims",
  "torque": "267 lb ft at 5,500 rpm for the LP400 per Motor Sport; 269 lb ft at 5,000 rpm quoted for the LP400 S by Supercar Nostalgia",
  "transmission": "Five-speed manual with gated shift, gearbox longitudinal between the seats, drive taken rearwards through the sump",
  "suspension": "Double wishbones with coil springs and telescopic dampers front; upper lateral links, reversed lower wishbones and trailing arms with twinned spring-damper units rear; Koni dampers; rose joints throughout",
  "brakes": "10.51-inch ventilated discs with Girling aluminum calipers on the LP400",
  "wheels_tires": "LP400: 7.5J front and 9.5J rear magnesium on Michelin XWX 205/70VR14 and 215/70VR14. LP400 S: Campagnolo 8.5in and 12in on Pirelli P7. Later cars ran 345/35R15 at the rear",
  "weight": "2,867 lb LP400, 2,978 lb LP400 S and 3,280 lb LP5000 QV per Wikipedia. Weight distribution 43 percent front, 57 percent rear as measured by Motor Sport",
  "acceleration": "0-60 mph recorded between 5.6 and 6.8 seconds for the LP400 and between 4.2 and 5.2 seconds for the 5000 QV across period tests collated by Autozine; RM Sotheby's quotes 4.8 seconds to 62 mph for a European QV",
  "top_speed_claimed": "192 mph at 8,000 rpm projected for the LP400; approximately 186 mph for the 25th Anniversary. Catalog and manufacturer claims, not measured figures",
  "top_speed_tested": "Contested. Road & Track saw 163 mph in 1976 while its own gearing data implied 186 mph; Motor Sport reported a maximum of over 180 mph in 1977 without running the car to it; Wikipedia lists 179 mph for the LP400 and 183 mph for the 25th Anniversary; Autozine cites an Italian Ministry of Transportation run at Nardo giving 181.6 mph for the 5000 QV"
 },
 "summary": "The Lamborghini Countach ran from 1974 to 1990 and set the shape of the mid-engined supercar for a generation. Bertone showed the LP500 prototype at Geneva in 1971; the production LP400 that followed three years later kept the wedge and the forward-hinged doors but was rebuilt underneath around a full welded steel spaceframe carrying a 3,929 cc V12 laid out by Giotto Bizzarrini in 1963 and adapted by Paolo Stanzani. The car grew steadily wider, heavier and more powerful: the LP400 S of 1978 brought Pirelli P7 tires and riveted arch extensions, the LP500 S of 1982 a 4,754 cc engine, the 5000 QV of 1985 four valves per cylinder and 5,167 cc, and the 25th Anniversary of 1988 a Horacio Pagani restyle and the only genuinely habitable cabin of the run. Total production is stated as either 1,999 or 1,983 depending on whose count is followed, and the per-variant figures are contested in the same way. The market splits sharply between the early narrow-body cars and everything after.",
 "history": "## The Show Car and the Production Car\n\nLamborghini's own heritage account places the Countach's first public appearance as a concept in 1971 and the start of series production in 1974, with a sixteen-year run to follow. The prototype and the production car shared a silhouette and very little else. Wikipedia's technical summary gives the LP500 prototype 2,491 lb on a partial spaceframe of sheet steel and square-section tubing, 401 cm long; the production car went to 414 cm on a full spaceframe of welded round-section steel tubing in 30 mm, 25 mm and 15 mm diameters, every tube of 1 mm wall thickness, the bare frame weighing about 198 lb. The engine was not new either: Lamborghini credits the 60-degree V12 to Giotto Bizzarrini in 1963, adapted for this installation by Paolo Stanzani, with the gearbox placed longitudinally between the seats and drive taken back through the sump.\n\n## The LP400 and the Periscopio Roof\n\nThe first production cars used a recessed channel in the roof to give a periscopic view rearwards, a direct admission that the car had almost no three-quarter vision. The Countach Register, which documents cars individually, records deliveries of periscope-roof cars from December 1974 to February 1978. Motor Sport tested one in July 1977 at three weeks and 1,056 miles old, listing 375 hp DIN at 8,000 rpm, 10.5:1 compression, 267 lb-ft at 5,500 rpm and 43/57 weight distribution; Sports Car Market gives the LP400's original US list price as $52,000. Clive Richardson found the steering 'kart-like in its directness and precision' and the trunk genuinely usable, and was blunt about the rest: brake fade on road and circuit, a spongy pedal, tail break-away at modest speeds, first and reverse hard to select from rest, carpets already curling at the edges on a new car.\n\n## Wider Every Time\n\nThe LP400 S arrived at Geneva in March 1978 on Pirelli P7 tires and Campagnolo wheels widened to 8.5 inches front and 12 inches rear, with thicker anti-roll bars and reversed lower wishbones at the rear. It came in three series: 50 cars from chassis 1121001, then 105 from 1121102, then 82 from June 1981, and brought the riveted arch extensions and the optional rear wing that most people now picture when they picture a Countach. The Walter Wolf cars, engineered through Dallara, sat behind much of that development. In 1982 the V12 went to 4,754 cc for the LP500 S, badged 5000 S in some markets and a lasting source of confusion with what came next.\n\n## Quattrovalvole and the Downdraft\n\nThe 5000 QV of 1985 took the engine to 5,167 cc with four valves per cylinder. European cars moved from sidedraft to downdraft Weber carburetors, which required the power dome on the engine cover and, by RM Sotheby's account, lifted output to 455 hp, roughly 87 more than the European 5000 S. That change is the origin of the 'Downdraft' shorthand. US cars ran Bosch injection at a quoted 420 hp. The QV is the variant most often described as the one to drive rather than the one to look at.\n\n## Pagani, the Anniversary and the End\n\nFor the marque's silver jubilee Lamborghini set Horacio Pagani, then working in-house, to restyling the car. The 25th Anniversary of 1988 raised the nose, added strakes to the front bumper, reworked the tail and set vertical slats over the radiator intakes, while 1977 World Rally champion Sandro Munari developed the chassis. Electric windows, sound deadening and power-reclining seats made it the only Countach that could be called accommodating. It ran roughly twenty months to 657 cars and was replaced by the Diablo in 1990. Lamborghini notes that the car was entered in the Library of Congress as historically significant to American culture, which is a fair measure of how far the shape traveled beyond the people who could buy one.",
 "marketNotes": "As of September 2026, classic.com records an average sale price of $665,963 across the Countach model line, a lowest recorded sale of $257,600 for a 1982 5000 S in September 2021 and a highest recorded sale of $2,370,000 for a 1979 LP400 S Series I in August 2026. Per-variant benchmarks as of the same date read LP400 $891,662, LP400 S $1,032,715, LP500 S / 5000 S $655,913, LP5000 QV $696,927 and 25th Anniversary $602,837, with variant averages below every benchmark: $878,007, $792,628, $616,228, $624,863 and $578,889 respectively. The LP400 is the only one of the five on a falling trend. Auction and sale evidence fetched as of September 2026: at RM Sotheby's Monterey in August 2026 a 1,120 miles original-paint LP400 S Series I, chassis 1121086, made $2,370,000, a restored 1985 QV Downdraft made $1,325,000 and a 952 miles 25th Anniversary made $797,000; classic.com also records a 25th Anniversary at $593,500 through Broad Arrow in August 2026 and an LP400 S Series II at $1,249,979 in July 2026. Earlier results still frame the early cars: RM Sotheby's failed to sell LP400 Periscopio chassis 1120172 against a $1,100,000 to $1,400,000 estimate at Miami 2024. Those are published sold prices, not hammer; buyer's premium is added on top of hammer.",
 "whatToLookFor": "The spaceframe is the car. Floors, bulkheads and the spare-wheel well are bonded to it, so corrosion in the steel tubes and evidence of past accident damage are the first things an inspection should settle, and the hardest to put right afterwards. Body materials vary across one car: aluminum panels, a steel roof and headlight pods, glassfiber engine cover and, from LP400 S, glassfiber arch extensions, and the aluminum corrodes readily where it meets the glassfiber. Original paint shows the weave of the glassfiber through it, which is a useful check on whether a car has been resprayed. Establish the variant precisely and check it against the paperwork: periscope roof and narrow body on an LP400, arch extensions and P7-era wheels on an S, the power dome on a European downdraft QV against Bosch injection on a US car. That last distinction moves real money as of September 2026. Rose joints wear quickly and take the handling with them, so listen for noise from the rear and have them assessed rather than assumed. Front tie-rods are easily bent by jacking in the wrong place and stub axles have been known to fracture, though replacements exist. Ask when the clutch was last changed, because the answer sets the size of the next bill, and when the valve clearances were last set; the interval is quoted at 15,000 miles and the job is labor-heavy. Check that the air conditioning works, since it rarely does. Match chassis and engine numbers against the Countach Register, which documents cars individually and is the closest thing to an independent census.",
 "commonProblems": "The V12 is durable when serviced and ruinous when not. A rebuild is the largest bill the car can present, and no US price for one was fetched here. Magneto notes that a full oil change takes sixteen liters, which is also why the car takes so long to warm through. Faulty Magneti Marelli electronic ignition is described as a common fault, as are oil leaks from the feed pipes running between the front-mounted radiator and the engine; on four-liter cars the oil cooler pipes perish along their run down the chassis and have to be replaced in length. Valve clearance adjustment falls due every 15,000 miles. The gearbox is noisy by design and awkward into second when cold; genuine bearing wear announces itself as noise beyond that. Clutch replacement requires the engine out. Rose joints throughout the suspension wear quickly and produce wayward handling, and the rear brakes and handbrake are prone to seizing. The brakes need a firm pedal even in health, and Motor Sport recorded fade and a spongy, feel-less pedal on a new car in 1977. Air conditioning was temperamental when new and is frequently inoperative now. Steel roof and headlight pods rust, aluminum panels corrode where glassfiber meets them, and trim is the one area where specialist support runs out, and Classic & Sports Car states plainly that trim parts remain unavailable.",
 "valueTrajectory": "The Countach market is not one market. As of September 2026 classic.com's LP400 benchmark of $891,662 is the only one of the five variant benchmarks on a falling trend, while the LP400 S at $1,032,715, the LP500 S at $655,913, the LP5000 QV at $696,927 and the 25th Anniversary at $602,837 are all rising. The gap between the earliest cars and everything after has narrowed rather than widened. Sports Car Market's auction database, read in September 2026, shows spread rather than a level: 1981 LP400 S cars between $559,965 and $731,205, a 1984 5000 S between $497,644 and $841,000, 1987 Quattrovalvoles between $516,500 and $802,500 and 25th Anniversary cars between $326,064 and $1,838,678. The strongest recent evidence sits at the top of each variant rather than in the middle: $2,370,000 for a 1,120 miles original-paint LP400 S Series I and $1,325,000 for a restored European QV Downdraft, both at RM Sotheby's Monterey in August 2026, against variant averages of $792,628 and $624,863. Against that, an LP400 Periscopio failed to sell at Miami in 2024 on a $1,100,000 to $1,400,000 estimate. Condition, documented chassis identity and correct variant specification account for most of the spread.",
 "overallConfidence": "high",
 "sources": [
  {
   "ref": "lamborghini-heritage",
   "title": "Countach, Lamborghini History",
   "url": "https://www.lamborghini.com/en-en/history/countach",
   "publisher": "Automobili Lamborghini S.p.A.",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Lamborghini's own record: concept 1971, production from 1974, sixteen-year run, 1,999 units produced. 60-degree DOHC V12 designed 1963 by Giotto Bizzarrini and adapted by Paolo Stanzani; 4 to 4.8 to 5.2 liters; LP-400 370 hp, 400 S 340 hp, Quattrovalvole and 25th Anniversary 449 hp; Bertone styling; Library of Congress entry."
  },
  {
   "ref": "countach-register-lp400",
   "title": "LP400, the Countach Register",
   "url": "https://countach-register.com/lp400",
   "publisher": "Countach Register",
   "sourceType": "registry",
   "reliability": "high",
   "notes": "Chassis-by-chassis registry. States 'Only 150 cars were built with this unique and collectable feature' (the periscopic roof) and catalogs chassis 1120298 as 'the 149th of only 150 LP 400 Periscopio Countachs built'. Records chassis 1120042 delivered 12 December 1974 as car 21 and 1120296 delivered 13 December 1977 as car 148; delivery window December 1974 to February 1978."
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
   "notes": "States 1,983 total but cites LamboCARS.com for it, so it is not independent of that figure. Per-variant: LP400 157, LP400 S 50/105/82 = 237, LP500 S 321, LP5000 QV 610 of which 66 fuel-injected. Engine type L 406, 3,929 cc; spaceframe tubes 30/25/15 mm at 1 mm wall, ~198 lb; weights 1,300.5 / 1,351 / 3,280 lb; prototype 2,491 lb; 179 mph LP400 and 183 mph 25th Anniversary; LP400 S at 345 hp at 7,500 rpm."
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
   "notes": "Quotes 352 hp for standard LP400 S cars while noting some retained the 375 hp LP400 engine and US imports fell to roughly 325 hp on emissions equipment. Rear tires 345 mm on 12-inch rims; first 24 cars on magnesium wheels, later aluminum; wheel design simplified after 1981; rear wing not offered at launch, end plates added later."
  },
  {
   "ref": "classic-countach",
   "title": "Lamborghini Countach Market",
   "url": "https://www.classic.com/m/lamborghini/countach/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Model-line data as of September 2026: average sale $665,963, lowest recorded $257,600 for a 1982 5000 S in September 2021, highest recorded $2,370,000 for a 1979 LP400 S Series I on 15 August 2026. Benchmarks LP400 $891,662, LP400 S $1,032,715, LP500 S/LP5000 S $655,913, LP5000 QV $696,927, 25th Anniversary $602,837. Also records a 25th Anniversary at $700,000 in Denver on 9 September 2026 and an LP400 S Series II at $1,249,979 in July 2026."
  },
  {
   "ref": "classic-lp400",
   "title": "Lamborghini Countach LP400 Market",
   "url": "https://www.classic.com/m/lamborghini/countach/lp400/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "LP400 data as of September 2026: benchmark $891,662 on a falling trend, average $878,007, lowest $714,444 (1977 car, 11 July 2024), highest $885,000 (1977 car, RM Sotheby's, 23 January 2026), none currently offered. States 157 examples produced 1974-1978."
  },
  {
   "ref": "classic-lp400s",
   "title": "Lamborghini Countach LP400 S Market",
   "url": "https://www.classic.com/m/lamborghini/countach/lp400-s/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "LP400 S data as of September 2026: benchmark $1,032,715 on a rising trend, average $792,628, lowest $432,500 (1981 Series II, November 2021), highest $2,370,000 (1979 Series I, August 2026). States 237 built across three series 1978-1982, Series I 50, Series II 105, Series III 82. This reading now agrees with the publisher's model-line page, which it did not in August 2026."
  },
  {
   "ref": "classic-25th",
   "title": "Lamborghini Countach 25th Anniversary Edition Market",
   "url": "https://www.classic.com/m/lamborghini/countach/25th-anniversary-edition/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "25th Anniversary data as of September 2026: benchmark $602,837 on a rising trend, average $578,889, highest $938,000 on 31 July 2026, lowest $260,000 on 6 March 2022. States 657 units built. Records a Broad Arrow sale at $593,500 on 14 August 2026 and the RM Sotheby's Monterey car at $797,000 on 15 August 2026."
  },
  {
   "ref": "classic-lp500s",
   "title": "Lamborghini Countach LP500 S / LP5000 S Market",
   "url": "https://www.classic.com/m/lamborghini/countach/lp500-s/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "LP500 S / 5000 S data as of September 2026: benchmark $655,913 on a rising trend, average $616,228, lowest recorded $257,600 (1982 car, 25 September 2021), none currently offered. Recent sales a 1983 car at $750,000 in July 2026 and a 1984 car at $841,000 in February 2026, with a 1983 car unsold at a $672,500 high bid in February 2026."
  },
  {
   "ref": "classic-qv",
   "title": "Lamborghini Countach LP5000 Quattrovalvole Market",
   "url": "https://www.classic.com/m/lamborghini/countach/lp5000-quattrovalvole/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "LP5000 QV data as of September 2026: benchmark $696,927 on a rising trend, average $624,863, lowest $275,000 (1988 car, 8 January 2022), highest $1,325,000 (1985 car, RM Sotheby\'s, 15 August 2026). States 610 built 1985-1988 and calls the QV the best selling of the Countach variants."
  },
  {
   "ref": "scm-countach-guide",
   "title": "Buyer\'s Guide to the Lamborghini Countach",
   "url": "https://www.sportscarmarket.com/kb/lamborghini-countach",
   "publisher": "Sports Car Market",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "US auction database read September 2026. Condition-graded results 2021-2026: 1975 LP400 $855,255 at condition 3+; 1981 LP400 S $559,965 to $731,205 at conditions 2 to 3+; 1984 5000 S $497,644 to $841,000; 1987 QV $516,500 to $802,500; 25th Anniversary $326,064 to $1,838,678. Puts LP400 narrow-body production at approximately 150 and total production at approximately 2,000."
  },
  {
   "ref": "scm-periscopios",
   "title": "Two Record-Setting 1975 Lamborghini Countach LP400 Periscopios",
   "url": "https://www.sportscarmarket.com/profile/two-record-setting-1975-lamborghini-countach-lp400-periscopios",
   "publisher": "Sports Car Market",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "States the LP400\'s original US list price when new as $52,000. Profiles chassis 1120066, sold by Bonhams at Greenwich on 1 June 2014 for $1,210,000 including premium, and chassis 1120070, sold by Bonhams at Goodwood on 27 June 2014 for $1,624,044 including premium. Dates the first doubling of LP400 auction prices to 2012."
  },
  {
   "ref": "rm-mo26-lp400s",
   "title": "1979 Lamborghini Countach LP400 S Series I by Bertone, The Monterey Auction 2026",
   "url": "https://rmsothebys.com/auctions/mo26/lots/r0162-1979-lamborghini-countach-lp400-s-series-i-by-bertone/",
   "publisher": "RM Sotheby\'s",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold $2,370,000, Monterey August 2026, Lot 361. Chassis 1121086, a late first-series car in rosso over nero, approximately 1,120 miles, described as retaining original factory paint, interior and tires, with 45 mm twin-choke Weber carburetors, small Stewart-Warner gauges and smooth-finish Campagnolo Bravo wheels. States one of only 50 first-series examples built. The highest Countach result recorded by classic.com as of September 2026."
  },
  {
   "ref": "rm-pa25-periscopio",
   "title": "1975 Lamborghini Countach LP400 'Periscopio' by Bertone, Paris 2025",
   "url": "https://rmsothebys.com/auctions/pa25/lots/r0025-1975-lamborghini-countach-lp400-periscopio-by-bertone/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold €820,625, Paris 2025, Lot 244. Chassis 1120142, sold new to a German owner 6 November 1975, later Florida then Sweden. Catalog states 'One of only 157 examples of the LP400 Periscopio model produced', which directly contradicts the Countach Register's 150. Quotes 370 hp and 192 mph."
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
   "notes": "Sold $1,325,000, Monterey August 2026, Lot 364. Chassis ZA9C005A0FLA12877, engine 1080, matching numbers, 20,511 miles, four-year restoration completed mid-2023. States approximately 631 LP5000 QVs built through mid-1988, roughly 300 European carbureted, which conflicts with the 610 stated elsewhere. Explains the sidedraft-to-downdraft change, the power dome and 455 hp, about 87 more than the European 5000 S."
  },
  {
   "ref": "rm-mc24-qv",
   "title": "1988 Lamborghini Countach 5000 Quattrovalvole by Bertone, Monaco 2024",
   "url": "https://rmsothebys.com/auctions/mc24/lots/r0006-1988-lamborghini-countach-5000-quattrovalvole-by-bertone/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold €455,000, Monaco 2024, Lot 109. Chassis ZA9C005A0JLA12395, delivered Mannheim 7 July 1988, 25,149 miles. States 'Just 610 examples were made before the 5000 QV made way for the Countach 25th Anniversary Edition in 1988', which conflicts with the same house's Monterey 2026 figure of ~631. Quotes 449 hp, six Weber carburetors, 0-62 mph in 4.8 seconds."
  },
  {
   "ref": "rm-mo26-25th",
   "title": "1990 Lamborghini Countach 25th Anniversary Edition by Bertone, The Monterey Auction 2026",
   "url": "https://rmsothebys.com/auctions/mo26/lots/r0121-1990-lamborghini-countach-25th-anniversary-edition-by-bertone/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold $797,000, Monterey August 2026, Lot 363. Chassis ZA9CA05A3LLA12666, built May 1989, 952 miles. States 657 examples over roughly twenty months; Pagani restyle with raised nose, strake-cooled bumper, revised tail and vertical radiator intake slats; chassis development by Sandro Munari; approximately 420 hp and around 186 mph; electric windows, added sound deadening, power-reclining seats."
  },
  {
   "ref": "motorsport-1977",
   "title": "The Lamborghini Countach, Motor Sport, December 1977",
   "url": "https://www.motorsportmagazine.com/archive/article/december-1977/69/the-lamborghini-countach/",
   "publisher": "Motor Sport",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Period road test by Clive Richardson, car driven July 1977 at three weeks and 1,056 miles old. Establishes 3,929 cc, 82 x 62 mm, 10.5:1, 375 hp DIN at 8,000 rpm, 267 lb ft at 5,500 rpm, 43/57 weight distribution, 10.51in ventilated discs with Girling alloy calipers, 7.5J/9.5J magnesium wheels on Michelin XWX, 29,950 pounds UK list. Faults recorded: brake fade on road and circuit, spongy feel-less pedal, tail break-away at modest speeds, first and reverse hard from rest, curling carpets, noise above 80 mph. Quotes over 180 mph without running the car to it."
  },
  {
   "ref": "curbside-rt-1976",
   "title": "Road & Track Vintage Road Test: 1976 Lamborghini Countach",
   "url": "https://www.curbsideclassic.com/vintage-reviews/road-track-vintage-road-test-1976-lamborghini-countach-fastest-car-weve-ever-tested/",
   "publisher": "Curbside Classic",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Reproduces and analyzes the 1976 Road & Track test. R&T observed a brief 7,000 rpm equating to 163 mph while its own 23.3 mph/1000 rpm fifth-gear data calculates to 186 mph, against a projected 192 mph at 8,000 rpm. Used only to establish that the LP400's top speed was never cleanly measured in period."
  },
  {
   "ref": "classicandsportscar-guide",
   "title": "Lamborghini Countach buyer's guide: what to pay and what to look for",
   "url": "https://www.classicandsportscar.com/features/buyers-guide-lamborghini-countach",
   "publisher": "Classic & Sports Car",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Ownership guide. States approximately 2,000 cars built 1974-1990 with 238 in right-hand drive. Faults: spaceframe tube corrosion with floors, bulkheads and spare-wheel well bonded to it; rose joints wearing quickly; rear brakes and handbrake seizing; noisy gearbox as normal; clutch replacement requiring engine removal; four-liter oil cooler pipes perishing along the chassis; temperamental air conditioning; trim parts unavailable."
  },
  {
   "ref": "magneto-guide",
   "title": "1971-1990 Lamborghini Countach buying guide",
   "url": "https://www.magnetomagazine.com/articles/1971-1990-lamboghini-countach-buying-guide-from-magneto-magazine/",
   "publisher": "Magneto",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Independent corroboration of the 1,999 total. Faults: Magneti Marelli electronic ignition failures described as common; valve clearances every 15,000 miles; oil leaks from radiator-to-engine feed pipes; second gear difficult when cold; rose joint failure; front tie-rods bent by improper jacking; stub axle fracture; spaceframe rust; aluminum corrosion where glassfiber extensions are fitted; original paint showing glassfiber weave; 16 liters of oil per change. Describes an engine rebuild as a major expense without a US figure."
  },
  {
   "ref": "supercarnostalgia-lp400s",
   "title": "Lamborghini Countach LP400 S Guide",
   "url": "https://supercarnostalgia.com/blog/lamborghini-countach-lp400-s",
   "publisher": "Supercar Nostalgia",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Series-level LP400 S detail: Series 1 50 cars from chassis 1121001, Geneva March 1978; Series 2 105 cars from chassis 1121102, last 81 on aluminum rather than magnesium wheels; Series 3 82 cars June 1981 to spring 1982; total 237. Campagnolo wheels 8.5in and 12in on Pirelli P7, up from 7.5in and 9.5in; thicker anti-roll bars, reversed lower rear wishbones and trailing arms, Koni dampers. 375 hp at 8,000 rpm and 269 lb ft at 5,000 rpm, Series 3 export cars 353 hp. Walter Wolf cars 1120202 and 1121001 developed via Dallara."
  },
  {
   "ref": "autozine-countach",
   "title": "Lamborghini Countach, performance data",
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
   "conflictNote": "The Countach Register states 'Only 150 cars were built with this unique and collectable feature' and catalogs chassis 1120298 as 'the 149th of only 150 LP 400 Periscopio Countachs built'. RM Sotheby's Paris 2025 catalog describes chassis 1120142 as 'One of only 157 examples of the LP400 Periscopio model produced', and classic.com's LP400 page states 157 produced 1974-1978. Wikipedia gives 157 for the LP400 without distinguishing periscope cars; LamboCARS gives 150 in its text and 157 in its table. No source consulted establishes whether 157 is a periscope-only count or an LP400 total including later non-periscope cars, so the difference is left unresolved."
  },
  {
   "section": "production",
   "claimText": "The 5000 QV production count is contested between roughly 610 and roughly 631 cars, with the higher figure attributed to approximately 300 European carbureted examples plus the remainder.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "rm-mc24-qv",
    "rm-mo26-qv",
    "wikipedia-countach",
    "lambocars-countach"
   ],
   "conflictNote": "RM Sotheby's Monaco 2024 catalog states 'Just 610 examples were made'. The same auction house's Monterey 2026 catalog states approximately 631 built through mid-1988, roughly 300 of them European carbureted cars. Wikipedia and LamboCARS both give 610, of which Wikipedia says 66 were fuel-injected. The discrepancy sits within one auction house's own catalogs and is not explained by either. No QV total is asserted."
  },
  {
   "section": "production",
   "claimText": "The LP400 S was built in three series, 50 cars from chassis 1121001, 105 from chassis 1121102 and 82 from June 1981, totaling 237, although LamboCARS's narrative text gives 235.",
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
   "claimText": "The LP400 S power output is not agreed across sources, with published figures of 375 hp at 8,000 rpm, 353 hp for Series III export cars, 352 hp, 345 hp at 7,500 rpm and 340 hp.",
   "confidence": "low",
   "status": "disputed",
   "sourceRefs": [
    "supercarnostalgia-lp400s",
    "wikipedia-countach",
    "lamborghini-heritage",
    "lambocars-lp400s"
   ],
   "conflictNote": "Supercar Nostalgia states 375 hp at 8,000 rpm with 353 hp for Series III export cars on smaller carburetors. Wikipedia states 345 hp at 7,500 rpm. Lamborghini's own heritage page states 340 hp for the 400 S. LamboCARS states 352 hp for standard cars, notes some retained the 375 hp LP400 engine, and puts US imports at roughly 325 hp on emissions equipment. These are not reconcilable without knowing which market and series each figure describes, and no source consulted supplies that."
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
   "conflictNote": "Road & Track in 1976 recorded a brief 7,000 rpm equating to 163 mph while its own fifth-gear gearing data of 23.3 mph per 1,000 rpm calculates to 186 mph, against a projected 192 mph at 8,000 rpm. Motor Sport in 1977 reported a maximum of over 180 mph without running the car to it. Wikipedia lists 179 mph for the LP400 and 183 mph for the 25th Anniversary. Autozine records 5000 QV results between 166 and 190 mph and identifies an Italian Ministry of Transportation run at Nardo giving 181.6 mph as the most credible. None of these is reconciled with the others."
  },
  {
   "section": "specs",
   "claimText": "The production chassis is a full spaceframe of welded round-section steel tubing in 30 mm, 25 mm and 15 mm diameters at 1 mm wall thickness, weighing approximately 198 lb bare, with floors, bulkheads and the spare-wheel well bonded to it.",
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
   "claimText": "As tested by Motor Sport in July 1977, the LP400 gave 375 hp DIN at 8,000 rpm and 267 lb ft at 5,500 rpm from 3,929 cc on an 82 mm bore and 62 mm stroke at 10.5:1 compression, with 43/57 weight distribution, 10.51-inch ventilated discs and Girling aluminum calipers, and a UK list price of 29,950 pounds.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "motorsport-1977"
   ],
   "conflictNote": null
  },
  {
   "section": "specs",
   "claimText": "European 5000 QV cars moved from sidedraft to downdraft Weber carburetors, which required the power dome on the engine cover and lifted output to a quoted 455 hp, approximately 87 more than the European 5000 S; US cars ran Bosch fuel injection at a quoted 420 to 426 hp.",
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
   "claimText": "The LP400 S of March 1978 introduced Pirelli P7 tires on Campagnolo wheels widened to 8.5 inches front and 12 inches rear, thicker anti-roll bars, reversed lower rear wishbones with trailing arms, riveted wheel-arch extensions and the rear wing, which was an option and was not available at launch.",
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
   "claimText": "The steel spaceframe rusts and the mixed body materials corrode at their junctions: aluminum panels, a steel roof and headlight pods, and glassfiber engine cover and arch extensions, with original paint showing the glassfiber weave through it.",
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
   "claimText": "Recurring service items include faulty Magneti Marelli electronic ignition, oil leaks from the radiator-to-engine feed pipes, perished oil cooler pipes running the length of the chassis on four-liter cars, valve clearance adjustment every 15,000 miles, sixteen liters of oil per change and temperamental air conditioning; an engine rebuild is described as a major expense, with no US price fetched for it here.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "magneto-guide",
    "classicandsportscar-guide"
   ]
  },
  {
   "section": "market",
   "claimText": "As of September 2026 classic.com records an average Countach sale of $665,963 and a lowest recorded sale of $257,600 for a 1982 5000 S in September 2021, with variant benchmarks of $891,662 for the LP400, $1,032,715 for the LP400 S, $655,913 for the LP500 S / 5000 S, $696,927 for the LP5000 QV and $602,837 for the 25th Anniversary, and variant averages below every one of those benchmarks.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-countach",
    "classic-lp400",
    "classic-lp400s",
    "classic-lp500s",
    "classic-qv",
    "classic-25th"
   ]
  },
  {
   "section": "market",
   "claimText": "As of September 2026 classic.com's model-line table and its dedicated LP400 S page agree on an LP400 S benchmark of $1,032,715, with an average sale of $792,628; an August 2026 reading of the same two pages did not agree.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "classic-countach",
    "classic-lp400s"
   ],
   "conflictNote": "Recorded because the two pages carried different LP400 S benchmarks when read in August 2026, $1,032,715 on the model-line table against $676,923 on the variant page. The September 2026 reading shows both at $1,032,715. The publisher does not explain the earlier difference or the change, so the current agreement is reported as a reading on a date rather than as a settled market level."
  },
  {
   "section": "market",
   "claimText": "Fetched auction results as of September 2026: at RM Sotheby's Monterey in August 2026 an original-paint LP400 S Series I made $2,370,000, a restored 1985 QV Downdraft made $1,325,000 and a 952 miles 25th Anniversary made $797,000; earlier, RM Sotheby's sold LP400 Periscopio chassis 1120142 for €820,625 at Paris 2025, did not sell chassis 1120172 at Miami 2024 against a $1,100,000-$1,400,000 estimate, and sold a European 5000 QV for €455,000 at Monaco 2024. All are published sold prices, to which buyer's premium is added on top of hammer.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "rm-mo26-lp400s",
    "rm-pa25-periscopio",
    "rm-mi24-periscopio",
    "rm-mc24-qv",
    "rm-mo26-qv",
    "rm-mo26-25th"
   ]
  },
  {
   "section": "market",
   "claimText": "Sports Car Market's US auction database, read in September 2026, records condition-graded results of $559,965 to $731,205 for 1981 LP400 S cars, $497,644 to $841,000 for a 1984 5000 S, $516,500 to $802,500 for 1987 Quattrovalvoles and $326,064 to $1,838,678 for 25th Anniversary cars, a spread wider than any single benchmark conveys.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "scm-countach-guide"
   ],
   "conflictNote": null
  },
  {
   "section": "history",
   "claimText": "The LP400 carried an original US list price of $52,000 when new, against a UK list price of 29,950 pounds recorded by Motor Sport in 1977.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "scm-periscopios",
    "motorsport-1977"
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
