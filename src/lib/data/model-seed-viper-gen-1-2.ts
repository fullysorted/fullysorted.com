/**
 * Researched model draft - Dodge Viper, first and second generation (1992-2002).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedViperGen12 = {
 "slug": "dodge/viper-gen-1-2",
 "make": "Dodge",
 "model": "Viper",
 "generation": "First and second generation (RT/10, GTS, GT2, ACR), US market",
 "generationCode": "SR I / SR II",
 "trim": null,
 "yearStart": 1992,
 "yearEnd": 2002,
 "bodyStyles": [
  "2-door roadster with sport bar and snap-on canvas top (RT/10, 1992-1995; removable hardtop optional from 1994)",
  "2-door convertible roadster with side windows and optional hardtop (RT/10, 1996-2002)",
  "2-door fixed-roof coupe with double-bubble roof (GTS, 1996-2002, including GT2 Championship Edition and ACR)"
 ],
 "engines": [
  "7,990 cc (488 cu in) pushrod 90-degree V10, aluminum block and heads, port fuel injection, 400 hp at 4,600 rpm and 450 lb-ft at 3,600 rpm (RT/10, 1992-1995)",
  "7,990 cc (488 cu in) pushrod V10 with rear-exit exhaust and OBD II controller, 415 hp at 5,200 rpm and 488 lb-ft at 3,600 rpm (RT/10, 1996-1997)",
  "7,990 cc (488 cu in) pushrod V10, 450 hp at 5,200 rpm and 490 lb-ft at 3,700 rpm (GTS from 1996; RT/10 from 1998)",
  "7,990 cc (488 cu in) pushrod V10 with smooth intake hoses and K&N filter element, 460 hp at 5,200 rpm and 500 lb-ft at 3,700 rpm (GT2 Championship Edition 1998; ACR 1999-2002)"
 ],
 "productionTotal": null,
 "productionNotes": "No single figure is asserted for the 1992-2002 run because the sources consulted do not agree on the first-generation count and none of them is a factory document. Wikipedia's SR I entry gives 5,988 units for 1991-1995 production (1992-1995 model years) and its SR II entry gives 10,422 units for 1995-2002 production (1996-2002 model years). Allpar, working year by year, gives 155 cars in the first calendar year (1992 and early 1993 cars together), 895 for 1993, 2,890 for 1994 and 1,418 for 1995, which sums to 5,358, and separately says that by 1998 some 9,500 Vipers had been built. Hagerty's 2019 buyer's guide states that exact production numbers are difficult to lock down because some lists count year built and others model year, that Dodge sold just over 10,000 second-generation cars, and that this was a near doubling of the first-generation run. Those statements are consistent with the Wikipedia totals but do not resolve the 630-car gap in the first-generation count, so productionTotal is null. Sub-series numbers are better supported. Allpar records that over 1,200 roadsters were built for 1996 and that coupe figures were not released; that fewer than a thousand 1998 cars were built, all but 74 of them coupes; and that 360 Final Edition coupes closed the run in 2002. Hagerty adds 114 RT/10 roadsters for 1997, 435 blue-and-white GTS coupes for 1997, slightly more than 200 ACRs in each year from 1999 to 2002, and 34 ACRs among the 360 Final Edition cars. The GT2 Championship Edition is itself disputed: Allpar and Wikipedia say 100 cars, Hagerty says 102 including two undocumented cars given to executives. The GTS-R race car, which Stellantis puts at 57 built over eight years, is counted separately. US pricing when new is documented by Car and Driver's test panels: $54,640 base for the 1992 RT/10, $61,975 base for the 1996 RT/10 and $72,396 base for the 1997 GTS, with the GT2 at $85,200 including destination per Allpar. Allpar's year-by-year prices ($50,000 for 1992, $50,700 for 1993, $54,500 for 1994, $56,000 for 1995) run below Car and Driver's 1992 panel and the gap is not explained by either source.",
 "notableTrims": [
  {
   "name": "RT/10 Roadster, 1992-1995",
   "note": "The original car: 400 hp, side-exit exhausts, no exterior door handles, no side glass and a snap-on canvas top. The rawest Viper and, as of September 2026, the cheapest way into one. The first cars were red only; black arrived for 1993, yellow and emerald green for 1994."
  },
  {
   "name": "RT/10 Roadster, 1996 (the 'Gen 1.5')",
   "note": "One model year of roadster on the revised frame with the rear-exit exhaust and 415 hp, but still without the coupe's airbags, power windows or door handles. Hagerty notes the Viper community treats it as a mix of old and new parts rather than a true second-generation car."
  },
  {
   "name": "GTS Coupe, 1996-1997",
   "note": "The double-bubble coupe that paced the 1996 Indianapolis 500, 450 hp and the first Viper with airbags. Sold only in blue with white stripes in 1996; the 435 blue-and-white 1997 cars were built to clear the backlog. Hagerty's dealer source says these two years draw the most demand."
  },
  {
   "name": "RT/10 Roadster, 1997-2002",
   "note": "The roadster caught up with the coupe: airbags, power windows, exterior door handles, and 450 hp from 1998. Only 114 were built for 1997 per Hagerty, which makes that year the scarcest roadster despite being the least changed."
  },
  {
   "name": "GT2 Championship Edition, 1998",
   "note": "White with blue stripes, GTS-R style splitter, dive planes and rear wing, 460 hp and $85,200 including destination. Built to mark the 1997 FIA GT2 title; Allpar says 100 cars, Hagerty says 102. Classic.com's benchmark for it is nearly double a standard GTS as of September 2026."
  },
  {
   "name": "GTS ACR, 1999-2002",
   "note": "American Club Racer: air conditioning, audio and fog lights deleted for a 60 lb saving, 460 hp, one-piece 18-inch BBS wheels, Koni shocks and Meritor springs (adjustable monotube shocks from 2000), five-point harness. Comfort Group put the A/C and stereo back. Slightly more than 200 a year per Hagerty."
  },
  {
   "name": "GTS Final Edition, 2002",
   "note": "The last 360 coupes, red with white stripes and special badging; 34 of them were ACRs. The end of the 488 cu in engine and the two-bubble body before the 2003 SRT-10."
  }
 ],
 "specs": {
  "layout": "Front-mounted longitudinal V10, rear-wheel drive, two seats",
  "chassis": "Backbone tubular steel space frame with center spine and separate cowl; resin transfer molded composite body panels with a sheet-molded compound hood; 1996 frame 60 lb lighter and 20 percent stiffer in torsion",
  "engine": "7,990 cc (488 cu in) pushrod 20-valve 90-degree V10, aluminum block and heads, port fuel injection; Chrysler LA V8 architecture with Lamborghini input on the aluminum casting",
  "power": "400 hp at 4,600 rpm (1992-1995); 415 hp at 5,200 rpm (1996-1997 RT/10); 450 hp at 5,200 rpm (GTS, and RT/10 from 1998); 460 hp at 5,200 rpm (GT2 and ACR)",
  "torque": "450 lb-ft at 3,600 rpm (1992-1995); 488 lb-ft at 3,600 rpm (1996 RT/10, Car and Driver panel); 490 lb-ft at 3,700 rpm (450 hp cars); 500 lb-ft at 3,700 rpm (GT2 and ACR)",
  "transmission": "BorgWarner T56 six-speed manual, the only gearbox offered; reverse lockout added for 1994",
  "weight": "3,450 lb (Car and Driver 1992 test car); 3,484 lb (Car and Driver 1996 prototype, about 60 lb over production weight); 3,410 lb (Car and Driver 1997 GTS test car); 3,356 lb ACR per Dodge, 3,403 lb with A/C and audio",
  "acceleration": "0-60 mph in 4.6 s (1992 RT/10), 4.1 s (1996 RT/10) and 4.0 s (1997 GTS), all Car and Driver measured",
  "quarter_mile": "13.2 s at 107 mph (1992 RT/10); 12.6 s at 113 mph (1996 RT/10); 12.2 s at 118 mph (1997 GTS), Car and Driver",
  "top_speed_tested": "159 mph (1992 RT/10, Car and Driver); 173 mph drag-limited (1996 RT/10); 186 mph (1997 GTS)",
  "brakes": "13.0 in vented discs front and rear, no ABS until it became standard for 2001",
  "wheels_tires": "17 in wheels with 275/40ZR-17 front and 335/35ZR-17 rear (Michelin XGT-Z, then Pilot SX from 1996); 18 in wheels and Pilot Sport tires from 1999",
  "wheelbase": "96.2 in (2,443 mm), Car and Driver panel",
  "dimensions": "Length 175.1 in, width 75.7 in, height 44.0 in (1992 RT/10, Car and Driver panel)",
  "fuel_economy_epa": "11 city, 20 highway, 14 combined mpg on the current fueleconomy.gov listing for the 1992 car; Car and Driver's 1992 panel printed 14/19",
  "fuel_tank": "22 gallons (1992-1995); cut to 19 gallons from 1996 to clear the rear-exit exhaust",
  "assembly": "New Mack Avenue Assembly, Detroit (1992-1995); Conner Avenue Assembly, Detroit (1996-2002)"
 },
 "summary": "The Dodge Viper began as a 1989 Detroit show car that Chrysler president Bob Lutz and design chief Tom Gale pitched as a modern Cobra, and went on sale as the RT/10 roadster in January 1992 with a 488 cu in aluminum V10, a six-speed manual, no exterior door handles, no side glass and a canvas top that clipped to a sport bar. Car and Driver's first test recorded 400 hp, 3,450 lb, 0-60 mph in 4.6 seconds and a $54,640 base price. For 1996 the frame was lightened and stiffened, the side pipes moved to a rear exit and output rose to 415 hp, and that spring the GTS coupe arrived with 450 hp, airbags and the double-bubble roof that paced the Indianapolis 500. The GTS-R racing version won the 1997 FIA GT2 title and its class at Le Mans, commemorated by the 1998 GT2 Championship Edition and followed by the track-focused ACR from 1999. Production ran through the 2002 Final Edition. Sources put the first generation at roughly 5,400 to 6,000 cars and the second at just over 10,000, and the disagreement is set out in the production notes rather than resolved here.",
 "history": "## A Modern Cobra to Change What Dodge Meant\n\nThe Viper was a brand-rescue project before it was a car. In 1988, with Dodge selling K-car derivatives and little else that anyone coveted, Chrysler president Bob Lutz suggested to design chief Tom Gale that the company build a modern Cobra. A clay model followed within months and the concept appeared at the January 1989 North American International Auto Show in Detroit, where, in Stellantis's own account, the public was clamoring to buy. Senior executives gave a small team led by chief engineer Roy Sjoberg the resources and one instruction: do it right and have it on the market in less than three years. Jim Julow, later Dodge's marketing vice president, put the purpose plainly in 2003: the point in 1992 was to re-orient what the Dodge brand was all about, with something so outrageous and so purpose built that it said the company still had car nuts on staff.\n\n## Engine, Frame and the Road to Indy\n\nThe V10 was derived from Chrysler's LA-series V8, with Willem Weertman, who had designed that engine, brought back to help, and Lamborghini, then partly Chrysler-owned, working on the aluminum casting, cooling and crankshaft balance. The aluminum block saved roughly 150 lb over iron. It went into a backbone tubular steel space frame under resin transfer molded composite panels, with unequal-length control arms at each corner and 13.0 in vented discs. A V8 mule ran within a year of the show, an iron-block V10 mule followed, and in May 1990 Chrysler confirmed the aluminum V10. A pre-production car paced the 1991 Indianapolis 500 with Carroll Shelby driving after United Auto Workers complaints forced the Japanese-built Dodge Stealth off the job.\n\n## 1992-1995: Four Hundred Horsepower and No Windows\n\nCar and Driver's March 1992 test found 400 hp, 3,450 lb, 0-60 mph in 4.6 seconds, a 13.2-second quarter mile and a base price of $54,640, along with no windows, no outside door handles, and a warning label about door-sill heat from the side exhausts. The federal requirement for door locks produced inside locks reachable from outside. Black paint arrived for 1993, yellow and emerald green for 1994 along with optional factory air conditioning at $1,200 and a reverse lockout. Allpar records 155 cars in the first calendar year, then 895, 2,890 and 1,418 for 1993, 1994 and 1995, while the encyclopedia total for the generation is 5,988; the gap is discussed under production.\n\n## 1996: New Frame, Rear Exhaust, and the GTS\n\nThe 1996 model year was the first real revision. Pete Gladysz, chassis and design manager on the Viper program, told Car and Driver that most of the changes were made for regulations and for the coupe to come: European noise limits and the OBD II emissions rule meant the side pipes had to go, and routing the exhaust out the back freed 15 hp, for 415. The frame lost 60 lb while gaining 20 percent in torsional stiffness, suspension arms and knuckles went to aluminum, the clutch, differential and half-shafts were upsized, and the fuel tank shrank from 22 to 19 gallons to clear the new exhaust. That spring the GTS coupe arrived, paced the Indianapolis 500, and brought 450 hp, airbags, power windows and a roof with two bubbles for helmets. Allpar puts more than 90 percent of the coupe's parts as new.\n\n## GTS-R, GT2 and ACR\n\nThe GTS-R competition car, developed with Reynard and run by Team Oreca, was introduced in 1996; Stellantis counts 57 built over eight years. It took the 1997 FIA GT2 championship, class wins at Le Mans, the American Le Mans championship, and in 2000 an overall win at the 24 Hours of Daytona. Dodge sold the win twice over: the 1998 GT2 Championship Edition, white with blue stripes, wing, splitter, dive planes, 460 hp and $85,200, and from 1999 the ACR, which used GTS-R springs, Koni shocks, BBS wheels and a five-point harness and deleted the air conditioning and stereo to save 60 lb. Autoweek reported in 1998 that Chrysler expected to build 100 to 200 ACRs in the first quarter of 1999 and that some would go to collectors who already owned a GT2. The run ended with 360 red-and-white Final Edition coupes for 2002, 34 of them ACRs, before the longer-wheelbase SRT-10 convertible replaced the car for 2003.",
 "marketNotes": "As of September 2026, classic.com's benchmark for the first-generation Viper (1992-1995) is $49,135 and trending up, with an average recorded price of $49,877; its lowest recorded sale is $23,750 for a 1995 RT/10 on December 28, 2021, and the most recent completed result it lists is a 1995 RT/10 at $42,000 on Bring a Trailer on September 19, 2026. For the second generation (1996-2002) the average is $70,751, split by sub-model into GTS coupes at $75,776, RT/10 roadsters at $50,638, the 1998 GT2 Championship Edition at $147,965 on only two tracked sales, and the 1999-2002 ACR at $86,215 on four; the lowest recorded second-generation sale is $23,250 for a 2000 RT/10 on July 13, 2023. Auction results at the top of the range turn on mileage and the blue-and-white livery: RM Sotheby's sold a 64-mile 1997 GTS in Viper Red, untitled until 2005, for $100,800 including premium at Miami in 2024, while a 952-mile 1997 GTS in blue with white stripes was estimated at $90,000 to $110,000 and went unsold at RM's Shift Online: North America sale, lot 152, as its lot page reads in September 2026. Hagerty's 2019 guide quoted $65,000 to $71,000 for a concours GTS and low-$40,000s for a driver RT/10, with a dealer source saying 1998 GT2 cars were already selling for more than double their original retail. First-generation roadsters, the 1996 'Gen 1.5' roadster and the 1997-2002 RT/10 sit at the bottom of the range; 1996-1997 blue-and-white GTS coupes, ACRs and the GT2 sit at the top.",
 "whatToLookFor": "Establish exactly which car it is, because the changes fall by model year and the sources count them differently. A 1996 roadster has the rear exhaust and 415 hp but no airbags, side glass or outside door handles; a 1997 roadster has them; a 1998 roadster has 450 hp. The VIN carries the body code in the seventh position, 5 for RT/10 and 9 for GTS, and the model year in the tenth. On second-generation cars the recall history matters more than on most modern cars: NHTSA campaigns 01V312000 and 01V313000 cover cracking of the rear differential mounting bracket welds and the steering rack mounting brackets on cars used extensively in track events, remedied with frame gussets and a reinforcement bracket from May 2002, and a forum consensus is that a car with the steering rack recall done has had the one major second-generation issue addressed. Check the frame at those two points regardless, because the ACR and the GT2 were sold as track cars. On the engine, Hagerty's specialist source draws a line at model year 2000: 1996-1999 cars have forged internals and the 708 camshaft, 2000-2002 cars have cast pistons, fast-bleed lifters and a milder cam, which matters to anyone planning forced induction and to anyone pricing a rebuild, since oil pumps, heads, timing covers, cranks and the 708 cam are no longer available from Mopar. Look under the bellhousing for fluid, which points to the throw-out bearing, and feel for a soft clutch that needs pumping. Check the cast power steering reservoir bracket, the plastic power steering pulley, and whether high-flow catalytic converters have been fitted. The clamshell hood is the expensive body panel, quoted by Hagerty's source at $10,000 to $12,000, so inspect the lower valance and hood gaps, and cycle the doors on a GTS for sagging hinges and worn lower seals. Original 17 in tire sizes are no longer made, so an early second-generation car on its factory wheels will need an 18 in or 19 in set to be usable.",
 "commonProblems": "The drivetrain is stout by 1990s supercar standards and the sources consulted describe no routine engine-out service. The recurring theme is heat. Hagerty's specialist source describes the stock second-generation catalytic converters as a wood stove at the front of the cabin, the sill-mounted pipes feeding the rear exhaust as hot enough to burn a leg on exit, and coolant temperatures of 220 to 225 degrees Fahrenheit on sunny days because the radiator has only 1.9 cubic feet of open space ahead of it; the usual fixes are a 170-degree thermostat, a fan controller that runs after shutdown, ceramic wrap on the sill pipes and high-flow cats. First-generation cars carry the door-sill heat warning from the factory. Throw-out bearing failure shows as fluid under the bellhousing and a clutch that needs several pumps, and left alone stops the car going into gear. The cast power steering reservoir bracket breaks and the reservoir vents through its cap onto the exhaust, which the ViperAlley forum blames for engine bay fires and which billet brackets and a vent redirect address. Forum reports also name plastic water pump impellers on some 2001 cars. Chrysler's own recalls, 01V312000 and 01V313000, address cracking of the rear differential mounting bracket welds and the steering rack mounting brackets on track-driven 1996-2000 cars. The crankshaft bolt is a right-hand thread that relies on 250 lb-ft of torque and was not always tight from the factory, a concern mainly for cars with boost added. GTS body issues: sagging door hinges, worn lower door seals, water leaks that stain the carpet, slow power windows, and a scarce, expensive clamshell hood.",
 "valueTrajectory": "The Viper's price history is a slow climb rather than a spike. Allpar records that buyers paid over the $50,000 sticker in the first year, then a steady rise in list price to $56,000 by 1995 and $64,000 for the roadster and $66,500 for the coupe by 1998, with the 1998 GT2 at $85,200. Cars then spent two decades as used exotics; classic.com's recorded lows of $23,750 for a 1995 RT/10 in December 2021 and $23,250 for a 2000 RT/10 in July 2023 show how far a driver-grade roadster fell. As of September 2026 the first-generation benchmark of $49,135 is trending up and sits close to the 1992 sticker in nominal dollars, while second-generation values have stratified: RT/10 roadsters average $50,638, GTS coupes $75,776, ACRs $86,215 and the GT2 $147,965, and the 64-mile 1997 GTS that made $100,800 at RM Sotheby's Miami in 2024 shows what near-zero mileage adds. The direction of travel since Hagerty's 2019 guide, which put a concours GTS at $65,000 to $71,000, is upward for coupes and special editions and flat for roadsters. The first-generation car's unfiltered specification, the 1996-1997 blue-and-white coupes and the sub-series with published counts (GT2, ACR, Final Edition) are where the sources show the market concentrating.",
 "overallConfidence": "medium",
 "sources": [
  {
   "ref": "epa-1992-viper",
   "title": "Gas Mileage of 1992 Dodge Viper",
   "url": "https://www.fueleconomy.gov/feg/bymodel/1992_Dodge_Viper.shtml",
   "publisher": "US Environmental Protection Agency / US Department of Energy",
   "sourceType": "government",
   "reliability": "high",
   "notes": "Confirms the 1992 Dodge Viper as a US model year with a 10-cylinder 8.0 L engine, six-speed manual and premium gasoline; current EPA figures 11 city, 20 highway, 14 combined mpg."
  },
  {
   "ref": "nhtsa-recalls-1996",
   "title": "NHTSA recalls by vehicle: 1996 Dodge Viper",
   "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=dodge&model=viper&modelYear=1996",
   "publisher": "National Highway Traffic Safety Administration",
   "sourceType": "government",
   "reliability": "high",
   "notes": "Lists DaimlerChrysler campaigns 01V313000 (cracking steering rack mounting brackets on cars used extensively in track events; field repair kit of lower frame rail gussets and a reinforcement bracket, owner notification from May 20, 2002) and 01V312000 (cracks at the welds of the rear differential mounting bracket; dealers reinforce the frame). The same API returns these campaigns for 1997-2000 model years and only an aftermarket master cylinder campaign for 1992-1995."
  },
  {
   "ref": "cd-1992-test",
   "title": "1992 Dodge Viper RT/10 Test: God's Own Dustbuster",
   "url": "https://www.caranddriver.com/reviews/a71350750/1992-dodge-viper-rt10-archive-test/",
   "publisher": "Car and Driver",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "March 1992 issue road test: base and as-tested price $54,640; 488 cu in / 7,990 cc pushrod V10, 400 hp at 4,600 rpm, 450 lb-ft at 3,600 rpm; six-speed manual; 3,450 lb curb weight; 0-60 in 4.6 s, quarter mile 13.2 s at 107 mph, 159 mph top speed, 193 ft from 70 mph, 0.85 g; 13.0 in discs, 275/40ZR-17 and 335/35ZR-17 Michelin XGT-Z; wheelbase 96.2 in, length 175.1 in; no windows or outside door handles, door-sill heat warning, federal door-lock requirement. Site returns 403 to non-browser fetchers."
  },
  {
   "ref": "cd-1996-test",
   "title": "1996 Dodge Viper RT/10 Archive Test",
   "url": "https://www.caranddriver.com/reviews/a45896128/1996-dodge-viper-rt10-archive-test/",
   "publisher": "Car and Driver",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "December 1995 issue, 1995 versus pre-production 1996 RT/10 back to back, with Viper chassis manager Pete Gladysz quoted: side exhausts dropped for European noise limits and OBD II, output up 15 hp; frame 60 lb lighter and 20 percent stiffer; aluminum suspension arms; upsized clutch, differential and half-shafts; base price $61,975, hardtop $2,500, A/C $1,200; 415 hp at 5,200 rpm, 488 lb-ft; 3,484 lb prototype about 60 lb overweight; 0-60 in 4.1 s, 12.6 s at 113 mph, 173 mph drag-limited. Site returns 403 to non-browser fetchers."
  },
  {
   "ref": "cd-1997-gts-comparison",
   "title": "Tested: 1997 Dodge Viper GTS vs. Porsche 911 Turbo S vs. Acura NSX-T",
   "url": "https://www.caranddriver.com/reviews/a35728264/1997-dodge-viper-gts-vs-porsche-911-turbo-s-vs-acura-nsx-t-comparison-test/",
   "publisher": "Car and Driver",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "July 1997 issue comparison: 1997 Viper GTS at $72,396 base and $74,016 as tested, 450 hp V10, 3,410 lb, 0-60 in 4.0 s, 100 mph in 8.8 s, quarter mile 12.2 s at 118 mph, 186 mph top speed, 177 ft from 70 mph, 0.95 g, 16 mpg observed; 490 lb-ft cited in text; won the comparison. Site returns 403 to non-browser fetchers."
  },
  {
   "ref": "wikipedia-sr1",
   "title": "Dodge Viper (SR I)",
   "url": "https://en.wikipedia.org/wiki/Dodge_Viper_(SR_I)",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Pointer and aggregate: 5,988 units for 1991-1995 production, model years 1992-1995, New Mack Assembly; project started 1988 by Bob Lutz and Tom Gale, 1989 NAIAS concept, Roy Sjoberg's 85-engineer Team Viper; 1991 Indy 500 pace car driven by Carroll Shelby after UAW complaints about the Stealth; on sale January 1992; 400 hp at 4,600 rpm, 450 lb-ft at 3,600 rpm; T56 six-speed. Used to locate the Car and Driver archive tests."
  },
  {
   "ref": "wikipedia-sr2",
   "title": "Dodge Viper (SR II)",
   "url": "https://en.wikipedia.org/wiki/Dodge_Viper_(SR_II)",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Pointer and aggregate: 10,422 units for 1995-2002 production, model years 1996-2002, Conner Avenue Assembly; RT/10 415 hp 1996-1997, 450 hp from 1998 and GTS, 460 hp GT2 and ACR; GTS introduced late 1996 with double-bubble roof and first airbags; ACR package from 1999 with A/C and audio deleted, 460 hp and 500 lb-ft; GT2 Champion Edition 100 cars; GTS-R developed with Reynard and Oreca. Used to locate the Autoweek and Allpar pages."
  },
  {
   "ref": "allpar-history",
   "title": "The Original Dodge Viper: 1992-2002 including RT/10 and GTS",
   "url": "https://www.allpar.com/d3/model/viphist.htm",
   "publisher": "Allpar",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Year-by-year account: 1989 concept, Lamborghini and Willem Weertman input on the aluminum V10 (about 150 lb saved), 400 hp / 450 lb-ft; first production cars December 1991 at New Mack Avenue; 155 cars first calendar year at $50,000, 1993 $50,700 and 895 built, 1994 $54,500 and 2,890 built with optional A/C at $1,200, 1995 $56,000 and 1,418 built; 1996 415 hp / 488 lb-ft, rear exhaust, tank cut from 22 to 19 gallons, over 1,200 roadsters, coupe figures not released; GTS paced the 1996 Indy 500, over 90 percent new; 9,500 built by 1998, fewer than 1,000 1998s with all but 74 coupes, $64,000 roadster / $66,500 coupe; 1999 ACR group 460 hp / 500 lb-ft; 2002 Final Edition 360 coupes; GTS-R 1997 FIA titles, Le Mans class wins and 2000 Daytona overall; Viper as a production-method testbed originally slated to end for 1997."
  },
  {
   "ref": "allpar-acr-gt2",
   "title": "Special 1998-99 Dodge Vipers - Viper GT2 and ACR",
   "url": "https://www.allpar.com/d3/model/vipacr.htm",
   "publisher": "Allpar",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "GT2 Championship Edition: 100 street-legal 1998 cars, GTS-R livery with dive plates, splitter and rear wing, 460 hp at 5,200 rpm and 500 lb-ft at 3,600 rpm versus 450 hp / 490 lb-ft, five-point harness, $85,200 including destination. ACR 1999: K&N element and smooth intake hoses for 10 hp, 60 lb removed (audio, A/C, fog lights), BBS 18 in wheels, Koni shocks, Meritor springs; spec table 460 hp at 5,200 rpm, 500 lb-ft at 3,700 rpm, 3,356 lb or 3,403 lb with A/C and audio; RTM composite body with SMC hood on a backbone tubular steel space frame."
  },
  {
   "ref": "autoweek-acr-1999",
   "title": "1999 Dodge Viper ACR: Cure for the common gold",
   "url": "https://www.autoweek.com/news/a2130131/1999-dodge-viper-acr-cure-common-gold/",
   "publisher": "Autoweek",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "October 1998 preview of the ACR: Chrysler expected to build 100 to 200 in the first quarter of 1999, some for collectors who owned a GT2; audio, A/C and fog lights removed to save 60 lb for a 3,356 lb curb weight, only 13 lb lighter than a GTS if re-contented; 460 hp from smooth intake hoses and a K&N element; GTS-R suspension parts and Meritor springs; Michelin Pilot Sport P275/35ZR-18 and P335/30ZR-18; no rear wing unlike the GT2; colors black, silver or red. Site returns 403 to non-browser fetchers."
  },
  {
   "ref": "stellantis-2003-srt10",
   "title": "2003 Dodge Viper SRT10 Gives New Meaning to Extreme Performance",
   "url": "https://media.stellantisnorthamerica.com/newsrelease.do?id=392",
   "publisher": "Stellantis North America media site",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Manufacturer press release: Viper introduced as a concept at the 1989 NAIAS, three-time FIA GT2 and Le Mans class champion; the 450 hp RT/10 Roadster and GTS Coupe as the outgoing cars; the GTS Coupe added in 1996 as the second chapter of Viper history; Jim Julow's statement of the 1992 purpose to re-orient the Dodge brand; the 2003 SRT10's 2.6 in longer wheelbase and 505 cu in engine as the replacement; Conner Avenue Assembly Plant."
  },
  {
   "ref": "stellantis-born-to-race",
   "title": "Walter P. Chrysler Museum Spotlights Dodge Viper Racing Heritage With Born to Race Exhibition",
   "url": "https://media.stellantisnorthamerica.com/newsrelease.do?id=9611",
   "publisher": "Stellantis North America media site",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Manufacturer release: public clamoring to buy after the 1989 concept; a small team given the resources and told to have it to market in less than three years; independent teams raced early cars; GTS-R introduced 1996 with a total of 57 built over eight years; badged Chrysler in Europe; factory backing ended 2001."
  },
  {
   "ref": "hagerty-gen2-guide",
   "title": "Buying a Gen II Dodge Viper doesn't have to be a snake pit of horrors",
   "url": "https://www.hagerty.com/media/buying-and-selling/1996-2002-dodge-viper-buyers-guide/",
   "publisher": "Hagerty Media",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "January 29, 2019 editorial guide (not a valuation page) by Benjamin Hunting quoting Scott Murray of Roe Racing and dealer Bernie Katz: 1996 'Gen 1.5' roadsters; production counts hard to lock down, just over 10,000 second-gen cars, near double gen one; 102 GT2 cars including two undocumented executive cars; 114 1997 RT/10s; slightly more than 200 ACRs a year 1999-2002; 435 blue-and-white 1997 GTS; 360 Final Edition with 34 ACRs; VIN decoding; 1996-99 forged internals and 708 cam versus 2000-02 cast pistons; heat from cats and sill pipes, 220-225 F coolant, throw-out bearing, power steering bracket and pulley, crank bolt, hood at $10,000-$12,000, unavailable 17 in tires; 2019 prices $65,000-$71,000 concours GTS and low $40,000s driver RT/10."
  },
  {
   "ref": "classic-viper-gen1",
   "title": "Dodge Viper - 1st Gen Market",
   "url": "https://www.classic.com/m/dodge/viper/1st-gen/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Fetched September 2026: CMB $49,135 trending up; average price $49,877; lowest recorded sale $23,750 for a 1995 RT/10 on December 28, 2021; recent results include a 1995 RT/10 at $42,000 on Bring a Trailer, September 19, 2026; 22 for sale. Cloudflare challenge to non-browser fetchers."
  },
  {
   "ref": "classic-viper-gen2",
   "title": "Dodge Viper - 2nd Gen Market",
   "url": "https://www.classic.com/m/dodge/viper/2nd-gen/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Fetched September 2026: average price $70,751; sub-model benchmarks GTS 1996-2002 $75,776 (20 tracked), RT/10 1996-2002 $50,638 (18), GT2 Commemorative 1998 $147,965 (2), ACR 1999-2002 $86,215 (4); lowest recorded sale $23,250 for a 2000 RT/10 on July 13, 2023. Cloudflare challenge to non-browser fetchers."
  },
  {
   "ref": "rm-miami-2024-gts",
   "title": "1997 Dodge Viper GTS, Miami 2024, Lot 157",
   "url": "https://rmsothebys.com/auctions/mi24/lots/r0005-1997-dodge-viper-gts/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold $100,800 USD (RM's published figure, premium included) at Miami 2024. Viper Red 1997 GTS with 64 miles, held as a dealership display and not titled until 2005; catalog cites a 12.2 s quarter mile at 119 mph and over 180 mph, GTS introduced four years after the roadster, inspired by the Shelby Daytona coupe."
  },
  {
   "ref": "rm-shift-online-gts",
   "title": "1997 Dodge Viper GTS, Shift Online: North America, Lot 152",
   "url": "https://rmsothebys.com/auctions/0225/lots/r0044-1997-dodge-viper-gts/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Estimate $90,000-$110,000 USD, not sold. 952-mile 1997 GTS in optional Viper Blue with white stripes, single owner until 2023; catalog rates the engine at 450 hp and 490 lb-ft, 0-60 in 4.0 s and a top speed approaching 180 mph. Lot page carries no sale date; cited for the estimate and the no-sale."
  },
  {
   "ref": "viperalley-problems",
   "title": "Common Viper Problems?",
   "url": "https://www.viperalley.com/threads/common-viper-problems.36017/",
   "publisher": "ViperAlley forum",
   "sourceType": "club-forum",
   "reliability": "low",
   "notes": "2005 owner thread: water pumps with bad impellers on 2001 cars; power steering cap falling off and fluid igniting on the header, cured by an aftermarket vent; body, paint and major components expensive while minor repairs are not; door hinge wiring, sagging doors and hood gaps; a member's view that with the steering rack recall done the plastic impeller is the only other major Gen II issue. Forum figures, labeled as such."
  }
 ],
 "claims": [
  {
   "section": "history",
   "claimText": "The Viper project began in 1988 when Chrysler president Bob Lutz suggested to Tom Gale that the company build a modern Cobra; the concept was shown at the January 1989 North American International Auto Show in Detroit, and public demand led Chrysler to give a small team the resources to build it within three years.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["wikipedia-sr1", "stellantis-born-to-race", "allpar-history"],
   "evidence": [
    { "ref": "wikipedia-sr1", "quote": "The project was started in 1988 at Chrysler's Advanced Design Studios, when then-president Bob Lutz suggested to Tom Gale that the company should consider the production of a modern Cobra" },
    { "ref": "stellantis-born-to-race", "quote": "Immediately upon introduction of the Dodge Viper concept car at the 1989 North American International Auto Show in Detroit, the public was clamoring to buy" },
    { "ref": "allpar-history", "quote": "The first Viper concept debuted at the 1989 Detroit Auto Show, followed by prototypes" }
   ]
  },
  {
   "section": "history",
   "claimText": "A pre-production Viper paced the 1991 Indianapolis 500 with Carroll Shelby driving, the first production RT/10s left the New Mack Avenue plant in December 1991, and the car went on sale in January 1992.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["wikipedia-sr1", "allpar-history"],
   "evidence": [
    { "ref": "wikipedia-sr1", "quote": "It was later introduced in 1991 at the Indianapolis 500 of that year with a pre-production car driven by Carroll Shelby" },
    { "ref": "allpar-history", "quote": "in December of 1991, the first red Viper RT/10 production vehicles rolled off the New Mack Avenue assembly line" }
   ]
  },
  {
   "section": "history",
   "claimText": "Dodge's stated purpose for the Viper in 1992 was to re-orient what the brand was about with a purpose-built, outrageous street car; Allpar adds that internally it was a testbed for low-cost production methods and was originally meant to be replaced for 1997.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["stellantis-2003-srt10", "allpar-history"],
   "evidence": [
    { "ref": "stellantis-2003-srt10", "quote": "Back in 1992, the purpose was to re-orient what the Dodge brand was all about" },
    { "ref": "allpar-history", "quote": "the Viper was a production technique testbed, to see if the corporation really could develop new methods of manufacture and assembly to lower the cost of a vehicle" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 1992-1995 RT/10 used a 488 cu in (7,990 cc) pushrod aluminum V10 rated at 400 hp at 4,600 rpm and 450 lb-ft at 3,600 rpm, driving through a six-speed manual transmission.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["cd-1992-test", "wikipedia-sr1", "allpar-history"],
   "evidence": [
    { "ref": "cd-1992-test", "quote": "Displacement: 488 in 3 , 7990 cm 3 Power: 400 hp @ 4600 rpm Torque: 450 lb-ft @ 3600 rpm" },
    { "ref": "wikipedia-sr1", "quote": "The V10 engine generated a maximum power output of 400 hp (298 kW; 406 PS) at 4,600 rpm and 450 lb⋅ft (610 N⋅m) at 3,600 rpm" },
    { "ref": "allpar-history", "quote": "In the end, the Viper pushed out 400 horsepower and 450 lb-ft on mid-grade (89 octane) fuel" }
   ]
  },
  {
   "section": "specs",
   "claimText": "Car and Driver's March 1992 test of the RT/10 recorded a 3,450 lb curb weight, 0-60 mph in 4.6 seconds, a quarter mile in 13.2 seconds at 107 mph and a 159 mph top speed; it is the only period instrumented test consulted here, so the figures are single-sourced.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["cd-1992-test"],
   "evidence": [
    { "ref": "cd-1992-test", "quote": "Curb Weight: 3450 lb C/D TEST RESULTS 60 mph: 4.6 sec 100 mph: 11.7 sec 1/4-Mile: 13.2 sec @ 107 mph" }
   ]
  },
  {
   "section": "production",
   "claimText": "The 1992 RT/10 carried a base price of $54,640 in Car and Driver's March 1992 test panel; Allpar gives a $50,000 sales price for the first year, $50,700 for 1993, $54,500 for 1994 and $56,000 for 1995, and neither source explains the difference between its 1992 figure and the other's.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["cd-1992-test", "allpar-history"],
   "conflictNote": "Car and Driver's specification panel states Base/As Tested: $54,640/$54,640 for the 1992 car. Allpar states a $50,000 sales price for the first calendar year and $50,700 for 1993. The $4,640 gap is not explained by either page; it is not resolved here and no single 1992 price is asserted.",
   "evidence": [
    { "ref": "cd-1992-test", "quote": "Base/As Tested: $54,640/$54,640" },
    { "ref": "allpar-history", "quote": "155 Vipers were made (both 1992 and early 1993s), with the $50,000 sales price often exceeded by buyers. For 1993, the price rose somewhat, to $50,700" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 1992 Viper was a US model year car rated by the EPA on premium gasoline; fueleconomy.gov currently lists 11 mpg city, 20 highway and 14 combined, while Car and Driver's 1992 panel printed 14 city and 19 highway, and the two pages do not state why the figures differ.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["epa-1992-viper", "cd-1992-test"],
   "conflictNote": "fueleconomy.gov states Combined MPG: 14, City MPG: 11, Highway MPG: 20 for the 1992 Dodge Viper. Car and Driver's March 1992 panel states EPA City/Highway: 14/19 mpg. Neither page says which rating method it used; not resolved here.",
   "evidence": [
    { "ref": "epa-1992-viper", "quote": "1992 Dodge Viper 10 cyl, 8.0 L, Manual 6-spd Premium Gasoline" },
    { "ref": "cd-1992-test", "quote": "EPA FUEL ECONOMY City/Highway: 14/19 mpg" }
   ]
  },
  {
   "section": "history",
   "claimText": "For 1996 the side exhausts were dropped to meet European noise limits and the US OBD II rule, which raised output by 15 hp to 415 hp; the frame lost 60 lb and gained 20 percent torsional stiffness, suspension arms went to aluminum, and Car and Driver recorded 0-60 mph in 4.1 seconds and a 173 mph drag-limited top speed against a $61,975 base price.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["cd-1996-test", "wikipedia-sr2", "allpar-history"],
   "evidence": [
    { "ref": "cd-1996-test", "quote": "For both noise and OBD II, the side exhausts had to go. Everybody wins: the new system pipes the noise far behind the cockpit" },
    { "ref": "wikipedia-sr2", "quote": "This reduced back pressure which increased the power to 415 hp (309 kW; 421 PS) and the torque to 488 lb⋅ft (662 N⋅m)" },
    { "ref": "allpar-history", "quote": "A major refresh in 1996 boosted horsepower to 415 and torque to 488 pound-feet" }
   ]
  },
  {
   "section": "history",
   "claimText": "The GTS coupe was launched in spring 1996, paced the Indianapolis 500 that year, and brought 450 hp, airbags and the double-bubble roof; more than 90 percent of its parts were new despite the shared look.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["allpar-history", "wikipedia-sr2", "stellantis-2003-srt10"],
   "evidence": [
    { "ref": "allpar-history", "quote": "In Spring 1996, Dodge launched the Dodge Viper GTS Coupe, using it to pace the Indianapolis 500" },
    { "ref": "wikipedia-sr2", "quote": "Over 90% of the GTS contained new parts compared to the RT/10 despite similar looks" },
    { "ref": "stellantis-2003-srt10", "quote": "The second chapter of Viper history was written when the GTS Coupe was added in 1996" }
   ]
  },
  {
   "section": "specs",
   "claimText": "Car and Driver's July 1997 comparison recorded the 450 hp Viper GTS at 3,410 lb, $72,396 base, 0-60 mph in 4.0 seconds, a 12.2-second quarter mile at 118 mph and 186 mph; RM Sotheby's catalog descriptions rate the same engine at 450 hp and 490 lb-ft.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["cd-1997-gts-comparison", "rm-shift-online-gts", "rm-miami-2024-gts"],
   "evidence": [
    { "ref": "cd-1997-gts-comparison", "quote": "450-hp V-10, 6-speed manual, 3410 lb Base/as-tested price: $72,396/$74,016" },
    { "ref": "rm-shift-online-gts", "quote": "8.0-liter V-10 engine rated at 450 hp and 490 lbs-ft of torque" },
    { "ref": "rm-miami-2024-gts", "quote": "Its ability to run a ¼-mile in 12.2 seconds at 119 mph and top out at over 180 mph" }
   ]
  },
  {
   "section": "production",
   "claimText": "First-generation production is not agreed: Wikipedia gives 5,988 units for 1991-1995, while Allpar's year-by-year figures of 155, 895, 2,890 and 1,418 sum to 5,358, and Hagerty says only that the second generation was a near doubling of the first.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["wikipedia-sr1", "allpar-history", "hagerty-gen2-guide"],
   "conflictNote": "Wikipedia's SR I infobox states 5,988 units. Allpar states 155 in the first calendar year, 895 for 1993, 2,890 for 1994 and 1,418 for 1995, a sum of 5,358. Hagerty states exact numbers are difficult to lock down because sources mix calendar and model years. The 630-car gap is not resolved by any source consulted here, so productionTotal is null.",
   "evidence": [
    { "ref": "wikipedia-sr1", "quote": "Production 1991–1995 5,988 units Model years 1992–1995" },
    { "ref": "allpar-history", "quote": "There were no major changes for 1995 other than a passenger asisst handle, seat-cushion storage pockets, and a new price of $56,000. Production fell to 1,418" },
    { "ref": "hagerty-gen2-guide", "quote": "Exact production numbers are difficult to lock down" }
   ]
  },
  {
   "section": "production",
   "claimText": "Second-generation production was just over 10,000 cars, with Wikipedia giving 10,422; Allpar records over 1,200 roadsters for 1996 with coupe figures unreleased, fewer than a thousand 1998 cars of which all but 74 were coupes, and Hagerty puts the 1997 RT/10 at 114 cars.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["wikipedia-sr2", "hagerty-gen2-guide", "allpar-history"],
   "evidence": [
    { "ref": "wikipedia-sr2", "quote": "Production 1995–2002 10,422 units" },
    { "ref": "hagerty-gen2-guide", "quote": "Dodge sold just over 10,000 second-gen Vipers altogether" },
    { "ref": "allpar-history", "quote": "Fewer than a thousand 1998s were made; all but 74 of them were coupes" }
   ]
  },
  {
   "section": "production",
   "claimText": "The 1998 GT2 Championship Edition, built to mark the 1997 FIA GT2 title, had 460 hp, GTS-R style aerodynamics and a $85,200 price including destination; Allpar and Wikipedia say 100 were built, Hagerty says 102 including two undocumented cars given to executives.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["allpar-acr-gt2", "hagerty-gen2-guide", "wikipedia-sr2"],
   "conflictNote": "Allpar states Chrysler built 100 street-legal 1998 GT2 Championship Edition Vipers and Wikipedia states 100 cars were produced. Hagerty states only 102 were built in 1998 including two undocumented examples given to executives. Not resolved by any source consulted here.",
   "evidence": [
    { "ref": "allpar-acr-gt2", "quote": "Chrysler built 100 street-legal 1998 GT2 Championship Edition Vipers" },
    { "ref": "hagerty-gen2-guide", "quote": "only 102 were built in 1998 (including two undocumented examples that were given to executives)" },
    { "ref": "wikipedia-sr2", "quote": "100 cars were produced. Contrary to popular belief, the car was not built to meet any homologation requirements" }
   ]
  },
  {
   "section": "production",
   "claimText": "The ACR arrived for 1999 with 460 hp from smooth intake hoses and a K&N element, 60 lb saved by deleting the audio system, air conditioning and fog lights for a 3,356 lb curb weight, BBS 18 in wheels, Koni shocks, Meritor springs and a five-point harness; Chrysler expected to build 100 to 200 in early 1999 and Hagerty says slightly more than 200 were sold in each year through 2002.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["autoweek-acr-1999", "allpar-acr-gt2", "hagerty-gen2-guide", "wikipedia-sr2"],
   "evidence": [
    { "ref": "autoweek-acr-1999", "quote": "Chrysler expects some of the 100 to 200 Viper ACRs it will start building in the first quarter of 1999 to be sold to collectors" },
    { "ref": "allpar-acr-gt2", "quote": "60 pounds were cut by removing the audio system, air conditioning, and fog lights" },
    { "ref": "hagerty-gen2-guide", "quote": "Even the ACR is more plentiful, with slightly more than 200 sold in each year from 1999" },
    { "ref": "wikipedia-sr2", "quote": "The Viper ACR was introduced in 1999, as an optional performance package" }
   ]
  },
  {
   "section": "production",
   "claimText": "The run closed with 360 Final Edition coupes for 2002, red with white stripes and special badging, of which 34 were ACRs.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["allpar-history", "hagerty-gen2-guide"],
   "evidence": [
    { "ref": "allpar-history", "quote": "a GTS Final Edition was released, with 360 Viper Coupes carrying red paint, white stripes, and special badging" },
    { "ref": "hagerty-gen2-guide", "quote": "The final 360 Vipers built for 2002 were sold in red with white stripes and dubbed the Final Edition. Thirty-four of these were ACRs" }
   ]
  },
  {
   "section": "history",
   "claimText": "The GTS-R race car was introduced in 1996, 57 were built over eight years according to Stellantis, and it won the 1997 FIA GT2 championship, class victories at Le Mans, the American Le Mans championship and, with Team Oreca in 2000, the 24 Hours of Daytona outright.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["stellantis-born-to-race", "allpar-history", "allpar-acr-gt2", "stellantis-2003-srt10"],
   "evidence": [
    { "ref": "stellantis-born-to-race", "quote": "the Dodge Viper GTS-R was introduced in 1996. A total of 57 of these elite vehicles were manufactured over the next eight years" },
    { "ref": "allpar-history", "quote": "The Viper GTS-R won a class victory at LeMans, four FIA championships, and the American LeMans championship by 2000, when Team ORECA won the 24 Hours of Daytona" },
    { "ref": "allpar-acr-gt2", "quote": "It clinched the 1997 FIA GT2 championship and the 1998 24 Hours of Le Mans in the GT2 Class" },
    { "ref": "stellantis-2003-srt10", "quote": "It has also captured its share of trophies on the track as a three-time FIA GT2 and Le Mans class champion" }
   ]
  },
  {
   "section": "problems",
   "claimText": "NHTSA recall campaigns 01V313000 and 01V312000 cover second-generation Vipers used extensively in track events, for cracking of the steering rack mounting brackets and of the rear differential mounting bracket welds, remedied with frame gussets and a reinforcement bracket from May 2002; owners on ViperAlley treat the steering rack recall as the one major Gen II issue to confirm.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["nhtsa-recalls-1996", "viperalley-problems"],
   "evidence": [
    { "ref": "nhtsa-recalls-1996", "quote": "PASSENGER VEHICLES USED EXTENSIVELY IN TRACK TYPE RACING EVENTS AND SUBJECTED TO AGGRESSIVE DRIVING CONDITIONS COULD EXPERIENCE CRACKS AT THE WELDS OF THE REAR DIFFERENTIAL MOUNTING BRACKET" },
    { "ref": "viperalley-problems", "quote": "as long as the car had the steering rack recall done, the only other major Gen II issue worth being concerned about is the plastic impeller thing" }
   ]
  },
  {
   "section": "problems",
   "claimText": "Heat is the recurring second-generation complaint: stock catalytic converters and sill-mounted pipes heat the cabin and can burn a leg on exit, coolant runs at 220 to 225 degrees Fahrenheit on sunny days because the radiator has only 1.9 cubic feet of open space, and the throw-out bearing leaks at the bellhousing before the clutch fails; the cast power steering reservoir bracket and vented cap are also cited, with forum reports of fluid igniting on the header.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["hagerty-gen2-guide", "viperalley-problems"],
   "evidence": [
    { "ref": "hagerty-gen2-guide", "quote": "a tendency to spike coolant temps between 220 225 degrees Fahrenheit on sunny summer days due to a mere 1.9 cubic feet of open space available to the radiator" },
    { "ref": "viperalley-problems", "quote": "when the power steering cap falls off and the fluid ignites on the exhaust header" }
   ]
  },
  {
   "section": "problems",
   "claimText": "Hagerty's specialist source divides the second-generation engine at model year 2000: 1996-1999 cars have forged internals and the 708 camshaft, 2000-2002 cars have cast pistons and a milder cam, and the 708 cam and several major engine parts are no longer available from Mopar; the clamshell hood is quoted at $10,000 to $12,000 and the original 17 in tire sizes are no longer made. Single-sourced to that guide.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["hagerty-gen2-guide"],
   "evidence": [
    { "ref": "hagerty-gen2-guide", "quote": "Prices are crazy ridiculous between $10K $12K to replace it because it's such a low-production piece" }
   ]
  },
  {
   "section": "market",
   "claimText": "As of September 2026 classic.com's first-generation Viper benchmark is $49,135 and trending up with an average price of $49,877 and a recorded low of $23,750 for a 1995 RT/10 in December 2021; the second-generation average is $70,751, with GTS at $75,776, RT/10 at $50,638, GT2 at $147,965 and ACR at $86,215, and a recorded low of $23,250 for a 2000 RT/10 in July 2023.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["classic-viper-gen1", "classic-viper-gen2"],
   "evidence": [
    { "ref": "classic-viper-gen1", "quote": "The average price of a Dodge Viper - 1st Gen is $49,877" },
    { "ref": "classic-viper-gen2", "quote": "The lowest recorded sale price was $23,250 for a 2000 Dodge Viper RT/10 on July 13, 2023" }
   ]
  },
  {
   "section": "market",
   "claimText": "RM Sotheby's sold a 64-mile Viper Red 1997 GTS, kept on dealership display and not titled until 2005, for $100,800 at Miami in 2024, while a 952-mile blue-and-white 1997 GTS estimated at $90,000 to $110,000 went unsold at its Shift Online: North America sale.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["rm-miami-2024-gts", "rm-shift-online-gts"],
   "evidence": [
    { "ref": "rm-miami-2024-gts", "quote": "Reportedly the car was not even actually titled until 2005" },
    { "ref": "rm-shift-online-gts", "quote": "Showing just 952 miles at cataloguing time; single ownership until 2023" }
   ]
  },
  {
   "section": "market",
   "claimText": "Hagerty's January 2019 guide put a concours-quality GTS at $65,000 to $71,000 and a driver RT/10 in the low $40,000s, with a dealer source saying 1996 and 1997 blue-and-white coupes were in the most demand and 1998 GT2 cars were selling for more than double their original retail.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["hagerty-gen2-guide"],
   "evidence": [
    { "ref": "hagerty-gen2-guide", "quote": "the 1998 GT2 cars are selling for more than double what they originally retailed for. The RT/10 remains the most affordable entry point into Viper ownership" }
   ]
  },
  {
   "section": "history",
   "claimText": "The 1996 roadster, known in the community as the Gen 1.5, mixed the new frame and rear exhaust with first-generation equipment, and true second-generation roadsters with airbags, power windows and door handles followed for 1997.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["hagerty-gen2-guide", "allpar-history", "cd-1996-test"],
   "evidence": [
    { "ref": "hagerty-gen2-guide", "quote": "in 1996 Dodge built RT/10 models that weren't true Gen II cars. Known as Gen 1.5" },
    { "ref": "allpar-history", "quote": "For 1997, the RT/10 gained blue-with-white-stripes paint and a Viper Red color scheme, an optional gold wheel package, and newly mandated driver and passenger airbags, along with power windows" },
    { "ref": "cd-1996-test", "quote": "There are no side exhausts on the new car, racing stripes now appear on both white and black cars, and wheels are different" }
   ]
  }
 ]
};
