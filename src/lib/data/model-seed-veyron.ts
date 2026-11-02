/**
 * Researched model draft - Bugatti Veyron 16.4 (2005-2015), coupe, Grand Sport, Super Sport and Grand Sport Vitesse, US market.
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedVeyron = {
 "slug": "bugatti/veyron",
 "make": "Bugatti",
 "model": "Veyron",
 "generation": "16.4, coupe to Grand Sport Vitesse",
 "generationCode": null,
 "trim": null,
 "yearStart": 2005,
 "yearEnd": 2015,
 "bodyStyles": [
  "2-door coupe (fixed roof): Veyron 16.4 and Super Sport",
  "2-door targa-roof roadster: Grand Sport and Grand Sport Vitesse"
 ],
 "engines": [
  "7,993 cc quad-turbocharged W16 (four banks, 16 cylinders), about 987 hp (Bugatti rates it 1,001 PS; RM Sotheby's prints 986 and 987 hp, Edmunds prints 1,001 hp) and 922 lb-ft, in the Veyron 16.4 coupe and the Grand Sport",
  "Same W16 in 1,200 hp form, 1,106 lb-ft (1,500 Nm) of torque, in the Super Sport and the Grand Sport Vitesse; maximum output at 6,400 rpm per Bugatti. The Geneva 2015 release states the figure as 1,200 PS, which would be 1,184 hp"
 ],
 "productionTotal": 450,
 "productionNotes": "Bugatti's own figures and every secondary source consulted here agree on a total of 450 cars, so productionTotal is given. Bugatti's Geneva 2015 release says the Veyron is limited to 450 units, all sold, and breaks that into 300 coupes and 150 open-top cars. An earlier Bugatti release, issued when Grand Sport Vitesse production began, says the series of coupes limited to 300 units was sold in June 2011, and that the Grand Sport and Vitesse were limited to 150 combined, with 69 ordered at that time. Wikipedia's variant table splits the 450 into 252 original coupes, 48 Super Sports, 58 Grand Sports and 92 Grand Sport Vitesses. Those sum to Bugatti's 300 and 150 groupings, and two other pages back individual counts: the RM Sotheby's Miami 2026 lot describes a 2006 car as the 13th of 252 Veyron 16.4 coupes, and Motor1 says the last Super Sport was number 48 of 48. The 58 and 92 split of the open cars rests on Wikipedia and on RM Sotheby's Paris 2023 catalog copy for one Grand Sport; no Bugatti page fetched here gives it. RM's Paris text uses Grand Sport for both open cars: 150 built from 2009 to 2015, 58 in Grand Sport form and 92 as the Vitesse. Per-year figures are looser. RM Sotheby's Monaco 2012 catalog copy calls a 2006 car one of 44 built in 2006. Wikipedia's yearly table is a count of units sold, not built, and totals 407 through 2013, so it does not reconcile to 450 and is not used as a build count. No source consulted gives a US-only count. The Miami lot calls its 2006 car the second US-specification example produced, which says the US cars were a distinct build from the first few, and nothing more. No US model-year 2005 sale was found in the sources fetched.",
 "notableTrims": [
  {
   "name": "Veyron 16.4 coupe",
   "note": "The original car, 252 built per Wikipedia and the RM Sotheby's Miami 2026 lot. Edmunds lists the 2006 US car at about $1,400,000 and the 2008 car at about $1,500,000, both including destination."
  },
  {
   "name": "Pur Sang (2008)",
   "note": "Unpainted aluminum and carbon-fiber exterior that, per Edmunds, cuts curb weight by a couple hundred pounds. Edmunds listed it from $2,065,902 and reported all five 2008 cars spoken for since September 2007."
  },
  {
   "name": "Grand Sport (2009 to 2015)",
   "note": "The targa-roof car. RM Sotheby's describes the roof as exclusive to the Grand Sport and Grand Sport Vitesse, with a top speed limit with the roof off. Sold in the same 150-car pool as the Vitesse."
  },
  {
   "name": "Super Sport",
   "note": "1,200 hp coupe, 48 built per Motor1 and Wikipedia. The record car averaged 267.856 mph at Ehra-Lessien; customer cars are limited to 258 mph."
  },
  {
   "name": "Grand Sport Vitesse (2013 to 2015)",
   "note": "The 1,200 hp open car, described by Bugatti as the fastest production roadster ever at 255 mph. Bugatti priced it just under $2,500,000."
  },
  {
   "name": "Legend editions",
   "note": "Named-driver Vitesse variants. classic.com records a Jean-Pierre Wimille Legend Edition at $2,640,000 in August 2022 and a Meo Costantini car at $1,875,000 in August 2020."
  }
 ],
 "specs": {
  "layout": "Mid-engine, four-wheel drive",
  "engine": "7,993 cc quad-turbocharged W16, 16 cylinders (RM Sotheby's Monaco 2012); Bugatti calls it 8-liter",
  "power": "About 987 hp (1,001 PS) for the coupe and Grand Sport; Edmunds prints 1,001 hp; 1,200 hp for the Super Sport and Vitesse per Bugatti, at 6,400 rpm",
  "torque": "922 lb-ft for the coupe per Edmunds; 1,106 lb-ft (1,500 Nm) for the Super Sport and Vitesse",
  "transmission": "Seven-speed dual-clutch sequential gearbox (Edmunds); steering wheel paddles",
  "weight": "Curb weight of nearly 4,200 lb for the 2006 coupe per Edmunds; the Pur Sang is a couple hundred pounds lighter per Edmunds",
  "acceleration": "0-60 mph in 2.6 seconds per Road & Track as quoted by RM Sotheby's; Edmunds says about 2.8 seconds; Bugatti claims 2.6 seconds to 62 mph for the Vitesse",
  "quarter_mile": "10.1 seconds (Road & Track Australia data page) or 10.2 seconds at 143.6 mph (Road & Track magazine as quoted by RM Sotheby's); sources differ",
  "top_speed": "252 mph claimed for the coupe in a special mode (Edmunds); about 253.8 mph observed on an early car (Road & Track Australia); Vitesse 255 mph claimed, limited to 233 mph in normal mode (Bugatti); Super Sport record average 267.856 mph, customer limit 258 mph",
  "epa_economy": "8 mpg city, 14 mpg highway, 10 mpg combined, as listed by Edmunds for the 2006 and 2008 model years",
  "us_price_new": "About $1,400,000 (2006) and about $1,500,000 (2008) per Edmunds, with destination; Vitesse just under $2,500,000 per Bugatti",
  "production": "450 total: 300 coupes and 150 open cars (Bugatti); 252 coupe, 48 Super Sport, 58 Grand Sport, 92 Vitesse (Wikipedia)",
  "chassis": "Chassis reinforced for the targa roof on the Grand Sport and Vitesse, with a slightly taller windshield (RM Sotheby's Paris 2023)",
  "roof": "Targa roof on Grand Sport and Vitesse; Grand Sport limited to 229 mph with the roof removed (RM Sotheby's Paris 2023)"
 },
 "summary": "The Veyron 16.4 was sold as a closed run of 450 cars, in four forms: the original coupe, the targa-roof Grand Sport, the 1,200 hp Super Sport and the 1,200 hp Grand Sport Vitesse. Bugatti's own releases split the run into 300 coupes, the last sold in June 2011, and 150 open cars, and the final car, a Grand Sport Vitesse called La Finale, was shown in Geneva in March 2015 as number 450. Wikipedia's variant table counts 252 original coupes, 48 Super Sports, 58 Grand Sports and 92 Vitesses. In the US, Edmunds lists the 2006 car at about $1,400,000 and the 2008 car at about $1,500,000, and Bugatti priced the Vitesse at just under $2,500,000. EPA rated it 8 mpg city and 14 highway. The coupe makes about 987 hp (1,001 PS), though Edmunds prints it as 1,001 hp; sources also disagree on the top speed and the quarter mile. As of November 2026 classic.com's market benchmark is $1,826,329 for the coupe and $2,461,525 for the Grand Sport, and a Florida-delivered 2006 coupe sold for $2,122,500 at RM Sotheby's Miami in 2026.",
 "history": "## Why the car exists\n\nNothing in the sources consulted here records why Volkswagen Group paid for the Veyron, so this page does not guess at it. What the sources do show is a car built to a fixed run and priced above everything else on sale. Bugatti told the press in its Vitesse release that the coupes were limited to 300 units and the open cars to 150 combined, and in March 2015 it said all 450 planned cars had been sold. The headline was always speed. Edmunds reports Bugatti's top speed as 252 mph, available only in a special mode activated with a separate key; the rest of the time the car is held back. The Vitesse release says the same of the open car: 255 mph claimed, electronically limited to 233 mph in normal mode.\n\n## The coupe, 2006 to 2011\n\nEdmunds lists the 2006 US car as a single two-door coupe, all-wheel drive, with a seven-speed sequential gearbox on paddles and a base price near $1,400,000 including destination. Edmunds' 2008 review calls the gearbox a beefed-up seven-speed version of the Volkswagen and Audi dual-clutch sequential unit. The RM Sotheby's Miami 2026 catalog describes a Florida-delivered 2006 car as the 13th of 252 coupes and the second US-specification example built, and RM's Monaco 2012 catalog says 44 Veyrons were built in 2006. Period testing is thin in what could be fetched: Edmunds says published road tests put 0-60 mph at about 2.8 seconds, while Road & Track magazine, as quoted by RM, measured 2.6 seconds and a quarter mile of 10.2 seconds at 143.6 mph. Road & Track Australia's data page gives 10.1 seconds.\n\nBy 2008 Edmunds listed the coupe at about $1,500,000 and the Pur Sang at $2,065,902. The Pur Sang left its aluminum and carbon-fiber body unpainted and used the same materials in the cabin, which Edmunds says took a couple hundred pounds off, and all five 2008 cars were reported spoken for from September 2007.\n\n## The Grand Sport, 2009 to 2015\n\nThe open car arrived with a targa roof. RM Sotheby's says Bugatti reinforced the chassis and fitted a slightly taller windshield to carry it, and that the top speed is limited to 229 mph with the roof off. Bugatti's Vitesse release says the Grand Sport and Vitesse together were limited to 150 cars. Wikipedia's variant table and RM's Paris catalog both count 58 Grand Sports and 92 Vitesses.\n\n## Super Sport and Vitesse\n\nThe Super Sport raised output to 1,200 hp and 1,106 lb-ft. In its record run it averaged 267.856 mph, and customer cars are electronically limited to 258 mph. Motor1 puts the run at 48 Super Sports. The Grand Sport Vitesse carried the same engine in the open car: Bugatti says maximum output arrives at 6,400 rpm, quotes 255 mph and priced it just under $2,500,000. Bugatti claimed 0-62 mph in 2.6 seconds.\n\n## The last car\n\nThe last of the 450 was a Grand Sport Vitesse, La Finale, chassis number 450, shown at Geneva in March 2015. Bugatti's Geneva release rates its W16 at about 1,184 hp (1,200 PS), where the Vitesse release gives 1,200 hp, a difference of about 16 hp that the factory text does not address.",
 "marketNotes": "As of November 2026 classic.com lists a market benchmark of $1,826,329 for the Veyron 16.4 coupe (2006 to 2011), $2,461,525 for the Grand Sport. The Vitesse benchmark reads $2,640,000 on classic.com's model-line page and $2,530,714 on its own Vitesse page, so the figure moves with the filter. Recorded coupe sales run from $1,215,000 for a 2006 car in Monterey County on August 15, 2024 through $1,490,000 for a 2006 car in New York on December 8, 2023, $1,545,000 at Pebble Beach on August 19, 2023, $1,600,000 for a 2008 car in Nevada on November 17, 2023 and $2,205,000 for a 2010 car in Las Vegas on October 31, 2025. A 2008 Mansory-modified car sold for $2,365,000 on January 17, 2026. RM Sotheby's sold the Florida-delivered 2006 coupe at its Miami 2026 sale for $2,122,500 with 3,139 miles; the lot page does not say whether the figure includes buyer's premium. On the open cars, classic.com lists a 2010 Grand Sport 'Sang Bleu' at $3,085,000 in Miami on March 2, 2024, and a 2015 Grand Sport Vitesse at $2,640,000 in Indianapolis on May 17, 2025, matching the $2,640,000 a Jean-Pierre Wimille Legend Edition made in August 2022. A Meo Costantini Vitesse made $1,875,000 in August 2020. Classic.com's Grand Sport and Vitesse pages each show only three recorded sales, so those benchmarks rest on very few cars.",
 "whatToLookFor": "The first question on any car is which of the four it is, and which edition. The Pur Sang, the Legend cars and the Sang Bleu carry their own premiums in the recorded sales, and a car described as a Legend or Pur Sang should be matched to Bugatti's build record. For the open cars, the targa roof system is the part that differs: RM Sotheby's notes Bugatti reinforced the chassis for it and limited the Grand Sport to 229 mph with the roof removed, so a roof-off history is a question about the car's use rather than a cosmetic one. Service records carry more weight than mileage. The 2006 car RM sold in Miami in 2026 came with service invoices from 2009, an annual service in September 2023 and four new tires in May 2022, which is the kind of paper trail that separates one car from another. Bugatti recommends replacing the fluids annually, the tires every two to three years whether or not they are worn, and the wheels every 10,000 miles, according to the owner-video figures The Drive relays, so the dates on the wheels and tires matter. NHTSA's three 2016 campaigns cover the underbody lifting plates, the battery cable at the alternator and the fuel gauge, and whether each was completed is a records question. Claimed output is another: sources print 986, 987 and 1,001 hp for the same coupe, and a spec sheet that does not say whether it means hp or PS cannot be compared with another. Recorded 2008 sales run from $1,050,000 in August 2019 to $2,365,000 in January 2026, as of November 2026.",
 "commonProblems": "The documented problems are expense and three recalls rather than failure patterns. NHTSA lists three campaigns, all reported in 2016: 16V166000 (2006-2010 Veyron, 2010-2012 Grand Sport, 2011-2013 Super Sport), where underbody aluminum reference plates used when lifting the vehicle may corrode and detach; 16V199000 (2006-2008 Veyron built October to December 2006), where the positive battery cable and its connection to the alternator may corrode; and 16V200000 (2006-2010 Veyron, 2010-2011 Grand Sport), where the fuel tank gauge may indicate more fuel than the tank holds. Running cost is the larger story. The Drive, relaying figures from an owner's video and Bugatti's recommendations, puts the annual fluid change at about $25,000, a set of Michelin tires at $38,000 every two to three years, and replacement wheels at $50,000 every 10,000 miles. Those are second-hand figures, and the same article quotes repair costs from Bugatti's EPA certification application relayed by Motor1: one air cooler costs $9,000 in parts and $2,000 in labor, one turbocharger $6,400 with $9,000 in labor to do two of the four at once, and the fuel tank $42,000 of which $22,000 is labor. The Drive also quotes an unsourced camshaft figure of about $21,000 in labor for an $800 part, which this page does not rely on. None of these figures comes from a Bugatti price list fetched here.",
 "valueTrajectory": "The Veyron's value has run the other way from most supercars of its age. Edmunds listed the 2006 car at about $1,400,000 and the 2008 car at about $1,500,000, and as of November 2026 classic.com's coupe benchmark of $1,826,329 sits above both. The low in the recorded 2008 sales is $1,050,000 on August 16, 2019; the same page shows $1,375,000 in January 2014, $1,545,000 in August 2021, $1,765,000 in June 2024 and $2,365,000 in January 2026. The Florida 2006 coupe at RM Sotheby's Miami 2026 made $2,122,500 against the $1,215,000 a 2006 car made in August 2024, a gap that mileage (3,139 miles) and documentation may explain, though the sources do not say. The open cars trade higher: the Grand Sport benchmark is $2,461,525 and the Vitesse benchmark $2,530,714 on its own page, with the best recorded results at $3,085,000 for the 2010 Sang Bleu and $2,640,000 for two Vitesses. The sample is small. Classic.com shows three sales each for the Grand Sport and the Vitesse, eight for the 2008 coupe and eleven on the model-line page, against 450 cars built, so one edition or one car can move a benchmark.",
 "overallConfidence": "medium",
 "sources": [
  {
   "ref": "bugatti-vitesse-pr",
   "title": "Production begins for Bugatti Veyron 16.4 Grand Sport Vitesse",
   "url": "https://newsroom.bugatti.com/press-releases/production-begins-for-bugatti-veyron-16-4-grand-sport-vitesse",
   "publisher": "Bugatti Newsroom",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Coupe series limited to 300 units, sold June 2011; Grand Sport and Vitesse limited to 150 combined with 69 ordered at release; Vitesse 1,200 hp at 6,400 rpm, 1,500 Nm; 255 mph claimed, 233 mph normal-mode limit; 0-62 mph in 2.6 seconds; just under $2.5 million USD."
  },
  {
   "ref": "bugatti-geneva-2015",
   "title": "Geneva International Motor Show 2015 (Veyron La Finale)",
   "url": "https://newsroom.bugatti.com/press-releases/geneva-international-motor-show-2015",
   "publisher": "Bugatti Newsroom",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Veyron limited to 450 units, all sold: 300 coupes and 150 open-top cars; last car is the Grand Sport Vitesse La Finale, chassis 450; engine stated as 1,200 PS and 1,500 Nm."
  },
  {
   "ref": "rm-paris-2023-gs",
   "title": "2009 Bugatti Veyron 16.4 Grand Sport (RM Sotheby's Paris 2023, Lot 185)",
   "url": "https://rmsothebys.com/auctions/pa23/lots/r0091-2009-bugatti-veyron-164-grand-sport",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Catalog copy: 987 horsepower, 408.47 km/h, 369 km/h with roof removed, targa roof exclusive to Grand Sport and Vitesse, 150 open cars 2009 to 2015 (58 Grand Sport, 92 Vitesse), one of 58 Grand Sports and 450 Veyrons. Built at Molsheim in 2009. Sale price not shown on the page."
  },
  {
   "ref": "rm-monaco-2012-2006",
   "title": "2006 Bugatti Veyron 16.4 (RM Sotheby's Monaco 2012, Lot 327)",
   "url": "https://rmsothebys.com/auctions/mc12/lots/r380-2006-bugatti-veyron-164/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "One of 44 built in 2006; 7,993 cc, Road & Track 0-60 mph in 2.6 seconds and quarter mile 10.2 seconds at 143.6 mph; top speed given as 253.81 mph in listing and 253.19 mph in the body text; about $1.25 million new. First delivered to the UK, not a US sale; the lot was not sold."
  },
  {
   "ref": "rm-miami-2026-2006",
   "title": "2006 Bugatti Veyron 16.4 (RM Sotheby's Miami 2026, Lot 190)",
   "url": "https://rmsothebys.com/auctions/mi26/lots/r0078-2006-bugatti-veyron-164",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold $2,122,500; originally delivered to Florida; 3,139 miles; 13th of 252 coupes and second US-specification example; rated at 986 hp (1,000 PS), 253 mph; service invoices from 2009, September 2023 annual service, May 2022 tires. Sale date not on page."
  },
  {
   "ref": "edmunds-2006",
   "title": "2006 Bugatti Veyron 16.4 Review",
   "url": "https://edmunds.com/bugatti/veyron-164/2006/review",
   "publisher": "Edmunds",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "US 2006 MSRP about $1,400,000 including destination; 1,001 hp at 6,000 rpm, 922 lb-ft at 2,200 rpm; EPA 8/14/10 mpg; nearly 4,200 lb; about 2.8 seconds to 60 mph; 252 mph in a separate-key mode."
  },
  {
   "ref": "edmunds-2008",
   "title": "2008 Bugatti Veyron 16.4 Review",
   "url": "https://www.edmunds.com/bugatti/veyron-164/2008/review",
   "publisher": "Edmunds",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "US 2008 MSRP about $1,500,000 including destination; Pur Sang from $2,065,902 with unpainted aluminum and carbon-fiber body; 1,001 hp and 922 lb-ft; seven-speed dual-clutch gearbox; five Pur Sangs spoken for since September 2007."
  },
  {
   "ref": "nhtsa-2008",
   "title": "NHTSA recalls by vehicle: Bugatti Veyron, 2008",
   "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=BUGATTI&model=VEYRON&modelYear=2008",
   "publisher": "NHTSA",
   "sourceType": "government",
   "reliability": "high",
   "notes": "Three campaigns returned for the 2008 model year: 16V166000 (underbody reference plates; also 2006-2010 Veyron, 2010-2012 Grand Sport, 2011-2013 Super Sport), 16V199000 (positive battery cable; 2006-2008 Veyron), 16V200000 (fuel gauge; 2006-2010 Veyron, 2010-2011 Grand Sport), reported March and April 2016."
  },
  {
   "ref": "thedrive-maintenance",
   "title": "Bugatti Veyron Basic Maintenance Can Cost Upwards of $50,000 a Year",
   "url": "https://www.thedrive.com/news/31277/bugatti-veyron-basic-maintenance-can-cost-upwards-of-50000-a-year",
   "publisher": "The Drive",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Yearly fluid flush $25,000, tires $38,000 per set every two to three years, wheels $50,000 every 10,000 miles, from an owner's YouTube video; parts and labor for coolers, turbos and fuel tank from the EPA certification application via Motor1."
  },
  {
   "ref": "classic-veyron",
   "title": "Bugatti Veyron market overview",
   "url": "https://www.classic.com/m/bugatti/veyron",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "As of November 2026: coupe, Grand Sport and Vitesse benchmarks and eleven dated sold results including 2006 sales of $1,215,000 (Aug 15, 2024), $1,490,000 (Dec 8, 2023), $1,545,000 (Aug 19, 2023), 2008 at $1,600,000 (Nov 17, 2023) and 2010 at $2,205,000 (Oct 31, 2025). Platform not named."
  },
  {
   "ref": "classic-gsv",
   "title": "Bugatti Veyron Grand Sport Vitesse market data",
   "url": "https://classic.com/m/bugatti/veyron/grand-sport-vitesse",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "As of November 2026: benchmark $2,530,714, three recorded sales (2015 $2,640,000 on May 17, 2025; Wimille Legend $2,640,000 on Aug 20, 2022; Meo Costantini $1,875,000 on Aug 14, 2020)."
  },
  {
   "ref": "classic-gs",
   "title": "Bugatti Veyron Grand Sport market data",
   "url": "https://classic.com/m/bugatti/veyron/grand-sport",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "As of November 2026: benchmark $2,461,525, three recorded sales including the 2010 Sang Bleu at $3,085,000 on Mar 2, 2024. Two of the three sales are in euros and pounds and are not quoted."
  },
  {
   "ref": "classic-2008",
   "title": "Bugatti Veyron 2008 market data",
   "url": "https://www.classic.com/m/bugatti/veyron/year-2008",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "As of November 2026: eight recorded sales of 2008 cars from $1,050,000 (Aug 16, 2019) to $2,365,000 (Jan 17, 2026, a Mansory car), $1,375,000 (Jan 18, 2014), $1,545,000 (Aug 14, 2021), $1,765,000 (Jun 1, 2024)."
  },
  {
   "ref": "motor1-ss-reveal",
   "title": "Bugatti Veyron 16.4 Super Sport revealed - sets 268 mph land speed world record",
   "url": "https://www.motor1.com/news/22591/bugatti-veyron-164-super-sport-revealed-sets-268-mph-land-speed-world-record/",
   "publisher": "Motor1",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Super Sport 1,200 hp and 1,500 Nm (1,106 lb-ft); average 431.072 km/h (268 mph) on July 3; customer cars limited to 258 mph."
  },
  {
   "ref": "motor1-last-ss",
   "title": "The Very Last Bugatti Veyron Super Sport Comes Up For Sale",
   "url": "https://www.motor1.com/news/511596/last-veyron-super-sport-sale/",
   "publisher": "Motor1",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Only 48 Super Sports built; the car offered is the last, 1,252 miles; quotes the record as 267.856 mph. Listed in the UK, so no US detail."
  },
  {
   "ref": "roadandtrack-au-2008",
   "title": "2008 Bugatti Veyron 16.4",
   "url": "https://roadandtrack.com.au/2008-Bugatti-Veyron-16-4~974",
   "publisher": "Road & Track Australia",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Listing data page: 1,001 PS, 922 lb-ft, quarter mile 10.1 seconds, 408.47 km/h observed on an early production car, launch price about 1,000,000 euros. A dealer-style listing, not a test."
  },
  {
   "ref": "wikipedia-veyron",
   "title": "Bugatti Veyron",
   "url": "https://en.wikipedia.org/wiki/Bugatti_Veyron",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Pointer only. Variant table: 252 coupes, 58 Grand Sports, 48 Super Sports, 92 Vitesses, 450 total; yearly sales table totals 407 units through 2013."
  }
 ],
 "claims": [
  {
   "section": "production",
   "claimText": "Bugatti states the Veyron was limited to 450 units, all of which were sold, and Wikipedia's variant table also totals 450.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "bugatti-geneva-2015",
    "wikipedia-veyron"
   ],
   "evidence": [
    {
     "ref": "bugatti-geneva-2015",
     "quote": "The Veyron is limited to 450 units, which have now all been sold."
    },
    {
     "ref": "wikipedia-veyron",
     "quote": "Production amounted to 450 units in a span of over 10 years."
    }
   ]
  },
  {
   "section": "production",
   "claimText": "Bugatti divides the 450 into 300 coupes and 150 open-top cars; its earlier Vitesse release says the coupe series limited to 300 sold out in June 2011 and the Grand Sport and Vitesse were limited to 150 combined.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "bugatti-geneva-2015",
    "bugatti-vitesse-pr"
   ],
   "evidence": [
    {
     "ref": "bugatti-geneva-2015",
     "quote": "All of the planned 450 vehicles have now been sold: 300 coupés and 150 open-top super sports cars."
    },
    {
     "ref": "bugatti-vitesse-pr",
     "quote": "limited to 150 units combined, of which so far 69 have been ordered"
    }
   ]
  },
  {
   "section": "production",
   "claimText": "RM Sotheby's describes a 2006 car as the 13th of 252 coupes and the second US-specification example, and Motor1 reports 48 Super Sports, which together make Bugatti's 300 coupes.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "rm-miami-2026-2006",
    "motor1-last-ss",
    "bugatti-geneva-2015"
   ],
   "evidence": [
    {
     "ref": "rm-miami-2026-2006",
     "quote": "The 13th of 252 Bugatti Veyron 16.4 coupes and the second US-specification example produced"
    },
    {
     "ref": "motor1-last-ss",
     "quote": "With only 48 units ever built"
    },
    {
     "ref": "bugatti-geneva-2015",
     "quote": "300 coupés and 150 open-top super sports cars"
    }
   ]
  },
  {
   "section": "production",
   "claimText": "Bugatti limited the Grand Sport and Vitesse to 150 cars combined, and both RM Sotheby's Paris catalog and Wikipedia's variant table split them into 58 Grand Sports and 92 Vitesses.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "rm-paris-2023-gs",
    "bugatti-vitesse-pr",
    "wikipedia-veyron"
   ],
   "evidence": [
    {
     "ref": "rm-paris-2023-gs",
     "quote": "One of 58 examples of the Veyron Grand Sport; one of 450 total Veyron production"
    },
    {
     "ref": "bugatti-vitesse-pr",
     "quote": "limited to 150 units combined, of which so far 69 have been ordered"
    },
    {
     "ref": "wikipedia-veyron",
     "quote": "Veyron 16.4 252 Veyron Grand Sport 58 Veyron Super Sport 48 Veyron Grand Sport Vitesse 92"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "Bugatti rated the original W16 at about 987 hp (1,001 PS). RM Sotheby's prints 987 hp and, for a US-specification car, 986 hp, while Edmunds labels the metric figure 1,001 hp.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "bugatti-geneva-2015",
    "rm-paris-2023-gs",
    "rm-miami-2026-2006",
    "edmunds-2008",
    "roadandtrack-au-2008"
   ],
   "evidence": [
    {
     "ref": "bugatti-geneva-2015",
     "quote": "which initially generated 1,001 PS, and an incredible 1,200 PS in later models."
    },
    {
     "ref": "rm-paris-2023-gs",
     "quote": "Powered by Bugatti’s phenomenal 8.0-litre, quad-turbocharged W-16 engine that delivers 987 horsepower"
    },
    {
     "ref": "rm-miami-2026-2006",
     "quote": "8.0-liter quad-turbocharged 16-cylinder engine rated at 986 hp"
    },
    {
     "ref": "edmunds-2008",
     "quote": "Its 1,001 hp and 922 lb-ft of torque are delivered to all four wheels."
    },
    {
     "ref": "roadandtrack-au-2008",
     "quote": "features a W16 quad-turbo 8.0L engine developing 1,001PS (736kW) and 1,250Nm (922lb.ft)"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "Bugatti rates the Vitesse at 1,200 hp reached at 6,400 rpm, with Motor1 giving the Super Sport 1,200 hp and 1,106 lb-ft, while Bugatti's Geneva 2015 release states the same engine as 1,200 PS, about 1,184 hp.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "bugatti-vitesse-pr",
    "bugatti-geneva-2015",
    "motor1-ss-reveal"
   ],
   "conflictNote": "Bugatti's Vitesse release labels the 1,200 figure hp and Motor1 does the same for the Super Sport, while Bugatti's Geneva 2015 release labels it PS. Converting that metric figure gives about 1,184 hp. Which unit Bugatti intended is not resolved by any source consulted here.",
   "evidence": [
    {
     "ref": "bugatti-vitesse-pr",
     "quote": "The maximum output (1,200 hp) is reached at 6,400 rpm."
    },
    {
     "ref": "bugatti-geneva-2015",
     "quote": "It draws its sheer force from a 1,200 PS, 8-litre, W16 engine which provides a breathtaking maximum torque of 1,500 Nm."
    },
    {
     "ref": "motor1-ss-reveal",
     "quote": "1,200-hp (882 kW) and 1,500 Nm (1106 lb-ft) of torque"
    }
   ]
  },
  {
   "section": "market",
   "claimText": "Edmunds lists the 2006 US Veyron at about $1,400,000 and the 2008 car at about $1,500,000 including destination, RM Sotheby's catalog copy quotes about $1.25 million new, and Bugatti priced the Vitesse at just under $2.5 million.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "edmunds-2006",
    "edmunds-2008",
    "rm-monaco-2012-2006",
    "bugatti-vitesse-pr",
    "roadandtrack-au-2008"
   ],
   "conflictNote": "Edmunds gives about $1,400,000 for 2006 and about $1,500,000 for 2008, both with destination. RM Sotheby's Monaco copy says about $1.25 million each without naming a market or year. Road & Track Australia says launch pricing was around 1,000,000 euros. No US dealer price sheet was found, so the US launch price is not resolved by any source consulted here.",
   "evidence": [
    {
     "ref": "edmunds-2006",
     "quote": "Including destination charge, it arrives with a Manufacturer's Suggested Retail Price (MSRP) of about $1,400,000."
    },
    {
     "ref": "edmunds-2008",
     "quote": "Including destination charge, it arrives with a Manufacturer's Suggested Retail Price (MSRP) of about $1,500,000."
    },
    {
     "ref": "roadandtrack-au-2008",
     "quote": "Pricing at launch was around €1,000,000"
    },
    {
     "ref": "rm-monaco-2012-2006",
     "quote": "the most expensive, at about $1.25 million each"
    },
    {
     "ref": "bugatti-vitesse-pr",
     "quote": "Costing just under $2.5 million USD"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "Edmunds gives the coupe's claimed top speed as 252 mph in a special mode, RM Sotheby's Miami says 253 mph, Road & Track Australia reports an early car observed at about 253.8 mph, and Bugatti gives 255 mph for the Vitesse with a normal-mode limit of 233 mph.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "edmunds-2006",
    "rm-miami-2026-2006",
    "roadandtrack-au-2008",
    "bugatti-vitesse-pr"
   ],
   "conflictNote": "Edmunds states 252 mph as Bugatti's claim for the coupe. RM Sotheby's Miami says 253 mph for a 2006 car. Road & Track Australia gives about 253.8 mph observed on an early production car. Bugatti's Vitesse release states 255 mph for the open car. These describe different cars and test conditions, and no source consulted here reconciles them.",
   "evidence": [
    {
     "ref": "edmunds-2006",
     "quote": "Bugatti says top speed is 252 mph, but that's only allowed in a special mode activated via a separate key."
    },
    {
     "ref": "rm-miami-2026-2006",
     "quote": "capable of an astonishing top speed of 253 mph"
    },
    {
     "ref": "roadandtrack-au-2008",
     "quote": "officials observed a early production Veyron reaching 408.47km/h"
    },
    {
     "ref": "bugatti-vitesse-pr",
     "quote": "The top speed of 410 km/h (255 mph) makes the four-wheel drive Vitesse the fastest production roadster ever."
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "Road & Track Australia's data page gives a quarter mile of 10.1 seconds, while RM Sotheby's, quoting Road & Track magazine, gives 10.2 seconds at 143.6 mph and 0-60 mph in 2.6 seconds against Edmunds' about 2.8 seconds from published tests.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "roadandtrack-au-2008",
    "rm-monaco-2012-2006",
    "edmunds-2006"
   ],
   "conflictNote": "Road & Track Australia's data page gives 10.1 seconds. RM Sotheby's, quoting Road & Track, gives 10.2 seconds at 143.6 mph and 2.6 seconds to 60 mph. Edmunds says published tests indicate about 2.8 seconds to 60 mph. The tests are different cars, and the original Road & Track article was not retrieved, so the figures are not resolved by any source consulted here.",
   "evidence": [
    {
     "ref": "roadandtrack-au-2008",
     "quote": "quarter mile time of 10.1seconds and up to 1.4G lateral acceleration"
    },
    {
     "ref": "rm-monaco-2012-2006",
     "quote": "Road & Track magazine measured 0–60 mph in just 2.6 seconds and the quarter mile in 10.2 seconds at 143.6 mph."
    },
    {
     "ref": "edmunds-2006",
     "quote": "Published road tests have indicated that the Veyron takes about 2.8 seconds to reach 60 mph."
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "Edmunds describes the transmission as a beefed-up seven-speed version of the Volkswagen and Audi dual-clutch sequential gearbox, delivering 922 lb-ft to all four wheels.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "edmunds-2008"
   ],
   "evidence": [
    {
     "ref": "edmunds-2008",
     "quote": "beefed-up seven-speed version of VW/Audi's excellent dual-clutch sequential gearbox"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "Edmunds lists the Veyron at 8 mpg city, 14 mpg highway and 10 mpg combined for both the 2006 and 2008 model years.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "edmunds-2006",
    "edmunds-2008"
   ],
   "evidence": [
    {
     "ref": "edmunds-2006",
     "quote": "10 Combined MPG (8 City/14 Highway)"
    },
    {
     "ref": "edmunds-2008",
     "quote": "10 Combined MPG (8 City/14 Highway)"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "Edmunds gives the 2006 coupe a curb weight of nearly 4,200 lb, and says the 2008 Pur Sang's unpainted aluminum and carbon-fiber body reduces curb weight by a couple hundred pounds.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "edmunds-2006",
    "edmunds-2008"
   ],
   "evidence": [
    {
     "ref": "edmunds-2006",
     "quote": "the car feels surprisingly agile given its curb weight of nearly 4200 pounds"
    },
    {
     "ref": "edmunds-2008",
     "quote": "reduces the car's curb weight by a couple hundred pounds"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "RM Sotheby's lists the coupe engine as a 7,993 cc quad-turbocharged W16 and says 44 Veyrons were built in 2006.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "rm-monaco-2012-2006"
   ],
   "evidence": [
    {
     "ref": "rm-monaco-2012-2006",
     "quote": "1001 bhp, 7,993 cc DOHC quad-turbocharged fuel-injected W-16 engine"
    },
    {
     "ref": "rm-monaco-2012-2006",
     "quote": "One of only about 300 Veyrons sold to date; one of 44 built in 2006"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "Bugatti claims the Vitesse reaches 62 mph in 2.6 seconds, 255 mph at top speed, and is limited to 233 mph in normal mode.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "bugatti-vitesse-pr"
   ],
   "evidence": [
    {
     "ref": "bugatti-vitesse-pr",
     "quote": "These figures allow the car to reach 100 km/h (62 mph) from standing in unbelievable 2.6 seconds."
    },
    {
     "ref": "bugatti-vitesse-pr",
     "quote": "the Vitesse is electronically limited to 375 km/h (233 mph)"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The Super Sport averaged 267.856 mph in its record run and customer cars are electronically limited to 258 mph.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "motor1-ss-reveal",
    "motor1-last-ss"
   ],
   "evidence": [
    {
     "ref": "motor1-ss-reveal",
     "quote": "will be electronically limited to 415 km/h (258 mph)"
    },
    {
     "ref": "motor1-last-ss",
     "quote": "267.856 miles per hour (431.072 kilometers per hour)"
    }
   ]
  },
  {
   "section": "problems",
   "claimText": "NHTSA lists three 2016 campaigns: underbody reference plates that may corrode and detach (2006-2010 Veyron, 2010-2012 Grand Sport, 2011-2013 Super Sport), a positive battery cable and alternator connection that may corrode (2006-2008 Veyron), and a fuel tank gauge that may overstate fuel (2006-2010 Veyron, 2010-2011 Grand Sport).",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "nhtsa-2008"
   ],
   "evidence": [
    {
     "ref": "nhtsa-2008",
     "quote": "the underbody aluminum reference plates used when lifting the vehicle may corrode and detach from the vehicle"
    },
    {
     "ref": "nhtsa-2008",
     "quote": "the positive battery (B+) cable and the connection to the alternator may corrode"
    },
    {
     "ref": "nhtsa-2008",
     "quote": "the fuel tank gauge may indicate that there is more fuel in the tank than there actually is"
    },
    {
     "ref": "nhtsa-2008",
     "quote": "2010-2012 Veyron Grand Sport vehicles manufactured September 29, 2009, to October 14, 2014"
    },
    {
     "ref": "nhtsa-2008",
     "quote": "2011-2013 Veyron Super Sport vehicles manufactured February 18, 2011, to August 17, 2012"
    },
    {
     "ref": "nhtsa-2008",
     "quote": "model year 2006-2008 Veyron vehicles manufactured October 3, 2006, to December 22, 2006"
    }
   ]
  },
  {
   "section": "problems",
   "claimText": "The Drive relays maintenance costs from an owner's video as a yearly fluid flush of $25,000, tires at $38,000 a set every two to three years, and wheels at $50,000 every 10,000 miles, which it attributes to Bugatti's recommendations.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "thedrive-maintenance"
   ],
   "evidence": [
    {
     "ref": "thedrive-maintenance",
     "quote": "The required yearly flush of all vehicle fluids alone will set you back $25,000."
    },
    {
     "ref": "thedrive-maintenance",
     "quote": "Bugatti recommends swapping these tires every two to three years whether they need to or not to the tune of $38,000 a set"
    },
    {
     "ref": "thedrive-maintenance",
     "quote": "the manufacturer recommends replacing them every 10,000 miles for a cost of $50,000"
    }
   ]
  },
  {
   "section": "problems",
   "claimText": "Repair costs from Bugatti's EPA certification application, relayed by The Drive from Motor1, put one air cooler at $9,000 in parts and $2,000 in labor and the fuel tank at $42,000 in total with $22,000 of it labor.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "thedrive-maintenance"
   ],
   "evidence": [
    {
     "ref": "thedrive-maintenance",
     "quote": "replacing one of the two air coolers is $9,000 for parts and $2,000 in labor"
    },
    {
     "ref": "thedrive-maintenance",
     "quote": "The worst part to replace is the fuel tank, which will set you back a total of $42,000"
    }
   ]
  },
  {
   "section": "market",
   "claimText": "As of November 2026 classic.com's market benchmarks are $1,826,329 for the coupe and $2,461,525 for the Grand Sport; the Vitesse reads $2,640,000 on the model-line page and $2,530,714 on its own page.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "classic-veyron",
    "classic-gs",
    "classic-gsv"
   ],
   "evidence": [
    {
     "ref": "classic-veyron",
     "quote": "Bugatti Veyron EB 16.4 2006 to 2011 CMB $1,826,329"
    },
    {
     "ref": "classic-gs",
     "quote": "Bugatti Veyron Grand Sport (2010 to 2015) CMB $2,461,525 The CLASSIC.COM Market Benchmark (CMB) represents a benchmark"
    },
    {
     "ref": "classic-veyron",
     "quote": "Bugatti Veyron Grand Sport Vitesse 2013 to 2015 CMB $2,640,000"
    },
    {
     "ref": "classic-gsv",
     "quote": "MARKET PRICES Bugatti Veyron Grand Sport Vitesse (2013 to 2015) CMB $2,530,714"
    }
   ]
  },
  {
   "section": "market",
   "claimText": "RM Sotheby's sold a Florida-delivered 2006 coupe with 3,139 miles for $2,122,500 at its Miami 2026 sale, with service invoices dating from 2009.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "rm-miami-2026-2006"
   ],
   "evidence": [
    {
     "ref": "rm-miami-2026-2006",
     "quote": "It was originally delivered to Florida and has been under present ownership since December 2023"
    },
    {
     "ref": "rm-miami-2026-2006",
     "quote": "Accompanied by service invoices dating from 2009"
    }
   ]
  },
  {
   "section": "market",
   "claimText": "As of November 2026 classic.com records three Grand Sport Vitesse sales, a 2015 car at $2,640,000 in Indianapolis on May 17, 2025, a Wimille Legend Edition at $2,640,000 and a Meo Costantini car at $1,875,000.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "classic-gsv"
   ],
   "evidence": [
    {
     "ref": "classic-gsv",
     "quote": "2014 Bugatti Veyron 16.4 Grand Sport Vitesse Jean-Pierre Wimille Legend Edition"
    },
    {
     "ref": "classic-gsv",
     "quote": "Sold $2,640,000 May 17, 2025"
    },
    {
     "ref": "classic-gsv",
     "quote": "2014 Bugatti Veyron 16.4 Grand Sport Vitesse 'Meo Costantini'"
    }
   ]
  },
  {
   "section": "market",
   "claimText": "The 2008 Pur Sang was priced from $2,065,902 in Edmunds' US listing, with all five cars reportedly spoken for since September 2007.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "edmunds-2008"
   ],
   "evidence": [
    {
     "ref": "edmunds-2008",
     "quote": "Pur Sang 2dr Coupe AWD (8.0L 16cyl Turbo 7AM) which starts at $2,065,902"
    },
    {
     "ref": "edmunds-2008",
     "quote": "All five 2008 Veyron Pur Sangs have reportedly been spoken for since September 2007."
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "RM Sotheby's says the Grand Sport's targa roof is exclusive to it and the Vitesse, with a top speed limit of 229 mph with the roof removed.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "rm-paris-2023-gs"
   ],
   "evidence": [
    {
     "ref": "rm-paris-2023-gs",
     "quote": "exclusive to the Grand Sport and Grand Sport Vitesse"
    },
    {
     "ref": "rm-paris-2023-gs",
     "quote": "electronically limited to 369 km/h with the roof removed"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "RM Sotheby's says Bugatti reinforced the chassis and fitted a slightly taller windshield to accommodate the open top of the Grand Sport.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "rm-paris-2023-gs"
   ],
   "evidence": [
    {
     "ref": "rm-paris-2023-gs",
     "quote": "Bugatti’s engineers reinforced the chassis and fitted the car with a marginally taller windscreen"
    }
   ]
  },
  {
   "section": "market",
   "claimText": "As of November 2026 classic.com records eight sales of 2008 coupes, from $1,050,000 on August 16, 2019 to $2,365,000 on January 17, 2026.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "classic-2008"
   ],
   "evidence": [
    {
     "ref": "classic-2008",
     "quote": "Sold $2,365,000 Jan 17, 2026"
    },
    {
     "ref": "classic-2008",
     "quote": "$1,050,000 Aug 16, 2019"
    }
   ]
  }
 ]
};
