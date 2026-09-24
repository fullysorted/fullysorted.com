/**
 * Researched model draft - Ferrari 575M Maranello and 575 Superamerica (US model years 2002-2006).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seed575mMaranello = {
 "slug": "ferrari/575m-maranello",
 "heroPhoto": "/images/models/ferrari-575m-maranello.jpg",
 "heroPhotoCredit": "Photo: Alexandre Prévot from Nancy, France, CC BY-SA 2.0, via Wikimedia Commons",
 "make": "Ferrari",
 "model": "575M Maranello",
 "generation": null,
 "generationCode": null,
 "trim": "575M Maranello (six-speed manual or F1), Fiorano Handling Package, 575 Superamerica",
 "yearStart": 2002,
 "yearEnd": 2006,
 "bodyStyles": [
  "2-door 2-seat berlinetta (fixed-roof coupe), 575M Maranello",
  "2-door 2-seat coupe with Revocromico rotating electrochromic glass roof, 575 Superamerica"
 ],
 "engines": [
  "5,748 cc F133E 65-degree V12, naturally aspirated, DOHC per bank, 48 valves, factory rating 515 metric horsepower at 7,250 rpm (508 hp by Wikipedia's conversion) and 434 lb-ft at 5,250 rpm, 575M Maranello",
  "5,748 cc F133 V12 in Superamerica tune, factory rating 540 metric horsepower at 7,250 rpm (533 hp by Wikipedia's conversion), torque quoted at 434 lb-ft at 5,250 rpm, 575 Superamerica"
 ],
 "productionTotal": null,
 "productionNotes": "No figure on this page is a Ferrari factory figure, because Ferrari's own history page could not be fetched for this research, so every count below is secondhand. The most repeated total is 2,056 cars for the 575M Maranello, given by Wikipedia and repeated by the US dealer guide at Exotic Car Trader, both with 246 manual cars. Supercar Nostalgia, a specialist guide, states 2,064 cars in a little over three years, of which 251 were right-hand drive, and then gives the manual count as 246 among the left-hand drive cars plus 69 among the right-hand drive cars, which would put the manual total near 315 rather than 246. These two accounts cannot both be right, and no source consulted here explains the difference, so productionTotal is left null and the manual count is carried as a disputed claim. classic.com puts the F1 total at approximately 1,810, which is simply 2,056 less 246 and adds no independent weight. Nobody publishes a US-market count. A FerrariChat thread titled 575M US numbers exists but returned a 403 to this research and is not cited; NHTSA's vehicle database lists the 575M Maranello for model years 2002 through 2005 and not for 2006, which is the only US-specific production fact found. For the Superamerica, Wikipedia and a supercars.net guide agree on 559 cars with 43 manual gearboxes, and RM Sotheby's Arizona 2026 catalog repeats the 559 figure; that number has no known dispute but all three may trace to one origin. Six 575 GTZ coupes by Zagato are recorded by Wikipedia alone. No US list price for the Superamerica was found in any fetched source; the 575M's US MSRP is Edmunds only, $217,890 for the manual and $228,339 for the F1 in both 2003 and 2004.",
 "notableTrims": [
  {
   "name": "575M Maranello, six-speed manual",
   "note": "The gated manual is the minority car: 246 built per Wikipedia and classic.com, or about 315 if Supercar Nostalgia's separate left- and right-hand drive counts are right. Listed at $217,890 in the US, $10,449 below the F1. As of September 2026 classic.com's benchmark for a manual is $327,284 against $121,526 for an F1."
  },
  {
   "name": "575M Maranello F1",
   "note": "The car most buyers took, with the Magneti Marelli automated manual that was a first on a Ferrari V12. classic.com puts the F1 total at approximately 1,810. RM Sotheby's describes the vast majority of buyers as choosing it. Slower to change hands for less than half the manual car's money as of September 2026."
  },
  {
   "name": "Fiorano Handling Package",
   "note": "Stiffer springs, a lower ride height, retuned steering software for less assistance at low speed and uprated brake pads with red calipers, per Supercar Nostalgia. No source consulted gives a count of cars so equipped. The cheapest manual sale recorded by classic.com as of September 2026, $95,200 in June 2024, was a Fiorano car, so the package alone does not set the price."
  },
  {
   "name": "GTC Handling Package (2005)",
   "note": "Carbon-ceramic brakes with 15.7 inch front discs and six-piston calipers per Wikipedia, plus even stiffer springs and a thicker rear anti-roll bar per Supercar Nostalgia. Offered on the Superamerica as well. No take-rate figure exists in the sources fetched."
  },
  {
   "name": "575 Superamerica",
   "note": "559 cars with the Revocromico rotating electrochromic glass roof and a 540 metric horsepower engine; 43 were manuals per Wikipedia and supercars.net. RM Sotheby's sold an F1 car with the Fiorano package for $313,000 at its Arizona 2026 sale. The one 575 variant that has held its money closest to new."
  },
  {
   "name": "575 GTZ (Zagato)",
   "note": "Six coupe bodies by Zagato on the 575M, later joined by three open cars built on 550s, per Wikipedia. Single-sourced here and effectively outside the US market."
  }
 ],
 "specs": {
  "layout": "Front-mounted V12, rear-mounted six-speed transaxle, rear-wheel drive",
  "chassis": "Tubular steel spaceframe with aluminum body panels, carried over from the 550 Maranello with a new front fascia and interior",
  "engine": "5,748 cc F133 65-degree V12, DOHC, 48 valves, naturally aspirated; enlarged from the 550's 5,474 cc",
  "power": "515 metric horsepower at 7,250 rpm as quoted by Ferrari and by US sources including Edmunds owner reviews; Wikipedia converts it to 508 hp SAE. Superamerica: 540 metric horsepower at 7,250 rpm (533 hp by the same conversion)",
  "torque": "434 lb-ft at 5,250 rpm (both 575M and Superamerica, per Wikipedia, Supercar Nostalgia and supercars.net)",
  "transmission": "Six-speed gated manual transaxle, or Magneti Marelli F1 automated manual with paddle shift, 200 millisecond changes against 300 for the manual per Wikipedia",
  "weight": "Disputed: Wikipedia lists 4,085 lb (1,853 kg) for the 575M; Supercar Nostalgia gives 3,814 lb (1,730 kg) against 3,726 lb (1,690 kg) for the 550; neither says whether the figure is dry or curb. Superamerica 4,200 lb (1,905 kg) per Wikipedia",
  "acceleration": "0-62 mph in 4.25 seconds per Supercar Nostalgia (factory claim, 1.5 tenths quicker than the 550); Wikipedia gives 0-62 mph in 4.2 seconds for the F1 car",
  "top_speed": "202 mph per Wikipedia; 203 mph per Supercar Nostalgia; Superamerica 199 mph per Wikipedia and supercars.net",
  "suspension": "Double wishbones with electronic adaptive damping that independently adjusts damper rates, replacing the 550's driver-selected settings",
  "brakes": "Steel discs standard; GTC Handling Package adds carbon-ceramic discs, 15.7 in (399 mm) at the front with six-piston calipers",
  "us_list_price": "$217,890 six-speed manual, $228,339 F1, per Edmunds for both 2003 and 2004 model years; no US list price found for the Superamerica",
  "epa_fuel_economy": "9 mpg city, 15 mpg highway, 11 mpg combined per Edmunds (2003, 2004); the 2005 California Air Resources Board listing gives 9/16/11 for the F1 and 9/15/11 for the manual",
  "us_model_years": "575M Maranello listed by NHTSA for model years 2002 through 2005; not listed for 2006, when the 599 appears; Superamerica listed as a 2005 model in California and sold as a 2005 by RM Sotheby's",
  "superamerica_roof": "Revocromico rotating electrochromic glass panel with five tint levels; rotation time disputed, 60 seconds per Wikipedia against 10 seconds per RM Sotheby's",
  "nhtsa_record": "No recall campaigns and no complaints on file for the 2004 575M Maranello as of September 2026"
 },
 "summary": "The 575M Maranello is the 2002 revision of Ferrari's front-engined V12 berlinetta, the M standing for Modificata: the 5,474 cc engine grew to 5,748 cc and 515 metric horsepower, the driver-selected damping became an electronic adaptive system, the front fascia and the whole dashboard were new, and for the first time a Ferrari V12 could be ordered with the Magneti Marelli F1 paddle-shift gearbox. The F1 is what nearly everyone bought. Wikipedia and classic.com put the manual cars at 246 of 2,056, while Supercar Nostalgia counts 2,064 cars and 246 manual left-hand drive cars plus 69 right-hand drive, and no source consulted resolves the difference. In the US the car was listed by NHTSA for model years 2002 through 2005, at $217,890 for the manual and $228,339 for the F1 per Edmunds, and it was followed by the 559-car Superamerica with its rotating electrochromic glass roof and a 540 metric horsepower engine. As of September 2026 classic.com's benchmark is $327,284 for a manual 575M and $121,526 for an F1, which is the whole story of this car in two numbers. The site's 550 Maranello page covers the car that came before.",
 "history": "## Why the 575M exists\n\nBy 2001 the 550 Maranello was five years old and the market that bought front-engined V12 Ferraris had moved on from three pedals. Ferrari's 360 Modena had shown that the F1 automated manual, developed with Magneti Marelli out of the Formula 1 program, was what most customers would tick, and a V12 flagship without it was leaving orders on the table. The 575M was the answer: not a new car but a Modificata, the same tubular spaceframe and aluminum body, reworked where it mattered. RM Sotheby's catalog language sums up the package as a more powerful 5.75 liter V12, larger brake discs, an adaptive suspension that minimized pitch during shifting, an updated front fascia and a refreshed interior, and calls the F1 transmission possibly the most notable change. The site's 550 Maranello page covers the car this was built from.\n\n## What the M changed\n\nThe engine grew from 5,474 cc to 5,748 cc, a gain of 274 cc, and the factory rating went from 485 metric horsepower at 7,000 rpm to 515 at 7,250 rpm, with peak torque of 434 lb-ft at 5,250 rpm against the 550's 406 lb-ft at 4,500 rpm. Wikipedia converts the 515 figure to 508 hp SAE; US sources including Edmunds owner reviews simply print 515. The 550's driver-selected damper settings gave way to an electronic adaptive system that adjusted each damper independently, which was the piece the F1 gearbox needed to stop the nose lifting and dropping on every shift. Inside, the dashboard, instrument binnacle and center console were new, as were the seats, door panels and steering wheel. Ferrari claimed 0-62 mph in 4.25 seconds, 1.5 tenths quicker than the 550, and a 203 mph top speed. What the sources do not agree on is weight: Wikipedia lists 4,085 lb (1,853 kg), Supercar Nostalgia 3,814 lb (1,730 kg), and neither says whether it is a dry or a curb figure.\n\n## The F1 gearbox and the manual minority\n\nThe F1 was the first automated manual on a Ferrari V12. Wikipedia gives its shift time as 200 milliseconds against 300 for the manual; Edmunds, reviewing the 2004 car, found it not as smooth as a real automatic or as responsive as a real manual. Buyers did not care. RM Sotheby's says the vast majority opted for it, and in the US the F1 car cost $10,449 more, $228,339 against $217,890 per Edmunds. How many manuals were built is the question this page cannot settle. Wikipedia, classic.com and Exotic Car Trader all say 246 of 2,056 cars. Supercar Nostalgia says 2,064 cars in total, 251 of them right-hand drive, with 246 manuals among the left-hand drive cars and a further 69 among the right-hand drive cars. If the second account is correct, the 246 figure everyone repeats is a left-hand drive count, not a world count. No source consulted explains the gap and Ferrari's own page could not be fetched, so both numbers stand here side by side.\n\n## Fiorano and GTC packages\n\nThe Fiorano Handling Package was the option that turned the 575M from a grand tourer into something closer to a sports car: stiffer springs, a lower ride height, steering software retuned for less assistance at low speed, and uprated brake pads behind red calipers. For 2005 the GTC Handling Package went further, with carbon-ceramic brakes measuring 15.7 in (399 mm) at the front with six-piston calipers, even stiffer springs and a thicker rear anti-roll bar. No source fetched here gives a count of cars built with either package, and the cheapest manual 575M sale recorded by classic.com, $95,200 in June 2024, was a Fiorano car.\n\n## The Superamerica\n\nThe 575 Superamerica of 2005 was the send-off: 559 cars per Wikipedia, supercars.net and RM Sotheby's, 43 of them manuals, with the engine raised to 540 metric horsepower at 7,250 rpm and a Revocromico roof, an electrochromic glass panel with five tint levels that rotates 180 degrees to lie flat over the rear deck. How long the rotation takes is another point on which the sources disagree: Wikipedia says 60 seconds, RM Sotheby's says 10. Ferrari replaced the 575M with the 599 GTB Fiorano in the first half of 2006, and NHTSA's model-year database lists the 575M Maranello for 2002 through 2005 and the 599 from 2006, which is as close to a US production window as the public record gets.",
 "marketNotes": "As of September 2026 classic.com's market benchmark for a manual 575M Maranello is $327,284 with an average sale price of $310,889, and for an F1 car $121,526 with an average of $109,765. The manual range runs from $95,200, a 2003 Fiorano Handling Package car sold on June 21, 2024, to $575,575 for a 2005 car sold on Bring a Trailer on March 19, 2026. The F1 range runs from $49,500 for a 2004 sold on November 9, 2024 to a $350,899 asking price on a 2003 listed by Ferrari of Greensboro on September 4, 2026, which is a listing rather than a sale. RM Sotheby's sold a 2004 575M F1 with 28,728 miles, Daytona seats and Scuderia shields, originally delivered in the Houston area, for $134,400 at its Arizona 2026 sale, and a 2005 Superamerica F1 with the Fiorano Handling Package and 13,670 miles for $313,000 at the same sale; RM's pages do not say whether those figures include the buyer's premium. Against a $217,890 list price, a mid-market manual car as of September 2026 has passed its sticker, while a mid-market F1 car sits at roughly half of its $228,339 list. The gearbox is the single largest variable in the price of a 575M, larger than mileage, color or either handling package, and the market has priced it that way since at least mid-2024.",
 "whatToLookFor": "The first check on any 575M is which gearbox it has, because that alone moves the price by a factor of two and a half as of September 2026. A manual car should carry the gated shifter and a clutch pedal from the factory; a converted F1 car is not the same thing and the sources here have no way to tell how many conversions exist, so the build record and the original window sticker matter more on this car than on most Ferraris. On an F1 car the questions are the ones Edmunds raised in period: the gearbox is not as smooth as a real automatic or as responsive as a real manual, and its clutch wear and actuator condition are the cost that separates a well-kept F1 car from a cheap one. The Fiorano Handling Package is identified by red calipers, the lower ride height and firmer springs; the 2005 GTC package by its carbon-ceramic brakes with 15.7 in (399 mm) front discs and six-piston calipers. Neither package is documented by count, so a car described as Fiorano needs the paperwork to back it. On a Superamerica the Revocromico glass roof and its rotating mechanism are the item nobody else can fix cheaply; the five tint levels should all work and the panel should rotate through its full 180 degrees. The adaptive damping is electronic and independent per corner, and a car that pitches under an F1 upshift is telling you a damper or its control has failed. NHTSA lists no recall campaigns and no complaints for the 2004 car, so a US car's history is entirely in its service records rather than any federal file. Edmunds recorded no major changes for 2004, and the 2003 and 2004 list prices were identical, so between those two years the difference is mileage and care, not specification.",
 "commonProblems": "The federal record on this car is empty: NHTSA returns no recall campaigns and no consumer complaints for the 2004 575M Maranello as of September 2026, and the same query for 2005 returns nothing. That is not a clean bill of health, only a small production run whose owners do not file complaints. The one mechanical point every source fetched here agrees on is the character of the F1 gearbox, which Edmunds in period called not as smooth as a real automatic or as responsive as a real manual; Wikipedia gives the shift time as 200 milliseconds. A single-clutch automated manual wears its clutch in traffic and in the hands of drivers who let it creep, and on this car the clutch and the F1 hydraulic actuator are the ownership costs that the manual car does not carry. No US specialist shop write-up or owner-forum thread on 575M faults could be fetched within this research, because FerrariChat returned a 403 and Ferrari Life a 402, so no dollar figure for a clutch, an actuator or a major service appears on this page; that gap is stated rather than filled from memory. The adaptive dampers are electronic and were new for the 575M, and a Superamerica adds a rotating electrochromic glass roof with its own mechanism and tint electronics that no other Ferrari shares. Interior trim of this period is known across the range for sticky soft-touch coatings, but no fetched source ties that to the 575M specifically, so it is mentioned here only as a thing to look at, not a documented fault.",
 "valueTrajectory": "The 575M has split in two. As of September 2026 classic.com's benchmark for a manual is $327,284, above the $217,890 the car listed for, while the F1 benchmark is $121,526, about half of the $228,339 F1 list price. The floor for a manual was $95,200 in June 2024 and the ceiling to date $575,575 in March 2026; the F1 floor was $49,500 in November 2024 and RM Sotheby's Arizona 2026 sale put a good Houston-delivered F1 car at $134,400. The Superamerica sits apart again, with RM's Arizona 2026 result of $313,000 for a Fiorano-package F1 car and 43 manuals out of 559 that this research found no sale record for. The pattern is the one that has run through every Ferrari of the F1 era: a manual take rate that everyone repeats as 246 cars, a possible true figure closer to 315 if Supercar Nostalgia's right-hand drive count is right, and a market that pays for the pedal regardless of which number is correct. An F1 car that has finished depreciating and a manual car that has not finished appreciating are, as of September 2026, the same car with a different gearbox, and no source consulted suggests the gap is narrowing.",
 "overallConfidence": "medium",
 "sources": [
  {
   "ref": "edmunds-2003",
   "title": "2003 Ferrari 575M Prices, Reviews, and Pictures",
   "url": "https://www.edmunds.com/ferrari/575m/2003/review/",
   "publisher": "Edmunds",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "US 2003 model year MSRP: Maranello coupe six-speed manual $217,890, Maranello F1 coupe $228,339. EPA 9 city, 15 highway, 11 combined mpg. Establishes the 2003 US model year and the manual versus F1 price gap."
  },
  {
   "ref": "edmunds-2004",
   "title": "2004 Ferrari 575M Review & Ratings",
   "url": "https://www.edmunds.com/ferrari/575m/2004/review/",
   "publisher": "Edmunds",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "US 2004 model year: same MSRP as 2003, $217,890 manual and $228,339 F1. States no major changes for 2004. EPA 9/15/11 mpg. Period US editorial verdict on the F1 gearbox, not as smooth as an automatic or as responsive as a manual, and summary line calling the car a world-class GT. Owner reviews quote 515 hp."
  },
  {
   "ref": "wikipedia-575m",
   "title": "Ferrari 575M Maranello",
   "url": "https://en.wikipedia.org/wiki/Ferrari_575M_Maranello",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Pointer source: 2,056 cars including 246 manuals; Superamerica 559 with 43 manuals; six 575 GTZ plus three open cars on 550s; 5,748 cc; 515 PS (508 hp) at 7,250 rpm; 588 Nm (434 lb-ft) at 5,250 rpm; F1 first on a Ferrari V12 with 200 ms shifts against 300 ms manual; 1,853 kg; 325 km/h (202 mph); Superamerica 540 PS, 1,905 kg (4,200 lb), 320 km/h, Revocromico roof taking 60 seconds; GTC package 15.7 inch front carbon-ceramic discs."
  },
  {
   "ref": "classic-manual",
   "title": "Ferrari 575M Maranello - Manual Market",
   "url": "https://www.classic.com/m/ferrari/575m/maranello-manual/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of September 2026: CMB $327,284, average $310,889, lowest recorded sale $95,200 for a 2003 Fiorano Handling Pack car on June 21, 2024, highest $575,575 for a 2005 on Bring a Trailer on March 19, 2026; model years 2002 to 2005; repeats the approximately 246 manual figure."
  },
  {
   "ref": "classic-f1",
   "title": "Ferrari 575M Maranello - F1 Market",
   "url": "https://www.classic.com/m/ferrari/575m/maranello-f1/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of September 2026: CMB $121,526, average $109,765, lowest recorded sale $49,500 for a 2004 on November 9, 2024, highest tracked listing $350,899 for a 2003 at Ferrari of Greensboro on September 4, 2026; F1 production approximately 1,810; Magneti Marelli F1 a first for a Ferrari V12; replaced by the 599 in the first half of 2006."
  },
  {
   "ref": "carb-driveclean-2005",
   "title": "2005 Ferrari 575 M Maranello and Superamerica",
   "url": "https://driveclean.ca.gov/taxonomy/term/36091",
   "publisher": "California Air Resources Board DriveClean",
   "sourceType": "government",
   "reliability": "high",
   "notes": "California state listing for the 2005 model year covering both the 575M and the Superamerica: 5.7 liter 12-cylinder, automatic (S6) 9 city 16 highway 11 combined mpg, manual 6-speed 9/15/11 mpg, smog rating 1. Confirms a 2005 US model year for both cars; no MSRP given."
  },
  {
   "ref": "nhtsa-vpic-2005",
   "title": "NHTSA vPIC: models for make Ferrari, model year 2005",
   "url": "https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/ferrari/modelyear/2005?format=json",
   "publisher": "National Highway Traffic Safety Administration",
   "sourceType": "government",
   "reliability": "high",
   "notes": "Federal vehicle database lists 575M Maranello (Model_ID 9941) as a Ferrari model for model year 2005; the same endpoint queried for 2002, 2003 and 2004 also lists it. Establishes the US model-year window from the government side."
  },
  {
   "ref": "nhtsa-vpic-2006",
   "title": "NHTSA vPIC: models for make Ferrari, model year 2006",
   "url": "https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/ferrari/modelyear/2006?format=json",
   "publisher": "National Highway Traffic Safety Administration",
   "sourceType": "government",
   "reliability": "high",
   "notes": "For model year 2006 the federal database lists 612 Scaglietti, 599 and F430 and no 575M Maranello, which places the end of the 575M's US model-year run at 2005 and the start of the 599's at 2006."
  },
  {
   "ref": "nhtsa-recalls-2004",
   "title": "NHTSA recalls by vehicle: 2004 Ferrari 575M Maranello",
   "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=ferrari&model=575m%20maranello&modelYear=2004",
   "publisher": "National Highway Traffic Safety Administration",
   "sourceType": "government",
   "reliability": "high",
   "notes": "Returns Count 0: no recall campaigns on file for the 2004 575M Maranello. The same query for 2005 and the complaints endpoint for 2004 also returned zero results in September 2026."
  },
  {
   "ref": "rm-az26-575m",
   "title": "2004 Ferrari 575M Maranello | Arizona 2026 | RM Sotheby's",
   "url": "https://rmsothebys.com/auctions/az26/lots/r0054-2004-ferrari-575m-maranello/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Lot page: 2004 575M F1, 28,728 miles, Rosso Corsa over tan, Daytona seats, Scuderia shields, originally delivered in the Houston area, sold for $134,400 at its Arizona 2026 sale (page does not state whether premium is included). Catalog text: M for Modificata, 5.75 liter V12, larger brakes, adaptive suspension minimizing pitch during shifting, F1 possibly the most notable change, vast majority of buyers chose F1."
  },
  {
   "ref": "rm-az26-superamerica",
   "title": "2005 Ferrari Superamerica | Arizona 2026 | RM Sotheby's",
   "url": "https://rmsothebys.com/auctions/az26/lots/r0058-2005-ferrari-superamerica/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Lot page: 2005 Superamerica F1 with Fiorano Handling Package, 13,670 miles, Rosso Corsa over beige, sold for $313,000 at its Arizona 2026 sale (premium status not stated). Catalog text: one of 559 produced, Revocromico rotating hardtop the first on a production car, roof rotating back in 10 seconds."
  },
  {
   "ref": "supercarnostalgia-575m",
   "title": "Ferrari 575M Maranello Guide",
   "url": "https://supercarnostalgia.com/blog/ferrari-575m-maranello",
   "publisher": "Supercar Nostalgia",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Specialist guide with the divergent production account: 2,064 cars, 251 right-hand drive, 246 manual among left-hand drive cars and 69 manual among right-hand drive cars. Engine 5,474 cc to 5,748 cc, 485 bhp at 7,000 rpm to 515 bhp at 7,250 rpm, 434 lb-ft at 5,250 rpm versus 406 at 4,500; adaptive damping; all-new dashboard, seats, door panels and wheel; Fiorano Handling Package contents; GTC package stiffer springs and thicker rear bar; 1,730 kg versus 1,690 kg for the 550; 203 mph; 0-62 mph 4.25 seconds."
  },
  {
   "ref": "supercars-net-superamerica",
   "title": "Ferrari 575M Superamerica - Ultimate Guide",
   "url": "https://www.supercars.net/blog/2005-ferrari-575m-super-america-2/",
   "publisher": "Supercars.net",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Superamerica: 559 built, 43 manual; 540 bhp at 7,250 rpm; 588 Nm (433.8 lb-ft) at 5,250 rpm; about 320 km/h (198.8 mph); Revocromico roof with five tint levels changing in under a minute; GTC Handling package with carbon-ceramic brakes. No US list price."
  },
  {
   "ref": "exoticcartrader-575m",
   "title": "Ferrari 575M Maranello Complete Guide",
   "url": "https://www.exoticcartrader.com/blog/ferrari-575m-maranello-review",
   "publisher": "Exotic Car Trader",
   "sourceType": "specialist",
   "reliability": "low",
   "notes": "US dealer guide repeating 2,056 built and 246 manuals with over 1,750 F1 cars; its undated value sentences (about $100,000 for an F1 car, $60,000 to $200,000 range) are not used as market figures here because they carry no date."
  }
 ],
 "claims": [
  {
   "section": "specs",
   "claimText": "In the US the 575M Maranello was listed at $217,890 with the six-speed manual and $228,339 with the F1 gearbox for both the 2003 and 2004 model years, per Edmunds; this is a single-publisher figure across two model-year pages.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["edmunds-2003", "edmunds-2004"],
   "evidence": [
    { "ref": "edmunds-2003", "quote": "Maranello F1 2dr Coupe (5.8L 12cyl 6AM) which starts at $228,339" },
    { "ref": "edmunds-2004", "quote": "Maranello 2dr Coupe (5.8L 12cyl 6M) which starts at $217,890" }
   ]
  },
  {
   "section": "specs",
   "claimText": "EPA fuel economy for the US 575M is 9 mpg city, 15 mpg highway and 11 mpg combined per Edmunds, and the California DriveClean listing for the 2005 model year gives 9/16/11 for the automatic (F1) and 9/15/11 for the manual.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["edmunds-2003", "carb-driveclean-2005"],
   "evidence": [
    { "ref": "edmunds-2003", "quote": "11 Combined MPG (9 City/15 Highway)" },
    { "ref": "carb-driveclean-2005", "quote": "2005 Ferrari 575 M Maranello and Superamerica" }
   ]
  },
  {
   "section": "history",
   "claimText": "NHTSA's vehicle database lists the 575M Maranello as a Ferrari model for model year 2005 and does not list it for 2006, when the 599 appears, which places the US model-year run at 2002 through 2005.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["nhtsa-vpic-2005", "nhtsa-vpic-2006"],
   "evidence": [
    { "ref": "nhtsa-vpic-2005", "quote": "\"Make_Name\":\"FERRARI\",\"Model_ID\":9941,\"Model_Name\":\"575M Maranello\"" },
    { "ref": "nhtsa-vpic-2006", "quote": "\"Make_ID\":603,\"Make_Name\":\"FERRARI\",\"Model_ID\":3603,\"Model_Name\":\"599\"" }
   ]
  },
  {
   "section": "production",
   "claimText": "Total 575M Maranello production is stated as 2,056 cars by Wikipedia and Exotic Car Trader, and as 2,064 cars by Supercar Nostalgia; the difference is not explained by any source consulted.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["wikipedia-575m", "exoticcartrader-575m", "supercarnostalgia-575m"],
   "conflictNote": "Wikipedia states a total of 2,056 cars and Exotic Car Trader repeats 2,056. Supercar Nostalgia states 2,064 examples in a little over three years. Ferrari's own history page could not be fetched. Not resolved by any source consulted here.",
   "evidence": [
    { "ref": "wikipedia-575m", "quote": "A total of 2,056 cars were produced, including 246 with manual transmissions." },
    { "ref": "exoticcartrader-575m", "quote": "Ferrari only made 2,056 575Ms" },
    { "ref": "supercarnostalgia-575m", "quote": "In a little over three years, Ferrari produced 2064 examples of which 251 were right-hand drive." }
   ]
  },
  {
   "section": "production",
   "claimText": "The number of manual-gearbox 575M Maranellos is given as 246 in total by Wikipedia, classic.com and Exotic Car Trader, while Supercar Nostalgia gives 246 manuals among left-hand drive cars plus 69 among right-hand drive cars, which would put the world total near 315.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["wikipedia-575m", "classic-manual", "exoticcartrader-575m", "supercarnostalgia-575m"],
   "conflictNote": "Wikipedia, classic.com and Exotic Car Trader state 246 manual cars as the total. Supercar Nostalgia states 246 manuals among the left-hand drive cars and 69 among the 251 right-hand drive cars. Whether 246 is a world figure or a left-hand drive figure is not resolved by any source consulted here.",
   "evidence": [
    { "ref": "wikipedia-575m", "quote": "including 246 with manual transmissions" },
    { "ref": "classic-manual", "quote": "Approximately 246 samples with the manual transmission were built making them rare vehicles." },
    { "ref": "exoticcartrader-575m", "quote": "only 246 575Ms were made with a manual transmission while over 1,750 got the optional F1 automatic" },
    { "ref": "supercarnostalgia-575m", "quote": "69 were fitted with a manual gearbox" }
   ]
  },
  {
   "section": "production",
   "claimText": "classic.com puts 575M production with the F1 transmission at approximately 1,810 cars and Exotic Car Trader at over 1,750; both are consistent with 2,056 less 246 rather than independent counts.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["classic-f1", "exoticcartrader-575m"],
   "evidence": [
    { "ref": "classic-f1", "quote": "Total production of the 575M Maranello with the F1 transmission amounted to 1,810 approximately." },
    { "ref": "exoticcartrader-575m", "quote": "over 1,750 got the optional F1 automatic" }
   ]
  },
  {
   "section": "production",
   "claimText": "The 575 Superamerica was built in 559 examples, of which 43 had the manual gearbox, per Wikipedia and supercars.net, with RM Sotheby's Arizona 2026 catalog repeating the 559 figure; no US-market count is published.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["wikipedia-575m", "supercars-net-superamerica", "rm-az26-superamerica"],
   "evidence": [
    { "ref": "wikipedia-575m", "quote": "only 43 of those had a manual gearbox" },
    { "ref": "supercars-net-superamerica", "quote": "Total production amounted to 559 units" },
    { "ref": "rm-az26-superamerica", "quote": "One of just 559 examples produced" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 575M engine is a 5,748 cc V12 rated at 515 metric horsepower at 7,250 rpm, which Wikipedia converts to 508 hp, with 434 lb-ft of torque at 5,250 rpm; the displacement grew 274 cc from the 550's 5,474 cc and the rating rose from 485 at 7,000 rpm.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["wikipedia-575m", "supercarnostalgia-575m"],
   "evidence": [
    { "ref": "wikipedia-575m", "quote": "515 PS (379 kW; 508 hp)" },
    { "ref": "supercarnostalgia-575m", "quote": "The horsepower rating went from 485bhp at 7000rpm to 515bhp at 7250rpm." }
   ]
  },
  {
   "section": "specs",
   "claimText": "Peak torque of the 575M is 434 lb-ft at 5,250 rpm, quoted as 588 Nm by Wikipedia and as 434 lb-ft at 5,250 rpm by Supercar Nostalgia.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["wikipedia-575m", "supercarnostalgia-575m"],
   "evidence": [
    { "ref": "wikipedia-575m", "quote": "588 N⋅m (434 lb⋅ft) at 5,250 rpm" },
    { "ref": "supercarnostalgia-575m", "quote": "Peak torque was 434lb-ft at 5250rpm" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 575M's weight is disputed: Wikipedia lists 4,085 lb (1,853 kg), while Supercar Nostalgia gives 3,814 lb (1,730 kg) against 3,726 lb (1,690 kg) for the 550, and neither says whether it is a dry or a curb figure.",
   "confidence": "low",
   "status": "disputed",
   "sourceRefs": ["wikipedia-575m", "supercarnostalgia-575m"],
   "conflictNote": "Wikipedia gives 4,085 lb (1,853 kg) for the standard 575M. Supercar Nostalgia gives 3,814 lb (1,730 kg) against 3,726 lb (1,690 kg) for the 550. Neither source states whether the figure is dry or curb weight. Not resolved by any source consulted here.",
   "evidence": [
    { "ref": "wikipedia-575m", "quote": "1,905 kg (4,200 lb) (Superamerica)" },
    { "ref": "supercarnostalgia-575m", "quote": "1730kg as opposed to 1690kg" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The F1 automated manual was a first on a Ferrari V12, supplied by Magneti Marelli, with Wikipedia giving shift times of 200 milliseconds against 300 for the manual, and RM Sotheby's describing it as possibly the most notable change of the M revision.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["wikipedia-575m", "classic-f1", "rm-az26-575m"],
   "evidence": [
    { "ref": "wikipedia-575m", "quote": "gear changes in 200 milliseconds compared with 300 milliseconds for the manual" },
    { "ref": "classic-f1", "quote": "featured Magneti Marelli's 'F1' automated manual gearbox, a first for a Ferrari V12" },
    { "ref": "rm-az26-575m", "quote": "Possibly the most notable change was the introduction of a Magneti Marelli paddle-shifted F1 transmission." }
   ]
  },
  {
   "section": "history",
   "claimText": "The vast majority of 575M buyers chose the F1 gearbox, per RM Sotheby's, and Edmunds in period judged the F1 not as smooth as a real automatic or as responsive as a real manual.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["rm-az26-575m", "edmunds-2004"],
   "evidence": [
    { "ref": "rm-az26-575m", "quote": "the vast majority of buyers opted to outfit their 575M with this option." },
    { "ref": "edmunds-2004", "quote": "not as smooth as a real automatic or as responsive as a real manual" }
   ]
  },
  {
   "section": "history",
   "claimText": "The M revision replaced the 550's driver-selected damping with an electronic adaptive system that adjusted each damper independently, which RM Sotheby's describes as minimizing pitch during shifting, and gave the car a new dashboard, instrument binnacle, center console, seats, door panels and steering wheel.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["supercarnostalgia-575m", "rm-az26-575m"],
   "evidence": [
    { "ref": "supercarnostalgia-575m", "quote": "the 575M used an advanced electronic adaptive control system that independently adjusted damper rates" },
    { "ref": "rm-az26-575m", "quote": "an adaptive suspension that minimized pitch during shifting, updated front fascia, and a refreshed interior" }
   ]
  },
  {
   "section": "specs",
   "claimText": "Ferrari claimed 0-62 mph in 4.25 seconds for the 575M, 1.5 tenths quicker than the 550, and a top speed of 203 mph per Supercar Nostalgia; Wikipedia gives 202 mph and 0-62 mph in 4.2 seconds with the F1 gearbox.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["supercarnostalgia-575m", "wikipedia-575m"],
   "evidence": [
    { "ref": "supercarnostalgia-575m", "quote": "0-62mph was 1.5 tenths quicker than before (4.25 seconds)" },
    { "ref": "wikipedia-575m", "quote": "325 km/h (202 mph)" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The Fiorano Handling Package brought stiffer springs, a lower ride height, retuned steering software with less assistance at low speed and uprated brake pads with red calipers; the GTC Handling Package added carbon-ceramic brakes with 15.7 inch front discs and six-piston calipers, even stiffer springs and a thicker rear anti-roll bar. No source gives a count for either package.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["supercarnostalgia-575m", "wikipedia-575m"],
   "evidence": [
    { "ref": "supercarnostalgia-575m", "quote": "came with stiffer springs, a lower ride height, re-tuned steering software for less assistance at low speeds and uprated brake pads with red calipers" },
    { "ref": "wikipedia-575m", "quote": "discs measuring 15.7 inches with six-piston calipers at the front" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The Superamerica engine is rated at 540 metric horsepower at 7,250 rpm (533 hp by Wikipedia's conversion) and its top speed at 199 mph, per Wikipedia and supercars.net.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["wikipedia-575m", "supercars-net-superamerica"],
   "evidence": [
    { "ref": "wikipedia-575m", "quote": "540 PS (397 kW; 533 hp)" },
    { "ref": "supercars-net-superamerica", "quote": "540.0 bhp @ 7250 rpm" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The Superamerica's Revocromico roof is an electrochromic glass panel with five tint levels that rotates 180 degrees to lie flat over the rear deck; Wikipedia says the operation takes 60 seconds while RM Sotheby's catalog says the roof rotates back in 10 seconds.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["wikipedia-575m", "rm-az26-superamerica", "supercars-net-superamerica"],
   "conflictNote": "Wikipedia states the roof rotation takes 60 seconds. RM Sotheby's Arizona 2026 catalog states the roof rotates back to rest flush with the rear deck in 10 seconds. supercars.net says the glass tint changes in under a minute, which may be the source of the confusion between tint time and rotation time. Not resolved by any source consulted here.",
   "evidence": [
    { "ref": "wikipedia-575m", "quote": "electrochromic glass panel roof which rotated 180° at the rear to lie flat over the boot taking 60 seconds for operation" },
    { "ref": "rm-az26-superamerica", "quote": "the roof rotating back to rest flush with the rear deck in just 10 seconds" },
    { "ref": "supercars-net-superamerica", "quote": "the system has five tint levels available and the glass can go from dark to light in under a minute" }
   ]
  },
  {
   "section": "market",
   "claimText": "As of September 2026 classic.com's market benchmark for a manual 575M Maranello is $327,284 with an average sale price of $310,889, the lowest recorded sale $95,200 for a 2003 Fiorano Handling Pack car on June 21, 2024 and the highest $575,575 for a 2005 on Bring a Trailer on March 19, 2026.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["classic-manual"],
   "evidence": [
    { "ref": "classic-manual", "quote": "The lowest recorded sale price was $95,200 for a 2003 Ferrari 575M Maranello - Fiorano Handling Pack on June 21, 2024." }
   ]
  },
  {
   "section": "market",
   "claimText": "As of September 2026 classic.com's market benchmark for a 575M Maranello F1 is $121,526 with an average of $109,765, the lowest recorded sale $49,500 for a 2004 on November 9, 2024, and the car was replaced by the 599 in the first half of 2006.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["classic-f1"],
   "evidence": [
    { "ref": "classic-f1", "quote": "The average price of a Ferrari 575m - Maranello F1 is $109,765." }
   ]
  },
  {
   "section": "market",
   "claimText": "RM Sotheby's Arizona 2026 sale sold a Houston-delivered 2004 575M F1 with 28,728 miles for $134,400 and a 2005 Superamerica F1 with the Fiorano Handling Package and 13,670 miles for $313,000; the lot pages do not state whether the figures include the buyer's premium.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["rm-az26-575m", "rm-az26-superamerica"],
   "evidence": [
    { "ref": "rm-az26-575m", "quote": "Originally delivered to its first owner in the Houston, Texas, metropolitan area" },
    { "ref": "rm-az26-superamerica", "quote": "2005 Ferrari Superamerica $313,000 USD | Sold Arizona 2026 , Lot 114" }
   ]
  },
  {
   "section": "problems",
   "claimText": "NHTSA has no recall campaigns on file for the 2004 575M Maranello, and the same recall query for 2005 and the complaints query for 2004 also return zero results as of September 2026.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["nhtsa-recalls-2004"],
   "evidence": [
    { "ref": "nhtsa-recalls-2004", "quote": "\"Count\":0,\"Message\":\"Results returned successfully\"" }
   ]
  },
  {
   "section": "history",
   "claimText": "Edmunds recorded no major changes for the 2004 model year and summarized the car as fast, entertaining and comfortable, embodying the qualities of a world-class GT.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["edmunds-2004"],
   "evidence": [
    { "ref": "edmunds-2004", "quote": "Fast, entertaining and comfortable, the 575M embodies all the qualities of a world-class GT." }
   ]
  },
  {
   "section": "production",
   "claimText": "Six 575 GTZ coupes were built by Zagato, later supplemented by three open cars based on the earlier 550; this is a single-source figure from Wikipedia.",
   "confidence": "low",
   "status": "verified",
   "sourceRefs": ["wikipedia-575m"],
   "evidence": [
    { "ref": "wikipedia-575m", "quote": "Six cars were built in total, that were later supplemented by three open variants based on an earlier 550 model." }
   ]
  }
 ]
};
