/**
 * Researched model draft - Volvo P1800, 1800S, 1800E and 1800ES (1961-1973).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedP1800 = {
 "slug": "volvo/p1800",
 "make": "Volvo",
 "model": "P1800",
 "generation": "P1800, 1800S, 1800E, 1800ES",
 "generationCode": null,
 "trim": null,
 "yearStart": 1961,
 "yearEnd": 1973,
 "bodyStyles": [
  "2-door coupe (fixed roof), P1800, 1800S and 1800E",
  "2-door sport wagon with extended roofline and rear hatch, 1800ES"
 ],
 "engines": [
  "B18 pushrod inline four-cylinder, twin carburetors: 100 gross hp at launch, later 108 gross hp SAE and then 115 gross hp with 112 lb-ft",
  "B20B 1,986 cc pushrod inline four-cylinder, twin SU carburetors: 118 gross hp SAE (105 hp DIN net), from the fall of 1968 in the 1800S",
  "B20E 1,986 cc pushrod inline four-cylinder with Bosch D-Jetronic electronic fuel injection: 130 gross hp at 6,000 rpm and 130 lb-ft (1800E, 1970-1971); North American 1800E and 1800ES cars for 1972-1973 rated at 112 SAE net hp on lower compression"
 ],
 "productionTotal": null,
 "productionNotes": "The sources disagree on how many 1800s were built, and the disagreement is large. Volvo's own heritage page gives 39,414 cars, of which 5,078 were 1800ES wagons. Hagerty, Sports Car Market and Ate Up With Motor all give 47,485 in total including 8,078 ES wagons; Sports Car Market splits that into 39,407 coupes and 8,078 wagons, and Classic Motorsports rounds it to about 47,500. The two ES figures differ by exactly 3,000, and Volvo's all-body total sits within seven cars of Sports Car Market's coupe-only figure. No source consulted explains either gap, so no total is given here. Ate Up With Motor calls 47,485 the most commonly quoted figure, which describes its popularity, not its accuracy. By type, Hagerty gives about 24,000 1800S, 9,400 1800E and about 8,000 1800ES after Jensen's first 6,000 cars. The Volvo Enthusiasts Club's archived buyer's guide lists production by factory type and season: 4,500 units in each of the August 1965 to July 1966 and August 1966 to July 1967 seasons, 2,800 for August 1967 to July 1968, 1,693 for the August 1968 to July 1969 season, the first with the B20, and 2,799 for the first 1800E season. Ate Up With Motor independently gives the same 1,693 for 1969. On the US share, the only figure found is Ate Up With Motor's statement that roughly half of all 1800s went to the US; no source gives a count by US model year. Research gaps: no Volvo US press kit or archived US brochure was retrieved, no NHTSA or EPA record was checked for these model years, and no period US road test was found from a source above low reliability. A reprinted period data panel for an 1800E on sportscars.tv names no magazine and is not used; the only acceleration figures given here come from Hagerty and Curbside Classic. Wikipedia could not be retrieved and is not cited.",
 "notableTrims": [
  {
   "name": "P1800, Jensen-assembled (1961-1963 model years)",
   "note": "Final assembly by Jensen Motors in West Bromwich, England, on bodies pressed at Linwood, Scotland. Jensen built 6,000 of the 10,000 cars it was contracted for. These cars carry a 'Built in England by Jensen Motors' chassis plate that the Swedish cars lost, and classic.com's P1800 benchmark sits above every later variant."
  },
  {
   "name": "1800S (1963-1969 model years)",
   "note": "Assembly moved to Volvo's Lundby plant in Gothenburg in 1963 and the S suffix followed. The volume car of the run: the Volvo Enthusiasts Club records 4,500 units in each of the two seasons from August 1965 to July 1967, with the B18 raised to 108 and then 115 gross hp."
  },
  {
   "name": "1800S with B20 (1969 model year)",
   "note": "The August 1968 to July 1969 season was the first with the 1,986 cc B20, still on twin carburetors. Production fell to 1,693. Its dual-circuit brake servo is no longer available new, per Classic Motorsports."
  },
  {
   "name": "1800E (1970-1972 model years)",
   "note": "Bosch D-Jetronic fuel injection, 130 gross hp and four-wheel disc brakes. The 1972 North American cars lost compression and were rated at 112 SAE net hp, so a 1970-1971 car and a 1972 car are not the same engine on paper."
  },
  {
   "name": "1800ES (1972-1973 model years)",
   "note": "The sport wagon with the extended roofline, listed at $5,150 POE in the US. Built for less than two seasons and ended June 27, 1973, ahead of the 1974 federal standards. Sources disagree on whether 5,078 or 8,078 were built."
  },
  {
   "name": "Automatic 1800E and 1800ES",
   "note": "The Borg-Warner 35 automatic was offered on the late cars. Hagerty records that automatics are not popular with buyers and were often bought by older drivers."
  }
 ],
 "specs": {
  "layout": "Front-engine, rear-wheel drive",
  "chassis": "Steel unit body; bodies pressed by Pressed Steel at Linwood, Scotland through 1968, then at Olofstrom, Sweden from the 1800E",
  "engine": "B18 then B20 (1,986 cc) pushrod inline four-cylinder; twin carburetors through 1969, Bosch D-Jetronic injection on the B20E",
  "power": "100 gross hp (P1800 launch), 108 and 115 gross hp (1800S B18), 118 gross hp (B20B), 130 gross hp at 6,000 rpm (1800E 1970-1971), 112 SAE net hp (North American 1800E and 1800ES 1972-1973)",
  "torque": "112 lb-ft (115 hp B18); 130 lb-ft (B20E); other figures not documented in the sources consulted",
  "transmission": "Manual gearbox with overdrive; Borg-Warner 35 automatic offered on the late 1800E and 1800ES",
  "weight": "Not documented by a source above low reliability in the research for this page",
  "acceleration": "0-60 mph in 10 seconds for the injected B20 car per Hagerty; 11.3 seconds for the 1800ES per Curbside Classic; no period US road-test figure from a source above low reliability",
  "fuel_system": "Twin carburetors (twin SU on the B20B); Bosch D-Jetronic electronic fuel injection on the 1800E and 1800ES",
  "brakes": "Four-wheel disc brakes from the 1800E; the earlier cars' brake specification is not documented in the sources consulted",
  "us_price_new": "$3,795 POE (P1800) and $5,150 POE (1800ES), each from one source, Ate Up With Motor; $3,995 POE (1800S); $4,200 (1966, Sports Car Market); $4,560 POE East Coast and $4,655 POE West Coast (1800E, Ate Up With Motor, single source)",
  "assembly": "Jensen Motors, West Bromwich, England (1961 to early 1963); Volvo Lundby plant, Gothenburg, Sweden (1963 to 1973)",
  "production": "Disputed: 39,414 including 5,078 1800ES (Volvo heritage) against 47,485 including 8,078 1800ES (Hagerty, Sports Car Market, Ate Up With Motor)"
 },
 "summary": "The Volvo 1800 ran from 1961 through the 1973 model year in four forms: the P1800 assembled by Jensen Motors in West Bromwich, England, the 1800S built in Gothenburg after assembly moved home in 1963, the fuel-injected 1800E, and the 1800ES sport wagon. The styling came from the young Swede Pelle Petterson, though the design was at first to be credited only to Frua. Power came from Volvo's pushrod B18 four and, from the fall of 1968, the 2.0-liter B20; the 1800E added Bosch D-Jetronic injection and four-wheel disc brakes at 130 gross hp. How many were built is not settled: Volvo's heritage page says 39,414 including 5,078 wagons, while Hagerty, Sports Car Market and Ate Up With Motor give 47,485 including 8,078. Owner and club sources name rust, not the drivetrain, as the main issue, and the front fenders and nose as where it starts. As of November 2026 classic.com's benchmarks run from $22,479 for an 1800ES to $39,426 for a P1800.",
 "history": "## How a Swedish sports car came to be built in England\n\nIn 1960 Volvo presented a new sports car. Five design proposals went to Volvo president Engellau, and he went straight to the one drawn by the young Swede Pelle Petterson, while making it clear that the design would be credited only to Frua. Volvo's heritage page now describes the styling as Italian-influenced and credits Petterson by name. Building the car was the harder problem. Karmann, the obvious choice to make the body, was forced to bow out. The answer was British: bodies pressed by Pressed Steel at Linwood in Scotland and final assembly by Jensen Motors in West Bromwich, under a contract for 10,000 cars. Roughly half of all 1800s would eventually go to the US, but the first ones came from the English Midlands.\n\n## The Jensen cars, 1961-1963\n\nThe first P1800s carried the B18 four at 100 gross hp and started at $3,795 POE in the US, a price that rests on one source, Ate Up With Motor. Jensen built only 6,000 of the 10,000 cars contracted before assembly moved to Volvo's Lundby plant in Gothenburg in early 1963. Why it moved is told two ways. Ate Up With Motor records that Volvo engineers were dissatisfied with Jensen's quality control and Hagerty cites initial quality problems, while Classic Motorsports says a new assembly line gave Volvo the capacity at home, and adds that the hand-built Jensen cars, lead-filled seams included, are not more rust-prone than the Swedish ones. The Jensen cars carry a 'Built in England by Jensen Motors' chassis plate that later cars lost. The car's fame in the US owes much to The Saint, the television series that ran from 1962 to 1969, in which the hero drove a P1800.\n\n## The 1800S, 1963-1969\n\nBuilt in Sweden, the car became the 1800S. The Volvo Enthusiasts Club records 4,500 units in each of the two seasons from August 1965 to July 1967, then 2,800 for August 1967 to July 1968. The B18 rose to 108 gross hp and then to 115 gross hp with 112 lb-ft, and the 1800S listed at $3,995 POE in the US, with Sports Car Market giving $4,200 for 1966. Bodies still came from Linwood. In the fall of 1968 the 1,986 cc B20 arrived at 118 gross hp, or 105 net hp on the DIN basis, and the August 1968 to July 1969 season built only 1,693 cars.\n\n## The 1800E\n\nFor the 1970 model year the car became the 1800E, the E for Einspritzung: Bosch D-Jetronic fuel injection in place of the twin SU carburetors, a hotter camshaft, 130 gross hp and 130 lb-ft, and four-wheel disc brakes. Body production moved to Olofstrom in Sweden with it. Hagerty puts the injected car's 0-60 mph time at 10 seconds. For 1972 and 1973, lower compression, 10.5 to 8.7:1, left North American 1800E and 1800ES cars at 112 SAE net hp.\n\n## The 1800ES and the end\n\nThe 1800ES was shown in the fall of 1971 for the 1972 model year: the coupe's nose with an extended roofline and a rear hatch, at $5,150 POE in the US, again a single-source price from Ate Up With Motor, with the Borg-Warner 35 automatic on the options list. Curbside Classic gives the ES a 0-60 mph time of 11.3 seconds. Rather than meet the more complex federal standards that took effect for the 1974 model year, Volvo ended production on June 27, 1973.",
 "marketNotes": "classic.com tracks the four variants as separate markets, and as of November 2026 its benchmarks run in build order. The P1800 market, model years 1961 to 1963, stands at $39,426; recorded sales range from $4,100 for a 1962 Jensen-built project in January 2016 to $95,200 for a 1962 car in Florida in March 2024. The 1800S, model years 1963 to 1969, stands at $36,828, with the lowest US-dollar sale shown $16,750 for a 1964 car in Massachusetts in July 2025. The top of that market is not a stock car: a 1965 Cyan P1800, the modern Cyan Racing restomod, sold for $467,000 in California in August 2025. The 1800E, model years 1970 to 1972, stands at $24,467, and two listed sales of 1972 cars are $13,000 on July 24, 2025 and $29,750 on March 9, 2025. The 1800ES stands at $22,479, with a 1973 project at $5,000 in April 2026 and a 1973 car at $50,000 in February 2026. classic.com gives the ES as 1971 to 1974, which runs wider than the 1972 and 1973 model years the other sources give. The pages do not say whether figures include buyer's premium.",
 "whatToLookFor": "A Jensen car is identified by its 'Built in England by Jensen Motors' chassis plate, which the Swedish cars lost; the chassis number itself sits on the left side below the windshield, per Sports Car Market. The Volvo Enthusiasts Club guide names the front fenders as a particularly expensive place to repair rust, with the rear lower section of each front fender very prone, foam that holds moisture and rots the fender from the underside, and a splash plate behind which mud collects until the bottom of the fender rusts away. The nose panel rusts on all models around the headlights and side lights, and the guide flags a chassis member as very prone to rust. A US owner forum post lists the sills, the floor boards under the carpet, the front edge of the frame where the front bumper mounts and the front jacking points behind the front wheels as places for rust and filler over rust. Hagerty notes that unit construction means rust issues can be profound. The overdrive is often found not working, per Classic Motorsports, which also gives warm-idle oil pressure of about 40 psi and 50 to 55 psi at cruising speed as normal, and notes that the factory-type oil filter carries a check valve that keeps oil from draining back. Carbureted B20 cars from the 1969 season use a dual-circuit brake servo that is no longer available new. US cars for 1972 and 1973 carry the low-compression engine rated at 112 SAE net hp. Automatic cars exist and, per Hagerty, are not popular.",
 "commonProblems": "A US owner forum post calls rust by far the biggest issue on an 1800 and says the cars rust severely in a moist climate and on salted winter roads, and Hagerty says unit construction means rust issues can be profound. The Volvo Enthusiasts Club guide locates much of it in the front fenders, where repair is particularly expensive: the rear lower section, the underside where foam holds moisture, and the bottom edge where mud trapped behind the splash plate rots the panel. It also names the nose panel around the head and side lights and a chassis member it calls very prone to rust. The owner post adds the sills, the floor boards, the front jacking points and the front edge of the frame where the front bumper mounts. Classic Motorsports sets this against the period, calling the P1800 very durable and well built compared with other cars of its time, and rejects the idea that Jensen-assembled cars are more rust-prone than Swedish ones. The drivetrain is the opposite story: Classic Motorsports describes the B18 and B20 as known for their reliability, and the owner post calls the drivetrain and mechanical parts pretty much bulletproof. The overdrive is the common mechanical fault, often found not working. Most chassis components are standard Volvo 122 parts; the exception noted is the dual-circuit brake servo on carbureted B20 cars, which is no longer available new. The owner post calls original air conditioning a money pit unless it has been converted to R134a. No source consulted documents failure patterns specific to the D-Jetronic injection, and no US repair cost figure from a second source was found, so none is given.",
 "valueTrajectory": "New, the car listed in the US at $3,795 POE as a Jensen P1800, $3,995 POE as an 1800S, $4,560 POE on the East Coast as an 1800E and $5,150 POE as an 1800ES; the P1800, 1800E and 1800ES prices each rest on one source, Ate Up With Motor. In March 2010 Classic Motorsports put nice drivers at $6,000 to $10,000 and the very best at around $20,000. As of November 2026 classic.com's benchmarks are $39,426 for the P1800, $36,828 for the 1800S, $24,467 for the 1800E and $22,479 for the 1800ES. Every one of those benchmarks sits above the 2010 figure for the very best cars, and they rank the variants by age, with the earliest cars at the top and the wagon at the bottom, the reverse of their order when new. A Hagerty editorial asks why the 1800ES is not worth more; on the November 2026 benchmarks it is still the lowest of the four. The outliers are restomods: the $467,000 Cyan sale in August 2025 is a modern build on a 1965 car.",
 "overallConfidence": "medium",
 "sources": [
  {
   "ref": "volvo-heritage",
   "title": "VOLVO P1800/1800S/1800ES (1961-1973)",
   "url": "https://media.volvocars.com/global/en-gb/heritagemodels/volvo-p1800/227026",
   "publisher": "Volvo Cars Global Newsroom",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Volvo heritage page: produced 39,414 of which 5,078 were 1800 ES; Volvo presented a new sports car in 1960, production from 1961; styling by Pelle Petterson; final assembly at Jensen Motors in West Bromwich; assembly to Gothenburg in 1963; body production to Olofstrom with the 1800E in 1969; B18 at 100 then 108, 115 and 120 hp; B20 at 118 hp in fall 1968; 1800 ES presented fall 1971; The Saint 1962-1969."
  },
  {
   "ref": "ateup-history",
   "title": "Sainted Swede: The Volvo P1800 and 1800ES",
   "url": "https://ateupwithmotor.com/model-histories/volvo-p1800-history/view-all/",
   "publisher": "Ate Up With Motor",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Long-form model history: five proposals presented to Engellau and his choice of Pelle Petterson's design and Frua credit; Karmann bowing out; Pressed Steel Linwood bodies; Jensen built 6,000 of 10,000 contracted; quality dissatisfaction; Lundby from early 1963; US POE prices $3,795 (P1800), $3,995 (1800S), $4,560 East and $4,655 West (1800E), $5,150 (1800ES); gross SAE outputs 100, 108, 115, 118, 130 hp; E for Einspritzung, Bosch D-Jetronic replacing the twin SUs, hotter K camshaft; four-wheel discs; 112 SAE net hp for North American 1972-73 cars; Borg-Warner 35 automatic; 1,693 units for 1969; end June 27, 1973; 47,485 most commonly quoted, roughly half to the US."
  },
  {
   "ref": "scm-profile",
   "title": "1961-1972 Volvo 1800",
   "url": "https://www.sportscarmarket.com/profile/1961-1972-volvo-1800",
   "publisher": "Sports Car Market",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Profile by Rob Sass (January 2006). The article body is paywalled; only the visible data table is cited: 39,407 coupes and 8,078 wagons produced 1961-73; original list price $4,200 (1966); chassis number left side below windshield. Its SCM valuation is undated and not used."
  },
  {
   "ref": "hagerty-1800",
   "title": "The 1961-73 Volvo 1800 is a svelte Swede that's getting more expensive",
   "url": "https://www.hagerty.com/media/?p=5438",
   "publisher": "Hagerty Media",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Editorial: Jensen built the first 6000 cars; initial quality control problems with Jensen-built cars; about 24,000 1800S, 9400 1800E and about 8000 ES. Its dollar values carry no date and are not used."
  },
  {
   "ref": "hagerty-1800es",
   "title": "Why isn't the 1971-73 Volvo 1800ES wagon worth more?",
   "url": "https://hagerty.com/media/?p=4243",
   "publisher": "Hagerty Media",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Editorial: total production of all 1800s 47,485 including 8078 ES wagons; B20 with Bosch D-Jetronic cut 0-60 mph to 10 seconds; automatic transmissions not popular; unit construction means rust issues can be profound. Undated Hagerty Price Guide figure not used."
  },
  {
   "ref": "cms-sporty-swede",
   "title": "Sporty Swede: Volvo P1800",
   "url": "https://classicmotorsports.com/articles/sporty-swede-volvo-p1800",
   "publisher": "Classic Motorsports",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "US magazine buyer feature, March 2010 issue: starting price $3995; 1800E injection makes 130 hp at 6000 rpm; about 47,500 built; Jensen cars hand built with lead-filled seams and not more rust-prone; move to Sweden for capacity; overdrive often not working; chassis parts shared with the 122; dual-circuit servo on carbureted B20 cars not available new; oil filter check valve; oil pressure 40 psi idle, 50 to 55 psi cruising; March 2010 values $6000 to $10,000, best around $20,000."
  },
  {
   "ref": "vec-general",
   "title": "Volvo P1800 - Jensen Motors, England built Model - Type 'A'",
   "url": "https://archive.volvoenthusiastsclub.co.uk/buyersguides/p1800/general.htm",
   "publisher": "Volvo Enthusiasts Club (archive)",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Club buyer's guide, production by factory type: Jensen cars carry a 'Built in England by Jensen Motors' chassis plate the Swedish cars lost; bodyshells built at Linwood, Scotland for all 1800s up to 1968. Used for history and identification only, not values."
  },
  {
   "ref": "vec-general2",
   "title": "Volvo P1800 buyer's guide, general (page 2)",
   "url": "https://archive.volvoenthusiastsclub.co.uk/buyersguides/p1800/general2.htm",
   "publisher": "Volvo Enthusiasts Club (archive)",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Production by type and season: Type F and Type M 4,500 units each (August 1965 to July 1967), Type P 2,800, Type S 1,693 (August 1968 to July 1969, first with the B20 1986cc engine), 1800E Type T 2,799 (August 1969 to July 1970)."
  },
  {
   "ref": "vec-body",
   "title": "Body problem areas",
   "url": "https://archive.volvoenthusiastsclub.co.uk/buyersguides/p1800/bodyproblem.htm",
   "publisher": "Volvo Enthusiasts Club (archive)",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Rust locations: front fenders (expensive to repair), rear lower section of the front fender, moisture-holding foam, splash plate trapping mud, nose panel around head and side lights, chassis member in the inner fender."
  },
  {
   "ref": "brickboard-problems",
   "title": "Potential problems? [1800][1972]",
   "url": "https://www.brickboard.com/RWD/volvo/618567/1800/potential_problems.html",
   "publisher": "Brickboard Volvo RWD 1800 Forum",
   "sourceType": "club-forum",
   "reliability": "low",
   "notes": "US owner forum post, April 2003: rust the biggest issue, severe in moist climates and on salted roads; places to look for rust and filler: sills, front fenders over headlights and lower rear edge, floor boards under the carpet, front of frame at bumper mounts, front jack points; drivetrain and mechanical parts pretty much bulletproof; overdrive engagement; original air conditioning a money pit unless converted to R134a."
  },
  {
   "ref": "curbside-rt-1800es",
   "title": "Vintage R&T Review: 1972 Volvo 1800ES",
   "url": "https://www.curbsideclassic.com/vintage-reviews/vintage-rt-review-1972-volvo-1800es/",
   "publisher": "Curbside Classic",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Curbside Classic article on the 1800ES: gives a 0-60 mph run of 11.3 seconds and calls performance middling. The fetched text does not attribute the figure to a named magazine or year, so it is cited as Curbside Classic's figure."
  },
  {
   "ref": "classic-p1800",
   "title": "Volvo 1800 P1800 Market",
   "url": "https://www.classic.com/m/volvo/1800/p1800",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of November 2026: CMB $39,426; model years 1961 to 1963; lowest recorded sale $4,100 for a 1962 Jensen P1800 project, January 12, 2016; highest $95,200 for a 1962 P1800 in Florida, March 2, 2024."
  },
  {
   "ref": "classic-1800s",
   "title": "Volvo 1800 1800S Market",
   "url": "https://www.classic.com/m/volvo/1800/1800s",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of November 2026: CMB $36,828; model years 1963 to 1969; lowest US-dollar sale shown $16,750 for a 1964 1800S, Massachusetts, July 23, 2025; highest $467,000 for a 1965 Volvo Cyan P1800 restomod, California, August 16, 2025; renamed 1800S after production moved to Sweden."
  },
  {
   "ref": "classic-1800e",
   "title": "Volvo 1800 1800E Market",
   "url": "https://www.classic.com/m/volvo/1800/1800e",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of November 2026: CMB $24,467; model years 1970 to 1972; listed sales from $13,000 (1972 car, July 24, 2025) to $29,750 (1972 car, March 9, 2025); renamed 1800E for the 1970 model year."
  },
  {
   "ref": "classic-1800es",
   "title": "Volvo 1800 1800ES Market",
   "url": "https://www.classic.com/m/volvo/1800/1800es/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of November 2026: CMB $22,479; market dated 1971 to 1974; introduced for the 1972 model year; 1973 project sold $5,000 April 13, 2026; 1973 car sold $50,000 February 20, 2026."
  }
 ],
 "claims": [
  {
   "section": "production",
   "claimText": "Total 1800 production is disputed: Volvo's heritage page gives 39,414 cars including 5,078 1800ES, while Hagerty, Sports Car Market and Ate Up With Motor give 47,485 including 8,078 wagons, and Classic Motorsports gives about 47,500.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "volvo-heritage",
    "hagerty-1800es",
    "scm-profile",
    "ateup-history",
    "cms-sporty-swede"
   ],
   "conflictNote": "Volvo's heritage page states 39,414 produced, 5,078 of them 1800 ES. Hagerty states 47,485 including 8078 ES wagons; Sports Car Market lists 39,407 coupes and 8,078 wagons; Ate Up With Motor calls 47,485 including about 8,078 wagons the most commonly quoted figure; Classic Motorsports says about 47,500. The two ES figures differ by exactly 3,000 and Volvo's total is within seven cars of Sports Car Market's coupe figure. No source consulted explains the gap. Not resolved.",
   "computed": [
    "3,000",
    "7"
   ],
   "evidence": [
    {
     "ref": "volvo-heritage",
     "quote": "Produced: 39,414 of which 5,078 were 1800 ES"
    },
    {
     "ref": "hagerty-1800es",
     "quote": "Total production of all 1800s reached 47,485, including 8078 ES wagons."
    },
    {
     "ref": "scm-profile",
     "quote": "39,407 coupes, 8,078 wagons"
    },
    {
     "ref": "ateup-history",
     "quote": "the most commonly quoted is 47,485 (including about 8,078 estates), roughly half of which went to the U.S."
    },
    {
     "ref": "cms-sporty-swede",
     "quote": "In the end, Volvo built a total of about 47,500 P1800 cars."
    }
   ]
  },
  {
   "section": "production",
   "claimText": "Hagerty breaks production down as about 24,000 1800S, 9,400 1800E and about 8,000 1800ES after Jensen's first 6,000 cars; Sports Car Market separately gives 39,407 coupes. This breakdown is Hagerty's alone.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "hagerty-1800",
    "scm-profile"
   ],
   "evidence": [
    {
     "ref": "hagerty-1800",
     "quote": "Volvo built about 24,000 1800S models, 9400 1800Es, and about 8000 ESs."
    },
    {
     "ref": "hagerty-1800",
     "quote": "After Jensen screwed together the first 6000 cars"
    },
    {
     "ref": "scm-profile",
     "quote": "39,407 coupes, 8,078 wagons"
    }
   ]
  },
  {
   "section": "production",
   "claimText": "Ate Up With Motor states that roughly half of all 1800s went to the US; no source consulted gives a US count by model year, so this is a single-source share.",
   "confidence": "low",
   "status": "verified",
   "sourceRefs": [
    "ateup-history"
   ],
   "evidence": [
    {
     "ref": "ateup-history",
     "quote": "the most commonly quoted is 47,485 (including about 8,078 estates), roughly half of which went to the U.S."
    }
   ]
  },
  {
   "section": "production",
   "claimText": "The Volvo Enthusiasts Club guide lists 4,500 units for each of the August 1965 to July 1966 and August 1966 to July 1967 seasons, 2,800 for August 1967 to July 1968, 1,693 for August 1968 to July 1969, the first season with the 1,986 cc B20, and 2,799 for the first 1800E season; Ate Up With Motor gives the same 1,693 for 1969.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "vec-general2",
    "ateup-history"
   ],
   "evidence": [
    {
     "ref": "vec-general2",
     "quote": "Production Years – August 1965 to July 1966 – 4,500 Units produced"
    },
    {
     "ref": "vec-general2",
     "quote": "Production Years – August 1966 to July 1967 – 4,500 Units Produced"
    },
    {
     "ref": "vec-general2",
     "quote": "Production Years – August 1967 to July 1968 – 2,800 Units Produced"
    },
    {
     "ref": "vec-general2",
     "quote": "Production Years – August 1968 to July 1969 – 1,693 Units Produced"
    },
    {
     "ref": "vec-general2",
     "quote": "Production Years – August 1969 to July 1970 – 2,799 Units Produced."
    },
    {
     "ref": "vec-general2",
     "quote": "the first model to be fitted with the new B20 1986cc engine"
    },
    {
     "ref": "ateup-history",
     "quote": "falling to a disappointing 1,693 units for 1969."
    }
   ]
  },
  {
   "section": "history",
   "claimText": "Jensen Motors carried out final assembly in West Bromwich on bodies made by Pressed Steel at Linwood, Scotland, and built only 6,000 of the 10,000 cars originally contracted; Linwood supplied bodyshells for all 1800s up to 1968.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "volvo-heritage",
    "ateup-history",
    "hagerty-1800",
    "vec-general"
   ],
   "evidence": [
    {
     "ref": "volvo-heritage",
     "quote": "final assembly took place at Jensen Motors Ltd. in West Bromwich."
    },
    {
     "ref": "ateup-history",
     "quote": "the British company had so far built only 6,000 of the 10,000 units originally contracted."
    },
    {
     "ref": "ateup-history",
     "quote": "the new car's body to be manufactured in Scotland at Pressed Steel's Linwood facility"
    },
    {
     "ref": "hagerty-1800",
     "quote": "After Jensen screwed together the first 6000 cars"
    },
    {
     "ref": "vec-general",
     "quote": "Bodyshells for the 1800 were in fact built at Linwood, Scotland for ALL 1800's up to 1968."
    }
   ]
  },
  {
   "section": "history",
   "claimText": "Assembly moved to Volvo's Lundby plant in Gothenburg in early 1963; the sources disagree on why, with Ate Up With Motor and Hagerty citing Jensen's quality control and Classic Motorsports citing new capacity in Sweden.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "volvo-heritage",
    "ateup-history",
    "hagerty-1800",
    "cms-sporty-swede"
   ],
   "conflictNote": "Ate Up With Motor states that Volvo engineers remained dissatisfied with Jensen's quality control, and Hagerty refers to initial quality control problems with the Jensen-built cars. Classic Motorsports states that thanks to a new assembly line Volvo had the manufacturing capacity at home. Volvo's heritage page gives the 1963 transfer without a reason. Not resolved by any source consulted here.",
   "evidence": [
    {
     "ref": "volvo-heritage",
     "quote": "In 1963, the assembly was transferred to Gothenburg"
    },
    {
     "ref": "ateup-history",
     "quote": "In early 1963, P1800 production was transferred to Volvo’s Lundby plant."
    },
    {
     "ref": "ateup-history",
     "quote": "Volvo engineers remained dissatisfied with Jensen's quality control."
    },
    {
     "ref": "hagerty-1800",
     "quote": "Initial quality control problems with the Jensen-built P1800s"
    },
    {
     "ref": "cms-sporty-swede",
     "quote": "Thanks to a new assembly line, Volvo simply had the manufacturing capacity at home in Sweden."
    }
   ]
  },
  {
   "section": "history",
   "claimText": "Volvo presented a new sports car in 1960 with styling by the young Swede Pelle Petterson; of five proposals presented to Engellau, he chose Petterson's and stipulated that the design be credited only to Frua, after Karmann, the first choice to build it, bowed out.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "volvo-heritage",
    "ateup-history"
   ],
   "evidence": [
    {
     "ref": "volvo-heritage",
     "quote": "In 1960, Volvo presented a new sports car"
    },
    {
     "ref": "volvo-heritage",
     "quote": "This new sports car had Italian-influenced styling by young Swede Pelle Petterson and production began in 1961."
    },
    {
     "ref": "ateup-history",
     "quote": "Engellau immediately gravitated to Pelle’s design, discarding the others with only a cursory glance."
    },
    {
     "ref": "ateup-history",
     "quote": "He made it clear, however, that the design would be credited only to Frua."
    },
    {
     "ref": "ateup-history",
     "quote": "West Germany’s Karmann initially seemed the most likely choice, but it was forced to bow out"
    },
    {
     "ref": "ateup-history",
     "quote": "Segre and Helmer Petterson presented the five proposals to Engellau in early August."
    }
   ]
  },
  {
   "section": "history",
   "claimText": "The P1800 appeared in The Saint, the television series that ran from 1962 to 1969, and Volvo's heritage page credits the series with making the car very famous.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "volvo-heritage"
   ],
   "evidence": [
    {
     "ref": "volvo-heritage",
     "quote": "The P1800 became very famous because of its role in the \"The Saint\" TV series between 1962 and 1969"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "US prices new were $3,795 POE for the P1800, a single-source figure from Ate Up With Motor, and $3,995 POE for the 1800S, with Classic Motorsports and a Volvo advertisement quoted by Hagerty both giving $3995 and Sports Car Market giving $4,200 for 1966.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "ateup-history",
    "cms-sporty-swede",
    "hagerty-1800",
    "scm-profile"
   ],
   "evidence": [
    {
     "ref": "ateup-history",
     "quote": "U.S. cars started at $3,795 POE"
    },
    {
     "ref": "ateup-history",
     "quote": "Swedish cars were up to 21,000 SEK (about $4,050), U.S. models to $3,995 POE."
    },
    {
     "ref": "cms-sporty-swede",
     "quote": "The Volvo P1800 wasn’t an inexpensive car when new, with a starting price of $3995—quite a bit of money in the early 1960s."
    },
    {
     "ref": "hagerty-1800",
     "quote": "What's it like to own a $10,000 car? … Find out for $3995."
    },
    {
     "ref": "scm-profile",
     "quote": "$4,200 (1966)"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 1800E started at $4,560 POE on the East Coast and $4,655 POE in the West in the US; this is a single-source price from Ate Up With Motor.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "ateup-history"
   ],
   "evidence": [
    {
     "ref": "ateup-history",
     "quote": "U.S. cars started at $4,560 POE on the East Coast, $4,655 POE in the west."
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 1800ES started at $5,150 POE in the US; this is a single-source price.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "ateup-history"
   ],
   "evidence": [
    {
     "ref": "ateup-history",
     "quote": "In the U.S., the ES started at $5,150 POE, while U.K. cars ran to £2,651 with purchase tax,"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "Ate Up With Motor rates the B18 at 100 gross hp at launch, then 108 gross hp SAE and 115 gross hp with 112 lb-ft, and the B20B at 118 gross hp; Volvo's heritage page gives the B18 as 100, then 108, 115 and 120 hp, on a rating basis it does not state, and the B20 as 118 hp.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "ateup-history",
    "volvo-heritage"
   ],
   "conflictNote": "Volvo's heritage page lists a 120 hp step for the B18 that does not appear in Ate Up With Motor's gross SAE progression of 100, 108 and 115 hp for the B18. Volvo does not state the rating basis, so the difference may be gross against net or a different market's engine, but no source consulted reconciles it. Not resolved.",
   "evidence": [
    {
     "ref": "ateup-history",
     "quote": "the B18 was rated at 100 gross horsepower (75 kW)"
    },
    {
     "ref": "ateup-history",
     "quote": "raising output to 108 gross hp SAE (81 kW)."
    },
    {
     "ref": "ateup-history",
     "quote": "now 115 gross horsepower (86 kW) and 112 lb-ft (151 N-m)."
    },
    {
     "ref": "ateup-history",
     "quote": "Power was up only slightly, to 118 gross horsepower SAE (88 kW), or 105 net horsepower DIN (77 kW)."
    },
    {
     "ref": "volvo-heritage",
     "quote": "which initially developed 100 bhp and later 108, 115 and 120 bhp"
    },
    {
     "ref": "volvo-heritage",
     "quote": "In the autumn of 1968, a 2.0-litre engine, the B20, with an output of 118 bhp was introduced."
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 1800E, the E for Einspritzung, replaced the B20B's twin SU carburetors with Bosch D-Jetronic fuel injection and a hotter camshaft, and was rated at 130 gross hp at 6,000 rpm and 130 lb-ft in 1970 and 1971, with four-wheel disc brakes.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "ateup-history",
    "cms-sporty-swede",
    "hagerty-1800es"
   ],
   "evidence": [
    {
     "ref": "ateup-history",
     "quote": "In 1970 and 1971, this engine was rated at 130 gross horsepower (97 kW) and 130 lb-ft (176 N-m) of torque."
    },
    {
     "ref": "ateup-history",
     "quote": "The E stood for Einspritzung, signifying the replacement of the B20B’s dual S.U.s with Bosch electronic fuel injection,"
    },
    {
     "ref": "ateup-history",
     "quote": "Aside from its Bosch D-Jetronic injection, the B20E engine had a hotter ‘K’ camshaft,"
    },
    {
     "ref": "ateup-history",
     "quote": "To match its newfound power, the 1800E now had four-wheel disc brakes"
    },
    {
     "ref": "cms-sporty-swede",
     "quote": "The injection helps the car make 130 horsepower at 6000 rpm."
    },
    {
     "ref": "hagerty-1800es",
     "quote": "A 2.0-liter B20 engine with Bosch D-Jetronic fuel injection cut the 0–60 mph time to 10 seconds."
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "For 1972 and 1973, compression lowered from 10.5 to 8.7:1 reduced all North American 1800E and 1800ES cars to 112 SAE net hp; single source.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "ateup-history"
   ],
   "evidence": [
    {
     "ref": "ateup-history",
     "quote": "lower compression ratios had reduced all North American 1800E and 1800ES models to 112 SAE net horsepower"
    },
    {
     "ref": "ateup-history",
     "quote": "compression lowered from 10.5 to 8.7:1"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "Hagerty puts the 0-60 mph time of the injected B20 car at 10 seconds; no curb weight, quarter-mile, top speed or fuel economy figure from a source above low reliability was found in this research.",
   "confidence": "low",
   "status": "verified",
   "sourceRefs": [
    "hagerty-1800es"
   ],
   "evidence": [
    {
     "ref": "hagerty-1800es",
     "quote": "A 2.0-liter B20 engine with Bosch D-Jetronic fuel injection cut the 0–60 mph time to 10 seconds."
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "Curbside Classic gives the 1800ES a 0-60 mph time of 11.3 seconds; the fetched article does not attribute the figure to a named magazine test.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "curbside-rt-1800es"
   ],
   "evidence": [
    {
     "ref": "curbside-rt-1800es",
     "quote": "with a 11.3 second run from 0-60."
    }
   ]
  },
  {
   "section": "history",
   "claimText": "The 1800ES was presented in the fall of 1971 for the 1972 model year with an extended roofline, offered the Borg-Warner 35 automatic, and went out of production on June 27, 1973 rather than meet the standards that took effect for the 1974 model year.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "volvo-heritage",
    "classic-1800es",
    "ateup-history",
    "hagerty-1800es"
   ],
   "evidence": [
    {
     "ref": "volvo-heritage",
     "quote": "In the autumn of 1971, a new version of the 1800 model was presented, the 1800 ES."
    },
    {
     "ref": "volvo-heritage",
     "quote": "The roofline was extended and the car had a profile that was more reminiscent of an estate, a sports wagon."
    },
    {
     "ref": "classic-1800es",
     "quote": "The last evolution of the Volvo 1800 was introduced for the 1972 model year."
    },
    {
     "ref": "ateup-history",
     "quote": "Production ended for good on June 27, 1973."
    },
    {
     "ref": "ateup-history",
     "quote": "meeting the more stringent and complex standards that took effect for the 1974 model year"
    },
    {
     "ref": "ateup-history",
     "quote": "automatic transmission, the ubiquitous Borg-Warner 35"
    },
    {
     "ref": "hagerty-1800es",
     "quote": "Automatic transmissions are not popular, but such cars were often bought by older drivers."
    }
   ]
  },
  {
   "section": "history",
   "claimText": "The 1800E replaced the 1800S for the 1970 model year, and body production moved to Olofstrom in Sweden with it in 1969.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-1800e",
    "volvo-heritage",
    "vec-general2"
   ],
   "evidence": [
    {
     "ref": "classic-1800e",
     "quote": "For the 1970 model year, Volvo renamed the 1800S, creating the 1800E."
    },
    {
     "ref": "volvo-heritage",
     "quote": "Body production was also eventually transferred to Olofström in Sweden in connection with the 1800E in 1969."
    },
    {
     "ref": "vec-general2",
     "quote": "Volvo launched the 2 litre fuel injected engine, re-naming the car the 1800E for fuel injection."
    }
   ]
  },
  {
   "section": "problems",
   "claimText": "Club and owner sources locate rust in the front fenders, especially their rear lower section, the underside where foam holds moisture and the bottom behind the splash plate, the nose panel around the head and side lights, a chassis member, the sills, floor boards, front jacking points and the frame where the front bumper mounts, with filler over rust in the same places; Hagerty notes that unit construction makes rust issues potentially profound.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "vec-body",
    "brickboard-problems",
    "hagerty-1800es"
   ],
   "evidence": [
    {
     "ref": "vec-body",
     "quote": "Rust in the front wings is particularly expensive to repair."
    },
    {
     "ref": "vec-body",
     "quote": "The rear lower section of the front wing is also very prone to rust."
    },
    {
     "ref": "vec-body",
     "quote": "Rust attacks this area of all models, particularly around the head and side light,"
    },
    {
     "ref": "vec-body",
     "quote": "The foam holds moisture and rots the wing from the underside."
    },
    {
     "ref": "vec-body",
     "quote": "Mud etc gets trapped behind this plate causing the bottom of the wing to rust away"
    },
    {
     "ref": "vec-body",
     "quote": "This chassis members is very prone to rust"
    },
    {
     "ref": "brickboard-problems",
     "quote": "Check for rust (and bondoed over rust) here:"
    },
    {
     "ref": "brickboard-problems",
     "quote": "Sills"
    },
    {
     "ref": "brickboard-problems",
     "quote": "Floord bards - pull the carpet to the side"
    },
    {
     "ref": "brickboard-problems",
     "quote": "Front edge of the frame where the front bumper mounts"
    },
    {
     "ref": "brickboard-problems",
     "quote": "Front jack points - under your feet when sitting, behind the front wheels"
    },
    {
     "ref": "brickboard-problems",
     "quote": "They rust severely given a moist climate and especially salted winter roads."
    },
    {
     "ref": "hagerty-1800es",
     "quote": "Unit construction means that rust issues can be profound and bodies should be checked carefully."
    }
   ]
  },
  {
   "section": "problems",
   "claimText": "Classic Motorsports reports that the Jensen cars were hand built with lead-filled seams and are not more rust-prone than the Swedish cars, that the P1800 is very durable and well built for its time, that the B18 and B20 are known for reliability, and that the overdrive is often found not working; the owner forum calls rust by far the biggest issue, the drivetrain pretty much bulletproof, and original air conditioning a money pit unless converted to R134a.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "cms-sporty-swede",
    "brickboard-problems"
   ],
   "evidence": [
    {
     "ref": "cms-sporty-swede",
     "quote": "The Jensen cars were completely hand built, including the lead-filled seams."
    },
    {
     "ref": "cms-sporty-swede",
     "quote": "There’s a conception that the Jensen cars are more rust-prone, but this really is not the case."
    },
    {
     "ref": "cms-sporty-swede",
     "quote": "The P1800, like many other cars from this era, can often be found with nonfunctioning overdrive units."
    },
    {
     "ref": "brickboard-problems",
     "quote": "By far the biggest issue on an 1800 is rust."
    },
    {
     "ref": "cms-sporty-swede",
     "quote": "Look for rust, although when compared to other cars of the time, the P1800 is very durable and well built."
    },
    {
     "ref": "cms-sporty-swede",
     "quote": "The B18 and B20 engines used in the P1800 are also legendary for their reliability."
    },
    {
     "ref": "brickboard-problems",
     "quote": "The drivetrain and mechanical parts on an 1800 are pretty much bulletproof - especially with 93K miles."
    },
    {
     "ref": "brickboard-problems",
     "quote": "The AC system is a money pit unless it has been converted to R134a (modern stuff)."
    }
   ]
  },
  {
   "section": "problems",
   "claimText": "Most chassis components are shared with the Volvo 122, carbureted B20 cars use a dual-circuit brake servo no longer available new, the factory oil filter carries a check valve, and Classic Motorsports gives normal oil pressure as about 40 psi at warm idle and 50 to 55 psi cruising; the oil pressure figures are single-source.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "cms-sporty-swede"
   ],
   "evidence": [
    {
     "ref": "cms-sporty-swede",
     "quote": "The majority of chassis components are standard Volvo 122 parts."
    },
    {
     "ref": "cms-sporty-swede",
     "quote": "The carbureted B20 cars have a dual-circuit brake servo that is no longer available new."
    },
    {
     "ref": "cms-sporty-swede",
     "quote": "The factory-spec oil filter has a check valve that prevents oil from flowing back."
    },
    {
     "ref": "cms-sporty-swede",
     "quote": "Oil pressure should be at 40 psi or so at warm idle and 50 to 55 psi during cruising."
    }
   ]
  },
  {
   "section": "problems",
   "claimText": "Jensen-assembled cars carry a 'Built in England by Jensen Motors' chassis plate that the Swedish cars lost, and the chassis number is located on the left side below the windshield.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "vec-general",
    "scm-profile"
   ],
   "evidence": [
    {
     "ref": "vec-general",
     "quote": "The car lost the Built in England by Jensen Motors Chassis Plate, which is unique to the Jensen cars,"
    },
    {
     "ref": "scm-profile",
     "quote": "Left side below windshield"
    }
   ]
  },
  {
   "section": "market",
   "claimText": "As of November 2026 classic.com's benchmark for the P1800, model years 1961 to 1963, is $39,426, with recorded sales from $4,100 for a 1962 Jensen-built project in January 2016 to $95,200 for a 1962 car in March 2024.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-p1800"
   ],
   "evidence": [
    {
     "ref": "classic-p1800",
     "quote": "CMB $39,426"
    },
    {
     "ref": "classic-p1800",
     "quote": "1962 Volvo Jensen P1800 Project"
    },
    {
     "ref": "classic-p1800",
     "quote": "$4,100"
    },
    {
     "ref": "classic-p1800",
     "quote": "$95,200"
    }
   ]
  },
  {
   "section": "market",
   "claimText": "As of November 2026 classic.com's benchmark for the 1800S, model years 1963 to 1969, is $36,828; the lowest US-dollar sale shown is $16,750 for a 1964 car in July 2025, and the top is $467,000 for a 1965 Cyan P1800 restomod in August 2025.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-1800s"
   ],
   "evidence": [
    {
     "ref": "classic-1800s",
     "quote": "CMB $36,828"
    },
    {
     "ref": "classic-1800s",
     "quote": "Sold $16,750"
    },
    {
     "ref": "classic-1800s",
     "quote": "1965 Volvo Cyan P1800"
    },
    {
     "ref": "classic-1800s",
     "quote": "Sold $467,000"
    },
    {
     "ref": "classic-1800s",
     "quote": "After Volvo moved production to Sweden, the P1800 was renamed the Volvo 1800S."
    }
   ]
  },
  {
   "section": "market",
   "claimText": "As of November 2026 classic.com's benchmark for the 1800E, model years 1970 to 1972, is $24,467; two listed sales of 1972 cars are $13,000 on July 24, 2025 and $29,750 on March 9, 2025.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-1800e"
   ],
   "evidence": [
    {
     "ref": "classic-1800e",
     "quote": "CMB $24,467"
    },
    {
     "ref": "classic-1800e",
     "quote": "$13,000"
    },
    {
     "ref": "classic-1800e",
     "quote": "$29,750"
    }
   ]
  },
  {
   "section": "market",
   "claimText": "As of November 2026 classic.com's benchmark for the 1800ES is $22,479, with a 1973 project sold for $5,000 in April 2026 and a 1973 car for $50,000 in February 2026; classic.com dates the ES market 1971 to 1974.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-1800es"
   ],
   "evidence": [
    {
     "ref": "classic-1800es",
     "quote": "CMB $22,479"
    },
    {
     "ref": "classic-1800es",
     "quote": "$5,000"
    },
    {
     "ref": "classic-1800es",
     "quote": "$50,000"
    },
    {
     "ref": "classic-1800es",
     "quote": "Volvo 1800ES (1971 to 1974)"
    }
   ]
  },
  {
   "section": "market",
   "claimText": "In March 2010 Classic Motorsports put nice drivers at $6,000 to $10,000 and the very best examples at around $20,000.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "cms-sporty-swede"
   ],
   "evidence": [
    {
     "ref": "cms-sporty-swede",
     "quote": "Nice drivers usually sell between $6000 and $10,000, with the very best examples selling for around $20,000."
    }
   ]
  }
 ]
};
