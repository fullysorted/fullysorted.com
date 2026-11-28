/**
 * Researched model draft - Ferrari Mondial (Mondial 8, Quattrovalvole, 3.2 and t; US model years 1981-1993).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedMondial = {
 "slug": "ferrari/mondial",
 "make": "Ferrari",
 "model": "Mondial",
 "generation": "8, QV, 3.2 and t",
 "generationCode": null,
 "trim": "Coupe and cabriolet",
 "yearStart": 1981,
 "yearEnd": 1993,
 "bodyStyles": [
  "2-door 2+2 coupe (fixed roof), all four series",
  "2-door 2+2 cabriolet (fabric top), from the Quattrovalvole onward"
 ],
 "engines": [
  "Mondial 8: transverse mid-mounted V8, two valves per cylinder, fuel injected, 205 hp and 181 lb-ft in US trim per Sports Car Market",
  "Mondial Quattrovalvole: 2,926 cc transverse V8, four valves per cylinder, in unit with a five-speed transmission; Ferrari quotes 230 hp for US cars and 235 hp for European cars",
  "Mondial 3.2: 3,185 cc transverse V8 (83 x 73 mm bore and stroke), the 328 engine; Ferrari quotes 260 hp for US cars and 270 hp at 7,000 rpm for European cars",
  "Mondial t: 3,405 cc longitudinal V8 shared with the 348, dry-sump lubrication, transverse transmission; Ferrari quotes 300 hp at 7,200 rpm for the first European series, 295 hp for later catalyzed cars per Supercar Nostalgia and TopSpeed; no separate US rating found"
 ],
 "productionTotal": null,
 "productionNotes": "No single production total is stated on this page because the sources do not agree on one. Wikipedia gives 6,149 cars across all variants, a Hagerty owner's account says just over 6,100, and a separate Hagerty article says about 7,000 were sold. The series counts agree in some places and not in others. For the Quattrovalvole, Ferrari's heritage page, Forza and Wikipedia all give 1,145 coupes, and Forza and Wikipedia give 629 cabriolets. For the t cabriolet, Ferrari, Supercar Nostalgia, TopSpeed and Wikipedia all give 1,017. For the t coupe, Ferrari and Wikipedia give 858 while Supercar Nostalgia gives 840. The 3.2 is the least clear: Ferrari's heritage page says the model was produced in a total of 987 units and was available as coupe and cabriolet, while Wikipedia lists 987 coupes and a further 810 cabriolets. Ferrari's own pages for the Quattrovalvole and the t coupe give coupe-only figures as the model total, which suggests the 3.2 page is doing the same, but no source consulted says so outright. For the Mondial 8, Ferrari's heritage page and Wikipedia both give 703. No source separates US-market cars from the total for any series. There is no documented US list price for any Mondial in the sources consulted here: the only figure found is a single owner-forum post for the 1990 Mondial t, below this site's reliability bar, so it is not stated. Period US road tests from Car and Driver and Motor Trend could not be fetched directly; they appear here only as Hagerty reports them. US model years follow classic.com and the NHTSA recall record.",
 "notableTrims": [
  {
   "name": "Mondial 8 coupe",
   "note": "The original two-valve car, 205 hp in US trim. Car and Driver's 0-60 mph time, as Hagerty reports it, was nine seconds, and classic.com's benchmark is the lowest of any Mondial series as of November 2026."
  },
  {
   "name": "Mondial Quattrovalvole coupe and cabriolet",
   "note": "Four valves per cylinder and the arrival of the cabriolet. Sources agree on 1,145 coupes and 629 cabriolets."
  },
  {
   "name": "Mondial 3.2 coupe and cabriolet",
   "note": "The 328 engine at 260 hp in US trim and the first restyle of the nose and tail. The cabriolet count is the least settled figure on the page: 810 by Wikipedia, not separated at all by Ferrari's heritage page."
  },
  {
   "name": "Mondial t coupe",
   "note": "The 348 engine turned longitudinal over a transverse transmission, with ABS and adjustable dampers standard. 858 or 840 built depending on the source. Sports Car Market describes its timing belt service as an engine-out job."
  },
  {
   "name": "Mondial t cabriolet",
   "note": "1,017 built by every source consulted and the highest classic.com benchmark of any Mondial as of November 2026."
  },
  {
   "name": "Mondial t with Valeo clutch",
   "note": "A clutchless manual offered late in production. Supercar Nostalgia understands fewer than ten were built; no other source gives a count."
  }
 ],
 "specs": {
  "layout": "Mid-mounted V8, rear-wheel drive, 2+2 seating; engine transverse on the Mondial 8, QV and 3.2, longitudinal with a transverse transmission on the t",
  "chassis": "Engine, transmission and (on the t) rear suspension carried on a bolted rear subframe removable from below; Pininfarina styling, Carrozzeria Scaglietti bodywork",
  "engine": "Mondial 8 two-valve V8; QV 2,926 cc four-valve V8; 3.2 3,185 cc V8 (83 x 73 mm); t 3,405 cc dry-sump V8",
  "power": "US trim: 205 hp (Mondial 8), 230 hp (QV, Ferrari claim), 260 hp (3.2); t 300 hp at 7,200 rpm first European series, 295 hp later; no US rating published for the t",
  "torque": "181 lb-ft (Mondial 8, US trim); European figures per Wikipedia: 188 lb-ft (QV), 224 lb-ft (3.2), 239 lb-ft at 4,200 rpm (t)",
  "transmission": "Five-speed manual; Valeo electronically actuated clutch optional on late t cars",
  "weight": "t cabriolet: 3,461 lb per Wikipedia, 3,236 lb per Supercar Nostalgia's factory figure; t coupe 3,144 lb per Supercar Nostalgia; unresolved",
  "acceleration": "Mondial 8: 9 seconds to 60 mph per Car and Driver as reported by Hagerty, 8.2 seconds per Wikipedia; t: 0-60 mph from 5.6 to 6.5 seconds depending on source",
  "top_speed": "Mondial 8 130 mph (Car and Driver, via Hagerty); t 158 mph",
  "wheelbase": "104.3 in (2,650 mm), Mondial 8",
  "suspension_and_brakes": "t: ABS standard; electronically controlled dampers with hard, medium and soft settings",
  "timing_belt_service": "Every 30,000 miles or five years per Sports Car Market; about $7,500 to start per Forza, around $8,000 per Sports Car Market; engine-out on the t",
  "us_model_years": "Mondial 8 to 1982, 3.2 coupe 1985-1988, t 1989-1993 (classic.com); NHTSA recalls cover 1983 and 1984 model-year cars",
  "production_reported": "6,149 (Wikipedia), just over 6,100 (Hagerty), about 7,000 (Hagerty); unresolved",
  "us_list_price": "Not documented by any source above the reliability bar"
 },
 "summary": "The Mondial is Ferrari's mid-engined V8 four-seater, built as a coupe throughout and as a cabriolet from the 1983 model year, in four series: the two-valve Mondial 8, the four-valve Quattrovalvole, the 3.2 and the t. Styling is credited to Pininfarina, with bodies by Carrozzeria Scaglietti. US output ran from 205 hp in the Mondial 8 to 260 hp in the 3.2. The t took the 3,405 cc engine shared with the 348, turned it from transverse to longitudinal and coupled it to a transverse transmission, which is where the letter t comes from. Total production is not settled: Wikipedia gives 6,149, a Hagerty owner's account just over 6,100, and another Hagerty article about 7,000. Forza puts the timing belt service at about $7,500 to start and Sports Car Market at around $8,000, and on the t it is an engine-out job. As of November 2026 classic.com's benchmark runs from $33,626 for a Mondial 8 to $63,267 for a t cabriolet.",
 "history": "## Why it exists\n\nThe Mondial put a mid-engined Ferrari V8 and a pair of rear seats in the same car. The Mondial 8 was introduced at the 1980 Geneva show with styling by Pininfarina and bodywork by Carrozzeria Scaglietti; Wikipedia credits the original design to Pierangelo Andreani and the later revisions to Leonardo Fioravanti, and Hagerty notes that the body came from Pininfarina rather than from Bertone. The Mondial 8 rides on a 104.3 in (2,650 mm) wheelbase, and Forza records that the car weighed around 450 pounds more than the 308. Motor Trend's period verdict, as Hagerty quotes it, was that the car is not the greatest Ferrari ever issued by Maranello, but it is by no means the least.\n\n## Mondial 8 and Quattrovalvole\n\nThe Mondial 8 used a transverse two-valve V8 with fuel injection. In US trim it made 205 hp and 181 lb-ft by the figures in both Sports Car Market and Forza. Ferrari's heritage page gives a claimed 214 hp and a Hagerty owner's account 213 hp for the early injected car against 258 hp for the carbureted 308s; neither names a market. Car and Driver's test car, as Hagerty reports it, took nine seconds to reach 60 mph and topped out at 130 mph. NHTSA's recall record for the 1984 Mondial lists production dates from May 1981, so US cars were built from early in the run. The Quattrovalvole followed in 1982 with four valves per cylinder on a 2,926 cc V8, still transverse and in unit with a five-speed transmission. Ferrari gives 230 hp for US cars and 235 hp for European cars. Sources agree on 1,145 QV coupes, and the cabriolet was added for 1983, with 629 built.\n\n## The 3.2\n\nThe Mondial 3.2 was first shown at the Frankfurt show in September 1985 and brought the first change to the body, with revised front and rear ends. Its 3,185 cc V8, with 83 x 73 mm bore and stroke, is the 328 engine; Ferrari quotes 270 hp for European cars and 260 hp for US cars. classic.com lists the 3.2 coupe for model years 1985 to 1988. How many were built is the first open question on this page. Ferrari's heritage page says 987 units for a model available as coupe and cabriolet; Wikipedia gives 987 coupes and a further 810 cabriolets.\n\n## The t: turning the engine around\n\nThe Mondial t was introduced at the Geneva show in March 1989. Its 3,405 cc V8, shared with the 348, was turned from transverse to longitudinal and coupled to a transverse transmission, and the letter t refers to that arrangement. The engine gained dry-sump lubrication, ABS became standard, and electronically controlled dampers gave hard, medium and soft settings. Engine, transmission and rear suspension sit on a bolted rear subframe that comes out as one assembly. Ferrari quotes 300 hp at 7,200 rpm for the first European series; Supercar Nostalgia and TopSpeed record 295 hp for later cars once catalytic converters arrived, and no source consulted gives a separate US rating. Late in production a Valeo clutchless manual became an option, and Supercar Nostalgia understands fewer than ten were built. Three sources quote a top speed of 158 mph.\n\n## The end of the line\n\nProduction ended in 1993. Ferrari's heritage pages count the t coupe at 858 cars in the chassis range 79596 to 97698 and the t cabriolet at 1,017 in the range 80339 to 97733. Supercar Nostalgia counts 840 t coupes. Either way the open car outsold the closed one in the final series.",
 "marketNotes": "As of November 2026 classic.com's market benchmark for each Mondial series is: Mondial 8 $33,626; QV coupe $37,685; QV cabriolet $42,150; 3.2 coupe $38,951; 3.2 cabriolet $48,595; t coupe $60,273; t cabriolet $63,267. For the Mondial 8, the lowest US-dollar sale classic.com records is $21,750 for a 1982 project car on October 20, 2025, and the highest $66,666 for a 1982 car on November 22, 2021. On the 1990 t coupe page, the US-dollar sales run from $34,000 on November 23, 2018 to $81,051 for a five-speed coupe on February 9, 2024. classic.com's 1989 t cabriolet page carries a benchmark of $62,235 and a sale of $67,000 in Monterey on May 12, 2026, reported from Bring a Trailer. The 1989 t cabriolet benchmark of $62,235 covers that model year alone, against $63,267 for all t cabriolets. classic.com does not say whether these figures include buyer's premium. Sports Car Market, in June 2026, describes Mondial 8 cars in the mid-$20,000 area and t models starting upwards of $55,000 for a good example. No auction-house lot page was fetched for this research, so no individual catalog result is quoted.",
 "whatToLookFor": "Sports Car Market gives the timing belt interval as every 30,000 miles or five years and notes that a broken belt means a broken engine. A car whose last belt service falls inside that interval and one whose service is due differ by the cost of the job, which Forza puts at about $7,500 to start and Sports Car Market at around $8,000. On the t, Sports Car Market describes the service as a mandatory engine-out job, and Forza describes removing the engine and transaxle entirely. Forza reports that early t cars can suffer excessive chain tensioner wear and calls the inner support bearing for the cam-drive jackshaft problematic. Forza also describes electrical gremlins that can be a recurring nightmare and a fuse and relay board inadequate for the electrical load. Sports Car Market reports that the sunroofs rarely work properly and often leak, and that second-gear synchros can be sluggish until the transmission oil is warm. NHTSA lists a fuel tank abrasion campaign for 1983 cars (85V003000), remedied with polyurethane cushions, and a rear hub campaign for 1984 cars (86V078000), remedied by replacing both rear hub carrier assemblies. Ferrari's heritage page lists a Valeo electronically actuated clutch as a late option on the t, and Supercar Nostalgia understands fewer than ten Valeo cars were built. As of November 2026 classic.com's benchmark is higher for the cabriolet than for the coupe in each of the QV, 3.2 and t series.",
 "commonProblems": "Sports Car Market puts the timing belt interval at 30,000 miles or five years and the bill at around $8,000; Forza says the twice-a-decade service starts at about $7,500. On the t the longitudinal engine makes it a mandatory engine-out job, per Sports Car Market, and Forza advises removing engine and transaxle entirely for the service. Forza describes electrical gremlins that can be a recurring nightmare and a fuse and relay board that is inadequate for the electrical load. Early t cars can suffer excessive chain tensioner wear, and the inner support bearing for the cam-drive jackshaft is described by Forza as problematic. Sports Car Market reports that sunroofs rarely work properly and often leak, and that second-gear synchros can be sluggish until the transmission oil is warm. NHTSA lists two early campaigns. Campaign 85V003000 covers 181 1983 Mondials whose fuel tank could abrade against surrounding panels, with protective polyurethane cushions as the remedy. Campaign 86V078000 covers 422 1984 Mondials whose rear wheel bearings and hub assemblies could deteriorate after high-load impacts, with replacement of both rear hub carrier assemblies as the remedy.",
 "valueTrajectory": "Forza's price table, published in April 2024, put a Mondial 8 at $25,000 to $30,000, a Mondial 3.2 at $40,000 to $50,000, a t coupe also at $40,000 to $50,000 and a t cabriolet at $50,000 to $70,000. Sports Car Market, in June 2026, put Mondial 8 cars in the mid-$20,000 area and t models upwards of $55,000 for a good example. As of November 2026 classic.com's market benchmarks, a separate measure from either price guide, are $33,626 for the Mondial 8, $38,951 for the 3.2 coupe, $60,273 for the t coupe and $63,267 for the t cabriolet. The spread inside a single series is wide. On classic.com's record the 1990 t coupe has sold for as little as $34,000 in November 2018 and as much as $81,051 in February 2024, and the Mondial 8 for $21,750 as a project car in October 2025 and $66,666 in November 2021. Hagerty records that Mondial values rose sharply in 2015 and have been essentially flat since the beginning of 2016.",
 "overallConfidence": "medium",
 "sources": [
  {
   "ref": "ferrari-8",
   "title": "Mondial 8",
   "url": "https://www.ferrari.com/en-EN/auto/mondial-8",
   "publisher": "Ferrari S.p.A.",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Heritage page for the Mondial 8: produced 1980 to 1982, 703 examples in chassis range 31075 to 41727; claimed 214 hp, with no rpm and no market stated."
  },
  {
   "ref": "ferrari-32",
   "title": "3.2 Mondial",
   "url": "https://www.ferrari.com/en-US/auto/3.2-mondial",
   "publisher": "Ferrari S.p.A.",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Heritage page for the 3.2: 987 units from 1985 to 1989 in chassis range 58277 to 79671, available in coupe and cabriolet form (no split given); 3,185 cc, 83 x 73 mm; 270 hp at 7,000 rpm European, 260 hp US; first body restyle with revised front and rear ends."
  },
  {
   "ref": "ferrari-qv",
   "title": "Mondial Quattrovalvole",
   "url": "https://www.ferrari.com/en-EN/auto/mondial-quattrovalvole",
   "publisher": "Ferrari S.p.A.",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Heritage page for the QV: 1,145 built 1982-1985 in chassis range 41737 to 59131; 2,926 cc; four valves per cylinder instead of two; transverse engine in unit with a five-speed transmission; 235 hp European, 230 hp US."
  },
  {
   "ref": "ferrari-t",
   "title": "Mondial t",
   "url": "https://www.ferrari.com/en-EN/auto/mondial-t",
   "publisher": "Ferrari S.p.A.",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Heritage page for the t coupe: 858 built 1989-1993 in chassis range 79596 to 97698; 3,405 cc longitudinal V8 with transverse transmission, hence the t; dry sump; 300 hp at 7,200 rpm first European series; ABS standard; electronic dampers; bolted rear subframe; Valeo clutch option."
  },
  {
   "ref": "ferrari-t-cab",
   "title": "Mondial t Cabriolet",
   "url": "https://www.ferrari.com/en-EN/auto/mondial-t-cabriolet",
   "publisher": "Ferrari S.p.A.",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Heritage page for the t cabriolet: 1,017 built 1989-1993 in chassis range 80339 to 97733; 300 hp at 7,200 rpm first European series; Pininfarina styling revised."
  },
  {
   "ref": "wikipedia",
   "title": "Ferrari Mondial",
   "url": "https://en.wikipedia.org/wiki/Ferrari_Mondial",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Series counts (703 Mondial 8; 1,145 QV coupes; 629 QV cabriolets; 987 3.2 coupes and 810 3.2 cabriolets; 858 t coupes and 1,017 t cabriolets), total 6,149; European torque figures; t cabriolet 3,461 lb; 0-60 times; Pininfarina, Scaglietti, Andreani, Fioravanti; 104.3 in wheelbase; engine removal for belt service; 3.2 launch at Frankfurt September 1985."
  },
  {
   "ref": "classic-mondial",
   "title": "Ferrari Mondial Market",
   "url": "https://www.classic.com/m/ferrari/mondial/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of November 2026, market benchmarks by series: Mondial 8 $33,626; QV coupe $37,685; QV cabriolet $42,150; 3.2 coupe $38,951; 3.2 cabriolet $48,595; t coupe $60,273; t cabriolet $63,267; model-year spans for each series."
  },
  {
   "ref": "classic-8",
   "title": "Ferrari Mondial - 8 Market",
   "url": "https://classic.com/m/ferrari/mondial/8",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of November 2026: benchmark $33,626; lowest US-dollar sale $21,750 for a 1982 project car on October 20, 2025; highest $66,666 for a 1982 car on November 22, 2021; Mondial 8 introduced at the 1980 Geneva show; 1980 to 1982."
  },
  {
   "ref": "classic-32-coupe",
   "title": "Ferrari Mondial 3.2 Coupe Market",
   "url": "https://www.classic.com/m/ferrari/mondial/32-coupe/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of November 2026: benchmark $38,951; model years 1985 to 1988 for the 3.2 coupe; sales shown are in mixed currencies and not converted, so no individual sale from it is quoted here."
  },
  {
   "ref": "classic-t-coupe-1990",
   "title": "Ferrari Mondial t Coupe, 1990 Market",
   "url": "https://www.classic.com/m/ferrari/mondial/t-coupe/year-1990/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of November 2026: t coupe benchmark $60,273; 1990 t coupe US-dollar sales from $34,000 on November 23, 2018 to $81,051 for a five-speed coupe on February 9, 2024; t coupe model years 1989 to 1993."
  },
  {
   "ref": "classic-t-cab-1989",
   "title": "Ferrari Mondial t Cabriolet, 1989 Market",
   "url": "https://www.classic.com/m/ferrari/mondial/t-cabriolet/year-1989/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of November 2026: 1989 t cabriolet benchmark $62,235; a $67,000 sale in Monterey on May 12, 2026 reported from Bring a Trailer; t cabriolet model years 1989 to 1993."
  },
  {
   "ref": "hagerty-accessible",
   "title": "Often snubbed, the Ferrari Mondial remains the most accessible Prancing Horse",
   "url": "https://www.hagerty.com/media/?p=7729",
   "publisher": "Hagerty Media",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Editorial (not a valuation page): about 7,000 sold over 14 years; Pininfarina not Bertone body; 260 hp from 1986; t longitudinal engine with transverse transmission; Car and Driver test of 9 seconds to 60 mph and 130 mph; Motor Trend verdict quoted; values up in 2015 and flat since 2016."
  },
  {
   "ref": "hagerty-qv",
   "title": "Say a little prayer for me - I bought a 1983 Ferrari Mondial QV",
   "url": "https://www.hagerty.com/media/?p=284072",
   "publisher": "Hagerty Media",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Owner account by Adrian Clarke: just over 6,100 Mondials of all variants built by 1993; early injected car 213 hp against 258 hp for carbureted GT4 and 308s; QV 243 hp. Market unstated for power figures; the car described is not a US car, so no price from it is used."
  },
  {
   "ref": "forza-214",
   "title": "Comfortable Performance",
   "url": "https://www.forza-mag.com/issues/214/articles/comfortable-performance",
   "publisher": "Forza",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "US Ferrari magazine, April 2024, with Michael Sheehan's market and garage notes: 1,145 QV coupes and 629 cabriolets; Mondial 8 205 hp US trim; 3.2 260 hp; t 300 hp with 348 engine; around 450 pounds heavier than the 308; timing belt service from about $7,500; engine and transaxle out for belt service; electrical, fuse and relay board, chain tensioner and jackshaft bearing problems; price table by series."
  },
  {
   "ref": "scm-mondial",
   "title": "And Then There Was One",
   "url": "https://www.sportscarmarket.com/columns/profiles/affordable-classics/and-then-there-was-one",
   "publisher": "Sports Car Market",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "US market column by Rory Jurnecka, June 15, 2026: Mondial 8 205 hp and 181 lb-ft; QV 235 hp; 3.2 260 hp; t 300 hp; belt service every 30,000 miles or five years at around $8,000, engine-out on the t; sunroof leaks; second-gear synchros; Mondial 8 in the mid-$20,000 area and t models upwards of $55,000."
  },
  {
   "ref": "supercarnostalgia-t",
   "title": "Guide: Ferrari Mondial t",
   "url": "https://supercarnostalgia.com/blog/ferrari-mondial-t",
   "publisher": "Supercar Nostalgia",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Model guide: 840 t coupes and 1,017 t cabriolets; 295 hp after catalytic converters; factory weights 1,426 kg coupe and 1,468 kg cabriolet (converted here to 3,144 lb and 3,236 lb); top speed 158 mph; Geneva launch March 1989; Valeo clutchless option with fewer than ten built; engine shared with the 348."
  },
  {
   "ref": "conceptcarz-t",
   "title": "1990 Ferrari Mondial t",
   "url": "https://www.conceptcarz.com/s21927/ferrari-mondial-t.aspx",
   "publisher": "Conceptcarz",
   "sourceType": "specialist",
   "reliability": "low",
   "notes": "Spec table for the 1990 t: 296 hp at 7,200 rpm, 238 lb-ft at 4,200 rpm, 3,440 lb, 0-60 mph in 6.5 seconds, 158 mph. Used only alongside other sources, never alone."
  },
  {
   "ref": "topspeed-t-cab",
   "title": "1989 - 1993 Ferrari Mondial T Cabriolet",
   "url": "https://www.topspeed.com/cars/ferrari/1989-1993-ferrari-mondial-t-cabriolet-ar79540/pictures.html",
   "publisher": "TopSpeed",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "t cabriolet: 1,017 built; 300 hp first series and 295 hp later series; 0-60 mph in 6.3 seconds; 158 mph; longitudinal engine with transverse transmission explained as the source of the t."
  },
  {
   "ref": "ferrarichat-list-price",
   "title": "What was the list price of a new '90 Mondial T?",
   "url": "https://www.ferrarichat.com/forum/threads/what-was-the-list-price-of-a-new-90-mondial-t.215011",
   "publisher": "FerrariChat",
   "sourceType": "club-forum",
   "reliability": "low",
   "notes": "Owner-forum thread with one post giving a suggested retail price for a 1990 Mondial t. Single low-reliability source; cited to show that no US list price is documented above the reliability bar, and its figure is not used."
  },
  {
   "ref": "nhtsa-85v003",
   "title": "Ferrari Mondial 1983: Fuel System, Gasoline: Storage: Tank Assembly (85V003000)",
   "url": "https://auto-recalls.justia.com/ferrari/mondial/1983/85v003000",
   "publisher": "Justia (NHTSA recall data)",
   "sourceType": "government",
   "reliability": "medium",
   "notes": "NHTSA campaign 85V003000, 1983 Mondial: fuel tank may abrade against surrounding panels, fuel leak and fire hazard; remedy polyurethane cushions; 181 vehicles."
  },
  {
   "ref": "nhtsa-86v078",
   "title": "Ferrari Mondial 1984: Suspension: Multiple Axle (86V078000)",
   "url": "https://auto-recalls.justia.com/ferrari/mondial/1984/86v078000",
   "publisher": "Justia (NHTSA recall data)",
   "sourceType": "government",
   "reliability": "medium",
   "notes": "NHTSA campaign 86V078000, 1984 Mondial: rear wheel bearings and hub assemblies could deteriorate after high-load impacts; remedy replace both rear hub carrier assemblies; 422 vehicles; production dates 1981-05-01 to 1984-10-01."
  }
 ],
 "claims": [
  {
   "section": "production",
   "claimText": "Total Mondial production is reported as 6,149 by Wikipedia, as just over 6,100 by a Hagerty owner's account, and as about 7,000 by a separate Hagerty article.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["wikipedia", "hagerty-qv", "hagerty-accessible"],
   "conflictNote": "Wikipedia states a total of 6,149 vehicles from all variants. Hagerty's QV owner account states just over 6,100. Hagerty's buyer article states about 7,000 sold over 14 years. Ferrari's heritage pages give series counts but no overall total. Not resolved by any source consulted here.",
   "evidence": [
    { "ref": "wikipedia", "quote": "Production of the Mondial ceased in 1993, with a total of 6,149 vehicles from all variants having been manufactured." },
    { "ref": "hagerty-qv", "quote": "When production ended in 1993, just over 6100 Mondials of all variants had been built." },
    { "ref": "hagerty-accessible", "quote": "With about 7000 sold (big numbers by Ferrari standards of the time) over a production run of 14 years" }
   ]
  },
  {
   "section": "production",
   "claimText": "Ferrari's heritage page and Wikipedia give 858 Mondial t coupes, chassis range 79596 to 97698 per Ferrari, while Supercar Nostalgia gives 840.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["ferrari-t", "wikipedia", "supercarnostalgia-t"],
   "conflictNote": "Ferrari and Wikipedia state 858 t coupes. Supercar Nostalgia states 840 coupes completed, of which 45 were right-hand drive. Not resolved by any source consulted here.",
   "evidence": [
    { "ref": "ferrari-t", "quote": "a total of 858 examples made in the chassis number range 79596 to 97698" },
    { "ref": "wikipedia", "quote": "858 (coupé) produced" },
    { "ref": "supercarnostalgia-t", "quote": "By this time, 840 Coupes had been completed (45 in right-hand drive)." }
   ]
  },
  {
   "section": "production",
   "claimText": "Ferrari's heritage page gives 987 units for the Mondial 3.2, built 1985 to 1989 and available as coupe and cabriolet, while Wikipedia lists 987 coupes plus 810 cabriolets.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["ferrari-32", "wikipedia"],
   "conflictNote": "Ferrari states the model was produced in a total of 987 units and was available in coupe and cabriolet form. Wikipedia states 987 coupes and 810 cabriolets. Ferrari's QV and t coupe pages give coupe-only counts as the model total, which suggests the 3.2 figure is coupes only, but no source says so. Not resolved by any source consulted here.",
   "evidence": [
    { "ref": "ferrari-32", "quote": "The model was produced in a total of 987 units from 1985 to 1989, in the chassis number range 58277 to 79671." },
    { "ref": "ferrari-32", "quote": "The Mondial 3.2 model succeeded the Mondial Quattrovalvole, and was available in both coupe and cabriolet form" },
    { "ref": "wikipedia", "quote": "987 (coupé) produced" },
    { "ref": "wikipedia", "quote": "810 (cabriolet) produced" }
   ]
  },
  {
   "section": "production",
   "claimText": "Ferrari built 1,145 Mondial Quattrovalvole coupes between 1982 and 1985, and 629 Quattrovalvole cabriolets after the cabriolet was added for 1983.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["ferrari-qv", "forza-214", "wikipedia"],
   "evidence": [
    { "ref": "ferrari-qv", "quote": "during which time 1145 examples were produced" },
    { "ref": "forza-214", "quote": "From 1982 to ’85, Ferrari built 1,145 Mondial QV coupes and 629 Cabriolets." },
    { "ref": "wikipedia", "quote": "A new Cabriolet convertible model was added for 1983." }
   ]
  },
  {
   "section": "production",
   "claimText": "Ferrari built 1,017 Mondial t cabriolets between 1989 and 1993, in chassis range 80339 to 97733, a figure that every source consulted agrees on.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["ferrari-t-cab", "supercarnostalgia-t", "topspeed-t-cab"],
   "evidence": [
    { "ref": "ferrari-t-cab", "quote": "with a total of 1017 examples made" },
    { "ref": "ferrari-t-cab", "quote": "in the chassis number range 80339 to 97733" },
    { "ref": "supercarnostalgia-t", "quote": "There were also 1017 Cabriolets (51 of which were right-hand drive)." },
    { "ref": "topspeed-t-cab", "quote": "the T Cabriolet stayed into production until 1993, with 1017 units produced, in both right and left hand drive versions." }
   ]
  },
  {
   "section": "production",
   "claimText": "Ferrari's heritage page and Wikipedia both give 703 Mondial 8s built from 1980 to 1982, in chassis range 31075 to 41727 per Ferrari.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["ferrari-8", "wikipedia"],
   "evidence": [
    { "ref": "ferrari-8", "quote": "with a total of 703 examples being made" },
    { "ref": "ferrari-8", "quote": "The Mondial 8 was produced between 1980 and 1982" },
    { "ref": "ferrari-8", "quote": "in the range 31075 to 41727" },
    { "ref": "wikipedia", "quote": "Mondial 8: 1980–1982 703 produced" }
   ]
  },
  {
   "section": "production",
   "claimText": "No US list price for any Mondial is documented by a source above this site's reliability bar; the only figure found is one owner-forum post for the 1990 Mondial t, which is not used.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["ferrarichat-list-price"],
   "evidence": [
    { "ref": "ferrarichat-list-price", "quote": "1990 Mondial T total suggested retail price was $102,250.00." }
   ]
  },
  {
   "section": "history",
   "claimText": "The Mondial t's 3,405 cc V8 was mounted longitudinally instead of transversely as on earlier Mondials, coupled to a transverse transmission, which is the origin of the letter t.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["ferrari-t", "hagerty-accessible", "topspeed-t-cab"],
   "evidence": [
    { "ref": "ferrari-t", "quote": "the longitudinally mid mounted V8 engine of 3405cc capacity" },
    { "ref": "ferrari-t", "quote": "It was coupled to a transverse gearbox, hence the letter “t” in the model designation" },
    { "ref": "hagerty-accessible", "quote": "the Mondial T kept the transverse orientation for the gearbox but had a longitudinally mounted engine." },
    { "ref": "topspeed-t-cab", "quote": "it became longitudinally mounted, instead of transversely on the previous models." }
   ]
  },
  {
   "section": "problems",
   "claimText": "Sports Car Market says the timing belt service on the Mondial t becomes a mandatory engine-out job, Wikipedia says removing the engine on its subframe is necessary for timing belt replacement, and Forza says it is best to remove the engine and transaxle; none of the three states whether the earlier transverse-engine cars strictly require it.",
   "confidence": "medium",
   "status": "unverified",
   "sourceRefs": ["scm-mondial", "wikipedia", "forza-214"],
      "evidence": [
    { "ref": "scm-mondial", "quote": "the belt service becomes a mandatory engine-out job" },
    { "ref": "wikipedia", "quote": "This process is necessary for timing belt replacement," },
    { "ref": "forza-214", "quote": "when the time comes for the dreaded cam-belt service, it's best to remove the engine and transaxle entirely." }
   ]
  },
  {
   "section": "problems",
   "claimText": "Forza puts the Mondial timing belt service at about $7,500 to start and Sports Car Market at around $8,000, with Sports Car Market giving the interval as 30,000 miles or five years.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["forza-214", "scm-mondial"],
   "computed": ["30,000"],
   "evidence": [
    { "ref": "forza-214", "quote": "The twice-a-decade cam-belt service, described in The Garage section, starts at about $7,500." },
    { "ref": "scm-mondial", "quote": "you should still expect around an $8k bill" },
    { "ref": "scm-mondial", "quote": "Timing-belt services on these cars are recommended every 30k miles or five years." }
   ]
  },
  {
   "section": "specs",
   "claimText": "Sports Car Market and Forza both give the Mondial 8 205 hp in US trim, with 181 lb-ft per Sports Car Market; Ferrari's heritage page gives a claimed 214 hp and a Hagerty owner's account 213 hp for the early injected car against 258 hp for carbureted 308s, neither naming a market.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["scm-mondial", "forza-214", "ferrari-8", "hagerty-qv"],
   "evidence": [
    { "ref": "ferrari-8", "quote": "to produce a claimed 214 bhp" },
    { "ref": "scm-mondial", "quote": "could only muster 205 horsepower and 181 lb-ft of torque" },
    { "ref": "forza-214", "quote": "it delivered just 205 ponies in U.S. trim" },
    { "ref": "hagerty-qv", "quote": "but this resulted in a power drop over the GT4 and earlier 308s equipped with Webers, down from 258 hp to 213 hp." }
   ]
  },
  {
   "section": "specs",
   "claimText": "The Quattrovalvole used a 2,926 cc V8 with four valves per cylinder, transverse and in unit with a five-speed transmission; Ferrari quotes 230 hp for US cars and 235 hp for European cars, and Sports Car Market also gives 235 hp; against these, Wikipedia lists 240 hp for European cars and a Hagerty owner's account gives 243 hp without naming a market.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["ferrari-qv", "scm-mondial", "hagerty-qv", "wikipedia"],
   "computed": ["2,926"],
   "conflictNote": "Ferrari states 235 hp for European and 230 hp for US cars, and Sports Car Market's 235 hp matches Ferrari's European figure. The disagreement is with Wikipedia, which lists 240 hp in a table its footnote says gives European figures, and with Hagerty's owner account, which gives 243 hp in an owner's narrative without naming a market or a rating standard. Not resolved by any source consulted here.",
   "evidence": [
    { "ref": "ferrari-qv", "quote": "having a total capacity of 2926cc" },
    { "ref": "ferrari-qv", "quote": "230bhp for US market versions" },
    { "ref": "ferrari-qv", "quote": "The engine was transversely mounted in unit with the all synchromesh five speed transmission assembly" },
    { "ref": "scm-mondial", "quote": "raising output to 235 hp" },
    { "ref": "hagerty-qv", "quote": "This turned the power back up to a respectable 243 hp and the 0–60 time back down to 6.4 seconds." },
    { "ref": "wikipedia", "quote": "177 kW (240 hp) at 6800 rpm" },
    { "ref": "wikipedia", "quote": "Power and torque figures quoted are for European versions." }
   ]
  },
  {
   "section": "specs",
   "claimText": "The Mondial 3.2's 3,185 cc V8, with 83 x 73 mm bore and stroke, was the 328 engine, rated by Ferrari at 260 hp for US cars and 270 hp at 7,000 rpm for European cars.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["ferrari-32", "scm-mondial", "forza-214"],
   "computed": ["3,185", "7,000"],
   "evidence": [
    { "ref": "ferrari-32", "quote": "having a total capacity of 3185cc, with a bore and stroke of 83mm x 73mm" },
    { "ref": "ferrari-32", "quote": "to produce a claimed 270bhp at 7000rpm for main European market models, and 260bhp for US market models." },
    { "ref": "scm-mondial", "quote": "rated at 260 hp" },
    { "ref": "forza-214", "quote": "the 260-hp 328-powered Mondial 3.2" }
   ]
  },
  {
   "section": "specs",
   "claimText": "Ferrari quotes 300 hp at 7,200 rpm for the first European series of the Mondial t; Supercar Nostalgia and TopSpeed give 295 hp for later cars after catalytic converters were added, and Conceptcarz lists 296 hp; no source consulted gives a separate US rating.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["ferrari-t", "supercarnostalgia-t", "topspeed-t-cab", "conceptcarz-t"],
   "computed": ["7,200"],
   "evidence": [
    { "ref": "ferrari-t", "quote": "a claimed power output of 300bhp at 7200rpm for the first main European market series" },
    { "ref": "supercarnostalgia-t", "quote": "Peak power dropped to 295bhp as a result" },
    { "ref": "topspeed-t-cab", "quote": "300bhp at 7200rpm for the first main European market series, and 295bhp for the later series." },
    { "ref": "conceptcarz-t", "quote": "Power : 296 BHP (217.856 KW) @ 7200 RPM" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The weight of the Mondial t is not settled: Wikipedia gives 3,461 lb (1,570 kg) for the cabriolet, Supercar Nostalgia's factory figures convert to 3,144 lb (1,426 kg) for the coupe and 3,236 lb (1,468 kg) for the cabriolet, and Conceptcarz lists 3,440 lb.",
   "confidence": "low",
   "status": "disputed",
   "sourceRefs": ["wikipedia", "supercarnostalgia-t", "conceptcarz-t"],
   "computed": ["3,144", "1,426", "3,236", "1,468", "1,570", "3,440"],
   "conflictNote": "Wikipedia states 3,461 lb (1,570 kg) for the t cabriolet. Supercar Nostalgia states Ferrari quoted 3,144 lb (1,426 kg) for the coupe and 3,236 lb (1,468 kg) for the cabriolet, as converted here. Conceptcarz lists 3,440 lb for the 1990 t without naming the body. Not resolved by any source consulted here.",
   "evidence": [
    { "ref": "wikipedia", "quote": "1,570 kg (3,461 lb) (Cabriolet)" },
    { "ref": "supercarnostalgia-t", "quote": "Ferrari quoted a weight of 1426kg for the Coupe and 1468kg for the Cabriolet (up 16kg and 68kg respectively)." },
    { "ref": "conceptcarz-t", "quote": "Weight : 3440 lbs | 1560.358 kg" }
   ]
  },
  {
   "section": "specs",
   "claimText": "Three sources give the Mondial t a top speed of 158 mph, but its 0-60 mph time is quoted as 6.3 seconds by TopSpeed, 6.5 seconds by Conceptcarz and 5.6 seconds by Wikipedia.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["topspeed-t-cab", "conceptcarz-t", "supercarnostalgia-t", "wikipedia"],
   "conflictNote": "TopSpeed states 6.3 seconds to 60 mph for the t cabriolet; Conceptcarz states 6.5 seconds for the 1990 t; Wikipedia lists 5.6 seconds. Supercar Nostalgia gives only a 0-62 mph figure. Top speed of 158 mph is consistent across TopSpeed, Supercar Nostalgia and Conceptcarz. The 0-60 time is not resolved by any source consulted here.",
   "evidence": [
    { "ref": "topspeed-t-cab", "quote": "The Mondial T Cabriolet made the 0 to 60 mph sprint in 6,3 seconds." },
    { "ref": "conceptcarz-t", "quote": "0-60 mph : 6.5 seconds." },
    { "ref": "supercarnostalgia-t", "quote": "Top speed went from 155mph to 158mph." },
    { "ref": "wikipedia", "quote": "5.6 sec" }
   ]
  },
  {
   "section": "history",
   "claimText": "As Hagerty reports it, Car and Driver's Mondial 8 test car took nine seconds to reach 60 mph and topped out at 130 mph, while Wikipedia lists 8.2 seconds for the Mondial 8; Hagerty also quotes Motor Trend's period verdict.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["hagerty-accessible", "wikipedia"],
   "conflictNote": "Hagerty reports Car and Driver's test at nine seconds to 60 mph. Wikipedia lists 8.2 seconds for the Mondial 8 without naming a market or test. The original Car and Driver and Motor Trend tests were not fetched. Not resolved by any source consulted here.",
   "evidence": [
    { "ref": "hagerty-accessible", "quote": "The Mondial tested by Car and Driver reportedly took nine seconds to get to 60 miles per hour and topped out at 130 mph." },
    { "ref": "hagerty-accessible", "quote": "is not the greatest Ferrari ever issued by Maranello, but it is by no means the least." },
    { "ref": "wikipedia", "quote": "8.2 sec" }
   ]
  },
  {
   "section": "history",
   "claimText": "The Mondial was styled by Pininfarina with bodywork by Carrozzeria Scaglietti; Wikipedia credits the Mondial 8 design to Pierangelo Andreani and later revisions to Leonardo Fioravanti, and the Mondial 8 was introduced at the 1980 Geneva show on a 104.3 in (2,650 mm) wheelbase.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["wikipedia", "hagerty-accessible", "classic-8"],
   "computed": ["2,650"],
   "evidence": [
    { "ref": "wikipedia", "quote": "with styling by Pininfarina and bodywork by Carrozzeria Scaglietti" },
    { "ref": "wikipedia", "quote": "the original Mondial 8 was designed by Pierangelo Andreani" },
    { "ref": "wikipedia", "quote": "with a 100 mm-longer (3.9 in) wheelbase at 2,650 mm (104.3 in)" },
    { "ref": "hagerty-accessible", "quote": "The bodywork was different as well, hailing this time from Pininfarina, not from Bertone." },
    { "ref": "classic-8", "quote": "The first Ferrari Mondial iteration was introduced as the Mondial 8 at the 1980 Geneva Auto Salon." }
   ]
  },
  {
   "section": "history",
   "claimText": "The Mondial weighed around 450 pounds more than the 308, according to Forza.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["forza-214"],
   "evidence": [
    { "ref": "forza-214", "quote": "weighed around 450 pounds more than the 308" }
   ]
  },
  {
   "section": "history",
   "claimText": "The Mondial 3.2 was first shown at the 1985 Frankfurt show in September and brought the first change to the body styling, with revised front and rear ends; classic.com lists the 3.2 coupe for model years 1985 to 1988.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["wikipedia", "ferrari-32", "classic-32-coupe"],
   "evidence": [
    { "ref": "wikipedia", "quote": "The Mondial 3.2 was first presented at the 1985 Frankfurt Auto Show in September that year." },
    { "ref": "ferrari-32", "quote": "This model saw the first change in the body styling, with revised front and rear ends" },
    { "ref": "classic-32-coupe", "quote": "Model years for Ferrari Mondial 3.2 Coupe (1985 to 1988)" }
   ]
  },
  {
   "section": "history",
   "claimText": "The Mondial t was introduced at the Geneva show in March 1989 with dry-sump lubrication, standard ABS and electronically controlled dampers with hard, medium and soft settings, and shared its 3.4-liter engine with the 348.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["supercarnostalgia-t", "ferrari-t", "forza-214"],
   "evidence": [
    { "ref": "supercarnostalgia-t", "quote": "The Mondial t was introduced at the Geneva Motor Show in March 1989." },
    { "ref": "ferrari-t", "quote": "The enlarged engine was provided with dry sump lubrication" },
    { "ref": "ferrari-t", "quote": "had an ABS braking system as standard equipment" },
    { "ref": "ferrari-t", "quote": "electronically controlled shock absorbers, that gave either hard, medium or soft settings" },
    { "ref": "forza-214", "quote": "the t received the 348’s 300-hp longitudinally mounted engine and transverse gearbox" }
   ]
  },
  {
   "section": "history",
   "claimText": "On the Mondial t the engine, transmission and rear suspension are carried on a bolted rear subframe that can be removed as an assembly, and a Valeo clutch became an option late in production, with fewer than ten Valeo cars understood to have been built.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["ferrari-t", "supercarnostalgia-t"],
   "evidence": [
    { "ref": "ferrari-t", "quote": "bolted rear sub-frame section, so that the complete engine, transmission and rear suspension assembly could be removed" },
    { "ref": "ferrari-t", "quote": "a Valeo electronically actuated clutch became available as an option" },
    { "ref": "supercarnostalgia-t", "quote": "Less than ten Valeo-equipped cars are understood to have been built." }
   ]
  },
  {
   "section": "problems",
   "claimText": "Forza describes electrical gremlins that can be a recurring nightmare, a fuse and relay board inadequate to the electrical load, excessive chain tensioner wear on early t cars, and a problematic inner support bearing for the cam-drive jackshaft.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["forza-214"],
   "evidence": [
    { "ref": "forza-214", "quote": "electrical gremlins, which can be a recurring nightmare" },
    { "ref": "forza-214", "quote": "the Mondial fuse and relay board is inadequate to handle the electrical load" },
    { "ref": "forza-214", "quote": "early Mondial t’s can suffer from excessive chain tensioner wear" },
    { "ref": "forza-214", "quote": "a problematic inner support bearing for the cam-drive jack shaft" }
   ]
  },
  {
   "section": "problems",
   "claimText": "Sports Car Market reports that a broken belt means a broken engine, that Mondial sunroofs rarely work properly and often leak, and that second-gear synchros can be sluggish until the transmission oil is warm.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["scm-mondial"],
   "evidence": [
    { "ref": "scm-mondial", "quote": "a broken belt means a broken engine" },
    { "ref": "scm-mondial", "quote": "they rarely work properly and often leak" },
    { "ref": "scm-mondial", "quote": "second-gear synchros can be sluggish until the gearbox oil is warmed through" }
   ]
  },
  {
   "section": "problems",
   "claimText": "NHTSA campaign 85V003000 covers 181 1983 Mondials for fuel tank abrasion, remedied with polyurethane cushions, and campaign 86V078000 covers 422 1984 Mondials, built from May 1981 to October 1984, for rear wheel bearing and hub deterioration, remedied by replacing both rear hub carrier assemblies.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["nhtsa-85v003", "nhtsa-86v078"],
   "evidence": [
    { "ref": "nhtsa-85v003", "quote": "THERE MAY BE INTERFERENCE BETWEEN THE FUEL TANK AND SURROUNDING PANELS CAUSING ABRASION OF THE FUEL TANK SURFACE." },
    { "ref": "nhtsa-85v003", "quote": "181" },
    { "ref": "nhtsa-86v078", "quote": "THE REAR WHEEL BEARINGS AND HUB ASSEMBLIES COULD DETERIORATE." },
    { "ref": "nhtsa-86v078", "quote": "REPLACE BOTH RIGHT AND LEFT REAR HUB/HUB CARRIER ASSEMBLIES." },
    { "ref": "nhtsa-86v078", "quote": "422" },
    { "ref": "nhtsa-86v078", "quote": "1981-05-01 - 1984-10-01" }
   ]
  },
  {
   "section": "market",
   "claimText": "As of November 2026 classic.com's market benchmarks are $33,626 for the Mondial 8, $37,685 for the QV coupe, $42,150 for the QV cabriolet, $38,951 for the 3.2 coupe, $48,595 for the 3.2 cabriolet, $60,273 for the t coupe and $63,267 for the t cabriolet.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["classic-mondial"],
   "evidence": [
    { "ref": "classic-mondial", "quote": "CMB $33,626" },
    { "ref": "classic-mondial", "quote": "CMB $37,685" },
    { "ref": "classic-mondial", "quote": "CMB $42,150" },
    { "ref": "classic-mondial", "quote": "CMB $38,951" },
    { "ref": "classic-mondial", "quote": "CMB $48,595" },
    { "ref": "classic-mondial", "quote": "CMB $60,273" },
    { "ref": "classic-mondial", "quote": "CMB $63,267" }
   ]
  },
  {
   "section": "market",
   "claimText": "classic.com records Mondial 8 US-dollar sales from $21,750 for a 1982 project car on October 20, 2025 to $66,666 for a 1982 car on November 22, 2021, with a market benchmark of $33,626.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["classic-8"],
   "evidence": [
    { "ref": "classic-8", "quote": "1982 Ferrari Mondial 8 Project" },
    { "ref": "classic-8", "quote": "$21,750" },
    { "ref": "classic-8", "quote": "Oct 20, 2025" },
    { "ref": "classic-8", "quote": "$66,666" },
    { "ref": "classic-8", "quote": "Nov 22, 2021" },
    { "ref": "classic-8", "quote": "CMB $33,626" }
   ]
  },
  {
   "section": "market",
   "claimText": "classic.com records 1990 Mondial t coupe US-dollar sales from $34,000 on November 23, 2018 to $81,051 for a five-speed coupe on February 9, 2024, and a 1989 t cabriolet benchmark of $62,235 with a $67,000 sale on May 12, 2026.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["classic-t-coupe-1990", "classic-t-cab-1989"],
   "evidence": [
    { "ref": "classic-t-coupe-1990", "quote": "$34,000" },
    { "ref": "classic-t-coupe-1990", "quote": "Nov 23, 2018" },
    { "ref": "classic-t-coupe-1990", "quote": "1990 Ferrari Mondial T Coupe 5-Speed" },
    { "ref": "classic-t-coupe-1990", "quote": "$81,051" },
    { "ref": "classic-t-coupe-1990", "quote": "Feb 9, 2024" },
    { "ref": "classic-t-cab-1989", "quote": "CMB (CLASSIC.COM Market Benchmark) $62,235" },
    { "ref": "classic-t-cab-1989", "quote": "$67,000" }
   ]
  },
  {
   "section": "market",
   "claimText": "Forza's April 2024 price table put the Mondial 8 at $25,000 to $30,000, the 3.2 and the t coupe each at $40,000 to $50,000 and the t cabriolet at $50,000 to $70,000; Sports Car Market in June 2026 put Mondial 8 cars in the mid-$20,000 area and t models upwards of $55,000.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["forza-214", "scm-mondial"],
   "evidence": [
    { "ref": "forza-214", "quote": "| Mondial 8 | $25,000 | $30,000 |" },
    { "ref": "forza-214", "quote": "| Mondial 3.2 | $40,000 | $50,000 |" },
    { "ref": "forza-214", "quote": "| Mondial t | $40,000 | $50,000 |" },
    { "ref": "forza-214", "quote": "| Mondial t Cab | $50,000 | $70,000 |" },
    { "ref": "scm-mondial", "quote": "You'll find plenty sitting in the mid-$20k area." },
    { "ref": "scm-mondial", "quote": "start upwards of $55k for a good example" }
   ]
  },
  {
   "section": "market",
   "claimText": "Hagerty records that Mondial values rose sharply in 2015 and have been essentially flat since the beginning of 2016.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["hagerty-accessible"],
   "evidence": [
    { "ref": "hagerty-accessible", "quote": "Condition #2 (Excellent) values surged 25 percent over the course of that year" },
    { "ref": "hagerty-accessible", "quote": "since the beginning of 2016 Mondial values have been essentially flat" }
   ]
  },
  {
   "section": "production",
   "claimText": "classic.com lists the Mondial line between 1980 and 1993, the Mondial 8 for 1980 to 1982 and both Mondial t bodies for 1989 to 1993.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["classic-mondial", "classic-8", "classic-t-coupe-1990", "classic-t-cab-1989"],
   "evidence": [
    { "ref": "classic-mondial", "quote": "produced in multiple variants between 1980 and 1993" },
    { "ref": "classic-8", "quote": "Ferrari Mondial - 8 (1980 to 1982)" },
    { "ref": "classic-t-coupe-1990", "quote": "Ferrari Ferrari Mondial t Coupe (1989 to 1993)" },
    { "ref": "classic-t-cab-1989", "quote": "Ferrari Mondial t Cabriolet 1989 to 1993" }
   ]
  }
 ]
};
