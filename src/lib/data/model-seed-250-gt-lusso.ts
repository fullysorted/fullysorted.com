/**
 * Researched model draft — Ferrari 250 GT Lusso (1962-1964).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seed250GtLusso = {
 "slug": "ferrari/250-gt-lusso",
 "make": "Ferrari",
 "model": "250 GT Lusso",
 "generation": "Tipo 168/U (Berlinetta Lusso)",
 "generationCode": "Tipo 539/U chassis, Tipo 168/U engine",
 "trim": null,
 "yearStart": 1962,
 "yearEnd": 1964,
 "bodyStyles": [
  "2-door Berlinetta (fixed-roof two-seat coupe), Pininfarina design, Scaglietti-built steel body with aluminium opening panels"
 ],
 "engines": [
  "2,953 cc Tipo 168/U Colombo 'short-block' 60-degree V12, single overhead camshaft per bank, two valves per cylinder, outside-plug heads, three twin-choke Weber 36 DCS carburettors, 240 bhp claimed by Ferrari; published output ranges from 236 to 250 bhp at 7,000-7,500 rpm depending on source"
 ],
 "productionTotal": null,
 "productionNotes": "Sources do not agree, and the disagreement is a single car. Ferrari's own model page states that production continued until the latter part of 1964 'by which time 350 cars had been produced'. That figure is repeated by RM Sotheby's (chassis 5129 described as 'the 129th of 350 examples built'; chassis 4383 as 'the 16th example of the 350 Lussos produced'), by Gooding in 2020 and again at Amelia Island in March 2026 ('One of Only 350 Lussos Built'), by Sports Car Market, by Mecum's catalogue text for chassis 4635 ('the 79th of 350'), by CNN's 2007 report on the McQueen car, and by both British road-test features consulted. Against that, Wikipedia states 351, conceptcarz states '351 examples built', and classic.com describes 'approximately 351 samples produced'. None of the sources stating 351 explains what the extra car is; the most plausible reading is that one camp counts the 1962 Paris Salon prototype (chassis 3849GT, per Ferrari) and the other does not, but no source consulted actually says that, so it is offered as a hypothesis and not a finding. The figure is therefore left null. What is not in dispute: the cars carry odd chassis numbers with a GT suffix in Ferrari's road-car sequence; the prototype was shown at the Paris Motor Show in October 1962; series production ran through 1963 and into the second half of 1964, when the 275 GTB replaced the model; and a small minority were built right-hand drive, with Girardo stating 22 UK cars supplied through Maranello Concessionaires, the 2014 Salon Prive sale listing repeating 22 and GTspirit giving 23. One car, chassis 4383, was partly rebodied by Fantuzzi for Tecno co-founder Luciano Pederzani and is counted within the total. All but a handful of bodies were built by Scaglietti to Pininfarina's design; Ferrari notes that Pininfarina built the prototype and a few early cars itself.",
 "notableTrims": [
  {
   "name": "Prototype, chassis 3849GT (Paris Salon, October 1962)",
   "note": "The show car that introduced the design, built by Pininfarina rather than Scaglietti. It sits at the root of the 350-versus-351 count and is one of the few cars whose construction differs from the series."
  },
  {
   "name": "Series Scaglietti-bodied berlinetta (1963-1964)",
   "note": "The standard car: steel body with aluminium bonnet, doors and boot lid, 2,400 mm tubular chassis, Tipo 168/U V12 on three Weber 36 DCS carburettors and a four-speed gearbox. Effectively every surviving Lusso is one of these, so condition and documentation decide value rather than specification."
  },
  {
   "name": "Right-hand-drive UK cars via Maranello Concessionaires",
   "note": "A small run, stated as 22 or 23 depending on source, supplied to the British importer. Chassis 5443, invoiced to Maranello Concessionaires in December 1963, set the model's auction record at Salon Prive in September 2014 and shows the premium a documented RHD car can carry in the UK."
  },
  {
   "name": "Chassis 4383, Fantuzzi-modified",
   "note": "The sixteenth car built, partly rebodied by Medardo Fantuzzi for Tecno co-founder Luciano Pederzani to resemble the 330 LMB, with a smaller grille, recessed covered headlamps and GTO-style vents. Unique, and later owned by broadcaster Chris Evans; sold by RM Sotheby's at Cliveden House in 2024."
  },
  {
   "name": "Chassis 4891, ex-Steve McQueen",
   "note": "Ordered new in 1963 in metallic brown over beige and kept by the actor for a decade. Sold by Christie's at Monterey in August 2007 for $2.3 million against an $800,000 to $1.2 million estimate, roughly three times what a Lusso without the name was then thought to be worth."
  },
  {
   "name": "Competition-entered cars (Targa Florio 1964 and 1965, Tour de France 1965)",
   "note": "The Lusso was a road car, but Ferrari records private entries at the Targa Florio in 1964 (thirteenth overall) and 1965, and at the 1965 Tour de France. Period competition history is rare on this model and is documented for only a handful of chassis."
  }
 ],
 "specs": {
  "layout": "Front-mounted longitudinal V12, rear-wheel drive, two seats",
  "chassis": "Tipo 539/U tubular steel chassis, 2,400 mm wheelbase, derived from the 250 GTO structure with narrower tubes; steel body with aluminium bonnet, doors and boot lid",
  "engine": "2,953 cc Tipo 168/U Colombo 60-degree V12, single overhead camshaft per bank, two valves per cylinder, outside-plug heads, three Weber 36 DCS twin-choke carburettors",
  "bore_stroke": "73 mm x 58.8 mm",
  "compression": "9.2:1 per Supercars.net; not stated by Ferrari",
  "power": "240 bhp claimed by Ferrari (rpm not stated); Wikipedia and RM Sotheby's give 240 bhp at 7,500 rpm, Gooding 240 bhp at 7,000 rpm, Yahoo/Autoblog 236 hp at 7,500 rpm, Drive-My 250 bhp at 7,000 rpm and Supercars.net 250 bhp at 7,500 rpm",
  "torque": "178 lb-ft (242 Nm) at 5,500 rpm per Wikipedia and conceptcarz; 188 lb-ft per Drive-My; 215 lb-ft per Supercars.net",
  "transmission": "4-speed all-synchromesh manual with reverse; two alternative final-drive ratios offered",
  "suspension": "Front double wishbones with coil springs; rear live axle on semi-elliptic leaf springs with concentric coil springs around the telescopic dampers and a Watts linkage, both GTO-derived",
  "brakes": "Dunlop disc brakes on all four wheels, servo-assisted",
  "wheels_tyres": "Borrani wire wheels with knock-off hubs; 185VR15 Pirelli Cinturato CA67 per Wikipedia",
  "weight": "Published figures range from 1,020 kg (Supercars.net) to 1,312 kg (Drive-My road test); Wikipedia gives 1,020-1,310 kg depending on equipment. No factory figure was found",
  "dimensions": "Length 4,410 mm, width 1,750 mm, height 1,290 mm per Supercars.net",
  "top_speed_claimed": "150 mph (240 km/h), widely repeated; Drive-My cites 149 mph. Period claims, not independently verified here",
  "acceleration": "0-60 mph in 7.9 s (Drive-My) or 8.0 s (GTspirit); Wikipedia gives 0-100 km/h in 7-8 s. Supercars.net's 5.2 s is an outlier and is not relied on",
  "chassis_numbering": "Odd numbers with GT suffix in the road-car sequence; prototype 3849GT, series cars observed from the 4300s to the 5900s",
  "original_price": "$13,375 in the United States; 5,607 pounds in the United Kingdom"
 },
 "summary": "The Ferrari 250 GT Berlinetta Lusso (1962-1964) was the last of the 250 GT road cars and the one built for the road rather than the track. Pininfarina drew it, Scaglietti built all but a few of the bodies in steel with aluminium opening panels, and the prototype appeared at the Paris Motor Show in October 1962. Underneath sat a 2,400 mm tubular chassis developed from the 250 GTO, with the GTO's concentric-spring rear dampers and Watts linkage, Dunlop discs on all four corners and the 2,953 cc Colombo V12 in Tipo 168/U form on three Weber 36 DCS carburettors, rated by Ferrari at 240 bhp. Production ran for about eighteen months before the 275 GTB replaced it; Ferrari says 350 cars, some references say 351, and the difference is not explained anywhere. The Lusso sits between the 250 GT SWB and the 250 GTE 2+2, faster and better resolved than the four-seater, softer and more habitable than the SWB. Steve McQueen ordered one new in brown and kept it ten years. Today it is the most affordable way into a Scaglietti-bodied 250 berlinetta, which in this context means a seven-figure car.",
 "history": "## The Last of the 250 GT Line\n\nFerrari's 250 series began with the 250 S of 1952 and by 1962 had produced the 250 GT SWB berlinetta, the 250 GTO and the 250 GTE 2+2, all on the same 2,953 cc Colombo V12. The Berlinetta Lusso was the closing chapter. It was conceived as a two-seat road car for customers who wanted a Scaglietti-bodied berlinetta without the SWB's austerity or the GTE's extra seats, and it was never intended for sports car racing. Ferrari's own account is that the prototype, chassis 3849GT, was shown at the 1962 Paris Motor Show, that Pininfarina built it and a few early cars itself, and that Scaglietti bodied the rest through to the latter part of 1964, when the 275 GTB took over.\n\n## What Came from the GTO\n\nThe chassis is the interesting part. The Lusso's 2,400 mm tubular frame, Ferrari factory type 539/U, was developed from the 250 GTO's structure with narrower tubes, and RM Sotheby's catalogue for chassis 5129 notes that the concentric coil springs around the rear telescopic dampers and the Watts linkage stabilising the live axle were both developed on the racing car. Brakes were Dunlop discs all round with servo assistance, wheels were Borrani wires on knock-off hubs, and the suspension was double wishbones and coils at the front with semi-elliptic leaves at the rear. The engine was moved forward in the frame relative to the SWB, which is why the cabin is roomier and the car rides better; the trade is a nose-heavier balance than the competition cars.\n\n## Engine and Gearbox\n\nThe Tipo 168/U engine is the 'short-block' Colombo V12 at 73 mm by 58.8 mm, single overhead camshaft per bank, two valves per cylinder, outside-plug heads and three twin-choke Weber 36 DCS carburettors. Ferrari claims 240 bhp. Other credible sources give anything from 236 to 250 bhp and place the peak at either 7,000 or 7,500 rpm; the spread is typical of period Ferrari output figures and no source reconciles it. Torque is quoted at 178 lb-ft at 5,500 rpm by most references. The gearbox was a four-speed all-synchromesh unit with two alternative final-drive ratios. Wikipedia records period criticism that the car was too high-geared, and both modern road tests consulted note that the V12 wants 1,500 to 2,500 rpm before it pulls cleanly in the higher gears. The tachometer's red zone begins at 8,000 rpm.\n\n## The Body and the Cabin\n\nPininfarina's shape has a long bonnet, slim pillars, full-length wings and a truncated Kamm tail with a small integrated lip, which Wikipedia describes as the first on a Ferrari road car. The body was steel with aluminium bonnet, doors and boot lid. The interior was unusual: a nearly vertical three-spoke Nardi wheel, a leather-covered dash with the tachometer and speedometer set in the centre and angled toward the driver, five secondary gauges ahead of the driver, fixed seat backs and pedals adjustable through about 5 cm. Original US list price was $13,375; in Britain the car cost 5,607 pounds.\n\n## Owners, Races and the Long Tail\n\nThe Lusso has always been the 250 that people drove. Steve McQueen ordered chassis 4891 new in 1963 in metallic brown over beige and kept it for a decade; Wikipedia says he parted with it complaining about exhaust smoke under hard acceleration, and Eric Clapton owned one later. A small number of cars were raced privately, with Ferrari recording thirteenth overall at the 1964 Targa Florio and entries at the 1965 Targa Florio and Tour de France. Chassis 4383 was partly rebodied by Fantuzzi for Tecno's Luciano Pederzani. Around 22 or 23 cars were built right-hand drive for Maranello Concessionaires. Chassis 5783 GT, delivered in Rome in July 1964, had covered 32,000 km by its third service two years later, which is a fair picture of how these cars were used. The model's reputation was made by exactly that usability, and its market has followed the SWB and GTO upward at a respectful distance ever since.",
 "marketNotes": "As of September 2026, classic.com's market benchmark for the 250 GT Berlinetta Lusso stands at $1,645,130 on an upward trend, with an average recorded sale of $1,569,407. Tracked results run from $907,000 in August 2023 to $3,300,000 on 17 January 2026, a record that The Classic Valuer attributes to Mecum. The Classic Valuer, working in sterling, gives a median of 1,187,635 pounds across 82 recorded sales with a 72 per cent sell-through rate, and the same January 2026 high at 2,448,600 pounds. Fetched lot results through 2026 cluster well below the outlier: Gooding Christie's sold chassis 5127, a three-year restored car documented by Marcel Massini, for $1,765,000 at Amelia Island on 6 March 2026 against a $1.6 to $1.8 million estimate; Broad Arrow sold a 1963 car for $1,490,000 at Amelia on 7 March 2026; and Mecum sold chassis 4635, Classiche certified with a documented $600,000 restoration, for $1,650,000 at Monterey on 15 August 2026. Earlier comparables: RM Sotheby's Arizona, January 2024, chassis 5129 after 39 years in one ownership, $1,352,500; Gooding's Geared Online sale of chassis 5931 in 2020, $1,430,000; RM Sotheby's Villa Erba, May 2017, chassis 5681 in dark brown, $1,598,789 including premium, with Sports Car Market observing that the market had averaged $2.3 million at the 2014 peak and $1.7 million by 2016. Sterling records: chassis 5443, one of the RHD cars, made 1,897,500 pounds at Salon Prive in September 2014, and the Fantuzzi car 4383 made 1,130,000 pounds at RM Sotheby's Cliveden House sale in 2024. Named provenance moves the model outside its normal band, as the $2.3 million McQueen result of August 2007 first demonstrated.",
 "whatToLookFor": "The Lusso market rewards documentation over almost everything else, because nearly all of the 350-odd cars are mechanically alike. Marcel Massini's chassis histories appear in the catalogue text of most serious sales, and Ferrari Classiche certification with the Red Book is cited on the strongest recent results, including Mecum's chassis 4635 and Girardo's chassis 5443. Classiche confirms that engine, gearbox and rear axle numbers match the factory build sheet; a car sold as 'matching numbers per factory records', as Gooding described chassis 5931, is making a similar claim on different evidence, and it is worth understanding which. Several cars have received engines from other 250s over the years, and Magneto records a 275 GTS engine having been fitted to chassis 4607 GT during a past restoration, so engine number against chassis number is the first check. Establish the colour history: original combinations such as Grigio Fumo, Azzurro or Grigio Argento are recorded on the build sheet, and a car returned to its delivery colour reads better than one in a later red. Restoration age matters; Sports Car Market noted that a 30-year-old refinish held chassis 5681 back at Villa Erba. Steel bodies on tubular frames need a proper look at sills, floors and the lower rear quarters, and the 2014 Salon Prive listing for 5443 describes chassis dipping as part of a full restoration for a reason. Ask for a compression test and a complete history file; DK Engineering, quoted by Drive-My, gives both as the minimum before purchase because engine repairs are expensive. Check that the correct Borrani wheels, Nardi wheel and centre-dash instrument layout are present, and that the aluminium opening panels have not been replaced in steel. Right-hand drive with UK importer paperwork is a distinct sub-market. Finally, a car with evidence of being driven, like the 32,000 km in two years recorded for chassis 5783, is not a lesser car in this model's world.",
 "commonProblems": "Published ownership writing on the Lusso is thin compared with later Ferraris, and the notes below rest on a handful of sources. The engine's character faults were known in period: Wikipedia records major exhaust smoke under hard acceleration and vibration around 3,700 rpm, the same smoke that Steve McQueen is said to have complained of, and the standard gearing was criticised as too tall. Both modern road tests consulted describe a V12 that is reluctant below about 1,500 to 2,500 rpm in the higher gears, so a car that drives cleanly from low revs has usually had careful carburettor and ignition setup. Engine rebuilds are the large expense; Drive-My's marque specialist advises a compression test before purchase for exactly that reason, and the auction catalogues consulted describe rebuilt engines on several cars, including chassis 4635 in 1996. Routine servicing is not the problem, with DK Engineering quoting annual servicing under 2,000 pounds. The steel body over a tubular frame corrodes in the usual places and a full restoration involves stripping to bare metal, as the Salon Prive sale description of chassis 5443's rebuild makes clear, listing chassis dipping, panel work, a complete rewire, differential and gearbox reconstruction and Weber refurbishment. Weber 36 DCS carburettors need periodic rebuilding, and the Dunlop disc and servo system needs correct sealing to work as intended. Interior leather, the leather-covered dash and correct headlining are all expensive to redo properly; the 5443 restoration used four hides. Beyond that, the recurring risk on this model is provenance rather than mechanics: replaced engines, changed colours and gaps in the history file.",
 "valueTrajectory": "The Lusso listed at $13,375 in 1963 and spent its first decades as the affordable Scaglietti 250, valued well below the SWB and far below the GTO. CNN's 2007 report on the McQueen sale put an ordinary car at $600,000 to $800,000 at that point, with McQueen's own car making $2.3 million at Christie's Monterey that August. The 2011-2014 classic boom carried the model to an average around $2.3 million by 2014 according to Sports Car Market, after which it eased to roughly $1.7 million by 2016 and has traded in a band since. As of September 2026, classic.com's benchmark is $1,645,130 with recent fetched results of $1,490,000 to $1,765,000 for good restored cars at Amelia Island and Monterey in 2026, which is broadly where the market sat a decade ago in nominal terms. The $3,300,000 result of January 2026 shows what an exceptional car or story can do, and the Classic Valuer's 72 per cent sell-through across 82 sales suggests a market that is liquid but discriminating. The gap between a Classiche-certified, Massini-documented, original-colour car and one with a replaced engine or a stale restoration is the part of this market that is moving.",
 "overallConfidence": "medium",
 "sources": [
  {
   "ref": "ferrari-lusso",
   "title": "250 GT Berlinetta Lusso",
   "url": "https://www.ferrari.com/en-EN/auto/250-gt-berlinetta-lusso",
   "publisher": "Ferrari S.p.A.",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Ferrari's model record: presented at the 1962 Paris Motor Show, production to the latter part of 1964 'by which time 350 cars had been produced'; 2,400 mm tubular chassis type 539/U; engine type 168/U, 2,953 cc, 73 x 58.8 mm, three Weber 36 DCS, 240 bhp claimed; four-speed all-synchromesh gearbox with two alternative axle ratios; odd GT-suffix chassis numbers; prototype 3849GT; Scaglietti bodied all but a few; steel with aluminium opening panels; Targa Florio 1964 (thirteenth) and 1965, Tour de France 1965."
  },
  {
   "ref": "wikipedia-lusso",
   "title": "Ferrari 250 GT Lusso",
   "url": "https://en.wikipedia.org/wiki/Ferrari_250_GT_Lusso",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "States 351 built over 18 months; 240 hp at 7,500 rpm, 178 lb-ft at 5,500 rpm; GTO-derived chassis with narrower tubes; suspension and brake detail; 1,020-1,310 kg range; 150 mph; 0-100 km/h 7-8 s; interior detail (Nardi wheel, centre instruments, 8,000 rpm red zone); McQueen and Clapton ownership; period faults (smoke under acceleration, vibration around 3,700 rpm, tall gearing); $13,375 list price; Kamm tail; replaced by 275 GTB."
  },
  {
   "ref": "classic-lusso",
   "title": "Ferrari 250 GT Berlinetta Lusso Market",
   "url": "https://www.classic.com/m/ferrari/250/gt-lusso/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Market data as of September 2026: benchmark $1,645,130 trending up, average sale $1,569,407, range $907,000 (17 August 2023) to $3,300,000 (17 January 2026); results $1,650,000 Mecum Monterey 15 August 2026, $1,765,000 Gooding Christie's 6 March 2026, $1,490,000 Broad Arrow 7 March 2026; describes 'approximately 351' produced."
  },
  {
   "ref": "classicvaluer-lusso",
   "title": "Ferrari 250 GT Lusso: Buyer's Guide",
   "url": "https://www.theclassicvaluer.com/buyers-guide/ferrari/250-gt-lusso",
   "publisher": "The Classic Valuer",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "Sterling market data as of September 2026: median 1,187,635 pounds, highest 2,448,600 pounds (17 January 2026, Mecum, US), lowest since 2020 727,694 pounds (19 August 2023), 82 sales tracked, 72 per cent sell-through. Contains no technical or ownership content."
  },
  {
   "ref": "rm-az24-5129",
   "title": "1963 Ferrari 250 GT/L Berlinetta Lusso by Scaglietti, Arizona 2024",
   "url": "https://rmsothebys.com/auctions/az24/lots/r0026-1963-ferrari-250-gtl-berlinetta-lusso-by-scaglietti/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold $1,352,500, Arizona, January 2024. Chassis 5129 'the 129th of 350 examples built'; engine 5129, gearbox 121, axle 123; steel body with aluminium bonnet and doors; 2,953 cc short-block V12 with outside-V plugs and single-port heads; concentric rear springs and Watts linkage developed on the GTO; 39 years single ownership from 1984, 3,128 km in that period."
  },
  {
   "ref": "gooding-am26-5127",
   "title": "1963 Ferrari 250 GT Lusso, Amelia Island Auctions 2026",
   "url": "https://www.goodingco.com/lot/1963-ferrari-250-gt-lusso-1c/",
   "publisher": "Gooding Christie's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Lot 134, Amelia Island, March 2026: sold $1,765,000 against $1,600,000-1,800,000 estimate. Chassis 5127 GT, engine 5127; 'One of Only 350 Lussos Built'; 2,953 cc SOHC Tipo 168U V12, 240 bhp at 7,000 rpm, three Weber 36 DCS, four-speed, four-wheel Dunlop discs; delivered to Milan in Grigio Fumo; three-year restoration; Massini documented."
  },
  {
   "ref": "gooding-2020-5931",
   "title": "1964 Ferrari 250 GT Lusso, Geared Online",
   "url": "https://www.goodingco.com/lot/1964-ferrari-250-gt-lusso/",
   "publisher": "Gooding & Company",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold $1,430,000 in the 2020 Geared Online sale against $1,400,000-1,800,000 estimate. Chassis 5931 GT, engine 5931; 'One of Only 350 Lussos Built'; delivered new to Luigi Chinetti Motors in Azzurro over Nuvola; matching engine and rear axle per factory records; Massini documented; describes the Lusso as the final 250 GT model."
  },
  {
   "ref": "rm-ch24-fantuzzi",
   "title": "1963 Ferrari 250 GT/L Berlinetta Lusso by Fantuzzi, Cliveden House",
   "url": "https://rmsothebys.com/auctions/ch24/lots/r0008-1963-ferrari-250-gtl-berlinetta-lusso-by-fantuzzi/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Sold 1,130,000 pounds, Cliveden House sale, 2024. Chassis 4383, 'the 16th example of the 350 Lussos produced between 1962 and 1964'; partly rebodied by Medardo Fantuzzi for Tecno co-founder Luciano Pederzani to resemble the 330 LMB; later Chris Evans ownership; DK Engineering restoration 2011; quotes 240 bhp at 7,500 rpm and a top speed just short of 150 mph."
  },
  {
   "ref": "iconic-5443",
   "title": "1963 Ferrari 250 GT/L 'Lusso', The Salon Prive Sale 2014",
   "url": "https://www.iconicauctioneers.com/1963-ferrari-250-gt-l-lusso-rec01279-1-0914",
   "publisher": "Iconic Auctioneers",
   "sourceType": "auction-house",
   "reliability": "medium",
   "notes": "Sold 1,897,500 pounds at Salon Prive, 3 September 2014; the listing labels the figure a hammer price. Chassis 250GTL5443, one of 22 RHD cars supplied via Maranello Concessionaires, 'some reports suggest that today just 17 examples remain'; restoration detail (chassis dipping, rewire, engine, gearbox and differential rebuild, Weber refurbishment, four-hide interior)."
  },
  {
   "ref": "girardo-5443",
   "title": "1963 Ferrari 250 GT/L 'Lusso' Berlinetta by Scaglietti",
   "url": "https://girardo.com/car/1963-ferrari-250-gt-l-lusso-berlinetta-by-scaglietti-1/",
   "publisher": "Girardo & Co.",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Dealer listing for chassis 5443: 'the ninth' of 'only 22 UK RHD Ferrari 250 GT/Ls'; Ferrari Classiche certified; factory invoice to Maranello Concessionaires dated 18 December 1963; original UK registration book; states the 2014 result of 1,897,500 pounds remains the model's auction record; Pininfarina design, Scaglietti build."
  },
  {
   "ref": "scm-5681",
   "title": "1964 Ferrari 250 GT/L Lusso by Scaglietti",
   "url": "https://www.sportscarmarket.com/profile/1964-ferrari-250-gtl-lusso-by-scaglietti",
   "publisher": "Sports Car Market",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Auction profile: chassis 5681GT sold $1,598,789 including premium at RM Sotheby's Villa Erba, 27 May 2017; 350 built 1962-64; $13,375 list; market averaged $2.3 million at the 2014 peak and $1.7 million by 2016; McQueen car $2.31 million in 2007; 30-year-old brown refinish by Bachelli & Villa held the price back."
  },
  {
   "ref": "drivemy-roadtest",
   "title": "1964 Ferrari 250 GT Lusso road test",
   "url": "https://drive-my.com/en/test-drive/item/2649-1964-ferrari-250-gt-lusso-road-test.html",
   "publisher": "Drive-My",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Modern road test of chassis 5783 GT: 250 bhp at 7,000 rpm, 188 lb-ft at 5,500 rpm, 1,312 kg, 149 mph, 0-60 in 7.9 s, 17 mpg, 5,607 pounds new; 350 built; engine needs 2,500 rpm to pull; delivered Rome 6 July 1964 and 32,000 km by its third service; DK Engineering: annual servicing under 2,000 pounds, obtain full history and a compression test because engine repairs are expensive."
  },
  {
   "ref": "gtspirit-roadtest",
   "title": "Road Test: 1963 Ferrari 250 GT Lusso",
   "url": "https://gtspirit.com/2014/02/11/road-test-1963-ferrari-250-gt-lusso/",
   "publisher": "GTspirit",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Road test of chassis 4411GT, the 28th built: 240 bhp at 7,500 rpm, 8.0 s to 60 mph, 150 mph; 350 built with 23 right-hand drive; servo-assisted discs; needs a downshift below 1,500 rpm in high gears; provenance from Mylene Demongeot commission through Clemente Setbon, Paul Baber and John Mayston-Taylor's 2003 restoration."
  },
  {
   "ref": "supercarsnet-lusso",
   "title": "Ferrari 250 GT Lusso - The Ultimate Guide",
   "url": "https://www.supercars.net/blog/1964-ferrari-250-gt-lusso/",
   "publisher": "Supercars.net",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Specification sheet: 'around 350' built; Paris Salon October 1962; 2,953 cc, 73 x 58.8 mm, 9.2:1, 250 bhp at 7,500 rpm, 215 lb-ft at 5,500 rpm; gear ratios 2.54/1.70/1.26/1.00; Borrani RW3801 wheels; 4,410 x 1,750 x 1,290 mm; 1,020 kg; $13,375; shares wheelbase, discs, Borranis, suspension and engine with the GTO. Its 5.2 s 0-60 figure is out of line with every other source."
  },
  {
   "ref": "conceptcarz-lusso",
   "title": "1964 Ferrari 250 GT Lusso",
   "url": "https://www.conceptcarz.com/vehicle/z8783/ferrari-250-gt-lusso.aspx",
   "publisher": "conceptcarz.com",
   "sourceType": "specialist",
   "reliability": "low",
   "notes": "States '351 examples built' between the 1962 Paris introduction and 1964; 240 hp at 7,500 rpm and 178 lb-ft; three Weber 36 DCS; 94-inch wheelbase; 7-8 s to 60 mph and 150 mph. Used chiefly as a second independent statement of the 351 figure."
  },
  {
   "ref": "yahoo-gooding-preview",
   "title": "1963 Ferrari 250 GT Lusso Heads to Amelia Island With $1.8 Million Estimate",
   "url": "https://autos.yahoo.com/classic-and-collector/articles/1963-ferrari-250-gt-lusso-180035488.html",
   "publisher": "Yahoo Autos",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Preview of Gooding Christie's Amelia Island, 5-6 March 2026: chassis 5127 built October 1963 as the 128th Lusso; delivered to Ferrari's Milan dealer; three-year restoration; Grigio Fumo with ivory interior replacing the original black; 'Only 350 examples were built'; quotes 236 hp at 7,500 rpm, 150 mph, Dunlop discs and a four-speed."
  },
  {
   "ref": "cca-info-amelia26",
   "title": "2026 Amelia Island and Miami Sales Results (Top 50 Auction Prices)",
   "url": "https://www.classic-car-auctions.info/usa/florida/amelia-island/2026-amelia-island-and-miami-sales-results-top-50-auction-prices/",
   "publisher": "Classic Car Auctions (classic-car-auctions.info)",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "Independent results table: 1963 Ferrari 250 GT Lusso $1,765,000 at Gooding Christie's Amelia Island, 5-6 March 2026, ranked 34th of the week's top 50 results. Corroborates the Gooding lot page and classic.com."
  },
  {
   "ref": "racecar-mecum-4635",
   "title": "1963 Ferrari 250 GT/L Berlinetta Lusso @ Mecum Monterey",
   "url": "https://www.racecar.com/news/103998/market-and-auction/1963-ferrari-250-gtl-berlinetta-lusso-mecum-monterey",
   "publisher": "Racecar.com",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Mecum Monterey 2026 catalogue text for chassis 4635: 'the 79th of 350' built 1962-64; delivered to Garage Francorchamps, Brussels, in Grigio Argento Italver; engine rebuilt in Germany 1996; Classiche certified with Red Book; minor front-corner accident at the 1997 Ferrari 50th anniversary; estimated $600,000 spent on the 2014 J&L Fabrication restoration."
  },
  {
   "ref": "sportscardigest-mecum-4635",
   "title": "Monterey Car Week: 1963 Ferrari 250 GT/L Berlinetta Lusso",
   "url": "https://sportscardigest.com/monterey-car-week-1963-ferrari-250-gt-l-berlinetta-lusso/",
   "publisher": "Sports Car Digest",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Mecum Monterey lot 1175988, chassis 4635 GT: 250 horsepower quoted, three Weber 36 DCS, original four-speed, Classiche matching numbers, $600,000 restoration, recent $62,806.82 service by Winning Makes of Santa Barbara; Pininfarina design, Scaglietti build."
  },
  {
   "ref": "classicdriver-mcqueen",
   "title": "Ex-Steve McQueen Lusso to be sold at Monterey 2007",
   "url": "https://www.classicdriver.com/en/article/ex-steve-mcqueen-lusso-be-sold-monterey-2007",
   "publisher": "Classic Driver",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Pre-sale report: McQueen's car is chassis 4891, bought new in 1963 in Marrone metallic brown over beige leather; offered by Christie's at the Monterey Jet Center on 16 August 2007 at $800,000-1,200,000; Borrani wheels, Pininfarina body built by Scaglietti."
  },
  {
   "ref": "cnn-mcqueen",
   "title": "Ferrari once owned by Steve McQueen sells for $2.3 million",
   "url": "https://money.cnn.com/2007/08/17/autos/carreviews/mcqueen_ferrari/index.htm",
   "publisher": "CNN Money",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Result report, 17 August 2007: McQueen's 1963 Lusso sold for $2.3 million at Christie's Monterey against an $800,000-1.2 million estimate; McQueen bought it in 1963 and traded it away in 1973; 'Only 350 cars of this type were produced'; a non-McQueen car was then valued at $600,000 to $800,000."
  }
 ],
 "claims": [
  {
   "section": "history",
   "claimText": "The 250 GT Berlinetta Lusso was introduced as a prototype, chassis 3849GT, at the Paris Motor Show in October 1962 and remained in production until the latter part of 1964, when the 275 GTB replaced it as Ferrari's road berlinetta.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "ferrari-lusso",
    "wikipedia-lusso",
    "supercarsnet-lusso",
    "gooding-2020-5931"
   ]
  },
  {
   "section": "history",
   "claimText": "Pininfarina designed the body and built the prototype and a few early cars; Scaglietti built the rest, in steel with aluminium bonnet, doors and boot lid.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "ferrari-lusso",
    "wikipedia-lusso",
    "rm-az24-5129",
    "gtspirit-roadtest"
   ]
  },
  {
   "section": "production",
   "claimText": "Total production is stated as 350 cars by Ferrari and by most auction catalogues, and as 351 by Wikipedia, conceptcarz and classic.com; the one-car difference is not explained by any source and no single figure is asserted here.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "ferrari-lusso",
    "rm-az24-5129",
    "gooding-am26-5127",
    "scm-5681",
    "cnn-mcqueen",
    "wikipedia-lusso",
    "conceptcarz-lusso",
    "classic-lusso"
   ],
   "conflictNote": "Ferrari's model page states 350. RM Sotheby's (chassis 5129 'the 129th of 350'; chassis 4383 'the 16th of 350'), Gooding (2020 and March 2026), Sports Car Market, Mecum's catalogue text, CNN, Drive-My and GTspirit all state 350. Wikipedia states 351, conceptcarz states 351 and classic.com states 'approximately 351'. Whether the extra car is the Paris prototype is not stated by any source. Unresolved; productionTotal is null."
  },
  {
   "section": "production",
   "claimText": "A small number of Lussos were built right-hand drive for the UK importer Maranello Concessionaires; the count is given as 22 by Girardo and Iconic Auctioneers and 23 by GTspirit, and is not resolved here.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "girardo-5443",
    "iconic-5443",
    "gtspirit-roadtest"
   ],
   "conflictNote": "Girardo states 'only 22 UK RHD Ferrari 250 GT/Ls' and Iconic Auctioneers 'one of just 22 Righthand drive cars built by Maranello Concessionaires'. GTspirit states 'only 23 right-hand drive examples produced'. No registry source could be fetched to settle it; unresolved."
  },
  {
   "section": "specs",
   "claimText": "The engine is the 2,953 cc Tipo 168/U Colombo short-block V12, bore and stroke 73 mm x 58.8 mm, single overhead camshaft per bank, outside-plug heads, on three Weber 36 DCS twin-choke carburettors, driving through a four-speed all-synchromesh gearbox with two alternative final-drive ratios.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "ferrari-lusso",
    "wikipedia-lusso",
    "rm-az24-5129",
    "gooding-am26-5127"
   ]
  },
  {
   "section": "specs",
   "claimText": "Ferrari claims 240 bhp for the Lusso; other credible sources quote between 236 and 250 bhp with the peak at either 7,000 or 7,500 rpm, and torque figures range from 178 to 215 lb-ft, so the output is best read as a period claim of about 240 bhp rather than a measured figure.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "ferrari-lusso",
    "wikipedia-lusso",
    "gooding-am26-5127",
    "yahoo-gooding-preview",
    "drivemy-roadtest",
    "supercarsnet-lusso",
    "sportscardigest-mecum-4635"
   ],
   "conflictNote": "Ferrari: 240 bhp, no rpm. Wikipedia and RM Sotheby's (chassis 4383): 240 at 7,500 rpm. Gooding Amelia 2026: 240 at 7,000 rpm. Yahoo Autos preview of the same car: 236 hp at 7,500 rpm. Drive-My: 250 at 7,000 rpm. Supercars.net: 250 at 7,500 rpm. Sports Car Digest: 250. Torque: 178 lb-ft (Wikipedia, conceptcarz), 188 lb-ft (Drive-My), 215 lb-ft (Supercars.net). No source reconciles these; unresolved."
  },
  {
   "section": "specs",
   "claimText": "The chassis is a 2,400 mm wheelbase tubular steel frame, Ferrari type 539/U, developed from the 250 GTO with narrower tubes, carrying the GTO's concentric coil-over rear dampers and Watts linkage on a live axle, double wishbones and coils at the front, servo-assisted Dunlop disc brakes and Borrani wire wheels.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "ferrari-lusso",
    "wikipedia-lusso",
    "rm-az24-5129",
    "gooding-am26-5127",
    "supercarsnet-lusso"
   ]
  },
  {
   "section": "specs",
   "claimText": "Published kerb weights range from 1,020 kg to about 1,312 kg and no factory figure was found; the claimed top speed of 150 mph and 0-60 mph times of roughly 8 seconds are period figures repeated by road tests rather than independently verified here.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-lusso",
    "supercarsnet-lusso",
    "drivemy-roadtest",
    "gtspirit-roadtest"
   ]
  },
  {
   "section": "history",
   "claimText": "The Lusso was priced at $13,375 in the United States and 5,607 pounds in Britain when new, and was positioned as a road car between the 250 GT SWB and the 250 GTE 2+2 rather than a competition model.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-lusso",
    "scm-5681",
    "supercarsnet-lusso",
    "drivemy-roadtest"
   ]
  },
  {
   "section": "history",
   "claimText": "Steve McQueen ordered chassis 4891 new in 1963 in metallic brown over beige leather, kept it until 1973, and the car sold at Christie's Monterey on 16 August 2007 for $2.3 million against an estimate of $800,000 to $1.2 million.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classicdriver-mcqueen",
    "cnn-mcqueen",
    "scm-5681",
    "wikipedia-lusso"
   ]
  },
  {
   "section": "history",
   "claimText": "Ferrari records private competition entries for the Lusso at the Targa Florio in 1964 (thirteenth overall) and 1965 and at the 1965 Tour de France; one car, chassis 4383, was partly rebodied by Fantuzzi for Tecno co-founder Luciano Pederzani.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "ferrari-lusso",
    "rm-ch24-fantuzzi"
   ]
  },
  {
   "section": "problems",
   "claimText": "Period criticism recorded for the Lusso includes heavy exhaust smoke under hard acceleration, vibration around 3,700 rpm and gearing that was too tall; modern road tests describe an engine reluctant below about 1,500 to 2,500 rpm in the higher gears.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-lusso",
    "drivemy-roadtest",
    "gtspirit-roadtest"
   ]
  },
  {
   "section": "problems",
   "claimText": "Specialist advice is to obtain a full history file and a compression test before purchase because engine repairs are the major expense, while routine annual servicing is quoted at under 2,000 pounds; full restorations documented in sale listings involve chassis dipping, rewiring, engine, gearbox and differential rebuilds and Weber refurbishment.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "drivemy-roadtest",
    "iconic-5443",
    "racecar-mecum-4635"
   ]
  },
  {
   "section": "market",
   "claimText": "As of September 2026 classic.com records a market benchmark of $1,645,130 and an average sale of $1,569,407 for the Lusso on an upward trend, with tracked results from $907,000 in August 2023 to $3,300,000 on 17 January 2026; The Classic Valuer gives a sterling median of 1,187,635 pounds across 82 sales with a 72 per cent sell-through rate.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-lusso",
    "classicvaluer-lusso"
   ]
  },
  {
   "section": "market",
   "claimText": "Fetched 2026 auction results for restored, documented cars cluster between $1,490,000 and $1,765,000: Gooding Christie's sold chassis 5127 for $1,765,000 at Amelia Island on 6 March 2026, Broad Arrow sold a 1963 car for $1,490,000 at Amelia on 7 March 2026, and Mecum sold Classiche-certified chassis 4635 for $1,650,000 at Monterey on 15 August 2026.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "gooding-am26-5127",
    "cca-info-amelia26",
    "classic-lusso",
    "racecar-mecum-4635",
    "sportscardigest-mecum-4635",
    "yahoo-gooding-preview"
   ]
  },
  {
   "section": "market",
   "claimText": "Earlier comparables show the same band: RM Sotheby's sold chassis 5129 for $1,352,500 at Arizona in January 2024, Gooding sold chassis 5931 for $1,430,000 online in 2020, and RM Sotheby's sold chassis 5681 for $1,598,789 including premium at Villa Erba in May 2017, with Sports Car Market noting a 2014 peak average of about $2.3 million easing to $1.7 million by 2016.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "rm-az24-5129",
    "gooding-2020-5931",
    "scm-5681"
   ]
  },
  {
   "section": "market",
   "claimText": "In sterling, right-hand-drive chassis 5443 made 1,897,500 pounds at Salon Prive in September 2014, which Girardo states is still the model's auction record, and the Fantuzzi-bodied chassis 4383 made 1,130,000 pounds at RM Sotheby's Cliveden House sale in 2024.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "iconic-5443",
    "girardo-5443",
    "rm-ch24-fantuzzi"
   ]
  },
  {
   "section": "market",
   "claimText": "Ferrari Classiche certification and Marcel Massini documentation are cited on the strongest recent Lusso results, and matching engine, gearbox and axle numbers against the factory build sheet are the primary provenance test on a model where most cars are otherwise mechanically alike.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "gooding-am26-5127",
    "gooding-2020-5931",
    "racecar-mecum-4635",
    "girardo-5443",
    "rm-az24-5129"
   ]
  }
 ]
};
