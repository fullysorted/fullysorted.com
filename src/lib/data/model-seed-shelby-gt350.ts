/**
 * Researched model draft — Shelby Mustang GT350 (1965-1970).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedShelbyGt350 = {
 "slug": "shelby/gt350",
 "make": "Shelby",
 "model": "GT350",
 "generation": "Shelby Mustang GT350",
 "generationCode": null,
 "trim": null,
 "yearStart": 1965,
 "yearEnd": 1970,
 "bodyStyles": [
  "2-door fastback (modified Ford Mustang 2+2 shell; the only body offered 1965-1967)",
  "2-door convertible (catalogued from 1968; six one-off 1966 convertibles were built for Shelby American staff)"
 ],
 "engines": [
  "4,727 cc (289 cu in) Ford K-code Hi-Po Windsor V8, aluminium Cobra inlet manifold, Holley 715 cfm four-barrel, tubular Tri-Y headers, 306 bhp at 6,000 rpm and 329 lb-ft at 4,200 rpm (1965-1967)",
  "4,727 cc 289 V8 with optional Paxton centrifugal supercharger, 1966-1967, quoted at roughly 380-400 bhp",
  "4,942 cc (302 cu in) Ford Windsor V8, hydraulic tappets, Cobra alloy inlet, Holley 600 cfm, 250 bhp and 310 lb-ft (1968)",
  "5,752 cc (351 cu in) Ford Windsor V8, Cobra alloy inlet, 290 bhp at 4,800 rpm and 385 lb-ft at 3,400 rpm (1969, carried into the re-serialled 1970 cars)"
 ],
 "productionTotal": null,
 "productionNotes": "No single figure covers the six model years, the year-by-year numbers are themselves contested, and no line total is asserted here. For 1965, four sources agree on 562 cars and disagree on what those 562 were. Serial data from the SAAC Shelby Registry splits the run into 515 street cars, 35 competition cars, nine drag cars, one street prototype and two competition prototypes, numbered 001 to 562. The Shelby American Collection states 521 production models; Supercar Nostalgia gives 526; autoevolution gives 526 street plus 36 R-models; Wikipedia states 34 R-models. Nothing consulted here reconciles those splits. For 1966, Wikipedia states 2,378 cars including two prototypes and four drag cars, of which 1,372 went to the public and about 1,003 fastbacks to Hertz; Supercar Nostalgia states 2,388, made up of 1,368 standard cars, 1,001 Hertz cars, six convertibles and eleven supercharged examples. The Hertz count appears as 1,000, 1,001 and 1,003 depending on source. The first 252 cars of 1966 are the carryovers, at serials 6S001 to 6S252. For 1967, Revology states 1,175 GT350s within a 3,225-car Shelby year; Heacock Classic states 1,174. For 1968, Mustang Specs gives 1,253 fastbacks and 404 convertibles and is the only source consulted that breaks the year down. For 1969, Mustang Specs and MotorCities agree on 1,085 fastbacks and 194 convertibles. There was no 1970 production: unsold 1969 cars were re-serialled as 1970 models, and the number so treated is given as 789 by Wikipedia and conceptcarz and as 601 by MotorCities, with neither figure divided between GT350 and GT500.",
 "notableTrims": [
  {
   "name": "GT350 (1965 street car)",
   "note": "The homologation car proper: Wimbledon White only, Guardsman Blue rocker stripes, an aluminium-case T-10 four-speed as the only gearbox, Detroit Locker axle, side-exit exhaust, no rear seat. Early cars carried the battery in the boot until fume complaints ended it mid-year."
  },
  {
   "name": "GT350R (1965 competition model)",
   "note": "Caged, stripped, plexiglass-glazed racer built to take the Mustang into SCCA B-Production, where it won the championship three years running. Counts differ between 34, 35 and 36. R-models trade in a market wholly separate from the street cars."
  },
  {
   "name": "GT350 'Carryover' (first 252 cars of 1966)",
   "note": "Serials 6S001 to 6S252, built from 1965 K-code Mustangs bought to bridge Ford's San Jose shutdown. They keep 1965 running gear - lowered A-arms, traction bars, black engine blocks, 1965 interior - under 1966 bodywork, and are rated above ordinary 1966 cars."
  },
  {
   "name": "GT350H (1966 Hertz cars)",
   "note": "Around a thousand cars supplied to Hertz for the Rent-a-Racer programme, mostly Raven Black with gold stripes. The earliest had four-speed manuals, most of the rest automatics. Renters raced them and returned them short of parts, and they trade well below a private-sale 1966 car."
  },
  {
   "name": "GT350 with Paxton supercharger (1966-1967)",
   "note": "Centrifugal blower quoted at roughly 380-400 bhp, fitted by dealers as well as the factory; eleven supercharged cars are cited for 1966. Documented period installations carry a premium, later retro-fits do not."
  },
  {
   "name": "GT350 (1967)",
   "note": "First year of Ford's design involvement and of extensive glassfibre: new nose, bonnet, spoilered boot lid and brake ducts on the same 306 bhp 289. The first year the GT350 was outsold by its big-block sibling, and the last built in California."
  },
  {
   "name": "GT350 convertible (1968-1970)",
   "note": "Introduced when A.O. Smith took over assembly, with a padded roll bar carrying eyelets advertised for surfboards and skis. The scarcer body in every year offered, and it trades above the fastback."
  },
  {
   "name": "1970 model-year cars",
   "note": "Not built as 1970s at all: unsold 1969 stock re-serialled under FBI supervision, the leading VIN digit changed from 9 to 0, with new plates, a chin spoiler, two black bonnet stripes and emissions work. Paperwork matters more here than anywhere else in the run."
  }
 ],
 "specs": {
  "layout": "Front V8, rear-wheel drive; two-seat or 2+2 cabin depending on year",
  "chassis": "Ford Mustang unitary steel body-frame, modified: 1965-66 cars gained lowered upper A-arm pivots, an export brace and a Monte Carlo bar; later cars carried more glassfibre over the same structure",
  "engine": "289 cu in K-code Windsor V8 (1965-67); 302 (1968); 351 Windsor (1969-70)",
  "power": "306 bhp at 6,000 rpm (1965-67); 250 bhp (1968); 290 bhp at 4,800 rpm (1969-70) - period gross SAE ratings, manufacturer claims rather than measured figures",
  "torque": "329 lb-ft at 4,200 rpm (1965-67); 310 lb-ft (1968); 385 lb-ft at 3,400 rpm (1969-70)",
  "transmission": "Aluminium-case Borg-Warner T-10 four-speed only for 1965; three-speed automatic optional from 1966 (C4 on the Hertz cars, FMX by 1969)",
  "final_drive": "Ford nine-inch axle with Detroit Locker no-spin differential on the 1965 cars",
  "induction": "Holley 715 cfm on the 289; Holley 600 cfm on the 1968 302; optional Paxton supercharger 1966-67",
  "exhaust": "Side-exit glasspack silencers for 1965; conventional rear-exit dual system from 1966",
  "brakes": "Front discs, rear drums; specialists regard the original specification as undersized",
  "suspension": "Unequal-length front wishbones with relocated upper pivots, live rear axle on leaf springs; over-ride traction bars on 1965 and carryover cars only",
  "wheels_tyres": "15-inch painted steel or Cragar/Shelby magnesium-centre rims on Goodyear Blue Dot tyres for 1965; Magnum 500 and ten-spoke cast-aluminium options followed",
  "weight": "About 2,790-2,800 lb for a 1965 car; 3,146 lb kerb quoted for the 1968, the gain reflecting bodywork, a rear seat and trim",
  "acceleration": "0-60 mph in roughly 6.5-7.1 s across the run: about 7.0 s (1965), 6.6 s (1966 Hertz), 7.1 s (1967 test), 6.5 s (1969)",
  "top_speed": "Approximately 129-140 mph depending on year and source; period figures, not re-verified",
  "price_new": "$4,547 (1965); $4,117 fastback and $4,238 convertible (1968); $4,434 fastback and $4,753 convertible (1969)",
  "bodywork": "Steel shell with a glassfibre bonnet from 1965; by 1967-68 the nose, bonnet, front wings, scoops and boot lid were glassfibre, moulded at Shelby American and then A.O. Smith"
 },
 "summary": "The Shelby GT350 began as a homologation exercise rather than a marketing one. Lee Iacocca wanted a Mustang with a competition record, and from August 1964 Carroll Shelby's Venice premises took incomplete Wimbledon White fastbacks from Ford's San Jose plant and turned them into cars the SCCA would accept in B-Production. The 1965 run of 562 was barely civilised: a 306 bhp 289, a four-speed and nothing else, side-exit exhaust, relocated suspension pick-ups, no rear seat. Everything after that was a retreat from the brief. For 1966 came colours, an automatic option and roughly a thousand black-and-gold Hertz rental cars; for 1967, glassfibre styling and Ford's own designers; for 1968, assembly by A.O. Smith in Ionia, Michigan and a 250 bhp 302 in place of the K-code 289; and by 1969 a 351-powered cruiser with imitation teak on the dash. There was no 1970 production at all - unsold 1969 cars were re-serialled as 1970 models under FBI supervision. The value divide follows that story almost exactly.",
 "history": "## Homologation, Not Marketing\nFord had a Mustang that sold in enormous numbers and won nothing. Lee Iacocca's remedy was to ask Carroll Shelby whether the car could be given a competition image, and the answer took the shape of an SCCA B-Production homologation programme approved in August 1964. In late December Ford's San Jose plant shipped incomplete Wimbledon White K-code fastbacks to Shelby American's Venice shop, where they were rebuilt: lowered upper A-arm pivots, an export brace and Monte Carlo bar, over-ride traction bars, a Detroit Locker axle, glasspack side exhausts, a glassfibre bonnet, and the rear seat removed so the car could be registered as a two-seater. The engine gained an aluminium Cobra inlet, a Holley 715 and Tri-Y headers for a quoted 306 bhp. The class rules, not the customer, dictated the specification.\n\n## The R-Models and What They Won\nAlongside the street cars Shelby built a competition version, the R-model: caged, stripped, plexiglass-glazed, with the interior and most of the trim simply absent. Sources put the number at 34, 35 or 36. What is not in dispute is the result - the GT350 took the B-Production national championship three years running, which was precisely what Ford had paid for, and the R-models have since detached from the street-car market entirely.\n\n## Carryovers, Colours and a Fleet of Rental Racers\nFor 1966 Shelby American bought 252 leftover 1965 K-code Mustangs to keep the line running through Ford's San Jose retooling shutdown. Those carryover cars, serials 6S001 to 6S252, wear 1966 bodywork over 1965 mechanicals and are the most sought-after of the year. The rest of 1966 saw the car softened: four extra colours, a fold-down rear seat, an automatic option, quarter windows in place of the extraction louvres, rear-exit exhaust. The defining event was Peyton Cramer's proposal to Hertz, which became an order of around a thousand GT350H rental cars, mostly Raven Black with gold stripes. Renters treated them as advertised, raced them at weekends and returned them with components missing.\n\n## Ford Takes the Pen\nThe 1967 car was the first designed with Ford's involvement rather than around a rulebook. A glassfibre nose, bonnet, spoilered boot lid and functional brake ducts lengthened and softened it; the 289 stayed at 306 bhp but headers and straight-through silencers became options. It was outsold nearly two to one by the new big-block GT500. By mid-1967 Shelby American's quality and capacity problems, plus the loss of its airport lease, had persuaded Ford to move the work: in August 1967 it went to A.O. Smith at Ionia, Michigan, where matched-metal moulding finally produced glassfibre panels that fitted. The 1968 cars came part-built from Ford's Metuchen, New Jersey plant, wore Cobra badging, offered a convertible for the first time, and swapped the K-code 289 for a hydraulic-cammed 302 rated at 250 bhp.\n\n## The End, and the Cars That Were Not Built\nBy 1969 the GT350 had a 351 Windsor, a three-scoop bonnet, imitation teak trim and a tape deck, and Shelby's involvement had thinned to a name; he asked Ford to end the agreement in the summer of 1969. That left unsold cars in stock and no 1970 model. Ford's answer was to re-serial them: the leading VIN digit changed from 9 to 0, new door and windscreen plates, revised distributors, a chin spoiler and two black bonnet stripes - carried out, every source agrees, under FBI supervision. How many cars were treated this way is not agreed.",
 "marketNotes": "As of August 2026 classic.com records a benchmark of roughly $331,500 for 1965-66 GT350s, average near $338,600, rising, with tracked results from about $68,300 for a 1966 car in August 2025 to $1,100,000 for a 1965 car in May 2026. The Hertz cars sit well below that: a benchmark of about $198,800 and an average near $192,600 as of August 2026, with a high of $462,000 at Scottsdale in January 2026. The Ford-built cars are cheaper again: as of August 2026 an average of roughly $162,500 for 1967-68 cars, topping out at $275,000 in May 2026, and a benchmark of about $103,300 with an average near $107,600 for 1969-70 cars, high of $187,000 in May 2026. Competition cars are a separate market: the GT350R benchmark stands at roughly $1,753,800 as of August 2026, with a 1965 car at $2,750,000 at Mecum in May 2026. Individual results follow the pattern: RM Sotheby's sold 5S137 for $500,000 at Monterey in August 2025 and the carryover 6S176 for $351,500 at Monterey in 2023, while the ceiling for a non-R 1965 street car was set by 5S039 at a $1 million hammer, $1.1 million including buyer's premium, at Mecum Indianapolis. Premium sits on top of hammer at these houses.",
 "whatToLookFor": "Identity comes before condition here. The Shelby serial appears on a plate riveted to the inner wing, and the SAAC Shelby Registry carries a serial-by-serial history for every 1965, 1966 and 1967 car; a car whose registry entry does not match what is in front of you is a different proposition from one whose entry does. Check that the Ford VIN and the Shelby number agree with each other and with the title, and that the engine block number matches the chassis. On 1965-67 cars the T-10 case should be aluminium rather than cast iron, a quick and useful tell. Establish which sub-group the car belongs to, because the money follows the group: a carryover sits at serials 6S001 to 6S252; a Hertz car is worth less than an equivalent private-sale car of the same year; a documented period Paxton installation is worth having and a later retro-fit is not. On a 1970-titled car, look for the re-serialling paperwork and the changed plates rather than taking the VIN at face value. Structurally the priority areas are shock towers, frame rails, floors, door and boot bottoms and the metal around both screens; glassfibre repairs or heavy filler there are a reason to walk away.",
 "commonProblems": "The underlying car is a mid-1960s Ford unibody and it rusts where those rust. Overlapping lap joints trap moisture and salt, and specialists single out the shock towers and frame rails as the repairs hardest to put right and easiest to disguise; floors, door bottoms, boot lid and the surrounds of both screens follow. Water ingress at the windscreen is routine, usually thin replacement glass and poor-quality seals rather than a structural fault, though it becomes one if ignored. Brakes are the mechanical weak point: the original front discs and rear drums are undersized, which is why upgrades to 1967 Thunderbird front rotors and larger truck rear drums are so common on driven cars. Suspension is better than its reputation provided the original specification is respected; several reproduction parts use pressed-in rather than spot-welded ball joints and are a downgrade. On 1967 and 1968 cars the glassfibre is a maintenance item in itself, hand-fitted and wavy when new on the California-built cars. The 1965 cars have their own quirks: the early boot-mounted battery was abandoned mid-year after complaints of fumes, and Detroit Locker axles, while durable, are audible in a way that unsettles anyone expecting a normal differential.",
 "valueTrajectory": "The GT350 market has separated into layers that no longer move together, and the dividing line is who built the car. Shelby American's own 1965 and 1966 cars have run far ahead of the Ford-built ones: as of August 2026 classic.com's 1965-66 benchmark of roughly $331,500 is more than three times the 1969-70 benchmark of about $103,300, with the 1967-68 cars in between at an average near $162,500. Within the early group the hierarchy is settled: R-models first, then early two-digit 1965 street cars, then ordinary 1965s, then 1966 carryovers, then standard 1966s, with the Hertz cars last of the Shelby American era. The direction has been upward across every group tracked as of August 2026, and the top of the 1965 range has moved sharply: the record for a non-R street car reached a $1 million hammer, $1.1 million with premium, against a prior ceiling in the mid-to-high $900,000s. The R-models have decoupled entirely. Documentation now accounts for more of the spread than condition does.",
 "overallConfidence": "high",
 "sources": [
  {
   "ref": "wikipedia-shelby-mustang",
   "title": "Shelby Mustang",
   "url": "https://en.wikipedia.org/wiki/Shelby_Mustang",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Cited for the figures it states: 562 cars for 1965 with 34 GT350Rs; 2,378 for 1966 with about 1,003 Hertz fastbacks, the first 85 with four-speeds; B-Production champion three straight years; the August 1967 move to Ionia; 789 cars re-VINed as 1970 models under FBI supervision."
  },
  {
   "ref": "shelby-history",
   "title": "The History of Carroll Shelby and Shelby American",
   "url": "https://shelby.com/history",
   "publisher": "Shelby American, Inc.",
   "sourceType": "manufacturer",
   "reliability": "medium",
   "notes": "Shelby's own account of the origin: Iacocca telephoned Shelby because the Mustang lacked a performance image, and the GT350 won the 1965 SCCA B-Production National Championship. Confirms the 1965-1970 run; carries no production figures."
  },
  {
   "ref": "shelby-american-collection-65",
   "title": "1965 Shelby Mustang GT350",
   "url": "https://www.shelbyamericancollection.org/shelby-mustangs/1965-shelby-mustang-gt350",
   "publisher": "Shelby American Collection",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Museum record: Ford approval August 1964; 110 incomplete Wimbledon White fastbacks sent from San Jose to Venice in late December 1964; the street car differing from the R-model chiefly in keeping a steel bumper and no cage; 521 production models built before August 1965."
  },
  {
   "ref": "theshelbycars-65-vin",
   "title": "1965 GT 350 Serial & Vin Numbers",
   "url": "https://theshelbycars.com/the-shelby-mustangs/1965-gt-350-serial-vin-numbers/",
   "publisher": "TheShelbyCars.com",
   "sourceType": "registry",
   "reliability": "medium",
   "notes": "Registry-derived serial reference: SFM VIN structure with S for street and R for race, numbers 001 to 562, and a 1965 split of 515 street, 35 competition, nine drag, one street prototype and two competition prototypes."
  },
  {
   "ref": "carryover-gt350",
   "title": "Unique Features - 1966 GT350 Carryover Cars",
   "url": "https://carryovergt350.com/index.php/unique-features/",
   "publisher": "carryovergt350.com",
   "sourceType": "registry",
   "reliability": "medium",
   "notes": "Single-subject registry for the carryovers: 252 cars (250 from San Jose plus prototypes 6S001 and 6S023) at serials 6S001-6S252, bought to bridge Ford's six-week retooling shutdown, with the retained 1965 features itemised against the added 1966 ones."
  },
  {
   "ref": "motorcities-hertz",
   "title": "Remembering the 1966 Shelby Mustang GT350H Rent-a-Racer",
   "url": "https://www.motorcities.org/story-of-the-week/2024/remembering-the-1966-shelby-mustang-gt350h-rent-a-racer",
   "publisher": "MotorCities National Heritage Area",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "The Hertz programme: Peyton Cramer's September 1965 approach, first 28 cars delivered February 1966, 1,000 cars total, the first 100 with four-speeds and the rest with C-4 automatics, 306 hp and 0-60 in 6.6 s, 800 Raven Black, and the repurchase and resale of the fleet."
  },
  {
   "ref": "motorcities-ao-smith",
   "title": "The 1968 Shelby Mustang and the A.O. Corporation",
   "url": "https://www.motorcities.org/story-of-the-week/2017/the-1968-shelby-mustang-and-the-a-o-corporation",
   "publisher": "MotorCities National Heritage Area",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "The 1968 move: quality and financial problems pushing Ford to take over engineering and purchasing, A.O. Smith at Ionia contracted to fix glassfibre fitment, relocation by August 1967, a nine-month run fed by part-built cars railed from Metuchen, and termination of the agreement in summer 1969."
  },
  {
   "ref": "motorcities-1969",
   "title": "Remembering the 1969 Mustang Shelby GT 350/500 Models",
   "url": "https://www.motorcities.org/story-of-the-week/2025/remembering-the-1969-mustang-shelby-gt-350-500-models",
   "publisher": "MotorCities National Heritage Area",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "1969 figures and the competing 1970 count: 1,085 fastbacks and 194 convertibles, 351 Windsor at 290 hp, and a statement that 601 units were produced as 1970 models from remaining inventory."
  },
  {
   "ref": "supercarnostalgia-gt350",
   "title": "Ford Shelby Mustang GT350 '65MY & '66MY Guide",
   "url": "https://supercarnostalgia.com/blog/ford-shelby-mustang-gt350-1965-1966",
   "publisher": "Supercar Nostalgia",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "The alternative 1966 arithmetic: 2,388 cars comprising 1,368 standard, 1,001 Hertz, six convertibles and eleven Paxton cars at 380-400 bhp, plus 526 for 1965. Also the engine work (Cobra alloy inlet, Holley 715, Tri-Y headers, 271 to 306 bhp) and the Detroit Locker axle."
  },
  {
   "ref": "revology-1967",
   "title": "1967 Shelby GT350: Full Model Guide and Key Details",
   "url": "https://revologycars.com/1967-shelby-gt350-full-model-guide-and-key-details/",
   "publisher": "Revology Cars",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "States 3,225 Shelby Mustangs for 1967 comprising 1,175 GT350s and 2,048 GT500s; the 289 still at 306 hp and 329 lb-ft; and a period test of 7.1 s to 60 mph and 129 mph."
  },
  {
   "ref": "heacock-1967",
   "title": "1967 Shelby GT350 - More & Less",
   "url": "https://heacockclassic.com/articles/1967-shelby-gt-350/",
   "publisher": "Heacock Classic",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Gives 1,174 GT350s for 1967 against 2,050 GT500s - one and two cars different from Revology - plus the glassfibre wings and bonnet, brake ducts, Cougar tail lamps and the demotion of headers to an option."
  },
  {
   "ref": "mustangspecs-1968",
   "title": "1968 Shelby GT350 Mustang: Ultimate In-Depth Guide",
   "url": "https://www.mustangspecs.com/1968-shelby-mustang/",
   "publisher": "Mustang Specs",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "The only source consulted that breaks 1968 down: 1,253 fastbacks and 404 convertibles. Also the 302 at 250 hp and 310 lb-ft against the 289's 306 hp, Paxton and ram-air options, 3,146 lb kerb and $4,117/$4,238 prices."
  },
  {
   "ref": "mustangspecs-1969",
   "title": "1969 Shelby GT350: Ultimate In-Depth Guide",
   "url": "https://www.mustangspecs.com/1969-shelby-mustang/",
   "publisher": "Mustang Specs",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "1969 detail: 1,085 fastbacks and 194 convertibles at $4,434 and $4,753; 351 Windsor at 290 hp at 4,800 rpm and 385 lb-ft at 3,400 rpm; four-speed or FMX; and the statement that 1970 cars were re-VINed 1969 production."
  },
  {
   "ref": "conceptcarz-1970",
   "title": "1970 Shelby Mustang GT350",
   "url": "https://www.conceptcarz.com/vehicle/z7210/shelby-mustang-gt350.aspx",
   "publisher": "conceptcarz.com",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Independent corroboration of 789 and of the re-serialling mechanics: no 1970 production, unsold 1969 models given 1970 numbers under FBI supervision, the first VIN character changed from 9 to 0, replacement plates and paperwork, a chin spoiler and two black bonnet stripes."
  },
  {
   "ref": "hagerty-buyers-guide",
   "title": "Your handy 1965-66 Shelby GT350 buyer's guide",
   "url": "https://www.hagerty.com/media/buying-and-selling/your-handy-1965-66-shelby-gt350-buyers-guide/",
   "publisher": "Hagerty Media",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Authentication and inspection guidance: verify through the SAAC registry, match VINs across Ford and Shelby documents and to the engine block, check the T-10M case is aluminium not cast iron, and inspect floors, shock towers, frame rails and screen surrounds. States 1,001 Hertz cars."
  },
  {
   "ref": "classicmotorsports-vogt",
   "title": "Cobra Automotive's Curt Vogt: How to make a Shelby GT350 even better",
   "url": "https://classicmotorsports.com/articles/tech-tips-1965-68-shelby-mustang-gt350/",
   "publisher": "Classic Motorsports",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Restorer's fault list for 1965-68 cars: lap joints trapping salt with shock towers and frame rails the hardest repairs; wavy glassfibre and mismatched paint from new on 1967-68 cars; stock brakes underpowered; reproduction ball joints pressed in rather than spot-welded; chronic windscreen leaks."
  },
  {
   "ref": "rm-mo25-5s137",
   "title": "1965 Shelby GT350, Monterey 2025",
   "url": "https://rmsothebys.com/auctions/mo25/lots/r0030-1965-shelby-gt350/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold $500,000 at Monterey, August 2025. Chassis SFM 5S137, completed 27 April 1965 and shipped to Turner Ford, Wichita, with provenance documented through the SAAC Registry. Catalogue states 562 GT350s for 1965."
  },
  {
   "ref": "rm-mo23-carryover",
   "title": "1966 Shelby GT350 'Carryover', Monterey 2023",
   "url": "https://rmsothebys.com/auctions/mo23/lots/r0157-1966-shelby-gt350-carryover/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold $351,500 at Monterey 2023. Chassis SFM 6S176, described as number 176 of 252 carryovers, the catalogue independently confirming the 252 1965 K-code Mustangs delivered before San Jose retooled."
  },
  {
   "ref": "classic-gt350-6566",
   "title": "Ford Shelby Mustang GT350 - 1st Gen (1965-1966) Market",
   "url": "https://www.classic.com/m/ford/shelby-mustang/1st-gen/1965-1966/gt350/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Market data as of August 2026: benchmark approximately $331,532 on a rising trend, average approximately $338,559, results from about $68,320 on 28 August 2025 to $1,100,000 on 15 May 2026."
  },
  {
   "ref": "classic-gt350h",
   "title": "Ford Shelby Mustang GT350H - 1st Gen (1965-1966) Market",
   "url": "https://www.classic.com/m/ford/shelby-mustang/1st-gen/1965-1966/gt350h/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Market data as of August 2026 for the Hertz cars: benchmark approximately $198,761 on a rising trend, average approximately $192,609, high of $462,000 at Scottsdale on 24 January 2026."
  },
  {
   "ref": "classic-gt350-6768",
   "title": "Ford Shelby Mustang GT350 - 1st Gen (1967-1968) Market",
   "url": "https://www.classic.com/m/ford/shelby-mustang/1st-gen/1967-1968/gt350/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Market data as of August 2026 for the 1967-68 cars: average approximately $162,499, results from $78,000 for a 1968 convertible on 20 May 2023 to $275,000 for a 1967 on 15 May 2026. No benchmark published at retrieval."
  },
  {
   "ref": "classic-gt350-6970",
   "title": "Ford Shelby Mustang GT350 - 1st Gen (1969-1970) Market",
   "url": "https://www.classic.com/m/ford/shelby-mustang/1st-gen/1969-1970/gt350/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Market data as of August 2026 for the last cars: benchmark approximately $103,285 on a rising trend, average approximately $107,606, results from $64,500 on 12 September 2022 to $187,000 on 15 May 2026."
  },
  {
   "ref": "classic-gt350r",
   "title": "Ford Shelby Mustang GT350R - 1st Gen (1965-1966) Market",
   "url": "https://www.classic.com/m/ford/shelby-mustang/1st-gen/1965-1966/gt350r/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Market data as of August 2026 for the competition cars: benchmark approximately $1,753,824, average approximately $1,310,000, low $775,000 on 14 August 2021 and a 1965 car at $2,750,000 at Mecum on 16 May 2026."
  },
  {
   "ref": "autoevolution-mecum-1m",
   "title": "1965 Shelby GT350 Breaks Into Seven-Digit Record at Mecum, Nails $1M Hammer Price",
   "url": "https://www.autoevolution.com/news/1965-shelby-gt350-two-digit-unicorn-breaks-into-seven-digit-record-at-mecum-nails-1m-hammer-price-270051.html",
   "publisher": "autoevolution",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Reports SFM5S039, one of the first forty street cars, at a $1 million hammer and $1.1 million with fees at Mecum Indianapolis - the most expensive non-R 1965 GT350 sold at auction, against a prior ceiling in the mid-to-high $900,000s. States a 1965 split of 526 street and 36 R-models."
  }
 ],
 "claims": [
  {
   "section": "history",
   "claimText": "The GT350 originated as an SCCA B-Production homologation programme rather than a marketing exercise, approved by Ford in August 1964 after Lee Iacocca asked Carroll Shelby to give the Mustang a competition image, with incomplete Wimbledon White K-code fastbacks shipped from Ford's San Jose plant to Shelby American in Venice from late December 1964; the car went on to win the B-Production national championship three seasons running.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "shelby-history",
    "shelby-american-collection-65",
    "wikipedia-shelby-mustang"
   ]
  },
  {
   "section": "specs",
   "claimText": "The 1965-1967 cars used Ford's K-code Hi-Po 289 modified by Shelby American with an aluminium Cobra inlet manifold, a Holley 715 cfm four-barrel and tubular Tri-Y headers, rated at 306 bhp at 6,000 rpm and 329 lb-ft at 4,200 rpm against the standard engine's 271 bhp.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "supercarnostalgia-gt350",
    "revology-1967",
    "motorcities-hertz",
    "wikipedia-shelby-mustang"
   ]
  },
  {
   "section": "production",
   "claimText": "Four independent sources agree that Shelby American built 562 GT350s for the 1965 model year, but no two agree on how that total divides between street, competition, drag and prototype cars.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "rm-mo25-5s137",
    "theshelbycars-65-vin",
    "shelby-american-collection-65",
    "autoevolution-mecum-1m",
    "supercarnostalgia-gt350"
   ],
   "conflictNote": "RM Sotheby's and TheShelbyCars.com both state 562 for the year. TheShelbyCars.com, from registry serial data, splits it 515 street, 35 competition, nine drag, one street prototype and two competition prototypes. The Shelby American Collection states 521 production models, Supercar Nostalgia 526, autoevolution 526 street plus 36 R-models. Not resolved by any source consulted here."
  },
  {
   "section": "production",
   "claimText": "The number of 1965 GT350R competition cars is given variously as 34, 35 and 36 by credible sources and is not settled here.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "wikipedia-shelby-mustang",
    "theshelbycars-65-vin",
    "autoevolution-mecum-1m"
   ],
   "conflictNote": "Wikipedia states 34 R-models. Registry-derived serial data at TheShelbyCars.com gives 35 competition cars plus two competition prototypes. Autoevolution states 36. Part of the gap may lie in whether the prototypes are counted, but no source consulted here says so, and the question is unresolved."
  },
  {
   "section": "production",
   "claimText": "The first 252 cars of the 1966 model year, serials 6S001 to 6S252, are 'carryover' cars built from leftover 1965 K-code Mustangs bought to keep assembly running through Ford's San Jose retooling shutdown, and they combine 1965 running gear with 1966 bodywork.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "carryover-gt350",
    "rm-mo23-carryover",
    "hagerty-buyers-guide"
   ]
  },
  {
   "section": "production",
   "claimText": "Total 1966 GT350 production is stated as 2,378 by one source and 2,388 by another, with different internal breakdowns, and no single figure is asserted here.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "wikipedia-shelby-mustang",
    "supercarnostalgia-gt350"
   ],
   "conflictNote": "Wikipedia states 2,378 including two prototypes and four drag cars, with 1,372 to private buyers and about 1,003 fastbacks to Hertz. Supercar Nostalgia states 2,388: 1,368 standard, 1,001 Hertz, six convertibles and eleven supercharged. Not resolved by any source consulted here."
  },
  {
   "section": "production",
   "claimText": "The 1966 Hertz GT350H fleet, proposed by Shelby American general manager Peyton Cramer in September 1965 and delivered from February 1966, is given as 1,000, 1,001 or 1,003 cars depending on the source, and the number delivered with four-speed manual gearboxes before the automatic took over is given as either 85 or 100.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "wikipedia-shelby-mustang",
    "motorcities-hertz",
    "hagerty-buyers-guide",
    "supercarnostalgia-gt350"
   ],
   "conflictNote": "MotorCities states 1,000 cars with the first 100 as four-speeds; Hagerty Media and Supercar Nostalgia both state 1,001; Wikipedia states approximately 1,003 fastbacks and that the first 85 were four-speeds. No source consulted here reconciles either figure, so neither is asserted."
  },
  {
   "section": "production",
   "claimText": "Two sources give near-identical but non-matching figures for 1967 GT350 production, one stating 1,175 cars and the other 1,174.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "revology-1967",
    "heacock-1967"
   ],
   "conflictNote": "Revology states 1,175 GT350s within a 3,225-car Shelby year alongside 2,048 GT500s. Heacock Classic states 1,174 alongside 2,050 GT500s. Neither source explains the difference and it is not resolved here."
  },
  {
   "section": "history",
   "claimText": "Assembly moved from California to A.O. Smith Corporation at Ionia, Michigan in August 1967 because of glassfibre fitment and quality problems, Shelby American's limited capacity and the expiry of its airport lease, with Ford taking control of engineering and purchasing and supplying part-built cars by rail from its Metuchen, New Jersey plant.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "motorcities-ao-smith",
    "wikipedia-shelby-mustang"
   ]
  },
  {
   "section": "production",
   "claimText": "1968 GT350 production is given as 1,253 fastbacks and 404 convertibles, 1,657 in total, by the only source consulted that breaks the year down.",
   "confidence": "medium",
   "status": "unverified",
   "sourceRefs": [
    "mustangspecs-1968",
    "wikipedia-shelby-mustang"
   ],
   "conflictNote": "Single-sourced: Mustang Specs is the only source retrieved in this session giving 1968 GT350 figures at all, and Wikipedia carries no 1968 total to check it against. Not resolved by any further source consulted here."
  },
  {
   "section": "production",
   "claimText": "Two sources agree that 1969 GT350 production comprised 1,085 fastbacks and 194 convertibles, making 1969 the last year in which GT350s were actually built, by then powered by a 351 cu in Windsor V8 rated at 290 bhp at 4,800 rpm.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "mustangspecs-1969",
    "motorcities-1969",
    "conceptcarz-1970"
   ]
  },
  {
   "section": "production",
   "claimText": "No GT350s were built for the 1970 model year; unsold 1969 cars were reissued with 1970 identification numbers under FBI supervision, the leading VIN digit changed from 9 to 0 with new door and windscreen plates, a chin spoiler, two black bonnet stripes and emissions work, but the number of cars so treated is given as 789 by two sources and 601 by a third.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "wikipedia-shelby-mustang",
    "conceptcarz-1970",
    "motorcities-1969"
   ],
   "conflictNote": "Wikipedia and conceptcarz both state 789 cars re-VINed as 1970 models. MotorCities states 601 units produced as 1970 models. Neither figure is broken down between GT350 and GT500 by any source consulted here, and the discrepancy is not resolved."
  },
  {
   "section": "market",
   "claimText": "As of August 2026 classic.com shows a price hierarchy that follows the manufacturing history: a benchmark of roughly $331,532 for 1965-66 GT350s, roughly $198,761 for the Hertz GT350H cars, an average near $162,499 for 1967-68 cars and a benchmark of roughly $103,285 for 1969-70 cars, all on rising trends, with the GT350R benchmark far above at roughly $1,753,824.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-gt350-6566",
    "classic-gt350h",
    "classic-gt350-6768",
    "classic-gt350-6970",
    "classic-gt350r"
   ]
  },
  {
   "section": "market",
   "claimText": "Individual results bear out that hierarchy: RM Sotheby's sold 5S137 for $500,000 at Monterey in August 2025 and the carryover 6S176 for $351,500 at Monterey in 2023, while the early street car 5S039 reached a $1 million hammer, $1.1 million with buyer's fees, at Mecum Indianapolis.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "rm-mo25-5s137",
    "rm-mo23-carryover",
    "autoevolution-mecum-1m"
   ]
  },
  {
   "section": "market",
   "claimText": "The competition cars trade in a market wholly separate from the street cars: as of August 2026 classic.com puts the GT350R benchmark at approximately $1,753,824 against roughly $331,532 for a 1965-66 street GT350, with a recorded low of $775,000 in August 2021 and a 1965 car at $2,750,000 at Mecum in May 2026.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-gt350r",
    "classic-gt350-6566"
   ]
  },
  {
   "section": "problems",
   "claimText": "The recurring faults are structural and were largely built in: unibody lap joints trap salt and moisture, with shock towers and frame rails the hardest and most commonly disguised repairs; the original front discs and rear drums are undersized for the car; reproduction ball joints are pressed in rather than spot-welded; windscreen leaks are chronic; and glassfibre fit and paint match on 1967-68 cars were poor from new, which makes accident damage on those years harder to identify.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classicmotorsports-vogt",
    "hagerty-buyers-guide"
   ]
  }
 ]
};
