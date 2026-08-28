/**
 * Researched model draft — Ford GT40 (1964-1969).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedGt40 = {
 "slug": "ford/gt40",
 "make": "Ford",
 "model": "GT40",
 "generation": "Mk I / Mk II / Mk III / Mk IV",
 "generationCode": null,
 "trim": null,
 "yearStart": 1964,
 "yearEnd": 1969,
 "bodyStyles": [
  "2-door competition coupe with roof-cut doors (Mk I, Mk II)",
  "2-door road coupe with lengthened tail and rear luggage bay (Mk III)",
  "2-door competition coupe on a bonded honeycomb-aluminium tub (Mk IV / J-car)"
 ],
 "engines": [
  "4,262 cc Ford Fairlane-derived small-block V8 as fitted to the Lola Mk6 GT the programme started from, rated at 260 hp on four Webers and upgraded to a 4.7-litre Cobra unit for Le Mans 1963",
  "4,736 cc (289 cu in) Ford small-block V8, cast-iron block with pushrod overhead valves, four twin-choke Weber 48 IDA carburettors, 10.0:1 compression, 380 bhp at 6,500 rpm and 330 lb ft at 5,500 rpm in Mk I competition trim",
  "4,736 cc small-block V8 in Mk I road trim: a single Holley four-barrel at 9.0:1 for 306 bhp, or the four-Weber option for 335 bhp",
  "4,942 cc (302 cu in) Windsor V8 in the 1968-69 Gulf Mk I, 10.6:1 compression, four twin-choke 48 IDA Webers, 425 bhp at 6,000 rpm",
  "6,997 cc (427 cu in) Ford FE big-block V8 in the Mk II with a Kar Kraft four-speed transaxle; RM Sotheby's describes chassis P/1032 as carrying a NASCAR 427 with the T-44 unit",
  "4,737 cc (289 cu in) V8 detuned for the Mk III road car, 10.5:1 compression, 306 bhp at 6,000 rpm and 329 lb ft at 4,200 rpm",
  "427 cu in FE big-block in the Mk IV, quoted at approximately 500 bhp at 6,400 rpm, 530 bhp or 550 bhp depending on the source consulted"
 ],
 "productionTotal": null,
 "productionNotes": "The GT40 was never numbered as one series, which is why published totals for it disagree. Three families run in parallel. The Slough prototypes carry GT/101 to GT/112. Series cars carry the GT40P prefix from GT40P/1000: Safir GT40 Spares, which holds the trademark, places the Mk I and Mk II run at GT40P-1000 to GT40P-1086 and reserves GT40P-1101 to GT40P-1114 for the Mk III, of which only 1101 to 1107 were completed as Mk IIIs, the balance of the block later being built as Mk Is. The Dearborn cars are numbered separately as J-cars from J-1, and are the only GT40s not built in England. Outside those runs sit the Alan Mann lightweights AM GT 1 and AM GT 2, the XGT experimental cars and the M-series J.W. Automotive Mirages M 10001 to M 10003. Totals then diverge. Wikipedia's narrative says around 100 cars while its own specification table states 105. Supercar Nostalgia reads the Mk I run as P/1000 to P/1084, roughly 85 cars; RM Sotheby's catalogues 87 Mk I variants, of which 31 were specified as road cars. Mk II counts run from RM Sotheby's 'one of just eight built' to Ultimatecarpage's eleven plus two prototypes. The Mk IV is worse: Wikipedia counts nine J-specification chassis with six completed as Mk IVs and one as the G7A, the Shelby American Collection counts two J-cars and six Mk IVs finished during 1967, and Gooding's catalogue for J-10 states twelve built with ten remaining. Only the Mk III is agreed, at seven. Because no consulted source reconciles these, no single total is asserted. The GT40P sequence also did not close in 1969: Safir Engineering used GT40P-1090 to 1100, 1115 to 1125 and 1128 to 1145 for forty Mk V continuation cars between 1981 and 2000, and Superformance has continued the same sequence under licence since 2000.",
 "notableTrims": [
  {
   "name": "Mk I (competition)",
   "note": "The core car: steel semi-monocoque by Abbey Panels of Coventry, glassfibre panels from Glass Fibre Engineering of Farnham, 4.7-litre small-block on four Webers, ZF 5DS-25 transaxle. Chassis GT40P/1075 won Le Mans in both 1968 and 1969 in Gulf colours."
  },
  {
   "name": "Mk I (road specification)",
   "note": "Thirty-one of the Mk I run were built to road trim, twenty of them earmarked for Ford's Mk I Promotion and Disposal Program. These cars carry the strongest documentation of any GT40 outside outright race winners."
  },
  {
   "name": "Mk II",
   "note": "The 7.0-litre 427 FE car with a Kar Kraft four-speed transaxle that took the 1966 Le Mans one-two-three. Eight factory-supported cars were entered that year: three by Shelby American, three by Holman-Moody, two by Alan Mann."
  },
  {
   "name": "Mk III",
   "note": "The purpose-built road car: eight inches of extra tail with a luggage bay, raised twin headlamps, softened damping, central gearchange, 306 bhp. Seven were built at $18,500 against $16,500 for a racing Mk I, and only three found customers."
  },
  {
   "name": "Mk IV (J-car)",
   "note": "Built at Kar Kraft in Dearborn on a bonded and riveted honeycomb-aluminium tub cured in an autoclave, the first use of the technique in a racing car. Won Le Mans in 1967 with Gurney and Foyt, then was made obsolete when the FIA capped prototypes at 305 cu in."
  },
  {
   "name": "Alan Mann lightweight",
   "note": "Two cars of a planned five, AMGT40/1 and AMGT40/2, built in 1966 with light alloy bodywork and other weight-saving changes. They sit outside the GT40P sequence in their own AM GT series."
  },
  {
   "name": "Safir Mk V",
   "note": "Continuation cars built from 1981 under Safir Engineering with J.W. Engineering overseeing, using unfilled blocks inside the original GT40P sequence. Forty were completed, the last, GT40P-1145, in September 2000; five were big-block cars."
  },
  {
   "name": "Superformance GT40 (licensed continuation)",
   "note": "Built under Safir licence since 2000 and issued GT40P numbers continuing the original sequence, which makes them registry-eligible. Safir states it has licensed roughly two-thirds of all cars ever produced under the GT40 name."
  }
 ],
 "specs": {
  "layout": "Mid-mounted longitudinal V8, rear-wheel drive",
  "chassis": "Steel semi-monocoque with glassfibre body panels (Mk I, Mk II, Mk III); bonded and riveted honeycomb-aluminium tub with L-section reinforcement (Mk IV)",
  "body": "Glassfibre doors and panels by Glass Fibre Engineering, Farnham; roof-cut doors that take a section of the roof with them",
  "engine": "4,736 cc (289 cu in) Ford small-block on four Weber 48 IDA in Mk I form; 427 cu in Ford FE big-block in Mk II and Mk IV; 302 cu in Windsor in the 1968-69 Gulf cars",
  "power": "380 bhp at 6,500 rpm (Mk I competition); 306 bhp (Mk III); 425 bhp at 6,000 rpm (Gulf Mk I); Mk IV quoted at approximately 500-550 bhp depending on source",
  "torque": "330 lb ft at 5,500 rpm (Mk I competition); 329 lb ft at 4,200 rpm (Mk III)",
  "transmission": "ZF 5DS-25 five-speed all-synchromesh transaxle with triple-plate clutch and limited-slip differential, replacing the Colotti four-speed of the earliest cars; Kar Kraft T-44 four-speed on Mk II and Mk IV",
  "suspension": "Independent front and rear with Koni adjustable dampers",
  "brakes": "Four-wheel Girling stage II ventilated discs",
  "wheelbase": "92 in (2,337 mm)",
  "weight": "910 kg for a competition Mk I, road cars roughly 50 kg heavier; Wikipedia gives 1,207 kg for the complete J-car against 2,250 lb quoted by the Shelby American Collection for its Mk IV",
  "acceleration": "0-60 mph in approximately 5.0-5.3 seconds for the Mk III road car, source figures differing",
  "top_speed": "164 mph quoted in road trim by Motor Sport in December 1966; about 165 mph for the Mk III; Mk IV Mulsanne figures range from 213 mph to over 230 mph across sources",
  "fuel_system": "Twin sill-mounted Goodyear fuel cells, 20 Imperial gallons total on the period road car",
  "height": "40 inches (1.02 m) at the top of the windscreen, which is what the model name records",
  "chassis_numbers": "GT/101-GT/112 prototypes; GT40P/1000 upward for series cars; M3/1101-M3/1107 for Mk III; J-1 upward for the Dearborn J-cars and Mk IVs"
 },
 "summary": "The Ford GT40 was the product of Henry Ford II's decision, after a failed attempt to buy Ferrari, to win the 24 Hours of Le Mans outright. Its starting point was Eric Broadley's Lola Mk6 GT of 1963: Ford bought two of the three built, hired Broadley alongside John Wyer and Roy Lunn, and set up Ford Advanced Vehicles at Slough to turn the idea into a Ford. The name records the car's height, forty inches at the top of the windscreen. Four marks followed, and they are not variations on a single car. The Mk I carried a 4.7-litre small-block in a steel semi-monocoque; the Mk II took the 7.0-litre 427 and delivered the 1966 one-two-three; the Mk III was a lengthened, softened road car of which seven were built; the Mk IV, built in Dearborn by Kar Kraft on a honeycomb-aluminium tub, won in 1967. Gulf-liveried J.W. Automotive Mk Is then won in 1968 and 1969, the second time with the same chassis, GT40P/1075. Published period totals cluster around a hundred cars. The number of cars wearing the shape today is very much larger.",
 "history": "## Lola, Slough and a Purchase That Did Not Happen\nFord's programme began with a deal that fell through. Henry Ford II wanted Le Mans, Ferrari would not be bought, and the fastest route to a mid-engined prototype was to acquire someone else's. Eric Broadley had shown the Lola Mk6 GT at the London Racing Car Show in January 1963: a monocoque car carrying a Ford Fairlane-derived V8 as a fully stressed member, three years before Formula 1 adopted the idea, with a Colotti four-speed behind it. Broadley drove it to Le Mans himself, arrived after scrutineering had closed and was admitted anyway; Hobbs and Attwood ran well until the transmission failed at five in the morning. Three Mk6s were built. Ford took two as rolling test beds, signed Broadley to a two-year contract and set him to work under Roy Lunn at Ford Advanced Vehicles in Slough, with John Wyer running the operation. Broadley lasted a year. He wanted an aluminium chassis and Lunn insisted on steel for cost and repairability; Broadley left with the prototype and the workshop building, which had been his to begin with.\n\n## From Small Block to Big Block\nThe first cars were quick and fragile. Three were entered at Le Mans in 1964 and all three retired, one on transmission, one on fire, Phil Hill's running third at dawn before it stopped. Racing was taken away from Broadley and Wyer and handed to Carroll Shelby. Ford's own account credits Roy Lunn's Dearborn team with the 427-engined GT40X experiment, which Ken Miles tested at Romeo at 210 mph before saying it was the car he wanted at Le Mans. Seven-litre cars were entered in 1965 and retired, leaving a customer Ferrari 250 LM to win. The 1966 Mk II settled it, with three cars crossing the line together. The finish is still argued over: the ACO's response to Ford's plan for a dead heat gave the victory to Bruce McLaren and Chris Amon and denied Ken Miles the Daytona, Sebring and Le Mans treble in one season.\n\n## The J-Car and the Honeycomb Tub\nThe Mk IV was a different car under the skin and the only GT40 built in America. Kar Kraft constructed the chassis and body using aircraft practice: a honeycomb aluminium main structure reinforced with riveted aluminium L-sections, skinned in bonded and riveted aluminium and cured in an autoclave. Wikipedia records the resulting tub at 39 kg and the complete car at 1,207 kg, some 136 kg below the Mk II. Kar Kraft assembled the cars and passed them to Shelby American and Holman-Moody for race preparation. Dan Gurney and A.J. Foyt won Le Mans in 1967 four laps clear of the Ferrari P4; the sister car of Andretti and Bianchi was running second when a front pad was refitted the wrong way round and let go at the Esses. The programme ended almost immediately afterwards, when the FIA capped prototype capacity at 305 cu in for 1968.\n\n## Gulf, 1075 and the Second Act\nThe rule change should have finished the GT40 and instead handed it two more wins. J.W. Automotive ran 5.0-litre Mk Is in Gulf colours, and chassis GT40P/1075 won in 1968 with Pedro Rodriguez and Lucien Bianchi by five clear laps, then won again in 1969 with Jacky Ickx and Jackie Oliver after a last-lap pass at the White House by about a hundred yards. One car, two victories, five years after the model's first Le Mans humiliation.\n\n## The Road Cars\nRoad GT40s came in two forms. Thirty-one Mk Is were specified for the road, twenty of them destined for Ford's Mk I Promotion and Disposal Program. The Mk III was the deliberate attempt: eight inches longer in the tail with somewhere to put luggage, twin headlamps raised to legal height, softer damping, a central gearchange for left-hand drive, 306 bhp. Ford asked $18,500 against $16,500 for a racing Mk I, built seven and sold three. Denis Jenkinson, testing a road car for Motor Sport in December 1966 at £7,253 including purchase tax, called the steering unbelievably accurate and the ride superb, then noted that he could not carry a toothbrush in it.",
 "marketNotes": "As of August 2026, classic.com tracks a thin but very high public record for original GT40s: an average sale of $8,531,667 across the results it holds, with a low of $4,405,000 for a 1967 car on 2 March 2024 and a high of $12,375,000 for a 1966 Mk II factory lightweight on 16 January 2026, and a single car listed for sale. That sample is small enough that individual results move it, and it does not capture everything: RM Sotheby's sold Mk II chassis P/1032, a Holman-Moody 1966 Le Mans entrant and 1966 Sebring runner-up, for $13,205,000 at its Miami sale in 2025. Road cars trade below competition cars but not by as much as might be expected. Mecum sold Mk I road car P/1034, described as the first of the thirty-one road cars delivered to a private customer, for $7,040,000 including premium at Kissimmee in January 2025, against $6,930,000 for the GT40 sold there in 2024. Not everything clears: RM Sotheby's offered road-specification P/1058 at Miami in 2026 against a $6,500,000 to $8,000,000 estimate and it did not sell. Mk IVs have carried lower published estimates than either, Gooding pitching J-10 at $2,500,000 to $3,000,000 at Pebble Beach in 2018. All figures are as of August 2026 and as reported by the houses concerned.",
 "whatToLookFor": "The first question on any GT40 is which car is actually being offered, because most cars sold under the name were built after 1980. Safir Engineering completed forty Mk V continuations between April 1981 and September 2000 using unfilled blocks inside the original series - GT40P-1090 to 1100, 1115 to 1125 and 1128 to 1145 - and Superformance has built cars under Safir licence since 2000 that also carry GT40P numbers continuing the original sequence and are registry-eligible on that basis. Safir's own statement is that it has licensed roughly two-thirds of all GT40s ever produced. Beyond the licensed cars sits an unlicensed replica trade large enough that Safir registered the trademark in 1985 specifically to police it. A GT40P chassis number therefore dates nothing on its own. What separates a 1960s car is documentation of the tub: period race records, continuity of ownership and the research of recognised marque historians, which recent consignments have cited as part of the file. Period competition cars were rebuilt, rebodied and renumbered as a matter of routine, and at least one, P/1033, was converted for road use by Sbarro before being rebuilt again. Original steel monocoques rust, so a car that has been re-tubbed is a different proposition to one that has not, and the paperwork is where that shows. On road cars, whether the car left Slough in road trim or was converted later is a material distinction, as is which of the seven Mk IIIs is on offer and how it is driven.",
 "commonProblems": "The steel semi-monocoque is the recurring structural issue. Superformance, building under licence, substitutes zinc-coated steel precisely because the original material rusted, and substitutes aluminium for magnesium in several locations where the period castings degrade. Corrosion in the sills is compounded by the fuel installation: the period car carried Goodyear bag cells in the sill boxes, twenty Imperial gallons across two tanks, and perished bags are both a running problem and a fire risk. Transmissions are the other constraint. The Colotti four-speed of the earliest cars was replaced by the ZF 5DS-25 because the Colotti was not durable, and ZF units and their internals are scarce; the Mk II and Mk IV used the Kar Kraft T-44 instead, which is scarcer still. Brakes are unassisted Girling discs and wear quickly when the car is used as intended. Period criticism of the driving experience has aged into ownership reality: Motor Sport in 1966 found entry and exit difficult for taller drivers, three-quarter rear vision poor, road dirt swirling onto the rear lamps and number plate, and driveline wind-up on lazy gearchanges, alongside 13.7 mpg driven hard. The Mk III attracted specific complaint over its central linkage, noticeably heavier than the Mk I's right-hand change, and over build quality generally.",
 "valueTrajectory": "The GT40 has not followed the boom-and-bust arc of the late-1980s supercars because it was never a speculative instrument. It is a small population of racing cars with continuous, traceable competition histories, and it has re-rated steadily as that kind of provenance has become the dominant driver in the collector market. The direction is legible in the road cars, which are the most comparable population: Mecum's Kissimmee result moved from $6,930,000 in 2024 to $7,040,000 including premium for P/1034 in January 2025, while a Mk II with Le Mans and Sebring history reached $13,205,000 at RM Sotheby's Miami in 2025. As of August 2026, classic.com's tracked high stands at $12,375,000. The unsold RM Sotheby's offering of P/1058 at Miami in 2026 against a $6,500,000 to $8,000,000 estimate suggests the top of the road-car band is being tested rather than cleared. The licensed continuation market moves on its own logic and in the same direction: rolling chassis bought from Superformance at $65,000 to $90,000 in 2006 were reselling at $230,000 to $240,000 against new prices of $153,000 for a rolling chassis and $200,000 to $250,000 complete, all as of August 2026.",
 "overallConfidence": "medium",
 "sources": [
  {
   "ref": "ford-gt40x",
   "title": "GT40X 1965 Le Mans",
   "url": "https://corporate.ford.com/articles/history/ford-gt40-origins-427-gt40x.html",
   "publisher": "Ford Motor Company",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Ford's own account of the 427-engined GT40X built by Roy Lunn's Dearborn team, Ken Miles testing it at Romeo at 210 mph, and roughly a hundred further changes including glassfibre bodywork and magnesium wheels."
  },
  {
   "ref": "wikipedia-gt40",
   "title": "Ford GT40",
   "url": "https://en.wikipedia.org/wiki/Ford_GT40",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Source of the 'around 100 cars' narrative figure against '105 produced' in its own table; 31 road-trim Mk Is; seven Mk IIIs with four right-hand drive; six Mk IVs from nine J-specification chassis plus the G7A; 39 kg tub and 1,207 kg complete J-car; Alan Mann AMGT40/1 and /2; Gulf 302 at 425 hp; the 40-inch height."
  },
  {
   "ref": "gt40net-registry",
   "title": "GT40 chassis numbers",
   "url": "http://gt40.net/",
   "publisher": "GT40 Archives",
   "sourceType": "registry",
   "reliability": "medium",
   "notes": "Chassis-by-chassis registry listing GT 101-112, GT40P/1000 through P/1114 with gaps, AM GT 1-2, XGT 1-2, Mirage M 10001-10003 and the J-series cars. Records P/1033 as converted for road use by Sbarro and later rebuilt."
  },
  {
   "ref": "safir-thorp",
   "title": "GT40 History - Peter Thorp letter",
   "url": "https://gt40.com/letter-peter-thorp.php",
   "publisher": "Safir GT40 Spares Ltd",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "The trademark holder's account of the numbering blocks: prototypes GT 101-112, Mk I and Mk II GT40P-1000 to 1086, Mk III GT40P-1101 to 1114 with the unused balance later built as Mk I, and Mk V blocks GT40P-1090 to 1100, 1115 to 1125 and 1128 to 1145. Forty Mk Vs, April 1981 to September 2000; trademark obtained 1985."
  },
  {
   "ref": "safir-spares",
   "title": "Safir GT40 Spares",
   "url": "https://gt40.com/",
   "publisher": "Safir GT40 Spares Ltd",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Establishes that GT40P-1145 was the fortieth and final Mk V, that Safir has licensed roughly two-thirds of all GT40s ever produced, and that it runs the GT40 World Registry and a certification programme covering cars from 1980 onward."
  },
  {
   "ref": "shelby-j4",
   "title": "1967 FORD GT J-4",
   "url": "https://www.shelbyamericancollection.org/gt40s/1967-ford-gt-j4",
   "publisher": "Shelby American Collection",
   "sourceType": "specialist",
   "reliability": "high",
   "notes": "Museum record for J-4: honeycomb tub described as a first for a racing car, 2,250 lb, 427 at 550 hp, over 230 mph on the Mulsanne. States two J-Cars and six Mk IVs completed during 1967 and names J-5 as the 1967 Le Mans winner."
  },
  {
   "ref": "shelby-j7",
   "title": "1967 FORD GT MK IV J-7",
   "url": "https://www.shelbyamericancollection.org/gt40s/1967-ford-gt-mk-iv-j7",
   "publisher": "Shelby American Collection",
   "sourceType": "specialist",
   "reliability": "high",
   "notes": "Construction detail: honeycomb aluminium main structure with riveted L-sections and a bonded, riveted skin, autoclave cured; Kar Kraft built the cars for Shelby American and Holman-Moody; J-1 to J-3 prototypes 1966, J-5 to J-8 early 1967. Records the FIA 305 cu in limit ending the programme late in 1967."
  },
  {
   "ref": "simeone-mkiv",
   "title": "1967 Ford GT40 MK IV",
   "url": "https://simeonemuseum.org/collection/1967-ford-gt40-mk-iv/",
   "publisher": "Simeone Foundation Automotive Museum",
   "sourceType": "specialist",
   "reliability": "high",
   "notes": "Museum record for J-8: Kar Kraft honeycomb chassis substantially lighter but near-equal in strength to the steel version, 427 at 530 hp, 6.98 litres, a 224 mph Le Mans figure set by Ruby and Hulme, and the 1967 winning car named as J6."
  },
  {
   "ref": "petersen-mk3",
   "title": "1967 Ford GT40 Mk III",
   "url": "https://www.petersen.org/vehicle-spotlights/1967-ford-gt40-mk-iii",
   "publisher": "Petersen Automotive Museum",
   "sourceType": "specialist",
   "reliability": "high",
   "notes": "Museum record for MK3 1105, first owned by Herbert von Karajan: 289 V8 at 306 hp, ZF five-speed, 0-60 mph in 5.3 seconds, about 165 mph, and the statement that four of the seven Mk IIIs were delivered with left-hand drive."
  },
  {
   "ref": "revs-lola",
   "title": "Lola GT Mk6: The Alpha and Omega of the Ford GT",
   "url": "https://automedia.revsinstitute.org/lola-gt-mk6-the-alpha-and-omega-of-the-ford-gt",
   "publisher": "Revs Institute",
   "sourceType": "specialist",
   "reliability": "high",
   "notes": "Three Lola GT Mk6s built, one steel/duraluminium prototype and two all-aluminium; 4,262 cc at 260 hp, upgraded to the 4.7-litre Cobra unit for Le Mans. Ford took two as rolling test beds and signed Broadley to a two-year contract under Roy Lunn at Slough; he left after a year over steel versus aluminium, keeping the prototype and the workshop building."
  },
  {
   "ref": "motorsport-lola",
   "title": "GT40 genesis: how Eric Broadley's Lola Mk6 sparked Ford's Le Mans revolution",
   "url": "https://www.motorsportmagazine.com/special-article/le-mans/18/gt40-genesis-how-eric-broadleys-lola-mk6-sparked-fords-le-mans-revolution/",
   "publisher": "Motor Sport",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Lola Mk6 GT shown at the London Racing Car Show in January 1963; monocoque chassis, Fairlane-derived 260 cu in V8 as a fully stressed member three years before Formula 1, Colotti four-speed, Hobbs and Attwood retiring at Le Mans 1963 at 5am. Ford bought the Lola cars and employed Broadley with Roy Lunn."
  },
  {
   "ref": "motorsport-lemans",
   "title": "Ford GT40 at Le Mans: How a Bitter Failure Inspired an Epic Victory",
   "url": "https://www.motorsportmagazine.com/special-article/carroll-shelby/84/ford-gt40-at-le-mans-how-a-bitter-failure-inspired-an-epic-victory/",
   "publisher": "Motor Sport",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Race-by-race account: three cars retired in 1964; seven-litre cars retired in 1965 leaving a customer Ferrari 250 LM to win; racing moved from Broadley and Wyer to Carroll Shelby; the ACO's response to the dead-heat plan gave 1966 to McLaren and Amon and denied Miles the treble; Gurney and Foyt four laps clear in 1967; 1075 winning in 1968 by five laps and 1969 by about 100 yards."
  },
  {
   "ref": "motorsport-1966",
   "title": "On the road with the Ford GT40, December 1966",
   "url": "https://www.motorsportmagazine.com/archive/article/december-1966/37/on-the-road-with-the-ford-gt40/",
   "publisher": "Motor Sport",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Period road test by Denis Jenkinson: 164 mph quoted in road trim, 335-plus bhp, 13.7 mpg driven hard, 5,900 pounds plus 1,353 pounds purchase tax, ZF five-speed, twin sill Goodyear fuel cells of 20 gallons, just under a ton, plus criticisms of entry and exit, rear vision, luggage space and driveline wind-up."
  },
  {
   "ref": "supercarnostalgia-mk1",
   "title": "Ford GT40 Mk1 Guide",
   "url": "https://supercarnostalgia.com/blog/ford-gt40-mk1-65",
   "publisher": "Supercar Nostalgia",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Mk I run given as GT40 P/1000 to P/1084, roughly 85 cars. Competition engine 4,736 cc, four Weber 48 IDA, 10.0:1, 380 bhp at 6,500 rpm and 330 lb ft at 5,500 rpm; road versions 306 bhp on a Holley or 335 bhp on Webers. Colotti replaced by the ZF DS25; steel semi-monocoque by Abbey Panels, glassfibre panels by Glass Fibre Engineering, 910 kg."
  },
  {
   "ref": "supercarnostalgia-mk3",
   "title": "Ford GT40 Mk3 Guide",
   "url": "https://supercarnostalgia.com/blog/ford-gt40-mk3",
   "publisher": "Supercar Nostalgia",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Seven Mk IIIs built between December 1966 and June 1969, three sold to customers (M3/1103, 1104, 1105) and four retained for promotion (M3/1101, 1102, 1106, 1107). Dry-sumped 4,737 cc V8, 10.5:1, 306 bhp at 6,000 rpm, 329 lb ft at 4,200 rpm; $18,500 against $16,500 for a racing Mk I; 265 mm longer; criticism of the central gearchange."
  },
  {
   "ref": "motorcities-mk3",
   "title": "Remembering the Ford GT40 MKIII Road Car",
   "url": "https://www.motorcities.org/story-of-the-week/2025/remembering-the-ford-gt40-mkiii-road-car",
   "publisher": "MotorCities National Heritage Area",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Seven MKIIIs, four left-hand drive and three right-hand drive, all surviving; first prototype XP130-1 later renumbered M3/1101; states M3/1107 was the last completed, in June 1967. Detuned 289 at 306 bhp, $18,500, eight-inch longer rear body."
  },
  {
   "ref": "ultimatecarpage-mkii",
   "title": "1966 Ford GT40 Mk II Chassis",
   "url": "https://www.ultimatecarpage.com/sn/1089/Ford-GT40-Mk-II.html",
   "publisher": "Ultimatecarpage",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Chassis index giving Mk II production as 11 plus two prototypes, built at Slough during 1966, listing GT40P/1012, 1015, 1016, 1031, 1032, 1046 and 1047 alongside XGT-2 and XGT-3, and noting that GT40P/1046 finished second on the road in 1966 but was classified the winner. Directly contradicts RM Sotheby's figure of eight."
  },
  {
   "ref": "classicmotorsports-superformance",
   "title": "Superformance GT40: Continuing a Legacy",
   "url": "https://classicmotorsports.com/articles/superformance-gt40-continuing-legacy/",
   "publisher": "Classic Motorsports",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Superformance holds the exclusive Safir licence and issues GT40P numbers continuing the original sequence, making the cars registry-eligible. Zinc-coated steel replaces the original rust-prone steel and aluminium replaces magnesium in several places. Rolling chassis from $153,000, complete cars $200,000-$250,000; 2006 chassis bought at $65,000-$90,000 reselling at $230,000-$240,000."
  },
  {
   "ref": "classic-gt40",
   "title": "Ford GT40 Market",
   "url": "https://www.classic.com/m/ford/gt40/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Market data as of August 2026: average sale $8,531,667 across a small tracked sample, low of $4,405,000 for a 1967 GT40 on 2 March 2024, high of $12,375,000 for a 1966 Mk II factory lightweight on 16 January 2026, five listings shown and one car currently for sale."
  },
  {
   "ref": "rm-mi25-mkii",
   "title": "1966 Ford GT40 Mk II, Miami 2025",
   "url": "https://rmsothebys.com/auctions/mi25/lots/r0002-1966-ford-gt40-mk-ii/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Chassis P/1032 sold for $13,205,000 at Miami in 2025. Catalogue states 'one of just eight Ford GT40 Mk IIs built' and that eight factory-supported Mk IIs ran at Le Mans in 1966 - three Shelby American, three Holman-Moody, two Alan Mann. NASCAR 427 with T-44 transaxle; second at Sebring 1966."
  },
  {
   "ref": "rm-mi26-p1058",
   "title": "1967 Ford GT40 Mk I, Miami 2026",
   "url": "https://rmsothebys.com/auctions/mi26/lots/r0056-1967-ford-gt40-mk-i/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Chassis P/1058, road-specified with 289 High Performance V8 on original sand-cast Webers and a five-speed ZF. Catalogue states 'one of just 31 Mk I examples specified as road cars' out of 87 total Mk I variants built, and places it among the 20 Promotion and Disposal Program cars. Not sold against $6,500,000-$8,000,000."
  },
  {
   "ref": "rm-mo16-p1061",
   "title": "1966 Ford GT40 Mk I, Monterey 2016",
   "url": "https://rmsothebys.com/auctions/mo16/lots/r110-1966-ford-gt40-mk-i/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Chassis P/1061, offered at Monterey 2016 against $3,750,000-$4,250,000 and not sold. Catalogue gives the mechanical specification used here for suspension and brakes - independent front and rear with Koni adjustable dampers, four-wheel Girling stage II ventilated discs, ZF 5DS-25 five-speed, 92-inch wheelbase - and states that only 31 Mk I examples were built for road use, P/1061 being one of the 20 cars in the Mk I Promotion and Disposal Program."
  },
  {
   "ref": "gooding-j10",
   "title": "1967 Ford GT40 Mk IV",
   "url": "https://www.goodingco.com/lot/1967-ford-gt40-mk-iv-2/",
   "publisher": "Gooding & Company",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Chassis J-10 offered at Pebble Beach in 2018 with an estimate of $2,500,000-$3,000,000. Catalogue describes it as 'one of 12 examples built, and 10 remaining' and quotes a 427 cu in OHV V-8 with twin Holley four-barrels at approximately 500 bhp at 6,400 rpm."
  },
  {
   "ref": "mecum-kissimmee-2025",
   "title": "2025 Mecum Kissimmee Auction (Top Sale Results)",
   "url": "https://www.classic-car-auctions.info/usa/florida/kissimmee/2025-mecum-kissimmee-auction-top-sale-results/",
   "publisher": "Classic Car Auctions",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "Records Mk I chassis P/1034, the first of the 31 road cars delivered to a private customer, selling for $7,040,000 at Mecum Kissimmee in January 2025, stated as including premium, against $6,930,000 for the GT40 sold there in 2024."
  }
 ],
 "claims": [
  {
   "section": "history",
   "claimText": "The GT40 originated in Ford's failed attempt to buy Ferrari, after which Ford acquired two of the three Lola Mk6 GTs built and engaged Eric Broadley to work with Roy Lunn at Ford Advanced Vehicles in Slough; the Lola had been shown at the London Racing Car Show in January 1963 with a monocoque chassis, a Fairlane-derived V8 used as a fully stressed member and a Colotti four-speed, and retired from Le Mans that year with transmission failure.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["revs-lola", "motorsport-lola", "wikipedia-gt40"]
  },
  {
   "section": "history",
   "claimText": "Broadley left the programme after a year following a disagreement over chassis material - he favoured aluminium and Roy Lunn insisted on steel for cost and repairability - and was compensated with the original Lola prototype and the Slough workshop building he had originally owned.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["revs-lola", "motorsport-lola"]
  },
  {
   "section": "history",
   "claimText": "All three GT40s entered at Le Mans in 1964 retired, seven-litre cars retired again in 1965 leaving a customer Ferrari 250 LM to win, and racing responsibility then passed from Broadley and Wyer to Carroll Shelby, with Ford's own account crediting Roy Lunn's Dearborn team with the 427-engined GT40X that Ken Miles tested at Romeo at 210 mph.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["motorsport-lemans", "ford-gt40x"]
  },
  {
   "section": "history",
   "claimText": "Ford took the first three places at Le Mans in 1966 with the 7.0-litre Mk II; the ACO's response to Ford's plan for a dead-heat finish gave the win to Bruce McLaren and Chris Amon in chassis GT40P/1046, which had finished second on the road, and denied Ken Miles the Daytona, Sebring and Le Mans treble in a single season.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["motorsport-lemans", "ultimatecarpage-mkii"]
  },
  {
   "section": "history",
   "claimText": "Chassis GT40P/1075 won Le Mans twice as a J.W. Automotive Gulf car, with Pedro Rodriguez and Lucien Bianchi in 1968 by five clear laps and with Jacky Ickx and Jackie Oliver in 1969 by about a hundred yards.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["motorsport-lemans", "wikipedia-gt40"]
  },
  {
   "section": "history",
   "claimText": "The Mk IV programme ended almost immediately after its 1967 Le Mans win when the FIA limited prototype engine capacity to 305 cubic inches for the following season.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["shelby-j7", "motorsport-lemans"]
  },
  {
   "section": "history",
   "claimText": "Sources disagree on which Mk IV chassis won Le Mans in 1967 for Dan Gurney and A.J. Foyt.",
   "confidence": "low",
   "status": "disputed",
   "sourceRefs": ["shelby-j4", "simeone-mkiv", "motorsport-lemans"],
   "conflictNote": "The Shelby American Collection states the 1967 race was won by chassis J-5 driven by Gurney and Foyt. The Simeone Foundation states the winning car was J6. Motor Sport names the drivers but not the chassis. Not resolved by any source consulted here."
  },
  {
   "section": "specs",
   "claimText": "The Mk I used a steel semi-monocoque built by Abbey Panels of Coventry with glassfibre panels from Glass Fibre Engineering of Farnham, a 4,736 cc small-block V8 on four twin-choke Weber 48 IDA carburettors giving 380 bhp at 6,500 rpm in competition trim, and a ZF 5DS-25 five-speed transaxle that replaced the earlier Colotti four-speed.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["supercarnostalgia-mk1", "rm-mi26-p1058", "rm-mo16-p1061", "wikipedia-gt40"]
  },
  {
   "section": "specs",
   "claimText": "The model name records the car's height of 40 inches measured at the top of the windscreen.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["wikipedia-gt40", "petersen-mk3"]
  },
  {
   "section": "specs",
   "claimText": "The Mk IV was built by Kar Kraft in Dearborn on a honeycomb aluminium main structure reinforced with riveted aluminium L-sections and skinned in bonded and riveted aluminium cured in an autoclave, a construction method the Shelby American Collection describes as a first for a racing car.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["shelby-j7", "shelby-j4", "simeone-mkiv"]
  },
  {
   "section": "specs",
   "claimText": "Published output and weight figures for the Mk IV differ substantially between museum and auction sources and no single figure is asserted here.",
   "confidence": "low",
   "status": "disputed",
   "sourceRefs": ["shelby-j4", "simeone-mkiv", "gooding-j10", "wikipedia-gt40"],
   "conflictNote": "The Shelby American Collection states 550 hp and 2,250 lb for J-4. The Simeone Foundation states 530 hp for J-8. Gooding's catalogue for J-10 states approximately 500 bhp at 6,400 rpm. Wikipedia gives the complete J-car at 1,207 kg, roughly 2,660 lb. Not resolved by any source consulted here."
  },
  {
   "section": "specs",
   "claimText": "Motor Sport's December 1966 road test of a road-trim GT40 recorded a quoted maximum of 164 mph, more than 335 bhp, 13.7 mpg driven hard, twin sill-mounted Goodyear fuel cells totalling 20 Imperial gallons and a UK price of 5,900 pounds plus 1,353 pounds purchase tax, alongside complaints about entry and exit, rear vision, luggage space, road dirt on the rear lamps and driveline wind-up on lazy gearchanges.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["motorsport-1966", "supercarnostalgia-mk1"]
  },
  {
   "section": "production",
   "claimText": "GT40 chassis numbers run in three separate families: GT/101 to GT/112 for the Slough prototypes, the GT40P prefix from GT40P/1000 for series cars, and J-1 upward for the Dearborn J-cars and Mk IVs, with the Alan Mann AM GT cars, the XGT experimentals and the M-series J.W. Automotive Mirages numbered outside all three.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["safir-thorp", "gt40net-registry", "wikipedia-gt40"]
  },
  {
   "section": "production",
   "claimText": "Published totals for GT40 production do not agree and no single figure is asserted here.",
   "confidence": "low",
   "status": "disputed",
   "sourceRefs": ["wikipedia-gt40", "safir-thorp", "supercarnostalgia-mk1", "rm-mi26-p1058", "rm-mi25-mkii", "ultimatecarpage-mkii", "gooding-j10", "shelby-j4"],
   "conflictNote": "Wikipedia's narrative states around 100 cars in total while its own specification table states 105. Supercar Nostalgia reads the Mk I run as P/1000 to P/1084, roughly 85 cars, where RM Sotheby's states 87 Mk I variants. RM Sotheby's states eight Mk IIs where Ultimatecarpage states eleven plus two prototypes. Wikipedia counts six Mk IVs from nine J-specification chassis, the Shelby American Collection counts two J-cars and six Mk IVs completed in 1967, and Gooding states twelve built with ten remaining. Not resolved by any source consulted here, so productionTotal is left null."
  },
  {
   "section": "production",
   "claimText": "Thirty-one Mk I cars were specified as road cars, twenty of which were earmarked for Ford's Mk I Promotion and Disposal Program, and RM Sotheby's places those 31 within a total of 87 Mk I variants.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["rm-mi26-p1058", "rm-mo16-p1061", "wikipedia-gt40", "mecum-kissimmee-2025"]
  },
  {
   "section": "production",
   "claimText": "Seven Mk III road cars were built, but sources disagree on the drive-hand split and on when the run ended.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["wikipedia-gt40", "petersen-mk3", "motorcities-mk3", "supercarnostalgia-mk3"],
   "conflictNote": "The Petersen Automotive Museum and MotorCities both state that four of the seven were left-hand drive; Wikipedia states that four were right-hand drive. On dates, Supercar Nostalgia gives the run as December 1966 to June 1969 while MotorCities states the last car, M3/1107, was completed in June 1967. Not resolved by any source consulted here."
  },
  {
   "section": "production",
   "claimText": "The Mk III was advertised at $18,500 against $16,500 for a racing Mk I, and of the seven built only three were sold to customers, the remainder being retained for promotional use.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["supercarnostalgia-mk3", "motorcities-mk3"]
  },
  {
   "section": "production",
   "claimText": "The GT40P sequence did not close in 1969: Safir Engineering built forty Mk V continuation cars between April 1981 and September 2000 using the unfilled blocks GT40P-1090 to 1100, 1115 to 1125 and 1128 to 1145, and Superformance has continued the same sequence under Safir licence since 2000.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["safir-thorp", "safir-spares", "classicmotorsports-superformance", "wikipedia-gt40"]
  },
  {
   "section": "summary",
   "claimText": "Because licensed continuation cars carry GT40P numbers drawn from and continuing the original sequence and are eligible for the same registry, a GT40P chassis number on its own does not establish that a car was built in the 1960s; period competition cars were also routinely rebuilt and renumbered, chassis P/1033 having been converted for road use by Sbarro before being rebuilt again.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["safir-thorp", "safir-spares", "classicmotorsports-superformance", "gt40net-registry"]
  },
  {
   "section": "problems",
   "claimText": "The original steel monocoque is corrosion-prone and the period magnesium castings degrade, to the point that the licensed continuation builder substitutes zinc-coated steel and aluminium for those materials.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["classicmotorsports-superformance", "supercarnostalgia-mk1"]
  },
  {
   "section": "market",
   "claimText": "As of August 2026 classic.com records an average GT40 sale of $8,531,667 across a small tracked sample, with a low of $4,405,000 for a 1967 car on 2 March 2024 and a high of $12,375,000 for a 1966 Mk II factory lightweight on 16 January 2026, a range that does not capture the $13,205,000 paid for Mk II chassis P/1032 at RM Sotheby's Miami in 2025.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["classic-gt40", "rm-mi25-mkii"]
  },
  {
   "section": "market",
   "claimText": "Auction evidence as of August 2026 places competition cars above road cars without an enormous gap: Mk I road car P/1034 made $7,040,000 including premium at Mecum Kissimmee in January 2025 against $6,930,000 for the GT40 sold there in 2024, road-specification P/1058 failed to sell at RM Sotheby's Miami in 2026 against a $6,500,000 to $8,000,000 estimate, and Gooding pitched Mk IV chassis J-10 at $2,500,000 to $3,000,000 at Pebble Beach in 2018.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["mecum-kissimmee-2025", "rm-mi26-p1058", "gooding-j10"]
  },
  {
   "section": "market",
   "claimText": "Licensed continuation cars form a separate and much lower market: as of August 2026 Superformance rolling chassis start at $153,000 and complete cars run $200,000 to $250,000, while rolling chassis bought at $65,000 to $90,000 in 2006 have resold at $230,000 to $240,000.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["classicmotorsports-superformance", "safir-spares"]
  }
 ]
};
