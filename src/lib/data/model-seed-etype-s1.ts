/**
 * Researched model draft - Jaguar E-Type Series 1 (1961-1968).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedETypeS1 = {
 "slug": "jaguar/e-type-series-1",
 "make": "Jaguar",
 "model": "E-Type",
 "generation": "Series 1",
 "generationCode": null,
 "trim": null,
 "yearStart": 1961,
 "yearEnd": 1968,
 "bodyStyles": [
  "2-door Open Two Seater (roadster, factory designation OTS)",
  "2-door Fixed Head Coupe (FHC)",
  "2-door 2+2 Fixed Head Coupe (from March 1966, on a wheelbase nine inches longer)"
 ],
 "engines": [
  "3,781 cc XK DOHC straight-six, three 2 in SU HD8 carburetors, 265 hp gross SAE claimed at 5,500 rpm, 240 lb-ft (March 1961 to August 1964)",
  "4,235 cc XK DOHC straight-six, block lengthened for bores 5 mm larger, three SU carburetors, 265 hp gross SAE claimed at 5,400 rpm, 283 lb-ft (October 1964 to 1968)",
  "4,235 cc XK straight-six in US Series 1.5 specification, twin Zenith-Stromberg carburetors, claimed output reduced to 246 hp and 263 lb-ft"
 ],
 "productionTotal": null,
 "productionNotes": "No single Series 1 total is agreed, so none is asserted. Wikipedia's tabulation gives 15,498 3.8-liter cars (7,828 open two-seaters, 7,670 fixed-head coupes), 16,195 Series 1 4.2-liter cars (6,749 OTS, 5,830 FHC, 3,616 2+2s) and 6,726 Series 1.5 cars, for 38,419. The XKEdata register publishes chassis ranges instead, and those ranges sum to 15,502, 16,201 and 6,720, or 38,423. The gap is four to six cars per grouping and looks like an artifact of whether a range's closing number is counted inclusively. The Heritage Trust compounds it: it publishes ranges and no totals, several of its closing numbers sitting one below XKEdata's. The split of the 4.2 cars between Series 1 and Series 1.5 is separately contested, because Jaguar never used the designation and XKEdata records that the chassis number at which the interim cars begin 'is a hot subject'. What the sources do agree on is the shape of the run: right-hand-drive cars were a small minority in every body style, 943 RHD 3.8 roadsters against 6,887 left-hand-drive and 1,799 RHD 3.8 coupes against 5,873. Left-hand drive is not the same thing as United States delivery, and no source here breaks the run down by destination.",
 "notableTrims": [
  {
   "name": "3.8 'outside hood lock' / flat floor (1961-1962)",
   "note": "The earliest cars, with external hood latches worked by a separate key, footwells with no recesses, and louvers welded in as a discrete panel rather than pressed. Sources disagree on when each feature ended and whether they ended together. The most valuable Series 1 configuration."
  },
  {
   "name": "3.8 Series 1 (1962-1964)",
   "note": "Recessed footwells and internal hood release, but still the Moss gearbox with no synchromesh on first, a dynamo rather than an alternator, and the original brake servo."
  },
  {
   "name": "4.2 Series 1 (October 1964-1967)",
   "note": "The mechanical high point of the Series 1: the same claimed 265 hp but 283 lb-ft, an all-synchromesh Jaguar gearbox, an alternator, a better brake servo and reclining seats. Quicker in period testing than the 3.8 despite the identical power claim."
  },
  {
   "name": "2+2 (March 1966-1968)",
   "note": "Wheelbase stretched from 8 ft to 8 ft 9 in, doors 8.5 in longer, windshield 1.125 in taller and the roofline raised. The only Series 1 body offered with a Borg-Warner automatic, and the cheapest way into a Series 1."
  },
  {
   "name": "Series 1.5 (1967-1968 model year)",
   "note": "Interim federalized cars: headlamp covers deleted and the lamps moved forward, twin Zenith-Stromberg carburetors on US cars with claimed output down to 246 hp, black rocker switches replacing the toggles. Jaguar never used the name; enthusiasts coined it and still argue about where it starts."
  }
 ],
 "specs": {
  "layout": "Front-mounted longitudinal engine, rear-wheel drive",
  "chassis": "Steel monocoque center section with a bolted tubular front subframe carrying engine and front suspension",
  "engine": "3,781 cc XK DOHC straight-six to August 1964; 4,235 cc from October 1964, the block lengthened to take bores 5 mm larger",
  "induction": "Three 2 in SU HD8 carburetors; twin Zenith-Stromberg units on US-market Series 1.5 cars",
  "power": "265 hp gross SAE claimed at 5,500 rpm (3.8) and 5,400 rpm (4.2) - manufacturer claims, against published net estimates of 180-228 hp; 246 hp claimed for the US Series 1.5",
  "torque": "240 lb-ft on the 3.8, rising to 283 lb-ft on the 4.2, an increase of roughly 18 percent; 263 lb-ft on the US Series 1.5",
  "transmission": "Moss four-speed manual without synchromesh on first to 1964; Jaguar all-synchromesh four-speed from October 1964; Borg-Warner automatic on the 2+2 only, 2.88:1 final drive against 3.07:1 manual",
  "suspension": "Independent front by torsion bars and wishbones; independent rear by lower wishbones with twin coil-spring damper units per side, in a detachable cage",
  "brakes": "Four-wheel discs, mounted inboard at the rear to reduce unsprung weight",
  "steering": "Rack and pinion",
  "wheelbase": "8 ft (96.0 in (2,438 mm)) on the two-seaters; 8 ft 9 in (2,667 mm) on the 2+2",
  "weight": "About 2,770 lb for the open two-seater and 3,090 lb for the 2+2; 2,899 lb quoted for the earliest cars",
  "acceleration": "0-60 mph in 7.1 s (The Motor, 3.8 roadster 77 RW, 1961), 6.9 s (Autocar, 3.8 coupe 9600 HP, 1961) and 7.6 s (Autocar, 4.2 coupe, 1965)",
  "top_speed_tested": "149.1 mph (The Motor), 150.4 mph mean and 151.7 mph best (Autocar), 153 mph for a 4.2 coupe in 1965 - all on press cars whose standard tune is disputed",
  "launch_price_us": "$5,595 for the roadster, with the coupe about $300 more",
  "assembly": "Browns Lane, Coventry"
 },
 "summary": "The Jaguar E-Type Series 1 (1961-1968) put racing-derived engineering under a body drawn by an aerodynamicist and sold it for a fraction of what a comparable Ferrari cost. William Heynes began the project in December 1956, and the E1A and E2A prototypes carried D-Type monocoque thinking into a road car. The production version combined a steel monocoque and bolted tubular front subframe with the 3,781 cc XK six, three SU HD8 carburetors, four-wheel disc brakes mounted inboard at the rear and rack-and-pinion steering. It was shown at Geneva in March 1961 and reached American showrooms at $5,595 for the roadster, and the press promptly recorded 149 and 150 mph in cars that were probably not to standard tune. Over seven years it gained a 4.2-liter engine and a gearbox worthy of it, grew a longer-wheelbase 2+2 body, and finally lost its headlamp covers to American regulation. Something close to 38,400 Series 1 cars were built, the large majority left-hand drive.",
 "history": "## From D-Type to Production Car\n\nWork began under technical director William Heynes in December 1956, three years before there was a car to show. E1A was completed in May 1957: shorter than the production car at fourteen feet two inches, built around a central monocoque tub in the D-Type manner but with a new independent rear end. E2A followed with a 2,997 cc racing XK six and went to Briggs Cunningham for Le Mans in 1960, where it failed to finish. Malcolm Sayer, an aerodynamicist who joined Jaguar in 1950, shaped the open car; Lyons and Bob Blake settled the coupe's roof. Bob Knight's rear suspension - lower wishbones, twin coil-spring damper units each side, the assembly in a detachable cage - is the piece of engineering that dates least.\n\n## Geneva, March 1961, and the 150 mph Question\n\nThe car was announced at Geneva on 14 March 1961, export first, the British market following in July. Two press cars did the work: 9600 HP, the seventh prototype and a fixed-head coupe, driven to Geneva overnight by Bob Berry; and 77 RW, the roadster Norman Dewis was called from MIRA to bring through the night once demonstration rides were needed. The Motor timed 77 RW at 149.1 mph with 0-60 mph in 7.1 seconds; Autocar took 9600 HP to Belgium and published 150.4 mph mean, 151.7 mph best and 0-60 in 6.9 seconds on 24 March 1961. Those figures made the car's reputation and are not straightforwardly reproducible. Dewis's own testing had recorded 143 mph on the M1 and 142 mph at MIRA in January 1961; when 9600 HP was later stripped its cylinder head proved gas-flowed and matched to the manifolds; and Maurice Smith, who ran the Autocar test, is reported to have said he never saw more than 137 mph from his own 3.8.\n\n## Flat Floors, Outside Latches and the Early-Car Hierarchy\n\nThe features that now set the price of an early E-Type were, at the time, faults being corrected. The first cars had unrecessed footwells - the flat floors - and were desperately short of legroom; Jaguar pressed depressions into the floors either side of the transmission tunnel. They also had hood latches outside the body and louvers welded in as a discrete panel rather than pressed into the skin. Sources do not agree on the dating. Wikipedia treats them as one event and says the first 500 cars had flat floors and external latches; Classic & Sports Car separates them, putting internal locking in October 1961 and lowered floors in February 1962. That matters commercially: the trade sells flat floors, outside hood locks and welded louvers as three distinct premiums.\n\n## The 4.2 and the 2+2\n\nIn October 1964 the 3.8 gave way to a 4,235 cc engine, the block lengthened to take bores five millimeters larger. Peak power was unchanged at a claimed 265 hp, now at 5,400 rpm, but torque rose from 240 to 283 lb-ft. More consequential were the ancillaries: the Moss gearbox, with no synchromesh on first, gave way to Jaguar's own all-synchromesh four-speed; an alternator replaced the dynamo; the brake servo and seats improved. Autocar recorded 153 mph from a 4.2 coupe in 1965. In March 1966 came the first change to Sayer's shape: the 2+2, wheelbase stretched from eight feet to eight feet nine inches, doors eight and a half inches longer, the roof raised towards the back. Motor Sport tested one that April and called it, accurately, a two-seater with room for one or two more rather than a four-seater.\n\n## Series 1.5: Federal Regulation Arrives\n\nFor the 1968 model year Jaguar spent heavily adapting the car to American rules. The glazed headlamp fairings went, the lamps moving forward two and a half inches; toggle switches became black rockers; and US cars took twin Zenith-Stromberg carburetors in place of the triple SUs, claimed output falling to 246 hp. Jaguar issued no new designation and went on calling these Series 1. 'Series 1.5' is an enthusiast coinage applied afterwards, and the register community has never settled on where it begins.",
 "marketNotes": "All figures below are as of September 2026. classic.com records an average sale of $151,103 across Jaguar E-Type Series 1 cars, with 57 listed for sale. Its benchmarks separate sharply by body: the Series 1 Roadster benchmark stands at $121,781 and the Series 1 Coupe at $81,576, both marked as trending downward. The coupe's average sale is $81,874, over a range running from $9,000 for a 1963 conversion project in August 2024 to $179,995 for a 409-mile 1964 car in July 2026. The roadster's average sale of $210,275 sits well above its own benchmark, which is what a market with a long tail of exceptional cars looks like. 'Flat Floor (1961-1962)' is tracked as a separate category, six cars listed, average sale $139,075, with a 1962 roadster at $140,000 in June 2026 and asking prices running to $450,000. Auction evidence follows the same hierarchy. RM Sotheby's sold chassis 875157, a flat-floor 3.8 roadster with outside hood latches and hand-welded louvers, delivered new through Jaguar Cars of New York, for $324,000 at Monterey in August 2025. The same house offered chassis 875256, a comparable flat-floor car whose restoration involved a replacement block and head restamped to factory-correct numbers, at Monaco in 2024 against an estimate RM published as $185,000 to $220,000; it did not sell.",
 "whatToLookFor": "Structure decides the price, and on a monocoque with a bolted-on front subframe the structure is most of the car. The front bulkhead and the mountings for the engine frame rails are the critical area, followed by inner and outer sills, floor pans - especially vulnerable on roadsters - door bottoms, rear arches, trunk floor, rear valance and the rear radius arm mountings. Hood seams behind the chrome trim and coupe tailgate seams hide corrosion well. A Jaguar Daimler Heritage Trust certificate records the chassis, engine, body and gearbox numbers as built, the color and trim, the build and dispatch dates and the destination. The Trust is explicit that it does not inspect cars and that the certificate confirms nothing about identity, provenance, originality or condition: it establishes what left Browns Lane, not what is in front of you. Restamped components are a live issue on high-value early cars, one RM Sotheby's catalog describing a flat-floor roadster that had received a new block and head restamped with factory-correct numbers during an otherwise fully documented restoration. On early cars, flat floors, external latches and welded rather than pressed louvers are worth verifying individually against the chassis number; the three did not all change at the same moment, and the trade prices each one.",
 "commonProblems": "Corrosion is the defining fault and the expensive one. Restoration is complicated further because the cars were hand-finished and no two shells are dimensionally identical, so replacement panels rarely drop into place. Monocoque Metalworks, a US shell specialist, is blunt that reproduction hood panels are poorly built and need considerable adjustment, and puts a new lower valance alone at $1,400 or more; ECD Auto Design put a frame-off E-Type restoration by a reputable shop at $60,000 to $200,000 in 2025. On the XK six, coolant staining and emulsified oil under the filler cap point to head gasket failure; a healthy engine should show around 40 to 45 psi at 3,000 rpm. Light rattling from the front indicates worn timing chains and tensioners. Weeps from the crankcase seals are normal rather than terminal, but the rear seal is an engine-out job. Owners on the Jag-lovers forum report complete XK rebuilds by American shops between $12,000 and $20,000 depending on the shop and the standard asked for. The Moss gearbox on the 3.8 has no synchromesh on first and can need two hands to find reverse, though E-Type manual boxes are durable. Rear discs sit inboard, so changing them means dropping the whole rear suspension cage, a job charged by the day rather than the part. Rusty subframes, worn hubs and universal joints, tired dampers and perished bushes are the usual rear-end complaints. Cockpit heat was a criticism when the cars were new, Motor Sport finding the handbrake and gear lever uncomfortably hot in 1966.",
 "valueTrajectory": "The Series 1 has spent the last decade splitting into two markets that share a shape. At the top, flat-floor and outside-hood-lock 3.8 cars with documented early chassis numbers have pulled away: as of September 2026 classic.com tracks them as a distinct category with an average sale of $139,075 and asking prices running to $450,000, and RM Sotheby's achieved $324,000 for one at Monterey in August 2025. Below that, the broad middle is softening rather than rising. As of September 2026 classic.com marks both the Series 1 Roadster benchmark of $121,781 and the Series 1 Coupe benchmark of $81,576 as trending downward, and the house that sold chassis 875157 failed to sell a comparable flat-floor car at Monaco in 2024 once the restoration was found to involve restamped components. Hagerty's market writing credits the American recovery with resetting E-Type values while the British market stayed flat, and identifies the premium specification as a covered-headlamp car with the 4.2 engine rather than the purist's 3.8. The 2+2 remains the cheapest entry and shows least movement. The pattern is one of provenance and originality separating from condition alone.",
 "overallConfidence": "high",
 "sources": [
  {
   "ref": "jdht-etype-guide",
   "title": "Jaguar E-type (RG001F, v.3, 25-01-2023)",
   "url": "https://www.jaguarheritage.com/jdht/wp-content/uploads/RG001F-Jaguar-E-type-v.3-25-01-2023.pdf",
   "publisher": "Jaguar Daimler Heritage Trust",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Chassis ranges, no totals: 3.8 OTS RHD 850001-850943 / LHD 875001-881886; 3.8 FHC RHD 860001-861799 / LHD 885001-890872; 4.2 OTS RHD 1E1001-1E2183 / LHD 1E10001-1E18367; 4.2 FHC RHD 1E20001-1E21958 / LHD 1E30001-1E35814; 2+2 RHD 1E50001-1E51379 / LHD 1E75001-1E79221, closing July 1968."
  },
  {
   "ref": "jdht-certificates",
   "title": "Heritage Certificates - Archive Services",
   "url": "https://www.jaguarheritage.com/archive-services/certificates/",
   "publisher": "Jaguar Daimler Heritage Trust",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Certificate scope: color, trim, build and dispatch dates, destination and the chassis, engine, body and gearbox numbers; the Trust does not inspect cars and confirms nothing about identity, provenance, originality or condition."
  },
  {
   "ref": "xkedata-numbers",
   "title": "XKE Data - Catalog - Car Numbers",
   "url": "https://www.xkedata.com/catalog/numbers/",
   "publisher": "XKEdata.com",
   "sourceType": "registry",
   "reliability": "high",
   "notes": "Register ranges with quantities: 3.8 RHD OTS 943, RHD FHC 1,799, LHD OTS 6,887, LHD FHC 5,873; S1 4.2 863, 5,888, 1,583, 4,249, 974, 2,644; S1.5 320, 2,479, 375, 1,565, 404, 1,577. Puts S1.5 at 1E1864 onward for RHD roadsters while stating the start point 'is a hot subject'."
  },
  {
   "ref": "jdc-etype-register",
   "title": "The E-Type Register",
   "url": "https://www.jaguardriver.co.uk/registers/e-type",
   "publisher": "Jaguar Drivers' Club",
   "sourceType": "club-forum",
   "reliability": "medium",
   "notes": "Club series definitions: Series 1 runs 1961-1968, the 3.8 replaced by the 4.2 in 1964 with the car still called Series 1, unchanged externally but improved mechanically and in trim. Recognizes no Series 1.5."
  },
  {
   "ref": "wikipedia-etype",
   "title": "Jaguar E-Type",
   "url": "https://en.wikipedia.org/wiki/Jaguar_E-Type",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Production tabulation: 3.8 15,498 (7,828 OTS, 7,670 FHC); S1 4.2 16,195 (6,749 OTS, 5,830 FHC, 3,616 2+2); S1.5 6,726; 38,419 total. Also the March 1961 export launch, 4,235 cc with bores 5 mm larger, 265 hp at 5,500/5,400 rpm, 240 to 283 lb-ft, the 'first 500 cars' flat-floor and external-latch statement, and S1.5 at 246 hp / 263 lb-ft."
  },
  {
   "ref": "aronline-etype",
   "title": "Jaguar E-type - the full story",
   "url": "https://www.aronline.co.uk/cars/jaguar/e-type/story/",
   "publisher": "AROnline",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Heynes starts December 1956; E1A May 1957; E2A to Cunningham for Le Mans 1960; Geneva 14 March 1961; period British list prices of 2,097 and 2,196 pounds; triple 2 in SU HD8; the gas-flowed head in 9600 HP and Maurice Smith's 137 mph remark; output 2,160 in 1961 (383 by August), 6,266 in 1962, 4,065 in 1963, 6,880 in 1966; a reported 250,000 pounds spent on federalization, headlamps forward 2.5 in."
  },
  {
   "ref": "ateupwithmotor-etype",
   "title": "Top Cat: The Jaguar E-Type",
   "url": "https://ateupwithmotor.com/model-histories/jaguar-e-type/",
   "publisher": "Ate Up With Motor",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "The 265 hp gross rating against net estimates of 180-228 hp, and the statement that press cars had more power than standard tune; flat floors fixed by pressing depressions either side of the transmission; the US launch price of $5,595 for the roadster with the coupe about $300 more; 3,781 cc to 4,235 cc via re-spaced bores; 2+2 March 1966 on a 105 in wheelbase."
  },
  {
   "ref": "prestige-9600hp",
   "title": "Jaguar E-type Series 1 (9600 HP) road test",
   "url": "https://prestigeandperformancecar.com/jaguar/jaguar-e-type-series-1-road-test/",
   "publisher": "Prestige & Performance Car",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "9600 HP, the seventh prototype coupe, driven to Geneva by Bob Berry 14-15 March 1961; 77 RW brought by Dewis from MIRA overnight; Autocar's 151.7 mph best and 150.4 mph mean published 24 March 1961; Dewis's own 143 mph on the M1 and 142 mph at MIRA in January 1961."
  },
  {
   "ref": "motorsport-2plus2-1966",
   "title": "The Jaguar E-type 2+2",
   "url": "https://www.motorsportmagazine.com/archive/article/april-1966/18/the-jaguar-e-type-22/",
   "publisher": "Motor Sport",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Period test, April 1966: wheelbase 8 ft to 8 ft 9 in, windshield 1.125 in taller, doors 8.5 in longer; Borg-Warner automatic at 2.88:1 against 3.07:1 manual; period British list prices of 2,245 pounds 8s 9d manual and 2,385 pounds 12s 1d automatic; corroding underbody bolts after 5,000 test miles; cockpit heat at handbrake and gear lever."
  },
  {
   "ref": "classicandsportscar-guide",
   "title": "Jaguar E-type S1, S1.5 & S2 buyer's guide",
   "url": "https://www.classicandsportscar.com/features/buyers-guide-jaguar-e-type-s1-s15-s2",
   "publisher": "Classic & Sports Car",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Dates the early changes separately: internal locking replaces outside latches October 1961, lowered floors replace flat floors February 1962; 4.2 replaces 3.8 October 1964 with more torque, better brakes and seats, alternator for dynamo, Jaguar box for the Moss. Also the corrosion map used here: sills, floors, arches, bulkhead."
  },
  {
   "ref": "classicsworld-guide",
   "title": "Jaguar E-type S1 & S2 buyer's guide",
   "url": "https://classicsworld.co.uk/guides/jaguar-e-type-s1-s2-buyers-guide/",
   "publisher": "Classics World",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Fault map used here: floor pans especially on roadsters, sills, door bottoms, rear arches, hood and tailgate seams, front bulkhead at the engine rail mountings; head gasket signs; 40-45 psi oil pressure at 3,000 rpm; timing chain rattle; crankcase seal weeps with the rear seal an engine-out job; inboard rear discs needing the rear cage dropped. Its repair costs are British and are not used here."
  },
  {
   "ref": "classic-etype-s1",
   "title": "Jaguar E-Type Series 1 Market",
   "url": "https://www.classic.com/m/jaguar/e-type/series-1/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of September 2026: average sale $151,103 across Series 1; 57 cars listed, split 32 roadsters, 18 coupes, 7 in the separately tracked 'Flat Floor (1961-1962)' category and 3 Series 1.5; roadster benchmark $122,026 and coupe benchmark $80,929 on this summary page."
  },
  {
   "ref": "classic-etype-s1-coupe",
   "title": "Jaguar E-Type Series 1 Coupe Market",
   "url": "https://www.classic.com/m/jaguar/e-type/series-1/coupe/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of September 2026: Series 1 Coupe benchmark $81,576 trending downward, average sale $81,874, 20 cars listed; highest recorded sale $179,995 for a 409-mile 1964 car on 21 July 2026, lowest $9,000 for a 1963 conversion project on 6 August 2024."
  },
  {
   "ref": "classic-etype-s1-roadster",
   "title": "Jaguar E-Type Series 1 Roadster Market",
   "url": "https://www.classic.com/m/jaguar/e-type/series-1/roadster/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of September 2026: Series 1 Roadster benchmark $121,781 trending downward against an average sale of $210,275 across 33 cars listed, the gap showing how far the best cars sit above the middle of the market. Lowest recorded sale $3,500 for a 1966 project on 6 November 2023."
  },
  {
   "ref": "classic-etype-s1-flatfloor",
   "title": "Jaguar E-Type Series 1 Flat Floor Market",
   "url": "https://www.classic.com/m/jaguar/e-type/series-1/flat-floor/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of September 2026: the 1961-1962 Flat Floor is tracked as its own category with no published benchmark, an average sale of $139,075 and six cars listed. Sales include a 1962 roadster at $140,000 on 30 June 2026; asking prices on the page run $239,900, $275,000 and $450,000."
  },
  {
   "ref": "rm-mo25-875157",
   "title": "1961 Jaguar E-Type Series 1 3.8-Liter Roadster, Monterey 2025",
   "url": "https://rmsothebys.com/auctions/mo25/lots/r0079-1961-jaguar-etype-series-1-38litre-roadster/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold $324,000 at Monterey, August 2025, lot 112. Chassis 875157, engine R 1255-9, body R 1251; external hood latches, flat floors, hand-welded hood louvers; completed at Browns Lane 30 June 1961, dispatched to the United States 26 July 1961 through Jaguar Cars of New York; JDHT certificate confirming matching block and body."
  },
  {
   "ref": "rm-mc24-875256",
   "title": "1961 Jaguar E-Type Series 1 3.8-Liter Roadster, Monaco 2024",
   "url": "https://rmsothebys.com/auctions/mc24/lots/r0066-1961-jaguar-etype-series-1-38litre-roadster/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Not sold at Monaco 2024, lot 211, against an estimate RM published as $185,000 to $220,000. Chassis 875256, flat floor with welded louvers and outside hood locks, completed 19 July 1961; restored by Classic Motor Cars 2018-2020 across 17 documented invoices, receiving a new block and head restamped with factory-correct numbers."
  },
  {
   "ref": "hagerty-etype-comeback",
   "title": "Jaguar E-Type values are making a comeback",
   "url": "https://www.hagerty.com/media/market-trends/hagerty-insider/jaguar-e-type-values-are-making-a-comeback/",
   "publisher": "Hagerty Media",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "American market analysis: US insured values recovered while the British market stayed flat or fell, scarcity of good restorations in America drove the recovery, and the specification the US market pays for is a covered-headlamp car with the 4.2 engine rather than the purist's 3.8. Dollar figures in the piece are period to its publication and are not quoted here."
  },
  {
   "ref": "jaglovers-xk-rebuild",
   "title": "XK Engine Rebuild Cost",
   "url": "https://forums.jag-lovers.com/t/xk-engine-rebuild-cost/459230",
   "publisher": "Jag-lovers Forums",
   "sourceType": "club-forum",
   "reliability": "low",
   "notes": "American owner reports of complete XK six rebuilds: two 4.2 rebuilds at $12,000 to $15,000 with parts and labor, an earlier complete engine at a little over $12,000, and a well-regarded Austin, Texas shop quoting about $20,000. Used here for the scale of the job in the US only, not for specification."
  },
  {
   "ref": "ecd-restoration-cost",
   "title": "The Cost Breakdown to Restore a Jaguar E-type in 2025",
   "url": "https://ecdautodesign.com/blog/cost-to-restore-jaguar-e-type-2025/",
   "publisher": "ECD Auto Design",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "US restoration shop, August 2025: puts a typical frame-off E-Type restoration by a reputable shop at $60,000 to $200,000, against its own bespoke builds from $299,995. Commercial writing by a shop selling the service, so the range is used here as an order of magnitude."
  },
  {
   "ref": "monocoque-hood",
   "title": "E-Type Bonnet Restoration",
   "url": "https://www.monocoque-metalworks.com/main/e-type-bonnet-restoration/",
   "publisher": "Monocoque Metalworks",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "US E-Type shell and hood specialist: reassembling an E-Type hood is a test of patience for a professional, reproduction panels are poorly built and need considerable adjustment before they fit, and a new lower valance runs $1,400 or more. Also describes hand-building welded-louver, welded-flange hoods for early cars."
  }
 ],
 "claims": [
  {
   "section": "history",
   "claimText": "Development began under technical director William Heynes in December 1956, E1A completed in May 1957 around a D-Type-derived monocoque with a new independent rear end and E2A racing at Le Mans in 1960 for Briggs Cunningham. The E-Type was announced at Geneva on 14 March 1961 for export, the British launch following in July at 2,097 pounds for the roadster and 2,196 pounds for the coupe including purchase tax, with US prices of $5,595 for the roadster and the coupe about $300 more. Two press cars carried the launch: 9600 HP, the seventh prototype and a fixed-head coupe, and 77 RW, the roadster brought from MIRA by Norman Dewis.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "aronline-etype",
    "ateupwithmotor-etype",
    "wikipedia-etype",
    "prestige-9600hp"
   ]
  },
  {
   "section": "specs",
   "claimText": "The published 150 mph press figures were recorded on cars that were probably not in standard tune. The Motor timed 77 RW at 149.1 mph and Autocar published 150.4 mph mean and 151.7 mph best for 9600 HP on 24 March 1961, but Dewis's own development testing had reached only 143 mph on the M1 and 142 mph at MIRA in January 1961, 9600 HP was later found to have a gas-flowed head matched to its manifolds, and the Autocar tester Maurice Smith is reported never to have exceeded 137 mph in his own 3.8.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "wikipedia-etype",
    "aronline-etype",
    "ateupwithmotor-etype",
    "prestige-9600hp"
   ],
   "conflictNote": "Wikipedia reports the period figures of 149.1 mph and 150 mph without qualification. AROnline and Ate Up With Motor both state that press cars had more power than standard tune, citing the gas-flowed head found in 9600 HP and Maurice Smith's own 137 mph maximum. Whether a standard production 3.8 could reach 150 mph is not resolved by any source consulted here."
  },
  {
   "section": "specs",
   "claimText": "The production car used a steel monocoque center section with a bolted tubular front subframe, torsion-bar independent front suspension, independent rear suspension in a detachable cage, rack-and-pinion steering, and four-wheel discs mounted inboard at the rear. The 3.8-liter XK six displaced 3,781 cc on three 2 in SU HD8 carburetors. The 265 hp quoted for both engines is a gross SAE rating, at 5,500 rpm for the 3.8 and 5,400 rpm for the 4.2; published net estimates run between 180 and 228 hp.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "aronline-etype",
    "ateupwithmotor-etype",
    "wikipedia-etype"
   ]
  },
  {
   "section": "history",
   "claimText": "In October 1964 the 3.8 was replaced by a 4,235 cc engine, the block lengthened for bores 5 mm larger; claimed power was unchanged at 265 hp but torque rose from 240 to 283 lb-ft, and the Moss gearbox gave way to Jaguar's all-synchromesh four-speed, with an alternator replacing the dynamo and improved servo and seats. In March 1966 the 2+2 followed on a wheelbase stretched from 8 ft to 8 ft 9 in, doors 8.5 in longer and windshield 1.125 in taller, with a Borg-Warner automatic option at 2.88:1 against 3.07:1.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-etype",
    "classicandsportscar-guide",
    "ateupwithmotor-etype",
    "jdc-etype-register",
    "motorsport-2plus2-1966",
    "aronline-etype"
   ]
  },
  {
   "section": "history",
   "claimText": "For the 1968 model year Jaguar spent a reported 250,000 pounds adapting the car to American regulation: the glazed headlamp fairings were deleted and the lamps moved forward by 2.5 in, toggle switches were replaced by black rockers, and United States cars received twin Zenith-Stromberg carburetors with claimed output falling from 265 to 246 hp and torque from 283 to 263 lb-ft.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-etype",
    "aronline-etype"
   ]
  },
  {
   "section": "production",
   "claimText": "Series 1 production is variously given as 38,419 cars and 38,423 cars, and no single total is asserted here. Wikipedia tabulates 15,498 3.8-liter cars, 16,195 Series 1 4.2-liter cars and 6,726 Series 1.5 cars; the XKEdata register's chassis ranges sum instead to 15,502, 16,201 and 6,720; and the Jaguar Daimler Heritage Trust publishes chassis ranges with no totals at all.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "wikipedia-etype",
    "xkedata-numbers",
    "jdht-etype-guide"
   ],
   "conflictNote": "Wikipedia states 38,419 Series 1 cars, broken down as 15,498 / 16,195 / 6,726. XKEdata's published chassis ranges yield 15,502 / 16,201 / 6,720, or 38,423. The Heritage Trust guide gives ranges only, closing the left-hand-drive 3.8 roadster run at 881886 against XKEdata's 881887 and the left-hand-drive 3.8 coupe run at 890872 against 890873. The discrepancy is not explained by any source consulted here, so productionTotal is left null."
  },
  {
   "section": "production",
   "claimText": "The point at which Series 1.5 production begins is contested and Jaguar never used the designation, so any split of the 4.2-liter cars between Series 1 and Series 1.5 rests on a boundary the factory did not draw.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "xkedata-numbers",
    "jdc-etype-register",
    "wikipedia-etype"
   ],
   "conflictNote": "XKEdata assigns Series 1.5 to chassis 1E1864 onwards for right-hand-drive roadsters and equivalent points in the other ranges, while stating openly that the exact number where they start 'is a hot subject'. The Jaguar Drivers' Club register describes the whole 1961-1968 run as Series 1 and recognizes no Series 1.5. Wikipedia treats Series 1.5 as the 1968 model year cars. There is no factory designation to arbitrate between them."
  },
  {
   "section": "production",
   "claimText": "Right-hand-drive cars were a small minority in every body style, with 943 right-hand-drive 3.8 roadsters against 6,887 left-hand-drive and 1,799 right-hand-drive 3.8 coupes against 5,873. No source consulted here breaks Series 1 production down by destination market, and left-hand drive is not equivalent to United States delivery. Annual output rose from 2,160 cars in 1961, only 383 of them built by August, to 6,266 in 1962, 4,065 in 1963 and 6,880 in 1966.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "xkedata-numbers",
    "jdht-etype-guide",
    "aronline-etype"
   ]
  },
  {
   "section": "history",
   "claimText": "The earliest cars had unrecessed flat floors, hood latches on the outside of the body and hood louvers welded in as a discrete panel, but sources disagree on when and whether these features changed together.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "wikipedia-etype",
    "classicandsportscar-guide",
    "rm-mo25-875157",
    "rm-mc24-875256"
   ],
   "conflictNote": "Wikipedia states that the first 500 Series 1 cars had flat floors and external hood latches, treating the two as a single change. Classic & Sports Car dates them separately, putting internal locking in October 1961 and lowered floors in February 1962, several months and several hundred cars apart. RM Sotheby's catalogs describe individual cars carrying all three features together but state no production count for any of them. The dating is not resolved by any source consulted here."
  },
  {
   "section": "problems",
   "claimText": "Corrosion of the monocoque is the defining fault: floor pans, especially on roadsters, inner and outer sills, door bottoms, rear arches, trunk floor, rear valances, the rear radius arm mountings, and above all the front bulkhead around the engine frame rail mountings. Hood seams behind the chrome trim and coupe tailgate seams conceal it well.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classicsworld-guide",
    "classicandsportscar-guide"
   ]
  },
  {
   "section": "problems",
   "claimText": "On the XK six, head gasket failure shows as coolant staining and emulsified oil under the filler cap, a healthy engine registers around 40 to 45 psi at 3,000 rpm, rattling from the front indicates worn timing chains, and crankcase seal weeps are common with the rear seal an engine-out job. Inboard rear discs require the rear suspension cage to be dropped before they can be changed. Motor Sport's April 1966 test recorded corroding underbody bolts after only 5,000 miles.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classicsworld-guide",
    "classicandsportscar-guide",
    "motorsport-2plus2-1966"
   ]
  },
  {
   "section": "problems",
   "claimText": "United States restoration and rebuild costs are substantial and are the reason a cheap E-Type is rarely cheap. ECD Auto Design put a frame-off restoration by a reputable American shop at $60,000 to $200,000 in 2025; Monocoque Metalworks prices a new lower hood valance at $1,400 or more and states that reproduction panels need considerable adjustment before they fit; and owners on the Jag-lovers forum report complete XK six rebuilds by American shops between $12,000 and $20,000.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "ecd-restoration-cost",
    "monocoque-hood",
    "jaglovers-xk-rebuild"
   ]
  },
  {
   "section": "market",
   "claimText": "A Jaguar Daimler Heritage Trust certificate records the chassis, engine, body and gearbox numbers as built, the color and trim, build and dispatch dates and destination; the Trust states explicitly that it does not inspect vehicles and that a certificate confirms nothing about identity, provenance, originality or condition. Restamped components are a live issue: RM Sotheby's described a fully documented flat-floor 3.8 roadster restoration as having fitted a new block and head restamped with factory-correct numbers.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "jdht-certificates",
    "rm-mc24-875256",
    "xkedata-numbers"
   ]
  },
  {
   "section": "market",
   "claimText": "As of September 2026, classic.com records an average sale of $151,103 across Jaguar E-Type Series 1 cars from 57 listed, with a Series 1 Roadster benchmark of $121,781 against a roadster average sale of $210,275, and a Series 1 Coupe benchmark of $81,576 against a coupe average sale of $81,874. Both benchmarks are marked as trending downward. Coupe results range from $9,000 for a 1963 conversion project in August 2024 to $179,995 for a 409-mile 1964 car in July 2026.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-etype-s1",
    "classic-etype-s1-coupe",
    "classic-etype-s1-roadster"
   ]
  },
  {
   "section": "market",
   "claimText": "Early-car premiums are substantial and specification-driven. As of September 2026 classic.com tracks 'Flat Floor (1961-1962)' as its own category with an average sale of $139,075, a 1962 roadster sold at $140,000 in June 2026 and asking prices running to $450,000. RM Sotheby's sold chassis 875157, a flat-floor 3.8 roadster with external hood latches and hand-welded louvers delivered new through Jaguar Cars of New York, for $324,000 at Monterey in August 2025.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-etype-s1-flatfloor",
    "rm-mo25-875157"
   ]
  },
  {
   "section": "market",
   "claimText": "Originality rather than condition alone is what separates the top of the Series 1 market from the middle. The same house that achieved $324,000 for chassis 875157 in August 2025 failed to sell chassis 875256 at Monaco in 2024, against a published estimate of $185,000 to $220,000, once the restoration was found to have involved a replacement block and head restamped with factory-correct numbers.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "rm-mo25-875157",
    "rm-mc24-875256"
   ]
  },
  {
   "section": "market",
   "claimText": "Hagerty attributes the E-Type's recovery to the American market specifically, where a shortage of well-restored cars pulled insured values up while the British market stayed flat, and identifies the specification US buyers pay for as a covered-headlamp Series 1 with the 4.2 engine rather than the earlier 3.8 favored by purists.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "hagerty-etype-comeback",
    "classic-etype-s1-coupe"
   ]
  }
 ]
};
