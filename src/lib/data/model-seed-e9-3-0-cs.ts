/**
 * Researched model draft - BMW E9 coupes, 2800 CS, 3.0 CS, 3.0 CSi and 3.0 CSL (1968-1975).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedE930Cs = {
 "slug": "bmw/e9-3-0-cs",
 "make": "BMW",
 "model": "3.0 CS",
 "generation": "E9 coupe",
 "generationCode": "E9",
 "trim": "2800 CS, 3.0 CS, 3.0 CSi, 3.0 CSL",
 "yearStart": 1968,
 "yearEnd": 1975,
 "bodyStyles": [
  "2-door pillarless 4-seat coupe, steel body built by Karmann",
  "2-door lightweight homologation coupe (3.0 CSL) with aluminum doors, hood and trunk lid"
 ],
 "engines": [
  "2,788 cc M30 SOHC inline six, twin Zenith carburetors, about 168-170 hp at 6,000 rpm (2800 CS, 1968-1971)",
  "2,986 cc M30 SOHC inline six, twin Zenith carburetors, about 180 hp at 6,000 rpm in European tune; US cars ran 8:1 compression and no US-specific output figure was found (3.0 CS, 1971-1975)",
  "2,986 cc M30 SOHC inline six, Bosch D-Jetronic electronic fuel injection, about 200 hp at 5,500 rpm and 201 lb-ft (3.0 CSi, 1971-1975, not sold new in the US)",
  "2,986 cc, then 3,003 cc from August 1972, then 3,153 cc M30 inline six in the 3.0 CSL; final road version about 203-206 hp at 5,600 rpm and 211 lb-ft at 4,200 rpm (not sold new in the US)"
 ],
 "productionTotal": null,
 "productionNotes": "Two production tables circulate for the E9 and they do not agree to the car. The table reproduced on Wikipedia, which it attributes to a numbered reference, totals 30,546 coupes from 1968 to 1975. The table posted to the e9coupe.com club forum by a long-time member, and linked from the BMW CS Registry as its production and VIN reference, totals 30,565 by year and 30,565 again when the two VIN-range blocks (25,491 to September 1973, 5,074 after) are added. The difference sits in the 3.0 CSL: the club table splits the early carbureted CSLs differently between 1971 and 1972 (marking one figure as estimated) and adds 21 factory racing CSLs whose years are unknown. The e9coupe.com FAQ rounds the whole run to approximately 30,000 and gives the span as 1968 to 1976, while Sports Car Market says CSL production ceased in December 1975. For that reason no single total is given here. The US count needs the most care. Both tables carry four lines labeled USA (641 2800 CS, 526 2800 CSA, 1,368 3.0 CS and 1,189 3.0 CSA, 3,724 in all), but the club table adds a note that those 3,724 cars were destined for North and South America, of which Hoffman imported 2,953, or 79 percent, into the US. Any US figure printed elsewhere without that caveat is an Americas figure, not a US one. A third conflict is a misattribution rather than a disagreement: RM Sotheby's lot copy for a 1973 3.0 CS says 7,935 were built from 1971 to 1975 with 2,741 in 1973, but both tables assign exactly those figures to the injected 3.0 CSi, not the carbureted CS. No verified US list price by model year was found; the club FAQ gives about $10,000 at launch rising to about $16,000 by 1974, and that is the only dollar figure found.",
 "notableTrims": [
  {
   "name": "2800 CS and 2800 CSA (1968-1971)",
   "note": "The first E9, with the 2,788 cc six and the rear drum brakes and narrow rear track carried over from the four-cylinder 2000 CS. The first US cars, imported by Hoffman; 641 manual and 526 automatic cars were built to the USA specification."
  },
  {
   "name": "3.0 CS, US specification (1971-1974 US model years)",
   "note": "The only E9 BMW sold new in the US: carbureted, 8:1 compression, side marker lights, and from 1974 the protruding 5 mph aluminum bumpers. Most arrived with leather, air conditioning, sunroof and power windows. 1,368 manual and 1,189 automatic USA-specification cars, before the Americas caveat in the production notes."
  },
  {
   "name": "3.0 CSi (1971-1975)",
   "note": "Bosch D-Jetronic injection and about 200 hp, the quickest regular E9. Never officially sold in the US, though a number arrived gray-market, usually in European trim with cloth seats and no air conditioning. 7,935 left-hand-drive cars per both production tables."
  },
  {
   "name": "3.0 CSL (1972-1975)",
   "note": "The homologation lightweight, with thinner body steel and aluminum doors, hood and trunk lid. Not sold in the US. About 1,265 road cars including 500 right-hand-drive cars for the UK, which kept more of the standard equipment. Many carry the city package that put the comforts back."
  },
  {
   "name": "3.0 CSL 3,153 cc \"Batmobile\" (1973-1975)",
   "note": "The final road CSL with the larger engine and the aero kit of air dam, fender fins, roof spoiler and a tall rear wing shipped loose in the trunk. 110 built in 1973 and 57 more to the end, 167 in total, per both Sports Car Market and the club VIN table."
  },
  {
   "name": "2.5 CS (1974-1975)",
   "note": "The fuel-crisis E9 with the 2,494 cc six. 844 built by the club table (600 manual, 244 automatic), none exported to the US. Context for a US buyer only: any 2.5 CS here is a private import."
  }
 ],
 "specs": {
  "layout": "Front-engine, rear-wheel drive, pillarless 2+2 coupe",
  "chassis": "Steel unit body built by Karmann at Rheine, derived from the BMW New Class 2000 CS; 3.0 CSL with thinner-gauge steel and aluminum doors, hood and trunk lid",
  "engine": "M30 SOHC inline six: 2,788 cc (2800 CS), 2,986 cc (3.0 CS and CSi), 3,003 cc and 3,153 cc (3.0 CSL)",
  "power": "About 180 hp at 6,000 rpm for the carbureted 3.0 CS and about 200 hp at 5,500 rpm for the injected CSi, European ratings; no published US-specification output was found for the 8:1 compression US car",
  "torque": "3.0 CS 173 lb-ft at 3,700 rpm per Wikipedia's table, or 180 lb-ft per Retro Rides (disputed); 3.0 CSi 201 lb-ft; 3,153 cc CSL 211 lb-ft at 4,200 rpm",
  "transmission": "Four-speed manual (Getrag on the 3.0 cars) or three-speed Borg-Warner automatic (CSA); many cars now carry retrofitted five-speeds",
  "weight": "3.0 CSi about 3,131 lb per Retro Rides; 3.0 CSL about 2,756 lb per Retro Rides, against the club FAQ's barely 2,500 lb for a stripped CSL and about 2,800 lb with the city package",
  "acceleration": "Street CSL 0-60 mph in about 7.0 to 7.5 seconds and 3.0 CSi about 8.0 seconds per Sports Car Market; Retro Rides cites 7.7 seconds to 62 mph for a manual CSi",
  "brakes": "Discs front; rear drums on the 2800 CS, rear discs from the 3.0 cars in 1971",
  "fuel_system": "Twin Zenith downdraft carburetors (2800 CS, 3.0 CS); Bosch D-Jetronic electronic injection (3.0 CSi and later CSL)",
  "suspension": "MacPherson struts front, semi-trailing arms rear, coil springs and anti-roll bars",
  "wheelbase": "103.3 in (2,624 mm), single source (Wikipedia)",
  "length": "183.5 in (4,660 mm), single source (Wikipedia)",
  "us_specification": "8:1 compression, side marker lights front and rear, shoulder belts, raised front ride height for sealed-beam headlight rules, EGR from the later cars, 5 mph aluminum bumpers for 1974",
  "us_importer": "Max Hoffman (Hoffman Motors Corp); there was no BMW of North America until after the E9",
  "us_price_new": "No verified US list price by model year found; club FAQ gives about $10,000 at launch and about $16,000 by 1974"
 },
 "summary": "The E9 is BMW's Karmann-bodied pillarless coupe of 1968 to 1975, built around the M30 six and sold first as the 2800 CS, then from 1971 as the carbureted 3.0 CS, the injected 3.0 CSi and the lightweight 3.0 CSL homologation special. For an American buyer the line is narrower than the catalog: Max Hoffman imported the 2800 CS and then only the carbureted 3.0 CS, at 8:1 compression with side markers and, for 1974, 5 mph aluminum bumpers. The CSi, the CSL and the late 2.5 CS were never sold new here, so any of them in the US came over privately. Both club and encyclopedia production tables put total E9 output a little over 30,500, and they list 3,724 cars to USA specification, but the club table notes that only 2,953 of those were actually imported into the US. The CSL, nicknamed the Batmobile for its wing, won the European Touring Car Championship six times and gave BMW its first major US sports car win at Sebring in 1975. The thing that decides an E9's value is rust: Karmann's body traps dirt under the front fenders and rots the shock towers from the inside. As of September 2026 classic.com puts the 3.0 CS at a $63,952 benchmark.",
 "history": "## Why it exists\n\nBMW's four-cylinder 2000 CS coupe of 1965 had a pretty tail and an awkward nose, and in 1968 the company had a new six, the M30, in the E3 sedan. The E9 was the cheap way to marry them: Karmann, which already built the 2000 CS body, stretched the wheelbase and the engine bay and gave the car a nose that matched the sedan, with Wilhelm Hofmeister credited as lead designer. Hagerty's Rob Siegel points out that from the tail to the windshield the 2800 CS was basically the 2000 CS body. The economy showed underneath. The first car kept the old coupe's rear drum brakes and narrow rear track, so the 2800 sedan was the better-braked car, and that was not corrected until the 3.0 engine arrived in 1971 with rear discs. Wikipedia dates the 2800 CS to 1968, and the club production table shows 138 built that year; Siegel, writing in Hagerty, places it a year after the 1968 E3 sedan.\n\n## The American car\n\nThere was no BMW of North America when the E9 was new. US cars came through Max Hoffman, and the e9coupe.com FAQ dates official US models from 1970 to 1974. One owner on the club forum has the paperwork to show how that worked: his 1971 2800 CS was built on October 1, 1970 and delivered to Hoffman Motors Corp on October 19. The US got the 2800 CS and then only the carbureted 3.0 CS, with compression cut to 8:1, side marker lights, shoulder belts, spacers that raised the front about an inch for sealed-beam headlight height, and for 1974 the protruding 5 mph aluminum bumpers. Siegel's description of the US cars is that nearly all were fully loaded, with leather, power windows, sunroof and air conditioning. The injected CSi was not imported, though gray-market cars came in, usually in European trim with cloth and no air conditioning.\n\n## What the period press said\n\nRM Sotheby's lot copy for two US 3.0 CS cars quotes Road & Track calling the engine \"without a doubt, the most sophisticated inline-six in the world.\" The same magazine also printed the other side. The 2800 CS mentioned above was the subject of its original owner's own, not very flattering, ownership review in the July 1973 Road & Track, after which he sold it and bought a 3.0 CS. No period US road test with instrumented figures could be fetched for this page; the published acceleration figures here come from later journalism and are labeled as such.\n\n## The CSL and the Batmobile\n\nIntroduced in May 1972, the 3.0 CSL was built to homologate the coupe for the European Touring Car Championship. The L stood for leicht: thinner body steel, aluminum doors, hood and trunk lid, plastic side windows, and the trim and sound deadening deleted. Its engine grew to 3,003 cc in August 1972 so the race cars could run in the over-three-liter class, then to 3,153 cc in 1973 with an aero package of air dam, fender fins, roof spoiler and a tall rear wing. The wing was illegal on German roads, so it was shipped in the trunk for the owner to fit, and the look earned the name Batmobile. Sports Car Market counts 110 of these built in 1973 and 57 more to December 1975. The CSL was the first product of the new Motorsport division, the first BMW Art Car was a CSL painted by Alexander Calder, and in 1975 a CSL gave BMW its first major sports car win in the US at the 12 Hours of Sebring. None were sold new here.\n\n## The end\n\nThe last variant, the 2.5 CS of 1974, answered the oil crisis and was never exported to the US. The E24 6 Series replaced the line after 1975. What survives is a car that BMW built cheaply on an old body and that Karmann built without much rust protection, which is why the condition of the metal, not the badge, sets the price today.",
 "marketNotes": "As of September 2026 classic.com puts its market benchmark for the 3.0 CS at $63,952 with an average price of $66,048. Its recorded range runs from $9,400 for a 1975 3.0 CSA on July 28, 2022 to $151,200 for a 1972 3.0 CS on August 14, 2026, which is the market's ceiling to date for the carbureted car that was actually sold in the US. The injected cars sit well above: classic.com's 3.0 CSi benchmark is $97,048 with an average of $94,424, and its lowest recorded sale was $11,250 for a 1972 CSi project in May 2022. The 3.0 CSL benchmark is $180,779 with an average of $186,255; the lowest recorded CSL sale, $37,250 in July 2022, is far enough below the rest to read as a car needing everything. Two US auction results show the slope behind those numbers. RM Sotheby's sold a 1973 3.0 CS automatic with factory air conditioning for $31,900 at Fort Lauderdale in 2014, and at Santa Monica in 2016 a 1973 3.0 CS automatic was offered with a $60,000 to $70,000 estimate and did not sell. Hagerty's Rob Siegel wrote that photos of his own color-changed CSi would suggest a $100,000 to $140,000 car on Hagerty values and online results, and that purists would mark it down for the color change and the non-original engine. Originality, rust history and the US-versus-European specification all move the number more than model year does. No individual CSL auction lot page could be fetched for this research, so no single CSL sale is quoted.",
 "whatToLookFor": "Start with the metal, because the e9coupe.com FAQ is blunt that rust is a coupe killer and that body and interior parts are now mostly sourced from parts cars. Hagerty's Rob Siegel describes a trap under the front fenders where dirt collects, stays wet and rots the shock towers, fenders and firewall from the inside, so that perforation at the bottom of the fenders means the damage is already advanced. Look at the join between the inner and outer fenders under the hood, inside the rocker panels, around the rear subframe mounts, the wheel arches, the trunk floor and the window surrounds. A sunroof car with a stained headliner may have a rusted roof around the opening. On an E9 the rear of each front fender forms the corner of the windshield frame, so fender replacement means the windshield comes out, and evidence of that work deserves an explanation. Then identify the car. A US 3.0 CS should show the 8:1 compression engine, side markers, the steering column VIN tag the FAQ describes and, on a 1974, the big aluminum bumpers. US 1973 model-year cars begin at VIN 2240391 for manual cars and 2250319 for automatics in the club VIN table. A CSi or CSL in the US arrived privately, and a CSL claim needs the VIN to fall in the CSL ranges; the club table also lists 169 early carbureted lightweights hidden inside the 3.0 CS VIN range. BMW's archive can confirm build date, original model and color from the VIN. Many cars now carry larger engines, five-speeds or Weber carburetors, which the FAQ says can be neutral to value when done well and which purists discount.",
 "commonProblems": "The M30 itself is durable. The e9coupe.com FAQ puts engine life past 300,000 miles between rebuilds with valve adjustments every 15,000 miles, and says the timing chain normally lasts the life of the engine. Its weak point in the US is heat: the FAQ says the M30 in an E9 can be prone to head gaskets because the stock cooling was designed for European climates, and recommends replacing the five-blade fan with a nine-blade fan and an updated clutch, or recoring the radiator. A reprinted buyer's guide on the club forum adds that contaminated oil usually means a cracked head and that a test drive should be long enough to check for overheating. The same guide lists differential oil leaks, worn driveshaft flex joints, power steering that is vague at center or squeals at full lock, two brake boosters that can fail (a pedal that sinks with the engine running is the test), slow electric windows, cracked dash wood and sun-damaged velour. On the original 2800 CS manual cars there were synchromesh complaints that the 3.0 gearbox addressed. The body is the expensive problem. Rust, Karmann's indifferent corrosion protection and the hidden fender trap are covered above, and Siegel's own repair history shows why: new nose and fender panels, cutting off the old fenders and welding in new ones, and a new windshield because the fenders are lap-seamed to its frame. NHTSA's recall database returns no campaigns for BMW E9 model years, so there are no factory recalls to check.",
 "valueTrajectory": "The E9 has been an expensive car to buy well for a long time. Siegel recalls shiny examples costing about $10,000 in the 1980s when a nice 2002 cost a third of that, and he bought his basket-case CSi for $1,700 in 1986. In 2016 the e9coupe.com FAQ sorted the market into bands from under $5,000 for a parts car to $25,000 and above for a car with little to fix, with nicely restored CSLs over $100,000 at auction. RM Sotheby's $31,900 sale of a US 3.0 CS automatic in 2014 sits inside that picture. As of September 2026 classic.com's benchmark for the 3.0 CS is $63,952, its CSi benchmark $97,048 and its CSL benchmark $180,779, and the best 3.0 CS on its record sold for $151,200 in August 2026. That is roughly a doubling for an average carbureted car since the mid-2010s and a wide spread between average and best, which is what rust does to a market: a rust-free, documented US car and a car with hidden fender rot can look alike in photographs and differ by six figures once the fenders come off.",
 "overallConfidence": "medium",
 "sources": [
  {
   "ref": "wiki-e9",
   "title": "BMW E9",
   "url": "https://en.wikipedia.org/wiki/BMW_E9",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Pointer source. Production table by model and year totaling 30,546, including USA lines of 641, 526, 1,368 and 1,189; 3.0 CSL 1,265 built including 500 for the UK and not sold in the US; CSL introduced May 1972, 3,003 cc in August 1972, 3,153 cc in 1973; rear wing shipped in the trunk; 1974 US 5 mph bumpers; 2.5 CS not exported to the US; engine table (3.0 CS 235 Nm at 3,700 rpm); Karmann at Rheine; wheelbase and length; 1975 IMSA; Calder and Stella Art Cars."
  },
  {
   "ref": "e9coupe-faq",
   "title": "BMW e9 coupe FAQ",
   "url": "https://www.e9coupe.com/faq.html",
   "publisher": "e9coupe.com",
   "sourceType": "club-forum",
   "reliability": "medium",
   "notes": "Member-compiled club FAQ: CSi only officially sold outside the US; US cars came through Max Hoffman with no BMW NA; official US models 1970 to 1974; about $10,000 base price at launch rising to about $16,000 by 1974; US 3.0 CS compression 8:1 versus 9:1; side markers, EGR, 1974 5 mph bumpers, raised front ride height; CSL barely 2,500 lb stripped and about 2,800 lb with city pack; head gaskets in hot climates and fan upgrade; 2016 price bands; approximately 30,000 built 1968 to 1976."
  },
  {
   "ref": "e9coupe-vin-production",
   "title": "E9 VIN production range / how to find your VIN",
   "url": "https://e9coupe.com/forum/threads/e9-vin-production-range-how-to-find-your-vin.34716/",
   "publisher": "e9coupe.com",
   "sourceType": "registry",
   "reliability": "medium",
   "notes": "The production and VIN reference the BMW CS Registry links to. VIN ranges and counts by variant (3.0 CS/USA 975 plus 393, 3.0 CSA/USA 738 plus 451); Batmobile 110 plus 57; by-year table totaling 30,565 with an estimated early CSL figure and 21 factory racing CSLs; note that Hoffman imported 2,953 (79 percent) of 3,724 USA-specification cars destined for North and South America; US 1973 model year begins at VINs 2240391 and 2250319; 169 carbureted lightweight CSLs inside the 3.0 CS VIN range."
  },
  {
   "ref": "e9coupe-us-intro-thread",
   "title": "When was the 3.0 CS introduced to the USA",
   "url": "https://www.e9coupe.com/forum/threads/when-was-the-3-0-cs-introduced-to-the-usa.45283/",
   "publisher": "e9coupe.com forum",
   "sourceType": "club-forum",
   "reliability": "low",
   "notes": "Owner thread: a 1971 2800 CS built October 1, 1970 and delivered to Hoffman Motors Corp on October 19, 1970; its original owner wrote an unflattering ownership review in the July 1973 Road & Track and then bought a 3.0 CS; members confirm the production chart's US model years."
  },
  {
   "ref": "e9coupe-buyers-guide",
   "title": "Buyers guide to e9's",
   "url": "https://e9coupe.com/forum/threads/buyers-guide-to-e9s.11339/",
   "publisher": "e9coupe.com forum (reprinted Australian buyer's guide)",
   "sourceType": "club-forum",
   "reliability": "low",
   "notes": "Used only for fault patterns and inspection points: rust spots (inner and outer fender join, rocker panels, rear subframe mounts, arches, trunk floor, window surrounds), cracked heads, overheating, differential leaks, flex joints, twin brake boosters, sunroof leaks, 2800 CS synchromesh complaints, Karmann rust proofing indifferent. Its production figures and Australian prices are not used."
  },
  {
   "ref": "bmw-cs-registry",
   "title": "BMW CS Registry",
   "url": "https://bmwcsregistry.org/list/",
   "publisher": "BMW CS Registry",
   "sourceType": "registry",
   "reliability": "medium",
   "notes": "Owner-submitted chassis registry. Entry counts at time of fetch (September 2026): 2800 CS 519, 3.0 CS 1,467, 3.0 CSi 594, 3.0 CSL 209, 3.2 CSL 22, 3.5 CSL 8. Links to the e9coupe.com production and VIN table as its reference."
  },
  {
   "ref": "hagerty-siegel-37yr",
   "title": "The 37-year-long rolling resto of my BMW 3.0CSi",
   "url": "https://www.hagerty.com/media/opinion/the-hack-mechanic/the-37-year-long-rolling-resto-of-my-bmw-3-0csi/",
   "publisher": "Hagerty Media",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Rob Siegel on his 1973 CSi: the front fender dirt trap that rots shock towers, fenders and firewall; fenders lap-seamed at the windshield corners; $1,700 purchase in 1986; shiny E9s about $10,000 in the 1980s; photos would suggest a $100,000 to $140,000 car on Hagerty values and online sales; purists would discount the color change and non-original engine."
  },
  {
   "ref": "hagerty-siegel-resto1",
   "title": "From beaten down to beautiful: Resurrecting a BMW 3.0CSi, Part 1",
   "url": "https://hagerty.com/media/?p=4777",
   "publisher": "Hagerty Media",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "E9 evolved from the 2000 C/CS, never commercially imported to the US; 2800 CS body basically the 2000 CS from tail to windshield; 2800 CS kept rear drums, corrected in 1971; the US saw only the carbureted 3.0CS, nearly all fully loaded; gray-market CSis in European trim; CSL lightweight and city package; Karmann rust; fender rear sections form the windshield corners."
  },
  {
   "ref": "rm-fl14",
   "title": "1973 BMW 3.0 CS | Fort Lauderdale 2014 | RM Sotheby's",
   "url": "https://rmsothebys.com/auctions/fl14/lots/r0320-1973-bmw-30-cs/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Lot 212, Fort Lauderdale 2014: 1973 3.0 CS, carbureted, automatic, factory air conditioning, sold for $31,900. Quotes Road & Track on the engine. Lot copy assigns 7,935 built 1971 to 1975 with 2,741 in 1973 to the 3.0 CS, figures the production tables give to the CSi."
  },
  {
   "ref": "rm-ca16",
   "title": "1973 BMW 3.0 CS | Santa Monica 2016 | RM Sotheby's",
   "url": "https://rmsothebys.com/auctions/ca16/lots/r0259-1973-bmw-30-cs/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Lot 2081, Santa Monica 2016: 1973 3.0 CS automatic, estimate $60,000 to $70,000, not sold. Repeats the Road & Track engine quote and the 7,935 figure; says leather was standard on all 1973 3.0 CS coupes."
  },
  {
   "ref": "scm-csl",
   "title": "1973 BMW 3.0 CSL Batmobile",
   "url": "https://www.sportscarmarket.com/profile/1973-bmw-3-0-csl-batmobile",
   "publisher": "Sports Car Market",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "CSL profile: thinner steel, aluminum hood and trunk, deleted equipment, 250 kg (551 lb) saved; wing not fitted by German dealers; 3,153 cc; 110 Batmobiles in 1973 and 57 more until production ceased December 1975; 206 hp; street CSL 0-60 mph about 7.0 to 7.5 seconds against about 8.0 for a CSi; first product of the Motorsport division. Its 2006 London sale result is not used as a value."
  },
  {
   "ref": "motorauthority-csl",
   "title": "The BMW 3.0 CSL Batmobile (E9) is an automotive icon",
   "url": "https://www.motorauthority.com/news/1132535_the-bmw-3-0-csl-batmobile-e9-is-an-automotive-icon",
   "publisher": "Motor Authority",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Group 2 homologation required 1,000 road cars; 3.2-liter final road CSL at 206 hp; 1975 12 Hours of Sebring as BMW's first major US sports car win; first BMW Art Car by Alexander Calder."
  },
  {
   "ref": "retrorides-e9",
   "title": "Top Tips for Buying a Used BMW E9 Series Coupe (1968-76)",
   "url": "https://retrorides.com.au/buyers-guides/top-tips-for-buying-a-used-bmw-e9-series-coupe-1968-76/",
   "publisher": "Retro Rides",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Australian specialist history, used for specification and history only, never for value: 3.0 CS 134 kW and 244 Nm, CSi 149 kW and 272 Nm; rear discs plus Getrag manual and Borg-Warner automatic with the 3.0; CSi 1,420 kg; CSL about 170 kg lighter at 1,250 kg; 167 Batmobiles of 1,265 CSLs; about 500 UK CSLs with luxury equipment; CSi 0-100 km/h in 7.7 seconds."
  },
  {
   "ref": "classic-30cs",
   "title": "BMW New Six E9 3.0 CS Market",
   "url": "https://www.classic.com/m/bmw/new-six/e9/30-cs/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of September 2026: CMB $63,952, average $66,048, lowest recorded sale $9,400 for a 1975 3.0 CSA on July 28, 2022, highest $151,200 for a 1972 3.0 CS on August 14, 2026; model years 1971 to 1975; four-speed manual or three-speed automatic, five-speed retrofits common."
  },
  {
   "ref": "classic-30csi",
   "title": "BMW New Six E9 3.0 CSi Market",
   "url": "https://www.classic.com/m/bmw/new-six/e9/30-csi/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of September 2026: CMB $97,048, average $94,424, lowest recorded sale $11,250 for a 1972 CSi project on May 23, 2022; model years 1971 to 1975."
  },
  {
   "ref": "classic-30csl",
   "title": "BMW New Six E9 3.0 CSL Market",
   "url": "https://www.classic.com/m/bmw/new-six/e9/30-csl/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of September 2026: CMB $180,779, average $186,255, lowest recorded sale $37,250 for a 1972 CSL on July 28, 2022; model years 1972 to 1975."
  },
  {
   "ref": "nhtsa-1974-bmw",
   "title": "NHTSA recall products by model year: 1974 BMW",
   "url": "https://api.nhtsa.gov/products/vehicle/models?modelYear=1974&make=bmw&issueType=r",
   "publisher": "National Highway Traffic Safety Administration",
   "sourceType": "government",
   "reliability": "high",
   "notes": "Returns a count of zero: no BMW models, the 3.0 CS included, carry recall records for the 1974 model year in the federal database. Cited to show the gap, not a fault."
  }
 ],
 "claims": [
  {
   "section": "production",
   "claimText": "Total E9 production is given as 30,546 in the table reproduced on Wikipedia and 30,565 in the e9coupe.com club table, while the club FAQ rounds it to approximately 30,000; no single figure is stated on this page.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["wiki-e9", "e9coupe-vin-production", "e9coupe-faq"],
   "conflictNote": "Wikipedia's production table totals 30,546. The e9coupe.com VIN and production table totals 30,565, splitting the early CSLs differently between 1971 and 1972 with one estimated figure and adding 21 factory racing CSLs. The e9coupe.com FAQ gives approximately 30,000. Not resolved by any source consulted here.",
   "evidence": [
    { "ref": "wiki-e9", "quote": "Total E9 Production 138 3400 5242 4535 6777 6026 2694 1734 30,546" },
    { "ref": "e9coupe-vin-production", "quote": "Production Total 138 3,400 5,242 4,466 6,844 6,026 2,694 1,734 30,565" },
    { "ref": "e9coupe-faq", "quote": "Approximately 30,000 E9s were made over the entire production run." }
   ]
  },
  {
   "section": "production",
   "claimText": "The production tables list 3,724 E9s built to USA specification, but the club table notes these were destined for North and South America and that Hoffman imported 2,953 of them, 79 percent, into the US.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["e9coupe-vin-production", "wiki-e9"],
   "conflictNote": "Wikipedia's table labels 641 2800 CS, 526 2800 CSA, 1,368 3.0 CS and 1,189 3.0 CSA cars as USA, 3,724 in all, with no caveat. The e9coupe.com table carries the same four lines but notes that those 3,724 cars were destined for North and South America and that 2,953 were imported into the US by Hoffman. How many of the remaining 771 went to Canada or Latin America is not stated, so the true US count is not resolved by any source consulted here.",
   "evidence": [
    { "ref": "e9coupe-vin-production", "quote": "Hoffman imported 2,953 or 79% of all 2800CS and 3.0CS into the US out of 3,724 destined for North and South America" },
    { "ref": "wiki-e9", "quote": "3.0 CS USA 132 411 450 375 1368" }
   ]
  },
  {
   "section": "production",
   "claimText": "RM Sotheby's lot copy states that 7,935 3.0 CS coupes were built from 1971 to 1975 with 2,741 in 1973, but both production tables assign exactly those figures to the fuel-injected 3.0 CSi.",
   "confidence": "high",
   "status": "disputed",
   "sourceRefs": ["rm-fl14", "wiki-e9", "e9coupe-vin-production"],
   "conflictNote": "RM Sotheby's (Fort Lauderdale 2014 and Santa Monica 2016 lot copy) attributes 7,935 cars and 2,741 in 1973 to the 3.0 CS. Wikipedia's table and the e9coupe.com table both give 7,935 total and 2,741 in 1973 for the 3.0 CSi, and give the carbureted 3.0 CS 4,455 manual and 3,667 automatic cars outside the USA lines. The auction copy appears to have read the wrong line, but no source consulted here explains the discrepancy, so it is left unresolved.",
   "evidence": [
    { "ref": "rm-fl14", "quote": "In all, 7,935 were built from 1971 to 1975; with 2,741 in 1973." },
    { "ref": "wiki-e9", "quote": "3.0 CSi 1061 2999 2741 579 555 7935" },
    { "ref": "e9coupe-vin-production", "quote": "3.0 CSi 1,061 2,999 2,741 579 555 7,935" }
   ]
  },
  {
   "section": "production",
   "claimText": "About 1,265 road-going 3.0 CSLs were built, including 500 right-hand-drive cars for the UK, and 167 of them were the final 3,153 cc Batmobile road cars, 110 in 1973 and 57 afterward.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["wiki-e9", "retrorides-e9", "scm-csl", "e9coupe-vin-production"],
   "evidence": [
    { "ref": "wiki-e9", "quote": "a homologation special built to make the car eligible for racing in the European Touring Car Championship . 1,265 were built." },
    { "ref": "retrorides-e9", "quote": "It is generally believed that 167 of these 'Batmobiles' were produced from a total of 1265 CSLs." },
    { "ref": "scm-csl", "quote": "Only 110 such road-going examples were produced in this 3.2-liter form in 1973, with a mere 57 more cars leaving the factory" },
    { "ref": "e9coupe-vin-production", "quote": "3.0 CSL (3153cc) \"Batmobile\" 2275430 2275539 110" }
   ]
  },
  {
   "section": "production",
   "claimText": "The e9coupe.com FAQ gives the E9 production span as 1968 to 1976, while Wikipedia gives 1968 to 1975 and Sports Car Market says CSL production ceased in December 1975.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["e9coupe-faq", "scm-csl", "wiki-e9"],
   "conflictNote": "The e9coupe.com FAQ states the production run lasted from 1968 to 1976. Sports Car Market states CSL production ceased in December 1975, and Wikipedia gives the range as 1968 to 1975 and both production tables end at 1975. Whether any car was completed in 1976 is not resolved by any source consulted here.",
   "evidence": [
    { "ref": "e9coupe-faq", "quote": "The production run lasted from 1968 to 1976." },
    { "ref": "scm-csl", "quote": "with a mere 57 more cars leaving the factory until production ceased in December 1975" },
    { "ref": "wiki-e9", "quote": "The BMW E9 is a range of coupés produced by German automaker BMW from 1968 to 1975." }
   ]
  },
  {
   "section": "production",
   "claimText": "In the club VIN table, US-specification 3.0 CS cars total 1,368 with manual transmission and 1,189 automatic, and the US 1973 model year begins at VIN 2240391 for manual cars and 2250319 for automatics.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["e9coupe-vin-production", "wiki-e9"],
   "evidence": [
    { "ref": "e9coupe-vin-production", "quote": "US/NA Market 3.0CS for model year 1973 begins at 2240391 and 2250319" },
    { "ref": "wiki-e9", "quote": "3.0 CSA USA 60 377 314 438 1189" }
   ]
  },
  {
   "section": "history",
   "claimText": "There was no BMW of North America during the E9's life; US cars came through Max Hoffman, and one documented 1971 2800 CS was built on October 1, 1970 and delivered to Hoffman Motors Corp on October 19, 1970.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["e9coupe-faq", "e9coupe-us-intro-thread"],
   "evidence": [
    { "ref": "e9coupe-faq", "quote": "Official US cars came entirely through Max Hoffman, as there was no BMW NA at the time." },
    { "ref": "e9coupe-us-intro-thread", "quote": "my car was manufactured on October 1st 1970 and delivered on October 19th 1970 to the BMW importer Hoffman Motors Corp." }
   ]
  },
  {
   "section": "history",
   "claimText": "The US received only the carbureted 3.0 CS; the fuel-injected 3.0 CSi was officially sold only outside the US, although gray-market CSis did reach the country, usually in European trim.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["hagerty-siegel-resto1", "e9coupe-faq"],
   "evidence": [
    { "ref": "hagerty-siegel-resto1", "quote": "The U.S. saw only the carbureted 3.0CS, nearly all of which were fully-loaded cars with leather seats, power windows, sunroof, and air conditioning." },
    { "ref": "e9coupe-faq", "quote": "A CS with an \"i\" after it is a fuel injected version, only officially sold outside the US." }
   ]
  },
  {
   "section": "history",
   "claimText": "Neither the 3.0 CSL nor the 1974-1975 2.5 CS was sold new in the US.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["wiki-e9", "hagerty-siegel-resto1"],
   "evidence": [
    { "ref": "wiki-e9", "quote": "The CSL was not sold in the United States." },
    { "ref": "hagerty-siegel-resto1", "quote": "The U.S. saw only the carbureted 3.0CS, nearly all of which were fully-loaded cars" }
   ]
  },
  {
   "section": "specs",
   "claimText": "US 3.0 CS cars ran 8:1 compression against 9:1 for European cars, had side marker lights, and from the 1974 model year carried protruding 5 mph bumpers.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["e9coupe-faq", "wiki-e9"],
   "evidence": [
    { "ref": "e9coupe-faq", "quote": "the compression ratio in the US 3.0CS was reduced to 8:1, while the Euro cars were 9:1, giving them more power" },
    { "ref": "wiki-e9", "quote": "In the United States, 1974 models have protruding 5 mile per hour bumpers" }
   ]
  },
  {
   "section": "specs",
   "claimText": "Published torque for the carbureted 3.0 CS differs: Wikipedia's engine table gives 173 lb-ft at 3,700 rpm, while Retro Rides gives 180 lb-ft; both are European ratings.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["wiki-e9", "retrorides-e9"],
   "conflictNote": "Wikipedia's engine table lists the 3.0 CS at 173 lb-ft (235 Nm) at 3,700 rpm. Retro Rides gives 180 lb-ft (244 Nm) for the twin-carburetor 3.0 CS. Neither figure is for the 8:1 compression US engine, and the difference is not resolved by any source consulted here.",
   "evidence": [
    { "ref": "wiki-e9", "quote": "3.0 CS 1971-1975 M30B30V SOHC I6 2,986 cc (182.2 cu in) 132 kW (180 PS; 178 bhp) at 6,000 rpm 235 N⋅m (173 lb⋅ft) at 3,700 rpm" },
    { "ref": "retrorides-e9", "quote": "the twin-carbureted 3.0 CS boasting outputs of 134kW/244Nm and the 3.0 CSi a more muscular 149kW/272Nm" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 3.0 CSi used Bosch D-Jetronic electronic fuel injection and 9.5:1 compression for about 200 hp at 5,500 rpm and 201 lb-ft.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["wiki-e9", "retrorides-e9"],
   "evidence": [
    { "ref": "wiki-e9", "quote": "The 3.0 CSi has a 9.5:1 compression ratio, Bosch D-Jetronic electronic fuel injection, and produces 149 kW (200 hp) at 5500 rpm." },
    { "ref": "retrorides-e9", "quote": "the 3.0 CSi a more muscular 149kW/272Nm" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The final road 3.0 CSL used a 3,153 cc engine rated at about 206 hp, only slightly more than the 3.0 CSi.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["scm-csl", "motorauthority-csl", "wiki-e9"],
   "evidence": [
    { "ref": "scm-csl", "quote": "The CSL, on the other hand, put out 206 hp, just a 6-hp difference over the normal 3.0 CSi." },
    { "ref": "motorauthority-csl", "quote": "Power was provided by an inline-6 engine displacing 3.2 liters and producing 206 hp in the final evolution of the road car." },
    { "ref": "wiki-e9", "quote": "the engine in the 3.0 CSL was given another, more substantial increase in displacement to 3,153 cc" }
   ]
  },
  {
   "section": "specs",
   "claimText": "Sources disagree on how much weight the CSL saved: Sports Car Market says 551 lb, Retro Rides about 375 lb to a curb weight near 2,756 lb, and the club FAQ says original CSLs weighed barely 2,500 lb.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["scm-csl", "retrorides-e9", "e9coupe-faq"],
   "conflictNote": "Sports Car Market states about 551 lb (250 kg) was shaved from the curb weight. Retro Rides states the weight loss shaved about 375 lb (170 kg) and gives the CSL at about 2,756 lb (1,250 kg). The e9coupe.com FAQ says original CSLs weighed barely 2,500 lb and city-pack CSLs about 2,800 lb. Differences in specification (stripped, city pack, UK cars) may explain part of it, but no source consulted here resolves it.",
   "evidence": [
    { "ref": "scm-csl", "quote": "in total, 250 kgs (approx. 551 lbs) were shaved off the curb weight" },
    { "ref": "retrorides-e9", "quote": "Designed as a homologation special, the 1250kg 3.0 CSL featured lightweight aluminium bonnet, boot and doors in lieu of steel" },
    { "ref": "e9coupe-faq", "quote": "All these factors made the original CSLs weigh in at barely 2500lbs." }
   ]
  },
  {
   "section": "history",
   "claimText": "The Batmobile's tall rear wing was not fitted at the factory or by German dealers because it was not legal on German roads; it was supplied in the trunk for the owner to fit.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["wiki-e9", "scm-csl"],
   "evidence": [
    { "ref": "wiki-e9", "quote": "The rear wings were not installed at the factory, but were left in the boot for installation after purchase." },
    { "ref": "scm-csl", "quote": "Though not able to be supplied fitted by the dealers in Germany, the dynamic beast also came with a roof-mounted deflector and a huge rear wing" }
   ]
  },
  {
   "section": "history",
   "claimText": "The CSL was the first product of BMW's Motorsport division, the first BMW Art Car was a CSL painted by Alexander Calder, and a CSL won the 1975 12 Hours of Sebring, BMW's first major sports car win in the US.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["scm-csl", "motorauthority-csl", "wiki-e9"],
   "evidence": [
    { "ref": "scm-csl", "quote": "The CSL was the first product of the Motorsport division, and as such was the progenitor of the famous \"M\" cars." },
    { "ref": "motorauthority-csl", "quote": "A CSL also scored BMW's first major sports car racing victory in the U.S. (at the 1975 12 Hours of Sebring )" },
    { "ref": "wiki-e9", "quote": "The first two BMW Art Cars were 3.0 CSLs; the first was painted by Alexander Calder and the second by Frank Stella ." }
   ]
  },
  {
   "section": "history",
   "claimText": "The 2800 CS kept the rear drum brakes of the four-cylinder coupe; the 3.0 cars of 1971 brought rear disc brakes along with new Getrag manual and Borg-Warner automatic transmissions.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["hagerty-siegel-resto1", "retrorides-e9"],
   "evidence": [
    { "ref": "hagerty-siegel-resto1", "quote": "the pretty 2800CS still had the rear drum brakes and narrow rear wheel track inherited from the 2000CS" },
    { "ref": "retrorides-e9", "quote": "the addition of rear disc brakes plus new manual and automatic transmissions from Getrag and Borg Warner respectively" }
   ]
  },
  {
   "section": "history",
   "claimText": "Wikipedia dates the 2800 CS to 1968 and the production tables show 138 built that year, while Hagerty's Rob Siegel places its debut a year after the 1968 E3 sedan.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["wiki-e9", "hagerty-siegel-resto1"],
   "conflictNote": "Wikipedia states the 2800 CS replaced the 2000 C and 2000 CS in 1968, and its production table shows 138 cars in 1968. Hagerty's Rob Siegel writes that BMW debuted the E3 sedan in 1968 and followed it a year later with the 2800 CS. Whether the difference is launch versus first deliveries is not settled by any source consulted here.",
   "evidence": [
    { "ref": "wiki-e9", "quote": "The first of the E9 coupés, the 2800 CS, replaced the 2000 C and 2000 CS in 1968." },
    { "ref": "hagerty-siegel-resto1", "quote": "A year later, BMW followed that with the 2800CS, the first of the redesigned M30-powered E9 coupes." }
   ]
  },
  {
   "section": "history",
   "claimText": "RM Sotheby's lot copy for two US 3.0 CS cars quotes period Road & Track calling the engine without a doubt the most sophisticated inline six in the world.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["rm-fl14", "rm-ca16"],
   "evidence": [
    { "ref": "rm-fl14", "quote": "In period Road & Track magazine called the 3.0 \"without a doubt, the most sophisticated inline-six in the world.\"" },
    { "ref": "rm-ca16", "quote": "In period, Road & Track magazine called the 3.0 \"without a doubt, the most sophisticated inline-six in the world.\"" }
   ]
  },
  {
   "section": "history",
   "claimText": "According to its current owner on the club forum, the original owner of a 1971 2800 CS wrote an unflattering ownership review of it in the July 1973 Road & Track, then sold it and bought a 3.0 CS; this is a single forum account.",
   "confidence": "low",
   "status": "unverified",
   "sourceRefs": ["e9coupe-us-intro-thread"],
   "evidence": [
    { "ref": "e9coupe-us-intro-thread", "quote": "He wrote a not so flattering article, reveiw of his ownership, about my car in the July 1973 editon of Road and track." }
   ]
  },
  {
   "section": "problems",
   "claimText": "The Karmann-built E9 body traps dirt under the front fenders, where it stays wet and rots the shock towers, fenders and firewall from the inside, and the rear of each front fender forms the corner of the windshield frame, so fender replacement means removing the windshield.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["hagerty-siegel-37yr", "hagerty-siegel-resto1"],
   "evidence": [
    { "ref": "hagerty-siegel-37yr", "quote": "its construction included a trap under the front fenders where dirt would accumulate, stay wet, and rot out the shock towers, fenders, and firewall from the inside" },
    { "ref": "hagerty-siegel-resto1", "quote": "on an E9, the rear section of the fenders actually form the corners of the windshield frame, so the windshield has to come out to replace them" }
   ]
  },
  {
   "section": "problems",
   "claimText": "The M30 engine is durable, but in an E9 it can be prone to head gasket failure in hot climates because the stock cooling was designed for Europe; owners upgrade the fan and fan clutch or recore the radiator, and a test drive should check for overheating.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["e9coupe-faq", "e9coupe-buyers-guide"],
   "evidence": [
    { "ref": "e9coupe-faq", "quote": "Mechanically, the cars are very durable, although the M30 can be prone to blowing head gaskets." },
    { "ref": "e9coupe-buyers-guide", "quote": "Make sure you test a CS for long enough to check for overheating." }
   ]
  },
  {
   "section": "problems",
   "claimText": "Inspection points for rust include the join between the inner and outer fenders, inside the rocker panels, the rear subframe mounts, wheel arches, trunk floor and window surrounds, and Karmann's rust proofing is described as indifferent.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["e9coupe-buyers-guide", "retrorides-e9"],
   "evidence": [
    { "ref": "e9coupe-buyers-guide", "quote": "looking under the bonnet at the join between the inner and outer mudguards, inside the door sills, around the rear sub-frame mountings, wheel-arches, boot floor and window surrounds" },
    { "ref": "retrorides-e9", "quote": "Although built well, rust protection was an issue on the E9 as with many other cars of its era" }
   ]
  },
  {
   "section": "problems",
   "claimText": "NHTSA's recall database returns no recall records for any BMW model in the 1974 model year, so there are no federal recall campaigns to check on a US 3.0 CS.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["nhtsa-1974-bmw"],
   "evidence": [
    { "ref": "nhtsa-1974-bmw", "quote": "\"count\":0,\"message\":\"Results returned successfully\"" }
   ]
  },
  {
   "section": "production",
   "claimText": "The owner-submitted BMW CS Registry held 1,467 3.0 CS entries, 594 3.0 CSi entries and 209 3.0 CSL entries when fetched in September 2026; these are registrations, not a survival count.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["bmw-cs-registry"],
   "evidence": [
    { "ref": "bmw-cs-registry", "quote": "2800 CS (519) 3.0 CS (1467) 3.0 CSi (594) 3.0 CSL (209)" }
   ]
  },
  {
   "section": "market",
   "claimText": "No verified US list price by model year was found; the club FAQ gives a base price of about $10,000 at launch rising to about $16,000 by 1974, a single approximate source.",
   "confidence": "low",
   "status": "unverified",
   "sourceRefs": ["e9coupe-faq"],
   "evidence": [
    { "ref": "e9coupe-faq", "quote": "The car had a base price of ~10kUS when launched and the base model had quite a few options from the start." }
   ]
  },
  {
   "section": "market",
   "claimText": "As of September 2026 classic.com's benchmark for the 3.0 CS is $63,952 with an average of $66,048, a lowest recorded sale of $9,400 for a 1975 3.0 CSA in July 2022 and a highest of $151,200 for a 1972 3.0 CS in August 2026.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["classic-30cs"],
   "evidence": [
    { "ref": "classic-30cs", "quote": "The highest recorded sale price was $151,200 for a 1972 BMW 3.0 CS on Aug 14, 2026." }
   ]
  },
  {
   "section": "market",
   "claimText": "As of September 2026 classic.com's benchmark for the 3.0 CSi is $97,048 with an average of $94,424, and for the 3.0 CSL $180,779 with an average of $186,255.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["classic-30csi", "classic-30csl"],
   "evidence": [
    { "ref": "classic-30csi", "quote": "The average price of a Bmw New Six - E9 - 30 Csi is $94,424." },
    { "ref": "classic-30csl", "quote": "The average price of a Bmw New Six - E9 - 30 Csl is $186,255." }
   ]
  },
  {
   "section": "market",
   "claimText": "RM Sotheby's sold a 1973 3.0 CS automatic with factory air conditioning for $31,900 at Fort Lauderdale in 2014, and offered a 1973 3.0 CS automatic at Santa Monica in 2016 with a $60,000 to $70,000 estimate where it did not sell.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["rm-fl14", "rm-ca16"],
   "evidence": [
    { "ref": "rm-fl14", "quote": "This particular car is powered by the carbureted 3.0-liter inline six-cylinder engine and mated to an automatic transmission." },
    { "ref": "rm-ca16", "quote": "$60,000 - $70,000 USD | Not Sold Santa Monica 2016 , Lot 2081" }
   ]
  },
  {
   "section": "market",
   "claimText": "Hagerty's Rob Siegel wrote that a photo of his color-changed 3.0 CSi would suggest a $100,000 to $140,000 car on Hagerty values and online sales, but that purists would discount it for the color change and non-original engine.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["hagerty-siegel-37yr"],
   "evidence": [
    { "ref": "hagerty-siegel-37yr", "quote": "a photo of this car would sway you into thinking it's a $100,000–$140,000 E9" }
   ]
  }
 ]
};
