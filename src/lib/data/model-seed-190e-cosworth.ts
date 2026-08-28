/**
 * Researched model draft — Mercedes-Benz 190E 2.3-16 / 2.5-16 Cosworth (1984-1993).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seed190ECosworth = {
 "slug": "mercedes-benz/190e-cosworth",
 "make": "Mercedes-Benz",
 "model": "190E Cosworth",
 "generation": "190 E 16-valve (2.3-16, 2.5-16, Evolution I, Evolution II)",
 "generationCode": "W201",
 "trim": null,
 "yearStart": 1984,
 "yearEnd": 1993,
 "bodyStyles": [
  "4-door saloon with the 16-valve aerodynamic kit: deeper front apron, sill extensions, rear apron and boot spoiler",
  "4-door saloon, Evolution bodywork: glass-fibre wheelarch extensions and revised bumpers, with an adjustable rear wing and rear-window aerofoil on the Evolution II"
 ],
 "engines": [
  "2,299 cc M102 inline-four with the Cosworth-designed alloy DOHC 16-valve head, 185 PS at 6,200 rpm on 98 RON at 10.5:1 (2.3-16, European)",
  "2,299 cc M102 in emissions-controlled form: 170 PS catalysed or 177 PS on the unleaded RUF mapping, both on 95 RON; US cars 167 hp at 5,800 rpm at 9.7:1",
  "2,463 cc M102 long-stroke inline-four with duplex timing chain, 204 PS without catalyst or 195 PS with (2.5-16 and Evolution I); AMG Power Pack raising this to 225 PS at 7,200 rpm",
  "2,463 cc M102.992 short-stroke inline-four, 97.3 x 82.8 mm at 10.5:1, AMG Power Pack standard, 235 PS at 7,200 rpm and 245 Nm at 5,000 rpm to a 7,700-7,800 rpm limit (Evolution II)"
 ],
 "productionTotal": null,
 "productionNotes": "No single figure covers the sixteen-valve W201, and the two most-quoted sets of numbers do not agree. Wikipedia's W201 article, Supercar Nostalgia and the enthusiast reference at mb190e16v.com all give 19,487 cars for the 2.3-16 and 5,743 for the 2.5-16, and mb190e16v.com breaks both down by calendar year in tables that sum to those totals. Classic & Sports Car's W201 buyer's guide states 17,037 2.3-16s built between 1983 and 1988 and 4,784 2.5-16s through 1993 - a gap of roughly 2,450 cars on the 2.3 and 960 on the 2.5, too large to be a rounding artefact and not explained by any source consulted here, so no total is asserted. The Evolution cars are firmer ground. Group A homologation required a minimum of 500 road cars and both Evolutions were built to 502: the Evolution I over roughly three months from March 1989, the Evolution II between May and July 1990. The two-car overrun is where the sources part company again. Wikipedia states 500 Evolution IIs in blauschwarz metallic with cars 501 and 502 in astral silver; mb190e16v.com calls the two silver cars test cars; Octane says one went to AMG and one was kept by Mercedes-Benz. The serialised Evolution II gearknobs run 001/500 to 500/500, consistent with a 500-car customer run plus two outside it, but RM Sotheby's catalogues describe individual cars as serial 168 and 283 'of 502'. Every Evolution was left-hand drive; Supercar Nostalgia records around 600 right-hand-drive 2.3-16s, and US sales were confined to the 1986 and 1987 model years.",
 "notableTrims": [
  {
   "name": "190 E 2.3-16 (European, 1984-1988)",
   "note": "The car the programme existed to legalise. 185 PS on 98 RON, dog-leg Getrag five-speed, ride height down 15 mm front and 12 mm rear, 7x15 in Fuchs 'Gullideckel' alloys, and at first only two colours."
  },
  {
   "name": "190 E 2.3-16 (US federalised, 1986-1987 model years)",
   "note": "Compression dropped to 9.7:1 for 167 hp at 5,800 rpm, with US headlamps, side impact bars and a wood-trimmed dashboard not offered in Europe. Two model years only, which is why the American population is small."
  },
  {
   "name": "190 E 2.3-16 'Nurburgring' (Sport-Technik, 1984)",
   "note": "Competition cars for the 12 May 1984 opening race on the new Grand Prix circuit: revised exhaust, four-piston front brakes, roll cage, Recaro seats and harnesses, Pirelli racing tyres. Senna's is in the Mercedes-Benz Museum."
  },
  {
   "name": "190 E 2.5-16 (1988-1993)",
   "note": "Longer-stroke 2,463 cc engine with a duplex timing chain answering the single-chain weakness of early 2.3s. 204 PS without catalyst, 195 PS with, plus the ASD variable limited-slip differential and two further colours."
  },
  {
   "name": "190 E 2.5-16 Evolution (Evolution I, 1989)",
   "note": "Homologation car launched at Geneva in March 1989 to answer the BMW M3 Evolution. Short-stroke bottom end for higher revs, springs and dampers around 23 per cent stiffer, 300/278 mm discs, 8x16 in wheels, 502 built, all blue-black."
  },
  {
   "name": "190 E 2.5-16 Evolution II (1990)",
   "note": "The winged car. Aerodynamics by Professor Richard Eppler of the University of Stuttgart, AMG Power Pack standard at 235 PS, 8.25x17 in wheels, ride height adjustable through 45 mm, 502 built May to July 1990 and sold out before Geneva."
  },
  {
   "name": "AMG Power Pack",
   "note": "Optional on the Evolution I at a quoted DM 18,000-19,000, giving 225 PS at 7,200 rpm; standard on the Evolution II. Its presence or absence is the biggest single specification question on an Evolution I."
  }
 ],
 "specs": {
  "layout": "Front-mounted longitudinal inline-four, rear-wheel drive",
  "chassis": "Unitary steel monocoque W201 shell, 2,665 mm wheelbase; MacPherson strut front with the coil springs mounted separately from the dampers, anti-dive geometry, front and rear anti-roll bars",
  "suspension_rear": "Five-link independent axle with anti-squat geometry and hydro-pneumatic self-levelling (SLS): levelling valve on the rear anti-roll bar, nitrogen accumulator spheres, pump and reservoir under the bonnet",
  "engine": "Mercedes M102 iron-block inline-four with a Cosworth-designed light-alloy twin-cam 16-valve head; 2,299 cc for the 2.3-16 and 2,463 cc for the 2.5-16 and Evolutions, the Evolution II using the short-stroke M102.992",
  "compression": "10.5:1 European 2.3-16; 9.7:1 US 2.3-16 and Evolution I; 10.5:1 Evolution II",
  "power": "185 PS at 6,200 rpm (2.3-16 European); 170-177 PS catalysed or unleaded; 167 hp at 5,800 rpm (US); 195-204 PS (2.5-16 and Evolution I); 225 PS with the AMG Power Pack; 235 PS at 7,200 rpm (Evolution II)",
  "torque": "2.3-16 quoted at 235-236 Nm (174 lb ft) at 4,500 rpm, though Motor Sport's 1985 road test printed 168 lb ft; Evolution II 245 Nm (181 lb ft) at 5,000 rpm",
  "transmission": "Getrag five-speed manual with a dog-leg first gear; ASD electronically controlled limited-slip differential from the 2.5-16, varying lock from 15 to 100 per cent",
  "weight": "1,350 kg quoted for the 2.3-16; Evolution I 1,320 kg; Evolution II 1,340 kg",
  "acceleration": "0-100 km/h quoted between 7.1 and 8.0 seconds for the 2.3-16 depending on source and market; Motor Sport recorded 0-60 mph in 7.5 seconds in 1985; Evolution II quoted at 6.1 seconds",
  "top_speed": "230 km/h (143 mph) claimed for the 2.3-16, 142 mph in Motor Sport's 1985 test, 146 mph per Supercar Nostalgia; 153 mph for the Evolution II",
  "brakes": "284 mm ventilated front and 258 mm solid rear discs on the 2.3-16; 300 mm front and 278 mm rear on both Evolutions, the Evolution II adding lighter alloy four-piston calipers",
  "wheels_tyres": "7x15 in Fuchs 'Gullideckel' alloys on the 2.3-16; 8x16 in on the Evolution I; 8.25x17 in six-spoke alloys on Dunlop SP Sport D40 for the Evolution II",
  "aerodynamics": "Drag coefficient given as 0.32 for the 2.3-16 kit and 0.29 for the Evolution II after Eppler's wind-tunnel work; Octane quotes the standard car at 0.33 and mb190e16v.com the Evolution II at 0.32"
 },
 "summary": "The Mercedes-Benz 190 E 2.3-16 and the 2.5-litre cars that followed it were the sixteen-valve homologation specials built on the compact W201 saloon from 1984 to 1993. The four-valve head was designed by Cosworth for a rally programme that never ran: by the time the engine was right, Audi's quattro had made a rear-drive naturally aspirated rally car pointless, and Mercedes-Benz redirected the work to the revived German Touring Car Championship, whose Group A rules required a production car underneath the racer. Three pre-production cars announced the model at Nardo in August 1983 by covering 50,000 km at an average of about 247.9 km/h, and the road car was launched at the Nurburgring on 12 May 1984 in a one-make race contested by nine of the twelve living Formula One world champions and won by a rookie named Ayrton Senna. The line ran from a 185 PS 2.3 through the 2.5-16 to the Evolution I and the winged Evolution II, each Evolution capped at 502 cars by the homologation rules that created them.",
 "history": "## A Rally Engine Without a Rally\nMercedes-Benz spent the late 1970s looking for a way back into competition and, having tried the 5.0-litre V8 450 SLC in rallying, commissioned Cosworth Engineering to build a four-cylinder capable of comfortably more than 300 hp for a works rally car. Cosworth's answer was a light-alloy twin-cam head with four valves per cylinder on the existing Mercedes M102 iron block, cast at Worcester and shipped to Germany for assembly. By the time the engine was ready the ground had moved. Audi's quattro had made a two-wheel-drive naturally aspirated rally car a waste of an entry fee, and the rally plan was abandoned. The engine was not. The revived Deutsche Tourenwagen Meisterschaft ran to Group A rules, which required a production basis, so a detuned version of the Cosworth motor went into a series-production sixteen-valve W201 to make the racing car legal.\n\n## Nardo, August 1983\nBefore the car was shown, it was proved. Between 13 and 21 August 1983 three lightly modified pre-production 2.3-16s ran continuously around the 12.6 km banked bowl at Nardo, eighteen drivers rotating six to a car, 243 pit stops, ambient temperatures between 35 and 42 degrees. They covered 50,000 km in a little over 201 hours at an average near 247.9 km/h, reverse gear removed to save four-tenths of a km/h and the final drive at 2.65:1 against the road car's 3.27:1. One car lost about three hours to a broken distributor rotor arm. The 2.3-16 was shown at Frankfurt the following month.\n\n## The Nurburgring, 12 May 1984\nTo open the Nurburgring's new Grand Prix circuit, Mercedes-Benz put a field of Formula One drivers into identical race-prepared 2.3-16s for a twelve-lap race: nine of the twelve living world champions, with Juan Manuel Fangio as master of ceremonies and a rookie who had failed to qualify at Imola days earlier. Ayrton Senna won in the wet, having traded the lead with Niki Lauda, by 1.58 seconds. Senna's car is in the Mercedes-Benz Museum, and he liked the model enough to collect a smoke silver road-going 2.3-16 from the factory in October 1985.\n\n## From 2.3 to 2.5, and the Evolutions\nThe 2.5-16 arrived in 1988 with a longer stroke, a duplex timing chain answering the single-chain weakness of the early 2.3, and the ASD variable limited-slip differential. It was not enough: BMW's M3 kept moving, and Group A allowed 500-car evolution batches. The Evolution I of March 1989 reversed the bore-stroke relationship to permit higher revs, stiffened the suspension by around a quarter and enlarged the brakes. The Evolution II of March 1990 went further: bodywork developed in the wind tunnel by Professor Richard Eppler of the University of Stuttgart, a rear wing so large that a trim strip had to be added to the rear window to satisfy a rule about obscuring the driver's view, the AMG Power Pack as standard, and a drag figure below the plain saloon's despite the downforce. All 502 were sold before the show car was uncovered.\n\n## Group A, AMG and the End of the Formula\nOn track the Evolution II debuted at the Nurburgring in June 1990 and took time to come good. Its best season was also Group A's last: in 1992 Mercedes-Benz drivers took 16 wins, 17 second places and 13 thirds from 24 races, Klaus Ludwig took the drivers' title, Roland Asch and Bernd Schneider filled the next two places, and AMG-Mercedes took the manufacturers' honours. That season formalised the AMG relationship Mercedes-Benz would later buy outright. The road cars were left behind quickly, and for two decades these were simply used-up saloons. The reappraisal came late, and it separated the Evolutions from everything else.",
 "marketNotes": "As of August 2026, classic.com puts the 190 E 2.3-16 market benchmark at approximately $25,957 with an average sale near $31,482 on a falling trend. Recorded 2.3-16 results run from $5,900 for a 1986 project car in September 2025 to the ex-Ayrton Senna 1985 example, which made 230,000 pounds at RM Sotheby's London sale in November 2025 - a provenance result rather than a market one, on a car showing 154,302 miles. The Evolutions sit in a different market. As of August 2026 classic.com records an Evolution I benchmark of approximately $138,889 against an average of $125,732, with sales from $80,500 in May 2024, and an Evolution II benchmark of approximately $286,198 against an average of $281,201, trending upward, with a low of $155,250 in August 2022. Auction evidence tracks that: RM Sotheby's sold Evolution II serial 168 of 502 for $329,500 at Monterey in August 2024, while Niki Lauda's 1984 Race of Champions car made CHF 308,750 at St. Moritz in 2023. All auction figures are the houses' published results, which include buyer's premium.",
 "whatToLookFor": "Establish which car is in front of you before anything else, because the four specifications are separated by large sums. An Evolution I without its AMG Power Pack is a materially different car from one with it, and on a wide-arch car the serialised gearknob and the small EVOLUTION plate on the front wings are the quickest confirmation that it is genuine rather than a re-bodied 2.5-16. Every Evolution left the factory in left-hand drive; a right-hand-drive Evolution does not exist. On the 2.3-16, check the colour against the year - only blue-black and smoke silver metallic were offered at first, with almandine red and astral silver arriving later. Corrosion is the first mechanical question: the inner wings under the washer bottle and battery, the rear subframe mounts, jacking points and door bottoms. Ask for the self-levelling suspension to be demonstrated cold and again after a drive, and look for fluid on the rear struts and along the pipe runs forward; interiors are model-specific and the contoured rear seat and chequered cloth are hard to replace. Original, unmodified cars with continuous history are what the market pays for; the 2.5-16 has been a popular basis for engine swaps and track builds, and reversing that work is rarely economic.",
 "commonProblems": "Rust is the defining structural fault and is described by British buyer's guides as capable of being rampant, the inner wings around the washer bottle and battery being the usual starting point, along with broken rear coils. The M102 has a strong reputation for durability, but early 2.3 units used a single timing chain that can stretch and break; replacement is quoted at roughly 70,000 miles, and the 2.5-16's duplex chain exists precisely because of the problem. Head-gasket failure is common and is usually traced to neglected corrosion-inhibitor levels in the coolant rather than to any inherent weakness. The hydro-pneumatic self-levelling rear suspension is the model-specific liability: accumulator spheres lose their charge, springs break and struts wear, and owners report that most failures are leaks from corroded pipework running the length of the car rather than from the pump. The dog-leg Getrag was heavily sprung when new and gets vaguer with wear - a period road test complained that even a straight-line change was a two-stage operation. Air conditioning failures and broken door-card mountings round out the list; parts specific to the sixteen-valve cars are not cheap.",
 "valueTrajectory": "For roughly twenty years after production ended these were simply old Mercedes saloons with an awkward gearbox, and they were used accordingly. The standard 2.3-16 remains the most accessible route into a factory homologation programme: as of August 2026 the classic.com benchmark of roughly $25,957 sits within reach of an ordinary enthusiast, and its trend is falling rather than rising. The Evolutions moved on a different curve: as of August 2026 the classic.com Evolution II benchmark of approximately $286,198 is trending upward against an Evolution I benchmark near $138,889, an order of magnitude above the cars they were homologated from. The practical consequence is a gap widening on two axes at once: between the Evolutions and the standard cars, and within the standard cars between documented, rust-free examples and the many that were modified or left to corrode. Provenance can override the market entirely, as the Senna 2.3-16 demonstrated in November 2025.",
 "overallConfidence": "high",
 "sources": [
  {
   "ref": "wikipedia-190e",
   "title": "Mercedes-Benz 190E",
   "url": "https://en.wikipedia.org/wiki/Mercedes-Benz_190E",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Cosworth commissioned for a ~320 hp rally engine, quattro forcing the DTM switch; 183 hp/174 lb ft, US 167 hp at 9.7:1, 230 km/h, dog-leg Getrag, SLS rear, Cd 0.32, 2.5-16 duplex chain, 502 of each Evolution, Evolution II 235 PS and Eppler aero at Cd 0.29, 500 blauschwarz plus 501-502 in astral silver."
  },
  {
   "ref": "wikipedia-w201",
   "title": "Mercedes-Benz W201",
   "url": "https://en.wikipedia.org/wiki/Mercedes-Benz_W201",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "W201 developed 1974-1982 under Bruno Sacco, ~1.88 million built. Gives 19,487 2.3-16V, 5,743 2.5-16V and 502 of each Evolution; five-link rear axle with hydraulic self-levelling on the performance cars."
  },
  {
   "ref": "wikipedia-dtm-1991",
   "title": "1991 Deutsche Tourenwagen Meisterschaft",
   "url": "https://en.wikipedia.org/wiki/1991_Deutsche_Tourenwagen_Meisterschaft",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Records Frank Biela in the Audi V8 quattro as 1991 DTM drivers' champion on 174 points - the counterweight to claims that Mercedes-Benz took 1991 honours."
  },
  {
   "ref": "supercarnostalgia-2316",
   "title": "Mercedes-Benz W201 190 E 2.3-16 Guide",
   "url": "https://supercarnostalgia.com/blog/mercedes-benz-w201-190-e-23-16",
   "publisher": "Supercar Nostalgia",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "19,487 built to June 1988, ~600 right-hand drive, US sales 1986-87 only; 185 bhp at 6,200 rpm and 174 lb ft at 10.5:1, KAT 170 and RUF 177 bhp; heads cast at Cosworth's Worcester foundry; 284/258 mm discs, 1,350 kg, 146 mph, 0-62 mph 7.2 s; nine Nardo class records."
  },
  {
   "ref": "supercarnostalgia-evo2",
   "title": "Mercedes-Benz W201 190 E 2.5-16 Evolution 2 Guide",
   "url": "https://supercarnostalgia.com/blog/mercedes-benz-w201-190-e-25-16-evolution-2",
   "publisher": "Supercar Nostalgia",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "M102.992 of 2,463 cc from 97.3 x 82.8 mm, 235 bhp at 7,200 rpm, 7,700 rpm limit against the Evolution I's 7,250, compression 9.7:1 to 10.5:1, 0-62 mph 6.1 s, 153 mph, 300/278 mm discs, 8.25x17 in wheels, 1,340 kg; 502 cars May-July 1990, all left-hand drive, homologation minimum 500; two VIP cars in another scheme."
  },
  {
   "ref": "mb190e16v-history",
   "title": "History - MB190e16v",
   "url": "https://mb190e16v.com/history/",
   "publisher": "mb190e16v.com",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Year-by-year build figures summing to 19,487 2.3-16s (1983-88) and 5,743 2.5-16s (1988-93). Evolution I 502 cars, 7,250 rpm limiter, springs 23 per cent stiffer, DM 19,000 AMG pack for 225 hp. Evolution II 502 cars, gearknobs 001/500-500/500, 45 mm lower, two silver test cars; ASD lock 15-100 per cent."
  },
  {
   "ref": "project190-nardo",
   "title": "Nardo 1983 - Project 190",
   "url": "https://www.project190.com/en/nardo/",
   "publisher": "Project 190",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "13-21 August 1983, three pre-production cars, 18 drivers six per car, 243 pit stops, 102 FIA commissioners, 35-42 degrees; 50,000 km in 201 h 39 min 43 s at 247 km/h; 2.65:1 final drive against 3.27:1, reverse deleted; three world and twelve class records; a broken rotor arm cost about three hours."
  },
  {
   "ref": "classicdriver-nardo",
   "title": "A long-playing record: 50,000km in 201 hours in a Mercedes 190 E 2.3-16",
   "url": "https://www.classicdriver.com/en/article/autos/records-1983-mercedes-benz-190-e-23-16-nard",
   "publisher": "Classic Driver",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Independent record-run account: three lightly modified cars, 50,000 km in 201 h 39 min 43 s, outright records at 25,000 km, 25,000 miles and 50,000 km, and nine international class records in the 2000-3000 cc category A group I petrol class."
  },
  {
   "ref": "rm-sm23-lauda",
   "title": "1984 Mercedes-Benz 190 E 2.3-16 'Nurburgring', St. Moritz 2023",
   "url": "https://rmsothebys.com/auctions/sm23/lots/p0041-1984-mercedesbenz-190-e-2316-nurburgring/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Niki Lauda's Race of Champions car, chassis WDB2010341A076359, sold CHF 308,750 at St. Moritz 2023. Establishes 12 May 1984, the twelve-lap format opening the new Grand Prix circuit, nine of twelve living champions in the field, Fangio as master of ceremonies, 21 cars prepared by Sport-Technik, Lauda second by 1.58 s."
  },
  {
   "ref": "rm-lf25-senna",
   "title": "1985 Mercedes-Benz 190 E 2.3-16, London 2025",
   "url": "https://rmsothebys.com/auctions/lf25/lots/r0012-1985-mercedesbenz-190-e-2316/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Ayrton Senna's personal road car, chassis WDB2010342F152752, smoke silver, collected from the factory in October 1985 after his Race of Champions win; sold for 230,000 pounds at London 2025."
  },
  {
   "ref": "rm-mo24-evo2",
   "title": "1990 Mercedes-Benz 190 E 2.5-16 Evolution II, Monterey 2024",
   "url": "https://rmsothebys.com/auctions/mo24/lots/r0131-1990-mercedesbenz-190-e-2516-evolution-ii/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold $329,500 at Monterey 2024. Chassis WDB2010361F736128, serial 168 of 502. Quotes 235 hp to a 7,800 rpm redline, states two consecutive constructors' titles for AMG-Mercedes in 1991 and 1992, and notes rival teams protested the aero package."
  },
  {
   "ref": "classic-2316",
   "title": "Mercedes-Benz 190E 2.3-16 - W201 Market",
   "url": "https://www.classic.com/m/mercedes-benz/190/190-e-23-16/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of August 2026: benchmark approximately $25,957 on a falling trend, average sale approximately $31,482, low of $5,900 for a 1986 project car in September 2025, high of 230,000 pounds for the ex-Senna car in November 2025."
  },
  {
   "ref": "classic-evo1",
   "title": "Mercedes-Benz 190E 2.5-16 Evolution - W201 Market",
   "url": "https://www.classic.com/m/mercedes-benz/190/190-e-25-16-evolution-i/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of August 2026: Evolution I benchmark approximately $138,889 on a rising trend against an average sale of approximately $125,732, with a recorded low of $80,500 in May 2024."
  },
  {
   "ref": "classic-evo2",
   "title": "Mercedes-Benz 190E 2.5-16 Evolution II - W201 Market",
   "url": "https://www.classic.com/m/mercedes-benz/190/190-e-25-16-evolution-ii/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of August 2026: Evolution II benchmark approximately $286,198 on a rising trend against an average sale of approximately $281,201, with a recorded low of $155,250 in August 2022; confirms the 502-car run."
  },
  {
   "ref": "csc-w201-guide",
   "title": "Mercedes-Benz W201 buyer's guide: what to pay and what to look for",
   "url": "https://www.classicandsportscar.com/features/buyers-guide-mercedes-benz-w201",
   "publisher": "Classic & Sports Car",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "The dissenting production figures: 17,037 2.3-16s built 1983-88 and 4,784 2.5-16s through 1993. Also head-gasket failure traced to neglected corrosion inhibitor, single timing chains breaking at a 70,000-mile interval, rust in the inner wings under the washer bottle and battery, broken rear coils and failing self-levelling, all Evolutions left-hand drive."
  },
  {
   "ref": "motorsport-1985",
   "title": "Mercedes-Benz 190 E 2.3-16 (August 1985)",
   "url": "https://www.motorsportmagazine.com/archive/article/august-1985/21/mercedes-benz-190-e-23-16/",
   "publisher": "Motor Sport",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Period road test: UK list 21,045 pounds in 1985, 185 bhp at 6,200 rpm and 168 lb ft, 142 mph, 0-60 mph in 7.5 s, self-levelling rear suspension, and a gearbox so heavily sprung that even a straight-line change was a two-stage operation."
  },
  {
   "ref": "octane-evo2",
   "title": "Mercedes-Benz 190E Evo II - Earning its wings",
   "url": "https://www.octane-magazine.com/articles/features/mercedes-benz-190e-evo-ii-earning-its-wings/",
   "publisher": "Octane",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Eppler engaged for the aerodynamics; rear-window trim added so the wing did not obscure the driver's view; Cd cut from 0.33 to 0.29; 232 bhp and 173 lb ft, race versions to 360 bhp. States 500 road cars in blauschwarz plus two astral silver, one to AMG and one kept by Mercedes-Benz; says 1991 went to BMW and 1992 gave Mercedes 16 of 24 wins."
  },
  {
   "ref": "autoevolution-evo2",
   "title": "Mercedes-Benz 190E 2.5-16 Evo II: The Story of the Cosworth-Powered, AMG-Tuned Legend",
   "url": "https://www.autoevolution.com/news/mercedes-benz-190e-2516-evo-ii-the-story-of-the-cosworth-powered-amg-tuned-legend-224905.html",
   "publisher": "autoevolution",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "The rally-to-DTM pivot: Cosworth commissioned for a 300-plus hp naturally aspirated four on the M102 block, overtaken by turbocharging and four-wheel drive. Evolution II: AMG pack standard, 232 hp and 181 lb ft, ASD, self-levelling with an interior ride-height knob, 502 cars all but two in blauschwarz; manufacturers' trophy claimed for 1991, Ludwig's title in 1992."
  },
  {
   "ref": "conceptcarz-dtm92",
   "title": "With 16 Victories To The 1992 DTM Championship: DTM Season Of Successes For Mercedes-Benz",
   "url": "https://www.conceptcarz.com/a22038/1992-DTM-Championship-Mercedes-Benz.aspx",
   "publisher": "conceptcarz",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "1992 DTM: 16 wins, 17 seconds and 13 thirds from 24 races; Ludwig champion, Asch second, Schneider third; AMG-Mercedes took the constructors' title; factory-supported return in 1988 with AMG; race engine at 274 kW (373 hp); 502 road cars built at Bremen."
  },
  {
   "ref": "mbclub-sls",
   "title": "Self levelling suspension - W201",
   "url": "https://forums.mbclub.co.uk/threads/doubt-self-leveling-suspension-w201.174539/",
   "publisher": "MBClub UK",
   "sourceType": "club-forum",
   "reliability": "low",
   "notes": "Owner discussion used only for fault patterns: a mechanical and hydraulic arrangement with a levelling valve on the rear anti-roll bar, accumulator spheres and pipework running forward to a pump and reservoir, with most failures reported as leaks from corroded pipes."
  }
 ],
 "claims": [
  {
   "section": "history",
   "claimText": "The sixteen-valve head was commissioned from Cosworth for a works rally programme and redirected to circuit racing only after Audi's quattro made a rear-drive, naturally aspirated rally car uncompetitive; it is a light-alloy twin-cam design on the existing Mercedes M102 iron block, cast at Cosworth's Worcester foundry.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-190e",
    "autoevolution-evo2",
    "supercarnostalgia-2316"
   ]
  },
  {
   "section": "history",
   "claimText": "Between 13 and 21 August 1983 three pre-production 190 E 2.3-16s covered 50,000 km at Nardo at an average near 247.9 km/h, taking outright records at 25,000 km, 25,000 miles and 50,000 km, weeks before the Frankfurt launch.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "project190-nardo",
    "classicdriver-nardo",
    "mb190e16v-history"
   ]
  },
  {
   "section": "history",
   "claimText": "Sources disagree on the number of international class records set alongside the three outright records at Nardo.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "project190-nardo",
    "classicdriver-nardo",
    "supercarnostalgia-2316"
   ],
   "conflictNote": "Classic Driver states nine international class records, placing them in the 2000-3000 cc category A group I petrol class, and Supercar Nostalgia also gives nine. Project 190 states twelve. No source consulted here resolves the difference."
  },
  {
   "section": "history",
   "claimText": "The 190 E 2.3-16 was launched on 12 May 1984 in a twelve-lap one-make race opening the Nurburgring's new Grand Prix circuit, contested by nine of the twelve living Formula One world champions with Fangio as master of ceremonies and won in the wet by the rookie Ayrton Senna ahead of Niki Lauda by 1.58 seconds, in cars prepared by Mercedes-Benz Sport-Technik.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "rm-sm23-lauda",
    "supercarnostalgia-2316",
    "rm-lf25-senna"
   ]
  },
  {
   "section": "production",
   "claimText": "Published totals for the standard sixteen-valve cars do not agree: the 2.3-16 is given as either 19,487 or 17,037 cars and the 2.5-16 as either 5,743 or 4,784, so no production total is asserted here.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "wikipedia-w201",
    "mb190e16v-history",
    "csc-w201-guide",
    "supercarnostalgia-2316"
   ],
   "conflictNote": "Wikipedia's W201 article, mb190e16v.com and Supercar Nostalgia all state 19,487 2.3-16s and 5,743 2.5-16s, with mb190e16v.com supplying a year-by-year breakdown summing to those figures. Classic & Sports Car states 17,037 and 4,784. The difference is roughly 2,450 and 960 cars, too large to be rounding, and is not resolved by any source consulted here, so productionTotal is null."
  },
  {
   "section": "production",
   "claimText": "Both Evolution models were built to 502 cars against a Group A homologation minimum of 500, the Evolution I from March 1989 and the Evolution II between May and July 1990, and every Evolution was left-hand drive.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-190e",
    "wikipedia-w201",
    "mb190e16v-history",
    "supercarnostalgia-evo2",
    "csc-w201-guide",
    "classic-evo1"
   ]
  },
  {
   "section": "production",
   "claimText": "Accounts of the two Evolution II cars finished outside the standard blue-black metallic differ, and what those cars were is not established.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "wikipedia-190e",
    "mb190e16v-history",
    "octane-evo2",
    "supercarnostalgia-evo2",
    "rm-mo24-evo2"
   ],
   "conflictNote": "Wikipedia states 500 cars in blauschwarz with numbers 501 and 502 in astral silver. mb190e16v.com calls the two silver cars test cars. Octane says one went to AMG and one was kept by Mercedes-Benz. Supercar Nostalgia refers to two VIP examples in another scheme. The gearknobs run 001/500 to 500/500, yet RM Sotheby's catalogues describe cars as serial 168 and 283 'of 502'. No source consulted resolves this."
  },
  {
   "section": "specs",
   "claimText": "All sixteen-valve W201s used the five-link rear axle with hydro-pneumatic self-levelling suspension - a levelling valve on the rear anti-roll bar, accumulator spheres and pipework running forward to a pump and reservoir - with the Evolution II adding an interior ride-height control.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-190e",
    "wikipedia-w201",
    "motorsport-1985",
    "autoevolution-evo2",
    "mbclub-sls"
   ]
  },
  {
   "section": "specs",
   "claimText": "Drive was through a Getrag five-speed manual with a dog-leg first gear, described in period as heavily sprung to the point that even a straight-line change was a two-stage operation, joined from the 2.5-16 by the ASD electronically controlled limited-slip differential whose lock varied from 15 to 100 per cent.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "motorsport-1985",
    "wikipedia-190e",
    "supercarnostalgia-evo2",
    "mb190e16v-history",
    "autoevolution-evo2"
   ]
  },
  {
   "section": "specs",
   "claimText": "Published performance figures for the European 2.3-16 vary by source and are best read as a range rather than a single set of numbers.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "motorsport-1985",
    "wikipedia-190e",
    "supercarnostalgia-2316",
    "mb190e16v-history"
   ],
   "conflictNote": "Motor Sport's August 1985 test gives 168 lb ft, 142 mph and 0-60 mph in 7.5 s. Wikipedia gives 174 lb ft, 230 km/h and under eight seconds to 100 km/h. Supercar Nostalgia gives 174 lb ft, 146 mph and 0-62 mph in 7.2 s. mb190e16v.com gives 235 Nm, 230 km/h and 7.5 s. The spread is not resolved by any source consulted here."
  },
  {
   "section": "specs",
   "claimText": "The Evolution II used the short-stroke M102.992 of 2,463 cc at 10.5:1 with the AMG Power Pack standard, giving 235 PS at 7,200 rpm and 245 Nm to a limit variously quoted at 7,700 and 7,800 rpm, in bodywork developed in the wind tunnel by Professor Richard Eppler of the University of Stuttgart that cut drag to 0.29 while adding downforce.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "supercarnostalgia-evo2",
    "wikipedia-190e",
    "autoevolution-evo2",
    "rm-mo24-evo2",
    "octane-evo2"
   ]
  },
  {
   "section": "history",
   "claimText": "The 190 E 2.3-16 was sold in the United States only for the 1986 and 1987 model years, with compression reduced to 9.7:1 for 167 hp at 5,800 rpm and a kerb weight of 2,976 lb.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "supercarnostalgia-2316",
    "wikipedia-190e"
   ]
  },
  {
   "section": "history",
   "claimText": "Mercedes-Benz's strongest DTM season with the Evolution II was 1992, the last year of Group A: 16 wins, 17 seconds and 13 thirds from 24 races, the drivers' title to Klaus Ludwig with Roland Asch second and Bernd Schneider third, and the manufacturers' title to AMG-Mercedes.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "conceptcarz-dtm92",
    "autoevolution-evo2",
    "octane-evo2"
   ]
  },
  {
   "section": "history",
   "claimText": "Whether Mercedes-Benz took manufacturers' honours in the 1991 DTM season is stated differently by different sources.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "rm-mo24-evo2",
    "autoevolution-evo2",
    "octane-evo2",
    "wikipedia-dtm-1991"
   ],
   "conflictNote": "RM Sotheby's catalogues state the model secured constructors' titles in both 1991 and 1992, and autoevolution states AMG-Mercedes lifted the manufacturers' trophy in 1991. Octane says the 1991 championship went to BMW. Wikipedia records Frank Biela's Audi V8 quattro as 1991 drivers' champion, which settles the drivers' title but not the manufacturers' award. The question is not resolved by any source consulted here."
  },
  {
   "section": "market",
   "claimText": "As of August 2026 classic.com records benchmarks of approximately $25,957 for the 2.3-16 on a falling trend, $138,889 for the Evolution I and $286,198 for the Evolution II, the last two both rising; auction evidence tracks that split, with RM Sotheby's selling Evolution II serial 168 for $329,500 at Monterey in 2024, Niki Lauda's 1984 Race of Champions car for CHF 308,750 at St. Moritz in 2023 and Ayrton Senna's own road-going 2.3-16 for 230,000 pounds at London in November 2025.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-2316",
    "classic-evo1",
    "classic-evo2",
    "rm-mo24-evo2",
    "rm-sm23-lauda",
    "rm-lf25-senna"
   ]
  },
  {
   "section": "problems",
   "claimText": "Rust is the defining structural fault, concentrated in the inner wings around the washer bottle and battery, and early 2.3 engines used a single timing chain that can stretch and break, with replacement quoted at roughly 70,000 miles - the 2.5-16's duplex chain answers that - and head-gasket failure is commonly traced to neglected corrosion-inhibitor levels in the coolant rather than to a design weakness.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "csc-w201-guide",
    "wikipedia-190e",
    "mb190e16v-history"
   ]
  },
  {
   "section": "problems",
   "claimText": "The hydro-pneumatic self-levelling rear suspension is the model-specific liability: accumulator spheres lose their charge, rear springs break and struts wear, and owners report that most failures are leaks from corroded pipework running the length of the car.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "mbclub-sls",
    "csc-w201-guide",
    "motorsport-1985"
   ]
  }
 ]
};
