/**
 * Researched model draft - Porsche 911 Carrera, 996 generation (US 1999-2004, Turbo and Turbo S to 2005).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seed911996 = {
 "slug": "porsche/911-996",
 "make": "Porsche",
 "model": "911",
 "generation": "996 Carrera",
 "generationCode": "996",
 "trim": "Carrera, Carrera 4, Carrera 4S, Targa, 40th Anniversary, Turbo and Turbo S (US 1999-2005 model years)",
 "yearStart": 1999,
 "yearEnd": 2004,
 "bodyStyles": [
  "2-door coupe, 2+2, narrow body (Carrera, Carrera 4, 40th Anniversary)",
  "2-door cabriolet, plastic rear window through 2001 and heated glass from 2002 (Carrera, Carrera 4, Carrera 4S and Turbo from 2004, Turbo S 2005)",
  "2-door Targa with sliding glass roof and opening rear hatch glass (2002-2004)",
  "2-door coupe, wide Turbo body (Carrera 4S 2002-2005, Turbo 2001-2005, Turbo S 2005)"
 ],
 "engines": [
  "3.4-liter M96 water-cooled flat-six, naturally aspirated, 296 hp and 258 lb-ft, cable throttle (1999); 300 hp with electronic throttle (2000-2001)",
  "3,596 cc M96 flat-six, naturally aspirated, 320 hp and 273 lb-ft per PCA and MotorWeek's Carrera test; MotorWeek's Carrera 4S and Targa test prints 315 hp (2002-2004)",
  "3.6-liter M96 flat-six with X51 power kit, 345 hp per Stuttcars, which also prints 341 hp; Porsche's release gives 345 PS (2004 40th Anniversary)",
  "3.6-liter twin-turbocharged Mezger-architecture flat-six, 415 hp and 415 lb-ft per MotorWeek (PCA gives 413 lb-ft), intermediate shaft on pressure-fed plain bearings (Turbo, 2001-2005); X50 option 450 hp and 457 lb-ft (2002 on); Turbo S 450 hp per RM Sotheby's, 444 hp per PCA, 450 PS per Porsche (2005)"
 ],
 "productionTotal": null,
 "productionNotes": "Porsche's 25th anniversary release says it sold roughly 175,000 examples of the 996, more than 30,000 a year. Wikipedia prints a year-by-year table totaling 175,262 from a 2016 web page it cites. They agree within rounding, but the exact figure rests on one secondary citation, so productionTotal is left null. By variant: 40th Anniversary: 1,963 cars, stated by PCA, Stuttcars and the PCARMARKET catalog; no dissent found. Carrera 4S: classic.com prints 23,055 built (17,298 coupes, 5,757 cabriolets) across 2002-2005, and RM Sotheby's describes a 2004 car as one of 4,543 Carrera 4S Cabriolets produced for 2004; different scopes, and neither names its source. Turbo S: Stuttcars gives approximately 1,500 worldwide (598 coupes, 960 cabriolets) in one paragraph, approximately 1,558 sold in 2005 in another, and a total of 600 in a third, all on the same page. RM Sotheby's says roughly 980 were built, 300 of them cabriolets. Nothing from Porsche settles it. No per-variant count was found for the Turbo, Carrera, Carrera 4 or Targa. US list prices: 1999 Carrera Cabriolet $75,225 (MotorWeek); 2002 Carrera coupe $67,900, Carrera 4S $80,965 manual and $84,395 Tiptronic, Targa $75,965, with the Cabriolet $2,400 above the Targa (MotorWeek); 2001 Turbo $111,000 (MotorWeek); 2004 40th Anniversary $90,565 (PCA). Each price rests on a single fetched source. No documented US list price for the 1999 Carrera coupe or the 2005 Turbo S was found.",
 "notableTrims": [
  {
   "name": "1999 Carrera coupe (3.4, cable throttle)",
   "note": "The only 996 with a throttle cable, 296 hp and 258 lb-ft, and the lightest of the line at around 2,900 lb for an early manual coupe. Model year 1999 cars carry the dual-row IMS bearing, far more durable than the single row that followed."
  },
  {
   "name": "2000-2001 Carrera and Carrera 4 (3.4, e-gas)",
   "note": "Electronic throttle brought 300 hp and made Porsche Stability Management available. IMS crossover years: dual-row or single-row, and only a visual inspection tells which. The narrow-body Carrera 4 coupe ended after 2001."
  },
  {
   "name": "2002-2004 Carrera and Targa (3.6, facelift)",
   "note": "3,596 cc, 320 hp and 273 lb-ft, Turbo-style headlights replacing the Boxster-shared units, a stiffer shell and a heated glass rear window in the Cabriolet. MotorWeek tested the coupe at 5.0 seconds to 60 mph at $67,900."
  },
  {
   "name": "2002-2005 Carrera 4S",
   "note": "Turbo body, brakes and 18-inch wheels on the naturally aspirated 3.6 with all-wheel drive. Coupe only in 2002 and 2003, Cabriolet from 2004, a few sold as 2005 models. $80,965 new with the manual. classic.com prints 23,055 built."
  },
  {
   "name": "2004 40th Anniversary",
   "note": "1,963 cars, all GT Silver Metallic with gray leather, Turbo front bumper, X51 power kit, sport suspension, limited-slip differential and a six-speed manual only. $90,565 new. PCA's tech expert calls it his favorite 996."
  },
  {
   "name": "2001-2005 Turbo",
   "note": "415 hp and 415 lb-ft from the GT1-derived Mezger engine, all-wheel drive, manual or Tiptronic, $111,000 in 2001. Not an M96, so no IMS bearing exposure. X50 power kit from 2002 gave 450 hp; Cabriolet added for 2004."
  },
  {
   "name": "2005 Turbo S",
   "note": "A Turbo with the X50 kit, carbon-ceramic brakes and a CD changer as standard, 450 hp, coupe or cabriolet. Production is disputed: Stuttcars prints 1,500, 1,558 and 600 on one page and RM Sotheby's says roughly 980. classic.com averages it at $83,050 as of September 2026."
  },
  {
   "name": "GT3 and GT2 (separate page)",
   "note": "The 996 GT3 came to the US for the 2004 model year only and the GT2 for 2002-2005; both use the Mezger engine and are covered on the 911 GT3 (996) page."
  }
 ],
 "specs": {
  "layout": "Rear-mounted flat-six; rear-wheel drive (Carrera, Targa, 40th Anniversary) or all-wheel drive (Carrera 4, Carrera 4S, Turbo, Turbo S); 2+2",
  "chassis": "Steel unibody shared with the 986 Boxster forward of the B-pillar; body reinforced for 2002; wide Turbo shell on Carrera 4S, Turbo and Turbo S",
  "engine": "M96 water-cooled flat-six, 3.4 liters (1999-2001) and 3,596 cc (2002-2004); Turbo and Turbo S use the 3.6-liter twin-turbocharged Mezger-architecture engine derived from the 911 GT1",
  "power": "296 hp (1999); 300 hp (2000-2001); 320 hp (2002-2004 3.6, with 315 hp printed by MotorWeek for the C4S and Targa); 345 hp (40th Anniversary, X51, per Stuttcars, and a metric 345 PS in Porsche's release); 415 hp (Turbo); 450 hp (Turbo X50 per PCA; Turbo S per RM Sotheby's, with PCA printing 444 hp)",
  "torque": "258 lb-ft (3.4); 273 lb-ft (3.6); 415 lb-ft per MotorWeek or 413 lb-ft per PCA (Turbo); 457 lb-ft (X50 and Turbo S)",
  "transmission": "Six-speed manual with cable shift linkage standard; five-speed Tiptronic S automatic optional on every variant except the 40th Anniversary",
  "weight": "Around 2,900 lb for an early manual Carrera coupe, under 3,000 lb later, per PCA; Targa about 150 lb more per MotorWeek; no Turbo curb weight fetched",
  "acceleration": "0-60 mph: 5.0 sec (1999 Cabriolet and 2002 Carrera, MotorWeek tests); 4.6 sec (1999 coupe, Road & Track and Car and Driver as cited by PCA); 5.2 sec (2002 Carrera 4S, MotorWeek); 4.1 sec (2001 Turbo, MotorWeek; 2005 Turbo S, RM Sotheby's catalog)",
  "quarter_mile": "13.5 sec at 102 mph (1999 Cabriolet); 13.5 sec at 107 mph (2002 Carrera); 13.7 sec at 105 mph (2002 Carrera 4S); 12.6 sec at 112 mph (2001 Turbo); all MotorWeek",
  "top_speed": "189 mph (2001 Turbo, MotorWeek); 190 mph (Turbo S, RM Sotheby's catalog); no fetched US source gives a Carrera figure",
  "redline": "7,300 rpm (3.6 Carrera 4S, MotorWeek)",
  "braking_60_0": "103 ft (1999 Cabriolet); 118 ft (2002 Carrera); 124 ft (2002 Carrera 4S); 120 ft (2001 Turbo); MotorWeek",
  "epa_fuel_economy": "18 mpg city, 26 mpg highway (2002 Carrera and Carrera 4S, MotorWeek); 15 city, 22 highway (2001 Turbo, MotorWeek)",
  "wheels_and_tires": "18-inch Turbo wheels with 295/30 rear tires on the Carrera 4S; shot-blasted 18-inch Carrera II wheels on the 40th Anniversary",
  "headlights": "Boxster-shared units with integrated turn signals 1999-2001; Turbo-style Bi-Xenon HID units and a reshaped nose from 2002",
  "us_msrp": "$75,225 (1999 Carrera Cabriolet); $67,900 (2002 Carrera coupe); $75,965 (2002 Targa); $80,965 manual and $84,395 Tiptronic (2002 Carrera 4S); $111,000 (2001 Turbo); $90,565 (2004 40th Anniversary); each single-sourced, see productionNotes"
 },
 "summary": "The 996 is the 911 that saved Porsche. Sold in the United States from the 1999 model year, it was the first water-cooled 911, the first with a completely new body since 1963, and the first to share its front end, interior and much of its engineering with the cheaper Boxster. The M96 flat-six made 296 hp from 3.4 liters, then 300 hp with electronic throttle for 2000, then 320 hp from 3,596 cc when the 2002 facelift swapped the Boxster-shared headlights for Turbo-style units. Carrera 4, Cabriolet, Targa, the wide-bodied Carrera 4S and a 1,963-car 40th Anniversary edition filled out the range, and the 2001-2005 Turbo and 2005 Turbo S used a different, race-derived Mezger engine with none of the M96's weaknesses. Those weaknesses, an intermediate shaft bearing that fails outright on a small share of cars, rear main seal leaks and bore scoring, are why the 996 is the cheapest way into a 911 as of September 2026. Porsche sold roughly 175,000 of them; the record of what has been done about the bearing is worth more than most options.",
 "history": "## Why Porsche built a 911 out of Boxster parts\n\nBy the mid-1990s Porsche was losing money on three separate car lines and its air-cooled flat-six could not meet the emissions and noise rules coming its way. August Achleitner, who ran vehicle concepts from 1989 to 2000, put it plainly in Porsche's 25th anniversary release: the company needed a cheaper car for volume, which led to the Boxster and the 996 sharing parts. The program was sized to sell at least 30,000 of the two cars a year with a good return. Under chief designer Harm Lagaay, Pinky Lai's 996 was built identically to the Boxster from the nose to the B-pillar, down to a headlight module that combined five functions in one cheap unit. The Boxster launched in 1996, the 996 was shown at Frankfurt in 1997, and Porsche sold more than 30,000 a year, roughly 175,000 in all.\n\n## 1999-2001: the 3.4 and the cable throttle\n\nThe 996 Carrera arrived in the United States for the 1999 model year as a coupe and a Cabriolet, the first 911 with no air-cooled engine behind it. The M96 made 296 hp and 258 lb-ft, 24 hp and 15 lb-ft more than the 993, in a car PCA puts around 2,900 lb as an early manual coupe. Road & Track and Car and Driver both recorded 4.6 seconds to 60 mph. MotorWeek tested a 1999 Cabriolet at $75,225 and 5.0 seconds and noted the plastic rear window, replaced by heated glass for 2002. The 1999 car is the only 996 with a throttle cable; electronic throttle for 2000 brought 300 hp and the option of Porsche Stability Management. The narrow-body Carrera 4 followed about six months after the Cabriolet; its coupe ended after 2001. The press turned on the headlights within months, to the designers' surprise.\n\n## 2001: the Turbo brings a different engine\n\nThe Turbo reached North America for the 2001 model year with the Carrera 4's viscous coupling moved into the front differential, which for the first time allowed a Tiptronic Turbo. Its engine was not an M96 but the Mezger flat-six from the Le Mans-winning 911 GT1, its intermediate shaft on pressure-fed plain bearings, rated at 415 hp and, by MotorWeek's figures, 415 lb-ft. MotorWeek ran it to 60 mph in 4.1 seconds and a 12.6-second quarter at 112 mph, at $111,000 base. From 2002 the X50 power kit with larger turbochargers and intercoolers gave 450 hp and 457 lb-ft. A Turbo Cabriolet came for 2004 and the Turbo S, with X50, carbon-ceramic brakes and a CD changer standard, for 2005.\n\n## 2002: 3.6 liters, new lights, Targa and Carrera 4S\n\nDisplacement rose to 3,596 cc for 320 hp and 273 lb-ft, the body gained thicker-gauge metal in places, and the front end took the Turbo's Bi-Xenon headlights and a reshaped nose. MotorWeek's 2002 Carrera ran 5.0 seconds to 60 mph at $67,900 base. Two new bodies arrived: the Targa, with a sliding glass roof and a rear window that opened as a hatch, at $75,965 and about 150 lb over the coupe, and the Carrera 4S, the 3.6 and all-wheel drive in the Turbo's wide body with its brakes and 18-inch wheels, at $80,965. MotorWeek's C4S and Targa test prints 315 hp for both, five fewer than PCA gives the same engine, which no fetched source explains. A Carrera 4S Cabriolet followed for 2004.\n\n## 2004: 1,963 silver cars and the end\n\nFor the 40th year of the 911 Porsche built 1,963 numbered Carrera coupes in GT Silver Metallic with gray leather, the Turbo front bumper, the X51 power kit at 345 hp by Stuttcars' figure (345 PS in Porsche's release), sport suspension, a limited-slip differential and a manual gearbox only, at $90,565. The 997 replaced the Carrera for 2005; a handful of Carrera 4S were sold as 2005 cars and the Turbo, Turbo S, GT2 and GT3 ran into 2005 and 2006. The GT3, which the US received only for the 2004 model year, and the GT2 are on the separate 911 GT3 (996) page.",
 "marketNotes": "All figures are US dollars, as of September 2026; classic.com figures came through a rendering fetch. classic.com benchmarks the 996.1 Carrera at $27,600, with manual coupes at $30,207 and Tiptronic cars at $22,057 to $22,270; its lowest recorded sale is $4,600 on January 18, 2026. It benchmarks the 996.2 Carrera 4S at $38,515; the only 4S sale fetched directly is RM Sotheby's $49,280 for an 11,700-mile 2004 Cabriolet in St. Louis in 2019. The Turbo page shows 679 sales averaging $60,721, from $23,425 to $182,047; no individual lot was fetched. Turbo S: classic.com's average is $83,050 across 88 sales with a $229,600 top; rows include $119,000 for a 19,000-mile manual coupe on June 7, 2025, $85,000 for a 13,000-mile manual cabriolet on June 10, 2025, $59,000 for a 66,000-mile cabriolet on June 3, 2025 and $70,496 for a 27,000-mile Tiptronic coupe on April 29, 2025. RM Sotheby's sold a 13,000-mile 2005 Turbo S Cabriolet for $112,000 in Atlanta in 2018. 40th Anniversary: benchmark $45,703; Bring a Trailer results of $66,666 (14,000 miles, June 24, 2026), $50,500 (53,000 miles, June 26, 2026), $54,444 (41,000 miles, February 19, 2026) and $40,299 (37,000 miles, March 31, 2026), $55,000 at Barrett-Jackson West Palm Beach on April 18, 2026 with 28,000 miles, $63,250 on PCARMARKET on February 26, 2026 with 13,000 miles, $36,333 on Cars and Bids with 98,000 miles, and a 59,070-mile car with a fresh IMS bearing at $40,500 on PCARMARKET, undated. No 996.2 Carrera result was fetched.",
 "whatToLookFor": "The first question on any M96 car is what has been done about the intermediate shaft bearing. A 1999 car has the dual row; a 2002-2004 car the single row; a 2000 or 2001 car could have either, and the only way to know is to look with the transmission out. A retrofit receipt names the kit (LN's ceramic retrofit, the IMS Solution plain bearing, or a Pelican kit) and should sit beside clutch, rear main seal and often air-oil separator invoices from the same visit. LN advises borescoping the cylinders before a retrofit, so a retrofitted car may have a record of its bores. Anything leaking from the bottom of the engine and gearbox, coolant or oil, is a walk-away in PCA's guide. Blue smoke on startup points at the air-oil separator. Cabriolets built through 2001 have a plastic rear window that clouds and cracks; 2002 and later cars have heated glass. On the Turbo there is no IMS exposure; PCA's checklist asks for corrosion checks, suspension on lowered cars and a diagnostic run on Tiptronic cars. A production specification settles X50 on a Turbo and X51 on a 2004 car. A DME over-rev report is standard on any manual 996. Headlights are the easy check: Boxster-shared units to 2001, Turbo-style Bi-Xenons from 2002.",
 "commonProblems": "The intermediate shaft bearing is the fault that defines the car. The M96 drives its camshafts through an intermediate shaft on a sealed ball bearing, revised three times: a dual row through 1999 and in some 2000 and 2001 engines, a smaller single row with significantly less load capacity from 2000 through 2005, and a larger non-serviceable bearing from 2006. Eisen class action documents cited by LN Engineering put the single-row failure rate at about 8 percent against under 1 percent for the dual row; LN's own projection is 10 percent by 90,000 miles. PCA's tech expert counters that nine of ten original bearings never fail, while conceding that the market prices them as if they will. A failure contaminates the whole engine. Prevention is a retrofit with the engine in the car: LN Engineering prices its ceramic retrofit under $1,000 and the oil-fed IMS Solution under $2,000 for parts, plus 10 to 14 hours of labor adding $500 to $3,000 or more at a US shop, and three to four more hours to borescope the cylinders first. The Turbo, GT2 and GT3 engines run their intermediate shaft on pressure-fed plain bearings and, as PCA states, did not suffer IMS failures. Rear main seal leaks: Wikipedia attributes chronic early cases to improper machining and says the current PTFE seal addresses most of them. Bore scoring and cracked cylinders on both the 3.4 and 3.6 are the other engine-out fault; some early 3.4 blocks left the factory sleeved and a slipped sleeve is a known failure. Water pumps and air-oil separators fail. No fetched US source prices a bore-scoring repair.",
 "valueTrajectory": "The 996 Carrera has been the entry point to the 911 for most of two decades, and as of September 2026 classic.com's $27,600 benchmark for a 996.1 Carrera, with a $4,600 floor in January 2026, says it still is. The gap between a manual coupe at $30,207 and a Tiptronic car around $22,000 is the spread that matters more than year. The special cars separated from that base some time ago. The 40th Anniversary, which cost $90,565 new, now benchmarks at $45,703 with the best low-mile cars at $63,250 to $66,666 in the first half of 2026 and high-mile cars in the high $30,000s to mid $40,000s. The Turbo S shows the same shape higher up: $112,000 for a 13,000-mile Cabriolet at RM Sotheby's in 2018, and in mid-2025 $119,000 for a 19,000-mile manual coupe against $59,000 for a 66,000-mile cabriolet, with an 88-sale average of $83,050. The Turbo averages $60,721 across 679 sales, and the Carrera 4S benchmarks at $38,515, less than half its list price. Mileage and IMS paperwork explain more of the spread than the year does. None of this is a forecast.",
 "overallConfidence": "medium",
 "sources": [
  {
   "ref": "porsche-newsroom-996-25",
   "title": "Trailblazer for the future of the 911: 25 years of the 996 generation Porsche 911",
   "url": "https://newsroom.porsche.com/en_US/2022/products/porsche-25-years-911-generation-996-30401.html",
   "publisher": "Porsche Newsroom USA",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Manufacturer retrospective quoting Achleitner and Lagaay. Establishes the Boxster parts-sharing rationale and 30,000-unit target, Frankfurt 1997, Cabriolet April 1998, Carrera 4 six months later, Turbo from January 2000 (420 PS), 2002 rework to 3,596 cc and 320 PS, Targa and 4S 2002, 40 Years car 345 PS and Turbo Cabriolet 2004, Turbo S 450 PS 2005, over 30,000 a year and roughly 175,000 total."
  },
  {
   "ref": "pca-996-guide-1",
   "title": "Model Guide: The 996-generation 911 - Part I",
   "url": "https://www.pca.org/news/model-guide-the-996-generation-911-part-i",
   "publisher": "Porsche Club of America",
   "sourceType": "club-forum",
   "reliability": "medium",
   "notes": "Club editorial. 1999 US model year, 296 hp and 258 lb-ft, 4.6 sec 0-60 per Road & Track and Car and Driver, early manual coupes around 2,900 lb, 1999 only cable throttle, 300 hp for 2000-2001, 3.6 with 320 hp and 273 lb-ft and Turbo headlights for 2002, plastic rear window to 2001, C4S 2002-2005, Targa 2002, 40th Anniversary 1,963 units at $90,565 with X51, and Bill Burris on IMS, leaks and the air-oil separator."
  },
  {
   "ref": "pca-turbo-guide",
   "title": "Model Guide: Porsche 911 Turbo - 1976-2013",
   "url": "https://www.pca.org/news/model-guide-porsche-911-turbo-1976-2013",
   "publisher": "Porsche Club of America",
   "sourceType": "club-forum",
   "reliability": "medium",
   "notes": "Club editorial. Turbo launched in North America for 2001, Mezger engine from the 1998 GT1, 415 hp and 413 lb-ft, no IMS failures or porous blocks, manual or five-speed automatic, 2002 body stiffening and X50 at 450 hp and 457 lb-ft, Cabriolet 2004, Turbo S 2005 at 444 hp, Turbo inspection checklist."
  },
  {
   "ref": "motorweek-1999-cab",
   "title": "1999 Porsche 911 Cabriolet",
   "url": "https://motorweek.org/road_tests/1999_porsche_911_cabriolet/",
   "publisher": "MotorWeek (Maryland Public Television)",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "US period road test. Base price $75,225, 3.4-liter 296 hp and 258 lb-ft, 0-60 in 5.0 sec, quarter 13.5 at 102 mph, 60-0 in 103 ft, manual with cable shift linkage or Tiptronic S, plastic rear window."
  },
  {
   "ref": "motorweek-2002-carrera",
   "title": "2002 Porsche 911 Carrera Program #2124",
   "url": "https://motorweek.org/road_tests/2002_porsche_911_carrera_program_2124/",
   "publisher": "MotorWeek (Maryland Public Television)",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "US period test of the facelift coupe. Reshaped nose and Bi-Xenon headlamps from the Turbo, strengthened body, 3.6 with 320 hp and 273 lb-ft, 0-60 in 5.0 sec, quarter 13.5 at 107 mph, 60-0 in 118 ft, EPA 18/26, $67,900 base."
  },
  {
   "ref": "motorweek-2002-c4s-targa",
   "title": "2002 Porsche 911 Carrera 4S & 911 Targa Program #2206",
   "url": "https://motorweek.org/road_tests/2002_porsche_911_carrera_4s_911_targa_program_2206/",
   "publisher": "MotorWeek (Maryland Public Television)",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "US period test. C4S on the Turbo chassis, 3.6 rated 315 hp and 273 lb-ft here, 18-inch Turbo wheels, 7,300 rpm redline, 0-60 in 5.2 sec, quarter 13.7 at 105 mph, 60-0 in 124 ft, EPA 18/26, $80,965 manual and $84,395 Tiptronic. Targa 315 hp, about 150 lb heavier, $75,965, $2,400 under the Cabriolet."
  },
  {
   "ref": "motorweek-2001-turbo",
   "title": "2001 Porsche 911 Turbo Program #2001",
   "url": "https://motorweek.org/road_tests/2001_porsche_911_turbo_program_2001/",
   "publisher": "MotorWeek (Maryland Public Television)",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "US period test. Viscous clutch moved into the front differential allowing Tiptronic, GT1-derived 3.6 twin-turbo, 415 hp and 415 lb-ft, 0-60 in 4.1 sec, quarter 12.6 at 112 mph, 189 mph, 60-0 in 120 ft, EPA 15/22, base $111,000."
  },
  {
   "ref": "stuttcars-996-hub",
   "title": "Porsche 911 (996) - Ultimate Model Guide",
   "url": "https://www.stuttcars.com/porsche-model-research/porsche-911-research/porsche-911-996-5th-generation-research-hub/",
   "publisher": "Stuttcars",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Specialist hub. Wiedeking's parts-sharing decision, 296 hp 3.4, IMS, RMS and cylinder scoring as known M96 flaws, sales over 175,000, 2002 headlights, 40th Anniversary 1,963 cars with X51 (341 hp in one paragraph, 345 in another), X50 450 hp and 457 lb-ft, and Turbo S production printed three ways: about 1,500 (598 coupes, 960 cabriolets), about 1,558, and 600."
  },
  {
   "ref": "wikipedia-996",
   "title": "Porsche 911 (996)",
   "url": "https://en.wikipedia.org/wiki/Porsche_911_(996)",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Pointer only. Year-by-year production table totaling 175,262 cited to a 2016 web page; Pinky Lai under Harm Lagaay; problems paragraph on RMS from improper machining, factory-sleeved 3.4 blocks and slipped sleeves, cracked and scored cylinders, and the IMS bearing."
  },
  {
   "ref": "imsretrofit-ims-101",
   "title": "IMS 101 - IMS Retrofit",
   "url": "https://imsretrofit.com/ims-101/",
   "publisher": "LN Engineering (IMS Retrofit)",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Vendor technical page. Three IMS bearing revisions: dual row through 1999 and some 2000-2001, smaller single row 2000-2005, larger non-serviceable bearing 2006-2008; 2000-2001 crossover years; Eisen class action figures of 8 percent single-row versus under 1 percent dual-row failure; L10 projection of 10 percent by 90,000 miles; Turbo, GT2 and GT3 shafts on pressure-fed plain bearings."
  },
  {
   "ref": "imsretrofit-costs",
   "title": "IMS Bearing Replacement Costs - IMS Retrofit",
   "url": "https://imsretrofit.com/ims-replacement-costs/",
   "publisher": "LN Engineering (IMS Retrofit)",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Vendor pricing page, US dollars. IMS Retrofit kit below $1,000 and IMS Solution under $2,000 excluding labor; 10 to 14 hours adding $500 to $3,000 or more; 3 to 4 extra hours to borescope for bore scoring; clutch, RMS, air-oil separator and water pump commonly done together."
  },
  {
   "ref": "rm-po18-turbo-s-cab",
   "title": "2005 Porsche 911 Turbo S Cabriolet | The Porsche 70th Anniversary Auction | RM Sotheby's",
   "url": "https://rmsothebys.com/auctions/po18/lots/r0042-2005-porsche-911-turbo-s-cabriolet/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Atlanta 2018, Lot 219, sold $112,000, just under 13,000 miles, built December 2004 for 2005, delivered new to New York. Catalog: X50 for 450 bhp, carbon-ceramic brakes, 0-60 in 4.1 sec, 190 mph, roughly 980 Turbo S built with 300 cabriolets."
  },
  {
   "ref": "rm-gc19-c4s-cab",
   "title": "2004 Porsche 911 Carrera 4S Cabriolet | The Guyton Collection | RM Sotheby's",
   "url": "https://rmsothebys.com/auctions/gc19/lots/r0063-2004-porsche-911-carrera-4s-cabriolet/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "St. Louis 2019, Lot 403, sold $49,280, under 11,700 miles, six-speed manual. Catalog gives the C4S 320 hp and says it is one of 4,543 Carrera 4S Cabriolets produced for 2004."
  },
  {
   "ref": "pcarmarket-40th",
   "title": "2004 Porsche 911 40th Anniversary | PCARMARKET",
   "url": "https://www.pcarmarket.com/auction/2004-porsche-911-40th-anniversary-10/",
   "publisher": "PCARMARKET",
   "sourceType": "auction-house",
   "reliability": "medium",
   "notes": "US online auction, sold at $40,500, 59,070 miles, Florida, number 834 of 1,963, new clutch and IMS bearing, X51, M030 suspension, limited-slip, six-speed manual. Sale date not printed; listing mentions tires fitted July 2024."
  },
  {
   "ref": "classic-9961-carrera",
   "title": "Porsche 911 Carrera - 996.1 Market - CLASSIC.COM",
   "url": "https://www.classic.com/m/porsche/911/996/9961/carrera/",
   "publisher": "CLASSIC.COM",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "Fetched September 17, 2026 through a rendering fetch (403 to plain scripts). Benchmark $27,600, manual coupes $30,207, automatics $22,057 to $22,270, lowest sale $4,600 on January 18, 2026. Sold rows were not rendered."
  },
  {
   "ref": "classic-996-turbo",
   "title": "Porsche 911 Turbo - 996.2 Market - CLASSIC.COM",
   "url": "https://www.classic.com/m/porsche/911/996/turbo/",
   "publisher": "CLASSIC.COM",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "Fetched September 17, 2026 through a rendering fetch. 679 sales, average $60,721, lowest $23,425, top $182,047, most recent $60,000. Sold rows were not rendered."
  },
  {
   "ref": "classic-996-turbo-s",
   "title": "Porsche 911 Turbo S - 996.2 Market - CLASSIC.COM",
   "url": "https://www.classic.com/m/porsche/911/996/turbo-s/",
   "publisher": "CLASSIC.COM",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "Fetched September 17, 2026 through a rendering fetch. 88 sales, average $83,050, lowest $34,909, top $229,600. US rows: Jun 10, 2025 cabriolet manual $85,000 13k mi; Jun 7, 2025 coupe manual $119,000 19k mi; Jun 3, 2025 cabriolet manual $59,000 66k mi; Apr 29, 2025 coupe automatic $70,496 27k mi. UK rows ignored."
  },
  {
   "ref": "classic-40th-2004",
   "title": "2004 Porsche 911 40th Anniversary - 996.2 Market - CLASSIC.COM",
   "url": "https://www.classic.com/m/porsche/911/996/9962/carrera/40th-anniversary/year-2004/",
   "publisher": "CLASSIC.COM",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "Fetched September 17, 2026 through a rendering fetch. Benchmark $45,703. Sold rows: BaT $50,500 (Jun 26, 2026, 53k mi, AZ); BaT $66,666 (Jun 24, 2026, 14k mi, CT); Barrett-Jackson $55,000 (Apr 18, 2026, 28k mi, West Palm Beach); BaT $40,299 (Mar 31, 2026, 37k mi); PCARMARKET $63,250 (Feb 26, 2026, 13k mi); BaT $54,444 (Feb 19, 2026, 41k mi); Cars & Bids $36,333 (Feb 19, 2026, 98k mi); BaT $47,000 (Jan 22, 2026, 50k mi)."
  },
  {
   "ref": "classic-9962-c4s",
   "title": "Porsche 911 Carrera 4S - 996.2 Market - CLASSIC.COM",
   "url": "https://www.classic.com/m/porsche/911/996/9962/carrera-4s/",
   "publisher": "CLASSIC.COM",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "Fetched September 17, 2026 through a rendering fetch. Benchmark $38,515, lowest sale $6,400 for a 2004 Cabriolet project on August 13, 2024, 23,055 built (17,298 coupes, 5,757 cabriolets). No completed rows rendered."
  }
 ],
 "claims": [
  {
   "section": "production",
   "claimText": "Porsche states it sold roughly 175,000 examples of the 996 generation; Wikipedia's year-by-year table, cited to a 2016 web page, totals 175,262.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["porsche-newsroom-996-25", "wikipedia-996", "stuttcars-996-hub"],
   "evidence": [
    { "ref": "porsche-newsroom-996-25", "quote": "Porsche would go on to sell roughly 175,000 examples" },
    { "ref": "wikipedia-996", "quote": "Production numbers (units) 1997 14 1998 9,248 1999 28,040 2000 20,979 2001 27,275 2002 33,013" },
    { "ref": "stuttcars-996-hub", "quote": "worldwide sales figures of over 175,000 made it one of the company's most popular cars ever" }
   ]
  },
  {
   "section": "production",
   "claimText": "Production of the 996 Turbo S is disputed: Stuttcars prints approximately 1,500 worldwide, approximately 1,558 sold in 2005 and 600 in total on the same page, while RM Sotheby's catalog copy says roughly 980 were built with 300 cabriolets.",
   "confidence": "low",
   "status": "disputed",
   "sourceRefs": ["stuttcars-996-hub", "rm-po18-turbo-s-cab"],
   "conflictNote": "Stuttcars states the Turbo S was limited to approximately 1,500 units worldwide (598 coupes, 960 cabriolets), elsewhere that approximately 1,558 were sold in 2005, and elsewhere a total of 600. RM Sotheby's states roughly 980 were built, 300 of them cabriolets. No manufacturer figure was fetched and the difference is not resolved by any source consulted here.",
   "evidence": [
    { "ref": "stuttcars-996-hub", "quote": "The Turbo S was limited to approximately 1,500 units worldwide, of which 598 were coupé (hardtop) and 960 were cabriolet" },
    { "ref": "rm-po18-turbo-s-cab", "quote": "Roughly 980 Turbo S cars were built, only 300 of which were cabriolets" }
   ]
  },
  {
   "section": "production",
   "claimText": "The 2004 40th Anniversary edition was limited to 1,963 cars, all GT Silver Metallic with the X51 power kit and a six-speed manual, priced at $90,565.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["pca-996-guide-1", "stuttcars-996-hub", "pcarmarket-40th"],
   "evidence": [
    { "ref": "pca-996-guide-1", "quote": "sold only in model year 2004 in a limited production run of 1963 units" },
    { "ref": "stuttcars-996-hub", "quote": "Porsche built 1963 of the 40th Anniversary Porsche 911 Carrera for model year 2004" },
    { "ref": "pcarmarket-40th", "quote": "Limited to only 1,963 examples, it also includes the X51 Powerkit, M030 Sport Suspension package, a 6-speed manual transaxle" }
   ]
  },
  {
   "section": "production",
   "claimText": "classic.com prints 23,055 Carrera 4S built across 2002-2005 (17,298 coupes and 5,757 cabriolets), and RM Sotheby's describes a 2004 car as one of 4,543 Carrera 4S Cabriolets produced for 2004; neither names its source and the figures cover different scopes.",
   "confidence": "low",
   "status": "unverified",
   "sourceRefs": ["classic-9962-c4s", "rm-gc19-c4s-cab"],
   "evidence": [
    { "ref": "classic-9962-c4s", "quote": "The 996 Carrera 4S is a slightly-uprated version of the 996 Carrera 4" },
    { "ref": "rm-gc19-c4s-cab", "quote": "It is one of 4,543 Carrera 4S Cabriolet examples produced for 2004" }
   ]
  },
  {
   "section": "history",
   "claimText": "The 996 Carrera reached the United States for the 1999 model year as the first 911 without an air-cooled engine; the Cabriolet joined in April 1998 and the Carrera 4 about six months later.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["pca-996-guide-1", "porsche-newsroom-996-25", "pca-turbo-guide"],
   "evidence": [
    { "ref": "pca-996-guide-1", "quote": "With the arrival of this 996-generation 911 for the 1999 model year, Porsche no longer made air-cooled engines" },
    { "ref": "porsche-newsroom-996-25", "quote": "In April 1998, the Cabriolet joined the Coup" },
    { "ref": "pca-turbo-guide", "quote": "The 996 Carrera was introduced to North America for model year 1999" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 1999 3.4-liter M96 made 296 hp and 258 lb-ft, 24 hp and 15 lb-ft more than the 993, and MotorWeek tested a 1999 Cabriolet at 5.0 seconds to 60 mph with a base price of $75,225.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["pca-996-guide-1", "motorweek-1999-cab", "stuttcars-996-hub"],
   "evidence": [
    { "ref": "pca-996-guide-1", "quote": "296 horsepower (+24), 258 lb-ft of torque (+15)" },
    { "ref": "motorweek-1999-cab", "quote": "Base price on the 911 Carrera Cabriolet is $75,225" },
    { "ref": "stuttcars-996-hub", "quote": "displacing 3.4 liters in early models and producing 296 horsepower and 258 lb-ft of torque" }
   ]
  },
  {
   "section": "specs",
   "claimText": "For 2002 the Carrera engine grew to 3,596 cc with Turbo-style headlights and a reshaped nose; PCA and MotorWeek's Carrera test rate it at 320 hp and 273 lb-ft, but MotorWeek's Carrera 4S and Targa test prints 315 hp for the same engine.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["pca-996-guide-1", "motorweek-2002-carrera", "motorweek-2002-c4s-targa", "porsche-newsroom-996-25"],
   "conflictNote": "PCA and MotorWeek's 2002 Carrera test give 320 hp for the 3.6, and RM Sotheby's catalog gives 320 hp for the Carrera 4S. MotorWeek's 2002 Carrera 4S and Targa test prints 315 horsepower for both cars. Porsche's own release gives a metric figure equal to about 316 hp (320 PS). Whether the US-market C4S and Targa carried a different rating is not resolved by any source consulted here.",
   "evidence": [
    { "ref": "pca-996-guide-1", "quote": "The Type M96 flat six eventually grew to 3.6 liters, 320 hp, and 273 lb-ft in 2002" },
    { "ref": "motorweek-2002-carrera", "quote": "It now makes 320 horsepower, an increase of 20 horses, and 15 more pound-feet of torque, for a total of 273" },
    { "ref": "motorweek-2002-c4s-targa", "quote": "The 3.6-liter normally-aspirated flat- six produces 315-horsepower, and 273 pound-feet of torque" },
    { "ref": "porsche-newsroom-996-25", "quote": "Displacement rose to 3,596 cc and power was boosted to 320 PS" }
   ]
  },
  {
   "section": "specs",
   "claimText": "MotorWeek's 2002 tests put the Carrera coupe at $67,900 (0-60 in 5.0 seconds), the Carrera 4S at $80,965 manual or $84,395 Tiptronic (5.2 seconds) and the Targa at $75,965; each price rests on that single US test.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["motorweek-2002-carrera", "motorweek-2002-c4s-targa"],
   "evidence": [
    { "ref": "motorweek-2002-carrera", "quote": "Which carries an impressive price tag of $67,900" },
    { "ref": "motorweek-2002-c4s-targa", "quote": "the 911 C4S 6-speed starts at $80,965. The Tiptronic automatic boots the sticker to $84,395" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 996 Turbo launched in North America for the 2001 model year at a base price of $111,000 with a GT1-derived Mezger engine rated at 415 hp, tested by MotorWeek at 4.1 seconds to 60 mph and 189 mph; MotorWeek gives 415 lb-ft and PCA 413 lb-ft.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["motorweek-2001-turbo", "pca-turbo-guide", "classic-996-turbo"],
   "evidence": [
    { "ref": "motorweek-2001-turbo", "quote": "Base sticker-shock for the 2001 911 Turbo is $111,000" },
    { "ref": "pca-turbo-guide", "quote": "The Turbo, launched in North America for the 2001 model year, received most of the updates" },
    { "ref": "classic-996-turbo", "quote": "Porsche introduced the turbocharged version of the Type 996 for the 2001 model year" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The X50 power kit, optional on the Turbo from 2002, raised output to 450 hp and 457 lb-ft, and the 2005 Turbo S made it standard with carbon-ceramic brakes; RM Sotheby's gives the Turbo S 450 hp while PCA prints 444 hp, the conversion of Porsche's 450 PS.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["pca-turbo-guide", "stuttcars-996-hub", "rm-po18-turbo-s-cab"],
   "evidence": [
    { "ref": "pca-turbo-guide", "quote": "the introduction of the optional X50 Powerkit, which raised power to 450 and torque to 457 lb-ft" },
    { "ref": "stuttcars-996-hub", "quote": "raising the engine's output from 415 to 450 bhp and maximum torque from 415 to 457 ft lbs" },
    { "ref": "rm-po18-turbo-s-cab", "quote": "Chief amongst these were the X50 performance package, which brought output to 450 bhp" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 40th Anniversary's X51 power kit is printed at 345 hp and 341 hp in two paragraphs of the same Stuttcars page; Porsche's release gives about 340 hp as a metric 345 PS figure.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["porsche-newsroom-996-25", "stuttcars-996-hub"],
   "conflictNote": "Porsche's release gives the 40 Years car a metric figure equal to about 340 hp (345 PS). Stuttcars prints 341hp in its model paragraph and 345 hp in its special editions section. No US source states the SAE rating, so the difference is not resolved here.",
   "evidence": [
    { "ref": "porsche-newsroom-996-25", "quote": "with 345 PS, sports suspension and an electric sunroof" },
    { "ref": "stuttcars-996-hub", "quote": "Mechanically, the X51 Powerkit increases power to 341hp" }
   ]
  },
  {
   "section": "problems",
   "claimText": "The M96 intermediate shaft bearing was revised three times: a dual row through model year 1999 and some 2000 and 2001 engines, a smaller single row with significantly less load capacity from 2000 through 2005, and a larger non-serviceable bearing from 2006; 2000 and 2001 are crossover years that need a visual inspection.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["imsretrofit-ims-101", "pca-996-guide-1"],
   "evidence": [
    { "ref": "imsretrofit-ims-101", "quote": "Model year 2000 and 2001 engines are cross-over years where a dual row or single row IMS bearing could have been used" },
    { "ref": "pca-996-guide-1", "quote": "have run my personal car on the original single-row bearing with a smile on my face" }
   ]
  },
  {
   "section": "problems",
   "claimText": "LN Engineering cites Eisen class action documents putting the single-row bearing's failure rate at about 8 percent against under 1 percent for the dual row, while PCA's tech expert states that nine of ten original bearings never fail and that the market prices the risk regardless.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["imsretrofit-ims-101", "pca-996-guide-1"],
   "evidence": [
    { "ref": "imsretrofit-ims-101", "quote": "the single row IMS bearing used in 2000 through 2005 model years is reported to have an 8% failure rate, versus less than 1% with the dual row IMS bearing" },
    { "ref": "pca-996-guide-1", "quote": "The truth is that 9 out of 10 original intermediate shaft bearings will never have a problem" }
   ]
  },
  {
   "section": "problems",
   "claimText": "LN Engineering prices an IMS retrofit at under $1,000 for its ceramic kit or under $2,000 for the oil-fed IMS Solution, plus 10 to 14 hours of labor adding $500 to $3,000 or more at a US shop; this is a single vendor's figure.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["imsretrofit-costs"],
   "evidence": [
    { "ref": "imsretrofit-costs", "quote": "IMS bearing replacement takes 10-14 hours, with hourly labor rates influencing the overall cost by adding $500-$3,000 or more" }
   ]
  },
  {
   "section": "problems",
   "claimText": "The Turbo's Mezger-based engine runs its intermediate shaft on pressure-fed plain bearings and did not suffer the IMS bearing failures or porous blocks of the M96 Carrera engines.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["pca-turbo-guide", "imsretrofit-ims-101"],
   "evidence": [
    { "ref": "pca-turbo-guide", "quote": "it did not suffer intermediate shaft (IMS) bearing failures, porous blocks, or any of the other nagging problems" },
    { "ref": "imsretrofit-ims-101", "quote": "This intermediate shaft features plain bearings that are pressure fed engine oil for lubrication and never fail" }
   ]
  },
  {
   "section": "problems",
   "claimText": "Rear main seal leaks, cracked or scored cylinders on both the 3.4 and 3.6, and slipped sleeves on some factory-sleeved early 3.4 blocks are the M96's other known faults, and LN Engineering advises borescoping the cylinders before an IMS retrofit.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["wikipedia-996", "stuttcars-996-hub", "imsretrofit-costs"],
   "evidence": [
    { "ref": "wikipedia-996", "quote": "Cracked or scored cylinders are also common with the 996's 3.4 and 3.6 litre engines" },
    { "ref": "stuttcars-996-hub", "quote": "Issues like intermediate shaft (IMS) bearing failures, rear main seal leaks, and cylinder scoring tarnished its reputation" },
    { "ref": "imsretrofit-costs", "quote": "This involves dropping the sump and bore scoping the cylinders for bore scoring" }
   ]
  },
  {
   "section": "market",
   "claimText": "As of September 2026 classic.com benchmarks the 996.1 Carrera at $27,600 (manual coupes $30,207, automatics $22,057 to $22,270) and the 996.2 Carrera 4S at $38,515; both read through a rendering fetch.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["classic-9961-carrera", "classic-9962-c4s"],
   "evidence": [
    { "ref": "classic-9961-carrera", "quote": "The Porsche 911 Carrera 996 was introduced in late 1997 (1998 in the US) in coupe and cabriolet variants" },
    { "ref": "classic-9962-c4s", "quote": "the Carrerra 4S used the wider bodyshell of the 996 Turbo for a more aggressive look" }
   ]
  },
  {
   "section": "market",
   "claimText": "As of September 2026 classic.com shows 679 sales of the 996 Turbo averaging $60,721 and 88 sales of the Turbo S averaging $83,050, with 2025 US results of $119,000, $85,000, $70,496 and $59,000.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["classic-996-turbo", "classic-996-turbo-s"],
   "evidence": [
    { "ref": "classic-996-turbo", "quote": "Porsche introduced the turbocharged version of the Type 996 for the 2001 model year (late 2000 in Europe)" },
    { "ref": "classic-996-turbo-s", "quote": "Porsche introduced the Turbo S, boasting even more power than the standard 996 Turbo" }
   ]
  },
  {
   "section": "market",
   "claimText": "As of September 2026 classic.com benchmarks the 2004 40th Anniversary at $45,703, with 2026 US sales of $66,666 and $50,500 on Bring a Trailer in June, $55,000 at Barrett-Jackson West Palm Beach in April and $63,250 on PCARMARKET in February; a separate PCARMARKET sale of a 59,070-mile car made $40,500.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["classic-40th-2004", "pcarmarket-40th"],
   "evidence": [
    { "ref": "classic-40th-2004", "quote": "2004 Porsche 911 40th Anniversary - 996.2 for sale right now" },
    { "ref": "pcarmarket-40th", "quote": "This example, #834/1,963, was purchased by the seller in 2015 and has been driven less than 10k miles since" }
   ]
  }
 ]
};
