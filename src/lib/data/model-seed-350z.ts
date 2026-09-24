/**
 * Researched model draft - Nissan 350Z (Z33), US market 2003-2009 model years.
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seed350z = {
 "slug": "nissan/350z",
 "make": "Nissan",
 "model": "350Z",
 "generation": null,
 "generationCode": "Z33",
 "trim": "Base, Enthusiast, Performance, Touring, Grand Touring, Track, 35th Anniversary and NISMO; coupe and Roadster (US 2003-2009 model years)",
 "yearStart": 2003,
 "yearEnd": 2009,
 "bodyStyles": [
  "3-door two-seat hatchback coupe (2003-2008 US model years)",
  "2-door two-seat Roadster with power soft top, heated glass rear window and powered tonneau cover (2004-2009 US model years; 2009 was Roadster only)",
  "NISMO coupe with extra body welds, body dampers and Super GT-style aero (2007-2008, six-speed manual only)"
 ],
 "engines": [
  "3.5-liter VQ35DE DOHC V6, naturally aspirated, 287 hp at 6,200 rpm and 274 lb-ft at 4,800 rpm (all 2003-2004 cars; automatic cars 2005-2006)",
  "3.5-liter VQ35DE 'Rev-Up' V6, 300 hp at 6,400 rpm per Wikipedia's table, which alone gives 260 lb-ft; 2005 Track and 35th Anniversary manual cars, then every 2006 six-speed manual",
  "3.5-liter VQ35HR DOHC V6, 10.6:1 compression, 7,500 rpm rev limit, 306 hp at 6,800 rpm and 268 lb-ft at 4,800 rpm per Nissan (2007-2009; also NISMO); one guide prints 287 hp for automatic cars, see claims"
 ],
 "productionTotal": null,
 "productionNotes": "Nissan never published a 350Z production total that any source consulted here could find, and a veteran 350Z-Tech member says Nissan does not typically release production numbers, even for the 35th Anniversary cars. The largest count available is a forum-hosted registry by MY350Z member 9TR, who says he built it by collecting individual VINs rather than from a Nissan list, over about 21 months: 173,924 cars built for the USA and Canada combined, of which he says 21,863 US cars should carry the Rev-Up engine. He claims better than 99.9 percent completeness; nothing from Nissan confirms it, and the registry does not separate US from Canadian cars in the text fetched, so productionTotal is left null. The NISMO figure of 1,607 cars for the 2007 and 2008 model years appears only in Wikipedia, which gives no citation for it; Nissan's own 2007 release describes a serialized console plaque but prints no number. No fetched source gives a count for the 35th Anniversary, Track or Roadster in the US. US list prices come from Nissan's 2009 Roadster release and Consumer Guide's dated price tables: 2003 base coupe $26,370 plus $540 destination (effective 09/10/2003, while Forbes printed $26,069 in April 2003, see claims), 2005 35th Anniversary $36,200 manual and $37,200 automatic, 2006 base $27,650, 2007 base $27,900 (also printed by Grassroots Motorsports), 2008 base $28,510 and NISMO $38,680, 2009 Roadster $36,870 to $42,570. The 2007 NISMO is $38,070 in Wikipedia and in Grassroots Motorsports' spec box, $38,050 in the same magazine's text. Consumer Guide places the 35th Anniversary's debut at midyear 2004 while Nissan presents it as a 2005 model; see claims.",
 "notableTrims": [
  {
   "name": "2003-2004 Track coupe",
   "note": "The top coupe at launch at $34,180 in Consumer Guide's 2003 price table: Brembo brakes, lightweight 18-inch wheels, spoilers, manual only, and the same suspension settings as every other 350Z. classic.com benchmarks its Track bucket, which it dates 2003-2004, at $23,089 as of September 2026, the highest of the non-NISMO trims."
  },
  {
   "name": "2005 35th Anniversary",
   "note": "Nissan's commemoration of the 1970 240Z, with unique wheels, badging and the first 300 hp Rev-Up engine in manual cars; early automatic cars kept the 287 hp engine. $36,200 with the manual in 2005. No production figure is published. classic.com benchmarks it at $20,476 as of September 2026."
  },
  {
   "name": "2005 Track (Rev-Up)",
   "note": "The Track got the 300 hp Rev-Up a model year before every six-speed car did, which CarScout advises confirming on the window sticker. It also inherits the Rev-Up's oil appetite."
  },
  {
   "name": "2006 Grand Touring coupe and Roadster",
   "note": "Consumer Guide dates the Grand Touring coupe to the 2006 facelift, with bi-xenon lights, LED taillights and 19-inch rear tires; Nissan's 2005 kit already lists a Roadster Grand Touring with Brembo brakes. Every manual 2006 carries the Rev-Up engine."
  },
  {
   "name": "2007-2008 NISMO",
   "note": "Extra body welds, front and rear body dampers, Super GT-style aero, 12.8-inch front Brembo rotors, RAYS forged 18- and 19-inch wheels, manual only, a serialized console plaque. Grassroots Motorsports reports the radiator core area as 160 percent as stiff as a standard car. Wikipedia alone gives 1,607 built."
  },
  {
   "name": "2007-2008 VQ35HR coupe",
   "note": "The redesigned engine with 306 hp, a 7,500 rpm rev limit and a hood bulge to clear its taller block. Buyer guides from CarGurus and CarScout treat it as the one that fixed the Rev-Up's oil burning, with a concentric slave cylinder as its own weak point."
  },
  {
   "name": "2009 Roadster",
   "note": "The last 350Z. The coupe had already given way to the 370Z, so 2009 was Roadster only, in Enthusiast, Touring and Grand Touring at $36,870 to $42,570, with a new Moonlight White paint."
  }
 ],
 "specs": {
  "layout": "Front-mid engine behind the front axle (Nissan's FM platform), rear-wheel drive, two seats",
  "chassis": "Steel unibody on the FM platform shared with the Infiniti G35; strut tower bar standard; NISMO adds extra body welds, reinforcement bars and body dampers",
  "engine": "3.5-liter DOHC 24-valve V6: VQ35DE (2003-2006), VQ35DE Rev-Up in 2005 Track and 35th Anniversary manual cars and all 2006 manual cars, VQ35HR (2007-2009)",
  "power": "287 hp at 6,200 rpm (VQ35DE); 300 hp (Rev-Up, per Nissan's 2005 kit, at 6,400 rpm per Wikipedia); 306 hp at 6,800 rpm (VQ35HR, per Nissan)",
  "torque": "274 lb-ft at 4,800 rpm (VQ35DE); 260 lb-ft (Rev-Up, Wikipedia only); 268 lb-ft at 4,800 rpm (VQ35HR)",
  "transmission": "Six-speed close-ratio manual; five-speed automatic with manual shift mode optional on Enthusiast and Touring grades (Downshift Rev Matching from 2005); Base, Performance, Track and NISMO manual only",
  "weight": "3,188 lb (2003 Base coupe) to 3,462 lb (2003 Touring Roadster), Wikipedia; NISMO 3,352 lb per Grassroots Motorsports, 3,353 lb per Wikipedia",
  "acceleration": "0-60 mph in 5.5 sec (2003 Touring, Forbes); under 6.0 sec for a manual Enthusiast coupe (Consumer Guide); no fetched source tested a VQ35HR car",
  "weight_distribution": "53/47 front to rear, Nissan claim (2007 press kit)",
  "redline": "7,500 rpm rev limit on the VQ35HR, raised from the VQ35DE per Nissan",
  "compression_ratio": "10.3:1 (VQ35DE) and 10.6:1 (VQ35HR), per Nissan",
  "brakes": "Four-wheel vented discs with ABS; Brembo calipers on Track, 35th Anniversary manual, Grand Touring and NISMO (four-piston front, two-piston rear on NISMO, 12.8-inch front and 12.7-inch rear rotors)",
  "wheels_and_tires": "17-inch with 225/50 front and 235/50 rear on the 2003 Base; 18-inch on most grades; RAYS forged 18x9-inch front and 19x10-inch rear with 245/40 and 265/35 tires on 2007 Grand Touring and NISMO",
  "observed_fuel_economy": "17.8 mpg for a manual Enthusiast coupe including performance runs; 18.8 to 19.3 mpg for Touring coupes (Consumer Guide test averages, premium fuel recommended)",
  "assembly": "Tochigi, Japan (Nissan's NISMO release)",
  "us_msrp": "$26,370 base coupe (2003, Consumer Guide) or $26,069 (Forbes, April 2003); $36,200 35th Anniversary manual (2005); $27,900 base (2007); $38,070 NISMO (2007); $36,870 to $42,570 Roadster (2009, Nissan)"
 },
 "summary": "The 350Z is the car that brought the Z back to America after Nissan withdrew the 300ZX in 1996. It went on sale on August 20, 2002 as a 2003 model, a two-seat hatchback on the platform of the Infiniti G35 with the same 3.5-liter V6 tuned to 287 hp, a six-speed manual as standard and a base price of about $26,000. A Roadster followed for 2004. The engine story is what separates one 350Z from another: a 300 hp 'Rev-Up' VQ35DE went into the 2005 Track and 35th Anniversary cars and every 2006 manual, and a redesigned VQ35HR with 306 hp and a 7,500 rpm rev limit replaced both for 2007. The Rev-Up is the one owners describe as burning oil; the HR brought its own clutch slave cylinder weakness. A 2007-2008 NISMO coupe added extra body welds and Super GT-style aero. The coupe ended with 2008 and the Roadster with 2009. As of September 2026 classic.com puts the average 350Z at $16,040 and benchmarks the NISMO at $25,334, and nobody outside a VIN-collecting forum registry has published how many were built.",
 "history": "## Why the Z came back\n\nNissan pulled the 300ZX from the US market after 1996, and for several years the Z existed only as an idea kept alive in California. Nissan's North American designers built a 240Z concept around a sketch by Manny Baker of the company's California studio and showed it at the 1999 North American International Auto Show. It was orange, retro and powered by a 2.4-liter four from the Altima, and it was judged too timid. What saved the program was Carlos Ghosn: in February 2000 he announced the car would be built, as part of the company's recovery. The production design took the proportions of the concept, a new nose and the 3.5-liter VQ35DE V6 that gave it its name. Underneath it shared the FM platform of the Infiniti G35 sedan, with the engine behind the front axle.\n\n## 2003-2004: five coupes, then a Roadster\n\nThe coupe reached US dealers on August 20, 2002 as a 2003 model in five grades: Base, Enthusiast, Performance, Touring and Track. Base, Performance and Track were manual only, and every car used the same suspension settings. Consumer Guide's 2003 price table, dated September 2003, lists the Base at $26,370 and the Track, with Brembo brakes and lightweight wheels, at $34,180; Forbes, testing a Touring in April 2003, printed $26,069 for the base car and ran its test car to 60 mph in 5.5 seconds. The cabin had no glovebox. The Roadster joined for 2004 in Enthusiast and Touring form, with a power top and a heated glass rear window that stowed under a powered tonneau.\n\n## 2005-2006: the 35th Anniversary and the Rev-Up\n\nFor 2005 Nissan marked 35 years since the 240Z with a 35th Anniversary coupe and gave it, and the Track, a higher-revving VQ35DE rated at 300 hp; early automatic Anniversary cars kept the 287 hp engine. Ultra Yellow, a three-layer pearl, joined the colors, and automatic cars gained rev-matched downshifts. The 2006 facelift brought bi-xenon headlights, LED taillights, restyled gauges, speed-sensitive steering and the 300 hp Rev-Up in every manual car. The Performance grade was dropped and Grand Touring became the top coupe. The Rev-Up is the engine CarGurus and CarScout single out for oil consumption; the MY350Z registry puts US Rev-Up cars at about 21,863.\n\n## 2007-2008: VQ35HR and NISMO\n\nFor 2007 the VQ35HR replaced both engines: a taller, stiffer block, variable exhaust cam timing, 10.6:1 compression and a 7,500 rpm rev limit, for 306 hp and 268 lb-ft. The hood gained a bulge to clear it. Trims narrowed to Base, Enthusiast, Touring and Grand Touring, and in July 2007 a fifth coupe arrived: the NISMO, shown at New York that spring, manual only, with additional body welds, body dampers front and rear, Brembo brakes, RAYS forged wheels and aero that Grassroots Motorsports says turned lift into downforce at 73 mph.\n\n## 2009: Roadster only\n\nThe 370Z replaced the coupe for 2009, and the Roadster ran one more year alongside it in Enthusiast, Touring and Grand Touring form at $36,870 to $42,570, with Moonlight White added. Every 350Z was built in Tochigi, Japan.",
 "marketNotes": "All figures are US dollars as of September 2026. classic.com puts the average 350Z at $16,040 with 56 cars for sale, and its lowest recorded sale is $4,200 for a 2008 Touring on September 16, 2025. Its variant benchmarks separate the ordinary cars from the ones people collect: Enthusiast $12,989, Base $13,427, Touring $13,549, Grand Touring $17,058, 35th Anniversary $20,476, Track $23,089 and NISMO $25,334. For the NISMO it gives an average of $24,288 and a low of $15,500 for a 2008 coupe on June 4, 2024. Recent NISMO results it lists include a 5,000-mile 2007 at $41,500 on Bring a Trailer in January 2026, a 2008 with 56,000 miles at $21,750 in December 2025 and a 2007 showing 27,000 miles, true mileage unknown, at $20,514 in May 2026; dealers were asking $40,500 for a 7,000-mile 2008 and $32,990 for a 28,000-mile 2008. Those Bring a Trailer figures come through classic.com, not from Bring a Trailer directly. CarGurus' undated buying guide says good NISMO cars sell for around $30,000 in one paragraph and are priced around $35,000 in the next, and puts a nice low-mileage 2007-2009 car around $15,000 and earlier cars around $12,000; it says manual coupes are worth more than automatic Roadsters. The spread is mileage and originality: CarGurus notes that clean, unmodified cars are hard to find.",
 "whatToLookFor": "Start with the engine, because it decides the model year's risk. On a 2005 Track or 35th Anniversary manual, or any 2006 six-speed, CarScout suggests asking how often oil was added between changes; CarGurus calls the Rev-Up notorious for burning oil, and CarScout says some were replaced under warranty. On 2003-2006 cars, a rattle in the first seconds of a cold start points to timing chain guide wear, which CarScout puts at $1,500 to $3,000 to repair. A clutch pedal that sticks or returns slowly on a 2003-2006 car is the master cylinder, a $150 to $300 fix per CarScout. On 2007-2009 manuals, check under the dash for brake fluid and press the clutch slowly in fifth at idle; the concentric slave cylinder is about $180 to $220 in parts and can pass $700 at a shop. Consumer Guide records a 2007 voluntary campaign to replace it, and asking whether it was done is reasonable. Shift into second with the engine off to feel for worn synchros. Look at the oil filter housing for weeping past about 100,000 miles; CarGurus says the HR's gallery gasket can cause low oil pressure, though rarely. Cycle every window, since CarScout prices a regulator motor at $476 to $705, and run a Roadster top through a full cycle. Tires are staggered on most cars and cannot be rotated front to rear, per CarGurus. Originality matters more than miles on a car this often modified: CarGurus says unmodified cars are hard to find. For color, the factory palettes are documented in Nissan's kits (Ultra Yellow for 2005; Carbon Silver, San Marino Blue and Solar Orange new for 2007; Moonlight White for 2009), but no fetched source prints paint codes. NISMO cars came in only Redline Red, Magnetic Black, Silver Alloy and Pikes Peak White, with a serialized plaque on the console.",
 "commonProblems": "The problem most tied to a particular year is oil consumption in the 300 hp Rev-Up VQ35DE of the 2005 Track and 35th Anniversary manual cars and all 2006 manuals. CarGurus calls those engines notorious for it and CarScout says owners report some were replaced under Nissan's warranty; neither publishes a failure rate. Across 2003-2006 cars CarScout reports timing chain guide wear heard as a cold-start rattle, a $1,500 to $3,000 repair on its figures, and a sticky clutch master cylinder. The 2007-2009 VQ35HR fixed the oil burning, per both guides, but its manual cars use a concentric slave cylinder that CarScout says can fail at under 20,000 miles; Consumer Guide lists a 2007 campaign to replace it. CarGurus mentions a rare gallery gasket fault on the HR that lowers oil pressure, and CarScout calls the oil filter housing and gallery gasket an external leak point around 100,000 miles on either engine. Consumer Guide's trouble spots add a fuel line damper that ticks at idle, rear axle joints that click on 2003-2004 cars, an intelligent power distribution module that can stop a restart after a short trip below 10 degrees F, and airbag sensor corrosion in salt states on 2005-2009 cars. Recalls it lists: a fuel filler hose that can crack on 2003-2004 cars and a passenger seat sensor on 2007-2008 cars. CarScout counts 275 NHTSA complaint records for 2003 against 24 for 2008. RepairPal publishes no reliability rating for the car, citing insufficient data.",
 "valueTrajectory": "No source consulted here publishes a price index or trend line for the 350Z, so this is a picture of September 2026 rather than a curve. As of September 2026 the ordinary car sits where a 20-year-old sports car usually sits: classic.com's average is $16,040 and its lowest recorded sale is $4,200. The cars that have separated are the limited ones. The NISMO, $38,070 new in 2007, now benchmarks at $25,334, and its best-kept examples have met or passed the original sticker: a 5,000-mile 2007 made $41,500 in January 2026 against a recorded low of $15,500 in June 2024. The 2003-2004 Track at $23,089 and the 2005 35th Anniversary at $20,476 are the next tier. CarGurus describes NISMO cars as quickly becoming collector cars, and Consumer Guide noted early on that the resale value of some models kept used prices up. The split that persists is between original, documented manual cars and the far larger pool of modified ones.",
 "overallConfidence": "medium",
 "sources": [
  {
   "ref": "nissan-2005-press-kit",
   "title": "2005 Nissan 350Z Coupe Press Kit",
   "url": "https://usa.nissannews.com/en-US/releases/2005-nissan-350z-coupe-press-kit",
   "publisher": "Nissan USA Newsroom",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "US press kit. Establishes the 2005 35th Anniversary model marking 35 years since the 1970 240Z, the 300 hp engine for 35th Anniversary and Track, 287 hp and 274 lb-ft for the standard VQ35DE, the six 2005 coupe grades, Ultra Yellow three-layer pearl, Downshift Rev Matching on automatics, and the new Roadster Grand Touring with Brembo brakes."
  },
  {
   "ref": "nissan-2007-press-kit",
   "title": "2007 Nissan 350Z Coupe and Roadster Press Kit",
   "url": "https://usa.nissannews.com/en-US/releases/release-ef1dd6ba81c549a0a73c1e836625ab74-2007-nissan-350z-coupe-and-roadster-press-kit",
   "publisher": "Nissan USA Newsroom",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "US press kit including the NISMO release. Establishes VQ35HR 306 hp at 6,800 rpm and 268 lb-ft at 4,800 rpm for every 2007 350Z, 7,500 rpm rev limit, 10.3 to 10.6:1 compression, 53/47 weight balance, 2007 colors, NISMO body welds and dampers, Brembo rotor sizes, RAYS wheel sizes, four NISMO colors, serialized plaque, July 2007 on-sale date, manual only, assembly in Tochigi."
  },
  {
   "ref": "nissan-2009-roadster-pricing",
   "title": "Nissan Announces Pricing on the 2009 350Z Roadster",
   "url": "https://usa.nissannews.com/en-US/releases/release-161e3414dd9346ee9f9a27de0dbc0764-nissan-announces-pricing-on-the-2009-350z-roadster",
   "publisher": "Nissan USA Newsroom",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "US pricing release. Establishes 2009 Roadster MSRPs from $36,870 (Enthusiast manual) to $42,570 (Grand Touring automatic), three grades, VQ35HR 306 hp and 268 lb-ft, and the new Moonlight White color."
  },
  {
   "ref": "consumer-guide-350z",
   "title": "2003-09 Nissan 350Z",
   "url": "https://consumerguide.com/used/2003-09-nissan-350z/",
   "publisher": "Consumer Guide Automotive",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "US used-car review with dated retail price tables per model year (2003 base $26,370 effective 09/10/2003; 2005 35th Anniversary $36,200; 2006 base $27,650; 2007 base $27,900; 2008 base $28,510 and NISMO $38,680), G35 platform, trim history, 35th Anniversary placed at midyear 2004, 2006 facelift content, test mpg and 0-60, trouble spots and two recalls."
  },
  {
   "ref": "forbes-2003-350z",
   "title": "2003 Nissan 350Z",
   "url": "https://www.forbes.com/2003/04/12/cx_mf_0414test.html",
   "publisher": "Forbes",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Period US road test, April 2003. Establishes $26,069 for the base car, a Touring test car stickered at $33,179 with $1,995 navigation, Track topping out at $34,000, 287 hp at 6,200 rpm and 5.5 sec to 60 mph."
  },
  {
   "ref": "grm-nismo-350z",
   "title": "2007 Nissan Nismo 350Z: New car reviews",
   "url": "https://grassrootsmotorsports.com/new-cars/2008-nissan-nismo-350z/",
   "publisher": "Grassroots Motorsports",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "US magazine drive of the NISMO. Establishes 306 hp for all 2007 cars, $38,050 NISMO and $27,900 Base in text, $38,070 in the spec box, 3,352 lb, lift turned to 11 lb front and 33 lb rear downforce at 73 mph, Cd 0.339, radiator core area 160 percent as stiff."
  },
  {
   "ref": "wikipedia-350z",
   "title": "Nissan 350Z",
   "url": "https://en.wikipedia.org/wiki/Nissan_350Z",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Pointer only. US on-sale date August 20, 2002, the 1999 240Z concept and Ghosn's February 2000 go-ahead, Rev-Up 300 hp and 260 lb-ft, early automatic 35th Anniversary cars at 287 hp, VQ35HR hood bulge, NISMO 1,607 built and $38,070 (uncited), Roadster sold alongside the 370Z for 2009, curb weights by trim."
  },
  {
   "ref": "classic-com-350z",
   "title": "Nissan 350Z - Z33 Market",
   "url": "https://www.classic.com/m/nissan/z-car/350z/",
   "publisher": "CLASSIC.COM",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Fetched through a rendering fetch in September 2026. Average price $16,040, 56 for sale, lowest recorded sale $4,200 for a 2008 Touring on September 16, 2025, and variant benchmarks for Base, Enthusiast, Track (dated 2003-2004), Touring, Grand Touring, 35th Anniversary and NISMO."
  },
  {
   "ref": "classic-com-350z-nismo",
   "title": "Nissan 350Z Nismo - Z33 Market",
   "url": "https://www.classic.com/m/nissan/z-car/350z/nismo/",
   "publisher": "CLASSIC.COM",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Fetched through a rendering fetch in September 2026. NISMO benchmark $25,334, average $24,288, lowest recorded sale $15,500 for a 2008 on June 4, 2024, and dated individual results including $41,500 for a 5,000-mile 2007 in January 2026."
  },
  {
   "ref": "my350z-registry",
   "title": "350Z Registry and Production Numbers USA + Canada",
   "url": "https://my350z.com/forum/2003-2009-nissan-350z/621115-350z-registry-and-production-numbers-usa-canada.html",
   "publisher": "MY350Z.COM",
   "sourceType": "club-forum",
   "reliability": "low",
   "notes": "Fetched through a rendering fetch. Member-built VIN registry: 173,924 cars built for the USA and Canada, about 21,863 US cars with the Rev-Up engine, compiled from individual VINs over about 21 months, not from Nissan data. A count of known cars, not a factory figure."
  },
  {
   "ref": "350z-tech-35th-thread",
   "title": "production numbers of the 35th anniversary model",
   "url": "https://www.350z-tech.com/threads/production-numbers-of-the-35th-anniversary-model.94355/",
   "publisher": "Nissan 350Z / 370Z Tech Forums",
   "sourceType": "club-forum",
   "reliability": "low",
   "notes": "Forum thread, May 2021. A long-standing member states Nissan does not typically release production numbers, even for the 35th Anniversary cars, and that the Anniversary was coupe only."
  },
  {
   "ref": "cargurus-buying-guide",
   "title": "Nissan 350Z Buying Guide: Cost, Reliability, and the Best Years to Buy",
   "url": "https://www.cargurus.com/research/articles/nissan-350z-buying-guide-cost",
   "publisher": "CarGurus",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "US buying guide, undated on the page. Establishes 2005-2006 Rev-Up engines as notorious for burning oil, the rare VQ35HR gallery gasket low oil pressure fault, staggered tires that cannot be rotated, NISMO around $30,000 and around $35,000 in adjacent paragraphs, 2007-2009 cars around $15,000 and earlier around $12,000."
  },
  {
   "ref": "carscout-350z-guide",
   "title": "Used Nissan 350Z Z33 (2003-2009): Buyer's Guide",
   "url": "https://usecarscout.com/blog/used-nissan-350z-z33-buying-guide",
   "publisher": "CarScout",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "US buyer's guide. Establishes Rev-Up oil consumption reports, timing chain guide repair $1,500 to $3,000, master cylinder $150 to $300, CSC parts $180 to $220 and over $700 at a shop, window motors $476 to $705, gallery gasket leaks near 100,000 miles, NHTSA complaint counts (275 for 2003, 24 for 2008), 2009 Roadster only; prints 287 hp for automatic VQ35HR cars."
  },
  {
   "ref": "repairpal-350z",
   "title": "Nissan 350Z Reliability",
   "url": "https://repairpal.com/reliability/nissan/350z",
   "publisher": "RepairPal",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "Fetched through a rendering fetch. States there is no reliability rating for the 350Z due to insufficient data; gives only compact-car category averages, which are not used here."
  }
 ],
 "claims": [
  {
   "section": "history",
   "claimText": "The 350Z coupe went on sale in the US on August 20, 2002 as a 2003 model in five grades, Base, Enthusiast, Performance, Touring and Track, with Base, Performance and Track manual only.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["wikipedia-350z", "consumer-guide-350z"],
   "evidence": [
    { "ref": "wikipedia-350z", "quote": "August 20, 2002, in the U.S., the 350Z coupé was available in 5 trim packages" },
    { "ref": "consumer-guide-350z", "quote": "Five models were offered: base, Enthusiast, Performance, Touring, and Track. Base, Performance, and Track versions came only with manual transmissions." }
   ]
  },
  {
   "section": "history",
   "claimText": "The 2003 base coupe's US price is printed as $26,069 by Forbes in April 2003 and as $26,370 in Consumer Guide's price table dated September 2003.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["forbes-2003-350z", "consumer-guide-350z"],
   "conflictNote": "Forbes, testing the car in April 2003, gives $26,069 for the base car. Consumer Guide's 2003 table, marked pricing effective 09/10/2003, gives $26,370 retail plus $540 destination. A mid-year price change would explain it, but no source consulted here documents one, so the difference is not resolved.",
   "evidence": [
    { "ref": "forbes-2003-350z", "quote": "superior in some ways to the yet-faster $51,000 Boxster S. All for about half as much money--$26,069." },
    { "ref": "consumer-guide-350z", "quote": "Pricing Effective: 09/10/2003 Model Pricing Retail Price Dealer Price Destination Base 2-door hatchback, manual $ 26,370" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The original VQ35DE V6 is rated at 287 hp and 274 lb-ft of torque.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["nissan-2005-press-kit", "forbes-2003-350z"],
   "evidence": [
    { "ref": "nissan-2005-press-kit", "quote": "The 3.5-liter VQ35DE V6 engine produces 287 horsepower and 274 lb-ft of torque" },
    { "ref": "forbes-2003-350z", "quote": "Not to mention a flexible and potent 287-hp V-6 engine and an excellent six-speed manual gearbox." }
   ]
  },
  {
   "section": "history",
   "claimText": "A 300 hp 'Rev-Up' VQ35DE went into the 2005 Track and 35th Anniversary manual cars and then into every 2006 manual 350Z, while automatic cars kept the 287 hp engine.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["nissan-2005-press-kit", "carscout-350z-guide", "cargurus-buying-guide"],
   "evidence": [
    { "ref": "nissan-2005-press-kit", "quote": "The 35th anniversary Z and 350Z Track model offers some unique features, including 300 horsepower from the standard" },
    { "ref": "carscout-350z-guide", "quote": "The 2005 Track trim and all 2006 six-speed manual 350Zs got the higher-output \"Rev-Up\" tune of the VQ35DE, good for 300 hp instead of 287." },
    { "ref": "cargurus-buying-guide", "quote": "engine when equipped with the manual transmission, while automatic transmission cars stuck with the original 287-hp version" }
   ]
  },
  {
   "section": "history",
   "claimText": "Sources place the 35th Anniversary in different model years: Nissan presents it as a 2005 model, while Consumer Guide says it debuted at midyear 2004.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["nissan-2005-press-kit", "consumer-guide-350z", "wikipedia-350z"],
   "conflictNote": "Nissan's 2005 press kit says the Z returns in 2005 with the 35th Anniversary model, and Wikipedia describes early 2005 model-year Anniversary cars. Consumer Guide's 2004 text says a 35th Anniversary Edition debuted at midyear and elsewhere calls it the 35th Anniversary Edition of 2004, though its own price tables list the car under 2005. No source consulted gives a VIN-level count that settles whether any were sold as 2004 models; not resolved here.",
   "evidence": [
    { "ref": "nissan-2005-press-kit", "quote": "the high performance Z sports car returns in 2005 with a special commemorative 35th Anniversary model" },
    { "ref": "consumer-guide-350z", "quote": "At midyear, a 35th Anniversary Edition debuted with a 300-horsepower engine and unique wheels." },
    { "ref": "wikipedia-350z", "quote": "Early 2005 model-year 35th anniversary edition models were equipped with the original VQ35DE engine with 287HP/274TQ and an automatic transmission." }
   ]
  },
  {
   "section": "specs",
   "claimText": "For 2007 every 350Z received the redesigned VQ35HR V6, rated by Nissan at 306 hp at 6,800 rpm and 268 lb-ft at 4,800 rpm.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["nissan-2007-press-kit", "grm-nismo-350z", "consumer-guide-350z"],
   "evidence": [
    { "ref": "nissan-2007-press-kit", "quote": "Every 350Z offers a new VQ35HR 3.5-liter V6 engine, which for 2007 produces 306 horsepower @ 6,800 RPM and 268 lb-ft of torque @ 4,800 RPM" },
    { "ref": "grm-nismo-350z", "quote": "the completely revised VQ35HR-spec motor now produces a healthy 306 horsepower--that applies to all 2007 350Zs" },
    { "ref": "consumer-guide-350z", "quote": "For 2007, all models have a 306-hp 3.5-liter V6 engine, which replaces a pair of 3.5-liter V6 engines of 287 and 300 hp." }
   ]
  },
  {
   "section": "specs",
   "claimText": "The output of automatic VQ35HR cars is reported differently: Nissan and Consumer Guide say every 2007 350Z has 306 hp, while CarScout says automatic cars are rated at 287 hp.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["nissan-2007-press-kit", "consumer-guide-350z", "carscout-350z-guide"],
   "conflictNote": "Nissan's 2007 press kit states that every 350Z offers the VQ35HR with 306 hp, and Consumer Guide says all 2007 models have a 306 hp engine. CarScout states the VQ35HR is rated at 306 hp on manual cars and 287 hp on the five-speed automatic. The manufacturer's release is the stronger source, but no source consulted explains CarScout's figure, so it is left unresolved here.",
   "evidence": [
    { "ref": "nissan-2007-press-kit", "quote": "Every 350Z offers a new VQ35HR 3.5-liter V6 engine, which for 2007 produces 306 horsepower" },
    { "ref": "consumer-guide-350z", "quote": "For 2007, all models have a 306-hp 3.5-liter V6 engine" },
    { "ref": "carscout-350z-guide", "quote": "rated at 306 hp on manual cars and 287 hp on the 5-speed automatic" }
   ]
  },
  {
   "section": "history",
   "claimText": "The NISMO 350Z was a fifth 2007 coupe model, manual only, on sale in July 2007, with additional body welds and supports front and rear.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["nissan-2007-press-kit", "grm-nismo-350z"],
   "evidence": [
    { "ref": "nissan-2007-press-kit", "quote": "This new model, the fifth in the 2007 350Z Coupe lineup, is available with a 6-speed manual transmission only. It goes on sale at Nissan dealers nationwide in July 2007." },
    { "ref": "grm-nismo-350z", "quote": "The frame is reinforced in a number of areas, thanks to an expansion of the welding area at the top of the A and B pillars" }
   ]
  },
  {
   "section": "specs",
   "claimText": "Grassroots Motorsports reports the NISMO's radiator core area as 160 percent as stiff as a standard 350Z, and Nissan lists body dampers in the radiator core support and rear cargo area.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["grm-nismo-350z", "nissan-2007-press-kit"],
   "evidence": [
    { "ref": "grm-nismo-350z", "quote": "The bulk of the benefit goes to the radiator core area, which is 160 percent as stiff as a standard 350Z." },
    { "ref": "nissan-2007-press-kit", "quote": "special body dampers mounted in the front radiator core support and in the rear cargo area, which assist in controlling body vibrations" }
   ]
  },
  {
   "section": "production",
   "claimText": "Wikipedia states 1,607 NISMO 350Zs were produced for the 2007 and 2008 model years; Nissan's release describes a serialized plaque but gives no number, so the figure rests on one uncited source.",
   "confidence": "low",
   "status": "unverified",
   "sourceRefs": ["wikipedia-350z", "nissan-2007-press-kit"],
   "evidence": [
    { "ref": "wikipedia-350z", "quote": "1607 were produced for the 2007 and 2008 model years, and it was assumed that if there was a greater demand, more would be produced" },
    { "ref": "nissan-2007-press-kit", "quote": "All NISMO 350Zs receive a serialized NISMO-etched aluminum plaque mounted on the center console, designating its limited edition status." }
   ]
  },
  {
   "section": "history",
   "claimText": "The 2007 NISMO's list price is given as $38,070 by Wikipedia and in Grassroots Motorsports' spec box, and as $38,050 in the same magazine's text.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["wikipedia-350z", "grm-nismo-350z"],
   "conflictNote": "Wikipedia and the Grassroots Motorsports spec box both give $38,070. The Grassroots Motorsports article text gives $38,050 for the NISMO and $27,900 for the Base. No Nissan price release for the 2007 NISMO was fetched, so the $20 difference is not resolved here. Consumer Guide's $38,680 is for 2008 and is not a conflict.",
   "evidence": [
    { "ref": "wikipedia-350z", "quote": "The Nismo model 350Z had a manufacturer's suggested retail price of $38,070 for the 2007 model year." },
    { "ref": "grm-nismo-350z", "quote": "that applies to all 2007 350Zs, from the $38,050 Nismo all the way down to the $27,900 Base model" }
   ]
  },
  {
   "section": "history",
   "claimText": "The 2007 base 350Z coupe with the six-speed manual listed at $27,900 in the US.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["grm-nismo-350z", "consumer-guide-350z"],
   "evidence": [
    { "ref": "grm-nismo-350z", "quote": "from the $38,050 Nismo all the way down to the $27,900 Base model" },
    { "ref": "consumer-guide-350z", "quote": "Pricing Effective: 02/02/2007 Model Pricing Retail Price Dealer Price Destination Base 2-door hatchback coupe, manual $ 27,900" }
   ]
  },
  {
   "section": "history",
   "claimText": "For 2009 the 350Z was sold only as a Roadster, in Enthusiast, Touring and Grand Touring form, alongside the new 370Z coupe.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["nissan-2009-roadster-pricing", "wikipedia-350z", "carscout-350z-guide"],
   "evidence": [
    { "ref": "nissan-2009-roadster-pricing", "quote": "The 2009 350Z Roadster is available in three well-equipped models, Enthusiast, Touring and Grand Touring" },
    { "ref": "wikipedia-350z", "quote": "The Nissan 350Z was succeeded by the 370Z for the 2009 model year, although the roadster was sold alongside the 370Z for 2009." },
    { "ref": "carscout-350z-guide", "quote": "That HR-powered car ran through 2009, though 2009 was a Roadster-only year" }
   ]
  },
  {
   "section": "production",
   "claimText": "No Nissan production total was found; a MY350Z member's VIN-collected registry counts 173,924 cars built for the USA and Canada and about 21,863 US cars with the Rev-Up engine.",
   "confidence": "low",
   "status": "unverified",
   "sourceRefs": ["my350z-registry", "350z-tech-35th-thread"],
   "evidence": [
    { "ref": "my350z-registry", "quote": "Here you can find informations such as the VIN, model code, production date, color, interior color and factory options of 173,924 350Z built for USA and Canada." },
    { "ref": "350z-tech-35th-thread", "quote": "Nissan doesn't typically release production numbers of any model, even the Z33 Anniversary line." }
   ]
  },
  {
   "section": "problems",
   "claimText": "The 300 hp Rev-Up engines of 2005 and 2006 are the ones owners report burning oil, in some cases enough for replacement under warranty.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["cargurus-buying-guide", "carscout-350z-guide"],
   "evidence": [
    { "ref": "cargurus-buying-guide", "quote": "burning oil is a common problem, according to enthusiast forums, and the 300-hp “Rev Up” motors used in 2005 and 2006 are notorious for it" },
    { "ref": "carscout-350z-guide", "quote": "Owners on MY350Z.com and 350Z-Tech.com report these specific engines burn oil fast enough that some were replaced under Nissan's factory warranty." }
   ]
  },
  {
   "section": "problems",
   "claimText": "The 2007-on manual cars' concentric clutch slave cylinder is a known failure point, about $180 to $220 in parts and over $700 at a shop per CarScout, and Consumer Guide records a 2007 voluntary campaign to replace the slave cylinder.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["carscout-350z-guide", "consumer-guide-350z"],
   "evidence": [
    { "ref": "carscout-350z-guide", "quote": "Replacement parts run $180 to $220, but labor to access the transmission bell housing can push a shop bill past $700." },
    { "ref": "consumer-guide-350z", "quote": "There was a voluntary campaign to replace the clutch slave cylinder. (2007)" }
   ]
  },
  {
   "section": "problems",
   "claimText": "The oil gallery gasket and oil filter housing are a documented oil leak point on the VQ35, and CarGurus says a faulty gallery gasket can rarely cause low oil pressure on the VQ35HR.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["cargurus-buying-guide", "carscout-350z-guide"],
   "evidence": [
    { "ref": "cargurus-buying-guide", "quote": "The later 2007 to 2009 cars equipped with the VQ35HR engine can develop low oil pressure due to a faulty gallery gasket" },
    { "ref": "carscout-350z-guide", "quote": "The oil filter housing and gallery gasket on the VQ35 block, DE or HR, is a documented external oil-leak point" }
   ]
  },
  {
   "section": "problems",
   "claimText": "Timing chain guide wear on 2003-2006 VQ35DE cars shows as a cold-start rattle and costs $1,500 to $3,000 to repair; this cost is from a single source.",
   "confidence": "medium",
   "status": "unverified",
   "sourceRefs": ["carscout-350z-guide"],
   "evidence": [
    { "ref": "carscout-350z-guide", "quote": "Repair runs $1,500 to $3,000 depending on labor rates, since the job means dropping the front of the engine." }
   ]
  },
  {
   "section": "problems",
   "claimText": "Early cars had a fuel filler hose that could crack, and 2007-2008 cars a passenger seat airbag sensor campaign.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["consumer-guide-350z", "carscout-350z-guide"],
   "evidence": [
    { "ref": "consumer-guide-350z", "quote": "Fuel filler hose on some cars may crack, resulting in leakage while refueling." },
    { "ref": "carscout-350z-guide", "quote": "Nissan is known to have run at least one fuel-system service action on early cars and a passenger-airbag sensor campaign covering 2007-2008 models" }
   ]
  },
  {
   "section": "problems",
   "claimText": "A ticking noise at idle traced to the fuel line damper is a common and largely harmless complaint across the generation.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["consumer-guide-350z", "carscout-350z-guide"],
   "evidence": [
    { "ref": "consumer-guide-350z", "quote": "Knocking or ticking noises coming from the engine compartment at idle may be due to pulses in the fuel line for which a revised damper and hose are available." },
    { "ref": "carscout-350z-guide", "quote": "A ticking fuel damper is a common, mostly harmless noise complaint across the whole generation" }
   ]
  },
  {
   "section": "problems",
   "claimText": "RepairPal publishes no reliability rating for the 350Z for lack of data; CarScout's NHTSA-sourced count gives 275 complaint records for the 2003 model year and 24 for 2008.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["repairpal-350z", "carscout-350z-guide"],
   "evidence": [
    { "ref": "repairpal-350z", "quote": "There is no Reliability Rating for the Nissan 350Z due to insufficient data." },
    { "ref": "carscout-350z-guide", "quote": "The 2003 Nissan 350Z has 275 NHTSA complaint records tied to it. The 2008 has 24." }
   ]
  },
  {
   "section": "market",
   "claimText": "As of September 2026 classic.com gives an average 350Z price of $16,040 and a NISMO average of $24,288, against a NISMO benchmark of $25,334.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["classic-com-350z", "classic-com-350z-nismo"],
   "evidence": [
    { "ref": "classic-com-350z", "quote": "The average price of a Nissan Z Car - 350z is $16,040." },
    { "ref": "classic-com-350z-nismo", "quote": "The average price of a Nissan Z Car - 350z - Nismo is $24,288." }
   ]
  },
  {
   "section": "market",
   "claimText": "CarGurus' undated guide puts good NISMO cars at around $30,000 in one paragraph and around $35,000 in the next, and says NISMO cars are quickly becoming collector cars.",
   "confidence": "low",
   "status": "verified",
   "sourceRefs": ["cargurus-buying-guide"],
   "evidence": [
    { "ref": "cargurus-buying-guide", "quote": "At the top of the market are good-condition Nismo 350Zs, which are priced around $35,000." }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 2003 Touring tested by Forbes reached 60 mph in 5.5 seconds, and Consumer Guide's manual Enthusiast coupe met Nissan's promise of under 6.0 seconds.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["forbes-2003-350z", "consumer-guide-350z"],
   "evidence": [
    { "ref": "forbes-2003-350z", "quote": "is faster to 60 mph (5.1 seconds versus 5.5 for the 350Z), has all-wheel drive" },
    { "ref": "consumer-guide-350z", "quote": "Nissan promised 0-60 mph in under 6.0 seconds, which is exactly what a manual-shift Enthusiast coupe managed to achieve." }
   ]
  },
  {
   "section": "summary",
   "claimText": "The 350Z was built on the platform of the Infiniti G35 and shared its 3.5-liter V6, placed behind the front axle for a 53/47 weight balance that Nissan claims.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["consumer-guide-350z", "nissan-2007-press-kit"],
   "evidence": [
    { "ref": "consumer-guide-350z", "quote": "Based on the platform of the G35 near-luxury sedan from Nissan’s Infiniti division, it also borrowed the G35’s 3.5-liter V6, retuned to make 287 horsepower." },
    { "ref": "nissan-2007-press-kit", "quote": "positions the engine behind the front axle, providing an optimized front-to-rear weight balance of 53/47" }
   ]
  },
  {
   "section": "history",
   "claimText": "The 350Z began as a 1999 Detroit show concept and was approved for production by Carlos Ghosn in February 2000 as part of Nissan's recovery; this rests on Wikipedia alone.",
   "confidence": "medium",
   "status": "unverified",
   "sourceRefs": ["wikipedia-350z"],
   "evidence": [
    { "ref": "wikipedia-350z", "quote": "During a press conference in February 2000, president Carlos Ghosn announced plans to produce the car as he felt the new model would help to assist the company's recovery." }
   ]
  }
 ]
};
