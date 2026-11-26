/**
 * Researched model draft - Pontiac Firebird, first generation (1967-1969 US model years).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedFirebird1stGen = {
 "slug": "pontiac/firebird-1st-gen",
 "make": "Pontiac",
 "model": "Firebird",
 "generation": "First generation",
 "generationCode": null,
 "trim": null,
 "yearStart": 1967,
 "yearEnd": 1969,
 "bodyStyles": [
  "2-door hardtop coupe (body style 22337), 1967-1969, including the 1969 Trans Am coupe",
  "2-door convertible (body style 22367), 1967-1969, including the eight 1969 Trans Am convertibles"
 ],
 "engines": [
  "230 cu in (3,769 cc) Pontiac overhead-cam inline six, one-barrel, 165 hp (1967 base); 250 cu in (4,097 cc) for 1968 at 175 hp",
  "230 cu in (3,769 cc) overhead-cam six in Sprint four-barrel tune, 215 hp, 10.5:1 compression (1967)",
  "326 cu in (5,342 cc) Pontiac V8, two-barrel 250 hp, or four-barrel H.O. 285 hp (1967 only)",
  "350 cu in (5,735 cc) Pontiac V8, two-barrel 265 hp or four-barrel H.O. 320 hp (1968); H.O. 325 hp for 1969",
  "400 cu in (6,555 cc) Pontiac V8, four-barrel Quadrajet, 325 hp at 4,800 rpm (1967); 330 hp at 5,300 rpm and 400 H.O. 335 hp at 5,000 rpm (1968)",
  "400 cu in (6,555 cc) Ram Air (1967-1968), Ram Air II (1968) and Ram Air III (1969 Trans Am standard, 335 hp at 5,000 rpm per most sources)",
  "400 cu in (6,555 cc) Ram Air IV, 1969, 345 hp at 5,400 rpm and 430 lb-ft at 3,700 rpm in the Trans Am"
 ],
 "productionTotal": null,
 "productionNotes": "productionTotal is null because the two production tables consulted do not agree for 1967 or 1969, and one published set of 1969 Trans Am engine counts does not add up to the usual total. The year-by-year figures come from the First Generation Firebird club site (firstgenfirebird.org), whose history pages tabulate production by body style and, for 1967, by engine, and from the HowStuffWorks history of the 1967-1969 car. For 1968 they agree exactly: 107,112 cars. For 1967 the club site gives 82,560 with 15,528 convertibles, and its engine rows add up to the same 82,560; HowStuffWorks gives the same 67,032 coupes but 15,526 convertibles, two cars fewer. For 1969 the two tables count different things and still do not meet. The club site lists 74,673 coupes and 11,641 convertibles with the Trans Am on separate lines (689 coupes, 8 convertibles); HowStuffWorks lists 76,059 coupes and 11,649 convertibles and says its 1969 figures include 697 Trans Am models. Adding the Trans Am convertibles to the club figure reconciles the convertibles exactly (11,641 plus 8 is 11,649), but adding the Trans Am coupes gives 75,362 coupes, and the gap to 76,059 is exactly 697. No source consulted explains it. The Trans Am itself is 697 cars, 689 coupes and 8 convertibles, in the club site, RM Sotheby's and Jalopnik. HowStuffWorks' Trans Am page words it as 697 coupes and eight convertibles, although its own production line gives 697 Trans Ams in total. The one residue is Old Cars Weekly: its engine counts, 634 Ram Air III cars including the convertibles plus 55 Ram Air IV coupes, sum to 689 rather than 697; the page does not state a total, so the 689 is this page's addition of its figures. The Ram Air IV count is 55 in Old Cars Weekly, Hagerty and the HowStuffWorks text; a photo caption on the same HowStuffWorks page says 63. No Pontiac Historic Services total, factory curb weight or EPA or NHTSA record was fetched for this page, and no period road test of a production first-generation car was retrieved directly: the only period acceleration figures here are Motor Trend's, as reported by Old Cars Weekly, and they are for a prototype.",
 "notableTrims": [
  {
   "name": "1969 Trans Am (WS4), Ram Air IV",
   "note": "Fifty-five coupes, no convertibles, at $390 on top of the Trans Am package; 46 had the four-speed per Hagerty, and Old Cars Weekly counts nine automatics."
  },
  {
   "name": "1969 Trans Am (WS4), Ram Air III",
   "note": "The standard Trans Am engine: 634 cars per Old Cars Weekly, including every convertible, 114 of them with a manual gearbox. All Cameo White with blue stripes, apart from one silver prototype."
  },
  {
   "name": "1969 Trans Am convertible",
   "note": "Eight built, every source agrees on that much. Four of them had a manual gearbox per Old Cars Weekly."
  },
  {
   "name": "1967 Firebird 400 Ram Air",
   "note": "Sixty-five cars out of 82,560 in the club site's 1967 engine table, with a base cost of $3,287.09 as a coupe and $3,524.09 as a convertible."
  },
  {
   "name": "Firebird Sprint (overhead-cam six)",
   "note": "A four-barrel overhead-cam six at 215 hp. The club site's 1967 table has 7,210 Sprints, against 10,454 base sixes."
  },
  {
   "name": "Firebird 400 and 400 H.O., 1967-1969",
   "note": "The non-Ram Air 400 accounts for 18,632 cars in the club site's 1967 table. The 1968 400 H.O. was rated 335 hp at 5,000 rpm."
  }
 ],
 "specs": {
  "layout": "Front-engine, rear-wheel drive",
  "chassis": "GM F-body unit body shared with the Chevrolet Camaro, with Pontiac engines (the club site describes Camaro F-body design with GTO A-body drivetrain)",
  "engine": "Overhead-cam inline six (230 cu in, then 250 cu in) or Pontiac V8 (326, 350 and 400 cu in)",
  "power": "165 hp (1967 base six) to 345 hp (1969 Ram Air IV)",
  "torque": "430 lb-ft at 3,700 rpm for the 1969 Ram Air IV per Old Cars Weekly; torque for other engines not documented in the sources fetched",
  "transmission": "Manual gearboxes or Turbo Hydra-Matic automatic; the 1969 Ram Air IV was offered with a four-speed manual or Turbo Hydramatic",
  "weight": "Not documented in the sources fetched; the 1969 restyle is described as heavier without a figure",
  "acceleration": "Motor Trend (October 1969, as reported by Old Cars Weekly) tested a Trans Am prototype at 0-60 mph in 8.83 seconds, quarter mile 16.37 seconds at 93.5 mph; no production-car test retrieved",
  "us_price_1967": "$2,666 coupe and $2,903 convertible (base overhead-cam six)",
  "ram_air_price_1967": "$3,287.09 coupe, $3,524.09 convertible (club site, single source)",
  "trans_am_option_price": "About $725 (Old Cars Weekly, RM Sotheby's, HowStuffWorks); $724.60 (Jalopnik); Ram Air IV $390 extra",
  "production_1967": "82,560 (club site) or 82,558 (HowStuffWorks); disputed by two convertibles",
  "production_1968": "107,112 (90,152 coupes, 16,960 convertibles); sources agree",
  "production_1969": "Club site and HowStuffWorks tables do not reconcile; see production notes",
  "trans_am_1969": "697: 689 coupes and 8 convertibles (club site, RM Sotheby's, Jalopnik); Old Cars Weekly's engine counts sum to 689",
  "restyle_1969": "2.3 in longer and 1.3 in wider than the 1968 car per HowStuffWorks"
 },
 "summary": "The first-generation Firebird is Pontiac's version of GM's F-body, the Camaro's platform carrying Pontiac engines, sold in the US for the 1967, 1968 and 1969 model years as a two-door hardtop coupe and a convertible. It went on sale in February 1967 at $2,666 for the base coupe with an overhead-cam six, and the range ran up through the Sprint six, the 326 and later 350 V8s, and the Firebird 400 with optional Ram Air induction. The 1967 engine table on the First Generation Firebird club site has 65 Ram Air cars out of 82,560. The 1969 Trans Am, a Cameo White package shown at the Chicago Auto Show and priced at about $725, is the one car of the generation that classic.com values as its own market. Three sources agree on 697 cars, 689 coupes and 8 convertibles, though the engine counts published by Old Cars Weekly add up to 689. As of November 2026 classic.com's benchmark for a first-generation Trans Am is $149,914, against a classic.com average of $39,967 for the coupes it tracks. The 1970-1981 Trans Am has its own page.",
 "history": "## Why the Firebird exists\n\nThe Firebird is the car Pontiac built after it was told it could not build the one it wanted. Division chief John DeLorean had pushed for a two-seat sports car called Banshee, described by HowStuffWorks as a low-cost sister to the Corvette. GM management vetoed it, and Pontiac, which had been aware of Chevrolet's Camaro work all along, asked to be cut in. The result was a Pontiac version of the four-seat Camaro: the club site describes it as the Camaro's F-body design with the GTO's A-body drivetrain, and Pontiac engineer Bill Collins later said the 1967 car was \"just kind of inherited from Chevrolet.\" The Camaro went on sale some five months ahead of it. Pontiac introduced the Firebird on February 23, 1967.\n\n## 1967: five cars keyed to engines\n\nPontiac sold the Firebird as five offerings keyed to engines. The base car had the 230 cu in overhead-cam six at 165 hp; the Sprint took the same six to 215 hp with a four-barrel carburetor and 10.5:1 compression. The 326 V8 came as a 250 hp two-barrel or a 285 hp H.O., and the Firebird 400 carried a four-barrel Quadrajet 400 at 325 hp at 4,800 rpm, with Ram Air available. Prices started at $2,666 for the coupe and $2,903 for the convertible. The club site's engine table makes the Ram Air the rarest of the year by a wide margin: 65 cars, at a base cost of $3,287.09 as a coupe.\n\n## 1968: bigger engines, better springs\n\nThe overhead-cam six grew to 250 cu in and 175 hp, the 326 became a 350 at 265 hp, and the H.O. became a 350 at 320 hp. The 400 was rated 330 hp at 5,300 rpm and the 400 H.O. 335 hp at 5,000 rpm. The Ram Air II followed the first Ram Air. Performance versions gained multiple-leaf rear springs with the shock absorbers staggered fore and aft of the axle. Production reached 107,112, the high point of the generation.\n\n## 1969: the restyle and the Trans Am\n\nThe 1969 car was restyled below the beltline, which HowStuffWorks says added 2.3 inches in length and 1.3 inches in width. The 350 H.O. went to 325 hp, and the Ram Air II gave way to the 345 hp Ram Air IV. The Trans Am was the WS4 option package on the Firebird coupe or convertible: a rear deck lid airfoil, functional hood scoops, front fender air extractors and heavy-duty running gear, in Cameo White with blue stripes on every car except one silver prototype. The standard engine was the Ram Air III; the Ram Air IV cost $390 more. The name came from the SCCA's Trans American series, for which Pontiac agreed to pay the organization $5 for every Trans Am built, although the car never raced in that series. The car was shown at the Chicago Auto Show, which RM Sotheby's dates to February; HowStuffWorks and the club site put its launch in March 1969, and Jalopnik dates dealer sales to April 1969.\n\n## What the Trans Am count rests on\n\nThe Trans Am count is 697 cars, 689 coupes and 8 convertibles, in the club site, RM Sotheby's and Jalopnik, and Hagerty says fewer than 700 were built. The one published set of engine counts, from Old Cars Weekly, adds to 689, eight short; that sum is this page's arithmetic, not a total any source states, and the gap is not explained. Within those cars, the Ram Air IV is 55 coupes, 46 of them four-speed per Hagerty. The arithmetic for the generation as a whole is set out in the production notes. The 1970-1981 Trans Am has its own page.",
 "marketNotes": "As of November 2026 classic.com's market benchmark for the first-generation Trans Am, a market made up only of 1969 cars, is $149,914 on its Trans Am market page. For the rest of the range, classic.com, as of November 2026, tracks 176 coupe sales at an average of $39,967, from a low of $11,250 to a top sale of $225,000, and 170 convertible sales at an average of $42,598, from $15,250 to $165,000. Its pages do not say which engines or trims sit at either end, or whether Trans Ams are counted in the coupe and convertible markets. The club site's buying guide, citing classic.com in mid-2026, puts the average first-generation sale at about $56,000, solid driver-quality cars around $35,000 to $45,000, and rough projects under $10,000. The one auction lot fetched is RM Sotheby's Fort Lauderdale 2014 sale, where a restored 1969 Trans Am with its original Ram Air III engine, original sheetmetal, original window sticker and Pontiac Historic Services documentation sold for $140,250; the lot page does not state the month or whether that figure includes buyer's premium. No individual Ram Air IV sale price could be fetched with its figure on the page.",
 "whatToLookFor": "The first question on any first-generation car is which car it started as. The club site's buying guide describes the body tag and VIN as the record of paint, trim and model, and says the body tag, engine block codes and the Pontiac Historic Services invoice ought to tell the same story; PHS supplies the factory invoice or billing history for 1961-1986 Pontiac VINs. GM also stamped partial VINs in concealed locations, which is how a re-bodied or re-numbered car is separated from an original. The same guide calls genuine 1969 Trans Ams among the most cloned Pontiacs in existence. The RM Sotheby's Trans Am that sold in 2014 came with its original window sticker and PHS paperwork, and the lot description states that the Ram Air III engine is original to the car. Within the Trans Am, the engine divides the production: 634 Ram Air III cars against 55 Ram Air IV coupes per Old Cars Weekly, and among the Ram Air III cars only 114 had a manual gearbox. For the rest of the range the same logic runs on a smaller scale: the 1967 Ram Air 400 is 65 cars in the club site's table, and the guide lists worn or swapped engines, axles and accessories among the things that separate one car from another. On convertibles, the guide singles out the area where the top is bolted down. The 1968 performance cars carry multiple-leaf rear springs with staggered shock absorbers.",
 "commonProblems": "These are 1960s unit-body cars, and rust is the dominant problem. The First Generation Firebird club site's buying guide lists the places it turns up: the floor pans near the driver's feet and the shock towers, the trunk drop-offs behind the wheelhouses, the trunk reinforcement rails at their front edge and where they meet the inner valance, and the lips of the rear wheel wells, where filler hides rot. Replaced quarter panels are common, and poor installations show from the trunk side. On convertibles the area where the top is bolted down is a known rust and repair point. The same guide adds dash heater controls, cowls and convertible wells to the items it says to weigh. The guide also lists worn or swapped engines, axles and accessories, and the clone problem on the Trans Am, where the body tag, the engine block codes and the Pontiac Historic Services invoice are the record that separates an original car from a converted one. The 1968 performance cars used multiple-leaf rear springs with the shock absorbers staggered fore and aft of the axle. Restoration is where the money goes: the club's guide puts professional restoration labor at $85 to $150 or more per hour in 2026, and a driver-quality restoration at $20,000 to $50,000 in total. No NHTSA recall or complaint data was consulted for this page.",
 "valueTrajectory": "The documented price points are few and far apart. New, the base 1967 coupe listed at $2,666 and a 1967 Ram Air 400 coupe at $3,287.09; the 1969 Trans Am package cost about $725 on top of a Firebird. In 2014, RM Sotheby's sold a restored, documented Ram Air III Trans Am for $140,250 at Fort Lauderdale. As of November 2026 classic.com's Trans Am benchmark is $149,914, and its coupe and convertible averages are $39,967 and $42,598. The Trans Am, on a production count under 700, is benchmarked by classic.com apart from the rest of the range, whose recorded coupe sales run from $11,250 to $225,000 and whose recorded convertible sales run from $15,250 to $165,000. classic.com's coupe top sale of $225,000 sits above its Trans Am benchmark, and the page does not identify the car or say whether it was a Trans Am. No dated price series for this generation was fetched, so this page states no rate of appreciation.",
 "overallConfidence": "medium",
 "sources": [
  {
   "ref": "fgf-1967",
   "title": "1967 Pontiac Firebird History",
   "url": "https://firstgenfirebird.org/1967-info/1967-pontiac-firebird-history/",
   "publisher": "First Generation Firebird (firstgenfirebird.org)",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Introduction February 23, 1967; base prices $2,666 coupe and $2,903 convertible; option prices (Sprint $105.60, 400 $358.09); Ram Air base cost $3,287.09 coupe and $3,524.09 convertible; 1967 engine ratings 165, 215, 250, 285 and 325 hp; production 82,560 total, 67,032 coupes, 15,528 convertibles, and by engine (OHC 6 10,454, Sprint 7,210, 326 40,121, 326 H.O. 6,078, 400 18,632, 400 Ram Air 65); F-body design with A-body drivetrain; Banshee."
  },
  {
   "ref": "fgf-1968",
   "title": "1968 Firebird information",
   "url": "https://firstgenfirebird.org/1968-info/",
   "publisher": "First Generation Firebird (firstgenfirebird.org)",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "1968 production 90,152 coupes, 16,960 convertibles, 107,112 total; 1968 ratings: OHC six 250 cu in 175 hp, 350 two-barrel 265 hp, 350 H.O. 320 hp, 400 330 hp at 5,300 rpm, 400 H.O. 335 hp at 5,000 rpm, Ram Air 335 hp at 5,300 rpm; coupe from $2,666."
  },
  {
   "ref": "fgf-1969",
   "title": "1969 Pontiac Firebird History",
   "url": "https://firstgenfirebird.org/?p=2131",
   "publisher": "First Generation Firebird (firstgenfirebird.org)",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "1969 production table: coupes 74,673, convertibles 11,641, Trans Am coupes 689, Trans Am convertibles 8, listed separately; Trans Am introduced in March as the WS4 Cameo White package; 350 H.O. 325 hp; Ram Air IV 345 hp; Ram Air IV with four-speed or Turbo Hydramatic; restyled cars longer, wider and heavier."
  },
  {
   "ref": "fgf-buying",
   "title": "Buying a First Generation Firebird",
   "url": "https://firstgenfirebird.org/faqs/buying-a-first-generation-firebird",
   "publisher": "First Generation Firebird (firstgenfirebird.org)",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Club buying guide: rust areas (floor pans, shock towers, trunk drop-offs, trunk reinforcement rails, rear wheel lips, convertible top mounts, replaced quarters); body tag, VIN, block codes and PHS invoice; hidden partial VINs; 1969 Trans Am cloning; average sale about $56,000 per classic.com mid-2026; driver cars $35,000 to $45,000; projects under $10,000; restoration labor $85 to $150+ per hour; driver restoration $20,000 to $50,000."
  },
  {
   "ref": "hsw-overview",
   "title": "1967, 1968, 1969 Pontiac Firebird",
   "url": "https://auto.howstuffworks.com/1967-1969-pontiac-firebird.htm",
   "publisher": "HowStuffWorks",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "DeLorean's vetoed Banshee two-seater; Bill Collins quote; February 1967 debut five months after Camaro; five engine-keyed offerings; $2,666 base hardtop; 165 hp six, 325 hp 400; 1968 350 H.O. 35 hp more; Ram Air II 335 hp, 25 below GTO; 1969 restyle 2.3 in longer and 1.3 in wider; production 1967 67,032 and 15,526, 1968 90,152 and 16,960, 1969 76,059 and 11,649 including 697 Trans Ams."
  },
  {
   "ref": "hsw-ta69",
   "title": "1969 Pontiac Firebird Trans Am",
   "url": "https://musclecars.howstuffworks.com/classic-muscle-cars/1969-pontiac-firebird-trans-am.htm",
   "publisher": "HowStuffWorks",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Trans Am ordered on 697 coupes and eight convertibles (text); Ram Air IV on 55 coupes (text) but one of 63 in a photo caption; $725 option; Ram Air III 335 hp, Ram Air IV 345 hp; launched March 1969; name from the Trans American series, car never raced in it."
  },
  {
   "ref": "hsw-400-68",
   "title": "1968 Pontiac Firebird 400",
   "url": "https://musclecars.howstuffworks.com/classic-muscle-cars/1968-pontiac-firebird-400.htm",
   "publisher": "HowStuffWorks",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "1968 performance Firebirds gained multiple-leaf rear springs with shock absorbers staggered fore and aft of the axle; 1968 400 at 330 hp. Used only for the spring change."
  },
  {
   "ref": "rm-fl14",
   "title": "1969 Pontiac Firebird Trans Am Ram Air III (Lot r0291, Fort Lauderdale 2014)",
   "url": "https://rmsothebys.com/auctions/fl14/lots/r0291-1969-pontiac-firebird-trans-am-ram-air-iii",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Fort Lauderdale 2014 sale: restored Trans Am with original Ram Air III engine, original sheetmetal, window sticker and PHS documentation sold for $140,250 (premium inclusion and month not stated); states 689 coupes and eight convertibles; introduced in February at the Chicago Auto Show as a $725 option; describes the engine as 350 hp."
  },
  {
   "ref": "jalopnik-scca",
   "title": "Why Pontiac Paid The SCCA $5 For Every Trans Am It Built",
   "url": "https://www.jalopnik.com/2304510/why-pontiac-paid-scca-five-dollars-trans-am/",
   "publisher": "Jalopnik",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Pontiac agreed to pay the SCCA $5 per Trans Am; 697 first-year cars, 689 hardtops and 8 convertibles; on sale April 1969; option $724.60; Ram Air III 330 hp, optional engine 345 hp."
  },
  {
   "ref": "hagerty-raiv",
   "title": "Is this rare Ram Air IV four-speed the finest of first-gen Firebirds?",
   "url": "https://hagerty.com/media/?p=280095",
   "publisher": "Hagerty",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Hagerty editorial: fewer than 700 1969 Trans Ams; 55 with Ram Air IV, 46 of them four-speed; Ram Air III 335 hp; Ram Air IV 345 hp in the Trans Am against 370 hp in the GTO. Its Mecum estimate is undated and is not used."
  },
  {
   "ref": "ocw-ta69",
   "title": "Car of the Week: 1969 Pontiac Trans Am",
   "url": "https://www.oldcarsweekly.com/features/car-of-the-week-1969-pontiac-trans-am",
   "publisher": "Old Cars Weekly",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "WS4 option about $725; Ram Air III in 634 cars, 114 manual including four convertibles; 55 Ram Air IV coupes at $390, nine automatic; Ram Air III 335 hp at 5,000 rpm; Ram Air IV 345 hp at 5,400 rpm and 430 lb-ft at 3,700 rpm; Chicago Auto Show debut; all Cameo White with blue stripes but one silver prototype; Motor Trend October 1969 prototype test 8.83 seconds 0-60 and 16.37 seconds at 93.5 mph."
  },
  {
   "ref": "classic-ta",
   "title": "Pontiac Trans Am - 1st Gen Market",
   "url": "https://www.classic.com/m/pontiac/firebird/1st-gen/trans-am/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of November 2026: CMB $149,914 for the first-generation Trans Am market. Sale range shown on the page was not captured verbatim and is not used."
  },
  {
   "ref": "classic-1stgen",
   "title": "Pontiac Firebird - 1st Gen Market (page 2)",
   "url": "https://www.classic.com/m/pontiac/firebird/1st-gen/?page=2",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of November 2026: first-generation run 1967 to 1969; Coke bottle styling shared with the Camaro; no overall first-generation benchmark. It also shows $155,559 for the related 1969 Trans Am sub-market; that figure is not used, the Trans Am page's own benchmark is."
  },
  {
   "ref": "classic-coupe",
   "title": "Pontiac Firebird Coupe - 1st Gen Market",
   "url": "https://www.classic.com/m/pontiac/firebird/1st-gen/coupe/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of November 2026: average $39,967 across 176 sales; lowest sale $11,250; top sale $225,000 (cars not identified); coupe the most common Firebird."
  },
  {
   "ref": "classic-convertible",
   "title": "Pontiac Firebird Convertible - 1st Gen Market",
   "url": "https://www.classic.com/m/pontiac/firebird/1st-gen/convertible/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of November 2026: average $42,598 across 170 sales; lowest sale $15,250; top sale $165,000 (cars not identified); F-body sibling of the Camaro; model years 1967 to 1969."
  }
 ],
 "claims": [
  {
   "section": "history",
   "claimText": "Pontiac introduced the Firebird on February 23, 1967, to compete with the Chevrolet Camaro, which had gone on sale about five months earlier.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["fgf-1967", "hsw-overview"],
   "evidence": [
    { "ref": "fgf-1967", "quote": "Pontiac introduced the Firebird February 23, 1967, to compete with the Chevrolet Camaro" },
    { "ref": "hsw-overview", "quote": "which went on sale some five months before Firebird's February 1967 debut." }
   ]
  },
  {
   "section": "history",
   "claimText": "John DeLorean wanted a two-seat sports car called Banshee; after GM management vetoed it, Pontiac built its version of the Camaro, which engineer Bill Collins later said was just kind of inherited from Chevrolet.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["hsw-overview", "fgf-1967"],
   "evidence": [
    { "ref": "hsw-overview", "quote": "it would have been a two-seat sports car called Banshee, a low-cost sister to the Chevy Corvette." },
    { "ref": "hsw-overview", "quote": "Pontiac was aware of the effort all along, and asked to be cut in once management vetoed DeLorean's two-seater." },
    { "ref": "hsw-overview", "quote": "Pontiac engineer Bill Collins later stated that the '67 Firebird was \"just kind of inherited from Chevrolet.\"" },
    { "ref": "fgf-1967", "quote": "After GM forced Pontiac to drop DeLorean's Banshee concept car." }
   ]
  },
  {
   "section": "summary",
   "claimText": "The Firebird was an F-body car, a sibling of the Camaro, built from the Camaro's F-body design with the GTO's A-body drivetrain, and classic.com dates the first generation to 1967 through 1969.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["fgf-1967", "classic-convertible", "classic-1stgen"],
   "evidence": [
    { "ref": "fgf-1967", "quote": "The Firebird was designed from the Camaro's F-Body design and the GTO's A-Body drivetrain" },
    { "ref": "classic-convertible", "quote": "The Pontiac Firebird was built as an F-body car and was a sibling of GM's Camaro sports coupe." },
    { "ref": "classic-1stgen", "quote": "Pontiac Firebird - 1st Gen (1967 to 1969)" }
   ]
  },
  {
   "section": "specs",
   "claimText": "For 1967 Firebird prices started at $2,666 for the coupe and $2,903 for the convertible with the base overhead-cam six.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["fgf-1967", "hsw-overview", "fgf-1968"],
   "evidence": [
    { "ref": "fgf-1967", "quote": "Prices started at $2,666 for a coupe to $2,903 for a convertible" },
    { "ref": "hsw-overview", "quote": "With prices starting about $200 upstream of six-cylinder Camaros -- $2,666 for the base hardtop" },
    { "ref": "fgf-1968", "quote": "From $2,666 (coupe)." }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 1967 Firebird came as five offerings keyed to engines: the 230 cu in overhead-cam six at 165 hp, the Sprint six at 215 hp with 10.5:1 compression, the 326 V8 at 250 hp, the 326 H.O. at 285 hp, and the 400 at 325 hp at 4,800 rpm with Ram Air available.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["fgf-1967", "hsw-overview"],
   "evidence": [
    { "ref": "fgf-1967", "quote": "230 cubic inch six-cylinder one-barrel overhead-cam with 165 horsepower." },
    { "ref": "fgf-1967", "quote": "with 215 horsepower and 10.5:1 compression." },
    { "ref": "fgf-1967", "quote": "V-8 326 cubic inch two-barrel with 250 horsepower." },
    { "ref": "fgf-1967", "quote": "V-8 326 H.O. (High Output) four-barrel with 285 horsepower." },
    { "ref": "fgf-1967", "quote": "High performance V-8 400 four-barrel Quadrajet with 325 horsepower at 4800 rpm." },
    { "ref": "hsw-overview", "quote": "Firebird arrived with five separate offerings keyed to engines." },
    { "ref": "hsw-overview", "quote": "Topping the line was the Firebird 400 with 325 bhp and available Ram Air induction." }
   ]
  },
  {
   "section": "production",
   "claimText": "The club site gives 1967 production as 82,560, of which 67,032 coupes and 15,528 convertibles; HowStuffWorks gives the same 67,032 coupes but 15,526 convertibles, which totals 82,558.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["fgf-1967", "hsw-overview"],
   "computed": ["82,558"],
   "conflictNote": "firstgenfirebird.org states 82,560 in total with 15,528 convertibles. HowStuffWorks states 15,526 convertibles alongside the same 67,032 coupes, a total of 82,558 by addition. The two-car difference is not explained or resolved by any source consulted here.",
   "evidence": [
    { "ref": "fgf-1967", "quote": "Total Produced: 82,560" },
    { "ref": "fgf-1967", "quote": "2-dr Coupe (22337) 67,032" },
    { "ref": "fgf-1967", "quote": "2-dr Convertible (22367) 15,528" },
    { "ref": "hsw-overview", "quote": "Production: 1967 htp cpe 67,032; cvt 15,526;" }
   ]
  },
  {
   "section": "production",
   "claimText": "The club site's 1967 engine table lists 10,454 base sixes, 7,210 Sprints, 40,121 326 V8s, 6,078 326 H.O. cars, 18,632 400s and 65 400 Ram Air cars, which add up to its total of 82,560; this breakdown is single-source.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["fgf-1967"],
   "evidence": [
    { "ref": "fgf-1967", "quote": "OHC 6 10,454" },
    { "ref": "fgf-1967", "quote": "Sprint 7,210" },
    { "ref": "fgf-1967", "quote": "326 V-8 40,121" },
    { "ref": "fgf-1967", "quote": "326 H.O. V-8 6,078" },
    { "ref": "fgf-1967", "quote": "400 V-8 18,632" },
    { "ref": "fgf-1967", "quote": "400 Ram Air 65" },
    { "ref": "fgf-1967", "quote": "Total Produced: 82,560" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The club site puts the 1967 Firebird 400 Ram Air's base cost at $3,287.09 for a coupe and $3,524.09 for a convertible; this is a single-source figure.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["fgf-1967"],
   "evidence": [
    { "ref": "fgf-1967", "quote": "Final base cost, $3,287.09 for a coupe or $3,524.09 for a convertible." }
   ]
  },
  {
   "section": "production",
   "claimText": "1968 production was 107,112: 90,152 coupes and 16,960 convertibles, and the two tables consulted agree.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["fgf-1968", "hsw-overview"],
   "evidence": [
    { "ref": "fgf-1968", "quote": "2-dr Coupe | 22337 | 90,152" },
    { "ref": "fgf-1968", "quote": "2-dr Convertible | 22367 | 16,960" },
    { "ref": "fgf-1968", "quote": "Total 107,112" },
    { "ref": "hsw-overview", "quote": "1968 htp cpe 90,152; cvt 16,960;" }
   ]
  },
  {
   "section": "specs",
   "claimText": "For 1968 the overhead-cam six grew to 250 cu in and 175 hp, the 326 became a 350 at 265 hp, the H.O. became a 350 at 320 hp, the 400 was rated 330 hp at 5,300 rpm and the 400 H.O. 335 hp at 5,000 rpm.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["fgf-1968", "hsw-overview"],
   "evidence": [
    { "ref": "fgf-1968", "quote": "the overhead-cam six grew from 230 to 250 cu in, 175 hp" },
    { "ref": "fgf-1968", "quote": "the 326 became a 350 cu in two-barrel V-8, 265 hp." },
    { "ref": "fgf-1968", "quote": "350 four-barrel, 320 hp, dual exhaust" },
    { "ref": "fgf-1968", "quote": "330 hp @ 5300, heavy-duty everything." },
    { "ref": "fgf-1968", "quote": "400 four-barrel, 335 hp @ 5000." }
   ]
  },
  {
   "section": "history",
   "claimText": "Performance versions of the 1968 Firebird gained multiple-leaf rear springs with the shock absorbers staggered fore and aft of the axle; this is single-source.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["hsw-400-68"],
   "evidence": [
    { "ref": "hsw-400-68", "quote": "new multiple-leaf rear springs with shock absorbers staggered fore and aft of the axle" }
   ]
  },
  {
   "section": "history",
   "claimText": "The 1969 restyle added 2.3 inches in length and 1.3 inches in width and made the car heavier; the 350 H.O. went to 325 hp and the Ram Air II gave way to the 345 hp Ram Air IV.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["hsw-overview", "fgf-1969"],
   "evidence": [
    { "ref": "hsw-overview", "quote": "Unfortunately, the restyle also added somewhat to weight, as well as 2.3 inches in length and 1.3 inches in width." },
    { "ref": "hsw-overview", "quote": "Engines were basically as before except that the Ram Air II gave way to a 345-bhp 400 Ram Air IV option." },
    { "ref": "fgf-1969", "quote": "The 350 HO was upgraded to 325 horsepower." },
    { "ref": "fgf-1969", "quote": "A 400 Ram Air IV with 345 horsepower was introduced." }
   ]
  },
  {
   "section": "production",
   "claimText": "The 1969 production tables do not reconcile: the club site lists 74,673 coupes and 11,641 convertibles with Trans Ams separate (689 coupes, 8 convertibles), while HowStuffWorks lists 76,059 coupes and 11,649 convertibles including 697 Trans Ams; the convertibles match once the Trans Am convertibles are added, but the club's coupes plus Trans Am coupes come to 75,362.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["fgf-1969", "hsw-overview"],
   "computed": ["75,362"],
   "conflictNote": "firstgenfirebird.org lists 74,673 coupes, 11,641 convertibles, 689 Trans Am coupes and 8 Trans Am convertibles. HowStuffWorks lists 76,059 coupes and 11,649 convertibles and says its 1969 figures include 697 Trans Ams. Convertibles reconcile (11,641 plus 8 is 11,649); coupes do not (74,673 plus 689 is 75,362, which is 697 short of 76,059). No source consulted explains the gap, and it is unresolved.",
   "evidence": [
    { "ref": "fgf-1969", "quote": "2-dr Coupe | (22337) | 74,673" },
    { "ref": "fgf-1969", "quote": "2-dr Convertible | (22367) | 11,641" },
    { "ref": "fgf-1969", "quote": "Trans AM Coupe | (22337) | 689" },
    { "ref": "fgf-1969", "quote": "Trans AM Convertible | (22367) | 8" },
    { "ref": "hsw-overview", "quote": "1969 htp cpe 76,059; cvt 11,649" },
    { "ref": "hsw-overview", "quote": "(1969 figures include 697 Trans Am models)" }
   ]
  },
  {
   "section": "production",
   "claimText": "Pontiac built 697 Trans Ams for 1969, 689 coupes and 8 convertibles, per the club site, RM Sotheby's and Jalopnik, and Hagerty says fewer than 700; HowStuffWorks' Trans Am page words it as 697 coupes and eight convertibles, while its own production line gives 697 Trans Ams in total.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["fgf-1969", "rm-fl14", "jalopnik-scca", "hagerty-raiv", "hsw-ta69", "hsw-overview"],
   "evidence": [
    { "ref": "fgf-1969", "quote": "Trans AM Coupe | (22337) | 689" },
    { "ref": "fgf-1969", "quote": "Trans AM Convertible | (22367) | 8" },
    { "ref": "rm-fl14", "quote": "Only 689 coupes and eight convertibles were produced" },
    { "ref": "jalopnik-scca", "quote": "had only produced 697 Trans Ams during the model's first partial year on the market" },
    { "ref": "hagerty-raiv", "quote": "Fewer than 700 1969 Trans Ams were built" },
    { "ref": "hsw-ta69", "quote": "ordered on just 697 Firebird coupes and eight convertibles" },
    { "ref": "hsw-overview", "quote": "(1969 figures include 697 Trans Am models)" }
   ]
  },
  {
   "section": "production",
   "claimText": "Old Cars Weekly's 1969 Trans Am engine counts, 634 Ram Air III cars including the convertibles plus 55 Ram Air IV coupes, sum to 689 rather than the 697 total the other sources give; the 689 is this page's sum of that page's figures, not a total Old Cars Weekly states.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["ocw-ta69", "jalopnik-scca", "rm-fl14"],
   "computed": ["689"],
   "conflictNote": "Old Cars Weekly says the Ram Air III was used in 634 Trans Ams, convertibles included, and that 55 other cars had the Ram Air IV, which adds to 689. Jalopnik gives 697 in total and RM Sotheby's 689 coupes plus eight convertibles. Old Cars Weekly states no total, and the eight-car gap is not explained or resolved by any source consulted here.",
   "evidence": [
    { "ref": "ocw-ta69", "quote": "The base 400 HO engine (which Pontiac engineers called the Ram Air III V-8) was used in 634 of the Trans Ams." },
    { "ref": "ocw-ta69", "quote": "Fifty-five other cars (all coupes) came with an optional Ram Air IV engine, which cost $390 extra." },
    { "ref": "ocw-ta69", "quote": "Of the 634 cars, 114 had a manual gear box (including four of the convertibles)." },
    { "ref": "jalopnik-scca", "quote": "had only produced 697 Trans Ams during the model's first partial year on the market" },
    { "ref": "rm-fl14", "quote": "Only 689 coupes and eight convertibles were produced" }
   ]
  },
  {
   "section": "production",
   "claimText": "Old Cars Weekly, Hagerty and the HowStuffWorks text put 1969 Ram Air IV Trans Am production at 55 coupes, of which Hagerty says 46 had the four-speed and Old Cars Weekly says nine had Turbo Hydra-Matic, though a photo caption on the same HowStuffWorks page says 63.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["ocw-ta69", "hagerty-raiv", "hsw-ta69"],
   "evidence": [
    { "ref": "ocw-ta69", "quote": "Fifty-five other cars (all coupes) came with an optional Ram Air IV engine, which cost $390 extra." },
    { "ref": "ocw-ta69", "quote": "Of these, nine cars had Turbo Hydra-Matic transmissions" },
    { "ref": "hagerty-raiv", "quote": "Just fifty-five Trans Ams were produced with Ram Air IV power in 1969" },
    { "ref": "hagerty-raiv", "quote": "forty-six of which were equipped with a four-speed manual" },
    { "ref": "hsw-ta69", "quote": "Ordered on a mere 55 Trans Am coupes" },
    { "ref": "hsw-ta69", "quote": "one of 63 Trans Ams fitted with the 345-bhp Ram Air IV upgrade" }
   ]
  },
  {
   "section": "production",
   "claimText": "Old Cars Weekly reports that 114 of the 634 Ram Air III Trans Ams had a manual gearbox, including four of the convertibles; no second source gives the split.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["ocw-ta69"],
   "evidence": [
    { "ref": "ocw-ta69", "quote": "Of the 634 cars, 114 had a manual gear box (including four of the convertibles)." }
   ]
  },
  {
   "section": "specs",
   "claimText": "Most sources rate the 1969 Trans Am's standard Ram Air III at 335 hp, at 5,000 rpm per Old Cars Weekly, but Jalopnik gives 330 hp and the RM Sotheby's lot description 350 hp; the Ram Air IV is rated 345 hp at 5,400 rpm and 430 lb-ft at 3,700 rpm, against 370 hp for the same engine in the GTO.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["ocw-ta69", "hagerty-raiv", "hsw-ta69", "jalopnik-scca", "rm-fl14"],
   "conflictNote": "Old Cars Weekly, Hagerty and HowStuffWorks give the Ram Air III 335 hp in the Trans Am. Jalopnik gives 330 hp and the RM Sotheby's Fort Lauderdale 2014 lot page describes the engine as 350 hp. The Ram Air IV figure of 345 hp is consistent across sources. The Ram Air III discrepancy is not resolved by any source consulted here.",
   "evidence": [
    { "ref": "ocw-ta69", "quote": "Base Trans Ams that folks bought off their local Pontiac dealer had the Ram Air III with 335 hp at 5000 rpm" },
    { "ref": "ocw-ta69", "quote": "Ram Air IV-optioned cars had 345 hp at 5400 rpm and 430 lbs.-ft. of torque at 3700 rpm." },
    { "ref": "hagerty-raiv", "quote": "It came standard with a 400-cubic-inch Ram Air III V-8 that produced 335 hp." },
    { "ref": "hagerty-raiv", "quote": "Pontiac claimed those improvements in airflow were good for 345 hp in the Trans Am and 370 hp in the GTO" },
    { "ref": "hsw-ta69", "quote": "Ram Air IV had a longer-duration cam and 345 bhp." },
    { "ref": "jalopnik-scca", "quote": "a standard 400-cubic-inch V8 with a Ram Air III intake system good for 330 bhp" },
    { "ref": "rm-fl14", "quote": "the Ram Air III equipped 400-cid, 350-hp V-8 is original to the car" }
   ]
  },
  {
   "section": "history",
   "claimText": "The Trans Am was option code WS4 at about $725, with Jalopnik giving $724.60, and the Ram Air IV cost $390 extra.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["ocw-ta69", "rm-fl14", "hsw-ta69", "jalopnik-scca"],
   "evidence": [
    { "ref": "ocw-ta69", "quote": "Prices for the WS4 Trans Am option varied by body style and transmission, but were around $725." },
    { "ref": "ocw-ta69", "quote": "Fifty-five other cars (all coupes) came with an optional Ram Air IV engine, which cost $390 extra." },
    { "ref": "rm-fl14", "quote": "The specialty model was introduced in February at the Chicago Auto Show as a $725 option." },
    { "ref": "hsw-ta69", "quote": "the $725 option" },
    { "ref": "jalopnik-scca", "quote": "would set you back $724.60" }
   ]
  },
  {
   "section": "history",
   "claimText": "The Trans Am's show debut was at the Chicago Auto Show, which RM Sotheby's dates to February (Old Cars Weekly gives the show, not the month); its launch was in March 1969 per HowStuffWorks and the club site; and its on-sale date was April 1969 per Jalopnik.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["ocw-ta69", "rm-fl14", "hsw-ta69", "fgf-1969", "jalopnik-scca"],
   "evidence": [
    { "ref": "ocw-ta69", "quote": "The Trans Am was introduced at the Chicago Auto Show." },
    { "ref": "rm-fl14", "quote": "The specialty model was introduced in February at the Chicago Auto Show as a $725 option." },
    { "ref": "hsw-ta69", "quote": "was launched in March 1969 with little fanfare and no advertising" },
    { "ref": "fgf-1969", "quote": "In March, the Trans AM was introduced as an optional (WS4) Cameo White convertible or coupe package." },
    { "ref": "jalopnik-scca", "quote": "went on sale in April of 1969" }
   ]
  },
  {
   "section": "history",
   "claimText": "The Trans Am took its name from the Trans American racing series, Pontiac agreed to pay the SCCA $5 for every Trans Am it produced, and the car never raced in the series.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["jalopnik-scca", "hsw-ta69"],
   "evidence": [
    { "ref": "jalopnik-scca", "quote": "Once the lawyers got involved, Pontiac agreed to pay the organization $5 for every Firebird Trans Am it produced." },
    { "ref": "hsw-ta69", "quote": "Its name came from the popular Trans American racing series" },
    { "ref": "hsw-ta69", "quote": "never actually competed in Trans Am racing" }
   ]
  },
  {
   "section": "history",
   "claimText": "The WS4 package included a rear deck lid airfoil, functional hood scoops, front fender air extractors and heavy-duty running gear, and every 1969 Trans Am except one silver prototype was Cameo White with blue stripes.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["ocw-ta69", "fgf-1969"],
   "evidence": [
    { "ref": "ocw-ta69", "quote": "All 1969 Trans Ams, excluding one all-silver prototype, were Cameo White with blue stripes." },
    { "ref": "ocw-ta69", "quote": "a rear deck lid airfoil" },
    { "ref": "ocw-ta69", "quote": "front fender air extractors" },
    { "ref": "fgf-1969", "quote": "In March, the Trans AM was introduced as an optional (WS4) Cameo White convertible or coupe package." }
   ]
  },
  {
   "section": "specs",
   "claimText": "Motor Trend's October 1969 test, as reported by Old Cars Weekly, was of a Trans Am prototype rather than a production car, and recorded 0-60 mph in 8.83 seconds and the quarter mile in 16.37 seconds at 93.5 mph; no test of a production first-generation car was retrieved.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["ocw-ta69"],
   "evidence": [
    { "ref": "ocw-ta69", "quote": "They recorded a standing quarter-mile time of 16.37 seconds at 93.5 mph and a 0-60-mph time of 8.83 seconds" },
    { "ref": "ocw-ta69", "quote": "The silver prototype was fitted with the 303-cid V-8 that underwent extensive testing by Motor Trend in its October 1969 issue" }
   ]
  },
  {
   "section": "market",
   "claimText": "As of November 2026 classic.com's market benchmark for the first-generation Trans Am, a 1969-only market, is $149,914 on its Trans Am market page.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["classic-ta"],
   "evidence": [
    { "ref": "classic-ta", "quote": "CMB $149,914" }
   ]
  },
  {
   "section": "market",
   "claimText": "As of November 2026 classic.com tracks 176 first-generation coupe sales averaging $39,967, from $11,250 to $225,000, and 170 convertible sales averaging $42,598, from $15,250 to $165,000.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["classic-coupe", "classic-convertible"],
   "evidence": [
    { "ref": "classic-coupe", "quote": "Avg $39,967" },
    { "ref": "classic-coupe", "quote": "Sales Count 176" },
    { "ref": "classic-coupe", "quote": "Lowest Sale $11,250" },
    { "ref": "classic-coupe", "quote": "Top Sale $225,000" },
    { "ref": "classic-convertible", "quote": "Avg $42,598" },
    { "ref": "classic-convertible", "quote": "Sales Count 170" },
    { "ref": "classic-convertible", "quote": "Lowest Sale $15,250" },
    { "ref": "classic-convertible", "quote": "Top Sale $165,000" }
   ]
  },
  {
   "section": "market",
   "claimText": "At RM Sotheby's Fort Lauderdale 2014 sale a restored 1969 Trans Am with its original Ram Air III engine, original sheetmetal, original window sticker and PHS documentation sold for $140,250; the lot page does not state the month or whether the figure includes buyer's premium.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["rm-fl14"],
   "evidence": [
    { "ref": "rm-fl14", "quote": "$140,250 USD | Sold" },
    { "ref": "rm-fl14", "quote": "This beautifully restored example is a rust-free car with all its original sheetmetal." },
    { "ref": "rm-fl14", "quote": "It comes with its original window sticker and PHS documentation" }
   ]
  },
  {
   "section": "market",
   "claimText": "The club site's buying guide, citing classic.com in mid-2026, puts the average first-generation Firebird sale at about $56,000, solid driver-quality cars at $35,000 to $45,000 and rough projects under $10,000; these are single-source figures.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["fgf-buying"],
   "evidence": [
    { "ref": "fgf-buying", "quote": "the average first-gen Firebird sale at about $56,000" },
    { "ref": "fgf-buying", "quote": "solid driver-quality cars trade around $35,000–$45,000" },
    { "ref": "fgf-buying", "quote": "rough projects still sell for under $10,000" }
   ]
  },
  {
   "section": "problems",
   "claimText": "The club's buying guide lists rust at the floor pans near the driver's feet and the shock towers, the trunk drop-offs behind the wheelhouses, the trunk reinforcement rails, the rear wheel well lips and, on convertibles, where the top is bolted, and warns of poorly installed replacement quarter panels.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["fgf-buying"],
   "evidence": [
    { "ref": "fgf-buying", "quote": "check floor pans near the driver's feet and shock towers" },
    { "ref": "fgf-buying", "quote": "trunk reinforcement rails (front edge and where they meet the inner valance)" },
    { "ref": "fgf-buying", "quote": "Convertibles: from the trunk, check where the top is bolted for rust/repair." },
    { "ref": "fgf-buying", "quote": "Replaced quarter panels — inspect from the trunk side for hack jobs" }
   ]
  },
  {
   "section": "problems",
   "claimText": "Genuine 1969 Trans Ams are among the most cloned Pontiacs; Pontiac Historic Services supplies the factory invoice or billing history for 1961-1986 Pontiac VINs, GM stamped partial VINs in concealed locations, and engine, axle and accessory swaps are common.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["fgf-buying", "rm-fl14"],
   "evidence": [
    { "ref": "fgf-buying", "quote": "genuine '69 Trans Ams are among the most cloned Pontiacs in existence" },
    { "ref": "fgf-buying", "quote": "will send the factory invoice or billing history for any 1961–86 Pontiac VIN" },
    { "ref": "fgf-buying", "quote": "GM stamped partial VINs in concealed locations" },
    { "ref": "fgf-buying", "quote": "the engine block codes, and the PHS invoice should all tell the same story" },
    { "ref": "rm-fl14", "quote": "It comes with its original window sticker and PHS documentation" }
   ]
  },
  {
   "section": "problems",
   "claimText": "The club's buying guide puts professional restoration labor at $85 to $150 or more per hour in 2026 and a driver-quality restoration at $20,000 to $50,000 in total; these are single-source figures.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["fgf-buying"],
   "evidence": [
    { "ref": "fgf-buying", "quote": "Professional restoration labor runs $85–$150+ per hour in 2026" },
    { "ref": "fgf-buying", "quote": "even a driver-quality restoration typically totals $20,000–$50,000" }
   ]
  }
 ]
};
