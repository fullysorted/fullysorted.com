/**
 * Researched model draft - Jaguar XK120 (1949-1954).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedXk120 = {
 "slug": "jaguar/xk120",
 "make": "Jaguar",
 "model": "XK120",
 "generation": "Roadster, fixed head and drophead",
 "generationCode": null,
 "trim": null,
 "yearStart": 1949,
 "yearEnd": 1954,
 "bodyStyles": [
  "2-door open two-seater roadster (OTS), aluminum body over an ash frame on the first cars, then pressed steel",
  "2-door fixed head coupe (FHC), from 1951",
  "2-door drophead coupe (DHC), from 1953"
 ],
 "engines": [
  "3,441 cc XK inline six, twin overhead camshafts, 83 x 106 mm bore and stroke, 160 hp at 5,000 rpm and 195 lb-ft at 2,500 rpm (standard car)",
  "3,441 cc XK six in SE (Special Equipment) tune, called the M in the US: higher-lift cams and dual exhaust, 180 hp at 5,300 rpm",
  "3,441 cc XK six with C-Type cylinder head and larger twin SU H8 carburetors, a dealer-built conversion from 1953, quoted at 210 hp by one source"
 ],
 "productionTotal": null,
 "productionNotes": "No two sources consulted here agree on how many XK120s were built. The Classic Jaguar Association's XK120 registrar, Bruce Carnachan, gives a total of 12,078 for 1949 to 1954, split 7,612 roadsters, 2,678 fixed head coupes and 1,755 drophead coupes; conceptcarz repeats the 12,078 total but splits it 7,631, 2,678 and 1,769. Wikipedia's body-style table gives 7,606, 2,672 and 1,767 for a total of 12,045, while its own infobox says 12,055. The registrar's three body-style figures add to 12,045, not 12,078, and his left-hand and right-hand drive split for the drophead (1,471 and 294) adds to 1,765, not the 1,755 he prints, so even the most detailed source is not internally consistent. The alloy-bodied cars are argued over the same way. Jaguar's own heritage history, the registrar and conceptcarz say 240; Hagerty, RM Sotheby's and Wikipedia say 242; a second Hagerty article says the first 200 cars. The registrar's explanation is that two chassis of the period went to outside coachbuilders, which is where the 242 comes from. Of the alloy cars, the registrar and RM Sotheby's 2025 catalog both say 184 were left-hand drive. On the US share, no source consulted publishes a US-only count. The registrar's left-hand-drive figures for the three bodies add to 10,392, and Hagerty's buyer's guide, citing the Jaguar Heritage Trust, gives year-by-year left-hand and right-hand drive roadster output, but left-hand drive covered every export market, not only the United States. On the US price, Road and Track lists a 1951 west coast price of $3,945 and Sports Car Market's profile gives the same $3,945 original list price. Category 3 coverage is thin: the only US road-test data found is a Road and Track test of a 1951 car reprinted online from a later retrospective, not a 1950s issue, and no Car and Driver or Motor Trend period test could be fetched. No NHTSA recall or EPA fuel economy record was found for this car.",
 "notableTrims": [
  {
   "name": "Alloy roadster (1949-1950)",
   "note": "The first cars, hand-built with aluminum panels over an ash frame before production changed to steel in early 1950. Counted at 240 by Jaguar and the registrar, 242 by Hagerty and RM Sotheby's; 184 were left-hand drive. Some had hood louvers and side-exit exhausts, and the inner panels were painted semi-gloss black."
  },
  {
   "name": "Steel roadster (OTS), 1950-1954",
   "note": "The volume car. Roughly 112 lb heavier than the alloy body per Wikipedia, still over an ash framework, and the body that carries the 7,600-odd production figure the sources argue over."
  },
  {
   "name": "Fixed head coupe (FHC), from 1951",
   "note": "Shown at Geneva in March 1951. Most went to export markets: Hagerty's Heritage Trust figures for 1951 show 214 left-hand-drive coupes against 2 right-hand drive."
  },
  {
   "name": "Drophead coupe (DHC), from 1953",
   "note": "The last body added, in 1953. The scarcest of the three bodies at roughly 1,755 to 1,769 cars, depending on the source."
  },
  {
   "name": "SE (Special Equipment), called M in the US",
   "note": "Introduced through Service Bulletin 95A in 1951: wire wheels, higher-lift cams, dual exhaust and 180 hp at 5,300 rpm. Owners on the jag-lovers forum say SE cars carry an S prefix on the chassis number."
  },
  {
   "name": "Dealer C-Type head conversion (from 1953)",
   "note": "Agents and dealers could build their own SE or M with a C-Type cylinder head and larger SU H8 carburetors for a quoted 210 hp. A dealer conversion, not a factory model."
  }
 ],
 "specs": {
  "layout": "Front-engine, rear-wheel drive, two-seat sports car",
  "chassis": "Body-on-frame, with aluminum (first cars) or steel panels over an ash wood framework",
  "engine": "3,441 cc XK inline six, twin overhead camshafts",
  "bore_stroke": "83 x 106 mm",
  "power": "160 hp at 5,000 rpm (standard, per Hagerty and Wikipedia; Road and Track's data panel says 5,400 rpm); 180 hp at 5,300 rpm (SE, called M in the US)",
  "torque": "195 lb-ft at 2,500 rpm (Hagerty; Road and Track test data)",
  "transmission": "Moss four-speed manual, non-synchromesh first gear; close-ratio gearbox offered for competition with the SE package",
  "differential": "Salisbury 2HA rear axle from 1952",
  "brakes": "Drums all around for the whole production run",
  "steering": "Recirculating-ball steering, unassisted, with a large-diameter wheel",
  "weight": "3,015 lb curb weight in Road and Track's later test of a 1951 car that the page says had been fitted with an XK140 engine (single source); the steel body is about 112 lb heavier than the alloy body per Wikipedia",
  "acceleration": "0-60 mph in 11.7 seconds and the quarter mile in 18.3 seconds in Road and Track's later test of a 1951 car fitted with an XK140 engine rated 190 hp, not a standard car; The Motor recorded 10.0 seconds to 60 mph and Wikipedia cites 8.7 seconds for a US model test",
  "top_speed": "126.448 mph two-way flying mile with top and windshield up, 132.596 mph with the windshield removed, Jabbeke, Belgium, May 30, 1949 (a car Motor Sport called standard and fully equipped)",
  "us_list_price": "$3,945 west coast list price, 1951 (Road and Track; Sports Car Market); conceptcarz gives about $3,950 for 1950",
  "production_window": "Shown October 1948 at Earls Court, London; first deliveries 1949; production ended by August 1954 for the XK140"
 },
 "summary": "The XK120 is the car Jaguar built because its new twin-cam six was ready before the sedan meant to carry it. Shown at Earls Court in October 1948 as a showcase for the 3,441 cc XK engine, it was planned as a couple of hundred hand-built cars, drew more orders than that could meet, and went into volume production in steel from early 1950. It listed at $3,945 on the US west coast in 1951 and was built until August 1954 as a roadster, a fixed head coupe from 1951 and a drophead coupe from 1953, and the registrar's left-hand-drive figures add to 10,392 of his 12,045 body-style total. The production record is unsettled: the Classic Jaguar Association registrar gives 12,078 cars, Wikipedia 12,045 or 12,055, and the alloy-bodied first cars are counted at 240 by Jaguar and 242 by Hagerty and RM Sotheby's. The standard engine gave 160 hp; the SE, sold in the US as the M, gave 180 hp and carries an S prefix on its chassis number. As of November 2026 classic.com's benchmark for a fixed head coupe is $78,325. This page covers all three bodies, the alloy cars and the SE.",
 "history": "## Why it exists\n\nJaguar's postwar plan was a large sedan, the Mark VII, powered by a new twin-overhead-camshaft six designed by William Heynes, Walter Hassan and Claude Baily under William Lyons. By 1948 the engine was nearly ready for production and the Mark VII was not, and it would not be ready for the first postwar London Motor Show. Jaguar's own account is that the decision was made to showcase the engine in a new sports car that would generate publicity, and the job of designing its body fell to Lyons. The car was shown in October 1948 at Earls Court as the XK120 Super Sports. A couple of hundred cars had been intended, enough to prove the engine; Jaguar records that orders came flooding in and that the planned number could not meet demand. Jaguar's account is that it had not had the time or the money to invest in press tools for the body, so the first 240 cars were hand-built in aluminum.\n\n## Jabbeke, May 1949\n\nOn May 30, 1949, on the Ostend-Jabbeke motor road in Belgium, R. N. V. Sutton drove a standard, fully equipped two-seater to a two-way flying mile of 126.448 mph with the top and windshield up, and 132.596 mph with the windshield removed, as Motor Sport reported that June. Jaguar's heritage history gives 126 and 133 mph and says the run was made in front of the assembled press. Wikipedia calls the 1949 car a prototype, gives a 132.6 mph two-way average with a small aero screen and an alternative top gear ratio and 135 mph with a passenger-side tonneau cover, and places the 126.448 and 132.596 mph figures in a separate flying-mile demonstration. Not every later account agrees: a 2009 Truth About Cars review gives an official 136.5 mph, a figure no other source consulted here supports. The 126.448 mph run was the one Hagerty calls a production car record.\n\n## From aluminum to steel\n\nThe first cars were wood-framed, with aluminum panels hammered over an ash frame and nailed at the edges. Production switched to an all-steel body in early 1950, which Wikipedia puts at about 112 lb heavier, and the steel cars kept an ash framework under the panels. How many alloy cars were built depends on the source: 240 according to Jaguar, the Classic Jaguar Association registrar and conceptcarz, 242 according to Hagerty, RM Sotheby's and Wikipedia. The registrar's explanation is that two chassis of the period went to outside coachbuilders. Of the alloy cars, 184 were left-hand drive, per the registrar and RM Sotheby's. Hagerty's Jaguar Heritage Trust figures show how quickly volume arrived: 27 right-hand-drive roadsters and 70 left-hand-drive examples in 1949, then 1,515 roadsters in 1950.\n\n## Coupes, the SE and the American M\n\nThe fixed head coupe was shown at Geneva in March 1951, and in its first year almost every one was left-hand drive: 214 against 2. The drophead coupe followed in 1953. Also in 1951, Service Bulletin 95A introduced the SE, Special Equipment: wire wheels, higher-lift cams and dual exhaust for 180 hp at 5,300 rpm, with a close-ratio gearbox offered for competition. In the US the SE was sold as the M, for Modified. From 1953 agents and dealers could build their own version with a C-Type cylinder head and larger SU H8 carburetors, quoted by Hagerty at 210 hp.\n\n## Running changes and the end\n\nThe registrar records the changes by chassis number: a heater and footwell vents from November 1951 and a dual master cylinder from April 1952. Hagerty notes the Salisbury 2HA rear axle from 1952. Production ran until August 1954, when the XK140 replaced it. The 1951 west coast list price was $3,945. Road and Track's later test of a 1951 car, which the page says had been fitted with an XK140 engine rated 190 hp rather than a standard 160 hp unit, recorded 0-60 mph in 11.7 seconds and a 3,015 lb curb weight.",
 "marketNotes": "As of November 2026 classic.com's market page for the XK120 fixed head coupe puts its benchmark at $78,325. Among the sold listings shown on the coupe page are a 1953 coupe at $99,000 in August 2025, a 1953 fixed head coupe at $67,000 in Columbus, Ohio in September 2025, a 1953 SE fixed head coupe at $55,000 in June 2025 and a 1953 coupe at $38,500 in October 2025. Among the sold listings shown on classic.com's 1954 model-year page, the lowest US-dollar figure is $24,000 for an SE/M project in November 2025 and the highest $115,000 for an SE/M in November 2025. At Mecum's Indianapolis sale in May 2025 a 1953 roadster showing 47,000 miles, true mileage unknown, and classed by classic.com as original or highly original, sold for $88,000. At RM Sotheby's Miami 2025 sale an alloy roadster, one of the 184 left-hand-drive alloy cars and preserved rather than restored, sold for $89,600; the lot page as retrieved does not give the month of the sale. None of these pages states whether the figure includes buyer's premium.",
 "whatToLookFor": "The chassis number answers the first questions. SE cars carry an S prefix on the chassis number and an S suffix on the engine number, according to owners on the jag-lovers forum, and Gooding's 2016 SE lot was chassis S674322. The registrar's changeover numbers date a car's equipment: heater and footwell vents from chassis 671493 for left-hand drive (November 1951), and a dual master cylinder from 672049 for left-hand-drive roadsters (April 1952). Alloy cars differ from steel ones in more than panels: some early alloy cars had hood louvers, the early alloy cars had side-exit exhausts, and all inner panels and surfaces on the alloy cars were painted semi-gloss black regardless of body color. The registrar counts 184 of the alloy cars as left-hand drive. On the steel cars the structure is thin sheet steel over ash, body on a separate frame, and Hagerty's guide says door fit is the giveaway: doors that close cleanly mean the wood and pillars are sound, and doors that do not mean significant work. Many cars now have five-speed gearbox conversions in place of the Moss box, and some have had the rear axle swapped for a Dana unit as Salisbury parts got scarce; both depart from the original specification. Hagerty names cooling as one of the big issues to address and gives an aluminum radiator and an electric fan as the fixes.",
 "commonProblems": "Hagerty's buyer's guide flags rust on a car made of thin steel sheetmetal over ash framework and lists the fenders, the area around the headlight buckets, the frame and the door pillars, and notes paint bubbling on cars that look sound. The ash frame itself is a restoration item on both alloy and steel cars; a US restorer's log of alloy chassis 670131 records a repaired ash trunk lid frame and a corroded lower trunk lid skin cut away. Wiring is old even on cars rewired in the 1980s. The engines have mostly been rebuilt by now, often to cure front and rear main seal leaks and corroded head gaskets, and Hagerty calls cooling the big issue to address. Owners on the jag-lovers forum list overheating, electrical failures and less effective brakes as the risks of an original car, along with frozen wheel cylinders, a differential with too much play and, on one car, a broken axle shaft. The Moss four-speed has a straight-cut, non-synchromesh first gear, and five-speed conversions are common as the boxes age. Brakes are drums all around on every XK120, and steering is unassisted recirculating ball through a very large wheel, heavy at parking speeds. None of the sources consulted gives a US dollar cost for any of these repairs, so none is quoted here.",
 "valueTrajectory": "New, an XK120 roadster listed at $3,945 on the US west coast in 1951. The auction record in the sources consulted runs as follows; none of the lot pages as retrieved gives the month of its sale. At RM Sotheby's Hershey 2014 sale a 1950 roadster with an award-winning older restoration and fewer than 350 miles since sold for $104,500. At RM Sotheby's Amelia Island 2015 sale an event-ready 1949 alloy roadster sold for $346,500. At Gooding's Pebble Beach 2016 sale a restored SE roadster sold for $121,000. As of November 2026, classic.com's fixed head coupe benchmark is $78,325, and the US-dollar sold listings shown on its coupe and 1954 pages for 2025 run from $24,000 for an SE/M project to $115,000 for an SE/M, with an unrestored alloy roadster at RM Sotheby's Miami 2025 sale at $89,600. None of the pages states whether premium is included. With only a handful of individual results fetched, the sources do not establish how much of the spread between these results is condition, originality or the car itself.",
 "overallConfidence": "medium",
 "sources": [
  {
   "ref": "carnachan-cja",
   "title": "Jaguar XK120 by Bruce Carnachan",
   "url": "https://www.jag-lovers.org/xk-lovers/library/carnachan2.html",
   "publisher": "Bruce Carnachan, XK 120 Registrar, Classic Jaguar Association (hosted by jag-lovers.org)",
   "sourceType": "registry",
   "reliability": "high",
   "notes": "Registrar's figures: total 12,078; 7,612 roadsters, 2,678 FHC, 1,755 DHC; LHD/RHD splits 6,437/1,175, 2,484/194, 1,471/294; 240 alloy cars (184 LHD, 56 RHD) and the two custom-bodied chassis explaining the 242 figure; about 195 cars a month over 62 months; running changes by chassis number (heater Nov 1951, dual master cylinder Apr 1952, side lamps Oct 1952)."
  },
  {
   "ref": "wikipedia",
   "title": "Jaguar XK120",
   "url": "https://en.wikipedia.org/wiki/Jaguar_XK120",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Body-style production table totaling 12,045 (7,606 / 2,672 / 1,767) against an infobox figure of 12,055; first 242 cars alloy; steel from early 1950, 112 lb heavier; 3,441 cc, 160 hp at 5,000 rpm; SE 180 hp at 5,300 rpm and the US 'M' name; FHC from 1951, DHC from 1953; Jabbeke 132.6 mph; Motor test 10.0 s to 60 mph and a US model at 8.7 s. Used as a pointer and a dispute participant."
  },
  {
   "ref": "hagerty-buyers-guide",
   "title": "Your handy 1949-53 Jaguar XK120 buyer's guide",
   "url": "https://www.hagerty.com/media/?p=143000",
   "publisher": "Hagerty",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Undated, unsigned. 242 alloy cars; Jaguar Heritage Trust yearly RHD/LHD figures (1949: 27 and 70 roadsters; 1950: 490 and 1,025; 1951 FHC 2 RHD and 214 LHD; later year headings mislabeled 1952); Earls Court October 1948; FHC Geneva March 1951; production ended August 1954; SE via Service Bulletin 95A, 180 hp at 5,300 rpm; dealer C-Type head 210 hp from 1953; rust locations, seal leaks, head gaskets, cooling, Moss gearbox five-speed conversions, Salisbury 2HA from 1952, Dana swaps, drum brakes. Its dollar values are undated and not used."
  },
  {
   "ref": "jaguar-heritage",
   "title": "Jaguar: The Beginning, part 2",
   "url": "https://www.jaguar.com/en-au/jdx/news/2024/march/jaguar-the-beginning/part-2.html",
   "publisher": "Jaguar",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Manufacturer's history: Mark VII not ready for the first postwar Motor Show, engine showcased in a new sports car, Lyons designed the body, engine by Lyons with Heynes, Hassan and Baily, a couple of hundred cars originally intended, orders flooded in, first 240 cars hand-built in aluminium, 126 mph standard and 133 mph without windshield at Jabbeke."
  },
  {
   "ref": "motorsport-1949",
   "title": "Sports XK 120 Jaguar breaks records at over 132 m.p.h.",
   "url": "https://www.motorsportmagazine.com/archive/article/june-1949/30/sports-xk-120-jaguar-breaks-records-at-over-132-m-p-h/",
   "publisher": "Motor Sport",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Contemporary June 1949 report: May 30 at Jabbeke, driver R. N. V. Sutton, two-way flying mile 126.448 mph with screen and hood erect, 132.596 mph with screen removed, flying kilometer 132.362 mph."
  },
  {
   "ref": "hagerty-xk-engine",
   "title": "One Sweet Six: The engine that made Jaguar",
   "url": "https://hagerty.com/media/?p=223392",
   "publisher": "Hagerty",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "XK engine: 3,441 cc from 83 mm bore and 106 mm stroke, 160 hp at 5,000 rpm, 195 lb-ft at 2,500 rpm; design team Hassan, Bailey and Heynes; says aluminum bodywork was fitted to the first 200 cars, a third alloy figure; Jaguar aimed exports at America."
  },
  {
   "ref": "rt-1951-test",
   "title": "Road tests: Jaguar XK120 (Road and Track test data, 1951 car)",
   "url": "https://sportscars.tv/Newfiles/120xk.html",
   "publisher": "Road and Track, reprinted at sportscars.tv",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "US test data for a 1951 car in a later Road and Track retrospective: west coast list price $3,945 (1951), 0-60 mph 11.7 s, quarter mile 18.3 s, curb weight 3,015 lb, torque 195 at 2,500 rpm; test car rated 190 against the standard 160. Reprint, publication date not stated; medium for that reason."
  },
  {
   "ref": "scm-2005",
   "title": "1950 Jaguar XK120 roadster",
   "url": "https://sportscarmarket.com/?p=1844",
   "publisher": "Sports Car Market (Gary Anderson, June 2005)",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "US market profile whose data table gives an original list price of $3,945, a second source for the US price. Its sale discussed is a French auction and is not used."
  },
  {
   "ref": "conceptcarz",
   "title": "Jaguar XK 120",
   "url": "https://www.conceptcarz.com/s7216/Jaguar-XK-120.aspx",
   "publisher": "conceptcarz.com",
   "sourceType": "specialist",
   "reliability": "low",
   "notes": "Gives 12,078 total split 7,631 roadsters, 2,678 FHC, 1,769 DHC (a split different from the registrar's), 240 alloy roadsters, and a 1950 US base price of approximately $3,950. Used only as a dispute participant and a third price reference."
  },
  {
   "ref": "ttac-2009",
   "title": "Review: 1954 Jaguar XK120 Roadster",
   "url": "https://thetruthaboutcars.com/2009/07/review-1954-jaguar-xk-120-roadster/",
   "publisher": "The Truth About Cars (Chuck Goolsbee, July 2009)",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "US driving impression of a 1954 roadster: Moss gearbox with straight-cut non-synchro first, drum brakes, leaf springs and recirculating-ball steering, large wheel, poor weatherproofing; states an official 136.5 mph Jabbeke figure that conflicts with the contemporary report."
  },
  {
   "ref": "classicjaguar-alloy",
   "title": "1950 Jaguar XK120 roadster (alloy restoration archive)",
   "url": "https://classicjaguar.com/archive/alloy120.html",
   "publisher": "classicjaguar.com",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Restoration log of alloy chassis 670131: aluminum skin laid over the ash frame, hood louvers on several but not all early alloy cars, side-exiting exhausts on early alloy cars, inner panels painted semi-gloss black, repaired ash trunk lid frame and corroded trunk lid skin."
  },
  {
   "ref": "jaglovers-restoration",
   "title": "Restoration Information",
   "url": "https://jag-lovers.org/xk-lovers/library/restoration_info.html",
   "publisher": "jag-lovers.org XK owner forum compilation",
   "sourceType": "club-forum",
   "reliability": "low",
   "notes": "Owner posts: SE models carry an S prefix on the chassis number and S suffix on the engine number; overheating, electrical failures and weaker brakes on original cars; frozen wheel cylinders; differential play; a broken axle shaft. Ownership patterns only."
  },
  {
   "ref": "classic-coupe",
   "title": "Jaguar XK120 Coupe Market",
   "url": "https://www.classic.com/m/jaguar/xk120/road-cars/coupe",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of November 2026: coupe CMB $78,325; sold listings shown include a 1953 coupe at $99,000 (Aug 7, 2025), a 1953 FHC at $67,000 (Sep 10, 2025, Columbus, Ohio), a 1953 SE FHC at $55,000 (Jun 24, 2025), a 1953 coupe at $38,500 (Oct 15, 2025) and a 1954 SE/M at $115,000 (Nov 24, 2025)."
  },
  {
   "ref": "classic-1954",
   "title": "1954 Jaguar XK120 Market",
   "url": "https://www.classic.com/m/jaguar/xk120/year-1954",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "1954 model year page, sold listings shown as of November 2026: lowest US-dollar figure $24,000 for a 1954 SE/M project (Nov 14, 2025), highest $115,000 for a 1954 SE/M (Nov 24, 2025). The page labels neither as lowest or highest; 246 related listings."
  },
  {
   "ref": "classic-mecum-indy-2025",
   "title": "1953 Jaguar XK120 Roadster, Mecum Indy 2025, Lot F78",
   "url": "https://www.classic.com/a/mecum-indy-2025-8p6k2V4/lots/1953-jaguar-xk120-roadster-pPL1J6p",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "1953 roadster sold for $88,000 at Mecum Indy on May 16, 2025, lot F78, 47k miles true mileage unknown, classed original or highly original, manual."
  },
  {
   "ref": "rm-mi25",
   "title": "1950 Jaguar XK 120 Alloy Roadster, Miami 2025, Lot 278",
   "url": "https://rmsothebys.com/auctions/mi25/lots/r0088-1950-jaguar-xk-120-alloy-roadster",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Chassis 670082, sold $89,600; preserved and never fully restored; states 242 alloy roadsters in total, of which 184 were left-hand-drive export cars. Buyer's premium not stated."
  },
  {
   "ref": "rm-am15",
   "title": "1949 Jaguar XK120 Alloy Roadster, Amelia Island 2015",
   "url": "https://rmsothebys.com/auctions/am15/lots/r169-1949-jaguar-xk120-alloy-roadster",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Event-ready alloy roadster sold for $346,500 at Amelia Island 2015; states 242 hand-built alloy roadsters, about 180 with left-hand drive. Buyer's premium not stated."
  },
  {
   "ref": "rm-hf14",
   "title": "1950 Jaguar XK 120 Roadster, Hershey 2014",
   "url": "https://rmsothebys.com/auctions/hf14/lots/r145-1950-jaguar-xk-120-roadster/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Chassis 670840, award-winning older restoration with fewer than 350 miles since, sold $104,500 at Hershey 2014. Buyer's premium not stated."
  },
  {
   "ref": "gooding-pb16",
   "title": "1954 Jaguar XK120 Roadster, Pebble Beach Auctions 2016",
   "url": "https://www.goodingco.com/lot/1954-jaguar-xk120-roadster-6",
   "publisher": "Gooding and Company",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Chassis S674322, SE model with upgraded transmission, brakes and starter, older high-quality restoration, sold $121,000 at Pebble Beach 2016. Corroborates the S chassis prefix on an SE car. Buyer's premium not stated."
  }
 ],
 "claims": [
  {
   "section": "production",
   "claimText": "Published totals for XK120 production disagree: the Classic Jaguar Association registrar and conceptcarz give 12,078, Wikipedia's body-style table gives 12,045 and Wikipedia's infobox gives 12,055.",
   "confidence": "high",
   "status": "disputed",
   "sourceRefs": [
    "carnachan-cja",
    "conceptcarz",
    "wikipedia"
   ],
   "conflictNote": "The registrar (Bruce Carnachan) and conceptcarz state 12,078. Wikipedia's table totals 12,045 and its infobox states 12,055. The registrar's own three body-style figures also add to 12,045. Not resolved by any source consulted here.",
   "evidence": [
    {
     "ref": "carnachan-cja",
     "quote": "Total production from 1949 to 1954 for the XK 120 was 12,078, with 7,612 roadsters or Open Two Seaters (OTS),"
    },
    {
     "ref": "conceptcarz",
     "quote": "Jaguar produced 12,078 examples of the XK120 from 1949 to 1954."
    },
    {
     "ref": "wikipedia",
     "quote": "| Total | 1660 | 10385 | 12045 |"
    },
    {
     "ref": "wikipedia",
     "quote": "Production: 1948–1954 12,055 made"
    }
   ]
  },
  {
   "section": "production",
   "claimText": "The body-style split differs by source: roadsters 7,612 (registrar), 7,606 (Wikipedia) or 7,631 (conceptcarz); fixed head coupes 2,678 or 2,672; drophead coupes 1,755, 1,767 or 1,769.",
   "confidence": "high",
   "status": "disputed",
   "sourceRefs": [
    "carnachan-cja",
    "wikipedia",
    "conceptcarz"
   ],
   "conflictNote": "Registrar: 7,612 OTS, 2,678 FHC, 1,755 DHC. Wikipedia table: 7,606, 2,672, 1,767. conceptcarz: 7,631, 2,678, 1,769. Not resolved by any source consulted here.",
   "evidence": [
    {
     "ref": "carnachan-cja",
     "quote": "Total production from 1949 to 1954 for the XK 120 was 12,078, with 7,612 roadsters or Open Two Seaters (OTS),"
    },
    {
     "ref": "carnachan-cja",
     "quote": "2,678 Fixed Head Coupes (FHC), and 1,755 Drop Head Coupes (DHC)."
    },
    {
     "ref": "wikipedia",
     "quote": "| Open two-seater | 1170 | 6436 | 7606 |"
    },
    {
     "ref": "wikipedia",
     "quote": "| Fixed-head | 195 | 2477 | 2672 |"
    },
    {
     "ref": "wikipedia",
     "quote": "| Drop-head | 295 | 1472 | 1767 |"
    },
    {
     "ref": "conceptcarz",
     "quote": "7631 Roadsters, 2678 Fixed-head coupes, and 1769 drophead coupes."
    }
   ]
  },
  {
   "section": "production",
   "claimText": "The registrar's own figures are not internally consistent: his left-hand and right-hand drive drophead split of 1,471 and 294 adds to 1,765 rather than the 1,755 he prints, and his three body totals add to 12,045 rather than 12,078.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "carnachan-cja"
   ],
   "computed": [
    "1,765",
    "12,045"
   ],
   "evidence": [
    {
     "ref": "carnachan-cja",
     "quote": "These break down to 6,437 LHD and 1,175 RHD OTS's, 2,484 LHD and 194 RHD FHC's, and 1,471 LHD and 294 RHD DHC's."
    },
    {
     "ref": "carnachan-cja",
     "quote": "Total production from 1949 to 1954 for the XK 120 was 12,078, with 7,612 roadsters or Open Two Seaters (OTS),"
    },
    {
     "ref": "carnachan-cja",
     "quote": "2,678 Fixed Head Coupes (FHC), and 1,755 Drop Head Coupes (DHC)."
    }
   ]
  },
  {
   "section": "production",
   "claimText": "The number of alloy-bodied cars is given as 240 by Jaguar, the registrar and conceptcarz, as 242 by Hagerty, RM Sotheby's and Wikipedia, and as the first 200 cars by a second Hagerty article; the registrar attributes the 242 figure to two chassis sent to outside body shops.",
   "confidence": "high",
   "status": "disputed",
   "sourceRefs": [
    "jaguar-heritage",
    "carnachan-cja",
    "conceptcarz",
    "hagerty-buyers-guide",
    "rm-mi25",
    "hagerty-xk-engine"
   ],
   "conflictNote": "Jaguar, the registrar and conceptcarz state 240. Hagerty's buyer's guide, RM Sotheby's (2015 and 2025 catalogs) and Wikipedia state 242. Hagerty's engine history says the first 200 cars. The registrar's two-custom-bodies explanation reconciles 240 and 242 but is not confirmed by a second source; not resolved here.",
   "evidence": [
    {
     "ref": "jaguar-heritage",
     "quote": "The first 240 cars were all hand-built in aluminium"
    },
    {
     "ref": "carnachan-cja",
     "quote": "There were 240 alloy cars, 184 LHD cars and 56 RHD cars."
    },
    {
     "ref": "carnachan-cja",
     "quote": "which explains the sometimes quoted 242 figure for alloy cars."
    },
    {
     "ref": "conceptcarz",
     "quote": "Alloy Roadster 2 dr. 2 P : | 240"
    },
    {
     "ref": "hagerty-buyers-guide",
     "quote": "All of the 242 alloy cars produced between 1949 and 1950 were built at the Holbrook Lane facility in Coventry, U.K."
    },
    {
     "ref": "rm-mi25",
     "quote": "a mere 242 aluminum-bodied \"Alloy\" XK 120 Roadsters in total were produced"
    },
    {
     "ref": "hagerty-xk-engine",
     "quote": "aluminum bodywork fitted to the first 200 cars"
    }
   ]
  },
  {
   "section": "production",
   "claimText": "Of the alloy cars, 184 were left-hand drive according to the registrar and RM Sotheby's 2025 catalog; RM's 2015 catalog said about 180.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "carnachan-cja",
    "rm-mi25",
    "rm-am15"
   ],
   "evidence": [
    {
     "ref": "carnachan-cja",
     "quote": "There were 240 alloy cars, 184 LHD cars and 56 RHD cars."
    },
    {
     "ref": "rm-mi25",
     "quote": "Of these Alloys, only 184 were left-hand-drive export examples"
    },
    {
     "ref": "rm-am15",
     "quote": "of the 242 alloy-bodied cars, about 180 were produced with left-hand drive."
    }
   ]
  },
  {
   "section": "production",
   "claimText": "No source consulted publishes a US-only production count; the registrar's left-hand-drive figures for the three bodies add to 10,392, but left-hand drive covered every export market.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "carnachan-cja",
    "wikipedia"
   ],
   "computed": [
    "10,392"
   ],
   "evidence": [
    {
     "ref": "carnachan-cja",
     "quote": "These break down to 6,437 LHD and 1,175 RHD OTS's, 2,484 LHD and 194 RHD FHC's, and 1,471 LHD and 294 RHD DHC's."
    },
    {
     "ref": "wikipedia",
     "quote": "Most of the early cars were exported;"
    }
   ]
  },
  {
   "section": "production",
   "claimText": "Hagerty, citing the Jaguar Heritage Trust, gives 1949 output as 27 right-hand-drive roadsters and 70 left-hand-drive examples (97 cars in all), 1950 as 490 right-hand-drive and 1,025 left-hand-drive roadsters (1,515 in all), and 1951 fixed head coupes as 2 right-hand drive and 214 left-hand drive.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "hagerty-buyers-guide"
   ],
   "computed": [
    "97",
    "1,515"
   ],
   "evidence": [
    {
     "ref": "hagerty-buyers-guide",
     "quote": "a total of 27 right hand drive Roadsters and 70 left-hand-drive examples were produced."
    },
    {
     "ref": "hagerty-buyers-guide",
     "quote": "The Jaguar Heritage Trust shows that for 1950, Jaguar produced 490 right-hand drive Roadsters"
    },
    {
     "ref": "hagerty-buyers-guide",
     "quote": "and 1,025 left-hand drive Roadsters."
    },
    {
     "ref": "hagerty-buyers-guide",
     "quote": "699 left-hand drive Roadsters, 2 right-hand drive Fixed Head Coupés, and 214 left-hand drive Fixed Head Coupés."
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The US west coast list price of an XK120 in 1951 was $3,945 (£999 in Britain), per Road and Track's test data and Sports Car Market; conceptcarz gives about $3,950 for 1950.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "rt-1951-test",
    "scm-2005",
    "conceptcarz",
    "hagerty-buyers-guide"
   ],
   "evidence": [
    {
     "ref": "rt-1951-test",
     "quote": "List price, west coast (1951). $3945"
    },
    {
     "ref": "scm-2005",
     "quote": "Original List Price: $3,945"
    },
    {
     "ref": "conceptcarz",
     "quote": "A: The 1950 Jaguar XK-120 had a base price of approximately $3,950 (USD)."
    },
    {
     "ref": "hagerty-buyers-guide",
     "quote": "With a price of £999 (Adjusted for inflation, about £37,150 or $51,000,"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The XK engine displaces 3,441 cc from an 83 x 106 mm bore and stroke and produces 160 hp at 5,000 rpm and 195 lb-ft at 2,500 rpm in standard form, per Hagerty and Wikipedia; Road and Track's data panel lists the 160 hp at 5,400 rpm instead.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "hagerty-xk-engine",
    "wikipedia",
    "rt-1951-test"
   ],
   "evidence": [
    {
     "ref": "hagerty-xk-engine",
     "quote": "Combining an 83-millimeter bore with a 106-millimeter stroke in the XK-6 at the beginning of XK 120 production yielded 3441 cc"
    },
    {
     "ref": "hagerty-xk-engine",
     "quote": "160 horsepower at 5000 rpm"
    },
    {
     "ref": "hagerty-xk-engine",
     "quote": "195 lb-ft of torque at 2500 rpm"
    },
    {
     "ref": "wikipedia",
     "quote": "3,441 cc (3.4 L; 210.0 cu in)"
    },
    {
     "ref": "wikipedia",
     "quote": "160 bhp (119 kW; 162 PS) @ 5000 rpm"
    },
    {
     "ref": "rt-1951-test",
     "quote": "Torque @ rpm......... .195 @ 2500"
    },
    {
     "ref": "rt-1951-test",
     "quote": "Bhp @ rpm. . . . . . . . . .160 @ 5400"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The SE (Special Equipment) specification arrived in 1951 through Service Bulletin 95A with wire wheels, higher-lift cams and dual exhaust for 180 hp at 5,300 rpm, and was called the M, for Modified, in the US.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "hagerty-buyers-guide",
    "wikipedia"
   ],
   "evidence": [
    {
     "ref": "hagerty-buyers-guide",
     "quote": "1951 also introduced the 'SE' specification XK120, via Service Bulletin 95A."
    },
    {
     "ref": "hagerty-buyers-guide",
     "quote": "Along with wire wheels for better brake cooling, SE cars boosted horsepower to 180 at 5300 rpm"
    },
    {
     "ref": "wikipedia",
     "quote": "XK 120 3.4 SE for Special Equipment (unofficially called the \"M\" for Modified in the USA)"
    },
    {
     "ref": "wikipedia",
     "quote": "180 bhp (134 kW; 182 PS) @ 5300 rpm"
    },
    {
     "ref": "hagerty-buyers-guide",
     "quote": "The same service bulletin also announced that Jaguar would offer a close-ratio gearbox for competition use,"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "From 1953 agents and dealers could build their own SE or M with a C-Type cylinder head and larger twin SU H8 carburetors, quoted at 210 hp; this is a single-source figure.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "hagerty-buyers-guide"
   ],
   "evidence": [
    {
     "ref": "hagerty-buyers-guide",
     "quote": "with a C-Type head, and larger twin SU H8 carburetors for a boost to 210 hp."
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "SE cars carry an S prefix on the chassis number and an S suffix on the engine number; Gooding's 2016 SE lot carried chassis S674322.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "jaglovers-restoration",
    "gooding-pb16"
   ],
   "evidence": [
    {
     "ref": "jaglovers-restoration",
     "quote": "ALL SE models came with \"S\" prefix on chassis # and \"S suffix on engine #."
    },
    {
     "ref": "gooding-pb16",
     "quote": "Desirable SE Model with Upgraded Transmission, Brakes, and Starter"
    }
   ]
  },
  {
   "section": "history",
   "claimText": "Jaguar built the XK120, shown as the XK120 Super Sports, because the Mark VII sedan would not be ready for the first postwar Motor Show, so the new engine by Heynes, Hassan and Baily was showcased in a sports car whose body Lyons designed; only a couple of hundred were intended and demand outran that, and without the time or money for press tools the first cars were hand-built in aluminum.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "jaguar-heritage",
    "hagerty-buyers-guide",
    "hagerty-xk-engine"
   ],
   "evidence": [
    {
     "ref": "jaguar-heritage",
     "quote": "It became clear that the Mark VII would not be ready in time for the first post-war Motor Show."
    },
    {
     "ref": "jaguar-heritage",
     "quote": "the couple of hundred originally intended could not possibly meet demand."
    },
    {
     "ref": "jaguar-heritage",
     "quote": "It was known as the XK120 Super Sports."
    },
    {
     "ref": "jaguar-heritage",
     "quote": "The task fell then to William Lyons to design a suitable body"
    },
    {
     "ref": "hagerty-xk-engine",
     "quote": "The team included Walter Hassan, Claude Bailey, and William Heynes"
    },
    {
     "ref": "hagerty-buyers-guide",
     "quote": "But while the engine was ready in 1948, the Mark VII wasn't, and it wouldn't be until the 1950 model year."
    },
    {
     "ref": "jaguar-heritage",
     "quote": "the company hadn't had either the time or the money available to invest in new press tools to make the body."
    }
   ]
  },
  {
   "section": "history",
   "claimText": "On May 30, 1949 at Jabbeke, Belgium, R. N. V. Sutton drove a standard two-seater to a two-way flying mile of 126.448 mph with top and windshield up and 132.596 mph with the windshield removed; Jaguar gives 126 and 133 mph and says the run was made in front of the assembled press.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "motorsport-1949",
    "jaguar-heritage",
    "wikipedia"
   ],
   "evidence": [
    {
     "ref": "motorsport-1949",
     "quote": "With screen and hood erect, the two-way f.s. mile was covered at 126.448 m.p.h. (best run 127.098 m.p.h.)."
    },
    {
     "ref": "motorsport-1949",
     "quote": "Driven by R. N. V. Sutton, Lea-Francis exponent of twenty years ago,"
    },
    {
     "ref": "jaguar-heritage",
     "quote": "Then with the windscreen removed, 133 mph was achieved."
    },
    {
     "ref": "wikipedia",
     "quote": "On 30 May 1949, on the empty Ostend-Jabbeke motorway in Belgium, a prototype XK120"
    },
    {
     "ref": "hagerty-buyers-guide",
     "quote": "The car wouldn't actually achieve a speed of 126.448 miles per hour, a production car record, for another seven months."
    },
    {
     "ref": "jaguar-heritage",
     "quote": "in front of the assembled press, a standard XK120 proceeded to clock 126 mph."
    }
   ]
  },
  {
   "section": "history",
   "claimText": "A 2009 Truth About Cars review gives an official Jabbeke speed of 136.5 mph, which conflicts with the contemporary Motor Sport report of 132.596 mph with the windshield removed; Wikipedia calls the 1949 car a prototype, gives a 132.6 mph average with a small aero screen and 135 mph with a passenger-side tonneau cover, and places the 132.596 mph figure in a separate flying-mile demonstration.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "ttac-2009",
    "motorsport-1949",
    "wikipedia"
   ],
   "conflictNote": "The Truth About Cars (2009) states 136.5 mph. Motor Sport (June 1949) reports 126.448 mph with screen and hood up and 132.596 mph with the screen removed, on a car it calls standard and fully equipped, and Jaguar gives 126 and 133 mph. Wikipedia describes the May 30, 1949 car as a prototype, gives 132.6 mph with a small aero screen and an alternative top gear ratio and 135 mph with a passenger-side tonneau, and places 126.448 and 132.596 mph in a separate flying-mile demonstration. No source consulted supports 136.5 mph; not resolved here.",
   "evidence": [
    {
     "ref": "ttac-2009",
     "quote": "Jaguar famously tested a slightly modified XK120 on a Belgian freeway clocking an official 136.5 MPH."
    },
    {
     "ref": "motorsport-1949",
     "quote": "With screen removed, the speed for the mile was 132,596 m.p.h.,"
    },
    {
     "ref": "wikipedia",
     "quote": "achieved an average of runs in opposing directions of 132.6 mph (213.4 km/h)"
    },
    {
     "ref": "wikipedia",
     "quote": "with the windscreen replaced by just one small aero screen and a catalogued alternative top gear ratio"
    },
    {
     "ref": "wikipedia",
     "quote": "and 135 mph (217 km/h) with a passenger-side tonneau cover in place"
    },
    {
     "ref": "wikipedia",
     "quote": "the speed improved to 132.596 mph (213.393 km/h)"
    }
   ]
  },
  {
   "section": "history",
   "claimText": "The XK120 was introduced at Earls Court in October 1948, production moved to steel bodies in early 1950, the fixed head coupe debuted at Geneva in March 1951, the drophead coupe followed in 1953, and production ended by August 1954.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "hagerty-buyers-guide",
    "wikipedia"
   ],
   "evidence": [
    {
     "ref": "hagerty-buyers-guide",
     "quote": "When it was introduced at the 1948 London Motorfair at Earls Court, the XK120 was a revelation."
    },
    {
     "ref": "hagerty-buyers-guide",
     "quote": "The FHC debuted in March of 1951 at the Geneva Auto Show."
    },
    {
     "ref": "hagerty-buyers-guide",
     "quote": "By August of 1954, XK120 production had ceased to make way for the all-new XK140."
    },
    {
     "ref": "wikipedia",
     "quote": "a fixed head coupé (FHC) from 1951; and a drophead coupé (DHC) from 1953."
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The steel body is about 112 lb heavier than the alloy body and, like the alloy body, sits over an ash framework on a body-on-frame car; Road and Track recorded a 3,015 lb curb weight in a later test of a 1951 car that the page says had been fitted with an XK140 engine, a single-source figure.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "wikipedia",
    "rt-1951-test",
    "hagerty-buyers-guide"
   ],
   "evidence": [
    {
     "ref": "wikipedia",
     "quote": "Production switched to the 1cwt or 112 lb (51 kg) heavier all-steel in early 1950."
    },
    {
     "ref": "rt-1951-test",
     "quote": "Curb weight, lb. . . . . . . . . . . . . .3015"
    },
    {
     "ref": "rt-1951-test",
     "quote": "it now has an XK 140 engine, rated at 190 bhp instead of the XK120's 160"
    },
    {
     "ref": "hagerty-buyers-guide",
     "quote": "the production began to shift to steel sheetmetal wrapped over an ash framework."
    },
    {
     "ref": "hagerty-buyers-guide",
     "quote": "On the plus side of the ledger, these are body-on-frame cars"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "Published acceleration figures vary with the car tested: Road and Track's later test of a 1951 car, which the page says had been fitted with an XK140 engine rated 190 hp rather than the standard 160, recorded 0-60 mph in 11.7 seconds and the quarter mile in 18.3 seconds; The Motor recorded 10.0 seconds to 60 mph, and Wikipedia cites 8.7 seconds for a US model.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "rt-1951-test",
    "wikipedia"
   ],
   "evidence": [
    {
     "ref": "rt-1951-test",
     "quote": "0-60 mph... . . . . . . . . . . . . . .11.7"
    },
    {
     "ref": "rt-1951-test",
     "quote": "it now has an XK 140 engine, rated at 190 bhp instead of the XK120's 160"
    },
    {
     "ref": "rt-1951-test",
     "quote": "0-1320 ft (1/4 mi). . . . . . . . . .18.3"
    },
    {
     "ref": "wikipedia",
     "quote": "The magazine reported a top speed of 124.6 mph (200.5 km/h), acceleration from 0–60 mph (97 km/h) in 10.0 seconds"
    },
    {
     "ref": "wikipedia",
     "quote": "accelerated from 0–60 mph (97 km/h) in 8.7 seconds"
    }
   ]
  },
  {
   "section": "history",
   "claimText": "The registrar dates running changes by chassis number: heater and footwell vents from chassis 671493 for left-hand drive in November 1951, and a dual master cylinder from 672049 for left-hand-drive roadsters in April 1952; Hagerty dates the Salisbury 2HA rear axle from 1952.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "carnachan-cja",
    "hagerty-buyers-guide"
   ],
   "evidence": [
    {
     "ref": "carnachan-cja",
     "quote": "\"Air Conditioning\", that is, a heater, and footwell vents were installed in November 1951"
    },
    {
     "ref": "carnachan-cja",
     "quote": "(chassis # 671493 LHD, #660911 RHD)"
    },
    {
     "ref": "carnachan-cja",
     "quote": "In April, 1952 a tandem or dual master cylinder and self adjusting front brakes were used"
    },
    {
     "ref": "carnachan-cja",
     "quote": "( 672049 OTS LHD, 660980 OTS RHD, 679622 FHC LHD / 669003 FHC RHD)"
    },
    {
     "ref": "hagerty-buyers-guide",
     "quote": "From 1952 forward on, the XK120 used the Salisbury 2HA differential, which is generally stout."
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "Alloy bodies were aluminum skins laid over an ash frame; some early alloy cars had hood louvers and side-exit exhausts, and their inner panels were painted semi-gloss black regardless of body color.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "classicjaguar-alloy",
    "wikipedia"
   ],
   "evidence": [
    {
     "ref": "classicjaguar-alloy",
     "quote": "The aluminum skin is laid over the Ash frame."
    },
    {
     "ref": "classicjaguar-alloy",
     "quote": "Bonnet louvers were a feature of several (but not all) of the early alloy cars."
    },
    {
     "ref": "classicjaguar-alloy",
     "quote": "All inner panels and surfaces on the alloy 120s were painted semi-gloss black, regardless of body color."
    },
    {
     "ref": "wikipedia",
     "quote": "the first 242 cars were wood-framed open 2-seater bodies with aluminium panels."
    }
   ]
  },
  {
   "section": "problems",
   "claimText": "Hagerty flags rust on a car of thin steel sheetmetal over ash framework, in the fenders, around the headlight buckets, on the frame and in the door pillars, with paint bubbling on cars that look sound; door fit is the indicator of structural work to come, and a restorer's log of alloy chassis 670131 records a corroded trunk lid skin cut away and a repaired ash trunk lid frame.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "hagerty-buyers-guide",
    "classicjaguar-alloy"
   ],
   "evidence": [
    {
     "ref": "hagerty-buyers-guide",
     "quote": "In the fenders, around the headlight buckets, on the frame, in the door pillars, etc."
    },
    {
     "ref": "hagerty-buyers-guide",
     "quote": "If they won't, you've got a car that's going to require significant work in the near future."
    },
    {
     "ref": "classicjaguar-alloy",
     "quote": "Planishing the boot lid skin after cutting away the corroded lower section."
    },
    {
     "ref": "classicjaguar-alloy",
     "quote": "Ash boot lid frame has been repaired."
    },
    {
     "ref": "hagerty-buyers-guide",
     "quote": "you'll see examples (like the one in our video) with visible bubbling."
    },
    {
     "ref": "hagerty-buyers-guide",
     "quote": "made of thin steel sheetmetal over ash framework, you need to be aware of rust."
    }
   ]
  },
  {
   "section": "problems",
   "claimText": "Engines have commonly been rebuilt to cure front and rear main seal leaks and corroded head gaskets, cooling is a big issue to address, with an aluminum radiator and an electric fan named as the fixes, wiring is old even on cars rewired in the 1980s, and owners list overheating, electrical failures, weaker brakes, frozen wheel cylinders, differential play and a broken axle shaft among the faults of original cars.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "hagerty-buyers-guide",
    "jaglovers-restoration"
   ],
   "evidence": [
    {
     "ref": "hagerty-buyers-guide",
     "quote": "the engines have likely seen rebuilds and upgrades over the years to cure front and rear main seal leaks"
    },
    {
     "ref": "hagerty-buyers-guide",
     "quote": "The big issues to address—if they haven't been already—are related to cooling."
    },
    {
     "ref": "jaglovers-restoration",
     "quote": "the risk of overheating, electrical failures, less effective brakes, etc."
    },
    {
     "ref": "jaglovers-restoration",
     "quote": "Mine had three frozen wheel cylinders and needed new linings."
    },
    {
     "ref": "jaglovers-restoration",
     "quote": "once an axle shaft broke."
    },
    {
     "ref": "hagerty-buyers-guide",
     "quote": "Even cars that had their wiring sorted in the 1980s are going to be riding around with 35-year-old wiring."
    },
    {
     "ref": "hagerty-buyers-guide",
     "quote": "and corroded head gaskets."
    },
    {
     "ref": "hagerty-buyers-guide",
     "quote": "You'll need an aluminum radiator and an electric fan."
    }
   ]
  },
  {
   "section": "problems",
   "claimText": "The Moss four-speed has a straight-cut non-synchromesh first gear, many cars now have five-speed conversions, brakes are drums all around for the whole run, steering is unassisted recirculating ball that takes effort at low speed, and some rear axles have been replaced with Dana units.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "ttac-2009",
    "hagerty-buyers-guide"
   ],
   "evidence": [
    {
     "ref": "ttac-2009",
     "quote": "You spar endlessly with the Moss gearbox, noted for a straight-cut non-synchro 1st and barely-synchro everything else."
    },
    {
     "ref": "ttac-2009",
     "quote": "Leaf springs and recirculating-ball steering wrap up the whole rustic package of chassis vagueness."
    },
    {
     "ref": "hagerty-buyers-guide",
     "quote": "The dinner table-sized steering wheel helps, but it definitely still requires effort to turn unassisted at low speeds."
    },
    {
     "ref": "hagerty-buyers-guide",
     "quote": "A boatload of these cars have had five-speed conversions now, because the Moss 'boxes are getting old."
    },
    {
     "ref": "hagerty-buyers-guide",
     "quote": "Brakes were drums all around and would stay that way throughout the XK120 production run."
    },
    {
     "ref": "hagerty-buyers-guide",
     "quote": "Major parts are getting scarce, though, and it's not surprising to see that differential swapped with something from Dana."
    }
   ]
  },
  {
   "section": "market",
   "claimText": "As of November 2026 classic.com's market benchmark for the XK120 fixed head coupe is $78,325.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "classic-coupe"
   ],
   "evidence": [
    {
     "ref": "classic-coupe",
     "quote": "CMB $78,325"
    },
    {
     "ref": "classic-coupe",
     "quote": "The CLASSIC.COM Market Benchmark (CMB) represents a benchmark value for vehicles in this market"
    }
   ]
  },
  {
   "section": "market",
   "claimText": "Among the sold listings shown on classic.com's coupe page are a 1953 coupe at $99,000 in August 2025, a 1953 fixed head coupe at $67,000 in September 2025 in Columbus, Ohio, a 1953 SE fixed head coupe at $55,000 in June 2025 and a 1953 coupe at $38,500 in October 2025; whether these include buyer's premium is not stated.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "classic-coupe"
   ],
   "evidence": [
    {
     "ref": "classic-coupe",
     "quote": "$99,000"
    },
    {
     "ref": "classic-coupe",
     "quote": "Aug 7, 2025"
    },
    {
     "ref": "classic-coupe",
     "quote": "1953 Jaguar XK 120 FHC"
    },
    {
     "ref": "classic-coupe",
     "quote": "$67,000"
    },
    {
     "ref": "classic-coupe",
     "quote": "Columbus, Ohio, USA"
    },
    {
     "ref": "classic-coupe",
     "quote": "1953 Jaguar XK120 SE Fixed Head Coupe"
    },
    {
     "ref": "classic-coupe",
     "quote": "$55,000"
    },
    {
     "ref": "classic-coupe",
     "quote": "Jun 24, 2025"
    },
    {
     "ref": "classic-coupe",
     "quote": "1953 Jaguar XK120 Coupe"
    },
    {
     "ref": "classic-coupe",
     "quote": "$38,500"
    },
    {
     "ref": "classic-coupe",
     "quote": "Oct 15, 2025"
    }
   ]
  },
  {
   "section": "market",
   "claimText": "Among the sold listings shown on classic.com's 1954 model-year page, the lowest US-dollar figure is $24,000 for an SE/M project in November 2025 and the highest $115,000 for an SE/M in November 2025.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "classic-1954"
   ],
   "evidence": [
    {
     "ref": "classic-1954",
     "quote": "1954 Jaguar XK120 SE/M"
    },
    {
     "ref": "classic-1954",
     "quote": "Project"
    },
    {
     "ref": "classic-1954",
     "quote": "$24,000"
    },
    {
     "ref": "classic-1954",
     "quote": "Nov 14, 2025"
    },
    {
     "ref": "classic-1954",
     "quote": "$115,000"
    },
    {
     "ref": "classic-1954",
     "quote": "Nov 24, 2025"
    }
   ]
  },
  {
   "section": "market",
   "claimText": "At Mecum's Indianapolis sale on May 16, 2025 a 1953 XK120 roadster showing 47,000 miles, true mileage unknown and classed by classic.com as original or highly original, sold for $88,000.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-mecum-indy-2025"
   ],
   "evidence": [
    {
     "ref": "classic-mecum-indy-2025",
     "quote": "$88,000"
    },
    {
     "ref": "classic-mecum-indy-2025",
     "quote": "47k mi TMU"
    },
    {
     "ref": "classic-mecum-indy-2025",
     "quote": "Original & Highly Original"
    }
   ]
  },
  {
   "section": "market",
   "claimText": "RM Sotheby's Miami 2025 sale sold a preserved, never fully restored 1950 alloy roadster, one of 184 left-hand-drive alloy cars, for $89,600; the lot page as retrieved gives neither the month of the sale nor whether the figure includes buyer's premium.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "rm-mi25"
   ],
   "evidence": [
    {
     "ref": "rm-mi25",
     "quote": "$89,600 USD | Sold"
    },
    {
     "ref": "rm-mi25",
     "quote": "One of only 184 left-hand-drive alloy-bodied XK 120 Roadsters produced"
    },
    {
     "ref": "rm-mi25",
     "quote": "a preserved example that has never been fully restored"
    }
   ]
  },
  {
   "section": "market",
   "claimText": "Earlier results: RM Sotheby's sold a restored 1950 roadster for $104,500 at Hershey 2014 and an event-ready 1949 alloy roadster for $346,500 at Amelia Island 2015, and Gooding sold a restored SE roadster for $121,000 at Pebble Beach 2016; none of the lot pages as retrieved gives the month of the sale or states whether premium is included.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "rm-hf14",
    "rm-am15",
    "gooding-pb16"
   ],
   "evidence": [
    {
     "ref": "rm-hf14",
     "quote": "$104,500 USD | Sold"
    },
    {
     "ref": "rm-hf14",
     "quote": "has been virtually unused since its restoration, with fewer than 350 miles showing"
    },
    {
     "ref": "rm-am15",
     "quote": "$346,500 USD | Sold"
    },
    {
     "ref": "rm-am15",
     "quote": "The result is a stunningly beautiful, event-ready XK120 with a period-correct appearance and outstanding performance."
    },
    {
     "ref": "gooding-pb16",
     "quote": "SOLD $121,000"
    }
   ]
  }
 ]
};
