/**
 * Researched model draft - Buick Regal Grand National, T-Type and GNX (1984-1987).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedGrandNational = {
 "slug": "buick/grand-national",
 "make": "Buick",
 "model": "Grand National",
 "generation": "Turbocharged Regal, T-Type and GNX, 1984-1987 model years",
 "generationCode": "G-body",
 "trim": "Grand National (WE2), T-Type, Turbo-T (WE4), GNX",
 "yearStart": 1984,
 "yearEnd": 1987,
 "bodyStyles": [
  "2-door notchback coupe, body-on-frame, optional T-top roof panels"
 ],
 "engines": [
  "1984-1985: 3,791 cc (231 cu in) LC2 turbocharged 90-degree pushrod V6, iron block and heads, sequential port fuel injection, distributorless ignition, no intercooler ('hot air' engine); rated 200 hp at 4,400 rpm and 300 lb-ft at 2,400 rpm for 1984",
  "1986: 3,791 cc LC2 turbocharged V6 with air-to-air intercooler and two-piece aluminum intake; rated 235 hp at 4,000 rpm and 330 lb-ft at 2,400 rpm",
  "1987 Grand National, T-Type, Turbo-T and turbo Limited: 3,791 cc LC2 turbocharged and intercooled V6; rated 245 hp at 4,400 rpm and 355 lb-ft (torque peak quoted at 2,000 rpm or 2,800 rpm depending on source)",
  "1987 GNX: 3,791 cc LC2 turbocharged and intercooled V6 reworked by McLaren Engines with a ceramic-wheel Garrett turbocharger, ported heads, revised intercooler plumbing, dual exhaust and 16 psi boost; rated 276 hp at 4,400 rpm and 360 lb-ft at 3,000 rpm, with Car and Driver's dynamometer showing 300 hp at 4,400 rpm and 380 lb-ft at 2,600 rpm"
 ],
 "productionTotal": null,
 "productionNotes": "No single figure covers this page's scope, which is every turbocharged Regal from 1984 through 1987 plus the GNX. The year-by-year counts that every enthusiast site repeats trace to one document, the Buick 'Facts and Figures Book', transcribed on gnttype.org and on buickturboregal.com: Grand National 2,000 for 1984, 2,102 for 1985, 5,512 for 1986 and 20,193 for 1987; T-Type 2,238, 1,575 and 1,921 for 1984-1986, with the 1987 Turbo-T (WE4) at 1,547; a turbo Regal Limited at 1,035 and a base turbo Regal at 4,268 for 1987; and 547 GNX. Both transcriptions state that 30,022 Regal Grand Nationals were built from 1982 to 1987, which includes the 215 non-black 1982 cars. Hagerty's 2025 buyer's guide independently gives 2,000 for 1984, 'over 20,000' for 1987, 'around 1500' Turbo-T cars and 547 GNX, and GM's own 2025 article confirms 547. Two things do not line up. First, the 1982 Grand National count: gnttype.org, buickturboregal.com and Wikipedia say 215, Hagerty says 216. Second, the 1984 yearly total: gnttype.org prints 'Total Turbo Cars = 5,204' for 1984 while buickturboregal.com prints 5,401 for the same three lines, and 2,000 plus 2,238 plus 1,163 is 5,401, so one page carries a transcription error that neither corrects. Because the per-model figures rest on a single book lineage that this research could not fetch directly, and because the two disagreements above are unresolved, no production total is asserted. The per-year Grand National numbers are stated in the text with that caveat. The GNX figure of 547 is the one number with genuinely independent support: GM, Car and Driver's period reporting of a planned 500, the Hagerty oral history explaining the extra 47 cars for the Select 60 dealers, Sports Car Market and classic.com all agree.",
 "notableTrims": [
  {
   "name": "Regal Grand National, 1984-1985 (non-intercooled)",
   "note": "The first all-black Grand National and the first with the sequential-injection turbo V6 at 200 hp. Buick built 2,000 in 1984 and 2,102 in 1985, so these are the scarce turbo GNs, but the 'hot air' engine gives away real performance to the intercooled cars and the market prices them accordingly."
  },
  {
   "name": "Regal Grand National, 1986",
   "note": "The intercooler year: 235 hp, 5,512 built. Mechanically the same car as the 1987 apart from 10 hp, and usually cheaper for it."
  },
  {
   "name": "Regal Grand National, 1987 (WE2)",
   "note": "245 hp, 20,193 built, the volume year and the one Car and Driver ran to 60 mph in 4.9 seconds. The WE2 package was a modest premium over a T-Type, which is why the Grand National outsold it."
  },
  {
   "name": "Regal T-Type, 1984-1987",
   "note": "The same LC2 turbo drivetrain in any Regal color with body-color trim instead of black. Because a T-Type is worth roughly half a Grand National, T-Types dressed as Grand Nationals are common; the VIN and a GM Heritage build sheet settle it."
  },
  {
   "name": "Regal Turbo-T (WE4), 1987 only",
   "note": "1,547 built. A lighter-spec T-Type with aluminum brake drums and bumper supports and less equipment; the quickest non-GNX Regal. 'Turbo T' was never a GM model name until Product Information Bulletin 87-031 of November 1986 designated WE4 a 'Special Turbo T Package'."
  },
  {
   "name": "Regal Limited with turbo, 1987",
   "note": "1,035 built. The full-luxury Regal with blacked-out trim and the 245 hp engine; the rarest turbocharged Regal other than the GNX and easily overlooked."
  },
  {
   "name": "GNX, 1987",
   "note": "547 cars converted by ASC and McLaren Engines from Grand Nationals: ceramic-wheel turbo, 16 psi, torque arm and Panhard rod rear suspension, staggered 16-inch wheels under composite flares, Stewart-Warner gauges and a numbered dash plaque. Rated 276 hp, dyno-tested at 300. Trades at roughly three and a half times a Grand National as of September 2026."
  }
 ],
 "specs": {
  "layout": "Front-mounted longitudinal engine, rear-wheel drive, live rear axle",
  "chassis": "GM G-body perimeter frame with separate steel body; 108.1 in (2,745.7 mm) wheelbase, 200.6 in (5,095.2 mm) overall length per Car and Driver",
  "engine": "3,791 cc (231 cu in) LC2 90-degree pushrod V6, 12 valves, iron block and heads, Garrett turbocharger, sequential port fuel injection, distributorless ignition; air-to-air intercooler from 1986",
  "power": "200 hp at 4,400 rpm (1984); 235 hp at 4,000 rpm (1986); 245 hp at 4,400 rpm (1987); GNX rated 276 hp at 4,400 rpm, a Buick figure that Car and Driver's dynamometer put at 300 hp",
  "torque": "300 lb-ft at 2,400 rpm (1984); 330 lb-ft at 2,400 rpm (1986); 355 lb-ft (1987, peak rpm disputed); GNX rated 360 lb-ft at 3,000 rpm, Car and Driver dyno 380 lb-ft at 2,600 rpm",
  "boost": "14 psi maximum on the 1987 Grand National, 16 psi on the GNX per Car and Driver",
  "transmission": "GM Turbo Hydra-Matic 200-4R 4-speed automatic with lockup converter; GNX received a recalibrated valve body and its own converter and cooler; no manual was offered",
  "rear_suspension": "Live axle on four links; GNX substituted a short torque arm and Panhard rod for the diagonal links, with a new frame crossmember",
  "brakes": "10.5 in (266.7 mm) vented front discs, 9.5 in (241.3 mm) rear drums on the GNX per Car and Driver; Powermaster hydraulic-electric booster",
  "wheels_tires": "Grand National 15-inch cross-lace alloys; GNX 16 x 8 in cast alloys with Goodyear Eagle VR50 245/50VR-16 front and 255/50VR-16 rear",
  "weight": "GNX 3,545 lb curb per Car and Driver (single source); 1987 Grand National 3,599 lb as tested by Edmunds (single source)",
  "acceleration": "1987 Grand National 0-60 mph in 4.9 s and the quarter mile in 13.9 s at 98 mph (Car and Driver, 1986); 6.1 s and 14.6 s at 92.2 mph on a 25-year-old example (Edmunds, 2012); GNX 4.7 s and 13.5 s at 102 mph (Car and Driver, May 1987)",
  "top_speed": "GNX fuel cut at 124 mph by the engine-control computer per Car and Driver; Buick engineers did not trust the chassis higher",
  "skidpad": "0.80 g on a 300 ft skidpad for the GNX, no better than the Grand National tested a year earlier (Car and Driver)",
  "fuel_economy_epa": "1987 Regal 3.8 turbo: 15 mpg city, 23 mpg highway, 18 mpg combined, premium gasoline (EPA)",
  "price_new": "GNX $29,290 per GM in 2025, $29,900 per Hagerty and Wikipedia; 1987 Grand National $18,295 base per GM, $18,514 as equipped per Edmunds",
  "production": "Grand National 2,000 (1984), 2,102 (1985), 5,512 (1986), 20,193 (1987); Turbo-T 1,547; GNX 547; all from one Buick book lineage, see production notes"
 },
 "summary": "The Buick Regal Grand National (1984-1987) is the car that made a division known for velour interiors briefly the quickest thing General Motors sold. It is a rear-wheel-drive G-body Regal coupe painted black, powered by Buick's 3,791 cc turbocharged V6 with sequential fuel injection, and from 1986 an air-to-air intercooler that lifted the rating from 200 hp to 235 and then 245 hp for 1987. The same LC2 drivetrain was available in any color as the Regal T-Type, in a lightened 1987-only Turbo-T (WE4) package and even in a full-luxury turbo Limited, so the Grand National was, as Hagerty puts it, a T-Type with black trim. Car and Driver ran a 1987 Grand National to 60 mph in 4.9 seconds when a Corvette could not. For the final year Buick's specialty group had ASC and McLaren Engines convert 547 Grand Nationals into the GNX, rated 276 hp and dyno-tested at 300, which cut the run to 4.7 seconds and the quarter mile to 13.5 at 102 mph. Buick built roughly 30,000 Grand Nationals from 1982 to 1987; as of September 2026 a good 1987 car trades around $50,000 and a GNX around $180,000 on classic.com's benchmarks.",
 "history": "## The Corvette Problem at Buick\n\nBuick did not set out to build a muscle car. In the late 1970s its Regal Sport Coupe carried an industry-first turbocharged 3.8-liter V6 as a fuel-economy answer to the V8, and the division's NASCAR program, which won the manufacturers' title in 1981, gave marketing a reason to put the series' old name on a Regal. The first Grand National, launched at the 1982 Daytona 500, was a two-tone gray trim package built off-line by Cars and Concepts; sources count 215 or 216 of them, and only about sixteen were turbocharged. What turned the name into a car was engine work started in mid-1982 under Don Runkle: a split-pin crankshaft and balance shaft, Bosch port fuel injection, distributorless ignition and digital EGR. Runkle's brief to his engine group was 'we have to beat the Corvette.'\n\n## Hot Air, Then Intercooled\n\nThe black Grand National arrived for 1984 as an option on the Regal T-Type, with the sequential-injection turbo V6 rated at 200 hp. Demand outran the 2,000 cars built, and 2,102 followed for 1985. These are the 'hot air' cars: no intercooler, and a turbo that owners say coked its bearings if the oil was neglected. For 1986 Buick added an air-to-air intercooler and a two-piece aluminum intake, and the rating jumped to 235 hp; 5,512 Grand Nationals were built. Another 10 hp came for 1987, when Buick built 20,193 Grand Nationals, 1,547 Turbo-T (WE4) cars with aluminum brake drums and bumper supports, 1,035 turbocharged Limiteds and 4,268 base turbo Regals. Car and Driver ran a 1987 Grand National to 60 mph in 4.9 seconds and through the quarter in 13.9 at 98 mph, from a car that started around $16,000 as a T-Type and roughly $18,300 as a Grand National.\n\n## Why the GNX Nearly Did Not Happen\n\nGM had decided to move the Regal to front-wheel drive for 1988, which killed the rear-drive turbo car. Chief engineer Dave Sharpe asked his Specialty Car Group for a farewell that would beat the Corvette to 60 and through the quarter mile, and Mike Doble's small group did the engine work on their own time because the production engine group was too busy. The program started under general manager Donald Hackworth, who liked it; his successor Ed Mertz had been sent to make Buick the luxury car just below Cadillac and was lukewarm at best, while comptroller Dick Payne was 'absolutely beside himself.' Sharpe says the plug would have been pulled without marketing manager Darwin Clark. The number went from 200 to 500, for the Indy 500 and the Daytona 500, then to 547 because only 47 dealers had met the criteria for Buick's Select 60 program in 1986 and Mertz promised each of them a second car.\n\n## What ASC and McLaren Actually Changed\n\nBuick contracted ASC, which had built the 1982-85 Riviera convertible, and McLaren Engines, which knew the V6 from racing. McLaren insisted on a lighter ceramic turbine wheel to cut spool-up time; Sharpe says the turbo size did not change, Car and Driver's May 1987 test describes a larger turbocharger, and the two accounts are not reconciled. Heads were ported, the intercooler outlet was insulated, a dual exhaust and recalibrated PROM were fitted and boost rose to 16 psi. ASC's side was a new valve body for the 200-4R, a short torque arm and Panhard rod in place of the diagonal links, a new frame crossmember, composite flares and staggered 16-inch wheels on Goodyear Eagle VR50s, the production wheels cast and welded by a Japanese supplier. Buick rated the result at 276 hp and 360 lb-ft; Car and Driver's dynamometer showed 300 hp and 380 lb-ft, and in 0-60 only the Callaway Twin-Turbo Corvette matched the Buick and only the Porsche 911 Turbo beat it. Every GNX except the two prototypes was sold to a dealer before the first production car was finished, so there were no press cars; magazines drove the prototypes near Buick's Mesa, Arizona, proving ground, one writer at a time.\n\n## Aftermath\n\nThe GNX listed for a shade under $30,000, about $10,000 over a Grand National, and Doble recalls some selling for $80,000 to $90,000. The engine, which Car and Driver called 'one orphan that cries out for adoption,' did not survive the Regal's move to front-wheel drive. Grand Nationals spent the 1990s as cheap, modified street cars, which is why originality is now the whole conversation.",
 "marketNotes": "As of September 2026, classic.com's market benchmark for the 1982-1987 Buick Grand National stands at $48,676, with an average recorded sale of $50,320 and an upward trend; its lowest tracked result is $14,300 for a 1985 car in October 2021, and dealer listings in September 2026 ran from $53,997 for a 71,000-mile 1987 car to $149,900 for a 3,000-mile example. The GNX is a separate market. As of September 2026 classic.com's GNX benchmark is $180,626 with an average sale of $184,237, a low of $90,500 in May 2022 and, at the top, a 29-mile car listed at $396,773 in September 2026. Auction results bracket that: Mecum Kissimmee sold a 5,000-mile GNX, lot S238, for $192,500 in January 2026 (classic.com does not state whether that figure includes buyer's premium), and Sports Car Market records an 8.7-mile GNX, number 480 of 547, at $275,000 including buyer's premium at Barrett-Jackson Las Vegas in June 2021. Hagerty's November 2025 buyer's guide put a number 2 condition 1987 T-Type at about $34,900, a Grand National at about double that, a WE4 Turbo-T at roughly $6,000 over a T-Type, and a number 2 GNX at $176,000 with exceptional low-mile cars around $250,000. The spread inside each model is driven by mileage and originality: a stock, documented, low-mile 1987 Grand National sits near the top of the range while a modified or repainted driver sits near the benchmark or below it, and the 1984-1985 non-intercooled cars trail the 1986-1987 cars.",
 "whatToLookFor": "The first question on any black Regal is whether it left the factory as a Grand National. The WE2 package is coded in the build sheet, and GM's Heritage Archive sells the build sheet and dealer invoice for 1977-and-later cars for a small fee; Hagerty's guide is blunt that T-Types dressed as Grand Nationals are not uncommon and that the VIN should be checked for tampering. On a GNX, the numbered dash plaque must agree with the documentation and the car should carry the torque arm, Panhard rod, composite flares, 16-inch wheels and Stewart-Warner cluster it was converted with. Rust is the structural issue: rocker panels, windshield A-pillars and roof drip rails on every car, and anywhere at all on a T-top car. Replacement sheet metal is available; the labor is not cheap. Interior parts have become the hard part, with door-panel pieces that were a few dollars a decade ago now trading in the hundreds or more, so a complete, unfaded interior is worth paying for. Then modifications. Most Grand Nationals were modified through the 1990s when they were cheap, and while some of that has been reversed as values rose, a stock turbo, stock chip, stock injectors and a stock exhaust are the exception; each replacement needs to be identified and priced as either a benefit or a reversal cost. A modern ALDL scanner reads stored codes and live sensor data and is the quickest way to see whether the fuel and ignition system is healthy. Service records matter more than usual because the deferred items, timing chain, fluids and suspension bushings, add up quickly. Confirm the Powermaster brake system holds pressure and that the transmission shifts crisply, and read the two 1987 recalls (cruise-control servo bushing, transmission manual-valve link) as items a careful owner would already have had done.",
 "commonProblems": "The 3.8 turbo V6 itself is stout. The recurring engine complaint is the driver-side exhaust header, which cracks; Hagerty and long-time owners on turbobuick.com both name it first. The factory timing gear has nylon teeth and high-mileage engines want a steel gear set before it fails. The rear main seal begins to leak once boost is raised above stock, and stock valve springs tire with miles. On the 1984-1985 non-intercooled cars the turbo bearing was vulnerable to oil coking when oil changes were skipped; owners recommend synthetic oil and a lighter foot until warm. The stock fuel pump and its wiring are weak enough that owners upgrade them as a first job. The 200-4R automatic is the other known limit: forum teardowns list sheared forward-drum shafts, cracked overdrive carrier splines, stripped stator support splines, sheared band pins and a direct clutch pack with too little capacity for a car making much more than stock power. NHTSA carries a 1987 recall for an improperly formed manual-valve link in the transmission and another for a cruise-control servo bushing that could cause unexpected engine-speed increases. The Powermaster hydraulic-electric brake booster fails at the accumulator ball and pressure switch, and owners describe the result as brake loss with no warning; many cars have been converted to vacuum boost. Smaller items: the high-speed blower fan circuit fails, T-tops leak and squeak, and the 1980s fuel-injection electronics need an ALDL-capable scanner to diagnose. Aftermarket support for the electronics, chips and turbo hardware is unusually good for a 1980s car.",
 "valueTrajectory": "The Grand National was an over-sticker car when new, with dealers charging above the roughly $18,300 list in 1984 and 1987 and Buick reporting 'a fair amount of thefts', but it spent the 1990s and 2000s as a cheap street car that was modified rather than preserved. As of September 2026 classic.com's benchmark of $48,676 and average sale of $50,320 for a Grand National both carry an upward trend indicator, with recent fixed-price listings for low-mile 1987 cars up to $149,900, so the market has separated stock, documented, low-mile cars from the rest by a factor of two or three. The GNX has moved further and faster. Its recorded low on classic.com is $90,500 in May 2022, the benchmark stands at $180,626 as of September 2026, a 5,000-mile car made $192,500 at Mecum in January 2026 and Sports Car Market recorded $275,000 for an 8.7-mile car in 2021 that had cost $205,000 two years earlier. Hagerty's late-2025 editorial figures, $176,000 for a number 2 GNX and around $250,000 for low-mile showpieces, sit inside that range. The 547-car GNX has been rerated as the quickest American production car of its year rather than a black Buick; the 20,193-car 1987 Grand National has the volume to keep prices for ordinary examples in check, which is what the benchmark reflects.",
 "overallConfidence": "medium",
 "sources": [
  {
   "ref": "gm-news-reuss",
   "title": "GM's Mark Reuss, the big game, and the story of the Buick GNX",
   "url": "https://news.gm.com/home.detail.html/Pages/topic/us/en/2025/feb/0217-buick.html",
   "publisher": "General Motors",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "GM's own 2025 account: 547 GNX built with ASC Inc. and McLaren Engines, sold briefly in 1987, original MSRP $29,290 against $18,295 for the Grand National, and Lloyd Reuss's green light for the Grand National."
  },
  {
   "ref": "classicindustries-gnx",
   "title": "Buick GNX Specs - Examining the Ultimate Grand National",
   "url": "https://news.classicindustries.com/buick-gnx-specs",
   "publisher": "Classic Industries",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Parts-supplier spec sheet: GNX advertised at 276 hp and 360 lb-ft, third-party testing over 300 hp and 400 lb-ft at 3,900 rpm, 547 built, Garrett ceramic-impeller turbo, Panhard rod, 16 x 8 wheels with 245/50 and 255/50 tires, TH200-4R."
  },
  {
   "ref": "classicindustries-gn",
   "title": "1984-1987 Buick Grand National or '87 GNX - Hunting for Rare or Unicorn",
   "url": "https://news.classicindustries.com/1984-1987-buick-grand-national-or-87-gnx-hunting-for-medium-rare-or-unicorn",
   "publisher": "Classic Industries",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Year-by-year rated output table: 1984 200 hp and 300 lb-ft, 1986 235 hp and 330 lb-ft, 1987 GN 245 hp and 355 lb-ft, GNX 276 hp and 360 lb-ft; intercooler added for 1986; GNX 547 built."
  },
  {
   "ref": "epa-fueleconomy-1987",
   "title": "Fuel Economy of 1987 Buick Regal",
   "url": "https://www.fueleconomy.gov/feg/PowerSearch.do?action=noform&path=1&year1=1987&year2=1987&make=Buick&baseModel=Regal&srchtyp=ymm",
   "publisher": "US Environmental Protection Agency",
   "sourceType": "government",
   "reliability": "high",
   "notes": "EPA listing for the 1987 Regal 3.8 L 6-cylinder turbo with 4-speed automatic: 15 mpg city, 23 highway, 18 combined, premium gasoline; confirms the US-market engine and transmission for the 1987 model year."
  },
  {
   "ref": "nhtsa-recalls-1987-regal",
   "title": "NHTSA recalls by vehicle: 1987 Buick Regal",
   "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=buick&model=regal&modelYear=1987",
   "publisher": "National Highway Traffic Safety Administration",
   "sourceType": "government",
   "reliability": "high",
   "notes": "Three campaigns on the 1987 Regal: 87V168000 (transmission manual valve link improperly formed), 89V102000 (cruise control servo bail bushing causing unexpected engine speed increases) and a 2006 aftermarket Fram fuel filter campaign."
  },
  {
   "ref": "caranddriver-gnx-1987",
   "title": "Tested: 1987 Buick GNX Exercises Brute Force",
   "url": "https://www.caranddriver.com/reviews/a33502193/tested-1987-buick-gnx/",
   "publisher": "Car and Driver",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "May 1987 issue road test of a prototype GNX: 500 planned, ASC and McLaren Engines, 245 hp Grand National base, 300 hp on the dyno, larger turbo with ceramic wheel, 16 psi, 124 mph fuel cut, torque arm and Panhard rod, 0-60 in 4.7 s, quarter 13.5 at 102 mph, 0.80 g, 3,545 lb, 300 hp at 4,400 and 380 lb-ft at 2,600 in the spec box, $27,000 estimated price, prior Grand National test at 4.9 s and 13.9 at 98 mph."
  },
  {
   "ref": "edmunds-gn-track",
   "title": "1987 Buick Regal Grand National Track Test",
   "url": "https://www.edmunds.com/car-reviews/track-tests/1987-buick-regal-grand-national-track-test.html",
   "publisher": "Edmunds",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Instrumented 2012 test of a 1987 Grand National: 245 hp at 4,400 rpm, 355 lb-ft at 2,800 rpm, 3,599 lb as tested, 0-60 in 6.1 s, quarter 14.6 at 92.2 mph, 60-0 in 145 ft, 0.82 g, original price $18,514 as equipped."
  },
  {
   "ref": "gnttype-production",
   "title": "T-Type, Grand National, GNX Production Figures",
   "url": "https://www.gnttype.org/general/product.html",
   "publisher": "GNTTYPE.org (Grand National and T-Type owners site)",
   "sourceType": "registry",
   "reliability": "medium",
   "notes": "Year-by-year turbo Regal production and ratings transcribed from the Buick Facts and Figures Book: 1984 GN 2,000, 1985 GN 2,102, 1986 GN 5,512, 1987 GN 20,193, Turbo T 1,547, Limited turbo 1,035, base turbo 4,268, GNX 547; 1982 GN 215; 1984 total printed as 5,204; 30,022 Grand Nationals 1982-1987; torque peak for 1987 at 2,000 rpm."
  },
  {
   "ref": "buickturboregal-production",
   "title": "Buick Turbo Regal Production Figures 1978-1987",
   "url": "https://buickturboregal.com/buick-turbo-regal-production-figures-1978-1987/",
   "publisher": "BuickTurboRegal.com",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Second transcription of the same Facts and Figures Book: identical per-model counts, but 1984 total printed as 5,401 and 1985 as 4,202; 1982 Grand National 215; total Grand Nationals 1982-1987 30,022; Turbo T 1,547 in 1987 only."
  },
  {
   "ref": "turbobuick-tt-thread",
   "title": "T-Type and Turbo T production numbers?",
   "url": "https://turbobuick.com/threads/t-type-and-turbo-t-production-numbers.278309/",
   "publisher": "Turbo Buick Forum",
   "sourceType": "club-forum",
   "reliability": "low",
   "notes": "Owner forum thread repeating the 1987 counts (GNX 547, WE2 20,193, WE4 1,547, Limited turbo 1,035, base turbo 4,268) and explaining that 'Turbo T' was not a GM model name until Product Information Bulletin 87-031 of November 15, 1986 designated WE4 a Special Turbo T Package; option codes Y56, WO2, LC2. Used for nomenclature, not for production."
  },
  {
   "ref": "hagerty-buyers-guide",
   "title": "From T-Type to Grand National and GNX: Your Handy Buick Turbo Buyer's Guide",
   "url": "https://www.hagerty.com/media/market-trends/hagerty-insider/from-t-type-to-grand-national-and-gnx-your-handy-buick-turbo-buyers-guide/",
   "publisher": "Hagerty Media",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "November 2025 editorial buyer's guide: 1982 GN 216 cars by Cars and Concepts, 1984 sequential injection 200 hp and 2,000 built, 1986 intercooler 235 hp, 1987 245 hp, WE2 about $675 over a T-Type, WE4 content, GNX 276 hp and 360 lb-ft, 547 with the 500 plus 47 dealer story, GNX price $29,900, Car and Driver 4.9 s, 'around 1500' Turbo-T vs over 20,000 GN, rust points, cracked left header, ALDL, modifications, Heritage Archive build sheets, and Hagerty number 2 values ($34,900 T-Type, $176,000 GNX, ~$250,000 low-mile)."
  },
  {
   "ref": "classic-com-gn",
   "title": "Buick Grand National Market",
   "url": "https://www.classic.com/m/buick/regal/2nd-gen/grand-national/",
   "publisher": "CLASSIC.COM",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Fetched September 2026: CMB benchmark $48,676 trending up, average sale $50,320, lowest tracked $14,300 for a 1985 car on October 22, 2021, recent 1987 listings at $149,900 (3k miles), $53,997 (71k) and $60,995 (34k TMU)."
  },
  {
   "ref": "classic-com-gnx",
   "title": "Buick GNX Market",
   "url": "https://www.classic.com/m/buick/regal/2nd-gen/gnx/",
   "publisher": "CLASSIC.COM",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Fetched September 2026: CMB benchmark $180,626 trending up, average $184,237, lowest $90,500 on May 31, 2022, recent results $396,773 (29 miles, dealer, Sep 3 2026), $225,000 (BaT, Jul 2026), $192,500 (Mecum, Jan 2026); 547 built."
  },
  {
   "ref": "classic-com-mecum-gnx-lot",
   "title": "1987 Buick Regal GNX sold at Mecum Kissimmee (2026)",
   "url": "https://www.classic.com/a/mecum-kissimmee-2026-PnBl3Kp/lots/1987-buick-regal-gnx-n3G55Rn",
   "publisher": "CLASSIC.COM",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Individual lot record: Mecum Kissimmee lot S238, sold $192,500 on January 17, 2026, about 5,000 miles, VIN 1G4GJ1173HP449474, listed as original; page does not say whether the price includes buyer's premium."
  },
  {
   "ref": "scm-gnx-profile",
   "title": "1987 Buick GNX - Sports Car Market",
   "url": "https://www.sportscarmarket.com/profile/1987-buick-gnx-2",
   "publisher": "Sports Car Market",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Auction profile: lot 737 at Barrett-Jackson Las Vegas, June 19, 2021, $275,000 including buyer's premium, 8.7 miles, number 480 of 547, previously $205,000 on Bring a Trailer two years earlier; 276 hp official with speculation of 300; McLaren Performance Technologies/ASC."
  },
  {
   "ref": "turbobuick-problems",
   "title": "What are some common problems with Grand Nationals?",
   "url": "https://turbobuick.com/threads/what-are-some-common-problems-with-grand-nationals.69815/",
   "publisher": "Turbo Buick Forum",
   "sourceType": "club-forum",
   "reliability": "low",
   "notes": "Owner fault patterns: cracked driver-side header, nylon-tooth timing gear, rear main seal leaking with raised boost, Powermaster accumulator and pressure switch failures, weak fuel pump and wiring, blower high-speed failure, leaking T-tops, tired valve springs."
  },
  {
   "ref": "wikipedia-buick-regal",
   "title": "Buick Regal",
   "url": "https://en.wikipedia.org/wiki/Buick_Regal",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Pointer only: 1982 GN 215 cars retrofitted by Cars and Concepts, 1984 200 hp, 1986 intercooler 235 hp, 1987 245 hp and 355 lb-ft, GNX $29,900, 547 sent to McLaren, Garrett T-3 ceramic-impeller turbo, WE4 1,547."
  },
  {
   "ref": "hagerty-gnx-oral-history",
   "title": "Bad, black, and boosted",
   "url": "https://www.hagerty.com/media/car-profiles/buick-gnx/",
   "publisher": "Hagerty Media",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "December 2017 oral history with Dave Sharpe, Mike Doble, Ed Mertz, Don Runkle, Darwin Clark and Larry Gustin: Lloyd Reuss and the 1982 car, the 1982 engine modernization, Mertz lukewarm, Payne opposed, ASC/McLaren contract, ceramic turbine with turbo size unchanged, 200 then 500 then 547 via 47 Select 60 dealers, no press cars, $10,000 over a GN sticker with some at $80,000-$90,000."
  },
  {
   "ref": "streetmuscle-gnx",
   "title": "Rare Rides: The 1987 Buick GNX",
   "url": "https://www.streetmusclemag.com/features/rare-rides-the-1987-buick-gnx/",
   "publisher": "Street Muscle Magazine",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Enthusiast feature: 276 hp and 360 lb-ft rated, 'closer to 300 ponies and 420 lb-ft' actual, $29,900, Garrett T-3, reprogrammed 200-4R with custom converter and cooler, Panhard rod and torque bar, 245/50 and 255/50 tires, composite flares, Stewart-Warner gauges, numbered dash plaque; also quotes a 4.6 s and 12.7 s figure not matched by any period test consulted."
  },
  {
   "ref": "turbobuick-200-4r",
   "title": "Group effort to illustrate 200-4r weak points",
   "url": "https://turbobuick.com/threads/group-effort-to-illustrate-200-4r-weak-points.455186/",
   "publisher": "Turbo Buick Forum",
   "sourceType": "club-forum",
   "reliability": "low",
   "notes": "Owner and transmission-builder teardown findings on the 200-4R: forward drum shaft shears, overdrive carrier spline cracks, stator support splines strip, band pin shears, direct piston distorts, pump slide breaks, direct clutch capacity too low for high output."
  }
 ],
 "claims": [
  {
   "section": "production",
   "claimText": "Buick built 547 GNX cars for the 1987 model year, converted from Grand Nationals by ASC and McLaren Engines.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["gm-news-reuss", "hagerty-gnx-oral-history", "scm-gnx-profile", "classic-com-gnx"],
   "evidence": [
    { "ref": "gm-news-reuss", "quote": "Buick only built 547 of them, with the help of Michigan-based companies ASC Inc. and McLaren Engines." },
    { "ref": "hagerty-gnx-oral-history", "quote": "Mertz told me to make 547 cars, because these other 47 dealers deserved a second one." },
    { "ref": "scm-gnx-profile", "quote": "With only 547 examples built (one for each dealer), it was an instant collectible." },
    { "ref": "classic-com-gnx", "quote": "Buick produced only 547 GNs with the interior trim package, that were then sent off to McLaren and upgraded into the Buick GNX." }
   ]
  },
  {
   "section": "production",
   "claimText": "The GNX run grew from a planned 200 to 500 and then to 547 because 47 dealers qualified for Buick's Select 60 program in 1986 and were each promised a second car.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["hagerty-gnx-oral-history", "hagerty-buyers-guide", "caranddriver-gnx-1987"],
   "evidence": [
    { "ref": "hagerty-gnx-oral-history", "quote": "The original production number was just 200. Then we decided to build 500 because of the Indy 500 and the Daytona 500." },
    { "ref": "hagerty-buyers-guide", "quote": "the automaker's dealer-relations team requested an additional 47 to send to its top-performing stores" },
    { "ref": "caranddriver-gnx-1987", "quote": "The plan is to produce only 500 GNXs (in any color you want, as long as it's black)" }
   ]
  },
  {
   "section": "production",
   "claimText": "The commonly cited Grand National production figures of 2,000 for 1984, 2,102 for 1985, 5,512 for 1986 and 20,193 for 1987 all trace to the Buick Facts and Figures Book as transcribed by two enthusiast sites, and the two transcriptions disagree on the 1984 yearly total.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["gnttype-production", "buickturboregal-production", "hagerty-buyers-guide"],
   "conflictNote": "gnttype.org prints 'Total Turbo Cars = 5,204' for 1984; buickturboregal.com prints a 1984 total of 5,401 from the same three lines (2,000 Grand National, 2,238 T-Type, 1,163 WH1), which is what those lines sum to. Both sites credit the Facts and Figures Book, which this research could not fetch. Hagerty independently gives 2,000 for 1984 and 'over 20,000' for 1987. Not resolved by any source consulted here.",
   "evidence": [
    { "ref": "gnttype-production", "quote": "Grand National (WE2) 20,193 Produced 245 HP @ 4400 RPM" },
    { "ref": "buickturboregal-production", "quote": "1984 Grand National 2,000 T-Type 2,238 WH1 1,163 total 5,401" },
    { "ref": "hagerty-buyers-guide", "quote": "Demand for the extra-spicy new Buick Grand National easily outpaced the 2000 that the automaker built for 1984" }
   ]
  },
  {
   "section": "production",
   "claimText": "The 1982 Grand National, a gray trim package built off-line by Cars and Concepts, is counted at 215 cars by the enthusiast production tables and Wikipedia and at 216 by Hagerty.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["gnttype-production", "wikipedia-buick-regal", "hagerty-buyers-guide"],
   "conflictNote": "gnttype.org and buickturboregal.com state 215 (with about 16 turbocharged); Wikipedia states 215; Hagerty's 2025 buyer's guide states 216. Not resolved by any source consulted here.",
   "evidence": [
    { "ref": "gnttype-production", "quote": "Rarest Grand National: The 1982 with only 215 produced." },
    { "ref": "wikipedia-buick-regal", "quote": "Cars and Concepts of Brighton, Michigan, retrofitted 215 Regals with the GN package." },
    { "ref": "hagerty-buyers-guide", "quote": "The 216 cars built that year were plucked from the assembly line and shipped to specialty builder Cars and Concepts" }
   ]
  },
  {
   "section": "production",
   "claimText": "For 1987 the turbocharged engine was also sold in 1,547 Turbo-T (WE4) cars, 1,035 Regal Limiteds and 4,268 base Regals, alongside 20,193 Grand Nationals.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["gnttype-production", "buickturboregal-production", "hagerty-buyers-guide"],
   "evidence": [
    { "ref": "gnttype-production", "quote": "Total Turbo Ts produced: 1,547 in 1987 only." },
    { "ref": "buickturboregal-production", "quote": "GNX 547 Grand National 20,193 Regal 60,600 Regal Limited 59,780 Regal Limited w/Turbo 1,035 Turbo T 1,547" },
    { "ref": "hagerty-buyers-guide", "quote": "Buick made around 1500 Turbo-T models for 1987, in marked contrast to over 20,000 Grand Nationals." }
   ]
  },
  {
   "section": "specs",
   "claimText": "The turbocharged 3.8-liter V6 was rated at 200 hp for 1984, 235 hp with the intercooler for 1986 and 245 hp for 1987.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["classicindustries-gn", "hagerty-buyers-guide", "wikipedia-buick-regal"],
   "evidence": [
    { "ref": "classicindustries-gn", "quote": "1986: 235 HP, 330 lb-ft" },
    { "ref": "hagerty-buyers-guide", "quote": "For 1986, an intercooler system, a two-piece aluminum intake manifold, and upgraded fuel injection dramatically bumped power to 235 hp. Another 10 horses arrived for 1987." },
    { "ref": "wikipedia-buick-regal", "quote": "For 1987, performance increased 10 hp, to 245 hp (183 kW) and 355 lb" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 1987 Grand National's 355 lb-ft torque rating is placed at 2,000 rpm by the gnttype.org production table and at 2,800 rpm by Edmunds.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["gnttype-production", "edmunds-gn-track"],
   "conflictNote": "gnttype.org lists the 1987 Grand National at 355 ft-lbs at 2000 rpm; Edmunds' spec box gives 355 lb-ft at 2,800 rpm. The peak figure agrees; the rpm does not. Not resolved by any source consulted here.",
   "evidence": [
    { "ref": "gnttype-production", "quote": "Grand National (WE2) 20,193 Produced 245 HP @ 4400 RPM 355 ft-lbs of torque at 2000 RPM" },
    { "ref": "edmunds-gn-track", "quote": "Torque (lb-ft @ rpm): 355 @ 2,800" }
   ]
  },
  {
   "section": "specs",
   "claimText": "Buick rated the GNX at 276 hp and 360 lb-ft, while Car and Driver's dynamometer recorded 300 hp at 4,400 rpm and 380 lb-ft at 2,600 rpm and other sources quote 400 to 420 lb-ft.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["classicindustries-gnx", "caranddriver-gnx-1987", "streetmuscle-gnx", "hagerty-buyers-guide"],
   "conflictNote": "The 276 hp and 360 lb-ft rating is consistent across Classic Industries, Hagerty and Wikipedia. The actual output is not: Car and Driver's May 1987 spec box gives 300 hp at 4,400 rpm and 380 lb-ft at 2,600 rpm; Classic Industries cites third-party testing of more than 300 hp and 400 lb-ft at 3,900 rpm; Street Muscle says closer to 300 hp and 420 lb-ft. Not resolved by any source consulted here.",
   "evidence": [
    { "ref": "classicindustries-gnx", "quote": "Third-party testing revealed that the GNX's turbo V6 actually produced more than 300 horsepower and 400 ft-lbs of torque at 3,900rpm" },
    { "ref": "caranddriver-gnx-1987", "quote": "Power: 300 hp @ 4400 rpm Torque: 380 lb-ft @ 2600 rpm" },
    { "ref": "streetmuscle-gnx", "quote": "Actual numbers were closer to 300 ponies and a massive 420 lb-ft of torque." },
    { "ref": "hagerty-buyers-guide", "quote": "free-flow heads to boost output to 276 hp and 360 lb-ft of torque" }
   ]
  },
  {
   "section": "specs",
   "claimText": "Car and Driver's May 1987 test recorded the GNX at 4.7 seconds to 60 mph and 13.5 seconds at 102 mph in the quarter mile, against 4.9 and 13.9 at 98 mph for the Grand National it had tested a year earlier.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["caranddriver-gnx-1987", "hagerty-buyers-guide"],
   "evidence": [
    { "ref": "caranddriver-gnx-1987", "quote": "rockets to 60 in 4.7 seconds and squirts through the quarter-mile in 13.5 seconds at 102 mph" },
    { "ref": "hagerty-buyers-guide", "quote": "Car and Driver pegged one at just 4.9 seconds to 60 mph" }
   ]
  },
  {
   "section": "specs",
   "claimText": "A 1987 Grand National tested by Edmunds in 2012 weighed 3,599 lb and ran 0-60 in 6.1 seconds and the quarter mile in 14.6 seconds at 92.2 mph; Car and Driver listed the GNX at 3,545 lb, and no second source for either weight was found.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["edmunds-gn-track", "caranddriver-gnx-1987"],
   "evidence": [
    { "ref": "edmunds-gn-track", "quote": "As Tested Curb Weight (lb): 3,599" },
    { "ref": "caranddriver-gnx-1987", "quote": "Curb weight: 3545 lb" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The GNX ran 16 psi of boost, 2 psi more than the Grand National, and its engine computer cut fuel at 124 mph.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["caranddriver-gnx-1987"],
   "evidence": [
    { "ref": "caranddriver-gnx-1987", "quote": "Maximum boost has been increased to 16 psi, two more than the Grand National's allotment, but a circuit in the engine-control computer still shuts off the fuel flow at 124 mph." }
   ]
  },
  {
   "section": "history",
   "claimText": "Car and Driver described the GNX turbocharger as larger than the Grand National's, while Buick chief engineer Dave Sharpe says the turbo size was unchanged and only the turbine wheel was made lighter.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["caranddriver-gnx-1987", "hagerty-gnx-oral-history", "classicindustries-gnx"],
   "conflictNote": "Car and Driver, May 1987: 'a larger turbocharger with a ceramic turbine wheel'. Dave Sharpe in Hagerty's 2017 oral history: 'We didn't change the size of the turbo'. Classic Industries describes a new Garrett hybrid turbo with a ceramic impeller without stating size. Not resolved by any source consulted here.",
   "evidence": [
    { "ref": "caranddriver-gnx-1987", "quote": "a larger turbocharger with a ceramic turbine wheel, a dual exhaust system, a recalibrated PROM" },
    { "ref": "hagerty-gnx-oral-history", "quote": "We didn't change the size of the turbo, but we added an intercooler to cool the hot compressed air before it entered the engine." },
    { "ref": "classicindustries-gnx", "quote": "New Garrett Hybrid turbo featuring a super-lightweight ceramic impeller" }
   ]
  },
  {
   "section": "history",
   "claimText": "ASC replaced the Grand National's diagonal rear locating links with a short torque arm and a Panhard rod on the GNX, and fitted staggered 16-inch wheels with 245/50 front and 255/50 rear tires under composite fender flares.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["caranddriver-gnx-1987", "classicindustries-gnx", "streetmuscle-gnx"],
   "evidence": [
    { "ref": "caranddriver-gnx-1987", "quote": "ASC substituted a short torque arm and a Panhard rod for the Grand National's pair of diagonal locating links." },
    { "ref": "classicindustries-gnx", "quote": "black mesh wheels with 245/50/16 tires up front and 255/50/16 tires out rear" },
    { "ref": "streetmuscle-gnx", "quote": "Composite fender flares were necessary to accommodate these wider shoes." }
   ]
  },
  {
   "section": "history",
   "claimText": "The GNX program was pushed through by chief engineer Dave Sharpe and Mike Doble's small group against a lukewarm general manager, Ed Mertz, and an opposed comptroller, with ASC and McLaren Engines contracted for the conversion.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["hagerty-gnx-oral-history", "caranddriver-gnx-1987"],
   "evidence": [
    { "ref": "hagerty-gnx-oral-history", "quote": "To say that Ed was lukewarm to the GNX would be putting it mildly." },
    { "ref": "caranddriver-gnx-1987", "quote": "Buick turned the GNX project over to the Automobile Specialty Company (a division of ASC) and McLaren Engines." }
   ]
  },
  {
   "section": "history",
   "claimText": "The 1987 Turbo-T (WE4) package was a lighter-spec T-Type with aluminum brake drums and bumper supports, and 'Turbo T' was not a GM model name until a November 1986 product bulletin.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["hagerty-buyers-guide", "turbobuick-tt-thread"],
   "evidence": [
    { "ref": "hagerty-buyers-guide", "quote": "the new Regal Turbo T package, known as WE4, trimmed a bit of weight via aluminum brakes, bumper supports, and less equipment" },
    { "ref": "turbobuick-tt-thread", "quote": "no where in Buick's literature was there ever any mention of the term" }
   ]
  },
  {
   "section": "market",
   "claimText": "GM states the GNX's original MSRP as $29,290 against $18,295 for the Grand National, while Hagerty, Wikipedia and Street Muscle give $29,900; Car and Driver estimated $27,000 before launch.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["gm-news-reuss", "hagerty-buyers-guide", "wikipedia-buick-regal", "caranddriver-gnx-1987"],
   "conflictNote": "GM News (2025): $29,290. Hagerty (2025): $29,900. Wikipedia: US$29,900. Street Muscle: $29,900. Car and Driver, May 1987, pre-launch estimate: $27,000. The $610 gap between GM's figure and the widely repeated $29,900 is not explained by any source consulted here and is not resolved.",
   "evidence": [
    { "ref": "gm-news-reuss", "quote": "The original MSRP for the GNX was $29,290, which, as Buick noted at launch, compared to $18,295" },
    { "ref": "hagerty-buyers-guide", "quote": "GM charged $29,900 for a Buick GNX, though some dealers reportedly charged buyers twice that." },
    { "ref": "wikipedia-buick-regal", "quote": "Buick introduced the limited production GNX, for 'Grand National Experimental', at US$29,900." },
    { "ref": "caranddriver-gnx-1987", "quote": "at least 500 such people will be willing to pay $27,000 for this slice of automotive history" }
   ]
  },
  {
   "section": "market",
   "claimText": "As of September 2026 classic.com's benchmark for the Grand National is $48,676 with an average sale of $50,320, and for the GNX $180,626 with an average of $184,237, both trending upward.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["classic-com-gn", "classic-com-gnx"],
   "evidence": [
    { "ref": "classic-com-gn", "quote": "The average price of a Buick Regal - 2nd Gen - Grand National is $50,320." },
    { "ref": "classic-com-gnx", "quote": "The average price of a Buick Regal - 2nd Gen - Gnx is $184,237." }
   ]
  },
  {
   "section": "market",
   "claimText": "A 5,000-mile GNX sold for $192,500 at Mecum Kissimmee in January 2026, and an 8.7-mile GNX, number 480 of 547, sold for $275,000 including buyer's premium at Barrett-Jackson Las Vegas in June 2021.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["classic-com-mecum-gnx-lot", "classic-com-gnx", "scm-gnx-profile"],
   "evidence": [
    { "ref": "classic-com-mecum-gnx-lot", "quote": "Mecum Kissimmee (2026)" },
    { "ref": "classic-com-gnx", "quote": "$90,500 for a 1987 Buick GNX on May 31, 2022" },
    { "ref": "scm-gnx-profile", "quote": "This car, Lot 737, sold for $275,000, including buyer's premium, at Barrett-Jackson's Las Vegas sale on June 19, 2021." }
   ]
  },
  {
   "section": "market",
   "claimText": "A 1987 Grand National carried an as-equipped original price of $18,514 on the car Edmunds tested, and the EPA rated the 1987 turbo Regal at 15 mpg city and 23 mpg highway on premium gasoline.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["edmunds-gn-track", "epa-fueleconomy-1987"],
   "evidence": [
    { "ref": "edmunds-gn-track", "quote": "Price: $18,514 (original price, we paid $25,000)" },
    { "ref": "epa-fueleconomy-1987", "quote": "1987 Buick Regal 3.8 L, 6 cyl, Automatic 4-spd, Turbo, Premium Gasoline 18 MPG 15 23 combined city/hwy" }
   ]
  },
  {
   "section": "problems",
   "claimText": "The driver-side exhaust header is prone to cracking and the rest of the 3.8 turbo V6 is regarded as stout.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["hagerty-buyers-guide", "turbobuick-problems"],
   "evidence": [
    { "ref": "hagerty-buyers-guide", "quote": "Aside from a crack-prone left-side exhaust header, the 3.8-liter V-6 is fairly stout." },
    { "ref": "turbobuick-problems", "quote": "Cracked driver side exhaust header." }
   ]
  },
  {
   "section": "problems",
   "claimText": "The Powermaster brake booster's accumulator and pressure switch are known failure points, and owners describe the failure as sudden brake loss.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["turbobuick-problems"],
   "evidence": [
    { "ref": "turbobuick-problems", "quote": "failures in the accumulator ball and the pressure switch for the brakes." }
   ]
  },
  {
   "section": "problems",
   "claimText": "The 200-4R automatic's weak points under raised power include sheared forward-drum shafts, cracked overdrive carrier splines, stripped stator support splines and a direct clutch with too little capacity, and NHTSA recorded a 1987 recall for an improperly formed transmission manual-valve link.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["turbobuick-200-4r", "nhtsa-recalls-1987-regal"],
   "evidence": [
    { "ref": "turbobuick-200-4r", "quote": "The direct clutch capacity isn't favorable to a high output application." },
    { "ref": "nhtsa-recalls-1987-regal", "quote": "MANUAL VALVE LINK IN THE TRANSMISSION MAY HAVE BEEN IMPROPERLY FORMED." }
   ]
  },
  {
   "section": "problems",
   "claimText": "Rust in the rocker panels, windshield A-pillars and roof drip rails is common, T-top cars can rust anywhere, and interior trim has become expensive; modified cars are the norm and a GM Heritage build sheet is the way to confirm a genuine Grand National.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["hagerty-buyers-guide", "turbobuick-problems"],
   "evidence": [
    { "ref": "hagerty-buyers-guide", "quote": "Look closely for bubbling or signs of prior repair in the rocker panels, the windshield A-pillars, and the roof drip rails." },
    { "ref": "turbobuick-problems", "quote": "Timing chain cam gear has nylon teeth, a high mile car needs a steel timing gear set to prevent eventual failure." }
   ]
  },
  {
   "section": "summary",
   "claimText": "The Grand National was, mechanically, a Regal T-Type with black trim, and the WE2 package cost only a few hundred dollars more than a T-Type in 1987.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["hagerty-buyers-guide", "turbobuick-tt-thread"],
   "evidence": [
    { "ref": "hagerty-buyers-guide", "quote": "The Grand National was, at its core, a T-Type with black trim." },
    { "ref": "turbobuick-tt-thread", "quote": "20,193 Produced" }
   ]
  }
 ]
};
