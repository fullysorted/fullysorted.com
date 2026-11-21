/**
 * Researched model draft - Jeep Wrangler YJ (1987-1995).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedWranglerYj = {
 "slug": "jeep/wrangler-yj",
 "make": "Jeep",
 "model": "Wrangler",
 "generation": "YJ",
 "generationCode": "YJ",
 "trim": null,
 "yearStart": 1987,
 "yearEnd": 1995,
 "bodyStyles": [
  "2-door open utility vehicle with soft top",
  "2-door open utility vehicle with removable hardtop"
 ],
 "engines": [
  "2.5-liter AMC inline four, fuel injected, 117 hp per Wikipedia and Drivingline (135 lb-ft per Drivingline); Quadratec lists 120 hp at 5,400 rpm and 140 lb-ft at 3,250 rpm. Standard throughout 1987-1995",
  "4.2-liter AMC inline six, carbureted, 112 hp at 3,000 rpm and 210 lb-ft at 2,000 rpm per Quadratec (Drivingline gives 114 hp). Optional from 1987 until the fuel-injected 4.0 replaced it for 1991",
  "4.0-liter AMC inline six, fuel injected, 180 hp per Consumer Guide, Hagerty and Drivingline's Renegade article; 190 hp at 4,750 rpm and 225 lb-ft at 4,000 rpm per Quadratec and Wikipedia. Replaced the 4.2 for the 1991 model year"
 ],
 "productionTotal": null,
 "productionNotes": "No production total is given on this page, because no manufacturer or registry source for one was found. Wikipedia and a jeepfan.com fan list both give 632,231 YJs for 1987 through the 1995 model year. Only Wikipedia gives 685,071, stating that YJs were still sold into mid-1996, bringing the total production number to that figure. Neither page cites a Jeep, AMC or Chrysler record, and no year-by-year count, no trim count (Renegade, Islander, Sahara, Rio Grande) and no US-only figure was found. A JeepTech production table for the YJ exists but carries placeholder values rather than numbers. Jeep's history page heads its YJ section 1987-1996, which is consistent with Wikipedia's statement that there was no 1996 model year Wrangler but cars were still being sold into 1996. This page uses the 1987-1995 model years. Assembly is stated two ways: Wikipedia records Brampton, Ontario until April 23, 1992 and Toledo, Ohio after, while Consumer Guide's 1990-95 entry says built in Canada. Coverage gaps in this research: no EPA fuel economy data could be retrieved (an archived fueleconomy.gov page returned only its wrapper); no period Car and Driver, Road and Track or MotorTrend test was fetched, so the period press rests on MotorWeek's 1987 test as recalled in a later TopSpeed retrospective and on Consumer Guide's used-car review; and no US list price from a manufacturer or period road test was found. The only price new is Wikipedia's $8,995 MSRP for a basic Wrangler in 1986, a single source.",
 "notableTrims": [
  {
   "name": "Renegade Decor Group (1990-1994)",
   "note": "Loaded-up Wranglers shipped to Autostyle for body-length flares and rocker panel extensions, integrated fog lights set into the forward flares and 15-inch aluminum rims. Drivingline puts the package at about $4,000, close to a third of the price of the Wrangler. Hagerty says Renegades command the highest YJ prices, though it calls the top trims all fairly close. Colors were initially white, red and black, later blue and bronze."
  },
  {
   "name": "Sahara (from 1988)",
   "note": "The upscale trim that debuted for 1988. Hagerty names it, with the Islander, after the Renegade on price and says they are all fairly close; the highest sold result the fetch returned from classic.com's 1995 page is a Sahara."
  },
  {
   "name": "Islander package (1988-1993)",
   "note": "The heavily stickered package that ran for six model years. Hagerty's undated editorial puts an Islander at about 11 percent over a base YJ."
  },
  {
   "name": "Laredo",
   "note": "The six was standard in the Laredo edition, per Consumer Guide. classic.com's 1987 page records a 1987 Laredo at $23,500 in July 2025, the top sold result on that page."
  },
  {
   "name": "Rio Grande (1995 only)",
   "note": "A one-year trim for the final model year. classic.com's 1995 page shows a Rio Grande sold for $6,000 in August 2025, the lowest sold result the fetch returned from that page."
  },
  {
   "name": "4.0-liter cars, 1991-1995",
   "note": "Fuel injection and the 4.0-liter six replaced the carbureted 4.2 for 1991. Sources split between 180 hp and 190 hp for this engine."
  }
 ],
 "specs": {
  "layout": "Front-engine, part-time four-wheel drive, two-door open body",
  "chassis": "Separate frame on widened leaf springs, with track bars and anti-roll bars added over the CJ",
  "engine": "2.5-liter AMC inline four (1987-1995); 4.2-liter carbureted AMC inline six (1987 until replaced for 1991); 4.0-liter fuel-injected AMC inline six (1991-1995)",
  "power": "Four: 117 hp (Wikipedia, Drivingline) or 120 hp at 5,400 rpm (Quadratec). 4.2 six: 112 hp at 3,000 rpm (Quadratec, Wikipedia, Hagerty) or 114 hp (Drivingline). 4.0 six: 180 hp (Consumer Guide, Hagerty) or 190 hp at 4,750 rpm (Quadratec, Wikipedia)",
  "torque": "Four: 135 lb-ft (Drivingline) or 140 lb-ft at 3,250 rpm (Quadratec). 4.2 six: 210 lb-ft at 2,000 rpm. 4.0 six: 225 lb-ft at 4,000 rpm per Quadratec; Drivingline says just over 200 lb-ft",
  "transmission": "Five-speed manual (Quadratec: AX-5 with the four and BA-10 with the 4.2 for 1987, AX-15 with the 4.0 for 1991); three-speed automatic with the six per the 1986 press kit as reported by The Autopian, and with the four from late 1994",
  "weight": "2,855 lb (2.5) and 2,940 lb (4.2 on the 1987 sheet, 4.0 on the 1991 sheet) per Quadratec; the 1986 press kit as reported by The Autopian quotes 3,022 lb for an unstated configuration",
  "acceleration": "4.0 six: 0-60 mph in 9.7 seconds, a Jeep claim reported by Consumer Guide, against 14.3 seconds for the carbureted 4.2. Renegade: 0-60 mph in the 12-second range per Drivingline",
  "wheelbase": "93.4 in (2,372 mm)",
  "length": "152.6 in (3,876 mm)",
  "fuel_tank": "15 gallons for 1987, 20 gallons for 1991, per Quadratec",
  "axles": "Dana 30 front; at the rear, JeepTech says the factory used only the Dana 35c, while Wikipedia lists a Dana 44 as optional in some years",
  "brakes": "Anti-lock brakes optional from 1993, six-cylinder models only",
  "us_list_price": "$8,995 MSRP for a basic Wrangler Base in 1986 per Wikipedia, single source; no US list price from a manufacturer or period road test was found",
  "assembly": "Brampton, Ontario until the plant closed on April 23, 1992, then Toledo, Ohio, per Wikipedia alone; Consumer Guide's 1990-95 entry says built in Canada",
  "model_years_us": "1987 through 1995; no 1996 model year, though YJs were still sold into mid-1996; TJ from 1997"
 },
 "summary": "The Wrangler YJ, built for the 1987 through 1995 US model years, replaced the CJ series. Jeep's own history page says so, and calls its square headlights a first, and a last, for this type of Jeep vehicle. Jeep lists a wider track, an angled grille and a modernized interior, and says the YJ had more in common mechanically with the Cherokee than the CJ-7. It launched under American Motors with a 2.5-liter four or a carbureted 4.2-liter six, both with a five-speed manual; The Autopian's reading of the 1986 press kit has a three-speed automatic for the six alone. Chrysler bought AMC on August 5, 1987, and for the 1991 model year a fuel-injected 4.0-liter six replaced the 4.2; sources split on its output, 180 hp or 190 hp. The collector trims are the Sahara from 1988, the Islander package from 1988 to 1993, the flared Renegade from 1990 to 1994 and the one-year 1995 Rio Grande. Wikipedia and a jeepfan.com list both give 632,231 YJs, neither citing a record; only Wikipedia gives 685,071, counting YJs sold into mid-1996. As of November 2026 the sold results returned from classic.com's 1987 and 1995 pages run from $6,000 to $47,250.",
 "history": "## Why the YJ exists\n\nJeep began working on a replacement for the CJ-7 in 1982, according to Drivingline's history of the model, and the result arrived as the 1987 Wrangler. Drivingline ties the work to a series of rollover lawsuits against AMC, and The Autopian's reading of the 1986 press kit calls rollover lawsuits the likely spur; Jeep's own history page does not mention them. Jeep lists a wider track, an angled grille, rectangular headlamps and a modernized interior, and says the Wrangler had more in common mechanically with the Cherokee than with the CJ-7. Drivingline adds that it sat half an inch lower than the CJ on widened leaf springs, and Wikipedia credits the track bars and anti-roll bars with making it less easy to flip. The press release is dated May 13, 1986, and American Motors sent the press kit to journalists in October 1986. Chrysler bought AMC on August 5, 1987, about a year after the Wrangler's introduction, so the YJ began as an AMC product and finished as a Chrysler one. The CJ-5 and CJ-7 that it replaced have their own page in this library.\n\n## The square headlights\n\nJeep's history page says the YJ's square headlights were a first, and a last, for this type of Jeep. MotorWeek's retrospective on its 1987 test recalls that purists complained about the headlights and the more comfortable cabin, and that the test found the power steering lifeless, especially on center. Consumer Guide's used-car review describes a stiff suspension and jarring travel over most surfaces, and a narrow stance that asks for conservative cornering speeds.\n\n## Engines and drivetrain\n\nAt launch the YJ offered a 2.5-liter AMC four and a carbureted 4.2-liter AMC six, both with a five-speed manual, and The Autopian's reading of the press kit has only the six with a three-speed automatic. Quadratec lists the 1987 four with the AX-5 and the six with the BA-10, and the 1991 4.0 with the AX-15. Output figures differ by source: the four is 117 hp in Wikipedia and Drivingline and 120 hp in Quadratec, and the 4.2 is 112 hp in Quadratec, Wikipedia and Hagerty against 114 hp in Drivingline, with all agreeing on 210 lb-ft. For 1991 a fuel-injected 4.0-liter six replaced the 4.2. Consumer Guide, Hagerty and Drivingline's Renegade article give it 180 hp; Wikipedia, Quadratec and Drivingline's history give 190 hp. Consumer Guide reports Jeep's claim of 9.7 seconds to 60 mph for the 4.0, against 14.3 seconds for the carbureted six. The front axle is a Dana 30. At the rear, JeepTech says the factory used only the Dana 35c, while Wikipedia says a Dana 44 was optional in some years.\n\n## Trims and yearly changes\n\nThe Sahara arrived for 1988, the same year as the Islander package, which ran to 1993. Wikipedia dates the Renegade Decor Group from October 1990 until 1994. Jeep shipped loaded-up Wranglers to a company called Autostyle, and Drivingline describes body-length flares and rocker panel extensions, integrated fog lights set into the forward flares and 15-inch aluminum rims; it puts the package at about $4,000, close to a third of the price of the Wrangler at the time. The roll cage was extended in 1992 to carry rear shoulder belts. Anti-lock brakes became an option in 1993 on six-cylinder models only, which Consumer Guide records as a first for a mini 4x4, and late in 1994 the four could be had with an automatic. The Rio Grande was offered only for 1995.\n\n## Where they were built, and how many\n\nWikipedia records YJ production in Brampton, Ontario, until the plant closed on April 23, 1992, and then in Toledo, Ohio. Consumer Guide's entry for the 1990-95 cars says only built in Canada, so the two sources do not line up, and the Toledo move rests on Wikipedia alone. Wikipedia and a jeepfan.com list both give 632,231 YJs built through the 1995 model year, neither citing a record; only Wikipedia gives 685,071, counting YJs still sold into mid-1996. No factory or registry count was found. Jeep's own history page heads its YJ section 1987-1996, which is consistent with Wikipedia's statement that there was no 1996 model year Wrangler but YJs were still sold into 1996, and Drivingline dates the TJ to the 1997 model year.",
 "marketNotes": "As of November 2026 classic.com does not print a market benchmark on the YJ pages read for this research; it lists individual results by model year, and those are what this section reports. Its 1995 page shows a 1995 Sahara sold for $47,250 in February 2025 and a 1995 SE for $25,550 in April 2025, and at the other end a 1995 Rio Grande for $6,000 in August 2025, a 1995 Wrangler for $6,700 in January 2025 and another for $11,000 in March 2025. Its 1987 page shows a 1987 Laredo sold for $23,500 in July 2025, a 1987 Wrangler for $10,650 in January 2025, a 1987 S for $7,300 in October 2025 and a 1987 Wrangler for $6,500 in September 2024. Neither page gives the condition of these cars, names the platform, or says whether a figure includes buyer's premium. Of the sold results the fetch returned from those two pages, the $6,000 Rio Grande is the lowest and the $47,250 Sahara the highest. Hagerty's editorial on the YJ, which carries no date on the page as fetched, says the widebody Renegades command the highest prices, followed by the Sahara and the Islander package, and adds that they are all fairly close; it puts an Islander at about 11 percent over a base YJ. No auction lot page was fetched, so no condition-graded result is quoted, and the four-cylinder and six-cylinder cars are not separated in the listings.",
 "whatToLookFor": "Quadratec's inspection guide says YJs are notorious for rust and names the places it goes past the surface: rear leaf spring mounts, frame rails, skid plate mounting areas, rear crossmembers, driver-side floorboards and roll bar mounting points. The same guide says moisture trapped beneath old carpet padding often ruins YJ floor pans. The front axle uses a vacuum-actuated Central Axle Disconnect, and Quadratec says that on a YJ with four-wheel-drive trouble there is a very good chance the vacuum lines are dry-rotted, cracked or disconnected; many owners eventually replace the system with a manual cable-actuated setup. On many early manual cars the clutch slave cylinder sits inside the bellhousing, and replacing it requires removing the transmission. Quadratec's leaf spring section describes a Wrangler that feels like it is wandering, hopping sideways or walking over bumps. The carbureted six was replaced by the fuel-injected 4.0-liter six for 1991, per Consumer Guide. A Renegade carries Autostyle's body-length flares and rocker panel extensions, integrated fog lights in the forward flares and 15-inch aluminum rims, in white, red or black at first and later blue and bronze. An Islander dates from 1988 to 1993 and a Rio Grande from 1995 only. At the rear axle, JeepTech says the factory used only the Dana 35c, while Wikipedia lists a Dana 44 as optional in some years. Anti-lock brakes were an option from 1993, on six-cylinder models only.",
 "commonProblems": "NHTSA's record for the YJ includes a campaign that bears directly on salt-belt cars: 98V005000 covered 293,369 1990 Wranglers whose front disc brake rotors could corrode severely after extended use in the salt belt, with dealers fitting rotors coated against corrosion. First-year 1987 cars had a cruise control module recall, 87V022000, covering 3,996 vehicles, for inconsistent cruise control operation. Consumer Guide notes that the rear main seals on 2.5- and 4.0-liter engines are prone to leaking on the 1991-95 cars. Quadratec's guide lists the vacuum front axle disconnect, the internal clutch slave cylinder on early manual cars, leaf springs, and bad electrical grounds, with cleaning the firewall ground straps and battery connections as its first step. The same guide calls YJs notorious for rust in the frame rails, spring mounts, crossmembers and floors. Consumer Guide describes a stiff suspension and jarring travel over most surfaces, and MotorWeek found the power steering lifeless on center in 1987. No source consulted gives US repair costs for any of these items, so none are quoted here.",
 "valueTrajectory": "The only price new found for the YJ is Wikipedia's $8,995 MSRP for a basic Wrangler in 1986, a single source; no US list price from a manufacturer or period road test was found. As of November 2026 the sold results returned from classic.com's 1987 and 1995 pages run from $6,000 for a 1995 Rio Grande in August 2025 to $47,250 for a 1995 Sahara in February 2025, with a 1987 Laredo at $23,500 in July 2025 and a 1995 SE at $25,550 in April 2025 between them. The plain-named 1987 and 1995 Wranglers in those rows sold for $6,500 to $11,000 in 2024 and 2025. Hagerty's undated editorial says YJs are big with Gen Xers, which it calls a good sign for future collectability, while saying on the same page that its own vehicle rating is not an indicator of future collectability. It orders the trims Renegade, then Sahara and Islander, and says they are all fairly close. Nothing in the sources fetched gives a dated multi-year index for the YJ.",
 "overallConfidence": "medium",
 "sources": [
  {
   "ref": "jeep-history-1980s",
   "title": "Jeep History: 1980s",
   "url": "https://www.jeep.com/history/1980s.html",
   "publisher": "Jeep (Stellantis)",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Manufacturer history page. Section headed 1987-1996 Jeep Wrangler (YJ): replaced the CJ series; wider track, angled grille, rectangular headlamps, modernized interior; square headlights a first and last; mechanically closer to the Cherokee than the CJ-7; AMC sold to Chrysler August 5, 1987. No engine or production figures."
  },
  {
   "ref": "autopian-presskit",
   "title": "This Rare 1986 Jeep Wrangler Press Kit Is Filled With Information That Never Made It To The Internet",
   "url": "https://www.theautopian.com/this-rare-1986-jeep-wrangler-press-kit-is-filled-with-information-that-never-made-it-to-the-internet/",
   "publisher": "The Autopian",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "David Tracy, June 15, 2023, reading the AMC press kit: release dated May 13, 1986, kit sent to journalists October 1986; carbureted 4.2 six; both engines with a five-speed manual, three-speed automatic only with the six; 3,022 lb curb weight (configuration not stated); rollover lawsuits described as the likely spur. No prices."
  },
  {
   "ref": "drivingline-history",
   "title": "How The YJ Was Born: A History Of The First Jeep Wrangler",
   "url": "https://www.drivingline.com/articles/how-the-yj-was-born-a-history-of-the-first-jeep-wrangler/",
   "publisher": "Drivingline",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Benjamin Hunting, February 16, 2022: CJ-7 replacement work began 1982; rollover lawsuits against AMC; half an inch lower and wider, widened leaf springs; 2.5 at 117 hp and 135 lb-ft; 4.2 at 114 hp and 210 lb-ft; 4.0 at 190 hp by 1991; Islander from 1988; Chrysler sale 1987; TJ for the 1997 model year."
  },
  {
   "ref": "drivingline-renegade",
   "title": "The 1990-1994 Jeep Wrangler YJ Renegade Was The Weirdest Street Performance 4x4 SUV Of The 90s",
   "url": "https://www.drivingline.com/articles/the-1990-94-jeep-wrangler-renegade-yj-was-the-weirdest-street-performance-4x4-suv-of-the-90s/",
   "publisher": "Drivingline",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Benjamin Hunting, April 28, 2022: Renegade 1990-1994, converted by Autostyle; body-length flares, rocker extensions, fog lights in flares, 15-inch aluminum wheels; 180 hp and just over 200 lb-ft, 0-60 mph in the 12-second range; package about $4,000, close to a third of the Wrangler's price; colors white, red, black, later blue and bronze."
  },
  {
   "ref": "hagerty-yj",
   "title": "Is it finally the YJ Jeep Wrangler's time to shine?",
   "url": "https://www.hagerty.com/media/?p=6942",
   "publisher": "Hagerty",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Hagerty editorial, no date or byline on the page as fetched: 112 hp carbureted six, 4.0 six at 180 hp for the 1991 model year; Renegades command the highest prices, followed by the Sahara and Islander, all fairly close; Islander about 11 percent over a base YJ; YJs big with Gen Xers, a good sign for future collectability, with the editor's note that the HVR is not an indicator of future collectability. Its undated dollar medians are not used."
  },
  {
   "ref": "consumerguide-yj",
   "title": "1990-95 Jeep Wrangler",
   "url": "https://consumerguide.com/used/1990-95-jeep-wrangler",
   "publisher": "Consumer Guide Automotive",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "US used-car review: 180 hp fuel-injected six replaced the carbureted six for 1991; Jeep claim 9.7 seconds 0-60 mph versus 14.3 for the old six; first mini 4x4 with antilock brakes, six-cylinder only; rear shoulder belts and extended rollbar for 1992; automatic with the four late in 1994; rear main seals prone to leakage; stiff, jarring ride; six standard in the Laredo; built in Canada."
  },
  {
   "ref": "motorweek-retro",
   "title": "Motor Week Retro Review: 1987 Jeep Wrangler",
   "url": "https://www.topspeed.com//cars/car-news/motor-week-retro-review-1987-jeep-wrangler-ar169674.html",
   "publisher": "TopSpeed",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Mark McNabb, May 29, 2015, recounting MotorWeek's 1987 test: base 2.5-liter four, optional 4.2-liter six; purists complained about the square headlights and the more comfortable cabin; power steering lifeless, especially on center. No figures."
  },
  {
   "ref": "quadratec-1987",
   "title": "1987 Jeep Wrangler YJ Specifications",
   "url": "https://quadratec.com/c/reference/1987-jeep-wrangler-yj-specs",
   "publisher": "Quadratec",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "US Jeep parts retailer spec sheet: 4.2 at 112 hp at 3,000 rpm and 210 lb-ft at 2,000 rpm; 2.5 at 120 hp at 5,400 rpm and 140 lb-ft at 3,250 rpm; AX-5 with the 2.5, BA-10 with the 4.2, A999 automatic with the 4.2; Dana 30 front, Dana 35c rear; 93.4 in wheelbase, 152.6 in length; 2,940 lb and 2,855 lb curb weights; 15-gallon tank."
  },
  {
   "ref": "quadratec-1991",
   "title": "1991 Jeep Wrangler YJ Specifications",
   "url": "https://www.quadratec.com/c/reference/1991-jeep-wrangler-yj-specs",
   "publisher": "Quadratec",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Spec sheet for 1991: 4.0 at 190 hp at 4,750 rpm and 225 lb-ft at 4,000 rpm; AX-15 with the 4.0, 32RH (A999) automatic; Dana 30 and Dana 35c; 93.4 in wheelbase; 2,940 lb and 2,855 lb; 20-gallon tank. No MSRP or production."
  },
  {
   "ref": "quadratec-checklist",
   "title": "Used Jeep Wrangler Inspection Checklist by Generation",
   "url": "https://www.quadratec.com/c/howto/used-jeep-wrangler-inspection-checklist-by-generation",
   "publisher": "Quadratec",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "YJ section: vacuum-actuated Central Axle Disconnect and its dry-rotted lines, cable conversions; leaf springs and bushings; clutch slave cylinder inside the bellhousing on many early manual cars; rust locations (spring mounts, frame rails, skid plate mounts, crossmembers, floorboards, roll bar mounts); electrical grounds. No dollar costs."
  },
  {
   "ref": "jeeptech-yj",
   "title": "Wrangler YJ",
   "url": "https://terryhowe.github.io/JeepTech/models/yj",
   "publisher": "JeepTech",
   "sourceType": "specialist",
   "reliability": "low",
   "notes": "Enthusiast technical reference, low reliability: states the factory used only the Dana 35c rear axle in the YJ. Its production table holds placeholders, not figures. Its transmission dates are not used because no second source carries them."
  },
  {
   "ref": "wikipedia-yj",
   "title": "Jeep Wrangler (YJ)",
   "url": "https://en.wikipedia.org/wiki/Jeep_Wrangler_(YJ)",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Pointer source: 632,231 built through the 1995 model year and 685,071 counting YJs still sold into mid-1996; $8,995 MSRP for a basic Wrangler in 1986; Brampton until April 23, 1992, then Toledo; 117 hp four, 112 hp carbureted six, 190 hp 4.0 from 1991; Sahara 1988, Islander 1988-1993, Renegade Decor Group October 1990-1994, Rio Grande 1995 only; roll cage extended 1992; ABS option 1993; Dana 44 rear optional in some years; no 1996 model year."
  },
  {
   "ref": "jeepfan-production",
   "title": "Question: Jeep Production Numbers",
   "url": "https://jeepfan.com/blog/question-jeep-production-numbers",
   "publisher": "jeepfan.com",
   "sourceType": "club-forum",
   "reliability": "low",
   "notes": "Fan-site production list, published January 2007 and modified July 2011: 632,231 for the Wrangler YJ 1987-1995. No year or trim breakdown, no stated source."
  },
  {
   "ref": "classic-yj",
   "title": "Jeep Wrangler YJ Market",
   "url": "https://www.classic.com/m/jeep/wrangler/yj",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Model page as fetched November 2026: YJ 1987 to 1995, introduced for the 1987 model year. No benchmark value, average or sale count printed in the content returned."
  },
  {
   "ref": "classic-yj-1995",
   "title": "1995 Jeep Wrangler YJ Market",
   "url": "https://www.classic.com/m/jeep/wrangler/yj/year-1995",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Year page as fetched November 2026, sold results: 1995 Sahara $47,250 February 9, 2025; 1995 SE $25,550 April 16, 2025; 1995 Wrangler $11,000 March 19, 2025; 1995 Rio Grande $6,000 August 20, 2025; 1995 Wrangler $6,700 January 28, 2025. No benchmark, premium or condition stated."
  },
  {
   "ref": "classic-yj-1987",
   "title": "1987 Jeep Wrangler YJ Market",
   "url": "https://www.classic.com/m/jeep/wrangler/yj/year-1987",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Year page as fetched November 2026, sold results: 1987 Laredo $23,500 July 21, 2025; 1987 Wrangler $10,650 January 26, 2025; 1987 S $7,300 October 4, 2025; 1987 Wrangler $6,500 September 4, 2024. No benchmark, premium or condition stated."
  },
  {
   "ref": "nhtsa-98v005",
   "title": "Jeep Wrangler 1990: Service Brakes, Hydraulic: Foundation Components: Disc: Rotor",
   "url": "https://auto-recalls.justia.com/jeep/wrangler/1990/98v005000",
   "publisher": "Justia (NHTSA recall data)",
   "sourceType": "government",
   "reliability": "high",
   "notes": "Mirror of NHTSA campaign 98V005000, received January 12, 1998: 293,369 vehicles potentially affected, 1990 Wrangler; front disc brake rotors can corrode severely in the salt belt; dealers replace with corrosion-coated rotors."
  },
  {
   "ref": "nhtsa-87v022",
   "title": "Jeep Wrangler 1987: Vehicle Speed Control",
   "url": "https://auto-recalls.justia.com/jeep/wrangler/1987/87v022000",
   "publisher": "Justia (NHTSA recall data)",
   "sourceType": "government",
   "reliability": "high",
   "notes": "Mirror of NHTSA campaign 87V022000, received February 25, 1987: 3,996 vehicles potentially affected, 1987 model year; cruise control module could operate inconsistently; module replaced as necessary. Confirms 1987 as a US model year in the federal record."
  }
 ],
 "claims": [
  {
   "section": "history",
   "claimText": "Jeep began work on a replacement for the CJ-7 in 1982, and the Wrangler YJ replaced the long-running CJ series.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "drivingline-history",
    "jeep-history-1980s"
   ],
   "evidence": [
    {
     "ref": "drivingline-history",
     "quote": "Jeep began working on a replacement for the CJ-7 in 1982."
    },
    {
     "ref": "jeep-history-1980s",
     "quote": "The Wrangler (YJ) replaced the long-lived CJ Series."
    }
   ]
  },
  {
   "section": "history",
   "claimText": "Drivingline ties the YJ's development to rollover lawsuits against AMC and The Autopian calls rollover lawsuits the likely spur; Jeep's own history page does not mention them, and Wikipedia credits the YJ's track bars and anti-roll bars with making it less easy to flip.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "drivingline-history",
    "autopian-presskit",
    "wikipedia-yj"
   ],
   "evidence": [
    {
     "ref": "drivingline-history",
     "quote": "a series of lawsuits against AMC regarding rollovers"
    },
    {
     "ref": "autopian-presskit",
     "quote": "Likely spurred by some bad PR from rollover lawsuits in the 1980s"
    },
    {
     "ref": "wikipedia-yj",
     "quote": "less easy to flip by untrained or unwary drivers"
    }
   ]
  },
  {
   "section": "history",
   "claimText": "Jeep describes the YJ as having a wider track, an angled grille, rectangular headlamps and a modernized interior, mechanically closer to the Cherokee than the CJ-7, and Drivingline says it sat half an inch lower than the CJ.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "jeep-history-1980s",
    "drivingline-history"
   ],
   "evidence": [
    {
     "ref": "jeep-history-1980s",
     "quote": "It had a wider track, angled grille, rectangular headlamps, and a modernized interior."
    },
    {
     "ref": "jeep-history-1980s",
     "quote": "Mechanically, the Wrangler had more in common with the Cherokee than the CJ-7."
    },
    {
     "ref": "drivingline-history",
     "quote": "lower (by half an inch) and wider than the older Jeep"
    }
   ]
  },
  {
   "section": "history",
   "claimText": "The YJ's square headlights were a first and last for this type of Jeep, and purists complained about them; MotorWeek's 1987 test found the power steering lifeless, especially on center.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "jeep-history-1980s",
    "motorweek-retro"
   ],
   "evidence": [
    {
     "ref": "jeep-history-1980s",
     "quote": "The Wrangler YJ had square headlights, which was a first (and last) for this type of Jeep vehicle."
    },
    {
     "ref": "motorweek-retro",
     "quote": "Purists did complain about the square headlights and the more luxurious cabin."
    },
    {
     "ref": "motorweek-retro",
     "quote": "Regrettably, Motor Week's testing revealed the YJ's power steering was lifeless, especially on-center."
    }
   ]
  },
  {
   "section": "history",
   "claimText": "The Wrangler press release is dated May 13, 1986, AMC sent the press kit to journalists in October 1986, and the YJ was introduced for the 1987 model year.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "autopian-presskit",
    "classic-yj"
   ],
   "evidence": [
    {
     "ref": "autopian-presskit",
     "quote": "For Release May 13, 1986"
    },
    {
     "ref": "autopian-presskit",
     "quote": "American Motors sent to journalists in October, 1986"
    },
    {
     "ref": "classic-yj",
     "quote": "The first generation of Jeep Wrangler was introduced for the 1987 model year."
    }
   ]
  },
  {
   "section": "history",
   "claimText": "American Motors was sold to Chrysler on August 5, 1987, about a year after the Wrangler's introduction.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "jeep-history-1980s",
    "drivingline-history"
   ],
   "evidence": [
    {
     "ref": "jeep-history-1980s",
     "quote": "On Aug. 5, 1987, about a year after the introduction of the Wrangler"
    },
    {
     "ref": "drivingline-history",
     "quote": "After its sale to Chrysler in 1987"
    }
   ]
  },
  {
   "section": "production",
   "claimText": "Wikipedia records the YJ built in Brampton, Ontario, until the plant closed on April 23, 1992, and then in Toledo, Ohio. Consumer Guide's entry for the 1990-95 cars says only built in Canada. The two sources do not line up, and the Toledo move rests on Wikipedia alone.",
   "confidence": "medium",
   "status": "unverified",
   "sourceRefs": [
    "wikipedia-yj",
    "consumerguide-yj"
   ],
   "evidence": [
    {
     "ref": "wikipedia-yj",
     "quote": "was built in Brampton, Ontario, Canada, until the plant closed on April 23, 1992."
    },
    {
     "ref": "wikipedia-yj",
     "quote": "Production was then moved to Toledo, Ohio"
    },
    {
     "ref": "consumerguide-yj",
     "quote": "Built in Canada"
    }
   ]
  },
  {
   "section": "production",
   "claimText": "Wikipedia and a jeepfan.com fan list both give 632,231 YJs built through the 1995 model year, neither citing a record; only Wikipedia gives 685,071, counting YJs still sold into mid-1996. No factory or registry figure was found, so no total is stated.",
   "confidence": "medium",
   "status": "unverified",
   "sourceRefs": [
    "wikipedia-yj",
    "jeepfan-production",
    "jeeptech-yj"
   ],
   "evidence": [
    {
     "ref": "wikipedia-yj",
     "quote": "632,231 YJs were built through the 1995 model year, although YJs were still sold into mid-1996, bringing the total production number to 685,071 units."
    },
    {
     "ref": "jeepfan-production",
     "quote": "632,231 – Wrangler YJ 1987-1995"
    },
    {
     "ref": "jeeptech-yj",
     "quote": "| 1987 | xxx - xxx | ppp |"
    }
   ]
  },
  {
   "section": "history",
   "claimText": "Jeep's history page heads its YJ section 1987-1996 while classic.com lists the YJ for 1987 to 1995; Wikipedia's statement that there was no 1996 model year Wrangler but YJs were still sold into mid-1996 is consistent with Jeep's heading, and Drivingline dates the TJ replacement to the 1997 model year.",
   "confidence": "medium",
   "status": "unverified",
   "sourceRefs": [
    "jeep-history-1980s",
    "wikipedia-yj",
    "classic-yj",
    "drivingline-history"
   ],
   "evidence": [
    {
     "ref": "jeep-history-1980s",
     "quote": "1987-1996 JEEP® WRANGLER (YJ)"
    },
    {
     "ref": "wikipedia-yj",
     "quote": "There were no 1996 model year Jeep Wranglers."
    },
    {
     "ref": "wikipedia-yj",
     "quote": "632,231 YJs were built through the 1995 model year, although YJs were still sold into mid-1996, bringing the total production number to 685,071 units."
    },
    {
     "ref": "classic-yj",
     "quote": "Jeep Wrangler - YJ (1987 to 1995)"
    },
    {
     "ref": "drivingline-history",
     "quote": "By the time the Wrangler YJ was replaced by the TJ for the 1997 model year"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "At launch the YJ offered a 2.5-liter four and a carbureted 4.2-liter six, both with a five-speed manual and only the six with a three-speed automatic; Quadratec lists the AX-5 with the four, the BA-10 with the six and the A999 automatic.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "autopian-presskit",
    "quadratec-1987",
    "motorweek-retro"
   ],
   "evidence": [
    {
     "ref": "autopian-presskit",
     "quote": "both offered bolted to a five-speed manual and just the six available with a three-speed automatic"
    },
    {
     "ref": "quadratec-1987",
     "quote": "BA-10 | 4.2L | 5-speed Manual"
    },
    {
     "ref": "motorweek-retro",
     "quote": "the base was the AMC 2.5-liter four-cylinder while the 4.2-liter inline six-cylinder was optional"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "Quadratec lists the AX-5 five-speed with the four and the BA-10 five-speed with the 4.2 for 1987, and the AX-15 five-speed with the 4.0 for 1991; both are spec sheets from one US specialist.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "quadratec-1987",
    "quadratec-1991"
   ],
   "evidence": [
    {
     "ref": "quadratec-1987",
     "quote": "AX-5 | 2.5L | 5-speed Manual"
    },
    {
     "ref": "quadratec-1987",
     "quote": "BA-10 | 4.2L | 5-speed Manual"
    },
    {
     "ref": "quadratec-1991",
     "quote": "AX-15 | 4.0L | 5-speed Manual"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 2.5-liter four is rated at 117 hp by Wikipedia and Drivingline (135 lb-ft per Drivingline) and at 120 hp at 5,400 rpm and 140 lb-ft at 3,250 rpm by Quadratec.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "wikipedia-yj",
    "drivingline-history",
    "quadratec-1987"
   ],
   "conflictNote": "Wikipedia and Drivingline state 117 hp, Drivingline with 135 lb-ft; Quadratec's 1987 and 1991 spec sheets state 120 hp and 140 lb-ft. No source explains the difference. Unresolved here.",
   "evidence": [
    {
     "ref": "wikipedia-yj",
     "quote": "Power outputs at the time of introduction are 117 hp (87 kW) for the fuel-injected four-cylinder,"
    },
    {
     "ref": "drivingline-history",
     "quote": "a 2.5L, cylinder engine (117 hp, 135 lb-ft of torque)"
    },
    {
     "ref": "quadratec-1987",
     "quote": "2.5L AMC Straight-4 | 4 | 120 hp @ 5,400 RPM | 140 lb/ft @ 3,250 RPM"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The carbureted 4.2-liter six is rated at 112 hp at 3,000 rpm and 210 lb-ft at 2,000 rpm by Quadratec, with Wikipedia and Hagerty also giving 112 hp, while Drivingline gives 114 hp and 210 lb-ft.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "quadratec-1987",
    "wikipedia-yj",
    "hagerty-yj",
    "drivingline-history"
   ],
   "conflictNote": "Quadratec, Wikipedia and Hagerty give 112 hp; Drivingline gives 114 hp. All agree on 210 lb-ft. Unresolved by any source consulted here.",
   "evidence": [
    {
     "ref": "quadratec-1987",
     "quote": "4.2L AMC Straight-6 | 6 | 112 hp @ 3,000 RPM | 210 lb/ft @ 2,000 RPM"
    },
    {
     "ref": "wikipedia-yj",
     "quote": "while the carbureted 'six only produces 112 hp (84 kW),"
    },
    {
     "ref": "hagerty-yj",
     "quote": "the 112 hp of the carbureted six"
    },
    {
     "ref": "drivingline-history",
     "quote": "a 4.2L inline six good for 114 hp and 210 lb-ft of torque"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "For the 1991 model year a fuel-injected 4.0-liter six replaced the carbureted six; Consumer Guide, Hagerty and Drivingline's Renegade article rate it at 180 hp, while Wikipedia, Quadratec (190 hp at 4,750 rpm and 225 lb-ft at 4,000 rpm) and Drivingline's history rate it at 190 hp.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "consumerguide-yj",
    "hagerty-yj",
    "drivingline-renegade",
    "wikipedia-yj",
    "quadratec-1991",
    "drivingline-history"
   ],
   "conflictNote": "Consumer Guide, Hagerty and Drivingline's Renegade article state 180 hp, with Drivingline giving just over 200 lb-ft; Wikipedia, Quadratec and Drivingline's history article state 190 hp, with Quadratec giving 225 lb-ft. Drivingline publishes both figures in two different articles. Unresolved by any source consulted here.",
   "evidence": [
    {
     "ref": "consumerguide-yj",
     "quote": "A 180-horsepower 6-cylinder engine with fuel injection replaced the prior carbureted six for 1991"
    },
    {
     "ref": "hagerty-yj",
     "quote": "a healthy 180 hp"
    },
    {
     "ref": "drivingline-renegade",
     "quote": "its 180 hp and just over 200 lb-ft of torque saw it post a 0-60 mph time in the 12 second range."
    },
    {
     "ref": "wikipedia-yj",
     "quote": "Starting in 1991, a fuel-injected, 190 hp (142 kW) 4.0-liter AMC 242 variant replaced the AMC 258 straight-six unit."
    },
    {
     "ref": "quadratec-1991",
     "quote": "4.0L AMC Straight-6 | 6 | 190 hp @ 4,750 RPM | 225 lb/ft @ 4,000 RPM"
    },
    {
     "ref": "drivingline-history",
     "quote": "By 1991 AMC's venerable 190 hp 4.0L inline six arrived on the scene."
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "Consumer Guide reports Jeep's claim of 9.7 seconds to 60 mph for the fuel-injected six against 14.3 seconds for the old carbureted six, and Drivingline puts the Renegade at 0-60 mph in the 12-second range; the first is a factory claim and the second a magazine summary of a heavier package, so they are not treated as a conflict.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "consumerguide-yj",
    "drivingline-renegade"
   ],
   "evidence": [
    {
     "ref": "consumerguide-yj",
     "quote": "Jeep claimed a 0-60-mph acceleration time of 9.7 seconds, versus 14.3 seconds for the old carbureted 6-cylinder engine."
    },
    {
     "ref": "drivingline-renegade",
     "quote": "its 180 hp and just over 200 lb-ft of torque saw it post a 0-60 mph time in the 12 second range."
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "Quadratec lists curb weights of 2,855 lb for the 2.5-liter YJ and 2,940 lb for the 4.2 on its 1987 sheet and for the 4.0 on its 1991 sheet, and the 1986 press kit as reported by The Autopian gives a 3,022 lb curb weight for a configuration it does not state.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "quadratec-1987",
    "quadratec-1991",
    "autopian-presskit"
   ],
   "evidence": [
    {
     "ref": "quadratec-1987",
     "quote": "2855 lbs"
    },
    {
     "ref": "quadratec-1987",
     "quote": "2940 lbs"
    },
    {
     "ref": "quadratec-1991",
     "quote": "4.0L AMC Straight-6 | 2000 lbs | 800 lbs | 2940 lbs"
    },
    {
     "ref": "autopian-presskit",
     "quote": "3,022 pound curb weight"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "Quadratec lists a 93.4 in wheelbase and 152.6 in overall length for the YJ, with a 15-gallon fuel tank for 1987 and a 20-gallon tank for 1991.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "quadratec-1987",
    "quadratec-1991"
   ],
   "evidence": [
    {
     "ref": "quadratec-1987",
     "quote": "93.4\""
    },
    {
     "ref": "quadratec-1987",
     "quote": "152.6\""
    },
    {
     "ref": "quadratec-1987",
     "quote": "15 Gallons"
    },
    {
     "ref": "quadratec-1991",
     "quote": "20 Gallons"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The YJ used a Dana 30 front axle; at the rear, JeepTech says the factory used only the Dana 35c, while Wikipedia lists a Dana 44 as optional in some years.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "quadratec-1987",
    "jeeptech-yj",
    "wikipedia-yj"
   ],
   "conflictNote": "JeepTech (low reliability) states the factory used only the Dana 35c at the rear; Wikipedia (medium) lists a Dana 44 as optional in some years without naming them. Unresolved by any source consulted here.",
   "evidence": [
    {
     "ref": "quadratec-1987",
     "quote": "DANA 30 (181 mm)"
    },
    {
     "ref": "jeeptech-yj",
     "quote": "The factory only used the Dana 35c in the rear of the YJ."
    },
    {
     "ref": "wikipedia-yj",
     "quote": "Rear axle: Dana 35, Dana 44 optional in some years"
    }
   ]
  },
  {
   "section": "history",
   "claimText": "The Sahara debuted for 1988, the Islander package ran from 1988 to 1993, the Rio Grande was offered only for 1995, and the six was standard in the Laredo.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-yj",
    "drivingline-history",
    "consumerguide-yj"
   ],
   "evidence": [
    {
     "ref": "wikipedia-yj",
     "quote": "In 1988, the Sahara model debuted."
    },
    {
     "ref": "wikipedia-yj",
     "quote": "From 1988 to 1993, Jeep produced an options package known as the \"Islander\"."
    },
    {
     "ref": "drivingline-history",
     "quote": "The party began with the Islander package in 1988."
    },
    {
     "ref": "wikipedia-yj",
     "quote": "This trim was only available in 1995."
    },
    {
     "ref": "consumerguide-yj",
     "quote": "The six was standard in the Laredo edition, and available in all except the Wrangler S."
    }
   ]
  },
  {
   "section": "history",
   "claimText": "The Renegade Decor Group ran from October 1990 until 1994; Jeep shipped loaded-up Wranglers to Autostyle, and Drivingline describes body-length flares and rocker panel extensions, integrated fog lights set into the forward flares and 15-inch aluminum rims, in white, red and black at first and later blue and bronze, with the package costing about $4,000, close to a third of the price of the Wrangler.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-yj",
    "drivingline-renegade"
   ],
   "evidence": [
    {
     "ref": "wikipedia-yj",
     "quote": "From October 1990 until 1994, Jeep produced an options package on the YJ Wrangler listed as the \"Renegade Decor Group\"."
    },
    {
     "ref": "drivingline-renegade",
     "quote": "Jeep shipped loaded-up versions of the YJ Wrangler to a company called Autostyle."
    },
    {
     "ref": "drivingline-renegade",
     "quote": "connected by body-length flares and rocker panel extensions."
    },
    {
     "ref": "drivingline-renegade",
     "quote": "Integrated fog lights were set into the forward flares."
    },
    {
     "ref": "drivingline-renegade",
     "quote": "included 15-inch aluminum rims"
    },
    {
     "ref": "drivingline-renegade",
     "quote": "It cost about $4,000 for the Renegade's charms, which was close to a third of the price of the Wrangler at the time."
    },
    {
     "ref": "drivingline-renegade",
     "quote": "Colors were initially limited to white, red, and black, expanding to include blue and eventually bronze."
    }
   ]
  },
  {
   "section": "history",
   "claimText": "The roll cage was extended in 1992 for rear shoulder belts, anti-lock brakes became an option in 1993 on six-cylinder models only, and an automatic became available with the four late in 1994.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-yj",
    "consumerguide-yj"
   ],
   "evidence": [
    {
     "ref": "wikipedia-yj",
     "quote": "The roll cage was extended in 1992 to allow for rear shoulder belts."
    },
    {
     "ref": "wikipedia-yj",
     "quote": "Anti-lock brakes were added as an option in 1993."
    },
    {
     "ref": "consumerguide-yj",
     "quote": "Wrangler became the first mini 4×4 to offer antilock braking, available only on 6-cylinder models."
    },
    {
     "ref": "consumerguide-yj",
     "quote": "An automatic transmission became available with 4-cylinder engines late this year."
    }
   ]
  },
  {
   "section": "history",
   "claimText": "Consumer Guide describes a stiff suspension with jarring travel over most surfaces and a narrow stance that demands conservative cornering speeds.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "consumerguide-yj"
   ],
   "evidence": [
    {
     "ref": "consumerguide-yj",
     "quote": "A stiff suspension makes for jarring travel over most surfaces."
    },
    {
     "ref": "consumerguide-yj",
     "quote": "The Wrangler's narrow stance and short wheelbase promise good maneuverability, but demand conservative cornering speeds."
    }
   ]
  },
  {
   "section": "summary",
   "claimText": "Wikipedia gives $8,995 MSRP for a basic Wrangler Base in 1986; this is a single-source figure, and no US list price from a manufacturer or period road test was found.",
   "confidence": "medium",
   "status": "unverified",
   "sourceRefs": [
    "wikipedia-yj"
   ],
   "evidence": [
    {
     "ref": "wikipedia-yj",
     "quote": "In 1986, a basic Wrangler Base cost $8,995 MSRP, or $26,246 in 2025."
    }
   ]
  },
  {
   "section": "market",
   "claimText": "As of November 2026 classic.com's 1995 YJ page records a 1995 Sahara sold for $47,250 in February 2025, a 1995 SE for $25,550 in April 2025, a 1995 Wrangler for $11,000 in March 2025, a 1995 Wrangler for $6,700 in January 2025 and a 1995 Rio Grande for $6,000 in August 2025; the page gives no condition and does not say whether these include buyer's premium.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-yj-1995"
   ],
   "evidence": [
    {
     "ref": "classic-yj-1995",
     "quote": "$47,250. 1995 Jeep Wrangler Sahara. Feb 9, 2025"
    },
    {
     "ref": "classic-yj-1995",
     "quote": "$25,550. 1995 Jeep Wrangler SE. Apr 16, 2025"
    },
    {
     "ref": "classic-yj-1995",
     "quote": "$11,000. 1995 Jeep Wrangler. Mar 19, 2025"
    },
    {
     "ref": "classic-yj-1995",
     "quote": "$6,700. 1995 Jeep Wrangler. Jan 28, 2025"
    },
    {
     "ref": "classic-yj-1995",
     "quote": "$6,000. 1995 Jeep Wrangler Rio Grande. Aug 20, 2025"
    }
   ]
  },
  {
   "section": "market",
   "claimText": "As of November 2026 classic.com's 1987 YJ page records a 1987 Laredo sold for $23,500 in July 2025, a 1987 Wrangler for $10,650 in January 2025, a 1987 S for $7,300 in October 2025 and a 1987 Wrangler for $6,500 in September 2024; the page gives no condition and does not say whether these include buyer's premium.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-yj-1987"
   ],
   "evidence": [
    {
     "ref": "classic-yj-1987",
     "quote": "$23,500. 1987 Jeep Wrangler Laredo. Jul 21, 2025"
    },
    {
     "ref": "classic-yj-1987",
     "quote": "$10,650. 1987 Jeep Wrangler. Jan 26, 2025"
    },
    {
     "ref": "classic-yj-1987",
     "quote": "$7,300. 1987 Jeep Wrangler S. Oct 4, 2025"
    },
    {
     "ref": "classic-yj-1987",
     "quote": "$6,500. 1987 Jeep Wrangler. Sep 4, 2024"
    }
   ]
  },
  {
   "section": "market",
   "claimText": "Hagerty's undated editorial says the widebody Renegades command the highest YJ prices, followed by the Sahara and Islander package, all fairly close; that an Islander costs about 11 percent more than a base YJ; and that YJs are big with Gen Xers, a good sign for future collectability, while its editor's note says the Hagerty Vehicle Rating is not an indicator of future collectability.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "hagerty-yj"
   ],
   "evidence": [
    {
     "ref": "hagerty-yj",
     "quote": "The funky, widebody Renegades command the highest prices."
    },
    {
     "ref": "hagerty-yj",
     "quote": "the upscale Sahara and fantastically stickered Islander package, yet they're all fairly close"
    },
    {
     "ref": "hagerty-yj",
     "quote": "Expect to pay about 11 percent more for an Islander compared to a base model YJ."
    },
    {
     "ref": "hagerty-yj",
     "quote": "YJs are big with Gen Xers"
    },
    {
     "ref": "hagerty-yj",
     "quote": "which is a good sign for future collectability"
    },
    {
     "ref": "hagerty-yj",
     "quote": "The HVR is not an indicator of future collectability, but it says a lot about what's trending hot and what's not."
    }
   ]
  },
  {
   "section": "problems",
   "claimText": "Quadratec calls YJs notorious for rust, naming rear leaf spring mounts, frame rails, skid plate mounting areas, rear crossmembers, driver-side floorboards and roll bar mounting points, and says moisture trapped beneath old carpet padding often ruins floor pans; NHTSA campaign 98V005000 covered 293,369 1990 Wranglers whose front disc brake rotors could corrode severely in the salt belt.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "quadratec-checklist",
    "nhtsa-98v005"
   ],
   "evidence": [
    {
     "ref": "quadratec-checklist",
     "quote": "YJs are notorious for rust."
    },
    {
     "ref": "quadratec-checklist",
     "quote": "Moisture trapped beneath old carpet padding often turns YJ floor pans into what can only be described as"
    },
    {
     "ref": "nhtsa-98v005",
     "quote": "293369"
    },
    {
     "ref": "nhtsa-98v005",
     "quote": "THE FRONT DISC BRAKE ROTORS CAN EXPERIENCE SEVERE CORROSION IF OPERATED FOR AN EXTENSIVE PERIOD IN THE \"SALT BELT.\""
    }
   ]
  },
  {
   "section": "problems",
   "claimText": "The YJ front axle uses a vacuum-actuated Central Axle Disconnect whose lines are often dry-rotted, cracked or disconnected, and many owners replace it with a manual cable-actuated setup; on many early manual cars the clutch slave cylinder sits inside the bellhousing, so replacing it requires removing the transmission. This rests on one US specialist source.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "quadratec-checklist"
   ],
   "evidence": [
    {
     "ref": "quadratec-checklist",
     "quote": "The YJ uses a vacuum-actuated Central Axle Disconnect (CAD) system on the front axle."
    },
    {
     "ref": "quadratec-checklist",
     "quote": "there's a very good chance the vacuum lines are dry-rotted, cracked, or disconnected."
    },
    {
     "ref": "quadratec-checklist",
     "quote": "Many owners eventually replace the system entirely with a manual cable-actuated setup for better long-term reliability."
    },
    {
     "ref": "quadratec-checklist",
     "quote": "On many early manual-transmission YJs, the clutch slave cylinder lives inside the bellhousing."
    },
    {
     "ref": "quadratec-checklist",
     "quote": "Unfortunately, replacing it requires removing the transmission."
    }
   ]
  },
  {
   "section": "problems",
   "claimText": "Consumer Guide reports rear main seals on the 2.5- and 4.0-liter engines prone to leakage, and NHTSA campaign 87V022000 covered 3,996 1987 Wranglers for a cruise control module that could operate inconsistently.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "consumerguide-yj",
    "nhtsa-87v022"
   ],
   "evidence": [
    {
     "ref": "consumerguide-yj",
     "quote": "The rear main seals on 2.5- and 4.0-liter engines are prone to leakage"
    },
    {
     "ref": "nhtsa-87v022",
     "quote": "3996"
    },
    {
     "ref": "nhtsa-87v022",
     "quote": "CRUISE CONTROL MODULE COULD HAVE INCONSISTENT CRUISE CONTROL OPERATION."
    }
   ]
  },
  {
   "section": "problems",
   "claimText": "Quadratec's leaf spring section describes a Wrangler that feels like it is wandering, hopping sideways or walking over bumps, and its electrical section starts with cleaning the firewall ground straps and battery connections. This rests on one US specialist source.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "quadratec-checklist"
   ],
   "evidence": [
    {
     "ref": "quadratec-checklist",
     "quote": "But if your Wrangler feels like it's wandering, hopping sideways, or \"walking\" over bumps"
    },
    {
     "ref": "quadratec-checklist",
     "quote": "then start by cleaning the firewall ground straps and battery connections."
    }
   ]
  }
 ]
};
