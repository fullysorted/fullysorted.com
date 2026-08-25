/**
 * Researched model draft — Porsche 356 (1948-1965).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seed356 = {
 "slug": "porsche/356",
 "make": "Porsche",
 "model": "356",
 "generation": "356 (all series)",
 "generationCode": "Type 356",
 "trim": null,
 "yearStart": 1948,
 "yearEnd": 1965,
 "bodyStyles": [
  "2-door Coupe, hand-formed aluminium body, built at Gmund in Austria (356/2, 1948-1950)",
  "2-door Coupe, steel body by Reutter and later Karmann (1950-1965)",
  "2-door Cabriolet with folding hood and full-height windscreen",
  "2-door Speedster with cut-down removable windscreen and side curtains (1954-1958)",
  "2-door Convertible D (1959) and 2-door Roadster (1960-1962)",
  "2-door Hardtop Coupe, fixed notchback roof on cabriolet bodywork (356 B)"
 ],
 "engines": [
  "1,086 cc Type 369 pushrod flat-four, 46 hp, in the aluminium Gmund-built 356 SL competition cars",
  "1,100 cc pushrod flat-four, 40 hp, in the Gmund 356/2 and the earliest Stuttgart cars",
  "1,300 cc Type 506 and 1,500 cc Type 527/528 pushrod flat-fours through the Pre-A run; a 1,488 cc 1500 was quoted at 65 hp in period Road & Track testing",
  "1,582 cc Type 616/1 and 616/2 pushrod flat-fours from the 356 A: 1600 at 60 hp at 4,500 rpm, 1600 Super at 75 hp",
  "1,582 cc Super 90 pushrod flat-four, 90 hp, 356 B",
  "1,582 cc 356 C engines: 75 hp C and the Type 616/16 SC at 95 hp, the latter with a counterweighted crankshaft and larger Solex carburettors",
  "1,498 cc Type 547/1 four-cam 'Fuhrmann' flat-four, 100 hp, in the 356 A Carrera 1500 GS and GT from late 1955",
  "1,966 cc Type 587 four-cam flat-four, 130 hp, Carrera 2 (356 B and 356 C)"
 ],
 "productionTotal": null,
 "productionNotes": "No agreed total for the 356 exists and none is asserted here. Two families of figure circulate. The lower sits near 76,300: Revs Institute gives 7,627 Type 356, 21,045 356 A, 30,963 356 B and 16,668 356 C for a stated 76,303, while StuttCars publishes the same first three rows with 16,678 for the 356 C, summing to 76,313. That ten-car gap is the size of the ten 356 C cars Revs describes as built in May 1966, after the line closed, for the Royal Dutch Police. Wikipedia and the Porsche Club of America round to about 76,000. The higher family sits near 78,000: Porsche's own newsroom says 'just under 78,000' in one article and roughly 78,000 in another, Goodwood approximately 78,000, and Elferspot 78,316 with rows of 9,100 Pre-A, 20,541 A, 31,811 B and 16,811 C - rows that sum to 78,263, fifty-three short of its own stated total. Nothing here reconciles the two families, and the Pre-A row alone differs by 1,473 cars. Output peaked at 14,151 cars in 1964, and 317 cars had been built by the end of 1950.",
 "notableTrims": [
  {
   "name": "356/2 'Gmund' coupe and cabriolet (1948-1950)",
   "note": "Aluminium bodywork hammer-formed by outside specialists including Kastenhofer, Keibl and Beutler. Porsche's own account gives 44 coupes and eight cabriolets; other counts run to sixty."
  },
  {
   "name": "Speedster (1954-1958)",
   "note": "Built at Max Hoffman's urging for the United States: chopped removable windscreen, side curtains, thin seats, heater optional. Listed at $2,995 for the 356 A 1600, and the most valuable of the pushrod bodies."
  },
  {
   "name": "Convertible D (1959) and Roadster (1960-1962)",
   "note": "The Speedster's replacements, with a full-height windscreen and wind-up windows. Better cars to use and consistently worth less."
  },
  {
   "name": "356 B 1600 Super 90",
   "note": "The 90 hp development of the 1,582 cc pushrod engine, and the quickest four-cylinder 356 short of a Carrera."
  },
  {
   "name": "356 A Carrera 1500 GS / GT",
   "note": "The four-cam Type 547/1 in a road 356 from late 1955, 100 hp against 75 hp for the best pushrod unit; GT was the lightened competition specification."
  },
  {
   "name": "Carrera 2 (2000 GS)",
   "note": "The 1,966 cc Type 587 four-cam at 130 hp, and the last four-cam road Porsche. RM Sotheby's states 101 coupes for 1964 and thirty cabriolets; Elferspot and Revs give 126 across the 356 C."
  },
  {
   "name": "356 C SC",
   "note": "The run-out pushrod car: four-wheel Ate discs, 95 hp, and the most usable 356 to own. The specification that continued in the United States after European supply switched to the 912."
  }
 ],
 "specs": {
  "layout": "Rear-mounted air-cooled flat-four, rear-wheel drive",
  "chassis": "Steel unitary platform with the body welded on; hand-formed aluminium bodies on the Gmund 356/2",
  "engine": "Air-cooled pushrod flat-four of 1,086 to 1,582 cc; four-cam Carrera units of 1,498 cc (547/1) and 1,966 cc (587)",
  "power": "40 hp for the Gmund 1100 to 95 hp for the 356 C SC; 100 hp Carrera 1500 GS, 130 hp Carrera 2",
  "torque": "91 lb-ft at 4,200 rpm quoted for the 356 C SC; no torque figure appears in any specification consulted here for the 1,582 cc 616/1",
  "transmission": "Four-speed manual; synchromesh from 1953",
  "brakes": "Drum brakes to 1963; four-wheel Ate disc brakes standard on the 356 C",
  "suspension": "Fully independent front and rear, substantially revised for the 356 A in late 1955",
  "weight": "794 kg (1,750 lb) kerb quoted for the 356 A 1600 Speedster",
  "acceleration": "13.9 s to 60 mph quoted for the 356 A 1600 Speedster; 11.0 s for the 356 C SC",
  "top_speed": "107 mph observed by Road & Track on a 1,488 cc 1500 in period; about 99 mph for the 356 A 1600 Speedster; 125 mph claimed for the SC",
  "bore_stroke": "82.5 mm x 74.0 mm for the 1,582 cc pushrod four",
  "compression": "9.5:1 for the Type 616/16 SC",
  "wheelbase": "2,101 mm (82.7 in)",
  "bodywork": "Steel by Reutter, bought by Porsche in 1963, and by Karmann; aluminium on the Gmund cars",
  "assembly": "Gmund, Austria 1948-1950; Zuffenhausen from 6 April 1950 until April 1965"
 },
 "summary": "The Porsche 356 was the first car to carry the Porsche name, and it carried the company for seventeen years. It began in 1948 at Gmund in Carinthia, where a few dozen aluminium-bodied coupes and cabriolets were beaten out by hand over a platform and an air-cooled flat-four descended from the Volkswagen that Ferdinand Porsche had designed a decade earlier. Series production moved to Zuffenhausen in April 1950, with steel bodies from the Stuttgart coachbuilder Reutter, and thereafter the car was revised rather than replaced: Pre-A, 356 A from late 1955, 356 B from 1959, and the disc-braked 356 C from 1963. Alongside the pushrod cars ran the Carrera, powered by Ernst Fuhrmann's four-camshaft flat-four, an engine conceived for racing and sold in road cars in tiny numbers. Ferry Porsche had thought he might sell five hundred. Something over 76,000 were built before the last cabriolet left the line on 28 April 1965.",
 "history": "## A Sawmill in Carinthia\nFerdinand Porsche moved his design office from Stuttgart to Gmund in Carinthia in 1944, and it was there - with Ferdinand interned in France and his son Ferry running the firm - that the first car sold as a Porsche was built. Ferry's account is unadorned: he could not find the car he wanted, so he built it himself. The mid-engined 356 'No. 1' roadster received its operating permit on 8 June 1948 and the first coupe was completed that August. What followed was the 356/2, its engine moved behind the rear axle and its bodies hammer-formed from aluminium sheet by outside specialists including Kastenhofer, Keibl and Beutler. Porsche's own history states that 44 coupes and eight cabriolets were built from the winter of 1948/49 until Austrian production ended in 1950. Other counts run higher, and the Gmund figure has never entirely settled.\n\n## Zuffenhausen, Reutter and the Steel Car\nThe first German-built 356 was finished on 6 April 1950. Porsche had no factory of its own and rented space in Reutter's Werk II for engine assembly and final build, while Reutter's Werk I supplied finished, painted and trimmed steel bodies. By the end of 1950, 317 cars had been made. The arrangement lasted until 1963, when Porsche bought the Reutter body business outright and took on roughly a thousand employees with it, which is why so many 356s carry a 'by Reutter' badge. Karmann built bodies too, distinguishable in club literature by round drain holes in the longitudinals. The pushrod engine grew from 1,086 cc through 1,300 and 1,500 to the 1,582 cc Type 616 that served until the end.\n\n## Hoffman, the Speedster and California\nThe Speedster exists because Max Hoffman, Porsche's New York importer, wanted something cheaper and more obviously sporting for the American market. It arrived in October 1954 with a chopped, removable windscreen, side curtains in place of wind-up windows, thin bucket seats and cabin heating on the options list. Factory records quoted by RM Sotheby's show cars leaving for Hoffman's dealership with 1600 Normal engines, sealed-beam headlamps and USA bumpers. At $2,995 the 356 A 1600 Speedster was cheap enough to race and light enough to be quick, and it became a fixture of southern Californian club racing. It was also cold and draughty, which is why Porsche replaced it in 1959 with the Convertible D and then the Roadster - better cars to use, and neither worth what a Speedster is now.\n\n## Four Camshafts\nErnst Fuhrmann drew the Type 547 flat-four for Porsche in 1952. Two overhead camshafts per bank were driven by vertical shafts and angular gears rather than by chains, a layout that made the engine effectively impossible to build on a production line. It appeared first in the 550 Spyder and reached the road in late 1955 as the 1,498 cc Type 547/1 in the 356 A Carrera 1500 GS, at 100 hp where the best pushrod engine of the day gave 75. The 1,966 cc Type 587 of the Carrera 2 followed at 130 hp. Fewer than two thousand vertical-shaft engines were built in all, and a recent specialist rebuild ran to over two hundred hours.\n\n## Pre-A, A, B, C\nThe 356 was never replaced, only revised. The 356 A of late 1955 brought a curved one-piece windscreen, revised suspension and the 1,582 cc Type 616 engines. The 356 B of 1959 raised the headlamps and bumpers in T5 form, then squared the bonnet and enlarged the glass in T6 form from 1961, and added the 90 hp Super 90. The 356 C of July 1963 fitted Ate disc brakes at all four corners and offered 75 hp C and 95 hp SC engines. Each step made the car easier to live with and, to a certain kind of buyer, slightly less interesting.\n\n## The Last One\nThe 911 had been on sale since 1964, and the 912 took the 356's place in Europe in April 1965. A white cabriolet, decked in flowers, went down the Zuffenhausen line on 28 April 1965. SC models continued to sell in the United States to the end of that year, and ten further 356 C cars were built in May 1966 for the Royal Dutch Police. Output had peaked at 14,151 cars in 1964, a number Ferry Porsche's estimate of five hundred sales does not begin to anticipate.",
 "marketNotes": "As of August 2026, classic.com records an average sale price of $168,495 across all 356 variants from 62 cars listed for sale, a deep and liquid market by classic-car standards. The spread is the point: the highest result on the site is $1,650,000 for a 1951 Sauter Roadster in August 2026, the lowest $1,700 for a coupe project in July 2025. Between those poles the benchmarks are orderly: the 356 A stands at $243,110, the 356 B averages $129,651 from 27 listings and the 356 C $117,084 from eleven. Body style separates the money more than year does: as of August 2026 the 356 A Speedster benchmark is $320,078 and the A cabriolet $196,422, against $114,901 for an A coupe. Four-cam cars trade in a tier of their own, with a 356 C Carrera 2 benchmark of $534,116 trending up and a top four-cam result of $857,500 for a 1958 356 A Speedster Carrera GT on 15 August 2026. Auction evidence tracks those figures: RM Sotheby's sold a 356 A 1600 Speedster for $423,000 including premium at Monterey in August 2025 and a 1963 Carrera 2 Cabriolet for EUR 702,500 at Paris in January 2026.",
 "whatToLookFor": "Structure before everything else. The 356 is a unitary steel car with the body welded to the platform, so corrosion in the longitudinals, floorpans, battery box and torsion tube housings is structural rather than cosmetic, and thick undercoating or fresh paint is the easiest place in which to bury a bad repair. Club guidance points to lap-welded joints six inches behind the headlights as the mark of a badly grafted front clip, and holds that door and lid gaps should measure three millimetres. Paperwork does the rest. Porsche issues a Certificate of Authenticity and a production specification document confirming chassis, engine and gearbox numbers, original colour and delivery details; a car without one is a car taking the seller's word for its specification. That matters most on Speedsters and on anything wearing Carrera badges, where the gap between the original and a well-made tribute is large. Dry-climate cars start from a better place than coastal or northern ones, and on four-cam cars it is worth establishing who last rebuilt the engine and when: the population of people who can do it is small.",
 "commonProblems": "Rust is the defining fault and always has been. Floorpans, rockers, longitudinals, battery box, door bottoms, lower wings, wheelarches, torsion tube areas, the nose structure and the boot floor all rot, and poorly repaired sills or floors show up as door fit and body alignment that will not come right. The pushrod flat-four is simple but unforgiving of neglect: worn valve guides, timing gear wear, low compression, main bearing wear from poor oil pressure and heat damage are the recurring themes, and a rebuild is quoted at $10,000 to $20,000 before anything unusual is found. The four-speed gearbox wears its synchromesh, second gear first, which shows as a baulk before the oil is warm, and rebuilds are expensive because parts are scarce. Drum-braked cars need regular adjustment and fade under sustained use, which is much of why the disc-braked 356 C is the easiest of the family to drive regularly. On Carrera cars the four-cam engine adds complexity and cost beyond most general workshops.",
 "valueTrajectory": "The 356 has behaved less like a speculative asset than a blue-chip one, and its price structure now separates by body and by engine rather than by year. As of August 2026, classic.com puts the all-variant average at $168,495 with 62 cars for sale, while the coupes that make up the bulk of the surviving population sit far lower - a 356 A coupe benchmark of $114,901 and a 356 C average of $117,084 - and remain the accessible end of the market. Open cars decoupled long ago, with the 356 A Speedster benchmark at $320,078. Movement now runs in both directions within one model line: as of August 2026 the 356 C Carrera 2 benchmark of $534,116 was trending up while Speedster benchmarks were trending down, which is the signature of a mature market rather than a rising one. The clearest structural pressure is the cost of putting a car right: corrosion repair here is structural by nature, and an engine rebuild starts in five figures.",
 "overallConfidence": "medium",
 "sources": [
  {
   "ref": "wikipedia-356",
   "title": "Porsche 356",
   "url": "https://en.wikipedia.org/wiki/Porsche_356",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "About 76,000 built; 1964 peak of 14,151; approximately 50 Gmund cars; 4,854 Speedsters; engine types 369/506/527/528/616; 95 hp SC; Reutter bought 1963."
  },
  {
   "ref": "porsche-gmuend",
   "title": "Made in Austria",
   "url": "https://newsroom.porsche.com/en/2019/history/porsche-911-magazine-episode-13-sports-car-dna-356-gmuend-19078.html",
   "publisher": "Porsche AG (Porsche Newsroom)",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "356 'No. 1' permit 8 June 1948; 44 coupes and eight cabriolets of the 356/2; Ferry's 500-car estimate; 'just under 78,000' built to 1965."
  },
  {
   "ref": "porsche-zuffenhausen",
   "title": "Porsche has been manufacturing in Zuffenhausen for 75 years",
   "url": "https://newsroom.porsche.com/en/2025/history/porsche-75-years-zuffenhausen-production-anniversary-39059.html",
   "publisher": "Porsche AG (Porsche Newsroom)",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "First German-built 356 on 6 April 1950; Reutter supplied finished bodies; 317 cars by end of 1950; Reutter bought 1963; roughly 78,000 built; 52 Austrian cars."
  },
  {
   "ref": "porsche-fuhrmann",
   "title": "The fantastic Fuhrmann engine",
   "url": "https://newsroom.porsche.com/en/history/porsche-356-a-cabriolet-1600-gs-carrera-four-cylinder-flat-engine-fuhrmann-koenigswellenmotor-peter-pohl-14802.html",
   "publisher": "Porsche AG (Porsche Newsroom)",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Type 547 by Ernst Fuhrmann, 1952; camshafts on vertical shafts with angular gears; 100 hp against 75 hp; fewer than 2,000 built; a rebuild of over 200 hours."
  },
  {
   "ref": "revs-final-356",
   "title": "Charlie Porsche - the Final 356",
   "url": "https://automedia.revsinstitute.org/charlie-porsche-the-final-356",
   "publisher": "Revs Institute (Revs Automedia)",
   "sourceType": "specialist",
   "reliability": "high",
   "notes": "Last 356 on 28 April 1965; ten more built May 1966 for the Royal Dutch Police; totals 7,627/21,045/30,963/16,668 with 126 Carrera 2; 76,303 overall."
  },
  {
   "ref": "elferspot-production",
   "title": "Porsche 356 production numbers - How many 356s were built?",
   "url": "https://www.elferspot.com/en/magazine/porsche-356-production-numbers-how-many-356s-were-built/",
   "publisher": "Elferspot",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "78,316 total; rows 9,100/20,541/31,811/16,811; Speedsters 1,234 Pre-A and 2,910 A; Convertible D 1,330; B Roadster 2,902; GS Carrera 2 126."
  },
  {
   "ref": "stuttcars-356",
   "title": "Porsche 356 - Ultimate Model Guide",
   "url": "https://www.stuttcars.com/porsche-model-research/porsche-356-research/",
   "publisher": "StuttCars",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "76,313 total; rows 7,627/21,045/30,963/16,678; first 50 cars at Gmund; outputs 60, 75 and 90 hp pushrod, 95 hp SC, 100 hp Carrera, 130 hp Carrera 2."
  },
  {
   "ref": "stuttcars-356c-sc",
   "title": "Porsche 356 C SC (1964 - 1965)",
   "url": "https://www.stuttcars.com/porsche-356-c-sc/",
   "publisher": "StuttCars",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "356 C SC: Type 616/16, 9.5:1, 91 lb-ft at 4,200 rpm, 0-60 in 11.0 s, 125 mph. Quotes 107 bhp at 5,200 rpm against 95 hp elsewhere."
  },
  {
   "ref": "stuttcars-buyers-guide",
   "title": "Porsche 356 Buyer's Guide: Everything You Need to Know",
   "url": "https://www.stuttcars.com/porsche-buyers-guides/porsche-356-buyers-guide/",
   "publisher": "StuttCars",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Rust hidden under undercoating; valve guide, timing gear, bearing and overheating faults; second-gear synchromesh; rebuilds $10,000-$20,000; Certificate of Authenticity."
  },
  {
   "ref": "pca-356-guide",
   "title": "Model Guide: 356 - The Simple Porsche",
   "url": "https://www.pca.org/news/model-guide-356-the-simple-porsche/q3595d8883q1721",
   "publisher": "Porsche Club of America",
   "sourceType": "club-forum",
   "reliability": "medium",
   "notes": "About 76,000 built, half to the US; approximately 60 Gmund cars; 4,145 Speedsters, 151 four-cam; Karmann drain holes in the longitudinals; 75 hp C, 95 hp SC; 3 mm panel gaps."
  },
  {
   "ref": "goodwood-guide",
   "title": "Porsche 356 buyer's guide",
   "url": "https://insurance.goodwood.com/buyers-guide/porsche-356/",
   "publisher": "Goodwood Classic Solutions",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Approximately 78,000 built, 52 aluminium cars before 1950; rust from floorpans and longitudinals to nose and boot floor; synchromesh after 1953; 356 C discs."
  },
  {
   "ref": "curbside-rt-1952",
   "title": "Vintage Road & Track Road Test: 1952 Porsche 356 1500",
   "url": "https://www.curbsideclassic.com/vintage-reviews/vintage-road-track-road-test-1951-porsche-356-1500-this-is-the-car-of-tomorrow/",
   "publisher": "Curbside Classic",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Period Road & Track test of the 1,488 cc 1500: 65 hp, 107 mph observed against a stated 104 mph, 27-35 mpg, 46/54 weight distribution."
  },
  {
   "ref": "supercars-356a-speedster",
   "title": "Porsche 356A/1600 Speedster (1956-1958)",
   "url": "https://www.supercars.net/blog/porsche-356a1600-speedster/",
   "publisher": "Supercars.net",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "356 A 1600 Speedster: 1,582 cc, 82.5 x 74 mm, 60 bhp at 4,500 rpm, 794 kg, 2,101 mm wheelbase, about 99 mph, 13.9 s to 60 mph, $2,995 new."
  },
  {
   "ref": "classic-356",
   "title": "Porsche 356 Market",
   "url": "https://www.classic.com/m/porsche/356/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of August 2026: average $168,495, 62 listed, high $1,650,000 (1951 Sauter Roadster, 20 August 2026), low $1,700 (15 July 2025)."
  },
  {
   "ref": "classic-356a",
   "title": "Porsche 356 A Market",
   "url": "https://www.classic.com/m/porsche/356/356-a/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of August 2026: 356 A benchmark $243,110, 12 listed, high $857,500 (15 August 2026); $320,078 Speedster, $196,422 Cabriolet, $114,901 Coupe."
  },
  {
   "ref": "classic-356b",
   "title": "Porsche 356 B Market",
   "url": "https://www.classic.com/m/porsche/356/356-b/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of August 2026: 356 B average $129,651 from 27 listings; high $265,000 (1961 Roadster, 3 July 2025)."
  },
  {
   "ref": "classic-356c",
   "title": "Porsche 356 C Market",
   "url": "https://www.classic.com/m/porsche/356/356-c/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of August 2026: 356 C average $117,084 from eleven listings; high $224,000 (1965 Coupe, Gooding Christie's, 15 August 2026)."
  },
  {
   "ref": "classic-356c-carrera2",
   "title": "Porsche 356 C Carrera 2 Market",
   "url": "https://www.classic.com/m/porsche/356/356-c/carrera/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of August 2026: Carrera 2 benchmark $534,116 trending up, average $430,079; high EUR 702,500 (28 January 2026); approximately 101 produced 1963-1964."
  },
  {
   "ref": "rm-mo25-speedster",
   "title": "1957 Porsche 356 A 1600 Speedster by Reutter, Monterey 2025",
   "url": "https://rmsothebys.com/auctions/mo25/lots/r0119-1957-porsche-356-a-1600-speedster-by-reutter/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold $423,000 with premium, Monterey, August 2025. Chassis 83352, completed 15 May 1957. Catalogue names the 356 A engines 616/1 and 616/2."
  },
  {
   "ref": "rm-mi25-speedster",
   "title": "1957 Porsche 356 A 1600 Speedster by Reutter, Miami 2025",
   "url": "https://rmsothebys.com/auctions/mi25/lots/r0049-1957-porsche-356-a-1600-speedster-by-reutter/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Not sold at Miami 2025 against $475,000-$575,000. Chassis 83411, built 31 May 1957 for Max Hoffman's New York dealership; cabin heating optional."
  },
  {
   "ref": "rm-tc26-carrera2",
   "title": "1964 Porsche 356 C Carrera 2 Coupe by Reutter, The Tegernsee Auction",
   "url": "https://rmsothebys.com/auctions/tc26/lots/r0003-1964-porsche-356-c-carrera-2-coupe-by-reutter/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold EUR 275,000 at Lake Tegernsee, 4 July 2026. Chassis 129595; one of only 101 Carrera 2 Coupes built for 1964; 587/1 and 587/2 crankcase halves."
  },
  {
   "ref": "rm-pa26-carrera2-cab",
   "title": "1963 Porsche 356 C Carrera 2 Cabriolet by Reutter, Paris 2026",
   "url": "https://rmsothebys.com/auctions/pa26/lots/r0082-1963-porsche-356-c-carrera-2-cabriolet-by-reutter/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold EUR 702,500 at Paris, January 2026. Chassis 159571, matching-numbers 1,966 cc Carrera 2. Catalogue states only thirty Cabriolets had the four-cam engine."
  }
 ],
 "claims": [
  {
   "section": "history",
   "claimText": "Porsche's design office moved from Stuttgart to Gmund in Carinthia in 1944, where the 356 'No. 1' received its operating permit on 8 June 1948 and the first coupe was completed that August; the first German-built car followed at Zuffenhausen on 6 April 1950, with steel bodies from Reutter, whose business Porsche bought outright in 1963.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "porsche-gmuend",
    "porsche-zuffenhausen",
    "wikipedia-356"
   ]
  },
  {
   "section": "production",
   "claimText": "Published totals for Porsche 356 production fall into two families that do not reconcile, one near 76,300 and one near 78,000, so no single figure is asserted here.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "revs-final-356",
    "stuttcars-356",
    "elferspot-production",
    "porsche-gmuend",
    "porsche-zuffenhausen",
    "wikipedia-356",
    "pca-356-guide",
    "goodwood-guide"
   ],
   "conflictNote": "Revs Institute states 76,303 (7,627 + 21,045 + 30,963 + 16,668). StuttCars states 76,313, the same first three rows with 16,678 for the 356 C. Wikipedia and the Porsche Club of America give about 76,000. Porsche's newsroom gives 'just under 78,000' in one article and roughly 78,000 in another, Goodwood approximately 78,000, and Elferspot 78,316. No source consulted reconciles the two families, so productionTotal is null."
  },
  {
   "section": "production",
   "claimText": "The number of cars built at Gmund in Austria before series production moved to Zuffenhausen is not settled, with published figures running from about 50 to about 60.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "porsche-gmuend",
    "porsche-zuffenhausen",
    "wikipedia-356",
    "pca-356-guide",
    "goodwood-guide",
    "stuttcars-356"
   ],
   "conflictNote": "Porsche's Gmund article states 44 coupes and eight cabriolets of the 356/2; its Zuffenhausen article states 52 units handcrafted in Austria, as does Goodwood. Wikipedia says approximately 50, StuttCars the first 50 cars, and the Porsche Club of America about 60. The sources do not say consistently whether they count complete cars, chassis or bodies, and none resolves the difference."
  },
  {
   "section": "production",
   "claimText": "Speedster production totals are disputed, with figures of 4,854 and 4,145 both in circulation for the 1954-1958 run.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "wikipedia-356",
    "pca-356-guide",
    "elferspot-production"
   ],
   "conflictNote": "Wikipedia states 4,854 Speedsters across all years. The Porsche Club of America states 4,145, of which 151 were four-cam Carreras. Elferspot's rows of 1,234 Pre-A and 2,910 356 A Speedsters sum to 4,144, close to the club figure and well short of Wikipedia's. Neither total is asserted here."
  },
  {
   "section": "production",
   "claimText": "Carrera 2 production counts do not add up across sources: 126 GS Carrera 2 cars are stated for the 356 C, while RM Sotheby's catalogues describe 101 Carrera 2 coupes for the 1964 model year alone plus thirty Carrera 2 cabriolets.",
   "confidence": "low",
   "status": "disputed",
   "sourceRefs": [
    "elferspot-production",
    "revs-final-356",
    "rm-tc26-carrera2",
    "rm-pa26-carrera2-cab",
    "classic-356c-carrera2"
   ],
   "conflictNote": "Elferspot and Revs Institute both give 126 GS Carrera 2 within the 356 C. RM Sotheby's Tegernsee catalogue states 101 Carrera 2 coupes built for 1964 and its Paris catalogue thirty cabriolets; classic.com states approximately 101 produced across 1963-1964. Coupes and cabriolets together exceed 126, and no source says whether it counts model years, calendar years or the 356 B and C runs separately."
  },
  {
   "section": "specs",
   "claimText": "Quoted output for the 356 C SC differs by source: 95 hp DIN in club and encyclopedia references, against 107 bhp at 5,200 rpm for the same Type 616/16 engine on StuttCars' dedicated SC page.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "pca-356-guide",
    "wikipedia-356",
    "stuttcars-356",
    "stuttcars-356c-sc"
   ],
   "conflictNote": "The Porsche Club of America gives 95 hp DIN, Wikipedia 95 hp, and StuttCars' own model guide 95 hp. StuttCars' 356 C SC page instead quotes 107 bhp at 5,200 rpm. No source consulted states which rating standard the higher figure uses, so both are reported and neither is preferred."
  },
  {
   "section": "history",
   "claimText": "The Speedster was created for the American market at the urging of Porsche's New York importer Max Hoffman, arriving in October 1954 with a cut-down removable windscreen, side curtains, lightweight seats and cabin heating listed as an option.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "pca-356-guide",
    "rm-mi25-speedster",
    "wikipedia-356"
   ]
  },
  {
   "section": "history",
   "claimText": "The Type 547 four-cam flat-four was drawn by Ernst Fuhrmann in 1952, with two overhead camshafts per bank driven by vertical shafts and angular gears; it reached the road in the 356 A Carrera 1500 GS from late 1955 at 100 hp against 75 hp for the strongest pushrod engine then offered, and fewer than 2,000 vertical-shaft engines were built in all.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "porsche-fuhrmann",
    "stuttcars-356",
    "pca-356-guide"
   ]
  },
  {
   "section": "specs",
   "claimText": "The 356 A introduced the 1,582 cc Type 616/1 and 616/2 pushrod flat-fours, quoted at 60 hp at 4,500 rpm for the 1600 and 75 hp for the 1600 Super, with a bore and stroke of 82.5 mm by 74 mm; the 356 A 1600 Speedster weighed 794 kg on a 2,101 mm wheelbase and was quoted at about 99 mph, 13.9 seconds to 60 mph and $2,995 new.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "rm-mo25-speedster",
    "wikipedia-356",
    "stuttcars-356",
    "supercars-356a-speedster"
   ]
  },
  {
   "section": "specs",
   "claimText": "Road & Track's period test of the 1,488 cc 356 1500 recorded 107 mph observed against a stated 104 mph capability, with 65 hp, 27-35 mpg and a 46/54 front-to-rear weight distribution.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "curbside-rt-1952"
   ]
  },
  {
   "section": "specs",
   "claimText": "The 356 C of July 1963 was the first 356 with Ate disc brakes at all four corners as standard, and its SC engine used a counterweighted crankshaft, short-skirt pistons and larger Solex carburettors, quoted at 91 lb-ft at 4,200 rpm on a 9.5:1 compression ratio.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "stuttcars-356c-sc",
    "goodwood-guide",
    "pca-356-guide"
   ]
  },
  {
   "section": "history",
   "claimText": "The last 356 was a white cabriolet built on 28 April 1965; the 912 replaced the model in Europe that month while SC models continued to sell in the United States to the end of the year, and ten further 356 C cars were built in May 1966 for the Royal Dutch Police. Annual output had peaked at 14,151 cars in 1964, far beyond Ferry Porsche's original expectation of around 500 sales.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "revs-final-356",
    "wikipedia-356",
    "porsche-gmuend"
   ]
  },
  {
   "section": "market",
   "claimText": "As of August 2026 classic.com records an average sale price of $168,495 across all Porsche 356 variants from 62 cars listed, a high of $1,650,000 for a 1951 Sauter Roadster on 20 August 2026 and a low of $1,700 on 15 July 2025; by series it shows a $243,110 benchmark for the 356 A, a $129,651 average for the 356 B and $117,084 for the 356 C, while within the 356 A the Speedster benchmark of $320,078 and cabriolet of $196,422 stand against $114,901 for a coupe, and four-cam cars sit in their own tier at a $534,116 Carrera 2 benchmark with a top result of $857,500 on 15 August 2026.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-356",
    "classic-356a",
    "classic-356b",
    "classic-356c",
    "classic-356c-carrera2"
   ]
  },
  {
   "section": "market",
   "claimText": "Recent auction results corroborate those benchmarks: RM Sotheby's sold a 1957 356 A 1600 Speedster by Reutter, chassis 83352, for $423,000 including premium at Monterey in August 2025, a 1964 Carrera 2 Coupe for EUR 275,000 at Tegernsee on 4 July 2026 and a 1963 Carrera 2 Cabriolet for EUR 702,500 at Paris in January 2026, while a 1957 Speedster went unsold at Miami in 2025 against a $475,000-$575,000 estimate.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "rm-mo25-speedster",
    "rm-tc26-carrera2",
    "rm-pa26-carrera2-cab",
    "rm-mi25-speedster"
   ]
  },
  {
   "section": "problems",
   "claimText": "Corrosion is the defining 356 fault and is structural rather than cosmetic, with floorpans, longitudinals, rockers, battery box, door bottoms, wings, wheelarches, torsion tube areas, nose and boot floor all vulnerable and thick undercoating routinely concealing poor repair; mechanically, worn valve guides, timing gear wear, low compression, main bearing wear and overheating damage recur, rebuilds are quoted at $10,000-$20,000, the gearbox wears its synchromesh second gear first, and drum-braked cars to 1963 need frequent adjustment and fade in use.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "goodwood-guide",
    "stuttcars-buyers-guide",
    "pca-356-guide"
   ]
  },
  {
   "section": "summary",
   "claimText": "Porsche issues a Certificate of Authenticity and a production specification document confirming chassis, engine and gearbox numbers, original colour and delivery details; matching numbers materially affect value, most sharply on Speedsters and Carreras.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "stuttcars-buyers-guide",
    "pca-356-guide"
   ]
  }
 ]
};
