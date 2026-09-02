/**
 * Researched model draft — Ferrari 330 GTC (1966-1968).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seed330Gtc = {
 "slug": "ferrari/330-gtc",
 "make": "Ferrari",
 "model": "330 GTC",
 "generation": "330 GTC and GTS",
 "generationCode": "Tipo 592",
 "trim": null,
 "yearStart": 1966,
 "yearEnd": 1968,
 "bodyStyles": [
  "2-door Berlinetta (fixed-roof two-seat coupe) by Pininfarina - 330 GTC",
  "2-door Spider (open two-seater with folding soft top) by Pininfarina - 330 GTS"
 ],
 "engines": [
  "3,967 cc Tipo 209/66 60-degree Colombo V12, single overhead camshaft per bank, wet sump, three twin-choke Weber 40 DCZ/6 or 40 DFI/2 carburettors, claimed 300 bhp; peak quoted at 7,000 rpm by Ferrari and RM Sotheby's, at 6,600 rpm by Gooding and Sports Car Digest"
 ],
 "productionTotal": null,
 "productionNotes": "No two families of source agree, and Ferrari's own heritage page disagrees with itself. The 330 GTC page at ferrari.com states in one paragraph that the model 'remained in production until the end of 1968: 600 were built', and in another that 'a total of 598 examples were produced in both left and right hand drive form, in the chassis number range 08329 to 11613 (excluding prototypes)'. Wikipedia and the Car Collector International buyer's guide repeat 598. RM Sotheby's catalogues use 600 as the headline figure while separately describing individual cars as 'one of 579 examples of the 330 GTC built in left-hand drive between 1966 and 1968'; evo states that only 22 closed cars were configured in right-hand drive, and 579 plus 22 gives 601, which matches none of the published totals exactly. Classic Motorsports, Premier Financial Services, Classic Driver and the Audrain museum all use a round 600. The likeliest explanation is that 598 excludes prototypes and one or more special-bodied chassis while 600 includes them, but no source consulted here says so, and the discrepancy is left open. The open GTS is in the same position: Wikipedia, Sports Car Market, Hagerty, Classic Motorsports and Car Collector International state 100, while RM Sotheby's (chassis 10689, 'the 63rd out of only 99 examples') and Gooding (chassis 9513, 'one of only 99 examples built') both state 99. Ferrari's own 330 GTS page gives no figure at all. The Pininfarina-bodied 'Speciale' coupes are counted differently again: Wikipedia says four, RM Sotheby's catalogue for chassis 8727 says six, and supercars.net describes a single car. Given the size of the disagreements, no total is asserted for either body style; a GTC figure of 598 to 600 and a GTS figure of 99 to 100 are the honest ranges. The GTC's chassis range of 08329 to 11613 is Ferrari's own and is not disputed by any source found.",
 "notableTrims": [
  {
   "name": "330 GTC (1966-1968)",
   "note": "The standard closed car, Geneva March 1966. Pininfarina body on the 275 GTB's 2,400 mm chassis with the 4-litre Tipo 209 V12, rear transaxle and torque tube. The bulk of production and the entry point to a 1960s V12 Ferrari with a genuinely usable cabin."
  },
  {
   "name": "330 GTS (1966-1968)",
   "note": "Open version shown at Paris in October 1966 with the same running gear. Roughly 99 or 100 built against about 600 coupes, and priced accordingly: as of September 2026 the classic.com benchmark for a GTS is nearly four times that for a GTC."
  },
  {
   "name": "330 GTC, right-hand drive",
   "note": "evo puts the count at 22 closed cars in right-hand drive, and RM Sotheby's describes left-hand-drive production as 579 cars. Scarcer than the LHD car and of particular interest in the UK and Australia, though the premium is not consistent across sales."
  },
  {
   "name": "330 GTC Speciale by Pininfarina",
   "note": "A handful of special-bodied coupes shown from the 1967 Brussels and Geneva shows; one (chassis 8727) was bought by Sergio Pininfarina as a design study and sold for $967,500 at RM Sotheby's Arizona in January 2022. Sources count four, six or one, so the number is treated as unknown here."
  },
  {
   "name": "275/330 GTC Prototipo (chassis 06431)",
   "note": "The development car Gooding describes as the original prototype of the model, retained by Ferrari for testing through 1966 and documented by Marcel Massini; offered at Amelia Island with a $650,000 to $800,000 estimate. A single car, but it explains where the GTC's 275-derived chassis came from."
  },
  {
   "name": "GTS conversions",
   "note": "Coupes cut into open cars are common enough that classic.com lists a '330 GTS Conversion' at $599,985 as a dealer asking price in August 2026, against a benchmark of about $2.0 million for a genuine GTS. Only the original spider chassis numbers carry the GTS value."
  }
 ],
 "specs": {
  "layout": "Front-mounted longitudinal V12, rear-wheel drive via rear-mounted five-speed transaxle connected by a rigid torque tube",
  "chassis": "Tipo 592 tubular steel chassis, 2,400 mm (94.5 in) wheelbase, shared with the post-April 1966 275 GTB; Pininfarina steel body, assembled by Pininfarina",
  "engine": "3,967 cc Tipo 209/66 60-degree Colombo V12, alloy block and heads with iron liners, seven-main-bearing crankshaft, chain-driven single overhead camshaft per bank, wet sump, three twin-choke Weber 40 DCZ/6 or 40 DFI/2 carburettors",
  "bore_stroke": "77 mm x 71 mm",
  "compression": "8.8:1 (evo)",
  "power": "300 bhp claimed by Ferrari. Peak rpm varies by source: 7,000 rpm (Ferrari, RM Sotheby's), 6,600 rpm (Gooding, Sports Car Digest)",
  "torque": "Quoted figures conflict: 288 lb-ft at 5,000 rpm (evo, Audrain museum) or 240 lb-ft at 5,000 rpm (supercars.net); no manufacturer figure was located",
  "transmission": "Tipo 592/1369 five-speed all-synchromesh manual in unit with the final drive at the rear",
  "suspension": "Independent all round by unequal-length wishbones, coil springs and telescopic dampers; the rear layout inherited from the 275 GTB",
  "brakes": "Girling discs on all four wheels, cable-operated handbrake",
  "wheels_tyres": "7L x 14 in Borrani wire wheels with 205 x 14 tyres as standard",
  "weight": "1,408 kg for the GTS per evo, which describes the spider as 110 kg heavier than the coupe (implying about 1,298 kg for the GTC, a figure evo does not state directly); Classic Motorsports quotes 'nearly 2,900 lb' for the GTC. No factory kerb weight located",
  "dimensions": "Length 4,505 mm, width 1,626 mm, height 1,214 mm (evo)",
  "acceleration": "0-60 mph in 6.5 s (evo) to 6.9 s (Road & Track, 330 GTS); standing quarter mile 14.6 s (Paul Frere, The Motor, November 1966) and 14.9 s at 95 mph (Road & Track), as reported by Sports Car Market",
  "top_speed": "152 mph (GTC) and 146 mph (GTS) per evo; RM Sotheby's quotes 150 mph; Sports Car Market cites 145 mph in period testing. All are claims or period figures rather than a single verified number",
  "period_price": "UK 6,156 pounds including purchase tax (evo); US list about $14,000 to $15,000 for the GTC and $16,800 for the GTS (Classic Motorsports, Road & Track, Sports Car Market)",
  "chassis_numbers": "08329 to 11613 excluding prototypes, per Ferrari"
 },
 "summary": "The Ferrari 330 GTC (1966-1968) was the car that first made a front-engined V12 Ferrari genuinely easy to live with. Shown at Geneva in March 1966, it placed the 4-litre single-cam Tipo 209 V12 from the 330 GT 2+2 into the short 2,400 mm chassis of the 275 GTB, complete with that car's independent rear suspension, rear-mounted five-speed transaxle and the rigid torque tube Ferrari had introduced in April 1966. Pininfarina both styled and built the body, borrowing the 500 Superfast's nose and the 275 GTS's tail, with leather, electric windows and optional air conditioning inside. Ferrari claimed 300 bhp; period testers recorded 0-60 mph in under seven seconds and top speeds around 145-152 mph, and remarked on the refinement as much as the pace. The open 330 GTS followed at Paris in October 1966. Around 600 coupes and around 100 spiders were built before the 4.4-litre 365 GTC and GTS replaced them in 1968, though sources disagree on the exact figures. As of September 2026 a good coupe sits around the mid-$500,000s on classic.com's benchmark, with the GTS at roughly four times that.",
 "history": "## Where It Sat in the Range\n\nBy the mid-1960s Ferrari's road-car range had separated into two temperaments. The 275 GTB was the short-wheelbase berlinetta with competition manners, and the 330 GT 2+2 was the long, quiet four-seater with the 4-litre engine. Ferrari's own account of the 330 GTC is that it 'slotted in between' the two: it shared the 275 GTB's chassis and took the 2+2's engine, an enlarged version of the 275 unit that was, in Ferrari's words, 'virtually identical in specification to that used in the late series 330 GT 2+2 models'. The result was a two-seater with 300 bhp that did not demand anything of its driver, which in 1966 was a new idea for Maranello; the Audrain museum describes it as 'a more luxurious alternative to the 275 GTB/4' and the effective replacement for the 500 Superfast.\n\n## Chassis, Torque Tube and Transaxle\n\nThe mechanical package is the interesting part. The Tipo 592 tubular chassis carried the 2,400 mm wheelbase of the 275 GTB, and with it that car's independent rear suspension and rear-mounted five-speed transaxle. Ferrari specifies that the 330 GTC used the same arrangement as the post-April 1966 275 GTB: two engine mounting points and two transaxle support points, with a rigid torque tube connecting them 'to form a solid unit'. A development car, chassis 06431, catalogued by Gooding as the 275/330 GTC Prototipo and retained by Ferrari for testing through 1966, sits at the start of the story. Brakes were Girling discs all round with a cable handbrake, and the standard wheels were 7L x 14 in Borranis on 205-section tyres.\n\n## The Engine\n\nThe Tipo 209/66 V12 displaced 3,967 cc from a 77 mm bore and 71 mm stroke, giving the 330 cc per cylinder that named the car. It was a single-overhead-camshaft-per-bank Colombo unit with a seven-main-bearing crankshaft, wet sump and three twin-choke Webers, either 40 DCZ/6 or 40 DFI/2 depending on the car. Ferrari claimed 300 bhp. The rpm at which that figure was quoted is not consistent across sources, 7,000 rpm in Ferrari's and RM Sotheby's material and 6,600 rpm in Gooding's and Sports Car Digest's, and the torque figure is similarly unsettled, evo and the Audrain museum giving 288 lb-ft against 240 lb-ft elsewhere. Premier Financial Services observes that the 330 matched the 275's 300 horsepower 'but at lower rpm and with more torque', which is the character of the car in one sentence. Road & Track found the engine happy to idle at 700 rpm and rev to 7,000.\n\n## Pininfarina, Geneva and Paris\n\nPininfarina designed and, unusually for the period, assembled the body. Ferrari describes the front as taking after the 500 Superfast and the rear as taking after the 275 GTS, and the thin-pillared glasshouse gave outstanding outward visibility. Inside there were leather seats, a wood-rimmed three-spoke wheel, electric windows as standard and air conditioning as an option. The coupe was presented at Geneva in March 1966; the open 330 GTS, with identical running gear, followed at the Paris Motor Show in October 1966. Pininfarina also produced a small number of special-bodied GTC coupes for the 1967 show season, one of which Sergio Pininfarina bought as a design study, and a single Zagato targa was built in 1967. Sources count the Speciales at four, six or one, so no number is asserted here.\n\n## Period Reception and Replacement\n\nThe period road tests were unusually warm. Road & Track's verdict on the GTS was 'go ahead, give yourself a treat, buy one', at a US price of $15,000; it recorded 0-60 mph in 6.9 seconds, praised the precise, strongly synchronised gearbox and the superbly rigid body, and was less complimentary about the brakes. Paul Frere in The Motor recorded a 14.6-second standing quarter in November 1966. Classic Motorsports later said the GTC 'could cruise at 130 mph all day long'. Production ran a little over two years, with Ferrari giving a chassis range of 08329 to 11613, and ended in 1968 when the 4.4-litre 365 GTC and GTS replaced the 330s with near-identical bodies. Of 1960s V12 Ferraris, the GTC is the one most often described as a driver's car rather than an exhibit, which has shaped how it has been used and how it is valued.",
 "marketNotes": "As of September 2026 classic.com's market benchmark for the Ferrari 330 GTC stands at $552,765 on a downward trend, with an average recorded sale of $537,494. Its lowest recorded result is a $39,200 sale on 26 October 2024, which The Classic Valuer also records at 30,772 pounds through RM Sotheby's on the same date; neither page explains the figure and it reads as an outlier rather than a data point about running cars. Recent results cluster more tightly. RM Sotheby's sold chassis 9487, a Classiche-certified LHD car with $34,000 of recent servicing, for $742,000 at Monterey in August 2025, and chassis 9595, an air-conditioned car with a 2016 engine rebuild and thirty years in one Phoenix ownership, for $588,000 at Arizona in January 2026. Broad Arrow sold a 1967 GTC for $450,500 in October 2025 and RM Sotheby's London sold chassis 8873, Classiche-certified, for 376,250 pounds in November 2024. Dealer asking prices on classic.com sit at $525,000 to $595,000. The Classic Valuer's UK data gives a median of 407,502 pounds across 136 recorded sales with a 75 per cent sell-through rate. The open GTS is a different market: classic.com's benchmark is $2,005,709 on an upward trend with an average of $1,866,908 and a floor of $1,116,000 in August 2023. Gooding sold the unrestored, 39,500-mile chassis 9513 for $1,600,000 at Amelia Island in March 2025 against a $1.75 to $2.25 million estimate, Broad Arrow made 1,918,750 euros for a matching-numbers 1968 GTS at Villa d'Este in May 2026, and RM Sotheby's Monaco 2026 failed to sell chassis 10689 against a 1.4 to 1.8 million euro estimate. Auction figures are published sold prices including premium unless stated.",
 "whatToLookFor": "Identity comes first on this model because a GTC is worth a fraction of a GTS and the two share every mechanical part. The genuine spiders are the 99 or 100 original chassis numbers; coupes converted to open bodywork exist and are openly traded as conversions, and classic.com lists one at $599,985 against a $2 million benchmark for a real car. The Ferrari Classiche 'Red Book' and a Marcel Massini history file are the two documents auction houses lean on, and the recent RM Sotheby's and Gooding lots that sold well all had matching engine, gearbox and body numbers confirmed by one or both. Engine and gearbox numbers should match the chassis; Gooding's chassis 9513 and RM's 9487 both carried their original units and gearbox 117 was recorded for the latter. On the mechanical side, Car Collector International's guide lists the checks that matter: a compression and leak-down test, a hot oil-pressure reading and an inspection of the radiator core, with blue smoke on start-up and overrun pointing to valve-guide wear and running hot in traffic to cooling neglect. Transaxle whine on the overrun and a notchy change when hot are the tell-tales for a tired rear unit. The body is steel on a tubular frame and the sills, floors and A-pillars are the corrosion points; a bare-metal Pininfarina body restoration is quoted at $70,000 to $220,000, so the state of the structure decides the price more than the paint does. Specification is worth recording: air conditioning and power windows were factory options and appear on the better-sold cars, and Borrani wire wheels were standard. Right-hand-drive cars, 22 by evo's count, need their configuration confirmed as original rather than converted. Service history matters in the usual way, but on this car the recent auction results show that a documented engine rebuild or transaxle overhaul, at $25,000 to $90,000, is reflected almost pound for pound in the result.",
 "commonProblems": "The Tipo 209 V12 is robust when maintained and has been in specialist hands for sixty years, but the wear points are predictable. Car Collector International names valve-guide wear, cooling neglect and carburettor synchronisation as the primary concerns, with a correct top-end and cooling refresh quoted at $40,000 to $90,000. The three Webers need periodic balancing and hot starting can be reluctant; a period owner quoted by Classic Motorsports uses the auxiliary fuel pump to draw fresh fuel from the tank before a hot start. The rear transaxle is the GTC-specific liability: a rebuild is quoted at $25,000 to $55,000 and the symptoms are whine on the overrun and a notchy gearchange when hot. Girling disc brakes were criticised even when new, Road & Track marking them down in 1968, and the Classic Motorsports owner notes the pedal can go to the floor if the system is not kept in adjustment. The electrical system uses a Marelli distributor, a dynamo and Lucas switchgear, all of which age out; progressive rewiring is quoted at $5,000 to $18,000. Air conditioning, where fitted, was marginal and the same owner describes keeping it working as a matter of maintenance and patience. Corrosion in the sills, floors and A-pillars is the structural risk and the most expensive fault to put right. None of the ownership sources describe the torque-tube driveline as a fault area on the GTC; it was the fix for the earlier 275 GTB's driveline problems rather than a problem in itself.",
 "valueTrajectory": "The 330 GTC spent decades as the affordable V12 Ferrari. Sports Car Market recorded that average examples were slow sellers at $75,000 in the early 2000s, that a $170,375 Christie's result in August 2006 looked expensive at the time, and that its own GTS valuation range then was $300,000 to $425,000. The 2010s re-rated the car with the rest of the 1960s Ferrari cohort, and The Classic Valuer's highest recorded GTC price is 689,346 pounds in September 2022. Since then the coupe has softened: as of September 2026 classic.com's benchmark of $552,765 carries a downward trend arrow, Car Collector International cites a 19.6 per cent year-on-year fall in a US price guide, and the spread between the $742,000 Monterey 2025 result and the $450,500 Broad Arrow result a few months later shows a market that is paying for certification and history and discounting the rest. The GTS has moved the other way: its classic.com benchmark of $2,005,709 is trending upward, though the 2026 results include a strong sale at Villa d'Este and a no-sale at Monaco, so the open car's market is selective rather than uniformly rising. The gap between the two body styles, roughly four to one as of September 2026, is the defining feature of the model's value history and is the reason conversions exist.",
 "overallConfidence": "medium",
 "sources": [
  {
   "ref": "ferrari-330-gtc",
   "title": "Ferrari 330 GTC (1966)",
   "url": "https://www.ferrari.com/en-EN/auto/330-gtc",
   "publisher": "Ferrari S.p.A.",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Ferrari's own model record. States both '600 were built' and '598 examples were produced ... in the chassis number range 08329 to 11613 (excluding prototypes)'. Geneva 1966 launch; Tipo 209/66 engine, 3,967 cc, 77 x 71 mm, 300 bhp claimed, Weber 40 DCZ/6 or 40 DFI/2; Tipo 592 chassis, 2,400 mm wheelbase; 592/1369 five-speed; torque tube and transaxle layout shared with post-April 1966 275 GTB; Girling discs; 7L x 14 Borranis; body designed and assembled by Pininfarina, styled after the 500 Superfast and 275 GTS."
  },
  {
   "ref": "ferrari-330-gts",
   "title": "Ferrari 330 GTS (1966)",
   "url": "https://www.ferrari.com/en-EN/auto/330-gts",
   "publisher": "Ferrari S.p.A.",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Ferrari's GTS record: presented at the Paris Motor Show in October 1966 as the open version of the 330 GTC with the same V12 running gear, Pininfarina design. Gives no production figure."
  },
  {
   "ref": "wikipedia-330",
   "title": "Ferrari 330",
   "url": "https://en.wikipedia.org/wiki/Ferrari_330",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Aggregated reference: 598 GTC and 100 GTS; Geneva March 1966 and Paris October 1966 debuts; Tipo 209 engine at 300 PS; shared 275 wheelbase and independent rear suspension; four GTC Speciale by Pininfarina shown at Brussels 1967; one Zagato targa in 1967; replaced by 365 GTC/GTS in 1968."
  },
  {
   "ref": "classic-330-gtc",
   "title": "Ferrari 330 GTC Market",
   "url": "https://www.classic.com/m/ferrari/330/gtc/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of September 2026: CMB $552,765 trending down, average sale $537,494, lowest recorded $39,200 on 26 October 2024. Recent results: $742,000 (RM Sotheby's, per lot page), $588,000 RM Sotheby's 23 January 2026, $450,500 Broad Arrow 31 October 2025, $575,000 Bring a Trailer 9 October 2025, dealer asking $525,000 and $595,000."
  },
  {
   "ref": "classic-330-gts",
   "title": "Ferrari 330 GTS Market",
   "url": "https://www.classic.com/m/ferrari/330/gts/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of September 2026: CMB $2,005,709 trending up, average $1,866,908, lowest recorded $1,116,000 on 17 August 2023. Lists a '330 GTS Conversion' at $599,985 asking (August 2026) and the Broad Arrow 1,918,750 euro sale of 17 May 2026."
  },
  {
   "ref": "classicvaluer-330-gtc",
   "title": "Ferrari 330 GTC: Buyer's Guide",
   "url": "https://www.theclassicvaluer.com/buyers-guide/ferrari/330-gtc",
   "publisher": "The Classic Valuer",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "UK-oriented sales database: median 407,502 pounds, highest 689,346 pounds (RM Sotheby's, 24 September 2022), lowest 30,772 pounds (RM Sotheby's, 26 October 2024), 136 sales recorded, 75 per cent sell-through. Its technical sections are unpopulated template text and are not used here."
  },
  {
   "ref": "rm-mo25-9487",
   "title": "1967 Ferrari 330 GTC by Pininfarina, Monterey 2025",
   "url": "https://rmsothebys.com/auctions/mo25/lots/r0039-1967-ferrari-330-gtc-by-pininfarina/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold $742,000, Monterey, August 2025. Chassis and engine 9487, gearbox 117; 'one of just 579 left-hand-drive examples produced between 1966 and 1968'; Classiche certified 2023; 300 hp, 0-60 under seven seconds, 150 mph; nearly $34,000 of recent servicing; completed December 1966."
  },
  {
   "ref": "rm-az26-9595",
   "title": "1967 Ferrari 330 GTC by Pininfarina, Arizona 2026",
   "url": "https://rmsothebys.com/auctions/az26/lots/r0016-1967-ferrari-330-gtc-by-pininfarina/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold $588,000, Arizona, January 2026. Chassis and engine 9595, LHD European specification with factory air conditioning, power windows and Borranis; 'one of approximately 600 examples produced'; full engine rebuild 2016 with over $60,000 in servicing; thirty-year Phoenix ownership."
  },
  {
   "ref": "rm-lf24-8873",
   "title": "1966 Ferrari 330 GTC by Pininfarina, London 2024",
   "url": "https://rmsothebys.com/auctions/lf24/lots/r0047-1966-ferrari-330-gtc-by-pininfarina/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold 376,250 pounds, London, November 2024. Chassis 8873, LHD, believed the 25th of 600 built and one of 579 LHD cars; Classiche certified July 2019; 300 hp at 7,000 rpm; leather and electric windows standard; delivered August 1966 to Switzerland."
  },
  {
   "ref": "rm-mc26-gts-10689",
   "title": "1967 Ferrari 330 GTS by Pininfarina, The Monaco Auction 2026",
   "url": "https://rmsothebys.com/auctions/mc26/lots/r0040-1967-ferrari-330-gts-by-pininfarina",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Not sold at Monaco 2026 against a 1,400,000 to 1,800,000 euro estimate. Chassis and engine 10689, 'the 63rd out of only 99 examples of the Ferrari 330 GTS built from 1966 to 1968'; Classiche certified January 2008 with Red Book; delivered December 1967 to Toronto; four platinum concours awards."
  },
  {
   "ref": "rm-az22-speciale-8727",
   "title": "1966 Ferrari 330 GTC Speciale by Pininfarina, Arizona 2022",
   "url": "https://rmsothebys.com/auctions/az22/lots/r0075-1966-ferrari-330-gtc-speciale-by-pininfarina/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold $967,500, Arizona, January 2022. Chassis 8727, engine 209/0025, 'one of six Speciale examples built on the 330 GTC platform' and 'the fourth of 600 330 GTC examples built'; bought new by Sergio Pininfarina as a design study; dual bonnet vents, pop-up fog lamps, cloth upholstery."
  },
  {
   "ref": "gooding-am25-gts-9513",
   "title": "1967 Ferrari 330 GTS, Amelia Island Auctions 2025",
   "url": "https://www.goodingco.com/lot/1967-ferrari-330-gts-1d/",
   "publisher": "Gooding Christie's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold $1,600,000 against a $1,750,000 to $2,250,000 estimate, Amelia Island, March 2025. Chassis and engine 9513, 'one of only 99 examples built'; 3,967 cc SOHC Tipo 209/66 V12 at 300 bhp at 6,600 rpm; unrestored, 55 years in one ownership, about 39,500 miles; Massini documented."
  },
  {
   "ref": "gooding-pb23-gts-10913",
   "title": "1968 Ferrari 330 GTS, Pebble Beach Auctions 2023",
   "url": "https://www.goodingco.com/lot/1968-ferrari-330-gts-1/",
   "publisher": "Gooding & Company",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Catalogue for chassis 10913 (estimate $2.2 to $2.7 million; result not shown on the page). Specification: 3,967 cc Tipo 209/66, three Weber 40 DCZ6, 300 bhp at 6,600 rpm, five-speed transaxle, four-wheel Girling discs, independent wishbone and coil suspension. Ex-William F. Harrah, Road & Track cover car December 1969."
  },
  {
   "ref": "gooding-prototipo-06431",
   "title": "1964 Ferrari 275/330 GTC Prototipo, Amelia Island Auctions",
   "url": "https://www.goodingco.com/lot/1964-ferrari-275-330-gtc-prototipo/",
   "publisher": "Gooding Christie's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Chassis and engine 06431, described as the original prototype of the 330 GTC, retained by Ferrari for testing and development through 1966, with pre-production features, Massini documentation and build sheet copies; estimate $650,000 to $800,000, result not shown."
  },
  {
   "ref": "dupont-villa-deste-2026",
   "title": "Broad Arrow Concorso d'Eleganza Villa d'Este Auction 2026: Top 10 Results and Highlights",
   "url": "https://news.dupontregistry.com/blogs/auctions/broad-arrow-concorso-deleganza-villa-deste-auction-2026-top-10-results-and-highlights",
   "publisher": "duPont Registry",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Broad Arrow Villa d'Este, 16-17 May 2026: a matching-numbers 1968 330 GTS, lot 114, realised 1,918,750 euros ($2.23 million) against a 1.5 to 1.7 million euro estimate; sale total 40.8 million euros."
  },
  {
   "ref": "curbside-rt-330-gts",
   "title": "Vintage R&T Road Test: 1968 Ferrari 330 GTS - Go Ahead, Give Yourself A Treat, Buy One",
   "url": "https://www.curbsideclassic.com/vintage-reviews/vintage-rt-road-test-1968-ferrari-330-gts-go-ahead-give-yourself-a-treat-buy-one/",
   "publisher": "Curbside Classic",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Summary of the Road & Track period test of the 330 GTS: $15,000 price, 0-60 mph in 6.9 seconds, engine idling at 700 rpm and revving to 7,000, precise strongly synchronised gearbox, light steering, superbly rigid body, adequate air conditioning, brakes not rated favourably."
  },
  {
   "ref": "evo-330-gtc",
   "title": "1966 Ferrari 330 GTC review - a racing brute in a fine suit",
   "url": "https://www.evo.co.uk/ferrari/203696/1966-ferrari-330-gtc-review-a-racing-brute-in-a-fine-suit",
   "publisher": "evo",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "5 April 2021. Approximately 600 coupes, 100 GTS, 22 closed cars in RHD. Tipo 209/66, 3,967 cc, 8.8:1, three Weber 40 DFI, 300 bhp, 288 lb-ft at 5,000 rpm; 1,408 kg GTS, stated as 110 kg heavier than the GTC (no direct GTC weight); 152 and 146 mph; 0-60 in 6.5 s; length 4,505, width 1,626, height 1,214, wheelbase 2,400 mm; UK price 6,156 pounds; GTC value about 500,000 pounds in 2021."
  },
  {
   "ref": "scm-330-gtc-2006",
   "title": "1967 Ferrari 330 GTC",
   "url": "https://www.sportscarmarket.com/profile/1967-ferrari-330-gtc",
   "publisher": "Sports Car Market",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Profile of a $170,375 Christie's Monterey sale, August 2006. Period test data: 14.6 s standing quarter (Paul Frere, The Motor, November 1966), 14.9 s at 95 mph (Road & Track), 145 mph. Market note that average cars had been slow sellers at $75,000 and an exceptional car should exceed $200,000 in 2006. Factory radio, Borranis, electric windows, air conditioning."
  },
  {
   "ref": "scm-330-gts-2020",
   "title": "1967 Ferrari 330 GTS",
   "url": "https://www.sportscarmarket.com/profile/1967-ferrari-330-gts-2",
   "publisher": "Sports Car Market",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Profile of chassis 9791, sold $1,475,000 including premium at Bonhams Amelia Island, 5 March 2020. States 100 GTS built, $16,800 list price, prior high of $2,900,000 at RM Monte Carlo 2014 and a $1,985,000 Gooding comparable in early 2020; Classiche certification and Cavallino Platinum."
  },
  {
   "ref": "hagerty-330-gts-profile",
   "title": "1967 Ferrari 330 GTS",
   "url": "https://www.hagerty.com/media/car-profiles/1967-ferrari-330-gts/",
   "publisher": "Hagerty Media (Sports Car Market reprint, Steve Ahlgrim)",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "100 GTS produced 1966-68; 300 hp 3,967 cc SOHC V12 with triple Webers, rear transaxle; top speed just over 150 mph, 0-60 in seven seconds, quarter mile 15 s near 100 mph; $16,800 list; chassis 10375 sold $357,500 at RM Arizona January 2006 and $185,000 in 1993; SCM valuation then $300,000 to $425,000."
  },
  {
   "ref": "classicmotorsports-330-gtc",
   "title": "The Ferrari 330 GTC: A lifestyle coupe from the lifestyle era",
   "url": "https://classicmotorsports.com/articles/ferrari-330-gtc/",
   "publisher": "Classic Motorsports",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Don Weberg, January 2008 issue, republished April 2023. Roughly 600 GTC and 100 GTS; 300 hp; nearly 2,900 lb; 0-60 within seven seconds, quarter about 14 s; 130 mph cruising; about $14,000 new; near 50/50 balance from rear transaxle. Owner notes on air conditioning upkeep, auxiliary fuel pump for hot starts and brake pedal adjustment."
  },
  {
   "ref": "sportscardigest-330-gts",
   "title": "1967 Ferrari 330 GTS",
   "url": "https://sportscardigest.com/1967-ferrari-330-gts/",
   "publisher": "Sports Car Digest",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Describes the GTS as an update of the 275 GTS with a 500 Superfast-inspired nose; 'a genuine 300 bhp at 6,600 rpm'; five-speed rear transaxle with torque-tube driveshaft; same tubular chassis as the GTC and very similar to the 275 GTB."
  },
  {
   "ref": "premier-330-gtc",
   "title": "Vintage Corner: Ferrari 330 GTC",
   "url": "https://www.premierfinancialservices.com/car-review/model-masterpiece-ferrari-330-gtc/",
   "publisher": "Premier Financial Services",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "States Ferrari produced 600 330 GTCs and 153 365 GTCs; 330 cc per cylinder for 3,967 cc; matched the 275's 300 hp at lower rpm with more torque; 275 GTB tubular chassis and 94.5 in wheelbase; four-wheel independent suspension and discs; 500 Superfast nose and 275 GTS tail; thin-pillared glasshouse."
  },
  {
   "ref": "audrain-330-gtc",
   "title": "1967 Ferrari 330 GTC",
   "url": "https://www.audrainautomuseum.org/grand-touring-cars-through-the-decade/1967-ferrari-330-gtc",
   "publisher": "Audrain Auto Museum",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Museum record: Geneva 1966 launch, 600 produced before the 1968 update to the 365 GTC; 300 hp, 288 lb-ft, 7,000 rpm, five-speed; power windows, leather, teak veneer dash, wood-rimmed wheel; positioned as a more luxurious alternative to the 275 GTB/4 and effective replacement for the 500 Superfast."
  },
  {
   "ref": "cci-330-buyers-guide",
   "title": "Ferrari 330 Buyer's Guide (1963-1968)",
   "url": "https://www.carcollectorinternational.com/research/buyers-guides/ferrari/330",
   "publisher": "Car Collector International",
   "sourceType": "specialist",
   "reliability": "low",
   "notes": "States 598 GTC, 100 GTS and 4 Speciale. Fault patterns and cost bands: valve-guide wear, cooling neglect and carburettor sync ($40,000 to $90,000 top-end and cooling refresh); transaxle whine and notchy hot change ($25,000 to $55,000 rebuild); Marelli, dynamo and Lucas electrics ($5,000 to $18,000); sill, floor and A-pillar corrosion ($70,000 to $220,000 body restoration); Red Book and Massini file for identity; cites a 19.6 per cent year-on-year price guide fall. Used for fault patterns and inspection points only; its brake and cost figures are not independently confirmed."
  },
  {
   "ref": "supercars-330-gtc-speciale",
   "title": "1967 Ferrari 330 GTC Speciale",
   "url": "https://www.supercars.net/blog/1967-ferrari-330-gtc-speciale/",
   "publisher": "supercars.net",
   "sourceType": "specialist",
   "reliability": "low",
   "notes": "Describes a single Speciale, chassis 9799, shown at Geneva March 1967, contradicting Wikipedia (four) and RM Sotheby's (six). Quotes 300 hp at 7,000 rpm and 240 lb-ft at 5,000 rpm, 152 mph, 0-60 in 6.8 s, 280 mm Girling discs. Used only to establish that the Speciale count and torque figure are contested."
  }
 ],
 "claims": [
  {
   "section": "history",
   "claimText": "The 330 GTC was presented at the Geneva Motor Show in March 1966 and the open 330 GTS at the Paris Motor Show in October 1966, both with Pininfarina bodywork and identical running gear.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "ferrari-330-gtc",
    "ferrari-330-gts",
    "wikipedia-330"
   ]
  },
  {
   "section": "history",
   "claimText": "The 330 GTC combined the 2,400 mm Tipo 592 chassis of the 275 GTB, including its independent rear suspension and rear-mounted five-speed transaxle, with the 4-litre V12 of the late-series 330 GT 2+2, positioning it between the two.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "ferrari-330-gtc",
    "wikipedia-330",
    "premier-330-gtc"
   ]
  },
  {
   "section": "specs",
   "claimText": "The 330 GTC used the same driveline as the post-April 1966 275 GTB: two engine mounts and two transaxle mounts joined by a rigid torque tube to form a solid unit, with the Tipo 592/1369 five-speed transaxle at the rear.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "ferrari-330-gtc",
    "sportscardigest-330-gts"
   ]
  },
  {
   "section": "specs",
   "claimText": "The engine is the 3,967 cc Tipo 209/66 single-overhead-camshaft Colombo V12 with a 77 mm bore and 71 mm stroke, wet sump and three twin-choke Weber 40 DCZ/6 or 40 DFI/2 carburettors, with a claimed 300 bhp.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "ferrari-330-gtc",
    "gooding-pb23-gts-10913",
    "evo-330-gtc"
   ]
  },
  {
   "section": "specs",
   "claimText": "The rpm at which the 300 bhp peak is quoted and the torque figure both vary by source: 7,000 rpm (Ferrari, RM Sotheby's) against 6,600 rpm (Gooding, Sports Car Digest), and 288 lb-ft at 5,000 rpm (evo, Audrain) against 240 lb-ft at 5,000 rpm (supercars.net).",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "rm-lf24-8873",
    "gooding-am25-gts-9513",
    "sportscardigest-330-gts",
    "evo-330-gtc",
    "audrain-330-gtc",
    "supercars-330-gtc-speciale"
   ],
   "conflictNote": "RM Sotheby's London 2024 catalogue quotes 300 hp at 7,000 rpm; Gooding's 2023 and 2025 catalogues and Sports Car Digest quote 300 bhp at 6,600 rpm. evo and the Audrain museum give 288 lb-ft of torque; supercars.net gives 240 lb-ft. No manufacturer torque figure was located and the disagreement is not resolved by any source consulted here."
  },
  {
   "section": "production",
   "claimText": "Total 330 GTC production is stated as 598 or 600 depending on the source, with Ferrari's own page giving both figures and a chassis range of 08329 to 11613 excluding prototypes; no single figure is asserted here.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "ferrari-330-gtc",
    "wikipedia-330",
    "cci-330-buyers-guide",
    "rm-az26-9595",
    "rm-lf24-8873",
    "evo-330-gtc",
    "audrain-330-gtc"
   ],
   "conflictNote": "Ferrari's heritage page states '600 were built' in one paragraph and '598 examples were produced ... (excluding prototypes)' in another. Wikipedia and Car Collector International state 598. RM Sotheby's, evo, Audrain, Premier Financial Services and Classic Motorsports use 600 or 'approximately 600'. RM Sotheby's separately gives 579 LHD cars and evo gives 22 RHD cars, which sum to 601. Not resolved by any source consulted here; productionTotal is left null."
  },
  {
   "section": "production",
   "claimText": "Total 330 GTS production is stated as 100 by most published references and as 99 by RM Sotheby's and Gooding catalogue entries; Ferrari's own GTS page gives no figure.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "wikipedia-330",
    "scm-330-gts-2020",
    "hagerty-330-gts-profile",
    "classicmotorsports-330-gtc",
    "rm-mc26-gts-10689",
    "gooding-am25-gts-9513",
    "ferrari-330-gts"
   ],
   "conflictNote": "Wikipedia, Sports Car Market, Hagerty, Classic Motorsports, evo and Car Collector International state 100. RM Sotheby's (chassis 10689, 'the 63rd out of only 99 examples') and Gooding (chassis 9513, 'one of only 99 examples built') state 99. Ferrari's page is silent. Not resolved by any source consulted here."
  },
  {
   "section": "production",
   "claimText": "Left-hand-drive 330 GTC production is given as 579 cars by RM Sotheby's and right-hand-drive production as 22 closed cars by evo.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "rm-mo25-9487",
    "rm-lf24-8873",
    "evo-330-gtc"
   ]
  },
  {
   "section": "production",
   "claimText": "Pininfarina built a small number of special-bodied 330 GTC Speciale coupes for the 1967 show season, one of which, chassis 8727, was bought by Sergio Pininfarina as a design study; the count is given as four, six or one depending on the source.",
   "confidence": "low",
   "status": "disputed",
   "sourceRefs": [
    "wikipedia-330",
    "rm-az22-speciale-8727",
    "supercars-330-gtc-speciale",
    "cci-330-buyers-guide"
   ],
   "conflictNote": "Wikipedia and Car Collector International state four Speciale coupes shown at Brussels 1967. RM Sotheby's catalogue for chassis 8727 states six built on the 330 GTC platform. supercars.net describes a single car, chassis 9799, shown at Geneva 1967. Not resolved by any source consulted here."
  },
  {
   "section": "history",
   "claimText": "A development car, chassis 06431, catalogued by Gooding as the 275/330 GTC Prototipo, was retained by Ferrari for testing and development through 1966 and is documented by Marcel Massini and factory build sheet copies.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "gooding-prototipo-06431"
   ]
  },
  {
   "section": "history",
   "claimText": "Period tests recorded 0-60 mph in 6.5 to 6.9 seconds, a standing quarter mile of 14.6 seconds (Paul Frere, The Motor, November 1966) to 14.9 seconds at 95 mph (Road & Track), and top speeds quoted between 145 and 152 mph; Road & Track priced the GTS at $15,000 and praised the gearbox and body rigidity while marking down the brakes.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "curbside-rt-330-gts",
    "scm-330-gtc-2006",
    "evo-330-gtc",
    "hagerty-330-gts-profile"
   ]
  },
  {
   "section": "specs",
   "claimText": "Published weights are 1,408 kg for the GTS, described by evo as 110 kg heavier than the GTC (implying about 1,298 kg for the coupe), and 'nearly 2,900 lb' for the GTC (Classic Motorsports); no factory kerb weight was located and none is asserted as such.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "evo-330-gtc",
    "classicmotorsports-330-gtc"
   ]
  },
  {
   "section": "history",
   "claimText": "Production ran a little over two years and ended in 1968, when the 4.4-litre 365 GTC and 365 GTS replaced the 330 models with near-identical Pininfarina bodies.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "ferrari-330-gtc",
    "wikipedia-330",
    "audrain-330-gtc",
    "premier-330-gtc"
   ]
  },
  {
   "section": "market",
   "claimText": "As of September 2026 classic.com records a 330 GTC market benchmark of $552,765 on a downward trend with an average sale of $537,494, and a 330 GTS benchmark of $2,005,709 on an upward trend with an average of $1,866,908 and a lowest recorded sale of $1,116,000 in August 2023.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-330-gtc",
    "classic-330-gts"
   ]
  },
  {
   "section": "market",
   "claimText": "Recent GTC auction results include $742,000 for Classiche-certified chassis 9487 at RM Sotheby's Monterey in August 2025, $588,000 for chassis 9595 at RM Sotheby's Arizona in January 2026, $450,500 at Broad Arrow in October 2025 and 376,250 pounds for chassis 8873 at RM Sotheby's London in November 2024; The Classic Valuer's UK median is 407,502 pounds across 136 sales.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "rm-mo25-9487",
    "rm-az26-9595",
    "classic-330-gtc",
    "rm-lf24-8873",
    "classicvaluer-330-gtc"
   ]
  },
  {
   "section": "market",
   "claimText": "Recent GTS results include $1,600,000 for unrestored chassis 9513 at Gooding Amelia Island in March 2025, 1,918,750 euros for a 1968 car at Broad Arrow Villa d'Este in May 2026, and a no-sale for Classiche-certified chassis 10689 at RM Sotheby's Monaco in 2026 against a 1.4 to 1.8 million euro estimate; the 2020 Bonhams result for chassis 9791 was $1,475,000 including premium.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "gooding-am25-gts-9513",
    "dupont-villa-deste-2026",
    "classic-330-gts",
    "rm-mc26-gts-10689",
    "scm-330-gts-2020"
   ]
  },
  {
   "section": "market",
   "claimText": "The 330 GTC's value history runs from average cars being slow sellers at $75,000 in the early 2000s and a $170,375 Christie's result in August 2006 that was considered expensive, through a UK high of 689,346 pounds in September 2022, to a softening coupe market as of September 2026 while the GTS trends upward.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "scm-330-gtc-2006",
    "classicvaluer-330-gtc",
    "classic-330-gtc",
    "classic-330-gts",
    "cci-330-buyers-guide"
   ]
  },
  {
   "section": "problems",
   "claimText": "Ownership sources identify valve-guide wear, cooling neglect and carburettor synchronisation as the main engine concerns, transaxle whine and a notchy hot gearchange as the signs of a tired rear unit, ageing Marelli, dynamo and Lucas electrics, and corrosion in the sills, floors and A-pillars as the structural risk.",
   "confidence": "low",
   "status": "verified",
   "sourceRefs": [
    "cci-330-buyers-guide",
    "classicmotorsports-330-gtc"
   ]
  },
  {
   "section": "problems",
   "claimText": "Brakes were criticised in period and require the system to be kept in adjustment, hot starting is helped by the auxiliary fuel pump, and factory air conditioning was marginal when new and is described by owners as a matter of maintenance and patience.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "classicmotorsports-330-gtc",
    "curbside-rt-330-gts"
   ]
  },
  {
   "section": "problems",
   "claimText": "Because the coupe and spider share every mechanical part and the GTS is worth several times the GTC, coupes converted to open bodywork are traded as conversions and only the original GTS chassis numbers carry the spider's value; Ferrari Classiche Red Book certification and Massini history files are the identity documents auction houses rely on.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-330-gts",
    "cci-330-buyers-guide",
    "rm-mo25-9487",
    "rm-mc26-gts-10689",
    "gooding-am25-gts-9513"
   ]
  }
 ]
};
