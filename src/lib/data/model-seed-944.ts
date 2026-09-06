/**
 * Researched model draft - Porsche 944 (1982-1991).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seed944 = {
 "slug": "porsche/944",
 "make": "Porsche",
 "model": "944",
 "generation": "944, S, S2 (naturally aspirated)",
 "generationCode": "944 (engines M44/40, M44/12, M44/41)",
 "trim": null,
 "yearStart": 1982,
 "yearEnd": 1991,
 "bodyStyles": [
  "2-door, 2+2 fixed-roof coupe with large glass hatchback; optional lift-out roof panel",
  "2-door, 2+2 Cabriolet (944 S2 only, from 1989, converted from coupe shells by American Sunroof Corporation)"
 ],
 "engines": [
  "2,479 cc M44/40 all-alloy single-overhead-cam 8-valve inline-four, 100 mm x 78.9 mm, twin counter-rotating balance shafts, Bosch DME, 163 PS (120 kW) at 5,800 rpm European; 143 hp (107 kW) US 1982-1985 per Wikipedia and Car and Driver, 150 hp per PCA and Pelican Parts; 147 hp US 1985-1987; 160 PS from the 1988 model year with compression raised from 9.5:1 to 10.2:1",
  "2,681 cc M44/12 single-overhead-cam 8-valve inline-four (1989 model year 944 only), 104 mm x 78.9 mm, 165 PS (121 kW); 163 hp per Car and Driver for the US",
  "2,479 cc M44/40 twin-overhead-cam 16-valve inline-four (944 S, 1987-1988), hydraulic lash adjusters, knock sensors, self-adjusting timing belt tensioner, 190 PS (140 kW, 187-188 hp SAE), 170 lb-ft (230 Nm), 6,800 rpm redline",
  "2,990 cc M44/41 twin-overhead-cam 16-valve inline-four (944 S2, 1989-1991), 104 mm x 88 mm, 10.9:1, 211 PS (155 kW, 208 hp) at 5,800 rpm, 280 Nm quoted as 207 lb-ft at 4,100 rpm by Excellence; 225 PS in the 15-car UK-only S2 SE"
 ],
 "productionTotal": null,
 "productionNotes": "No two independent sources fetched for this page agree on the naturally aspirated total, so none is printed. The base 944 figure is consistent: Wikipedia and Stuttcars both give 113,070 coupes for 1982-1989, with Wikipedia adding 56,921 exported to the United States. The 944 S is also consistent at 12,936 (8,815 to the US) in both. The S2 is where the sources part company. Wikipedia and Stuttcars give around 14,071 S2 coupes (3,650 to the US) and 5,656 S2 Cabriolets (2,402 to the US). Elferspot's S2 buyer's guide states 9,352 coupes and 6,980 Cabriolets, and Porsche's own 2026 transaxle-history article independently states that 'a total of 6,980 units' of the 944 Cabriolet were produced through 1991, which supports the Elferspot figure for the open car and, by implication, contradicts Wikipedia's 5,656. RM Sotheby's catalogue for a 1991 S2 coupe adds that it was 'one of 510 examples produced for the final year', a single-source figure not repeated elsewhere. Summing the Wikipedia and Stuttcars variant counts gives 145,733 naturally aspirated cars; summing the Elferspot S2 figures with the shared 944 and 944 S counts gives 142,338. The whole-family total is disputed too: Porsche's press kit and newsroom say 163,302 cars including Turbos, Wikipedia says 163,192, Stuttcars' variant table sums to 173,238 and Ate Up With Motor says approximately 157,000. Car and Driver's 2024 guide gives 88,765 US sales through 1991 for the whole family. Porsche also records 30,000 orders in the first year and that the 944 was around 51 per cent of the company's output in 1983; Ate Up With Motor gives 26,539 sales in 1984, 60 per cent of them American. Cars were assembled at the former NSU plant at Neckarsulm, with engines built by Porsche at Zuffenhausen and trucked north.",
 "notableTrims": [
  {
   "name": "944 2.5 (1982-1985, early dashboard)",
   "note": "The original 163 PS European and 143 hp US car with the 924-derived instrument binnacle and fender-mounted aerial. Simplest of the line, and the interior parts are the hardest to find; Stuttcars notes pre-1985.5 trim is unique to these cars."
  },
  {
   "name": "944 2.5 'oval dash' (1985.5-1988)",
   "note": "Mid-1985 update with the new dashboard and door panels, 115-amp alternator, larger fuel tank, flush windscreen and phone-dial wheels. Car and Driver's guide singles out these cars for improved interiors and suspension; from 1988 compression rose to 10.2:1 for 160 PS."
  },
  {
   "name": "944 Celebration (1988 model year)",
   "note": "Special edition marking the 100,000th 944, recorded by Porsche Club GB's guide. classic.com tracks it as a separate submarket with a benchmark of $10,363 as of September 2026, below the standard car."
  },
  {
   "name": "944 2.7 (1989 model year)",
   "note": "One-year 8-valve car with the 2,681 cc M44/12 engine, 165 PS and, per PCA, 0-60 mph in 7.5 seconds. The last of the 8-valve cars and, with the 1988 head, the most flexible of them; scarce because it was sold for a single year."
  },
  {
   "name": "944 S (1987-1988)",
   "note": "First twin-cam, 16-valve Porsche four; 190 PS, 6,800 rpm redline, 12,936 built. Standard 944 body with '16 Ventiler' badging on the side mouldings. Road & Track's 7.2-second 0-60 mph time is quoted by PCA; the cam-chain tensioner between the camshafts is its particular liability."
  },
  {
   "name": "944 S2 coupe (1989-1991)",
   "note": "Three-litre 16-valve, 211 PS, Turbo bodywork, brakes and suspension without the turbocharger. Porsche Club GB calls it 'arguably the best all round 944'; classic.com's benchmark of $25,015 as of September 2026 is the highest of the naturally aspirated cars. Production is disputed at 14,071 or 9,352."
  },
  {
   "name": "944 S2 Cabriolet (1989-1991)",
   "note": "Coupe shells converted by American Sunroof Corporation; 6,980 built per Porsche and Elferspot, 5,656 per Wikipedia. Trades below the coupe: classic.com's benchmark is $18,866 as of September 2026, on a downward trend."
  },
  {
   "name": "944 S2 SE (UK, 1991-1992)",
   "note": "Fifteen cars for the UK market with 225 PS, adjustable Koni suspension, sports steering wheel and sports suspension, described by Porsche Club GB as the run-out model. Rare enough that no market data was fetched for it."
  }
 ],
 "specs": {
  "layout": "Front-mounted longitudinal engine, rear-mounted transaxle joined by a torque tube; rear-wheel drive; Porsche quotes a driveshaft of 20 to 25 mm diameter and about 1.50 m length",
  "chassis": "Steel unitary body on the 924 platform, galvanised; 2,400 mm wheelbase; PCA describes a 50/50 front/rear weight balance shared with the Turbo, S2 and 968",
  "engine": "2,479 cc M44/40 all-alloy inline-four derived from half of the 928 V8, with twin counter-rotating balance shafts under a Mitsubishi patent licence; 2,681 cc M44/12 for 1989; 2,479 cc 16-valve for the 944 S; 2,990 cc M44/41 16-valve for the S2",
  "valvetrain": "Single overhead camshaft, two valves per cylinder (944); twin overhead camshafts, four valves per cylinder with hydraulic lash adjusters and a chain between the camshafts (944 S and S2)",
  "bore_stroke": "100 x 78.9 mm (2.5); 104 x 78.9 mm (2.7); 104 x 88 mm (3.0)",
  "compression": "9.5:1 to 1987, 10.2:1 from 1988 (8-valve); 10.9:1 (944 S and S2)",
  "power": "163 PS at 5,800 rpm European 2.5 (143 hp US at launch, 147 hp 1985-1987, 160 PS from 1988); 165 PS 2.7; 190 PS 944 S; 211 PS (208 hp) at 5,800 rpm S2 - all manufacturer ratings; see claims for the disputed US launch figure",
  "torque": "142 lb-ft base 2.5 per PCA, 155 lb-ft from 1988, 166 lb-ft for the 2.7; 170 lb-ft (230 Nm) 944 S; 280 Nm (207 lb-ft at 4,100 rpm per Excellence, 4,000 rpm per Elferspot) S2",
  "transmission": "5-speed manual transaxle at the rear axle, or 3-speed automatic; Motor Sport in 1983 called the manual 'impeccable'",
  "suspension": "MacPherson struts with aluminium wishbones at the front, semi-trailing arms with transverse torsion bars at the rear; S2 shares Turbo springs and dampers except for slightly smaller-diameter front springs (Rennlist)",
  "brakes": "Ventilated discs all round; ABS optional from the 1987 model year and standard on the S2, which carries the Turbo's four-piston fixed calipers per Excellence",
  "wheels_tyres": "Cookie-cutter alloys to 1985, phone-dial from 1985.5; S2 on 16 x 7 and 16 x 8 wheels with 205/55 VR16 and 225/50 VR16 tyres per Excellence; 52 mm offset from 1987 with ABS",
  "weight": "1,180 kg pre-1988 and 1,330 kg from 1988 per Wikipedia; 944 S 1,296 kg; S2 2,998 lb (1,360 kg) curb per Excellence, 1,460 kg quoted by Motor Sport for a track-test car in 1989",
  "dimensions": "Length 4,318 mm (1986-1988) or 4,290 mm (1989-1991); width 1,735 mm; height 1,275 mm",
  "acceleration": "0-60 mph under 7.5 s for a 1983 UK 944 Lux per Motor Sport; 7.2 s for the 944 S per Road & Track via PCA; 6.9 s per Excellence and 6.0-6.8 s per Wikipedia for the S2; 0-100 km/h in 6.8 s S2 claimed",
  "top_speed_claimed": "137 mph European 2.5 (about 125 mph US per Ate Up With Motor); 142-144 mph 944 S; 149 mph (240 km/h) S2 - manufacturer figures, with only Motor Sport's 137 mph recorded as a road-test observation"
 },
 "summary": "The Porsche 944 (1982-1991) was the car that turned the transaxle experiment into a commercial success. It kept the 924's platform, Neckarsulm assembly and front-engine, rear-gearbox layout, but replaced the Audi-sourced four with a Porsche engine that was, in effect, half of the 928's V8: 2,479 cc, all alloy, with twin balance shafts licensed from Mitsubishi to make a large four acceptable in a sports car. Shown at Frankfurt in September 1981 at DM 38,900, it drew 30,000 orders in its first year and was about 51 per cent of Porsche's output by 1983. The line then grew in three steps: a mid-1985 interior and electrical revision, the 16-valve 944 S of 1987 with 190 PS, and the 1989 944 S2, whose 2,990 cc twin-cam four was the largest in a production car at the time and carried the Turbo's bodywork, brakes and suspension. An 8-valve 2.7 filled the base slot for 1989 and an ASC-converted Cabriolet joined the S2. Production ended in July 1991 ahead of the 968. Sources disagree on how many were built, particularly S2s, and this page records the disagreement rather than choosing a figure.",
 "history": "## Half a 928\n\nThe 924 had kept Porsche solvent through the 1970s, but its Volkswagen-Audi engine was always a reproach and VW's plans for it were finite. Porsche's answer was a four-cylinder of its own, conceived as one bank of the 928's all-alloy V8 and first raced in the 924 GTP that finished seventh at Le Mans in June 1981 with only 21 fuel stops. In road trim it displaced 2,479 cc on a 100 mm bore and 78.9 mm stroke, with a single overhead camshaft, two valves per cylinder and Bosch Digital Motor Electronics. Its distinguishing feature was a pair of counter-rotating balance shafts to cancel the secondary vibration of a large four; Porsche paid Mitsubishi a per-engine royalty for the patent. Engines were built at Zuffenhausen and trucked to the former NSU works at Neckarsulm for assembly.\n\n## Frankfurt 1981 and Neckarsulm\n\nThe 944 was unveiled at Frankfurt in September 1981 wearing a productionised version of the 924 Carrera GT's flared arches, from Anatole Lapine's studio, at DM 38,900. European cars had 163 PS at 5,800 rpm; American cars, sold from May 1982 as early 1983 models at $18,980, had 143 hp by most accounts, although PCA and Pelican Parts give 150 hp. Britain took its first cars at Easter 1982 for £12,999. Motor Sport's 1983 test of a Lux recorded 0-60 mph in under 7.5 seconds, 0-100 mph in 21 seconds and 137 mph, found the gearbox impeccable and the steering a little low-geared, and returned about 26 mpg. America was warmer still: Car and Driver put the 944 on its Ten Best list from 1983 to 1985 and in August 1984 named it the best-handling car in the country over the Quattro, the Esprit and the C4 Corvette. Dealers took 30,000 orders in the first year and by 1983 the model was about 51 per cent of everything Porsche built.\n\n## The Oval Dash and the Sixteen-Valve S\n\nPower steering became standard for 1984, and midway through 1985 came the revision that divides 944s in the market: a new oval dashboard with a raised wheel, new door panels, an aerial embedded in the windscreen, a 115-amp alternator in place of the 90-amp unit, a larger fuel tank, a flush-mounted windscreen and phone-dial wheels in place of the cookie-cutters. The 944 Turbo arrived the same year and is covered separately. For 1987 Porsche added the 944 S, the first Porsche four with twin overhead camshafts and four valves per cylinder, a layout taken from the Le Mans engines; with hydraulic lash adjusters and knock sensors it made 190 PS to a 6,800 rpm redline, and PCA quotes Road & Track's 7.2-second 0-60 mph. ABS and airbags arrived the same year. The S was short-lived: 12,936 were built in two model years, and its small displacement left it short of the 8-valve car's low-speed flexibility. For 1988 the base engine's compression went from 9.5:1 to 10.2:1 for 160 PS, and a Celebration edition marked the 100,000th 944.\n\n## Three Litres: the S2\n\nThe 1989 model year reset the range. The 8-valve car was bored to 104 mm for 2,681 cc and 165 PS, a single-year engine, while the S became the S2 with the twin-cam head on a block bored and stroked to 104 x 88 mm for 2,990 cc, the largest four in any production car at the time. It made 211 PS at 5,800 rpm and 280 Nm at around 4,000 rpm, most of it low in the range, and inherited the Turbo's rounded nose, integrated bumpers, rear valance, brakes and suspension apart from slightly smaller front springs. Porsche quoted 0-100 km/h in 6.8 seconds and 240 km/h; Excellence records 6.9 seconds to 60 mph and 2,998 lb. Motor Sport lapped Snetterton in one in October 1989 in 1m 19.64s, four seconds quicker than a 928, and noted that at £25,000 it cost thousands less than a 911 with a better-balanced chassis. In the United States the coupe passed $45,000 and the Cabriolet approached $53,000.\n\n## Cabriolet and Run-out\n\nThe S2 Cabriolet, converted from coupe shells by American Sunroof Corporation, entered production in May 1989 per Wikipedia; PCA and Ate Up With Motor say 1990. Porsche states 6,980 were built through 1991. The S2 and Turbo stopped in July 1991, with a UK-only S2 SE of fifteen cars at 225 PS closing the account, and the 968 replaced the line for 1992 with the three-litre engine carried forward.",
 "marketNotes": "As of September 2026, classic.com prices the naturally aspirated 944s as four separate submarkets. The standard 944 carries a benchmark of $14,246 and the Celebration edition $10,363. The 944 S benchmark is $16,792 on a downward trend, with an average sale of $16,882, a floor of $2,200 for a 1987 car on 30 July 2026 and a tracked high of $25,000. The S2 coupe is the strongest of the four: benchmark $25,015 on an upward trend, average $26,607, a low of $4,944 for a 1989 car in November 2023 and, at the top, a 1991 car at $50,000 in August 2026, a 1990 car with 9,000 miles at $70,000 in June 2024 and a dealer asking $78,800 in April 2026. The S2 Cabriolet sits at $18,866 and trending down, with an average of $21,503, a $5,720 low in March 2025 and a $44,988 high in June 2026. Across the whole 944 family classic.com's average is $23,519, though that figure includes Turbos. Auction-house results are consistent with the benchmarks: RM Sotheby's Miami sale in February 2025 sold a 16,434-mile Alpine White S2 Cabriolet for $34,720, and its online Driving into Summer sale in 2020 took a 45,000-mile 1991 S2 coupe to $25,850; neither lot page states whether the price includes premium. In Britain, The Classic Valuer's median across 128 S2 sales since 2020 is £13,759 in a £2,268 to £57,697 range, a 21,273-mile 1990 S2 made £20,250 at The Porsche Sale in October 2017, and Classics World's 2026 guide bands tidy 2.5 and 2.7 cars at £8,000 to £14,000, good S2s at £15,000 to £25,000 and convertibles at £12,000 to £18,000. Car and Classic's listings average £15,224 across all 944s.",
 "whatToLookFor": "The belt history comes first. Every source consulted puts the timing and balance-shaft belts on a four-year or 30,000 to 48,000-mile cycle depending on who is asked, and on the 16-valve S and S2 a broken belt puts valves into pistons; Pelican Parts adds that a fresh belt should be re-tensioned after about 1,000 miles and then every 15,000, which needs a factory tool. Receipts, not assurances. On the S and S2 the chain and tensioner between the camshafts is a separate item, oil-pressure controlled and worn by 100,000 miles by Porsche-Mania's reckoning; a rattle from the head on start-up is the warning. Oil should be checked for milkiness, because a failed oil-to-coolant heat exchanger will mix the two long before a head gasket does, and the expansion tank examined for crazing or warping that betrays past overheating. Underneath, look for a dented sump from careless jacking, weeping seals near the belt covers, and a whine from the rear that Pelican Parts and Porsche Club GB both trace to pinion or differential bearings; a whirring under load points to torque-tube bearings. Bodies were galvanised, so rust in the sills, the rear suspension mountings or anywhere other than the battery tray suggests accident repair or salt exposure, and a paint-depth gauge earns its keep. The hatch seal, sunroof drains and rear lamp seals all let water into the boot. Inside, the post-1985.5 oval dash cracks and the odometer stops if the trip reset was pressed on the move; early cars have trim that is harder to replace. On S2s the Turbo-derived aluminium wishbones carry non-replaceable ball joints, so a knock over bumps means whole arms. The clutch pedal should be firm with no free play; a soft pedal points at the master or slave cylinder and a high biting point at a disc, with the rubber-centred original disc and its damper wearing sooner than the plates. A car with a complete belt service, a documented cam-chain tensioner and a recent clutch is a different proposition from one with none.",
 "commonProblems": "The pattern is consistent across the American, British and German guides. Belts head every list: the timing belt and the separate balance-shaft belt age as well as wear, the water pump, rollers and tensioner are usually changed with every second belt, and worn tensioner pads produce an audible rattle. Stuttcars quotes $1,200 to $1,800 for a full belt and pump service in 2026; Porsche Club GB puts a belt and idler kit at around £200 plus VAT. The 16-valve S and S2 add the cam-chain tensioner, which is oil-pressure controlled and can, in Porsche-Mania's account, throw the timing or crack a head when its guide rails or oil pipe fail. Oil leaks are chronic rather than serious: front crankshaft seal, balance-shaft seals and O-rings, cam-tower seals and, worst to fix, the sump gasket. The oil cooler seals and the oil-to-coolant heat exchanger can put oil into the coolant. Cooling systems suffer from tired radiators, lazy fans and corroded thermostats, and Porsche Club GB warns that the alloy engine wants a top-end rebuild from around 120,000 miles and a full rebuild from 150,000. The DME relay is a $20 part that stops the car dead. Power-steering pumps and pipes leak, with a pump at about £650. Transaxles whine on worn pinion and differential bearings, torque-tube bearings whir, and gear linkages go vague. Clutch replacement is quoted at $1,500 to $2,500 by Stuttcars, £750 to £1,000 plus VAT by Porsche Club GB and £1,200 to £1,800 by Classics World for 2026; the transaxle makes it a long job. Dashboards crack, hatches and sunroofs leak, starter motors are impossibly lethargic in Porsche Club GB's words, and cruise control fails often enough that owners stop repairing it.",
 "valueTrajectory": "The 944 was a volume car from the start: DM 38,900 in Germany, $18,980 in the United States and £12,999 in Britain in 1982, rising to over $45,000 for an S2 coupe and nearly $53,000 for a Cabriolet by 1989. Because so many were built, it spent two decades as an inexpensive used Porsche; Pelican Parts' older guide quoted $4,000 to $15,000 for good examples and warned against expecting appreciation. That has changed unevenly. As of September 2026 classic.com's benchmarks are $14,246 for a standard 944, $16,792 for a 944 S, $25,015 for an S2 coupe and $18,866 for an S2 Cabriolet, and the trends diverge: the S2 coupe is rising, with a $50,000 result in August 2026 and $70,000 for a 9,000-mile car in June 2024, while the S and the Cabriolet are marked down. Car and Driver's June 2024 snapshot of $13,500 for a 71,000-mile 1985 car and $23,150 for a 52,000-mile 1990 S2 Cabriolet sits close to those benchmarks. In Britain The Classic Valuer's £13,759 median across 128 S2 sales since 2020 and Classics World's £15,000 to £25,000 band for good S2s describe the same shape. The numbers show stratification rather than a general rise: low-mileage, unmodified S2 coupes with belt and tensioner history have separated from the field, and everything else remains a car bought to drive.",
 "overallConfidence": "medium",
 "sources": [
  {
   "ref": "wikipedia-944",
   "title": "Porsche 944",
   "url": "https://en.wikipedia.org/wiki/Porsche_944",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Aggregated reference: production per variant (944 113,070 with 56,921 to the US; 944 S 12,936 with 8,815 to the US; S2 around 14,071 with 3,650 to the US; S2 Cabriolet 5,656 with 2,402 to the US), family total 163,192, engine codes M44/40, M44/12 and M44/41 with bore and stroke, 163 PS then 160 PS for the 2.5, 143 hp then 147 hp US, 165 PS 2.7, 190 PS 944 S at 10.9:1 and 1,296 kg, 211 PS S2, S2 0-60 mph 6.0 s and 0-100 km/h 6.8 s, 240 km/h, 1985.5 changes (dashboard, door panels, embedded aerial, 115-amp alternator, larger tank, phone-dial wheels, flush windscreen), ABS and airbags 1987 with 52 mm offset, S2 Cabriolet from May 1989, S2 SE 15 UK cars at 225 PS, Car and Driver Ten Best 1983-1985, 924 GTP seventh at Le Mans 1981, weights 1,180 kg and 1,330 kg, dimensions."
  },
  {
   "ref": "porsche-stories-944",
   "title": "Everything about the Porsche 944",
   "url": "https://www.porsche.com/stories/innovation/everything-about-the-porsche-944/",
   "publisher": "Porsche AG",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Manufacturer editorial: unveiled September 1981 at Frankfurt, built 1982-1991 at the former NSU factory in Neckarsulm, 163,302 built in total, more than 51 per cent of Porsche production in its first year, Anatole Lapine as head of design, 924 Carrera GT influence, 2.5-litre four created by halving the 928 V8, Cabriolet introduced 1989, Le Mans 1981 seventh overall with 21 fuel stops."
  },
  {
   "ref": "porsche-newsroom-forever-young-944",
   "title": "Porsche 944 - Forever Young. Celebrating Transaxle (press kit)",
   "url": "https://newsroom.porsche.com/en/press-kits/Forever-Young.-Celebrating-Transaxle/Porsche-944.html",
   "publisher": "Porsche AG",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Museum press kit: Type 944 introduced September 1981 with a 163 hp four positioned between the 924 and 911, DM 38,900 launch price, 'no other Porsche model had ever sold as quickly and as well', Turbo, S, S2 and Cabriolet variants, 163,302 of the 944 series built by the end of production in 1991."
  },
  {
   "ref": "porsche-newsroom-cutaway",
   "title": "Porsche transaxle models: 944 cutaway model",
   "url": "https://newsroom.porsche.com/en/2026/history/porsche-transaxle-models-944-cutaway-model-42011.html",
   "publisher": "Porsche AG",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Manufacturer article: three-litre four delivering 155 kW (211 PS), the largest-displacement four in a production car at the time, five-speed manual at the rear axle, driveshaft of 20 to 25 mm diameter and about 1.50 m length, four seats with more than twice the luggage space of a 911; dates the S2 to 1988."
  },
  {
   "ref": "porsche-newsroom-transaxle-history",
   "title": "Porsche transaxle models: history",
   "url": "https://newsroom.porsche.com/en/2026/history/porsche-transaxle-models-history-42008.html",
   "publisher": "Porsche AG",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Manufacturer chronology: 944 debut at the 1981 motor show with 120 kW (163 PS), 30,000 orders in the first production year, around 51 per cent of Porsche production in 1983, 944 S (1986) with 140 kW (190 PS), 944 S2 (1988) with 155 kW (211 PS), 944 Cabriolet 'a total of 6,980 units are produced up through 1991', 163,302 vehicles in total, highest-selling sports car in company history to that point."
  },
  {
   "ref": "stuttcars-production",
   "title": "Porsche 944 Production Numbers",
   "url": "https://www.stuttcars.com/porsche-944-production-numbers/",
   "publisher": "Stuttcars",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Variant table: 944 113,070; 944 Turbo 25,245; 944 S 12,936; 944 S2 14,071; 944 S2 Cabriolet 5,656; Turbo S 1,635; Turbo Cabriolet 625; stated total 173,238 for 1982-1991. Year and market breakdown is behind a paywall and was not retrieved."
  },
  {
   "ref": "stuttcars-buyers-guide",
   "title": "Porsche 944 Buyers Guide",
   "url": "https://www.stuttcars.com/porsche-buyers-guides/porsche-944-buyers-guide/",
   "publisher": "Stuttcars",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Ownership guide: belt and water pump every 30,000-40,000 miles or five years at $1,200-1,800, interference 16-valve engines, balance-shaft belts, seal leaks near the belt covers, clutch $1,500-2,500, cooling and electrical faults, dashboard cracks, pre-1985.5 interior parts harder to replace, rust points, annual budget $1,000-2,500, 944 S 'short-lived' and 'rarely seen', S2 'arguably the sweet spot', later 1990-1991 cars better built."
  },
  {
   "ref": "pelican-buyers-guide",
   "title": "Porsche 944 Buyer's Guide",
   "url": "https://www.pelicanparts.com/techarticles/944_buyers_guide/944_buyers_guide.htm",
   "publisher": "Pelican Parts",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Long-standing US ownership guide: 150 hp for 1983-1985 cars, belts every 30,000-35,000 miles with re-tensioning at 1,000 and 15,000 miles, water pump 50,000-100,000 miles, clutch $1,200-1,500, oil leak hierarchy from front seal to sump gasket, torque tube and transaxle whine, galvanised bodies with the battery tray as the exception, non-replaceable ball joints on later control arms, dashboard cracking, expansion-tank warping as an overheating sign, older price band $4,000-15,000 and a warning not to expect appreciation because of production volume, factory tensioning tool $300-500."
  },
  {
   "ref": "pca-model-guide-i",
   "title": "Model Guide: Front-engined, four-cylinder Porsche sports cars - Part I",
   "url": "https://www.pca.org/news/model-guide-front-engined-four-cylinder-porsche-sports-cars-part-i",
   "publisher": "Porsche Club of America",
   "sourceType": "club-forum",
   "reliability": "medium",
   "notes": "Club model guide: 944 introduced for model year 1983 with 150 hp and 142 lb-ft, twin counter-rotating balance shafts, DME, 6,400 rpm redline, power steering optional 1983 and standard from 1984, 1985.5 dashboard and raised wheel, 1988 compression from 9.5:1 to 10.2:1 for 160 hp and 155 lb-ft, 1989 2.7 with 165 hp, 166 lb-ft and 7.5 s 0-60, 944 S 190 hp and 170 lb-ft with 6,800 rpm redline, Road & Track 0-60 in 7.2 s and 142 mph."
  },
  {
   "ref": "pca-model-guide-ii",
   "title": "Model Guide: Front-engined, four-cylinder Porsche sports cars - Part II",
   "url": "https://www.pca.org/news/2017-02-17/model-guide-front-engined-four-cylinder-porsche-sports-cars-part-ii",
   "publisher": "Porsche Club of America",
   "sourceType": "club-forum",
   "reliability": "medium",
   "notes": "Club model guide: 944 S2 from 1989 with a 3.0-litre 16-valve four, 208 hp and 207 lb-ft with most torque low in the range, ABS and airbags standard, convertible offered from 1990; 944, 944 S, S2, Turbo and 968 share underpinnings with a 50/50 weight balance."
  },
  {
   "ref": "ateupwithmotor-944",
   "title": "Yuppie Sports, Part 2: The Porsche 944 and 968",
   "url": "https://ateupwithmotor.com/model-histories/porsche-924-944-968-part-2/",
   "publisher": "Ate Up With Motor",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Model history: engine first seen in the 1981 Le Mans 924 GTP, Frankfurt September 1981 announcement, US launch May 1982 as an early 1983 model, Mitsubishi per-engine balance-shaft royalty, engines built at Zuffenhausen and trucked to Neckarsulm, 163 PS European and 143 hp SAE US, DM 38,900 and $18,980, 0-60 under 8 s and 137 mph European with US cars around 125 mph, 944 S with DOHC head, hydraulic lash adjusters and knock sensors at 190 PS/188 hp and 170 lb-ft, S2 bored and stroked to 2,990 cc at 211 PS/208 hp, ASC-built Cabriolet in 1990, S2 coupe over $45,000 and Cabriolet nearly $53,000 in 1989, 26,539 sales in 1984 with 60 per cent to the US, approximate family total 157,000, Car and Driver August 1984 best-handling award."
  },
  {
   "ref": "motorsport-may-1982",
   "title": "Porsche 944 (May 1982)",
   "url": "https://www.motorsportmagazine.com/archive/article/may-1982/37/porsche-944/",
   "publisher": "Motor Sport Magazine",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Period notice: the 944 went on sale in the UK at Easter 1982 at £12,999 for the five-speed manual and £13,477 for the automatic, with first impressions having appeared in the August 1981 issue."
  },
  {
   "ref": "motorsport-june-1983",
   "title": "The Porsche 944 Lux (June 1983)",
   "url": "https://www.motorsportmagazine.com/archive/article/june-1983/91/porsche-944-lux/",
   "publisher": "Motor Sport Magazine",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Period road test by Bill Boddy: 2.5-litre four with Bosch L-Jetronic and contra-rotating balance weights, 163 DIN bhp at 5,800 rpm, safe to 6,500 rpm, 0-60 mph under 7.5 s, 0-100 mph 21 s, 137 mph, about 26 mpg, £13,000 basic and over £14,000 equipped, 'impeccable' five-speed gearbox, steering 3.75 turns lock to lock and slightly low-geared, restricted boot, headlamps needing to be raised before flashing."
  },
  {
   "ref": "motorsport-oct-1989",
   "title": "Track test: Porsche track tests (October 1989)",
   "url": "https://www.motorsportmagazine.com/archive/article/october-1989/56/a-bit-of-fun/",
   "publisher": "Motor Sport Magazine",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Period track test: 944 S2 with a 3-litre four rated at 211 bhp, 6,400 rpm redline, 1,460 kg as tested, Snetterton lap of 1m 19.64s at 85.9 mph average, about four seconds a lap faster than a 928, 225/50 on 7 x 16 front tyres, dampers and springs shared with the Turbo, understeer-biased chassis, non-ABS test car, £25,000 asking price against £35,000 for a 928, 'costs thousands less than a 911, yet offers a better balanced chassis and similar speed'."
  },
  {
   "ref": "excellence-s2-specs",
   "title": "1989 944 S2 Coupe (944) | Specs",
   "url": "https://www.excellence-mag.com/resources/specs/279",
   "publisher": "Excellence, The Magazine About Porsche",
   "sourceType": "specialist",
   "reliability": "high",
   "notes": "Specification sheet: inline four, DOHC, port injection, 2,990 cc, 104 x 88 mm, 10.9:1, 208 hp at 5,800 rpm, 207 lb-ft at 4,100 rpm, five-speed manual, 2,998 lb curb weight, 4,230 mm length and 1,735 mm width, 2,400 mm wheelbase, fixed four-piston calipers with ventilated discs, 16 x 7 and 16 x 8 wheels with 205/55 VR16 and 225/50 VR16 tyres, 0-60 mph 6.9 s, 149 mph, 15/24/18 mpg."
  },
  {
   "ref": "classicsworld-944-guide",
   "title": "Porsche 944 buyer's guide",
   "url": "https://classicsworld.co.uk/guides/porsche-944-buyers-guide/",
   "publisher": "Classics World",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "UK buying guide: 163 bhp at 5,800 rpm with over 90 per cent of peak torque from 2,500 rpm, 190 bhp 944 S, S2 bored and stroked to 3.0 litres at 211 bhp with convertible announced spring 1989, 8-valve to 2.7 litres and 165 bhp in 1989, belts every four years, oil cooler mixing oil and coolant, torque tube bearing vibration, clutch £1,200-1,800 in 2026, sills prone to corrosion, hatch and lamp seals, sunroof drains, oval-dash odometer fault, wishbones £250-400 each; 2026 UK bands: projects £4,000-7,000, tidy 2.5/2.7 £8,000-14,000, good S2 £15,000-25,000, convertibles £12,000-18,000."
  },
  {
   "ref": "pcgb-944-guide",
   "title": "Porsche 944 Buyers Guide",
   "url": "https://www.porscheclubgb.com/regions-registers/registers/classic/944/porsche-944-buyers-guide",
   "publisher": "Porsche Club Great Britain",
   "sourceType": "club-forum",
   "reliability": "medium",
   "notes": "Club register guide: model-year chronology (143 bhp 2.5 for 1982, oval dash 1985, 190 bhp 944 S and ABS option 1987, 160 bhp and Celebration edition for the 100,000th car 1988, 2.7 at 165 bhp 1989, S2 at 211 bhp 1990 MY, 944 SE UK run-out with sports suspension and 225 bhp 1991, Turbo and S2 production stopping July 1991, 968 for 1992), top-end rebuild from 120,000 miles and full rebuild from 150,000, oil/coolant heat exchanger about £340 plus VAT, belt kit around £200 plus VAT every four years, power-steering pump about £650, sills and rear suspension mountings for rust, pinion and differential bearing whine, clutch £750-1,000 plus VAT, lethargic starter motors, 'the 211bhp, 3-litre S2 was arguably the best all round 944'."
  },
  {
   "ref": "elferspot-s2-guide",
   "title": "Porsche 944 S2 - For sale & Buyer's Guide",
   "url": "https://www.elferspot.com/en/magazine/buyers-guide-porsche-944-s2/",
   "publisher": "Elferspot",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "German specialist guide: S2 launched summer 1989 succeeding the 944 S with Turbo body styling, M44/41 2,990 cc, 104 x 88 mm, 211 hp at 5,800 rpm, 280 Nm at 4,000 rpm, 10.9:1, 0-62 mph 6.8 s, 149 mph, production 9,352 coupes and 6,980 convertibles, DM 78,100 coupe list price in 1989, belt every 48,000 miles or eight years, cam chain and tensioner wear, main seal leaks, rubber clutch damper wearing before the plates, oil pressure above 2 bar warm, oval dash cracking, roof seal and rear-window leaks, values from about 30,000 euros for well-kept cars."
  },
  {
   "ref": "rennlist-s-vs-s2",
   "title": "Differences Between 944S and S2?",
   "url": "https://rennlist.com/forums/924-931-944-951-968-forum/106829-differences-between-944s-and-s2.html",
   "publisher": "Rennlist",
   "sourceType": "club-forum",
   "reliability": "low",
   "notes": "Owner forum thread: S is a 2.5 16-valve in the standard body with '16 Ventiler' side-moulding badges, S2 is a 3.0 16-valve in the Turbo body with Turbo brakes and suspension apart from quarter-inch smaller-diameter front springs, M030 S2s with 928 S4-derived brakes, the extra half-litre giving the low-end torque the S lacked, a 157,000-mile owner warning that the 16-valve head is not cheap to fix after a belt failure. Used for ownership pattern only, not for figures."
  },
  {
   "ref": "porsche-mania-problems",
   "title": "The 5 Most Common Porsche 944 Problems",
   "url": "https://porsche-mania.com/porsche-944-problems-reliability/",
   "publisher": "Porsche-Mania",
   "sourceType": "specialist",
   "reliability": "low",
   "notes": "Fault list: timing belt failure on an interference engine with a 30,000-mile interval and about $500 in parts, cam-chain tensioner failure on S and S2 only (oil-pressure controlled, guide rails and oil pipe, around 100,000 miles, OEM tensioner above $500, can crack a head), DME relay ($20 part) stopping the car, water pump bearing and seal failure ($100-200), cruise control faults."
  },
  {
   "ref": "car-and-driver-what-to-buy",
   "title": "What to Buy: 1983-1991 Porsche 944",
   "url": "https://www.aol.com/buy-1983-1991-porsche-944-180000682.html",
   "publisher": "Car and Driver (syndicated via AOL)",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "2024 buying feature: engine essentially half a 928 V8 with twin balance shafts and fluid-filled mounts, 143 hp 1983, 188 hp 1987 S, 163 hp 2.7 and 208 hp S2 for 1989, 88,765 US sales through 1991 peaking in 1985-1986, belts every four years, rear main seal and fuel-pump relay failures, ball joints and bushings; June 2024 values of $13,500 for a 71,361-mile 1985 944 and $23,150 for a 52,211-mile 1990 S2 Cabriolet; recommends 1985.5-on cars for interiors and suspension."
  },
  {
   "ref": "classic-944",
   "title": "Porsche 944 Market",
   "url": "https://www.classic.com/m/porsche/944/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Market data as of September 2026: average price across all 944s $23,519; submarket benchmarks 944 $14,246, 944 S $16,792, S2 Cabriolet $18,866, S2 Coupe $25,015, Celebration Edition $10,363 (Turbo, Turbo S, Turbo Cabriolet and Turbo Cup also listed); states over 163,000 built. The page's 'lowest recorded sale' line of $202,500 for a 1986 944 is evidently a data error and is not used."
  },
  {
   "ref": "classic-944-s",
   "title": "Porsche 944 S Market",
   "url": "https://www.classic.com/m/porsche/944/944-s/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Market data as of September 2026: benchmark $16,792 trending down, average $16,882, lowest sale $2,200 for a 1987 car on 30 July 2026, highest tracked $25,000, recent results of $18,850 (July 2026), $14,369 (April 2026) and $11,500 (October 2025); describes the S as a 190 PS 16-valve 2.5 with self-adjusting belt tensioner introduced for 1987."
  },
  {
   "ref": "classic-s2-coupe",
   "title": "Porsche 944 S2 Coupe Market",
   "url": "https://www.classic.com/m/porsche/944/s2-coupe/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Market data as of September 2026: benchmark $25,015 trending up, average $26,607, lowest sale $4,944 for a 1989 car on 15 November 2023, 1991 car sold at $50,000 on 13 August 2026, 1991 car at $45,944 on 13 February 2026, a 9,000-mile 1990 car at $70,000 in June 2024, dealer asking $78,800 in April 2026; 208 hp 3.0 16-valve described as the largest production four of its time."
  },
  {
   "ref": "classic-s2-cab",
   "title": "Porsche 944 S2 Cabriolet Market",
   "url": "https://www.classic.com/m/porsche/944/s2-cabriolet/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Market data as of September 2026: benchmark $18,866 trending down, average $21,503, lowest sale $5,720 for a 1992 car on 1 March 2025, 1990 car sold for $44,988 on 5 June 2026, model years 1989-1992."
  },
  {
   "ref": "classicvaluer-s2",
   "title": "Porsche 944 S2 For Sale & Price Guide",
   "url": "https://www.theclassicvaluer.com/cars/porsche/944-s2",
   "publisher": "The Classic Valuer",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "UK sales aggregator as of September 2026: median £13,759 across 128 S2 sales since 2020, range £2,268 to £57,697, 77 per cent sell-through; August 2026 results of £2,268 (Anglia Car Auctions, 1991), £38,955 (36,000 km 1989 car, US online), £26,489 (1991, US online) and £17,001 (1992, The Market, June 2026)."
  },
  {
   "ref": "carandclassic-944",
   "title": "Porsche 944: Models, Specs, and Buyer's Guide",
   "url": "https://www.carandclassic.com/buyer-guides/porsche-944-models-and-specs",
   "publisher": "Car & Classic",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "Marketplace guide as of September 2026: listings from £2,500 to £79,995 averaging £15,224 across all 944s; Frankfurt September 1981 unveiling, over 163,000 built, 143-160 bhp 2.5 with 0-100 km/h in 8.9 s, 165 bhp 2.7, 190 bhp S, 211 bhp S2 with 0-100 km/h in 7.1 s."
  },
  {
   "ref": "rm-mi25-s2-cab",
   "title": "1990 Porsche 944 S2 Cabriolet, Miami 2025",
   "url": "https://rmsothebys.com/auctions/mi25/lots/r0020-1990-porsche-944-s2-cabriolet/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold $34,720, Miami, February 2025, lot 205; chassis WP0CB2942LN481708, 16,434 miles, Alpine White over black partial leather, sold new in California, in the White Collection from 2014, five-speed manual, with books, tools, top boot and compressor; premium status not stated. Catalogue's own dating of the S to 1985 and the S2 to 1987 conflicts with every other source and is not used."
  },
  {
   "ref": "rm-0120-s2-coupe",
   "title": "1991 Porsche 944 S2 Coupe, Driving into Summer",
   "url": "https://rmsothebys.com/auctions/0120/lots/r0185-1991-porsche-944-s2-coupe/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold $25,850, Driving into Summer online sale, 2020, lot 272; chassis WP0AB2940MN410323, just over 45,000 miles, Brilliant Black over black, timing belt service costing over $3,000, window sticker, tools and spare; catalogue states 'one of 510 examples produced for the final year'; premium status not stated."
  },
  {
   "ref": "iconic-2017-s2",
   "title": "1990 Porsche 944 S2 - Sold",
   "url": "https://www.iconicauctioneers.com/1990-porsche-944-s2-rec06682-1-1017",
   "publisher": "Iconic Auctioneers",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold £20,250, The Porsche Sale, 21 October 2017, lot 204; chassis WP0ZZZ94ZLN402128, 21,273 miles, white, supplied by Rivervale Porsche in November 1990, stolen in Malta in 1991, recovered 2002 and repatriated 2013, about £16,000 recommissioning in 2016; catalogue describes a 210 bhp three-litre with the Turbo's nose and rear valance and production ending in 1991."
  }
 ],
 "claims": [
  {
   "section": "history",
   "claimText": "The 944 was unveiled at the Frankfurt Motor Show in September 1981 at DM 38,900, went on sale in Britain at Easter 1982 for £12,999 and in the United States from May 1982 as an early 1983 model at $18,980.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "porsche-stories-944",
    "porsche-newsroom-forever-young-944",
    "motorsport-may-1982",
    "ateupwithmotor-944"
   ]
  },
  {
   "section": "specs",
   "claimText": "The 2,479 cc M44/40 engine was an all-alloy single-overhead-cam four conceived as half of the 928's V8, with twin counter-rotating balance shafts for which Porsche paid Mitsubishi a per-engine patent royalty; it was built at Zuffenhausen and shipped to Neckarsulm, where the cars were assembled in the former NSU plant.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "ateupwithmotor-944",
    "porsche-stories-944",
    "wikipedia-944",
    "car-and-driver-what-to-buy"
   ]
  },
  {
   "section": "specs",
   "claimText": "European 944s were rated at 163 PS at 5,800 rpm, but the US launch output is given as 143 hp by Wikipedia, Ate Up With Motor and Car and Driver and as 150 hp by the Porsche Club of America and Pelican Parts.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "wikipedia-944",
    "ateupwithmotor-944",
    "car-and-driver-what-to-buy",
    "pca-model-guide-i",
    "pelican-buyers-guide",
    "motorsport-june-1983"
   ],
   "conflictNote": "Wikipedia gives 143 hp (107 kW) for US cars from 1982 to 1985; Ate Up With Motor gives 143 hp SAE; Car and Driver gives 143 hp for 1983. The PCA model guide gives 150 hp and 142 lb-ft, and Pelican Parts gives 150 hp for 1983-1985. The 163 PS European figure is consistent across Porsche, Motor Sport and Wikipedia. Not resolved by any source consulted here."
  },
  {
   "section": "specs",
   "claimText": "Motor Sport's June 1983 road test of a UK 944 Lux recorded 0-60 mph in under 7.5 seconds, 0-100 mph in 21 seconds, 137 mph and about 26 mpg, praised the gearbox and found the steering slightly low-geared at 3.75 turns lock to lock.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "motorsport-june-1983"
   ]
  },
  {
   "section": "history",
   "claimText": "The 944 drew 30,000 orders in its first production year, accounted for about 51 per cent of Porsche's output in 1983, appeared on Car and Driver's Ten Best list from 1983 to 1985 and was named the best-handling car in America by the same magazine in August 1984.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "porsche-newsroom-transaxle-history",
    "porsche-stories-944",
    "wikipedia-944",
    "ateupwithmotor-944"
   ]
  },
  {
   "section": "history",
   "claimText": "Midway through the 1985 model year the 944 received a new oval dashboard and door panels, a windscreen-embedded aerial, a 115-amp alternator, a larger fuel tank, a flush windscreen and phone-dial wheels; power steering had become standard for 1984.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-944",
    "pca-model-guide-i",
    "pcgb-944-guide",
    "car-and-driver-what-to-buy"
   ]
  },
  {
   "section": "specs",
   "claimText": "The 944 S of the 1987 and 1988 model years was the first Porsche four with twin overhead camshafts and four valves per cylinder, rated at 190 PS with 170 lb-ft, a 6,800 rpm redline and hydraulic lash adjusters; Porsche's own chronology dates it to 1986, while ABS and airbags were introduced the same model year.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-944",
    "pca-model-guide-i",
    "ateupwithmotor-944",
    "porsche-newsroom-transaxle-history",
    "classic-944-s"
   ]
  },
  {
   "section": "specs",
   "claimText": "For 1988 the 8-valve engine's compression rose from 9.5:1 to 10.2:1 for 160 PS, and for the 1989 model year only it was enlarged to 2,681 cc (M44/12) for 165 PS.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "pca-model-guide-i",
    "wikipedia-944",
    "pcgb-944-guide",
    "classicsworld-944-guide"
   ]
  },
  {
   "section": "specs",
   "claimText": "The 944 S2 used the 2,990 cc M44/41 twin-cam 16-valve four with 104 x 88 mm bore and stroke and 10.9:1 compression, rated at 211 PS (208 hp) at 5,800 rpm and 280 Nm, the largest four-cylinder engine in a production car at the time, and carried the Turbo's bodywork, brakes and suspension.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "porsche-newsroom-cutaway",
    "excellence-s2-specs",
    "elferspot-s2-guide",
    "wikipedia-944",
    "rennlist-s-vs-s2",
    "iconic-2017-s2"
   ]
  },
  {
   "section": "specs",
   "claimText": "Porsche claimed 0-100 km/h in 6.8 seconds and 240 km/h (149 mph) for the S2; Excellence lists 6.9 seconds to 60 mph and a 2,998 lb curb weight, and Motor Sport's 1989 track test quoted 1,460 kg and lapped Snetterton in 1m 19.64s.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-944",
    "elferspot-s2-guide",
    "excellence-s2-specs",
    "motorsport-oct-1989"
   ]
  },
  {
   "section": "production",
   "claimText": "113,070 standard 944 coupes (56,921 to the United States) and 12,936 944 S (8,815 to the United States) were built, figures on which Wikipedia and Stuttcars agree.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-944",
    "stuttcars-production"
   ]
  },
  {
   "section": "production",
   "claimText": "S2 production is disputed: Wikipedia and Stuttcars give around 14,071 coupes and 5,656 Cabriolets, while Elferspot gives 9,352 coupes and 6,980 Cabriolets and Porsche's own transaxle history states 6,980 Cabriolets were built through 1991.",
   "confidence": "low",
   "status": "disputed",
   "sourceRefs": [
    "wikipedia-944",
    "stuttcars-production",
    "elferspot-s2-guide",
    "porsche-newsroom-transaxle-history"
   ],
   "conflictNote": "Wikipedia states 'around 14,071' S2 coupes and 5,656 S2 Cabriolets; Stuttcars' table states 14,071 and 5,656. Elferspot states 9,352 coupes and 6,980 convertibles. Porsche's 2026 newsroom chronology states 'a total of 6,980 units' of the 944 Cabriolet through 1991, which matches Elferspot and contradicts Wikipedia's Cabriolet figure. No source consulted reconciles the coupe figures. Not resolved by any source consulted here."
  },
  {
   "section": "production",
   "claimText": "The total for the whole 944 family, Turbos included, is given as 163,302 by Porsche, 163,192 by Wikipedia, approximately 157,000 by Ate Up With Motor, and Stuttcars' variant table sums to 173,238; Car and Driver gives 88,765 US sales through 1991.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "porsche-newsroom-forever-young-944",
    "porsche-stories-944",
    "wikipedia-944",
    "stuttcars-production",
    "ateupwithmotor-944",
    "car-and-driver-what-to-buy"
   ],
   "conflictNote": "Porsche's press kit and newsroom state 163,302. Wikipedia states 163,192. Stuttcars states 'a total of 173,238 cars' and its per-variant figures sum to that number. Ate Up With Motor states approximately 157,000. Not resolved by any source consulted here."
  },
  {
   "section": "production",
   "claimText": "RM Sotheby's catalogue for a 1991 S2 coupe states that it was one of 510 examples produced for the final year; no other source consulted gives a 1991 S2 coupe figure.",
   "confidence": "low",
   "status": "unverified",
   "sourceRefs": [
    "rm-0120-s2-coupe"
   ]
  },
  {
   "section": "history",
   "claimText": "The S2 Cabriolet was converted from coupe shells by American Sunroof Corporation and entered production in May 1989 according to Wikipedia, while PCA and Ate Up With Motor date its availability to 1990; a UK-only S2 SE of fifteen cars at 225 PS closed the run, and 944 production ended in July 1991 ahead of the 968.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-944",
    "ateupwithmotor-944",
    "pca-model-guide-ii",
    "pcgb-944-guide",
    "porsche-newsroom-transaxle-history"
   ]
  },
  {
   "section": "history",
   "claimText": "A Celebration edition marked the 100,000th 944 in the 1988 model year, and classic.com tracks it as a separate submarket with a benchmark of $10,363 as of September 2026.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "pcgb-944-guide",
    "classic-944"
   ]
  },
  {
   "section": "market",
   "claimText": "As of September 2026 classic.com's benchmarks are $14,246 for a standard 944, $16,792 for a 944 S (trending down), $25,015 for an S2 coupe (trending up) and $18,866 for an S2 Cabriolet (trending down), with a $23,519 average across all 944s including Turbos.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-944",
    "classic-944-s",
    "classic-s2-coupe",
    "classic-s2-cab"
   ]
  },
  {
   "section": "market",
   "claimText": "The strongest naturally aspirated results recorded by classic.com are a 1991 S2 coupe at $50,000 in August 2026, a 9,000-mile 1990 S2 coupe at $70,000 in June 2024 and a 1990 S2 Cabriolet at $44,988 in June 2026; RM Sotheby's sold a 16,434-mile S2 Cabriolet for $34,720 at Miami in February 2025 and a 45,000-mile 1991 S2 coupe for $25,850 online in 2020.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-s2-coupe",
    "classic-s2-cab",
    "rm-mi25-s2-cab",
    "rm-0120-s2-coupe"
   ]
  },
  {
   "section": "market",
   "claimText": "In Britain, The Classic Valuer's median across 128 S2 sales since 2020 is £13,759 in a £2,268 to £57,697 range, Classics World's 2026 guide bands good S2s at £15,000 to £25,000 and tidy 2.5 and 2.7 cars at £8,000 to £14,000, Car & Classic's listings average £15,224 and Iconic Auctioneers sold a 21,273-mile 1990 S2 for £20,250 in October 2017.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "classicvaluer-s2",
    "classicsworld-944-guide",
    "carandclassic-944",
    "iconic-2017-s2"
   ]
  },
  {
   "section": "problems",
   "claimText": "Timing and balance-shaft belt replacement is the defining maintenance item, on a four-year or roughly 30,000 to 48,000-mile cycle depending on the source, with the water pump and rollers usually changed alongside; on the 16-valve S and S2 a failed belt puts valves into pistons.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "stuttcars-buyers-guide",
    "pelican-buyers-guide",
    "classicsworld-944-guide",
    "pcgb-944-guide",
    "elferspot-s2-guide",
    "rennlist-s-vs-s2"
   ]
  },
  {
   "section": "problems",
   "claimText": "The 944 S and S2 carry an oil-pressure-controlled chain tensioner between the camshafts that wears with age and can throw the timing or damage the head when it, its guide rails or its oil supply fail.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "porsche-mania-problems",
    "elferspot-s2-guide"
   ]
  },
  {
   "section": "problems",
   "claimText": "Oil leaks from the front crankshaft seal, balance-shaft seals, cam-tower seals and sump gasket, oil-to-coolant heat exchanger failure, transaxle and torque-tube bearing noise, DME relay failure, cracked dashboards and leaking hatch and sunroof seals recur across the ownership guides; bodies were galvanised, so rust beyond the battery tray suggests repair or salt damage.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "pelican-buyers-guide",
    "stuttcars-buyers-guide",
    "pcgb-944-guide",
    "classicsworld-944-guide",
    "porsche-mania-problems",
    "car-and-driver-what-to-buy"
   ]
  },
  {
   "section": "problems",
   "claimText": "Clutch replacement is quoted at $1,500 to $2,500 by Stuttcars, £750 to £1,000 plus VAT by Porsche Club GB and £1,200 to £1,800 by Classics World for 2026, because the transaxle layout makes it labour-intensive; a full belt and pump service is quoted at $1,200 to $1,800.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "stuttcars-buyers-guide",
    "pcgb-944-guide",
    "classicsworld-944-guide",
    "pelican-buyers-guide"
   ]
  },
  {
   "section": "market",
   "claimText": "The S2 coupe listed at over $45,000 and the Cabriolet at nearly $53,000 in the United States in 1989, and DM 78,100 for the coupe in Germany; Pelican Parts' older guide quoted $4,000 to $15,000 for good cars and warned against expecting appreciation because of production volume.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "ateupwithmotor-944",
    "elferspot-s2-guide",
    "pelican-buyers-guide",
    "motorsport-oct-1989"
   ]
  }
 ]
};
