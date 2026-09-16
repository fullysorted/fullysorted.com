/**
 * Researched model draft - Aston Martin DB9, six-speed manual, 2008 model year, US market (2005-2011 manual availability).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedDb9Manual = {
 "slug": "aston-martin/db9-manual",
 "make": "Aston Martin",
 "model": "DB9",
 "generation": "2008 six-speed manual, US market",
 "generationCode": "VH I",
 "trim": "Six-speed manual (Graziano), coupe and Volante",
 "yearStart": 2005,
 "yearEnd": 2011,
 "bodyStyles": [
  "2-door 2+2 coupe (fixed roof)",
  "2-door 2+2 Volante (fabric convertible)"
 ],
 "engines": [
  "5,935 cc AM11 48-valve 60-degree V12, naturally aspirated, DOHC per bank, 450 hp at 5,750 rpm and 420 lb-ft at 5,000 rpm, as listed for US 2005-2008 model year cars",
  "5,935 cc AM11 V12 in revised tune, 470 hp at 6,000 rpm and 443 lb-ft at 5,000 rpm, introduced for cars delivered from the second quarter of 2008 and listed in the US as the 2009 model year"
 ],
 "productionTotal": null,
 "productionNotes": "Nobody publishes a US-market count of manual DB9s, and Aston Martin does not publish model-year production figures at all. A thread on the Aston Martin Life owner forum asking for manual DB9 numbers went unanswered beyond the observation that Aston Martin does not publish production numbers. The only itemized figures found in this research come from HWM Aston Martin, the Walton-on-Thames dealer, in a 2020s retrospective on the manual cars: just over 16,500 DB9s in total, of which 385 were manual coupes and 237 manual Volantes, which HWM summarizes as less than 5 percent of production across the model's twelve years. The astonmartins.com model guide separately says it has been claimed that as few as 5 percent of DB9 production carried the Graziano six-speed, and a US buyer's guide from Exotic Car Hacks repeats the roughly five percent figure. These three do not disagree, but they are also not independent confirmations: HWM's figures are the only itemized count, the other two are percentages of unstated origin, and none of them separates US cars, coupes from Volantes by year, or 450 hp cars from 470 hp cars. For those reasons productionTotal is left null. What the sources do establish is the window: classic.com lists the manual coupe and manual Volante for model years 2005 through 2011 in the US, Consumer Guide records that Aston Martin dropped the six-speed manual after 2011, and no manual was offered on the 2013 onward revised car. The 2008 model year sits in the middle of that window. US pricing guides list the 2008 car at 450 hp and the 2009 car at 470 hp, while the 470 hp revision began deliveries in the second quarter of calendar 2008, so a 2008-titled US car should be identified by its build specification rather than its title year.",
 "notableTrims": [
  {
   "name": "DB9 coupe, six-speed manual, 2005-2008 US model years (450 hp)",
   "note": "The configuration this page is about. Rear-mounted Graziano six-speed with a cable-operated shifter and twin-plate hydraulic clutch, 450 hp and 420 lb-ft. Listed at $163,900 for 2008, $4,700 below the Touchtronic coupe."
  },
  {
   "name": "DB9 Volante, six-speed manual",
   "note": "The convertible with the same gearbox. HWM's count puts it at 237 cars worldwide against 385 manual coupes, so it is the scarcer of the two manual bodies. Listed at $177,400 for 2008."
  },
  {
   "name": "DB9 coupe, six-speed manual, 2009-2011 US model years (470 hp)",
   "note": "Same gearbox behind the revised 470 hp, 443 lb-ft engine with Bilstein dampers and revised upper suspension arms. Deliveries began in the second quarter of 2008, which is why model-year labels and build dates blur on 2008 cars."
  },
  {
   "name": "DB9 Touchtronic II (six-speed automatic)",
   "note": "The car nearly everyone bought. ZF six-speed automatic with column paddles, quicker to 60 mph than the manual in every published US test, and the reason the manual take rate is under 5 percent."
  },
  {
   "name": "Sports Pack (from 2007 model year)",
   "note": "Lightweight forged wheels, firmer springs and dampers and a lower ride height. A manual car with the Sports Pack is the combination collectors look for first, but the pack was an option on either gearbox."
  }
 ],
 "specs": {
  "layout": "Front mid-mounted V12, rear-mounted transaxle, rear-wheel drive",
  "chassis": "Bonded and riveted extruded-aluminum VH (Vertical Horizontal) platform with aluminum and composite panels",
  "engine": "5,935 cc AM11 60-degree V12, DOHC, 48 valves, naturally aspirated",
  "power": "450 hp at 5,750 rpm (US 2005-2008 model years); 470 hp at 6,000 rpm (revised engine, US 2009 model year onward)",
  "torque": "420 lb-ft at 5,000 rpm (450 hp engine); 443 lb-ft at 5,000 rpm (470 hp engine)",
  "transmission": "Graziano six-speed manual transaxle, cable-operated shifter, hydraulic twin-plate clutch; Touchtronic II ZF six-speed automatic optional",
  "weight": "3,770 lb manual and 3,880 lb automatic as first quoted by the factory, later revised to 3,880 lb and 3,968 lb (astonmartins.com, single source); Edmunds quotes about 4,000 lb for the Volante",
  "acceleration": "Manual coupe 0-60 mph in 4.6 seconds per Edmunds for 2008; Aston Martin claimed the 470 hp manual cut a further 0.1 second to 4.6 seconds; MotorWeek recorded 4.8 seconds in a 2005 Touchtronic car",
  "quarter_mile": "13.2 seconds at 110 mph, MotorWeek 2005 test of a Touchtronic coupe",
  "suspension": "Double wishbones front and rear; Bilstein dampers, revised upper arms and retuned bushings from the 470 hp revision",
  "brakes": "Ventilated steel discs all around; carbon-ceramic brakes were not a DB9 option in this period",
  "us_list_price_2008": "$163,900 coupe manual, $168,600 coupe Touchtronic, $177,400 Volante manual, $182,100 Volante Touchtronic",
  "us_list_price_2009": "$192,950 Volante manual and $196,950 Volante Touchtronic per Edmunds; Consumer Guide gives a 2009 range of $182,450 to $199,950",
  "manual_years_us": "Model years 2005 through 2011; dropped after 2011 per Consumer Guide, none on the revised 2013 onward car",
  "take_rate": "Less than 5 percent of all DB9 production per HWM Aston Martin (385 manual coupes, 237 manual Volantes worldwide); no US-only count published"
 },
 "summary": "The six-speed manual DB9 is the version of Aston Martin's 2004-2016 grand tourer that almost nobody ordered. The gearbox is a rear-mounted Graziano transaxle with a cable-operated shifter and a twin-plate hydraulic clutch, offered in the US on both the coupe and the Volante from the 2005 model year through 2011, and priced $4,700 below the Touchtronic automatic in 2008. The Walton-on-Thames dealer HWM counts 385 manual coupes and 237 manual Volantes out of just over 16,500 DB9s built, under 5 percent of production, and no source separates out how many came to the United States. A US 2008 model year car is listed at 450 hp and 420 lb-ft from the 5,935 cc V12; the 470 hp, 443 lb-ft revision began deliveries in the second quarter of 2008 and is catalogued in the US as the 2009 car, so a 2008-titled manual can sit on either side of that line depending on when it was built. As of September 2026 classic.com's benchmark for a manual coupe is $66,443 and for a manual Volante $67,281, with recorded sales from about $30,000 to $90,000. This page is for someone who already owns one.",
 "history": "## Why the manual exists\n\nThe DB9 was the first car on Aston Martin's bonded-aluminum VH platform and the first product of the Gaydon factory, and it was designed around a rear-mounted transaxle for weight distribution. The transaxle layout gave Aston two suppliers to choose from: ZF for the Touchtronic six-speed automatic that most buyers wanted, and Graziano of Turin for a six-speed manual that kept the DB7 Vantage's stick-shift customer in the fold. HWM Aston Martin's account is that the DB9 was originally available with an automatic only and the manual followed; the astonmartins.com model guide lists the Graziano manual with its integrated shifter bellcrank system and twin-plate clutch as an option from the 2005 model year, which is the first US model year. The manual was never a performance option. Every published US figure has the automatic quicker to 60 mph, and the manual was cheaper on the sticker, $163,900 against $168,600 for the 2008 coupe. It existed because a certain kind of buyer would not have the car without it.\n\n## The 450 hp car, 2005-2008\n\nFor its first US model years the DB9 carried the 5,935 cc V12 at 450 hp at 5,750 rpm and 420 lb-ft at 5,000 rpm. The factory first quoted 3,770 lb for the manual coupe against 3,880 lb for the automatic, then revised both figures upward to 3,880 lb and 3,968 lb. MotorWeek's 2005 test of a Touchtronic coupe recorded 0-60 mph in 4.8 seconds and the quarter mile in 13.2 seconds at 110 mph; Edmunds lists the 2008 manual coupe at 4.6 seconds to 60 mph and the automatic at 4.3. The 2007 model year brought the Sports Pack of forged wheels and a lower ride height, and 2008 was an equipment year in the US: cupholders, iPod integration, steering-wheel audio controls, Bluetooth, a windshield-embedded antenna and an upgraded sound system, with the mechanical package unchanged.\n\n## The 470 hp revision and the 2008 model-year problem\n\nAston Martin announced the revised DB9 in May 2008: peak power up 20 hp to 470 hp at 6,000 rpm, torque up to 443 lb-ft at 5,000 rpm, Bilstein dampers, revised upper suspension arms and retuned bushings, and a new valve box for the Touchtronic. The manual car's claimed 0-60 mph time dropped by 0.1 second to 4.6 seconds. Deliveries began in the second quarter of 2008. In the US, Edmunds and Cars.com list the 2008 model year at 450 hp and record the 20 hp gain as the news for 2009, while Consumer Guide describes the gain as starting in mid-2008. This is the detail that matters most to an owner of a 2008-titled car: the title year does not settle which engine, dampers and suspension arms the car carries. The build date and the specification on the car do.\n\n## What is physically different on a manual car\n\nThe gearbox is a Graziano six-speed transaxle mounted at the rear, shifted through cables and an integrated bellcrank, with a hydraulic twin-plate clutch. Against the Touchtronic car it gives up the column paddles and gains a clutch pedal and a conventional gate; the factory's first weight quote had the manual 110 lb lighter than the automatic. The manual was available on both bodies, and HWM's count has the Volante the scarcer of the two at 237 cars against 385 coupes worldwide. The astonmartins.com guide records the claim that as few as 5 percent of all DB9s were built with the Graziano transmission, and a US buyer's guide puts it at about five percent; none of the three sources that give a proportion say where their figure came from, and Aston Martin itself does not publish production numbers, which is why this page carries no total.\n\n## The end of the manual\n\nThe manual stayed on the US order sheet through the 2011 model year. Consumer Guide records that Aston Martin dropped the six-speed manual after 2011, and classic.com's market pages for both manual bodies run from model year 2005 to 2011 with no manual offered on the revised 2013 onward car. HWM dates the DB9's loss of the manual to the 2013 model year. That leaves the manual DB9 as a seven-model-year, sub-5-percent option on a car that was itself never mass-produced, with the 2008 and 2009 cars straddling the one significant mechanical change in the run.",
 "marketNotes": "As of September 2026 classic.com puts its market benchmark for a manual DB9 coupe at $66,443 with an average price of $66,737, and for a manual Volante at $67,281 with an average of $69,142. The recorded range for the manual coupe runs from $30,250 for a 2006 six-speed sold on December 13, 2023 to $90,000 for a 2011 car sold on Bring a Trailer on October 16, 2025. For the manual Volante the low is $33,000 for a 2008 Volante manual on January 4, 2024, and the top of the tracked listings is $89,979 for a 2006 car listed in August 2026, which is an asking figure rather than a sale. classic.com describes both manual bodies as much rarer than their Touchtronic siblings, and the spread between a $30,000 car and a $90,000 car is mostly the later 470 hp specification, mileage and condition rather than the gearbox alone. Set against the $163,900 list price of a 2008 manual coupe, a mid-market manual car as of September 2026 has retained roughly forty percent of its sticker after eighteen years, which is ordinary for a V12 grand tourer of this period and better than the automatic cars that sit below it. No auction lot page for a 2008 manual car could be fetched for this research; Cars and Bids results exist for 2008 DB9 coupes but the pages did not return content, so no individual 2008 manual sale is quoted here.",
 "whatToLookFor": "The first thing to establish on a 2008-titled US car is which car it is. Cars delivered from the second quarter of 2008 carry the 470 hp engine, Bilstein dampers and revised upper suspension arms, while US pricing guides list the 2008 model year at 450 hp; the build date, the engine calibration and the damper part numbers settle it, not the title. The manual itself is a Graziano transaxle with a cable-operated shifter and a twin-plate hydraulic clutch, so the shift quality across the gate cold and hot, the clutch bite point and any clutch judder on takeoff are the manual-specific checks, and a clutch that has been replaced on a car in the 40,000 mile range is more reassuring than one that has not. Cabin equipment identifies a genuine 2008 US car: cupholders, iPod integration, steering-wheel audio controls, Bluetooth, the windshield-embedded antenna and the upgraded sound system all arrived that year. Check that the four NHTSA recall campaigns have been carried out: the front lower suspension arm cam bolt (10V449000), the accelerator pedal arm (14V010000), the seat heater control module (14V753000) and the battery supply cable that can be damaged with the driver's seat fully rearward (17V795000). The air conditioning condenser sits directly behind the grille and is vulnerable to road debris, so cold air at the vents and a dry condenser face are worth a minute on your back with a flashlight. A car with Sports Pack wheels and the lower ride height is worth confirming against the build record, since the wheels were also fitted later to standard cars. Early cars had battery trouble reported by owners, so a conditioner and a recent battery are normal; a car that starts on the first turn after a week parked is telling you something.",
 "commonProblems": "The DB9's recall history in the US is short and specific. NHTSA lists four campaigns covering the 2008 car: a front lower suspension arm cam bolt that could crack along its shank and let the lower control arm move (reported September 2010), an accelerator pedal arm that may break because of a manufacturing error (January 2014), seat heater control modules that can fail and leave the heaters unable to be switched off (November 2014), and a battery supply cable that may be damaged when the driver's seat is in the full rearward position (November 2017). On the manual car the clutch is the wear item that the automatic does not have; the twin-plate hydraulic unit is a transaxle-out job, and a US buyer's guide notes owners reporting battery trouble on earlier cars and door locks that can fail and trap occupants. The air conditioning condenser at the front of the car corrodes and takes stone damage, with weak or warm air at the vents and an oily residue on the fins as the symptoms; a US parts supplier quotes a new OEM condenser at $550 to $850 and $400 to $700 in labor as of September 2026. Routine cost is the other reality: a US owner guide puts the annual or 10,000 mile service at about $1,000 at a dealer and $300 to $400 at an independent shop. Figures for carbon-ceramic brake replacement circulate for the DBS and later cars; they do not apply to a 2008 DB9, which has steel discs.",
 "valueTrajectory": "A 2008 manual coupe listed at $163,900 and, as of September 2026, trades around classic.com's $66,443 benchmark, with the manual Volante a little higher at $67,281 against a $177,400 list. The floor was set in late 2023 and early 2024, when a 2006 manual coupe sold for $30,250 and a 2008 manual Volante for $33,000; the ceiling to date is the $90,000 paid for a 2011 manual coupe in October 2025. That is the shape of a car that has finished depreciating and has begun to separate by specification: late 470 hp cars with the Sports Pack and low miles at the top, early cars with unknown clutch and service history at the bottom, and the manual gearbox as the consistent premium over the Touchtronic cars beneath. classic.com's own description of the manual bodies as much rarer than the automatics is the market's shorthand, and HWM's count of 622 manual cars worldwide against roughly 16,500 in total is the number behind it. The one thing an owner of a 2008 car can do about value is document which specification the car was built to, because the market prices a 470 hp manual above a 450 hp one and the title year does not tell a buyer which they are looking at.",
 "overallConfidence": "medium",
 "sources": [
  {
   "ref": "edmunds-2008",
   "title": "2008 Aston Martin DB9 Prices, Reviews, and Pictures",
   "url": "https://www.edmunds.com/aston-martin/db9/2008/review/",
   "publisher": "Edmunds",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "US 2008 model year MSRP by body and gearbox: coupe manual $163,900, coupe automatic $168,600, Volante manual $177,400, Volante automatic $182,100. 450 hp and 420 lb-ft. Manual coupe 0-60 mph in 4.6 seconds, automatic 4.3. EPA 11/17/12 mpg. 2008 equipment additions. Volante about 4,000 lb."
  },
  {
   "ref": "edmunds-2009",
   "title": "2009 Aston Martin DB9 Prices, Reviews, and Pictures",
   "url": "https://www.edmunds.com/aston-martin/db9/2009/review/",
   "publisher": "Edmunds",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Records the 20 hp increase to 470 hp and 443 lb-ft as the change for the US 2009 model year; both six-speed manual and six-speed automatic still offered; 2009 Volante manual $192,950 and automatic $196,950."
  },
  {
   "ref": "cars-com-2008",
   "title": "2008 Aston Martin DB9 - Specs, Prices, MPG, Reviews & Photos",
   "url": "https://www.cars.com/research/aston_martin-db9-2008/",
   "publisher": "Cars.com",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Second US source for 2008 model year: starting MSRP $163,900 for the manual coupe, 450 hp and 420 lb-ft, conventional six-speed manual or Touchtronic II automatic, 2008 interior and infotainment changes."
  },
  {
   "ref": "consumerguide-db9",
   "title": "2005-12 Aston Martin DB9",
   "url": "https://consumerguide.com/used/2005-12-aston-martin-db9/",
   "publisher": "Consumer Guide Automotive",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "US model-year narrative: 450 hp for the first three seasons, 20 hp gain to 470 starting in mid-2008, manual dropped after 2011, 2009 price range $182,450 to $199,950, 2011 base coupe manual $184,615, factory 0-60 claim 4.9 seconds."
  },
  {
   "ref": "motorweek-2005",
   "title": "2005 Aston Martin DB9",
   "url": "https://motorweek.org/road_tests/2005_aston_martin_db9/",
   "publisher": "MotorWeek",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "US period road test of a Touchtronic coupe: 450 hp and 420 lb-ft, 0-60 in 4.8 seconds, quarter mile 13.2 seconds at 110 mph, 3,880 lb quoted, $160,000 sticker quoted, and the remark that the manual would cut a few tenths."
  },
  {
   "ref": "astonmartins-my2004-08",
   "title": "DB9 Coupe (MY2004 on)",
   "url": "https://astonmartins.com/car/db9-coupe-my2004-to-my2008/",
   "publisher": "astonmartins.com",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Model guide for the 450 hp car: 450 hp at 5,750 rpm, 420 lb-ft at 5,000 rpm, factory weights first quoted 1,710 kg manual and 1,760 kg automatic then revised to 1,760 and 1,800 kg (converted here to 3,770, 3,880, 3,880 and 3,968 lb), Graziano rear-mounted six-speed with cable shifter and twin-plate clutch from 2005 model year, 2007 model year Sports Pack, and the claim that as few as 5 percent of DB9s were built with the manual."
  },
  {
   "ref": "astonmartins-my2009",
   "title": "DB9 Coupe (2009MY to 2010.75MY)",
   "url": "https://astonmartins.com/car/db9-coupe-my2009/",
   "publisher": "astonmartins.com",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Model guide for the 470 hp revision: 470 hp at 6,000 rpm, 600 Nm (443 lb-ft) at 5,000 rpm, Bilstein dampers with revised upper arms and bushings, Touchtronic valve box, manual 0.1 second quicker to 60 mph at 4.6 seconds, deliveries from the second quarter of 2008. No production numbers."
  },
  {
   "ref": "torquereport-2009",
   "title": "Revised 2009 Aston Martin DB9 Unveiled with 470 Horsepower",
   "url": "https://www.thetorquereport.com/revised-2009-aston-martin-db9-unveiled-with-470-horsepower/",
   "publisher": "The Torque Report",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "May 23, 2008 report carrying the Aston Martin announcement text: 470 hp at 6,000 rpm, 600 Nm at 5,000 rpm, manual 0-60 down 0.1 second to 4.6 seconds, deliveries beginning in the second quarter of 2008. Home-market prices only; not used for US pricing."
  },
  {
   "ref": "hwm-manual",
   "title": "The Modern Era Manual Aston Martin Comes to an End",
   "url": "https://www.hwmastonmartin.co.uk/blog/modern-era-manual-aston-martin/",
   "publisher": "HWM Aston Martin",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Dealer retrospective with the only itemized manual count found: just over 16,500 DB9s, 385 manual coupes, 237 manual Volantes, less than 5 percent of production; Graziano of Turin gearbox; DB9 originally automatic only; manual dropped from the DB9 for the 2013 model year. No US breakdown."
  },
  {
   "ref": "astonmartinlife-numbers",
   "title": "Manual DB9 production numbers?",
   "url": "https://www.astonmartinlife.com/threads/manual-db9-production-numbers.6073/",
   "publisher": "Aston Martin Life forum",
   "sourceType": "club-forum",
   "reliability": "low",
   "notes": "Owner-forum thread asking for manual DB9 production numbers; the only reply is that Aston Martin does not publish production numbers. Cited to show the gap, not to supply a figure."
  },
  {
   "ref": "classic-coupe-manual",
   "title": "Aston Martin DB9 Coupe - Manual - VH I Market",
   "url": "https://www.classic.com/m/aston-martin/db9/vh-i/coupe-manual/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of September 2026: CMB $66,443, average $66,737, lowest recorded sale $30,250 for a 2006 six-speed on December 13, 2023, highest $90,000 for a 2011 on October 16, 2025 via Bring a Trailer; model years 2005 to 2011; manual described as much rarer than Touchtronic."
  },
  {
   "ref": "classic-volante-manual",
   "title": "Aston Martin DB9 Volante - Manual - VH I Market",
   "url": "https://www.classic.com/m/aston-martin/db9/vh-i/volante-manual/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of September 2026: CMB $67,281, average $69,142, lowest recorded sale $33,000 for a 2008 Volante manual on January 4, 2024, highest tracked listing $89,979 for a 2006 in August 2026; manual Volante production 2005 to 2011 with no manual on the VH II car."
  },
  {
   "ref": "nhtsa-recalls-2008",
   "title": "NHTSA recalls by vehicle: 2008 Aston Martin DB9",
   "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=aston%20martin&model=db9&modelYear=2008",
   "publisher": "National Highway Traffic Safety Administration",
   "sourceType": "government",
   "reliability": "high",
   "notes": "Four recall campaigns covering the 2008 DB9: 10V449000 front lower suspension arm cam bolt, 14V010000 accelerator pedal arm, 14V753000 seat heater control module, 17V795000 battery supply cable with seat full rearward. Confirms the 2008 model year exists in the US federal record."
  },
  {
   "ref": "exoticcarhacks-guide",
   "title": "Aston Martin DB9/DBS Buyers Guide",
   "url": "https://www.exoticcarhacks.com/car-reviews/aston-martin-db9-dbs-buyers-guide/",
   "publisher": "Exotic Car Hacks",
   "sourceType": "specialist",
   "reliability": "low",
   "notes": "US owner-side guide: about five percent of DB9s ordered with a stick shift; annual or 10,000 mile service about $1,000 at a dealer and $300 to $400 independent; seat heater recall; door lock failures; early-car battery complaints. Its carbon-ceramic brake figures are for the DBS and are not used here."
  },
  {
   "ref": "goparts-condenser",
   "title": "Aston Martin DB9, Vantage, Rapide & More A/C Condenser Failure Guide (2005-2019)",
   "url": "https://www.go-parts.com/garage/a-c-condenser-aston-martin-rapide-aston-martin-v8-vantage-aston-martin-db9-2005-2019",
   "publisher": "Go-Parts",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "US parts supplier tech article: condenser behind the grille vulnerable to road debris and corrosion, symptoms of weak or warm air and oily residue, new OEM part $550 to $850, labor $400 to $700."
  }
 ],
 "claims": [
  {
   "section": "specs",
   "claimText": "In the US the DB9 was offered with either a six-speed manual transmission or a six-speed Touchtronic automatic with paddle shifters, and the 2008 manual coupe listed at $163,900 against $168,600 for the automatic.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["edmunds-2008", "cars-com-2008"],
   "evidence": [
    { "ref": "edmunds-2008", "quote": "A six-speed manual transmission and a six-speed automatic with paddle shifters are available." },
    { "ref": "cars-com-2008", "quote": "a conventional six-speed manual gearbox" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 2008 manual Volante listed at $177,400 in the US and the Touchtronic Volante at $182,100, so the manual was the cheaper gearbox on both bodies.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["edmunds-2008"],
   "evidence": [
    { "ref": "edmunds-2008", "quote": "Volante 2dr Convertible (5.9L 12cyl 6M)" }
   ]
  },
  {
   "section": "specs",
   "claimText": "US pricing guides list the 2008 model year DB9 at 450 hp and 420 lb-ft, while Consumer Guide records the 20 hp gain to 470 as starting in mid-2008 and Edmunds records it as the change for the 2009 model year; which engine a given 2008-titled US car carries is not settled by these sources.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["edmunds-2008", "cars-com-2008", "consumerguide-db9", "edmunds-2009"],
   "conflictNote": "Edmunds and Cars.com list the 2008 model year at 450 hp and 420 lb-ft, and Edmunds records the 20 hp increase to 470 as the 2009 model year change. Consumer Guide states the engine gained 20 hp starting in mid-2008, and astonmartins.com and The Torque Report date first deliveries of the 470 hp car to the second quarter of 2008. Whether a 2008-titled US car is a 450 hp or 470 hp car therefore depends on its build, and is not resolved by any source consulted here.",
   "evidence": [
    { "ref": "edmunds-2008", "quote": "450 hp and 420 pound-feet of torque" },
    { "ref": "cars-com-2008", "quote": "The DB9's 6.0-liter V-12 produces 450 hp and 420 pounds-feet of torque." },
    { "ref": "consumerguide-db9", "quote": "Starting in mid-2008, Aston Martin's 6.0-liter V12 engine gained 20 horsepower, for a total of 470." },
    { "ref": "edmunds-2009", "quote": "Horsepower is up by 20 to 470, and torque is now 443 pound-feet (from 420)." }
   ]
  },
  {
   "section": "specs",
   "claimText": "The revised engine produces 470 hp at 6,000 rpm and 443 lb-ft (600 Nm) at 5,000 rpm, with Bilstein dampers, revised upper suspension arms and retuned bushings, and deliveries of the revised car began in the second quarter of 2008.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["astonmartins-my2009", "torquereport-2009"],
   "evidence": [
    { "ref": "astonmartins-my2009", "quote": "Deliveries of the revised DB9 coupe began during the second quarter of 2008." },
    { "ref": "torquereport-2009", "quote": "Deliveries of the updated Aston Martin DB9 begin during quarter two 2008" }
   ]
  },
  {
   "section": "specs",
   "claimText": "Aston Martin claimed the 470 hp manual car was 0.1 second quicker to 60 mph than before, at 4.6 seconds; Edmunds separately quotes 4.6 seconds for the 2008 manual coupe and 4.3 seconds for the automatic.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["astonmartins-my2009", "torquereport-2009", "edmunds-2008"],
   "evidence": [
    { "ref": "astonmartins-my2009", "quote": "The very rare manual DB9 was also quicker to 60mph by 0.1 seconds, down to 4.6 seconds." },
    { "ref": "torquereport-2009", "quote": "by 0.1 seconds to 4.6 seconds for the manual gearbox" },
    { "ref": "edmunds-2008", "quote": "A manual-equipped coupe gets from zero to 60 mph in a scant 4.6 seconds, while the automatic betters it with a 4.3-second run." }
   ]
  },
  {
   "section": "specs",
   "claimText": "The manual is a rear-mounted Graziano six-speed with an integrated shifter bellcrank system operated by cables and a hydraulic twin-plate clutch, offered from the 2005 model year; the gearbox was built by Graziano of Turin.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["astonmartins-my2004-08", "hwm-manual"],
   "evidence": [
    { "ref": "astonmartins-my2004-08", "quote": "Optional rear mounted Graziano Six speed manual with integrated shifter bellcrank system (cable operated), hydraulic twin plate clutch from 2005MY" },
    { "ref": "hwm-manual", "quote": "It was six speed unit, manufactured by Graziano of Turin." }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 450 hp engine is rated at 450 hp at 5,750 rpm and 420 lb-ft at 5,000 rpm, and MotorWeek's 2005 test of a Touchtronic coupe recorded 0-60 mph in 4.8 seconds and the quarter mile in 13.2 seconds at 110 mph.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["astonmartins-my2004-08", "motorweek-2005"],
   "evidence": [
    { "ref": "astonmartins-my2004-08", "quote": "Max power 450 bhp @ 5750rpm" },
    { "ref": "motorweek-2005", "quote": "The quarter mile ends in 13.2 seconds at 110 miles-per-hour" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The factory first quoted curb weights of 3,770 lb (1,710 kg) for the manual and 3,880 lb (1,760 kg) for the automatic, later revised to 3,880 lb and 3,968 lb (1,760 kg and 1,800 kg); this is a single-source figure from the astonmartins.com model guide and is carried at medium confidence for that reason.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["astonmartins-my2004-08"],
   "evidence": [
    { "ref": "astonmartins-my2004-08", "quote": "initially quoted 1710kg manual, 1760kg auto, later revised to 1760kg & 1800kg respectively" }
   ]
  },
  {
   "section": "production",
   "claimText": "HWM Aston Martin counts just over 16,500 DB9s in total, of which 385 were manual coupes and 237 manual Volantes, less than 5 percent of production across twelve years; this is the only itemized count found and it is not broken down by market or model year.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["hwm-manual"],
   "evidence": [
    { "ref": "hwm-manual", "quote": "Just over 16,500 DB9 were made. Of total production, there were: 385 Manual Coupe" }
   ]
  },
  {
   "section": "production",
   "claimText": "Independent of HWM's count, the astonmartins.com model guide and a US buyer's guide both put the manual take rate at about 5 percent of DB9 production, without stating a source for the figure.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["astonmartins-my2004-08", "exoticcarhacks-guide", "hwm-manual"],
   "evidence": [
    { "ref": "astonmartins-my2004-08", "quote": "as few as 5% of the entire DB9 production were actually built with the six speed Graziano transmission" },
    { "ref": "exoticcarhacks-guide", "quote": "about five percent of DB9s were ordered with a stick shift" },
    { "ref": "hwm-manual", "quote": "Less than 5% of total production across 12 years were built with this gearbox option." }
   ]
  },
  {
   "section": "production",
   "claimText": "Aston Martin does not publish model-year production figures, and no source consulted gives a count of manual DB9s sold in the United States, so no US manual total is stated on this page.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["astonmartinlife-numbers", "astonmartins-my2009"],
   "evidence": [
    { "ref": "astonmartinlife-numbers", "quote": "Aston Martin does not publish production numbers as other manufacturers?" },
    { "ref": "astonmartins-my2009", "quote": "Peak power of 470 bhp (+20bhp) was now reached at 6,000rpm" }
   ]
  },
  {
   "section": "production",
   "claimText": "The six-speed manual was offered on the DB9 in the US for model years 2005 through 2011 and was dropped after 2011, with no manual on the revised car that followed.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["classic-coupe-manual", "consumerguide-db9", "classic-volante-manual", "hwm-manual"],
   "evidence": [
    { "ref": "classic-coupe-manual", "quote": "The Aston Martin Db9 - Vh I - Coupe Manual was produced for model years 2005 to 2011." },
    { "ref": "consumerguide-db9", "quote": "Aston Martin dropped the six-speed manual transmission after 2011." },
    { "ref": "classic-volante-manual", "quote": "Production of the Manual Aston Martin VH I DB9 Volante lasted until 2011, with no manual options offered for the updated VH II Aston Martin DB9" },
    { "ref": "hwm-manual", "quote": "For 2013 model year, the manual was dropped from the DB9." }
   ]
  },
  {
   "section": "history",
   "claimText": "The 2008 model year in the US was an equipment year: cupholders, iPod integration, steering-wheel-mounted audio controls, Bluetooth, a windshield-embedded radio antenna and an upgraded premium sound system, with redesigned interior elements.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["edmunds-2008", "cars-com-2008"],
   "evidence": [
    { "ref": "edmunds-2008", "quote": "adds a few welcome standard features, including cupholders, iPod integration, steering-wheel-mounted audio controls, a windshield-embedded radio antenna and an upgraded premium sound system" },
    { "ref": "cars-com-2008", "quote": "new steering-wheel audio controls, Bluetooth connectivity and an auxiliary jack for MP3 players" }
   ]
  },
  {
   "section": "history",
   "claimText": "The 2009 US price range for the DB9 ran from $182,450 to $199,950 per Consumer Guide, with Edmunds listing the 2009 manual Volante at $192,950.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["consumerguide-db9", "edmunds-2009"],
   "evidence": [
    { "ref": "consumerguide-db9", "quote": "$182,450 to $199,950" },
    { "ref": "edmunds-2009", "quote": "Volante 2dr Convertible (5.9L 12cyl 6M) which starts at $192,950" }
   ]
  },
  {
   "section": "market",
   "claimText": "As of September 2026 classic.com's market benchmark for a manual DB9 coupe is $66,443 with an average price of $66,737, the lowest recorded sale $30,250 for a 2006 six-speed on December 13, 2023 and the highest $90,000 for a 2011 car in October 2025.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["classic-coupe-manual"],
   "evidence": [
    { "ref": "classic-coupe-manual", "quote": "The lowest recorded sale price was $30,250 for a 2006 Aston Martin DB9 6-Speed on December 13, 2023." }
   ]
  },
  {
   "section": "market",
   "claimText": "As of September 2026 classic.com's benchmark for a manual DB9 Volante is $67,281 with an average of $69,142, the lowest recorded sale $33,000 for a 2008 Volante manual on January 4, 2024, and classic.com describes the manual cars as much rarer than their Touchtronic siblings.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["classic-volante-manual", "classic-coupe-manual"],
   "evidence": [
    { "ref": "classic-volante-manual", "quote": "The lowest recorded sale price was $33,000 for a 2008 Aston Martin DB9 Volante - Manual on January 04, 2024." },
    { "ref": "classic-coupe-manual", "quote": "These manual hardtop sports cars were much rarer than their 'Touchtronic' automatic siblings." }
   ]
  },
  {
   "section": "problems",
   "claimText": "NHTSA lists four recall campaigns covering the 2008 DB9: a front lower suspension arm cam bolt that could crack (10V449000), an accelerator pedal arm that may break (14V010000), seat heater control modules that may fail (14V753000) and a battery supply cable that may be damaged with the driver's seat fully rearward (17V795000).",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["nhtsa-recalls-2008", "exoticcarhacks-guide"],
   "evidence": [
    { "ref": "nhtsa-recalls-2008", "quote": "The front bottom suspension arm cam bolt could crack along its shank allowing the lower control arm to move." },
    { "ref": "exoticcarhacks-guide", "quote": "the electronic control module for the seat heaters may fail, overheating and smoldering the seat" }
   ]
  },
  {
   "section": "problems",
   "claimText": "The air conditioning condenser sits directly behind the grille and fails from road debris and corrosion, with weak or warm air and oily residue on the fins as symptoms; a US parts supplier quotes a new OEM condenser at $550 to $850 and labor at $400 to $700 as of September 2026, a single-source cost figure.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["goparts-condenser"],
   "evidence": [
    { "ref": "goparts-condenser", "quote": "The condenser is located at the very front of the car, directly behind the grille, making it highly vulnerable to impacts from rocks and other road debris." }
   ]
  },
  {
   "section": "problems",
   "claimText": "A US owner guide puts the annual or 10,000 mile service at about $1,000 at a dealer and $300 to $400 at an independent shop, and reports early-car battery trouble and door locks that can fail; these are single-source, low-reliability figures.",
   "confidence": "low",
   "status": "verified",
   "sourceRefs": ["exoticcarhacks-guide"],
   "evidence": [
    { "ref": "exoticcarhacks-guide", "quote": "every 1 yr or 10,000 miles there is a about a $1,000 service" }
   ]
  },
  {
   "section": "history",
   "claimText": "MotorWeek's period US test of a 2005 Touchtronic DB9 coupe recorded a 0-60 mph time of 4.8 seconds and noted that the manual would cut a few tenths more.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["motorweek-2005"],
   "evidence": [
    { "ref": "motorweek-2005", "quote": "Go for the manual and you'll lop off a few tenths more." }
   ]
  }
 ]
};
