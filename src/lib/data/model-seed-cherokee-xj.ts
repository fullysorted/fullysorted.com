/**
 * Researched model draft - Jeep Cherokee (XJ), US market (1984-2001).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedCherokeeXj = {
 "slug": "jeep/cherokee-xj",
 "make": "Jeep",
 "model": "Cherokee",
 "generation": "XJ",
 "generationCode": "XJ",
 "trim": null,
 "yearStart": 1984,
 "yearEnd": 2001,
 "bodyStyles": [
  "2-door compact SUV (unibody wagon)",
  "4-door compact SUV (unibody wagon)"
 ],
 "engines": [
  "2.5-liter (150 cu in) AMC inline four, gasoline: 105 hp for 1984-1985, 121 hp before 1991, 130 hp from 1991; Consumer Guide gives 125 hp for 1996",
  "2.8-liter GM V6, gasoline, 1984-1986: 110 hp at 4,800 rpm for 1984, 115 hp at 4,800 rpm for 1985-1986",
  "2.1-liter Renault turbodiesel inline four, indirect injection, aluminum block and head, 85 hp and 132 lb-ft, offered in the US for 1984-1987 per Hagerty",
  "4.0-liter AMC inline six, gasoline: 173 hp (1987), 177 hp (1988-1990), 190 hp and 225 lb-ft (high output, 1991-2001 per Consumer Guide and the encyclopedia record; from 1996 per Quadratec)"
 ],
 "productionTotal": null,
 "productionNotes": "No manufacturer source consulted for this page publishes an XJ production total. Jeep's heritage page and the Stellantis media history both describe the car at length without a number. The two figures that do circulate disagree: Quadratec's history of the XJ says more than 2.8 million rolled off the line over its 18 model years, while the encyclopedia record, read here through Wikiwand, gives approximately 3 million between 1983 and 2001. Neither names its own source, and neither says whether it counts only the Toledo-built cars sold in the US. For that reason productionTotal is null. A third data set measures something different: carsalesbase's table of US sales by calendar year, which runs from a 1983 entry of 8,729 through a peak of 165,261 in 1999 to 74,490 in 2001. Summed here, the 1984-2001 entries come to 2,186,949 US sales, or 2,195,678 with the 1983 entry. That is sales, not production, and it counts calendar years rather than model years, so it confirms neither total. No source fetched gives a split between two-door and four-door cars, between engines, or for the turbodiesel; a Curbside Classic writer notes only that four-doors outsold two-doors by a lopsided proportion, and Hagerty's writer says he never once came across a diesel for sale. No count of XJ-based Wagoneer or Wagoneer Limited cars, Cherokee Limited cars or 60th Anniversary Editions was found. On US pricing, the sources support a base MSRP of $20,460 for The Auto Channel's 1997 test car and a 2001 range of $17,910 to $23,385 from Edmunds, with Cars.com listing one 2001 Limited at $23,480. No verified US list price for the 1984 car was found; an owner's recollection of paying about $16,000 for a 1985 car is the only earlier figure.",
 "notableTrims": [
  {
   "name": "Two-door Cherokee (1984-2001)",
   "note": "Offered for the whole run, and until 1988 the Cherokee was the only compact SUV with both two and four doors. The two-door was always the minority body; no source gives the split."
  },
  {
   "name": "2.1-liter Renault turbodiesel (US 1984-1987)",
   "note": "85 hp and 132 lb-ft from an aluminum indirect-injection four. Hagerty recorded a 155 percent five-year value gain for these, and a writer who shopped XJs for years never saw one for sale."
  },
  {
   "name": "4.0-liter six, 190 hp (1991-2001)",
   "note": "The high-output 4.0 is the engine most associated with the model. The 190 hp rating starts in 1991 per Consumer Guide; Quadratec dates it to 1996."
  },
  {
   "name": "Cherokee Limited (from 1988)",
   "note": "The luxury Cherokee, debuting in 1988 per the Stellantis media history. A 22,000 mile, original 2001 Limited sold for $26,000 in April 2025."
  },
  {
   "name": "Wagoneer and Wagoneer Limited (XJ body)",
   "note": "The XJ sold under the Wagoneer name in two trims, distinguished by four headlamps; the Limited had vinyl woodgrain sides and cloth seats with leather bolsters. Not the full-size Grand Wagoneer, which has its own page."
  },
  {
   "name": "1997-2001 restyle (SE, Sport, Classic, Limited)",
   "note": "Updated exterior and interior styling after 13 years, front vent windows deleted. Hagerty notes these late cars bring more than early ones, and recent sales agree."
  },
  {
   "name": "60th Anniversary Edition (2001)",
   "note": "Built for the final model year. No production count was found."
  }
 ],
 "specs": {
  "layout": "Front engine, rear-wheel drive or four-wheel drive, solid axles front and rear",
  "chassis": "Uniframe: welded steel unibody with integrated frame rails in place of a separate chassis",
  "engine": "2.5-liter AMC inline four; 2.8-liter GM V6 (1984-1986); 2.1-liter Renault turbodiesel four (US 1984-1987); 4.0-liter inline six (from 1987 per Jeep's heritage page, 1989 per the Stellantis media history)",
  "power": "2.5 four: 105 hp (1984-1985), 121 hp, then 130 hp from 1991, 125 hp for 1996 per Consumer Guide. 2.8 V6: 110-115 hp. 4.0 six: 173 hp (1987), 177 hp (1988-1990), 190 hp (1991-2001). Turbodiesel: 85 hp",
  "torque": "4.0 six: 225 lb-ft at 3,000 rpm per Edmunds and The Auto Channel (the encyclopedia record gives 3,950 rpm). Turbodiesel and 2.5 four: 132 lb-ft per Hagerty",
  "transmission": "Five-speed manual (Peugeot BA-10/5 behind the 4.0 per the encyclopedia record); four-speed automatic with the six per Cars.com and Edmunds trim listings; three-speed automatic with the four-cylinder from 1995",
  "four_wheel_drive": "Command-Trac part-time with shift-on-the-fly, or Selec-Trac full-time; four-wheel ABS optional from 1989 with the six, automatic and Selec-Trac",
  "weight": "3,214 lb for a 2001 Limited 4-door 2WD automatic per Cars.com; approximately 3,357 lb per the encyclopedia record, variant unstated; 3,176 lb curb weight for The Auto Channel's 1997 Sport test car",
  "acceleration": "10.6 seconds 0-60 mph and a top speed of 105 mph in The Auto Channel's test of a 1997 Cherokee 4x4 Sport four-door; one test, not a factory figure",
  "wheelbase": "101 in (2,565 mm), 2001 per Cars.com",
  "length": "168 in (4,267 mm), 2001 per Cars.com",
  "fuel_economy": "16 mpg city and 21 mpg highway for a 2001 Limited 2WD automatic per Cars.com; Edmunds gives 18 mpg combined for 2001",
  "us_price_1997": "$20,460 base MSRP and $27,210 as tested for The Auto Channel's test car; base SE two-door 2WD about $15,000",
  "us_price_2001": "$17,910 (SE two-door 2WD, manual) to $23,385 (Limited four-door 4WD) per Edmunds; Cars.com lists the Limited four-door 2WD at $23,480",
  "doors": "Two-door and four-door bodies throughout the run",
  "assembly": "Toledo, Ohio; production ended June 2001"
 },
 "summary": "The XJ Cherokee is the compact Jeep that American Motors put on sale for the 1984 model year and that was built in Toledo, Ohio until June 2001. Its point was the uniframe: frame rails welded into a unibody, which made it 21 inches shorter than the full-size Wagoneer it followed and, depending on which Jeep-side source is read, 1,000 to 1,200 lb lighter. US buyers got two or four doors; a 2.5-liter AMC four; a GM 2.8-liter V6 through 1986; a rare Renault 2.1-liter turbodiesel through 1987; then the 4.0-liter inline six, dated to 1987 by Jeep's heritage page and 1989 by its media site, which reached 190 hp. Four-wheel drive was part-time Command-Trac or full-time Selec-Trac, and the body and interior were restyled for 1997. Sources disagree on total production, more than 2.8 million in one account and approximately 3 million in another, so no total is given. A 2001 Cherokee listed from $17,910 to $23,385. As of November 2026 classic.com's recent recorded sales run from $4,700 for a 268,000 mile 1996 car to $24,000 for a 42,000 mile 1997 Country.",
 "history": "## Why the XJ exists\n\nThe SJ-based Cherokee of 1974 was a full-size truck, and its sales fell away as the second oil crisis of the decade took hold. American Motors, by then carrying financial support from Renault, wanted a lighter and more capable replacement. Renault installed François Castaing as vice president for product engineering and development at AMC, and he oversaw the XJ; Dick Teague led the design, and Quadratec's history calls both men the father of the XJ. The answer was structural. Instead of a body bolted to a ladder frame, the XJ used what Jeep calls a uniframe, with the frame rails built into a welded unibody. Jeep's heritage page puts the result at 21 inches shorter, 6 inches narrower and 4 inches lower than the full-size Wagoneer, and lists the XJ as the first compact four-door SUV. How much lighter it was depends on which source is read: 1,000 lb on Jeep's heritage page, a half-ton in the Stellantis media history, and 1,200 lb in Quadratec's account against an SJ of 3,797 lb.\n\n## The AMC years, 1984-1987\n\nThe XJ arrived for the 1984 model year in two-door and four-door form, with an AMC 2.5-liter four or a GM 2.8-liter V6 of 110 hp, later 115 hp. Two four-wheel-drive systems were offered from the start: part-time Command-Trac with shift-on-the-fly and full-time Selec-Trac. Three off-road magazines named it 4x4 of the Year, a sweep Jeep still cites. The V6 was not quick; a Curbside Classic writer who bought a 1985 car new for about $16,000 found it slower than a Bronco II with the same displacement and output, until a dealer found the throttle linkage installed wrong. A Renault 2.1-liter turbodiesel of 85 hp and 132 lb-ft was offered in the US from 1984 to 1987 and found few buyers. Then came the 4.0-liter inline six, which Jeep's heritage page dates to 1987 and the Stellantis media history to 1989; the encyclopedia record lists a 173 hp rating for 1987.\n\n## The Limited, ABS and the 190 hp six\n\nThe Cherokee Limited debuted in 1988, and four-wheel ABS became an option in 1989 on cars with the six, an automatic and Selec-Trac. Consumer Guide records the six at 177 hp in 1990 and both engines gaining power in 1991, the four to 130 hp and the six to 190 hp; Quadratec instead dates the 190 hp rating to 1996. A driver-side airbag arrived in 1995, the same year the four became available with a three-speed automatic. For 1996 Consumer Guide has the four dropping to 125 hp and losing that automatic.\n\n## The 1997 refresh and the last cars\n\nAfter 13 years the Cherokee received updated exterior and interior styling for 1997, and the front vent windows went. The Auto Channel's 1997 test car carried a base MSRP of $20,460 and $27,210 as tested, with a base SE two-door 2WD around $15,000. Edmunds wrote of the 2001 car that it hung on for one more year before the Liberty replaced it; that final year brought a 60th Anniversary Edition, and Edmunds lists 2001 prices from $17,910 to $23,385. Production ended in June 2001 at Toledo.\n\n## The Wagoneer badge\n\nFor part of the run the XJ body was also sold as the Wagoneer and Wagoneer Limited, with four headlamps instead of two. The Limited carried vinyl woodgrain on the sides and cloth seats with leather bolsters. These are XJs with a different nose and trim, not the full-size Grand Wagoneer, which has its own page on this site.",
 "marketNotes": "classic.com tracks the XJ as its own market, 1984 to 2001, but its aggregate benchmark and chart did not load for this research, so no market-wide average is given here. What did load is a run of individual results. As of November 2026 the recorded sales on that page, all from May 2026, were: a 1997 Cherokee Country with 42,000 miles at $24,000; a 2000 Sport with 36,000 miles at $23,750; a 1988 Cherokee Wagoneer Limited with 66,000 miles at $21,758; a 1999 Sport with 81,000 miles at $18,250; a 1998 Sport with 150,000 miles at $9,800; a 1991 Laredo with 168,000 miles at $8,100; and a 1996 4x4 with 268,000 miles at $4,700. A 2001 Limited with 22,000 miles, described as original, sold for $26,000 on April 9, 2025; the classic.com page header lists Bring a Trailer as the venue, but the sale entry names no venue and does not say whether the price includes buyer's premium. The May 2026 cards name no venue and do not say whether the figures include buyer's premium. These are classic.com's figures, and no second source was fetched for any single result. Across these results mileage sorts the price more than model year does: the four sales above $18,000 all showed under 82,000 miles. Hagerty's market article adds that the 1984-1987 turbodiesel cars, despite a 155 percent five-year gain, still do not bring what the 1997-2001 cars do. At the other end, Consumer Guide's undated used-car guide gives a good-condition range of $1,000 to $2,600 for a 1990-96 Cherokee, the daily-driver market these cars came out of.",
 "whatToLookFor": "The first question on any XJ is which XJ it is, because the run covers three gasoline engine families, a diesel and two bodies. The 2.8-liter V6 cars of 1984-1986 and the 2.5-liter fours are the slow ones, and Consumer Guide calls the four with an automatic downright feeble. The 4.0-liter six is rated 173 hp in its first year, 177 hp through 1990 and 190 hp afterward in most sources, and the 1984-1987 turbodiesel is rare enough that Hagerty's writer never found one for sale. The four-wheel-drive hardware matters too: Command-Trac is part-time with shift-on-the-fly, Selec-Trac is full-time and usable on dry pavement, and the 1984-1986 Selec-Trac cars used a vacuum switch for 2WD and 4WD selection with a separate lever for low range. Four-wheel ABS was an option from 1989 only on cars with the six, an automatic and Selec-Trac. Because the uniframe builds the frame rails into the body, the condition of the floors and rails is a structural question rather than a cosmetic one, and none of the sources fetched for this page documents an XJ-specific rust pattern, so what a lift inspection shows carries more weight than any guide. On 1993-1996 cars, the recall for steering-gear bolts that could break or a frame that could crack under high steering loads is the one with structural consequences. Oil at the back of the engine points to the rear main seal, which Consumer Guide calls leak-prone on both the 2.5 and the 4.0. A 1999-2001 car with a front-end shimmy that persists after a bump has a known fix in revised lower control arms. Originality now sets the price: the strongest recent results are low-mileage late cars described as original, in a population that has spent decades as an off-road platform.",
 "commonProblems": "Consumer Guide's used-car file for the 1990-96 Cherokee is the most specific US source fetched for this page, and its trouble spots are mechanical. Rear main seals on the 2.5-liter and 4.0-liter engines are prone to leakage if the vehicle is operated in dirty conditions. On 1991-1995 cars an air conditioner that gradually stops cooling may be the engine computer failing to signal the compressor-clutch relay to cycle off. On 1993 automatics, a transmission that will not engage at first start is usually torque converter drain-down, and 1993-1994 automatics can leak fluid from the speed sensor. On 1999-2001 cars, a front-end shimmy after a pothole required revised lower control arms. The recall list in the same file covers contaminated ABS hydraulic fluid on 1990 cars, improperly crimped ABS hose fittings on 1990-1991 cars, steering-gear bolts that can break or a frame that can crack under high steering loads on 1993-1996 cars, airbags that might not deploy and a parking-brake release button that can separate on 1995 cars, and an alternator fuse fastener that could arc and start an engine-compartment fire on 1996 cars. NHTSA's own recall database could not be retrieved for this research, so these come from Consumer Guide's summary. Two gaps are stated plainly: no source fetched here documents a rust pattern specific to the XJ, and no US source fetched gives maintenance or repair costs in dollars, so this page quotes none.",
 "valueTrajectory": "The XJ's value story is short and recent. Consumer Guide's undated used-car guide put a good-condition 1990-96 Cherokee at $1,000 to $2,600, the price of a used commuter. Hagerty's market article, undated on the page, reported that 1990s XJ values had risen about 130 percent over five years and the 1984-1987 turbodiesel cars 155 percent, while still trailing the 1997-2001 cars. As of November 2026, classic.com's May 2026 sales put low-mileage late cars at $18,250 to $24,000, a 1988 Wagoneer Limited at $21,758, and high-mileage cars at $4,700 to $9,800, with a 22,000 mile 2001 Limited at $26,000 in April 2025. Against a 2001 sticker of $17,910 to $23,385, three of the sales seen, at $23,750, $24,000 and $26,000, are above the top of that range, and the high-mileage sales were a fraction of it. The split is by mileage and originality more than by model year, and unmodified, low-mileage examples are the scarce part of a car that sold more than 2 million times in the US.",
 "overallConfidence": "medium",
 "sources": [
  {
   "ref": "jeep-history-1980s",
   "title": "Jeep History: 1980-1989",
   "url": "https://www.jeep.com/history/1980s.html",
   "publisher": "Jeep (Stellantis)",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Manufacturer heritage page: XJ as first compact four-door SUV and first uniframe; 21 inches shorter, 6 inches narrower, 4 inches lower and 1,000 lb lighter than the SJ Wagoneer; 4x4 of the Year sweep by three magazines; only compact SUV with two and four doors until 1988; Command-Trac and Selec-Trac; Wagoneer and Wagoneer Limited trims with four headlamps; 4.0 six debuted in 1987; list of 14 trim names. No production total."
  },
  {
   "ref": "stellantis-history",
   "title": "Jeep History",
   "url": "https://media.stellantisnorthamerica.com/text.do?id=22196",
   "publisher": "Stellantis North America media",
   "sourceType": "manufacturer",
   "reliability": "medium",
   "notes": "Media-site history: XJ used a hybrid of frame and unibody construction, a half-ton lighter and four inches lower than its predecessor; Cherokee Limited debuted in 1988; dates the 4.0-liter six to 1989, which conflicts with Jeep's heritage page. No production total."
  },
  {
   "ref": "quadratec-part-one",
   "title": "History of the XJ Cherokee, Part One: Birth",
   "url": "https://quadratec.com/c/blog/history-xj-cherokee-part-one-birth",
   "publisher": "Quadratec",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Jeep parts specialist history: Renault support, François Castaing and Dick Teague, 1984 model year release, 1,200 lb lighter than the 3,797 lb SJ, AMC 2.5 four or GM 2.8 V6, 4x4 of the Year from three magazines, more than 2.8 million XJs built, Jeep sales doubled after launch."
  },
  {
   "ref": "quadratec-part-three",
   "title": "History of the Cherokee XJ, Part Three: Refusal to Die",
   "url": "https://www.quadratec.com/c/blog/history-cherokee-xj-part-three-refusal-die",
   "publisher": "Quadratec",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Late-run history: dates the 190 hp rating from 1996 (conflicts with Consumer Guide's 1991), Toledo, Ohio production line, Liberty KJ replacement, 60th Anniversary Edition for the final 2001 model year. No total."
  },
  {
   "ref": "wikiwand-xj",
   "title": "Jeep Cherokee (XJ)",
   "url": "https://wikiwand.com/en/articles/Jeep_XJ",
   "publisher": "Wikiwand (Wikipedia content)",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Encyclopedia record: approximately 3 million built between 1983 and 2001; production ended June 2001; engine table (2.5 four 105 hp and 130 hp, 2.8 V6 110 and 115 hp, 4.0 six 173, 177 and 190 hp with 225 lb-ft at 3,950 rpm, turbodiesel 85 hp); 1997 styling update; Wagoneer Limited woodgrain and leather-bolstered cloth; curb weight approx. 3,357 lb; Selec-Trac vacuum switch on 1984-1986 cars; Peugeot BA-10/5 manual."
  },
  {
   "ref": "carsalesbase-xj",
   "title": "Jeep Cherokee XJ US sales figures",
   "url": "https://carsalesbase.com/us-jeep-cherokee-xj/",
   "publisher": "carsalesbase.com",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "US sales by calendar year, 1983 (8,729) through 2001 (74,490), peak 165,261 in 1999. Summed here to 2,186,949 for 1984-2001. Sales, not production; no total stated on the page."
  },
  {
   "ref": "edmunds-2001",
   "title": "2001 Jeep Cherokee Review",
   "url": "https://www.edmunds.com/jeep/cherokee/2001/st-100001367/review/",
   "publisher": "Edmunds",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "US 2001 MSRP by trim from $17,910 (SE 2WD two-door) to $23,385 (Limited 4WD four-door), Limited 2WD four-door $21,870; 4.0 at 190 hp at 4,600 rpm and 225 lb-ft at 3,000 rpm; text says three-speed automatic while its trim list shows 4A; Command-Trac and Selec-Trac; final year before the Liberty; 18 mpg combined."
  },
  {
   "ref": "cars-com-2001-limited",
   "title": "2001 Jeep Cherokee Limited specs & colors",
   "url": "https://www.cars.com/research/jeep-cherokee-2001/specs/12629/",
   "publisher": "Cars.com",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "2001 Limited four-door 2WD: base MSRP $23,480, 190 hp, 225 lb-ft at 3,000 rpm, four-speed automatic, curb weight 3,214 lb, 101 in wheelbase, 168 in length, 16 city and 21 highway mpg."
  },
  {
   "ref": "autochannel-1997",
   "title": "1997 Jeep Cherokee (Hagin road test)",
   "url": "https://www2020.theautochannel.com/vehicles/new/reviews/1997/gap9726.html",
   "publisher": "The Auto Channel",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Period US road test of a 1997 Cherokee by Matt and Bob Hagin: base MSRP $20,460, price as tested $27,210, base SE two-door 2WD around $15,000, 190 hp at 4,600 rpm and 225 lb-ft at 3,000 rpm, 0-60 mph in 10.6 seconds, top speed 105 mph, curb weight 3,176 lb (one test of a 1997 Sport four-door 4x4), front vent windows deleted for 1997. Publication date not stated on the page."
  },
  {
   "ref": "consumerguide-1990-96",
   "title": "1990-96 Jeep Cherokee",
   "url": "https://consumerguide.com/used/1990-96-jeep-cherokee",
   "publisher": "Consumer Guide Automotive",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "US used-car file: 177 hp six in 1990, four 121 to 130 hp and six 190 hp in 1991, ABS option from 1989, driver airbag 1995, three-speed automatic for the four in 1995, four at 125 hp for 1996; trouble spots (rear main seal, PCM and A/C relay, torque converter drain-down, speed sensor leak, 1999-01 shimmy); recall list; good-condition price range $1,000 to $2,600 (undated)."
  },
  {
   "ref": "curbside-1985",
   "title": "Auto-Biography: 1985 Jeep Cherokee - Fifteen Years Of Yuppie Mommie Mobile And Back Country Mountain Goat",
   "url": "https://curbsideclassic.com/auto-biography/auto-biography-1985-jeep-cherokee-fifteen-years-of-yuppie-mommie-mobile-and-back-country-mountain-goat",
   "publisher": "Curbside Classic",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Owner retrospective of a 1985 V6 car bought new: about $16,000 paid, slower than a Bronco II with the same engine size and output, throttle linkage installed wrong. Single owner's account."
  },
  {
   "ref": "curbside-two-door",
   "title": "CC Capsule: 1984-1986 Jeep Cherokee - The Uncommon Two Door Version",
   "url": "https://www.curbsideclassic.com/cc-capsule-1984-1986-jeep-cherokee-the-uncommon-two-door-version/",
   "publisher": "Curbside Classic",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "On the early two-door: four-doors outsold two-doors by a lopsided proportion (no figure), 2.8 V6 at 110-115 hp. Gives no production split."
  },
  {
   "ref": "hagerty-doubled",
   "title": "5 Jeeps that have doubled in value in the last 5 years",
   "url": "https://www.hagerty.com/media/?p=287024",
   "publisher": "Hagerty",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Hagerty editorial (undated on the page): 1984-1987 Cherokee Turbodiesel up 155 percent over five years, 1990s XJ values up about 130 percent, turbodiesel 85 hp and 132 lb-ft (same torque as the 2.5 four), 190 hp 4.0 the engine most associated with the XJ, diesels still below 1997-2001 cars in price."
  },
  {
   "ref": "classic-xj-listings",
   "title": "Jeep Cherokee - XJ Market (listings page 2)",
   "url": "https://www.classic.com/m/jeep/cherokee/xj/?page=2",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "Market stats did not load; listing cards did. Sold in May 2026: 1997 Country 42k mi $24,000; 2000 Sport 36k mi $23,750; 1988 Cherokee Wagoneer Limited 66k mi $21,758; 1999 Sport 81k mi $18,250; 1998 Sport 150k mi $9,800; 1991 Laredo 168k mi $8,100; 1996 4x4 268k mi $4,700. Venue and buyer's premium not stated."
  },
  {
   "ref": "classic-2001-limited",
   "title": "2001 Jeep Cherokee Limited",
   "url": "https://classic.com/veh/2001-jeep-cherokee-limited-1j4ff58s71l529368-nKw8x7n",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "Single vehicle record: 2001 Limited, 4.0 six, automatic, 22,000 miles, described as original, sold for $26,000 on April 9, 2025. Page header lists Bring a Trailer; the sale entry names no venue and says nothing about buyer's premium."
  }
 ],
 "claims": [
  {
   "section": "history",
   "claimText": "The XJ Cherokee was introduced for the 1984 model year, was built in Toledo, Ohio, and production ended in June 2001.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["quadratec-part-one", "wikiwand-xj", "quadratec-part-three"],
   "evidence": [
    { "ref": "quadratec-part-one", "quote": "Jeep then released its Cherokee XJ for the 1984 model year." },
    { "ref": "wikiwand-xj", "quote": "When (XJ) Cherokee production ended in June 2001" },
    { "ref": "quadratec-part-three", "quote": "if it was still rolling off its Toledo, Ohio factory production line each day" }
   ]
  },
  {
   "section": "history",
   "claimText": "The XJ replaced a body-on-frame layout with a uniframe, a unibody with integrated frame rails, and Jeep lists it as the first compact four-door SUV.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["jeep-history-1980s", "stellantis-history"],
   "evidence": [
    { "ref": "jeep-history-1980s", "quote": "It was built with a revolutionary uniframe instead of a traditional chassis-and-frame." },
    { "ref": "stellantis-history", "quote": "the XJs used a hybrid of frame and unibody construction" }
   ]
  },
  {
   "section": "history",
   "claimText": "Jeep-side sources disagree on how much lighter the XJ was than the SJ it replaced: 1,000 lb, a half-ton, or 1,200 lb.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["jeep-history-1980s", "stellantis-history", "quadratec-part-one"],
   "conflictNote": "Jeep's heritage page says 1,000 lb lighter than the full-size Wagoneer (SJ). The Stellantis media history says a half-ton lighter. Quadratec says 1,200 lb lighter than its predecessor and gives the SJ at 3,797 lb. None states which variants were compared. Not resolved by any source consulted here.",
   "evidence": [
    { "ref": "jeep-history-1980s", "quote": "1,000 pounds lighter than the full-size Wagoneer (SJ)" },
    { "ref": "stellantis-history", "quote": "Cherokee XJ was a half-ton lighter, four inches lower" },
    { "ref": "quadratec-part-one", "quote": "The new Cherokee was 1,200 pounds lighter than its predecessor." }
   ]
  },
  {
   "section": "history",
   "claimText": "Jeep's heritage page gives the 1984 Cherokee as 21 inches shorter, 6 inches narrower and 4 inches lower than the full-size Wagoneer.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["jeep-history-1980s", "stellantis-history"],
   "evidence": [
    { "ref": "jeep-history-1980s", "quote": "The 1984 Jeep® Cherokee was a revolutionary vehicle: 21 inches shorter, 6-inches narrower, 4 inches lower" },
    { "ref": "stellantis-history", "quote": "Cherokee XJ was a half-ton lighter, four inches lower" }
   ]
  },
  {
   "section": "history",
   "claimText": "With Renault's financial support, AMC put François Castaing in charge of product engineering and he oversaw the XJ, while Dick Teague led its design; this rests on one specialist history.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["quadratec-part-one"],
   "evidence": [
    { "ref": "quadratec-part-one", "quote": "Renault installed François Castaing as Vice President for Product Engineering and Development on AMC's board." }
   ]
  },
  {
   "section": "history",
   "claimText": "The XJ was named 4x4 of the Year by three off-road magazines in its first season.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["jeep-history-1980s", "quadratec-part-one"],
   "evidence": [
    { "ref": "jeep-history-1980s", "quote": "scored an unprecedented sweep of the \"4X4 of the Year\" awards by three primary off-road magazines" },
    { "ref": "quadratec-part-one", "quote": "named 4x4 of the Year by three separate off-road magazines" }
   ]
  },
  {
   "section": "specs",
   "claimText": "At launch buyers chose an AMC 2.5-liter four or a GM 2.8-liter V6, and the V6 made 110 to 115 hp.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["quadratec-part-one", "curbside-two-door", "wikiwand-xj"],
   "evidence": [
    { "ref": "quadratec-part-one", "quote": "Interested buyers could choose between the AMC 2.5-liter inline-four or GM 2.8-liter V6." },
    { "ref": "curbside-two-door", "quote": "It was hardly a powerhouse what with its 110-115 hp." },
    { "ref": "wikiwand-xj", "quote": "115 hp (86 kW) at 4,800 rpm" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The Renault 2.1-liter turbodiesel made 85 hp and 132 lb-ft and was offered in the US for 1984-1987 per Hagerty; the encyclopedia record lists the engine through 1994, which reflects markets outside the US.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["hagerty-doubled", "wikiwand-xj"],
   "evidence": [
    { "ref": "hagerty-doubled", "quote": "The indirect-injection four-cylinder used an aluminum block and head and produced a paltry 85 hp and 132 lb-ft of torque." },
    { "ref": "wikiwand-xj", "quote": "85 hp (63 kW) at 3,750 rpm" }
   ]
  },
  {
   "section": "specs",
   "claimText": "Jeep's own heritage page dates the 4.0-liter inline six to 1987, while the Stellantis media history dates it to 1989.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["jeep-history-1980s", "stellantis-history", "wikiwand-xj"],
   "conflictNote": "Jeep's heritage page states the 4.0-liter six debuted in 1987, and the encyclopedia record lists a 173 hp rating for 1987. The Stellantis media history states the 4.0-liter six was introduced in 1989. Both are manufacturer pages. Not resolved by any source consulted here.",
   "evidence": [
    { "ref": "jeep-history-1980s", "quote": "the venerable 4.0L inline-six engine debuted in 1987" },
    { "ref": "stellantis-history", "quote": "a 4.0-liter I-6 was introduced in 1989." },
    { "ref": "wikiwand-xj", "quote": "173 hp (129 kW) at 4,500 rpm" }
   ]
  },
  {
   "section": "specs",
   "claimText": "Consumer Guide and the encyclopedia record give the 4.0 six 190 hp from 1991, while Quadratec dates the 190 hp rating from 1996.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["consumerguide-1990-96", "wikiwand-xj", "quadratec-part-three"],
   "conflictNote": "Consumer Guide states both engines gained power in 1991, to 130 and 190 hp, and the encyclopedia record lists 190 hp for 1991-2001. Quadratec states the XJ had 190 hp from 1996 until production ceased. Not resolved by any source consulted here.",
   "evidence": [
    { "ref": "consumerguide-1990-96", "quote": "Both engines gained power in 1991, growing to 130 and 190 horsepower, respectively." },
    { "ref": "wikiwand-xj", "quote": "190 hp (142 kW) at 4,750 rpm" },
    { "ref": "quadratec-part-three", "quote": "From 1996 until production ceased, the XJ boasted 190 horsepower" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The late 4.0 six is rated 190 hp and 225 lb-ft, but sources disagree on the engine speeds: 4,600 rpm and 3,000 rpm per Edmunds and The Auto Channel, 4,750 rpm and 3,950 rpm per the encyclopedia record.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["edmunds-2001", "autochannel-1997", "wikiwand-xj"],
   "conflictNote": "Edmunds and The Auto Channel's 1997 spec sheet give 190 hp at 4,600 rpm and 225 lb-ft at 3,000 rpm. The encyclopedia record gives 190 hp at 4,750 rpm and 225 lb-ft at 3,950 rpm. Not resolved by any source consulted here.",
   "evidence": [
    { "ref": "edmunds-2001", "quote": "This 4.0-liter makes 190 horsepower at 4,600 rpm and 225 foot-pounds of torque at 3,000 rpm." },
    { "ref": "autochannel-1997", "quote": "190 @ 4600 RPM" },
    { "ref": "wikiwand-xj", "quote": "190 hp (142 kW) at 4,750 rpm" }
   ]
  },
  {
   "section": "specs",
   "claimText": "Consumer Guide records the 2.5 four at 125 hp for 1996, while the encyclopedia record lists 130 hp for 1991-1996.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["consumerguide-1990-96", "wikiwand-xj"],
   "conflictNote": "Consumer Guide states the four-cylinder dropped five horsepower to 125 for 1996. The encyclopedia record lists 130 hp at 5,250 rpm for 1991-1996. Not resolved by any source consulted here.",
   "evidence": [
    { "ref": "consumerguide-1990-96", "quote": "The 4-cylinder dropped five horsepower, to 125, and was no longer available with the 3-speed automatic transmission." },
    { "ref": "wikiwand-xj", "quote": "130 hp (97 kW) at 5,250 rpm" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The XJ offered part-time Command-Trac with shift-on-the-fly or full-time Selec-Trac four-wheel drive, as well as rear-wheel drive.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["jeep-history-1980s", "consumerguide-1990-96"],
   "evidence": [
    { "ref": "jeep-history-1980s", "quote": "The XJ was the first vehicle with two available 4x4 systems: Command-Trac® Part-Time and Selec-Trac® Full-Time 4x4." },
    { "ref": "consumerguide-1990-96", "quote": "Cherokees came with rear-wheel drive, part-time Command-Trac 4-wheel drive, or Selec-Trac full-time 4WD." }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 2001 six-cylinder automatic is a four-speed per Cars.com and Edmunds's own trim listings, though Edmunds's review text calls it a three-speed; Consumer Guide records the three-speed automatic as a four-cylinder option from 1995.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["cars-com-2001-limited", "edmunds-2001", "consumerguide-1990-96", "wikiwand-xj"],
   "conflictNote": "Cars.com lists the 2001 Limited with a four-speed automatic and Edmunds's 2001 trim list shows 4A for the Classic and Limited, but Edmunds's review text says the 4.0 is offered with an optional three-speed automatic. Consumer Guide places a three-speed automatic with the four-cylinder in 1995. The manual is a five-speed; the encyclopedia record names the Peugeot BA-10/5 behind the 4.0. The Edmunds text is not reconciled with its own trim list by any source consulted here.",
   "evidence": [
    { "ref": "cars-com-2001-limited", "quote": "4-Speed A/T" },
    { "ref": "edmunds-2001", "quote": "The PowerTech engine can be mated to a five-speed manual or an optional three-speed automatic transmission." },
    { "ref": "consumerguide-1990-96", "quote": "Four-cylinder Cherokees became available later in the season with a 3-speed automatic transmission." },
    { "ref": "wikiwand-xj", "quote": "Peugeot BA-10/5 five-speed manual used with 4.0 L I6, 21 spline output" }
   ]
  },
  {
   "section": "specs",
   "claimText": "A 2001 Limited four-door 2WD automatic weighs 3,214 lb on a 101 in (2,565 mm) wheelbase and 168 in (4,267 mm) length, rated 16 mpg city and 21 mpg highway; the encyclopedia record gives an approximate 3,357 lb without naming the variant.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["cars-com-2001-limited", "wikiwand-xj"],
   "evidence": [
    { "ref": "cars-com-2001-limited", "quote": "3,214 lbs" },
    { "ref": "wikiwand-xj", "quote": "3,357 lb (1,523 kg) (approx.)" }
   ]
  },
  {
   "section": "specs",
   "claimText": "Four-wheel ABS became optional in 1989 on cars with the six, an automatic and Selec-Trac, and a driver-side airbag arrived in 1995.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["consumerguide-1990-96"],
   "evidence": [
    { "ref": "consumerguide-1990-96", "quote": "Four-wheel antilock braking had become an option in 1989 on vehicles with a 6-cylinder engine, automatic transmission, and Selec-Trac." }
   ]
  },
  {
   "section": "production",
   "claimText": "Total XJ production is given as more than 2.8 million by one source and approximately 3 million by another, so no total is stated on this page.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["quadratec-part-one", "wikiwand-xj", "jeep-history-1980s"],
   "conflictNote": "Quadratec states more than 2.8 million XJs rolled off the factory line over 18 model years. The encyclopedia record states production reached approximately 3 million between 1983 and 2001. Jeep's heritage page gives no total. Neither figure names its source or says whether it is limited to US-market cars. Not resolved by any source consulted here.",
   "evidence": [
    { "ref": "quadratec-part-one", "quote": "more than 2.8 million Jeep Cherokee XJ models rolled off the factory line" },
    { "ref": "wikiwand-xj", "quote": "with production reaching approximately 3 million between 1983 and 2001." },
    { "ref": "jeep-history-1980s", "quote": "There were 14 trim models throughout the years" }
   ]
  },
  {
   "section": "production",
   "claimText": "US sales by calendar year peaked at 165,261 in 1999 and fell to 74,490 in 2001; summed, the 1984-2001 figures come to 2,186,949, a sales count rather than a production count.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["carsalesbase-xj"],
   "evidence": [
    { "ref": "carsalesbase-xj", "quote": "1984 | 69,054 |" },
    { "ref": "carsalesbase-xj", "quote": "1985 | 98,877 |" },
    { "ref": "carsalesbase-xj", "quote": "1986 | 107,225 |" },
    { "ref": "carsalesbase-xj", "quote": "1987 | 111,945 |" },
    { "ref": "carsalesbase-xj", "quote": "1988 | 149,566 |" },
    { "ref": "carsalesbase-xj", "quote": "1989 | 156,118 |" },
    { "ref": "carsalesbase-xj", "quote": "1990 | 124,864 |" },
    { "ref": "carsalesbase-xj", "quote": "1991 | 121,461 |" },
    { "ref": "carsalesbase-xj", "quote": "1992 | 120,960 |" },
    { "ref": "carsalesbase-xj", "quote": "1993 | 125,443 |" },
    { "ref": "carsalesbase-xj", "quote": "1994 | 122,981 |" },
    { "ref": "carsalesbase-xj", "quote": "1995 | 110,552 |" },
    { "ref": "carsalesbase-xj", "quote": "1996 | 110,356 |" },
    { "ref": "carsalesbase-xj", "quote": "1997 | 130,041 |" },
    { "ref": "carsalesbase-xj", "quote": "1998 | 146,298 |" },
    { "ref": "carsalesbase-xj", "quote": "1999 | 165,261 |" },
    { "ref": "carsalesbase-xj", "quote": "2000 | 141,457 |" },
    { "ref": "carsalesbase-xj", "quote": "2001 | 74,490 |" }
   ]
  },
  {
   "section": "production",
   "claimText": "No source fetched gives a two-door versus four-door split; Jeep notes the Cherokee was the only compact SUV with both until 1988, and a Curbside Classic writer notes only that four-doors outsold two-doors by a lopsided proportion.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["jeep-history-1980s", "curbside-two-door"],
   "evidence": [
    { "ref": "jeep-history-1980s", "quote": "Until 1988, the Cherokee was the only compact SUV to offer both two- and four-door models." },
    { "ref": "curbside-two-door", "quote": "I'm sure AMC was caught off-guard at the lop-sided proportion of four doors to two doors." }
   ]
  },
  {
   "section": "history",
   "claimText": "The Cherokee Limited debuted in 1988, and the XJ body was also sold as the Wagoneer and Wagoneer Limited, the Limited with vinyl woodgrain sides and cloth seats with leather bolsters.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["stellantis-history", "jeep-history-1980s", "wikiwand-xj"],
   "evidence": [
    { "ref": "stellantis-history", "quote": "Cherokee Limited debuted in 1988" },
    { "ref": "jeep-history-1980s", "quote": "It was sold in two trim levels: the Wagoneer and the Wagoneer Limited." },
    { "ref": "wikiwand-xj", "quote": "The Wagoneer Limited came with vinyl wood trim on the sides and cloth seats with leather bolsters." }
   ]
  },
  {
   "section": "history",
   "claimText": "For 1997 the Cherokee received updated exterior and interior styling after 13 years, and the front door vent windows were removed.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["wikiwand-xj", "autochannel-1997"],
   "evidence": [
    { "ref": "wikiwand-xj", "quote": "After 13 years of production, 1997 saw the Cherokee receive updated exterior and interior styling." },
    { "ref": "autochannel-1997", "quote": "Jeep has done away with the vent wings that the Cherokee had in the front doors last year" }
   ]
  },
  {
   "section": "history",
   "claimText": "2001 was the final model year, with a 60th Anniversary Edition, before the Liberty replaced the Cherokee.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["edmunds-2001", "quadratec-part-three"],
   "evidence": [
    { "ref": "edmunds-2001", "quote": "Long overdue for an overhaul, the Cherokee hangs on for one more year before next year's replacement, the Liberty, debuts." },
    { "ref": "quadratec-part-three", "quote": "included a 60th Anniversary Edition that was produced for its final 2001 model year" }
   ]
  },
  {
   "section": "history",
   "claimText": "The Auto Channel's 1997 test car carried a base MSRP of $20,460 and $27,210 as tested, with a base SE two-door 2WD around $15,000; an owner who bought a 1985 V6 car new recalls paying about $16,000. No verified 1984 US list price was found.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["autochannel-1997", "curbside-1985"],
   "evidence": [
    { "ref": "autochannel-1997", "quote": "the price of the base SE model Cherokee two door, two-wheel drive \"stripper\" is down around $15K." },
    { "ref": "curbside-1985", "quote": "It all came to some $16k or more; a pretty good chunk of change ($35k adjusted)." }
   ]
  },
  {
   "section": "specs",
   "claimText": "Edmunds lists 2001 prices from $17,910 for the SE two-door 2WD to $23,385 for the Limited four-door 4WD, with the Limited four-door 2WD at $21,870; Cars.com lists the Limited four-door 2WD at $23,480.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["edmunds-2001", "cars-com-2001-limited"],
   "conflictNote": "Edmunds gives the 2001 Limited 2WD four-door at $21,870 (its FAQ says including destination). Cars.com gives the 2001 Limited four-door 2WD at $23,480, more than Edmunds's 4WD Limited at $23,385. Neither explains the gap. Not resolved by any source consulted here.",
   "evidence": [
    { "ref": "edmunds-2001", "quote": "Limited 2WD 4dr SUV (4.0L 6cyl 4A) which starts at $21,870" },
    { "ref": "cars-com-2001-limited", "quote": "$23,480" }
   ]
  },
  {
   "section": "specs",
   "claimText": "In The Auto Channel's test of one 1997 Cherokee 4x4 Sport four-door, the car reached 60 mph in 10.6 seconds, topped out at 105 mph and had a curb weight of 3,176 lb; this is a single test of a single car.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["autochannel-1997"],
   "evidence": [
    { "ref": "autochannel-1997", "quote": "0-60 MPH 10.6 seconds" },
    { "ref": "autochannel-1997", "quote": "Top speed 105 mph" },
    { "ref": "autochannel-1997", "quote": "Curb Weight 3176 Pounds" }
   ]
  },
  {
   "section": "problems",
   "claimText": "Consumer Guide lists rear main seal leaks on the 2.5 and 4.0 engines, PCM-related air conditioning faults on 1991-1995 cars, torque converter drain-down on 1993 automatics, speed sensor fluid leaks on 1993-1994 automatics, and front-end shimmy on 1999-2001 cars fixed by revised lower control arms; single-source.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["consumerguide-1990-96"],
   "evidence": [
    { "ref": "consumerguide-1990-96", "quote": "The rear main seals on 2.5- and 4.0-liter engines are prone to leakage if the vehicle is operated in dirty conditions." },
    { "ref": "consumerguide-1990-96", "quote": "If the air conditioner gradually stops cooling, the computer (PCM) may not be sending a signal to the compressor-clutch relay" },
    { "ref": "consumerguide-1990-96", "quote": "If the transmission will not engage when first started, chances are the torque converter is draining down." },
    { "ref": "consumerguide-1990-96", "quote": "Automatic-transmission fluid leaks from the speed sensor in the transmission." },
    { "ref": "consumerguide-1990-96", "quote": "Front end shimmy may continue long after hitting a bump or pothole requiring revised lower control arms be installed." }
   ]
  },
  {
   "section": "problems",
   "claimText": "Recalls summarized by Consumer Guide include steering-gear bolts that can break or a frame that can crack under high steering loads on 1993-1996 cars, 1995 airbags that might not deploy, a 1995 parking-brake release button, and a 1996 alternator fuse fastener fire risk; NHTSA's database could not be retrieved to confirm them.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["consumerguide-1990-96"],
   "evidence": [
    { "ref": "consumerguide-1990-96", "quote": "High steering loads can cause steering-gear bolts to break or frame to crack." },
    { "ref": "consumerguide-1990-96", "quote": "Certain airbags might not deploy in an accident." },
    { "ref": "consumerguide-1990-96", "quote": "Parking-brake handle-release button can separate, so parking brake may not hold and vehicle could roll inadvertently." },
    { "ref": "consumerguide-1990-96", "quote": "Fasteners that secure alternator fuse could have improper clamp load; arcing could cause fire in engine compartment." }
   ]
  },
  {
   "section": "market",
   "claimText": "As of November 2026, classic.com's own listing cards show May 2026 sales of a 42,000 mile 1997 Country at $24,000, a 36,000 mile 2000 Sport at $23,750, a 66,000 mile 1988 Cherokee Wagoneer Limited at $21,758, and a 268,000 mile 1996 4x4 at $4,700; venue and buyer's premium are not stated.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["classic-xj-listings"],
   "evidence": [
    { "ref": "classic-xj-listings", "quote": "1997 Jeep Cherokee Country" },
    { "ref": "classic-xj-listings", "quote": "$24,000" },
    { "ref": "classic-xj-listings", "quote": "42k mi" },
    { "ref": "classic-xj-listings", "quote": "$23,750" },
    { "ref": "classic-xj-listings", "quote": "36k mi" },
    { "ref": "classic-xj-listings", "quote": "1988 Jeep Cherokee Wagoneer Limited" },
    { "ref": "classic-xj-listings", "quote": "$21,758" },
    { "ref": "classic-xj-listings", "quote": "66k mi" },
    { "ref": "classic-xj-listings", "quote": "1996 Jeep Cherokee 4x4" },
    { "ref": "classic-xj-listings", "quote": "$4,700" },
    { "ref": "classic-xj-listings", "quote": "268k mi" },
    { "ref": "classic-xj-listings", "quote": "May 30, 2026" }
   ]
  },
  {
   "section": "market",
   "claimText": "A 2001 Cherokee Limited with 22,000 miles, 4.0 six and automatic, described as original, sold for $26,000 on April 9, 2025, per classic.com; the page header lists Bring a Trailer as the venue, the sale entry itself names no venue, and the entry does not say whether the price includes buyer's premium; single-source.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["classic-2001-limited"],
   "evidence": [
    { "ref": "classic-2001-limited", "quote": "Sold at for $26,000" },
    { "ref": "classic-2001-limited", "quote": "Bring a Trailer" }
   ]
  },
  {
   "section": "market",
   "claimText": "Hagerty reported 1990s XJ values up about 130 percent and 1984-1987 turbodiesel values up 155 percent over five years, with the diesels still below the 1997-2001 cars; Consumer Guide's undated guide gives $1,000 to $2,600 for a good-condition 1990-96 car.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["hagerty-doubled", "consumerguide-1990-96"],
   "evidence": [
    { "ref": "hagerty-doubled", "quote": "though Cherokee values from that era have increased about 130 percent" },
    { "ref": "consumerguide-1990-96", "quote": "Good condition price range: $1,000 – $2,600" }
   ]
  }
 ]
};
