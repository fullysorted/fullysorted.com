/**
 * Researched model draft — Porsche 911 SC (1978-1983).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedNineElevenSc = {
 "slug": "porsche/911-sc",
 "make": "Porsche",
 "model": "911 SC",
 "generation": "G-series (impact bumper)",
 "generationCode": "911 SC",
 "trim": null,
 "yearStart": 1978,
 "yearEnd": 1983,
 "bodyStyles": [
  "2-door coupe",
  "2-door Targa with removable roof panel and fixed roll hoop",
  "2-door Cabriolet with manually operated three-bow fabric hood (1983 model year only)"
 ],
 "engines": [
  "2,994 cc air-cooled SOHC flat-six, Type 930/03, pressure-cast aluminium crankcase, Nikasil cylinders, dry sump, Bosch K-Jetronic, 180 PS at 5,500 rpm (model years 1978-1979)",
  "2,994 cc Type 930/09, compression raised to 8.6:1 with revised valves and cam timing, 188 PS (model year 1980, markets outside the United States and Japan)",
  "2,994 cc Type 930/10, compression 9.8:1, 204 PS at 5,900 rpm (model years 1981-1983, markets outside the United States and Japan)",
  "2,994 cc Type 930/07 United States specification with Lambda sensor and three-way catalyst; quoted output differs between sources at either 180 hp throughout or 172 hp from 1980",
  "2,994 cc Type 930/18 with 935 cylinder heads, 10.3:1 compression and Kugelfischer mechanical injection, 255 bhp at 7,000 rpm, fitted to the 911 SC/RS (Type 954)"
 ],
 "productionTotal": null,
 "productionNotes": "No single production total for the 911 SC survives contact with a second source. Wikipedia states 58,914 cars. Supercar Nostalgia's text says approximately 58,000. StuttCars states 60,625. Both StuttCars and Supercar Nostalgia publish the same year-by-year table broken down by body style - 1978: 5,178 coupes and 4,308 Targas; 1979: 5,705 and 5,284; 1980: 4,831 and 4,272; 1981: 4,876 and 3,120; 1982: 5,892 and 4,163; 1983: 5,761 coupes, 2,688 Targas and 4,187 cabriolets - and that table sums to 60,265, which matches neither of the totals printed alongside it. The gap between 58,914 and roughly 60,265 is about 1,350 cars, close to a full year of Targa output, and nothing consulted here explains it, so no single figure is asserted. For scale, Porsche states that 198,496 G-series 911s were built across the whole 1973-1989 run, which would put the SC at a little under a third of the impact-bumper era. The 1983 cabriolet count is contested on the same pattern: Wikipedia gives 4,214 for the first year against the 4,187 in the shared table, while RM Sotheby's states 1,718 of them were United States cars and the Porsche Club of America gives approximately 1,700 for that market, so the American share is consistent even where the world total is not. Special-edition counts are worse. The 1980 Weissach Edition for North America is given as 408 by Wikipedia and the Porsche Club of America, 400 by Supercar Nostalgia and 468 by StuttCars; the 1982 Ferry Porsche Edition is 200 in three accounts and 266 in a fourth. The 1984 SC/RS is variously 20 or 21 cars.",
 "notableTrims": [
  {
   "name": "911 SC (1978-1979, 180 PS)",
   "note": "The launch specification, with chrome window surrounds and headlight rings for 1978 only; black anodised surrounds and body-coloured rings arrived for 1979. The least powerful SC and the one closest in character to the outgoing 2.7."
  },
  {
   "name": "911 SC (1980, 188 PS)",
   "note": "A single-year engine, Type 930/09, with revised valves and cam timing, 8.6:1 compression, a new oil cooler and a revised timing-chain tensioner idler arm. Sold outside the United States and Japan only."
  },
  {
   "name": "911 SC (1981-1983, 204 PS)",
   "note": "The 9.8:1 Type 930/10 engine, the most powerful standard SC and the specification most European buyers seek. Cars from 1981 also carry the 17-digit VIN and front wing side repeaters; Fuchs forged wheels became standard for 1982."
  },
  {
   "name": "911 SC Targa",
   "note": "Available throughout the run and, on classic.com's August 2026 figures, consistently valued below the coupe. Targa output fell sharply in 1983 as the cabriolet arrived, from 4,163 cars to 2,688."
  },
  {
   "name": "911 SC Cabriolet (1983)",
   "note": "Built for one model year only, making it the sole fully open G-series 911 before the Carrera 3.2 took over. Reinforced shell, manual three-bow hood, right-hand drive from February 1983. Rarest of the three bodies, and the cheapest to buy."
  },
  {
   "name": "Weissach Edition (M439, 1980)",
   "note": "A North American special in Platinum or Black Metallic with grey leather, fog lamps, Bilstein dampers, electric sunroof and Fuchs wheels. Numbers are given variously as 400, 408 or 468 cars."
  },
  {
   "name": "Ferry Porsche Edition (1982)",
   "note": "Meteor Metallic with burgundy leather and Turbo-pattern spoilers, built to mark a company anniversary the sources describe inconsistently. Numbers are given as either 200 or 266."
  },
  {
   "name": "911 SC/RS (Type 954, 1984)",
   "note": "A Group B homologation evolution built after standard SC production ended: 935 heads, Kugelfischer injection, 255 bhp on the road and around 270 in rally trim, aluminium doors and front lid, thin glass, roughly 1,057 kg. Twenty or twenty-one cars."
  }
 ],
 "specs": {
  "layout": "Rear-mounted longitudinal air-cooled flat-six, rear-wheel drive",
  "chassis": "Galvanised steel unitary body; MacPherson-strut front with longitudinal torsion bars, semi-trailing-arm rear with transverse torsion bars, anti-roll bars front and rear",
  "engine": "2,994 cc air-cooled SOHC flat-six, two valves per cylinder, pressure-cast aluminium crankcase, Nikasil cylinders, dry-sump lubrication",
  "bore_stroke": "95.0 mm x 70.4 mm",
  "compression": "8.5:1 (1978-1979); 8.6:1 (1980); 9.8:1 (1981-1983, markets outside the US and Japan)",
  "fuel_system": "Bosch K-Jetronic continuous injection; United States cars from 1980 with Lambda sensor and three-way catalytic converter",
  "power": "180 PS (1978-1979), 188 PS (1980), 204 PS at 5,900 rpm (1981-1983) per Porsche Classic; United States output stated as either 180 hp throughout or 172 hp from 1980, depending on source",
  "torque": "265 Nm (195 lb ft) at 4,200 rpm on the 180 and 188 PS engines; 267 Nm (197 lb ft) at 4,300 rpm on the 204 PS engine",
  "transmission": "Type 915 five-speed manual transaxle",
  "weight": "Approximately 1,160 kg (coupe) and 1,210 kg (Targa) per Supercar Nostalgia; United States cars roughly 30 kg heavier",
  "acceleration": "6.4 s to 62 mph quoted; 6.5 s to 60 mph and 18 s to 100 mph recorded by Motor Sport in May 1978 on a 180 bhp car",
  "top_speed": "Approximately 140 mph; Motor Sport recorded over 140 mph in period",
  "brakes": "Ventilated discs front and rear with servo assistance",
  "wheels": "15-inch ATS cast aluminium standard from 1978; forged Fuchs standard from 1982",
  "fuel_tank": "80 litres, mounted under the front lid",
  "fuel_consumption": "16-18 mpg recorded in period, against 21-plus mpg for the superseded 2.7"
 },
 "summary": "The Porsche 911 SC (1978-1983) is the car that kept the 911 alive. For the 1978 model year Porsche swept away the 2.7-litre 911 and the Carrera 3.0 and offered two models only: the SC and the Turbo. Its 2,994 cc flat-six carried a pressure-cast aluminium crankcase in place of the magnesium that had made the 2.7 fragile, and output climbed in two steps from 180 PS to 188 and then 204 for markets outside the United States and Japan. Management had intended the SC as the 911's last generation before the front-engined 928 took over; instead it outsold the 928 by a wide margin and, in 1981, a new chief executive extended the production plan indefinitely. The 1983 model year brought the first fully open 911, a cabriolet with a manually operated three-bow hood. Somewhere between roughly 58,900 and 60,300 cars were built, depending on which source is consulted. Today the SC sits between the fragile 2.7 and the more developed Carrera 3.2 as the least expensive air-cooled 911 that can be used properly.",
 "history": "## Rationalisation, 1977\nFor the 1978 model year Porsche collapsed a sprawling 911 range into two cars. The 2.7-litre 911 and 911 Lux and the 3.0-litre Carrera all disappeared; what remained was the 911 SC and the 911 Turbo. Porsche's own account of the G-series describes the SC as adopting the Carrera's widened rear wings along with its three litres of displacement, and Motor Sport's May 1978 test framed the change plainly: the SC replaced a 165 bhp 2.7 Lux and a 200 bhp Carrera 3.0 with a single 180 bhp car that gave away peak power to the Carrera but beat it on flexibility and driveability. That trade - less headline output, more usable engine - is the whole argument for the SC, and it has not changed in fifty years.\n\n## The Aluminium Three-Litre\nThe engine is where the SC earns its reputation. Displacement is 2,994 cc from a 95 mm bore and 70.4 mm stroke, with a single overhead camshaft per bank, two valves per cylinder, Nikasil-lined barrels, dry-sump lubrication and Bosch K-Jetronic continuous injection. The significant change was the crankcase: pressure-cast aluminium in place of the magnesium used since 1968. Magnesium cases were light but soft, and the head studs passing through them had a habit of pulling their threads out, which is the defining structural weakness of the 2.7. Aluminium did not eliminate head-stud trouble; specialist accounts note that it moved the failure from the case threads to the studs themselves. It did produce an engine that tolerates mileage and heat in a way the 2.7 does not, and that is the single reason the SC is the cheapest air-cooled 911 an owner can reasonably use hard.\n\n## Three Power Steps, and a Market Split\nOutput rose twice. Porsche Classic gives 180 PS for the 1978 and 1979 model years, 188 PS for 1980 and 204 PS from 1981 to the end, while Porsche's G-series press kit dates the same two increases to late 1979 and 1980 - the same sequence expressed as production timing rather than model years. The 188 PS engine brought a compression rise to 8.6:1, revised valves and cam timing, a new oil cooler and a revised timing-chain tensioner idler arm; the 204 PS engine went to 9.8:1. Cars for the United States and Japan did not follow. What American engines actually produced is not agreed: Wikipedia states they kept the lower-compression 180 PS unit throughout, an RM Sotheby's catalogue for a 1983 United States cabriolet quotes 180 bhp, and the Porsche Club of America states that emissions equipment and a restricted intake manifold cut output to 172 hp from 1980. A buyer comparing a European 204 PS car with a federal one is comparing two quite different machines.\n\n## The Model That Was Meant to Be the Last\nUnder Ernst Fuhrmann the SC was intended as the 911's closing chapter, with the front-engined 928 taking over as flagship. It did not work out that way. The SC outsold the 928 heavily - Supercar Nostalgia puts the ratio at roughly twenty to one - and in 1981 Peter Schutz arrived as chief executive and reversed the decision, by the widely repeated account extending the 911's production line on Helmuth Bott's wall chart out past the edge of the paper. Porsche's own retrospective is drier, noting only that some of the press read the two-model range as the end of the sports car and were wrong. Either way, the SC is the car that was still selling while the argument was being had.\n\n## Open Air, and the Handover\nThe last act was a roof, or the removal of one. A cabriolet prototype on the wide Turbo body, with four-wheel drive, appeared at the 1981 Frankfurt show; the production car was shown at Geneva in March 1982 and built from that October at DM 64,500, the first fully open 911 and the first Porsche convertible in nearly two decades. Its three-bow hood used panel elements covering about half the roof area rather than narrow steel bows, and Porsche rated the structure to 245 km/h. It sold immediately. For 1984 the 3.2-litre Carrera replaced the SC and brought with it the pressure-fed chain tensioners that were the fix for the SC's most quoted mechanical anxiety.",
 "marketNotes": "As of August 2026, classic.com's Porsche 911 SC market benchmark stands at $63,732, with the coupe at $64,811, the Targa at $55,375 and the cabriolet at $49,927. That ordering is worth noting: the cabriolet is the rarest of the three bodies and the cheapest to buy. The recorded spread is very wide. As of August 2026 classic.com's high for the SC market is $515,000 for a 1982 car sold in November 2025, an outlier it does not characterise, against a low of $2,016 for a 1981 Targa in October 2024. Auction evidence sits in a far narrower band. RM Sotheby's sold a 9,230-mile United States cabriolet from the Taj Ma Garaj collection for $52,640, and Gooding sold a European-specification 204 bhp cabriolet at Amelia Island in 2025 for $62,720. Published guidance runs 30,000 to 70,000 pounds in the United Kingdom and roughly 35,000 to 90,000 euros in Europe as of 2024, with condition mattering more than body style and a project car and a sorted one separated by the price of a full restoration. For position, as of August 2026 the Carrera 3.2 coupe benchmark is $83,205 and the 930 Turbo averages $171,008 across 740 recorded sales, so the SC remains the cheapest way into the impact-bumper era.",
 "whatToLookFor": "Structure first. SC shells are galvanised but less thoroughly than the later Carrera 3.2, and the areas that matter are the sills, the bottom rear corners of the door apertures, the A-pillars and windscreen surround, the jacking points, the front wing tops, the rear torsion-bar housing and the so-called kidney bowls behind the B-pillars. A leaking windscreen seal drains into the pedal box, so lift the carpet. UK guidance puts serious corrosion work at 7,000 to 10,000 pounds. Then establish which car it is. European 204 PS cars, 188 PS 1980 cars and federal cars are three different propositions, and 1981-on cars carry the 17-digit VIN that makes identification straightforward. Ask which timing-chain tensioners are fitted and whether the Carrera pressure-fed conversion has been done, since the answer sets the maintenance horizon. Ask for head-stud history: most cars have either broken studs or receipts for fixing them, and the receipts are worth money. Look for a pop-off valve on the airbox, and check the airbox self-tapping screws are seated rather than standing proud, which indicates a past backfire. Drive it for the gearbox. A 915 that baulks into second when warm, or refuses lower gears, is telling you about linkage, oil and synchros; a properly rebuilt one shifts cleanly, but rebuilds run to four or five figures. Check the clutch has been converted from the rubber-centred original. On a cabriolet, work the hood through its full travel and inspect the frame and rear window.",
 "commonProblems": "The airbox is the fault the SC is known for. A backfire through the Bosch K-Jetronic intake raises pressure inside the plastic airbox and splits it or tears out its self-tapping screws; the resulting vacuum leak stops the engine starting, and a dealer replacement can pass 1,000 dollars before labour. The standard remedy is a spring-loaded pop-off valve fitted to the box to vent the pressure, and cars from 1980 to 1983 with the internal metal manifold are more awkward to modify. Head studs are the second recurring theme. Porsche adopted Dilavar studs from 1977 and issued a technical bulletin covering their fitment; on the SC's aluminium case the failure mode moved from thread pull-out to outright stud breakage, and the symptom is persistent oil weeping at the head joint. Timing-chain tensioners are not oil-pressure fed. The idler arms were revised for 1983 and the problem was only fully resolved by the Carrera-style pressure-fed units of 1984, which are routinely retrofitted. Early rubber-centred clutches fail around 45,000 miles and can take other parts with them. The 915 gearbox baulks when worn, with rebuilds quoted at 4,000 to 10,000 pounds. Beyond that: heat exchangers rot, the auxiliary air valve and the K-Jetronic metering head suffer from ethanol in modern fuel, fuel-pump relays fail, and the ceramic fuses corrode.",
 "valueTrajectory": "The SC spent decades as the cheap way into an air-cooled 911, which is why so many were modified, backdated or run to destruction. That position has eroded steadily since the air-cooled market re-rated in the mid-2010s, and the current picture is of a car that has stopped being the bargain without yet becoming expensive. As of August 2026 classic.com shows the SC coupe benchmark at $64,811 against $83,205 for the Carrera 3.2 coupe - a discount of roughly a fifth for a car that is a year or two older, one gearbox generation behind and down on power. The 930 Turbo, at an average of $171,008 across 740 recorded sales as of August 2026, is a different market entirely. Within the SC range the coupe leads, the Targa follows and the 1983 cabriolet trails despite being the scarcest body, which suggests the open cars are the part of the range with the most room left. The recorded extremes, from $2,016 for a 1981 Targa to $515,000 for a 1982 car, describe a market that pays for documentation and originality and almost nothing for a tired shell.",
 "overallConfidence": "high",
 "sources": [
  {
   "ref": "porsche-classic-sc",
   "title": "Model 911 SC",
   "url": "https://www.porsche.com/international/_iceland_/accessoriesandservice/classic/models/911-g/911-sc/",
   "publisher": "Porsche AG (Porsche Classic)",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Porsche's own model-year record: 180 PS for MY1978-79, 188 PS for MY1980, 204 PS for MY1981-83; coupe, Targa and Cabriolet from 1983; 15-inch ATS wheels standard; chrome trim in 1978, black anodised from 1979."
  },
  {
   "ref": "porsche-newsroom-gseries",
   "title": "50 years of the Porsche 911 (G-Series) - the evergreen Porsche sports car",
   "url": "https://newsroom.porsche.com/en/press-kits/60-Years-Porsche-911/50-Jahre-Porsche-911-(G-Serie)-%E2%80%93-Der-Dauerbrenner-von-Porsche.html",
   "publisher": "Porsche AG",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Source for the 1977 rationalisation to SC and Turbo, the SC taking the Carrera's widened wings, 180 rising to 188 then 204 PS in late 1979 and 1980, cabriolet deliveries from January 1983, and 198,496 G-series cars built 1973-1989."
  },
  {
   "ref": "porsche-newsroom-cabrio",
   "title": "From the 356 'No. 1' Roadster to the 911 SC Cabriolet",
   "url": "https://newsroom.porsche.com/en_AU/2019/history/porsche-911-cabriolet-history-17144.html",
   "publisher": "Porsche AG",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Cabriolet record: four-wheel-drive Turbo-bodied prototype at the 1981 Frankfurt IAA, production premiere at Geneva in March 1982, DM 64,500, three-bow hood of panel elements covering half the roof, structure rated to 245 km/h."
  },
  {
   "ref": "motorsport-1978-test",
   "title": "The Porsche 911SC Sport",
   "url": "https://www.motorsportmagazine.com/archive/article/may-1978/92/porsche-911sc-sport/",
   "publisher": "Motor Sport",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Period May 1978 road test: 0-60 in 6.5 s, 0-100 in 18 s, over 140 mph, 16-18 mpg against 21-plus for the 2.7, price just under 15,000 pounds, 2,994 cc at 95 x 70.4 mm and 180 bhp, replacing the 165 bhp 2.7 Lux and 200 bhp Carrera 3.0."
  },
  {
   "ref": "pca-model-guide",
   "title": "Model Guide: 911 SC - The beginning of another air-cooled golden era",
   "url": "https://pca.org/news/model-guide-911-sc-the-beginning-of-another-air-cooled-golden-era",
   "publisher": "Porsche Club of America",
   "sourceType": "club-forum",
   "reliability": "medium",
   "notes": "Club model guide: SC read as Super Carrera, magnesium-to-aluminium crankcase, US output of 180 then 172 hp from 1980 with a constricted intake manifold, exploding airboxes and the pop-off valve fix, tensioner idler arms revised for 1983 and resolved by Carrera units in 1984, clutches failing near 45,000 miles, Weissach 408, Ferry Porsche 200, SC/RS 20."
  },
  {
   "ref": "stuttcars-sc",
   "title": "Porsche 911 SC (1978 - 1983)",
   "url": "https://www.stuttcars.com/porsche-911-sc-g-series-1978-1983/",
   "publisher": "StuttCars",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Publishes the year-by-year production table by body style and states a total of 60,625; gives Weissach Edition 468 and Ferry Porsche Edition 266; also 0-60 in 6.3 s and kerb weight near 1,160 kg."
  },
  {
   "ref": "supercarnostalgia-sc",
   "title": "Porsche 911 SC Guide",
   "url": "https://supercarnostalgia.com/blog/porsche-911-sc",
   "publisher": "Supercar Nostalgia",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Engine types 930/03, /07, /08, /09 and /10 at 2,994 cc, 95 x 70.4 mm, 8.5:1, aluminium crankcase in place of magnesium, Nikasil barrels, K-Jetronic and torque figures; the same production table with a stated total near 58,000; cabriolet from October 1982, RHD from February 1983; Weissach 400; SC outselling the 928 about twenty to one."
  },
  {
   "ref": "supercarnostalgia-scrs",
   "title": "Porsche 911 SC RS (954) Guide",
   "url": "https://supercarnostalgia.com/blog/porsche-911-sc-rs-954",
   "publisher": "Supercar Nostalgia",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "States 21 SC/RS built, chassis WP0ZZZ91ZES110001 to 021 invoiced January to April 1984; Type 930/18 with 935 heads and Kugelfischer injection, 255 bhp on the road and 270-290 in competition; 1,057 kg; aluminium doors and front lid."
  },
  {
   "ref": "wikipedia-911-classic",
   "title": "Porsche 911 (classic)",
   "url": "https://en.wikipedia.org/wiki/Porsche_911_(classic)",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Gives SC production as 58,914 and first-year cabriolet sales as 4,214; states US cars kept the lower-compression 180 PS engine throughout; Weissach M439 at 408 and Ferry Porsche at 200; notes the first use of the designation since the 356 SC and Peter Schutz extending the programme."
  },
  {
   "ref": "nine-werks-guide",
   "title": "Tips for Buying a Porsche 911 SC: The Definitive Guide",
   "url": "https://9werks.co.uk/articles/ultimate-porsche-911-sc-buyers-guide/",
   "publisher": "9WERKS",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Year-by-year changes including 1980 at 8.6:1 with new oil cooler and tensioner idler arm, 1981 VIN change and 9.8:1 with 204 hp, 1982 Fuchs standard; rust areas including kidney bowls at 7,000-10,000 pounds; 915 rebuilds at 4,000-10,000 pounds; ceramic fuses; UK values of 30,000-70,000 pounds."
  },
  {
   "ref": "elferspot-sc-guide",
   "title": "Porsche 911 SC Buyer's Guide - allegedly the last 911er",
   "url": "https://www.elferspot.com/en/magazine/the-porsche-911-sc-buyers-guide-allegedly-the-last-911er/",
   "publisher": "Elferspot",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Establishes the SC as Ernst Fuhrmann's intended last 911 alongside the 924 and 928, the name referencing the final 356 SC, and power tiers of 180 hp with 265 Nm, 188 hp and 204 hp with 267 Nm at 9.8:1; also head-stud oil leaks, K-Jetronic and fuel-pump relay faults, rust zones and 2024 values of roughly 35,000-90,000 euros."
  },
  {
   "ref": "klassikats-headstud",
   "title": "The 911 Head Stud",
   "url": "https://www.klassikats.com/2020/02/10/the-911-head-stud/",
   "publisher": "Klassik ATS",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Head-stud history: Dilavar adopted in 1977 under Technical Service Bulletin 7704, and the distinction that pre-1978 magnesium cases suffered thread pull-out while 1978-on aluminium cases shifted the failure to breakage of the studs."
  },
  {
   "ref": "pelican-popoff",
   "title": "Porsche 911 CIS Pop-Off Valve Installation",
   "url": "https://www.pelicanparts.com/techarticles/911_pop_off_valve/911_pop_off_valve.htm",
   "publisher": "Pelican Parts",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Explains why CIS airboxes crack: backfire pressure splits the housing and the vacuum leak prevents starting. Covers 1978-1983 cars, notes the internal metal manifold on 1980-1983 boxes, and puts dealer replacement above 1,000 dollars."
  },
  {
   "ref": "pelican-sc-name",
   "title": "'SC' DOES stand for Super Carrera: The Official Document",
   "url": "http://forums.pelicanparts.com/porsche-911-technical-forum/364873-sc-does-stand-super-carrera-official-document.html",
   "publisher": "Pelican Parts Forums",
   "sourceType": "club-forum",
   "reliability": "low",
   "notes": "Documents the designation argument: quotes German Porsche copy saying the letters recall a 356 of the same designation and mean 'Super Carrera', alongside members proposing Sport Coupe and others objecting that no period documentation supports any expansion."
  },
  {
   "ref": "classic-sc",
   "title": "Porsche 911 SC Market",
   "url": "https://www.classic.com/m/porsche/911/g-body/sc/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Market data as of August 2026: SC benchmark $63,732, with coupe $64,811, Targa $55,375 and cabriolet $49,927; recorded high $515,000 for a 1982 car on 2 November 2025 and low $2,016 for a 1981 Targa on 28 October 2024."
  },
  {
   "ref": "classic-carrera32",
   "title": "Porsche 911 Carrera - 3.2 Liter Market",
   "url": "https://www.classic.com/m/porsche/911/g-body/carrera-32/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Positioning as of August 2026: Carrera 3.2 coupe benchmark $83,205, Targa $68,308 and cabriolet $59,491 across 1984-1989, each above the equivalent SC body style."
  },
  {
   "ref": "classic-930",
   "title": "Porsche 911 Turbo - 930 Market",
   "url": "https://www.classic.com/m/porsche/911/930/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Positioning as of August 2026: the 930 Turbo averages $171,008 across 740 recorded sales spanning $17,500 to $4.3 million, placing the SC's contemporary Turbo sibling in a separate market."
  },
  {
   "ref": "rm-tajmagaraj-cabrio",
   "title": "1983 Porsche 911 SC Cabriolet, The Taj Ma Garaj Collection",
   "url": "https://rmsothebys.com/auctions/tg19/lots/r0016-1983-porsche-911-sc-cabriolet/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold for $52,640 from the Taj Ma Garaj Collection. Chassis WP0EA0916DS171442, 9,230 miles. Catalogue quotes 180 bhp for US specification and calls the car one of 1,718 SC cabriolets built for the US market for 1983."
  },
  {
   "ref": "gooding-amelia-cabrio",
   "title": "1983 Porsche 911 SC Cabriolet",
   "url": "https://www.goodingco.com/lot/1983-porsche-911-sc-cabriolet/",
   "publisher": "Gooding Christie's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold for $62,720 at Amelia Island in 2025 from the Jim Watson Collection. Chassis WP0ZZZ91ZDS151041, European specification, 2,994 cc SOHC flat six with K-Jetronic quoted at 204 bhp."
  }
 ],
 "claims": [
  {
   "section": "history",
   "claimText": "For the 1978 model year Porsche rationalised the 911 range to two models, the 911 SC and the 911 Turbo, retiring the 2.7-litre 911 and 911 Lux and the 3.0-litre Carrera; the SC adopted the Carrera's widened rear wings and three-litre displacement.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "porsche-newsroom-gseries",
    "motorsport-1978-test",
    "porsche-classic-sc"
   ]
  },
  {
   "section": "specs",
   "claimText": "The SC engine displaces 2,994 cc from a 95.0 mm bore and 70.4 mm stroke, with one overhead camshaft per bank, two valves per cylinder, Nikasil-lined cylinders, dry-sump lubrication and Bosch K-Jetronic injection, and replaced the magnesium crankcase used since 1968 with a pressure-cast aluminium unit.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "supercarnostalgia-sc",
    "motorsport-1978-test",
    "pca-model-guide",
    "klassikats-headstud"
   ]
  },
  {
   "section": "specs",
   "claimText": "Porsche Classic records output of 180 PS for model years 1978-1979, 188 PS for 1980 and 204 PS for 1981-1983, while Porsche's G-series press kit dates the same two increases to late 1979 and 1980; the 1980 engine went to 8.6:1 compression with revised valves, cam timing, a new oil cooler and a revised tensioner idler arm, and the 1981 engine to 9.8:1.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "porsche-classic-sc",
    "porsche-newsroom-gseries",
    "nine-werks-guide",
    "elferspot-sc-guide"
   ]
  },
  {
   "section": "specs",
   "claimText": "Output for the United States market is not agreed between sources: it is stated either as 180 hp for the whole run or as 180 hp until 1979 falling to 172 hp from 1980.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "wikipedia-911-classic",
    "pca-model-guide",
    "rm-tajmagaraj-cabrio",
    "supercarnostalgia-sc"
   ],
   "conflictNote": "Wikipedia states that United States cars retained the lower-compression 180 PS engine throughout the run, and an RM Sotheby's catalogue for a 1983 US-market cabriolet quotes 180 bhp. The Porsche Club of America's model guide states that emissions equipment and a constricted intake manifold reduced US output to 172 hp from 1980. Supercar Nostalgia lists a separate US engine type, 930/07, without quoting a figure. Not resolved by any source consulted here."
  },
  {
   "section": "production",
   "claimText": "Published totals for 911 SC production disagree, ranging from 58,914 to 60,625 cars, and no single figure is asserted here.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "wikipedia-911-classic",
    "stuttcars-sc",
    "supercarnostalgia-sc"
   ],
   "conflictNote": "Wikipedia states 58,914. StuttCars states 60,625. Supercar Nostalgia's text says approximately 58,000. StuttCars and Supercar Nostalgia publish an identical year-by-year table by body style which sums to 60,265, agreeing with neither of the totals printed beside it. Nothing consulted here explains the roughly 1,350-car gap, so it is not resolved and productionTotal is left null."
  },
  {
   "section": "production",
   "claimText": "First-year 911 SC Cabriolet production is given as either 4,214 or 4,187 cars worldwide, of which the United States share is consistently reported at approximately 1,700 to 1,718.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "wikipedia-911-classic",
    "stuttcars-sc",
    "supercarnostalgia-sc",
    "rm-tajmagaraj-cabrio",
    "pca-model-guide"
   ],
   "conflictNote": "Wikipedia gives 4,214 cabriolets sold in the introductory year. The production tables published by StuttCars and Supercar Nostalgia both give 4,187 for 1983. RM Sotheby's states 1,718 were built for the United States and the Porsche Club of America gives approximately 1,700 for that market, so the American share is broadly consistent while the world total is not. The 27-car difference is not resolved by any source consulted here."
  },
  {
   "section": "production",
   "claimText": "Counts for the two SC special editions differ between sources: the 1980 Weissach Edition for North America is given as 400, 408 or 468 cars, and the 1982 Ferry Porsche Edition as either 200 or 266.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "pca-model-guide",
    "wikipedia-911-classic",
    "supercarnostalgia-sc",
    "stuttcars-sc"
   ],
   "conflictNote": "The Porsche Club of America and Wikipedia both state 408 Weissach Edition cars, Wikipedia identifying the option code as M439; Supercar Nostalgia states 400 and StuttCars states 468. For the Ferry Porsche Edition, the Porsche Club of America, Wikipedia and Supercar Nostalgia all state 200 while StuttCars states 266. The sources also describe the anniversary being marked differently. Not resolved by any source consulted here."
  },
  {
   "section": "production",
   "claimText": "The 911 SC/RS (Type 954) was built in 1984 as a Group B homologation evolution with 935 cylinder heads, Kugelfischer mechanical injection, roughly 255 bhp on the road and around 1,057 kg, in a run reported as either 20 or 21 cars.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "supercarnostalgia-scrs",
    "pca-model-guide"
   ],
   "conflictNote": "The Porsche Club of America's model guide states 20 SC/RS cars. Supercar Nostalgia states 21, and cites chassis numbers WP0ZZZ91ZES110001 to 021 invoiced between 11 January and 24 April 1984. The one-car difference is not resolved by any source consulted here."
  },
  {
   "section": "history",
   "claimText": "The 911 SC Cabriolet was previewed by a four-wheel-drive, Turbo-bodied prototype at the 1981 Frankfurt show, shown in production form at Geneva in March 1982 at DM 64,500, built from October 1982 with right-hand drive from February 1983, and used a three-bow hood of panel elements covering about half the roof area, with the structure rated to 245 km/h.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "porsche-newsroom-cabrio",
    "supercarnostalgia-sc",
    "porsche-newsroom-gseries"
   ]
  },
  {
   "section": "history",
   "claimText": "The SC was conceived under Ernst Fuhrmann as the last 911 generation before the front-engined 928 took over, but outsold the 928 heavily and had its production plan extended by Peter Schutz after he became chief executive in 1981.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "elferspot-sc-guide",
    "supercarnostalgia-sc",
    "wikipedia-911-classic"
   ]
  },
  {
   "section": "summary",
   "claimText": "What the letters SC stand for is contested, with 'Super Carrera' the most widely repeated expansion but no period documentation from the production years supporting any reading.",
   "confidence": "low",
   "status": "disputed",
   "sourceRefs": [
    "pelican-sc-name",
    "pca-model-guide",
    "wikipedia-911-classic",
    "elferspot-sc-guide"
   ],
   "conflictNote": "The Porsche Club of America's model guide states plainly that SC stands for Super Carrera, and forum members quote German Porsche copy saying the letters recall a 356 of the same designation and mean roughly 'Super Carrera'. Wikipedia and Elferspot note only that the designation had not been used since the 356 SC, without expanding it. Other readings offered include Sport Coupe, and forum contributors object that the Porsche text is retrospective. Not resolved by any source consulted here."
  },
  {
   "section": "problems",
   "claimText": "A backfire through the K-Jetronic intake can crack the plastic airbox or pull out its self-tapping screws, producing a vacuum leak that prevents starting; dealer replacement can exceed 1,000 dollars before labour, and the standard remedy is a spring-loaded pop-off valve fitted to the box.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "pelican-popoff",
    "pca-model-guide",
    "nine-werks-guide"
   ]
  },
  {
   "section": "problems",
   "claimText": "The SC's timing-chain tensioners are not fed by oil pressure, the idler arms were revised for 1983 and the problem was only fully resolved by the pressure-fed Carrera units introduced for 1984, which are commonly retrofitted; separately, Porsche adopted Dilavar head studs from 1977 under Technical Service Bulletin 7704, and the move to a pressure-cast aluminium crankcase for 1978 shifted the characteristic failure from crankcase thread pull-out to breakage of the studs themselves.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "pca-model-guide",
    "nine-werks-guide",
    "klassikats-headstud",
    "elferspot-sc-guide"
   ]
  },
  {
   "section": "problems",
   "claimText": "Early rubber-centred clutches fail at around 45,000 miles, the Type 915 gearbox baulks when worn with rebuilds quoted at 4,000 to 10,000 pounds, and the galvanised shell still corrodes at the sills, lower door apertures, A-pillars and windscreen surround, jacking points, front wing tops and rear torsion-bar housing, with serious corrosion work put at 7,000 to 10,000 pounds.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "pca-model-guide",
    "nine-werks-guide",
    "elferspot-sc-guide"
   ]
  },
  {
   "section": "market",
   "claimText": "As of August 2026 classic.com records a Porsche 911 SC market benchmark of $63,732, with the coupe at $64,811, the Targa at $55,375 and the cabriolet at $49,927, and recorded results running from $2,016 for a 1981 Targa in October 2024 to $515,000 for a 1982 car in November 2025; against that, the Carrera 3.2 coupe benchmark is $83,205 and the 930 Turbo averages $171,008 across 740 recorded sales.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-sc",
    "classic-carrera32",
    "classic-930"
   ]
  },
  {
   "section": "market",
   "claimText": "Auction results for 911 SC cabriolets cluster well below the classic.com extremes: RM Sotheby's sold a 9,230-mile United States car from the Taj Ma Garaj Collection for $52,640, and Gooding sold a European-specification 204 bhp example at Amelia Island in 2025 for $62,720.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "rm-tajmagaraj-cabrio",
    "gooding-amelia-cabrio"
   ]
  }
 ]
};
