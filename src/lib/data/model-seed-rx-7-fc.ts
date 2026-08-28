/**
 * Researched model draft — Mazda RX-7 FC (1986-1992).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedRx7Fc = {
 "slug": "mazda/rx-7-fc",
 "make": "Mazda",
 "model": "RX-7",
 "generation": "Second generation",
 "generationCode": "FC3S (coupe) / FC3C (convertible)",
 "trim": null,
 "yearStart": 1986,
 "yearEnd": 1992,
 "bodyStyles": [
  "2-door 2+2 coupe with pop-up headlamps (FC3S)",
  "2-door convertible with removable rigid roof panel and folding rear section (FC3C)"
 ],
 "engines": [
  "1,308 cc 13B-DEI twin-rotor Wankel, naturally aspirated, six-port induction, 9.4:1 compression - 146 hp at 6,500 rpm and 138 lb-ft at 3,500 rpm (Series 4, North America)",
  "1,308 cc 13B-DEI naturally aspirated, Series 5 from the 1989 model year - 160 hp at 6,500 rpm, raised redline and thicker rotor housings",
  "1,308 cc 13B-T turbocharged, single turbocharger with twin-scroll housing, split intake manifold, air-to-air intercooler and 9.0:1 rotors - 182 hp and 183 lb-ft (Series 4 Turbo II), 200 hp and 195 lb-ft (Series 5 Turbo II)",
  "Japanese-market 13B-T rated 185 PS at launch, 205 PS from Series 5 and 215 PS in the Infini limited editions"
 ],
 "productionTotal": null,
 "productionNotes": "The figure in general circulation for the second generation is 272,027 cars, stated by Wikipedia and echoed by Old Motors as 'approximately 272,000'. It is not asserted here as settled: no manufacturer source reachable during this research repeats it, and Car Throttle's generation guide states only 'over 250,000 units built'. Mazda's own motorsport archive gives dates rather than volumes: the FC3S coupe October 1985 to October 1991, the FC3C convertible August 1987 to October 1992. Wikipedia dates the same runs September 1985 to December 1991 and August 1987 to December 1992, a difference no source reconciles. Sub-totals are patchier still. Roughly 22,000 convertibles are cited. The 1988 10th Anniversary edition is consistently given as 1,500 cars. The Japanese Infini limited editions ran to four series at about 600 cars each per year, though Wikipedia places them across 1987-1990 and the JDMBuySell buyer's guide across 1989-1992. The American GTUs is worst documented: Wikipedia gives 'between 100 and 1,100', The Truth About Cars 'around 1,100 over two years'. One number circulating as production is not production at all: conceptcarz's '9,743 units' for 1990 is identical to GoodCarBadCar's United States sales total for that year, so it is a sales figure relabelled. Note also that the R1 and R2 designations often attached to this car belong to the third-generation FD, not to the FC.",
 "notableTrims": [
  {
   "name": "Turbo II (North America, 1987-1991)",
   "note": "The car the generation is collected for: twin-scroll turbo housing, air-to-air intercooler and a bonnet intake, 182 hp in Series 4 form and 200 hp from 1989. The only FC configuration classic.com benchmarks materially above the rest."
  },
  {
   "name": "GTU / GTUs (1989-1990)",
   "note": "A naturally aspirated car defined by what was taken out rather than added, built to mark the RX-7's IMSA GTU record: the Turbo's four-piston front brakes, 16-inch wheels and a 4.300 viscous limited-slip differential on a lightened shell. Production is the least certain of any FC variant."
  },
  {
   "name": "10th Anniversary (1988)",
   "note": "1,500 Turbo IIs in monochromatic Crystal White with black leather, a MOMO wheel, bronze glass and headlamp washers. Substantially an appearance package, and the specification behind the highest recorded FC sale on classic.com."
  },
  {
   "name": "Convertible (FC3C, 1987 Japan / 1988 United States)",
   "note": "The only factory drop-top in three RX-7 generations, its launch tied by Mazda to twenty years of rotary production. A rigid removable panel over the occupants with a folding rear section. Automatics are common and depress values."
  },
  {
   "name": "Savanna RX-7 GT-X / GT-Limited (Japan)",
   "note": "The domestic turbocharged grades, sold under the Savanna name Mazda reserved for Japan while export markets used RX-7 alone. Right-hand drive, 185 PS rising to 205 PS."
  },
  {
   "name": "Infini I-IV (Japan)",
   "note": "Four annual limited series of roughly 600 cars, with Bilstein dampers, BBS wheels, a limited-slip differential and series-specific colours. The final cars were rated at 215 PS, the highest factory output of the generation."
  }
 ],
 "specs": {
  "layout": "Front-mounted longitudinal rotary engine, rear-wheel drive, 2+2 coupe or two-seat convertible",
  "chassis": "Unitary steel bodyshell; wheelbase 2,430 mm (95.7 in), length 4,290 mm (168.9 in) for 1986-88 cars and 4,315 mm (169.9 in) for 1989-92, width 1,690 mm, height 1,265 mm",
  "engine": "1,308 cc 13B twin-rotor Wankel, 654 cc per chamber, quoted as a 2,616 cc equivalent swept volume in some reference data; naturally aspirated 13B-DEI or turbocharged 13B-T",
  "induction": "Six-port induction on naturally aspirated cars; single turbocharger with twin-scroll housing, split intake manifold and air-to-air intercooler on the 13B-T",
  "compression": "9.4:1 naturally aspirated, 9.0:1 turbocharged",
  "power": "146 hp at 6,500 rpm (Series 4 NA), 160 hp at 6,500 rpm (Series 5 NA), 182 hp at 6,500 rpm (Series 4 Turbo II), 200 hp at 6,500 rpm (Series 5 Turbo II) - North American ratings",
  "torque": "138 lb-ft at 3,500 rpm (Series 4 NA), 183 lb-ft at 3,500 rpm (Series 4 Turbo II), 195 lb-ft at 3,500 rpm (Series 5 Turbo II)",
  "transmission": "5-speed manual (ratios 3.483, 2.015, 1.391, 1.000, 0.806) or 4-speed automatic; automatic gained electronic shift control for 1990",
  "final_drive": "4.300 naturally aspirated, 4.100 turbocharged; viscous limited-slip differential optional, standard on GTU/GTUs",
  "suspension_front": "MacPherson struts, coil springs, anti-roll bar",
  "suspension_rear": "Independent semi-trailing arm with Dynamic Tracking Suspension System toe-control hubs and anti-roll bar; Auto Adjusting Suspension damping optional",
  "brakes": "Ventilated discs front and rear, vacuum assisted; 277 mm front and 274 mm rear on later turbocharged and GTUs cars; ABS optional",
  "weight": "1,191-1,235 kg (2,630-2,720 lb) for Series 4 naturally aspirated cars; about 1,310 kg (2,888 lb) kerb for a Series 5 Turbo II; convertibles about 1,280 kg",
  "acceleration": "6.5 seconds 0-60 mph and 143 mph quoted for the Series 5 Turbo II in reference data; no independently measured period road-test figure was obtained here"
 },
 "summary": "The second-generation Mazda RX-7 replaced the first-generation car for 1986 and ran until 1992, sold in Japan as the Savanna RX-7 and coded FC3S as a coupe, FC3C as the convertible that followed in 1987. Development ran through Mazda's North American design studio with the Porsche 944 as the stated benchmark, and the result was a heavier, better-equipped and far more sophisticated car than the one it replaced: the first RX-7's live rear axle gave way to independent semi-trailing-arm suspension carrying the Dynamic Tracking Suspension System, a passive rear-steer arrangement built into the toe-control hubs. The 1,308 cc 13B twin-rotor Wankel came naturally aspirated at 146 hp and, in Turbo II form, force-fed through a turbocharger with a twin-scroll housing and an air-to-air intercooler for 182 hp, both rising with the Series 5 revision for 1989 to 160 hp and 200 hp. It sold in the largest numbers of any RX-7 and was, for three decades, the generation collectors reached for last.",
 "history": "## An RX-7 Drawn for America\nThe first RX-7 had been a light, cheap, live-axle coupe that sold on novelty. Its replacement, launched in Japan in October 1985 as the Savanna RX-7 and coded FC3S, was deliberately heavier and more conventional, aimed at the market that had bought most of the first ones. Design work ran through Mazda's North American studio in California, the Porsche 944 was the openly stated benchmark, and the finished car carried a quoted drag coefficient of 0.29 at roughly 250 lb more than the car it replaced. Commercially it worked at once. The FC took Motor Trend's Import Car of the Year for 1986, the Turbo II made Car and Driver's Ten Best list for 1987, and the RX-7 took more than a quarter of Mazda's United States sales in its first full year, at 56,203 cars.\n\n## The 13B in Two Tempers\nThe 13B twin-rotor Wankel measures 654 cc per chamber, 1,308 cc nominal, and appeared in two states of tune that have aged very differently. The naturally aspirated 13B-DEI used six-port induction and 9.4:1 compression for 146 hp, rising to 160 hp with the Series 5 revision for 1989, which also brought thicker rotor housings and a higher redline. The 13B-T dropped compression to 9.0:1 and added a single turbocharger with a twin-scroll housing, a split intake manifold and an air-to-air intercooler fed by a bonnet duct: 182 hp and 183 lb-ft as the Series 4 Turbo II, 200 hp and 195 lb-ft as the Series 5. Japanese cars were quoted in PS - 185, then 205, and 215 in the Infini series. Precisely when the twin-scroll arrangement arrived is not agreed: encyclopedia and magazine accounts attach it to the Turbo II from launch, while Grassroots Motorsports credits it to the 1989-and-later cars alone.\n\n## Toe Control at the Rear Axle\nThe engineering the FC is remembered for is not the turbocharger but what Mazda did behind it. The Dynamic Tracking Suspension System replaced the old live axle with independent semi-trailing arms whose hub carriers sat on compliant bushings, allowing the rear wheels to toe out slightly under light lateral load and to toe in once cornering forces passed roughly 0.5 g. It is passive four-wheel steering achieved with rubber rather than actuators, with optional Auto Adjusting Suspension varying damping alongside it. Whether it was a good idea depends on the tyre. On period-width rubber and fresh bushings it does what was intended; on worn bushings and modern tyre sections it produces exactly the transitional unpredictability it was meant to cure, which is why race preparers fit toe-control bushings that disable the rear steer outright.\n\n## Convertible, Anniversary and the Limited Cars\nThe FC3C convertible arrived in Japan in August 1987 and the United States for 1988, the only factory drop-top in the RX-7's three generations, with a rigid removable panel over the occupants, a folding rear section and an integral windblocker claimed as a first. Mazda tied its launch to twenty years of rotary production. Above it sat a run of commemorative cars: 1,500 10th Anniversary Turbo IIs for 1988 in monochromatic Crystal White; the American GTU and GTUs of 1989-90, lightened naturally aspirated cars carrying the Turbo's four-piston front brakes and a viscous limited-slip differential to mark the model's IMSA record; four annual Infini series in Japan of roughly 600 cars each; and a 1991 Winning Limited marking Mazda's Le Mans victory with the 787B. The R1 and R2 designations frequently attached to the RX-7 name are not FC cars at all - they belong to the third-generation FD.\n\n## Falling Sales, and the Generation in the Middle\nOn track the RX-7 was doing better than in showrooms: Mazda counts 100 IMSA wins across twelve years, and the RX-7 GTO took four wins and both titles in 1991. Sales told the opposite story. United States volume fell from 56,203 in 1986 to 38,345, then 27,814, then 16,249 by 1989, and 6,006 in 1992. By then the FD was arriving, and the attention went with it.",
 "marketNotes": "As of August 2026 classic.com separates the FC into submarkets that sit a long way apart, and the spread is the story. The Turbo II carries a Market Benchmark of $24,093 against an average sale of $24,729, on a rising trend, with a high of $39,250 recorded on 29 October 2025 for a 1988 10th Anniversary car and a low of $843 in June 2022. The naturally aspirated base coupe benchmarks at $11,460 with an average of $11,623 and is trending down, its recorded results running from $5,000 for a 1986 in May 2025 to $18,257 for a modified 1987 in October 2025. The convertible sits lowest, at a $10,663 benchmark and a $10,931 average on a rising trend, between $3,750 for a 1988 project in August 2024 and $19,999 for a 1991 in March 2026. Across the whole generation classic.com's average sale is $15,681. Auction rooms have been less forgiving: a 45,000-mile automatic 1991 convertible offered at Mecum Kissimmee in January 2024 failed to sell against a high bid of $12,000. For orientation against the generation that followed, classic.com's third-generation FD average sale is $48,593 as of August 2026, with a 1993 R1 recording $127,000 in August 2026 - which places a strong FC Turbo II somewhere near where the FD market begins.",
 "whatToLookFor": "Start with a warm compression test read per rotor face rather than as one number. Specialist guidance puts a healthy 13B above 100 psi per face with the faces even; below about 85 psi indicates seal wear and a rebuild in prospect. Hot-start behaviour matters as much as the gauge - a long crank on a hot engine points to weak seals or flooding. Then work through the cooling system, because a rotary's tolerance for overheating is close to nil and one event can warp a rotor housing: radiator, fan shroud and clutch, thermostat, coolant loss. Establish which series the car is, since Series 5 cars from the 1989 model year carry the higher outputs, thicker housings and higher redline and price accordingly. On Turbo II cars check turbo shaft play and smoke under boost, and expect to replace the vacuum hose network, which is extensive and brittle. Rust is structural here: sills, arches, strut towers, hatch channel and door jambs, and the rear hatch drain plugs that clog and cause it. Check the front subframe for accident damage, as it resists straightening. Underneath, feel for play in the rear lateral rods and assess the DTSS bushings, worn on most survivors. Second-gear grind is common. Body parts are the quiet expense: nose cones have been quoted around $800. Prefer documented engine work over claimed engine work.",
 "commonProblems": "Apex and side seal wear is the defining risk, and it is a wear pattern rather than a fault - low compression from age or neglect means a rebuild. Coolant seal failure is the more damaging cousin: it lets the engine overheat, and overheating warps rotor housings, turning a seal job into a housing job. Buyer's-guide costings put an FC rebuild at roughly $4,000-$9,000 for seal work and $4,500-$10,000 where housings are involved. Supplier pricing in August 2026 sits in the same territory: Atkins Rotary lists a rebuilt 13B at $4,099-$4,699 on used rotor housings and $5,299-$6,699 on new, with the turbocharged 13B at $4,999-$5,199 and $6,499-$6,999 respectively. Beyond the engine: flooding on cold start; overheating in traffic from a clogged radiator, missing shroud or failed fan control; turbo seal wear showing as smoke and low boost; detonation under boost from lean running or heat soak; oil leaks from the front cover, sump and rear main; second-gear synchro wear; and electrical faults traced to poor earths. The eccentric shaft bypass valve that feeds the seals only operates once warm and is worth replacing as routine maintenance. Regulator records for 1986 cars cover front brake caliper corrosion where road salt restricts pad movement, and in Canada a misrouted evaporative purge hose.",
 "valueTrajectory": "The FC spent the 2000s and early 2010s as transport rather than as a collectable, and the record shows it: Grassroots Motorsports quoted $2,500-$6,000 for a decent car and around $1,000 for a project, with hundreds listed at once. A great many were consumed as drift and track cars in that window, which is the single largest reason unmodified, un-swapped survivors are now scarce. The re-rating since has been selective rather than general. As of August 2026 the Turbo II benchmark of $24,093 is rising while the naturally aspirated base coupe at $11,460 is falling, so the generation is separating internally rather than lifting as a whole. Two structural facts hold the bottom down. A rotary rebuild at $4,000 or more can exceed the value of an ordinary naturally aspirated car outright, which caps what a tired example is worth to anyone. And the FD, at a $48,593 average as of August 2026, absorbs most of the money and most of the attention that flows toward the nameplate. What that has produced is a market where a documented, rust-free, manual Series 5 Turbo II moves and everything else waits.",
 "overallConfidence": "medium",
 "sources": [
  {
   "ref": "wikipedia-rx7",
   "title": "Mazda RX-7",
   "url": "https://en.wikipedia.org/wiki/Mazda_RX-7",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "272,027 built; coupe Sept 1985-Dec 1991, convertible Aug 1987-Dec 1992; 13B-DEI 146 then 160 hp; 13B-T 182 then 200 hp with twin-scroll turbo; DTSS toe-control hubs acting above 0.5 g; 10th Anniversary 1,500 cars; GTUs 'between 100 and 1,100'; Infini 600 per year; Motor Trend ICOTY 1986."
  },
  {
   "ref": "mzracing-fc30",
   "title": "FC3S / C Savanna RX-7 30th Anniversary Meeting",
   "url": "https://mzracing.jp/en/news/3822",
   "publisher": "MZRacing - Mazda Motorsport",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Mazda motorsport: FC3S coupe built Oct 1985-Oct 1991, FC3C convertible Aug 1987-Oct 1992; convertible launch tied to twenty years of rotary production; the 1991 'Winning Limited' marking the Le Mans win with the 787B."
  },
  {
   "ref": "insidemazda-racing",
   "title": "RX-7: Race success across the globe",
   "url": "https://www.insidemazda.co.uk/2015/05/25/rx-7-race-success-across-the-globe/",
   "publisher": "Mazda UK",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Mazda's own competition record: 100 IMSA wins across twelve years, and the 1991 RX-7 GTO taking four wins plus the drivers' and manufacturers' championships."
  },
  {
   "ref": "carthrottle-generations",
   "title": "Mazda RX-7: A Guide To Every Generation",
   "url": "https://www.carthrottle.com/features/mazda-rx-7-guide-every-generation",
   "publisher": "Car Throttle",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "States 'over 250,000' FCs built; independent rear suspension with DTSS; Turbo II launched 1987 with a twin-scroll turbocharger; the 1989 update to 160 and 200 bhp; and the claim that the convertible took turbocharged engines outside the United States."
  },
  {
   "ref": "grassroots-lucky7",
   "title": "#TBT: Tips on prepping a second-gen Mazda RX-7 for street and track",
   "url": "https://grassrootsmotorsports.com/articles/lucky-7/",
   "publisher": "Grassroots Motorsports",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "SpeedSource-derived track guide: DTSS as passive four-wheel steering, disabled with custom toe-control bushings; rotaries do not tolerate overheating; eccentric shaft bypass valve renewal near 75,000 miles; twin-scroll turbo credited to 1989-and-up cars; period values of $2,500-$6,000."
  },
  {
   "ref": "ttac-gtus",
   "title": "Digestible Collectible: 1989 Mazda RX7 GTUs",
   "url": "https://www.thetruthaboutcars.com/2015/11/digestible-collectible-1989-mazda-rx7-gtus/",
   "publisher": "The Truth About Cars",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "States 'around 1,100 were built over two years' for the GTUs, that it commemorated IMSA GTU success, that it was defined by weight removed, and that it carried the Turbo's larger front brakes and a limited-slip final drive."
  },
  {
   "ref": "conceptcarz-1990-rx7",
   "title": "1990 Mazda RX-7",
   "url": "https://www.conceptcarz.com/vehicle/z10195/mazda-rx-7.aspx",
   "publisher": "conceptcarz",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "GTU content (four-piston front brakes, 16-inch wheels, 4.300 viscous limited-slip differential); DTSS hubs replacing the live axle; and a '9,743 units' figure for 1990 that matches United States sales rather than production."
  },
  {
   "ref": "motorcar-net-fc-specs",
   "title": "Mazda RX-7 2nd gen S4 S5 - technical details and specifications (1986-1991)",
   "url": "https://motor-car.net/mazda/item/11458-rx-7-2nd-gen-s4-s5-1986-91",
   "publisher": "motor-car.net",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "654 cc chamber volume and 2,616 cc equivalent displacement; 9.4:1 and 9.0:1 compression; S4 146 hp, S5 160 hp, S4 turbo 182 hp, S5 turbo 202 hp; gear ratios 3.483 to 0.806; final drives 4.300 and 4.100; discs 277/274 mm; kerb weights 1,191-1,235 kg."
  },
  {
   "ref": "encycarpedia-fc",
   "title": "Mazda RX-7 (FC) specs (1989-1992)",
   "url": "https://www.encycarpedia.com/us/mazda/89-rx-7-coupe",
   "publisher": "encyCARpedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Series 5 Turbo II reference data: 197 hp, 195 lb-ft, 0-60 mph in 6.5 seconds, 143 mph, 2,888 lb kerb weight, MacPherson strut front and trailing-arm rear suspension, 205/55 ZR16 tyres."
  },
  {
   "ref": "jdmbuysell-fc3s",
   "title": "Mazda RX-7 FC3S Buyer's Guide",
   "url": "https://www.jdmbuysell.com/learn/mazda/rx-7/fc3s/",
   "publisher": "JDMBuySell",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "JDM grades (GT-X, GT-R, GT-Limited, GT, G, Cabriolet, Infini I-IV dated 1989-1992); Series 4 versus Series 5 redline and housing changes; the statement that the convertible was naturally aspirated in all markets; compression above 100 psi healthy and below 85 psi worn; rebuild costs of $4,000-$10,000."
  },
  {
   "ref": "oldmotors-10ae",
   "title": "Decade: 10th Anniversary Mazda FC RX-7",
   "url": "https://oldmotors.net/decade-10th-anniversary-mazda-fc-rx-7/",
   "publisher": "Old Motors",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "1,500 10th Anniversary Turbo IIs in Crystal White monochrome with leather, MOMO shifter and unique key, described as mostly an appearance package. Also a 0.29 drag coefficient, roughly 250 lb over the first generation, California design work benchmarked against the Porsche 944."
  },
  {
   "ref": "hpacademy-13b",
   "title": "Everything you need to know about the Mazda 13B Rotary",
   "url": "https://www.hpacademy.com/technical-articles/mazda13b/",
   "publisher": "High Performance Academy",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Engine-building reference: the 13B-T used lower-compression rotors with a twin-scroll turbocharger and split intake manifold; OEM carbon apex seals suit moderate turbo outputs while ceramic seals shatter and steel seals bend."
  },
  {
   "ref": "atkins-rebuild",
   "title": "Mazda Rotary Engine Rebuild Prices",
   "url": "https://www.atkinsrotary.com/Mazda-Rotary-Engine-Rebuild-Prices.html",
   "publisher": "Atkins Rotary",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Rebuilder price list read August 2026: 13B at $4,099-$4,699 on used rotor housings and $5,299-$6,699 on new; 13B turbo at $4,999-$5,199 and $6,499-$6,999; core refunds assessed across twelve main components."
  },
  {
   "ref": "lbi-fd-r1",
   "title": "1993 Mazda RX-7 R1",
   "url": "https://lbilimited.com/offerings/1993-mazda-rx-7-r1/",
   "publisher": "LBI Limited",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Establishes that R1 and R2 belong to the third-generation FD, not the FC: R1 for 1993 only, renamed R2 for 1994-95 with softened suspension, and approximately 2,600 FDs built in that form."
  },
  {
   "ref": "rx7club-rear-suspension",
   "title": "FC3S Rear Suspension Explained/Demystified",
   "url": "https://www.rx7club.com/2nd-generation-specific-1986-1992-17/fc3s-rear-suspension-explained-demystified-1067114/",
   "publisher": "RX7Club",
   "sourceType": "club-forum",
   "reliability": "low",
   "notes": "Owner and preparer discussion of DTSS hardware: the toe-control bushings work as intended when new on factory tyre widths but become unpredictable in transitions once aged or run wider; lateral rod ball joints develop play. Fault patterns only."
  },
  {
   "ref": "classic-fc-2ndgen",
   "title": "Mazda RX-7 - FC - 2nd Gen Market",
   "url": "https://www.classic.com/m/mazda/rx-7/2nd-gen/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Read August 2026: average sale across the whole FC generation of $15,681, submarket benchmarks spanning $10,674 to $24,093, and a lowest tracked result of $843 for a 1991 Turbo in June 2022."
  },
  {
   "ref": "classic-fc-turbo2",
   "title": "Mazda RX-7 Turbo II - FC Market",
   "url": "https://www.classic.com/m/mazda/rx-7/2nd-gen/turbo-ii/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Read August 2026: Turbo II benchmark $24,093 and average sale $24,729 on a rising trend, highest tracked result $39,250 for a 1988 10th Anniversary on 29 October 2025."
  },
  {
   "ref": "classic-fc-coupe",
   "title": "Mazda RX-7 Coupe - Base - FC Market",
   "url": "https://www.classic.com/m/mazda/rx-7/2nd-gen/base-coupe/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Read August 2026: base coupe benchmark $11,460 and average $11,623 on a falling trend, from $5,000 for a 1986 in May 2025 to $18,257 for a modified 1987 in October 2025."
  },
  {
   "ref": "classic-fc-convertible",
   "title": "Mazda RX-7 Convertible - Base - FC Market",
   "url": "https://www.classic.com/m/mazda/rx-7/2nd-gen/base-convertible/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Read August 2026: convertible benchmark $10,663 and average $10,931 on a rising trend, from $3,750 for a 1988 project in August 2024 to $19,999 for a 1991 in March 2026."
  },
  {
   "ref": "classic-fd-3rdgen",
   "title": "Mazda RX-7 - FD - 3rd Gen Market",
   "url": "https://www.classic.com/m/mazda/rx-7/3rd-gen/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Read August 2026 for the following generation, used only for positioning: FD average sale $48,593 and a high of $127,000 for a 17,000-mile 1993 R1 in August 2026."
  },
  {
   "ref": "classic-mecum-conv-lot",
   "title": "1991 Mazda RX-7 Convertible - Mecum Kissimmee (2024)",
   "url": "https://www.classic.com/a/mecum-kissimmee-2024-8p6VGVp/lots/1991-mazda-rx7-convertible-4Vl616W/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Lot record: 1991 RX-7 convertible, VIN JM1FC3523M0907005, 45,000 miles, automatic, lot K207.1 at Mecum Kissimmee on 6 January 2024, not sold against a high bid of $12,000."
  },
  {
   "ref": "goodcarbadcar-sales",
   "title": "Mazda RX-7 Sales Figures",
   "url": "https://www.goodcarbadcar.net/mazda-rx7-sales-figures/",
   "publisher": "GoodCarBadCar",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "United States annual sales across the FC years: 56,203 (1986), 38,345, 27,814, 16,249, 9,743, 6,986 and 6,006 (1992) - and the source identifying conceptcarz's 1990 'production' figure as a sales number."
  },
  {
   "ref": "dot-report-recalls",
   "title": "Information regarding the 1986 Mazda RX7",
   "url": "https://dot.report/vehicle/mazda/rx7/1986",
   "publisher": "DOT.report (NHTSA and Transport Canada recall records)",
   "sourceType": "government",
   "reliability": "medium",
   "notes": "Regulator recall records for the 1986 RX-7: recall 27829 (US) and 1987111 (Canada) for front brake calipers where road salt corrodes pad liners and restricts pad movement; Canadian recall 1987115 for a misrouted evaporative purge hose."
  }
 ],
 "claims": [
  {
   "section": "history",
   "claimText": "The FC was developed through Mazda's North American design studio in California with the Porsche 944 as the stated benchmark, arriving roughly 250 lb heavier than the first-generation car at a quoted 0.29 drag coefficient, and took more than a quarter of Mazda's United States sales in 1986.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "oldmotors-10ae",
    "carthrottle-generations",
    "goodcarbadcar-sales"
   ]
  },
  {
   "section": "production",
   "claimText": "Mazda's own motorsport archive dates FC3S coupe production October 1985 to October 1991 and FC3C convertible production August 1987 to October 1992, while Wikipedia dates the same runs September 1985 to December 1991 and August 1987 to December 1992.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "mzracing-fc30",
    "wikipedia-rx7",
    "carthrottle-generations"
   ],
   "conflictNote": "MZRacing, Mazda's motorsport arm, gives Oct 1985-Oct 1991 for the coupe and Aug 1987-Oct 1992 for the convertible; Wikipedia gives Sept 1985-Dec 1991 and Aug 1987-Dec 1992. Neither states its basis, so the gap is not resolved here."
  },
  {
   "section": "production",
   "claimText": "The generation total of 272,027 cars in general circulation could not be confirmed against any manufacturer source during this research, and Car Throttle's generation guide states only that over 250,000 were built.",
   "confidence": "low",
   "status": "unverified",
   "sourceRefs": [
    "wikipedia-rx7",
    "oldmotors-10ae",
    "carthrottle-generations"
   ]
  },
  {
   "section": "specs",
   "claimText": "The naturally aspirated 13B-DEI used six-port induction and 9.4:1 compression, producing 146 hp at 6,500 rpm and 138 lb-ft at 3,500 rpm in Series 4 North American form and 160 hp at 6,500 rpm after the Series 5 revision for the 1989 model year.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-rx7",
    "motorcar-net-fc-specs",
    "jdmbuysell-fc3s"
   ]
  },
  {
   "section": "specs",
   "claimText": "The turbocharged 13B-T ran 9.0:1 compression and produced 182 hp at 6,500 rpm with 183 lb-ft at 3,500 rpm as the Series 4 Turbo II, rising to 200 hp and 195 lb-ft for the Series 5 at a quoted 6.5 seconds to 60 mph and 143 mph, with Japanese-market cars quoted at 185 PS, then 205 PS, and 215 PS in the Infini series.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-rx7",
    "motorcar-net-fc-specs",
    "jdmbuysell-fc3s",
    "encycarpedia-fc"
   ]
  },
  {
   "section": "specs",
   "claimText": "The 13B-T used a single turbocharger with a twin-scroll housing, a split intake manifold, lower-compression rotors and an air-to-air intercooler fed by a bonnet duct, but sources disagree on whether the twin-scroll arrangement was present from the Turbo II's introduction or arrived with the Series 5 cars.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "hpacademy-13b",
    "wikipedia-rx7",
    "carthrottle-generations",
    "grassroots-lucky7"
   ],
   "conflictNote": "Wikipedia and Car Throttle attribute the twin-scroll turbocharger to the Turbo II from its 1986-87 introduction; Grassroots Motorsports credits it to 1989-and-later cars alone. High Performance Academy confirms the hardware without dating it. Not resolved by any source consulted."
  },
  {
   "section": "specs",
   "claimText": "The FC replaced the first-generation car's live rear axle with independent semi-trailing-arm suspension carrying the Dynamic Tracking Suspension System, whose compliant toe-control hubs let the rear wheels toe out under light lateral load and toe in once cornering forces exceed roughly 0.5 g, with optional Auto Adjusting Suspension varying damping alongside it.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-rx7",
    "conceptcarz-1990-rx7",
    "carthrottle-generations"
   ]
  },
  {
   "section": "problems",
   "claimText": "The DTSS toe-control bushings behave as intended only when new and on factory tyre widths; aged bushings or wider modern tyres make the car unpredictable in transitions, which is why race preparers fit bushings that disable the rear steer entirely.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "grassroots-lucky7",
    "rx7club-rear-suspension"
   ]
  },
  {
   "section": "production",
   "claimText": "Production of the American GTUs is not established: Wikipedia gives a range of between 100 and 1,100 cars while The Truth About Cars states that around 1,100 were built over two years.",
   "confidence": "low",
   "status": "disputed",
   "sourceRefs": [
    "wikipedia-rx7",
    "ttac-gtus",
    "conceptcarz-1990-rx7"
   ],
   "conflictNote": "Wikipedia states the GTUs was built somewhere between 100 and 1,100 units, itself an admission the figure is unknown; The Truth About Cars states around 1,100 over two years; conceptcarz gives no total. No registry or factory figure was obtainable, so this is not resolved here."
  },
  {
   "section": "production",
   "claimText": "The 1988 10th Anniversary edition comprised 1,500 Turbo II cars in monochromatic Crystal White with black leather, a MOMO wheel, bronze-tinted glass and headlamp washers, and the FC3C convertible of August 1987 in Japan and 1988 in the United States was the only factory drop-top across the RX-7's three generations, running to roughly 22,000 cars.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "oldmotors-10ae",
    "wikipedia-rx7",
    "mzracing-fc30"
   ]
  },
  {
   "section": "history",
   "claimText": "Sources disagree on whether the FC convertible was ever offered with the turbocharged 13B-T outside the United States.",
   "confidence": "low",
   "status": "disputed",
   "sourceRefs": [
    "jdmbuysell-fc3s",
    "carthrottle-generations",
    "wikipedia-rx7"
   ],
   "conflictNote": "The JDMBuySell FC3S guide states the convertible was naturally aspirated in all markets; Car Throttle states it took turbocharged engines outside the United States; Wikipedia names no turbocharged version. No source consulted resolves whether a factory turbocharged FC3C existed."
  },
  {
   "section": "history",
   "claimText": "The R1 and R2 designations frequently associated with the RX-7 name belong to the third-generation FD and not to the FC: R1 was offered for 1993 only and renamed R2 with softened suspension for 1994-95, with approximately 2,600 FDs built in that specification.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "lbi-fd-r1",
    "classic-fd-3rdgen"
   ]
  },
  {
   "section": "history",
   "claimText": "Mazda states that the RX-7 took 100 IMSA wins across twelve years of competition, with the GTU class effectively Mazda's through the 1980s and the RX-7 GTO taking four wins plus both championships in 1991; the American GTU and GTUs road cars were sold against that record.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "insidemazda-racing",
    "ttac-gtus",
    "conceptcarz-1990-rx7"
   ]
  },
  {
   "section": "history",
   "claimText": "United States sales fell across the generation from 56,203 cars in 1986 to 38,345 in 1987, 27,814 in 1988, 16,249 in 1989, 9,743 in 1990, 6,986 in 1991 and 6,006 in 1992.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "goodcarbadcar-sales",
    "conceptcarz-1990-rx7"
   ]
  },
  {
   "section": "problems",
   "claimText": "Apex and side seal wear and coolant seal failure are the two dominant engine risks, the latter more damaging because overheating warps rotor housings; the rotary tolerates overheating very poorly, and a supplied rebuilt 13B was quoted in August 2026 at $4,099-$4,699 on used housings and $5,299-$6,699 on new, with the turbocharged 13B at $4,999-$5,199 and $6,499-$6,999.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "jdmbuysell-fc3s",
    "atkins-rebuild",
    "hpacademy-13b",
    "grassroots-lucky7"
   ]
  },
  {
   "section": "problems",
   "claimText": "Regulator records for the 1986 RX-7 cover front brake calipers where road salt accumulation corrodes the pad liners and restricts disc pad movement, recalled in both the United States and Canada, and a Canadian recall for a wrongly routed evaporative emissions purge hose.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "dot-report-recalls"
   ]
  },
  {
   "section": "market",
   "claimText": "As of August 2026 classic.com records a Turbo II Market Benchmark of $24,093 and average sale of $24,729 on a rising trend, a naturally aspirated base coupe benchmark of $11,460 on a falling trend, a convertible benchmark of $10,663 on a rising trend, an average sale across the whole FC generation of $15,681, and a highest tracked result of $39,250 for a 1988 10th Anniversary car on 29 October 2025.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-fc-turbo2",
    "classic-fc-coupe",
    "classic-fc-convertible",
    "classic-fc-2ndgen"
   ]
  },
  {
   "section": "market",
   "claimText": "A 45,000-mile automatic 1991 RX-7 convertible failed to sell at Mecum Kissimmee on 6 January 2024 against a high bid of $12,000, against a lowest result tracked by classic.com of $843 for a 1991 Turbo in June 2022.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-mecum-conv-lot",
    "classic-fc-2ndgen"
   ]
  },
  {
   "section": "market",
   "claimText": "As of August 2026 classic.com records an average sale of $48,593 for the third-generation FD against $15,681 for the FC, with a 1993 FD R1 reaching $127,000 in August 2026, placing a strong FC Turbo II approximately where the FD market begins.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-fd-3rdgen",
    "classic-fc-2ndgen",
    "lbi-fd-r1"
   ]
  }
 ]
};
