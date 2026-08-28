/**
 * Researched model draft — Dino 246 GT and GTS (1969-1974).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedDino246 = {
 "slug": "ferrari/dino-246",
 "make": "Ferrari",
 "model": "Dino 246",
 "generation": "Dino 246 GT and GTS",
 "generationCode": "Tipo 607 (L, M and E series)",
 "trim": null,
 "yearStart": 1969,
 "yearEnd": 1974,
 "bodyStyles": [
  "2-door berlinetta (fixed-roof coupe), Pininfarina design bodied by Scaglietti in Modena",
  "2-door GTS targa with lift-out black roof panel and blanked sail panels in place of rear quarter windows, from March 1972"
 ],
 "engines": [
  "2,418 cc (quoted by some sources as 2,419.2 cc) Dino 65-degree V6, transversely mid-mounted, cast-iron block with alloy heads, twin overhead camshafts per bank, two valves per cylinder, three Weber carburettors, 9.0:1 compression, 195 PS (192 bhp) at 7,600 rpm",
  "Same engine in United States emissions specification, with an air pump and revised valve timing, rated at 175 hp",
  "Predecessor, Dino 206 GT 1967-69: 1,987 cc Tipo 135 B 65-degree V6, alloy block and head with cast-iron wet liners, 86 x 57 mm, quoted at 180 hp by Ferrari and at 160 bhp at 7,200 rpm elsewhere"
 ],
 "productionTotal": null,
 "productionNotes": "No two reference sources consulted here agree on how many 246s were built, so no single total is asserted. The L-series figure is the one point of consensus: 357 cars, built to the summer of 1970, all left-hand drive, chassis 00400 to 01116. After that the numbers separate. Wikipedia, Supercar Nostalgia and Hagerty each give 507 M-series cars to July 1971; classic.com gives 506; RM Sotheby's catalogue for chassis 01406 states that only 497 M-series cars were produced. The E-series coupe is the larger disagreement: Wikipedia and Supercar Nostalgia both state 1,431, while Hagerty states 1,623 and classic.com 1,624. That single difference cascades. The lower set gives 2,295 GT coupes and, with 1,274 GTS, a run of 3,569 cars; the higher set gives 2,487 coupes and 3,761 in total, which is the figure RM Sotheby's uses in its Monterey 2025 catalogue. Supercar Nostalgia separately prints 3,760. Motor Sport, writing in April 1989, gives 2,732 246 GTs and only 1,180 GTS, agreeing with nobody. The 1,274 figure for the GTS is the most consistently repeated number in the literature, used by Wikipedia, Supercar Nostalgia, Hagerty, classic.com and RM Sotheby's alike, but it too sits against Motor Sport's 1,180. The 206 GT predecessor is cited at 152 cars between 1967 and 1969 by Wikipedia, Supercar Nostalgia and Magneto; Ferrari's own model page says approximately 150, and RM Sotheby's says 150. Right-hand-drive volumes are quoted by Supercar Nostalgia as 62 M-series, 466 E-series coupes and 254 GTS; Classic Trader instead counts United Kingdom deliveries at 488 GT and 235 GTS, which is a different measure and cannot be read as a correction of the first. Chairs-and-flares cars are not separately totalled anywhere consulted, beyond RM Sotheby's statement that fewer than 150 GTS examples left the factory with both options.",
 "notableTrims": [
  {
   "name": "Dino 206 GT (1967-1969)",
   "note": "The predecessor, and a different car where it matters: an all-aluminium body over a 2,280 mm wheelbase, an alloy-block 1,987 cc V6, left-hand drive only, roughly 152 built. Scarcity puts it above any 246, and originality of engine and chassis numbers is scrutinised harder here than anywhere else in the line."
  },
  {
   "name": "246 GT L-series (Tipo 607 L)",
   "note": "357 cars to the summer of 1970, chassis 00400-01116, left-hand drive only, identified by centre-lock knock-off wheels. The series most sought on rarity and on the earliest specification of trim and detail."
  },
  {
   "name": "246 GT M-series (Tipo 607 M)",
   "note": "A short transitional run to July 1971, chassis 01118-02130, with five-stud wheels and Dino centre caps, a revised gearbox, ATE brakes, a smaller steering wheel and relocated door locks. Right-hand drive arrived within this series, from around October 1970. Counts range from 497 to 507."
  },
  {
   "name": "246 GT E-series (Tipo 607 E)",
   "note": "Late 1971 to 1974 and much the largest series, with the most developed specification: further gearbox revisions and upgraded Weber carburettors. Production is described as having reached three cars a day. This is where the sources disagree most sharply on volume."
  },
  {
   "name": "246 GTS (from March 1972)",
   "note": "Targa-roofed E-series car launched at Geneva, from chassis 03408, with a lift-out black roof panel, ventilation grilles in place of rear quarter windows and a reinforced structure. 1,274 is the usual figure, and it carries a consistent premium over the coupe."
  },
  {
   "name": "'Chairs and flares'",
   "note": "Two separate factory options from around chassis 4000: 365 GTB/4 Daytona-pattern seats and Group 4-style flared arches with 7.5-inch Campagnolo wheels. One surviving invoice shows them at $675 for the arches and $110 for the seats. RM Sotheby's states fewer than 150 GTS cars were built with both."
  },
  {
   "name": "United States specification",
   "note": "An air pump and revised valve timing reduced output to 175 hp. Identified by vertical amber indicators recessed into the bodywork, rectangular corner marker lights, reflectors near the plate, and the chassis number stamped on the steering column to be read through the windscreen. NHTSA records confirm a US-certified 246 GTS for 1973."
  }
 ],
 "specs": {
  "layout": "Transversely mid-mounted engine behind the cabin, rear-wheel drive",
  "chassis": "Steel semi-monocoque on a tubular structure with steel bodywork; doors and bonnet in aluminium (the 206 GT was aluminium throughout)",
  "engine": "2,418 cc Dino 65-degree V6, cast-iron block with alloy heads, chain-driven twin overhead camshafts per bank, two valves per cylinder, three Weber carburettors, Magneti Marelli Dinoplex ignition",
  "bore_stroke": "92.5 mm x 60 mm (206 GT: 86 mm x 57 mm)",
  "compression": "9.0:1",
  "power": "195 PS (192 bhp) at 7,600 rpm claimed for European specification; 175 hp for United States cars with air pump and revised timing",
  "torque": "Approximately 225 Nm (166 lb-ft) at 5,500 rpm",
  "transmission": "5-speed manual in unit with the engine and final drive, dog-leg pattern",
  "suspension": "Independent front and rear by unequal-length wishbones, coil springs, Koni dampers and anti-roll bars",
  "brakes": "Servo-assisted discs all round; ATE from the M-series",
  "wheels": "6.5-inch Cromodora alloys as standard; 7.5-inch Campagnolo with flared arches optional",
  "wheelbase": "2,340 mm, lengthened by 60 mm over the 206 GT; Wikipedia gives 2,290 mm for the 206",
  "weight": "1,080 kg dry as usually quoted; 2,380 lb for the GT and 2,426 lb for the GTS; Autocar recorded 1,219 kg in 1971",
  "acceleration": "0-60 mph in approximately 7.1 seconds per Magneto; Road & Track recorded about 7.0 seconds",
  "top_speed": "146 mph (235 km/h) claimed; Autocar reached 140 mph against a quoted 145 mph in May 1971",
  "price_new": "5,486 pounds in the United Kingdom, per Autocar's road test of May 1971"
 },
 "summary": "The Dino 246 GT and GTS were built at Maranello between 1969 and 1974 and sold under the Dino marque rather than as Ferraris. No prancing horse appeared on the nose, the wheels or the badging; Enzo Ferrari's stated position was that a car with half the cylinders of a V12 should not carry the name. The V6 existed at all because Formula Two rules of the mid-1960s required a racing engine derived from a production unit built in quantity, and Ferrari could not build 500 of anything in a year, so an agreement with Fiat produced the engine instead. The road car that followed was the 206 GT of 1967-69, an all-aluminium 2.0-litre of which roughly 152 were made. For 1969 the engine grew to 2,418 cc and swapped its aluminium block for cast iron, the wheelbase went up 60 mm, and the body changed to steel: cheaper, heavier, rust-prone, and buildable in numbers Ferrari had never previously reached. An open GTS with a lift-out targa panel followed in March 1972. Three series, L, M and E, divide the run.",
 "history": "## A Rule About Five Hundred Engines\nThe Dino V6 is a homologation artefact. Formula Two rules adopted in the mid-1960s required a racing engine derived from a production unit built in quantity, 500 of them within a defined period, and Ferrari, then building a few hundred cars a year, had no prospect of meeting that alone. An agreement signed on 1 March 1965 committed Fiat to producing the six-cylinder Dino engine in numbers sufficient for its adoption in a Ferrari single-seater; Fiat used it in its own front-engined coupe and spider from 1966-67, Ferrari transversely behind the driver. The name came from Enzo Ferrari's son Alfredo, called Dino, who died in 1956 and had argued for the six-cylinder layout. The badging followed the same logic: these cars carried Dino script and no Ferrari nomenclature anywhere.\n\n## Aluminium, and Not Many of Them\nThe 206 GT reached production in 1968, its body a Pininfarina design credited to Brovarone and Fioravanti, built by Scaglietti in Modena, in aluminium throughout. The Tipo 135 B engine displaced 1,987 cc from 86 x 57 mm, a 65-degree V6 with twin overhead camshafts per bank and an alloy block and head running cast-iron wet liners. Ferrari quotes 180 hp; specialist accounts give 160 bhp at 7,200 rpm, close to the rating Fiat used, and the two are not reconciled. Around 152 were built between 1967 and 1969, all left-hand drive, at roughly three a week; period assessments put it short of power against the Porsches it faced.\n\n## Steel and Cast Iron\nFor 1969 the car became the 246 GT. Bore and stroke went to 92.5 x 60 mm for 2,418 cc, and the aluminium block was replaced by cast iron. That was a manufacturing decision, not an engineering one: Fiat was building the enlarged engine in volume, and iron suited the numbers and the cost. In Ferrari tune it made 195 PS at 7,600 rpm. The wheelbase grew 60 mm to 2,340 mm, absorbed by a longer engine cover and a repositioned fuel filler. The body went from aluminium to steel, doors and bonnet excepted; Motor Sport put the weight penalty at nearly 400 lb. The other consequence took longer to appear: the 246 corrodes in a way the 206 does not, and rust now dominates its condition hierarchy.\n\n## L, M and E\nThe run divides into three series, Tipo 607 L, M and E. L-series cars, 357 built to the summer of 1970 in chassis 00400 to 01116, are left-hand drive only and carry centre-lock knock-off wheels. The M-series took five-stud wheels with Dino centre caps, a revised gearbox, ATE brakes and relocated door locks, and introduced right-hand drive from around October 1970, running to July 1971 in chassis 01118 to 02130. The E-series, from late 1971 to the end in 1974, is much the largest and the most developed, with further gearbox changes and upgraded Weber carburettors, and is said to have been built at three cars a day. Published counts for the M and E series differ by enough to change the model's total by nearly two hundred cars.\n\n## The Targa, the Options and the Americans\nThe 246 GTS was shown at Geneva in March 1972: the same shape with the rear quarter windows replaced by blanked sail panels carrying ventilation grilles, a reinforced structure, and a lift-out black roof panel. It exists only in E-series form, from chassis 03408; 1,274 is the figure almost every source repeats. From around chassis 4000 came the two options that define the model's upper specification: 365 GTB/4 Daytona-pattern seats and Group 4-style flared arches with 7.5-inch Campagnolo wheels, priced separately but ordered together often enough to become the shorthand 'chairs and flares'. RM Sotheby's puts the number of GTS cars built with both at fewer than 150. American cars were their own specification: an air pump and revised valve timing cutting output to 175 hp, recessed vertical amber indicators, corner markers and reflectors, and the chassis number stamped on the steering column, read through the windscreen. NHTSA's import rulings confirm a United States-certified 246 GTS for 1973.",
 "marketNotes": "As of August 2026 classic.com records a market benchmark of $400,980 for the 246 GT with an average recorded sale of $393,611 and a rising trend, against a benchmark of $620,203 and an average of $576,859 for the GTS. The open car has carried that premium consistently; Hagerty put the gap at roughly $50,000, which recent results suggest understates it. Tracked coupe results as of August 2026 run from $192,500 for a 1971 car in April 2025 to $643,000 for an 857-mile 1972 example on 14 August 2026. GTS results as of August 2026 run from $260,000 in August 2023 to a $1,106,000 figure recorded in June 2026 for a modified 'Evo 3.6' car, which is not a standard-specification comparison. Auction evidence fills in the middle. RM Sotheby's sold restored, numbers-matching L-series chassis 00908 for $434,000 at Monterey in August 2025 and an M-series car in rare Verde Germoglio for 331,250 euros at Paris in 2019. For the GTS, RM took $637,500 at Monterey in August 2026 for a late E-series car and $802,500 at Monterey in 2022 for chassis 06462, which carried both options and the invoice showing them; Gooding took $561,000 for a chairs-and-flares GTS at Amelia Island in 2015. Magneto's United Kingdom guidance places a 1971 coupe at 278,000 pounds fair to 448,000 pounds concours.",
 "whatToLookFor": "Structure before anything else. The 246 is a steel body on a steel semi-monocoque and it rusts comprehensively: sills, floorpan, front luggage compartment, wheelarches, lower doors, the rear chassis and the suspension mounting points. Hagerty singles out the centre chassis tubes and the sandwiched panels behind the rear wheels, which trap water and hide what they are doing. A visual inspection is not enough; a structural examination on a lift, by somebody who has seen a rotten one, is the difference between a car and a project. Establish which series is in front of you and confirm it agrees with the chassis number: L-series cars run 00400-01116 on knock-off centre-lock wheels, M-series 01118-02130 on five-stud wheels, and the E-series from 02132, with the GTS starting at 03408. Confirm engine and gearbox numbers against the chassis, which matters most on a 206 and on any car described as chairs-and-flares, since both options were retrofittable and both now carry money; original factory invoices, as with the 2022 RM car, are the strongest evidence a car left Maranello with them. On American cars, look for the recessed vertical amber indicators, the corner markers and the column-stamped chassis number, and treat their absence as a question rather than an answer. Ferrari Classiche certification appears on several of the strongest recent auction cars. Interiors have almost always been retrimmed, so what matters is whether the retrim is correct.",
 "commonProblems": "Corrosion is the defining fault and the most expensive to put right, because it is structural rather than cosmetic. The Magneti Marelli Dinoplex capacitive-discharge ignition is the second recurring theme: the working test is a characteristic hum from the transformer core when the key reaches the on position, and silence indicates a problem. Specialist attention is generally recommended rather than roadside diagnosis. Timing chains stretch and become noisy; catastrophic failure is rare but a slack chain is not something to run on. Worn valve guides and tired pistons show as a smoky exhaust. Oil changes at 3,000 miles and tappet adjustment at 6,000 were the factory rhythm, and cars that have not had it show it. Second gear is stiff when cold on a healthy car and frees as it warms; grinding between first and second when warm means the synchronisers have gone and the gearbox needs rebuilding. Cooling is a persistent weakness, with electric fan failures and air trapped in the system; Hagerty's guidance is that around 195 degrees is normal and 225 indicates trouble. Wiring insulation deteriorates with age, and scorching behind the ignition switch is a serious finding. Motor Sport's 1989 catalogue of period irritations, weak second-gear synchromesh, unreliable electronic ignition, fragile door handles and slow window motors, has aged well.",
 "valueTrajectory": "The Dino spent its first two decades as the cheap way into Maranello, which is precisely why so many were used hard and repaired badly. Motor Sport observed in April 1989 that a good car costing around 5,000 pounds six years earlier had multiplied at least fifteenfold, the model's first speculative move. The modern re-rating came later: Hagerty records excellent-condition 246 GTs appreciating roughly 206 per cent between 2009 and 2015, then giving back around 17 per cent from a 2017 peak before steadying. As of August 2026 classic.com shows both body styles trending upward, with the coupe benchmark at $400,980 and the GTS at $620,203. The spread within the model has widened rather than narrowed. An L-series car with matching numbers, a documented GTS, and above all a chairs-and-flares car with paperwork proving the options were fitted new now occupy a different bracket from an ordinary E-series coupe with an unclear restoration. Hagerty also notes that interest remains concentrated in older buyers, with baby boomers at 62 per cent of quotes against 37 per cent of the wider collector market, which is worth weighing against the trend line.",
 "overallConfidence": "high",
 "sources": [
  {
   "ref": "ferrari-206-gt",
   "title": "Ferrari Dino 206 GT (1967)",
   "url": "https://www.ferrari.com/en-EN/auto/dino-206-gt",
   "publisher": "Ferrari S.p.A.",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Ferrari's own record: approximately 150 built 1968-69, 1,987 cc from 86 x 57 mm, 180 hp claimed, full aluminium body, factory chassis reference 607, the Dino name for Enzo's son, and the 1967 F2 rule requiring production-based engines at no fewer than 500 units a year with Fiat building them."
  },
  {
   "ref": "ferrari-246-gt",
   "title": "Ferrari Dino 246 GT (1969)",
   "url": "https://www.ferrari.com/en-EN/auto/dino-246-gt",
   "publisher": "Ferrari S.p.A.",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Ferrari states the 246 GT is an evolution of the 206 GT with a larger V6 and a 60 mm longer wheelbase, absorbed externally by a longer engine cover and repositioned fuel cap; three series; production ended 1974."
  },
  {
   "ref": "ferrari-246-gts",
   "title": "Ferrari Dino 246 GTS (1972)",
   "url": "https://www.ferrari.com/en-EN/auto/dino-246-gts",
   "publisher": "Ferrari S.p.A.",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Ferrari's record of the open car: unveiled at the 1972 Geneva Motor Show with a removable targa top, retaining the closed car's styling."
  },
  {
   "ref": "stellantis-fiat-dino",
   "title": "Fiat Dino Spider | Stories | FCA Heritage",
   "url": "https://www.stellantisheritage.com/en-uk/heritage/stories/fiat-dino-spider",
   "publisher": "Stellantis Heritage",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "The Fiat side of the deal: at least 500 engines had to be produced quickly for F2 and Ferrari's own build rate was too slow. Gives the 1,987 cc alloy-block V6 at 160 hp at 7,500 rpm and the 1969 revision to 2,418 cc with a cast-iron block."
  },
  {
   "ref": "dinouk-history",
   "title": "DINO History",
   "url": "https://www.dinouk.com/history.html",
   "publisher": "Dino UK",
   "sourceType": "club-forum",
   "reliability": "low",
   "notes": "Club history: the 500-unit rule, the Ferrari-Fiat agreement of 1 March 1965 and its wording, the Tipo 135 B at 160 bhp DIN, Fiat production from 8 October 1966 at Rivalta, and the move of 2.4-litre production to Maranello."
  },
  {
   "ref": "wikipedia-dino",
   "title": "Dino 206 GT and 246 GT",
   "url": "https://en.wikipedia.org/wiki/Dino_206_GT_and_246_GT",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "The lower production set: 152 206 GTs, 357 L, 507 M to July 1971, 1,431 E coupes and 1,274 GTS for 2,295 GT and 3,569 total. Also 2,419.2 cc, 195 PS, 175 hp for America, 2,290 and 2,340 mm wheelbases, Brovarone and Fioravanti at Pininfarina, and the Daytona seat and Campagnolo wheel options."
  },
  {
   "ref": "supercarnostalgia-246",
   "title": "Ferrari Dino 246 GT & 246 GTS Guide",
   "url": "https://supercarnostalgia.com/blog/ferrari-dino-246-gt-gts",
   "publisher": "Supercar Nostalgia",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Series detail: L 357, VINs 00400-01116; M 507 including 62 RHD, five-stud wheels, VINs 01118-02130; E 1,431 GT including 466 RHD and 1,274 GTS including 254 RHD, VINs from 02132; total 3,760. Also 92.5 x 60 mm, the aluminium-to-cast-iron block change for cost, GTS from March 1972, and no Ferrari emblems anywhere."
  },
  {
   "ref": "supercarnostalgia-206",
   "title": "Ferrari Dino 206 GT Guide",
   "url": "https://supercarnostalgia.com/blog/ferrari-dino-206-gt",
   "publisher": "Supercar Nostalgia",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "152 built spring 1968 to August 1969 at roughly three a week, all LHD, aluminium throughout, Tipo 135 B at 1,987 cc from 86 x 57 mm with alloy block and head and cast-iron wet liners, quoted here at 160 bhp at 7,200 rpm, plus the 1967 F2 500-unit rule and the 246's cast-iron block."
  },
  {
   "ref": "hagerty-dino-guide",
   "title": "Your handy 1969-74 Dino 246 GT and GTS buyer's guide",
   "url": "https://www.hagerty.com/media/buying-and-selling/your-handy-1969-74-dino-246-gt-and-gts-buyers-guide/",
   "publisher": "Hagerty Media",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "The higher production set: L 357 (00400-01116), M 507 with RHD from October 1970 (01118-02130), E 2,897 comprising 1,623 coupes and 1,274 GTS, the GTS from chassis 03408. Also chairs and flares from around s/n 4000 as separate $680 options, US spec at 175 hp with its visual identifiers and column-stamped chassis number, the rust map, Dinoplex, cooling at 195 versus 225 degrees, 206 per cent appreciation 2009-2015, a 17 per cent decline since 2017, a GTS premium near $50,000, and buyer demographics."
  },
  {
   "ref": "magneto-dino-guide",
   "title": "1967-1974 Ferrari Dino 206 GT and 246 GT buying guide",
   "url": "https://www.magnetomagazine.com/articles/1967-1974-ferrari-dino-206-gt-and-246-gt-buying-guide-from-magneto-magazine/",
   "publisher": "Magneto",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "States the marque name was never officially used; 152 LHD 206 GTs; 206 aluminium versus 246 steel with aluminium doors and bonnets; Dinoplex, under-tensioned timing chains, valve guide and piston wear, stiff cold second gear, 3,000-mile oil changes; 192 bhp/146 mph/7.1 sec; and 1971 coupe values of 278,000 to 448,000 pounds, or $355,000-$589,000."
  },
  {
   "ref": "motorsport-1989",
   "title": "The Ferrari Dino 246 GT & GTS, April 1989",
   "url": "https://www.motorsportmagazine.com/archive/article/april-1989/75/the-ferrari-dino-246-gt-gts/",
   "publisher": "Motor Sport",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Period retrospective: the deliberate omission of the Ferrari badge; the F2 500-unit rule and Agnelli's intervention; 206 GT at 180 bhp at 8,000 rpm; the 1969 enlargement to 2,418 cc at 92.5 x 60 mm and 195 bhp at 7,600 rpm; steel bodywork adding 396 lb to 2,380 lb; 2,732 246 GTs and 1,180 GTS; and values up at least fifteenfold from about 5,000 pounds in 1983."
  },
  {
   "ref": "autocar-1971",
   "title": "500 miles in a Ferrari Dino 246 GT - 13 May 1971",
   "url": "https://www.autocar.co.uk/car-news/anything-goes/500-miles-ferrari-dino-246-gt-13-may-1971",
   "publisher": "Autocar",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Period road test: 145 mph quoted with 140 mph achieved, 195 bhp, 1,219 kg, 19 mpg, and a UK list price of 5,486 pounds, with praise for suspension travel under the large arches."
  },
  {
   "ref": "classic-trader-dino",
   "title": "The Dino 206/246 Buying Guide - The baby Ferrari that had to earn its name",
   "url": "https://www.classic-trader.com/en/magazine/dino-206-246-buying-guide",
   "publisher": "Classic Trader",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "152 LHD 206 GTs; total across all variants given as over 4,000, with 488 GT and 235 GTS delivered to the United Kingdom; the Ferrari name never officially used and the period line 'almost a Ferrari'; 178 bhp/140 mph and 192 bhp/146 mph; rust as the biggest problem and Dinoplex trouble."
  },
  {
   "ref": "classic-246-gt",
   "title": "Dino 246 GT Market",
   "url": "https://www.classic.com/m/ferrari/dino/246-gt/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Market data as of August 2026: benchmark $400,980 trending up, average sale $393,611, highest $643,000 for an 857-mile 1972 car on 14 August 2026, lowest $192,500 for a 1971 car on 28 April 2025. Also states L 357, M 506 and E 1,624 for the coupe series."
  },
  {
   "ref": "classic-246-gts",
   "title": "Dino 246 GTS (1972 to 1974)",
   "url": "https://www.classic.com/m/ferrari/dino/246-gts/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Market data as of August 2026: benchmark $620,203 trending up, average sale $576,859, lowest $260,000 in August 2023 and highest $1,106,000 in June 2026 for a modified 1972 'Evo 3.6' car. States approximately 1,274 built with the targa top."
  },
  {
   "ref": "rm-mo25-lseries",
   "title": "1970 Ferrari Dino 246 GT 'L-Series' by Scaglietti, Monterey 2025",
   "url": "https://rmsothebys.com/auctions/mo25/lots/r0021-1970-ferrari-dino-246-gt-lseries-by-scaglietti/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold $434,000 at Monterey, August 2025. Chassis 00908, numbers matching, one of just 357 L-series cars identified by centre-lock knock-off wheels. Gives 3,761 total 246s across L, M and E, following 150 206 GTs."
  },
  {
   "ref": "rm-pa19-mseries",
   "title": "1970 Ferrari Dino 246 GT by Scaglietti, Paris 2019",
   "url": "https://rmsothebys.com/auctions/pa19/lots/r0082-1970-ferrari-dino-246-gt-by-scaglietti/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold 331,250 euros at Paris 2019. Chassis 01406, Tipo 607M, described as one of only 497 M-series cars, with redesigned gearbox, improved ATE brakes, five-bolt wheels and a smaller steering wheel against the L-series."
  },
  {
   "ref": "rm-mo22-chairsflares",
   "title": "1973 Ferrari Dino 246 GTS 'Chairs & Flares' by Scaglietti, Monterey 2022",
   "url": "https://rmsothebys.com/auctions/mo22/lots/r0030-1973-ferrari-dino-246-gts-chairs-flares-by-scaglietti/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold $802,500 at Monterey 2022. Chassis 06462, US-market, numbers matching. States fewer than 150 GTS cars were built with both options against 1,274 GTS total, and reproduces the original invoice at $675 for the flared wheel wells and $110 for the Daytona seats."
  },
  {
   "ref": "rm-mo26-gts",
   "title": "1974 Ferrari Dino 246 GTS by Scaglietti, The Monterey Auction 2026",
   "url": "https://rmsothebys.com/auctions/mo26/lots/r0154-1974-ferrari-dino-246-gts-by-scaglietti",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold $637,500 at Monterey, August 2026. Chassis 08056, late E-series in the final and most developed specification with improved gearbox and upgraded Webers, air conditioning, power windows and Daytona-style seats, delivered to the United States through Chinetti-Garthwaite Imports."
  },
  {
   "ref": "gooding-am15-gts",
   "title": "1974 Ferrari Dino 246 GTS, Amelia Island 2015",
   "url": "https://www.goodingco.com/lot/1974-ferrari-dino-246-gts-5/",
   "publisher": "Gooding & Company",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold $561,000 against a $500,000-$600,000 estimate at Amelia Island 2015. Chassis 08486, among the last Dinos built, a fully optioned chairs-and-flares car with 24,000 miles and Ferrari Classiche certification."
  },
  {
   "ref": "nhtsa-vsp107",
   "title": "Federal Register, 17 March 1995: Decision that Nonconforming 1973 Ferrari Dino 246 GTS Passenger Cars Are Eligible for Importation",
   "url": "https://www.govinfo.gov/content/pkg/FR-1995-03-17/html/95-6703.htm",
   "publisher": "National Highway Traffic Safety Administration",
   "sourceType": "government",
   "reliability": "high",
   "notes": "NHTSA import eligibility decision VSP 107, confirming a United States-certified version of the 1973 Ferrari Dino 246 GTS was manufactured and that non-conforming examples are substantially similar and readily alterable to Federal motor vehicle safety standards."
  }
 ],
 "claims": [
  {
   "section": "history",
   "claimText": "The Dino V6 existed because Formula Two regulations of the mid-1960s required a racing engine derived from a production unit built in quantity, at 500 units, and Ferrari lacked the capacity to build them alone; an agreement of 1 March 1965 committed Fiat to producing the engine in sufficient numbers.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "ferrari-206-gt",
    "stellantis-fiat-dino",
    "motorsport-1989",
    "dinouk-history",
    "supercarnostalgia-206"
   ]
  },
  {
   "section": "history",
   "claimText": "The cars were sold under the Dino marque and carried no Ferrari nomenclature or badging anywhere, reflecting Enzo Ferrari's position that a car with half the cylinders of a V12 should not carry the Ferrari name; the name honours his son Alfredo, called Dino, who died in 1956.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "motorsport-1989",
    "supercarnostalgia-246",
    "magneto-dino-guide",
    "classic-trader-dino"
   ]
  },
  {
   "section": "production",
   "claimText": "Approximately 152 Dino 206 GTs were built between 1967 and 1969, all left-hand drive, on a body that was aluminium throughout - a Pininfarina design credited to Aldo Brovarone and Leonardo Fioravanti, built by Scaglietti in Modena - over a wheelbase 60 mm shorter than the 246's; Ferrari's own model page gives approximately 150.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "ferrari-206-gt",
    "wikipedia-dino",
    "supercarnostalgia-206",
    "magneto-dino-guide",
    "classic-trader-dino"
   ]
  },
  {
   "section": "specs",
   "claimText": "The 206 GT's Tipo 135 B engine displaced 1,987 cc from a bore and stroke of 86 x 57 mm, a 65-degree V6 with twin overhead camshafts per bank and an alloy block and head running cast-iron wet liners, but its quoted output is not consistent across sources.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "ferrari-206-gt",
    "supercarnostalgia-206",
    "stellantis-fiat-dino",
    "dinouk-history",
    "motorsport-1989"
   ],
   "conflictNote": "Ferrari's own page states 180 hp and Motor Sport gives 180 bhp at 8,000 rpm. Supercar Nostalgia states 160 bhp at 7,200 rpm, Dino UK states 160 bhp DIN, and Stellantis Heritage gives 160 hp at 7,500 rpm for the Fiat installation. Whether the gap reflects Ferrari and Fiat states of tune or differing measurement standards is not resolved by any source consulted here."
  },
  {
   "section": "specs",
   "claimText": "For the 246 the engine was enlarged to 2,418 cc on a bore and stroke of 92.5 x 60 mm and the aluminium block was replaced by cast iron, a change driven by production cost and volume rather than performance, with output quoted at 195 PS at 7,600 rpm; at the same time the body changed from aluminium to steel, doors and bonnet excepted, and the wheelbase was lengthened by 60 mm to 2,340 mm.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "supercarnostalgia-246",
    "motorsport-1989",
    "stellantis-fiat-dino",
    "wikipedia-dino",
    "ferrari-246-gt",
    "magneto-dino-guide"
   ]
  },
  {
   "section": "production",
   "claimText": "The 246 GT run divides into three series designated Tipo 607 L, M and E, with 357 L-series cars built to the summer of 1970 in chassis 00400 to 01116, all left-hand drive and on centre-lock knock-off wheels.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "supercarnostalgia-246",
    "hagerty-dino-guide",
    "rm-mo25-lseries",
    "classic-246-gt",
    "wikipedia-dino",
    "rm-pa19-mseries"
   ]
  },
  {
   "section": "production",
   "claimText": "The M-series ran to July 1971 in chassis 01118 to 02130 and introduced right-hand drive from around October 1970 along with five-stud wheels, a revised gearbox, ATE brakes and relocated door locks, but published counts for it differ.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "wikipedia-dino",
    "supercarnostalgia-246",
    "hagerty-dino-guide",
    "classic-246-gt",
    "rm-pa19-mseries"
   ],
   "conflictNote": "Wikipedia, Supercar Nostalgia and Hagerty each state 507 M-series cars. classic.com states 506. RM Sotheby's catalogue for chassis 01406 states only 497 were produced. The difference is not explained by any source consulted here and is not resolved."
  },
  {
   "section": "production",
   "claimText": "Total 246 GT and GTS production is stated as either about 3,569 or about 3,761 cars depending on the source, and no single figure is asserted here.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "wikipedia-dino",
    "supercarnostalgia-246",
    "hagerty-dino-guide",
    "classic-246-gt",
    "rm-mo25-lseries",
    "motorsport-1989"
   ],
   "conflictNote": "Wikipedia and Supercar Nostalgia give 1,431 E-series coupes, producing 2,295 GT and a 3,569 total; Supercar Nostalgia nonetheless prints an overall figure of 3,760. Hagerty gives 1,623 E-series coupes and classic.com 1,624, producing 2,487 GT and the 3,761 total that RM Sotheby's uses at Monterey 2025. Motor Sport in April 1989 gives 2,732 GT and 1,180 GTS, agreeing with none of them. No source consulted here resolves the discrepancy, so productionTotal is null."
  },
  {
   "section": "production",
   "claimText": "The 246 GTS was shown at Geneva in March 1972, exists only in E-series form from chassis 03408, and is almost universally given as 1,274 cars, with a lift-out black roof panel, a reinforced structure and blanked sail panels carrying ventilation grilles in place of the rear quarter windows.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "ferrari-246-gts",
    "hagerty-dino-guide",
    "supercarnostalgia-246",
    "wikipedia-dino",
    "classic-246-gts",
    "rm-mo22-chairsflares"
   ]
  },
  {
   "section": "production",
   "claimText": "The 'chairs and flares' specification comprises two separately listed factory options available from around chassis 4000, the 365 GTB/4 Daytona-pattern seats and Group 4-style flared arches with 7.5-inch Campagnolo wheels, and RM Sotheby's states that fewer than 150 GTS examples were built with both.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "hagerty-dino-guide",
    "rm-mo22-chairsflares",
    "wikipedia-dino",
    "supercarnostalgia-246",
    "gooding-am15-gts"
   ]
  },
  {
   "section": "production",
   "claimText": "United States cars were built to their own specification, rated at 175 hp with an air pump and revised valve timing, and identified by vertical amber indicators recessed into the bodywork, rectangular corner marker lights, reflectors near the plate and the chassis number stamped on the steering column to be read through the windscreen; NHTSA records confirm a United States-certified 246 GTS for 1973.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "hagerty-dino-guide",
    "wikipedia-dino",
    "nhtsa-vsp107",
    "rm-mo26-gts"
   ]
  },
  {
   "section": "problems",
   "claimText": "Corrosion is the dominant fault on the steel-bodied 246, affecting sills, floorpan, front luggage compartment, wheelarches, lower doors, rear chassis and suspension mounting points, with the centre chassis tubes and the sandwiched panels behind the rear wheels singled out as water traps.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "hagerty-dino-guide",
    "magneto-dino-guide",
    "classic-trader-dino"
   ]
  },
  {
   "section": "problems",
   "claimText": "The Magneti Marelli Dinoplex capacitive-discharge ignition is a recurring failure point, tested by listening for a characteristic hum from the transformer core when the key reaches the on position, and stretched timing chains, worn valve guides, cooling-system trouble and second-gear synchromesh wear are the other established faults.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "hagerty-dino-guide",
    "magneto-dino-guide",
    "motorsport-1989",
    "classic-trader-dino"
   ]
  },
  {
   "section": "specs",
   "claimText": "Period testing recorded a top speed of 140 mph against a quoted 145 mph, at a United Kingdom list price of 5,486 pounds in May 1971, with the factory claiming 146 mph and around 7.1 seconds to 60 mph.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "autocar-1971",
    "magneto-dino-guide"
   ]
  },
  {
   "section": "market",
   "claimText": "As of August 2026 classic.com records a market benchmark of $400,980 and an average sale of $393,611 for the 246 GT, and $620,203 and $576,859 for the 246 GTS, both trending upward.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-246-gt",
    "classic-246-gts"
   ]
  },
  {
   "section": "market",
   "claimText": "Auction results as of August 2026 place good coupes between roughly $400,000 and $650,000 and well-optioned GTS cars materially higher, with RM Sotheby's realising $434,000 for L-series chassis 00908 at Monterey in August 2025, $637,500 for late E-series GTS chassis 08056 at Monterey in August 2026 and $802,500 for chairs-and-flares GTS chassis 06462 at Monterey in 2022.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "rm-mo25-lseries",
    "rm-mo26-gts",
    "rm-mo22-chairsflares",
    "gooding-am15-gts",
    "rm-pa19-mseries"
   ]
  },
  {
   "section": "market",
   "claimText": "Hagerty records excellent-condition 246 GTs appreciating roughly 206 per cent between 2009 and 2015 and giving back about 17 per cent from a 2017 peak, and notes that baby boomers account for 62 per cent of Dino interest against 37 per cent of the wider collector market.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "hagerty-dino-guide"
   ]
  }
 ]
};
