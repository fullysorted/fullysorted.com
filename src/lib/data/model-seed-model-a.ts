/**
 * Researched model draft - Ford Model A (1928-1931).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedModelA = {
 "slug": "ford/model-a",
 "make": "Ford",
 "model": "Model A",
 "generation": "1928-1931 model years",
 "generationCode": null,
 "trim": null,
 "yearStart": 1928,
 "yearEnd": 1931,
 "bodyStyles": [
  "2-door Tudor sedan (Standard, and De Luxe for 1931)",
  "4-door Fordor sedan (two-window and three-window Standard, De Luxe, Town Sedan, Leatherback)",
  "2-door roadster (Standard and De Luxe, rumble seat)",
  "4-door phaeton (Standard and De Luxe)",
  "Coupes: Standard, Sport (rumble seat standard), Business, Special and De Luxe",
  "Cabriolet, Victoria and Convertible Sedan (1931 only)",
  "Town Car (dual cowl), Taxi Cab and wood-bodied Station Wagon",
  "Light commercial: roadster pickup, closed cab pickup, panel and town car delivery; Model AA truck chassis listed separately"
 ],
 "engines": [
  "3,285 cc (200.5 cu in) L-head inline four, side valves, three main bearings, Ford-Zenith updraft carburetor fed by gravity from a cowl tank, 40 hp at 2,200 rpm (Ford figure as printed by Motor Age, December 1927)",
  "Same 40 hp four in the Model AA truck, behind a four-speed gearbox with a low creeper first gear"
 ],
 "productionTotal": null,
 "productionNotes": "The figure printed almost everywhere is 4,858,644, and it comes from one table: the Model A Ford Club of America's production page, which credits its domestic numbers to Ray Miller's book Henry's Lady and its worldwide numbers to a May-June 1991 article in the club's magazine, The Restorer. That table splits the total into 4,325,725 built in the United States and 532,919 built abroad, and Wikipedia's 4,858,644, with production ending in March 1932, repeats it. The catch is what the number counts. The MAFCA total includes 539,786 trucks of all series and 352,584 commercial chassis, so it is not a count of Model A passenger cars, and no source consulted here publishes a cars-only figure. Secondary writing has rounded the number in both directions: Mac's Motor City Garage puts the Model A at some 4.3 million, which matches the domestic column rather than the worldwide one, and a 2026 Atlanta News First report says Ford built roughly 5 million between 1927 and 1931. Neither is wrong on its own terms, but they are not the same number, so productionTotal is left null. Within the table, the spread by body is the useful part. The Standard Tudor sedan alone accounts for 1,387,270 cars, about 28.6 percent of everything built, and the Standard coupe for 573,703. At the other end, MAFCA lists 1,198 Town Cars, 5,085 Convertible Sedans, 5,401 Taxi Cabs, 7,281 De Luxe Phaetons and 11,848 Station Wagons worldwide. Those small numbers are why the Town Car and Convertible Sedan sit at the top of the market. US prices are documented. Motor Age printed Ford's opening list in its December 8, 1927 issue: Roadster $385, Tudor $495, coupe $495, Sport Coupe $550, Fordor $570, and the roadster pickup $395, and MAFCA's FOB Detroit table carries the same figures and adds the later body styles year by year.",
 "notableTrims": [
  {
   "name": "Standard Tudor sedan",
   "note": "The car most people mean by Model A. MAFCA counts 1,387,270 built, close to three in ten of all production, and it listed at $495 in December 1927. It is the reference point every other body is priced against."
  },
  {
   "name": "Roadster (Standard and De Luxe)",
   "note": "The cheapest car on the opening list at $385 with 422,354 Standard and 68,335 De Luxe built; the 1931 roadster was also a favorite starting point for hot rodders, so many survivors have been modified. The De Luxe arrived for 1930 at $520."
  },
  {
   "name": "Town Car (dual cowl)",
   "note": "The top of the range at $1,200 in 1929 and 1930 per MAFCA, and the rarest passenger body with 1,198 built worldwide. A #1 condition car was the most valuable Model A in Hagerty's 2020 survey."
  },
  {
   "name": "Convertible Sedan (400-A)",
   "note": "A 1931-only body listed at $640, with 5,085 built worldwide. Hagerty names it with the Town Car, Victoria, phaeton, cabriolet and station wagon as the styles buyers chase."
  },
  {
   "name": "Station Wagon",
   "note": "A wood-bodied wagon priced at $640 for 1930 and $625 for 1931, with 11,848 built."
  },
  {
   "name": "Victoria",
   "note": "A 1930-1931 close-coupled body at $580. Ford's 1931 dealer letter notes the metal-back Victoria is 62 lb lighter than the fabric-back car, so there are two to tell apart."
  },
  {
   "name": "Model AA truck",
   "note": "Same 40 hp engine, four-speed gearbox with a creeper first gear, and 131.5 in or 157 in wheelbases. Motor Age listed the opening truck chassis at $460 and the chassis with cab at $545."
  }
 ],
 "specs": {
  "layout": "Front-engine, rear-wheel drive, torque tube drive",
  "chassis": "Steel ladder frame, transverse semi-elliptic leaf springs front and rear, hydraulic shock absorbers, three-quarter floating rear axle",
  "engine": "3,285 cc (200.5 cu in) L-head inline four, three main bearings, aluminum pistons as first described, Ford-Zenith carburetor, gravity fuel feed from a 10-gallon cowl tank",
  "power": "40 hp at 2,200 rpm (Ford figure as printed by Motor Age, December 1, 1927); 24.03 hp N.A.C.C. taxable rating",
  "torque": "Not published in any source consulted here",
  "transmission": "Three-speed selective sliding-gear manual, unsynchronized, multiple-disc dry clutch as first described; Model AA truck four-speed",
  "weight": "About 2,155 lb (Roadster) to 2,500 lb (Taxi) dry per MAFCA's Restorer list; 2,150 to 2,476 lb with bumpers per Ford's June 1931 shipping-weight letter",
  "acceleration": "No 0-60 mph figure was published in the period; Motor Age printed a high-gear 5-25 mph time from Ford's own tests of a Tudor with two aboard",
  "top_speed": "55-65 mph per Ford as printed by Motor Age, some road tests over 65 mph",
  "fuel_economy": "20-30 mpg (Ford claim as printed by Motor Age, December 1927)",
  "brakes": "Four-wheel mechanical internal-expanding drums, 168 sq in total lining area as first described",
  "wheelbase": "103.5 in (2,629 mm)",
  "tires": "30 x 4.50 in at launch",
  "axle_ratio": "3.77:1 per Wikipedia; Motor Age's December 1927 text prints 3.7 to 1",
  "us_price_new": "$385 (1928 Roadster) to $1,200 (1929-1930 Town Car), FOB Detroit, per MAFCA; Wikipedia also gives $1,400 for the Town Car",
  "body_styles_count": "Six at launch per Motor Age; nine in the first year per Mac's Motor City Garage",
  "production_worldwide": "4,858,644 including trucks and commercial chassis (MAFCA); 4,325,725 built in the US"
 },
 "summary": "The Model A was Ford's replacement for the Model T, a conventional car built by a company that had stopped making cars for most of 1927 to build it. It went on public display on December 2, 1927 as a 1928 model and was built through the 1931 model year, with production running into March 1932. Underneath it was simple and new: a 200.5 cu in L-head four rated at 40 hp at 2,200 rpm, a three-speed selective gearbox, four-wheel mechanical brakes and the standard pedal layout the Model T never had. Ford opened at $385 for the Roadster and $495 for the Tudor, and over four model years the range grew from six bodies to more than twenty, topped by a $1,200 Town Car. The Model A Ford Club of America's table counts 4,858,644 built worldwide including trucks, 4,325,725 of them in the US. That volume, a reproduction parts trade with roots in the 1950s, and two national clubs devoted to this one model are why so many are still driven. As of September 2026 classic.com puts the average Model A at $18,732.",
 "history": "## Why the Model A exists\n\nBy the mid-1920s the Model T had been in production since 1908 and the market had moved past it. Hagerty's account is that sales were faltering even as Ford cut the price each year, and that Edsel Ford and the board pushed Henry Ford to change course. When he relented, he did it his way: Model T production stopped in May 1927 with no replacement ready, Mac's Motor City Garage records 60,000 people put out of work, and dealers spent the summer and fall with nothing new to sell. Gene Farkas ran the engineering with Lawrence Sheldrick and Frank Johnson, and Edsel Ford supervised the styling himself, working with body engineer Joe Galamb. Motor Age's verdict on the finished car was that it was not a remade Model T but a new automobile built on the lessons of 15,000,000 earlier ones.\n\n## The launch\n\nThe first car was built on October 20, 1927. The Henry Ford museum notes where it went: Henry Ford gave it to Thomas Edison, and the engine in it still carries the stamp A-1. The press saw the car on November 30, and Motor Age reported 46 major public displays opening December 2 across the US, Canada and England, with an advertising appropriation said to total $15,000,000. How many people came to look depends on who is counting, and the estimates are set out in the claims below. In New York, Motor Age reported, Ford hired Madison Square Garden to show the cars day and night.\n\n## What buyers got for $385 to $570\n\nThe opening line was six bodies: Roadster $385, Phaeton and roadster pickup $395, Tudor and coupe $495, Sport Coupe $550 and Fordor $570, with the truck chassis at $460. Bumpers were $15, fitted on the line, and a dealer took them off if the buyer did not want them. The engine was rated at 40 hp at 2,200 rpm, Ford claimed 20 to 30 mpg and a top speed between 55 and 65 mph, and fuel fell by gravity from a tank in the cowl. Buyers who had learned to drive on a Model T's pedals now had a clutch, a brake and a gear lever in the places every other make used.\n\n## Four model years, more than twenty bodies\n\nMAFCA's price table shows the range filling in year by year: the Town Sedan, Cabriolet, Taxi and $1,200 Town Car for 1929, the De Luxe Phaeton, Roadster and Coupe and the Victoria for 1930, and the De Luxe Tudor and Convertible Sedan for 1931. One million had been sold by February 4, 1929 and two million by July 24 of that year. The Model AA truck shared the engine, added a four-speed gearbox, and was later built under license in the Soviet Union, where GAZ produced more than 985,000. The Model A gave way to the four-cylinder Model B and the V8 for 1932.\n\n## The clubs\n\nIn the early 1950s a Model A was just an old Ford. William E. Hall went to an antique car meet in the fall of 1952 where Model As were barred from parking with the antiques, and he responded by inviting five enthusiasts to his West Hartford, Connecticut home to form the Model A Restorers Club. MARC believes it was the first American club devoted to a single make and single model. In October 1955, fifteen Southern California owners, many of them MARC members, met at Red Grow's Auto Sales lot in Glendale and formed a regional club; it began publishing The Restorer in May 1956 and, after the 1957 MARC national convention, broke away as the Model A Ford Club of America. Both clubs are still publishing, judging and touring.",
 "marketNotes": "As of September 2026 classic.com puts its market benchmark for the Ford Model A at $18,393 and the average price at $18,732, with a recorded low of $550 for a 1931 sedan sold on September 7, 2022. classic.com does not separate body styles in that headline figure, and the body is what moves the price. Hagerty's 2020 market piece, written by Kyle Smith with Hagerty Price Guide specialist Hawk Hawkins, put a #1 condition Town Car at $55,000 and a #1 business coupe or Tudor in the low $20,000 range, noted that most cars sit in #3 condition, and found that 72 percent of quotes came from pre-boomer and baby boomer owners. RM Sotheby's results give individual US data points: a 1931 Roadster sold for $22,000 at Auburn Fall 2018 and a 1930 Roadster for the same $22,000 at Auburn Fall 2019; a 1990s-restored 1930 Roadster sold for $28,000 at the Arizona 2023 sale; and a 1930 roadster pickup from the Gene Ponder Collection brought $45,100 in 2022. The lot pages show a single sold figure and do not say whether it includes buyer's premium. Read together, these few results suggest a pattern: common closed cars trade in the high teens, good open cars in the twenties, and the rare bodies, commercial conversions and exceptional restorations above that.",
 "whatToLookFor": "Start with the body, because the body sets the value and the chassis is shared. MAFCA's production table and its body style codes identify what a car should be: a 1931-only Convertible Sedan is a 400-A, a Town Car a 140-A or 140-B, a De Luxe Phaeton a 180-A, and the club publishes how to tell a Briggs body from a Murray body. Claims of a rare body on a common chassis are worth checking against those numbers, since a Tudor outnumbers a Town Car by more than a thousand to one. The Victoria came with a fabric back and a later metal back, and Ford's own 1931 letter notes the metal-back car is 62 lb lighter, so the two are different cars to a judge. On the engine, oil at the rear of the block is the classic Model A complaint; a MAFCA technical director attributes almost all rear oil leaks to a cracked rear main babbitt bearing or excess wear clearance there, not to a missing modern seal. A compression check tells you where the rings and valves stand; the club's technical answers expect new rings to bring a healthy engine up to about 55 psi. The cooling system should hold about 1-1/2 gallons in the radiator and 3 gallons in all, and a replacement radiator with two rows of tubes instead of three is a known cause of overheating. The parts supply means almost anything can be fixed, so the real questions are the quality of the bodywork and wood, whether the car has been modified, and whether a judged restoration is documented by a MARC or MAFCA award.",
 "commonProblems": "The Model A's faults are well documented because two clubs have spent seventy years answering the same questions. The rear main bearing is poured babbitt, and MAFCA's technical answers put nearly every rear oil leak down to a cracked rear main babbitt or wear clearance, warning that aftermarket rear seals that require grinding a groove in the crankshaft tend to fail. Overheating is the second recurring complaint, and the club's first suspect is the radiator: a period-correct core has three rows of tubes, some replacement radiators had two, fins work loose and stop shedding heat, and old radiators silt up. Timing, an over-rich mixture and a leaking head gasket are the next checks, and a new head gasket may need retorquing several times after warm-up. Rusted-in cylinder head studs are common enough that the club advises soaking and a heavy-duty stud puller, and never prying between head and block, which cracks the head. Original two-blade fans should be inspected for internal rust and fatigue cracks. None of these are expensive in parts, and Hagerty describes the parts support as vast; the cost is labor, and no fetched source publishes a US dollar figure for a full engine rebuild or a body-off restoration, so none is given here.",
 "valueTrajectory": "The Model A has spent decades as the default entry into prewar motoring, and its prices behave like it. Hagerty described values in November 2020 as stable to slightly down, with interest flat for two years and the rare bodies dipping while the common coupes and sedans held level. The RM Sotheby's results available here run from $22,000 for a 1931 Roadster in 2018 to $28,000 for a 1930 Roadster at the Arizona 2023 sale, a modest rise over five years for the same body, while a 1930 roadster pickup reached $45,100 in 2022. As of September 2026 classic.com's average sits at $18,732 across all bodies. The structural question is the buyer base: Hagerty's figure that 72 percent of quotes came from pre-boomer and baby boomer owners points to a large number of cars changing hands as long-time owners age out. Against that, the clubs, the parts trade and the car's ease of use keep new owners arriving. The cars that have separated are the low-production bodies and the documented restorations; the ordinary Tudor and coupe have not.",
 "overallConfidence": "medium",
 "sources": [
  {
   "ref": "mafca-production",
   "title": "Model A Production Figures",
   "url": "https://archive.mafca.com/data_production.html",
   "publisher": "Model A Ford Club of America",
   "sourceType": "registry",
   "reliability": "high",
   "notes": "Body-by-body production table: worldwide 4,858,644, domestic 4,325,725, foreign 532,919; Standard Tudor 1,387,270, Standard Coupe 573,703, Standard Roadster 422,354, De Luxe Roadster 68,335, Town Car 1,198, Convertible Sedan 5,085, Taxi 5,401, De Luxe Phaeton 7,281, Station Wagon 11,848; Trucks All Series 539,786 and Commercial Chassis 352,584 included in the total. Domestic figures credited to Ray Miller's Henry's Lady, worldwide to The Restorer May-June 1991."
  },
  {
   "ref": "mafca-prices",
   "title": "Prices of the New Ford",
   "url": "https://archive.mafca.com/data_new_prices.html",
   "publisher": "Model A Ford Club of America",
   "sourceType": "registry",
   "reliability": "high",
   "notes": "New car prices FOB Detroit by body and year, 1928-1931: Roadster $385 (1928), Tudor $495, Fordor $570, Sport Coupe $550, Town Car $1,200 (1929, 1930), Convertible Sedan $640 (1931), Victoria $580, Station Wagon $640/$625, De Luxe Roadster $520 (1930); shows which bodies were offered in which year."
  },
  {
   "ref": "mafca-weights",
   "title": "Vehicle Weights",
   "url": "https://archive.mafca.com/data_weights.html",
   "publisher": "Model A Ford Club of America",
   "sourceType": "registry",
   "reliability": "high",
   "notes": "Bob Rentz weight list from The Restorer (dry, empty tank and radiator): Roadster 2,155 lb to Taxi 2,500 lb, Tudor 2,375 lb; Ford Buffalo Branch dealer letter of June 18, 1931 with shipping weights 2,150-2,476 lb and the metal-back Victoria 62 lb lighter than the fabric-back car; 19-inch and 21-inch wheel weights."
  },
  {
   "ref": "mafca-history",
   "title": "MAFCA History",
   "url": "https://archive.mafca.com/history.html",
   "publisher": "Model A Ford Club of America",
   "sourceType": "registry",
   "reliability": "high",
   "notes": "Club history: October 16, 1955 meeting of 15 Southern California owners, many of them MARC members, at Red Grow's Auto Sales lot in Glendale; regional club formed November 13, 1955; first issue of The Restorer May 1956; membership from 21 to 107 in 1956."
  },
  {
   "ref": "marc-history",
   "title": "MARC History",
   "url": "https://modelarestorersclub.org/about-marc/history/",
   "publisher": "Model A Restorers Club",
   "sourceType": "registry",
   "reliability": "high",
   "notes": "MARC founded fall 1952 by William E. Hall in West Hartford, Connecticut after Model As were barred from parking with antiques at a meet; believed to be the first US club for a single make and model; Southern California Region broke away after the 1957 convention to form MAFCA; states over 10.5 million people viewed the car in the US on the first day."
  },
  {
   "ref": "mafca-tech-block",
   "title": "Technical Q & A - Engine Block",
   "url": "https://archive.mafca.com/tqa_e_block.html",
   "publisher": "Model A Ford Club of America",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Club technical director answers: rear oil leaks almost always from a cracked rear main babbitt or wear clearance; aftermarket rear seals discouraged; new rings should bring compression to about 55 lb; rusted head studs and the warning never to pry between head and block."
  },
  {
   "ref": "mafca-tech-cooling",
   "title": "Technical Q & A - Cooling",
   "url": "https://archive.mafca.com/tqa_e_cooling.html",
   "publisher": "Model A Ford Club of America",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Overheating diagnosis: radiator the main cause, three rows of tubes correct and some replacements had two, radiator holds 1-1/2 gallons and system 3 gallons, loose fins, timing, rich mixture, head gasket retorque; two-blade fan fatigue cracks."
  },
  {
   "ref": "motorage-1927-12-01",
   "title": "Motor Age, December 1, 1927 (Vol. 52, No. 22): New Ford Model A, by C. Edward Packer",
   "url": "https://archive.org/stream/sim_motor-age_1927-12-01_52_22/sim_motor-age_1927-12-01_52_22_djvu.txt",
   "publisher": "Motor Age (Chilton), via Internet Archive",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Period US trade-press description at launch: press preview November 30 and public showing December 2, 46 major displays, advertising appropriation said to total $15,000,000; 40 hp at 2,200 rpm, 24.03 hp N.A.C.C. rating, 20-30 mpg, 55-65 mph, gravity feed, three-speed selective gearbox, four-wheel mechanical brakes, hydraulic shock absorbers; 'not a remade Model T'."
  },
  {
   "ref": "motorage-1927-12-08",
   "title": "Motor Age, December 8, 1927 (Vol. 52, No. 23): Crowds Flock to See Ford in Its Debut",
   "url": "https://archive.org/stream/sim_motor-age_1927-12-08_52_23/sim_motor-age_1927-12-08_52_23_djvu.txt",
   "publisher": "Motor Age (Chilton), via Internet Archive",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Opening US price list: Tudor $495, Fordor $570, Roadster $385, Sport Coupe $550, coupe $495, roadster pickup $395, chassis $325, truck chassis $460, with cab $545, with stake or platform body $595; bumpers $15; specification box listing six body styles, 103.5 in wheelbase, 30 x 4.50 tires; Madison Square Garden display."
  },
  {
   "ref": "macs-garage",
   "title": "December 2, 1927: Henry Ford Introduces the Model A",
   "url": "https://macsmotorcitygarage.com/december-2-1927-the-model-a-ford-is-introduced/",
   "publisher": "Mac's Motor City Garage",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Development narrative: Model T stopped, 60,000 out of work, Farkas, Sheldrick and Johnson on engineering, Edsel Ford and Joe Galamb on styling; 200.5 cu in and 40 hp; $2 million in advertising in 2,000 newspapers; more than 9 million visitors that week; nine body styles the first year at $480-$600; some 4.3 million built."
  },
  {
   "ref": "thehenryford-firsts",
   "title": "#1 Cars at The Henry Ford",
   "url": "https://www.thehenryford.org/collections/explore/articles/1-cars-at-the-henry-ford",
   "publisher": "The Henry Ford",
   "sourceType": "specialist",
   "reliability": "high",
   "notes": "Museum article: an estimated ten million Americans saw the Model A within 36 hours of its release; the first Model A went to Thomas Edison and its engine is stamped A-1."
  },
  {
   "ref": "wiki-model-a",
   "title": "Ford Model A (1927-1932)",
   "url": "https://en.wikipedia.org/wiki/Ford_Model_A_(1927%E2%80%931932)",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Pointer to the MAFCA production page; first produced October 20, 1927, production ended March 1932 at 4,858,644; one million sold by February 4, 1929, two million by July 24; prices given both as Tudor $500 to Town Car $1,200 and as Roadster $385 to Town Car $1,400; 103.5 in wheelbase; 2,265-2,465 lb; about 65 mph; first Ford with standard controls."
  },
  {
   "ref": "wiki-model-aa",
   "title": "Ford Model AA",
   "url": "https://en.wikipedia.org/wiki/Ford_Model_AA",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Model AA truck: same 201 cu in four at 40 hp at 2,200 rpm, four-speed gearbox with creeper first gear, 131.5 in and 157 in wheelbases, rear leaf springs without shocks, more than 985,000 GAZ-AA built in the USSR 1932-1950."
  },
  {
   "ref": "hagerty-2020",
   "title": "The Model A Ford is the perfect entry to prewar ownership",
   "url": "https://www.hagerty.com/media/?p=101670",
   "publisher": "Hagerty Media",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Kyle Smith, November 6, 2020: #1 Town Car $55,000, #1 business coupe or Tudor low $20,000s; most cars in #3 condition; 72 percent of quotes from pre-boomer and boomer owners; values stagnant to dipping; Town Car, Convertible Sedan, Victoria, phaeton, cabriolet and station wagon most sought and least common; parts support vast."
  },
  {
   "ref": "classic-model-a",
   "title": "Ford Model A Market",
   "url": "https://www.classic.com/m/ford/model-a/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of September 2026: CLASSIC.COM Market Benchmark $18,393, average price $18,732, lowest recorded sale $550 for a 1931 sedan on September 7, 2022. Page loaded through a browser fetch; blocks the automated quote checker."
  },
  {
   "ref": "rm-az23",
   "title": "1930 Ford Model A Roadster | Arizona 2023",
   "url": "https://rmsothebys.com/auctions/az23/lots/r0040-1930-ford-model-a-roadster/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Lot 105, Arizona 2023: 1930 Roadster restored in the 1990s and stored three decades, sold for $28,000."
  },
  {
   "ref": "rm-af18",
   "title": "1931 Ford Model A Roadster | Auburn Fall 2018",
   "url": "https://rmsothebys.com/en/auctions/af18/auburn-fall/lots/r0417-1931-ford-model-a-roadster/702300",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Lot 3143, Auburn Fall 2018, engine A4220374: 1931 Roadster sold for $22,000."
  },
  {
   "ref": "rm-af19",
   "title": "1930 Ford Model A Roadster | Auburn Fall 2019",
   "url": "https://rmsothebys.com/auctions/af19/lots/r0371-1930-ford-model-a-roadster/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Lot 3008, Auburn Fall 2019: 1930 Roadster sold for $22,000."
  },
  {
   "ref": "rm-gp22",
   "title": "1930 Ford Model A Roadster Pickup | Gene Ponder Collection",
   "url": "https://rmsothebys.com/en/auctions/gp22/gene-ponder-collection/lots/r0070-1930-ford-model-a-roadster-pickup/1244855",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Lot 3209, Gene Ponder Collection, Marshall, Texas, 2022: 1930 roadster pickup sold for $45,100."
  },
  {
   "ref": "atlanta-news-first",
   "title": "How these vintage car enthusiasts keep the Ford Model A cruising into the future",
   "url": "https://www.atlantanewsfirst.com/2026/04/03/how-these-vintage-car-enthusiasts-keep-ford-model-cruising-into-future/",
   "publisher": "Atlanta News First (WWBT)",
   "sourceType": "journalism",
   "reliability": "low",
   "notes": "April 2026 local news piece on the Old Dominion Model A Ford Club of Greater Richmond; states Ford built roughly 5 million Model As between 1927 and 1931. Cited for the rounded figure in circulation, not as a production authority."
  },
  {
   "ref": "snyders-about",
   "title": "About Us",
   "url": "https://www.snydersantiqueauto.com/content/Snyders/CustomPages/aboutus.htm",
   "publisher": "Snyder's Antique Auto Parts",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "US parts supplier in New Springfield, Ohio, founded in the late 1950s by Don Snyder Sr. making Model T carburetor springs and later Model T and A seat springs; catalogs Model A body, engine and trim parts. Evidence of the reproduction parts trade's age."
  }
 ],
 "claims": [
  {
   "section": "production",
   "claimText": "Published Model A production totals do not agree on what they count: MAFCA's table gives 4,858,644 worldwide including trucks and commercial chassis, with 4,325,725 built in the US, while secondary sources round to some 4.3 million or roughly 5 million.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "mafca-production",
    "wiki-model-a",
    "macs-garage",
    "atlanta-news-first"
   ],
   "conflictNote": "MAFCA lists 4,858,644 worldwide (4,325,725 domestic, 532,919 foreign) and Wikipedia repeats 4,858,644. Mac's Motor City Garage gives some 4.3 million, which matches MAFCA's domestic column, and Atlanta News First gives roughly 5 million. MAFCA's total includes 539,786 trucks and 352,584 commercial chassis, and no source consulted here publishes a passenger-car-only total. Which figure 'Model A production' should mean is not resolved by any source consulted here.",
   "evidence": [
    {
     "ref": "mafca-production",
     "quote": "Total Production 4,858,644 100.00% 4,325,725 100.00% 532,919"
    },
    {
     "ref": "wiki-model-a",
     "quote": "Model A production ended in March 1932, after 4,858,644 had been made in all body styles."
    },
    {
     "ref": "macs-garage",
     "quote": "while the Model A accounted for some 4.3 million as the Motor Company to hit the 20 million mark in 1931"
    },
    {
     "ref": "atlanta-news-first",
     "quote": "Between 1927 and 1931, Ford cranked out roughly 5 million of these cars"
    }
   ]
  },
  {
   "section": "production",
   "claimText": "MAFCA credits its domestic production figures to Ray Miller's book Henry's Lady and its worldwide figures to a May-June 1991 article in The Restorer; it is the only itemized body-by-body table found, which is why this claim is single-sourced.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "mafca-production"
   ],
   "evidence": [
    {
     "ref": "mafca-production",
     "quote": "Domestic figures - Henry's Lady, by Ray Miller - Worldwide figures - The Restorer, May-Jun 1991"
    }
   ]
  },
  {
   "section": "production",
   "claimText": "The Standard Tudor sedan was by far the most common Model A at 1,387,270 built, while the Town Car, Convertible Sedan, Victoria, phaeton, cabriolet and station wagon are the scarcest and most sought-after bodies.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "mafca-production",
    "hagerty-2020"
   ],
   "evidence": [
    {
     "ref": "mafca-production",
     "quote": "Standard Tudor 055-A, 055-B 1,387,270 28.55% 1,259,128 29.11%"
    },
    {
     "ref": "hagerty-2020",
     "quote": "The town car, convertible sedan, victoria, phaeton, cabriolet, and station wagon are the most sought-after styles; they're also the least common"
    }
   ]
  },
  {
   "section": "production",
   "claimText": "MAFCA's worldwide total includes 539,786 trucks of all series, and the Model AA truck was a separate series built on the same engine with a four-speed gearbox.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "mafca-production",
    "wiki-model-aa"
   ],
   "evidence": [
    {
     "ref": "mafca-production",
     "quote": "Trucks All Series 539,786 11.11% 482,850 11.16% 56,936 10.68%"
    },
    {
     "ref": "wiki-model-aa",
     "quote": "The Model AA Ford has a four-speed manual gearbox."
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "Ford's opening US prices in December 1927 were $385 for the Roadster, $495 for the Tudor and $570 for the Fordor, FOB Detroit.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "motorage-1927-12-08",
    "mafca-prices"
   ],
   "evidence": [
    {
     "ref": "motorage-1927-12-08",
     "quote": "Tudor sedan ........ $495 Fordor sedan ....... 570 Roadster ............ 385"
    },
    {
     "ref": "mafca-prices",
     "quote": "The table below shows the new car prices, FOB Detroit, without accessories"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "Accounts of the opening line differ: Motor Age's December 1927 specification box lists six body styles priced from $325 for the chassis to $570 for the Fordor, while Mac's Motor City Garage says nine body styles were offered the first year at $480 to $600.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "motorage-1927-12-08",
    "macs-garage"
   ],
   "conflictNote": "Motor Age (December 8, 1927) prints six body styles and a $325-$570 range including the chassis, with the Roadster at $385. Mac's Motor City Garage states nine body styles in the first year at $480-$600. The Motor Age figure describes the launch line and the Mac's figure may describe the full first model year, but neither source reconciles them, so the difference is not resolved by any source consulted here.",
   "evidence": [
    {
     "ref": "motorage-1927-12-08",
     "quote": "Number of body styles 6. Price range $325 (chassis) to $570 (Fordor)"
    },
    {
     "ref": "macs-garage",
     "quote": "a total of nine the first year, ranging from $480 to $600"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The Town Car was the most expensive Model A, but its price is given as $1,200 by MAFCA's price table and as $1,400 in one passage of Wikipedia.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "mafca-prices",
    "wiki-model-a"
   ],
   "conflictNote": "MAFCA lists the Town Car at $1,200 for 1929 and 1930, and one Wikipedia passage also says $1,200, but another Wikipedia passage gives $1,400 with no year. No period price sheet for the Town Car was fetched for this research, so the $1,400 figure is not resolved by any source consulted here.",
   "evidence": [
    {
     "ref": "mafca-prices",
     "quote": "Taxi --- $800 --- --- Town Car --- $1200 $1200"
    },
    {
     "ref": "wiki-model-a",
     "quote": "Prices for the Model A ranged from US$385 for a roadster to US$1,400 for the town car."
    }
   ]
  },
  {
   "section": "history",
   "claimText": "Estimates of the crowds that came to see the new car differ: The Henry Ford says about ten million Americans within 36 hours, MARC says over 10.5 million on the first day, and Mac's Motor City Garage says more than 9 million that week.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "thehenryford-firsts",
    "marc-history",
    "macs-garage"
   ],
   "conflictNote": "The Henry Ford: an estimated ten million within 36 hours. MARC: over 10.5 million in the US on the first day. Mac's Motor City Garage: more than 9 million that week. All three are estimates of an uncounted crowd and none cites a primary count, so the figure is not resolved by any source consulted here.",
   "evidence": [
    {
     "ref": "thehenryford-firsts",
     "quote": "An estimated ten million Americans saw the car within 36 hours of its release."
    },
    {
     "ref": "marc-history",
     "quote": "Demand was immense, with over 10.5 million people viewing the car in the U.S. on the first day"
    },
    {
     "ref": "macs-garage",
     "quote": "more than 9 million Americans reportedly visited Ford dealerships that week to see the new car"
    }
   ]
  },
  {
   "section": "history",
   "claimText": "The size of the launch advertising campaign is reported differently: Motor Age in December 1927 said the appropriation was said to total $15,000,000, while Mac's Motor City Garage describes $2 million in advertising in 2,000 newspapers.",
   "confidence": "low",
   "status": "disputed",
   "sourceRefs": [
    "motorage-1927-12-01",
    "macs-garage"
   ],
   "conflictNote": "Motor Age (December 1, 1927) reports an appropriation 'said to total' $15,000,000 for the opening campaign. Mac's Motor City Garage gives $2 million in advertising in 2,000 newspapers for the five-day launch. The two may measure different things, but neither source says so, and the figure is not resolved by any source consulted here.",
   "evidence": [
    {
     "ref": "motorage-1927-12-01",
     "quote": "propriation which is said to total $15,000,000"
    },
    {
     "ref": "macs-garage",
     "quote": "$2 million in advertising in 2,000 newspapers across the country"
    }
   ]
  },
  {
   "section": "history",
   "claimText": "The first Model A was built on October 20, 1927, and Henry Ford gave it to Thomas Edison; its engine is stamped A-1.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wiki-model-a",
    "thehenryford-firsts"
   ],
   "evidence": [
    {
     "ref": "wiki-model-a",
     "quote": "It was first produced on October 20, 1927, but not introduced until December 2."
    },
    {
     "ref": "thehenryford-firsts",
     "quote": "Ford gave it to the man whom he admired most, Thomas Edison."
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The engine was rated at 40 hp at 2,200 rpm from 200.5 cu in, nearly twice the output of the Model T, and the Model AA truck used the same rating.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "motorage-1927-12-01",
    "macs-garage",
    "wiki-model-aa"
   ],
   "evidence": [
    {
     "ref": "motorage-1927-12-01",
     "quote": "2200 r.p.m. this four-cylinder engine develops an actual 40 b.hp."
    },
    {
     "ref": "macs-garage",
     "quote": "displaced 200.5 cubic inches and delivered 40 hp, nearly twice the output of the Model T"
    },
    {
     "ref": "wiki-model-aa",
     "quote": "The engine produced a maximum of 40 horsepower at 2,200 rpm"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "Ford quoted a maximum road speed of 55 to 65 mph at launch, and later references put the top speed at around 65 mph.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "motorage-1927-12-01",
    "wiki-model-a"
   ],
   "evidence": [
    {
     "ref": "motorage-1927-12-01",
     "quote": "Maximum road speed is said to vary between 55 and 65 m.p.h."
    },
    {
     "ref": "wiki-model-a",
     "quote": "Top speed was around 65 mph"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "Fuel reached the carburetor by gravity from a tank in the cowl, and Ford claimed 20 to 30 mpg; the mileage figure is a single-source manufacturer claim.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "motorage-1927-12-01",
    "wiki-model-a"
   ],
   "evidence": [
    {
     "ref": "motorage-1927-12-01",
     "quote": "this car will make between 20 and 30 miles per gallon"
    },
    {
     "ref": "wiki-model-a",
     "quote": "the fuel flowed to the carburetor by gravity"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The Model A used a standard three-speed selective gearbox and was the first Ford with the conventional clutch, brake, throttle and gearshift controls.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "motorage-1927-12-01",
    "wiki-model-a"
   ],
   "evidence": [
    {
     "ref": "motorage-1927-12-01",
     "quote": "The new Ford uses a standard selective gear shift with three speeds forward and one reverse."
    },
    {
     "ref": "wiki-model-a",
     "quote": "The Model A was the first Ford to use the standard set of driver controls with conventional clutch and brake pedals"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The chassis brought four-wheel mechanical brakes and hydraulic shock absorbers to a low-priced Ford.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "macs-garage",
    "motorage-1927-12-01"
   ],
   "evidence": [
    {
     "ref": "macs-garage",
     "quote": "now featured industry-standard four-wheel mechanical brakes and a conventional three-speed manual transmission"
    },
    {
     "ref": "motorage-1927-12-01",
     "quote": "plus hydraulic shock absorbers and torque tube drive"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "Published Model A weights run from about 2,150 lb to 2,500 lb depending on body and on how the car was weighed: MAFCA's dry list gives 2,155 lb for the Roadster and 2,375 lb for the Tudor, and Wikipedia gives 2,265 to 2,465 lb.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "mafca-weights",
    "wiki-model-a"
   ],
   "evidence": [
    {
     "ref": "mafca-weights",
     "quote": "Sport Coupe 2283 Open Cab Pickup 2073 Tudor Sedan 2375 Roadster 2155"
    },
    {
     "ref": "wiki-model-a",
     "quote": "Curb weight 2,265–2,465 lb"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "Bumpers and bumperettes were a $15 item at launch, fitted on the assembly line and removed by the dealer if the buyer did not want them; this detail is single-sourced to Motor Age.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "motorage-1927-12-08"
   ],
   "evidence": [
    {
     "ref": "motorage-1927-12-08",
     "quote": "Bumpers and bumperettes on the Model A are $15 complete."
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The Model AA truck chassis listed at $460 at launch, $545 with cab and $595 with a stake or platform body, and it was offered on 131.5 in and 157 in wheelbases.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "motorage-1927-12-08",
    "wiki-model-aa"
   ],
   "evidence": [
    {
     "ref": "motorage-1927-12-08",
     "quote": "Truck chassis with cab 545 Truck chassis with cab and stake body.... 595"
    },
    {
     "ref": "wiki-model-aa",
     "quote": "Two wheelbases were available, 131.5 inches"
    }
   ]
  },
  {
   "section": "history",
   "claimText": "The Model A Restorers Club was formed in the fall of 1952 at William E. Hall's home in West Hartford, Connecticut, after Model As were barred from parking with the antiques at a car meet.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "marc-history"
   ],
   "evidence": [
    {
     "ref": "marc-history",
     "quote": "after attending an antique car meet where Model A's were barred from parking with the other antiques"
    }
   ]
  },
  {
   "section": "history",
   "claimText": "The Model A Ford Club of America grew out of a 1955 meeting of Southern California MARC members in Glendale and broke away from MARC after the 1957 national convention.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "mafca-history",
    "marc-history"
   ],
   "evidence": [
    {
     "ref": "mafca-history",
     "quote": "many who were national members of the Model A Restorers Club (MARC) met at Red Grow's Auto Sales lot in Glendale"
    },
    {
     "ref": "marc-history",
     "quote": "After the 1957 National Convention, the Southern California Region broke away and formed the Model"
    }
   ]
  },
  {
   "section": "market",
   "claimText": "As of September 2026 the average Model A trades below $20,000: classic.com's average is $18,732, and Hagerty in 2020 put even a #1 condition business coupe or Tudor in the low $20,000 range, with a #1 Town Car at $55,000.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "classic-model-a",
    "hagerty-2020"
   ],
   "evidence": [
    {
     "ref": "classic-model-a",
     "quote": "The average price of a Ford Model A is $18,732."
    },
    {
     "ref": "hagerty-2020",
     "quote": "A #1 (Concours) condition town car can command $55,000, but a similar-condition business coupe or Tudor sedan can be had in the low $20,000 range."
    }
   ]
  },
  {
   "section": "market",
   "claimText": "RM Sotheby's sold a 1931 Roadster for $22,000 at Auburn Fall 2018, a 1930 Roadster for $22,000 at Auburn Fall 2019, a restored 1930 Roadster for $28,000 at Arizona 2023 and a 1930 roadster pickup for $45,100 from the Gene Ponder Collection in 2022.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "rm-af18",
    "rm-af19",
    "rm-az23",
    "rm-gp22"
   ],
   "evidence": [
    {
     "ref": "rm-af18",
     "quote": "$22,000 USD | Sold Auburn Fall 2018 , Lot 3143"
    },
    {
     "ref": "rm-af19",
     "quote": "$22,000 USD | Sold Auburn Fall 2019 , Lot 3008"
    },
    {
     "ref": "rm-az23",
     "quote": "$28,000 USD | Sold Arizona 2023 , Lot 105"
    },
    {
     "ref": "rm-gp22",
     "quote": "$45,100 USD | Sold Gene Ponder Collection , Lot 3209"
    }
   ]
  },
  {
   "section": "market",
   "claimText": "Hagerty found that 72 percent of Model A insurance quotes came from pre-boomer and baby boomer owners and that values were flat to slightly down in 2020.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "hagerty-2020"
   ],
   "evidence": [
    {
     "ref": "hagerty-2020",
     "quote": "72 percent of quotes for Model A Fords come from members of the pre-boomer and baby boomer generations"
    }
   ]
  },
  {
   "section": "problems",
   "claimText": "Rear main oil leaks on a Model A are almost always a cracked rear main babbitt bearing or excess clearance from wear, per MAFCA's technical answers.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "mafca-tech-block"
   ],
   "evidence": [
    {
     "ref": "mafca-tech-block",
     "quote": "99.9% of the time the rear oil leak is because the rear main Babbitt is cracked and/or too much clearance due to wear"
    }
   ]
  },
  {
   "section": "problems",
   "claimText": "Model A overheating is usually the radiator; a correct radiator has three rows of tubes and some replacement radiators had only two.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "mafca-tech-cooling"
   ],
   "evidence": [
    {
     "ref": "mafca-tech-cooling",
     "quote": "The main cause is usually the radiator. First you can check to see if your radiator has 3 rows of tubes. Some replacement radiators had only 2 rows."
    }
   ]
  },
  {
   "section": "problems",
   "claimText": "Parts support for the Model A is extensive, and the reproduction trade dates to the 1950s: Snyder's Antique Auto Parts began in the late 1950s making Model T carburetor springs and went on to Model A seat springs and parts.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "hagerty-2020",
    "snyders-about"
   ],
   "evidence": [
    {
     "ref": "hagerty-2020",
     "quote": "Parts support is vast, and both problems and their solutions are well-documented."
    },
    {
     "ref": "snyders-about",
     "quote": "was founded in the late 1950's as a manufacturer of small carburetor springs for Model T Fords by Don Snyder, Sr."
    }
   ]
  }
 ]
};
