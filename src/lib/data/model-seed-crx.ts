/**
 * Researched model draft - Honda CRX, first and second generation (1984-1991), US market.
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedCrx = {
 "slug": "honda/crx",
 "make": "Honda",
 "model": "CRX",
 "generation": null,
 "generationCode": "ED8 / ED9 (1988-91)",
 "trim": null,
 "yearStart": 1984,
 "yearEnd": 1991,
 "bodyStyles": [
  "2-door, 2-seat Kammback hatchback coupe (1984-1987)",
  "2-door, 2-seat Kammback hatchback coupe, longer wheelbase (1988-1991)"
 ],
 "engines": [
  "1984 CRX: 1.3-liter carbureted SOHC inline-4 (EV1 family), 60 hp and 73 lb-ft, 5-speed manual only",
  "1984 CRX 1.5 / 1985-87 CRX: 1.5-liter carbureted CVCC SOHC inline-4, 76 hp and 84 lb-ft, 5-speed manual or automatic (3-speed, then 4-speed from 1986)",
  "1985-87 CRX HF: 1.5-liter carbureted SOHC inline-4 with aluminum block and 8-valve CVCC head, tuned for fuel economy, 5-speed manual",
  "1985-87 CRX Si: 1.5-liter SOHC PGM-FI sequential port injected inline-4 without CVCC prechambers, 91 hp and 93 lb-ft at 4,500 rpm, 5-speed manual",
  "1988-91 CRX (DX): 1,493 cc D15B2 SOHC 16-valve inline-4, dual-point fuel injection, 5-speed manual or 4-speed automatic",
  "1988-91 CRX HF: 1,493 cc D15B6 SOHC 8-valve inline-4, multi-point fuel injection, 5-speed manual",
  "1988-91 CRX Si: 1,590 cc D16A6 SOHC 16-valve inline-4, multi-point PGM-FI, 105 hp and 98 lb-ft (1988), 108 hp from a revised camshaft (1989-91), 5-speed manual"
 ],
 "productionTotal": null,
 "productionNotes": "No source consulted here publishes a factory production figure for the US-market CRX by generation, so no total is asserted. What exists is two different tabulations that do not reconcile. Hagerty's 2021 buyer's guide gives US sales by model year: 48,445 (1984), 57,486 (1985), 66,629 (1986), 48,142 (1987), 51,784 (1988), 39,048 (1989), 40,650 (1990) and 26,975 (1991), which sums to 220,702 first-generation cars and 158,457 second-generation cars. Wikipedia reproduces a second-generation production table by trim and model year attributed to the enthusiast site Golden Era Honda: 38,018 HF, 68,813 base CRX and 64,562 Si, 171,393 in all, with annual totals of 49,162, 43,549, 38,413 and 40,269. The Golden Era Honda page still exists and describes the table, but the spreadsheet it linked to now returns a 404, so the figures survive only as reproduced. Sales and production are not the same measure and neither source explains its basis, so the gap of roughly 13,000 cars over four years is reported here, not resolved. Wikipedia's headline statement that nearly 400,000 CR-Xs were built worldwide is unsourced on the page and covers Japanese and European cars as well; it is not a US figure. For the first generation there is no trim split at all in any source consulted, so nobody can say how many 1985-87 Si cars were sold. The R. Straman Company of Costa Mesa is recorded as having converted 310 first-generation cars into convertibles between 1984 and 1987, on Wikipedia's word alone. What was sold in the US: 1984 CRX (1.3) and CRX 1.5; 1985-87 HF, CRX and Si; 1988-91 base (often called DX), HF and Si. The 1.6-liter DOHC ZC and the VTEC B16A cars of Japan and Europe, and the four-seat European body, were never offered here.",
 "notableTrims": [
  {
   "name": "1984 CRX 1.3",
   "note": "The launch economy car: 1.3-liter carbureted four, 60 hp, five-speed only, tachometer and shift light, and an EPA highway rating in the low fifties. It is the lightest CRX and the least valued; the one generation of the car where the base model is not the one to want."
  },
  {
   "name": "1985-87 CRX HF",
   "note": "Replaced the 1.3 as the economy model for 1985, using a 1.5-liter aluminum block with the two-valve CVCC head. A 1986 example with 8,100 miles brought $23,100 at Mecum Kissimmee in January 2025, so the economy car is no longer a throwaway."
  },
  {
   "name": "1985-87 CRX Si",
   "note": "Introduced in April 1985, the first fuel-injected CRX: 91 hp, a four percent shorter final drive, power up-and-over sunroof, rear wiper, alloy wheels and a ducktail spoiler. Stickered at $7,999 in 1985. Flush headlamps and 14-inch wheels from 1986."
  },
  {
   "name": "1988-91 CRX HF",
   "note": "Eight-valve D15B6 with multi-point injection, the lightest second-generation car and the only one to keep pillar-mounted belts through 1989. The 1991 car is rated 40 mpg city and 47 highway by the EPA under current methodology, better than most modern hybrids without batteries."
  },
  {
   "name": "1988 CRX Si",
   "note": "First year of the D16A6 at 105 hp, with pillar-mounted belts, early alloys and early taillights; Golden Era Honda calls it the chassis to have for lightness. The 1988 gearbox has a unique input shaft spline that was strengthened for 1989."
  },
  {
   "name": "1990-91 CRX Si",
   "note": "108 hp from the 1989 camshaft, four-wheel disc brakes and new 14-inch alloys from 1990, plus the revised bumpers and taillights. A 326-mile 1991 Si in Tahitian Green sold for $71,500 at Mecum Kissimmee in January 2025, the most any source here has recorded for a CRX."
  },
  {
   "name": "1988-91 CRX (DX) automatic",
   "note": "The only CRX with an automatic transmission in this era, a 4-speed on the base car alone. Hagerty's model expert says an automatic DX had better be an ultra-low-mile museum piece to be worth collector money."
  }
 ],
 "specs": {
  "layout": "Front transverse engine, front-wheel drive, two seats",
  "chassis": "Unit steel body; first generation with HP-Alloy plastic outer panels for roughly 40 percent of the exterior (Hagerty); second generation ED8 (DX and HF) and ED9 (Si) chassis codes",
  "engine": "See engines list; 1988-91 Si is the 1,590 cc D16A6 SOHC 16-valve inline-4 with multi-point PGM-FI",
  "power": "1984: 60 hp (1.3) and 76 hp (1.5); 1985-87 Si: 91 hp; 1988 Si: 105 hp; 1989-91 Si: 108 hp; no high-grade source gives the US HF or DX output for 1988-91",
  "torque": "1984: 73 lb-ft (1.3) and 84 lb-ft (1.5); 1985-87 Si: 93 lb-ft at 4,500 rpm; 1988-91 Si: 98 lb-ft",
  "transmission": "5-speed manual on all; automatic on the 1.5 and base car only (3-speed 1984-85, 4-speed 1986-91); HF and Si manual only",
  "suspension": "1984-87: torsion bar and strut front, beam axle with trailing links rear; 1988-91: double wishbone front and rear",
  "brakes": "Front disc, rear drum; 1990-91 Si four-wheel disc",
  "steering": "Manual rack and pinion; variable ratio on the 1988-91 Si",
  "wheels": "13-inch steel (1984); 13-inch alloy (1985 Si); 14-inch alloy (1986-87 Si and 1988-91 Si)",
  "wheelbase": "86.6 in (2,200 mm) 1984-87; 90.6 in (2,301 mm) 1988-91",
  "weight": "Curb weight, US cars: 1984 CRX 1,713 lb (1.3) and 1,803 or 1,819 lb (1.5) depending on source; 1985 Si 1,953 lb; 1988 Si 2,017 lb per two sources, 2,115 lb per a third; 1990-91 Si 2,174 lb",
  "acceleration": "0-60 mph: 9.1 s for the 1985 Si (Car and Driver, quoted by Hagerty); about 8.5 s for the 1988 Si (two sources); a low-reliability source says 8.2 s",
  "drag_coefficient": "0.29 Cd for the 1988-91 body (Hagerty, single source)",
  "fuel_economy_epa_1991": "Current-method EPA ratings: HF 40 city / 47 highway / 43 combined; CRX 1.5 manual 27 / 33 / 29; Si 1.6 manual 24 / 30 / 27 (US gallons)",
  "fuel_economy_period": "1984 1.3: 51 mpg (Hagerty) or 52 mpg highway (Wikipedia citing EPA); 1988-91 HF: 56 mpg highway on the period window sticker (Grassroots Motorsports)"
 },
 "summary": "The Honda CRX is the two-seat Kammback hatchback that Honda spun off the third-generation Civic for the 1984 model year and replaced with a new body on the fourth-generation Civic platform for 1988 through 1991. Honda sold it in the United States in three flavors that changed names once: an economy car (the 1.3 in 1984, the HF from 1985), a mid-range 1.5-liter car, and from April 1985 the fuel-injected Si, which is the version the collector market cares about. The second-generation car swapped the torsion-bar front end for double wishbones at all four corners and gave the Si a 1.6-liter 16-valve engine of 105 hp, then 108 hp, in a car that weighed a little over 2,000 lb; period testers put it to 60 mph in about 8.5 seconds. Motor Trend named the CRX Import Car of the Year in 1984 and 1988, and Road & Track put the 1988 Si on its ten best list. Hagerty records US sales of roughly 379,000 cars across eight model years. Rust, amateur engine swaps and thirty years as a cheap tuner base have thinned the supply of original cars to the point where a 326-mile 1991 Si brought $71,500 at Mecum Kissimmee in January 2025.",
 "history": "## Economy Fast\n\nThe CRX was born of nerves rather than confidence. Hagerty's buyer's guide draws on a 1983 Car Styling interview with Honda R&D Director Hidekuni Hagiwara, who felt an image crisis when the second-generation Civic was threatened by newer competitors, and describes the third-generation Civic range, CRX included, as Honda's all-out attack on all fronts. The direction came from R&D Managing Director Hiroshi Kizawa, the man behind the first Accord and Prelude, whose brief for the two-seater was two words: Economy Fast, a twist on MG's Safety Fast. In Japan the car launched on June 23, 1983 as the Ballade Sports CR-X; North America dropped the hyphen. Roughly 40 percent of the first-generation exterior panels were HP-Alloy plastic, injection molded at Suzuka, and Hagiwara's stated interest in them was recyclability, not weight.\n\n## 1984-1987: from 51 mpg to the Si\n\nThe 1984 US lineup was a 1.3-liter carbureted car with 60 hp and a 1.5-liter car with 76 hp, both on a torsion-bar front end and a beam rear axle, the 1.3 available only with a five-speed and fitted with a shift light to help the driver chase its fifty-plus mpg highway rating. Motor Trend made it Import Car of the Year. For 1985 the economy car became the HF, with a 1.5-liter aluminum block under the old two-valve CVCC head, and in April 1985 the Si arrived: sequential port fuel injection, no CVCC prechambers, 91 hp and 93 lb-ft, a four percent shorter final drive, a sunroof that lifted up and over the roof, alloy wheels and a rear wiper, for $7,999. Hagerty's comparison is instructive: a Toyota MR2 was $11,194 that year. Flush headlamps, 14-inch wheels on the Si and a fourth gear for the optional automatic arrived for 1986, when US sales peaked at 66,629; 1987 was a carryover with new colors. In parallel, the R. Straman Company of Costa Mesa cut the roofs off 310 cars to make CRX convertibles, one of which made the cover of Road & Track in July 1984.\n\n## 1988-1991: wishbones and the D16A6\n\nThe second-generation car was redesigned for the 1988 model year on a wheelbase four inches longer, and the important change was underneath: double wishbones front and rear in place of the torsion bars and beam axle. Three trims, three engines. The base car (never badged, usually called DX) used the 16-valve D15B2 with dual-point injection and was the only CRX offered with an automatic, now a four-speed. The HF used an eight-valve D15B6 with multi-point injection and was the lightest car in the range. The Si got the 1,590 cc D16A6 with multi-point PGM-FI, 105 hp and 98 lb-ft, a variable-ratio steering rack, a rear anti-roll bar, sport seats, a metal sunroof panel and 14-inch alloys, in a body with a 0.29 drag coefficient. No CRX left the factory with a radio; head units were dealer-installed from a catalog of four. The Si ran to 60 mph in about 8.5 seconds, more than half a second quicker than the 1985 car, and collected Motor Trend's Import Car of the Year and a place on Road & Track's ten best for 1988.\n\n## Belts, brakes and the 1990 refresh\n\nFederal passive-restraint rules reshaped the car mid-run. For 1989 the base and Si cars moved their shoulder-belt anchors to the doors, Honda's way of meeting the automatic-belt mandate without motorized tracks; the HF kept pillar-mounted belts until 1990. The same year the Si camshaft was revised for 108 hp. For 1990 the bumpers, corner lamps, fenders, side moldings and taillights were revised, the instrument binnacle lost its flat-topped pyramid shape, and the Si finally got rear disc brakes and new alloys. For 1991 Barbados Yellow gave way to a one-year Tahitian Green on the Si. The DOHC ZC and VTEC B16A engines of Japan and Europe were never offered in a US CRX, which is why so many have been swapped in since.\n\n## Sales, racing and the end\n\nHagerty's figures show US sales of 51,784 in 1988, 39,048 in 1989, 40,650 in 1990 and 26,975 in the final year, the lowest in the car's history. Randy Pobst drove a CRX to the 1990 IMSA driver championship, his first professional title, and CRXs were still winning SCCA Street Touring Sport autocross titles thirty years on. For 1992 Honda replaced the car with the targa-roofed del Sol, which carried the CR-X name in some markets and the CRX's reputation in none of them.",
 "marketNotes": "The most useful recent US evidence is Mecum Kissimmee in January 2025, reported by Hagerty Insider. A 1991 CRX Si in Tahitian Green with 326 miles and a flawless interior sold for $71,500, which Hagerty called the most it had ever seen anyone pay for a CRX; the same report notes that clean cars with 10,000 to 25,000 miles have sold in the $40,000 range and that values for excellent examples have essentially doubled since 2020. At the same sale a 1986 CRX HF with 8,100 miles made $23,100. Older reference points show the slope: Grassroots Motorsports, in its December 2018 issue, cited a super-clean 1988 Si at $15,250 on Bring a Trailer; Hagerty's November 2021 guide cited an apparently clean 1987 Si with 58,000 miles at $22,000 in October 2021 and put a number-2-condition first-generation car around $17,000 and a second-generation car at $18,000 to $19,500 depending on year; Golden Era Honda in 2020 put clean original low-mileage cars above $20,000 and a rust-free high-mileage original at $3,000 to $10,000. classic.com could not be reached from this research session (HTTP 403), so no aggregate benchmark is stated. As of September 2026 the picture from these dated points is a market with a wide gap between original, documented low-mileage Si cars and everything else, where the everything-else tier includes most of the surviving population. Prices above are as reported by the cited sources and do not state whether buyer's premium is included.",
 "whatToLookFor": "Originality first, because it is the scarce thing. Hagerty's model expert Christopher Hoffman says too many people feel no 1980s Honda should keep its original engine and that amateur swaps are common; a car with its D16A6 or 1.5 still in place and its factory harness intact is already in the minority, and reversing a coil-over conversion is of questionable feasibility. Rust is the second filter. Golden Era Honda names the rear quarter panels, the metal under the plastic rocker covers and the Si sunroof panel; owners on HondaSwap add the rear quarters behind the wheel wells, the bottoms of the doors, the hatch rails and the windshield surround; Hagerty adds wheel arches and sunroof drains. Grassroots Motorsports found rust on every car it looked at during its search. The first-generation plastic fenders, header panel and cladding go brittle and crack from ordinary use, and are reproduced only in carbon fiber. Check the sunroof for leaks from a blocked drain and the hatch gasket for water entry. On a carbureted 1984-87 car, look for the full vacuum-line layout rather than a de-vacced engine bay, and if a Weber has been fitted, that it has an automatic choke. On any car, a cooling fan wired to run constantly is a signal to check compression and coolant for a past overheat. Timing belt, tensioner and water pump are due every 60,000 miles; with no history, assume they are due now. Expect no factory radio and look for the damage a bad aftermarket install leaves in the harness. The 1988 Si gearbox has its own input shaft spline. Confirm belt mounting matches the model year: door-mounted on 1989-91 base and Si cars, pillar-mounted on all 1988 cars and on HFs through 1989. Trim, cargo covers, window moldings, climate control heads and the sunroof seal are the parts that are gone or expensive.",
 "commonProblems": "The engines themselves are durable. The wear items are the timing belt, tensioner and water pump on a 60,000-mile interval, cooling fan switches, and on carbureted cars a vacuum system complicated enough that many mechanics will not touch it; Hoffman's point is that a fan switch bypassed to run constantly or a removed thermostat usually means someone skipped a cheaper fix, often the radiator cap. PGM-FI on the Si is reliable, but injectors are getting harder to find, and single-use cylinder head bolts are scarce. Rear drums on early cars are commonly converted to Integra discs because the stock hub-and-bearing assembly is hard to source. Struts, upper strut bearings and bushings in stock or near-stock specification are becoming hard to find, which pushes owners toward coil-overs. Stock tire sizes, including the 185/60R14 of the 1986-87 Si, are a problem. Body and trim are the real money: climate control heads crack and trade for $250 and up used, a new sunroof seal is over $300 and a new sunroof panel is close to unobtainable, and window trim, seats, carpets, cargo covers, door panels and mufflers are all on the worn-out list after thirty years. The 1984-85 door panels wrinkle. NHTSA lists five recall campaigns against the 1990 CRX, every one of them for aftermarket replacement lighting missing amber side reflectors and none for Honda's original equipment, which is a fair summary of the car's factory record.",
 "valueTrajectory": "The CRX spent its first twenty-five years as a cheap, light front-drive chassis for the tuner market, which is why so few original cars survive. The collector turn is recent and steep at the top. Grassroots Motorsports cited a super-clean 1988 Si at $15,250 in its December 2018 issue; Hagerty added the Si to its price guide in 2019, reported a 43 percent rise in median number-2 values over the three years to November 2021, listed the second-generation Si in its 2020 Bull Market picks, and cited a 58,000-mile 1987 Si at $22,000 in October 2021. Hagerty Insider then reported from Mecum Kissimmee in January 2025 that values for excellent examples had essentially doubled since 2020, with 10,000-to-25,000-mile cars in the $40,000 range and a 326-mile 1991 Si at $71,500. As of September 2026 the dated evidence available here describes a two-tier market: a small number of original, documented, low-mileage cars, mostly Si, that now price like a real collector car, and a large tier of driven, modified or rusty cars that still trade on condition and mileage in the low five figures or below. The 1986 HF at $23,100 shows the economy car being pulled up behind the Si.",
 "overallConfidence": "medium",
 "sources": [
  {
   "ref": "hagerty-buyers-guide",
   "title": "Your handy 1984-91 Honda CRX buyer's guide",
   "url": "https://www.hagerty.com/media/buying-and-selling/your-handy-1984-91-honda-crx-buyers-guide/",
   "publisher": "Hagerty Media",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Craig Fitzgerald, November 2021. Year-by-year US history with US sales by model year (48,445 / 57,486 / 66,629 / 48,142 / 51,784 / 39,048 / 40,650 / 26,975), 1984 outputs (60 hp/73 lb-ft, 76 hp/84 lb-ft), 1985 Si 91 hp/93 lb-ft at 4,500 rpm and $7,999 sticker, MR2 at $11,194, 1988 Si 105 hp/98 lb-ft and 108 hp for 1989, 0.29 Cd, Car and Driver 9.1 s 0-60 for the 1985 Si, Car Styling interviews (Hagiwara, Kizawa, Economy Fast, HP-Alloy panels), 1989 door-mounted belts, 1990 changes, Hoffman ownership advice (60,000-mile belt, head bolts, vacuum lines, fan switch, plastic panels, rust areas, parts), Hagerty 2021 values and a BaT $22,000 1987 Si."
  },
  {
   "ref": "wikipedia-crx",
   "title": "Honda CR-X",
   "url": "https://en.wikipedia.org/wiki/Honda_CR-X",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Pointer and aggregator: 1984 launch, 1985 HF and spring 1985 Si, US second-generation trims and engine codes (D15B2, D15B6, D16A6), 4-speed automatic on base only, 1990-91 Si four-wheel discs, 1989 belt change, second-generation production table attributed to Golden Era Honda (171,393 total), US curb weights by year attributed to Helm service manual and CRXSi.com, 1.3 EPA highway 52 mpg, wheelbases 86.6 in and 90.6 in, Motor Trend and Road & Track awards, Straman 310 convertibles, nearly 400,000 built worldwide (unsourced on page)."
  },
  {
   "ref": "golden-era-honda",
   "title": "1988-1991 Honda CRX Production Numbers (ED8/ED9)",
   "url": "https://www.goldenerahonda.org/2020/11/29/1988-1991-honda-crx-production-numbers-ed8-ed9/",
   "publisher": "Golden Era Honda",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "November 2020 enthusiast page on USDM second-generation cars: DX and HF are ED8, Si is ED9; automatic DX only; all 1988 cars pillar-mounted belts, 1989 door-mounted except HF; 1990 cosmetic refresh detail; D16A6 105 hp 1988 and 108 hp 1989-91; 1988 Si unique input shaft spline; 1990-91 Si rear discs; HF lighter bumper beams; rust in rear quarters, under rocker covers and Si sunroof panel; 2020 price guidance ($20,000+ clean, $3,000-$10,000 high-mileage); rarest colors. The linked production spreadsheet returns 404, so the numbers themselves are not on the page."
  },
  {
   "ref": "grm-classic-cool",
   "title": "Classic Cool: Honda CRX",
   "url": "https://grassrootsmotorsports.com/articles/classic-cool-honda-crx/",
   "publisher": "Grassroots Motorsports",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "David S. Wallens, December 2018 issue: second-generation sold stateside for 1988-91; HF 56 mpg highway; Road & Track ten best 1988 with quoted road-test line; Si 105 hp and 98 lb-ft, curb weight 2,115 lb, 0-60 about 8.5 s; Randy Pobst 1990 IMSA driver championship; SCCA STS titles; Restoration CRX parts guidance (sunroof seal over $300, climate controls $250-plus, rust on every car); recent sale 1988 Si $15,250 on Bring a Trailer."
  },
  {
   "ref": "motorauthority-100",
   "title": "1988 Honda CRX Si: 100 Cars That Matter",
   "url": "https://www.motorauthority.com/news/1123551_1988-honda-crx-si-100-cars-that-matter",
   "publisher": "Motor Authority",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Sean Szymkowski, July 2019: second-generation Si replaced torsion-beam front and semi-independent rear with double wishbones; 1.6-liter 105 hp via multi-port injection; 2,017 lb; magazines clocked 0-60 in 8.5 seconds; fuel economy approaching 30 mpg."
  },
  {
   "ref": "hagerty-kissimmee-2025",
   "title": "10 Cars That Caught Our Eye at Mecum Kissimmee 2025",
   "url": "https://www.hagerty.com/media/market-trends/hagerty-insider/10-cars-that-caught-our-eye-at-mecum-kissimmee-2025/",
   "publisher": "Hagerty Media",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "January 2025 sale report. Lot L187, 1991 CRX Si, chassis JHMED9368MS013800, teal over gray cloth, 1590cc/108hp, 326 miles, sold for $71,500, described as the most Hagerty had seen paid for a CRX; clean 10K-25K-mile cars in the $40,000 range; excellent-example values essentially doubled since 2020; 1986 CRX HF with 8,100 miles sold for $23,100 at the same sale."
  },
  {
   "ref": "epa-1991-crx-hf",
   "title": "Fuel economy record, 1991 Honda Civic CRX HF, Man 5-spd, 4 cyl, 1.5 L (vehicle 7474)",
   "url": "https://www.fueleconomy.gov/ws/rest/vehicle/7474",
   "publisher": "US EPA and DOE, fueleconomy.gov",
   "sourceType": "government",
   "reliability": "high",
   "notes": "EPA web-service record for the 1991 CRX HF: city08 40, highway08 47, comb08 43 (current-method ratings), unadjusted 54 city / 67 highway, 1.5 L, 4 cylinders, manual 5-speed, two-seater class."
  },
  {
   "ref": "epa-1991-crx-16",
   "title": "Fuel economy record, 1991 Honda Civic CRX, Man 5-spd, 4 cyl, 1.6 L (vehicle 7473)",
   "url": "https://www.fueleconomy.gov/ws/rest/vehicle/7473",
   "publisher": "US EPA and DOE, fueleconomy.gov",
   "sourceType": "government",
   "reliability": "high",
   "notes": "EPA web-service record for the 1991 1.6-liter CRX (the Si engine): city08 24, highway08 30, comb08 27, front-wheel drive, regular gasoline, two-seater class. Confirms the 1.6 was a 1991 US model."
  },
  {
   "ref": "epa-1991-crx-15",
   "title": "Fuel economy record, 1991 Honda Civic CRX, Man 5-spd, 4 cyl, 1.5 L (vehicle 7472)",
   "url": "https://www.fueleconomy.gov/ws/rest/vehicle/7472",
   "publisher": "US EPA and DOE, fueleconomy.gov",
   "sourceType": "government",
   "reliability": "high",
   "notes": "EPA web-service record for the 1991 1.5-liter manual CRX (base car): city08 27, highway08 33, comb08 29."
  },
  {
   "ref": "epa-1991-honda-models",
   "title": "Model menu, 1991 Honda (fueleconomy.gov web service)",
   "url": "https://www.fueleconomy.gov/ws/rest/vehicle/menu/model?year=1991&make=Honda",
   "publisher": "US EPA and DOE, fueleconomy.gov",
   "sourceType": "government",
   "reliability": "high",
   "notes": "Lists the 1991 Honda model lines in the federal database: Accord, Accord Wagon, Civic, Civic CRX, Civic CRX HF, Civic Wagon, Civic Wagon 4WD, Prelude. Establishes that the HF was rated as a separate model line and that the CRX was still a 1991 US model."
  },
  {
   "ref": "nhtsa-recalls-1990",
   "title": "NHTSA recalls by vehicle: Honda CRX, model year 1990",
   "url": "https://api.nhtsa.gov/recalls/recallsByVehicle?make=honda&model=crx&modelYear=1990",
   "publisher": "National Highway Traffic Safety Administration",
   "sourceType": "government",
   "reliability": "high",
   "notes": "Returns Count 5: campaigns 08E050000 (K2 Motor), 09E012000 (Sabersport), 06E026000 (Pro-A Motors), 06E049000 (CK Motorsport) and 06E060000 (AAI Motorsports), all aftermarket replacement lamps lacking amber side reflectors under FMVSS 108; each notes it has no relation to original equipment installed by Honda."
  },
  {
   "ref": "conceptcarz-1988",
   "title": "1988 Honda CRX",
   "url": "https://www.conceptcarz.com/z29671/honda-crx.aspx",
   "publisher": "conceptcarz.com",
   "sourceType": "specialist",
   "reliability": "low",
   "notes": "Aggregator page with visible errors (says production began in 1973). Used only for its 1988 US price statements, which it gives inconsistently as $8,630 and $8,640 for the base car and $10,200 for the Si, and for its 8.2-second 0-60 and 62 hp HF figures, both single-sourced and low-grade."
  },
  {
   "ref": "hondaswap-what-to-look-for",
   "title": "What to look for in a CRX",
   "url": "https://hondaswap.com/threads/what-to-look-for-in-a-crx.72080/",
   "publisher": "HondaSwap.com forum",
   "sourceType": "club-forum",
   "reliability": "low",
   "notes": "Owner thread: rust in rear quarters around the rear of the wheel wells, inside and around the Si sunroof, along the lower plastic and door bottoms, at the hatch rails and top corners causing cabin leaks, and around the windshield; 1988 HF lightest and 1991 Si heaviest; Si rear discs on 90-91. Forum figures labeled as such."
  }
 ],
 "claims": [
  {
   "section": "history",
   "claimText": "Honda introduced the CRX for the 1984 model year as a two-seat hatchback sharing its drivetrain with the third-generation Civic; in Japan it launched on June 23, 1983 as the Ballade Sports CR-X, and North America dropped the hyphen from the name.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["wikipedia-crx", "hagerty-buyers-guide"],
   "evidence": [
    { "ref": "wikipedia-crx", "quote": "In 1983 for the 1984 model year, Honda introduced an all-new two-seater that shared the drivetrain with the third-generation Civic" },
    { "ref": "hagerty-buyers-guide", "quote": "The Japanese home market used the hyphenated “CR-X” name, while we did away with the punctuation mark in North America" }
   ]
  },
  {
   "section": "history",
   "claimText": "The CRX program came out of a felt image crisis at Honda R&D over the aging second-generation Civic; R&D Managing Director Hiroshi Kizawa set the brief in the two words Economy Fast, and roughly 40 percent of the first-generation exterior panels were HP-Alloy plastic molded at Suzuka.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["hagerty-buyers-guide"],
   "evidence": [
    { "ref": "hagerty-buyers-guide", "quote": "Kizawa’s brief for the CRX distilled those two concepts into two words: “Economy Fast,” a brilliant twist on MG’s “Safety Fast” slogan" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 1984 US lineup was a 1.3-liter carbureted car with 60 hp and 73 lb-ft, five-speed only, and a 1.5-liter car with 76 hp and 84 lb-ft that could also be had with a three-speed automatic; the 1.3 carried a highway fuel economy rating that Hagerty gives as 51 mpg and Wikipedia, citing EPA data, as 52 mpg.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["hagerty-buyers-guide", "wikipedia-crx"],
   "conflictNote": "Hagerty states the 1.3 offered 51 mpg with the five-speed. Wikipedia states an EPA highway rating of 52 miles per US gallon in 1984, citing fueleconomy.gov. The EPA record for 1984 was not fetched in this session, so the one-mpg difference is not resolved here.",
   "evidence": [
    { "ref": "hagerty-buyers-guide", "quote": "The 1.3-liter carbureted four in the base car delivered a sleepy 60 hp and 73 lb-ft of torque. The 1.5-liter provided 76 hp and 84 lb-ft" },
    { "ref": "wikipedia-crx", "quote": "had an EPA highway mileage rating of 52 miles per U.S. gallon" }
   ]
  },
  {
   "section": "specs",
   "claimText": "Published curb weights for the 1984 CRX 1.5 disagree: Hagerty gives 1,713 or 1,803 pounds for the two 1984 cars, while Wikipedia's table, attributed to the Helm service manual, gives 1,819 lb for the 1984 CRX and 1,713 lb for the 1985 HF.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["hagerty-buyers-guide", "wikipedia-crx"],
   "conflictNote": "Hagerty: 1,713 or 1,803 pounds for the 1984 CRX and CRX 1.5. Wikipedia US curb weight table: 1984 CRX 1,819 lb, 1985 CRX 1,819 lb, 1985 HF 1,713 lb, 1985 Si 1,953 lb. The 16 lb difference on the 1.5 is not explained by either source and is left unresolved.",
   "evidence": [
    { "ref": "hagerty-buyers-guide", "quote": "at a featherweight 1713 or 1803 pounds, you could drive either car flat-out and have a blast" },
    { "ref": "wikipedia-crx", "quote": "1985 1,819 lb (825 kg) 1,713 lb (777 kg) 1,953 lb (886 kg)" }
   ]
  },
  {
   "section": "history",
   "claimText": "For 1985 the economy model became the HF, using a 1.5-liter aluminum block with the older two-valve CVCC head, and in spring 1985 Honda introduced the fuel-injected Si with 91 hp and 93 lb-ft at 4,500 rpm, a four percent shorter final drive, a power sunroof, alloy wheels, rear wiper and a ducktail spoiler.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["wikipedia-crx", "hagerty-buyers-guide"],
   "evidence": [
    { "ref": "wikipedia-crx", "quote": "For 1985, Honda North America replaced the economy model with an HF (high fuel) model featuring a 1.5-liter engine which uses an aluminum block but the 1984 CVCC cylinder head" },
    { "ref": "hagerty-buyers-guide", "quote": "Sequential port fuel injection, to be specific, which increased power significantly to 91 hp and 93 lb-ft of torque at 4500 rpm" }
   ]
  },
  {
   "section": "history",
   "claimText": "The 1985 CRX Si carried a sticker price of $7,999, more than a thousand dollars above the standard 1.5-liter CRX, at a time when a Toyota MR2 listed at $11,194; no second source for a first-generation US price was reachable in this session.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["hagerty-buyers-guide"],
   "evidence": [
    { "ref": "hagerty-buyers-guide", "quote": "The Si stickered for $7999, more than a thousand bucks above a CRX with the standard 1.5" }
   ]
  },
  {
   "section": "history",
   "claimText": "The second-generation CRX was redesigned for the 1988 model year on a wheelbase four inches longer, replacing the torsion-bar front and beam rear axle with double wishbone suspension at all four corners.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["wikipedia-crx", "hagerty-buyers-guide", "motorauthority-100", "golden-era-honda"],
   "evidence": [
    { "ref": "wikipedia-crx", "quote": "Honda abandoned the original torsion bar in the front and beam axle with trailing link in the rear in favor of a 4-wheel double wishbone suspension" },
    { "ref": "hagerty-buyers-guide", "quote": "Replacing them was a fully independent double wishbone suspension at all four corners" },
    { "ref": "motorauthority-100", "quote": "Gone was the torsion-beam front suspension and semi-independent rear suspension, both traded for full independent double wishbones" },
    { "ref": "golden-era-honda", "quote": "all models received double wishbone suspension with geometry that was shared with numerous other Honda models through the year 2000" }
   ]
  },
  {
   "section": "specs",
   "claimText": "In the US the 1988-91 CRX came in three trims with three engines: the base car with the 16-valve dual-point-injected D15B2, the HF with the 8-valve multi-point-injected D15B6, and the Si with the 1,590 cc 16-valve multi-point-injected D16A6; the base car alone could be had with a 4-speed automatic, and the HF and Si were five-speed only.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["wikipedia-crx", "hagerty-buyers-guide", "golden-era-honda"],
   "evidence": [
    { "ref": "wikipedia-crx", "quote": "The base model was available with either a 5-speed manual transmission or a 4-speed automatic transmission while the HF and Si only offered a 5-speed manual transmission" },
    { "ref": "hagerty-buyers-guide", "quote": "The Si received a new 16-valve 1590-cc D16A6 mill and MPFI" },
    { "ref": "golden-era-honda", "quote": "The automatic transmission was only available in the DX trim level" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 1988 CRX Si was rated at 105 hp and 98 lb-ft, rising to 108 hp for 1989 through 1991 from a revised camshaft.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["hagerty-buyers-guide", "golden-era-honda", "grm-classic-cool", "hagerty-kissimmee-2025"],
   "evidence": [
    { "ref": "hagerty-buyers-guide", "quote": "For the Si, a new cam profile allowed horsepower to increase marginally from 105 hp to 108 hp" },
    { "ref": "golden-era-honda", "quote": "the D16A6, rated at 105 HP in 1988, and later 108 HP in 89 through 91" },
    { "ref": "grm-classic-cool", "quote": "four-cylinder engine produced 105 horsepower along with 98 lb.-ft. of torque" },
    { "ref": "hagerty-kissimmee-2025", "quote": "Equipment: 1590cc/108hp I-4, five-speed, alloy wheels, power steering, air conditioning, sunroof, factory cassette" }
   ]
  },
  {
   "section": "specs",
   "claimText": "Sources disagree on the second-generation Si curb weight: Motor Authority and Wikipedia's table both give 2,017 lb for the 1988 Si, while Grassroots Motorsports gives 2,115 lb without a model year; Wikipedia's table also lists 2,138 lb for 1989 and 2,174 lb for 1990-91.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["motorauthority-100", "wikipedia-crx", "grm-classic-cool"],
   "conflictNote": "Motor Authority: 2,017 pounds. Wikipedia (attributed to CRXSi.com): 1988 Si 2,017 lb, 1989 Si 2,138 lb, 1990-1991 Si 2,174 lb. Grassroots Motorsports: curb weight 2,115 pounds, year unstated. The GRM figure matches none of the year-by-year figures and no source consulted reconciles them.",
   "evidence": [
    { "ref": "motorauthority-100", "quote": "just enough power for a car that tipped the scales at 2,017 pounds" },
    { "ref": "wikipedia-crx", "quote": "1,922 lb (872 kg) 1,819 lb (825 kg) 2,017 lb (915 kg)" },
    { "ref": "grm-classic-cool", "quote": "Curb weight was just 2115 pounds, yielding a zero-to-60 time of about 8.5 seconds" }
   ]
  },
  {
   "section": "specs",
   "claimText": "Period magazines timed the 1988 CRX Si from 0 to 60 mph in about 8.5 seconds, more than half a second quicker than Car and Driver's 9.1-second run in the 1985 Si; a low-reliability aggregator quotes 8.2 seconds.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["grm-classic-cool", "motorauthority-100", "hagerty-buyers-guide", "conceptcarz-1988"],
   "evidence": [
    { "ref": "grm-classic-cool", "quote": "yielding a zero-to-60 time of about 8.5 seconds" },
    { "ref": "motorauthority-100", "quote": "enthusiast magazines clocked a 0-60 mph time of 8.5 seconds" },
    { "ref": "hagerty-buyers-guide", "quote": "Car and Driver loved the 1985 CRX Si’s 9.1-second dash to 60, but in 1988, that time dropped by more than half a second" },
    { "ref": "conceptcarz-1988", "quote": "Zero-to-sixty mph took about 8.2 seconds" }
   ]
  },
  {
   "section": "history",
   "claimText": "Federal passive-restraint rules moved the shoulder-belt anchors to the doors on 1989 base and Si cars while the HF kept pillar-mounted belts until 1990; the 1990 refresh revised bumpers, lights, fenders and moldings and gave the Si four-wheel disc brakes and new 14-inch alloy wheels.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["golden-era-honda", "hagerty-buyers-guide", "wikipedia-crx"],
   "evidence": [
    { "ref": "golden-era-honda", "quote": "Starting in 1989, all models except the HF trim moved to door mounted seat belts" },
    { "ref": "hagerty-buyers-guide", "quote": "Federal mandates for passive safety restraints meant that the top anchor for the shoulder belts were now mounted to the door" },
    { "ref": "wikipedia-crx", "quote": "The 90-91 Si models had 4-wheel disc brakes instead of front disc and rear drum" }
   ]
  },
  {
   "section": "history",
   "claimText": "The CRX won Motor Trend's Import Car of the Year in 1984 and again as the Si in 1988, when Road & Track also placed the Si on its ten best cars list.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["wikipedia-crx", "hagerty-buyers-guide", "grm-classic-cool"],
   "evidence": [
    { "ref": "wikipedia-crx", "quote": "1988: The Honda CRX Si is named Motor Trend 's \"Import Car of the Year\"" },
    { "ref": "hagerty-buyers-guide", "quote": "All of the revisions added up to a Motor Trend Import Car of the Year award in 1988" },
    { "ref": "grm-classic-cool", "quote": "included this redesigned CRX Si on their list of the 10 best cars available for 1988" }
   ]
  },
  {
   "section": "production",
   "claimText": "No factory production figure for the US CRX is published by any source consulted; Hagerty's US sales by model year sum to 158,457 second-generation cars (51,784, 39,048, 40,650 and 26,975 for 1988-91), while the production table Wikipedia reproduces from Golden Era Honda totals 171,393 (49,162, 43,549, 38,413 and 40,269), and the two are not reconciled.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["hagerty-buyers-guide", "wikipedia-crx", "golden-era-honda"],
   "conflictNote": "Hagerty (US sales): 1988 51,784; 1989 39,048; 1990 40,650; 1991 26,975. Wikipedia table attributed to Golden Era Honda (production by trim): 1988 49,162; 1989 43,549; 1990 38,413; 1991 40,269; total 171,393 (HF 38,018, CRX 68,813, Si 64,562). Sales and production are different measures and neither source states its basis; the Golden Era Honda spreadsheet itself is no longer online. Unresolved, so productionTotal is null.",
   "evidence": [
    { "ref": "hagerty-buyers-guide", "quote": "For the final year of sales in the U.S., Honda sold 26,975 CRX models, the lowest number in the car’s history" },
    { "ref": "wikipedia-crx", "quote": "Total 49,162 43,549 38,413 40,269 171,393" },
    { "ref": "golden-era-honda", "quote": "Production numbers are outlined below. The rarest and most desirable models appear to be early blade silver CRX Si" }
   ]
  },
  {
   "section": "production",
   "claimText": "Hagerty records first-generation US sales of 48,445 in 1984, 57,486 in 1985, 66,629 in 1986 (the model's high-water mark) and 48,142 in 1987; no source gives a trim split, so the number of 1985-87 Si cars is unknown.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["hagerty-buyers-guide"],
   "evidence": [
    { "ref": "hagerty-buyers-guide", "quote": "For 1986, Honda sold 66,629 CRX models, a high-water mark for the model that the manufacturer would never surpass" }
   ]
  },
  {
   "section": "production",
   "claimText": "The R. Straman Company of Costa Mesa, California converted 310 first-generation CRXs into convertibles between 1984 and 1987, and a Straman CRX Spyder appeared on the cover of Road & Track in July 1984.",
   "confidence": "low",
   "status": "verified",
   "sourceRefs": ["wikipedia-crx"],
   "evidence": [
    { "ref": "wikipedia-crx", "quote": "The R. Straman Company of Costa Mesa, CA converted 310 Honda CRXs into convertibles from 1984 until 1987" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 1991 CRX HF is rated by the EPA under current methodology at 40 mpg city, 47 highway and 43 combined, and the federal database lists Civic CRX HF as a model line separate from Civic CRX.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["epa-1991-crx-hf", "epa-1991-honda-models"],
   "evidence": [
    { "ref": "epa-1991-crx-hf", "quote": "city08 40 city08 city08U 0.0 city08U cityA08 0 cityA08 cityA08U 0.0 cityA08U" },
    { "ref": "epa-1991-honda-models", "quote": "Civic CRX text value Civic CRX HF text value Civic Wagon" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 1991 CRX with the 1.6-liter engine and five-speed is rated 24 mpg city, 30 highway and 27 combined under current EPA methodology, and the 1.5-liter five-speed base car 27, 33 and 29; both are classed as two-seaters on regular gasoline.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["epa-1991-crx-16", "epa-1991-crx-15"],
   "evidence": [
    { "ref": "epa-1991-crx-16", "quote": "city08 24 city08 city08U 0.0 city08U cityA08 0 cityA08 cityA08U 0.0 cityA08U" },
    { "ref": "epa-1991-crx-15", "quote": "city08 27 city08 city08U 0.0 city08U cityA08 0 cityA08 cityA08U 0.0 cityA08U" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The second-generation body recorded a 0.29 drag coefficient, and no CRX left the factory with a radio, speakers or antenna; all four head units in the Honda catalog were dealer-installed.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["hagerty-buyers-guide", "wikipedia-crx"],
   "evidence": [
    { "ref": "hagerty-buyers-guide", "quote": "no CRX came from the factory with a radio, speakers, or antenna, but they all came wired for the radio and four speakers" },
    { "ref": "wikipedia-crx", "quote": "Air conditioning as well as the audio system (radio, speakers, and antenna) were dealer-installed options on all models" }
   ]
  },
  {
   "section": "history",
   "claimText": "For 1988 a low-reliability aggregator gives US pricing of $8,630 (elsewhere on the same page $8,640) for the base CRX and $10,200 for the Si; no higher-grade source for 1988-91 US list prices was reachable in this session.",
   "confidence": "low",
   "status": "verified",
   "sourceRefs": ["conceptcarz-1988"],
   "evidence": [
    { "ref": "conceptcarz-1988", "quote": "Pricing for the CRX began at $8,630. The Si trim level cost $10,200" }
   ]
  },
  {
   "section": "market",
   "claimText": "At Mecum Kissimmee in January 2025 a 1991 CRX Si with 326 miles sold for $71,500, which Hagerty Insider called the most it had ever seen anyone pay for a CRX, while clean cars with 10,000 to 25,000 miles had been selling in the $40,000 range and a 1986 CRX HF with 8,100 miles made $23,100 at the same sale.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["hagerty-kissimmee-2025"],
   "evidence": [
    { "ref": "hagerty-kissimmee-2025", "quote": "a handful of other clean ones with 10K-25K odometer readings (which is still crazy-low for these cars) have sold in the $40,000 range" }
   ]
  },
  {
   "section": "market",
   "claimText": "Earlier dated reference points show the rise: a super-clean 1988 Si at $15,250 on Bring a Trailer cited by Grassroots Motorsports in its December 2018 issue, and in November 2021 Hagerty cited a 58,000-mile 1987 Si at $22,000 and put number-2-condition values around $17,000 for a first-generation car and $18,000 to $19,500 for a second-generation car.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["grm-classic-cool", "hagerty-buyers-guide"],
   "evidence": [
    { "ref": "grm-classic-cool", "quote": "model: 1988 Honda CRX Si price: $15,250 condition: super-clean from: Bring a Trailer" },
    { "ref": "hagerty-buyers-guide", "quote": "the value of a #2-condition, first-generation CRX is around the $17,000 mark. Second generation cars in the same condition hit $18,000 in the earliest years" }
   ]
  },
  {
   "section": "market",
   "claimText": "Golden Era Honda wrote in November 2020 that clean original low-mileage second-generation cars command in excess of $20,000 and that a rust-free high-mileage original costs $3,000 to $10,000, and that the rarest Si combinations are early Blade Silver, Barbados Yellow and the 1991-only Tahitian Green Pearl.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["golden-era-honda"],
   "evidence": [
    { "ref": "golden-era-honda", "quote": "Expect to pay between $3,000 and $10,000 for a well sorted, rust free high mileage original" }
   ]
  },
  {
   "section": "problems",
   "claimText": "Rust concentrates in the rear quarter panels behind the wheel wells, under the plastic rocker covers, in and around the Si sunroof, at the door bottoms, the hatch rails and corners, and the windshield surround; Grassroots Motorsports found rust on every car during its search.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["golden-era-honda", "hondaswap-what-to-look-for", "grm-classic-cool", "hagerty-buyers-guide"],
   "evidence": [
    { "ref": "golden-era-honda", "quote": "many CRX were prone to rust, particularly in the rear quarter panels, underneath the plastic rocker panel covers, and in the sunroof panel on the Si trim models" },
    { "ref": "hondaswap-what-to-look-for", "quote": "Check for rust on the rear quarter panels around the rear of the wheel wells" },
    { "ref": "grm-classic-cool", "quote": "During our search, every CRX had varying degrees of rust" },
    { "ref": "hagerty-buyers-guide", "quote": "Rust issues are largely dependent on the car’s geographic location and lie in typical areas (wheel arches, sunroof drains) on the car" }
   ]
  },
  {
   "section": "problems",
   "claimText": "Timing belt, tensioner and water pump are due every 60,000 miles; cylinder head bolts were single-use and are hard to find; carbureted cars carry a complicated vacuum-line system; PGM-FI is reliable but injectors are getting scarce; a cooling fan switch bypassed to run constantly should prompt a compression and coolant check for a past overheat.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["hagerty-buyers-guide"],
   "evidence": [
    { "ref": "hagerty-buyers-guide", "quote": "Timing belt/tensioner/water pump changes are due every 60,000 miles, but if you find a car with no service history, just do this right away" }
   ]
  },
  {
   "section": "problems",
   "claimText": "Body and trim parts are the expensive gaps: climate control heads crack and sell used for $250 and up, a new sunroof seal costs over $300 and a new factory sunroof is nearly impossible to find, while first-generation plastic fenders and header panels go brittle and crack and are reproduced only in carbon fiber.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["grm-classic-cool", "hagerty-buyers-guide"],
   "evidence": [
    { "ref": "grm-classic-cool", "quote": "finding a new OEM sunroof is nearly impossible, and the seal itself has a market price of over $300" },
    { "ref": "hagerty-buyers-guide", "quote": "The panels become brittle and can crack just from the stress of driving or a mechanic leaning on a fender" }
   ]
  },
  {
   "section": "problems",
   "claimText": "NHTSA lists five recall campaigns against the 1990 Honda CRX, all of them for aftermarket replacement lamps lacking amber side reflectors and none relating to original equipment installed by Honda.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["nhtsa-recalls-1990"],
   "evidence": [
    { "ref": "nhtsa-recalls-1990", "quote": "THIS RECALL ONLY PERTAINS TO AFTERMARKET REPLACEMENT EQUIPMENT AND HAS NO RELATION TO ANY ORIGINAL EQUIPMENT INSTALLED ON VEHICLES MANUFACTURED BY HONDA" }
   ]
  },
  {
   "section": "problems",
   "claimText": "The 1988 Si transmission has a unique input shaft spline strengthened for 1989, all HF models use lighter and weaker bumper impact beams, and amateur engine swaps are common enough that finding an original, unmolested car is described as extremely difficult.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["golden-era-honda", "hagerty-buyers-guide"],
   "evidence": [
    { "ref": "golden-era-honda", "quote": "1988 Si transmissions have a unique input shaft spline, which was beefed up in 1989 through 1991" },
    { "ref": "hagerty-buyers-guide", "quote": "too many people seem to feel that no ’80s Honda should keep its original engine, and amateur swaps are common" }
   ]
  },
  {
   "section": "history",
   "claimText": "Randy Pobst drove a CRX to the 1990 IMSA driver championship, his first professional road racing title, and CRXs have since taken SCCA Street Touring Sport autocross championships.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["grm-classic-cool"],
   "evidence": [
    { "ref": "grm-classic-cool", "quote": "Randy Pobst, who ran one to a 1990 IMSA driver championship" }
   ]
  }
 ]
};
