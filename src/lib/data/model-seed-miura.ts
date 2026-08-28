/**
 * Researched model draft - Lamborghini Miura (1966-1973).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedMiura = {
 "slug": "lamborghini/miura",
 "make": "Lamborghini",
 "model": "Miura",
 "generation": "Miura",
 "generationCode": "P400",
 "trim": null,
 "yearStart": 1966,
 "yearEnd": 1973,
 "bodyStyles": [
  "2-door berlinetta by Bertone, aluminium and steel panels over a folded and welded sheet-steel platform",
  "2-door open show car (Bertone Miura Roadster, one built, never a production body style)"
 ],
 "engines": [
  "3,929 cc Bizzarrini-derived 60-degree quad-cam V12, transverse, four triple-choke Weber carburettors; 350 CV at 7,000 rpm (P400) per Lamborghini, 345 bhp quoted elsewhere",
  "3,929 cc V12 with enlarged inlet ports, higher-lift camshafts and raised compression; 370 CV at 7,700 rpm (P400 S), 365 bhp quoted elsewhere",
  "3,929 cc V12 with revised cam timing and larger carburettors; 385 CV at 7,850 rpm (P400 SV), 375-380 bhp quoted elsewhere. Later SV engines use a split sump separating gearbox oil from engine oil"
 ],
 "productionTotal": null,
 "productionNotes": "No two authorities agree, and the disagreement runs through every variant. Lamborghini's own heritage record gives 265 P400, 338 P400 S and 150 SV, which sums to 753 cars. Wikipedia states 275 P400, about 338 S and 150 SV. classic.com states 764 built in total and, on its P400 page, that 275 P400 left the factory. LamboCARS states 763. Goodwood says over 760. RM Sotheby's own explainer declines a figure and says fewer than 800 over seven years. The Miura Register, whose totals are credited to Dr Stefano Pasini working from Automobili Lamborghini records, lists 274 P400 and 147 SV - close to the factory figures but identical to none of them, and its counts are of cars recorded rather than cars built. The SV number is the most contested: Lamborghini and most secondary sources say 150, Supercars.net 148, the register 147. Because a substantial number of P400 and S cars were later rebuilt to S or SV specification, the boundary between a factory SV and a converted one is not always crisp in the record. The derivatives are worse. Lamborghini says four SVJ, Wikipedia six during production, Classic Trader about six; Supercars.net names five factory conversions by chassis (4860, 4892, 4934, 4990 and 5090) and estimates ten to sixteen cars in total received SVJ modification officially or through Bob Wallace. The single Jota and one Bertone Roadster sit outside all of these counts. No figure is asserted here.",
 "notableTrims": [
  {
   "name": "P400 (1966-1969)",
   "note": "The original series at 350 CV, with the thinnest chassis steel and the lightest cars of the run. Lamborghini states 265 built, other sources 274 or 275. Many were later rebuilt to S or SV specification, which makes a documented, unconverted P400 scarcer than the production figure suggests."
  },
  {
   "name": "P400 S (1968-1971)",
   "note": "The most numerous version at 338 cars, December 1968 to March 1971, of which 21 were right-hand drive. Enlarged inlet ports, higher-lift cams and raised compression for 370 CV, plus a full-length console, electric windows and optional air conditioning. Ventilated discs arrived during the run."
  },
  {
   "name": "P400 SV, early (shared sump)",
   "note": "Wider rear track, nine-inch rear rims, longer rear wishbones, flared arches and the deleted headlamp eyelashes. The first SVs still shared one oil supply between engine and gearbox; Supercars.net puts that group at the first 52 cars."
  },
  {
   "name": "P400 SV, late (split sump)",
   "note": "The last SV engines separate gearbox lubrication from the engine's, stopping gearbox debris circulating through the V12 and allowing a limited-slip differential. Wikipedia and Classic Trader put this group at the final 96 engines, and split-sump provenance is now a stated selling point in auction catalogues."
  },
  {
   "name": "SV/J",
   "note": "Factory conversions of SV cars to Jota-derived engine, suspension and part-aerodynamic specification. Counts differ sharply - four per Lamborghini, six per Wikipedia, five named chassis per Supercars.net - and a further group of period and later conversions muddies the water. Chassis 4934 was the Shah of Iran's car."
  },
  {
   "name": "Jota",
   "note": "One car, built by Bob Wallace from 1970 under Paolo Stanzani with a light-alloy frame, lightweight panels, sill fuel tanks and a heavily reworked V12. Sold to a private buyer and destroyed in a crash near Brescia within roughly a year. Everything wearing the name today is a conversion."
  }
 ],
 "specs": {
  "layout": "Transverse mid-mounted engine, rear-wheel drive",
  "chassis": "Folded and welded sheet-steel platform drilled for lightness, about 120 kg; wall thickness quoted between 0.8 mm and 1.0 mm by source and build date",
  "body": "Bertone coachwork by Marcello Gandini; aluminium panels with steel structure, front and rear clamshells hinged at the extremities",
  "engine": "3,929 cc 60-degree V12 laid out by Giotto Bizzarrini, seven main bearings, counter-rotating crankshaft, cast in common with the gearbox and final drive",
  "valvetrain": "Twin overhead camshafts per bank, two valves per cylinder, chain driven",
  "compression": "9.5:1 on the P400, raised to 10.7:1 for the P400 S",
  "induction": "Four triple-choke Weber carburettors, twelve throttle valves",
  "lubrication": "One oil supply shared by engine, gearbox and differential on P400, P400 S and early SV; separate gearbox lubrication on later SV engines",
  "power": "350 CV at 7,000 rpm (P400), 370 CV at 7,700 rpm (S), 385 CV at 7,850 rpm (SV) per Lamborghini; independent sources quote 345, 365 and 375-380 bhp",
  "torque": "About 271 lb-ft (P400), 287 lb-ft at 5,500 rpm (S), 400 Nm / 295 lb-ft at 5,750 rpm (SV)",
  "transmission": "5-speed manual in unit with the engine and final drive",
  "suspension": "Independent front and rear by unequal-length wishbones, coil springs and telescopic dampers; the SV gains longer rear wishbones adding about 1.5 in",
  "brakes": "Girling discs all round, ventilated from partway through the P400 S run",
  "wheels_tyres": "Campagnolo cast magnesium; SV rear rims 9 in wide with Pirelli Cinturato, original P400 fitment Pirelli Cinturato 205VR15 (CN72)",
  "weight": "Sources differ widely: Supercars.net gives 1,317 kg kerb for the SV, Goodwood 1,145 kg; the bare chassis is quoted at about 120 kg",
  "acceleration": "0-62 mph in about 6.7 s (P400) and 5.9 s (S) per published figures; about 5.75 s quoted for the SV",
  "top_speed_claimed": "172-186 mph depending on variant and source - manufacturer and magazine claims, with independent commentary putting the realistic figure nearer 170 mph"
 },
 "summary": "The Lamborghini Miura ran from 1966 to 1973 and settled the argument about where the engine of a fast road car belongs. It began as an out-of-hours project by Gian Paolo Dallara, Paolo Stanzani and the test driver Bob Wallace: a bare rolling chassis, shown with no body at all at the Turin Salon in late 1965, which took orders on the strength of its engineering. Bertone clothed it, and Marcello Gandini's shape appeared at Geneva in March 1966 with ballast in the engine bay and the bonnet locked, because nobody had yet confirmed the V12 would fit. That V12 - Giotto Bizzarrini's 3,929 cc quad-cam design - sat transversely behind the cabin, cast in common with the gearbox and final drive and sharing one oil supply with them in the manner of a Mini. Three series followed: P400, P400 S and P400 SV, the last with a wider rear track and, on later engines, gearbox lubrication separated from the engine's. It was fast, unstable at the top end and never raced by the factory.",
 "history": "## A Chassis With No Body\nFerruccio Lamborghini had not asked for the Miura. It was conceived in 1965 by three young employees - the engineer Gian Paolo Dallara, his colleague Paolo Stanzani and the test driver Bob Wallace - who worked up a mid-engined chassis outside their normal duties and presented it to him afterwards. What went to the Turin Salon in late 1965 was that bare rolling chassis: no body, no interior, the transverse V12 and gearbox visible on a drilled sheet-steel platform. Show visitors ordered it anyway, and Lamborghini, whose business case for the car had been thin, had a queue.\n\n## Gandini's Shape and the Ballasted Engine Bay\nBertone took the commission and Marcello Gandini produced the body in roughly three months for the Geneva show of March 1966. The proportions came straight from the chassis, and the radiator was laid back in the nose like a contemporary racing car's. The prototype was finished so late that the engine had never been trial-fitted to the bay, so Geneva saw a Miura with the compartment filled with ballast and the rear clamshell locked shut. It did not matter: evo records seventeen orders over the Monaco Grand Prix weekend that followed, the moment the category later called the supercar acquired a market.\n\n## One Sump for Everything\nThe packaging idea was borrowed from the Mini and executed at four times the cylinder count. Bizzarrini's 3,929 cc V12 was cast in unit with its five-speed gearbox and final drive and, on P400, P400 S and the first SVs, the whole assembly ran on one supply of oil. It saved length and height and it worked, but it circulated whatever the gearbox shed through the engine's bearings and forced a compromise between the oil an engine wants and the oil a gearbox wants. Owners who change the oil often enough report no trouble; the design was abandoned anyway. The chassis was equally daring - folded and welded sheet steel drilled for lightness, about 120 kg complete - and equally marginal, with the gauge raised from 0.9 mm to 1.0 mm from around the 125th car to stop it flexing.\n\n## The Faults the Series Kept Trying to Fix\nThe Miura was quick and never entirely settled. The nose generated lift, and evo's account has it wandering alarmingly above about 150 mph, with brakes it calls inadequate and a chassis that flexed when pressed. The P400 S of December 1968 answered with more power - 370 CV, bigger inlet ports, 10.7:1 compression - ventilated discs partway through, and electric windows. The SV of 1971 went further: longer rear wishbones, a rear track widened to about 1,540 mm, nine-inch rear rims under flared arches, a stiffened structure and, on the later engines, a split sump that finally gave the gearbox its own oil and made a limited-slip differential practical. The eyelashes around the headlamps went. The nose lift was reduced rather than cured.\n\n## Jota, and the Cars Built to Look Like It\nIn 1970 Bob Wallace built himself the car the factory would not race. The Jota used a light-alloy frame, lightweight panels, fuel tanks in the sills and a V12 reworked for something near 440 bhp, and weighed several hundred kilogrammes less than a road Miura. Lamborghini never entered it. It was sold to a private buyer and destroyed in a crash near Brescia within roughly a year, and the sources disagree on whether that was 1971 or 1972. What survives is imitation: a small number of factory SV/J conversions and a less well-defined population of cars modified in the same direction. The count of genuine factory SV/J cars is given as four, five or six depending on the authority.\n\n## Handing Over to the Countach\nBertone showed the LP500 Countach prototype at Geneva in 1971, while the SV was still being built, and the production Countach LP400 arrived in 1974. The two are usually read as one lineage, but they are not the same engineering: the Miura is transverse-engined on a folded-steel platform with its gearbox in the sump, the Countach a longitudinal, gearbox-forward layout on a welded tubular spaceframe. The Miura is the more beautiful and the less resolved; the Countach had fifteen years of development. Both have production totals their manufacturer's own figures do not settle.",
 "marketNotes": "As of August 2026, classic.com records a benchmark of $1,980,265 for the P400 with an average sale of $1,717,155, $2,175,551 for the P400 S, and $4,474,074 for the SV with an average of $3,839,844 - all trending upward, the SV carrying roughly double the benchmark of the earlier cars. Tracked results as of August 2026 run from $610,000 for a 1967 P400 in October 2024 to $6,605,000 for a 1972 SV at Broad Arrow's Amelia Concours sale on 7 March 2026, an original car in single ownership for 52 years that the house reported as beating the previous auction record for any Miura by more than $1,700,000. RM Sotheby's sold chassis 4946, a split-sump, air-conditioned, US-delivered SV, for EUR 3,942,500 at Milan on 22 May 2025 against a EUR 3.2 million estimate, and chassis 4840 - altered in the 1970s to imitate the Jota and returned to factory appearance in 2016 - for EUR 3,717,500 at Paris in late January 2026. RM Sotheby's Monterey in August 2026 took $3,030,000 for a 1967 P400. These are published sale totals, not hammer prices.",
 "whatToLookFor": "Start with identity rather than condition. A large proportion of P400 and P400 S cars were upgraded towards S or SV specification over sixty years, and the Goodwood guide is blunt that anyone buying an SV should establish it is an original and not a standard car dressed to look like one. Lamborghini Polo Storico holds the factory archive of chassis, engine, gearbox and axle numbers with original colour, trim and equipment, and certifies cars built between 1963 and 2001, recording non-original components explicitly; Classic and Sports Car puts the cost at EUR 7,000 to EUR 10,000. A car with that paperwork is a different proposition from one without it. Establish where in the run the car sits: whether it is a pre- or post-ventilated-disc S, and for an SV whether the engine is a shared-sump or split-sump unit. On the car itself the frame is the expensive part. Look at the battery tray, the engine frame and the floors, and treat any rust found as a sample rather than the total. Check the frame is straight and that historic accident repair was done properly. Oil condition matters more than usual on a shared-sump car because that oil has also been through the gearbox. Expect a gearbox stiff until warm and some noise when cold; anything beyond that needs investigation, and most serious work is an engine-out job on this car.",
 "commonProblems": "Corrosion of the sheet-steel structure is the defining liability. The battery tray, engine frame and floor pan are the known hotspots, and the guides are consistent that once rust is visible there is usually more inside the sections. Shiny paint over a rotten frame is a recognised trap, as is a frame pulled out of alignment by an old accident and never reset. The shared engine and gearbox oil on P400, P400 S and early SV cars means gearbox debris passes through the engine; the mitigation is frequent oil changes, and specialists report a well-maintained single-sump car used on the road gives no particular trouble. Neglected ones are a different matter. Gearboxes are slow to engage until warm and worn synchromesh is common. Four Weber carburettors out of balance make the car undriveable at low revs. Cars that sit develop seized calipers and corroded discs. Original fuel lines harden and crack, and ethanol content accelerates it, which is why owners seek ethanol-free fuel and carry an extinguisher. The plastic headlamp lift gears break with age, though brass replacements exist, and the Ducellier switchgear is poor.",
 "valueTrajectory": "The Miura's rise has been long and, unusually for a car of its fame, still steepening. classic.com shows all three series trending upward as of August 2026, with the P400 benchmark at $1,980,265, the P400 S at $2,175,551 and the SV at $4,474,074. The spread between the early cars and the SV is the story: an SV is worth roughly twice a P400, and Classic Trader's guidance is that an SV can reach three times the price of a P400 while an S sits about fifty per cent above one. The last two years have moved the ceiling rather than the floor. A 1967 P400 changed hands for $610,000 in October 2024, close to the bottom of the tracked range, while the top has gone to $6,605,000 at Broad Arrow's Amelia sale in March 2026, a record the house reported as more than $1,700,000 clear of the previous best. Originality and documentation separate the results, and cars with unbroken ownership and Polo Storico certification are pulling away from restored and converted examples.",
 "overallConfidence": "high",
 "sources": [
  {
   "ref": "lamborghini-heritage-miura",
   "title": "Lamborghini History - Miura",
   "url": "https://www.lamborghini.com/en-en/history/miura",
   "publisher": "Automobili Lamborghini",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Factory record: Geneva 1966 debut, Bertone body, transverse V12; 350 CV at 7,000 rpm (P400), 370 at 7,700 (S), 385 at 7,850 (SV); 265 P400, 338 S, 150 SV, four SVJ and a Spyder; credits the SV with wider tyres, flared arches, a stronger chassis and independent gearbox lubrication."
  },
  {
   "ref": "wikipedia-miura",
   "title": "Lamborghini Miura",
   "url": "https://en.wikipedia.org/wiki/Lamborghini_Miura",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Turin 1965 rolling chassis taking orders with no body; ballasted engine bay at Geneva 1966; engine, gearbox and differential in one casting on Mini principles; 275 P400, about 338 S, 150 SV; last 96 SV engines split-sump; Jota about 360 kg lighter at 418-440 bhp, crashed near Brescia 1971; six factory SV/J."
  },
  {
   "ref": "miura-register-p400",
   "title": "THE MIURA REGISTER - P400 List",
   "url": "https://miuraregister.com/register.php?model=183&view=1",
   "publisher": "The Miura Register",
   "sourceType": "registry",
   "reliability": "high",
   "notes": "Lists 274 P400 cars by chassis and production number from chassis 0502; totals credited to Dr Stefano Pasini for Automobili Lamborghini."
  },
  {
   "ref": "miura-register-sv",
   "title": "THE MIURA REGISTER - P400SV List",
   "url": "https://miuraregister.com/register.php?model=95&sort=production&view=1",
   "publisher": "The Miura Register",
   "sourceType": "registry",
   "reliability": "high",
   "notes": "Lists 147 P400 SV cars from chassis 4806 with cumulative production numbers from 266; a recorded SV population below the factory's stated 150."
  },
  {
   "ref": "classic-miura",
   "title": "Lamborghini Miura Market",
   "url": "https://www.classic.com/m/lamborghini/miura/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of August 2026: average sale $2,354,119; states 764 built; benchmarks $1,980,265 (P400), $2,175,551 (S), $4,474,074 (SV); range $610,000 (October 2024) to $6,605,000 (March 2026)."
  },
  {
   "ref": "classic-miura-p400",
   "title": "Lamborghini Miura - P400 Market",
   "url": "https://www.classic.com/m/lamborghini/miura/p400/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of August 2026: P400 benchmark $1,980,265, average $1,717,155, trending up; high $3,030,000 at RM Sotheby's Monterey, August 2026. States 275 built and that many have been converted to S and SV specification."
  },
  {
   "ref": "classic-miura-sv",
   "title": "Lamborghini Miura - P400SV Market",
   "url": "https://www.classic.com/m/lamborghini/miura/p400sv/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of August 2026: SV benchmark $4,474,074, average $3,839,844, trending up; lowest tracked result $2,058,125 (November 2022); records the EUR 3,717,500 RM Sotheby's result of 28 January 2026."
  },
  {
   "ref": "rm-pa26-sv",
   "title": "1971 Lamborghini Miura SV, Paris 2026",
   "url": "https://rmsothebys.com/auctions/pa26/lots/r0090-1971-lamborghini-miura-sv/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold EUR 3,717,500, Paris 2026. Chassis 4840, matching numbers, Polo Storico certified; altered 1972-77 to imitate the Jota, returned cosmetically to June 1971 specification in 2016. States one of 150 SV."
  },
  {
   "ref": "rm-ml25-sv",
   "title": "1971 Lamborghini Miura P400 SV by Bertone, Milan",
   "url": "https://rmsothebys.com/auctions/ml25/lots/r0035-1971-lamborghini-miura-p400-sv-by-bertone/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold EUR 3,942,500 at RM Sotheby's Milan. Chassis 4946; original split-sump configuration and factory air conditioning, delivered new to the United States. Treats split-sump specification as a distinguishing feature within the SV run."
  },
  {
   "ref": "broadarrow-amelia26",
   "title": "A Record-Setting Saturday as Broad Arrow Closes $107M+ Amelia Concours Auction with $6,605,000 Lamborghini Miura SV",
   "url": "https://www.globenewswire.com/news-release/2026/03/07/3251417/0/en/A-Record-Setting-Saturday-as-Broad-Arrow-Closes-107M-Amelia-Concours-Auction-with-6-605-000-Lamborghini-Miura-SV.html",
   "publisher": "Broad Arrow Group via GlobeNewswire",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Release of 7 March 2026: a 1972 P400 SV in single American ownership for over half a century sold for $6,605,000 at the Amelia Concours Auction, beating the previous record for any Miura by more than $1,700,000."
  },
  {
   "ref": "sothebys-miura-guide",
   "title": "Everything You Need to Know About the Lamborghini Miura",
   "url": "https://www.sothebys.com/en/articles/everything-you-need-to-know-about-the-lamborghini-miura",
   "publisher": "Sotheby's",
   "sourceType": "auction-house",
   "reliability": "medium",
   "notes": "Conceived 1965 by Dallara, Stanzani and Wallace; shown unfinished at Turin in November 1965; Gandini bodied it in three months for Geneva 1966; V12 designed by Bizzarrini; P400 345 hp, S 365, SV 375; five to seven SVJ; declines a total, saying fewer than 800 in seven years."
  },
  {
   "ref": "evo-az-miura",
   "title": "A-Z Supercars: Lamborghini Miura",
   "url": "https://www.evo.co.uk/lamborghini/murcielago/13438/a-z-supercars-lamborghini-miura",
   "publisher": "evo",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Bare P400 GT chassis at Turin late 1965, bodied prototype at Geneva March 1966; Dallara concept, Stanzani chassis, Gandini body; Mini-derived shared lubrication; 350 bhp claimed against roughly 320 actual, 180 mph against a realistic 170; front-end lift above 150 mph with alarming wandering, inadequate brakes and chassis flex, only partially cured by the SV; seventeen orders at the 1966 Monaco GP."
  },
  {
   "ref": "goodwood-buyers-guide",
   "title": "Lamborghini Miura Buyer's Guide",
   "url": "https://insurance.goodwood.com/buyers-guide/lamborghini-miura/",
   "publisher": "Goodwood Classic Solutions",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Over 760 built; SV given as 150 plus one; corrosion at battery tray, engine frame and floor pan with rust traps through the box-section chassis; oil condition critical given the integrated crankcase and gearbox; major work is engine-out; warns SVs may be converted standard cars; four original SVJ."
  },
  {
   "ref": "classic-trader-guide",
   "title": "Lamborghini Miura Buying Guide",
   "url": "https://www.classic-trader.com/en/magazine/lamborghini-miura-buying-guide",
   "publisher": "Classic Trader",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "275 P400, 338 S, 150 SV, plus a roadster and about six SV/J; final approximately 96 SVs had separate sumps; metal-shaving contamination on shared-sump cars; seized calipers on unused cars; an SV can reach three times a P400 and an S about fifty per cent more."
  },
  {
   "ref": "lambocars-engineering",
   "title": "Lamborghini Miura 60th Anniversary: Engineering Deep Dive",
   "url": "https://www.lambocars.com/lamborghini-miura-60th-anniversary-engineering/",
   "publisher": "LamboCARS",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Sheet-steel chassis of 0.8 mm wall thickness punched for lightness, about 120 kg; engine, transmission and differential in one housing on a single lubrication system, with engine oil contaminated by gearbox debris; counter-rotating crank, seven main bearings, 60-degree vee; states 763 built."
  },
  {
   "ref": "supercars-sv",
   "title": "Lamborghini Miura P400 SV",
   "url": "https://www.supercars.net/blog/1971%E2%86%921973-lamborghini-miura-p400-sv/",
   "publisher": "Supercars.net",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "148 SVs from chassis 4758, 1971-1973; first 52 shared engine and gearbox oil, roughly 96 later cars split; longer rear wishbones adding about 1.5 in, rear track 1,540 mm against 1,410 mm front; 385 bhp at 7,850 rpm, 400 Nm at 5,750; 1,317 kg kerb; eyelashes replaced by smooth surrounds."
  },
  {
   "ref": "supercars-svj",
   "title": "Lamborghini Miura SVJ",
   "url": "https://www.supercars.net/blog/1971%E2%86%921975-lamborghini-miura-svj/",
   "publisher": "Supercars.net",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "One experimental Jota by Bob Wallace on chassis 5084; names five factory SVJ conversions by chassis (4860, 4892, 4934, 4990, 5090) and estimates ten to sixteen Miuras in total received SVJ modification officially or through Wallace."
  },
  {
   "ref": "supercarnostalgia-p400s",
   "title": "Lamborghini Miura P400 S Guide",
   "url": "https://supercarnostalgia.com/blog/lamborghini-miura-p400-s",
   "publisher": "Supercar Nostalgia",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "338 S built of which 21 right-hand drive, December 1968 to March 1971; inlet ports enlarged 28 mm to 30 mm, high-lift cams, compression raised 9.5:1 to 10.7:1; 370 bhp at 7,700 rpm and 287 lb-ft at 5,500 against the P400's 350 bhp and 271 lb-ft."
  },
  {
   "ref": "belowtheradar-jota",
   "title": "The story of the Lamborghini Miura Jota",
   "url": "https://www.below-the-radar.com/lamborghini-miura-jota/",
   "publisher": "Below The Radar",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Jota begun by Wallace in 1970 under Stanzani, completed by 1972; light-alloy frame, adjustable suspension, skirts and faired headlamps; about 250 kg saved for roughly 880 kg; 440 bhp at 8,500 rpm; sold through an Italian dealer in 1972 and destroyed shortly afterwards."
  },
  {
   "ref": "velocetoday-ownership",
   "title": "Driving and Maintaining a Lamborghini Miura S",
   "url": "https://velocetoday.com/driving-and-maintaining-a-lamborghini-miura-s/",
   "publisher": "VeloceToday",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Owner account of a single-sump P400 S: cold noise from chains, pistons and gearbox; plastic headlamp lift gears failing with brass replacements; poor Ducellier switchgear; hardened, cracked fuel hoses with ethanol accelerating the damage; a serviced single-sump road car no particular problem."
  },
  {
   "ref": "classicandsportscar-polostorico",
   "title": "The specialist: Lamborghini Polo Storico",
   "url": "https://www.classicandsportscar.com/features/specialist-lamborghini-polo-storico",
   "publisher": "Classic & Sports Car",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Polo Storico holds chassis, engine, gearbox and axle codes with original paint, trim and equipment records; certifies cars from 1963 to 2001, noting non-original components; EUR 7,000 to EUR 10,000."
  },
  {
   "ref": "octane-milan-2025",
   "title": "Lamborghinis lead RM Sotheby's EUR 16.5m Milan sale",
   "url": "https://www.octane-magazine.com/news/lamborghinis-lead-rm-sothebys-e16-5m-milan-sale/",
   "publisher": "Octane",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Report of RM Sotheby's Milan, 21-22 May 2025: the Miura P400 SV made EUR 3,942,500 against a EUR 3.2 million estimate and a 1989 Countach 25th Anniversary EUR 1,130,000 for a model record."
  }
 ],
 "claims": [
  {
   "section": "history",
   "claimText": "The Miura began as an out-of-hours project by Gian Paolo Dallara, Paolo Stanzani and test driver Bob Wallace; its rolling chassis was shown with no bodywork at the Turin Salon in late 1965, where visitors placed orders on the engineering alone, and Marcello Gandini bodied it at Bertone in roughly three months for Geneva in March 1966, with the engine bay filled with ballast and kept locked because the V12 had never been trial-fitted.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-miura",
    "sothebys-miura-guide",
    "evo-az-miura"
   ]
  },
  {
   "section": "specs",
   "claimText": "The engine is a 3,929 cc 60-degree quad-cam V12 laid out by Giotto Bizzarrini, mounted transversely with seven main bearings, a counter-rotating crankshaft and four triple-choke Weber carburettors; on the P400, P400 S and earliest SVs it was cast in a common housing with the gearbox and final drive and shared one supply of oil with them, a Mini-derived idea that let gearbox debris circulate through the engine. The platform is folded and welded sheet steel of about 120 kg, quoted at between 0.8 mm and 1.0 mm gauge.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-miura",
    "lambocars-engineering",
    "evo-az-miura",
    "goodwood-buyers-guide",
    "sothebys-miura-guide",
    "lamborghini-heritage-miura"
   ]
  },
  {
   "section": "history",
   "claimText": "The Miura generated front-end lift at speed, with evo describing alarming wandering above about 150 mph alongside inadequate brakes and chassis flex; the SV's revisions reduced the tendency rather than curing it.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "evo-az-miura",
    "goodwood-buyers-guide"
   ]
  },
  {
   "section": "production",
   "claimText": "The P400 S was the most numerous variant at 338 cars built between December 1968 and March 1971, of which 21 were right-hand drive; it gained reshaped combustion chambers, inlet ports enlarged from 28 mm to 30 mm, higher-lift camshafts and compression raised from 9.5:1 to 10.7:1 for 370 CV at 7,700 rpm, with ventilated discs introduced partway through the run.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "lamborghini-heritage-miura",
    "supercarnostalgia-p400s",
    "classic-miura",
    "classic-trader-guide"
   ]
  },
  {
   "section": "specs",
   "claimText": "The P400 SV of 1971 widened the rear track to about 1,540 mm with longer rear wishbones, fitted nine-inch rear rims under flared arches, deleted the headlamp eyelashes and stiffened the structure, and quoted 385 CV at 7,850 rpm with 400 Nm at 5,750 rpm.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "lamborghini-heritage-miura",
    "supercars-sv",
    "wikipedia-miura"
   ]
  },
  {
   "section": "production",
   "claimText": "Later SV engines separated gearbox lubrication from engine lubrication, which stopped gearbox debris reaching the engine and made a limited-slip differential practical, but sources disagree over whether this applied to every SV or only the final part of the run.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "lamborghini-heritage-miura",
    "wikipedia-miura",
    "supercars-sv",
    "classic-trader-guide",
    "rm-ml25-sv"
   ],
   "conflictNote": "Lamborghini's heritage page presents independent gearbox lubrication as an SV feature without qualification. Wikipedia and Classic Trader state that only the last 96 SV engines had the split sump. Supercars.net states the first 52 SVs shared a sump and roughly 96 later cars had split systems. Whether every SV received the change is not resolved by any source consulted here."
  },
  {
   "section": "production",
   "claimText": "Published production figures for the P400 range from 265 to 275 cars.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "lamborghini-heritage-miura",
    "wikipedia-miura",
    "classic-miura-p400",
    "miura-register-p400",
    "classic-trader-guide"
   ],
   "conflictNote": "Lamborghini's heritage page states 265 P400. Wikipedia, classic.com and Classic Trader state 275. The Miura Register, credited to Dr Stefano Pasini working from factory records, lists 274. The difference is not resolved by any source consulted here."
  },
  {
   "section": "production",
   "claimText": "Published production figures for the P400 SV range from 147 to 150 cars, with the factory figure at the top of that range.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "lamborghini-heritage-miura",
    "wikipedia-miura",
    "supercars-sv",
    "miura-register-sv",
    "classic-trader-guide"
   ],
   "conflictNote": "Lamborghini, Wikipedia and Classic Trader state 150 SV. Supercars.net states 148. The Miura Register lists 147. Because P400 and S cars were later rebuilt to SV specification outside the factory, the line between an original and a converted SV is unclear in the record, and the discrepancy is not resolved by any source consulted here."
  },
  {
   "section": "production",
   "claimText": "Total Miura production is variously stated as 753 (the sum of Lamborghini's own per-variant figures), more than 760, 763 and 764, while one auction-house source declines a figure altogether and says fewer than 800.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "lamborghini-heritage-miura",
    "classic-miura",
    "lambocars-engineering",
    "goodwood-buyers-guide",
    "sothebys-miura-guide"
   ],
   "conflictNote": "Lamborghini's per-variant figures sum to 753. classic.com states 764, LamboCARS 763, Goodwood over 760, and Sotheby's fewer than 800 without committing. These figures are not resolved by any source consulted here, so productionTotal is left null."
  },
  {
   "section": "history",
   "claimText": "Bob Wallace built a single Jota from 1970 with a light-alloy frame, lightweight panels, relocated fuel tanks and a reworked V12 of around 440 bhp; it was sold to a private buyer and destroyed in a crash near Brescia, and the sources agree on neither the year nor the figures.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "wikipedia-miura",
    "belowtheradar-jota",
    "supercars-svj",
    "sothebys-miura-guide"
   ],
   "conflictNote": "Wikipedia gives roughly 360 kg saved, 418-440 bhp at 8,800 rpm and a crash near Brescia in 1971. Below The Radar gives about 250 kg saved for roughly 880 kg, 440 bhp at 8,500 rpm, and a sale in 1972 followed promptly by the crash. Sotheby's gives 440 hp and destruction in 1971. Neither the date nor the figures is resolved by any source consulted here; the conflict is unresolved."
  },
  {
   "section": "production",
   "claimText": "The number of factory-built SV/J cars is stated as four, five or six depending on the source, with a further and less well-defined population of period and later conversions.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "lamborghini-heritage-miura",
    "wikipedia-miura",
    "supercars-svj",
    "goodwood-buyers-guide",
    "classic-trader-guide"
   ],
   "conflictNote": "Lamborghini's heritage page and Goodwood both say four. Wikipedia says six factory SV/J were built during production. Supercars.net names five factory conversions by chassis and estimates ten to sixteen cars in total received SVJ modification officially or through Bob Wallace. Classic Trader says about six. The count is not resolved by any source consulted here."
  },
  {
   "section": "market",
   "claimText": "As of August 2026 classic.com records market benchmarks of $1,980,265 for the P400, $2,175,551 for the P400 S and $4,474,074 for the P400 SV, all trending upward, and the highest recorded Miura result is $6,605,000 for an original single-ownership 1972 SV at Broad Arrow's Amelia Concours Auction on 7 March 2026, which the house reported as beating the previous auction record for the model by more than $1,700,000.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-miura",
    "classic-miura-p400",
    "classic-miura-sv",
    "broadarrow-amelia26"
   ]
  },
  {
   "section": "market",
   "claimText": "Recent individual SV results include EUR 3,942,500 for split-sump chassis 4946 at RM Sotheby's Milan in May 2025 against a EUR 3.2 million estimate, and EUR 3,717,500 for chassis 4840 at RM Sotheby's Paris in late January 2026, a car altered in the 1970s to imitate the Jota and returned cosmetically to factory specification in 2016.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "rm-ml25-sv",
    "rm-pa26-sv",
    "octane-milan-2025",
    "classic-miura-sv"
   ]
  },
  {
   "section": "problems",
   "claimText": "Corrosion of the sheet-steel structure at the battery tray, engine frame and floor pan is the defining liability, with disguised accident repair and misaligned frames under fresh paint common enough that both major buyer's guides warn about them; recurring owner-reported faults include hardened fuel hoses with a fire risk, failed plastic headlamp lift gears, poor Ducellier switchgear and seized calipers on cars that have stood.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "goodwood-buyers-guide",
    "classic-trader-guide",
    "velocetoday-ownership"
   ]
  },
  {
   "section": "summary",
   "claimText": "A substantial number of P400 and P400 S cars were rebuilt towards S or SV specification outside the factory, which makes documented originality the largest single variable in the market; Lamborghini Polo Storico holds the factory archive of chassis, engine, gearbox and axle numbers with original colour, trim and equipment records, and certifies cars built between 1963 and 2001 at roughly EUR 7,000 to EUR 10,000, noting any non-original components on the certificate.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-miura-p400",
    "goodwood-buyers-guide",
    "classic-trader-guide",
    "classicandsportscar-polostorico",
    "rm-pa26-sv"
   ]
  },
  {
   "section": "history",
   "claimText": "Bertone showed the LP500 Countach prototype at Geneva in 1971 while the SV was still in production, and the Countach replaced the Miura from 1974 with a longitudinal engine and a welded tubular spaceframe in place of the Miura's transverse layout and folded-steel platform.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "evo-az-miura",
    "octane-milan-2025",
    "lamborghini-heritage-miura"
   ]
  }
 ]
};
