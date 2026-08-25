/**
 * Researched model draft — Jaguar E-Type Series 1 (1961-1968).
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
  "3,781 cc XK DOHC straight-six, three 2 in SU HD8 carburettors, 265 bhp gross SAE claimed at 5,500 rpm, 240 lb-ft (March 1961 to August 1964)",
  "4,235 cc XK DOHC straight-six, block lengthened for bores 5 mm larger, three SU carburettors, 265 bhp gross SAE claimed at 5,400 rpm, 283 lb-ft (October 1964 to 1968)",
  "4,235 cc XK straight-six in US Series 1.5 specification, twin Zenith-Stromberg carburettors, claimed output reduced to 246 hp and 263 lb-ft"
 ],
 "productionTotal": null,
 "productionNotes": "No single Series 1 total is agreed, so none is asserted. Wikipedia's tabulation gives 15,498 3.8-litre cars (7,828 open two-seaters, 7,670 fixed-head coupes), 16,195 Series 1 4.2-litre cars (6,749 OTS, 5,830 FHC, 3,616 2+2s) and 6,726 Series 1.5 cars, for 38,419. The XKEdata register publishes chassis ranges instead, and those ranges sum to 15,502, 16,201 and 6,720, or 38,423. The gap is four to six cars per grouping and looks like an artefact of whether a range's closing number is counted inclusively. The Heritage Trust compounds it: it publishes ranges and no totals, several of its closing numbers sitting one below XKEdata's. The split of the 4.2 cars between Series 1 and Series 1.5 is separately contested, because Jaguar never used the designation and XKEdata records that the chassis number at which the interim cars begin 'is a hot subject'. What the sources do agree on is the shape of the run: right-hand-drive cars were a small minority in every body style, 943 RHD 3.8 roadsters against 6,887 left-hand-drive and 1,799 RHD 3.8 coupes against 5,873. Left-hand drive is not the same thing as United States delivery, and no source here breaks the run down by destination.",
 "notableTrims": [
  {
   "name": "3.8 'outside bonnet lock' / flat floor (1961-1962)",
   "note": "The earliest cars, with external bonnet latches worked by a separate key, footwells with no recesses, and louvres welded in as a discrete panel rather than pressed. Sources disagree on when each feature ended and whether they ended together. The most valuable Series 1 configuration."
  },
  {
   "name": "3.8 Series 1 (1962-1964)",
   "note": "Recessed footwells and internal bonnet release, but still the Moss gearbox with no synchromesh on first, a dynamo rather than an alternator, and the original brake servo."
  },
  {
   "name": "4.2 Series 1 (October 1964-1967)",
   "note": "The mechanical high point of the Series 1: the same claimed 265 bhp but 283 lb-ft, an all-synchromesh Jaguar gearbox, an alternator, a better brake servo and reclining seats. Quicker in period testing than the 3.8 despite the identical power claim."
  },
  {
   "name": "2+2 (March 1966-1968)",
   "note": "Wheelbase stretched from 8 ft to 8 ft 9 in, doors 8.5 in longer, windscreen 1.125 in taller and the roofline raised. The only Series 1 body offered with a Borg-Warner automatic, and the cheapest way into a Series 1."
  },
  {
   "name": "Series 1.5 (1967-1968 model year)",
   "note": "Interim federalised cars: headlamp covers deleted and the lamps moved forward, twin Zenith-Stromberg carburettors on US cars with claimed output down to 246 hp, black rocker switches replacing the toggles. Jaguar never used the name; enthusiasts coined it and still argue about where it starts."
  }
 ],
 "specs": {
  "layout": "Front-mounted longitudinal engine, rear-wheel drive",
  "chassis": "Steel monocoque centre section with a bolted tubular front subframe carrying engine and front suspension",
  "engine": "3,781 cc XK DOHC straight-six to August 1964; 4,235 cc from October 1964, the block lengthened to take bores 5 mm larger",
  "induction": "Three 2 in SU HD8 carburettors; twin Zenith-Stromberg units on US-market Series 1.5 cars",
  "power": "265 bhp gross SAE claimed at 5,500 rpm (3.8) and 5,400 rpm (4.2) - manufacturer claims, against published net estimates of 180-228 bhp; 246 hp claimed for the US Series 1.5",
  "torque": "240 lb-ft on the 3.8, rising to 283 lb-ft (384 Nm) on the 4.2, an increase of roughly 18 per cent; 263 lb-ft on the US Series 1.5",
  "transmission": "Moss four-speed manual without synchromesh on first to 1964; Jaguar all-synchromesh four-speed from October 1964; Borg-Warner automatic on the 2+2 only, 2.88:1 final drive against 3.07:1 manual",
  "suspension": "Independent front by torsion bars and wishbones; independent rear by lower wishbones with twin coil-spring damper units per side, in a detachable cage",
  "brakes": "Four-wheel discs, mounted inboard at the rear to reduce unsprung weight",
  "steering": "Rack and pinion",
  "wheelbase": "8 ft (2,438 mm) on the two-seaters; 8 ft 9 in (2,667 mm) on the 2+2",
  "weight": "About 1,256 kg (2,770 lb) for the open two-seater and 1,402 kg (3,090 lb) for the 2+2; 1,315 kg quoted for the earliest cars",
  "acceleration": "0-60 mph in 7.1 s (The Motor, 3.8 roadster 77 RW, 1961), 6.9 s (Autocar, 3.8 coupe 9600 HP, 1961) and 7.6 s (Autocar, 4.2 coupe, 1965)",
  "top_speed_tested": "149.1 mph (The Motor), 150.4 mph mean and 151.7 mph best (Autocar), 153 mph for a 4.2 coupe in 1965 - all on press cars whose standard tune is disputed",
  "launch_price_uk": "£2,097 roadster and £2,196 fixed-head coupe including purchase tax, March 1961; the 1966 2+2 at £2,245 8s 9d manual and £2,385 12s 1d automatic",
  "launch_price_us": "$5,595 for the roadster, with the coupe about $300 more",
  "assembly": "Browns Lane, Coventry"
 },
 "summary": "The Jaguar E-Type Series 1 (1961-1968) put racing-derived engineering under a body drawn by an aerodynamicist and sold it for a fraction of what a comparable Ferrari cost. William Heynes began the project in December 1956, and the E1A and E2A prototypes carried D-Type monocoque thinking into a road car. The production version combined a steel monocoque and bolted tubular front subframe with the 3,781 cc XK six, three SU HD8 carburettors, four-wheel disc brakes mounted inboard at the rear and rack-and-pinion steering. It was shown at Geneva in March 1961 at £2,097 for the roadster, and the press promptly recorded 149 and 150 mph in cars that were probably not to standard tune. Over seven years it gained a 4.2-litre engine and a gearbox worthy of it, grew a longer-wheelbase 2+2 body, and finally lost its headlamp covers to American regulation. Something close to 38,400 Series 1 cars were built, the large majority left-hand drive.",
 "history": "## From D-Type to Production Car\nWork began under technical director William Heynes in December 1956, three years before there was a car to show. E1A was completed in May 1957: shorter than the production car at fourteen feet two inches, built around a central monocoque tub in the D-Type manner but with a new independent rear end. E2A followed with a 2,997 cc racing XK six and went to Briggs Cunningham for Le Mans in 1960, where it failed to finish. Malcolm Sayer, an aerodynamicist who joined Jaguar in 1950, shaped the open car; Lyons and Bob Blake settled the coupe's roof. Bob Knight's rear suspension - lower wishbones, twin coil-spring damper units each side, the assembly in a detachable cage - is the piece of engineering that dates least.\n\n## Geneva, March 1961, and the 150 mph Question\nThe car was announced at Geneva on 14 March 1961, export first, the British market following in July. Two press cars did the work: 9600 HP, the seventh prototype and a fixed-head coupe, driven to Geneva overnight by Bob Berry; and 77 RW, the roadster Norman Dewis was called from MIRA to bring through the night once demonstration rides were needed. The Motor timed 77 RW at 149.1 mph with 0-60 mph in 7.1 seconds; Autocar took 9600 HP to Belgium and published 150.4 mph mean, 151.7 mph best and 0-60 in 6.9 seconds on 24 March 1961. Those figures made the car's reputation and are not straightforwardly reproducible. Dewis's own testing had recorded 143 mph on the M1 and 142 mph at MIRA in January 1961; when 9600 HP was later stripped its cylinder head proved gas-flowed and matched to the manifolds; and Maurice Smith, who ran the Autocar test, is reported to have said he never saw more than 137 mph from his own 3.8.\n\n## Flat Floors, Outside Latches and the Early-Car Hierarchy\nThe features that now set the price of an early E-Type were, at the time, faults being corrected. The first cars had unrecessed footwells - the flat floors - and were desperately short of legroom; Jaguar pressed depressions into the floors either side of the transmission tunnel. They also had bonnet latches outside the body and louvres welded in as a discrete panel rather than pressed into the skin. Sources do not agree on the dating. Wikipedia treats them as one event and says the first 500 cars had flat floors and external latches; Classic & Sports Car separates them, putting internal locking in October 1961 and lowered floors in February 1962. That matters commercially: the trade sells flat floors, outside bonnet locks and welded louvres as three distinct premiums.\n\n## The 4.2 and the 2+2\nIn October 1964 the 3.8 gave way to a 4,235 cc engine, the block lengthened to take bores five millimetres larger. Peak power was unchanged at a claimed 265 bhp, now at 5,400 rpm, but torque rose from 240 to 283 lb-ft. More consequential were the ancillaries: the Moss gearbox, with no synchromesh on first, gave way to Jaguar's own all-synchromesh four-speed; an alternator replaced the dynamo; the brake servo and seats improved. Autocar recorded 153 mph from a 4.2 coupe in 1965. In March 1966 came the first change to Sayer's shape: the 2+2, wheelbase stretched from eight feet to eight feet nine inches, doors eight and a half inches longer, the roof raised towards the back. Motor Sport tested one that April and called it, accurately, a two-seater with room for one or two more rather than a four-seater.\n\n## Series 1.5: Federal Regulation Arrives\nFor the 1968 model year Jaguar spent a reported £250,000 adapting the car to American rules. The glazed headlamp fairings went, the lamps moving forward two and a half inches; toggle switches became black rockers; and US cars took twin Zenith-Stromberg carburettors in place of the triple SUs, claimed output falling to 246 hp. Jaguar issued no new designation and went on calling these Series 1. 'Series 1.5' is an enthusiast coinage applied afterwards, and the register community has never settled on where it begins.",
 "marketNotes": "All figures below are as of August 2026. classic.com records an average sale of $151,127 across Jaguar E-Type Series 1 cars, with 58 of them listed. Its benchmarks separate sharply by body: the Series 1 Roadster benchmark stands at $121,761 and the Series 1 Coupe at $81,568, the coupe marked as trending downward with an average sale of $81,874 across a range from $9,000 for a 1963 project in August 2024 to $179,995 for a 1964 car in July 2026. 'Flat Floor (1961-1962)' is tracked as its own category with six cars listed. Auction evidence follows the same hierarchy. RM Sotheby's sold chassis 875157, a flat-floor 3.8 roadster with outside bonnet latches and hand-welded louvres, for $324,000 at Monterey in August 2025. The same house offered chassis 875256, a comparable flat-floor car restored at a documented £182,719.76 but fitted with a replacement block and head restamped to factory-correct numbers, at Monaco in 2024 against an estimate of €160,000-€190,000; it did not sell. Collecting Cars' price guide, consulted in August 2026, records £150,000 for a flat-floor outside-bonnet-lock roadster described as the thirty-eighth of the first fifty and £297,200 for a flat-floor 3.8 coupe said to be the fifth built.",
 "whatToLookFor": "Structure decides the price, and on a monocoque with a bolted-on front subframe the structure is most of the car. The front bulkhead and the mountings for the engine frame rails are the critical area, followed by inner and outer sills, floor pans - especially vulnerable on roadsters - door bottoms, rear arches, boot floor, rear valance and the rear radius arm mountings. Bonnet seams behind the chrome trim and coupe tailgate seams hide corrosion well. A Jaguar Daimler Heritage Trust certificate, £65 plus VAT, records the chassis, engine, body and gearbox numbers as built, the colour and trim, the build and despatch dates and the destination. The Trust is explicit that it does not inspect cars and that the certificate confirms nothing about identity, provenance, originality or condition: it establishes what left Browns Lane, not what is in front of you. Restamped components are a live issue on high-value early cars, one RM Sotheby's catalogue describing a flat-floor roadster carrying a new block and head restamped with factory-correct numbers. On early cars, flat floors, external latches and welded rather than pressed louvres are worth verifying individually against the chassis number; the three did not all change at the same moment, and the trade prices each one.",
 "commonProblems": "Corrosion is the defining fault and the expensive one. Restoration is complicated further because the cars were hand-finished and no two shells are dimensionally identical, so replacement panels rarely drop into place, and bonnets are difficult to align and costly to replace. On the XK six, coolant staining and emulsified oil under the filler cap point to head gasket failure; a healthy engine should show around 40 to 45 psi at 3,000 rpm. Light rattling from the front indicates worn timing chains and tensioners. Weeps from the crankcase seals are normal rather than terminal, but the rear seal is an engine-out job. Classics World quoted specialist rebuilds at £10,000 to £15,000 in 2026, concours work above £18,000. The Moss gearbox on the 3.8 has no synchromesh on first and can need two hands to find reverse, though E-Type manual boxes are durable. Rear discs sit inboard, so changing them means dropping the whole rear suspension cage, quoted at £1,500 to £2,500 in 2026; front wishbone work runs £200 to £300 per side. Rusty subframes, worn hubs and universal joints, tired dampers and perished bushes are the usual rear-end complaints. Cockpit heat was a criticism when the cars were new, Motor Sport finding the handbrake and gear lever uncomfortably hot in 1966.",
 "valueTrajectory": "The Series 1 has spent the last decade splitting into two markets that share a shape. At the top, flat-floor and outside-bonnet-lock 3.8 cars with documented early chassis numbers have pulled away: classic.com tracks them as a distinct category, RM Sotheby's achieved $324,000 for one at Monterey in August 2025, and Collecting Cars records £297,200 for a flat-floor coupe said to be the fifth built. Classic & Sports Car's guidance, consulted in August 2026, puts a show-condition outside-latch car around £300,000 against £110,000 to £140,000 for an ordinary Series 1. Below that, the broad middle is softening rather than rising: as of August 2026 classic.com marks the Series 1 Coupe benchmark of $81,568 as trending downward, and the same house that sold 875157 for $324,000 failed to sell a comparable flat-floor car at Monaco in 2024 once the restoration involved restamped components. The 2+2 remains the cheapest entry and shows least movement. The pattern is one of provenance and originality separating from condition alone.",
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
   "notes": "Certificate scope: colour, trim, build and despatch dates, destination and the chassis, engine, body and gearbox numbers; £65 plus VAT; the Trust does not inspect cars and confirms nothing about identity, provenance, originality or condition."
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
   "notes": "Club series definitions: Series 1 runs 1961-1968, the 3.8 replaced by the 4.2 in 1964 with the car still called Series 1, unchanged externally but improved mechanically and in trim. Recognises no Series 1.5."
  },
  {
   "ref": "wikipedia-etype",
   "title": "Jaguar E-Type",
   "url": "https://en.wikipedia.org/wiki/Jaguar_E-Type",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Production tabulation: 3.8 15,498 (7,828 OTS, 7,670 FHC); S1 4.2 16,195 (6,749 OTS, 5,830 FHC, 3,616 2+2); S1.5 6,726; 38,419 total. Also the March 1961 export launch, 4,235 cc with bores 5 mm larger, 265 bhp at 5,500/5,400 rpm, 240 to 283 lb-ft, the 'first 500 cars' flat-floor and external-latch statement, and S1.5 at 246 hp / 263 lb-ft."
  },
  {
   "ref": "aronline-etype",
   "title": "Jaguar E-type - the full story",
   "url": "https://www.aronline.co.uk/cars/jaguar/e-type/story/",
   "publisher": "AROnline",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Heynes starts December 1956; E1A May 1957; E2A to Cunningham for Le Mans 1960; Geneva 14 March 1961; £2,097 roadster and £2,196 FHC; triple 2 in SU HD8; the gas-flowed head in 9600 HP and Maurice Smith's 137 mph remark; output 2,160 in 1961 (383 by August), 6,266 in 1962, 4,065 in 1963, 6,880 in 1966; £250,000 federalisation, headlamps forward 2.5 in."
  },
  {
   "ref": "ateupwithmotor-etype",
   "title": "Top Cat: The Jaguar E-Type",
   "url": "https://ateupwithmotor.com/model-histories/jaguar-e-type/",
   "publisher": "Ate Up With Motor",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "The 265 hp gross rating against net estimates of 180-228 hp, and the statement that press cars had more power than standard tune; flat floors fixed by pressing depressions either side of the transmission; UK £2,098/£2,196 and US $5,595 roadster with the coupe $300 more; 3,781 cc to 4,235 cc via re-spaced bores; 2+2 March 1966 on a 105 in wheelbase."
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
   "notes": "Period test, April 1966: wheelbase 8 ft to 8 ft 9 in, windscreen 1.125 in taller, doors 8.5 in longer; Borg-Warner automatic at 2.88:1 against 3.07:1 manual; £2,245 8s 9d manual and £2,385 12s 1d automatic; corroding underbody bolts after 5,000 test miles; cockpit heat at handbrake and gear lever."
  },
  {
   "ref": "classicandsportscar-guide",
   "title": "Jaguar E-type S1, S1.5 & S2 buyer's guide",
   "url": "https://www.classicandsportscar.com/features/buyers-guide-jaguar-e-type-s1-s15-s2",
   "publisher": "Classic & Sports Car",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Dates the early changes separately: internal locking replaces outside latches October 1961, lowered floors replace flat floors February 1962; 4.2 replaces 3.8 October 1964 with more torque, better brakes and seats, alternator for dynamo, Jaguar box for the Moss. Values £300k show to £60k project for an S1 outside latch, £110-140k to £25-35k for an ordinary S1."
  },
  {
   "ref": "classicsworld-guide",
   "title": "Jaguar E-type S1 & S2 buyer's guide",
   "url": "https://classicsworld.co.uk/guides/jaguar-e-type-s1-s2-buyers-guide/",
   "publisher": "Classics World",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Faults and 2026 costs: floor pans especially on roadsters, sills, door bottoms, rear arches, bonnet and tailgate seams, front bulkhead at the engine rail mountings; head gasket signs; 40-45 psi at 3,000 rpm; timing chain rattle; crankcase seal weeps, the rear an engine-out job; rebuilds £10,000-£15,000, concours above £18,000; rear discs need the cage dropped at £1,500-£2,500; front wishbones £200-£300 per side."
  },
  {
   "ref": "collectingcars-guide",
   "title": "Jaguar E-Type Price Guide - key models and what to pay",
   "url": "https://collectingcars.com/articles/what-to-pay-for-a-jaguar-e-type",
   "publisher": "Collecting Cars",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "Results consulted August 2026: £150,000 for a flat-floor outside-bonnet-lock roadster described as 38th of the first 50; £297,200 for a flat-floor 3.8 FHC said to be the fifth coupe built; £85,996 for a 1961 3.8 flat-floor roadster; £96,500 for a matching-numbers 1964 4.2 roadster; £58,510-£85,000 for 1965 4.2 FHCs."
  },
  {
   "ref": "classic-etype-s1",
   "title": "Jaguar E-Type Series 1 Market",
   "url": "https://www.classic.com/m/jaguar/e-type/series-1/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of August 2026: average sale $151,127 across Series 1; 58 cars listed, of which 35 roadsters, 17 coupes and 6 in the separately tracked 'Flat Floor (1961-1962)' category; roadster benchmark $121,761 and coupe benchmark $81,568."
  },
  {
   "ref": "classic-etype-s1-coupe",
   "title": "Jaguar E-Type Series 1 Coupe Market",
   "url": "https://www.classic.com/m/jaguar/e-type/series-1/coupe/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of August 2026: Series 1 Coupe benchmark $81,568 trending downward, average sale $81,874; highest recorded sale $179,995 for a 1964 car on 21 July 2026, lowest $9,000 for a 1963 project on 6 August 2024."
  },
  {
   "ref": "rm-mo25-875157",
   "title": "1961 Jaguar E-Type Series 1 3.8-Litre Roadster, Monterey 2025",
   "url": "https://rmsothebys.com/auctions/mo25/lots/r0079-1961-jaguar-etype-series-1-38litre-roadster/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold $324,000 at Monterey, August 2025, lot 112. Chassis 875157, engine R 1255-9, body R 1251; external bonnet latches, flat floors, hand-welded louvres; completed at Browns Lane 30 June 1961, despatched to America 26 July 1961; JDHT certificate confirming matching block and body."
  },
  {
   "ref": "rm-mc24-875256",
   "title": "1961 Jaguar E-Type Series 1 3.8-Litre Roadster, Monaco 2024",
   "url": "https://rmsothebys.com/auctions/mc24/lots/r0066-1961-jaguar-etype-series-1-38litre-roadster/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Not sold at Monaco 2024, lot 211, against €160,000-€190,000. Chassis 875256, flat floor with welded louvres and outside bonnet locks, completed 19 July 1961; restored by Classic Motor Cars 2018-2020 at a documented £182,719.76, receiving a new block and head restamped with factory-correct numbers."
  }
 ],
 "claims": [
  {
   "section": "history",
   "claimText": "Development began under technical director William Heynes in December 1956, E1A completed in May 1957 around a D-Type-derived monocoque with a new independent rear end and E2A racing at Le Mans in 1960 for Briggs Cunningham. The E-Type was announced at Geneva on 14 March 1961 for export, the British launch following in July at £2,097 for the roadster and £2,196 for the coupe including purchase tax, with US prices of $5,595 for the roadster and the coupe about $300 more. Two press cars carried the launch: 9600 HP, the seventh prototype and a fixed-head coupe, and 77 RW, the roadster brought from MIRA by Norman Dewis.",
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
   "claimText": "The production car used a steel monocoque centre section with a bolted tubular front subframe, torsion-bar independent front suspension, independent rear suspension in a detachable cage, rack-and-pinion steering, and four-wheel discs mounted inboard at the rear. The 3.8-litre XK six displaced 3,781 cc on three 2 in SU HD8 carburettors. The 265 bhp quoted for both engines is a gross SAE rating, at 5,500 rpm for the 3.8 and 5,400 rpm for the 4.2; published net estimates run between 180 and 228 bhp.",
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
   "claimText": "In October 1964 the 3.8 was replaced by a 4,235 cc engine, the block lengthened for bores 5 mm larger; claimed power was unchanged at 265 bhp but torque rose from 240 to 283 lb-ft, and the Moss gearbox gave way to Jaguar's all-synchromesh four-speed, with an alternator replacing the dynamo and improved servo and seats. In March 1966 the 2+2 followed on a wheelbase stretched from 8 ft to 8 ft 9 in, doors 8.5 in longer and windscreen 1.125 in taller, with a Borg-Warner automatic option at 2.88:1 against 3.07:1, listing at £2,245 8s 9d and £2,385 12s 1d.",
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
   "claimText": "For the 1968 model year Jaguar spent a reported £250,000 adapting the car to American regulation: the glazed headlamp fairings were deleted and the lamps moved forward by 2.5 in, toggle switches were replaced by black rockers, and United States cars received twin Zenith-Stromberg carburettors with claimed output falling from 265 to 246 hp and torque from 283 to 263 lb-ft.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-etype",
    "aronline-etype"
   ]
  },
  {
   "section": "production",
   "claimText": "Series 1 production is variously given as 38,419 cars and 38,423 cars, and no single total is asserted here. Wikipedia tabulates 15,498 3.8-litre cars, 16,195 Series 1 4.2-litre cars and 6,726 Series 1.5 cars; the XKEdata register's chassis ranges sum instead to 15,502, 16,201 and 6,720; and the Jaguar Daimler Heritage Trust publishes chassis ranges with no totals at all.",
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
   "claimText": "The point at which Series 1.5 production begins is contested and Jaguar never used the designation, so any split of the 4.2-litre cars between Series 1 and Series 1.5 rests on a boundary the factory did not draw.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "xkedata-numbers",
    "jdc-etype-register",
    "wikipedia-etype"
   ],
   "conflictNote": "XKEdata assigns Series 1.5 to chassis 1E1864 onwards for right-hand-drive roadsters and equivalent points in the other ranges, while stating openly that the exact number where they start 'is a hot subject'. The Jaguar Drivers' Club register describes the whole 1961-1968 run as Series 1 and recognises no Series 1.5. Wikipedia treats Series 1.5 as the 1968 model year cars. There is no factory designation to arbitrate between them."
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
   "claimText": "The earliest cars had unrecessed flat floors, bonnet latches on the outside of the body and bonnet louvres welded in as a discrete panel, but sources disagree on when and whether these features changed together.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "wikipedia-etype",
    "classicandsportscar-guide",
    "rm-mo25-875157",
    "rm-mc24-875256"
   ],
   "conflictNote": "Wikipedia states that the first 500 Series 1 cars had flat floors and external bonnet latches, treating the two as a single change. Classic & Sports Car dates them separately, putting internal locking in October 1961 and lowered floors in February 1962, several months and several hundred cars apart. RM Sotheby's catalogues describe individual cars carrying all three features together but state no production count for any of them. The dating is not resolved by any source consulted here."
  },
  {
   "section": "problems",
   "claimText": "Corrosion of the monocoque is the defining fault: floor pans, especially on roadsters, inner and outer sills, door bottoms, rear arches, boot floor, rear valances, the rear radius arm mountings, and above all the front bulkhead around the engine frame rail mountings. Bonnet seams behind the chrome trim and coupe tailgate seams conceal it well.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classicsworld-guide",
    "classicandsportscar-guide"
   ]
  },
  {
   "section": "problems",
   "claimText": "On the XK six, head gasket failure shows as coolant staining and emulsified oil under the filler cap, a healthy engine registers around 40 to 45 psi at 3,000 rpm, rattling from the front indicates worn timing chains, and crankcase seal weeps are common with the rear seal an engine-out job. Classics World quoted rebuilds at £10,000 to £15,000 in 2026 and concours work above £18,000, inboard rear discs requiring the rear cage to be dropped at £1,500 to £2,500, and front wishbone work at £200 to £300 per side. Motor Sport's April 1966 test recorded corroding underbody bolts after only 5,000 miles.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classicsworld-guide",
    "classicandsportscar-guide",
    "motorsport-2plus2-1966"
   ]
  },
  {
   "section": "market",
   "claimText": "A Jaguar Daimler Heritage Trust certificate costs £65 plus VAT and records the chassis, engine, body and gearbox numbers as built, the colour and trim, build and despatch dates and destination; the Trust states explicitly that it does not inspect vehicles and that a certificate confirms nothing about identity, provenance, originality or condition. Restamped components are a live issue: RM Sotheby's described a flat-floor 3.8 roadster restored at a documented £182,719.76 as carrying a new block and head restamped with factory-correct numbers.",
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
   "claimText": "As of August 2026, classic.com records an average sale of $151,127 across Jaguar E-Type Series 1 cars, with a Series 1 Roadster benchmark of $121,761 and a Series 1 Coupe benchmark of $81,568, the coupe marked as trending downward. Coupe results range from $9,000 for a 1963 project in August 2024 to $179,995 for a 1964 car in July 2026, and 'Flat Floor (1961-1962)' is tracked as its own category.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-etype-s1",
    "classic-etype-s1-coupe"
   ]
  },
  {
   "section": "market",
   "claimText": "Early-car premiums are substantial and specification-driven. RM Sotheby's sold chassis 875157, a flat-floor 3.8 roadster with external bonnet latches and hand-welded louvres, for $324,000 at Monterey in August 2025. Collecting Cars' guide, consulted in August 2026, records £150,000 for a flat-floor outside-bonnet-lock roadster described as the thirty-eighth of the first fifty and £297,200 for a flat-floor 3.8 coupe said to be the fifth built, against £58,510 to £85,000 for 4.2 coupes; Classic & Sports Car puts a show-condition outside-latch car around £300,000 against £110,000 to £140,000 for an ordinary Series 1.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "rm-mo25-875157",
    "collectingcars-guide",
    "classicandsportscar-guide"
   ]
  }
 ]
};
