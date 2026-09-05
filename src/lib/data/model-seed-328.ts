/**
 * Researched model draft — Ferrari 328 GTB and GTS (1985-1989).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seed328 = {
 "slug": "ferrari/328",
 "heroPhoto": "/images/models/ferrari-328.jpg",
 "heroPhotoCredit": "Photo: Calreyn88, CC BY-SA 4.0, via Wikimedia Commons",
 "make": "Ferrari",
 "model": "328 GTB / GTS",
 "generation": "328",
 "generationCode": "Tipo F106 MB / F106 MS",
 "trim": null,
 "yearStart": 1985,
 "yearEnd": 1989,
 "bodyStyles": [
  "2-door Berlinetta (fixed-roof coupe, GTB)",
  "2-door Spider/targa with lift-out roof panel and fixed rear buttresses (GTS)"
 ],
 "engines": [
  "3,185 cc Tipo F105 CB 000 transverse 90-degree V8, DOHC per bank, four valves per cylinder, Bosch K-Jetronic mechanical injection, Marelli MED 806 A ignition, 9.8:1 compression, 270 bhp at 7,000 rpm and 224 lb-ft at 5,500 rpm (European specification)",
  "3,185 cc F105 C tipo 040 catalysed variant for the United States, Japan and Australia, 9.2:1 compression, 260 bhp at 7,000 rpm SAE net and approximately 213.5 lb-ft at 5,500 rpm",
  "3,185 cc F105 C tipo 046 catalysed variant for Switzerland and Sweden from spring 1987, KE3-Jetronic injection, 255 bhp at 6,750 rpm SAE net and approximately 202 lb-ft at 5,500 rpm"
 ],
 "productionTotal": 7412,
 "productionNotes": "The 328 is an unusually well-behaved car to count. Ferrari's own model record states 1,344 GTBs, chassis 58735 to 83017; the GTS figure of 6,068, chassis 59301 to 83136, is given identically by Wikipedia, Conceptcarz, the Ferrarista buying guide and three separate RM Sotheby's catalogue entries consulted here. The two add to 7,412, and no source consulted disagreed with either component, so a total is asserted rather than withheld. The split is the interesting part: at roughly four and a half GTS to every GTB, the closed car - normally the volume body in any range - is the rare one, which inverts the scarcity logic buyers usually apply.\n\nRight-hand drive is where the counting gets soft. Supercar Nostalgia gives 130 right-hand-drive GTBs and 542 right-hand-drive GTSs without qualifying the market. The Ferrarista guide gives the same two numbers but describes both as UK cars, and adds a further 152 right-hand-drive GTSs delivered to Australia, along with 135 GTBs for the United States. Whether 542 is the whole right-hand-drive GTS figure or only the British share is not resolved by any source read here, so the numbers are reported as quoted rather than summed.\n\nTwo scope notes. The Ferrarista guide records a single factory convertible, chassis 49453, built during development and never approved for production; that chassis number sits well below the 328 series range and no second source consulted confirms it, so it is reported and not counted. Separately, the 1,991 cc GTB Turbo and GTS Turbo built for the Italian market between 1986 and 1989 - 308 and 828 cars respectively per Wikipedia - wear the 328's restyled bodywork but are two-litre turbocharged cars built to sit under Italy's punitive VAT threshold. They are not 328s and are not included in the 7,412.",
 "notableTrims": [
  {
   "name": "328 GTB",
   "note": "The fixed-roof berlinetta: 1,344 built against 6,068 GTS, chassis 58735 to 83017. Stiffer, quieter and considerably rarer, and the only body style in the range carrying a scarcity premium."
  },
  {
   "name": "328 GTS",
   "note": "The targa, with a lift-out roof panel between fixed buttresses, and the car most buyers actually bought: 6,068 built, chassis 59301 to 83136. About ten kilograms heavier than the GTB and the default way into the model."
  },
  {
   "name": "328 with ABS (from February 1988, chassis 76626)",
   "note": "The mid-life car. Anti-lock braking required a reworked front geometry with negative wheel offset, which in turn required convex 16-inch wheels in place of the concave pattern. Door-mirror Cavallino badges and twin bonnet catches identify them."
  },
  {
   "name": "328 (United States specification)",
   "note": "Catalysed 260 bhp SAE net on 9.2:1 compression, kerb weight quoted near 1,425 kg against roughly 1,263 kg for a European GTB. No ABS through the 1988 'MY 1988 1/2' season, and only from model year 1989."
  },
  {
   "name": "328 (Switzerland and Sweden, tipo 046)",
   "note": "From spring 1987, a catalysed specification using KE3-Jetronic and quoted at 255 bhp at 6,750 rpm. The lowest-output 328, and easy to mistake for a standard European car on paperwork alone."
  },
  {
   "name": "328 (right-hand drive)",
   "note": "Quoted at 130 GTBs and 542 GTSs, with a further 152 right-hand-drive GTSs said to have gone to Australia. A right-hand-drive GTB is a car in the low hundreds worldwide, and priced accordingly in Britain."
  },
  {
   "name": "GTB Turbo / GTS Turbo (Italian market)",
   "note": "Not a 328. A 1,991 cc IHI-turbocharged two-valve V8 of 254 PS in the 328's bodyshell, built 1986-1989 to sit under Italy's 2.0-litre VAT threshold. Counted separately, at 308 GTB Turbos and 828 GTS Turbos."
  }
 ],
 "specs": {
  "layout": "Transverse mid-mounted engine, rear-wheel drive, five-speed transaxle beneath the engine",
  "chassis": "Tipo F106 tubular steel frame, steel bodywork galvanised for corrosion protection; European GTB chassis reference F 106 MB 100",
  "engine": "3,185 cc Tipo F105 CB 000 90-degree V8, all-alloy, mounted transversely",
  "valvetrain": "Twin overhead camshafts per bank, belt-driven, four valves per cylinder",
  "bore_stroke": "83.0 mm x 73.6 mm (308 quattrovalvole: 81.0 mm x 71.0 mm)",
  "compression": "9.8:1 European; 9.2:1 catalysed United States, Japan and Australia",
  "fuel_ignition": "Bosch K-Jetronic mechanical fuel injection with Marelli MED 806 A electronic ignition; KE3-Jetronic on the Swiss and Swedish tipo 046",
  "power": "270 bhp at 7,000 rpm European (manufacturer claim); 260 bhp at 7,000 rpm SAE net United States; 255 bhp at 6,750 rpm Switzerland and Sweden",
  "torque": "224 lb-ft (approximately 304 Nm) at 5,500 rpm European; approximately 213.5 lb-ft at 5,500 rpm United States",
  "transmission": "Five-speed all-synchromesh manual with open gate and limited-slip differential",
  "suspension": "Independent double wishbones front and rear, coil springs, Koni telescopic dampers, anti-roll bars both ends; front geometry revised to negative offset on ABS cars from February 1988",
  "steering": "Unassisted rack and pinion, 3.25 turns lock to lock, ratio shared with the 288 GTO",
  "brakes": "Ventilated discs all round; Bosch ABS available from February 1988 (chassis 76626), United States cars from model year 1989",
  "wheels_tyres": "16-inch alloys, 205/55 VR16 front and 225/50 VR16 rear; concave pattern to early 1988, convex thereafter",
  "weight": "Approximately 1,263 kg European GTB and 1,273 kg GTS; United States kerb weight quoted at approximately 1,425 kg",
  "acceleration": "0-60 mph quoted between 5.5 and 6.0 seconds depending on source and market specification",
  "top_speed_claimed": "163-166 mph (262-267 km/h) depending on source and body style; a manufacturer-derived claim, not an independently measured figure"
 },
 "summary": "The Ferrari 328 (1985-1989) is the last and most developed form of the transverse-V8 line that began with the 308 GTB in 1975, and it is best read as a refinement of that car rather than a replacement for it. Pininfarina rounded the nose, deleted the louvres behind the headlight pods and replaced the 308's black rubber-faced bumpers with body-coloured mouldings blended into the valances, aligning the car visually with the Mondial 3.2 and Testarossa. Underneath, the quattrovalvole V8 grew from 2,927 cc to 3,185 cc for 270 bhp in European tune, the track was widened, the steering rack was quickened to 288 GTO specification and the bodyshell was galvanised. From February 1988 anti-lock braking became available, bringing a revised front geometry with negative wheel offset and convex wheels in place of the earlier concave pattern. Buyers overwhelmingly chose the targa: 6,068 GTS against 1,344 GTB. Among the older mid-engined Ferrari V8s the 328 carries the strongest reputation for dependability, helped considerably by a cam-belt service that does not require the engine to come out.",
 "history": "## Refinement, Not Replacement\nBy 1985 the transverse-V8 Ferrari was a decade old. The 308 GTB had arrived in 1975, acquired fuel injection, then four valves per cylinder in 1982, and had quietly become the company's volume model. Rather than start again, Maranello enlarged the engine, tidied the body and let the design see out the decade. Ferrari's own record has the 328 GTB shown at the Frankfurt Salon in the autumn of 1985 and replaced by the 348 tb in the autumn of 1989 - four model years, and the last of the line before the 348 turned the engine through ninety degrees and changed the character of the car entirely. The 328 is therefore not a new idea but a finished one, and almost every difference from the 308 is a correction rather than an invention.\n\n## The 3.2-Litre Quattrovalvole\nThe engine is the clearest of those corrections. The quattrovalvole V8 went from 2,927 cc to 3,185 cc, bore rising from 81 mm to 83 mm and stroke from 71 mm to 73.6 mm, with compression lifted from 9.2:1 to 9.8:1 on European cars and from 8.6:1 to 9.2:1 on catalysed American ones. Ferrari's type reference is F 105 CB 000. Bosch K-Jetronic mechanical injection was carried over and Marelli MED 806 A electronic ignition fitted. European output rose to 270 bhp at 7,000 rpm against the quattrovalvole's 240, with 224 lb-ft at 5,500 rpm; the American car, breathing through catalysts, was quoted at 260 bhp and about 213.5 lb-ft, and from the spring of 1987 a further tipo 046 specification with KE3-Jetronic served Switzerland and Sweden at 255 bhp. Thirty horsepower is not transformative, and peak power was never the point: the gain sits in the mid-range, which is exactly where the 308 had always felt thin.\n\n## Pininfarina's Second Pass\nThe body changes are subtle in photographs and obvious in the metal. The nose was rounded and the wedge softened, the louvres behind the headlight pods deleted, the radiator exhaust louvre enlarged and the tail restyled. The most consequential change was the bumpers, which became body-coloured mouldings blended into the front and rear valances in place of the 308's black rubber-faced items - done deliberately so that the eight-cylinder cars, the Mondial 3.2 among them, read as one family. Beneath the skin the F106 tubular frame continued under new numbering, the track was widened by 25 mm at the front and 5 mm at the rear, Koni dampers were fitted throughout, the rack was quickened to the ratio used on the 288 GTO, and the bodyshell was galvanised. That last item has done more for survival rates than anything else on the list.\n\n## February 1988: ABS, Geometry and Convex Wheels\nThe mid-life change arrived in February 1988, from chassis 76626. Anti-lock braking was not a bolt-on: the front suspension geometry was reworked to a negative wheel offset and the dampers retuned to reduce squat and dive, and the new offset required new wheels, the concave 16-inch pattern giving way to the convex design shared with the Mondial 3.2. Revised cars carry a Cavallino Rampante on each door mirror and twin bonnet catches, and are commonly described as MY 1988 1/2. Whether ABS was optional or standard depends on which source is consulted and probably on the market; American cars went without it entirely through 1988 and received it only for model year 1989. Collectors read the change in both directions - the later car is the better-developed one, the earlier the purer - and the market has never settled the argument.\n\n## Targas, Right-Hand Drive and the Afterlife\nBuyers voted for the removable roof by a margin that still shapes the market: 6,068 GTS against 1,344 GTB, about four and a half to one. Right-hand-drive numbers are smaller again, 130 GTBs and 542 GTSs being the figures usually quoted, with a further 152 right-hand-drive GTSs said to have gone to Australia. Production ended in 1989 and the 348 took over. What the 328 acquired afterwards was a reputation none of its successors managed: among the older mid-engined V8s it is the car specialists describe as dependable, in large part because its cam-belt service can be carried out with the engine in the car - a sentence that cannot be written about the 355 that followed.",
 "marketNotes": "As of August 2026, classic.com's Market Benchmark for the 328 GTB stands at approximately $173,011 on a rising trend, and for the 328 GTS at approximately $115,000 - $115,363 on the model landing page and $115,108 on the GTS sub-market page, also rising. The GTB premium is roughly fifty per cent, which is the scarcity ratio expressing itself directly. The lowest sale classic.com tracks is $47,250, a 1988 GTS in April 2023; current asking prices on the site span roughly $112,000 to $290,000. Auction evidence sits above the benchmarks and is dominated by mileage. RM Sotheby's sold a 1988 GTB from the Longhorn Collection, non-ABS and showing 8,380 miles, for $212,800 at Arizona in 2026; a 1989 GTB with 13,335 km and Swiss delivery made EUR 120,750 at Paris in 2024; a 1989 GTS with 28,417 km and a 2023 belt change made EUR 92,000 at Villa Erba in 2023; and a Classiche-certified 1989 GTS showing 2,400 km made $235,200 at Miami in 2022. All four are 'Sold for' figures and therefore include buyer's premium, not hammer. In Britain, Retro Motor quoted a retail spread of roughly 62,000 to 180,000 pounds for the model in 2026. Prices quoted here are as of August 2026.",
 "whatToLookFor": "Belt-service history is the dominant document. The interval is quoted at five years or 30,000 miles, and unlike most later mid-engined Ferraris the job is done with the engine in the car, so the consequence of a lapse is measured in engine damage rather than in an unpayable bill. Dated invoices naming the tensioner and idler bearings, not just the belts, are what separate a documented car from an asserted one; a car whose last belt is undated should be costed as needing one immediately. Establish the specification before the condition. Chassis 76626 and February 1988 divide the run: ABS cars carry convex wheels, negative-offset front geometry, twin bonnet catches and Cavallino Rampante badges on the door mirrors, and a car advertised as a late one wearing concave wheels needs explaining. Confirm which market the engine was built for - European 270 bhp, catalysed American 260 bhp, or the Swiss and Swedish tipo 046 at 255 bhp - since the paperwork does not always say. The shell is galvanised but not immune: check sills, the front of the rear arches, the battery tray and the boot floor, and on a GTS the targa panel seals and the channel the panel sits in. Matching engine and gearbox numbers and a Ferrari Classiche certificate both show up in the strongest auction results. On an American car, confirm the 1989 NHTSA recall on the front lower suspension arm forks was carried out. Finally, weigh a car that has sat: K-Jetronic systems and fuel lines dislike long storage more than they dislike use.",
 "commonProblems": "The mechanical package is the least troublesome of the older mid-engined V8s, and specialists say so plainly - Continental AutoSports' technical manager described the 328 as one of the most reliable models Ferrari ever built, provided it is maintained. Oil weeps are normal rather than alarming: cam covers, cam seals and the gearshift shaft seal are the usual sources, and a light drip from the sump area is expected. Electrical faults are the more common irritation, with arcing at the fuse-box terminals a known pattern and climate-control switches failing at the illumination first, which means replacing the whole switch. K-Jetronic is mechanically robust but resents standing, and cars recommissioned after long storage frequently need fuel lines, an accumulator or a warm-up regulator. The scheduled work is where the money goes. The belt service runs to roughly $3,500 to $5,900 at American independents by owners' own accounts, with a UK specialist quoted nearer $2,100 for comparable work; dealer menu pricing for a 308/328 major service starts at $8,250 and rises to $12,999 where valve covers, cam seals and shim adjustment are included. Valves want checking at 15,000-mile intervals and gearbox oil every two years in a car covering meaningful distance. On American cars, NHTSA campaign 89V111000 of May 1989 replaced the four front lower suspension arm forks with thicker items after they were found liable to deform following a substantial impact.",
 "valueTrajectory": "The 328 spent most of its life as the cheap way into a mid-engined Ferrari and stopped being that somewhere around the middle of the last decade, when the analogue, manual, pre-electronics cohort re-rated as a group and the 328 went with it. Its position now is settled rather than speculative: as of August 2026 classic.com shows both body styles trending upward, with the GTB benchmark near $173,011 and the GTS near $115,000, and the gap between them tracking the four-and-a-half-to-one production ratio more faithfully than it did ten years ago. The more instructive spread is within each body style rather than between them. A 1989 GTS with 28,417 km made EUR 92,000 at Villa Erba in 2023, while a Classiche-certified 1989 GTS showing 2,400 km made $235,200 at Miami in 2022 - the same car in every respect that matters mechanically, separated by an odometer and a folder of invoices. Since the 328's whole case rests on being the dependable one, documentation of the belt service is the value factor that behaves least like a fashion, and the widening distance between recorded and unrecorded cars is the clearest trend in the model.",
 "overallConfidence": "high",
 "sources": [
  {
   "ref": "ferrari-328-gtb",
   "title": "Ferrari 328 GTB (1985)",
   "url": "https://www.ferrari.com/en-EN/auto/328-gtb",
   "publisher": "Ferrari S.p.A.",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Ferrari's own model record: 1,344 GTBs, chassis 58735-83017, 3185 cc, engine type F 105 CB 000, chassis type F 106 MB 100, 270 bhp at 7,000 rpm, Marelli MED 806 A ignition, shown at the 1985 Frankfurt Salon, ABS optional from mid-1988, replaced by the 348 tb in autumn 1989."
  },
  {
   "ref": "wikipedia-328",
   "title": "Ferrari 328",
   "url": "https://en.wikipedia.org/wiki/Ferrari_328",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Aggregated reference: 7,412 total from 1,344 GTB and 6,068 GTS with both chassis ranges; Tipo F105CB, 3,185 cc, 270 PS, 304 Nm; galvanised steel; ABS from February 1988 at chassis 76626 with negative-offset geometry and convex wheels; door-mirror Cavallino badges 1988-89; GTB 166 mph and 0-60 in 5.5 s against GTS 163 mph and 5.9 s; 1,263 kg; 1,991 cc GTB Turbo (308 built) and GTS Turbo (828 built) for the Italian VAT threshold."
  },
  {
   "ref": "supercarnostalgia-328",
   "title": "Ferrari 328 GTB & 328 GTS Guide",
   "url": "https://supercarnostalgia.com/blog/ferrari-328-gtb-amp-328-gts",
   "publisher": "Supercar Nostalgia",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Specialist guide: 1,344 GTB of which 130 right-hand drive, 6,068 GTS of which 542 right-hand drive; 270 bhp and 224 lb-ft on 9.8:1 in Europe against 260 bhp in the United States with a roughly 160 kg penalty; gains of 30 bhp and 33 lb-ft over the 308 quattrovalvole; track widened 25 mm front and 5 mm rear; Koni dampers; quicker rack; 1988 ABS with reworked geometry and convex wheels; 1,263 kg GTB and 1,273 kg GTS; 163 mph and 0-62 mph in 5.8 s."
  },
  {
   "ref": "tipo328-tech",
   "title": "From 1985 to 1989: versions Ferrari 328",
   "url": "https://www.308-328.com/328/328spectechen.html",
   "publisher": "308-328.com",
   "sourceType": "registry",
   "reliability": "medium",
   "notes": "Model registry detail: GTB development car 56211 then 58735-83017; GTS development cars 58687 and 59105 then 59301-83136; European tipo 040 at 270 bhp and 223 lb-ft on 9.8:1, 83 x 73.6 mm; US/Japan/Australia tipo 040 at 260 bhp SAE net and 213.5 lb-ft on 9.2:1; Swiss and Swedish tipo 046 from spring 1987 at 255 bhp at 6,750 rpm with KE3-Jetronic; ABS from chassis 76626 in February 1988, US cars excluded until model year 1989."
  },
  {
   "ref": "ferrarista-versions",
   "title": "Ferrari 308 and 328 buying guide: the various versions (1/3)",
   "url": "https://www.ferrarista.club/ferrari-blog/purchase-and-resale/ferrari-308-and-328-buying-guide-the-various-versions-13-r5/",
   "publisher": "Ferrarista.Club",
   "sourceType": "club-forum",
   "reliability": "medium",
   "notes": "Owners' club buying guide: 1,344 GTB including 135 US-market and 130 UK right-hand-drive cars; 6,068 GTS including 152 Australian and 542 UK right-hand-drive cars; one factory convertible, chassis 49453; bore 81 to 83 mm and stroke 71 to 73.6 mm over the 308 QV, compression 9.2 to 9.8:1 European and 8.6 to 9.2:1 US, 270 bhp against the QV's 240; rack shared with the 288 GTO; ABS from February 1988 with convex wheels and twin bonnet catches."
  },
  {
   "ref": "conceptcarz-328",
   "title": "1986 Ferrari 328 Specifications & Dimensions",
   "url": "https://www.conceptcarz.com/s9828/ferrari-328.aspx",
   "publisher": "Conceptcarz",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Independent specification database: 6,068 GTS built, chassis 59301-83136; 270 bhp at 7,000 rpm quoted alongside 213 lb-ft at 5,500 rpm; top speed 263 km/h (163.5 mph); steel body on tubular steel frame; 1,272.78 kg; five-speed manual in a rear transaxle."
  },
  {
   "ref": "ultimatespecs-328-us",
   "title": "Ferrari 328 GTB US Market Specs, Performance, Comparisons",
   "url": "https://www.ultimatespecs.com/car-specs/Ferrari/131830/Ferrari-328-GTB-US-Market.html",
   "publisher": "Ultimate Specs",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "US-market specification: 260 hp at 7,000 rpm, 213 lb-ft at 5,500 rpm, 9.2:1 compression, kerb weight 1,425 kg (3,142 lb), 205/55 R16 front and 225/55 R16 rear tyres, vented discs all round, EPA combined 15 mpg."
  },
  {
   "ref": "classic-328",
   "title": "Ferrari 328 Market",
   "url": "https://www.classic.com/m/ferrari/328/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Model landing page as of August 2026: sub-market benchmarks of $173,011 for the 328 GTB and $115,363 for the 328 GTS; 28 cars listed for sale; lowest tracked sale $47,250 for a 1988 GTS on 26 April 2023; current asking prices spanning roughly $111,990 to $289,995."
  },
  {
   "ref": "classic-328-gtb",
   "title": "Ferrari 328 GTB Market",
   "url": "https://www.classic.com/m/ferrari/328/gtb/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "GTB sub-market as of August 2026: Classic.com Market Benchmark of $173,011 on an upward trend, six cars listed for sale."
  },
  {
   "ref": "classic-328-gts",
   "title": "Ferrari 328 GTS Market",
   "url": "https://www.classic.com/m/ferrari/328/gts/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "GTS sub-market as of August 2026: Classic.com Market Benchmark of $115,108 on an upward trend, 24 cars listed for sale, lowest tracked sale $47,250 for a 1988 car on 26 April 2023."
  },
  {
   "ref": "rm-az26-gtb",
   "title": "1988 Ferrari 328 GTB, Arizona 2026",
   "url": "https://rmsothebys.com/auctions/az26/lots/r0053-1988-ferrari-328-gtb/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold for $212,800 at Arizona 2026, Longhorn Collection. Chassis ZFFXA19AXJ0076633, 8,380 miles, no ABS, no warranty book; timing-belt service February 2024 and annual service December 2025. Catalogue states one of 1,344 GTBs against 6,068 GTSs."
  },
  {
   "ref": "rm-pa24-gtb",
   "title": "1989 Ferrari 328 GTB, Paris 2024",
   "url": "https://rmsothebys.com/auctions/pa24/lots/r0031-1989-ferrari-328-gtb/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold for EUR 120,750 at Paris 2024, Timeless Collection. Chassis ZFFCA19S000078947, engine 14878 matching, 13,335 km, Swiss delivery, two owners, needing recommissioning; with folio, manuals, service book and warranty card."
  },
  {
   "ref": "rm-ve23-gts",
   "title": "1989 Ferrari 328 GTS, Villa Erba 2023",
   "url": "https://rmsothebys.com/auctions/ve23/lots/r0021-1989-ferrari-328-gts/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold for EUR 92,000 at Villa Erba 2023. Chassis ZFFWA20T0K0082236, 28,417 km, matching numbers, completed 14 July 1989; EUR 37,305 of work at Charles Pozzi in 2019 and a EUR 4,561 service in March 2023 including timing belts. Catalogue states one of 6,068 GTS."
  },
  {
   "ref": "rm-mi22-gts",
   "title": "1989 Ferrari 328 GTS, Miami",
   "url": "https://rmsothebys.com/auctions/mi22/lots/r0042-1989-ferrari-328-gts/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold for $235,200 at RM Sotheby's Miami in 2022. Chassis ZFFCA20S000082103, engine 18665, 2,400 km, ABS-equipped, Ferrari Classiche Certificate of Authenticity, cambelt service invoiced October 2022, sold new in Switzerland July 1989. Catalogue states one of 6,068 GTS."
  },
  {
   "ref": "classicmotorsports-guide",
   "title": "Ferrari 328 GTS and 328 GTB: Buy one now?",
   "url": "https://classicmotorsports.com/articles/ferrari-328-gts-and-328-gtb-mightier-308/",
   "publisher": "Classic Motorsports",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Buyer's guide with specialist input: Continental AutoSports technical manager Scott Wallace calls the 328 one of the most reliable models Ferrari ever built if maintained, with no year to avoid; faults listed as cam cover, cam seal and shift-shaft seal leaks, fuse-terminal arcing and climate-control switch illumination failure; annual oil and brake fluid, gearbox lube every two years, timing belt every five years, valve adjustment every 15,000 miles; ABS in late 1988 named as the major change across the run."
  },
  {
   "ref": "retromotor-328gts",
   "title": "1988 Ferrari 328 GTS review: Retro Road Test",
   "url": "https://www.retromotor.co.uk/retro-road-test/1988-ferrari-328-gts-review/",
   "publisher": "Retro Motor",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Driving assessment and UK ownership context: unassisted steering heavy at low speed, open-gate manual stiff when cold; describes the 328 as one of the most reliable classic Ferraris and notes that servicing without engine removal keeps costs manageable; quotes a UK retail spread of 62,000 to 180,000 pounds and a few thousand pounds a year in maintenance."
  },
  {
   "ref": "ferrarichat-major-service",
   "title": "Major service cost for 328",
   "url": "https://www.ferrarichat.com/forum/threads/major-service-cost-for-328.100962/",
   "publisher": "FerrariChat",
   "sourceType": "club-forum",
   "reliability": "low",
   "notes": "Owner reports on belt-service practice and cost: the engine stays in the car, unlike the 355; quoted figures of $4,000-$4,900 at dealers, $5,840 in California, under $3,500 in Florida and roughly $2,100 from a UK specialist; scope covering belts, tensioner assembly, both idler bearings, valve adjustment, cam oil seals, plugs, filters and flushes."
  },
  {
   "ref": "jscuderia-service",
   "title": "Ferrari 308/328 Service Menu",
   "url": "https://jscuderiautomotive.com/services/ferrari-service/ferrari-308-328-service-menu/",
   "publisher": "J. Scuderia Automotive",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Published specialist menu pricing: annual service from $925, minor service from $4,100, Major Service 1 from $8,250 including belt replacement and a 63-point inspection, Major Service 2 from $12,999 adding valve covers, cam seals and shim adjustment; timing-belt interval stated as every 30,000 miles or five years, whichever comes first."
  },
  {
   "ref": "nhtsa-89v111",
   "title": "NHTSA Recall Campaign 89V111000 - Ferrari 328 front lower suspension arm",
   "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=ferrari&model=328&modelYear=1987",
   "publisher": "National Highway Traffic Safety Administration",
   "sourceType": "government",
   "reliability": "high",
   "notes": "US federal recall record: campaign 89V111000, report received 7 May 1989, component front suspension lower control arm. Front lower suspension arm forks could deform after substantial impacts such as an accident, with a consequence of suspension arm collapse; remedy was replacement of all four forks with items of greater thickness."
  },
  {
   "ref": "exoticcartrader-gts",
   "title": "Ferrari 328 GTS Complete Guide",
   "url": "https://www.exoticcartrader.com/blog/ferrari-328-gts-review",
   "publisher": "Exotic Car Trader",
   "sourceType": "journalism",
   "reliability": "low",
   "notes": "Dealer-side guide: repeats 6,068 GTS and 1,344 GTB; states ABS arrived in 1988 with lighter restyled alloy wheels that became standard thereafter, describing ABS as fitted rather than optional; quotes 270 hp, 165 mph and 2,784 lb. Used here for the standard-versus-optional ABS conflict and the durability framing."
  }
 ],
 "claims": [
  {
   "section": "production",
   "claimText": "Ferrari built 1,344 328 GTBs, chassis 58735 to 83017, and 6,068 328 GTSs, chassis 59301 to 83136, between 1985 and 1989 - a total of 7,412 cars, with the targa outselling the fixed-roof berlinetta by roughly four and a half to one.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "ferrari-328-gtb",
    "wikipedia-328",
    "supercarnostalgia-328",
    "conceptcarz-328",
    "tipo328-tech",
    "ferrarista-versions",
    "rm-az26-gtb",
    "rm-ve23-gts",
    "rm-mi22-gts"
   ]
  },
  {
   "section": "production",
   "claimText": "Right-hand-drive production is usually quoted at 130 GTBs and 542 GTSs, but the sources consulted do not agree on whether those figures cover all right-hand-drive cars or only British-market ones.",
   "confidence": "medium",
   "status": "unverified",
   "sourceRefs": [
    "supercarnostalgia-328",
    "ferrarista-versions"
   ],
   "conflictNote": "Supercar Nostalgia gives 130 right-hand-drive GTBs and 542 right-hand-drive GTSs without naming a market. The Ferrarista club guide gives the same two numbers but labels both as UK cars and adds a separate 152 right-hand-drive GTSs for Australia. Whether 542 is the total or the British share is not resolved by any source consulted here, so no aggregate right-hand-drive figure is asserted."
  },
  {
   "section": "production",
   "claimText": "The 1,991 cc GTB Turbo and GTS Turbo built for the Italian market between 1986 and 1989 wear the 328's restyled bodywork but are separate two-litre turbocharged models built to sit beneath Italy's VAT threshold, and are not counted in the 7,412 figure.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-328",
    "ferrari-328-gtb"
   ]
  },
  {
   "section": "specs",
   "claimText": "The 328's V8 is the 308 quattrovalvole unit enlarged from 2,927 cc to 3,185 cc, bore going from 81 mm to 83 mm and stroke from 71 mm to 73.6 mm, with compression raised from 9.2:1 to 9.8:1 in Europe and from 8.6:1 to 9.2:1 in the United States.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "ferrarista-versions",
    "wikipedia-328",
    "ferrari-328-gtb",
    "supercarnostalgia-328"
   ]
  },
  {
   "section": "specs",
   "claimText": "Ferrari's type references for the European car are engine F 105 CB 000 and chassis F 106 MB 100, with Bosch K-Jetronic mechanical injection and Marelli MED 806 A ignition; European cars were quoted at 270 bhp at 7,000 rpm and 224 lb-ft at 5,500 rpm against 240 bhp for the 308 quattrovalvole, catalysed cars for the United States, Japan and Australia gave 260 bhp SAE net and about 213.5 lb-ft, and a tipo 046 specification for Switzerland and Sweden from spring 1987 gave 255 bhp at 6,750 rpm on KE3-Jetronic.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "ferrari-328-gtb",
    "tipo328-tech",
    "supercarnostalgia-328",
    "ferrarista-versions",
    "ultimatespecs-328-us"
   ]
  },
  {
   "section": "specs",
   "claimText": "Published performance figures for the 328 do not agree, and no independently measured figure was found for this entry.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "wikipedia-328",
    "supercarnostalgia-328",
    "conceptcarz-328",
    "classicmotorsports-guide",
    "exoticcartrader-gts"
   ],
   "conflictNote": "Wikipedia separates the bodies at 166 mph and 0-60 mph in 5.5 seconds for the GTB against 163 mph and 5.9 seconds for the GTS. Supercar Nostalgia gives 163 mph and 0-62 mph in 5.8 seconds for both. Conceptcarz gives 263 km/h (163.5 mph). Classic Motorsports quotes 6.0 seconds to 60 mph for the American car and Exotic Car Trader quotes 165 mph and roughly five seconds. None of these is presented as an independently instrumented test and the spread is not resolved by any source consulted here."
  },
  {
   "section": "specs",
   "claimText": "European kerb weight is quoted at approximately 1,263 kg for the GTB and 1,273 kg for the GTS, while the catalysed United States car is quoted at approximately 1,425 kg.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-328",
    "supercarnostalgia-328",
    "conceptcarz-328",
    "ultimatespecs-328-us"
   ]
  },
  {
   "section": "history",
   "claimText": "Pininfarina's restyle softened the 308's wedge with a rounder nose, deleted the louvres behind the headlight pods, enlarged the radiator exhaust louvre and replaced the black rubber-faced bumpers with body-coloured mouldings blended into the valances, deliberately matching the Mondial 3.2 so that the eight-cylinder range read as one family.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-328",
    "supercarnostalgia-328",
    "ferrarista-versions"
   ]
  },
  {
   "section": "history",
   "claimText": "Beneath the restyled body the F106 tubular frame was carried over under new numbering with galvanised steel bodywork, the track widened by 25 mm at the front and 5 mm at the rear, Koni dampers fitted throughout and the steering rack quickened to the ratio used on the 288 GTO, at 3.25 turns lock to lock.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "supercarnostalgia-328",
    "wikipedia-328",
    "ferrarista-versions"
   ]
  },
  {
   "section": "history",
   "claimText": "From February 1988, at chassis 76626, anti-lock braking was introduced together with a revised front suspension geometry using negative wheel offset, and convex 16-inch wheels replaced the earlier concave pattern; revised cars also carry Cavallino Rampante badges on the door mirrors and twin bonnet catches, while American cars went without ABS through the 1988 'MY 1988 1/2' season and received it only from model year 1989.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-328",
    "tipo328-tech",
    "ferrarista-versions",
    "supercarnostalgia-328"
   ]
  },
  {
   "section": "history",
   "claimText": "Sources disagree over whether anti-lock braking was optional or standard equipment on the 328 after February 1988.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "ferrari-328-gtb",
    "wikipedia-328",
    "tipo328-tech",
    "exoticcartrader-gts",
    "classicmotorsports-guide"
   ],
   "conflictNote": "Ferrari's own model page describes ABS as available as an option from mid-1988 and Wikipedia describes European cars as offered ABS optionally through mid-1988 and 1989. Exotic Car Trader describes ABS as fitted to the 328 range in 1988 rather than optional. 308-328.com states only that it was available from chassis 76626 in February 1988, and Classic Motorsports dates the change to late 1988 without addressing whether it was standard. The conflict is not resolved by any source consulted here, and it may in practice have varied by market."
  },
  {
   "section": "history",
   "claimText": "The 328 GTB was shown at the Frankfurt Salon in autumn 1985 and was replaced by the 348 tb in autumn 1989, ending the transverse-V8 line that had begun with the 308 GTB in 1975.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "ferrari-328-gtb",
    "wikipedia-328"
   ]
  },
  {
   "section": "problems",
   "claimText": "The 328's cam-belt service is carried out with the engine in the car, which is the single largest practical difference between owning a 328 and owning the engine-out models that followed it.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "ferrarichat-major-service",
    "retromotor-328gts",
    "jscuderia-service"
   ]
  },
  {
   "section": "problems",
   "claimText": "The cam-belt interval is quoted at five years or 30,000 miles, whichever comes first, with valve clearances checked at 15,000-mile intervals and gearbox oil changed every two years on a car covering meaningful distance.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "jscuderia-service",
    "classicmotorsports-guide"
   ]
  },
  {
   "section": "problems",
   "claimText": "Belt-service pricing spans a wide range: owners report roughly $3,500 to $5,900 at American independents and around $2,100 from a UK specialist, while published dealer menu pricing for a 308/328 major service starts at $8,250 and rises to $12,999 where valve covers, cam seals and shim adjustment are included.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "ferrarichat-major-service",
    "jscuderia-service"
   ]
  },
  {
   "section": "problems",
   "claimText": "The recurring faults are oil weeps from the cam covers, cam seals and gearshift shaft seal, arcing at the fuse-box terminals, and climate-control switches whose illumination fails first and which must be replaced whole; a Ferrari specialist quoted in Classic Motorsports describes the 328 as one of the most reliable models Ferrari ever built provided it is maintained.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classicmotorsports-guide",
    "retromotor-328gts"
   ]
  },
  {
   "section": "problems",
   "claimText": "NHTSA recall campaign 89V111000, reported on 7 May 1989, covered Ferrari 328 front lower suspension arm forks that could deform after a substantial impact and risk collapse of the arm; the remedy was replacement of all four forks with thicker items. It rests on the federal record alone because that is the primary document and no secondary source consulted mentioned the campaign.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "nhtsa-89v111"
   ]
  },
  {
   "section": "market",
   "claimText": "As of August 2026 classic.com records a Market Benchmark of approximately $173,011 for the 328 GTB and approximately $115,000 for the 328 GTS, both on rising trends, with the lowest sale it tracks being $47,250 for a 1988 GTS in April 2023.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-328",
    "classic-328-gtb",
    "classic-328-gts"
   ]
  },
  {
   "section": "market",
   "claimText": "Auction results as of August 2026 show mileage and documentation separating cars far more sharply than body style does: a 1988 GTB with 8,380 miles made $212,800 at RM Sotheby's Arizona in 2026, a 1989 GTB with 13,335 km made EUR 120,750 at Paris in 2024, a 1989 GTS with 28,417 km made EUR 92,000 at Villa Erba in 2023, and a Classiche-certified 1989 GTS showing 2,400 km made $235,200 at RM Sotheby's Miami in 2022. All are 'Sold for' figures inclusive of buyer's premium.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "rm-az26-gtb",
    "rm-pa24-gtb",
    "rm-ve23-gts",
    "rm-mi22-gts"
   ]
  },
  {
   "section": "market",
   "claimText": "UK retail pricing for the 328 was quoted at roughly 62,000 to 180,000 pounds in 2026 depending on mileage and condition, with annual maintenance described as a few thousand pounds.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "retromotor-328gts",
    "classic-328"
   ]
  },
  {
   "section": "summary",
   "claimText": "The 328 is a development of the 308 rather than a new model, and its reputation among the older mid-engined Ferrari V8s rests on dependability and on a maintenance regime that does not require the engine to be removed.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classicmotorsports-guide",
    "retromotor-328gts",
    "ferrarichat-major-service",
    "exoticcartrader-gts"
   ]
  }
 ]
};
