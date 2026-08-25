/**
 * Researched model draft — BMW 2002 (1968-1976).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedBmw2002 = {
 "slug": "bmw/2002",
 "make": "BMW",
 "model": "2002",
 "generation": "02 Series",
 "generationCode": null,
 "trim": null,
 "yearStart": 1968,
 "yearEnd": 1976,
 "bodyStyles": [
  "2-door saloon (the standard 02 shell)",
  "3-door Touring hatchback (1971-1974)",
  "2-door Baur convertible (to 1971) and targa-top cabrio coach (1971-1975)"
 ],
 "engines": [
  "1,990 cc M10 SOHC inline-four, iron block and alloy head, single Solex carburettor, 100 PS (74 kW) DIN in the 2002; Car and Driver quoted 114 hp at 5,800 rpm for the 1968 US car",
  "1,990 cc M10 SOHC inline-four, twin Solex carburettors, 120 PS (88 kW) in the 2002 ti, never federalised",
  "1,990 cc M10 SOHC inline-four, Kugelfischer mechanical injection, 130 bhp at 5,800 rpm in the 2002 tii",
  "1,990 cc M31 SOHC inline-four, Kugelfischer injection with boost enrichment and a KKK turbocharger, 170 bhp at 5,800 rpm and 240 Nm (177 lb ft) at 4,000 rpm in the 2002 turbo",
  "1,573 cc M10 SOHC inline-four, 85 PS at 5,700 rpm in the 1600-2/1602"
 ],
 "productionTotal": null,
 "productionNotes": "No single 2002 total is asserted, because the published figures disagree by roughly sixty thousand cars. Wikipedia's model table gives 339,092 2002 saloons for 1968-1975 inside an 02 Series total of 837,038 built between 1966 and 1977; Silodrome's history states that almost 400,000 2002s were built over the same span. Neither shows its working.\n\nThe tii sub-totals are firmer but not uniform. Wikipedia gives 38,703 tii saloons and 5,783 tii Tourings. The UK 02 register publishes a breakdown summing to 44,478 tii of all types - 27,572 left-hand-drive, 7,447 United States and 3,678 right-hand-drive saloons, 5,058 2000 tii and 723 2002 tii Tourings - putting the saloon count at 38,697, six below Wikipedia; Classic Register repeats 44,478. Curbside Classic states roughly 27,500 in all, with over 22,500 before the August 1973 redesign, matching neither. BMW's own tii page gives no number.\n\nThe turbo is the most quoted and least settled: 1,672 from Wikipedia, Hagerty, classic.com, Silodrome, Classic & Sports Car and Supercar Nostalgia; about 1,671 from the BMW 2002 FAQ; 1,660 from RM Sotheby's Miami catalogue. Recurring without contradiction, though each on a single source: 16,448 2002 ti before the tii replaced it in April 1971, about 200 full factory cabriolets in 1971 at VINs 2790001-2790200 within an 02 cabriolet run of 4,199, and roughly 750 cars assembled in Montevideo.",
 "notableTrims": [
  {
   "name": "2002 round tail (1968-1973)",
   "note": "The 'roundie'. Circular rear lamps, and from the 1971 revision wraparound bumpers and a two-piece instrument binnacle. Hagerty places round-tail cars a clear step above square-tail equivalents, the largest price line inside the carburetted range."
  },
  {
   "name": "2002 square tail (1974-1976)",
   "note": "Square lamps with integral reflectors on a new rear panel from September 1973, reaching the United States for the 1974 model year. The cheapest way in, and the cars most often modified."
  },
  {
   "name": "2002 ti (1968-1971)",
   "note": "Twin-Solex 120 PS car, never federalised because the related 1600ti could not meet US emissions law. Replaced by the tii in April 1971. Easy to fabricate from a base car, so paperwork carries the value."
  },
  {
   "name": "2002 tii (1971-1975)",
   "note": "Kugelfischer injection, 130 bhp at 5,800 rpm, 46 mm inlet valves, 256 mm front discs, boxed rear trailing arms and wider wheels. BMW called it the wolf in sheep's clothing. The strongest sustained demand short of the turbo."
  },
  {
   "name": "2002 turbo (1973-1975)",
   "note": "By BMW's account Europe's first series-produced turbocharged car: KKK turbocharger, 170 bhp, riveted arch extensions, front air dam, ZF limited-slip differential. Left-hand drive only, in Chamonix White or Polaris Silver."
  },
  {
   "name": "2002 Touring and Baur cabriolet",
   "note": "The three-door Touring (1971-1974) was never sold in the United States and kept round rear lamps after the saloon went square. Baur built full convertibles to 1971, then a targa-top cabrio coach; rust in a converted shell is worse again."
  }
 ],
 "specs": {
  "layout": "Front longitudinal engine, rear-wheel drive",
  "chassis": "Unitary steel monocoque, shortened New Class floorpan, 2,500 mm (98.4 in) wheelbase",
  "engine": "1,990 cc M10 SOHC inline-four, iron block and alloy head; type M31 when turbocharged",
  "fuel_systems": "Single Solex (2002), twin Solex (ti), Kugelfischer injection (tii), the same with a KKK turbocharger (turbo)",
  "power": "100 PS in the 2002, 120 PS in the ti, 130 bhp at 5,800 rpm in the tii, 170 bhp at 5,800 rpm in the turbo - manufacturer DIN claims",
  "torque": "240 Nm (177 lb ft) at 4,000 rpm for the turbo; 130 lb ft for the tii per Hagerty",
  "compression": "9.5:1 for the tii per Classic & Sports Car and Supercar Nostalgia; the turbo figure is contested",
  "transmission": "Four-speed Getrag manual or automatic from 1969; optional five-speed dogleg Getrag on the turbo",
  "suspension": "MacPherson struts front, semi-trailing arms rear; 20 mm front and 16 mm rear anti-roll bars on the turbo",
  "brakes": "Servo front discs and rear drums; 256 mm front discs on the tii; four-piston front calipers on the turbo",
  "weight": "940-1,080 kg kerb per Wikipedia; the turbo at 1,080 kg per Supercar Nostalgia and 1,054 kg (2,324 lb) per Silodrome",
  "acceleration": "8.3 s to 60 mph for the tii per the UK 02 register; the turbo about 7 s to 100 km/h per Supercar Nostalgia and 7.5 s to 60 mph per Classic & Sports Car",
  "top_speed_claimed": "190 km/h (118 mph) for the tii per BMW against 185 km/h in Wikipedia's table; 211 km/h (131 mph) for the turbo - manufacturer claims",
  "price_when_new": "DM 12,765 for the tii, DM 18,720 for the turbo; Car and Driver quoted $2,850 for a US 2002 in April 1968"
 },
 "summary": "The BMW 2002 began as an improvisation. Alex von Falkenhausen, who ran engine development, and Helmut Werner Bonsch, who ran product planning, had each quietly fitted the two-litre M10 from the 2000 saloon into his own 1602, discovered the coincidence and put the case to the board; the American importer Max Hoffman wanted more power than the 1600ti, which could not meet United States emissions law, and the larger engine could. What emerged in 1968 was a plain two-door saloon on a 2,500 mm wheelbase with a single-carburettor 100 PS engine, and within two model years it had changed BMW's standing in America. Above it sat the twin-carburettor ti, the Kugelfischer-injected tii and, from the 1973 Frankfurt show, the 2002 turbo, which BMW records as the first series-produced European car with an exhaust turbocharger. Round rear lamps gave way to square ones in September 1973, a distinction the market still prices.",
 "history": "## Two Engineers and an Importer\nThe 1600-2 was announced in March 1966 on a shortened New Class floorpan with a 2,500 mm wheelbase, the '-2' denoting two doors: light, upright, struts at the front and semi-trailing arms at the back, and not aimed at America. In mid-1967 Alex von Falkenhausen and Helmut Werner Bonsch each fitted the 1,990 cc M10 from the 2000 saloon into his own 1602, found the other had done the same, and took a joint proposal to the board. The commercial case came from New York: Max Hoffman wanted a faster car, the 1600ti could not pass United States emissions rules, and the two-litre already could.\n\n## Turn Your Hymnals to 2002\nIn April 1968 Car and Driver published David E. Davis Jr's review under that title, and BMW of North America still credits the article, read by roughly a million subscribers, with changing the company's American trajectory. Davis quoted $2,850, 114 hp at 5,800 rpm, sixty in second and eighty in third, and a top speed 'a shade over a hundred'. The 114 hp does not match BMW's 100 PS DIN rating and the piece names no standard, so the two should not be read against each other. BMW's American sales tell the rest: 1,253 cars in 1966, 4,564 in 1967, 9,172 in 1968 and 11,638 in 1969, the last limited by what Munich could build rather than by demand.\n\n## ti, tii and the Kugelfischer Pump\nThe sporting versions arrived in sequence. The twin-Solex 2002 ti made 120 PS from 1968 and was never federalised. In April 1971 the tii replaced it, using the Kugelfischer mechanical pump already fitted to the 2000 tii and taking 130 bhp at 5,800 rpm, with 46 mm inlet valves, 256 mm front discs, boxed rear trailing arms and half-inch wider wheels. BMW priced it at DM 12,765, some DM 2,000 above a standard car, and called it the wolf in sheep's clothing. Motor Sport, driving a Group 1 tii in July 1972, recorded 143 bhp from a prepared engine - at least 13 bhp over the production DIN rating - found power falling away beyond 6,000 rpm, and reported a car that would run rings round the opposition on bumpy circuits while kicking its rear wheels up under provocation.\n\n## Roundies, Squares and the Emissions Years\nThe 02 changed twice. A 1971 revision brought wraparound bumpers, revised rear lamps and a two-piece instrument cluster. The larger break came from September 1973, when a new rear panel carried square lamps with built-in reflectors; American cars took the change for the 1974 model year, and the Touring kept round lamps to the end. Alongside ran a slow strangulation of the United States engine: EGR replaced the air pump mid-1972, 1975 brought a thermal reactor, air pump, EGR and lower compression together, and 1976 deleted the reactor for a cylinder head from the coming E21.\n\n## The Turbo and the Oil Crisis\nBMW showed the 2002 turbo at Frankfurt in September 1973 and records it as the first series-produced European car with an exhaust turbocharger, the KKK unit adding forty horsepower to the tii's engine for 170 bhp and a claimed 211 km/h. It had riveted arch extensions, a front air dam, a ZF limited-slip differential and, at first, 'turbo' in mirror script across the spoiler so that drivers ahead would read it correctly. The fuel crisis broke over the launch, the script was deleted after objection, and BMW concedes the car remained marginal. Left-hand drive only, because the exhaust manifold left no room for a right-hand column, it was gone by the middle of 1975.",
 "marketNotes": "As of August 2026, classic.com's 2002 page shows how completely specification governs price: the base 2002 benchmarks at $24,600, the tii coupe at $35,325 and the turbo at $118,720, against a page-level average sale of $32,659 from 29 listings. The floor is genuinely low - the cheapest recorded 2002 is $1,750 for a 1976 project on 18 June 2023 - and the ceiling a 1974 turbo advertised at $225,000 in July 2026. The tii page, as of August 2026, gives a benchmark of $36,139 from eleven listings, original cars between $35,325 and $38,947 and modified cars from $8,802 to $74,000, with a lowest recorded sale of $2,600 in May 2025. Turbo money sits in a separate and rising market: as of August 2026 classic.com records an average sale of $111,972 against the $118,720 benchmark, with results of EUR 126,500 in October 2025, $127,000 in December 2025, $124,000 in February 2026 and $155,500 in March 2026, against a low of $40,000 in December 2024. RM Sotheby's sold chassis 4291234, a 1974 turbo showing 62,834 km, for $140,000 at Miami on 28 February 2025, and chassis 4291147 for EUR 126,500 at Munich in October 2025; both are the house's published results rather than hammer prices.",
 "whatToLookFor": "Structure first, and from underneath. The rear shock towers are the fault that ends cars: they rot from inside the boot and take the upper spring perch with them. Check the front floors, the frame rails from the front crossmembers back to the floor and again under the fuel tank, the rockers, which are structural rather than cosmetic here, and the upper corners of the front wings behind the indicators. Fresh undercoating on a car being sold is a question, not a reassurance.\n\nThen establish what the car is. Round or square rear lamps sets the year band and a large part of the price. A ti or tii is worth confirming against chassis and engine numbers rather than badges, since the mechanical difference from a base car is modest and the money difference is not. A turbo should be left-hand drive and originally Chamonix White or Polaris Silver; RM Sotheby's disclosed on one Munich car that earlier bodywork had removed the original chassis stamp, the sort of thing that surfaces only in a catalogue addendum.\n\nMechanically, blue smoke on the overrun points at valve guides, second-gear synchromesh is the gearbox's weak point, and the driveshaft flex disc and centre bearing are consumables. On a tii the Kugelfischer pump governs everything: the Tii Register publishes BMW North America's dealer manual for the system precisely because a rebuild still needs a specialist with the right tools and test equipment, and there are few of them.",
 "commonProblems": "Corrosion dominates and is the expensive fault: rear shock towers, front floors, frame rails fore and aft, rockers, front wing corners and the spare wheel well. A shell that has lost its shock towers is a restoration project regardless of how the engine sounds. Worn valve guides show as blue smoke on deceleration, and oil weeps from the main seals, valve cover, distributor and sump are close to universal. Solex carburettors give trouble; on the tii the Kugelfischer pump can need a rebuild only a handful of specialists will attempt. The four-speed gearbox loses second-gear synchromesh and leaks from its shaft seals, behind a flex disc that cracks and a centre support bearing that sags. Emissions-era United States cars carry their own driveability problems, the 1975 combination of thermal reactor, air pump, EGR and reduced compression being the least loved specification of the run. The rest are small but tedious: heater blowers that need the dashboard out, cracked dash tops, expensive sunroof cables, and air-conditioning compressors Hagerty describes as beyond saving.",
 "valueTrajectory": "The 2002 was cheap for a long time. Hagerty's buyer's guide describes pricing as flat until 2015, after which base round-tail cars rose about 45 per cent and tii values by between 143 and 160 per cent, the tii adding a further 55 per cent over the two years before the guide was written before cooling towards single-digit annual growth. The same guide records a knock-on at the top: turbo prices climbed far enough that buyers priced out of them moved to the tii, which is much of why tii money separated from base-car money rather than rising with it. As of August 2026 that stratification is visible in classic.com's figures, where a base 2002 benchmarks at $24,600 against $35,325 for a tii coupe and $118,720 for a turbo, the last trending upward. The gap that matters most now is not between variants but between a sound shell and a rusty one, because replacing shock towers and floors has not become cheaper.",
 "overallConfidence": "high",
 "sources": [
  {
   "ref": "wikipedia-02",
   "title": "BMW 02 Series",
   "url": "https://en.wikipedia.org/wiki/BMW_02_Series",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "02 Series 837,038 (1966-77); 2002 339,092; tii 38,703; turbo 1,672; Touring 15,969; tii Touring 5,783; cabriolet 4,199; 2,500 mm wheelbase; 940-1,080 kg; tii 185 km/h; ~750 cars built in Montevideo; E21 from 1975."
  },
  {
   "ref": "bmwgroup-classic-tii",
   "title": "BMW 2002 tii",
   "url": "https://www.bmwgroup-classic.com/en/models/bmw-classics/product-description-page.ad-44-1.bmw-2002-tii.html",
   "publisher": "BMW Group Classic",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "BMW's tii record: April 1971 to October 1975, 130 bhp at 5,800 rpm, 190 km/h (118 mph), DM 12,765, about DM 2,000 over a standard car, 'nearly 40,000 customers'. No production total."
  },
  {
   "ref": "bmwgroup-classic-turbo",
   "title": "BMW 2002 turbo",
   "url": "https://www.bmwgroup-classic.com/en/models/bmw-classics/product-description-page.ad-45-1.bmw-2002-turbo.html",
   "publisher": "BMW Group Classic",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "BMW's turbo record: October 1973 to June 1975, IAA Frankfurt launch September 1973, 170 bhp at 5,800 rpm, 211 km/h, DM 18,720, first exhaust turbocharger in a European production car, worth 40 hp over the tii, marginal in the oil crisis."
  },
  {
   "ref": "bmwna-hymnals",
   "title": "BMW of North America marks 50 years of 'Turn Your Hymnals to 2002'",
   "url": "https://www.press.bmwgroup.com/usa/article/detail/T0447510EN_US?language=en_US",
   "publisher": "BMW of North America",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Car and Driver's April 1968 article by David E. Davis Jr and its roughly million readers; Hoffman's earlier failures with larger BMWs; US sales 1,253 (1966), 4,564 (1967), 9,172 (1968), 11,638 (1969), the last capped by Munich's capacity."
  },
  {
   "ref": "deansgarage-c-and-d-1968",
   "title": "Turn Your Hymnals to 2002 (Car and Driver, April 1968, reprinted)",
   "url": "https://www.deansgarage.com/turn-your-hymnals-to-2002/",
   "publisher": "Dean's Garage",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Period test reprint: $2,850, 114 hp at 5,800 rpm, 60 mph in second and 80 in third, top speed 'a shade over a hundred'. Names no measurement standard."
  },
  {
   "ref": "motorsport-july-1972",
   "title": "A brace of BMWs and a look into the Munich marque's competition future",
   "url": "https://www.motorsportmagazine.com/archive/article/july-1972/56/a-brace-of-bmws/",
   "publisher": "Motor Sport",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "July 1972 period test: a Group 1 tii at 143 bhp at 5,800 rpm, at least 13 bhp over the DIN rating, indicated 112 mph at Silverstone, power falling away above 6,000 rpm, tail-out handling."
  },
  {
   "ref": "hagerty-2002-guide",
   "title": "Your definitive 1968-76 BMW 2002 buyer's guide",
   "url": "https://www.hagerty.com/media/car-profiles/your-definitive-1968-76-bmw-2002-buyers-guide/",
   "publisher": "Hagerty Media",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Round lamps 1968-73 and square 1974-76; US tii 1972-74; turbo 1,672 in 1974; tii 130 hp and 130 lb ft; US emissions changes of 1972, 1975 and 1976; the rust map; valve guides, second-gear synchro, flex disc, blower, dash and air-conditioning faults; automatics 15 per cent back; appreciation since 2015."
  },
  {
   "ref": "cands-car-turbo",
   "title": "BMW 2002 turbo: induction ceremony",
   "url": "https://www.classicandsportscar.com/features/bmw-2002-turbo-induction-ceremony",
   "publisher": "Classic & Sports Car",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Turbo: 1,672 in a ten-month run, Chamonix white or Polaris silver, compression 8.5:1 against the tii's 9.5:1, KKK boost 1.0-1.2 bar, 170 bhp and 178 lb ft at 4,000 rpm, 7.5 s to 60 mph, 131 mph, DM 18,720."
  },
  {
   "ref": "curbside-tii-outtake",
   "title": "Curbside Outtake: 1971-73 BMW 2002 tii - These Happy Golden Years",
   "url": "https://www.curbsideclassic.com/blog/cc-outtake/curbside-outtake-1971-73-bmw-2002-tii-these-happy-golden-years/",
   "publisher": "Curbside Classic",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Roughly 27,500 tii in total with over 22,500 before the August 1973 redesign; round lamps on 1971-73 cars, the Modell 73 tii Touring excepted; tii dropped from the US after 1973; Touring never sold there."
  },
  {
   "ref": "silodrome-2002",
   "title": "The BMW 2002 - A Quick Guide",
   "url": "https://silodrome.com/history-bmw-2002/",
   "publisher": "Silodrome",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Origin story of von Falkenhausen and Bonsch and Hoffman's role; states almost 400,000 2002s built 1968-1975; base 101 hp, ti 119 hp, tii 130 hp, turbo 170 hp; Alpina kits."
  },
  {
   "ref": "silodrome-turbo",
   "title": "The BMW 2002 Turbo - BMW's First Turbocharged Production Car",
   "url": "https://silodrome.com/bmw-2002-turbo-classic-car/",
   "publisher": "Silodrome",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Turbo: 1,672 built, 1973 Frankfurt debut, KKK turbocharger with Kugelfischer injection, compression 6.9:1, 170 hp at 5,800 rpm, 177 lb ft, 2,324 lb (1,054 kg), reversed script later dropped."
  },
  {
   "ref": "supercarnostalgia-turbo",
   "title": "BMW E20 2002 Turbo Guide",
   "url": "https://supercarnostalgia.com/blog/bmw-2002-turbo",
   "publisher": "Supercar Nostalgia",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Turbo: 1,672 including twelve pre-production cars in late 1973, series build January 1974 to July 1975; type M31; compression cut from 9.5:1 to 6.9:1; KKK BLD at 0.55 bar; 170 bhp, 177 lb ft; 1,080 kg; about 7 s to 100 km/h; five-speed dogleg option; ZF limited-slip differential; left-hand drive only."
  },
  {
   "ref": "classicregister-tii",
   "title": "Info Guide: 1971-1975 BMW 02 Series 2002 Tii Coupe",
   "url": "https://classicregister.com/guides/info-guide-1971-1975-bmw-02-series-2002-tii-coupe",
   "publisher": "Classic Register",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "tii guide: 44,478 built including Tourings; 46 mm inlet valves against 44 mm; 256 mm front rotors, boxed rear trailing arms, wider wheels; 1975 thermal reactor, air pump, EGR and lower compression."
  },
  {
   "ref": "bmw2002uk-tii",
   "title": "Tii - BMW 2002 Register",
   "url": "https://www.bmw2002.co.uk/history-of-the-02/tii/",
   "publisher": "BMW 2002 Register (UK)",
   "sourceType": "club-forum",
   "reliability": "medium",
   "notes": "Club tii breakdown totalling 44,478: 27,572 LHD, 7,447 US and 3,678 RHD saloons, 5,058 2000 tii and 723 2002 tii Tourings; ended September 1975; 130 bhp, 118 mph, 8.3 s to 60 mph; pump warm-up unit; larger front brakes."
  },
  {
   "ref": "bmw2002faq-production",
   "title": "The BMW 2002 Production Run",
   "url": "https://www.bmw2002faq.com/articles/technical-articles/history-and-reference/the-bmw-2002-production-run-r367/",
   "publisher": "BMW 2002 FAQ",
   "sourceType": "club-forum",
   "reliability": "low",
   "notes": "Club reference used here for dating and chassis ranges, not totals: square lamps on a new rear panel from September 1973 for the Modell 73/1974 model year; US 2002 from VIN 1660001, about 2,850 to September 1968, build ending July 1976. Also 16,448 ti, ~200 cabriolets at VINs 2790001-2790200, ~1,671 turbos."
  },
  {
   "ref": "tii-register",
   "title": "The BMW 2002tii Fuel Injection System Manual & Video",
   "url": "https://www.2002tii.org/the-bmw-2002tii-fuel-injection-system-manual-video/",
   "publisher": "The Tii Register",
   "sourceType": "registry",
   "reliability": "medium",
   "notes": "Registry running since 1984, publishing BMW North America's dealer manual for the Kugelfischer system and stating that a pump rebuild still needs a specialist with the right tools and equipment."
  },
  {
   "ref": "classic-2002",
   "title": "BMW 2002 Market",
   "url": "https://www.classic.com/m/bmw/02-series/2002/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of August 2026: average sale $32,659 from 29 listings; base 2002 $24,600, tii coupe $35,325, turbo $118,720; lowest sale $1,750 on 18 June 2023; highest listing $225,000 on 28 July 2026."
  },
  {
   "ref": "classic-2002tii",
   "title": "BMW 2002tii Market",
   "url": "https://www.classic.com/m/bmw/02-series/2002/tii/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of August 2026: tii benchmark $36,139 from eleven listings; originals $35,325-$38,947, modified $8,802-$74,000; lowest sale $2,600 on 1 May 2025; top asking $74,800 on 4 July 2026."
  },
  {
   "ref": "classic-2002-turbo",
   "title": "BMW 2002 Turbo Market",
   "url": "https://www.classic.com/m/bmw/02-series/2002/turbo/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of August 2026: turbo benchmark $118,720 trending up, average sale $111,972, two listings; low $40,000 on 17 December 2024; EUR 126,500 on 18 October 2025, $127,000 on 10 December 2025, $124,000 on 9 February 2026, $155,500 on 20 March 2026. States 1,672 built."
  },
  {
   "ref": "classic-rm-miami-lot",
   "title": "1974 BMW 2002 Turbo sold at RM Sotheby's Miami (2025)",
   "url": "https://www.classic.com/a/rm-sothebys-miami-2025-XnlwYQ4/lots/1974-bmw-2002-turbo-WjDE274/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Dates the Miami turbo lot: 28 February 2025, Coral Gables, lot 281, sold for $140,000."
  },
  {
   "ref": "rm-mi25-turbo",
   "title": "1974 BMW 2002 Turbo, Miami 2025",
   "url": "https://rmsothebys.com/auctions/mi25/lots/r0029-1974-bmw-2002-turbo/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold for $140,000, Miami 2025, lot 281. Chassis and engine 4291234, 62,834 km, Chamonix White, factory five-speed dogleg. Catalogue states only 1,660 examples were produced."
  },
  {
   "ref": "rm-mu25-turbo",
   "title": "1975 BMW 2002 Turbo, Munich 2025",
   "url": "https://rmsothebys.com/auctions/mu25/lots/b0001-1975-bmw-2002-turbo/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold for EUR 126,500, Munich 2025, lot 118. Chassis and engine 4291147, five-speed dogleg, matching numbers; catalogue states one of 1,672. Addendum: earlier bodywork removed the original chassis stamp, now restamped."
  }
 ],
 "claims": [
  {
   "section": "history",
   "claimText": "The 2002 arose because Alex von Falkenhausen and Helmut Werner Bonsch independently fitted the 1,990 cc M10 from the 2000 saloon into their own 1602s and jointly proposed it to the board, with Max Hoffman supplying the commercial case: the 1600ti could not be made to meet United States emissions law and the two-litre already could.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "silodrome-2002",
    "bmwna-hymnals",
    "wikipedia-02"
   ]
  },
  {
   "section": "history",
   "claimText": "Car and Driver published David E. Davis Jr's 'Turn Your Hymnals to 2002' in April 1968, quoting $2,850 and 114 hp at 5,800 rpm without naming a measurement standard; BMW of North America credits the article with changing the company's American position and records US sales of 1,253 cars in 1966, 4,564 in 1967, 9,172 in 1968 and 11,638 in 1969.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "deansgarage-c-and-d-1968",
    "bmwna-hymnals"
   ]
  },
  {
   "section": "specs",
   "claimText": "The 2002 uses a 1,990 cc M10 single-overhead-camshaft inline-four with an iron block and alloy head, rated by BMW at 100 PS in the carburetted car, 120 PS in the twin-Solex ti, 130 bhp at 5,800 rpm in the Kugelfischer-injected tii and 170 bhp at 5,800 rpm in the turbocharged M31 version. The tii also took 46 mm inlet valves against 44 mm, 256 mm front discs with revised strut housings, boxed rear trailing arms and half-inch wider wheels.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "bmwgroup-classic-tii",
    "bmwgroup-classic-turbo",
    "wikipedia-02",
    "supercarnostalgia-turbo",
    "classicregister-tii",
    "bmw2002uk-tii"
   ]
  },
  {
   "section": "specs",
   "claimText": "The 2002 turbo's compression ratio and boost pressure are reported inconsistently and no figure is asserted here.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "silodrome-turbo",
    "supercarnostalgia-turbo",
    "cands-car-turbo"
   ],
   "conflictNote": "Silodrome and Supercar Nostalgia both state 6.9:1, Supercar Nostalgia adding that it was cut from the tii's 9.5:1 and giving KKK boost at 0.55 bar. Classic & Sports Car states 8.5:1 against 9.5:1 for the tii and boost of 1.0 to 1.2 bar. The accounts cannot both be right, and no source consulted here resolves it. Unresolved."
  },
  {
   "section": "history",
   "claimText": "Motor Sport tested a Group 1 prepared 2002 tii in July 1972, recording 143 bhp at 5,800 rpm - at least 13 bhp above the production DIN rating - an indicated 112 mph at Silverstone, power falling away sharply above 6,000 rpm, and handling that would run rings round the opposition on bumpy circuits while lifting its rear wheels under provocation.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "motorsport-july-1972"
   ]
  },
  {
   "section": "production",
   "claimText": "No single total for 2002 production is asserted, because the published figures disagree by roughly sixty thousand cars.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "wikipedia-02",
    "silodrome-2002"
   ],
   "conflictNote": "Wikipedia's model table gives 339,092 2002 saloons for 1968-1975 within an 02 Series total of 837,038. Silodrome's history states almost 400,000 2002s over the same period. Neither states a basis and nothing consulted reconciles them. Unresolved, so productionTotal is left null."
  },
  {
   "section": "production",
   "claimText": "Published totals for the 2002 tii differ materially and no single figure is asserted.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "wikipedia-02",
    "bmw2002uk-tii",
    "curbside-tii-outtake",
    "classicregister-tii",
    "bmwgroup-classic-tii"
   ],
   "conflictNote": "Wikipedia gives 38,703 tii saloons plus 5,783 tii Tourings. The UK 02 register publishes a breakdown summing to 44,478 tii of all types, of which 38,697 are saloons - six fewer than Wikipedia - and Classic Register repeats 44,478. Curbside Classic states roughly 27,500 in total, matching neither. BMW gives no number. Unresolved."
  },
  {
   "section": "production",
   "claimText": "The 2002 turbo total is reported as 1,672, approximately 1,671 or 1,660 depending on the source, and the production window differs again.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "wikipedia-02",
    "cands-car-turbo",
    "silodrome-turbo",
    "supercarnostalgia-turbo",
    "hagerty-2002-guide",
    "classic-2002-turbo",
    "bmw2002faq-production",
    "rm-mi25-turbo",
    "bmwgroup-classic-turbo"
   ],
   "conflictNote": "Wikipedia, Classic & Sports Car, Silodrome, Supercar Nostalgia, Hagerty and classic.com state 1,672; the BMW 2002 FAQ states about 1,671 through June 1975; RM Sotheby's Miami catalogue states 1,660. On dates, BMW Group Classic records October 1973 to June 1975, Supercar Nostalgia twelve pre-production cars in late 1973 then series build from January 1974 to July 1975, and Hagerty the whole run in 1974. Unresolved."
  },
  {
   "section": "production",
   "claimText": "Round rear lamps ran to the Modell 73 update of September 1973, when a new rear panel introduced square lamps with integral reflectors; United States cars took the change for the 1974 model year and the Touring retained round lamps to the end of its run.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "bmw2002faq-production",
    "hagerty-2002-guide",
    "wikipedia-02",
    "curbside-tii-outtake"
   ]
  },
  {
   "section": "history",
   "claimText": "BMW records the 2002 turbo, launched at Frankfurt in September 1973, as the first series-produced European car with an exhaust turbocharger, the KKK unit adding forty horsepower over the tii, and concedes that the car remained marginal because it arrived with the oil crisis.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "bmwgroup-classic-turbo",
    "rm-mu25-turbo",
    "cands-car-turbo"
   ]
  },
  {
   "section": "problems",
   "claimText": "The defining fault is corrosion of the rear shock towers, front floors, frame rails, rockers, front wing corners and spare wheel well; on the engine, worn valve guides show as blue smoke on the overrun and oil weeps from the main seals, valve cover, distributor and sump are close to universal, while the gearbox loses second-gear synchromesh and the driveshaft flex disc and centre support bearing are consumables.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "hagerty-2002-guide",
    "bmw2002faq-production"
   ]
  },
  {
   "section": "problems",
   "claimText": "On a tii the Kugelfischer injection pump governs running quality and cost; the Tii Register publishes BMW North America's dealer manual and training video for the system but states plainly that a rebuild still requires a specialist with the right tools, parts and test equipment.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "tii-register",
    "bmw2002uk-tii",
    "hagerty-2002-guide"
   ]
  },
  {
   "section": "market",
   "claimText": "As of August 2026 classic.com benchmarks the base 2002 at $24,600, the tii coupe at $35,325 and the turbo at $118,720, against a page-level average sale of $32,659 from 29 listings, with a recorded floor of $1,750 for a 1976 project in June 2023 and a ceiling of $225,000 asked for a 1974 turbo in July 2026.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-2002"
   ]
  },
  {
   "section": "market",
   "claimText": "As of August 2026 classic.com puts the 2002 tii benchmark at $36,139 from eleven listings, with original cars between $35,325 and $38,947, modified cars from $8,802 to $74,000, a lowest recorded sale of $2,600 in May 2025 and a highest asking price of $74,800 in July 2026.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-2002tii"
   ]
  },
  {
   "section": "market",
   "claimText": "Turbo values form a separate and rising market: as of August 2026 classic.com records a benchmark of $118,720 and an average sale of $111,972, with results of EUR 126,500 in October 2025, $127,000 in December 2025, $124,000 in February 2026 and $155,500 in March 2026 against a low of $40,000 in December 2024. RM Sotheby's sold chassis 4291234 for $140,000 at Miami on 28 February 2025 and chassis 4291147 for EUR 126,500 at Munich in October 2025, both as published by the house rather than hammer prices.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-2002-turbo",
    "rm-mi25-turbo",
    "rm-mu25-turbo",
    "classic-rm-miami-lot"
   ]
  }
 ]
};
