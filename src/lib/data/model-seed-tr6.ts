/**
 * Researched model draft — Triumph TR6 (1968-1976).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedTr6 = {
 "slug": "triumph/tr6",
 "make": "Triumph",
 "model": "TR6",
 "generation": "TR6",
 "generationCode": null,
 "trim": null,
 "yearStart": 1968,
 "yearEnd": 1976,
 "bodyStyles": [
  "2-door open two-seat roadster with folding soft top",
  "2-door open two-seat roadster with optional detachable one-piece steel hardtop"
 ],
 "engines": [
  "2,498 cc overhead-valve straight-six with Lucas mechanical petrol injection, commission prefix CP (1968-1972), rated 150 bhp at 5,500 rpm and 164 lb-ft",
  "2,498 cc overhead-valve straight-six with Lucas mechanical petrol injection and a shorter-duration camshaft, commission prefix CR (1973-1975), rated 125 bhp at 5,500 rpm",
  "2,498 cc overhead-valve straight-six with twin Zenith-Stromberg carburettors, commission prefix CC (1968-1972), rated 104 bhp with 143 lb-ft at 3,500 rpm",
  "2,498 cc overhead-valve straight-six with twin Zenith-Stromberg carburettors and progressive emissions equipment, commission prefix CF (1973-1976), rated 106 bhp at 4,900 rpm and 133 lb-ft at 3,000 rpm in 1972-onward US tune",
  "2,498 cc overhead-valve straight-six with a single carburettor for California-market cars, materially down on the twin-carburettor federal specification"
 ],
 "productionTotal": null,
 "productionNotes": "No single production figure survives cross-checking. Wikipedia, the Vintage Triumph Register and Hagerty UK all give a total in the 91,849-91,850 band, and Hagerty UK breaks that down as 78,147 carburetted cars and 13,702 injected cars, the latter including some 3,600 CKD kits assembled in Belgium. Ate Up With Motor, Auto Express and Classic Car Hub instead give 94,619. The arithmetic inside the sources is itself inconsistent: Wikipedia states 83,480 exported against 8,370 UK sales, which sums to 91,850, while the Vintage Triumph Register states 86,249 exported against the same 8,370 UK figure, which sums to 94,619. The 8,370 home-market number is the one thing every source agrees on, and it is the number that matters most, because it means roughly nine cars in ten left Britain. Hagerty's US profile puts United States deliveries alone at 76,470 and Auto Express at approximately 77,000. No source consulted here explains the 2,769-car gap between the two totals, so no figure is asserted. Production began on 19 September 1968 for the 1969 model year. The injected cars ended in July 1975; federal carburetted production continued until 14 July 1976. Commission prefixes divide the run cleanly: CP for injected and CC for carburetted cars to 1972, CR and CF respectively from 1973, with suffix letters L for left-hand drive, U for United States specification and O for overdrive. Rimmer Bros publishes prefix ranges running CP25156-CP77718 and CR169 onward for injected cars, and CC25003L-CC85737U and CF1U-CF58328U for carburetted cars; Moss Motors publishes a comparable year-by-year chart and notes that the commission number stays with the bodyshell for life while engines and gearboxes migrate.",
 "notableTrims": [
  {
   "name": "TR6 PI (CP series, 1968-1972)",
   "note": "The original Lucas mechanical petrol injection car for Britain and Europe, rated 150 bhp at 5,500 rpm. The most sought-after specification, and the one most often faked by fitting PI badges to a carburetted shell."
  },
  {
   "name": "TR6 (CC series, 1968-1972)",
   "note": "Twin Zenith-Stromberg carburettors for North America, 104 bhp. Road & Track measured 10.7 seconds to 60 mph and 109 mph in 1969 against the injected car's 8.2-8.5 seconds. The version most buyers actually encounter."
  },
  {
   "name": "TR6 PI (CR series, 1973-1975)",
   "note": "Shorter-duration camshaft, revised injection metering and a re-rating to 125 bhp. Smoother in traffic, quieter at idle, and cheaper to buy than a CP car for reasons that are partly real and partly a change of measurement convention."
  },
  {
   "name": "TR6 (CF series, 1973-1976)",
   "note": "The final federal cars, with front air dam, revised instruments, headrests and from 1975 large rubber overrider blocks. Overdrive became standard fitment for 1974. The last TR6 of all was a CF car built on 14 July 1976."
  },
  {
   "name": "California-specification cars",
   "note": "Cars bound for California ran a single carburettor rather than the twin Strombergs used elsewhere in North America, with a further loss of power. A California car is not a federal car and should not be valued as one."
  },
  {
   "name": "CKD cars assembled in Belgium",
   "note": "Roughly 3,600 of the injected cars were shipped as knocked-down kits and assembled in Belgium. They are part of why the published production totals do not reconcile."
  },
  {
   "name": "Factory hardtop cars",
   "note": "The detachable one-piece steel top with rear screen and B-post windows in a single section replaced the TR4-to-TR250 Surrey arrangement. Original tops are increasingly scarce, awkward to store and add real money to a car."
  },
  {
   "name": "Overdrive cars (A-type, then J-type)",
   "note": "Laycock de Normanville A-type gave about 22 per cent on second, third and top; the later J-type gave about 28 per cent on third and top only. Either transforms the car at speed, and a non-overdrive car is worth less."
  }
 ],
 "specs": {
  "layout": "Front-mounted longitudinal straight-six, rear-wheel drive",
  "chassis": "Separate steel ladder frame with cruciform bracing, spot-welded from sheet pressings, carrying a bolted steel body",
  "engine": "2,498 cc overhead-valve straight-six, cast-iron block and head; compression quoted at 8.5:1 early, lowered to 7.75:1 in 1972 per the Vintage Triumph Register and to 7.5:1 for 1974 per Hagerty",
  "valvetrain": "Single camshaft in block, pushrods and rockers, two valves per cylinder; shorter-duration camshaft adopted for CR and CF engines from 1973",
  "fuel_pi": "Lucas mechanical petrol injection, metering unit driven from the engine, system pressure 110 psi (CP and CR cars, home and European markets)",
  "fuel_carburettor": "Twin Zenith-Stromberg constant-depression carburettors (CC and CF cars, North America); single carburettor for California",
  "power": "150 bhp at 5,500 rpm claimed for CP injection cars; 125 bhp at 5,500 rpm for CR cars from 1973; 104 bhp for early CC carburettor cars and 106 bhp at 4,900 rpm quoted for 1972-onward US tune",
  "torque": "164 lb-ft quoted for early injected cars; 143 lb-ft at 3,500 rpm for early carburettor cars; 133 lb-ft at 3,000 rpm recorded for a 1972 US car",
  "transmission": "4-speed all-synchromesh manual",
  "overdrive": "Laycock de Normanville, optional then standard from 1974; A-type on early cars (about 22 per cent, second/third/top), J-type later (about 28 per cent, third/top)",
  "suspension": "Independent front by coil springs and wishbones; independent rear by semi-trailing arms and coil springs",
  "brakes": "Front discs, rear drums, servo-assisted",
  "steering": "Rack and pinion",
  "wheels": "15-inch, widened from 5 to 5.5 inches for 1970; wire wheels and pressed-steel disc wheels both offered",
  "weight": "Approximately 2,156 lb (978 kg) recorded for a 1972 US-specification car, with 51/49 front-to-rear distribution",
  "acceleration": "0-60 mph in 8.2 s (Autocar) to 8.5 s (Motor, 1969) for injected cars; 10.7 s recorded by Road & Track for the 1969 US carburettor car - all independent test figures, not manufacturer claims",
  "top_speed": "117-120 mph recorded for injected cars; 107-109 mph for US carburettor cars"
 },
 "summary": "The Triumph TR6 (1968-1976) was the last of the separate-chassis TRs and by a wide margin the best-selling of them: a Karmann reskin of Michelotti's TR4 and TR5 body, laid over the same frame, running gear and 2,498 cc straight-six. It was really two cars sold under one name. Britain and Europe got the Lucas mechanical petrol injection carried over from the TR5, quoted at 150 bhp; North America, where the Lucas system could not be made to satisfy emissions law, got twin Zenith-Stromberg carburettors and 104 bhp. The gap on paper was never quite the gap on the road, and from 1973 the injected cars were re-rated at 125 bhp after a change of camshaft that the sources do not cleanly separate from a change of measurement convention. Roughly nine cars in ten were exported and the great majority went to the United States, which is why a TR6 is a familiar sight in California and a scarce one in Coventry. Values today turn far less on which engine a car has than on whether its chassis has survived.",
 "history": "## A New Skin on an Old Frame\nBy 1968 the TR4 body Giovanni Michelotti had drawn for Triumph in 1961 was seven years old and had already been carried over, essentially unchanged, to the TR4A, the injected TR5 and the carburetted TR250. British Leyland had neither the money nor the time for a new car, so the job of making the old one look new went to the West German coachbuilder Karmann, and specifically to Gerhard Giesecke, working with input from Triumph's North American sales organisation. What Karmann delivered was a squared-off front and rear clip - new wings, bonnet, boot lid, grille and tail panel - grafted onto an unchanged frame, suspension, drivetrain, doors, screen surround and body tub. It went from clay to production in a little over a year. The result looked like a different decade from the front and was mechanically the TR5 underneath.\n\n## Two Cars, One Badge\nThe central fact about the TR6, and the one most often garbled, is that the engine you got depended on where you lived. Home and European cars kept the Lucas mechanical petrol injection of the TR5: a belt-driven metering unit, an electric pump and a system running at 110 psi, rated at 150 bhp at 5,500 rpm with 164 lb-ft. North American cars could not have it, because the Lucas system could not be metered finely enough to meet United States emissions law - an inversion of the usual story in which injection is the compliance technology. Those cars ran twin Zenith-Stromberg constant-depression carburettors and 104 bhp, with California-bound examples reduced further to a single carburettor. The difference was real but smaller in practice than the badges suggested. Road & Track recorded 10.7 seconds to 60 mph and 109 mph in 1969; Motor got 8.5 seconds and 117 mph from an injected car the same year.\n\n## The 1973 Re-rating\nFor 1973 the commission prefixes changed from CP and CC to CR and CF, and the injected engine was quoted at 125 bhp rather than 150. Rimmer Bros and Wikipedia attribute the change to a milder camshaft adopted to improve behaviour in traffic; Ate Up With Motor is more specific, saying Rover-Triumph substituted the shorter-duration camshaft from the federalised cars after complaints about rough idling, and gives the new figure as 124 hp. Auto Express attributes the detune to emissions requirements. Hagerty UK argues that the paper drop overstates the real one, because the convention for quoting output changed at the same time. All four cannot be simultaneously correct about cause, and none of them separates the mechanical loss from the arithmetic one. The same year brought a front air dam, revised instruments and horn arrangements, and headrests; overdrive became standard for 1974.\n\n## Built for Somebody Else\nThe TR6 was a British sports car built almost entirely for export. Every source consulted agrees that only 8,370 were sold in the United Kingdom. Estimates of United States deliveries run from Hagerty's 76,470 to Auto Express's approximately 77,000, against total production variously given as 91,849, 91,850 or 94,619. Peak North American sales came in 1974, at roughly 14,000 cars, by which point the federal engine carried a carbon canister, an anti-run-on valve, lowered compression and, from 1975, air injection and rubber overrider blocks. The consequence is that most surviving TR6s are left-hand-drive carburettor cars, and a genuine home-market PI car is scarcer than the totals alone suggest.\n\n## Quality, Reputation and the End\nPeriod ownership was not uniformly happy. Motor Sport's long-term TR6, bought in February 1973 for 1,798 pounds with hardtop, overdrive and soft top, went through a broken gearbox spacer washer at 15,400 miles, repeated tyre and brake trouble, water into the footwells, excessive crankshaft end float and a factory service at which the tappets, timing, greasing and brake adjusters were all found wrong. The injection itself, once rebuilt by the factory, gave no further trouble. Injected production ended in July 1975 and the last federal car was built on 14 July 1976, by which time the TR7 had arrived with a closed body, four cylinders and a monocoque. The TR6 was the last Triumph sports car with a separate chassis.",
 "marketNotes": "As of August 2026, classic.com records a Triumph TR6 market benchmark of $20,037 against an average recorded sale of $20,727, with tracked results running from $1,850 in August 2024 to $54,980 in July 2026 and around fifty cars listed for sale. Recent US results clustered close to the benchmark: $22,797 for a 1969 car in Massachusetts and $24,991 for a 1976 car in Pennsylvania, both in August 2026, against $13,500 for a 1974 car in May 2026. The Classic Valuer, aggregating 1,288 auction results with a 76 per cent sell-through rate and read in August 2026, gives a median of 15,246 pounds with a low of 2,690 pounds and a high of 62,207 pounds. The top of the market is thin and specific: RM Sotheby's sold chassis CF56401U, a 1976 car with 2,854 miles from new, original paint, interior and Michelin red-band tyres and a British Motor Industry Heritage Trust certificate, for $50,400 at Monterey in 2024. UK guidance read in August 2026 puts projects at 5,000-10,000 pounds, usable cars at 12,000-18,000, well-sorted cars at 18,000-24,000 and restored cars above 25,000 per Classics World, with Auto Express placing a good car around 13,000 pounds and a top car at 25,000. Classics World also notes left-hand-drive imports trading 10 to 20 per cent below equivalent UK cars, which is the clearest available price on the injection-versus-carburettor distinction.",
 "whatToLookFor": "The chassis decides the car. The frame is spot-welded from sheet steel pressings and rots from the inside, so surface condition tells you little. The rear trailing arm mounting brackets, the cruciform where the inner rails meet, the rear outriggers and the T-shaped pressing over the rear axle are the areas that matter, and swelling around the trailing arm bolts indicates rot working outward. The forward differential mountings crack and, left alone, tear their studs out of the frame; a clunk from the back of the car under power is the warning. Body corrosion follows the usual TR pattern - sills, floors, boot floor, front wings behind the headlamps, rear wing tips, the back of the B-post and the rear lip of the boot lid - and the three-layer sandwich where the rear wing meets the body traps debris. A recent respray on a car with no documented chassis work deserves suspicion rather than credit. Check the commission number against the claimed specification: CP and CR denote petrol injection, CC and CF carburettors, with L, U and O suffixes for left-hand drive, United States specification and overdrive. The commission plate stays with the bodyshell while engines and gearboxes move around, so it is the only reliable statement of what the car left Coventry as. Many PI cars were converted to carburettors when the Lucas system fell out of favour; establish whether the original metering unit and pump are present or merely stored. Have crankshaft end float measured before purchase. Confirm which overdrive is fitted and that it engages on the gears it should.",
 "commonProblems": "The crankshaft thrust washers are the engine's defining weakness. They are steel with a thin copper-nickel facing, they carry the load of a heavy clutch spring, and once the facing wears through the steel wears rapidly, the washer can drop into the sump and the crankshaft then bears directly on the main bearing cap - which turns a cheap job into a crankshaft or a block. Riding the clutch, resting on the pedal at junctions and starting the engine with the clutch depressed all accelerate it. Solid alloy replacements are the accepted fix. The Lucas injection is not fragile so much as intolerant: the original pump cavitates when hot, the fuel vaporising in the pump so that it spins without delivering, which stops the engine without warning, and modern unleaded fuel makes this worse. RevingtonTR notes that most surviving pumps have been rebuilt at least once with second-hand parts, and that Bosch pumps rated for the same 110 psi are widely substituted, mounted as low as possible to keep them flooded. Metering units wear and their oil seal to the block leaks. Elsewhere: differential mounts crack, driveshafts and their splines wear, gearbox layshaft bearings whine in the lower gears, clutch release bearings can last only 12,000 to 20,000 miles in hard use, rear hub bearings need specialist rebuilding, differentials leak, and overheating is common. Period build quality was poor enough that Motor Sport's own long-term car needed an independent specialist to correct what the factory service had left wrong.",
 "valueTrajectory": "The TR6 spent decades as the affordable entry to classic British sports car ownership, its values held down by the sheer number built and by the reputational drag of British Leyland-era quality. It has re-rated since, helped by its appearance on Hagerty's 2022 Bull Market list, but it has not detached from its own supply: as of August 2026 the classic.com benchmark of $20,037 and average sale of $20,727 sit close together, which is the signature of a deep, liquid market rather than a speculative one. The Classic Valuer's 76 per cent sell-through, read in August 2026, says the same thing. What has changed is the spread. Restoration now costs more than most finished cars are worth, so the gap between a car with documented chassis work and one without has widened faster than the headline figure, and the extremes have pulled apart - $1,850 at the bottom of the classic.com range against $54,980 at the top, and RM Sotheby's $50,400 for a 2,854-mile original car at Monterey in 2024. Home-market injection cars and cars with original hardtops and overdrive carry a premium; the abundant left-hand-drive carburettor imports set the floor, trading 10 to 20 per cent below equivalent UK cars.",
 "overallConfidence": "high",
 "sources": [
  {
   "ref": "wikipedia-tr6",
   "title": "Triumph TR6",
   "url": "https://en.wikipedia.org/wiki/Triumph_TR6",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Gives 91,850 total with 83,480 exported and 8,370 UK sales; production 19 September 1968 to 14 July 1976; CC/CP then CF/CR prefixes; CC 104 net bhp and 143 lb-ft at 3,500 rpm, CP 150 bhp and 164 lb-ft, CR 125 bhp, CF 106 bhp; Autocar 8.2 s and 120 mph; A-type and J-type overdrive ratios; 1973 milder camshaft, altered injection pump and front spoiler."
  },
  {
   "ref": "ateupwithmotor-tr6",
   "title": "Grandfather's Ax: The Many Evolutions of the Triumph TR4, Part 2: TR5, TR250, and TR6",
   "url": "https://ateupwithmotor.com/model-histories/triumph-tr5-tr250-tr6/2/",
   "publisher": "Ate Up With Motor",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Names Gerhard Giesecke of Karmann as the TR6 designer, with North American input, clay to production in a little over a year on a retained frame; gives 94,619 total and peak North American sales around 14,000 in 1974; states the 1973 injected re-rating to 124 hp followed rough-idle complaints and used the shorter-duration federal camshaft; California cars ran a single carburettor; attributes the one-piece hardtop to Triumph's in-house styling team."
  },
  {
   "ref": "autoexpress-tr6",
   "title": "Triumph TR6: Buying guide and review (1968-1976)",
   "url": "https://www.autoexpress.co.uk/classic-cars/104884/triumph-tr6-buying-guide-and-review-1968-1976",
   "publisher": "Auto Express",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "States 94,619 built with approximately 77,000 exported to the US and 8,370 UK sales; PI 150 bhp at 5,500 rpm, 0-60 in 8.2 s, 119 mph; 1973 detune to 125 bhp attributed to emissions; US Stromberg cars 104 bhp and 107 mph; rust at front quarters, behind rear wheels, footwells, trailing arms and differential attachment points; overheating, fuel vaporisation, thrust washers; overdrive not standard until 1974; UK guidance of about 13,000 pounds for a good car and 25,000 for a top car."
  },
  {
   "ref": "hagerty-uk-fullenglish",
   "title": "The Full English: Triumph TR6",
   "url": "https://www.hagerty.co.uk/articles/car-profiles/the-full-english-triumph-tr6/",
   "publisher": "Hagerty UK",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Breaks production down as 13,702 injected cars including about 3,600 CKD cars assembled in Belgium, 78,147 carburetted, 91,849 total; Lucas PI at 110 psi and 150 bhp; argues the 1973 drop to 125 bhp partly reflects a change in how output was quoted; Motor 1969 test at 117 mph, 8.5 s to 60 mph, 20.8 mpg; Clive Richardson's 1973 Motor Sport long-term faults; 2022 Hagerty Bull Market listing."
  },
  {
   "ref": "hagerty-us-defense",
   "title": "In defense of the Triumph TR6",
   "url": "https://www.hagerty.com/media/car-profiles/in-defense-of-the-triumph-tr6/",
   "publisher": "Hagerty",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Independent restatement of the 13,702 / 78,147 / 91,849 breakdown and of TR5 (2,947) and TR250 (8,484) volumes; describes the Karmann reskin as new wings, bonnet, boot, front and rear panels over unchanged chassis, suspension, drivetrain, doors and screen surround; notes emissions law removed Lucas PI from North America."
  },
  {
   "ref": "hagerty-us-etype",
   "title": "Triumph's TR6 is an E-Type for the masses",
   "url": "https://www.hagerty.com/media/magazine-features/triumphs-tr6-is-an-e-type-for-the-masses/",
   "publisher": "Hagerty",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Gives US exports of 76,470; 1972 US car at 106 hp at 4,900 rpm, 133 lb-ft at 3,000 rpm, 2,156 lb, 51/49 distribution, 10.7 s to 60 mph, 109 mph observed, $3,275 list; lists the emissions additions by year - carbon canister 1972, anti-run-on valve 1973, 7.5:1 compression 1974, air injection 1975, rubber overrider blocks from 1975."
  },
  {
   "ref": "vtr-tr6",
   "title": "TR6 - Vintage Triumph Register",
   "url": "https://vintagetriumphregister.org/tr6/",
   "publisher": "Vintage Triumph Register",
   "sourceType": "registry",
   "reliability": "medium",
   "notes": "Club registry: 91,850 built of which 86,249 exported and 8,370 sold in the UK - figures that do not reconcile with each other; 2,498 cc six; 150 bhp PI reduced to 125 bhp in 1973, 104 bhp US carburettor; compression lowered from 8.5:1 to 7.75:1 in 1972; 1973 restyle with air dam and J-type overdrive; 1975 rubber overriders and air injection; names thrust washers as the biggest engine failure point and frame rot at trailing arm mounts."
  },
  {
   "ref": "rimmer-tr6-info",
   "title": "Triumph TR6 Vehicle Information",
   "url": "https://rimmerbros.com/c/Triumph-TR6-Vehicle-Information",
   "publisher": "Rimmer Bros",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Parts specialist reference: CP for Lucas injected cars and CC for carburetted; prefixes changed to CR and CF in 1973 on introduction of a milder camshaft for better traffic performance; suffixes L for left-hand drive, U for US specification, O for overdrive; commission ranges CP25156-CP77718, CR169 onward, CC25003L-CC85737U, CF1U-CF58328U; last injected car July 1975, last federal car a year later."
  },
  {
   "ref": "moss-tr6-vin",
   "title": "Triumph TR250 & TR6 Vehicle Identification",
   "url": "https://mossmotors.com/tr6-vin",
   "publisher": "Moss Motors",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Year-by-year commission number chart for the TR6 including CC25001-CC32142 for 1969, CF1-CF12500 for 1973 and CF35001-CF58328 for 1975-76; states that the commission number stays with the bodyshell for life while engines and gearboxes are swapped, making it the reference for original specification."
  },
  {
   "ref": "classicsworld-tr6",
   "title": "Triumph TR6 buyer's guide",
   "url": "https://classicsworld.co.uk/guides/triumph-tr6-buying-guide/",
   "publisher": "Classics World",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Buyer's guide: worst chassis rot at the sills and rear, the T-shaped pressing over the rear axle, trailing arm sections rusting from the inside with swelling around the bolts, and the three-layer rear wing joint; body rot at B-post backs, front wings behind headlamps and boot lid lip; crankshaft endfloat, layshaft bearings, clutch release bearings lasting 12,000-20,000 miles, leaking differentials and driveshaft wear; UK price tiers from 5,000-10,000 pounds for projects to 25,000-plus restored, with LHD imports 10-20 per cent cheaper."
  },
  {
   "ref": "hagerty-uk-buyers-guide",
   "title": "Buyers Guide: Triumph TR6",
   "url": "https://www.hagerty.co.uk/articles/buyers-guide-triumph-tr6/",
   "publisher": "Hagerty UK",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Owner-sourced buying guide: frame is 16-gauge sheet steel stampings spot-welded together and holds moisture internally; names rear trailing arm mounts, the cruciform where inner rails meet, rear swing arm outriggers and the forward differential mountings as the critical points; body rot behind headlamps, rear wing tips, sills, floors and boot floor; engines typically need rebuilding near 100,000 miles, with noisy thrust washers and low oil pressure as the warnings."
  },
  {
   "ref": "moss-diff-mount",
   "title": "A Weak Differential Mount: Fixing a Common TR6 Problem",
   "url": "https://mossmotoring.com/a-weak-differential-mount-fixing-a-common-tr6-problem/",
   "publisher": "Moss Motoring",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Specialist technical article: TR6 differential mounting studs and brackets crack and eventually rip out of the frame; the right front mount carries more of the torque load; clunking from the differential area is the diagnostic symptom; repair uses replacement studs, brackets and welded reinforcing side plates."
  },
  {
   "ref": "britishcarweek-thrust",
   "title": "Triumph TR6 Thrust Washer Fix Explained",
   "url": "https://www.britishcarweek.org/tr6_3.html",
   "publisher": "British Car Week",
   "sourceType": "club-forum",
   "reliability": "low",
   "notes": "Enthusiast technical write-up on the thrust washer failure mode: OEM steel washers carry only thin copper-nickel plating and take the load of a heavy clutch spring; riding or holding the clutch and starting with the pedal depressed accelerate wear; once through to bare steel the washer wears rapidly, drops into the sump and lets the crankshaft bear on the bearing cap; solid alloy washers are the accepted fix."
  },
  {
   "ref": "revington-pi-pump",
   "title": "IS0006 Replacing Lucas Petrol Injection Pumps with Bosch Fuel Pumps",
   "url": "https://www.revingtontr.com/files/docs/IS0006%20REPLACING%20LUCAS%20PETROL%20INJECTION%20PUMPS%20WITH%20BOSCH%20FUEL%20PUMPS.pdf",
   "publisher": "RevingtonTR",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Marque specialist technical sheet: Lucas PI runs at 110 psi; most surviving pumps have been reconditioned at least once using second-hand components; unleaded fuel increases cavitation, in which fuel vaporises in the overheating pump and it spins without delivering; Bosch replacements rated for 110 psi need a flooded feed of at least 2.6 litres per minute and must be mounted as low as possible."
  },
  {
   "ref": "wikipedia-tr5",
   "title": "Triumph TR5",
   "url": "https://en.wikipedia.org/wiki/Triumph_TR5",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Establishes the TR6's direct parentage: Lucas mechanical fuel injection rated 150 bhp on the TR5, twin Zenith-Stromberg carburettors on the North American TR250 at 111 bhp and 10.6 s to 60 mph, Michelotti TR4-derived bodywork, and volumes of 2,947 TR5 and 8,484 TR250 between August 1967 and September 1968."
  },
  {
   "ref": "curbside-rt-1969",
   "title": "Vintage R&T Road Test: 1969 Triumph TR-6",
   "url": "https://www.curbsideclassic.com/vintage-reviews/vintage-rt-road-test-1969-triumph-tr-6/",
   "publisher": "Curbside Classic",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Reprints and discusses the Road & Track test of the 1969 US carburettor car: 104 hp, 0-60 in 10.7 s, standing quarter in 17.9 s, 109 mph; notes R&T's view that the deficit against the 150 hp European car did not spoil the car, and that Lucas mechanical injection could not be metered precisely enough for US emissions law."
  },
  {
   "ref": "motorsport-1974-longterm",
   "title": "The continuing tale of a TR6",
   "url": "https://www.motorsportmagazine.com/archive/article/december-1974/53/the-continuing-tale-of-a-tr6/",
   "publisher": "Motor Sport",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Period long-term report: car bought February 1973 for 1,798 pounds with hardtop, overdrive and soft top, 2,309 pounds by December 1974; gearbox spacer washer broke up at 15,400 miles; repeated brake and tyre trouble; excessive crankshaft end float; water into the front carpets; 17-18 mpg locally, 26 mpg at 70-80 mph; a factory service found with tappets, timing, greasing and brake adjusters all wrong; the Lucas injection gave no trouble after a factory rebuild at about 16,000 miles apart from a leaking metering unit oil seal."
  },
  {
   "ref": "john-skinner-hardtop",
   "title": "Triumph TR6 - John Skinner (Manufacturing) Ltd",
   "url": "https://john-skinner.co.uk/models/triumph/tr6/",
   "publisher": "John Skinner (Manufacturing) Ltd",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Hardtop manufacturer's model notes: the TR6 factory hardtop replaced the TR4-to-TR250 Surrey Top arrangement, combining rear screen and B-post windows into one detachable section, so the TR6 was either a fixed-head coupe or fully open with no intermediate configuration; attributes the design to Karmann; black PVC headlining on roughly the first 50,000 cars, beige from 1970."
  },
  {
   "ref": "classic-com-tr6",
   "title": "Triumph TR6 Market",
   "url": "https://www.classic.com/m/triumph/tr6/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Market data read August 2026: market benchmark $20,037, average sale $20,727, lowest tracked sale $1,850 on 21 August 2024 and highest $54,980 on 31 July 2026, about 50 cars listed for sale; recent sold examples include a 1969 car at $22,797 and a 1976 car at $24,991 in August 2026 and a 1974 car at $13,500 in May 2026."
  },
  {
   "ref": "classic-valuer-tr6",
   "title": "Triumph TR6 For Sale & Price Guide",
   "url": "https://www.theclassicvaluer.com/cars/triumph/tr6",
   "publisher": "The Classic Valuer",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "Auction aggregation read August 2026: median 15,246 pounds, lowest 2,690 pounds, highest 62,207 pounds across 1,288 tracked results with a 76 per cent sell-through rate; UK dealer asking prices 13,750 to 34,995 pounds. The site's stated production span of 1966-1991 is wrong, which is why its reliability is set to medium."
  },
  {
   "ref": "rm-mo24-tr6",
   "title": "1976 Triumph TR6, Monterey 2024",
   "url": "https://rmsothebys.com/auctions/mo24/lots/r0088-1976-triumph-tr6/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Individual lot page: chassis CF56401 U sold for $50,400 at RM Sotheby's Monterey in 2024; 2,854 miles from new, completed 24 May 1976 and dispatched to a British Leyland dealer in Detroit, Pimiento Red, original paint, interior and Michelin red-band tyres, British Motor Industry Heritage Trust certificate, formerly of the Bruce Weiner collection."
  }
 ],
 "claims": [
  {
   "section": "history",
   "claimText": "The TR6 was a Karmann reskin of the Michelotti-drawn TR4/TR5 body, led by Gerhard Giesecke with input from Triumph's North American sales organisation: new wings, bonnet, boot lid, grille and tail panel over an unchanged frame, suspension, drivetrain, doors and screen surround, taken from clay to production in a little over a year.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "ateupwithmotor-tr6",
    "hagerty-us-defense",
    "hagerty-uk-fullenglish",
    "wikipedia-tr6"
   ]
  },
  {
   "section": "specs",
   "claimText": "Home-market and European TR6s used the Lucas mechanical petrol injection carried over from the TR5, a metering-unit system running at 110 psi and rated at 150 bhp at 5,500 rpm with 164 lb-ft of torque.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-tr6",
    "hagerty-uk-fullenglish",
    "revington-pi-pump",
    "wikipedia-tr5"
   ]
  },
  {
   "section": "specs",
   "claimText": "North American TR6s used twin Zenith-Stromberg carburettors rather than Lucas injection because the Lucas system could not be metered finely enough to meet United States emissions law, and were rated at 104 bhp with 143 lb-ft at 3,500 rpm; California-market cars ran a single carburettor and less power still.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "curbside-rt-1969",
    "wikipedia-tr6",
    "ateupwithmotor-tr6",
    "hagerty-us-defense"
   ]
  },
  {
   "section": "specs",
   "claimText": "The performance gap between injected and carburetted cars was smaller in independent testing than the power ratings imply: Road & Track recorded 10.7 seconds to 60 mph and 109 mph for the 1969 US car, while Motor recorded 8.5 seconds and 117 mph and Autocar 8.2 seconds and 120 mph for injected cars.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "curbside-rt-1969",
    "hagerty-uk-fullenglish",
    "wikipedia-tr6",
    "autoexpress-tr6"
   ]
  },
  {
   "section": "history",
   "claimText": "For 1973 the commission prefixes changed from CP and CC to CR and CF, and the injected engine was re-rated from 150 bhp to about 125 bhp, but the sources do not agree on why.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "rimmer-tr6-info",
    "ateupwithmotor-tr6",
    "autoexpress-tr6",
    "hagerty-uk-fullenglish",
    "wikipedia-tr6",
    "vtr-tr6"
   ],
   "conflictNote": "Rimmer Bros and Wikipedia attribute the drop to a milder camshaft fitted for better traffic manners. Ate Up With Motor states Rover-Triumph substituted the shorter-duration camshaft from the federalised cars after complaints of rough idling and gives the new figure as 124 hp. Auto Express attributes the detune to emissions requirements. Hagerty UK argues the paper drop overstates the mechanical one because the convention for quoting output changed at the same time. No source consulted here separates the mechanical loss from the change of measurement standard, so the cause is not resolved."
  },
  {
   "section": "specs",
   "claimText": "The 1973 CR and CF engines used a shorter-duration camshaft, and the same model year brought a front air dam, revised instruments and horn arrangements, and headrests, with overdrive becoming standard fitment for 1974.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "rimmer-tr6-info",
    "wikipedia-tr6",
    "vtr-tr6",
    "autoexpress-tr6"
   ]
  },
  {
   "section": "production",
   "claimText": "Published TR6 production totals do not agree: 91,849 or 91,850 is given by several sources and 94,619 by others, so no single figure is asserted here.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "wikipedia-tr6",
    "vtr-tr6",
    "hagerty-uk-fullenglish",
    "hagerty-us-defense",
    "ateupwithmotor-tr6",
    "autoexpress-tr6"
   ],
   "conflictNote": "Wikipedia gives 91,850, the Vintage Triumph Register 91,850 and Hagerty (UK and US) 91,849 with a breakdown of 13,702 injected and 78,147 carburetted cars. Ate Up With Motor gives 94,619, Auto Express 94,619 and Classic Car Hub nearly 95,000. The export figures compound it: Wikipedia's 83,480 exported plus 8,370 UK equals 91,850, while the Vintage Triumph Register's 86,249 exported plus the same 8,370 equals 94,619. No source consulted here explains the 2,769-car difference, so productionTotal is left null."
  },
  {
   "section": "production",
   "claimText": "Every source consulted agrees that only 8,370 TR6s were sold in the United Kingdom, meaning roughly nine cars in ten were exported, with United States deliveries put at 76,470 by Hagerty and approximately 77,000 by Auto Express.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-tr6",
    "vtr-tr6",
    "autoexpress-tr6",
    "hagerty-us-etype"
   ]
  },
  {
   "section": "production",
   "claimText": "Roughly 3,600 of the 13,702 injected cars were shipped as CKD kits and assembled in Belgium.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "hagerty-uk-fullenglish",
    "hagerty-us-defense"
   ]
  },
  {
   "section": "production",
   "claimText": "Production ran from 19 September 1968 to 14 July 1976, with the last Lucas-injected car built in July 1975 and federal carburettor production continuing for a further year.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-tr6",
    "rimmer-tr6-info"
   ]
  },
  {
   "section": "production",
   "claimText": "Commission number prefixes identify the original specification - CP and CR for Lucas petrol injection, CC and CF for carburettors, with suffixes L for left-hand drive, U for United States specification and O for overdrive - and the commission plate stays with the bodyshell while engines and gearboxes are swapped.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "rimmer-tr6-info",
    "moss-tr6-vin",
    "wikipedia-tr6"
   ]
  },
  {
   "section": "specs",
   "claimText": "The factory hardtop was a one-piece detachable structure combining the rear screen and B-post windows in a single section, replacing the TR4-to-TR250 Surrey Top arrangement, so a TR6 was either a fixed-head coupe or fully open with no intermediate configuration; the design's authorship is not settled.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "john-skinner-hardtop",
    "ateupwithmotor-tr6"
   ],
   "conflictNote": "John Skinner (Manufacturing) Ltd, which makes replacement tops, attributes the TR6 one-piece hardtop to Karmann. Ate Up With Motor states it was designed by Triumph's own in-house styling team as a cheaper replacement for the TR4's two-piece Surrey arrangement. Both agree it superseded the Surrey Top and offered no intermediate configuration; the attribution itself is not resolved by any source consulted here."
  },
  {
   "section": "specs",
   "claimText": "Overdrive was Laycock de Normanville, with the early A-type giving about a 22 per cent reduction on second, third and top and the later J-type about 28 per cent on third and top only.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-tr6",
    "vtr-tr6"
   ]
  },
  {
   "section": "specs",
   "claimText": "Compression was progressively lowered on emissions grounds, quoted at 8.5:1 originally and 7.75:1 from 1972 by the Vintage Triumph Register and at 7.5:1 for 1974 by Hagerty, alongside a carbon canister for 1972, an anti-run-on valve for 1973 and air injection for 1975.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "vtr-tr6",
    "hagerty-us-etype"
   ]
  },
  {
   "section": "problems",
   "claimText": "The crankshaft thrust washers are the engine's defining weakness: steel with a thin copper-nickel facing, they carry heavy clutch-spring loads, and once the facing wears through the washer can drop into the sump and let the crankshaft bear directly on the main bearing cap.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "britishcarweek-thrust",
    "vtr-tr6",
    "hagerty-uk-buyers-guide",
    "classicsworld-tr6",
    "motorsport-1974-longterm"
   ]
  },
  {
   "section": "problems",
   "claimText": "The original Lucas injection pump cavitates when hot, the fuel vaporising so that the pump spins without delivering, a tendency made worse by modern unleaded fuel; most surviving pumps have been reconditioned at least once with second-hand parts and Bosch units rated for the same 110 psi are widely substituted.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "revington-pi-pump",
    "autoexpress-tr6"
   ]
  },
  {
   "section": "problems",
   "claimText": "The forward differential mountings crack and can eventually tear their studs out of the frame, with clunking from the differential area as the diagnostic symptom; the repair uses replacement studs, brackets and welded reinforcing plates.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "moss-diff-mount",
    "hagerty-uk-buyers-guide",
    "autoexpress-tr6"
   ]
  },
  {
   "section": "problems",
   "claimText": "The frame is spot-welded from sheet steel pressings, holds moisture internally and rots from the inside, with the rear trailing arm mounts, the cruciform where the inner rails meet, the rear outriggers and the pressing over the rear axle as the critical inspection points.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "hagerty-uk-buyers-guide",
    "classicsworld-tr6",
    "vtr-tr6",
    "autoexpress-tr6"
   ]
  },
  {
   "section": "problems",
   "claimText": "Period build quality was poor: Motor Sport's long-term car suffered a broken gearbox spacer washer at 15,400 miles, repeated brake and tyre trouble, water ingress into the footwells and excessive crankshaft end float, and a factory service was found to have left tappets, timing, greasing and brake adjusters wrong.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "motorsport-1974-longterm",
    "hagerty-uk-fullenglish"
   ]
  },
  {
   "section": "market",
   "claimText": "As of August 2026 classic.com records a Triumph TR6 market benchmark of $20,037 against an average recorded sale of $20,727, with tracked results running from $1,850 in August 2024 to $54,980 in July 2026.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-com-tr6"
   ]
  },
  {
   "section": "market",
   "claimText": "As of August 2026 The Classic Valuer's aggregation of 1,288 auction results gives a median of 15,246 pounds with a low of 2,690 pounds and a high of 62,207 pounds and a 76 per cent sell-through rate, while UK published guidance places projects at 5,000-10,000 pounds and restored cars above 25,000 pounds.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "classic-valuer-tr6",
    "classicsworld-tr6",
    "autoexpress-tr6"
   ]
  },
  {
   "section": "market",
   "claimText": "The top of the TR6 market is narrow and originality-driven: RM Sotheby's sold chassis CF56401 U, a 1976 car with 2,854 miles from new retaining its original paint, interior and Michelin red-band tyres and carrying a British Motor Industry Heritage Trust certificate, for $50,400 at Monterey in 2024.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "rm-mo24-tr6",
    "classic-com-tr6"
   ]
  },
  {
   "section": "market",
   "claimText": "Left-hand-drive imports trade roughly 10 to 20 per cent below equivalent UK-market cars, which is the clearest available price signal on the injection-versus-carburettor distinction.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "classicsworld-tr6",
    "hagerty-uk-buyers-guide"
   ]
  },
  {
   "section": "summary",
   "claimText": "The TR6 was the last separate-chassis Triumph TR and the best-selling of the line, superseded by the monocoque, four-cylinder TR7.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "vtr-tr6",
    "wikipedia-tr6",
    "hagerty-us-defense"
   ]
  }
 ]
};
