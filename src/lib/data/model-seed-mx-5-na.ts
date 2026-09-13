/**
 * Researched model draft -- Mazda MX-5 Miata (1989-1997).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedMx5Na = {
 "slug": "mazda/mx-5-na",
 "make": "Mazda",
 "model": "MX-5",
 "generation": "NA (Miata / MX-5 / Eunos Roadster)",
 "generationCode": "NA6CE (1.6) / NA8C (1.8)",
 "trim": null,
 "yearStart": 1989,
 "yearEnd": 1997,
 "bodyStyles": [
  "2-door roadster with manually folding fabric top and pop-up headlamps",
  "2-door roadster with removable hardtop (factory option and dealer accessory)"
 ],
 "engines": [
  "1,598 cc B6-ZE(RS) DOHC 16-valve inline four, 115 hp at 6,500 rpm and 100 lb-ft at 5,500 rpm as launched; 105 hp with the four-speed automatic",
  "1,598 cc B6-ZE in later reduced-output form, kept below the 1.8 in some markets from 1994; quoted variously at 89 hp, 90 hp and 110 hp",
  "1,839 cc BP-ZE DOHC 16-valve inline four from 1994, 129 hp at 6,500 rpm and 110 lb-ft at 5,500 rpm, revised to 133 hp and 114 lb-ft for 1996",
  "Dealer-fitted BBR turbocharger conversion offered in the United Kingdom from 1991 on the 1.6, at 150 hp and 154 lb-ft"
 ],
 "productionTotal": null,
 "productionNotes": "No single figure for the NA generation survives contact with the sources. Wikipedia's Mazda MX-5 overview carries two irreconcilable numbers on the same page: a production table headed \"First Generation (NA) (Total Production 431,506)\" and, in the running text, \"The first generation MX-5 sold 228,961 units between 1989 and 1997.\" JDMBUYSELL repeats 431,506; BOFI Racing says only that production \"exceeded 400,000 units\". Nothing consulted here explains whether the gap is a production-versus-registrations distinction, a difference of market scope, or an error, so no total is asserted. What can be pinned down is the United States: the miata.net production FAQ, compiled by Brian Sundue, gives 51,636 cars for 1990, 38,287 for 1991, 26,636 for 1992, 21,482 for 1993, 20,110 for 1994, 19,590 for 1995, 18,971 for 1996 and 18,652 for 1997, summing to 215,364, with no Japanese or European breakdown at all.\n\nSpecial-edition counts are better documented, because Mazda published them at the time. Wikipedia lists 250 British Racing Green Limited Editions for the United Kingdom in 1991, 3,997 US and 1,051 Canadian cars in the parallel North American Racing Green run, 800 Eunos J Limited and 800 J Limited II for Japan, 1,505 US and 300 Canadian 1993 Limited Editions, 1,841 R-Package cars across 1994-1997, M-Editions at roughly 3,000 to 3,500 a year, 1,500 Special Touring Option cars for 1997, 800 UK Monza cars and 400 UK Berkeleys. The Berkeley is why the run is sometimes given as ending in 1998: it was a British edition sold after mainstream production finished.",
 "notableTrims": [
  {
   "name": "Limited Edition (United Kingdom, 1991)",
   "note": "250 cars in British Racing Green with tan trim and color-matched 15-inch OZ alloys, on the 115 hp 1.6. The first UK special, and the template for a decade of them"
  },
  {
   "name": "Limited Edition (United States and Canada, 1993)",
   "note": "1,505 US cars and 300 Canadian, black with red leather, sports suspension, spoilers and 14-inch BBS wheels. Wikipedia gives 1,500 in one place and 1,505 in another, so treat the figure as approximate."
  },
  {
   "name": "R-Package (United States, 1994-1997)",
   "note": "1,841 cars with a Torsen limited-slip differential, stiffer springs and bars, Bilstein dampers and a front air dam. Never marketed as a special edition, and the one factory NA specification aimed at track use rather than trim."
  },
  {
   "name": "M-Edition (United States, 1994-1997)",
   "note": "An annual color-and-equipment package - Montego Blue Mica 1994, Merlot Mica 1995, Starlight Blue Mica 1996, Marina Green Mica 1997 - at roughly 3,000 to 3,500 cars a year, and the best-known NA special in America."
  },
  {
   "name": "Special Touring Option (United States, 1997)",
   "note": "1,500 cars in Twilight Blue Mica carrying the 1996 M-Edition exterior equipment, sold as the American send-off for the generation."
  },
  {
   "name": "Eunos Roadster J Limited and J Limited II (Japan, 1991 and 1993)",
   "note": "800 cars each in sunburst yellow, the second with blacked-out A-pillars. Specials of this kind are why an imported Eunos often carries equipment no US-market Miata was given."
  },
  {
   "name": "M2-1001 Cafe Roadster and M2-1028 Street Competition (Japan, 1991 and 1994)",
   "note": "300 cars each from Mazda's M2 Corporation subsidiary. The 1001 was quoted at 131 hp at 7,000 rpm; the 1028 had a six-point cage, an aluminum duck-tail trunklid and close to 150 hp."
  },
  {
   "name": "Berkeley (United Kingdom, 1998)",
   "note": "400 cars in Sparkle Green with numbered plaques, unique alloys and a chrome luggage rack, sold after mainstream production had ended."
  }
 ],
 "specs": {
  "layout": "Front longitudinal engine, rear-wheel drive, two seats",
  "chassis": "Unitary steel monocoque with an aluminum power plant frame bolting engine and gearbox rigidly to the differential housing; braced from 1994 with a track bar between the seatbelt towers and reinforced subframes",
  "engine": "1,598 cc B6-ZE(RS) DOHC 16-valve four (1989-1997); 1,839 cc BP-ZE DOHC 16-valve four from 1994 (encyCARpedia states 1,840 cc)",
  "bore_stroke_compression": "1.8 BP-ZE: 83.0 x 85.0 mm and 9.4:1 per encyCARpedia; no fetched figure for the 1.6 is asserted",
  "power": "1.6: 115 hp at 6,500 rpm as launched, later reduced to a figure sources dispute. 1.8: 129 hp from 1994, 133 hp from 1996",
  "torque": "1.6: 100 lb-ft at 5,500 rpm. 1.8: 110 lb-ft at 5,500 rpm from 1994, 114 lb-ft from 1996",
  "transmission": "5-speed manual derived from the rear-drive Mazda 929/Luce; 4-speed automatic optional in the American and Japanese markets",
  "differential": "Open as standard, viscous limited-slip on some specifications, Torsen on the 1994-1997 R-Package",
  "suspension": "Independent double wishbones front and rear with anti-roll bars at both ends",
  "brakes": "Discs all round, ventilated front and solid rear on the 1.8; larger brakes from 1994",
  "weight": "2,161 lb at launch and 2,183 lb from 1994 per Wikipedia; evo quotes 2,072 lb, BOFI Racing about 2,116 lb. Sources do not agree",
  "dimensions": "3,970 mm long (encyCARpedia gives 3,975 mm for the 1.8), 1,675 mm wide, 1,235 mm high, 2,265 mm wheelbase; Cd 0.38",
  "acceleration": "Mazda claimed 8.6 s to 60 mph; Car and Driver recorded 9.2 s, Motor Trend 8.9 s, Autocar 9.1 s. encyCARpedia gives 7.9 s for the 1.8",
  "top_speed": "116.8 mph claimed for the 1.6; 116 mph by Car and Driver with hardtop, 114 mph by Autocar. encyCARpedia gives 122 mph for the 1.8",
  "fuel_capacity": "48 liters for the 1.8 per encyCARpedia, larger than the early 1.6"
 },
 "summary": "The Mazda MX-5, sold in the US as the Miata and in Japan as the Eunos Roadster, was shown at the Chicago Auto Show in February 1989 and put a small, cheap, front-engine rear-drive roadster back on sale after the MGB, the Triumph Spitfire and the Fiat 124 Spider had all gone. The idea belonged to an American motoring journalist, Bob Hall, who put it to Mazda's research chief Kenichi Yamamoto and was later hired to develop it; the shape came out of a design competition between Mazda's Californian studio and its Tokyo team, with the original Lotus Elan studied openly as the benchmark. A 1,598 cc twin-cam four drove the rear wheels through a five-speed gearbox and an aluminum power plant frame that tied engine to differential, double wishbones sat at each corner, and the car weighed under 2,205 lb. From the 1994 model year came a 1,839 cc engine, a substantially braced shell and larger brakes, with a reduced-output 1.6 kept below it in some markets. It is the best-selling two-seat sports car ever built, and the cheapest examples are the ones most likely to be structurally rotten.",
 "history": "## An American Idea Put to a Japanese Company\n\nBob Hall was a Californian motoring journalist, fluent in self-taught Japanese, whose father had run MGs, Triumphs and Austin-Healeys. Hagerty places the decisive conversation in 1978, when Hall was at AutoWeek and met Kenichi Yamamoto, then head of Mazda research and development, and suggested recasting the rear-drive 323 as a two-seat roadster. Yamamoto was noncommittal. In 1981 he asked Hall to study it properly; Hall joined Mazda's Californian research organization as a product planner and argued in an early-1982 position paper that recycling existing components was the only way to make the numbers work. The program ran off-line, and the American position was that it should be a front-engine, rear-drive roadster or nothing at all.\n\n## Duo 101, V705 and the Elan on the Bench\n\nFrom 1983 the concept became an internal competition between the Californian studio and the Tokyo team. At the first judging in 1984 California's front-engine rear-drive proposal, Duo 101, beat Tokyo's front-drive and mid-engine alternatives, the mid-engine layout having struggled against noise and vibration targets. Mazda's own account confirms the reasoning: the linear responses of the original lightweight sports cars were judged unobtainable without rear drive, and a new powertrain accepted rather than compromise. A running prototype, V705, was completed by the British consultancy IAD in August 1985 with a fiberglass body over 323 mechanicals. Production approval brought the codename P729 and Toshihiko Hirai as chief engineer. Mark Jordan drew the exterior in California and Masao Yagi pushed the styling further towards the Lotus Elan; Tom Matano and Koichi Hayashi settled the detail once the project moved back to Japan. The Elan was not a vague influence, it was the reference object.\n\n## Jinba Ittai and the Power Plant Frame\n\nMazda's design principle was jinba ittai, horse and rider as one. The engineering that carries it is mostly unglamorous: double wishbones at all four corners, near-equal weight distribution, a five-speed gearbox lifted from the rear-drive 929/Luce with a very short throw, and an aluminum power plant frame bolting engine and gearbox rigidly to the differential housing so that driveline movement is taken out of the response. Mazda still calls the frame unique to its sports cars and essential to their directness, while conceding it is awkward to assemble on a mixed line. The car reached the United States as the Miata in May 1989 as a 1990 model, at a base price of $13,800, and Japan on 1 September 1989. Autocar recorded 9.1 seconds to 60 mph and 114 mph, called the gearshift the car's real advantage and scored it nine out of ten.\n\n## The 1994 Rebuild\n\nFor the 1994 model year the car was reworked around new side-impact legislation. The 1,839 cc BP-ZE arrived at 129 hp, rising to 133 hp for 1996; brakes grew, and the shell was braced, most visibly by a track bar between the seatbelt towers but also through both subframes. Dual airbags went into a redesigned dashboard. The car gained weight and, on the published figures, very little speed. In some markets, Europe among them, the 1.6 was kept on below the 1.8 as the cheap option in reduced-output form, by how much is genuinely unsettled, with published figures ranging from 89 hp to 110 hp.\n\n## Three Names and the End of the Run\n\nIn Japan the car was sold as the Eunos Roadster, Eunos being a separate premium channel Mazda was building in the manner of Acura or Lexus; in North America it was the Mazda Miata, elsewhere the MX-5. Japanese specials came thick and fast, along with M2 Corporation's low-volume conversions, and Britain received a long series of named editions ending with the Berkeley in 1998. The American price climbed from $13,800 at launch to $19,125 for the last 1997 cars. Mainstream production closed in 1997, replaced by the NB, which kept the layout and dropped the pop-up headlamps.",
 "marketNotes": "As of September 2026, classic.com's NA sub-markets separate more usefully than any single aggregate figure. Across the generation the benchmark sits at $12,255, with the lowest recorded sale at $1,450 for a 1995 Eunos-badged import in December 2021. The base model sits below that at an $11,138 benchmark and an $11,183 average on a rising trend, its lowest recorded result $2,475 in April 2022, and current asking prices spread from $9,500 to $30,500, a much wider band than the sales data supports. The M-Edition is the strongest sub-market, at a $15,218 benchmark and a $14,807 average, also rising, over results running from $3,500 in October 2023 to $24,250 in September 2026. Two sub-markets trend the other way on very thin evidence: the 1993 Limited Edition at a $12,611 benchmark against a $13,011 average across three comparable sales, between $7,025 in August 2023 and $13,000 in March 2026, and the R-Package at a $12,640 benchmark against a $13,098 average across four, between $7,000 in October 2022 and $14,500 in May 2026. A sub-market counted in single-digit sales moves on one car, so those downward arrows say considerably less than the base model's upward one.",
 "whatToLookFor": "Structure first. The rocker panels are double-skinned and spot-welded and corrode from the inside, where trapped moisture cannot escape, so a clean-looking rocker proves very little. Hagerty's US guide calls them notorious for rust, worst ahead of the rear wheel arches, and warns that body drains plug up and back water into the cabin, taking the floors with the carpets. Hagerty's UK guide ranks the bottoms of the rear fenders ahead of the wheels as the worst area, because moisture sits behind the panel, followed by inner and outer rear arches, floorpans, the bases and tops of the front fenders and the feet of the windshield pillars. Classic & Sports Car adds that rockers are rarely repaired properly and that clear drain channels are the best available proxy for an attentive owner. Panels welded over existing rust are common and leave the corrosion running underneath. Then the crankshaft. On early 1.6 cars the pulley nose is short and the small pulley bolt carries both timing and accessory loads; the MX-5 Owners Club identifies the short-nose crank by four slots in the pulley against eight on the later part. Look for a wobbling pulley, ferrous powder around the bolt or key, a bent or rusted key, and an engine running poorly because the timing has crept. Beyond that, check the radiator is not silted; check the top for clouding and rot; check the rear calipers on a car that has stood. Twenty-five-year import rules have put Japanese-market Eunos Roadsters on American roads alongside home-market Miatas, so establish origin from the rear license plate recess, square on a Eunos and rectangular on a European car, and from the VIN prefix, JM1 North American, JMZ European, JM0 Australian, with Eunos cars carrying a shorter Japanese chassis number instead.",
 "commonProblems": "Two faults decide what an NA Miata is worth. The first is rust: rocker panels, rear arches and floors, developing from the inside, expensive to put right properly and frequently disguised. LucaCarMods, a restoration specialist, explains the mechanism: the rockers are double-skinned and spot-welded, trapped moisture cannot escape, and a proper repair means cutting back to sound metal, zinc coating and welding in new steel. Owner-reported costs on the Grassroots Motorsports forum run from $370 for rust cut out and fresh metal let in at a local shop to under $1,000 for both rockers done in primer, with worse cars quoted high enough that a better shell becomes the cheaper route. The second is the short-nose crankshaft on early 1.6 engines. Miata.net puts the keyway engagement area at 0.045 square inches against 0.087 on the long-nose part, notes that the timing cog acts as a structural member so the small pulley bolt carries both timing and accessory belt loads, and records the change to the large-bolt big-nose crankshaft at US VIN 209447 during 1991. Hagerty reckons it reached about 1 percent of 1990 and early 1991 owners, usually after the pulley key was reassembled wrong at a timing belt service. Worn keyways are not repairable; the fix is a later crankshaft assembly, which on a big-nose conversion also means the oil pump and possibly the front cover. Away from those two the mechanical package is durable, with Hagerty UK reporting serviced examples past 124,000 miles. The recurring smaller faults are a silted radiator causing head gasket failure, a rattle on start-up from the hydraulic tappets, rear calipers sticking on cars that sit, and soft tops that cloud and split.",
 "valueTrajectory": "The Miata spent two decades as a cheap car and the bottom of the market still behaves like one. It launched in the United States at $13,800 for 1990 and left at $19,125 for 1997, cheap in its own period and part of why so many were simply used up. Hagerty's US buyer's guide, working from condition rather than sales, puts #3 (Good) base cars in the $6,000 to $7,000 range and a 1995 M Edition at about $12,500; those are the guide's own figures rather than current observations. What the sales data shows as of September 2026 is separation rather than a general rise. classic.com has the base car at an $11,138 benchmark on a rising trend and the M-Edition at $15,218, also rising, while the thinly traded 1993 Limited Edition and R-Package sub-markets trend down at $12,611 and $12,640. The mechanism is straightforward: attrition has been severe, sound dry cars are finite, and doing rockers and arches properly now costs more than a mediocre example is worth, so good cars are pulled up while rotten ones are written off. At the top, Hagerty records a 28,000-mile 1990 car making $27,500 at Barrett-Jackson and names $36,750 for a 1993 Limited Edition as the unmodified record, and dates the turn upward to about 2018 rather than the pandemic.",
 "overallConfidence": "high",
 "sources": [
  {
   "ref": "mazda-history-roadster",
   "title": "MX-5(1989～) | HISTORY OF MAZDA",
   "url": "https://www.mazda.com/en/about/history/greatcar/roadster/01/",
   "publisher": "Mazda Motor Corporation",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Mazda's own account of the early-1980s concept, the jinba ittai principle, and the rejection of front-drive and mid-engine layouts in favor of rear drive."
  },
  {
   "ref": "mazda-ppf-story",
   "title": "Mazda: MX-5 900,000 Roadsters produced",
   "url": "https://www2.mazda.com/en/stories/craftmanship/mx-5/roadster_90m/index.html",
   "publisher": "Mazda Motor Corporation",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Manufacturer source for the power plant frame - rigidity between transmission and differential, unique to Mazda's sports cars - and for Hirai as first program manager"
  },
  {
   "ref": "wikipedia-mx5-na",
   "title": "Mazda MX-5 (NA)",
   "url": "https://en.wikipedia.org/wiki/Mazda_MX-5_(NA)",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Launch dates; B6-ZE 115 hp/100 lb-ft and 105 hp automatic; BP-ZE 129 hp from 1994, 133 hp from 1996; European 1.6 at 89 hp; the 1994 track bar and subframe bracing; 980/2,183 lb; and the special-edition list with counts."
  },
  {
   "ref": "wikipedia-mx5",
   "title": "Mazda MX-5",
   "url": "https://en.wikipedia.org/wiki/Mazda_MX-5",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Carries both conflicting NA figures - a table headed 'Total Production 431,506' and the text 'sold 228,961 units between 1989 and 1997' - plus the Guinness declaration of 2000 at 531,890 cars and the Eunos/Miata/MX-5 naming."
  },
  {
   "ref": "evo-birth",
   "title": "Birth of an icon: 1989: Mazda MX-5",
   "url": "https://www.evo.co.uk/mazda/mx-5/9879/birth-of-an-icon-1989-mazda-mx-5",
   "publisher": "evo",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "The development chronology: 1983 approval, the 1984 judging won by California's Duo 101, IAD's V705 prototype of August 1985, approval as P729 in January 1986, Hirai as chief engineer, and the debt to the Lotus Elan."
  },
  {
   "ref": "hagerty-hall-origin",
   "title": "The unlikely American origin of the Mazda Miata",
   "url": "https://www.hagerty.com/media/car-profiles/mazda-mx5-miata-origin-american-bob-hall/",
   "publisher": "Hagerty Media",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Bob Hall's origin sequence: the 1978 Yamamoto meeting, the 1981 study request, the 1982 position paper, the 'front-engine/rear-drive or nothing' stance, Mark Jordan's sketches, Masao Yagi steering styling towards the Elan, and approval in late 1985."
  },
  {
   "ref": "autocar-1990-roadtest",
   "title": "1990 Mazda MX-5 road test - Throwback Thursday",
   "url": "https://www.autocar.co.uk/car-news/1990-mazda-mx-5-road-test-throwback-thursday",
   "publisher": "Autocar",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "The original period road test: 9.1 seconds to 60 mph, 114 mph, nine out of ten, the gearshift named the car's real advantage and the firm ride the cost of the handling."
  },
  {
   "ref": "classicsportscar-guide",
   "title": "Mazda MX-5 (NA) buyer's guide: what to pay and what to look for",
   "url": "https://www.classicandsportscar.com/features/buyers-guide-mazda-mx-5-na",
   "publisher": "Classic & Sports Car",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "The 89-105 hp band for the post-1993 1.6; the small-bolt short-nose crank as a broken-crankshaft risk; rocker panels rarely repaired properly; clear drain channels as a proxy for care; Eunos imports with inferior rust protection."
  },
  {
   "ref": "hagerty-us-guide",
   "title": "Your handy (1990-97) Mazda Miata buyer's guide",
   "url": "https://www.hagerty.com/media/buying-and-selling/1990-97-mazda-miata-buyers-guide/",
   "publisher": "Hagerty Media",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "US condition-based guidance: #3 (Good) base cars at $6,000 to $7,000 and a 1995 M Edition around $12,500; rocker panels notorious for rust, worst ahead of the rear wheel arches; plugged body drains rotting floors; the crank keyway failure reaching about 1 percent of 1990 and early 1991 owners after bad timing-belt reassembly."
  },
  {
   "ref": "hagerty-na-collectible",
   "title": "$27,500, low-mile NA confirms Miata's collectible status",
   "url": "https://www.hagerty.com/media/market-trends/27500-low-mile-na-confirms-miatas-collectible-status/",
   "publisher": "Hagerty Media",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "The top of the US market: a 28,000-mile 1990 base car at $27,500 at Barrett-Jackson, $36,750 named as the unmodified record for a 1993 Limited Edition, appreciation dated to about 2018 rather than the pandemic, and Gen Z at 27 percent of first-generation quotes against 7 percent of the market overall."
  },
  {
   "ref": "carscoops-base-prices",
   "title": "You're Paying Less For A New Miata Now Than 36 Years Ago",
   "url": "https://www.carscoops.com/2025/12/miata-prices-inflation-adjusted-true-cost-analysis/",
   "publisher": "Carscoops",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Period US list prices by model year, published December 2025: $13,800 for the 1990 launch car rising to $19,125 for the 1997 model year, the last of the NA run."
  },
  {
   "ref": "hagerty-uk-guide",
   "title": "Buying Guide: Mazda MX-5 Mk1 (1989 - 1998)",
   "url": "https://www.hagerty.co.uk/articles/buyers-guide-mazda-mx-5-mk1-1989-1998/",
   "publisher": "Hagerty UK",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "The rust map in severity order, from rear fender bottoms ahead of the wheels through arches, rockers, floorpans and screen pillar feet; engine longevity past 124,000 miles; four- versus eight-slot pulley identification."
  },
  {
   "ref": "petrolicious-mk1-guide",
   "title": "Mazda MX-5 Mk1 Buying Guide",
   "url": "https://petrolicious.com/blogs/articles/mazda-mx-5-mk1-buying-guide",
   "publisher": "Petrolicious",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "The European special-edition chronology by year to the 1998 Berkeley; a 1.6 reduced to a stated 110 hp from 1995; the 1991 BBR turbo at 150 hp; the eight-slot pulley replacing the four-slot original."
  },
  {
   "ref": "miatanet-production",
   "title": "Mazda MX-5 Production Information",
   "url": "https://www.miata.net/faq/production.html",
   "publisher": "Miata.net",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "US production by model year compiled by Brian Sundue, 1990 to 1997, summing to 215,364, with no Japanese or European figures at all - which is why it cannot settle the generation total."
  },
  {
   "ref": "miatanet-crankshaft",
   "title": "Miata Crankshafts",
   "url": "https://www.miata.net/garage/crankshaft.html",
   "publisher": "Miata.net",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "The short-nose failure in detail: 0.045 sq in keyway engagement against 0.087 on the long-nose, the timing cog as a structural member, the change to the big-nose crankshaft at US VIN 209447, and unrepairable keyways."
  },
  {
   "ref": "mx5oc-crank-thread",
   "title": "How to identify short and long nosed crankshafts with pics of pulleys - NA (Mk1)",
   "url": "https://forum.mx5oc.co.uk/t/how-to-identify-short-and-long-nosed-crankshafts-with-pics-of-pulleys-na-mk1/16759",
   "publisher": "MX-5 Owners Club (UK)",
   "sourceType": "club-forum",
   "reliability": "low",
   "notes": "Club identification guidance only: four pulley slots indicate a short-nose crank, eight a long-nose; the problem centers on pre-spring-1991 cars; a loosening bolt transfers drive to the feather key and retards valve timing."
  },
  {
   "ref": "grm-bodywork-thread",
   "title": "Another Miata bodywork thread",
   "url": "https://grassrootsmotorsports.com/forum/grm/another-miata-bodywork-thread/97229/page1/",
   "publisher": "Grassroots Motorsports",
   "sourceType": "club-forum",
   "reliability": "low",
   "notes": "US owner-reported bodywork costs only: $370 for rust cut out and fresh metal welded in at a local shop, under $1,000 for both rocker panels repaired and left in primer, and body shop quotes above that treated as the point where a different shell becomes the cheaper route."
  },
  {
   "ref": "bofi-na-guide",
   "title": "Mazda MX-5 Mk1 NA Model Guide",
   "url": "https://bofiracing.com/blog/mazda-mx-5-mk1-na-model-guide/",
   "publisher": "BOFI Racing",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "NA6C and NA8C codes, 114 and 128 hp, production stated only as exceeding 400,000 units, the 1994 larger brakes, side-impact beams and subframe reinforcement, and about 2,116 lb."
  },
  {
   "ref": "mx5parts-model-info",
   "title": "Which Mk1 MX-5 Have I Got? NA Guide",
   "url": "https://www.mx5parts.co.uk/mx5-eunos-miata-roadster-mk1-model-info",
   "publisher": "MX5parts",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Rectangular rear plate recess and Mazda badging on European cars against a square recess and Eunos badging on Japanese ones; the JMZ, JM0 and JM1 VIN prefixes; UK 1.6 at 90 hp after 1993."
  },
  {
   "ref": "jdmbuysell-roadster-na",
   "title": "2026 Mazda Roadster NA Buyer's Guide",
   "url": "https://www.jdmbuysell.com/learn/mazda/roadster/na/",
   "publisher": "JDMBUYSELL",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Confirms NA6CE and NA8C as the factory chassis codes, right-hand drive throughout the JDM run, JDM-only V-Special and S-Limited editions, a 431,506 NA total, and import rust checkpoints at subframe, frame rails and battery tray."
  },
  {
   "ref": "encycarpedia-mx5-18",
   "title": "Mazda MX-5 1.8 (NA) specs (1994-1998)",
   "url": "https://www.encycarpedia.com/mazda/94-mx-5-1-8-roadster",
   "publisher": "encyCARpedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "1.8 specification: 1,840 cc, 83.0 x 85.0 mm, 9.4:1, 128 hp at 6,500 rpm, 2,183 lb, 3,975 x 1,675 x 1,230 mm on a 2,265 mm wheelbase, double wishbones, 48-liter tank, 7.9 s to 60 mph, 122 mph."
  },
  {
   "ref": "classic-na-generation",
   "title": "Mazda MX-5 Miata NA 1st Gen Market",
   "url": "https://www.classic.com/m/mazda/mx-5-miata/na-1st-gen/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Generation-level aggregate as of September 2026: benchmark and average both $12,255, lowest recorded sale $1,450 for a 1995 Eunos-badged car on 14 December 2021, and the sub-market benchmarks used to compare base, M-Edition and Special Edition cars."
  },
  {
   "ref": "classic-na-base",
   "title": "Mazda MX-5 Miata - Base Model - NA Market",
   "url": "https://www.classic.com/m/mazda/mx-5-miata/na-1st-gen/base-model/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Base-model sub-market as of September 2026: benchmark $11,138 on a rising trend, average $11,183, lowest recorded sale $2,475 on 27 April 2022, and live asking prices spread from $9,500 to $30,500 across 22 cars offered."
  },
  {
   "ref": "classic-na-medition",
   "title": "Mazda MX-5 Miata 'M-Edition' - NA Market",
   "url": "https://www.classic.com/m/mazda/mx-5-miata/na-1st-gen/m-edition/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "M-Edition sub-market as of September 2026: benchmark $15,218 on a rising trend, average $14,807, results from $3,500 on 5 October 2023 to $24,250 for a 1996 car on 9 September 2026."
  },
  {
   "ref": "classic-na-limited",
   "title": "Mazda MX-5 Miata 'Limited Edition' - NA Market",
   "url": "https://www.classic.com/m/mazda/mx-5-miata/na-1st-gen/limited-edition/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "1993 Limited Edition sub-market as of September 2026: benchmark $12,611 against a $13,011 average on a declining trend, across three comparable sales between $7,025 on 16 August 2023 and $13,000 on 6 March 2026, with none currently offered."
  },
  {
   "ref": "classic-na-rpackage",
   "title": "Mazda MX-5 Miata - R-Package - NA Market",
   "url": "https://www.classic.com/m/mazda/mx-5-miata/na-1st-gen/r-package/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "R-Package sub-market as of September 2026: benchmark $12,640 against a $13,098 average on a declining trend, across four analyzed sales between $7,000 on 19 October 2022 and $14,500 on 4 May 2026, with none currently offered."
  },
  {
   "ref": "lucacarmods-sills",
   "title": "Repairing rusty sills on a Mazda MX-5 NA and NB",
   "url": "https://lucacarmods.com/en/blogs/blog/verroeste-dorpels-bij-een-mazda-mx-5-na-en-nb-herstellen",
   "publisher": "LucaCarMods",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Restoration specialist on rocker panel corrosion: double-skinned spot-welded construction traps moisture so rust works outward, and a proper repair means cutting back to sound metal, zinc coating and welding in new steel rather than plating over the damage."
  }
 ],
 "claims": [
  {
   "section": "history",
   "claimText": "The Miata originated with the American motoring journalist Bob Hall, who proposed a rear-drive two-seat roadster based on the Mazda 323 to Kenichi Yamamoto in 1978, was asked to study the idea in 1981, and joined Mazda's Californian research organization as a product planner.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "hagerty-hall-origin",
    "evo-birth"
   ]
  },
  {
   "section": "history",
   "claimText": "The layout was settled by an internal competition in which the Californian studio's front-engine, rear-drive Duo 101 proposal beat Tokyo's front-drive and mid-engine alternatives at the first judging in 1984, Mazda's own account confirming that rear drive was chosen because the linear feel of the original lightweight sports cars was judged otherwise unobtainable.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "evo-birth",
    "mazda-history-roadster",
    "hagerty-hall-origin"
   ]
  },
  {
   "section": "history",
   "claimText": "A running prototype designated V705 was completed by the British consultancy IAD in August 1985 with a fiberglass body over Mazda 323 mechanicals, after which the program was renamed P729 and Toshihiko Hirai was appointed chief engineer.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "evo-birth",
    "hagerty-hall-origin",
    "mazda-ppf-story"
   ],
   "conflictNote": "evo dates final production approval and the P729 codename to January 1986. Hagerty states the project received production approval in late 1985 on president Yamamoto's recommendation, with Hirai appointed chief engineer at that point. The accounts differ by a matter of months and are not resolved by any source consulted here, so no single approval date is asserted."
  },
  {
   "section": "history",
   "claimText": "The original Lotus Elan was a deliberate reference rather than a loose influence: Mark Jordan drew the exterior in California and Masao Yagi pushed the styling further towards the Elan, with Tom Matano and Koichi Hayashi settling the detail after the project returned to Japan.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "hagerty-hall-origin",
    "evo-birth"
   ]
  },
  {
   "section": "history",
   "claimText": "The car was launched at the Chicago Auto Show on 10 February 1989, reached the United States in May 1989 as a 1990 model and Japan on 1 September 1989, and the period Autocar road test recorded 9.1 seconds to 60 mph and 114 mph, scoring the car nine out of ten and naming the gearshift its real advantage.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-mx5-na",
    "autocar-1990-roadtest",
    "evo-birth"
   ]
  },
  {
   "section": "history",
   "claimText": "The Miata's US base list price ran from $13,800 for the 1990 launch model year to $19,125 for the final 1997 cars. It is single-sourced because it is the only model-year price table for the NA run reached in this session.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "carscoops-base-prices"
   ]
  },
  {
   "section": "history",
   "claimText": "The car was sold as the Eunos Roadster in Japan under a separate premium sales channel Mazda was building in the manner of Acura or Lexus, as the Mazda Miata in North America and as the Mazda MX-5 elsewhere; Wikipedia records the Guinness Book of World Records declaring it the best-selling two-seat sports car in history in 2000 at a then-total of 531,890 cars.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-mx5",
    "wikipedia-mx5-na"
   ]
  },
  {
   "section": "specs",
   "claimText": "The car uses a unitary steel monocoque with double wishbones and anti-roll bars at both ends and a five-speed manual gearbox derived from that of the rear-drive Mazda 929/Luce, together with an aluminum power plant frame that Mazda describes as maintaining rigidity between transmission and differential and essential to the car's direct feel.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-mx5-na",
    "mazda-ppf-story",
    "encycarpedia-mx5-18"
   ]
  },
  {
   "section": "specs",
   "claimText": "The launch engine was the 1,598 cc B6-ZE(RS) twin-cam 16-valve four producing 115 hp at 6,500 rpm and 100 lb-ft at 5,500 rpm, falling to 105 hp with the optional four-speed automatic offered in the American and Japanese markets.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-mx5-na",
    "bofi-na-guide",
    "hagerty-uk-guide"
   ]
  },
  {
   "section": "specs",
   "claimText": "For the 1994 model year the 1,839 cc BP-ZE engine was introduced at 129 hp and 110 lb-ft, rising to 133 hp and 114 lb-ft for 1996, alongside dual airbags, larger brakes and a braced shell adding a track bar between the seatbelt towers and reinforced subframes to meet new side-impact standards.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-mx5-na",
    "bofi-na-guide",
    "classicsportscar-guide"
   ]
  },
  {
   "section": "specs",
   "claimText": "The 1.6-liter engine was retained below the 1.8 in some markets after 1993 in reduced-output form, but the output figure is not settled across sources.",
   "confidence": "low",
   "status": "disputed",
   "sourceRefs": [
    "wikipedia-mx5-na",
    "mx5parts-model-info",
    "petrolicious-mk1-guide",
    "classicsportscar-guide"
   ],
   "conflictNote": "Wikipedia states the European 1.6 was detuned to 89 hp. MX5parts gives 90 hp for UK 1.6 cars from 1993. Petrolicious states it was reduced to 110 hp from 1995. Classic & Sports Car gives a band of 89-105 hp for post-1993 cars. These cannot be resolved from the sources consulted here and no single detuned output is asserted."
  },
  {
   "section": "production",
   "claimText": "No consistent total production figure for the NA generation exists across the sources consulted, so no total is asserted.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "wikipedia-mx5",
    "jdmbuysell-roadster-na",
    "bofi-na-guide",
    "miatanet-production"
   ],
   "conflictNote": "Wikipedia's Mazda MX-5 page carries a production table headed 'First Generation (NA) (Total Production 431,506)' and, in its running text, the statement that 'The first generation MX-5 sold 228,961 units between 1989 and 1997'. JDMBUYSELL repeats 431,506; BOFI Racing states only that production exceeded 400,000. Miata.net's US-only model-year figures sum to 215,364 and cover no other market. Nothing consulted here explains the gap, and it is not resolved."
  },
  {
   "section": "production",
   "claimText": "United States production by model year totals 215,364 cars across 1990 to 1997, with no Japanese or European breakdown published alongside it. It is single-sourced because no other consulted source publishes market-level annual figures.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "miatanet-production"
   ]
  },
  {
   "section": "production",
   "claimText": "Named special editions carry documented counts including 250 UK British Racing Green Limited Editions in 1991, 800 Eunos J Limited and 800 J Limited II for Japan, 1,505 US and 300 Canadian 1993 Limited Editions, 1,841 R-Package cars, roughly 3,000 to 3,500 M-Editions a year, 1,500 Special Touring Option cars, and 400 UK Berkeleys sold in 1998.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-mx5-na",
    "petrolicious-mk1-guide",
    "jdmbuysell-roadster-na"
   ]
  },
  {
   "section": "problems",
   "claimText": "Corrosion of the double-skinned, spot-welded rocker panels develops from the inside out because trapped moisture cannot escape, so external condition is a poor guide, and it typically appears alongside rust in the rear fender bottoms ahead of the wheels, the inner and outer rear arches, the floorpans, the front fender bases and the windshield pillar feet.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "hagerty-uk-guide",
    "hagerty-us-guide",
    "lucacarmods-sills",
    "classicsportscar-guide",
    "petrolicious-mk1-guide"
   ]
  },
  {
   "section": "problems",
   "claimText": "Blocked body drains are a distinct and common cause of floor corrosion on US cars, backing water up into the cabin and taking the floors as well as the carpets, which is why clear drain channels are treated as a proxy for an attentive owner.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "hagerty-us-guide",
    "classicsportscar-guide"
   ]
  },
  {
   "section": "problems",
   "claimText": "US owner-reported costs for rocker panel repair run from $370 for rust cut out and new metal welded in at a local shop to under $1,000 for both sides finished in primer, with heavier quotes reaching the point where buying a sounder shell is the cheaper route. These are individual owner reports on a forum, not shop rate cards.",
   "confidence": "low",
   "status": "unverified",
   "sourceRefs": [
    "grm-bodywork-thread",
    "lucacarmods-sills"
   ]
  },
  {
   "section": "problems",
   "claimText": "Early 1.6 engines use a short-nose crankshaft whose keyway engagement area is 0.045 square inches against 0.087 on the long-nose part, with the timing cog acting as a structural member so that the small pulley bolt carries both timing and accessory belt loads; the redesigned large-bolt big-nose crankshaft was adopted at US VIN 209447 during 1991, and worn keyways are not repairable.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "miatanet-crankshaft",
    "classicsportscar-guide",
    "mx5oc-crank-thread"
   ]
  },
  {
   "section": "problems",
   "claimText": "Hagerty puts the incidence of the short-nose crankshaft failure at about 1 percent of 1990 and early 1991 owners and attributes it to the crank pulley key being reassembled incorrectly during timing belt service rather than to a defect that reaches every affected car.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "hagerty-us-guide",
    "miatanet-crankshaft"
   ]
  },
  {
   "section": "problems",
   "claimText": "A short-nose crankshaft can be identified by four slots in the crankshaft pulley against eight on the later part, and impending failure shows as a wobbling pulley, ferrous powder around the bolt or key, a deformed or rusted key, and an engine running poorly because the valve timing has retarded.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "mx5oc-crank-thread",
    "hagerty-uk-guide",
    "petrolicious-mk1-guide"
   ]
  },
  {
   "section": "market",
   "claimText": "Japanese-market Eunos Roadsters, now importable to the United States under the twenty-five-year rule, can be told from European-market cars by a square rather than rectangular rear license plate recess, Eunos badging, and a shorter Japanese chassis number against the JMZ, JM0 and JM1 VIN prefixes; imported cars often carry equipment no US-market Miata was given, but are reported to have had inferior rust protection.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "mx5parts-model-info",
    "jdmbuysell-roadster-na",
    "classicsportscar-guide"
   ]
  },
  {
   "section": "market",
   "claimText": "As of September 2026 classic.com puts the NA generation benchmark at $12,255 and its sub-markets diverge: the base model at an $11,138 benchmark and the M-Edition at $15,218 are both trending upward, while the thinly traded 1993 Limited Edition at $12,611 and the R-Package at $12,640 trend downward on three and four analyzed sales respectively.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-na-generation",
    "classic-na-base",
    "classic-na-medition",
    "classic-na-limited",
    "classic-na-rpackage"
   ]
  },
  {
   "section": "market",
   "claimText": "Hagerty's US buyer's guide, which values by condition rather than by recorded sales, puts #3 (Good) base cars at $6,000 to $7,000 and a 1995 M Edition at about $12,500, below the sales-derived classic.com benchmarks for the same cars as of September 2026.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "hagerty-us-guide",
    "classic-na-base",
    "classic-na-medition"
   ]
  },
  {
   "section": "market",
   "claimText": "At the top of the US market Hagerty records a 28,000-mile 1990 base car making $27,500 at Barrett-Jackson and names $36,750 for a 1993 Limited Edition as the unmodified record, dating the upward turn in NA values to about 2018 rather than to the pandemic.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "hagerty-na-collectible"
   ]
  }
 ]
};
