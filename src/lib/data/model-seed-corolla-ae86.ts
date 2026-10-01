/**
 * Researched model draft - Toyota Corolla AE86 (US Corolla Sport SR5 and GT-S, 1984-1987).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedCorollaAe86 = {
 "slug": "toyota/corolla-ae86",
 "make": "Toyota",
 "model": "Corolla AE86",
 "generation": "E80 rear-drive coupes, US market",
 "generationCode": "AE86",
 "trim": "SR5 and GT-S, Sport Coupe and Liftback",
 "yearStart": 1984,
 "yearEnd": 1987,
 "bodyStyles": [
  "2-door notchback coupe (Sport Coupe), fixed roof, pop-up headlights",
  "3-door hatchback (Liftback), pop-up headlights"
 ],
 "engines": [
  "1,587 cc 4A-C SOHC inline four, two-barrel carburetor, 70 hp SAE net (SR5, 1984-1987 model years); one retrospective gives 87 hp from a 1.5 liter, see claims",
  "1,587 cc 4A-GE DOHC 16-valve inline four, US-spec mass-airflow fuel injection and T-VIS variable intake, 112 hp SAE net at 6,600 rpm and 97 lb-ft at 4,800 rpm, five-speed manual only (GT-S, 1985-1987 model years)"
 ],
 "productionTotal": null,
 "productionNotes": "Toyota has never published a US production or sales figure for the rear-drive Corolla, and the sources disagree by a wide margin. Sports Car Market's auction analyst wrote in 2020 that only about 4,000 GT-S models were sold in the US and at least 100,000 SR5 models, which would put the US total above 104,000. Jalopnik, reporting the research of the Irish AE86 specialists JuiceboxForYou, gives about 18,000 of these Corollas for all of North America out of a worldwide run somewhere north of 360,000, and states plainly that Juicebox is not sure of its own numbers because the sources vary and Toyota's paper records were reportedly thrown out. Wikipedia repeats the 360,000 global estimate and cites the same Jalopnik piece, so it is not an independent confirmation. These two US figures cannot both be right: 18,000 is smaller than the SR5 figure alone. Neither source explains its method, so no US total and no GT-S count is stated on this page. The worldwide figure is an estimate covering every AE86 Levin, Trueno and export Corolla, not the US cars. What the sources agree on is the US window. The rear-drive Corolla Sport arrived for the 1984 model year in SR5 trim only, the twin-cam GT-S was added for 1985 (Wikipedia dates it to August 1984), and classic.com records the GT-S for model years 1985 through 1987. Japanese production ran from May 1983, the launch date given by Toyota itself, to July 1987. List prices conflict as well: Ate Up With Motor gives $9,298 for the 1985 GT-S coupe and $9,538 for the three-door, while Consumer Guide puts GT-S hatchback pricing at around $9,915 without naming a model year, and eightiescars.com gives $9,381 for the 1984 SR5 Sport Coupe, which sits awkwardly against Ate Up With Motor's statement that the 1985 GT-S cost $1,200 to $1,300 more than the SR5.",
 "notableTrims": [
  {
   "name": "Corolla GT-S Liftback (1985-1987)",
   "note": "The three-door twin-cam car, the body most people picture when they say AE86 in America. Rear spoiler, front air dam and GT-S Twin Cam 16 decals. Toyota claimed a 0.35 drag coefficient against 0.37 for the coupe."
  },
  {
   "name": "Corolla GT-S Sport Coupe (1985-1987)",
   "note": "The two-door notchback with the same 112 hp 4A-GE, four-wheel discs and five-speed. Listed at $9,298 in 1985 per Ate Up With Motor, the cheapest way into a twin-cam Toyota that year."
  },
  {
   "name": "Corolla SR5 Sport Coupe and Liftback (1984-1987)",
   "note": "Same pop-up-headlight body with the carbureted 70 hp 4A-C, rear drum brakes, black bumpers and 13-inch tires. The only version with an optional automatic. Far more were sold, and many now carry swapped engines."
  },
  {
   "name": "GT-S with limited-slip differential",
   "note": "The limited-slip differential was an option on the US GT-S. Fantasy Junction's 1985 Liftback carried it on its original window sticker alongside air conditioning and a sunroof; an original sticker showing the LSD is what a buyer checks for."
  },
  {
   "name": "Sprinter Trueno and Corolla Levin (Japan only)",
   "note": "The home-market twins. The Trueno has pop-up lights, the Levin fixed lights, and the US car was based on the Trueno. Initial D's car is a Trueno. Neither was sold new in the US."
  }
 ],
 "specs": {
  "layout": "Front engine, rear-wheel drive, live rear axle",
  "chassis": "Steel unibody; MacPherson struts in front, live axle on four trailing links and a Panhard rod in the rear",
  "engine": "GT-S: 1,587 cc 4A-GE DOHC 16-valve inline four, mass-airflow fuel injection; SR5: 1,587 cc 4A-C SOHC, two-barrel carburetor",
  "power": "GT-S 112 hp SAE net at 6,600 rpm; SR5 70 hp SAE net",
  "torque": "GT-S 97 lb-ft at 4,800 rpm",
  "redline": "7,500 rpm (GT-S)",
  "transmission": "GT-S five-speed manual only; SR5 five-speed manual or optional four-speed automatic",
  "weight": "Disputed: about 2,350 lb (Ate Up With Motor) or 2,450 lb (Consumer Guide) for the GT-S",
  "acceleration": "GT-S 0-60 mph in 9.5 seconds (Car and Driver, September 1984) and 10.5 seconds (Road & Track test as reported by Curbside Classic); SR5 manual 12.9 seconds (Motor Trend)",
  "top_speed": "113 mph (Car and Driver test); claimed 115 mph per Ate Up With Motor",
  "brakes": "GT-S four-wheel discs; SR5 front discs and rear drums",
  "tires": "GT-S 185/60R14 on 14-inch alloys; SR5 185/70SR13 on 13-inch wheels",
  "length": "168.7 in (4,285 mm), US bumpers, 3.3 in longer than the Japanese Sprinter Trueno",
  "us_list_price_1985": "Disputed: $9,298 coupe and $9,538 Liftback (Ate Up With Motor); around $9,915 for the hatchback per Consumer Guide, model year unstated",
  "us_list_price_1984_sr5": "$9,381 SR5 Sport Coupe per eightiescars.com, single source",
  "japan_output": "Japanese 4A-GEU about 128 hp (130 PS gross) at 6,600 rpm per Toyota; not the US engine"
 },
 "summary": "The AE86 is the last rear-drive Corolla, built from May 1983 to 1987 while every other Corolla went front-wheel drive. In the US it was sold as the Corolla Sport: an SR5 coupe and liftback with a carbureted 70 hp 1.6 liter from the 1984 model year, then from 1985 the GT-S, with the twin-cam 16-valve 4A-GE making 112 hp at 6,600 rpm, a 7,500 rpm redline, four-wheel disc brakes and a five-speed manual only. The US car wore the pop-up headlights of Japan's Sprinter Trueno; the fixed-headlight Corolla Levin was never sold here. A 1985 GT-S coupe listed at $9,298 per one history, and Car and Driver ran one to 60 mph in 9.5 seconds in September 1984. How many came to the US is genuinely unknown, with published estimates that cannot both be true. The car became a drifting staple and then the hero car of the Initial D manga and anime from 1995, which is why a clean, unmodified GT-S now sits around classic.com's $21,657 benchmark as of September 2026, and why so few unmodified ones survive.",
 "history": "## Why it stayed rear-drive\n\nToyota's fifth-generation Corolla split in two. The sedans and family hatchbacks moved to front-wheel drive, but Toyota's own history records that the sports models retained the front-engine, rear-wheel-drive layout, and Consumer Guide's Collectible Automobile history describes the same split: the two-door notchback and hatchback kept rear drive. The rear-drive cars carried over the E70 Corolla's hardware, MacPherson struts in front and a live axle on four trailing links and a Panhard rod in back. In Japan they were sold as the Corolla Levin and Sprinter Trueno from May 12, 1983. The difference between the two was the face: the Levin had fixed flush headlights, the Trueno pop-ups. The AE86 code belonged only to the cars with the 1.6 liter DOHC 4A-GEU, which Toyota rated at about 128 hp (130 PS, a Japanese gross figure).\n\n## What America got first\n\nThe US car arrived for the 1984 model year as the Corolla Sport, based on the Trueno, presumably because its retractable lights were less of a regulatory problem than the Levin's composite headlights, which were not yet legal here. It came only as an SR5 with the carbureted 4A-C, 1,587 cc and 70 hp. Motor Trend timed a manual SR5 at 12.9 seconds to 60 mph and noted the front-drive Corollas were slightly quicker. eightiescars.com gives a list price of $9,381 for the 1984 SR5 Sport Coupe. One wrinkle: Consumer Guide's history describes the SR5 as an 87 hp 1.5 liter, which no other source here supports.\n\n## The GT-S, 1985-1987\n\nThe twin-cam reached the US for the 1985 model year as the GT-S. The federal engine used mass-airflow metering instead of the Japanese manifold-pressure system and was rated at 112 hp at 6,600 rpm and 97 lb-ft at 4,800 rpm. It came only with a five-speed; Toyota never offered the automatic with the 4A-GE in export cars. Standard were four-wheel disc brakes, the firmer GT suspension and 185/60R14 tires, with a limited-slip differential on the options list. Ate Up With Motor gives list prices of $9,298 for the coupe and $9,538 for the three-door, $1,200 to $1,300 above the SR5. For 1986 every US car gained a center high-mounted stop light to meet a new federal rule.\n\n## What the US press found\n\nIn the September 1984 Car and Driver, Csaba Csere found the engine weak at low speeds but recorded 9.5 seconds to 60 mph and a 113 mph top speed. Road & Track liked the gearbox and the way the tail could be placed, and reported 25 real-world mpg; Curbside Classic's account of that test gives 10.5 seconds to 60 mph. US bumpers stretched the car to 168.7 in and added weight, about 2,350 lb against 2,070 lb for a Japanese Trueno GT APEX per Ate Up With Motor, though Consumer Guide gives 2,450 lb.\n\n## From used Corolla to Initial D\n\nIn Japan the AE86 became a racing and drifting car, popularized by Keiichi Tsuchiya in a Sprinter Trueno. Production ended in July 1987. Initial D, the manga and anime that ran from 1995 to 2013, made a Trueno the hero's tofu delivery car, and the rest of the world followed. By 2021 Toyota Gazoo Racing was remanufacturing AE86 rear brake calipers, steering knuckle arms and rear driveshafts, and in 2025 it announced new 4A-GE cylinder heads and blocks for Japan.",
 "marketNotes": "As of September 2026 classic.com puts its market benchmark for the US Corolla GT-S at $21,657 with an average price of $22,266, covering model years 1985 to 1987. Its lowest recorded sale is $7,800 for a 1986 GT-S five-speed on May 28, 2023. Recent US results on classic.com, all as of September 2026, include a 1985 GT-S at $31,000 on Bring a Trailer in July 2026, a 1986 at $21,250 in July 2026, a 1987 at $15,000 in April 2026 and a 1985 at $25,000 in November 2025, plus a 1985 GT-S Sport listed by Motorcar Classics at $69,900, which is an asking price and not a sale. The bottom of the market is a different car. A 1986 GT-S coupe with a fiberglass body kit, an illuminated check engine light, inoperable turn signals and a reported brake line leak was bid to only $3,100 on Hagerty Marketplace on September 12, 2025. The SR5 trades well below the GT-S: Sports Car Market recorded a 229,000 mile 1986 SR5 sold for $10,695 on Bring a Trailer in October 2020 and called the SR5 less desirable than the GT-S. The spread between a $15,000 GT-S and a $31,000 GT-S is mostly originality. Fantasy Junction's 1985 GT-S Liftback, two owners and unmodified with its window sticker, was marketed precisely on being a rarely seen original, because most survivors have been modified for the track or for drifting.",
 "whatToLookFor": "Start by confirming which car it is. The GT-S has the DOHC 4A-GE with GT-S Twin Cam 16 decals, four-wheel disc brakes and 14-inch wheels; the SR5 has the carbureted 4A-C, rear drums, black bumpers and 13-inch wheels, and SR5s are frequently converted with swapped engines and GT-S parts. In the VINs seen in this research the GT-S cars begin JT2AE88 and the SR5 JT2AE86, which is worth checking against the engine and brakes. An original window sticker is the best evidence of the options that matter: the limited-slip differential, air conditioning, sunroof, power steering. Fantasy Junction's 1985 Liftback showed all of these on its sticker. Rust is the main body concern. Grassroots Motorsports names the front fenders, the area around the fuel filler door and the sunroof surround as the usual spots, so a car with a sunroof deserves a look at the drain areas and headliner. The US-spec mass-airflow injection is not the Japanese manifold-pressure system, so a car running a Japanese 4A-GE or an aftermarket management system is a modified car whatever its paint looks like. The five-speed is the weak point under hard use; listen for whine and check that it shifts cleanly into every gear. Tire size gives away a car's history quickly: 185/60R14 on 14-inch alloys is the GT-S original fitment. Most surviving AE86s have been modified for track or drift use, so period-correct interior trim, an uncut dashboard, original seats and an unmodified engine bay separate a $25,000 car from a $15,000 one more than paint does. A 1986 or 1987 car should have the center high-mounted stop light that federal rules required.",
 "commonProblems": "The US recall record is nearly blank. NHTSA's database lists two campaigns under the 1984 Corolla nameplate, which also covers the front-drive sedans: a voltage regulator that could overcharge the battery (83V133000) and a cruise control computer that could malfunction after cold soaking (90V040000). A query for the 1985 Corolla returns no recalls at all. In service the problems are age and abuse rather than design. Rust collects at the front fenders, around the fuel filler door and around the sunroof per Grassroots Motorsports. The same source says the transmission is not robust and will eventually break if the car is driven hard. The cars that come to market show what thirty-plus years of enthusiast ownership does: Hagerty Marketplace's 1986 GT-S listing disclosed chipped, bubbling and faded paint, a cracked dashboard with missing trim, a check engine light, inoperable turn signals and wipers, and a brake line leak. Fantasy Junction's preserved 1985 car still showed typical front road chips and cracked front turn indicator housings. Parts supply has improved from the factory side: Toyota Gazoo Racing began reselling rear brake calipers and steering knuckle arms in November 2021 and rear driveshafts in December 2021, sold both in Japan and overseas, and announced reproduction 4A-GE cylinder head and block sub-assemblies for around May 2026, marketed in Japan and conditional on order volume.",
 "valueTrajectory": "For years the AE86 was a used Corolla. Sports Car Market's analyst wrote in October 2020 that the SR5 was still on the cusp of breaking out as a collector car and that cheap ones in the $3,000 to $6,000 range sold quickly. GTPlanet reported in July 2021 that the US record then stood at $40,000, when a UK car sold for more. As of September 2026 classic.com's GT-S benchmark is $21,657, its lowest recorded sale $7,800 in May 2023 and its recent US sales between $15,000 and $31,000. That is the shape of a market where the price follows originality more than year: a two-owner, unmodified GT-S with paperwork does well, while tired or kit-bodied cars sit near SR5 money. The price also runs on culture rather than performance. Sports Car Market called the hatchback the poster child for Initial D fantasies, and GTPlanet credited the car's hero status in Initial D for its appeal. Against a 1985 list price of $9,298 for the GT-S coupe, the middle of the market as of September 2026 is a little over twice the sticker in nominal dollars.",
 "overallConfidence": "medium",
 "sources": [
  {
   "ref": "cg-gts",
   "title": "1985 Toyota Corolla GT-S",
   "url": "https://blog.consumerguide.com/1985-1987-toyota-corolla-gt-s/",
   "publisher": "Consumer Guide Automotive (Collectible Automobile)",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "US history of the 1985-87 GT-S: US sales from 1984, sports two-doors kept rear drive, GT-S added air dam and decals over SR5, hatchback pricing around $9,915 (year unstated), curb weight 2,450 lb, 112 hp and 97 lb-ft, five-speed, 7,500 rpm redline, four-wheel discs and a limited-slip differential. Quotes the September 1984 Car and Driver test: 9.5 seconds 0-60 and 113 mph. States the SR5 had an 87 hp 1.5 liter, which conflicts with other sources."
  },
  {
   "ref": "rt-curbside",
   "title": "Vintage R&T Review: 1985 Toyota Corolla AE86 GT-S - An Honest High Performance Weapon",
   "url": "https://curbsideclassic.com/vintage-reviews/vintage-rt-review-1985-toyota-corolla-ae86-gt-s-an-honest-high-performance-weapon",
   "publisher": "Curbside Classic",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Reprint and discussion of the period Road & Track test of the 1985 GT-S: 112 hp at 6,600 rpm and 97 lb-ft at 4,800 rpm, 0-60 in 10.5 seconds as summarized by Curbside, 25 real-world mpg, praise for the gearbox and the handling at the limit."
  },
  {
   "ref": "auwm-p3",
   "title": "Thunder and Lightning, Part 3: The AE86 Toyota Corolla Levin/Sprinter Trueno",
   "url": "https://ateupwithmotor.com/model-histories/ae86-corolla-levin-sprinter-trueno/3/",
   "publisher": "Ate Up With Motor",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Detailed US-market account: Corolla Sport based on Trueno because of headlight regulations, 1984 SR5 only with 70 hp 4A-C, GT-S from 1985 model year with MAF injection, 112 hp and 97 lb-ft, five-speed only, list $9,298 coupe and $9,538 three-door, $1,200-1,300 over SR5, length 168.7 in, curb weight about 2,350 lb vs 2,070 lb JDM Trueno, CHMSL on 1986-87 cars, drag coefficients 0.37 and 0.35, Keiichi Tsuchiya."
  },
  {
   "ref": "auwm-p2",
   "title": "Thunder and Lightning, Part 2: The AE86 Toyota Corolla Levin/Sprinter Trueno",
   "url": "https://ateupwithmotor.com/model-histories/ae86-corolla-levin-sprinter-trueno/2/",
   "publisher": "Ate Up With Motor",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Japanese-market background: Levin fixed flush headlights versus Trueno pop-ups; suspension of MacPherson struts and a live axle on four trailing links and a Panhard rod; rear discs and optional limited-slip on GT APEX and GTV."
  },
  {
   "ref": "grm-vintage",
   "title": "Vintage Views: Toyota AE86 Corolla GT-S",
   "url": "https://grassrootsmotorsports.com/articles/vintage-views-toyota-ae86-corolla-gt-s",
   "publisher": "Grassroots Motorsports",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "US enthusiast buyer's view: 1985-87 GT-S in hatchback and coupe, 1,587 cc 4A-GE at 112 hp; rust at front fenders, fuel filler door and sunroof; transmission not robust under hard use. Its dated price range is not used for current values."
  },
  {
   "ref": "eighties-sr5",
   "title": "1984 Toyota Corolla SR5 Sports Coupe",
   "url": "https://eightiescars.com/2025/03/22/1984-toyota-corolla-sr5-sports-coupe/",
   "publisher": "eightiescars.com",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "1984 SR5 Sport Coupe: AE86 development code, 70 hp 1.6 liter 4A-C with two-barrel carburetor, five-speed or optional four-speed automatic, Motor Trend 0-60 in 12.9 seconds, period EPA 32/43 mpg (25/31 restated), $9,381 list price, from the 1984 Toyota brochure."
  },
  {
   "ref": "scm-sr5",
   "title": "1986 Toyota Corolla SR5",
   "url": "https://www.sportscarmarket.com/?p=762993",
   "publisher": "Sports Car Market",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "Auction report: 1986 SR5, VIN JT2AE86C8G0227932, 229,000 miles, sold for $10,695 on Bring a Trailer October 2, 2020. Analyst claims about 4,000 GT-S and at least 100,000 SR5 sold in the US, SR5 less desirable than GT-S, a 1986 GT-S sold for $24,000 in 2019."
  },
  {
   "ref": "jalopnik-production",
   "title": "Toyota Made 10X As Many AE86s As You Think",
   "url": "https://jalopnik.com/toyota-made-10x-as-many-ae86s-as-you-think-1841642582",
   "publisher": "Jalopnik",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Reports JuiceboxForYou research: about 18,000 AE86 Corollas to North America out of a production run north of 360,000; numbers uncertain, Toyota's paper records reportedly discarded."
  },
  {
   "ref": "wiki-ae86",
   "title": "Toyota AE86",
   "url": "https://en.wikipedia.org/wiki/Toyota_AE86",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Pointer only: production May 1983 to July 1987, GT-S added August 1984, US 4A-GEC with MAF sensor at 112 hp, 4A-C 70-74 hp, 360,000 estimate (citing Jalopnik), Initial D 1995-2013, US length 4,285 mm."
  },
  {
   "ref": "toyota-75years",
   "title": "Corolla Levin 5th Generation - Toyota 75 Years Vehicle Lineage",
   "url": "https://www.toyota-global.com/company/history_of_toyota/75years/vehicle_lineage/car/id60003763/index.html",
   "publisher": "Toyota Motor Corporation",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Factory record: Corolla Levin released May 12, 1983, 2-door notchback and 3-door hatchback, 4A-GEU at 130 PS at 6,600 rpm, sports models retained front-engine rear-drive layout, DOHC models carried the GT badge."
  },
  {
   "ref": "tgr-2021",
   "title": "TOYOTA GAZOO Racing to Reproduce and Sell Spare Parts for the AE86 Corolla Levin / Sprinter Trueno",
   "url": "https://global.toyota/en/newsroom/toyota/36254910.html",
   "publisher": "Toyota Motor Corporation",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "November 1, 2021 release: AE86 launched May 1983; only 4A-GEU cars carry the AE86 designation; rear brake calipers and steering knuckle arms on sale November 1, 2021, rear driveshafts December 1, 2021, sold domestically and overseas."
  },
  {
   "ref": "tgr-2025",
   "title": "TGR Plans to Reproduce Engine Parts for Corolla Levin/Sprinter Trueno (AE86)",
   "url": "https://toyotagazooracing.com/pressrelease/2025/0910-01/",
   "publisher": "Toyota Gazoo Racing",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "September 2025 release: 4A-GE cylinder head and cylinder block sub-assemblies to be reissued around May 2026, ordering in Japan, sales could be postponed if orders fall short; AE86 launch May 1983."
  },
  {
   "ref": "nhtsa-1984",
   "title": "NHTSA recalls by vehicle: 1984 Toyota Corolla",
   "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=TOYOTA&model=COROLLA&modelYear=1984",
   "publisher": "National Highway Traffic Safety Administration",
   "sourceType": "government",
   "reliability": "high",
   "notes": "Two campaigns under the 1984 Corolla nameplate (not specific to the rear-drive cars): 83V133000 voltage regulator overcharging, 90V040000 cruise control computer malfunction after cold soak."
  },
  {
   "ref": "nhtsa-1985",
   "title": "NHTSA recalls by vehicle: 1985 Toyota Corolla",
   "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=TOYOTA&model=COROLLA&modelYear=1985",
   "publisher": "National Highway Traffic Safety Administration",
   "sourceType": "government",
   "reliability": "high",
   "notes": "The 1985 Corolla query returns a count of zero recalls; queries for 1986 and 1987 returned zero as well in this research."
  },
  {
   "ref": "classic-gts",
   "title": "Toyota Corolla GT-S - E80 - 5th Gen Market",
   "url": "https://www.classic.com/m/toyota/corolla/5th-gen-e80/gt-s/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of September 2026: CMB $21,657, average $22,266, lowest recorded sale $7,800 for a 1986 GT-S five-speed on May 28, 2023; recent sales $31,000 (1985, July 2026), $21,250 (1986, July 2026), $15,000 (1987, April 2026), $25,000 (1985, November 2025); $69,900 asking for a 1985 GT-S Sport; GT-S produced for North America 1985-1987, 112 hp."
  },
  {
   "ref": "fj-1985",
   "title": "1985 Toyota Corolla GT-S AE86 Liftback",
   "url": "https://fantasyjunction.com/sold/1985-toyota-corolla/overview",
   "publisher": "Fantasy Junction",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "Sold dealer listing, Emeryville, California: two-owner unmodified 1985 GT-S Liftback, VIN JT2AE88C3F0145005, 111,407 miles, window sticker showing optional limited-slip, air conditioning, sunroof; sold new May 13, 1985; notes most surviving AE86s are heavily modified; road chips and cracked turn indicator housings."
  },
  {
   "ref": "hagerty-1986",
   "title": "1986 Toyota Corolla GT-S Coupe 5-Speed",
   "url": "https://www.hagerty.com/marketplace/auction/1986-toyota-corolla-gt-s/c386640d-42b4-48b5-92c5-a2b44f60cf35",
   "publisher": "Hagerty Marketplace",
   "sourceType": "auction-house",
   "reliability": "medium",
   "notes": "Auction lot page: 1986 GT-S coupe, 101,945 miles, TRD N2-style fiberglass kit, bid to $3,100 on September 12, 2025 after 23 bids; disclosed paint chips and bubbles, check engine light, inoperable turn signals and wipers, brake line leak."
  },
  {
   "ref": "gtplanet-record",
   "title": "This AE86 Toyota Corolla Just Sold For a Record-Breaking $64,000",
   "url": "https://www.gtplanet.net/ae86-corolla-sold-record-64000-20210727/",
   "publisher": "GTPlanet",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "July 2021 report of a UK sale; used here only for its statement that the US record then stood at $40,000 and for the Initial D attribution. The UK price itself is not used as a US value."
  }
 ],
 "claims": [
  {
   "section": "history",
   "claimText": "Toyota's fifth-generation Corolla moved its family models to front-wheel drive, but the sports two-door coupes kept a front-engine, rear-wheel-drive layout.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["toyota-75years", "cg-gts"],
   "evidence": [
    { "ref": "toyota-75years", "quote": "the sports models retained the front-engine, rear-wheel-drive (FR) layout" },
    { "ref": "cg-gts", "quote": "the sportier two-door notchback and hatchback retained a front-engine, rear-drive layout" }
   ]
  },
  {
   "section": "history",
   "claimText": "The AE86 was launched in Japan in May 1983, and Toyota applies the AE86 designation only to cars with the 1.6 liter DOHC 4A-GEU engine.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["tgr-2021", "tgr-2025"],
   "evidence": [
    { "ref": "tgr-2021", "quote": "Only vehicles equipped with the 1.6-liter DOHC 16-valve (4A-GEU) engine were given the \"AE86\" designation." },
    { "ref": "tgr-2025", "quote": "Timing of launch: May 1983" }
   ]
  },
  {
   "section": "history",
   "claimText": "The Japanese Corolla Levin had fixed flush headlights and the Sprinter Trueno pop-up headlights; the US Corolla Sport was based on the Trueno.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["auwm-p2", "auwm-p3", "cg-gts"],
   "evidence": [
    { "ref": "auwm-p2", "quote": "Levins had exposed flush headlights, while the Sprinter Trueno had popup lights." },
    { "ref": "auwm-p3", "quote": "badged Corolla Sport but based on the JDM Sprinter Trueno, presumably because the Trueno's retractable headlights represented less of a regulatory headache" },
    { "ref": "cg-gts", "quote": "the two-door Corollas wore styling roughly equivalent to the home-market Sprinter Trueno with its pop-up headlamps" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 1984 US Corolla Sport was offered only as an SR5 with the carbureted 1,587 cc 4A-C rated at 70 hp, while Consumer Guide's history describes the SR5 as an 87 hp 1.5 liter; the two descriptions cannot both be right.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["auwm-p3", "eighties-sr5", "cg-gts"],
   "conflictNote": "Ate Up With Motor gives the 1984 SR5 a carbureted SOHC 1,587 cc 4A-C at 70 hp SAE net, and eightiescars.com gives a 70 hp 1.6 liter 4A-C from the 1984 brochure. Consumer Guide states the SR5 ran an 87 hp 1.5 liter four. The weight of evidence favors 70 hp and 1.6 liters, but the conflict is not resolved by any source consulted here.",
   "evidence": [
    { "ref": "auwm-p3", "quote": "it was offered only in SR5 trim with the same carbureted SOHC 1,587 cc (97 cu. in.) 4A-C" },
    { "ref": "eighties-sr5", "quote": "It was the 4A-C 70 bhp 1.6 liter/97 ci inline four with a two-barrel carburetor" },
    { "ref": "cg-gts", "quote": "The hottest versions were the SR5s running an 87-horsepower 1.5-liter four-cylinder engine." }
   ]
  },
  {
   "section": "specs",
   "claimText": "The twin-cam 4A-GE reached the US for the 1985 model year in the Corolla GT-S, rated at 112 hp at 6,600 rpm and 97 lb-ft at 4,800 rpm.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["auwm-p3", "cg-gts", "rt-curbside", "classic-gts"],
   "evidence": [
    { "ref": "auwm-p3", "quote": "The DOHC 4A-GE engine belatedly arrived in North America for the 1985 model year." },
    { "ref": "cg-gts", "quote": "The engine was rated at 112 horsepower and 97 pound-feet of torque" },
    { "ref": "rt-curbside", "quote": "112bhp at 6600 rpm and 97 lb-ft of torque at 4800 rpm" },
    { "ref": "classic-gts", "quote": "The Toyota Corolla GT-S (E80 generation) was produced for the North American market for model years 1985 to 1987." }
   ]
  },
  {
   "section": "specs",
   "claimText": "The US 4A-GE used mass airflow metering rather than the Japanese manifold-pressure system, and the GT-S was offered only with a five-speed manual.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["auwm-p3", "wiki-ae86"],
   "evidence": [
    { "ref": "auwm-p3", "quote": "The federalized twin-cam engine, offered only with a five-speed gearbox, had a different injection system than Japanese cars (using mass airflow metering rather than manifold air pressure)" },
    { "ref": "wiki-ae86", "quote": "In North America, a modified 4A-GEC engine was used to comply with California emissions regulations, which uses a mass air flow (MAF) sensor." }
   ]
  },
  {
   "section": "production",
   "claimText": "US list prices for the GT-S conflict: one history gives $9,298 for the 1985 coupe and $9,538 for the three-door, another gives hatchback pricing of around $9,915.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["auwm-p3", "cg-gts"],
   "conflictNote": "Ate Up With Motor states list prices started at $9,298 for the two-door coupe and $9,538 for the three-door, $1,200 to $1,300 above the SR5. Consumer Guide states GT-S hatchback pricing started at around $9,915 without naming the model year. The difference may be a model-year change, but neither source says so and it is not resolved here.",
   "evidence": [
    { "ref": "auwm-p3", "quote": "List prices started at $9,298 for the two-door coupe and $9,538 for the three-door, $1,200 to $1,300 more than the SR5" },
    { "ref": "cg-gts", "quote": "Curb weight was 2450 pounds, and hatchback pricing started at around $9915." }
   ]
  },
  {
   "section": "production",
   "claimText": "eightiescars.com gives a $9,381 list price for the 1984 SR5 Sport Coupe, which does not sit comfortably with Ate Up With Motor's statement that the 1985 GT-S coupe at $9,298 cost $1,200 to $1,300 more than the SR5.",
   "confidence": "low",
   "status": "disputed",
   "sourceRefs": ["eighties-sr5", "auwm-p3"],
   "conflictNote": "eightiescars.com puts the 1984 SR5 Sport Coupe at $9,381. Ate Up With Motor puts the 1985 GT-S coupe at $9,298 and says it was $1,200 to $1,300 more than the SR5, implying an SR5 near $8,000 for 1985. The figures are for different model years and different trims, but no source explains the gap and it is unresolved.",
   "evidence": [
    { "ref": "eighties-sr5", "quote": "Standard exterior and mechanical equipment on the $9,381 SR5 Sport Coupe" },
    { "ref": "auwm-p3", "quote": "$1,200 to $1,300 more than the SR5, which remained available for buyers on a budget or who wanted automatic transmission" }
   ]
  },
  {
   "section": "specs",
   "claimText": "Published GT-S curb weights disagree: about 2,350 lb per Ate Up With Motor against 2,450 lb per Consumer Guide.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["auwm-p3", "cg-gts"],
   "conflictNote": "Ate Up With Motor gives around 2,350 lb for the US car against 2,070 lb for a Japanese Trueno GT APEX. Consumer Guide gives 2,450 lb. Neither states body style, equipment or fluid level for its figure, so the conflict is not resolved.",
   "evidence": [
    { "ref": "auwm-p3", "quote": "Curb weight was around 2,350 lb (1,065 kg), compared to a factory curb weight of 2,070 lb (940 kg) for a Trueno GT APEX." },
    { "ref": "cg-gts", "quote": "Curb weight was 2450 pounds, and hatchback pricing started at around $9915." }
   ]
  },
  {
   "section": "specs",
   "claimText": "Period US tests of the GT-S disagree on acceleration: Car and Driver recorded 9.5 seconds to 60 mph and 113 mph in September 1984, while Curbside Classic's account of the Road & Track test gives 10.5 seconds.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["cg-gts", "rt-curbside", "auwm-p3"],
   "conflictNote": "Consumer Guide quotes Car and Driver's September 1984 test at 9.5 seconds 0-60 mph and 113 mph. Curbside Classic reports Road & Track's figure as 10.5 seconds. Ate Up With Motor says the US car needed to be caned to reach 60 mph in under 10 seconds. Different cars and test conditions are likely, but no source reconciles the figures.",
   "evidence": [
    { "ref": "cg-gts", "quote": "though a 9.5-second 0-to-60 time and a 113-mph top speed are hardly shabby" },
    { "ref": "rt-curbside", "quote": "While straight-line acceleration wasn't what reviewers expected (10.5 secs. in 0-60)," },
    { "ref": "auwm-p3", "quote": "the U.S.-spec Corolla GT-S needed to be caned to reach 60 mph (97 km/h) in less than 10 seconds" }
   ]
  },
  {
   "section": "specs",
   "claimText": "Motor Trend timed a manual 1984 SR5 at 12.9 seconds to 60 mph, and the SR5 offered an optional four-speed automatic that the GT-S never had.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["eighties-sr5", "auwm-p3"],
   "evidence": [
    { "ref": "eighties-sr5", "quote": "Motor Trend clocked a 0-60 time of 12.9 seconds with the manual." },
    { "ref": "auwm-p3", "quote": "although for some reason the automatic was never offered on 4A-GE export cars" }
   ]
  },
  {
   "section": "production",
   "claimText": "US sales figures conflict: Sports Car Market's analyst claims about 4,000 GT-S and at least 100,000 SR5 were sold in the US, while Jalopnik reports an estimate of about 18,000 for all of North America.",
   "confidence": "low",
   "status": "disputed",
   "sourceRefs": ["scm-sr5", "jalopnik-production"],
   "conflictNote": "Sports Car Market states there were only about 4,000 GT-S models sold in the US and at least 100,000 SR5 models. Jalopnik, citing JuiceboxForYou, gives something around 18,000 for North America, smaller than the SCM SR5 figure alone. Neither gives a method and Toyota publishes no figure. Unresolved.",
   "evidence": [
    { "ref": "scm-sr5", "quote": "There were only about 4,000 GT-S models sold in the U.S., with few left in impeccable condition. But at least 100,000 SR5 models were sold" },
    { "ref": "jalopnik-production", "quote": "Juicebox figured something around 18,000 of these Corollas came to North America out of a production run somewhere north of 360,000" }
   ]
  },
  {
   "section": "production",
   "claimText": "Worldwide AE86 production is estimated at more than 360,000, but the estimate traces to one enthusiast source and Toyota's original records reportedly no longer exist.",
   "confidence": "low",
   "status": "verified",
   "sourceRefs": ["jalopnik-production", "wiki-ae86"],
   "evidence": [
    { "ref": "jalopnik-production", "quote": "Juicebox isn't totally sure on any of its numbers exactly, as varying sources differ" },
    { "ref": "wiki-ae86", "quote": "Over 360,000 AE86s are estimated to have been built in total." }
   ]
  },
  {
   "section": "history",
   "claimText": "For 1986 and 1987 every US car gained a center high-mounted stop light to meet a new federal requirement.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["auwm-p3"],
   "evidence": [
    { "ref": "auwm-p3", "quote": "Note the center high-mounted stop light (CHMSL), added to all 1986–1987 U.S. cars to meet a new federal requirement." }
   ]
  },
  {
   "section": "history",
   "claimText": "The AE86 was the central car of the Initial D manga and anime, which ran from 1995 to 2013, and that hero status is widely credited for its later appeal.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["wiki-ae86", "gtplanet-record", "scm-sr5"],
   "evidence": [
    { "ref": "wiki-ae86", "quote": "The AE86 was featured centrally in the popular, long-running Japanese manga and anime series titled Initial D (1995–2013)" },
    { "ref": "gtplanet-record", "quote": "This was only cemented further by its hero status in the Initial D manga and anime" },
    { "ref": "scm-sr5", "quote": "although the hatchback body is still the poster child for Initial D comic-book fantasies" }
   ]
  },
  {
   "section": "market",
   "claimText": "As of September 2026 classic.com puts the US Corolla GT-S market benchmark at $21,657 with an average of $22,266, and its lowest recorded sale is $7,800 for a 1986 GT-S on May 28, 2023.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["classic-gts"],
   "evidence": [
    { "ref": "classic-gts", "quote": "The lowest recorded sale price was $7,800 for a 1986 Toyota Corolla GT-S 5-Speed on May 28, 2023." }
   ]
  },
  {
   "section": "market",
   "claimText": "A 1986 GT-S coupe with a fiberglass body kit and disclosed faults was bid to only $3,100 on Hagerty Marketplace on September 12, 2025, while Sports Car Market recorded a 1986 SR5 sold for $10,695 in October 2020.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["hagerty-1986", "scm-sr5"],
   "evidence": [
    { "ref": "hagerty-1986", "quote": "1986 Toyota Corolla GT-S Coupe 5-Speed Bid to $3,100 on 09/12/25" },
    { "ref": "scm-sr5", "quote": "SOLD AT $10,695. Bring a Trailer, 10/2/2020." }
   ]
  },
  {
   "section": "market",
   "claimText": "Most surviving AE86s have been modified for track or drifting, and original cars are marketed on that scarcity; Fantasy Junction's two-owner 1985 GT-S carried a factory limited-slip differential on its window sticker.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["fj-1985", "cg-gts"],
   "evidence": [
    { "ref": "fj-1985", "quote": "Indeed, most surviving AE86 examples have been heavily modified for track or drifting use." },
    { "ref": "cg-gts", "quote": "Brakes were upgraded to four-wheel discs, and there was a limited-slip differential." }
   ]
  },
  {
   "section": "market",
   "claimText": "GTPlanet reported in July 2021 that the US auction record for an AE86 then stood at $40,000.",
   "confidence": "low",
   "status": "verified",
   "sourceRefs": ["gtplanet-record"],
   "evidence": [
    { "ref": "gtplanet-record", "quote": "setting a record for an AE86 in the UK and beating the US record of $40,000 by more than 50%" }
   ]
  },
  {
   "section": "problems",
   "claimText": "Rust collects at the front fenders, around the fuel filler door and around the sunroof, and cars coming to market show age-related paint failure.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["grm-vintage", "hagerty-1986"],
   "evidence": [
    { "ref": "grm-vintage", "quote": "Typical rust problem spots are on the front fenders, around the fuel filler door and around the sunroof, if equipped." },
    { "ref": "hagerty-1986", "quote": "Paint shows chips, bubbles, and fading" }
   ]
  },
  {
   "section": "problems",
   "claimText": "Grassroots Motorsports warns that the five-speed transmission is not especially robust and will eventually break if the car is driven hard; this is a single-source observation.",
   "confidence": "low",
   "status": "verified",
   "sourceRefs": ["grm-vintage"],
   "evidence": [
    { "ref": "grm-vintage", "quote": "isn't extremely robust, and will eventually break" }
   ]
  },
  {
   "section": "problems",
   "claimText": "NHTSA lists two recalls under the 1984 Corolla nameplate, a voltage regulator and a cruise control computer, and none for the 1985 Corolla.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["nhtsa-1984", "nhtsa-1985"],
   "evidence": [
    { "ref": "nhtsa-1984", "quote": "VOLTAGE REGULATOR WHICH CONTROLS THE AMOUNT OF FLOW IN THE ELECTRICAL SYSTEM BETWEEN THE BATTERY AND THE ALTERNATOR" },
    { "ref": "nhtsa-1985", "quote": "Count 0 Message Results returned successfully results" }
   ]
  },
  {
   "section": "problems",
   "claimText": "Toyota Gazoo Racing reissued AE86 rear brake calipers and steering knuckle arms from November 2021 and rear driveshafts from December 2021, and announced reproduction 4A-GE cylinder head and block sub-assemblies for around May 2026.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["tgr-2021", "tgr-2025"],
   "evidence": [
    { "ref": "tgr-2021", "quote": "will start selling them both domestically and overseas on November 1, as part of the GR Heritage Parts Project" },
    { "ref": "tgr-2025", "quote": "The cylinder head sub-assembly and the cylinder block sub-assembly for the 4A-GE engine are to be reproduced and reissued." }
   ]
  }
 ]
};
