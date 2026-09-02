/**
 * Researched model draft — Ferrari 365 GTB/4 Daytona (1968-1973).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seed365Gtb4Daytona = {
 "slug": "ferrari/365-gtb4-daytona",
 "make": "Ferrari",
 "model": "365 GTB/4 Daytona",
 "generation": "Berlinetta and GTS/4 Spider",
 "generationCode": "Tipo 605 chassis / Tipo 251 engine",
 "trim": null,
 "yearStart": 1968,
 "yearEnd": 1973,
 "bodyStyles": [
  "2-door Berlinetta (fixed-roof coupe, 365 GTB/4)",
  "2-door Spider (folding canvas roof, 365 GTS/4)"
 ],
 "engines": [
  "4,390 cc Tipo 251 60-degree V12, all-alloy, twin overhead camshafts per bank, two valves per cylinder, six Weber 40 DCN 20/21 twin-choke carburettors, dry sump, 9.3:1 compression, 352 bhp at 7,500 rpm and 318 lb-ft at 5,500 rpm (European specification, factory claim)",
  "4,390 cc Tipo 251 V12 to US specification: 8.8:1 compression, Weber 40 DCN 21A carburettors, revised exhaust with central silencer and electronic ignition; output not separately quoted by the sources consulted",
  "4,390 cc Tipo 251 V12 in Competizione tune: quoted between roughly 400 and 450 bhp depending on series, with the Series III cars stated at 450 bhp at 8,500 rpm"
 ],
 "productionTotal": null,
 "productionNotes": "The sources consulted agree on the berlinetta but not on the spider, and they do not agree on how the competition cars should be counted, so no single total is asserted. For the 365 GTB/4 berlinetta the figure of 1,284 road cars is stated independently by Wikipedia, Supercar Nostalgia, Petrolicious, classic.com and DK Engineering. Tom Yang's buyer's guide is internally inconsistent: its text says production 'ran for 1284 GTB's (plus 19 competition Berlinetta's)', while its specification table lists 1,383 for the 365 GTB/4; the 1,383 figure is not supported elsewhere and is likely a table error rather than a competing count. For the 365 GTS/4 spider Ferrari's own model page states 'a total of 122 spider examples were built in the chassis number range 14365 to 17073', and Wikipedia, classic.com, Petrolicious and Tom Yang also say 122. Against that, Supercar Nostalgia gives '121 production Spyders (seven of which were right-hand drive)' plus prototypes, RM Sotheby's Monterey 2026 catalogue describes chassis 14901 as 'the 37th of 121 Daytona Spiders produced', and Motor Sport's 2020 buying guide also says 121. The most likely explanation is whether a prototype is counted, but no source says so explicitly and the point is left unresolved. Right-hand-drive berlinettas are variously given as 149 (Supercar Nostalgia), 156 (Wikipedia) and 158 (RM Sotheby's London 2025, Motor Sport, DK Engineering). Competition cars are given as 15 official factory builds in three series of five (Wikipedia, Gooding Christie's, RM Sotheby's), 18 race-prepared berlinettas (Ferrari's own Competizione page), 19 (Tom Yang) or 24 completed including non-factory builds (RM Sotheby's). The widely repeated aggregate of 1,406 cars, which Wikipedia and classic.com both use, is therefore 1,284 plus 122 and does not include the competition cars; it is reproduced here as a commonly cited figure, not as a verified one. Around 400 berlinettas with the early Plexiglas nose is a Supercar Nostalgia figure not corroborated elsewhere.",
 "notableTrims": [
  {
   "name": "365 GTB/4 Plexiglas nose (1968-1971)",
   "note": "Early European cars carried four headlamps behind a full-width Perspex panel with a satin-finish aluminium nose band. Supercar Nostalgia puts the count at around 400, uncorroborated; pop-up lamps arrived gradually between chassis 13800 and 14200 to satisfy US lighting rules. Early cars command a premium in some markets."
  },
  {
   "name": "365 GTB/4 pop-up headlamp berlinetta (1971-1973)",
   "note": "The bulk of production. Retractable lamps, body-colour nose panel from late 1971 and, from chassis 15701, steel rather than aluminium doors. Most cars offered today are of this specification and it is the benchmark against which the market prices everything else."
  },
  {
   "name": "365 GTB/4 US specification",
   "note": "Lower 8.8:1 compression, different Weber jetting, central silencer, electronic ignition, side marker lamps and, on late cars, side-impact bars in steel doors. Heavier than European cars and often carrying miles-reading instruments and factory air conditioning; a well-kept US car is not a lesser car, but a European-specification engine is worth confirming rather than assuming."
  },
  {
   "name": "365 GTB/4 right-hand drive",
   "note": "Between 149 and 158 berlinettas depending on the source, most of them delivered to the UK. RM Sotheby's London 2025 sold RHD chassis 16331 for 320,000 pounds, materially below what comparable left-hand-drive cars make in dollars, which is the usual RHD discount rather than a comment on the cars."
  },
  {
   "name": "365 GTS/4 Daytona Spider",
   "note": "Shown at Frankfurt in 1969 and built from 1971 to 1973 with steel rather than glassfibre floors, twin 49-litre tanks and a folding canvas roof. Either 121 or 122 were built, seven of them right-hand drive. As of September 2026 classic.com's benchmark for the spider is roughly four times that of the berlinetta."
  },
  {
   "name": "365 GTB/4 Competizione (Series I, II and III)",
   "note": "Fifteen officially recognised factory competition cars in three series of five, built for Group 4 with lightened bodies and engines tuned to between roughly 400 and 450 bhp, plus further privateer and later conversions that push some counts to 24. Class winners at Le Mans in 1972, 1973 and 1974. Gooding Christie's sold Series III chassis 16407 for $8,145,000 at Pebble Beach in August 2025, a record for the model."
  },
  {
   "name": "Spider conversions",
   "note": "During the 1980s price surge a number of berlinettas were cut into spiders by outside shops. However well executed, they are not factory cars and the market prices them as berlinettas or a little above, never as GTS/4s."
  }
 ],
 "specs": {
  "layout": "Front-mounted longitudinal V12, rear-mounted five-speed transaxle, rear-wheel drive",
  "chassis": "Tipo 605 welded tubular steel frame with glassfibre inner tub and floors on the berlinetta, steel floors on the spider; steel body panels by Scaglietti with aluminium doors, bonnet and boot lid on earlier cars",
  "engine": "4,390 cc Tipo 251 60-degree V12, all-alloy, twin overhead camshafts per bank, two valves per cylinder, dry sump, six Weber 40 DCN twin-choke carburettors",
  "bore_stroke": "81 mm x 71 mm",
  "compression": "9.3:1 European; 8.8:1 US specification",
  "power": "352 bhp at 7,500 rpm claimed for European cars (some sources quote 347 hp SAE); US output not separately stated by the sources consulted",
  "torque": "318 lb-ft (431 Nm) at 5,500 rpm claimed; Supercars.net quotes 319 lb-ft at 5,000 rpm",
  "transmission": "Five-speed all-synchromesh manual transaxle with limited-slip differential; ratios 3.075, 2.120, 1.572, 1.250, 0.964; final drive 3.300:1",
  "suspension": "Independent front and rear by unequal-length wishbones, coil springs and telescopic dampers",
  "brakes": "Girling vacuum-assisted ventilated discs all round",
  "wheels_tyres": "15 x 7.5 in Cromodora cast alloy centre-lock five-spokes (Borrani wires optional), 215/70 VR15 tyres",
  "weight": "Sources disagree: 1,280 kg (Supercar Nostalgia, European car), 1,575 kg for US-specification cars (Supercar Nostalgia), 3,500 lb dry (Mel Nichols period test), 1,633 kg kerb (Supercars.net). Treat any single figure with caution",
  "top_speed": "174 mph (280 km/h) claimed; Autocar recorded 174 mph in period per Motor Sport, and Mel Nichols' test used the same figure",
  "acceleration": "0-60 mph in 5.4 s recorded by Autocar in period; 5.5 s in Mel Nichols' test; Ferrari and Supercar Nostalgia quote 0-62 mph in 5.7 s for the standard car",
  "wheelbase": "2,400 mm (94.5 in); tracks 56.6 in front, 56.1 in rear",
  "dimensions": "4,425 mm long, 1,760 mm wide, 1,245 mm high",
  "fuel_capacity": "128 litres in two 64-litre tanks (berlinetta); 98 litres in twin 49-litre tanks (spider)",
  "chassis_numbers": "Spider range 14365 to 17073 per Ferrari; berlinetta range not stated by Ferrari's model page and not asserted here"
 },
 "summary": "The Ferrari 365 GTB/4 (1968-1973) was the last of Maranello's front-engined two-seat V12 berlinettas in the line that ran back to the 166, and the car that closed that line at very high speed. Shown at the Paris Salon in October 1968 as the replacement for the 275 GTB/4, it took the Colombo V12 out to 4,390 cc with four overhead camshafts, six Weber carburettors and a claimed 352 bhp at 7,500 rpm, fed through a rear-mounted five-speed transaxle for balance. Pininfarina's Leonardo Fioravanti drew the sharp-edged body and Scaglietti built it in steel with aluminium opening panels. The press called it Daytona after Ferrari's 1-2-3 at the 1967 24 Hours; the factory never adopted the name officially. Autocar recorded 174 mph and 0-60 mph in 5.4 seconds, figures that stood as the magazine's fastest for years. 1,284 berlinettas are generally agreed; the GTS/4 spider is given as either 121 or 122, the right-hand-drive count as 149 to 158, and the competition cars as 15 to 24 depending on who is counting. Group 4 versions won their class at Le Mans three years running.",
 "history": "## Replacing the 275 GTB/4\n\nBy 1968 Ferrari's front-engined berlinetta was the 275 GTB/4, a 3.3-litre car of great charm that was being outrun by the mid-engined Lamborghini Miura. Ferrari's answer was not a mid-engined car but a larger and faster front-engined one, and the decision drew criticism at the time; Mel Nichols' period road test notes that the car was initially attacked for keeping the engine at the front. The 365 GTB/4 was shown at the Paris Salon in October 1968. Ferrari's own account describes it as the evolution of the 275 GTB/4, with the Colombo V12 enlarged from 3.3 to 4.4 litres, six Weber twin-choke 40 mm carburettors and the rear transaxle retained for weight distribution. At 280 km/h it was, in Ferrari's words, by some margin the fastest road Ferrari to that date.\n\n## Fioravanti, Pininfarina and Scaglietti\n\nThe body was drawn at Pininfarina by Leonardo Fioravanti, who would go on to the Dino, the 365 GT4 BB, the 308 and the 288 GTO and who has called the Daytona his favourite. Supercars.net quotes him saying he worked seven days without a break on the design. The shape abandoned the rounded forms of the 250 and 275 series for a sharp-edged wedge with a deep indentation line along the flanks and, on the first cars, four headlamps behind a full-width Perspex panel. Scaglietti built the bodies in Modena in steel over a Tipo 605 tubular frame, with aluminium doors, bonnet and boot lid and a glassfibre inner tub on the berlinetta. The name came from outside: the press attached 'Daytona' after the 1967 24 Hours 1-2-3, and Ferrari used the name sparingly and always noted it was unofficial.\n\n## Engine, Transaxle and the Numbers\n\nThe Tipo 251 engine displaced 4,390 cc from an 81 mm bore and 71 mm stroke, with twin camshafts per bank, two valves per cylinder, dry-sump lubrication and a 9.3:1 compression ratio. Ferrari claimed 352 bhp at 7,500 rpm and 318 lb-ft at 5,500 rpm. Drive went through a torque tube to a five-speed transaxle with limited-slip differential. Motor Sport records that Autocar timed 0-60 mph in 5.4 seconds and reached 174 mph, figures that remained the magazine's road-test record for some time; Nichols' own test returned 5.5 seconds to 60 and a little over 12 seconds to 100 mph. The car was heavy and physical. Petrolicious describes steering that is heavy at low speeds and a rear end that breaks away suddenly on its narrow tyres in the wet, and Nichols accepted the effort at the wheel and pedals as part of the car.\n\n## Spider, US Rules and Running Changes\n\nThe 365 GTS/4 spider was shown at Frankfurt in 1969, identical from the waist down but with steel floors, smaller twin tanks and a folding roof; Ferrari says it accounted for about ten per cent of sales. United States lighting regulations killed the Perspex nose, and pop-up headlamps were phased in between chassis 13800 and 14200 during 1971, with the satin aluminium nose band giving way to body colour late that year. US cars ran 8.8:1 compression, a central silencer and electronic ignition, and from chassis 15701 the aluminium doors became steel so that side-impact bars could be fitted. Production ended in late 1973, by which time the 365 GT4 BB had taken over as the flagship.\n\n## Competition and the Cannonball\n\nFerrari built Group 4 versions in three series of five between 1971 and 1973, with lightened steel or aluminium bodies and engines tuned to between roughly 400 and 450 bhp; Ferrari's own page counts 18 race-prepared berlinettas run by NART, Pozzi, Filipinetti, Swaters and Hoare. They took the GT class at Le Mans in 1972, 1973 and 1974, filling the first five class places in 1972, and a Daytona finished second overall and first in class at the 1979 Daytona 24 Hours, six years after production ended. On the road, Dan Gurney and Brock Yates drove chassis 14271 across America in the first Cannonball Baker run in November 1971, covering 2,876 miles in 35 hours 54 minutes at an average of 80.1 mph; Gurney later said they never exceeded 175 mph.",
 "marketNotes": "As of September 2026 classic.com's market benchmark for the 365 GTB/4 berlinetta stands at $641,683 on a downward trend, with an average recorded sale of $647,121 and a low of $309,350 for a 1973 car in September 2025. Recent tracked results include $865,000 for a 1971 car in August 2026, $792,000 for a 1972 car at Mecum in January 2026, $610,000 at Gooding Christie's in August 2026 and $500,000 for a 1973 car in January 2026, with five cars then listed between 640,000 euros and $799,890. The GTS/4 spider sits in a different bracket: as of September 2026 classic.com's benchmark is $2,699,633, also trending down, with a low of $2,200,000 in August 2025, and RM Sotheby's sold chassis 14901 for $2,315,000 including premium at Monterey in August 2026. Auction results for berlinettas fetched directly for this page include 545,000 euros for Classiche-certified chassis 16351 at RM Sotheby's Monaco in 2026 and 320,000 pounds for right-hand-drive chassis 16331 at RM Sotheby's London in 2025, both stated as sold prices. The Competizione market is separate again: Gooding Christie's sold Series III chassis 16407 for $8,145,000 at Pebble Beach in August 2025, a record for the model. Premiums attach to Plexiglas-nose cars in some markets, to documented low mileage, to original colours and to Ferrari Classiche certification; right-hand drive, colour changes, US specification and outside spider conversions sit below benchmark.",
 "whatToLookFor": "Documentation and originality carry the price. Ferrari Classiche certification confirms matching engine, transaxle and body numbers, and RM Sotheby's catalogue entries lean on it heavily; the Monaco 2026 car had been certified in April that year. Establish the original colour, since many cars have been changed, and note that a car titled as 1973 may have been built in 1972. Confirm which specification the car actually is: Perspex nose or pop-up lamps, European or US compression and exhaust, aluminium or steel doors, kilometre or mile instruments. Petrolicious warns against paying a premium for a 'rare Tipo A' claim, which simply means European pop-up cars, and against any dealer suggestion that Scaglietti built spiders beyond the factory run. Corrosion is the structural question. The steel is prone to rust around the rear wheel arches, the area between the quarter-light vent and the arch, lower door skins on steel-door US cars and, in bad cases, the chassis outriggers under the floor. Tom Yang's guide recommends demanding answers for any gap in the last ten to fifteen years of history, a compression test before purchase and a check that second-gear synchromesh works without noise. A complete original tool kit is worth a five-figure sum on its own. Take an extended drive from cold, because the engine takes a long time to come up to temperature and cold-stuck piston rings on a car that has sat will show themselves. Outside spider conversions, however well done, are berlinettas in the eyes of the market.",
 "commonProblems": "Timing chains are the well-known weak point: incorrect tensioning leads to premature wear or jumped teeth, while over-tightening damages the front camshaft bearing surfaces in the alloy heads, and access is poor on air-conditioned cars. Second-gear synchromesh suffers from poor technique or a mis-adjusted clutch, with a synchro overhaul quoted by Tom Yang at around $3,000 to $3,500 in 2005 money and cracked rear transaxle casings reported. The six Webers warp with age and admit air at the inlet tracts, and degraded rubber fuel hose is a fire risk on any car with a long gap in its history. The rear exhaust resonator rusts through from the bottom within a few years and a stainless replacement costs about twice the standard part. Brakes fade badly in hard or track use, the factory air conditioning was inadequate when new, and the steering is heavy enough at parking speeds that electric assistance is a common modification. Rust affects rear arches, door skins, the quarter-vent area and, in neglected cars, chassis outriggers, and both guides consulted assume that most cars have had metal repair at some point. A routine engine overhaul was quoted at $25,000 to $30,000 in 2005 and Petrolicious puts a rebuild at up to $50,000. Cars left unused in damp storage develop all of the above at once.",
 "valueTrajectory": "The Daytona listed at $19,500 in 1968. Mel Nichols' period test records used values of around 5,000 pounds in 1975 and 26,000 pounds by 1980, and the 1980s boom drove the conversions of berlinettas into spiders that still circulate today. The market then fell with everything else and rebuilt slowly through the 1990s and 2000s. The 2013-2016 run took good berlinettas to $825,000, the price Gooding realised for a 12,000-mile 1972 car at Pebble Beach in 2016, and Motor Sport's 2020 guide put UK values at 500,000 to 700,000 pounds. As of September 2026 classic.com's berlinetta benchmark of $641,683 is trending down, with recent sales spread from $500,000 to $865,000, which reads as a market that has softened from its peak and is now stratifying by originality rather than rising across the board. Spiders have held better, with a benchmark of $2,699,633 as of September 2026, and the Competizione record of $8,145,000 in August 2025 shows the racing cars have decoupled from the road cars entirely.",
 "overallConfidence": "high",
 "sources": [
  {
   "ref": "ferrari-365gtb4",
   "title": "Ferrari 365 GTB4 (1968)",
   "url": "https://www.ferrari.com/en-EN/auto/365-gtb4",
   "publisher": "Ferrari S.p.A.",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Ferrari's model page: describes the car as the evolution of the 275 GTB4, 4.4-litre V12 with six Weber twin-choke 40 mm carburettors, rear transaxle for weight distribution, and confirms 'Daytona' is an unofficial name. Page carries no production figure or specification table."
  },
  {
   "ref": "ferrari-365gts4",
   "title": "Ferrari 365 GTS4 (1969)",
   "url": "https://www.ferrari.com/en-EN/auto/365-gts4",
   "publisher": "Ferrari S.p.A.",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Ferrari's spider page: announced at Frankfurt 1969, 'a total of 122 spider examples were built in the chassis number range 14365 to 17073', about ten per cent of 365 GTB4 sales, type 251 engine 4390cc 81 x 71 mm, Weber 40 DCN20/21, 352bhp, dry sump, electronic ignition on US cars, 2400 mm wheelbase on Tipo 605 chassis, later berlinetta-to-spider conversions."
  },
  {
   "ref": "ferrari-competizione",
   "title": "Ferrari 365 GTB4 Competizione (1971)",
   "url": "https://www.ferrari.com/en-EN/auto/365-gtb4-competizione",
   "publisher": "Ferrari S.p.A.",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "States '18 berlinetta versions were race-prepared and used by the Chinetti-NART, Pozzi, Filipinetti, Swaters, and Hoare teams'; aluminium coachwork on some, lightened steel on others; tuned engines and track suspension. Used for the competition-car count conflict."
  },
  {
   "ref": "ferrari-magazine-55",
   "title": "Remembering the 365 GTB4 Daytona",
   "url": "https://www.ferrari.com/en-EN/magazine/articles/remembering-the-365-gtb4-daytona-55-years",
   "publisher": "Ferrari S.p.A.",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Ferrari editorial: October Paris Motor Show launch, Fioravanti as Pininfarina chief designer and his statement that the Daytona is his favourite, Colombo V12 enlarged from 3.3 to 4.4 litres, 352 hp, 280 km/h 'by some margin the fastest road Ferrari up to that time', Le Mans class wins 1972-1974, 1979 Daytona second overall."
  },
  {
   "ref": "wikipedia-daytona",
   "title": "Ferrari Daytona",
   "url": "https://en.wikipedia.org/wiki/Ferrari_Daytona",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Aggregated reference: 1,284 GTB/4 and 122 GTS/4, 1,406 total including 156 UK RHD coupes, 7 RHD spiders and 15 competition cars; 4,390 cc, 81 x 71 mm, 9.3:1 (8.8:1 US), 352 PS at 7,500 rpm, 431 Nm at 5,500 rpm; 280 km/h, 0-60 in 5.4 s; name from the 1967 Daytona 1-2-3; Le Mans results; Cannonball 1971 figures."
  },
  {
   "ref": "supercarnostalgia-daytona",
   "title": "Ferrari 365 GTB/4 & 365 GTS/4 Daytona Guide",
   "url": "https://supercarnostalgia.com/blog/ferrari-365-gtb4-and-365-gts4",
   "publisher": "Supercar Nostalgia",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Specialist reference: 1,284 production GTB/4s (149 RHD), 121 production spiders (7 RHD), five prototypes, around 400 Plexiglas-nose cars, Tipo 605 chassis with glassfibre tub, 1,280 kg standard and 1,575 kg US, 0-62 in 5.7 s, 174 mph, pop-up lamps phased in between chassis 13800 and 14200, steel doors from chassis 15701, 128-litre and 98-litre tanks, Cannonball chassis 14271, alloy-bodied 12547 and 12653."
  },
  {
   "ref": "supercars-net-daytona",
   "title": "Ferrari 365 GTB/4 Daytona - The Ultimate Guide",
   "url": "https://www.supercars.net/blog/1968%E2%86%921973-ferrari-365-gtb4-daytona/",
   "publisher": "Supercars.net",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Specification sheet: 1,284 built, 1968 Paris debut, 353 bhp at 7,500 rpm and 319 lb-ft at 5,000 rpm, gear ratios 3.075/2.120/1.572/1.250/0.964 with 3.300 final drive, 1,633 kg kerb weight, 4,425 x 1,760 x 1,245 mm, $19,500 base price, Fioravanti quote about seven days without a break, ~120 spiders."
  },
  {
   "ref": "classic-gtb4",
   "title": "Ferrari 365 GTB/4 Daytona Market",
   "url": "https://www.classic.com/m/ferrari/daytona/365-gtb4/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Market data as of September 2026: benchmark $641,683 trending down, average sale $647,121, low $309,350 (September 2025, 1973 car); recent results $865,000 (August 2026), $610,000 (Gooding Christie's, August 2026), $792,000 (Mecum, January 2026), $500,000 (January 2026); five listings from 640,000 euros to $799,890. Restates 1,284 of 1,406 total."
  },
  {
   "ref": "classic-gts4",
   "title": "Ferrari 365 GTS/4 Daytona Market",
   "url": "https://www.classic.com/m/ferrari/daytona/365-gts4/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Spider market data as of September 2026: benchmark $2,699,633 trending down, average $2,681,696, low $2,200,000 (August 2025); recent results $3,495,000 fixed-price listing (July 2026), $2,530,000 (Mecum, May 2026), $2,315,000 (RM Sotheby's Monterey, August 2026). States 122 factory spiders of approximately 1,406 total."
  },
  {
   "ref": "rm-mc26-16351",
   "title": "1972 Ferrari 365 GTB/4 Daytona Berlinetta by Scaglietti, The Monaco Auction 2026",
   "url": "https://rmsothebys.com/auctions/mc26/lots/r0021-1972-ferrari-365-gtb4-daytona-berlinetta-by-scaglietti",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold 545,000 euros, Monaco 2026. Chassis 16351, matching-numbers engine and gearbox, Ferrari Classiche certified April 2026, originally Marrone over beige, now red, Italian delivery via Crepaldi, titled as 1973. Catalogue credits Fioravanti at Pininfarina with execution by Scaglietti."
  },
  {
   "ref": "rm-mo26-spider",
   "title": "1972 Ferrari 365 GTS/4 Daytona Spider by Scaglietti, The Monterey Auction 2026",
   "url": "https://rmsothebys.com/auctions/mo26/lots/r0151-1972-ferrari-365-gts4-daytona-spider-by-scaglietti/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold $2,315,000, Monterey August 2026. Chassis 14901 described as 'the 37th of 121 Daytona Spiders produced', Nocciola Metallizzato over Nero, US instruments, factory air conditioning; catalogue gives Frankfurt 1969 debut and 352 hp. Used for the 121 versus 122 spider conflict."
  },
  {
   "ref": "rm-lf25-16331",
   "title": "1972 Ferrari 365 GTB/4 Daytona Berlinetta by Scaglietti, London 2025",
   "url": "https://rmsothebys.com/auctions/lf25/lots/r0005-1972-ferrari-365-gtb4-daytona-berlinetta-by-scaglietti/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold 320,000 pounds, London 2025. Right-hand-drive chassis 16331, 'one of only 158 Daytonas produced in right-hand drive', matching numbers confirmed by Ferrari, first owner Viscount Downe, December 1972 delivery but titled as 1973. Used for the RHD count conflict."
  },
  {
   "ref": "rm-da25-competizione",
   "title": "1973 Ferrari 365 GTB/4 Daytona Competizione, Sealed - The Daytona",
   "url": "https://rmsothebys.com/auctions/da25/lots/r0003-1973-ferrari-365-gtb4-daytona-competizione/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Chassis 16343, first of five Series III cars. States 'just 24 Competizione versions were completed' of which 'a mere 15 were officially recognized factory builds' in three series of five; Series III 450 hp at 8,500 rpm; race record including 1975 Daytona class win. No result published. Used for the competition-car count conflict."
  },
  {
   "ref": "gooding-press-competizione",
   "title": "Gooding Christie's Presents ex-Le Mans N.A.R.T. 1973 Ferrari 365 GTB/4 Daytona Competizione for Pebble Beach",
   "url": "https://www.goodingco.com/press/article/gooding-christies-presents-ex-le-mans-n-a-r-t-1973-ferrari-365-gtb-4-daytona/",
   "publisher": "Gooding Christie's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Chassis 16407, 'one of 15 official competition Daytonas in total, and one of just five Series III examples built for the 1973 season', estimate $8,000,000 to $10,000,000, delivered to NART for Le Mans 1973, 1979 Daytona 2nd overall and 1st in class."
  },
  {
   "ref": "gooding-press-results",
   "title": "Gooding Christie's Achieves New Auction Record with $25.3 Million Ferrari 250 GT California Spider Competizione",
   "url": "https://www.goodingco.com/press/article/gooding-christies-achieves-new-auction-record-with-usd25-3-million-ferrari/",
   "publisher": "Gooding Christie's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Pebble Beach August 2025 results: Lot 38, 1973 Ferrari 365 GTB/4 Daytona Competizione Series III sold for $8,145,000, described as a new world auction record for the 365 GTB/4 model."
  },
  {
   "ref": "gooding-pb16-15273",
   "title": "1972 Ferrari 365 GTB/4 Daytona, Pebble Beach Auctions 2016",
   "url": "https://www.goodingco.com/lot/1972-ferrari-365-gtb4-daytona-10/",
   "publisher": "Gooding & Company",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold $825,000 at Pebble Beach 2016 (estimate $800,000 to $1,000,000). Chassis 15273, 12,000 miles, 41 years single ownership, original books and tools. Used as a value point for the mid-2010s peak."
  },
  {
   "ref": "motorsport-guide-2020",
   "title": "Road car buying guide: Ferrari 'Daytona', November 2020",
   "url": "https://www.motorsportmagazine.com/archive/article/november-2020/138/road-car-buying-guide-ferrari-daytona/",
   "publisher": "Motor Sport Magazine",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Buying guide: approximately 1,300 standard cars, 158 RHD, 121 spiders, 15 Competizione plus one aluminium NART car; $19,500 launch price; 500,000 to 700,000 pounds as of September 2020; Autocar 0-60 in 5.4 s and 174 mph as a long-standing magazine record; pop-up lamps from 1971; aluminium doors, bonnet and boot lid."
  },
  {
   "ref": "drive-nichols-test",
   "title": "1973 Ferrari 365 GTB/4 Daytona - road test",
   "url": "https://drive-my.com/1973-ferrari-365-gtb-4-daytona-road-test/",
   "publisher": "Drive (reprint of Mel Nichols period road test)",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Period road test by Mel Nichols: 0-60 in 5.5 s, 0-100 in a little over 12 s, 174 mph, 352 DIN bhp at 7,500 rpm, 7,700 rpm redline, 318 lb-ft at 5,500 rpm, gear ratios and 3.3:1 final drive, 3,500 lb dry, 94.5 in wheelbase, tracks 56.6/56.1 in, used values around 5,000 pounds in 1975 and 26,000 pounds in 1980, initial criticism for keeping the front-engine layout."
  },
  {
   "ref": "petrolicious-guide",
   "title": "Want, Buy and Drive the Ferrari 365 GTB/4 Daytona",
   "url": "https://petrolicious.com/blogs/articles/want-buy-and-drive-the-ferrari-365-gtb-4-daytona",
   "publisher": "Petrolicious",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Ownership guide: 1,284 berlinettas and 122 spiders; engine rebuilds up to $50,000; rust around rear arches; tool kit worth up to $10,000; slow warm-up; 'Tipo A' claim warning; no evidence Scaglietti built spiders beyond the factory run; glassfibre floors on berlinettas, steel on spiders; brake fade; weak air conditioning; electric steering assistance as a common upgrade; wet-weather breakaway on narrow tyres."
  },
  {
   "ref": "tomyang-guide",
   "title": "365 GTB/4 Daytona Buyer's Guide",
   "url": "https://www.tomyang.net/cars/365GTB4Guide.pdf",
   "publisher": "Tom Yang",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Independent specialist guide (2005 costs): text gives 1,284 GTB/4s plus 19 competition berlinettas and 122 spiders, while its specification table lists 1,383 GTB/4s; timing chain tensioning damage; second-gear synchro and cracked transaxle casings, synchro overhaul $3,000-3,500; warped carburettors; fuel hose degradation; resonator rusting through; rust at lower door skins, quarter-vent area and outriggers; engine overhaul $25,000-30,000; spider conversions carry no premium; pre-purchase checklist."
  },
  {
   "ref": "dkeng-1973",
   "title": "Vehicle Archive - Ferrari 365 GTB/4 'Daytona' (1973)",
   "url": "https://www.dkeng.co.uk/Vehicle_Archive/532/ferrari_365_gtb_4_daytona.html",
   "publisher": "DK Engineering",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Specialist archive listing: 1,284 GTB/4 built, '158 of which were right-hand drive and came to the UK', October 1968 Paris launch, retractable headlamps from early 1971, production ending late 1973, 352 bhp at 7,500 rpm, colour change from Blu Dino to Giallo on this car."
  }
 ],
 "claims": [
  {
   "section": "history",
   "claimText": "The 365 GTB/4 was introduced at the Paris Salon in October 1968 as the replacement for the 275 GTB/4, with the Colombo V12 enlarged from 3.3 to 4.4 litres, and Ferrari describes it as by some margin the fastest road Ferrari to that date.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["ferrari-365gtb4", "ferrari-magazine-55", "wikipedia-daytona", "dkeng-1973"]
  },
  {
   "section": "history",
   "claimText": "The body was designed by Leonardo Fioravanti at Pininfarina and built by Scaglietti, and the 'Daytona' name was applied by the press after Ferrari's 1-2-3 finish at the February 1967 24 Hours of Daytona; Ferrari has always treated the name as unofficial.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["ferrari-magazine-55", "ferrari-365gtb4", "wikipedia-daytona", "rm-mc26-16351"]
  },
  {
   "section": "specs",
   "claimText": "The Tipo 251 engine is a 4,390 cc 60-degree all-alloy V12 with an 81 mm bore and 71 mm stroke, twin overhead camshafts per bank, two valves per cylinder, dry-sump lubrication, six Weber 40 DCN twin-choke carburettors and a 9.3:1 compression ratio, with a factory claim of 352 bhp at 7,500 rpm and 318 lb-ft at 5,500 rpm.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["ferrari-365gts4", "wikipedia-daytona", "supercarnostalgia-daytona", "drive-nichols-test"]
  },
  {
   "section": "specs",
   "claimText": "The car uses a Tipo 605 tubular steel chassis on a 2,400 mm wheelbase with a rear-mounted five-speed transaxle, independent wishbone suspension all round and Girling ventilated disc brakes; the berlinetta has a glassfibre inner tub and floors while the spider uses steel floors.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["ferrari-365gts4", "supercarnostalgia-daytona", "petrolicious-guide", "gooding-pb16-15273"]
  },
  {
   "section": "specs",
   "claimText": "Period testing recorded 174 mph and 0-60 mph in 5.4 seconds (Autocar) or 5.5 seconds (Mel Nichols), against a factory 0-62 mph figure of 5.7 seconds; the Autocar figures stood as that magazine's road-test record for some time.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["motorsport-guide-2020", "drive-nichols-test", "supercarnostalgia-daytona", "wikipedia-daytona"]
  },
  {
   "section": "specs",
   "claimText": "Published weights for the Daytona vary widely, from 1,280 kg to 1,633 kg, and no single figure can be treated as authoritative.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["supercarnostalgia-daytona", "supercars-net-daytona", "drive-nichols-test"],
   "conflictNote": "Supercar Nostalgia gives 1,280 kg for the standard car and 1,575 kg for US cars. Mel Nichols' period test gives 3,500 lb (about 1,588 kg) dry. Supercars.net gives 1,633 kg kerb. The sources do not state a common basis (dry versus kerb, European versus US) and the spread is not resolved by any source consulted."
  },
  {
   "section": "production",
   "claimText": "1,284 365 GTB/4 berlinettas were built between late 1968 and late 1973, a figure stated independently by five of the sources consulted; Tom Yang's guide agrees with 1,284 in its text (plus 19 competition berlinettas) but its specification table lists 1,383, a figure not supported elsewhere.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["wikipedia-daytona", "supercarnostalgia-daytona", "petrolicious-guide", "classic-gtb4", "dkeng-1973", "tomyang-guide"]
  },
  {
   "section": "production",
   "claimText": "The number of factory 365 GTS/4 spiders is stated as either 122 or 121 depending on the source, so no combined production total is asserted for the model.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["ferrari-365gts4", "wikipedia-daytona", "classic-gts4", "petrolicious-guide", "supercarnostalgia-daytona", "rm-mo26-spider", "motorsport-guide-2020"],
   "conflictNote": "Ferrari's own model page states 122 spiders in the chassis range 14365 to 17073, and Wikipedia, classic.com, Petrolicious and Tom Yang repeat 122. Supercar Nostalgia states 121 production spiders plus prototypes, RM Sotheby's Monterey 2026 catalogue describes chassis 14901 as the 37th of 121, and Motor Sport's 2020 guide also says 121. The one-car difference is probably a prototype counted or not counted, but no source says so and it is not resolved here; productionTotal is left null."
  },
  {
   "section": "production",
   "claimText": "The number of right-hand-drive berlinettas is given as 149, 156 or 158 depending on the source.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["supercarnostalgia-daytona", "wikipedia-daytona", "rm-lf25-16331", "motorsport-guide-2020", "dkeng-1973"],
   "conflictNote": "Supercar Nostalgia states 149 RHD berlinettas. Wikipedia states 156 UK right-hand-drive coupes. RM Sotheby's London 2025 catalogue, Motor Sport and DK Engineering all state 158. Not resolved by any source consulted."
  },
  {
   "section": "production",
   "claimText": "Ferrari built competition Daytonas in three series of five cars between 1971 and 1973, but the total number of competition cars is given as 15, 18, 19 or 24 depending on the source and on whether non-factory builds are included.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["ferrari-competizione", "rm-da25-competizione", "gooding-press-competizione", "wikipedia-daytona", "tomyang-guide", "motorsport-guide-2020"],
   "conflictNote": "Gooding Christie's, Wikipedia and Motor Sport state 15 official competition cars. RM Sotheby's states 24 completed of which 15 were officially recognised factory builds in three series of five. Ferrari's own Competizione page states 18 berlinettas were race-prepared. Tom Yang's guide states 19 competition variants. Not resolved by any source consulted."
  },
  {
   "section": "history",
   "claimText": "Pop-up headlamps replaced the original Plexiglas nose to meet US lighting regulations, phased in between chassis 13800 and 14200 during 1971, and from chassis 15701 the aluminium doors were replaced by steel so that side-impact bars could be fitted; US cars ran 8.8:1 compression with a central silencer and electronic ignition.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["supercarnostalgia-daytona", "tomyang-guide", "wikipedia-daytona", "ferrari-365gts4"]
  },
  {
   "section": "production",
   "claimText": "Around 400 berlinettas were built with the early Plexiglas nose.",
   "confidence": "low",
   "status": "unverified",
   "sourceRefs": ["supercarnostalgia-daytona"]
  },
  {
   "section": "history",
   "claimText": "Competition Daytonas won the GT class at Le Mans in 1972, 1973 and 1974, taking the first five class places in 1972, and a Daytona finished second overall and first in class at the 1979 Daytona 24 Hours; Series III cars were quoted at 450 bhp at 8,500 rpm.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["ferrari-magazine-55", "wikipedia-daytona", "rm-da25-competizione", "gooding-press-competizione"]
  },
  {
   "section": "history",
   "claimText": "Dan Gurney and Brock Yates won the first Cannonball Baker run in 1971 in Daytona chassis 14271, covering 2,876 miles in 35 hours 54 minutes at an average of 80.1 mph.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["wikipedia-daytona", "supercarnostalgia-daytona"]
  },
  {
   "section": "history",
   "claimText": "During the 1980s a number of berlinettas were converted to spider form by outside coachbuilders; these are not factory cars, and specialist guidance is that they carry no premium over berlinettas and that there is no evidence Scaglietti built spiders beyond the factory run.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["tomyang-guide", "petrolicious-guide", "ferrari-365gts4"]
  },
  {
   "section": "problems",
   "claimText": "Timing chain tensioning, second-gear synchromesh wear, warped Weber carburettors, degraded fuel hose and a rear resonator that rusts through are the recurring mechanical faults, with a synchro overhaul quoted at $3,000 to $3,500 and an engine overhaul at $25,000 to $30,000 in 2005 and up to $50,000 more recently.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["tomyang-guide", "petrolicious-guide"]
  },
  {
   "section": "problems",
   "claimText": "Corrosion concentrates in the rear wheel arches, the panel between the quarter-light vent and the arch, the lower door skins of steel-door cars and, in neglected examples, the chassis outriggers, and most cars should be assumed to have had metal repair.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["tomyang-guide", "petrolicious-guide"]
  },
  {
   "section": "problems",
   "claimText": "The Daytona is physically demanding to drive, with slow heavy steering, brakes that fade in hard use and a factory air-conditioning system that was inadequate when new, and its engine takes a long time to reach working temperature.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["petrolicious-guide", "drive-nichols-test"]
  },
  {
   "section": "market",
   "claimText": "As of September 2026 classic.com records a 365 GTB/4 berlinetta benchmark of $641,683 trending down with an average sale of $647,121, and a 365 GTS/4 spider benchmark of $2,699,633, also trending down.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["classic-gtb4", "classic-gts4"]
  },
  {
   "section": "market",
   "claimText": "Auction results fetched for this page include 545,000 euros for Classiche-certified chassis 16351 at RM Sotheby's Monaco 2026, 320,000 pounds for right-hand-drive chassis 16331 at RM Sotheby's London 2025, $2,315,000 for spider chassis 14901 at RM Sotheby's Monterey in August 2026 and $8,145,000 for Competizione chassis 16407 at Gooding Christie's Pebble Beach in August 2025, a record for the model.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["rm-mc26-16351", "rm-lf25-16331", "rm-mo26-spider", "gooding-press-results", "gooding-press-competizione"]
  },
  {
   "section": "market",
   "claimText": "The Daytona listed at $19,500 in 1968, traded at around 5,000 pounds in 1975 and 26,000 pounds in 1980, made $825,000 at Gooding Pebble Beach in 2016, and was guided at 500,000 to 700,000 pounds in the UK as of September 2020.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["supercars-net-daytona", "motorsport-guide-2020", "drive-nichols-test", "gooding-pb16-15273"]
  }
 ]
};
