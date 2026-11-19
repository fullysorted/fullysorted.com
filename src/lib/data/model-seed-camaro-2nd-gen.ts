/**
 * Researched model draft - Chevrolet Camaro, second generation (1970-1981 US model years).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedCamaro2ndGen = {
 "slug": "chevrolet/camaro-2nd-gen",
 "make": "Chevrolet",
 "model": "Camaro",
 "generation": "Second generation",
 "generationCode": null,
 "trim": null,
 "yearStart": 1970,
 "yearEnd": 1981,
 "bodyStyles": [
  "2-door coupe (fixed roof), offered as Sport Coupe, Rally Sport, SS, Type LT and Z28 in various years"
 ],
 "engines": [
  "250 cubic-inch inline six: 155 hp gross for 1970, 145 hp for 1971, 110 hp net for 1972, 100 hp for 1973 and 1974, 105 hp for 1976",
  "307 cubic-inch V8: 200 hp gross for 1971, 130 hp net for 1972, 115 hp for 1973",
  "350 cubic-inch V8, two-barrel: 250 hp gross for 1970, 245 hp for 1971, 165 hp net for 1972",
  "350 cubic-inch V8, four-barrel: 300 hp gross for 1970, 270 hp in the 1971 SS, 200 hp net in the 1972 SS, 170 hp for 1977",
  "350 cubic-inch V8, carburetion not stated by the source: 165 hp for 1976",
  "350 cubic-inch LT-1 V8 (Z28): 360 hp gross for 1970, 330 hp gross (275 hp net) for 1971, 255 hp net and 280 lb-ft for 1972; the Z28 350 was rated at 245 hp net and 280 lb-ft for 1973 and 245 hp for 1974",
  "396 cubic-inch V8 (SS): 350 hp and 375 hp versions for 1970, both 415 lb-ft; 240 hp net for 1972",
  "350 cubic-inch four-barrel V8 (Z28): 185 hp and 280 lb-ft for 1977; 190 hp for 1980 outside California",
  "Two-barrel V8 for 1976: 145 hp (displacement not stated by the source)",
  "305 cubic-inch V8: 165 hp in the 1980 California Z28",
  "267 cubic-inch L39 V8: 120 hp and 215 lb-ft for 1980 (49-state)",
  "229 cubic-inch odd-fire V6 (late cars; output not stated by the sources consulted)"
 ],
 "productionTotal": null,
 "productionNotes": "No single production total is given here because the yearly figures do not agree. A Classic Industries production table and a Hagerty buyer's guide agree on most years but differ by a handful of cars in three: 1972 (68,651 against 68,671), 1979 (282,582 against 282,571) and 1981 (126,138 against 126,139). Classic Industries itself says its numbers are not exact. A third source, the Collector Car Market profile of the 1970-74 cars, gives a materially different count for the first two years: 117,604 for 1970 and 107,496 for 1971, against 124,901 and 114,630 in the other two, and 68,656 for 1972. None of the three says where its figures come from or whether a count is US-built cars, US sales or all production, so the difference is not resolved here. Adding the Classic Industries rows gives 1,936,879 cars for the generation; substituting Hagerty's three differing years gives 1,936,889. Both are this page's own arithmetic, not a published total. The Z28 counts are steadier: Autotrader's Z28 history and Collector Car Market agree on 8,733 for 1970, 4,862 for 1971 and 2,575 for 1972, a 1977 article on musclecarfacts.com agrees with Autotrader on 14,349, and eightiescars.com agrees on 45,137 for 1980. The 1973, 1974, 1978, 1979 and 1981 Z28 figures rest on Autotrader alone. No source consulted publishes Rally Sport production for any year. On the US-market questions: the car was built and sold for the US, but no Chevrolet press release, archived brochure text, NHTSA record or EPA record was retrieved for this page, so model-year facts rest on period road tests and specialist histories. The 1970 base price of $2,749 rests on a single specialist source; the 1977 and 1980 prices each rest on one source as well.",
 "notableTrims": [
  {
   "name": "1970 Z28 (often listed as 1970 1/2)",
   "note": "The first second-generation Z28: a 350 LT-1 rated at 360 hp gross, a $572.95 option package in 1970, and 8,733 built in a short sales year."
  },
  {
   "name": "Rally Sport, 1970-1973 split bumper",
   "note": "RPO Z22 gave the car separate bumperettes either side of the grille, the split-bumper look that ended after 1973. Split bumpers have been added to standard noses almost since the cars were new, so a split bumper alone does not establish an RS."
  },
  {
   "name": "SS, 1970-1972",
   "note": "The big-block car: 396 V8s rated at 350 hp and 375 hp for 1970, down to 240 hp net by 1972. Collector Car Market counts 8,377 SS cars for 1971 and 6,562 for 1972."
  },
  {
   "name": "1973-1974 Z28 and Type LT",
   "note": "The 1973 Z28 lost the LT-1's mechanical cam, aluminum intake and Holley carburetor and was rated at 245 hp net. Car and Driver tested a Type LT Z28 at 6.7 seconds to 60 mph. Big Z28 decals were available for 1974; 6,978 of the 13,802 Z28s built that year had them."
  },
  {
   "name": "1977 Z28 (mid-year return)",
   "note": "Back after two model years away, with a 185 hp four-barrel 350 and a Borg-Warner T-10 four-speed. 14,349 built, and the most expensive Camaro of 1977 at $5,170.06 base, per musclecarfacts.com."
  },
  {
   "name": "1978-1979 Z28",
   "note": "The volume Z28s: 54,907 for 1978 and 84,877 for 1979, the year Camaro production peaked."
  },
  {
   "name": "1980-1981 Z28",
   "note": "Functional fender scoops and a solenoid-driven cold-air flap in the hood scoop, 190 hp from the 350 outside California and a 165 hp 305 inside it. 45,137 built for 1980 and 43,272 for 1981."
  }
 ],
 "specs": {
  "layout": "Front engine, rear-wheel drive; a documented 1970 Z28 lot lists a 12-bolt Posi-Traction rear axle",
  "chassis": "Steel unit body; the rear frame rails are structural and built into the body",
  "engine": "Inline six and V8 range by year; the Z28 used the 350 LT-1 for 1970-1972, a 245 hp 350 for 1973-1974, and a four-barrel 350 from 1977, with a 305 in California for 1980",
  "power": "Z28: 360 hp gross (1970), 330 hp gross or 275 hp net (1971), 255 hp net (1972), 245 hp net (1973), 245 hp (1974), 185 hp (1977), 190 hp outside California (1980)",
  "torque": "Z28: 280 lb-ft for 1972, 1973 and 1977; 1970 396 V8s 415 lb-ft; 1980 267 V8 215 lb-ft. The 1970 LT-1 torque figure is not stated by the sources consulted",
  "transmission": "Muncie four-speed manual or three-speed automatic on 1970 Z28s; Borg-Warner T-10 four-speed on the 1977 Z28; four-speed manual still offered on the 1980 Z28",
  "weight": "3,660 lb for a 1980 Z28 four-speed test car, as eightiescars.com reports a Car and Driver test (single, secondhand source). No factory curb weight was found in the sources consulted",
  "acceleration": "0-60 mph in 6.5 seconds (1970 Z28 automatic, Car Life, May 1970); 6.7 seconds (1973 Type LT Z28, Car and Driver, September 1973); 8.5 seconds (1980 Z28 four-speed, Car and Driver, as reported by eightiescars.com)",
  "quarter_mile": "14.51 seconds at 98.79 mph (1970, Car Life); 15.2 seconds at 94.6 mph (1973, Car and Driver); 16.3 seconds at 83.1 mph (1977, Car and Driver)",
  "top_speed": "119 mph at 6,500 rpm (1970 Z28, Car Life); 105 mph (1977 Z28, Car and Driver)",
  "skidpad": "0.74 g for the 1977 Z28 against 0.80 g for the Pontiac Trans Am in the same Car and Driver test",
  "us_price_1970": "$2,749 base (single source); Z28 package $572.95; Car Life's Z28 test car $4,518",
  "us_price_1977": "$4,113.45 coupe base; Type LT $365 over base; Z28 $5,170.06 base (single source, musclecarfacts.com)",
  "us_price_1980": "$7,121 Z28 base (single source, eightiescars.com)",
  "assembly": "Norwood, Ohio is documented by the sources consulted; they do not list every plant",
  "production_z28": "8,733 (1970), 4,862 (1971), 2,575 (1972), 11,574 (1973), 13,802 (1974), none for 1975-1976, 14,349 (1977), 54,907 (1978), 84,877 (1979), 45,137 (1980), 43,272 (1981); 284,088 by this page's addition"
 },
 "summary": "The second-generation Camaro went on sale on February 26, 1970, late enough that the first cars are still cataloged as 1970 1/2 models, and stayed in production through the 1981 model year. It began as a muscle car: the 1970 Z28 carried a 350 LT-1 rated at 360 hp gross, and the Rally Sport package gave the car split front bumpers through 1973. Then came net ratings, a 1972 strike at the Norwood, Ohio plant, a 1974 facelift for federal bumper standards and two model years with no Z28 at all. The Z28 returned in the middle of the 1977 model year at 185 hp, and production that stood at 68,651 cars in 1972 by one count reached 282,582 in 1979, with 84,877 of them Z28s. Sources disagree on several yearly totals, most widely for 1970, where the counts are 124,901 and 117,604, so this page gives no single production total. As of November 2026 classic.com's page for the second-generation Z28 shows an average of $35,946 across 362 recorded sales; classic.com does not date that figure, and the listings shown on the page ran from March to May 2025. The first-generation Camaro and the 1970-81 Pontiac Firebird Trans Am have their own pages.",
 "history": "## Why it arrived late\n\nThe second-generation Camaro reached the market on February 26, 1970, which is why auction catalogs still list the first cars as 1970 1/2 models; Car Life's May 1970 Z28 test recorded that the car arrived in late February. For 1970 its engine grew from 302 to 350 cubic inches, and although Chevrolet was no longer as actively involved in Trans-Am racing, the 350 could be de-stroked to meet the series' 305 cubic-inch limit. The street LT-1 was rated at 360 hp gross. The Z28 package listed at $572.95 on a car with a base price of $2,749, and Car Life's automatic-transmission test car came to $4,518. That car ran 0-60 mph in 6.5 seconds, the quarter mile in 14.51 seconds at 98.79 mph and reached 119 mph at its 6,500 rpm limit.\n\n## Split bumpers and falling ratings, 1970-1973\n\nThe Rally Sport package, RPO Z22, gave the car its split front bumpers, separate bumperettes either side of the grille, and the split bumper ran through 1973. The SS carried the 396 V8, rated at 350 hp and 375 hp for 1970. Output then fell in steps. The 1971 Z28 lost two points of compression and 30 hp, to 330 hp gross or 275 hp net. For 1972 every engine was rated in SAE net horsepower and the Z28 showed 255 hp and 280 lb-ft. That year a strike shut the Norwood, Ohio line just as production started; thousands of half-built cars sat on the line for months, and federal safety standards required that they be destroyed. Production fell to what Collector Car Market calls an all-time low, and 2,575 Z28s were built. For 1973 the Z28 dropped to 245 hp net, having lost the LT-1's mechanical cam, aluminum intake and Holley carburetor, and Car and Driver's September 1973 test of a Type LT Z28 ran 0-60 mph in 6.7 seconds and the quarter mile in 15.2 seconds at 94.6 mph.\n\n## Five-mile-an-hour bumpers, 1974-1976\n\nFederal bumper standards forced a major facelift for 1974: an aluminum front bumper and a new fiberglass nose. The Z28 got bold graphics that year, and 6,978 of the 13,802 Z28s built for 1974 were ordered with the big decals, just before the designation disappeared. There was no Z28 for 1975 or 1976. The Rally Sport came back toward the end of 1975. Production for the three years was 151,008, 145,770 and 182,959.\n\n## The comeback, 1977-1979\n\nThe Z28 returned as a separate model in the middle of the 1977 model year with a four-barrel 350 rated at 185 hp and 280 lb-ft and a Borg-Warner T-10 four-speed. Car and Driver ran an early car against the Pontiac Trans Am for its April 1977 issue and recorded a quarter mile of 16.3 seconds at 83.1 mph, a top speed of 105 mph and 0.74 g on the skidpad against the Trans Am's 0.80 g, and found the Z28 the quicker car in a straight line. Chevrolet built 218,853 Camaros for 1977, 14,349 of them Z28s, and the Camaro outsold the Mustang that year for the first time. According to musclecarfacts.com, the single source for 1977 prices here, the Z28 base price was $5,170.06 against $4,113.45 for the coupe. For 1978 a range of exterior changes centered on the bumpers, the Rally Sport returned as its own trim level, and 54,907 Z28s were built. The 1979 model year was the generation's best: 282,582 Camaros by one count and 282,571 by another, with 84,877 Z28s.\n\n## The last two years, 1980-1981\n\nFor 1980 the Z28's fender scoops became functional and a solenoid-driven intake was added to the back of the hood scoop. Outside California the Z28 ran a 350 rated at 190 hp; California cars got a 305 rated at 165 hp. Lesser Camaros could carry a 267 cubic-inch V8 rated at 120 hp and 215 lb-ft. eightiescars.com gives the 1980 Z28 base price as $7,121 and reports a Car and Driver test in which a four-speed Z28 test car weighing 3,660 lb reached 60 mph in 8.5 seconds. Production fell to 152,005, of which 45,137 were Z28s, almost 30 percent. The Rally Sport left the lineup for 1981, the last year of the generation, when 126,138 Camaros were built by one count and 43,272 of them were Z28s.",
 "marketNotes": "As of November 2026 classic.com's market page for the second-generation Z28, covering model years 1970 to 1981, shows an average of $35,946 across 362 recorded sales, with a lowest sale of $4,256 and a top sale of $176,000; classic.com does not date those figures, and the listings shown on the page ran from March to May 2025. No benchmark value appeared on the page, so its summary figures may lag the current market. classic.com's 1970 Z28 page, as retrieved in November 2026, shows sold results that classic.com tags as original or highly original at $50,600 in December 2025, $53,900 in November 2025 and $55,500 in August 2025, and a 1970 RS Z28 in the same category at $89,500 in August 2025; cars tagged as modified sold for $22,000 to $43,250 over the same months. That page names no auction venue and does not say whether the figures include buyer's premium. The one individual lot page fetched for this research is older: RM Sotheby's sold a 1970 1/2 Z28 with the LT-1, a Muncie four-speed and a documented frame-off rotisserie restoration for $51,700 at its Auburn Fall 2017 sale, and the lot page does not say whether that figure includes premium. No classic.com figure for the non-Z28 coupes, the Rally Sport, the SS or the Berlinetta was retrieved, so this page quotes none for them.",
 "whatToLookFor": "Hagerty notes that split front bumpers have been added to standard noses almost since the cars were new, so a split bumper alone does not establish a Rally Sport. A 1970 Z28 offered at Barrett-Jackson Scottsdale in 2017 was described with Z/28 on its original trim tag, a Norwood, Ohio build, a certificate of authenticity from a known authenticator, its Protect-O-Plate, original keys and owner's manual, and a date-code-correct LT-1 350. RM Sotheby's 2017 lot was described as a frame-off rotisserie restoration of a solid original car with complete documentation of the restoration. The engine specification differs by year in ways that bear on originality: the 1970 LT-1 was rated at 360 hp gross and Car Life ran it to a 6,500 rpm limit, the 1973 Z28 had lost the mechanical cam, aluminum intake and Holley carburetor, and the 1977-1979 Z28 carried a 185 hp four-barrel 350. On a 1980-1981 Z28 the solenoid-driven hood intake and functional fender scoops are part of the factory specification, and a California car carried a 305 rather than the 350. Hagerty lists the windshield and back window surrounds, floors, trunks, quarters and doglegs, toe boards where rust hides behind body bracing, and frame rails. A Texas repair shop's guide singles out the rear frame rails on second-generation cars as structural and built into the body, and describes severe corrosion there as the point at which most experts walk away. As of November 2026 classic.com's 1970 Z28 results show cars it tags as modified at $22,000 to $43,250 against $50,600 to $55,500 for original and highly original cars.",
 "commonProblems": "The structural problem is rust. Hagerty's buyer's guide says second-generation Camaros were prone to it like all cars of the 1970s and 1980s, and lists rust around the windshield and back window, in the floors, trunks, quarters and doglegs, in toe boards where body bracing hides it from below, and in frame rails, which can be destroyed. A Texas repair shop's buyer's guide singles out the rear frame rails on second-generation cars, which are structural and built into the body, as the area where severe corrosion leads most experts to walk away from a car. Parts are the second problem, and they are worst for the least desirable engines: Hagerty notes that the 267 cubic-inch V8 and the odd-fire 229 cubic-inch V6 are hard to source, and that many 350 V8 cylinder heads of this era are regarded as the least desirable. Engine specification also varies by year in ways that matter to originality. The 1970 LT-1 was rated at 360 hp gross; the 1973 Z28 had already lost the mechanical cam, aluminum intake and Holley carburetor and was rated at 245 hp net; and no Z28 was built for 1975 or 1976. NHTSA recall data was not consulted for these model years, and no US repair cost figure from a source meeting this page's standard was found, so none is given.",
 "valueTrajectory": "As of November 2026 the 1970 Z28 results classic.com shows for original and highly original cars sit between $50,600 and $55,500, with a 1970 RS Z28 at $89,500, against a Z28 package that listed at $572.95 on a $2,749 car in 1970. classic.com's average of $35,946 for all second-generation Z28 sales takes in a production base that ran from 8,733 Z28s in 1970 to 84,877 in 1979; classic.com does not date that figure, and the listings shown on the page ran from March to May 2025. A Hagerty buyer's guide, which carries no date on the page, reports that the high-spec performance models have seen the most appreciation by far, and that 1981 Z28s rose 80 percent over four years while 1981 base and Berlinetta cars rose 24 percent. RM Sotheby's result of $51,700 for a restored 1970 1/2 Z28 at its Auburn Fall 2017 sale sits inside the range of the 2025 classic.com results for original 1970 Z28s, though a restored car and an original one are not a like-for-like comparison, and two data points are not a trend.",
 "overallConfidence": "medium",
 "sources": [
  {
   "ref": "classicindustries-production",
   "title": "1967-2002 Camaro Generations Production Numbers",
   "url": "https://news.classicindustries.com/1967-2002-camaro-generations-production-numbers",
   "publisher": "Classic Industries",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "US restoration-parts supplier's production table by model year: 124,901 (1970), 114,630 (1971), 68,651 (1972), 96,751 (1973), 151,008 (1974), 145,770 (1975), 182,959 (1976), 218,853 (1977), 272,631 (1978), 282,582 (1979), 152,005 (1980), 126,138 (1981). States its numbers are not exact. No Z28 or RS breakdown."
  },
  {
   "ref": "hagerty-buyers-guide",
   "title": "Your Handy 1970-81 Chevrolet Camaro Buyer's Guide",
   "url": "https://hagerty.com/media/?p=294490",
   "publisher": "Hagerty",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Hagerty editorial (not a valuation tool page), undated on the page. Year-by-year production (68,671 for 1972, 282,571 for 1979, 126,139 for 1981, other years matching Classic Industries), 1970 LT-1 360 hp and 396 at 350 or 375 hp, 1972 switch to net ratings, RS RPO Z22 split bumpers and last split bumper in 1973, 1974 and 1978 facelifts, Z28 absent 1975-76 and back 1977, Camaro outsold Mustang 1977, RS separate trim 1978 and dropped 1981, 1980 Z28 190 hp and L39 267 V8, rust areas, parts availability, and Andrew Newton's comment on Z28 appreciation."
  },
  {
   "ref": "collectorcarmarket-1970-74",
   "title": "Profile: 1970-74 Chevrolet Camaro",
   "url": "https://www.collectorcarmarket.com/profiles/chevrolet/profile-1970-74-chevrolet-camaro.html",
   "publisher": "Collector Car Market",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Introduction on February 26, 1970; base price $2,749; production 117,604 (1970), 107,496 (1971), 68,656 (1972); Z28 8,733, 4,862 and 2,575 for 1970-72; SS 8,377 (1971) and 6,562 (1972); 1970-74 engine ratings; 1972 Norwood strike and destroyed cars; 1974 facelift for 5 mph bumpers. Its value figures are undated and not used."
  },
  {
   "ref": "autotrader-z28-history",
   "title": "History of the Z28's First 25 Years",
   "url": "https://classics.autotrader.com/articles/history-of-the-z28-s-first-25-years",
   "publisher": "Autotrader Classics",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Z28 production for every second-generation year: 8,733, 4,862, 2,575, 11,574, 13,802 (6,978 with big decals), none 1975-76, 14,349, 54,907, 84,877, 45,137, 43,272. Z28 ratings 360, 330 gross/275 net, 255 net and 280 lb-ft, 245 net, 185 hp and 280 lb-ft, 190 hp (165 hp California 305). Trans-Am de-stroke note; mid-1977 return; 1980 functional scoops and cold-air hood."
  },
  {
   "ref": "carlife-1970-z28",
   "title": "Vintage Car Life Review: 1970 Chevrolet Camaro Z-28 - Close To A Mild-Mannered Race Car",
   "url": "https://www.curbsideclassic.com/vintage-reviews/1970s-vintage-reviews/gm-brands-1970s-vintage-reviews/vintage-car-life-review-1970-chevrolet-camaro-z-28-close-to-a-mild-mannered-race-car",
   "publisher": "Curbside Classic (reprint of Car Life, May 1970)",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "US period road test of a 1970 Z28 with three-speed automatic: test car $4,518, RPO Z28 package $572.95, engine grown from 302 to 350, factory rating 360 (gross), 6,500 rpm limit, 0-60 mph 6.5 seconds, quarter mile 14.51 seconds at 98.79 mph, top speed 119 mph, arrival in late February, RS bumperettes."
  },
  {
   "ref": "cd-1973-type-lt-z28",
   "title": "Vintage C/D Review: 1973 Camaro Type LT Z-28",
   "url": "https://www.curbsideclassic.com/vintage-reviews/vintage-cd-review-1973-camaro-type-lt-z-28-cheaper-than-the-mustang-ii-mach-1-but-twice-as-fast-and-good",
   "publisher": "Curbside Classic (reprint of Car and Driver, September 1973)",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "US period road test of a 1973 Type LT Z28: 1973 price $4,066 (as stated in the reprint's commentary), 245 hp 350, loss of the LT-1's mechanical cam, aluminum intake and Holley carburetor, 0-60 mph in 6.7 seconds, quarter mile 15.2 seconds at 94.6 mph, handling remarks."
  },
  {
   "ref": "cd-1977-z28-trans-am",
   "title": "Tested: 1977 Chevrolet Camaro Z/28 vs. Pontiac Firebird Trans-Am",
   "url": "https://autos.yahoo.com/1977-chevrolet-camaro-z-28-120000576.html",
   "publisher": "Car and Driver (archive, April 1977 issue, via Yahoo Autos)",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "US period comparison test of the returning Z28: pre-release estimate of about 180 hp, Borg-Warner T-10 four-speed, quarter mile 16.3 seconds at 83.1 mph, top speed 105 mph, skidpad 0.74 g against 0.80 g for the Trans Am, Z28 quicker in a straight line. No final price yet published at the time."
  },
  {
   "ref": "musclecarfacts-1977",
   "title": "1977 Camaro",
   "url": "https://www.musclecarfacts.com/chevrolet-camaro/114-1977-camaro",
   "publisher": "Muscle Car Facts",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "1977 model-year production 218,853 and 14,349 Z28s sold; Z28 reintroduced mid-1977 after a two-year absence; base prices $4,113.45 coupe and $5,170.06 Z28; Camaro outsold the Mustang in 1977 for the first time."
  },
  {
   "ref": "musclecarfacts-1977-brochure",
   "title": "A great road-hugging shape and a pure driving pleasure. 1977 Camaro sales brochure",
   "url": "https://www.musclecarfacts.com/?p=53",
   "publisher": "Muscle Car Facts",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Same publisher as musclecarfacts-1977 and treated as the same source (very likely the same article under another URL); not independent. Gives the 1977 US engine lineup (250 six 110 hp, 305 V8 145 hp, 350 V8 170 hp, Z28 350 185 hp) and the Type LT at $365 over base. Does not reproduce the brochure itself."
  },
  {
   "ref": "eightiescars-1980-z28",
   "title": "1980 Chevrolet Camaro Z28 coupe",
   "url": "https://eightiescars.com/2014/06/08/1980-chevrolet-camaro-z28/",
   "publisher": "eightiescars.com",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "1980 Z28 base price $7,121; LM1 350 at 190 (non-California); solenoid-driven intake on the hood scoop; 45,137 Z28s, almost 30 percent of 1980 production; Car and Driver figure of 3,660 lb and 0-60 mph in 8.5 seconds for a four-speed Z28, reported secondhand."
  },
  {
   "ref": "classic-com-z28-2nd-gen",
   "title": "Chevrolet Camaro Z28 - 2nd Gen Market",
   "url": "https://www.classic.com/m/chevrolet/camaro/2nd-gen/z28/?page=1",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As retrieved November 2026: average $35,946, 362 sales, lowest sale $4,256, top sale $176,000, model years 1970 to 1981; the page gives these figures no date, shows no benchmark, and its visible listings ran from March to May 2025."
  },
  {
   "ref": "classic-com-z28-1970",
   "title": "Chevrolet Camaro Z28 - 2nd Gen, 1970 Market",
   "url": "https://www.classic.com/m/chevrolet/camaro/2nd-gen/z28/year-1970?page=2",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As retrieved November 2026: 1970 Z28 sold results tagged original or highly original at $50,600 (December 2025), $53,900 (November 2025), $55,500 (August 2025) and an RS Z28 at $89,500 (August 2025); modified cars $22,000 to $43,250 (July to December 2025). Venues and buyer's premium not stated; summary statistics did not load."
  },
  {
   "ref": "rm-auburn-2017-z28",
   "title": "1970 1/2 Chevrolet Camaro Z28, Lot 5092, Auburn Fall 2017",
   "url": "https://rmsothebys.com/auctions/af17/lots/r0313-1970-chevrolet-camaro-z28/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Lot cataloged as a 1970 1/2 Z28 with LT1 360 hp 350, Muncie four-speed and 12-bolt Posi-Traction rear, frame-off rotisserie restoration of a solid original car with documentation; sold for $51,700 at Auburn Fall 2017, Auburn, Indiana. Buyer's premium treatment not stated."
  },
  {
   "ref": "barrett-jackson-2017-z28",
   "title": "1970 Chevrolet Camaro Z/28, Lot 1580, Scottsdale 2017",
   "url": "https://barrett-jackson.com/scottsdale-2017/docket/vehicle/1970-chevrolet-camaro-z28-201138",
   "publisher": "Barrett-Jackson",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "No-reserve 1970 Z28 lot described with Norwood, Ohio build, Z/28 on original trim tag, certificate of authenticity, Protect-O-Plate, original keys and owner's manual, and date-code-correct LT1 350/360 hp engine with four-speed. Sold; no price shown on the page, so no value is taken from it."
  },
  {
   "ref": "wilsonauto-buyers-guide",
   "title": "Classic Camaro Buyer's Guide: What to Look For",
   "url": "https://wilsonauto.com/classic-camaro-buyers-guide-what-to-look-for/",
   "publisher": "Wilson Auto Repair (Garland, Texas)",
   "sourceType": "specialist",
   "reliability": "low",
   "notes": "US repair shop guide; for second-generation cars it singles out the rear frame rails as structural and built into the body, with severe corrosion there a reason most experts walk away. Its VIN and clone guidance covers first-generation cars and is not used."
  }
 ],
 "claims": [
  {
   "section": "history",
   "claimText": "The second-generation Camaro went on sale on February 26, 1970, and Car Life's May 1970 test recorded that it arrived in late February; auction houses catalog early cars as 1970 1/2 models.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["collectorcarmarket-1970-74", "carlife-1970-z28", "rm-auburn-2017-z28"],
   "evidence": [
    { "ref": "collectorcarmarket-1970-74", "quote": "The wait had been well worth it when on February 26, 1970, the new Camaro entered the marketplace." },
    { "ref": "carlife-1970-z28", "quote": "it arrived in late February with a splash" },
    { "ref": "rm-auburn-2017-z28", "quote": "1970½ Chevrolet Camaro Z28" }
   ]
  },
  {
   "section": "specs",
   "claimText": "For 1970 the Z28 engine grew from 302 to 350 cubic inches, and the LT-1 350 was rated at 360 hp gross in the Camaro.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["carlife-1970-z28", "hagerty-buyers-guide", "autotrader-z28-history", "rm-auburn-2017-z28"],
   "evidence": [
    { "ref": "carlife-1970-z28", "quote": "For 1970, it grows from 302 to 350 cid." },
    { "ref": "hagerty-buyers-guide", "quote": "which featured the standard 360-horse LT1 V-8" },
    { "ref": "autotrader-z28-history", "quote": "It was rated at ten less horsepower (360 vs. 370)" },
    { "ref": "rm-auburn-2017-z28", "quote": "LT1 Turbo-Fire 360 hp, 350 cu. in. V-8 engine with dual exhaust" }
   ]
  },
  {
   "section": "history",
   "claimText": "Although Chevrolet was no longer as actively involved in Trans-Am racing, the 1970 Z28's 350 could be de-stroked to meet the series' 305 cubic-inch limit; single source.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["autotrader-z28-history"],
   "evidence": [
    { "ref": "autotrader-z28-history", "quote": "Even though Chevrolet wasn't as actively involved in Trans-Am racing, the Z28" },
    { "ref": "autotrader-z28-history", "quote": "The 350 could be de-stroked to meet the Trans-Am 305-cid limit" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 1970 Camaro's base price was $2,749 (single specialist source), the RPO Z28 package listed for $572.95, and Car Life's 1970 Z28 test car cost $4,518.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["collectorcarmarket-1970-74", "carlife-1970-z28"],
   "evidence": [
    { "ref": "collectorcarmarket-1970-74", "quote": "On top of the base $2,749 price tag" },
    { "ref": "carlife-1970-z28", "quote": "The RPO Z28 package listed for $572.95" },
    { "ref": "carlife-1970-z28", "quote": "The CL tester cost $4,518" }
   ]
  },
  {
   "section": "specs",
   "claimText": "Car Life's May 1970 test of a Z28 with the three-speed automatic recorded 0-60 mph in 6.5 seconds, the quarter mile in 14.51 seconds at 98.79 mph and a top speed of 119 mph at 6,500 rpm; these are one magazine's measured figures.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["carlife-1970-z28"],
   "evidence": [
    { "ref": "carlife-1970-z28", "quote": "0 to 60 mph: 6.5 sec." },
    { "ref": "carlife-1970-z28", "quote": "Standing ¼-mile: 14.51 sec. at 98.79 mph" },
    { "ref": "carlife-1970-z28", "quote": "Top speed: 119 mph at 6,500 rpm" },
    { "ref": "carlife-1970-z28", "quote": "The 1970 Z/28 had the same final drive, and a three-speed automatic transmission." }
   ]
  },
  {
   "section": "specs",
   "claimText": "For 1970 the base engine was a 250 cubic-inch inline six of 155 hp, a 350 V8 was offered at 300 hp, and the SS 396 came in 350 hp and 375 hp versions, both rated at 415 lb-ft.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["collectorcarmarket-1970-74", "hagerty-buyers-guide"],
   "evidence": [
    { "ref": "collectorcarmarket-1970-74", "quote": "While the base package came with a 250 cubic-inch 155 horsepower in-line six" },
    { "ref": "collectorcarmarket-1970-74", "quote": "Both of these brutes were rated at 415 foot-pounds of torque." },
    { "ref": "hagerty-buyers-guide", "quote": "At the top of the ladder were two versions of the Turbo Jet 396-cubic inch V-8, producing either 350 or 375 horsepower." }
   ]
  },
  {
   "section": "history",
   "claimText": "The Rally Sport package, RPO Z22, included the split front bumpers, separate bumperettes either side of the grille, and 1973 was the last year for the split bumper.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["hagerty-buyers-guide", "carlife-1970-z28"],
   "evidence": [
    { "ref": "hagerty-buyers-guide", "quote": "Rally Sport (RPO Z22) included Rally Sport emblems, the iconic split front bumpers" },
    { "ref": "hagerty-buyers-guide", "quote": "This marks the last year for the split bumper" },
    { "ref": "carlife-1970-z28", "quote": "separate 'bumperettes' and turn signal lamps on either side of the grille" }
   ]
  },
  {
   "section": "specs",
   "claimText": "Z28 output fell from 330 hp gross (275 hp net) in 1971, after a two-point compression drop that cost 30 hp, to 255 hp net and 280 lb-ft in 1972 and 245 hp net with 280 lb-ft in 1973.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["autotrader-z28-history", "collectorcarmarket-1970-74", "cd-1973-type-lt-z28"],
   "evidence": [
    { "ref": "autotrader-z28-history", "quote": "a two-point compression drop left behind 30 horsepower (330 gross hp/275 net hp)" },
    { "ref": "autotrader-z28-history", "quote": "Horsepower figures were now net, leaving the Z28 with 255 hp and 280 lb-ft of torque." },
    { "ref": "collectorcarmarket-1970-74", "quote": "Up the line the Z-28s very special 350 was pumping out 255 hp, and the LS-3 396 was rated at 240 hp." },
    { "ref": "cd-1973-type-lt-z28", "quote": "de-smogged 245 hp 350" },
    { "ref": "autotrader-z28-history", "quote": "Torque stayed the same for 1973 at 280 lb-ft, but net horsepower dropped another 10 to 245 hp." }
   ]
  },
  {
   "section": "history",
   "claimText": "A strike shut the Norwood, Ohio assembly line just as 1972 production started; thousands of half-built cars were stranded for months, and federal safety standards required that they be destroyed. Single specialist source.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["collectorcarmarket-1970-74"],
   "evidence": [
    { "ref": "collectorcarmarket-1970-74", "quote": "Just as production started, a major labor strike shut down the lines at the Norwood, Ohio, assembly plant" },
    { "ref": "collectorcarmarket-1970-74", "quote": "Literally thousands of half built cars were stranded on the lines for several months" },
    { "ref": "collectorcarmarket-1970-74", "quote": "Federal Safety standards mandated that these cars be destroyed." }
   ]
  },
  {
   "section": "specs",
   "claimText": "Car and Driver's September 1973 test of a Type LT Z28 recorded 0-60 mph in 6.7 seconds and the quarter mile in 15.2 seconds at 94.6 mph; the engine had lost the LT-1's mechanical cam, aluminum intake and Holley carburetor, and the reprint gives the car's 1973 price as $4,066.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["cd-1973-type-lt-z28"],
   "evidence": [
    { "ref": "cd-1973-type-lt-z28", "quote": "ripped off the 0-60 run in 6.7 seconds" },
    { "ref": "cd-1973-type-lt-z28", "quote": "ran the 1/4 mile in 15.2 sec. @94.6 mph" },
    { "ref": "cd-1973-type-lt-z28", "quote": "lost the aggressive mechanical cam, aluminum intake and big four barrel Holley carb of the legendary LT-1 version" },
    { "ref": "cd-1973-type-lt-z28", "quote": "That 1973 price of $4066 adjusts to $22,314 in 2015 dollars." }
   ]
  },
  {
   "section": "production",
   "claimText": "Z28 production was 8,733 for 1970, 4,862 for 1971 and 2,575 for 1972.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["autotrader-z28-history", "collectorcarmarket-1970-74"],
   "evidence": [
    { "ref": "autotrader-z28-history", "quote": "The shorter 1970 sales year resulted in 8,733 Z28s being produced." },
    { "ref": "autotrader-z28-history", "quote": "Z28 sales dropped to 4,862 units." },
    { "ref": "autotrader-z28-history", "quote": "Sales dropped by almost 50 percent from 1971, to 2,575 units." },
    { "ref": "collectorcarmarket-1970-74", "quote": "And just 8,733 of these were ordered as Z-28s" },
    { "ref": "collectorcarmarket-1970-74", "quote": "Out of this number just 4,862 Z-28s were produced for 1971" },
    { "ref": "collectorcarmarket-1970-74", "quote": "of which 2,575 were the still potent Z-28 coupes." }
   ]
  },
  {
   "section": "production",
   "claimText": "Total Camaro production for 1970 is given as 124,901 by Classic Industries and Hagerty and as 117,604 by Collector Car Market; for 1971 the figures are 114,630 and 107,496.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["classicindustries-production", "hagerty-buyers-guide", "collectorcarmarket-1970-74"],
   "conflictNote": "Classic Industries and Hagerty give 124,901 for 1970 and 114,630 for 1971. Collector Car Market gives 117,604 for 1970 and 107,496 for 1971. None of the three states its source or whether it counts US production, US sales or all production. Not resolved by any source consulted here.",
   "evidence": [
    { "ref": "classicindustries-production", "quote": "1970: 124,901" },
    { "ref": "classicindustries-production", "quote": "1971: 114,630" },
    { "ref": "hagerty-buyers-guide", "quote": "The vast majority of the 124,901 Camaros produced in 1970 featured a V-8" },
    { "ref": "hagerty-buyers-guide", "quote": "In 1971, Chevrolet produced a total of 114,630 Camaros" },
    { "ref": "collectorcarmarket-1970-74", "quote": "production fell from 1969's total of 230,799 to 117,604." },
    { "ref": "collectorcarmarket-1970-74", "quote": "Production for the Camaro slipped by about 10,000 units this year, to 107,496 units" }
   ]
  },
  {
   "section": "production",
   "claimText": "Total Camaro production for 1972 is given as 68,651 by Classic Industries, 68,671 by Hagerty and 68,656 by Collector Car Market, which calls it an all-time low.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["classicindustries-production", "hagerty-buyers-guide", "collectorcarmarket-1970-74"],
   "conflictNote": "Classic Industries states 68,651, Hagerty 68,671 and Collector Car Market 68,656 for 1972. The spread is small but no source explains its count. Not resolved by any source consulted here.",
   "evidence": [
    { "ref": "classicindustries-production", "quote": "1972: 68,651" },
    { "ref": "hagerty-buyers-guide", "quote": "Just 68,671 Camaros were produced, with only 4,821 six-cylinders, and the balance in V-8 production." },
    { "ref": "collectorcarmarket-1970-74", "quote": "Production of the Camaro fell to an all-time low this year with just 68,656 units produced" }
   ]
  },
  {
   "section": "production",
   "claimText": "Total Camaro production for 1979 is given as 282,582 by Classic Industries and 282,571 by Hagerty, which calls it the best-ever year for the Camaro; for 1981 the figures are 126,138 and 126,139.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["classicindustries-production", "hagerty-buyers-guide"],
   "conflictNote": "Classic Industries states 282,582 for 1979 and 126,138 for 1981; Hagerty states 282,571 and 126,139. Classic Industries notes its own figures are not exact. Not resolved by any source consulted here.",
   "evidence": [
    { "ref": "classicindustries-production", "quote": "1979: 282,582" },
    { "ref": "classicindustries-production", "quote": "1981: 126,138" },
    { "ref": "hagerty-buyers-guide", "quote": "It was the best-ever year for the Camaro with 282,571 produced" },
    { "ref": "hagerty-buyers-guide", "quote": "with 126,139 Camaros produced" }
   ]
  },
  {
   "section": "production",
   "claimText": "Classic Industries and Hagerty agree on Camaro production of 96,751 for 1973, 151,008 for 1974, 145,770 for 1975, 182,959 for 1976, 218,853 for 1977, 272,631 for 1978 and 152,005 for 1980.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["classicindustries-production", "hagerty-buyers-guide"],
   "evidence": [
    { "ref": "classicindustries-production", "quote": "1973: 96,751" },
    { "ref": "classicindustries-production", "quote": "1974: 151,008" },
    { "ref": "classicindustries-production", "quote": "1975: 145,770" },
    { "ref": "classicindustries-production", "quote": "1976: 182,959" },
    { "ref": "classicindustries-production", "quote": "1977: 218,853" },
    { "ref": "classicindustries-production", "quote": "1978: 272,631" },
    { "ref": "classicindustries-production", "quote": "1980: 152,005" },
    { "ref": "hagerty-buyers-guide", "quote": "Production picked up nearly a third to 96,751, with 93,137 of those cars shipped with one of the V-8s." },
    { "ref": "hagerty-buyers-guide", "quote": "Production skyrocketed in 1974 to 151,008, with 128,798 cars shipped with V-8s" },
    { "ref": "hagerty-buyers-guide", "quote": "Production held steady in 1975 to 145,770 units" },
    { "ref": "hagerty-buyers-guide", "quote": "Production numbers were way up again for 1976, with 182,959 total." },
    { "ref": "hagerty-buyers-guide", "quote": "Camaro numbers exploded to 218,853, outselling the Ford Mustang for the first time" },
    { "ref": "hagerty-buyers-guide", "quote": "with an astounding 272,631 total" },
    { "ref": "hagerty-buyers-guide", "quote": "Production dropped significantly in 1980, down to 152,005 units." }
   ]
  },
  {
   "section": "production",
   "claimText": "Adding the Classic Industries yearly rows gives 1,936,879 second-generation Camaros; substituting Hagerty's figures for the three years where it differs gives 1,936,889. Neither is a published total.",
   "confidence": "low",
   "status": "disputed",
   "sourceRefs": ["classicindustries-production", "hagerty-buyers-guide"],
   "conflictNote": "Both totals are this page's own addition of yearly rows. Classic Industries' rows sum to 1,936,879; Hagerty's rows, which differ for 1972, 1979 and 1981, sum to 1,936,889. Collector Car Market's lower 1970 and 1971 counts would reduce either total further. No published generation total was found. Not resolved by any source consulted here.",
   "computed": ["1,936,879", "1,936,889"],
   "evidence": [
    { "ref": "classicindustries-production", "quote": "These production numbers are not exact." },
    { "ref": "hagerty-buyers-guide", "quote": "It was the best-ever year for the Camaro with 282,571 produced" }
   ]
  },
  {
   "section": "production",
   "claimText": "The Super Sport package was carried by 8,377 Camaros for 1971 and 6,562 for 1972; single specialist source.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["collectorcarmarket-1970-74"],
   "evidence": [
    { "ref": "collectorcarmarket-1970-74", "quote": "Just 8,377 Camaros carried the SS package for 1971." },
    { "ref": "collectorcarmarket-1970-74", "quote": "6,562 Camaros received the Super-Sport package" }
   ]
  },
  {
   "section": "history",
   "claimText": "Federal bumper standards forced a major facelift for 1974, with an aluminum front bumper and a new fiberglass nose, to meet 5 mph bumper requirements.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["hagerty-buyers-guide", "collectorcarmarket-1970-74"],
   "evidence": [
    { "ref": "hagerty-buyers-guide", "quote": "Federal bumper standards forced a major facelift for the 1974 Camaro." },
    { "ref": "hagerty-buyers-guide", "quote": "Along with the new aluminum bumper up front came an all-new fiberglass nose" },
    { "ref": "collectorcarmarket-1970-74", "quote": "For 1974, a major front-end facelift was seen, mainly to accommodate new 5mph bumper requirements." }
   ]
  },
  {
   "section": "production",
   "claimText": "Autotrader counts 11,574 Z28s for 1973 and 13,802 for 1974, of which 6,978 were ordered with the big decals; these 1973 and 1974 Z28 figures rest on one source.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["autotrader-z28-history"],
   "evidence": [
    { "ref": "autotrader-z28-history", "quote": "That fact–and the Camaro's still-handsome styling–helped sales take a huge upsurge to 11,574." },
    { "ref": "autotrader-z28-history", "quote": "Approximately half of the 1974 Z28s (6,978 of 13,802) were ordered with the big decals." }
   ]
  },
  {
   "section": "history",
   "claimText": "There was no Z28 for 1975 and 1976; the Rally Sport re-emerged toward the end of 1975, and the Z28 returned as a separate model in the middle of the 1977 model year after a two-year absence.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["autotrader-z28-history", "musclecarfacts-1977", "hagerty-buyers-guide"],
   "evidence": [
    { "ref": "autotrader-z28-history", "quote": "There were no Z28s in 1975 and 1976." },
    { "ref": "musclecarfacts-1977", "quote": "After a two-year absence, the Z28 Camaro model was reintroduced in the middle of the 1977 production year." },
    { "ref": "hagerty-buyers-guide", "quote": "The Z28 was gone, though the Rally Sport re-emerged toward the end of the year" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 1977 Z28 used a four-barrel 350 rated at 185 hp and 280 lb-ft with a Borg-Warner T-10 four-speed; Car and Driver's pre-release April 1977 test expected about 180 hp, before final ratings were published.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["autotrader-z28-history", "cd-1977-z28-trans-am"],
   "evidence": [
    { "ref": "autotrader-z28-history", "quote": "The 1977 Z28 was powered by a 350-cid V-8 that was rated at 185 horsepower and 280 lb-ft of torque." },
    { "ref": "cd-1977-z28-trans-am", "quote": "The drivetrain is completed with a Borg-Warner T-10 four-speed gearbox of the same design used in the original Z/28 and on numerous Corvettes." },
    { "ref": "cd-1977-z28-trans-am", "quote": "It is expected to produce about 180 hp." }
   ]
  },
  {
   "section": "specs",
   "claimText": "In Car and Driver's April 1977 comparison the Z28 ran the quarter mile in 16.3 seconds at 83.1 mph, reached 105 mph and pulled 0.74 g on the skidpad against 0.80 g for the Trans Am, and was the quicker of the two in a straight line.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["cd-1977-z28-trans-am"],
   "evidence": [
    { "ref": "cd-1977-z28-trans-am", "quote": "It ran the quarter-mile in 16.3 seconds (83.1 mph)." },
    { "ref": "cd-1977-z28-trans-am", "quote": "our Z/28 produced a top speed of 105 mph." },
    { "ref": "cd-1977-z28-trans-am", "quote": "Our Trans-Am generated 0.80 G, while our Z/28 could do no better than 0.74 G." },
    { "ref": "cd-1977-z28-trans-am", "quote": "then the Z/28 is a winner in straight-ahead performance." }
   ]
  },
  {
   "section": "production",
   "claimText": "Chevrolet built 218,853 Camaros for 1977, of which 14,349 were Z28s, and the Camaro outsold the Mustang in 1977 for the first time.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["musclecarfacts-1977", "autotrader-z28-history", "hagerty-buyers-guide"],
   "evidence": [
    { "ref": "musclecarfacts-1977", "quote": "Total production for the model year was 218,853" },
    { "ref": "musclecarfacts-1977", "quote": "14,349 were sold." },
    { "ref": "autotrader-z28-history", "quote": "sales picked up at 1974 levels and actually ended slightly higher, with 14,349 units produced." },
    { "ref": "hagerty-buyers-guide", "quote": "Camaro numbers exploded to 218,853, outselling the Ford Mustang for the first time" }
   ]
  },
  {
   "section": "specs",
   "claimText": "For 1977 the coupe's base retail price was $4,113.45, the Type LT added $365, and the Z28 had the highest base price of any Camaro at $5,170.06; single source (musclecarfacts.com, two URLs treated as one article).",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["musclecarfacts-1977", "musclecarfacts-1977-brochure"],
   "evidence": [
    { "ref": "musclecarfacts-1977", "quote": "Base retail price was $4,113.45 for the coupe." },
    { "ref": "musclecarfacts-1977", "quote": "the Z28 had by far the highest base price of any Camaro at $5,170.06." },
    { "ref": "musclecarfacts-1977-brochure", "quote": "The LT added $365 to the base price." }
   ]
  },
  {
   "section": "specs",
   "claimText": "For 1977 the regular 350 V8 was rated at 170 hp and the Z28's 350 at 185 hp.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["musclecarfacts-1977-brochure", "autotrader-z28-history"],
   "evidence": [
    { "ref": "musclecarfacts-1977-brochure", "quote": "the 305 CID V8 and 170 for the 350 CID V8" },
    { "ref": "autotrader-z28-history", "quote": "The 1977 Z28 was powered by a 350-cid V-8 that was rated at 185 horsepower and 280 lb-ft of torque." }
   ]
  },
  {
   "section": "history",
   "claimText": "For 1978 a range of exterior changes centered on the bumpers and the Rally Sport re-emerged as a separate trim level; for 1981 the Rally Sport fell out of the lineup. Single source.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["hagerty-buyers-guide"],
   "evidence": [
    { "ref": "hagerty-buyers-guide", "quote": "A whole range of exterior changes occurred in 1978, largely centered around the bumpers." },
    { "ref": "hagerty-buyers-guide", "quote": "The Rally Sport also re-emerged as a separate trim level rather than an RPO package." },
    { "ref": "hagerty-buyers-guide", "quote": "For 1981, the Rally Sport fell out of the lineup." }
   ]
  },
  {
   "section": "production",
   "claimText": "Z28 production was 54,907 for 1978, 84,877 for 1979, 45,137 for 1980, almost 30 percent of that year's Camaros, and 43,272 for 1981.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["autotrader-z28-history", "eightiescars-1980-z28"],
   "evidence": [
    { "ref": "autotrader-z28-history", "quote": "The public liked the revised styling, as sales skyrocketed to 54,907 units–an all-time record." },
    { "ref": "autotrader-z28-history", "quote": "Sales jumped to 84,877." },
    { "ref": "autotrader-z28-history", "quote": "Sales dropped to 45,137." },
    { "ref": "autotrader-z28-history", "quote": "Sales declined slightly to 43,272 units." },
    { "ref": "eightiescars-1980-z28", "quote": "Chevrolet sold 45,137 Z28s in the 1980 model year, making them almost 30% of total Camaro production." }
   ]
  },
  {
   "section": "production",
   "claimText": "Adding Autotrader's yearly Z28 figures gives 284,088 second-generation Z28s; this is this page's own arithmetic, and five of the ten years rest on Autotrader alone.",
   "confidence": "low",
   "status": "verified",
   "sourceRefs": ["autotrader-z28-history"],
   "computed": ["284,088"],
   "evidence": [
    { "ref": "autotrader-z28-history", "quote": "The shorter 1970 sales year resulted in 8,733 Z28s being produced." },
    { "ref": "autotrader-z28-history", "quote": "Sales jumped to 84,877." }
   ]
  },
  {
   "section": "specs",
   "claimText": "For 1980 the Z28's fender scoops became functional and a solenoid-driven intake was added to the hood scoop; the 350 was rated at 190 hp outside California, where a 165 hp 305 was used.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["autotrader-z28-history", "eightiescars-1980-z28", "hagerty-buyers-guide"],
   "evidence": [
    { "ref": "autotrader-z28-history", "quote": "For 1980, the Z28's fender scoops became functional, as did a new cold air hood scoop." },
    { "ref": "autotrader-z28-history", "quote": "The 190-hp 350 V-8 was still the standard engine, except in California where a 165 hp 305 was used." },
    { "ref": "eightiescars-1980-z28", "quote": "For 1980, Chevrolet engineers added a solenoid-driven air intake to the back of the redesigned hood scoop." },
    { "ref": "hagerty-buyers-guide", "quote": "and even slightly more horsepower, too, at 190hp, provided you didn’t live in California" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 1980 Z28 base price was $7,121, and Car and Driver's four-speed Z28 weighed 3,660 lb and reached 60 mph in 8.5 seconds; single source, reporting the magazine's figures secondhand.",
   "confidence": "low",
   "status": "verified",
   "sourceRefs": ["eightiescars-1980-z28"],
   "evidence": [
    { "ref": "eightiescars-1980-z28", "quote": "The Z28's base price was $7,121" },
    { "ref": "eightiescars-1980-z28", "quote": "Car and Driver managed to get the 3,660-pound Z28 with the four-speed from 0-60 in 8.5 seconds" }
   ]
  },
  {
   "section": "problems",
   "claimText": "Second-generation Camaros were prone to rust around the windshield and back window and in floors, trunks, quarters, doglegs, toe boards hidden by body bracing and frame rails, and the rear frame rails are structural and built into the body.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["hagerty-buyers-guide", "wilsonauto-buyers-guide"],
   "evidence": [
    { "ref": "hagerty-buyers-guide", "quote": "from rust around the windshield and backlight to floors, trunks, quarters and doglegs" },
    { "ref": "hagerty-buyers-guide", "quote": "Areas like toe boards hold rust that you can’t see underneath because of body bracing." },
    { "ref": "hagerty-buyers-guide", "quote": "Frame rails can also be destroyed." },
    { "ref": "wilsonauto-buyers-guide", "quote": "They're structural and built into the body, so if they're severely corroded, most experts will tell you to walk away." }
   ]
  },
  {
   "section": "problems",
   "claimText": "Parts for the less desirable engines, the 267 cubic-inch V8 and the odd-fire 229 cubic-inch V6, are hard to source, and the 1980 L39 267 V8 was rated at 120 hp and 215 lb-ft; single source.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["hagerty-buyers-guide"],
   "evidence": [
    { "ref": "hagerty-buyers-guide", "quote": "For less desirable engines like the 267-cubic inch V-8 and the odd-fire 229-cubic inch V-6 are going to be hard to source." },
    { "ref": "hagerty-buyers-guide", "quote": "a 49-state L39 267-cubic inch V-8 good for 120 hp and 215 lb-ft. of torque" },
    { "ref": "hagerty-buyers-guide", "quote": "Many of the 350-cu.in. V-8 heads that came out of this era are commonly referred to as the least desirable" }
   ]
  },
  {
   "section": "problems",
   "claimText": "Split front bumpers have been added to standard noses almost since the cars were new, and a documented 1970 Z28 offered at Barrett-Jackson Scottsdale in 2017 was identified by a Norwood, Ohio build, Z/28 on its original trim tag, a certificate of authenticity and its Protect-O-Plate.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["hagerty-buyers-guide", "barrett-jackson-2017-z28"],
   "evidence": [
    { "ref": "hagerty-buyers-guide", "quote": "people have been adding split bumpers onto standard noses almost since the get-go" },
    { "ref": "barrett-jackson-2017-z28", "quote": "A Norwood, OH-built car, the Z/28 is on the original Trim Tag." },
    { "ref": "barrett-jackson-2017-z28", "quote": "Documentation includes a set of original keys, Protect-O-Plate, owner's manual, and Kodak photo of the car in the 1970s." },
    { "ref": "barrett-jackson-2017-z28", "quote": "date-code correct 1970 LT1 350/360hp V8 engine" }
   ]
  },
  {
   "section": "specs",
   "claimText": "For 1971 the 250 six was rated at 145 hp, the 307 V8 at 200 hp, the two-barrel 350 at 245 hp (down from 250 hp for 1970) and the SS four-barrel 350 at 270 hp; for 1970 the four-barrel 350 was rated at 300 hp.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["collectorcarmarket-1970-74", "hagerty-buyers-guide"],
   "evidence": [
    { "ref": "collectorcarmarket-1970-74", "quote": "The entry-level six saw its horsepower reduced to 145, while the base 307 V8 managed to hold steady at 200 hp." },
    { "ref": "collectorcarmarket-1970-74", "quote": "The $314.00 Super Sport package featured the 350-4V V8, now showing 270 hp" },
    { "ref": "collectorcarmarket-1970-74", "quote": "Here the buyer received a 350 cid V8 tuned to a healthy 300 horses" },
    { "ref": "hagerty-buyers-guide", "quote": "The two-barrel-equipped 350-cubic inch engine dropped to 245hp from 250hp." }
   ]
  },
  {
   "section": "specs",
   "claimText": "On 1972 net ratings the 250 six made 110 hp, the 307 V8 130 hp, the two-barrel 350 165 hp, the SS four-barrel 350 200 hp and the 396 240 hp.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["collectorcarmarket-1970-74", "hagerty-buyers-guide"],
   "evidence": [
    { "ref": "collectorcarmarket-1970-74", "quote": "The base six cylinder engine was now set at 110hp, while the base 307cid V8 showed just 130 hp." },
    { "ref": "collectorcarmarket-1970-74", "quote": "The optional 350-2V engine was rated at 165hp, while the Super Sport's 350-4V V8 now weighed in at 200hp." },
    { "ref": "collectorcarmarket-1970-74", "quote": "Up the line the Z-28s very special 350 was pumping out 255 hp, and the LS-3 396 was rated at 240 hp." },
    { "ref": "hagerty-buyers-guide", "quote": "The 250-cubic inch six was rated at 110hp, the 307 V-8 at 130hp" }
   ]
  },
  {
   "section": "specs",
   "claimText": "For 1973 the six was rated at 100 hp and the 307 at 115 hp; for 1974 the six stayed at 100 hp and the Z28 350 was rated at 245 hp; for 1976 the six made 105 hp, a two-barrel V8 145 hp and the 350 165 hp.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["hagerty-buyers-guide", "collectorcarmarket-1970-74"],
   "evidence": [
    { "ref": "hagerty-buyers-guide", "quote": "Power ratings fell again: To 100hp for the six, 115hp for the 307-cu.in. V-8" },
    { "ref": "hagerty-buyers-guide", "quote": "The 145-hp two-barrel split the difference between the 105 hp inline six and the 165hp of the 350." },
    { "ref": "collectorcarmarket-1970-74", "quote": "Under the hood the base 250 cid in-line six was now rated at an even 100hp" },
    { "ref": "collectorcarmarket-1970-74", "quote": "the Z-28 was again offered this year with the special 245hp 350 V8" }
   ]
  },
  {
   "section": "market",
   "claimText": "As of November 2026 classic.com's second-generation Z28 page shows, undated on the page, an average of $35,946 across 362 sales, a lowest sale of $4,256 and a top sale of $176,000, for model years 1970 to 1981.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["classic-com-z28-2nd-gen"],
   "evidence": [
    { "ref": "classic-com-z28-2nd-gen", "quote": "Avg $35,946" },
    { "ref": "classic-com-z28-2nd-gen", "quote": "Sales Count 362" },
    { "ref": "classic-com-z28-2nd-gen", "quote": "Lowest Sale $4,256" },
    { "ref": "classic-com-z28-2nd-gen", "quote": "Top Sale $176,000" },
    { "ref": "classic-com-z28-2nd-gen", "quote": "Model years for Chevrolet Camaro Z28 - 2nd Gen (1970 to 1981)" }
   ]
  },
  {
   "section": "market",
   "claimText": "classic.com's 1970 Z28 page, as retrieved in November 2026, shows original or highly original cars sold at $50,600 in December 2025, $53,900 in November 2025 and $55,500 in August 2025, a 1970 RS Z28 at $89,500 in August 2025, and modified cars at $22,000 to $43,250; venues and buyer's premium are not stated.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["classic-com-z28-1970"],
   "evidence": [
    { "ref": "classic-com-z28-1970", "quote": "$50,600" },
    { "ref": "classic-com-z28-1970", "quote": "$53,900" },
    { "ref": "classic-com-z28-1970", "quote": "$55,500" },
    { "ref": "classic-com-z28-1970", "quote": "$89,500" },
    { "ref": "classic-com-z28-1970", "quote": "$22,000" },
    { "ref": "classic-com-z28-1970", "quote": "$43,250" }
   ]
  },
  {
   "section": "market",
   "claimText": "RM Sotheby's sold a 1970 1/2 Z28 with the LT-1, a Muncie four-speed and a documented frame-off rotisserie restoration for $51,700 at its Auburn Fall 2017 sale; the lot page does not say whether the figure includes buyer's premium.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["rm-auburn-2017-z28"],
   "evidence": [
    { "ref": "rm-auburn-2017-z28", "quote": "$51,700 USD | Sold" },
    { "ref": "rm-auburn-2017-z28", "quote": "Frame-off rotisserie restoration with fine results using a solid original car" },
    { "ref": "rm-auburn-2017-z28", "quote": "Muncie four-speed manual transmission and 12-bolt Posi-Traction rear end" }
   ]
  },
  {
   "section": "market",
   "claimText": "A Hagerty buyer's guide, undated on the page, reports that the high-spec performance models have seen the most appreciation, with 1981 Z28s up 80 percent over four years against 24 percent for 1981 base and Berlinetta cars.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["hagerty-buyers-guide"],
   "evidence": [
    { "ref": "hagerty-buyers-guide", "quote": "it’s the high-spec performance models that have seen the most appreciation by far" },
    { "ref": "hagerty-buyers-guide", "quote": "while 1981 Z28s are up 80% over the past four years, 1981 base and Berlinetta models are up just 24%." }
   ]
  }
 ]
};
