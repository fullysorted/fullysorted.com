/**
 * Researched model draft — Nissan 300ZX (1989-2000).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seed300zxZ32 = {
 "slug": "nissan/300zx-z32",
 "make": "Nissan",
 "model": "300ZX",
 "generation": "Z32 (fourth-generation Z)",
 "generationCode": "Z32",
 "trim": null,
 "yearStart": 1989,
 "yearEnd": 2000,
 "bodyStyles": [
  "3-door 2+0 coupe with removable T-bar roof panels, the standard roof at launch",
  "3-door 2+0 coupe with fixed 'slicktop' hardtop roof",
  "3-door 2+2 coupe on the long wheelbase, T-bar roof",
  "2-door convertible, naturally aspirated only, announced August 1992 and sold in the United States from 1993"
 ],
 "engines": [
  "2,960 cc VG30DE naturally aspirated 60-degree DOHC V6, four valves per cylinder, variable intake cam timing, coil-on-plug ignition, 10.0:1; 222 bhp at 6,400 rpm and 198 lb-ft at 4,800 rpm in US tune, 230 PS quoted by Nissan for Japan",
  "2,960 cc VG30DETT twin-turbocharged DOHC V6, two parallel Garrett turbochargers with two intercoolers, oil-cooled pistons, 8.5:1; 300 bhp at 6,400 rpm and 283 lb-ft at 3,600 rpm for the US, 280 PS and 388 Nm as advertised in Japan, 228 PS for mainland Europe"
 ],
 "productionTotal": null,
 "productionNotes": "No single production total for the Z32 can be asserted from the sources consulted here. Wikipedia's aggregated figure is 164,170 cars, split 99,286 export and 64,884 domestic. The JDM Registry, which describes its data as traced to factory records, gives a worldwide total of 164,534 and a Japanese domestic figure of 65,083. The two are close enough to suggest a shared ancestry and far enough apart to show that at least one has been adjusted; neither accounts for the other, so productionTotal is left null.\n\nThe United States figures are better documented and still not tidy. Zhome.com publishes a model-year table taken from VINs in Nissan's FAST parts system, totalling 89,156 American cars: 39,104 in 1990, 18,534 in 1991, 7,172 in 1992, 12,374 in 1993, 5,415 in 1994, 3,628 in 1995 and 2,629 in 1996, with the last 300 counted separately as the Commemorative Edition. The Z32 Wiki reproduces that total and the variant split: 36,826 two-seat naturally aspirated, 30,210 2+2 naturally aspirated, 18,274 turbo and 3,846 convertible. Wikipedia runs a few hundred higher in most years - 39,290 for 1990, 17,652 for 1991, 2,929 for 1996 - because those are calendar-year sales rather than model-year builds, and the two series should not be averaged or added.\n\nThe JDM Registry's own variant split - 29,262 GCZ32, 23,507 GZ32, 542 HZ32 - uses chassis-code families in a way that does not match Nissan's, which files its 2+2 twin turbo under GCZ32. European and British volumes are not published in anything consulted here; Wikipedia states only that continental European and UK cars were sold between 1990 and 1996, UK sales ending in 1994, with the two-seater available in Britain but not on the mainland.",
 "notableTrims": [
  {
   "name": "300ZX (naturally aspirated, United States)",
   "note": "VG30DE at 222 bhp, sold as a 2+0 T-top, a fixed-roof slicktop from 1991 and a 2+2. Two thirds of American Z32 production was naturally aspirated, so good turbo cars are the scarce half of the market."
  },
  {
   "name": "300ZX Twin Turbo (United States and export)",
   "note": "VG30DETT at 300 bhp with Super HICAS and two-mode adjustable damping, sold in the United States only as a 2+0 T-top. Zhome counts 18,274 American turbo cars against 67,036 naturally aspirated."
  },
  {
   "name": "300ZX Convertible",
   "note": "Announced August 1992 and sold in the United States from 1993, naturally aspirated only. Zhome and the Z32 Wiki both count 3,846, making it the rarest mainstream US body style."
  },
  {
   "name": "Fairlady Z Version S (Japan)",
   "note": "The configurable domestic specification, across both bodies and either engine, with a long options list including Recaro seats, Bose audio, ABS and, on turbo cars, Super HICAS."
  },
  {
   "name": "Fairlady Z Version R (Japan)",
   "note": "A pre-packaged domestic grade on the long-wheelbase 2+2, bundling Recaro seats, side skirts, rear spoiler, ABS, xenon headlamps and climate control below the sum of the options. Often claimed on cars that are not one."
  },
  {
   "name": "300ZX Turbo Commemorative Edition (1996, United States)",
   "note": "The final 300 American cars, numbered and supplied with decals and certificates of authenticity. The one Z32 variant with a production figure nobody disputes, and the only one to have made six figures at sale."
  },
  {
   "name": "UK and European 2+2 Twin Turbo",
   "note": "Continental cars were 2+2 twin turbos rated at 228 PS; Britain also received the two-seater. UK sales stopped in 1994, two years before the United States, which is why grey imports dominate the British market."
  }
 ],
 "specs": {
  "layout": "Front mid-mounted longitudinal V6, rear-wheel drive",
  "chassis": "Unitary steel body with front and rear subframes; 2+0 and long-wheelbase 2+2 shells",
  "engine": "2,960 cc VG30DE or VG30DETT 60-degree DOHC 24-valve V6 with variable intake cam timing; two parallel Garrett turbochargers and two intercoolers on the DETT",
  "valvetrain": "Twin overhead camshafts per bank, four valves per cylinder, coil-on-plug ignition",
  "power": "222 bhp (VG30DE, US); 300 bhp (VG30DETT, US and export); 280 PS as advertised in Japan; 228 PS for mainland Europe - all at 6,400 rpm, all manufacturer claims",
  "torque": "198 lb-ft at 4,800 rpm (VG30DE, US); 283 lb-ft at 3,600 rpm (VG30DETT, US); 388 Nm quoted by Nissan for the Japanese twin turbo",
  "transmission": "5-speed manual standard, 4-speed automatic optional",
  "suspension": "Multi-link front and rear; two-mode adjustable damping on turbo cars",
  "steering": "Rack and pinion; Super HICAS rear-wheel steering on turbo models, hydraulic to 1993 and electric from 1994",
  "brakes": "Ventilated discs all round, with opposed four-piston aluminium calipers front and rear on turbo cars",
  "weight": "1,492 kg for a 1995 US naturally aspirated 2+0 hardtop to 1,625 kg for a 2+2 turbo; Nissan quotes 1,570 kg for the Japanese 2+2 twin turbo",
  "wheelbase": "2,451 mm (96.5 in) for the 2+0; 2,570 mm quoted by Nissan for the 2+2",
  "dimensions": "4,305 x 1,791 x 1,250 mm for the 2+0; 4,525 x 1,800 x 1,255 mm quoted by Nissan for the 2+2",
  "acceleration": "0-60 mph published between 5.2 and 6.0 seconds for the twin turbo and 6.5-6.7 seconds for the naturally aspirated car; sources disagree",
  "top_speed": "155-156 mph, electronically limited",
  "drag_coefficient": "0.31, marginally worse than the Z31's 0.30"
 },
 "summary": "The Z32 Nissan 300ZX replaced the Z31 in 1989 and stayed in production for eleven years, sold at home as the Fairlady Z and everywhere else as the 300ZX. Nissan approved the shape in October 1986 and developed the body with CAD on a Cray supercomputer, then built it around a 2,960 cc DOHC V6 offered either naturally aspirated or, as the VG30DETT, with two parallel Garrett turbochargers and a pair of intercoolers. Export twin-turbo cars were rated at 300 bhp; Japanese cars carried 280 PS, because the domestic industry had just agreed among itself not to advertise more. Multi-link suspension at both ends, four-piston aluminium calipers and Super HICAS rear-wheel steering made it the most technically ambitious Z yet and also the hardest to service, since almost nothing under the bonnet can be reached without removing something else first. It sold in huge numbers in America in 1990, then faded as the yen rose and the price climbed, and Nissan withdrew it from the United States after 1996. Japanese production continued until 2000.",
 "history": "## Drawn in Three Dimensions\nNissan management approved the Z32's final form on 1 October 1986, from work by Isao Sono and Toshio Yamashita, and developed the body with CAD software running on a Cray supercomputer, among the first production cars designed that way rather than modelled and tunnelled. It abandoned the Z31's pop-up lamps for fixed faired units and a wide, low, cab-forward stance, though not for slipperiness alone: the drag coefficient came out at 0.31, marginally worse than the car it replaced. Japan saw it in July 1989, twenty years after the original S30, and America received it as a 1990 model.\n\n## One Engine, Three Published Outputs\nThe 2,960 cc V6 came two ways. The VG30DE was a naturally aspirated DOHC 24-valve unit with variable intake cam timing and coil-on-plug ignition, quoted at 222 bhp for the United States. The VG30DETT added two parallel Garrett turbochargers, two intercoolers, oil-cooled pistons and a lower 8.5:1 compression ratio, and was rated at 300 bhp and 283 lb-ft for export. In Japan the same engine was advertised at 280 PS. That figure was not a mechanical fact but a commercial one: at the end of 1988 the major Japanese manufacturers settled on a voluntary ceiling of 280 PS for domestic advertising, a restraint that held until 2004, and the Z32 was the first car marketed under it. Continental European cars, tuned for different emissions rules, were quoted at 228 PS. One engine, three numbers, and only one of them describes anything mechanical.\n\n## Chassis Ambition and Its Price\nUnderneath was multi-link suspension front and rear, ventilated discs with opposed four-piston aluminium calipers at both ends, two-mode adjustable damping on turbo cars, and Super HICAS rear-wheel steering, which steers the rear wheels briefly out of phase with the fronts to rotate the car into a corner, then brings them into phase to settle it; actuation was hydraulic until 1993 and electric from 1994. All of it had to be packaged under a low bonnet line, and the consequence is the defining ownership fact about the car: there is effectively no free space in the engine bay. The camshaft belt is an interference design due every 60,000 miles or 48 months and takes around five hours simply to reach. Replacing injectors or resealing a cam cover means removing the upper intake plenum. Jobs that are an hour on other cars are a day here, and that arithmetic has governed how these cars have been maintained, or not, for thirty years.\n\n## Roofs, a Convertible, and the 1994 Revisions\nEvery Z32 initially carried T-bar roof panels; a fixed-roof slicktop two-seater followed, and a longer-wheelbase 2+2 sat on 2,570 mm against the two-seater's 2,451 mm. A convertible was announced in August 1992 and sold in America from 1993, naturally aspirated only. The 1994 model year brought the most visible revision of the run: a taller pedestal-type rear spoiler, a passenger airbag as standard, seatbelt anchorages moved from the doors to the pillars, keyless entry, and the switch of Super HICAS to electric actuation.\n\n## Daytona, Le Mans, and the Retreat from America\nIn 1994 Clayton Cunningham Racing's 300ZX Turbo won the Daytona 24 Hours outright from the GTS class and took the IMSA GTS class at Le Mans with fifth overall for Steve Millen, Johnny O'Connell and John Morton. The showroom story ran the other way. American volume fell from around 39,000 cars in 1990 to under 3,000 in 1996 as the yen strengthened, buyers moved to sport utilities and the price climbed: a 1990 Turbo listed near $33,000, a 1996 Turbo at $45,422. Nissan withdrew the Z from the United States after 1996, marking the last 300 cars as a Commemorative Edition, and did not return until the 350Z of 2003. In Japan the Fairlady Z carried on quietly until 2000.",
 "marketNotes": "As of August 2026, classic.com's benchmark for the twin-turbo Z32 stands at $28,055 against an average recorded sale of $29,778, with tracked results running from $4,500 for a 1992 car in November 2022 to $52,990 for a 1993 car in August 2026, and the trend arrow pointing down. The naturally aspirated car sits well below it on the same date, at a $13,103 benchmark and a $15,551 average, its lowest tracked result $3,600 in October 2025, also trending down. Japanese-market Fairlady Z imports are tracked separately and lower again: an $11,383 benchmark and a $12,621 average as of August 2026, from $5,350 for a 1990 2+2 in March 2026 to $27,000 for a 1991 car in July 2026. Ordinary transactions are unremarkable - a modified 31,000-mile 1993 Turbo sold for $25,300 at Mecum Kissimmee on 9 January 2025 - and the headline results belong to preservation cars rather than to the model. A 1996 Commemorative Edition, number 300 of 300, showing around 530 miles and previously displayed at the Petersen Automotive Museum, made $90,100 in 2017 against a 1996 Turbo list price of $45,422; a 920-mile car had made $69,900 the year before. British guidance from Hagerty UK's buying guide, read in August 2026, put sound cars needing work near £12,500, documented original UK manual cars near £20,000 and the best turbos above £40,000, with naturally aspirated cars roughly 30 per cent behind.",
 "whatToLookFor": "Documented cam-belt history comes first. The interval is 60,000 miles or 48 months, the engine is an interference design, and the job is deep enough that owners defer it; a car without paperwork should be costed as though it is due, along with the water pump, tensioner, cam and crank seals and coolant hoses done at the same time. Ask whether the upper plenum has ever been off and whether a coolant bypass was fitted while it was, since that one modification makes every later job cheaper. Heat is the second theme: baked wiring insulation, brittle vacuum lines and crumbling connectors, worst on early cars. On turbo models watch for smoke on overrun pointing to turbo seals, which typically weep between 60,000 and 80,000 miles. Check that Super HICAS still functions rather than having been locked out with an eliminator bar. Bodily, T-top cars leak and rot their seat rails, and British cars add sill corrosion in a triple-layer structure that needs a specialist, plus rear arches; pre-1991 master cylinders leak and front tension-rod bushings perish. Establish the body exactly - 2+0 or 2+2, T-top or slicktop, turbo or naturally aspirated - because the value spread between them is wider than the condition spread within any one of them. Modified turbo cars are the norm rather than the exception, and standard, unopened examples carry the premium. On a Commemorative Edition, the number and its certificate are the car.",
 "commonProblems": "Heat is the root of most of it. The engine bay runs hot and packs tightly, and over three decades that has degraded wiring looms, vacuum lines and connectors, with early cars worst affected. The camshaft belt is an interference design: a failure destroys valves and pistons, and reaching it takes about five hours before any parts are fitted. Owner accounts put the full belt package at roughly $450 in Nissan parts and eight to nine hours of dealer labour, with factory turbocharger seals typically weeping from 60,000 to 80,000 miles and a complete turbo replacement quoted at 15.7 hours plus around $2,400 in parts; one long-term owner budgets $3,000 a year beyond fuel, oil and insurance. Fuel injectors and their hoses leak with age, and replacing them means removing the upper plenum. Ignition coils and the ignition power transistor unit fail, often announced by a light rapid ticking. Alternators fail; pre-1991 master cylinders leak; early variable cam timing springs weaken; automatic transmissions overheat; front tension-rod bushings perish; T-top seals let water in and corrode the seat rails. NHTSA's database returns no recall campaigns at all for the 1990-1996 300ZX; the one campaign it holds for the nameplate, 95I006000 of January 1995, covering leaking fuel injectors and hoses, is filed against the earlier Z31 model years.",
 "valueTrajectory": "The Z32's value curve is unusual in that it has already flattened. American cars depreciated conventionally through the 1990s and 2000s, when a car with an eight-hour timing belt and a full engine bay was worth less than the cost of putting it right, and a great many were modified, tracked or abandoned. The first real re-rating came with the wave of nostalgia for 1990s Japanese performance cars: by 2016 and 2017, preservation examples were making $69,900 and then $90,100, and Hagerty's commentary at the time treated those results as evidence the model had reached the collector market while cautioning that ordinary cars had not moved with them. That caution reads correctly now. As of August 2026 classic.com shows both the twin turbo and the naturally aspirated car trending downward from benchmarks of $28,055 and $13,103. The market has sorted itself into two populations that are barely connected: numbered, documented, unmodified cars with service history, and everything else. That gap is now wider than the gap between a turbo and a non-turbo, and the supply of the first population does not grow.",
 "overallConfidence": "high",
 "sources": [
  {
   "ref": "nissan-heritage-2by2-tt",
   "title": "Nissan Heritage Collection - FairladyZ 2by2 300ZX Twin-Turbo",
   "url": "https://www.nissan-global.com/EN/HERITAGE_COLLECTION/402_fairladyz_2by2_300zx_twin-turbo.html",
   "publisher": "Nissan Motor Co.",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Nissan's record for the 1989 JDM 2+2 twin turbo: GCZ32, VG30DETT 2,960 cc, 280 PS, 388 Nm, 4,525 x 1,800 x 1,255 mm on 2,570 mm, 1,570 kg, multilink, Super HICAS, four-piston aluminium calipers."
  },
  {
   "ref": "nissan-z-heritage-release",
   "title": "Datsun and Nissan Fairlady / Z Heritage",
   "url": "https://usa.nissannews.com/en-US/releases/datsun-and-nissan-fairlady-z-heritage",
   "publisher": "Nissan North America",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Dates the debut to July 1989, twenty years after the S30; quotes 280 PS twin turbo and 230 PS naturally aspirated in Japanese tune; convertible August 1992."
  },
  {
   "ref": "lemans-1994-gts",
   "title": "Le Mans 1994 - Nissan and the 300ZX Turbo win the IMSA GTS",
   "url": "https://www.24h-lemans.com/en/news/le-mans-1994-nissan-and-the-300zx-turbo-win-the-imsa-gts-18083",
   "publisher": "Automobile Club de l'Ouest",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Organiser's account: the No. 75 Cunningham 300ZX won the IMSA GTS class and finished fifth overall at Le Mans in 1994 with Millen, O'Connell and Morton driving."
  },
  {
   "ref": "wikipedia-daytona-1994",
   "title": "1994 24 Hours of Daytona",
   "url": "https://en.wikipedia.org/wiki/1994_24_Hours_of_Daytona",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Establishes that the No. 76 Cunningham 300ZX Turbo won the 1994 Daytona 24 Hours outright, not only its GTS class, with Pruett, Leitzinger, Gentilozzi, Millen."
  },
  {
   "ref": "wikipedia-300zx",
   "title": "Nissan 300ZX",
   "url": "https://en.wikipedia.org/wiki/Nissan_300ZX",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Gives 164,170 total production (99,286 export, 64,884 domestic), calendar-year US sales, the 1 October 1986 design approval, Cray CAD development, US kerb weights by body, the 1994 revisions, the 280 PS ceiling, the 228 PS European figure, the Version S and R grades and UK/European scope."
  },
  {
   "ref": "z32wiki-production",
   "title": "Production - Z32 Wiki",
   "url": "https://conceptzperformance.com/wiki/index.php/Production",
   "publisher": "Concept Z Performance (Z32 Wiki)",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "89,156 total US production split 36,826 two-seat NA, 30,210 four-seat NA, 18,274 turbo and 3,846 convertible, plus the 300 Commemorative Edition cars."
  },
  {
   "ref": "z32wiki-plenum",
   "title": "Intake Manifold Removal - Z32 Wiki",
   "url": "https://conceptzperformance.com/wiki/index.php/Intake_Manifold_Removal",
   "publisher": "Concept Z Performance (Z32 Wiki)",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Lists the jobs requiring upper plenum removal - injectors, valve cover resealing, throttle body coolant lines, EGR and PCV work, head work - and advises a coolant bypass while it is off."
  },
  {
   "ref": "z32wiki-timing-belt",
   "title": "Timing Belt Service - Z32 Wiki",
   "url": "https://conceptzperformance.com/wiki/index.php/Timing_Belt_Service",
   "publisher": "Concept Z Performance (Z32 Wiki)",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Gives the 60,000-mile or 48-month belt interval, confirms the VG30DE(TT) is an interference engine, and lists water pump, thermostat, hoses, cam and crank seals and tensioner as concurrent items."
  },
  {
   "ref": "z32wiki-hicas",
   "title": "HICAS - Z32 Wiki",
   "url": "https://conceptzperformance.com/wiki/index.php/HICAS",
   "publisher": "Concept Z Performance (Z32 Wiki)",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Z32 Super HICAS: hydraulic solenoid actuation 1990-1993, electric motors from 1994, counter-phase rear steer behaviour, and the common eliminator-bar delete."
  },
  {
   "ref": "zhome-production",
   "title": "Z Car Production",
   "url": "https://www.zhome.com/History/Zproduction.html",
   "publisher": "ZHome",
   "sourceType": "registry",
   "reliability": "medium",
   "notes": "US model-year table from Nissan FAST VINs: 39,104 (1990) falling to 2,629 (1996) plus the last 300, totalling 89,156; states these are model-year builds, not calendar-year sales."
  },
  {
   "ref": "zhome-maintenance-costs",
   "title": "Costs Associated With Major Maintenance Intervals",
   "url": "http://www.zhome.com/Buying/cawmmi.html",
   "publisher": "ZHome",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Owner accounting: five hours simply to reach the cam belt, about $450 parts plus eight to nine hours labour for the 60,000-mile package, turbo seals weeping from 60,000-80,000 miles, 15.7 hours plus $2,400 for a turbo replacement, $3,000 a year."
  },
  {
   "ref": "jdm-registry-z32",
   "title": "Z32 Production Matrix - Colours & Variants",
   "url": "https://thejdmregistry.com/fairlady-z32/production",
   "publisher": "The JDM Registry",
   "sourceType": "registry",
   "reliability": "medium",
   "notes": "Worldwide Z32 total of 164,534 and a Japanese domestic total of 65,083 across twenty colours, with a split of 29,262 GCZ32, 23,507 GZ32 and 542 HZ32; says its sources sometimes disagree."
  },
  {
   "ref": "grassroots-z32-guide",
   "title": "Z32-chassis Nissan 300ZX Buyer's Guide",
   "url": "https://grassrootsmotorsports.com/articles/nissan-300zx-buyers-guide/",
   "publisher": "Grassroots Motorsports",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "VG30DE 222 hp / 198 lb-ft at 10.0:1 and VG30DETT 300 hp / 283 lb-ft at 8.5:1 with Garrett turbos and oil-cooled pistons; 0-60 in 6.0 s and 14.4 s at over 102 mph; zero free space under the bonnet; the 1991 hardtop, 1993 convertible and the 1994 spoiler, airbag and electric Super HICAS; alternator, coil and T-top seat-rail faults."
  },
  {
   "ref": "hagerty-us-90k",
   "title": "$90,100 Nissan 300ZX puts a big price on nostalgia",
   "url": "https://www.hagerty.com/media/buying-and-selling/nissan-300zx-brings-big-money/",
   "publisher": "Hagerty",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Commemorative Edition number 300 of 300, 528 miles, ex-Petersen Automotive Museum display, sold for $90,100 in 2017; gives the 1996 twin turbo's $45,422 list, a 920-mile car at $69,900 a year earlier, and commentary that average cars had not followed."
  },
  {
   "ref": "hagerty-uk-guide",
   "title": "Buying Guide: 1990-96 Nissan 300ZX",
   "url": "https://www.hagerty.co.uk/articles/buying-guide-1990-96-nissan-300zx/",
   "publisher": "Hagerty UK",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "British guide: UK sales ending around 1994; 0-60 of 6.5 s NA and 5.2 s turbo; faults covering turbo seals, hot-running cooling, heat-damaged looms, cam end seal leaks, T-top leaks, triple-layer sill rot and rear arch corrosion; values of £12,500, £20,000 and £40,000-plus."
  },
  {
   "ref": "classic-z32-tt",
   "title": "Nissan 300ZX Twin Turbo - Z32 Market",
   "url": "https://www.classic.com/m/nissan/z-car/z32/300zx-twin-turbo/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Read August 2026: benchmark $28,055 trending down, average sale $29,778, tracked from $4,500 (1992 car, November 2022) to $52,990 (1993 car, August 2026)."
  },
  {
   "ref": "classic-z32-na",
   "title": "Nissan 300ZX - Naturally Aspirated - Z32 Market",
   "url": "https://www.classic.com/m/nissan/z-car/z32/300zx/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Read August 2026: benchmark $13,103 trending down against an average sale of $15,551, lowest tracked result $3,600, October 2025."
  },
  {
   "ref": "classic-z32-fairlady",
   "title": "Nissan Fairlady Z - Z32 Market",
   "url": "https://www.classic.com/m/nissan/z-car/z32/fairlady-z/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Japanese-market imports tracked separately, read August 2026: benchmark $11,383 trending down, average $12,621, from $5,350 (1990 2+2, March 2026) to $27,000 (July 2026)."
  },
  {
   "ref": "classic-mecum-1993-turbo",
   "title": "1993 Nissan 300ZX Turbo sold at Mecum Kissimmee (2025)",
   "url": "https://www.classic.com/a/mecum-kissimmee-2025-k4Zy1ap/lots/1993-nissan-300zx-turbo-4Ax3eBp",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Lot record: 1993 300ZX Turbo, VIN JN1CZ24H5PX536414, manual, 31,000 miles, catalogued as modified, sold $25,300 as lot E112, Mecum Kissimmee, 9 January 2025."
  },
  {
   "ref": "curbside-1990-turbo",
   "title": "Vintage Reviews: 1990 Nissan 300ZX Turbo - Porsche Likes Luxury",
   "url": "https://www.curbsideclassic.com/vintage-reviews/vintage-reviews-commentary-1990-nissan-300zx-turbo-porsche-likes-luxury/",
   "publisher": "Curbside Classic",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Reproduces Road & Track coverage of March and December 1989 and an Automobile comparison of November 1989: $33,000 base for the 1990 Turbo, $35,700 as tested, and a Porsche 944 Turbo 47 per cent dearer at $48,392."
  },
  {
   "ref": "autoevolution-280ps",
   "title": "The Japanese Gentlemen's Agreement on Horsepower",
   "url": "https://www.autoevolution.com/news/the-japanese-gentlemen-s-agreement-on-horsepower-a-failed-rule-of-self-restraint-229607.html",
   "publisher": "autoevolution",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "The voluntary 276 hp / 280 PS domestic advertising ceiling was adopted informally by Toyota, Honda, Nissan, Mazda and Mitsubishi at the end of 1988, held until 2004, and was routinely exceeded in practice."
  },
  {
   "ref": "nhtsa-recalls-300zx",
   "title": "Recalls by Vehicle API - Nissan 300ZX, model year 1990",
   "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=NISSAN&model=300ZX&modelYear=1990",
   "publisher": "National Highway Traffic Safety Administration",
   "sourceType": "government",
   "reliability": "high",
   "notes": "Queried August 2026: zero campaigns for the 300ZX across model years 1990-1996. The only campaign held for the nameplate, 95I006000 of 11 January 1995 (fuel injector and hose replacement, a safety improvement campaign, not a Part 573 recall), returns only for earlier Z31 years."
  },
  {
   "ref": "supercars-1990-tt",
   "title": "1990 Nissan 300ZX Twin Turbo Guide: Specs, Performance & More",
   "url": "https://www.supercars.net/blog/1990-nissan-300zx-twin-turbo/",
   "publisher": "Supercars.net",
   "sourceType": "specialist",
   "reliability": "low",
   "notes": "1990 US twin turbo data: 2,451 mm wheelbase, 4,305 x 1,791 x 1,250 mm, 1,552 kg, 8.5:1, twin Garrett turbochargers, $33,000 base, and 5.6 s to 60 mph and 13.7 s at 102 mph, conflicting with other published tests."
  }
 ],
 "claims": [
  {
   "section": "history",
   "claimText": "The Z32 was introduced in Japan in July 1989, twenty years after the original S30 Fairlady Z, reached the United States as a 1990 model, and had been approved in final form on 1 October 1986 from work by Isao Sono and Toshio Yamashita, its body developed with CAD on a Cray supercomputer.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "nissan-z-heritage-release",
    "wikipedia-300zx",
    "grassroots-z32-guide"
   ]
  },
  {
   "section": "specs",
   "claimText": "The 2,960 cc V6 came in two forms: the naturally aspirated VG30DE with variable intake cam timing and coil-on-plug ignition at 222 bhp and 198 lb-ft for the United States and 230 PS in Japanese tune, and the VG30DETT with two parallel Garrett turbochargers, two intercoolers, oil-cooled pistons and 8.5:1 compression at 300 bhp and 283 lb-ft for the United States.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "grassroots-z32-guide",
    "nissan-z-heritage-release",
    "supercars-1990-tt",
    "wikipedia-300zx"
   ]
  },
  {
   "section": "history",
   "claimText": "The same VG30DETT was advertised at 280 PS in Japan because Japanese manufacturers adopted a voluntary domestic output ceiling of 280 PS (276 hp) at the end of 1988, which held until 2004; the Z32 was the first car marketed under it, and mainland European cars were quoted at 228 PS on a different emissions tune.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "autoevolution-280ps",
    "wikipedia-300zx",
    "nissan-heritage-2by2-tt"
   ]
  },
  {
   "section": "specs",
   "claimText": "The chassis uses multi-link suspension front and rear with ventilated discs and opposed four-piston aluminium calipers at both ends, and turbo models carry Super HICAS rear-wheel steering, which steers the rear wheels briefly out of phase with the fronts and then into phase and changed from hydraulic to electric actuation for 1994; Nissan gives 4,525 x 1,800 x 1,255 mm on a 2,570 mm wheelbase at 1,570 kg for the Japanese 2+2 twin turbo, against 4,305 mm and 2,451 mm for the American two-seater.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "nissan-heritage-2by2-tt",
    "supercars-1990-tt",
    "wikipedia-300zx",
    "z32wiki-hicas",
    "grassroots-z32-guide"
   ]
  },
  {
   "section": "specs",
   "claimText": "Published acceleration figures for the twin turbo do not agree, and no single measured figure is asserted here.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "supercars-1990-tt",
    "grassroots-z32-guide",
    "hagerty-uk-guide"
   ],
   "conflictNote": "Supercars.net gives 5.6 seconds to 60 mph and a 13.7-second quarter mile at 102 mph. Grassroots Motorsports gives 6.0 seconds and 14.4 seconds at over 102 mph. Hagerty UK gives 5.2 seconds to 60 mph. None of the three says which test, which car or which conditions produced its figure, and the conflict is not resolved by any source consulted here."
  },
  {
   "section": "history",
   "claimText": "All Z32s initially carried T-bar roof panels, with a fixed-roof slicktop two-seater and a long-wheelbase 2+2 also offered and a convertible announced in August 1992 that reached the United States for 1993 in naturally aspirated form only; the 1994 model year then brought a taller pedestal rear spoiler, a standard passenger airbag, seatbelt anchorages moved from the doors to the pillars, keyless entry and electric Super HICAS.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-300zx",
    "nissan-z-heritage-release",
    "grassroots-z32-guide",
    "z32wiki-production"
   ]
  },
  {
   "section": "production",
   "claimText": "Total Z32 production is stated as either 164,170 cars or 164,534 cars depending on the source, and no single figure is asserted here.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "wikipedia-300zx",
    "jdm-registry-z32"
   ],
   "conflictNote": "Wikipedia gives 164,170 cars split 99,286 export and 64,884 domestic. The JDM Registry gives a worldwide total of 164,534 and a Japanese domestic figure of 65,083. Neither source accounts for the other's arithmetic and the difference is not resolved by any source consulted here, so productionTotal is left null."
  },
  {
   "section": "production",
   "claimText": "United States Z32 production is recorded as 89,156 cars by both ZHome, working from VINs in Nissan's FAST parts system, and the Z32 Wiki, split 36,826 two-seat naturally aspirated, 30,210 2+2 naturally aspirated, 18,274 turbo and 3,846 convertible, with the last 300 cars of 1996 counted separately as a numbered Commemorative Edition.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "zhome-production",
    "z32wiki-production",
    "wikipedia-300zx",
    "hagerty-us-90k"
   ]
  },
  {
   "section": "production",
   "claimText": "The year-by-year United States figures differ between sources and are not directly comparable.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "zhome-production",
    "z32wiki-production",
    "wikipedia-300zx"
   ],
   "conflictNote": "ZHome and the Z32 Wiki give model-year build figures of 39,104 for 1990 and 2,629 for 1996. Wikipedia gives 39,290 for 1990, 17,652 for 1991 and 2,929 for 1996 as sales. ZHome states explicitly that its figures are model-year builds taken from VINs rather than calendar-year sales, which explains the direction of the gap but not its size in every year; the discrepancy is not resolved by any source consulted here."
  },
  {
   "section": "history",
   "claimText": "In 1994 the Clayton Cunningham Racing 300ZX Turbo won the Daytona 24 Hours outright from the GTS class and took the IMSA GTS class at Le Mans with fifth place overall.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-daytona-1994",
    "lemans-1994-gts"
   ]
  },
  {
   "section": "history",
   "claimText": "American sales fell from around 39,000 cars in 1990 to under 3,000 in 1996 as the price rose from a $33,000 base for the 1990 Turbo to a $45,422 list for the 1996 Turbo, and Nissan withdrew the Z from the United States after 1996 while Japanese production continued to 2000.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-300zx",
    "curbside-1990-turbo",
    "hagerty-us-90k",
    "zhome-production"
   ]
  },
  {
   "section": "problems",
   "claimText": "The VG30DE and VG30DETT are interference engines whose camshaft belt is due every 60,000 miles or 48 months and takes roughly five hours simply to reach, and routine work including fuel injector replacement and valve cover resealing requires removal of the upper intake plenum; owner accounting puts the full belt package at about $450 in Nissan parts plus eight to nine hours of dealer labour, a turbocharger replacement at 15.7 hours plus around $2,400 in parts, and a running budget of $3,000 a year.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "z32wiki-timing-belt",
    "z32wiki-plenum",
    "zhome-maintenance-costs",
    "grassroots-z32-guide",
    "hagerty-uk-guide"
   ]
  },
  {
   "section": "problems",
   "claimText": "Underbonnet heat degrades wiring looms, vacuum lines and connectors, and the recurring faults are turbo seal leaks, ignition coil and power transistor failures, alternator failure, leaking pre-1991 master cylinders, perished front tension-rod bushings, weak early variable cam timing springs, T-top water leaks with seat-rail corrosion, and sill and rear-arch rot on British cars.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "grassroots-z32-guide",
    "hagerty-uk-guide",
    "z32wiki-plenum"
   ]
  },
  {
   "section": "problems",
   "claimText": "NHTSA's recall database returns no campaigns for the 300ZX for model years 1990 through 1996; the only campaign it holds for the nameplate, 95I006000 of 11 January 1995 covering leaking fuel injectors and hoses, is returned against the earlier Z31 model years and is described as a safety improvement campaign rather than a Part 573 recall.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "nhtsa-recalls-300zx",
    "grassroots-z32-guide"
   ]
  },
  {
   "section": "market",
   "claimText": "As of August 2026 classic.com records a benchmark of $28,055 and an average sale of $29,778 for the twin turbo, $13,103 and $15,551 for the naturally aspirated car and $11,383 and $12,621 for Japanese-market Fairlady Z imports, all trending downward; against that, a modified 31,000-mile 1993 Turbo made $25,300 at Mecum Kissimmee in January 2025 while the Commemorative Edition number 300 of 300 made $90,100 in 2017 and a 920-mile car $69,900 the year before.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-z32-tt",
    "classic-z32-na",
    "classic-z32-fairlady",
    "classic-mecum-1993-turbo",
    "hagerty-us-90k"
   ]
  },
  {
   "section": "summary",
   "claimText": "The Z32 was sold as the Fairlady Z in Japan with domestic-only Version S and Version R grades and as the 300ZX in export markets, with continental European cars restricted to the 2+2 twin turbo and the two-seater additionally available in Britain; period American press placed the 1990 Turbo at a $33,000 base price, about $35,700 as tested, against a Porsche 944 Turbo costing 47 per cent more.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-300zx",
    "curbside-1990-turbo"
   ]
  }
 ]
};
