/**
 * Researched model draft - BMW M5 (E28, 1985-1988).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedM5E28 = {
 "slug": "bmw/m5-e28",
 "make": "BMW",
 "model": "M5",
 "generation": "E28",
 "generationCode": "E28",
 "trim": null,
 "yearStart": 1985,
 "yearEnd": 1988,
 "bodyStyles": [
  "4-door saloon (sedan) on the E28 bodyshell, with a deeper front airdam, small boot spoiler and Shadowline blackout trim"
 ],
 "engines": [
  "3,453 cc M88/3 DOHC 24-valve straight-six, six individual throttle butterflies, Bosch Motronic, wet sump, 10.5:1 compression, 286 PS (210 kW) at 6,500 rpm and 340 Nm at 4,500 rpm - European and South African cars",
  "3,453 cc S38B35 DOHC 24-valve straight-six with catalytic converter, 9.8:1 compression, simplified exhaust manifold, shorter camshaft duration and a dual-row timing chain, quoted between 252 and 256 hp at 6,500 rpm and 243 lb-ft at 4,500 rpm - North American and Japanese cars"
 ],
 "productionTotal": null,
 "productionNotes": "Every source consulted here that states a total states the same one: 2,241 cars. BMW M's own magazine article gives it, and Wikipedia, Supercar Nostalgia, Classic Trader and classic.com repeat it. What does not settle is the accounting underneath. Supercar Nostalgia publishes a market table - 588 European left-hand-drive cars (10/1984 to 09/1987), 187 European right-hand-drive (03/1986 to 11/1987), 1,340 North American (11/1986 to 11/1987), 30 for Japan (01/1987 to 03/1987) and 96 assembled from CKD kits at Rosslyn in South Africa (06/1987 to 11/1988) - which sums exactly to 2,241. AutoAdvisor, writing from South Africa, instead states that South Africa took 100 cars, of which 96 were kit-assembled at Rosslyn and the balance built in Germany. If the allocation really was 100, either the table's other lines absorb the four German-built cars or the total is not 2,241, and no source consulted resolves which. The build period is similarly unsettled: Wikipedia and Motor1 give October 1984 to June 1988, while the market table ends German assembly in November 1987 and runs only the South African CKD line into November 1988. The North American number is the one most often quoted and the least often examined: 1,340 is stated by Supercar Nostalgia, RM Sotheby's, BMWBlog and Autoblog, but it sits against BMW's own pre-launch indication of roughly 500 US cars for one model year, an undertaking exceeded by nearly three times and one that some early buyers went to law over. No figure is asserted here.",
 "notableTrims": [
  {
   "name": "M5 (European LHD, M88/3)",
   "note": "The original specification and the one without a catalytic converter: 588 cars on the published market table, built between October 1984 and September 1987. Highest quoted output of the run and the widest choice of colours and trim, these being cars ordered individually rather than shipped as a homogeneous allocation."
  },
  {
   "name": "M5 (European RHD, M88/3)",
   "note": "187 right-hand-drive cars from March 1986 to November 1987, the UK's share among them at a list price of 31,295 pounds. The scarcest of the volume specifications, and the one UK buyers now pay a premium to keep original."
  },
  {
   "name": "M5 (North America, S38B35)",
   "note": "1,340 cars for a single model year, all finished in black over Natur leather, with sealed-beam headlights, five-mph impact bumpers, side marker lights, standard M-Technic boot spoiler and Shadowline trim, and a 3.91:1 final drive. BMWBlog states only 101 of them left the factory with black rather than tan interiors."
  },
  {
   "name": "M5 (Japan, S38B35)",
   "note": "30 cars built in a three-month window in early 1987 - the smallest official allocation. Mechanically as North America but without the impact-absorbing bumpers and side markers, and offered only in Diamond Black with Anthracite leather."
  },
  {
   "name": "M5 (South Africa, Rosslyn CKD)",
   "note": "96 cars assembled from kits at Rosslyn, the only place outside Germany where an E28 M5 was put together. Uncatalysed M88/3, Highline Nappa leather extending to door cards, console, dash and headlining, M-Technic bodywork, Shadowline and cross-spoke 16-inch wheels; a sunroof was effectively the only option left to tick."
  },
  {
   "name": "M535i (E28)",
   "note": "Not an M car in the sense the M5 is, and the source of most misidentification. It used the 535i drivetrain with M-Technic suspension and bodywork and was built on the standard E28 lines rather than by hand at BMW Motorsport - the difference that matters when a listing calls a car an M5."
  }
 ],
 "specs": {
  "layout": "Front-mounted longitudinal engine, rear-wheel drive, four-door saloon",
  "chassis": "Unitary steel E28 bodyshell; MacPherson strut front, semi-trailing arm rear, uprated springs and firmer damping than the M535i",
  "engine": "3,453 cc 24-valve DOHC straight-six with six individual throttle butterflies - M88/3 for Europe and South Africa, catalysed S38B35 for North America and Japan",
  "valvetrain": "Twin overhead camshafts, four valves per cylinder, shim-and-bucket mechanical clearances requiring periodic adjustment",
  "bore_stroke": "93.4 mm x 84.0 mm as published for the S38B35; the M88/3 shares the 3,453 cc capacity",
  "compression": "10.5:1 (M88/3); 9.8:1 (S38B35 with catalytic converter)",
  "fuel_ignition": "Bosch Motronic; ML3.1 quoted for the S38B35",
  "lubrication": "Wet sump, in place of the dry-sump arrangement of the M1 engine it derives from",
  "power": "286 PS (210 kW) at 6,500 rpm claimed by BMW M for the M88/3, rendered as 282 bhp by most English-language sources and 278 bhp by evo; catalysed S38B35 quoted between 252 and 256 hp at 6,500 rpm",
  "torque": "340 Nm (251 lb-ft) at 4,500 rpm (M88/3); 243 lb-ft at 4,500 rpm (S38B35)",
  "transmission": "Getrag five-speed manual; no automatic was offered",
  "final_drive": "3.91:1 on North American cars, a shorter ratio than the European specification",
  "differential": "Limited-slip differential, quoted at 25 per cent locking effect",
  "brakes": "Ventilated discs front and rear with ABS as standard equipment",
  "weight": "1,430 kg kerb per BMW M; 1,431 kg quoted by evo",
  "acceleration": "6.5 s to 100 km/h claimed by BMW M; 6.3 s to 60 mph recorded by Motor Sport in October 1986 and by Car and Driver's 1987 fifth-wheel test of a US car",
  "top_speed": "245 km/h (152 mph) claimed; 151 mph recorded by Motor Sport, October 1986"
 },
 "summary": "The BMW M5 (E28, 1985-1988) was the first car to wear the badge and the car that created the super-saloon class. It was a plain four-door body, assembled by hand at BMW Motorsport GmbH, carrying the 3,453 cc twenty-four-valve straight-six developed for the mid-engined M1. In European M88/3 form it produced a claimed 286 PS at 6,500 rpm and made the M5 the fastest production saloon in the world at launch, capable of 151 mph in independent testing while looking very largely like a 528i. North America and Japan received the S38B35 instead, lower in compression, fitted with a catalytic converter and quoted at somewhere between 252 and 256 hp. BMW M puts total production at 2,241 cars built from late 1984, divided between European left- and right-hand-drive cars, a large single-year North American allocation, thirty for Japan and a small run assembled from kits at Rosslyn in South Africa - the only place outside Germany where an E28 M5 was put together. It was expensive, understated and slow to build, and it set a template BMW has followed ever since.",
 "history": "## An M1 Engine in Search of a Body\nThe M88 was designed for the mid-engined M1 of 1978, a homologation car built in tiny numbers for a racing category that evaporated around it. BMW Motorsport was left with an expensive twenty-four-valve straight-six and no volume car to put it in. The M88/3 that reached the M5 was the road-adapted answer: still 3,453 cc, still twin camshafts, four valves per cylinder and six individual throttle butterflies, but converted from the M1's dry sump to a wet sump, given Bosch Motronic management and run at 10.5:1 compression. The M635CSi had the engine first; the M5 put it into a four-door bodyshell that advertised nothing beyond a deeper front airdam, a small boot spoiler and blacked-out brightwork.\n\n## Hand Assembly at Preussenstrasse\nThe M5 was not built on a production line. BMW Motorsport GmbH assembled the cars by hand at its Preussenstrasse premises in Munich, moving to Daimlerstrasse in Garching around the summer of 1986 as volumes grew. That method set the shape of everything that followed. Output was low - Motor Sport reported in October 1986 that only about 250 cars a year were planned - the options list was short, and by the time the North American allocation was being built the practical answer to colour choice was black.\n\n## Amsterdam, 1985, and the Fastest Saloon in the World\nProduction began at the end of 1984 and the car was shown publicly at the Amsterdam Motor Show in February 1985. It was, at that point, the fastest production saloon in the world, and cost accordingly: 86,000 Deutschmarks in Germany, 31,295 pounds in Britain. Motor Sport's road test of October 1986 recorded 0-60 mph in 6.3 seconds, 0-100 mph in 17.1 seconds, 151 mph and 19.7 mpg, and noted approvingly that the car looked like just another 5-series. That combination - a supercar's pace in a shape that drew no attention at all - is the whole of the super-saloon idea, and the E28 M5 is where it starts.\n\n## The Catalyst Cars: America, Japan and the S38\nMarkets requiring emissions equipment could not take the M88/3, so BMW Motorsport produced the S38B35: same capacity, compression dropped to 9.8:1, a simplified exhaust manifold, shorter camshaft duration, a catalytic converter and, usefully for surviving cars, a dual-row chain in place of the M88/3's single row. Quoted output falls between 252 and 256 hp depending on which source is doing the quoting. North American production ran from November 1986 to November 1987 and sold as a single 1988 model year at $46,500, every car black, almost every interior Natur tan. BMW had indicated around 500 would come; roughly 1,340 did, and some early buyers who had paid for exclusivity went to law about it. Japan took thirty cars in early 1987.\n\n## Rosslyn, and the End of the Run\nRight-hand-drive European production began in March 1986 and accounted for 187 cars. South Africa was the exception to everything else: 96 M5s were assembled from CKD kits at BMW's Rosslyn plant, the only assembly point for the model outside Germany, and specified more richly than any of them, with Highline Nappa leather normally reserved for the 6- and 7-Series, M-Technic bodywork and cross-spoke 16-inch wheels. German assembly finished in November 1987 by the market tables, though Wikipedia and Motor1 both run production to June 1988; Rosslyn was still building into late 1988. The E34 M5 that replaced it was built in larger numbers, on a line, with a bigger engine - and every generation since has been measured against the first.",
 "marketNotes": "As of August 2026, classic.com records a BMW M5 (E28) market benchmark of $58,257 against an average sale of $52,618, on a rising trend, with tracked results running from $8,000 for a 1988 project car in January 2023 to $183,000 for a 9,000-mile 1988 car in March 2026. The highest public result recorded anywhere is more recent still: $195,810 on Hagerty Marketplace on 2 April 2026 for a single-owner, all-original 9,800-mile US car from the Enthusiast Auto Group collection carrying roughly $91,000 of 2020-2025 refurbishment. The Classic Valuer's aggregate for the model since 2020 gives a median of 42,987 pounds - the figure a 112,667-mile US-delivered car converted to European specification made at Collecting Cars on 27 April 2025 - against a low of 6,984 pounds and a high of 116,334 pounds. Collecting Cars' own 2026 guidance places undocumented projects at 25,000 to 40,000 pounds, sound higher-mileage drivers at 45,000 to 60,000, and exceptional original cars at 65,000 to 80,000. RM Sotheby's sold a US-specification 1988 car from the Youngtimer Collection at Essen in 2019 for a published 57,500 euros; the catalogue does not separate hammer from buyer's premium. South African cars trade in their own market, quoted locally in 2026 at 450,000 to 750,000 rand and above 900,000 rand for the best.",
 "whatToLookFor": "Establish which engine the car has and whether it is the one it left the factory with. An M88/3 car and an S38B35 car are different propositions, and conversion of a US car to European specification is common enough that European-looking bumpers prove nothing. Written proof of timing chain replacement is the most valuable document on an M88/3 car: the single-row chain can let go before the nominal 100,000-mile interval and the consequences are terminal. Ask when the valve clearances were last set: they are shim-and-bucket, need doing on a schedule, and neglect shows up first as poor running and later as damage. A clean idle and a strong mid-range both depend on six throttle butterflies being in balance, so an uneven idle is a synchronisation question before it is anything more expensive. On the body, look at footwells, boot floor, sills and the corners of the front and rear window frames, and treat quick MOT-season patching as evidence of what is behind it. Inside, cracked dashboards, tired leather and a failing service-interval cluster are usual rather than remarkable, but trim is slow and costly to source, and the ABS costly to put right. Records of real, continuous use are worth more than a low odometer reading with nothing behind it.",
 "commonProblems": "The M88/3's single-row timing chain is the defining risk of a European car; Classic Trader records chains breaking well before the 100,000-mile replacement interval, and the North American and Japanese S38B35 with its dual-row chain is the more durable arrangement in this one respect. On both engines the plastic chain guides and the tensioner deteriorate with age and should be inspected whenever the front of the engine is open. Mechanical valve clearances need checking at roughly 30,000-mile intervals, and neglect runs from rough running to valvetrain damage. Six individual throttle bodies must be synchronised or the car idles unevenly and feels flat in the mid-range; perished vacuum hoses produce the same symptoms and are cheaper to cure. Oil leaks appear first at the cam cover gasket, then the sump and main seals. Cooling is the quiet danger on a high-mileage car: a failed water pump or thermostat can overheat an engine that is expensive to rebuild and whose parts are hard to find. Elsewhere the faults are those of a 1980s E28 - corrosion in the footwells, boot floor, sills and window surrounds, tired bushes and dampers producing wandering and an unsettled rear, cracked dashboards, worn leather, failing instrument-cluster electronics and an ABS system that costs real money to service. Gearbox synchros rarely fail outright, but clutch replacement is a substantial bill.",
 "valueTrajectory": "For most of its life the E28 M5 was simply a fast old BMW, and it was bought and used as one; most surviving cars are past 100,000 miles, and many North American examples were driven hard through the 1990s when they were worth less than their maintenance. The re-rating came with the wider 1980s analogue cohort in the 2010s and has not stopped. Classic Trader described values as firm and rising several years ago, and as of August 2026 the classic.com benchmark of $58,257 is still trending upward. What has changed more than the middle of the market is the top of it: the $183,000 recorded in March 2026 and the $195,810 Hagerty Marketplace result in April 2026 both belong to sub-10,000-mile, single-ownership, unmodified cars, and both sit at roughly three times the benchmark. Against a Classic Valuer low of 6,984 pounds since 2020, the spread between a documented original car and a tired one is now very wide indeed. Specification is beginning to matter in the same way: uncatalysed M88/3 cars, the 187 European right-hand-drive cars and the 96 South African CKD cars are all scarcer than the North American allocation that supplies most of the public sales record.",
 "overallConfidence": "high",
 "sources": [
  {
   "ref": "bmw-m-e28",
   "title": "The BMW M5 E28 from 1985",
   "url": "https://www.bmw-m.com/en/topics/magazine-article-pool/bmw-m5-e28.html",
   "publisher": "BMW M GmbH",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "BMW M's own model account: production from the end of 1984, press presentation early 1985, 2,241 vehicles built, M88/3 of 3,453 cc developed for motor sport and the M1, 210 kW (286 hp) at 6,500 rpm, 340 Nm, 6.5 s to 100 km/h, 245 km/h, 1,430 kg kerb, E12 M535i named as precursor."
  },
  {
   "ref": "wikipedia-m5",
   "title": "BMW M5",
   "url": "https://en.wikipedia.org/wiki/BMW_M5",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Aggregated reference: manufactured October 1984 to June 1988, 2,241 units, M88/3 at 210 kW for Europe and South Africa against S38B35 at 191 kW (256 hp) for North America, NA production November 1986 to November 1987, Preussenstrasse then Garching from summer 1986, roughly 96 CKD cars at Rosslyn, and the fastest-production-saloon claim."
  },
  {
   "ref": "wikipedia-s38",
   "title": "BMW S38",
   "url": "https://en.wikipedia.org/wiki/BMW_S38",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Engine reference: S38B35 of 3,453 cc, 93.4 x 84.0 mm, 9.8:1, 190 kW (255 hp) at 6,500 rpm and 330 Nm at 4,500 rpm, built 1986-1989, and the differences from the M88/3 - lower compression, simplified exhaust manifold, catalytic converter, dual-row timing chain, shorter cam duration."
  },
  {
   "ref": "supercarnostalgia-m5",
   "title": "BMW E28 M5 Guide",
   "url": "https://supercarnostalgia.com/blog/bmw-e28-m5",
   "publisher": "Supercar Nostalgia",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "The fullest published market table: 588 LHD Euro (10/84-09/87), 187 RHD Euro (03/86-11/87), 1,340 North America (11/86-11/87), 30 Japan (01/87-03/87), 96 South Africa CKD (06/87-11/88), summing to 2,241; Preussenstrasse to 09/1986 then Garching; 282 bhp Euro against 256 bhp catalysed; US equipment list and 3.91:1 final drive."
  },
  {
   "ref": "motorsport-oct86",
   "title": "Road Test: BMW M5, October 1986",
   "url": "https://www.motorsportmagazine.com/archive/article/october-1986/64/road-test-18/",
   "publisher": "Motor Sport Magazine",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Period road test from the magazine's archive: UK list 31,295 pounds including tax and VAT, 286 bhp at 6,500 rpm, recorded 0-60 in 6.3 s, 0-100 in 17.1 s, 151 mph and 19.7 mpg; ABS and ventilated discs standard, Getrag five-speed, about 250 cars a year planned, and the note that it looked like just another 5-series."
  },
  {
   "ref": "evo-m5-e28",
   "title": "BMW M5 E28 - history, review and specs",
   "url": "https://www.evo.co.uk/reviews/19887/bmw-m5-e28-history-review-and-specs-of-an-icon",
   "publisher": "evo",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "States 187 right-hand-drive European cars, hand-building by BMW Motorsport at Garching, wet-sump M88/3 with Bosch Motronic and six butterflies, and quotes 278 bhp at 6,500 rpm - the lowest European output figure found here - plus 1,431 kg and a 151 mph limited maximum."
  },
  {
   "ref": "classic-trader-guide",
   "title": "The BMW E28 M5 Buying Guide",
   "url": "https://www.classic-trader.com/en/magazine/bmw-e28-m5-buying-guide",
   "publisher": "Classic Trader",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Buying guide: 2,241 cars 1984-1988, 187 RHD UK and 96 South African; 282 bhp M88 with a single-row timing chain that can break before the 100,000-mile interval against the 256 bhp S38B35 with dual-row chain; rust in footwells, boot floor, sills and window frames; cracked dashboards, failing clusters, expensive ABS."
  },
  {
   "ref": "collectingcars-guide",
   "title": "BMW E28 M5 price and buyers guide: the original super-saloon",
   "url": "https://collectingcars.com/articles/bmw-e28-m5-price-and-buyers-guide",
   "publisher": "Collecting Cars",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "2026 UK price bands: 25,000-40,000 pounds for corroded or undocumented projects, 45,000-60,000 for sound higher-mileage drivers, 65,000-80,000 for exceptional original cars; warns against patched rust repairs and rates documented high-mileage cars above low-mileage ones lacking history."
  },
  {
   "ref": "autoblog-retro",
   "title": "1988 BMW M5 Retro Review - The E28 is where it all began",
   "url": "https://www.autoblog.com/reviews/1988-bmw-m5-review",
   "publisher": "Autoblog",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Source for the US allocation story: BMW's original US forecast of 500 cars for one model year, actual production at nearly triple that, and original buyers suing over the loss of exclusivity. Also cites Car and Driver's 1987 fifth-wheel figure of 6.3 s to 60 mph for the 256 hp US car."
  },
  {
   "ref": "autoblog-record",
   "title": "Rare E28 BMW M5 Sets Record With $195K Sale",
   "url": "https://www.autoblog.com/news/e28-bmw-m5-sets-record-with-195k-sale",
   "publisher": "Autoblog",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Reports the highest public E28 M5 result found here: $195,810 on Hagerty Marketplace, 2 April 2026, for a 9,800-mile black-over-Natur single-owner car from the Enthusiast Auto Group collection carrying roughly $91,000 of 2020-2025 refurbishment; repeats the 1,340 North American figure."
  },
  {
   "ref": "classic-com-m5-e28",
   "title": "BMW M5 - E28 Market",
   "url": "https://www.classic.com/m/bmw/5-series/e28/m5/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Market data as of August 2026: benchmark $58,257 trending upward, average sale $52,618, tracked results from $8,000 for a 1988 project in January 2023 to $183,000 for a 9,000-mile 1988 car in March 2026; states 2,241 built."
  },
  {
   "ref": "classicvaluer-m5",
   "title": "Sold: 1988 BMW (E28) M5 - LHD",
   "url": "https://www.theclassicvaluer.com/vehicle-details/collecting-cars-2025-04-27-bmw-5-series-e28-m5-6cfb73",
   "publisher": "The Classic Valuer",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "Individual result plus aggregate: 42,987 pounds at Collecting Cars, 27 April 2025, for a 112,667-mile US-delivered car imported to the UK in 2021 and converted to European specification; model figures since 2020 of 6,984 pounds low, 37,551 median, 116,334 high."
  },
  {
   "ref": "rm-essen19-m5",
   "title": "1988 BMW M5, Essen 2019",
   "url": "https://rmsothebys.com/auctions/es19/lots/r0032-1988-bmw-m5/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Lot page, The Youngtimer Collection at Essen 2019, sold for a published 57,500 euros. Chassis WBSDC9307J2791182, US-delivered to Illinois. Catalogue states 1,340 North American cars against BMW's promise to limit US supply to 500, a 256 bhp S38, and that every North American car was black with Natur leather."
  },
  {
   "ref": "conceptcarz-1988-m5",
   "title": "1988 BMW M5",
   "url": "https://www.conceptcarz.com/vehicle/z10493/bmw-m5.aspx",
   "publisher": "Conceptcarz",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Gives the US list price of $46,500 and quotes US output as 252 horsepower, the lowest US figure encountered here, against the 255 and 256 hp given elsewhere."
  },
  {
   "ref": "motor1-m5-e28",
   "title": "BMW M5 (E28, 1984-1987): The first super five",
   "url": "https://www.motor1.com/news/714430/bmw-m5-e28-1984-story/",
   "publisher": "Motor1",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Gives the Amsterdam Motor Show of February 1985 as the public debut, production October 1984 to June 1988 and approximately 2,200 cars from BMW Motorsport GmbH in Munich, a German list price of 86,000 Deutschmarks, 286 PS and 340 Nm, and a reinforced five-speed with a 25 per cent limited-slip differential."
  },
  {
   "ref": "autoadvisor-sa-m5",
   "title": "1987 BMW M5 E28",
   "url": "https://www.autoadvisor.co.za/bmw/news/1987-bmw-m5-e28",
   "publisher": "AutoAdvisor South Africa",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "The dissenting South African figure: states South Africa received 100 E28 M5s, of which 96 were kit-assembled at Rosslyn and the remainder built in Germany. Also gives 210 kW and 340 Nm, M-Technic bodykit, Shadowline, cross-spoke wheels, Highline Nappa leather, and 2026 local values of R450,000-R750,000 rising above R900,000."
  },
  {
   "ref": "news24-sa-fives",
   "title": "Mzansi's amazing Fives - history of the BMW 5 Series in SA",
   "url": "https://www.news24.com/life/motoring/classic-cars/mzansis-amazing-fives-history-of-the-bmw-5-series-in-sa-20170321",
   "publisher": "News24",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "South African market history: 96 E28 M5s assembled at Rosslyn, the model's only assembly point outside Germany, distinguished by Shadowline trim and cross-spoke 16-inch alloys, with Nappa leather otherwise reserved for the 6- and 7-Series and a sunroof as the only option."
  },
  {
   "ref": "bmwblog-s38-guide",
   "title": "BMW S38 Engine Guide: Specs, Reliability, and Tuning",
   "url": "https://www.bmwblog.com/2026/02/23/bmw-s38-engine-guide/",
   "publisher": "BMWBlog",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Technical and ownership detail: S38B35 at 3,453 cc, 93.4 x 84.0 mm, 9.8:1, about 256 hp at 6,500 rpm on Bosch Motronic ML3.1; all S38 variants use a dual-row chain where the M88/3 used single-row; plastic guides and tensioners deteriorate; shim-and-bucket clearances need checking roughly every 30,000 miles; throttle-body synchronisation, vacuum lines, oil leaks and water pump failure recur."
  },
  {
   "ref": "bmwblog-e28-m5",
   "title": "Look Back at M Origins With BMW Group Classic's E28 M5",
   "url": "https://www.bmwblog.com/2024/10/19/bmw-e28-m5-first-high-performance-sedan/",
   "publisher": "BMWBlog",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "States 2,241 built globally with 1,340 for North America, of which only 101 had black rather than tan interiors, attributes the restricted colour palette to hand assembly, and links the engine to the M1 and M635CSi."
  },
  {
   "ref": "autoevolution-e28-m5",
   "title": "E28 BMW M5: The Family-Hauling Sedan With M1-Derived Power",
   "url": "https://www.autoevolution.com/news/e28-bmw-m5-the-family-hauling-sedan-with-m1-derived-power-183800.html",
   "publisher": "autoevolution",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Confirms the 1985 Amsterdam Motor Show debut and the E12 M535i as antecedent, and gives the M1-to-M88/3 changes: wet sump in place of dry sump, Bosch Motronic, and 10.5:1 compression against the M1 engine's 9.0:1. Also 2,241 total with 1,340 North American and 30 Japanese."
  }
 ],
 "claims": [
  {
   "section": "history",
   "claimText": "The E28 M5 was the first car to carry the M5 name, was assembled by hand by BMW Motorsport GmbH rather than on a production line, and followed the E12 M535i of 1980 as BMW's high-performance saloon.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "bmw-m-e28",
    "motor1-m5-e28",
    "evo-m5-e28"
   ]
  },
  {
   "section": "history",
   "claimText": "Production began at the end of 1984 and the car was shown publicly at the Amsterdam Motor Show in February 1985.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "motor1-m5-e28",
    "autoevolution-e28-m5",
    "bmw-m-e28"
   ]
  },
  {
   "section": "history",
   "claimText": "At launch the M5 was described as the fastest production saloon in the world, and it was priced accordingly at 86,000 Deutschmarks in Germany, 31,295 pounds in the United Kingdom and $46,500 in the United States.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-m5",
    "motor1-m5-e28",
    "motorsport-oct86",
    "conceptcarz-1988-m5"
   ]
  },
  {
   "section": "specs",
   "claimText": "The M88/3 is a road-adapted version of the engine designed for the mid-engined M1, retaining 3,453 cc, twin overhead camshafts, four valves per cylinder and six individual throttle butterflies, but converted from dry-sump to wet-sump lubrication, given Bosch Motronic management and raised to 10.5:1 compression.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "autoevolution-e28-m5",
    "evo-m5-e28",
    "bmwblog-s38-guide",
    "motorsport-oct86",
    "bmw-m-e28"
   ]
  },
  {
   "section": "specs",
   "claimText": "European output is quoted differently depending on the source and the unit used, and no single English-language figure can be treated as settled.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "bmw-m-e28",
    "supercarnostalgia-m5",
    "evo-m5-e28",
    "classic-trader-guide",
    "motorsport-oct86"
   ],
   "conflictNote": "BMW M states 210 kW (286 hp) at 6,500 rpm, which Motor Sport's 1986 road test renders directly as 286 bhp. Supercar Nostalgia, Classic Trader and BMWBlog convert the same engine to 282 bhp. evo publishes 278 bhp at 6,500 rpm. The gap is at least partly PS-to-bhp conversion, but no source consulted here states which figure is measured and which is converted, and the discrepancy is not resolved by any source consulted."
  },
  {
   "section": "specs",
   "claimText": "The catalysed S38B35 fitted to North American and Japanese cars is quoted at between 252 and 256 hp at 6,500 rpm depending on the source consulted.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "wikipedia-s38",
    "supercarnostalgia-m5",
    "conceptcarz-1988-m5",
    "rm-essen19-m5",
    "bmwblog-s38-guide"
   ],
   "conflictNote": "Supercar Nostalgia, RM Sotheby's, BMWBlog and BMW's own US press material all state 256 hp. Wikipedia's S38 entry states 190 kW (255 hp). Conceptcarz states 252 horsepower. Torque is more consistent at 243 lb-ft (330 Nm) at 4,500 rpm. No source consulted here reconciles the three power figures, and the point is unresolved."
  },
  {
   "section": "specs",
   "claimText": "The S38B35 differs from the M88/3 in having a lower 9.8:1 compression ratio, a catalytic converter, a simplified exhaust manifold, shorter camshaft duration and a dual-row timing chain in place of the M88/3's single-row chain.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-s38",
    "bmwblog-s38-guide",
    "classic-trader-guide"
   ]
  },
  {
   "section": "specs",
   "claimText": "Independent period testing recorded 0-60 mph in 6.3 seconds, 0-100 mph in 17.1 seconds, a 151 mph maximum and 19.7 mpg against BMW's claims of 6.5 seconds to 100 km/h and 245 km/h, from a car with a Getrag five-speed, a limited-slip differential quoted at 25 per cent locking and standard ABS.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "motorsport-oct86",
    "bmw-m-e28",
    "evo-m5-e28",
    "motor1-m5-e28"
   ]
  },
  {
   "section": "production",
   "claimText": "Total production is stated as 2,241 cars by BMW M and repeated by every general reference consulted, but the published market-by-market splits do not all reconcile with that figure and no single total is asserted here.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "bmw-m-e28",
    "wikipedia-m5",
    "supercarnostalgia-m5",
    "classic-com-m5-e28",
    "classic-trader-guide",
    "autoadvisor-sa-m5",
    "motor1-m5-e28"
   ],
   "conflictNote": "BMW M, Wikipedia, Supercar Nostalgia, Classic Trader, classic.com and The Classic Valuer all state 2,241; Motor1 gives approximately 2,200. The published market table (588 LHD Euro, 187 RHD Euro, 1,340 North America, 30 Japan, 96 South Africa) sums exactly to 2,241, but AutoAdvisor states South Africa received 100 cars of which 96 were Rosslyn CKD builds. Wikipedia and Motor1 also run production to June 1988 where the market table ends German assembly in November 1987. Neither the South African count nor the closing date is resolved by any source consulted here; the conflict is unresolved and productionTotal is left null."
  },
  {
   "section": "production",
   "claimText": "The published market split gives 588 European left-hand-drive cars, 187 European right-hand-drive, 1,340 North American, 30 Japanese and 96 South African CKD builds, with the European and North American runs overlapping only between November 1986 and November 1987.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "supercarnostalgia-m5",
    "wikipedia-m5",
    "classic-trader-guide"
   ]
  },
  {
   "section": "production",
   "claimText": "BMW indicated that North American supply would be limited to roughly 500 cars for a single model year; approximately 1,340 were built instead, and some early US buyers took legal action over the loss of exclusivity they had paid for; Car and Driver nonetheless recorded 6.3 seconds to 60 mph for the lower-output US car in a 1987 fifth-wheel test.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "autoblog-retro",
    "rm-essen19-m5",
    "bmwblog-e28-m5",
    "autoblog-record"
   ]
  },
  {
   "section": "production",
   "claimText": "Assembly took place by hand at BMW Motorsport's Preussenstrasse premises in Munich until around the summer of 1986 and then at Daimlerstrasse in Garching, with Rosslyn in South Africa the only assembly point for the model outside Germany, where the cars were specified more richly than anywhere else with Highline Nappa leather, M-Technic bodywork and cross-spoke 16-inch wheels.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-m5",
    "supercarnostalgia-m5",
    "news24-sa-fives",
    "evo-m5-e28",
    "autoadvisor-sa-m5"
   ]
  },
  {
   "section": "production",
   "claimText": "North American cars were finished in black with Natur tan leather almost without exception, and carried sealed-beam headlights, five-mph impact bumpers, side marker lights, a standard M-Technic boot spoiler and Shadowline trim, and a shorter 3.91:1 final drive.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "bmwblog-e28-m5",
    "rm-essen19-m5",
    "wikipedia-m5",
    "supercarnostalgia-m5"
   ]
  },
  {
   "section": "market",
   "claimText": "As of August 2026 classic.com records a market benchmark of $58,257 and an average sale of $52,618 on a rising trend, with tracked results from $8,000 for a 1988 project in January 2023 to $183,000 for a 9,000-mile 1988 car in March 2026, while The Classic Valuer's aggregate since 2020 runs from 6,984 pounds to 116,334 pounds with a median of 37,551 pounds.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-com-m5-e28",
    "classicvaluer-m5"
   ]
  },
  {
   "section": "market",
   "claimText": "The highest public result located in this research is $195,810 on Hagerty Marketplace on 2 April 2026 for a 9,800-mile single-owner US car, against 42,987 pounds at Collecting Cars in April 2025 for a 112,667-mile example and a published 57,500 euros at RM Sotheby's Essen sale in 2019.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "autoblog-record",
    "classicvaluer-m5",
    "rm-essen19-m5"
   ]
  },
  {
   "section": "market",
   "claimText": "Collecting Cars' 2026 UK guidance places projects at 25,000 to 40,000 pounds, sound higher-mileage drivers at 45,000 to 60,000 pounds and exceptional original cars at 65,000 to 80,000 pounds, and South African cars are quoted locally in 2026 at R450,000 to R750,000 rising above R900,000 for the best.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "collectingcars-guide",
    "autoadvisor-sa-m5"
   ]
  },
  {
   "section": "problems",
   "claimText": "The M88/3's single-row timing chain can fail before the nominal 100,000-mile replacement interval, making documented replacement the most important service record on a European car; the S38B35's dual-row chain is the more durable arrangement, though plastic guides and tensioners deteriorate on both.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-trader-guide",
    "bmwblog-s38-guide",
    "collectingcars-guide"
   ]
  },
  {
   "section": "problems",
   "claimText": "Mechanical shim-and-bucket valve clearances need checking at roughly 30,000-mile intervals, six individual throttle bodies require synchronisation for a clean idle and a strong mid-range, and cam cover and sump oil leaks, perished vacuum hoses and water pump or thermostat failure are the recurring faults.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "bmwblog-s38-guide",
    "classic-trader-guide"
   ]
  },
  {
   "section": "problems",
   "claimText": "Corrosion appears in the footwells, boot floor, sills and around the front and rear window frames, and cracked dashboards, worn leather, failing service-interval cluster electronics and expensive ABS repairs are usual on surviving cars.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-trader-guide",
    "collectingcars-guide"
   ]
  }
 ]
};
