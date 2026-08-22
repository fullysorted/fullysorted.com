/**
 * Researched model draft — Mercedes-Benz 300 SL (W198).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seed300SL = {
 "slug": "mercedes-benz/300sl-w198",
 "make": "Mercedes-Benz",
 "model": "300 SL",
 "generation": "W198",
 "generationCode": "W198",
 "trim": null,
 "yearStart": 1954,
 "yearEnd": 1963,
 "bodyStyles": [
  "2-door Coupe (Gullwing, W198 I)",
  "2-door Roadster (W198 II)",
  "2-door Roadster with removable steel hardtop (option from late 1958)"
 ],
 "engines": [
  "3.0L M198 SOHC inline-6, Bosch mechanical direct fuel injection, dry sump, cast-iron block (Coupe, 1954-1957)",
  "3.0L M198 SOHC inline-6, Bosch mechanical direct fuel injection, dry sump, NSL 'Sonderteile' sports camshaft (optional on Coupe; standard on Roadster)",
  "3.0L M198 SOHC inline-6, aluminium-alloy block (Roadster, from March 1962, chassis 3049 onward)"
 ],
 "productionTotal": null,
 "productionNotes": "Sources do not agree on a single W198 total, so none is asserted here. The Gull Wing Group registry records 1,400 Gullwing Coupes built 1954-1957, of which 29 had all-aluminium bodies, broken down as 167 (Aug-Dec 1954), 855 (1955, including 26 alloy), 308 (1956, including 3 alloy) and 70 (Jan-May 1957). RM Sotheby's catalogue material is consistent with this, describing 1,371 steel-bodied cars plus 29 alloy cars. Sotheby's editorial instead states 1,408 coupes, a figure that appears to fold in prototypes and pre-production cars. Roadster production is far more settled: 1,858 cars built May 1957 to February 1963, all left-hand drive, distributed 554 (1957), 324 (1958), 211 (1959), 249 (1960), 250 (1961), 244 (1962) and 26 (1963). Taking the registry coupe figure, the W198 run totals roughly 3,258 cars; using the Sotheby's coupe figure it is 3,266. The alloy count is itself contested: 29 is the figure carried by the registry, RM Sotheby's and Sotheby's, while a Hagerty auction report states 24 were built in 1955.",
 "notableTrims": [
  {
   "name": "300 SL Coupe (Gullwing, W198 I)",
   "note": "1954-1957. Roof-hinged doors dictated by the deep spaceframe sills. Steel body with aluminium bonnet, doors and boot lid; drum brakes throughout; high-pivot single-joint swing axle."
  },
  {
   "name": "300 SL Coupe, Leichtmetallausfuehrung (alloy body)",
   "note": "All-aluminium bodywork and Plexiglas side and rear glazing, saving roughly 209 lb. 29 built per the Gull Wing Group registry. Trades in an entirely separate market from steel cars."
  },
  {
   "name": "NSL / Sonderteile sports camshaft",
   "note": "Optional competition-specification camshaft on the Coupe, standard on the Roadster. A documented factory NSL engine materially lifts a coupe's value."
  },
  {
   "name": "Rudge knock-off wheels",
   "note": "Factory centre-lock option on both bodies. Widely cited as adding a six-figure premium to an otherwise comparable car."
  },
  {
   "name": "300 SL Roadster (W198 II)",
   "note": "1957-1963. Lowered sill tubes and added bracing for conventional doors with wind-down windows, low-pivot single-joint swing axle, smaller fuel tank and usable luggage space."
  },
  {
   "name": "300 SL Roadster, disc-braked / alloy-block",
   "note": "Dunlop discs all round from March 1961 (chassis 2780 on); aluminium engine block from March 1962 (chassis 3049 on). The last and most usable specification."
  }
 ],
 "specs": {
  "layout": "Front engine, rear-wheel drive",
  "chassis": "Tubular steel spaceframe with triangulated sections and deep sills",
  "engine": "2,996 cc M198 SOHC inline-6, canted 50 degrees to the left",
  "fuel_system": "Bosch mechanical direct fuel injection into the combustion chamber",
  "lubrication": "Dry sump, adopted to suit the 50-degree engine tilt",
  "power_din": "Approximately 215 hp (DIN)",
  "power_sae_quoted": "220 hp at 5,800 rpm (Gooding catalogue); 240 hp SAE gross at 6,100 rpm (Wikipedia, Sonderteile specification)",
  "torque_roadster": "202 lb-ft at 4,600 rpm (Sonderteile engine, 9.5:1 compression)",
  "transmission": "4-speed manual",
  "top_speed": "Up to roughly 163 mph (263 km/h) with the tallest final drive; approximately 155 mph on typical gearing",
  "front_suspension": "Independent, double wishbones and coil springs",
  "rear_suspension_coupe": "Single-joint swing axle, high pivot",
  "rear_suspension_roadster": "Single-joint swing axle with pivot lowered about 87 mm below the differential centreline, plus compensating spring",
  "brakes_coupe": "Servo-assisted hydraulic drums all round",
  "brakes_roadster_late": "290 mm Dunlop discs all round from March 1961",
  "chassis_prefixes": "198040 (steel coupe), 198043 (alloy coupe), 198042 (roadster); 194010 denotes the W194 racing cars",
  "body_material": "Steel with aluminium panels; all-aluminium on 29 coupes"
 },
 "summary": "The Mercedes-Benz 300 SL (W198) is the road car that followed the W194 sports racer into showrooms at the insistence of US importer Max Hoffman, who committed to an order of 1,000 cars and secured a February 1954 New York introduction. Its tubular spaceframe carried deep, load-bearing sills that left no room for conventional hinges, producing the roof-hinged doors that named the car. Beneath the long bonnet sat a 2,996 cc single-overhead-cam six canted 50 degrees to clear the bonnet line, dry-sumped to suit that angle and fed by Bosch mechanical direct fuel injection - the first such system on a series-production petrol car. Coupe production ran to 1957, followed by the Roadster, which lowered the sill tubes for conventional doors and replaced the high-pivot swing axle with a low-pivot design that markedly reduced the coupe's oversteer. Twenty-nine coupes received all-aluminium bodies and occupy a separate market entirely. Values here follow documentation and originality more closely than cosmetic condition.",
 "history": "## From W194 to Showroom\nThe 300 SL began as a competition project. The W194, built around a tubular spaceframe and powered by a carburetted 3.0-litre six derived from the 300 saloon, contested the 1952 season and took a one-two at Le Mans and victory in the Carrera Panamericana. Ten were built. Mercedes-Benz had no plan to sell a road version; the impetus came from Max Hoffman, the Austrian-born New York importer, who argued in a September 1953 meeting in Stuttgart that American buyers would take the car and backed the position with an order for 1,000 units. The production 300 SL was shown at the New York International Motor Sports Show in February 1954, with series assembly beginning at Sindelfingen that August.\n\n## The Spaceframe and the Doors\nThe gullwing doors were a consequence, not a styling decision. The spaceframe's rigidity depended on deep triangulated sill sections running along each flank, and those sills sat too high for a conventional door aperture. Hinging the doors at the roof was the available answer. The arrangement brought its own compromises: awkward entry, a fixed side window on early cars, and a cabin that trapped heat. The frame's virtues were considerable stiffness at low weight, but it also made accident damage expensive, since a bent tube cannot be pulled straight in the way a monocoque can be repaired.\n\n## Injection and the Engine\nThe M198 six carried the significant technical claim. Where the W194 used triple Solex carburettors, the road car adopted Bosch mechanical direct injection, spraying fuel into the combustion chamber rather than the inlet tract - a genuine production first for a petrol engine, and derived from wartime aero-engine practice. To keep the bonnet line low the engine was canted 50 degrees toward the left, which in turn required dry-sump lubrication. Output is quoted variously depending on the measurement standard and camshaft: roughly 215 hp DIN, with SAE figures of 220 hp at 5,800 rpm and 240 hp at 6,100 rpm both appearing in catalogue and reference material. The optional NSL 'Sonderteile' sports camshaft raised output further and later became standard on the Roadster.\n\n## The Roadster and the End of the Line\nCoupe production stopped in May 1957 and the Roadster took over. Engineers halved the height of the sill tubes and added bracing elsewhere to recover the lost rigidity, permitting conventional doors with wind-down windows. The more consequential change was underneath: the coupe's high-pivot single-joint swing axle, which produced sharp camber change and a reputation for sudden oversteer at the limit, gave way to a low-pivot design with the pivot dropped roughly 87 mm below the differential centreline and a compensating spring added. Handling became notably more neutral. A smaller fuel tank freed genuine luggage space, a removable steel hardtop was offered from late 1958, Dunlop discs replaced drums all round in March 1961, and an aluminium block arrived in March 1962. Production ended in February 1963 after 1,858 Roadsters, all left-hand drive, with the W113 'Pagoda' 230 SL taking over as a very different proposition.\n\n## Collector Standing\nThe 300 SL became a blue-chip collectible early and has stayed there. Because so many cars have been restored, and because factory build records and data cards allow chassis, engine and original specification to be checked, the market rewards documented originality more than presentation. A 2023 chassis fraud episode sharpened that sensitivity further.",
 "marketNotes": "As of August 2026, classic.com records a Gullwing market benchmark of approximately $1,848,000 against an average sale near $1,741,000, with recent results spanning roughly $1,105,000 to $2,975,000 and a trend marked upward. The Roadster sits lower: a benchmark near $1,372,000, an average close to $1,388,000, and a recent range from about $657,500 (a 1958 car in July 2025) to $2,040,000 (August 2026). Individual results bracket those figures - Gooding & Company sold a 1955 Gullwing retaining its original engine per factory build record for $1,501,000 at Amelia Island in 2025, against a $1.3-1.5m estimate. Alloy cars are a separate market: Hagerty has put an excellent alloy example around $6.7 million against roughly $1.4 million for its steel equivalent, and RM Sotheby's sold an alloy car with Sonderteile engine, sports suspension and Rudge wheels for $5,010,000 at Monterey in 2022. Sotheby's editorial cites European guidance of roughly EUR 1.3 million for a standard steel car, about EUR 100,000 more for Rudge wheels, and EUR 5-7 million for alloy cars. Documentation drives these spreads more than paint and chrome.",
 "whatToLookFor": "Verify identity first. Chassis prefixes are 198040 for the steel coupe, 198043 for the alloy coupe and 198042 for the roadster, with M198 engine prefixes throughout; a factory build record or data card confirming original engine, colour, camshaft specification and options is the single most valuable document in the file, and the 2023 chassis fraud case makes independent verification worth paying for. Put the car on a lift and inspect the tubular spaceframe for welded repairs, replaced tubes or evidence of straightening, since accident damage here is both common and costly. Check corrosion in the headlight buckets, wheel arches, boot floor, the areas behind the rear wheels, the rear roof pillars and the inner wheel aprons front and rear. Stand back and read panel alignment: bonnet, headlight, door and boot-lid fit reveal restoration quality and past damage. Confirm whether an NSL/Sonderteile camshaft and Rudge wheels are factory-fitted rather than retrofitted, as both carry real money. On roadsters establish where the car sits relative to the March 1961 disc-brake and March 1962 alloy-block changes. Buy the best car available rather than a restoration project.",
 "commonProblems": "Spaceframe damage and previous repair is the defining structural concern, and correcting it properly is specialist work. Corrosion concentrates in the headlight buckets, wheel arches, boot floor, rear roof pillars, the areas behind the rear wheels and the inner wheel aprons. The Bosch mechanical injection pump requires specialist setup and calibration and is not a system for general workshops; poor injection adjustment can wash oil with fuel, which is why oil condition and change discipline matter more here than on a carburetted contemporary. The dry-sump system adds its own service complexity. The coupe's high-pivot swing axle demands respect at the limit and is a handling characteristic rather than a fault. Drum brakes on coupes and early roadsters need careful adjustment to work as intended. Restoration costs run well into six figures, so a compromised car is rarely the cheaper route to ownership.",
 "valueTrajectory": "The 300 SL is a mature blue-chip asset rather than a growth story. Hagerty's analysis notes the market rating peaked in 2022 and fell in most months afterwards, with the recent boom retreating toward pre-pandemic levels, and identifies a widening gap between exceptional cars and merely good ones alongside softer prices further down the condition scale. A repeat sale illustrates the pattern: a 1960 roadster made $1.1 million in 2017 and $1,270,000 in 2023, an annualised return of about 2.3 percent, and sold roughly 15 percent below condition-appropriate value on both occasions. Fresh-to-market and exceptional cars behave differently - an untraded 1962 roadster achieved $1,792,500 in 2023, and a record non-alloy Gullwing brought $3,410,000 at Barrett-Jackson in January 2024. Classic.com benchmarks for both bodies were trending upward as of August 2026. Alloy cars have moved on a separate and steeper track. The consistent observation from specialists is that capital is preserved here rather than compounded.",
 "overallConfidence": "high",
 "sources": [
  {
   "ref": "gullwing-group-production",
   "title": "300 SL Production History",
   "url": "https://www.gullwinggroup.org/content.aspx?page_id=22&club_id=143201&module_id=546534",
   "publisher": "Gull Wing Group International",
   "sourceType": "club-forum",
   "reliability": "high",
   "notes": "Marque registry: 1,400 coupes 1954-1957 including 29 alloy, with year-by-year breakdown; 1,858 roadsters 1957-1963 with year-by-year breakdown."
  },
  {
   "ref": "hagerty-60th",
   "title": "Mercedes-Benz 300 SL 60th Anniversary",
   "url": "https://www.hagerty.com/media/car-profiles/mercedes-benz-300-sl/",
   "publisher": "Hagerty",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "W194 Le Mans and Carrera Panamericana wins; Hoffman's 1,000-car deposit; spaceframe sills forcing roof-hinged doors; direct injection as a production first; dry sump due to 50-degree tilt; 1,400 built with 29 alloy."
  },
  {
   "ref": "sothebys-guide",
   "title": "Everything You Need to Know about the Mercedes-Benz 300 SL Gullwing",
   "url": "https://www.sothebys.com/en/articles/everything-you-need-to-know-about-the-mercedes-benz-300-sl-gullwing-1",
   "publisher": "Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Hoffman's September 1953 Stuttgart meeting; February 1954 New York debut; W194 ten cars built; states 1,408 coupes; 29 alloy Leichtmetallausfuehrung cars saving ~209 lb; European price guidance including Rudge premium and alloy range."
  },
  {
   "ref": "rm-alloy-mo22",
   "title": "1955 Mercedes-Benz 300 SL Alloy Gullwing, Monterey 2022",
   "url": "https://rmsothebys.com/auctions/mo22/lots/r0144-1955-mercedesbenz-300-sl-alloy-gullwing/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "1,371 steel-bodied cars plus 29 alloy; Sonderteile engine rated 215 hp; sports suspension and Rudge knock-off wheels as the desirable options; sold $5,010,000."
  },
  {
   "ref": "gooding-amelia25",
   "title": "1955 Mercedes-Benz 300 SL Gullwing, Amelia Island Auctions 2025",
   "url": "https://www.goodingco.com/lot/1955-mercedes-benz-300-sl-gullwing-1e/",
   "publisher": "Gooding & Company",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "2,996 cc SOHC six with Bosch mechanical injection, 220 bhp at 5,800 rpm; four-wheel servo drums; original engine per factory build record; sold $1,501,000 against $1.3-1.5m estimate."
  },
  {
   "ref": "classic-gullwing",
   "title": "Mercedes-Benz 300SL Gullwing - W198 Market",
   "url": "https://www.classic.com/m/mercedes-benz/sl/w198/300-sl-gullwing/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of August 2026: benchmark ~$1,848,086, average ~$1,741,008, recent range $1,105,000-$2,975,000, trend upward."
  },
  {
   "ref": "classic-roadster",
   "title": "Mercedes-Benz 300 SL Roadster - W198 Market",
   "url": "https://www.classic.com/m/mercedes-benz/sl/w198/300-sl-roadster/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of August 2026: benchmark ~$1,372,285, average ~$1,388,344, range $657,500 (1958 car, July 2025) to $2,040,000 (August 2026), trend upward."
  },
  {
   "ref": "hagerty-market-behavior",
   "title": "What 300SL Gullwing Sales Tell Us About Broader Market Behavior",
   "url": "https://www.hagerty.com/media/market-trends/hagerty-insider/what-300sl-gullwing-sales-tell-us-about-broader-market-behavior/",
   "publisher": "Hagerty",
   "sourceType": "market-analysis",
   "reliability": "high",
   "notes": "Market rating peaked 2022 then declined; 1960 roadster repeat sale $1.1m (2017) to $1,270,000 (2023), ~2.3% annualised; 1962 roadster $1,792,500; record non-alloy gullwing $3,410,000 at Barrett-Jackson January 2024; 2023 chassis fraud sharpened provenance sensitivity."
  },
  {
   "ref": "hagerty-alloy",
   "title": "This rare alloy Gullwing could become the most expensive one ever sold",
   "url": "https://www.hagerty.com/media/buying-and-selling/auctions/this-rare-alloy-gullwing-could-become-the-most-expensive-one-ever-sold/",
   "publisher": "Hagerty",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "States 24 aluminium Gullwings built in 1955 (conflicting with the 29 figure elsewhere); 209 lb saving from alloy panels and Plexiglas; alloy cars worth nearly five times steel equivalents, ~$6.7m versus ~$1.4m."
  },
  {
   "ref": "supercarnostalgia-roadster",
   "title": "Mercedes-Benz W198 300 SL Roadster Guide",
   "url": "https://supercarnostalgia.com/blog/mercedes-benz-w198-300-sl-roadster",
   "publisher": "Supercar Nostalgia",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Roadster low-pivot single-joint axle with compensating spring; sill tubes halved and bracing added; Sonderteile camshaft standard at 240 bhp/202 lb-ft, 9.5:1; Dunlop discs March 1961 from chassis 2780; alloy block March 1962 from chassis 3049; 1,858 built May 1957-February 1963, all LHD; steel hardtop optional from late 1958."
  },
  {
   "ref": "wikipedia-300sl",
   "title": "Mercedes-Benz 300 SL",
   "url": "https://en.wikipedia.org/wiki/Mercedes-Benz_300_SL",
   "publisher": "Wikipedia",
   "sourceType": "reference",
   "reliability": "medium",
   "notes": "2,996 cc M198, Bosch mechanical direct injection, dry sump, engine tilted 50 degrees; 240 hp SAE gross at 6,100 rpm; up to 263 km/h on the tallest final drive; roadster pivot lowered 87 mm below differential centreline; 290 mm discs March 1961; Hoffman's initial 1,000-car order; production ended February 1963 after 1,858 roadsters."
  },
  {
   "ref": "silverstar-buyerinfo",
   "title": "Buyer Information 300 SL",
   "url": "https://www.silverstarrestorations.com/300sl.htm",
   "publisher": "Silver Star Restorations",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Restoration specialist buyer guidance: inspect tubular chassis on a lift for repairs; rust in headlight buckets, wheel arches, boot floor, behind rear wheels, rear roof pillars, inner wheel aprons; chassis prefixes 194010/198040/198043/198042 and M198 engine prefix; restoration runs well into six figures."
  }
 ],
 "claims": [
  {
   "section": "history",
   "claimText": "The production 300 SL descended from the W194 racing car, which took a one-two at the 1952 24 Hours of Le Mans and won the Carrera Panamericana; ten W194s were built.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "hagerty-60th",
    "sothebys-guide"
   ]
  },
  {
   "section": "history",
   "claimText": "US importer Max Hoffman initiated the road car, persuading Daimler-Benz management at a September 1953 Stuttgart meeting and committing to an order of 1,000 cars; the 300 SL was introduced in New York in February 1954.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "sothebys-guide",
    "hagerty-60th",
    "wikipedia-300sl"
   ]
  },
  {
   "section": "history",
   "claimText": "The tubular spaceframe's deep triangulated sill sections left no room for conventionally hinged doors, which is why the coupe's doors are hinged at the roof.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "hagerty-60th",
    "sothebys-guide"
   ]
  },
  {
   "section": "specs",
   "claimText": "The M198 engine is a 2,996 cc single-overhead-cam inline-six using Bosch mechanical direct fuel injection, the first such system fitted to a series-production petrol car.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-300sl",
    "sothebys-guide",
    "hagerty-60th",
    "gooding-amelia25"
   ]
  },
  {
   "section": "specs",
   "claimText": "The engine is canted approximately 50 degrees to the left to lower the bonnet line, and uses dry-sump lubrication as a consequence of that tilt.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-300sl",
    "hagerty-60th"
   ]
  },
  {
   "section": "specs",
   "claimText": "Quoted power is approximately 215 hp DIN, with SAE figures of 220 hp at 5,800 rpm and 240 hp at 6,100 rpm both appearing in reputable sources.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "rm-alloy-mo22",
    "gooding-amelia25",
    "wikipedia-300sl",
    "supercarnostalgia-roadster"
   ],
   "conflictNote": "Figures differ by measurement standard (DIN versus SAE gross) and by camshaft specification. RM Sotheby's cites 215 hp for a Sonderteile engine, Gooding's catalogue 220 bhp at 5,800 rpm, and Wikipedia and Supercar Nostalgia 240 hp at 6,100 rpm. No single figure is asserted as canonical."
  },
  {
   "section": "production",
   "claimText": "Coupe production totalled 1,400 cars between August 1954 and May 1957 according to the Gull Wing Group registry, but Sotheby's states 1,408, so no single W198 total is asserted.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "gullwing-group-production",
    "rm-alloy-mo22",
    "sothebys-guide"
   ],
   "conflictNote": "The Gull Wing Group registry records 1,400 coupes; RM Sotheby's catalogue material is consistent with that at 1,371 steel plus 29 alloy. Sotheby's editorial gives 1,408, a difference of eight cars most plausibly explained by the inclusion of prototypes or pre-production examples."
  },
  {
   "section": "production",
   "claimText": "Roadster production totalled 1,858 cars built between May 1957 and February 1963, all left-hand drive.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "gullwing-group-production",
    "wikipedia-300sl",
    "supercarnostalgia-roadster"
   ]
  },
  {
   "section": "production",
   "claimText": "Twenty-nine coupes were built with all-aluminium bodywork and Plexiglas glazing, saving roughly 209 lb over a steel car.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "gullwing-group-production",
    "rm-alloy-mo22",
    "sothebys-guide",
    "hagerty-alloy"
   ],
   "conflictNote": "The Gull Wing Group registry (26 in 1955 plus 3 in 1956), RM Sotheby's and Sotheby's all give 29. A Hagerty auction report instead states 24 were built in 1955. The 29 figure has the stronger corroboration."
  },
  {
   "section": "specs",
   "claimText": "The Roadster replaced the coupe's high-pivot single-joint swing axle with a low-pivot design, the pivot dropped roughly 87 mm below the differential centreline and paired with a compensating spring, producing markedly more neutral handling.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "supercarnostalgia-roadster",
    "wikipedia-300sl"
   ]
  },
  {
   "section": "specs",
   "claimText": "Roadster sill tubes were reduced in height with bracing added elsewhere to permit conventional doors with wind-down windows; Dunlop discs replaced drums all round in March 1961 and an aluminium engine block arrived in March 1962.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "supercarnostalgia-roadster",
    "wikipedia-300sl"
   ]
  },
  {
   "section": "problems",
   "claimText": "Key inspection points are welded or replaced spaceframe tubes indicating accident repair, and corrosion in the headlight buckets, wheel arches, boot floor, rear roof pillars, areas behind the rear wheels and inner wheel aprons; restoration costs run well into six figures.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "silverstar-buyerinfo"
   ]
  },
  {
   "section": "market",
   "claimText": "As of August 2026, classic.com showed a Gullwing benchmark of approximately $1,848,000 and average sale near $1,741,000 with recent results from about $1,105,000 to $2,975,000, and a Roadster benchmark near $1,372,000 with a range from about $657,500 to $2,040,000.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-gullwing",
    "classic-roadster"
   ]
  },
  {
   "section": "market",
   "claimText": "Alloy-bodied coupes occupy a separate market, valued at close to five times a steel equivalent, with an excellent example put around $6.7 million and an RM Sotheby's Monterey 2022 sale at $5,010,000.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "hagerty-alloy",
    "rm-alloy-mo22",
    "sothebys-guide"
   ]
  },
  {
   "section": "market",
   "claimText": "Returns on ordinary cars have been modest and the market has grown more sensitive to provenance: a 1960 roadster moved from $1.1 million in 2017 to $1,270,000 in 2023, roughly 2.3 percent annualised, while a record non-alloy Gullwing made $3,410,000 in January 2024.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "hagerty-market-behavior"
   ]
  }
 ]
};
