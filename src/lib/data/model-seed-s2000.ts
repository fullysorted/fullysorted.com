/**
 * Researched model draft - Honda S2000 (1999-2009).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedS2000 = {
 "slug": "honda/s2000",
 "make": "Honda",
 "model": "S2000",
 "generation": "AP1 / AP2",
 "generationCode": "AP1 (1999-2003), AP2 (2004-2009)",
 "trim": null,
 "yearStart": 1999,
 "yearEnd": 2009,
 "bodyStyles": [
  "2-door roadster with power-operated folding soft top",
  "2-door roadster with removable aluminium hardtop (S2000 CR, standard; accessory hardtop optional on other cars)"
 ],
 "engines": [
  "1,997 cc F20C DOHC 16-valve VTEC inline-four, naturally aspirated, 87.0 mm x 84.0 mm, 250 PS at 8,300 rpm in Japan (11.7:1 compression) and 240 PS / 240 hp at 8,300 rpm for export (11.0:1), 153 lb-ft (208 Nm) at 7,500 rpm US specification",
  "2,157 cc F22C1 DOHC 16-valve VTEC inline-four, naturally aspirated, 87.0 mm x 90.7 mm, 11.1:1, 240 hp at 7,800 rpm and 162 lb-ft (220 Nm) at 6,500 rpm; fitted to North American and Japanese AP2 cars from 2004 while European cars retained the F20C"
 ],
 "productionTotal": null,
 "productionNotes": "No single production figure survives contact with the sources. Honda's discontinuation announcement of 27 January 2009 gives more than 110,000 units worldwide and over 20,000 in Japan as of December 2008 - a cumulative sales figure, not a build figure. Wikipedia's infobox carries 110,673 as the production total, while the body of the same article states that 110,673 was Honda's reported worldwide sales through the end of 2008 and that the final official production figure was 113,889 by the end of 2009. Its table separates the two: a total-built column summing to 113,889, and per-market sales columns of 66,544 in the United States, 21,661 in Japan, 19,793 in Europe and 2,585 in Canada, coming to 110,583, with the warning that the columns use different methodologies and are not directly comparable. JDMBUYSELL repeats roughly 110,673 as a build figure across both generations. Hagerty gives United States production as 66,860, against the 66,544 in the sales table. None of this is reconciled by any source consulted here, so no total is asserted. Two sub-totals are agreed: 699 CR cars for the United States across the 2008 and 2009 model years, and 1,755 Type S cars sold only in Japan. Build ran at Takanezawa from 1999 alongside the NSX and moved to Suzuka for the AP2, ending by the end of June 2009 in all regions; cars continued to sell from inventory into 2010 and 2011 with nothing built.",
 "notableTrims": [
  {
   "name": "S2000 (AP1, 1999-2003)",
   "note": "The original specification: 1,997 cc F20C, 16-inch wheels on 205/55 and 225/50, and the suspension tune that gave the car its reputation. Japanese cars ran 11.7:1 and 250 PS, export cars 11.0:1 and 240 PS. Collectors treat AP1 and AP2 as different cars, not as facelifts of one."
  },
  {
   "name": "S2000 Type V (Japan, 2000-2007)",
   "note": "Japan only, from 2000, with Variable Gear Ratio Steering described as the first of its kind in a production car: 1.4 turns lock-to-lock against 2.4, plus its own chassis tune. Never sold in an export market, so a European or American car cannot be one."
  },
  {
   "name": "S2000 (AP2, 2004-2009)",
   "note": "2,157 cc F22C1 in North America and Japan, 17-inch wheels, revised springs, dampers, bar and rear geometry, carbon synchronisers, pull-type clutch. Drive-by-wire and stability control became standard for 2006. European AP2 cars kept the 2.0-litre, which matters when reading a European advertisement."
  },
  {
   "name": "S2000 CR 'Club Racer' (United States, 2008-2009)",
   "note": "699 built. Aluminium hardtop in place of the folding roof, a rear body brace in the vacated well, wind-tunnel aero, much stiffer springs and dampers, larger bars, a 13.8:1 rack, Bridgestone RE070s, and air conditioning and stereo made optional. The most sought-after S2000 by a wide margin."
  },
  {
   "name": "S2000 Type S (Japan, 2008-2009)",
   "note": "1,755 built, Japan only. Shares the CR's aerodynamic addenda and extra bracing but keeps a softer road-biased tune and the folding roof. Frequently confused with the CR in export advertisements; it is a different car."
  },
  {
   "name": "S2000 GT and GT Edition 100 (United Kingdom)",
   "note": "The United Kingdom GT added a removable hardtop over the base Roadster, at 27,850 pounds on the road against 27,300 in 2002. The GT Edition 100 closed the United Kingdom run at 100 cars in Grand Prix White with graphite wheels and a red leather interior."
  },
  {
   "name": "S2000 Ultimate Edition (continental Europe)",
   "note": "The continental European run-out car, announced with the end of production in January 2009: Grand Prix White, removable hardtop, graphite wheels with black bolts, aluminium gear lever, red leather with matching stitching."
  }
 ],
 "specs": {
  "layout": "Front mid-mounted longitudinal engine, rear-wheel drive, 50:50 weight distribution",
  "chassis": "Steel monocoque built around Honda's high X-bone frame: straightened side members, centre floor tunnel, sills and central floor frame forming an X on one horizontal plane, with diagonally braced bulkheads",
  "engine": "1,997 cc F20C DOHC 16-valve VTEC inline-four (1999-2009); 2,157 cc F22C1 from 2004 for North America and Japan only",
  "valvetrain": "VTEC on both camshafts, switching to high-lift profiles near 6,000 rpm; roller followers, chain drive, fibre-reinforced metal bore liners, forged pistons",
  "bore_stroke": "F20C 87.0 mm x 84.0 mm; F22C1 87.0 mm x 90.7 mm",
  "compression": "F20C 11.0:1 export, 11.7:1 Japan; F22C1 11.1:1",
  "power": "F20C 250 PS at 8,300 rpm (Japan), 240 PS / 240 hp at 8,300 rpm (export); F22C1 240 hp at 7,800 rpm - manufacturer claims",
  "torque": "F20C 153 lb-ft (208 Nm) at 7,500 rpm, US specification; F22C1 162 lb-ft (220 Nm) at 6,500 rpm per Honda, quoted at 6,800 rpm by some secondary sources",
  "redline": "F20C given by Honda as a 9,000 rpm rev limit; secondary sources put the redline at 8,800 rpm with fuel cut at 9,000. F22C1 8,000 rpm redline, 8,200 rpm cut",
  "transmission": "6-speed close-ratio manual, longitudinal; brass synchronisers on AP1, carbon on AP2; pull-type clutch from 2004",
  "final_drive": "4.100:1 with a Torsen limited-slip differential, unchanged across the run; AP2 shortened gears one to four by 4 per cent and fifth by 1, and lengthened sixth by 2",
  "suspension": "Double wishbones front and rear; AP2 raised front spring rate 6.7 per cent, cut rear 10 per cent, reduced the rear bar from 27.2 to 25.4 mm, lowered the roll centre and moved rear static toe from -0 deg 19 min to -0 deg 10 min",
  "steering": "Electrically assisted rack and pinion, 14.9:1; 13.8:1 on the CR; the Japan-only Type V used variable gear ratio steering at 1.4 turns lock-to-lock",
  "brakes": "Ventilated front and solid rear 11-inch discs, four-wheel ABS; revised pad material from 2004",
  "wheels_tyres": "AP1 205/55R16 and 225/50R16; AP2 215/45R17 and 245/40R17; CR on Bridgestone Potenza RE070 with a wider rear",
  "weight": "1,260 kg kerb, European 1999 specification; 2,835 lb quoted for the 2004 US car, up 24 lb on 2003",
  "acceleration": "6.2 s to 100 km/h claimed and 241 km/h top speed (Europe, 1999); MotorWeek measured 6.2 s to 60 mph, 14.8 s at 98 mph and 110 ft from 60 mph on a 2000 car"
 },
 "summary": "The Honda S2000 was launched on 15 April 1999 to mark Honda's fiftieth year, a front-mid-engined, rear-drive roadster descended from the SSM concept shown at Tokyo in 1995 and, more distantly, from the S500, S600 and S800 of the 1960s. Its 1,997 cc F20C revved to a 9,000 rpm limit and produced 250 PS in Japan and 240 PS for export, which Honda advertised as the highest output per litre then reached by a normally aspirated production engine. The body was a monocoque built around what Honda called a high X-bone frame, in which the centre tunnel, sills and straightened side members meet on one plane; Honda claimed torsional rigidity equal to a closed car and bending rigidity better than either. In 2004 the AP1 gave way to the AP2, with a longer-stroke 2,157 cc F22C1 for North America and Japan, shorter lower gears, 17-inch wheels and revised rear geometry aimed at the earlier car's reputation for letting go at the back. The track-biased CR followed in 2008; production ended in June 2009.",
 "history": "## Fifty Years, and a Question Honda Had Asked Before\nHonda's first sports car, the S500, appeared in 1963, then the S600 and S800. The S2000 was launched on 15 April 1999 to mark the company's fiftieth anniversary, and Honda's European material called it the successor to the S800 and the first front-engined, rear-drive Honda since it. The design study was the SSM, shown at the 1995 Tokyo Motor Show and credited to Shigeru Uehara. The NSX had been Honda's attempt at the same problem a decade earlier from the opposite direction, and the two shared a roof: the S2000 was built at Takanezawa alongside the NSX.\n\n## An Engine Announced by Its Output per Litre\nHonda announced the engine on 23 February 1999, separately from the car, and led on specific output rather than power. The Japanese F20C made 250 PS from 1,997 cc - 125 PS per litre, which Honda called world-leading - while export cars were quoted at 240 PS at 8,300 rpm, about 120 PS per litre, against a 9,000 rpm limit. Honda's own wording is inconsistent about how wide the claim is: the American introduction release says the highest specific output of any normally aspirated production engine in the world; the powertrain release narrows it to any 2.0-litre one. Either way it stood until the Ferrari 458 Italia entered production in 2010 at roughly 126 hp per litre. The means were unexotic in isolation and rare together: VTEC on both camshafts switching near 6,000 rpm, fibre-reinforced metal bore liners in an aluminium block, forged pistons, and 11.7:1 compression in Japan against 11.0:1 abroad.\n\n## The High X-Bone Frame\nHonda published the structure as a technology in its own right the same day as the engine. Rather than reinforce a conventional open shell, the centre floor tunnel became the backbone of a structure tying the straightened side members, the sills and the central floor frame into an X on one horizontal plane, with diagonally braced bulkheads fore and aft of the cockpit. Honda claimed torsional rigidity equal to a closed body and bending rigidity better than either an open or a closed conventional one. It is why the car does not shake, and why the CR could later get a usable gain from one added brace.\n\n## AP1 to AP2\nFor 2004 the engine was stroked from 84.0 mm to 90.7 mm, giving 2,157 cc as the F22C1. Peak power stayed at 240 hp but arrived 500 rpm earlier and torque rose to 162 lb-ft 1,000 rpm earlier, Honda claiming a 4 to 10 per cent gain between 1,000 and 8,000 rpm. The cost was the rev limit, cut to 8,000 rpm on rising piston speed. Gears one to four shortened 4 per cent and fifth 1 while sixth lengthened 2, on an unchanged 4.100 final drive. Wheels went to 17 inches, front spring rate rose 6.7 per cent and rear fell 10, the rear bar came down from 27.2 to 25.4 mm, the roll centre was lowered and rear static toe moved from -0 deg 19 min to -0 deg 10 min. European AP2 cars kept the 2.0-litre.\n\n## The Snap-Oversteer Question\nThe reputation is not folklore, but it is more specific than the shorthand. The AP1's rear geometry gives substantial toe-out in droop, so when the rear unloads - a mid-corner lift, a crest, hard trail-braking - the rear wheels steer outward just as the tyres carry least load. Specialists recommend at least 3 to 4 mm of static toe-in on an AP1, and kits exist to reverse it. Honda's 2004 material is the strongest evidence the company agreed: it lists more gradual fall-off at the limit and reduced sensitivity to disturbances among that year's gains, and the changes ran to roll centre and rear toe, not merely spring rates. Against that, Larry Webster has said he found the tail basically impossible to provoke.\n\n## CR, and the End\nThe CR was shown at New York in April 2007 and sold for 2008 and 2009. Honda quoted a reduction in coefficient of lift of about 70 per cent with the hardtop off and 80 per cent with it on. Springs went from 4.75 to 7.0 kg/mm front and 4.88 to 6.2 kg/mm rear, damping up 65 and 40 per cent, with larger bars, a 13.8:1 rack and a brace across the well the roof had used. Sales fell from 2006 and collapsed in 2008; Honda announced on 27 January 2009 that build would stop that June, and the successor was abandoned.",
 "marketNotes": "As of August 2026, classic.com records an average recorded sale of $50,659 across 503 tracked Honda S2000 listings with 56 cars advertised, and a market benchmark of $29,652 that the site scopes to the AP1 rather than to the model as a whole - the gap between the two is a difference of scope, not a contradiction. The tracked range as of August 2026 runs from $6,600 for a 2000 car in September 2022 to $118,900 for a 2008 CR in September 2025. The CR is tracked separately and trades in a different market: as of August 2026 its benchmark stands at $76,602 on a falling trend against an average sale of $79,336, with results between $23,500 in April 2024 and $132,000 for an 8,000-mile 2008 car in January 2026. Ordinary AP1 and AP2 cars sit in broadly the same band as each other; the CR carries a multiple over both, and the falling CR trend line suggests the six-figure results were reached by a handful of exceptional cars rather than by the variant. Delivery-mileage examples form a third category: Broad Arrow sold a 42-mile, never-registered 2000 car for $95,000 including buyer's premium on 12 March 2025, reported at the time as a probable public-auction record for an AP1, against an owner who had wanted $150,000 for it in 2020.",
 "whatToLookFor": "Establish which car it is before anything else. AP1 and AP2 are separate propositions, the European AP2 keeps the 2.0-litre while North American and Japanese AP2s do not, and Type V, Type S and CR are all market-restricted, so a badge alone settles nothing. A genuine CR has the aluminium hardtop, the rear body brace behind the seats, the 13.8:1 rack, the lower spherical shift knob and Alcantara trim; replicas built from an accessory hardtop and a bodykit are common enough that the interior and the brace are worth checking directly. Honda fit and finish is the best crash detector available: uneven panel gaps at the bonnet or boot, mismatched paint, and missing VIN stickers on fenders, hood, radiator support and boot all point one way, and salvage titles are not rare on this model. Take the oil level and the service history together, since AP1 consumption is normal enough that a car with no top-up record has either been watched or has not. Listen for a high-pitched buzz from a worn chain tensioner, and drive firmly through every gear on and off throttle listening for pop-out of second, fourth or sixth. Check compression against roughly 240 psi. Inspect the soft top behind the driver's head where it tears, and the plastic rear window for fogging and cracking. On a 2006-onward car look at the dashboard for bubbling or blistering. Factory hardtops are scarce and priced accordingly. Mileage matters less than the record of what was done at it.",
 "commonProblems": "The engine is durable and the chassis is not fragile, so the fault list is specific rather than long. AP1 cars burn oil - a quart per 1,500 miles is described as normal by one guide and as ring-tolerance wear by another - and the same engines up to mid-2002 carry the oil-feed banjo bolt arrangement associated with high-rpm oil starvation and cylinder scoring, revised during 2002. AP1 intake valve retainers can crack after a mechanical over-rev, which is why a preventative retainer service exists; the F22C1 received upgraded retainers and does not need it. Wheel bearings fail and are not cheap. Timing-chain tensioner wear announces itself as a high-pitched rattle. Second and third gear synchronisers wear with hard shifting and old fluid, and AP2 gearboxes have a documented tendency to jump out of second, fourth or sixth. Clutch master and slave cylinders leak. Differential bearings whine. Radiator end tanks crack with age. Spark plugs back out and axle nuts loosen, so torque values want checking. Soft tops tear behind the driver's head and the plastic rear window fogs and cracks. Dashboards on 2006-onward cars bubble and blister. Recall history is light: NHTSA lists two 2000-model-year seat-belt campaigns, a 2004 tail-lamp non-compliance, an owner's-manual campaign, and a 2013 brake-booster recall covering 2006-2007 cars built between January and November 2006.",
 "valueTrajectory": "The S2000 spent its first decade after production as a used sports car and was priced like one; Hagerty put a number two condition car at an average of $24,000 in 2013 and $29,500 in February 2021, a 23 per cent move over eight years that is barely a move at all in real terms. What changed was who was buying. Hagerty's own insurance data showed millennials holding 31 per cent of insured S2000s against 18 per cent of the wider classic market, and quoting activity on AP1s rising 103 per cent over three years and 257 per cent over five. The market then split rather than rose evenly. As of August 2026 an ordinary AP1 or AP2 sits near the classic.com AP1 benchmark of $29,652 while the CR benchmark is $76,602, and the very best low-mileage cars have detached from both, with a 42-mile AP1 at $95,000 in March 2025 and an 8,000-mile CR at $132,000 in January 2026. The CR trend line is currently falling, which suggests the six-figure results were reached by a small number of exceptional cars rather than by the model. The gap that has widened is between documented, unmodified, uncrashed cars and everything else, and there is no sign of it narrowing.",
 "overallConfidence": "high",
 "sources": [
  {
   "ref": "honda-body-structure",
   "title": "Honda Introduces a New Open Car Body Structure",
   "url": "https://global.honda/en/newsroom/worldnews/1999/4990223a.html",
   "publisher": "Honda Motor Co., Ltd.",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "23 February 1999 release defining the high X-bone frame: centre tunnel as backbone tying straightened side members, sills and floor frame into an X on one plane; claims rigidity and collision safety equal to a closed body. No numbers given."
  },
  {
   "ref": "honda-2l-engine",
   "title": "Honda Develops a 2-Liter Engine Combining High Output and Clean Emissions",
   "url": "https://global.honda/newsroom/worldnews/1999/4990223b.html",
   "publisher": "Honda Motor Co., Ltd.",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "23 February 1999 release: 250 PS from a normally aspirated 2-litre, 125 PS per litre, called world-leading output; emissions at some 50 per cent of the 2000 Japanese standard. Japanese-specification figures."
  },
  {
   "ref": "honda-eu-s2000-99",
   "title": "Honda S2000 99",
   "url": "https://hondanews.eu/eu/en/media/pressreleases/34329/honda-s2000-99",
   "publisher": "Honda Motor Europe",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "European launch release: 50th anniversary framing, successor to the S800; 240 PS at 8,300 rpm, redline 9,000; 120 PS/litre called a new record for a mass-produced normally aspirated engine; 11:1; 1,260 kg; 50:50; 6.2 s to 100 km/h; 241 km/h; Takanezawa alongside the NSX at about 12,000 a year."
  },
  {
   "ref": "honda-us-introduction",
   "title": "Honda S2000 -- Introduction",
   "url": "https://hondanews.com/en-US/releases/release-5cde0969c7be1d5f5d0747004c34c86f-honda-s2000-introduction",
   "publisher": "American Honda Motor Co.",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "US introduction release: front-mid-engine rear-drive roadster, 50/50 distribution, high X-bone frame with diagonal bracing fore and aft of the cockpit, 240 hp described as the highest specific output of any normally aspirated production engine in the world."
  },
  {
   "ref": "honda-us-powertrain",
   "title": "Honda S2000 -- Powertrain",
   "url": "https://hondanews.com/en-US/releases/release-5cf69ff7f30a01d81cc648004c34c870-honda-s2000-powertrain",
   "publisher": "American Honda Motor Co.",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "US powertrain release: 87 x 84 mm, 11:1, 240 hp at 8,300 rpm, 153 lb-ft at 7,500, 9,000 rpm rev limit, VTEC on both cams switching near 6,000, Torsen differential. Narrows the record claim to 120 hp per litre for any normally aspirated 2.0-litre production engine."
  },
  {
   "ref": "honda-2004-powertrain",
   "title": "2004 Honda S2000 - Powertrain",
   "url": "https://hondanews.com/en-US/releases/release-4f6f0a361216ba882f335c004c34c4b2-2004-honda-s2000-powertrain",
   "publisher": "American Honda Motor Co.",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Establishes the F22C1: 87.0 x 90.7 mm against 87.0 x 84.0, 11.1:1, 240 hp at 7,800 rpm, 162 lb-ft at 6,500, rev limit 8,000/8,200 against 8,800/9,000 with the drop attributed to piston speed; gears 1-4 down 4 per cent, 5th down 1, 6th up 2, final drive 4.100; carbon synchronisers; pull-type clutch."
  },
  {
   "ref": "honda-2004-changes",
   "title": "Honda S2000 Receives Enhanced Power and Improved Handling for 2004",
   "url": "https://hondanews.com/en-US/honda-corporate/releases/release-cbf1a42846ed0695af9940004c34c498-honda-s2000-receives-enhanced-power-and-improved-handling-for-2004",
   "publisher": "American Honda Motor Co.",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Model-year change list: front springs up 6.7 per cent, rear down 10, rear bar 27.2 to 25.4 mm, 16- to 17-inch wheels on 215/45 and 245/40, body weight up 24 lb to 2,835 lb, and explicit claims of more gradual fall-off at the limit and reduced sensitivity to disturbances."
  },
  {
   "ref": "honda-2008-body",
   "title": "2008 Honda S2000 -- Body",
   "url": "https://hondanews.com/en-US/releases/release-9746d3832ec8cc4c2ce84d004c34be70-2008-honda-s2000-body",
   "publisher": "American Honda Motor Co.",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Describes the high X-bone frame as high sills plus diagonal underbody bracing with braced bulkheads, and gives the CR aero figures: coefficient of lift down about 70 per cent with the hardtop removed and 80 per cent installed, hardtop about 50 lb."
  },
  {
   "ref": "honda-discontinue",
   "title": "Honda to Discontinue Production of the S2000 Sports Car",
   "url": "https://global.honda/en/newsroom/news/2009/4090127eng.html",
   "publisher": "Honda Motor Co., Ltd.",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "27 January 2009 announcement: production to end in all regions by the end of June 2009; cumulative sales of over 20,000 in Japan and more than 110,000 worldwide as of December 2008. This is the sales figure later sources repeat as a production total."
  },
  {
   "ref": "wikipedia-s2000",
   "title": "Honda S2000",
   "url": "https://en.wikipedia.org/wiki/Honda_S2000",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Source of the production table. Infobox gives 110,673 produced; the text says 110,673 was worldwide sales through 2008 and final official production was 113,889 by end-2009; per-market sales columns total 66,544 US, 21,661 Japan, 19,793 Europe, 2,585 Canada, with a caveat that methodologies differ. Also SSM 1995, Uehara, Takanezawa then Suzuka, Type S 1,755, CR 668 plus 31, VGS at 1.4 turns, UK GT pricing."
  },
  {
   "ref": "wikipedia-f20c",
   "title": "Honda F20C engine",
   "url": "https://en.wikipedia.org/wiki/Honda_F20C_engine",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Establishes that the F20C held the record for highest specific output of a mass-production naturally aspirated car engine at 125 hp per litre until the Ferrari 458 Italia entered production in 2010 at 126 hp per litre."
  },
  {
   "ref": "classic-s2000",
   "title": "Honda S2000 Market",
   "url": "https://www.classic.com/m/honda/s2000/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Market data as of August 2026: average recorded sale $50,659 across 503 tracked listings, 56 cars for sale, benchmark $29,652 scoped to the AP1, results from $6,600 on 2 September 2022 to $118,900 for a 2008 CR on 17 September 2025."
  },
  {
   "ref": "classic-cr",
   "title": "Honda S2000 CR - AP2 Market",
   "url": "https://www.classic.com/m/honda/s2000/ap2/cr/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "CR market data as of August 2026: benchmark $76,602 on a falling trend, average sale $79,336, three cars for sale, results from $23,500 on 12 April 2024 to $132,000 for an 8,000-mile 2008 car on 15 January 2026."
  },
  {
   "ref": "hagerty-buyers-guide",
   "title": "Your handy Honda S2000 (2000-09) buyer's guide",
   "url": "https://www.hagerty.com/media/buying-and-selling/your-handy-honda-s2000-2000-09-buyers-guide/",
   "publisher": "Hagerty",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Ownership guide: states the AP1 was set up loose; lists wheel bearings, oil consumption, the pre-mid-2002 banjo bolt oil-starvation issue, cracked valve retainers, AP2 gear pop-out and 2006-on dashboard blistering; gives US production as 66,860 and 355 units in 2009 including 31 CRs; number two values $24,000 in 2013 and $29,500 in February 2021."
  },
  {
   "ref": "grm-buyers-guide",
   "title": "Bringing 9000 rpm to the masses: Honda S2000 Buyer's Guide",
   "url": "https://grassrootsmotorsports.com/articles/honda-s2000-buyers-guide/",
   "publisher": "Grassroots Motorsports",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Independent buyer's guide: states the snap-oversteer reputation is real and describes cars leaving the road backwards; AP1 loose tune versus AP2 softened tune; oil consumption around a quart per 1,500 miles; timing-chain tensioner rattle; soft-top tears; compression target near 240 psi."
  },
  {
   "ref": "motorweek-ap1",
   "title": "2000 Honda S2000 (Round 2) Program #1935",
   "url": "https://motorweek.org/road_tests/2000_honda_s2000round_2program_1935/",
   "publisher": "MotorWeek",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Instrumented period test of a 2000 car: 0-60 mph in 6.2 s, quarter mile 14.8 s at 98 mph, 60-0 in 110 ft, base price $32,415; names the lack of low-speed torque as the main weakness."
  },
  {
   "ref": "slashgear-snap",
   "title": "What Is Snap Oversteer & Why Are Honda S2000s Prone To It?",
   "url": "https://www.slashgear.com/1992399/what-is-snap-oversteer-and-why-are-honda-s2000s-prone-to-it/",
   "publisher": "SlashGear",
   "sourceType": "journalism",
   "reliability": "low",
   "notes": "Used only as the counterweight: cites Larry Webster as finding the tail basically impossible to provoke and attributes the AP1's behaviour to a deliberately loose factory setup rather than a defect. No geometry detail, so not relied on for the mechanism."
  },
  {
   "ref": "nhtsa-recalls",
   "title": "Recalls by Vehicle: Honda S2000 (recallsByVehicle API)",
   "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=honda&model=s2000&modelYear=2006",
   "publisher": "National Highway Traffic Safety Administration",
   "sourceType": "government",
   "reliability": "high",
   "notes": "Queried for every model year 1999-2009. Returns 00V016000 and 00V316000 (front belt anchorage and retractor, 2000), 04V257000 (tail lamp lens dye, FMVSS 108), 06V270000 (manual text) and 13V246000 of 13 June 2013 for a brake booster unable to hold vacuum on 2006-2007 cars built 19 January to 13 November 2006. Other model years return none."
  },
  {
   "ref": "s2000club-ap2",
   "title": "AP2v1 Chassis - 2004 Honda S2000",
   "url": "https://www.s2000.club/ap2chassis.html",
   "publisher": "s2000.club",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Model-year hardware comparison: front bar unchanged at 26.5 mm, rear 27.2 to 25.4 mm, front springs up 6.7 per cent and rear down 10, new mono-tube dampers, rear toe from -0 deg 19 min to -0 deg 10 min, roll centre lowered, camber unchanged, tyres 16- to 17-inch."
  },
  {
   "ref": "s2ki-cr",
   "title": "Information thread: What makes a CR a CR?",
   "url": "https://www.s2ki.com/forums/s2000-cr-club-racer-edition-279/information-thread-what-makes-cr-cr-863727/",
   "publisher": "S2KI Honda S2000 Forums",
   "sourceType": "club-forum",
   "reliability": "low",
   "notes": "Owner-compiled identification thread, used for CR hardware and replica identification only, never for production or market figures: springs 7.0 kg/mm front against 4.75 and 6.2 rear against 4.88, damping up 65 and 40 per cent, steering 14.9:1 to 13.8:1, rear body brace, shift knob 12.6 mm lower."
  },
  {
   "ref": "honed-bumpsteer",
   "title": "AP1 S2000 Rear Bumpsteer Correction",
   "url": "https://honeddevelopments.com/ap1-s2000-rear-bumpsteer-correction/",
   "publisher": "Honed Developments",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Measured account of the AP1 rear toe curve: the stock curve gives substantial toe-out in droop, so static toe should be at least 3-4 mm total toe-in; under braking and cornering the rear tyres toe out significantly as the suspension extends, producing surprising oversteer."
  },
  {
   "ref": "jdmbuysell-ap2",
   "title": "2026 Honda S2000 AP2 Buyer's Guide",
   "url": "https://www.jdmbuysell.com/learn/honda/s2000/ap2/",
   "publisher": "JDMBUYSELL",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Specialist AP2 guide: Europe retained the 2.0-litre F20C through the full AP2 run while North America and Japan got the F22C1; drive-by-wire and VSA standard from 2006; Type V never sold outside Japan; Type S 1,755; CR 699, hardtop-only, US-only; estimates roughly 110,673 across both generations."
  },
  {
   "ref": "thedrive-broadarrow",
   "title": "This 25-Year-Old Honda S2000 Has Never Been Registered. It Just Sold for $95,000",
   "url": "https://www.thedrive.com/news/this-25-year-old-honda-s2000-has-never-been-registered-it-just-sold-for-95000",
   "publisher": "The Drive",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Reports a 42-mile, never-registered 2000 S2000 sold by Broad Arrow Auctions on 12 March 2025 for $95,000 including buyer's premium, described as likely a public-auction record for an AP1; the owner had sought $150,000 in 2020."
  }
 ],
 "claims": [
  {
   "section": "history",
   "claimText": "The S2000 was launched on 15 April 1999 to mark Honda's fiftieth anniversary, developed from the SSM concept shown at the 1995 Tokyo Motor Show and presented by Honda as the successor to the S800 and the first front-engined, rear-drive Honda since that car.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-s2000",
    "honda-eu-s2000-99"
   ]
  },
  {
   "section": "history",
   "claimText": "The S2000 was built at Honda's Takanezawa plant alongside the NSX at a planned rate of about 12,000 cars a year, with AP2 production moving to Suzuka.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "honda-eu-s2000-99",
    "wikipedia-s2000"
   ]
  },
  {
   "section": "specs",
   "claimText": "The 1,997 cc F20C produced 250 PS at 8,300 rpm in Japanese specification, which Honda gave as 125 PS per litre and described as world-leading, and 240 PS or 240 hp at the same crank speed for export markets, about 120 PS per litre; the figure was not beaten by a mass-production naturally aspirated car engine until the Ferrari 458 Italia entered production in 2010 at roughly 126 hp per litre.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "honda-2l-engine",
    "honda-eu-s2000-99",
    "honda-us-powertrain",
    "wikipedia-f20c"
   ]
  },
  {
   "section": "specs",
   "claimText": "Honda's own press material does not describe the specific-output record consistently: the American introduction release claims the highest specific output of any normally aspirated production engine in the world, while the American powertrain release for the same car narrows the claim to any normally aspirated 2.0-litre production engine.",
   "confidence": "high",
   "status": "disputed",
   "sourceRefs": [
    "honda-us-introduction",
    "honda-us-powertrain",
    "honda-2l-engine"
   ],
   "conflictNote": "The Honda US introduction release states the highest specific output of any normally aspirated production engine in the world. The Honda US powertrain release for the same model states the highest specific power output, 120 hp per litre, of any normally aspirated 2.0-litre production engine in the world. The Japanese release claims world-leading output at 125 PS per litre without defining the comparison class. No source consulted here resolves which scope Honda intended, so both wordings are reported rather than reconciled."
  },
  {
   "section": "specs",
   "claimText": "The F20C's upper rev limit is quoted differently by different sources: Honda's US powertrain release gives a 9,000 rpm rev limit and the European release gives a redline at 9,000 rpm, while Wikipedia places the tachometer redline at 8,800 rpm with fuel cut at 9,000 rpm and the separate F20C article gives 9,150 rpm.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "honda-us-powertrain",
    "honda-eu-s2000-99",
    "wikipedia-s2000",
    "wikipedia-f20c"
   ],
   "conflictNote": "Honda's own US and European releases both state 9,000 rpm without distinguishing redline from fuel cut. Wikipedia's S2000 article separates the two at 8,800 and 9,000 rpm; Wikipedia's F20C article states 9,150 rpm. The discrepancy is not resolved by any source consulted here, and no single redline figure is asserted."
  },
  {
   "section": "specs",
   "claimText": "The body is a steel monocoque built around what Honda calls a high X-bone frame, in which the centre floor tunnel ties the straightened front and rear side members, sills and central floor frame into an X on a single horizontal plane with diagonally braced bulkheads fore and aft of the cockpit; Honda claimed torsional rigidity equal to a closed body and bending rigidity superior to either an open or a closed conventional one.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "honda-body-structure",
    "honda-eu-s2000-99",
    "honda-2008-body",
    "honda-us-introduction"
   ]
  },
  {
   "section": "specs",
   "claimText": "For 2004 the engine was stroked from 84.0 mm to 90.7 mm to give the 2,157 cc F22C1, with peak power unchanged at 240 hp but arriving 500 rpm earlier and torque up to 162 lb-ft arriving 1,000 rpm earlier, at the cost of a rev limit cut from 8,800/9,000 rpm to 8,000/8,200 rpm because mean piston speed rose.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "honda-2004-powertrain",
    "honda-2004-changes",
    "wikipedia-s2000"
   ]
  },
  {
   "section": "history",
   "claimText": "The 2004 revision raised front spring rate 6.7 per cent, cut the rear 10 per cent, reduced the rear anti-roll bar from 27.2 mm to 25.4 mm, moved rear static toe from -0 deg 19 min to -0 deg 10 min, lowered the roll centre, and fitted 17-inch wheels on 215/45 and 245/40 tyres in place of the AP1's 16-inch 205/55 and 225/50.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "honda-2004-changes",
    "s2000club-ap2"
   ]
  },
  {
   "section": "problems",
   "claimText": "The mechanical basis of the AP1's reputation is its rear toe curve: the standard geometry produces substantial toe-out as the rear suspension moves into droop, so specialists recommend at least 3 to 4 mm of total static toe-in to keep the car out of toe-out when the rear unloads, and correction kits relocate the toe-link outer pivot to reverse the direction of toe change.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "honed-bumpsteer",
    "s2000club-ap2",
    "grm-buyers-guide"
   ]
  },
  {
   "section": "history",
   "claimText": "Honda's own 2004 material supports the view that the AP1's limit behaviour was considered a problem, listing more gradual fall-off at the limit and reduced sensitivity to disturbances among the year's improvements, and the AP2 changed the subframe inboard points, the knuckle outboard points and the upper A-arm rather than only spring and bar rates.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "honda-2004-changes",
    "s2000club-ap2"
   ]
  },
  {
   "section": "production",
   "claimText": "No single production total for the S2000 is asserted here, because the figures in circulation mix build and sales counts: Honda reported more than 110,000 worldwide as of December 2008 as a sales figure, Wikipedia's infobox carries 110,673 as a production total while its own text identifies 110,673 as sales through 2008 and 113,889 as production through 2009, and a specialist guide repeats roughly 110,673 as a build figure.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "honda-discontinue",
    "wikipedia-s2000",
    "jdmbuysell-ap2"
   ],
   "conflictNote": "Honda's January 2009 announcement gives cumulative sales of more than 110,000 units worldwide as of December 2008. Wikipedia's infobox states 110,673 produced; the same article's text states that 110,673 was Honda's reported worldwide sales through 2008 and that the final official production figure was 113,889 by the end of 2009, and warns that the per-market columns use different methodologies. JDMBUYSELL repeats about 110,673 as an all-generation build estimate. The build-versus-sales distinction is not resolved by any source consulted here, so productionTotal is left null."
  },
  {
   "section": "production",
   "claimText": "United States totals also disagree: Wikipedia's per-market table gives 66,544 for the United States across the whole run, while Hagerty's buyer's guide states total United States production of 66,860.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "wikipedia-s2000",
    "hagerty-buyers-guide"
   ],
   "conflictNote": "Wikipedia's market table gives 66,544 United States units, expressly labelled as sales and flagged as methodologically inconsistent with the other columns. Hagerty states total United States production as 66,860. The 316-car difference is not explained or resolved by any source consulted here. This is not resolved by any source consulted here."
  },
  {
   "section": "production",
   "claimText": "Two sub-totals are agreed across sources: 699 S2000 CRs were built for the United States across the 2008 and 2009 model years, of which 31 were 2009 cars, and 1,755 Type S cars were sold only in Japan.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-s2000",
    "jdmbuysell-ap2",
    "s2ki-cr"
   ]
  },
  {
   "section": "specs",
   "claimText": "Honda states that the CR's front and rear spoilers reduce the coefficient of lift by about 70 per cent with the hardtop removed and about 80 per cent with the aluminium hardtop installed, the hardtop itself weighing approximately 50 lb, figures given by Honda alone and not independently measured in any test consulted here.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "honda-2008-body",
    "s2ki-cr"
   ]
  },
  {
   "section": "problems",
   "claimText": "The S2000's recall record is light: NHTSA lists two 2000-model-year seat-belt campaigns, a 2004 tail-lamp lens non-compliance with FMVSS 108, an owner's-manual campaign, and a June 2013 recall of 2006-2007 cars built between 19 January and 13 November 2006 for a brake booster unable to maintain vacuum, with no campaigns for model years 2001-2003, 2005, 2008 or 2009; this rests on the NHTSA database alone because it is the primary record rather than a secondary account of it.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "nhtsa-recalls"
   ]
  },
  {
   "section": "market",
   "claimText": "As of August 2026, classic.com records an average recorded sale of $50,659 across 503 tracked S2000 listings with an AP1-scoped benchmark of $29,652, results ranging from $6,600 in September 2022 to $118,900 for a 2008 CR in September 2025, while the CR is tracked separately at a $76,602 benchmark on a falling trend, an average of $79,336, and results from $23,500 in April 2024 to $132,000 in January 2026.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-s2000",
    "classic-cr"
   ]
  },
  {
   "section": "market",
   "claimText": "Hagerty, reporting a six-figure result for a 985-mile CR, stated that the price was unlikely to be repeated and should be treated as an outlier rather than as a benchmark, a caution consistent with the falling CR trend line classic.com shows as of August 2026.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "classic-cr",
    "classic-s2000"
   ]
  },
  {
   "section": "history",
   "claimText": "Independent assessment of the AP1's limit behaviour is not unanimous: Grassroots Motorsports and Hagerty both describe it as deliberately set up loose, with cars leaving the road backwards as a result, while SlashGear cites Larry Webster as finding the tail basically impossible to provoke.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "grm-buyers-guide",
    "hagerty-buyers-guide",
    "slashgear-snap"
   ]
  },
  {
   "section": "specs",
   "claimText": "The CR raised front spring rate from 4.75 to 7.0 kg/mm and rear from 4.88 to 6.2 kg/mm with damping up 65 per cent front and 40 per cent rear, quickened the rack from 14.9:1 to 13.8:1, and added a rear body brace in the well vacated by the folding roof; the Japan-only Type S of the same years shares the aero and bracing but keeps a road-biased tune and the soft top.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "s2ki-cr",
    "jdmbuysell-ap2",
    "wikipedia-s2000"
   ]
  },
  {
   "section": "problems",
   "claimText": "AP1-specific faults dominate the reliability record: oil consumption of roughly a quart per 1,500 miles, the pre-mid-2002 oil-feed banjo bolt arrangement associated with high-rpm oil starvation and cylinder scoring, and intake valve retainers that crack after a mechanical over-rev, the last of which the F22C1 addressed with upgraded parts.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "hagerty-buyers-guide",
    "grm-buyers-guide",
    "jdmbuysell-ap2"
   ]
  },
  {
   "section": "market",
   "claimText": "Values moved slowly and then split rather than rising evenly: Hagerty put a number two condition car at $24,000 in 2013 and $29,500 in February 2021, while a 42-mile, never-registered 2000 car made $95,000 including buyer's premium at Broad Arrow on 12 March 2025, reported as a probable public-auction record for an AP1.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "hagerty-buyers-guide",
    "thedrive-broadarrow",
    "classic-s2000"
   ]
  },
  {
   "section": "history",
   "claimText": "Honda announced on 27 January 2009 that S2000 production would end in all regions by the end of June 2009, after sales had fallen from 2006 and collapsed during the 2008 automotive crisis, and the planned successor was abandoned; European AP2 cars had retained the 2.0-litre F20C throughout, and independent testing put a 2000 car at 6.2 seconds to 60 mph against Honda's European claim of 6.2 seconds to 100 km/h.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "honda-discontinue",
    "wikipedia-s2000",
    "jdmbuysell-ap2",
    "motorweek-ap1",
    "honda-eu-s2000-99"
   ]
  }
 ]
};
