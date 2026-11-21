/**
 * Researched model draft - Mazda MX-5 Miata NB (1999-2005 US model years).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedMx5Nb = {
 "slug": "mazda/mx-5-nb",
 "make": "Mazda",
 "model": "MX-5 Miata",
 "generation": "NB, second generation",
 "generationCode": "NB",
 "trim": null,
 "yearStart": 1999,
 "yearEnd": 2005,
 "bodyStyles": [
  "2-door roadster with manually folding fabric top and heated glass rear window",
  "2-door roadster with removable hardtop (factory hardtop-only Club Sport cars for 2003)"
 ],
 "engines": [
  "1.8-liter DOHC 16-valve inline four, naturally aspirated, 140 hp at 6,500 rpm and 119 lb-ft at 5,500 rpm, US 1999 and 2000 model years; California cars rated slightly lower, no figure published in the sources here",
  "1.8-liter BP6D DOHC inline four with variable valve timing on the intake camshaft, 142 hp in US period sources (143 hp per Wikipedia; 155 hp first claimed and withdrawn) and 125 lb-ft at 5,000 rpm, US 2001-2005 model years",
  "1.8-liter turbocharged BP-4W variant with IHI turbocharger, 178 hp at 6,000 rpm and 166 or 167 lb-ft depending on source, Mazdaspeed MX-5 Miata, US 2004 and 2005 model years"
 ],
 "productionTotal": null,
 "productionNotes": "No source consulted publishes a production or US sales total for the NB generation, so none is given here. Mazda's own chronology gives only cumulative figures across generations: total MX-5 production of 700,000 units by 2004, and Guinness World Records recognition at 531,890 units as the best-selling open two-seat sports car. The most detailed count is the enthusiast-compiled production page on miata.net, whose color table totals 93,941 cars for the 1999 through 2003 model years. The page does not say whether those are US cars, North American cars or something else, and it stops before 2004 and 2005, so it cannot stand in for a generation total. The same page is the source for most special-edition counts: 3,000 10th Anniversary cars, 3,000 Mahogany Mica 2000 Special Editions, 3,000 British Racing Green 2001 Special Editions, 1,491 Titanium Gray and 1,000 Blazing Yellow 2002 Special Editions, 1,549 Strato Blue 2003 Special Editions, 1,451 Shinsen cars, and 4,000 Mazdaspeed cars for 2004 and 1,428 for 2005. Jalopnik's 2015 guide to US special editions prints the same figures, which looks like the same underlying list rather than an independent count. Wikipedia's 5,428 US Mazdaspeed cars agrees with the two Mazdaspeed rows added together. The 10th Anniversary is the one count where sources genuinely differ: Mazda, miata.net, The Truth About Cars and Wikipedia agree on 7,500 worldwide, but the US allocation is given as 3,000, as 3,150 for the US and Canada together, and as 3,500. Coverage gaps: no Mazda North American press release and no EPA fuel economy record could be retrieved, so US-market facts rest on period US reviews, NHTSA recall data via Cars.com, and enthusiast references. No documented US list price was found for base cars after 1999, and no US shop publishes a cost for front frame rail repair.",
 "notableTrims": [
  {
   "name": "10th Anniversary Edition (1999)",
   "note": "Sapphire Blue Mica only, six-speed manual, Bose audio, Bilstein dampers, bright gauge rings, a numbered plate on the side of the car and a pair of Seiko watches in the box. At $26,875 it was the highest Miata sticker to that point by The Truth About Cars' account. Of 7,500 built worldwide, the US share is given as 3,000, 3,150 with Canada, or 3,500, depending on the source."
  },
  {
   "name": "Special Editions, 2000-2003",
   "note": "One color per year: 3,000 Mahogany Mica cars for 2000 with the six-speed, 3,000 British Racing Green for 2001, 1,491 Titanium Gray and 1,000 Blazing Yellow for 2002, and 1,549 Strato Blue for 2003. Each run had its own color."
  },
  {
   "name": "Shinsen (2003)",
   "note": "A 1,451-car run in Titanium Gray, counted separately from the 2003 Special Edition in the enthusiast production record."
  },
  {
   "name": "Club Sport (2003)",
   "note": "Jalopnik counts 25 soft-top and 25 hardtop-only cars in Pure White or Classic Red at a $19,995 sticker. A single-source count."
  },
  {
   "name": "Mazdaspeed MX-5 Miata (2004-2005)",
   "note": "The factory turbocharged NB: 178 hp, a six-speed manual, 17-inch Racing Hart wheels and a lowered ride. Counted at 4,000 cars for 2004 and 1,428 for 2005, and listed at a $25,500 base price in 2004."
  },
  {
   "name": "LS and base 2001-2005 cars",
   "note": "The variable-valve-timing engine arrived for 2001 with a rating Mazda first put at 155 hp and then withdrew."
  }
 ],
 "specs": {
  "layout": "Front-engine, rear-wheel drive, two-seat roadster",
  "chassis": "Steel unit body; Wikipedia reports gains of 16 percent in bending rigidity and 22 percent in torsional rigidity over the NA (single source)",
  "engine": "1.8-liter DOHC 16-valve inline four; variable intake valve timing (BP6D) from the 2001 model year; turbocharged BP-4W variant in the Mazdaspeed",
  "power": "140 hp at 6,500 rpm (1999-2000); 142 hp per US period sources or 143 hp per Wikipedia (2001-2005); 178 hp at 6,000 rpm (Mazdaspeed)",
  "torque": "119 lb-ft at 5,500 rpm (1999-2000); 125 lb-ft at 5,000 rpm (2001-2005); 166 lb-ft per Cars.com or 167 lb-ft at 4,500 rpm per Wikipedia (Mazdaspeed)",
  "transmission": "Five-speed manual or four-speed automatic; six-speed manual on the 10th Anniversary, several Special Editions and the Mazdaspeed",
  "weight": "2,299 lb curb weight for a 1999 car as tested by The Auto Channel (single source)",
  "acceleration": "0-60 mph in 7.9 seconds measured against a 7.4-second estimate (The Auto Channel, 1999); about 8 seconds for an early example per Consumer Guide",
  "wheels": "14-inch on 1999-2000 base cars, 15-inch from 2001, 16-inch on base cars from 2003; 17-inch Racing Hart wheels on the Mazdaspeed",
  "us_model_years": "1999 through 2005",
  "us_base_price_1999": "$19,770 base; $26,875 for the 10th Anniversary Edition",
  "us_price_mazdaspeed_2004": "$25,500 base per Cars.com; about $25,730 including destination per Edmunds",
  "tenth_anniversary_production": "7,500 worldwide; US share given as 3,000, 3,150 (US and Canada) or 3,500 depending on source",
  "mazdaspeed_production": "4,000 for 2004 and 1,428 for 2005 (miata.net); 5,428 US cars per Wikipedia",
  "headlights_and_top": "Fixed headlights in place of the NA's pop-ups; glass rear window with defroster in the soft top"
 },
 "summary": "The NB is the second-generation MX-5 Miata, sold in the US for the 1999 through 2005 model years: the same front-engine, rear-drive two-seat roadster as the NA, with fixed headlights in place of the pop-ups and a glass rear window with a defroster in the soft top. A 1999 car carried a 1.8-liter four rated at 140 hp and 119 lb-ft and a $19,770 base price in a period US test. For 2001 Mazda added variable valve timing and claimed 155 hp, then withdrew the figure after dyno testing; US period sources settled on 142 hp, and Wikipedia prints 143. Special editions arrived almost every year, from the Sapphire Blue 10th Anniversary car with a six-speed to the 2004 and 2005 Mazdaspeed, a factory turbocharged car at 178 hp. As read in November 2026, classic.com's benchmark for a base NB is $11,137. miata.net lists front frame rail rust as an NB-specific inspection item, and a UK owners' club thread describes the corrosion starting between the layered sheets of the rail, in an area mostly covered by the engine undertray.",
 "history": "## Why the NB exists\n\nThe job for the NA's replacement was to keep the formula intact while fixing what a decade of ownership had exposed. The first-generation car has its own page; this one starts where it ends. The redesigned MX-5 was previewed at the Tokyo Motor Show in October 1997, and Mazda's chronology lists the second generation from January 1998. Edmunds summed up the brief in its 1999 review: Mazda redesigned the car cautiously, improving it without raising the price. The visible changes were fixed oval headlights in place of the pop-ups and a glass rear window with a defroster. The less visible one was the body, which Wikipedia reports gained 16 percent in bending rigidity and 22 percent in torsional rigidity.\n\n## 1999 and 2000: the 140 hp car\n\nThe 1.8-liter four was rated at 140 hp at 6,500 rpm and 119 lb-ft at 5,500 rpm, up from 133 hp, with California cars rated slightly lower. The Auto Channel's 1999 test car weighed 2,299 lb, ran 0-60 mph in 7.9 seconds against an estimated 7.4, and carried a $19,770 base price. Buyers chose a five-speed manual or a four-speed automatic and built the car up from Touring, Sports and Popular Equipment packages. The 10th Anniversary Edition was the first special: Sapphire Blue Mica, a six-speed manual, Bose audio, bright gauge rings, Bilstein dampers, a numbered plate on the side of the car and his-and-hers Seiko watches, at $26,875. Mazda built 7,500 worldwide. The 2000 Special Edition followed in Mahogany Mica, 3,000 cars with the six-speed and an optional automatic.\n\n## 2001: the horsepower that was not there\n\nThe 2001 facelift brought variable valve timing on the intake camshaft, a restyled front fascia, 15-inch wheels in place of 14s, white-faced gauges and a revised interior. Mazda first claimed 155 hp for the US car. Dyno testing found 142 hp, and the claim was withdrawn; torque was 125 lb-ft at 5,000 rpm. The Chicago Tribune's 2001 LS Special Edition test car carried a $25,715 base price. The 2001 Special Edition was British Racing Green, then came 1,491 Titanium Gray and 1,000 Blazing Yellow cars for 2002, and for 2003 a 1,549-car Strato Blue Special Edition, the 1,451-car Shinsen and the Club Sport, 25 soft-top and 25 hardtop-only cars at $19,995 by Jalopnik's count. Base cars moved to 16-inch wheels for 2003.\n\n## Mazdaspeed, 2004 and 2005\n\nThe Mazdaspeed MX-5 Miata added an IHI turbocharger to the 1.8-liter engine for 178 hp at 6,000 rpm, against 142 hp for the standard car. Torque is given as 166 lb-ft by Cars.com and 167 lb-ft at 4,500 rpm by Wikipedia. It came only with a six-speed manual, rode lower and wore 17-inch Racing Hart wheels, at a $25,500 base price in 2004. The enthusiast production record counts 4,000 cars for 2004 and 1,428 for 2005. Japan had its own variants under the Roadster name, including a 300-unit Roadster Turbo and a Roadster Coupe, 179 built, for Japan only.\n\n## The end of the run, and a second career\n\nMazda's chronology lists the third-generation MX-5 from 2005, which closed the NB after seven US model years. Mazda never broke out an NB total; its chronology records 700,000 MX-5s of all generations by 2004. The car's second career was on track. Writing for Hagerty, Jack Baruth noted that Spec Miata, as a class, has settled on the NB as the winning formula, so part of the surviving NB population carries a cage and a logbook rather than a road registration.",
 "marketNotes": "As of November 2026 classic.com's market benchmark for a base NB Miata is $11,137, with an average of $11,716 across 207 recorded sales. The recorded range runs from a lowest sale of $1,354 to a top sale of $51,500; the page does not identify either car or give a date for either sale. classic.com's benchmark for the 1999 10th Anniversary Edition is $14,325 and for the 2005 Mazdaspeed $15,235, both as of November 2026. classic.com prints no date for its benchmarks; the November 2026 stamp records when the pages were read, not when the figures were computed. classic.com's all-years Mazdaspeed page did not return content for this research, so no benchmark covering the 2004 Mazdaspeed is quoted. Consumer Guide's used-car page, bylined July 22, 2014, gives a good-condition range of $4,000 to $11,000. classic.com tracks race cars as a separate NB category, and Jack Baruth, writing for Hagerty, notes that Spec Miata as a class has settled on the NB as the winning formula. No auction house lot page for an NB was fetched for this research, so no individual hammer price, with or without buyer's premium, is quoted.",
 "whatToLookFor": "miata.net's used-car inspection list, maintained by US owners, calls out front frame rail rust as an NB-specific item. A UK owners' club thread from 2012 describes the rails on what it calls the Mk2.5 cars as commonly showing significant rust, says the area is mostly covered by the engine undertray and so often overlooked, and reports the corrosion starting at the interface between the layered sheets of the rail; posters there say first-generation cars are usually solid in the same place. Those are owner observations rather than a Mazda finding, and no recall or warranty action is recorded in the sources consulted. A US enthusiast forum reports NBs in Connecticut with rust throughout their wheel rockers, and the miata.net list includes the door sills and rocker panels on every car. Beyond the body, miata.net reports the factory immobilizer on 2001-2005 cars failing internally, with parts scarce. Clutch shudder on cold takeoff is recorded for 2001 and 2002 cars. Polished aluminum wheels corrode once the thin lacquer is damaged. miata.net's production table lists each special-edition run with a single color, and the 10th Anniversary carries a numbered plate on the side of the car; Mazdaspeed cars are listed by VIN and build date in the miata.net production record. The Mazdaspeed also carries 17-inch Racing Hart wheels and a six-speed manual, and the 10th Anniversary a six-speed, Bose audio and bright gauge rings.",
 "commonProblems": "Front frame rail corrosion is the NB-specific structural item in miata.net's US inspection guide. A UK owners' club thread from 2012 describes it on what it calls the Mk2.5 cars, starting between the layered sheets of the rail and hidden by the engine undertray, and its posters describe first-generation cars as usually solid in the same place. No Mazda recall, service campaign or extended warranty for it appears in the sources consulted. US owners in Connecticut report rust throughout the wheel rockers, and welded rocker repairs can rust again along the back side of the weld. Immobilizer failure on 2001-2005 cars is, in miata.net's words, an increasing issue: the failure is internal to the unit, with parts scarce as of its 2018 update. Cold-takeoff clutch shudder is recorded on 2001 and 2002 cars. NHTSA recall campaign 03V206 covers the fog lights: the socket holder is held in the lamp casing by pressure, and heat from the bulb can loosen it so the holder separates; Consumer Guide records the same fault as a 2001-03 recall in which the light can drop into the bumper and burn it. The polished aluminum wheels lose their finish to corrosion once the lacquer is broken. None of the sources consulted publishes a dollar figure for frame rail or rocker repair from a US shop, so no cost is given here.",
 "valueTrajectory": "In December 2008, The Truth About Cars wrote that higher-mileage 10th Anniversary cars in good condition were worth 30 percent of their original value; that car's 1999 sticker was $26,875. Consumer Guide's good-condition range for the generation as a whole, on its page bylined July 22, 2014, was $4,000 to $11,000. As of November 2026 classic.com's benchmarks stand at $11,137 for a base NB, $14,325 for the 10th Anniversary Edition and $15,235 for the 2005 Mazdaspeed. When new, the base car listed at $19,770 in 1999 and the Mazdaspeed at $25,500 in 2004. classic.com's recorded base-car sales run from a lowest of $1,354 to a top of $51,500, and the page names neither car. Production counts: 7,500 10th Anniversary cars worldwide, and in the miata.net record 4,000 Mazdaspeed cars for 2004 and 1,428 for 2005. The 10th Anniversary is identified by its Sapphire Blue Mica paint and a numbered plate on the side of the car.",
 "overallConfidence": "medium",
 "sources": [
  {
   "ref": "theautochannel-1999",
   "title": "1999 Mazda Miata",
   "url": "https://www.theautochannel.com/vehicles/new/reviews/1999/russ9917.html",
   "publisher": "The Auto Channel",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Period US review by Carey Russ, April 1999, with a spec table: base price $19,770 ($26,875 10th Anniversary), as tested $22,395; 140 hp at 6,500 rpm, 119 lb-ft at 5,500 rpm; curb weight 2,299 lb; 0-60 mph 7.9 seconds against an estimated 7.4; five-speed manual or four-speed automatic; glass rear window with defroster; fixed oval headlights; Touring, Sports and Popular Equipment packages."
  },
  {
   "ref": "edmunds-1999",
   "title": "1999 Mazda MX-5 Miata Review",
   "url": "https://www.edmunds.com/mazda/mx-5-miata/1999/review",
   "publisher": "Edmunds",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Period US review text: cautious redesign that improved the car without raising the price; new cylinder head; California cars rated slightly lower; 10th Anniversary six-speed, Sapphire Blue Mica, Seiko watch gift set, and the statement that only 3,000 would be produced. No MSRP shown on the page."
  },
  {
   "ref": "chicagotribune-2001",
   "title": "Chicagotribune.com's view (2001 Mazda MX-5 Miata)",
   "url": "https://www.cars.com/reviews/chicagotribune-coms-view-1420689162279",
   "publisher": "Chicago Tribune via Cars.com",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Period US test of a 2001 Miata LS Special Edition: 142 hp up from 140, 125 lb-ft at 5,000 rpm, variable valve timing, white-faced gauges, covered cupholders, $25,715 base price, and the account that Mazda claimed 155 hp before dyno testing found 142."
  },
  {
   "ref": "carscom-2004-mazdaspeed",
   "title": "Our View: 2004 Mazda MX-5 Miata",
   "url": "https://www.cars.com/reviews/our-view-2004-mazda-mx-5-miata-1420689214751",
   "publisher": "Cars.com",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Period US review of the 2004 Mazdaspeed: 178 hp against 142 for the standard Miata, torque 166 lb-ft against 125, six-speed manual, lowered ride, 17-inch Racing Hart wheels, base price $25,500 and $26,200 as tested."
  },
  {
   "ref": "edmunds-mazdaspeed-2004",
   "title": "2004 Mazda Mazdaspeed MX-5 Miata Review",
   "url": "https://www.edmunds.com/mazda/mazdaspeed-mx-5-miata/2004/review",
   "publisher": "Edmunds",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "US pricing and summary for the 2004 Mazdaspeed: MSRP of about $25,730 including destination; 178 hp turbocharged engine; manual transmission. Its 4,000-car figure appears only in a user listing and is not used."
  },
  {
   "ref": "consumerguide-nb",
   "title": "1999-05 Mazda Miata",
   "url": "https://consumerguide.com/used/1999-05-mazda-miata/",
   "publisher": "Consumer Guide Automotive",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "US used-car summary: 140 hp until 2001; 2001 claim withdrawn after tests showed 142 hp; 2001 move to 15-inch wheels, restyled front fascia, revised interior; 2003 base cars to 16-inch wheels; about 8 seconds to 60 mph for an early car; fog light recall; good-condition range $4,000 to $11,000. Bylined Tom Appel, July 22, 2014."
  },
  {
   "ref": "ttac-10ae",
   "title": "Review: 1999 Mazda Miata 10th Anniversary Edition",
   "url": "https://www.thetruthaboutcars.com/2008/12/review-1999-mazda-miata-10th-anniversary-edition/?print=1",
   "publisher": "The Truth About Cars",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "December 2008 review by Michael Posner: MSRP $26,875, roughly $6,500 over the base car; 7,500 worldwide with 3,500 allocated to the US; six-speed, Bilsteins, one color, individually numbered plate, Seiko watches; 140 hp and 119 lb-ft; high-mileage cars worth 30 percent of original value in 2008."
  },
  {
   "ref": "miatanet-1999",
   "title": "1999 Miata (North American model year FAQ)",
   "url": "https://miata.net/faq/america/1999.html",
   "publisher": "miata.net",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "US model-year notes: 140 hp up from 133; fixed headlights; glass rear window; 10th Anniversary with six-speed, Bose audio, bright gauge rings, Sapphire Blue Mica; of 7,500 numbered cars the US and Canada got 3,150, Japan 500, Europe 3,700. Its torque line appears to be a typo and is not used."
  },
  {
   "ref": "miatanet-production",
   "title": "Miata production figures",
   "url": "https://miata.net/faq/production.html",
   "publisher": "miata.net",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Enthusiast-compiled production record: NB color table totals 93,941 for 1999-2003 without stating market; special editions 1999 10th Anniversary 3,000, 2000 SE 3,000, 2001 SE 3,000, 2002 SE 1,491 and 1,000, 2003 SE 1,549, Shinsen 1,451, Mazdaspeed 4,000 for 2004 and 1,428 for 2005."
  },
  {
   "ref": "jalopnik-special-editions",
   "title": "Your Guide To Every Special Edition Mazda Miata Ever Sold In America",
   "url": "https://jalopnik.com/your-guide-to-every-special-edition-mazda-miata-ever-so-1675339097",
   "publisher": "Jalopnik",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "January 2015 guide by Travis Okulski to US special editions: 2002 SE 1,491 Titanium Gray and 1,000 Blazing Yellow; 2000 SE with six-speed and optional automatic; 2003 Club Sport 25 soft-top and 25 hardtop cars at $19,995; Mazdaspeed 4,000 and 1,428. Counts appear to share miata.net's underlying list."
  },
  {
   "ref": "wikipedia-nb",
   "title": "Mazda MX-5 (NB)",
   "url": "https://en.wikipedia.org/wiki/Mazda_MX-5_(NB)",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Pointer source: Tokyo Motor Show preview October 1997; 16 percent bending and 22 percent torsional rigidity gain; 2001 BP6D variable intake valve timing and 143 hp US rating; 10th Anniversary 7,500 with 3,000 US and 150 Canada; Mazdaspeed IHI turbo, 178 hp at 6,000 rpm and 167 lb-ft at 4,500 rpm; 5,428 US Mazdaspeed cars; Japan-only Roadster Coupe 179 units; polished wheel corrosion."
  },
  {
   "ref": "mazda-chronology",
   "title": "History of Craft Spirit: MX-5 chronology",
   "url": "https://www2.mazda.com/en/stories/craftmanship/mx-5/chronology/index.html",
   "publisher": "Mazda Motor Corporation",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Manufacturer timeline: second generation listed January 1998; 10th Anniversary Model 7,500 units; Mazdaspeed Roadster 200 units (2001) and Roadster Turbo 300 units (2004) for Japan; Roadster Coupe built to order; 700,000 total MX-5 production by 2004; Guinness recognition at 531,890 units; third generation launched 2005."
  },
  {
   "ref": "classic-nb",
   "title": "Mazda MX-5 Miata - NB - 2nd Gen Market",
   "url": "https://www.classic.com/m/mazda/mx-5-miata/nb-2nd-gen/?page=2",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Generation market page: NB introduced for the 1999 model year, run 1999 to 2005; taxonomy lists Base Model, 10th Anniversary Edition, Special Edition, LS, Club Sport, Shinsen, Roadster Coupe, Mazdaspeed and Race Cars. No benchmark figures returned for the generation as a whole."
  },
  {
   "ref": "classic-base",
   "title": "Mazda MX-5 Miata - Base Model - NB Market",
   "url": "https://www.classic.com/m/mazda/mx-5-miata/nb-2nd-gen/base-model/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of November 2026: CMB $11,137, average $11,716, 207 sales, lowest sale $1,354, top sale $51,500 (cars and dates not identified); base model available 1999 through 2005."
  },
  {
   "ref": "classic-10ae",
   "title": "Mazda MX-5 Miata 10th Anniversary Edition - NB Market",
   "url": "https://www.classic.com/m/mazda/mx-5-miata/nb-2nd-gen/10th-anniversary-edition/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of November 2026: CMB $14,325 for the 10th Anniversary Edition. No average, sales count or stated high and low returned."
  },
  {
   "ref": "classic-mazdaspeed-2005",
   "title": "2005 Mazda Mazdaspeed MX-5 Miata - NB Market",
   "url": "https://www.classic.com/m/mazda/mx-5-miata/nb-2nd-gen/mazdaspeed/year-2005/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of November 2026: CMB $15,235 for the 2005 Mazdaspeed. The all-years Mazdaspeed page failed to load, so no 2004 figure is available."
  },
  {
   "ref": "miatanet-inspection",
   "title": "Checking Out a Used NA or NB Miata (Update 2018)",
   "url": "https://www.miata.net/garage/Checking Out a Used Miata - Update 2018.pdf",
   "publisher": "miata.net",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "US owner-community inspection guide, August 2018: front frame rail rust as an NB item; door sills and rocker panels on all cars; 2001-2002 clutch shudder on cold takeoff; NB2 (2001-2005) immobilizer failure, internal, parts scarce."
  },
  {
   "ref": "mx5oc-rails",
   "title": "MK2.5 owners, check your front chassis rails",
   "url": "https://forum.mx5oc.co.uk/t/mk2-5-owners-check-your-front-chassis-rails/59049",
   "publisher": "MX-5 Owners Club forum (UK)",
   "sourceType": "club-forum",
   "reliability": "low",
   "notes": "2012 owner thread on front chassis rail rot on what it calls Mk2.5 cars (no year range stated): mostly covered by the engine undertray, common on these cars, corrosion starting between layered sheets, first-generation cars usually solid there; no Mazda recall or goodwill recorded. Fault pattern only."
  },
  {
   "ref": "grm-nb-rust",
   "title": "What is it about the NBs that make them rust so much worse than NAs?",
   "url": "https://classicmotorsports.com/forum/grm/what-is-it-about-the-nbs-that-make-them-rust-so-much-worse-than-nas/105981/page1",
   "publisher": "Grassroots Motorsports / Classic Motorsports forum",
   "sourceType": "club-forum",
   "reliability": "low",
   "notes": "2015 US owner thread: Connecticut NBs with rust throughout their wheel rockers; observation that NB rust seems worse than on older NAs; rust returning along the back side of welds. Fault pattern only."
  },
  {
   "ref": "carscom-recalls-2003",
   "title": "2003 Mazda MX-5 Miata Recalls",
   "url": "https://www.cars.com/research/mazda-mx_5_miata-2003/recalls",
   "publisher": "Cars.com (NHTSA data)",
   "sourceType": "government",
   "reliability": "high",
   "notes": "NHTSA recall data for the 2003 car: campaign 03V206, fog light socket holder held in the casing by pressure, can separate from heat; owner notification from July 2003."
  },
  {
   "ref": "hagerty-baruth",
   "title": "Avoidable Contact #103: How the Miata crashed its way to a bull market",
   "url": "https://www.hagerty.com/media/?p=143765",
   "publisher": "Hagerty",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Jack Baruth column: Spec Miata as a class has settled on the NB as the winning formula. No NB dollar values given."
  }
 ],
 "claims": [
  {
   "section": "production",
   "claimText": "The NB generation of the MX-5 Miata was introduced in the US for the 1999 model year and the base car was available through the 2005 model year.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["classic-nb", "classic-base"],
   "evidence": [
    { "ref": "classic-nb", "quote": "The second generation of the Mazda MX-5 Miata, internally known as the NB, was introduced for the 1999 model year." },
    { "ref": "classic-base", "quote": "The Mazda MX-5 Miata base model was available between 1999 through 2005" }
   ]
  },
  {
   "section": "history",
   "claimText": "The redesigned MX-5 was previewed at the Tokyo Motor Show in October 1997; Mazda's chronology lists the second generation from January 1998 and the third-generation MX-5 from 2005.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["wikipedia-nb", "mazda-chronology"],
   "evidence": [
    { "ref": "wikipedia-nb", "quote": "The redesigned MX-5 was previewed at the Tokyo Motor Show in October 1997." },
    { "ref": "mazda-chronology", "quote": "1998 Jan Second-generation MX-5 further advanced the charm of Mazda's open-top two-seat lightweight sports car" },
    { "ref": "mazda-chronology", "quote": "Third-generation MX-5 launched." }
   ]
  },
  {
   "section": "history",
   "claimText": "Edmunds described the 1999 car as a cautious redesign that improved it without raising the price; the pop-up headlights gave way to fixed oval lamps and the soft top gained a glass rear window with a defroster.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["edmunds-1999", "theautochannel-1999", "miatanet-1999"],
   "evidence": [
    { "ref": "edmunds-1999", "quote": "Mazda cautiously redesigns the MX-5 Miata, improving the car in every way without bumping up the price" },
    { "ref": "theautochannel-1999", "quote": "The convertible top's back window is now glass, with a built-in defroster." },
    { "ref": "miatanet-1999", "quote": "Glass rear window with auto shut-off if top is lowered" }
   ]
  },
  {
   "section": "specs",
   "claimText": "Wikipedia reports that the NB body gained 16 percent in bending rigidity and 22 percent in torsional rigidity; this is a single encyclopedia source and is carried at medium confidence.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["wikipedia-nb"],
   "evidence": [
    { "ref": "wikipedia-nb", "quote": "The body was strengthened, gaining 16% in bending rigidity and 22% in torsional rigidity." }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 1999 US car's 1.8-liter engine was rated at 140 hp at 6,500 rpm, up from 133 hp, and 119 lb-ft at 5,500 rpm, with California cars rated slightly lower.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["theautochannel-1999", "ttac-10ae", "miatanet-1999", "edmunds-1999"],
   "evidence": [
    { "ref": "theautochannel-1999", "quote": "140 @ 6500 rpm" },
    { "ref": "theautochannel-1999", "quote": "119 @ 5500 rpm" },
    { "ref": "ttac-10ae", "quote": "horsepower was up to 140 with 119 ft.-lbs. or torque" },
    { "ref": "miatanet-1999", "quote": "Horsepower increased to 140 from 133" },
    { "ref": "edmunds-1999", "quote": "(California residents: your Miatas make slightly less power and torque than in the other 49 states.)" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The Auto Channel's 1999 test car weighed 2,299 lb and ran 0-60 mph in 7.9 seconds against an estimated 7.4; Consumer Guide puts an early car at about 8 seconds. The weight is a single-source figure.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["theautochannel-1999", "consumerguide-nb"],
   "evidence": [
    { "ref": "theautochannel-1999", "quote": "Curb Weight 2299 lbs." },
    { "ref": "theautochannel-1999", "quote": "0 to 60 mph 7.9 sec (est 7.4 sec)" },
    { "ref": "consumerguide-nb", "quote": "An early example accelerated to 60 mph in about 8 seconds." }
   ]
  },
  {
   "section": "specs",
   "claimText": "In 1999 the base Miata listed at $19,770 and the 10th Anniversary Edition at $26,875, which The Truth About Cars called the highest Miata sticker to that point, roughly $6,500 over the base car.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["theautochannel-1999", "ttac-10ae"],
   "evidence": [
    { "ref": "theautochannel-1999", "quote": "Base Price $ 19,770 (26,875)" },
    { "ref": "ttac-10ae", "quote": "Mazda wanted the highest msrp ever charged for a Miata: $26,875, roughly $6500 more than the base model." }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 1999 car was offered with a five-speed manual or a four-speed automatic, with Touring, Sports and Popular Equipment packages; the 2000 Special Edition, in Mahogany Mica, had a six-speed with an automatic optional.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["theautochannel-1999", "miatanet-production", "jalopnik-special-editions"],
   "evidence": [
    { "ref": "theautochannel-1999", "quote": "the choice of 5- speed manual or 4-speed automatic transmission" },
    { "ref": "theautochannel-1999", "quote": "all of the goodies in both the Sports and Popular Equipment option packages" },
    { "ref": "theautochannel-1999", "quote": "Touring Package - includes: power steering, power" },
    { "ref": "miatanet-production", "quote": "2000 | Special Edition | 3000 | Mahogany Mica" },
    { "ref": "jalopnik-special-editions", "quote": "and a six speed transmission with an automatic as optional." }
   ]
  },
  {
   "section": "production",
   "claimText": "Sources agree that 7,500 10th Anniversary cars were built worldwide but differ on the US share: 3,000 for the US, 3,150 for the US and Canada together, or 3,500 allocated to the US.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["mazda-chronology", "miatanet-production", "miatanet-1999", "wikipedia-nb", "ttac-10ae", "edmunds-1999"],
   "conflictNote": "Mazda's chronology gives 7,500 units worldwide, as do miata.net, Wikipedia and The Truth About Cars. miata.net's production table lists 3,000 for the US, and Wikipedia gives 3,000 to the US and 150 to Canada. miata.net's 1999 notes give 3,150 to the US and Canada together without splitting them. The Truth About Cars states 3,500 were allocated for the US. Edmunds' 1999 review says only 3,000 would be produced, without saying for which market. The US figure is not resolved by any source consulted here.",
   "evidence": [
    { "ref": "mazda-chronology", "quote": "Special edition 10th Anniversary Model was launched in Japan, North America, Europe and Australia (7500 units)" },
    { "ref": "miatanet-production", "quote": "1999 | 10th Anniversary Edition | 3000 | Sapphire Blue" },
    { "ref": "miatanet-1999", "quote": "Of the total 7500 sequentially numbered 10AMs, the US and Canada got 3,150, Japan 500, Europe 3700" },
    { "ref": "wikipedia-nb", "quote": "3,150 to North America (of which 3,000 to US and 150 to Canada)" },
    { "ref": "ttac-10ae", "quote": "A total of 3,500 were allocated for the US." },
    { "ref": "ttac-10ae", "quote": "Mazda limited worldwide production to 7,500 10th AEs." },
    { "ref": "wikipedia-nb", "quote": "7,500 units of the 10th Anniversary were produced." },
    { "ref": "edmunds-1999", "quote": "Only 3,000 of these special Miatas will be produced, so get your order in now." }
   ]
  },
  {
   "section": "history",
   "claimText": "The 10th Anniversary Edition came in Sapphire Blue Mica with a six-speed manual, Bose audio, bright gauge rings, Bilstein dampers, an individually numbered plate on the side of the car and a pair of Seiko watches.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["miatanet-1999", "ttac-10ae", "edmunds-1999"],
   "evidence": [
    { "ref": "miatanet-1999", "quote": "This car also comes with a 6 speed transmission, BOSE audio system, bright gauge rings" },
    { "ref": "ttac-10ae", "quote": "Each model was individually numbered, with a number plate affixed to the side of the car." },
    { "ref": "ttac-10ae", "quote": "was blessed with Bilsteins; the sport shocks greatly improved handling" },
    { "ref": "edmunds-1999", "quote": "A gift set (including his-and-hers Seiko watches, as well as a 1/43 scale 10Th Anniversary model) is also part of the package." }
   ]
  },
  {
   "section": "specs",
   "claimText": "For 2001 Mazda first claimed 155 hp for the variable-valve-timing engine and withdrew the claim after dyno testing showed 142 hp, the rating US period sources use; Wikipedia gives 143 hp for the US car. Torque was 125 lb-ft at 5,000 rpm.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["chicagotribune-2001", "consumerguide-nb", "carscom-2004-mazdaspeed", "wikipedia-nb"],
   "conflictNote": "The Chicago Tribune, Consumer Guide and Cars.com give 142 hp for the 2001-on US car, and the Tribune and Consumer Guide record that Mazda first claimed more and withdrew it after testing; the Tribune puts the original claim at 155 hp. Wikipedia gives 143 hp for the US car. The 142 versus 143 figure is not resolved by any source consulted here.",
   "evidence": [
    { "ref": "chicagotribune-2001", "quote": "Mazda boasted the 2001 edition would obtain 155 h.p., only to find after dyno testing that it achieved only 142 h.p." },
    { "ref": "chicagotribune-2001", "quote": "the 4-cylinder delivering 125 foot-pounds at 5,000 r.p.m." },
    { "ref": "consumerguide-nb", "quote": "that claim was later squelched after tests showed a figure of 142 hp." },
    { "ref": "carscom-2004-mazdaspeed", "quote": "Try a leap from the standard Miata power of 142 horses to 178 and an increase in torque from 125 to 166 pound-feet." },
    { "ref": "wikipedia-nb", "quote": "These modifications resulted in a power output of 113 kW (152 bhp) (Japan, UK and Australia) or 107 kW (143 bhp) (US only)." }
   ]
  },
  {
   "section": "history",
   "claimText": "The 2001 facelift added variable valve timing on the intake camshaft, a restyled front fascia, 15-inch wheels in place of 14s, white-faced gauges and a revised interior; the Chicago Tribune's 2001 LS Special Edition test car carried a $25,715 base price.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["wikipedia-nb", "consumerguide-nb", "chicagotribune-2001"],
   "evidence": [
    { "ref": "wikipedia-nb", "quote": "The 1.8 L (110 cu in) BP6D engine was slightly modified and now featured variable valve timing on the intake camshaft." },
    { "ref": "consumerguide-nb", "quote": "Base models switched from 14- to 15-inch tires, the front fascia was restyled, and the interior was revised." },
    { "ref": "chicagotribune-2001", "quote": "Base price of the Miata LS Special Edition we tested is $25,715." },
    { "ref": "chicagotribune-2001", "quote": "white-faced gauges" }
   ]
  },
  {
   "section": "production",
   "claimText": "The enthusiast production record counts 3,000 Mahogany Mica 2000 Special Editions, 3,000 British Racing Green 2001 Special Editions, 1,491 Titanium Gray and 1,000 Blazing Yellow 2002 Special Editions, 1,549 Strato Blue 2003 Special Editions and 1,451 Shinsen cars.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["miatanet-production", "jalopnik-special-editions"],
   "evidence": [
    { "ref": "miatanet-production", "quote": "2000 | Special Edition | 3000 | Mahogany Mica" },
    { "ref": "miatanet-production", "quote": "2001 | Special Edition | 3000 | British Racing Green" },
    { "ref": "miatanet-production", "quote": "2002 | Special Edition | 1491 | Titanium Gray" },
    { "ref": "miatanet-production", "quote": "2002 | Special Edition | 1000 | Blazing Yellow" },
    { "ref": "miatanet-production", "quote": "2003 | Special Edition | 1549 | Strato Blue" },
    { "ref": "miatanet-production", "quote": "2003 | Shinsen Version | 1451 | Titanium Gray" },
    { "ref": "jalopnik-special-editions", "quote": "1,491 (Titanium Gray), 1,000 (Blazing Yellow)" }
   ]
  },
  {
   "section": "history",
   "claimText": "Jalopnik counts the 2003 Club Sport at 25 soft-top and 25 hardtop-only cars in Pure White or Classic Red at a $19,995 sticker; this is a single-source figure.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["jalopnik-special-editions"],
   "evidence": [
    { "ref": "jalopnik-special-editions", "quote": "The sticker price was just $19,995" },
    { "ref": "jalopnik-special-editions", "quote": "25 (Soft Top), 25 (Hard top, no soft top)" },
    { "ref": "jalopnik-special-editions", "quote": "Pure White or Classic Red" }
   ]
  },
  {
   "section": "history",
   "claimText": "Consumer Guide records that base cars moved from 15-inch to 16-inch wheels for 2003 and that the 2004 car received only minor styling revisions.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["consumerguide-nb"],
   "evidence": [
    { "ref": "consumerguide-nb", "quote": "Base versions of Mazda's 2-seat sports car exchanged standard 15-inch wheels for 16s." },
    { "ref": "consumerguide-nb", "quote": "Mazda's sports car received only minor styling revisions in 2004." }
   ]
  },
  {
   "section": "specs",
   "claimText": "The Mazdaspeed MX-5 Miata used an IHI turbocharger on a variant of the 1.8-liter engine for 178 hp at 6,000 rpm, with a six-speed manual, a ride dropped a little and 17-inch Racing Hart wheels.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["edmunds-mazdaspeed-2004", "carscom-2004-mazdaspeed", "wikipedia-nb"],
   "evidence": [
    { "ref": "edmunds-mazdaspeed-2004", "quote": "The Miata gets the Mazdaspeed makeover, with a 178-horsepower turbocharged engine," },
    { "ref": "carscom-2004-mazdaspeed", "quote": "Maybe it was the cool 17-inch Racing Hart wheels wrapped with Toyo Proxes high performance radials." },
    { "ref": "carscom-2004-mazdaspeed", "quote": "The six-speed manual transmission lets you work the revs and push the Miata into corners and out of tight turns." },
    { "ref": "carscom-2004-mazdaspeed", "quote": "The ride is even dropped a little to give it that \"slammed\" look." },
    { "ref": "wikipedia-nb", "quote": "It featured an IHI RHF5 VJ35 turbocharger equipped variant of the BP-4W" },
    { "ref": "wikipedia-nb", "quote": "that produced 133 kW (178 bhp) at 6,000 rpm" }
   ]
  },
  {
   "section": "specs",
   "claimText": "Mazdaspeed torque is given as 166 lb-ft by Cars.com's 2004 review and as 167 lb-ft at 4,500 rpm by Wikipedia.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["carscom-2004-mazdaspeed", "wikipedia-nb"],
   "conflictNote": "Cars.com's 2004 review states torque rose from 125 to 166 lb-ft. Wikipedia states 167 lb-ft (226 Nm) at 4,500 rpm. The one lb-ft difference may be a conversion artifact, but neither source says so, and it is not resolved by any source consulted here.",
   "evidence": [
    { "ref": "carscom-2004-mazdaspeed", "quote": "Try a leap from the standard Miata power of 142 horses to 178 and an increase in torque from 125 to 166 pound-feet." },
    { "ref": "wikipedia-nb", "quote": "226 N⋅m (167 lbf⋅ft) of torque at 4,500 rpm" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 2004 Mazdaspeed listed at a $25,500 base price per Cars.com, and Edmunds gives an MSRP of about $25,730 including destination.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["carscom-2004-mazdaspeed", "edmunds-mazdaspeed-2004"],
   "evidence": [
    { "ref": "carscom-2004-mazdaspeed", "quote": "Base price: $25,500" },
    { "ref": "edmunds-mazdaspeed-2004", "quote": "Including destination charge, it arrives with a Manufacturer's Suggested Retail Price (MSRP) of about $25,730." }
   ]
  },
  {
   "section": "production",
   "claimText": "The miata.net production record counts 4,000 Mazdaspeed cars for 2004 and 1,428 for 2005, which agrees with Wikipedia's 5,428 Mazdaspeed MX-5s for the US market across the two model years.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["miatanet-production", "wikipedia-nb", "jalopnik-special-editions"],
   "evidence": [
    { "ref": "miatanet-production", "quote": "2004 | Mazdaspeed | 4000 | VINS and Build Dates" },
    { "ref": "miatanet-production", "quote": "2005 | Mazdaspeed | 1428 | VINS and Build Dates" },
    { "ref": "wikipedia-nb", "quote": "Of the 5,428 Mazdaspeed MX-5s produced for the US market during model years 2004 and 2005" },
    { "ref": "jalopnik-special-editions", "quote": "4,000 (2004), 1,428 (2005)" }
   ]
  },
  {
   "section": "production",
   "claimText": "Japan had its own NB variants under the Roadster name, including a 300-unit Roadster Turbo in 2004 and a Roadster Coupe built to order, which Wikipedia puts at 179 units for Japan only.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["mazda-chronology", "wikipedia-nb"],
   "evidence": [
    { "ref": "mazda-chronology", "quote": "Mazda Roadster Turbo launched (300 units)" },
    { "ref": "mazda-chronology", "quote": "Mazda Roadster Coupe launched (manufactured to order)" },
    { "ref": "wikipedia-nb", "quote": "Production was limited to 179 units for Japan only, making this one of the rarest forms of the MX-5." }
   ]
  },
  {
   "section": "production",
   "claimText": "No source consulted gives an NB generation total: Mazda publishes only cumulative MX-5 figures, 700,000 by 2004 and Guinness recognition at 531,890, and miata.net's color table totals 93,941 cars for 1999-2003 without naming the market or covering 2004 and 2005.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["mazda-chronology", "miatanet-production"],
   "evidence": [
    { "ref": "mazda-chronology", "quote": "Total MX-5 production reaches 700,000 units" },
    { "ref": "mazda-chronology", "quote": "Recognized by Guinness World Records as the world's best-selling open top two-seater sports car (531,890 units)" },
    { "ref": "miatanet-production", "quote": "Totals | 33370 | 15972 | 18147 | 13780 | 12672 | 93941" }
   ]
  },
  {
   "section": "problems",
   "claimText": "Front frame rail rust is an NB-specific inspection item in miata.net's US guide; a 2012 UK owners' club thread describes it as common on what it calls the Mk2.5 cars, mostly covered by the engine undertray and starting between the layered sheets of the rail, with first-generation cars usually solid there.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["miatanet-inspection", "mx5oc-rails"],
   "evidence": [
    { "ref": "miatanet-inspection", "quote": "On the NB, also look for front frame rail rust (photos below.)" },
    { "ref": "mx5oc-rails", "quote": "This area often gets over looked because it is mostly covered by the engine undertray" },
    { "ref": "mx5oc-rails", "quote": "We have found that it is common for the Mk2.5's to be showing signs of significant rust in this area." },
    { "ref": "mx5oc-rails", "quote": "The corrosion, from what I understand, starts at the interface between these sheets." },
    { "ref": "mx5oc-rails", "quote": "Mk1s are usually solid in this area; I am not aware of cars with this sort of problem." }
   ]
  },
  {
   "section": "problems",
   "claimText": "US owners report NBs in Connecticut with rust throughout their wheel rockers, and rust returning along the back side of welded repairs; miata.net's guide lists door sills and rocker panels on every car.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["grm-nb-rust", "miatanet-inspection"],
   "evidence": [
    { "ref": "grm-nb-rust", "quote": "Up here in CT we're running across a lot of NBs that have cancer all throughout their wheel rockers." },
    { "ref": "grm-nb-rust", "quote": "there is a seam of rust in the form of the backside of the weld." },
    { "ref": "miatanet-inspection", "quote": "Check the door sill areas and rocker panels for signs of rust." }
   ]
  },
  {
   "section": "problems",
   "claimText": "miata.net records immobilizer failure as an increasing issue on 2001-2005 cars, internal to the unit with parts scarce, and clutch shudder on cold takeoff on 2001-2002 cars; these rest on one specialist source.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["miatanet-inspection"],
   "evidence": [
    { "ref": "miatanet-inspection", "quote": "NB: Immobilizer system failure has become an increasing issue for NB2 (2001-2005) models." },
    { "ref": "miatanet-inspection", "quote": "It is an internal failure and as of this update, parts are scarce." },
    { "ref": "miatanet-inspection", "quote": "NB: 2001-2002 had an issue with clutch shudder on cold take-off." }
   ]
  },
  {
   "section": "problems",
   "claimText": "NHTSA recall campaign 03V206 covers the fog lights, whose socket holder is held in the lamp casing by pressure and can separate when heated; Consumer Guide records the light dropping into the bumper and burning it.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["carscom-recalls-2003", "consumerguide-nb"],
   "evidence": [
    { "ref": "carscom-recalls-2003", "quote": "the socket holder in the fog lights is installed in the lamp casing using pressure" },
    { "ref": "consumerguide-nb", "quote": "Fog lights may have been installed improperly, and they may fall down into the bumper, causing it to burn." }
   ]
  },
  {
   "section": "problems",
   "claimText": "The NB's polished aluminum wheels corrode once their thin lacquer coating is damaged, per Wikipedia; single-source and carried at medium confidence.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["wikipedia-nb"],
   "evidence": [
    { "ref": "wikipedia-nb", "quote": "The polished aluminum wheels are notorious for corroding once the thin lacquer coating is damaged." }
   ]
  },
  {
   "section": "history",
   "claimText": "Writing for Hagerty, Jack Baruth noted that Spec Miata racing has settled on the second-generation NB as its winning formula.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["hagerty-baruth"],
   "evidence": [
    { "ref": "hagerty-baruth", "quote": "Spec Miata, as a class, has now firmly settled on the second-generation NB car as the winning formula" }
   ]
  },
  {
   "section": "market",
   "claimText": "As of November 2026 classic.com's benchmark for a base NB Miata is $11,137 with an average of $11,716 across 207 recorded sales, a lowest sale of $1,354 and a top sale of $51,500.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["classic-base"],
   "evidence": [
    { "ref": "classic-base", "quote": "CMB $11,137" },
    { "ref": "classic-base", "quote": "Avg $11,716" },
    { "ref": "classic-base", "quote": "Sales Count 207" },
    { "ref": "classic-base", "quote": "Lowest Sale $1,354" },
    { "ref": "classic-base", "quote": "Top Sale $51,500" }
   ]
  },
  {
   "section": "market",
   "claimText": "As of November 2026 classic.com's benchmark is $14,325 for the 10th Anniversary Edition and $15,235 for the 2005 Mazdaspeed.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["classic-10ae", "classic-mazdaspeed-2005"],
   "evidence": [
    { "ref": "classic-10ae", "quote": "CMB $14,325" },
    { "ref": "classic-mazdaspeed-2005", "quote": "CMB $15,235" }
   ]
  },
  {
   "section": "market",
   "claimText": "Consumer Guide's used-car page, bylined July 22, 2014, gives a good-condition range of $4,000 to $11,000, and in December 2008 The Truth About Cars put higher-mileage 10th Anniversary cars at 30 percent of their original value.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["consumerguide-nb", "ttac-10ae"],
   "evidence": [
    { "ref": "consumerguide-nb", "quote": "Written by: Tom Appel on July 22, 2014." },
    { "ref": "consumerguide-nb", "quote": "Good condition price range: $4,000 – $11,000" },
    { "ref": "ttac-10ae", "quote": "Higher mileage drivers in good condition are only worth 30 percent of their original value." }
   ]
  }
 ]
};
