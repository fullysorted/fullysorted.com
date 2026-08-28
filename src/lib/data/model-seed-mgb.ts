/**
 * Researched model draft - MG MGB (1962-1980).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedMgb = {
 "slug": "mg/mgb",
 "make": "MG",
 "model": "MGB",
 "generation": "MGB (Roadster and GT)",
 "generationCode": "ADO23",
 "trim": null,
 "yearStart": 1962,
 "yearEnd": 1980,
 "bodyStyles": [
  "2-door roadster (open two-seater)",
  "2-door GT (2+2 hatchback coupe with Pininfarina-designed greenhouse, from 1965)"
 ],
 "engines": [
  "1,798 cc BMC B-series OHV inline-four, twin SU carburettors, three-bearing crankshaft (18G, 18GA), approximately 95 bhp at 5,400 rpm (1962 to October 1964)",
  "1,798 cc BMC B-series OHV inline-four, five-bearing crankshaft (18GB and later 18GF, 18GH, 18GK, 18GV, 18V), approximately 95 bhp at 5,400 rpm falling to about 97 bhp DIN in late UK trim (October 1964 to 1980)",
  "1,798 cc B-series with a single 1.75-inch Zenith-Stromberg carburettor on a combined intake-exhaust manifold, approximately 62.5 net hp rising to about 67 net hp by 1980 (North American specification, 1975-1980)",
  "2,912 cc BMC C-series seven-bearing OHV straight-six, twin SU carburettors, 145 bhp at 5,250 rpm (MGC, 1967-1969)",
  "3,528 cc Rover alloy 90-degree OHV V8, twin SU HIF6 carburettors, 8.25:1 compression, 137 bhp at 5,000 rpm and 193 lb ft at 2,900 rpm (MGB GT V8, 1973-1976)"
 ],
 "productionTotal": null,
 "productionNotes": "No single production figure can be asserted, because credible sources disagree at several levels. MGOCNI, The MG Experience and the North American MGB Register give 386,961 roadsters and 125,282 GTs for a four-cylinder total of 512,243 cars. Classic & Sports Car gives 386,789 roadsters; Classics World gives GT production as 125,323. Wikipedia states 523,836 for MGB, MGC and MGB GT V8 combined, three cars adrift of the 523,833 the component figures produce, and close to but not on the 523,002 chassis number carried by the last car built. Classic Motorsports rounds to more than 513,000 assembled at Abingdon. The gaps are small in proportion but are not reconciled by any source consulted here, so productionTotal is left null. Two subsidiary figures are firmer: 298,052 cars went to North America, and 1972 was the peak year at 39,393 MGBs and GTs. The MGC is variously given as 8,999 by Car & Classic, with a split of 4,542 roadsters and 4,457 GTs, 9,009 by Hagerty, and 'just over 9,000' or 'about 9,000' by AROnline and MGOCNI. The MGB GT V8 is consistently given as 2,591 cars by the MG Owners' Club, AROnline and MGOCNI, of which 1,839 chrome-bumper and 742 rubber-bumper; the mg-cars.org.uk car-number listing runs from 101 to 2903 but contains a deliberate block jump from 1956 to 2101 at the September 1974 bumper change, so the highest car number is not a production count and should not be quoted as one. Special editions are better documented than the main run: 751 Jubilee GTs in 1975, 6,668 North American Limited Editions across 1979-80, and 1,001 UK Limited Editions built between August and October 1980 as 580 pewter GTs and 421 bronze roadsters.",
 "notableTrims": [
  {
   "name": "MGB Mk I roadster (1962-1967)",
   "note": "Pull-handle cars to 1964 use the three-bearing 18G or 18GA engine and external door handles; Classic & Sports Car puts them at the top of the UK price ladder."
  },
  {
   "name": "MGB with five-bearing 18GB (October 1964 on)",
   "note": "Same 95 bhp rating, materially stronger bottom end. Classics World calls the five-bearing unit particularly robust and Classic Motorsports rates 1966-67 cars the sweet spot."
  },
  {
   "name": "MGB GT (1965-1980)",
   "note": "Pininfarina-designed greenhouse on the roadster's lower body. Outsold the roadster in Britain by roughly ten to one by 1970 and remains the cheaper of the two to buy."
  },
  {
   "name": "MGB Mk II (1967-1969)",
   "note": "All-synchromesh gearbox derived from the MGC and dual-circuit brakes. The first MGB with synchromesh on first gear."
  },
  {
   "name": "MGC and MGC GT (1967-1969)",
   "note": "2,912 cc seven-bearing six, torsion-bar front suspension, bulged bonnet, fifteen-inch wheels. Launch press cars ran incorrect front tyre pressures and the understeer they reported has shadowed the car since."
  },
  {
   "name": "MGB GT V8 (1973-1976)",
   "note": "3,528 cc alloy Rover V8, 137 bhp, GT bodyshell and right-hand drive only, never sold new in the United States; 1,839 chrome-bumper cars and 742 rubber-bumper."
  },
  {
   "name": "Rubber-bumper MGB and MGB GT (1974.5-1980)",
   "note": "Polyurethane bumpers, raised ride height, front anti-roll bar deleted for 1975 and a rear bar added for 1977. The cheapest way into the model and the configuration the market still discounts."
  },
  {
   "name": "Jubilee and Limited Edition models (1975, 1979-1980)",
   "note": "751 British Racing Green Jubilee GTs in 1975; 6,668 North American Limited Editions in 1979-80; 1,001 UK Limited Editions in 1980, 580 GTs and 421 roadsters."
  }
 ],
 "specs": {
  "layout": "Front-mounted longitudinal engine, rear-wheel drive; two-seat roadster or 2+2 hatchback coupe",
  "chassis": "Steel monocoque replacing the MGA's separate chassis; roughly 40 lb lighter and roomier than the MGA structure",
  "engine": "1,798 cc BMC B-series OHV four; three-bearing (18G, 18GA) to October 1964, five-bearing thereafter (18GB, then 18GF/18GH/18GK/18GV/18V)",
  "engine_mgc": "2,912 cc seven-bearing BMC C-series straight-six, twin SU carburettors, 145 bhp at 5,250 rpm, about 209 lb heavier than the four (MGC, 1967-1969)",
  "engine_v8": "3,528 cc Rover alloy V8, twin SU HIF6, 8.25:1, 88.9 x 71.1 mm; Wikipedia quotes 3,532 cc (MGB GT V8, 1973-1976)",
  "power": "About 95 bhp at 5,400 rpm as launched and about 97 bhp DIN in late UK trim; North American output fell to roughly 62.5 net hp for 1975 and about 67 net hp by 1980. MGC 145 bhp; MGB GT V8 137 bhp at 5,000 rpm",
  "torque": "About 110 lb ft (150 Nm) for the 1,798 cc four, peak rpm not stated by the sources consulted; MGB GT V8 193 lb ft at 2,900 rpm",
  "transmission": "Four-speed manual, no synchromesh on first until the 1967 Mk II adopted the all-synchromesh MGC gearbox; three-speed Borg-Warner automatic optional until 1973",
  "overdrive": "Laycock overdrive optional, on third and fourth until 1977 and fourth only thereafter; fitted to under 20 per cent of MGBs, with sources disagreeing on whether it became standard in 1975 or 1977",
  "suspension_front": "Coil springs and wishbones with lever-arm dampers; MGC substituted torsion bars with telescopic dampers to clear the six",
  "suspension_rear": "Live axle on semi-elliptic leaf springs with lever-arm dampers; Salisbury-type axle on the GT",
  "anti_roll_bars": "Front bar deleted for the 1975 model year and offered only as an option; rear bar standard from 1977",
  "ride_height": "Raised for 1974.5 to bring the impact bumpers within the mandated US height band; stated as 1 inch (25 mm) by Wikipedia and 1.5 inches by The MG Experience and Classics World",
  "wheels": "Fourteen-inch wheels on the MGB, steel or optional centre-lock wire; fifteen-inch on the MGC",
  "weight": "Late rubber-bumper cars over 2,400 lb (1,095 kg) kerb; the monocoque saved roughly 40 lb against the MGA",
  "acceleration": "Just over 11 seconds to 60 mph on the manufacturer figure, with a 1965 car recorded at 10 seconds; MGC 10.0 seconds; MGB GT V8 quoted at 7.7 to 8.5 seconds",
  "top_speed": "About 103 mph recorded for a 1965 roadster; MGC 120 mph; MGB GT V8 125 mph"
 },
 "summary": "The MGB replaced the MGA in September 1962 and stayed in production at Abingdon until October 1980, an eighteen-year run that made it, on the figures its own registers publish, the best-selling sports car in the world until the Mazda MX-5 passed it. The central engineering decision was structural: where the MGA sat on a separate chassis, the MGB used a steel monocoque, which cost nothing in weight and bought a roomier cockpit and a far stiffer shell. The 1,798 cc B-series four gained a five-bearing crankshaft in October 1964; a Pininfarina-influenced GT arrived in 1965; a six-cylinder MGC and a Rover-engined GT V8 came and went in small numbers. From the 1974-and-a-half model year American bumper legislation brought black polyurethane bumpers and a raised ride height that cost the car much of its poise, and the chrome-versus-rubber divide that followed still sets prices. Parts supply is better than for almost any other classic, complete bodyshells included.",
 "history": "## From MGA to Monocoque\nThe MGB was developed at Abingdon as ADO23 under chief engineer Syd Enever, whose brief was to replace an MGA whose sales were falling away. The shape came from MG's own Don Hayter with assistance from Pininfarina, but the decision that mattered most was underneath it: a steel monocoque in place of the MGA's separate chassis and body. Classic Motorsports records that the unitary shell saved around forty pounds and freed up interior space at the same time, a rare change that improved stiffness, weight and packaging together. The first production car, GHN3-101, was completed in May 1962 with the three-bearing 18G engine, and Motor greeted the car that autumn as a modern sports car with a marked bias towards grand touring character.\n\n## Five Bearings, and a Roof by Pininfarina\nThe original 1,798 cc B-series four carried a three-main-bearing crankshaft inherited from the MGA. In October 1964 a five-bearing crankshaft replaced it and the prefix changed from 18G and 18GA to 18GB, a durability change rather than a power one: the rating stayed at about 95 bhp at 5,400 rpm. The other defining addition came in 1965, when the MGB GT appeared with a greenhouse designed by Pininfarina grafted onto the roadster's lower body. Britain took to it immediately, and Classics World records that by 1970 the domestic ratio had reached roughly ten GTs to every roadster, while North America went on buying open cars. The Mk II of 1967 brought the all-synchromesh gearbox developed for the MGC and dual-circuit brakes.\n\n## The Six and the Eight\nTwo attempts to give the MGB a larger engine both failed commercially. The MGC of 1967 used a 2,912 cc seven-bearing C-series six that the North American MGB Register records as 209 lb heavier than the four, forcing a complete redesign of the front suspension around torsion bars, a bulged bonnet and fifteen-inch wheels; it was withdrawn in August 1969, its reputation already fixed by launch cars handed to the press on the wrong tyre pressures. The MGB GT V8 of 1973 was the better car and the worse proposition: the alloy 3,528 cc Rover unit weighed slightly less than the iron four, gave 137 bhp and 193 lb ft and made the GT a genuine 125 mph car, but it looked almost identical to a standard GT, cost far more, was never federalised for the United States, and arrived in the same season as the oil crisis.\n\n## Federal Legislation and the Rubber Bumper\nThe MGB's largest market was North America, and American regulation therefore shaped it. NHTSA's own evaluation of the bumper standard records FMVSS 215 taking effect on 1 September 1972 with a 5 mph front and 2.5 mph rear requirement, tightening to 5 mph at both ends for 1974. MG's answer from the 1974-and-a-half model year was a steel-reinforced black polyurethane bumper at each end, and because those bumpers had to sit within a mandated height band on a car with a low nose, the ride height went up with them. The suspension geometry did not. For 1975 the front anti-roll bar was deleted as a cost saving, and Classic Motorsports notes press reports that the car felt tippy in corners; a rear bar became standard for 1977 and the settings were retrieved. American cars suffered separately under emissions rules, dropping to a single 1.75-inch Zenith-Stromberg carburettor for 1975 and about 62.5 net horsepower, against roughly 97 bhp DIN still available in Britain.\n\n## Abingdon Closes\nBritish Leyland announced the closure of Abingdon in September 1979, having concluded that the MGB was taking sales from the Triumph TR7. A planned O-series re-engineering for 1981 was never built. The last cars were Limited Editions stockpiled through the autumn of 1980, and the final two carried chassis numbers 523001 and 523002. No successor followed from the same plant, and the bodyshell tooling later passed to British Motor Heritage, which still presses MGB shells at Witney on the original factory presses and jigs.",
 "marketNotes": "As of August 2026, classic.com puts the MG B Roadster market benchmark at $10,993 on a falling trend, with an average sale of $11,279, recorded results running from $850 for a 1964 project in November 2024 to $29,995 for a 1973 car in July 2026. The B GT benchmark is $12,471 on a rising trend, average sale $12,107, with a $900 low in February 2025 and a $29,500 high for a modified 1967 car in May 2026. The scarcer variants sit above both: as of August 2026 the B GT V8 benchmark is $22,165 across only six tracked sales, average $19,825, from $8,250 in August 2026 to a EUR 31,950 Belgian result in December 2025; MG C averages $20,587 with roadster and GT benchmarks of $21,694 and $21,588 and a $45,000 high for a 1968 GT in September 2025. UK guide figures published by Classics World in January 2026 run from £3,000-£4,000 for an early pull-handle roadster project through £8,000 usable to £15,000-£25,000 in top condition, with GTs at under £2,000 for a project and £10,000-£15,000 for an excellent car. Chrome-bumper cars command the premium throughout, and rubber-to-chrome converted cars trade below originals. What moves an individual car above benchmark is structural soundness, an unbroken history and originality rather than specification: there is no rare-model scarcity to trade on in the four-cylinder range.",
 "whatToLookFor": "Structure decides everything here, because the monocoque is the chassis. The sills are not a cosmetic panel but a multi-part assembly with inner, outer and castle sections, and Classics World notes that replacing them properly means cutting into the wings. Work along the floors, outriggers, jacking points and rear spring hangers, then the scuttle, windscreen surround and door pillars, and reach up inside the front wing behind the wheel to feel the top ledge, which packs with mud and rots from the inside out. A car that flexes, or whose doors need lifting to shut, is saying something the paint is not. Set that against replacement cost: British Motor Heritage lists a new roadster shell at roughly £15,480 to £17,280 including VAT, and Classic & Sports Car quotes over £13,000 for a bare shell, so a structurally spent car is an uneconomic restoration however cheap the asking price. Galvanised shells have been available since the early 1990s and are worth identifying. Confirm the engine prefix matches the claimed year: 18G and 18GA are three-bearing units, 18GB onwards five-bearing. Oil pressure should read about 15 psi at hot idle and 50-60 psi or more at speed. On rubber-bumper cars, establish whether the 1977-on suspension revisions are present, and treat a rubber-to-chrome conversion as a different car from an original chrome-bumper one. A Heritage Certificate from the British Motor Museum, whose MG records cover 1953 to 1980, confirms build and despatch dates, engine and body numbers and original colour for £52.",
 "commonProblems": "Corrosion is the dominant fault and the only one that is routinely terminal. Beyond the sills and floors, wings, wheelarches, door bottoms, bonnet and the GT's tailgate all rot, and the shell hides advancing structural decay well until it becomes unavoidable. Mechanically the B-series is durable, particularly in five-bearing form. Blue smoke on start-up points to valve guides and on the overrun to bores; knocks from the bottom end mean a rebuild, quoted by Classics World at around £2,500. A leaking rear crankshaft seal requires the engine out, which changes the economics of an otherwise minor job. Classic Motorsports records cylinder head cracking as a frequent failure, typically around number three, worn SU throttle shafts as a rebuild indicator, and cracked exhaust manifolds mainly on the single-carburettor federal cars, whose Zenith-Stromberg installation on its combined intake-exhaust manifold both lost power and created longevity problems. Gearboxes are tough; listen for layshaft rumble that stops when the clutch is depressed. Overdrive faults are usually electrical or low oil, with reconditioned units around £500. Kingpins wear quickly without greasing, lever-arm dampers leak, lower wishbone bushes wear particularly on rubber-bumper cars, leaf springs sag and wire wheels lose spokes, which condemns the wheel. Electrical trouble is usually previous owners' alternator and pump conversions rather than the original loom.",
 "valueTrajectory": "The MGB has never been a scarce car and its values reflect that. The Classic Valuer records roadster values up 58 per cent over five years and still rising, while GTs rose more than 50 per cent, peaked in 2021 and have since fallen back to roughly where they started; record auction results stand at £35,396 for a roadster and £26,388 for a GT. Isolated results go further: RM Sotheby's sold a two-owner 1967 roadster with a documented restoration for $38,500 at Amelia Island in March 2017, a figure that reflected provenance rather than specification. As of August 2026 the classic.com benchmarks show the two body styles diverging, roadsters trending down and GTs up, which narrows a gap that was once wide. The structural constraint on the whole market is that restoration cost is largely independent of purchase price: with shells at £15,000 and upwards, a poor car cannot be economically rescued while a sound one is cheap to keep. That has kept good cars scarcer than the production figures suggest, and left the rubber-bumper cars, mechanically the same underneath, as the clearest remaining value in the range.",
 "overallConfidence": "high",
 "sources": [
  {
   "ref": "wikipedia-mgb",
   "title": "MG MGB",
   "url": "https://en.wikipedia.org/wiki/MG_MGB",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Gives 523,836 for MGB, MGC and MGB GT V8 combined; 18G three-bearing to 18GB five-bearing in October 1964; 95 hp at 5,400 rpm and 110 lb ft; Pininfarina greenhouse on the GT; suspension raised 1 inch (25 mm) for the 1974.5 bumpers; front anti-roll bar deleted for 1975; single Stromberg from 1975; 751 Jubilees; overdrive on under 20 per cent of cars."
  },
  {
   "ref": "aronline-mgb",
   "title": "MGB development story - Britain's most successful sports car laid bare",
   "url": "https://www.aronline.co.uk/cars/mg-cars/mgb/ado23-development-history/",
   "publisher": "AROnline",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Establishes the ADO23 code, Syd Enever's brief to replace the MGA, and the monocoque styled by Don Hayter with assistance from Pininfarina; MGC 'just over 9000'; V8 at 8.5 s and 125 mph with 2,591 sold; last roadster 23 October 1980."
  },
  {
   "ref": "aum-mgb-p4",
   "title": "All the Way from A to B: The History of the MGB, Part Two (page 4)",
   "url": "https://ateupwithmotor.com/model-histories/mgb-and-gt-history-part-2/4/",
   "publisher": "Ate Up With Motor",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Rubber-bumper cars over 2,400 lb (1,095 kg) kerb; UK cars at 97 hp DIN against 62.5 net hp in the US for 1975, recovering to 67 by 1980; nearly 6,700 North American Limited Editions; closure announced September 1979, production ending 23 October 1980."
  },
  {
   "ref": "mgexp-evolution",
   "title": "MGB Evolution and History 1962-1980",
   "url": "https://www.mgexp.com/article/mgb-evolution-and-history-1962-1980.73",
   "publisher": "The MG Experience",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Year-by-year evolution: GHN3-101 completed May 1962 with the 18G; the 18GB to 18GV prefixes; chassis raised 1.5 inches for the federal bumpers; 512,243 built with 298,052 to North America; last two cars 523001 and 523002 on 22 October 1980."
  },
  {
   "ref": "mgocni-production",
   "title": "The MGB Story: Through the Production Years",
   "url": "https://mgocni.co.uk/the-mgb-story-through-the-production-years/",
   "publisher": "MG Owners' Club Northern Ireland",
   "sourceType": "club-forum",
   "reliability": "medium",
   "notes": "Club production record: 386,961 roadsters and 125,282 GTs; 1972 the peak year at 39,393 cars; 1,001 Limited Editions as 580 pewter GTs and 421 bronze roadsters; V8 as about 2,587 home-market cars plus seven LHD to North America; MGC 'about 9,000'."
  },
  {
   "ref": "namgbr-mgb",
   "title": "MGB Register",
   "url": "https://namgbr.org/registers/mgb-register/",
   "publisher": "North American MGB Register",
   "sourceType": "registry",
   "reliability": "medium",
   "notes": "North American register: 512,243 MGBs with 298,052 exported to North America; five-bearing crankshaft from October 1964 with the 18GB prefix, adopted for reliability rather than power; 6,668 North American Limited Editions."
  },
  {
   "ref": "namgbr-mgc",
   "title": "MGC Register",
   "url": "https://namgbr.org/registers/mgc-register/",
   "publisher": "North American MGB Register",
   "sourceType": "registry",
   "reliability": "medium",
   "notes": "MGC register: production to August 1969; 2,912 cc seven-main-bearing C-series at 145 bhp at 5,250 rpm; the engine 209 lb heavier than the MGB four; torsion-bar front suspension with telescopic dampers; 120 mph and 0-60 in 10.0 seconds."
  },
  {
   "ref": "carandclassic-mgc",
   "title": "MG MGC: Models, Specs, and Buyer's Guide",
   "url": "https://www.carandclassic.com/us/buyer-guides/mg-mgc-models-and-specs",
   "publisher": "Car & Classic",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "The only source consulted here giving an MGC body-style split: 8,999 total as 4,542 roadsters and 4,457 GTs. Also fifteen-inch wheels and early press cars dispatched on incorrect front tyre pressures that exaggerated understeer."
  },
  {
   "ref": "hagerty-mgc",
   "title": "1967-69 MGC",
   "url": "https://www.hagerty.com/media/car-profiles/1967-69-mgc/",
   "publisher": "Hagerty Media",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Gives MGC production as 9,009 with no body-style split, against Car & Classic's 8,999. Also roughly 300 lb of extra weight over the front wheels, BMC test cars delivered on MGB tyre pressures, and MGCs trading at little premium over an MGB."
  },
  {
   "ref": "mgoc-v8",
   "title": "MGB GT V8",
   "url": "https://www.mgownersclub.co.uk/mg-guides/mgb/mgb-gtv8",
   "publisher": "MG Owners' Club",
   "sourceType": "club-forum",
   "reliability": "medium",
   "notes": "Source of the V8 bumper split: 2,591 cars, 1,839 chrome-bumper and 742 black-bumper, GT bodyshell only. Also 3,528 cc, 8.25:1, twin SU HIF6, 137 bhp at 5,000 rpm, 193 lb ft at 2,900 rpm, 0-60 in 7.7 s, 125 mph, £1,925 in 1973 rising to £3,317 by 1976."
  },
  {
   "ref": "mgcars-v8-numbers",
   "title": "MGB V8 Car numbers",
   "url": "https://www.mg-cars.org.uk/MGB/mgbv8chas.html",
   "publisher": "MG Cars Enthusiasts' Club",
   "sourceType": "registry",
   "reliability": "medium",
   "notes": "Car-number listing: pre-production from 101 in December 1972, series production from 124 in April 1973, chrome-bumper cars ending at 1956 in September 1974 and rubber-bumper resuming at 2101, ending at 2903 in July 1976. Establishes the numbering jump that makes the top number an unreliable count."
  },
  {
   "ref": "classicmotorsports-mgb",
   "title": "The 1962-1980 MGB",
   "url": "https://classicmotorsports.com/articles/the-1962-1980-mgb/",
   "publisher": "Classic Motorsports",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Rounds production to more than 513,000 at Abingdon; the monocoque saving 40 lb against the MGA while adding space; US output about 98 hp in 1965-67, 78.5 hp by 1972 and 62.5 hp from 1975; bumper-height rules forcing the ride-height increase and press reports that the car felt tippy without its front anti-roll bar; head cracking at number three, worn SU throttle shafts, cracked single-carburettor manifolds, kingpin and wishbone wear."
  },
  {
   "ref": "csc-mgb-roadster",
   "title": "MGB roadster buyer's guide: what to pay and what to look for",
   "url": "https://www.classicandsportscar.com/features/buyers-guide-mgb-roadster",
   "publisher": "Classic & Sports Car",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Gives 386,789 roadsters, against the registers' 386,961. Also the mud-packed top ledge inside the front wing, galvanised shells since the early 1990s and bare shells at £13,000 or more, oil pressure of 15 psi hot idle and 50-60 psi at speed, and overdrive standard in 1975."
  },
  {
   "ref": "classicsworld-roadster",
   "title": "MGB buyer's guide",
   "url": "https://classicsworld.co.uk/guides/mgb-roadster-buyers-guide/",
   "publisher": "Classics World",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Carries January 2026 UK values: early projects £3,000-£4,000 rising to £15,000-£25,000 in top condition, GT projects under £2,000 and excellent GTs £10,000-£15,000. Also sills and castle sections needing wing surgery, rear crankshaft seal requiring engine removal, rebuild about £2,500 and reconditioned overdrive about £500."
  },
  {
   "ref": "classicsworld-gt",
   "title": "MGB GT buyer's guide",
   "url": "https://classicsworld.co.uk/guides/mgb-gt-buyers-guide/",
   "publisher": "Classics World",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Gives total MGB GT production as 125,323 and states the ride height rose 1.5 inches in 1974. Also the ten-to-one GT-to-roadster ratio in Britain by 1970, the 1977 anti-roll bar upgrade, the Salisbury-type rear axle, a bare GT shell at over £15,000, and overdrive standard from 1977."
  },
  {
   "ref": "classicsworld-roadtest-65",
   "title": "Road Test - 1965 MGB Roadster",
   "url": "https://classicsworld.co.uk/cars/road-test-1965-mgb-roadster/",
   "publisher": "Classics World",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Measured reference for a five-bearing car with overdrive: 91 bhp at 5,400 rpm after rolling-road tuning, 103 mph, 0-60 mph in 10 seconds and 27.1 mpg."
  },
  {
   "ref": "nhtsa-bumper",
   "title": "An Evaluation of the Bumper Standard - As Modified in 1982",
   "url": "https://crashstats.nhtsa.dot.gov/Api/Public/ViewPublication/807072",
   "publisher": "US National Highway Traffic Safety Administration",
   "sourceType": "government",
   "reliability": "high",
   "notes": "The regulator's own account of the rule the rubber bumpers were built to meet: FMVSS 215 issued 9 April 1971 and effective 1 September 1972 at 5 mph front and 2.5 mph rear for 1973, tightening to 5 mph front and rear for 1974; relaxed to 2.5 mph in 1982."
  },
  {
   "ref": "bmh-shells",
   "title": "British Classic MGB Roadster bodyshells",
   "url": "https://www.bmh-ltd.com/body-shells/mgb-roadster-body-shells/",
   "publisher": "British Motor Heritage",
   "sourceType": "specialist",
   "reliability": "high",
   "notes": "Establishes that a complete new MGB structure is a catalogue item: shells pressed on the original factory press tooling and assembly jigs in 1964-67, 1967-74, 1974-78 rubber-bumper and V8 forms, listed at approximately £15,480 to £17,280 including VAT."
  },
  {
   "ref": "bmm-heritage",
   "title": "Heritage Certificates",
   "url": "https://www.britishmotormuseum.co.uk/archive/heritage-certificates",
   "publisher": "British Motor Museum",
   "sourceType": "registry",
   "reliability": "high",
   "notes": "Establishes that MG factory ledgers survive for 1953-80, covering the whole MGB run, and that a Heritage Certificate is a certified copy of the ledger entry giving build and despatch dates, engine and body numbers and colour, at £52."
  },
  {
   "ref": "mgcc-factory-records",
   "title": "Factory Records",
   "url": "https://www.mgcc.co.uk/factory-records/",
   "publisher": "MG Car Club",
   "sourceType": "club-forum",
   "reliability": "medium",
   "notes": "Establishes that the club's own records cover only Vintage and Triple-M cars, the later Abingdon service records having been scrapped in 1968 when storage was needed for current paperwork. Explains why MGB build records sit with the museum."
  },
  {
   "ref": "rm-am17-mgb",
   "title": "1967 MG MGB Roadster, Amelia Island 2017",
   "url": "https://rmsothebys.com/auctions/am17/lots/r188-1967-mg-mgb-roadster/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold for $38,500 at Amelia Island in March 2017, lot 292, chassis GHN3-U/133548-G. Early Mk II roadster quoted at 94 bhp, one owner to 2004, restored 2011. A documented-provenance result well above benchmark."
  },
  {
   "ref": "classic-mgb-roadster",
   "title": "MG B Roadster Market",
   "url": "https://www.classic.com/m/mg/b/roadster/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Market data as of August 2026: benchmark $10,993 on a downward trend, average sale $11,279, results from $850 for a 1964 project on 2 November 2024 to $29,995 for a 1973 roadster in July 2026."
  },
  {
   "ref": "classic-mgb-gt",
   "title": "MG B GT Market",
   "url": "https://www.classic.com/m/mg/b/gt/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Market data as of August 2026: benchmark $12,471 on an upward trend, average sale $12,107, lowest $900 for a 1972 car on 12 February 2025 and highest $29,500 for a modified 1967 car on 12 May 2026."
  },
  {
   "ref": "classic-mgb-gt-v8",
   "title": "MG B GT V8 Market",
   "url": "https://www.classic.com/m/mg/b/gt-v8/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Market data as of August 2026: benchmark $22,165 on a downward trend and average sale $19,825 across only six tracked sales, from $8,250 on 3 August 2026 to EUR 31,950 on 15 December 2025."
  },
  {
   "ref": "classic-mgc",
   "title": "MG C Market",
   "url": "https://www.classic.com/m/mg/c/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Market data as of August 2026: MG C average sale $20,587, benchmarks of $21,694 for the roadster and $21,588 for the GT, a low of $8,437 in March 2025 and a high of $45,000 for a 1968 MGC GT on 30 September 2025."
  },
  {
   "ref": "classicvaluer-mgb",
   "title": "MGB GT and Roadster: Buyers Guide",
   "url": "https://www.theclassicvaluer.com/post/mgb-gt-and-roadster-2023-buyers-guide",
   "publisher": "The Classic Valuer",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "Auction-database analysis: roadster values up 58 per cent over five years, GT values peaking in 2021 and falling back; records of £35,396 for a roadster and £26,388 for a GT; rubber-to-chrome conversions trading below original chrome-bumper cars."
  }
 ],
 "claims": [
  {
   "section": "history",
   "claimText": "Developed at Abingdon as ADO23 under chief engineer Syd Enever and styled by MG's Don Hayter with assistance from Pininfarina, the MGB replaced the MGA's separate chassis with a steel monocoque combining bodyshell and frame, saving roughly 40 lb and adding interior space; the first production car, GHN3-101, was completed in May 1962.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classicmotorsports-mgb",
    "wikipedia-mgb",
    "aronline-mgb",
    "mgexp-evolution"
   ]
  },
  {
   "section": "specs",
   "claimText": "The 1,798 cc B-series four used a three-main-bearing crankshaft with the 18G and 18GA prefixes until October 1964, when a five-bearing crankshaft was adopted and the prefix became 18GB; the change was made for durability rather than output, which stayed at about 95 bhp at 5,400 rpm with roughly 110 lb ft of torque.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-mgb",
    "mgexp-evolution",
    "csc-mgb-roadster",
    "classicsworld-roadster",
    "namgbr-mgb"
   ]
  },
  {
   "section": "specs",
   "claimText": "Manufacturer figures put the early MGB at just over 11 seconds to 60 mph, while a rolling-road-tuned 1965 five-bearing roadster tested by Classics World recorded 91 bhp, 103 mph, 0-60 mph in 10 seconds and 27.1 mpg.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "classicsworld-roadtest-65",
    "wikipedia-mgb"
   ]
  },
  {
   "section": "history",
   "claimText": "The MGB GT arrived in 1965 with a greenhouse designed by Pininfarina grafted onto the roadster's lower body, and took over the British market so completely that by 1970 domestic sales ran at roughly ten GTs to every roadster.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-mgb",
    "classicsworld-gt",
    "aronline-mgb"
   ]
  },
  {
   "section": "production",
   "claimText": "Published production totals for the MGB do not agree, and no single figure is asserted here.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "mgocni-production",
    "mgexp-evolution",
    "namgbr-mgb",
    "wikipedia-mgb",
    "csc-mgb-roadster",
    "classicsworld-gt",
    "classicmotorsports-mgb"
   ],
   "conflictNote": "MGOCNI, The MG Experience and the North American MGB Register give 386,961 roadsters and 125,282 GTs for 512,243 four-cylinder cars. Classic & Sports Car gives 386,789 roadsters. Classics World gives GT production as 125,323. Wikipedia gives 523,836 for MGB, MGC and MGB GT V8 combined, three cars adrift of the 523,833 the component figures produce. Classic Motorsports rounds to more than 513,000. Not resolved by any source consulted here, so productionTotal is null."
  },
  {
   "section": "production",
   "claimText": "The MG Experience and the North American MGB Register both state that 298,052 MGBs went to North America, MGOCNI records 1972 as the peak year at 39,393 cars, and the special editions are documented precisely: 751 Jubilee GTs in 1975, 6,668 North American Limited Editions across 1979-80, and 1,001 UK Limited Editions built between August and October 1980 as 580 pewter GTs and 421 bronze roadsters.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "mgexp-evolution",
    "namgbr-mgb",
    "mgocni-production",
    "wikipedia-mgb",
    "aum-mgb-p4"
   ]
  },
  {
   "section": "production",
   "claimText": "MGC production totals are given differently by different sources and no single figure is asserted here.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "carandclassic-mgc",
    "hagerty-mgc",
    "aronline-mgb",
    "mgocni-production",
    "namgbr-mgc"
   ],
   "conflictNote": "Car & Classic states 8,999 cars, split as 4,542 roadsters and 4,457 GTs. Hagerty states 9,009. AROnline says 'just over 9000' and MGOCNI 'about 9,000'. Only Car & Classic offers a body-style split. Not resolved by any source consulted here."
  },
  {
   "section": "history",
   "claimText": "The MGC used a 2,912 cc seven-bearing C-series six rated at 145 bhp at 5,250 rpm that the North American MGB Register records as 209 lb heavier than the MGB four, forcing a redesigned torsion-bar front suspension, a bulged bonnet and fifteen-inch wheels; its reputation for understeer was set by launch press cars delivered on incorrect front tyre pressures, and production ended in August 1969.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "namgbr-mgc",
    "carandclassic-mgc",
    "hagerty-mgc",
    "wikipedia-mgb"
   ]
  },
  {
   "section": "production",
   "claimText": "MGB GT V8 production is consistently given as 2,591 cars built between 1973 and July 1976, of which 1,839 were chrome-bumper and 742 rubber-bumper; the surviving car-number listing runs from 101 to 2903 but contains a deliberate block jump from 1956 to 2101 at the September 1974 bumper change, so the highest car number is not a production count.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "mgoc-v8",
    "mgcars-v8-numbers",
    "aronline-mgb",
    "mgocni-production"
   ]
  },
  {
   "section": "specs",
   "claimText": "The MGB GT V8 used the 3,528 cc alloy Rover V8 with twin SU HIF6 carburettors, rated at 137 bhp at 5,000 rpm and 193 lb ft at 2,900 rpm, in a GT bodyshell only and in right-hand drive only; quoted 0-60 mph times range from 7.7 to 8.5 seconds against a 125 mph maximum.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "mgoc-v8",
    "aronline-mgb",
    "wikipedia-mgb"
   ]
  },
  {
   "section": "specs",
   "claimText": "American bumper legislation, which NHTSA records as FMVSS 215 taking effect on 1 September 1972 at 5 mph front and 2.5 mph rear and tightening to 5 mph at both ends for 1974, forced the MGB's ride height up from the 1974-and-a-half model year, but sources disagree on how much.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "nhtsa-bumper",
    "wikipedia-mgb",
    "mgexp-evolution",
    "classicsworld-gt",
    "classicmotorsports-mgb"
   ],
   "conflictNote": "Wikipedia states the suspension was raised by 1 inch (25 mm). The MG Experience states the chassis was raised 1.5 inches, and Classics World's GT guide agrees at 1.5 inches. Classic Motorsports describes the increase without quantifying it. The figure is not resolved by any source consulted here."
  },
  {
   "section": "specs",
   "claimText": "For 1975 the front anti-roll bar was deleted as a cost saving and offered only as an option, with press reports complaining that the car felt tippy in corners, and American cars adopted a single 1.75-inch Zenith-Stromberg carburettor on a combined intake-exhaust manifold that dropped output to about 62.5 net horsepower; a rear anti-roll bar became standard for 1977 and US output recovered only to about 67 net horsepower by 1980, while British cars retained roughly 97 bhp DIN.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-mgb",
    "classicmotorsports-mgb",
    "classicsworld-gt",
    "aum-mgb-p4",
    "mgexp-evolution"
   ]
  },
  {
   "section": "history",
   "claimText": "British Leyland announced the closure of Abingdon in September 1979, having concluded that the MGB was taking sales from the Triumph TR7, and the last two cars carried chassis numbers 523001 and 523002; sources give the completion date as either 22 or 23 October 1980.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "aum-mgb-p4",
    "aronline-mgb",
    "mgexp-evolution",
    "mgocni-production",
    "wikipedia-mgb"
   ],
   "conflictNote": "The MG Experience states the last two MGBs, 523001 and 523002, were completed on 22 October 1980. AROnline states the last MGB roadster came off the line on 23 October 1980, and Ate Up With Motor also gives 23 October 1980. MGOCNI gives only October 1980. The one-day difference is not resolved by any source consulted here."
  },
  {
   "section": "specs",
   "claimText": "Laycock overdrive was an option fitted to under 20 per cent of all MGBs, operating on third and fourth gears until 1977 and on fourth only thereafter, but sources disagree on when it became standard equipment.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "wikipedia-mgb",
    "csc-mgb-roadster",
    "classicsworld-gt"
   ],
   "conflictNote": "Classic & Sports Car states that overdrive became standard in 1975. Classics World's GT guide states it was optional initially and became standard from 1977. Wikipedia establishes only the change in which gears it served, from 1977. The standardisation date is not resolved by any source consulted here."
  },
  {
   "section": "problems",
   "claimText": "Structural corrosion is the dominant fault, concentrated in the multi-part sill and castle-section assembly, the floors, outriggers, jacking points and rear spring hangers, the scuttle, windscreen surround and door pillars, and the mud-packed top ledge inside the front wing behind the wheel.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classicsworld-roadster",
    "csc-mgb-roadster",
    "classicmotorsports-mgb",
    "classicsworld-gt"
   ]
  },
  {
   "section": "problems",
   "claimText": "The recurring mechanical faults are cylinder head cracking around number three, worn SU throttle shafts, cracked exhaust manifolds mainly on single-carburettor federal cars, valve-guide and bore wear shown by blue smoke, a rear crankshaft seal leak requiring the engine out, worn kingpins and lower wishbone bushes, leaking lever-arm dampers, sagging leaf springs and broken wire-wheel spokes; Classics World quotes about £2,500 for a professional engine rebuild.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classicmotorsports-mgb",
    "classicsworld-roadster",
    "wikipedia-mgb"
   ]
  },
  {
   "section": "market",
   "claimText": "As of August 2026 classic.com records a market benchmark of $10,993 on a falling trend for the MG B Roadster and $12,471 on a rising trend for the B GT, with the scarcer variants above both: $22,165 for the B GT V8 across only six tracked sales, and an MG C average sale of $20,587 with roadster and GT benchmarks of $21,694 and $21,588.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-mgb-roadster",
    "classic-mgb-gt",
    "classic-mgb-gt-v8",
    "classic-mgc"
   ]
  },
  {
   "section": "market",
   "claimText": "UK guide values published by Classics World in January 2026 run from £3,000-£4,000 for an early pull-handle roadster project to £15,000-£25,000 in top condition, while The Classic Valuer records roadster values up 58 per cent over five years against GT values that peaked in 2021 and fell back, with record auction results of £35,396 for a roadster and £26,388 for a GT; RM Sotheby's sold a two-owner restored 1967 roadster for $38,500 at Amelia Island in March 2017.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classicsworld-roadster",
    "classicvaluer-mgb",
    "csc-mgb-roadster",
    "rm-am17-mgb"
   ]
  },
  {
   "section": "market",
   "claimText": "Parts supply is unusually complete: every panel and repair section is catalogued, and British Motor Heritage presses complete MGB roadster bodyshells at Witney on the original factory press tooling and assembly jigs, listed at approximately £15,480 to £17,280 including VAT, with galvanised shells available since the early 1990s and a bare shell quoted by Classic & Sports Car at £13,000 or more.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "bmh-shells",
    "classicsworld-roadster",
    "csc-mgb-roadster",
    "classicmotorsports-mgb",
    "classicsworld-gt"
   ]
  },
  {
   "section": "history",
   "claimText": "The British Motor Museum holds MG production records for 1953-80, covering the whole MGB run, and issues a Heritage Certificate giving build and despatch dates, engine and body numbers and colour scheme for £52; the MG Car Club's own factory records cover only Vintage and Triple-M cars, the later Abingdon service records having been scrapped in 1968 when storage was needed for current production paperwork.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "bmm-heritage",
    "mgcc-factory-records"
   ]
  }
 ]
};
