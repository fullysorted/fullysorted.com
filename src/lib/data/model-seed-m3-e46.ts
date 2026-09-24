/**
 * Researched model draft - BMW M3, E46 generation (US 2001-2006 model years, coupe and convertible).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedM3E46 = {
 "slug": "bmw/m3-e46",
 "heroPhoto": "/images/models/bmw-m3-e46.jpg",
 "heroPhotoCredit": "Photo: Land Rover Series 3, CC0, via Wikimedia Commons",
 "make": "BMW",
 "model": "M3",
 "generation": null,
 "generationCode": "E46",
 "trim": "Coupe and convertible, six-speed manual or SMG II, 2005-2006 Competition Package (US 2001-2006 model years)",
 "yearStart": 2001,
 "yearEnd": 2006,
 "bodyStyles": [
  "2-door coupe, 4 seats (North American type BL93, built February 2001 through May 2006)",
  "2-door convertible with power soft top, 4 seats (North American type BR93, built March 2001 through August 2006)",
  "2-door lightweight coupe with carbon fiber roof (CSL, European types BL95 and BL96 only, 2003; not sold new in the US)"
 ],
 "engines": [
  "3,246 cc S54 inline six, naturally aspirated, 87 mm bore, individual throttle butterflies, high-pressure double VANOS, 11.5:1 compression; 333 hp SAE at 7,900 rpm (343 hp DIN) and 262 lb-ft at 4,900 rpm in US form (all US cars, 2001-2006)",
  "3,246 cc S54 in CSL tune, no conventional mass airflow meter, modified camshafts and exhaust valves; 360 hp DIN at 7,900 rpm and 273 lb-ft at 4,300 rpm per the BMW M Registry (CSL, European market only, 2003)"
 ],
 "productionTotal": 85766,
 "productionNotes": "The BMW M Registry lists E46 M3 production by factory type code, and its eight figures add to 85,766 cars: 56,133 coupes including the CSL and 29,633 convertibles. Wikipedia prints the same two figures and the same 85,766 total; it is likely drawn from the same data, so the agreement is between a registry and an encyclopedia rather than two independent counts, and no BMW document was fetched. The North American cars were type BL93 (26,202 coupes, February 2001 through May 2006) and BR93 (17,577 convertibles, March 2001 through August 2006), 43,779 in all, figures an E46 Fanatics member quoted from the same registry in 2007. SMG II: the registry gives 10,851 North American coupes and 8,796 North American convertibles, so about 41 of every 100 US coupes and almost exactly half the US convertibles left the factory with SMG; that split rests on the registry alone. Competition Package: the registry gives 3,011 coupes worldwide, 2,410 of them North American, and two forum posts repeat 2,410; one NAM3 Forum member splits the 2,410 into 1,276 manual and 1,134 SMG cars, a single low-reliability figure with no source named. CSL: 1,383 built in 2003 (841 left-hand drive, 542 right-hand drive), all European specification. US prices: MotorWeek's 2001 test gives a $45,400 base for the coupe and $53,400 for the convertible; Grassroots Motorsports' 2001 review says the car cost well under $50,000 in its text but lists a base of $57,275 in its specification box, which reads like an as-tested figure and is not used here. No documented US list price for the 2002-2006 cars or for the Competition Package option was found.",
 "notableTrims": [
  {
   "name": "2001 coupe (six-speed only)",
   "note": "The first US model year, and the only one with no SMG option: North American SMG II production began in September 2001. MotorWeek priced it at $45,400 and ran 0-60 mph in 5.0 seconds. US cars came with undrilled brake rotors, unlike the European car."
  },
  {
   "name": "Convertible (2001-2006)",
   "note": "17,577 built to North American specification, 366 lb heavier than the coupe by MotorWeek's figure and half a second slower in its tests, $53,400 new in 2001. Almost exactly half of the US convertibles were built with SMG II."
  },
  {
   "name": "SMG II cars (2002-2006)",
   "note": "The second-generation Sequential M Gearbox uses the manual car's Getrag gears with an electrohydraulic clutch and shift, 11 driver-selectable programs and launch control. 19,647 North American cars had it. It is the variable that moves price more than any other."
  },
  {
   "name": "Competition Package, ZCP (2005-2006)",
   "note": "From December 2004 production: 13.7-inch cross-drilled two-piece front rotors, a 14.5:1 steering rack, M Track Mode, 19-inch cross-spoke wheels and an Alcantara wheel with no audio or cruise buttons. Engine unchanged. 2,410 North American coupes per the registry."
  },
  {
   "name": "Interlagos Blue ZCP",
   "note": "Interlagos Blue metallic (A30) was offered only on Competition Package coupes, December 2004 through May 2006. No fetched source gives a count of US cars in the color."
  },
  {
   "name": "Laguna Seca Blue and Phoenix Yellow cars",
   "note": "Laguna Seca Blue (448) was dropped in September 2004 and Phoenix Yellow metallic (445) in March 2005, so neither appears on a late car. Laguna Seca Blue and Kiwi leather were US special-order (Priority 1) only."
  },
  {
   "name": "CSL (not sold in the US)",
   "note": "1,383 built in 2003 to European specification only, SMG II only, 360 hp DIN, carbon fiber roof, 3,053 lb per Wikipedia. Never sold new in the United States; it is the donor of most Competition Package parts."
  }
 ],
 "specs": {
  "layout": "Front-mounted inline six, rear-wheel drive, 2+2 coupe or convertible",
  "chassis": "Steel unibody from the E46 3 Series coupe and convertible, 3.4 in wider front track and 1.8 in wider rear track, forged aluminum front control arms, the more robust convertible rear subframe",
  "engine": "3,246 cc S54 inline six, 87 mm bore, individual throttle butterflies, high-pressure double VANOS, 11.5:1 compression",
  "power": "333 hp SAE at 7,900 rpm in US form (343 hp DIN elsewhere, about 5 hp of the gap from the US catalyst position); MotorWeek gives 333 hp at 8,000 rpm",
  "torque": "262 lb-ft at 4,900 rpm (registry, Grassroots Motorsports, MotorWeek)",
  "transmission": "Getrag six-speed manual, ratios 4.23, 2.53, 1.67, 1.23, 1.00, 0.83; SMG II six-speed automated manual on the same gears optional from September 2001 production",
  "final_drive": "3.62:1 with M Variable Differential Lock (viscous-actuated multi-disc limited slip)",
  "weight": "3,415 lb coupe per Grassroots Motorsports; 3,450 lb curb weight per Wikipedia citing Car and Driver; convertible 366 lb more than the coupe per MotorWeek",
  "acceleration": "0-60 mph: 4.8 sec official claim for the coupe, manual or SMG; 5.0 sec in MotorWeek's 2001 coupe test; convertible about half a second slower (MotorWeek)",
  "quarter_mile": "13.5 sec at 107 mph (2001 coupe, MotorWeek; single source)",
  "braking_60_0": "112 ft (2001 coupe, MotorWeek; single source)",
  "top_speed": "155 mph, electronically limited (Wikipedia; single source)",
  "brakes": "Vented discs, 12.8 in front and 12.9 in rear, undrilled on US cars; Competition Package and CSL 13.7 in cross-drilled two-piece front rotors",
  "steering": "Rack and pinion, 15.4:1 overall ratio; 14.5:1 on the Competition Package and CSL",
  "wheels_and_tires": "18-inch cast wheels, 225/45ZR18 front and 255/40ZR18 rear; 19-inch forged option in North America from March 2002; 19-inch cross-spoke wheels on the Competition Package, 8x19 front and 9.5x19 rear",
  "epa_fuel_economy": "16 mpg city, 24 mpg highway (2001 coupe, MotorWeek; fueleconomy.gov returned no listing)",
  "us_msrp": "$45,400 coupe and $53,400 convertible (2001, MotorWeek; single source); later model years and the Competition Package option price not documented in fetched sources"
 },
 "summary": "The E46 M3 is the M3 that came to the United States with the same engine as everyone else. Sold here for the 2001 through 2006 model years as a coupe and a convertible, it carried the 3,246 cc S54 inline six, rated at 333 hp SAE at 7,900 rpm and 262 lb-ft, after the US E36 M3 had made do with a detuned 240 hp engine. A six-speed Getrag manual was standard; the SMG II automated manual arrived with September 2001 production and went into about 45 of every 100 North American cars and almost exactly half the convertibles. MotorWeek priced the 2001 coupe at $45,400 and the convertible at $53,400. From December 2004 a Competition Package brought the CSL's quicker steering, larger front brakes and 19-inch cross-spoke wheels, and 2,410 North American coupes got it. The lightweight CSL itself was never sold new in the US. BMW M built 85,766 E46 M3s, 43,779 of them to North American specification, and what separates one from another now is the record of rod bearing, VANOS and rear subframe work.",
 "history": "## One engine for every market\n\nThe E36 M3 reached the United States in 1995 with a different engine from the European car, a 240 hp unit where Europe had 316 hp, and American buyers noticed. The E46 M3 ended that. BMW M gave every market the same S54, a 3,246 cc evolution of the European S50 with an 87 mm bore, individual throttle butterflies, high-pressure double VANOS and 11.5:1 compression. The only mechanical difference in the North American car was the catalysts, mounted slightly closer to the block to light off sooner, which the BMW M Registry says costs about 5 hp. Grassroots Motorsports put the rest of the gap on paper: the US car was rated at 333 hp SAE against 343 hp DIN, half the difference in the rating method and half in the catalysts. The car was shown as a concept at Frankfurt in 1999 and in production form at Geneva in March 2000, and it was built on the regular 3 Series line at Regensburg. An M3 Touring wagon, meant for the Audi RS4, got as far as a finished prototype and was never approved.\n\n## 2001: the US car\n\nNorth American coupe production began in February 2001 and convertible production in March, for the 2001 model year. The first cars had the six-speed Getrag manual only, with a 3.62:1 final drive and the M Variable Differential Lock. US cars kept 12.8 in front and 12.9 in rear vented rotors without the cross-drilling of the European brakes. MotorWeek tested a 2001 coupe at $45,400 base: 0-60 mph in 5.0 seconds, the quarter mile in 13.5 seconds at 107 mph, 60-0 in 112 feet and an EPA rating of 16 mpg city and 24 highway. The convertible, at $53,400, gave up 366 lb and half a second. Grassroots Motorsports gave its coupe as 3,415 lb and put the added weight first among its complaints.\n\n## SMG II and the running changes\n\nSMG II entered North American production in September 2001, for the 2002 model year: the same Getrag gears with an electrohydraulic clutch, 11 programs and launch control. The registry's counts say 10,851 of 26,202 US coupes and 8,796 of 17,577 US convertibles were built with it. The same month brought Bi-Xenon headlights and made rain-sensing wipers and an in-dash CD player standard in North America. A front strut brace and an optional 19-inch forged wheel arrived in March 2002, LED taillights in March 2003, when Mystic Blue replaced Topaz Blue and a silver-gray A08 replaced Steel metallic (400). Laguna Seca Blue and Oxford Green were dropped in September 2004 and Phoenix Yellow in March 2005.\n\n## 2005: the Competition Package\n\nIn December 2004 BMW revised the coupe's suspension to reduce understeer and added the Competition Package, internally ZCP, sold in the UK as the M3 CS. It carried CSL hardware: 13.7 in cross-drilled two-piece front rotors, a 14.5:1 steering rack instead of 15.4:1, M Track Mode for the stability control, 19-inch cross-spoke wheels, an Alcantara steering wheel without audio or cruise buttons, milled aluminum trim and an exclusive Interlagos Blue paint. The engine and gearbox were unchanged. Of 3,011 built, 2,410 were North American cars, sold as 2005 and 2006 models. Coupe production ended in May 2006 and the convertible in August.\n\n## The CSL, which America never got\n\nThe CSL was built between June and December 2003, 1,383 cars to European specification only, with a carbon fiber roof, SMG II as the only transmission, 360 hp DIN and 273 lb-ft. Wikipedia gives its weight as 3,053 lb and states plainly that it was not sold in North America.",
 "marketNotes": "All figures are US dollars as of September 2026, from classic.com through a rendering fetch; the site refuses plain scripts. classic.com benchmarks the E46 M3 at $31,975 with 92 cars for sale and a lowest recorded sale of $7,055 for a 2002 car on October 23, 2023. By configuration its benchmarks are $35,512 for a manual coupe, $25,646 for an SMG coupe, $24,795 for a manual convertible and $22,844 for an SMG convertible. The Competition Package benchmarks at $42,852 with a manual (average sale $42,798) and $31,031 with SMG. Manual Competition Package results listed on classic.com include $120,000 for a 28,000-mile car on Bring a Trailer on February 19, 2026, $75,000 for a 26,000-mile car on September 11, 2026, $65,000 on Cars and Bids for a 28,000-mile car on August 11, 2026, $54,000 at 62,000 miles on September 4, 2026, $35,500 at 108,000 miles on September 12, 2026, $31,000 at 123,000 miles on August 13, 2026 and $16,100 at 143,000 miles on December 27, 2025; the lowest recorded is $13,000 on April 21, 2025. classic.com shows a CSL benchmark of $123,254 with no cars listed; the CSL was never sold new in the US. No individual auction lot page was fetched, and classic.com does not say whether its figures include buyer's premium.",
 "whatToLookFor": "Start with the rod bearings. The owner-community rule, repeated by the Carolinas BMW MOA site and a specialist buyer's guide, is replacement every 60,000 to 80,000 miles; E46 Fanatics members report copper showing on bearings pulled at 80,000 to 100,000. A receipt should name the bearings, whether the rod bolts were replaced and the shop. Quoted costs run $1,500 to $2,200 at shops in owner posts from 2019 to 2021 and $2,500 to $3,500 on average by the MOA page. A cold-start rattle that sounds like marbles in a tin can, with soft low-end torque, is VANOS; no fetched US source prices the rebuild. The rear subframe mounting points in the floor crack; the fix is welded reinforcement plates, around $1,500 by the MOA figure, and $4,000 to $5,000 if the floor itself has to be replaced. An inspection report with photographs is the document to ask for. On an SMG car, the hydraulic pump and actuators are the known failure; many have been converted to a manual, which changes what the car is. A true Competition Package car shows 13.7-inch cross-drilled two-piece front rotors, the Alcantara wheel with the M Track button and no audio buttons, and cross-spoke 19-inch wheels, and the build data should list the package; Interlagos Blue (A30) came only on these cars. Paint codes for US cars include Alpine White 300, Imola Red 405, Jet Black 668, Carbon Black 416, Titanium Silver 354, Laguna Seca Blue 448, Phoenix Yellow 445, Topaz Blue 364 and Mystic Blue A07. Every 2002-2006 car falls under Takata airbag recalls; an NHTSA VIN check settles whether the work was done.",
 "commonProblems": "Rod bearings are the fault that defines ownership. The Carolinas BMW MOA site says BMW did not specify the bearing clearances correctly, and a specialist guide blames tight clearances combined with long oil change intervals, the wrong oil or oil starvation under hard cornering; a spun bearing destroys the crankshaft and block. There is no single agreed interval: the MOA page and the guide give 60,000 to 80,000 miles, while E46 Fanatics owners describe copper at 80,000 to 100,000 and some high-mileage owners wait longer. Costs quoted by owners run from about $500 in parts for a do-it-yourself job to $1,500 to $2,200 at a shop, and the MOA page gives $1,800 to almost $10,000 with an average of $2,500 to $3,500. The VANOS unit rattles as its internal seals wear and its solenoids fail, and on some cars the exhaust cam gear bolts shear. The rear subframe mounting points in the floor pan crack from fatigue, a structural fault rather than wear, repaired with welded reinforcement plates. SMG II hydraulic pumps and actuators fail, and Wikipedia records that some owners found the gearbox delayed and lurching in stop-start traffic. The plastic radiator, water pump and expansion tank age out, and the specialist guide suggests a cooling overhaul around 60,000 miles. NHTSA lists five airbag recalls touching 2002 M3s, three of them Takata inflator campaigns covering the M3 coupe and convertible through 2006. Every cost here is from an owner post or a single chapter site; no fetched source is a shop price list.",
 "valueTrajectory": "The E46 M3 has moved from used BMW to collector car within the memory of its current owners. As of September 2026 classic.com benchmarks it at $31,975, and its lowest recorded sale is $7,055 in October 2023. The spread inside that number is wide and has a clear order: a manual coupe at $35,512 is worth about $10,000 more than an SMG coupe or a manual convertible, and the SMG convertible sits lowest at $22,844. The Competition Package with a manual is the car the market has separated from the rest, benchmarked at $42,852, and within it mileage now does most of the work. In 2026 alone, 26,000 to 28,000-mile cars made $65,000 to $120,000 while cars past 100,000 miles made $31,000 to $35,500, and a 143,000-mile car made $16,100 in December 2025. The same package with SMG benchmarks at $31,031, close to a plain manual coupe. The CSL, never sold here, benchmarks at $123,254. Documented rod bearing and subframe work is part of every price above. None of this is a forecast.",
 "overallConfidence": "medium",
 "sources": [
  {
   "ref": "bmw-m-registry-e46",
   "title": "BMW M Registry - FAQ E46 M3",
   "url": "https://www.bmwmregistry.com/model_faq.php?id=19",
   "publisher": "BMW M Registry",
   "sourceType": "registry",
   "reliability": "medium",
   "notes": "Production by type code (BL91 16,038; BL92 12,510; BL93 NA coupe 26,202 Feb 2001-May 2006; BL95 841 and BL96 542 CSL; BR91 4,822; BR92 7,234; BR93 NA convertible 17,577 Mar 2001-Aug 2006); SMG II totals (BL93 10,851, BR93 8,796) and NA SMG start September 2001; running changes; ZCP contents and 3,011 total with 2,410 BL93; S54 343 hp DIN or 333 hp SAE and 262 lb-ft; US catalysts; Getrag ratios and 3.62 final drive; US brakes undrilled; CSL 1,383, 360 hp DIN, SMG only; paint codes and dates."
  },
  {
   "ref": "wikipedia-bmw-m3",
   "title": "BMW M3",
   "url": "https://en.wikipedia.org/wiki/BMW_M3",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Pointer only. E46 total 56,133 coupes and 29,633 convertibles, 85,766 cars, Regensburg, September 2000 to August 2006; 3,450 lb curb weight citing Car and Driver; US rating 333 hp and 262 lb-ft, official 0-60 mph 4.8 sec; 155 mph limit; SMG II criticism; ZCP contents and unchanged drivetrain; CSL 1,383 built, 3,053 lb, not sold in North America."
  },
  {
   "ref": "motorweek-2001-m3",
   "title": "2001 BMW M3 Program #2101",
   "url": "https://motorweek.org/road_tests/2001_bmw_m3_program_2101/",
   "publisher": "MotorWeek (Maryland Public Television)",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "US period road test, read through a rendering fetch (403 to plain scripts). Coupe base $45,400, convertible $53,400; 333 hp at 8,000 rpm and 262 lb-ft at 4,900; six-speed manual; 0-60 mph 5.0 sec, quarter mile 13.5 sec at 107 mph, 60-0 in 112 ft, EPA 16 city and 24 highway; convertible 366 lb heavier and half a second slower."
  },
  {
   "ref": "grm-2001-m3",
   "title": "2001 BMW M3: New car reviews",
   "url": "https://grassrootsmotorsports.com/new-cars/2001-bmw-m3/",
   "publisher": "Grassroots Motorsports",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "US period review by David S. Wallens, reprinted online. 333 hp at 7,900 rpm in US form, 10 less than Europe, half from SAE rating and half from US catalysts; 262 lb-ft at 4,900; 0-60 mph 4.8 sec and cost well under $50,000 in the text, Base $57,275 in the spec box; 3,415 lb; 3.62 final drive; 12.8 and 12.9 in rotors undrilled in the US."
  },
  {
   "ref": "nhtsa-recalls-2002-m3",
   "title": "NHTSA recalls by vehicle: 2002 BMW M3",
   "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=BMW&model=M3&modelYear=2002",
   "publisher": "National Highway Traffic Safety Administration",
   "sourceType": "government",
   "reliability": "high",
   "notes": "Five airbag recalls for the 2002 M3: 13V172000 passenger airbag on 2002-2003 M3 coupes and convertibles; 15V318000 driver inflator on 2002-2006 M3 coupes and convertibles; 17V047000 driver inflator on 2000-2002 M3; 20V018000 Takata PSAN inflators on 2000-2006 M3 coupe and convertible; 14V428000 airbags."
  },
  {
   "ref": "e46fanatics-zcp",
   "title": "How many USDM M3's had ZCP?",
   "url": "https://www.e46fanatics.com/threads/how-many-usdm-m3s-had-zcp.650042/",
   "publisher": "E46 Fanatics Forum",
   "sourceType": "club-forum",
   "reliability": "low",
   "notes": "Owner thread, 2009-2017. Posts from 2012 and 2015 give 2,410 North American ZCP cars built in 2005 and 2006 of 3,011 total, and restate the ZCP equipment list and introduction in December 2004."
  },
  {
   "ref": "nam3forum-zcp",
   "title": "E46 M3 zcp production numbers",
   "url": "https://nam3forum.com/forums/forum/main-forum/e46-2001-2006/289955-e46-m3-zcp-production-numbers",
   "publisher": "NAM3 Forum",
   "sourceType": "club-forum",
   "reliability": "low",
   "notes": "Owner thread, January 2025. One member gives total North America ZCP production of 2,410, split 1,276 manual and 1,134 SMG, and 178 in Alpine White, with no source named."
  },
  {
   "ref": "e46fanatics-production",
   "title": "E46 M3 Production Numbers?",
   "url": "https://www.e46fanatics.com/threads/e46-m3-production-numbers.363307/",
   "publisher": "E46 Fanatics Forum",
   "sourceType": "club-forum",
   "reliability": "low",
   "notes": "Owner thread, 2006-2007. An April 2007 post gives 26,202 NA coupes (02/01-05/06) and 17,577 NA convertibles (03/01-08/06), citing the BMW M Registry; an earlier post guesses about 40,000 worldwide, which the registry contradicts."
  },
  {
   "ref": "e46fanatics-rod-bearings",
   "title": "Consensus on E46 M3 rod bearings (costs, when to do them, so on.)",
   "url": "https://www.e46fanatics.com/threads/consensus-on-e46-m3-rod-bearings-costs-when-to-do-them-so-on.1268281/",
   "publisher": "E46 Fanatics Forum",
   "sourceType": "club-forum",
   "reliability": "low",
   "notes": "Owner thread, December 2019 to 2021. Copper showing on bearings pulled at 80,000-100,000 miles; shop expectations of $1,500-2,000 and about $500 in parts for do-it-yourself; quotes of $1,600 (VAC Motorsports), $1,800 and $2,200 paid for a full job."
  },
  {
   "ref": "carolinas-moa-big-3",
   "title": "What is the Big 3 on M3?",
   "url": "https://carolinasbmwmoa.org/what-is-the-big-3-on-m3/",
   "publisher": "Carolinas BMW MOA (chapter website)",
   "sourceType": "club-forum",
   "reliability": "low",
   "notes": "US club chapter page in question-and-answer form, unsigned. The Big 3 are rod bearings, VANOS and subframe reinforcement; rod bearings $1,800 to almost $10,000, average $2,500-3,500, every 60,000-80,000 miles, clearances specified wrongly; subframe reinforcement around $1,500, floor replacement $4,000-5,000."
  },
  {
   "ref": "autoarchive-e46-m3-guide",
   "title": "BMW E46 M3 Buyer's Guide: Rod Bearings, Subframe Cracks, and SMG vs Manual",
   "url": "https://www.theautoarchives.com/blog/bmw-e46-m3-buyers-guide",
   "publisher": "AutoArchive",
   "sourceType": "specialist",
   "reliability": "low",
   "notes": "Unsigned buyer's guide on a listing site; used only for fault descriptions, not its dollar ranges. Rod bearing causes and 60,000-80,000 mile interval; VANOS cold-start rattle, seals, solenoids and sheared exhaust cam gear bolts; subframe fix is welded reinforcement plates; SMG hydraulic pump and actuators failure-prone; cooling overhaul every 60,000 miles."
  },
  {
   "ref": "classic-e46-m3",
   "title": "BMW M3 - E46 Market - CLASSIC.COM",
   "url": "https://www.classic.com/m/bmw/3-series/e46/m3/",
   "publisher": "CLASSIC.COM",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "Fetched September 23, 2026 through a rendering fetch (403 to plain scripts). Benchmark $31,975, 92 for sale, lowest sale $7,055 on October 23, 2023; manual coupe $35,512, manual convertible $24,795, SMG coupe $25,646, SMG convertible $22,844, ZCP manual $42,852, ZCP SMG $31,031, CSL $123,254. Its blurb prints 338 hp, which no other source supports; not used."
  },
  {
   "ref": "classic-e46-m3-zcp-manual",
   "title": "BMW M3 Competition Package (ZCP) - Manual - E46 Market - CLASSIC.COM",
   "url": "https://www.classic.com/m/bmw/3-series/e46/m3/competition-package-manual/",
   "publisher": "CLASSIC.COM",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "Fetched September 23, 2026 through a rendering fetch. Benchmark $42,852, average $42,798, lowest $13,000 on April 21, 2025, highest $120,000 on February 19, 2026 (BaT, 28k mi, Cincinnati). Rows: $75,000 Sep 11, 2026 26k mi; $65,000 Cars and Bids Aug 11, 2026 28k mi; $54,000 Sep 4, 2026 62k mi; $35,500 Sep 12, 2026 108k mi; $31,000 Aug 13, 2026 123k mi; $16,100 Dec 27, 2025 143k mi."
  }
 ],
 "claims": [
  {
   "section": "production",
   "claimText": "BMW M built 85,766 E46 M3s between September 2000 and August 2006: 56,133 coupes including the CSL and 29,633 convertibles, the sum of the BMW M Registry's type-code figures and the total Wikipedia prints.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["bmw-m-registry-e46", "wikipedia-bmw-m3"],
   "evidence": [
    { "ref": "bmw-m-registry-e46", "quote": "BL91 (ECE-sepc coupe, LHD): 16,038 examples produced from 09/2000 through 05/2006" },
    { "ref": "wikipedia-bmw-m3", "quote": "Total production of the E46 M3 was 56,133 coupés and 29,633 convertibles." }
   ]
  },
  {
   "section": "production",
   "claimText": "North American production was 26,202 coupes (February 2001 through May 2006) and 17,577 convertibles (March 2001 through August 2006), 43,779 cars in all.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["bmw-m-registry-e46", "e46fanatics-production"],
   "evidence": [
    { "ref": "bmw-m-registry-e46", "quote": "BR93 (NA-spec convertible, LHD): 17,577 examples produced from 03/2001 through 08/2006" },
    { "ref": "e46fanatics-production", "quote": "NA M3 coupe (LHD): 26,202 examples produced from 02/01 through 05/06" }
   ]
  },
  {
   "section": "production",
   "claimText": "SMG II entered North American production in September 2001; the BMW M Registry gives 10,851 North American coupes and 8,796 North American convertibles built with it. The split rests on this single registry source.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["bmw-m-registry-e46"],
   "evidence": [
    { "ref": "bmw-m-registry-e46", "quote": "The following are the SMG II production totals for each M3 model: BL91: 7,800 BL92: 5,885 BL93: 10,851" }
   ]
  },
  {
   "section": "production",
   "claimText": "BMW built 3,011 E46 M3 coupes with the Competition Package, 2,410 of them to North American specification; one forum member splits the North American cars into 1,276 manual and 1,134 SMG, a figure with no source named.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["bmw-m-registry-e46", "e46fanatics-zcp", "nam3forum-zcp"],
   "evidence": [
    { "ref": "bmw-m-registry-e46", "quote": "BMW produced a total of 3,011 E46 M3 coupes with the optional Competition Package (ZCP)" },
    { "ref": "e46fanatics-zcp", "quote": "BMW Made in 2005/2006 2,410 cars with ZCP Package" },
    { "ref": "nam3forum-zcp", "quote": "Total North America ZCP Production: 2,410 (1,276 Manual / 1,134 SMG)" }
   ]
  },
  {
   "section": "production",
   "claimText": "The M3 CSL was built in 2003 to European specification only, 1,383 cars, and was not sold new in the North American market.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["bmw-m-registry-e46", "wikipedia-bmw-m3"],
   "evidence": [
    { "ref": "bmw-m-registry-e46", "quote": "A total of 1,383 E46 M3 CSLs were produced to European specification between June and December of 2003" },
    { "ref": "wikipedia-bmw-m3", "quote": "The CSL model was not sold in the North American market." }
   ]
  },
  {
   "section": "history",
   "claimText": "Unlike the E36 M3, the E46 M3 used the same S54 engine in North America as elsewhere; the US car's catalysts sit closer to the block, and Grassroots Motorsports attributes half of the 10 hp rating gap to SAE measurement and half to the US catalysts.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["bmw-m-registry-e46", "wikipedia-bmw-m3", "grm-2001-m3"],
   "evidence": [
    { "ref": "bmw-m-registry-e46", "quote": "the catalysts are located slightly closer to the engine block on North American-spec models" },
    { "ref": "wikipedia-bmw-m3", "quote": "The North American models used the same S54 engine as in other countries (unlike the previous generation, which used lower performance engines in the United States)." },
    { "ref": "grm-2001-m3", "quote": "Half of this difference comes from the use of SAE horsepower numbers, while the other is due to U.S.-spec catalytic converters." }
   ]
  },
  {
   "section": "specs",
   "claimText": "The US-specification S54 is rated at 333 hp SAE and 262 lb-ft at 4,900 rpm; the registry and Grassroots Motorsports give peak power at 7,900 rpm, while MotorWeek's test gives 8,000 rpm.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["bmw-m-registry-e46", "grm-2001-m3", "motorweek-2001-m3"],
   "evidence": [
    { "ref": "bmw-m-registry-e46", "quote": "The S54 engine in the E46 M3 is rated at 343 hp (DIN) or 333 hp (SAE) at 7,900 rpm and 262 lb/ft of torque at 4,900 rpm." },
    { "ref": "grm-2001-m3", "quote": "The new engine makes 333 horsepower at 7900 rpm in U.S.-spec form, which is only 10 less than its European counterparts." },
    { "ref": "motorweek-2001-m3", "quote": "the M3 delivers a whopping 333 horsepower at 8,000 rpm and 262 pound-feet of torque at 4,900." }
   ]
  },
  {
   "section": "specs",
   "claimText": "MotorWeek gives the 2001 M3 coupe a base price of $45,400 and the convertible $53,400; Grassroots Motorsports' text says the car cost well under $50,000. The exact figures rest on MotorWeek alone.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["motorweek-2001-m3", "grm-2001-m3"],
   "evidence": [
    { "ref": "motorweek-2001-m3", "quote": "The M3 coupe, with all of its rousing performance and bad-boy attitude, carries a base price of just $45,400." },
    { "ref": "grm-2001-m3", "quote": "carry four people in true luxury, and cost well under $50,000?" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The official 0-60 mph claim for the US coupe is 4.8 seconds with either transmission; MotorWeek's 2001 manual coupe test recorded 5.0 seconds.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["wikipedia-bmw-m3", "grm-2001-m3", "motorweek-2001-m3"],
   "evidence": [
    { "ref": "wikipedia-bmw-m3", "quote": "resulting in an official 0- 60 mph (97 km/h) acceleration time of 4.8 seconds for the coupé version" },
    { "ref": "grm-2001-m3", "quote": "How many cars can do 0-60 in 4.8 seconds, circle around a Formula 1 track" },
    { "ref": "motorweek-2001-m3", "quote": "Driving the rear wheels through a 6-speed manual gearbox, our tester romped to 60 in 5 seconds flat." }
   ]
  },
  {
   "section": "specs",
   "claimText": "The coupe's weight is printed as 3,415 lb by Grassroots Motorsports and as a 3,450 lb curb weight by Wikipedia, citing Car and Driver.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["grm-2001-m3", "wikipedia-bmw-m3"],
   "conflictNote": "Grassroots Motorsports states the new M3 weighs 3,415 lb. Wikipedia gives a curb weight of 3,450 lb, citing a Car and Driver review that was not fetched. Neither says how or in what equipment the car was weighed, and the difference is not resolved by any source consulted here.",
   "evidence": [
    { "ref": "grm-2001-m3", "quote": "The new M3 weighs 3415 pounds, a bit more than the 2800 pounds of the first M3" },
    { "ref": "wikipedia-bmw-m3", "quote": "The kerb weight is 1,565 kg (3,450 lb)" }
   ]
  },
  {
   "section": "specs",
   "claimText": "Every E46 M3 used a Getrag six-speed with a 3.62:1 final drive and the M Variable Differential Lock; SMG II, from September 2001 production, used the same internal gears and ratios.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["bmw-m-registry-e46", "grm-2001-m3"],
   "evidence": [
    { "ref": "bmw-m-registry-e46", "quote": "Using the unaltered internal gears and ratios of the Getrag Type D manual gearbox, SMG II provides automatic operation of the clutch" },
    { "ref": "grm-2001-m3", "quote": "The final drive is now 3.62:1, lower (numerically higher) than the previous car." }
   ]
  },
  {
   "section": "specs",
   "claimText": "Standard brakes are 12.8 in front and 12.9 in rear vented discs, left undrilled on US cars; the Competition Package and CSL use 13.7 in cross-drilled two-piece front rotors.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["grm-2001-m3", "bmw-m-registry-e46"],
   "evidence": [
    { "ref": "grm-2001-m3", "quote": "The vented front discs are 12.8 inches in diameter, and the rears are 12.9 inches." },
    { "ref": "bmw-m-registry-e46", "quote": "With the exception of U.S.-spec M3 models, the brakes also feature cross-drilled rotors" }
   ]
  },
  {
   "section": "history",
   "claimText": "The Competition Package, introduced in December 2004 for the coupe, brought a 14.5:1 steering rack in place of 15.4:1, M Track Mode, 19-inch cross-spoke wheels, larger front brakes and an exclusive Interlagos Blue paint, with the engine and drivetrain unchanged.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["bmw-m-registry-e46", "wikipedia-bmw-m3", "e46fanatics-zcp"],
   "evidence": [
    { "ref": "bmw-m-registry-e46", "quote": "Exclusive Interlagos Blue metallic (A30) paint option" },
    { "ref": "wikipedia-bmw-m3", "quote": "The engine, gearbox, and other drivetrain components are the same as the standard M3." },
    { "ref": "e46fanatics-zcp", "quote": "was introduced in December of 2004 as an option for the E46 M3 coupe" }
   ]
  },
  {
   "section": "history",
   "claimText": "Laguna Seca Blue and Oxford Green were dropped in September 2004 and Phoenix Yellow in March 2005; Mystic Blue replaced Topaz Blue in March 2003. The registry is the only color table fetched.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["bmw-m-registry-e46"],
   "evidence": [
    { "ref": "bmw-m-registry-e46", "quote": "Laguna Seca Blue and Oxford Green metallic paints discontinued (9/04)" }
   ]
  },
  {
   "section": "problems",
   "claimText": "NHTSA lists airbag recalls covering the E46 M3, including a 2002-2003 passenger airbag campaign for M3 coupes and convertibles and a Takata PSAN inflator campaign covering 2000-2006 M3 coupes and convertibles.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["nhtsa-recalls-2002-m3"],
   "evidence": [
    { "ref": "nhtsa-recalls-2002-m3", "quote": "and M3 coupes and convertibles to address a safety defect in the passenger side frontal air bag which may produce excessive internal pressure" }
   ]
  },
  {
   "section": "problems",
   "claimText": "Owner and chapter sources put preventive rod bearing replacement at 60,000 to 80,000 miles, while E46 Fanatics members report copper showing on bearings pulled at 80,000 to 100,000; no manufacturer interval exists in the fetched sources.",
   "confidence": "low",
   "status": "verified",
   "sourceRefs": ["carolinas-moa-big-3", "autoarchive-e46-m3-guide", "e46fanatics-rod-bearings"],
   "evidence": [
    { "ref": "carolinas-moa-big-3", "quote": "The original rod bearings should be replaced every 60-80,000 miles, especially on vehicles which followed BMW's 15,000-mile oil change recommendation." },
    { "ref": "autoarchive-e46-m3-guide", "quote": "The engine was built with tight bearing clearances, and insufficient lubrication, whether from extended oil change intervals, the wrong oil specification" },
    { "ref": "e46fanatics-rod-bearings", "quote": "A lot of members here have taken their rod bearings off between 80-100k and had evidence of copper showing." }
   ]
  },
  {
   "section": "problems",
   "claimText": "Rod bearing replacement costs quoted by owners run $1,500 to $2,200 at a shop and about $500 in parts for a do-it-yourself job, while the Carolinas BMW MOA page gives $1,800 to almost $10,000 with an average of $2,500 to $3,500.",
   "confidence": "low",
   "status": "verified",
   "sourceRefs": ["e46fanatics-rod-bearings", "carolinas-moa-big-3"],
   "evidence": [
    { "ref": "e46fanatics-rod-bearings", "quote": "At a shop I'd expect to pay $1500-2000. DIY you can do it for $500 or so." },
    { "ref": "carolinas-moa-big-3", "quote": "could cost anywhere from $1,800 to almost $10,000. However, the average cost is just about $2,500-$3,500." }
   ]
  },
  {
   "section": "problems",
   "claimText": "The rear subframe mounting points in the floor crack from fatigue; the repair is welded reinforcement plates, priced around $1,500 by a single chapter site, which gives $4,000 to $5,000 if the floor must be replaced.",
   "confidence": "low",
   "status": "verified",
   "sourceRefs": ["carolinas-moa-big-3", "autoarchive-e46-m3-guide"],
   "evidence": [
    { "ref": "carolinas-moa-big-3", "quote": "A typical subframe reinforcement will cost around $1,500 and if the entire floor needs to be replaced" },
    { "ref": "autoarchive-e46-m3-guide", "quote": "The correct fix is reinforcement plates welded to the floor pan by a qualified shop." }
   ]
  },
  {
   "section": "problems",
   "claimText": "A worn VANOS unit announces itself as a cold-start rattle with lost low-end torque, from degraded seals, failed solenoids or sheared exhaust cam gear bolts; this description rests on one specialist guide.",
   "confidence": "low",
   "status": "verified",
   "sourceRefs": ["autoarchive-e46-m3-guide"],
   "evidence": [
    { "ref": "autoarchive-e46-m3-guide", "quote": "VANOS system failure presents as a rattling sound at cold start, the classic description is marbles in a tin can" }
   ]
  },
  {
   "section": "problems",
   "claimText": "SMG II hydraulic pumps and actuators are a known failure and many cars have been converted to manual; the gearbox was praised for shift speed but criticized as delayed and lurching in stop-start traffic.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["autoarchive-e46-m3-guide", "wikipedia-bmw-m3"],
   "evidence": [
    { "ref": "autoarchive-e46-m3-guide", "quote": "the hydraulic pump and actuators are failure-prone, and many owners have chosen manual conversions to eliminate these issues entirely" },
    { "ref": "wikipedia-bmw-m3", "quote": "some people found its shifts to be delayed and lurching in stop-start traffic" }
   ]
  },
  {
   "section": "market",
   "claimText": "As of September 2026 classic.com benchmarks the E46 M3 at $31,975, with a manual coupe at $35,512, an SMG coupe at $25,646, a manual convertible at $24,795 and an SMG convertible at $22,844.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["classic-e46-m3"],
   "evidence": [
    { "ref": "classic-e46-m3", "quote": "The E46 generation of BMW M3 was introduced for the 2001 model year" }
   ]
  },
  {
   "section": "market",
   "claimText": "As of September 2026 classic.com benchmarks the manual Competition Package at $42,852, with 2026 results from $120,000 for a 28,000-mile car in February to $31,000 for a 123,000-mile car in August.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["classic-e46-m3-zcp-manual"],
   "evidence": [
    { "ref": "classic-e46-m3-zcp-manual", "quote": "Production of the 6 speed equipped BMW M3 Competition Package ended in 2006." }
   ]
  }
 ]
};
