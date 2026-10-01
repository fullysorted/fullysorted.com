/**
 * Researched model draft - Pontiac Firebird Trans Am, second generation (1970-1981 model years), US market.
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedTransAm197081 = {
 "slug": "pontiac/firebird-trans-am-1970-81",
 "make": "Pontiac",
 "model": "Firebird Trans Am",
 "generation": "Second generation, 1970-1981",
 "generationCode": null,
 "trim": null,
 "yearStart": 1970,
 "yearEnd": 1981,
 "bodyStyles": [
  "2-door coupe (fixed roof)",
  "2-door coupe with removable glass T-tops (option from the 1976 model year per the sources)"
 ],
 "engines": [
  "455 cu in (7,456 cc) Pontiac V8, L75 455 High Output, naturally aspirated, 250 hp at 4,000 rpm as rated for 1973 (Wikipedia)",
  "455 cu in (7,456 cc) Pontiac V8, LS2 SD-455, naturally aspirated, special-order option, rated at 290 hp at 4,000 rpm for 1973 (Wikipedia)",
  "455 cu in (7,456 cc) Pontiac V8, 455 H.O., 200 hp for 1975 (Wikipedia) and 200 hp for the 1976 Limited Edition (Sports Car Market)",
  "400 cu in (6,555 cc) Pontiac V8, W72, naturally aspirated, 200 hp for 1977, raised to 220 hp for 1978-1979 (Sports Car Market, Octane)",
  "403 cu in (6,602 cc) Oldsmobile V8, fitted where the Pontiac 400 could not meet emissions rules in California and high-altitude states (Wikipedia, Motorious)",
  "301 cu in (4,933 cc) Pontiac V8 with a Garrett TB305 turbocharger and a single four-barrel Quadrajet carburetor, 210 hp and 345 lb-ft, 1980-1981, automatic only (Wikipedia, Jalopnik)"
 ],
 "productionTotal": null,
 "productionNotes": "No source retrieved for this page gives a total for the 1970-1981 Trans Am run, so productionTotal is null. What the sources do give are scattered, year-specific counts that do not add up to a total and are not drawn from one registry. Wikipedia's second-generation article carries a sales table and states that Trans Am output peaked at 117,108 in 1979, and gives 68,744 for 1977; Sports Car Market's guide rounds 1977 to about 68,000 and says 15,567 of them were Special Editions, while Motorious says more than 15,000 Y82/Y81 cars were built in 1977. Those three agree with each other within rounding. For the early cars, Hagerty says about 1,286 Trans Ams were produced in 1972. For 1973, Wikipedia quotes L75 455 production of 3,130 with automatic and 1,420 with manual and a special-ordered $550 LS2 SD-455 option taken by 180 automatic and 72 manual cars, which is 252 SD-455 Trans Ams; that count comes from one source and was not cross-checked against a Pontiac registry or a club. Sports Car Market adds that 8,666 Gold Edition cars were sold in 1978 and that only 5,263 Special Editions were sold in 1981. The best-known figure sites, including a long-running Trans Am numbers page, could not be retrieved (its host returned an account-suspended notice), so there is no second independent source for the SD-455 count or for the 1970-1971 numbers. The sources retrieved also say little about 1970-1971 and 1974-1976 output, so those years are not filled in.",
 "notableTrims": [
  {
   "name": "Trans Am 455 HO, 1970-1974",
   "note": "The big-block car. Hagerty describes the standard 455 High Output as outdoing the Camaro's 402 by 60 hp. Octane notes early cars could be special-ordered with highly tuned Ram Air engines that command premium prices today."
  },
  {
   "name": "SD-455 (LS2), 1973",
   "note": "A $550 special-order option with 180 automatic and 72 manual cars, 252 in total per Wikipedia, rated at 290 hp. Single-sourced, which is itself a reason a collector asks for documentation."
  },
  {
   "name": "1976 Limited Edition",
   "note": "Black with gold pinstripes and honeycomb wheels, with a 400 or a 455 H.O. rated 200 hp, and the T-top option introduced, per Sports Car Market. Motorious says the design came from GM design chief Bill Mitchell to mark Pontiac's 50th anniversary in 1976."
  },
  {
   "name": "1977-1978 Special Edition",
   "note": "The car from Smokey and the Bandit. Black and gold with a W72 400 at 200 hp. Motorious says Y82 meant T-tops and Y81 the hardtop in 1977."
  },
  {
   "name": "1978 Gold Edition",
   "note": "Solar Gold over dark brown. Sports Car Market counts 8,666 sold in 1978."
  },
  {
   "name": "1979-1981 Special Edition",
   "note": "The Special Edition continued under a new code. Sports Car Market counts only 5,263 Special Editions in 1981."
  },
  {
   "name": "Turbo Trans Am 4.9, 1980-1981",
   "note": "The first model year without a big-block, and the last V8 of Pontiac's own design in any Firebird per Jalopnik. 210 hp and 345 lb-ft, automatic only, with the Indianapolis 500 pace car replica in 1980."
  }
 ],
 "specs": {
  "layout": "Front-engine, rear-wheel drive",
  "chassis": "Unibody, F-body platform shared with the Chevrolet Camaro (the Camaro as comparison is stated in Hagerty; the platform name was not fetched)",
  "engine": "Pontiac V8: 455 cu in (1970-1976 per the sources), 400 cu in (1976-1979), Oldsmobile 403 in some 1977-1979 cars, 301 cu in turbo (1980-1981)",
  "power": "250 hp (L75 455 HO, 1973), 290 hp (SD-455, 1973), 200 hp (455 H.O., 1975-1976), 200 hp (400 W72, 1977), 220 hp (400 W72, 1978-1979), 210 hp (301 turbo, 1980-1981)",
  "torque": "345 lb-ft for the 1980 301 turbo per Jalopnik; torque for other years was not fetched",
  "transmission": "Automatic only on the 1980 turbo (THM350 per Jalopnik); manual and automatic both offered on 1973 455 cars per Wikipedia's production split",
  "weight": "Not documented in the sources retrieved for this page",
  "acceleration": "not documented here; no acceleration figure and no period US road test were retrieved",
  "debut": "Second-generation debut delayed to February 26, 1970 by tooling and engineering problems (Wikipedia)",
  "peak_year": "117,108 Trans Ams in 1979 per Wikipedia's sales table",
  "us_price_new": "Not documented here: no US base list price was retrieved for any year. Sports Car Market lists the 1977 T-top option at $1,141 against $556 without, and Wikipedia gives the 1973 SD-455 option at $550",
  "special_edition_1977": "More than 15,000 Y82/Y81 cars in 1977 per Motorious; 15,567 Special Editions of about 68,000 per Sports Car Market",
  "turbo_pace_car": "1980 Turbo Trans Am Indianapolis 500 pace car replica built at Norwood, Ohio per Jalopnik"
 },
 "summary": "The second-generation Pontiac Trans Am ran from the 1970 model year, after a debut delayed to February 26, 1970 by tooling and engineering problems, through 1981. It spans two very different cars. The first is the 455 High Output car with its 1973 SD-455 option, of which Wikipedia counts 252 built. The second is the emissions-era 400 and Oldsmobile 403 car that sold in the tens of thousands after the 1977 film Smokey and the Bandit, with Wikipedia putting Trans Am output at a peak of 117,108 in 1979. It ends with the 1980-1981 turbo 301 at 210 hp, the first Trans Am without a big-block. Production is only known in pieces: roughly 1,286 in 1972, 68,744 in 1977, 5,263 Special Editions in 1981. No single source gives a run total. This draft is thin by the site's own standard: eight sources, no period US road test, no US base price, and no current dollar market benchmark could be retrieved.",
 "history": "## Why this car exists\n\nThe second-generation Firebird was supposed to be a 1970 model and was not. Wikipedia records that the debut was delayed until February 26, 1970 because of tooling and engineering problems, which is why the earliest Trans Ams are scarce. Hagerty's profile of the 1972 car puts output that year at about 1,286 and frames the standard 455 High Output as outdoing the Camaro's 402 by 60 hp. The reason to build a Trans Am at all was to give Pontiac a road-racing-flavored flagship, and for the first cars that meant big-block power in a car that most buyers still saw as a Firebird. Octane adds that early cars could be special-ordered with highly tuned Ram Air engines, which are the cars that command the biggest premiums today.\n\n## The 455 and the SD-455\n\nBy 1973 the lineup had settled around a 455. Wikipedia quotes the L75 455 as rated at 250 hp at 4,000 rpm, with 3,130 built with an automatic and 1,420 with a manual. Above it sat the special-ordered LS2 SD-455, a $550 option rated at 290 hp at 4,000 rpm, taken by 180 automatic and 72 manual cars. That is 252 cars, and it is one of the numbers on this page that rests on a single source. By 1975 the 455 H.O. was rated at 200 hp, a drop that reflects the emissions rules of the period rather than any change in the engine's reputation.\n\n## 1976 to 1979: black, gold, and a movie\n\nSports Car Market describes the 1976 Limited Edition as black with gold pinstripes and honeycomb wheels, powered by a 400 or a 455 H.O. at 200 hp, and as the car that introduced the T-top. Motorious says the black-and-gold scheme was created by GM design chief Bill Mitchell to celebrate Pontiac's 50th anniversary in 1976, which means it predates the film. The film is Smokey and the Bandit, released in 1977; Wikipedia says the 1977 Special Edition became famous after it, and the guide figures run from more than 15,000 Y82/Y81 cars in 1977 to 8,666 Gold Edition cars in 1978. The W72 400 was rated 200 hp in 1977 and 220 hp in 1978 and 1979. Not every 400 was a Pontiac: Wikipedia says the Oldsmobile 403 went into cars sold in California and high-altitude states because the Pontiac 400 could not meet their emissions rules. The best Cars and Coffee fact on the whole generation is that the car Burt Reynolds was given was a promotional car and not even the one seen on screen, and it sold in December 2014 for $450,000 against a pre-auction estimate of $60,000 to $80,000.\n\n## 1980 and 1981: the turbo\n\nJalopnik says 1980 was the first model year without a big-block in the Trans Am and that the 4.9 liter turbo proved to be the last Pontiac-designed V8 to go under any Firebird's hood. The engine began as a student project at what was then the General Motors Institute in Flint before Pontiac Engine Development refined it. It made 210 hp and 345 lb-ft, behind a Garrett TB305 turbocharger feeding a single four-barrel Quadrajet, and it came only with an automatic. A 1980 Indianapolis 500 pace car replica was built at Norwood, Ohio. Sports Car Market counted 5,263 Special Editions in 1981, the last year.\n\n## What the sources do not give\n\nTwo gaps matter. No source retrieved for this page gives a US base price for any year, so none is printed. And no period US road test was retrieved, so this page carries no acceleration figure. A reviewer filling those two holes would improve this draft more than any amount of added prose.",
 "marketNotes": "As of September 2026, no current benchmark for this generation could be retrieved. The classic.com market page for the 2nd Gen Trans Am variants hides its historical pricing behind a login, and the model-level page returned a 404, so there is no dated dollar benchmark here. What was retrieved are older or undated figures, listed so a reader can see how little they cover. A 1977 Trans Am TA 6.6 that Auto123 describes as used to promote the film, and not even the car that appeared on screen, sold in December 2014 for $450,000 against a pre-auction estimate of $60,000 to $80,000; the article does not name the auction house or say whether the figure includes buyer's premium. Motorious lists two fully restored 1977 Y82 cars at $75,000 each through a dealer, with no listing date on the page. Hagerty's undated 1972 Trans Am profile gives a valuation range from $16,400 to $62,500. Sports Car Market's 2004 guide put a strong number two condition Bandit at up to $15,000 and said a 1976 Limited Edition with the 455 H.O. carried about a ten percent premium. Those four figures span two decades and three kinds of price. None is a September 2026 market value, and the spread between them says more about the sources than the cars. Octane's buying guide gives price bands in pounds sterling, which are not used on this page.",
 "whatToLookFor": "Start with what the car says it is. Octane advises checking that Special Edition cars are not ordinary Firebirds with gold trim added, and that for valuable examples the numbers match. For a 1977 car, the build sheet code is worth reading closely: Motorious says Y82 meant T-tops and Y81 the hardtop, and that rests on one article, so the code is worth confirming against a second source. For a 1973 car claimed as an SD-455, the sources give only a count, 252 per Wikipedia, so the claim needs documentation rather than an engine casting alone. For 1977 to 1979 cars, the engine in the car may be an Oldsmobile 403 rather than a Pontiac 400, since Wikipedia says the 403 went into cars sold in California and high-altitude states. For 1980 and 1981 turbos, Jalopnik says the 301 was automatic only, so a turbo with a manual gearbox is not original. Octane names the rear chassis rails, spring mounts, floorpan and the base of the windshield as the places rust takes hold, and says T-top cars with leaking panels suffer more. Hagerty's 1972 profile lists rust, T-top leaks, engine condition and parts availability as the concerns. Octane adds that interior materials deteriorate poorly under UV exposure. None of these sources quantifies repair costs, so no figure is given.",
 "commonProblems": "The sources retrieved for this page are thin on faults, and the page says so rather than filling the space. Octane names the rear chassis rails, spring mounts, floorpan and the base of the windshield as the rust-prone areas, and notes that T-top cars with leaky panels tend to suffer more. Hagerty's 1972 profile lists rust, T-top leaks, engine condition and parts availability as the main concerns. Octane also says interior materials deteriorate poorly in UV light. Beyond that, the problems that come from the car's design are in the engineering history rather than a fault list: emissions rules drove the 455 H.O. from 250 hp in 1973 to 200 hp in 1975 per Wikipedia, and the Pontiac 400 could not meet California and high-altitude requirements, which is why the Oldsmobile 403 appears in some cars. The 1980-1981 turbo 301 began, per Jalopnik, as a General Motors Institute student project and was refined by Pontiac Engine Development; Octane calls the turbos potential sleepers. No NHTSA recall data, no owner-forum complaint counts and no US repair cost figures were retrieved within this draft's research budget, so none are quoted. A reviewer with access to the Pontiac-Oakland Club International or a US specialist shop could add the engine and transmission wear items that these sources do not cover.",
 "valueTrajectory": "The figures retrieved describe a market that moved from a cheap used muscle car to a collectible, but they do not describe where it stands now. Sports Car Market's 2004 guide put a strong number two condition Bandit at up to $15,000, with the 1980-1981 turbos called potential sleepers because fewer survive. Hagerty's undated 1972 profile gives a $16,400 to $62,500 valuation range, which it says reflects about $44,200 of appreciation for number one cars. The $450,000 paid in December 2014 for the promotional Smokey and the Bandit car against an estimate of $60,000 to $80,000 shows what provenance did to one car and says little about any other. Motorious lists restored 1977 Y82 cars at $75,000 each, with no date. These figures cannot be placed on one timeline: they differ in year, source type and condition basis. As of September 2026 no classic.com benchmark was retrievable, so this page makes no claim about what the market has done since. The reader should treat the trajectory as unknown past 2014 and look for dated sales of documented SD-455, 455 H.O. and turbo cars before inferring a trend.",
 "overallConfidence": "low",
 "sources": [
  {
   "ref": "wikipedia-2nd-gen",
   "title": "Pontiac Firebird (second generation)",
   "url": "https://en.wikipedia.org/wiki/Pontiac_Firebird_(second_generation)",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Pointer source only. 1970 debut delayed to February 26, 1970 by tooling and engineering problems; 1973 L75 455 production 3,130 automatic and 1,420 manual and the $550 LS2 SD-455 option at 180 automatic and 72 manual; L75 250 hp and SD-455 290 hp at 4,000 rpm; 1975 455 H.O. 200 hp; Oldsmobile 403 used for emissions in California and high-altitude states; 1980-81 301 turbo with Garrett TB305 and Quadrajet at 210 hp; sales table peak of 117,108 in 1979 and 68,744 in 1977."
  },
  {
   "ref": "motorious-y82",
   "title": "The Real Story Behind Pontiac's Black-And-Gold Trans Am",
   "url": "https://www.motorious.com/articles/highlights/pontiac-trans-am-y82/",
   "publisher": "Motorious",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Y82 meant T-tops and Y81 the hardtop in 1977 per this article; more than 15,000 Y82/Y81 cars built in 1977; black-and-gold design created by Bill Mitchell for Pontiac's 50th anniversary in 1976; W72 400 with automatic on the featured car; two restored cars listed at $75,000 each (undated)."
  },
  {
   "ref": "hagerty-1972",
   "title": "Classic Classified: 1972 Pontiac Trans Am",
   "url": "https://www.hagerty.com/media/buying-and-selling/classic-classified-1972-pontiac-trans-am/",
   "publisher": "Hagerty",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "About 1,286 Trans Ams produced in 1972; standard 455 High Output outdid the Camaro's 402 by 60 hp; white with blue stripe or blue with white stripe color scheme; valuation range $16,400 to $62,500 (undated); concerns of rust, T-top leaks, engine condition and parts availability."
  },
  {
   "ref": "jalopnik-1980-turbo",
   "title": "At $19,895, Could This 1980 Pontiac Trans Am Turbo Indy Edition Still Set The Pace?",
   "url": "https://jalopnik.com/at-19-895-could-this-1980-pontiac-trans-am-turbo-indy-1826178243",
   "publisher": "Jalopnik",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "1980 turbo 301 at 210 hp and 345 lb-ft, THM350 automatic only; first model year without a big-block and last Pontiac V8 in any Firebird; student project origin at General Motors Institute in Flint refined by Pontiac Engine Development; pace car replica built at Norwood, Ohio. No new price given."
  },
  {
   "ref": "octane-guide",
   "title": "Pontiac Trans Am buying guide, history and review",
   "url": "https://www.octane-magazine.com/articles/pontiac-trans-am-buying-guide-history-and-review/",
   "publisher": "Octane",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "UK publication used only for ownership and fault patterns, never for prices. Rust areas (rear chassis rails, spring mounts, floorpan, windshield base), T-top leaks, UV damage to interiors, special-order Ram Air engines, 1978-79 400 at 220 hp, 210 hp turbo 4.9 in 1980, advice on checking Special Editions."
  },
  {
   "ref": "scm-bandit",
   "title": "1976-1981 Pontiac Trans Am Bandit",
   "url": "https://sportscarmarket.com/profile/1976-1981-pontiac-trans-am-bandit",
   "publisher": "Sports Car Market",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "Guide dated 2004 by the article's own account. 1976 Limited Edition engines and 200 hp; 1977 T-top option $1,141 against $556 without; 15,567 Special Editions of about 68,000; 8,666 Gold Editions in 1978; W72 220 hp in 1978-79; 5,263 Special Editions in 1981; 2004 value of up to $15,000 for a number two Bandit."
  },
  {
   "ref": "auto123-bandit-sale",
   "title": "Smokey and the Bandit Trans Am sold for US$450,000",
   "url": "https://www.auto123.com/en/news/smokey-and-the-bandit-trans-am-sold-for-us450000/60039/",
   "publisher": "Auto123",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "December 2014 report: 1977 Trans Am TA 6.6 used to promote the film and later given to Burt Reynolds sold for $450,000 against a pre-auction estimate of $60,000-$80,000. Auction house and premium treatment not stated."
  },
  {
   "ref": "classic-1978-listing",
   "title": "1978 Pontiac Trans Am (classic.com vehicle page)",
   "url": "https://classic.com/veh/1978-pontiac-trans-am-4VM0yVp",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "low",
   "notes": "Off-market listing page for a 1978 Trans Am (50,665 miles, automatic, gold over black). Shows that classic.com tracks this car under Pontiac Trans Am - Standard Variants - 2nd Gen, but price and sale data are behind a membership prompt, so no dollar figure is taken from it."
  }
 ],
 "claims": [
  {
   "section": "history",
   "claimText": "The second-generation Firebird debut for the 1970 model year was delayed until February 26, 1970 because of tooling and engineering problems.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["wikipedia-2nd-gen"],
   "evidence": [
    { "ref": "wikipedia-2nd-gen", "quote": "The second-generation debut for the 1970 model year was delayed until February 26, 1970, because of tooling and engineering problems." }
   ]
  },
  {
   "section": "production",
   "claimText": "In 1973 the special-order LS2 SD-455 option cost $550 and was taken by 180 automatic and 72 manual cars, 252 in total; this count rests on one source.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["wikipedia-2nd-gen"],
   "evidence": [
    { "ref": "wikipedia-2nd-gen", "quote": "The special ordered $550 Option LS2 SD-455 production saw 180 automatics and 72 manuals" }
   ]
  },
  {
   "section": "production",
   "claimText": "Hagerty states that only about 1,286 Trans Ams were produced in 1972.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["hagerty-1972"],
   "evidence": [
    { "ref": "hagerty-1972", "quote": "In 1972 only about 1,286 Trans Ams were produced, making it a tough find." }
   ]
  },
  {
   "section": "specs",
   "claimText": "Hagerty describes the standard 1972 455 High Output as outdoing the Camaro's 402 by 60 hp.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["hagerty-1972"],
   "evidence": [
    { "ref": "hagerty-1972", "quote": "outdid the Camaro's 402 by 60 hp" }
   ]
  },
  {
   "section": "specs",
   "claimText": "Emissions rules led Pontiac to fit the Oldsmobile 403 to cars sold in California and high-altitude states because the Pontiac 400 could not meet their requirements.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["wikipedia-2nd-gen", "motorious-y82"],
   "evidence": [
    { "ref": "wikipedia-2nd-gen", "quote": "The Oldsmobile 403 was implemented as the 400 Pontiac could not satisfy emissions requirements for high-altitude states and California." },
    { "ref": "motorious-y82", "quote": "equipped with the W72 high-performance 400 CID V8 engine and an automatic transmission" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 1980-1981 turbo 4.9 used a Garrett TB305 turbocharger feeding a single four-barrel Rochester Quadrajet carburetor and made 210 hp and 345 lb-ft.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["wikipedia-2nd-gen", "jalopnik-1980-turbo"],
   "evidence": [
    { "ref": "wikipedia-2nd-gen", "quote": "a Garrett TB305 turbo attached to a single Rochester Quadrajet four-barrel carburetor" },
    { "ref": "jalopnik-1980-turbo", "quote": "210 horses and 345 lb ft of" }
   ]
  },
  {
   "section": "history",
   "claimText": "1980 was the first model year without a big-block in the Trans Am, and the 4.9 liter turbo was the last Pontiac V8 to be fitted to any Firebird.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["jalopnik-1980-turbo"],
   "evidence": [
    { "ref": "jalopnik-1980-turbo", "quote": "the 4.9-litre turbo would also prove to be the last V8 by Pontiac ever to find its way under any Firebird's hood" }
   ]
  },
  {
   "section": "history",
   "claimText": "The turbo 301 began as a student project at the General Motors Institute in Flint before Pontiac Engine Development refined it.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["jalopnik-1980-turbo"],
   "evidence": [
    { "ref": "jalopnik-1980-turbo", "quote": "a student project at what was then the General Motors Institute in Flint" }
   ]
  },
  {
   "section": "history",
   "claimText": "The black-and-gold scheme was created by GM design chief Bill Mitchell to celebrate Pontiac's 50th anniversary in 1976, so it predates Smokey and the Bandit.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["motorious-y82", "scm-bandit"],
   "evidence": [
    { "ref": "motorious-y82", "quote": "was actually created by GM design boss Bill Mitchell to celebrate Pontiac's 50-year anniversary in 1976." },
    { "ref": "scm-bandit", "quote": "from just another muscle-car wannabe to the status of a cultural icon." }
   ]
  },
  {
   "section": "production",
   "claimText": "More than 15,000 Y82/Y81 Special Edition Trans Ams were built in 1977.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["motorious-y82"],
   "evidence": [
    { "ref": "motorious-y82", "quote": "Compared to the more than 15,000 Y82/Y81 Trans Ams built in '77" },
   ]
  },
  {
   "section": "market",
   "claimText": "A 1977 Trans Am TA 6.6 used to promote Smokey and the Bandit, and not the car that appeared on screen, sold in December 2014 for $450,000 against a pre-auction estimate of $60,000 to $80,000.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["auto123-bandit-sale"],
   "evidence": [
    { "ref": "auto123-bandit-sale", "quote": "used to promote the film (not even the actual one that appeared on screen) and later given to Reynolds as a gift." }
   ]
  },
  {
   "section": "problems",
   "claimText": "Octane names the rear chassis rails, spring mounts, floorpan and the base of the windshield as the places a second-generation Trans Am rusts.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["octane-guide", "hagerty-1972"],
   "evidence": [
    { "ref": "octane-guide", "quote": "the rear chassis rails, spring mounts, floorpan and the windscreen base" },
    { "ref": "hagerty-1972", "quote": "white with a blue stripe or blue with a white stripe" }
   ]
  },
  {
   "section": "market",
   "claimText": "classic.com tracks the second-generation Trans Am as Pontiac Trans Am - Standard Variants - 2nd Gen but places historical pricing behind a membership prompt, so no dated classic.com benchmark was obtainable.",
   "confidence": "low",
   "status": "verified",
   "sourceRefs": ["classic-1978-listing"],
   "evidence": [
    { "ref": "classic-1978-listing", "quote": "This one is off market. Follow the Pontiac Trans Am - Standard Variants - 2nd Gen market for new listing alerts." }
   ]
  },
  {
   "section": "history",
   "claimText": "The 1977 Trans Am Special Edition became famous after appearing in Smokey and the Bandit.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["wikipedia-2nd-gen"],
   "evidence": [
    { "ref": "wikipedia-2nd-gen", "quote": "The 1977 Trans-Am special edition became famous after being featured in Smokey and the Bandit." }
   ]
  }
 ]
};
