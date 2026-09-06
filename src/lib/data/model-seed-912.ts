/**
 * Researched model draft - Porsche 912 (1965-1969, 912E 1976).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seed912 = {
 "slug": "porsche/912",
 "make": "Porsche",
 "model": "912",
 "generation": "912 and 912E",
 "generationCode": null,
 "trim": null,
 "yearStart": 1965,
 "yearEnd": 1969,
 "bodyStyles": [
  "2-door, 2+2 fixed-roof coupe (1965-1969; 912E 1976)",
  "2-door, 2+2 Targa with removable roof panel and zip-out plastic rear window ('soft-window', from December 1966)",
  "2-door, 2+2 Targa with fixed glass rear window ('Version II', from January 1968)"
 ],
 "engines": [
  "1,582 cc Type 616/36 air-cooled pushrod flat-four (616/39 in some US applications), 74 mm x 82.5 mm, 9.3:1, twin twin-choke carburettors, 90 PS DIN (66 kW) at 5,800 rpm, 122 Nm (90 lb-ft) at 3,500 rpm; quoted as 102 hp SAE gross in the United States",
  "912E (1976): 1,971 cc Volkswagen Type 4 air-cooled flat-four, 94 mm x 71 mm, Bosch L-Jetronic injection, 86 bhp SAE net (90 PS by Porsche's own figure) at 4,900 rpm, 137 Nm (98 lb-ft) at 4,900 rpm"
 ],
 "productionTotal": null,
 "productionNotes": "The 912 total is not agreed and the disagreement is wide enough to matter. Porsche's own current material, both the corporate 'What is the Porsche 912?' page and the Porsche Klassik newsroom feature, gives 30,745 cars for 1965 to 1969. Wikipedia says 'more than 32,000' were built between April 1965 and July 1969, broken down elsewhere on the same page as 'nearly 30,000' coupes and 'about 2,500' Targas; Renndriver repeats 'roughly 32,000' and 'roughly 2,500 Targas'. The Porsche Club Great Britain register rounds to 'only 30,000'. Conceptcarz prints 21,600 in its data table while its own text says nearly 30,000 coupes and around 2,500 Targas, so that figure is treated as an internal error rather than a competing count. Drive Patina reproduces the commonly quoted year-by-year figures of 6,401 (1965), 9,090 (1966), 8,436 (1967), 6,904 (1968) and 5,485 (1969), which sum to about 36,300, and explicitly warns that those annual numbers describe sales and deliveries, not factory output, and cannot be added into a production total; it gives roughly 27,738 coupes and 2,562 Targas against Porsche's 30,745. None of the sources fetched here publishes the factory Kardex-derived count by body style and model year, so the split and the total are left unresolved. Body construction was shared with Karmann of Osnabruck: the Porsche Club GB register says cars were built by both Porsche and Karmann, and Gooding's 2017 catalogue says the majority of coupes were Karmann-built. The 912E is a second, smaller dispute. Porsche's newsroom feature on the prototype and the corporate page both say 2,099 were built; Wikipedia's body text, Stuttcars, classic.com and Renndriver say 2,092, built from May 1975 to July 1976, and Wikipedia also uses 2,099 in another passage. Heacock Classic adds that about 500 of the 912Es had sunroofs, a figure no other source here repeats. Because both the 1965-1969 total and the 912E total are contested by credible sources, productionTotal is null.",
 "notableTrims": [
  {
   "name": "912 coupe, short wheelbase (1965-1968)",
   "note": "The core car: 2,211 mm wheelbase shared with the early 911, three-gauge dashboard on 1965-1966 cars, 4.5-inch wheels to 1967 and 5.5-inch from 1968. The earliest cars with painted dash and 356-style details are the ones registries and auction houses single out."
  },
  {
   "name": "912 Targa 'soft window' (December 1966-early 1968)",
   "note": "Version I Targa with a zip-out plastic rear window, introduced as a 1967 model. Most buyers moved to the glass-window Version II once it was offered in January 1968, which makes the soft-window cars the scarcest body of the run; Gooding describes them as one of the rarest models of the period."
  },
  {
   "name": "912 Targa 'Version II' hard window (1968-1969)",
   "note": "Fixed glass rear window on the brushed stainless roll hoop. Quieter and more usable than the soft-window car; on classic.com the 1969 long-wheelbase Targa carries the highest benchmark of any 912 body as of September 2026."
  },
  {
   "name": "912 long wheelbase (1969 only)",
   "note": "Rear wheels moved back about 57 mm (2.5 inches) to 2,268 mm (89.3 inches), with the flared arches, improved ventilation and electric rear-window defrost of the 1969 911. One model year only before the 914 took the entry-level slot, and the model year most often quoted with the higher 102 hp SAE rating."
  },
  {
   "name": "912 five-speed",
   "note": "The four-speed was standard; the five-speed was a $35 option according to Stuttcars, and Road & Track tested a five-speed car in 1966. Its first-on-the-left dog-leg pattern drew criticism in period but the option is now the one buyers ask for first."
  },
  {
   "name": "912E (1976, North America only)",
   "note": "G-body 911 shell with the fuel-injected 2.0-litre Volkswagen Type 4 flat-four from the 914, thermal reactors, a galvanised shell and a 20-plus gallon tank. Built as a one-year stop-gap between the 914 and the 924 and priced at $10,845, $3,000 under a 911S. Not a 1965-1969 car in any mechanical sense, and traded separately."
  }
 ],
 "specs": {
  "layout": "Rear-mounted air-cooled flat-four behind the rear axle, rear-wheel drive; unitary steel body shared with the contemporary 911 (F-body 1965-1969, G-body for the 912E)",
  "chassis": "Steel monocoque, bodies built by Porsche and by Karmann of Osnabruck; wheelbase 2,211 mm (87 in) 1965-1968 and 2,268 mm (89.3 in) for 1969; the 912E used the 911's 2,271 mm (89.4 in) G-body shell with a galvanised structure",
  "engine": "1,582 cc Type 616/36 pushrod flat-four from the 356 SC, detuned from 95 to 90 PS; 74 mm x 82.5 mm; 9.3:1; twin twin-choke carburettors, Solex 40 PII-4 per Gooding and Stuttcars, Weber 40 IDF per the Porsche newsroom (see claims). 912E: 1,971 cc VW Type 4, 94 mm x 71 mm, Bosch L-Jetronic",
  "power": "90 PS DIN (66 kW) at 5,800 rpm per Porsche; 102 hp SAE gross quoted in the United States and by Road & Track in 1966. 912E: 86 bhp SAE net at 4,900 rpm (Stuttcars, Heacock) or 90 PS (Porsche newsroom)",
  "torque": "122 Nm (90 lb-ft) at 3,500 rpm; Stuttcars quotes 98 lb-ft at 3,500 rpm. 912E: 137 Nm (98 lb-ft) at 4,900 rpm",
  "transmission": "Four-speed manual standard, five-speed manual optional ($35 in the US per Stuttcars), dog-leg first on five-speed cars. 912E: five-speed per the Porsche newsroom; Heacock Classic describes a four-speed (see claims)",
  "suspension": "MacPherson-type struts with longitudinal torsion bars at the front, semi-trailing arms with transverse torsion bars at the rear, as on the 911; non-adjustable front strut towers on 1965-1966 cars, adjustable from 1966 US models",
  "brakes": "Discs all round, 9.26 in front and 9.6 in rear per Stuttcars; dual-circuit system mandated for 1968 US cars",
  "wheels_tyres": "15 x 4.5 in steel wheels 1965-1967, 15 x 5.5 in from 1968, 165 HR 15 tyres; Road & Track's 1966 test car ran 6.95 x 15 Goodyear Grand Prix tyres on 5.5 in wheels. 912E: 14 in Fuchs alloys optional",
  "weight": "965 kg (2,127 lb) kerb per Wikipedia, Renndriver and Silodrome; 995 kg DIN per the Porsche newsroom; 970 kg per autoevolution; 2,095 lb dry per Stuttcars. 912E: 2,395 lb per Heacock, 'about 2,200 lb' per Rennlist, 'under 2,400 lb' per PCA",
  "dimensions": "Length 4,135-4,163 mm, width 1,600-1,610 mm, height 1,320 mm depending on source; wheelbase 2,211 mm (1965-1968) or 2,268 mm (1969)",
  "acceleration": "0-60 mph in 11.6 s (Road & Track, 1966, five-speed car); 0-100 km/h in 13.5 s per Porsche; 0-62 mph 11.8 s per autoevolution; standing quarter mile 18.1 s at 78 mph (Road & Track). 912E: 9.8 s to 60 mph per Car and Driver as quoted by PCA, 11.3 s per Heacock, 13.0 s per Stuttcars",
  "top_speed": "183 km/h (114 mph) per Porsche; 119 mph recorded by Road & Track in 1966; 115 mph per Stuttcars. 912E: about 115-120 mph depending on source",
  "fuel_economy": "Up to 30 mpg (US) claimed for the 912; 912E quoted at around 30 mpg highway with a 600-mile range from its 20-plus gallon tank, 23.0 mpg observed by Heacock",
  "price_new": "DM 16,250 in Germany in 1965; $4,700 in the US in 1965, $4,690 as tested by Road & Track in 1966, $5,235 coupe and $5,615 Targa in 1969; 912E $10,845 in 1976"
 },
 "summary": "The Porsche 912 (1965-1969) was the four-cylinder answer to a commercial problem: the new 911 was too expensive for many of the customers who had kept the 356 in production, particularly in the United States. Porsche put the 356 SC's 1.6-litre Type 616 pushrod flat-four, detuned from 95 to 90 PS, into Butzi Porsche's 911 body, stripped some trim, and sold it from April 1965 at DM 16,250 in Germany and $4,700 in America. It outsold the 911 by around two to one through 1967, and Road & Track found that the lighter engine cured the tail-happiness the swing-axle 356 had been known for. A Targa followed in December 1966 and a long-wheelbase 1969 model closed the run before the 914 took over the entry-level job. Porsche's current figure is 30,745 cars; other sources say 30,000, or more than 32,000, and the disagreement is set out below. The 912E, a one-year 1976 car for North America built on the G-body 911 shell with the 914's fuel-injected 2.0-litre Volkswagen engine, revived the badge as a stop-gap before the 924; 2,092 or 2,099 were built depending on the source.",
 "history": "## The Problem the 912 Solved\n\nWhen the 911 went on sale in 1964 it was, by the Porsche Club Great Britain register's account, not well received in America because it was regarded as too expensive. Porsche's own history describes the 912 as a bridge between two models, built for customers who preferred the four-cylinder engine over the 911's six, and closing the price gap between the 356, still in production, and the new car. The solution was direct. The 1,582 cc Type 616 flat-four of the 356 SC was reduced from 95 to 90 PS at 5,800 rpm, mounted in the 911's steel body, and sold with reduced cabin trim as a cost measure. The result weighed around 965 kg, roughly 250 lb less than a 911, and listed at DM 16,250 in Germany in 1965 and $4,700 in the United States.\n\n## Launch and Reception\n\nProduction began in April 1965, Conceptcarz giving 5 April, with European customers served from June and the US market from September of that year according to the Porsche Club GB register. The Porsche Vehicle Research Department kept a small block of early chassis numbers for its own use; Wikipedia records 13328, 13329, 13330, 13352 and 13386 to 13397, and the oldest known survivor is serial 13394. Road & Track tested a five-speed car in 1966 at $4,690 and recorded 0-60 mph in 11.6 seconds, the quarter mile in 18.1 seconds at 78 mph and 119 mph flat out, under the headline that oversteer was a thing of the past: the lighter engine had shifted the weight distribution very much in the 912's favour. The magazine's only real complaint was the five-speed's dog-leg pattern with first on the left and down. Stuttcars records that through 1967 the 912 outsold the 911 by two to one, and Renndriver gives 6,401 912s against 3,390 911s in 1965 alone. Silodrome notes that some historians credit the car with keeping the company solvent.\n\n## Targa, Rallying and Yearly Change\n\nThe Targa, with its brushed stainless roll hoop, removable roof panel and a heavy plastic rear window that unzipped, entered production in December 1966 as a 1967 model. Porsche later called it Version I; enthusiasts call it the soft-window car. In January 1968 a Version II with a fixed glass rear window was added and most buyers chose it, which is why soft-window Targas are now the scarce body. In 1967 Sobieslaw Zasada won the European Rally Championship for Group 1 series touring cars in a 912. The PCA model guide tracks the small changes: block-script badging and the last year of 4.5-inch wheels in 1967; for 1968 the US safety package of dual-circuit brakes, a collapsible steering column, winged door handles, side reflectors and a padded dash, plus 5.5-inch wheels. Carburation is described differently by different sources, with Gooding and Stuttcars listing twin Solex 40 PII-4 units and Porsche's newsroom naming Weber 40 IDF downdraughts.\n\n## The Long-Wheelbase Year\n\nFor 1969 the 912 received the 911's revised platform, with the rear wheels moved back about 2.5 inches to a 2,268 mm wheelbase, flared arches, improved ventilation and an electric rear-window defroster. It was the last year. Wikipedia attributes the end to the reallocation of production facilities to the new 914-6 and to tightening emissions regulations; the mid-engined 914 became the four-cylinder Porsche from 1970. Porsche says 30,745 912s had been built by July 1969; other sources put it at 30,000 or more than 32,000, as the production notes explain.\n\n## The 912E Interlude\n\nPorsche's newsroom says internal discussions about reviving the 912 began in 1972. By 1975 the 914 was ending and the 924 was, in PCA's words, still nearly a year away, so Porsche mated the G-body 911 shell to the 914's 2.0-litre Volkswagen Type 4 flat-four with Bosch L-Jetronic injection, secondary air injection, thermal reactors and exhaust gas recirculation. The prototype, car number 0, received its California Clean Air Act certificate on 30 July 1975 after covering 95,471 km. Sold only in North America for 1976 at $10,845, $3,000 under a 911S, the 912E was the only 912 with a galvanised shell. Car and Driver recorded 9.8 seconds to 60 mph and preferred it as a daily driver, but the badge acquired a reputation it has taken decades to shed.",
 "marketNotes": "As of September 2026, classic.com carries the 912 in three groups. The short-wheelbase 1965-1968 car shows an average price of $51,371, with a coupe benchmark of $57,391 on an upward trend and a Targa benchmark of $47,058; recent results it records are $47,500 for a 1966 coupe on 8 August 2026, $55,000 for a 1968 coupe on 7 August 2026 and $56,201 for a 1965 coupe on 24 July 2026, all online auction sales. The 1969 long-wheelbase group averages $51,791, with a coupe benchmark of $55,186 and a Targa benchmark of $67,292, and recent results of $40,000 on 28 August 2026, $57,912 on 13 July 2026, $59,950 on 20 April 2026 and $64,000 on 6 April 2026. The 912E group as of September 2026 shows a benchmark of $45,705 trending upward and an average of $43,965, a high of $125,912 on 24 January 2025, a low of $26,000 for a cabriolet conversion in April 2023, and recent sales of $60,000 on 18 August 2026, $56,000 on 14 May 2026, $47,500 on 16 June 2026 and $50,000 through PCARMARKET on 6 October 2025. The very low figures classic.com lists as record lows ($17, $258 and $358 on 28 October 2024) are data errors rather than transactions. For the top of the market, Gooding sold a restored Bahama Yellow 1967 coupe for $114,400 against a $60,000-80,000 estimate at Scottsdale in January 2017, an unrestored 1969 Targa for $60,500 at Pebble Beach in August 2017, and a mechanically restored, matching-numbers 1966 coupe for $53,200 without reserve at Pebble Beach in August 2023 against an $80,000-100,000 estimate. All Gooding figures are as published by the house, which does not state on the lot page whether premium is included.",
 "whatToLookFor": "The body is the car. Renndriver lists the floors, the front trunk, the battery box and the areas around the windscreen and headlights as the primary rust sites, and none of the 1965-1969 cars was galvanised; only the 912E was. A 912 that has been on the road for sixty years will have been welded somewhere, and the question is whether the repairs were done to the original panel lines and whether the suspension pick-up points and the front pan were addressed rather than skinned over. Targas add the roll-hoop base and the rear deck seams. Matching numbers can be established against the factory record: Gooding's 2023 catalogue cites the Porsche Factory Record for the engine and gearbox of chassis 454553, and a Porsche Certificate of Authenticity or Kardex copy is the usual document. A great many 912s have lost their 616 engines to 911 sixes or to larger four-cylinder builds; Gooding's 1969 Targa carried a 1,720 cc unit, honestly described. Whether that matters depends on the buyer, but the price should reflect it. Year-specific details are worth checking against the PCA model guide: non-adjustable front strut towers and a water bladder for washer fluid on the earliest cars, a three-gauge dash on 1965-1966 coupes, block-script badging from 1967, the 1968 US safety items, and the flared arches and defroster of the 1969 long-wheelbase car. On a soft-window Targa the zip-out plastic rear window and the rear shelf are the parts most often replaced or converted, and the Version II glass window was offered from January 1968, so an early car with glass may not be original. The five-speed was optional and its presence should be confirmed rather than assumed. On a 912E, look for the thermal reactors and emissions plumbing still in place, the L-Jetronic in working order, the factory sunroof if claimed, and the galvanised shell free of accident repair; the North American-only market means most are still in the United States.",
 "commonProblems": "Corrosion dominates. The 1965-1969 shells were unprotected steel and Renndriver names the floors, front trunk, battery box, windscreen surround and headlight bowls as the recurring sites; Stuttcars notes that the 912E's galvanised chassis was specifically intended to overcome the common 912 rust problem. The Type 616 flat-four is a 356 engine and shares that car's needs: it is a pushrod unit with a 9.3:1 compression ratio, and it responds badly to neglect of valve clearances and to overheating from missing or damaged cooling tin, though none of the sources fetched here gives a systematic fault list. Carburettor wear on the twin Solex or Weber units shows up as poor idle and flat spots, and the split-shaft Solex arrangement mentioned by Stuttcars for 1968 has its own linkage issues. The dog-leg five-speed gearbox is a 901-family unit and worn synchromesh on second is common to the type. The early three-gauge dash cars have a water-bladder washer reservoir that perishes. On the Targa the plastic rear window yellows and the zip fails. The 912E has its own list, drawn from owners rather than published guides because the 912BBS forum threads on 912E engine issues and thermal reactor replacement were not retrievable here: the thermal reactors run hot and are frequently removed, the Bosch L-Jetronic air-flow meter and its wiring age, and Heacock Classic's observed 23.0 mpg against the 30 mpg claim suggests how sensitive the injection is to condition. Rennlist's owners report close to 25 mpg in traffic and over 30 mpg on the highway from cars in good order.",
 "valueTrajectory": "The 912 listed at $4,700 in 1965 and $5,235 for a 1969 coupe, always the cheapest Porsche, and for decades it traded as one. Rennlist's piece on the 912E, written when a good example was worth $21,000 against $16,000 for a 911 of the same year, and the PCA author who bought a 912E for $6,500 in 2006 show how low the floor sat. Long-hood 911 values pulled the 912 up behind them in the 2010s: Gooding's $114,400 for a restored 1967 coupe at Scottsdale in January 2017 was nearly double its top estimate and remains the highest 912 result among the sources fetched here. The market then settled. Gooding's 2023 Pebble Beach 1966 coupe made $53,200 against an $80,000-100,000 estimate, and as of September 2026 classic.com's benchmarks sit at $57,391 for a short-wheelbase coupe, $47,058 for a short-wheelbase Targa, $55,186 and $67,292 for the 1969 coupe and Targa, and $45,705 for the 912E, with the coupe and 912E indicators trending up and recent sales clustering between $40,000 and $64,000. The spread between an ordinary driver and the best restored or preserved car, six figures at the top according to Renndriver, is wider than the averages suggest, and originality of engine and shell is what separates the two.",
 "overallConfidence": "medium",
 "sources": [
  {
   "ref": "porsche-stories-912",
   "title": "What is the Porsche 912?",
   "url": "https://www.porsche.com/stories/mobility/what-is-the-porsche-912/",
   "publisher": "Porsche AG",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Porsche corporate page: built 1965-1969, 'around 30,745 units'; conceived as a more affordable first-generation 911 with the 356 SC's 1.6-litre engine of around 90 hp; 0-100 km/h 13.5 s, 183 km/h, five-speed gearbox; 912E revived 1975-1976 for the US only as a stop-gap between the 914 and the 924, 'just 2,099 units', same engine as the 914."
  },
  {
   "ref": "porsche-newsroom-transition",
   "title": "A Sensitive Transition (Porsche Klassik)",
   "url": "https://newsroom.porsche.com/en/2023/history/porsche-klassik-912-356-a-sensitive-transition-33488.html",
   "publisher": "Porsche Newsroom",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Porsche Klassik feature: 30,745 built 1965-1969; 1,582 cc air-cooled flat-four, 9.3:1, two Weber 40 IDF double downdraught carburettors, 90 PS (66 kW) at 5,800 rpm, 122 Nm at 3,500 rpm, 995 kg DIN, 0-100 km/h 13.5 s, 183 km/h, five-speed; DM 16,250 in 1965; described as a bridge for customers who preferred the four-cylinder engine."
  },
  {
   "ref": "porsche-newsroom-912e-prototype",
   "title": "Golden hour: the car that adds color to a blank page of Porsche history",
   "url": "https://newsroom.porsche.com/en_US/2022/products/porsche-klassik-912-e-prototype-27034.html",
   "publisher": "Porsche Newsroom USA",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "912E prototype feature: on sale in America for 1976 only, 'just 2,099 examples'; prototype was number 0; 90 PS two-litre VW flat-four, peak at 4,900 rpm, 137 Nm, five-speed; Bosch L-Jetronic, secondary air injection, thermal reactors, EGR; California Clean Air Act certificate 30 July 1975; prototype covered 95,471 km; internal discussions on reviving the 912 from 1972; 914 discontinued 1976."
  },
  {
   "ref": "porsche-uk-classic-912",
   "title": "Model 912 | Porsche Great Britain",
   "url": "https://www.porsche.com/uk/accessoriesandservice/classic/models/911-f/911-f-912/",
   "publisher": "Porsche Cars Great Britain",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Porsche Classic model page: 912 introduced 1965 to close the price gap between the 356, still in production, and the 911; 1.6-litre 356 SC engine reduced from 95 to 90 PS at 5,800 rpm; four-speed manual; 912 1.6 Targa 1967-1969 with brushed stainless roll bar, folding roof and foldable plastic rear window; sill trims wider from 1967."
  },
  {
   "ref": "wikipedia-912",
   "title": "Porsche 912",
   "url": "https://en.wikipedia.org/wiki/Porsche_912",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Aggregated reference: 'more than 32,000' 912s built April 1965 to July 1969, 'nearly 30,000' coupes and 'about 2,500' Targas; Type 616/36 (616/39 US), 102 SAE hp at 5,800 rpm; wheelbase 2,211 mm, 965 kg; $4,700 in 1965; Targa from December 1966 with zip-out plastic window (Version I), glass Version II from January 1968; research chassis 13328-13330, 13352, 13386-13397, oldest known 13394; Zasada's 1967 European Rally Championship Group 1 title; discontinued as facilities went to the 914-6; 912E 2,092 (also 2,099 in another passage) May 1975-July 1976, 90 SAE hp at 4,900 rpm, only galvanised 912, $10,845, 20-plus gallon tank."
  },
  {
   "ref": "curbside-rt-1966",
   "title": "Vintage Road & Track Review: 1966 Porsche 912 - Oversteer Is A Thing Of The Past",
   "url": "https://www.curbsideclassic.com/vintage-reviews/1960s-vintage-reviews/vintage-road-track-review-1966-porsche-912-oversteer-is-a-thing-of-the-past/",
   "publisher": "Curbside Classic (reproducing Road & Track, 1966)",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Period road test reproduced in full: $4,690 as tested, 102 gross hp / 90 DIN hp, 0-60 mph 11.6 s, quarter mile 18.1 s at 78 mph, 119 mph; optional five-speed tested with criticism of the first-left-and-down pattern; 6.95 x 15 Goodyear Grand Prix tyres on 5.5 in wheels; lighter four cured the 356's swing-axle oversteer; weight distribution in the 912's favour."
  },
  {
   "ref": "silodrome-912",
   "title": "Porsche 912",
   "url": "https://silodrome.com/porsche-912/",
   "publisher": "Silodrome",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Feature: modified 356 Type 616 flat-four; trim reduced as a cost measure, weight 965 kg (2,127 lb); built 1965-1969; outsold the 911 and credited by some historians with saving the company; developed because the 911 was feared too expensive; contemporaries felt it handled better than the 911 with less weight at the back."
  },
  {
   "ref": "stuttcars-912",
   "title": "Porsche 912 (1965 - 1969)",
   "url": "https://www.stuttcars.com/porsche-912-1965-1969/",
   "publisher": "Stuttcars",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Model history: 1,582 cc Type 616/36, 90 hp at 5,800 rpm (1965-1968) rising to 103 hp SAE for 1969, 98 lb-ft at 3,500 rpm, 9.3:1, split-shaft Solex carburettors introduced 1968; four-speed standard, five-speed a $35 option; 0-60 11.6 s, 115 mph, over 30 mpg; first cars spring 1965; outsold the 911 two to one through 1967; production ended late 1969; 1969 LWB rear wheels moved back 2.5 in; 912E with fuel-injected VW Type IV engine for 1976."
  },
  {
   "ref": "stuttcars-912-specs",
   "title": "Porsche 912 (1965 - 1969) - Specifications & Performance",
   "url": "https://www.stuttcars.com/porsche-912-1965-1969-specifications-performance/",
   "publisher": "Stuttcars",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Specification sheet: flat-four pushrod, 1,582 cc, 74.0 x 82.5 mm, 9.3:1, two Solex 40 PII-4 carburettors, 90 bhp at 5,800 rpm, 98 lb-ft at 3,500 rpm; final drive 4.428:1; 0-60 11.6 s, 119 mph, quarter mile 18.1 s; wheelbase 87 in (1965-1968) and 89.3 in (1969); length 163.9 in, width 63.4 in; dry weight 2,095 lb; discs 9.26 in front and 9.6 in rear; wheels 15 x 4.5 in 1965-1967 and 15 x 5.5 in 1968-1969; 165 HR 15 tyres; $4,700 in 1966; $5,235 coupe and $5,615 Targa in 1969."
  },
  {
   "ref": "stuttcars-912e",
   "title": "Porsche 912 E (1976)",
   "url": "https://www.stuttcars.com/porsche-912-e-1976/",
   "publisher": "Stuttcars",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "912E profile: 2,092 built May 1975 to July 1976, 1976 model year only, US only, E for Einspritzung; 2.0-litre VW Type 4 (originally a 1.7 for the 411/412), 94 mm bore with 71 mm stroke, 86 bhp at 4,900 rpm, 98 lb-ft at 4,900 rpm, Bosch L-Jetronic; 0-60 13.0 s, 115 mph, 30 mpg, 20-plus gallon tank, 600-mile range; $10,845, $3,000 under a 911S; galvanised chassis to address the common 912 rust issue; options including 14 in Fuchs, electric sunroof, limited-slip, air conditioning."
  },
  {
   "ref": "conceptcarz-912",
   "title": "Porsche 912 - Model Information",
   "url": "https://www.conceptcarz.com/vehicle/series.aspx?modelID=3243",
   "publisher": "Conceptcarz",
   "sourceType": "specialist",
   "reliability": "low",
   "notes": "Data table gives 'Total Production: 21,600' for 1965-1969 and 2,099 for the 912E, while its own text says nearly 30,000 coupes and around 2,500 Targas; production officially began 5 April 1965, European deliveries June 1965; Targa introduced December 1966 as a 1967 model, Version II fixed glass window January 1968; year prices $4,700 (1965) to $5,100-5,600 (1969), 912E $10,845; 912E produced May 1975 to July 1976 with Bosch L-Jetronic; 912 about 250 lb lighter than a 911."
  },
  {
   "ref": "drivepatina-912-production",
   "title": "Porsche 912 Production Numbers by Year (1965-1969 & 912E)",
   "url": "https://drivepatina.com/en/porsche-912-production-numbers",
   "publisher": "Drive Patina",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Production analysis: 'around 30,745 units' per Porsche and 2,099 912E; commonly cited year figures 6,401 (1965), 9,090 (1966), 8,436 (1967), 6,904 (1968), 5,485 (1969) described as sales or deliveries rather than factory output and explicitly not summable into a total; roughly 27,738 coupes and 2,562 Targas; no reliable public number for soft-window Targas."
  },
  {
   "ref": "renndriver-912",
   "title": "Porsche 912 Guide: Specs, History, the 912E, and Values",
   "url": "https://renndriver.com/guides/porsche-912/",
   "publisher": "Renndriver",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Guide: 'roughly 32,000' built 1965-1969 with roughly 2,500 Targas; 6,401 912s against 3,390 911s in 1965; Type 616/36, twin Solex carburettors, around 90 hp or 102 SAE hp at 5,800 rpm; 965 kg, near 114 mph, 0-62 about 13.5 s, up to 30 mpg; four-speed standard, five-speed optional; 912E 2,092 built May 1975-July 1976, all US, 2.0 L-Jetronic near 90 SAE hp; average sale near $51,000, range from under $20,000 to six figures; rust in floors, front trunk, battery box, windscreen and headlight areas."
  },
  {
   "ref": "autoevolution-912",
   "title": "PORSCHE 912 (901) Specs, Performance & Photos - 1965, 1966, 1967, 1968, 1969",
   "url": "https://www.autoevolution.com/cars/porsche-912-901-1965.html",
   "publisher": "autoevolution",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Specification sheet: 1,582 cc, 66 kW / 90 hp at 5,800 rpm, 122 Nm / 90 lb-ft at 3,500 rpm, two carburettors, five-speed manual, 0-62 mph 11.8 s, 119 mph (192 km/h), 4,163 x 1,610 x 1,321 mm, wheelbase 2,210 mm, 970 kg unladen, 1,302 kg gross, 6.95 H15 tyres, discs front and rear; describes the 912 as a compromise after the 911 proved too expensive, using the 356 engine in Butzi Porsche's 911 body."
  },
  {
   "ref": "heacock-912e",
   "title": "1976 Porsche 912E Coupe",
   "url": "https://heacockclassic.com/articles/1976-porsche-912e-coupe/",
   "publisher": "Heacock Classic",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "912E article: 'Only 2099 were built, with just 500 sunroof cars'; 2.0-litre flat-four, 86 hp at 4,900 rpm, from post-1972 914s; kerb weight 2,395 lb; 0-60 11.3 s, 115 mph, observed 23.0 mpg; describes a four-speed manual gearbox; 89.4 in wheelbase; four-wheel discs; all 911 body and chassis improvements since 1969; sunroof and air conditioning available."
  },
  {
   "ref": "pca-model-guide-912",
   "title": "Model Guide: Porsche 912 and 912E",
   "url": "https://www.pca.org/news/model-guide-porsche-912-912e",
   "publisher": "Porsche Club of America",
   "sourceType": "club-forum",
   "reliability": "medium",
   "notes": "Club model guide: 356 SC flat-four tuned to 90 hp and 90 lb-ft; Road & Track 11.6 s 0-60 for a five-speed car; year changes: non-adjustable front strut towers and water-bladder washer reservoir on early cars, adjustable towers and plastic reservoir on 1966 US cars, block-script badging and last 4.5 in wheels in 1967 (first Targa year), 1968 dual-circuit brakes, collapsible column, winged door handles, side reflectors, padded dash, first 5.5 in wheels and last SWB year, 1969 LWB with flared arches, improved ventilation and electric defrost; 912E galvanised, 'fewer than 3,000' built, fuel-injected Type 4."
  },
  {
   "ref": "pca-912e-924",
   "title": "912E and 924: The real story of two of Porsche's most maligned entry-level cars",
   "url": "https://www.pca.org/news/912e-924-the-real-story-of-two-of-porsches-most-maligned-entry-level-cars",
   "publisher": "Porsche Club of America",
   "sourceType": "club-forum",
   "reliability": "medium",
   "notes": "Owner-historian feature: 912E sold only in North America as a last-minute stop-gap because 914 production was ending and the 924 was nearly a year away; G-body 911 shells with the 914's VW Type 4 2.0-litre L-Jetronic engine; under 2,400 lb; 'almost 2,100' sold in one short model year; Car and Driver 0-60 in 9.8 s and about 120 mph, preferring it as a daily driver; 30 mpg highway and 600-plus mile range; author bought one for $6,500 in 2006; price delta to a 911SC put at $5,000-10,000."
  },
  {
   "ref": "rennlist-912e",
   "title": "8 Facts about the 1976 Porsche 912e",
   "url": "https://rennlist.com/how-tos/slideshows/8-facts-about-the-1976-porsche-912e-440168",
   "publisher": "Rennlist",
   "sourceType": "club-forum",
   "reliability": "low",
   "notes": "Owner-community article: a good 912E worth $21,000 against $16,000 for a same-year 911 at time of writing; 86 hp 2.0-litre, about 2,200 lb; 'only 2,100 were said to be built', late spring 1975 to summer 1976, all for America; interior and chassis shared with the 911 apart from engine and gearbox; 20-plus gallon tank; owners report close to 25 mpg in traffic and over 30 mpg on the highway."
  },
  {
   "ref": "pcgb-912-register",
   "title": "Porsche 912 register | Porsche Club GB | Classic",
   "url": "https://www.porscheclubgb.com/regions-registers/registers/classic/912",
   "publisher": "Porsche Club Great Britain",
   "sourceType": "registry",
   "reliability": "medium",
   "notes": "Club register page: 'only 30,000 models were built'; 912 was a stop-gap because the 911 was regarded as too expensive in America; 911 body with a detuned 356C engine; first 912 April 1965 for the home market and September 1965 for the USA; built by both Porsche and Karmann in Osnabruck; 912E of 1976 used the 914 fuel-injected flat-four; 99 vehicles on the UK register at time of fetch."
  },
  {
   "ref": "classic-912-swb",
   "title": "Porsche 912 - SWB Market",
   "url": "https://www.classic.com/m/porsche/911/f-body/swb/912/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Market data as of September 2026 for 1965-1968 cars: average price $51,371; coupe benchmark $57,391 (upward trend) and Targa benchmark $47,058; recent sales $47,500 (1966 coupe, 8 August 2026), $55,000 (1968 coupe, 7 August 2026), $56,201 (1965 coupe, 24 July 2026), all online auctions; lists a $17 'lowest sale' on 28 October 2024 that is a data error; describes the 912 as meeting continued demand for the 1.6-litre four, particularly in the US, on the 911's SWB chassis."
  },
  {
   "ref": "classic-912-lwb",
   "title": "Porsche 912 - LWB Market",
   "url": "https://www.classic.com/m/porsche/911/f-body/lwb/912/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Market data as of September 2026 for 1969 cars: average price $51,791; coupe benchmark $55,186, Targa benchmark $67,292; recent online auction sales $40,000 (28 August 2026), $57,912 (13 July 2026), $59,950 (20 April 2026), $64,000 (6 April 2026); highest asking price $151,900; a $358 'lowest sale' on 28 October 2024 that is a data error; produced for model year 1969 only."
  },
  {
   "ref": "classic-912e",
   "title": "Porsche 912E Market",
   "url": "https://www.classic.com/m/porsche/911/g-body/912e/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Market data as of September 2026: benchmark $45,705 trending up, average $43,965, high $125,912 (24 January 2025), low $26,000 for a cabriolet conversion (18 April 2023); recent sales $60,000 (18 August 2026), $56,000 (14 May 2026), $47,500 (16 June 2026), $50,000 via PCARMARKET (6 October 2025); states 2,092 912Es built May 1975 to July 1976 for the US only, internal designation 923, $10,845 MSRP, $3,000 under a 911S."
  },
  {
   "ref": "gooding-sc17-912",
   "title": "1967 Porsche 912 | Scottsdale Auctions 2017",
   "url": "https://www.goodingco.com/lot/1967-porsche-912/",
   "publisher": "Gooding & Company",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold $114,400, Scottsdale, January 2017, lot 107, estimate $60,000-80,000. Chassis 461628, engine 753979, Bahama Yellow over black leatherette, rotisserie restoration by Loren Beggs completed 2008, about 8,000 miles since; factory options listed including bumper horns, tinted windscreen, Blaupunkt Frankfurt radio; catalogue states the majority of 912 coupes were built by Karmann of Osnabruck."
  },
  {
   "ref": "gooding-pb17-912-targa",
   "title": "1969 Porsche 912 Targa | Pebble Beach Auctions 2017",
   "url": "https://www.goodingco.com/lot/1969-porsche-912-targa/",
   "publisher": "Gooding & Company",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold $60,500, Pebble Beach, August 2017, lot 30, estimate $70,000-90,000. Chassis 129010762, engine 4096555, unrestored California black-plate car since new; catalogue lists a 1,720 cc flat-four with twin Solex 40 PII-4 carburettors, 102 bhp at 5,800 rpm, five-speed, recent mechanical overhaul."
  },
  {
   "ref": "gooding-pb23-912",
   "title": "1966 Porsche 912 | Pebble Beach Auctions 2023",
   "url": "https://www.goodingco.com/lot/1966-porsche-912-1/",
   "publisher": "Gooding & Company",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold $53,200 without reserve, Pebble Beach, August 2023, lot 103, estimate $80,000-100,000. Chassis 454553, engine 744358, Sand Beige over brown leatherette, early SWB car with three-gauge dashboard, matching-numbers engine and gearbox per Porsche Factory Record, mechanical restoration by SportClasse completed 2020; catalogue lists 1,582 cc, twin Solex carburettors, 90 bhp at 5,800 rpm."
  }
 ],
 "claims": [
  {
   "section": "history",
   "claimText": "The 912 was introduced in 1965 because the 911 was regarded as too expensive, particularly in the United States, and it closed the price gap between the 356 and the 911 by putting the 356 SC's 1.6-litre flat-four, reduced from 95 to 90 PS, into the 911 body.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "porsche-uk-classic-912",
    "porsche-stories-912",
    "pcgb-912-register",
    "autoevolution-912",
    "silodrome-912"
   ]
  },
  {
   "section": "history",
   "claimText": "Production began in April 1965, with European deliveries from June and the US market from September 1965; Conceptcarz gives 5 April 1965 as the official start.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "pcgb-912-register",
    "conceptcarz-912",
    "wikipedia-912"
   ]
  },
  {
   "section": "history",
   "claimText": "The 912 outsold the 911 by about two to one through 1967, with 6,401 912s against 3,390 911s in 1965 according to Renndriver, and Wikipedia records that 912 sales initially outpaced the 911 until the six-cylinder car's success was assured.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "stuttcars-912",
    "renndriver-912",
    "wikipedia-912",
    "silodrome-912"
   ]
  },
  {
   "section": "history",
   "claimText": "Road & Track's 1966 test of a five-speed 912 priced at $4,690 recorded 0-60 mph in 11.6 seconds, a quarter mile of 18.1 seconds at 78 mph and 119 mph, found that the lighter engine had eliminated the oversteer of the swing-axle 356, and criticised the dog-leg gear pattern.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "curbside-rt-1966",
    "pca-model-guide-912",
    "stuttcars-912-specs"
   ]
  },
  {
   "section": "history",
   "claimText": "The Targa entered production in December 1966 as a 1967 model with a removable roof and a zip-out plastic rear window (Version I, the soft-window car); a Version II with a fixed glass rear window was offered from January 1968 and most buyers chose it.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-912",
    "conceptcarz-912",
    "porsche-uk-classic-912",
    "pca-model-guide-912"
   ]
  },
  {
   "section": "history",
   "claimText": "For 1969 the 912 moved to the long-wheelbase platform, with the rear wheels moved back about 2.5 inches to 89.3 inches (2,268 mm), flared arches, improved ventilation and electric rear-window defrost; 1969 was the final year before production capacity went to the 914-6 and emissions rules tightened.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "stuttcars-912",
    "stuttcars-912-specs",
    "pca-model-guide-912",
    "wikipedia-912"
   ]
  },
  {
   "section": "history",
   "claimText": "In 1967 Sobieslaw Zasada won the European Rally Championship for Group 1 series touring cars in a 912.",
   "confidence": "medium",
   "status": "unverified",
   "sourceRefs": [
    "wikipedia-912"
   ]
  },
  {
   "section": "history",
   "claimText": "The 912E of 1976 was a North America-only stop-gap between the end of the 914 and the arrival of the 924, using the G-body 911 shell with the 914's 2.0-litre Volkswagen Type 4 flat-four, Bosch L-Jetronic injection, thermal reactors and exhaust gas recirculation; the prototype received its California Clean Air Act certificate on 30 July 1975 and the car listed at $10,845, $3,000 below a 911S.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "porsche-newsroom-912e-prototype",
    "porsche-stories-912",
    "pca-912e-924",
    "stuttcars-912e",
    "wikipedia-912",
    "classic-912e"
   ]
  },
  {
   "section": "specs",
   "claimText": "The 1965-1969 912 engine is the 1,582 cc Type 616/36 pushrod flat-four (616/39 in some US applications), 74 mm x 82.5 mm, 9.3:1, rated at 90 PS DIN (66 kW) at 5,800 rpm and 122 Nm (90 lb-ft) at 3,500 rpm, and quoted at 102 hp SAE gross in the United States.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "porsche-newsroom-transition",
    "stuttcars-912-specs",
    "autoevolution-912",
    "wikipedia-912",
    "curbside-rt-1966",
    "renndriver-912"
   ]
  },
  {
   "section": "specs",
   "claimText": "Sources describe the 912's carburation differently: Gooding's catalogues and Stuttcars list twin Solex 40 PII-4 units, while Porsche's newsroom names two Weber 40 IDF double downdraught carburettors; Stuttcars also mentions split-shaft Solex carburettors introduced in 1968.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "porsche-newsroom-transition",
    "stuttcars-912-specs",
    "stuttcars-912",
    "gooding-pb23-912",
    "gooding-pb17-912-targa"
   ],
   "conflictNote": "Porsche Newsroom's Klassik feature states two Weber 40 IDF carburettors. Stuttcars' specification sheet and Gooding's 1969 Targa catalogue state Solex 40 PII-4; Gooding's 1966 catalogue says twin Solex. None of the sources fetched here sets out a changeover by model year, so the discrepancy is not resolved."
  },
  {
   "section": "specs",
   "claimText": "A four-speed manual was standard and a five-speed was optional, quoted by Stuttcars as a $35 option in the United States; Road & Track tested a five-speed car in 1966.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "stuttcars-912",
    "curbside-rt-1966",
    "porsche-uk-classic-912",
    "renndriver-912"
   ]
  },
  {
   "section": "specs",
   "claimText": "Kerb weight is given as 965 kg (2,127 lb) by Wikipedia, Renndriver and Silodrome, 995 kg DIN by the Porsche newsroom, 970 kg by autoevolution and 2,095 lb dry by Stuttcars; the car was roughly 250 lb lighter than a 911.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-912",
    "renndriver-912",
    "silodrome-912",
    "porsche-newsroom-transition",
    "autoevolution-912",
    "stuttcars-912-specs",
    "conceptcarz-912"
   ]
  },
  {
   "section": "specs",
   "claimText": "The 912E's 1,971 cc Volkswagen Type 4 engine, 94 mm x 71 mm with Bosch L-Jetronic, is rated at 86 bhp at 4,900 rpm by Stuttcars and Heacock and at 90 PS at 4,900 rpm with 137 Nm by the Porsche newsroom; the gearbox is described as a five-speed by Porsche and as a four-speed by Heacock Classic.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "porsche-newsroom-912e-prototype",
    "stuttcars-912e",
    "heacock-912e",
    "wikipedia-912"
   ],
   "conflictNote": "Porsche Newsroom states the 912E prototype's engine was paired with a five-speed gearbox. Heacock Classic's article on a production 912E states a four-speed manual gearbox. The power figures (86 bhp SAE against 90 PS) are reconcilable as different rating systems, but the gearbox description is not, and no source fetched here resolves it."
  },
  {
   "section": "specs",
   "claimText": "Porsche quotes 0-100 km/h in 13.5 seconds and 183 km/h (114 mph) for the 912; Road & Track recorded 119 mph in 1966 and Stuttcars gives 115 mph.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "porsche-stories-912",
    "porsche-newsroom-transition",
    "curbside-rt-1966",
    "stuttcars-912",
    "autoevolution-912"
   ]
  },
  {
   "section": "production",
   "claimText": "The 1965-1969 production total is disputed: Porsche states 30,745, Wikipedia and Renndriver say more than or roughly 32,000, the Porsche Club GB register says 30,000, and Conceptcarz prints 21,600 in a table that contradicts its own text.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "porsche-stories-912",
    "porsche-newsroom-transition",
    "wikipedia-912",
    "renndriver-912",
    "pcgb-912-register",
    "conceptcarz-912",
    "drivepatina-912-production"
   ],
   "conflictNote": "Porsche AG's corporate page and its Klassik newsroom feature state 30,745. Wikipedia states 'more than 32,000' built April 1965 to July 1969. Renndriver states 'roughly 32,000'. Porsche Club Great Britain's register states 'only 30,000'. Conceptcarz prints 21,600 in its data table while its text gives nearly 30,000 coupes plus around 2,500 Targas. Drive Patina reproduces year figures summing to about 36,300 and warns they are sales, not production. Not resolved by any source consulted here."
  },
  {
   "section": "production",
   "claimText": "The coupe and Targa split is not established: Wikipedia and Renndriver give nearly 30,000 coupes and about 2,500 Targas, while Drive Patina gives roughly 27,738 coupes and 2,562 Targas and says there is no reliable public figure for soft-window Targas.",
   "confidence": "low",
   "status": "disputed",
   "sourceRefs": [
    "wikipedia-912",
    "renndriver-912",
    "drivepatina-912-production",
    "conceptcarz-912"
   ],
   "conflictNote": "Wikipedia, Renndriver and Conceptcarz give nearly 30,000 coupes and about 2,500 Targas, which sums above Porsche's 30,745. Drive Patina gives roughly 27,738 coupes and 2,562 Targas, which sums to about 30,300. Not resolved by any source consulted here."
  },
  {
   "section": "production",
   "claimText": "The 912E total is given as 2,099 by Porsche and Heacock Classic and as 2,092 by Wikipedia, Stuttcars, classic.com and Renndriver, built between May 1975 and July 1976 for the US market only.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "porsche-stories-912",
    "porsche-newsroom-912e-prototype",
    "heacock-912e",
    "wikipedia-912",
    "stuttcars-912e",
    "classic-912e",
    "renndriver-912",
    "pca-912e-924",
    "rennlist-912e"
   ],
   "conflictNote": "Porsche AG's corporate page, the Porsche Newsroom prototype feature and Heacock Classic state 2,099. Wikipedia's main text, Stuttcars, classic.com and Renndriver state 2,092; Wikipedia uses 2,099 in a separate passage. PCA says 'almost 2,100' and Rennlist 'only 2,100 were said to be built'. Not resolved by any source consulted here."
  },
  {
   "section": "production",
   "claimText": "912 bodies were built by both Porsche and Karmann of Osnabruck, and Gooding's 2017 catalogue states that the majority of coupes were Karmann-built.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "pcgb-912-register",
    "gooding-sc17-912"
   ]
  },
  {
   "section": "production",
   "claimText": "Porsche's Vehicle Research Department reserved early chassis numbers 13328, 13329, 13330, 13352 and 13386 to 13397 for its own vehicles, and the oldest known surviving 912 is serial 13394.",
   "confidence": "low",
   "status": "unverified",
   "sourceRefs": [
    "wikipedia-912"
   ]
  },
  {
   "section": "market",
   "claimText": "As of September 2026 classic.com shows an average price of $51,371 for 1965-1968 short-wheelbase 912s with a coupe benchmark of $57,391 trending upward and a Targa benchmark of $47,058, and an average of $51,791 for 1969 long-wheelbase cars with benchmarks of $55,186 for the coupe and $67,292 for the Targa.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-912-swb",
    "classic-912-lwb"
   ]
  },
  {
   "section": "market",
   "claimText": "As of September 2026 classic.com's 912E benchmark is $45,705 and trending upward, with an average of $43,965, a high of $125,912 in January 2025 and recent sales between $47,500 and $60,000 in 2026.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-912e",
    "renndriver-912"
   ]
  },
  {
   "section": "market",
   "claimText": "Gooding & Company sold a restored 1967 coupe for $114,400 at Scottsdale in January 2017, an unrestored 1969 Targa for $60,500 at Pebble Beach in August 2017 and a matching-numbers 1966 coupe for $53,200 at Pebble Beach in August 2023, the last against an $80,000-100,000 estimate.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "gooding-sc17-912",
    "gooding-pb17-912-targa",
    "gooding-pb23-912"
   ]
  },
  {
   "section": "market",
   "claimText": "The 912 listed at DM 16,250 in Germany and $4,700 in the United States in 1965, rising to $5,235 for a coupe and $5,615 for a Targa in 1969; the 912E listed at $10,845 in 1976.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "porsche-newsroom-transition",
    "wikipedia-912",
    "stuttcars-912-specs",
    "conceptcarz-912",
    "stuttcars-912e"
   ]
  },
  {
   "section": "problems",
   "claimText": "Rust in the floors, front trunk, battery box and the areas around the windscreen and headlights is the primary concern on 1965-1969 cars; only the 912E had a galvanised shell, introduced specifically to address the 912's rust problem.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "renndriver-912",
    "stuttcars-912e",
    "wikipedia-912",
    "pca-model-guide-912"
   ]
  },
  {
   "section": "problems",
   "claimText": "Original 616 engines are often absent: Gooding's 1969 Targa was catalogued with a 1,720 cc engine, and Gooding's 2023 catalogue relied on the Porsche Factory Record to confirm matching engine and gearbox numbers on chassis 454553.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "gooding-pb17-912-targa",
    "gooding-pb23-912"
   ]
  },
  {
   "section": "problems",
   "claimText": "The 912E's fuel economy is sensitive to condition: Heacock Classic observed 23.0 mpg against the 30 mpg highway figure quoted by Porsche-related sources, while Rennlist's owners report close to 25 mpg in traffic and over 30 mpg on the highway.",
   "confidence": "low",
   "status": "verified",
   "sourceRefs": [
    "heacock-912e",
    "rennlist-912e",
    "pca-912e-924",
    "stuttcars-912e"
   ]
  }
 ]
};
