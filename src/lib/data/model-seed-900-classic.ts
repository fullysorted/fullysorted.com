/**
 * Researched model draft - Saab 900, classic generation (US model years 1979-1993, convertible to 1994).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seed900Classic = {
 "slug": "saab/900-classic",
 "make": "Saab",
 "model": "900",
 "generation": "Classic",
 "generationCode": null,
 "trim": null,
 "yearStart": 1979,
 "yearEnd": 1993,
 "bodyStyles": [
  "3-door hatchback",
  "5-door hatchback",
  "4-door sedan",
  "2-door convertible (soft top, built by Valmet in Finland)"
 ],
 "engines": [
  "2.0-liter inline four, naturally aspirated, 115 hp in US form at launch (110 hp in western and Rocky Mountain state cars), 1979 model year",
  "2.0-liter inline four, eight-valve, turbocharged, 135 hp and 160 lb-ft in US form for the 1979 model year; Automatic Performance Control (APC) from 1982",
  "2.0-liter inline four, 16-valve DOHC, turbocharged and intercooled, LH fuel injection, 160 hp and 188 lb-ft, US 1985 model year onward; SPG version 5 hp more from 1987 and 175 hp from 1990",
  "2.0-liter 16-valve inline four, naturally aspirated, 125 hp (900S, 1986) and 128 hp (all naturally aspirated 900s, 1989); enlarged to 2.1 liters and 140 hp for 1991",
  "2.0-liter 16-valve turbo rated at 185 hp in the 1994 Commemorative Edition convertible, five-speed manual only"
 ],
 "productionTotal": null,
 "productionNotes": "The only total found for the whole classic generation is the Saab museum site's 908,817 cars over some 15 years, of which 48,888 were convertibles. It is carried here as a single-source figure and is not entered as the production total, because no second source consulted states a generation total. The convertible count itself does not agree across sources: the Saab museum site gives 48,888, the Saab press material carried by Autoblog for the convertible's 25th anniversary gives 48,894 first-generation convertibles, and Hagerty's UK buying guide says around 50,000, which it counts inside 202,284 first-generation Turbos. The difference between 48,888 and 48,894 is six cars and is not explained by any source consulted. For the US market, The Saab Network's model-year history lists 900 importation for every model year from 1979 to 1993; added together the rows come to 322,787, peaking at 38,720 for the 1985 model year, while the same document's introduction says more than 340,000 were sold here. The table gives no 1994 figure, so the gap between the two numbers is not accounted for in the document. The SPG count of 7,625 comes from two independent writers, The Truth About Cars and Curbside Classic, though the first calls them North American examples and the second says imported to the US between 1985 and 1991; Curbside Classic alone gives 771 for the 1990 model year. No marque registry figure for the SPG or the convertible could be fetched, Wikipedia's page could not be retrieved, and no reference book pages were available. US period road tests from Car and Driver, Road and Track or MotorTrend could not be retrieved with figures; the period US press cited here is The Christian Science Monitor in 1980 and 1985.",
 "notableTrims": [
  {
   "name": "900 Turbo, eight-valve (US from 1979)",
   "note": "135 hp and 160 lb-ft as first sold here for 1979, APC knock control from 1982, and, in Hagerty's description of the original 900, a four- or five-speed manual depending on the year, or an automatic. The Monitor quoted $12,000 for the Turbo in early 1980."
  },
  {
   "name": "900 Turbo 16-valve (1985 onward)",
   "note": "The 16-valve DOHC intercooled engine at 160 hp and 188 lb-ft arrived in the US for 1985, when the Monitor called it the only 16-valve turbocar in the US. Hagerty lists sedan, hatchback and convertible bodies for the 16-valve Turbo."
  },
  {
   "name": "900 Turbo SPG (Special Performance Group), 1985-1991",
   "note": "Three-door hatchback with a manual transmission only, body kit, three-spoke wheel and unique wheels. Two writers count 7,625 imported. Black or gray through 1989, Beryl Green added for the last year. 175 hp from 1990."
  },
  {
   "name": "900 Turbo Convertible (US from summer 1986)",
   "note": "Shown at Frankfurt in September 1983 and built by Valmet at Uusikaupunki, Finland. The first 400 cars were built for the US market. The classic convertible ran on as a 1994 model after the sedans and hatchbacks ended."
  },
  {
   "name": "900 Turbo Convertible Commemorative Edition (1994)",
   "note": "The last US classic convertible: 185 hp turbo, five-speed manual only, black metallic paint with tan top and tan leather with charcoal piping. Saab's US history says 500 were to be imported."
  },
  {
   "name": "900 and 900S, naturally aspirated",
   "note": "The 16-valve engine reached the 900S at 125 hp for 1986 and every naturally aspirated 900 at 128 hp for 1989, then grew to 2.1 liters and 140 hp for 1991."
  }
 ],
 "specs": {
  "layout": "Front-wheel drive (EPA); hatchback, sedan and convertible bodies",
  "chassis": "A heavy rework of the Saab 99, per The Truth About Cars",
  "engine": "2.0-liter inline four; eight-valve turbo from 1979, 16-valve DOHC turbo with intercooler and LH fuel injection from US 1985 model year; naturally aspirated 16-valve from 1986, 2.1 liters from 1991",
  "power": "135 hp (US eight-valve Turbo, 1979); 160 hp (16-valve Turbo, 1985); SPG 5 hp more from 1987 and 175 hp from 1990; 185 hp for the 1994 Commemorative Edition convertible",
  "torque": "160 lb-ft (eight-valve Turbo); 188 lb-ft (16-valve Turbo, 1985)",
  "transmission": "Four-speed manual on early cars, five-speed manual optional from 1980 on EMS and Turbo; three-speed automatic; SPG manual only",
  "weight": "About 2,700 lb for the Turbo per Hagerty (single source)",
  "acceleration": "No US-tested 0-60 mph figure was retrieved for this page; not documented here",
  "fuel_economy": "EPA 17 mpg city, 22 mpg highway, 19 mpg combined for the 1989 900 2.0-liter turbo with three-speed automatic",
  "boost_control": "Automatic Performance Control (APC) on the 900 Turbo from 1982, lowering boost when it senses knock",
  "turbo_cooling": "Water-cooled turbocharger on the 900 Turbo from 1988",
  "us_price_1980": "$12,000 for the 900 Turbo per The Christian Science Monitor (single source)",
  "us_price_1985": "$18,439 for the base 900 four-door turbo to $21,684 for the three-door hatchback per The Christian Science Monitor (single source)",
  "us_price_1990_spg": "$28,995 list for a 1990 SPG per Curbside Classic (single source)",
  "us_importation_peak": "38,720 cars for the 1985 model year, the highest year in Saab's US model-year table"
 },
 "summary": "The classic Saab 900 is the hatchback, sedan and convertible Saab sold in the US from the 1979 model year to 1993, with the convertible continuing as a 1994 model. It began as a heavy rework of the 99. The turbo was rated at 135 hp in US form at launch, then from the 1985 model year a 16-valve, double-overhead-cam, intercooled 2.0-liter rated at 160 hp and 188 lb-ft. The SPG (Special Performance Group) three-door arrived with that engine, came only with a manual transmission, and reached 175 hp for 1990; two independent writers put SPG imports at 7,625 between 1985 and 1991. The convertible was shown at Frankfurt in September 1983 and built by Valmet in Finland, and its first 400 cars were built for the US market. Saab's US importation table peaks at 38,720 cars for the 1985 model year. The known weak points are a manual gearbox that Hagerty UK calls a weak spot when the driver is too eager with gear changes, headliners that sag, and rust at the door bottoms and suspension mounts. As of November 2026 classic.com's average price for an SPG is $17,285.",
 "history": "## Why the 900 exists\n\nThe 900 was not a clean sheet. The Truth About Cars describes it as a heavy rework of Saab's prior family car, the 99, and the Saab museum site records it revealed in May 1978 and on sale that autumn as a 1979 model. Saab's US model-year history lists the American launch engines as a naturally aspirated 2.0-liter at 115 hp (110 hp for cars sold in the western and Rocky Mountain states) and a turbocharged version at 135 hp; Hagerty gives the US Turbo 160 lb-ft. The Saab museum site and Hagerty's UK guide, both European sources that do not say which market's car they describe, quote 145 hp for the original Turbo; none of the sources consulted explains the 10 hp gap. Early cars had a four-speed manual, with a five-speed optional on the EMS and Turbo from 1980. The Christian Science Monitor, in a report archived under January 1980, gave the Turbo's price as $12,000.\n\n## Boost control and the 16-valve car\n\nFor 1982 the Turbo gained Automatic Performance Control, which senses knock and pulls boost back on poor fuel. The 16-valve engine reached Europe first, in the 1984 Turbo 16 sedan. In the US the 1985 model year brought the 16-valve turbo at 160 hp, with LH fuel injection and hydraulic lifters, and 188 lb-ft. The Monitor's 1985 report called it the only 16-valve turbocar in the US and listed prices from $18,439 for the base four-door turbo to $21,684 for the three-door hatchback. The naturally aspirated 16-valve engine followed in the 900S at 125 hp for 1986, became standard across naturally aspirated cars at 128 hp for 1989, and grew to 2.1 liters and 140 hp for 1991. A water-cooled turbocharger arrived on the Turbo for 1988.\n\n## The SPG\n\nThe Special Performance Group was the North American name for the top turbo. The Truth About Cars records 28 SPG prototypes handed to the media in 1984; Saab's US history lists the three-door SPG as new for 1985. It came only as a hatchback with a manual transmission, with a body kit, a three-spoke steering wheel and unique three-spoke wheels. It gained 5 hp for 1987 on premium unleaded, and 175 hp for 1990. Colors were black or gray through 1989, with Beryl Green added for the final year. Curbside Classic counts 7,625 SPGs imported between 1985 and 1991, including 771 for 1990, and gives a 1990 car's list price as $28,995. When the SPG ended is less settled than it looks; see the claims below.\n\n## The convertible\n\nSaab showed a 900 convertible concept at the Frankfurt show in September 1983. Production began in 1986 with a run of 400 cars, which Saab's own anniversary material says were built for the US market; the cars were assembled by Valmet at Uusikaupunki, Finland. Saab's US history places the convertible's US debut in the summer of 1986, Grassroots Motorsports says late 1986, and the Saab museum site, which files the convertible under the 1987 model year, says the first 400 were flat-front 1986 models and all were sold in the US. Grassroots Motorsports says it sold well here. How many were built is not agreed: 48,888, 48,894 and around 50,000 all appear in the sources.\n\n## The last independent Saab\n\nThe 900 kept its original face through 1986 and was refreshed for the 1987 model year. In 1990 General Motors took a 50 percent stake in Saab, and Hagerty notes that by 1991 the price had crept above the $30,000 cap Car and Driver set for its 10Best list, a list that had named the 900 Turbo four times. The Saab museum site calls 1993 the last model year of the classic 900, but the convertible carried on: 1994 models were introduced in May 1993, and the US run closed with a Commemorative Edition convertible, 185 hp, five-speed manual only, special black metallic paint with a tan top and tan leather, of which Saab's US history says 500 would be imported. The museum site's total for the generation is 908,817 cars.",
 "marketNotes": "As of November 2026 classic.com's SPG market page gives an average price of $17,285 for the first-generation SPG. Its lowest recorded sale is $1,001 for a 1986 900 Turbo SPG on December 26, 2023, and its highest is $57,000 for a 1991 900 SPG on April 7, 2022; the page does not name the venue for either sale or say whether buyer's premium is included. The same page states the SPG was produced for model years 1985 to 1994 while also saying it was in production until 1991, so its own year range is not consistent. As of November 2026 classic.com's first-generation 900 page lists 408 related listings and its 900 Turbo page 251; the fetch returned no average or benchmark for either page. No auction house lot page for a classic 900 was fetched for this research, so no individual auction result is quoted here. Hagerty's editorial on the 1987-1993 Turbo carries condition values but no publication date, so those figures are not used. Grassroots Motorsports in June 2012 put an average SPG at $2,500 to $5,000 and a premium one at about $10,000.",
 "whatToLookFor": "The US Turbo was rated at 135 hp for 1979; the 16-valve turbo arrived for the 1985 model year at 160 hp, and the SPG adds 5 hp from 1987 and reaches 175 hp for 1990. A water-cooled turbocharger marks a 1988 or later Turbo. An SPG is a three-door hatchback with a manual transmission, its own body kit, a three-spoke steering wheel and three-spoke wheels, and through 1989 it was painted black or gray, with Beryl Green added for 1991. On the gearbox, Hagerty's UK guide describes a change that is notchy at best and names jumping out of gear under acceleration and rattling from the pinion or layshaft bearings as the signs of a tired unit, and clicking as a sign of worn driveshafts. Grassroots Motorsports names door bottoms, hatch bottoms and wheel wells as rust points, and Hagerty's UK guide adds the fuel filler, battery tray, front bulkhead, fuel tank, rear crossmember, jacking points and suspension mounts, plus clear drain channels on sunroof cars. Grassroots Motorsports calls a sagging headliner a very common early 900 problem. It reports wiring harness insulation failure on 1985 and 1986 cars and singles out bare wires and burned connectors, and it notes an unusual front caliper with an integral handbrake piston on SPGs built from 1985 through 1987. Hagerty's UK guide reads blue smoke at startup as the sign of a worn turbo.",
 "commonProblems": "On the manual gearbox, each source puts it its own way. Hagerty's UK guide calls it always a bit of a weak spot if the driver was too eager with gear changes, and Grassroots Motorsports' buyer's guide says early manual transmissions sometimes expired after only about 60,000 miles. Grassroots Motorsports' SPG retrospective calls the five-speed manuals relatively durable. Hagerty's UK guide reckons the early four-speed the more reliable box. Grassroots Motorsports calls the automatic difficult to rebuild, and a Saab enthusiast site says automatics behind turbo engines tend to fail early. Inside, a sagging headliner is described by Grassroots Motorsports as a very common early 900 problem, and Hagerty's UK guide says the lining likes to come adrift. Rust collects at door and hatch bottoms, wheel wells, suspension mounts and the rear crossmember, and Grassroots Motorsports says exhausts can rust out in as little as 75,000 miles. Head gaskets fail on neglected engines, and Grassroots Motorsports rates them more prone to failure than the timing chains. Turbochargers last a long time when maintained, but the same buyer's guide says neglect can kill one in 6,000 miles. Grassroots Motorsports reports wiring harness insulation failure on 1985 and 1986 cars, and says the unusual front caliper on SPGs built from 1985 through 1987 is not uncommonly clunky. The APC system can fail and cause rough running.",
 "valueTrajectory": "The Christian Science Monitor gave its price as $12,000 in early 1980; in 1985 the range ran from $18,439 to $21,684; a 1990 SPG listed at $28,995, and by 1991, Hagerty writes, the price had crept above the $30,000 cap Car and Driver set for its 10Best list. In June 2012 Grassroots Motorsports put an average SPG at $2,500 to $5,000 and a premium one at about $10,000. As of November 2026 classic.com's average for an SPG is $17,285, its recorded high is $57,000 for a 1991 SPG in April 2022, and its recorded low is $1,001 for a 1986 SPG in December 2023. The SPG, at 7,625 imported, is the variant with its own classic.com market; the eight-valve and 16-valve Turbos and the convertible, built in far larger numbers, returned no classic.com average or benchmark as of November 2026, only listings: 408 on the first-generation page and 251 on the Turbo page. The 1994 Commemorative Edition convertible, of which 500 were to be imported, has no market figure in any source fetched.",
 "overallConfidence": "medium",
 "sources": [
  {
   "ref": "saabmuseum-my",
   "title": "Saab 900 model years",
   "url": "https://www.saabmuseum.com/900/my.html",
   "publisher": "saabmuseum.com",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Model-year chronicle: revealed May 1978, on sale as the 1979 model year; 145 hp original Turbo (market not stated); five-speed optional on EMS and Turbo 1980; APC 1982; Turbo 16 sedan 1984; intercooler on eight-valve turbos 1986; convertible 1987 and the first 400 sold in the US; US third brake light 1989; 1993 last model year of the classic 900; 908,817 built, of which 48,888 convertibles."
  },
  {
   "ref": "saabnet-timeline",
   "title": "Saab 900 US model-year history",
   "url": "https://www.saabnet.com/tsn/tl.html",
   "publisher": "The Saab Network (saabnet.com)",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "OCR transcription of a US model-year history of the 900. US importation by model year 1979-1993 (11,297 to 9,936, peak 38,720 for 1985); more than 340,000 sold in the US; 115 hp and 135 hp launch engines; APC 1982; 16-valve turbo 160 hp for 1985; SPG new for 1985, +5 hp 1987, 175 hp 1990, deletion stated in both the 1989 and 1992 entries; naturally aspirated 125, 128 and 140 hp; water-cooled turbo 1988; US convertible summer 1986; 1994 convertibles from May 1993; 500 Commemorative Editions at 185 hp."
  },
  {
   "ref": "csm-1980",
   "title": "Once-dull Saab wheels out some high performance",
   "url": "https://www.csmonitor.com:443/1980/0122/012202.html",
   "publisher": "The Christian Science Monitor",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Period US report on the 900 Turbo; gives the price as $12,000. Date inferred from the archive address (January 22, 1980); no output or test figures stated."
  },
  {
   "ref": "csm-1985",
   "title": "High-performance turbo 900 from Saab",
   "url": "https://csmonitor.com/1985/0725/hsaab-f.html",
   "publisher": "The Christian Science Monitor",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Period US report on the 1985 16-valve turbo: 160 hp and 188 lb-ft, 16-valve DOHC with intercooler, the only 16-valve turbocar in the US, US prices $18,439 (base four-door turbo) to $21,684 (three-door hatchback). No 0-60 figure."
  },
  {
   "ref": "ttac-spg",
   "title": "Rare Rides: The 1989 Saab 900 SPG, It's Sporty, Personal, and Good",
   "url": "https://www.thetruthaboutcars.com/2021/05/rare-rides-the-1989-saab-900-spg-its-sporty-personal-and-good/?print=1",
   "publisher": "The Truth About Cars",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "900 as a heavy rework of the 99; 1987 refresh; 28 SPG prototypes to the media in 1984; SPG body kit and three-spoke wheels; 1989 SPG only in gray and black; 1991 the last SPG year; 7,625 North American SPGs."
  },
  {
   "ref": "grm-spg",
   "title": "Vintage Views: Saab 900 SPG",
   "url": "https://www.grassrootsmotorsports.com/articles/vintage-views-saab-900-spg",
   "publisher": "Grassroots Motorsports",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "June 2012 SPG retrospective: 1985 160 hp 16-valve; 5 hp bump for 1987; run ended 1991; five-speed manuals called relatively durable; rust points; early SPG wiring; head gaskets more prone to failure than timing chains; clunky front calipers; June 2012 values $2,500-$5,000 average, about $10,000 premium."
  },
  {
   "ref": "grm-buyers",
   "title": "Saab 900 Turbo | Buyer's Guide",
   "url": "https://grassrootsmotorsports.com/articles/saab-900-turbo-buyers-guide",
   "publisher": "Grassroots Motorsports",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "US buyer's guide (December 2006 print issue, posted 2022): early manual transmissions sometimes fail at about 60,000 miles; automatics hard to rebuild; five-speed slowed acceleration; sagging headliner very common; door, hatch and wheel-well rust; exhausts rust in as little as 75,000 miles; APC; turbo life as short as 6,000 miles with neglect; convertible in the US from late 1986."
  },
  {
   "ref": "curbside-spg",
   "title": "Curbside Classic: 1990 Saab 900 Turbo SPG - The Sun Sets On Saab's Independence",
   "url": "https://curbsideclassic.com/curbside-classics-european/curbside-classic-1990-saab-900-turbo-spg-the-sun-sets-on-saabs-independence",
   "publisher": "Curbside Classic",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "7,625 SPGs imported to the US 1985-1991, 771 for 1990; 1990 SPG listed at $28,995; 175 hp; hatchback and manual only; black or gray 1985-89, Beryl Green added for 1991; GM took a 50 percent stake in 1990."
  },
  {
   "ref": "hagerty-turbo",
   "title": "9 out of 10 Hipsters Agree: The 1987-93 Saab 900 Turbo Is a Sweet, Affordable Swede",
   "url": "https://hagerty.com/media/market-trends/9-out-of-10-hipsters-agree-the-1987-93-saab-900-turbo-is-a-sweet-affordable-swede",
   "publisher": "Hagerty",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Hagerty editorial (undated): original Turbo 135 hp and 160 lb-ft, 2,700 lb; 160 hp and 188 lb-ft with the 16-valve; SPG five extra hp; price above $30,000 by 1991; four- or five-speed manual or automatic. Its condition values carry no date and are not used."
  },
  {
   "ref": "hagerty-uk-guide",
   "title": "Buying guide: Saab 900 Turbo (1979-1993)",
   "url": "https://www.hagerty.co.uk/articles/buying-guide-saab-900-turbo-1979-1993/",
   "publisher": "Hagerty UK",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "UK buying guide used for fault patterns only, never for values: manual gearbox weak spot if driven hard, pinion and layshaft bearing noise, jumping out of gear, early four-speed more reliable; roof lining comes adrift; rust locations; head gaskets; APC failure; worn turbo signs; 145 hp original Turbo (UK source, market not stated; not used for US output); 1984 Turbo 16S; 202,284 first-generation Turbos including around 50,000 convertibles."
  },
  {
   "ref": "saabplanet-guide",
   "title": "Guide to buying a Saab 900",
   "url": "https://www.saabplanet.com/guide-to-buying-a-saab-900/",
   "publisher": "Saab Planet",
   "sourceType": "specialist",
   "reliability": "low",
   "notes": "Enthusiast buying guide covering both generations: gearboxes among the most common problems, automatics behind turbo engines fail early; rust at wheel arches, filler and door bottoms; water-cooled turbos outlast oil-cooled; convertible top operation. Used only alongside other sources, never for a figure."
  },
  {
   "ref": "autoblog-convertible",
   "title": "Saab celebrates 25 years of convertibles",
   "url": "https://www.autoblog.com/2011/05/11/saab-celebrates-25-years-of-topless-motoring/",
   "publisher": "Autoblog",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "May 2011 report carrying Saab's anniversary material: convertible concept at Frankfurt September 1983; first production run of 400 in 1986, built for the US market; built by Valmet at Uusikaupunki, Finland; 48,894 first-generation convertibles."
  },
  {
   "ref": "classic-1stgen",
   "title": "Saab 900 - 1st Gen Market",
   "url": "https://www.classic.com/m/saab/900/1st-gen",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of November 2026: first generation introduced for the 1979 model year; no market benchmark published; 408 related listings."
  },
  {
   "ref": "classic-spg",
   "title": "Saab 900 - 1st Gen - SPG Market",
   "url": "https://www.classic.com/m/saab/900/1st-gen/spg",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of November 2026: average price $17,285; lowest recorded sale $1,001 for a 1986 Turbo SPG on December 26, 2023; highest $57,000 for a 1991 SPG on April 7, 2022; produced for model years 1985 to 1994, while also stating production until 1991. Venues and buyer's premium not stated."
  },
  {
   "ref": "classic-turbo",
   "title": "Saab 900 Turbo - Classic Generation (1979 to 1994) Market",
   "url": "https://www.classic.com/m/saab/900/1st-gen/turbo",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of November 2026: Turbo debuted for the 1979 model year, generation labeled 1979 to 1994; no market benchmark published; 251 related listings."
  },
  {
   "ref": "epa-1989-900",
   "title": "1989 Saab 900 fuel economy",
   "url": "https://www.fueleconomy.gov/feg/noframes/5622.shtml",
   "publisher": "US Department of Energy and EPA (fueleconomy.gov)",
   "sourceType": "government",
   "reliability": "high",
   "notes": "1989 Saab 900, 2.0-liter four, turbocharged, three-speed automatic: 17 mpg city, 22 highway, 19 combined. Confirms the US-market turbo automatic for 1989."
  }
 ],
 "claims": [
  {
   "section": "history",
   "claimText": "The classic Saab 900 was introduced in 1978 as a 1979 model, revealed in May 1978 and on sale that autumn.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["saabnet-timeline", "saabmuseum-my", "classic-1stgen"],
   "evidence": [
    { "ref": "saabnet-timeline", "quote": "The Saab 900 was introduced in 1978 as a 1979 model" },
    { "ref": "saabmuseum-my", "quote": "in production and on sale by the Autumn as the 1979 model year" },
    { "ref": "classic-1stgen", "quote": "The first generation of Saab 900 was introduced for the 1979 model year." }
   ]
  },
  {
   "section": "history",
   "claimText": "The 900 was a heavy rework of Saab's earlier 99, kept its original styling through 1986 and was refreshed for the 1987 model year; single-sourced to The Truth About Cars.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["ttac-spg"],
   "evidence": [
    { "ref": "ttac-spg", "quote": "the original 900 was a heavy rework of Saab’s prior family car offering, the 99." },
    { "ref": "ttac-spg", "quote": "The 900 remained in its original visual guise through 1986 before a refreshed version arrived for the ’87 model year." }
   ]
  },
  {
   "section": "specs",
   "claimText": "US 900s for 1979 were offered with a naturally aspirated engine of 115 hp (110 hp in western and Rocky Mountain states) and a turbocharged engine of 135 hp, which Hagerty gives as 135 hp and 160 lb-ft.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["saabnet-timeline", "hagerty-turbo"],
   "evidence": [
    { "ref": "saabnet-timeline", "quote": "introduced in a variety of 115 Hp (110 Hp westem and Rocky Mountain states), naturally-aspirated and 135 Hp, turbocharged" },
    { "ref": "hagerty-turbo", "quote": "Originally, the Turbo model made 135 hp, 160 lb-ft of torque" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The original 900 Turbo is rated at 145 hp by two European sources, the Saab museum site and Hagerty's UK guide, neither of which says which market's car it describes, against 135 hp for the US car in the US model-year history and Hagerty's US article; this page uses 135 hp for US cars.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["saabmuseum-my", "hagerty-uk-guide", "saabnet-timeline", "hagerty-turbo"],
   "conflictNote": "saabmuseum.com and Hagerty UK, European sources that do not state a market, give 145 hp for the original Turbo. The Saab Network's US model-year history and Hagerty's US editorial state 135 hp. None of the four says whether the difference is a US-market specification, a different rating standard or an error, so it is not resolved by any source consulted here.",
   "evidence": [
    { "ref": "saabmuseum-my", "quote": "the flagship 900 Turbo with 145hp turbocharged two-litre in-line slant four" },
    { "ref": "hagerty-uk-guide", "quote": "giving the car 145bhp for 0-60mph in 9.0 seconds and 125mph." },
    { "ref": "saabnet-timeline", "quote": "naturally-aspirated and 135 Hp, turbocharged" },
    { "ref": "hagerty-turbo", "quote": "Originally, the Turbo model made 135 hp, 160 lb-ft of torque" }
   ]
  },
  {
   "section": "specs",
   "claimText": "Automatic Performance Control, a knock-sensing boost control, arrived on the 900 Turbo for 1982.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["saabmuseum-my", "saabnet-timeline", "hagerty-uk-guide", "grm-buyers"],
   "evidence": [
    { "ref": "saabmuseum-my", "quote": "The Saab innovation of 1982 was APC - Automatic Performance Control - on the 900 turbo." },
    { "ref": "saabnet-timeline", "quote": "1982 Saab 900 Turbos benefited from the revolutionary Automatic Performance Control (APC) system" },
    { "ref": "hagerty-uk-guide", "quote": "For 1982, Automatic Performance Control arrived to allow the engine to run better on different grades of fuel." },
    { "ref": "grm-buyers", "quote": "APC was an advanced boost control system at the time, continuously sensing detonation and knock" }
   ]
  },
  {
   "section": "specs",
   "claimText": "Early 900s had a four-speed manual, and a five-speed became optional on the EMS and Turbo from 1980; Hagerty describes a four- or five-speed manual depending on the year, or an automatic, and Grassroots Motorsports says acceleration suffered with the new five-speed.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["saabmuseum-my", "hagerty-uk-guide", "grm-buyers", "hagerty-turbo"],
   "evidence": [
    { "ref": "saabmuseum-my", "quote": "A five-speed gearbox was optional on the EMS and turbo." },
    { "ref": "hagerty-uk-guide", "quote": "Early cars have a four-speed manual gearbox which is generally reckoned to be more reliable" },
    { "ref": "grm-buyers", "quote": "Strangely, acceleration suffered with the new five-speed unit" },
    { "ref": "hagerty-turbo", "quote": "a four- or five-speed manual, depending on the year, or an automatic" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 16-valve, double-overhead-cam, intercooled turbo engine arrived in the US for the 1985 model year rated at 160 hp and 188 lb-ft, with LH fuel injection and hydraulic valve lifters; Hagerty lists sedan, hatchback and convertible bodies for the 16-valve Turbo.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["saabnet-timeline", "csm-1985", "hagerty-turbo", "grm-spg"],
   "evidence": [
    { "ref": "saabnet-timeline", "quote": "Rated at 160 Hp, the new engine included such advances as LH fuel injection and hydraulic valve lifters." },
    { "ref": "csm-1985", "quote": "develops 160 horsepower and 188 pounds-feet of torque" },
    { "ref": "hagerty-turbo", "quote": "The car now made 160 hp and 188 lb-ft of torque" },
    { "ref": "hagerty-turbo", "quote": "You could choose one of three body styles for your 16-valve Turbo: sedan, hatchback, or convertible." },
    { "ref": "grm-spg", "quote": "1985: The 900 Turbo received the 160-horsepower, 16-valve, B202-spec engine" }
   ]
  },
  {
   "section": "history",
   "claimText": "The 16-valve engine appeared first in Europe in the 1984 Turbo 16 sedan; in the US it was the major product news of 1985.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["saabmuseum-my", "hagerty-uk-guide", "saabnet-timeline"],
   "evidence": [
    { "ref": "saabmuseum-my", "quote": "the Saab 900 Turbo 16 appeared as a four door saloon and a three or five door hatchback." },
    { "ref": "hagerty-uk-guide", "quote": "In 1984, Saab introduced the Turbo 16S model, with the 16 denoting the number of valves for the engine." },
    { "ref": "saabnet-timeline", "quote": "Major product news in 1985 came with the introduction of the 16 valve, Turbo engine." }
   ]
  },
  {
   "section": "history",
   "claimText": "The Christian Science Monitor's 1985 report called the 16-valve car the only 16-valve turbocar in the US and gave US prices from $18,439 for the base 900 four-door turbo to $21,684 for the three-door hatchback; single-sourced.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["csm-1985"],
   "evidence": [
    { "ref": "csm-1985", "quote": "Prices stretch from $18,439 for the base 900 4-door turbo up to $21,684 for the sporty 3-door hatchback with all the fixin's." },
    { "ref": "csm-1985", "quote": "the innovative Turbo 900 is the fastest Saab yet and the only 16-valve turbocar in the US today." }
   ]
  },
  {
   "section": "history",
   "claimText": "The Christian Science Monitor, in a report archived under January 1980, gave the 900 Turbo's price as $12,000; single-sourced.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["csm-1980"],
   "evidence": [
    { "ref": "csm-1980", "quote": "The price: $12,000." }
   ]
  },
  {
   "section": "specs",
   "claimText": "The naturally aspirated 16-valve engine reached the 900S at 125 hp for 1986, became standard across the 900 range at 128 hp for 1989, and was enlarged to 2.1 liters and 140 hp for 1991; a water-cooled turbocharger was fitted to the 900 Turbo for 1988.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["saabnet-timeline", "saabplanet-guide"],
   "evidence": [
    { "ref": "saabnet-timeline", "quote": "The 900S gained a naturallyaspirated, 125 Hp version of the 16 valve engine." },
    { "ref": "saabnet-timeline", "quote": "The 16 valve engine-now at 128 Hp in naturally-aspirated form-was standard throughout the entire 900 series for 1989," },
    { "ref": "saabnet-timeline", "quote": "and power increased to 140 Hp for 1991." },
    { "ref": "saabnet-timeline", "quote": "In the interest of improved durability, a water-cooled turbocharger was specified for the 900 Turbo in 1988." },
    { "ref": "saabplanet-guide", "quote": "Water cooled turbos typically last longer than oil cooled versions" }
   ]
  },
  {
   "section": "history",
   "claimText": "Saab prepared 28 SPG prototypes for the media in 1984 and introduced the 900 Turbo three-door with Special Performance Group for 1985; it came only as a hatchback with a manual transmission.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["ttac-spg", "saabnet-timeline", "curbside-spg"],
   "evidence": [
    { "ref": "ttac-spg", "quote": "In ’84 Saab prepared 28 SPG prototypes and handed them over to the media to rave reviews." },
    { "ref": "saabnet-timeline", "quote": "the introduction of the 900 Turbo threedoor with Special Performance Group." },
    { "ref": "curbside-spg", "quote": "Coming only as a hatchback and with a manual transmission, it was always intended to have limited appeal." }
   ]
  },
  {
   "section": "specs",
   "claimText": "The SPG gained 5 hp for 1987, requiring premium unleaded fuel, and reached 175 hp for 1990.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["saabnet-timeline", "grm-spg", "curbside-spg"],
   "evidence": [
    { "ref": "saabnet-timeline", "quote": "The Special Performance Group gained 5 Hp, requiring premium unleaded fuel," },
    { "ref": "saabnet-timeline", "quote": "Power went up to 175 Hp on the 900 Turbo with Special Performance Group." },
    { "ref": "grm-spg", "quote": "The output bump over the standard 900T was just 5 horsepower" },
    { "ref": "curbside-spg", "quote": "The turbocharged engine delivered lively performance, but needed to be kept above 3,000 rpm to benefit from its 175 hp (peaking at 5,500 rpm)." }
   ]
  },
  {
   "section": "production",
   "claimText": "Two independent writers give 7,625 SPGs: Curbside Classic says imported to the US between 1985 and 1991, including 771 for the 1990 model year, and The Truth About Cars says North American examples; the 771 figure is single-sourced.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["curbside-spg", "ttac-spg"],
   "evidence": [
    { "ref": "curbside-spg", "quote": "SPGs are rare – only 7,625 were imported to the US between 1985 and 1991, including just 771 cars in the 1990 model year" },
    { "ref": "ttac-spg", "quote": "1991 was the last year of the SPG and made for a total of 7,625 North American examples." }
   ]
  },
  {
   "section": "production",
   "claimText": "The SPG's last model year is given as 1991 by The Truth About Cars, Curbside Classic and Grassroots Motorsports, while classic.com's SPG page gives model years 1985 to 1994 and Saab's US history states the deletion in two different years.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["ttac-spg", "curbside-spg", "grm-spg", "classic-spg", "saabnet-timeline"],
   "conflictNote": "The Truth About Cars, Curbside Classic and Grassroots Motorsports give 1991 as the final SPG year. classic.com states the SPG was produced for model years 1985 to 1994, while the same page says it was in production until 1991. The Saab Network's US history says in its 1989 entry that the SPG was deleted after the next model year, which points to 1990, and in its 1992 entry that it was deleted from the program, which points to 1991. The weight of sources favors 1991, but the conflict is not resolved by any source consulted here.",
   "evidence": [
    { "ref": "ttac-spg", "quote": "1991 was the last year of the SPG and made for a total of 7,625 North American examples." },
    { "ref": "curbside-spg", "quote": "in the SPG's final year of 1991, Beryl Green was added as well." },
    { "ref": "grm-spg", "quote": "By the end of the model's run in 1991, the SPG had spawned a loyal following." },
    { "ref": "classic-spg", "quote": "The Saab 900 - 1st Gen - Spg was produced for model years 1985 to 1994." },
    { "ref": "saabnet-timeline", "quote": "After the next mode1 year, the SPG was deleted." },
    { "ref": "saabnet-timeline", "quote": "The 900 Turbo with Special Performance Group was deleted from the program." }
   ]
  },
  {
   "section": "history",
   "claimText": "SPGs were painted black or gray from 1985 to 1989, Beryl Green was added for the final year, and the SPG had a special body kit, a three-spoke steering wheel and three-spoke wheels unique to the trim.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["curbside-spg", "ttac-spg"],
   "evidence": [
    { "ref": "curbside-spg", "quote": "From 1985-89, SPGs were available in either black or gray" },
    { "ref": "ttac-spg", "quote": "Visual changes included a special body kit, a three-spoke steering wheel, and three-spoke wheels unique to the trim." }
   ]
  },
  {
   "section": "history",
   "claimText": "Curbside Classic gives the list price of a 1990 SPG as $28,995 and records that General Motors acquired a 50 percent stake in Saab that year; Hagerty writes that Car and Driver named the 900 Turbo to its 10Best list four times and that by 1991 its price had crept above the magazine's $30,000 cap for the list.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["curbside-spg", "hagerty-turbo"],
   "evidence": [
    { "ref": "curbside-spg", "quote": "Our featured car listed for $28,995." },
    { "ref": "curbside-spg", "quote": "It was the year when General Motors acquired a 50% stake in Saab, ending the company's independence." },
    { "ref": "hagerty-turbo", "quote": "Car and Driver loved it so much that they named it to their 10Best list four times" },
    { "ref": "hagerty-turbo", "quote": "1991, when the car’s price crept above the magazine’s cap of $30K." }
   ]
  },
  {
   "section": "history",
   "claimText": "The 900 convertible was shown at the Frankfurt Motor Show in September 1983, production began in 1986 with a run of 400 cars built for the US market, and the cars were built by Valmet at Uusikaupunki, Finland.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["autoblog-convertible", "saabmuseum-my"],
   "evidence": [
    { "ref": "autoblog-convertible", "quote": "The Saab Convertible was born at the Frankfurt Motor Show in September 1983" },
    { "ref": "autoblog-convertible", "quote": "It all began in 1986, when the first car in a production run of just 400 Saab 900 Convertibles" },
    { "ref": "autoblog-convertible", "quote": "The first 400 cars were built for the US market." },
    { "ref": "autoblog-convertible", "quote": "Based in Uusikaupunki in Finland, Valmet is one of the world's most northerly car plants." },
    { "ref": "saabmuseum-my", "quote": "All were sold in the US" }
   ]
  },
  {
   "section": "history",
   "claimText": "Saab's US history says the 900 Turbo Convertible first appeared in the US in the summer of 1986 and Grassroots Motorsports says late 1986, while the Saab museum site files the convertible under the 1987 model year and says the first 400 were flat-front 1986 models, all sold in the US.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["saabnet-timeline", "grm-buyers", "saabmuseum-my"],
   "evidence": [
    { "ref": "saabnet-timeline", "quote": "This is the 900 Turbo Convertible as it originally appeared in the U.S. during the surnmer of 1986." },
    { "ref": "grm-buyers", "quote": "A convertible first saw U.S. shores in late 1986, sold incredibly well" },
    { "ref": "saabmuseum-my", "quote": "Interestingly, the first 400 convertibles were flat front 1986 models." },
    { "ref": "saabmuseum-my", "quote": "The 900 Convertible went on sale in all existing markets with a 175hp engine." }
   ]
  },
  {
   "section": "production",
   "claimText": "First-generation 900 convertible production is given as 48,888 by the Saab museum site, 48,894 by Saab's anniversary material as reported by Autoblog, and around 50,000 by Hagerty UK; the museum site's total for all classic 900s is 908,817, a single-source figure.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["saabmuseum-my", "autoblog-convertible", "hagerty-uk-guide"],
   "conflictNote": "saabmuseum.com states 908,817 900s built, of which 48,888 were convertibles. Autoblog, reporting Saab's 25th-anniversary figures, gives 48,894 first-generation convertibles for 1986-1993. Hagerty UK says around 50,000 convertibles. The six-car difference between the two precise figures is not explained, and no second source gives the 908,817 generation total, so neither number is resolved by any source consulted here.",
   "evidence": [
    { "ref": "saabmuseum-my", "quote": "In all 908,817 Saab 900s were built over the course of some 15 years, of which 48,888 were convertibles." },
    { "ref": "autoblog-convertible", "quote": "First generation (1986 - 1993): 48,894 units." },
    { "ref": "hagerty-uk-guide", "quote": "When this new 900 arrived, Saab had built 202,284 first-generation Turbos, which included around 50,000 Convertibles." }
   ]
  },
  {
   "section": "production",
   "claimText": "Hagerty UK counts 202,284 first-generation 900 Turbos built, including around 50,000 convertibles; no second source gives a Turbo total.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["hagerty-uk-guide"],
   "evidence": [
    { "ref": "hagerty-uk-guide", "quote": "When this new 900 arrived, Saab had built 202,284 first-generation Turbos, which included around 50,000 Convertibles." }
   ]
  },
  {
   "section": "production",
   "claimText": "Saab's US model-year table lists 900 importation from 11,297 for 1979 to 9,936 for 1993, peaking at 38,720 for 1985; the rows sum to 322,787, while the same document says more than 340,000 were sold in the US, and it gives no 1994 figure to account for the difference.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["saabnet-timeline"],
   "computed": ["322,787"],
   "evidence": [
    { "ref": "saabnet-timeline", "quote": "with more than 340,000 sold on these shores, the name Saab is truly synonymous with the designation 900." },
    { "ref": "saabnet-timeline", "quote": "Model Year 1979 900 U.S. Importation-11,297:" },
    { "ref": "saabnet-timeline", "quote": "Model Year 1980 900 U.S. Importation-12,906:" },
    { "ref": "saabnet-timeline", "quote": "Model Year 1981 900 U.S. Importation-7,759:" },
    { "ref": "saabnet-timeline", "quote": "Model Year 1982 900 U.S. Importation-16,946:" },
    { "ref": "saabnet-timeline", "quote": "Model Year 1983 900 U.S. Importation-22,777:" },
    { "ref": "saabnet-timeline", "quote": "Model Year 1984 900 U.S. Importation-31,638:" },
    { "ref": "saabnet-timeline", "quote": "Model Year 1985 900 U.S. Importation-38,720:" },
    { "ref": "saabnet-timeline", "quote": "Model Year 1986 900 U.S. Importation-36,973:" },
    { "ref": "saabnet-timeline", "quote": "Model Year 1987 900 U.S. Importation-36,194:" },
    { "ref": "saabnet-timeline", "quote": "Model Year 1988 900 U.S. Importation-28,321:" },
    { "ref": "saabnet-timeline", "quote": "Model Year 1989 900 U.S. Importation-24,490:" },
    { "ref": "saabnet-timeline", "quote": "Model Year 199O 900 U.S. Importation-14,561:" },
    { "ref": "saabnet-timeline", "quote": "Model Year 1991 900 U.S. Importation-15,440" },
    { "ref": "saabnet-timeline", "quote": "Model Year 1992 900 U.S. Importation-14,829:" },
    { "ref": "saabnet-timeline", "quote": "Model Year 1993 900 U.S. Importation-9,936:" }
   ]
  },
  {
   "section": "history",
   "claimText": "1993 was the last model year of the classic 900 sedans and hatchbacks, but the convertible continued: 1994 models were introduced in May 1993, and a final Commemorative Edition convertible with the 185 hp turbo and five-speed manual, in special black metallic paint with a tan top and tan leather, was limited to 500 US imports.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["saabmuseum-my", "saabnet-timeline", "classic-turbo"],
   "evidence": [
    { "ref": "saabmuseum-my", "quote": "1993 was the last model year of the Saab that has since become known as the classic 900." },
    { "ref": "saabnet-timeline", "quote": "Introduced in May of 1993 as 1994 models, buyers had the opportunity to get into a '94" },
    { "ref": "saabnet-timeline", "quote": "this special Convertible is powered by the 185 Hp Turbo engine with a manual fivespeed transmission." },
    { "ref": "saabnet-timeline", "quote": "It is available only with special black metallic paint, tan top and tan leather upholstery-highlighted by charcoal piping." },
    { "ref": "saabnet-timeline", "quote": "A total of 500 Commemorative Edition 900 Turbo Convertibles will be imported." },
    { "ref": "classic-turbo", "quote": "Saab 900 Turbo - Classic Generation (1979 to 1994)" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The EPA lists the 1989 Saab 900 as front-wheel drive and rates it with the 2.0-liter turbo and three-speed automatic at 17 mpg city, 22 mpg highway and 19 mpg combined; Hagerty gives the Turbo's weight as about 2,700 lb, a single-source figure.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["epa-1989-900", "hagerty-turbo"],
   "evidence": [
    { "ref": "epa-1989-900", "quote": "Front-Wheel Drive" },
    { "ref": "epa-1989-900", "quote": "City MPG:17" },
    { "ref": "epa-1989-900", "quote": "Highway MPG:22" },
    { "ref": "epa-1989-900", "quote": "Combined MPG:19" },
    { "ref": "hagerty-turbo", "quote": "returned 19 mpg for the 2700-pound Swede." }
   ]
  },
  {
   "section": "problems",
   "claimText": "Hagerty UK calls the manual gearbox always a bit of a weak spot when driven hard, Grassroots Motorsports' buyer's guide says early manuals sometimes failed after about 60,000 miles, Saab Planet calls gearboxes among the most notorious parts to wear out, and Grassroots Motorsports' SPG retrospective calls the five-speed manuals relatively durable.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["hagerty-uk-guide", "grm-buyers", "grm-spg", "saabplanet-guide"],
   "evidence": [
    { "ref": "hagerty-uk-guide", "quote": "The manual gearbox was always a bit of a weak spot with the 900 Turbo if the driver was too eager with gear changes." },
    { "ref": "grm-buyers", "quote": "The early manual transmissions are a weak point, sometimes expiring after only about 60,000 miles." },
    { "ref": "grm-spg", "quote": "The five-speed manuals used in the 900 series are relatively durable" },
    { "ref": "saabplanet-guide", "quote": "Gearboxes are one of the most notorious parts to wear out, especially on turbocharged models with an automatic transmission." }
   ]
  },
  {
   "section": "problems",
   "claimText": "Hagerty UK describes a gear change that is notchy at the best of times, names jumping out of gear under acceleration and rattling from the pinion or layshaft bearings as signs of a failing manual gearbox and clicking as worn driveshafts, and reckons the early four-speed the more reliable unit.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["hagerty-uk-guide"],
   "evidence": [
    { "ref": "hagerty-uk-guide", "quote": "The change is a bit notchy at the best of times, but check it doesn’t jump out of gear under acceleration" },
    { "ref": "hagerty-uk-guide", "quote": "or make any rattling noises that point to pinion or layshaft bearings giving up." },
    { "ref": "hagerty-uk-guide", "quote": "Also listen for any clicking that point to worn drive shafts." },
    { "ref": "hagerty-uk-guide", "quote": "Early cars have a four-speed manual gearbox which is generally reckoned to be more reliable" }
   ]
  },
  {
   "section": "problems",
   "claimText": "The automatic transmission is described as difficult to rebuild by Grassroots Motorsports and as prone to early failure behind turbo engines by Saab Planet.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["grm-buyers", "saabplanet-guide"],
   "evidence": [
    { "ref": "grm-buyers", "quote": "Please note that the automatic transmissions are difficult to rebuild." },
    { "ref": "saabplanet-guide", "quote": "Automatic transmission with turbo engines tends to fail early" }
   ]
  },
  {
   "section": "problems",
   "claimText": "A sagging headliner is a very common early 900 fault, according to Grassroots Motorsports, and Hagerty UK says the roof lining likes to come adrift.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["grm-buyers", "hagerty-uk-guide"],
   "evidence": [
    { "ref": "grm-buyers", "quote": "A very common early 900 problem is a sagging headliner." },
    { "ref": "hagerty-uk-guide", "quote": "the roof lining likes to come adrift, so make sure the cabin is in good nick." }
   ]
  },
  {
   "section": "problems",
   "claimText": "Rust is reported at door bottoms, hatch bottoms, wheel wells, the fuel filler, the battery tray, the front bulkhead, the fuel tank, the rear crossmember, jacking points and suspension mounts, Hagerty UK adds clear drain channels on sunroof cars, and exhaust systems can rust out in as little as 75,000 miles.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["grm-buyers", "hagerty-uk-guide", "grm-spg", "saabplanet-guide"],
   "evidence": [
    { "ref": "grm-buyers", "quote": "Examine door bottoms, hatch bottoms and wheel wells for rust." },
    { "ref": "grm-buyers", "quote": "Exhaust systems will rust, often in as little as 75,000 miles." },
    { "ref": "hagerty-uk-guide", "quote": "Also have a look around the fuel filler, door bottoms, and check the drain channels are clear if the car has a sunroof." },
    { "ref": "hagerty-uk-guide", "quote": "You also need to have a look at the battery tray, front bulkhead, and windscreen surround for rot," },
    { "ref": "hagerty-uk-guide", "quote": "while underneath the fuel tank, rear crossmember, jacking points, and suspension mounts need inspection." },
    { "ref": "grm-spg", "quote": "Inspect front and rear suspension points, wheel arches" },
    { "ref": "saabplanet-guide", "quote": "Saab 900s tend to develop rust in predictable areas" }
   ]
  },
  {
   "section": "problems",
   "claimText": "Head gaskets fail on neglected engines and are more prone to failure than the timing chains, and a neglected turbocharger can fail in as little as 6,000 miles, while a maintained one lasts a long time; Hagerty UK reads blue smoke at startup as a sign of a worn turbo.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["hagerty-uk-guide", "grm-spg", "grm-buyers"],
   "evidence": [
    { "ref": "hagerty-uk-guide", "quote": "blown head gaskets are not unknown in neglected engines." },
    { "ref": "grm-spg", "quote": "Head gaskets are more prone to failure than timing chains." },
    { "ref": "grm-buyers", "quote": "However, little or no care can shorten turbo life to just 6000 miles." },
    { "ref": "grm-buyers", "quote": "The turbochargers can last seemingly forever when maintained." },
    { "ref": "hagerty-uk-guide", "quote": "Look for signs of blue smoke on start up that point to a worn turbo" }
   ]
  },
  {
   "section": "problems",
   "claimText": "Grassroots Motorsports reports wiring harness insulation failure on 1985 and 1986 900s, singles out bare wires and burned connectors, and says the unusual front caliper on SPGs built from 1985 through 1987 is not uncommonly clunky; Hagerty UK says the APC system can fail and cause rough running.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["grm-spg", "hagerty-uk-guide"],
   "evidence": [
    { "ref": "grm-spg", "quote": "any bare wires, burned connectors or evidence of impending failure" },
    { "ref": "grm-spg", "quote": "The 1985 and 1986 Saab 900 and 9000 suffer from wiring harness insulation failure like that of similar-vintage Volvos." },
    { "ref": "grm-spg", "quote": "SPGs built from 1985 through 1987 have an unusual front brake caliper; an integral rotating piston activates the handbrake." },
    { "ref": "grm-spg", "quote": "A clunky caliper is not uncommon on these cars and can be fixed." },
    { "ref": "hagerty-uk-guide", "quote": "The Bosch APC (Automatic Performance Control) can fail and cause rough running," }
   ]
  },
  {
   "section": "market",
   "claimText": "As of November 2026 classic.com gives an average price of $17,285 for the first-generation SPG, with a lowest recorded sale of $1,001 for a 1986 Turbo SPG on December 26, 2023 and a highest of $57,000 for a 1991 SPG on April 7, 2022; the page does not name the venues or say whether buyer's premium is included.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["classic-spg"],
   "evidence": [
    { "ref": "classic-spg", "quote": "The average price of a Saab 900 - 1st Gen - Spg is $17,285." },
    { "ref": "classic-spg", "quote": "The lowest recorded sale price was $1,001 for a 1986 Saab 900 Turbo SPG on December 26, 2023." },
    { "ref": "classic-spg", "quote": "The highest recorded sale was $57,000 for a 1991 Saab 900 SPG on April 07, 2022." }
   ]
  },
  {
   "section": "market",
   "claimText": "As of November 2026 classic.com's first-generation 900 page lists 408 related listings and its 900 Turbo page lists 251.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["classic-1stgen", "classic-turbo"],
   "evidence": [
    { "ref": "classic-1stgen", "quote": "Showing 24 of 408 related listings" },
    { "ref": "classic-turbo", "quote": "Showing 24 of 251 related listings" }
   ]
  },
  {
   "section": "market",
   "claimText": "In June 2012 Grassroots Motorsports put an average SPG at $2,500 to $5,000 and a premium example at about $10,000.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["grm-spg"],
   "evidence": [
    { "ref": "grm-spg", "quote": "Budget $2500 to $5000 for an average example and about $10,000 for a premium one." }
   ]
  }
 ]
};
