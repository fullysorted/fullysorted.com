/**
 * Researched model draft - Ferrari 599 GTB Fiorano, 599 HGTE, 599 GTO and 599 SA Aperta (US model years 2007-2012).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seed599 = {
 "slug": "ferrari/599",
 "heroPhoto": "/images/models/ferrari-599.jpg",
 "heroPhotoCredit": "Photo: Mr.choppers, CC BY-SA 3.0, via Wikimedia Commons",
 "make": "Ferrari",
 "model": "599",
 "generation": null,
 "generationCode": null,
 "trim": "GTB Fiorano, HGTE package, GTO, SA Aperta",
 "yearStart": 2007,
 "yearEnd": 2012,
 "bodyStyles": [
  "2-door 2-seat berlinetta (fixed-roof coupe), 599 GTB Fiorano and 599 GTO",
  "2-door 2-seat open roadster with removable fabric top, 599 SA Aperta"
 ],
 "engines": [
  "5,999 cc Tipo F140 C/CE V12, naturally aspirated, 612 hp at 7,600 rpm and 448 lb-ft at 5,600 rpm as rated for the US 599 GTB Fiorano (MotorWeek rounds the figure to 611 hp)",
  "5,999 cc F140 V12 in 599 GTO tune, 660 hp at 8,250 rpm (670 PS; classic.com states 661 hp) and 457 lb-ft at 6,500 rpm, F1 gearbox only"
 ],
 "productionTotal": null,
 "productionNotes": "No manufacturer figure for total 599 GTB Fiorano production was found in this research; the Ferrari page for the car carries no production number at all. The only total found is Sports Car Market's profile of a 2007 car, which gives approximately 3,500 for the 2006-12 run, and a single trade-magazine figure is not enough to print a total, so productionTotal is left null. The variant counts are better supported. For the six-speed manual car, RM Sotheby's story on a 2007 manual, classic.com's manual market page and Wikipedia all state 30 cars built, of which 20 went to North America or the United States (classic.com adds that 10 remained in Europe). Sports Car Market says about 20 manual cars were built for the US market with maybe the same number spread around the rest of the world, which implies a world total nearer 40 than 30. The three sources that say 30 all read like the same auction-catalog tradition, and none names a factory document, so this page reports 30 as the commonly stated number and Sports Car Market's higher implication as the outlier, unresolved. Nobody publishes a year-by-year breakdown of the manual cars, and no source consulted separates a US count from a North American one. For the 599 GTO, Wikipedia and classic.com both state 599 cars, and Wikipedia alone adds approximately 125 for the United States, a single-source figure. For the 599 SA Aperta, Wikipedia states 80 cars for Pininfarina's 80th anniversary, again single-source, though the EPA's 2011 model year listing confirms the SA Aperta was certified for US sale. Model-year boundaries are also unsettled: the EPA lists the 599 GTB Fiorano for model years 2007 through 2011 and the GTO and SA Aperta for 2011 only, Wikipedia gives model years 2007 to 2012, classic.com's F1 page says model years 2006 to 2010 while its manual page says 2007 to 2012, and a 2012-titled HGTE car appears in classic.com's sale records.",
 "notableTrims": [
  {
   "name": "599 GTB Fiorano, F1 SuperFast (2007-2012 US model years)",
   "note": "The car nearly everyone bought. Rear-mounted six-speed automated manual with 100 millisecond shifts, 612 hp, and as of September 2026 a classic.com benchmark of $153,613, which makes it the cheapest way into a 600 hp front-engined V12 Ferrari."
  },
  {
   "name": "599 GTB Fiorano, six-speed manual",
   "note": "Gated six-speed on the same transaxle. Three sources say 30 built and 20 sent to North America or the United States; Sports Car Market implies about 40. Listed $9,811 below the F1 car in 2007 per Edmunds, and as of September 2026 trades at a classic.com benchmark of $715,472, more than four times the F1 car."
  },
  {
   "name": "599 HGTE (Handling Gran Turismo Evoluzione package)",
   "note": "Factory handling package with revised suspension and calibration settings and a quicker 85 millisecond F1 shift per Wikipedia, the only source here describing it. Sold as an option on the GTB, so a car with the package has to be confirmed from its build sheet."
  },
  {
   "name": "599 GTO (2011 US model year)",
   "note": "599 cars, 660 hp at 8,250 rpm and 457 lb-ft, the first GTO badge since the 288 GTO. Wikipedia alone puts about 125 in the United States. As of September 2026 the classic.com benchmark is $1,328,727."
  },
  {
   "name": "599 SA Aperta (2011 US model year)",
   "note": "Open version built for Pininfarina's 80th anniversary, 80 cars per Wikipedia, GTO-spec engine, F1 gearbox only per the EPA listing. Certified for US sale for the 2011 model year."
  },
  {
   "name": "599 GTB Fiorano, 2007 first US model year",
   "note": "The year with the most contradictory US price record: $264,034 manual and $273,845 F1 per Edmunds, $280,295 including $4,500 gas guzzler tax per MotorWeek, about $260,000 per Cars.com, and $310,543 as the list price of one optioned car per Sports Car Market."
  }
 ],
 "specs": {
  "layout": "Front mid-mounted V12, rear-mounted six-speed transaxle, rear-wheel drive",
  "chassis": "All-aluminum chassis, the first aluminum chassis on a Ferrari GT car",
  "engine": "5,999 cc Tipo F140 C/CE V12, naturally aspirated, a retuned version of the Enzo engine",
  "power": "612 hp at 7,600 rpm (599 GTB Fiorano; MotorWeek quotes 611 hp); 660 hp at 8,250 rpm for the 599 GTO (670 PS; classic.com states 661 hp)",
  "torque": "448 lb-ft at 5,600 rpm (599 GTB Fiorano); 457 lb-ft at 6,500 rpm (599 GTO)",
  "transmission": "F1 SuperFast six-speed automated manual with 100 millisecond shifts (85 milliseconds with HGTE per Wikipedia); gated six-speed manual optional on the GTB Fiorano only, listed by the EPA for model years 2007 through 2011",
  "weight": "No fetched source states a full curb weight in a quotable sentence; MotorWeek states the 599 weighs 93 lb less than the 575M Maranello",
  "acceleration": "0-60 mph in 3.7 seconds per MotorWeek and 0-62 mph in 3.7 seconds per Ferrari; Cars.com quotes 3.2 seconds, which no other source supports",
  "top_speed": "Over 205 mph per MotorWeek and Cars.com; Ferrari's own page states in excess of 205 mph",
  "suspension": "Magnetorheological semi-active dampers, which MotorWeek described as magnetic fluid suspension",
  "traction_control": "F1-Trac traction control, new on the 599 per MotorWeek",
  "epa_fuel_economy_2007": "10 mpg city, 14 mpg highway, 11 mpg combined per fueleconomy.gov for the 2007 manual car, gas guzzler tax applied; Edmunds repeats 10/14/11 while Cars.com prints 12/15",
  "us_list_price_2007": "$264,034 manual and $273,845 F1 per Edmunds; $280,295 including $4,500 gas guzzler tax per MotorWeek; about $260,000 per Cars.com; the figures do not reconcile",
  "us_model_years": "599 GTB Fiorano listed by the EPA for 2007 through 2011; 599 GTO and 599 SA Aperta for 2011; Wikipedia and classic.com carry 2012 model year cars",
  "nhtsa_recalls": "None. The NHTSA recall database returns zero campaigns for the 599 GTB Fiorano in every model year queried",
  "manual_production": "30 built and 20 for North America or the United States per RM Sotheby's, classic.com and Wikipedia; Sports Car Market implies about 40 worldwide"
 },
 "summary": "The 599 GTB Fiorano is the front-engined V12 Ferrari sold in the United States from the 2007 model year, replacing the 575M Maranello with an aluminum chassis, a 5,999 cc V12 derived from the Enzo's and rated at 612 hp and 448 lb-ft, and a rear transaxle that nearly every buyer ordered as the F1 SuperFast automated manual. A gated six-speed manual was on the order sheet, and the count usually given is 30 cars with 20 of them sent to North America, though Sports Car Market puts the world figure nearer 40; the disagreement is set out on this page rather than settled. The line grew a handling package called HGTE, then the 599 GTO of 2011 with 660 hp and a production run of 599 cars, and the open 599 SA Aperta of the same year, 80 cars. The EPA rated the 2007 car at 10 mpg city and 14 highway with a gas guzzler tax, and 2007 list prices in the US press range from about $260,000 to $280,295 depending on which magazine you read. As of September 2026 classic.com's benchmark is $153,613 for an F1 car, $715,472 for a manual and $1,328,727 for a GTO, so the gearbox and the badge are worth more than the car underneath them.",
 "history": "## Why the 599 exists\n\nThe 575M Maranello was the car Ferrari had to replace, and the 599 GTB Fiorano was built to do it with a different structure and a different engine: an all-aluminum chassis, the first on a Ferrari GT car, carrying a version of the Enzo's V12 that had been retuned for road use. Edmunds summed up the brief for US buyers in one line, that the lighter, faster and more agile 599 replaced the 575M and was also comfortable enough to use as a daily driver. The car was unveiled at Geneva in February 2006 and reached the United States as a 2007 model, the year the EPA first lists it and the year the US magazines tested it.\n\n## The car as sold in the US\n\nThe US car carried the 5,999 cc Tipo F140 C/CE V12 at 612 hp and 448 lb-ft, revving to 8,400 rpm, and drove the rear wheels through a rear-mounted six-speed transaxle. MotorWeek's 2007 test recorded 0-60 mph in 3.7 seconds, the same figure Ferrari quotes for 0-62 mph, and a top speed over 205 mph; Cars.com printed 3.2 seconds, which nothing else supports. Two Ferrari firsts arrived with the car: magnetorheological dampers, which MotorWeek called magnetic fluid suspension, and F1-Trac traction control. The F1 SuperFast gearbox shifted in 100 milliseconds, and the paddles are what almost every American buyer specified. What the car cost new is harder to state than it should be. Edmunds lists $264,034 for the manual coupe and $273,845 for the F1 car for 2007; MotorWeek put the base price at $280,295 including $4,500 in gas guzzler tax; Cars.com estimated $260,000; and Sports Car Market records $310,543 as the original list price of one optioned car. The EPA rated the manual car at 10 mpg city, 14 highway and 11 combined, which is why the gas guzzler tax applies. There is no US recall on record for any 599, which is unusual for a six-year run.\n\n## The gated manual\n\nThe six-speed manual was cheaper than the F1 on the Edmunds sticker, and classic.com's manual page says plainly that the vast majority of 599 GTBs were built with the F1 SuperFast gearbox. RM Sotheby's, writing about a 2007 car, states thirty built and twenty imported into North America; classic.com and Wikipedia repeat 30 and 20 for the United States, with classic.com adding that 10 stayed in Europe. Sports Car Market's profile is the outlier, with about 20 built for the US and maybe the same number spread around the rest of the world. None of these cites a factory document, and the EPA's certification listings, which show a manual 599 GTB for every model year from 2007 through 2011, say nothing about how many were sold. RM Sotheby's dates Ferrari's public statement that it would build no more manual cars to 2011, which makes the 599 the last front-engined V12 Ferrari offered with three pedals.\n\n## HGTE, GTO and SA Aperta\n\nThe HGTE package added revised suspension and calibration settings and cut the F1 shift to 85 milliseconds according to Wikipedia, the only source here that describes it, and cars with the package are sold by build sheet rather than badge. The 599 GTO of 2011 was the bigger step: 660 hp at 8,250 rpm (classic.com rounds to 661), 457 lb-ft at 6,500 rpm, and a production run held to 599 cars, of which Wikipedia alone puts about 125 in the United States. classic.com calls it the first use of the GTO badge since the 288 GTO of 1984. The 599 SA Aperta of the same model year was the open car, 80 examples for Pininfarina's 80th anniversary per Wikipedia, and the EPA lists both the GTO and the SA Aperta with the F1 gearbox only. Both appear in the EPA's 2011 model year listings and neither in 2012.\n\n## When it ended\n\nThe 599 GTB Fiorano is listed by the EPA through the 2011 model year, but the model-year record is not clean. Wikipedia gives model years 2007 to 2012, classic.com's F1 market page says 2006 to 2010 while its manual page says 2007 to 2012, and a 2012-titled HGTE car sits in classic.com's sale records. This page uses 2007 to 2012 for the run and flags the disagreement, because a 2012 title on a US 599 is possible and an owner should not be told otherwise by a database.",
 "marketNotes": "As of September 2026 classic.com's market benchmark for a 599 GTB Fiorano with the F1 gearbox is $153,613, with an average price of $139,115 and a lowest recorded sale of $50,500 for a 2009 car sold on November 21, 2023. The manual car is a different market: as of September 2026 the classic.com benchmark for a six-speed 599 GTB is $715,472 with an average of $702,839, the lowest recorded sale $549,500 for a 2007 car on October 15, 2022, and current listings include a 2007 manual with a last asking price of $801,589 at Ferrari of Palm Beach in April 2026 and a 2007 manual that went unsold at Bonhams in December 2025. The reference sale is still the one Sports Car Market profiled: a 2007 manual with under 3,800 miles that sold for $682,000 including buyer's premium at RM Sotheby's Amelia Island on March 14, 2015, when an F1 car could be had for under $175,000. RM Sotheby's story on a second 2007 manual, chassis ZFFFC60A970150861, carried an estimate of $500,000 to $650,000. For the 599 GTO, as of September 2026 classic.com's benchmark is $1,328,727, with the lowest recorded sale $445,000 for a 2011 car on November 18, 2022 and 2026 sale results on the page running from $952,000 into seven figures; the page's stated average of $7,248,585 sits far above its own benchmark and is not used here. No individual GTO or SA Aperta lot page was fetched for this research, so no single GTO sale is quoted with a house and date.",
 "whatToLookFor": "The gearbox is the first question and the build sheet is the answer. A gated manual 599 trades at more than four times an F1 car as of September 2026, so the car's Ferrari build record, its original window sticker and its chassis number against the known manual cars matter more than anything else on the page; the RM Sotheby's story car is chassis ZFFFC60A970150861, a 2007 car, which is the model year where the known manuals sit. A European buyer's guide notes aftermarket manual conversions exist, so a manual car without factory paperwork is a conversion until proven otherwise. On an F1 car the clutch is the wear item, and the European guide's note that clutch trouble is common on cars driven hard is the reason to want a recent clutch wear reading rather than a seller's word. The HGTE package changes suspension and calibration and cut the shift time, and since it was an option on the GTB it has to be confirmed from the build sheet rather than a badge. The interior is where age shows on every 599: sticky console and switch coatings that the dealer replaces for close to $2,000 per a US restoration shop, and leather shrinkage on the dash and door tops. Motor mounts are reported failing around 30,000 miles from engine heat, and a set of exhaust manifolds runs about $3,800 in parts per the same shop, so a car in that mileage band with neither job done has both ahead of it. On a GTO, the 599-car run and the roughly 125 US cars mean provenance is the value, and the paperwork is the inspection. The EPA record lists the 599 GTB through 2011 and the GTO and SA Aperta for 2011 only, so a 2012-titled car deserves a look at its certification label.",
 "commonProblems": "The 599's record in the US federal database is empty: the NHTSA recall database returns no campaigns for the 599 GTB Fiorano in any model year queried, and no 599 appears in NHTSA's list of Ferrari models with recalls for 2007 through 2012. The problems that owners actually pay for are wear and materials. A US restoration shop specializing in the sticky-coating problem reports that motor mounts tend to fail around 30,000 miles from the high heat of the engine, that replacing the console buttons from the dealer costs nearly $2,000, and that replacing both exhaust manifolds costs an extra $3,800; those are single-source figures from a shop with a product to sell, and they are labeled as such. The same shop lists leather shrinkage as a standing fault, and a European buyer's guide adds sticky plastics, peeling switches, clutch life on cars driven hard, oil leaks from aging seals, valve guide reports on early cars, and battery drain from the electronics; that guide's cost figures are in euros and are not used here. The F1 SuperFast gearbox itself is the big-ticket component on the vast majority of cars, which have it, and the European guide lists clutch life as a common issue on cars driven hard. Nothing in the sources consulted points to a systemic engine failure, and the aluminum chassis has no reported corrosion pattern. As of September 2026 no US specialist page with a full price list for a 599 clutch or a major service could be fetched within this research, so those figures are not stated.",
 "valueTrajectory": "A 599 GTB Fiorano listed for between about $260,000 and $280,295 in 2007, depending on the source, and as of September 2026 an F1 car trades around classic.com's $153,613 benchmark, with a recorded low of $50,500 in November 2023. That is a car that has finished depreciating and is now sorting itself by miles, service history and the condition of its interior coatings. The manual car left that curve early: Sports Car Market recorded $682,000 for a 2007 manual in March 2015 when F1 cars were under $175,000, and as of September 2026 the classic.com benchmark for a manual is $715,472 with a 2007 car asking $801,589 in April 2026, so a decade of ownership has roughly held the 2015 price rather than compounded it. The GTO is the appreciating end of the line: a lowest recorded sale of $445,000 in November 2022 against a classic.com benchmark of $1,328,727 as of September 2026, with 2026 results on the page starting at $952,000. The gap between an F1 GTB and a manual GTB, better than four to one, is the largest gearbox premium on any modern Ferrari and rests entirely on a count of 30 cars that no factory document in this research confirms.",
 "overallConfidence": "medium",
 "sources": [
  {
   "ref": "ferrari-599-gtb",
   "title": "Ferrari 599 GTB Fiorano",
   "url": "https://www.ferrari.com/en-US/auto/599-gtb-fiorano",
   "publisher": "Ferrari S.p.A.",
   "sourceType": "manufacturer",
   "reliability": "medium",
   "notes": "Ferrari's own model page. Establishes the name (displacement divided by ten), 0-100 km/h in 3.7 seconds and top speed in excess of 330 km/h (205 mph). Carries no production number, no US price and no mention of the manual gearbox."
  },
  {
   "ref": "scm-2007-profile",
   "title": "2007 Ferrari 599 GTB Fiorano",
   "url": "https://www.sportscarmarket.com/profile/2007-ferrari-599-gtb-fiorano",
   "publisher": "Sports Car Market",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Profile of RM Sotheby's Amelia Island lot 193, sold $682,000 including premium on March 14, 2015. Original list price $310,543 for that car; approximately 3,500 599 GTBs 2006-12 (the only total found); about 20 manual cars for the US with maybe the same number for the rest of the world; F1 cars under $175,000 at the time; 620 PS quoted as brake horsepower."
  },
  {
   "ref": "fueleconomy-2007-manual",
   "title": "Fuel Economy of the 2007 Ferrari 599 GTB (Manual 6-spd)",
   "url": "https://www.fueleconomy.gov/feg/noframes/23478.shtml",
   "publisher": "US EPA and Department of Energy, fueleconomy.gov",
   "sourceType": "government",
   "reliability": "high",
   "notes": "EPA record for the 2007 manual car: 12 cylinders, 5.9 liters, Manual 6-spd, 10 mpg city, 14 highway, 11 combined, premium gasoline, gas guzzler. The fueleconomy.gov vehicle menu API lists a manual and an automatic 599 GTB for every model year 2007 through 2011, the 599 GTO and 599 SA Aperta with the AM6 gearbox only for 2011, and no 599 for 2012."
  },
  {
   "ref": "fueleconomy-2011-menu",
   "title": "fueleconomy.gov vehicle menu, 2011 Ferrari models",
   "url": "https://www.fueleconomy.gov/ws/rest/vehicle/menu/model?year=2011&make=Ferrari",
   "publisher": "US EPA and Department of Energy, fueleconomy.gov",
   "sourceType": "government",
   "reliability": "high",
   "notes": "EPA model list for 2011 Ferrari: 458 Italia, 599 GTB Fiorano, 599 GTO, 599 SA Aperta, 612 Scaglietti, California. Confirms the GTO and SA Aperta were certified for the US 2011 model year; the 2012 list carries no 599."
  },
  {
   "ref": "nhtsa-599-recalls",
   "title": "NHTSA recalls by vehicle: 2010 Ferrari 599 GTB Fiorano",
   "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=ferrari&model=599%20gtb%20fiorano&modelYear=2010",
   "publisher": "National Highway Traffic Safety Administration",
   "sourceType": "government",
   "reliability": "high",
   "notes": "Returns Count 0 for the 599 GTB Fiorano. NHTSA's models-with-recalls list for Ferrari shows no 599 in any year 2007 through 2012 (F430, 612, 430 Scuderia, 458 Italia, California and the 149 project code appear instead)."
  },
  {
   "ref": "motorweek-2007",
   "title": "2007 Ferrari 599 GTB Fiorano",
   "url": "https://motorweek.org/road_tests/2007_ferrari_599_gtb_fiorano/",
   "publisher": "MotorWeek",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "US period road test: base price $280,295 including $4,500 gas guzzler tax; 611 hp and 448 lb-ft, 8,400 rpm redline; F1-SuperFast with 100 millisecond shifts; 0-60 in 3.7 seconds; top speed over 205 mph; all-aluminum chassis; F1-Trac; magnetic fluid suspension; 93 lb lighter than the 575 Maranello."
  },
  {
   "ref": "edmunds-2007",
   "title": "2007 Ferrari 599 Review and Ratings",
   "url": "https://www.edmunds.com/ferrari/599/2007/review/",
   "publisher": "Edmunds",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "US 2007 model year MSRP: GTB Fiorano coupe 6M $264,034, GTB Fiorano F1 coupe $273,845 (most popular). 612 hp and 448 lb-ft; manual or F1 offered; 0-62 mph in less than 3.7 seconds; top speed around 205 mph; EPA 11 combined (10 city, 14 highway); 3,722 lb; replaces the 575M Maranello."
  },
  {
   "ref": "cars-com-2007",
   "title": "2007 Ferrari 599 GTB Fiorano - Specs, Prices, MPG, Reviews and Photos",
   "url": "https://www.cars.com/research/ferrari-599_gtb_fiorano-2007/",
   "publisher": "Cars.com",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Third US price point for 2007: starts at $250,984 on the listing header and a base price of $260,000 estimated in the expert review. 612 hp at 7,600 rpm, 448 lb-ft at 5,600 rpm; 0-60 in 3.2 seconds (unsupported elsewhere); top speed more than 205 mph; 12 city and 15 highway mpg, which disagrees with the EPA record."
  },
  {
   "ref": "rm-gated-glory",
   "title": "Gated Glory: A Very Special Ferrari 599 GTB Fiorano Showcases a Six-Speed Manual",
   "url": "https://rmsothebys.com/all-stories-videos/gated-glory-a-very-special-ferrari-599-gtb-fiorano-showcases-a-six-speed-manual/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Story on 2007 manual chassis ZFFFC60A970150861, estimate $500,000 to $650,000. Thirty manual cars built, twenty imported into North America; 612 hp from the Tipo F140 C/CE V12; roughly 95 percent of buyers chose F1; Ferrari stated in 2011 it would build no more manual cars."
  },
  {
   "ref": "wikipedia-599",
   "title": "Ferrari 599",
   "url": "https://en.wikipedia.org/wiki/Ferrari_599",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Pointer source: production 2006-2012, model years 2007-2012; 30 manual cars with 20 to the United States; 5,999 cc F140 C/CE; aluminum chassis first on a Ferrari GT; magnetorheological dampers; F1 shift 100 ms or 85 ms with HGTE; Geneva February 2006; GTO limited to 599 with about 125 for the US, 660 hp at 8,250 rpm and 457 lb-ft at 6,500 rpm; SA Aperta 80 cars for Pininfarina's 80th."
  },
  {
   "ref": "classic-gto",
   "title": "Ferrari 599 GTO Market",
   "url": "https://www.classic.com/m/ferrari/599/gto/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of September 2026: CMB $1,328,727; lowest recorded sale $445,000 for a 2011 on November 18, 2022; stated average $7,248,585 (not used, sits far above the benchmark); model years 2010 to 2012; 599 examples built; 661 hp; first GTO badge since the 288 GTO; 2026 results listed from $952,000 up."
  },
  {
   "ref": "classic-gtb-f1",
   "title": "Ferrari 599 GTB Fiorano - F1 Market",
   "url": "https://www.classic.com/m/ferrari/599/gtb-f1/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of September 2026: CMB $153,613; average $139,115; lowest recorded sale $50,500 for a 2009 on November 21, 2023; model years stated as 2006 to 2010; replaced the 575M in 2006 as a 2007 model; 612 hp between 7,600 and 8,400 rpm."
  },
  {
   "ref": "classic-gtb-manual",
   "title": "Ferrari 599 GTB - Manual Market",
   "url": "https://www.classic.com/m/ferrari/599/gtb-manual/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of September 2026: CMB $715,472; average $702,839; lowest recorded sale $549,500 for a 2007 on October 15, 2022; model years 2007 to 2012; 30 manual cars, 20 to the United States, 10 in Europe; listings include a 2007 asking $801,589 at Ferrari of Palm Beach (April 2026), a 2007 unsold at Bonhams (December 2025) and a 2012 HGTE unsold at RM Sotheby's (November 2025)."
  },
  {
   "ref": "stickybuttonfix-issues",
   "title": "599 GTM Fiorano Ferrari Most Common Issues",
   "url": "https://stickybuttonfix.com/blogs/ferrrai-599-gtm-fiorano-blog/599-gtm-fiorano-ferrari-most-common-issues",
   "publisher": "Sticky Button Fix",
   "sourceType": "specialist",
   "reliability": "low",
   "notes": "US interior restoration shop with a product to sell. Motor mounts failing around 30,000 miles; console buttons nearly $2,000 from the dealer; both exhaust manifolds $3,800; leather shrinkage. Single-source cost figures, labeled as such."
  },
  {
   "ref": "giallomodena-guide",
   "title": "The Ultimate Buying Guide to the Ferrari 599",
   "url": "https://www.giallomodena.com/post/the-ultimate-buying-guide-to-the-ferrari-599",
   "publisher": "Giallo Modena",
   "sourceType": "specialist",
   "reliability": "low",
   "notes": "Netherlands-based buyer's guide, used only for fault patterns: sticky plastics, peeling switches, leather shrinkage, clutch life, oil leaks, early valve guide reports, battery drain, and the existence of manual conversions. Its euro price and cost figures are not used."
  }
 ],
 "claims": [
  {
   "section": "specs",
   "claimText": "The US 599 GTB Fiorano is rated at 612 hp and 448 lb-ft from its 5,999 cc V12, with peak power between 7,600 and 8,400 rpm; MotorWeek rounds the output to 611 hp and Sports Car Market prints the metric 620 figure, neither of which is a real disagreement.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["edmunds-2007", "classic-gtb-f1", "motorweek-2007"],
   "evidence": [
    { "ref": "edmunds-2007", "quote": "A 6.0-liter V12 that produces 612 horsepower and 448 pound-feet of torque" },
    { "ref": "classic-gtb-f1", "quote": "producing a power output of 620 PS (456 kW; 612 hp) between 7,600 rpm to 8,400 rpm" },
    { "ref": "motorweek-2007", "quote": "This 6.0-liter V-12 produces a stunning 611 horsepower, and a massive 448 pound-feet of torque." }
   ]
  },
  {
   "section": "specs",
   "claimText": "The engine is the 5,999 cc Tipo F140 C/CE V12, a road-tuned development of the Enzo engine.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["wikipedia-599", "rm-gated-glory", "edmunds-2007"],
   "evidence": [
    { "ref": "wikipedia-599", "quote": "6.0 L (5,999 cc) F140 C/CE V12" },
    { "ref": "rm-gated-glory", "quote": "612 horsepower from the 6.0-litre, Tipo F140 C/CE V-12 engine" },
    { "ref": "edmunds-2007", "quote": "Blessed with a retuned version of the Enzo's V12, the lighter, faster and more agile 599 Fiorano is also comfortable enough to use as a daily driver." }
   ]
  },
  {
   "section": "specs",
   "claimText": "MotorWeek's US test recorded 0-60 mph in 3.7 seconds and Ferrari quotes 3.7 seconds to 62 mph, while Cars.com prints 3.2 seconds to 60 mph, a figure no other source consulted supports.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["motorweek-2007", "ferrari-599-gtb", "cars-com-2007"],
   "conflictNote": "MotorWeek states 0 to 60 mph in 3.7 seconds and Ferrari states 0 to 62 mph in 3.7 seconds. Cars.com states 0-60 mph in 3.2 seconds. Not resolved by any source consulted here.",
   "evidence": [
    { "ref": "motorweek-2007", "quote": "0 to 60 runs in 3.7 seconds" },
    { "ref": "ferrari-599-gtb", "quote": "sprints from 0 to 100 km/h in 3.7 seconds" },
    { "ref": "cars-com-2007", "quote": "0-60 mph: 3.2 seconds" }
   ]
  },
  {
   "section": "specs",
   "claimText": "Top speed is quoted as over 205 mph by MotorWeek and Cars.com, matching the figure on Ferrari's own page, which is stated there in metric and converts to 205 mph.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["motorweek-2007", "cars-com-2007", "ferrari-599-gtb"],
   "evidence": [
    { "ref": "motorweek-2007", "quote": "the top being over 205" },
    { "ref": "cars-com-2007", "quote": "The 599's top speed is more than 205 mph" },
    { "ref": "ferrari-599-gtb", "quote": "top speed in excess of 330 km/h" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The F1 SuperFast automated manual shifts in 100 milliseconds on the standard 599 GTB, and Wikipedia alone states that the HGTE package cut this to 85 milliseconds.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["motorweek-2007", "wikipedia-599"],
   "evidence": [
    { "ref": "motorweek-2007", "quote": "Steering wheel mounted paddles instantly trigger shifts that take a mere 100 milliseconds" },
    { "ref": "wikipedia-599", "quote": "100 milliseconds in the standard 599 or 85 milliseconds if equipped with the HGTE package" }
   ]
  },
  {
   "section": "specs",
   "claimText": "In the US the 599 GTB Fiorano was offered with either a gated six-speed manual or the six-speed F1 automated manual, and the EPA carries a separate certification record for the manual car in the 2007 model year.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["edmunds-2007", "fueleconomy-2007-manual"],
   "evidence": [
    { "ref": "edmunds-2007", "quote": "either a traditional six-speed manual transmission or a six-speed 'F1' transmission" },
    { "ref": "fueleconomy-2007-manual", "quote": "12 cyl, 5.9 L, Manual 6-spd" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 2007 US list price is not settled by the US sources: Edmunds lists $264,034 for the manual coupe and $273,845 for the F1 coupe, MotorWeek gives a base price of $280,295 including $4,500 in gas guzzler tax, Cars.com estimates $260,000, and Sports Car Market records $310,543 as the original list price of one optioned car.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["edmunds-2007", "motorweek-2007", "cars-com-2007", "scm-2007-profile"],
   "conflictNote": "Edmunds states $264,034 (6M) and $273,845 (F1) for 2007. MotorWeek states a base price of $280,295 including $4,500 gas guzzler tax. Cars.com states a base price of $260,000 estimated. Sports Car Market states an original list price of $310,543 for a specific optioned car. Whether the differences are gas guzzler tax, destination or options is not resolved by any source consulted here.",
   "evidence": [
    { "ref": "edmunds-2007", "quote": "GTB Fiorano F1 2dr Coupe (6.0L 12cyl 6AM)" },
    { "ref": "motorweek-2007", "quote": "Base price for the 599 GTB Fiorano is $280,295. That price includes $4,500 in gas guzzler tax" },
    { "ref": "cars-com-2007", "quote": "Base price: $260,000 (est.)" },
    { "ref": "scm-2007-profile", "quote": "Original List Price: $310,543" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The EPA rated the 2007 manual 599 GTB at 10 mpg city, 14 mpg highway and 11 mpg combined with a gas guzzler tax, and Edmunds repeats 10/14/11, while Cars.com prints 12 city and 15 highway.",
   "confidence": "high",
   "status": "disputed",
   "sourceRefs": ["fueleconomy-2007-manual", "edmunds-2007", "cars-com-2007"],
   "conflictNote": "fueleconomy.gov states 10 city, 14 highway, 11 combined for the 2007 manual car and Edmunds states 11 combined (10 city, 14 highway). Cars.com states 12 city and 15 highway. The EPA record is the federal figure; why Cars.com differs is not explained by any source consulted here.",
   "evidence": [
    { "ref": "fueleconomy-2007-manual", "quote": "Combined MPG: 11 combined city/highway MPG City MPG: 10 city Highway MPG: 14 highway" },
    { "ref": "edmunds-2007", "quote": "11 Combined MPG (10 City/14 Highway)" },
    { "ref": "cars-com-2007", "quote": "12 miles per gallon city, 15 mpg highway" }
   ]
  },
  {
   "section": "specs",
   "claimText": "MotorWeek states that the 599 weighs 93 lb less than the 575 Maranello; no fetched source gives a full curb weight in a sentence that can be quoted, so none is stated here.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["motorweek-2007"],
   "evidence": [
    { "ref": "motorweek-2007", "quote": "allows this 599 to weigh in at 93 pounds less than the 575 Maranello" }
   ]
  },
  {
   "section": "history",
   "claimText": "The 599 GTB Fiorano debuted at the Geneva Motor Show in February 2006 and replaced the 575M Maranello in the US as a 2007 model.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["wikipedia-599", "classic-gtb-f1", "edmunds-2007"],
   "evidence": [
    { "ref": "wikipedia-599", "quote": "the 599 GTB debuted at the Geneva Motor Show in February 2006" },
    { "ref": "classic-gtb-f1", "quote": "replacing the 575M Maranello in 2006 as a 2007 model" },
    { "ref": "edmunds-2007", "quote": "The 2007 Ferrari 599 GTB Fiorano replaces the 575M Maranello." }
   ]
  },
  {
   "section": "history",
   "claimText": "The 599 was the first Ferrari GT car with an aluminum chassis, and it introduced magnetorheological dampers and F1-Trac traction control to the range.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["motorweek-2007", "wikipedia-599"],
   "evidence": [
    { "ref": "motorweek-2007", "quote": "housed in a lightweight all-aluminum chassis" },
    { "ref": "wikipedia-599", "quote": "aluminium chassis for the first time in a Ferrari GT car" }
   ]
  },
  {
   "section": "production",
   "claimText": "Three sources state that 30 599 GTB Fioranos were built with the six-speed manual and 20 of them went to North America or the United States, while Sports Car Market states about 20 manual cars for the US market with maybe the same number for the rest of the world, which implies a world total nearer 40.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["rm-gated-glory", "classic-gtb-manual", "wikipedia-599", "scm-2007-profile"],
   "conflictNote": "RM Sotheby's states thirty built, twenty imported into North America. classic.com states 30 built, 20 to the United States and 10 in Europe. Wikipedia states 30 built, 20 to the United States. Sports Car Market states about 20 built for the US with maybe the same number spread around the rest of the world. None cites a factory document, and the sources also differ on whether the 20 is a US or a North American figure. Not resolved by any source consulted here.",
   "evidence": [
    { "ref": "rm-gated-glory", "quote": "Only twenty of those were imported into North America." },
    { "ref": "classic-gtb-manual", "quote": "30 examples were produced with a manual gearbox of which 20 were destined to the United States and 10 remained in Europe" },
    { "ref": "wikipedia-599", "quote": "Only 30 examples were produced with a manual gearbox of which 20 were destined to the United States" },
    { "ref": "scm-2007-profile", "quote": "only about 20 manual-shift 599 GTBs built for the U.S. market, with maybe the same number spread around the rest of the world" }
   ]
  },
  {
   "section": "production",
   "claimText": "The only total for 599 GTB Fiorano production found in this research is Sports Car Market's approximately 3,500 for 2006-12, a single trade-magazine figure with no factory source, which is why no production total is stated on this page.",
   "confidence": "low",
   "status": "unverified",
   "sourceRefs": ["scm-2007-profile"],
   "evidence": [
    { "ref": "scm-2007-profile", "quote": "Number Produced: Approximately 3,500" }
   ]
  },
  {
   "section": "production",
   "claimText": "The 599 GTO run was limited to 599 cars, and Wikipedia alone states that approximately 125 of them were produced for the United States market.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["wikipedia-599", "classic-gto"],
   "evidence": [
    { "ref": "wikipedia-599", "quote": "Production was to be limited to 599 cars. Of these, approximately 125 were produced for the United States market." },
    { "ref": "classic-gto", "quote": "2012 was the final production year totaling 599 examples built." }
   ]
  },
  {
   "section": "production",
   "claimText": "The 599 SA Aperta was built as 80 cars for Pininfarina's 80th anniversary according to Wikipedia, the only source here with a count, and the EPA lists it as a certified 2011 model year car in the US.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["wikipedia-599", "fueleconomy-2011-menu"],
   "evidence": [
    { "ref": "wikipedia-599", "quote": "Only 80 examples were produced, honoring the 80th anniversary of Pininfarina" },
    { "ref": "fueleconomy-2011-menu", "quote": "599 GTB Fiorano 599 GTO 599 SA Aperta" }
   ]
  },
  {
   "section": "production",
   "claimText": "The model-year run is not consistent across sources: classic.com's F1 page gives model years 2006 to 2010, its manual page gives 2007 to 2012, its GTO page gives 2010 to 2012, and the EPA lists the 599 GTB Fiorano for 2007 through 2011 and the GTO and SA Aperta for 2011 only.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["classic-gtb-f1", "classic-gtb-manual", "classic-gto", "fueleconomy-2011-menu"],
   "conflictNote": "classic.com states model years 2006 to 2010 for the F1 car, 2007 to 2012 for the manual car and 2010 to 2012 for the GTO. The EPA vehicle menu lists a 599 GTB for 2007 through 2011, the 599 GTO and SA Aperta for 2011, and no 599 for 2012. Wikipedia gives model years 2007 to 2012. Not resolved by any source consulted here.",
   "evidence": [
    { "ref": "classic-gtb-f1", "quote": "The Ferrari 599 - Gtb F1 was produced for model years 2006 to 2010." },
    { "ref": "classic-gtb-manual", "quote": "The Ferrari 599 - Gtb Manual was produced for model years 2007 to 2012." },
    { "ref": "classic-gto", "quote": "The Ferrari 599 - Gto was produced for model years 2010 to 2012." },
    { "ref": "fueleconomy-2011-menu", "quote": "<text>599 GTO</text><value>599 GTO</value></menuItem><menuItem><text>599 SA Aperta</text>" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 599 GTO is rated at 660 hp at 8,250 rpm (670 PS) and 457 lb-ft at 6,500 rpm per Wikipedia, which classic.com rounds to 661 hp; the difference is metric conversion, not a disagreement.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["wikipedia-599", "classic-gto"],
   "evidence": [
    { "ref": "wikipedia-599", "quote": "490 kW; 660 hp (670 PS) at 8,250 rpm" },
    { "ref": "classic-gto", "quote": "it produces 661hp to the rear wheels, almost 50hp more than the GTB" }
   ]
  },
  {
   "section": "history",
   "claimText": "The vast majority of 599 GTBs were built with the F1 SuperFast gearbox rather than the gated manual, and RM Sotheby's dates Ferrari's public statement that it would build no more manual-transmission cars to 2011, a single-source date.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["classic-gtb-manual", "rm-gated-glory"],
   "evidence": [
    { "ref": "classic-gtb-manual", "quote": "The vast majority of the Ferrari 599 GTB's were equipped with the automated manual gearbox (F1 SuperFast) as opposed to the traditional 6-speed manual gearbox (gated)." },
    { "ref": "rm-gated-glory", "quote": "officially stating in 2011 that they will build no more" }
   ]
  },
  {
   "section": "market",
   "claimText": "As of September 2026 classic.com's market benchmark for a 599 GTB Fiorano F1 is $153,613 with an average price of $139,115, and the lowest recorded sale is $50,500 for a 2009 car on November 21, 2023.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["classic-gtb-f1"],
   "evidence": [
    { "ref": "classic-gtb-f1", "quote": "The lowest recorded sale price was $50,500 for a 2009 Ferrari 599 GTB Fiorano - LHD on November 21, 2023." }
   ]
  },
  {
   "section": "market",
   "claimText": "As of September 2026 classic.com's benchmark for a six-speed manual 599 GTB is $715,472 with an average of $702,839 and a lowest recorded sale of $549,500 for a 2007 car on October 15, 2022; Sports Car Market recorded $682,000 including buyer's premium for a 2007 manual at RM Sotheby's Amelia Island on March 14, 2015.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["classic-gtb-manual", "scm-2007-profile"],
   "evidence": [
    { "ref": "classic-gtb-manual", "quote": "The lowest recorded sale price was $549,500 for a 2007 Ferrari 599 GTB Fiorano on October 15, 2022." },
    { "ref": "scm-2007-profile", "quote": "This car, Lot 193, sold for $682,000, including buyer's premium, at RM Sotheby's Amelia Island, FL, auction on March 14, 2015." }
   ]
  },
  {
   "section": "market",
   "claimText": "As of September 2026 classic.com's benchmark for a 599 GTO is $1,328,727, with the lowest recorded sale $445,000 for a 2011 car on November 18, 2022.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["classic-gto"],
   "evidence": [
    { "ref": "classic-gto", "quote": "The lowest recorded sale price was $445,000 for a 2011 FERRARI 599 GTO on November 18, 2022." }
   ]
  },
  {
   "section": "problems",
   "claimText": "The NHTSA recall database returns no recall campaigns for the Ferrari 599 GTB Fiorano.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["nhtsa-599-recalls"],
   "evidence": [
    { "ref": "nhtsa-599-recalls", "quote": "\"Count\":0,\"Message\":\"Results returned successfully\",\"results\":[]" }
   ]
  },
  {
   "section": "problems",
   "claimText": "A US interior restoration shop reports motor mounts failing around 30,000 miles from engine heat, console buttons costing nearly $2,000 to replace at the dealer, and both exhaust manifolds costing an extra $3,800; these are single-source figures from a shop with a product to sell.",
   "confidence": "low",
   "status": "verified",
   "sourceRefs": ["stickybuttonfix-issues"],
   "evidence": [
    { "ref": "stickybuttonfix-issues", "quote": "The motor mounts on these cars tend to fail around 30,000 miles from the high heat of the engine." }
   ]
  },
  {
   "section": "problems",
   "claimText": "Sticky interior coatings, peeling switches and leather shrinkage are reported as standing faults on the 599 by two specialist sources, one in the US and one in Europe.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["stickybuttonfix-issues", "giallomodena-guide"],
   "evidence": [
    { "ref": "stickybuttonfix-issues", "quote": "Replacing console buttons from the Ferrari Dealership can put you back nearly $2,000." },
    { "ref": "giallomodena-guide", "quote": "Sticky plastics, peeling switches, and leather shrinkage" }
   ]
  }
 ]
};
