/**
 * Researched model draft — BMW M3 (E36) (1992-1999).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedM3E36 = {
 "slug": "bmw/m3-e36",
 "make": "BMW",
 "model": "M3",
 "generation": "E36",
 "generationCode": "E36",
 "trim": null,
 "yearStart": 1992,
 "yearEnd": 1999,
 "bodyStyles": [
  "2-door coupe (E36/2), the only body offered at launch and the only one sold in North America until 1996",
  "4-door saloon (E36/4), added 1994, dropped from production in December 1997",
  "2-door convertible (E36/2C), added 1994, the last body in production, ending December 1999"
 ],
 "engines": [
  "2,990 cc S50B30 naturally aspirated straight-six, cast-iron block with ported alloy head, individual throttle bodies, single VANOS on the inlet camshaft, 210 kW (286 PS / 282 hp) at 7,000 rpm - European specification, 1992-1995",
  "2,990 cc S50B30US naturally aspirated straight-six, M50-derived head and two-position VANOS, no individual throttle bodies, 10.5:1 compression, 179 kW (240 hp) at 6,000 rpm and 305 Nm (225 lb-ft) at 4,250 rpm - North America only, 1994-1995",
  "3,201 cc S50B32 naturally aspirated straight-six, double VANOS on inlet and exhaust camshafts, 11.3:1 compression, 236 kW (321 PS / 316 hp) at 7,400 rpm and 350 Nm (258 lb-ft) at 3,250 rpm - European specification, 1995-1999",
  "3,152 cc S52B32US naturally aspirated straight-six, cast-iron block and head shared with the ordinary M52, 10.5:1 compression, 179 kW (240 hp) at 6,000 rpm and 320 Nm (236 lb-ft) at 3,800 rpm - North America only, 1996-1999",
  "2,990 cc S50B30 in M3 GT tune: 264-degree inlet camshaft, shortened intake manifold from the later 3.2, revised Bosch Motronic M3.3 mapping and VANOS software, baffled dual-pickup sump, quoted at 295-296 bhp"
 ],
 "productionTotal": null,
 "productionNotes": "No single figure is asserted because the two most detailed public tabulations do not quite agree. BIMMERtips, publishing a cross-checked breakdown by engine, market, body and transmission, totals 71,241 cars. Prestige & Performance Car states 71,242, which is also what Wikipedia's body-style figures come to when added together (46,525 coupes, 12,114 convertibles, 12,603 saloons). The gap is a single car and neither side explains it, so the total is left null. The body-style split is not seriously contested; the market split is. Wikipedia gives North American production as 18,961 coupes, 7,760 saloons and 6,211 convertibles. The BIMMERtips table gives US figures of 8,515 manual plus 1,705 automatic S50B30US coupes, 11,793 S52 coupes, 4,574 manual plus 4,036 automatic saloons and 2,252 manual plus 4,017 automatic convertibles - substantially more coupes and saloons than Wikipedia allows. The disagreement is unresolved. Sub-totals the sources do agree on: 748 South African coupes and roughly 700 South African saloons; 1,342 left-hand-drive and 500 right-hand-drive SMG coupes; 694 right-hand-drive saloons; 126 North American M3 Lightweights; and 15 Australian M3-Rs. The M3 GT is stated as 350 by BIMMERtips and as 356 by BMW M itself, by RM Sotheby's catalogue entries and by Supercar Nostalgia - the difference being whether the five or six pre-production cars are counted. Supercar Nostalgia further splits the 3.0-litre phase into 15,436 coupes, 1,283 saloons and 1,975 convertibles, and the 3.2 Evolution phase into 8,962 coupes, 1,990 saloons and 3,870 convertibles.",
 "notableTrims": [
  {
   "name": "M3 Coupe 3.0 (European S50B30)",
   "note": "The launch car: 2,990 cc, individual throttle bodies, single VANOS, 286 PS at 7,000 rpm, five-speed manual, 1,460 kg. Recessed kidney grilles and orange indicators identify the pre-facelift shell. The reference point against which every other E36 M3 is argued."
  },
  {
   "name": "M3 (North America, S50B30US then S52B32US)",
   "note": "A different car under the bonnet: 240 hp in both 1995 and 1996-99 form, five-speed only, solid rather than two-piece floating front discs, no oil temperature gauge, a smaller differential and plastic rather than glass headlamp lenses. Cheap when new, and the reason US and European values have never converged."
  },
  {
   "name": "M3 GT (1995)",
   "note": "Left-hand-drive, mainland Europe only, British Racing Green over Mexico Green leather. A 264-degree inlet cam, shortened intake manifold, baffled dual-pickup sump, aluminium doors, adjustable splitter and split-level rear wing, all to homologate FIA and IMSA GT parts. Now the most valuable E36 M3 by some distance."
  },
  {
   "name": "M3 Lightweight (1995, North America)",
   "note": "BMW of North America's answer to not getting the GT: air conditioning, radio, sunroof, sound deadening, toolkit and spare deleted, aluminium door skins, Alpine White III with M flag graphics, and a box of non-street-legal race parts in the boot. 126 built, listed at $47,470, homologated for IMSA showroom-stock racing."
  },
  {
   "name": "M3 Evolution 3.2 (1995-1999)",
   "note": "The facelift: 3,201 cc, double VANOS, 11.3:1 compression, 321 PS at 7,400 rpm, a six-speed derived from the E34 M5 with an overdrive sixth, and 20 kg saved through aluminium doors. Widely described as the first BMW production engine past 100 bhp per litre."
  },
  {
   "name": "GT-bodied run-out cars (GT Individual and Imola Individual)",
   "note": "Two separate things frequently conflated. Supercar Nostalgia records 50 UK 'M3 mit GT-Optik' cars, model code BF92, wearing the GT package on the standard 286 bhp engine; Prestige & Performance Car describes a 1998 GT2 in Imola Red on Evolution mechanicals. Neither is a factory GT, and documentation matters more here than badges."
  },
  {
   "name": "M3-R (Australia, 1994)",
   "note": "Fifteen cars built for Australian showroom-stock racing, quoted at 240 kW (322 hp), four going straight to competition teams and eleven to private buyers. The smallest official E36 M3 series and effectively untraded outside Australia."
  }
 ],
 "specs": {
  "layout": "Front-engined, longitudinal, rear-wheel drive",
  "chassis": "Unitary steel monocoque on the E36 3 Series shell, with M-specific geometry, bracing and brakes",
  "engine": "S50B30 2,990 cc / S50B32 3,201 cc straight-six (Europe); S50B30US 2,990 cc / S52B32US 3,152 cc (North America)",
  "valvetrain": "DOHC, four valves per cylinder; single VANOS on the inlet camshaft for 3.0 cars, double VANOS on the 3.2 Evolution",
  "bore_stroke": "86.0 x 85.8 mm (S50B30, S50B30US); 86.4 x 91.0 mm (S50B32); 86.4 x 89.6 mm (S52B32US)",
  "compression": "10.8:1 (S50B30), 11.3:1 (S50B32), 10.5:1 (both North American engines)",
  "power": "286 PS at 7,000 rpm and 321 PS at 7,400 rpm claimed by BMW for the European engines; 240 hp at 6,000 rpm for both North American engines",
  "torque": "320 Nm at 3,600 rpm quoted for the S50B30 by most sources and 329 Nm at 3,500 rpm by others; 350 Nm at 3,250 rpm (S50B32); 305 Nm at 4,250 rpm (S50B30US); 320 Nm at 3,800 rpm (S52B32US)",
  "transmission": "Five-speed manual on all 3.0 and all North American cars; six-speed with overdrive sixth from the 3.2 Evolution; SMG sequential optional in Europe; five-speed ZF automatic optional in North America",
  "brakes": "Ventilated discs all round; two-piece floating front discs with aluminium hubs in Europe, solid one-piece rotors in North America",
  "suspension": "MacPherson struts front, multi-link Z-axle rear, with M-specific springs, dampers and anti-roll bars",
  "weight": "1,460 kg (European 3.0 coupe) and 1,440 kg (3.2 Evolution coupe) per Supercar Nostalgia; 1,515 kg kerb quoted by Wikipedia for a 1996 European coupe; 1,338 kg for the Lightweight",
  "acceleration": "0-62 mph in 5.5 s (European 3.0) and 5.3 s (3.2 Evolution) claimed by BMW; 5.8 s for the Lightweight; about 6.1 s 0-60 mph reported for North American cars",
  "top_speed": "155 mph (250 km/h) limited in Europe; North American cars reported as limited to about 137 mph"
 },
 "summary": "The E36 M3 (1992-1999) is where BMW M stopped building homologation specials and started building a product line. Where the E30 M3 was a four-cylinder Group A racing car sold with number plates, the E36 was a smooth 3.0-litre straight-six coupe with VANOS variable valve timing, offered from 1994 as a saloon and a convertible as well, and built in roughly three and a half times the volume of its predecessor. Europe got 286 PS, then 321 PS from the 3.2-litre double-VANOS S50B32 of late 1995. North America got a different engine entirely - first the M50-derived S50B30US, then the S52B32US, both rated at 240 hp - a decision that made the car affordable in the United States and has been argued about by owners on both continents ever since. Europe also got the 356-car M3 GT homologation special; America got the 126-car Lightweight instead. Values now split along exactly those lines.",
 "history": "## Not Another Homologation Special\nThe E30 M3 existed because BMW needed to win Group A, and everything about it - the four-cylinder S14, the flared arches, the bolted-on boot lid - followed from that. The E36 M3 followed from something else. Supercar Nostalgia dates the coupe's public debut to the Paris Motor Show in October 1992; Wikipedia gives a November 1992 launch. Either way, what arrived was a car built to be sold rather than to be raced: a 2,990 cc straight-six in place of the S14, no flared bodywork, and roughly 71,000 cars built against about 18,000 E30s. BMW M's own retrospective concedes the point, describing the E36 as having traded its predecessor's rebelliousness for something cultivated.\n\n## Two Cars Called M3\nThe European S50B30 was a genuine M engine: individual throttle bodies, a ported alloy head, 10.8:1 compression, VANOS acting on the inlet camshaft, and 286 PS at 7,000 rpm. North America received the S50B30US instead - the same 2,990 cc but with the M50's simpler head and two-position VANOS, no individual throttle bodies, 10.5:1 compression and 240 hp at 6,000 rpm. The published explanations do not agree. autoevolution attributes the substitution to federal emissions standards; Prestige & Performance Car attributes it to the octane rating of American pump fuel; Wikipedia describes it as a compromise reached so that the M3 could be sold in America affordably at all. The 1996 facelift widened rather than closed the gap: Europe got the 3,201 cc double-VANOS S50B32 at 321 PS and a six-speed gearbox, while America got the S52B32US - 3,152 cc despite the name, still 240 hp, still five speeds, sharing its block and head with the ordinary 328i. American cars also went without the two-piece floating front discs, the oil temperature gauge and the larger differential.\n\n## Coupe, Saloon, Convertible\nFor the first time an M3 came in more than one shape. The saloon arrived in 1994 and lasted only until December 1997; the convertible arrived the same year and outlived everything else, running to December 1999. Neither was sold in North America until the S52 facelift, and both are scarcer than the coupe in right-hand drive - 694 right-hand-drive saloons against several thousand right-hand-drive coupes. A sequential SMG gearbox was offered in Europe, from 1996 by BMW M's account and from March 1997 by Supercar Nostalgia's.\n\n## GT, Lightweight, and What Each Market Was Given\nHomologation did not disappear, it just became a side project. In 1995 BMW built the M3 GT for mainland Europe: British Racing Green only, left-hand drive only, a 264-degree inlet cam and shortened intake manifold for 295-296 bhp, a baffled dual-pickup sump, aluminium doors and adjustable aerodynamics, all to homologate parts for FIA and IMSA GT competition. North America could not have it, so BMW of North America commissioned the M3 Lightweight - 126 cars built between August and October 1995, stripped of air conditioning, radio, sunroof and sound deadening, with aluminium door skins and a set of race parts shipped loose in the boot. It kept the 240 hp US engine, and Prototype Technology Group, which ran BMW's American racing effort, handled its delivery.\n\n## The Long Tail\nCoupe production ended in 1998 and the convertible in December 1999, and the E46 replaced the line with an engine sold in the same specification worldwide. That decision reads, in retrospect, as an admission about the E36. The generation's reputation has since been rebuilt from the bottom up by owners rather than by the factory, and the argument over the American engine has never quite been settled - only restated, each time one of these cars changes hands.",
 "marketNotes": "As of August 2026, classic.com's benchmark for the E36 M3 as a whole is $29,824, with 37 cars listed for sale. The sub-model benchmarks show how sharply body style and gearbox separate the ordinary cars: manual coupe $28,939, manual convertible $28,049, manual saloon $21,578, automatic coupe $19,221, automatic saloon $16,543 and automatic convertible $16,513. The same page records a low of $7,000 for a 1997 saloon in June 2022. The two homologation specials sit in a different market entirely. classic.com's M3 GT benchmark is $174,059 against an average recorded sale of $132,563, with a low of $45,000 in October 2022; RM Sotheby's sold chassis WBSBF99030EA40098 for 275,000 euros at Munich in October 2025, that figure being the house's advertised sold price rather than hammer. The M3 Lightweight benchmark is $180,650 against an average of $167,374 and trending upward, with a range from $85,001 in December 2024 to $257,600 in August 2026; RM Sotheby's sold chassis WBSBF9328SEH07955 for $179,200 at Monterey in August 2025. For context on the climb, Gooding & Company sold a 7,500-mile Lightweight for $145,750 including buyer's premium at Amelia Island in March 2017, and Sports Car Market recorded specialist dealer sales in the $115,000-$135,000 band around that period. UK trade guidance from Prestige & Performance Car put good Evolution cars near 30,000 pounds and tired high-mileage examples around 20,000 pounds.",
 "whatToLookFor": "Establish which car it actually is before anything else. European S50B30 and S50B32 cars, North American S50B30US and S52B32US cars, UK GT Individual cars wearing GT bodywork on standard mechanicals, and genuine mainland GTs are four different propositions with four different values, and the visual cues overlap. A GT is British Racing Green, left-hand drive and carries aluminium doors; an Imola Individual is Imola Red on Evolution mechanicals; a Lightweight is Alpine White III with aluminium door skins, no sunroof and no air conditioning, and its boot should still contain the loose race parts if the car is untouched. Structure comes next. The floor around the four rear subframe mounting points tears on hard-driven and lowered cars, the passenger-side front mount first; look underneath for cracking, previous welding or fitted reinforcement plates, and treat a car with none of these and a track history with scepticism. Rust is the other structural issue - rear arches, sills, jacking points, battery tray, front inner wings and the rear screen surround - and specialists have quoted 10,000 to 15,000 pounds to put a badly corroded shell right, which is more than most cars are worth. Listen for a VANOS rattle at idle and check for a flat spot below 3,000 rpm. On European S50 cars ask when the valve clearances were last shimmed, and check the cooling system's plastic components and their replacement dates.",
 "commonProblems": "VANOS is the defining fault and it takes two forms. On the European S50B30 the intake rod cup seal is Buna rubber that Beisan Systems reports hardening, shrinking and flattening within roughly 20,000 miles, with the Teflon piston seal then wearing unevenly and the solenoid O-rings shredding under oil pressure; the result is lost power below 3,000 rpm, bogging and surging around 3,000 rpm, a lumpy idle and worse fuel consumption. On the two-position units fitted to the S50B30US and S52 - shared with M50TU and M52 engines - the failure is mechanical rather than hydraulic: wear in the helical gears on camshaft, sprocket and splined shaft opens axial play that the rotating cam then rattles against, and performance camshafts make it worse. Rebuild costs are quoted between 300 and 800 pounds for a seal kit and around 1,500 pounds plus VAT for a full specialist rebuild. Cracking of the floor around the rear subframe mounts is endemic. Corrosion is the biggest financial risk on European cars. Cooling system plastics - expansion tank, thermostat housing, water pump impeller - go brittle with age and an overheat takes the head gasket with it. European S50 engines use shim-adjusted valve clearances at 20,000 to 30,000 mile intervals, steering vagueness from worn front wishbone bushes is routine at this age, and North American cars have a reputation for smaller rear differentials failing at the bearings and flanges.",
 "valueTrajectory": "For most of its life the E36 M3 was simply a used BMW, and in America a cheap one - the engine argument that annoyed enthusiasts in 1995 kept prices down for two decades. Sports Car Market records Lightweights changing hands at around $25,000 in the mid-2000s, which puts the floor for ordinary cars a good deal lower still. The recovery has been uneven and it has followed rarity rather than the generation as a whole. As of August 2026 the Lightweight benchmark of $180,650 is trending upward against a $257,600 high recorded that month, and the M3 GT benchmark of $174,059 sits above an average recorded sale of $132,563, meaning the best cars are pulling away from the mean. Ordinary cars have moved far less: a manual coupe benchmark of $28,939 against an automatic saloon at $16,543 describes a market that still prices these as fast old cars rather than collectibles. The gap that matters is not European against American but documented against undocumented, and unrusted against welded. Attrition through corrosion, track use and engine swaps has been heavy enough that the supply of honest standard cars is falling faster than demand is rising.",
 "overallConfidence": "high",
 "sources": [
  {
   "ref": "bmw-m-e36-portrait",
   "title": "The BMW M3 E36: Big footsteps and new paths to tread",
   "url": "https://www.bmw-m.com/en/topics/magazine-article-pool/bmw-m3-e36-portraet.html",
   "publisher": "BMW M GmbH",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "BMW M's retrospective: first six-cylinder M3, 286 hp then 321 hp from 1995, VANOS rationale, six-speed replacing five, SMG from 1996, saloon a first, and the E36 framed as cultivated where the E30 was rebellious."
  },
  {
   "ref": "bmw-m-m3-gt",
   "title": "The BMW E36 M3 GT",
   "url": "https://www.bmw-m.com/en/topics/magazine-article-pool/bmw-e36-m3-gt.html",
   "publisher": "BMW M GmbH",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "BMW M on the GT: 356 units including five pre-production cars, 217 kW (295 hp) and 323 Nm at 3,900 rpm from a 264-degree cam and the 3.2's manifold, British Racing Green only, DM 91,000, FIA GT and IMSA homologation."
  },
  {
   "ref": "wikipedia-m3",
   "title": "BMW M3",
   "url": "https://en.wikipedia.org/wiki/BMW_M3",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "E36 section: coupe November 1992, convertible and saloon 1994, saloon ending December 1997, convertible December 1999; 46,525 coupes, 12,114 convertibles, 12,603 saloons; US totals 18,961 / 7,760 / 6,211; M3-R 15 cars."
  },
  {
   "ref": "wikipedia-s50",
   "title": "BMW S50",
   "url": "https://en.wikipedia.org/wiki/BMW_S50",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "S50B30 86.0 x 85.8 mm, 10.8:1, 210 kW, 329 Nm at 3,500 rpm; S50B30US 10.5:1, 179 kW, 305 Nm at 4,250 rpm, called a compromise to make the M3 affordable in America; S50B32 3,201 cc, 11.3:1, 236 kW at 7,400 rpm."
  },
  {
   "ref": "wikipedia-m52",
   "title": "BMW M52",
   "url": "https://en.wikipedia.org/wiki/BMW_M52",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Establishes the S52B32US as 3,152 cc, 86.4 x 89.6 mm, 10.5:1, 240 hp at 6,000 rpm and 236 lb-ft at 3,800 rpm, sharing block and head with the ordinary M52."
  },
  {
   "ref": "scn-m3-30",
   "title": "BMW E36 M3 3.0 Guide",
   "url": "https://supercarnostalgia.com/blog/bmw-e36-m3",
   "publisher": "Supercar Nostalgia",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Paris debut October 1992, convertible March 1994, saloon June 1994; 286 bhp and 236 lb-ft at 3,600 rpm; 1,460 kg, 5.5 s; 3.0-phase output 15,436 / 1,283 / 1,975; US coupe-only at 240 bhp; E30 M3 at 189 bhp."
  },
  {
   "ref": "scn-m3-evo",
   "title": "BMW E36 M3 3.2 Evolution Guide",
   "url": "https://supercarnostalgia.com/blog/bmw-e36-m3-evolution",
   "publisher": "Supercar Nostalgia",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Frankfurt September 1995; 3,210 cc quoted, 11.3:1, double VANOS, 321 bhp at 7,400 rpm; six-speed from the E34 M5; SMG from March 1997; 1,440 kg, 5.3 s; 8,962 / 1,990 / 3,870; US S52 five-speed, no floating calipers."
  },
  {
   "ref": "scn-m3-gt",
   "title": "BMW E36 M3 3.0 GT Guide",
   "url": "https://supercarnostalgia.com/blog/bmw-e36-m3-gt",
   "publisher": "Supercar Nostalgia",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "350 cars built February to June 1995 plus six prototypes from December 1994, all LHD; 264-degree cam, shortened manifold, baffled dual-pickup sump; 296 bhp; 1,440 kg with aluminium doors; plus 50 UK 'M3 mit GT-Optik' cars, code BF92."
  },
  {
   "ref": "scn-m3-ltw",
   "title": "BMW E36 M3 3.0 Lightweight Guide",
   "url": "https://supercarnostalgia.com/blog/bmw-e36-m3-lightweight",
   "publisher": "Supercar Nostalgia",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "115 customer cars August to October 1995 plus 11 prototypes, 126 total against 85 promised; 1,338 kg; air conditioning, audio, sunroof, spare and toolkit deleted, aluminium door skins; 240 bhp; race parts loose in the boot."
  },
  {
   "ref": "ppc-buyers-guide",
   "title": "BMW M3 (E36) buyer's guide",
   "url": "https://prestigeandperformancecar.com/bmw/bmw-m3-e36-buyers-guide/",
   "publisher": "Prestige & Performance Car",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "States 71,242 built and 694 RHD saloons; pre-facelift shell identified by orange indicators and recessed grilles; a GT2 dated 1998 in Imola Red on Evolution spec; rust rebuilds 10,000-15,000 pounds, VANOS rebuild about 1,500 pounds plus VAT."
  },
  {
   "ref": "ppc-s50-tech",
   "title": "BMW S50 engine tech guide",
   "url": "https://prestigeandperformancecar.com/bmw/bmw-s50-engine-tech-guide/",
   "publisher": "Prestige & Performance Car",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "The source attributing the US detune to American fuel octane rather than emissions. Also S50B30 at 286 hp and 236 lb-ft at 3,600 rpm with individual throttle bodies, the US engine on the M50's head and two-stage VANOS."
  },
  {
   "ref": "autoevolution-s50",
   "title": "BMW S50 EU-Spec: The M3's First Six-Cylinder",
   "url": "https://www.autoevolution.com/news/bmw-s50-eu-spec-the-m3-s-first-six-cylinder-an-iconic-engine-that-the-us-missed-out-on-224752.html",
   "publisher": "autoevolution",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Attributes the US engine substitution specifically to federal emission standards, and itemises the gap: individual throttle bodies and higher compression in Europe against the M50-derived head and shared 325/525 calibration."
  },
  {
   "ref": "carthrottle-us-diffs",
   "title": "8 Ways American E36 M3 Buyers Got Completely Screwed Over",
   "url": "https://www.carthrottle.com/news/8-ways-american-e36-m3-buyers-got-completely-screwed-over",
   "publisher": "Car Throttle",
   "sourceType": "journalism",
   "reliability": "low",
   "notes": "Source for the non-engine differences: solid front discs against European two-piece floating rotors with aluminium hubs, a smaller rear differential, no oil temperature gauge, plastic headlamps, US limiter at 137 mph."
  },
  {
   "ref": "beisan-euro-s50-vanos",
   "title": "Euro S50 Single Vanos (Euro E36 M3)",
   "url": "https://beisansystems.com/euro-s50-single-vanos-euro-e36-m3/",
   "publisher": "Beisan Systems",
   "sourceType": "specialist",
   "reliability": "high",
   "notes": "Specialist on the Euro S50B30 VANOS: the Buna rod cup seal hardens, shrinks and flattens within roughly 20,000 miles. Symptoms: power loss below 3,000 rpm, bogging then surging at 3,000 rpm, rough idle."
  },
  {
   "ref": "beisan-vanos-rattle",
   "title": "Single Vanos Rattle 6-cyl",
   "url": "https://beisansystems.com/single-vanos-rattle-6-cyl/",
   "publisher": "Beisan Systems",
   "sourceType": "specialist",
   "reliability": "high",
   "notes": "Establishes that the US S50B30US and S52 share their two-position VANOS with the M50TU and M52, and that the rattle comes from helical gear wear opening axial play on camshaft, sprocket and splined shaft."
  },
  {
   "ref": "turner-subframe",
   "title": "E36 Rear Subframe/Chassis Reinforcement Kit",
   "url": "https://www.turnermotorsport.com/p-3971-e36-rear-subframechassis-reinforcement-kit/",
   "publisher": "Turner Motorsport",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Explains the rear subframe mount failure: chassis flex plus bushing movement makes the threaded tube act as a lever on the welded plate, tearing sheet metal. Passenger-side front mount goes first; M3s from mid-1994 carried factory reinforcement."
  },
  {
   "ref": "getcarwise-problems",
   "title": "BMW E36 M3 Common Problems - Known Issues & Buying Guide (1992-1999)",
   "url": "https://getcarwise.co.uk/guides/bmw-e36-m3",
   "publisher": "CarWise",
   "sourceType": "specialist",
   "reliability": "low",
   "notes": "UK cost bands: VANOS 300-800 pounds, rear subframe 500-3,000, cooling plastics 300-800, valve shims 200-500 at 20,000-30,000 miles. Rust sites: rear arches, sills, battery tray, jacking points, inner wings, screen seals."
  },
  {
   "ref": "bimmertips-production",
   "title": "BMW E36 Production Data Numbers",
   "url": "https://bimmertips.com/bmw-e36-production-data-numbers/",
   "publisher": "BIMMERtips",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Production by engine, market, body and transmission totalling 71,241: US 3.0 coupes 8,515 and 1,705, US S52 coupes 11,793, US saloons 4,574 and 4,036, US convertibles 2,252 and 4,017, SMG coupes 1,342 and 500, GT 350, LTW 126, M3-R 15."
  },
  {
   "ref": "classic-e36-m3",
   "title": "BMW M3 - E36 Market",
   "url": "https://www.classic.com/m/bmw/3-series/e36/m3/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Market data as of August 2026: benchmark $29,824, 37 cars for sale; $28,939 manual coupe, $19,221 automatic coupe, $21,578 manual saloon, $16,543 automatic saloon, $28,049 manual convertible, $16,513 automatic convertible; low $7,000, June 2022."
  },
  {
   "ref": "classic-m3-gt",
   "title": "BMW M3 GT - E36 Market",
   "url": "https://www.classic.com/m/bmw/3-series/e36/m3/gt/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Market data as of August 2026: M3 GT benchmark $174,059 trending up against an average sale of $132,563; high 275,000 euros via RM Sotheby's October 2025; low $45,000 October 2022; 356 built, 295 hp, 1995 only."
  },
  {
   "ref": "classic-m3-ltw",
   "title": "BMW M3 Lightweight - E36 Market",
   "url": "https://www.classic.com/m/bmw/3-series/e36/m3/lightweight/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Market data as of August 2026: Lightweight benchmark $180,650 trending up, average $167,374, high $257,600 on 15 August 2026, low $85,001 on 3 December 2024; 126 built, North America only."
  },
  {
   "ref": "rm-mo25-ltw",
   "title": "1995 BMW M3 Lightweight, Monterey 2025",
   "url": "https://rmsothebys.com/auctions/mo25/lots/r0136-1995-bmw-m3-lightweight/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold $179,200 at Monterey, August 2025. Chassis WBSBF9328SEH07955, built 29 September 1995, one of 126, 200 lb removed. Catalogue states the car existed because the Euro GT could not be sold in North America and IMSA needed homologation; US delivery by Prototype Technology Group."
  },
  {
   "ref": "rm-mu25-gt",
   "title": "1995 BMW M3 GT, Munich 2025",
   "url": "https://rmsothebys.com/auctions/mu25/lots/b0006-1995-bmw-m3-gt/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold 275,000 euros at Munich, October 2025. Chassis WBSBF99030EA40098. Catalogue states 356 M3 GTs built to homologate for FIA and IMSA GT competition, 295 PS, roughly 30 kg saved partly through aluminium doors, Europe only."
  },
  {
   "ref": "scm-ltw",
   "title": "1995 BMW M3 Lightweight",
   "url": "https://www.sportscarmarket.com/profile/1995-bmw-m3-lightweight",
   "publisher": "Sports Car Market",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Original US list price $47,470, a 225 lb saving to 2,950 lb, and the Gooding & Company Amelia Island sale of 10 March 2017 at $145,750 including buyer's premium. Quotes Enthusiast Auto Group on values rising from about $25,000 in the mid-2000s."
  }
 ],
 "claims": [
  {
   "section": "history",
   "claimText": "The E36 M3 was conceived as a series production model rather than a homologation special, replacing the E30's four-cylinder S14 with a 2,990 cc straight-six and adding saloon and convertible bodies, and was built in roughly three and a half times the volume of its predecessor.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "bmw-m-e36-portrait",
    "scn-m3-30",
    "wikipedia-m3"
   ]
  },
  {
   "section": "history",
   "claimText": "Sources give different starting points for the E36 M3: Supercar Nostalgia dates the coupe's public debut to the Paris Motor Show in October 1992 while Wikipedia gives a November 1992 launch.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "scn-m3-30",
    "wikipedia-m3"
   ],
   "conflictNote": "Supercar Nostalgia states a Paris Motor Show debut in October 1992; Wikipedia states a November 1992 launch. One may describe the show debut and the other the start of customer sales, but no source consulted here reconciles them and the point is not resolved."
  },
  {
   "section": "specs",
   "claimText": "The European S50B30 used individual throttle bodies, a ported alloy head, 10.8:1 compression and single VANOS on the inlet camshaft for 286 PS at 7,000 rpm, while the North American S50B30US used the M50's simpler head and two-position VANOS, no individual throttle bodies and 10.5:1 compression for 240 hp at 6,000 rpm.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-s50",
    "ppc-s50-tech",
    "autoevolution-s50",
    "scn-m3-30",
    "beisan-vanos-rattle"
   ]
  },
  {
   "section": "specs",
   "claimText": "Published explanations for why North America received a different engine do not agree: autoevolution attributes it to federal emission standards, Prestige & Performance Car to the octane rating of American pump fuel, and Wikipedia to a cost compromise made so the M3 could be sold in the United States affordably.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "autoevolution-s50",
    "ppc-s50-tech",
    "wikipedia-s50"
   ],
   "conflictNote": "autoevolution states the substitution was made to meet federal emission standards, Prestige & Performance Car that it was made to tolerate lower-octane American fuel, and Wikipedia that it was a compromise to bring the M3 to America affordably. Three different causes for one decision, and no source consulted here resolves which was decisive."
  },
  {
   "section": "specs",
   "claimText": "The late-1995 facelift widened rather than closed the gap between markets: Europe received the 3,201 cc double-VANOS S50B32 at 321 PS and 350 Nm with a six-speed gearbox, while North America received the 3,152 cc S52B32US, still rated 240 hp, still five-speed, sharing its cast-iron block and head with the ordinary M52 and going without the two-piece floating front discs, the oil temperature gauge and the larger differential fitted in Europe.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-s50",
    "wikipedia-m52",
    "scn-m3-evo",
    "bmw-m-e36-portrait",
    "carthrottle-us-diffs"
   ]
  },
  {
   "section": "specs",
   "claimText": "Sources disagree on the S50B30's torque peak and on the S50B32's exact displacement.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "wikipedia-s50",
    "scn-m3-30",
    "ppc-s50-tech",
    "scn-m3-evo"
   ],
   "conflictNote": "Wikipedia's S50 article gives the S50B30 329 Nm at 3,500 rpm; Supercar Nostalgia and Prestige & Performance Car both give 236 lb-ft (320 Nm) at 3,600 rpm. For the S50B32, Wikipedia states 3,201 cc and Supercar Nostalgia 3,210 cc. Neither discrepancy is addressed by any source consulted here and both remain unresolved."
  },
  {
   "section": "production",
   "claimText": "No single production total for the E36 M3 is asserted here: BIMMERtips's tabulated breakdown totals 71,241 cars while Prestige & Performance Car states 71,242, which is also the sum of Wikipedia's body-style figures.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "bimmertips-production",
    "ppc-buyers-guide",
    "wikipedia-m3"
   ],
   "conflictNote": "BIMMERtips totals 71,241 from a table broken down by engine, market, body and transmission. Prestige & Performance Car states 71,242, matching the sum of Wikipedia's 46,525 coupes, 12,114 convertibles and 12,603 saloons. The one-car difference is not resolved by any source consulted here, so productionTotal is left null."
  },
  {
   "section": "production",
   "claimText": "The North American share of production is materially disputed: Wikipedia gives 18,961 US coupes, 7,760 saloons and 6,211 convertibles, while the table published by BIMMERtips adds to substantially more coupes and saloons.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "wikipedia-m3",
    "bimmertips-production"
   ],
   "conflictNote": "Wikipedia states 18,961 US coupes, 7,760 saloons and 6,211 convertibles. The BIMMERtips table gives 8,515 manual plus 1,705 automatic S50B30US coupes and 11,793 S52 coupes, 4,574 manual plus 4,036 automatic saloons and 2,252 manual plus 4,017 automatic convertibles. No source consulted here reconciles the two sets, so no US total is asserted."
  },
  {
   "section": "production",
   "claimText": "The M3 GT was built for mainland Europe only, in left-hand drive and in British Racing Green only, but its production count is stated as either 350 or 356 depending on whether pre-production cars are included.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "bmw-m-m3-gt",
    "scn-m3-gt",
    "bimmertips-production",
    "rm-mu25-gt",
    "classic-m3-gt"
   ],
   "conflictNote": "BMW M states 356 including five pre-production models, and RM Sotheby's and classic.com both state 356. Supercar Nostalgia states 350 customer cars built February to June 1995 plus six prototypes from December 1994, and BIMMERtips lists 350. Whether the figure is 350 or 356, and whether five or six prototypes exist, is not resolved by any source consulted here."
  },
  {
   "section": "production",
   "claimText": "The M3 Lightweight was built only for North America and only in 1995, with 126 cars comprising 115 customer examples built between August and October 1995 plus 11 prototypes, against 85 originally promised.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "scn-m3-ltw",
    "rm-mo25-ltw",
    "classic-m3-ltw"
   ]
  },
  {
   "section": "history",
   "claimText": "BMW of North America commissioned the Lightweight because the European M3 GT was not available to it and IMSA showroom-stock racing required a homologated car, and Prototype Technology Group handled US delivery of the resulting cars.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "rm-mo25-ltw",
    "scn-m3-ltw"
   ]
  },
  {
   "section": "problems",
   "claimText": "VANOS failure takes two distinct forms across the generation: on the European S50B30 the Buna rod cup seal hardens, shrinks and flattens within roughly 20,000 miles, causing power loss below 3,000 rpm and surging around 3,000 rpm, while the two-position units on the S50B30US and S52 rattle because of wear in the helical gears on camshaft, sprocket and splined shaft.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "beisan-euro-s50-vanos",
    "beisan-vanos-rattle",
    "getcarwise-problems"
   ]
  },
  {
   "section": "problems",
   "claimText": "The floor around the four rear subframe mounting points cracks because chassis flex and bushing movement let the threaded tube and bolt act as a lever on the welded mounting plate, with the passenger-side front mount failing first; separately, structural corrosion at the rear arches, sills, jacking points, battery tray and front inner wings is the largest financial risk on European cars, with specialists quoting 10,000 to 15,000 pounds to rebuild a badly rusted shell.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "turner-subframe",
    "getcarwise-problems",
    "ppc-buyers-guide"
   ]
  },
  {
   "section": "market",
   "claimText": "As of August 2026 classic.com's benchmark for the E36 M3 as a whole is $29,824, ranging by sub-model from $28,939 for a manual coupe to $16,513 for an automatic convertible, while the two homologation specials sit in a separate market: an M3 GT benchmark of $174,059 against an average recorded sale of $132,563, and an M3 Lightweight benchmark of $180,650 against an average of $167,374.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-e36-m3",
    "classic-m3-gt",
    "classic-m3-ltw"
   ]
  },
  {
   "section": "market",
   "claimText": "Recent auction evidence supports those benchmarks: RM Sotheby's sold M3 GT chassis WBSBF99030EA40098 for 275,000 euros at Munich in October 2025 and M3 Lightweight chassis WBSBF9328SEH07955 for $179,200 at Monterey in August 2025.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "rm-mu25-gt",
    "rm-mo25-ltw",
    "classic-m3-gt"
   ]
  },
  {
   "section": "market",
   "claimText": "The M3 Lightweight listed at $47,470 in the United States in 1995 and was trading at around $25,000 in the mid-2000s before reaching $145,750 including buyer's premium at Gooding & Company's Amelia Island sale in March 2017 and six figures thereafter.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "scm-ltw",
    "classic-m3-ltw"
   ]
  }
 ]
};
