/**
 * Researched model draft - Ford Mustang "Fox Body" third generation (1979-1993).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedMustangFoxBody = {
 "slug": "ford/mustang-fox-body",
 "make": "Ford",
 "model": "Mustang Fox Body",
 "generation": "Third generation, US market, 1979-1993 model years",
 "generationCode": "Fox platform",
 "trim": "GT, LX 5.0, SVO, SVT Cobra and Cobra R",
 "yearStart": 1979,
 "yearEnd": 1993,
 "bodyStyles": [
  "2-door notchback coupe (LX, and the 1979-1986 base and Ghia cars)",
  "3-door hatchback (LX, GT, SVO, SVT Cobra and Cobra R)",
  "2-door convertible (from the 1983 model year; LX and GT)"
 ],
 "engines": [
  "4,942 cc (302 cu in) Windsor pushrod V8, '5.0 High Output': 157 hp two-barrel carburetor for 1982, 210 hp four-barrel with roller camshaft for 1985, 200 hp sequential multiport fuel injection for 1986, 225 hp at 4,200 rpm and 300 lb-ft at 3,200 rpm from 1987, re-rated to 205 hp and 275 lb-ft for 1993",
  "4,942 cc (302 cu in) SVT Cobra V8 with GT-40 cast iron heads and intake, 235 hp at 4,600 rpm, torque quoted at 280 or 285 lb-ft at 4,000 rpm depending on the source, 1993 only",
  "2,301 cc (140 cu in) Lima SOHC turbocharged and intercooled inline-four, SVO, 1984-1986: 175 hp for 1984 (one source says 170), 205 hp from mid-1985, 200 hp for 1986",
  "2,301 cc (140 cu in) Lima SOHC naturally aspirated inline-four, base engine: 90 hp at 3,800 rpm and 130 lb-ft at 2,800 rpm in 1990, 105 hp and 140 lb-ft from 1991 with the twin-plug head"
 ],
 "productionTotal": null,
 "productionNotes": "No single figure is asserted here because the two generation totals in circulation do not agree. Wikipedia's third-generation production table, which it attributes to a per-year tally by body style, adds up to 2,518,948 cars for the 1979-1993 model years. Classic Industries' history of the Fox body states that Ford sold 2,608,812 units. The gap is 89,864 cars, roughly a full model year's worth, and nothing consulted here explains it; the likelier causes are whether Mexican-built cars, fleet SSP police cars and calendar-year versus model-year counting are included, but that is a guess and is labeled as one. The per-year figures are also contested: MustangSpecs.com states 128,189 cars for 1990, while Wikipedia's table gives 115,230 for the same model year, and neither cites its source in a way that lets the reader choose. The variant counts are on firmer ground. Wikipedia's SVO article gives 9,844 SVOs across 1984 (4,508), 1985 (1,954) and 1986 (3,382); that figure is single-sourced here and is not confirmed by a second fetched page. The 1993 SVT Cobra count of 4,993 hatchbacks appears in both Wikipedia's SVT Cobra article and Steeda's 1993 model summary, and the Cobra R count of 107 is stated by both of those plus autoevolution, which adds that Ford planned 100 and honored the 107 orders it received. The 1990 7-Up edition LX 5.0 convertible run of 4,103 cars appears in both MustangSpecs and Wikipedia. Ford's own heritage material for this generation could not be fetched in this session, so no manufacturer figure is cited; the counts above come from an encyclopedia, a parts retailer's history and specialist sites and should be read at that level of reliability. Every Fox-body Mustang was a US-market car sold across all fifty states; the question of what was federalized does not arise.",
 "notableTrims": [
  {
   "name": "1982 GT 5.0 HO",
   "note": "The car that brought the GT badge back after 13 years, advertised as 'The Boss is Back'. Its 157 hp two-barrel 302 sounds modest now, but the 240 lb-ft of torque in a light unibody made it the fastest domestic car of its year and started the horsepower recovery of the 1980s."
  },
  {
   "name": "SVO (1984-1986)",
   "note": "Special Vehicle Operations' turbocharged, intercooled 2.3-liter four with Koni dampers, four-wheel disc brakes and 16-inch wheels, priced at $15,585 in mid-1984, roughly double a base Mustang and $6,000 above a GT. 9,844 built. The mid-1985 car brought flush composite headlamps and 205 hp; the price kept most buyers in a V8 GT."
  },
  {
   "name": "1987-1993 GT 5.0",
   "note": "The aero-nose restyle with the 225 hp, 300 lb-ft fuel-injected HO. GTs carried lower body skirting, round fog lamps and turbine wheels; that body kit has aged badly enough that many buyers now prefer the plainer LX."
  },
  {
   "name": "LX 5.0 (1987-1993)",
   "note": "Same engine and driveline as the GT in the plain body, 50 to 250 lb lighter depending on options, and available as a notchback coupe the GT never was. Road & Track's Colin Comer calls the LX 5.0 the collector's choice of the aero years, and the notchback is the one drag racers and police fleets wanted."
  },
  {
   "name": "1990 7-Up LX 5.0 convertible",
   "note": "4,103 Deep Emerald Green convertibles with white tops and white leather, built for a 7-Up sponsored NCAA promotion that was canceled before it ran. Ford sold the cars through dealers instead; the split was 2,743 automatics and 1,360 five-speeds."
  },
  {
   "name": "1993 SVT Cobra",
   "note": "The first product of Ford's Special Vehicle Team: GT-40 heads and intake for 235 hp, rear disc brakes, 17-inch wheels and subdued styling, listed at $18,505. 4,993 built, all hatchbacks, in Vibrant Red, Teal Metallic or Black."
  },
  {
   "name": "1993 SVT Cobra R",
   "note": "107 cars, all Vibrant Red, at $25,692, the most expensive 1993 Mustang. No radio, air conditioning, rear seat or fog lamps; larger brakes, Koni dampers, a bigger aluminum radiator and an oil cooler. Ford planned 100 and built to the orders it received."
  }
 ],
 "specs": {
  "layout": "Front-mounted longitudinal engine, rear-wheel drive",
  "chassis": "Ford Fox platform steel unibody shared with the Fairmont and Zephyr, front MacPherson struts, four-link live rear axle (8.8-inch on the V8 cars)",
  "wheelbase": "100.1 in (2,543 mm), 1990 notchback and hatchback per MustangSpecs",
  "engine": "302 cu in (4,942 cc) pushrod V8, sequential multiport fuel injection from 1986; 2.3-liter turbo four in the SVO",
  "power": "225 hp at 4,200 rpm for the 1987-1992 5.0 HO; re-rated 205 hp for 1993; 235 hp at 4,600 rpm for the 1993 SVT Cobra; 157 hp for 1982 and 210 hp for 1985",
  "torque": "300 lb-ft at 3,200 rpm for the 1987-1992 5.0 HO; 275 lb-ft for 1993; SVT Cobra quoted at 280 lb-ft (SVT Cobra article, autoevolution, Steeda) or 285 lb-ft (third-generation article) at 4,000 rpm",
  "transmission": "Borg-Warner T-5 five-speed manual or Ford AOD four-speed automatic on the 5.0; SVO and Cobra were manual only",
  "weight": "1990 curb weights per MustangSpecs: 2,722 lb notchback, 2,791 lb hatchback, 3,044 lb convertible; SVO 2,987 lb per Wikipedia",
  "acceleration": "0-60 mph in 5.9 seconds for the 1993 SVT Cobra per Wikipedia's SVT Cobra article; 7.5 seconds for the 1984.5 SVO on the 3.45:1 axle; both single-sourced",
  "brakes": "Front discs and rear drums on GT and LX; four-wheel discs on the SVO; rear discs on the 1993 Cobra with larger ventilated discs on the Cobra R",
  "wheels": "15-inch turbine alloys on the 1987 GT; 16-inch five-spoke 'star' alloys on 1991-1993 V8 cars; 16 x 7-inch on the SVO; 17-inch unidirectional on the 1993 Cobra, a factory Mustang first",
  "fuel_economy_epa": "1993 Mustang 5.0 five-speed manual: 15 mpg city, 22 mpg highway, 17 mpg combined on the EPA's revised (2008-method) scale, regular gasoline",
  "safety": "Driver-side airbag standard from the 1990 model year to satisfy the federal passive-restraint requirement",
  "body_styles": "Notchback coupe, hatchback and, from 1983, convertible; SVO, Cobra and Cobra R were hatchback only",
  "assembly": "Dearborn, Michigan (River Rouge) and Milpitas, California (San Jose Assembly) per Wikipedia; the last car built August 26, 1993",
  "price_when_new": "1990 base prices $9,753 coupe, $10,259 hatchback, $14,810 convertible; 1993 SVT Cobra $18,505; 1993 Cobra R $25,692; 1984.5 SVO $15,585"
 },
 "summary": "The third-generation Ford Mustang (1979-1993 model years) took the name back from the Mustang II on a platform designed to carry a family sedan. Ford built it on the Fox unibody it had already used for the Fairmont and Mercury Zephyr to hold down cost, then spent fourteen years improving the one thing that mattered: the 302 cu in V8. The 5.0 High Output returned with the GT in 1982 at 157 hp, went to a roller-cam 210 hp in 1985, gained port fuel injection in 1986 and reached 225 hp and 300 lb-ft with the 1987 aero-nose restyle, where it stayed until a re-rating to 205 hp in 1993. Around that engine Ford sold three body styles, a turbocharged four-cylinder SVO that most buyers ignored, a plain LX 5.0 that collectors now prefer to the skirted GT, and, in the final year, the 4,993-car SVT Cobra and the 107-car Cobra R. Ford very nearly replaced the car with a front-drive Mazda-based coupe in the late 1980s; buyer protest turned that car into the Probe and kept the rear-drive Mustang alive. Total production is stated as 2,518,948 or 2,608,812 depending on the source, and the disagreement is not resolved here.",
 "history": "## Why This Car Exists\n\nThe Mustang II had sold well and been liked by almost nobody, and by the mid-1970s Ford needed a Mustang that could meet federal bumper and emissions rules without embarrassing the badge. The cheapest route was a platform already in the pipeline. Ford's Fox architecture had been laid out, in the company's own phrase, as 'a one-size-fits-all' platform 'to serve as a two-door sports car and a four-door family car', and it reached showrooms first under the 1978 Fairmont and Mercury Zephyr. The 1979 Mustang followed a year later with a return to the long-hood, short-deck proportions the Mustang II had abandoned, and paced the Indianapolis 500 in its first year. The engine lineup was the era's: a 2.3-liter four, a turbocharged version of it, a six, and a 140 hp 302 V8.\n\n## The Boss Is Back\n\nThe generation's turning point came in 1982, when Ford dropped the ineffective turbo four from the performance slot and brought back the GT badge after thirteen years. Its engine was a re-engineered 302, now badged 5.0 High Output, with a hotter camshaft from a 1973 351 Torino, a larger two-barrel carburetor and freer exhaust, rated at 157 hp and 240 lb-ft. The advertising line was 'The Boss is Back', and Ford claimed the car would 'consistently blow the new Z/28 Camaro into the shadows'. The convertible returned in 1983. The HO then improved every year or two: a roller camshaft and 210 hp for 1985 (the last carbureted Mustang V8), then sequential port fuel injection with a conservative 200 hp rating for 1986. Alongside it, Ford's Special Vehicle Operations group under Michael Kranefuss built the SVO: a turbocharged, intercooled 2.3-liter four with Koni dampers, four-wheel disc brakes and 16-inch wheels, listed at $15,585 in April 1984, more than double a base Mustang and $6,000 above a GT.\n\n## The Aero Car and the 225 hp Engine\n\nFor 1987 Ford restyled the front end to match the SVO's flush composite headlamps, gave the interior a new dash and console, and pared the range to LX and GT. The 5.0 HO gained E7 truck cylinder heads after the 1986 swirl-port design underperformed, and its rating went to 225 hp and 300 lb-ft of torque. Road & Track's Colin Comer later wrote that the torque figure, more than the horsepower, 'was the key to the Mustang's performance'. The GT wore lower body skirting, round fog lamps and turbine wheels; the LX carried the same driveline without the kit, up to 250 lb lighter, and could be had as a notchback coupe the GT could not. The 1990 model year brought a standard driver's airbag to satisfy the federal passive-restraint rule, and a 4,103-car run of Deep Emerald Green LX 5.0 convertibles built for a 7-Up promotion that was canceled before it ran.\n\n## The Car Ford Nearly Replaced\n\nBy the mid-1980s Mustang sales were still above 100,000 a year but far below the early Fox years, and Ford concluded the car had lost its place. The plan was to replace the rear-drive Mustang with a Mazda-derived front-wheel-drive coupe. Enthusiast mail changed the decision: the rear-drive car stayed and the front-drive coupe went on sale in 1989 as the Ford Probe, next to the Mustang it had been meant to kill. The reprieve came with little money attached. Changes from 1990 to 1993 were mostly visual, base prices passed $10,000 in 1991, and by Wikipedia's table production fell to 73,200 cars for 1992.\n\n## SVT and the Send-Off\n\nFord's newly formed Special Vehicle Team used the last Fox model year to show what it was for. The 1993 SVT Cobra took the GT's short block and added GT-40 cast iron heads milled for 62.5 cc chambers, a matching intake, a stronger five-speed, rear disc brakes and 17-inch wheels, the first on a factory Mustang. It was rated at 235 hp at 4,600 rpm; the torque figure is quoted as 280 lb-ft by most sources and 285 lb-ft by one, and the page keeps both. 4,993 were built at $18,505. The Cobra R deleted the radio, air conditioning, rear seat and fog lamps and added larger brakes, Koni dampers, a bigger aluminum radiator and an oil cooler; Ford planned 100 and built 107, all Vibrant Red, at $25,692. The same year Ford re-rated the ordinary 5.0 to 205 hp, a more honest number, and the last third-generation car left the line on August 26, 1993.",
 "marketNotes": "As of September 2026, classic.com's market benchmark for the 1987-1993 Mustang GT stands at $20,990 with an average recorded price of $20,730, and for the 1987-1993 LX at $21,056; both indexes mix dealer listings with auction results, so they describe asking and selling prices together rather than hammer prices alone. The whole third generation averages $26,810 on the same site. The 1993 SVT Cobra sits in a different bracket: classic.com's benchmark is $59,621 with an average of $61,074, its lowest recorded sale is $22,250 on August 31, 2026, and Bring a Trailer results quoted on classic.com run $37,500 (September 8, 2026), $60,000 (August 12, 2026) and $72,500 (June 13, 2026), all as of September 2026. A dealer in Concord, North Carolina was asking $124,995 for a 1993 SVT Cobra in late August 2026; that is a listing, not a sale. No Cobra R result was fetched in this session. autoevolution wrote in September 2024 that a low-mileage Cobra R 'is worth well over $100,000', and Road & Track's Colin Comer put the car at about $65,000 in July 2016, which is the shape of the curve rather than a current figure. Below the Cobras, the spread is about condition and originality far more than trim: a stock, unmodified LX 5.0 five-speed with its original driveline is scarce because so many were raced or rebuilt, and the aero-era GT's body kit has fallen out of fashion, which is why the LX indexes fractionally above it. SVO values were not fetched here and no figure is given.",
 "whatToLookFor": "Start under the car, not under the hood. The rear torque boxes, where the lower control arms meet the unibody, are tack-welded from the factory and tear or twist on cars that have been launched hard; cracks there are a sign of drag-strip use and are awkward to repair. Welded-in subframe connectors tell the same story: someone cared, and someone raced it. Under the hood, the front strut towers rust and ripple; rippled steel means a crash, corroded steel means the car may not be worth saving. Lift the carpet behind the pedals and in the spare well, and check the leading edge of the hatch and the trunk lid on notchbacks. A-pillar tops crack from body flex on hatchbacks and convertibles. Then establish what the car is. The door tag and VIN identify a factory 5.0; a notchback LX with the V8 is worth confirming carefully because four-cylinder coupes have been converted for decades. On a 1993 Cobra, the SVT build details and the dark argent 17-inch wheels are the starting point, and a Cobra R should have no radio wiring, no rear seat and no air conditioning from new. Original E7 heads, factory intake and stock exhaust are increasingly the thing a buyer pays for; a car with a period supercharger and a 'built' transmission is a different, cheaper market. Interiors were made of hard plastic that is now brittle: expect a cracked dash, collapsed seat foam and a stained headliner, and price the repair accordingly. Gauges are known to read wrong or quit, and an odometer that does not line up has rolled; US cars only count to 99,999. Check the 8.8-inch axle for leaks and for whine on and off the throttle. Alarms, aftermarket stereos and immobilizers were fitted to a great many of these cars and are the usual source of electrical faults. A five-speed car with a current, complete history and an honest paint job is what separates a good one from a project.",
 "commonProblems": "The 5.0 itself is the least of it. Road & Track's Colin Comer describes the engines as 'virtually indestructible', and the reproduction and replacement parts market covers nearly every trim and hard part. The Borg-Warner T-5 five-speed is the weak link in the driveline when abused, though it is cheap to rebuild or swap; its reverse gear is not synchronized, so a grind going into reverse is normal rather than a fault, and a clutch cable or quadrant that has failed shows up as a clutch that will not disengage. Torque boxes crack and tear under the rear suspension, especially on cars making more than stock power. Rust concentrates in the front strut towers, the floors under the carpet, the spare wheel well and the hatch and trunk-lid leading edges; salt-belt cars earned the 'Rustang' nickname, though the Fox is no worse than its contemporaries. Convertibles and hatchbacks flex enough to crack the A-pillar tops. The 8.8-inch rear axle leaks at the differential housing and whines when worn. Interior plastics crack, seats split and collapse, and the factory gauges are unreliable. Electrical gremlins are usually the legacy of aftermarket alarms and stereos rather than the factory harness. NHTSA lists two Ford recalls against the 1993 model year: campaign 93V159000 for a fuel rail with an improperly formed tube that could fracture and leak, and 96V071000 for an ignition switch that could short internally; a buyer of any 1993 car, Cobra included, should confirm both were done.",
 "valueTrajectory": "For most of its life the Fox-body Mustang was a used car, and a cheap one, which is why so few survive stock. Colin Comer's July 2016 Road & Track piece marks the turn: he put a showroom-quality low-mileage 1988 LX 5.0 five-speed at about $15,000 and a 1993 Cobra R at about $65,000, and wrote that 5.0 cars were rising at least ten percent a year as Gen X buyers chased the cars of their youth. As of September 2026, classic.com's indexes put the ordinary 1987-1993 GT and LX at about $21,000 and the 1993 SVT Cobra at roughly $60,000, with recent Bring a Trailer results for Cobras between $37,500 and $72,500 on the same site, and autoevolution's September 2024 view of the Cobra R was 'well over $100,000' for a low-mileage car. The pattern is a familiar one for a mass-produced performance car: the base index has roughly kept pace with inflation from Comer's 2016 figure, while the low-production SVT cars have pulled away, and the premium for an unmodified, documented example over a typical one has widened rather than narrowed. What the sources do not support is any figure for the SVO or for the four-eye 1982-1986 GTs, which were not fetched here and are left out rather than guessed.",
 "overallConfidence": "medium",
 "sources": [
  {
   "ref": "wikipedia-3rd-gen",
   "title": "Ford Mustang (third generation)",
   "url": "https://en.wikipedia.org/wiki/Ford_Mustang_(third_generation)",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Pointer source: Fox platform 'one-size-fits-all' quote; 1982 GT return with 157 hp HO and the Torino cam; 1983 convertible after nine years; 210 hp 1985 and 200 hp EFI 1986; 1987 aero restyle, E7 heads, 225 hp/300 lb-ft; Probe replacement story; 1990 airbag and 7-Up 4,103 split; 1991 prices over $10,000; 1993 re-rate to 205 hp/275 lb-ft; Cobra 235 hp at 5,000 rpm and 285 lb-ft (conflicts with the SVT Cobra article); production table totaling 2,518,948 with 1990 at 115,230; last car August 26, 1993."
  },
  {
   "ref": "classicindustries-foxes",
   "title": "Fox Body Mustang: Development, Concepts, and 1979-1993 Year Changes",
   "url": "https://news.classicindustries.com/here-are-the-foxes-1979-1993-mustang",
   "publisher": "Classic Industries",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Parts retailer's history: states Ford sold 2,608,812 Fox-body Mustangs (conflicts with Wikipedia's 2,518,948); 1979 140 hp 302; SVO quoted at 170 hp (conflicts with 175 hp); 1983 convertible return; 1987 flush headlamp redesign; 1993 Cobra 235 hp with Borg-Warner five-speed; Probe on sale alongside the Mustang in 1989."
  },
  {
   "ref": "nhtsa-recalls-1993",
   "title": "NHTSA recalls by vehicle: 1993 Ford Mustang",
   "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=ford&model=mustang&modelYear=1993",
   "publisher": "National Highway Traffic Safety Administration",
   "sourceType": "government",
   "reliability": "high",
   "notes": "Federal recall record for the 1993 model year: two Ford campaigns, 93V159000 (fuel rail tube improperly formed, may fracture and leak, reported September 27, 1993) and 96V071000 (ignition switch internal short circuit, April 25, 1996); the remaining five entries are aftermarket headlamp makers, not Ford."
  },
  {
   "ref": "epa-1993-mustang-50-manual",
   "title": "fueleconomy.gov vehicle record 9755: 1993 Ford Mustang, 5.0 L, Manual 5-spd",
   "url": "https://www.fueleconomy.gov/ws/rest/vehicle/9755",
   "publisher": "US Environmental Protection Agency / Department of Energy",
   "sourceType": "government",
   "reliability": "high",
   "notes": "EPA record for the 1993 Mustang 5.0 five-speed manual, rear-wheel drive, regular gasoline: 15 mpg city, 22 highway, 17 combined on the revised 2008-method scale (mpgRevised true). Confirms the 1993 US engine and transmission lineup: 2.3 L and 5.0 L, each with a four-speed automatic or five-speed manual."
  },
  {
   "ref": "steeda-1993-specs",
   "title": "1993 Ford Mustang Specs & Details",
   "url": "https://www.steeda.com/1993-mustang-specs-details",
   "publisher": "Steeda Autosports",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Specialist tuner's 1993 model summary: 5.0 at 205 hp and 275 lb-ft with Ford acknowledging the lower rating; 2.3 at 105 hp and 140 lb-ft; Cobra 30 hp and 5 lb-ft over the GT with GT40 heads and rear discs; 4,993 Cobras; 107 Cobra Rs, Vibrant Red only, at $25,692; roughly 57,000 hatchbacks, 25,000 notchbacks and 27,000 convertibles sold for 1993."
  },
  {
   "ref": "mustangspecs-1990",
   "title": "1990 Ford Mustang: Ultimate In-Depth Guide",
   "url": "https://www.mustangspecs.com/1990-ford-mustang/",
   "publisher": "MustangSpecs.com",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "1990 model-year data: base prices $9,753 coupe, $10,259 hatchback, $14,810 convertible; 128,189 units (conflicts with Wikipedia's 115,230); 5.0 HO 225 hp at 4,200 rpm and 300 lb-ft at 3,200 rpm; 2.3 at 90 hp; wheelbase 100.1 in; curb weights 2,722 lb notchback, 2,791 lb hatchback, 3,044 lb convertible; driver airbag standard for 1990; 4,103-car 7-Up convertible run."
  },
  {
   "ref": "roadandtrack-comer-2016",
   "title": "Why the Fox-Body Mustang Is the Next Big Collector's Car You Should Buy",
   "url": "https://www.roadandtrack.com/car-culture/buying-maintenance/a30425107/fox-body-mustang-buyers-guide/",
   "publisher": "Road & Track",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Colin Comer, July 6, 2016. 1982 GT return, 157 hp and 240 lb-ft, 'The Boss is Back' and the Z/28 ad claim; four-eye (1982-1986) versus aero (1987-1993); 210 hp roller-cam 1985, EFI for 1986, 225 hp and 300 lb-ft for 1987; engines 'virtually indestructible', T-5 weak if abused; brittle interiors; LX 5.0 as the collector's choice; July 2016 values: 1988 LX 5.0 about $15k, 1988 Saleen $25k, 1993 Cobra R about $65k; rising at least ten percent a year."
  },
  {
   "ref": "wikipedia-svo",
   "title": "Ford Mustang SVO",
   "url": "https://en.wikipedia.org/wiki/Ford_Mustang_SVO",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "SVO reference: total production 9,844 (4,508 in 1984, 1,954 in 1985, 3,382 in 1986); list price $15,585 in mid-April 1984, more than double a base Mustang and $6,000 above the GT; output table 175 hp 1984-85, 205 hp 1985.5, 200 hp 1986; Koni six-shock suspension, four-wheel discs, 16 x 7-inch wheels; 0-60 in 7.5 seconds on the 3.45:1 axle; curb weight 2,987 lb; Michael Kranefuss led SVO."
  },
  {
   "ref": "wikipedia-svt-cobra",
   "title": "Ford Mustang SVT Cobra",
   "url": "https://en.wikipedia.org/wiki/Ford_Mustang_SVT_Cobra",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "1993 Cobra and Cobra R: 235 hp at 4,600 rpm and 280 lb-ft at 4,000 rpm (conflicts with the third-generation article's 285 lb-ft); GT-40 heads milled for 62.5 cc chambers; rear discs and 17-inch unidirectional wheels; 0-60 in 5.9 seconds; MSRP $18,505 Cobra and $25,692 Cobra R; production table 4,993 Cobras and 107 Cobra Rs all Vibrant Red Clearcoat; Cobra R deletions (radio, air conditioning, rear seat, fog lights); Ford announcement of April 7, 1993."
  },
  {
   "ref": "autoevolution-cobra-r",
   "title": "1993 SVT Cobra R: Remembering the Ultimate Factory-Built Fox-Body Mustang",
   "url": "https://www.autoevolution.com/news/1993-svt-cobra-r-remembering-the-ultimate-factory-built-fox-body-mustang-239800.html",
   "publisher": "autoevolution",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Vlad Radu, September 14, 2024. Cobra R priced at $25,692 with the standard Cobra more than $4,000 cheaper; Ford planned 100 and honored 107 orders; deletions of rear seats, air conditioning, audio and power features; larger ventilated discs, Koni adjustable shocks, stiffer springs, strut tower brace, SN95 spindles; larger aluminum radiator and oil cooler on the R; 235 hp at 4,600 rpm and 280 lb-ft at 4,000 rpm; low-mileage Cobra R 'well over $100,000' as of September 2024."
  },
  {
   "ref": "streetmuscle-buying",
   "title": "What to look for when buying a Fox Body Mustang",
   "url": "https://www.streetmusclemag.com/features/what-to-look-for-when-buying-a-fox-body-mustang/",
   "publisher": "Street Muscle Magazine",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Inspection guide: torque box cracking as a sign of racing, welded subframe connectors, strut tower corrosion and ripple as crash evidence, floor and hatch-edge rust, 'Rustang' nickname, A-pillar cracks from body flex, 8.8-inch axle leaks and whine, aftermarket alarm and stereo wiring as the source of electrical faults, Ford's return to long-hood short-deck proportions after the Mustang II."
  },
  {
   "ref": "americanmuscle-buying",
   "title": "What to Look For When Buying a Fox Body Mustang",
   "url": "https://www.americanmuscle.com/buying-a-foxbody-mustang.html",
   "publisher": "AmericanMuscle",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Parts retailer's buying guide: four-eye 1979-1986 versus two-light 1987 cars; LX up to 50-250 lb lighter than GT and without the ground effects; torque boxes tack-welded and prone to tearing above stock power; strut tower rust; T-5 reverse not synchronized; failed clutch cable symptoms; dash cracks; inaccurate gauges; odometer rolls at 99,999 miles."
  },
  {
   "ref": "classic-gt",
   "title": "Ford Mustang GT - 3rd Gen (1987 to 1993) Market",
   "url": "https://www.classic.com/m/ford/mustang/3rd-gen/1987-1993/gt/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Market data as of September 2026: CMB $20,990, average price $20,730, trend arrow up; index mixes dealer listings and auction results (recent entries September 18-19, 2026 are dealer listings at $11,995 to $35,950)."
  },
  {
   "ref": "classic-lx",
   "title": "Ford Mustang LX - 3rd Gen (1987 to 1993) Market",
   "url": "https://www.classic.com/m/ford/mustang/3rd-gen/1987-1993/lx/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Market data as of September 2026: CMB and average price $21,056; lowest recorded sale $2,750 for a 1989 LX on May 13, 2025."
  },
  {
   "ref": "classic-3rd-gen",
   "title": "Ford Mustang - 3rd Gen Market",
   "url": "https://www.classic.com/m/ford/mustang/3rd-gen/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Market data as of September 2026: average price across the third generation $26,810; lowest recorded sale $800 for a 1980 Mustang on October 18, 2023; a 1993 SVT Cobra listed (not sold) at $124,995 by Streetside Classics, Concord NC, August 29, 2026; sub-model index pages for GT, LX 5.0, SVT Cobra, Saleen and SVO."
  },
  {
   "ref": "classic-svt-cobra",
   "title": "Ford Mustang SVT Cobra - 3rd Gen (1987 to 1993) Market",
   "url": "https://www.classic.com/m/ford/mustang/3rd-gen/1987-1993/svt-cobra/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Market data as of September 2026: CMB $59,621, average price $61,074; lowest recorded sale $22,250 on August 31, 2026; Bring a Trailer results quoted on the page: $37,500 (September 8, 2026), $60,000 (August 12, 2026), $72,500 (June 13, 2026)."
  }
 ],
 "claims": [
  {
   "section": "production",
   "claimText": "Total third-generation Mustang production is stated as 2,518,948 by Wikipedia's model-year table and as 2,608,812 by Classic Industries, a difference of 89,864 cars that no source consulted explains.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["wikipedia-3rd-gen", "classicindustries-foxes"],
   "conflictNote": "Wikipedia's production table sums to 2,518,948 for 1979-1993. Classic Industries states Ford sold 2,608,812 Fox Body Mustangs. Neither cites a Ford document. Not resolved by any source consulted here.",
   "evidence": [
    { "ref": "wikipedia-3rd-gen", "quote": "1993 23,579 65,220 26,560 115,359 Total - 1,287,328 - 2,518,948" },
    { "ref": "classicindustries-foxes", "quote": "Ford sold 2,608,812 units of the Fox Body Mustang, which is second in sales only to the 1st gen pony car" }
   ]
  },
  {
   "section": "production",
   "claimText": "Production for the 1990 model year is given as 128,189 cars by MustangSpecs.com and as 115,230 by Wikipedia's per-year table.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["mustangspecs-1990", "wikipedia-3rd-gen"],
   "conflictNote": "MustangSpecs states 128,189 units for 1990. Wikipedia's table gives 17,808 notchbacks, 71,798 hatchbacks and 25,624 convertibles for a 1990 total of 115,230. Not resolved by any source consulted here.",
   "evidence": [
    { "ref": "mustangspecs-1990", "quote": "Sales fell to 128,189 units, down 39% versus the prior year and the recession didn't help." },
    { "ref": "wikipedia-3rd-gen", "quote": "1990 17,808 71,798 25,624 115,230" }
   ]
  },
  {
   "section": "production",
   "claimText": "Ford built 4,993 SVT Cobra hatchbacks and 107 Cobra R hatchbacks for the 1993 model year, the Cobra R having been planned at 100 cars.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["wikipedia-svt-cobra", "steeda-1993-specs", "autoevolution-cobra-r"],
   "evidence": [
    { "ref": "wikipedia-svt-cobra", "quote": "A total of 107 Cobra R models were produced, and all were painted in Vibrant Red Clearcoat." },
    { "ref": "steeda-1993-specs", "quote": "Ford built 4,993 examples, making the SVT Cobra a rare, but not impossible to find, final-year Fox Body." },
    { "ref": "autoevolution-cobra-r", "quote": "Ford initially planned to build 100 units of the track weapon, but the company registered 107 orders in record-breaking time and decided to honor all of them." }
   ]
  },
  {
   "section": "production",
   "claimText": "Total Mustang SVO production was 9,844 cars, split 4,508 for 1984, 1,954 for 1985 and 3,382 for 1986; this count rests on one fetched source.",
   "confidence": "medium",
   "status": "unverified",
   "sourceRefs": ["wikipedia-svo"],
   "evidence": [
    { "ref": "wikipedia-svo", "quote": "Total Mustang SVO production was 9,844, with most sold the first year: 4,508 (1984), 1,954 (1985), and 3,382 (1986)." }
   ]
  },
  {
   "section": "production",
   "claimText": "The 1990 7-Up edition consisted of 4,103 LX 5.0 convertibles in Deep Emerald Green with white tops and white leather, built for a 7-Up sponsored contest that was canceled before it ran.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["mustangspecs-1990", "wikipedia-3rd-gen"],
   "evidence": [
    { "ref": "mustangspecs-1990", "quote": "In 1990, there was also a limited run of 4,103 cars. They were 5.0 LX convertibles produced for a contest held by 7-Up, but the contest was cancelled at the last second." },
    { "ref": "wikipedia-3rd-gen", "quote": "Ford, already having produced 4,103 vehicles (2,743 with the AOD four-speed automatic overdrive, and 1,360 with the T-5" }
   ]
  },
  {
   "section": "history",
   "claimText": "The 1979 Mustang was built on the Fox platform that Ford had designed as a one-size-fits-all base for a two-door sports car and a four-door family car, returning to the long-hood, short-deck proportions the Mustang II had abandoned.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["wikipedia-3rd-gen", "streetmuscle-buying"],
   "evidence": [
    { "ref": "wikipedia-3rd-gen", "quote": "The 1979 model year Mustang used the Fox platform intended by Ford as \"a one-size-fits-all [platform] to serve as a two-door sports car and a four-door family car,\"" },
    { "ref": "streetmuscle-buying", "quote": "Stung by criticism of the Mustang II, Ford returned to the long hood/short deck format for the Fox." }
   ]
  },
  {
   "section": "history",
   "claimText": "The GT returned for 1982 after thirteen years with a re-engineered 5.0 High Output V8 rated at 157 hp and 240 lb-ft, advertised under the line 'The Boss is Back'.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["wikipedia-3rd-gen", "roadandtrack-comer-2016"],
   "evidence": [
    { "ref": "wikipedia-3rd-gen", "quote": "This new GT model featured a re-engineered 157 hp (117 kW; 159 PS) High Output Windsor 302 cu in (4.9 L) engine with new valves, a more aggressive cam" },
    { "ref": "roadandtrack-comer-2016", "quote": "Sure, its new 5.0-liter \"High Output\" engine only made 157 hp, but combined with its 240 lb-ft of torque, that was enough to, per the ad" }
   ]
  },
  {
   "section": "history",
   "claimText": "Ford added a convertible to the Mustang line for the 1983 model year after a nine-year absence.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["wikipedia-3rd-gen", "classicindustries-foxes"],
   "evidence": [
    { "ref": "wikipedia-3rd-gen", "quote": "Ford added a convertible to the Mustang line for 1983, after a nine-year absence." },
    { "ref": "classicindustries-foxes", "quote": "For 1983, the Mustang convertible also made a comeback." }
   ]
  },
  {
   "section": "history",
   "claimText": "The 5.0 HO reached 210 hp for 1985 with a roller camshaft while still carbureted, the last carbureted Mustang V8, and gained multiport fuel injection for 1986 at a rating of 200 hp.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["wikipedia-3rd-gen", "roadandtrack-comer-2016"],
   "evidence": [
    { "ref": "wikipedia-3rd-gen", "quote": "For 1986, Ford released the first multiport fuel-injected 302 cu in (4.9 L) V8, rated at 200 hp" },
    { "ref": "roadandtrack-comer-2016", "quote": "through the roller-camshaft-yet-still-carbureted 210-hp 1985 version, to the introduction of the EFI H.O. motor for 1986" }
   ]
  },
  {
   "section": "history",
   "claimText": "The 1987 restyle gave the Mustang flush aero headlamps in the style of the SVO, a new dash and console, and a 5.0 HO rated at 225 hp at 4,200 rpm and 300 lb-ft at 3,200 rpm, ratings that held through 1992.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["wikipedia-3rd-gen", "roadandtrack-comer-2016", "mustangspecs-1990"],
   "evidence": [
    { "ref": "wikipedia-3rd-gen", "quote": "The front end was restyled to look more like the SVO which gave the car more of an \"Aero\" look" },
    { "ref": "roadandtrack-comer-2016", "quote": "The face-lifted 1987 also brought a horsepower bump to 225 and, more importantly, 300 lb-ft of torque, which was the key to the Mustang's performance." },
    { "ref": "mustangspecs-1990", "quote": "302 H.O V8 (5.0 L) EFI HO 9.2:1 225 hp @ 4200 RPM 300 lb/ft @ 3200 RPM" }
   ]
  },
  {
   "section": "history",
   "claimText": "In the mid-1980s Ford planned to replace the rear-drive Mustang with a Mazda-derived front-wheel-drive car; after buyer objections the rear-drive Mustang continued and the front-drive car went on sale in 1989 as the Ford Probe.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["wikipedia-3rd-gen", "classicindustries-foxes"],
   "evidence": [
    { "ref": "wikipedia-3rd-gen", "quote": "Ford responded by continuing production of the rear-wheel drive Mustang, and proceeded to rename the front-wheel-drive version as the Probe" },
    { "ref": "classicindustries-foxes", "quote": "In 1989, Ford put the new Probe on sale alongside the Mustang." }
   ]
  },
  {
   "section": "history",
   "claimText": "A driver-side airbag became standard equipment for the 1990 model year to meet the federal passive-restraint requirement, replacing the tilt steering column.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["mustangspecs-1990", "wikipedia-3rd-gen"],
   "evidence": [
    { "ref": "mustangspecs-1990", "quote": "The driver side airbag was made standard equipment in 1990 to satisfy a federally mandated requirement that all cars have a passive restraint system." },
    { "ref": "wikipedia-3rd-gen", "quote": "For 1990, Mustang added a new steering wheel featuring an airbag, and a revised lower driver's-side dash panel with knee bolster." }
   ]
  },
  {
   "section": "history",
   "claimText": "The SVO was developed by Ford's Special Vehicle Operations under Michael Kranefuss and listed at $15,585 in April 1984, more than double a base Mustang and $6,000 above the GT; the price and 0-60 time of 7.5 seconds rest on one fetched source.",
   "confidence": "medium",
   "status": "unverified",
   "sourceRefs": ["wikipedia-svo"],
   "evidence": [
    { "ref": "wikipedia-svo", "quote": "List price for the 1984½ Mustang SVO was US$15,585 (equivalent to $48,000 in 2025) when it hit dealerships in mid-April 1984" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 1984 SVO's turbocharged 2.3-liter four is rated at 175 hp by Wikipedia's SVO article and at 170 hp by Classic Industries; later cars were rated 205 hp from mid-1985 and 200 hp for 1986.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["wikipedia-svo", "classicindustries-foxes"],
   "conflictNote": "Wikipedia's SVO article and its specification table give 175 hp for 1984 and 1985 cars. Classic Industries states the SVO made 170 hp. Not resolved by any source consulted here.",
   "evidence": [
    { "ref": "wikipedia-svo", "quote": "1985 175 hp (130 kW) @ 4400 rpm 210 lb-ft (285 N-m) @ 3000 rpm 1985½ 205 hp (153 kW) @ 5000 rpm" },
    { "ref": "classicindustries-foxes", "quote": "The SVO had an air-to-air intercooler turbo 2.3L four-cylinder engine that made 170-horsepower and could go like stink." }
   ]
  },
  {
   "section": "specs",
   "claimText": "For 1993 Ford re-rated the 5.0 HO to 205 hp and 275 lb-ft, a more accurate figure than the earlier 225 hp rating, while the base 2.3-liter four made 105 hp and 140 lb-ft.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["wikipedia-3rd-gen", "steeda-1993-specs"],
   "evidence": [
    { "ref": "wikipedia-3rd-gen", "quote": "re-rated the GT to 205 hp (153 kW) and 275 ft-lbf (373 N-m) of torque" },
    { "ref": "steeda-1993-specs", "quote": "The 5.0-liter V-8 offered 205 horsepower and 275 lb-ft of torque, with Ford finally acknowledging these lower (compared to previous years) output numbers." }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 1993 SVT Cobra's GT-40 equipped 5.0 was rated at 235 hp; its torque is quoted as 280 lb-ft at 4,000 rpm by Wikipedia's SVT Cobra article, autoevolution and (as 5 lb-ft over the GT's 275) Steeda, but as 285 lb-ft by Wikipedia's third-generation article.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["wikipedia-svt-cobra", "autoevolution-cobra-r", "steeda-1993-specs", "wikipedia-3rd-gen"],
   "conflictNote": "Wikipedia's SVT Cobra article and autoevolution state 235 hp at 4,600 rpm and 280 lb-ft at 4,000 rpm; Steeda states 30 hp and 5 lb-ft over the 205 hp, 275 lb-ft GT, which also gives 280. Wikipedia's third-generation article states 235 hp at 5,000 rpm and 285 lb-ft at 4,000 rpm. Not resolved by any source consulted here.",
   "evidence": [
    { "ref": "wikipedia-svt-cobra", "quote": "rated at a power output of 235 hp (238 PS; 175 kW) at 4,600 rpm and 280 lb-ft (380 N-m) of torque at 4,000 rpm." },
    { "ref": "autoevolution-cobra-r", "quote": "the SVT 5.0-liter was rated at 235 hp at 4,600 rpm and 280 lb-ft (381 Nm) of torque at 4,000 rpm." },
    { "ref": "steeda-1993-specs", "quote": "The result is a Mustang with 30 more horsepower and a 5 lb-ft increase in torque over the stock GT." },
    { "ref": "wikipedia-3rd-gen", "quote": "the 1993 Ford Mustang SVT Cobra was offered with the 302 cu in (4.9 L) V8 that produced 235 hp (238 PS; 175 kW) at 5,000 rpm and 285 lb-ft" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 1993 Cobra R listed at $25,692, the most expensive 1993 Mustang, against $18,505 for the standard Cobra; it deleted the radio, air conditioning, rear seat and fog lamps and added larger brakes, Koni dampers, a larger aluminum radiator and an oil cooler.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["steeda-1993-specs", "wikipedia-svt-cobra", "autoevolution-cobra-r"],
   "evidence": [
    { "ref": "steeda-1993-specs", "quote": "And at $25,692 (about $49,400 today), it was the most expensive 1993 Mustang you could buy." },
    { "ref": "wikipedia-svt-cobra", "quote": "the cars did not have a radio, speakers, wiring and antenna, air conditioner, foglights, sound deadener, rear seat, rear safety belts, rear carpeting" },
    { "ref": "autoevolution-cobra-r", "quote": "the R version, which also received a larger aluminum radiator and an oil cooler." }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 1993 SVT Cobra received rear disc brakes and 17-inch unidirectional wheels, the first on a factory Mustang, and Wikipedia's SVT Cobra article gives its 0-60 mph time as 5.9 seconds; the acceleration figure is single-sourced.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["wikipedia-svt-cobra", "steeda-1993-specs"],
   "evidence": [
    { "ref": "wikipedia-svt-cobra", "quote": "The drivetrain received an upgraded transmission, rear disc brakes, and for the first time on a factory Mustang, 17-inch unidirectional wheels." },
    { "ref": "steeda-1993-specs", "quote": "Rear disc brakes were also added for improved stopping performance." }
   ]
  },
  {
   "section": "specs",
   "claimText": "1990 base prices were $9,753 for the coupe, $10,259 for the hatchback and $14,810 for the convertible, and Wikipedia records base-model prices passing $10,000 for the first time for 1991.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["mustangspecs-1990", "wikipedia-3rd-gen"],
   "evidence": [
    { "ref": "mustangspecs-1990", "quote": "Original Price: $9,753 (Base Coupe), $10,259 (Base Hatchback), $14,810 (Convertible)" },
    { "ref": "wikipedia-3rd-gen", "quote": "Base-model Mustang prices exceeded $10,000 for the first time, and sales began to drop." }
   ]
  },
  {
   "section": "specs",
   "claimText": "MustangSpecs gives the 1990 car a 100.1-inch wheelbase and curb weights of 2,722 lb for the notchback, 2,791 lb for the hatchback and 3,044 lb for the convertible; these figures rest on one fetched source.",
   "confidence": "medium",
   "status": "unverified",
   "sourceRefs": ["mustangspecs-1990"],
   "evidence": [
    { "ref": "mustangspecs-1990", "quote": "Wheelbase - Notchback/Hatchback 100.1 inches Weight Hatchback 2791 lb Weight Notchback 2722 lb Weight Convertible 3044 lb" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The EPA rates the 1993 Mustang 5.0 with the five-speed manual at 15 mpg city, 22 mpg highway and 17 mpg combined on its revised scale, on regular gasoline.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["epa-1993-mustang-50-manual"],
   "evidence": [
    { "ref": "epa-1993-mustang-50-manual", "quote": "<city08>15</city08><city08U>0.0</city08U><cityA08>0</cityA08><cityA08U>0.0</cityA08U>" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The LX 5.0 carried the GT's engine and driveline in a plainer body without the GT's lower skirting and was 50 to 250 lb lighter depending on options, which is why it has become the collector's choice among 1987-1993 cars.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["americanmuscle-buying", "roadandtrack-comer-2016"],
   "evidence": [
    { "ref": "americanmuscle-buying", "quote": "Depending on the options from the factory, the LX model could be up to 50-250 pounds lighter than the GT." },
    { "ref": "roadandtrack-comer-2016", "quote": "The side skirt and body kit treatment given to the 1987 to 1993 GTs has fallen out of fashion for many, leaving the 5.0L LX version the collector's choice in those years." }
   ]
  },
  {
   "section": "problems",
   "claimText": "The rear torque boxes are tack-welded from the factory and crack or tear on cars that have been launched hard, especially above stock power; cracks there indicate racing and are awkward to repair.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["streetmuscle-buying", "americanmuscle-buying"],
   "evidence": [
    { "ref": "streetmuscle-buying", "quote": "Look for cracks or twisting in the torque boxes near the rear wheels. They are awkward to repair and are a sure sign of racing and other abuse." },
    { "ref": "americanmuscle-buying", "quote": "The stock torque boxes are just tack welded in and often tear apart, particularly when pushing more than stock power levels." }
   ]
  },
  {
   "section": "problems",
   "claimText": "Fox-body Mustangs rust in the front strut towers, floors and hatch edges, and a rippled or corroded strut tower is evidence of crash damage or structural rot.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["streetmuscle-buying", "americanmuscle-buying"],
   "evidence": [
    { "ref": "streetmuscle-buying", "quote": "check the front strut towers for corrosion and crash damage. The tower should be smooth; if the steel is rippled, it indicates serious accident damage." },
    { "ref": "americanmuscle-buying", "quote": "In particular, Fox Mustangs are notorious for rusting in the strut towers." }
   ]
  },
  {
   "section": "problems",
   "claimText": "The 5.0 engine is robust but the Borg-Warner T-5 five-speed is the driveline's weak point when abused; it is inexpensive to repair or swap, and its unsynchronized reverse gear grinds normally.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["roadandtrack-comer-2016", "americanmuscle-buying"],
   "evidence": [
    { "ref": "roadandtrack-comer-2016", "quote": "The engines are virtually indestructible, and while the same can't be said for the Borg Warner T-5 manual transmission if abused, they are cheap to repair or swap out." },
    { "ref": "americanmuscle-buying", "quote": "the reverse gear on T5 transmissions is NOT synchronized. Thus, if you grind the gear when going into reverse, unfortunately, this is normal." }
   ]
  },
  {
   "section": "problems",
   "claimText": "Interior plastics are brittle and crack, the factory gauges are unreliable, the 8.8-inch axle leaks and whines when worn, and electrical faults usually trace to aftermarket alarms and stereos.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["roadandtrack-comer-2016", "americanmuscle-buying", "streetmuscle-buying"],
   "evidence": [
    { "ref": "roadandtrack-comer-2016", "quote": "miles of hard, now brittle, plastic and cheap materials that don't wear well" },
    { "ref": "americanmuscle-buying", "quote": "Gauges in these cars are notoriously inaccurate and frequently stop working or only work partially." },
    { "ref": "streetmuscle-buying", "quote": "It is easy for that equipment and wiring to go bad, leading to endless frustrating electrical gremlins." }
   ]
  },
  {
   "section": "problems",
   "claimText": "NHTSA records two Ford recalls against the 1993 Mustang: campaign 93V159000 for a fuel rail tube that could fracture and leak, and 96V071000 for an ignition switch that could short internally.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["nhtsa-recalls-1993"],
   "evidence": [
    { "ref": "nhtsa-recalls-1993", "quote": "THE FUEL RAIL THAT PROVIDES THE FUEL SUPPLY TO THE FUEL INJECTORS HAS AN IMPROPERLY FORMED TUBE WHICH HAS THE POTENTIAL TO FRACTURE, CAUSING FUEL TO LEAK." }
   ]
  },
  {
   "section": "market",
   "claimText": "As of September 2026, classic.com's market benchmark for the 1987-1993 Mustang GT is $20,990 with an average price of $20,730, and for the 1987-1993 LX it is $21,056.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["classic-gt", "classic-lx"],
   "evidence": [
    { "ref": "classic-gt", "quote": "The average price of a Ford Mustang - 3rd Gen - 1987 1993 - Gt is $20,730." },
    { "ref": "classic-lx", "quote": "The average price of a Ford Mustang - 3rd Gen - 1987 1993 - Lx is $21,056." }
   ]
  },
  {
   "section": "market",
   "claimText": "As of September 2026, classic.com's benchmark for the 1993 SVT Cobra is $59,621 with an average of $61,074, a lowest recorded sale of $22,250 on August 31, 2026, and recent Bring a Trailer results of $37,500, $60,000 and $72,500; the whole third generation averages $26,810.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["classic-svt-cobra", "classic-3rd-gen"],
   "evidence": [
    { "ref": "classic-svt-cobra", "quote": "The average price of a Ford Mustang - 3rd Gen - 1987 1993 - Svt Cobra is $61,074." },
    { "ref": "classic-3rd-gen", "quote": "The average price of a Ford Mustang - 3rd Gen is $26,810." }
   ]
  },
  {
   "section": "market",
   "claimText": "In July 2016 Road & Track put a showroom-quality 1988 LX 5.0 five-speed at about $15,000 and a 1993 Cobra R at about $65,000; by September 2024 autoevolution described a low-mileage Cobra R as worth well over $100,000.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["roadandtrack-comer-2016", "autoevolution-cobra-r"],
   "evidence": [
    { "ref": "roadandtrack-comer-2016", "quote": "a showroom-quality, low-mileage 1988 LX 5.0L 5-speed will trade around $15k. A similar quality 1988 Saleen Mustang is $25k. And a 1993 Cobra R? Figure $65k." },
    { "ref": "autoevolution-cobra-r", "quote": "a low-mileage example in pristine shape is worth well over $100,000, which makes it the most expensive Fox Body by a large margin." }
   ]
  }
 ]
};
