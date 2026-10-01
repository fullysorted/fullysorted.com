/**
 * Researched model draft - Lamborghini Diablo (1990-2001), US market perspective.
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedDiablo = {
 "slug": "lamborghini/diablo",
 "make": "Lamborghini",
 "model": "Diablo",
 "generation": "Diablo, 1990-2001",
 "generationCode": null,
 "trim": null,
 "yearStart": 1990,
 "yearEnd": 2001,
 "bodyStyles": [
  "2-door mid-engine coupe (fixed roof, scissor doors)",
  "2-door mid-engine Roadster (removable roof panel, VT Roadster and SV Roadster)"
 ],
 "engines": [
  "5.7-liter V12, naturally aspirated, 485 hp at launch (1990 base car, rear-wheel drive); exact displacement in cc is not stated by the sources consulted",
  "5.7-liter V12 in SE30 tune, 518 hp (rear-wheel drive, 1993-1996 per classic.com)",
  "5.7-liter V12 in SV tune, 503 hp (rear-wheel drive, 1995-1999 per classic.com)",
  "6.0-liter V12 in VT 6.0 tune, 542 hp (four-wheel drive, 1999-2001); 543 hp in The Drive's figure",
  "6.0-liter V12 in GT tune, 575 hp (rear-wheel drive, 1999-2001, 83 built)"
 ],
 "productionTotal": null,
 "productionNotes": "Lamborghini's own Diablo history page states that when production ended in 2001 no fewer than 2,903 units had been produced. The Drive says only that fewer than 3,000 were built. Wikipedia carries a per-variant list that is approximate: about 900 base cars, about 400 VT, 150 SE30 of which 25 were for the US, about 250 SV, about 200 VT Roadster, 2 SV Roadster, 83 GT, 343 VT 6.0 plus 42 VT 6.0 SE, and 40 GTR. Those lines add up to roughly 2,410, about 490 short of the factory total, and the list does not show where the gap sits (the 6.0 Roadster, the SV and VT variants listed as approximate, and any variants left out are all candidates). Because the factory total and the variant list are not reconciled by any source consulted here, no single total is printed. The GT figure of 83 is the firmest per-variant number: classic.com and Wikipedia agree on it. The SE30 US allocation of 25 cars is also stated twice, by Wikipedia and by a long-running FerrariChat production thread, though the forum is a low-reliability source and is cited only for that single line. A FerrariChat user also puts about 15 rear-wheel-drive 1996 cars in the US market, which no second source confirms and which is not used in the prose. No source consulted gives a US-delivered count for the base car, VT, Roadster, 6.0 or GT, and none gives a US count by model year. Apart from the Momo Edition VT Roadster, the sources are silent on whether the Roadster, GT and 6.0 were sold as new US-market cars; classic.com lists US auction sales of GT and Diablo SV Monterey Edition cars, which shows they are in the US now and not how they got there. The page says so rather than inferring it.",
 "notableTrims": [
  {
   "name": "Diablo (base, 1990-1998)",
   "note": "The original rear-wheel-drive car with the 485 hp V12 and a US base price of $239,000 for 1990 per supercars.net. classic.com's base-model market runs 1990 through 1998 and, as of September 2026, is the cheapest way into the nameplate."
  },
  {
   "name": "Diablo VT (1993-2001)",
   "note": "The four-wheel-drive car, the version most buyers actually got. The VT carried through to the 6.0 of 2000 and 2001, which Lamborghini and The Drive treat as the best-developed Diablo."
  },
  {
   "name": "Diablo SE30 (1993-1996)",
   "note": "150 built, 25 for the US, 518 hp. The US allocation is the number a collector repeats, and classic.com's SE30 benchmark of $406,000 as of September 2026 reflects it."
  },
  {
   "name": "Diablo SV (1995-1999)",
   "note": "Rear-wheel drive, 503 hp, the only Diablo with the SV flank decal as a factory option. A 1998 SV Monterey Edition sold for $527,500 in August 2025 per classic.com."
  },
  {
   "name": "Diablo GT (1999-2001)",
   "note": "83 built, 575 hp 6.0-liter, carbon fiber bodywork, a stripped car aimed at track use. It is the one Diablo that trades like a different kind of car."
  },
  {
   "name": "US-only special editions (Monterey, Alpine, Momo)",
   "note": "Wikipedia lists a 20-car SV Monterey Edition (1998), a 12-car VT Alpine Edition (1999) and a 12-car VT Roadster Momo Edition, all produced exclusively for the US market. Single-source and tiny in volume, but they are the clearest documented US-specific Diablos, and the Momo Edition is the only US-market Roadster the sources name."
  }
 ],
 "specs": {
  "layout": "Mid-engine, rear-wheel drive on base, SE30, SV and GT; four-wheel drive on VT",
  "chassis": "Steel tubular space frame with composite and aluminum body panels, per general references; not independently sourced for this page",
  "engine": "5.7-liter V12 from 1990, 6.0-liter V12 from 1999; exact displacement in cc not given by the sources consulted",
  "power": "485 hp (1990 base), 518 hp (SE30), 503 hp (SV), 542 hp (VT 6.0), 575 hp (GT)",
  "torque": "Not documented in the sources consulted",
  "transmission": "Five-speed manual on the early cars; classic.com lists the 2000 VT 6.0 with a manual and left-hand drive",
  "weight": "Not documented in the sources consulted",
  "acceleration": "Period tests range from 4.4 to 5.9 seconds to 60 mph on the VT and 3.4 to 4.3 seconds on the 2001 VT 6.0 depending on the magazine",
  "quarter_mile": "13.2 seconds at 109.6 mph (1992 VT, Motor Trend) to 11.8 seconds at 120.9 mph (2001 VT 6.0, Motor Trend)",
  "top_speed": "203 mph claimed at launch per The Drive",
  "us_price_1990": "$239,000 base US price per supercars.net",
  "us_price_1992": "$272,935 per The Drive, stated as the launch price of the 1992 model",
  "us_variants": "SE30 (25 US cars) and US-only Monterey (SV, 20 cars), Alpine (VT, 12 cars) and Momo (VT Roadster, 12 cars) editions per Wikipedia; other Roadster, GT and 6.0 US-market delivery not documented",
  "gt_production": "83 built per classic.com and Wikipedia",
  "factory_total": "No fewer than 2,903 per Lamborghini's own history page"
 },
 "summary": "The Diablo was Lamborghini's flagship from 1990 to 2001, built to replace the Countach. Its design began as Project 132 in 1985 with styling by Marcello Gandini that Chrysler's design center, by then the majority shareholder, revised. It launched with a 485 hp V12 and a claimed top speed of 203 mph, and a US base price of $239,000 for 1990 per supercars.net. Lamborghini's own history page puts the run at no fewer than 2,903 cars, while Wikipedia's per-variant list adds up to roughly 2,410, and the two are not reconciled here. The line grew into the four-wheel-drive VT, the 150-car SE30 (25 for the US), the SV, the Roadster, the 83-car GT and the 6.0-liter VT of 2000 and 2001. The sources document US-market editions of the SE30, SV, VT and VT Roadster but do not say which other Roadsters, GT and 6.0 cars were delivered new in the US. As of September 2026 classic.com puts the base car near $258,772 to $318,616 depending on the page, the SV at $462,063 and the GT in the millions.",
 "history": "## Why the Diablo exists\n\nThe Countach was the poster car and the Diablo was the job of replacing it. The Drive describes the Diablo as intended to replace the Countach as the flagship. The design began as Project 132 in 1985, with styling by Marcello Gandini, and the problem was money rather than ideas. Lamborghini needed an owner that could fund the work. When Chrysler Corporation bought the company in 1987 it funded the car's development, and The Drive records that Gandini's shape was revised by Chrysler's design center, which had become the majority shareholder. The Diablo that went on sale in 1990 was therefore a Gandini car finished by Detroit, a detail that rarely makes it into a spec sheet.\n\n## What launched\n\nThe 1990 car was rear-wheel drive with a 5.7-liter V12 rated at 485 hp and a claimed top speed of 203 mph, the fastest production car in the world at the time according to Lamborghini's own history. The US base price for 1990 was $239,000 per supercars.net, and The Drive gives $272,935 for the 1992 model, so the price rose by more than $33,000 in two years. The sources consulted do not give a US price for any later model year.\n\n## The variants, and what reached the US\n\nThe line split quickly. The VT added four-wheel drive and carried on to the end. The SE30 of 1993 to 1996 was a 518 hp, 150-car anniversary special, of which only 25 were for the US market, so roughly one in six. The SV of 1995 to 1999 was the rear-wheel-drive car at 503 hp. Wikipedia also lists a Roadster (about 200 VT Roadsters and 2 SV Roadsters), a 6.0-liter VT 6.0 and VT 6.0 SE for the final model years, a 40-car GTR, and four US-only runs: a 20-car SV Monterey Edition made for the US in 1998, a 12-car VT Alpine Edition for the US in 1999 and a 12-car VT Roadster Momo Edition, also US-only. Beyond the Momo Edition, the US-market delivery status of the Roadster, GT and 6.0 is not documented in the sources consulted. classic.com records US auction sales of the SV Monterey Edition and the GT, which shows the cars are in the US today and says nothing about how they arrived.\n\n## Chrysler to Audi\n\nChrysler's ownership ran from 1987 until the sale to Audi. The sources disagree on the date: The Drive says Audi took over the company in 1999, while Wikipedia dates the acquisition to 1998. The Audi era produced the cars everyone points to: the 6.0-liter VT of 2000 and 2001, which The Drive describes as significantly more refined than the early cars at 543 hp, and the GT of 1999, first shown at the Geneva Motor Show that year and described by classic.com as the best of the Diablo as it neared the end of production.\n\n## The end of the run\n\nProduction ended in 2001 with the 2001 model year, and the Murcielago, the first Lamborghini designed under Audi, replaced it. By then 2,903 cars had been built per the factory, though Wikipedia's variant counts do not reach that total. The detail a reader can repeat at a car show is the SE30: 25 of the 150 reached the United States, and a few dozen special editions made for the US market sit on top of that, which is why US buyers meet unusual Diablos more often than the production totals suggest.",
 "marketNotes": "As of September 2026 classic.com shows a spread of Diablo values that depends on the page and the variant. Its base-model page (1990 to 1998) gives a market benchmark of $318,616 and an average sale of $283,778, with the lowest recorded sale at $160,000 for a 1992 car on August 27, 2023; the main Diablo page lists the same base-model benchmark at $258,772, so the two pages are different snapshots and should not be mixed. The SE30 benchmark is $406,000. The SV benchmark is $462,063 for the first generation (1995 to 1998) and $582,460 for 1999, with an average of $493,175 and the lowest recorded sale at $353,000 for a 1998 SV on March 29, 2025. A 1998 SV Monterey Edition sold for $527,500 on August 16, 2025, and a 2001 VT 6.0 coupe sold for $600,000 on September 17, 2025. The GT is in a different market: classic.com's benchmark for it is $1,886,808 on the GT page and $1,235,664 on the main Diablo page, with recorded sales at $2,600,000 for a 2000 car in Lynnwood, Washington in July 2026 and $2,425,000 for a 2000 car in Monterey, California in August 2026, and a $1,435,000 sale in August 2025. The 2000 VT 6.0 benchmark is $560,411, but the four recorded sales on that page are European (a UK sale in pounds and a German sale in euros), so they are not US comparables. Auction lots are quoted as listed, and buyer's premium treatment varies by house.",
 "whatToLookFor": "The checks below come from owner-side sources and are single-source in places. The clutch is the first one: a FerrariChat contributor notes that clutch wear is an engine-out service and therefore expensive, while a broken clutch rod disables the car but the part itself is cheap and easy to replace, so a car whose clutch history is unknown is worth pricing as if the clutch is due. Brakes are the next: early cars have braking that is inadequate for the engine, and the same source says even the 1994-and-later brakes are marginal for a driver who uses the car hard. The front shocks on cars with the nose-lift system are described as a weak link and expensive to replace, so a lifted nose that does not rise or sag overnight is worth checking. Cosmetic wear is predictable: outside door handles crack from sun exposure, and Lamborghini leather wears poorly, so scuffed bolsters are common and a car with unworn seats is either low mileage or retrimmed. The same contributor recommends a pre-purchase inspection at a Lamborghini-experienced facility and asks for an LDAS diagnostic report from the ECU to see the maintenance history and signs of abuse. Beyond the mechanicals, the variant matters more than on most cars: a car sold as an SE30, a US-only edition or a GT should be matched to its documented production count and to its specification, since the market pays very different prices for each, as the figures in the market notes show. A US-market car versus an imported one is also worth establishing from the paperwork, because the sources consulted do not list which VT, Roadster or 6.0 cars were delivered new in the US.",
 "commonProblems": "The only fault-pattern source retrieved for this page is a FerrariChat owner thread, so everything here is forum-reliability and no dollar costs are documented. The clutch is the principal wear item: the contributor says it is an engine-out service and not cheap, and that a clutch rod can break and disable the car though the part is inexpensive. Braking is the second: the early cars are underbraked for their power and the contributor calls even the 1994-and-later brakes marginal for track or aggressive road use. The front shocks on nose-lift cars are expensive to replace. Smaller items are easy and cheap: steering wheel horn switches fail, brake light switches fail, outside door handles crack in the sun, and leather bolsters scuff. A federal recall lookup was attempted for this page and returned an error, so no NHTSA campaign numbers or counts are stated; a reader checking a specific VIN should run it through NHTSA directly. A US dollar figure for a typical annual service or a clutch job is not documented in any source retrieved here, and the page does not estimate one.",
 "valueTrajectory": "A 1990 Diablo listed at $239,000 in the US, and a 1992 car at $272,935 per The Drive. As of September 2026 classic.com's base-model benchmark of $258,772 to $318,616 puts a base car at roughly the same dollars it cost new, before adjusting for inflation, and the lowest recorded base sale of $160,000 in August 2023 marks the floor that page records. The SE30 at $406,000 and the SV at $462,063 sit above the base car, reflecting their lower counts, and the late 6.0-liter cars trade higher again, with the 2001 VT 6.0 at $600,000 in September 2025. The GT is the outlier: 83 were built and classic.com's recorded sales of $2,600,000 and $2,425,000 in mid-2026 are about ten times the price of a base car. The pattern is that the nameplate has split into tiers by specification and production count rather than rising as a whole, and the 6.0-liter and GT cars gained most. The sources consulted give no data on how these values moved between 2023 and 2026 beyond the dated sales above, so no trend rate is stated.",
 "overallConfidence": "medium",
 "sources": [
  {
   "ref": "lamborghini-history",
   "title": "Lamborghini Diablo",
   "url": "https://www.lamborghini.com/en-en/history/diablo",
   "publisher": "Automobili Lamborghini",
   "sourceType": "manufacturer",
   "reliability": "high",
   "notes": "Factory history page: no fewer than 2,903 units produced by 2001, 5.7-liter V12 at launch, 6-liter GT at maximum output, fastest car in the world at its debut, lists Berlinetta, VT four-wheel drive, Roadster, GT and competition versions. No per-variant counts and no US detail."
  },
  {
   "ref": "wikipedia-diablo",
   "title": "Lamborghini Diablo",
   "url": "https://en.wikipedia.org/wiki/Lamborghini_Diablo",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Pointer only. Per-variant production list (about 900, about 400, 150 SE30 with 25 for the US, about 250 SV, about 200 VT Roadster, 2 SV Roadster, 83 GT, 343 VT 6.0 and 42 VT 6.0 SE, 40 GTR), US-only Monterey, Alpine and Momo editions, power figures, Chrysler 1987 and Audi 1998 dates."
  },
  {
   "ref": "thedrive-30",
   "title": "Time Flies at 203 MPH: The Lamborghini Diablo Turns 30 Years Old",
   "url": "https://www.thedrive.com/news/38006/time-flies-at-203-mph-the-lamborghini-diablo-turns-30-years-old",
   "publisher": "The Drive",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Purpose (replace the Countach), Project 132 from 1985, Gandini styling revised by Chrysler, 203 mph, 485 hp, 1992 launch price $272,935, Audi taking over in 1999, 2001 VT 6.0 at 543 hp, fewer than 3,000 built."
  },
  {
   "ref": "supercars-1990",
   "title": "1990 Lamborghini Diablo",
   "url": "https://www.supercars.net/blog/1990-lamborghini-diablo-2/",
   "publisher": "supercars.net",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "1990 model: 492 metric horsepower and a base US price of $239,000. Used only for that price and output. No variant or production data."
  },
  {
   "ref": "zero60-diablo",
   "title": "Diablo 0-60 times",
   "url": "https://www.0-60specs.com/lamborghini/diablo-0-60-times",
   "publisher": "0-60specs.com",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Aggregates magazine tests: 1991 Car and Driver Euro-spec 4.4 seconds, 1992 Motor Trend VT 4.4, 1993 MotorWeek VT 5.4, 1994 Car and Driver VT 5.9, 2001 VT 6.0 Motor Trend 3.4 and Car and Driver 4.3, with quarter-mile times. The aggregator, not the magazines directly, is the retrieved source."
  },
  {
   "ref": "ferrarichat-production",
   "title": "Diablo 2wd production #'s?",
   "url": "https://www.ferrarichat.com/forum/threads/diablo-2wd-production-s.157463",
   "publisher": "FerrariChat",
   "sourceType": "club-forum",
   "reliability": "low",
   "notes": "Forum thread. States the SE30 was 25 cars for the US market and about 15 rear-wheel-drive 1996 cars for the US; gives no totals. Used only to corroborate the SE30 US allocation."
  },
  {
   "ref": "ferrarichat-problems",
   "title": "What is the most common things to go wrong on a Diablo?",
   "url": "https://www.ferrarichat.com/forum/threads/what-is-the-most-common-things-to-go-wrong-on-a-diablo.98153",
   "publisher": "FerrariChat",
   "sourceType": "club-forum",
   "reliability": "low",
   "notes": "Owner thread: clutch is an engine-out service, clutch rod breakage, marginal brakes even from 1994, weak front shocks on nose-lift cars, cracked door handles, leather wear, advice to get an LDAS ECU report. No dollar costs."
  },
  {
   "ref": "classic-base",
   "title": "Lamborghini Diablo - Base Model Market Summary",
   "url": "https://www.classic.com/m/lamborghini/diablo/base-model",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of September 2026: benchmark $318,616, average $283,778, lowest recorded sale $160,000 for a 1992 car on August 27, 2023, production 1990 to 1998, succeeded by the SV as the entry car."
  },
  {
   "ref": "classic-gt",
   "title": "Lamborghini Diablo GT Market Summary",
   "url": "https://www.classic.com/m/lamborghini/diablo/gt",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of September 2026: benchmark $1,886,808, recorded sales $2,600,000 (July 2026, Lynnwood, Washington) and $2,425,000 (August 2026, Monterey, California), 83 built, introduced at Geneva in 1999 with 575 hp."
  },
  {
   "ref": "classic-sv",
   "title": "Lamborghini Diablo SV Market Data",
   "url": "https://www.classic.com/m/lamborghini/diablo/sv",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of September 2026: SV 1995 to 1999, first generation benchmark $462,063, second generation (1999 only) $582,460, average $493,175, lowest recorded sale $353,000 for a 1998 car on March 29, 2025, the only Diablo with the SV flank decal as a factory option."
  },
  {
   "ref": "classic-overall",
   "title": "Lamborghini Diablo Market Analysis",
   "url": "https://www.classic.com/m/lamborghini/diablo/",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of September 2026: base benchmark $258,772, SE30 $406,000, GT $1,235,664, a 2000 GT at $1,435,000 (August 16, 2025), a 1998 SV Monterey Edition at $527,500 (August 16, 2025), a 2001 VT 6.0 at $600,000 (September 17, 2025)."
  },
  {
   "ref": "classic-vt-2000",
   "title": "2000 Lamborghini Diablo VT Market Summary",
   "url": "https://classic.com/m/lamborghini/diablo/vt/year-2000",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "As of September 2026: VT 6.0 benchmark $560,411 across four 2000 cars, all manual and left-hand drive; recorded sales are a UK sale in pounds and a German sale in euros, so no US comparable is drawn from this page."
  }
 ],
 "claims": [
  {
   "section": "production",
   "claimText": "Lamborghini's own Diablo history page states that when the car went out of production in 2001 no fewer than 2,903 units had been produced.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["lamborghini-history"],
   "evidence": [
    { "ref": "lamborghini-history", "quote": "when it went out of production in 2001, no fewer than 2,903 units had been produced." }
   ]
  },
  {
   "section": "production",
   "claimText": "The factory total of 2,903 cars and the per-variant list on Wikipedia, which adds up to roughly 2,410, are not reconciled by any source consulted.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["lamborghini-history", "wikipedia-diablo"],
   "conflictNote": "Lamborghini states no fewer than 2,903 units. Wikipedia's variant list (about 900, about 400, 150, about 250, about 200, 2, 83, 343, 42 and 40) sums to roughly 2,410. The variant list may be incomplete or approximate; this is not resolved by any source consulted here.",
   "evidence": [
    { "ref": "lamborghini-history", "quote": "no fewer than 2,903 units had been produced." },
    { "ref": "wikipedia-diablo", "quote": "150 built (25 for US market)" }
   ]
  },
  {
   "section": "production",
   "claimText": "Of the 150 SE30 cars built, 25 were for the US market.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["wikipedia-diablo", "ferrarichat-production"],
   "evidence": [
    { "ref": "wikipedia-diablo", "quote": "150 built (25 for US market)" },
    { "ref": "ferrarichat-production", "quote": "25 cars for the US market." }
   ]
  },
  {
   "section": "production",
   "claimText": "Wikipedia lists US-only special editions: a 20-car SV Monterey Edition in 1998, a 12-car VT Alpine Edition in 1999 and a 12-car VT Roadster Momo Edition, all produced exclusively for the United States market.",
   "confidence": "medium",
   "status": "unverified",
   "sourceRefs": ["wikipedia-diablo"],
   "evidence": [
    { "ref": "wikipedia-diablo", "quote": "A special run of twelve Diablo VT models was produced exclusively for the United States market in 1999 and called the Alpine Edition." }
   ]
  },
  {
   "section": "production",
   "claimText": "Eighty-three Diablo GTs were built, and the GT was first shown at the 1999 Geneva Motor Show with deliveries beginning at the end of that year with a 575 hp 6.0-liter V12.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["classic-gt"],
   "evidence": [
    { "ref": "classic-gt", "quote": "The Lamborghini Diablo GT was first introduced to the world at the 1999 Geneva Motor Show, with deliveries beginning at the end of that year." }
   ]
  },
  {
   "section": "history",
   "claimText": "The Diablo was intended to replace the Countach as the Lamborghini flagship, began as Project 132 in 1985 with Marcello Gandini styling, and was revised by Chrysler's design center after Chrysler became the majority shareholder.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["thedrive-30"],
   "evidence": [
    { "ref": "thedrive-30", "quote": "revised by Chrysler's design center, which had become the majority shareholder" }
   ]
  },
  {
   "section": "history",
   "claimText": "Chrysler Corporation bought Lamborghini in 1987 and funded the completion of the Diablo's development.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["wikipedia-diablo"],
   "evidence": [
    { "ref": "wikipedia-diablo", "quote": "When Chrysler Corporation bought the company in 1987, funding the company to complete the car's development" }
   ]
  },
  {
   "section": "history",
   "claimText": "Sources disagree on when Audi acquired Lamborghini: The Drive says 1999, Wikipedia says 1998.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["thedrive-30", "wikipedia-diablo"],
   "conflictNote": "The Drive says Audi took over the company in 1999. Wikipedia refers to the acquisition of Lamborghini by Audi in 1998. Not resolved by any source consulted here.",
   "evidence": [
    { "ref": "thedrive-30", "quote": "the influence of Audi, which took over the company in 1999" },
    { "ref": "wikipedia-diablo", "quote": "After the acquisition of Lamborghini by Audi in 1998" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The US base price of the 1990 Diablo was $239,000 per supercars.net, which lists 492 hp for the 1990 model; the page returned 403 to the verifier and is single-source.",
   "confidence": "low",
   "status": "unverified",
   "sourceRefs": ["supercars-1990"],
   "evidence": [
    { "ref": "supercars-1990", "quote": "499 PS (367 kW; 492 hp)" }
   ]
  },
  {
   "section": "specs",
   "claimText": "In Car and Driver's 1992 review as reported by The Drive, the Diablo listed at $272,935 against $471,375 for the Ferrari F40, with 485 hp from a normally aspirated V12.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["thedrive-30"],
   "evidence": [
    { "ref": "thedrive-30", "quote": "The Lamborghini was the bargain at $272,935 versus" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The early Diablo carried a 485 hp V12 per The Drive, the 2001 VT 6.0 is rated 542 hp per Wikipedia (550 metric horsepower) and 543 hp per The Drive and Car and Driver.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["thedrive-30", "wikipedia-diablo"],
   "evidence": [
    { "ref": "thedrive-30", "quote": "the 485-horsepower normally aspirated Lamborghini" },
    { "ref": "wikipedia-diablo", "quote": "550 PS (405 kW; 542 hp)" }
   ]
  },
  {
   "section": "specs",
   "claimText": "The Drive states the Diablo could go 203 mph.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": ["thedrive-30"],
   "evidence": [
    { "ref": "thedrive-30", "quote": "The fun was knowing that you were in a car that could go 203 mph" }
   ]
  },
  {
   "section": "specs",
   "claimText": "Period tests of the 2001 VT 6.0 disagree on 0-60 mph: Motor Trend recorded 3.4 seconds and Car and Driver 4.3 seconds.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["zero60-diablo"],
   "conflictNote": "Motor Trend recorded 3.40 seconds to 60 mph and Car and Driver 4.30 seconds for the 2001 VT 6.0, as reported by 0-60specs.com. Not resolved by any source consulted here; the aggregator, not the magazines, was retrieved.",
   "evidence": [
    { "ref": "zero60-diablo", "quote": "The 2001 Lamborghini Diablo VT 6.0 Coupe has recorded 0-60 mph times of 3.4 and 4.3 seconds across two stock tests." }
   ]
  },
  {
   "section": "specs",
   "claimText": "Early VT tests range from 4.4 seconds (Motor Trend, 1992) to 5.9 seconds (Car and Driver, 1994) to 60 mph.",
   "confidence": "low",
   "status": "unverified",
   "sourceRefs": ["zero60-diablo"],
   "evidence": [
    { "ref": "zero60-diablo", "quote": "including the 1994 VT Coupe at 5.9 seconds to 60 mph" }
   ]
  },
  {
   "section": "market",
   "claimText": "As of September 2026 classic.com's base-model benchmark is $318,616 with an average of $283,778, and the lowest recorded sale is $160,000 for a 1992 car on August 27, 2023.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["classic-base"],
   "evidence": [
    { "ref": "classic-base", "quote": "The base model remained in production until 1998, when it was succeeded by the Diablo SV as the entry-level offering in Lamborghini's lineup." }
   ]
  },
  {
   "section": "market",
   "claimText": "As of September 2026 classic.com's SV benchmark is $462,063 for 1995 to 1998 and $582,460 for 1999, with the lowest recorded sale $353,000 for a 1998 SV on March 29, 2025, and the SV is the only Diablo with the SV flank decal as a factory option.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": ["classic-sv"],
   "evidence": [
    { "ref": "classic-sv", "quote": "the SV is the only Diablo featuring the distinctive and well known \"SV\" decal on the flanks as a factory option" }
   ]
  },
  {
   "section": "market",
   "claimText": "As of September 2026 classic.com lists Diablo GT sales of $2,600,000 in July 2026 and $2,425,000 in August 2026, with a benchmark of $1,886,808 on the GT page and $1,235,664 on the main Diablo page.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": ["classic-gt", "classic-overall"],
   "conflictNote": "classic.com's GT page gives a market benchmark of $1,886,808 and its main Diablo page gives $1,235,664 for the same variant. The two pages are different snapshots and the difference is not resolved by any source consulted here.",
   "evidence": [
    { "ref": "classic-gt", "quote": "a stripped down, more powerful Diablo intended for track use" },
    { "ref": "classic-overall", "quote": "Showing 24 of 346 related listings" }
   ]
  },
  {
   "section": "market",
   "claimText": "The 2000 Diablo VT 6.0 pages on classic.com record four sales that are all European, so the benchmark of $560,411 is not drawn from US comparables.",
   "confidence": "medium",
   "status": "unverified",
   "sourceRefs": ["classic-vt-2000"],
   "evidence": [
    { "ref": "classic-vt-2000", "quote": "All four vehicles feature manual transmissions and left-hand drive steering." }
   ]
  },
  {
   "section": "problems",
   "claimText": "On the Diablo the clutch is an engine-out service and therefore not cheap, and a broken clutch rod can disable the car although the part is inexpensive and easy to replace.",
   "confidence": "low",
   "status": "unverified",
   "sourceRefs": ["ferrarichat-problems"],
   "evidence": [
    { "ref": "ferrarichat-problems", "quote": "clutch use and wear....it is an engine out service; hence, it's not cheap." }
   ]
  },
  {
   "section": "problems",
   "claimText": "Early Diablo brakes are inadequate for the engine's power and even the 1994-and-later brakes are described by one owner as marginal for hard use.",
   "confidence": "low",
   "status": "unverified",
   "sourceRefs": ["ferrarichat-problems"],
   "evidence": [
    { "ref": "ferrarichat-problems", "quote": "Even the 94+ brakes are marginal if you're a track hound or a crazy public road driver." }
   ]
  },
  {
   "section": "problems",
   "claimText": "Front shocks on nose-lift cars are a weak link and expensive to replace, outside door handles crack from sun exposure, and the leather wears poorly.",
   "confidence": "low",
   "status": "unverified",
   "sourceRefs": ["ferrarichat-problems"],
   "evidence": [
    { "ref": "ferrarichat-problems", "quote": "the front shocks are a weak link and expensive to replace." }
   ]
  }
 ]
};
