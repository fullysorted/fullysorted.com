/**
 * Researched model draft — Land Rover Defender (Ninety / One Ten / 130, coil-sprung).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedDefender = {
 "slug": "land-rover/defender",
 "make": "Land Rover",
 "model": "Defender",
 "generation": "Coil-sprung Ninety / One Ten / Defender",
 "generationCode": "L316",
 "trim": null,
 "yearStart": 1983,
 "yearEnd": 2016,
 "bodyStyles": [
  "Soft Top (90)",
  "Hard Top (90/110)",
  "Station Wagon (90/110/130)",
  "Pick-Up / Truck Cab (90/110)",
  "High Capacity Pick-Up (110/130)",
  "Double Cab (110/130)",
  "Chassis Cab (130)"
 ],
 "engines": [
  "2.25L and 2.5L naturally aspirated petrol and diesel four-cylinders (early One Ten/Ninety, pre-Tdi)",
  "2.5L Turbo Diesel (pre-200Tdi turbocharged four)",
  "2.5L 200Tdi direct-injection intercooled turbodiesel, ~107 hp / 195 lb-ft (from 1990)",
  "2.5L 300Tdi direct-injection intercooled turbodiesel, ~111 hp / 195 lb-ft (from 1994)",
  "2.5L Td5 five-cylinder electronically controlled turbodiesel, ~122 hp (from 1998)",
  "2.4L TDCi 'Puma' four-cylinder turbodiesel, ~122 hp / 265 lb-ft, six-speed (from 2007)",
  "2.2L TDCi four-cylinder turbodiesel, same rated output as the 2.4 (from the 2012 model year)",
  "3.5L / 3.9L / 4.0L Rover V8 petrol (Euro-market V8s; 3.9L EFI and 4.0L GEMS in NAS-spec US trucks)"
 ],
 "productionTotal": null,
 "productionNotes": "No single audited total exists for the coil-sprung Defender alone. Land Rover's own end-of-production release states that more than two million Series Land Rovers and Defenders were built at Solihull from 1948 onward; a figure of 2,016,933 is widely quoted for that same 1948-2016 combined run. Both numbers include the leaf-sprung Series I/II/III and therefore overstate Defender-only output substantially. Land Rover ended Solihull production of the classic Defender on 29 January 2016 with a Defender 90 Heritage Soft Top. Separately, a milestone vehicle presented as 'Defender 2,000,000' was built in 2015 and sold at charity auction for a reported GBP 400,000. North American figures are much better documented but still inconsistent between sources: roughly 500-525 NAS Defender 110s for 1993, and something on the order of 6,500 NAS Defender 90s across 1994, 1995 and 1997 (no 1996 model year was offered).",
 "notableTrims": [
  {
   "name": "One Ten / Ninety (1983-1990)",
   "note": "Pre-Defender coil-sprung trucks. The One Ten arrived in 1983, the Ninety in 1984. Mechanically the same recipe as the Defender that followed, and now the earliest and easiest coil-sprung Land Rovers to import into the US."
  },
  {
   "name": "Defender 90",
   "note": "92.9-inch wheelbase short-wheelbase truck. The most desirable body length in the US market, especially as a soft top."
  },
  {
   "name": "Defender 110",
   "note": "110-inch wheelbase. Better ride and towing manners than the 90, far more load space, and the body length used for the 1993 US launch trucks."
  },
  {
   "name": "Defender 130",
   "note": "Despite the badge, a 127-inch wheelbase. Crew-cab and high-capacity load bodies; a working vehicle rather than a collector one."
  },
  {
   "name": "NAS Defender 110 (1993 only)",
   "note": "US/Canada federalised 110 Station Wagon with the 3.9-litre EFI V8 and five-speed manual, sold as a halo model ahead of the D90. Roughly 500-525 for North America; the rarest official US Defender."
  },
  {
   "name": "NAS Defender 90 (1994, 1995, 1997)",
   "note": "V8-only US-spec 90. 3.9-litre EFI V8 for 1994-95; 4.0-litre GEMS V8 for 1997, when an automatic became available. Soft tops from 1994, Station Wagons added for 1995."
  },
  {
   "name": "Td5 Defender (1998-2006)",
   "note": "Five-cylinder electronic diesel; the most usable everyday classic Defender, and the generation now entering US import eligibility on a rolling basis."
  },
  {
   "name": "Puma Defender (2007-2016)",
   "note": "Ford-derived 2.4 then 2.2 TDCi, six-speed gearbox and a redesigned dashboard. Not legally importable into the US until 2032 at the earliest."
  }
 ],
 "specs": {
  "layout": "Front engine, permanent four-wheel drive, two-speed transfer case, live axles front and rear on coil springs",
  "construction": "Steel ladder-frame chassis with aluminium alloy body panels over steel frames and a steel bulkhead",
  "wheelbase_90": "92.9 in (2,360 mm)",
  "wheelbase_110": "110 in (2,794 mm)",
  "wheelbase_130": "127 in (3,226 mm), despite the 130 badge",
  "power_200tdi": "~107 hp (80 kW), 195 lb-ft",
  "power_300tdi": "~111 hp (83 kW), 195 lb-ft",
  "power_td5": "~122 hp (91 kW)",
  "power_24_tdci": "~122 hp (91 kW), 265 lb-ft, six-speed manual",
  "power_nas_110": "3.9L EFI Rover V8, ~180 hp / 227 lb-ft, five-speed manual",
  "power_nas_90": "3.9L EFI V8 ~182 bhp / 232 lb-ft (1994-95); 4.0L GEMS EFI V8 (1997)",
  "factory_corrosion_protection": "Painted/primed steel chassis; factory chassis were not hot-dip galvanised",
  "us_import_status": "Exempt from FMVSS at 25 years from date of manufacture; EPA exemption at 21 years in original configuration"
 },
 "summary": "The coil-sprung Land Rover replaced the leaf-sprung Series III in stages, arriving as the One Ten in 1983 and the Ninety in 1984, and taking the Defender name in 1990 once Discovery and Range Rover needed distinguishing from it. Underneath it stayed deliberately archaic: a steel ladder chassis, live axles, a two-speed transfer case and riveted aluminium panels over a steel bulkhead. Engines moved from 2.25/2.5-litre fours through the 200Tdi and 300Tdi, the five-cylinder Td5 and finally Ford-derived 2.4 and 2.2 TDCi units, while the Rover V8 served petrol markets and every US-market truck. Land Rover sold the Defender in North America only briefly, as the 1993 NAS 110 and the 1994/1995/1997 NAS 90, before US occupant-protection rules closed the door. Solihull built the last one on 29 January 2016. In the US the model is now defined as much by import law as by engineering.",
 "history": "## From Series III to Coil Springs\nThe vehicle collectors call the Defender began as a running modernisation of the Series III rather than a clean-sheet design. Land Rover introduced the coil-sprung One Ten in 1983 and followed it with the short-wheelbase Ninety in 1984, replacing leaf springs with long-travel coils and adding a permanent four-wheel-drive transfer case borrowed in concept from the Range Rover. A 127-inch-wheelbase load-carrier joined the range for crew-cab and high-capacity work. The architecture underneath - a steel ladder chassis, beam axles, a steel bulkhead and riveted aluminium alloy body panels - was retained essentially unchanged for the next three decades, which is why a 2015 truck and a 1985 truck share so many part numbers.\n\n## The Defender Name and the Diesel Years\nThe name arrived in 1990. With the Discovery launched and the Range Rover established, Land Rover needed a label for the utility model, and Ninety/One Ten/127 became Defender 90, 110 and 130. The 130 badge was marketing rather than measurement: its wheelbase is 127 inches. The same year brought the 200Tdi, a direct-injection intercooled 2.5-litre turbodiesel of roughly 107 hp that transformed the truck's usability. The 300Tdi replaced it in 1994 with about 111 hp and better refinement, the electronically managed five-cylinder Td5 arrived in 1998 with around 122 hp, and in 2007 a Ford-derived 2.4-litre TDCi and six-speed gearbox brought a redesigned dashboard and the deletion of the inward-facing rear seats. A 2.2-litre TDCi took over for the 2012 model year to meet tightening emissions rules.\n\n## The North American Chapter\nLand Rover federalised the Defender for North America only briefly. For 1993 it brought over a run of NAS Defender 110 Station Wagons with the 3.9-litre EFI V8 and a five-speed manual, explicitly as an image vehicle to open the door for the Defender 90 and the Discovery; roughly 500 to 525 went to the US and Canada combined. The NAS Defender 90 followed for 1994 and 1995 with the same 3.9-litre V8, initially as a soft top and then with a Station Wagon body, and returned for 1997 with the 4.0-litre GEMS V8 and an automatic option. No 1996 model year was offered, and 1997 was the last. The reason was regulatory rather than commercial: tightening US occupant-protection requirements - dual front airbags and full lap/shoulder belts across the passenger compartment - could not be met by a body-on-frame design conceived in the 1940s without an investment the volumes never justified. Land Rover withdrew rather than re-engineer.\n\n## The Long Goodbye and the Import Question\nEuropean pedestrian-impact and emissions legislation eventually did to the Defender in its home market what US rules had done in 1997. Solihull built the last classic Defender, a 90 Heritage Soft Top, on 29 January 2016, closing a Series-and-Defender production run that Land Rover puts at more than two million vehicles since 1948. In the United States the consequence has been a market shaped by import law rather than by original sales: a small, well-documented pool of legitimate NAS trucks, a large and growing pool of rest-of-world Defenders becoming legally importable as each production month passes its 25th birthday, and a persistent enforcement problem around vehicles that were brought in before their time.",
 "marketNotes": "As of August 2026, Classic.com shows a market benchmark of about $78,700 for the NAS Defender 90 across a sales window running from March 2025 to August 2026, with recent results spread from roughly $23,750 for a compromised truck to $139,998 for a 1995 example sold in California in April 2026, and around 45 cars listed. The wider Defender 90 'Classic' market (1990-2006, which mixes NAS trucks with imported rest-of-world cars) benchmarks lower, at roughly $53,300, with live listings running from about $19,000 to about $125,000. Classic.com's all-Defender page shows an average sale near $53,400, but that figure is diluted by the modern L663, which accounts for the majority of current listings and is a different vehicle. Hagerty's overview of the 90/110 reports an auction range of about $20,350 to $125,500 and a #2-condition median near $28,300 for a 1990 truck, notes that values peaked between late 2010 and early 2015 and have been relatively flat since, and ranks V8 cars above four-cylinder petrol and diesel, 90s above 110s, and soft tops above pick-ups. The premium structure is consistent across sources: NAS provenance, V8 power, short wheelbase, soft top, manual gearbox, low mileage and unambiguous paperwork. Restomods from US converters trade on their own terms and are not comparable to original trucks.",
 "whatToLookFor": "Start with identity, not condition. For a US buyer this is the single highest-risk purchase in the classic 4x4 market. Confirm the vehicle is legally in the country: either an original NAS truck with a US-issued VIN and a documented delivery history, or an import whose date of manufacture is at least 25 years before the date it was entered, supported by the actual DOT and EPA entry paperwork rather than a title alone. A clean state title is not proof of lawful importation - state DMVs do not adjudicate federal import compliance, and vehicles have been seized years after being titled and insured. Check chassis and engine VIN stampings physically against the paperwork and look for grinding, re-stamping, filler or mismatched fonts; federal cases have turned on exactly this. Treat any truck presented as a '1983' or other conveniently old model year with visibly later features - Tdi or Td5 engine, later dashboard, later door handles, one-piece front door tops - as a documentation problem until proven otherwise.\n\nThen inspect structure. Factory Defender chassis were painted, not hot-dip galvanised, so corrosion is a question of maintenance history rather than luck: probe the rear crossmember, the outriggers, the spring and axle mounts and the inside of the main rails. The steel bulkhead is the expensive one - check the footwells, the windscreen frame corners and the fresh-air vent apertures, because a rotten bulkhead is a full strip-down to replace. Aluminium panels do not rust but corrode galvanically where they meet steel frames and fasteners, so look at door bottoms, door frames and the rear body cappings.\n\nFinally, understand what you are buying. A truck on a new galvanised replacement chassis and a new bulkhead is a legitimate and often superior thing, but it is a rebuild, not an original, and it should be priced and described as one. A 'rebodied' truck - a later vehicle wearing an older identity - is something else entirely, and is the failure mode that has produced federal seizures. Ask for the invoices.",
 "commonProblems": "Corrosion is the dominant issue and it is structural, not cosmetic: rear crossmember first, then outriggers, engine support rails, rear spring mounts and axle supports, then whole chassis sections. The steel bulkhead corrodes around the windscreen, the fresh-air vents and the footwells and is expensive to correct. Door pillars, door bottoms and the steel body frames behind the aluminium skins also suffer.\n\nBy engine: the 200Tdi (1990-1994) is durable but can fail its head gasket between cylinder four and the pushrod tubes, and suffers injector, Bosch VE pump and fuel return pipe faults; timing belt service is a hard 60,000-mile or five-year item. The 300Tdi (1994-1998) is smoother but more prone to coolant leaks and overheating that warps or cracks heads around the heater plugs and injectors, plus manifold gasket failure; the same timing belt discipline applies. The Td5 (1998-2007) is chain-driven and quick but leaks at the injector harness seals - causing hard starting - and can suffer injector pump failure, head cracking from high fuel pressures and costly dual-mass flywheel replacement. The 2.4 TDCi (2007-2010) can be long-lived but has injector and fuel pressure sensor issues and is less DIY-friendly; early cars could foul the front propshaft against the sump under full articulation, which Land Rover addressed with a recessed sump. The Rover V8 in NAS trucks is straightforward but thirsty, and cylinder liner and head gasket issues are known on the later 4.0-litre blocks.\n\nBeyond that, expect leaks, wind noise, worn swivel housings and bearings, tired steering boxes and drivetrain slack. Parts supply is excellent; specialist labour is not evenly distributed.",
 "valueTrajectory": "Defender values rose sharply through the 2010s, peaking on Hagerty's data between late 2010 and early 2015 and running relatively flat since, with V8 and short-wheelbase soft-top cars holding the top of the range. The US market has a structural feature no other classic 4x4 shares: legal supply expands every month. Because the FMVSS exemption runs 25 years from the date of manufacture and the EPA exemption runs 21 years from the year of manufacture, the 25-year rule is the binding constraint, and it advances continuously. As of August 2026 that means Defenders built up to roughly mid-2001 - which now includes early Td5 trucks - have become importable, while Puma-era vehicles remain years away. Each year of newly eligible supply puts downward pressure on the rest-of-world import segment while doing little to the finite NAS pool, which is why the NAS Defender 90 benchmark on Classic.com sits roughly 50 percent above the broader Defender 90 Classic benchmark as of August 2026. The reasonable expectation is continued separation: documented NAS trucks and properly imported, properly documented rest-of-world trucks behaving as scarce assets, and everything with a questionable paper trail carrying a discount that reflects real seizure risk rather than sentiment.",
 "overallConfidence": "medium-high",
 "sources": [
  {
   "ref": "lr-media-2016",
   "title": "Celebrating The Legend - Last of the Current Land Rover Defenders is Built in Solihull",
   "url": "https://media.landrover.com/news/2016/01/celebrating-legend-last-current-land-rover-defenders-built-solihull",
   "publisher": "Land Rover Media Newsroom / Jaguar Land Rover",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Manufacturer release: last Defender built 29 January 2016, a Defender 90 Heritage Soft Top; more than two million Series and Defender models built at Solihull since 1948; 'Defender 2,000,000' charity sale at GBP 400,000."
  },
  {
   "ref": "wikipedia-l316",
   "title": "Land Rover Defender (L316)",
   "url": "https://en.wikipedia.org/wiki/Land_Rover_Defender_(L316)",
   "publisher": "Wikipedia",
   "sourceType": "reference",
   "reliability": "medium",
   "notes": "Wheelbases (90: 92.9 in; 110: 110 in; 130: 127 in), engine timeline with dates and outputs, 1990 renaming, 2007 Puma facelift, end of production 29 January 2016, 2,016,933 combined Series+Defender figure."
  },
  {
   "ref": "wikipedia-defender",
   "title": "Land Rover Defender",
   "url": "https://en.wikipedia.org/wiki/Land_Rover_Defender",
   "publisher": "Wikipedia",
   "sourceType": "reference",
   "reliability": "medium",
   "notes": "One Ten introduced 1983, Ninety 1984; Defender name from 1990; steel ladder chassis with aluminium alloy bodywork; NAS 1993 figure given as 500 US plus 25 Canada."
  },
  {
   "ref": "hagerty-90-110",
   "title": "The SUV market caught up, but the Land Rover 90 and 110 blazed the trail",
   "url": "https://www.hagerty.com/media/market-trends/valuation/svu-market-caught-up-land-rover-90-and-110-blazed-the-trail/",
   "publisher": "Hagerty",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Valuation overview: auction range $20,350-$125,500, #2-condition median ~$28,300 for a 1990, peak late 2010-early 2015 then flat, V8 > petrol four > diesel, 90 > 110, soft top > pick-up; US sales 1993-97 ended by airbag law."
  },
  {
   "ref": "classic-d90-nas",
   "title": "Land Rover Defender 90 NAS - Classic Market",
   "url": "https://www.classic.com/m/land-rover/defender/classic/90/nas/",
   "publisher": "classic.com",
   "sourceType": "marketplace-data",
   "reliability": "high",
   "notes": "Retrieved August 2026: benchmark ~$78,663; high $139,998 (1995, California, April 2026); low $23,750 (1995, March 2025); 45 listings; production years given as 1993-1997."
  },
  {
   "ref": "classic-d90-classic",
   "title": "Land Rover Defender 90 - Classic Market",
   "url": "https://www.classic.com/m/land-rover/defender/classic/90/",
   "publisher": "classic.com",
   "sourceType": "marketplace-data",
   "reliability": "high",
   "notes": "Retrieved August 2026: benchmark ~$53,339; live listings roughly $19,000-$124,998; 94 listings; covers 1990-2006 and mixes NAS with imported trucks."
  },
  {
   "ref": "classic-defender",
   "title": "Land Rover Defender Market",
   "url": "https://www.classic.com/m/land-rover/defender/",
   "publisher": "classic.com",
   "sourceType": "marketplace-data",
   "reliability": "high",
   "notes": "Retrieved August 2026: all-Defender average sale ~$53,448 across 720 listings, but heavily diluted by the modern L663, which represents the majority of live listings."
  },
  {
   "ref": "ecr-d110",
   "title": "Defender 110 (NAS)",
   "url": "https://eastcoastrover.com/INFOD110.html",
   "publisher": "East Coast Rover",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Long-established US Land Rover specialist. States 509 NAS 110s to the US plus 25 to Canada, 3.9 EFI V8 at 180 hp / 227 lb-ft with five-speed manual, $39,900 list, sold as an image car to launch the D90 and Discovery."
  },
  {
   "ref": "ecr-d90",
   "title": "Defender 90s (NAS)",
   "url": "https://eastcoastrover.com/INFOD90.html",
   "publisher": "East Coast Rover",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Year-by-year NAS D90 counts: 1994 2,030 soft tops (US/Canada); 1995 1,190 soft top plus 510 station wagon; 1997 1,499 soft top plus 1,300 station wagon; no 1996 model year; 3.9 V8 182 bhp for 1994-95, 4.0 GEMS V8 for 1997."
  },
  {
   "ref": "bishoprook",
   "title": "The Basic Intro to the Land Rover Defender",
   "url": "https://www.bishoprook.com/basics/",
   "publisher": "Bishop+Rook",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "US Defender specialist. Gives roughly 500 NAS 110s for 1993 and roughly 6,500 NAS 90s for 1994-1997, and attributes the end of US sales to tariffs on imported parts plus tightening EPA and DOT standards at the end of 1997."
  },
  {
   "ref": "classicsworld-guide",
   "title": "Land Rover Defender buyer's guide",
   "url": "https://classicsworld.co.uk/guides/land-rover-defender-buyers-guide/",
   "publisher": "Classics World",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Engine-by-engine fault list (200Tdi head gasket at cylinder four, 300Tdi overheating and cracked heads, Td5 injector seals and dual-mass flywheel, 2.4 TDCi injectors and propshaft-to-sump clearance) plus bulkhead and chassis corrosion detail."
  },
  {
   "ref": "rustbuster-chassis",
   "title": "Land Rover Defender Rustproofing & Chassis Protection",
   "url": "https://www.rust.co.uk/land-rover-defender-rustproofing-chassis-protection/",
   "publisher": "Rustbuster",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "States that original production Defender chassis were not hot-dip galvanised from the factory and left Solihull with primer and black chassis paint; identifies chassis rails, rear crossmember, bulkhead and outriggers as the first failure points."
  },
  {
   "ref": "usc-30112",
   "title": "49 U.S. Code § 30112 - Prohibitions on manufacturing, selling, and importing noncomplying motor vehicles and equipment",
   "url": "https://www.law.cornell.edu/uscode/text/49/30112",
   "publisher": "Cornell Law School, Legal Information Institute",
   "sourceType": "primary-legal",
   "reliability": "high",
   "notes": "Statutory basis of the 25-year rule: subsection (b)(9) exempts 'a motor vehicle that is at least 25 years old' from the FMVSS compliance requirement."
  },
  {
   "ref": "epa-3520-1",
   "title": "EPA Form 3520-1: Importation of Motor Vehicles and Motor Vehicle Engines Subject to Federal Air Pollution Regulations",
   "url": "https://19january2017snapshot.epa.gov/sites/production/files/2015-04/documents/3520-1.pdf",
   "publisher": "US Environmental Protection Agency",
   "sourceType": "primary-legal",
   "reliability": "high",
   "notes": "Exemption code E: a vehicle at least 21 years old (calendar year of manufacture subtracted from year of importation) and in original unmodified configuration is exempted or excluded from EPA emission requirements."
  },
  {
   "ref": "jalopnik-2014-seizure",
   "title": "The Feds Just Seized 40 Land Rovers Imported To The U.S.",
   "url": "https://www.jalopnik.com/the-feds-just-seized-40-land-rovers-imported-to-the-u-s-1605985758/",
   "publisher": "Jalopnik",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "July 2014: ICE Homeland Security Investigations seized roughly 40 Defenders against a warrant listing 61 VINs, across New York, North Carolina, Florida and elsewhere; allegations of filed and re-stamped engine-block VINs and falsified importer paperwork misrepresenting model years."
  },
  {
   "ref": "jalopnik-2015-feds",
   "title": "Why Are The Feds Obsessed With Seizing These People's Old Trucks?",
   "url": "https://www.jalopnik.com/why-are-the-feds-obsessed-with-seizing-these-peoples-ol-1672381729/",
   "publisher": "Jalopnik",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Follow-up: roughly 40 seized across North Carolina, Washington and Alabama, six later returned; prosecutors alleged about 20 percent of 369 reviewed Land Rovers had removed, obliterated or altered VINs, with newer trucks carrying older VINs; owners bore the burden under civil forfeiture."
  },
  {
   "ref": "motorauthority-crush",
   "title": "U.S. Customs Crush Illegally-Imported Land Rover Defender",
   "url": "https://www.motorauthority.com/news/1086521_u-s-customs-crush-illegally-imported-land-rover-defender-video",
   "publisher": "Motor Authority",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "CBP seized and destroyed a Defender at the port of Baltimore; describes the scheme of buying later UK-market Defenders, modifying them to resemble older trucks and swapping in VINs from older vehicles, driven by the US-UK price gap."
  },
  {
   "ref": "ecd-why-rare",
   "title": "Why Vintage Defenders Are Rare in the United States",
   "url": "https://ecdautodesign.com/blog/why-vintage-defender-rare-usa/",
   "publisher": "ECD Automotive Design",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "US Defender converter. Attributes the end of US Defender sales to NHTSA occupant-protection requirements for lap/shoulder belts for all passengers and driver plus passenger front airbags, which the classic Defender did not meet, and describes the 25-year exemption as rolling."
  }
 ],
 "claims": [
  {
   "section": "history",
   "claimText": "The coil-sprung Land Rover was introduced as the One Ten in 1983, joined by the Ninety in 1984, and the range was renamed Defender 90/110/130 in 1990 after the Discovery arrived.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-defender",
    "wikipedia-l316"
   ]
  },
  {
   "section": "specs",
   "claimText": "Wheelbases are 92.9 in (90), 110 in (110) and 127 in for the 130 despite its badge; diesel output progressed from the 200Tdi (1990, ~107 hp) to the 300Tdi (1994, ~111 hp), the five-cylinder Td5 (1998, ~122 hp), the 2.4 TDCi Puma (2007, ~122 hp / 265 lb-ft with a six-speed gearbox) and the 2.2 TDCi from the 2012 model year.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-l316",
    "classicsworld-guide"
   ]
  },
  {
   "section": "production",
   "claimText": "Land Rover ended production of the classic Defender at Solihull on 29 January 2016 with a Defender 90 Heritage Soft Top, after a combined Series and Defender run that the company describes as more than two million vehicles since 1948.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "lr-media-2016",
    "wikipedia-l316"
   ]
  },
  {
   "section": "production",
   "claimText": "No reliable production total exists for the coil-sprung Defender alone; the widely quoted 2,016,933 figure covers Series and Defender models together from 1948 to 2016.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "lr-media-2016",
    "wikipedia-l316"
   ],
   "conflictNote": "Land Rover's own release says only 'more than two million' Series and Defender models; Wikipedia cites a precise 2,016,933 for the same combined run. Neither isolates coil-sprung Defender output, so no Defender-only total is asserted here."
  },
  {
   "section": "production",
   "claimText": "Land Rover sold the NAS Defender 110 in North America for the 1993 model year only, with the 3.9-litre EFI V8 and a five-speed manual, in a run of roughly 500 to 525 vehicles for the US and Canada combined.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "wikipedia-defender",
    "ecr-d110",
    "bishoprook"
   ],
   "conflictNote": "Wikipedia states 500 to the US plus 25 to Canada (525 total). East Coast Rover states 509 to the US plus 25 to Canada (534 total, described as 'just over 525'). Bishop+Rook says 'roughly 500'. The range 500-525 is the defensible statement."
  },
  {
   "section": "production",
   "claimText": "The NAS Defender 90 was sold for 1994, 1995 and 1997 with no 1996 model year, using the 3.9-litre EFI V8 for 1994-95 and the 4.0-litre GEMS V8 for 1997, for a total on the order of 6,500 vehicles.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "ecr-d90",
    "bishoprook"
   ],
   "conflictNote": "East Coast Rover's year-by-year figures (1994: 2,030; 1995: 1,700; 1997: 2,799) sum to about 6,529, consistent with Bishop+Rook's 'roughly 6,500' overall. However Bishop+Rook separately states that 1997 saw '700 Defenders or less' built for the US, which cannot be reconciled with East Coast Rover's 2,799 for the same year. The aggregate figure is treated as sound; the 1997 split is not."
  },
  {
   "section": "history",
   "claimText": "Official US Defender sales ended after 1997 because tightening federal occupant-protection requirements - dual front airbags and lap/shoulder belts for all passengers - could not be met by the Defender's existing structure.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "hagerty-90-110",
    "ecd-why-rare",
    "bishoprook"
   ],
   "conflictNote": "Hagerty and ECD both point to airbag/occupant-protection rules as the cause. Bishop+Rook adds tariffs on imported parts alongside EPA and DOT standards. The safety-regulation explanation is consistent across sources; the tariff element is single-sourced and is not asserted."
  },
  {
   "section": "history",
   "claimText": "Federal law exempts a motor vehicle at least 25 years old from FMVSS compliance while the EPA separately exempts vehicles at least 21 years old in original unmodified configuration, so the 25-year threshold is the binding constraint on importing a Defender; because it runs from date of manufacture rather than model year, eligibility advances on a rolling basis, and as of August 2026 trucks built up to roughly mid-2001 (including early Td5 examples) have passed it.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "usc-30112",
    "epa-3520-1",
    "ecd-why-rare"
   ]
  },
  {
   "section": "problems",
   "claimText": "Federal agencies have seized illegally imported Defenders in the US: in July 2014 ICE Homeland Security Investigations seized roughly 40 vehicles against a warrant listing 61 VINs, prosecutors alleged that about 20 percent of 369 Land Rovers reviewed had removed, obliterated, tampered-with or altered VINs with newer trucks carrying VINs taken from older vehicles, and CBP has seized and destroyed at least one Defender at the port of Baltimore in a scheme of buying later UK-market trucks, disguising them as older vehicles and swapping in older VINs.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "jalopnik-2014-seizure",
    "jalopnik-2015-feds",
    "motorauthority-crush"
   ]
  },
  {
   "section": "problems",
   "claimText": "Original production Defender chassis were not hot-dip galvanised from the factory but left Solihull with primer and black chassis paint, so a galvanised chassis on a Defender indicates a replacement frame rather than original specification.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "rustbuster-chassis"
   ]
  },
  {
   "section": "problems",
   "claimText": "The most expensive corrosion points are the steel bulkhead - around the windscreen frame, fresh-air vents and footwells - followed by the rear crossmember, outriggers, engine support rails and rear spring and axle mounts.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classicsworld-guide",
    "rustbuster-chassis"
   ]
  },
  {
   "section": "problems",
   "claimText": "Engine-specific faults include 200Tdi head gasket failure between cylinder four and the pushrod tubes, 300Tdi overheating and cracked or warped heads, Td5 injector harness seal leaks and dual-mass flywheel wear, and 2.4 TDCi injector and fuel pressure sensor faults.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classicsworld-guide"
   ]
  },
  {
   "section": "market",
   "claimText": "As of August 2026, Classic.com shows a market benchmark of approximately $78,663 for the NAS Defender 90, with recent sales ranging from about $23,750 to $139,998, against a benchmark of approximately $53,339 for the broader 1990-2006 Defender 90 Classic market.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-d90-nas",
    "classic-d90-classic",
    "classic-defender"
   ]
  },
  {
   "section": "market",
   "claimText": "Hagerty reports an auction range of roughly $20,350 to $125,500 for the 90/110, a #2-condition median near $28,300 for a 1990 truck, a value peak between late 2010 and early 2015 followed by relatively flat trading, and a premium structure favouring V8 over four-cylinder, 90 over 110 and soft top over pick-up.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "hagerty-90-110"
   ]
  }
 ]
};
