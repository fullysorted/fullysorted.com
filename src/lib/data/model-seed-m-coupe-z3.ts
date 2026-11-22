/**
 * Researched model draft - BMW M Coupe (E36/8), US market (1999-2002).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedMCoupeZ3 = {
 "slug": "bmw/m-coupe-z3",
 "make": "BMW",
 "model": "M Coupe",
 "generation": "E36/8, US market",
 "generationCode": "E36/8",
 "trim": "S52 (1999-2000) and S54 (2001-2002)",
 "yearStart": 1999,
 "yearEnd": 2002,
 "bodyStyles": [
  "2-door 2-seat hatchback coupe (fixed roof, Z3 M platform)"
 ],
 "engines": [
  "3,152 cc S52 inline six, naturally aspirated, 240 hp at 6,000 rpm and 236 lb-ft at 3,800 rpm as most US sources list it (BMW Group Classic lists 243 hp), US 1999 and 2000 model years",
  "3,246 cc S54 inline six, naturally aspirated, 315 hp at 7,400 rpm, US 2001 and 2002 model years; published US torque figures differ (269, 252 and 215 lb-ft)"
 ],
 "productionTotal": null,
 "productionNotes": "No single production figure is given on this page because the sources disagree on the US count. BMW Group Classic, the manufacturer's heritage archive, states that 2,858 US M Coupes had been produced by 2002, and Classic Motorsports and Sports Car Market give 2,858 for North America. RM Sotheby's, in its lot description for a 2002 car sold in 2016, gives US production of 2,870, yet its own engine split of 2,180 S52 cars and 678 S54 cars adds to 2,858. Sports Car Market, describing the same car, gives 2,180 S52 cars and 687 S54 cars, which adds to 2,867 and does not match its own 2,858 total. Wikipedia gives 678 for the US S54 car. No source consulted here says which of the S54 figures is the original, so both stand. For all markets, Hagerty gives 6,291 cars across the 1999 to 2002 model years, of which 1,112 had the S54; BMW Group Classic's 2,858 US cars and 3,433 European cars add to the same 6,291, and Wikipedia also gives 1,112 S54 cars for all markets. That worldwide figure is consistent across sources, but because its US component is disputed, productionTotal is left null. BMW Group Classic dates European production from April 1998 to August 2002. No source fetched gives US production by model year or by color, and no marque registry page could be retrieved for this research. The US base list price is not documented in any manufacturer or dealer document fetched here; the price figures on this page are a 1999 test car's $42,670 sticker and approximations of around $45,000, and around $46,000 for a 2002 car, from later journalism.",
 "notableTrims": [
  {
   "name": "US M Coupe, S52, 1999 and 2000 model years",
   "note": "The first US car: 3,152 cc S52 from the E36 M3 at 240 hp, a 3.23:1 final drive and a limited-slip differential. Sports Car Market and RM Sotheby's both count 2,180 of them. A 1999 test car carried a $42,670 sticker."
  },
  {
   "name": "US M Coupe, S54, 2001 and 2002 model years",
   "note": "The 3,246 cc S54 from the E46 M3 at 315 hp, 75 hp more than the S52, with the final drive shortened in number to 3.15:1. The US count is 678 or 687 depending on the source, out of 1,112 S54 coupes for all markets."
  },
  {
   "name": "European M Coupe, S50",
   "note": "The European car carried the 3,201 cc S50 engine and a 155 mph top speed against the US car's limited 137 mph. BMW Group Classic counts 3,433 European M Coupes across both engines."
  },
  {
   "name": "M Roadster",
   "note": "The open car on the same platform: 15,322 built between 1997 and 2002, 10,503 of them sold in the US according to the BMW CCA Foundation. The 1998 M Roadster had a $42,770 base price."
  }
 ],
 "specs": {
  "layout": "Front engine, rear-wheel drive, two seats",
  "chassis": "Z3 platform, engine, driveline, suspension and basic body structure with a fixed roof and rear hatch; MacPherson struts front, semi-trailing arms rear (per Wikipedia)",
  "engine": "3,152 cc S52 inline six (US 1999-2000); 3,246 cc S54 inline six (US 2001-2002)",
  "power": "240 hp at 6,000 rpm (S52, most US sources; BMW Group Classic lists 243 hp); 315 hp at 7,400 rpm (S54)",
  "torque": "236 lb-ft at 3,800 rpm (S52); S54 disputed: 269 lb-ft (Sports Car Market), 252 lb-ft at 4,900 rpm (Wikipedia), 215 lb-ft (RM Sotheby's)",
  "transmission": "ZF five-speed manual; limited-slip differential (25 percent maximum locking per Wikipedia)",
  "final_drive": "3.23:1 (S52); 3.15:1 (S54)",
  "weight": "3,131 lb curb weight for a 1999 car (Kelley Blue Book); no S54 curb weight found in a fetched source",
  "acceleration": "0-60 mph in 5.5 seconds (Road & Track, October 1998, S52); about 5.3 seconds (Edmunds, S52); no S54 figure in a fetched source",
  "top_speed": "137 mph limited for the US car (BMW Group Classic); 138 mph in a period US review; 155 mph for the European car",
  "fuel_economy": "17 mpg city, 24 mpg highway, 20 mpg combined (1999, as listed by Kelley Blue Book and Edmunds)",
  "length": "159 in (4,039 mm), per a period US review (single source)",
  "us_type_codes": "CM93 (S52, US) and CN93 (S54, US), per the bimmerarchive type-code table",
  "us_production": "2,858 per BMW Group Classic; 2,870 per RM Sotheby's; S54 cars 678 or 687 by source",
  "price_new": "$42,670 as tested, 1999 (The Detroit News); MSRP around $45,000 (Classic Motorsports) and around $46,000 for a 2002 car (Sports Car Market); no BMW price sheet fetched"
 },
 "summary": "The M Coupe is the fixed-roof hatchback version of BMW's Z3-based M car, sold in the US for the 1999 through 2002 model years. It was developed under Burkhard Göschel to add torsional rigidity to the Z3 roadster's chassis, and the board approved it only on the condition that it stayed cost-effective to build. US cars come in two forms. The 1999 and 2000 cars carry the 3,152 cc S52 six, rated at 240 hp in most US sources; the 2001 and 2002 cars carry the 3,246 cc S54 from the E46 M3 at 315 hp, with a 3.15:1 final drive in place of 3.23:1. BMW Group Classic, Sports Car Market and Classic Motorsports count 2,858 US cars; RM Sotheby's alone prints 2,870. Sports Car Market and RM Sotheby's agree that 2,180 had the S52 but disagree on the S54 cars, at 687 and 678. Hagerty puts production for all markets at 6,291 across the four model years, 1,112 of them with the S54. The M Roadster, the open car on the same platform, was built in far larger numbers: 15,322 between 1997 and 2002. As of November 2026 classic.com's market benchmark for the M Coupe is $40,723 across 198 recorded sales.",
 "history": "## Why the M Coupe exists\n\nThe M Coupe was developed under the leadership of Burkhard Göschel with the intention of adding torsional and structural rigidity to the Z3 roadster's chassis. Road & Track's October 1998 test names Göschel as BMW's director of special vehicles and the leader of the team behind numerous M models, and quotes the chairman, Bernd Pischetsrieder, backing the car. The rest of the board took more persuading. The development team had a hard time convincing the directors, and the car was approved only as long as it remained cost-effective to produce; Hagerty adds that the board mandated a tight budget and the use of as many existing parts as possible. BMW showed it at the Frankfurt show in 1997, where BMW Group Classic says the design already divided opinion.\n\n## A roadster with a roof and a hatch\n\nRoad & Track reported that it used the Z3's platform, engine, driveline, suspension and basic body structure, a suspension Wikipedia describes as MacPherson struts in front and semi-trailing arms in the rear, and the roof runs nearly to the rear bumper. The Detroit News described it as a Z3 roadster with a station wagon-like hatchback grafted onto its rear; a period review reprinted by Curbside Classic gives its length as 159 inches (4,039 mm). Road & Track reported that Göschel's team was more interested in building another Ultimate Driving Machine than in winning design awards. Hagerty notes the car's reputation for being a handful to control at the limit.\n\n## The S52 car, 1999 and 2000\n\nUS cars for the first two model years use the 3,152 cc S52 inline six, the same engine as the E36 M3. Kelley Blue Book, Road & Track and the M Coupe Buyer's Guide give 240 hp at 6,000 rpm and 236 lb-ft at 3,800 rpm; BMW Group Classic's US page prints 243 hp. Road & Track recorded 0-60 mph in 5.5 seconds and Edmunds quotes about 5.3. A ZF five-speed manual and a limited-slip differential, which Wikipedia gives a 25 percent maximum locking, drove the rear wheels through a 3.23:1 final drive. The Detroit News test car carried a $42,670 sticker. European buyers got a different car: the 3,201 cc S50 engine and a 155 mph top speed against the US car's limited 137 mph.\n\n## The S54 car, 2001 and 2002\n\nFor 2001 both North America and Europe received the 3,246 cc S54 from the E46 M3, at 315 hp, 75 hp more than the S52. The final drive went to 3.15:1. Published US torque figures for the S54 car do not agree: Sports Car Market gives 269 lb-ft, Wikipedia 252 lb-ft at 4,900 rpm and RM Sotheby's 215 lb-ft. BMW Group Classic dates the larger engine from April 2001, and the M Coupe Buyer's Guide says cars produced after February 2001. BMW's type code for the US S54 car is CN93, against CM93 for the S52 car. Kelley Blue Book lists a 1999 car's curb weight at 3,131 lb; no S54 curb weight was found in a fetched source. Sports Car Market puts the original MSRP of a 2002 car right around $46,000.\n\n## How many came here\n\nBMW Group Classic counts 2,858 US cars, and Classic Motorsports and Sports Car Market give the same figure for North America. RM Sotheby's alone gives 2,870, though its own engine split adds to 2,858. On the split, Sports Car Market and RM Sotheby's both put 2,180 cars on the S52, but Sports Car Market counts 687 S54 cars where RM Sotheby's and Wikipedia count 678. Wikipedia calls the S54 coupe one of the lowest-production BMWs, with 1,112 built for all markets. The M Roadster was built in far larger numbers: 15,322 in all, 10,503 of them sold in the US, according to the BMW CCA Foundation.",
 "marketNotes": "As of November 2026 classic.com's market benchmark for the M Coupe is $40,723, with an average price of $41,754 across 198 recorded sales. The lowest recorded sale is $15,750 and the highest $158,477. classic.com groups all four US model years, S52 and S54 together, under one E36/8 market, so neither figure separates the two engines. Its page filtered to the 1999 model year shows, as of November 2026, 57 sales with an average of $33,857, a low of $20,590 and a high of $67,000. No classic.com figure for the 2001 and 2002 S54 cars alone was retrieved for this research, so the difference between the engines is not given in dollars here. The one individual result fetched is a 2002 S54 car in Imola Red with 21,000 miles, offered as Lot 125 at Auctions America's Hilton Head Island sale on November 5, 2016, where it sold for $53,900. Sports Car Market says that figure includes buyer's premium; the RM Sotheby's lot page does not say. Hagerty's editorial on the car gives condition-based values, but the fetched page carries no date for those figures, so they are not repeated here.",
 "whatToLookFor": "US M Coupes divide by engine. The 1999 and 2000 cars have the 3,152 cc S52 and the 2001 and 2002 cars the 3,246 cc S54; BMW Group Classic dates the S54 from April 2001 and the M Coupe Buyer's Guide from cars produced after February 2001. BMW's type codes differ, CM93 for the US S52 car and CN93 for the US S54 car, and so does the final drive: 3.23:1 behind the S52 and 3.15:1 behind the S54. The S54 cars are the smaller US group, 678 or 687 depending on the source, against 2,180 S52 cars. Underneath, cars differ in the condition of the rear floor where the differential mounts. Classic Motorsports says the M Coupe does not typically suffer the subframe mount failure known on the E36 M3. Against that, two owner complaints on carcomplaints.com, a low-reliability source, describe a 1999 M Coupe with a differential mount and trunk floor support failure and a cracked subfloor, and a six-cylinder Z3, model not stated, with the rear subframe torn from the rear under panel. Those two reports are the whole of the evidence found here for rear floor failure on this model. Some cars carry records of an inspection or repair of that area and others carry none. On the engine side, Classic Motorsports names VANOS faults as not uncommon, oil leaks traced to the pressure-regulating valve, and a clutch flex line that expands with heat and makes the car hard to get into gear; cars differ in whether those items have been dealt with and recorded.",
 "commonProblems": "The M Coupe shares its S52 engine with the E36 M3 and its S54 with the E46 M3, and its chassis with the Z3. Classic Motorsports, in its November 2017 buyer's piece, lists problems with the VANOS variable valve timing system as not uncommon, oil leaks traced to the pressure-regulating valve, and a clutch flex line that heats up and expands with pressure until the car is hard to get into gear. The structural question is the rear floor. The E36 M3 is known for rear subframe mount failure, and Classic Motorsports says the M Coupe does not typically experience it. Owner reports on carcomplaints.com describe at least one car where it went otherwise: a 1999 M Coupe with a failed differential mount and trunk floor support, its owner told the subfloor was cracked and the car not drivable until repaired, and a six-cylinder Z3 whose rear subframe had torn from the rear under panel. These are individual owner reports, not a measured failure rate, and no source consulted gives one. Hagerty notes the car's reputation for being a handful to control at the limit. No NHTSA recall record was retrieved for this research, so recall history is not covered on this page, and no source fetched gives US repair costs for any of these faults.",
 "valueTrajectory": "A 1999 M Coupe test car carried a $42,670 sticker, and later journalism puts the MSRP around $45,000, or around $46,000 for a 2002 car. In November 2016 a 2002 S54 car with 21,000 miles sold for $53,900 including buyer's premium at Auctions America's Hilton Head Island sale, per Sports Car Market. As of November 2026 classic.com's benchmark for the M Coupe across all four model years is $40,723 and the average of its 198 recorded sales is $41,754, with recorded sales from $15,750 to $158,477. Its 1999 model-year page averages $33,857 across 57 sales. That 1999 page records sales from $20,590 to $67,000. Hagerty's editorial gives condition-based values, but they carry no date on the fetched page and are not used here. The 1999 average sits below the all-years average, but no fetched source states an S54-only value as of November 2026, so the gap between the S52 and S54 cars is not given a dollar number on this page.",
 "overallConfidence": "medium",
 "sources": [
  {
   "ref": "bmwclassic-us",
   "title": "BMW M Coupé (E36), US model",
   "url": "https://www.bmwgroup-classic.com/en/models/bmw-classics/product-description-page.ad-2745-1.bmw-m-coupe-e36-us-model.html",
   "publisher": "BMW Group Classic",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Manufacturer heritage page for the US car: 2,858 US versions produced by 2002; 3,152 cc, from April 2001 3,246 cc; 243 hp, from April 2001 315 hp; top speed 137 mph. No price, torque or weight given."
  },
  {
   "ref": "bmwclassic-eu",
   "title": "BMW M Coupé (E36)",
   "url": "https://www.bmwgroup-classic.com/en/models/bmw-classics/product-description-page.ad-23-12.bmw-m-coupe-e36.html",
   "publisher": "BMW Group Classic",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Manufacturer heritage page for the European car: production April 1998 to August 2002; 3,433 European M Coupes; 3,201 cc S50, 3,246 cc from 2001; 155 mph; shown at the IAA Frankfurt show in 1997. Home-market price only, not used."
  },
  {
   "ref": "hagerty-clownshoe",
   "title": "21 years on, BMW's clownshoe M Coupe strikes an even stranger, cooler chord",
   "url": "https://www.hagerty.com/media/?p=258834",
   "publisher": "Hagerty",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Editorial (not the valuation tool): 6,291 M Coupes for the 1999 to 2002 model years, 1,112 with the S54; S54 added 75 hp over the 240 hp S52; board mandated a tight budget and existing parts; reputation as a handful at the limit. Its condition values are undated on the fetch and are not used."
  },
  {
   "ref": "scm-s54",
   "title": "2002 BMW M Coupe, S54, 3.2-liter, 315-hp 6-cylinder engine",
   "url": "https://www.sportscarmarket.com/?p=256574",
   "publisher": "Sports Car Market",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Auction profile: 2,858 built for North America; 2,180 S52 cars and 687 S54 cars; S54 315 hp and 269 lb-ft in US trim; original MSRP right around $46,000; Lot 125 sold for $53,900 including buyer's premium at Auctions America Hilton Head Island on November 5, 2016, 21,000 miles."
  },
  {
   "ref": "rm-hh16",
   "title": "2002 BMW M Coupe, Hilton Head 2016, Lot 125",
   "url": "https://rmsothebys.com/auctions/hh16/lots/r0126-2002-bmw-m-coupe/",
   "publisher": "RM Sotheby's",
   "sourceType": "auction-house",
   "reliability": "high",
   "notes": "Lot page: sold $53,900, premium status not stated; Imola Red, 21,000 miles; US production 2,870; 2,180 S52 and 678 S54; 3,433 European cars; S54 at 315 hp and 215 lb-ft."
  },
  {
   "ref": "wikipedia-mcoupe",
   "title": "BMW M Coupé and Roadster",
   "url": "https://en.wikipedia.org/wiki/BMW_M_Coup%C3%A9_and_Roadster",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Pointer: developed under Burkhard Göschel to add rigidity to the Z3 roadster chassis; board approval conditional on cost; 678 US S54 cars, 1,112 S54 worldwide; North American S54 315 hp at 7,400 rpm and 252 lb-ft at 4,900 rpm; 25 percent limited-slip; 3.23:1 and 3.15:1 final drives; 15,322 M Roadsters 1997 to 2002."
  },
  {
   "ref": "mcbg-year",
   "title": "Year makes all the difference",
   "url": "https://www.mcoupebuyersguide.com/year-makes-all-the-difference",
   "publisher": "M Coupe Buyer's Guide",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Model-year guide: 1999 and 2000 cars at 240 hp and 236 lb-ft; S54 at 315 hp for 2001 and 2002 in North America and Europe; 2001 model year means cars produced after February 2001; 3.15:1 differential replaces 3.23:1. No production numbers."
  },
  {
   "ref": "classicmotorsports-ws",
   "title": "Window Shopper: BMW M Coupe",
   "url": "https://www.classicmotorsports.com/articles/window-shopper-bmw-m-coupe/",
   "publisher": "Classic Motorsports",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "US buyer's piece from the November 2017 issue: 2,858 sold in North America; MSRP around $45,000; S52 shared with the E36 M3, S54 with the E46 M3; no typical subframe mount failure; VANOS issues not uncommon; pressure-regulating valve oil leaks; clutch flex line."
  },
  {
   "ref": "rt-1998",
   "title": "Archives: 1999 BMW M Coupe",
   "url": "https://autos.yahoo.com/archives-1999-bmw-m-coupe-153500572.html",
   "publisher": "Road & Track (republished by Yahoo Autos)",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Period US road test from the October 1998 issue: 240 hp, 236 lb-ft, 0-60 mph in 5.5 seconds; ZF five-speed; same platform, driveline and suspension as the Z3; Göschel as director of special vehicles; Pischetsrieder quoted saying this is a car we should build."
  },
  {
   "ref": "edmunds-1999",
   "title": "1999 BMW M Review",
   "url": "https://edmunds.com/bmw/m/1999/review",
   "publisher": "Edmunds",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "US review: M Coupe 0-60 in about 5.3 seconds; 240 hp; 17 city, 24 highway mpg with manual. MSRP field is a placeholder and is not used."
  },
  {
   "ref": "kbb-1999",
   "title": "1999 BMW Z3 M Coupe 2D",
   "url": "https://www.kbb.com/bmw/z3/1999/m-coupe-2d",
   "publisher": "Kelley Blue Book",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "US specification page: 240 hp at 6,000 rpm, 236 lb-ft at 3,800 rpm, curb weight 3,131 lb, EPA 17 city, 24 highway, 20 combined mpg, manual. No original price given."
  },
  {
   "ref": "detroitnews-1999",
   "title": "The Detroit News's view (1999 BMW M Coupe)",
   "url": "https://www.cars.com/reviews/the-detroit-newss-view-1420689164743",
   "publisher": "The Detroit News (via Cars.com)",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Period US review of a 1999 M Coupe: test car sticker $42,670; 240 hp; described as a Z3 roadster with a station wagon-like hatchback grafted on; five-speed manual; limited-slip differential and traction control."
  },
  {
   "ref": "curbside-1999",
   "title": "Classic Carmentary: 1999 BMW M Coupe",
   "url": "https://www.curbsideclassic.com/vintage-reviews/classic-carmentary-1999-bmw-m-coupe",
   "publisher": "Curbside Classic",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Reprint of a period US review: tested price $42,670; 240 hp; top speed limited to 138 mph; 159-inch length; roof extends nearly to the rear bumper."
  },
  {
   "ref": "classic-com",
   "title": "BMW Z3 M Coupe - E36/8 Market",
   "url": "https://classic.com/m/bmw/z3/coupe/m/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of November 2026: CMB $40,723, average $41,754, 198 sales, lowest sale $15,750, top sale $158,477; model years 1999 to 2002. No engine split."
  },
  {
   "ref": "classic-com-1999",
   "title": "BMW Z3 M Coupe - E36/8 Market, 1999",
   "url": "https://classic.com/m/bmw/z3/coupe/m/year-1999",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of November 2026, page filtered to the 1999 model year: average $33,857, 57 sales, lowest sale $20,590, top sale $67,000. The page's labels name the whole E36/8 market and the CMB shown repeats the all-years $40,723."
  },
  {
   "ref": "carcomplaints-1999",
   "title": "1999 BMW Z3 Structure: Frame and Members Problems",
   "url": "https://carcomplaints.com/BMW/Z3/1999/body_paint/structure-frame_and_members.shtml",
   "publisher": "CarComplaints.com",
   "sourceType": "club-forum",
   "reliability": "low",
   "notes": "Owner complaints: a 1999 Z3 M coupe with a differential mount and trunk floor support failure and a cracked subfloor; a six-cylinder Z3 with the rear subframe torn from the rear under panel. Fault pattern only, no rates."
  },
  {
   "ref": "bimmerarchive-e36-7c",
   "title": "E36 (7C) Z3 Coupe vehicles",
   "url": "https://www.bimmerarchive.org/e-code/e36-7c.html",
   "publisher": "bimmerarchive.org",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Type-code table: CM93 US S52 coupe and CN93 US S54 coupe, with type-code validity windows that are not first-build dates; CM91 and CM92 European S50 cars to July 2000. Output in kW only; no production counts."
  },
  {
   "ref": "bmwcca-2002",
   "title": "2002 M coupe: BMW of North America",
   "url": "https://bmwccafoundation.org/?p=6285",
   "publisher": "BMW CCA Foundation",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Collection page for a 2002 S54 car: 3,246 cc S54 at 315 hp; prints 3,131 lbs. without calling it curb weight, so not used for weight; 15,322 M Roadsters built, 10,503 sold in the US."
  },
  {
   "ref": "deseret-1998",
   "title": "BMW's Z3 M is fast, expensive",
   "url": "https://www.deseret.com/1998/10/2/19404463/bmw-s-z3-m-is-fast-expensive/",
   "publisher": "Deseret News",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Period US test of the 1998 M Roadster, not the coupe: base price $42,770, 0-60 mph in 5.2 seconds, top speed 137 mph. Used only for the M Roadster comparison."
  }
 ],
 "claims": [
  {
   "section": "production",
   "claimText": "BMW Group Classic, Sports Car Market and Classic Motorsports print 2,858 US or North American M Coupes; RM Sotheby's alone prints a US total of 2,870, although its own engine split of 2,180 and 678 adds to 2,858.",
   "computed": ["2,858"],
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["bmwclassic-us", "scm-s54", "classicmotorsports-ws", "rm-hh16"],
   "conflictNote": "BMW Group Classic, Sports Car Market and Classic Motorsports give 2,858. RM Sotheby's alone gives 2,870 as the US total, although its own engine split of 2,180 and 678 adds to 2,858. Which figure is correct is not resolved by any source consulted here.",
   "evidence": [
    { "ref": "bmwclassic-us", "quote": "The BMW M Coupé was relatively rare and by 2002 only 2,858 US versions had been produced." },
    { "ref": "scm-s54", "quote": "Over four years of production, just 2,858 M Coupes were built for North America." },
    { "ref": "classicmotorsports-ws", "quote": "only 2858 units were sold in North America through the end of the model's run in 2002." },
    { "ref": "rm-hh16", "quote": "U.S. production cars totaled 2,870" },
    { "ref": "rm-hh16", "quote": "2,180 built with the S52 engine and 678 with the S54 engine" }
   ]
  },
  {
   "section": "production",
   "claimText": "Sports Car Market and RM Sotheby's agree that 2,180 US cars had the S52 engine, but Sports Car Market counts 687 US S54 cars where RM Sotheby's and Wikipedia count 678; Sports Car Market's split adds to 2,867, not its own 2,858 total.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["scm-s54", "rm-hh16", "wikipedia-mcoupe"],
   "computed": ["2,867"],
   "conflictNote": "Sports Car Market states 687 S54 cars for the US. RM Sotheby's and Wikipedia state 678. Both agree on 2,180 S52 cars. Not resolved by any source consulted here.",
   "evidence": [
    { "ref": "scm-s54", "quote": "A total of 2,180 of the early S52 models came over in 1999 and 2000, and just 687 of the S54 models" },
    { "ref": "scm-s54", "quote": "Over four years of production, just 2,858 M Coupes were built for North America." },
    { "ref": "rm-hh16", "quote": "2,180 built with the S52 engine and 678 with the S54 engine" },
    { "ref": "wikipedia-mcoupe", "quote": "678 M Coupes were made for the American market, with a total of 1,112 M Coupes built with the S54 engine worldwide." }
   ]
  },
  {
   "section": "production",
   "claimText": "Hagerty gives 6,291 M Coupes for all markets across the 1999 to 2002 model years, and BMW Group Classic's 2,858 US cars and 3,433 European cars add to the same 6,291.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["hagerty-clownshoe", "bmwclassic-us", "bmwclassic-eu"],
   "evidence": [
    { "ref": "hagerty-clownshoe", "quote": "BMW only made 6291 Z3 M Coupes from the 1999 to 2002 model years." },
    { "ref": "bmwclassic-us", "quote": "The BMW M Coupé was relatively rare and by 2002 only 2,858 US versions had been produced." },
    { "ref": "bmwclassic-eu", "quote": "Since only 3,433 \"European\" (europäische) BMW M Coupés were built, this vehicle is a much-coveted rarity today." }
   ]
  },
  {
   "section": "production",
   "claimText": "Hagerty and Wikipedia both give 1,112 M Coupes built with the S54 engine for all markets, and Wikipedia calls the S54 coupe one of the lowest-production BMWs.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["hagerty-clownshoe", "wikipedia-mcoupe"],
   "evidence": [
    { "ref": "hagerty-clownshoe", "quote": "Of those, only 1112 have the later, higher-output, S54 engine" },
    { "ref": "wikipedia-mcoupe", "quote": "The M Coupé powered by the S54 engine is one of the lowest production BMWs with only 1,112 built in total for all markets." }
   ]
  },
  {
   "section": "history",
   "claimText": "The M Coupe was developed under Burkhard Göschel, BMW's director of special vehicles, to add torsional and structural rigidity to the Z3 roadster's chassis; the board approved it only if it stayed cost-effective, with a tight budget and existing parts, and Road & Track's October 1998 test quotes chairman Bernd Pischetsrieder backing the car.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["wikipedia-mcoupe", "rt-1998", "hagerty-clownshoe"],
   "evidence": [
    { "ref": "wikipedia-mcoupe", "quote": "with the intention of adding increased torsional and structural rigidity to the Z3 roadster's chassis." },
    { "ref": "wikipedia-mcoupe", "quote": "The development team had a hard time convincing the board of directors to approve the model for production" },
    { "ref": "wikipedia-mcoupe", "quote": "it was eventually given the green light as long as it remained cost-effective to produce." },
    { "ref": "rt-1998", "quote": "Dr. Burkhard Goschel, BMW's director of special vehicles and leader of the team responsible for numerous M models" },
    { "ref": "rt-1998", "quote": "This is a car we should build." },
    { "ref": "rt-1998", "quote": "(From 1998 October issue of Road and Track.)" },
    { "ref": "hagerty-clownshoe", "quote": "Creativity was essential; the BMW board mandated a tight budget and the use of as many existing parts as possible." }
   ]
  },
  {
   "section": "history",
   "claimText": "The M Coupe was shown at the IAA Frankfurt show in 1997 to a divided reaction; BMW Group Classic dates European production from April 1998 to August 2002, and the bimmerarchive type-code table lists the US S52 car as CM93 and the US S54 car as CN93.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["bmwclassic-eu", "bimmerarchive-e36-7c"],
   "evidence": [
    { "ref": "bmwclassic-eu", "quote": "The BMW M Coupé design already exerted a polarising influence when it was presented at the IAA Frankfurt Motor Show in 1997." },
    { "ref": "bmwclassic-eu", "quote": "04/1998 - 08/2002" },
    { "ref": "bimmerarchive-e36-7c", "quote": "1997-10 - 2000-07 | CM93 | M Coupé | Coupe | S52B32 | 176kW | Rear-Wheel Drive | left | USA" },
    { "ref": "bimmerarchive-e36-7c", "quote": "2000-03 - 2002-05 | CN93 | M Coupé | Coupe | S54B32 | 239kW | Rear-Wheel Drive | left | USA" }
   ]
  },
  {
   "section": "specs",
   "claimText": "US sources give the S52 car 240 hp at 6,000 rpm and 236 lb-ft at 3,800 rpm, the same engine as the E36 M3; BMW Group Classic's US page prints 243 hp.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["kbb-1999", "rt-1998", "mcbg-year", "classicmotorsports-ws", "bmwclassic-us"],
   "evidence": [
    { "ref": "kbb-1999", "quote": "240 @ 6000 RPM" },
    { "ref": "kbb-1999", "quote": "236 @ 3800 rpm" },
    { "ref": "rt-1998", "quote": "236 lb.-ft. of torque available at the tip of the throttle" },
    { "ref": "mcbg-year", "quote": "Produced in 1999 and 2000, these cars produce 240hp and 236 lb/ft of torque." },
    { "ref": "classicmotorsports-ws", "quote": "the same 240-horsepower engine found in the E36-chassis M3" },
    { "ref": "bmwclassic-us", "quote": "243 hp (from 04/2001: 315 hp)" }
   ]
  },
  {
   "section": "specs",
   "claimText": "Sources agree the US S54 car makes 315 hp, but give three torque figures: 269 lb-ft (Sports Car Market), 252 lb-ft at 4,900 rpm with 315 hp at 7,400 rpm (Wikipedia) and 215 lb-ft (RM Sotheby's).",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["scm-s54", "wikipedia-mcoupe", "rm-hh16"],
   "conflictNote": "Sports Car Market states 269 lb-ft in US trim. Wikipedia states 252 lb-ft at 4,900 rpm for North American cars. RM Sotheby's states 215 lb-ft. Not resolved by any source consulted here; no BMW of North America specification sheet was retrieved.",
   "evidence": [
    { "ref": "scm-s54", "quote": "The S54 engine yielded 315 horsepower and 269 pound-feet in U.S. trim." },
    { "ref": "wikipedia-mcoupe", "quote": "North American models have 235 kW (315 bhp) at 7,400 rpm and 341 N⋅m (252 lb⋅ft) at 4,900 rpm." },
    { "ref": "rm-hh16", "quote": "Power produced was 315 brake horsepower and 215 pound-feet of torque" }
   ]
  },
  {
   "section": "specs",
   "claimText": "For 2001 and 2002 both North America and Europe received the S54 engine from the E46 M3, displacement rose from 3,152 cc to 3,246 cc, and the S54 added 75 hp over the 240 hp S52 to reach 315 hp.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["mcbg-year", "bmwclassic-us", "hagerty-clownshoe", "classicmotorsports-ws"],
   "evidence": [
    { "ref": "mcbg-year", "quote": "For 2001 and 2002, both North America and Europe received the 315hp S54 engine from the 2001-2006 E46 M3." },
    { "ref": "bmwclassic-us", "quote": "3152 cc / 192.3 cu (from 04/2001: 3246 cc / 198.0 cu)" },
    { "ref": "hagerty-clownshoe", "quote": "The S54 from the 2001 and 2002 model years added 75 more hp than the 240-hp S52 engine" },
    { "ref": "classicmotorsports-ws", "quote": "While displacement remained 3.2 liters, variable valve timing and other tricks boosted output to 315 horsepower." }
   ]
  },
  {
   "section": "specs",
   "claimText": "BMW Group Classic dates the 3,246 cc S54 engine in US cars from April 2001 (04/2001), and the M Coupe Buyer's Guide says the 2001 model year means cars produced after February 2001.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["bmwclassic-us", "mcbg-year"],
   "evidence": [
    { "ref": "bmwclassic-us", "quote": "3152 cc / 192.3 cu (from 04/2001: 3246 cc / 198.0 cu)" },
    { "ref": "mcbg-year", "quote": "The 2001 model year (cars produced after February 2001) brought the new S54 engine" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The M Coupe uses a ZF five-speed manual and a limited-slip differential, with a 3.23:1 final drive behind the S52 and 3.15:1 behind the S54; Wikipedia gives the differential a maximum locking of 25 percent and describes the suspension as MacPherson struts in front and semi-trailing arms in the rear.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["rt-1998", "detroitnews-1999", "mcbg-year", "wikipedia-mcoupe"],
   "evidence": [
    { "ref": "rt-1998", "quote": "Snick the ZF 5-speed into 1st gear and head off for a twisty two-lane" },
    { "ref": "detroitnews-1999", "quote": "And they’ve hooked it up to a sweet five-speed manual gearbox." },
    { "ref": "detroitnews-1999", "quote": "It also comes with traction control and a limited-slip differential" },
    { "ref": "mcbg-year", "quote": "3.15:1 differential replaces 3.23:1" },
    { "ref": "wikipedia-mcoupe", "quote": "A limited slip differential with a maximum locking of 25 percent is standard." },
    { "ref": "wikipedia-mcoupe", "quote": "MacPherson struts in the front and semi-trailing arms in the rear." }
   ]
  },
  {
   "section": "specs",
   "claimText": "Kelley Blue Book lists a curb weight of 3,131 lb for the 1999 M Coupe; no S54 curb weight was found in a fetched source, so this is a single-source figure for the S52 car.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["kbb-1999"],
   "evidence": [
    { "ref": "kbb-1999", "quote": "3131 lbs." }
   ]
  },
  {
   "section": "specs",
   "claimText": "Road & Track recorded 0-60 mph in 5.5 seconds for the S52 car and Edmunds quotes about 5.3 seconds; BMW Group Classic gives a 137 mph top speed for the US car and a period review gives a limit of 138 mph; no fetched source gives an S54 0-60 time.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["rt-1998", "edmunds-1999", "bmwclassic-us", "curbside-1999"],
   "evidence": [
    { "ref": "rt-1998", "quote": "0 to 60 in 5.5 seconds" },
    { "ref": "edmunds-1999", "quote": "the M Coupe screeches from zero to sixty in about 5.3 seconds." },
    { "ref": "bmwclassic-us", "quote": "220 km/h / 137 mph" },
    { "ref": "curbside-1999", "quote": "a top speed that's probably much higher than the artificially limited 138 miles per hour set by BMW." }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 1999 M Coupe is rated at 17 mpg city, 24 mpg highway and 20 mpg combined with the manual transmission.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["kbb-1999", "edmunds-1999"],
   "evidence": [
    { "ref": "kbb-1999", "quote": "City 17 mpg" },
    { "ref": "kbb-1999", "quote": "Highway 24 mpg" },
    { "ref": "kbb-1999", "quote": "Combined 20 mpg" },
    { "ref": "edmunds-1999", "quote": "17 City / 24 Hwy MPG, Manual" }
   ]
  },
  {
   "section": "specs",
   "claimText": "No BMW of North America price sheet was retrieved; a 1999 M Coupe test car carried a $42,670 sticker in two period reviews, Classic Motorsports puts the MSRP around $45,000, and Sports Car Market puts a 2002 car right around $46,000.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["detroitnews-1999", "curbside-1999", "classicmotorsports-ws", "scm-s54"],
   "evidence": [
    { "ref": "detroitnews-1999", "quote": "Our test car carried a $42,670 sticker" },
    { "ref": "curbside-1999", "quote": "Tested Price: $42,670" },
    { "ref": "classicmotorsports-ws", "quote": "The M Coupe's MSRP hovered around $45,000" },
    { "ref": "scm-s54", "quote": "The original MSRP of this car would have been right around $46,000." }
   ]
  },
  {
   "section": "history",
   "claimText": "Period US reviews described the M Coupe as a Z3 roadster with a station wagon-like hatchback grafted on, with a roof running nearly to the rear bumper and a length of 159 inches (4,039 mm), on the Z3's platform, driveline and suspension; Road & Track reported Göschel's team cared more about building another Ultimate Driving Machine than winning design awards, and Hagerty notes its reputation as a handful at the limit.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["detroitnews-1999", "curbside-1999", "rt-1998", "hagerty-clownshoe"],
   "computed": ["4,039"],
   "evidence": [
    { "ref": "rt-1998", "quote": "Based on the Z3, the fixed-roof variant uses the same platform, engine, driveline, suspension and basic body structure." },
    { "ref": "detroitnews-1999", "quote": "Picture a BMW Z3 roadster with a station wagon-like hatchback grafted onto its rear" },
    { "ref": "curbside-1999", "quote": "The roof extends nearly to the rear bumper, with a slightly angled C-Pillar and rear window," },
    { "ref": "curbside-1999", "quote": "Its tiny 159-inch length, slot-car handling," },
    { "ref": "rt-1998", "quote": "more interested in building another 'Ultimate Driving Machine,' not necessarily in winning design awards" },
    { "ref": "hagerty-clownshoe", "quote": "Despite its reputation for being a handful to control at the limit" }
   ]
  },
  {
   "section": "summary",
   "claimText": "The M Roadster, the open car on the same platform, was built in far larger numbers: 15,322 between 1997 and 2002, of which the BMW CCA Foundation says 10,503 were sold in the US; the 1998 M Roadster had a $42,770 base price.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["wikipedia-mcoupe", "bmwcca-2002", "deseret-1998"],
   "evidence": [
    { "ref": "wikipedia-mcoupe", "quote": "In the 6 years from 1997 to 2002, 15,322 M Roadsters were produced." },
    { "ref": "bmwcca-2002", "quote": "All told, BMW Manufacturing built 15,322 examples of the M roadster, of which 10,503 were sold in the US." },
    { "ref": "deseret-1998", "quote": "base price $42,770" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The European M Coupe carried the 3,201 cc S50 engine and a 155 mph top speed, with S50 type codes CM91 and CM92 running to July 2000.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["bmwclassic-eu", "bimmerarchive-e36-7c"],
   "evidence": [
    { "ref": "bmwclassic-eu", "quote": "3201 cc (from 2001: 3246 cc)" },
    { "ref": "bmwclassic-eu", "quote": "250 km/h (155 mph)" },
    { "ref": "bimmerarchive-e36-7c", "quote": "1997-09 - 2000-07 | CM91 | M Coupé | Coupe | S50B32 | 236kW | Rear-Wheel Drive | left | Europe" }
   ]
  },
  {
   "section": "problems",
   "claimText": "Classic Motorsports, in its November 2017 buyer's piece, lists VANOS variable valve timing issues as not uncommon, oil leaks traced to the pressure-regulating valve, and a clutch flex line that expands with heat and pressure and makes the car hard to get into gear; this is a single-source fault list.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["classicmotorsports-ws"],
   "evidence": [
    { "ref": "classicmotorsports-ws", "quote": "VANOS [variable valve timing] issues are not uncommon" },
    { "ref": "classicmotorsports-ws", "quote": "We've also seen a few troublesome oil leaks traced to the pressure-regulating valve." },
    { "ref": "classicmotorsports-ws", "quote": "the clutch flex line heats up and expands with pressure, making the car hard to get in gear." }
   ]
  },
  {
   "section": "problems",
   "claimText": "Classic Motorsports says the M Coupe does not typically suffer the subframe mount failure known on the E36 M3, but owner complaints describe a 1999 M Coupe with a differential mount and trunk floor support failure and a cracked subfloor, and a six-cylinder Z3 with its rear subframe torn from the rear under panel.",
   "confidence": "low",
   "status": "verified",
   "sourceRefs": ["classicmotorsports-ws", "carcomplaints-1999"],
   "evidence": [
    { "ref": "classicmotorsports-ws", "quote": "It doesn't typically experience the subframe mount failure that E36 M3 owners worry about" },
    { "ref": "carcomplaints-1999", "quote": "1999 Z3 M coupe differential mount trunk floor support failure." },
    { "ref": "carcomplaints-1999", "quote": "That my subfloor was cracked and unless I fixed it my car would be useless, and not drivable." },
    { "ref": "carcomplaints-1999", "quote": "Rear subframe on vehicle has torn from the rear under panel on vehicle." }
   ]
  },
  {
   "section": "market",
   "claimText": "As of November 2026 classic.com's market benchmark for the M Coupe is $40,723 with an average price of $41,754 across 198 sales, the lowest recorded sale $15,750 and the highest $158,477, all model years 1999 to 2002 combined.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["classic-com"],
   "evidence": [
    { "ref": "classic-com", "quote": "$40,723" },
    { "ref": "classic-com", "quote": "$41,754" },
    { "ref": "classic-com", "quote": "Lowest Sale $15,750" },
    { "ref": "classic-com", "quote": "Top Sale $158,477" },
    { "ref": "classic-com", "quote": "Model years for BMW Z3 M Coupe - E36/8 (1999 to 2002)" }
   ]
  },
  {
   "section": "market",
   "claimText": "As of November 2026 classic.com's page filtered to the 1999 model year shows 57 sales with an average of $33,857, a lowest sale of $20,590 and a top sale of $67,000.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["classic-com-1999"],
   "evidence": [
    { "ref": "classic-com-1999", "quote": "Avg $33,857" },
    { "ref": "classic-com-1999", "quote": "Sales Count 57" },
    { "ref": "classic-com-1999", "quote": "Lowest Sale $20,590" },
    { "ref": "classic-com-1999", "quote": "Top Sale $67,000" }
   ]
  },
  {
   "section": "market",
   "claimText": "A 2002 S54 M Coupe in Imola Red with 21,000 miles sold as Lot 125 at Auctions America's Hilton Head Island sale on November 5, 2016 for $53,900, which Sports Car Market says includes buyer's premium; the RM Sotheby's lot page does not say.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["scm-s54", "rm-hh16"],
   "evidence": [
    { "ref": "scm-s54", "quote": "This car, Lot 125, sold for $53,900, including buyer's premium, at Auctions America's Hilton Head Island, SC" },
    { "ref": "scm-s54", "quote": "auction on November 5, 2016." },
    { "ref": "rm-hh16", "quote": "$53,900 USD | Sold" },
    { "ref": "rm-hh16", "quote": "A mere 21,000 miles on the odometer" },
    { "ref": "rm-hh16", "quote": "Imola Red paintwork" }
   ]
  }
 ]
};
