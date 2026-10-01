/**
 * Researched model draft - Volkswagen Karmann Ghia Type 14 (1955-1974, US sales from the 1956 model year).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedKarmannGhia = {
 "slug": "volkswagen/karmann-ghia",
 "make": "Volkswagen",
 "model": "Karmann Ghia",
 "generation": "Type 14, coupe and convertible",
 "generationCode": "Type 14",
 "trim": null,
 "yearStart": 1955,
 "yearEnd": 1974,
 "bodyStyles": [
  "2-door 2+2 coupe (fixed roof), built at Osnabrück from August 1955, US from 1956",
  "2-door convertible (padded fabric top), built from 1957, US from 1958"
 ],
 "engines": [
  "1,192 cc air-cooled flat-4 (1.2-liter), about 30 to 36 hp in the earliest cars depending on the source; 40 hp at 3,900 rpm in US listings from 1960-1961 (Volkswagen's own figure for the 1960 engine is 34 PS, about 33.5 hp)",
  "1.3-liter air-cooled flat-4 with a Solex 30 PICT carburetor, from August 1965 (MA Motorworks) or 1965 (Volkswagen): about 39 hp (40 PS) per Volkswagen",
  "1.5-liter air-cooled flat-4, from 1966 per Volkswagen and August 1966 per MA Motorworks: about 43 hp (44 PS) per Volkswagen, 53 hp per Dan Jedlicka",
  "1.6-liter dual-port air-cooled flat-4 with a Solex 34 PICT-3 carburetor, from August 1970: about 49 hp (50 PS) per Volkswagen, 54 hp per MA Motorworks, 60 hp per Dan Jedlicka"
 ],
 "productionTotal": null,
 "productionNotes": "No single production total is printed here, because the sources disagree on the numbers and on what is being counted. Volkswagen's own newsroom gives 362,601 Type 14 coupes, built at Osnabrück, and its convertible page gives no count at all. A 2020 anniversary history by Secret Classics, illustrated with Volkswagen images, gives 385,803 coupes and 81,053 convertibles for the Type 14 without saying whether Brazilian cars are inside those figures. Sports Car Market's 2004 auction profile and a conceptcarz lot description both give 283,501 coupes and 80,897 convertibles when Osnabrück production ended in July 1974. Those two figures add up to 364,398, within three cars of the 364,401 that Wikipedia's table lists for coupes alone, labeled Type 14 and 34 together; no source consulted explains the overlap. Wikipedia's text says more than 445,000 were built in Germany, not including the Type 34, and its table sums to 445,238, the same figure the US parts vendor MA Motorworks prints for Germany, alongside 41,600 cars built in Brazil between 1962 and 1975. Dan Jedlicka, writing for a US audience, puts sales at 387,975, and Hagerty says Volkswagen sold more than 400,000. The convertible figures sit closer together: 80,837 (Wikipedia), 80,897 (Sports Car Market) and 81,053 (Secret Classics). Coupe figures range from 283,501 to 385,803, a spread of more than 100,000 cars. No source consulted gives a US import count or a split by model year. Volkswagen says many coupes went to the USA, and Secret Classics says more than half of all production was exported. Wikipedia is treated as a pointer only. A Volkswagen Classic or Karmann archive count by model year, body and plant would settle this, and none was found.",
 "notableTrims": [
  {
   "name": "Type 14 coupe, 1956-1959 US cars",
   "note": "The first Karmann Ghias reached US dealers in 1956, and a US parts-vendor timeline records 34.2 seconds from 0 to 60 mph. Volkswagen raised the headlights and enlarged the front air intakes for 1959. The early low-headlight cars are the ones whose body parts the UK supplier Heritage Parts Centre calls decidedly more tricky to find."
  },
  {
   "name": "Type 14 convertible, US from 1958",
   "note": "Built from 1957 and sold here from 1958 at a $300 to $400 premium over the coupe. Motor Trend singled out its padded top in 1961, which left almost no trace of the bows. Collectors pay more for it today, and it is also the body whose floorpans are most exposed to water if the top or its rubbers have leaked."
  },
  {
   "name": "1967 model year, 1.5-liter",
   "note": "Dan Jedlicka calls the 1967 car, with its 1.5-liter engine, arguably the most desirable Ghia because it was the last one unaffected by US safety and emissions rules. Volkswagen dates front disc brakes to 1967, so in the factory's own account it is also the first year with discs."
  },
  {
   "name": "1971-1974 dual-port 1.6-liter cars",
   "note": "The last engine of the run, Type 4 instruments, and from 1971 the large box-shaped bumpers. A 1974 US coupe sold in June 2026 is described with front disc brakes, pop-out rear quarter windows and a rear seat deleted to comply with federal belt rules."
  },
  {
   "name": "Type 34 Razor Edge (context only)",
   "note": "A bigger, sharper-edged coupe on the Type 3 platform, built 1961 to 1969 and never officially imported to the US. Gray-market cars appear here. classic.com puts the Type 34 average sale at $38,429 as of September 2026."
  }
 ],
 "specs": {
  "layout": "Rear-engine, rear-wheel drive, air-cooled flat-4, four-wheel independent suspension, rear swing axles early (Motor Trend, 1960) and semi-trailing arms later (Volkswagen)",
  "chassis": "Beetle platform with side rails widened for a body about four inches wider; front anti-roll bar from the start; Karmann-built steel body, largely hand-finished",
  "engine": "1.2-liter, then 1.3-liter, 1.5-liter and 1.6-liter dual-port air-cooled flat-4s over the run",
  "power": "Disputed: Volkswagen lists about 33.5 hp (34 PS) for 1960 rising to about 49 hp (50 PS) for 1970; US sources quote 40 hp for 1960-1961, 54 hp (MA Motorworks) or 60 hp (Jedlicka) for the 1.6-liter",
  "torque": "Not stated in any source consulted",
  "transmission": "Four-speed manual, fully synchronized from 1960; three-speed semi-automatic offered from 1967 per Volkswagen, 1968 per Jedlicka",
  "weight": "1,665-1,748 lb for 1960 per Motor Trend; about 1,750 lb per Jedlicka; the convertible about 22 lb heavier than the coupe per Volkswagen",
  "acceleration": "0-60 mph in 34.2 seconds for the first US cars per MA Motorworks; no period US timed acceleration figure was found",
  "top_speed": "About 72 mph for the first car (Volkswagen); about 75 mph conservatively for the 40 hp car (Motor Trend, 1961); almost 80 mph per Jedlicka",
  "brakes": "Drums early; front discs from August 1966 (MA Motorworks) or the 1967 model year (Volkswagen); Jedlicka says 1965",
  "dimensions": "Wheelbase 94.5 in (2,400 mm), length 163 in (4,140 mm), width 64.2 in (1,631 mm), height 52.2 in (1,326 mm) per Motor Trend, April 1961",
  "fuel_economy": "31.1 mpg on Motor Trend's 1960 run to Palm Springs; 47.38 mpg in the 1959 Mobil Economy Run sports-car class",
  "us_intro": "1956 coupe; convertible from 1958",
  "us_end": "Production halted June 21, 1974 per MA Motorworks; classic.com lists model years 1956 to 1975",
  "us_list_price": "Coupe $2,445 and convertible $2,725 in April 1958; $2,430 and $2,695 in 1960-1961 buyer's guides; coupe $3,475 at the end in 1974. Other figures conflict, see claims",
  "production_total": "Disputed; see productionNotes",
  "type_34_us": "Not officially sold in the US"
 },
 "summary": "The Karmann Ghia Type 14 is a Volkswagen Beetle chassis under an Italian-styled, largely hand-finished Karmann body: a 2+2 coupe built at Osnabrück from August 1955 and a convertible from 1957, sold in the United States from 1956, with the convertible here from 1958, until production stopped in June 1974. It was never quick. Motor Trend's 1961 buyer's guide credited the 40 hp coupe with about 75 mph flat out and priced it at $2,430, with the convertible at $2,695, and called the finish as close to flawless as one can come for the money. Nobody agrees on how many were built. Volkswagen gives 362,601 coupes, a 2020 anniversary history gives 385,803 coupes and 81,053 convertibles, and Sports Car Market gives 283,501 and 80,897, so this page prints no total. The larger Type 34 Razor Edge was never officially sold here. As of September 2026 classic.com puts the average Karmann Ghia at $29,668, and rust, not mechanical wear, decides which cars are worth saving.",
 "history": "## Why the Ghia exists\n\nKarmann was already building Beetle convertibles for Volkswagen and wanted more work. Conceptcarz records that Wilhelm Karmann's own sporty coupe designs were ignored in Wolfsburg, as were styling proposals from Ghia's Mario Boano and Luigi Segre, so Karmann went to Ghia directly. Secret Classics says the shape Ghia adapted to the Beetle chassis had been drawn by Virgil Exner for Chrysler; Hagerty says the prototype looked like a scaled-down Chrysler d'Elegance. Heinrich Nordhoff approved it after a presentation in November 1953, and production began in August 1955. Hagerty frames the motive plainly: Volkswagen's image was cheap Bugs and buses, and it needed a halo. One German magazine called the result a parody of a fast car.\n\n## How it was built\n\nThe Ghia was a Beetle underneath, with a front anti-roll bar from the start. Dan Jedlicka describes complete Beetle chassis with widened side rails being sent to Karmann, where bodies made from many internal pressings were welded, then filled, filed and sanded by hand before paint. That is why it weighed more than a Beetle, about 120 lb more in Sports Car Market's account and 150 lb in Jedlicka's, and why body repairs have always been expensive.\n\n## America first\n\nThe coupe reached US dealers in 1956 and the convertible in 1958, at a $300 to $400 premium. Jedlicka says the convertible was built initially for Americans. Production doubled soon after the US launch, and Secret Classics says more than half of all cars were exported. US cars wore plumber's delight bumper overrider tubes. Volkswagen sold it with candor: one ad dressed a Ghia in racing stripes under the line \"You'd lose.\"\n\n## What the period press said\n\nIn May 1960 Motor Trend's editor drove a Ghia to Palm Springs alongside a Renault Caravelle and a Triumph Herald. The Ghia averaged 31.1 mpg over passes above 6,000 feet, and his verdict was that he would take the Herald's running gear, the Caravelle's body and the Ghia's interior. The April 1961 buyer's guide called it a sports-type machine but not a sports car, good for about 75 mph. In August 1972 Car and Driver set a new Ghia convertible against a 1956 Porsche Speedster; Sports Car Market's account says both pulled 0.75 g, but the Ghia wallowed.\n\n## Engines, one at a time\n\nVolkswagen's figures convert to about 33.5 hp (34 PS) in 1960, 39 hp (40 PS) from the 1.3-liter in 1965, 43 hp (44 PS) from the 1.5-liter in 1966 and 49 hp (50 PS) from the dual-port 1.6-liter in 1970. US sources quote more, up to 60 hp, and none states its rating basis. Front disc brakes arrived in August 1966 per MA Motorworks, in 1967 per Volkswagen and in 1965 per Jedlicka. A three-speed semi-automatic followed in 1967 or 1968, depending on the source.\n\n## The end of the run\n\nMA Motorworks dates the last cars to June 21, 1974, with the coupe at $3,475. Its successor was the Scirocco, which Karmann also built and which Jedlicka says needed the floor space. Brazil built 41,600 more from 1962 to 1975. The last US cars show the federal years plainly: a 1974 coupe sold in June 2026 is described with front disc brakes, pop-out rear quarter windows and a rear seat deleted for belt rules.",
 "marketNotes": "As of September 2026 classic.com lists the average price of a Volkswagen Karmann Ghia at $29,668, a market benchmark of $46,000 and 25 cars for sale. Its lowest recorded sale is $3,000 for a 1968 convertible on July 21, 2025, condition not stated. US auction results gathered on conceptcarz show what the better 1970 cars bring: a coupe at $34,100 and a convertible at $44,000 at Mecum Kissimmee in 2025, and a convertible at $25,300 at Barrett-Jackson Palm Beach in 2024; the page does not say whether those figures include buyer's premium. At the other end, a 1974 coupe with 63,750 miles (true mileage unknown) sold on Hagerty's marketplace on June 15, 2026 for $7,750 after 9 bids, with bubbling paint on the left front fender, a cracked dashboard and recent brake work. Older results show the climb: a restored 1970 convertible made $12,650 including buyer's premium at RM's Monterey sale in August 2004, and another brought $13,200 including premium at RM's Amelia Island sale in 2009. Hagerty reported in July 2019 that coupes were worth about 28 percent less than convertibles, and the 2024-2025 convertible results above sit well above the coupe results of the same period. The Type 34 Razor Edge, never officially sold here, averages $38,429 on classic.com with a lowest recorded sale of $23,050 on August 18, 2022, as of September 2026.",
 "whatToLookFor": "Start with the metal, because everything else on a Karmann Ghia is cheap by comparison. A UK parts supplier calls rust the biggest killer of these cars and lists the headlamp surrounds, nose, wheel arches, quarter panels, door bottoms, sills, jacking points, floorpans, inner fenders and heater channels. Hagerty adds that the heater channels can rust unseen and that the sills carry the structure, especially on the convertible. On a convertible the floorpans are likely to be rustier, because the top or its rubbers have probably let in water at some point, so the carpet tells more than the paint. Repair sections exist, including the hard-to-shape nose cone, but parts for the earliest low-headlight cars are harder to find. Because the bodies were hand-leaded and hand-finished at the factory, some filler at the seams is original; thick filler over rust on the lower body is not, and a magnet or paint gauge along the sills separates the two. Underneath, Hagerty says play in the engine's bottom pulley points toward a rebuild, and a notchy shift is usually the nylon block in the selector rod. Year matters more than trim. Front disc brakes are dated to 1965, August 1966 or 1967 depending on the source, so the calipers matter more than the title, and Jedlicka calls the 1967 1.5-liter car the last unaffected by US safety and emissions rules. A 1974 US car with no usable rear seat is original, deleted for federal belt rules. A dual-port 1.6-liter in a car titled before 1970 is a swap, and US cars should carry the overrider bumpers.",
 "commonProblems": "The sources agree on one problem and treat the rest as minor. Rust is the one: Heritage Parts Centre says the dreaded tin worm seems particularly partial to the Karmann's metalwork, and Hagerty says the heater channels can rust unseen. Sports Car Market's review of a 1964 coupe praised a car for its total lack of rust, rot or previous repair, which says how unusual that is. Convertibles are worse, because their floorpans see more water. The body itself is the cost driver: Jedlicka notes that the hand-welded construction made panel replacement expensive from new, and the UK supplier warns against thick filler as the cheap fix. Mechanically the picture is gentle. Hagerty names bottom pulley play as the engine warning sign and a worn nylon block in the selector rod as the usual cause of a stiff shift, and Motor Trend in 1960 called the engine durable and seldom in need of an overhaul. Parts are easy: Hagerty says almost all are available. NHTSA's recall database returns no campaign filed under the Karmann Ghia name for the 1966 through 1974 model years, and its Volkswagen recall indexes list only the Beetle for 1970 and the Type III for 1972. Early campaigns were filed loosely by model name, so that is an absence of records, not proof that no Ghia was ever covered. No source consulted gives a US dollar cost for rust repair.",
 "valueTrajectory": "New, a US coupe cost $2,445 in April 1958 and $2,430 in 1960 and 1961, so the price actually fell slightly before rising to $3,475 by the end in 1974. Collector values were low for decades: a restored 1970 convertible made $12,650 with premium at Monterey in 2004 and a 1964 coupe with 1,900 miles brought $8,247 at Retromobile in Paris in 2003. Hagerty recorded an 80 percent spike in condition 2 values in 2015, in the middle of the air-cooled Porsche boom, then about 4 percent growth to July 2019, mostly in top convertibles. By 2025 a 1970 convertible had made $44,000 at Mecum Kissimmee. As of September 2026 classic.com's average is $29,668, roughly nine times the 1974 sticker, with a $46,000 benchmark well above the average, which implies a long tail of cheaper cars. The spread is condition and body more than year: $3,000 for a 1968 convertible in July 2025 and $7,750 for a running 1974 coupe in June 2026 sit against a $44,000 convertible. classic.com does not split coupe and convertible values on the pages retrieved, so the convertible premium rests on Hagerty's 2019 figure and the auction results, not a current measured gap.",
 "overallConfidence": "medium",
 "sources": [
  {
   "ref": "vw-newsroom-coupe",
   "title": "Karmann Ghia Typ 14 Coupé (1955-1974)",
   "url": "https://volkswagen-newsroom.com/en/karmann-ghia-typ-14-coupe-19551974-19630",
   "publisher": "Volkswagen Newsroom",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Factory heritage page. Preliminary work at Karmann spring 1953, prototype end of 1953, production from August 1955, front anti-roll bar from the outset, top speed 116 km/h (about 72 mph), 362,601 coupes built, 1959 raised headlights, 1960 34 PS 1.2-liter, 1965 1.3-liter 40 PS, 1966 1.5-liter 44 PS, 1967 dual-circuit brakes with front discs, 1970 1.6-liter 50 PS, 1971 box bumpers, 1974 end at Osnabrück succeeded by the Scirocco also built by Karmann. Many coupes went to the USA. Home-market page: no US prices."
  },
  {
   "ref": "vw-newsroom-cab",
   "title": "Karmann Ghia Typ 14 Cabriolet (1957-1974)",
   "url": "https://volkswagen-newsroom.com/en/karmann-ghia-typ-14-cabriolet-19571974-19633",
   "publisher": "Volkswagen Newsroom",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Convertible launched 1957 two years after the coupe, body reinforcements mainly in the floor, about 10 kg (22 lb) heavier than the coupe, soft top closes almost flush with the body line, 1.5-liter 1966, three-speed semi-automatic and front discs 1967, glass rear window 1969, 1.6-liter 50 PS with padded dashboard 1970. No production count on the page."
  },
  {
   "ref": "secret-classics-65",
   "title": "65 Years of Volkswagen Karmann Ghia",
   "url": "https://secret-classics.com/en/65-years-of-volkswagen-karmann-ghia",
   "publisher": "Secret Classics",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "June 2020 anniversary history illustrated with Volkswagen images. Karmann and Nordhoff talks, shape drawn by Virgil Exner for Chrysler and adapted by Segre and Boano, November 1953 presentation and Nordhoff's approval, 'parody of a fast car' from Das Auto, Motor und Sport, original 30 hp engine, 385,803 Type 14 coupes and 81,053 convertibles, more than half exported. Its claim of disc brakes all around in 1966 conflicts with every other source and is not used."
  },
  {
   "ref": "wikipedia-kg",
   "title": "Volkswagen Karmann Ghia",
   "url": "https://en.wikipedia.org/wiki/Volkswagen_Karmann_Ghia",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Pointer only. More than 445,000 built in Germany excluding the Type 34 (text); coupe 364,401 labeled Type 14 and 34 plus 80,837 convertibles (table); Type 34 not officially offered in the US; production doubled soon after US introduction; superseded by the Scirocco in late 1974."
  },
  {
   "ref": "mam-timeline",
   "title": "Happy Anniversary: The Evolution of the Karmann Ghia",
   "url": "https://www.mamotorworks.com/vw/knowledgelibrary/general/Happy-Anniversary-The-Evolution-of-the-Karmann-Ghia",
   "publisher": "MA Motorworks",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "US VW parts vendor timeline, loaded via a browser fetch in September 2026 (returns 404 to plain scripted requests). US availability 1956 and 0-60 mph 34.2 seconds, 1960 40 hp 1,200 cc with full synchromesh, 1965 1,300 cc, 1970 1,600 cc dual-port, plumber's delight overrider tubes on US cars, 445,238 built in Germany and 41,600 in Brazil, production halted June 21 with the coupe at $3,475."
  },
  {
   "ref": "mam-year-changes",
   "title": "VW Ghia Year Changes",
   "url": "https://mamotorworks.com/production/website/vw/newsletterarchive/VWGhiaYearChanges.pdf",
   "publisher": "MA Motorworks",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Companion year list, loaded via a browser fetch in September 2026. US introduction 1956 and 34.2 seconds 0-60, August 1966 1500cc engine with front disc brakes, convertible glass rear window 1968, 1971-1974 1588cc 54 hp dual-port engine, exports until June 21, 1974. Same publisher as the timeline, so not an independent check."
  },
  {
   "ref": "jedlicka-kg",
   "title": "1956-74 Volkswagen Karmann-Ghia",
   "url": "https://www.danjedlicka.com/classic_cars/karmann_ghia.html",
   "publisher": "Dan Jedlicka",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "US auto journalist's history, written about 2009. US coupe 1956 and convertible 1958 at $300 to $400 more, initial price $2,245 ($900 over a Beetle), sales of 387,975, about 1,750 lb and 150 lb over a Beetle, 36 hp at first, almost 80 mph, hand-finished Karmann bodies on Beetle chassis with widened rails, 'You'd lose' ad, front discs 1965, semi-automatic 1968, 53 hp 1967, 60 hp 1.6-liter by 1972, 1967 1.5-liter the last car unaffected by US safety and emissions rules, Karmann needed space for the Scirocco. Its 2009 price guide values are not used."
  },
  {
   "ref": "hagerty-us-2019",
   "title": "VW Karmann Ghia: The German car with the sexy Italian shape",
   "url": "https://hagerty.com/media/?p=6288",
   "publisher": "Hagerty Media",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "US editorial by Andrew Newton, July 12, 2019. Prototype resembled a scaled-down Chrysler d'Elegance, VW needed a halo, US debut under $2,400, convertible 1958 at a $300 to $400 premium, more than 400,000 sold, body mostly hand-welded and hand-filled, 30 hp at first and never more than 60, production doubled in short order, 'You'd lose' ad, 80 percent spike in condition 2 values in 2015 and 4 percent growth since, coupes about 28 percent below convertibles as of July 2019."
  },
  {
   "ref": "mt-1958-04",
   "title": "Motor Trend, April 1958 (import price list)",
   "url": "https://archive.org/download/sim_motor-trend_1958-04_10_4/sim_motor-trend_1958-04_10_4_djvu.txt",
   "publisher": "Motor Trend",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Period US price list, page 31, archive.org scan: Karmann-Ghia coupe $2,445 and convertible $2,725 alongside the Volkswagen sedan and bus prices."
  },
  {
   "ref": "mt-1960-05",
   "title": "Motor Trend, May 1960 (Karmann-Ghia, Renault Caravelle and Triumph Herald drive)",
   "url": "https://archive.org/download/sim_motor-trend_1960-05_12_5/sim_motor-trend_1960-05_12_5_djvu.txt",
   "publisher": "Motor Trend",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Period US drive by the editor to Palm Springs. Table lists the Karmann-Ghia at 94.5 in wheelbase, 38 hp, 1,665-1,748 lb, coupe $2,535 and convertible $2,795; the same issue's import buyer's list gives coupe $2,430 and convertible $2,695. Ghia averaged 31.1 mpg; editor would take the Herald's running gear, the Caravelle's body and the Ghia's interior; VW engine durable and seldom needs an overhaul."
  },
  {
   "ref": "mt-1961-04",
   "title": "Motor Trend, April 1961 (imported car buyer's guide)",
   "url": "https://archive.org/download/sim_motor-trend_1961-04_13_4/sim_motor-trend_1961-04_13_4_djvu.txt",
   "publisher": "Motor Trend",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Capsule test: coupe $2,430, convertible $2,695, 40 hp, about 75 mph conservatively, seats two with a child-size rear platform, finish as close to flawless as one can come for the money, padded convertible top, wheelbase 94.5 in, length 163 in, width 64.2 in, height 52.2 in, platform chassis slightly wider than the sedan's."
  },
  {
   "ref": "cd-1961-05",
   "title": "Car and Driver, May 1961 (buyer's guide tables)",
   "url": "https://archive.org/download/sim_car-and-driver_1961-05_6/sim_car-and-driver_1961-05_6_djvu.txt",
   "publisher": "Car and Driver",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Grand tourers $2,500 and up table: Volkswagen Karmann-Ghia $2,695, flat-four, 3.03 x 2.52 in bore and stroke, 40 hp at 3,900 rpm. Body style not named."
  },
  {
   "ref": "mt-1960-01",
   "title": "Motor Trend, January 1960 (1959 Mobil Economy Run results)",
   "url": "https://archive.org/download/sim_motor-trend_1960-01_12_1/sim_motor-trend_1960-01_12_1_djvu.txt",
   "publisher": "Motor Trend",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Results table for the 1959 Mobil Economy Run: Karmann-Ghia 47.38 mpg, fifth in Class E, sports cars under 1,600 cc. An economy-run figure, not normal driving."
  },
  {
   "ref": "zwischengas-1962",
   "title": "50 years ago in America - cars for sale",
   "url": "https://www.zwischengas.com/en/blog/2012/08/05/Vor-50-Jahren-in-Amerika-Autos-zu-verkaufen.html",
   "publisher": "Zwischengas",
   "sourceType": "journalism",
   "reliability": "low",
   "notes": "2012 retrospective of 1962 Road & Track issues and their classifieds, loaded via a browser fetch in September 2026 (403 to scripted requests). States that a new VW Karmann Ghia cost USD 2,295 'to get a feel for the prices'; the article sets the scene in 1962 but does not say which issue or body style the figure comes from."
  },
  {
   "ref": "scm-1970-conv",
   "title": "1970 Volkswagen Karmann Ghia Convertible",
   "url": "https://www.sportscarmarket.com/?p=1466",
   "publisher": "Sports Car Market",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "November 2004 profile by B. Mitchell Carlson. 283,501 coupes and 80,897 convertibles when Osnabrück production ceased in July 1974; original list price $2,725; sold for $12,650 including buyer's premium at RM Monterey, August 13-14, 2004; Car and Driver's August 1972 comparison with a 1956 Speedster, both at 0.75 g lateral; Ghias about 120 lb heavier than Beetles."
  },
  {
   "ref": "conceptcarz-1970",
   "title": "1970 Volkswagen Karmann-Ghia Convertible Coupe, chassis 1402103869",
   "url": "https://www.conceptcarz.com/profile/7212,8198/news.aspx",
   "publisher": "conceptcarz",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "Lot profile and US auction table. Karmann's own designs ignored by VW, Karmann approached Ghia directly, features from the 1953 Chrysler-Ghia d'Elegance, 283,501 coupes and 80,897 convertibles to July 1974, US-specification bumpers with override bars, sold for $13,200 including premium at RM Amelia Island 2009. Table: 1970 coupe $34,100 and convertible $44,000 at Mecum Kissimmee 2025, convertible $25,300 at Barrett-Jackson Palm Beach 2024; premium not stated for the table."
  },
  {
   "ref": "classic-kg",
   "title": "Volkswagen Karmann Ghia Market, classic.com",
   "url": "https://www.classic.com/m/volkswagen/karmann-ghia/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of September 2026: average price $29,668, market benchmark $46,000, 25 cars for sale, lowest recorded sale $3,000 for a 1968 convertible on July 21, 2025, model years listed 1956 to 1975. No highest recorded sale on the page."
  },
  {
   "ref": "classic-t34",
   "title": "Volkswagen Karmann Ghia Type 34 Market, classic.com",
   "url": "https://www.classic.com/m/volkswagen/karmann-ghia/type-34/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Context only. Type 34 on the Type 3 platform, never officially imported to the US, model years 1961 to 1969, average sale $38,429, lowest recorded sale $23,050 on August 18, 2022, none listed for sale as of September 2026."
  },
  {
   "ref": "hagerty-lot-1974",
   "title": "1974 Volkswagen Karmann Ghia, Hagerty Marketplace auction",
   "url": "https://www.hagerty.com/marketplace/auction/1974-volkswagen-karmann-ghia/0674c90d-d146-4f5b-bcdb-4c46346d8dfa",
   "publisher": "Hagerty Marketplace",
   "sourceType": "auction-house",
   "reliability": "medium",
   "notes": "Individual lot page. 1974 coupe, 63,750 miles TMU, sold for $7,750 on June 15, 2026 after 9 bids; front disc brakes, pop-out rear quarter windows, rear seat deleted for federal belt rules per the seller's description; bubbling paint on the left front fender."
  },
  {
   "ref": "scm-1964",
   "title": "1964 Volkswagen Karmann-Ghia, Sports Car Market review",
   "url": "https://www.sportscarmarket.com/?p=1310",
   "publisher": "Sports Car Market",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "2003 Christie's Retromobile result: 1964 coupe, 1,900 miles, $8,247 including buyer's premium on February 8, 2003, against a $16,000 to $20,000 estimate; reviewer praises its lack of rust and says a convertible would have had more appeal. A dated European data point, not a current value."
  },
  {
   "ref": "hagerty-guide",
   "title": "Buyer's Guide: Volkswagen Karmann Ghia 1955-1974",
   "url": "https://www.hagerty.co.uk/articles/buying-guide-volkswagen-karmann-ghia-1955-1974/",
   "publisher": "Hagerty",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "UK edition, used for condition only, never for price. Heater channels and sills, parts availability, bottom pulley play, worn selector rod nylon block. Its production figures were not used."
  },
  {
   "ref": "heritage-kg",
   "title": "Karmann Ghia buying guide, Heritage Parts Centre",
   "url": "https://blog.heritagepartscentre.com/blog/?p=8166",
   "publisher": "Heritage Parts Centre",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "UK parts supplier, loaded via a browser fetch in September 2026 (404 to scripted requests). Used for condition only, never cost. Rust locations, repair sections including the nose cone, harder-to-find early lowlight parts, convertible floorpans, warning against thick filler."
  },
  {
   "ref": "nhtsa-vw-1972",
   "title": "NHTSA recall model index: Volkswagen, 1972",
   "url": "https://api.nhtsa.gov/products/vehicle/models?modelYear=1972&make=volkswagen&issueType=r",
   "publisher": "National Highway Traffic Safety Administration",
   "sourceType": "government",
   "reliability": "high",
   "notes": "Lists the Volkswagen models with recall records for model year 1972: the Type III only. A direct recalls-by-vehicle query for the Karmann Ghia name was also run for each model year 1966 through 1974 in September 2026 and returned a count of 0 every time."
  },
  {
   "ref": "nhtsa-vw-1970",
   "title": "NHTSA recall model index: Volkswagen, 1970",
   "url": "https://api.nhtsa.gov/products/vehicle/models?modelYear=1970&make=volkswagen&issueType=r",
   "publisher": "National Highway Traffic Safety Administration",
   "sourceType": "government",
   "reliability": "high",
   "notes": "Lists the Volkswagen models with recall records for model year 1970: the Beetle only. Other years checked in September 2026 list the Beetle, Camper, Type III or a generic Volkswagen entry, never a Karmann Ghia."
  }
 ],
 "claims": [
  {
   "section": "production",
   "claimText": "Coupe production figures disagree by more than 100,000 cars: Volkswagen gives 362,601 coupes, Secret Classics 385,803 coupes and 81,053 convertibles, and Sports Car Market and conceptcarz 283,501 coupes and 80,897 convertibles.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "vw-newsroom-coupe",
    "secret-classics-65",
    "scm-1970-conv",
    "conceptcarz-1970"
   ],
   "conflictNote": "Volkswagen states 362,601 coupes. Secret Classics states 385,803 coupes and 81,053 convertibles. Sports Car Market and conceptcarz both state 283,501 coupes and 80,897 convertibles, which together come to 364,398. None says whether Brazilian cars are included. Not resolved by any source consulted here.",
   "evidence": [
    {
     "ref": "vw-newsroom-coupe",
     "quote": "After 362,601 units, production of the Volkswagen Karmann Ghia Coupé comes to an end in Osnabrück."
    },
    {
     "ref": "secret-classics-65",
     "quote": "A total of 385,803 Coupés and 81,053 Cabriolets were built from the Karmann Ghia Type 14."
    },
    {
     "ref": "scm-1970-conv",
     "quote": "When production ceased at the Osnabruck plant in July 1974, 283,501 coupes and 80,897 convertibles had been produced."
    },
    {
     "ref": "conceptcarz-1970",
     "quote": "would remain in production until July of 1974 after 283,501 coupes and 80,897 convertibles had been produced."
    }
   ]
  },
  {
   "section": "production",
   "claimText": "Total-production figures also disagree: Wikipedia says more than 445,000 were built in Germany excluding the Type 34, MA Motorworks gives 445,238 for Germany plus 41,600 from Brazil, Dan Jedlicka gives sales of 387,975 and Hagerty says more than 400,000 were sold.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "wikipedia-kg",
    "mam-timeline",
    "jedlicka-kg",
    "hagerty-us-2019"
   ],
   "conflictNote": "Wikipedia's text says more than 445,000 in Germany excluding the Type 34, while its table labels the coupe line as Type 14 and 34 together. MA Motorworks gives 445,238 for Germany and 41,600 for Brazil. Jedlicka gives 387,975 sales and Hagerty more than 400,000. None cites a factory archive. Not resolved by any source consulted here.",
   "evidence": [
    {
     "ref": "wikipedia-kg",
     "quote": "More than 445,000 Karmann Ghias were produced in Germany over the car's production life, not including the Type 34 variant."
    },
    {
     "ref": "mam-timeline",
     "quote": "445,238 produced in Germany and 41,600 produced in Brazil between 1962 and 1975."
    },
    {
     "ref": "jedlicka-kg",
     "quote": "The slick little car was sold through 1974. Sales totaled an impressive 387,975 cars."
    },
    {
     "ref": "hagerty-us-2019",
     "quote": "despite being a mass-produced car (VW sold more than 400,000 Karmann Ghias), its curvy body was mostly hand-welded"
    }
   ]
  },
  {
   "section": "production",
   "claimText": "Production ended in 1974: MA Motorworks records production halting on June 21 with a final coupe price of $3,475 and Wikipedia says the Scirocco superseded it in late 1974, while classic.com lists model years 1956 to 1975.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "wikipedia-kg",
    "mam-timeline",
    "classic-kg"
   ],
   "conflictNote": "Wikipedia and MA Motorworks put the end of the car in 1974, with production halting on June 21, 1974. classic.com lists the model years as 1956 to 1975. Whether a 1975 model-year Karmann Ghia was sold in the US is not resolved by any source consulted here.",
   "evidence": [
    {
     "ref": "wikipedia-kg",
     "quote": "In late 1974, the car was superseded by the Golf-based Scirocco."
    },
    {
     "ref": "mam-timeline",
     "quote": "June 21 – Karmann-Ghia production halts. Coupe's price: $3,475."
    },
    {
     "ref": "classic-kg",
     "quote": "The Volkswagen Karmann Ghia was produced for model years 1956 to 1975."
    }
   ]
  },
  {
   "section": "production",
   "claimText": "Exports carried the car: Volkswagen says many coupes went to the USA and Secret Classics says more than half of all production was exported, but no source consulted gives a US count.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "vw-newsroom-coupe",
    "secret-classics-65"
   ],
   "evidence": [
    {
     "ref": "vw-newsroom-coupe",
     "quote": "A total of 362,601 units are built, many of which head to the USA."
    },
    {
     "ref": "secret-classics-65",
     "quote": "More than half of the production went into export markets, with the USA in particular appreciating the vehicle very much."
    }
   ]
  },
  {
   "section": "history",
   "claimText": "Production doubled soon after the US introduction, according to both Wikipedia and Hagerty; neither attaches a number.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-kg",
    "hagerty-us-2019"
   ],
   "evidence": [
    {
     "ref": "wikipedia-kg",
     "quote": "Production doubled soon after the Karmann Ghia's U.S. introduction, becoming the car most imported into the U.S."
    },
    {
     "ref": "hagerty-us-2019",
     "quote": "But no matter, the Karmann Ghia proved more popular than expected. Production doubled in short order"
    }
   ]
  },
  {
   "section": "history",
   "claimText": "The project was Karmann's: Volkswagen ignored Wilhelm Karmann's own coupe designs, so Karmann went to Ghia directly, and Heinrich Nordhoff approved the resulting prototype for production after seeing it in November 1953.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "conceptcarz-1970",
    "secret-classics-65"
   ],
   "evidence": [
    {
     "ref": "conceptcarz-1970",
     "quote": "The designs were for a new sporty coupe, which Volkswagen ignored."
    },
    {
     "ref": "secret-classics-65",
     "quote": "Nordhoff immediately gave the car green lights for series production, which was prepared at Karmann in Osnabrück"
    }
   ]
  },
  {
   "section": "history",
   "claimText": "The shape traces to Ghia's Chrysler work, but the sources describe the link differently: Hagerty and conceptcarz point to the 1953 Chrysler d'Elegance concept, while Secret Classics says it was a Virgil Exner drawing for Chrysler that was never built as a concept car.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "hagerty-us-2019",
    "conceptcarz-1970",
    "secret-classics-65"
   ],
   "conflictNote": "Hagerty says the prototype looked like a scaled-down Chrysler d'Elegance and conceptcarz says some of its features were shown on that 1953 car. Secret Classics says the source was an Exner drawing for Chrysler that was never realized as a concept car. Not resolved by any source consulted here.",
   "evidence": [
    {
     "ref": "hagerty-us-2019",
     "quote": "Ghia designers worked up a prototype that looked like a scaled-down version of the Chrysler d'Elegance concept car"
    },
    {
     "ref": "conceptcarz-1970",
     "quote": "Some of these design features were shown on the Chrysler-Ghia d'Elegance Concept car of 1953."
    },
    {
     "ref": "secret-classics-65",
     "quote": "which was originally drawn by Virgil Exner for Chrysler, but was never realized as a concept car"
    }
   ]
  },
  {
   "section": "history",
   "claimText": "Work began at Karmann in the spring of 1953 and production started in August 1955, with a front anti-roll bar fitted from the outset.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "vw-newsroom-coupe",
    "secret-classics-65"
   ],
   "evidence": [
    {
     "ref": "vw-newsroom-coupe",
     "quote": "To reduce body roll and oversteer, the Karmann Ghia is equipped with a front anti-roll bar from the outset."
    },
    {
     "ref": "secret-classics-65",
     "quote": "From August 1955, the first Karmann Ghia units rolled off the assembly line to dealers"
    }
   ]
  },
  {
   "section": "history",
   "claimText": "The performance never matched the looks: a German magazine called it a parody of a fast car, and Hagerty says the Ghia started with 30 hp and never made more than 60.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "secret-classics-65",
    "hagerty-us-2019"
   ],
   "evidence": [
    {
     "ref": "secret-classics-65",
     "quote": "The German car magazine ‘Das Auto, Motor und Sport’ even wrote that it is a “parody of a fast car”."
    },
    {
     "ref": "hagerty-us-2019",
     "quote": "the Karmann Ghia started out with 30 horsepower and never made more than 60"
    }
   ]
  },
  {
   "section": "history",
   "claimText": "The body was largely hand-built: Jedlicka describes almost hand-construction methods with seams filled, filed and sanded before paint, and Hagerty calls it mostly hand-welded, hand-filled and hand-shaped.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "jedlicka-kg",
    "hagerty-us-2019"
   ],
   "evidence": [
    {
     "ref": "jedlicka-kg",
     "quote": "Almost hand-construction methods were required. They included filling, filing and sanding all seams before painting."
    },
    {
     "ref": "hagerty-us-2019",
     "quote": "its curvy body was mostly hand-welded, hand-filled, and hand-shaped"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "Curb weight is put at 1,665-1,748 lb by Motor Trend in 1960 and about 1,750 lb by Jedlicka, but the gap to a Beetle is about 150 lb in Jedlicka's account and about 120 lb in Sports Car Market's.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "mt-1960-05",
    "jedlicka-kg",
    "scm-1970-conv"
   ],
   "conflictNote": "Motor Trend lists 1,665-1,748 lb and Jedlicka about 1,750 lb, which agree. Jedlicka says that is about 150 lb more than a Beetle; Sports Car Market says about 120 lb. Not resolved by any source consulted here.",
   "evidence": [
    {
     "ref": "mt-1960-05",
     "quote": "Karmann-Ghia VW 94.5 38-hp, 1665-1748 2/4 Convertible—$2795,"
    },
    {
     "ref": "jedlicka-kg",
     "quote": "the car only weighed approximately 1,750 pounds, or about 150 pounds more than the Beetle."
    },
    {
     "ref": "scm-1970-conv",
     "quote": "That on a per-model basis the cars weighed about 120 pounds more than Beetles didn't help."
    }
   ]
  },
  {
   "section": "history",
   "claimText": "Karmann Ghias reached US buyers from 1956, and a US parts-vendor timeline records the first cars at 34.2 seconds from 0 to 60 mph.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "mam-timeline",
    "mam-year-changes"
   ],
   "evidence": [
    {
     "ref": "mam-timeline",
     "quote": "Karmann Ghias are made available in the U.S. Zero-60 time is 34.2 seconds."
    },
    {
     "ref": "mam-year-changes",
     "quote": "Karmann Ghias are made available in the U.S. Zero-60 time is 34.2 seconds."
    }
   ]
  },
  {
   "section": "history",
   "claimText": "The coupe arrived in America in 1956 and the convertible followed in 1958 at a $300 to $400 premium over the coupe.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "jedlicka-kg",
    "hagerty-us-2019"
   ],
   "evidence": [
    {
     "ref": "jedlicka-kg",
     "quote": "arrived in America as a coupe in 1956. The convertible soon followed in 1958. It cost $300 to $400 more than the coupe"
    },
    {
     "ref": "hagerty-us-2019",
     "quote": "A convertible joined the lineup in 1958 and typically carried a $300–$400 premium."
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The first US list price is disputed: Jedlicka says the Ghia initially cost $2,245, Hagerty says it debuted at less than $2,400, and Motor Trend's April 1958 price list gives $2,445 for the coupe and $2,725 for the convertible.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "jedlicka-kg",
    "hagerty-us-2019",
    "mt-1958-04"
   ],
   "conflictNote": "Jedlicka states $2,245 at introduction and Hagerty less than $2,400, neither naming a year or port of entry. Motor Trend's April 1958 list gives $2,445 for the coupe. No 1956 US price list was found. Not resolved by any source consulted here.",
   "evidence": [
    {
     "ref": "jedlicka-kg",
     "quote": "But, after all, the Karmann-Ghia initially cost $2,245, or $900 more than the Beetle"
    },
    {
     "ref": "hagerty-us-2019",
     "quote": "debuted in the U.S. with a base price of less than $2400"
    },
    {
     "ref": "mt-1958-04",
     "quote": "Ghia coupe ($2445), Karmann-Ghia convertible ($2725)"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "Two 1961 US buyer's guides agree on price: Motor Trend lists the coupe at $2,430 and the convertible at $2,695, and Car and Driver lists the Karmann-Ghia at $2,695 with 40 hp at 3,900 rpm.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "mt-1961-04",
    "cd-1961-05"
   ],
   "evidence": [
    {
     "ref": "mt-1961-04",
     "quote": "VOLKSWAGEN KARMANN GHIA, coupe, $2430, Germany"
    },
    {
     "ref": "cd-1961-05",
     "quote": "Volkswagen Karmann-Ghia $2695 Flat-four ‘ 3.03 x 2.52 : 40 @ 3900"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "Other early-1960s US prices do not match the buyer's guides: Motor Trend's own May 1960 comparison table gives $2,535 for the coupe and $2,795 for the convertible, and a 2012 Zwischengas review of 1962 Road & Track issues gives $2,295.",
   "confidence": "low",
   "status": "disputed",
   "sourceRefs": [
    "mt-1960-05",
    "zwischengas-1962",
    "mt-1961-04"
   ],
   "conflictNote": "Motor Trend's May 1960 comparison table gives $2,535 and $2,795, while the buyer's list in the same issue and the April 1961 guide give $2,430 and $2,695. Zwischengas gives $2,295 without naming the issue or body style. Whether the differences are ports of entry, equipment or model year is not stated. Not resolved by any source consulted here.",
   "evidence": [
    {
     "ref": "mt-1960-05",
     "quote": "flat 4-cyl. Coupe—$2535"
    },
    {
     "ref": "zwischengas-1962",
     "quote": "a new VW Karmann Ghia cost USD 2,295"
    },
    {
     "ref": "mt-1961-04",
     "quote": "Other series: Convertible, $2695. VOLVO 122-S, four-door sedan, $2495, Sweden"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "Sports Car Market's 2004 profile gives the original list price of a 1970 convertible as $2,725, the same figure Motor Trend printed for the convertible in April 1958; no 1970 US price list was found to confirm it.",
   "confidence": "low",
   "status": "unverified",
   "sourceRefs": [
    "scm-1970-conv",
    "mt-1958-04"
   ],
   "evidence": [
    {
     "ref": "scm-1970-conv",
     "quote": "Number Produced: 80,897 Original List Price: $2,725 SCM Valuation: $7,800-$13,000"
    },
    {
     "ref": "mt-1958-04",
     "quote": "Ghia coupe ($2445), Karmann-Ghia convertible ($2725)"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "Output figures disagree by source and rating basis: Volkswagen lists about 49 hp (50 PS) for the 1970 1.6-liter, MA Motorworks gives 54 hp for 1971-1974 cars, Jedlicka 60 hp by 1972, and Hagerty says the car never made more than 60 hp.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "vw-newsroom-coupe",
    "mam-year-changes",
    "jedlicka-kg",
    "hagerty-us-2019"
   ],
   "conflictNote": "Volkswagen gives about 49 hp (50 PS) for the 1.6-liter. MA Motorworks gives 54 hp, Jedlicka 60 hp, and Hagerty a ceiling of 60 hp. The US sources do not state whether their figures are gross or net. Not resolved by any source consulted here.",
   "evidence": [
    {
     "ref": "vw-newsroom-coupe",
     "quote": "new features include the engine (1.6 litres with 50 PS), the enlarged rear lights from the VW Type 3"
    },
    {
     "ref": "mam-year-changes",
     "quote": "1971-1974 1588cc 54 hp Dual port engine"
    },
    {
     "ref": "jedlicka-kg",
     "quote": "the car could hit 90 mph by 1972 with its larger 1.6-liter, 60-horsepower four-cylinder"
    },
    {
     "ref": "hagerty-us-2019",
     "quote": "the Karmann Ghia started out with 30 horsepower and never made more than 60"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "For 1960 Volkswagen lists the 1.2-liter at about 33.5 hp (34 PS) with a fully synchronized gearbox, while MA Motorworks and Motor Trend's 1961 guide call the same car 40 hp.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "vw-newsroom-coupe",
    "mam-timeline",
    "mt-1961-04"
   ],
   "conflictNote": "Volkswagen gives about 33.5 hp (34 PS). MA Motorworks and Motor Trend give 40 hp, and Motor Trend's May 1960 table gives 38 hp. The rating basis is not stated by the US sources. Not resolved by any source consulted here.",
   "evidence": [
    {
     "ref": "vw-newsroom-coupe",
     "quote": "the more powerful version of the 1.2-litre boxer engine with 34 PS and fully synchronised gearbox is now used"
    },
    {
     "ref": "mam-timeline",
     "quote": "August – Ghia welcomes a new 40-hp 1200cc engine with fully synchronized four-speed transmission"
    },
    {
     "ref": "mt-1961-04",
     "quote": "Because of better body streamlining, the 40-hp, air-cooled, flat Four pushes the car about three mph faster than the sedan"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "A 1.3-liter engine of about 39 hp (40 PS) replaced the 1.2-liter in 1965, with a Solex 30 PICT carburetor per MA Motorworks.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "mam-timeline",
    "vw-newsroom-coupe"
   ],
   "evidence": [
    {
     "ref": "mam-timeline",
     "quote": "August – Larger 1300cc engine with Solex 30 PICT carburetor improves acceleration"
    },
    {
     "ref": "vw-newsroom-coupe",
     "quote": "The 1.3-litre engine with 40 PS replaces the 1.2-litre boxer engine."
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "A 1.6-liter dual-port engine with a Solex 34 PICT-3 carburetor arrived in August 1970, along with Type 3 taillights and Type 4 instruments.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "mam-timeline",
    "vw-newsroom-coupe"
   ],
   "evidence": [
    {
     "ref": "mam-timeline",
     "quote": "August – 1600cc dual-port engine with Solex 34 PICT-3 carburetor."
    },
    {
     "ref": "vw-newsroom-coupe",
     "quote": "the enlarged rear lights from the VW Type 3, the dashboard, the instruments from the VW Type 4, and the four-spoke steering wheel"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "Top speed ran from about 72 mph for the first car per Volkswagen's metric figure to about 75 mph, conservatively, for the 40 hp car per Motor Trend, and almost 80 mph in Jedlicka's account.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "vw-newsroom-coupe",
    "mt-1961-04",
    "jedlicka-kg"
   ],
   "evidence": [
    {
     "ref": "vw-newsroom-coupe",
     "quote": "Drivers enjoy two attractive round instruments and a top speed of 116 km/h, among other things."
    },
    {
     "ref": "mt-1961-04",
     "quote": "pushes the car about three mph faster than the sedan at the top — conservatively, 75 mph."
    },
    {
     "ref": "jedlicka-kg",
     "quote": "The Karmann-Ghia's aerodynamic body let it reach almost 80 mph"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "Front disc brakes are dated three ways: August 1966 with the 1500 engine per MA Motorworks, 1967 with dual-circuit brakes per Volkswagen, and 1965 per Jedlicka.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "mam-year-changes",
    "vw-newsroom-coupe",
    "jedlicka-kg"
   ],
   "conflictNote": "MA Motorworks says August 1966, Volkswagen lists the change under 1967, and Jedlicka says 1965. Not resolved by any source consulted here.",
   "evidence": [
    {
     "ref": "mam-year-changes",
     "quote": "Type III-inspired 1500cc engine, rear z bar, wider rear track and softer rear spring rate. Front disc brakes."
    },
    {
     "ref": "vw-newsroom-coupe",
     "quote": "The Karmann Ghia is equipped with a dual-circuit braking system with disk brakes on the front axle"
    },
    {
     "ref": "jedlicka-kg",
     "quote": "Front disc brakes were added in 1965, and a semi-automatic transmission was made available for 1968."
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The three-speed semi-automatic is dated to 1967 by Volkswagen and to 1968 by Jedlicka.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "vw-newsroom-cab",
    "jedlicka-kg"
   ],
   "conflictNote": "Volkswagen's convertible page lists the semi-automatic under 1967; Jedlicka says it was available for 1968. Not resolved by any source consulted here.",
   "evidence": [
    {
     "ref": "vw-newsroom-cab",
     "quote": "From now on, the semi-automatic transmission with three gears is available, as in the Beetle"
    },
    {
     "ref": "jedlicka-kg",
     "quote": "Front disc brakes were added in 1965, and a semi-automatic transmission was made available for 1968."
    }
   ]
  },
  {
   "section": "history",
   "claimText": "Motor Trend's editor averaged 31.1 mpg in a Ghia on a 1960 run to Palm Springs, and a Karmann-Ghia returned 47.38 mpg in the sports-car class of the 1959 Mobil Economy Run.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "mt-1960-05",
    "mt-1960-01"
   ],
   "evidence": [
    {
     "ref": "mt-1960-05",
     "quote": "the Ghia averaged: 31:1--mpg and the Caravelle got 36.9."
    },
    {
     "ref": "mt-1960-01",
     "quote": "6 Fiat 1100 38.43 13 Hillman Minx 32.02 5 Karmann-Ghia 47.38"
    }
   ]
  },
  {
   "section": "history",
   "claimText": "Period US reviewers liked the cabin more than the car: Motor Trend's editor in 1960 would take the Ghia's interior with another car's body and running gear, and the 1961 guide called its finish as close to flawless as one can come for the money.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "mt-1960-05",
    "mt-1961-04"
   ],
   "evidence": [
    {
     "ref": "mt-1960-05",
     "quote": "I'd take the engine and run- ning gear of the Herald, the body of the Caravelle and the interior of the Kar- mann-Ghia."
    },
    {
     "ref": "mt-1961-04",
     "quote": "Finish throughout is of uniformly fine quality — as close to flawless as one can come for the money."
    }
   ]
  },
  {
   "section": "history",
   "claimText": "In August 1972 Car and Driver compared a new Ghia convertible with a 1956 Porsche Speedster and measured both at 0.75 g of lateral acceleration; this rests on Sports Car Market's account, as the original issue was not retrieved.",
   "confidence": "medium",
   "status": "unverified",
   "sourceRefs": [
    "scm-1970-conv"
   ],
   "evidence": [
    {
     "ref": "scm-1970-conv",
     "quote": "C&D measured the handling as equal (both cars achieved a lateral acceleration of 0.75 g)"
    }
   ]
  },
  {
   "section": "history",
   "claimText": "Volkswagen advertised the Ghia's lack of speed: one ad showed it in racing stripes under the line You'd lose.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "hagerty-us-2019",
    "jedlicka-kg"
   ],
   "evidence": [
    {
     "ref": "hagerty-us-2019",
     "quote": "featured a Karmann Ghia dressed up with stripes and numbers, as if ready to race"
    },
    {
     "ref": "jedlicka-kg",
     "quote": "One clever VW advertisement pictured it with racing stripes that made it look ready for the track."
    }
   ]
  },
  {
   "section": "history",
   "claimText": "The Scirocco, also built by Karmann, replaced the Ghia, and Jedlicka says Karmann needed the space to build it.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "vw-newsroom-coupe",
    "jedlicka-kg"
   ],
   "evidence": [
    {
     "ref": "vw-newsroom-coupe",
     "quote": "It is succeeded by the Scirocco, which is also built by Karmann."
    },
    {
     "ref": "jedlicka-kg",
     "quote": "except that the Karmann coachworks of West Germany needed more space to build Volkswagen's new Scirocco coupe"
    }
   ]
  },
  {
   "section": "history",
   "claimText": "Jedlicka calls the 1967 car with the 1.5-liter engine arguably the most desirable Karmann Ghia, as the last one unaffected by US safety and emissions rules; this is one writer's judgment.",
   "confidence": "low",
   "status": "unverified",
   "sourceRefs": [
    "jedlicka-kg"
   ],
   "evidence": [
    {
     "ref": "jedlicka-kg",
     "quote": "The most desirable Karmann-Ghia is arguably the 1967 model with its 1.5-liter engine."
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The Type 34 Razor Edge sat on the Type 3 platform, was known in German as the big Karmann, and was not officially offered in the US, which VW treated as its largest and most important export market.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-t34",
    "wikipedia-kg"
   ],
   "evidence": [
    {
     "ref": "classic-t34",
     "quote": "Based on the new Type 3 platform, the Type 34 was known as Der Große Karmann, meaning 'the big Karmann' in German."
    },
    {
     "ref": "wikipedia-kg",
     "quote": "Although the Type 34 was available in most countries, it was not offered officially in the U.S. – VW's largest and most important export market."
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "US-bound Ghias received plumber's delight bumper overrider tubes, described on a 1970 US car as United States specification bumpers with override bars.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "mam-timeline",
    "conceptcarz-1970"
   ],
   "evidence": [
    {
     "ref": "mam-timeline",
     "quote": "All U.S.-bound Ghias get plumber's delight bumper overrider tubes."
    },
    {
     "ref": "conceptcarz-1970",
     "quote": "There are United States specification bumpers complete with override bars"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The convertible's padded soft top closes almost flush with the body line, and Motor Trend noted in 1961 that the padding hid the bows and reduced noise.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "vw-newsroom-cab",
    "mt-1961-04"
   ],
   "evidence": [
    {
     "ref": "vw-newsroom-cab",
     "quote": "closes almost completely with the body line, giving the Type 14 an extremely elegant appearance"
    },
    {
     "ref": "mt-1961-04",
     "quote": "The outside of the top is padded so that there is virtually no indication of bows"
    }
   ]
  },
  {
   "section": "market",
   "claimText": "As of September 2026 classic.com's average price for a Volkswagen Karmann Ghia is $29,668, with a market benchmark of $46,000 and 25 cars currently for sale.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-kg"
   ],
   "evidence": [
    {
     "ref": "classic-kg",
     "quote": "The average price of a Volkswagen Karmann Ghia is $29,668."
    }
   ]
  },
  {
   "section": "market",
   "claimText": "classic.com's lowest recorded Karmann Ghia sale is $3,000 for a 1968 convertible on July 21, 2025, as of September 2026.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-kg"
   ],
   "evidence": [
    {
     "ref": "classic-kg",
     "quote": "$3,000 for a 1968 Volkswagen Karmann Ghia Convertible on July 21, 2025"
    }
   ]
  },
  {
   "section": "market",
   "claimText": "At Mecum Kissimmee in 2025 a 1970 coupe sold for $34,100 and a 1970 convertible for $44,000, per conceptcarz's auction table, which does not say whether premium is included.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "conceptcarz-1970"
   ],
   "evidence": [
    {
     "ref": "conceptcarz-1970",
     "quote": "1970 Volkswagen Karmann Ghia Coupe Chassis#: 1402759603 Sold for USD$34,100 2025 Mecum : Kissimmee"
    }
   ]
  },
  {
   "section": "market",
   "claimText": "Restored 1970 convertibles brought $12,650 including buyer's premium at RM Monterey in August 2004 and $13,200 including premium at RM Amelia Island in 2009.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "scm-1970-conv",
    "conceptcarz-1970"
   ],
   "evidence": [
    {
     "ref": "scm-1970-conv",
     "quote": "This 1970 Karmann Ghia Convertible sold for $12,650, including buyer's premium, at the RM Monterey auction"
    },
    {
     "ref": "conceptcarz-1970",
     "quote": "As bidding came to a close, the lot had been sold for $13,200, including buyer's premium."
    }
   ]
  },
  {
   "section": "market",
   "claimText": "A 1974 US-market coupe with 63,750 miles sold on Hagerty's marketplace on June 15, 2026 for $7,750; the listing describes front disc brakes, pop-out rear quarter windows and a trailer hitch.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "hagerty-lot-1974"
   ],
   "evidence": [
    {
     "ref": "hagerty-lot-1974",
     "quote": "front disc brakes, pop-out rear quarter windows, and a trailer hitch"
    }
   ]
  },
  {
   "section": "market",
   "claimText": "Hagerty reported in July 2019 that coupes were worth about 28 percent less than convertibles, after an 80 percent spike in condition 2 values in 2015.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "hagerty-us-2019"
   ],
   "evidence": [
    {
     "ref": "hagerty-us-2019",
     "quote": "currently coupes are worth about 28-percent less than their soft-top siblings"
    }
   ]
  },
  {
   "section": "market",
   "claimText": "A 1964 coupe with 1,900 miles sold for $8,247 including buyer's premium at Christie's Retromobile in Paris on February 8, 2003, about half its low estimate; this is a dated European data point.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "scm-1964"
   ],
   "evidence": [
    {
     "ref": "scm-1964",
     "quote": "this very nice K-G was worth about half its low estimate"
    }
   ]
  },
  {
   "section": "market",
   "claimText": "As of September 2026 the Type 34 Razor Edge averages $38,429 on classic.com with a lowest recorded sale of $23,050 on August 18, 2022.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-t34"
   ],
   "evidence": [
    {
     "ref": "classic-t34",
     "quote": "$23,050 for a 1964 VOLKSWAGEN Karmann Ghia Type 34 'Razor Edge' on August 18, 2022"
    }
   ]
  },
  {
   "section": "problems",
   "claimText": "Rust is the main problem: a UK parts supplier calls it the biggest killer of the cars and Hagerty says the heater channels can rust unseen and that the sills are vital to structural integrity, especially on the convertible.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "heritage-kg",
    "hagerty-guide"
   ],
   "evidence": [
    {
     "ref": "heritage-kg",
     "quote": "Rust will be the biggest KG killer. The dreaded tin worm seems particularly partial to the Karmann's metalwork."
    },
    {
     "ref": "hagerty-guide",
     "quote": "The heater channels can rust unseen, while the sills are vital to the car's structural integrity, especially on the cabriolet."
    }
   ]
  },
  {
   "section": "problems",
   "claimText": "Convertible floorpans are likely to be rustier than coupe floorpans because the top or its rubbers have probably let in water.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "heritage-kg"
   ],
   "evidence": [
    {
     "ref": "heritage-kg",
     "quote": "floorpans on convertibles are likely to be more rusty, simply because the hood or hood rubbers have probably let in water"
    }
   ]
  },
  {
   "section": "problems",
   "claimText": "Body repair sections are available, including the nose cone, though parts for the earliest cars are harder to find; Hagerty says almost all parts are available to keep a Karmann Ghia running.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "heritage-kg",
    "hagerty-guide"
   ],
   "evidence": [
    {
     "ref": "heritage-kg",
     "quote": "stock a variety of Karmann Ghia body repair sections, including part of that difficult to shape properly nose cone"
    },
    {
     "ref": "hagerty-guide",
     "quote": "With plenty around and almost all parts available to keep a Karmann Ghia running and driving, it's a popular, stylish, and eminently usable entrée to the world of classic cars."
    }
   ]
  },
  {
   "section": "problems",
   "claimText": "Hagerty says a notchy or stiff gear shift is likely a worn nylon block in the selector rod, and play in the engine's bottom pulley points toward an imminent engine rebuild.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "hagerty-guide"
   ],
   "evidence": [
    {
     "ref": "hagerty-guide",
     "quote": "A notchy or stiff gear shift is likely down to the nylon block in the selector rod being worn and needing replacement"
    }
   ]
  },
  {
   "section": "problems",
   "claimText": "NHTSA's recall database returns no campaign filed under the Karmann Ghia name for the 1966 through 1974 model years, and its Volkswagen recall indexes list only the Beetle for 1970 and the Type III for 1972; early campaigns were filed loosely, so this is an absence of records rather than proof.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "nhtsa-vw-1970",
    "nhtsa-vw-1972"
   ],
   "evidence": [
    {
     "ref": "nhtsa-vw-1970",
     "quote": "Count 1 Message Results returned successfully results modelYear 1970 make VOLKSWAGEN model BEETLE"
    },
    {
     "ref": "nhtsa-vw-1972",
     "quote": "Count 1 Message Results returned successfully results modelYear 1972 make VOLKSWAGEN model TYPE III"
    }
   ]
  },
  {
   "section": "problems",
   "claimText": "Period US writers considered the drivetrain durable: Motor Trend said in 1960 that the Volkswagen engine very seldom needs an overhaul, and Jedlicka credits the Beetle's durable components.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "mt-1960-05",
    "jedlicka-kg"
   ],
   "evidence": [
    {
     "ref": "mt-1960-05",
     "quote": "It’s a durable engine, very seldom needs an overhaul and seems to love operating at peak rpm."
    },
    {
     "ref": "jedlicka-kg",
     "quote": "solid construction and durable components from the rear-engine Volkswagen Beetle gave the Karmann-Ghia a winning combination"
    }
   ]
  }
 ]
};
