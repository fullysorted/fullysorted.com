/**
 * Researched model draft - Jeep CJ-5 and CJ-7, AMC era (1972-1986).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedJeepCj = {
 "slug": "jeep/cj-5-cj-7",
 "make": "Jeep",
 "model": "CJ-5 and CJ-7",
 "generation": "AMC era, 1972-1986",
 "generationCode": null,
 "trim": null,
 "yearStart": 1972,
 "yearEnd": 1986,
 "bodyStyles": [
  "2-door open-body utility, folding windshield, soft top or removable hardtop (CJ-5, 83.5 in wheelbase)",
  "2-door open-body utility, soft top or removable hardtop (CJ-7, 93.5 in wheelbase, 1976-1986)"
 ],
 "engines": [
  "3,802 cc (232 cu in) AMC straight-six, single-barrel carburetor, base engine on the CJ-5 from 1972; output not documented in the sources consulted",
  "4,235 cc (258 cu in) AMC straight-six, two-barrel carburetor; 110 hp in 1980 per a specialist year guide, 102 hp in 1986 per a period-price source",
  "4,981 cc (304 cu in) AMC V8, two-barrel carburetor, offered 1972-1981; output disputed between 150 hp at 4,200 rpm and 125 hp with just under 220 lb-ft depending on source",
  "2,474 cc (151 cu in) GM 'Iron Duke' four, standard on the CJ-5 1980-1983 under the Hurricane name; 82 hp at 4,000 rpm per a specialist history",
  "2,464 cc (150 cu in) AMC four with electronic fuel injection, standard on the 1986 CJ-7; 86 hp per a period-price source",
  "2,369 cc (145 cu in) Isuzu C240 diesel, 80 hp, 1980-1982, export only, never sold new in the US"
 ],
 "productionTotal": null,
 "productionNotes": "This page covers two models, so no single total is asserted. For the CJ-7 the sources agree: Wikipedia states 379,299 built during eleven years of production, a CJ-8 owners' forum post repeats 379,299 over 11 years starting 1976, The Jeep Database rounds it to 379,000, and a restoration site says close to 400,000. Nobody consulted here disagrees, but the only source that gives the exact figure with a citation is Wikipedia, so it is carried as a well-supported figure rather than a manufacturer one; AMC's own annual counts were not found on any page fetched for this article. A single 1986 model-year figure of 25,929 CJ-7s comes from one source and is not corroborated. For the CJ-5 the whole-run figure of 603,303 (1954-1983) is Wikipedia's; the restoration site says over 600,000, which agrees. No source consulted breaks the CJ-5 total down to the AMC years of 1972-1983, so an AMC-era CJ-5 count is not stated. Limited editions are better documented: the 1982 Jamboree Commemorative Edition ran to 630 numbered units (560 Topaz Gold Metallic, 70 Olympic White) against a planned 2,500, per Wikipedia and a retrospective review that agree. Wikipedia alone gives 2,500 for the 1982-1983 Limited; a single retrospective estimates the 1980-only Golden Hawk at under 200, and that is an estimate. On US pricing: one source documents a 1986 base price of $7,500 with the 258 six a $361 option, the Jeep heritage site puts the Golden Eagle package $200 above Renegade, and a retrospective prices the 1982 Jamboree package at $1,332 to $2,162. No verified US list price for the 1976-1985 model years was found on any page fetched, and none is invented here.",
 "notableTrims": [
  {
   "name": "CJ-5 Renegade (1972-1983)",
   "note": "The performance package on the short-wheelbase car: the 304 V8, a stouter drivetrain, alloy wheels and a Trac-Lok limited-slip rear axle per the Jeep heritage site. The 1972-1978 V8 cars are the ones a driver wants; the CJ-5 lost the V8 to the GM four as base engine for 1980."
  },
  {
   "name": "CJ-7 Renegade (1976-1986)",
   "note": "Same recipe on the 93.5 in wheelbase, and the volume collector configuration today. The 304 was gone after 1981, so a 1982-1986 Renegade is a 258 six or a four; the tape stripes carry on regardless."
  },
  {
   "name": "Golden Eagle (1977-1983)",
   "note": "A $200 step above Renegade per the Jeep heritage site, with the hood eagle decal and gold-tone wheels. Hagerty's market piece names the 1977-1980 V8 Golden Eagle as the most valuable CJ in its data."
  },
  {
   "name": "Golden Hawk (1980)",
   "note": "One-year variation on the Golden Eagle theme. A retrospective review estimates production at under 200; no factory count was found, so treat the number as an estimate."
  },
  {
   "name": "Laredo (1980-1986)",
   "note": "The chrome-and-leather package: chrome grille, bumpers and wheels, high-back seats, Laredo lettering. Hagerty's most expensive CJ-7 auction result through 2018 was a 1981 Laredo at $45,100."
  },
  {
   "name": "Jamboree Commemorative Edition (1982)",
   "note": "630 numbered cars for the thirtieth anniversary of the Rubicon Trail, 560 in Topaz Gold Metallic and 70 in Olympic White, against a planned 2,500. The package listed at $1,332 and could reach $2,162 with options. The one CJ-7 with a documented build number."
  },
  {
   "name": "Limited (1982-1983)",
   "note": "A luxury-trim CJ-7 with monochrome paint and a carpeted, color-keyed interior. Wikipedia alone gives 2,500 built; no second source was found."
  }
 ],
 "specs": {
  "layout": "Front engine, longitudinal, part-time four-wheel drive with two-speed transfer case; full-time Quadra-Trac optional on automatic CJ-7s",
  "chassis": "Ladder frame with six crossmembers from 1972, open steel body tub, leaf springs at both ends, solid axles",
  "wheelbase": "CJ-5 83.5 in (2,121 mm); CJ-7 93.5 in (2,375 mm) per DrivingLine and a retrospective review, 93.3 in (2,370 mm) per The Jeep Database and the Wikipedia infobox",
  "engine": "AMC 232 and 258 straight-sixes, AMC 304 V8 (to 1981), GM 151 four (CJ-5 1980-1983), AMC 150 four with EFI (1986); Isuzu diesel export only",
  "power": "258 six: 110 hp (1980) to 102 hp (1986); 304 V8: 150 hp at 4,200 rpm or 125 hp depending on source; GM 151: 82 hp at 4,000 rpm; AMC 150: 86 hp",
  "torque": "304 V8 just under 220 lb-ft per DrivingLine; six-cylinder and four-cylinder torque figures not documented in the sources consulted",
  "transmission": "Three-, four- and five-speed manuals; automatic available on the CJ-7 from 1976, which is why the wheelbase grew",
  "transfer_case": "Two-speed part-time case standard; Quadra-Trac full-time optional with the automatic; Dana 300 on all 1980 and later CJ-7s",
  "axles": "Dana 30 front; AMC 20 two-piece-shaft rear; wide-track axles on 1982-1986 cars; Dana 44 rear in the final model year per DrivingLine",
  "weight": "CJ-7 curb weight 2,710 lb per The Jeep Database, a single source; configuration not stated",
  "acceleration": "No 0-60 mph figure was found in the sources consulted; none is asserted",
  "fuel_economy": "1986 258 six with five-speed rated 17 mpg city, 21 mpg highway on the period EPA method, per one source",
  "brakes": "Drum front and rear on early CJ-5; front discs on the CJ-7",
  "body": "Open steel tub, folding windshield, removable doors, soft top or optional fiberglass hardtop",
  "seating": "Two front buckets, optional rear bench",
  "assembly": "Toledo, Ohio"
 },
 "summary": "The CJ-5 and CJ-7 are the civilian Jeeps as American Motors built them between the 1970 purchase of Kaiser Jeep and the arrival of the Wrangler for 1987. AMC put its own straight-sixes and 304 V8 into the CJ-5 for 1972 and stretched the frame to take them, then for 1976 added the CJ-7, ten inches longer in the wheelbase so an automatic transmission and the full-time Quadra-Trac system would fit, the first major change to the design in twenty years. The two ran side by side until the CJ-5 was dropped after 1983, its reputation damaged by a December 1980 60 Minutes rollover segment, and the CJ-7 carried on to 1986 with roughly 379,000 built. Renegade, Golden Eagle, Laredo and the 630-unit 1982 Jamboree edition are the packages the market sorts by; the 304 V8 disappeared after 1981, so the later cars are sixes and fours. As of September 2026 the classic.com CJ-7 benchmark sits near $21,000 on a falling trend, with V8 Renegades and clean Laredos trading well above it and rough cars in single figures.",
 "history": "## What AMC Bought and Why It Mattered\n\nKaiser Jeep sold the company to American Motors in 1970 for approximately $75 million, per the Jeep heritage site. AMC was the smallest of the domestic automakers and had no truck or four-wheel-drive line; Jeep gave it one, along with a Toledo plant and a vehicle that had not changed in any fundamental way since the 1950s. The obvious first move was to stop buying engines from outside. For 1972 the Willys-derived four-cylinder base engine was replaced by AMC's Torque Command straight-sixes, and the frame gained six crossmembers and roughly three inches of length to take the 258 six and the 304 V8. Beginning in 1973, per Jeep, all CJs came with AMC-built engines. The same year AMC introduced Quadra-Trac, described by Jeep as the first automatic full-time four-wheel-drive system, initially on the full-size Wagoneer and Cherokee.\n\n## Ten Inches for an Automatic\n\nThe CJ-5's 83.5 in wheelbase would not take an automatic transmission, and buyers in the mid-1970s wanted one. For the 1976 model year AMC added the CJ-7, which the Jeep heritage site calls the first major change in Jeep design in twenty years: the wheelbase went to 93.5 in, the rear wheel openings became squared, the doors could be steel and could be removed, and a fiberglass hardtop was offered. The longer chassis carried the automatic and the optional Quadra-Trac full-time system alongside the standard part-time two-speed transfer case. The Cars and Coffee detail is the reason for the stretch: the extra length was not for people or cargo but for a gearbox, and the CJ-5 kept selling beside it for another seven years because plenty of buyers did not want the automatic anyway.\n\n## Packages, Stripes and the V8 Years\n\nAMC sold the CJ on packages. Renegade, from 1972, typically brought the 304 V8, a stouter drivetrain, alloy wheels and a Trac-Lok limited-slip rear axle. Golden Eagle, from 1977, was a $200 step above Renegade with the hood eagle. Laredo arrived for 1980 with chrome and high-back seats and ran to the end. The 304 was offered from 1972 through 1981 and its output is not agreed: one source gives 150 net hp at 4,200 rpm for 1972-1978, Hagerty repeats 150 hp, and DrivingLine says 125 hp with just under 220 lb-ft. No source consulted reconciles those, though tightening emissions rules over the same years are the obvious suspect. From 1980 the CJ-5's base engine was a GM Iron Duke four sold under the old Hurricane name, at 82 hp, and all 1980 and later CJ-7s got the gear-driven Dana 300 transfer case. An Isuzu C240 diesel was built in Toledo from 1980 to 1982 for export only; no US buyer got one new.\n\n## 60 Minutes and the End of the CJ-5\n\nIn December 1980 CBS's 60 Minutes ran a segment in which the Insurance Institute for Highway Safety staged a demonstration to show that the CJ-5 was apt to roll over in routine road circumstances at relatively low speeds. Wikipedia attributes the demise of the CJ-5 to that broadcast; the restoration histories put it more simply, that the CJ-7 was growing every year and demand for the smaller car fell away until it was discontinued in 1983. Both are probably true. For 1982 both models got wide-track axles, a Dana 30 front and a two-piece AMC 20 rear, and the 1982 Jamboree Commemorative Edition marked thirty years of the Rubicon Trail with 630 numbered cars against a planned 2,500. A 2,500-unit Limited luxury model followed for 1982-1983.\n\n## The Last CJ\n\nThe 1986 CJ-7 was the final version of the civilian Jeep line that began in 1945. Its standard engine was a fuel-injected AMC 150 four of 86 hp with a four-speed manual and part-time four-wheel drive; the 258 six, now 102 hp with a two-barrel carburetor, was a $361 option on a $7,500 base price. AMC built 25,929 of them in the model year per one source. The Wrangler, the YJ, was released in 1986 for the 1987 model year with a new frame, leaf springs still, and the square headlights that Jeep people argued about for a decade. Chrysler bought AMC the following year. The CJ-7's eleven model years and roughly 379,000 units make it the common AMC-era Jeep; the CJ-5 total of about 603,000 spans 1954 to 1983 and includes the Willys and Kaiser cars, so the AMC-era share is not separately documented.",
 "marketNotes": "As of September 2026, classic.com's Jeep CJ-7 market benchmark stands at $21,277 on a downward trend, with an average sale of $22,036 and a lowest recorded sale of $3,300 for a 1982 car in March 2025. The year pages carry the same benchmark: $21,286 for 1979 and $21,277 for 1986, both trending down. Individual results as of September 2026 show how far the spread runs. Among 1986 cars, a Renegade sold for $39,500 on Bring a Trailer in August 2026 with 88,000 miles shown, a Laredo made $28,600 at Mecum in July 2026, another Laredo $17,000 at GAA the same month, a plain car $13,500 on Bring a Trailer in August 2026 with 119,000 miles, and a rough one $6,800 on Bring a Trailer in July 2026. Among 1979 cars, the V8 era, a Renegade made $28,600 at Barrett-Jackson in April 2026, another Renegade $23,750 on Bring a Trailer in May 2026, a Golden Eagle $18,500 on Bring a Trailer in June 2026, a Renegade $14,000 in June 2026, and a base car $13,250 in August 2026. Dealer asking prices on the same site sit far above the sold results, at $48,995 to $52,900 for restored Renegades and Laredos in September 2026. Hagerty's market piece, written on 2018 data, put the average auction sale at $12,743 for 2018, up 78 percent in #2 value between 2010 and 2018, and named a 1981 Laredo at $45,100 in 2017 as the most expensive CJ-7 it had seen at auction. Premiums attach to the 304 V8, Renegade and Golden Eagle packages, factory hardtops, unpatched tubs and frames, and documented Jamboree cars.",
 "whatToLookFor": "The frame decides the purchase. The CJ owners' wiki buyer's guide names the front and rear spring shackle mounts first: mud packs into the boxed sections there, blocks the drain holes and holds water. The section directly behind the rear wheels is next. On 1982-1986 wide-track cars the front shock towers in the fenders trap water between the frame and the tower and rust from the inside. A magnet and a flashlight along the whole frame, with the car on a lift, is the honest way to see it; undercoating applied last month is a reason to look harder, not a reason to stop. The tub rusts at the rockers under the doors and at the rear corners, and the guide notes that these areas are often shoddily patched or covered with diamond plate. Wheel wells and the floor under the roll bar are the other spots. Engine identification matters because the packages were decals and wheels: a Renegade is not automatically a V8, the 304 was only offered through 1981, and a 1982-1986 Renegade or Laredo is a 258 six or a four unless someone has swapped one in. Check the transfer case: 1980 and later CJ-7s have the gear-driven Dana 300, the one people want, while a Quadra-Trac car has a chain that stretches if the fluid was ever neglected. The AMC 20 rear axle uses two-piece shafts with a keyed hub; many have been converted to one-piece shafts, which is a plus, and a hub that has walked on its key is a common fault. Hardtops, factory steel doors and a documented Jamboree number add real money; a Jamboree without its number plate is a gold Jeep. Paperwork on these is thin because they were cheap for decades, so a title that matches the VIN plate and a data plate that matches the paint and engine are the record.",
 "commonProblems": "Frame rust at the shackle mounts, behind the rear wheels and, on 1982-1986 cars, at the front shock towers is the defining fault, and the tub follows at the rockers and rear corners. The owners' wiki calls the 258 six a strong, torquey, reliable motor, and it is, but the two-barrel carburetor and the late-1970s and early-1980s emissions plumbing on top of it are where most running problems live; many have been swapped to a simpler carburetor or fuel injection, which helps drivability and hurts originality. The GM Iron Duke four in 1980-1983 CJ-5s is, in the same guide's words, a particularly weak four-cylinder to avoid. Quadra-Trac full-time cases are chain-driven: if the oil level was not kept up the chain stretched, possibly to the point of jumping teeth, and a used one that clunks on turn-in is telling you. The Dana 300 that replaced it on 1980 and later CJ-7s is gear-driven and well regarded. The AMC 20 rear axle's two-piece shafts are the drivetrain complaint everyone has heard: the hub is retained on a taper and key, works loose, and takes the bearing with it, so one-piece shaft conversions are common and are an upgrade rather than a red flag. Steering is a wander of worn tie-rod ends, a loose steering box on a flexing frame and, on lifted cars, poor geometry; a CJ that tracks straight at 60 mph has had money spent on it. Soft tops, door seals and the folding windshield seal all leak, and the floors under them rust in sympathy. Wiring harnesses of this era were basic and are usually the site of forty years of splices.",
 "valueTrajectory": "These were used trucks for a long time. Hagerty's piece, working from its own data through 2018, put the average #2-condition CJ-7 at $9,100 in 2010 and $16,200 in 2018, a 78 percent rise, and noted that the number of CJ-7s crossing the block peaked in the twelve months to March 2017 at 115 before easing to 88 the following year, with the average auction sale flat at about $12,700 for both 2017 and 2018. The same article observed that the CJ-7 had not run as hot as the Bronco and Blazer of the same years. That gap is still visible. As of September 2026 classic.com's benchmark is $21,277 and trending down, so the post-2020 surge that took ordinary Renegades toward $30,000 has cooled, and the sold results of the past six months sit between $6,800 and $39,500 with most in the teens and low twenties. The spread inside a single model year is now wider than the movement in the average, which is the sign of a market that has started to price condition and documentation rather than the badge. The V8 Golden Eagle and Renegade, the Laredo with its chrome intact, and numbered Jamboree cars hold the top; four-cylinder cars and patched tubs do not.",
 "overallConfidence": "medium",
 "sources": [
  {
   "ref": "jeep-heritage-1970s",
   "title": "Jeep History in the 1970s",
   "url": "https://www.mideast.jeep.com/en/history/1970s.html",
   "publisher": "Jeep (Stellantis)",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Jeep's own decade history: Kaiser Jeep sold to AMC in 1970 for approximately $75 million; Quadra-Trac introduced 1972 as the first automatic full-time 4WD system; CJ-7 introduced 1976 as the first major design change in 20 years, with a longer wheelbase to fit an automatic; all CJs on AMC-built engines from 1973 (its wording says 304 or 360 V8s, which is loose); Renegade content (304 V8, alloys, Trac-Lok); Golden Eagle a $200 premium over Renegade; CJ-5 the longest production run of any Jeep."
  },
  {
   "ref": "wikipedia-jeep-cj",
   "title": "Jeep CJ",
   "url": "https://en.wikipedia.org/wiki/Jeep_CJ",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Pointer source: CJ-5 603,303 produced; CJ-7 379,299 over eleven years; CJ-7 wheelbase 10 in longer than CJ-5, introduced for 1976; part-time case, automatic and Quadra-Trac options; Dana 300 on all 1980 and later CJ-7s; Iron Duke as CJ-5 base engine 1980-1983; Isuzu C240 diesel 1980-1982 export only; wide-track Dana 30 front and two-piece AMC 20 rear 1982-1986; 1982 Jamboree 630 units (560 gold, 70 white); Limited 1982-1983 at 2,500; package years; December 1980 60 Minutes IIHS rollover segment and its role in the CJ-5's demise; 1972 replacement of the Willys four by AMC sixes."
  },
  {
   "ref": "carsforsale-retro-review",
   "title": "Retro Review: CJ-7 Jeep",
   "url": "https://www.carsforsale.com/car-reviews/retro-review-cj-7-jeep/",
   "publisher": "Carsforsale.com",
   "sourceType": "journalism",
   "reliability": "low",
   "notes": "Retrospective editorial on a listings site, used only where it agrees with another source or is labeled single-source: CJ-7 wheelbase 93.5 in, ten inches over the CJ-5; CJ-5 ran to 1983; engine lineup (150, GM 151, 232, 258, 304, Isuzu diesel 1980-82); Golden Hawk 1980 only, estimated under 200; Jamboree package $1,332 to $2,162, 2,500 planned, 630 built, white under 100; Wrangler YJ released 1986 for the 1987 model year."
  },
  {
   "ref": "jeepdatabase-cj7",
   "title": "CJ-7 - The Jeep Database",
   "url": "https://www.jeepdatabase.com/cj7",
   "publisher": "The Jeep Database",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Specialist model database: units produced 379,000 (rounded); assembly Toledo; wheelbase listed as 93.3 in, which conflicts with the 93.5 in given elsewhere; curb weight 2,710 lb (only weight figure found); package years listed as Renegade 1976-1979 and 1981-1986, Golden Eagle and Golden Hawk 1977-1980, Laredo 1980-1986."
  },
  {
   "ref": "cj8-forum-production",
   "title": "CJ7 vs CJ8 Production Numbers?",
   "url": "https://www.cj-8.com/threads/cj7-vs-cj8-production-numbers.40048/",
   "publisher": "CJ-8.com owners' forum",
   "sourceType": "club-forum",
   "reliability": "low",
   "notes": "Forum thread in which a member posts 379,299 CJ-7s over 11 years from 1976 and a year-by-year Scrambler count; uncited, used only as a repeat of the Wikipedia figure, never as its own support."
  },
  {
   "ref": "classic-com-cj7",
   "title": "Jeep CJ7 Market - CLASSIC.COM",
   "url": "https://www.classic.com/m/jeep/cj/cj7/",
   "publisher": "CLASSIC.COM",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Fetched September 2026: CJ7 market benchmark $21,277 trending down, average sale $22,036, lowest sale $3,300 (1982 car, March 19, 2025); 79 listings for sale; dealer asks of $48,995 (1979 Renegade), $49,995 (1981 Laredo) and $52,900 (1986) dated September 2026."
  },
  {
   "ref": "classic-com-cj7-1986",
   "title": "1986 Jeep CJ7 Market - CLASSIC.COM",
   "url": "https://www.classic.com/m/jeep/cj/cj7/year-1986/",
   "publisher": "CLASSIC.COM",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Fetched September 2026: 1986 benchmark $21,277 trending down; sold results $13,500 (Bring a Trailer, Aug 24 2026, 119k mi), $39,500 Renegade (Bring a Trailer, Aug 6 2026, 88k mi), $28,600 Laredo (Mecum, Jul 23 2026), $6,800 (Bring a Trailer, Jul 23 2026), $17,000 Laredo (GAA, Jul 23 2026)."
  },
  {
   "ref": "classic-com-cj7-1979",
   "title": "1979 Jeep CJ7 Market - CLASSIC.COM",
   "url": "https://www.classic.com/m/jeep/cj/cj7/year-1979/",
   "publisher": "CLASSIC.COM",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Fetched September 2026: 1979 benchmark $21,286 trending down; sold results $13,250 (Bring a Trailer, Aug 19 2026), $18,500 Golden Eagle (Bring a Trailer, Jun 18 2026), $14,000 Renegade (Bring a Trailer, Jun 15 2026), $23,750 Renegade (Bring a Trailer, May 15 2026), $28,600 Renegade (Barrett-Jackson, Apr 16 2026), $23,500 (GAA, Jul 25 2026), $15,750 (Hagerty, Jul 21 2026)."
  },
  {
   "ref": "hagerty-cj7-outlook",
   "title": "Why the Jeep CJ-7 isn't as red hot as the Bronco and Blazer",
   "url": "https://www.hagerty.com/media/buying-and-selling/jeep-cj-7-market-outlook/",
   "publisher": "Hagerty Media",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Hagerty editorial on 2018 data: average #2 value up 78 percent 2010-2018 from $9,100 to $16,200; 1977-1980 Golden Eagle with the 150 hp 304 V8 the most valuable CJ, #2 value $18,200; auction volume peaked at 115 in the year to March 2017, 88 in the following twelve months; 2018 average sale $12,743 versus $12,776 in 2017; most expensive CJ-7 seen at auction a 1981 Laredo at $45,100 in 2017; CJ-7 in production 11 model years 1976-1986. Undated on the page; the data is 2018."
  },
  {
   "ref": "jeep-cj-wiki-buyers-guide",
   "title": "CJ Buyers Guide",
   "url": "https://jeep-cj.com/community/wiki/cjbuyersguide/",
   "publisher": "Jeep-CJ.com owners' community",
   "sourceType": "club-forum",
   "reliability": "low",
   "notes": "Owner-written buyer's guide, used for fault patterns only: frame rust at front and rear shackle mounts and behind the rear wheels; shock towers on 1982-1986 wide-track cars; tub rust at rockers and rear corners, often patched or hidden with diamond plate; wheel wells and under the roll bar; 258 six regarded as strong and reliable; 304 offered 1972-1981; GM Iron Duke a weak engine to avoid; Quadra-Trac chain stretch if oil level neglected."
  },
  {
   "ref": "eightiescars-1986-cj7",
   "title": "1986 Jeep CJ-7 SUV",
   "url": "https://eightiescars.com/2025/12/01/1986-jeep-cj-7-suv/",
   "publisher": "Eighties Cars",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Single-model-year write-up from period literature: 1986 base price $7,500; standard AMC 150 cu in four with EFI at 86 hp, four-speed manual, part-time 4WD; 258 six at 102 hp with two-barrel carburetor a $361 option; six/five-speed rated 17 city 21 highway on the period method; 25,929 CJ-7s built in the 1986 model year; total CJ line over 1.5 million. The only US list price found for any year."
  },
  {
   "ref": "jeepmodelsbyyear-cj7",
   "title": "Jeep CJ7 1976-1986",
   "url": "https://jeepmodelsbyyear.com/jeep-cj-7/",
   "publisher": "Jeep Models by Year",
   "sourceType": "specialist",
   "reliability": "low",
   "notes": "Specialist year guide, detailed only for 1980: standard AMC 258 six at 110 hp; optional Isuzu C240 diesel at 80 hp; T176, T177 and SR4 four-speed manuals; Dana 300 transfer case with 2WD, 4WD high and 4WD low; Dana 30 front, Dana 44 or AMC 20 rear; produced 1976-1986."
  },
  {
   "ref": "drivingline-cj7",
   "title": "The 1976-1986 Jeep CJ-7 Modernized The Original Willys Kaiser 4x4 SUV And Led Us To The Wrangler",
   "url": "https://www.drivingline.com/articles/the-1976-1986-jeep-cj-7-modernized-the-original-willys-kaiser-4x4-suv-and-led-us-to-the-wrangler/",
   "publisher": "DrivingLine",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Benjamin Hunting, December 17, 2021: wheelbase from 83.5 in to 93.5 in; 304 V8 offered until 1981 at 125 hp and just under 220 lb-ft (conflicts with the 150 hp figure elsewhere); manuals from three to five speeds and an automatic; Dana 30 front with AMC 20 rear, replaced by a Dana 44 in the final model year."
  },
  {
   "ref": "restore-old-car-cj-history",
   "title": "Jeep CJ History (1970-1986)",
   "url": "https://www.restore-an-old-car.com/jeep-cj-history.html",
   "publisher": "Restore an Old Car",
   "sourceType": "specialist",
   "reliability": "low",
   "notes": "Restoration-site history: CJ-7 introduced for 1976 as the first significant change in 20 years; CJ-5 discontinued 1983 as CJ-7 demand grew; 1972 frame with six crossmembers lengthened 3 in for the 258; CJ-5 on the AMC 232 for 1972; 304 V8 at 150 net hp at 4,200 rpm for 1972-1978; GM 151 at 82 hp at 4,000 rpm; CJ-5 over 600,000 built 1954-1983 (the page's own typo reads 600,00); CJ-7 close to 400,000."
  }
 ],
 "claims": [
  {
   "section": "history",
   "claimText": "Kaiser Jeep was sold to American Motors in 1970 for approximately $75 million, which is how the CJ line came under AMC ownership.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["jeep-heritage-1970s"],
   "evidence": [
    { "ref": "jeep-heritage-1970s", "quote": "Kaiser Jeep sold the company to American Motors (AMC) in 1970 for approximately $75 million." }
   ]
  },
  {
   "section": "history",
   "claimText": "The CJ-7 was introduced for the 1976 model year with a wheelbase ten inches longer than the CJ-5, the extra length added so an automatic transmission would fit.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["jeep-heritage-1970s", "wikipedia-jeep-cj", "restore-old-car-cj-history"],
   "evidence": [
    { "ref": "jeep-heritage-1970s", "quote": "The CJ-7 had a slightly longer wheelbase than the CJ-5 in order to allow space for an automatic transmission." },
    { "ref": "wikipedia-jeep-cj", "quote": "The Jeep CJ-7 had a wheelbase 10 inches (25 cm) longer than that of the CJ-5" },
    { "ref": "restore-old-car-cj-history", "quote": "Introduced for the 1976 model year, the CJ7 marked the first significant change in 20 years." }
   ]
  },
  {
   "section": "specs",
   "claimText": "The CJ-7 wheelbase is given as 93.5 inches by DrivingLine and by a retrospective review, but The Jeep Database and the Wikipedia infobox list 93.3 inches.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["drivingline-cj7", "carsforsale-retro-review", "jeepdatabase-cj7", "wikipedia-jeep-cj"],
   "conflictNote": "DrivingLine states the wheelbase moved from 83.5 inches to 93.5 inches. Carsforsale.com states 93.5 inches. The Jeep Database lists 93.3 inches, and the Wikipedia infobox also gives 93.3 in (2,370 mm) even though its text says ten inches longer than the CJ-5. The 0.2 inch difference is not explained by any source consulted here and is unresolved.",
   "evidence": [
    { "ref": "drivingline-cj7", "quote": "another 10 inches entered the equation, moving from 83.5 inches to 93.5 inches" },
    { "ref": "carsforsale-retro-review", "quote": "lengthened the wheelbase to 93.5-inches, ten inches longer than the CJ-5" },
    { "ref": "jeepdatabase-cj7", "quote": "WHEELBASE (WB): 93.3 TRACK WIDTH (TR): 55.2 CURB WEIGHT (CW): 2,710 lbs" },
    { "ref": "wikipedia-jeep-cj", "quote": "Wheelbase 93.3 in (2,370 mm) Length 148 in (3,759 mm)" }
   ]
  },
  {
   "section": "production",
   "claimText": "CJ-7 production over its eleven model years is given as 379,299, a figure that Wikipedia states with a citation, a CJ-8 forum member repeats, The Jeep Database rounds to 379,000 and a restoration history describes as close to 400,000.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["wikipedia-jeep-cj", "cj8-forum-production", "jeepdatabase-cj7", "restore-old-car-cj-history"],
   "evidence": [
    { "ref": "wikipedia-jeep-cj", "quote": "379,299 built during eleven years of production" },
    { "ref": "cj8-forum-production", "quote": "379,299 CJ-7s made over 11 years starting 1976" },
    { "ref": "jeepdatabase-cj7", "quote": "ASSEMBLY: Toledo, OH, USA UNITS PRODUCED: 379,000 PREDECESSOR : CJ-5 Universal" },
    { "ref": "restore-old-car-cj-history", "quote": "Close to 400,000 were produced by the time it was discontinued" }
   ]
  },
  {
   "section": "production",
   "claimText": "CJ-5 production across its whole 1954-1983 run is given as 603,303 by Wikipedia and as over 600,000 by a restoration history; no source breaks out the AMC years of 1972-1983.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["wikipedia-jeep-cj", "restore-old-car-cj-history"],
   "evidence": [
    { "ref": "wikipedia-jeep-cj", "quote": "Production 1954-1983 603,303 produced [46] Model years 1955-1983" },
    { "ref": "restore-old-car-cj-history", "quote": "With a total of over 600,00 units produced between 1954 and 1983, the CJ5 enjoyed a 29-year production run." }
   ]
  },
  {
   "section": "production",
   "claimText": "A single source states that 25,929 CJ-7s were built in the 1986 model year; no second source for the figure was found.",
   "confidence": "medium",
   "status": "unverified",
   "sourceRefs": ["eightiescars-1986-cj7"],
   "evidence": [
    { "ref": "eightiescars-1986-cj7", "quote": "Jeep produced 25,929 CJ-7s in the 1986 model year." }
   ]
  },
  {
   "section": "production",
   "claimText": "The 1982 Jamboree Commemorative Edition ran to 630 numbered units, 560 in Topaz Gold Metallic and 70 in Olympic White, against a planned 2,500.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["wikipedia-jeep-cj", "carsforsale-retro-review"],
   "evidence": [
    { "ref": "wikipedia-jeep-cj", "quote": "only 630 units produced (560 Topaz Gold Metallic and 70 Olympic White)" },
    { "ref": "carsforsale-retro-review", "quote": "Originally, 2,500 units had been planned for the Jamboree Edition, but a scant 630 were built." }
   ]
  },
  {
   "section": "production",
   "claimText": "Production of the 1980-only Golden Hawk is estimated at under 200 by one retrospective, and Wikipedia alone gives 2,500 for the 1982-1983 Limited; neither figure has a second source.",
   "confidence": "low",
   "status": "unverified",
   "sourceRefs": ["carsforsale-retro-review", "wikipedia-jeep-cj"],
   "evidence": [
    { "ref": "carsforsale-retro-review", "quote": "produced in extremely low numbers (estimated at under 200) and is therefore extremely rare today" },
    { "ref": "wikipedia-jeep-cj", "quote": "2,500 units were built as a limited-production luxury model" }
   ]
  },
  {
   "section": "market",
   "claimText": "The 1986 CJ-7 listed at a base price of $7,500, with the 258 six a $361 option; this is the only US list price found in the sources consulted.",
   "confidence": "medium",
   "status": "unverified",
   "sourceRefs": ["eightiescars-1986-cj7"],
   "evidence": [
    { "ref": "eightiescars-1986-cj7", "quote": "The 1986 CJ-7's base price was $7,500" },
    { "ref": "eightiescars-1986-cj7", "quote": "inline six with a two-barrel carburetor was a $361 option" }
   ]
  },
  {
   "section": "market",
   "claimText": "The Golden Eagle package was priced $200 above the Renegade package according to Jeep's own history, and the 1982 Jamboree package listed at $1,332 rising to $2,162 with performance options according to a retrospective review.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["jeep-heritage-1970s", "carsforsale-retro-review"],
   "evidence": [
    { "ref": "jeep-heritage-1970s", "quote": "The Golden Eagle option package was a $200 premium above the Renegade package." },
    { "ref": "carsforsale-retro-review", "quote": "The package as such cost $1,332 but could go all the way to $2,162 when accessing a list of performance options." }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 1986 CJ-7's standard engine was a fuel-injected AMC 150 cubic inch four of 86 hp with a four-speed manual, and the optional 258 six was rated at 102 hp, while the full AMC-era lineup also included the GM 151 four, the 232 six, the 304 V8 and an Isuzu diesel.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["eightiescars-1986-cj7", "carsforsale-retro-review"],
   "evidence": [
    { "ref": "eightiescars-1986-cj7", "quote": "86 bhp 2.5 liter/150 ci inline four with electronic fuel injection paired with a four-speed manual transmission" },
    { "ref": "carsforsale-retro-review", "quote": "Engines included AMC's 150 cu.-in. inline-four, GM's 'Iron Duke' 151 cu.-in. four-cylinder, 232 and 258 cu.-in. straight-sixes, AMC's 304 cu.-in. V8" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The output of the AMC 304 V8 in the CJ is given as 150 hp by a restoration history and by Hagerty, but as 125 hp with just under 220 lb-ft by DrivingLine.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["restore-old-car-cj-history", "hagerty-cj7-outlook", "drivingline-cj7"],
   "conflictNote": "Restore an Old Car states 150 net hp at 4,200 rpm for the 1972-1978 cars. Hagerty describes the 1977-1980 Golden Eagle as having the 150-hp 304 V8. DrivingLine states the 304 delivered 125 hp and just under 220 lb-ft. The gap may reflect different model years under tightening emissions rules, but no source consulted says so, and it is unresolved.",
   "evidence": [
    { "ref": "restore-old-car-cj-history", "quote": "The best performance years were 1972-1978, with a net horsepower of 150 at 4,200 rpm." },
    { "ref": "hagerty-cj7-outlook", "quote": "The most valuable CJ is the 1977-1980 CJ-7 Golden Eagle 4×4 with the 150-hp, 304-cubic-inch V-8 engine." },
    { "ref": "drivingline-cj7", "quote": "the 304 cubic inch motor put in an appearance until 1981, delivering 125 hp and just under 220 lb-ft of torque" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The AMC 304 V8 was offered in the CJ from 1972 through the 1981 model year and not afterward.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["jeep-cj-wiki-buyers-guide", "drivingline-cj7"],
   "evidence": [
    { "ref": "jeep-cj-wiki-buyers-guide", "quote": "If you are looking for a V8 the AMC 304 was offered from from 1972 to 1981." },
    { "ref": "drivingline-cj7", "quote": "the 304 cubic inch motor put in an appearance until 1981" }
   ]
  },
  {
   "section": "specs",
   "claimText": "All 1980 and later CJ-7s used the gear-driven Dana 300 transfer case, which shifts between two-wheel drive, four-wheel-drive high and four-wheel-drive low.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["wikipedia-jeep-cj", "jeepmodelsbyyear-cj7"],
   "evidence": [
    { "ref": "wikipedia-jeep-cj", "quote": "all 1980 and newer CJ-7s came with the Dana 300 transfer case" },
    { "ref": "jeepmodelsbyyear-cj7", "quote": "allowed for shifting between 2-wheel drive, 4-wheel drive high range, and 4-wheel drive low range" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The AMC 258 six was rated at 110 hp for 1980 according to a specialist year guide and at 102 hp for 1986 according to a period-price source; the two figures are for different model years and are not treated as a conflict.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["jeepmodelsbyyear-cj7", "eightiescars-1986-cj7"],
   "evidence": [
    { "ref": "jeepmodelsbyyear-cj7", "quote": "The standard engine was the AMC 258 6-cylinder engine, which produced 110 horsepower" },
    { "ref": "eightiescars-1986-cj7", "quote": "102 bhp 4.2 liter/258 ci inline six with a two-barrel carburetor" }
   ]
  },
  {
   "section": "specs",
   "claimText": "Quadra-Trac, introduced by AMC in 1972 as the first automatic full-time four-wheel-drive system, was offered on the CJ-7 alongside the standard part-time two-speed transfer case.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["jeep-heritage-1970s", "wikipedia-jeep-cj"],
   "evidence": [
    { "ref": "jeep-heritage-1970s", "quote": "In 1972, the Quadra-Trac 4x4 System was introduced, the first automatic full-time four-wheel-drive system." },
    { "ref": "wikipedia-jeep-cj", "quote": "Transmission options included the standard part-time two-speed transfer case, automatic, and an optional new automatic all-wheel drive system called Quadra-Trac." }
   ]
  },
  {
   "section": "specs",
   "claimText": "CJs of this era used a Dana 30 front axle and a two-piece-shaft AMC 20 rear axle, with wide-track versions of both on 1982-1986 cars and, per DrivingLine, a Dana 44 rear in the final model year.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["wikipedia-jeep-cj", "drivingline-cj7", "jeep-cj-wiki-buyers-guide"],
   "evidence": [
    { "ref": "wikipedia-jeep-cj", "quote": "2-Piece AMC 20 Wide track rear (1982-1986)" },
    { "ref": "drivingline-cj7", "quote": "A Dana 30 front axle was common up front, with an AMC 20 rear axle (eventually replaced by a Dana 44 during the final model year)" },
    { "ref": "jeep-cj-wiki-buyers-guide", "quote": "If your looking at a wide trac model ( 82-86 ) take note of the shock towers located in the front fenders." }
   ]
  },
  {
   "section": "specs",
   "claimText": "An Isuzu C240 diesel CJ was built in Toledo from 1980 to 1982 for export only, so no US buyer received one new.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["wikipedia-jeep-cj", "carsforsale-retro-review", "jeepmodelsbyyear-cj7"],
   "evidence": [
    { "ref": "wikipedia-jeep-cj", "quote": "A diesel-powered version was made in the Ohio factory for export only" },
    { "ref": "carsforsale-retro-review", "quote": "for 1980-82, an Isuzu 145 cu.-in. diesel" },
    { "ref": "jeepmodelsbyyear-cj7", "quote": "an optional Isuzu C240 diesel engine available, which produced 80 horsepower" }
   ]
  },
  {
   "section": "history",
   "claimText": "For 1972 AMC replaced the Willys-derived four-cylinder base engine with its own straight-sixes and lengthened the frame, with six crossmembers, by about three inches to take the 258.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["wikipedia-jeep-cj", "restore-old-car-cj-history"],
   "evidence": [
    { "ref": "wikipedia-jeep-cj", "quote": "The base Willys 4-cylinder was replaced by AMC's Torque Command straight-6 engines." },
    { "ref": "restore-old-car-cj-history", "quote": "A new frame, featuring six cross-members for rigidity, was lengthened by 3\" to accommodate American Motor's 258ci six-cylinder engine." }
   ]
  },
  {
   "section": "history",
   "claimText": "A December 1980 60 Minutes segment, in which the Insurance Institute for Highway Safety staged a demonstration of the CJ-5 rolling over at low speed, is credited by Wikipedia with hastening the CJ-5's demise; only one source consulted covers the broadcast.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["wikipedia-jeep-cj"],
   "evidence": [
    { "ref": "wikipedia-jeep-cj", "quote": "attributed to a December 1980 60 Minutes segment where the Insurance Institute for Highway Safety (IIHS) staged a demonstration" }
   ]
  },
  {
   "section": "history",
   "claimText": "The CJ-5 was discontinued after the 1983 model year as CJ-7 demand grew, having overlapped with the longer car for eight years.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["restore-old-car-cj-history", "carsforsale-retro-review"],
   "evidence": [
    { "ref": "restore-old-car-cj-history", "quote": "demand for the smaller CJ5 decreased, and was eventually discontinued in 1983" },
    { "ref": "carsforsale-retro-review", "quote": "running all the way to 1983, overlapping with its successor, the CJ-7" }
   ]
  },
  {
   "section": "history",
   "claimText": "The CJ-7 ran for eleven model years from 1976 to 1986 and was replaced by the Wrangler YJ, released in 1986 for the 1987 model year.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["hagerty-cj7-outlook", "carsforsale-retro-review"],
   "evidence": [
    { "ref": "hagerty-cj7-outlook", "quote": "CJ-7s were in production for 11 model years from 1976-1986." },
    { "ref": "carsforsale-retro-review", "quote": "the company released a new generation, the Jeep Wrangler (the YJ), in 1986 for the 1987 model year" }
   ]
  },
  {
   "section": "history",
   "claimText": "From 1980 to 1983 the CJ-5's standard engine was a GM Iron Duke four sold under the Hurricane name, rated at 82 hp at 4,000 rpm, and owner guides regard it as an engine to avoid.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["wikipedia-jeep-cj", "restore-old-car-cj-history", "jeep-cj-wiki-buyers-guide"],
   "evidence": [
    { "ref": "wikipedia-jeep-cj", "quote": "the CJ-5 came standard with a 'Hurricane'-branded version of the GM Iron Duke I4" },
    { "ref": "restore-old-car-cj-history", "quote": "engine output was 82-horsepower at 4,000 rpm" },
    { "ref": "jeep-cj-wiki-buyers-guide", "quote": "The GM 'Iron Duke' engine was a particularly weak 4 cylinder engine to avoid." }
   ]
  },
  {
   "section": "problems",
   "claimText": "Frame rust concentrates at the front and rear shackle mounts, where mud blocks the drain holes of the boxed frame, at the section behind the rear wheels, and on 1982-1986 cars at the front shock towers; the tub rusts at the rockers and rear corners and is often patched or covered with diamond plate.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["jeep-cj-wiki-buyers-guide"],
   "evidence": [
    { "ref": "jeep-cj-wiki-buyers-guide", "quote": "The first area to check would be around the front and rear shackle mounts." },
    { "ref": "jeep-cj-wiki-buyers-guide", "quote": "The rocker area under the doors and the rear corners of the tub are 2 such areas. Many times these areas are shoddily patched or covered with diamond plate." }
   ]
  },
  {
   "section": "problems",
   "claimText": "On Quadra-Trac cars the drive chain stretches if the oil level was not kept up, potentially to the point of jumping teeth, while the 258 six itself is regarded by owners as strong and reliable.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["jeep-cj-wiki-buyers-guide"],
   "evidence": [
    { "ref": "jeep-cj-wiki-buyers-guide", "quote": "If the oil level was not always kept up the chain would stretch, possibly to the point of jumping teeth." },
    { "ref": "jeep-cj-wiki-buyers-guide", "quote": "The 258 straight six has an excellent reputation as a strong, torquey, reliable motor." }
   ]
  },
  {
   "section": "market",
   "claimText": "As of September 2026 the classic.com Jeep CJ7 market benchmark is $21,277 on a downward trend with an average sale of $22,036, and recent sold results run from $6,800 to $39,500 for 1986 cars and $13,250 to $28,600 for 1979 cars.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["classic-com-cj7", "classic-com-cj7-1986", "classic-com-cj7-1979"],
   "evidence": [
    { "ref": "classic-com-cj7", "quote": "CMB (CLASSIC.COM Market Benchmark) $21,277" },
    { "ref": "classic-com-cj7-1986", "quote": "CMB (CLASSIC.COM Market Benchmark) $21,277" },
    { "ref": "classic-com-cj7-1979", "quote": "CMB (CLASSIC.COM Market Benchmark) $21,286" }
   ]
  },
  {
   "section": "market",
   "claimText": "Hagerty's market analysis on 2018 data put the average #2-condition CJ-7 value up 78 percent between 2010 and 2018, from $9,100 to $16,200, with an average 2018 auction sale of $12,743 and a 1981 Laredo at $45,100 in 2017 as the most expensive CJ-7 it had seen at auction.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["hagerty-cj7-outlook"],
   "evidence": [
    { "ref": "hagerty-cj7-outlook", "quote": "The average #2 condition value of all CJ-7 models is up 78 percent between 2010 and 2018, climbing from $9100 to $16,200." },
    { "ref": "hagerty-cj7-outlook", "quote": "The most expensive CJ-7 we have seen come to auction was a 1981 Jeep CJ-7 Laredo that sold for $45,100 in 2017." }
   ]
  },
  {
   "section": "specs",
   "claimText": "The Jeep Database lists a CJ-7 curb weight of 2,710 lb without stating the configuration; it is the only curb weight found in the sources consulted and is single-sourced.",
   "confidence": "medium",
   "status": "unverified",
   "sourceRefs": ["jeepdatabase-cj7"],
   "evidence": [
    { "ref": "jeepdatabase-cj7", "quote": "WHEELBASE (WB): 93.3 TRACK WIDTH (TR): 55.2 CURB WEIGHT (CW): 2,710 lbs" }
   ]
  },
  {
   "section": "summary",
   "claimText": "Renegade models typically carried the 304 V8, a stouter drivetrain, alloy wheels and a Trac-Lok limited-slip rear differential, while the Laredo package was offered from 1980 through 1986.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["jeep-heritage-1970s", "jeepdatabase-cj7"],
   "evidence": [
    { "ref": "jeep-heritage-1970s", "quote": "Renegade models typically featured a 304 cubic inch (5L) V8 engine, stouter drivetrain, alloy wheels, and a Trac-Lok limited slip rear differential." },
    { "ref": "jeepdatabase-cj7", "quote": "GOLDEN EAGLE, GOLDEN HAWK 1977 - 1980 LAREDO 1980 - 1986 RENEGADE 1981 - 1986" }
   ]
  }
 ]
};
