/**
 * Researched model draft — Citroen DS (1955-1975).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedCitroenDs = {
 "slug": "citroen/ds",
 "make": "Citroen",
 "model": "DS",
 "generation": "D-Series",
 "generationCode": null,
 "trim": null,
 "yearStart": 1955,
 "yearEnd": 1975,
 "bodyStyles": [
  "4-door Berline (saloon), fibreglass roof panel over unstressed bolt-on outer panels",
  "5-door Break / Safari / Familiale / Commerciale estate with steel roof, from 1958",
  "2-door Decapotable Usine, the factory-authorised Chapron convertible, from 1960",
  "2-door Chapron catalogue coachwork built to the coachbuilder's own account, including Le Dandy and Concorde coupes"
 ],
 "engines": [
  "1,911 cc four-cylinder OHV, three main bearings, 78 x 100 mm, 8.5:1, twin-choke carburettor; 75 bhp at 4,500 rpm as DS 19",
  "1,911 cc in ID 19 tune, detuned; 69 hp per Wikipedia, 66 hp per Ate Up With Motor",
  "1,985 cc five-bearing four, DS 20 and ID 20 from the mid-1960s",
  "2,175 cc five-bearing short-stroke four (DS 21, 1965); 106 hp DIN per Wikipedia, 109 hp per three other sources",
  "2,175 cc DS 21 with Bosch electronic fuel injection from 1970, quoted at 125 bhp on a 1970 RM Sotheby's lot",
  "2,347 cc four (DS 23, 1972-73 on); 115 hp carburetted, 141 hp SAE injected, also quoted at 130 hp DIN"
 ],
 "productionTotal": null,
 "productionNotes": "No grand total is asserted, because the sources do not agree. Wikipedia, Ate Up With Motor, Conceptcarz and Motoring Research all state 1,455,746 D-series cars, with Wikipedia and Conceptcarz splitting that into 1,330,755 built at Paris and the balance assembled at Slough and in Australia, Portugal, South Africa and the former Yugoslavia. The registry site citroen-ds-id.com publishes a year-by-year berline and break table that sums to 1,456,115, a difference of 369 cars, says this includes 1,325 cabriolets and 287 further Chapron cars, and separately offers an adjusted 1,376,631 over seventeen years without explaining the basis. It cites no source. Convertible counts are contested in their own right: RM Sotheby's Monterey 2021 catalogue gives 1,365 factory cabriolets as 770 DS 19s, 483 DS 21s and 112 ID 19s, its Arizona 2022 catalogue says fewer than 1,400 with under 500 DS 21s, and Wikipedia says approximately 1,400. Chapron's catalogue coachwork is counted separately: 37 or 38 Concordes and fewer than 50 Le Dandys.",
 "notableTrims": [
  {
   "name": "DS 19 (1955-1965)",
   "note": "The launch specification: 1,911 cc, 75 bhp at 4,500 rpm, powered steering and brakes, hydraulic semi-automatic, corrosive LHS fluid and, until 1960, 6-volt electrics."
  },
  {
   "name": "ID 19 (1956 or 1957, depending on source)",
   "note": "The cheap one: hydropneumatic suspension kept, but conventional steering, clutch and gearbox and 66 or 69 hp. In later D Special and D Super form, the version buying guides recommend."
  },
  {
   "name": "Break / Safari / Familiale (from 1958)",
   "note": "Steel roof in place of the saloon's fibreglass so a loaded rack could be carried, seven seats in Familiale form, and DS brakes even where the rest of the car was ID."
  },
  {
   "name": "DS 21 (1965-1972)",
   "note": "The 2,175 cc five-bearing engine, open lamps to 1967 and the glazed four-lamp nose after; 108 mph per Motoring Research, with Bosch injection from 1970."
  },
  {
   "name": "DS 23 and DS 23 Injection Electronique (1972-1975)",
   "note": "The last and largest engine at 2,347 cc, 115 hp carburetted and 141 hp SAE injected. Classics World reports big-end failure as most common on this unit."
  },
  {
   "name": "Pallas (from 1965)",
   "note": "The luxury level: extra mouldings, better seats and, where fitted, air conditioning. Check the mouldings are present, because Pallas badging outlives Pallas trim."
  },
  {
   "name": "Decapotable Usine by Henri Chapron (1960-1971)",
   "note": "The factory-authorised convertible, reinforced and with doors four inches longer than the saloon's. RM Sotheby's records 40 DS 21 cabriolets for 1970; the last was completed in 1978."
  },
  {
   "name": "Chapron catalogue coachwork (Le Dandy, Concorde)",
   "note": "Built on Chapron's own account rather than for Citroen, at roughly double a standard DS. Artcurial gives 37 or 38 Concordes and fewer than 50 Le Dandys."
  }
 ],
 "specs": {
  "layout": "Front-mounted longitudinal four-cylinder, front-wheel drive, front track wider than rear",
  "chassis": "Steel platform base unit carrying unstressed bolt-on outer panels; aluminium bonnet, fibreglass saloon roof. Two exposed headlamps to 1967, four behind a glazed cowl after, inner pair cable-steered",
  "engine": "Four-cylinder OHV petrol only, in 1,911, 1,985, 2,175 and 2,347 cc; never a six-cylinder",
  "power": "75 bhp at 4,500 rpm (DS 19) to 141 hp SAE / 130 hp DIN (DS 23 injection); DS 21 quoted at either 106 hp DIN or 109 hp",
  "torque": "No torque figure appears in any source fetched for this entry; none is asserted",
  "transmission": "Four-speed hydraulic semi-automatic from launch; manual from 1963; five-speed from September 1970; Borg-Warner 35 automatic on DS 21 and DS 23 from September 1971",
  "suspension": "Self-levelling hydropneumatic front and rear, nitrogen-charged spheres with rubber diaphragms separating gas from fluid, driver-selectable ride height",
  "hydraulics": "One engine-driven high-pressure circuit for suspension, brakes, steering and gearchange; 17.2 MPa (2,490 psi) per Wikipedia, 2,400 psi per Petrolicious",
  "brakes": "Inboard front discs, rear drums; powered high-pressure system on DS and on the Break, conventional master cylinder on early ID",
  "steering": "Rack and pinion, powered on DS and unassisted on ID; 2 7/8 turns lock to lock, 37-foot turning circle on the 1964 DW",
  "weight": "1,384 kg (3,051 lb) quoted by Wikipedia for the estate; no saloon kerb figure recovered",
  "acceleration": "Under 16 seconds 0-62 mph for the DS 21 and under 11 seconds for the injected DS 23 per Ate Up With Motor; no measured figure recovered",
  "top_speed": "About 100 mph recorded by Motor Sport on a 1.9-litre DW in 1964; 108 mph published for the DS 21"
 },
 "summary": "The Citroen DS (1955-1975) replaced the Traction Avant after a programme running intermittently since before the war. Andre Lefebvre laid the car out with front-wheel drive and a much wider front than rear track, Flaminio Bertoni shaped a body not settled until weeks before launch, and Paul Mages supplied the hydropneumatic system that fed suspension, brakes, steering and gearchange from one high-pressure circuit. Shown at the Paris Salon in October 1955, it took tens of thousands of deposits inside a week. A cheaper ID 19 followed, a Break estate arrived in 1958, and Henri Chapron built the factory-authorised Decapotable alongside coupes sold on his own account. Engines grew from 1,911 cc to 2,347 cc, and Robert Opron's late-1967 restyle put four lamps behind glass with the inner pair steered by cable - a feature American lighting law would not accept.",
 "history": "## A Programme That Predated the Peace\nThe DS came out of Citroen's Voiture a Grande Diffusion project, begun under Pierre-Jules Boulanger in the late 1930s and carried on quietly through the occupation alongside the work that became the 2CV. Andre Lefebvre, chief engineer on the Traction Avant, set the architecture: front-wheel drive, integral body-frame construction, and front and rear tracks of deliberately different width to shrink the turning circle. Flaminio Bertoni did the body, and did it late - the exterior was not signed off until weeks before the show, because Pierre Bercot wanted the shape to look as unusual as the engineering underneath. The third name is Paul Mages, whose 1942 proposal for a self-adjusting suspension run from a central high-pressure circuit was taken up by Boulanger over the objections of more senior men, and was running on a Traction by 1949.\n\n## October 1955\nThe DS 19 was shown at the Paris Salon in October 1955, and the sources do not agree on the day: Wikipedia says the 6th, while Ate Up With Motor, Motoring Research and Conceptcarz say the 5th. Nor do they agree on the arithmetic of the reception. Wikipedia and Conceptcarz record 743 orders in the first fifteen minutes and 12,000 by the end of the first day, with Wikipedia putting 80,000 deposits across the show's ten days; Motoring Research gives over 700 in the opening minutes and 79,000 by the close. What arrived was a car with powered brakes and steering, a hydraulic semi-automatic gearbox, inboard front discs and suspension that levelled itself, on a platform carrying unstressed bolt-on panels, an aluminium bonnet and a fibreglass roof.\n\n## The Cheap One, the Estate, the Cabriolet\nThe complexity was expensive, so Citroen made a simpler version. The ID 19 - dated 1956 by Motoring Research and 1957 by Ate Up With Motor and Petrolicious - kept the hydropneumatic suspension but replaced the power steering and hydraulic clutch with conventional items and used a detuned engine that sources put at 66 or 69 hp. From 1958 there was an estate, Break in France and Safari or Estate in Britain, with a steel roof in place of the saloon's fibreglass so a loaded rack could be carried, seven seats in Familiale form, and DS brakes even where the rest of the car was ID. Henri Chapron built a cabriolet on his own initiative in 1958; Citroen relented and had him build factory cars from 1960, sold through its dealers on a reinforced platform with doors four inches longer than the saloon's. Chapron also sold coupes on his own account - the Concorde, the Le Dandy - at roughly twice the price of a standard DS.\n\n## Bigger Engines and Opron's Nose\nA five-bearing 2,175 cc engine arrived for 1965 as the DS 21, with a 1,985 cc DS 20 beneath it. A conventional manual gearbox had become available in 1963; a five-speed followed in September 1970 and a Borg-Warner automatic in September 1971. The hydraulic fluid changed from hygroscopic, corrosive LHS to green mineral LHM, with sources placing the switch variously at 1966, 1967 and 1968. In late 1967, for the 1968 model year, Robert Opron reworked the front: four lamps behind a glazed cowl, the inner pair swivelling with the steering. Bosch electronic fuel injection reached the DS 21 for 1970, and in 1972-73 the 2,347 cc DS 23 topped the range. The ID gave way to the D Special and D Super in 1970.\n\n## America, and the End\nNorth America would not take the swivelling lamps. Citroenvie records a rule that no private vehicle may carry an external light whose direction is controlled from inside the car, and a 1 January 1971 deadline after which any new Citroen entering the United States or Canada needed a fixed, unshielded system; American cars ran four exposed sealed beams instead. Citroen announced in 1970 that meeting North American safety standards had become uneconomic. Production ended at Paris on 24 April 1975, by which time Citroen had passed to Peugeot.",
 "marketNotes": "As of August 2026, classic.com gives an average Citroen DS sale price of $62,630 and a lowest recorded sale of $1,350 for a 1970 DS 20 on 28 January 2023; the benchmark tile and trend arrow did not render on either fetch, so no benchmark is quoted. Recent results there, all as of August 2026, run from a 1965 DS 21 Concorde at $95,200 on 14 August 2026 through a 1972 DS 21 Pallas at $35,000 on 6 August 2026 to a 1973 DS 23 Cabriolet at EUR 33,800 on 3 August 2026. Classic Trader, read in August 2026, showed 31 cars advertised from GBP 13,602 for a 1973 DS 20 to GBP 178,800 for a 1967 DS 21 Chapron, and a mainstream band of roughly EUR 20,000 to EUR 60,000 for saloons. Magneto's guide, read in August 2026, prices a 1971 DS 21 Pallas at GBP 11,300 fair, GBP 17,600 good, GBP 27,500 excellent and GBP 39,600 concours. Coachbuilt cars trade separately: RM Sotheby's sold Chapron Decapotables for $291,000 at Monterey 2021, $268,800 at Arizona 2022, $246,400 from the Elkhart Collection and EUR 195,500 at Paris 2023, and Artcurial sold a 1962 Concorde for EUR 153,120 at Retromobile in February 2017 and a 1965 Le Dandy for EUR 262,240 at Retromobile 2018. The lot pages print the sale name and result but not the date.",
 "whatToLookFor": "Structure first, because the D-series hides its corrosion behind bolt-on panels that come off easily and tell you little until they do. Classics World singles out sills, boot floor, roof gutters where water traps and rots from the inside, and the area carrying the trailing arm mounts, and notes cracking around the front wishbone carrier bolts with repair quoted between GBP 200 and GBP 2,000. Petrolicious adds the lower rear corners of the front wings, door bottoms and the bodywork below faired-in headlamps, and warns that the aluminium bonnet can crack down the centre. On the hydraulics, listen to the pump: Classics World describes a tick roughly every thirty seconds as normal and anything more frequent as a leak, and says a car pushed down at each corner should sink willingly and rise softly, a firm response pointing at spent spheres. A permanently sagging car is a leak until proved otherwise. Establish which fluid the car is on and that it has never been mixed, because LHS and LHM use different seals and converting means replacing every unit and seal rather than topping up. Compression should read 120 to 140 psi per cylinder. On Pallas cars, confirm the mouldings and trim are present: small trim pieces are the hardest parts to find.",
 "commonProblems": "The hydraulic system is not fragile, but it is unforgiving of neglect and of the wrong fluid. Spheres lose their nitrogen charge and are generally treated as a five-yearly item; a failed diaphragm means replacement rather than recharging. Corroded high-pressure pipework is routine, and the Citroen Car Club notes that when pressure is lost the system sheds functions in a defined order - steering assistance first, with warning, then suspension, then brakes. Early LHS fluid is hygroscopic, corrosive and prone to leaking, which is why so many surviving early cars have been converted. Engines are long-lived, with Petrolicious quoting 150,000 miles between rebuilds, but timing chains stretch and replacement is an engine-out job, camshaft seals leak at the distributor base, and Classics World reports big-end failure as most common on the 2,347 cc unit. Manual boxes crunch their synchromesh and five-speeds whine as the bearings dry. The BVH semi-automatic suffers internal leaks that make it jump out of second or third and a leaking selector plate that puts LHM into the gear oil.",
 "valueTrajectory": "The DS spent decades as a cheap and slightly forbidding used car, and the spread in today's figures still shows it: as of August 2026 classic.com's lowest recorded sale is $1,350 for a 1970 DS 20 in January 2023, against a $62,630 average across all body styles - a gap that says more about what has been thrown away than about what survives. The saloon market has settled rather than surged. Classic Trader's August 2026 listings put usable DS 20, DS 21 and DS 23 cars in a EUR 20,000 to EUR 60,000 band, and Magneto's August 2026 guidance for a 1971 DS 21 Pallas tops out at GBP 39,600 for concours, well below where the coachbuilt cars sit. Chapron bodies have moved on a different curve, with RM Sotheby's Decapotable results between $246,400 and $291,000 across four sales. The result is a market in two halves: a saloon and estate sector where condition and hydraulic history set the price, and a coachbuilt sector where authenticating factory rather than aftermarket conversion is the whole argument.",
 "overallConfidence": "medium",
 "sources": [
  {
   "ref": "wikipedia-ds",
   "title": "Citroen DS",
   "url": "https://en.wikipedia.org/wiki/Citro%C3%ABn_DS",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Supports 1,455,746 total (1,330,755 at Paris), 6 October 1955 with 743 orders in fifteen minutes, ID 19 69 hp, DS 21 106 hp DIN, DS 23 115/141 hp SAE, 17.2 MPa, LHM from 1967, last car 24 April 1975, about 1,400 Chapron cabriolets."
  },
  {
   "ref": "ateupwithmotor-ds",
   "title": "Deesse Ex Machina: The Remarkable Citroen DS",
   "url": "https://ateupwithmotor.com/model-histories/citroen-ds/",
   "publisher": "Ate Up With Motor",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Supports the Lefebvre, Bertoni and Mages development narrative and the 1949 Traction prototype, plus 5 October 1955, ID 19 in 1957 at 66 hp, DS 21 at 109 hp, DS 23 at 130 hp DIN injected."
  },
  {
   "ref": "conceptcarz-ds",
   "title": "Citroen DS - Model Information",
   "url": "https://www.conceptcarz.com/vehicle/series.aspx?modelID=3096",
   "publisher": "Conceptcarz",
   "sourceType": "reference-book",
   "reliability": "medium",
   "notes": "Independent tabulation supporting 1,455,746, 5 October 1955, 743 orders in fifteen minutes, DS 21 at 109 hp with Bosch injection from 1970."
  },
  {
   "ref": "citroen-ds-id-production",
   "title": "DS/ID production numbers",
   "url": "http://www.citroen-ds-id.com/ds/DSID_Prodnr.html",
   "publisher": "Citroen DS/ID and XM Web-Site",
   "sourceType": "registry",
   "reliability": "medium",
   "notes": "The dissenting count: a year-by-year table summing to 1,456,115, said to include 1,325 cabriolets and 287 further Chapron cars. Cites no source."
  },
  {
   "ref": "citroenorigins-ds",
   "title": "Citroen DS - Photos, details et equipements",
   "url": "https://www.citroenorigins.com/en/cars/ds",
   "publisher": "Citroen (Citroen Origins heritage site)",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Citroen's own record, supporting the 1955-1975 run, Bertoni styling, hydropneumatic suspension, powered front discs, manual optional from 1963, directional headlights from 1967."
  },
  {
   "ref": "motorsport-dw-1964",
   "title": "Road Test - The Latest Citroen DW",
   "url": "https://www.motorsportmagazine.com/archive/article/march-1964/11/road-test-27/",
   "publisher": "Motor Sport",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "The period road test: UK-market DW, 1.9 litres at 83 bhp, about 100 mph, 26.7 and 26.1 mpg, GBP 1,568 19s 7d, 2 7/8 turns lock to lock, 37-foot turning circle."
  },
  {
   "ref": "motoringresearch-ds",
   "title": "French Goddess: the history of the Citroen DS",
   "url": "https://www.motoringresearch.com/car-news/history-of-citroen-ds/",
   "publisher": "Motoring Research",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Supports 5 October 1955 with over 700 orders in minutes and 79,000 by the show's close, ID 19 in 1956, Decapotable at 1,365, DS 21 at 108 mph, the 24 April 1975 end."
  },
  {
   "ref": "citroenvie-headlights",
   "title": "Why Citroen's steerable headlights were banned from North America",
   "url": "https://citroenvie.com/why-citroens-steerable-headlights-were-banned-from-north-america/",
   "publisher": "Citroenvie",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Club publication, and the only source here for the rule against lamps aimed from inside the car, the 1 January 1971 North American deadline and Citroen's 1970 withdrawal."
  },
  {
   "ref": "citroencarclub-hydraulics",
   "title": "Hydraulic Suspension",
   "url": "https://citroencarclub.org.uk/hydraulic-suspension/",
   "publisher": "Citroen Car Club (UK)",
   "sourceType": "club-forum",
   "reliability": "low",
   "notes": "Club technical page supporting the nitrogen-over-LHM sphere, the central pump, and the failure order: steering, then suspension, then brakes."
  },
  {
   "ref": "classicsworld-guide",
   "title": "Citroen DS buyer's guide",
   "url": "https://classicsworld.co.uk/guides/citroen-ds-buyers-guide/",
   "publisher": "Classics World",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Supports the rust map, wishbone cracking at GBP 200-2,000, the thirty-second pump tick, five-yearly spheres, LHM from 1967, 120-140 psi, big-end failure on the 2.3."
  },
  {
   "ref": "magneto-guide",
   "title": "1955-1978 Citroen DS buying guide from Magneto magazine",
   "url": "https://www.magnetomagazine.com/articles/1955-1978-citroen-ds-buying-guide-from-magneto-magazine/",
   "publisher": "Magneto",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Supports mixing damage between the two fluids, synchro, clutch and Borg-Warner faults, and a 1971 DS 21 Pallas at GBP 11,300 fair to GBP 39,600 concours."
  },
  {
   "ref": "petrolicious-guide",
   "title": "Citroen DS Buying Guide",
   "url": "https://petrolicious.com/blogs/articles/citroen-ds-buying-guide",
   "publisher": "Petrolicious",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Supports the variant timeline, four capacities and no six-cylinder, 2,400 psi, pre-1966 red LHS, corrosion below faired-in headlamps, 150,000 miles between rebuilds."
  },
  {
   "ref": "classic-com-ds",
   "title": "Citroen DS Market",
   "url": "https://www.classic.com/m/citroen/ds/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Primary market source, August 2026: average $62,630, lowest $1,350 (1970 DS 20, 28 January 2023), recent results of $95,200, $35,000 and EUR 33,800. Benchmark tile did not render."
  },
  {
   "ref": "classic-trader-ds",
   "title": "Citroen DS Classic Cars for Sale",
   "url": "https://www.classic-trader.com/uk/cars/search/citroen/ds",
   "publisher": "Classic Trader",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "Second market source, August 2026: 31 cars asking GBP 13,602 to GBP 178,800, with a stated mainstream band of roughly EUR 20,000-60,000."
  },
  {
   "ref": "rm-mo21-decapotable",
   "title": "1970 Citroen DS 21 Decapotable by Chapron, Monterey 2021",
   "url": "https://rmsothebys.com/en/auctions/mo21/monterey/lots/r0082-1970-citro%C3%ABn-ds-21-d%C3%A9capotable-by-chapron/1121648",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold $291,000, Monterey 2021, chassis 00FA0662. Supports 125 bhp injected, the 1,365 breakdown of 770 DS 19s, 483 DS 21s and 112 ID 19s, and 40 DS 21 cabriolets for 1970."
  },
  {
   "ref": "rm-el20-decapotable",
   "title": "1966 Citroen DS 21 Decapotable by Chapron, The Elkhart Collection",
   "url": "https://rmsothebys.com/auctions/el20/lots/r0130-1966-citroen-ds-21-decapotable-by-chapron/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold $246,400, Elkhart Collection, chassis 0032.000141. Supports Chapron's pre-authorisation conversions, factory build from 1961 and the last cabriolet in 1978. No sale date printed."
  },
  {
   "ref": "rm-az22-decapotable",
   "title": "1967 Citroen DS 21 Decapotable by Chapron, Arizona 2022",
   "url": "https://rmsothebys.com/auctions/az22/lots/r0069-1967-citroen-ds-21-decapotable-by-chapron/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold $268,800, Arizona 2022, chassis 4376057. The dissenting cabriolet count: fewer than 1,400 factory cars and under 500 DS 21s."
  },
  {
   "ref": "rm-pa23-decapotable",
   "title": "1965 Citroen DS 21 Decapotable by Chapron, Paris 2023",
   "url": "https://rmsothebys.com/auctions/pa23/lots/r0064-1965-citroen-ds-21-decapotable-by-chapron/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold EUR 195,500, Paris 2023, chassis 4350064. Supports 165 DS 21 Decapotables for the 1966 model year, the 109 hp engine, the first factory car in October 1960."
  },
  {
   "ref": "artcurial-concorde",
   "title": "1962 Citroen DS Concorde par Chapron, Retromobile 2017",
   "url": "https://www.artcurial.com/en/sales/3118/lots/42-a",
   "publisher": "Artcurial",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold EUR 153,120 against EUR 100,000-150,000, Retromobile February 2017. Supports 37 or 38 Concorde coupes built 1960-1965."
  },
  {
   "ref": "artcurial-ledandy",
   "title": "1965 Citroen DS 21 Coupe Chapron Le Dandy, Retromobile 2018",
   "url": "https://www.artcurial.com/en/sales/3279/lots/69-a",
   "publisher": "Artcurial",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "EUR 262,240 against EUR 250,000-350,000, Retromobile 2018. Supports fewer than 50 Le Dandy coupes built 1960-1968, at roughly double a factory car."
  }
 ],
 "claims": [
  {
   "section": "production",
   "claimText": "Total D-series production is given as 1,455,746 by Wikipedia, Ate Up With Motor, Conceptcarz and Motoring Research, but the citroen-ds-id.com registry table sums to 1,456,115; no grand total is asserted here.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "wikipedia-ds",
    "ateupwithmotor-ds",
    "conceptcarz-ds",
    "motoringresearch-ds",
    "citroen-ds-id-production"
   ],
   "conflictNote": "Four sources state 1,455,746. The citroen-ds-id.com year-by-year table sums to 1,456,115 and separately offers an adjusted 1,376,631 over seventeen years, citing no source for either. The 369-car difference is not explained by any source consulted here, so productionTotal is left null."
  },
  {
   "section": "production",
   "claimText": "The number of factory-authorised Chapron Decapotables is not settled, with published counts of 1,365, fewer than 1,400, approximately 1,400 and 1,325 plus 287.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "rm-mo21-decapotable",
    "rm-el20-decapotable",
    "rm-az22-decapotable",
    "wikipedia-ds",
    "citroen-ds-id-production",
    "motoringresearch-ds"
   ],
   "conflictNote": "RM Sotheby's Monterey and Elkhart catalogues and Motoring Research state 1,365, as 770 DS 19s, 483 DS 21s and 112 ID 19s. RM's own Arizona 2022 catalogue states fewer than 1,400 with under 500 DS 21s. Wikipedia states approximately 1,400. citroen-ds-id.com states 1,325 plus 287. No source reconciles these, and the line between factory Usine cars and Chapron's own coachwork is drawn differently by each. Unresolved."
  },
  {
   "section": "history",
   "claimText": "The DS 19 was shown at the Paris Salon in the first week of October 1955 and took tens of thousands of deposits, but the sources disagree on both the date and the count.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "wikipedia-ds",
    "ateupwithmotor-ds",
    "conceptcarz-ds",
    "motoringresearch-ds"
   ],
   "conflictNote": "Wikipedia gives 6 October 1955, 743 orders in fifteen minutes and 80,000 deposits over ten days. Ate Up With Motor, Conceptcarz and Motoring Research all give 5 October. Conceptcarz repeats 743 and 12,000; Motoring Research gives over 700 and 79,000 by the close; Ate Up With Motor gives more than 80,000 in the first week. Not resolved by any source consulted here."
  },
  {
   "section": "specs",
   "claimText": "Quoted power outputs differ between sources for two engines: the ID 19 is given as 69 hp and as 66 hp, and the DS 21's 2,175 cc unit as 106 hp DIN and as 109 hp.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "wikipedia-ds",
    "ateupwithmotor-ds",
    "conceptcarz-ds",
    "rm-pa23-decapotable"
   ],
   "conflictNote": "Wikipedia states 69 hp for the ID 19 against 75 hp for the DS 19, and 106 hp DIN for the DS 21. Ate Up With Motor states 66 hp and 109 hp; Conceptcarz and RM Sotheby's Paris 2023 catalogue also state 109 hp. No source states which rating standard produced which figure, so no single output is asserted."
  },
  {
   "section": "specs",
   "claimText": "The changeover from corrosive LHS hydraulic fluid to green mineral LHM is dated differently by different sources, with North America lagging in any case.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "wikipedia-ds",
    "classicsworld-guide",
    "magneto-guide",
    "petrolicious-guide"
   ],
   "conflictNote": "Wikipedia places the switch at the 1967 model year everywhere except the United States and Canada, where it came in January 1969. Classics World draws the line at pre-1967, Magneto at pre-1968 and Petrolicious at pre-1966. The sources agree only that the two fluids use different seals and must never be mixed. Unresolved."
  },
  {
   "section": "history",
   "claimText": "The ID 19 was a cheaper version that kept the hydropneumatic suspension but used conventional steering, clutch and gearchange with a detuned engine; sources date its introduction to either 1956 or 1957.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "motoringresearch-ds",
    "ateupwithmotor-ds",
    "petrolicious-guide",
    "wikipedia-ds"
   ],
   "conflictNote": "Motoring Research dates the ID 19 launch to 1956. Ate Up With Motor and Petrolicious both date it to 1957. Wikipedia describes the ID's specification without stating a launch year in the material retrieved. Not resolved by any source consulted here."
  },
  {
   "section": "history",
   "claimText": "The DS came out of Citroen's Voiture a Grande Diffusion programme: Andre Lefebvre set the front-wheel-drive architecture and unequal tracks, Flaminio Bertoni styled a body not finalised until weeks before launch, and Paul Mages developed the hydropneumatic suspension from a 1942 proposal running on a Traction Avant prototype by 1949.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "ateupwithmotor-ds",
    "citroenorigins-ds"
   ]
  },
  {
   "section": "specs",
   "claimText": "A single engine-driven high-pressure circuit served the self-levelling suspension, powered brakes, power steering and semi-automatic gearchange, using nitrogen-charged spheres separated from the fluid by rubber diaphragms; pressure is given as 17.2 MPa (2,490 psi) by Wikipedia and 2,400 psi by Petrolicious.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "citroenorigins-ds",
    "citroencarclub-hydraulics",
    "wikipedia-ds",
    "petrolicious-guide"
   ]
  },
  {
   "section": "history",
   "claimText": "An estate was added in 1958, sold as the Break in France and the Safari or Estate in Britain, with a full steel roof in place of the saloon's fibreglass panel so a loaded roof rack could be carried, seven seats in Familiale form, and DS brakes even where the rest of the specification was ID.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-ds",
    "classicsworld-guide",
    "petrolicious-guide"
   ]
  },
  {
   "section": "history",
   "claimText": "Henri Chapron built a DS cabriolet on his own initiative before Citroen authorised factory production, after which cars were converted at Levallois-Perret on a reinforced platform with doors four inches longer than the saloon's, the first shipping in October 1960 and the last completed in 1978. He separately sold coupes on his own account at roughly twice the price of a standard DS.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "rm-pa23-decapotable",
    "rm-el20-decapotable",
    "rm-mo21-decapotable",
    "artcurial-concorde",
    "artcurial-ledandy"
   ]
  },
  {
   "section": "history",
   "claimText": "In late 1967, for the 1968 model year, Robert Opron restyled the front of the DS and ID with four headlamps behind a glazed cowl, the inner pair swivelling with the steering; Citroen's own heritage site lists directional headlights as a feature from 1967.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-ds",
    "citroenorigins-ds",
    "ateupwithmotor-ds",
    "motoringresearch-ds"
   ]
  },
  {
   "section": "history",
   "claimText": "North American regulation would not accept a headlamp aimed from inside the car, so US-market cars ran four exposed sealed beams; Citroenvie records a 1 January 1971 deadline for a fixed, unshielded system and Citroen's 1970 statement that North American compliance had become uneconomic. Production ended at Paris on 24 April 1975.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "citroenvie-headlights",
    "wikipedia-ds",
    "motoringresearch-ds",
    "conceptcarz-ds"
   ]
  },
  {
   "section": "specs",
   "claimText": "Motor Sport's March 1964 test of the UK-market DW - the 1.9-litre engine at 83 bhp with DS power steering and brakes but the ID's manual clutch - recorded about 100 mph, 26.7 mpg fast and 26.1 mpg mixed, at GBP 1,568 19s 7d including purchase tax, with 2 7/8 turns lock to lock and a 37-foot turning circle.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "motorsport-dw-1964"
   ]
  },
  {
   "section": "problems",
   "claimText": "Corrosion concentrates in the sills, boot floor around the trailing arm mounts, roof gutters, door bottoms and the lower rear corners of the front wings; spheres lose their nitrogen charge and are treated as a five-yearly item, with the Citroen Car Club describing the hydraulics shedding functions in a set order on loss of pressure - steering, then suspension, then brakes. Timing chains stretch, camshaft seals leak at the distributor base, and big-end failure is most common on the 2,347 cc unit.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classicsworld-guide",
    "petrolicious-guide",
    "magneto-guide",
    "citroencarclub-hydraulics"
   ]
  },
  {
   "section": "market",
   "claimText": "As of August 2026, classic.com records an average Citroen DS sale price of $62,630 and a lowest recorded sale of $1,350 for a 1970 DS 20 on 28 January 2023, with recent results of $95,200, $35,000 and EUR 33,800; its benchmark figure and trend indicator did not render. Classic Trader listed 31 cars at GBP 13,602 to GBP 178,800, and Magneto prices a 1971 DS 21 Pallas from GBP 11,300 fair to GBP 39,600 concours.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "classic-com-ds",
    "classic-trader-ds",
    "magneto-guide"
   ]
  },
  {
   "section": "market",
   "claimText": "Coachbuilt cars trade in a separate and far higher market than saloons: RM Sotheby's sold Chapron Decapotables at $291,000 (Monterey 2021), $268,800 (Arizona 2022), $246,400 (Elkhart Collection) and EUR 195,500 (Paris 2023), while Artcurial sold a 1962 Concorde coupe for EUR 153,120 at Retromobile in February 2017 and a 1965 Le Dandy for EUR 262,240 at Retromobile 2018.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "rm-mo21-decapotable",
    "rm-az22-decapotable",
    "rm-el20-decapotable",
    "rm-pa23-decapotable",
    "artcurial-concorde",
    "artcurial-ledandy"
   ]
  }
 ]
};
