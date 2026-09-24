/**
 * Researched model draft - Triumph Spitfire (1963-1980 US model years).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedSpitfire = {
 "slug": "triumph/spitfire",
 "heroPhoto": "/images/models/triumph-spitfire.jpg",
 "heroPhotoCredit": "Photo: Lothar Spurzem, CC BY-SA 2.0 de, via Wikimedia Commons",
 "make": "Triumph",
 "model": "Spitfire",
 "generation": null,
 "generationCode": null,
 "trim": null,
 "yearStart": 1963,
 "yearEnd": 1980,
 "bodyStyles": [
  "2-door two-seat roadster with folding soft top (a top assembled from a frame kit on the Mk I and Mk II, a folding top from the Mk III)",
  "2-door two-seat roadster with optional factory detachable hardtop"
 ],
 "engines": [
  "1,147 cc overhead-valve inline-four, twin SU carburetors, 63 hp at 5,750 rpm and 67 lb-ft at 3,500 rpm in UK specification (Spitfire 4 / Mk I, US model years 1963-1964)",
  "1,147 cc overhead-valve inline-four with revised camshaft, water-heated intake and tubular exhaust manifold, 67 hp at 6,000 rpm (Mk II, 1965-1967)",
  "1,296 cc overhead-valve inline-four, twin SU carburetors, claimed 75 hp at 6,000 rpm and 75 lb-ft at 4,000 rpm (Mk III from 1967); US cars from 1969 at 8.5:1 compression and a quoted 68 hp",
  "1,296 cc overhead-valve inline-four, single Zenith-Stromberg carburetor and 8.5:1 compression for North America (Mk IV, US model years 1971-1972), under 50 hp according to Moss Motors",
  "1,493 cc overhead-valve inline-four (73.7 x 87.5 mm bore and stroke), single Zenith-Stromberg carburetor, 7.5:1 compression (9.1:1 for 1976 only), officially 57 hp SAE net per Hagerty (US Spitfire 1500, 1973-1980)"
 ],
 "productionTotal": null,
 "productionNotes": "No single production total survives cross-checking. Moss Motors gives 314,342. A post on the Spitfires mailing list, archived at The Triumph Experience, quotes a Vintage Triumph Register e-zine at 314,332, and the poster, who says he worked from the build records at the British Motor Industry Heritage Trust in Gaydon, uses the same figure. Wikipedia's per-version table (Mk I 45,753, Mk II 37,409, Mk III 65,320, Mk IV 70,021, 1500 95,829, all cited to Graham Robson's 1982 book) also sums to 314,332, though its text says approximately 315,000. The Vintage Triumph Register's own page says over 314,000, Hagerty UK says 314,000, and Hagerty's US buyer's guide says over 325,000. No source consulted explains the ten-car gap between 314,332 and 314,342, and nothing else here supports the Hagerty US figure, so productionTotal is left null. The same list poster adds that cars shipped for CKD and SKD assembly at overseas plants were never fully recorded, so every total may understate. The 1500 figure of 95,829 carries a definitional trap: the Triumph Spitfire and GT6 Information Warehouse says it includes the 1973 and 1974 US cars, with 91,137 built excluding them, while Wikipedia dates the 1500 from December 1974. Whether those US cars are also counted in the Mk IV total is not stated anywhere consulted. For US deliveries, Wikipedia reports that 45 percent of the first 100,000 cars, completed in February 1968, went to the US; the Gaydon-based list post gives 139,719 US cars in total, about 44 percent. That is a forum figure and is labeled as one. US list prices are thinly documented: Hagerty gives just under $2,200 for the 1963 car and Wikipedia a 1980 base price of $7,365, neither confirmed by a second source, and no verified US list price was found for the years between.",
 "notableTrims": [
  {
   "name": "Spitfire 4 (Mk I), US model years 1963-1964",
   "note": "The original low-bumper body, 1,147 cc and 63 hp, rubber floor mats, a top whose frame the owner assembles, and the unmodified swing-axle rear. Wire wheels, overdrive and a rounded hardtop were the only real options."
  },
  {
   "name": "Spitfire Mk II, 1965-1967",
   "note": "A few more horsepower (67 hp per Wikipedia), carpet for the first time and a revised grille. Hagerty calls it the last Spitfire to keep Michelotti's original design intact, before the bumper was raised."
  },
  {
   "name": "Spitfire Mk III, 1967-1970",
   "note": "1,296 cc and 75 hp, a folding top and the raised front bumper. Hagerty calls it the most powerful Spitfire sold in the US. From 1969 US cars were federalized, and 1970 US cars carried a one-year Spitfire badge over an RAF roundel on the hood."
  },
  {
   "name": "Spitfire Mk IV (US 1971-1972, 1,296 cc)",
   "note": "Michelotti's cut-off tail and seamless hood, plus the swing-spring rear that tamed the handling. In US form a single Zenith-Stromberg and 8.5:1 compression left it under 50 hp by Moss Motors' account."
  },
  {
   "name": "US Spitfire 1500, 1973-1974 (FM prefix)",
   "note": "Mk IV bodywork with 1500 badges and the 1,493 cc engine, two years before the rest of the world got it. Moss Motors names the 1973 1500 as a favored model for its revised suspension and smallest bumper guards."
  },
  {
   "name": "Spitfire 1500, 1975-1978",
   "note": "Single-rail gearbox from 1975, large overriders on chrome bumpers, and for 1976 only a 9.1:1 compression ratio per Wikipedia. Paint codes changed from numbers to three letters in March 1977, so a car's code tells you roughly when it was painted."
  },
  {
   "name": "Spitfire 1500, 1979-1980 rubber-bumper cars",
   "note": "One-piece black rubber bumpers built for the five-mile-per-hour federal standard, and at 1,875 lb for 1980 the heaviest Spitfire. Many have been converted to earlier chrome bumpers, which Classic Motorsports says weigh roughly 80 lb less."
  },
  {
   "name": "Factory hardtop and overdrive cars",
   "note": "Hagerty names a factory hardtop and overdrive as the options that command a premium, alongside rare colors. Working overdrive matters on any car that sees highway use."
  }
 ],
 "specs": {
  "layout": "Front-mounted longitudinal inline-four, rear-wheel drive",
  "chassis": "Shortened Triumph Herald steel backbone frame with the outer rails and rear outriggers removed; the body's structural sills make up the stiffness",
  "body": "Steel two-seat roadster body by Giovanni Michelotti, bolted to the frame; one-piece hood and fenders tilt forward",
  "engine": "Standard SC overhead-valve inline-four: 1,147 cc (Mk I, Mk II), 1,296 cc (Mk III, Mk IV), 1,493 cc (1500; US from 1973)",
  "fuel_system": "Twin SU carburetors on Mk I-III and home-market cars; single Zenith-Stromberg on US Mk IV and 1500",
  "power": "63 hp (Mk I, UK spec); 67 hp (Mk II); 75 hp claimed (Mk III); 68 hp quoted for 1969 US cars; under 50 hp for US Mk IV per Moss Motors; 57 hp SAE net for the US 1500 per Hagerty, 53 hp DIN per Wikipedia",
  "torque": "67 lb-ft at 3,500 rpm (Mk I, UK spec); 75 lb-ft at 4,000 rpm (Mk III, claimed); Moss Motors says the 1500 added about 10 lb-ft. No US-specification torque figure was found in the sources consulted",
  "transmission": "4-speed manual; all-synchromesh from the Mk IV per Moss Motors; single-rail gearbox from 1975",
  "overdrive": "Optional overdrive on third and top",
  "suspension": "Front: coil springs and wishbones. Rear: swing axles with transverse leaf spring; swing-spring arrangement from the Mk IV; longer axles, lower spring mount and wider track on the 1500",
  "brakes": "Front discs, rear drums; dual-circuit system on US cars from the 1968 model year",
  "steering": "Rack and pinion, from the Herald",
  "weight": "1,568 lb (Mk I, UK spec) rising to 1,875 lb for the 1980 car, per Wikipedia citing Robson; manufacturer and period figures, not weighed here",
  "acceleration": "0-60 mph in about 15 s for the Mk I per Hagerty (16.4 s per Wikipedia, UK spec); about 13 s for the Mk III per Hagerty; 16.3 s for the US 1500 per Wikipedia",
  "top_speed": "About 90 mph (Hagerty), 91 mph (Moss Motors) or 92 mph (Wikipedia) for the Mk I; just under 100 mph for the Mk III per Hagerty",
  "identification": "Commission numbers until late 1979, then VIN format. FK prefix for US 1300s, FM for US 1500s; U suffix US, UC California, O overdrive",
  "paint_codes": "Numeric codes until March 1977, three-letter codes after: Pimento Red 72 / CAB, Carmine Red 82 / CAA, Java Green 85 / HAB, Inca Yellow 94 / FAB"
 },
 "summary": "The Triumph Spitfire was Standard-Triumph's answer to the Austin-Healey Sprite: a two-seat roadster built on a shortened Triumph Herald backbone frame, with Herald running gear, a Giovanni Michelotti body and, unusually for the money, roll-up windows, front disc brakes and independent rear suspension. It arrived in the United States as a 1963 model at just under $2,200 and stayed on sale here through the 1980 model year, across five versions: Spitfire 4 (Mk I), Mk II, Mk III, Mk IV and 1500. The American car diverged from the home-market car early. US Spitfires got the raised front bumper with the Mk III, a federal dashboard and lower compression from 1969, a single Zenith-Stromberg carburetor on the Mk IV, the 1,493 cc engine two years before Britain, and black rubber bumpers for 1979-80. The United States was its largest market by a wide margin. Total production is usually given as a little over 314,000, but the sources consulted here do not agree on the exact figure, and one puts it above 325,000.",
 "history": "## A Sprite Fighter From the Parts Bin\n\nStandard-Triumph began the car in 1957 under the code name Bomb, to answer the Austin-Healey Sprite. Where the Sprite borrowed Austin sedan running gear, Triumph took the separate backbone frame of its Herald, shortened it, removed the outer rails and rear outriggers, and built structural sills into the body to recover the stiffness. Giovanni Michelotti, who had styled the Herald, drew the body, with a one-piece front that tilted forward for engine access. Financial trouble at Standard-Triumph stalled the project; Wikipedia records that after Leyland Motors took the company over, its officials found Michelotti's prototype under a dust sheet in a corner of the factory and approved it. The car was shown in October 1962 and reached American showrooms as a 1963 model with a 1,147 cc four, twin SU carburetors and 63 hp.\n\n## Five Versions, Two Markets\n\nThe Mk II of 1965 brought a few more horsepower and carpet in place of rubber mats. The Mk III, which reached US roads in 1967, took the 1,296 cc engine and 75 hp, a proper folding top, and a front bumper raised to meet bumper-height rules; Hagerty calls it the most powerful Spitfire sold here. From 1969 the US car was federalized: compression dropped to 8.5:1, output to a quoted 68 hp, and the instruments moved in front of the driver. The 1970 US cars carried a one-year Spitfire badge over an RAF roundel. Michelotti's Mk IV followed for the 1971 model year with a cut-off tail, a hood without seams along the fenders, and in North America a single Zenith-Stromberg carburetor that Moss Motors says left the engine under 50 hp.\n\n## The Swing Axle Question\n\nThe Herald's rear suspension came along unchanged: swing axles located by a transverse leaf spring, with a universal joint only at the differential. Pushed hard into a corner, the rear could jack into extreme positive camber and the inside tire tuck under, the source of the car's reputation for sudden oversteer. The fix was cheap. For the Mk IV only the bottom leaf was clamped to the differential and the rest of the stack could pivot, an arrangement Triumph called the swing spring. The 1500 added longer axles, a lower spring mount for more negative camber and a wider track. When Road & Track tested nine showroom-stock sports cars in April 1973, all on 165-section radials, the GT6 set the fastest lap and the Spitfire was judged the most fun to drive.\n\n## Federal Years\n\nFor the United States the 1,493 cc engine arrived for the 1973 model year, two years before Britain, in Mk IV bodywork with 1500 badges and FM-prefix commission numbers. It traded revs for torque: a single Zenith-Stromberg, compression cut to 7.5:1 for unleaded fuel (9.1:1 for 1976 only, per Wikipedia), and an official 57 hp that Hagerty points out was an SAE net figure. A better-shifting single-rail gearbox came in 1975. Bumper law then reshaped the car: large overriders on the chrome bumpers, and for 1979 and 1980 one-piece black rubber bumpers built to the five-mile-per-hour standard. Commission numbers gave way to VIN-format numbers late in 1979 at US insistence.\n\n## An American Car Built in Coventry\n\nOf the first 100,000 Spitfires, completed in February 1968, 45 percent went to the United States. A researcher who worked from the build records at Gaydon puts total US deliveries at 139,719. Moss Motors says the Spitfire outsold the Midget and Sprite every year except 1969, when a strike cut Triumph's output, and it won SCCA national championships in F and G Production. Production ended at Canley in August 1980. The Vintage Triumph Register blames British Leyland management, US safety and emissions rules, and the exchange rate. The last car built, an Inca Yellow home-market car with hardtop and overdrive, was never sold to the public and sits in the British Motor Museum.",
 "marketNotes": "As of September 2026, classic.com gives an average Triumph Spitfire sale price of $10,120, and its recent US results bracket that figure: a 1966 Mk II sold for $12,000 in New Hampshire on August 21, 2026, and a 1979 car for $4,200 in Bend, Oregon, on August 19, 2026, while another 1979 car went unsold in Idaho that week. The lowest result it records is $100 for a 1971 car in December 2025, a parts-car price. Hagerty's 2025 buyer's guide, read as of September 2026, placed condition 2 (excellent) cars at $16,600 to $17,400 and condition 3 (good) cars at $7,300 to $8,200, and said all versions sit within a thousand or two dollars of each other, with a show car or low-mileage original stretching past $20,000 but not by much. Rare colors, a factory hardtop and overdrive carry a premium. The auction record at the top is thin: RM Sotheby's offered a restored and modified 1974 Spitfire 1500, chassis FM16659U, at its Open Roads online sale in March 2021 at a $25,000-$30,000 estimate and it did not sell, and a 1970 car estimated at $8,000-$12,000 went unsold at RM's Santa Monica sale in 2016. Neither lot page gives a high bid. classic.com mixes UK results in pounds with US results; only the dollar results are used here.",
 "whatToLookFor": "Rust decides the car, and it can be anywhere. Hagerty lists sills, fender arches, trunk floors, main floors, the cowl, the windshield frame and the backbone frame. Classic Motorsports adds front floor pans rotted by water leaking in around the master cylinder openings, and says rot at the bottom of the windshield frame on Mk IV and 1500 cars is hard and expensive to repair. A sagging door can be worn hinge pins or a rotten lower A-post. The sills are structural, standing in for the Herald's outriggers, so the quality of any sill repair matters more than on most cars. On 1971 and later cars the frame extensions to the rear bumper are open ended and collect water. The tilting front end is easily damaged, so panel gaps and kinks in the frame ahead of the suspension towers tell a story. On the engine, fore-and-aft play at the crank pulley means thrust washers; Classic Motorsports puts ideal end float at 0.006 inch. Reverse gear teeth on the 1975-80 single-rail box are often chipped. The commission plate states what the car was: FK for a US 1300, FM for a US 1500, U for US specification, UC for California, O for overdrive. Paint codes went from numbers to three letters in March 1977, so Pimento Red is 72 or CAB, Carmine Red 82 or CAA, Java Green 85 or HAB and Inca Yellow 94 or FAB. On year, Moss Motors names the 1973 1500 as a favored model, while Hagerty finds little value spread across versions. On cost, Hagerty put a full interior refurbishment under $2,000 and a wood dash at $240 in 2025, and Moss Motors quoted a gearbox rebuild under $500 in 2009.",
 "commonProblems": "The 1,147 and 1,296 cc engines are sturdy, with one known weakness: crankshaft thrust washers, the same issue as the TR6, named by Moss Motors, Hagerty and Classic Motorsports alike. Smoke, low oil pressure and a clatter at startup point to bearings, and Hagerty stresses the correct oil filter with a non-return valve. The 1,493 cc engine has a weaker record; Wikipedia calls it rough and more prone to failure, and Hagerty notes ring and crankshaft wear. Its gearbox has the better reputation, though careless engagement of reverse on the 1975-80 single-rail box damages the teeth and can take the layshaft and synchros with it. The front trunnions wear quickly without regular lubrication, and a UK specialist sells a conversion that eliminates them. Rear wheel bearings, leaf springs, lower ball joints, rear U-joints and bushings all wear, and Moss Motors says to expect a full suspension and driveline rebuild. A whine from the rear can simply be low differential oil. Overdrive solenoids fail. Zenith-Stromberg idle and flat-spot complaints are often a split diaphragm or an empty dashpot. Electrical faults are usually frayed wiring and corroded grounds. Whether the frame itself rots is a point the sources do not agree on: Hagerty includes the backbone chassis among the rust areas, while a British specialist quoted by Hagerty UK says the chassis does not tend to rot and the sills and floors do.",
 "valueTrajectory": "The Spitfire has always been the cheap way into a British roadster. Moss Motors in 2009 described a decent car at about $1,000 and a do-it-yourself restoration for under $5,000. By 2025 Hagerty's price guide had condition 3 cars at $7,300 to $8,200 and condition 2 cars at $16,600 to $17,400, and as of September 2026 classic.com's average sale sits at $10,120. That is real growth from a low base, but the ceiling has stayed close: Hagerty puts even show cars only a little past $20,000, and both RM Sotheby's lots traced here, estimated at $8,000-$12,000 in 2016 and $25,000-$30,000 in 2021, went unsold. The spread between versions is narrow, which leaves condition, the quality of rust repair, overdrive, a factory hardtop and color as what moves price. Professional restoration costs well above finished value, as the 1974 car with nearly $60,000 in invoices shows, and Hagerty's own conclusion is that paying more for a solid car beats buying a cheap one with needs.",
 "overallConfidence": "medium",
 "sources": [
  {
   "ref": "wikipedia-spitfire",
   "title": "Triumph Spitfire",
   "url": "https://en.wikipedia.org/wiki/Triumph_Spitfire",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Pointer source citing Robson (1982): per-version production table (45,753; 37,409; 65,320; 70,021; 95,829) and approximately 315,000 in text; Project Bomb and the Leyland dust-sheet story; Mk I 63 hp and 67 lb-ft UK spec, 16.4 s and 92 mph; Mk II 67 hp; Mk III 75 hp claimed; 1969 US federalized 8.5:1 and 68 hp; 45 percent of the first 100,000 to the US; swing spring; US 1500 from 1973, 7.5:1, 53 hp DIN, 9.1:1 for 1976; rubber bumpers 1979-80; 1980 at 1,875 lb and $7,365 US base price; last car Inca Yellow, August 1980."
  },
  {
   "ref": "moss-spitfire-mk4-1500",
   "title": "Triumph Spitfire: Mark IV & 1500",
   "url": "https://mossmotoring.com/triumph-spitfire-mark-iv-1500/",
   "publisher": "Moss Motoring (Moss Motors)",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "US parts specialist article dated July 2009: total production 314,342; Mk I 63 hp and 91 mph; US Mk IV under 50 hp; 1500 for the 1973 model year with about 10 lb-ft more torque, wider track and longer axles; single-rail gearbox 1975; rust areas including open-ended rear frame extensions on 1971-on cars; thrust washers; gearbox rebuild under $500; a decent car about $1,000 and DIY restoration under $5,000 (2009 figures); rubber bumpers unique to 1979-80; outsold Midget and Sprite except 1969; 1973 1500 a favored model."
  },
  {
   "ref": "tsgt6-models",
   "title": "Spitfire & GT6 Models and Options",
   "url": "https://triumphspitfire.com/reference-pages/spitfire-gt6-models-and-options/",
   "publisher": "Triumph Spitfire & GT6 Information Warehouse (North American Triumphs)",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "North American enthusiast reference: Mk I October 1962 as a 1963 model year; Mk IV November 1970 as a 1971 model year; FK prefix for US 1300s and FM for US 1500s, U, UC (California) and O suffixes; US 1973 and 1974 cars received the 1500 engine with Mk IV bodywork; 95,829 1500s including those US cars, 91,137 excluding them; commission numbers used until late 1979, then VIN format."
  },
  {
   "ref": "tsgt6-paint",
   "title": "Exterior Paint & Interior Trim (fabric) Codes",
   "url": "https://triumphspitfire.com/reference-pages/exterior-paint-interior-trim-fabric-codes/",
   "publisher": "Triumph Spitfire & GT6 Information Warehouse (North American Triumphs)",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Spitfire paint code tables: numeric codes changed to a three-letter system in March 1977; Pimento Red 72 / CAB, Carmine Red 82 / CAA (1973-80), Java Green 85 / HAB, Inca Yellow 94 / FAB (1977-80), Magenta 92 (1973-74), Topaz 84 / EAA."
  },
  {
   "ref": "tegler-triumph-colors",
   "title": "Triumph Spitfire Color codes",
   "url": "https://teglerizer.com/triumphcolors/index.html",
   "publisher": "Paul Tegler (teglerizer.com)",
   "sourceType": "club-forum",
   "reliability": "low",
   "notes": "Enthusiast photo reference of Triumph colors with factory numeric and letter codes and US paint-maker cross-references: 72 Pimento (CAB), 82 Carmine (CAA), 85/205 Java (HAB), 94 Inca (FAB), 92 Magenta, 84 Topaz (EAA). Used only to corroborate code pairings."
  },
  {
   "ref": "curbside-rt-1973-showroom-stock",
   "title": "Vintage R&T Track Test: Nine Showroom Stock Sports Cars - Swing Axles FTW!",
   "url": "https://www.curbsideclassic.com/vintage-reviews/1970s-vintage-reviews/european-brands-1970s-vintage-reviews/vintage-rt-track-test-nine-showroom-stock-sports-cars-swing-axles-ftw/",
   "publisher": "Curbside Classic",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Reprints Road & Track's April 1973 test of nine SCCA Showroom Stock sports cars including the Triumph Spitfire 1500, all on 165-section radial tires under a $4,000 class price ceiling; GT6 fastest lap, Spitfire judged most fun to drive; notes the cars used the swing-spring rear."
  },
  {
   "ref": "curbside-rt-1975-comparison",
   "title": "Road & Track 1975 Vintage Review: Sports Sedans vs Sports Cars",
   "url": "https://www.curbsideclassic.com/vintage-reviews/1970s-vintage-reviews/road-fiat-x1-9-vs-vw-dasher-jensen-healey-vs-bmw-2002tii/",
   "publisher": "Curbside Classic",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Reprints Road & Track's 1975 comparison that paired sports cars against sports sedans in three price classes, the Triumph Spitfire against the Chevrolet Vega; describes the US Spitfire of that year as a 57 hp car."
  },
  {
   "ref": "vtr-spitfire",
   "title": "Spitfire - Triumph Club - Vintage Triumph Register",
   "url": "https://vintagetriumphregister.org/spitfire/",
   "publisher": "Vintage Triumph Register",
   "sourceType": "registry",
   "reliability": "medium",
   "notes": "US club: over 314,000 built over 18 years; production ended August 1980, blamed on British Leyland management, US safety and emissions rules and the dollar/pound exchange rate; 1969 first US year of the federal dashboard; 1970 one-year RAF-roundel hood badge; Zenith-Stromberg CD150 stock on later North American cars; buyer's checklist including footwell and floor rust."
  },
  {
   "ref": "triumphexp-build-quantity",
   "title": "Spitfire build quantity : Spitfires List Archive",
   "url": "https://www.triumphexp.com/forum/spitfires-list-archive.16/spitfire-build-quantity.1009694/",
   "publisher": "The Triumph Experience (Spitfires mailing list archive)",
   "sourceType": "club-forum",
   "reliability": "low",
   "notes": "Archived list thread quoting a VTR e-zine giving 314,332 built; poster John Macartney, citing his work on build records at BMIHT Gaydon cross-checked against SMMT shipping data, gives US take as 139,719 or 44 percent, and notes CKD and SKD overseas assembly was never fully recorded. Forum figures, labeled as such."
  },
  {
   "ref": "hagerty-us-buyers-guide",
   "title": "Your Handy 1962-80 Triumph Spitfire Buyer's Guide",
   "url": "https://www.hagerty.com/media/market-trends/hagerty-insider/your-handy-1962-80-triumph-spitfire-buyers-guide/",
   "publisher": "Hagerty",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "US buyer's guide published 2025: 1963 model debut in fall 1962 at just under $2,200; swing-axle jacking; Mk III the most powerful US Spitfire at 75 hp with raised bumper for bumper-height laws and US dual-circuit brakes; swing spring on Mk IV; US 1500 from 1973 at 57 hp SAE net; production over 325,000; rust areas including the backbone chassis; thrust washers; trunnions; 1500 ring and crankshaft wear; interior refurb under $2,000, wood dash $240; price guide condition 2 $16,600-$17,400 and condition 3 $7,300-$8,200; colors including Java Green, Magenta, Inca Yellow and Topaz Orange."
  },
  {
   "ref": "classicmotorsports-buyers-guide",
   "title": "Triumph Spitfire: Buy one now?",
   "url": "https://classicmotorsports.com/articles/window-shopper-triumph-spitfire/",
   "publisher": "Classic Motorsports",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "US magazine buyer's guide from the March 2015 issue with Spitfire specialist Nigel Cosh of SpitBits: swing-axle tuck-under; Mk I 63 hp; dates the next big change to 1974 and black bumpers to 1979; thrust washers with 0.006 inch as ideal crank end float; reverse gear damage on 1975-80 single-rail gearboxes; floor pan rust around master cylinder openings; windshield frame rot on Mk IV and 1500 hard and expensive to repair; sagging doors and A-post rot; frame kinks ahead of the suspension towers."
  },
  {
   "ref": "classic-com-spitfire",
   "title": "Triumph Spitfire Market",
   "url": "https://www.classic.com/m/triumph/spitfire/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Read September 2026: average Triumph Spitfire price $10,120; lowest recorded $100 for a 1971 car on December 1, 2025; recent US results include a 1966 Mk II at $12,000 (New Hampshire, August 21, 2026), a 1979 car at $4,200 (Bend, Oregon, August 19, 2026) and a 1979 car not sold (Idaho, August 17, 2026); UK results are listed in pounds and not used."
  },
  {
   "ref": "rm-0321-1974-spitfire-1500",
   "title": "1974 Triumph Spitfire 1500 Mk IV, Open Roads, March",
   "url": "https://rmsothebys.com/auctions/0321/lots/r0081-1974-triumph-spitfire-1500-mk-iv/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Individual lot page, Open Roads March 2021, lot 259: chassis FM16659U0 on a US title in Marina del Rey, California; estimate $25,000-$30,000, not sold; 2010-2013 rotisserie restoration with five-speed and suspension upgrades; invoices show nearly $60,000 invested in restoration and upgrades."
  },
  {
   "ref": "rm-ca16-1970-spitfire",
   "title": "1970 Triumph Spitfire, Santa Monica 2016",
   "url": "https://rmsothebys.com/auctions/ca16/lots/r0195-1970-triumph-spitfire/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Individual lot page, Santa Monica 2016, lot 2047: 1970 Spitfire, yellow with black interior, estimate $8,000-$12,000, not sold."
  },
  {
   "ref": "hagerty-uk-buying-guide",
   "title": "Buying Guide: Triumph Spitfire (1962-1980)",
   "url": "https://www.hagerty.co.uk/articles/buying-guides/buying-guide-triumph-spitfire-1962-1981/",
   "publisher": "Hagerty UK",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "UK buying guide used for mechanical and structural facts only, never for values: pre-1970 cars can tuck under; sills carry strength in place of the Herald's outriggers; front trunnions can be weak and Canley Classics sells a replacement front end that eliminates them; specialist David Aspinall says chassis do not tend to rot but sills and floors do, and 1976-1978 steel was poorer; total 314,000."
  },
  {
   "ref": "classicmotorsports-bumpers",
   "title": "Spitfire Bumpers: Smaller is Better",
   "url": "https://classicmotorsports.com/project-cars/1980-triumph-1500-spitfire/spitfire-bumpers-smaller-better/",
   "publisher": "Classic Motorsports",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Project-car article on a 1980 Spitfire: late 1979 and 1980 cars got large bumpers for the five-mile-per-hour federal crash rules; early chrome bumpers weigh roughly 80 lb less; 1971-1980 bumpers interchange with modification; early plastic bumper covers bought for a couple hundred dollars."
  }
 ],
 "claims": [
  {
   "section": "summary",
   "claimText": "The Spitfire was built on a shortened Triumph Herald backbone frame with Herald running gear and a body styled by Giovanni Michelotti, with front disc brakes added.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-spitfire",
    "hagerty-us-buyers-guide",
    "moss-spitfire-mk4-1500"
   ],
   "evidence": [
    {
     "ref": "wikipedia-spitfire",
     "quote": "Developed on a shortened variant of the Triumph Herald saloon's chassis, the Spitfire shared the Herald's running gear and Standard SC engine"
    },
    {
     "ref": "hagerty-us-buyers-guide",
     "quote": "Frequent Triumph collaborator Giovanni Michelotti designed a low-slung, curvy body and Triumph engineers managed to give it front disc brakes"
    },
    {
     "ref": "moss-spitfire-mk4-1500",
     "quote": "The Spitfire is based on a shortened Triumph Herald frame and running gear."
    }
   ]
  },
  {
   "section": "history",
   "claimText": "The project began at Standard-Triumph in 1957 under the name Bomb, and after the Leyland takeover the prototype was found under a dust sheet and approved.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-spitfire",
    "moss-spitfire-mk4-1500"
   ],
   "evidence": [
    {
     "ref": "wikipedia-spitfire",
     "quote": "Leyland officials found Michelotti's prototype under a dust sheet in a factory corner, and quickly approved"
    },
    {
     "ref": "moss-spitfire-mk4-1500",
     "quote": "The Spitfire was first on the drawing boards at Standard Triumph back in 1957. It was known as The Bomb."
    }
   ]
  },
  {
   "section": "history",
   "claimText": "The Spitfire went into production in October 1962 and was sold in the US as a 1963 model.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "tsgt6-models",
    "hagerty-us-buyers-guide"
   ],
   "evidence": [
    {
     "ref": "tsgt6-models",
     "quote": "Spitfire 4 (Mk1) Oct. 1962 (1963 model year)-Dec. 64 (1965 model year)"
    },
    {
     "ref": "hagerty-us-buyers-guide",
     "quote": "it missed the anniversary of the battle by two years (debuting in the fall of 1962 as a 1963 model)"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The Mk I used a 1,147 cc overhead-valve four with twin SU carburetors rated at 63 hp.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-spitfire",
    "moss-spitfire-mk4-1500",
    "classicmotorsports-buyers-guide"
   ],
   "evidence": [
    {
     "ref": "wikipedia-spitfire",
     "quote": "The engine was an 1,147 cc (70.0 cu in) four-cylinder with a pushrod OHV cylinder head and two valves per cylinder, using twin SU carburettors"
    },
    {
     "ref": "moss-spitfire-mk4-1500",
     "quote": "Its 1147cc engine featured 63 horsepower and the car had a top speed of 91 mph."
    },
    {
     "ref": "classicmotorsports-buyers-guide",
     "quote": "The original Spitfire received a 1147cc engine that produced 63 horsepower, and for 1967 displacement increased"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "Mk I performance figures vary by source: Hagerty gives about 15 seconds to 60 mph and about 90 mph, Moss Motors 91 mph, and Wikipedia 16.4 seconds and 92 mph for a UK-specification car.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "hagerty-us-buyers-guide",
    "moss-spitfire-mk4-1500",
    "wikipedia-spitfire"
   ],
   "evidence": [
    {
     "ref": "hagerty-us-buyers-guide",
     "quote": "if you were patient, you could do it in about 15 seconds and the Spit's top speed, if you were even more patient, was about 90 mph"
    },
    {
     "ref": "moss-spitfire-mk4-1500",
     "quote": "Its 1147cc engine featured 63 horsepower and the car had a top speed of 91 mph."
    },
    {
     "ref": "wikipedia-spitfire",
     "quote": "This gave a top speed of 92 mph (148 km/h) , and a 0 to 60 mph (97 km/h) acceleration in 16.4 seconds."
    }
   ]
  },
  {
   "section": "production",
   "claimText": "The Mk I sold new in the US for just under $2,200; Hagerty is the only source consulted that gives a US price for it.",
   "confidence": "medium",
   "status": "unverified",
   "sourceRefs": [
    "hagerty-us-buyers-guide"
   ],
   "evidence": [
    {
     "ref": "hagerty-us-buyers-guide",
     "quote": "At just under $2200, it cost about the same as a very basic American sedan"
    }
   ]
  },
  {
   "section": "production",
   "claimText": "The 1980 model year Spitfire had a US base price of $7,365, a figure found only in Wikipedia, which cites Robson's 1982 book.",
   "confidence": "low",
   "status": "unverified",
   "sourceRefs": [
    "wikipedia-spitfire"
   ],
   "evidence": [
    {
     "ref": "wikipedia-spitfire",
     "quote": "Base prices for the 1980 model year were $7,365 in the US"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The swing-axle rear, with a universal joint only at the differential, could jack into extreme positive camber and let the inside tire tuck under in hard cornering.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "hagerty-us-buyers-guide",
    "classicmotorsports-buyers-guide",
    "wikipedia-spitfire",
    "hagerty-uk-buying-guide"
   ],
   "evidence": [
    {
     "ref": "hagerty-us-buyers-guide",
     "quote": "Since there was a universal joint only at the differential, going into a corner too hot could result in sudden extreme positive camber called"
    },
    {
     "ref": "classicmotorsports-buyers-guide",
     "quote": "The early cars were dinged because their swing axle rear suspension could allow the inside tire to tuck underneath."
    },
    {
     "ref": "wikipedia-spitfire",
     "quote": "can allow rear tyres to undergo large camber changes during fast cornering, leading to oversteer"
    },
    {
     "ref": "hagerty-uk-buying-guide",
     "quote": "under harsh braking or cornering the inner wheel can tuck under and lead to less predictable handling"
    }
   ]
  },
  {
   "section": "history",
   "claimText": "The Mk II brought a few more horsepower, 67 hp by Wikipedia's figure, and carpet in place of rubber mats; the Mk III took a 1,296 cc engine claimed at 75 hp, which Hagerty calls the most powerful Spitfire sold in the US.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "hagerty-us-buyers-guide",
    "wikipedia-spitfire"
   ],
   "evidence": [
    {
     "ref": "hagerty-us-buyers-guide",
     "quote": "On the plus side, the MK III was the most powerful Spit sold in the U.S., with a 1296 cc 75 hp engine"
    },
    {
     "ref": "wikipedia-spitfire",
     "quote": "In SU twin-carburettor form, the engine put out a claimed 75 bhp (56 kW) at 6,000 rpm"
    }
   ]
  },
  {
   "section": "history",
   "claimText": "The Mk III's front bumper was raised to meet bumper-height rules, and US cars gained a dual-circuit brake system from the 1968 model year.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "hagerty-us-buyers-guide",
    "wikipedia-spitfire"
   ],
   "evidence": [
    {
     "ref": "hagerty-us-buyers-guide",
     "quote": "Mandatory bumper height laws meant that the new MK III, which started hitting U.S. roads in 1967, had an awkward and crudely raised front bumper"
    },
    {
     "ref": "wikipedia-spitfire",
     "quote": "The 1968 model featured dual system (also known as tandem) brakes with a brake failure warning device."
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "From 1969 US Spitfires were federalized, with compression lowered to 8.5:1, output quoted at 68 hp, and the instruments moved in front of the driver.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-spitfire",
    "vtr-spitfire"
   ],
   "evidence": [
    {
     "ref": "wikipedia-spitfire",
     "quote": "A reduced compression ratio of 8.5:1 resulted in a slight decrease in power (68 bhp) and 73 ft-lbs of torque."
    },
    {
     "ref": "vtr-spitfire",
     "quote": "1969 was the first year of the Federal (speedo and tach in front of driver as in Mk.IV Spitfires) dashboard in the U.S."
    }
   ]
  },
  {
   "section": "history",
   "claimText": "Some 1970 US-market cars carried a one-year Spitfire hood badge over an RAF roundel.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-spitfire",
    "vtr-spitfire"
   ],
   "evidence": [
    {
     "ref": "wikipedia-spitfire",
     "quote": "A limited number of U.S. market 1970s were adorned with an RAF style Spitfire badge"
    },
    {
     "ref": "vtr-spitfire",
     "quote": "bonnet will have a badge with the word SPITFIRE over the RAF bullseye emblem (a one-year badge)"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The Mk IV, introduced in November 1970 as a 1971 model, clamped only one leaf of the rear spring to the differential so the rest could pivot, the swing spring that moderated the camber change.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "tsgt6-models",
    "hagerty-us-buyers-guide",
    "wikipedia-spitfire",
    "curbside-rt-1973-showroom-stock"
   ],
   "evidence": [
    {
     "ref": "tsgt6-models",
     "quote": "Spitfire Mk4 world: Nov. 1970 (1971 model year)-Nov. 1974"
    },
    {
     "ref": "hagerty-us-buyers-guide",
     "quote": "Instead of rigidly mounting the entire spring to the differential, only one leaf was attached to the diff, allowing the spring itself to swing a bit"
    },
    {
     "ref": "wikipedia-spitfire",
     "quote": "was eliminated and only the bottom leaf was attached rigidly to the differential. The remaining leaves were mounted to pivot freely"
    },
    {
     "ref": "curbside-rt-1973-showroom-stock",
     "quote": "version of the Herald/Spitfire rear suspension, which was an intermediate step between the original version and the further modified version"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The North American Mk IV used a single Zenith-Stromberg carburetor and 8.5:1 compression, and Moss Motors says emissions controls left it under 50 hp.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-spitfire",
    "moss-spitfire-mk4-1500"
   ],
   "evidence": [
    {
     "ref": "wikipedia-spitfire",
     "quote": "The less powerful North American version continued to use a single Zenith Stromberg carburettor and an 8.5:1 compression ratio"
    },
    {
     "ref": "moss-spitfire-mk4-1500",
     "quote": "unfortunately it was choked by emission controls and produced less than 50 horsepower at that point."
    }
   ]
  },
  {
   "section": "history",
   "claimText": "The 1,493 cc engine reached US Spitfires before the rest of the world, but one source dates its US arrival a year later than the others.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "moss-spitfire-mk4-1500",
    "tsgt6-models",
    "hagerty-us-buyers-guide",
    "wikipedia-spitfire",
    "curbside-rt-1973-showroom-stock",
    "classicmotorsports-buyers-guide"
   ],
   "conflictNote": "Moss Motors, the Triumph Spitfire and GT6 Information Warehouse, Hagerty and Wikipedia date the US Spitfire 1500 to the 1973 model year, and Road & Track tested a Spitfire 1500 in its April 1973 issue as reprinted by Curbside Classic. Classic Motorsports states that the change came for 1974. The dated test supports 1973, but no source consulted explains the Classic Motorsports date, so the discrepancy is recorded rather than resolved.",
   "evidence": [
    {
     "ref": "moss-spitfire-mk4-1500",
     "quote": "A big change occurred for the 1973 model year, as Triumph released the Spitfire 1500 model."
    },
    {
     "ref": "tsgt6-models",
     "quote": "US 1973 & 74 cars (FM commission numbers) received the 1500cc engine"
    },
    {
     "ref": "hagerty-us-buyers-guide",
     "quote": "restrict how much fuel is going through it, and hope for the best, which is what happened in 1973."
    },
    {
     "ref": "wikipedia-spitfire",
     "quote": "In 1973 in the United States and Canada, and 1975 in the rest of the world, the 1500 engine was used on the MK IV body"
    },
    {
     "ref": "curbside-rt-1973-showroom-stock",
     "quote": "MG Midget, MGB, VW Karmann-Ghia, Triumph Spitfire 1500, Triumph GT6, Fiat 124 Spider and the MGB GT"
    },
    {
     "ref": "classicmotorsports-buyers-guide",
     "quote": "The next big change came for 1974. By now Triumph and MG were kissing cousins"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "Published output for the US Spitfire 1500 differs: 57 hp in Hagerty and in Curbside Classic's account of the 1975 Road & Track test, 53 hp DIN in Wikipedia.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "hagerty-us-buyers-guide",
    "curbside-rt-1975-comparison",
    "wikipedia-spitfire"
   ],
   "conflictNote": "Hagerty gives 57 hp as the official SAE net figure and Curbside Classic calls the 1975 test car a 57 hp Spitfire. Wikipedia gives 53 hp DIN for the US engine with catalytic converter and exhaust gas recirculation. The figures use different rating conventions and no source consulted ties either to specific model years, so the difference is not resolved here.",
   "evidence": [
    {
     "ref": "hagerty-us-buyers-guide",
     "quote": "Power was listed officially as 57-hp but this is somewhat misleading as the U.S. had made the switch from SAE gross, to SAE net horsepower"
    },
    {
     "ref": "curbside-rt-1975-comparison",
     "quote": "Not that it would take much to walk away from a 57 hp Triumph Spitfire."
    },
    {
     "ref": "wikipedia-spitfire",
     "quote": "With the addition of a catalytic converter and exhaust gas recirculating system , the engine only delivered 53 bhp (40 kW) (DIN)"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The US Spitfire 1500 ran a single Zenith-Stromberg carburetor with compression reduced to 7.5:1 for unleaded fuel, while the Mk IV and 1500 used Zenith-Stromberg CD150 carburetors as stock in North America.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-spitfire",
    "moss-spitfire-mk4-1500",
    "vtr-spitfire"
   ],
   "evidence": [
    {
     "ref": "wikipedia-spitfire",
     "quote": "the American market model was fitted with a single Zenith-Stromberg carburettor and a compression ratio reduced to 7.5:1 to allow it to run on lower octane unleaded fuel"
    },
    {
     "ref": "moss-spitfire-mk4-1500",
     "quote": "Next, for more power you'll want to swap out the stock single Stromberg carburetor."
    },
    {
     "ref": "vtr-spitfire",
     "quote": "The Zenith Stromberg CD150 series fitted as stock to later North American market Spitfires."
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 1500 gained longer swing axles, a lowered spring mounting point and a wider rear track, and Moss Motors says its larger engine added about 10 lb-ft of torque over the 1,296 cc unit.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "moss-spitfire-mk4-1500",
    "wikipedia-spitfire"
   ],
   "evidence": [
    {
     "ref": "moss-spitfire-mk4-1500",
     "quote": "the increased torque-an extra 10 lb.-ft-gave the Spitfire acceleration again. Suspension was also enhanced with a stiffer front anti-roll bar and a wider track that featured longer axles."
    },
    {
     "ref": "wikipedia-spitfire",
     "quote": "Further improvements to the suspension followed with the 1500 included longer swing axles and a lowered spring mounting point for more negative camber and a wider rear track."
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "A better-shifting single-rail gearbox arrived in 1975, and on 1975-80 cars its reverse gear teeth are commonly damaged by careless engagement.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "moss-spitfire-mk4-1500",
    "classicmotorsports-buyers-guide"
   ],
   "evidence": [
    {
     "ref": "moss-spitfire-mk4-1500",
     "quote": "In 1975 the Spitfire got a better-shifting single-rail transmission"
    },
    {
     "ref": "classicmotorsports-buyers-guide",
     "quote": "Reverse gear teeth get damaged on the single-rail gearboxes (1975-"
    }
   ]
  },
  {
   "section": "history",
   "claimText": "US Spitfires used chrome bumpers through 1978 and one-piece black rubber bumpers for 1979 and 1980, built to the five-mile-per-hour federal crash standard.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "moss-spitfire-mk4-1500",
    "wikipedia-spitfire",
    "hagerty-us-buyers-guide",
    "classicmotorsports-bumpers"
   ],
   "evidence": [
    {
     "ref": "moss-spitfire-mk4-1500",
     "quote": "The black rubber bumpers are unique to the 1979 and '80 models."
    },
    {
     "ref": "wikipedia-spitfire",
     "quote": "US specification models up to 1978 featured chrome bumpers, and on the 1979 and 1980 models these were replaced by black rubber bumpers"
    },
    {
     "ref": "hagerty-us-buyers-guide",
     "quote": "For the last two years, the chrome part of the bumper went away in favor of the rather unlovely one-piece black rubber units front and rear"
    },
    {
     "ref": "classicmotorsports-bumpers",
     "quote": "Late 1979.5 and 1980 model Spitfires came with some tremendously big, ugly bumpers to meet ever tightening, five mile per hour federal crash"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 1980 Spitfire was the heaviest at 1,875 lb, and Classic Motorsports found the earlier chrome bumpers weigh roughly 80 lb less than the 1979-80 rubber units.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-spitfire",
    "classicmotorsports-bumpers"
   ],
   "evidence": [
    {
     "ref": "wikipedia-spitfire",
     "quote": "The 1980 model was the last and the heaviest Spitfire, weighing 1,875 lb"
    },
    {
     "ref": "classicmotorsports-bumpers",
     "quote": "What you can't see, is how much lighter the early bumpers are. The pair of chrome bumpers weigh roughly 80 pounds less"
    }
   ]
  },
  {
   "section": "production",
   "claimText": "Commission number prefixes identify US cars, FK for US 1300s and FM for US 1500s with U, UC and O suffixes, and commission numbers gave way to VIN-format numbers late in 1979.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "tsgt6-models",
    "rm-0321-1974-spitfire-1500"
   ],
   "evidence": [
    {
     "ref": "tsgt6-models",
     "quote": "FK prefix for US 1300's, FM for US 1500's, FL for Sweden, a few US bound 1974 1500's were built in Seniffe Belgium"
    },
    {
     "ref": "rm-0321-1974-spitfire-1500",
     "quote": "Chassis No. FM16659U0 Registration US Title Location | Marina Del Rey, California"
    }
   ]
  },
  {
   "section": "production",
   "claimText": "Published Spitfire production totals do not agree: 314,342, 314,332, over 314,000, approximately 315,000 and over 325,000 all appear, so no single figure is asserted.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "moss-spitfire-mk4-1500",
    "triumphexp-build-quantity",
    "hagerty-us-buyers-guide",
    "vtr-spitfire",
    "hagerty-uk-buying-guide",
    "wikipedia-spitfire"
   ],
   "conflictNote": "Moss Motors gives 314,342. A Vintage Triumph Register e-zine quoted on the Spitfires mailing list gives 314,332, the figure a list member working from BMIHT Gaydon build records also uses, and Wikipedia's per-version table sums to the same 314,332 while its text says approximately 315,000. The Vintage Triumph Register's own page says over 314,000 and Hagerty UK says 314,000. Hagerty's US buyer's guide says over 325,000. No source consulted explains the ten-car difference or supports the higher Hagerty figure, so the total is unresolved and productionTotal is null.",
   "evidence": [
    {
     "ref": "moss-spitfire-mk4-1500",
     "quote": "When the last Spitfire rolled off the assembly line in August 1980, it capped total production at 314,342 cars."
    },
    {
     "ref": "triumphexp-build-quantity",
     "quote": "made it the longest running Triumph production (1962-1980) and the largest production numbers (314,332) of any Triumph produced"
    },
    {
     "ref": "hagerty-us-buyers-guide",
     "quote": "the Mark IV refresh was the last major overhaul for the car which ended production in 1980 after over 325,000 copies were built"
    },
    {
     "ref": "vtr-spitfire",
     "quote": "Triumph produced the fun and affordable Spitfire for 18 years, during which time over 314,000 were built."
    },
    {
     "ref": "hagerty-uk-buying-guide",
     "quote": "By the end of production in 1980, 314000 Spitfires had been produced."
    },
    {
     "ref": "wikipedia-spitfire",
     "quote": "It was manufactured at the Standard-Triumph Canley works, with approximately 315,000 produced over 18 years."
    }
   ]
  },
  {
   "section": "production",
   "claimText": "Wikipedia, citing Robson, gives 95,829 Spitfire 1500s, and the Triumph Spitfire and GT6 Information Warehouse says that figure includes the 1973 and 1974 US cars, with 91,137 built excluding them.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-spitfire",
    "tsgt6-models"
   ],
   "evidence": [
    {
     "ref": "wikipedia-spitfire",
     "quote": "Triumph Spitfire 1500 1493 cc inline-four Dec 1974 - Aug 1980 95,829"
    },
    {
     "ref": "tsgt6-models",
     "quote": "95829 cars made (91137 excluding 73 & 74 models)"
    }
   ]
  },
  {
   "section": "production",
   "claimText": "The US was the Spitfire's largest market: 45 percent of the first 100,000 cars went there, and a list post based on Gaydon build records puts total US deliveries at 139,719, about 44 percent.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-spitfire",
    "triumphexp-build-quantity"
   ],
   "evidence": [
    {
     "ref": "wikipedia-spitfire",
     "quote": "More than 75% of this number had been exported outside the UK, including 45% to the US and 25% to mainland European markets."
    },
    {
     "ref": "triumphexp-build-quantity",
     "quote": "314,332 units.of which US take was 139719 units - or 44%"
    }
   ]
  },
  {
   "section": "history",
   "claimText": "Production ended at Canley in August 1980, which the Vintage Triumph Register attributes to British Leyland management, US safety and emissions rules and the exchange rate; the last car, Inca Yellow with hardtop and overdrive, was never sold.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "vtr-spitfire",
    "wikipedia-spitfire"
   ],
   "evidence": [
    {
     "ref": "vtr-spitfire",
     "quote": "Spitfire production ended in August 1980 as the car fell victim to short-sighted management at British Leyland, U.S. safety and emissions regulations"
    },
    {
     "ref": "wikipedia-spitfire",
     "quote": "Assembled at Canley in August 1980 shortly before the factory closed, the last Spitfire was an Inca Yellow UK-model including the factory hardtop and overdrive options."
    }
   ]
  },
  {
   "section": "history",
   "claimText": "The Spitfire won SCCA national championships in F and G Production, and Moss Motors says it outsold the Midget and Sprite every year except 1969, when a strike cut Triumph's production.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "moss-spitfire-mk4-1500",
    "wikipedia-spitfire"
   ],
   "evidence": [
    {
     "ref": "moss-spitfire-mk4-1500",
     "quote": "scoring numerous SCCA Runoff wins in the F Production and G Production classes, as well as eight Solo II autocross national championships."
    },
    {
     "ref": "wikipedia-spitfire",
     "quote": "Spitfires won numerous SCCA National Sports Car Championships in F and G Production classes"
    }
   ]
  },
  {
   "section": "history",
   "claimText": "In Road & Track's April 1973 test of nine SCCA showroom-stock sports cars on 165-section radials, the GT6 set the fastest lap and the Spitfire was judged the most fun to drive; R&T's 1975 comparison paired the Spitfire against the Chevrolet Vega.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "curbside-rt-1973-showroom-stock",
    "curbside-rt-1975-comparison"
   ],
   "evidence": [
    {
     "ref": "curbside-rt-1973-showroom-stock",
     "quote": "with the Triumph GT6 coming in first with the lowest lap time and the weaker Spitfire deemed to be the most fun to drive"
    },
    {
     "ref": "curbside-rt-1975-comparison",
     "quote": "R&T decided to pit sporty sedans with sports cars in three price classes."
    }
   ]
  },
  {
   "section": "problems",
   "claimText": "Rust can appear almost anywhere: sills, fender arches, trunk and main floors, the cowl, the windshield frame, footwells and the open-ended rear frame extensions on 1971 and later cars, with windshield frame rot on Mk IV and 1500 cars expensive to repair.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "hagerty-us-buyers-guide",
    "moss-spitfire-mk4-1500",
    "classicmotorsports-buyers-guide",
    "vtr-spitfire"
   ],
   "evidence": [
    {
     "ref": "hagerty-us-buyers-guide",
     "quote": "Sills, fender arches, trunk floors, main floors, even cowls and windshield frames and of course, the backbone chassis itself are all potential trouble spots."
    },
    {
     "ref": "moss-spitfire-mk4-1500",
     "quote": "the frame extensions to the rear bumper that were added for strength are open ended, so water can drip in and cause rust."
    },
    {
     "ref": "classicmotorsports-buyers-guide",
     "quote": "Rust in the bottom of the windshield frame on the Mk4 and 1500 cars can be very hard and expensive to repair."
    },
    {
     "ref": "vtr-spitfire",
     "quote": "Under the carpets at the front of footwells, underneath the driver's pedals, and along the seat rails."
    }
   ]
  },
  {
   "section": "problems",
   "claimText": "The sills are structural, standing in for the chassis outriggers that the Herald had and the Spitfire lost.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-spitfire",
    "hagerty-uk-buying-guide"
   ],
   "evidence": [
    {
     "ref": "wikipedia-spitfire",
     "quote": "the outer rails and the rear outriggers having been removed; with structural outer sills to stiffen the overall design."
    },
    {
     "ref": "hagerty-uk-buying-guide",
     "quote": "The exception is the sills - strength was built into them to offset the lack of the Herald's chassis outriggers"
    }
   ]
  },
  {
   "section": "problems",
   "claimText": "Sources differ on whether the backbone frame itself is prone to rot.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "hagerty-us-buyers-guide",
    "hagerty-uk-buying-guide"
   ],
   "conflictNote": "Hagerty's US buyer's guide lists the backbone chassis among the Spitfire's potential rust areas. Specialist David Aspinall, quoted in Hagerty UK's buying guide, says the chassis does not tend to rot while sills and floors do. Neither source gives data on frame failure rates, so the disagreement is not resolved by any source consulted here.",
   "evidence": [
    {
     "ref": "hagerty-us-buyers-guide",
     "quote": "even cowls and windshield frames and of course, the backbone chassis itself are all potential trouble spots."
    },
    {
     "ref": "hagerty-uk-buying-guide",
     "quote": "Chassis don't tend to rot, but sills can, floors and boot floors can. Screen frames can be structural and need to be checked."
    }
   ]
  },
  {
   "section": "problems",
   "claimText": "Crankshaft thrust washer wear is the engines' known weakness, checked by pulling the crank pulley fore and aft, with 0.006 inch given as ideal end float.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "moss-spitfire-mk4-1500",
    "hagerty-us-buyers-guide",
    "classicmotorsports-buyers-guide"
   ],
   "evidence": [
    {
     "ref": "moss-spitfire-mk4-1500",
     "quote": "The engines are rugged, but be sure to check the thrust washers that hold the crank in position as they are prone to wear."
    },
    {
     "ref": "hagerty-us-buyers-guide",
     "quote": "The 1296s suffer from the same thrust washer issues as a TR6 . If you grab the pulley, and there's any in/out play at all"
    },
    {
     "ref": "classicmotorsports-buyers-guide",
     "quote": "Thrust washers are a common problem. Pull back and forth on the crank pulley to identify excess movement"
    }
   ]
  },
  {
   "section": "problems",
   "claimText": "The front suspension trunnions wear quickly without regular lubrication, and a UK specialist sells a replacement front end that eliminates them.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "hagerty-us-buyers-guide",
    "hagerty-uk-buying-guide"
   ],
   "evidence": [
    {
     "ref": "hagerty-us-buyers-guide",
     "quote": "front suspension trunnions would wear out quickly without regular shots of grease"
    },
    {
     "ref": "hagerty-uk-buying-guide",
     "quote": "Front trunnions can be weak, but specialist Canley Classics , in Fillongley Warwickshire, sells a replacement front end setup which does away with them altogether."
    }
   ]
  },
  {
   "section": "problems",
   "claimText": "The 1,493 cc engine is the least durable of the Spitfire engines, with ring and crankshaft wear not uncommon, though its gearbox has the better reputation.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-spitfire",
    "hagerty-us-buyers-guide"
   ],
   "evidence": [
    {
     "ref": "wikipedia-spitfire",
     "quote": "Although in this final incarnation the engine was rather rough and more prone to failure than the earlier units"
    },
    {
     "ref": "hagerty-us-buyers-guide",
     "quote": "The Austin-Marina gearboxes on 1500 cars have a better reputation for durability, the engines less so with ring and crankshaft wear not uncommon."
    }
   ]
  },
  {
   "section": "problems",
   "claimText": "Documented US costs run from under $500 for a gearbox rebuild and under $5,000 for a do-it-yourself restoration in 2009, to under $2,000 for a full interior in 2025, to nearly $60,000 invested in one professionally restored and upgraded 1974 car.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "moss-spitfire-mk4-1500",
    "hagerty-us-buyers-guide",
    "rm-0321-1974-spitfire-1500"
   ],
   "evidence": [
    {
     "ref": "moss-spitfire-mk4-1500",
     "quote": "You can pick up a decent Spitfire for about $1000 and fully restore it for less than $5000 if you do the work yourself."
    },
    {
     "ref": "hagerty-us-buyers-guide",
     "quote": "you could do a complete refurb in a weekend, including seat covers, door cards, side panels and carpet for less than $2000"
    },
    {
     "ref": "rm-0321-1974-spitfire-1500",
     "quote": "Invoices on file illustrate nearly $60,000 USD invested in the restoration and upgrade process"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "Spitfire paint codes changed from numbers to a three-letter system in March 1977, with Pimento Red coded 72 or CAB and Carmine Red 82 or CAA.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "tsgt6-paint",
    "tegler-triumph-colors",
    "hagerty-us-buyers-guide"
   ],
   "evidence": [
    {
     "ref": "tsgt6-paint",
     "quote": "In March of 1977 paint codes were changed from numbers to a 3 letter system."
    },
    {
     "ref": "tegler-triumph-colors",
     "quote": "72 - Pimento (CAB) PPG 71996 ICI 2859 Biege or Black previously owned by Paul Tegler 82 - Carmine (CAA)"
    },
    {
     "ref": "hagerty-us-buyers-guide",
     "quote": "Spitfires were available in a great assortment of '70s period colors like Java Green, Magenta, Inca Yellow and Topaz Orange."
    }
   ]
  },
  {
   "section": "market",
   "claimText": "As of September 2026 classic.com gives an average Triumph Spitfire price of $10,120, with recent US results of $12,000 for a 1966 Mk II and $4,200 for a 1979 car in August 2026.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-com-spitfire"
   ],
   "evidence": [
    {
     "ref": "classic-com-spitfire",
     "quote": "The average price of a Triumph Spitfire is $10,120."
    }
   ]
  },
  {
   "section": "market",
   "claimText": "Hagerty's 2025 buyer's guide placed condition 2 Spitfires at $16,600 to $17,400 and condition 3 at $7,300 to $8,200, with all versions within a thousand or two dollars of each other, and Moss Motors named the 1973 1500 a favored model.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "hagerty-us-buyers-guide",
    "moss-spitfire-mk4-1500"
   ],
   "evidence": [
    {
     "ref": "hagerty-us-buyers-guide",
     "quote": "values in the Hagerty Price Guide range from $16,600 to $17,400, and condition #3 (good) values range from $7300 to $8200."
    },
    {
     "ref": "moss-spitfire-mk4-1500",
     "quote": "A favored model is the 1973 1500. It has the revised suspension plus the smallest bumper guards."
    }
   ]
  },
  {
   "section": "market",
   "claimText": "Two RM Sotheby's Spitfire lots went unsold: a restored and modified 1974 Spitfire 1500 estimated at $25,000-$30,000 in March 2021 and a 1970 car estimated at $8,000-$12,000 at Santa Monica in 2016.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "rm-0321-1974-spitfire-1500",
    "rm-ca16-1970-spitfire"
   ],
   "evidence": [
    {
     "ref": "rm-0321-1974-spitfire-1500",
     "quote": "$25,000 - $30,000 USD | Not Sold Open Roads, March , Lot 259"
    },
    {
     "ref": "rm-ca16-1970-spitfire",
     "quote": "$8,000 - $12,000 USD | Not Sold Santa Monica 2016 , Lot 2047"
    }
   ]
  }
 ]
};
