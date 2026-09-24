/**
 * Researched model draft - Toyota MR2, second generation SW20 (US 1991-1995 model years).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedMr2Sw20 = {
 "slug": "toyota/mr2-sw20",
 "make": "Toyota",
 "model": "MR2",
 "generation": null,
 "generationCode": "SW20 (US VIN prefixes SW21 and SW22)",
 "trim": "Base and Turbo, coupe with T-bar roof, sunroof or fixed roof (US 1991-1995 model years)",
 "yearStart": 1991,
 "yearEnd": 1995,
 "bodyStyles": [
  "2-door, 2-seat mid-engine coupe with removable glass T-bar roof panels (optional on base and Turbo 1991-1992; standard on the Turbo from 1993)",
  "2-door, 2-seat mid-engine coupe with pop-up removable moonroof (optional alternative to the T-bar roof)",
  "2-door, 2-seat mid-engine coupe with fixed steel roof (hardtop), a minority of US sales"
 ],
 "engines": [
  "2.2-liter (132 cu in) 5S-FE DOHC 16-valve inline-four, naturally aspirated, transverse mid-mounted, 130 hp and 140 lb-ft (1991-1992); 135 hp and 145 lb-ft later, with sources split on whether the increase came for 1993 or for 1994 (base car, five-speed manual or four-speed automatic)",
  "2.0-liter (122 cu in) 3S-GTE DOHC 16-valve inline-four, turbocharged and intercooled, transverse mid-mounted, 200 hp and 200 lb-ft (Turbo, 1991-1995, five-speed manual only)"
 ],
 "productionTotal": null,
 "productionNotes": "Toyota has not published a US production or sales figure for the SW20 in any source fetched for this page, and the owner-assembled figures disagree. Worldwide, The JDM Registry and a production table reposted on the MR2 Owners Club forum both give 130,732 SW-series cars built from 1989 to 1999. The same forum post splits the total into 66,761 for Japan, 30,660 for other overseas markets and 33,111 for the United States and Canada, which add to 130,532, and The JDM Registry's own year-by-year rows for 1990 to 1999 add to 130,197. Neither page reconciles its rows with its headline, so productionTotal is null. US figures: the MR2 Wiki, an owner-run reference, gives US sales of 11,211 for 1991, 6,188 for 1992, 2,917 for 1993 (approximately 10 of them hardtop Turbos), 908 for the following period and about 356 in the last year, 21,580 in all by this page's arithmetic. The forum's calendar-year row for the United States and Canada together reads 17,606 for 1990, 9,505 for 1991, 3,740 for 1992, 1,742 for 1993, 625 for 1994 and 933 for 1995; the poster warns these are calendar-year sales, not model years, and that the 1990 figure includes leftover first-generation cars. The two sets cannot be reconciled from what is published; the final-year figures alone read 356 against 933. Hagerty Media states that only about 19 percent of US cars were post-revision (1993-1995) models, and the MR2 Wiki's model-year figures also work out to about 19 percent. A forum member working from ToyoDIY chassis data counts 125 black non-T-bar Turbos sold in North America for 1991 and notes that the data do not separate hardtops from sunroof cars. US list prices rest on JD Power alone: $14,898 for a 1991 base coupe, $18,228 for a 1991 Turbo and $28,668 for a 1995 Turbo. No second source for any of them was found, and no price for the 1992-1994 cars or for a base car after 1991 was fetched.",
 "notableTrims": [
  {
   "name": "1991-1992 Turbo (T-bar, sunroof or hardtop)",
   "note": "The pre-revision car: 200 hp 3S-GTE, 14-inch wheels and the original, livelier suspension tuning. The T-bar roof was an option, so sunroof and fixed-roof Turbos exist; a forum count from ToyoDIY data finds 125 black non-T-bar Turbos for 1991 in North America. $18,228 new for a 1991 Turbo, per JD Power."
  },
  {
   "name": "1991-1992 base (manual or automatic)",
   "note": "The 130 hp 2.2-liter 5S-FE, a displacement used only in the US MR2, and the only SW20 offered with an automatic here. Grassroots Motorsports argues the S54 gearbox suits the lower output. $14,898 new for a 1991 coupe, per JD Power."
  },
  {
   "name": "1993 Turbo",
   "note": "First year of the revision: 15-inch wheels, bigger brakes, an available viscous limited-slip differential and revised synchronizers. Two sources call the T-bar roof standard; the MR2 Wiki counts approximately 10 US hardtop Turbos among 2,917 US sales of all 1993 MR2s."
  },
  {
   "name": "1994-1995 Turbo",
   "note": "Passenger airbag, redesigned taillights, one-piece spoiler and a T-bar roof on every car. Fewer than a thousand US MR2s a year were sold in this period by either published count. $28,668 new for a 1995 Turbo per JD Power. The MR2 Wiki says the Turbo was not offered in California-emissions states at the end."
  },
  {
   "name": "1993-1995 base",
   "note": "135 hp, the revised chassis, standard air conditioning from 1994 and a standard Power Package on the 1995 T-bar car. Hagerty Media reported a 4 percent premium for post-revision naturally aspirated cars in #2 condition."
  },
  {
   "name": "Japanese and European SW20s (not sold here)",
   "note": "Japan built the car through 1999 and got a 242 hp 3S-GTE from 1994, an engine MR2 Bible says the US never received. Europe got no Turbo at all. Hagerty says fewer than 50 TRD2000GT widebody cars were built for Japan from 1998."
  }
 ],
 "specs": {
  "layout": "Transverse mid-mounted inline-four, rear-wheel drive, two seats",
  "chassis": "Steel unibody coupe; US VIN prefixes SW21 and SW22 appear in the 1991 recall ranges, with SW21 the 5S-FE car per MR2 Bible; suspension revised for 1993 with lower ride height, stiffer springs and longer rear toe-control arms",
  "engine": "2.2-liter 5S-FE naturally aspirated (base); 2.0-liter 3S-GTE turbocharged and intercooled (Turbo); both DOHC 16-valve inline-fours",
  "power": "130 hp base (1991-1992), 135 hp base later (year of change disputed, 1993 or 1994); 200 hp Turbo",
  "torque": "140-145 lb-ft base per Consumer Guide; 200 lb-ft Turbo per Consumer Guide and Hagerty Media",
  "transmission": "Five-speed manual standard; four-speed automatic optional on the base car only; Turbo gearbox synchronizers revised for 1993",
  "weight": "Turbo: 2,758 lb as weighed by Grassroots Motorsports in 1991, nearly 2,900 lb per Hagerty Media (disputed); no fetched US source gives a base-car weight",
  "acceleration": "0-60 mph, Turbo: 6.1 sec (Hagerty Media), 6.9 sec (Consumer Guide), about 6 sec (Grassroots Motorsports); base manual 8.5 sec (Consumer Guide)",
  "quarter_mile": "14.7 sec, Turbo (Hagerty Media; single source)",
  "epa_fuel_economy": "fueleconomy.gov: base 19 mpg city, 26 highway, manual or automatic; Turbo 18 city, 24 highway (1991) and 18, 25 (1995). Consumer Guide prints 22/29 manual, 21/28 automatic and 20/27 Turbo; Consumer Guide averaged 19.6 mpg in a Turbo",
  "wheels_and_tires": "1991-1992: 195/60 on 6-inch wheels front, 205/60 on 7-inch rear, 14-inch; 1993-1995: 15-inch, 195/55 front and 225/50 rear",
  "roof": "T-bar roof optional on both cars 1991-1992, standard on the Turbo from 1993 (with a disputed handful of 1993 hardtop Turbos); pop-up removable moonroof as an alternative",
  "cargo": "About 1 cu ft in the nose around the spare and 5.5 cu ft in the trunk behind the engine (Consumer Guide); 6.5 cu ft total (Hagerty Media)",
  "airbags": "Driver airbag from 1991 (subject of NHTSA recall 91V223000); passenger airbag added for 1994",
  "us_msrp": "$14,898 (1991 base coupe); $18,228 (1991 Turbo); $28,668 (1995 Turbo); JD Power only"
 },
 "summary": "The second-generation MR2, chassis SW20, was Toyota's answer to a question almost nobody else was still asking by 1990: whether a mid-engined two-seater could be sold at a mainstream price. It reached US showrooms in spring 1990 as an early 1991 model and was sold here for the 1991 through 1995 model years, although Toyota kept building it for Japan and Europe through 1999. US cars came two ways: a base car with a 2.2-liter four rated at 130 hp, later 135 hp, with a five-speed manual or four-speed automatic, and a Turbo with the 2.0-liter 3S-GTE making 200 hp and 200 lb-ft, manual only. A T-bar roof was offered on both and became standard on the Turbo from 1993, the year a revised chassis tamed a car known for snap oversteer. Sales fell away as prices rose: by either published count, fewer than a thousand US cars a year found buyers at the end, and a 1995 Turbo listed at $28,668 against $18,228 for a 1991 Turbo, per JD Power.",
 "history": "## Why it exists\n\nBy the time Toyota replaced the first MR2, the affordable mid-engined car was close to extinct. Grassroots Motorsports points out that the Pontiac Fiero and the Fiat X1/9 had both failed to reach the 1990s, which left the MR2 alone in its price class. Toyota answered with a bigger, heavier and more grown-up car rather than a lighter one. Consumer Guide measured about 1 cubic foot of space in the nose and 5.5 in the trunk, and Hagerty Media puts the Turbo at nearly 2,900 lb, 400 lb more than the heaviest first-generation trim. The supercharger of the late first-generation car was dropped in favor of a turbocharger. Hagerty credits Dan Gurney with helping Toyota's engineers tune the handling of the first two generations. The MR2 Wiki, an owner-run reference, repeats a claim that Yamaha assembled the cars for Toyota at about 2,000 a month; it hedges with \"apparently,\" and no manufacturer source fetched here confirms it.\n\n## The US car, 1991-1992\n\nConsumer Guide says the SW20 skipped the 1990 model year and arrived in spring 1990 as an early 1991 model; a member of the MR2 Owners Club forum working through Toyota-derived sales data dates the start to March 1990. The base car used the 2.2-liter four from the Celica GT and GT-S, rated at 130 hp; MR2 Bible identifies it as the 5S-FE, used in the MR2 only in the US. The Turbo used the 3S-GTE from the Celica All-Trac Turbo, turbocharged and intercooled, at 200 hp and 200 lb-ft. A five-speed manual was standard, and the four-speed automatic came only without the turbo. The T-bar roof was optional on either car, with a pop-up removable moonroof as the alternative, and Europe never got the Turbo at all, Hagerty notes. Grassroots Motorsports ran its own test in its March/April 1991 issue, weighed the Turbo at 2,758 lb, and rated its throttle response among the best of any turbo engine it had driven.\n\n## The 1993 revision\n\nThe early cars earned a reputation for snap oversteer: lift mid-corner and the tail comes around, and an overcorrection sends it the other way. Toyota's answer arrived in March 1992 as an early 1993 model, per Consumer Guide: lower ride height, higher-rate springs and shock absorbers, stiffer bushings, longer rear toe-control arms and wider 15-inch tires. Hagerty adds bigger brakes and a viscous limited-slip differential, which the MR2 Wiki lists as a Turbo option alongside revised second- and third-gear synchronizers; Grassroots Motorsports calls the new Turbo synchronizers dual-cone. Consumer Guide and Grassroots Motorsports both say every 1993 Turbo came with the T-bar roof, while the MR2 Wiki counts approximately 10 hardtop Turbos among 2,917 US sales that year. Some journalists thought the fix neutered the car; Toyota said the changes were for drivers whose reflexes were not those of Formula 1 drivers, as Hagerty quotes it.\n\n## The last two years\n\nA passenger airbag joined the driver airbag for 1994, and the base car gained standard air conditioning and a one-piece rear spoiler. The 1995 base T-bar car added power windows and locks as standard. Japan got a 242 hp 3S-GTE from 1994, and MR2 Bible is emphatic that the US Turbo never did. Prices kept climbing: JD Power records an original MSRP of $18,228 for a 1991 Turbo and $28,668 for a 1995 Turbo, and Consumer Guide blames escalating prices and insurance premiums for the collapse in sales. The MR2 Wiki counts 908 US sales in the penultimate period and about 356 in the last, and says the Turbo was not offered in California-emissions states at the end. Toyota withdrew the car from the US after 1995.\n\n## Before and after: AW11 and Spyder\n\nThe first-generation AW11 was smaller, lighter, offered with a supercharger in 1989, and far more numerous: the calendar-year table reposted on the MR2 Owners Club forum puts AW-series production for the United States and Canada at 96,666, against 33,111 for the SW series. The third-generation car, which Consumer Guide notes revived the name as a midengine Spyder convertible as the new century began, weighed about 700 lb less than an SW20 Turbo, per Hagerty, and has its own page.",
 "marketNotes": "As of September 2026, the most specific US values fetched for the SW20 come from JD Power, which lists a 1991 Turbo coupe at $15,100 low retail, $27,100 average retail and $33,200 high retail; a 1995 Turbo at $14,550, $25,400 and $31,300; and a 1991 base coupe at $9,600, $18,400 and $23,300. classic.com's all-generation MR2 page gives an average price of $17,406 as of September 2026 across the AW11, SW20 and Spyder combined; its SW20 submarket page was not retrieved, so no classic.com figure specific to this car appears here. Hagerty Media's SW20 market article, written after January 2020 and not current, put a #3 non-turbo at about $8,000 and a concours Turbo at up to $35,000, a #2 1993 Turbo at $22,500 against $12,300 for a #2 base car, and a #2 post-revision Turbo at $23,800 against $18,800 for a pre-revision car. Consumer Guide's used-car page still prints an undated good-condition range of $1,200 to $4,200, which no other source fetched comes near. Modified cars trade in their own market: The Truth About Cars featured a 156,000-mile 1991 Turbo with turbo, intercooler and suspension upgrades at an $18,000 asking price, undated. The sources agree on direction if not on numbers: Turbo over base, and an unmodified car over a modified one.",
 "whatToLookFor": "Rust starts where it cannot be seen. Grassroots Motorsports reports that a foam sound insulator low in the body pocket behind the seats holds water and rots the sills and rockers from the inside; reproduction rockers exist because this is the most common rust area. T-bar cars leak, and a dry one is the exception, per Grassroots Motorsports; MR2 Bible calls drips at the seals very common as the rubber ages. On a Turbo, the coolant hoses buried in the engine bay, known to owners as the Hoses from Hell, are essentially an engine-out job according to Hagerty Media, so a record of their replacement carries weight. Transaxle synchronizers crunch on the 2-3 shift, and the 1993 dual-cone upgrade did not end it; Red Line MT-90 fluid is the usual first remedy before a rebuild. Hagerty calls the car extremely reliable and the engines bulletproof, but says a clean, unmodified example is hard to find and many were spun by inexperienced owners, so accident history and originality separate cars more than mileage does. Colors and paint codes, from the MR2 Wiki alone: Aquamarine Pearl (742) for 1991-1992 only; Nautical Blue (8H3), Black (202), Super White I (043), Crimson Red (3J6), Signal Yellow (567) and Steel Mist Gray (187) from launch; Blue (8J2) and Turquoise Pearl (746) for 1993 only; Super Red (3E5) and Super White (040) from 1993; Solar Yellow (576), Dark Green Pearl (6M1) and Tropical Blue (8B6) later. Maintenance and restoration costs: no US source fetched publishes a repair or restoration price. Grassroots Motorsports says mechanical parts remain available, colored interior trim has long been discontinued, and body panels are hard to source.",
 "commonProblems": "The problems cluster around age, packaging and the chassis rather than the engines. Water: T-bar seals leak, and the foam insulator behind the seats rusts the sills from within. Cooling: on the Turbo the buried coolant hoses are an engine-out job, and MR2 Bible flags the copper coolant pipes above the fuel tank as a critical item because they crack and leak onto the tank. Transaxle: synchronizer wear on the 2-3 shift, improved but not cured by the 1993 Turbo gearbox. Steering: Consumer Guide lists a power steering pump relay fault on 1991-1995 cars that can make assist excessive, and MR2 Bible describes the relay cutting assist intermittently. Idle and oil: TVIS actuator and vacuum line leaks cause rough idle, and the distributor base O-ring weeps oil, per MR2 Bible. Electrical: Consumer Guide records 1991 cars with water in the wiring harness corroding terminals and killing the dome light, door speakers or radio. Recalls: NHTSA lists one campaign for the 1991 model year, 91V223000, replacing a steering wheel and airbag that exceeded the 60g thorax criterion in crash tests, and returns none for the 1993 or 1995 model years; the MR2 Wiki also lists a 1991 air conditioning expansion valve campaign that the NHTSA query does not return. Handling: snap oversteer is the leading cause of attrition, per Hagerty Media, softened rather than removed by the 1993 revision.",
 "valueTrajectory": "The SW20 spent two decades as a cheap used car, which is how so many ended up modified or crashed. Hagerty Media reported that #2-condition Turbo values rose 25 percent in its price guide after January 2020, with price lookups up 55 percent and insurance quotes up 22 percent over a year, and millennials accounting for 55 percent of quotes. As of September 2026, JD Power's average retail for a 1991 Turbo coupe is $27,100 against an original MSRP of $18,228, while the 1995 Turbo, $28,668 new, averages $25,400, below its original sticker in nominal dollars. That ordering runs against the post-revision premium Hagerty reported earlier, and no fetched source explains it. classic.com's all-generation average of $17,406 as of September 2026 blends in the cheaper first- and third-generation cars and says little about the SW20 alone. Where the sources agree: Turbos over base cars, and unmodified cars over the rest.",
 "overallConfidence": "medium",
 "sources": [
  {
   "ref": "consumer-guide-mr2-91-95",
   "title": "1991-95 Toyota MR2",
   "url": "https://consumerguide.com/used/1991-95-toyota-mr2/",
   "publisher": "Consumer Guide Auto",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "US used-car review. Spring 1990 arrival as early 1991 model; base 2.2-liter 130 hp, later 135; Turbo 200 hp 2.0 (also calls it 2.1 in one line); 5-speed manual, automatic non-turbo only; 14-inch tire sizes; March 1992 revision as early 1993 model and its suspension changes; T-bar standard on 1993 Turbo; passenger airbag 1994; 1995 Power Package; 0-60 6.9 sec Turbo, 8.5 base; EPA 22/29, 21/28, 20/27; trouble spots incl. power steering relay; undated $1,200-4,200 good-condition range."
  },
  {
   "ref": "fueleconomy-gov-mr2-91-95",
   "title": "Fuel Economy of 1991 - 1995 Toyota MR2",
   "url": "https://www.fueleconomy.gov/feg/PowerSearch.do?action=noform&path=1&year1=1991&year2=1995&make=Toyota&baseModel=MR2&srchtyp=ymm&pageno=1&rowLimit=50",
   "publisher": "US Department of Energy and EPA",
   "sourceType": "government",
   "reliability": "high",
   "notes": "US-spec configurations by model year: 2.2 L manual 5-speed and automatic 4-speed on regular gasoline, 2.0 L turbo manual 5-speed only on premium, 1991-1995. Current EPA ratings: base 19/26, Turbo 18/24 (1991) and 18/25 (1995)."
  },
  {
   "ref": "nhtsa-recalls-mr2-1991",
   "title": "NHTSA recalls by vehicle: 1991 Toyota MR2",
   "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=toyota&model=mr2&modelYear=1991",
   "publisher": "National Highway Traffic Safety Administration",
   "sourceType": "government",
   "reliability": "high",
   "notes": "One campaign, 91V223000: driver steering wheel and airbag exceeded the 60g thorax criterion in NHTSA crash tests; remedy a modified steering wheel."
  },
  {
   "ref": "nhtsa-recalls-mr2-1993",
   "title": "NHTSA recalls by vehicle: 1993 Toyota MR2",
   "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=toyota&model=mr2&modelYear=1993",
   "publisher": "National Highway Traffic Safety Administration",
   "sourceType": "government",
   "reliability": "high",
   "notes": "Query returns zero recall campaigns for the 1993 model year MR2."
  },
  {
   "ref": "nhtsa-recalls-mr2-1995",
   "title": "NHTSA recalls by vehicle: 1995 Toyota MR2",
   "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=toyota&model=mr2&modelYear=1995",
   "publisher": "National Highway Traffic Safety Administration",
   "sourceType": "government",
   "reliability": "high",
   "notes": "Query returns zero recall campaigns for the 1995 model year MR2."
  },
  {
   "ref": "jdpower-1991-mr2-turbo",
   "title": "Used 1991 Toyota MR2 2 Door Coupe Turbo Ratings, Values, Reviews & Awards",
   "url": "https://www.jdpower.com/cars/1991/toyota/mr2/2-door-coupe-turbo",
   "publisher": "J.D. Power",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "Original MSRP $18,228 for a 1991 Turbo coupe; retail values fetched September 2026: low $15,100, average $27,100, high $33,200."
  },
  {
   "ref": "jdpower-1995-mr2-turbo",
   "title": "Used 1995 Toyota MR2 2 Door Coupe Turbo Ratings, Values, Reviews & Awards",
   "url": "https://www.jdpower.com/cars/1995/toyota/mr2/2-door-coupe-turbo",
   "publisher": "J.D. Power",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "Original MSRP $28,668 for a 1995 Turbo coupe; retail values fetched September 2026: low $14,550, average $25,400, high $31,300."
  },
  {
   "ref": "jdpower-1991-mr2-base",
   "title": "Used 1991 Toyota MR2 2 Door Coupe Ratings, Values, Reviews & Awards",
   "url": "https://www.jdpower.com/cars/1991/toyota/mr2/2-door-coupe",
   "publisher": "J.D. Power",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "Original MSRP $14,898 for a 1991 base coupe; retail values fetched September 2026: low $9,600, average $18,400, high $23,300."
  },
  {
   "ref": "hagerty-sw20-market",
   "title": "Toyota's 1990-99 MR2 (SW20) packs a supercar punch on a Camry budget",
   "url": "https://www.hagerty.com/media/market-trends/toyotas-1990-99-mr2-sw20-packs-a-supercar-punch-on-a-camry-budget/",
   "publisher": "Hagerty Media",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Editorial market article (post-2020). North America got 1991-95 only; Turbo 200 hp and 200 lb-ft, 6.1 sec 0-60, 14.7 sec quarter; nearly 2,900 lb; Gurney handling input; Hoses from Hell; snap oversteer; 1993 revision; 19 percent post-revision; price guide figures and 25 percent rise since January 2020; no Turbo in Europe; JDM 242 hp; TRD2000GT under 50."
  },
  {
   "ref": "grm-classic-cool-sw20",
   "title": "SW20-Chassis Toyota MR2 | Classic Cool",
   "url": "https://grassrootsmotorsports.com/articles/classic-cool-toyota-mr2/",
   "publisher": "Grassroots Motorsports",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "US magazine retrospective quoting its own March/April 1991 road test (2,758 lb Turbo, throttle response) and Road & Track's first review; specialist David Hawkins on rust behind the seats, T-top leaks, synchronizers, dual cones from 1993, parts supply; T-tops standard on 1993 US Turbo; US sales ended after 1995; reader comment on the $690 power steering option."
  },
  {
   "ref": "mr2wiki-changes-by-year",
   "title": "Changes By Year - MR2 Wiki",
   "url": "https://mr2wiki.com/MKII/ChangesByYear/",
   "publisher": "MR2 Wiki (owner-run)",
   "sourceType": "club-forum",
   "reliability": "low",
   "notes": "Owner-compiled changes by revision: US sales 11,211 (1991), 6,188 (1992), 2,917 (1993, approx. 10 hardtop Turbos), 908, and about 356 in the last year; paint colors with codes by year; 1991 recall VIN ranges; Turbo LSD option 1993; no Turbo in California-emissions states at the end; Yamaha assembly claim."
  },
  {
   "ref": "mr2oc-production-thread",
   "title": "Production Numbers by Year, Color, Turbo/NA, and Roof",
   "url": "https://www.mr2oc.com/threads/production-numbers-by-year-color-turbo-na-and-roof.693538/",
   "publisher": "MR2 Owners Club Forum",
   "sourceType": "club-forum",
   "reliability": "low",
   "notes": "Forum thread reposting a country-by-year production table: SW series 130,732 total, 66,761 Japan, 30,660 other overseas, 33,111 USA and Canada; AW series 96,666 USA and Canada; calendar-year USA and Canada row; ToyoDIY-based count of 125 black non-T-top 1991 Turbos; note that the table is calendar-year sales; sales began March 1990."
  },
  {
   "ref": "jdm-registry-sw20-production",
   "title": "SW20 Production Data | The JDM Registry",
   "url": "https://thejdmregistry.com/mr2-sw20/production",
   "publisher": "The JDM Registry",
   "sourceType": "registry",
   "reliability": "medium",
   "notes": "Registry production matrix for SW20/SW21: headline total 130,732 for 1989-1999 and yearly rows from 1990 (44,069) to 1999 (669) that sum to 130,197; no US breakdown."
  },
  {
   "ref": "mr2bible-sw20",
   "title": "SW20 - MR2 Bible",
   "url": "https://mr2bible.com/generations/sw20/",
   "publisher": "MR2 Bible",
   "sourceType": "specialist",
   "reliability": "low",
   "notes": "Independent revision guide. US sales through 1995; 5S-FE in the US-only SW21; US Turbo kept the Gen 2 3S-GTE, never the JDM Gen 3; Europe and UK never officially got the Turbo; common problems: T-bar seal leaks, copper coolant pipes above the tank, TVIS leaks, EHPS relay, distributor O-ring, synchronizer crunch."
  },
  {
   "ref": "classic-com-mr2",
   "title": "Toyota MR2 Market",
   "url": "https://www.classic.com/m/toyota/mr2/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "All-generation MR2 market page, fetched September 2026: average price $17,406 across 1984-2007 cars; no SW20-specific figures on this page; the W20 submarket page was not retrieved."
  },
  {
   "ref": "ttac-used-car-1991-mr2-turbo",
   "title": "Used Car of the Day: 1991 Toyota MR2 Turbo",
   "url": "https://www.thetruthaboutcars.com/cars/used-cars/used-car-of-the-day-1991-toyota-mr2-turbo-44507215",
   "publisher": "The Truth About Cars",
   "sourceType": "journalism",
   "reliability": "low",
   "notes": "Undated listing feature: a modified 1991 Turbo with turbo, intercooler and suspension upgrades, 156,000-mile chassis, asking $18,000."
  }
 ],
 "claims": [
  {
   "section": "production",
   "claimText": "Worldwide SW-series production is given as 130,732 by two sources, but neither page's own rows add up to that figure: the forum table's regional split sums to 130,532 and The JDM Registry's yearly rows for 1990-1999 sum to 130,197.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "jdm-registry-sw20-production",
    "mr2oc-production-thread"
   ],
   "conflictNote": "The JDM Registry and the MR2 Owners Club repost both state 130,732. The forum's components (66,761 Japan, 30,660 other overseas, 33,111 USA and Canada) add to 130,532; the Registry's yearly rows add to 130,197. No source consulted here reconciles the difference; unresolved.",
   "evidence": [
    {
     "ref": "jdm-registry-sw20-production",
     "quote": "SW20/SW21 MR2 130,732 Total Production"
    },
    {
     "ref": "mr2oc-production-thread",
     "quote": "Total production figure for the SW series was 130,732, including 66,761 for Japan and 30,660 for the overseas market excluding USA and Canada"
    }
   ]
  },
  {
   "section": "production",
   "claimText": "US sales of the SW20 are not published by Toyota in any source fetched; owner-compiled model-year figures total 21,580, while a calendar-year table for the United States and Canada gives different yearly figures, including 933 for 1995 against about 356 for the final US year.",
   "confidence": "low",
   "status": "disputed",
   "sourceRefs": [
    "mr2wiki-changes-by-year",
    "mr2oc-production-thread"
   ],
   "conflictNote": "The MR2 Wiki gives US sales of 11,211, 6,188, 2,917, 908 and about 356 by model-year period. The forum's calendar-year row for the USA and Canada reads 17,606 (1990), 9,505, 3,740, 1,742, 625 and 933 (1995), and the forum poster notes it is calendar-year data that includes leftover first-generation cars in 1990. The scopes differ and no source consulted here reconciles them; unresolved.",
   "evidence": [
    {
     "ref": "mr2wiki-changes-by-year",
     "quote": "11,211 (1991) and 6,188 (1992) sold in the US."
    },
    {
     "ref": "mr2oc-production-thread",
     "quote": "USA,CANADA 1217 37674 31352 15742 8144 2537 17606 9505 3740 1742 625 933"
    }
   ]
  },
  {
   "section": "production",
   "claimText": "The MR2 Wiki counts 2,917 US sales for 1993 including approximately 10 hardtop Turbos, while Consumer Guide and Grassroots Motorsports state that every 1993 US Turbo came with the T-bar roof.",
   "confidence": "low",
   "status": "disputed",
   "sourceRefs": [
    "mr2wiki-changes-by-year",
    "consumer-guide-mr2-91-95",
    "grm-classic-cool-sw20"
   ],
   "conflictNote": "MR2 Wiki states approximately 10 hardtop Turbos were sold in the US in 1993. Consumer Guide and Grassroots Motorsports state the T-bar roof was standard on all 1993 Turbos. Not resolved by any source consulted here.",
   "evidence": [
    {
     "ref": "mr2wiki-changes-by-year",
     "quote": "2,917 sold in the US, including approximately 10 hardtop Turbos."
    },
    {
     "ref": "consumer-guide-mr2-91-95",
     "quote": "All Turbo coupes now had the previously optional T-bar roof."
    },
    {
     "ref": "grm-classic-cool-sw20",
     "quote": "Starting with the 1993 model year, U.S.-spec Turbo cars came standard with the T-tops."
    }
   ]
  },
  {
   "section": "production",
   "claimText": "About 19 percent of the SW20s sold in the US were post-revision 1993-1995 cars, per Hagerty Media; the MR2 Wiki's model-year sales figures work out to the same share.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "hagerty-sw20-market",
    "mr2wiki-changes-by-year"
   ],
   "evidence": [
    {
     "ref": "hagerty-sw20-market",
     "quote": "Only about 19 percent of the SW20 MR2s imported to the U.S. were post-revision cars."
    },
    {
     "ref": "mr2wiki-changes-by-year",
     "quote": "~356 sold in the US. Last year available in the US."
    }
   ]
  },
  {
   "section": "production",
   "claimText": "A forum member working from ToyoDIY chassis data counts 125 black non-T-top Turbos sold in North America for the 1991 model year; the data do not separate hardtops from sunroof cars.",
   "confidence": "low",
   "status": "unverified",
   "sourceRefs": [
    "mr2oc-production-thread"
   ],
   "evidence": [
    {
     "ref": "mr2oc-production-thread",
     "quote": "As you can see, there were 125 black non-T-top turbos sold for the 91 model year."
    }
   ]
  },
  {
   "section": "history",
   "claimText": "North America received only the 1991-1995 model years of the SW20, which Toyota built through 1999; US sales began in spring 1990 with an early 1991 model.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "hagerty-sw20-market",
    "grm-classic-cool-sw20",
    "consumer-guide-mr2-91-95",
    "mr2oc-production-thread"
   ],
   "evidence": [
    {
     "ref": "hagerty-sw20-market",
     "quote": "Although Toyota produced the car until 1999, North America only received the 1991–95 model years"
    },
    {
     "ref": "grm-classic-cool-sw20",
     "quote": "Even though U.S. sales ceased after 1995, production continued through 1999."
    },
    {
     "ref": "consumer-guide-mr2-91-95",
     "quote": "The reworked version arrived in spring of that year, as an early ’91 model."
    },
    {
     "ref": "mr2oc-production-thread",
     "quote": "However Toyota did start selling the MK2 in March of 1990 as a 1991 model year car."
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The US base car used a 2.2-liter four rated at 130 hp from the Celica GT and GT-S, identified by MR2 Bible as the 5S-FE used in the MR2 only in the US; EPA lists it as 2.2 L with manual or automatic.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "consumer-guide-mr2-91-95",
    "mr2bible-sw20",
    "fueleconomy-gov-mr2-91-95"
   ],
   "evidence": [
    {
     "ref": "consumer-guide-mr2-91-95",
     "quote": "Base models got a 130-horsepower, 2.2-liter 4-cylinder engine, borrowed from Toyota’s Celica GT/GT-S."
    },
    {
     "ref": "mr2bible-sw20",
     "quote": "Larger-displacement NA engine, US market only in the MR2 (SW21 chassis)."
    },
    {
     "ref": "fueleconomy-gov-mr2-91-95",
     "quote": "1991 Toyota MR2 2.2 L, 4 cyl, Manual 5-spd, Regular Gasoline 22 MPG 19 26"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The US Turbo used the turbocharged, intercooled 2.0-liter 3S-GTE rated at 200 hp and 200 lb-ft, with a five-speed manual only.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "hagerty-sw20-market",
    "consumer-guide-mr2-91-95",
    "fueleconomy-gov-mr2-91-95"
   ],
   "evidence": [
    {
     "ref": "hagerty-sw20-market",
     "quote": "The SW20 MR2 Turbo made 200 hp and 200 pound-feet of torque from the turbocharged and intercooled 2.0-liter 3S-GTE inline-four."
    },
    {
     "ref": "consumer-guide-mr2-91-95",
     "quote": "A 5-speed manual transmission was standard, with 4-speed automatic optional for nonturbo models."
    },
    {
     "ref": "fueleconomy-gov-mr2-91-95",
     "quote": "1991 Toyota MR2 2.0 L, 4 cyl, Manual 5-spd, Turbo, Premium Gasoline 20 MPG 18 24"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The base engine rose from 130 to 135 hp, but Consumer Guide and the MR2 Wiki place the change at the 1993 revision while Hagerty Media places it at the 1994-1995 model years.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "consumer-guide-mr2-91-95",
    "mr2wiki-changes-by-year",
    "hagerty-sw20-market"
   ],
   "conflictNote": "Consumer Guide (in its 1993 entry) and the MR2 Wiki (in its 1993 revision entry) date the 135 hp rating to 1993. Hagerty Media dates the extra 5 hp to the 1994-1995 model years. No manufacturer document was fetched; unresolved.",
   "evidence": [
    {
     "ref": "consumer-guide-mr2-91-95",
     "quote": "the base engine grew from 130 to 135 horsepower"
    },
    {
     "ref": "mr2wiki-changes-by-year",
     "quote": "Non-turbo models received 5-hp improvement to 135hp."
    },
    {
     "ref": "hagerty-sw20-market",
     "quote": "For the 1994–95 model years, naturally aspirated models were tuned for an additional 5 hp"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "Published Turbo weights disagree: Grassroots Motorsports weighed its 1991 test car at 2,758 lb, while Hagerty Media says the Turbo weighed nearly 2,900 lb.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "grm-classic-cool-sw20",
    "hagerty-sw20-market"
   ],
   "conflictNote": "Grassroots Motorsports prints 2,758 lb for its 1991 test Turbo. Hagerty Media states nearly 2,900 lb without naming a model year or equipment. Neither names a curb-weight method; unresolved.",
   "evidence": [
    {
     "ref": "grm-classic-cool-sw20",
     "quote": "the two liter is torquey enough to get the somewhat porky (2758 lbs.) MR2 out of its own way"
    },
    {
     "ref": "hagerty-sw20-market",
     "quote": "The SW20 MR2 Turbo weighed nearly 2900 pounds"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "Turbo 0-60 mph figures differ by source: 6.1 seconds per Hagerty Media, 6.9 seconds per Consumer Guide, and about 6 seconds per Grassroots Motorsports; Consumer Guide gives 8.5 seconds for a manual base car.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "hagerty-sw20-market",
    "consumer-guide-mr2-91-95",
    "grm-classic-cool-sw20"
   ],
   "conflictNote": "Hagerty Media states 6.1 seconds, Consumer Guide 6.9 seconds from its own test, Grassroots Motorsports about 6 seconds. The tests are not identified by date or car; unresolved.",
   "evidence": [
    {
     "ref": "hagerty-sw20-market",
     "quote": "In the MR2 Turbo, the 3S-GTE was good for a 6.1-second sprint to 60 mph and 14.7 second quarter-mile"
    },
    {
     "ref": "consumer-guide-mr2-91-95",
     "quote": "especially with the Turbo, which accelerated to 60 mph in 6.9 seconds. A stick-shift base model, in contrast, took 8.5 seconds"
    },
    {
     "ref": "grm-classic-cool-sw20",
     "quote": "In stock trim, a U.S.-spec MR2 Turbo will reach 60 mph in about 6 seconds"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "EPA fuel economy figures differ between the current fueleconomy.gov listing (base 19 city, 26 highway; 1991 Turbo 18 city, 24 highway) and Consumer Guide (22/29 manual, 21/28 automatic, 20/27 Turbo).",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "fueleconomy-gov-mr2-91-95",
    "consumer-guide-mr2-91-95"
   ],
   "conflictNote": "fueleconomy.gov lists 19/26 for the base car and 18/24 for the 1991 Turbo. Consumer Guide lists 22/29, 21/28 and 20/27 as EPA figures. Neither fetched page explains the difference; unresolved here.",
   "evidence": [
    {
     "ref": "fueleconomy-gov-mr2-91-95",
     "quote": "1991 Toyota MR2 2.0 L, 4 cyl, Manual 5-spd, Turbo, Premium Gasoline 20 MPG 18 24"
    },
    {
     "ref": "consumer-guide-mr2-91-95",
     "quote": "EPA MPG (city/hwy) MPG avg. as tested 5-speed manual 4-speed automatic 22/29 21/28"
    }
   ]
  },
  {
   "section": "history",
   "claimText": "The March 1992 revision, sold as an early 1993 model, lowered the ride height and fitted higher-rate springs and shock absorbers, stiffer bushings, longer rear toe-control arms and wider 15-inch tires to reduce snap oversteer.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "consumer-guide-mr2-91-95",
    "hagerty-sw20-market",
    "mr2wiki-changes-by-year"
   ],
   "evidence": [
    {
     "ref": "consumer-guide-mr2-91-95",
     "quote": "Changes included reduced ride height, higher-rate springs and shock absorbers, stiffer bushings, and longer rear toe-control arms."
    },
    {
     "ref": "hagerty-sw20-market",
     "quote": "Toyota revised the suspension and added wider tires for the 1993 model year"
    },
    {
     "ref": "mr2wiki-changes-by-year",
     "quote": "Larger 15\" “square spoke” 5-star wheels with 195/55 front and 225/50 rear tires."
    }
   ]
  },
  {
   "section": "history",
   "claimText": "Post-revision cars gained bigger brakes and an available viscous limited-slip differential, and the 1993 Turbo transaxle got revised synchronizers, described as dual-cone.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "hagerty-sw20-market",
    "mr2wiki-changes-by-year",
    "grm-classic-cool-sw20"
   ],
   "evidence": [
    {
     "ref": "hagerty-sw20-market",
     "quote": "post-revision MR2s are less common and offer larger brakes and a viscous limited-slip-differential"
    },
    {
     "ref": "mr2wiki-changes-by-year",
     "quote": "A limited slip differential (LSD) was an available option on the Turbo model."
    },
    {
     "ref": "grm-classic-cool-sw20",
     "quote": "Toyota upgraded the Turbo transaxle in 1993 with dual cones, but those are also prone to getting crunchy over time."
    }
   ]
  },
  {
   "section": "history",
   "claimText": "A passenger-side airbag was added for 1994; the 1991 driver airbag and steering wheel were recalled under NHTSA campaign 91V223000 for exceeding the 60g thorax criterion.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "consumer-guide-mr2-91-95",
    "nhtsa-recalls-mr2-1991"
   ],
   "evidence": [
    {
     "ref": "consumer-guide-mr2-91-95",
     "quote": "A passenger-side airbag joined the driver’s airbag for 1994."
    },
    {
     "ref": "nhtsa-recalls-mr2-1991",
     "quote": "THE DRIVER'S OCCUPANT PROTECTION SYSTEM (STEERING WHEEL AND AIR BAG) EXCEEDS THE 60G THORAX CRITERION IN NHTSA CRASH TESTS."
    }
   ]
  },
  {
   "section": "problems",
   "claimText": "NHTSA returns no recall campaigns for the 1993 or 1995 model year MR2; the MR2 Wiki lists a 1991 air conditioning expansion valve campaign that the NHTSA 1991 query does not return.",
   "confidence": "medium",
   "status": "unverified",
   "sourceRefs": [
    "nhtsa-recalls-mr2-1993",
    "nhtsa-recalls-mr2-1995",
    "mr2wiki-changes-by-year"
   ],
   "evidence": [
    {
     "ref": "nhtsa-recalls-mr2-1993",
     "quote": "Count 0 Message Results returned successfully results"
    },
    {
     "ref": "nhtsa-recalls-mr2-1995",
     "quote": "Count 0 Message Results returned successfully results"
    },
    {
     "ref": "mr2wiki-changes-by-year",
     "quote": "Air conditioning expansion valve could malfunction, reducing efficiency"
    }
   ]
  },
  {
   "section": "summary",
   "claimText": "US list prices climbed from $14,898 for a 1991 base coupe and $18,228 for a 1991 Turbo to $28,668 for a 1995 Turbo, per JD Power; Consumer Guide ties the sales decline to escalating prices and insurance premiums.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "jdpower-1991-mr2-base",
    "jdpower-1991-mr2-turbo",
    "jdpower-1995-mr2-turbo",
    "consumer-guide-mr2-91-95"
   ],
   "evidence": [
    {
     "ref": "jdpower-1991-mr2-base",
     "quote": "Base Price $14,898 Options $0 Original MSRP $14,898"
    },
    {
     "ref": "jdpower-1991-mr2-turbo",
     "quote": "Base Price $18,228 Options $0 Original MSRP $18,228"
    },
    {
     "ref": "jdpower-1995-mr2-turbo",
     "quote": "Base Price $28,668 Options $0 Original MSRP $28,668"
    },
    {
     "ref": "consumer-guide-mr2-91-95",
     "quote": "Steadily escalating prices and high insurance premiums had contributed to serious declining MR2 sales."
    }
   ]
  },
  {
   "section": "history",
   "claimText": "Europe was never offered the SW20 Turbo, and the 242 hp Japanese-market 3S-GTE introduced from 1994 never reached the US.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "hagerty-sw20-market",
    "grm-classic-cool-sw20",
    "mr2bible-sw20"
   ],
   "evidence": [
    {
     "ref": "hagerty-sw20-market",
     "quote": "because Europe was never offered the Turbo model and only ever saw a naturally aspirated MR2"
    },
    {
     "ref": "grm-classic-cool-sw20",
     "quote": "Japanese-market Turbo cars received a 242-horsepower version of Toyota"
    },
    {
     "ref": "mr2bible-sw20",
     "quote": "USDM Rev 3 turbo is updated Gen 2, not Gen 3. The US never received Gen 3 in the SW20."
    }
   ]
  },
  {
   "section": "market",
   "claimText": "As of September 2026, JD Power lists average retail values of $27,100 for a 1991 Turbo coupe, $25,400 for a 1995 Turbo and $18,400 for a 1991 base coupe.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "jdpower-1991-mr2-turbo",
    "jdpower-1995-mr2-turbo",
    "jdpower-1991-mr2-base"
   ],
   "evidence": [
    {
     "ref": "jdpower-1991-mr2-turbo",
     "quote": "Low Retail $15,100 Base Price $27,100 Options $0 Average Retail $27,100 Base Price $33,200"
    },
    {
     "ref": "jdpower-1995-mr2-turbo",
     "quote": "Low Retail $14,550 Base Price $25,400 Options $0 Average Retail $25,400 Base Price $31,300"
    },
    {
     "ref": "jdpower-1991-mr2-base",
     "quote": "Low Retail $9,600 Base Price $18,400 Options $0 Average Retail $18,400 Base Price $23,300"
    }
   ]
  },
  {
   "section": "market",
   "claimText": "Current value guidance disagrees widely: Consumer Guide prints an undated good-condition range of $1,200 to $4,200, while JD Power's low retail for a 1991 base coupe is $9,600 as of September 2026.",
   "confidence": "low",
   "status": "disputed",
   "sourceRefs": [
    "consumer-guide-mr2-91-95",
    "jdpower-1991-mr2-base"
   ],
   "conflictNote": "Consumer Guide gives $1,200-4,200 for a good-condition car with no date; JD Power gives $9,600 low retail for a 1991 base coupe. Not averaged; unresolved by any source consulted here.",
   "evidence": [
    {
     "ref": "consumer-guide-mr2-91-95",
     "quote": "Good condition price range: $1,200 – $4,200"
    },
    {
     "ref": "jdpower-1991-mr2-base",
     "quote": "Original MSRP $14,898 Base Price $9,600 Options $0 Low Retail $9,600"
    }
   ]
  },
  {
   "section": "market",
   "claimText": "Hagerty Media reported #2-condition values of $23,800 for a post-revision Turbo against $18,800 for a pre-revision Turbo, and a 25 percent rise in #2 Turbo values after January 2020.",
   "confidence": "medium",
   "status": "unverified",
   "sourceRefs": [
    "hagerty-sw20-market"
   ],
   "evidence": [
    {
     "ref": "hagerty-sw20-market",
     "quote": "a post-revision MR2 Turbo in #2 (Excellent) condition carries a 26.6 percent premium over a pre-revision Turbo ($23,800 vs. $18,800)"
    }
   ]
  },
  {
   "section": "market",
   "claimText": "classic.com's MR2 page gives an average price of $17,406 across all three generations as of September 2026, with no SW20-specific figure on that page.",
   "confidence": "low",
   "status": "unverified",
   "sourceRefs": [
    "classic-com-mr2"
   ],
   "evidence": [
    {
     "ref": "classic-com-mr2",
     "quote": "The average price of a Toyota Mr2 is $17,406"
    }
   ]
  },
  {
   "section": "market",
   "claimText": "Clean unmodified cars are scarce; many SW20s were modified, such as a 156,000-mile 1991 Turbo with turbo, intercooler and suspension upgrades offered at $18,000.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "hagerty-sw20-market",
    "ttac-used-car-1991-mr2-turbo"
   ],
   "evidence": [
    {
     "ref": "hagerty-sw20-market",
     "quote": "It can be very difficult to find a clean, unmodified example"
    },
    {
     "ref": "ttac-used-car-1991-mr2-turbo",
     "quote": "There are upgrades to the turbo, intercooler, suspension, and more."
    }
   ]
  },
  {
   "section": "problems",
   "claimText": "Water trapped by a foam insulator behind the seats rusts the sills and rockers from the inside, and T-bar roofs commonly leak as the seals age.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "grm-classic-cool-sw20",
    "mr2bible-sw20"
   ],
   "evidence": [
    {
     "ref": "grm-classic-cool-sw20",
     "quote": "There is a foam sound insulator low in the body pocket behind the seats, and it tends to collect water and rust the sills and rockers from the inside out."
    },
    {
     "ref": "mr2bible-sw20",
     "quote": "Drips into the cabin around the T-bar seals as the rubber ages. Most owners encounter it."
    }
   ]
  },
  {
   "section": "problems",
   "claimText": "Turbo coolant hoses buried in the engine bay, called the Hoses from Hell by owners, essentially require engine removal to replace; MR2 Bible also flags copper coolant pipes above the fuel tank that crack.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "hagerty-sw20-market",
    "mr2bible-sw20"
   ],
   "evidence": [
    {
     "ref": "hagerty-sw20-market",
     "quote": "They have been dubbed the “Hoses from Hell” by the MR2 community, because they essentially require an engine-out service to replace."
    },
    {
     "ref": "mr2bible-sw20",
     "quote": "Copper coolant pipes routed above the fuel tank crack from vibration over time."
    }
   ]
  },
  {
   "section": "problems",
   "claimText": "Transaxle synchronizers crunch on the 2-3 shift as mileage builds; Red Line MT-90 fluid is the usual first remedy before a rebuild.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "grm-classic-cool-sw20",
    "mr2bible-sw20"
   ],
   "evidence": [
    {
     "ref": "grm-classic-cool-sw20",
     "quote": "The easiest Band-Aid fix is to put Red Line MT-90 in the gearbox."
    },
    {
     "ref": "mr2bible-sw20",
     "quote": "Red Line MT-90 oil change is the conventional first step; rebuild eventually required."
    }
   ]
  },
  {
   "section": "problems",
   "claimText": "Power steering relay faults affect 1991-1995 cars; Consumer Guide describes excessive assist when the pump relay fails, and MR2 Bible describes assist cutting out intermittently.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "consumer-guide-mr2-91-95",
    "mr2bible-sw20"
   ],
   "evidence": [
    {
     "ref": "consumer-guide-mr2-91-95",
     "quote": "If power steering pump relay fails, power steering assist may become excessive. (1991-95)"
    },
    {
     "ref": "mr2bible-sw20",
     "quote": "EHPS relay fails intermittently; power steering cuts out, often returning when the relay is tapped or replaced."
    }
   ]
  },
  {
   "section": "problems",
   "claimText": "Mechanical parts remain available, but colored interior trim has long been discontinued and body panels are hard to source.",
   "confidence": "medium",
   "status": "unverified",
   "sourceRefs": [
    "grm-classic-cool-sw20"
   ],
   "evidence": [
    {
     "ref": "grm-classic-cool-sw20",
     "quote": "Body panels are harder to source, but the used market is pretty strong and there are a couple of companies reproducing the rockers to address the most common rust area."
    }
   ]
  },
  {
   "section": "history",
   "claimText": "Paint colors and codes listed by the MR2 Wiki include Aquamarine Pearl (742) for 1991-1992 only, Turquoise Pearl (746) and Blue (8J2) for 1993 only, and Solar Yellow (576), Dark Green Pearl (6M1) and Tropical Blue (8B6) added later.",
   "confidence": "low",
   "status": "unverified",
   "sourceRefs": [
    "mr2wiki-changes-by-year"
   ],
   "evidence": [
    {
     "ref": "mr2wiki-changes-by-year",
     "quote": "Available only in 1993: Blue (8J2) Turquoise Pearl (746) New colors introduced: Super Red (3E5) Super White (040)"
    }
   ]
  },
  {
   "section": "history",
   "claimText": "The SW20 Turbo weighed about 400 lb more than the heaviest first-generation trim and about 700 lb more than the MR2 Spyder that followed.",
   "confidence": "medium",
   "status": "unverified",
   "sourceRefs": [
    "hagerty-sw20-market"
   ],
   "evidence": [
    {
     "ref": "hagerty-sw20-market",
     "quote": "a whole 400 pounds more than the heaviest Mk I trim and 700 pounds above the MR2 Spider that followed"
    }
   ]
  },
  {
   "section": "history",
   "claimText": "Within the United States and Canada, AW-series production was 96,666 against 33,111 for the SW series, according to the table reposted on the MR2 Owners Club forum.",
   "confidence": "low",
   "status": "unverified",
   "sourceRefs": [
    "mr2oc-production-thread"
   ],
   "evidence": [
    {
     "ref": "mr2oc-production-thread",
     "quote": "Within the United States and Canada, production for the AW series was 96,666, and for the SW series 33,111"
    }
   ]
  }
 ]
};
