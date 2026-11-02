/**
 * Researched model draft - Ferrari 488 (488 GTB, 488 Spider, 488 Pista, 488 Pista Spider; US model years 2016-2020).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seed488 = {
 "slug": "ferrari/488",
 "make": "Ferrari",
 "model": "488",
 "generation": "GTB, Spider, Pista, US market",
 "generationCode": null,
 "trim": "488 GTB, 488 Spider, 488 Pista, 488 Pista Spider",
 "yearStart": 2016,
 "yearEnd": 2020,
 "bodyStyles": [
  "2-door mid-engine coupe (488 GTB, 488 Pista)",
  "2-door convertible Spider (classic.com describes the 488 Spider as a convertible hardtop; 488 Spider, 488 Pista Spider)"
 ],
 "engines": [
  "3.9-liter (3,902 cc) twin-turbocharged V8, 661 hp at 8,000 rpm and 561 lb-ft at 3,000 rpm in seventh gear, 488 GTB and 488 Spider",
  "3,902 cc twin-turbocharged V8 in higher tune, 710 hp per Edmunds (Ferrari's Pista Spider release states 720 cv), 488 Pista and 488 Pista Spider"
 ],
 "productionTotal": null,
 "productionNotes": "Ferrari does not publish a production total for the 488 family, and none of the pages read for this research gives one for the GTB, the Spider, the Pista or the Pista Spider. Wikipedia's 488 article carries no totals for the standard cars, and classic.com's page for the 2020 Pista Spider has no production history or build numbers. What the sources do disagree on is the length of the run. evo's review is headed 'Ferrari 488 GTB (2015 - 2019)' and says the car was succeeded by the F8 Tributo, while Wikipedia gives production as 2015 to 2020 and classic.com's market pages run to model year 2020 for the GTB, the Spider and the Pista. That could be a model-year versus calendar-year difference, but no source says so, so it is carried as a dispute. The US start is also fuzzy. Edmunds reviews a 2016 488 GTB and NHTSA's recall campaign 15V881000 covers 2016 cars built between September and November 2015, while classic.com's GTB page is headed 2015 to 2020. The Pista has its own conflict: Edmunds calls it new for 2019, while classic.com lists the Pista for 2018 to 2020 and NHTSA's recall database lists a 2018 488 Pista under campaign 19V411000. No source read here documents a US list price for the Pista or Pista Spider. The 2016 and 2019 GTB prices are documented (Edmunds, TFLcar, Yahoo Autos). A 10-car J50 series appears in other writing about the family, but no page read for this research confirms it, so it is not counted.",
 "notableTrims": [
  {
   "name": "488 GTB (US model years 2016-2019)",
   "note": "The baseline coupe. Listed at $242,737 base in 2016 and about $245,400 with destination charge per Edmunds; Edmunds lists about $262,647 with destination for 2019. It is the car every other 488 is measured against, and as of November 2026 it is the lowest-priced of the four on classic.com."
  },
  {
   "name": "488 Spider (US model years 2016-2020)",
   "note": "The open car, listed by classic.com for 2016 to 2020. As of November 2026 classic.com's benchmark sits about $24,800 above the GTB's, a premium of roughly 11 percent."
  },
  {
   "name": "488 Pista (US model years 2018 or 2019 to 2020)",
   "note": "The lighter, more powerful special series at 710 hp. Edmunds calls it new for 2019 and classic.com lists 2018 to 2020; NHTSA's recall database lists a 2018 car. As of November 2026 classic.com's benchmark is about twice the GTB's."
  },
  {
   "name": "488 Pista Spider (US model years 2019-2020)",
   "note": "Ferrari's release calls it the company's 50th drop-top model. One-piece carbon-fiber wheels were optional and cut wheel weight by 20 percent against the forged alloys. As of November 2026 classic.com's 2020 benchmark is above $1 million."
  },
  {
   "name": "Early 2016 488 GTB, built September to November 2015",
   "note": "The only cars covered by NHTSA campaign 15V881000, a low-pressure fuel line connection that was not properly coated during manufacturing. A build-date check on a 2016 car settles whether it applies."
  }
 ],
 "specs": {
  "layout": "Mid-engine sports car with a twin-turbocharged V8 (Wikipedia: mid-engine; driven wheels not stated in the sources read)",
  "chassis": "Not documented in the sources read for this page",
  "engine": "3.9-liter (3,902 cc per Ferrari's Pista Spider release) twin-turbocharged V8; Pista and Pista Spider in higher tune",
  "power": "661 hp at 8,000 rpm (488 GTB); 710 hp (488 Pista per Edmunds; Ferrari's Pista Spider release states 720 cv)",
  "torque": "561 lb-ft at 3,000 rpm in seventh gear (488 GTB, TFLcar; Yahoo Autos rounds to 560)",
  "transmission": "Seven-speed automated manual, listed by Edmunds as '3.9L 8cyl Turbo 7AM'; TFLcar describes automatic mode and a Race setting that sharpens shift mapping",
  "weight": "Disputed: 3,252 lb curb weight for the 2016 GTB per TFLcar, 3,412 lb for the US-spec GTB per Wikipedia",
  "acceleration": "0-60 mph in 3.0 seconds per TFLcar for the 488 GTB (Yahoo Autos gives 3 seconds to 62 mph)",
  "top_speed": "205 mph for the 488 GTB per TFLcar and Yahoo Autos",
  "zero_to_125_mph": "8.3 seconds for the 488 GTB per Yahoo Autos (single source)",
  "epa_mpg": "15 city and 22 highway, 18 combined for the 488 GTB (TFLcar, Edmunds)",
  "us_msrp_2016": "$242,737 base per TFLcar and Yahoo Autos; about $245,400 including destination charge per Edmunds; $353,838 as tested per TFLcar",
  "us_msrp_2019": "About $262,647 including destination charge for the 2019 488 GTB per Edmunds (single source)",
  "us_msrp_pista": "No US list price for the Pista or Pista Spider is documented in the sources read for this page",
  "pista_spider_wheels": "Optional one-piece carbon-fiber wheels, 20 percent lighter than the standard forged alloys per Ferrari's release"
 },
 "summary": "The Ferrari 488 replaced the naturally aspirated 458 Italia with a 3.9-liter twin-turbocharged V8 rated at 661 hp and 561 lb-ft, and the press that drove it agreed it gave up some noise and response while losing almost no throttle lag. US sales are documented from the 2016 model year, with the GTB coupe listed at $242,737 base ($353,838 as tested) and the Spider following. The 710 hp Pista and the Pista Spider, which Ferrari called its 50th drop-top, came late in the run, and the sources disagree on whether the Pista was a 2018 or 2019 US model year and on whether production ended in 2019 or 2020. Ferrari does not publish a production total and none appears in any page read here. As of November 2026 classic.com puts its benchmark at $226,107 for the GTB, $250,899 for the Spider, $459,208 for the Pista and $1,047,764 for a 2020 Pista Spider. NHTSA lists seven recall campaigns across the GTB, Spider and Pista, two of them for brakes.",
 "history": "## What the 488 gave up and gained\n\nThe 458 Italia that preceded it was a 4.5-liter naturally aspirated V8 with a redline about 1,000 rpm above the 488's 8,000. The 488 swapped it for a 3.9-liter twin-turbo V8, the first mid-engine Ferrari to use a turbocharged V8 since the F40 per Wikipedia, and the reviewers who tested it spent their words on what that trade cost. evo's verdict is a magnificent powertrain that still 'Misses the noise and response of the NA V8s', while the US first drive on Yahoo Autos says that 'Compared to the 458, the volume has gone down, but other notes have been added.' Both found the lag small. evo called it imperceptible, and the Yahoo writer said twin turbos and software 'reduce power lag to almost - but not quite - zero.' What the trade bought: 661 hp and 561 lb-ft, 3.0 seconds to 60 mph in TFLcar's test, 8.3 seconds to 125 mph and a 205 mph top speed per Yahoo Autos.\n\n## What a US buyer paid\n\nFerrari told US writers the 488 GTB would cost $242,737, and TFLcar's test car, with options, came to $353,838, which is $111,101 of extras on a car that already cost nearly a quarter of a million dollars. Edmunds gives about $245,400 for a 2016 car with destination charge and about $262,647 for a 2019 car on the same basis, so the sticker rose roughly seven percent over four model years. EPA ratings were 15 city, 22 highway and 18 combined. No source read here documents a US list price for the Pista or the Pista Spider.\n\n## Spider, Pista and Pista Spider\n\nThe Spider is listed by classic.com for the 2016 to 2020 model years. The Pista is the 710 hp, lighter version of the same car; Edmunds describes it as an upgraded 488 GTB with less sound-deadening material and calls it new for 2019. classic.com lists it for 2018 to 2020 and NHTSA's recall database lists a 2018 Pista under the airbag control unit campaign, so the first US model year is disputed. The Pista Spider followed, and Ferrari's own release calls it 'the 50th drop-top model from the Prancing Horse,' adding that a US premiere was natural because North American clients had been buying high-performance convertibles since the 1950s. Its option list included one-piece carbon-fiber wheels that weigh 20 percent less than the standard forged alloys.\n\n## Where the record is thin\n\nFerrari publishes no production totals for the 488 family. Wikipedia and classic.com run production to 2020, while evo's review is headed 2015 to 2019 and says the car was succeeded by the F8 Tributo. The US curb weight is also contested: TFLcar quotes 3,252 lb and Wikipedia's US-spec figure is 3,412 lb, a gap of 160 lb that nobody explains. The recall record is the best-documented part of the story. NHTSA lists five campaigns for the 2016 GTB alone, and one of them, 18V164000, is a software fault that could keep the car from warning the driver that its carbon-ceramic brake discs were critically worn. The Drive reported in March 2018 that it covered 40 cars, 39 GTBs and one Spider, all 2016 models according to Carscoops. Later campaigns reached the 2019 GTB and the Pista, for a fuel vapor separator that could crack and a brake fluid reservoir cap that could fail to vent.",
 "marketNotes": "As of November 2026 classic.com's benchmark for a 488 GTB is $226,107. That page tracks asking prices, between $204,900 and $330,000 across the visible listings, and shows no completed-sale count or average, so the GTB figure is a benchmark and not a sales record. The 488 Spider is better documented: a benchmark of $250,899, an average of $263,823 across 43 sales, a lowest recorded sale of $153,352 and a highest of $506,000, none dated on the page, for model years 2016 to 2020. The 488 Pista shows a benchmark of $459,208 and an average of $465,181 across 44 sales, with a lowest sale of $218,340, a highest of $665,000 and a most recent sale of $404,413, again undated, for 2018 to 2020. The 2020 Pista Spider is a different order of money: a benchmark of $1,047,764, with three Bring a Trailer results visible on classic.com in September 2026, from $1,068,000 on September 29 to $1,801,000 on September 11. Those are individual lot results, not a market average. Against the 2016 GTB base of $242,737, the GTB benchmark sits about $16,600 lower as of November 2026. The Spider premium over the GTB benchmark is about $24,800, and the Pista benchmark is about twice the GTB's.",
 "whatToLookFor": "The recall list comes first, because the 488 has several and they differ by model year and build date. A VIN check at nhtsa.gov shows whether these are closed: the passenger frontal airbag inflator (19V006000), the airbag control unit (19V411000), the brake disc wear warning (18V164000), brake fluid leaks (21V833000), the fuel vapor separator (19V090000), the Pista's brake fluid reservoir cap (22V536000) and, on a 2016 GTB built between September and November 2015, the fuel line connection (15V881000). The brake wear warning matters on a car with carbon-ceramic brakes: What Car notes the 2018 software recall covers a bug that may stop the warning from appearing before the discs reach their critical wear threshold, so a test drive that confirms the warning works tells you more than the paperwork. On a Pista or Pista Spider, check the paperwork for the model year, since Edmunds and classic.com disagree on whether the first cars were 2018 or 2019. Optional lightweight content is part of what separates Pista Spiders, and Ferrari's release lists one-piece carbon-fiber wheels at 20 percent lighter than the forged alloys; confirm they are on the car and not on an invoice. The GTB's options spread is wide, as TFLcar's $111,101 of extras shows, so two cars with the same title year can be priced very differently. Edmunds finds the infotainment system finicky to use. Weight figures in listings may be dry, curb or EU-spec.",
 "commonProblems": "Recalls are the best-documented problem on the 488. NHTSA lists five campaigns for the 2016 488 GTB: 15V881000, a low-pressure fuel line connection that was not properly coated during manufacturing, on cars built between September and November 2015; 19V006000, passenger frontal airbag inflators that may explode as the propellant degrades; 19V411000, an airbag control unit that may malfunction; 18V164000, a software error that may keep the driver from being warned that the brake discs are critically worn; and 21V833000, a brake system that may leak fluid. For 2019, NHTSA lists 21V833000 and 19V090000, a fuel vapor separator that may crack and leak fuel, on the GTB, and 19V090000 and 22V536000, a brake fluid reservoir cap that may not vent properly, on the Pista. The 2018 Pista appears under 19V411000. The Drive reported in March 2018 that the brake warning recall covered 40 cars, 39 hardtop GTBs and one Spider, and What Car describes the fault as a bug in the software that calculates wear on the carbon-ceramic discs. No source read for this research gives a repair cost or a failure rate for carbon-ceramic brakes, the engine or the gearbox, so none is stated.",
 "valueTrajectory": "A new 2016 488 GTB listed at $242,737 base and, as of November 2026, classic.com's benchmark for the GTB is $226,107, about seven percent below that sticker and roughly 14 percent below the 2019 car's $262,647 with destination. That is the shape of a modern Ferrari that has stopped depreciating, with the GTB's visible asking range of $204,900 to $330,000 spanning mileage and options rather than model year alone. The Spider's benchmark of $250,899 and 43 recorded sales put it above the GTB by roughly 11 percent. The special series carry the real separation: the Pista benchmark of $459,208 is about twice the GTB's, with 44 sales at an average of $465,181, and the 2020 Pista Spider benchmark of $1,047,764 is more than four times the GTB's, with three Bring a Trailer results between $1,068,000 and $1,801,000 in September 2026. The US list prices of the Pista and Pista Spider are not documented in the sources read here, so the ratio to original sticker cannot be given for either. In outline, the base cars have settled near the price of a new one, and the limited-run variants have appreciated well beyond it.",
 "overallConfidence": "medium",
 "sources": [
  {
   "ref": "edmunds-2016",
   "title": "2016 Ferrari 488 GTB Review",
   "url": "https://edmunds.com/ferrari/488-gtb/2016/coupe/st-401714296/review",
   "publisher": "Edmunds",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "US 2016 model year: MSRP about $245,400 including destination charge, trim listed as '2dr Coupe (3.9L 8cyl Turbo 7AM)', EPA 18 combined (15 city, 22 highway)."
  },
  {
   "ref": "edmunds-2019",
   "title": "2019 Ferrari 488 GTB Review",
   "url": "https://edmunds.com/ferrari/488-gtb/2019/review",
   "publisher": "Edmunds",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "US 2019 model year: MSRP about $262,647 including destination charge; the 488 Pista described as new for 2019 with a revised engine at 710 horsepower and less sound-deadening; 661 hp for the GTB; infotainment 'finicky to use'; EPA 18 combined."
  },
  {
   "ref": "tflcar-2016",
   "title": "2016 Ferrari 488 GTB Test Drive - A Fitting Successor to the 458 Italia [Review]",
   "url": "https://tflcar.com/2016/06/2016-ferrari-488-gtb-test-drive-review",
   "publisher": "TFLcar",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "US test drive: base price $242,737, as tested $353,838, 661 hp at 8,000 rpm, 561 lb-ft at 3,000 rpm in seventh gear, 0-60 mph in 3.0 seconds, curb weight 3,252 lb, EPA 15 city and 22 highway. Race mode sharpens throttle, shift mapping, exhaust note and damping."
  },
  {
   "ref": "yahoo-488-first-drive",
   "title": "Ferrari 488 GTB: First Drive",
   "url": "https://www.yahoo.com/autos/ferrari-488-gtb-first-drive-in-horse-racing-good-120800453137.html",
   "publisher": "Yahoo Autos",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "US first drive: 'Ferrari says the 488 GTB will cost $242,737 here', 661 hp and 560 lb-ft, 0-62 mph in 3 seconds, 0-125 mph in 8.3 seconds, top speed 205 mph, lag 'almost but not quite zero', volume down against the 458 with other notes added; 458 had a 4.5-liter naturally aspirated V8 with a redline about 1,000 rpm higher."
  },
  {
   "ref": "evo-488-gtb",
   "title": "Ferrari 488 GTB review - outrageous performance, sublime chassis",
   "url": "https://www.evo.co.uk/reviews/17038/ferrari-488-gtb-review-outrageous-performance-sublime-chassis",
   "publisher": "evo",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "British review used for driving character and run dates only, not price: imperceptible lag, 'Misses the noise and response of the NA V8s', the heading 'Ferrari 488 GTB (2015 - 2019)', and the F8 Tributo named as successor."
  },
  {
   "ref": "wikipedia-488",
   "title": "Ferrari 488",
   "url": "https://en.wikipedia.org/wiki/Ferrari_488",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Pointer only. Production 2015-2020; kerb weights 1,470 kg EU-spec and 1,548 kg US-spec for the GTB; 1,380 kg for the 488 Spider; first mid-engine Ferrari with a turbocharged V8 since the F40. No production totals."
  },
  {
   "ref": "albawaba-pista-spider",
   "title": "Pebble Beach world premiere: new special series Ferrari 488 Pista Spider",
   "url": "https://www.albawaba.net/business/pr/pebble-beach-world-premiere-new-special-series-ferrari-488-pista-spider-1180634",
   "publisher": "Albawaba (reprint of a Ferrari press release)",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Reprint of Ferrari's Pista Spider press release, labeled a press release on the page: 50th drop-top model, 3,902 cc twin-turbo V8 at 720 cv, optional one-piece carbon-fiber wheels 20 percent lighter than the forged alloys. Table figures (torque, weight, acceleration, top speed) not used here. No production figure and no US price."
  },
  {
   "ref": "thedrive-brake-recall",
   "title": "Ferrari Is Recalling the 488 Over Brake Monitoring Software Issue",
   "url": "https://www.thedrive.com/news/19622/ferrari-is-recalling-the-488-over-brake-monitoring-software-issue",
   "publisher": "The Drive",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "March 26, 2018 report: 40 cars affected, 39 hardtop GTBs and one Spider, 2016 model year per Carscoops; cars fail to warn drivers when brake discs are worn; software remedy."
  },
  {
   "ref": "whatcar-488-reliability",
   "title": "Ferrari 488 GTB used review: reliability",
   "url": "https://www.whatcar.com/ferrari/488-gtb/coupe/used-review/n23822/reliability",
   "publisher": "What Car?",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "British publication, used for the description of the brake wear software fault only."
  },
  {
   "ref": "classic-488-gtb",
   "title": "Ferrari 488 GTB (2015 to 2020)",
   "url": "https://www.classic.com/m/ferrari/488/gtb",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of November 2026: market benchmark $226,107; visible asking prices $204,900 to $330,000; page references 435 related listings. No sales count or average stated."
  },
  {
   "ref": "classic-488-spider",
   "title": "Ferrari 488 Spider (2016 to 2020)",
   "url": "https://www.classic.com/m/ferrari/488/spider",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of November 2026: benchmark $250,899, average $263,823, 43 sales, lowest recorded sale $153,352, highest $506,000 (dates not given on the page); model years 2016 to 2020."
  },
  {
   "ref": "classic-488-pista",
   "title": "Ferrari 488 Pista market",
   "url": "https://www.classic.com/m/ferrari/488/pista",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of November 2026: benchmark $459,208, average $465,181, 44 sales, $20.5m dollar volume, lowest sale $218,340, highest $665,000, most recent $404,413 (dates not given); model years 2018 to 2020."
  },
  {
   "ref": "classic-488-pista-spider-2020",
   "title": "Ferrari 488 Pista Spider, model year 2020",
   "url": "https://www.classic.com/m/ferrari/488/pista-spider/year-2020/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of November 2026: 2020 benchmark $1,047,764; sold listings visible include three Bring a Trailer results in September 2026 between $1,068,000 and $1,801,000; Pista Spider market labeled 2019 to 2020; no production history or build numbers on the page."
  },
  {
   "ref": "nhtsa-488gtb-2016",
   "title": "NHTSA recalls by vehicle: 2016 Ferrari 488 GTB",
   "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=FERRARI&model=488%20GTB&modelYear=2016",
   "publisher": "NHTSA",
   "sourceType": "government",
   "reliability": "high",
   "notes": "NHTSA's recall query for the 2016 488 GTB returns five campaigns: 15V881000, 19V006000, 19V411000, 18V164000 and 21V833000, with component and summary text."
  },
  {
   "ref": "nhtsa-488gtb-2019",
   "title": "NHTSA recalls by vehicle: 2019 Ferrari 488 GTB",
   "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=FERRARI&model=488%20GTB&modelYear=2019",
   "publisher": "NHTSA",
   "sourceType": "government",
   "reliability": "high",
   "notes": "NHTSA's recall query for the 2019 488 GTB returns two campaigns: 21V833000 (brake fluid leak) and 19V090000 (fuel vapor separator)."
  },
  {
   "ref": "nhtsa-488pista-2018",
   "title": "NHTSA recalls by vehicle: 2018 Ferrari 488 Pista",
   "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=FERRARI&model=488%20PISTA&modelYear=2018",
   "publisher": "NHTSA",
   "sourceType": "government",
   "reliability": "high",
   "notes": "NHTSA's recall query for the 2018 488 Pista returns one campaign, 19V411000 (airbag control unit), which shows a 2018 Pista in the federal record."
  },
  {
   "ref": "nhtsa-488pista-2019",
   "title": "NHTSA recalls by vehicle: 2019 Ferrari 488 Pista",
   "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=FERRARI&model=488%20PISTA&modelYear=2019",
   "publisher": "NHTSA",
   "sourceType": "government",
   "reliability": "high",
   "notes": "NHTSA's recall query for the 2019 488 Pista returns two campaigns: 19V090000 (fuel vapor separator) and 22V536000 (brake fluid reservoir cap)."
  }
 ],
 "claims": [
  {
   "section": "specs",
   "claimText": "The 488 GTB is rated at 661 hp at 8,000 rpm and about 560 lb-ft of torque (TFLcar gives 561 lb-ft at 3,000 rpm in seventh gear).",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "tflcar-2016",
    "yahoo-488-first-drive"
   ],
   "evidence": [
    {
     "ref": "tflcar-2016",
     "quote": "Torque (ft./ lbs.): 561 @ 3,000 rpm in 7th gear"
    },
    {
     "ref": "yahoo-488-first-drive",
     "quote": "a V-8 machine that with 661 hp and 560 ft-lbs of torque is faster"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "In 2016 the 488 GTB had a US base price of $242,737 per TFLcar and Yahoo Autos, and Edmunds gives about $245,400 for the same year including destination charge, so the figures differ by basis rather than conflict.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "tflcar-2016",
    "yahoo-488-first-drive",
    "edmunds-2016"
   ],
   "evidence": [
    {
     "ref": "tflcar-2016",
     "quote": "The base price was set at $242,737."
    },
    {
     "ref": "yahoo-488-first-drive",
     "quote": "Ferrari says the 488 GTB will cost $242,737 here"
    },
    {
     "ref": "edmunds-2016",
     "quote": "Including destination charge, it arrives with a Manufacturer's Suggested Retail Price (MSRP) of about $245,400."
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "TFLcar's 2016 test car came to $353,838 as tested, which is $111,101 above the $242,737 base price, and the single source for the as-tested figure.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "tflcar-2016"
   ],
   "evidence": [
    {
     "ref": "tflcar-2016",
     "quote": "Optional features and equipment elevated the final tally to $353,838."
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "Edmunds lists the 2019 488 GTB at about $262,647 including destination charge; this is a single-source figure.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "edmunds-2019"
   ],
   "evidence": [
    {
     "ref": "edmunds-2019",
     "quote": "it arrives with a Manufacturer's Suggested Retail Price (MSRP) of about $262,647."
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "EPA ratings for the 488 GTB are 15 mpg city and 22 mpg highway, 18 combined, per TFLcar and Edmunds.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "tflcar-2016",
    "edmunds-2016"
   ],
   "evidence": [
    {
     "ref": "tflcar-2016",
     "quote": "EPA Mileage Estimates: 15mpg city / 22 mpg highway"
    },
    {
     "ref": "edmunds-2016",
     "quote": "18 Combined MPG (15 City/22 Highway)"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The US curb weight of the 488 GTB is contested: TFLcar gives 3,252 lb, while Wikipedia gives 3,412 lb (1,548 kg) for the US-spec car and 3,241 lb (1,470 kg) for the EU-spec car.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "tflcar-2016",
    "wikipedia-488"
   ],
   "conflictNote": "TFLcar states a curb weight of 3,252 lb. Wikipedia lists the US-spec 488 GTB at 3,412 lb (1,548 kg) and the EU-spec car at 3,241 lb (1,470 kg). The gap between TFLcar and Wikipedia's US figure is about 160 lb. No source consulted says whether the figures are on the same basis. Not resolved.",
   "evidence": [
    {
     "ref": "tflcar-2016",
     "quote": "Curb Weight: 3,252 lbs. – weight distribution=41.5% front / 58.5% rear."
    },
    {
     "ref": "wikipedia-488",
     "quote": "1,548 kg (3,412 lb) (kerb, GTB, US-spec)"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "Yahoo Autos reports 0-62 mph in 3 seconds flat and 0-125 mph in 8.3 seconds for the 488 GTB, and TFLcar gives 0-60 mph in 3.0 seconds; both give a 205 mph top speed. The 0-125 mph figure is single-source.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "yahoo-488-first-drive",
    "tflcar-2016"
   ],
   "evidence": [
    {
     "ref": "yahoo-488-first-drive",
     "quote": "The results: the jump to 62 mph takes 3 seconds flat, and 125 mph arrives in 8.3 seconds"
    },
    {
     "ref": "tflcar-2016",
     "quote": "The 488 rips from 0-60 mph in 3.0 seconds and is capable of a top speed of 205 mph."
    }
   ]
  },
  {
   "section": "history",
   "claimText": "The 488 replaced the 458 Italia's 4.5-liter V8, whose redline was 1,000 rpm above the 488's 8,000 rpm, and reviewers said the turbo car gave up some noise and response: evo says it misses the noise and response of the naturally aspirated V8s, and Yahoo Autos says the volume has gone down against the 458 while other notes were added.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "evo-488-gtb",
    "yahoo-488-first-drive"
   ],
   "evidence": [
    {
     "ref": "evo-488-gtb",
     "quote": "Misses the noise and response of the NA V8s"
    },
    {
     "ref": "yahoo-488-first-drive",
     "quote": "Compared to the 458, the volume has gone down, but other notes have been added"
    }
   ]
  },
  {
   "section": "history",
   "claimText": "Reviewers found turbo lag minimal: evo reports imperceptible lag, and Yahoo Autos says twin turbos and software reduce power lag to almost, but not quite, zero.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "evo-488-gtb",
    "yahoo-488-first-drive"
   ],
   "evidence": [
    {
     "ref": "evo-488-gtb",
     "quote": "imperceptible lag and mighty performance"
    },
    {
     "ref": "yahoo-488-first-drive",
     "quote": "there's never an appreciable pause in power delivery"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 488 Pista makes 710 hp per Edmunds, and Ferrari's Pista Spider release states 720 cv from a 3,902 cc twin-turbocharged V8.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "edmunds-2019",
    "albawaba-pista-spider"
   ],
   "evidence": [
    {
     "ref": "edmunds-2019",
     "quote": "a revised engine good for 710 horsepower"
    },
    {
     "ref": "albawaba-pista-spider",
     "quote": "The 3902cc twin-turbo V8 unleashes 720 cv"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "Ferrari's Pista Spider release, reprinted by Albawaba, calls the car the company's 50th drop-top model. Single source because it is the manufacturer's own statement.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "albawaba-pista-spider"
   ],
   "evidence": [
    {
     "ref": "albawaba-pista-spider",
     "quote": "The Ferrari 488 Pista Spider is the 50th drop-top model from the Prancing Horse"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "One-piece carbon-fiber wheels were optional on the Pista Spider and weigh 20 percent less than the standard forged alloy wheels, per Ferrari's release.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "albawaba-pista-spider"
   ],
   "evidence": [
    {
     "ref": "albawaba-pista-spider",
     "quote": "Also available are the optional one-piece carbon-fibre wheels which offer a 20% weight reduction over the standard forged alloys."
    }
   ]
  },
  {
   "section": "history",
   "claimText": "The first US model year of the 488 Pista is disputed: Edmunds calls it new for 2019, while classic.com lists the Pista for model years 2018 to 2020 and NHTSA's recall database lists a 2018 488 Pista under campaign 19V411000.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "edmunds-2019",
    "classic-488-pista",
    "nhtsa-488pista-2018"
   ],
   "conflictNote": "Edmunds states the 488 Pista is new for 2019. classic.com's Pista page covers 2018 to 2020. NHTSA's database returns campaign 19V411000 for a 2018 488 Pista. Whether a 2018 Pista was sold in the US or the listing reflects a build or titling year is not stated by any source consulted. Not resolved.",
   "evidence": [
    {
     "ref": "edmunds-2019",
     "quote": "Ferrari's even upping the ante for 2019 with the new 488 Pista."
    },
    {
     "ref": "classic-488-pista",
     "quote": "Model years for Ferrari 488 Pista (2018 to 2020)"
    },
    {
     "ref": "nhtsa-488pista-2018",
     "quote": "The air bag Electronic Control Unit (ECU) may malfunction, possibly causing the non-deployment or improper deployment"
    }
   ]
  },
  {
   "section": "production",
   "claimText": "The end of 488 production is disputed: evo's review is headed 2015 to 2019 and says the F8 Tributo succeeded the car, while classic.com's GTB and Spider pages run to model year 2020 (Wikipedia's infobox also gives 2015 to 2020).",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "evo-488-gtb",
    "classic-488-gtb",
    "classic-488-spider"
   ],
   "conflictNote": "evo's heading reads Ferrari 488 GTB (2015 - 2019). Wikipedia's infobox states production of 2015 to 2020, as a pointer only. classic.com's GTB page is headed 2015 to 2020 and its Spider page 2016 to 2020. The difference could be calendar versus model year but no source says so. Not resolved by any source consulted here.",
   "evidence": [
    {
     "ref": "evo-488-gtb",
     "quote": "Ferrari 488 GTB (2015 - 2019) review, specs and buying guide"
    },
    {
     "ref": "classic-488-gtb",
     "quote": "Ferrari 488 GTB (2015 to 2020)"
    },
    {
     "ref": "classic-488-spider",
     "quote": "Ferrari 488 Spider (2016 to 2020)"
    }
   ]
  },
  {
   "section": "problems",
   "claimText": "NHTSA lists five recall campaigns for the 2016 488 GTB: 15V881000 (fuel line connection, cars built September to November 2015), 19V006000 (passenger frontal airbag inflator), 19V411000 (airbag control unit), 18V164000 (brake disc wear warning software) and 21V833000 (brake fluid leak).",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "nhtsa-488gtb-2016"
   ],
   "evidence": [
    {
     "ref": "nhtsa-488gtb-2016",
     "quote": "may be equipped with a low pressure fuel line connection that was not properly coated during manufacturing"
    }
   ]
  },
  {
   "section": "problems",
   "claimText": "For the 2019 model year NHTSA lists campaigns 21V833000 (brake fluid leak) and 19V090000 (fuel vapor separator) for the 488 GTB, and 19V090000 and 22V536000 (brake fluid reservoir cap that may not vent) for the 488 Pista.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "nhtsa-488gtb-2019",
    "nhtsa-488pista-2019"
   ],
   "evidence": [
    {
     "ref": "nhtsa-488gtb-2019",
     "quote": "The brake system may leak brake fluid, resulting in a loss of braking ability."
    },
    {
     "ref": "nhtsa-488pista-2019",
     "quote": "The brake fluid reservoir cap may not vent properly"
    }
   ]
  },
  {
   "section": "problems",
   "claimText": "In March 2018 The Drive reported a software recall of 40 cars, 39 hardtop GTBs and one Spider, for failing to warn drivers when the brake discs are worn; What Car describes a 2018 software recall of the same kind, and NHTSA lists it for the 2016 GTB as 18V164000.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "thedrive-brake-recall",
    "whatcar-488-reliability",
    "nhtsa-488gtb-2016"
   ],
   "evidence": [
    {
     "ref": "thedrive-brake-recall",
     "quote": "Just 40 cars will have to have their code rejigged."
    },
    {
     "ref": "whatcar-488-reliability",
     "quote": "This recall was issued in 2018 and can be resolved upon contacting your local Ferrari dealership."
    },
    {
     "ref": "nhtsa-488gtb-2016",
     "quote": "Due to a software error, the driver may not be warned that the brake discs are critically worn."
    }
   ]
  },
  {
   "section": "market",
   "claimText": "As of November 2026 classic.com's benchmark for a 488 Pista is $459,208 with an average of $465,181 across 44 sales, a lowest sale of $218,340 and a highest of $665,000.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-488-pista"
   ],
   "evidence": [
    {
     "ref": "classic-488-pista",
     "quote": "For Sale 8 Avg $465,181 Sales Count 44 Dollar Volume $20.5m Lowest Sale $218,340"
    }
   ]
  },
  {
   "section": "market",
   "claimText": "As of November 2026 classic.com's benchmark is $226,107 for the 488 GTB and $250,899 for the 488 Spider, the Spider with an average of $263,823 across 43 sales, a lowest sale of $153,352 and a highest of $506,000.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-488-gtb",
    "classic-488-spider"
   ],
   "evidence": [
    {
     "ref": "classic-488-gtb",
     "quote": "Ferrari 488 GTB (2015 to 2020) CMB $226,107 The CLASSIC.COM Market Benchmark (CMB) represents a benchmark value for vehicles"
    },
    {
     "ref": "classic-488-spider",
     "quote": "For Sale 16 Avg $263,823 Sales Count 43 Dollar Volume $11.3m Lowest Sale $153,352"
    }
   ]
  },
  {
   "section": "market",
   "claimText": "As of November 2026 classic.com's benchmark for a 2020 488 Pista Spider is $1,047,764, and the page shows three Bring a Trailer results in September 2026 between $1,068,000 (September 29) and $1,801,000 (September 11).",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "classic-488-pista-spider-2020"
   ],
   "evidence": [
    {
     "ref": "classic-488-pista-spider-2020",
     "quote": "CMB (CLASSIC.COM Market Benchmark) $1,047,764 The CLASSIC.COM Market Benchmark (CMB) represents a benchmark value for vehicles"
    }
   ]
  },
  {
   "section": "history",
   "claimText": "classic.com says that in its second year of production, 2016, the 488 was offered in a convertible hardtop Spider body style.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "classic-488-spider"
   ],
   "evidence": [
    {
     "ref": "classic-488-spider",
     "quote": "In its second year of production (2016), the Ferrari 488 was offered in a convertible hardtop Spider body style."
    }
   ]
  },
  {
   "section": "history",
   "claimText": "Wikipedia describes the 488 as a mid-engine sports car and the first mid-engine Ferrari to use a turbocharged V8 since the F40.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-488"
   ],
   "evidence": [
    {
     "ref": "wikipedia-488",
     "quote": "The car replaced the 458, being the first mid-engine Ferrari to use a turbocharged V8 since the F40."
    }
   ]
  }
 ]
};
