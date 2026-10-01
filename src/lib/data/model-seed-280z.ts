/**
 * Researched model draft - Datsun 280Z (S30, US market), 1975-1978.
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seed280z = {
 "slug": "datsun/280z",
 "make": "Datsun",
 "model": "280Z",
 "generation": "S30, US market",
 "generationCode": "HLS30 / GHLS30",
 "trim": null,
 "yearStart": 1975,
 "yearEnd": 1978,
 "bodyStyles": [
  "2-door 2-seat hatchback coupe (HLS30)",
  "2-door 2+2 hatchback coupe on a 102.6 in wheelbase (GHLS30)"
 ],
 "engines": [
  "2,753 cc L28 SOHC inline six, Bosch L-Jetronic fuel injection, naturally aspirated, 149 hp SAE net (170 hp gross) at 5,600 rpm and 163 lb-ft net at 4,400 rpm, US 1975-1978"
 ],
 "productionTotal": null,
 "productionNotes": "Nobody publishes a clean model-year total for the 280Z, and the two figures in circulation measure different things. Sports Car Market's 2017 profile prints 203,275 280Zs \"not counting the 2+2 version.\" The Internet Z Car Club reproduces Nissan's own export table from the factory's 1978 Datsun 280ZX book, which counts US units by calendar year, not model year: 40,216 two-seat cars and 11,594 2+2 cars in 1975, 45,766 and 13,792 in 1976, and 54,594 in 1977 with no separate 2+2 line. For 1978 the table gives only a US sales figure, 62,699, which includes the Black Pearl cars. Adding the 1975-77 two-seat lines to the 1978 sales line produces exactly 203,275, which suggests the magazine figure is that sum: calendar-year production for three years plus a sales number for the fourth that does include 2+2 cars, and calendar 1975 production that may include late 260Z builds while missing December 1974 280Z builds. For that reason productionTotal is null. Model-year windows from ZRegistry run December 1974 to August 1975 for the 1975 car, September to August for 1976 and 1977, and September 1977 to July 1978 for the last cars. The special editions have no factory counts: the 1977 Zap Z is estimated at about 1,000, and the 1978 Black Pearl at 750 to 1,500, with one dealer listing stating 1,500 as fact. ZRegistry has 384 surviving cars on file as of January 2026. US list price is thinly documented. Sports Car Market gives $6,359 for the 1977 car and a 2020 blog gives $6,669 for 1976; no period dealer price sheet or US road-test data panel was retrieved in this session, so neither figure has a second source.",
 "notableTrims": [
  {
   "name": "1975 280Z, early build (chrome bumpers with rubber overriders)",
   "note": "Hagerty Marketplace describes the earliest 1975 cars, built from about January 1975, as keeping chrome bumpers with federal rubber overriders before the full impact bumpers arrived later in the year. ZRegistry tracks how early a given chassis is."
  },
  {
   "name": "1975-76 280Z two-seater, four-speed",
   "note": "The first injected Z: L28, four-speed or three-speed automatic, smooth-faced bumpers and a full-size spare. The 1976 brochure offers no five-speed."
  },
  {
   "name": "1977-78 280Z five-speed",
   "note": "FS5W71B five-speed with a 0.864 fifth, the gearbox the 280ZX inherited. SCM calls it harder to find, and a correct original five-speed is checked against the chassis rather than assumed, since swaps are common."
  },
  {
   "name": "280Z 2+2 (GHLS30)",
   "note": "About a foot more wheelbase, a folding rear seat and roughly 200 lb more. Built throughout 1975-78 and historically valued below the two-seater."
  },
  {
   "name": "1977 Zap Z",
   "note": "Yellow with black stripes and yellow, red and orange chevrons, offered as a special decor package; it paced the 1977 Long Beach Grand Prix. Estimated at about 1,000 cars, with no factory figure."
  },
  {
   "name": "1978 Black Pearl Edition",
   "note": "Black Metallic (code 638) with the Special Appearance Package of dual mirrors, rear louvers and red and silver stripes. The first black Z; estimated 750 to 1,500."
  }
 ],
 "specs": {
  "layout": "Front-engine, rear-wheel drive",
  "chassis": "Steel unibody; MacPherson struts front, Chapman struts with lower arms rear",
  "engine": "2,753 cc L28 SOHC inline six, cast-iron block, aluminum head, seven main bearings, Bosch L-Jetronic injection",
  "bore_stroke": "86 x 79 mm, 8.3:1 compression",
  "power": "149 hp SAE net at 5,600 rpm (170 hp gross)",
  "torque": "163 lb-ft SAE net at 4,400 rpm (177 lb-ft gross, Wikipedia only)",
  "transmission": "F4W71B four-speed manual; FS5W71B five-speed from late 1976 (0.864 fifth); 3N71B three-speed automatic",
  "final_drive": "3.545:1 per the 1977 owner's manual (3.55:1 in the brochure)",
  "weight": "Wikipedia gives 2,875 lb; no legible factory curb weight was retrieved. 2+2 roughly 200 lb heavier per Hagerty; bumpers add about 75 lb per SCM",
  "acceleration": "0-60 mph about 9.5 seconds (conceptcarz, Hagerty Marketplace); a 2020 blog gives 7.8 seconds. Disputed",
  "wheelbase": "90.7 in (2,305 mm) two-seat; 102.6 in (2,605 mm) 2+2",
  "length": "173.4 in (4,405 mm) two-seat and 185.6 in (4,715 mm) 2+2 per the 1977 owner's manual; Wikipedia gives 173.2 in",
  "brakes": "Power-assisted front discs, rear drums",
  "tires": "195/70HR14 or 175HR-14 per the 1977 owner's manual; C78-14 Space Saver spare from 1977",
  "us_list_price": "$6,359 for 1977 (Sports Car Market); $6,669 for 1976 (single blog source). No dealer price sheet retrieved",
  "chassis_codes": "HLS30 two-seat, GHLS30 2+2, both left-hand drive US"
 },
 "summary": "The 280Z is the last and heaviest version of the first Z, built for North America only from the 1975 model year through 1978. Nissan bored the 260Z's L26 by 3 mm to 2,753 cc and replaced its twin carburetors with Bosch L-Jetronic fuel injection, which restored US output to 149 hp SAE net and 163 lb-ft. It came as a two-seat HLS30 coupe and a 2+2 GHLS30 on a wheelbase about a foot longer, both behind 5 mph bumpers that Sports Car Market says added 75 lb. The 1975-76 cars have smooth bumpers, a full-size spare and a four-speed or automatic; from late 1976 a five-speed was optional, and the 1977-78 cars have channeled bumpers, a Space Saver spare and a larger fuel tank. Special editions were the 1977 Zap Z and the 1978 Black Pearl, neither with a factory count. Production totals in print do not agree, and US list price is thinly documented. Recent no-reserve sales on Hagerty Marketplace ran $10,700 to $16,318 in December 2025, with the best original cars far above that. The 240Z page covers the car this one grew out of.",
 "history": "## Why the 280Z exists\n\nBy 1974 the Z had a problem in its largest market. US emissions rules had pushed the carbureted 2.6 liter 260Z down to 139 hp SAE net, well short of the 162 hp gross the same engine was rated at before US tuning, while federal bumper rules were adding weight at both ends. The car that Yutaka Katayama had sold to Americans as an affordable sports car in 1969 was getting slower and heavier every model year. Nissan's answer for North America was to bore the L26 out by 3 mm to make the 2,753 cc L28 and to fit Bosch L-Jetronic electronic fuel injection, the same airflow-metering system used by BMW, Alfa Romeo, Fiat and Lancia. The 280Z name existed only here; in Japan the car stayed the Fairlady Z, and other export markets kept the 260Z until the 280ZX. Even Datsun's own US range brochure for 1975 still showed the 260-Z with the late-1974 bumper, because the 280Z arrived after it was printed.\n\n## 1975-76: the first injected Z\n\nZRegistry dates 1975 model-year production from December 1974, and Hagerty Marketplace has sold a car built in January 1975 that still wore chrome bumpers with rubber overriders before the full impact bumpers took over during the year. Other sources put the introduction as late as mid-1975, and one calls 1976 the first year. The L28 made 149 hp SAE net at 5,600 rpm. Buyers chose a four-speed with a 3.55:1 final drive or a three-speed automatic, in the two-seater or the 2+2, and California cars carried a catalytic converter. Canadian cars were built without the US smog equipment. Conceptcarz gives about 22 mpg on the highway. The 2+2 used the same drivetrain on a wheelbase about a foot longer and ran alongside the two-seater for all four model years. Road & Track put the 280Z into a comparison test in its July 1976 issue, alongside its tests of the Alfetta GT and Corvette that year.\n\n## 1977-78: five speeds and new bumpers\n\nLate in the 1976 model year Datsun added the FS5W71B five-speed, keeping the four-speed's first four ratios and adding a 0.864 overdrive fifth; the January 1977 US brochure sells it as the \"gas-saving 5-speed.\" For 1977 the bumpers gained recessed channels and accordion rubber ends, the full-size spare gave way to a C78-14 Space Saver so the fuel tank could grow, and that raised the rear deck floor. Alloy-look wheel covers replaced the earlier hubcaps.\n\n## Zap Z and Black Pearl\n\nTwo appearance specials closed the run. The 1977 Zap Z was yellow with black stripes and chevrons, about 1,000 cars by the usual estimate. The 1978 Black Pearl paired Black Metallic paint, code 638, with dual mirrors, rear louvers and red and silver stripes; it was the first black Z, and the count most often given is 750 to 1,500 with no factory figure behind it.\n\n## The end of the S30\n\nThe 280ZX replaced the car for 1979. Hagerty notes that the only parts it carried over were the L28 and the five-speed, so the 280Z's drivetrain lived on into the 1980s while its body did not. ZRegistry has logged 384 surviving 280Zs, two-seat and 2+2, as of January 2026. Sports Car Market's 2017 profile observed that original 280Zs had crossed into five figures because so many rusted away, and that originality rather than restoration sets the top of the market.",
 "marketNotes": "As of September 2026 no classic.com benchmark could be retrieved for this page, so the figures here are dated individual results rather than an index. The most recent fetched sales are two no-reserve Hagerty Marketplace results: a January 1975-built automatic coupe in a factory color sold for $16,318 on December 18, 2025, and a 1976 coupe with a swapped-in five-speed, non-original wheels and stereo sold for $10,700 on December 16, 2025. Both are driver-grade cars and set the floor rather than the ceiling. At the top, Sports Car Market reported an original-paint 1977 five-speed with air conditioning at $44,000 including premium at Mecum Kansas City in December 2016, and cited a 1976 2+2 at $50,050 in the same period. A 350-mile 1976 car that had been partly disassembled and stored for four decades was reported at $140,000 in November 2020; that is one exceptional car, not a market level. For context, RM Sotheby's sold low-mile original cars for $11,220 (1977, one owner, 34,900 miles) and $12,100 (1976, 32,000 miles) in 2012, before the S30 market moved. Hagerty's 2020 editorial work put a #2 condition 280Z at $32,100 and recorded a 33 percent jump in a single year. The pattern across these results is consistent: original paint, documented history and a factory five-speed separate the $40,000 cars from the $10,000 to $16,000 ones.",
 "whatToLookFor": "Start with the chassis number on the firewall and dash. HLS30 is the two-seater and GHLS30 the 2+2, and the sequence number places the car in its model year; ZRegistry's build windows run December 1974 to August 1975 for the 1975 car and September to August after that, ending in July 1978. The registry also tracks known survivors, so a car's history may already be on file. Then rust, which decides more of these cars than mechanical condition. Sports Car Market's list is the floor pans, the spare-tire well, under the battery tray, the external air inlet for the A/C, inside the fenders and the lower rockers toward the rear. A car described as rust-free should come with underside photos or a lift inspection. Period rustproofing, as on the one-owner RM Sotheby's car that was Ziebarted when new, is a plus, not a guarantee. Confirm the transmission. A five-speed is only original on late 1976 and 1977-78 cars, it carries a 5-speed emblem on the hatch, and swaps into earlier cars are common, as on the 1976 car Hagerty Marketplace sold in December 2025. The 1977-78 cars should have channeled bumpers and the Space Saver spare; 1975-76 cars have smooth bumpers and a full-size spare. A sunroof means the roof was cut after the fact, since none was fitted at the factory. Bolt-on rocker trim and similar items are usually dealer accessories rather than Datsun parts. On a Black Pearl or Zap Z, paint code and documentation carry the value; on a Black Pearl, look for code 638 Black Metallic. Original paint, an uncracked dash, original keys and books move these cars further than a fresh restoration does.",
 "commonProblems": "Rust is the defining problem. The floors, spare-tire well, battery tray area, A/C air inlet, inner fenders and rear of the rockers are the usual places, and Sports Car Market's view is that no original Z is entirely free of it underneath. The 1977-78 rear deck is fiberboard over the raised floor, so its condition is a quick check on whether water has been getting in. The L-Jetronic system is reliable when every part of it works and baffling when one does not. It is a non-feedback system with an airflow meter, thermo-time switch and coolant temperature sensor. A trade diagnostic article on a 1976 car traced a crank-but-no-start to a corroded and misconnected ECU ground and recommends cleaning, re-torquing and sealing every major ground before condemning parts. Owner forums point to the EFI main relay behind the passenger kick panel and its ground, the fuel pump relay and the airflow meter as the usual suspects; those are forum patterns, not measured failure rates. Cars that have sat usually need the full fuel side renewed: the well-documented 1977 car SCM profiled had new fuel hoses, filter, lines, pump, injectors and injector connectors. Many cars have had a five-speed or wheels swapped, and original A/C systems are often converted to R134a.",
 "valueTrajectory": "The 280Z sat in the 240Z's shadow for decades. RM Sotheby's sold low-mile original cars for $11,220 and $12,100 in 2012. Sports Car Market's January 2017 profile, written around a $44,000 Mecum sale, declared the 280Z a five-digit car and said originality was the value driver. Hagerty's February 2020 analysis found the median #2 value up 33 percent in a single year, with 2+2 #1 values up more than 40 percent, and its September 2020 roundup put a #2 car at $32,100, up from $19,600 in 2017. The same Hagerty analysis noted insurance quote activity had been falling even as values rose, a sign of a thinner buyer pool at the new prices. The December 2025 no-reserve results of $10,700 and $16,318 for driver-grade cars show how wide the spread has become between ordinary cars and the original, documented ones. As of September 2026 no index figure was retrievable, so the direction since 2020 is not established here.",
 "overallConfidence": "medium",
 "sources": [
  {
   "ref": "datsun-1977-owners-manual",
   "title": "1977 Datsun 280Z Owners Manual (Internet Archive full text)",
   "url": "https://archive.org/download/1977-280-z-owners-manual/77%20280Z%20owners%20manual_djvu.txt",
   "publisher": "Nissan Motor Co. (scan hosted by Internet Archive)",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "US 1977 owner's manual. Lists HLS30 (two-seat) and GHLS30 (2+2) dimensions: 173.4 in long on a 90.7 in wheelbase for the two-seater, 185.6 in on 102.6 in for the 2+2. FS5W71B five-speed ratios with a 0.864 fifth, F4W71B four-speed, 3N71B automatic, 3.545 final drive, C78-14 Space Saver spare."
  },
  {
   "ref": "datsun-1977-service-manual",
   "title": "1977 280Z Service Manual (Internet Archive full text)",
   "url": "https://archive.org/download/1977-280z-service-manual/77%20280z%20Service%20Manual_djvu.txt",
   "publisher": "Nissan Motor Co. (scan hosted by Internet Archive)",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Factory description of the L28: 2,753 cc (168.0 cu in) inline six, SOHC, 86 x 79 mm bore and stroke, 8.3:1 compression, aluminum head, seven-bearing crankshaft."
  },
  {
   "ref": "datsun-1977-us-range-brochure",
   "title": "1977 Datsun Model Range Brochure. USA, 1-1977",
   "url": "https://archive.org/download/1977-datsun-model-range-brochure.-usa-1-1977/1977%20Datsun%20Model%20Range%20Brochure.%20USA%2C%201-1977_djvu.txt",
   "publisher": "Nissan Motor Corporation in U.S.A. (scan hosted by Internet Archive)",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "US dealer brochure dated January 1977. States the 280-Z's standard four-speed with a 3.55:1 final drive, with five-speed and automatic available; electronically fuel-injected 2.8 liter six; lists the 'gas-saving 5-speed', factory air and rear louvers among options."
  },
  {
   "ref": "datsun-us-range-brochure-260z",
   "title": "1975 Datsun Model Range Brochure. USA",
   "url": "https://archive.org/download/100_20260223/1975%20Datsun%20Model%20Range%20Brochure.%20USA_djvu.txt",
   "publisher": "Nissan Motor Corporation in U.S.A. (scan hosted by Internet Archive)",
   "sourceType": "manufacturer",
   "reliability": "medium",
   "notes": "US range brochure cataloged by the Internet Archive as the 1975 edition. It still presents the carbureted 260-Z with the late-1974 front bumper and the blinkers moved above it, which shows the 280Z arrived after the range literature was printed. Undated in the scan, so medium."
  },
  {
   "ref": "zhome-production",
   "title": "Z Car Production and Sales Reports",
   "url": "http://www.zhome.com/History/Zproduction.html",
   "publisher": "Internet Z Car Club (Carl Beck and Paul Hillman)",
   "sourceType": "registry",
   "reliability": "medium",
   "notes": "Reproduces Nissan's export production table from the 1978 Nissan book 'Datsun 280ZX': US units by calendar year, 1975 40,216 plus 11,594 2+2, 1976 45,766 plus 13,792 2+2, 1977 54,594 (no separate 2+2 line), 1978 given only as 62,699 US calendar-year sales including about 750 to 1,500 Black Pearl cars. Notes the figures are calendar-year production, not model-year sales."
  },
  {
   "ref": "zhome-collectible-guide",
   "title": "Collectable, Classic, and Special Interest Z Cars; A Buyers Guide",
   "url": "http://www.zhome.com/Buying/BeckBuyerG.html",
   "publisher": "Internet Z Car Club (Carl Beck)",
   "sourceType": "club-forum",
   "reliability": "medium",
   "notes": "Club buyer's guide (2014) naming the 1977 Zap Z yellow package and the 1978 Black Pearl Edition, the first black Z, as the collectible 280Z variants; no production figure given for either."
  },
  {
   "ref": "zregistry-paint",
   "title": "280Z Paint and Interior",
   "url": "https://zregistry.org/280z/280z-paint-and-interior/",
   "publisher": "ZRegistry.org",
   "sourceType": "registry",
   "reliability": "medium",
   "notes": "Registry's 280Z color and model-year table, updated January 2026. Gives build windows: 1975 model year December 1974 to August 1975, 1976 September 1975 to August 1976, 1977 September 1976 to August 1977, 1978 September 1977 to July 1978. Lists 638 Black Metallic (Black Pearl Poly) for 1978."
  },
  {
   "ref": "zregistry-280z",
   "title": "280Z (Known 280Zs)",
   "url": "https://zregistry.org/280z/",
   "publisher": "ZRegistry.org",
   "sourceType": "registry",
   "reliability": "medium",
   "notes": "Registry of surviving 280Zs: 384 cars logged across HLS30 and GHLS30, updated January 2026. Establishes that a chassis-number register exists for the 280Z and its current size."
  },
  {
   "ref": "scm-1977-280z",
   "title": "1977 Datsun 280Z (Car Profile)",
   "url": "https://www.sportscarmarket.com/?p=264226",
   "publisher": "Sports Car Market",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Brian Baker profile, January 2017, of a 1977 five-speed sold by Mecum Kansas City on December 2, 2016 for $44,000 including premium. Gives 203,275 280Zs 'not counting the 2+2', original list price $6,359, bumpers adding 75 lb, L-Jetronic shared with Alfa, BMW, Fiat and Lancia, rust locations (floors, spare-tire well, battery tray, A/C inlet, lower rockers), no factory sunroof."
  },
  {
   "ref": "hagerty-280z-surge-2020",
   "title": "Datsun 280Z prices surge, leaving some buyers in the lurch",
   "url": "https://www.hagerty.com/media/?p=7594",
   "publisher": "Hagerty Media",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "Brandan Gillogly, February 2020. Median #2 (Excellent) 280Z value rose 33 percent between January 2019 and January 2020; 2+2 #1 values up more than 40 percent; insurance quote activity falling. Dated, so trend context only."
  },
  {
   "ref": "hagerty-z-values-2020",
   "title": "Nissan Z values through the generations",
   "url": "https://www.hagerty.com/media/?p=86200",
   "publisher": "Hagerty Media",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "Adam Wilcox, September 2020. #2 280Z rose 64 percent from $19,600 to $32,100 since 2017; the 2+2 has a wheelbase about a foot longer and roughly 200 lb more curb weight; the 280ZX carried over only the L28 and the five-speed from the S30."
  },
  {
   "ref": "hagerty-mkt-1975-auto",
   "title": "1975 Datsun 280Z (Hagerty Marketplace auction result)",
   "url": "https://www.hagerty.com/marketplace/auction/1975-datsun-280z/3b16b3e1-35ad-49ad-8e54-745086c5a687",
   "publisher": "Hagerty Marketplace / Broad Arrow Auctions",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Lot HLS30201838, a January 1975-built automatic coupe, sold without reserve for $16,318 on December 18, 2025. Describes early-1975 cars with chrome bumpers and rubber overriders versus later 1975 cars with full impact bumpers, 149 hp L28, sale in North America only under the Datsun name."
  },
  {
   "ref": "hagerty-mkt-1976-5spd",
   "title": "1976 Datsun 280Z 5-Speed (Hagerty Marketplace auction result)",
   "url": "https://www.hagerty.com/marketplace/auction/1976-Datsun-280Z/82bc63f0-4f7c-47a5-a07e-b97ebeb7dfd2",
   "publisher": "Hagerty Marketplace",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Lot HLS30290340 sold without reserve for $10,700 on December 16, 2025; a previous owner swapped the original gearbox for a five-speed and the car carries non-original wheels and stereo. Quotes about 150 hp and 0-60 mph in about 9.5 seconds."
  },
  {
   "ref": "rm-1977-auburn-2012",
   "title": "1977 Datsun 280Z | Auburn Fall 2012",
   "url": "https://rmsothebys.com/auctions/af12/lots/r437-1977-datsun-280z",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "HLS30402316, one-owner car with 34,900 miles, Ziebart rustproofed when new, sold for $11,220 at Auburn Fall 2012, Lot 3022."
  },
  {
   "ref": "rm-1976-carlisle-2012",
   "title": "1976 Datsun 280Z | Spring Carlisle 2012",
   "url": "https://rmsothebys.com/auctions/sc12/lots/r287-1976-datsun-280z",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "HLS30271019, 32,000-mile car repainted in 2002, sold for $12,100 at Spring Carlisle 2012, Lot 178. A pre-boom reference point."
  },
  {
   "ref": "classiccars-black-pearl",
   "title": "1978 Datsun 280Z Black Pearl for sale in Auburn, Indiana",
   "url": "https://classiccars.com/listings/view/2100664/1978-datsun-280z-for-sale-in-auburn-indiana-46706",
   "publisher": "ClassicCars.com (dealer listing)",
   "sourceType": "market-data",
   "reliability": "low",
   "notes": "Dealer listing for an unrestored 1978 Black Pearl. States it is '1 of just 1,500' US Black Pearl cars and calls it the first factory-black Z, a market test for the color. A seller's claim, used only to show the 1,500 figure in circulation."
  },
  {
   "ref": "wikipedia-s30",
   "title": "Nissan Fairlady Z (S30)",
   "url": "https://en.wikipedia.org/wiki/Nissan_S30",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Pointer. 280Z released for North America for 1975; L26 bored 3 mm to L28 with L-Jetronic; Canadian cars without US smog equipment; 1977-78 bumper change, space-saver spare and larger tank; five-speed from late 1976; 170 hp gross and 149 hp SAE net, 163 lb-ft net; Zap Z estimated 1,000; Black Pearl estimated 750 to 1,500; 260Z at 139 hp net."
  },
  {
   "ref": "conceptcarz-280z",
   "title": "1976 Datsun 280Z",
   "url": "https://www.conceptcarz.com/w14106/datsun-280z.aspx",
   "publisher": "conceptcarz.com",
   "sourceType": "encyclopedia",
   "reliability": "low",
   "notes": "Secondary summary. Nearly 150 hp net (170 gross) and 163 lb-ft at 4,400 rpm; 0-60 mph in about 9.5 seconds and quarter mile in about 17 seconds; states the 280Z arrived 'halfway through 1975' and that the five-speed, mag-type covers and collapsible spare came the following year; 280Z name unique to North America."
  },
  {
   "ref": "datsunforum-1976-brochure",
   "title": "1976 Datsun 280Z sales brochure",
   "url": "https://datsunforum.com/?p=839",
   "publisher": "DatsunForum.com",
   "sourceType": "club-forum",
   "reliability": "low",
   "notes": "Scanned US 1976 sales brochure with commentary. Commentary calls 1976 the first year of the 280Z, arriving late in 1975, and says the first-year car came with a four-speed or three-speed automatic only."
  },
  {
   "ref": "ritholtz-1976-280z",
   "title": "1976 Datsun 280Z",
   "url": "https://ritholtz.com/2020/11/1976-datsun-280z/",
   "publisher": "The Big Picture (Barry Ritholtz)",
   "sourceType": "journalism",
   "reliability": "low",
   "notes": "Blog post, November 2020. Gives a 1976 MSRP of $6,669, 0-60 mph in 7.8 seconds and a 126 mph top speed (unsourced), and reports a 350-mile 1976 car selling for $140,000 on Bring a Trailer. Low reliability; used only where it disagrees with or adds to other sources and labeled as such."
  },
  {
   "ref": "rt-index-1976",
   "title": "Road & Track 1976: Vol 27-28 Index",
   "url": "https://archive.org/download/sim_road-track_1976_27-28_index/sim_road-track_1976_27-28_index_djvu.txt",
   "publisher": "Road & Track (scan hosted by Internet Archive)",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Road & Track's own 1976 annual index lists the Datsun 280Z in its comparison tests, July 1976, page 36. Establishes the period US test exists; the test text itself was not retrievable in this session."
  },
  {
   "ref": "underhood-280z-ecu",
   "title": "ECU Diagnostics: 1976 Datsun (Nissan) 280Z",
   "url": "https://www.underhoodservice.com/?p=134332",
   "publisher": "Underhood Service",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Trade magazine diagnostic article on a 1976 280Z with a crank-no-start traced to a corroded, misconnected ECU ground; recommends checking pin-to-pin resistance at the ECU connector and cleaning and sealing all major grounds. Non-feedback L-Jetronic with airflow meter, thermo-time switch and coolant sensor. Page loaded via a browser fetch only; it blocks scripted requests."
  },
  {
   "ref": "ratsun-280z-efi",
   "title": "1977 280z fuel injection problems",
   "url": "https://ratsun.net/topic/20698-1977-280z-fuel-injection-problems/",
   "publisher": "Ratsun.net",
   "sourceType": "club-forum",
   "reliability": "low",
   "notes": "Owner forum thread, 2010. Experienced owners point to the EFI main relay behind the passenger kick panel and its ground, and the fuel pump relay, as common no-start causes, and to the airflow meter. Forum pattern only."
  }
 ],
 "claims": [
  {
   "section": "history",
   "claimText": "The 280Z was a North America-only model: Nissan released it for the 1975 model year, and the 280Z name was not used in Japan, where the car was the Fairlady Z.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-s30",
    "hagerty-mkt-1975-auto",
    "conceptcarz-280z"
   ],
   "evidence": [
    {
     "ref": "wikipedia-s30",
     "quote": "Nissan released the Datsun 280Z model for the North American market in the 1975 model year."
    },
    {
     "ref": "hagerty-mkt-1975-auto",
     "quote": "Sold exclusively in North America under the Datsun name"
    },
    {
     "ref": "conceptcarz-280z",
     "quote": "Unique to North America, the 280Z nameplate was sold as the Fairlady Z in Japan."
    }
   ]
  },
  {
   "section": "history",
   "claimText": "Sources disagree about when the 280Z arrived. ZRegistry dates 1975 model-year production from December 1974 and a Hagerty-listed car was built in January 1975, while conceptcarz places the introduction halfway through 1975 and DatsunForum calls 1976 the first year, arriving in late 1975.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "zregistry-paint",
    "hagerty-mkt-1975-auto",
    "conceptcarz-280z",
    "datsunforum-1976-brochure"
   ],
   "conflictNote": "ZRegistry gives the 1975 model-year build window as December 1974 to August 1975, and Hagerty Marketplace describes a car built in January 1975. Conceptcarz says the 280Z was introduced halfway through 1975, and DatsunForum's commentary calls 1976 the first year of the 280Z. The registry and chassis evidence support a 1975 model year from early in calendar 1975; the exact US on-sale date is not settled by any source consulted here.",
   "evidence": [
    {
     "ref": "zregistry-paint",
     "quote": "Color Combination Estimates 1975 December 1974 to August 1975 110 / Red (Red) with Black or Beige Interior"
    },
    {
     "ref": "hagerty-mkt-1975-auto",
     "quote": "early 1975 models like this one (built in January 1975) retained chrome bumpers"
    },
    {
     "ref": "conceptcarz-280z",
     "quote": "Halfway through 1975, the 280Z was introduced to the market."
    },
    {
     "ref": "datsunforum-1976-brochure",
     "quote": "1976 was the first year of the Datsun 280Z, arriving on dealer lots in late 1975 as the successor to the 260Z"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The L28 is a 2,753 cc single-overhead-cam inline six with an 86 x 79 mm bore and stroke and 8.3:1 compression, made by boring the 260Z's L26 by 3 mm and adding Bosch L-Jetronic fuel injection.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "datsun-1977-service-manual",
    "wikipedia-s30"
   ],
   "evidence": [
    {
     "ref": "datsun-1977-service-manual",
     "quote": "The L28 engine is a 2,753 cc (168.0 cu in) in-line, overhead camshaft, six- cylinder engine."
    },
    {
     "ref": "wikipedia-s30",
     "quote": "The L26 engine was bored out 3 mm (0.12 in) to create the L28"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "US output is rated at 149 hp SAE net (170 hp gross) at 5,600 rpm with 163 lb-ft of torque at 4,400 rpm, against 139 hp net for the carbureted 1974 260Z.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-s30",
    "conceptcarz-280z",
    "hagerty-mkt-1975-auto"
   ],
   "evidence": [
    {
     "ref": "wikipedia-s30",
     "quote": "Power: 170 hp (127 kW) at 5,600 rpm ( SAE gross ), 149 hp (111 kW) at 5,600 rpm ( SAE net )"
    },
    {
     "ref": "conceptcarz-280z",
     "quote": "offering nearly 150 (170 gross) horsepower and 163 lb-ft of torque at 4,400 RPM"
    },
    {
     "ref": "hagerty-mkt-1975-auto",
     "quote": "2.8-liter inline-six (L28) engine with Bosch L-Jetronic fuel injection producing 149 hp"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "Published 0-60 mph times disagree: conceptcarz and a Hagerty Marketplace description give about 9.5 seconds, while a 2020 blog post gives 7.8 seconds with a 126 mph top speed.",
   "confidence": "low",
   "status": "disputed",
   "sourceRefs": [
    "conceptcarz-280z",
    "hagerty-mkt-1976-5spd",
    "ritholtz-1976-280z"
   ],
   "conflictNote": "Conceptcarz and Hagerty Marketplace put 0-60 mph at about 9.5 seconds; Barry Ritholtz's blog gives 7.8 seconds and 126 mph. None of the three names the test, the transmission or the body. The Road & Track comparison test of July 1976 would settle it but was not retrievable here, so the figure is unresolved.",
   "evidence": [
    {
     "ref": "conceptcarz-280z",
     "quote": "The Datsun 280Z was capable of sprinting from zero-to-sixty mph in around nine-and-a-half seconds with the quarter-mile accomplished in about 17 seconds."
    },
    {
     "ref": "hagerty-mkt-1976-5spd",
     "quote": "Producing around 150 horsepower, the 280Z could sprint 0–60 mph in about 9.5 seconds."
    },
    {
     "ref": "ritholtz-1976-280z",
     "quote": "0-60 mph was 7.8, with a top speed of 126 mph"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The five-speed was an option from late in the 1976 model year and through 1977-78; the January 1977 US brochure lists a four-speed with 3.55:1 final drive as standard with five-speed and automatic available.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-s30",
    "datsun-1977-us-range-brochure",
    "conceptcarz-280z"
   ],
   "evidence": [
    {
     "ref": "wikipedia-s30",
     "quote": "In late 1976 and for most 1977–78 models, an optional five-speed manual transmission was available alongside the four-speed manual and the three-speed automatic options."
    },
    {
     "ref": "datsun-1977-us-range-brochure",
     "quote": "Transmission is a 4-speed with final drive ratio of 3.55:1. (5-speed and automatic are available.)"
    },
    {
     "ref": "conceptcarz-280z",
     "quote": "The following year, the 280Z gained 'mag' wheel covers, a collapsible spare tire, and a five-speed manual gearbox."
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The US five-speed is the FS5W71B, sharing the four-speed's first four ratios and adding a 0.864 overdrive fifth, ahead of a 3.545 final drive.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "datsun-1977-owners-manual"
   ],
   "evidence": [
    {
     "ref": "datsun-1977-owners-manual",
     "quote": "Model FS5W71 B, 5-speed, floor shift; Gear ratio Ist: 3.321, 2nd: 2.077, 3rd: 1.308 4th: 1.000, 5th: 0.864, Rev.: 3.382"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 1977 owner's manual gives the two-seat HLS30 as 173.4 in long on a 90.7 in wheelbase and the 2+2 GHLS30 as 185.6 in long on a 102.6 in wheelbase; Hagerty describes the 2+2 as about a foot longer in wheelbase and roughly 200 lb heavier.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "datsun-1977-owners-manual",
    "hagerty-z-values-2020"
   ],
   "evidence": [
    {
     "ref": "datsun-1977-owners-manual",
     "quote": "HLS30 173.4 (4,405) 64.2 (1,630) 51.0 (1,295) 90.7 (2,305)"
    },
    {
     "ref": "hagerty-z-values-2020",
     "quote": "Datsun stretched the wheelbase an extra foot and extended the roofline, resulting in a slightly funky profile and roughly an additional 200 pounds of curb weight"
    }
   ]
  },
  {
   "section": "history",
   "claimText": "For 1977 the bumpers changed from smooth-faced units to channeled bumpers with accordion rubber ends, and the full-size spare gave way to a Space Saver spare and a larger fuel tank.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-s30",
    "datsun-1977-owners-manual"
   ],
   "evidence": [
    {
     "ref": "wikipedia-s30",
     "quote": "The 1977 and 1978 models received bumpers with recessed channels added that blended into corrugated- or accordion-style black rubber extension trim."
    },
    {
     "ref": "datsun-1977-owners-manual",
     "quote": "Spare tire : C78-14 (Space Saver Spare Tire)"
    }
   ]
  },
  {
   "section": "history",
   "claimText": "A US Datsun range brochure cataloged as the 1975 edition still sells the carbureted 260-Z with the late-1974 front bumper and the blinkers moved above it, showing the 280Z arrived after the range literature was printed.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "datsun-us-range-brochure-260z"
   ],
   "evidence": [
    {
     "ref": "datsun-us-range-brochure-260z",
     "quote": "A modified grille and front bumper with a mini-spoiler apron mark the latest 260-Z."
    }
   ]
  },
  {
   "section": "production",
   "claimText": "No agreed production total exists. Sports Car Market gives 203,275 280Zs not counting the 2+2, while Nissan's calendar-year export table reproduced by the Internet Z Car Club gives US figures by calendar year that split out the 2+2 only for 1975-76 and give 1978 only as US sales.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "scm-1977-280z",
    "zhome-production"
   ],
   "conflictNote": "Sports Car Market prints 203,275 280Zs 'not counting the 2+2 version'. The Nissan table reproduced by the IZCC lists US units of 40,216 two-seat and 11,594 2+2 for calendar 1975, 45,766 and 13,792 for 1976, 54,594 for 1977 with no separate 2+2 line, and only a 62,699 US sales figure for calendar 1978. Adding the 1975-77 non-2+2 lines to the 1978 sales line gives exactly 203,275, so the SCM figure appears to mix calendar-year production with a sales figure that includes 2+2 cars. Neither is a model-year total; unresolved.",
   "evidence": [
    {
     "ref": "scm-1977-280z",
     "quote": "while 203,275 were 280Z cars"
    },
    {
     "ref": "zhome-production",
     "quote": "Note 1: The table above represents \"units produced\"for Export Markets; within each calendar year - not units sold during the Model Year."
    }
   ]
  },
  {
   "section": "production",
   "claimText": "The 1978 Black Pearl Edition is usually given as 750 to 1,500 cars with the exact number unknown, while at least one current dealer listing calls it one of 1,500.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "wikipedia-s30",
    "zhome-production",
    "classiccars-black-pearl"
   ],
   "conflictNote": "Wikipedia and the IZCC production page both give an estimate of 750 to 1,500. A ClassicCars.com dealer listing states 1,500 as a fact. No factory figure was found; unresolved.",
   "evidence": [
    {
     "ref": "wikipedia-s30",
     "quote": "It is estimated 750 to 1,500 of these cars were ultimately produced, however the exact number remains unknown."
    },
    {
     "ref": "zhome-production",
     "quote": "1978 62,699 - includes aprox. 750 to 1500 Black Pearl Editions"
    },
    {
     "ref": "classiccars-black-pearl",
     "quote": "1 of just 1,500 Black Pearl Editions produced for the U.S."
    }
   ]
  },
  {
   "section": "production",
   "claimText": "The 1977 Zap Z special decor package (yellow with black stripes) is estimated at about 1,000 cars, an estimate with one encyclopedia source and no factory figure.",
   "confidence": "low",
   "status": "unverified",
   "sourceRefs": [
    "wikipedia-s30",
    "zhome-collectible-guide"
   ],
   "evidence": [
    {
     "ref": "wikipedia-s30",
     "quote": "An estimated 1,000 \"Zap Z\" cars were offered in 1977."
    },
    {
     "ref": "zhome-collectible-guide",
     "quote": "1977 ZZZap Z - 1977. Special Zapp Package - Bright Yellow. 1978 Black Pearl Edition - 1978. First Black Z offered, and very limited production."
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "Sports Car Market gives the original list price of the 1977 280Z as $6,359, and a 2020 blog post gives an MSRP of $6,669 for 1976; neither cites a dealer price sheet, so each figure is single-sourced for its year.",
   "confidence": "low",
   "status": "unverified",
   "sourceRefs": [
    "scm-1977-280z",
    "ritholtz-1976-280z"
   ],
   "evidence": [
    {
     "ref": "scm-1977-280z",
     "quote": "Number Produced: 203,275 Original List Price: $6,359"
    },
    {
     "ref": "ritholtz-1976-280z",
     "quote": "The MSRP of these cars in 1976 was $6,669."
    }
   ]
  },
  {
   "section": "market",
   "claimText": "A 1975 automatic coupe sold for $16,318 and a 1976 coupe with a non-original five-speed for $10,700 on Hagerty Marketplace in December 2025, both without reserve.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "hagerty-mkt-1975-auto",
    "hagerty-mkt-1976-5spd"
   ],
   "evidence": [
    {
     "ref": "hagerty-mkt-1975-auto",
     "quote": "1975 Datsun 280Z No reserve Sold for $16,318 on 12/18/25"
    },
    {
     "ref": "hagerty-mkt-1976-5spd",
     "quote": "1976 Datsun 280Z 5-Speed No reserve Sold for $10,700 on 12/16/25"
    }
   ]
  },
  {
   "section": "market",
   "claimText": "An original-paint 1977 five-speed with air conditioning sold for $44,000 including premium at Mecum Kansas City in December 2016, against $11,220 and $12,100 for low-mile 1977 and 1976 cars at RM Sotheby's in 2012.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "scm-1977-280z",
    "rm-1977-auburn-2012",
    "rm-1976-carlisle-2012"
   ],
   "evidence": [
    {
     "ref": "scm-1977-280z",
     "quote": "This car, Lot F52, sold for $44,000, including buyer’s premium, at Mecum’s Kansas City Auction in Kansas City, MO, on December 2, 2016."
    },
    {
     "ref": "rm-1977-auburn-2012",
     "quote": "1977 Datsun 280Z $11,220 USD | Sold Auburn Fall 2012"
    },
    {
     "ref": "rm-1976-carlisle-2012",
     "quote": "1976 Datsun 280Z $12,100 USD | Sold Spring Carlisle 2012 , Lot 178"
    }
   ]
  },
  {
   "section": "market",
   "claimText": "Hagerty recorded the median #2 280Z value rising 33 percent between January 2019 and January 2020, and from $19,600 to $32,100 between 2017 and September 2020.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "hagerty-280z-surge-2020",
    "hagerty-z-values-2020"
   ],
   "evidence": [
    {
     "ref": "hagerty-280z-surge-2020",
     "quote": "But between January 2019 and January 2020 the median #2 (Excellent-condition) value increased 33 percent."
    },
    {
     "ref": "hagerty-z-values-2020",
     "quote": "a similar-condition 280Z rose 64 percent from $19,600 to $32,100 over the same time period"
    }
   ]
  },
  {
   "section": "problems",
   "claimText": "Rust is the first thing to check: Sports Car Market names the floor pans, spare-tire well, battery tray area, A/C air inlet, inner fenders and lower rockers.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "scm-1977-280z"
   ],
   "evidence": [
    {
     "ref": "scm-1977-280z",
     "quote": "A careful buyer would also look under the battery tray, in the external air inlet for the a/c, inside the fenders and at the lower rockers"
    }
   ]
  },
  {
   "section": "problems",
   "claimText": "L-Jetronic faults on these cars commonly trace to grounds and relays rather than the ECU itself: a trade diagnostic article traced a no-start to a corroded ECU ground, and owners point to the EFI main relay and its ground.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "underhood-280z-ecu",
    "ratsun-280z-efi"
   ],
   "evidence": [
    {
     "ref": "underhood-280z-ecu",
     "quote": "clean and re-torque all of the major grounds, including the engine block ground, and seal them with an anti-corrosion compound"
    },
    {
     "ref": "ratsun-280z-efi",
     "quote": "Often times the main relay has a bad ground (make sure the mount has a good tight ground to the body at the mounting screw) or is just too old and worn out."
    }
   ]
  },
  {
   "section": "history",
   "claimText": "Road & Track tested the 280Z in a comparison test published in July 1976.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "rt-index-1976"
   ],
   "evidence": [
    {
     "ref": "rt-index-1976",
     "quote": "Alfa Romeo Alfetta GT, July p. 36 Corvette & Super Corvette, March p. 32 Datsun 280Z. July p. 36"
    }
   ]
  },
  {
   "section": "history",
   "claimText": "When the 280ZX replaced the S30, the only parts carried over were the L28 engine and the five-speed manual.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "hagerty-z-values-2020"
   ],
   "evidence": [
    {
     "ref": "hagerty-z-values-2020",
     "quote": "The only components carried over from the S30 generation were the L28 engine of the 280Z and its five-speed manual transmission."
    }
   ]
  },
  {
   "section": "problems",
   "claimText": "There was no factory sunroof on the 280Z, so any sunroof car has been cut, and SCM calls the federal bumpers 75 lb of added weight.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "scm-1977-280z",
    "scm-1977-280z"
   ],
   "evidence": [
    {
     "ref": "scm-1977-280z",
     "quote": "One real gremlin that plagues Z cars is the sunroof, which was never installed at the factory."
    },
    {
     "ref": "scm-1977-280z",
     "quote": "The biggest problem with the 280Z is the federally mandated bumpers, which add 75 pounds on to the car"
    }
   ]
  },
  {
   "section": "production",
   "claimText": "ZRegistry has logged 384 surviving 280Zs, two-seat and 2+2, as of January 2026.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "zregistry-280z"
   ],
   "evidence": [
    {
     "ref": "zregistry-280z",
     "quote": "So far, there are 52 pages worth, 384 cars."
    }
   ]
  }
 ]
};
