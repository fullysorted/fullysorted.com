/**
 * Researched model draft - Mercedes-Benz SL (R129), US market, 1990-2002 model years.
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedSlR129 = {
 "slug": "mercedes-benz/sl-r129",
 "make": "Mercedes-Benz",
 "model": "SL",
 "generation": "R129, US market",
 "generationCode": "R129",
 "trim": null,
 "yearStart": 1990,
 "yearEnd": 2002,
 "bodyStyles": [
  "2-door two-seat roadster with electro-hydraulic soft top and automatic pop-up rollover bar",
  "Removable aluminum hardtop standard; panorama glass hardtop optional from the 1997 model year"
 ],
 "engines": [
  "3.0-liter 24-valve inline six, 228 hp (300SL, US 1990-1993 model years); the 12-valve 3.0-liter six of European 300 SL cars was not offered in the US",
  "3.2-liter inline six, 228 hp (SL320, US from the 1994 model year until the six was withdrawn from the US market)",
  "4,973 cc M119 32-valve DOHC V8, 322 hp for US 1990-1992 cars and 315 hp from 1993 (500SL, renamed SL500 for 1994)",
  "M113 24-valve SOHC V8, 302 hp and 339 lb-ft (SL500, 1999-2002 model years)",
  "6.0-liter V12, 389 hp at 5,200 rpm and 420 lb-ft at 3,800 rpm (600SL from the 1993 model year, renamed SL600 for 1994)"
 ],
 "productionTotal": 204940,
 "productionNotes": "The total of 204,940 R129s is one of the few figures in this history that every source agrees on. MercedesHeritage, the German edition of Motor1 writing from Mercedes-Benz's own anniversary material, the MBCA's Star magazine, Hagerty and Classic Trim Parts all give the same number, and the factory archive's 500SL data sheet is consistent with the parts that make it up. It is a worldwide figure across twelve years of production. Classic Trim Parts describes it as covering model years 1990 through 2001, while the US car ran to the 2002 model year, so the two calendars do not line up exactly and no source reconciles them. The model-level counts come from the factory archive and Classic Trim Parts: 79,827 500SL and SL500 cars with the M119 V8 built through June 1998, 11,089 V12 cars, 32,223 SL320s and 26,984 300SL-24s. The rows of the Classic Trim Parts table add up to its stated 204,940. The MBCA's own table prints different counts for the six-cylinder cars, but the fetched copy was garbled and is not used here. No source consulted publishes a US-market total for the R129 or for any single US model. That gap matters most for the 300SL with the five-speed manual. Hagerty says it is believed that only 166 stick-shift cars were sold in the US, an MBWorld owner forum carries claims of both about 800 and under 200 with no source behind either, and the MBCA's two buyer guides disagree on whether the manual was sold for 1990-1991 or 1990-1992. The 2002 Silver Arrow edition has the same problem: Gooding and Barrett-Jackson lot pages say 1,450 were made, Barrett-Jackson specifying US production, while Classic Trim Parts describes an SL600 Silver Arrow as one of 100. AMG counts in the MBCA guide (65 SL55, 633 SL60 and 150 SL70 cars) are worldwide and say nothing about US delivery. No reference book was consulted for this draft.",
 "notableTrims": [
  {
   "name": "300SL, five-speed manual (early US model years)",
   "note": "The only R129 sold here with a clutch pedal, a five-speed with a dogleg shift pattern behind the 228 hp six. Hagerty says it is believed that only 166 were sold in the US; the MBCA puts the window at 1990-1992 in one guide and 1990-1991 in another. No source publishes a firm count."
  },
  {
   "name": "500SL, 1990-1993 model years (M119 V8)",
   "note": "The car the R129 launched with in the US, at $83,500 for 1990. The quad-cam 4,973 cc M119 was rated at 322 hp, then 315 hp from 1993. Harness-era cars: the biodegradable wiring problem is attributed to these years in every source consulted."
  },
  {
   "name": "600SL and SL600 (V12)",
   "note": "Arrived for 1993 at 389 hp with the ADS adaptive damping suspension standard. Car and Driver measured 5.5 seconds to 60 mph and 4,524 lb. The most expensive R129 new and the one with the most expensive suspension to keep right."
  },
  {
   "name": "SL320, 1994 model year onward",
   "note": "The 3.2-liter six that replaced the 300SL, still at 228 hp. Sources disagree on whether 1997 or 1998 was its last US model year."
  },
  {
   "name": "SL500, 1999-2002 (M113 V8)",
   "note": "Three valves per cylinder and one cam per bank in place of the M119's four valves and two cams, at 302 hp and 339 lb-ft. Built after the period the wiring harness complaints are attached to, and with the five-speed automatic and side airbags added from 1996."
  },
  {
   "name": "40th Anniversary Edition (1997)",
   "note": "Offered on the SL320 and SL500 for 1997, per Hagerty. No production count was found in the sources consulted."
  },
  {
   "name": "Silver Arrow edition (2002)",
   "note": "A fully loaded run-out edition with the AMG styling package. Gooding and Barrett-Jackson say 1,450 were made; Classic Trim Parts calls an SL600 Silver Arrow one of 100, and no source gives the SL500 and SL600 split."
  }
 ],
 "specs": {
  "layout": "Front-engine, rear-wheel drive, two-seat roadster",
  "chassis": "Steel unitized body with a spring-loaded rollover bar that rises in 0.3 second when a rollover is sensed",
  "engine": "Inline six (3.0-liter, then 3.2-liter), M119 or M113 V8, or 6.0-liter V12 depending on model and year",
  "power": "228 hp (300SL and SL320); 322 hp, then 315 hp from 1993 (M119 V8); 302 hp (M113 V8, 1999 on); 389 hp at 5,200 rpm (V12)",
  "torque": "420 lb-ft at 3,800 rpm (V12, Car and Driver); 339 lb-ft (M113 V8); about 332 lb-ft (450 Nm), later about 347 lb-ft (470 Nm), for the M119 V8 per the factory archive",
  "transmission": "Five-speed manual with dogleg pattern on early US 300SLs only; Hagerty says the 1990 300SL could also have a five-speed automatic, while Car and Driver lists a four-speed automatic in the 1993 600SL and Consumer Guide and Ken Rockwell date the electronically controlled five-speed automatic to 1996; no cited source reconciles the automatic's gear count before 1996",
  "weight": "4,524 lb, 1993 600SL as tested by Car and Driver; 500SL 3,902 lb (1,770 kg), then 3,968 lb (1,800 kg) from September 1991, per the factory archive",
  "acceleration": "0-60 mph in 5.5 seconds, 1993 600SL (Car and Driver); 6 seconds claimed by Mercedes-Benz for the late-1990s SL500; 0-62 mph in 6.2 seconds for the early 500SL and 6.5 seconds from September 1992, per the factory data sheet, which states the time in its metric 0-100 form",
  "quarter_mile": "14.1 seconds at 102 mph, 1993 600SL (Car and Driver)",
  "top_speed": "155 mph, electronically governed (factory figure for the 500SL)",
  "wheelbase": "99.0 in (2,515 mm)",
  "length": "176.0 in (4,470 mm), 500SL per the factory archive",
  "fuel_economy": "EPA 13 mpg city and 18 mpg highway, 16 mpg observed (1993 600SL, Car and Driver)",
  "roof": "Electro-hydraulic soft top using 11 or 12 hydraulic cylinders depending on model year; lift-off aluminum hardtop standard",
  "us_price_new": "$73,500 for the 1990 300SL and $83,500 for the 1990 500SL; $119,500 for the 600SL at launch per Hagerty, $132,190 as listed by Car and Driver in April 1993",
  "production": "204,940 R129s worldwide; 79,827 M119 500SL and SL500 cars through June 1998; no US-only total published"
 },
 "summary": "The R129 SL replaced a roadster that had been in production for 18 years, and it arrived in the US for the 1990 model year as the 228 hp 300SL and the 322 hp 500SL, at $73,500 and $83,500. The 389 hp V12 600SL followed for 1993, the cars were renamed SL320, SL500 and SL600 for 1994, a facelift and a five-speed automatic came for 1996, and for 1999 the quad-cam M119 V8 gave way to the 302 hp M113. Its rollover bar rises in 0.3 second when the car senses a rollover. Mercedes-Benz built 204,940 R129s worldwide, a figure every source consulted agrees on; nobody publishes a US count, and that includes the early 300SL with a five-speed manual, of which Hagerty believes 166 were sold here. The ownership questions are the biodegradable engine wiring harness on earlier cars, the 11 or 12 hydraulic cylinders that run the top, the cost of the V12's adaptive damping suspension, and which model years separate one set of problems from another.",
 "history": "## Why the car exists\n\nMercedes-Benz began developing the 129 series in the mid-1970s, according to the company's own anniversary account, under a design department then led by Bruno Sacco. The car it replaced had been in production for 18 years. The new car's safety answer was structural rather than cosmetic: a rollover bar that sits flush behind the seats and, when sensors detect a rollover, rises on a preloaded spring and damper unit in 0.3 second. Hagerty calls it a first of its kind. The roadster was unveiled at the Geneva Motor Show in March 1989.\n\n## The first US cars, 1990-1993\n\nThe car reached the US for the 1990 model year with two engines. The 300SL used a 3.0-liter 24-valve six rated at 228 hp; the 12-valve six offered in Europe was never sold here. Hagerty lists the 300SL at $73,500 before destination and gas-guzzler tax. Hagerty says it could be had with a five-speed automatic or a five-speed manual with a dogleg shift pattern, while Car and Driver lists a four-speed automatic in the 1993 600SL and no cited source reconciles the two; Consumer Guide calls the manual standard equipment, and how many US buyers took it is not established. The 500SL carried the 4,973 cc M119, a 32-valve quad-cam V8 at 322 hp, priced at $83,500. For 1993 the V8 dropped to 315 hp, and the 600SL arrived with a 6.0-liter V12 at 389 hp and the ADS adaptive damping suspension as standard. Car and Driver's April 1993 test recorded 5.5 seconds to 60 mph, a 14.1-second quarter mile at 102 mph and a curb weight of 4,524 lb, with a four-speed automatic and a $132,190 sticker.\n\n## New names and the 1996 car\n\nFrom the 1994 model year the cars became the SL320, SL500 and SL600, the six growing to 3.2 liters at the same 228 hp. Mercedes-Benz showed a facelifted SL at the Frankfurt show in 1995, which reached US buyers as the 1996 model: a grille with fewer bars, 12-hole alloy wheels, reshaped bumpers and the end of the two-tone paint scheme. Side airbags and an electronically controlled five-speed automatic came the same year. A panorama glass hardtop became an option for 1997, as did a sport package, and Hagerty records 40th Anniversary editions of the SL320 and SL500 that year. The six left the US lineup at the end of the 1997 or 1998 model year depending on the source.\n\n## The M113 and the last facelift\n\nA second facelift was presented in spring 1998 and became the 1999 US car. Its substantive change was under the hood: the M119 was replaced by the M113, a three-valve, single-cam-per-bank V8 at 302 hp and 339 lb-ft. Nappa leather became standard. For 2001 both models received AMG-designed lower-body styling and the sport package became standard, and Hagerty records a Formula One Edition of just 20 cars that year. The run ended with the 2002 Silver Arrow edition, a fully loaded car with the AMG styling package, before the redesigned SL arrived as an early 2003 model.\n\n## AMG cars and the US\n\nThe MBCA counts 65 SL55, 633 SL60 and 150 SL70 cars, all worldwide figures, and advises caution about any car claimed to be an AMG model. Its Star magazine notes that most of these cars are still in Europe. No source consulted documents factory US availability of any AMG R129. AMG cars do exist here: classic.com records a 1990 500SL AMG 6.0 sold in Atlanta in November 2025.",
 "marketNotes": "As of November 2026, classic.com's market benchmark for the 500SL of the 1990-1993 model years is $15,678, with an average of $18,880; the benchmark moves as sales are added, so it is a figure for that month. Its 1990 R129 market page, read in November 2026, shows US results from $3,300 for a 1990 300SL sold in Fort Worth on October 29, 2025, to $78,388 for a 1990 500SL AMG 6.0 sold in Atlanta on November 13, 2025. classic.com does not say whether these figures include a buyer's premium. Of the special editions, Gooding sold a 2002 SL500 Silver Arrow showing under 13,000 miles as Lot 42 at its Amelia Island sale in 2018 for $48,400, without reserve, against a $40,000-$50,000 estimate; the lot page does not say whether that includes premium. Barrett-Jackson sold a Silver Arrow at Scottsdale 2022, but the fetched page showed no price. Hagerty's buyer guide gives $16,600 for a 1990 300SL and $26,600 for a 2000 SL600 in #2 condition, but the article carries no date for those figures, so they are context rather than a current value as of November 2026. No V12 or five-speed manual sale with a lot page was fetched for this draft.",
 "whatToLookFor": "The model year sorts most of the known problems. On cars built through 1995 the engine wiring harness insulation is the first question; the MBCA dates the problem to 1993-1995, while Hagerty applies it to all 1995 and earlier cars except those with the 3.0-liter six, so a 1990-1992 500SL is in question under one reading and not the other. A replaced harness is documented with an invoice; a cracked or flaking harness is visible at the engine. Every car has the same top, and the MBCA's Star magazine lists hydraulic leaks at the top and the rollover bar as a point to check on each one; Barrett-Jackson's 2022 Silver Arrow lot notes cylinders replaced before sale. On V12 cars the ADS suspension is standard, and a car that sits low at one corner or rides harshly is showing accumulator or strut trouble that the MBCA and its Star magazine both describe as very expensive. On 1997-1998 cars Consumer Guide records timing-chain tensioner noise when hot, and on 1997-1999 cars an automatic that jerks into drive or reverse. For a five-speed 300SL, the clutch pedal can stick when the fluid boils from heat. On claimed AMG cars, the MBCA's guide advises caution about the claim. A 40th Anniversary or Silver Arrow car carries the edition's specification, such as the Silver Arrow's AMG front spoiler, side skirts and rear apron. On 1999 and later cars the Nappa leather is softer than the earlier hides, and some owners report it wears faster.",
 "commonProblems": "The biodegradable engine wiring harness is the R129's best-known fault. Its insulation breaks down with age and heat, and the MBCA's Star magazine notes that no recall was ever issued. Sources disagree on which cars are affected: the MBCA says 1993-1995 model years, Hagerty says 1995 and earlier except 3.0-liter cars. Hagerty puts the main harness at $900 to $1,500 for the part plus three to four hours of labor. The soft top runs on 11 or 12 hydraulic cylinders, depending on model year, which eventually leak; Hagerty says a full set at a dealer can reach $8,000 or $9,000 while an aftermarket supplier sells a set for $550 plus exchange, and a Motor1 owner who bought a 1997 SL500 puts a typical rebuild at about $1,200. The ADS adaptive damping suspension standard on V12 cars can lose its accumulators, and the MBCA calls it very expensive to maintain or replace. Consumer Guide's trouble spots list a timing-chain tensioner on 1997-1998 cars, an automatic that jerks into gear on 1997-1999 cars, and a sticking clutch pedal on early manual 300SLs. As one owner's account of total cost, the Motor1 writer's $8,000 car came to about $13,000 after tires, top cylinders, upholstery and fuel pump work.",
 "valueTrajectory": "A 1990 500SL listed at $83,500 new; as of November 2026 classic.com's benchmark for a 1990-1993 500SL is $15,678, and the 1990 US results shown on its market page include a 300SL at $3,300 and a 500SL AMG 6.0 at $78,388. Hagerty mentions a 1990 500SL with 422 miles offered by the Mercedes-Benz Classic Center at $75,000, an undated asking figure. Hagerty's undated buyer guide gives $16,600 for a 1990 300SL and $26,600 for a 2000 SL600 in #2 condition. The 2002 Silver Arrow SL500 that brought $48,400 at Gooding in 2018 is the one special-edition result in the sources. classic.com does not say whether its results include a buyer's premium, and the Gooding lot page does not say so either, so none of these figures can be compared with another on a like-for-like basis. No source tracks the five-speed 300SL or the V12 as its own market, so whether either carries a premium as of November 2026 is not established here.",
 "overallConfidence": "medium",
 "sources": [
  {
   "ref": "mercedesheritage-r129",
   "title": "1989: The Mercedes-Benz SL R129 model series is unveiled",
   "url": "https://mercedesheritage.com/?p=1666",
   "publisher": "MercedesHeritage",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Heritage account: 204,940 fourth-generation SLs built; rollover bar rises in 0.3 seconds; Geneva Motor Show debut March 1989; model designations changed summer 1993; facelifts shown at the IAA in 1995 and in spring 1998; European 300 SL used the M103 six; 500 SL with M119."
  },
  {
   "ref": "classictrimparts-facts",
   "title": "Mercedes-Benz R129 SL-Class Facts and Figures (1990-2001)",
   "url": "https://classictrimparts.com/blogs/mercedes-articles/mercedes-benz-r129-facts-and-figures",
   "publisher": "Classic Trim Parts",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Production table: 204,940 total for model years 1990-2001; 500SL 79,827; 600SL 11,089; SL320 32,223; 300SL-24 26,984. Original MSRP table: 1990 $73,500 and $83,500; 1993 600SL $119,500. Reports an SL600 Silver Arrow as one of 100."
  },
  {
   "ref": "motor1-de-30-jahre",
   "title": "Mercedes SL: Die Baureihe 129 wird 30",
   "url": "https://de.motor1.com/news/314936/mercedes-sl-129-30-jahre/",
   "publisher": "Motor1 Germany",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "German-language anniversary piece: 204,940 cars in twelve years; rollover bar raised in 0.3 seconds by a preloaded spring and damper unit; development began in the mid-1970s; Bruno Sacco as design director; IAA 1995 and Turin April 1998 updates. Used for production and development history only."
  },
  {
   "ref": "mb-archive-500sl",
   "title": "500 SL, from 06.1993: SL 500 (R 129 E 50, 1989 - 1995)",
   "url": "https://mercedes-benz-publicarchive.com/marsClassic/en/instance/ko/500-SL-from-061993-SL-500--R-129-E-50-1989---1995.xhtml?oid=4724",
   "publisher": "Mercedes-Benz Classic public archive",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Factory data sheet for the M119 500SL: 79,827 built until June 1998; 4,973 cc; output in kW and metric horsepower, reduced from September 1992; torque 450 Nm then 470 Nm; 250 km/h governed; curb weight 1,770 kg then 1,800 kg from September 1991; wheelbase 2,515 mm; length 4,470 mm. Metric figures converted to US units in this file."
  },
  {
   "ref": "kenrockwell-history",
   "title": "History of the 1990-2002 R129 Mercedes SL500",
   "url": "https://kenrockwell.com/sl/r129history.htm",
   "publisher": "KenRockwell.com",
   "sourceType": "specialist",
   "reliability": "low",
   "notes": "Owner-written US history: M119 replaced by a lower-output V8 for 1999 at 302 hp and 339 lb-ft; electronic five-speed automatic and side airbags from 1996; 1997 the last year of the SL320. Second source for the M113 figures and the SL320 end year."
  },
  {
   "ref": "cg-cheapwheels",
   "title": "Cheap Wheels: 1990-1998 Mercedes-Benz 500SL and SL500",
   "url": "https://blog.consumerguide.com/cheap-wheels-1990-1998-mercedes-benz-500sl/",
   "publisher": "Consumer Guide Automotive",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Tom Appel, October 2021. US ratings: 500SL 322 hp, cut to 315 hp in 1993; 300SL with a standard five-speed manual; renaming to SL500 from the 1994 models; 1996 side airbags and five-speed automatic."
  },
  {
   "ref": "hagerty-buyers-guide",
   "title": "Your definitive 1990-2002 Mercedes-Benz R129 SL buyer's guide",
   "url": "https://hagerty.com/media/?p=5697",
   "publisher": "Hagerty",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "US buyer guide: 1990 launch as 300SL and 500SL; manual with dogleg pattern, believed 166 sold in the US; 1990 300SL $73,500; V12 $119,500; harness on 1995 and earlier cars except 3.0-liter; harness $900-$1,500 plus 3-4 hours; 11 or 12 top cylinders, $8,000-$9,000 at a dealer; ADS standard on V12; roll bar 0.3 second; M119 322 hp then 315; M113 302 hp, 339 lb-ft; 1996 and 1999 changes; 40th Anniversary, Formula One Edition (20), Silver Arrow; undated #2 values; 204,940 total."
  },
  {
   "ref": "mbca-future-classic",
   "title": "A Future Classic - The R129 SL Model Range: 1989-2002",
   "url": "https://mbca.org/buyers-guide/future-classic-r129-sl-model-range-1989-2002",
   "publisher": "Mercedes-Benz Club of America",
   "sourceType": "specialist",
   "reliability": "high",
   "notes": "Club buyer guide: two engines at US introduction for 1990; 3.2-liter six from 1994 models, discontinued in 1998 in the US; manual on a limited number of 1990-1992 300SLs; harness problem 1993-1995; ADS very expensive; M119 to M113; AMG counts SL55 65, SL60 633, SL70 150 with a buyer-beware warning; roll bar 0.3 seconds."
  },
  {
   "ref": "mbca-star-r129",
   "title": "The R129 SL Roadsters, 1990-2002",
   "url": "https://starmagazine.mbca.org/node/7148057",
   "publisher": "The Star, Mercedes-Benz Club of America",
   "sourceType": "specialist",
   "reliability": "high",
   "notes": "Brian Clifton, July 2010: manual 300SLs sold in the US in 1990 and 1991; 12-valve 300SL, SL280 and 3.2 not as listed for the US; six withdrawn from the US in 1998; 204,940 total; harness problem 1993-1995 with no recall; ADS on SL600 extremely expensive; most AMG cars still in Europe; check top and roll bar for hydraulic leaks."
  },
  {
   "ref": "motor1-ownership",
   "title": "I Bought My Dream Mercedes SL For $8,000. Here's What It Really Cost Me",
   "url": "https://www.motor1.com/features/805616/buying-mercedes-benz-sl-ownership-cost/",
   "publisher": "Motor1",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Writer's own 1997 SL500 bought for about $8,000; total close to $13,000 after tires, upholstery, top cylinders and fuel pump; top cylinder rebuild about $1,200; mentions the biodegradable harness and a dozen top cylinders. US ownership cost, single owner."
  },
  {
   "ref": "mbworld-manual-thread",
   "title": "Manual Transmission R129 How Rare",
   "url": "https://mbworld.org/forums/sl-class-r129/150083-manual-transmission-r129-how-rare.html",
   "publisher": "MBWorld forum",
   "sourceType": "club-forum",
   "reliability": "low",
   "notes": "Owner thread from 2006-2007 with unsourced claims of 800 manual 300SLs imported to the US and of 166 or under 200; one poster notes factory production figures do not show transmission type. Cited only to show the count is unsettled."
  },
  {
   "ref": "rt-500sl-1990",
   "title": "In 1990, The Mercedes-Benz 500SL Was the Pinnacle of Resplendent Luxury",
   "url": "https://autos.yahoo.com/1990-mercedes-benz-500sl-pinnacle-144604860.html",
   "publisher": "Road & Track (via Yahoo Autos)",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Chris Perkins, June 2016, on MotorWeek's 1990 500SL test: MotorWeek loved the car's performance and comfort; gives the price as $83,000, against $83,500 in other sources."
  },
  {
   "ref": "mbworld-motorweek-1990",
   "title": "Throwback Thursday: MotorWeek Reviews 1990 Mercedes 500SL",
   "url": "https://mbworld.org/?p=24054",
   "publisher": "MBWorld",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Article on MotorWeek's period US test of the 1990 500SL: $83,500 price; MotorWeek ran acceleration, braking and slalom tests (results not in text)."
  },
  {
   "ref": "cg-used-sl",
   "title": "1990-02 Mercedes-Benz SL-Class",
   "url": "https://consumerguide.com/used/1990-02-mercedes-benz-sl-class",
   "publisher": "Consumer Guide Automotive",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "US model-year narrative: 1990 debut with two engines; manual standard on 300SL; 300SL and SL320 both 228 hp; 600SL 389 hp; 1996 side airbags; 1997 panorama hardtop; SL320 dropped for 1998; 1999 V8 302 hp; 2001 AMG lower-body styling; claimed 6-second 0-60 for late SL500; trouble spots for timing-chain tensioner, automatic, and early clutch pedal."
  },
  {
   "ref": "cd-600sl-1993",
   "title": "1993 Mercedes-Benz 600SL Is V-12 Royalty",
   "url": "https://blog.kowatek.com/?p=1659",
   "publisher": "Car and Driver, April 1993 (reproduced on the Kowatek blog)",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Period US road test reprint: base and tested $132,190; 389 hp at 5,200 rpm; 420 lb-ft at 3,800 rpm; 0-60 mph 5.5 seconds; quarter mile 14.1 seconds at 102 mph; curb weight 4,524 lb; EPA 13/18 mpg, 16 observed; four-speed automatic; adaptive damping. Copy is garbled in places, so reliability is medium."
  },
  {
   "ref": "classic-r129-1990",
   "title": "1990 Mercedes-Benz SL - R129",
   "url": "https://www.classic.com/m/mercedes-benz/sl/r129/year-1990",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Read November 2026: 1990 R129 results including $3,300 300SL Fort Worth October 29, 2025 and $78,388 500SL AMG 6.0 Atlanta November 13, 2025. No benchmark shown on this page."
  },
  {
   "ref": "classic-500sl-1990",
   "title": "1990 Mercedes-Benz 500SL - R129",
   "url": "https://www.classic.com/m/mercedes-benz/sl/r129/500-sl/year-1990",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Read November 2026: CMB $15,678 and Avg $18,880 for the 500SL R129 market (1990-1993), a moving benchmark; price chart did not load."
  },
  {
   "ref": "gooding-silver-arrow",
   "title": "2002 Mercedes-Benz SL500 Silver Arrow Edition",
   "url": "https://www.goodingco.com/lot/2002-mercedes-benz-sl500-silver-arrow-limited-edition",
   "publisher": "Gooding Christie's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Amelia Island Auctions 2018, Lot 42: sold $48,400 without reserve, estimate $40,000-$50,000, under 13,000 miles; one of only 1,450 Silver Arrow editions. Premium inclusion not stated."
  },
  {
   "ref": "bj-silver-arrow",
   "title": "2002 Mercedes-Benz SL500R Silver Arrow Roadster",
   "url": "https://barrett-jackson.com/Events/Event/Details/2002-MERCEDES-BENZ-SL500R-SILVER-ARROW-ROADSTER-254952",
   "publisher": "Barrett-Jackson",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Scottsdale 2022, Lot 1623.1, sold, price not shown; 19,004 miles; top hydraulic cylinders replaced before sale; one of 1,450 Silver Arrow editions made for US production; AMG styling package front spoiler, side skirts and rear apron."
  }
 ],
 "claims": [
  {
   "section": "production",
   "claimText": "Mercedes-Benz built 204,940 R129 SLs in total over the generation's production run; this worldwide figure is consistent across every source consulted.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["mercedesheritage-r129", "motor1-de-30-jahre", "mbca-star-r129", "hagerty-buyers-guide", "classictrimparts-facts"],
   "evidence": [
    { "ref": "mercedesheritage-r129", "quote": "In total, Mercedes-Benz built 204,940 of the fourth-generation SL." },
    { "ref": "motor1-de-30-jahre", "quote": "Insgesamt werden in zwölf Jahren Bauzeit 204.940 Fahrzeuge produziert." },
    { "ref": "mbca-star-r129", "quote": "Keep in mind that only 204,940 total units of the R129 SL were made in all." },
    { "ref": "hagerty-buyers-guide", "quote": "Total production of the R129 SL was 204,940." },
    { "ref": "classictrimparts-facts", "quote": "The total number of R129s produced for model years 1990 through 2001 was 204,940." }
   ]
  },
  {
   "section": "production",
   "claimText": "The factory archive records 79,827 500SL and SL500 cars with the M119 V8 built through June 1998, and Classic Trim Parts gives the same figure.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["mb-archive-500sl", "classictrimparts-facts"],
   "evidence": [
    { "ref": "mb-archive-500sl", "quote": "a total of 79,827 (until 06.1998)" },
    { "ref": "classictrimparts-facts", "quote": "| 500SL | R129 E50 | 1988-1998 | 79,827 |" }
   ]
  },
  {
   "section": "production",
   "claimText": "Nobody publishes a firm count of US 300SLs with the five-speed manual: Hagerty says it is believed only 166 were sold in the US, while posts on an MBWorld owner forum claim about 800, all unsourced.",
   "confidence": "low",
   "status": "disputed",
   "sourceRefs": ["hagerty-buyers-guide", "mbworld-manual-thread"],
   "conflictNote": "Hagerty states it is believed that only 166 stick-shift examples were sold in the US. MBWorld forum posts give about 800 imported into the US, and others 166 or under 200, with no documentary source for any figure. Not resolved by any source consulted here.",
   "evidence": [
    { "ref": "hagerty-buyers-guide", "quote": "it is believed only 166 stick-shift examples were sold in the U.S." },
    { "ref": "mbworld-manual-thread", "quote": "There were 800 imported into the U.S. in the early '90s, one of which is in my driveway." }
   ]
  },
  {
   "section": "history",
   "claimText": "Sources disagree on which US model years the five-speed manual 300SL was sold and on whether it was standard or optional.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["mbca-future-classic", "mbca-star-r129", "cg-used-sl", "hagerty-buyers-guide"],
   "conflictNote": "The MBCA buyer guide says a limited number of 1990-1992 300SLs had the manual. The MBCA's Star magazine says manual cars were sold in the US in 1990 and 1991. Consumer Guide says the manual was standard on the 300SL with the automatic optional, while Hagerty describes it as one of two choices. Not resolved by any source consulted here.",
   "evidence": [
    { "ref": "mbca-future-classic", "quote": "a limited number of 1990-1992 300SLs had a 5-speed manual transmission" },
    { "ref": "mbca-star-r129", "quote": "In 1990 and 1991, a few 300SLs were sold in the States with a 5-speed manual transmission." },
    { "ref": "cg-used-sl", "quote": "A five-speed manual transmission was standard in the 300SL, with five-speed automatic optional." },
    { "ref": "hagerty-buyers-guide", "quote": "It could be had with a five-speed automatic transmission or a five-speed manual with a dogleg shift pattern." }
   ]
  },
  {
   "section": "history",
   "claimText": "The R129 arrived in the US for the 1990 model year with two engines, as the six-cylinder 300SL and the V8 500SL.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["hagerty-buyers-guide", "mbca-future-classic", "cg-used-sl"],
   "evidence": [
    { "ref": "hagerty-buyers-guide", "quote": "The car arrived for the 1990 model year in two forms: The six-cylinder 300SL and the V-8 500SL." },
    { "ref": "mbca-future-classic", "quote": "At introduction in the United States for 1990, there were two engine choices" },
    { "ref": "cg-used-sl", "quote": "After 18 years in its prior form, a new SL two-passenger roadster debuted for 1990, with a choice of two engines." }
   ]
  },
  {
   "section": "specs",
   "claimText": "The US 300SL used a 228 hp 3.0-liter six, the SL320's 3.2-liter six kept the same rating, and the 12-valve 300SL sold in Europe was not offered in the US.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["cg-used-sl", "mbca-star-r129", "mercedesheritage-r129"],
   "evidence": [
    { "ref": "cg-used-sl", "quote": "The 300SL used a 228-horsepower, 3.0-liter inline six-cylinder." },
    { "ref": "mbca-star-r129", "quote": "Not offered in United States." },
    { "ref": "mercedesheritage-r129", "quote": "featuring the M103 six cylinder engine (140 kW/190 hp at 5,700 rpm" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 500SL's M119 is a 4,973 cc 32-valve DOHC V8 rated at 322 hp in the US, cut to 315 hp for 1993; the factory archive records the reduction from September 1992.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["hagerty-buyers-guide", "cg-cheapwheels", "mb-archive-500sl"],
   "evidence": [
    { "ref": "hagerty-buyers-guide", "quote": "The 500SL V-8 was the 5.0-liter, 32-valve, DOHC M119 unit, good for 322 horsepower." },
    { "ref": "cg-cheapwheels", "quote": "In 1993, 500SL's V8 engine was downgraded to 315 horsepower," },
    { "ref": "mb-archive-500sl", "quote": "240 kW / 326 hp at 5500 rpm; from 09.1992: 235 kW / 320 hp at 5600 rpm" },
    { "ref": "mb-archive-500sl", "quote": "Total displacement 4973 cc" }
   ]
  },
  {
   "section": "specs",
   "claimText": "For the 1999 model year the M119 was replaced by the M113, a 24-valve SOHC V8 rated at 302 hp and 339 lb-ft.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["hagerty-buyers-guide", "kenrockwell-history", "cg-used-sl", "mbca-future-classic"],
   "evidence": [
    { "ref": "hagerty-buyers-guide", "quote": "1999 and later models switched to the M113 24-valve SOHC V-8, making 302 horsepower and 339 lb-ft of torque." },
    { "ref": "kenrockwell-history", "quote": "It has only 302 HP and only 339 foot-pounds of torque." },
    { "ref": "cg-used-sl", "quote": "Revised internally this year, the V8 engine dropped to 302 horsepower." },
    { "ref": "mbca-future-classic", "quote": "V-8 engine switched from M119 to M113" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 600SL arrived for the 1993 model year with a V12 rated at 389 hp; Car and Driver's April 1993 test lists 389 hp at 5,200 rpm and 420 lb-ft at 3,800 rpm, 0-60 mph in 5.5 seconds, a 14.1-second quarter mile at 102 mph and a 4,524 lb curb weight.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["cd-600sl-1993", "cg-used-sl", "hagerty-buyers-guide"],
   "evidence": [
    { "ref": "cd-600sl-1993", "quote": "60 mph: 5.5 seconds" },
    { "ref": "cd-600sl-1993", "quote": "Power: 389hp @ 5200rpm" },
    { "ref": "cd-600sl-1993", "quote": "Torque: 420 lb-ft @ 3800 rpm" },
    { "ref": "cd-600sl-1993", "quote": "1/4 mile: 14.1 seconds @ 102 mph" },
    { "ref": "cd-600sl-1993", "quote": "Curb Weight: 4524 lbs" },
    { "ref": "cg-used-sl", "quote": "A new 600SL model debuted this year, with a V12 engine that produced 389 horsepower." },
    { "ref": "hagerty-buyers-guide", "quote": "The 12-cylinder 600SL arrived for 1993." }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 1990 US list prices were $73,500 for the 300SL and $83,500 for the 500SL; a Road & Track retrospective gives the 500SL as $83,000.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["hagerty-buyers-guide", "classictrimparts-facts", "mbworld-motorweek-1990", "rt-500sl-1990"],
   "conflictNote": "Hagerty and Classic Trim Parts give $73,500 for the 1990 300SL. MBWorld and Classic Trim Parts give $83,500 for the 1990 500SL, while Road & Track's 2016 retrospective gives $83,000. No source consulted explains the $500 difference, which is not resolved here.",
   "evidence": [
    { "ref": "hagerty-buyers-guide", "quote": "In 1990, the 300SL was $73,500 (before destination charges or the gas-guzzler tax)." },
    { "ref": "classictrimparts-facts", "quote": "| 1990 | $73,500 | $83,500 |" },
    { "ref": "mbworld-motorweek-1990", "quote": "Its hefty $83,500 price tag, then, is indicative of how well the car holds up as luxury-performer, now." },
    { "ref": "rt-500sl-1990", "quote": "In this case it was $83,000, which is over $150,000 when adjusted for inflation." }
   ]
  },
  {
   "section": "specs",
   "claimText": "The V12 car's US price at launch is given as $119,500 by Hagerty and Classic Trim Parts, while Car and Driver's April 1993 test lists base and as-tested price at $132,190.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["hagerty-buyers-guide", "classictrimparts-facts", "cd-600sl-1993"],
   "conflictNote": "Hagerty states the V12 started at $119,500, and Hagerty's 300SL figure is explicitly before destination and gas-guzzler tax; Classic Trim Parts lists $119,500 for 1993. Car and Driver lists $132,190 base and tested. No source itemizes the $12,690 difference, so this is not resolved by any source consulted here.",
   "evidence": [
    { "ref": "hagerty-buyers-guide", "quote": "When the V-12 arrived, it started at $119,500." },
    { "ref": "classictrimparts-facts", "quote": "| 1993 | $83,300 | $98,500 | $119,500 |" },
    { "ref": "cd-600sl-1993", "quote": "Base/Tested: $132,190/$132,190" }
   ]
  },
  {
   "section": "history",
   "claimText": "The rollover bar sits flush when not needed and deploys automatically in 0.3 second when a rollover is detected.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["hagerty-buyers-guide", "mercedesheritage-r129", "motor1-de-30-jahre", "mbca-future-classic"],
   "evidence": [
    { "ref": "hagerty-buyers-guide", "quote": "The SL had a first-of-its-kind roll bar that deploys automatically in 0.3 second if a rollover is detected." },
    { "ref": "mercedesheritage-r129", "quote": "the integral support rose in just 0.3 seconds." },
    { "ref": "motor1-de-30-jahre", "quote": "Die vorgespannte Feder-Dämpfer-Einheit richtet den Überrollbügel bei fahrkritischen Situationen in nur 0,3 Sekunden auf." },
    { "ref": "mbca-future-classic", "quote": "a rollover bar that could pop up in 0.3 seconds when its control sensor detected an imminent roll-over" }
   ]
  },
  {
   "section": "history",
   "claimText": "Development of the 129 series began in the mid-1970s, under a design department led by Bruno Sacco, and the roadster debuted at the Geneva Motor Show in March 1989.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["motor1-de-30-jahre", "mercedesheritage-r129"],
   "evidence": [
    { "ref": "motor1-de-30-jahre", "quote": "Die Entwicklung der Baureihe 129 nimmt Mercedes bereits Mitte der 1970er-Jahre auf." },
    { "ref": "motor1-de-30-jahre", "quote": "Bruno Sacco, damals Direktor des Bereichs Design bei Mercedes." },
    { "ref": "mercedesheritage-r129", "quote": "the SL Roadster from Mercedes-Benz was one of the biggest sensations at the Geneva Motor Show in March 1989." }
   ]
  },
  {
   "section": "history",
   "claimText": "The cars were renamed SL320, SL500 and SL600 starting with the 1994 models in the US, after Mercedes-Benz changed its designations in summer 1993.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["cg-cheapwheels", "mercedesheritage-r129", "hagerty-buyers-guide"],
   "evidence": [
    { "ref": "cg-cheapwheels", "quote": "Starting with the 1994 models, Mercedes changed its naming protocol and the V8 model was rechristened SL500." },
    { "ref": "mercedesheritage-r129", "quote": "In the summer of 1993, the Stuttgart-based brand adapted the model designations for its open-top sports cars." },
    { "ref": "hagerty-buyers-guide", "quote": "For the SL, that meant SL320 (owing to the concurrent displacement increase to 3.2 liters), SL500, and SL600." }
   ]
  },
  {
   "section": "history",
   "claimText": "The facelift shown in 1995 reached the US as the 1996 model, with a revised grille, 12-hole wheels, reshaped bumpers, the end of two-tone paint, side airbags and a five-speed automatic.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["hagerty-buyers-guide", "mercedesheritage-r129", "cg-cheapwheels", "kenrockwell-history"],
   "evidence": [
    { "ref": "hagerty-buyers-guide", "quote": "It also saw a modified grille with fewer bars, new 12-hole alloy wheels, reshaped front and rear bumpers." },
    { "ref": "mercedesheritage-r129", "quote": "In 1995, Mercedes-Benz presented the facelifted SL models at the IAA International Motor Show." },
    { "ref": "cg-cheapwheels", "quote": "The 1996 model year brought side-impact airbags and a five-speed automatic." },
    { "ref": "kenrockwell-history", "quote": "The superior electronic 5 speed transmission and side airbags were added in 1996 and continued through 2002." }
   ]
  },
  {
   "section": "history",
   "claimText": "The last US model year of the six-cylinder SL320 is given as 1997 by two sources, while Hagerty lists the SL320's departure among the 1999 changes.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["kenrockwell-history", "cg-used-sl", "mbca-star-r129", "hagerty-buyers-guide"],
   "conflictNote": "Ken Rockwell says 1997 was the last year for the SL320, and Consumer Guide records the SL320 dropped for 1998; the MBCA's Star says the six was withdrawn from the US market in 1998. Hagerty places the SL320 being dropped with the 1999 update. Not resolved by any source consulted here.",
   "evidence": [
    { "ref": "kenrockwell-history", "quote": "1997 was the last year for the 6 cylinder SL320." },
    { "ref": "cg-used-sl", "quote": "Mercedes-Benz dropped the six-cylinder SL320, leaving only V8 and V12 models." },
    { "ref": "mbca-star-r129", "quote": "in 1998, the 6-cylinder engine was withdrawn from the U.S. market." },
    { "ref": "hagerty-buyers-guide", "quote": "The SL320 was dropped." }
   ]
  },
  {
   "section": "problems",
   "claimText": "The biodegradable engine wiring harness is the R129's best-known fault, but sources disagree on the affected years: the MBCA says 1993-1995 model years, Hagerty says 1995 and earlier cars except those with the 3.0-liter engine.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["mbca-future-classic", "mbca-star-r129", "hagerty-buyers-guide", "motor1-ownership"],
   "conflictNote": "The MBCA buyer guide and its Star magazine both give 1993-1995 model years. Hagerty says the harnesses are found in 1995 and earlier cars only, excluding 3.0-liter cars, which would include 1990-1992 V8 cars. Not resolved by any source consulted here.",
   "evidence": [
    { "ref": "mbca-future-classic", "quote": "Biodegradable wiring harness and ignition wiring in 1993-1995 model years must be replaced" },
    { "ref": "mbca-star-r129", "quote": "Wiring harnesses were a known problem area in model years 1993-1995, but a recall was never issued." },
    { "ref": "hagerty-buyers-guide", "quote": "These harnesses are found in 1995 and earlier cars only, although cars with the 3.0-liter engine do not have the issue." },
    { "ref": "motor1-ownership", "quote": "Mercedes' infamous biodegradable wiring harness" }
   ]
  },
  {
   "section": "problems",
   "claimText": "Hagerty puts a replacement main engine harness at $900 to $1,500 for the part plus three to four hours of labor; this is a single-source cost figure.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["hagerty-buyers-guide"],
   "evidence": [
    { "ref": "hagerty-buyers-guide", "quote": "the main harness is $900 to $1500 for the part alone, plus three-to-four hours labor to replace." }
   ]
  },
  {
   "section": "problems",
   "claimText": "The soft top uses 11 or 12 hydraulic cylinders that eventually leak; Hagerty cites $8,000 to $9,000 for a full set at a dealer and $550 plus exchange from an aftermarket supplier, and a Motor1 owner puts a rebuild at about $1,200.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["hagerty-buyers-guide", "motor1-ownership", "bj-silver-arrow"],
   "evidence": [
    { "ref": "hagerty-buyers-guide", "quote": "The convertible top uses 11 (or 12, depending on the model year) hydraulic cylinders, and these eventually can leak." },
    { "ref": "hagerty-buyers-guide", "quote": "Replacing the full set at a dealership can run $8000 or $9000," },
    { "ref": "hagerty-buyers-guide", "quote": "Tophydraulicsinc.com sells a full set for $550 (plus exchange)." },
    { "ref": "motor1-ownership", "quote": "A comprehensive rebuild of all 12 cylinders, plus a distributor, to the tune of about $1,200." },
    { "ref": "motor1-ownership", "quote": "its dozen hydraulic cylinders stop sealing correctly after a while" },
    { "ref": "bj-silver-arrow", "quote": "The convertible top hydraulic cylinders were replaced in preparation for the sale." }
   ]
  },
  {
   "section": "problems",
   "claimText": "The ADS adaptive damping suspension was standard on V12 cars, can suffer failed accumulators, and is described by the MBCA as very expensive to maintain or replace.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["hagerty-buyers-guide", "mbca-future-classic", "mbca-star-r129", "cd-600sl-1993"],
   "evidence": [
    { "ref": "hagerty-buyers-guide", "quote": "The ADS adaptive damping suspension that was standard in V-12 cars" },
    { "ref": "mbca-future-classic", "quote": "can be very expensive to maintain or replace" },
    { "ref": "mbca-star-r129", "quote": "SL600 with Adaptive Damping System (ADS) or ADS II suspension can be extremely expensive to maintain." },
    { "ref": "cd-600sl-1993", "quote": "adaptive damping control" }
   ]
  },
  {
   "section": "problems",
   "claimText": "Consumer Guide's trouble spots list timing-chain tensioner noise on 1997-1998 cars, an automatic that jerks into drive or reverse on 1997-1999 cars, and a clutch pedal that can stick on early manual 300SLs.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["cg-used-sl"],
   "evidence": [
    { "ref": "cg-used-sl", "quote": "Timing-chain tensioner weakness causes knocking and rattling from the front of the engine, especially when hot." },
    { "ref": "cg-used-sl", "quote": "The clutch pedal may stick on 30SL models due to heat boiling the fluid." }
   ]
  },
  {
   "section": "production",
   "claimText": "Gooding and Barrett-Jackson say 1,450 Silver Arrow editions were made for 2002, Barrett-Jackson specifying US production, while Classic Trim Parts describes an SL600 Silver Arrow as one of 100.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["gooding-silver-arrow", "bj-silver-arrow", "classictrimparts-facts", "hagerty-buyers-guide"],
   "conflictNote": "Gooding states one of only 1,450 Silver Arrow editions produced, and Barrett-Jackson one of 1,450 made for US production. Classic Trim Parts calls a 2002 SL600 Silver Arrow one of 100 R129s with the package. Whether the 100 is a subset of the 1,450 or separate is not stated by any source, and is not resolved here.",
   "evidence": [
    { "ref": "gooding-silver-arrow", "quote": "One of Only 1,450 Silver Arrow Editions Produced" },
    { "ref": "bj-silver-arrow", "quote": "one of just 1,450 Silver Arrow editions made for U.S. production." },
    { "ref": "classictrimparts-facts", "quote": "It only had 270 miles on the odometer and is 1 of 100 R129s produced with the Silver Arrow Package." },
    { "ref": "hagerty-buyers-guide", "quote": "was a fully loaded special edition for the R129's run-out model year of 2002." }
   ]
  },
  {
   "section": "production",
   "claimText": "The MBCA counts 65 SL55, 633 SL60 and 150 SL70 AMG cars worldwide; no source consulted documents factory US availability of an AMG R129, and the MBCA's Star says most remain in Europe.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["mbca-future-classic", "mbca-star-r129"],
   "evidence": [
    { "ref": "mbca-future-classic", "quote": "There were only a few produced: SL55 (65 units); SL60 (633 units); SL70 (150 units);" },
    { "ref": "mbca-star-r129", "quote": "Most of these cars are still in Europe." }
   ]
  },
  {
   "section": "market",
   "claimText": "As of November 2026 classic.com's benchmark for the 1990-1993 500SL is $15,678, with an average of $18,880; the benchmark moves as sales are added. Its 1990 R129 page shows US results from $3,300 to $78,388, the top figure for a 500SL AMG 6.0 sold in Atlanta in November 2025.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["classic-500sl-1990", "classic-r129-1990"],
   "evidence": [
    { "ref": "classic-500sl-1990", "quote": "CMB $15,678" },
    { "ref": "classic-500sl-1990", "quote": "Avg $18,880" },
    { "ref": "classic-r129-1990", "quote": "1990 Mercedes-Benz 500SL AMG 6.0" },
    { "ref": "classic-r129-1990", "quote": "Sold $78,388 Nov 13, 2025" },
    { "ref": "classic-r129-1990", "quote": "Sold $3,300 Oct 29, 2025" }
   ]
  },
  {
   "section": "market",
   "claimText": "Gooding sold a 2002 SL500 Silver Arrow with under 13,000 miles at Amelia Island in 2018 as Lot 42 for $48,400 without reserve, against a $40,000-$50,000 estimate.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["gooding-silver-arrow"],
   "evidence": [
    { "ref": "gooding-silver-arrow", "quote": "Shows Less than 13,000 Miles from New" },
    { "ref": "gooding-silver-arrow", "quote": "SOLD $48,400" },
    { "ref": "gooding-silver-arrow", "quote": "Lot 42" },
    { "ref": "gooding-silver-arrow", "quote": "Amelia Island Auctions 2018" },
    { "ref": "gooding-silver-arrow", "quote": "$40,000 - $50,000| Without Reserve" }
   ]
  },
  {
   "section": "market",
   "claimText": "A Motor1 writer's 1997 SL500 bought for about $8,000 came to about $13,000 once tires, top cylinders, upholstery and other work were done.",
   "confidence": "low",
   "status": "verified",
   "sourceRefs": ["motor1-ownership"],
   "evidence": [
    { "ref": "motor1-ownership", "quote": "the total figure is a bit closer to $13,000 than the $8,000 I initially spent on it" }
   ]
  },
  {
   "section": "market",
   "claimText": "Hagerty's buyer guide gives $16,600 for a 1990 300SL and $26,600 for a 2000 SL600 in number 2 condition, undated, and reports a 1990 500SL with 422 miles asking $75,000 at the Mercedes-Benz Classic Center in Irvine.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["hagerty-buyers-guide"],
   "evidence": [
    { "ref": "hagerty-buyers-guide", "quote": "The most affordable variant is the early 300SL ($16,600 for a 1990 SL300 in #2 condition)," },
    { "ref": "hagerty-buyers-guide", "quote": "while the later SL600 is the priciest ($26,600 for a 2000 SL600 also in #2 condition)." },
    { "ref": "hagerty-buyers-guide", "quote": "at an asking price of $75,000." }
   ]
  },
  {
   "section": "specs",
   "claimText": "The factory data sheet for the M119 500SL lists 0-62 mph in 6.2 seconds for the early car and 6.5 seconds from September 1992, stated on the sheet in its metric 0-100 form.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["mb-archive-500sl"],
   "evidence": [
    { "ref": "mb-archive-500sl", "quote": "Acceleration 0-100 km/h 6.2 s; from 09.92: 6.5 s" }
   ]
  }
 ]
};
