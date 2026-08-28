/**
 * Researched model draft — Ford F-100 (1967-1972).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedF1005thGen = {
 "slug": "ford/f-100-5th-gen",
 "make": "Ford",
 "model": "F-100",
 "generation": "Fifth generation (‘bumpside’)",
 "generationCode": null,
 "trim": null,
 "yearStart": 1967,
 "yearEnd": 1972,
 "bodyStyles": [
  "Styleside pickup, 6.5 ft bed on the 115 in wheelbase",
  "Styleside pickup, 8 ft bed on the 131 in wheelbase",
  "Flareside pickup, 6.5 ft and 8 ft beds (9 ft listed on the heavier series)",
  "Chassis cab and cowl-and-chassis (body codes 84 and 85)",
  "Crew Cab, F-250 and F-350 only, on the 149 in wheelbase",
  "Platform and stake bodies, F-250 and F-350"
 ],
 "engines": [
  "240 cu in (3,933 cc) Thriftpower inline six, 150 bhp gross; VIN code A",
  "300 cu in (4,916 cc) inline six, 4.00 in bore by 3.98 in stroke, 170 bhp gross at 3,800 rpm, 283 lb-ft at 1,600 rpm; VIN code B",
  "352 cu in (5,769 cc) FE V8, 208 bhp gross, 1967 only; VIN code Y that year",
  "360 cu in (5,899 cc) FE V8, 215 bhp gross from 1968; 196 bhp net for 1972; VIN code Y from 1968",
  "390 cu in (6,391 cc) FE V8, 255 bhp gross from 1968; 201 bhp net for 1972 and 2WD only that year; VIN code H",
  "302 cu in (4,942 cc) Windsor V8, 205 bhp gross from 1969; 154 bhp net for 1972; VIN code G",
  "A 170 cu in six at 105 bhp is listed by some references but absent from the 1967 VIN engine-code table (see claims)"
 ],
 "productionTotal": null,
 "productionNotes": "No production total is asserted for this generation, and the reason is worth stating plainly. The year-by-year figures in circulation are those published by FORDification, reprinted from the Standard Catalog of Light-Duty Ford Trucks 1905-2002 and the Ford Pickup Truck Red Book 1946-93 — and the two books do not agree. For 1972 F-100 Styleside pickups the Red Book gives 389,337 two-wheel-drive and 18,323 four-wheel-drive units, 407,660 combined, while the Standard Catalog gives 457,746 for the same body style: a gap of 50,086 trucks in one style in one year. The 1972 F-250 Styleside figures differ by 13,804 on the same basis. Summing six years of a series carrying a discrepancy of that size in its final year would give a number with a precision it has not earned.\n\nWhat the tables do establish is scale and mix. Total F-Series output rose year on year: 330,581 (1967), 435,973, 504,441, 506,094, 537,957 and 644,529 (1972). The F-100 share ran 230,082, 304,431, 343,854, 337,537, 358,374 and 417,797. The body-style split is the more revealing figure: in 1967 Ford built 204,710 two-wheel-drive and 3,445 four-wheel-drive F-100 Stylesides against 18,307 and 481 Flaresides, and by 1972 Flareside output had fallen to 7,245 and 492 while four-wheel drive had grown from 3,926 F-100s to 18,815. Neither book breaks production down by trim, so nothing here supports a figure for Ranger or Ranger XLT volumes.",
 "notableTrims": [
  {
   "name": "Base / Custom Cab (Custom from 1970)",
   "note": "The working specification: rubber mat, painted metal door panels, vinyl bench, aluminium scuff plates. Most of these trucks left the plant close to this, and an unmolested one is now harder to find than a Ranger, because nobody thought to keep them."
  },
  {
   "name": "Ranger",
   "note": "The upper trim at launch: thicker seat foam, colour-keyed carpet, upholstered door inserts, extra brightwork, its own hubcaps. For 1968 and 1969 only a Ranger emblem sat in the grille centre — a one-glance identifier, easily transplanted, worth checking against the trim code."
  },
  {
   "name": "Sport Custom",
   "note": "The middle rung added when the ladder was reorganised at the turn of the decade: heavier foam, two-tone vinyl, colour-keyed mats, better instrumentation, without the Ranger's carpet and wood-tone. Sources place its arrival at 1969 or 1970."
  },
  {
   "name": "Ranger XLT",
   "note": "The top of the range and the point of the generation: full carpet, pleated cloth and vinyl, wood-tone dash and tailgate appliqué, heavy door padding, extra insulation, cargo lamp, aluminium mouldings, 12-inch mirror. Correct XLT trim is the hardest thing to source on a restoration."
  },
  {
   "name": "Explorer Special",
   "note": "A marketing package rather than a trim line, carried in the 1972 interior trim codes alongside Ranger XLT. In Canada the Explorer name was used differently again, as a series sitting between base and Custom Cab. Claims of Explorer provenance need paper, not a decal."
  },
  {
   "name": "F-100 4x4 (VIN series F11)",
   "note": "A small part of F-100 output at the start and a growing one by the end — 3,926 trucks in 1967 against 18,815 in 1972. It carries a solid front beam axle on leaf springs rather than Twin I-Beam, which makes it the natural platform for a lifted build and a poor one for a lowered one."
  },
  {
   "name": "F-250 4x4 ‘Highboy’",
   "note": "Not a Ford name. The 4x4 F-250 carries a divorced transfer case — a separate unit driven from the gearbox by a short shaft — and the front driveshaft clearance it needs is what raises the body, not a lift kit. Dana 44, 44HD or 60 front, Dana 60 rear, 4.10:1. The visible front crossmember is the tell."
  }
 ],
 "specs": {
  "layout": "Front longitudinal engine, rear-wheel drive; part-time four-wheel drive optional on F-100 (VIN series F11) and F-250 (F26)",
  "chassis": "Separate ladder frame with bolted cab and separate bed; conventional cab, chassis cab and cowl-and-chassis bodies",
  "front_suspension": "Twin I-Beam on two-wheel drive: two forged chrome-moly I-beams of roughly 36 in, offset and overlapping, each pivoting on the frame rail opposite its own wheel, with coil springs and a forged steel radius arm per side. Four-wheel drive uses a solid Dana beam axle on leaf springs",
  "rear_suspension": "Live axle on semi-elliptic leaf springs",
  "steering": "Recirculating-ball steering box, manual or power assisted",
  "engine": "240 and 300 cu in inline sixes; 352 cu in FE V8 for 1967, replaced by the 360 and 390 FE for 1968; 302 cu in Windsor V8 from 1969. No 351 cu in V8 was offered",
  "power": "Gross: 240 six 150 bhp, 300 six 170 bhp at 3,800 rpm, 352 FE 208 bhp, 360 FE 215 bhp, 390 FE 255 bhp, 302 Windsor 205 bhp. Ford moved to SAE net for 1972, at which point the 302 is quoted at 154 bhp, the 360 at 196 bhp and the 390 at 201 bhp",
  "torque": "300 six quoted at 283 lb-ft at 1,600 rpm. No consistent factory torque figure for the 240 six or for the FE and Windsor V8s in truck tune appears in the sources consulted, so none is stated",
  "transmission": "Three-speed column-shift manual, four-speed New Process 435 manual, or three-speed automatic",
  "axles": "Four-wheel-drive trucks use a Dana 44, Dana 44HD or Dana 60 front and a Dana 60 rear on 4.10:1, with a divorced transfer case (Dana 24 or New Process 205)",
  "brakes": "Drums front and rear, power assistance optional and described as reaching four-wheel-drive F-Series for 1972. No source consulted confirms a factory front disc on this generation",
  "weight": "A 1971 F-100 short-bed is quoted at 3,615 lb kerb by one specialist reference. No factory weight table was retrieved, and the figure varies widely with cab, bed, drivetrain and engine",
  "wheelbases": "F-100 115 in or 131 in; F-250 131 in, or 149 in for the Crew Cab; F-350 135 in, 159 in or 164.5 in",
  "bed_lengths": "Styleside 6.5 ft and 8 ft; Flareside 6.5 ft and 8 ft, with 9 ft listed on the heavier series",
  "acceleration": "No period independent road test with instrumented figures was retrieved. The unattributed 0-60 mph ranges that circulate online are not traceable to a measured test and are not repeated here"
 },
 "summary": "The fifth-generation Ford F-Series, built for the 1967 to 1972 model years and universally called the bumpside after the horizontal crease running from front fender to tailgate, is the generation in which the American pickup stopped being only a tool. The cab was new for 1967, wider and glassier, with about three more inches of room. The trim ladder climbed from a rubber-matted Custom Cab to a carpeted, wood-grained Ranger XLT, and air conditioning, power steering and an AM/FM radio could all be ordered on a truck. Underneath sat Ford's Twin I-Beam front suspension, introduced in 1965 and sold on the promise that the thing worked like a truck and rode like a car. Two inline sixes of 240 and 300 cubic inches covered the working end of the range, the FE V8s the rest, joined by the 302 Windsor from 1969. The generation now divides into two markets that barely overlap: lowered two-wheel-drive trucks built for the road, and four-wheel-drive restomods built to be driven hard.",
 "history": "## The 1967 Redesign\nThe fifth-generation F-Series arrived for 1967 on a chassis whose important changes had happened in 1965, so the news was above the frame rails. The cab was new: more glass, a wider body, roughly three additional inches of interior room. The styling signature was a single horizontal crease running from the leading edge of the front fender through the door and along the bedside to the tailgate, and enthusiasts named the generation after it. Bumpside now does more work in the classified advertisements than the model designation does. Ford and Chevrolet traded the American truck sales lead through the run — Ford in 1967, 1969 and 1970, Chevrolet in 1968, 1971 and 1972 — and that rivalry is why a 1972 pickup can be found with cloth seats and factory air.\n\n## Works Like a Truck, Rides Like a Car\nTwin I-Beam had been introduced on the 1965 trucks and carried through unchanged in principle. Two forged chrome-moly I-beams of roughly three feet sit offset and overlapping beneath the front of the chassis, each pivoting on the frame rail opposite its own wheel. Because the arc each wheel travels is long, camber change is smaller than a short-arm swing axle would give, though it is still there. Coil springs carry the load and a forged steel radius arm each side takes the braking and fore-and-aft loads. The ride was softer than a beam axle and Ford advertised the point relentlessly. The costs were real: near a degree of camber change per inch of travel, very little caster, awkward alignment, hard use of front tyres and shock absorbers, and a steering box with a reputation for weeping. Four-wheel-drive trucks did not get Twin I-Beam at all.\n\n## Sixes, FEs, and the 351 That Never Came\nThe engine range was straightforward. The 240 and 300 cubic-inch overhead-valve sixes did the work; the 300 shares its 4.00 in bore with the 240 and adds stroke, and its 170 bhp gross at 3,800 rpm matters far less than its 283 lb-ft at 1,600 rpm. The V8 was the 352 FE for 1967, replaced for 1968 by the 360 and 390 FE, with the 302 Windsor joining from 1969. For 1972 the 390 is listed as two-wheel drive only. There was no 351 in a bumpside: the 1972 VIN engine codes run A, B, G, Y and H for the 240, 300, 302, 360 and 390 and nothing else. A 351 in one of these trucks is a swap, however early it was done.\n\n## From Custom Cab to Ranger XLT\nAt launch the ladder ran Base, Custom Cab and Ranger, the Ranger bringing carpet, thicker foam and upholstered door inserts. Around the turn of the decade Ford reorganised it into Custom, Sport Custom, Ranger and Ranger XLT, and the XLT is the one that mattered: wood-tone dash and tailgate appliqué, pleated cloth and vinyl, full carpet, extra insulation, cargo lamp, aluminium mouldings. Sources disagree over whether it appeared for 1970 or 1971. Either way a pickup was being sold on comfort, and the King Ranch and Limited trucks of today descend from that decision.\n\n## Beds, Four-Wheel Drive and the Highboy\nTwo beds ran throughout: the flush-sided Styleside, whose crease continues uninterrupted to the tailgate, and the Flareside, whose crease stops at the back of the cab and whose fenders stand proud of the box. The Styleside won decisively in period, so the Flareside is the scarcer truck now. Four-wheel drive grew steadily across the run, and on the F-250 it produced the truck later nicknamed the Highboy, whose divorced transfer case — a separate unit driven from the gearbox by a short shaft rather than bolted to it — needs enough front driveshaft clearance to raise the body well above a two-wheel-drive truck, a rear block levelling the stance.",
 "marketNotes": "All figures here are classic.com data read as of August 2026. For the fifth-generation F-100 the CLASSIC.COM Market Benchmark stands at $33,619 against an average recorded sale of $35,646, trending upward, from 38 trucks listed. Across the generation the benchmark is $33,883; the F-250 sits at $33,961 on a $32,165 average. Beneath those averages the spread is enormous. The lowest F-100 sale classic.com records is $2,772 for a 1972 Explorer in September 2025, and an $800 1972 F-350 changed hands the same month. The highest completed sale it records for the generation is $194,995 for a 1972 F-100 Custom at Lithia Springs, Georgia on 6 August 2026. Larger numbers exist only as asking prices: a 1971 F-100 by Velocity Restorations listed at $309,900 in January 2026, and a 1972 F-250 by the same shop at $364,900 with 500 miles showing — builds offered, not sales recorded. The 1972 F-100 results give the shape of the middle as of August 2026: $61,000 for a modified truck in July, $27,500 for an original Sport Custom in June, $10,500 for an original Ranger, $7,400 for a modified Custom in August. Modification moves a truck in either direction; a correct, unmodified 1969 F-250 Highboy made $45,900 on 21 August 2026.",
 "whatToLookFor": "Structure before anything else. Owners name the same places repeatedly: the cab corners where they drop away beside the frame rails, the floor pans and cab mounts, the battery tray, the cowl sides, the roof drip rail perimeter, lower front fenders and door bottoms, the bed floor, the seam down the outboard bedsides and the right inner fender apron. Rust there often signals worse underneath, and the frame is the first thing to put a light on.\n\nThe data plate settles most identity questions. The first three characters give series and drivetrain — F10 for a two-wheel-drive F-100, F11 for four-wheel drive, F25 and F26 for the F-250 — the fourth is the engine code, and the third digit of the body code separates Flareside from Styleside. A grille-centre Ranger badge is correct only for 1968 and 1969 and is easily transplanted; the interior trim code is the harder evidence. On a claimed Highboy the divorced transfer case and its visible front crossmember are the proof, not ride height.\n\nOn a modified truck the questions change, because an engine alone is not a build. The useful signal is whether the chassis was addressed — a purpose-built frame or an engineered front subframe rather than modern power loaded into unaltered original rails — and whether brakes, steering, wiring, fuel and cooling came up with it. The documented builds at this end of the market pair the engine with a replacement front end, rack-and-pinion steering, a rebuilt rear axle and large four-wheel discs.",
 "commonProblems": "Twin I-Beam wears in ways unfamiliar to anyone used to wishbones. The pivot bushings, radius arm bushings and steering joints are all consumables, and once they are tired the truck wanders. The geometry gives roughly a degree of camber change per inch of travel and very little caster, which produces poor straight-line stability on rough surfaces, heavy and uneven front tyre wear and short shock absorber life. Alignment is awkward, and a truck whose ride height has been altered without correcting the beams will eat tyres indefinitely. Steering boxes of the period are described as notably leak-prone.\n\nCorrosion is the other structural theme, concentrated in the cab corners, floor pans, cab mounts, cowl sides, drip rails, lower fenders and doors, bed floor and outboard bed seams. Fifty-year-old wiring degrades and full harness replacement is normal in a serious rebuild. Brakes are drums at both ends with power assistance only an option, so a truck carrying a modern engine on standard brakes is under-braked by a wide margin. The engines are the least of it: the 300 six is an unstressed long-stroke design with a cast-iron block and head, and high mileages on it are unremarkable. Its faults are thirst, weight and an unwillingness to rev, not fragility.",
 "valueTrajectory": "For most of its life this was a cheap truck, which is why so few unmodified ones survive and why the good ones have moved so far. The classic.com benchmark for the fifth-generation F-100 sits at $33,619 as of August 2026 and is trending upward, the F-250 at $33,961 on the same date, and those single figures conceal what are really two markets. Original, honest trucks trade in a band the 2026 results place broadly between ten and thirty thousand dollars, condition and completeness doing almost all the work. Professionally built restomods trade in a separate economy an order of magnitude above, where a 1972 F-100 Custom reached $194,995 in August 2026 and finished shop builds are offered at $309,900 and $364,900. The gap between those populations has been widening rather than closing, and the middle is where value is destroyed: an amateur build carries the cost of the modification without the credibility of the engineering, and a $7,400 modified 1972 Custom in August 2026 sits beneath what a tidy original of the same truck brings.",
 "overallConfidence": "medium",
 "sources": [
  {
   "ref": "wikipedia-f-series-5",
   "title": "Ford F-Series (fifth generation)",
   "url": "https://en.wikipedia.org/wiki/Ford_F-Series_(fifth_generation)",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Trim ladder as Base/Custom Cab/Ranger for 1967-69 and Custom/Sport Custom/Ranger XLT with the XLT placed at 1970; Canadian Explorer Special; engine list including a 170 cu in six at 105 bhp; wheelbases for all three series; Styleside and Flareside bed lengths."
  },
  {
   "ref": "classicindustries-builders-guide",
   "title": "1967-1972 Ford F100: The Ultimate Bumpside Identification and Builder's Guide",
   "url": "https://news.classicindustries.com/1967-1972-ford-f100-the-ultimate-bumpside-identification-and-builders-guide",
   "publisher": "Classic Industries",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Year-by-year grille identification; the 1968-1969-only grille-centre Ranger emblem; 1967 cab gaining three inches of room; trim content for both ladders; gross and net horsepower for the 240, 300, 352, 360, 390 and 302; the Styleside/Flareside crease; power brakes reaching 4WD for 1972."
  },
  {
   "ref": "ttac-fifth-gen",
   "title": "Fifth Generation (1967-1972) Ford F-Series: Ford Trucks Go Mainstream",
   "url": "https://www.thetruthaboutcars.com/cars/news-blog/fifth-generation-1967-1972-ford-f-series-ford-trucks-go-mainstream-45135622",
   "publisher": "The Truth About Cars",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "F-Series annual output 330,581 (1967) rising to 644,529 (1972); sales leadership alternating, Ford in 1967, 1969 and 1970 and Chevrolet in 1968, 1971 and 1972; Ranger XLT placed in the 1970-1972 window; Contractor, Farm & Ranch and Heavy Duty Specials."
  },
  {
   "ref": "fordification-production",
   "title": "1967-1972 Ford Pickup Production Numbers",
   "url": "https://www.fordification.com/tech/production.htm",
   "publisher": "FORDification.com",
   "sourceType": "specialist",
   "reliability": "high",
   "notes": "Tables reprinted from the Standard Catalog of Light-Duty Ford Trucks 1905-2002 and the Ford Pickup Truck Red Book 1946-93, with the disagreements between them stated: 1972 F-100 Styleside 407,660 against 457,746, plus a 13,804 gap on 1972 F-250 Styleside. Also F-100 totals by year and the 1967 and 1972 Styleside/Flareside and 4x2/4x4 splits."
  },
  {
   "ref": "fordification-vin67",
   "title": "Decoding Your 1967 Ford Truck VIN",
   "url": "https://www.fordification.com/tech/VIN67.htm",
   "publisher": "FORDification.com",
   "sourceType": "specialist",
   "reliability": "high",
   "notes": "1967 series codes F10/F11/F25/F26/F35 and the engine-code table: A = 240 six at 150 bhp, B = 300 six at 170 bhp, Y = 352 FE at 208 bhp, with low-compression variants 1, 2 and 8. No 170 cu in six appears. Plant letters and the 81/84/85 body codes."
  },
  {
   "ref": "fordification-vin72",
   "title": "Decoding Your 1972 Ford Truck VIN",
   "url": "https://www.fordification.com/tech/VIN72.htm",
   "publisher": "FORDification.com",
   "sourceType": "specialist",
   "reliability": "high",
   "notes": "1972 series codes F10/F11/F25/F26/F35/F37 separating 2WD from 4WD; engine codes A = 240, B = 300, G = 302, Y = 360, H = 390, the 390 noted 2WD only and no 351 code at all; net ratings of 154, 196 and 201 bhp; body code third digit 3 = Flareside, 4 = Styleside; trim codes identifying Ranger XLT and Explorer."
  },
  {
   "ref": "macs-twin-i-beam",
   "title": "How it Works: Ford Twin I-Beam Suspension",
   "url": "https://macsmotorcitygarage.com/how-it-works-ford-twin-i-beam-suspension/",
   "publisher": "Mac's Motor City Garage",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Twin I-Beam introduced 1965 on F-100 to F-350; two offset overlapping chrome-moly forgings of roughly 36 in; forged steel radius arms taking braking and fore-aft loads so lighter coil springs could be used; roughly one degree of camber change per inch of travel, with tyre wear when ride height is altered; alignment difficulty."
  },
  {
   "ref": "classic-f100-5thgen",
   "title": "Ford F-100 - 5th Gen Market",
   "url": "https://www.classic.com/m/ford/f-series/5th-gen/f100/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of August 2026: benchmark $33,619 trending upward, average sale $35,646, 38 listed. Lowest recorded sale $2,772 for a 1972 F-100 Explorer, 14 September 2025. Highest figure $309,900, explicitly an asking price for a 1971 Velocity Restorations build listed 15 January 2026, not a sale."
  },
  {
   "ref": "classic-fseries-5thgen",
   "title": "Ford F-Series - 5th Gen Market",
   "url": "https://www.classic.com/m/ford/f-series/5th-gen/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of August 2026 for the generation as a whole: benchmark $33,883; per-model F-100 $33,619, F-250 $33,961, F-350 $39,433. Lowest recorded sale $800 for a 1972 F-350, 2 September 2025; highest recorded sale $194,995 for a 1972 F-100 Custom, 6 August 2026."
  },
  {
   "ref": "classic-f100-1972",
   "title": "1972 Ford F-100 - 5th Gen Market",
   "url": "https://www.classic.com/m/ford/f-series/5th-gen/f100/year-1972/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Single model year as of August 2026, benchmark $33,829. Individual results used for the market spread: $194,995 (Custom, Lithia Springs GA, 6 Aug 2026), $61,000 (modified, Greensboro NC, 25 Jul 2026), $27,500 (original Sport Custom, Albany County NY, 29 Jun 2026), $10,500 (original Ranger, Eaton CO, 6 Jun 2026), $7,400 (modified Custom, Escondido CA, 10 Aug 2026)."
  },
  {
   "ref": "classic-f250-5thgen",
   "title": "Ford F-250 - 5th Gen Market",
   "url": "https://www.classic.com/m/ford/f-series/5th-gen/f250/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of August 2026: benchmark $33,961, average sale $32,165, 23 listed. Lowest recorded sale $2,500 for a 1971 F-250, 28 March 2023. Highest figure $364,900, an asking price for a 1972 Velocity Restorations build showing 500 miles, 15 January 2026. A 1969 F-250 Highboy sold at $45,900 on 21 August 2026."
  },
  {
   "ref": "velocity-bumpside",
   "title": "A Glimpse Into The Future: Fifth Gen (1967-1972) Ford F-Series",
   "url": "https://www.velocityrestorations.com/blog/ford-f-series-5th-gen-bumpside/",
   "publisher": "Velocity Restorations",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Restoration shop's account: trim content for Custom, Sport Custom (placed at 1970), Ranger and Ranger XLT including the 12-inch day/night mirror; Twin I-Beam as the comfort argument; Highboy detail with divorced transfer case, Dana 44/44HD/60 front and Dana 60 rear on 4.10:1; F-100 and F-250 both offered in 4x4."
  },
  {
   "ref": "velocity-highboy",
   "title": "Classic Ford Truck Highboy",
   "url": "https://www.velocityrestorations.com/blog/classic-ford-truck-highboy/",
   "publisher": "Velocity Restorations",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Establishes Highboy as an enthusiast term never used by Ford; the divorced transfer case mounted separately from the gearbox and driven by a short shaft; Dana 24 or New Process 205 cases; leaf springs front and rear with a rear block levelling the stance; a visible front crossmember as the identifying feature against a merely lifted truck."
  },
  {
   "ref": "fordf100s-generation",
   "title": "1967-1972 Ford F-100 Bumpside Guide",
   "url": "https://www.fordf100s.com/generations/1967-1972/",
   "publisher": "FordF100s.com",
   "sourceType": "specialist",
   "reliability": "low",
   "notes": "States explicitly that no 351 V8 was offered in bumpside F-100s, and that Ford used SAE gross through 1971 and net for 1972; places the Sport Custom at 1969 and the Ranger XLT at 1971; Twin I-Beam on 2WD with a solid-axle layout on 4WD; inspection list naming cab mounts, cowl, drip rails, floors, bedside structure, plus Twin I-Beam bushings and steering joints."
  },
  {
   "ref": "fordf100s-1971",
   "title": "1971 Ford F-100: Ranger XLT Debut, 360 V8 Specs & Values",
   "url": "https://www.fordf100s.com/1971-ford-f100/",
   "publisher": "FordF100s.com",
   "sourceType": "specialist",
   "reliability": "low",
   "notes": "The source dating the Ranger XLT to 1971 as a new tier above an existing Ranger, on a four-level 1971 ladder. Also the only retrieved source quoting a kerb weight, 3,615 lb for a 1971 short-bed, and a 1971 F-100 production figure of 190,347 that does not reconcile with the reference-book tables."
  },
  {
   "ref": "fordtrucks-rust-thread",
   "title": "Common Rust Spots to look for?",
   "url": "https://www.ford-trucks.com/forums/1459305-common-rust-spots-to-look-for.html",
   "publisher": "Ford Truck Enthusiasts",
   "sourceType": "club-forum",
   "reliability": "low",
   "notes": "Owner consensus on where these trucks rot: cab corners beside the frame rails, floor pans, battery tray, cab mounting points, lower fenders and doors, cowl sides, the roof drip rail perimeter, bed floor, the seam down the outboard bedsides and the right inner fender apron, with advice to assess the frame first."
  },
  {
   "ref": "cpp-ifs-swap",
   "title": "Swapping I-Beams for IFS: Classic Performance Products 1965-1979 F100 Independent Front Suspension",
   "url": "https://digital.classictruckperformance.com/issue/july-2024so/classic-performance-products-1965-1979-f100-ifs-independent-front-suspension/",
   "publisher": "Classic Truck Performance",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "The lowered-2WD side of the market: Twin I-Beam trucks have very little caster and so wander on rough roads, are hard on tyres and shock absorbers, have leak-prone steering boxes and are difficult to lower correctly; describes the Mustang II-style replacement subframe with rack-and-pinion steering, dropped spindles and 11.75 in discs."
  },
  {
   "ref": "inthegarage-coyote-bumpside",
   "title": "Supercharged Coyote Powers this Wicked '71 Ford Bumpside",
   "url": "https://inthegaragemedia.com/1971-ford-f100-sport-custom-dutka-coyote-bumpside/",
   "publisher": "In The Garage Media",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "A worked example of a high-end lowered 1971 F-100 Sport Custom: Twin I-Beam replaced by a QA1 independent front end with a seven-inch drop, coilovers and rack-and-pinion; triangulated four-link rear on a 1976 Ford nine-inch; supercharged 5.0 Coyote at about 700 hp; 14 in and 12 in Wilwood discs; original trim, lighting and grille reused."
  },
  {
   "ref": "f150hub-300-six",
   "title": "Ford 300 cid, 4.9L I-6 Engine Specs & Info",
   "url": "https://www.f150hub.com/specs/ford-300.html",
   "publisher": "F150Hub",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "300 six specification: 4.00 in bore by 3.98 in stroke, 8.9:1 compression for 1965-1972, 170 bhp at 3,800 rpm and 283 lb-ft at 1,600 rpm gross, falling to 101 bhp net for 1973-74; derived from the 240 by lengthening the stroke on an identical bore; in F-Series production until 1996."
  }
 ],
 "claims": [
  {
   "section": "summary",
   "claimText": "The fifth-generation Ford F-Series, built for the 1967 to 1972 model years, is known as the bumpside for the single horizontal crease running from the front fender through the door and along the bedside to the tailgate.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classicindustries-builders-guide",
    "classic-f100-5thgen",
    "fordf100s-generation"
   ]
  },
  {
   "section": "history",
   "claimText": "The 1967 model year brought a new cab with a larger glass area and roughly three additional inches of interior room, on a chassis whose principal revisions had already been made for 1965; across the run American truck sales leadership alternated, Ford ahead in 1967, 1969 and 1970 and Chevrolet in 1968, 1971 and 1972.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "classicindustries-builders-guide",
    "fordf100s-generation",
    "ttac-fifth-gen"
   ]
  },
  {
   "section": "specs",
   "claimText": "Two-wheel-drive trucks use Ford's Twin I-Beam front suspension, introduced in 1965: two forged chrome-moly I-beams of roughly 36 inches, offset and overlapping, each pivoting on the frame rail opposite its own wheel, with a coil spring and a forged steel radius arm per side taking the braking and fore-and-aft loads.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "macs-twin-i-beam",
    "velocity-bumpside",
    "cpp-ifs-swap"
   ]
  },
  {
   "section": "specs",
   "claimText": "Twin I-Beam's known drawbacks are approximately one degree of camber change per inch of travel, very little caster, difficult alignment, heavy front tyre wear and short shock absorber life, with period steering boxes described as leak-prone.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "macs-twin-i-beam",
    "cpp-ifs-swap",
    "fordf100s-generation"
   ]
  },
  {
   "section": "specs",
   "claimText": "Four-wheel-drive trucks of this generation do not use Twin I-Beam; they carry a solid Dana beam axle on leaf springs, with a Dana 44, Dana 44HD or Dana 60 front and a Dana 60 rear on 4.10:1 gearing.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "fordf100s-generation",
    "velocity-bumpside",
    "velocity-highboy"
   ]
  },
  {
   "section": "specs",
   "claimText": "The engine range comprised 240 and 300 cubic-inch inline sixes throughout, the 352 FE V8 for 1967 only, the 360 and 390 FE V8s from 1968 and the 302 Windsor V8 from 1969, with gross ratings of 150, 170, 208, 215, 255 and 205 bhp respectively; Ford moved to SAE net for 1972, at which point the 302 is rated 154 bhp, the 360 196 bhp and the 390 201 bhp, the 390 listed for two-wheel-drive trucks only.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-f-series-5",
    "classicindustries-builders-guide",
    "fordification-vin67",
    "fordification-vin72",
    "fordf100s-generation"
   ]
  },
  {
   "section": "specs",
   "claimText": "No 351 cubic-inch V8 was offered in a fifth-generation F-100: the 1972 VIN engine codes run A, B, G, Y and H for the 240, 300, 302, 360 and 390 and include no 351, so any 351 in a bumpside is a later installation.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "fordf100s-generation",
    "fordification-vin72",
    "wikipedia-f-series-5"
   ]
  },
  {
   "section": "specs",
   "claimText": "The 300 cubic-inch six was derived from the 240 by lengthening the stroke on an identical 4.00 inch bore, measures 4.00 by 3.98 inches, ran 8.9:1 compression in this period and was rated at 170 bhp at 3,800 rpm and 283 lb-ft at 1,600 rpm gross.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "f150hub-300-six",
    "fordification-vin67",
    "wikipedia-f-series-5"
   ]
  },
  {
   "section": "specs",
   "claimText": "Whether a 170 cubic-inch Thriftpower six was available in these trucks is not settled by the sources consulted here.",
   "confidence": "low",
   "status": "disputed",
   "sourceRefs": [
    "wikipedia-f-series-5",
    "classicindustries-builders-guide",
    "fordification-vin67"
   ],
   "conflictNote": "Wikipedia lists a 170 cu in six at 105 bhp for 1967-1972 and Classic Industries lists the same engine for 1967 only. FORDification's 1967 VIN engine-code table gives only A, B and Y for the 240, 300 and 352 plus their low-compression variants, and contains no 170 code at all. Not resolved by any source consulted here, so the engine is listed with that caveat attached rather than asserted."
  },
  {
   "section": "history",
   "claimText": "The trim ladder ran Base, Custom Cab and Ranger at launch and was reorganised at the turn of the decade into Custom, Sport Custom, Ranger and Ranger XLT, but the model years in which the Sport Custom and the Ranger XLT first appeared are given differently by different sources.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "wikipedia-f-series-5",
    "velocity-bumpside",
    "classicindustries-builders-guide",
    "fordf100s-1971"
   ],
   "conflictNote": "Wikipedia, Velocity Restorations and Classic Industries all place the Ranger XLT at 1970. FordF100s.com states it debuted for 1971 above an existing Ranger. On the Sport Custom, Velocity Restorations says 1970 and FordF100s.com says 1969. No factory sales literature was retrieved in this session, so the point is not resolved here and no introduction year is asserted."
  },
  {
   "section": "production",
   "claimText": "No production total is asserted for this generation because the two standard reference books disagree materially: for 1972 F-100 Styleside pickups the Ford Pickup Truck Red Book gives 407,660 and the Standard Catalog of Light-Duty Ford Trucks gives 457,746, a difference of 50,086 trucks in one body style in one year.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "fordification-production"
   ],
   "conflictNote": "FORDification reprints both books side by side and states the discrepancy itself: Red Book 389,337 (4x2) plus 18,323 (4x4) equals 407,660 against the Standard Catalog's 457,746 for 1972 F-100 Styleside, plus a further 13,804 gap on 1972 F-250 Styleside. It is single-sourced because FORDification is the only page retrieved that reproduces both tables and names the disagreement; neither book was consulted directly. The conflict is not resolved, so productionTotal is null."
  },
  {
   "section": "production",
   "claimText": "F-Series output rose from 330,581 units in 1967 to 644,529 in 1972, of which the F-100 accounted for 230,082 and 417,797; within that the Styleside outsold the Flareside better than ten to one and the gap widened, F-100 Flareside output falling from 18,788 units to 7,737, while F-100 four-wheel-drive output rose from 3,926 to 18,815.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "fordification-production",
    "ttac-fifth-gen",
    "fordification-vin72"
   ]
  },
  {
   "section": "history",
   "claimText": "The four-wheel-drive F-250 of this period, nicknamed the Highboy by enthusiasts and never so called by Ford, carries a divorced transfer case driven from the gearbox by a short shaft, and the front driveshaft clearance that arrangement needs is what raises the body rather than any lift kit, with a rear block used to level the stance.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "velocity-highboy",
    "velocity-bumpside"
   ]
  },
  {
   "section": "market",
   "claimText": "As of August 2026 classic.com records a market benchmark of $33,619 for the fifth-generation F-100 against an average sale of $35,646, $33,961 for the F-250 against a $32,165 average, and $33,883 for the generation as a whole, all trending upward.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-f100-5thgen",
    "classic-f250-5thgen",
    "classic-fseries-5thgen"
   ]
  },
  {
   "section": "market",
   "claimText": "As of August 2026 the highest completed sale classic.com records for the generation is $194,995 for a 1972 F-100 Custom on 6 August 2026, while the larger figures of $309,900 and $364,900 attached to Velocity Restorations builds are asking prices listed in January 2026 rather than recorded sales; beneath them the 1972 F-100 results run $61,000 for a modified truck in July 2026, $27,500 for an original Sport Custom in June 2026, $10,500 for an original Ranger and $7,400 for a modified Custom in August 2026.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-fseries-5thgen",
    "classic-f100-5thgen",
    "classic-f250-5thgen",
    "classic-f100-1972"
   ]
  },
  {
   "section": "problems",
   "claimText": "Corrosion concentrates in a consistent set of places: the cab corners beside the frame rails, floor pans, cab mounts, battery tray, cowl sides, roof drip rail perimeter, lower front fenders and doors, bed floor, the seam down the outboard bedsides and the right inner fender apron.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "fordtrucks-rust-thread",
    "fordf100s-generation"
   ]
  },
  {
   "section": "market",
   "claimText": "The modified market divides along the drivetrain: lowered two-wheel-drive builds commonly discard Twin I-Beam for a Mustang II-style or coilover independent front end with rack-and-pinion steering and disc brakes, because the original geometry is difficult to lower correctly, while four-wheel-drive trucks are built up rather than down.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "cpp-ifs-swap",
    "inthegarage-coyote-bumpside",
    "velocity-bumpside"
   ]
  },
  {
   "section": "market",
   "claimText": "What separates a considered modern build from a poor one is whether the chassis, brakes, steering, wiring, fuel system and cooling were addressed alongside the engine; the builds documented at the top of this market re-engineer the front structure outright and fit large four-wheel discs, rack-and-pinion steering and a rebuilt rear end alongside the new engine.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "inthegarage-coyote-bumpside",
    "cpp-ifs-swap"
   ]
  }
 ]
};
