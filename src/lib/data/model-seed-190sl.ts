/**
 * Researched model draft - Mercedes-Benz 190SL (W121 BII), 1955-1963.
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seed190sl = {
 "slug": "mercedes-benz/190sl",
 "make": "Mercedes-Benz",
 "model": "190SL",
 "generation": "W121 BII",
 "generationCode": "W121 BII",
 "trim": null,
 "yearStart": 1955,
 "yearEnd": 1963,
 "bodyStyles": [
  "2-door 2-seat roadster with folding soft top (chassis prefix 121.042)",
  "2-door 2-seat coupe with removable hardtop (chassis prefix 121.040)",
  "Roadster with factory hardtop (soft top plus removable hardtop)",
  "Competition-equipped roadster with aluminum doors and low Plexiglas screen (catalogued 1955 to spring 1956, very few built)"
 ],
 "engines": [
  "1,897 cc M121 BII inline four, cast-iron block, aluminum SOHC two-valve head, 85 x 83.6 mm bore and stroke, 8.5:1 compression, twin Solex 44 PHH two-barrel sidedraft carburetors; 105 hp (DIN) at 5,700 rpm and 105 lb-ft at 3,200 rpm per factory figures, quoted as 120 hp gross in US auction catalogs and as 125 hp in US-market advertising"
 ],
 "productionTotal": 25881,
 "productionNotes": "The total is the one number every source agrees on. The Mercedes-Benz Public Archive states that 25,881 cars were built in Sindelfingen between May 1955 and February 1963, and Sports Car Market, the Supercar Nostalgia technical guide and RM Sotheby's catalog copy all repeat 25,881. That figure includes the small run of competition-equipped cars and both the roadster (chassis prefix 121.042) and the hardtop coupe (121.040); no source consulted splits the total by body. The year-by-year picture is thinner. Sports Car Market, in a 2014 profile, gives 3,332 cars for 1957 and 1,551 for 1959, the low year of the run, and notes that the 104 cars listed against 1963 were actually built in 1962. Those are single-source figures and are carried here as such. The US share is the second thing a reader wants, and here the sources agree in kind but not in precision: the factory archive says only that the majority were destined for the US market, while Sports Car Market puts it at 70 percent, about 270 cars a month, close to the volume Max Hoffman had promised Daimler-Benz. RM Sotheby's describes a 1956 car as one of only 1,849 of that model year sold in the United States; no second source for that count was found, and no source gives US totals for the other model years. US list prices are documented for two points only. In 1955 Sports Car Market and RM Sotheby's Monterey catalog give $3,998 for the roadster and $4,295 with the removable hardtop, while two other RM Sotheby's catalogs give $3,840; that conflict is unresolved and is carried as a disputed claim. For 1958 Sports Car Market gives $5,020 on the East Coast and $5,129 on the West Coast, a single source. Because this car predates federal recall reporting, NHTSA holds no campaigns for it.",
 "notableTrims": [
  {
   "name": "190SL roadster, 1955-1959 (small-window hardtop era)",
   "note": "The early cars carry the details collectors check first: the original three-point engine mounting before January 1956, narrow door trim before March 1956, small taillights before June 1956, and the small-rear-window hardtop. The 1956 model year alone accounts for the 1,849 US cars RM Sotheby's cites."
  },
  {
   "name": "190SL coupe (121.040, hardtop only)",
   "note": "Sports Car Market identifies the 040 chassis prefix as a car supplied new with the hardtop only and no folding roof, against 042 for the roadster. Most have since gained a soft top, and a dealer quoted by SCM says the prefix makes no difference to value today."
  },
  {
   "name": "190SL with factory hardtop, from late 1959",
   "note": "The hardtop gained a larger wraparound rear window for cars built from about September or October 1959. A correct-period hardtop matters to concours judges, and the sources disagree on exactly when the change came (see the disputed claim)."
  },
  {
   "name": "Competition version (aluminum doors, Plexiglas screen)",
   "note": "Shown in the first brochures with light-alloy doors, a small Plexiglas windshield and leather bucket seats. Very few were built and the factory stopped advertising it after spring 1956. Any claimed example needs factory paperwork."
  },
  {
   "name": "Transverse third seat (\"kinder\" seat) cars",
   "note": "A factory option that put a small sideways seat behind the two buckets. Auction houses flag it as rare, and Gooding listed it as a highlight on a car sold at Pebble Beach in 2025."
  },
  {
   "name": "Late cars, 1960-1962 build",
   "note": "Recessed trunk handle and revised lock from 1960, rear bumper guards carrying the plate lights. The final 104 cars cataloged as 1963 were built in 1962 per Sports Car Market, so a true 1963-built 190SL is not something the sources support."
  }
 ],
 "specs": {
  "layout": "Front-engine, rear-wheel drive, two-seat roadster",
  "chassis": "Welded steel unit body and floor structure from the Ponton 180 sedan, shortened to a 94.5 in (2,400 mm) wheelbase, with a separate front subframe; aluminum doors, hood and trunk lid",
  "engine": "1,897 cc M121 BII SOHC inline four, cast-iron block, aluminum head, twin Solex 44 PHH carburetors",
  "bore_stroke": "85 x 83.6 mm, 8.5:1 compression",
  "power": "105 hp (DIN) at 5,700 rpm per factory figures; 120 hp gross per RM Sotheby's and Wikipedia; 125 hp in US-market advertising per Sports Car Market (disputed, see claims)",
  "torque": "105 lb-ft at 3,200 rpm (factory)",
  "transmission": "Four-speed manual, synchromesh on all forward gears; no automatic was offered",
  "weight": "2,560 lb dry per Wikipedia and about 2,600 lb per a US restorer; a UK technical guide quotes about 3,086 lb (1,400 kg), which matches the loaded weight Wikipedia lists rather than curb weight (disputed)",
  "acceleration": "0-60 mph in 13.3 seconds as quoted by Sports Car Market and RM Sotheby's; about 14 seconds to 62 mph per the factory figures in a UK guide",
  "top_speed": "110 mph factory claim; US advertising claimed 118 mph per Sports Car Market",
  "suspension": "Double wishbones and coil springs in front with anti-roll bar; single-joint low-pivot swing axle with coil springs at the rear",
  "brakes": "Four-wheel hydraulic drums with vacuum servo (ATE T50 booster standard from 1956)",
  "fuel_economy": "20 to 26 mpg on a 14.3-gallon tank per Sports Car Market",
  "us_price_1955": "$3,998 roadster and $4,295 with hardtop (Sports Car Market, RM Sotheby's Monterey 2023); $3,840 in two other RM Sotheby's catalogs (disputed)",
  "us_price_1958": "$5,020 East Coast, $5,129 West Coast (Sports Car Market, single source)",
  "production": "25,881, May 1955 to February 1963, Sindelfingen"
 },
 "summary": "The 190SL is the four-cylinder roadster Mercedes-Benz built alongside the 300SL because its New York importer, Max Hoffman, wanted a second, cheaper car to sell next to the Gullwing. Both were shown at the International Motor Sports Show in New York in February 1954, but the 190SL there was an untested prototype, and production did not start until May 1955. Underneath it is a shortened Ponton 180 sedan floor with a new 1,897 cc overhead-cam four on twin Solex 44 PHH carburetors, rated at 105 hp by the factory, 120 hp gross in US catalog copy and 125 hp in US advertising. It came as a roadster, as a coupe with a removable hardtop, or as a roadster with both tops, and listed at $3,998 in 1955 against $7,463 for the 300SL. Between 1955 and early 1963 the factory built 25,881, and Sports Car Market puts the US share at 70 percent. Today the car's economics turn on a single fact: a correct restoration costs more than the finished car is usually worth.",
 "history": "## Hoffman's second car\n\nThe 190SL exists because Max Hoffman, the New York importer who had pressed Stuttgart for a road-going 300SL, also wanted a cheaper two-seat open car to sell beside it. Sports Car Market credits the 190SL's production to Hoffman, who foresaw that the 300SL's competition record would translate into something he could easily sell in America, and Supercar Nostalgia records that Mercedes embarked on a rapid development program thanks to his sizeable pre-orders. The problem was time. When both cars were unveiled at the International Motor Sports Show in New York in February 1954, the Mercedes-Benz Public Archive notes, the 300SL was almost ready for series production while the 190SL was still a prototype that had been neither tested nor stylistically refined. The revised car appeared at Geneva in March 1955 without the prototype's hood scoop; pre-series cars were built from January 1955 and main-series production began that May.\n\n## A sedan underneath\n\nWhere the 300SL was a tubular space frame, the 190SL was built the way the passenger-car department built everything: a welded unit floor from the Ponton 180 sedan, shortened, with a separate front subframe and a single-joint swing axle at the rear borrowed from the 220 a. The engine was new, a 1,897 cc overhead-cam four that shared the 300SL six's 85 mm bore and went on to power the 190 sedans in detuned form. The factory quoted 105 hp at 5,700 rpm. Hoffman's advertising in the US claimed 125 hp and 118 mph, against 106 mph in European literature. Wikipedia records that Rudolf Uhlenhaut built six-cylinder prototypes in 1956 because the four was felt to be short of breath, and that the board approved a six-cylinder 220SL in 1957 which never reached production.\n\n## Roadster, coupe and the hardtop\n\nThe factory archive lists three versions: a roadster with a soft top and no hardtop, a coupe with a removable hardtop, and the coupe with a soft top as well. Sports Car Market reads the chassis prefix: 121.042 for a roadster, 121.040 for a car supplied with the hardtop only. The hardtop cost about $300 extra at launch, $4,295 against $3,998, and Sports Car Market says hardtops built after 1956 were steel rather than aluminum. For a short period the first brochures also showed a competition version with light-alloy doors and a small Plexiglas windshield, which the factory stopped advertising after spring 1956 once it was clear the car could not be homologated as a Gran Turismo.\n\n## Running changes and the US cars\n\nFrom January 1956 a revised subframe added two more engine supports. In March 1956 a wider chrome rail appeared on the door tops, and in June the larger taillights of the 220 a. In July 1957 the plate lights moved into the rear bumper guards, which the archive notes had until then been fitted as standard only on US-market cars. The hardtop gained its larger wraparound rear window late in the run; the archive dates it to October 1959. The trunk lock and a recessed handle followed in 1960. The last cars were built in February 1963 as production turned over to the 230SL.\n\n## What the period press said\n\nRoad & Track tested the car in its October 1955 issue and singled out the quality of design and workmanship, followed closely by the general feeling of solidity it conveyed, and concluded it was well worth the money. Sports Car Market's summary of the period figures is 110 mph and 13.3 seconds to 60 mph. It was never fast. It was a Mercedes-Benz with the 300SL's face at roughly half the 300SL's price, and that was the proposition Hoffman had sold to Stuttgart.",
 "marketNotes": "As of September 2026 classic.com puts its market benchmark for the 190SL at $108,565 with an average sale price of $111,491, and its highest recorded sale at $245,000 for a 1961 car on June 7, 2026; its lowest recorded figure, $4,704 in October 2024, is a project rather than a comparable. Individual US results show the spread. Gooding & Company sold a 1956 roadster restored by Bob Platz, with factory hardtop and the transverse third seat, for $156,800 at Pebble Beach in August 2025, offered without reserve against a $175,000-$225,000 estimate. RM Sotheby's sold a restored black 1957 car in Santa Monica in June 2017 for $126,500 including premium, which Sports Car Market reported at the time. Sports Car Market's 2017 analysis splits the market into four tiers: European-restored drivers at roughly $100,000, conserved original cars usually under $100,000, concours restorations above that, and rust-damaged project cars at the bottom. As of September 2026 these figures describe a market where condition and correctness, not body style or chassis prefix, set the price; a dealer quoted by Sports Car Market says a coupe or roadster prefix makes no difference to value. No 190SL lot page from Mecum or Barrett-Jackson was fetched for this research.",
 "whatToLookFor": "Structure first, because everything else on a 190SL can be bought. The car is a steel unit body with aluminum doors, hood and trunk lid, and a US restorer notes it was rust-prone from the beginning and never adequately protected. The places to look are the trunk floor and footwells, the rear trailing arm and rear spring mounts, the wheel arches, the frame sections and around the drain holes, ideally with the car on a lift. Panels were fitted to individual bodies and stamped with the body number, as were seats and door trims, so matching stamps are the quickest test of how much of the car is original. Sports Car Market's 2017 profile gives the tells of a cheap restoration: American worm-drive hose clamps where the factory used Beru cotter-pin clamps, Weber or Mikuni carburetors in place of the Solexes, and a generic leather kit. Its 2014 profile notes original airboxes are often missing. Check the chassis prefix (040 coupe, 042 roadster) against the tops the car comes with, and the hardtop's rear window size against the build date, since the larger window arrived in late 1959. Early cars should show the January 1956 engine mounting change only if built after it; a data card copy, which several auction lots carry, settles color, trim and original options. On the road, the four-speed is fully synchronized and should not crunch, though a long lever with some play is normal. Drum brakes that pull or sit low need shoe adjustment, and a tired T50 brake booster is a known weak point.",
 "commonProblems": "The two trouble spots a US restorer names are the Solex carburetors and the old-fashioned T50 power brake booster. The Solex 44 PHH problems are specific. The carburetors share mounting studs with the cast-iron exhaust manifold, so the aluminum intake joint loosens and leaks air, causing poor idle; Solex revised the mounting flanges five times during production to address it. Throttle spindles wear, letting the butterflies chatter and cut grooves in the bores, which takes machining to fix. Idle adjustment acts on only one of each carburetor's two barrels, and flat spots need accelerator-pump linkage work that is hard to reach with the carburetors installed. Poor rebuilds bring rough running and heavy fuel consumption, which is why many cars wear Weber DCOE conversions; originality-minded buyers and judges count that against a car. Water pumps leak, and ignored leaks have led to overheating and head gasket failure. Front springs sag, rear spring mounts corrode badly, and worn bushings and dampers make the car wallow. Rust is the expensive problem: comprehensive body repair was often not economic in the 1970s and early 1980s, when Sports Car Market says a tired car could be had for under $1,000, so many survivors carry old patch work under fresh paint.",
 "valueTrajectory": "The 190SL's value has followed the 300SL's, at a distance. In the mid-1970s to mid-1980s a used-up car could be bought for under $1,000 and a decent one for about $2,500, Sports Car Market recorded, and in 2001 the best restored cars had just topped $60,000. By 2004 roughly $50,000 was normal for a good car; by 2014 the best had quadrupled, and Sports Car Market wrote in 2017 that the 2010-2014 gains had tapered off with the best cars settling near 10 percent of a 300SL. As of September 2026 classic.com's benchmark is $108,565. The restoration arithmetic has not moved with it. RM Sotheby's catalog for a 1956 car records a body-off restoration of 2,200 hours costing more than $230,000, and a 2019 ClassicCars.com column put concours-level work at over $200,000 on a car being offered at $125,000. Sports Car Market's line is that a correct concours restoration still cannot be done at a profit. The cars that hold value are the ones somebody else already paid to restore.",
 "overallConfidence": "medium",
 "sources": [
  {
   "ref": "mb-archive",
   "title": "Type 190 SL (W 121), 1955 - 1963",
   "url": "https://mercedes-benz-publicarchive.com/marsClassic/en/instance/ko/Type-190-SL-W-121-1955---1963.xhtml?oid=4656",
   "publisher": "Mercedes-Benz Public Archive",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Factory history: New York show February 1954 with the 190SL still an untested prototype; pre-series January 1955, main series May 1955; three versions (roadster, coupe with hardtop, coupe with hardtop and soft top); competition version not advertised after spring 1956; running changes January 1956, March 1956, June 1956, July 1957 (rear bumper guards previously standard on US models only), October 1959 hardtop window, 1960 trunk lock; 25,881 built May 1955 to February 1963 in Sindelfingen, majority for the US market."
  },
  {
   "ref": "scm-two-190sl",
   "title": "Two Mercedes-Benz 190SL Cars, One Price Gap",
   "url": "https://www.sportscarmarket.com/profile/two-mercedes-benz-190sl-cars-one-price-gap",
   "publisher": "Sports Car Market",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "2014 profile: Hoffman credited with the car; $3,998 soft top or $4,295 with hardtop at launch, hardtop about $300 extra; 25,881 built, 70 percent to the US, about 270 a month; chassis prefix 040 coupe (hardtop only) vs 042 roadster; hardtops after 1956 steel; 1,551 built in 1959 vs 3,332 in 1957, 104 cars listed as 1963 built in 1962; Solexes often replaced by K&N filters or Weber DCOEs; $50,000 the norm about 2004. European 2014 sale results not used."
  },
  {
   "ref": "scm-1958-roadster",
   "title": "1958 Mercedes-Benz 190SL Roadster",
   "url": "https://www.sportscarmarket.com/profile/1958-mercedes-benz-190sl-roadster",
   "publisher": "Sports Car Market",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "2001 profile by Dave Kinney: 110 mph and 0-60 mph in 13.3 seconds; 20-26 mpg on a 14.3-gallon tank; 105 DIN hp at 5,700 rpm; US advertising stated 125 hp and 118 mph vs European 106 mph; hardtop wraparound window after September 1959; 1958 US price $5,020 East Coast and $5,129 West Coast; steel body with aluminum doors, hood and trunk lid; under $1,000 in the mid-1970s to mid-1980s; best cars topped $60,000 in 2001. Its Christie's London result is not used."
  },
  {
   "ref": "scm-1957-rm-2017",
   "title": "1957 Mercedes-Benz 190SL (RM Sotheby's Santa Monica 2017)",
   "url": "https://sportscarmarket.com/?p=607831",
   "publisher": "Sports Car Market",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Profile of a 1957 car sold for $126,500 including commission at RM Sotheby's Santa Monica on June 24, 2017; 2010-2014 gains tapered; four market tiers (European-restored drivers about $100k, conserved cars under $100k, concours, projects); hot-rod-shop restoration tells (American hose clamps, Weber or Mikuni carbs, generic leather); Beru cotter-pin clamps; a correct concours restoration cannot be done at a profit."
  },
  {
   "ref": "supercar-nostalgia",
   "title": "Guide: Mercedes-Benz W121 190 SL",
   "url": "https://supercarnostalgia.com/blog/mercedes-benz-w121-190-sl",
   "publisher": "Supercar Nostalgia",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Technical appraisal: Hoffman's lobbying and pre-orders; New York debut February 1954; M121 B2 engine 1,897 cc, 85 x 83.6 mm, 8.5:1, twin Solex 44 PHH; factory 105 hp at 5,700 rpm and 105 lb-ft at 3,200 rpm; 1,400 kg weight figure; 110 mph and 0-62 mph in 14 seconds; competition version; dates the hardtop window enlargement to a month after July 1957; production ended February 1963 at 25,881. UK site; used for engineering and dates, not values."
  },
  {
   "ref": "rm-monterey-2023",
   "title": "1956 Mercedes-Benz 190 SL | Monterey 2023",
   "url": "https://rmsothebys.com/auctions/mo23/lots/r0021-1956-mercedesbenz-190-sl",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Catalog: introduced at the New York Auto Show 1954; advertised price $3,998 in 1955 vs $7,463 for the 300SL; outsold the 300SL about eight to one; this car one of 1,849 1956 model year cars sold in the US; body-off restoration over four years, 2,200 hours, more than $230,000. Sale price not rendered in page text and not used."
  },
  {
   "ref": "rm-elkhart",
   "title": "1955 Mercedes-Benz 190 SL | The Elkhart Collection",
   "url": "https://rmsothebys.com/auctions/el20/lots/r0113-1955-mercedesbenz-190-sl/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Catalog: W121 developed by the passenger-car team on the Ponton sedans; offered with soft top, hardtop, or both; marketed 1955 to 1963 alongside the 300SL; quotes Road & Track 1955 on quality of design and workmanship and feeling of solidity."
  },
  {
   "ref": "rm-monterey-2019",
   "title": "1957 Mercedes-Benz 190 SL | Monterey 2019",
   "url": "https://rmsothebys.com/auctions/mo19/lots/r0014-1957-mercedesbenz-190-sl",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Catalog: 120 hp 1.9-liter four shared with the Type 180 sedan; $3,840 new in 1955, half the 300SL price; 25,881 built; 110 mph, 0-60 mph in 13.3 seconds, up to 26 mpg."
  },
  {
   "ref": "rm-monaco-2015",
   "title": "1960 Mercedes-Benz 190 SL | Monaco 2015",
   "url": "https://rmsothebys.com/auctions/mo15/lots/r124-1960-mercedesbenz-190-sl/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Catalog spec block: 120 hp 1,897 cc four, synchronized four-speed, swing-axle rear, servo-assisted four-wheel drums, 94.5 in wheelbase; $3,840 new in 1955; factory claimed 110 mph and 0-60 mph in 13.3 seconds; optional kinder third seat."
  },
  {
   "ref": "gooding-pb-2025",
   "title": "1956 Mercedes-Benz 190 SL | Gooding Christie's",
   "url": "https://www.goodingco.com/lot/1956-mercedes-benz-190-sl-1",
   "publisher": "Gooding & Company",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Pebble Beach Auctions 2025, lot 121: chassis 121.042.6502590, sold $156,800 without reserve against a $175,000-$225,000 estimate; Bob Platz restoration, AACA Grand National winner, factory hardtop, rare transverse third seat; servo-assisted hydraulic drum brakes, wishbone front and swing-axle rear suspension."
  },
  {
   "ref": "silver-star",
   "title": "Mercedes-Benz 190SL",
   "url": "https://silverstarrestorations.com/190sl.htm",
   "publisher": "Silver Star Restorations",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "US 190SL restorer's buyer page: quotes Road & Track October 1955 test; steel unit body with aluminum hood, trunk lid, doors and dash, almost 2,600 lb; running change list (ATE T50 brake servo standard); only trouble spots are the Solex carburetors and T-50 brake boosters; rust-prone from new and never adequately protected; inspect on a lift. Its 2019 value table is not used."
  },
  {
   "ref": "classic-com-w121",
   "title": "Mercedes-Benz 190SL - W121 Market",
   "url": "https://www.classic.com/m/mercedes-benz/sl/w121/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of September 2026: market benchmark $108,565, average sale price $111,491, lowest recorded $4,704 on October 28, 2024, highest $245,000 for a 1961 car on June 7, 2026; model years 1955 to 1963. Fetched through a reader; likely blocked to the quote checker."
  },
  {
   "ref": "classiccars-journal-2019",
   "title": "Pick of the Day: 1958 Mercedes-Benz 190 SL",
   "url": "https://journal.classiccars.com/?p=237048",
   "publisher": "ClassicCars.com Journal",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Andy Reid column on a 1958 car advertised at $125,000: these are expensive cars to restore and reaching that level would likely cost in excess of $200,000; twin Solex carburetors and four-speed manual."
  },
  {
   "ref": "sl-shop-solex",
   "title": "Solex or Weber carburettors for 190 SL",
   "url": "https://www.theslshop.com/journal/2024/07/04/solex-or-weber-carburettors-for-190-sl/",
   "publisher": "SL Shop",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Specialist tech article: Solex 44 PHH developed with Mercedes for the 190SL; shared studs with the cast-iron exhaust manifold cause intake air leaks and poor idle; Solex strengthened the mounting flanges five times during production; spindle wear and butterfly chatter need machining; idle adjustment works on one barrel only; flat spots; Weber DCOE conversion. UK shop; used for fault patterns only, no prices."
  },
  {
   "ref": "petrolicious-guide",
   "title": "Mercedes 190SL Buying Guide",
   "url": "https://petrolicious.com/blogs/articles/mercedes-190sl-buying-guide",
   "publisher": "Petrolicious",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Buying guide: Hoffman persuaded Daimler management; Solex carbs give issues if poorly rebuilt, Weber conversions; water pump leaks leading to head gasket failure; fully synchronized four-speed; front springs sag, rear spring mounts corrode; rust areas (trunk, footwells, trailing arm mounts, arches, drain holes); body-number stamping on panels and trim; states hardtop cars had no separate soft top."
  },
  {
   "ref": "supercars-net",
   "title": "1955-1963 Mercedes-Benz 190SL",
   "url": "https://www.supercars.net/blog/?p=210946",
   "publisher": "Supercars.net",
   "sourceType": "journalism",
   "reliability": "low",
   "notes": "Model article repeating the launch price as $3,998, or $4,295 with hardtop (with DM 16,500 and DM 17,650), alongside reprinted RM catalog text giving $3,840 and 120 hp. Used only to show both prices circulate; its undated sale list is not used."
  },
  {
   "ref": "wikipedia-190sl",
   "title": "Mercedes-Benz 190 SL",
   "url": "https://en.wikipedia.org/wiki/Mercedes-Benz_190_SL",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Pointer: 105 PS (104 hp) DIN and 120 hp gross; dry weight 1,160 kg (2,560 lb) and loaded weight 1,400 kg (3,100 lb); $3,998 and $4,295 launch prices; Uhlenhaut six-cylinder prototypes in 1956 and the W127 220SL approved in 1957 but never built. Not the sole support for any contested figure."
  }
 ],
 "claims": [
  {
   "section": "production",
   "claimText": "Mercedes-Benz built 25,881 190SLs in Sindelfingen between May 1955 and February 1963, the majority for the US market.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "mb-archive",
    "supercar-nostalgia",
    "scm-1958-roadster"
   ],
   "evidence": [
    {
     "ref": "mb-archive",
     "quote": "Between May 1955 and February 1963, as much as 25,881 cars were built in Sindelfingen, the majority of which were destined for the US market."
    },
    {
     "ref": "supercar-nostalgia",
     "quote": "Production ended in February 1963. By this time, 25,881 examples of the 190 SL had been manufactured."
    },
    {
     "ref": "scm-1958-roadster",
     "quote": "Totals reached 25,881 190SLs before production ended in February 1963, when the switchover to the 230SL started."
    }
   ]
  },
  {
   "section": "production",
   "claimText": "Sports Car Market puts the US share at 70 percent of production, about 270 cars a month, while the factory archive says only that the majority went to the US.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "scm-two-190sl",
    "mb-archive"
   ],
   "evidence": [
    {
     "ref": "scm-two-190sl",
     "quote": "Ultimately, 25,881 Mercedes-Benz 190SLs were produced. That works out to 270 cars every month — with 70% being delivered to the U.S."
    },
    {
     "ref": "mb-archive",
     "quote": "the majority of which were destined for the US market"
    }
   ]
  },
  {
   "section": "production",
   "claimText": "Sports Car Market gives 3,332 cars built in 1957 and 1,551 in 1959, the lowest year, and says the 104 cars listed against 1963 were built in 1962; these year figures are single-source.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "scm-two-190sl"
   ],
   "evidence": [
    {
     "ref": "scm-two-190sl",
     "quote": "Only 1,551 cars were produced in 1959, as opposed to 3,332 in 1957."
    }
   ]
  },
  {
   "section": "production",
   "claimText": "RM Sotheby's describes a 1956 car as one of 1,849 examples of that model year sold in the United States; no second source for this count was found.",
   "confidence": "low",
   "status": "unverified",
   "sourceRefs": [
    "rm-monterey-2023"
   ],
   "evidence": [
    {
     "ref": "rm-monterey-2023",
     "quote": "is believed to be one of only 1,849 examples from that model year sold in the United States"
    }
   ]
  },
  {
   "section": "history",
   "claimText": "Max Hoffman, Mercedes-Benz's New York importer, pushed for the 190SL as a cheaper companion to the 300SL, and his pre-orders drove a rapid development program.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "scm-two-190sl",
    "supercar-nostalgia",
    "petrolicious-guide"
   ],
   "evidence": [
    {
     "ref": "scm-two-190sl",
     "quote": "Production of the Mercedes-Benz 190SL Roadster can be credited to New York importer Max Hoffman"
    },
    {
     "ref": "supercar-nostalgia",
     "quote": "Both vehicles made their international debut at the New York Motor Show in February 1954 with Mercedes having embarked on a rapid development programme thanks to Hoffman’s sizeable pre orders."
    },
    {
     "ref": "petrolicious-guide",
     "quote": "Building on the back of the 300SL’s racing successes, American importer Max Hoffman convinced the Daimler management"
    }
   ]
  },
  {
   "section": "history",
   "claimText": "At the February 1954 New York show the 300SL was nearly ready for production but the 190SL was still a prototype; pre-series production began in January 1955 and main-series production in May 1955.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "mb-archive",
    "supercar-nostalgia"
   ],
   "evidence": [
    {
     "ref": "mb-archive",
     "quote": "which took place in February 1954 in New York. While the 300 SL was almost ready for serial production, the 190 SL model was still a prototype"
    },
    {
     "ref": "supercar-nostalgia",
     "quote": "The first pre-series examples of the 190 SL were assembled in January 1955 and the production version was displayed at the Geneva Show in March."
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The US launch price is disputed: $3,998 for the roadster (and $4,295 with hardtop) per Sports Car Market, one RM Sotheby's catalog and Supercars.net, against $3,840 in two other RM Sotheby's catalogs.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "scm-two-190sl",
    "rm-monterey-2023",
    "supercars-net",
    "rm-monterey-2019",
    "rm-monaco-2015"
   ],
   "conflictNote": "Sports Car Market (2014), RM Sotheby's Monterey 2023 catalog and Supercars.net give $3,998 for the 1955 roadster. RM Sotheby's Monterey 2019 and Monaco 2015 catalogs give $3,840 new in 1955. No period price sheet was found to settle which was the US list price, or whether the two figures reflect different ports of entry or dates. Unresolved.",
   "evidence": [
    {
     "ref": "scm-two-190sl",
     "quote": "A production version was launched at Geneva in 1955, retailing for $3,998 with a soft top or $4,295 with an additional removable hard top."
    },
    {
     "ref": "rm-monterey-2023",
     "quote": "With an advertised price of $3,998 in 1955 versus $7,463 for the 300 SL, the 190 SL outsold its bigger brother by about eight to one."
    },
    {
     "ref": "supercars-net",
     "quote": "Price for the car was DM 16,500/US$ 3,998 or DM 17,650/$ 4,295 with the optional hardtop."
    },
    {
     "ref": "rm-monterey-2019",
     "quote": "at just $3,840 new in 1955, the 190 SL was half the price"
    },
    {
     "ref": "rm-monaco-2015",
     "quote": "At $3,840 new in 1955, it was half the price of its muscular sibling"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "In 1958 the 190SL listed at $5,020 on the East Coast and $5,129 on the West Coast, per Sports Car Market; this is a single-source figure.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "scm-1958-roadster"
   ],
   "evidence": [
    {
     "ref": "scm-1958-roadster",
     "quote": "With a cost new in 1958 of $5,020 (East coast) or $5,129 (West coast)"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The rated output of the 190SL is disputed by source and rating method: 105 hp (DIN) at 5,700 rpm per factory figures, 120 hp gross in RM Sotheby's catalogs and Wikipedia, and 125 hp with a 118 mph top speed in US-market advertising per Sports Car Market.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "supercar-nostalgia",
    "scm-1958-roadster",
    "rm-monterey-2019",
    "wikipedia-190sl"
   ],
   "conflictNote": "The factory figure is 105 hp DIN at 5,700 rpm (Supercar Nostalgia, Sports Car Market). RM Sotheby's catalogs and Wikipedia give 120 hp, Wikipedia calling it a gross figure. Sports Car Market reports US advertising at 125 hp and 118 mph against a European claim of 106 mph. Which figure appeared on US window stickers in which year is not resolved by any source consulted.",
   "evidence": [
    {
     "ref": "supercar-nostalgia",
     "quote": "The factory quoted a peak output of 105bhp at 5700rpm and 105lb-ft 3200rpm."
    },
    {
     "ref": "scm-1958-roadster",
     "quote": "Advertising for the US version stated 125 horsepower and a top speed of 118 mph versus the European claims for 106 mph."
    },
    {
     "ref": "rm-monterey-2019",
     "quote": "the 190 SL shared the 120-horsepower, 1.9-liter four-cylinder engine and running gear from the Type 180 sedan"
    },
    {
     "ref": "wikipedia-190sl",
     "quote": "was fitted with twin-choke dual Solex carburetors, and produced gross 120 hp"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "Curb weight is disputed: about 2,560 lb dry per Wikipedia and almost 2,600 lb per a US restorer, against about 3,086 lb (1,400 kg) in the Supercar Nostalgia guide, which matches the loaded weight Wikipedia lists.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "wikipedia-190sl",
    "silver-star",
    "supercar-nostalgia"
   ],
   "conflictNote": "Wikipedia gives 2,560 lb dry and 3,100 lb loaded; Silver Star Restorations gives almost 2,600 lb; Supercar Nostalgia gives 3,086 lb (1,400 kg) as the standard curb weight. The 3,086 lb figure may be the loaded weight, but no source consulted states the factory curb weight definitively. Unresolved.",
   "evidence": [
    {
     "ref": "wikipedia-190sl",
     "quote": "Dry weight: 1,160 kg (2,560 lb) (Hardtop: + 20 kg (44 lb) ) Loaded weight: 1,400 kg (3,100 lb)"
    },
    {
     "ref": "silver-star",
     "quote": "Even with those aluminum pieces, it was a heavy car, weighing in at almost 2600 lbs"
    },
    {
     "ref": "supercar-nostalgia",
     "quote": "The standard 190 SL had a kerb weight of 1400kg."
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "Period performance figures quoted by Sports Car Market and RM Sotheby's are a 110 mph top speed and 0-60 mph in 13.3 seconds.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "scm-1958-roadster",
    "rm-monaco-2015"
   ],
   "evidence": [
    {
     "ref": "scm-1958-roadster",
     "quote": "All this gave the car good performance with a top speed of 110 mph and 0 to 60 in 13.3 seconds."
    },
    {
     "ref": "rm-monaco-2015",
     "quote": "The factory claimed a top speed of 110 mph, with 0–60 mph times of 13.3 seconds"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The engine is a 1,897 cc overhead-cam four with an 85 mm bore and 83.6 mm stroke, 8.5:1 compression and twin Solex 44 PHH carburetors, driving a four-speed fully synchronized manual gearbox.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "supercar-nostalgia",
    "rm-monaco-2015",
    "petrolicious-guide"
   ],
   "evidence": [
    {
     "ref": "supercar-nostalgia",
     "quote": "Displacement was 1897cc. Like the 300 SL, bore diameter came in at 85mm. The stroke was reduced by 4.3mm to 83.6mm."
    },
    {
     "ref": "rm-monaco-2015",
     "quote": "120 hp, 1,897 cc OHV inline four-cylinder engine, synchronized four-speed manual transmission"
    },
    {
     "ref": "petrolicious-guide",
     "quote": "The four-speed manual gearbox offers full synchromesh on all forward gears"
    }
   ]
  },
  {
   "section": "history",
   "claimText": "The 190SL was offered as a roadster with soft top, as a coupe with removable hardtop, or as a coupe with both; Sports Car Market reads chassis prefix 040 as a hardtop-only coupe and 042 as a roadster, and says the hardtop cost about $300 extra at launch.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "mb-archive",
    "scm-two-190sl",
    "petrolicious-guide"
   ],
   "conflictNote": "The Mercedes-Benz Public Archive says a hardtop coupe could be ordered with or without a soft top as well. Petrolicious states flatly that hardtop cars had no separate soft top, and Sports Car Market reads the 040 prefix as hardtop only. Whether every 040 car left the factory without a soft top is not resolved by any source consulted.",
   "evidence": [
    {
     "ref": "mb-archive",
     "quote": "as roadster with a hood, but without a hardtop, as a coupé with removable hardtop, optionally with or without a hood"
    },
    {
     "ref": "scm-two-190sl",
     "quote": "The car has a coupe chassis prefix — 040 — where roadsters are 042. That means it was originally supplied with a hard top only and no convertible roof."
    },
    {
     "ref": "petrolicious-guide",
     "quote": "Cars with removable hardtops did not have a separate convertible soft-top."
    }
   ]
  },
  {
   "section": "history",
   "claimText": "The date the hardtop gained its larger rear window is disputed: October 1959 per the factory archive and after September 1959 per Sports Car Market, against August 1957 in the Supercar Nostalgia guide.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "mb-archive",
    "scm-1958-roadster",
    "supercar-nostalgia"
   ],
   "conflictNote": "The Mercedes-Benz Public Archive dates the larger hardtop window to October 1959 and Sports Car Market to cars built after September 1959. Supercar Nostalgia places it a month after the July 1957 plate-light change, which is August 1957. The two 1959 sources agree with each other, but the conflict with the 1957 date is not resolved by any source consulted.",
   "evidence": [
    {
     "ref": "mb-archive",
     "quote": "From October 1959 the coupés were equipped with a new hardtop with enlarged rear window"
    },
    {
     "ref": "scm-1958-roadster",
     "quote": "Earlier versions had a small rear window, while cars built after September 1959 adopted a wrap-around style"
    },
    {
     "ref": "supercar-nostalgia",
     "quote": "A month later, the hardtop rear window was enlarged to improve cockpit visibility."
    }
   ]
  },
  {
   "section": "history",
   "claimText": "Until July 1957 rear bumper guards were standard only on US-market cars; from then the plate lights moved into the guards and they became standard everywhere.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "mb-archive",
    "supercar-nostalgia"
   ],
   "evidence": [
    {
     "ref": "mb-archive",
     "quote": "Thus the rear bumper guards, which before had been serially fitted on the US-models only, now became part of the basic equipment"
    },
    {
     "ref": "supercar-nostalgia",
     "quote": "To accommodate wider rear number plates that were being introduced, plate illumination was changed in July 1957."
    }
   ]
  },
  {
   "section": "history",
   "claimText": "A competition version with light-alloy doors and a small Plexiglas windshield appeared in the first brochures and was no longer advertised after spring 1956.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "mb-archive",
    "supercar-nostalgia"
   ],
   "evidence": [
    {
     "ref": "mb-archive",
     "quote": "a 190 SL with more pronounced sports-car characteristics with light-metal sports-car doors and a small plexiglass wind screen was no longer advertised after spring 1956"
    },
    {
     "ref": "supercar-nostalgia",
     "quote": "Very few such cars were built and the model was no longer advertised after the spring of 1956."
    }
   ]
  },
  {
   "section": "history",
   "claimText": "Road & Track's October 1955 test singled out the 190SL's quality of design and workmanship and its feeling of solidity.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "silver-star",
    "rm-elkhart"
   ],
   "evidence": [
    {
     "ref": "silver-star",
     "quote": "The Road & Track October 1955 Test said \"The outstanding achievement of the 190SL is without a doubt"
    },
    {
     "ref": "rm-elkhart",
     "quote": "In 1955 Road & Track wrote, The outstanding achievement of the 190 SL is its quality in design and workmanship"
    }
   ]
  },
  {
   "section": "history",
   "claimText": "Six-cylinder 190SL prototypes were built in 1956 and the board approved a six-cylinder W127 220SL in 1957 that never reached production; this rests on Wikipedia alone.",
   "confidence": "low",
   "status": "unverified",
   "sourceRefs": [
    "wikipedia-190sl"
   ],
   "evidence": [
    {
     "ref": "wikipedia-190sl",
     "quote": "In 1956, a few six-cylinder prototypes were built for testing."
    }
   ]
  },
  {
   "section": "market",
   "claimText": "As of September 2026 classic.com gives a market benchmark of $108,565, an average sale price of $111,491 and a highest recorded sale of $245,000 for a 1961 car on June 7, 2026.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "classic-com-w121"
   ],
   "evidence": [
    {
     "ref": "classic-com-w121",
     "quote": "The average price of a Mercedes Benz Sl - W121 is $111,491."
    }
   ]
  },
  {
   "section": "market",
   "claimText": "Gooding & Company sold a restored 1956 190SL with factory hardtop and transverse third seat for $156,800 at its 2025 Pebble Beach sale, offered without reserve against a $175,000-$225,000 estimate.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "gooding-pb-2025"
   ],
   "evidence": [
    {
     "ref": "gooding-pb-2025",
     "quote": "Pebble Beach Auctions 1956 Mercedes-Benz 190 SL SOLD $156,800 Estimate $175,000 - $225,000 | Without Reserve"
    }
   ]
  },
  {
   "section": "market",
   "claimText": "A restored 1957 190SL sold for $126,500 including premium at RM Sotheby's Santa Monica on June 24, 2017, and Sports Car Market judged that the 2010-2014 gains had tapered off.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "scm-1957-rm-2017"
   ],
   "evidence": [
    {
     "ref": "scm-1957-rm-2017",
     "quote": "This car, Lot 160, sold for $126,500, including buyer’s commission, at RM Sotheby’s Santa Monica, CA, auction on June 24, 2017."
    }
   ]
  },
  {
   "section": "market",
   "claimText": "A concours-level 190SL restoration costs more than $200,000, more than a typical restored car sells for, and Sports Car Market says one cannot be done at a profit.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "rm-monterey-2023",
    "classiccars-journal-2019",
    "scm-1957-rm-2017"
   ],
   "evidence": [
    {
     "ref": "rm-monterey-2023",
     "quote": "The four-year process took marque experts 2,200 hours to complete at a cost of more than $230,000."
    },
    {
     "ref": "classiccars-journal-2019",
     "quote": "these are expensive cars to restore, and getting a 190 SL to this level of quality would likely cost in excess of $200,000."
    },
    {
     "ref": "scm-1957-rm-2017",
     "quote": "The sad truth is that you still can’t perform a correct, concours-level restoration of a 190SL and generate a profit."
    }
   ]
  },
  {
   "section": "market",
   "claimText": "In the mid-1970s to mid-1980s a used-up 190SL could be bought for under $1,000, and Sports Car Market wrote in 2014 that about $50,000 had been the norm ten years earlier.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "scm-1958-roadster",
    "scm-two-190sl"
   ],
   "evidence": [
    {
     "ref": "scm-1958-roadster",
     "quote": "At their lowest price, in the mid-1970s to the mid-1980s, you could find a rundown, used-up example for less than $1,000"
    },
    {
     "ref": "scm-two-190sl",
     "quote": "Only 10 years ago, $50k was the norm, which means these cars have quadrupled in price in just a decade."
    }
   ]
  },
  {
   "section": "problems",
   "claimText": "The Solex 44 PHH carburetors share mounting studs with the cast-iron exhaust manifold, causing intake air leaks and poor idle, and Solex strengthened the mounting flanges five times during production; poor rebuilds bring rough running and heavy fuel use.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "sl-shop-solex",
    "petrolicious-guide",
    "silver-star"
   ],
   "evidence": [
    {
     "ref": "sl-shop-solex",
     "quote": "In Period Solex strengthened the rigidity of the mounting flanges a total of five different times during the production"
    },
    {
     "ref": "petrolicious-guide",
     "quote": "The twin Solex carburettors can give issues if not correctly set up and poor rebuilds tend to cause rough running and heavy consumption."
    },
    {
     "ref": "silver-star",
     "quote": "The only trouble spots are the Solex carburetors and the old-fashioned T-50 power brake boosters."
    }
   ]
  },
  {
   "section": "problems",
   "claimText": "Many 190SLs have had their Solexes replaced by Weber DCOE carburetors or aftermarket filters, and non-original carburetors and American hose clamps are signs of a low-grade restoration.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "scm-two-190sl",
    "scm-1957-rm-2017",
    "sl-shop-solex"
   ],
   "evidence": [
    {
     "ref": "scm-two-190sl",
     "quote": "where very often the twin Solexes wear aftermarket K&N filters — or even Weber DCOE replacements"
    },
    {
     "ref": "scm-1957-rm-2017",
     "quote": "Underhood, one often sees American hose clamps and Weber or Mikuni carbs, along with a generic, lifeless leather kit inside."
    },
    {
     "ref": "sl-shop-solex",
     "quote": "They are a very cost-effective solution to the problem of worn Solex carburettors."
    }
   ]
  },
  {
   "section": "problems",
   "claimText": "The 190SL was rust-prone from new; the trunk floor, footwells, rear trailing arm mounts, wheel arches, frame sections and drain holes are the places to inspect, and water pump leaks can lead to head gasket failure.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "silver-star",
    "petrolicious-guide"
   ],
   "evidence": [
    {
     "ref": "silver-star",
     "quote": "190 SL's were rust prone from the beginning and were never adequately protected"
    },
    {
     "ref": "petrolicious-guide",
     "quote": "Water pumps can develop leaks and if left unattended may end in overheating and head gasket failure"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The body is steel with aluminum doors, hood and trunk lid, and body panels and interior trim were stamped with the body number.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "scm-1958-roadster",
    "silver-star",
    "petrolicious-guide"
   ],
   "evidence": [
    {
     "ref": "scm-1958-roadster",
     "quote": "The 190SL body is made of steel, with aluminum alloy doors, hood and trunk lid."
    },
    {
     "ref": "silver-star",
     "quote": "The first uni body Mercedes Benz used a steel chassis with aluminum hood, trunk lid, doors and dash."
    },
    {
     "ref": "petrolicious-guide",
     "quote": "Body parts and items like the wheels, doors and boot lid were stamped with the body number"
    }
   ]
  }
 ]
};
