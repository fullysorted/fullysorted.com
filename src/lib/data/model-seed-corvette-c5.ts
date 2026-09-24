/**
 * Researched model draft - Chevrolet Corvette C5, coupe, convertible, hardtop (FRC) and Z06 (US 1997-2004 model years).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedCorvetteC5 = {
 "slug": "chevrolet/corvette-c5",
 "make": "Chevrolet",
 "model": "Corvette",
 "generation": "C5",
 "generationCode": "C5",
 "trim": "Coupe, Convertible, Hardtop (FRC) and Z06 (1997-2004 model years)",
 "yearStart": 1997,
 "yearEnd": 2004,
 "bodyStyles": [
  "2-door hatchback coupe with removable roof panel, painted or tinted (1997-2004)",
  "2-door convertible with a trunk lid, the first on a Corvette convertible since 1962 (1998-2004)",
  "2-door fixed-roof hardtop coupe, notchback with a trunk (FRC, 1999-2000; the only body for the Z06, 2001-2004)"
 ],
 "engines": [
  "5.7-liter (346 cu in) LS1 all-aluminum pushrod V8, naturally aspirated, 345 hp at 5,600 rpm and 350 lb-ft at 4,400 rpm (1997-2000)",
  "5.7-liter LS1 V8, 350 hp; Vette Vues gives 375 lb-ft (2001-2004)",
  "5.7-liter LS6 V8, Z06 only, 385 hp at 6,000 rpm and 385 lb-ft at 4,800 rpm (2001)",
  "5.7-liter LS6 V8, Z06 only, 405 hp at 6,000 rpm and 400 lb-ft at 4,800 rpm, with sodium-filled valves, stiffer valve springs and no pre-catalytic converters (2002-2004)"
 ],
 "productionTotal": 248715,
 "productionNotes": "Three independently fetched sources give the same C5 total, 248,715 cars built at Bowling Green, Kentucky, and the same year-by-year split: Corvette Central's tech blog, Vette Vues Magazine and the Wikipedia table. All three are secondary; no Chevrolet or National Corvette Museum page was fetched, and the agreement may reflect a common upstream source such as the Corvette Black Book, which Corvette Central sells and refers readers to. By year: 1997, 9,752 (coupe only); 1998, 31,084; 1999, 33,270; 2000, 33,682; 2001, 35,627; 2002, 35,767; 2003, 35,469; 2004, 34,064. CorvSport confirms the 1997 figure and adds that 1997 VINs run from 100001 to 109707 because prototype and pilot cars took serial numbers. The hardtop column is the variant story: 4,031 FRCs for 1999 and 2,090 for 2000, 6,121 in all, then 5,773, 8,297, 8,635 and 5,683 Z06s for 2001-2004. Those four add to 28,388, the Z06 total classic.com prints. The 2004 Le Mans Commemorative Z06 (RPO Z16) totals 2,025 per both Wikipedia and classic.com; Wikipedia alone says 325 went overseas. US list prices disagree: Wikipedia and CorvSport give $37,495 for the 1997 coupe, while Vette Vues prints $38,060, and the two lists differ every year through 2004 ($46,535 against $44,535). The 2001 Z06 is $47,500 to start per MotorWeek and $48,055 per Vettes of Atlanta; the Auto Channel estimated $50,000. None of these gaps is explained by a fetched source. No count was found for the 1998 Indy Pace Car replica or the 2003 50th Anniversary Edition.",
 "notableTrims": [
  {
   "name": "1997 coupe",
   "note": "First year, coupe only, 9,752 built, on sale March 7, 1997 at $37,495 with the automatic; the six-speed was an $815 option. Torch Red was the most common color at 3,026 cars and Fairway Green Metallic the rarest at 155."
  },
  {
   "name": "1998 convertible and Indy 500 Pace Car replica",
   "note": "The convertible arrived for 1998 with a proper trunk lid, the first on a Corvette convertible since 1962. The Pace Car replica (RPO Z45) wore Radial Yellow and Pace Purple; no fetched source gives a production count."
  },
  {
   "name": "1999-2000 hardtop (FRC)",
   "note": "Offered as the cheaper base body with a fixed roof and notchback trunk: 4,031 built for 1999 and 2,090 for 2000, 6,121 in all, the smallest C5 body by volume. It became the Z06 for 2001."
  },
  {
   "name": "2001 Z06 (385 hp)",
   "note": "LS6, FE4 suspension, titanium muffler, thinner glass and a six-speed manual. MotorWeek tested it at 4.5 seconds to 60 mph for $47,500 to start; 5,773 hardtops built that year."
  },
  {
   "name": "2002-2004 Z06 (405 hp)",
   "note": "Output rose to 405 hp and 400 lb-ft with a revised cam, sodium-filled valves and stiffer valve springs. Wikipedia alone flags spring failures on late 2002 to mid 2003 cars, so the spring history is the paperwork to ask for."
  },
  {
   "name": "2003 50th Anniversary Edition",
   "note": "Coupe and convertible in Anniversary Red Metallic with shale leather, Warm Nickel painted wheels and the new F55 Magnetic Selective Ride Control. classic.com benchmarks it at $26,280 as of September 2026."
  },
  {
   "name": "2004 Le Mans Commemorative Edition (Z15 and Z16)",
   "note": "Le Mans Blue across all three bodies; the Z06 version (Z16) added a carbon fiber hood, polished wheels and stripes. 2,025 Z16 cars built, the majority of 2004 Z06 production. Recent low-mile results cluster between $35,890 and $40,000 as of September 2026."
  }
 ],
 "specs": {
  "layout": "Front-mid-engine V8, rear-wheel drive, rear-mounted transaxle joined to the engine by a torque tube; two seats",
  "chassis": "Hydroformed steel perimeter frame rails with a central tunnel backbone; composite floor panels sandwiching balsa wood",
  "body_construction": "Sheet molded composite (fiberglass) body panels; pop-up headlights, the last generation of Corvette to use them",
  "engine": "5.7-liter (346 cu in) LS1 aluminum pushrod V8 in coupe, convertible and FRC; 5.7-liter LS6 V8 in the Z06 only",
  "power": "345 hp (LS1, 1997-2000); 350 hp (LS1, 2001-2004); 385 hp (LS6, 2001); 405 hp (LS6, 2002-2004)",
  "torque": "350 lb-ft (LS1, 1997-2000); 375 lb-ft (LS1, 2001-2004, per Vette Vues only); 385 lb-ft (LS6, 2001); 400 lb-ft (LS6, 2002-2004)",
  "transmission": "Four-speed 4L60-E automatic standard on coupe and convertible; Borg-Warner T-56 six-speed manual optional ($815 in 1997); Z06 six-speed manual only per MotorWeek and Wikipedia, although the Auto Channel's 2001 review says an automatic was available",
  "weight": "Coupe 3,245 lb and convertible 3,247 lb (Wikipedia and Vette Vues); hardtop 3,172 lb (Wikipedia) against 3,118 lb for 'FRC / Z06' (Vette Vues); Z06 3,118 lb (Wikipedia)",
  "acceleration": "0-60 mph: 4.7 sec for a 1997 manual coupe (CorvSport); 4.5 sec for a 2001 Z06 (MotorWeek test); 4.0 sec on track per the Auto Channel's 2001 Z06 review; 3.9 sec for a 405-hp Z06 (Vette Vues, Wikipedia)",
  "quarter_mile": "13.0 sec at 113 mph (2001 Z06, MotorWeek); 11.9 sec (405-hp Z06, GM High-Tech Performance via Wikipedia)",
  "top_speed": "172 mph (1997 coupe, CorvSport); 168 mph (2001 Z06, MotorWeek); 171 mph recorded for a Z06 (Wikipedia)",
  "braking_60_0": "125 ft (1997 coupe, CorvSport); 104 ft (2001 Z06, MotorWeek)",
  "epa_fuel_economy": "MotorWeek printed 19 mpg city and 28 highway for the 2001 Z06, and Wikipedia gives 19/28 for a manual and 18/25 for an automatic C5; fueleconomy.gov now lists a 2002 5.7-liter at 17/26 manual and 16/23 automatic",
  "dimensions": "Wheelbase 104.5 in (2,654 mm); length 179.7 in (4,564 mm); width 73.6 in (1,869 mm); height 47.7 in, convertible 47.8 in",
  "suspension": "Double wishbones with transverse composite leaf springs; FE1 standard, FE3 with the Z51 package, F45 Selective Real-Time Damping to 2002, F55 Magnetic Selective Ride Control from 2003, FE4 on every Z06",
  "wheels_and_tires": "Run-flat tires and no spare on coupe and convertible; Z06 17 x 9.5 in front and 18 x 10.5 in rear with 265/40 and 295/35 Goodyear Eagle F1 SC tires",
  "us_msrp": "1997 coupe $37,495 (Wikipedia, CorvSport) or $38,060 (Vette Vues); 2004 $46,535 (Wikipedia) or $44,535 (Vette Vues); 2001 Z06 $47,500 (MotorWeek) or $48,055 (Vettes of Atlanta); see productionNotes"
 },
 "summary": "The C5 is the Corvette that was redrawn from a clean sheet, sold in the United States for the 1997 through 2004 model years and built at Bowling Green, Kentucky. It put the gearbox at the back in a transaxle joined to the engine by a torque tube, carried the body on hydroformed frame rails with a balsa-cored composite floor, and introduced the aluminum LS1 V8 at 345 hp, raised to 350 hp for 2001. A convertible with a real trunk lid followed for 1998 and a fixed-roof hardtop for 1999, sold at first as the cheapest Corvette and then, from 2001, as the Z06 with the LS6 engine at 385 hp and, from 2002, 405 hp. Sources agree on 248,715 built, 28,388 of them Z06s. The steering column lock that can strand or endanger a driver, the harmonic balancer, the brake control module and the Z06 valve springs are the known faults, and all of them are documented. As of September 2026 classic.com averages the C5 at $26,426 and the Z06 at $30,308; a Z06 ran 168 mph in MotorWeek's 2001 test.",
 "history": "## Why Chevrolet started over\n\nThe fifth Corvette was meant to arrive in 1993 for the car's 40th anniversary. Wikipedia records that financial trouble at GM and changes in staff pushed it back four years. When it came, chief engineer Dave Hill and exterior designer John Cafaro had been given a clean sheet, and almost nothing carried over from the C4: engine, gearbox, frame and body were all new. The goals, in the words of interior designer Jon Albert, were improved performance, reduced mass and increased reliability, balanced across the whole car. The C5 was unveiled at the Detroit auto show on January 6, 1997, and went on sale on March 7.\n\n## 1997: the LS1, the transaxle and a balsa floor\n\nThe new small-block, the LS1, kept the 5.7-liter displacement and the pushrods but moved to an aluminum block with cast-in liners and electronic throttle. It made 345 hp and 350 lb-ft and, by CorvSport's account, weighed 45 lb less than the LT4 it replaced. The gearbox moved to the rear axle, a four-speed automatic as standard or a Borg-Warner six-speed manual for $815 more, and the frame used hydroformed rails tied together by floor panels of composite sandwiching Ecuadorian balsa wood, chosen for stiffness and quiet. A 1997 coupe cost $37,495 with the automatic. CorvSport's figures for the manual car are 4.7 seconds to 60 mph, 172 mph and 0.93 g on the skidpad. Only 9,752 were built in the short first model year, all coupes; Torch Red was the most popular color at 3,026 cars and Fairway Green the rarest at 155.\n\n## 1998-2000: a convertible with a trunk and a cheaper hardtop\n\nThe convertible arrived in August 1997 as a 1998 model, the first Corvette convertible with a trunk lid since 1962, alongside a Radial Yellow and Pace Purple Indy 500 Pace Car replica. For 1999 Chevrolet added a third body, the fixed-roof hardtop or FRC, with a notchback rear window and the convertible's trunk. It was sold as the entry model with the stiff FE3 suspension standard, and it sold in small numbers: 4,031 were built for 1999 and 2,090 for 2000. Vette Vues credits the fixed roof with 12 percent more torsional rigidity than the coupe, and it became the base of the next car.\n\n## 2001-2004: the hardtop becomes the Z06\n\nFor 2001 the hardtop became the Z06, named for the 1963 racing package. The LS6 built on a modified LS1 block made 385 hp and 385 lb-ft, and weight came out through a titanium muffler that MotorWeek called the industry's first mass-produced one, thinner glass, lighter wheels and less sound deadening. MotorWeek ran 4.5 seconds to 60 mph, a 13.0-second quarter at 113 mph and 168 mph, at $47,500 to start. The base LS1 went to 350 hp that year and Active Handling became standard. For 2002 the LS6 gained a hotter cam, sodium-filled valves, stiffer springs and freer exhaust for 405 hp and 400 lb-ft. Z06 production rose to 8,297 for 2002 and 8,635 for 2003.\n\n## 2003-2004: anniversaries and the last pop-up headlights\n\nThe 50th Anniversary Edition of 2003 brought Anniversary Red paint, shale leather and the new F55 Magnetic Selective Ride Control. For 2004 the Le Mans Commemorative Edition marked the C5-R's class results in Le Mans Blue on all three bodies; the Z06 version, the Z16, added a carbon fiber hood and accounted for 2,025 of that year's Z06s. Production ended on July 2, 2004, with the C5 the last Corvette to use pop-up headlights.",
 "marketNotes": "All figures are US dollars as of September 2026. classic.com averages the C5 at $26,426 across all bodies and records its lowest sale as $7,000 for a 2002 convertible on July 6, 2023. Its category benchmarks are $29,998 for the 1998 Indy Pace Car replica and $26,280 for the 2003 50th Anniversary Edition. The Z06 averages $30,308, with the base Z06 benchmarked at $27,975 and the lowest recorded Z06 sale $13,862 for a 2001 on October 18, 2024. The 2004 Le Mans Commemorative Z06 sits above it, benchmarked at $35,221 and averaging $35,688, with a low of $16,500 on February 21, 2025. Recent Commemorative Z06 results shown by classic.com from Bring a Trailer are $40,000 for an 11,000-mile car on June 29, 2026, $38,250 for a 6,000-mile car on August 20, 2026, $38,250 for a 4,000-mile car on May 6, 2026, $35,890 for a car with 19,000 indicated miles and true mileage unknown on March 7, 2026, and $30,000 for a 28,000-mile car on April 16, 2026. Vette Vues, undated, puts clean coupes and convertibles at $14,000 to $20,000 and low-mile Z06s at $22,000 to $30,000 and up. Many classic.com C5 entries are dealer asking prices, not sales, and are not used here. No individual auction house lot page for a C5 was fetched, and no classic.com figure for the 1999-2000 FRC was found.",
 "whatToLookFor": "Start with the steering column lock. NHTSA campaign 04V060000 (GM recall 04006) covers 1997-2004 cars: on automatics the dealer removed the column lock plate, and on manuals the dealer reprogrammed the powertrain control module and checked or replaced the lock plate. Ask for the recall record, and note whether an aftermarket bypass module has been fitted instead, which Vette Vues and Vettes of Atlanta both describe as a common fix. On a 1997-2000 car the brake control module is the harder one to source and repair; from 2001 it can often be serviced. Look at the front of the engine at idle for harmonic balancer wobble or belt squeal. Lift the battery and look at the wiring harness beneath the tray, where cracked factory batteries leaked acid. On a 2002-2003 Z06, ask whether the original valve springs have been replaced; for a 2001, ask about oil consumption. The fetched sources describe spring failures on the LS6, not valve guide wear. The pop-up headlight motors fail, and the fuel level senders read erratically. Check the driver seat bolster, which wears on every C5. Receipts matter because the big jobs are expensive in labor: a clutch requires dropping the drivetrain, 10 to 15 hours per Vettes of Atlanta, and an oil pan or front seal leak means lowering the front subframe. Budget up to $1,800 for four run-flat tires per CorvSport. For color, 1997 production ran from 3,026 Torch Red cars down to 155 in Fairway Green; CorvSport reports that red, black and yellow ask the most.",
 "commonProblems": "The steering column lock is the defect that reached NHTSA. GM's electronic column lock is meant to cut fuel if the column fails to unlock at start, but NHTSA's summary says low or interrupted voltage at the control module could let the car be driven with the steering locked, and the lock pin could contact the plate while driving. The 2004 recall disabled the lock on automatic cars and reprogrammed and inspected it on manuals. Owners still report 'column lock' messages that prevent starting. Harmonic balancers separate as the rubber ages, and Vettes of Atlanta reports thrown belts. The electronic brake control module fails and lights the ABS and Active Handling warnings; Wikipedia says a pre-2001 unit must be replaced outright because GM no longer makes it, while 2001 and later units can sometimes be repaired. Factory batteries cracked and leaked acid onto the harness beneath. Fuel level senders read wrongly from sulfur deposits, and headlight motors and the hazard switch fail. On the LS6, Wikipedia cites valve spring failures on late 2002 through mid 2003 Z06s, fixed with revised GM springs; Vettes of Atlanta reports higher oil consumption on some early 2001 engines, which it traces to forum reports. The fetched sources give labor hours rather than dollar prices for these repairs: 10 to 15 hours for a clutch, and a front subframe drop for an oil pan gasket. No fetched US source prices a balancer, EBCM or valve spring job.",
 "valueTrajectory": "CorvSport's buyer's guide, written about ten years ago, found many low-mile C5s under $20,000 and Z06s listed around $20,000. As of September 2026 classic.com averages the C5 at $26,426 and the Z06 at $30,308, so the gap between a base car and a Z06 is small, and a 2001 Z06 has sold as low as $13,862 in October 2024. The special editions separate more clearly at the top. The 2004 Le Mans Commemorative Z06 benchmarks at $35,221, and low-mile examples brought $38,250 to $40,000 between May and August 2026 against $30,000 for a 28,000-mile car in April. That is below the $47,500 MotorWeek quoted for a 2001 Z06 new. The 1998 Pace Car benchmark of $29,998 and the 50th Anniversary's $26,280 sit close to the base-car average. Mileage, the column lock recall record and Z06 spring paperwork explain more of the spread than model year does. No classic.com series for the 1999-2000 FRC was found. None of this is a forecast.",
 "overallConfidence": "medium",
 "sources": [
  {
   "ref": "corvsport-1997",
   "title": "1997 C5 Chevrolet Corvette Model Guide",
   "url": "https://www.corvsport.com/1997-c5-corvette/",
   "publisher": "CorvSport",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Specialist model-year guide. March 7, 1997 on-sale date, $37,495 base coupe with automatic, $815 six-speed option, LS1 345 hp and 350 lb-ft, 45 lb lighter than LT4, balsa-cored floor, 4.7 sec 0-60 manual, 172 mph, 0.93 g, 125 ft 60-0, 9,752 built, VIN range 100001-109707 including prototype and pilot cars, 1997 color counts (Torch Red 3,026, Fairway Green 155), Csaba Csere quote."
  },
  {
   "ref": "corvsport-c5-buyers",
   "title": "The 1997 - 2004 C5 Corvette Buyers Guide",
   "url": "https://www.corvsport.com/c5-corvette-buyers-guide/",
   "publisher": "CorvSport",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Buyer's guide about ten years old. Steering column lockout as the most notable all-years issue, headlight motor failure, driver seat bolster wear, run-flat tire sets up to $1,800, many low-mile cars under $20,000 at the time, red, black and yellow asking the most."
  },
  {
   "ref": "corvsport-c5-production",
   "title": "C5 Corvette Production Figures",
   "url": "https://www.corvsport.com/c5-corvette-production-figures/",
   "publisher": "CorvSport",
   "sourceType": "specialist",
   "reliability": "low",
   "notes": "Production page whose table did not render to a fetch. Text establishes the three body styles, the hardtop as the basis for the 2001 Z06, 345 to 405 hp range, and production of 30,000 to 35,000 a year after 1997."
  },
  {
   "ref": "corvettecentral-c5-production",
   "title": "C5 Production Numbers - Corvette Central Tech Blog",
   "url": "https://tech.corvettecentral.com/2010/04/c5-production-numbers/",
   "publisher": "Corvette Central",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "US parts supplier tech blog. Year-by-year table by coupe, convertible and hardtop/Z06 with total 248,715; 1999 hardtop 4,031, 2000 2,090, 2001-2004 hardtop/Z06 5,773, 8,297, 8,635, 5,683. No 1997 convertibles. Refers readers to the Corvette Black Book."
  },
  {
   "ref": "vettevues-c5-overview",
   "title": "C5 Corvette Overview & Specs: 1997-2004 Model Year Guide",
   "url": "https://vette-vues.com/c5_corvette_overview/",
   "publisher": "Vette Vues Magazine",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "US Corvette magazine. 248,715 built October 1, 1996 to July 2, 2004 at Bowling Green, Dave Hill and John Cafaro, identical year-by-year totals, LS1 345/350 hp and 375 lb-ft from 2001, LS6 385/405 hp, FRC 12 percent stiffer, curb weights, base coupe MSRP by year ($38,060 in 1997, $44,535 in 2004), buyer checklist (column lock bypass, EBCM, balancer, battery acid), undated value ranges."
  },
  {
   "ref": "wikipedia-c5",
   "title": "Chevrolet Corvette (C5)",
   "url": "https://en.wikipedia.org/wiki/Chevrolet_Corvette_(C5)",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Pointer only. 1993 delay, January 6, 1997 unveiling, convertible August 1997 for 1998, FRC for 1999, production table with base prices ($37,495 in 1997 to $46,535 in 2004) and 248,715 total, curb weights, Z06 128 lb lighter and manual only, 2002 LS6 changes, Z16 2,025 units with 325 overseas, EBCM, column lock and 2002-2003 Z06 valve spring failures, end July 2, 2004."
  },
  {
   "ref": "motorweek-2001-z06",
   "title": "2001 Chevrolet Corvette Z06 - MotorWeek",
   "url": "https://motorweek.org/road_tests/2001_chevrolet_corvette_z06_program_2002/",
   "publisher": "MotorWeek (Maryland Public Television)",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "US period road test. LS6 385 hp and 385 lb-ft, titanium muffler, six-speed only with no automatic, 17 x 9.5 and 18 x 10.5 in wheels, 0-60 in 4.5 sec, quarter 13 sec at 113 mph, 168 mph, 60-0 in 104 ft, EPA 19/28, 13.3 cu ft trunk, $47,500 base and $48,100 with the CD changer."
  },
  {
   "ref": "autochannel-2001-z06",
   "title": "2001 Chevrolet Corvette Z06 Review",
   "url": "https://www.theautochannel.com/vehicles/new/reviews/2001/heilig_chevrolet_corvette_z06.html",
   "publisher": "The Auto Channel",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "US period review by John Heilig. 385 hp at 6,000 rpm and 385 lb-ft at 4,800 rpm, sticker estimated at $50,000, standard LS1 350 hp, 0-60 in 4 seconds flat on track, 36 lb lighter than the former hardtop and 117 lb lighter than coupe and convertible, and a statement that an automatic is available."
  },
  {
   "ref": "vettesofatlanta-z06",
   "title": "C5 Corvette Z06 & Z51: Specs, Problems & FAQ (2001-02)",
   "url": "https://vettesofatlanta.com/c5-corvette-z06-z51-specs-problems-faq-2001-02/",
   "publisher": "Vettes of Atlanta",
   "sourceType": "specialist",
   "reliability": "low",
   "notes": "US Corvette dealer FAQ with loosely attributed sourcing. Column lock bypass, harmonic balancer rubber separation, EBCM solder failures, early 2001 LS6 oil consumption, 2001 Z06 MSRP $48,055, clutch 10 to 15 hours of labor, oil pan leaks requiring a front subframe drop."
  },
  {
   "ref": "nhtsa-04v060",
   "title": "NHTSA recalls by vehicle: 2002 Chevrolet Corvette (campaign 04V060000)",
   "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=chevrolet&model=corvette&modelYear=2002",
   "publisher": "National Highway Traffic Safety Administration",
   "sourceType": "government",
   "reliability": "high",
   "notes": "Federal recall record 04V060000, GM recall 04006, electronic column lock: fuel shutoff may fail at low control module voltage and the pin may contact the plate while driving; remedy removes the lock plate on automatics and reprograms and inspects on manuals; owner notification for 1997 through 2004 vehicles in 2004."
  },
  {
   "ref": "epa-2002-corvette",
   "title": "Gas Mileage of 2002 Chevrolet Corvette",
   "url": "https://www.fueleconomy.gov/feg/bymodel/2002_Chevrolet_Corvette.shtml",
   "publisher": "US Department of Energy and EPA (fueleconomy.gov)",
   "sourceType": "government",
   "reliability": "high",
   "notes": "Current EPA listing for the 2002 5.7-liter V8: four-speed automatic 16 city, 23 highway, 19 combined; six-speed manual 17 city, 26 highway, 20 combined."
  },
  {
   "ref": "classic-c5",
   "title": "Chevrolet Corvette - C5 Market - CLASSIC.COM",
   "url": "https://www.classic.com/m/chevrolet/corvette/c5/",
   "publisher": "CLASSIC.COM",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "Fetched September 23, 2026 through a rendering fetch (403 to plain scripts). Average $26,426, lowest recorded sale $7,000 for a 2002 convertible on July 6, 2023, 1998 Indy Pace Car benchmark $29,998, 50th Anniversary benchmark $26,280. Listing rows shown were dealer asks and are not used."
  },
  {
   "ref": "classic-c5-z06",
   "title": "Chevrolet Corvette Z06 - C5 Market - CLASSIC.COM",
   "url": "https://www.classic.com/m/chevrolet/corvette/c5/z06/",
   "publisher": "CLASSIC.COM",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "Fetched September 23, 2026 through a rendering fetch. Z06 average $30,308, base Z06 benchmark $27,975, Commemorative benchmark $35,221, lowest recorded Z06 sale $13,862 for a 2001 on October 18, 2024, and 28,388 C5 Z06s built."
  },
  {
   "ref": "classic-c5-z06-commemorative",
   "title": "Chevrolet Corvette Z06 LeMans Commemorative Edition - C5 Market - CLASSIC.COM",
   "url": "https://www.classic.com/m/chevrolet/corvette/c5/z06/lemans-commemorative-edition/",
   "publisher": "CLASSIC.COM",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "Fetched September 23, 2026 through a rendering fetch. Benchmark $35,221, average $35,688, lowest $16,500 on February 21, 2025, 2,025 built; Bring a Trailer results $38,250 (Aug 20, 2026, 6k mi), $40,000 (Jun 29, 2026, 11k mi), $38,250 (May 6, 2026, 4k mi), $30,000 (Apr 16, 2026, 28k mi), $35,890 (Mar 7, 2026, 19k mi TMU)."
  }
 ],
 "claims": [
  {
   "section": "production",
   "claimText": "Chevrolet built 248,715 C5 Corvettes for the 1997-2004 model years; Corvette Central, Vette Vues and Wikipedia agree on the total and on every yearly figure, though all three are secondary and may share an upstream source.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["corvettecentral-c5-production", "vettevues-c5-overview", "wikipedia-c5"],
   "evidence": [
    { "ref": "corvettecentral-c5-production", "quote": "2004 16165 12216 5683 34064 TOTAL 248,715" },
    { "ref": "vettevues-c5-overview", "quote": "General Motors produced a total of 248,715 C5 Corvettes between October 1, 1996, and July 2, 2004, at the assembly facility in Bowling Green, Kentucky" },
    { "ref": "wikipedia-c5", "quote": "2004 34,064 $46,535 24 Hours of Le Mans Commemorative Edition package offered for all models Total 248,715" }
   ]
  },
  {
   "section": "production",
   "claimText": "The short 1997 model year produced 9,752 cars, all coupes; 1997 VIN serials run past that count because prototype and pilot cars took numbers.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["corvsport-1997", "corvettecentral-c5-production"],
   "evidence": [
    { "ref": "corvsport-1997", "quote": "VIN numbers this year include prototype and pilot cars so VIN serial numbers do not match production" },
    { "ref": "corvettecentral-c5-production", "quote": "Model Year Coupe Convertible Hardtop/Z06 Total 1997 9752 9752" }
   ]
  },
  {
   "section": "production",
   "claimText": "The fixed-roof hardtop sold as the entry model in 1999 and 2000 was built in 4,031 and 2,090 examples, 6,121 in all.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["corvettecentral-c5-production", "vettevues-c5-overview"],
   "evidence": [
    { "ref": "corvettecentral-c5-production", "quote": "1999 18078 11161 4031 33270 2000 18113 13479 2090 33682" },
    { "ref": "vettevues-c5-overview", "quote": "18,078 11,161 4,031 33,270 18,113 13,479 2,090 33,682" }
   ]
  },
  {
   "section": "production",
   "claimText": "C5 Z06 production totals 28,388, which matches the sum of the 2001-2004 hardtop and Z06 column in the Corvette Central table.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["classic-c5-z06", "corvettecentral-c5-production"],
   "evidence": [
    { "ref": "classic-c5-z06", "quote": "Production of the C5 Chevrolet Corvette Z206 ended in 2004 with a total of 28,388 examples built." },
    { "ref": "corvettecentral-c5-production", "quote": "2001 15681 14173 5773 35627 2002 14760 12710 8297 35767 2003 12812 14022 8635 35469" }
   ]
  },
  {
   "section": "production",
   "claimText": "The 2004 Le Mans Commemorative Edition Z06 (RPO Z16) was built in 2,025 examples, the majority of that year's Z06 production; Wikipedia alone says 325 went overseas.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["wikipedia-c5", "classic-c5-z06-commemorative"],
   "evidence": [
    { "ref": "wikipedia-c5", "quote": "The Z16 option accounted for the majority of Z06 Corvettes in 2004, totaling 2,025 units, with 325 units shipped overseas." },
    { "ref": "classic-c5-z06-commemorative", "quote": "Just 2,025 examples of the C5 Corvette Z06 LeMans Commemorative Edition were produced." }
   ]
  },
  {
   "section": "specs",
   "claimText": "US base prices disagree by source: Wikipedia and CorvSport give $37,495 for the 1997 coupe and Wikipedia $46,535 for 2004, while Vette Vues lists base coupe MSRPs of $38,060 for 1997 and $44,535 for 2004.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["corvsport-1997", "wikipedia-c5", "vettevues-c5-overview"],
   "conflictNote": "CorvSport and Wikipedia state $37,495 for the 1997 base coupe; Vette Vues states $38,060. For 2004 Wikipedia states $46,535 and Vette Vues $44,535, and the two lists differ in every year between. Neither says whether destination charges are included. Not resolved by any source consulted here.",
   "evidence": [
    { "ref": "corvsport-1997", "quote": "The Base Corvette Coupe with 346 cu. in. 345 hp engine and four speed automatic transmission started at $37,495." },
    { "ref": "wikipedia-c5", "quote": "1997 9,752 $37,495 LS1 engine debuts; the fastback coup is the only bodystyle offered" },
    { "ref": "vettevues-c5-overview", "quote": "Model Year Total Units Base Coupe MSRP 1997 9,752 $38,060 1998 31,084 $38,100" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 2001 Z06 was priced at $47,500 to start by MotorWeek, at $48,055 by Vettes of Atlanta, and estimated at $50,000 by the Auto Channel's period review.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["motorweek-2001-z06", "vettesofatlanta-z06", "autochannel-2001-z06"],
   "conflictNote": "MotorWeek states $47,500 to start and $48,100 with the only option. Vettes of Atlanta states a base MSRP of $48,055. The Auto Channel gives an estimated sticker of $50,000. No Chevrolet price sheet was fetched, so this is not resolved by any source consulted here.",
   "evidence": [
    { "ref": "motorweek-2001-z06", "quote": "And one that will set you back $47,500 to start. Add the only Z06 option, a 12-disc CD changer, and pay $48,100." },
    { "ref": "vettesofatlanta-z06", "quote": "The base MSRP for the 2001 Z06 was $48,055, positioning it as a major performance bargain" },
    { "ref": "autochannel-2001-z06", "quote": "LENGTH x TREAD WIDTH x HEIGHT: 179.7 x 62.5 x 47.7 in. STICKER PRICE: $50,000 (est.)" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 2001 Z06's LS6 was rated at 385 hp at 6,000 rpm and 385 lb-ft at 4,800 rpm, and MotorWeek tested it at 4.5 seconds to 60 mph, 13.0 seconds at 113 mph in the quarter and 168 mph.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["motorweek-2001-z06", "autochannel-2001-z06", "vettesofatlanta-z06"],
   "evidence": [
    { "ref": "motorweek-2001-z06", "quote": "starting with a 385-horsepower pushrod V-8, and neck-snapping 0 to 60 acceleration of a mere 4.5 seconds" },
    { "ref": "autochannel-2001-z06", "quote": "HORSEPOWER/TORQUE: 385 hp @ 6,000 rpm/385 lb-ft @ 4,800 rpm" },
    { "ref": "vettesofatlanta-z06", "quote": "The debut 2001 LS6 engine produced 385 horsepower and 385 lb-ft of torque" }
   ]
  },
  {
   "section": "specs",
   "claimText": "Sources disagree on whether the 2001 Z06 could be ordered with an automatic: MotorWeek and Wikipedia say it was six-speed manual only, while the Auto Channel's 2001 review says an automatic was available.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["motorweek-2001-z06", "wikipedia-c5", "autochannel-2001-z06"],
   "conflictNote": "MotorWeek states that no automatic is available and Wikipedia that the Z06 was only available with the six-speed manual. The Auto Channel's 2001 Z06 review states that an automatic is available. No Chevrolet order guide was fetched; not resolved by any source consulted here.",
   "evidence": [
    { "ref": "motorweek-2001-z06", "quote": "standard 6-speed manual transmission, with a new high strength clutch" },
    { "ref": "wikipedia-c5", "quote": "The Z06 model was only available with the six-speed manual transmission." },
    { "ref": "autochannel-2001-z06", "quote": "This engine drives the rear wheels through a six-speed manual gearbox, although an automatic is available." }
   ]
  },
  {
   "section": "specs",
   "claimText": "For 2002 the Z06's LS6 was raised to 405 hp and 400 lb-ft, and the base LS1 had gone from 345 hp to 350 hp for 2001.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["vettevues-c5-overview", "wikipedia-c5", "autochannel-2001-z06"],
   "evidence": [
    { "ref": "vettevues-c5-overview", "quote": "5.7L LS6 V8 (Z06 Exclusive): 385 hp (2001); 405 hp / 400 lb-ft torque (2002–2004)" },
    { "ref": "wikipedia-c5", "quote": "Starting with the 2002 model year, power was increased to 405 hp" },
    { "ref": "autochannel-2001-z06", "quote": "The standard Corvette LS1 V8 delivers 350 hp." }
   ]
  },
  {
   "section": "specs",
   "claimText": "The Z06's weight saving over the coupe is given as 117 lb by the Auto Channel and 128 lb by Wikipedia, and the hardtop's curb weight as 3,172 lb by Wikipedia against 3,118 lb for 'FRC / Z06' by Vette Vues.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["autochannel-2001-z06", "wikipedia-c5", "vettevues-c5-overview"],
   "conflictNote": "The Auto Channel states the 2001 Z06 is 117 pounds lighter than the coupe and convertible; Wikipedia states 128 lb. Wikipedia gives the hardtop 3,172 lb and the Z06 3,118 lb; Vette Vues gives 3,118 lb for the hardtop and Z06 together. Not resolved by any source consulted here.",
   "evidence": [
    { "ref": "autochannel-2001-z06", "quote": "It is the lightest Corvette this year, 36 pounds lighter than the former C5 hardtop, and 117 pounds lighter than the coupe and convertible." },
    { "ref": "wikipedia-c5", "quote": "The Z06 is 128 lb (58 kg) lighter than a standard C5 hatchback coupe" },
    { "ref": "vettevues-c5-overview", "quote": "Fixed-Roof Hardtop / Z06: 3,118 lbs (1,414 kg)" }
   ]
  },
  {
   "section": "specs",
   "claimText": "EPA figures differ by source: MotorWeek printed 19 mpg city and 28 highway for the 2001 Z06, while fueleconomy.gov now lists a 2002 5.7-liter manual at 17 city and 26 highway.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["motorweek-2001-z06", "epa-2002-corvette", "wikipedia-c5"],
   "conflictNote": "MotorWeek states EPA mileage of 19 mpg city and 28 highway for the 2001 Z06, and Wikipedia gives 19/28 for a manual C5. The current fueleconomy.gov page lists the 2002 manual at 17 city and 26 highway and the automatic at 16 and 23. No fetched source explains the difference.",
   "evidence": [
    { "ref": "motorweek-2001-z06", "quote": "EPA Mileage: 19 MPG City 28 MPG Highway Top Speed: 168 MPH" },
    { "ref": "epa-2002-corvette", "quote": "Combined MPG: 20 combined city/highway MPG City MPG: 17 city Highway MPG: 26 highway" },
    { "ref": "wikipedia-c5", "quote": "the C5 achieves comparatively high EPA ratings of 18" }
   ]
  },
  {
   "section": "history",
   "claimText": "The C5 was originally intended for 1993 and was delayed by GM's financial troubles and staff changes; it was unveiled on January 6, 1997 and went on sale on March 7, 1997.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["wikipedia-c5", "corvsport-1997"],
   "evidence": [
    { "ref": "wikipedia-c5", "quote": "The fifth generation was originally intended to debut in 1993 to celebrate the Corvette's 40th anniversary, but it was delayed by financial troubles and changes in staff within GM." },
    { "ref": "corvsport-1997", "quote": "Chevrolet had declared this date as the day that the first all-new Corvette would be made available for sale to the public" }
   ]
  },
  {
   "section": "history",
   "claimText": "The C5 frame's rails are tied together by a floor of composite panels sandwiching balsa wood, and the six-speed manual was an $815 option in 1997.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["corvsport-1997", "wikipedia-c5"],
   "evidence": [
    { "ref": "corvsport-1997", "quote": "Tying the frame rails together was a chassis floor of composite plastic plates that sandwiched sheets of Ecuadorian balsa wood." },
    { "ref": "wikipedia-c5", "quote": "The floor boards on the C5 are a composite consisting of SMC sandwiched with balsa wood" }
   ]
  },
  {
   "section": "history",
   "claimText": "The convertible, the first Corvette convertible with a trunk since 1962, followed for 1998, and the fixed-roof hardtop joined for 1999 before becoming the basis of the 2001 Z06.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["wikipedia-c5", "corvettecentral-c5-production", "corvsport-c5-production"],
   "evidence": [
    { "ref": "wikipedia-c5", "quote": "In the summer of 1998, a third bodystyle, the hardtop (also referred to as the" },
    { "ref": "corvettecentral-c5-production", "quote": "the latter being the basis for the Z06 track terror that was introduced in 2001" },
    { "ref": "corvsport-c5-production", "quote": "the latter being the basis for the Z06 track monster that was introduced in 2001" }
   ]
  },
  {
   "section": "history",
   "claimText": "Of the 9,752 cars built for 1997, Torch Red was the most common color at 3,026 and Fairway Green Metallic the least common at 155.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["corvsport-1997"],
   "evidence": [
    { "ref": "corvsport-1997", "quote": "Light Carmine Red Metalli 381 (3.91%), Torch Red 3,026 (31.03%), Fairway Green Metallic 155 (1.59%)" }
   ]
  },
  {
   "section": "problems",
   "claimText": "NHTSA campaign 04V060000 (GM recall 04006) addressed the electronic column lock on 1997-2004 cars: low control module voltage could allow driving with the steering locked, so dealers removed the lock plate on automatics and reprogrammed and inspected manuals.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["nhtsa-04v060", "corvsport-c5-buyers", "vettevues-c5-overview"],
   "evidence": [
    { "ref": "nhtsa-04v060", "quote": "ON VEHICLES EQUIPPED WITH AN AUTOMATIC TRANSMISSION, THE DEALER WILL DISABLE THE STEERING COLUMN LOCK BY REMOVING THE COLUMN LOCK PLATE" },
    { "ref": "corvsport-c5-buyers", "quote": "the steering column on a number of fifth-generation Corvettes has been known to lock down if the ignition key is inserted improperly" },
    { "ref": "vettevues-c5-overview", "quote": "Column Lock Mechanism: Common on 1997–2004 manual and automatic cars" }
   ]
  },
  {
   "section": "problems",
   "claimText": "Harmonic balancer separation and electronic brake control module failures are the other widely reported C5 faults, with pre-2001 EBCM units harder to source and repair than later ones.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["vettevues-c5-overview", "vettesofatlanta-z06", "wikipedia-c5"],
   "evidence": [
    { "ref": "vettevues-c5-overview", "quote": "1997–2000 EBCM units are difficult to source and repair; 2001–2004 units are significantly easier to service." },
    { "ref": "vettesofatlanta-z06", "quote": "The harmonic balancer is a notorious failure point due to its rubber core separating, often causing belt throw-off" },
    { "ref": "wikipedia-c5", "quote": "On C5 Corvettes made before 2001, a failing ECBM module must be replaced outright." }
   ]
  },
  {
   "section": "problems",
   "claimText": "Wikipedia reports valve spring failures on late 2002 through mid 2003 Z06s, and Vettes of Atlanta reports higher oil consumption on some early 2001 LS6 engines from forum reports; neither fetched source describes valve guide wear on the LS6.",
   "confidence": "low",
   "status": "unverified",
   "sourceRefs": ["wikipedia-c5", "vettesofatlanta-z06"],
   "evidence": [
    { "ref": "wikipedia-c5", "quote": "Valve spring failures are known to affect late production 2002-mid 2003 Z06s." },
    { "ref": "vettesofatlanta-z06", "quote": "Some early 2001 LS6 models experienced higher-than-normal oil consumption, often traced back to the PCV system design and piston ring gaps" }
   ]
  },
  {
   "section": "problems",
   "claimText": "Major C5 jobs are labor-heavy: a clutch requires a drivetrain drop of 10 to 15 hours and an oil pan leak a front subframe drop, and a set of four run-flat tires can cost up to $1,800.",
   "confidence": "low",
   "status": "verified",
   "sourceRefs": ["vettesofatlanta-z06", "corvsport-c5-buyers"],
   "evidence": [
    { "ref": "vettesofatlanta-z06", "quote": "Tasks like clutch replacement require a full drivetrain drop (10–15 hours), and fixing oil pan leaks necessitates dropping the front subframe." },
    { "ref": "corvsport-c5-buyers", "quote": "a new set of tires for any C5 Corvette can cost as much as $1,800 for a set of four run-flat tires" }
   ]
  },
  {
   "section": "market",
   "claimText": "As of September 2026 classic.com averages the C5 at $26,426, with a lowest recorded sale of $7,000 for a 2002 convertible on July 6, 2023; Vette Vues places clean base cars at $14,000 to $20,000.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["classic-c5", "vettevues-c5-overview"],
   "evidence": [
    { "ref": "classic-c5", "quote": "The lowest recorded sale price was $7,000 for a 2002 Chevrolet Corvette Convertible on July 06, 2023." },
    { "ref": "vettevues-c5-overview", "quote": "Clean, well-maintained base coupes and convertibles typically range from $14,000 to $20,000" }
   ]
  },
  {
   "section": "market",
   "claimText": "As of September 2026 classic.com averages the C5 Z06 at $30,308 and the 2004 Le Mans Commemorative Z06 at $35,688, with low-mile Commemorative cars bringing $38,250 to $40,000 on Bring a Trailer between May and August 2026.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["classic-c5-z06", "classic-c5-z06-commemorative", "vettevues-c5-overview"],
   "evidence": [
    { "ref": "classic-c5-z06", "quote": "Production of the C5 Chevrolet Corvette Z206 ended in 2004 with a total of 28,388 examples built." },
    { "ref": "classic-c5-z06-commemorative", "quote": "The average price of a Chevrolet Corvette - C5 - Z06 - Lemans Commemorative Edition is $35,688." },
    { "ref": "vettevues-c5-overview", "quote": "while low-mileage Z06 models trade between $22,000 and $30,000+" }
   ]
  }
 ]
};
