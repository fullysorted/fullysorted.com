/**
 * Researched model draft - Volkswagen Karmann Ghia Type 14 (1955-1974, US sales from the 1956 model year).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedKarmannGhia = {
 "slug": "volkswagen/karmann-ghia",
 "make": "Volkswagen",
 "model": "Karmann Ghia",
 "generation": "Type 14, coupe and convertible",
 "generationCode": "Type 14",
 "trim": null,
 "yearStart": 1955,
 "yearEnd": 1974,
 "bodyStyles": [
  "2-door 2+2 coupe (fixed roof)",
  "2-door convertible (fabric top, from 1957)"
 ],
 "engines": [
  "1,192 cc air-cooled flat-4, 1,200 cc class; a US-market timeline records a 40 hp version with a fully synchronized four-speed from August 1960",
  "1,295 cc air-cooled flat-4, 1,300 cc class, Solex 30 PICT carburetor, from August 1965 (output not stated in the sources consulted)",
  "1,500 cc air-cooled flat-4, offered from 1966 and paired with front disc brakes (output not stated in the sources consulted)",
  "1,584 cc class dual-port air-cooled flat-4 with a Solex 34 PICT-3 carburetor, 1,600 cc class, from August 1970; one timeline lists 54 hp for 1971-1974 cars"
 ],
 "productionTotal": null,
 "productionNotes": "No single production total is printed here because the sources do not agree on one and, more usefully, do not agree on what is being counted. Wikipedia's text says more than 445,000 Karmann Ghias were built in Germany, not including the Type 34, yet its breakdown table lists the coupe as 364,401 cars labeled Type 14 and 34 together with 80,837 convertibles, and those two figures add up to 445,238. The US parts vendor MA Motorworks gives 445,238 as the German total and adds 41,600 built in Brazil between 1962 and 1975. The Hagerty buying guide also prints production figures, but its wording could not be matched to the page text when checked, so they are not used here. That leaves the Wikipedia text and table disagreeing with each other about whether the Type 34 sits inside the 445,000 range, and no source consulted resolves it. Neither the Volkswagen newsroom page nor any other source consulted gives a US import count, a US share of the total, or a split by model year, so none is claimed. The Wikipedia line that production doubled soon after US introduction and that the Ghia became the car most imported into the US is a qualitative statement with no number attached. Brazilian cars are counted separately by MA Motorworks and are not part of any German figure above. Wikipedia is treated here as a pointer: the figure that carries the claim is the MA Motorworks timeline, and neither cites a primary Volkswagen or Karmann archive. A Volkswagen heritage or Karmann archive count, ideally by model year and body, would settle this.",
 "notableTrims": [
  {
   "name": "Type 14 coupe, 1956 US introduction",
   "note": "The first Karmann Ghias reached US dealers in 1956. A US parts-vendor timeline records the car's 0-60 mph time at 34.2 seconds, which tells you what the original engine was for: looks, not speed. Early cars with the lower headlight position are the ones whose body parts the UK supplier calls decidedly more tricky to find."
  },
  {
   "name": "Type 14 convertible (cabriolet), 1957 on",
   "note": "Added to the range in August 1957. Soft tops close almost flush with the body line and the convertible is a strict two-seater. It is the body style the market pays more for, and also the one whose floorpans are most exposed to water if the top or its rubbers have leaked."
  },
  {
   "name": "1500 cc car with front disc brakes (1966 on)",
   "note": "The first Ghia with the larger engine and discs up front, and the earliest car many owners treat as comfortably drivable in modern traffic. US-bound cars were described as getting the largest available engines and updated running gear."
  },
  {
   "name": "1970-1974 dual-port 1,600 cc cars",
   "note": "The last engine of the run, bigger bumper styling on the final cars and, per one 1974 auction listing, front disc brakes, pop-out rear quarter windows and a deleted rear seat to comply with federal belt rules."
  },
  {
   "name": "Type 34 'Razor Edge' (context only)",
   "note": "A bigger, sharper-edged coupe on the Type 3 platform sold in many countries but never officially imported to the US. Gray-market cars appear here. classic.com puts the Type 34 average sale at $38,429 as of September 2026."
  }
 ],
 "specs": {
  "layout": "Rear-engine, rear-wheel drive, air-cooled flat-4",
  "chassis": "Ghia-styled body on a Volkswagen platform; the Type 34 used the Type 3 platform instead",
  "engine": "1,192 cc, 1,295 cc, 1,500 cc and 1,584 cc class air-cooled flat-4s over the run",
  "power": "Rating basis varies by source; a US timeline lists 40 hp for the 1960 1,200 cc engine and 54 hp for 1971-1974 dual-port 1,600 cc cars",
  "torque": "Not stated in any source consulted",
  "transmission": "Four-speed manual; fully synchronized from August 1960; a semi-automatic option is listed from 1967 by the Volkswagen newsroom",
  "weight": "Not established in lb by the sources consulted; Volkswagen's newsroom says the convertible is only about 22 lb heavier than the coupe (a figure the factory page gives in metric)",
  "acceleration": "0-60 mph in 34.2 seconds for the first US cars per MA Motorworks; no period US road test was retrieved for this page",
  "brakes": "Drums early; front discs on the 1,500 cc car and on 1974 cars per the sources consulted",
  "bumpers": "US-bound cars carried plumber's delight bumper overrider tubes; blade bumpers early, square Europa-style bumpers on final cars per one timeline",
  "us_intro": "1956 coupe; US convertible deliveries are placed in 1958 by one timeline",
  "us_end": "Final US cars June 21, 1974 per MA Motorworks; classic.com lists model years 1956 to 1975",
  "us_list_price_1962": "$2,295 for a new Karmann Ghia in a US ad reproduced by Zwischengas (the year is the article's, not the sentence's)",
  "us_list_price_1974": "$3,475 for the coupe at the end of production per MA Motorworks",
  "production_total": "Disputed; see productionNotes",
  "type_34_us": "Not officially sold in the US"
 },
 "summary": "The Karmann Ghia Type 14 is the Volkswagen that looks faster than it is: an Italian-styled coupe from 1955 in Germany and a convertible from 1957, sold in the United States from 1956 until the last cars in June 1974. A US parts-vendor timeline records 34.2 seconds from 0 to 60 mph for the first American cars, and engines grew from 1,192 cc to a dual-port 1,600 cc over the run. Sources disagree on how many were built: Wikipedia's table sums to 445,238 cars made in Germany, MA Motorworks gives that figure plus 41,600 from Brazil, and Wikipedia's own text says the Type 34 is excluded while its table says otherwise, so this page prints no total. The larger Type 34 Razor Edge was never officially sold here and appears only for context. A new US coupe cost $2,295 in a 1962 advertisement and $3,475 at the end of production in 1974. As of September 2026 classic.com puts the average Karmann Ghia at $29,668, with a market benchmark of $46,000 and 25 cars for sale, and rust rather than mechanical wear decides which ones are worth saving.",
 "history": "## Why the Ghia exists\n\nThe Karmann Ghia is a styling exercise on Volkswagen mechanicals. classic.com's description is that it was styled by the Italian design house Ghia and built by Volkswagen, available first as a coupe and then as a convertible. None of the sources retrieved for this page record who at Volkswagen pushed the idea through, or what nearly stopped it, so this page does not guess. What the sources do show is the bargain it offered: a body that looked like a sports car, and an engine and parts catalog that any Volkswagen shop already knew. That is why a UK parts supplier says the mechanical parts are readily available and inexpensive, and why Hagerty says almost all parts are available to keep one running.\n\n## Coupe in Germany, then America\n\nThe coupe came first. Volkswagen's newsroom says the convertible launched in 1957, two years after the coupe, which places the coupe in 1955. MA Motorworks' year-by-year timeline puts US availability in 1956 and records the 0-60 mph time of those first cars at 34.2 seconds. Wikipedia says production doubled soon after US introduction and that the Ghia became the car most imported into the US. No source retrieved gives a US count, so that remains a statement without a number. The convertible went into production in August 1957, and the same timeline places US convertible deliveries in 1958. It was a strict two-seater, and Volkswagen describes a top that closes almost completely with the body line.\n\n## Engines, one at a time\n\nPower rose in small steps. The timeline records a new 40 hp 1,200 cc engine in August 1960, with a fully synchronized four-speed, a new carburetor with an automatic electric choke and a flatter gas tank that increased trunk room. A 1,300 cc engine with a Solex 30 PICT carburetor followed in August 1965, and a 1,600 cc dual-port engine with a Solex 34 PICT-3 carburetor in August 1970. Volkswagen's own newsroom page adds a 1,500 cc car in 1966, a semi-automatic transmission option in 1967, a glass rear window on the convertible in 1969 and a padded dashboard and safety steering wheel in 1970. One thing worth knowing: the MA Motorworks timeline dates the convertible's glass rear window to 1968, a year earlier than Volkswagen's page, and nothing consulted settles which is right.\n\n## What America got\n\nUS-bound Ghias were not the same as German-market cars. The timeline records that all US-bound cars got plumber's delight bumper overrider tubes and that US export cars typically received the largest available engines and up-to-date suspensions. A 1974 coupe sold on Hagerty's marketplace in June 2026 is described as having front disc brakes, pop-out rear quarter windows and a deleted rear seat, the last because of federal safety requirements for seat belts. The listing is a seller's description, a single source, and it is used here only as an example of what a last-year US car looks like.\n\n## The end of the run\n\nWikipedia says the car was superseded in late 1974 by the Golf-based Scirocco. MA Motorworks records that Karmann Ghia production halted on June 21 and prices the final US coupe at $3,475. classic.com lists the model years as 1956 to 1975, so a 1975 title is plausible on a late-built US car but is not explained by any source consulted. A separate set of Brazilian cars, 41,600 of them between 1962 and 1975, were built outside Germany and are not part of the German totals.",
 "marketNotes": "As of September 2026 classic.com lists the average price of a Volkswagen Karmann Ghia at $29,668, a market benchmark of $46,000 and 25 cars currently for sale. Its lowest recorded sale is $3,000 for a 1968 convertible on July 21, 2025, and the page does not say what condition that car was in. classic.com does not state a highest recorded sale on the page retrieved, so no top figure is given here. A 1974 coupe with 63,750 miles (true mileage unknown) in Sultan, Washington sold on Hagerty's marketplace on June 15, 2026 for $7,750 after 9 bids, with bubbling paint on the left front fender, a cracked dashboard and recent brake and mechanical work; the page does not say whether fees are included in that figure. For historical contrast, a 1964 coupe with 1,900 miles and a restoration by Ghia itself sold for $8,247 including buyer's premium at Christie's Retromobile in Paris on February 8, 2003, against an estimate of $16,000 to $20,000, and the reviewer noted that a convertible would have had more collector appeal. That 2003 sale is an old data point and a European auction, kept only because it shows the long gap between a hardtop's asking price and what it actually brought. The Type 34 Razor Edge, which was not officially sold here, averages $38,429 on classic.com with a lowest recorded sale of $23,050 on August 18, 2022, so it runs well above the common Type 14 as of September 2026.",
 "whatToLookFor": "Start with the metal, because everything else on a Karmann Ghia is cheap by comparison. A UK parts supplier calls rust the biggest killer of these cars and lists the headlamp surrounds, nose, wheel arches, quarter panels, door bottoms, sills, jacking points, floorpans, inner fenders and heater channels as the places it appears. Hagerty adds that the heater channels can rust unseen and that the sills matter to the car's structure, especially on the convertible, and also names the A-pillars, floors and windshield surround. On a convertible, the floorpans are likely to be rustier, simply because the top or its rubbers have probably let in water, so lift the carpet before you look at the paint. Repair sections exist, including the nose cone that is difficult to shape properly, but the same supplier says components for the earliest cars are decidedly more tricky. It also warns against thick filler used to cover rust, so a paint-thickness gauge or a magnet along the lower body is a better first move than a polish. Underneath, Hagerty says play in the engine's bottom pulley points to an imminent rebuild, and a notchy or stiff gear shift is usually the nylon block in the selector rod. The 1,500 cc and later cars have front disc brakes, which is the better starting point for a car you intend to drive. A 1974 US car lacks a usable rear seat because of belt rules, which is original, not damage. Confirm the body style on the title and the engine against the year, since a 1,600 cc dual-port in a car titled earlier than 1970 is a swap.",
 "commonProblems": "The sources agree on one problem and treat everything else as minor. Rust is the one: a UK parts supplier says the dreaded tin worm seems particularly partial to the Karmann's metalwork, and Hagerty says the heater channels can rust unseen. The Sports Car Market review of a 1964 coupe makes the same point from the other side, praising a car for its total lack of rust, rot or evidence of previous repair and noting how rare that is. Convertibles are worse, because their floorpans see more water. Mechanically the picture is gentle. Hagerty names bottom pulley play as the engine warning sign and a worn nylon block in the selector rod as the usual cause of a stiff gear shift. The UK supplier says all the mechanical parts are readily available and inexpensive. None of the sources consulted gives a US dollar repair cost, a recall record or an NHTSA complaint count; an NHTSA recall lookup for a 1970 car was attempted and returned an error, so the page makes no claim about US safety recalls. The cost of a proper rust repair is the unspoken variable in this entire section. The advice from the supplier is that covering rust with a layer of thick filler really is not the way to go, which tells you what the cheap repairs look like.",
 "valueTrajectory": "A new coupe cost $2,295 in a US advertisement reproduced for 1962 and $3,475 at the end of production in 1974, a 51 percent rise over twelve years. As of September 2026 classic.com's average is $29,668, which is roughly nine times the 1974 sticker, with a market benchmark of $46,000 that sits well above the average and implies a long tail of cheaper cars. The 2003 Retromobile result of $8,247 for a 1,900 mile restored coupe, against a 2026 average near $30,000, shows the price level has moved a long way, though a 2003 European auction and a 2026 aggregate are not a clean like-for-like pair and the page does not pretend otherwise. The spread inside the market is wide: $3,000 for a 1968 convertible in July 2025 and $7,750 for a 1974 coupe in June 2026, set against a $46,000 benchmark, tells the story of condition and body style rather than year. The Type 34 has no US new price because it was never sold here, and classic.com shows it trading above the Type 14. classic.com does not publish a breakdown of coupe against convertible values on the pages retrieved, so the usual convertible premium is an inference from the 2003 reviewer's comment, not a measured figure.",
 "overallConfidence": "low",
 "sources": [
  {
   "ref": "wikipedia-kg",
   "title": "Volkswagen Karmann Ghia",
   "url": "https://en.wikipedia.org/wiki/Volkswagen_Karmann_Ghia",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Used as a pointer only. Establishes: more than 445,000 built in Germany excluding the Type 34 (text), coupe 364,401 labeled Type 14 and 34 plus 80,837 convertibles (table), Type 34 not officially offered in the US, production doubled soon after US introduction, superseded by the Scirocco in late 1974."
  },
  {
   "ref": "classic-kg",
   "title": "Volkswagen Karmann Ghia Market, classic.com",
   "url": "https://www.classic.com/m/volkswagen/karmann-ghia/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of September 2026: average price $29,668, market benchmark $46,000, 25 cars for sale, lowest recorded sale $3,000 for a 1968 convertible on July 21, 2025, model years listed 1956 to 1975. No highest recorded sale on the page."
  },
  {
   "ref": "classic-t34",
   "title": "Volkswagen Karmann Ghia Type 34 Market, classic.com",
   "url": "https://www.classic.com/m/volkswagen/karmann-ghia/type-34/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "Context only. Type 34 on the Type 3 platform, never officially imported to the US, model years 1961 to 1969, average sale $38,429, lowest recorded sale $23,050 on August 18, 2022, none listed for sale as of September 2026."
  },
  {
   "ref": "hagerty-guide",
   "title": "Buyer's Guide: Volkswagen Karmann Ghia 1955-1974",
   "url": "https://www.hagerty.co.uk/articles/buying-guide-volkswagen-karmann-ghia-1955-1974/",
   "publisher": "Hagerty",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "UK edition, used for condition and production only, never for price. Heater channels and sills, parts availability, bottom pulley play, worn selector rod nylon block, convertible a strict two-seater. Its production figures were not used."
  },
  {
   "ref": "vw-newsroom-cab",
   "title": "Karmann Ghia Typ 14 Cabriolet (1957-1974)",
   "url": "https://volkswagen-newsroom.com/en/karmann-ghia-typ-14-cabriolet-19571974-19633",
   "publisher": "Volkswagen Newsroom",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Convertible launched 1957 two years after the coupe, built at Osnabrueck until 1974, soft top closes almost flush with the body line, convertible about ten kilograms heavier than the coupe, 1,500 cc in 1966, semi-automatic in 1967, glass rear window 1969, padded dashboard 1970. Home-market page: no US pricing or export data."
  },
  {
   "ref": "mam-timeline",
   "title": "Happy Anniversary: The Evolution of the Karmann Ghia",
   "url": "https://www.mamotorworks.com/vw/knowledgelibrary/general/Happy-Anniversary-The-Evolution-of-the-Karmann-Ghia",
   "publisher": "MA Motorworks",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "US VW parts vendor timeline: US availability 1956 and 0-60 mph 34.2 seconds, convertible production August 1957, 1960 40 hp 1,200 cc, 1965 1,300 cc, 1970 1,600 cc, plumber's delight overrider tubes on US cars, 445,238 built in Germany and 41,600 in Brazil, last production June 21 and final coupe price $3,475."
  },
  {
   "ref": "mam-year-changes",
   "title": "VW Ghia Year Changes (PDF)",
   "url": "https://mamotorworks.com/production/website/vw/newsletterarchive/VWGhiaYearChanges.pdf",
   "publisher": "MA Motorworks",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Companion newsletter listing by year: US introduction 1956, front disc brakes 1966, convertible glass rear window 1968, blade bumpers 1956-1971 and Europa-style bumpers 1972-1974, 54 hp 1971-1974 engines, US exports until June 21, 1974. Same publisher as the timeline, so not an independent check."
  },
  {
   "ref": "zwischengas-1962",
   "title": "50 years ago in America - cars for sale",
   "url": "https://www.zwischengas.com/en/blog/2012/08/05/Vor-50-Jahren-in-Amerika-Autos-zu-verkaufen.html",
   "publisher": "Zwischengas",
   "sourceType": "journalism",
   "reliability": "low",
   "notes": "2012 retrospective of US car ads from 50 years earlier. States a new VW Karmann Ghia cost USD 2,295. The sentence itself does not give the year; 1962 is inferred from the article's framing."
  },
  {
   "ref": "scm-1964",
   "title": "1964 Volkswagen Karmann-Ghia, Sports Car Market review",
   "url": "https://www.sportscarmarket.com/?p=1310",
   "publisher": "Sports Car Market",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "2003 Christie's Retromobile result: 1964 coupe, 1,900 miles, sold for $8,247 including buyer's premium on February 8, 2003, estimate $16,000 to $20,000; reviewer says a convertible would have more appeal and K-Gs are prone to rust. A dated data point, not a current value."
  },
  {
   "ref": "hagerty-lot-1974",
   "title": "1974 Volkswagen Karmann Ghia, Hagerty Marketplace auction",
   "url": "https://www.hagerty.com/marketplace/auction/1974-volkswagen-karmann-ghia/0674c90d-d146-4f5b-bcdb-4c46346d8dfa",
   "publisher": "Hagerty Marketplace",
   "sourceType": "auction-house",
   "reliability": "medium",
   "notes": "Individual lot page. 1974 coupe, 63,750 miles TMU, sold for $7,750 on June 15, 2026 after 9 bids; front disc brakes, pop-out rear quarter windows, rear seat deleted for federal belt rules per the seller's description; bubbling paint on the left front fender. Seller description, not independent."
  },
  {
   "ref": "heritage-kg",
   "title": "Karmann Ghia buying guide, Heritage Parts Centre",
   "url": "https://blog.heritagepartscentre.com/blog/?p=8166",
   "publisher": "Heritage Parts Centre",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "UK parts supplier, used for condition only, never for cost. Rust locations, availability of repair sections including the nose cone, harder-to-find early lowlight parts, convertible floorpans, warning against thick filler, 1,500 cc car with front discs."
  }
 ],
 "claims": [
  {
   "section": "production",
   "claimText": "Sources are unclear on whether the Type 34 is inside the German production total: Wikipedia's text excludes the Type 34 but its table labels the coupe line as including it, and MA Motorworks gives 445,238 built in Germany plus 41,600 in Brazil.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["wikipedia-kg", "mam-timeline"],
   "conflictNote": "Wikipedia states more than 445,000 built in Germany excluding the Type 34, but its table lists the coupe as 364,401 (Type 14 and 34) plus 80,837 convertibles, which sum to 445,238. MA Motorworks gives 445,238 for Germany and 41,600 for Brazil. Not resolved by any source consulted here.",
   "evidence": [
    { "ref": "wikipedia-kg", "quote": "More than 445,000 Karmann Ghias were produced in Germany over the car's production life, not including the Type 34 variant." },
    { "ref": "mam-timeline", "quote": "445,238 produced in Germany and 41,600 produced in Brazil between 1962 and 1975." }
   ]
  },
  {
   "section": "production",
   "claimText": "Production ended in 1974: Wikipedia says the car was superseded by the Golf-based Scirocco in late 1974 and MA Motorworks records production halting on June 21 with a final coupe price of $3,475, while classic.com lists model years 1956 to 1975.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["wikipedia-kg", "mam-timeline", "classic-kg"],
   "conflictNote": "Wikipedia and MA Motorworks put the end of the car in 1974, with the last US-bound cars on June 21, 1974. classic.com lists the model years as 1956 to 1975. Whether a 1975 model-year Karmann Ghia was sold in the US is not resolved by any source consulted here.",
   "evidence": [
    { "ref": "wikipedia-kg", "quote": "In late 1974, the car was superseded by the Golf-based Scirocco." },
    { "ref": "mam-timeline", "quote": "June 21 – Karmann-Ghia production halts. Coupe's price: $3,475." },
    { "ref": "classic-kg", "quote": "The Volkswagen Karmann Ghia was produced for model years 1956 to 1975." }
   ]
  },
  {
   "section": "history",
   "claimText": "Karmann Ghias reached US buyers from 1956, and a US parts-vendor timeline records the first cars at 34.2 seconds from 0 to 60 mph.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["mam-timeline", "mam-year-changes"],
   "evidence": [
    { "ref": "mam-timeline", "quote": "Karmann Ghias are made available in the U.S. Zero-60 time is 34.2 seconds." },
    { "ref": "mam-year-changes", "quote": "Karmann Ghias are made available in the U.S. Zero-60 time is 34.2 seconds." }
   ]
  },
  {
   "section": "history",
   "claimText": "Wikipedia says production doubled soon after US introduction and that the Karmann Ghia became the car most imported into the US; no import count accompanies the statement.",
   "confidence": "low",
   "status": "unverified",
   "sourceRefs": ["wikipedia-kg"],
   "evidence": [
    { "ref": "wikipedia-kg", "quote": "Production doubled soon after the Karmann Ghia's U.S. introduction, becoming the car most imported into the U.S." }
   ]
  },
  {
   "section": "specs",
   "claimText": "The Type 34 Razor Edge sat on the Type 3 platform, was known in German as the big Karmann, and was not officially offered in the US, which VW treated as its largest and most important export market.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["classic-t34", "wikipedia-kg"],
   "evidence": [
    { "ref": "classic-t34", "quote": "Based on the new Type 3 platform, the Type 34 was known as Der Große Karmann, meaning 'the big Karmann' in German." },
    { "ref": "wikipedia-kg", "quote": "Although the Type 34 was available in most countries, it was not offered officially in the U.S. – VW's largest and most important export market." }
   ]
  },
  {
   "section": "specs",
   "claimText": "In August 1960 the Ghia received a new 40 hp 1,200 cc engine with a fully synchronized four-speed transmission, an automatic electric choke carburetor and a flatter gas tank that increased trunk room.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["mam-timeline"],
   "evidence": [
    { "ref": "mam-timeline", "quote": "August – Ghia welcomes a new 40-hp 1200cc engine with fully synchronized four-speed transmission, new carburetor with automatic electric choke and a flatter gas tank that increases trunk room." }
   ]
  },
  {
   "section": "specs",
   "claimText": "A larger 1,300 cc engine with a Solex 30 PICT carburetor arrived in August 1965 and improved acceleration.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["mam-timeline"],
   "evidence": [
    { "ref": "mam-timeline", "quote": "August – Larger 1300cc engine with Solex 30 PICT carburetor improves acceleration" }
   ]
  },
  {
   "section": "specs",
   "claimText": "A 1,600 cc dual-port engine with a Solex 34 PICT-3 carburetor arrived in August 1970.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["mam-timeline"],
   "evidence": [
    { "ref": "mam-timeline", "quote": "August – 1600cc dual-port engine with Solex 34 PICT-3 carburetor." }
   ]
  },
  {
   "section": "specs",
   "claimText": "US-bound Ghias received plumber's delight bumper overrider tubes.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["mam-timeline"],
   "evidence": [
    { "ref": "mam-timeline", "quote": "All U.S.-bound Ghias get plumber's delight bumper overrider tubes." }
   ]
  },
  {
   "section": "specs",
   "claimText": "The convertible's soft top was designed to close almost completely with the body line, according to Volkswagen's own newsroom.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["vw-newsroom-cab"],
   "evidence": [
    { "ref": "vw-newsroom-cab", "quote": "closes almost completely with the body line, giving the Type 14 an extremely elegant appearance" }
   ]
  },
  {
   "section": "specs",
   "claimText": "A US advertisement reproduced by Zwischengas lists a new VW Karmann Ghia at $2,295; the article's framing places it at 1962, a single low-reliability source.",
   "confidence": "low",
   "status": "unverified",
   "sourceRefs": ["zwischengas-1962"],
   "evidence": [
    { "ref": "zwischengas-1962", "quote": "a new VW Karmann Ghia cost USD 2,295" }
   ]
  },
  {
   "section": "market",
   "claimText": "As of September 2026 classic.com's average price for a Volkswagen Karmann Ghia is $29,668, with a market benchmark of $46,000 and 25 cars currently for sale.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["classic-kg"],
   "evidence": [
    { "ref": "classic-kg", "quote": "The average price of a Volkswagen Karmann Ghia is $29,668." }
   ]
  },
  {
   "section": "market",
   "claimText": "classic.com's lowest recorded Karmann Ghia sale is $3,000 for a 1968 convertible on July 21, 2025, as of September 2026.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["classic-kg"],
   "evidence": [
    { "ref": "classic-kg", "quote": "$3,000 for a 1968 Volkswagen Karmann Ghia Convertible on July 21, 2025" }
   ]
  },
  {
   "section": "market",
   "claimText": "A 1974 US-market coupe with 63,750 miles sold on Hagerty's marketplace on June 15, 2026 for $7,750; the listing describes front disc brakes, pop-out rear quarter windows and a trailer hitch.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["hagerty-lot-1974"],
   "evidence": [
    { "ref": "hagerty-lot-1974", "quote": "front disc brakes, pop-out rear quarter windows, and a trailer hitch" }
   ]
  },
  {
   "section": "market",
   "claimText": "A 1964 coupe with 1,900 miles sold for $8,247 including buyer's premium at Christie's Retromobile in Paris on February 8, 2003, about half its low estimate; this is a 2003 data point.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["scm-1964"],
   "evidence": [
    { "ref": "scm-1964", "quote": "this very nice K-G was worth about half its low estimate" }
   ]
  },
  {
   "section": "market",
   "claimText": "As of September 2026 the Type 34 Razor Edge averages $38,429 on classic.com with a lowest recorded sale of $23,050 on August 18, 2022.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["classic-t34"],
   "evidence": [
    { "ref": "classic-t34", "quote": "$23,050 for a 1964 VOLKSWAGEN Karmann Ghia Type 34 'Razor Edge' on August 18, 2022" }
   ]
  },
  {
   "section": "problems",
   "claimText": "Rust is the main problem: a UK parts supplier calls it the biggest killer of the cars and Hagerty says the heater channels can rust unseen and that the sills are vital to structural integrity, especially on the convertible.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["heritage-kg", "hagerty-guide"],
   "evidence": [
    { "ref": "heritage-kg", "quote": "Rust will be the biggest KG killer. The dreaded tin worm seems particularly partial to the Karmann's metalwork." },
    { "ref": "hagerty-guide", "quote": "The heater channels can rust unseen, while the sills are vital to the car's structural integrity, especially on the cabriolet." }
   ]
  },
  {
   "section": "problems",
   "claimText": "Convertible floorpans are likely to be rustier than coupe floorpans because the top or its rubbers have probably let in water.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["heritage-kg"],
   "evidence": [
    { "ref": "heritage-kg", "quote": "floorpans on convertibles are likely to be more rusty, simply because the hood or hood rubbers have probably let in water" }
   ]
  },
  {
   "section": "problems",
   "claimText": "Body repair sections are available, including the nose cone, though parts for the earliest cars are harder to find; Hagerty says almost all parts are available to keep a Karmann Ghia running.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["heritage-kg", "hagerty-guide"],
   "evidence": [
    { "ref": "heritage-kg", "quote": "stock a variety of Karmann Ghia body repair sections, including part of that difficult to shape properly nose cone" },
    { "ref": "hagerty-guide", "quote": "With plenty around and almost all parts available to keep a Karmann Ghia running and driving, it's a popular, stylish, and eminently usable entrée to the world of classic cars." }
   ]
  },
  {
   "section": "problems",
   "claimText": "Hagerty says a notchy or stiff gear shift is likely a worn nylon block in the selector rod, and play in the engine's bottom pulley points toward an imminent engine rebuild.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["hagerty-guide"],
   "evidence": [
    { "ref": "hagerty-guide", "quote": "A notchy or stiff gear shift is likely down to the nylon block in the selector rod being worn and needing replacement" }
   ]
  }
 ]
};
