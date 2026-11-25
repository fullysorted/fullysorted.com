/**
 * Researched model draft - Chevrolet Corvair (1960-1969 US model years).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedCorvair = {
 "slug": "chevrolet/corvair",
 "make": "Chevrolet",
 "model": "Corvair",
 "generation": "Early and late model",
 "generationCode": null,
 "trim": null,
 "yearStart": 1960,
 "yearEnd": 1969,
 "bodyStyles": [
  "Early model (1960-1964): 2-door coupe and 4-door sedan in 500, 700 and Monza series",
  "Early model Monza convertible (from 1962 in the production tables)",
  "Monza Spyder coupe and convertible (turbocharged option package 1962-1963, listed as its own model for 1964)",
  "Late model (1965-1969): 2-door coupe and 4-door sedan in 500 and Monza series, Monza convertible",
  "Corsa coupe and convertible (1965-1966 only)"
 ],
 "engines": [
  "140 cu in (2,287 cc) rear-mounted horizontally opposed six, 80 gross hp at launch for the 1960 model year",
  "164 cu in six for 1964: 95 hp (gross) base and 110 hp optional",
  "Turbocharged Spyder six, 150 hp, introduced for the 1962 model year and listed through 1964",
  "164 cu in six for the 1965 Corsa: 140 hp non-turbo, or 180 hp turbocharged"
 ],
 "productionTotal": null,
 "productionNotes": "Two club-side tables give the Corvair's US production, and once their scope is matched they agree on all but two rows. No Chevrolet or General Motors document was retrieved for this page. The Corvair Society of America's production page (corvair.org) counts the whole Corvair line: coupes, sedans and convertibles, plus the 500, 700 and Monza station wagons and the Corvair 95 Greenbrier, Corvan, Rampside and Loadside. It states that its totals include Completely Knocked Down (CKD) kits made in the USA and Canada and shipped to GM Overseas Operations plants. On that basis it lists 1,789,384 for the US, 50,055 for GM Canada and 1,839,439 for the whole Corvair, so the larger figure is the US total plus GM Canada, not a separate worldwide census. A Hagerty article gives the same 1,839,439 as the number sold. corvaircorsa.com, which credits its figures to a book by Tony Fiore, counts passenger coupes, sedans and convertibles only. For 1960 and 1966 through 1969 the two tables give identical year totals. For 1961 through 1965 the corvair.org totals are larger, and its wagon and Corvair 95 rows account for the difference: 73,599 cars in 1961, 42,047 in 1962, 30,109 in 1963, 15,199 in 1964 and 1,528 Greenbriers in 1965. Two passenger-car rows still disagree. The 1961 500 coupe is 16,857 on corvair.org and 16,628 on corvaircorsa.com, a difference of 229, and the 1963 700 coupe is 12,378 on corvair.org and 12,738 on corvaircorsa.com, a difference of 360. Neither page explains either row. No production total is given in the header field because the one agreed figure, 1,839,439, counts wagons, vans, pickups and CKD kits along with the passenger cars, and no source gives a passenger-car-only total. The Spyder and Corsa turbo counts come from corvaircorsa.com: 9,468 turbocharged Spyders for 1962, 19,099 for 1963, and 9,157 turbocharged Corsas across 1965 and 1966, with no second source found; both tables agree on 6,480 Spyder coupes and 4,761 Spyder convertibles for 1964. On US prices, the only figures documented are Car Life's $2,736 for its 1964 convertible test car and HowStuffWorks' statement that a 500 or Monza rarely cost more than $2,750; no Chevrolet list price for any model year was retrieved.",
 "notableTrims": [
  {
   "name": "Monza (1960-1969)",
   "note": "The Monza coupe is the largest single row in the 1961 production table: corvaircorsa.com lists 109,945 Monza coupes for 1961 alone, against 16,628 base 500 coupes, and the Monza convertible joins the tables for 1962."
  },
  {
   "name": "Monza Spyder (1962-1964)",
   "note": "The turbocharged option, 150 hp. 9,468 built for 1962 and 19,099 for 1963 as an option package; for 1964 it is a separate model, 6,480 coupes and 4,761 convertibles."
  },
  {
   "name": "Corsa (1965-1966)",
   "note": "The top late-model series, 140 hp in standard form or 180 hp turbocharged. Two model years only; Chevrolet dropped the Corsa for 1967. corvaircorsa.com lists 20,291 coupes and 8,353 convertibles for 1965."
  },
  {
   "name": "Corsa turbo (180 hp)",
   "note": "9,157 Corsas carried the turbocharged engine across 1965 and 1966, per corvaircorsa.com. Hagerty writes that a turbo car could not take advantage of its boost until third or fourth gear."
  },
  {
   "name": "1964 model year",
   "note": "Last of the early cars and the year the swing-axle rear got a transverse rear leaf spring, softer rear coils and a front anti-roll bar, plus the 164 cu in engine. Car Life's 1964 test ran 0-60 mph in 14.0 seconds."
  },
  {
   "name": "1969 Monza convertible",
   "note": "corvaircorsa.com lists 521 built in the final year, out of a 1969 run of 6,000 cars in three models."
  }
 ],
 "specs": {
  "layout": "Rear-mounted horizontally opposed six, rear-wheel drive",
  "chassis": "Swing-arm rear suspension using the axle halfshafts as control arms (1960-1964); fully independent rear with upper and lower control arms from 1965",
  "engine": "Horizontally opposed six: 140 cu in (2,287 cc) at launch, 164 cu in from 1964",
  "power": "80 gross hp (1960); 95 hp and 110 hp (1964); 140 hp (1965 Corsa); 150 hp turbo (Spyder, 1962-1964); 180 hp turbo (Corsa, 1965-1966)",
  "torque": "Not documented in the sources retrieved for this page",
  "transmission": "Floor-shift four-speed manual (documented on a 1965 Corsa turbo); Powerglide automatic offered",
  "weight": "Not documented in the sources retrieved for this page",
  "acceleration": "0-60 mph in 14.0 seconds, Car Life's 1964 test (car's engine, gearbox and body not stated on the page fetched); 15.5 seconds for a 1961 Monza with the 98 hp engine and four-speed",
  "quarter_mile": "19.5 seconds at 70 mph (Car Life, 1964 car), against 20.5 seconds at 67 mph before",
  "front_suspension_1964": "Front anti-roll bar added for 1964, with a transverse rear leaf spring and softer rear coil springs",
  "rear_suspension_1965": "Fully independent, upper and lower control arms with the uppers doubling as axle halfshafts, described as a near copy of the Corvette Sting Ray layout",
  "turbo_option": "Spyder 150 hp (1962-1964); Corsa 180 hp (1965-1966)",
  "us_price": "$2,736 for Car Life's 1964 convertible; a 500 or Monza rarely cost more than $2,750 (HowStuffWorks); no Chevrolet list price retrieved",
  "nhtsa_1972_finding": "1960-1963 handling does not result in an abnormal potential for loss of control or rollover (NHTSA, July 1972)",
  "us_production": "corvair.org: 1,789,384 US and 1,839,439 including GM Canada, both whole-line totals with wagons, Corvair 95 vans and pickups and CKD kits; no passenger-car-only total published"
 },
 "summary": "The Corvair is Chevrolet's compact of the 1960s, built around a rear-mounted horizontally opposed six. It ran for ten US model years, 1960 through 1969, in two shapes: the early car of 1960-1964 with swing-arm rear suspension, and the late car of 1965-1969 with a fully independent rear that HowStuffWorks calls a virtual copy of the Corvette Sting Ray's. The Monza coupe was the largest single production row for 1961, the turbocharged 150 hp Spyder option arrived for 1962, and the 180 hp Corsa turbo followed for 1965. Ralph Nader's 1965 book Unsafe at Any Speed called the early car a one-car accident. In July 1972 the National Highway Traffic Safety Administration published its own evaluation and found that the 1960-1963 car's handling does not result in an abnormal potential for loss of control or rollover. The Corvair Society of America counts 1,789,384 Corvairs of every type for the US, wagons and Corvair 95 vans and pickups included, and 1,839,439 with GM Canada's production added.",
 "history": "## Why the Corvair exists\n\nAte Up With Motor's history traces the car to Ed Cole, who, emboldened by the success of the 1955 Chevrolet, began pondering a smaller companion model. The 1960 model year car had a rear-mounted horizontally opposed six of 140 cu in (2,287 cc) and 80 gross hp, with swing-arm rear suspension that used the axle halfshafts as control arms. Road & Track wrote that the Corvair positively understeers under any and all conditions up to the point of total loss of adhesion. The Corvair was also originally designed to have only an optional gasoline-fired heater, and Curbside Classic writes that a Powerglide and heater-equipped Corvair was pushing right up against the Biscayne on price.\n\n## Monza and Spyder\n\nThe Monza coupe was the largest single production row for 1961: corvaircorsa.com lists 109,945 Monza coupes for 1961, against 16,628 base 500 coupes. For the 1962 model year Chevrolet added the turbocharged 150 hp Spyder option, and Hagerty notes that the turbo engines fed boost only through a relatively small Carter carburetor. corvaircorsa.com counts 9,468 turbocharged Spyders for 1962 and 19,099 for 1963. The suspension was revised in stages. A 1962-1963 option kit added a front anti-roll bar, and for 1964 Chevrolet fitted a transverse rear leaf spring, softened the rear coil springs and added a front anti-roll bar, alongside a 164 cu in engine of 95 hp, or 110 hp optional. Car Life's 1964 test reached 60 mph in 14.0 seconds, against 15.5 seconds for a 1961 Monza with the 98 hp engine and four-speed.\n\n## The 1965 car\n\nThe second-generation Corvair arrived for 1965 with a fully independent rear suspension: upper and lower control arms, the uppers doubling as axle halfshafts, a layout HowStuffWorks calls a virtual copy of the Corvette Sting Ray's. The Corsa replaced the Spyder as the top series, at 140 hp or 180 hp turbocharged. Volume exceeded 200,000 for 1965 on the strength of the new styling, and Hagerty notes the irony that the second-generation car already had its fully independent rear for 1965, the same year the criticism of the first one was published.\n\n## Nader and the 1972 finding\n\nRalph Nader's 1965 book Unsafe at Any Speed called the early car a one-car accident. In July 1972 NHTSA published its Evaluation of the 1960-1963 Corvair Handling and Stability. It ran input-response tests on six cars, a 1962 Falcon, a 1962 Volkswagen, a 1963 Corvair, a 1963 Renault, a 1960 Valiant and a 1967 Corvair, and concluded that the early car's handling does not result in an abnormal potential for loss of control or rollover, that it is at least as good as some contemporary cars foreign and domestic, and that its rollover rate is comparable to other light domestic cars. Ate Up With Motor, revisiting the report, argues that its scope effectively limited the applicability of the results.\n\n## The end\n\nSales fell by more than half for 1966 and the Corsa was gone for 1967. By the end of 1968 the Monza coupe managed 6,807, and the 1969 car was down to three models, two coupes and a convertible, 6,000 cars in all. HowStuffWorks and Ate Up With Motor agree that Nader did not kill it: the decision to let the second-generation car die had already been made, and in 1974 Chevrolet executives told the historian Michael Lamm that Nader's charges had no real effect on the car's fate.",
 "marketNotes": "As of November 2026 classic.com's first-generation (1960-1964) Corvair market page shows an average of $13,479 across 216 recorded sales, a lowest sale of $250 and a top sale of $47,300; the page names neither the low nor the top car, so neither is attributed here. As of the same month, classic.com's main Corvair page listed 31 first-generation and 16 second-generation cars for sale, which are asking prices and are not used as values. No classic.com average for the 1965-1969 car alone was returned, and the first-generation page does not break its average down by body, series or engine. The one individual auction result fetched is older: lot 1053, a 1965 Corsa turbo convertible with the 180 hp engine and floor-shift four-speed, sold for $16,775 at RM Sotheby's Auburn Spring 2015 sale in Auburn, Indiana, reported to run and drive well; the lot page does not say whether that figure includes buyer's premium. Separately, and not as a current value, an undated Hagerty article comparing 1966 Corsas put the 180 hp turbo's premium over a carbureted car at $1,200 in Excellent (#2) condition and $500 in Good (#3) condition; the text retrieved carries no date for those figures. No Bring a Trailer or Hagerty valuation data is quoted, because those pages could not be retrieved.",
 "whatToLookFor": "The first split is early car or late car. A 1960-1964 car has the swing-arm rear; a 1965-1969 car has the fully independent rear with upper and lower control arms. Within the early cars, a 1964 is the one with the transverse rear leaf spring, softer rear coils and front anti-roll bar from the factory, and the 164 cu in engine. On a 1962-1963 car, the front anti-roll bar and rear straps of the option suspension kit are the parts that separate an optioned car from a base one. A Spyder or Corsa turbo is identified by its turbocharged engine, fed through a relatively small Carter carburetor. corvaircorsa.com counts 9,468 for 1962, 19,099 for 1963, and 9,157 Corsa turbos across 1965 and 1966. Hagerty writes that a turbo car is known for not being able to take advantage of its boost until third or fourth gear. On the carbureted late cars, the engine runs rough or not at all when the carburetors deliver unequal fuel to each side, and sediment from the fuel tank in the carburetors causes uneven running. iFixit attributes short crisp clicks to maladjusted hydraulic lifters. The engine-heat system can carry oil odors from leaking pushrod tubes into the cabin, and it had at least one recall for carbon monoxide entering the passenger compartment. The Corvair was originally designed around an optional gasoline-fired heater. corvaircorsa.com lists 521 Monza convertibles for 1969, and both tables list 4,761 Spyder convertibles for 1964.",
 "commonProblems": "On cars with the engine-heat heater system, oil leaks can reach the cabin through the heat. Curbside Classic's history of the car's heating systems describes the engine-heat setup as one that could pass carbon monoxide into the passenger compartment as well as oil odors, notes the system had at least one recall for carbon monoxide, and describes the heat as smelling oily from the invariably leaking pushrod tubes. The 1960-1961 cars were designed around an optional gasoline-fired heater that was expensive and cut fuel economy. iFixit's troubleshooting guide for the 1965-1969 car lists rough running when the carburetors do not deliver equal fuel to each side of the engine, sediment from the gas tank building up in the carburetors, dieseling from advanced timing or a lean mixture, clicking from maladjusted hydraulic lifters, and loose steering that calls for steering box lash adjustment once the bushings are known good. A clunk or knock, the same guide says, usually means a rod or main bearing and a rebuild. On turbocharged cars Hagerty writes that boost was limited to what air could be pulled through the relatively small Carter carburetor, and that a turbo car cannot take advantage of its boost until third or fourth gear. NHTSA recall data for 1960s Corvairs was not retrieved for this page, and no US shop labor costs were found in the sources consulted.",
 "valueTrajectory": "As of November 2026 classic.com's first-generation Corvair data gives an average of $13,479 over 216 recorded sales, with a lowest sale of $250 and a top sale of $47,300; the page does not say which cars those were. No classic.com average for the 1965-1969 car alone was returned. The one auction lot fetched, a 1965 Corsa turbo convertible sold for $16,775 at RM Sotheby's Auburn Spring sale, dates from 2015 and is not a current value. Against period prices, HowStuffWorks says a 500 or Monza rarely cost more than $2,750 new, and Car Life's 1964 convertible test car cost $2,736. What the sources fetched do not supply is a trend line. No dated series of values was retrieved, so this page does not say whether Corvair prices are rising or falling, and none of the sources splits the classic.com average by series, engine or body. The production tables do separate the variants: 9,468 Spyders for 1962, 9,157 Corsa turbos over two years and 521 Monza convertibles in 1969, against 109,945 Monza coupes in 1961 alone.",
 "overallConfidence": "medium",
 "sources": [
  {
   "ref": "nhtsa-1972-record",
   "title": "Evaluation of the 1960-1963 Corvair Handling and Stability",
   "url": "https://rosap.ntl.bts.gov/view/dot/92396",
   "publisher": "National Highway Traffic Safety Administration, via the National Transportation Library (ROSA P)",
   "sourceType": "government",
   "reliability": "high",
   "notes": "Catalog record for the NHTSA report: title Evaluation of the 1960-1963 Corvair Handling and Stability, dated July 1, 1972, corporate author US Department of Transportation, NHTSA. The abstract states scope only, not findings."
  },
  {
   "ref": "nhtsa-1972-report",
   "title": "Evaluation of the 1960-1963 Corvair Handling and Stability (full text PDF)",
   "url": "https://rosap.ntl.bts.gov/view/dot/92396/dot_92396_DS1.pdf",
   "publisher": "National Highway Traffic Safety Administration",
   "sourceType": "government",
   "reliability": "high",
   "notes": "Report summary: 1960-1963 handling does not result in an abnormal potential for loss of control or rollover; at least as good as some contemporary vehicles foreign and domestic; rollover rate comparable to other light domestic cars; input-response tests on six cars (1962 Falcon, 1962 Volkswagen, 1963 Corvair, 1963 Renault, 1960 Valiant, 1967 Corvair)."
  },
  {
   "ref": "corvair-org-us-production",
   "title": "Production Numbers (US)",
   "url": "https://stagingj4.corvair.org/home/history-and-preservation/corvair-production/us-production",
   "publisher": "Corvair Society of America (CORSA)",
   "sourceType": "registry",
   "reliability": "high",
   "notes": "Club production table for the whole Corvair line, including 500, 700 and Monza wagons and Corvair 95 Greenbrier, Corvan, Rampside and Loadside rows; totals include CKD kits made in the USA and Canada. US year totals 250,007 (1960) to 6,000 (1969); Total US 1,789,384; GM Canada 50,055; Total Corvair 1,839,439; 1961 500 coupe 16,857; 1963 700 coupe 12,378; 1964 Spyder coupe 6,480 and convertible 4,761."
  },
  {
   "ref": "corvaircorsa-prod",
   "title": "Chevrolet Corvair Production Figures 1960-1969",
   "url": "https://corvaircorsa.com/prod.html",
   "publisher": "corvaircorsa.com",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "US production by series and body, credited to a book by Tony Fiore: Spyder turbo 9,468 (1962) and 19,099 (1963); 1964 Spyder coupe 6,480 and convertible 4,761; Corsa 1965 coupe 20,291 and convertible 8,353; 9,157 Corsa turbos 1965-1966; 1961 500 coupe 16,628; 1969 rows 2,762, 2,717, 521. No body columns beyond coupes, sedans and convertibles."
  },
  {
   "ref": "hagerty-1965-69",
   "title": "Look out world, 1965-69 Chevy Corvairs are rising fast",
   "url": "https://www.hagerty.com/media/?p=7676",
   "publisher": "Hagerty Media",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Gives 1,839,439 Corvairs sold over the 10-year run and states the second-generation car had a fully independent rear suspension for 1965. Its #3 values carry no date in the retrieved text and are not used."
  },
  {
   "ref": "hagerty-carb-turbo",
   "title": "Carbureted or Turbocharged: Which Corvair is right for you?",
   "url": "https://www.hagerty.com/media/?p=307858",
   "publisher": "Hagerty Media",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "1966 Corsa comparison: 180 hp turbo carries a $1200 premium in #2 condition and $500 in #3 (undated in retrieved text, not a current value); 150 hp turbo introduced for 1962 as the Spyder option; boost limited by the relatively small Carter carb; turbo cars cannot use boost until third or fourth gear."
  },
  {
   "ref": "ateup-1972-report",
   "title": "Reconsidering the 1972 NHTSA Report on the Corvair",
   "url": "https://ateupwithmotor.com/model-histories/compact-economy-cars/reconsidering-the-1972-nhtsa-report-on-the-corvair/",
   "publisher": "Ate Up With Motor",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Nader's 1965 book Unsafe at Any Speed and the one-car accident phrase; report first published July 1972; the 1962-1963 option kit's front anti-roll bar; the author's view that the report's scope limited the applicability of its results."
  },
  {
   "ref": "ateup-history-1",
   "title": "Contrary Compact: The Life and Death of the Chevrolet Corvair",
   "url": "https://ateupwithmotor.com/model-histories/chevrolet-corvair-history/",
   "publisher": "Ate Up With Motor",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Origin of the program with Ed Cole after the 1955 Chevrolet; launch engine 140 cu in (2,287 cc) and 80 gross hp; swing-arm rear suspension using the axle halfshafts as control arms."
  },
  {
   "ref": "ateup-history-5",
   "title": "Contrary Compact: The Life and Death of the Chevrolet Corvair (page 5)",
   "url": "https://ateupwithmotor.com/model-histories/chevrolet-corvair-history/5/",
   "publisher": "Ate Up With Motor",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "End of the car: GM had already decided to let the second-generation car die before Nader's book; Chevrolet executives told historian Michael Lamm Nader's charges had no real effect on the car's fate; total of 1.8 million units."
  },
  {
   "ref": "hsw-1965-69",
   "title": "1965, 1966, 1967, 1968, 1969 Chevrolet Corvair Corsa and Monza",
   "url": "https://auto.howstuffworks.com/1965-1969-chevrolet-corvair-corsa-monza.htm",
   "publisher": "HowStuffWorks (Consumer Guide Auto editors)",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "1965 Corsa 180 hp turbo and 140 hp non-turbo; 1965 rear suspension a virtual copy of the Corvette Sting Ray's; volume over 200,000 in 1965, down by more than half the next year; Corsa dropped for 1967; 1968 Monza coupe 6,807; 500 at little more than $2,000 and a 500 or Monza rarely over $2,750; Nader did not kill the car."
  },
  {
   "ref": "curbside-1964-carlife",
   "title": "Vintage Review: 1964 Corvair Monza 110 HP 4-Speed",
   "url": "https://www.curbsideclassic.com/vintage-reviews/vintage-review-1964-corvair-monza-110-hp-4-speed-the-poor-mans-porsche-is-now-even-more-of-one-and-finally-an-explanation-for-its-exoneration-by-nhtsa",
   "publisher": "Curbside Classic",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Reprint and commentary on a period Car Life road test of a 1964 car: 164 cu in engine, 95/110/150 hp versions, 1964 transverse rear leaf spring, softer rear coils and front anti-roll bar, 0-60 mph 15.5 to 14.0 seconds, quarter mile 19.5 seconds at 70 mph, $2736 for the convertible."
  },
  {
   "ref": "curbside-1960-rt",
   "title": "Vintage Motor Life Review: 1960 Chevrolet Corvair",
   "url": "https://curbsideclassic.com/vintage-reviews/vintage-motor-life-review-1960-chevrolet-corvair-part-1-of-a-three-car-comparison",
   "publisher": "Curbside Classic",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Period US road test reprints for the 1960 car; Road & Track's handling verdict that the Corvair positively understeers up to the point of total loss of adhesion. Test figures were not returned verbatim and are not used."
  },
  {
   "ref": "curbside-heater",
   "title": "Automotive History: Corvair Cold Comfort - Heating Optional 1960-1961",
   "url": "https://curbsideclassic.com/automotive-histories/automotive-history-corvair-cold-comfort-heating-optional-1960-1961-your-choice-of-gasoline-or-engine-heat",
   "publisher": "Curbside Classic",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Optional gasoline-fired heater at launch; Powerglide and heater-equipped car priced against the Biscayne; engine-heat system could pass carbon monoxide and oil odors into the cabin, had at least one CO recall, and smelled of leaking pushrod tubes."
  },
  {
   "ref": "ifixit-1965-69",
   "title": "1965-1969 Chevrolet Corvair Troubleshooting",
   "url": "https://www.ifixit.com/Wiki/1965-1969_Chevrolet_Corvair_Troubleshooting",
   "publisher": "iFixit",
   "sourceType": "specialist",
   "reliability": "low",
   "notes": "Owner-maintained troubleshooting guide for the late car: unequal carburetor fuel delivery, tank sediment in carburetors, dieseling, lifter clicks, bearing knock, steering box lash adjustment."
  },
  {
   "ref": "classic-1st-gen",
   "title": "Chevrolet Corvair - 1st Gen (1960 to 1964) Market",
   "url": "https://www.classic.com/m/chevrolet/corvair/1st-gen",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of November 2026: average $13,479, sales count 216, lowest sale $250, top sale $47,300; the page names neither the lowest nor the top car."
  },
  {
   "ref": "classic-corvair",
   "title": "Chevrolet Corvair Market",
   "url": "https://www.classic.com/m/chevrolet/corvair",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "As of November 2026: listing counts only, 31 first-generation (1960 to 1964) and 16 second-generation (1965 to 1969) cars for sale; no benchmark or sale range shown."
  },
  {
   "ref": "rm-1965-corsa-turbo",
   "title": "1965 Chevrolet Corvair Corsa Turbo",
   "url": "https://rmsothebys.com/auctions/as15/lots/r0111-1965-chevrolet-corvair-corsa-turbo",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Lot 1053, Auburn Spring 2015, Auburn, Indiana, RM Sotheby's: 1965 Corsa turbo convertible listed as sold, $16,775 (page does not say whether buyer's premium is included); 164 cid, 180 hp turbocharged six; floor-shift four-speed; reported to run and drive well; 8,353 similar convertibles built in 1965."
  }
 ],
 "claims": [
  {
   "section": "history",
   "claimText": "NHTSA's July 1972 Evaluation of the 1960-1963 Corvair Handling and Stability concluded that the early car's handling does not result in an abnormal potential for loss of control or rollover.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "nhtsa-1972-report",
    "ateup-1972-report",
    "nhtsa-1972-record"
   ],
   "evidence": [
    {
     "ref": "nhtsa-1972-report",
     "quote": "does not result in an abnormal potential for loss of control or rollover"
    },
    {
     "ref": "ateup-1972-report",
     "quote": "The NHTSA report, first published July 1972, is entitled"
    },
    {
     "ref": "nhtsa-1972-record",
     "quote": "1960-1963 Corvair handling and stability"
    }
   ]
  },
  {
   "section": "history",
   "claimText": "NHTSA found the 1960-1963 Corvair at least as good as some contemporary vehicles foreign and domestic, with a rollover rate comparable to other light domestic cars, after input-response tests on six cars including a 1962 Falcon, a 1962 Volkswagen and a 1960 Valiant.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "nhtsa-1972-report"
   ],
   "evidence": [
    {
     "ref": "nhtsa-1972-report",
     "quote": "it is at least as good as the performance of some contemporary vehicles both foreign and domestic"
    },
    {
     "ref": "nhtsa-1972-report",
     "quote": "the rollover rate of the 1960-1963 Corvair is comparable to other light domestic cars"
    },
    {
     "ref": "nhtsa-1972-report",
     "quote": "These vehicles were a 1962 Falcon, 1962 Volkswagen, 1963 Corvair, 1963 Renault, 1960 Valiant, and a 1967 Corvair."
    }
   ]
  },
  {
   "section": "history",
   "claimText": "Ralph Nader attacked the early Corvair as a one-car accident in his 1965 book Unsafe at Any Speed, and Ate Up With Motor argues the 1972 report's scope limited the applicability of its results.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "ateup-1972-report"
   ],
   "evidence": [
    {
     "ref": "ateup-1972-report",
     "quote": "consumer advocate Ralph Nader famously lambasted it as a “‘one-car’ accident” in his 1965 book Unsafe at Any Speed"
    },
    {
     "ref": "ateup-1972-report",
     "quote": "I believe it also effectively limited the applicability of the results"
    }
   ]
  },
  {
   "section": "history",
   "claimText": "Nader did not end the Corvair: GM had already decided to let the second-generation car die, and in 1974 Chevrolet executives told historian Michael Lamm that Nader's charges had no real effect on its fate.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "ateup-history-5",
    "hsw-1965-69"
   ],
   "evidence": [
    {
     "ref": "ateup-history-5",
     "quote": "In 1974, Chevrolet executives told historian Michael Lamm that Nader's charges had no real effect on the Corvair's fate."
    },
    {
     "ref": "ateup-history-5",
     "quote": "let the second-generation car die a natural death."
    },
    {
     "ref": "hsw-1965-69",
     "quote": "Contrary to myth, the Corvair was not scrubbed because of Ralph Nader's attacks."
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The launch engine displaced 140 cu in (2,287 cc) and made 80 gross hp, and the early car used swing-arm rear suspension with the axle halfshafts as control arms.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "ateup-history-1"
   ],
   "evidence": [
    {
     "ref": "ateup-history-1",
     "quote": "initially had a displacement of 140 cu. in. (2,287 cc), making 80 gross horsepower (60 kW)"
    },
    {
     "ref": "ateup-history-1",
     "quote": "so the rear-engine car had swing-arm rear suspension, using the axle halfshafts as control arms."
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "For 1964 the engine grew to 164 cu in, offered at 95 hp and 110 hp with the turbocharged 150 hp version, and Chevrolet added a front anti-roll bar and a transverse rear leaf spring while softening the rear coil springs.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "curbside-1964-carlife",
    "ateup-1972-report"
   ],
   "evidence": [
    {
     "ref": "curbside-1964-carlife",
     "quote": "the 1964 versions now had 164 cubic inches (2.7 liters)"
    },
    {
     "ref": "curbside-1964-carlife",
     "quote": "starting on the left with the base 95 hp (gross) version"
    },
    {
     "ref": "curbside-1964-carlife",
     "quote": "The middle chart is for the popular 110 hp optional version"
    },
    {
     "ref": "curbside-1964-carlife",
     "quote": "And on the right is the turbocharged 150 hp version as used in the Monza Spyder."
    },
    {
     "ref": "curbside-1964-carlife",
     "quote": "adding an anti-roll bar in front and a transverse rear leaf spring"
    },
    {
     "ref": "curbside-1964-carlife",
     "quote": "along with softening the rear coil springs"
    },
    {
     "ref": "ateup-1972-report",
     "quote": "the optional suspension equipment offered in 1962–1963 or the improved 1964 design"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "Car Life's 1964 test went from 0-60 mph in 14.0 seconds, against 15.5 seconds for a 1961 Monza with the 98 hp engine and four-speed, and ran the quarter mile in 19.5 seconds at 70 mph; the page does not state the 1964 test car's engine, gearbox or body, and this is a single period test.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "curbside-1964-carlife"
   ],
   "evidence": [
    {
     "ref": "curbside-1964-carlife",
     "quote": "the reduction of the 0-60 sprint from 15.5 seconds to 14.0 is meaningful"
    },
    {
     "ref": "curbside-1964-carlife",
     "quote": "a '61 Monza with the uprated 98 hp version and 4-speed"
    },
    {
     "ref": "curbside-1964-carlife",
     "quote": "the improved 1/4 mile time and speed from 20.5 seconds @67 mph to 19.5 @70 mph."
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 1965 car received a fully independent rear suspension with upper and lower control arms, the uppers doubling as axle halfshafts, described by HowStuffWorks as a virtual copy of the Corvette Sting Ray's.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "hsw-1965-69",
    "hagerty-1965-69"
   ],
   "evidence": [
    {
     "ref": "hsw-1965-69",
     "quote": "a virtual copy of the Corvette Sting Ray's: upper and lower control arms, the uppers doubling as axle half-shafts"
    },
    {
     "ref": "hagerty-1965-69",
     "quote": "Ironically, the second-gen Corvair had already received a fully independent rear suspension for 1965"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 150 hp turbocharged engine arrived for the 1962 model year as the Spyder option, and the 1965 Corsa offered 140 hp or, turbocharged, 180 hp.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "hagerty-carb-turbo",
    "hsw-1965-69",
    "rm-1965-corsa-turbo"
   ],
   "evidence": [
    {
     "ref": "hagerty-carb-turbo",
     "quote": "The 150-hp turbo was introduced in the 1962 model year as the new \"Spyder\" option."
    },
    {
     "ref": "hsw-1965-69",
     "quote": "a new non-turbo with 140 horsepower"
    },
    {
     "ref": "rm-1965-corsa-turbo",
     "quote": "powered by a 164-cid, 180-hp horizontally-opposed six-cylinder turbocharged engine"
    }
   ]
  },
  {
   "section": "production",
   "claimText": "corvaircorsa.com counts 9,468 turbocharged Spyders for 1962 and 19,099 for 1963, and corvaircorsa.com and corvair.org agree on 6,480 Spyder coupes and 4,761 Spyder convertibles for 1964; the 1962-1963 counts are single-source.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "corvaircorsa-prod",
    "corvair-org-us-production"
   ],
   "evidence": [
    {
     "ref": "corvaircorsa-prod",
     "quote": "In 1962, 9,468 Monzas were built with the 150 horsepower, turbocharged Spyder package."
    },
    {
     "ref": "corvaircorsa-prod",
     "quote": "In 1963, the number increased to 19,099."
    },
    {
     "ref": "corvaircorsa-prod",
     "quote": "1964 | 22,968 | - | - | 16,295 | 88,440 | 21,926 | 31,045 | 6,480 | 4,761"
    },
    {
     "ref": "corvair-org-us-production",
     "quote": "Spyder Coupe | 627 | 6,480"
    },
    {
     "ref": "corvair-org-us-production",
     "quote": "Spyder Convertible | 667 | 4,761"
    }
   ]
  },
  {
   "section": "production",
   "claimText": "corvaircorsa.com records 9,157 Corsas with the 180 hp turbocharged engine across 1965 and 1966, out of 20,291 Corsa coupes and 8,353 Corsa convertibles for 1965, and RM Sotheby's gives the same 8,353 convertibles; the turbo count is single-source.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "corvaircorsa-prod",
    "rm-1965-corsa-turbo",
    "corvair-org-us-production"
   ],
   "evidence": [
    {
     "ref": "corvaircorsa-prod",
     "quote": "In the 1965 and 1966 model years, 9,157 Corsa models were equipped with the 180 horsepower turbocharged engine option."
    },
    {
     "ref": "corvair-org-us-production",
     "quote": "Corsa Coupe | 10737 | 20,291"
    },
    {
     "ref": "rm-1965-corsa-turbo",
     "quote": "In 1965, only 8,353 similar convertibles were built by Chevrolet."
    }
   ]
  },
  {
   "section": "production",
   "claimText": "corvair.org lists 1,789,384 Corvairs for the US, 50,055 for GM Canada and 1,839,439 in total, and states its totals include CKD kits; these are whole-line figures including wagons and Corvair 95 vans and pickups, and Hagerty gives the same 1,839,439 as sold.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "corvair-org-us-production",
    "hagerty-1965-69",
    "ateup-history-5"
   ],
   "evidence": [
    {
     "ref": "corvair-org-us-production",
     "quote": "Total US | 1,789,384"
    },
    {
     "ref": "corvair-org-us-production",
     "quote": "GM Canada | 50,055"
    },
    {
     "ref": "corvair-org-us-production",
     "quote": "Total Corvair (World-wide) | 1,839,439"
    },
    {
     "ref": "corvair-org-us-production",
     "quote": "The totals shown here include not only fully-assembled vehicles but also Completely Knocked Down (CKD) kits"
    },
    {
     "ref": "hagerty-1965-69",
     "quote": "Although the Corvair had a solid 10-year run (1,839,439 were sold)"
    },
    {
     "ref": "ateup-history-5",
     "quote": "1.8 million units"
    }
   ]
  },
  {
   "section": "production",
   "claimText": "corvair.org's larger 1961-1965 year totals are explained by rows corvaircorsa.com does not carry: station wagons and the Corvair 95 Greenbrier, Corvan, Rampside and Loadside, which add 73,599 for 1961, 42,047 for 1962, 30,109 for 1963, 15,199 for 1964 and 1,528 Greenbriers for 1965.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "corvair-org-us-production",
    "corvaircorsa-prod"
   ],
   "computed": [
    "73,599",
    "42,047",
    "30,109",
    "15,199"
   ],
   "evidence": [
    {
     "ref": "corvair-org-us-production",
     "quote": "500 Wagon | 535 | 5,591"
    },
    {
     "ref": "corvair-org-us-production",
     "quote": "700 Wagon | 735 | 20,451"
    },
    {
     "ref": "corvair-org-us-production",
     "quote": "Greenbrier | R1206 | 15,806"
    },
    {
     "ref": "corvair-org-us-production",
     "quote": "Corvan | R1205 | 18,489"
    },
    {
     "ref": "corvair-org-us-production",
     "quote": "Rampside | R1254 | 10,787"
    },
    {
     "ref": "corvair-org-us-production",
     "quote": "Loadside | R1244 | 2,475"
    },
    {
     "ref": "corvair-org-us-production",
     "quote": "700 Wagon | 735 | 3,716"
    },
    {
     "ref": "corvair-org-us-production",
     "quote": "Monza Wagon | 935 | 2,362"
    },
    {
     "ref": "corvair-org-us-production",
     "quote": "Greenbrier | R1206 | 13,491"
    },
    {
     "ref": "corvair-org-us-production",
     "quote": "Corvan | R1205 | 18,007"
    },
    {
     "ref": "corvair-org-us-production",
     "quote": "Rampside | R1254 | 4,102"
    },
    {
     "ref": "corvair-org-us-production",
     "quote": "Loadside | R1244 | 369"
    },
    {
     "ref": "corvair-org-us-production",
     "quote": "Greenbrier | R1206 | 11,993"
    },
    {
     "ref": "corvair-org-us-production",
     "quote": "Corvan | R1205 | 15,514"
    },
    {
     "ref": "corvair-org-us-production",
     "quote": "Rampside | R1254 | 2,602"
    },
    {
     "ref": "corvair-org-us-production",
     "quote": "Greenbrier | R1206 | 8,147"
    },
    {
     "ref": "corvair-org-us-production",
     "quote": "Corvan | R1205 | 6,201"
    },
    {
     "ref": "corvair-org-us-production",
     "quote": "Rampside | R1254 | 851"
    },
    {
     "ref": "corvair-org-us-production",
     "quote": "Greenbrier | R1206 | 1,528"
    }
   ]
  },
  {
   "section": "production",
   "claimText": "After wagons and Corvair 95 rows are set aside, two passenger-car rows still disagree: the 1961 500 coupe is 16,857 on corvair.org and 16,628 on corvaircorsa.com, and the 1963 700 coupe is 12,378 on corvair.org and 12,738 on corvaircorsa.com.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "corvair-org-us-production",
    "corvaircorsa-prod"
   ],
   "conflictNote": "corvair.org lists the 1961 500 coupe at 16,857 and corvaircorsa.com, citing Tony Fiore's book, at 16,628, a difference of 229. corvair.org lists the 1963 700 coupe at 12,378 and corvaircorsa.com at 12,738, a difference of 360. These two rows account for the whole of the remaining gap between the tables' 1961 and 1963 totals. Neither page explains either figure. Not resolved by any source consulted here.",
   "evidence": [
    {
     "ref": "corvair-org-us-production",
     "quote": "1961 | 500 Coupe | 527 | 16,857 | 329,632"
    },
    {
     "ref": "corvair-org-us-production",
     "quote": "700 Coupe | 727 | 12,378"
    },
    {
     "ref": "corvaircorsa-prod",
     "quote": "1961 | 16,628 | 18,752 | 24,786 | 51,948 | 109,945 | 33,745 | - | - | -"
    },
    {
     "ref": "corvaircorsa-prod",
     "quote": "1963 | 16,680 | - | 12,738 | 20,684 | 129,544 | 31,120 | 44,165 | *** | ***"
    }
   ]
  },
  {
   "section": "production",
   "claimText": "The two tables agree on the last year: corvair.org gives 6,000 US Corvairs for 1969, and corvaircorsa.com lists 2,762 500 coupes, 2,717 Monza coupes and 521 Monza convertibles, which add to the same figure.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "corvair-org-us-production",
    "corvaircorsa-prod",
    "hsw-1965-69"
   ],
   "computed": [
    "6,000"
   ],
   "evidence": [
    {
     "ref": "corvair-org-us-production",
     "quote": "1969 | 500 Coupe | 10137 | 2,762 | 6,000"
    },
    {
     "ref": "corvaircorsa-prod",
     "quote": "1969 | 2,762 | - | 2,717 | - | 521 | - | -"
    },
    {
     "ref": "hsw-1965-69",
     "quote": "the Corvair finished life with a three-model line comprised of two coupes and one convertible"
    }
   ]
  },
  {
   "section": "history",
   "claimText": "Late-model volume exceeded 200,000 for 1965, fell by more than half the next year, the Corsa was dropped for 1967, and the 1968 Monza coupe managed 6,807.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "hsw-1965-69",
    "corvaircorsa-prod"
   ],
   "evidence": [
    {
     "ref": "hsw-1965-69",
     "quote": "Volume exceeded 200,000 in 1965, mostly on the strength of the new styling"
    },
    {
     "ref": "hsw-1965-69",
     "quote": "a year later it was down by more than half"
    },
    {
     "ref": "hsw-1965-69",
     "quote": "and in 1967 the Corsa was dropped"
    },
    {
     "ref": "hsw-1965-69",
     "quote": "By the end of 1968, the Monza coupe had but 6,807 sales, and Corvair would be dropped a year later."
    },
    {
     "ref": "corvaircorsa-prod",
     "quote": "1968 | 7,206 | - | 6,807 | - | 1,386 | - | -"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "Car Life's 1964 convertible test car is priced at $2,736, and HowStuffWorks states a 500 or Monza rarely cost more than $2,750; no Chevrolet list price was retrieved, so these are single-source figures.",
   "confidence": "low",
   "status": "verified",
   "sourceRefs": [
    "curbside-1964-carlife",
    "hsw-1965-69"
   ],
   "evidence": [
    {
     "ref": "curbside-1964-carlife",
     "quote": "what this Corvair convertible cost ($2736)"
    },
    {
     "ref": "hsw-1965-69",
     "quote": "It was rare when a 500 or Monza cost more than $2,750."
    }
   ]
  },
  {
   "section": "market",
   "claimText": "As of November 2026 classic.com's first-generation Corvair market shows an average of $13,479 across 216 sales, a lowest sale of $250 and a top sale of $47,300, with 31 first-generation and 16 second-generation cars listed for sale on its main Corvair page.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-1st-gen",
    "classic-corvair"
   ],
   "evidence": [
    {
     "ref": "classic-1st-gen",
     "quote": "Avg $13,479"
    },
    {
     "ref": "classic-1st-gen",
     "quote": "Sales Count 216"
    },
    {
     "ref": "classic-1st-gen",
     "quote": "Lowest Sale $250"
    },
    {
     "ref": "classic-1st-gen",
     "quote": "Top Sale $47,300"
    },
    {
     "ref": "classic-corvair",
     "quote": "Chevrolet Corvair - 1st Gen 1960 to 1964 31 For sale"
    },
    {
     "ref": "classic-corvair",
     "quote": "Chevrolet Corvair - 2nd Gen 1965 to 1969 16 For sale"
    }
   ]
  },
  {
   "section": "market",
   "claimText": "Lot 1053, a 1965 Corsa turbo convertible with the 180 hp engine and four-speed, sold for $16,775 at RM Sotheby's Auburn Spring 2015 sale; the lot page does not say whether buyer's premium is included.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "rm-1965-corsa-turbo"
   ],
   "evidence": [
    {
     "ref": "rm-1965-corsa-turbo",
     "quote": "$16,775 USD | Sold"
    },
    {
     "ref": "rm-1965-corsa-turbo",
     "quote": "Auburn Spring 2015"
    },
    {
     "ref": "rm-1965-corsa-turbo",
     "quote": "Lot 1053"
    },
    {
     "ref": "rm-1965-corsa-turbo",
     "quote": "is connected to a floor-shift four-speed manual transmission"
    }
   ]
  },
  {
   "section": "market",
   "claimText": "Hagerty puts the 180 hp turbo premium over a carbureted 1966 Corsa at $1,200 in Excellent (#2) condition and $500 in Good (#3) condition; the article carries no date in the retrieved text.",
   "confidence": "low",
   "status": "verified",
   "sourceRefs": [
    "hagerty-carb-turbo"
   ],
   "evidence": [
    {
     "ref": "hagerty-carb-turbo",
     "quote": "An Excellent, #2-condition, 180-hp turbo car only carries a $1200 premium over its same-condition, carbed sibling,"
    },
    {
     "ref": "hagerty-carb-turbo",
     "quote": "while the delta shrinks to only $500 between #3 (Good) condition, driver-quality cars."
    }
   ]
  },
  {
   "section": "problems",
   "claimText": "The engine-heat system could pass carbon monoxide and oil odors into the cabin, had at least one recall for carbon monoxide, and smelled of the commonly leaking pushrod tubes; the launch cars were designed for an optional gasoline-fired heater, and a Powerglide and heater-equipped car was pushing up against the Biscayne on price.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "curbside-heater"
   ],
   "evidence": [
    {
     "ref": "curbside-heater",
     "quote": "it could pass CO into the passenger compartment, as well as unpleasant odors from oil leaks."
    },
    {
     "ref": "curbside-heater",
     "quote": "this heater had at least one recall to fix a problem with carbon monoxide getting into the passenger compartment."
    },
    {
     "ref": "curbside-heater",
     "quote": "It smelled downright oily, from the invariably leaking pushrod tubes."
    },
    {
     "ref": "curbside-heater",
     "quote": "Somewhat curiously, the Corvair was originally designed to only have an (optional) gas-fired heater."
    },
    {
     "ref": "curbside-heater",
     "quote": "The result was that a Powerglide and heater-equipped Corvair was pushing right up against the Biscayne, price-wise."
    }
   ]
  },
  {
   "section": "problems",
   "claimText": "Turbo boost is limited by the relatively small Carter carburetor and the turbo cars cannot use their boost until third or fourth gear; late cars run rough when the carburetors deliver unequal fuel to each side, and iFixit attributes short crisp clicks to maladjusted hydraulic lifters.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "hagerty-carb-turbo",
    "ifixit-1965-69"
   ],
   "evidence": [
    {
     "ref": "hagerty-carb-turbo",
     "quote": "This limited boost only to what air could be pulled through the relatively small Carter carb"
    },
    {
     "ref": "hagerty-carb-turbo",
     "quote": "As such, a turbo car is known for not being able to take advantage of its boost until third or fourth gear"
    },
    {
     "ref": "ifixit-1965-69",
     "quote": "If the carburetors do not provide equal fuel to each side of the engine, it will cause it to run rough, or not at all."
    },
    {
     "ref": "ifixit-1965-69",
     "quote": "Short crisp clicks are often caused by maladjusted hydraulic lifters."
    }
   ]
  },
  {
   "section": "history",
   "claimText": "The Corvair began with Ed Cole, emboldened by the 1955 Chevrolet's success, and Road & Track found the early car understeers up to the point of total loss of adhesion.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "ateup-history-1",
    "curbside-1960-rt"
   ],
   "evidence": [
    {
     "ref": "ateup-history-1",
     "quote": "Emboldened by the tremendous success of the 1955 Chevrolet, Cole began pondering the idea of a smaller companion model for Chevrolet."
    },
    {
     "ref": "curbside-1960-rt",
     "quote": "The Corvair positively understeers under any and all conditions up to the point of total loss of adhesion."
    }
   ]
  },
  {
   "section": "history",
   "claimText": "corvaircorsa.com lists 109,945 Monza coupes for 1961 against 16,628 base 500 coupes, and a 1962-1963 option kit added a front anti-roll bar.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "corvaircorsa-prod",
    "ateup-1972-report"
   ],
   "evidence": [
    {
     "ref": "corvaircorsa-prod",
     "quote": "1961 | 16,628 | 18,752 | 24,786 | 51,948 | 109,945 | 33,745 | - | - | -"
    },
    {
     "ref": "ateup-1972-report",
     "quote": "a front anti-roll bar to counter the increase in rear roll stiffness caused by the straps and stiffer rear springs"
    }
   ]
  }
 ]
};
