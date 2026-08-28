/**
 * Researched model draft — Porsche 928 (1978-1995).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seed928 = {
 "slug": "porsche/928",
 "make": "Porsche",
 "model": "928",
 "generation": "928 (front-engine transaxle V8)",
 "generationCode": "Type 928",
 "trim": null,
 "yearStart": 1978,
 "yearEnd": 1995,
 "bodyStyles": [
  "2-door 2+2 hatchback coupe (fastback with lifting glass tailgate)"
 ],
 "engines": [
  "4,474 cc M28 all-aluminium 90-degree V8, single overhead camshaft per bank, two valves per cylinder, Bosch K-Jetronic; 240 PS at 5,500 rpm in European tune (1978-1982)",
  "4,664 cc M28 SOHC V8 for the 928 S, 300 PS (1980-1983) and 310 PS in S2 tune (1984-1986)",
  "4,957 cc M28 DOHC 32-valve V8, belt-driven exhaust camshafts with chain-driven intake camshafts; 288 hp in the 1985-1986 North American car, 320 PS in the S4 (1987-1991), 330 PS in the GT (1989-1991)",
  "5,397 cc DOHC 32-valve V8 for the GTS, 350 PS (345 bhp) at 5,700 rpm and 362 lb-ft at 4,250 rpm (1992-1995)"
 ],
 "productionTotal": null,
 "productionNotes": "Porsche states 61,056 cars built across the whole run, a figure repeated in its transaxle press kit and in the Christophorus fortieth-anniversary feature, and Wikipedia's variant-by-variant table resolves to the same number. StuttCars publishes a year-by-year table that totals 60,870 and states that figure explicitly. The 186-car gap is not explained by either side and is not resolved by any source consulted here, so no single total is asserted. The same disagreement runs through the sub-totals: Wikipedia gives 17,669 for the 4.5-litre 928 built between 1978 and 1982, while Supercar Nostalgia's model guide gives 17,864 for the 4.5-litre cars and dates them 1977-1982, which may or may not account for the difference. Where the sources do agree is on the shape of the run. Output peaked in the mid-1980s - StuttCars records 5,437 cars in 1979 and 5,035 in 1984 - and then fell away steeply: 3,049 in 1990, 2,037 in 1991, and 955, 811, 645 and 476 in the four GTS years to 1995. Variant totals commonly quoted are 8,315 for the 1980-1983 928 S, 14,347 for the 1984-1986 S/S2, 15,682 for the 1987-1991 S4, 2,078 for the 1989-1991 GT (1,682 European against 396 for the United States and Canada) and 2,904 for the 1992-1995 GTS (2,498 European against 406 for the United States). Small series are countable: 19 Club Sports built 1988-1989, 42 UK-market SE cars in 1988, and 141 European 50th Jubilee cars in 1982. The 1982 Weissach Edition for North America is given as 202 cars by Wikipedia and 205 by Supercar Nostalgia. RM Sotheby's catalogues for the 1995 model year state 77 GTS delivered to the United States, of which 26 were five-speed manuals and 47 automatics.",
 "notableTrims": [
  {
   "name": "928 (1978-1982)",
   "note": "The original 4.5-litre SOHC car, 240 PS in European tune and lower in North America. No front or rear spoilers, the lightest and most analogue of the range, and the only cars offered with the chequered Pasha velour interior that now carries its own following."
  },
  {
   "name": "928 S / S2 (1980-1986)",
   "note": "4.7 litres and 300 PS from 1980, rising to 310 PS for 1984-1986. Front and rear spoilers arrive, ABS becomes available from the 1983 S2, and the North American market gets the S only from 1983."
  },
  {
   "name": "928 S4 (1987-1991)",
   "note": "The 5.0-litre 32-valve DOHC engine at 320 PS with the smoothed nose and revised tail. The volume car of the later run at 15,682 built, and the point at which the engine becomes an interference design in most accounts."
  },
  {
   "name": "928 Club Sport and 928 SE (1988-1989)",
   "note": "Nineteen Club Sports, stripped of up to 100 kg, and 42 UK-market SE cars sitting between the Club Sport and the standard S4. The rarest road 928s by a wide margin and the reason a lightweight S4 shell warrants close verification."
  },
  {
   "name": "928 GT (1989-1991)",
   "note": "Manual only, 330 PS, ZF 40 per cent limited-slip differential as standard. 2,078 built, 396 of them for the United States and Canada. It exists because Porsche dropped the manual gearbox from the S4 and the demand did not disappear with it."
  },
  {
   "name": "928 GTS (1992-1995)",
   "note": "5.4 litres, 350 PS, widened rear arches, larger front brakes and a distinct wheel design. 2,904 built, 406 of them American. The manual cars are the ones the market has separated out: 26 five-speed GTS were delivered to the United States for the 1995 model year against 47 automatics."
  },
  {
   "name": "Weissach Edition and 50th Jubilee (1982)",
   "note": "Two commemorative runs: a North American Weissach Edition in champagne gold metallic with matching wheels, numbered plaque and luggage, given as 202 cars by Wikipedia and 205 by Supercar Nostalgia; and 141 European 50th Jubilee cars in meteor metallic with burgundy leather."
  }
 ],
 "specs": {
  "layout": "Front-mounted longitudinal engine, rear-mounted transaxle joined by a rigid torque tube, rear-wheel drive, approximately 50:50 weight distribution",
  "chassis": "Galvanised steel monocoque with aluminium doors, bonnet and front wings; polyurethane-faced integrated bumpers rated to withstand 8 km/h impacts without denting",
  "rear_suspension": "Weissach axle - semi-trailing arm layout in which the forward trailing-arm bushing is replaced by a short link, so that lift-off and braking loads pull the hub into toe-in rather than toe-out",
  "engine": "All-aluminium water-cooled 90-degree V8, front-mounted; 4,474 cc SOHC (1978-1982), 4,664 cc SOHC (1980-1986), 4,957 cc DOHC 32-valve (1985-1991), 5,397 cc DOHC 32-valve (1992-1995)",
  "valvetrain": "Two valves per cylinder to 1984; from 1985 four valves per cylinder with the timing belt driving the exhaust camshafts and a simplex roller chain driving the intake camshafts from them",
  "power": "Scoped by variant: 240 PS (928, Europe), 300 PS (S, 1980-1983), 310 PS (S2, 1984-1986), 320 PS (S4, 1987-1991), 330 PS (GT, 1989-1991), 350 PS / 345 bhp (GTS, 1992-1995); North American outputs are lower throughout and sources differ on the 1978-1979 US figure",
  "torque": "257 lb-ft at 3,600 rpm on the 4.5-litre European car; 362 lb-ft at 4,250 rpm on the GTS",
  "transmission": "Five-speed manual (dog-leg first on early cars) or Mercedes-Benz-sourced three-speed automatic, replaced by a four-speed automatic from 1983 in North America; the manual was withdrawn from the S4 for 1990, which is why the GT is manual-only",
  "transmission_mix": "Estimates vary: Wikipedia gives about 40 per cent manual for 1978-1979 and an average of 34 per cent thereafter, Classic & Sports Car puts manuals at about 20 per cent of the run",
  "fuel_injection": "Bosch K-Jetronic on early cars; LH-Jetronic with EZK ignition on 1987-on 32-valve engines",
  "brakes": "Ventilated discs all round, ABS optional from the 1983 S2; larger front brakes on the GTS",
  "weight": "Approximately 1,450 kg for the European 4.5-litre car; 1,471-1,600 kg (3,237-3,520 lb) across the range per Classic & Sports Car",
  "acceleration": "6.8 seconds to 100 km/h for the European 4.5-litre manual; 0-60 mph quoted between 7.0 and 5.4 seconds across the run depending on variant",
  "top_speed_claimed": "143 mph for the European 4.5-litre manual, rising to about 170 mph for the GTS - manufacturer and press figures, not independently verified here",
  "dimensions": "4,520 mm long at launch, 4,524 mm from 1988; 1,837 mm wide 1987-1992 and 1,890 mm from 1993 with the GTS arches",
  "cambelt_service": "Belt also drives the water and oil pumps; published intervals range from four years or 40,000-60,000 miles to Porsche's 50,000 miles or five to seven years"
 },
 "summary": "The Porsche 928 was conceived as the car that would replace the 911. Ernst Fuhrmann's management believed the rear-engined car had run out of development after thirteen years, and from 1971-72 Porsche drew a clean-sheet grand tourer: a water-cooled all-aluminium V8 at the front, a transaxle at the back, close to 50:50 weight distribution, and a new passive-steering rear suspension christened the Weissach axle. It was shown at Geneva in March 1977, sold as a 1978 model, and won European Car of the Year - still the only sports car ever to do so. The succession never took place. Peter Schutz kept the 911 in production, the expected legislation against rear engines never arrived, and the 928 was discontinued in 1995 while the 911 continued. Across seventeen years the engine grew from 4.5 to 5.4 litres and from 240 to 350 PS through the S, S2, S4, GT and GTS. Porsche gives the total as 61,056 cars; other tabulations do not agree.",
 "history": "## The Car Meant to Replace the 911\nErnst Fuhrmann took charge of Porsche in 1972 holding that the 911, then thirteen years old, was at the end of its development. Design studies for a successor began in 1971 and the project hardened in February 1972. Anatole Lapine styled it, Wolfhelm Gorissen directed the project, Hans Clausecker ran the suspension testing and Hans-Georg Kasten drew much of the interior and exterior detail. The brief was a fast, comfortable, roomy car with a sports car's responses and none of the rear-engine layout's inherited habits. A prototype was running by 1973, but the oil crisis pushed the launch back to the Geneva show of March 1977, with deliveries beginning that autumn as 1978 models. The succession never happened: Peter Schutz, who took over in 1981, chose to sell both cars, the anticipated legislation against rear-engined vehicles never materialised, and the 911 outlived the 928. Porsche's own accounts are not quite consistent on the original intent - its transaxle press kit states the 928 was designed as the 911's replacement, while the Christophorus anniversary feature prefers to describe it as Porsche's first Gran Turismo rather than a direct successor.\n\n## Alloy V8, Rear Transaxle, Weissach Axle\nThe engine was a water-cooled, all-aluminium 90-degree V8 of 4,474 cc, the first V8 in a road-going Porsche and, by the company's account, the first water-cooled V8 in a European production car. It drove a rear-mounted transaxle through a rigid torque tube - Porsche called the shaft inside it the fast shaft - producing close to 50:50 weight distribution. The body was a galvanised steel monocoque with aluminium doors, bonnet and front wings, and the polyurethane-faced bumpers were engineered to shrug off impacts at up to 8 km/h without denting. The rear suspension was the car's most durable engineering idea. A semi-trailing arm layout will toe-out under the forward weight transfer of a lifted throttle, which is exactly when a driver least wants it; Porsche replaced the forward bushing of each arm with a short link so that the same loads pull the hub into toe-in instead. The effect was to blunt lift-off oversteer without raising cornering speed, and versions of the idea reached the 993-generation 911 and, in active form, much later cars.\n\n## Car of the Year 1978\nThe 928 won European Car of the Year for 1978, an award that normally goes to mass-market family cars, and it remains the only sports car to have taken it. That verdict has aged better than the launch reception did. Porsche's own customers were sceptical of a Porsche neither air-cooled nor rear-engined, and the first American cars had a difficult year: the federal recall record lists nine campaigns against 1978 model-year 928s, six of them opened on a single day, 2 June 1978, from cracking front suspension adjusters to loose roof mouldings.\n\n## Seventeen Years of Increments\nThe 928 was never redesigned, only enlarged. The 928 S of 1980 took the engine to 4,664 cc and 300 PS and added front and rear spoilers; the S2 of 1984 raised it to 310 PS and offered ABS. For 1985 North America received a 5.0-litre 32-valve four-cam engine, which reached the rest of the world in 1987 as the S4 at 320 PS with a smoothed nose and new tail. From 1985 the belt drove only the exhaust camshafts, the intakes taken off them by roller chain. Porsche then withdrew the manual gearbox from the S4 for 1990 and answered the complaints with the GT: manual only, 330 PS, a 40 per cent ZF limited-slip differential as standard, 2,078 built.\n\n## The GTS and the End of the Line\nThe last car was the best. The GTS of 1992 stretched the V8 to 5,397 cc and 350 PS, widened the rear arches and fitted larger front brakes and a new wheel design. It also arrived into a collapsing market: sales had fallen since 1989 and did not recover, at 955 cars in 1992, then 811, 645 and 476 before production stopped in 1995. Of 2,904 GTS built, 406 came to the United States. The car meant to succeed the 911 was withdrawn while the 911 carried on, and the model line spent two decades known as the cheapest way into a V8 Porsche - a reputation from which the GTS has now separated itself.",
 "marketNotes": "The 928 market is not one market. As of August 2026, classic.com's benchmarks read: 928 S2 at $12,637; 928 S4 at $30,434 overall, splitting to $26,187 for automatics and $38,713 for manuals; 928 GT at $46,710 and trending down; and 928 GTS at $57,432 for automatics but $137,775 for manuals, both trending up. The recorded extremes for the model line run from $2,050 for a 1985 S2 in June 2025 to $269,000 for a 9,000-mile 1994 GTS manual in October 2025, with the manual GTS average sale sitting at $138,441 as of August 2026. An S4 outlier - $162,400 in August 2026 for a 1987 Club Sport prototype campaigned by Jochen Mass - shows that provenance can override variant, but only occasionally. Auction evidence tracks the same split. RM Sotheby's sold a 1995 GTS five-speed with fewer than 16,650 miles for $406,500 at Monterey in 2022 - one of the 26 manual GTS delivered to the United States for that model year, and the house's published sold-for figure rather than a hammer price. An automatic 1995 GTS with about 12,000 miles had made $89,600 at Amelia Island in 2019, and in the United Kingdom a 40,639-mile right-hand-drive automatic GTS made 49,500 pounds at the Silverstone Festival Classic Sale in August 2023. The distance between the manual and automatic figures is consistent across both the benchmark data and the auction record.",
 "whatToLookFor": "Documentation of the cambelt and water pump service is the first thing to establish, in writing and with dates, because the interval is time-based as much as mileage-based and a low-mileage car that has sat is not exempt. On 32-valve engines the consequence of getting this wrong is bent valves rather than a tow home. Establish which engine the car actually has and whether it matches the claimed year and market; North American cars ran materially lower outputs than European ones in the early years, and engine swaps are not unknown. The torque tube and its flex plate reward an annual check: incorrect flex plate tension loads the crankshaft thrust bearing, and any fore-and-aft movement in the crankshaft points at a rebuild rather than a repair. Cooling is expensive to neglect - a replacement radiator can pass 1,000 pounds - so receipts for coolant changes and radiator work count for more than they look. On 1987-on cars the LH-Jetronic 2.3 ECU, EZK ignition unit and mass airflow sensor are the usual sources of poor running, and the fuseboard, relays and ECUs live in the passenger footwell where water ingress finds them. Test every electrical function individually. The shell is galvanised and resists corrosion better than most of its contemporaries, but sills, subframe mountings, wheelarches, the tailgate aperture and screen surrounds still repay close inspection. Early cars with the chequered Pasha trim split at the seams. Where a car is presented as a Club Sport, SE or GT, the small production numbers make verification of chassis and option codes proportionate rather than fussy.",
 "commonProblems": "The defining liability is the timing belt, which on all 928s also drives the water and oil pumps. Published intervals do not agree: Classic & Sports Car and Classics World both give four years or 60,000 miles, StuttCars gives four to five years or about 40,000 miles, and the Rennlist 928 engine FAQ reports a factory recommendation of 50,000 miles or five to seven years with many owners working to a shorter cycle on the grounds that belts age whether or not the car is driven. Where the engine is an interference design a failure bends valves; the Rennlist FAQ places the boundary at the 1985 32-valve engines and describes the earlier 16-valve units as non-interference, while Petrolicious puts piston-to-valve contact as far back as the 1980 4.7-litre S. The tensioner is itself a service item, oil-filled and prone to false warnings when empty or when its boot has cracked. Beyond the belt: engine mounts collapse and cause vibration; radiators corrode and are costly to replace; head bolt failures affected 1986-1989 S4 engines before a thicker casting and longer bolts arrived for 1989; some early GTS engines suffered cylinder liner problems; and oil smoke on start-up or overrun points at valve guides or bores. Automatics need their fluid changed and will slip or engage late if they have not been. Manuals suffer worn synchromesh. NHTSA recorded a catalytic converter heat-shield fire risk campaign in 1989 and a cracking plastic fuel gauge mounting nut campaign in 1990.",
 "valueTrajectory": "For most of its afterlife the 928 was the cheapest route to a V8 Porsche, and it was priced as a depreciating luxury coupe with an intimidating service schedule rather than as a collector car. That is still broadly true of the S, S2 and S4, which as of August 2026 carry classic.com benchmarks of $12,637, and $26,187 to $38,713 respectively depending on transmission, with a recorded floor of $2,050 for an S2 in June 2025. The GTS has left that market. Its manual benchmark of $137,775 as of August 2026 is close to five times the automatic S4 figure and more than double the $57,432 benchmark for an automatic GTS, and the manual line is trending up while the GT, at $46,710, is trending down. The RM Sotheby's Monterey result of $406,500 in 2022 for a low-mileage 1995 manual car sits well above the benchmark and reflects how few of them exist: 26 were delivered to the United States for that model year, against 47 automatics. The pattern is a market sorting on three things at once - the final engine, three pedals, and mileage - and paying comparatively little for anything that lacks all three.",
 "overallConfidence": "high",
 "sources": [
  {
   "ref": "porsche-presskit-928",
   "title": "The Porsche 928",
   "url": "https://newsroom.porsche.com/en/press-kits/Forever-Young.-Celebrating-Transaxle/Porsche-928.html",
   "publisher": "Dr. Ing. h.c. F. Porsche AG",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Porsche's transaxle press kit: states the 911 was held to have reached the end of its development after 13 years and the 928 was designed as its replacement; 1977 Geneva debut; transaxle, water-cooled aluminium V8, Weissach passive-steering rear axle; Car of the Year 1978 as the only sports car so honoured; 61,056 built to 1995."
  },
  {
   "ref": "porsche-christophorus-928",
   "title": "Porsche Takes the Plunge",
   "url": "https://newsroom.porsche.com/en/christophorus/porsche-40-years-928-courage-development-transaxle-andrew-phinney-hans-clausecker-hans-georg-kasten-14622.html",
   "publisher": "Christophorus / Dr. Ing. h.c. F. Porsche AG",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Development began February 1972; Geneva March 1977; production ended 1995 after 61,056 cars; Fuhrmann's 'radical renunciation of the rear-engine principle'; the fast shaft inside the torque tube; first water-cooled V8 in a European production car; 240 to 350 hp; near-50:50 distribution; bumpers rated to 8 km/h; names Gorissen, Clausecker and Kasten. Frames the car as Porsche's first Gran Turismo rather than a direct 911 replacement."
  },
  {
   "ref": "wikipedia-928",
   "title": "Porsche 928",
   "url": "https://en.wikipedia.org/wiki/Porsche_928",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Aggregated reference: 1971 design studies, Fuhrmann's rationale, Schutz's decision to sell both cars, outputs by year and market (240 PS, 300, 310, 288 hp NA, 320 S4, 330 GT, 350 GTS), transmission-mix percentages, belt-and-chain valvetrain from 1985, and the variant table (17,669 / 8,315 / 14,347 / 15,682 / 19 CS / 42 SE / 2,078 GT / 2,904 GTS = 61,056), with GT 396 for US-Canada, GTS 406 for the US and 77 US cars for 1995, Weissach Edition 202, 50th Jubilee 141."
  },
  {
   "ref": "wikipedia-weissach-axle",
   "title": "Weissach axle",
   "url": "https://en.wikipedia.org/wiki/Weissach_axle",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Describes the axle as a semi-trailing arm variant in which the frontmost bushing is replaced by a short link so deceleration pulls the hubs into toe-in; first used in 1978 in the 928 and developed further for the 993; attributes the name both to the town of Weissach and to a German backronym."
  },
  {
   "ref": "stuttcars-production",
   "title": "Porsche 928 Production Numbers",
   "url": "https://www.stuttcars.com/porsche-928-production-numbers/",
   "publisher": "StuttCars",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Year-by-year production table stating a grand total of 60,870 cars against Porsche's 61,056, and supplying the annual figures used here: 3,860 (1978), 5,437 (1979), 5,035 (1984), 3,049 (1990), 2,037 (1991), 955, 811, 645 and 476 for 1992-1995."
  },
  {
   "ref": "stuttcars-buyers-guide",
   "title": "Porsche 928 Buyer's Guide: Everything You Need to Know",
   "url": "https://www.stuttcars.com/porsche-buyers-guides/porsche-928-buyers-guide/",
   "publisher": "StuttCars",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Gives a cambelt interval of four to five years or about 40,000 miles, describes the engine as an interference design without qualification, and lists engine mount, cooling, electrical, automatic transmission and torque tube bearing faults with indicative costs."
  },
  {
   "ref": "supercarnostalgia-928",
   "title": "Porsche 928 Guide",
   "url": "https://supercarnostalgia.com/blog/porsche-928",
   "publisher": "Supercar Nostalgia",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Engine-code detail for the 4.5-litre cars (M28/01 to M28/14), 240 bhp at 5,500 rpm and 257 lb-ft for Europe against 230 bhp for the US and Japan, 1,450 kg, 143 mph and 6.8 seconds to 62 mph. States a 4.5-litre total of 17,864 for 1977-1982 and 205 Weissach Special Edition cars, both conflicting with Wikipedia."
  },
  {
   "ref": "rennlist-engine-faq",
   "title": "Porsche 928 Engine FAQ",
   "url": "https://rennlist.com/porsche-928-faq/porsche-928-engine-faq/",
   "publisher": "Rennlist",
   "sourceType": "club-forum",
   "reliability": "low",
   "notes": "Owner-maintained FAQ: factory belt interval of 50,000 miles or five to seven years, with many owners using four to five years because belts age regardless of mileage; states pre-1985 16-valve engines are non-interference and 1985-on 32-valve engines are interference and will bend valves; details the oil-filled tensioner and its false tension warnings. Used for fault patterns and owner practice only."
  },
  {
   "ref": "classicandsportscar-928",
   "title": "Porsche 928 buyer's guide: what to pay and what to look for",
   "url": "https://www.classicandsportscar.com/features/buyers-guide-porsche-928",
   "publisher": "Classic & Sports Car",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Dated chronology (Geneva March 1977, Car of the Year 1978, S2 September 1983, S4 October 1986, GT February 1989, GTS September 1991, production ends August 1995); 240 bhp at 5,500 rpm and 257 lb-ft rising to 350 bhp at 5,700 rpm and 362 lb-ft at 4,250 rpm; manuals about 20 per cent of production; four-year/60,000-mile cambelt; 1986-89 S4 head bolt failures cured for 1989; radiator over 1,000 pounds; LH-Jetronic 2.3, EZK and MAF faults; 1,471-1,600 kg."
  },
  {
   "ref": "classicsworld-928",
   "title": "Porsche 928 buyer's guide",
   "url": "https://classicsworld.co.uk/guides/porsche-928-buyers-guide/",
   "publisher": "Classics World",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Cambelt every four years or 60,000 miles at 1,000-1,500 pounds with the water pump, and states that on 5.0-litre and larger engines valves and pistons collide if the belt breaks; annual torque tube and flex plate checks because incorrect flex plate tension destroys the crankshaft thrust bearing; early GTS cylinder liner problems; over 80 per cent automatic; 61,056 built with 4,500 to the UK."
  },
  {
   "ref": "petrolicious-928",
   "title": "Porsche 928 Buying Guide",
   "url": "https://petrolicious.com/articles/porsche-928-buying-guide",
   "publisher": "Petrolicious",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Variant chronology with the 1985 S3 as a North America-only 288 bhp five-litre car; states that from 1980 on the 4.7-litre S engine valves can contact pistons if the belt fails, conflicting with the Rennlist FAQ; porous cylinder liners on some GTS engines, Pasha trim seam failure and ECU failure as the worst case."
  },
  {
   "ref": "nhtsa-928-recalls",
   "title": "NHTSA recallsByVehicle: Porsche 928",
   "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=porsche&model=928&modelYear=1978",
   "publisher": "National Highway Traffic Safety Administration",
   "sourceType": "government",
   "reliability": "high",
   "notes": "Federal recall record. Nine campaigns list the 1978 model year, six received on 2 June 1978: 78V119000 steering arm bolts, 78V120000 sticking cruise control switch, 78V121000 cracking front caster and camber adjusters, 78V122000 handbrake cable chafing, 78V123000 twisted brake hoses, 78V124000 insecure roof mouldings. Later years return 89V106000 (catalytic converter heat shield, underbody fire risk), 90V117000 (cracking fuel gauge mounting nut) and 92V092000 (automatic transmission filler piece blocking kickdown)."
  },
  {
   "ref": "classic-928",
   "title": "Porsche 928 Market",
   "url": "https://www.classic.com/m/porsche/928/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Model-line market page consulted August 2026: a 928 S2 benchmark of $12,637 and a 928 GT benchmark of $46,710, and the lowest tracked sale for the model line at $2,050 for a 1985 928 S2 on 25 June 2025."
  },
  {
   "ref": "classic-928-gts-manual",
   "title": "Porsche 928 GTS - Manual Market",
   "url": "https://www.classic.com/m/porsche/928/928-gts/manual/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Manual GTS benchmark of $137,775 trending upward as of August 2026, average sale $138,441, highest recorded sale $269,000 for a 9,000-mile 1994 car on 9 October 2025 and lowest $36,608 for a 1993 car on 14 September 2024."
  },
  {
   "ref": "classic-928-gts-auto",
   "title": "Porsche 928 GTS - Automatic Market",
   "url": "https://www.classic.com/m/porsche/928/928-gts/automatic/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Automatic GTS benchmark of $57,432 trending upward as of August 2026, lowest recorded sale $14,062 for a 1995 car on 29 November 2023. Establishes the gap between manual and automatic GTS."
  },
  {
   "ref": "classic-928-gt",
   "title": "Porsche 928 GT Market",
   "url": "https://www.classic.com/m/porsche/928/928-gt/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "928 GT benchmark of $46,710 trending downward as of August 2026, average sale $47,258, highest recorded sale $107,928 for a 1991 car in Miami on 23 January 2026 and lowest $5,400 on 29 November 2023."
  },
  {
   "ref": "classic-928-s4",
   "title": "Porsche 928 S4 Market",
   "url": "https://www.classic.com/m/porsche/928/928-s4/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "928 S4 benchmark of $30,434 as of August 2026, splitting to $26,187 automatic and $38,713 manual; highest recorded sale $162,400 on 14 August 2026 for a 1987 Club Sport prototype campaigned by Jochen Mass, lowest $5,928 for a 1988 S4 on 17 February 2025."
  },
  {
   "ref": "rm-mo22-gts",
   "title": "1995 Porsche 928 GTS, Monterey 2022",
   "url": "https://rmsothebys.com/auctions/mo22/lots/r0106-1995-porsche-928-gts/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold for $406,500 at Monterey 2022, lot 314. Chassis WP0AA2926SS820074, five-speed manual, fewer than 16,650 miles. Catalogue states just over 2,900 GTS built 1992-1995, a 5.4-litre V8 of 350 horsepower, and one of just 26 five-speed manuals supplied to the United States for 1995."
  },
  {
   "ref": "rm-am19-gts",
   "title": "1995 Porsche 928 GTS, Amelia Island 2019",
   "url": "https://rmsothebys.com/auctions/am19/lots/r0028-1995-porsche-928-gts/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold for $89,600 at Amelia Island 2019 from the Youngtimer Collection. Chassis WP0AA292XSS820093, automatic, just over 12,000 miles. Catalogue states 406 GTS sold new in the United States, only 77 for the 1995 model year, and only 47 of those automatic."
  },
  {
   "ref": "iconic-silverstone-gts",
   "title": "1995 Porsche 928 GTS",
   "url": "https://www.iconicauctioneers.com/1995-porsche-928-rec12747-1-silverston-0823",
   "publisher": "Iconic Auctioneers",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold for 49,500 pounds, lot 717, The Classic Sale at Silverstone Festival, 26 August 2023. UK-supplied right-hand-drive final-year GTS, chassis WP0ZZZ92ZRS800510, 5.4 litres and 345 bhp, automatic, 40,639 miles. Catalogue states the GTS was discontinued in 1995 after 2,904 examples."
  }
 ],
 "claims": [
  {
   "section": "history",
   "claimText": "The 928 was developed as a replacement for the 911, on the view held by Ernst Fuhrmann's management that the rear-engined car had reached the end of its development after thirteen years, with design studies from 1971 and the project formally beginning in February 1972.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "porsche-presskit-928",
    "porsche-christophorus-928",
    "wikipedia-928"
   ]
  },
  {
   "section": "history",
   "claimText": "Porsche's own retrospectives characterise the original intent differently: the transaxle press kit says the 928 was designed as the 911's replacement, while the Christophorus fortieth-anniversary feature presents it as Porsche's first Gran Turismo rather than a direct successor.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "porsche-presskit-928",
    "porsche-christophorus-928"
   ],
   "conflictNote": "The Porsche transaxle press kit states the 911 was held to have reached the end of its development after 13 years and that the 928 was designed as its replacement. The Christophorus fortieth-anniversary feature describes the car as Porsche's first Gran Turismo and 'a new continent in the Porsche world' rather than a direct 911 replacement. Both are Porsche corporate publications and neither addresses the other; the difference is not resolved by any source consulted here."
  },
  {
   "section": "history",
   "claimText": "The succession did not happen: Peter Schutz, who took charge in 1981, chose to sell the 911 and the 928 alongside each other, anticipated legislation against rear-engined vehicles never materialised, and the 928 was discontinued in 1995 while the 911 remained in production.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-928",
    "porsche-presskit-928",
    "classicandsportscar-928"
   ]
  },
  {
   "section": "history",
   "claimText": "The 928 won the European Car of the Year award for 1978 and remains the only sports car to have taken the title.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "porsche-presskit-928",
    "wikipedia-928"
   ]
  },
  {
   "section": "specs",
   "claimText": "The layout was a front-mounted, water-cooled, all-aluminium 90-degree V8 driving a rear-mounted transaxle through a rigid torque tube, giving close to 50:50 weight distribution; Porsche describes it as the first water-cooled V8 in a European production car and the first eight-cylinder road-going Porsche.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "porsche-christophorus-928",
    "porsche-presskit-928"
   ]
  },
  {
   "section": "specs",
   "claimText": "The Weissach rear axle is a semi-trailing arm layout in which the forward bushing of each arm is replaced by a short link, so that the forward weight transfer of a lifted throttle or of braking pulls the hub into toe-in instead of toe-out, blunting lift-off oversteer without raising cornering speed.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-weissach-axle",
    "porsche-presskit-928"
   ]
  },
  {
   "section": "specs",
   "claimText": "Across the run the V8 grew from 4,474 cc and 240 PS in European tune to 5,397 cc and 350 PS (345 bhp) at 5,700 rpm with 362 lb-ft at 4,250 rpm in the GTS, by way of 300 PS and 310 PS from the 4,664 cc S and S2 and 320 PS and 330 PS from the 4,957 cc 32-valve S4 and GT; from 1985 the belt drove only the exhaust camshafts, with the intakes taken off them by an internal roller chain.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-928",
    "classicandsportscar-928",
    "supercarnostalgia-928",
    "porsche-christophorus-928"
   ]
  },
  {
   "section": "specs",
   "claimText": "The 928 was offered with a five-speed manual or a Mercedes-Benz-sourced automatic, and the automatic dominated sales, but estimates of the split differ: Wikipedia gives about 40 per cent manual for 1978-1979 and an average of 34 per cent thereafter, Classic & Sports Car puts manuals at roughly 20 per cent of the run, and Classics World says over 80 per cent were automatic.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "wikipedia-928",
    "classicandsportscar-928",
    "classicsworld-928"
   ],
   "conflictNote": "Wikipedia states 1978-79 cars were 60 per cent automatic and that 1980-1995 averaged 34 per cent manual. Classic & Sports Car states manuals were about 20 per cent of production. Classics World states over 80 per cent were automatic. The three cannot all be correct and no source consulted here reconciles them."
  },
  {
   "section": "production",
   "claimText": "The total number of 928s built is not agreed: Porsche states 61,056 and StuttCars publishes a year-by-year table totalling 60,870.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "porsche-presskit-928",
    "porsche-christophorus-928",
    "wikipedia-928",
    "stuttcars-production",
    "classicsworld-928"
   ],
   "conflictNote": "Porsche's transaxle press kit and its Christophorus fortieth-anniversary feature both state 61,056, and Wikipedia's variant table resolves to the same figure, as does Classics World. StuttCars states 60,870 and supports it with a year-by-year table. The 186-car difference is not explained on either side and is not resolved by any source consulted here, so productionTotal is left null."
  },
  {
   "section": "production",
   "claimText": "Commonly quoted variant totals are 8,315 for the 1980-1983 928 S, 14,347 for the 1984-1986 S and S2, 15,682 for the 1987-1991 S4, 2,078 for the 1989-1991 GT and 2,904 for the 1992-1995 GTS, alongside 19 Club Sports, 42 UK-market SE cars and 141 European 50th Jubilee cars. Annual output fell from 3,049 cars in 1990 and 2,037 in 1991 to 955, 811, 645 and 476 across the four GTS model years. Of the 2,904 GTS, 406 went to the United States, only 77 of them for the 1995 model year, comprising 26 five-speed manual cars and 47 automatics.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-928",
    "iconic-silverstone-gts",
    "rm-mo22-gts",
    "stuttcars-production",
    "rm-am19-gts",
    "stuttcars-buyers-guide"
   ]
  },
  {
   "section": "production",
   "claimText": "The 928 GT exists because Porsche withdrew the manual gearbox from the S4 for 1990; it was manual only, rated at 330 PS, fitted with a ZF 40 per cent limited-slip differential as standard, and built in 2,078 examples of which 396 went to the United States and Canada.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-928",
    "classicandsportscar-928",
    "petrolicious-928"
   ]
  },
  {
   "section": "problems",
   "claimText": "Published timing-belt intervals for the 928 do not agree, ranging from four years or about 40,000 miles to four years or 60,000 miles to a factory figure of 50,000 miles or five to seven years; the belt also drives the water and oil pumps, and its oil-filled tensioner is a service item in its own right.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "stuttcars-buyers-guide",
    "classicandsportscar-928",
    "classicsworld-928",
    "rennlist-engine-faq"
   ],
   "conflictNote": "StuttCars gives four to five years or approximately 40,000 miles. Classic & Sports Car and Classics World both give four years or 60,000 miles. The Rennlist 928 engine FAQ reports a factory recommendation of 50,000 miles or five to seven years while noting that many owners work to a four-to-five-year cycle because belts deteriorate with age irrespective of mileage. No source consulted here reconciles the published intervals."
  },
  {
   "section": "problems",
   "claimText": "Sources also disagree about which 928 engines are interference designs, and therefore about when a belt failure bends valves rather than merely stopping the car.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "rennlist-engine-faq",
    "petrolicious-928",
    "classicsworld-928",
    "stuttcars-buyers-guide"
   ],
   "conflictNote": "The Rennlist 928 engine FAQ states that pre-1985 16-valve engines are non-interference and that the 1985-on 32-valve engines are interference and will bend valves. Petrolicious states that from 1980 onward, on the 4.7-litre S engine, valves can contact pistons. Classics World limits the risk to 5.0-litre and larger engines, and StuttCars describes the 928 engine as an interference design without qualification. The boundary is not resolved by any source consulted here."
  },
  {
   "section": "problems",
   "claimText": "The torque tube and its flex plate need periodic checking because incorrect flex plate tension loads the crankshaft thrust bearing, and any fore-and-aft movement of the crankshaft indicates major work rather than a repair.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "classicsworld-928",
    "classicandsportscar-928",
    "stuttcars-buyers-guide"
   ]
  },
  {
   "section": "problems",
   "claimText": "Recurring faults across the range include collapsed engine mounts, corroded radiators costing four figures to replace, cylinder head bolt failures on 1986-1989 S4 engines cured by a thicker casting and longer bolts for 1989, porous cylinder liners on some early GTS engines, and LH-Jetronic 2.3, EZK ignition and mass airflow sensor problems on 1987-on cars.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "classicandsportscar-928",
    "classicsworld-928",
    "petrolicious-928",
    "stuttcars-buyers-guide"
   ]
  },
  {
   "section": "problems",
   "claimText": "The United States federal recall record lists nine campaigns against the 1978 model year, six of them opened on 2 June 1978 covering front caster and camber adjusters, steering arm bolts, brake hose and handbrake cable chafing, a sticking cruise control switch and insecure roof mouldings; later campaigns cover a catalytic converter heat shield underbody fire risk in 1989, a cracking plastic fuel gauge mounting nut in 1990 and an automatic transmission filler piece blocking kickdown in 1992.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "nhtsa-928-recalls"
   ]
  },
  {
   "section": "market",
   "claimText": "As of August 2026 classic.com's benchmarks show the 928 range trading as several separate markets: 928 S2 at $12,637, 928 S4 at $30,434 overall ($26,187 automatic, $38,713 manual), 928 GT at $46,710 and trending down, automatic 928 GTS at $57,432 and manual 928 GTS at $137,775, both GTS figures trending up.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-928",
    "classic-928-s4",
    "classic-928-gt",
    "classic-928-gts-auto",
    "classic-928-gts-manual"
   ]
  },
  {
   "section": "market",
   "claimText": "As of August 2026 classic.com records tracked sales for the model line running from $2,050 for a 1985 928 S2 in June 2025 to $269,000 for a 9,000-mile 1994 GTS manual in October 2025, with an average manual GTS sale of $138,441; an unusual S4 result of $162,400 in August 2026 attached to a 1987 Club Sport prototype campaigned by Jochen Mass.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-928",
    "classic-928-gts-manual",
    "classic-928-s4"
   ]
  },
  {
   "section": "market",
   "claimText": "Low-mileage manual GTS cars sell well above the classic.com benchmark: RM Sotheby's published a sold-for figure of $406,500 at Monterey in 2022 for a 1995 five-speed with fewer than 16,650 miles, against $89,600 at Amelia Island in 2019 for an automatic 1995 car with about 12,000 miles; an ordinary 40,639-mile UK right-hand-drive automatic GTS made 49,500 pounds at the Silverstone Festival Classic Sale in August 2023.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "rm-mo22-gts",
    "rm-am19-gts",
    "iconic-silverstone-gts"
   ]
  },
  {
   "section": "summary",
   "claimText": "The 928 ran for seventeen model years from 1978 to 1995 as a front-engined, water-cooled, transaxle V8 grand tourer, and was never fundamentally redesigned, only enlarged and revised through the S, S2, S4, GT and GTS.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "porsche-presskit-928",
    "classicandsportscar-928",
    "petrolicious-928",
    "wikipedia-928"
   ]
  }
 ]
};
