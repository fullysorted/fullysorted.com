/**
 * Researched model draft - Plymouth Barracuda / 'Cuda E-body (1970-1974).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedBarracudaEBody = {
 "slug": "plymouth/barracuda-e-body",
 "make": "Plymouth",
 "model": "Barracuda",
 "generation": "Third generation (E-body)",
 "generationCode": "E-body",
 "trim": null,
 "yearStart": 1970,
 "yearEnd": 1974,
 "bodyStyles": [
  "2-door pillarless hardtop coupe",
  "2-door convertible (1970-1971 only; dropped for 1972)",
  "2-door coupe with fixed rear quarter glass (A93 Barracuda Coupe, 1970-1971)"
 ],
 "engines": [
  "3,245 cc (198 cu in) slant six, 125 bhp SAE gross (1970-1971)",
  "3,687 cc (225 cu in) slant six, 145 bhp SAE gross (1970-1971); 100 bhp SAE net (1972)",
  "5,211 cc (318 cu in) LA V8, 230 bhp SAE gross (1970-1971); 150 bhp SAE net (1972-1974)",
  "5,572 cc (340 cu in) LA V8 four-barrel, 275 bhp SAE gross (1970-1971); 240 bhp SAE net (1972-1973)",
  "5,572 cc (340 cu in) Six Barrel V8, three Holley two-barrels on an aluminium manifold, block webbed for four-bolt mains, 290 bhp SAE gross - AAR 'Cuda only, 1970",
  "6,276 cc (383 cu in) B V8, quoted between 275 and 335 bhp SAE gross by year and source (1970-1971)",
  "7,210 cc (440 cu in) RB V8, four-barrel, 375 bhp SAE gross (1970), 370 bhp special order (1971)",
  "7,210 cc (440 cu in) Six Barrel RB V8, 390 bhp SAE gross (1970), 385 bhp (1971)",
  "6,981 cc (426 cu in) Street Hemi V8, twin Carter AFB four-barrels, 10.25:1, 425 bhp SAE gross at 5,000 rpm, 490 lb-ft at 4,000 rpm (1970-1971)",
  "5,899 cc (360 cu in) LA V8, 245 bhp SAE net at 4,000 rpm, 320 lb-ft at 3,600 rpm (1974)"
 ],
 "productionTotal": null,
 "productionNotes": "No source consulted here publishes a single figure for the whole 1970-1974 E-body run, so none is asserted. The annual totals are consistent between compilations: 55,499 for 1970, 18,690 for 1971, 18,450 for 1972, 22,213 for 1973 and 11,734 for 1974. Those five add to roughly 126,600, but that is arithmetic performed here rather than a number any source states.\n\nThe year breakdowns are firmer. 1970 divides into 25,651 base hardtops, 1,554 base convertibles, 8,183 Gran Coupe hardtops, 596 Gran Coupe convertibles, 18,880 'Cuda hardtops and 635 'Cuda convertibles. 1971 divides into 9,459 base coupes and hardtops, 1,014 base convertibles, 1,615 Gran Coupes, 6,228 'Cuda hardtops and 374 'Cuda convertibles. 1972 divides into 10,622 base cars and 7,828 'Cudas.\n\nThe contested numbers are the ones the market cares about. The AAR 'Cuda is usually given as 2,724 cars built between 10 March and 17 April 1970 after a pilot car on 3 February, split 1,120 manual to 1,614 automatic, though 2,742 also appears. The 1970 Hemi 'Cuda is consistently given as 652 cars including 14 convertibles, those splitting nine automatic to five four-speed. The 1971 Hemi 'Cuda convertible is the most disputed figure in American muscle: published counts run 7, 11, 11-or-12, 12 and 13, apparently depending on whether export cars are included. That figure sets prices in the seven-figure bracket and no consulted source resolves it. Even the date production stopped is unsettled, given as both 1 April 1974 and, by one specialist history, March 1974.",
 "notableTrims": [
  {
   "name": "Barracuda (BH)",
   "note": "The base series, with the slant sixes and the 318. In 1970 the largest part of the run at 25,651 hardtops and 1,554 convertibles, and the usual donor for tribute builds."
  },
  {
   "name": "Barracuda Coupe (A93)",
   "note": "A mid-1970 price leader carried into 1971, with fixed rear quarter glass instead of wind-down windows. Cheap when new, scarce now, identified at a glance by that glass."
  },
  {
   "name": "Gran Coupe (BP)",
   "note": "The trim-led model: 8,183 hardtops and 596 convertibles in 1970, 1,615 cars in 1971, then dropped. Any engine could be ordered, which makes an original Hemi Gran Coupe unusual."
  },
  {
   "name": "'Cuda (BS)",
   "note": "The performance model, a separate series rather than an option package, which is why a genuine one reads BS in the VIN. Hockey-stick side stripes with engine callout in 1970, billboard decals in 1971."
  },
  {
   "name": "AAR 'Cuda",
   "note": "1970 only, homologating Plymouth's Trans-Am entry: 340 Six Barrel, glassfibre bonnet, side-exit exhaust ahead of the rear wheels, spoilers front and rear, strobe stripe, $3,966 new."
  },
  {
   "name": "Hemi 'Cuda",
   "note": "The 426 Street Hemi cost $871.45 in 1970 and $884 in 1971, about a third of a base car. 652 built in 1970 including 14 convertibles; 1971 is far smaller and far more disputed."
  },
  {
   "name": "'Cuda 440 Six Barrel",
   "note": "Three two-barrels on the 440, 390 bhp SAE gross in 1970 and 385 in 1971. Quicker in a straight line than many Hemi cars and much cheaper to keep."
  },
  {
   "name": "'Cuda 360 (1974)",
   "note": "The last performance 'Cuda, the 360 at 245 bhp SAE net standard. Long ignored, which is why unmolested and documented cars survive more often than the 1970-71 ones do."
  }
 ],
 "specs": {
  "layout": "Front longitudinal engine, rear-wheel drive, two-door unibody",
  "chassis": "E-body unitary construction, a shortened and widened derivative of the intermediate B-body, shared with the Dodge Challenger",
  "engine": "1970-71: 3,245 and 3,687 cc slant sixes, 5,211 cc 318, 5,572 cc 340 (four-barrel and Six Barrel), 6,276 cc 383, 7,210 cc 440 (four-barrel and Six Barrel), 6,981 cc 426 Hemi. 1972-73: six, 318, 340. 1974: 318 and 5,899 cc 360",
  "valvetrain": "Pushrod overhead valve, two valves per cylinder; the 426 Hemi uses hemispherical chambers and twin Carter AFB four-barrels",
  "power": "125 to 425 bhp SAE gross across the 1970-71 range, the 426 Hemi quoted at 425 bhp at 5,000 rpm; by 1974, 150 bhp SAE net (318) and 245 bhp SAE net at 4,000 rpm (360)",
  "torque": "426 Hemi 490 lb-ft at 4,000 rpm and 440 four-barrel 410 lb-ft at 3,600 rpm SAE gross; 1974 360 V8 320 lb-ft at 3,600 rpm SAE net",
  "transmission": "Three-speed manual, four-speed manual or three-speed TorqueFlite automatic; the AAR 'Cuda took the four-speed or the TorqueFlite",
  "suspension": "Longitudinal torsion bars with upper and lower control arms and an anti-roll bar at the front; semi-elliptic leaf springs and a live axle at the rear",
  "brakes": "Drums standard, front discs optional; period testing found the power drum set-up over-servoed, and drums are widely held inadequate behind the big blocks",
  "steering": "Manual standard; power assistance optional at $105 in 1970 and $97 in 1971",
  "weight": "3,630 lb (1,647 kg) kerb for a 1970 'Cuda 340 weighed by Car Life, 56/44 front to rear; big-block cars are heavier",
  "acceleration": "0-60 mph in 7.5 s, the quarter in 15.0 s at 94 mph and 125.4 mph for a 1970 'Cuda 340 (Car Life); 5.8 s and 14.0 s at 102 mph for a 426 Hemi 'Cuda (Motor Trend, May 1970)",
  "dimensions": "108.0 in (2,743 mm) wheelbase; 186.7 in long and 74.9 in wide for 1970, 186.6 x 74.9 x 50.8-51.2 in for 1971"
 },
 "summary": "The third-generation Plymouth Barracuda (1970-1974) dropped the Valiant underpinnings of its predecessors for the E-body, a shortened and widened derivative of Chrysler's intermediate B-body shared with the Dodge Challenger. John Herlitz gave it long-bonnet, short-deck proportions on a 108-inch wheelbase and, for the first time, an engine bay that took the 383, the 440 and the 426 Hemi without contortion. Performance versions wore the 'Cuda name; 1970 alone brought the AAR 'Cuda, a Trans-Am homologation car with a 340 Six Barrel, glassfibre bonnet and side-exit exhaust. The car arrived four years after the market it was built for had peaked. Insurance surcharges, compression cuts for unleaded fuel and emissions rules pared the range back to a slant six and small-block V8s by 1972 and to two small-blocks by 1974, when production stopped after 11,734 cars, ten years to the day after the first Barracuda went on sale.",
 "history": "## From Valiant Derivative to Purpose-Built\nPlymouth had answered the Mustang since April 1964, but the first two Barracudas were Valiant derivatives and the market treated them as such. For 1970 Chrysler committed to a purpose-built platform: the E-body, a shortened and widened version of the intermediate B-body that also carried the Dodge Challenger. Ate Up With Motor characterises the decision as a more-is-better answer to the second-generation car's disappointing sales, and identifies the miscalculation plainly: had the E-body arrived in 1967 it would have met the pony-car market at its peak instead of at its collapse. In 1970 the Mustang outsold the Barracuda by more than three to one, and insurers were surcharging drivers under 25 by more than $1,200 a year, over a quarter of a car's price.\n\n## Herlitz's Shape and the E-body Package\nJohn Herlitz gave the car the long-bonnet, short-deck proportions the segment demanded. The wheelbase came down to 108 inches, roughly six inches shorter than the 1969 car, while the bonnet grew by more than a foot and the body by several inches across. The fastback was dropped; hardtop and convertible remained. Unitary construction and Chrysler's longitudinal torsion-bar front suspension carried over, but the wider engine bay was the point: the 383 and 440, awkward installations in the A-body cars, now fitted without argument, and the 426 Hemi fitted at all.\n\n## 1970: Eleven Engines and the AAR\nThe launch range ran from a 198 cu in slant six to the Hemi, with the 340, 383 and 440 in several states of tune between. Performance cars wore the 'Cuda name as a separate series rather than an option package, with a Shaker bonnet scoop available, hockey-stick side stripes carrying the engine callout, and a Hemi option at $871.45. The one-year AAR 'Cuda existed to homologate Plymouth's Trans-Am entry: a 340 with three Holley two-barrels on an aluminium manifold, a block webbed for four-bolt mains, a glassfibre cold-air bonnet, chrome exhaust trumpets exiting ahead of the rear wheels, front and rear spoilers, staggered tyres and a strobe side stripe, at $3,966. Dan Gurney's All American Racers campaigned the race cars, de-stroked to 303.8 cu in for the class limit. Gurney and Swede Savage took three poles and a best finish of second, and won nothing.\n\n## 1971: Gills, Quad Lamps and the End of the Big Blocks\n1971 is the only E-body Barracuda year with four headlamps, and the only year the 'Cuda carried the fender louvres behind the front wheels that everyone calls gills, alongside billboard side decals naming the engine. It is also the year compression came down for unleaded fuel and the range began to thin. Sales fell from 55,499 to 18,690. The Hemi 'Cuda that year is counted in dozens rather than hundreds, the convertible in single or low double figures depending on who is counting. At the end of the model year the 383, the 440 and the Hemi left the E-body for good.\n\n## Decline and 1 April 1974\n1972 brought a single-headlamp face, the loss of the convertible and the Gran Coupe, and a three-engine range of slant six, 318 and a detuned 340. 1973 added the federally mandated bumpers and, against the trend, a recovery to 22,213 cars. For 1974 the 360 replaced the 340 at 245 bhp SAE net. Production ended after 11,734 cars, most accounts giving 1 April 1974, ten years to the day after the first Barracuda went on sale.",
 "marketNotes": "As of August 2026 classic.com records an average sale of $142,996 across the third-generation Barracuda market, with 64 cars listed and the market split into standard variants, 'Cuda and Hemi 'Cuda. The 'Cuda sub-market benchmark sits at $120,712, the Hemi 'Cuda coupe at $288,247 and the Hemi 'Cuda convertible at $2,821,429. The full Hemi 'Cuda benchmark of $412,244 spans roughly 21 tracked transactions, from $116,000 for a 1970 car in March 2024 to $3,300,000 for a 1971 convertible in January 2026. Ordinary cars sit elsewhere entirely: the lowest tracked third-generation result is $5,500 for a 1971 Barracuda in May 2026.\n\nAuction evidence over two decades brackets the top. RM Sotheby's sold a 1971 Hemi 'Cuda convertible, chassis BS27R1B269588, for $2,420,000 at Arizona in 2007. Mecum bid a four-speed 1971 Hemi 'Cuda convertible originally exported to France to $4.8 million at Indianapolis in May 2021 without meeting a reserve reported at up to $6.5 million; the same house had set the model record at $3.5 million in 2014. At Kissimmee on 17 January 2026 the first 1971 Hemi 'Cuda convertible built, in Sno White with a TorqueFlite, made $3.3 million including the ten per cent buyer's premium, so roughly $3 million at the hammer.",
 "whatToLookFor": "The paperwork is the car. A 'Cuda is a separate series rather than an option package, so the first two characters of a genuine one read BS: BS23 for the hardtop, BS27 for the convertible, against BH and BP for the base car and Gran Coupe. The fifth character is the engine code, which is why a real Hemi convertible reads BS27R and an AAR reads BS23J; the sixth is the model year and the seventh the assembly plant. Chassis BS27R1B269588, the 1971 Hemi 'Cuda convertible RM Sotheby's sold in 2007, reads out exactly that way.\n\nThe fender tag on the driver's-side inner wing repeats engine, transmission, axle, paint, trim, build date and scheduling number, read bottom to top and left to right. On E-bodies the last eight VIN digits are also stamped into the body, including the driver's-side firewall below the cowl, with the first and second digits transposed. That stamping is the check that matters, because a fender tag is riveted on and a VIN plate of this period can be held by two screws. Broadcast sheets turn up under and inside seats, above the fuel tank and behind trim panels. Galen's Tag Service reviews a fender tag, dash VIN and any broadcast sheet or window sticker against Chrysler records, and a registry listing is what the top of this market expects to see.\n\nWhere the numbers disagree with each other the car is a problem however it presents. RM Sotheby's catalogues Hemi 'Cuda clones as clones, and one 1970 example sold online for $48,600 against a coupe benchmark near $288,000 as of August 2026. That gap is documentation.",
 "commonProblems": "Rust first. The E-body's sills, floors, rear quarters, screen aperture and rear pillars all trap water, and lower door skins go the same way; bubbling around the windscreen surround usually means the car needs more than it looks. Panel gaps and weld quality were inconsistent from new, so poor shut lines are not proof of an accident, but they make one harder to see.\n\nOverheating is the standing mechanical complaint, particularly on big-block cars whose cooling was working hard when new; milky oil, staining around hose connections and a tired water pump are things to find before purchase rather than after. The torsion-bar front suspension degrades with age and announces itself as creaking on full lock, and poor camber geometry was noted even in period testing. Original Six Barrel carburettors and their aluminium manifolds are frequently missing or substituted.\n\nFront drums were standard and are not adequate behind a 440 or a Hemi; disc conversions are common, and reversible ones preserve more value. Interiors suffer: vinyl fails, the plasti-wood trim lifts, dashboards crack. Three federal recall campaigns cover the 1971 car - 71V004000 on a brake shoe anchor pin whose failure could cost the front brakes, 71V067000 on disc rotors causing pull or imbalance, and 71V117000 on a power steering hose - and on a car of this age it is worth knowing whether any of them were carried out.",
 "valueTrajectory": "The E-body Barracuda's value history is a story of separation rather than a single curve. Ordinary sixes and 318 cars were worth restoring only intermittently for thirty years, and classic.com still tracks third-generation results down to $5,500 as of August 2026. The 'Cuda variants re-rated through the 2000s muscle-car boom, and the Hemi cars detached from them entirely: the 1971 Hemi convertible went from $2,420,000 at RM Sotheby's in Arizona in 2007, to a $3.5 million Mecum record in 2014, to a $4.8 million unmet bid at Indianapolis in 2021, to $3.3 million with premium at Kissimmee in January 2026. That reads as a plateau at a very high level rather than continued appreciation, and the 2021 no-sale suggests sellers have at times been ahead of buyers.\n\nLower down the range, documentation now carries more of the value than condition does. A car catalogued honestly as a clone trades in the tens of thousands while a documented coupe of the same apparent specification sits near $288,000 as of August 2026. Cars whose identity cannot be established tend to sit outside the market rather than at a discount within it.",
 "overallConfidence": "medium",
 "sources": [
  {
   "ref": "wikipedia-barracuda",
   "title": "Plymouth Barracuda",
   "url": "https://en.wikipedia.org/wiki/Plymouth_Barracuda",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "BH/BP/BS series codes, 1971 as the only four-headlamp year and only year of the 'Cuda fender gills, hockey-stick versus billboard stripes, thirteen 1971 Hemi convertibles with seven sold domestically, and 1 April 1974 as the end of production."
  },
  {
   "ref": "ateupwithmotor-ebody",
   "title": "Fish Story: The Plymouth Barracuda (Part Two)",
   "url": "https://ateupwithmotor.com/model-histories/plymouth-barracuda-history-part-two/",
   "publisher": "Ate Up With Motor",
   "sourceType": "specialist",
   "reliability": "high",
   "notes": "E-body from the B-body, shared with the Challenger; 108-inch wheelbase six inches shorter than 1969; retained unibody and torsion bars; under-25 insurance surcharges above $1,200 a year; sales of 55,499, 18,690, 22,213 and 11,734; puts the end of production in March 1974."
  },
  {
   "ref": "overdrive-1970-facts",
   "title": "1970 Plymouth Barracuda Fact Sheet",
   "url": "https://over-drive-magazine.com/2024/04/18/1970-plymouth-barracuda-fact-sheet/",
   "publisher": "Over-Drive Magazine",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "1970 production by model (25,651 / 1,554 / 8,183 / 596 / 18,880 / 635), AAR 'Cuda at 2,724 with a note that some sources give 2,742, the full engine table, the $871.45 Hemi option and 108.0 in wheelbase by 186.7 in length."
  },
  {
   "ref": "overdrive-1971-facts",
   "title": "1971 Plymouth Barracuda Fact Sheet",
   "url": "https://over-drive-magazine.com/2025/06/10/1971-plymouth-barracuda-fact-sheet/",
   "publisher": "Over-Drive Magazine",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "1971 production by model (9,459 / 1,014 / 1,615 / 6,228 / 374), engine table with 440 four-barrel at 370 hp, 440 six-barrel at 385 hp and 426 Hemi at 425 hp, the $884 Hemi option and 186.6 x 74.9 x 50.8-51.2 in dimensions."
  },
  {
   "ref": "conceptcarz-1972",
   "title": "1972 Plymouth Barracuda",
   "url": "https://www.conceptcarz.com/z27823/plymouth-barracuda.aspx",
   "publisher": "conceptcarz.com",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "1972: 10,622 base and 7,828 'Cuda for 18,450 total; three engines only, the 225 six at 100 SAE net, 318 at 150 and 340 at 240; convertible discontinued. Also gives 22,213 for 1973 and 11,734 for 1974."
  },
  {
   "ref": "oldcars-aar",
   "title": "Car of the Week: 1970 AAR Cuda",
   "url": "https://www.oldcarsweekly.com/features/car-of-the-week-1970-aar-cuda",
   "publisher": "Old Cars Weekly",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "AAR 'Cuda at 2,724 built 10 March to 17 April 1970 after a 3 February pilot car, split 1,120 manual and 1,614 automatic; 340 with four-bolt-main webbing and triple Holley two-barrels at 290 hp; race engines de-stroked to 303.8 cu in; $3,966 new; no Trans-Am win."
  },
  {
   "ref": "curbside-carlife-340",
   "title": "Vintage Car Life Road Test: 1970 Plymouth Barracuda 'Cuda 340",
   "url": "https://www.curbsideclassic.com/vintage-reviews/1970s-vintage-reviews/chrysler-brands-1970s-vintage-reviews/vintage-car-life-road-test-1970-plymouth-barracuda-cuda-340-at-least-the-stylists-did-a-good-job-of-it/",
   "publisher": "Curbside Classic",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Period Car Life test of a 1970 'Cuda 340 reprinted in full: 0-60 in 7.5 s, quarter 15.0 s at 94 mph, 125.4 mph, 3,630 lb kerb, 56/44 distribution, over-servoed power drums, terminal understeer, camber-related tyre wear and doors about 75 lb heavier each."
  },
  {
   "ref": "supercars-hemi-1970",
   "title": "1970 Plymouth HEMI 'Cuda",
   "url": "https://www.supercars.net/blog/1970-plymouth-hemi-cuda/",
   "publisher": "Supercars.net",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "1970 Hemi 'Cuda at 652 built including 14 convertibles, 284 four-speeds; twin Carter AFB four-barrels, 10.25:1, 425 bhp at 5,000 rpm and 490 lb-ft at 4,000 rpm; Motor Trend May 1970 at 5.8 s to 60 and 14.0 s at 102 mph; names Chrysler Registry and Galen Govier reports as the verification tools."
  },
  {
   "ref": "classicindustries-hemi-verts",
   "title": "The Unicorns of Auburn Hills: 1970 and 1971 Hemi 'Cuda Convertibles",
   "url": "https://news.classicindustries.com/the-unicorns-of-auburn-hills-1970-1971-hemi-cuda-convertibles",
   "publisher": "Classic Industries",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Gives 14 1970 Hemi convertibles split nine automatic to five four-speed, and 12 for 1971 split seven to five, with no export breakdown; notes two broadcast sheets found with one 1970 example."
  },
  {
   "ref": "musclecarfacts-1974",
   "title": "1974 Barracuda",
   "url": "https://www.musclecarfacts.com/plymouth-barracuda/43-1974-barracuda/",
   "publisher": "Muscle Car Facts",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "1974: 318 at 150 hp, 360 at 245 hp at 4,000 rpm and 320 lb-ft at 3,600 rpm standard on the 'Cuda, 11,734 built, production ending 1 April 1974, ten years to the day after the first Barracuda went on sale."
  },
  {
   "ref": "classic-3rdgen",
   "title": "Plymouth Barracuda - 3rd Gen Market",
   "url": "https://www.classic.com/m/plymouth/barracuda/3rd-gen/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Market data as of August 2026 for the 1970-1974 generation: average sale $142,996, 64 cars listed across three sub-markets, lowest recorded sale $5,500 for a 1971 Barracuda on 2 May 2026."
  },
  {
   "ref": "classic-hemi-cuda",
   "title": "Plymouth Hemi 'Cuda Market",
   "url": "https://www.classic.com/m/plymouth/barracuda/3rd-gen/hemi-cuda/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Market data as of August 2026: Hemi 'Cuda benchmark $412,244 over roughly 21 tracked transactions, lowest recorded sale $116,000 (1970 car, 27 March 2024), highest $3,300,000 (1971 convertible, 17 January 2026)."
  },
  {
   "ref": "classic-cuda-3rdgen",
   "title": "Plymouth 'Cuda - 3rd Gen Market",
   "url": "https://www.classic.com/m/plymouth/barracuda/3rd-gen/cuda/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Market data as of August 2026: 'Cuda benchmark $120,712, lowest recorded sale $29,900 (1972 car, 27 September 2023), with sub-benchmarks of $288,247 for the Hemi 'Cuda coupe and $2,821,429 for the Hemi 'Cuda convertible."
  },
  {
   "ref": "rm-az07-hemi-vert",
   "title": "1971 Plymouth Hemi 'Cuda Convertible, Vintage Motor Cars in Arizona 2007",
   "url": "https://rmsothebys.com/auctions/az07/lots/r129-1971-plymouth-hemi-cuda-convertible/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Lot record: chassis BS27R1B269588 sold for $2,420,000 at RM Sotheby's Arizona in 2007. That chassis number is the worked example used here for E-body VIN structure - BS series, 27 convertible, R engine code, 1 model year, B plant."
  },
  {
   "ref": "rm-clone-online",
   "title": "1970 Plymouth Hemi 'Cuda Clone, Online Only auction",
   "url": "https://rmsothebys.com/auctions/o109/lots/r032-1970-plymouth-hemi-cuda-clone/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Lot record for a car catalogued explicitly as a Hemi 'Cuda clone, sold for $48,600, establishing the documentation gap between a catalogued clone and a documented Hemi 'Cuda coupe."
  },
  {
   "ref": "autoevolution-kissimmee26",
   "title": "1971 Plymouth Hemi Cuda Convertible Sells for $3.3 Million",
   "url": "https://www.autoevolution.com/news/holy-grail-1971-plymouth-hemi-cuda-convertible-sells-for-33-million-264256.html",
   "publisher": "autoevolution",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Mecum Kissimmee, 17 January 2026: $3.3 million including the ten per cent buyer's premium, so roughly $3 million hammer. States 114 1971 Barracudas with the 426 Hemi, seven Hemi convertibles and five of those automatic; sold with two Dave Wise reports and a partial broadcast sheet."
  },
  {
   "ref": "foxnews-indy21",
   "title": "Rare 1971 Plymouth Hemi 'Cuda Convertible gets record $4.8 million auction bid, but it's not enough",
   "url": "https://www.foxnews.com/auto/rare-1971-plymouth-hemi-cuda-convertible-gets-record-4-8-million-auction-bid-but-its-not-enough",
   "publisher": "Fox News",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Mecum Indianapolis, 23 May 2021: bid to $4.8 million and unsold against a reserve reported at up to $6.5 million. States 11 or 12 Hemi convertibles for 1971, this one of three four-speeds and exported new to France; records the 2014 Mecum sale at $3.5 million as the prior record."
  },
  {
   "ref": "maxwedge-documenting",
   "title": "Documenting Chrysler, Dodge, Plymouth and Mopar Fender Tags and Body Stampings",
   "url": "https://www.maxwedge.com/articles/documenting.php",
   "publisher": "MaxWedge.com",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Authentication method: fender tag on the driver's-side inner wing read bottom to top and left to right; on 1969-and-later cars the last eight VIN digits are stamped into the body with the first two reversed, on E-bodies including the firewall below the cowl; mismatches indicate a problem and non-disclosure creates liability."
  },
  {
   "ref": "galengovier-registry",
   "title": "Registry - Galen's Tag Service, LLC",
   "url": "https://galengovier.com/services/registry/",
   "publisher": "Galen's Tag Service, LLC",
   "sourceType": "registry",
   "reliability": "medium",
   "notes": "What the principal Mopar registry service checks: a photograph of the fender tag, the dash VIN and proof of ownership as the minimum submission, with broadcast sheet and window sticker strengthening a listing; covers rare 1962-1980 Mopars including Hemi convertibles."
  },
  {
   "ref": "hagerty-fraud",
   "title": "Fakes, frauds and forgeries: Illegality in the collector-car market",
   "url": "https://www.hagerty.com/media/market-trends/hagerty-insider/fakes-frauds-and-forgeries-illegality-in-the-collector-car-market/",
   "publisher": "Hagerty Media",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Collector-car fraud from attorney Bryan Shook: VIN plates of this era sometimes held on by two screws, private groups trading tin and paper meaning VIN plates and titles, muscle cars with particular option packages as the commonest cloning target, and the Adams v. Brenton 2018 disclosure ruling."
  },
  {
   "ref": "nhtsa-1971-recalls",
   "title": "Recalls by Vehicle: 1971 Plymouth Barracuda",
   "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=plymouth&model=barracuda&modelYear=1971",
   "publisher": "National Highway Traffic Safety Administration",
   "sourceType": "government",
   "reliability": "high",
   "notes": "Federal recall record for the 1971 Barracuda: 71V004000 on a brake shoe anchor pin whose failure could cause loss of the front brakes, 71V067000 on disc rotors causing pull or imbalance, and 71V117000 on a power steering hose."
  },
  {
   "ref": "tradeuniquecars-cuda",
   "title": "1970-1974 Plymouth Cuda - Buyer's Guide",
   "url": "https://www.tradeuniquecars.com.au/plymouth-cuda-buyers-guide/",
   "publisher": "Trade Unique Cars",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Inspection guide: inconsistent panel gaps from new; rust in sills, floors, screen aperture, rear pillars and lower door skins; overheating as the principal threat, with milky oil and hose-joint staining as symptoms; torsion bars creaking on full lock; substituted Six Barrel carburettors; front drums inadequate."
  }
 ],
 "claims": [
  {
   "section": "history",
   "claimText": "The 1970-1974 Barracuda used Chrysler's E-body, a shortened and widened derivative of the intermediate B-body shared with the Dodge Challenger, on a 108-inch wheelbase about six inches shorter than the 1969 car, retaining unitary construction and torsion-bar front suspension under John Herlitz's long-bonnet, short-deck bodywork.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "ateupwithmotor-ebody",
    "wikipedia-barracuda",
    "overdrive-1970-facts"
   ]
  },
  {
   "section": "history",
   "claimText": "The E-body arrived as the market it was built for was contracting: insurers were surcharging drivers under 25 by more than $1,200 a year, over a quarter of a car's purchase price, and the Mustang outsold the Barracuda by more than three to one in 1970.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "ateupwithmotor-ebody",
    "conceptcarz-1972"
   ]
  },
  {
   "section": "specs",
   "claimText": "The 1970-1971 range ran from a 198 cu in slant six through 318, 340, 383 and 440 V8s to the 426 Street Hemi, quoted at 425 bhp SAE gross at 5,000 rpm and 490 lb-ft at 4,000 rpm on twin Carter AFB four-barrels and 10.25:1 compression, and costing $871.45 as an option in 1970 and $884 in 1971.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "overdrive-1970-facts",
    "overdrive-1971-facts",
    "supercars-hemi-1970"
   ]
  },
  {
   "section": "specs",
   "claimText": "Period testing recorded a 1970 'Cuda 340 at 0-60 mph in 7.5 seconds, a standing quarter of 15.0 seconds at 94 mph and 125.4 mph, weighing 3,630 lb with 56/44 distribution, while Motor Trend's May 1970 test of a 426 Hemi 'Cuda returned 0-60 mph in 5.8 seconds and 14.0 seconds at 102 mph. The same test criticised terminal understeer, camber-related tyre wear and an over-servoed power drum brake set-up.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "curbside-carlife-340",
    "supercars-hemi-1970",
    "tradeuniquecars-cuda"
   ]
  },
  {
   "section": "production",
   "claimText": "1970 production divides into 25,651 base hardtops, 1,554 base convertibles, 8,183 Gran Coupe hardtops, 596 Gran Coupe convertibles, 18,880 'Cuda hardtops and 635 'Cuda convertibles, for a model-year total of 55,499.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "overdrive-1970-facts",
    "ateupwithmotor-ebody"
   ]
  },
  {
   "section": "production",
   "claimText": "1971 production divides into 9,459 base coupes and hardtops, 1,014 base convertibles, 1,615 Gran Coupes, 6,228 'Cuda hardtops and 374 'Cuda convertibles, for a model-year total of 18,690, roughly a third of the 1970 figure.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "overdrive-1971-facts",
    "ateupwithmotor-ebody"
   ]
  },
  {
   "section": "production",
   "claimText": "Production for the final three years was 18,450 in 1972, 22,213 in 1973 and 11,734 in 1974. No source consulted here publishes a combined 1970-1974 total, so none is asserted; the five annual figures sum to approximately 126,600 only as arithmetic performed here.",
   "confidence": "medium",
   "status": "unverified",
   "sourceRefs": [
    "conceptcarz-1972",
    "ateupwithmotor-ebody",
    "musclecarfacts-1974",
    "overdrive-1970-facts",
    "overdrive-1971-facts"
   ]
  },
  {
   "section": "production",
   "claimText": "The date Barracuda production ended is given as 1 April 1974 by most accounts, ten years to the day after the first Barracuda went on sale, but at least one specialist history places it in March 1974.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "musclecarfacts-1974",
    "wikipedia-barracuda",
    "ateupwithmotor-ebody"
   ],
   "conflictNote": "Muscle Car Facts and Wikipedia both give 1 April 1974 and tie it to the tenth anniversary of the first Barracuda going on sale. Ate Up With Motor states production ended in March 1974. The difference is not resolved by any source consulted here."
  },
  {
   "section": "production",
   "claimText": "The AAR 'Cuda was built for 1970 only, between 10 March and 17 April 1970 after a pilot car on 3 February, split 1,120 manual to 1,614 automatic; the total is usually given as 2,724 but at least one compilation records 2,742.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "oldcars-aar",
    "overdrive-1970-facts"
   ],
   "conflictNote": "Old Cars Weekly states 2,724 with the build window and transmission split. Over-Drive Magazine states 2,724 while recording that some sources give 2,742 instead. The eighteen-car difference is not resolved by any source consulted here, so no single AAR total is asserted."
  },
  {
   "section": "history",
   "claimText": "The AAR 'Cuda homologated Plymouth's Trans-Am entry with a 340 carrying three Holley two-barrels on an aluminium manifold and a block webbed for four-bolt mains at 290 bhp, a glassfibre cold-air bonnet, chrome exhaust trumpets ahead of the rear wheels, spoilers, staggered tyres and a strobe stripe, at $3,966 new; the racing engines were de-stroked to 303.8 cu in and Dan Gurney's All American Racers took three poles, a best finish of second and no wins.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "oldcars-aar",
    "wikipedia-barracuda"
   ]
  },
  {
   "section": "production",
   "claimText": "1970 Hemi 'Cuda production is consistently given as 652 cars including 14 convertibles, with 284 of the total taking the four-speed manual and the balance the TorqueFlite; the 14 convertibles divide nine automatic to five four-speed.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "supercars-hemi-1970",
    "classicindustries-hemi-verts"
   ]
  },
  {
   "section": "production",
   "claimText": "The number of 1971 Hemi 'Cuda convertibles built is the most disputed figure in the American collector market, with published counts of seven, eleven, eleven-or-twelve, twelve and thirteen depending on the source; no figure is asserted here.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "autoevolution-kissimmee26",
    "foxnews-indy21",
    "classicindustries-hemi-verts",
    "wikipedia-barracuda"
   ],
   "conflictNote": "Autoevolution states seven convertibles out of 114 1971 Barracudas fitted with the 426 Hemi. Classic Industries states twelve, split seven automatic to five four-speed. Fox News reports eleven or twelve, noting one four-speed car exported new to France. Wikipedia states thirteen, of which seven were sold domestically. The counts appear to differ over whether export cars are included, but no source consulted here reconciles them and the figure is unresolved."
  },
  {
   "section": "history",
   "claimText": "1971 is the only E-body Barracuda year with four headlamps and the only year the 'Cuda carried fender louvres behind the front wheels, alongside billboard side decals in place of 1970's hockey-stick stripes; the 383, 440 and 426 Hemi all left the E-body at the end of that model year. For 1972 the car went to single headlamps and hardtop-only bodywork with the convertible and Gran Coupe dropped, the six went after 1972, and the 360 at 245 bhp SAE net replaced the 340 for 1974, leaving two small-block V8s at the end.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-barracuda",
    "overdrive-1971-facts",
    "conceptcarz-1972",
    "musclecarfacts-1974"
   ]
  },
  {
   "section": "market",
   "claimText": "As of August 2026 classic.com records an average sale of $142,996 across the third-generation Barracuda market, a 'Cuda benchmark of $120,712, a Hemi 'Cuda benchmark of $412,244 over roughly 21 tracked transactions, a Hemi 'Cuda coupe benchmark of $288,247 and a Hemi 'Cuda convertible benchmark of $2,821,429, with tracked results running from $5,500 for a 1971 Barracuda in May 2026 to $3,300,000 for a 1971 Hemi convertible in January 2026.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-3rdgen",
    "classic-cuda-3rdgen",
    "classic-hemi-cuda"
   ]
  },
  {
   "section": "market",
   "claimText": "Auction evidence for the 1971 Hemi 'Cuda convertible runs from $2,420,000 at RM Sotheby's Arizona in 2007 for chassis BS27R1B269588, through a $3.5 million Mecum sale in 2014 and a $4.8 million unmet bid at Mecum Indianapolis in May 2021 against a reserve reported at up to $6.5 million, to $3.3 million with the ten per cent buyer's premium at Mecum Kissimmee on 17 January 2026. Documentation rather than condition sets that top: RM Sotheby's catalogues Hemi 'Cuda clones as clones, one 1970 example selling for $48,600 against a coupe benchmark of $288,247 as of August 2026.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "rm-az07-hemi-vert",
    "foxnews-indy21",
    "autoevolution-kissimmee26",
    "rm-clone-online",
    "classic-cuda-3rdgen"
   ]
  },
  {
   "section": "problems",
   "claimText": "Authentication rests on the fender tag on the driver's-side inner wing, the dash VIN, and the last eight VIN digits stamped into the body - on E-bodies including the firewall below the cowl - with the first and second digits transposed; broadcast sheets corroborate the build, and Galen's Tag Service checks these against Chrysler records. Fraud concentrates on this kind of car: VIN plates of the period can be held on by two screws, plates and titles are traded privately as tin and paper, and a 2018 civil ruling established that a seller must disclose a negative expert authenticity finding even where they disagree with it.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "maxwedge-documenting",
    "galengovier-registry",
    "supercars-hemi-1970",
    "hagerty-fraud"
   ]
  },
  {
   "section": "problems",
   "claimText": "The recurring faults are rust in the sills, floors, rear quarters, screen aperture, rear pillars and lower door skins; overheating, particularly on big-block cars; torsion-bar degradation announced by creaking on full lock; substituted Six Barrel carburettors; and front drums inadequate behind the larger engines. Three federal recall campaigns cover the 1971 car: 71V004000 on a brake shoe anchor pin, 71V067000 on disc rotors and 71V117000 on a power steering hose.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "tradeuniquecars-cuda",
    "nhtsa-1971-recalls",
    "curbside-carlife-340"
   ]
  }
 ]
};
