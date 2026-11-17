/**
 * Researched model draft - BMW 3 Series (E30), US market non-M cars (1984-1991, convertible through 1993).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seed3SeriesE30 = {
 "slug": "bmw/3-series-e30",
 "make": "BMW",
 "model": "3 Series",
 "generation": "E30",
 "generationCode": "E30",
 "trim": null,
 "yearStart": 1984,
 "yearEnd": 1993,
 "bodyStyles": [
  "2-door sedan (the two-door body BMW sold alongside the four-door)",
  "4-door sedan",
  "2-door convertible (325iC, and a 318iC listed for 1991-1993)"
 ],
 "engines": [
  "1,766 cc M10 inline-four, SOHC, chain-driven camshaft, 2 valves per cylinder: 101 hp at 5,800 rpm and 103 lb-ft (318i, 1984-1985 US model years; Hagerty's buyer's guide gives 105 hp and 107 lb-ft)",
  "2,693 cc M20 eta inline-six, SOHC, belt-driven camshaft, 9.0:1 compression: 121 hp at 4,250 rpm and 170 lb-ft at 3,250 rpm (325e and 325es; BMW Group Classic lists 122 hp)",
  "2,693 cc M20 eta inline-six in later tune, often called the Super Eta: 128 hp at 4,800 rpm and 170 lb-ft at 3,200 rpm (1988 325)",
  "2,494 cc M20 inline-six, SOHC, belt-driven camshaft, 2 valves per cylinder: 168 hp at 5,800 rpm and 164 lb-ft at 4,300 rpm (325i, 325is, 325iC, 325iX, 1987-1991 and convertible through 1993)",
  "1,796 cc M42 inline-four, DOHC, double chain-driven camshafts, 4 valves per cylinder: 134 hp at 6,000 rpm and 127 lb-ft at 4,600 rpm (318i and 318is, 1991; 318iC)"
 ],
 "productionTotal": null,
 "productionNotes": "No single production total is given here because the sources do not agree. Autocar gives 2.32 million E30s built between 1982 and 1994. BIMMERtips gives 2,344,341 in a model-by-model table that it says was cross-checked against multiple sources, without naming any of them. BMW Group Classic's 325iX page says more than 2.3 million second-generation 3 Series were sold up to 1991, which is a sales figure that stops roughly three years before production ended. The gap between Autocar and BIMMERtips is about 24,000 cars and neither shows its working. Even the start date differs: BMW Group Classic dates production from September 1982 to February 1994, BIMMERtips from October 1982. For the United States the only figure found is Hagerty's statement that just under 350,000 E30s were sold here, with the 318i the most common and the 325i next. BIMMERtips' per-model counts (556,679 318i, 352,993 325i, 152,000 325e, 41,234 318is and 34,862 325ix) are worldwide totals that include European-market cars, and none of them is a US count; no source consulted publishes a US 325is total. US model years are not settled for the eta cars either: strictlyeta.net lists the 325e from 1984 with a 1984 price, Hagerty's buyer's guide gives the 325e and 325es as 1985 to 1987, and BMW Group Classic's page for the US-model 325es dates it 1986 to 1988, which may be production dates rather than model years. The convertible's US run through 1993 rests on one source, strictlyeta.net's price and weight tables, which list the 325iC for 1992 and 1993; Hagerty dates the convertible's arrival to 1986, while the same price table begins the 325iC at 1987. US list prices on this page come from strictlyeta.net's compiled table, which does not name its price source; the one independent check, Car and Driver's as-tested price for a 1990 318is, is consistent with it. NHTSA recall data and EPA records, which would settle model years from the federal side, could not be retrieved for this research.",
 "notableTrims": [
  {
   "name": "318i, 1984-1985 (M10)",
   "note": "The first US E30, with the chain-driven 1,766 cc four at 101 hp and the long diving-board bumpers. Listed at $16,460 for 1984. Dropped after 1985; Hagerty calls 318i models by far the most common E30 in America."
  },
  {
   "name": "325e and 325es (eta)",
   "note": "The 2,693 cc low-revving six, 121 hp at 4,250 rpm but 170 lb-ft at 3,250 rpm. The 325es was the sportier car, listed at $21,950 for 1986 against $22,650 for the 325e. The cheapest way into a six-cylinder E30, and the cars whose US model years the sources disagree on."
  },
  {
   "name": "325is, 1987-1991",
   "note": "The 168 hp, 2,494 cc M20 in the sport-trim two-door. In 1987 it listed at $26,990, the same as the 325i. Hagerty singles out the 325is for its styling, and it is the six-cylinder car most buyers mean when they ask about E30 values."
  },
  {
   "name": "325iX, 1988-1991",
   "note": "BMW's first post-war passenger car with all-wheel drive, sold in the US from 1988 at $32,800, as a two-door and from 1989 as a four-door. About 200 lb heavier than a 325i two-door. The transfer case and viscous center differential are its known weak points."
  },
  {
   "name": "325i convertible (325iC)",
   "note": "Listed in the US from 1987 at $28,875 and, alone among the US E30s, still on the price list for 1992 and 1993 at $36,320. Listed at 2,988 to 3,055 lb depending on year, the heaviest two-wheel-drive US E30."
  },
  {
   "name": "318is, 1991",
   "note": "A one-model-year US car with the M42 twin-cam four, 134 hp at 6,000 rpm, at $21,500. Car and Driver's September 1990 test called its handling more fun than Labrador puppies. Chain-driven, so there is no belt to service."
  }
 ],
 "specs": {
  "layout": "Front engine, rear-wheel drive; 325iX all-wheel drive",
  "chassis": "Steel unit body; two-door sedan, four-door sedan and convertible in the US",
  "engine": "M10 1,766 cc four (1984-1985), M20 2,693 cc eta six (325e, 325es, 1988 325), M20 2,494 cc six (325i family), M42 1,796 cc twin-cam four (1991 318i and 318is)",
  "power": "101 hp (318i M10) to 168 hp (2.5-liter M20); 121 hp eta per strictlyeta.net, 122 hp per BMW Group Classic; 134 hp M42",
  "torque": "103 lb-ft (M10), 170 lb-ft (eta), 164 lb-ft (2.5-liter M20), 127 lb-ft (M42)",
  "transmission": "Five-speed manual; automatic offered, with EPA figures and curb weights published for automatic cars",
  "weight": "2,395 lb (1985 318i two-door) to 3,055 lb (1988-1990 325iC); 2,811 lb for a 325i two-door; 3,010 lb for a 1988-1990 325iX two-door",
  "acceleration": "0-60 mph: 318i 11.4 seconds, 325e 8.4 seconds, 325i 7.7 seconds, 325iX 7.9 seconds (period US magazine figures compiled by strictlyeta.net); 318is 8.7 seconds per Car and Driver against 9.8 seconds per Road & Track",
  "top_speed": "325es 120 mph (BMW Group Classic claim); 116 mph for the 325 eta cars in strictlyeta.net's compiled figures",
  "fuel_economy": "EPA 21 city and 28 highway mpg (manual) and 20 and 27 (automatic) for the eta cars",
  "us_model_years": "Sedans 1984-1991; convertible 1987-1993 per strictlyeta.net (single source for 1992 and 1993)",
  "us_list_price": "$16,460 (1984 318i) to $36,320 (1992-1993 325iC); 325is $26,990 (1987), $28,400 (1988), $28,950 (1989-1990)",
  "timing_belt": "M20 sixes are belt-driven interference engines; interval given as 60,000 miles or four years (BMW CCA) or 50,000-60,000 miles or five years (Hagerty)",
  "us_sales": "Just under 350,000 per Hagerty (single source); worldwide total disputed, 2.32 million (Autocar) or 2,344,341 (BIMMERtips)"
 },
 "summary": "The E30 is the second-generation BMW 3 Series, built from 1982 to 1994 and sold in the US from the 1984 model year, with the convertible on the US price list through 1993. The US menu was short and specific: the 318i with the M10 four for 1984 and 1985, the low-revving 2.7-liter eta six in the 325e and the sportier 325es, the 2.5-liter M20 six in the 325i and 325is from mid-1987, the all-wheel-drive 325iX from 1988, the convertible, and for 1991 a returning 318i and the 318is with the twin-cam M42. The M3 shares the two-door shell and has its own page. Hagerty puts US sales at just under 350,000 cars, the 318i most common and the 325i next; worldwide production is 2.32 million according to Autocar and 2,344,341 according to BIMMERtips, so no single figure is given. Every six-cylinder US car uses a belt-driven M20, and the sources agree the belt interval is not optional while disagreeing on what it is. What separates one E30 from another is the engine, the bumpers, the rust and the belt record.",
 "history": "## One body, more doors\n\nThe E30 had to be a range where its predecessor had been a single two-door. BMW Group Classic's own account is that this was the first time the 3 Series came as both a two-door and a four-door sedan, and the line kept widening: Baur built a Topcabriolet conversion, BMW presented its own full convertible in 1985, a Touring wagon followed from 1987, and there were four-wheel-drive versions. To build that many variants in volume BMW installed a fully automated body shop in Munich at the 1982 launch, and E30 production spread to Dingolfing, Regensburg and Rosslyn in South Africa. BMW Group Classic dates production from September 1982 to February 1994. The US got the two-door, the four-door and the convertible; the Touring appears in no US price list consulted for this page. The M3 used the two-door shell and has its own page.\n\n## The first US cars, 1984-1987\n\nThe first US E30 was the 318i with the chain-driven 1,766 cc M10 four, listed at 101 hp at 5,800 rpm and 103 lb-ft (Hagerty's buyer's guide says 105 hp and 107 lb-ft), and priced at $16,460 for 1984. It wore the long federal diving-board bumpers that Hagerty dates on North American cars from 1984 to 1987. The 318i was dropped after 1985. Its replacement was the eta, a 2,693 cc version of the belt-driven M20 six with 9.0:1 compression, rated at 121 hp at only 4,250 rpm and 170 lb-ft at 3,250 rpm; BMW Group Classic lists 122 hp. It made its torque low and its power early, and returned EPA figures of 21 city and 28 highway with the manual. The 325e was the comfortable version; the 325es was the sportier one, priced at $21,950 for 1986 against $22,650 for the 325e. Which model year the 325e first reached the US is one of the things the sources disagree on.\n\n## The 325i and 325is\n\nPart way through 1987 BMW replaced the 325e with the 325i and the 325es with the 325is, both using a higher-revving 2,494 cc M20 rated at 168 hp at 5,800 rpm and 164 lb-ft at 4,300 rpm. The 1987 price list carries a detail worth repeating: the 325i and the 325is were both listed at $26,990, so the sport model cost nothing extra that year. For 1988 every US E30 got a cosmetic update with shorter aluminum bumpers. The eta did not vanish at once: a 1988 model listed simply as the 325 cost $23,750 as a two-door, and the 1988 eta enthusiasts call the Super Eta is rated at 128 hp at 4,800 rpm. By 1989 the 325is listed at $28,950.\n\n## The 325iX\n\nThe 325iX reached the US for 1988 at $32,800, with the 168 hp engine driving all four wheels. BMW Group Classic calls it the first post-war BMW passenger car with all-wheel drive and dates its production from October 1985 to November 1991; the home-market car without a catalytic converter was rated at 171 hp. It was listed as a two-door and from 1989 as a four-door as well. At 3,010 lb for a 1988-1990 two-door it carries about 200 lb more than a 325i two-door at 2,811 lb, and Road & Track timed a manual car at 7.9 seconds to 60 mph.\n\n## The last cars, 1991-1993\n\nFor 1991 the four-cylinder came back. The 318i and 318is used the M42, a 1,796 cc twin-cam, 16-valve four with double chains, rated at 134 hp at 6,000 rpm and 127 lb-ft. The 318is listed at $21,500 and the 318i at $19,900. Car and Driver's September 1990 test of a five-speed 318is recorded 8.7 seconds to 60 mph at a 2,607 lb curb weight and an as-tested sticker of $21,985, and called the handling pure BMW, more fun than Labrador puppies. The sedans leave the US price list after 1991. The convertible stayed: the 325iC listed at $35,900 for 1991 and $36,320 for both 1992 and 1993, and a 318iC is listed for 1991 to 1993.",
 "marketNotes": "Market data for the non-M E30 is thinner than for the M3 and harder to pin down. As of November 2026, Hagerty's E30 buyer's guide says its valuation tool puts a modest four-cylinder or six-cylinder driver-quality sedan at around $10,000. The article carries no publication date, so that figure is current only in the sense that it is what the page said when it was fetched in November 2026. classic.com's 325is market page confirms model years 1987 to 1991 but its market statistics did not load, and its individual 325is and 325iX sale listings could not be matched to a second source, so no classic.com dollar figure is quoted here under this site's two-source rule. Bring a Trailer, where many E30s sell, cannot be retrieved for this research, and no auction-house lot page for a US 325is was found with a confirmed result. What the sources do agree on is the order of preference. Hagerty says later cars are more desirable than earlier ones for their sleeker cosmetics, that small-bumper cars are always more desirable, and singles out the 325is and the 318is for their styling. The 318i is the most common E30 in the US and the 325i the next most common. For scale against the original sticker, the 325is listed at $26,990 in 1987 and $28,950 in 1989 and 1990, and the 1984 318i at $16,460. A dated, two-source answer to what a 325is trades for as of November 2026 needs comparables this research could not reach, and the page says so rather than print one.",
 "whatToLookFor": "The first job is identifying the car. A 325e or 325es has the 2,693 cc eta six, which makes its peak power at 4,250 rpm; a 325i, 325is or 325iX has the 2,494 cc engine rated at 168 hp at 5,800 rpm; a 1988 car listed simply as a 325 is the late eta. Bumpers date the body: North American cars carried the long diving-board bumpers from 1984 to 1987, and from 1988 every US E30 got shorter aluminum bumpers. Hagerty's view is that small-bumper cars and later cars are the more desirable ones. On any six-cylinder car the timing belt record matters more than the odometer. The M20 is an interference engine: when the belt breaks, valves left open meet the pistons, and the damage runs from bent valves to a ruined engine. The evidence of a well-kept car is paperwork showing the belt, tensioner and water pump done together within the interval, and a car that has sat for years is due a belt regardless of its mileage, because the rubber loses flexibility. Rust starts in predictable places: the license plate light area first, then the base of the windshield, the rear of all four wheel arches, unfinished parts of the underside and the battery box in the trunk. Many E30s also have pinch welds crushed by improper jacking, which shows on a lift. On a 325iX the transfer case is a known weak point and the viscous center differential wears out, so binding or clunks in tight, slow turns point to the expensive end of the car. Oil leaks, steering rack leaks and a seized cooling fan clutch are common across the range. The 318is is a 1991-only US car with the chain-driven M42 twin-cam, so its service history is about the chains and the four-valve head rather than a belt.",
 "commonProblems": "The M20 timing belt is the E30's defining maintenance item, and the sources do not agree on the interval. BMW CCA columnist Rob Siegel gives the recommended schedule as 60,000 miles or four years, whichever comes first; Hagerty's buyer's guide gives 50,000 to 60,000 miles or five years and calls respecting it not optional. Because the M20 is an interference engine, a broken belt means internal damage rather than a simple tow. Owners customarily replace the water pump at the same time because the job exposes it; Siegel bought a Continental belt-and-tensioner kit for about $40 and a water pump for about the same, and found the bearing in the new aftermarket pump worse than the original. YourMechanic's estimate for a 325is belt replacement, as fetched in November 2026, averages $594, made up of $174 in parts and $420 in labor. Beyond the belt, Hagerty lists oil leaks from numerous places, steering rack leaks and cooling fan clutch seizure as common faults, and on the 325iX a weak transfer case and a viscous center differential that wears out. Siegel's own E30 needed air conditioning work: a failing compressor clutch, no refrigerant oil and a compressor belt one size too short. Rust concentrates at the license plate light area, the base of the windshield, the rear of the wheel arches and the battery box in the trunk, and improper jacking crushes the pinch welds. NHTSA recall data for the E30 could not be retrieved for this research.",
 "valueTrajectory": "New, the US E30 ran from $16,460 for a 1984 318i to $36,320 for a 1992 or 1993 325iC, with the 325is at $26,990 in 1987, $28,400 in 1988 and $28,950 in 1989 and 1990. As of November 2026, Hagerty's buyer's guide puts an ordinary driver-quality sedan at around $10,000, well below the original sticker of most of these cars in unadjusted dollars. The sources consulted do not give a dated price history for the non-M E30, so this page does not draw a curve. What they do give is the shape of preference: later cars over earlier ones, small bumpers over the long 1984-1987 bumpers, and the 325is and 318is singled out for their styling. The 325iX has documented weak points in its transfer case and viscous center differential that bear on any individual car. The fault lists in every source consulted point to the same two things that separate one car from another at any price: rust in the known places, and a timing belt history that can be proven on paper.",
 "overallConfidence": "medium",
 "sources": [
  {
   "ref": "bmw-classic-e30",
   "title": "BMW 3 Series (E30)",
   "url": "https://www.bmwgroup-classic.com/en/models/bmw-classics/product-description-page.ad-3-0.bmw-3-series-e30.html",
   "publisher": "BMW Group Classic",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Production 09/1982 to 02/1994; first 3 Series offered as two-door and four-door sedan; Baur Topcabriolet; BMW's own convertible presented 1985; Touring from 1987; four-wheel-drive versions. Spec fields blank and no production total."
  },
  {
   "ref": "bmw-classic-325es",
   "title": "BMW 325es (E30) US model",
   "url": "https://www.bmwgroup-classic.com/en/models/bmw-classics/product-description-page.ad-1734-1.bmw-325es-e30-us-model.html",
   "publisher": "BMW Group Classic",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Manufacturer page for the US-model 325es: years 1986 to 1988, 2,693 cc, 122 hp at 4,250 rpm, top speed 120 mph. No torque, weight, price or production figure."
  },
  {
   "ref": "bmw-classic-325ix",
   "title": "BMW 325iX (E30)",
   "url": "https://www.bmwgroup-classic.com/en/models/bmw-classics/product-description-page.ad-112-1.bmw-325ix-e30.html",
   "publisher": "BMW Group Classic",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "325iX built 10/1985 to 11/1991, 2,494 cc, 171 hp at 5,800 rpm without catalytic converter (home-market figure), 131 mph, first post-war BMW passenger car with all-wheel drive; more than 2.3 million second-generation 3 Series sold up to 1991. Home-market price DM 42,500, not used for US pricing."
  },
  {
   "ref": "bimmertips-production",
   "title": "BMW E30 Production Data Numbers",
   "url": "https://bimmertips.com/bmw-e30-production-data-numbers/",
   "publisher": "BIMMERtips.com",
   "sourceType": "specialist",
   "reliability": "low",
   "notes": "Worldwide total 2,344,341; per-model rows 318i 556,679, 318is 41,234, 325e 152,000, 325i 352,993, 325ix 34,862; built October 1982 through 1994. Says figures were cross-checked with multiple sources but names none. No US breakdown."
  },
  {
   "ref": "autocar-3series",
   "title": "BMW 3-series: 36 years in the making",
   "url": "https://autocar.co.uk/node/23526",
   "publisher": "Autocar",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "British magazine retrospective used only for the production total: E30 production 1982 to 1994, 2.32 million built, sales past 2 million. Not used for price, output or model-year facts."
  },
  {
   "ref": "bmwblog-cd-318is",
   "title": "The E30 BMW 318is Is a Great Value in Car and Driver's Retro Review",
   "url": "https://www.bmwblog.com/2023/04/28/the-e30-bmw-318is-is-a-great-value-in-car-and-drivers-retro-review/",
   "publisher": "BMWBLOG",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "April 2023 report on Car and Driver's September 1990 test of the 318is: as-tested sticker $21,985, 1.8-liter four with 134 hp and 127 lb-ft, five-speed manual, 0-60 mph in 8.7 seconds, 2,607 lb curb weight, and C/D's line on the handling."
  },
  {
   "ref": "strictlyeta-specs",
   "title": "E30 Specifications",
   "url": "https://strictlyeta.net/specifications/",
   "publisher": "strictlyeta.net",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "US-market tables: engine codes, output and torque by engine (M10 101 hp, eta 121 hp and 170 lb-ft, Super Eta 128 hp, M20 2.5 168 hp and 164 lb-ft, M42 134 hp), curb weights by year and body, 0-60 figures attributed to Car and Driver 7/83 and 6/84 and Road & Track 4/88 and 8/90, EPA mpg for eta cars, and a US MSRP table 1984-1993 with no named price source."
  },
  {
   "ref": "strictlyeta-myd",
   "title": "Model Year Differences",
   "url": "https://strictlyeta.net/technical/model-year-differences/",
   "publisher": "strictlyeta.net",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "US model-year changes: 318i dropped after 1985, 325e replaced by 325i and 325es by 325is mid-year 1987, 2.5-liter M20 for both, all 1988 E30s get shorter aluminum bumpers, the 1988 eta variant called the Super Eta."
  },
  {
   "ref": "hagerty-318i",
   "title": "1985 BMW 318i: Yuppie Magnet",
   "url": "https://www.hagerty.com/media/?p=152705",
   "publisher": "Hagerty",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Retrospective on a 1985 318i: US-bound 318i rated 101 hp at 5,800 rpm and 103 lb-ft; North American E30s carried diving-board bumpers from 1984 to 1987. No price or production figures."
  },
  {
   "ref": "hagerty-guide",
   "title": "Your definitive 1982-94 BMW E30 3 Series buyer's guide",
   "url": "https://hagerty.com/media/?p=6018",
   "publisher": "Hagerty",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Just under 350,000 E30s sold in the US; 318i most common then 325i; US years 325e/es 1985-87, 325is 1987-91, 325ix 1988-91; outputs 318i 105 hp, eta 122-127 hp, 325i 168 hp, 318is 134 hp; M20 belt interval 50,000-60,000 miles or five years; rust locations; oil leaks, steering rack, fan clutch, 325iX transfer case and viscous center differential; around $10k for a driver-quality sedan per Hagerty's tool (undated); small-bumper and later cars more desirable."
  },
  {
   "ref": "bmwcca-siegel",
   "title": "BMW News (Rob Siegel on E30 timing belt, water pump and air conditioning)",
   "url": "https://www.bmwcca.org/node/86346",
   "publisher": "BMW Car Club of America",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Club column by Rob Siegel: E30 belt schedule 60,000 miles or four years, interference engine consequences, water pump replaced with the belt, Continental belt and tensioner kit about $40, a new aftermarket pump with a worse bearing, A/C compressor clutch and belt faults on his car."
  },
  {
   "ref": "yourmechanic-belt",
   "title": "BMW 325is Timing Belt Replacement Cost Estimate",
   "url": "https://www.yourmechanic.com/estimates/bmw/325is/timing-belt-replacement",
   "publisher": "YourMechanic",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "US mobile-mechanic estimate fetched November 2026: average $594 for a 325is timing belt replacement, $174 parts and $420 labor; belt failure means sudden loss of power and, on interference engines, internal damage."
  },
  {
   "ref": "classic-325is",
   "title": "BMW 325is - E30 Market",
   "url": "https://www.classic.com/m/bmw/3-series/e30/325is/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "Fetched November 2026: model years for the 325is given as 1987 to 1991. Market statistics panel did not load; individual sale listings could not be matched to a second source, so no dollar figure is used from this page."
  },
  {
   "ref": "classic-325ix",
   "title": "BMW 325ix Coupe - Manual - E30 Market",
   "url": "https://www.classic.com/m/bmw/3-series/e30/325ix/coupe-manual/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "Fetched November 2026: 325ix coupe debuted for the 1986 model year and arrived in North America for 1988. Market statistics partly loaded; its benchmark figure is not used because no second source covers it."
  },
  {
   "ref": "retrorides-50yrs",
   "title": "An international success story: BMW reflects on 50 years of global 3 Series production",
   "url": "https://retrorides.com.au/news/bmw-3-series-50-years-global-production/",
   "publisher": "Retro Rides",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "December 2025 article on 3 Series production history: fully automated body shop introduced in Munich at the 1982 E30 launch; E30 built at Munich, Dingolfing, Regensburg and Rosslyn, South Africa, 1982-1994. No E30 production total."
  }
 ],
 "claims": [
  {
   "section": "production",
   "claimText": "Worldwide E30 production is given as 2.32 million by Autocar and 2,344,341 by BIMMERtips, while BMW Group Classic says more than 2.3 million were sold up to 1991; no single total is stated on this page.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["autocar-3series", "bimmertips-production", "bmw-classic-325ix"],
   "conflictNote": "Autocar states 2.32 million built for 1982-1994. BIMMERtips states 2,344,341 and does not name its sources. BMW Group Classic states more than 2.3 million sold up to 1991, a sales figure for a shorter period. The roughly 24,000-car gap between Autocar and BIMMERtips is not resolved by any source consulted here.",
   "evidence": [
    { "ref": "autocar-3series", "quote": "How many built? 2.32m" },
    { "ref": "bimmertips-production", "quote": "2,344,341" },
    { "ref": "bmw-classic-325ix", "quote": "more than 2.3 million units sold up to 1991" }
   ]
  },
  {
   "section": "production",
   "claimText": "Hagerty states that just under 350,000 E30s were sold in the United States and that the 318i is by far the most common in America, followed by the 325i; this is the only US figure found and is single-sourced for that reason.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["hagerty-guide"],
   "evidence": [
    { "ref": "hagerty-guide", "quote": "Just under 350,000 of those were sold in the United States." }
   ]
  },
  {
   "section": "production",
   "claimText": "BIMMERtips gives worldwide per-model counts of 556,679 318i, 352,993 325i, 152,000 325e, 41,234 318is and 34,862 325ix; these include non-US cars, are from a low-reliability source that names no sources, and are not US counts.",
   "confidence": "low",
   "status": "unverified",
   "sourceRefs": ["bimmertips-production"],
   "evidence": [
    { "ref": "bimmertips-production", "quote": "The E30 production data numbers have been cross checked with multiple sources." }
   ]
  },
  {
   "section": "history",
   "claimText": "BMW Group Classic dates E30 production from September 1982 to February 1994, while BIMMERtips gives October 1982 as the start; the E30 was the first 3 Series offered as both a two-door and a four-door sedan, and BMW presented its own convertible in 1985.",
   "confidence": "high",
   "status": "disputed",
   "sourceRefs": ["bmw-classic-e30", "bimmertips-production"],
   "conflictNote": "BMW Group Classic states production began 09/1982. BIMMERtips states October 1982. The one-month difference is not resolved by any source consulted here.",
   "evidence": [
    { "ref": "bmw-classic-e30", "quote": "This was the first time that there had been a two-door and a four-door sedan in the 3 Series." },
    { "ref": "bimmertips-production", "quote": "The BMW E30 was manufactured from October 1982 through 1994." }
   ]
  },
  {
   "section": "history",
   "claimText": "A fully automated body shop was introduced in Munich at the 1982 launch of the E30, and the car was built at Munich, Dingolfing, Regensburg and Rosslyn in South Africa; single-sourced to a 2025 article drawing on BMW material.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["retrorides-50yrs"],
   "evidence": [
    { "ref": "retrorides-50yrs", "quote": "When the second-generation ‘E30’ 3 Series launched in 1982, a fully automated body shop was introduced at the factory." }
   ]
  },
  {
   "section": "specs",
   "claimText": "The US 318i of 1984-1985 with the M10 four is rated at 101 hp at 5,800 rpm and 103 lb-ft by strictlyeta.net and Hagerty's 318i retrospective, while Hagerty's buyer's guide gives 105 hp and 107 lb-ft.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["strictlyeta-specs", "hagerty-318i", "hagerty-guide"],
   "conflictNote": "strictlyeta.net and Hagerty's 1985 318i article state 101 hp and 103 lb-ft for US cars. Hagerty's E30 buyer's guide states 105 hp and 107 lb-ft without saying which market or year. Not resolved by any source consulted here.",
   "evidence": [
    { "ref": "strictlyeta-specs", "quote": "101 hp @ 5800 RPM" },
    { "ref": "hagerty-318i", "quote": "U.S.-bound 318is were good for 101 horsepower at 5800 rpm, and 103 lb-ft of torque." },
    { "ref": "hagerty-guide", "quote": "produced 105 horsepower and 107 lb-ft of torque." }
   ]
  },
  {
   "section": "specs",
   "claimText": "The US eta engine in the 325e and 325es is rated at 121 hp at 4,250 rpm and 170 lb-ft at 3,250 rpm by strictlyeta.net, at 122 hp at 4,250 rpm by BMW Group Classic, and between 122 and 127 hp by Hagerty; the 1988 Super Eta is listed at 128 hp.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["strictlyeta-specs", "bmw-classic-325es", "hagerty-guide"],
   "conflictNote": "strictlyeta.net states 121 hp, and 128 hp for the 1988 Super Eta. BMW Group Classic states 122 hp at 4,250 rpm. Hagerty states between 122 and 127 hp, which does not reach strictlyeta.net's 128 hp for the 1988 car. Not resolved by any source consulted here.",
   "evidence": [
    { "ref": "strictlyeta-specs", "quote": "121 hp @ 4250 RPM" },
    { "ref": "bmw-classic-325es", "quote": "122 hp (90 kW) at 4250 rpm" },
    { "ref": "hagerty-guide", "quote": "produced between 122 and 127 horsepower." }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 2,494 cc M20 in the 325i, 325is, 325iC and 325iX is rated at 168 hp at 5,800 rpm and 164 lb-ft of torque.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["strictlyeta-specs", "hagerty-guide"],
   "evidence": [
    { "ref": "strictlyeta-specs", "quote": "168 hp @ 5800 RPM" },
    { "ref": "hagerty-guide", "quote": "good for 168 horses and 164 lb-ft of torque." }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 1991 318is used a 1.8-liter M42 four rated at 134 hp and 127 lb-ft, and Car and Driver's as-tested 318is in its September 1990 issue carried a sticker of $21,985.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["bmwblog-cd-318is", "hagerty-guide", "strictlyeta-specs"],
   "evidence": [
    { "ref": "bmwblog-cd-318is", "quote": "Back in 1990, C&D's as-tested BMW 318is wore a sticker price of $21,985" },
    { "ref": "hagerty-guide", "quote": "good for 134 horsepower and 127 lb-ft of torque." },
    { "ref": "strictlyeta-specs", "quote": "134 hp @ 6000 RPM" }
   ]
  },
  {
   "section": "specs",
   "claimText": "Car and Driver recorded 0-60 mph in 8.7 seconds for a five-speed 318is at a 2,607 lb curb weight, while strictlyeta.net, citing Road & Track's August 1990 test, gives 9.8 seconds.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["bmwblog-cd-318is", "strictlyeta-specs"],
   "conflictNote": "Car and Driver, as reported by BMWBLOG, states 8.7 seconds. strictlyeta.net states 9.8 seconds and attributes its 318is figures to Road & Track 8/90. Two period US tests of the same model differ by 1.1 seconds; not resolved by any source consulted here.",
   "evidence": [
    { "ref": "bmwblog-cd-318is", "quote": "It was paired with a five-speed manual transmission and could reach 60 mph in 8.7 seconds." },
    { "ref": "strictlyeta-specs", "quote": "0-60 mph: 9.8 seconds" }
   ]
  },
  {
   "section": "history",
   "claimText": "US model years for the eta cars are not settled: strictlyeta.net lists the 325e from 1984 to 1987, Hagerty gives the 325e and 325es as 1985 to 1987, and BMW Group Classic dates the US-model 325es 1986 to 1988.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["strictlyeta-specs", "hagerty-guide", "bmw-classic-325es"],
   "conflictNote": "strictlyeta.net states 1984-1987 and lists a 1984 325e price of $20,970. Hagerty states 1985-87. BMW Group Classic states 1986-1988 for the 325es, possibly production rather than model years. Not resolved by any source consulted here.",
   "evidence": [
    { "ref": "strictlyeta-specs", "quote": "325, 325e, 325es (1984-1987)" },
    { "ref": "hagerty-guide", "quote": "you'll encounter sub-models such as the 325e/es (1985–87), 325is (1987–91), and 325ix (1988–91)." },
    { "ref": "bmw-classic-325es", "quote": "1986 - 1988" }
   ]
  },
  {
   "section": "history",
   "claimText": "The 325is was sold in the US for model years 1987 to 1991 and the all-wheel-drive 325iX from 1988 to 1991, the 325iX having debuted elsewhere for 1986.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["hagerty-guide", "classic-325is", "classic-325ix"],
   "evidence": [
    { "ref": "hagerty-guide", "quote": "you'll encounter sub-models such as the 325e/es (1985–87), 325is (1987–91), and 325ix (1988–91)." },
    { "ref": "classic-325is", "quote": "Model years for BMW 325is - E30 (1987 to 1991)" },
    { "ref": "classic-325ix", "quote": "The Manual-equipped, Coupe version of the E30 BMW 325ix debuted for the 1986 model year," }
   ]
  },
  {
   "section": "history",
   "claimText": "Mid-way through 1987 the 325e was replaced by the 325i and the 325es by the 325is; US cars wore long diving-board bumpers from 1984 to 1987, and all 1988 E30s received shorter aluminum bumpers.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["strictlyeta-myd", "hagerty-318i"],
   "evidence": [
    { "ref": "strictlyeta-myd", "quote": "Mid-year, the 325e is replaced by the 325i while the sporty 325es is succeeded by the 325is." },
    { "ref": "hagerty-318i", "quote": "from 1984–87" }
   ]
  },
  {
   "section": "specs",
   "claimText": "US list prices ran from $16,460 for the 1984 318i to $36,320 for the 1992 and 1993 325iC, with the 325i and 325is both at $26,990 in 1987; these come from a single compiled table that does not name its price source.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["strictlyeta-specs"],
   "evidence": [
    { "ref": "strictlyeta-specs", "quote": "Pricing is in US Dollars and not adjusted for inflation" }
   ]
  },
  {
   "section": "history",
   "claimText": "The convertible was presented by BMW in 1985, Hagerty dates its arrival to 1986, and strictlyeta.net's US price list begins the 325iC at 1987 and carries it through 1993, the latest US E30 in any source consulted.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["bmw-classic-e30", "hagerty-guide", "strictlyeta-specs"],
   "conflictNote": "BMW Group Classic states BMW presented its own convertible in 1985. Hagerty states the convertible followed in 1986. strictlyeta.net's US price and weight tables start the 325iC in 1987 and run to 1993. Whether any 1986 model-year convertibles were sold in the US, and confirmation of the 1992-1993 US cars from a second source, are not resolved by any source consulted here.",
   "evidence": [
    { "ref": "bmw-classic-e30", "quote": "BMW presented its own fully fledged convertible in 1985." },
    { "ref": "hagerty-guide", "quote": "followed by the convertible in '86" },
    { "ref": "strictlyeta-specs", "quote": "2988 lbs (1991-1993 325iC)" }
   ]
  },
  {
   "section": "specs",
   "claimText": "BMW Group Classic calls the 325iX the first post-war BMW passenger car with all-wheel drive, built October 1985 to November 1991; the US 325iX two-door weighs 3,010 lb for 1988-1990 and a manual car ran 0-60 mph in 7.9 seconds in Road & Track's April 1988 test.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["bmw-classic-325ix", "strictlyeta-specs"],
   "evidence": [
    { "ref": "bmw-classic-325ix", "quote": "the first post-war passenger car with all-wheel drive from BMW" },
    { "ref": "strictlyeta-specs", "quote": "7.9 seconds (325iX manual)" }
   ]
  },
  {
   "section": "specs",
   "claimText": "BMW Group Classic claims 120 mph for the US 325es, while strictlyeta.net's compiled figures for the 325 eta cars, attributed to Car and Driver's June 1984 test, give 116 mph; the eta cars are rated at 21 city and 28 highway mpg with the manual.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["bmw-classic-325es", "strictlyeta-specs"],
   "evidence": [
    { "ref": "bmw-classic-325es", "quote": "193 km/h / 120 mph" },
    { "ref": "strictlyeta-specs", "quote": "EPA fuel economy, city/hwy: 21/28 (manual), 20/27 (auto)" }
   ]
  },
  {
   "section": "problems",
   "claimText": "The M20 timing belt interval is given as 60,000 miles or four years by BMW CCA columnist Rob Siegel and as 50,000 to 60,000 miles or five years by Hagerty.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["bmwcca-siegel", "hagerty-guide"],
   "conflictNote": "Rob Siegel in a BMW CCA column states 60,000 miles or four years, whichever comes first. Hagerty states 50,000-60,000 miles or five years. The time limit differs by a year; not resolved by any source consulted here.",
   "evidence": [
    { "ref": "bmwcca-siegel", "quote": "The recommended maintenance schedule for the E30’s timing belt is 60,000 miles or four years, whichever comes first." },
    { "ref": "hagerty-guide", "quote": "respecting the 50,000–60,000 mile (or five-year) interval is not optional." }
   ]
  },
  {
   "section": "problems",
   "claimText": "The M20 is an interference engine, so a broken belt leaves valves open in the path of the pistons; owners replace the water pump with the belt, and a US estimate for a 325is belt job averages $594 as fetched in November 2026.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["bmwcca-siegel", "yourmechanic-belt"],
   "evidence": [
    { "ref": "bmwcca-siegel", "quote": "M20 guys say that when you change the timing belt, you should also do the water pump, as you’ve just exposed it." },
    { "ref": "yourmechanic-belt", "quote": "On average, the cost for a BMW 325is Timing Belt Replacement is $594 with $174 for parts and $420 for labor." }
   ]
  },
  {
   "section": "problems",
   "claimText": "E30 rust starts at the license plate light area and the base of the windshield, then the rear of the wheel arches, the underside and the trunk battery box; this rust map is single-sourced to Hagerty's buyer's guide.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["hagerty-guide"],
   "evidence": [
    { "ref": "hagerty-guide", "quote": "The license plate light area is one of the first places to check." }
   ]
  },
  {
   "section": "problems",
   "claimText": "Hagerty lists oil leaks, steering rack leaks and cooling fan clutch seizure as common E30 faults, and a weak transfer case and a wearing viscous center differential on the 325iX.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["hagerty-guide"],
   "evidence": [
    { "ref": "hagerty-guide", "quote": "The viscous center differential is known to wear out." }
   ]
  },
  {
   "section": "market",
   "claimText": "As of November 2026 Hagerty's buyer's guide, which carries no date, says its valuation tool puts a modest four-cylinder or six-cylinder driver-quality E30 sedan at around $10,000, and that small-bumper cars and later cars are the more desirable.",
   "confidence": "low",
   "status": "verified",
   "sourceRefs": ["hagerty-guide"],
   "evidence": [
    { "ref": "hagerty-guide", "quote": "Our Hagerty Valuation Tool says you'll pay around $10k for a modest four-cylinder or six-cylinder driver-quality sedan." }
   ]
  }
 ]
};
