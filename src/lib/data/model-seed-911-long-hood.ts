/**
 * Researched model draft - Porsche 911 Long-hood (1964-1973).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seed911LongHood = {
 "slug": "porsche/911-long-hood",
 "make": "Porsche",
 "model": "911",
 "generation": "Long-hood (incl. 2.7 RS)",
 "generationCode": "Type 901 (O- to F-series)",
 "trim": null,
 "yearStart": 1964,
 "yearEnd": 1973,
 "bodyStyles": [
  "2-door, 2+2 fixed-roof coupe (steel unitary body)",
  "2-door, 2+2 Targa with stainless-steel roll hoop, removable roof panel and zip-out soft rear window (1967-1968)",
  "2-door, 2+2 Targa with stainless-steel roll hoop, removable roof panel and fixed glass rear window (1969-1973)"
 ],
 "engines": [
  "1,991 cc Type 901/01 air-cooled SOHC flat-six, twin Solex carburettors, 130 PS (stated at 5,800 rpm by Classic & Sports Car); 911 and 911L 1964-1969",
  "1,991 cc Type 901/02 air-cooled flat-six, triple-choke Weber 40 IDS carburettors, 160 PS at 6,600 rpm, 132 lb-ft at 5,200 rpm; 911S 1967-1969",
  "1,991 cc air-cooled flat-six, carburettors, 110 PS; 911T 1968-1969",
  "2,195 cc air-cooled flat-six: 911T 125 PS (Zenith carburettors), 911E 155 PS and 911S 180 PS (Bosch mechanical fuel injection); model years 1970-1971",
  "2,341 cc air-cooled flat-six: 911T 130 PS manual (125 PS Sportomatic), 911E 165 PS, 911S 190 PS (Bosch mechanical fuel injection); model years 1972-1973",
  "2,687 cc Type 911/83 air-cooled flat-six, 90 mm x 70.4 mm, Nikasil-lined cylinders, Bosch mechanical fuel injection, 210 PS at 6,300 rpm, 255 Nm (182 lb-ft) at 5,100 rpm; Carrera RS 2.7, 1973"
 ],
 "productionTotal": null,
 "productionNotes": "No two independent sources fetched for this page give the same total for the 1964-1973 long-hood 911, and none explains its method, so the figure is left null. Porsche's own 60th-anniversary press kit states that 81,100 examples of the 911 (and 30,895 of the 912) had been built by the 1973 financial year, and porsche.com's brief history repeats 81,100 for the first generation. The Early 911 Registry, which exists to catalogue these cars, states 80,352 built between 1964 and 1973. Classic & Sports Car's 2018 buyer's guide gives 89,652 for 1964 to 1973, and Sports Car Market's 2018 profile of a 1971 911S says approximately 89,000. The gap of roughly 8,500 cars between the two clusters is larger than any single model year of the early run, and it may turn on whether the count is by financial year, calendar year or model year, whether the 1973-model 2.7 RS is included, or whether 912s are being mixed in; no source consulted resolves it. Below the total, the per-variant figures are more settled. Wikipedia and the Porsche Club of America agree that about 80 cars (Wikipedia: 82) were badged 901 before Peugeot's objection, and Stuttcars' chassis table gives 235 cars for 1964 from chassis 300001, although that table also contains evident errors (its 1965 row repeats 235) and cites no source, so it is used here only for individual rows. Stuttcars lists 22 911R cars for 1968 and, in the rows it labels 1969, 2,418 911T coupes, 1,304 911E coupes and 1,744 911S coupes. Sports Car Market gives 1,430 911S coupes for 1971 and 10,234 cars across all 1971 models. Elferspot gives 5,054 for the 2.4-litre 911S over 1972-1973, and Renndriver puts the 911T at approximately 35,000 across 1967-1973, the highest-volume long-hood variant. For the Carrera RS 2.7 the total of 1,580 is stated identically by Porsche, Wikipedia, RM Sotheby's, Elferspot and Classic Driver; Porsche's breakdown is 200 M471 Sport, 1,308 M472 Touring, 55 racing versions and 17 base (RSH) cars, which sums to 1,580 and therefore includes the RSR. Porsche had planned 500 cars for Group 4 homologation, sold them by the end of November 1972, and reached 1,500 by July 1973.",
 "notableTrims": [
  {
   "name": "911 2.0 (O-series, 1964-1967) including the 901-badged cars",
   "note": "The short-wheelbase original with 130 PS, twin Solex carburettors and the dogleg 901 five-speed. About 80 cars left the line badged 901 before Peugeot's objection; classic.com tracks 1964-1965 cars as a separate submarket with a benchmark of $197,375 as of September 2026, well above later 2.0 cars."
  },
  {
   "name": "911S 2.0 (1967-1969)",
   "note": "160 PS at 6,600 rpm on Weber carburettors and the first application of the forged Fuchs five-spoke wheel. classic.com benchmarks the 1967 coupe at $169,320 and the 1968 coupe at $151,283 as of September 2026, and its August 2026 results ran from $112,000 to $257,600."
  },
  {
   "name": "911 Targa, soft-window (1967-1968)",
   "note": "Shown at Frankfurt in 1965 and in production from December 1966, with a zip-out plastic rear window that was replaced by fixed glass for 1969. The soft-window S is the scarcest mainstream long-hood body; classic.com benchmarks the 1967 S Targa at $211,330 as of September 2026, and one made $257,600 at Gooding Christie's in August 2026."
  },
  {
   "name": "911T (1968-1973)",
   "note": "The entry car, with cast-iron cylinders, carburettors throughout and roughly 35,000 built according to Renndriver, so it is the long-hood most people can actually buy. Four-speed standard, five-speed optional; the Porsche Club of America identified 1969-1973 911Ts as the value play in 2023."
  },
  {
   "name": "911E (1969-1973)",
   "note": "The middle car, with Bosch mechanical fuel injection from 1969 and Boge hydropneumatic self-levelling front struts from 1969 to 1971, which many owners have since replaced with conventional struts. Often the best-equipped car of the three and priced between T and S."
  },
  {
   "name": "911S 2.2 and 2.4 (1970-1973)",
   "note": "180 PS then 190 PS with mechanical injection, and the long-wheelbase chassis introduced for 1969. Elferspot gives 5,054 2.4 S cars over 1972-1973 and quotes 0-62 mph in 6.6 seconds; the 2.4 S was the basis from which the Carrera RS was developed."
  },
  {
   "name": "911 Carrera RS 2.7 Touring (M472), 1973",
   "note": "1,308 of the 1,580 RS cars per Porsche, with the 911S interior retained. Homologation special with the 2,687 cc engine, 210 PS, ducktail spoiler and widened rear arches. classic.com's Touring benchmark is $565,671 as of September 2026; RM Sotheby's sold one for $896,000 at Monterey in August 2026."
  },
  {
   "name": "911 Carrera RS 2.7 Sport / Lightweight (M471), 1973",
   "note": "200 cars per Porsche at 960 kg, 115 kg lighter than the Touring, with thin-gauge steel and thinner glass. The car that carries the long-hood's highest prices: classic.com records $2,425,000 in August 2022 and a benchmark of $1,117,857 as of September 2026, on a downward trend."
  }
 ],
 "specs": {
  "layout": "Rear-mounted, longitudinal air-cooled flat-six overhung behind the rear axle, rear-wheel drive, 2+2 seating",
  "chassis": "Steel unitary body; wheelbase 2,211 mm from 1964 to the end of the A-series, 2,268 mm from the B-series (model year 1969) after the rear wheels were moved 57 mm aft; Carrera RS rear arches widened 42 mm",
  "engine": "1,991 cc (1964-1969), 2,195 cc (1970-1971), 2,341 cc (1972-1973) air-cooled flat-six with single overhead camshaft per bank; 2,687 cc Type 911/83 with Nikasil-lined cylinders in the 1973 Carrera RS",
  "induction": "Solex then Weber carburettors on 2.0 cars, Zenith carburettors on 911T, Bosch mechanical fuel injection on 911E and 911S from model year 1969 and on the Carrera RS",
  "power": "130 PS (911 2.0), 110 PS (911T 2.0), 160 PS at 6,600 rpm (911S 2.0), 125/155/180 PS (T/E/S 2.2), 130/165/190 PS (T/E/S 2.4), 210 PS at 6,300 rpm (Carrera RS 2.7); all manufacturer DIN ratings",
  "torque": "132 lb-ft at 5,200 rpm quoted for the 2.0 S; 255 Nm (182 lb-ft) at 5,100 rpm for the Carrera RS 2.7 as claimed by Porsche; other variants not consistently quoted by the sources consulted",
  "transmission": "Type 901 five-speed manual with dogleg first (four-speed standard on 911T) to 1971; Type 915 five-speed with H-pattern first four gears from 1972; Sportomatic four-speed clutchless semi-automatic optional from 1967-1968",
  "suspension": "Independent all round with torsion-bar springing; Boge hydropneumatic self-levelling front struts on the 911E from 1969 to 1971",
  "brakes": "Disc brakes all round; larger brakes on the Carrera RS per Wikipedia",
  "wheels_tyres": "Steel wheels on early cars; forged Fuchs five-spoke alloys introduced with the 911S in 1967; the Carrera RS was the first Porsche with different tyre sizes front and rear",
  "weight": "1,030 kg quoted for a 1968 911S; Classic & Sports Car gives 2,285-2,442 lb across the run; Carrera RS 960 kg Sport and 1,075 kg Touring as claimed by Porsche",
  "acceleration": "0-100 km/h in 9.1 s for the 130 PS original (Porsche); 0-60 mph in 7.6 s for a 1968 911S (Drive-My road test data) and 8 s per Classic & Sports Car; 0-62 mph in 6.6 s for the 2.4 S (Elferspot); 0-100 km/h in 5.8 s Sport and 6.3 s Touring for the Carrera RS (Porsche claim)",
  "top_speed": "210 km/h for the 130 PS original (Porsche); 139 mph for the 1968 911S (Drive-My) or 137 mph (Classic & Sports Car); 240 km/h Touring and over 245 km/h Sport for the Carrera RS (Porsche claim)",
  "aerodynamics": "Carrera RS was the first series production car with front and rear spoilers; Elferspot credits the ducktail with 4.5 km/h of additional top speed",
  "price_new": "DM 21,900 for the original 911 (Porsche); £2,600 for a 1968 911S in Britain; £3,671-5,211 across the 1970 range (Classic & Sports Car); $8,975 for a 1971 911S in the United States (Sports Car Market); DM 34,000 for the Carrera RS plus DM 700 for M471 or DM 2,500 for M472 (Porsche)",
  "body_variants": "Coupe throughout; Targa with soft rear window 1967-1968 and fixed glass from 1969"
 },
 "summary": "The Porsche 911 of 1964-1973, the long-hood cars, established the shape and the mechanical logic that every 911 since has been measured against. Shown at Frankfurt in September 1963 as the 901 and renamed after Peugeot objected to the zero in the middle, it went into production on 14 September 1964 with a 1,991 cc air-cooled flat-six of 130 PS hung behind the rear axle, a dogleg five-speed gearbox and torsion-bar suspension. Over nine model years the engine grew to 2.2 and then 2.4 litres, the range split into T, E and S, the Targa arrived, and the wheelbase was stretched 57 mm for 1969 to calm the handling. The run closed with the 1973 Carrera RS 2.7, a homologation special with 210 PS, a ducktail and, in Sport form, 960 kg, which sold three times its planned 500 units. Porsche says 81,100 911s had been built by its 1973 financial year; other sources say 80,352 to 89,652, and the disagreement is set out below. The RS is the market's headline, but the T, E and S coupes and Targas are the cars most people own, and the difference between good and bad examples is mostly in the steel.",
 "history": "## From 356 to 901\n\nPorsche's replacement for the 356 was shown at the Frankfurt Motor Show on 12 September 1963 as the Type 901, with a body by Ferdinand Alexander Porsche, Ferry Porsche's son, and his team. Peugeot held a trademark on three-digit names with a zero in the middle, so the car went on sale as the 911, although the engine type and parts prefixes stayed 901. Production began on 14 September 1964 at DM 21,900. The Porsche Club of America records about 80 cars badged 901 before the change and roughly 150 more built before the end of 1964; Stuttcars' chassis table gives 235 cars for that first year. The engine was a 1,991 cc air-cooled flat-six with a single overhead camshaft per bank, twin Solex carburettors and 130 PS, good for 210 km/h and 0-100 km/h in 9.1 seconds by Porsche's own figures. The four-cylinder 912 followed in 1965.\n\n## S, Targa and the Short-Wheelbase Years\n\nThe 911S arrived for 1967 with 160 PS at 6,600 rpm on Weber carburettors and the forged five-spoke Fuchs wheel, which appeared here for the first time. A period road test recorded 139 mph and 0-60 mph in 7.6 seconds from 1,030 kg. The Targa, previewed at Frankfurt in 1965, entered production in December 1966 with a stainless-steel roll hoop and a zip-out plastic rear window, replaced by fixed glass for 1969. The A-series 1968 cars introduced the 911T with 110 PS and cast-iron cylinders, the 911L, and the Sportomatic clutchless semi-automatic. Stuttcars' chassis table lists 22 911R competition cars for 1968.\n\n## The Long-Wheelbase Chassis and Fuel Injection\n\nFor the 1969 B-series Porsche moved the rear wheels 57 mm aft, taking the wheelbase from 2,211 to 2,268 mm without lengthening the body, the single largest change to the car's behaviour in the run. The same year the E and S received Bosch mechanical fuel injection, and the E gained Boge hydropneumatic self-levelling front struts, which it kept until 1971. The 1970 C-series took the engine to 2,195 cc, giving 125, 155 and 180 PS for T, E and S, and the transaxle was updated with a 225 mm clutch. The E-series of 1972 brought 2,341 cc and 130, 165 and 190 PS, and the new Type 915 gearbox with a conventional H-pattern for the first four gears; Classic & Sports Car calls it the stronger of the two boxes. Elferspot's comparison gives the 2.4 S 0-62 mph in 6.6 seconds, and it was this car, not a lighter one, that Porsche started from when the RS was needed.\n\n## Germany's Fastest Sports Car\n\nThe Carrera RS 2.7 was conceived in May 1972 to homologate the 911 for Group 4, which needed 500 cars. Porsche's own account credits about fifteen engineers, with Hermann Burst and Tilman Brodbeck on the engineering side and Rolf Wiener and Harm Lagaaij on the styling. The engine went to 2,687 cc with Nikasil-lined cylinders and mechanical injection for 210 PS at 6,300 rpm and 255 Nm at 5,100 rpm; the rear arches were widened 42 mm to take wider tyres than the fronts, a first for Porsche, and the ducktail spoiler, patented on 5 August 1972, made it the first series production car with spoilers at both ends. The car was shown at Paris on 5 October 1972 at DM 34,000, with M471 Sport at DM 700 extra and M472 Touring at DM 2,500. The 500 were sold by the end of November, homologation moved to Group 3 after the thousandth car, and production ended at 1,580 in July 1973: 200 Sport, 1,308 Touring, 17 base cars and 55 racing RSRs. Porsche quoted 960 kg for the Sport and 0-100 km/h in 5.8 seconds, claiming the first production car under six seconds, and advertised it as Germany's fastest sports car.\n\n## The Line Closes\n\nThe 1973 model year was the last with the short bumpers and the long bonnet that gave the cars their later name. American bumper rules for 1974 produced the impact-bumper G-series. By then Porsche's press material puts 81,100 911s built, a figure the Early 911 Registry, Sports Car Market and Classic & Sports Car each contradict in a different direction, which is why no single total appears on this page.",
 "marketNotes": "As of September 2026, classic.com's 1964-1973 911 submarket shows an average recorded sale of $115,342 across the F-body, with the 1964-1965 cars benchmarked at $197,375 and the model's ceiling set by a Carrera RS 2.7 Lightweight at $2,425,000 in August 2022. The RS is a separate market. The Touring benchmark is $565,671 and the Lightweight benchmark $1,117,857, the latter trending downward against a Lightweight average sale of $1,229,455; classic.com's most recent Lightweight results are $1,200,000 on 7 July 2026, $805,000 on 20 August 2026 and a Broad Arrow private sale at 950,000 euros on 22 August 2026. RM Sotheby's sold a Tangerine Touring, chassis 9113601556, for $896,000 at Monterey in August 2026 and a Grand Prix White Touring, chassis 9113601272, for 353,750 euros at Paris in January 2026; both are quoted as the house published them and the lot pages do not state whether buyer's premium is included. For the 2.0 S, classic.com's short-wheelbase 911S page gives an average sale of $178,162, a 1967 coupe benchmark of $169,320 and a 1967 Targa benchmark of $211,330, with August 2026 results of $257,600 for a 1967 soft-window Targa at Gooding Christie's, $231,000 for a 1967 S at Mecum Monterey and $112,000 for a 1968 S at Gooding. Renndriver's 911T guide, dated June 2026, puts driver-quality cars at $80,000-120,000, matching-numbers cars at $120,000-175,000 and concours cars at $175,000 and above, and claims a 10-20 percent premium for Targas; Classic & Sports Car's 2018 guide said the opposite, valuing Targas 10 percent below coupes and Sportomatics 20 percent below manuals. That reversal on Targas is unexplained by either source.",
 "whatToLookFor": "The steel decides everything on a long-hood. Classic & Sports Car's guide says rust protection was limited and body condition is paramount, and Renndriver names the longitudinal chassis rails beneath the doors and the battery box area as the places to check first. A car with replaced floors and longitudinals can be sound, but the standard of the repair determines whether the suspension mounts are where Porsche put them and whether the car will pass a specialist's inspection, and Classic & Sports Car's restoration bracket of £15,000-150,000 in 2018 shows how wide the range of outcomes is. Documentation comes next. A Porsche Certificate of Authenticity or the Kardex build record confirms the original engine and gearbox numbers, colour and options, and the auction catalogues for the top results in 2025 and 2026 all lead with it. Matching numbers matter more here than on later 911s because so many early engines were replaced or upgraded in period; the RM Sotheby's Paris 2026 RS Touring carried replacement aluminium crankcase halves from 1987 with restamped numbers, and it sold for less than half the Monterey car. For the Carrera RS, Classic Driver warned as long ago as 2014 that rising values had put non-original cars on the market as the genuine article; the thin-gauge steel and glass of the M471 cars, the M-code on the build record and the engine and gearbox numbers against the Certificate are what a specialist checks, and the RM Sotheby's Monterey 2026 catalogue's note that the last hundred or so cars carry an aluminium rather than magnesium crankcase shows how specific the questions get. Establish which gearbox is fitted, since the dogleg 901 and H-pattern 915 are different in feel and value, whether a Sportomatic car is still one, and whether a 1969-1971 E still has its hydropneumatic struts. A long file of invoices from a marque specialist is worth more than a fresh restoration of unknown scope.",
 "commonProblems": "Almost all early flat-sixes leak oil, and the question is from where and how much; chain-box covers and the crankcase seams are the usual sources. Blue smoke on start-up points to worn valve guides. The camshaft chain tensioners are the mechanical weak point: the original spring-loaded units fail with age, the chain can jump the sprockets and the pistons meet the valves, and Pelican Parts quotes a $6,000-10,000 rebuild when that happens. Porsche's 1984 hydraulically fed Carrera tensioner can be retrofitted to 1969-1983 cars and its presence is now expected on a car that is used. From 1968 the crankcase was magnesium rather than aluminium, which Classic & Sports Car describes as easily weakened, and worn crankcase studs are a recognised consequence; the RM Sotheby's Paris 2026 RS Touring had been running on replacement aluminium case halves since 1987, which shows how long the problem has been addressed that way. Mechanical fuel injection on E and S cars needs proper setting up, and an overhaul was quoted at £500-2,000 in 2018. Gearboxes whine when synchros and bearings are worn, a 901 or 915 rebuild ran £2,500-5,000 in 2018, and a vague shift is often cured by rebushing the linkage. The Boge hydropneumatic front struts fitted to the 911E from 1969 to 1971 are a specialised item and a car that has been converted to conventional struts should say so. None of this is unusual for the period; what separates a good car is whether the work has been done by someone who knows the model.",
 "valueTrajectory": "The long-hood 911 was cheap for a long time. The Porsche Club of America recalls a nice 1971 T Targa offered at $14,000 in 2004, and Classic Driver puts a Carrera RS at around £30,000 in the late 1990s, a fraction of a Ferrari Daytona. The market turned around 2013: early S prices moved from about $75,000 to a quarter of a million within a few years, and a Lightweight RS made $1.42 million at Gooding's Amelia Island sale in 2014. Sports Car Market recorded a retreat from the 2014-2015 peak, reading a 1971 2.2 S at $204,978 at Bonhams Goodwood in September 2018 as an early sign of recovery, and Classic & Sports Car's 2018 guide bracketed average cars at £50,000-250,000. The pandemic added another leg, capped by the $2,425,000 Lightweight in August 2022, and by April 2023 the PCA reported nice 911Ts settling at $75,000-100,000. As of September 2026 the picture is stratified rather than falling: classic.com's Lightweight benchmark of $1,117,857 is trending down while a documented, restored Touring still made $896,000, 2.0 S coupes and Targas sat between $112,000 and $257,600 at the August 2026 Monterey sales, and Renndriver's June 2026 guide places the 911T at $80,000-225,000 by condition. The cars that hold their prices have build records, original engines and sound floors.",
 "overallConfidence": "medium",
 "sources": [
  {
   "ref": "porsche-newsroom-gen1",
   "title": "1st Generation Porsche 911 (original 911), 1963-1973",
   "url": "https://newsroom.porsche.com/en/press-kits/60-Years-Porsche-911/1.-Generation-Porsche-911-(Ur-Elfer),-1963-1973.html",
   "publisher": "Porsche AG",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Porsche 60th-anniversary press kit: debut at Frankfurt IAA 1963 as type 901, renamed 911 in 1964 because Peugeot held a trademark on sequences with a zero in the middle, production began 14 September 1964, 130 PS and 210 km/h, base price DM 21,900, 912 from 1965, 911 S with 160 PS a year later, Targa unveiled autumn 1965 with stainless roll-over bar; states 81,100 examples of the 911 and 30,895 of the 912 built by the 1973 financial year."
  },
  {
   "ref": "porsche-newsroom-rs27",
   "title": "Fifty years of the Porsche 911 Carrera RS 2.7 - 'Germany's fastest sports car'",
   "url": "https://newsroom.porsche.com/en/2022/history/porsche-50-years-911-carrera-rs-2-7-germanys-fastest-sports-car-28486.html",
   "publisher": "Porsche AG",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Porsche's own RS history: 1,580 built as 200 M471 Sport, 1,308 M472 Touring, 55 racing versions and 17 base vehicles; 500 planned for Group 4 homologation and sold by end November 1972, 1,500 reached by July 1973, Group 3 homologation after the 1,000th car; development from May 1972, ducktail patent 5 August 1972, Paris show 5 October 1972; 210 PS at 6,300 rpm, 255 Nm at 5,100 rpm; Sport 960 kg and 115 kg lighter than Touring, 0-100 km/h 5.8 s Sport and 6.3 s Touring, 245+ km/h and 240 km/h; DM 34,000 plus DM 700 for M471 and DM 2,500 for M472; rear arches widened 42 mm, first Porsche with different tyre sizes front and rear, first series car with front and rear spoilers; engineers Hermann Burst and Tilman Brodbeck, stylists Rolf Wiener and Harm Lagaaij."
  },
  {
   "ref": "porsche-brief-history",
   "title": "A brief history of the Porsche 911",
   "url": "https://www.porsche.com/stories/innovation/a-brief-history-of-the-porsche-911/",
   "publisher": "Porsche AG",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Porsche editorial: 1963 Frankfurt debut as 901, renamed 911 after Peugeot's naming claim, designed by F.A. Porsche and his team, 130 PS, 0-100 km/h in 9.1 s, 210 km/h, Targa debut 1965, Carrera RS 2.7 under 1,000 kg; states 81,100 units for the first generation 1963-1973."
  },
  {
   "ref": "wikipedia-911-classic",
   "title": "Porsche 911 (classic)",
   "url": "https://en.wikipedia.org/wiki/Porsche_911_(classic)",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Aggregated reference: 901 shown 12 September 1963, 82 cars built as 901, engine and parts prefix stayed 901, production from September 1964; outputs 130 PS base, 160 PS at 6,600 rpm 911S, 110 PS 911T, 130 PS 911L, 2,195 cc T/E/S 125/155/180 PS, 2,341 cc T/E/S 130 (125 Sportomatic)/165/190 PS; B-series 1969 moved rear wheels 57 mm aft, wheelbase 2,211 to 2,268 mm; Targa MY1967; Fuchs wheels from 1967 with the S; Type 901 gearbox to 1971 then Type 911 transaxle with 225 mm clutch; Sportomatic from MY1967; RS 2.7: 1,580 made, Type 911/83, 90 x 70.4 mm, 210 PS at 6,300 rpm, Touring 1,075 kg and Sport about 100 kg lighter, larger brakes."
  },
  {
   "ref": "stuttcars-production",
   "title": "Porsche 911 (F-Series) Sales & Production Numbers",
   "url": "https://www.stuttcars.com/porsche-911-f-series-sales-production-numbers/",
   "publisher": "Stuttcars",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Chassis-number table 1964-1969 with no source stated and evident errors (the 1965 row repeats 235); used only for individual rows: 1964 chassis 300001-300235, 235 cars; 911R 2.0 for 1968, 22 cars; rows labelled 1969 give 2,418 911T coupes, 1,304 911E coupes and 1,744 911S coupes with chassis prefixes 911010, 911020 and 911030. No 1970-1973 rows and no run total."
  },
  {
   "ref": "pca-model-guide",
   "title": "Model Guide: The first Porsche 911s",
   "url": "https://www.pca.org/news/model-guide-the-first-porsche-911s",
   "publisher": "Porsche Club of America",
   "sourceType": "club-forum",
   "reliability": "medium",
   "notes": "Club model guide dated 20 February 2018: about 80 cars labelled 901 before the change and about 150 more built before the end of 1964; 2.0 litres 1965-1969, 2.2 for 1970-1971, 2.4 for 1972-1973; T, E and S from 1969 with MFI on E and S; wheelbase lengthened 2.5 in for 1969; Sportomatic 1968; first Targa year 1967; Type 915 gearbox from 1972 with H-pattern first four gears; notes the cars regularly exceed six figures."
  },
  {
   "ref": "pca-long-hood-2023",
   "title": "Is it time to think about a long-hood 1964-1973 Porsche 911 again?",
   "url": "https://www.pca.org/news/is-it-time-to-think-about-a-long-hood-1964-1973-porsche-911-again",
   "publisher": "Porsche Club of America",
   "sourceType": "club-forum",
   "reliability": "medium",
   "notes": "Rob Sass market column, 10 April 2023: long-hoods unpopular and cheap in the late 1980s, a nice 1971 T Targa at $14,000 in 2004, market exploded around 2013 with early S prices going from about $75,000 to a quarter of a million in a few years, 2023 911Ts at $75,000-100,000 for nice cars with some acceptable cars at $55,000-65,000 and low-fifties no-sales online; pandemic boom judged over; 1969-1973 T identified as the entry point."
  },
  {
   "ref": "early-911-registry",
   "title": "Register your 1965-73 Porsche 911 Today!",
   "url": "https://early911registry.com/",
   "publisher": "The Early 911 Registry",
   "sourceType": "registry",
   "reliability": "medium",
   "notes": "Online registry for 1965-1973 911s with forums; states that between 1964 and 1973 Porsche manufactured 80,352 911s. Gives no method, no registered-car count and no per-variant breakdown."
  },
  {
   "ref": "csc-buyers-guide",
   "title": "Buyer's guide: Porsche 911 (1964-'73)",
   "url": "https://www.classicandsportscar.com/features/buyers-guide-porsche-911-1964-73",
   "publisher": "Classic & Sports Car",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Buyer's guide, May 2018: 130 bhp at 5,800 rpm on twin Solexes, S 160 bhp on Webers with 0-60 mph 8 s and 137 mph, T 110 bhp four-speed, 2.2 S/E/T 180/155/125 bhp with Zeniths on the T, 2.4 190/165/130 bhp, RS 210 bhp at 6,300 rpm and 182 lb-ft at 5,100 rpm with Nikasil cylinders; Sportomatic from 1967 valued 20 percent below manuals; Targa from December 1966 valued 10 percent below coupes; weights 2,285-2,442 lb; states 89,652 built 1964-1973 and 1,580 RS; oil leaks, valve-guide smoke, rattly chains, post-1968 magnesium case easily weakened, MFI overhaul £500-2,000, gearbox rebuild £2,500-5,000, 901 dogleg and stronger 915 from 1972, rebushing linkage; prices £50,000-250,000 average and £100,000-500,000 show cars, 1970 list £3,671-5,211."
  },
  {
   "ref": "scm-1971-911s",
   "title": "1971 Porsche 911S 2.2-Liter Coupe",
   "url": "https://www.sportscarmarket.com/profile/1971-porsche-911s-2-2-liter-coupe",
   "publisher": "Sports Car Market",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Auction profile: chassis 9111301356, RHD, Metallic Green, sold for $204,978 including buyer's premium at Bonhams Goodwood Revival, 8 September 2018, lot 296, after a restoration costing about £75,000; 1,430 911S coupes built for 1971, 10,234 cars across all 1971 models, approximately 89,000 long-hood 911s 1964-1973; 1971 US list price $8,975; commentary that early 911 prices had declined from the 2014-2015 peak and this result signalled an upturn."
  },
  {
   "ref": "drivemy-1968-911s",
   "title": "1968 Porsche 911 2.0S SWB road test",
   "url": "https://drive-my.com/1968-porsche-911s-swb-road-test/",
   "publisher": "Drive-My",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Road test of a 1968 911S: 1,991 cc, 160 bhp at 6,600 rpm, 132 lb-ft at 5,200 rpm, four Weber 40 IDS 3C carburettors, 139 mph, 0-60 mph 7.6 s, 1,030 kg, 27 mpg, £2,600 new in Britain in 1968, £80,000-155,000 in 2017; driving impressions of the steering feedback and the recalcitrant dogleg gearbox."
  },
  {
   "ref": "renndriver-911t",
   "title": "Porsche 911T (1967-1973): Specs, T vs E vs S, Values, and Buyer's Guide",
   "url": "https://renndriver.com/guides/porsche-911t/",
   "publisher": "Renndriver",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Specialist guide: 911T built 1967-1973, approximately 35,000 in total and the highest-volume long-hood; 110 hp/116 lb-ft 2.0, 125 hp/130 lb-ft 2.2, 140 hp/144 lb-ft 2.4 (SAE-style figure differing from the 130 PS DIN in other sources); T with cast-iron cylinders and Weber then Zenith carburettors, E with MFI and Boge hydropneumatic front 1969-1971, S with MFI and stiffer suspension; values as of June 2026: $80,000-120,000 driver, $120,000-175,000 matching numbers, $175,000-225,000+ concours, Targa 10-20 percent premium; rust in longitudinals under the doors and battery box, valve-guide smoke; four-speed standard, five-speed optional."
  },
  {
   "ref": "elferspot-s24-rs",
   "title": "Porsche 911 S 2.4 vs. 911 Carrera RS 2.7",
   "url": "https://www.elferspot.com/en/magazine/porsche-911-s-2-4-vs-911-carrera-rs-2-7/",
   "publisher": "Elferspot",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Specialist comparison: 5,054 2.4-litre 911S built; RS 2,687 cc with 20 hp and 39 Nm more than the S, RS priced DM 2,520 above the S in 1972-73, 900 kg ready-to-drive homologation weight, 0-62 mph 5.8 s in Paul Frere's test against 6.6 s for the S 2.4, 40-100 km/h 10.6 s, ducktail worth 4.5 km/h; 1,580 RS built as 1,308 Touring M472 and 200 Sport M471; explains why the S could not have been homologated under FIA tyre-width rules."
  },
  {
   "ref": "classicdriver-rs",
   "title": "Is it too late to buy a Porsche 911 Carrera RS 2.7?",
   "url": "https://www.classicdriver.com/en/article/cars/it-too-late-buy-porsche-911-carrera-rs-27",
   "publisher": "Classic Driver",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "2014 market article: 500 cars for homologation then a further 1,080, 200 Lightweight M471; RS at about £30,000 in the late 1990s against £60,000-90,000 for a Daytona; Lightweight sold for $1.42 million at Gooding Amelia Island 2014; first 500 Tourings on thinner-gauge steel; warns that rising values had led to non-original cars being marketed as genuine."
  },
  {
   "ref": "classic-f-body",
   "title": "Porsche 911 F-Body Market",
   "url": "https://www.classic.com/m/porsche/911/f-body/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Market data as of September 2026 for 1964-1973 cars: average sale $115,342; highest sale $2,425,000 for a 1973 Carrera RS 2.7 Lightweight on 19 August 2022; submarket benchmarks $197,375 for 1964-1965 cars, $565,671 for the RS Touring and $1,117,857 for the RS Lightweight; splits the run into SWB 1964-1968 and LWB 1969-1973."
  },
  {
   "ref": "classic-rs-lightweight",
   "title": "Porsche 911 Carrera RS - Lightweight Market",
   "url": "https://www.classic.com/m/porsche/911/f-body/lwb/carrera-rs/lightweight/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Market data as of September 2026: M471 Lightweight benchmark $1,117,857 trending down, average sale $1,229,455; recent results $805,000 on 20 August 2026 (29k-mile car), $1,200,000 on 7 July 2026 (9k-mile car), 950,000 euros Broad Arrow private sale 22 August 2026; describes the M471 as about 220 lb lighter through thin-gauge steel and thinner glass."
  },
  {
   "ref": "classic-911s-swb",
   "title": "Porsche 911S - SWB Market",
   "url": "https://www.classic.com/m/porsche/911/f-body/swb/911s/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Market data as of September 2026 for 1967-1968 911S: average sale $178,162; benchmarks $169,320 for a 1967 coupe, $211,330 for a 1967 Targa and $151,283 for a 1968 coupe; results $257,600 for a 1967 soft-window Targa at Gooding Christie's 14 August 2026, $231,000 for a 1967 S at Mecum Monterey 15 August 2026, $112,000 for a 1968 S at Gooding Christie's 15 August 2026, 240,234 euros for a 1967 S on 28 March 2026; low of $12,880 on 28 October 2024."
  },
  {
   "ref": "rm-mo26-rs-touring",
   "title": "1973 Porsche 911 Carrera RS 2.7 Touring, The Monterey Auction 2026",
   "url": "https://rmsothebys.com/auctions/mo26/lots/r0060-1973-porsche-911-carrera-rs-27-touring/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold $896,000, Monterey, August 2026, lot 321. Chassis 9113601556, engine 6631513, Tangerine over black Perlon corduroy, delivered new to Italy June 1973, with consignor since 2013, fully restored with numbers-matching engine and correct-type gearbox, one of the final 100 RS 2.7s with the Silumin aluminium crankcase; catalogue states 1,580 built, about 200 M471 and 1,308 M472."
  },
  {
   "ref": "rm-pa26-rs-touring",
   "title": "1973 Porsche 911 Carrera RS 2.7 Touring, Paris 2026",
   "url": "https://rmsothebys.com/auctions/pa26/lots/r0039-1973-porsche-911-carrera-rs-27-touring/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold 353,750 euros, Paris, January 2026, lot 172. Chassis 9113601272, Grand Prix White with red stripes and matching wheels, delivered new to Germany May 1973, one owner to 2002, then Belgium, with vendor since May 2013, Pflegepass supplied; December 2025 inspection found the car largely original with possible light competition use and replacement aluminium crankcase halves from 1987 with restamped numbers; catalogue states 1,308 M472 Touring cars."
  },
  {
   "ref": "pelican-tensioners",
   "title": "Porsche 911 Carrera Chain Tensioner Installation, 911 (1965-89) and 930 Turbo (1975-89)",
   "url": "https://www.pelicanparts.com/techarticles/911_carrera_chain_tensioners/911_carrera_chain_tensioners2.htm",
   "publisher": "Pelican Parts",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Technical article: original spring-loaded mechanical chain tensioners tend to fail, the chain can slip off the sprockets and pistons hit valves, a $6,000-10,000 rebuild, with a reader reporting a $4,000 top-end rebuild; Porsche's 1984 tensioner fed by oil pressure with a mechanical spring can be retrofitted to 1969-1983 cars; warns never to let the chain go slack."
  }
 ],
 "claims": [
  {
   "section": "history",
   "claimText": "The car was shown at the Frankfurt Motor Show on 12 September 1963 as the Porsche 901, renamed 911 after Peugeot objected to a three-digit name with a zero in the middle, and entered production on 14 September 1964 at DM 21,900.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "porsche-newsroom-gen1",
    "porsche-brief-history",
    "wikipedia-911-classic",
    "pca-model-guide"
   ]
  },
  {
   "section": "history",
   "claimText": "About 80 cars were built and badged 901 before the name change; Wikipedia gives 82 and the Porsche Club of America about 80, with roughly 150 further cars built before the end of 1964 and Stuttcars' chassis table giving 235 cars for 1964.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-911-classic",
    "pca-model-guide",
    "stuttcars-production"
   ]
  },
  {
   "section": "specs",
   "claimText": "The original engine was a 1,991 cc air-cooled flat-six with a single overhead camshaft per bank and twin Solex carburettors giving 130 PS, for 210 km/h and 0-100 km/h in 9.1 seconds by Porsche's figures; Classic & Sports Car places peak power at 5,800 rpm.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "porsche-newsroom-gen1",
    "porsche-brief-history",
    "wikipedia-911-classic",
    "csc-buyers-guide"
   ]
  },
  {
   "section": "specs",
   "claimText": "The 911S of 1967 produced 160 PS at 6,600 rpm on Weber carburettors and introduced the forged Fuchs five-spoke wheel; a road test of a 1968 car recorded 139 mph, 0-60 mph in 7.6 seconds and 1,030 kg, while Classic & Sports Car quotes 137 mph and 8 seconds.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-911-classic",
    "drivemy-1968-911s",
    "csc-buyers-guide"
   ]
  },
  {
   "section": "specs",
   "claimText": "For the 1969 B-series the rear wheels were moved 57 mm aft, taking the wheelbase from 2,211 to 2,268 mm; the Porsche Club of America rounds this to 2.5 inches for 1969 and Classic & Sports Car to 2 inches in 1968, the calendar year the B-series began.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-911-classic",
    "pca-model-guide",
    "csc-buyers-guide"
   ]
  },
  {
   "section": "specs",
   "claimText": "The range was split into 911T, 911E and 911S with outputs of 125, 155 and 180 PS at 2,195 cc for 1970-1971 and 130, 165 and 190 PS at 2,341 cc for 1972-1973, the E and S using Bosch mechanical fuel injection from 1969 and the T carburettors throughout.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-911-classic",
    "csc-buyers-guide",
    "pca-model-guide",
    "renndriver-911t"
   ]
  },
  {
   "section": "specs",
   "claimText": "Gearboxes were the Type 901 five-speed with dogleg first to 1971, with a four-speed standard on the 911T, replaced by the Type 915 with an H-pattern for the first four gears from 1972; the Sportomatic clutchless semi-automatic was optional from 1967-1968.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-911-classic",
    "pca-model-guide",
    "csc-buyers-guide",
    "drivemy-1968-911s"
   ]
  },
  {
   "section": "history",
   "claimText": "The Targa was unveiled at Frankfurt in autumn 1965 and entered production in December 1966 for the 1967 model year with a stainless-steel roll hoop and a zip-out plastic rear window, replaced by a fixed glass window from 1969.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "porsche-newsroom-gen1",
    "csc-buyers-guide",
    "pca-model-guide",
    "wikipedia-911-classic"
   ]
  },
  {
   "section": "production",
   "claimText": "The total number of long-hood 911s built from 1964 to 1973 is stated as 81,100 by Porsche, 80,352 by the Early 911 Registry, approximately 89,000 by Sports Car Market and 89,652 by Classic & Sports Car.",
   "confidence": "low",
   "status": "disputed",
   "sourceRefs": [
    "porsche-newsroom-gen1",
    "porsche-brief-history",
    "early-911-registry",
    "scm-1971-911s",
    "csc-buyers-guide"
   ],
   "conflictNote": "Porsche's 60th-anniversary press kit states 81,100 examples of the 911 built by the 1973 financial year, and porsche.com repeats 81,100. The Early 911 Registry states 80,352 built between 1964 and 1973. Sports Car Market states approximately 89,000 long-hood 911s. Classic & Sports Car states 89,652 built 1964-1973. None of the four explains whether it counts by financial, calendar or model year or whether the 1973 Carrera RS is included. Not resolved by any source consulted here."
  },
  {
   "section": "production",
   "claimText": "1,580 Carrera RS 2.7s were built for the 1973 model year, a figure stated identically by Porsche, Wikipedia, RM Sotheby's, Elferspot and Classic Driver; Porsche's breakdown is 200 M471 Sport, 1,308 M472 Touring, 55 racing versions and 17 base cars, which sums to 1,580 and therefore includes the RSRs.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "porsche-newsroom-rs27",
    "wikipedia-911-classic",
    "rm-mo26-rs-touring",
    "rm-pa26-rs-touring",
    "elferspot-s24-rs",
    "classicdriver-rs"
   ]
  },
  {
   "section": "production",
   "claimText": "Per-variant figures from the sources consulted include 22 911R cars for 1968, 1,430 911S coupes and 10,234 cars of all types for 1971, 5,054 2.4-litre 911S cars over 1972-1973 and approximately 35,000 911Ts over 1967-1973.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "stuttcars-production",
    "scm-1971-911s",
    "elferspot-s24-rs",
    "renndriver-911t"
   ]
  },
  {
   "section": "history",
   "claimText": "The Carrera RS 2.7 was developed from May 1972 to homologate the 911 for Group 4, which required 500 cars; it was shown at Paris on 5 October 1972 at DM 34,000, the 500 were sold by the end of November 1972, and production reached 1,500 by July 1973.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "porsche-newsroom-rs27",
    "classicdriver-rs",
    "wikipedia-911-classic"
   ]
  },
  {
   "section": "specs",
   "claimText": "The Carrera RS engine is a 2,687 cc Type 911/83 flat-six of 90 x 70.4 mm with Nikasil-lined cylinders and mechanical injection, rated at 210 PS at 6,300 rpm and 255 Nm (182 lb-ft) at 5,100 rpm; Porsche claims 960 kg for the Sport, 1,075 kg for the Touring, 0-100 km/h in 5.8 and 6.3 seconds respectively and 240 km/h for the Touring.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "porsche-newsroom-rs27",
    "wikipedia-911-classic",
    "csc-buyers-guide",
    "elferspot-s24-rs"
   ]
  },
  {
   "section": "market",
   "claimText": "As of September 2026 classic.com records an average sale of $115,342 across 1964-1973 911s, a 1964-1965 benchmark of $197,375, an RS Touring benchmark of $565,671 and an RS Lightweight benchmark of $1,117,857 trending down, with the model's highest recorded sale at $2,425,000 for a Lightweight in August 2022.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-f-body",
    "classic-rs-lightweight"
   ]
  },
  {
   "section": "market",
   "claimText": "RM Sotheby's sold a restored Tangerine RS Touring, chassis 9113601556, for $896,000 at Monterey in August 2026 and a largely original Grand Prix White Touring with 1987 replacement crankcase halves, chassis 9113601272, for 353,750 euros at Paris in January 2026, both quoted as published without confirmation of buyer's premium.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "rm-mo26-rs-touring",
    "rm-pa26-rs-touring"
   ]
  },
  {
   "section": "market",
   "claimText": "As of September 2026 classic.com's short-wheelbase 911S page shows an average sale of $178,162 and August 2026 results of $257,600 for a 1967 soft-window Targa at Gooding Christie's, $231,000 for a 1967 S at Mecum Monterey and $112,000 for a 1968 S at Gooding, with a 1967 S Targa benchmark of $211,330.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-911s-swb"
   ]
  },
  {
   "section": "market",
   "claimText": "Renndriver's June 2026 guide values 911Ts at $80,000-120,000 for drivers, $120,000-175,000 for matching-numbers cars and $175,000-225,000 and above for concours cars, and claims a 10-20 percent Targa premium, whereas Classic & Sports Car in 2018 valued Targas 10 percent below coupes and Sportomatics 20 percent below manuals.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "renndriver-911t",
    "csc-buyers-guide"
   ]
  },
  {
   "section": "market",
   "claimText": "Long-hood values rose from a nice 1971 T Targa at $14,000 in 2004 and an RS at about £30,000 in the late 1990s to early S prices of a quarter of a million after 2013 and a $1.42 million Lightweight at Gooding Amelia Island in 2014, retreated from the 2014-2015 peak, and by April 2023 nice 911Ts had settled at $75,000-100,000.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "pca-long-hood-2023",
    "classicdriver-rs",
    "scm-1971-911s"
   ]
  },
  {
   "section": "problems",
   "claimText": "The original spring-loaded chain tensioners fail with age, allowing the chain to jump and the pistons to strike the valves, with a rebuild quoted at $6,000-10,000; Porsche's 1984 oil-fed Carrera tensioner can be retrofitted to 1969-1983 cars.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "pelican-tensioners",
    "csc-buyers-guide"
   ]
  },
  {
   "section": "problems",
   "claimText": "Rust is the principal risk, with body protection described as limited and the longitudinals under the doors and the battery box area named as vulnerable; almost all early flat-sixes leak oil, blue smoke on start-up indicates worn valve guides, the post-1968 magnesium crankcase is easily weakened, and MFI overhaul and gearbox rebuild were quoted at £500-2,000 and £2,500-5,000 respectively in 2018.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "csc-buyers-guide",
    "renndriver-911t"
   ]
  },
  {
   "section": "problems",
   "claimText": "Non-original Carrera RSs have been marketed as genuine since at least 2014, and individual cars carry replacement crankcases with restamped numbers, so build records and numbers matching are central to the RS market.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "classicdriver-rs",
    "rm-pa26-rs-touring",
    "rm-mo26-rs-touring"
   ]
  }
 ]
};
