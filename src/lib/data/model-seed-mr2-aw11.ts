/**
 * Researched model draft - Toyota MR2 AW11 (1985-1989 US model years).
 * Cross-checked across independent sources; seeded as status='draft' for review.
 */
export const seedMr2Aw11 = {
 "slug": "toyota/mr2-aw11",
 "make": "Toyota",
 "model": "MR2",
 "generation": "AW11, US market",
 "generationCode": "AW11",
 "trim": "Base (4A-GE) and Supercharged (4A-GZE), coupe and T-top",
 "yearStart": 1985,
 "yearEnd": 1989,
 "bodyStyles": [
  "2-door 2-seat mid-engined coupe (fixed roof)",
  "2-door 2-seat coupe with removable T-top roof panels (option from the 1987 model year, standard on the supercharged car)"
 ],
 "engines": [
  "1,587 cc 4A-GE inline four, naturally aspirated, 112 hp at 6,600 rpm in US 1985-1987 model year cars, 7,500 rpm redline",
  "1,587 cc 4A-GE inline four, naturally aspirated, rated 115 hp and 100 lb-ft for the US 1988 model year onward",
  "1,587 cc 4A-GZE inline four with belt-driven Roots-type supercharger, intercooler and electromagnetic blower clutch, 145 hp at 6,400 rpm; torque given as 140 lb-ft or 137 lb-ft depending on source; US 1988-1989 model years"
 ],
 "productionTotal": null,
 "productionNotes": "No production total is given on this page, because the sources consulted do not agree and none of them is Toyota. Hagerty UK's buying guide gives a total production run of 166,104 for the first generation, and that page was read for this research. A Japanese-import specialist page, JDM Buy Sell, repeats that figure and reports a second one, 163,845, which it attributes to Autoweek. The Autoweek page did not load, so 163,845 is secondhand; the two figures are carried as a dispute rather than resolved. A Hagerty price-guide article gives a third, looser marker: Toyota had already sold 160,000 MR2s worldwide by the time the Mazda Miata reached showrooms, which is a sales figure at a point in time and not a generation total. For the US the only year-by-year figures found are Curbside Classic's North American sales counts of 37,674 for 1985 and 31,352 for 1986, which include Canada and come from a single source. No source consulted gives North American sales for 1987 through 1989 or a US total for the five model years. For the supercharged car, Curbside Classic estimates that no more than 2,000 were likely sold in the US across its two model years; that is Curbside Classic's estimate, not a count, and no Toyota figure for US supercharged cars was found. Category coverage: no NHTSA recall or EPA fuel economy record for the US MR2 was retrieved (the fueleconomy.gov pages returned by search were for other 1988 Toyotas), so US-market facts rest on period US journalism, a US owner reference (MR2 Wiki) and classic.com. No Car and Driver or Road & Track test was fetched directly, and no Car and Driver verdict is stated here. No US specialist repair-cost figures were found, so no dollar costs appear under problems.",
 "notableTrims": [
  {
   "name": "1985 base coupe (112 hp)",
   "note": "The launch car: $10,999 in base form, 2,350 lb, a fixed roof and the 112 hp 4A-GE. The year Motor Trend named it Import Car of the Year, and the year with the highest North American sales count found, 37,674."
  },
  {
   "name": "1987 T-top",
   "note": "The first year of the optional T-top roof, enlarged brake rotors and, partway through the year, the stronger C-52 manual transmission. The roof is also the source of the seal leaks owners describe."
  },
  {
   "name": "1988-1989 Supercharged (4A-GZE)",
   "note": "The only forced-induction AW11 sold in the US: Roots blower with an electromagnetic clutch and an intercooler, 145 hp, T-tops standard, $16,418 with the 5-speed in 1988 per MotorWeek as reported by Japanese Nostalgic Car. Curbside Classic estimates no more than 2,000 were sold here."
  },
  {
   "name": "1988-1989 naturally aspirated",
   "note": "Rerated at 115 hp and 100 lb-ft, lighter and cheaper than the supercharged car, and the variant classic.com treats as the base manual market at a $12,950 benchmark as of November 2026."
  },
  {
   "name": "1989 final year",
   "note": "LED third brake light in the spoiler, larger brake master cylinder, color-coded door handles and a new head unit. The last US model year, sold until March 1990."
  },
  {
   "name": "Automatic cars",
   "note": "A 4-speed automatic was offered alongside the 5-speed. The Truth About Cars gives 7 seconds to 60 mph for an automatic supercharged car against 6.5 for the manual."
  }
 ],
 "specs": {
  "layout": "Transverse mid-mounted inline four behind the seats, rear-wheel drive, two seats",
  "chassis": "Steel unit-body two-seat coupe; T-top roof optional from the 1987 model year",
  "engine": "1,587 cc 4A-GE inline four (naturally aspirated); 4A-GZE with Roots-type supercharger and intercooler on 1988-1989 US supercharged cars",
  "power": "112 hp at 6,600 rpm (US 1985-1987); 115 hp (US naturally aspirated from 1988); 145 hp at 6,400 rpm (supercharged)",
  "torque": "100 lb-ft (naturally aspirated from 1988, per MR2 Wiki); supercharged given as 140 lb-ft (Hagerty, Curbside Classic, Japanese Nostalgic Car) or 137 lb-ft at 4,400 rpm (Wikipedia, The Truth About Cars)",
  "transmission": "5-speed manual or 4-speed automatic; stronger C-52 manual replaced the C-50 during the 1987 model year",
  "weight": "2,350 lb curb weight for the 1985 US car (Christian Science Monitor, Curbside Classic); Curbside Classic puts the supercharged car at about 2,600 lb (single source)",
  "acceleration": "0-60 mph in less than 9 seconds (1985 naturally aspirated car, Christian Science Monitor); 6.5 seconds for the supercharged manual (MotorWeek) and 7 seconds with the automatic (The Truth About Cars)",
  "quarter_mile": "15.4 seconds at 90 mph, supercharged car, MotorWeek",
  "redline": "7,500 rpm (4A-GE, Grassroots Motorsports)",
  "supercharger": "Belt-driven Roots-type unit engaged by an electromagnetic clutch, with intercooler",
  "brakes": "Rotors enlarged for the 1987 model year; larger brake master cylinder for 1989",
  "us_price_new": "$10,999 base, 1985; $16,418 supercharged with 5-speed, 1988 (MotorWeek, as reported by Japanese Nostalgic Car)",
  "us_model_years": "1985-1989; supercharged car 1988-1989 only; 1989 cars sold until March 1990",
  "north_american_sales": "37,674 in 1985 and 31,352 in 1986 (Curbside Classic); later years not documented in sources consulted",
  "period_recognition": "Motor Trend Import Car of the Year for 1985"
 },
 "summary": "The AW11 is the first-generation Toyota MR2, sold in the US for the 1985 through 1989 model years: a two-seat coupe with its 1,587 cc 4A-GE four mounted behind the seats. The 1985 US car listed at $10,999, rated at 112 hp at 6,600 rpm with a 2,350 lb curb weight, and a full set of options took it past $13,000. Motor Trend named it Import Car of the Year for 1985. A T-top roof became optional for 1987. For 1988 Toyota added the 4A-GZE, a Roots-supercharged and intercooled version of the same engine at 145 hp, sold in the US only for 1988 and 1989 and priced from $16,418 with the 5-speed, per MotorWeek's test as reported by Japanese Nostalgic Car; MotorWeek ran one to 60 mph in 6.5 seconds. Curbside Classic counts North American sales of 37,674 in 1985 and 31,352 in 1986, and no source consulted gives a US total for the run. Hagerty UK gives a worldwide production run of 166,104 and a secondhand report attributes 163,845 to Autoweek, so this page gives no single total. As of November 2026 classic.com's benchmark is $12,950 for a naturally aspirated manual car and $21,247 for a supercharged car. The SW20 has its own page.",
 "history": "## Why Toyota built it\n\nThe MR2 began as a 1976 Toyota design project with one stated goal, a car that would be enjoyable to drive. Design work started in 1979, when Akio Yoshida of Toyota's testing department began evaluating layouts, and the 1981 prototype was called SA-X. The public first saw the idea as the SV-3 concept at the 1983 Tokyo Motor Show. Grassroots Motorsports records that development was controlled entirely by Toyota, which took outside consultation from Lotus engineer Roger Becker, and Becker's contribution is credited to the suspension and handling. The engine was the 4A-GE, a 1,587 cc four with a 7,500 rpm redline, placed behind the two seats. Toyota introduced the car in 1984, and the US received it a few months after Japan, as a 1985 model.\n\n## The 1985 US car\n\nThe US car listed at $10,999 in base form, with 112 hp at 6,600 rpm and a curb weight of 2,350 lb, and The Christian Science Monitor's 1985 test put 0-60 mph at less than 9 seconds. The option sheet was where the money went: automatic air conditioning at $840, a sunroof at $300, power windows and door locks at $305, cruise control at $185, an electronic cassette radio at $365, a rear spoiler at $150 and mudguards at $15, which together took the price past $13,000. Motor Trend named the MR2 its Import Car of the Year for 1985. Curbside Classic counts North American sales of 37,674 in 1985 and 31,352 in 1986. A 5-speed manual and a 4-speed automatic were offered.\n\n## Running changes, 1986 and 1987\n\nFor 1986 a third brake light was added and the rear spoiler became a clear 'Toyota' unit. The 1987 model year brought the larger change: a T-top roof became an option, and the brake rotors were enlarged. During 1987 Toyota also fitted a new C-52 transmission, stronger than the C-50 it replaced. Grassroots Motorsports notes that T-top seals can leak.\n\n## The supercharged car, 1988 and 1989\n\nThe 4A-GZE was the same block and head with a small Roots-type supercharger, belt-driven but engaged by an electromagnetic clutch, and an intercooler. It made 145 hp at 6,400 rpm. Torque is given as 140 lb-ft by Hagerty, Curbside Classic and Japanese Nostalgic Car, and as 137 lb-ft by Wikipedia and The Truth About Cars; this page does not resolve the difference. The supercharged car came to the US only for 1988 and 1989, with T-tops standard and a heavier transmission behind the new engine, and Curbside Classic puts it at about 2,600 lb. The 5-speed car started at $16,418 in 1988 and the fully optioned car MotorWeek tested was over $19,000, as Japanese Nostalgic Car reports that test. MotorWeek recorded 0-60 mph in 6.5 seconds and the quarter mile in 15.4 seconds at 90 mph, The Truth About Cars gives 7 seconds with the automatic, and Curbside Classic describes the time as in the high six-second range. MotorWeek still chose the Pontiac Fiero over it. The naturally aspirated engine was rerated at 115 hp and 100 lb-ft for 1988.\n\n## The end of the run\n\nThe 1989 cars received an LED third brake light built into the spoiler, a larger brake master cylinder, a new AM/FM cassette head unit and color-coded door handles. The 1989 model year was the last for the AW11 in the US, and those cars were sold until March 1990. By the time the Mazda Miata reached showrooms, Toyota had sold 160,000 MR2s worldwide. The second-generation SW20 replaced it in 1990 and is covered on its own page.",
 "marketNotes": "As of November 2026 classic.com puts its market benchmark for a naturally aspirated, manual-transmission AW11 at $12,950, with an average price of $13,150 across 64 recorded sales. The lowest recorded sale on that page is $4,300 and the top sale $30,750; classic.com does not state the year, date or venue for either on the summary panel, so neither is attributed to a particular car here. The same data set describes the base manual as the first and most common variant of the generation. For the supercharged car, classic.com's benchmark as of November 2026 is $21,247, and it dates the US supercharged car to the 1988 and 1989 model years. Classic.com's supercharged page did not state an average or a sales count. Hagerty's editorial coverage gives an earlier view in its own condition grades: a 2014 condition #2 (Excellent) value of $9,000 for a supercharged car, a base car's #2 value growing from $7,200 to $12,100 over the same period, and #3 (Good) values of $10,000 for a supercharged car and $8,400 for a base car, in an article that converts the original price to 2019 dollars. In one update of its price guide, Hagerty recorded supercharged cars up 9.3 percent and base cars up 4.2 percent. Hagerty's valuation tool pages could not be fetched and are not used. No individual auction lot page was fetched for this research, so no single sale is quoted with its house and date.",
 "whatToLookFor": "Rust is the fault the sources document most. Grassroots Motorsports describes the pattern: when the trunk seal leaks, the storage buckets rust through to the ground, and rusted chassis bosses for the front and rear engine mounts can let a mount break free of the chassis. Hagerty attributes a high attrition rate to hard driving, deferred maintenance and prolonged exposure to the elements. On a T-top car, the roof seals are a known leak point. Model-year details identify a car. A 1986 car has the added third brake light and the clear 'Toyota' spoiler; a 1987 car can have the optional T-top and carries larger brake rotors, and cars built partway through 1987 have the stronger C-52 transmission in place of the C-50. A 1989 car has the LED brake light in the spoiler, the larger brake master cylinder and color-coded door handles. The naturally aspirated engine is rated at 112 hp through 1987 and 115 hp from 1988. The supercharged car was sold in the US only for the 1988 and 1989 model years, with T-tops standard. The blower runs through an electromagnetic clutch. As of November 2026 classic.com's benchmarks are $12,950 for a naturally aspirated manual car and $21,247 for a supercharged car.",
 "commonProblems": "Grassroots Motorsports lists rust as the first concern, with leaking trunk seals letting water into the storage buckets until they rust through, T-top seals that leak, and rusted chassis bosses at the front and rear engine mounts that can let a mount break free of the chassis. Hagerty describes a high attrition rate driven by hard driving, deferred maintenance and prolonged exposure to the elements. Running changes during the run: the brake rotors were enlarged for 1987, a stronger C-52 transmission replaced the C-50 during 1987, and a larger brake master cylinder arrived for 1989. The supercharged car added a heavier transmission and a blower that is engaged through an electromagnetic clutch. No NHTSA recall or complaint data for the US MR2 was retrieved for this research, and no US specialist shop published repair costs that could be fetched, so this page gives no recall list and no dollar figures for repairs.",
 "valueTrajectory": "The 1985 US car listed at $10,999. As of November 2026 classic.com's benchmark for a naturally aspirated manual car is $12,950, above that original sticker in nominal dollars. The supercharged car started at $16,418 with the 5-speed in 1988, as MotorWeek's test was reported by Japanese Nostalgic Car, and as of November 2026 classic.com's benchmark for a supercharged car is $21,247, a gap of $8,297 over the naturally aspirated manual benchmark. Hagerty's editorial uses a different measure, its own condition grades: a condition #2 value of $9,000 for a supercharged car in 2014, and a base car's #2 value that grew from $7,200 to $12,100 over the same period, with one price-guide update recording supercharged cars up 9.3 percent and base cars up 4.2 percent. Hagerty's condition values and classic.com's benchmarks are not the same measure and are not compared here as one series. Classic.com's recorded sales for the base manual run from a $4,300 low to a $30,750 top sale.",
 "overallConfidence": "medium",
 "sources": [
  {
   "ref": "csmonitor-1985",
   "title": "Toyota 2-rider: the MR-2 sports coupe",
   "url": "https://csmonitor.com/1985/0509/htcoupe.html",
   "publisher": "The Christian Science Monitor",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "May 9, 1985 US period test: base price $10,999; option prices (air conditioning $840, sunroof $300, power windows and locks $305, cruise $185, cassette $365, rear spoiler $150, mudguards $15), optioned price tops $13,000; 112 hp at 6,600 rpm; 1.6-liter midship engine; 2,350 lb curb weight; 0-60 mph in less than 9 seconds."
  },
  {
   "ref": "mr2wiki-changes",
   "title": "Changes By Year",
   "url": "https://mr2wiki.com/MKI/ChangesByYear",
   "publisher": "MR2 Wiki",
   "sourceType": "club-forum",
   "reliability": "medium",
   "notes": "US owner-community reference of model-year changes: 1985 MSRP $10,999; 1986 third brake light and clear Toyota spoiler; 1987 T-top option, enlarged brake rotors, C-52 transmission replacing C-50; 1988 supercharged option at 145 hp, sold in US in SC form, T-tops standard on SC, NA engine 115 hp and 100 lb-ft; 1989 LED brake light in spoiler, larger master cylinder, color-coded handles; 1989 cars sold until March 1990. No production figures."
  },
  {
   "ref": "grm-vintage-views",
   "title": "Vintage Views: Toyota MR2, Mid-Engined Magic for the Masses",
   "url": "https://grassrootsmotorsports.com/articles/vintage-views-toyota-mr2-mid-engined-magic-masses",
   "publisher": "Grassroots Motorsports",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "US enthusiast magazine retrospective: SV-3 concept at 1983 Tokyo Motor Show; development controlled entirely by Toyota with consultation from Lotus engineer Roger Becker; US got the car as a 1985 model; 7,500 rpm redline and 112 hp; supercharged 145 hp model added 1988; rust in storage buckets from trunk seal leaks, T-top seal leaks, rusted engine-mount chassis bosses."
  },
  {
   "ref": "jnc-motorweek",
   "title": "A Toyota MR2 SC lost out to a Fiero in Motorweek's comparo, thanks in part to its eye-watering cost",
   "url": "https://japanesenostalgiccar.com/motorweek-toyota-mr2-supercharged-vs-pontiac-fiero/",
   "publisher": "Japanese Nostalgic Car",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Reports MotorWeek's period test of the supercharged car: 5-speed SC started at $16,418 in 1988; tested car over $19,000; 145 hp and 140 lb-ft; 0-60 mph 6.5 seconds, quarter mile 15.4 seconds at 90 mph; MR2 250 lb lighter than the Fiero; MotorWeek chose the Fiero."
  },
  {
   "ref": "ttac-rare-rides-sc",
   "title": "Rare Rides: An Original 1988 Toyota MR2, the Supercharged One",
   "url": "https://www.thetruthaboutcars.com/2019/09/rare-rides-an-original-1988-toyota-mr2-the-supercharged-one/?print=1",
   "publisher": "The Truth About Cars",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "September 2019 feature: MR2 introduced in 1984 as an 1985 model; Lotus engineer Roger Becker consulted; Roots supercharger and intercooler, 145 hp and 137 lb-ft; heavier transmission on supercharged cars; 0-60 mph 6.5 seconds manual, 7 seconds automatic. Its current asking price for one car is not used."
  },
  {
   "ref": "curbside-1989-sc",
   "title": "Curbside Capsule: 1989 Toyota MR2 SC, That's Mister Two To You",
   "url": "https://curbsideclassic.com/curbside-classics-asian/curbside-capsule-1989-toyota-mr2-sc-thats-mister-two-to-you",
   "publisher": "Curbside Classic",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "Supercharged car: Roots-blown, intercooled 4A-GZE; 145 hp and 140 lb-ft; blower with electromagnetic clutch; about 2,600 lb; 0-60 mph in the high six-second range; Motor Trend Import Car of the Year; estimate of no more than 2,000 SC cars likely sold in the US over two years (an estimate, not a count). Reader comments not used."
  },
  {
   "ref": "curbside-1986",
   "title": "Curbside Classic: 1986 Toyota MR2, They Call Me Mister Two",
   "url": "https://curbsideclassic.com/curbside-classics-asian/curbside-classic-1986-toyota-mr2-they-call-me-mister-two",
   "publisher": "Curbside Classic",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "North American sales of 37,674 in 1985 and 31,352 in 1986 (single source for these counts); 112 hp in US cars; 2,350 lb curb weight; 0-60 mph a bit under nine seconds; T-top optional for 1987. Reader comments not used."
  },
  {
   "ref": "wikipedia-mr2",
   "title": "Toyota MR2",
   "url": "https://en.wikipedia.org/wiki/Toyota_MR2",
   "publisher": "Wikipedia",
   "sourceType": "encyclopedia",
   "reliability": "medium",
   "notes": "Pointer for development history (1976 project, Akio Yoshida from 1979, 1981 SA-X prototype, Roger Becker on suspension and handling); 112 hp US rating and later 115 hp North American rating; 4A-GZE 145 hp at 6,400 rpm and 137 lb-ft at 4,400 rpm with belt-driven Roots supercharger and electromagnetic clutch; T-bar roof in North America; Motor Trend Import Car of the Year 1985. No production totals."
  },
  {
   "ref": "classic-base-manual",
   "title": "Toyota MR2 - Base Model - Manual, W10 1st Gen Market",
   "url": "https://www.classic.com/m/toyota/mr2/w10-1st-gen/base-model-manual",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of November 2026: CMB $12,950, average $13,150, lowest sale $4,300, top sale $30,750, sales count 64; base manual available 1985 to 1989 and described as the first and most common variant. Dates and venues of the low and top sales not stated on the summary panel."
  },
  {
   "ref": "classic-supercharged",
   "title": "Toyota MR2 Supercharged - W10 Market",
   "url": "https://www.classic.com/m/toyota/mr2/w10-1st-gen/supercharged",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "high",
   "notes": "As of November 2026: CMB $21,247 for the first-generation supercharged car; variant introduced in 1986 elsewhere and sold 1988 to 1989 in the US market. No average or sales count stated."
  },
  {
   "ref": "classic-w10",
   "title": "Toyota MR2 - W10 (1st Gen) Market",
   "url": "https://www.classic.com/m/toyota/mr2/w10-1st-gen",
   "publisher": "classic.com",
   "sourceType": "market-data",
   "reliability": "medium",
   "notes": "Generation description: introduced late 1984 as W10; 4A-GE 1,587 cc inline four; supercharged 4A-GZE available from 1988; 5-speed manual or 4-speed automatic; replaced by the W20 in 1990. No market figures stated on the generation page."
  },
  {
   "ref": "hagerty-pricier",
   "title": "The 1984-89 Toyota MR2 is getting pricier, but you can still score a deal",
   "url": "https://hagerty.com/media/?p=5909",
   "publisher": "Hagerty",
   "sourceType": "journalism",
   "reliability": "high",
   "notes": "Hagerty editorial (not the valuation tool): original price $10,999, about $26,500 in 2019 dollars; 2014 condition #2 supercharged value $9,000; base #2 value grew from $7,200 to $12,100; #3 values $10,000 supercharged and $8,400 base; one guide update up 9.3 percent supercharged and 4.2 percent base; 160,000 MR2s sold worldwide by the Miata's arrival; 145 hp and 140 lb-ft supercharged; high attrition rate."
  },
  {
   "ref": "hagerty-uk-guide",
   "title": "Buying guide: Toyota MR2 (1984-1989)",
   "url": "https://www.hagerty.co.uk/articles/buying-guides/buying-guide-toyota-mr2-1984-1989/",
   "publisher": "Hagerty UK",
   "sourceType": "journalism",
   "reliability": "medium",
   "notes": "UK buying guide used for one figure only: a total first-generation production run of 166,104. Its UK sales count and any values are not used, under the US data standard."
  },
  {
   "ref": "jdmbuysell-guide",
   "title": "Toyota MR2 buyer's guide",
   "url": "https://www.jdmbuysell.com/learn/toyota/mr2/",
   "publisher": "JDM Buy Sell",
   "sourceType": "specialist",
   "reliability": "medium",
   "notes": "Japanese-import specialist reference reporting two published worldwide first-generation totals, 163,845 attributed to Autoweek and 166,104 attributed to Hagerty. Only used to show that published totals disagree; its JDM output and weight figures are home-market and not used."
  }
 ],
 "claims": [
  {
   "section": "specs",
   "claimText": "The 1985 US MR2 listed at $10,999 in base form, with a 1.6-liter midship engine rated at 112 hp at 6,600 rpm and a curb weight of 2,350 lb.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "csmonitor-1985",
    "mr2wiki-changes",
    "curbside-1986"
   ],
   "evidence": [
    {
     "ref": "csmonitor-1985",
     "quote": "Priced at $10,999 in its base form"
    },
    {
     "ref": "csmonitor-1985",
     "quote": "produces 112 hp. at 6,600 r.p.m."
    },
    {
     "ref": "csmonitor-1985",
     "quote": "With a curb weight of 2,350 pounds"
    },
    {
     "ref": "mr2wiki-changes",
     "quote": "1985 MSRP: $10,999 USD"
    },
    {
     "ref": "curbside-1986",
     "quote": "the MR2 had a mere 2,350-lb. of curb weight"
    }
   ]
  },
  {
   "section": "history",
   "claimText": "Options on the 1985 car included automatic air conditioning at $840, a sunroof at $300, power windows and door locks at $305, cruise control at $185, a cassette radio at $365, a rear spoiler at $150 and mudguards at $15, taking the total past $13,000.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "csmonitor-1985"
   ],
   "evidence": [
    {
     "ref": "csmonitor-1985",
     "quote": "automatic air conditioning at a hefty $840, sunroof ($300), power windows and door locks ($305)"
    },
    {
     "ref": "csmonitor-1985",
     "quote": "cruise control ($185), electronic cassette radio ($365), rear spoiler ($150), and mudguards ($15)."
    },
    {
     "ref": "csmonitor-1985",
     "quote": "Toted up, the price tops $13,000."
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 1985 naturally aspirated car reached 60 mph in under 9 seconds in period US reporting, and the 4A-GE carried a 7,500 rpm redline.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "csmonitor-1985",
    "curbside-1986",
    "grm-vintage-views"
   ],
   "evidence": [
    {
     "ref": "csmonitor-1985",
     "quote": "will accelerate to 60 m.p.h. in less than 9 seconds"
    },
    {
     "ref": "curbside-1986",
     "quote": "zero-to-sixty came in a bit under nine seconds"
    },
    {
     "ref": "grm-vintage-views",
     "quote": "With a redline of 7500 rpm and output of 112 horsepower."
    }
   ]
  },
  {
   "section": "history",
   "claimText": "The MR2 grew from a 1976 Toyota design project; Akio Yoshida of the testing department began design work in 1979, the 1981 prototype was called SA-X, and the SV-3 concept was shown at the 1983 Tokyo Motor Show.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-mr2",
    "grm-vintage-views"
   ],
   "evidence": [
    {
     "ref": "wikipedia-mr2",
     "quote": "The MR2 derived from a 1976 Toyota design project with the goal of a car which would be enjoyable to drive"
    },
    {
     "ref": "wikipedia-mr2",
     "quote": "Design work began in 1979 when Akio Yoshida from Toyota's testing department started to evaluate"
    },
    {
     "ref": "wikipedia-mr2",
     "quote": "Toyota called the 1981 prototype SA-X."
    },
    {
     "ref": "grm-vintage-views",
     "quote": "The MR2 was revealed to the public at the 1983 Tokyo Motor Show as the SV-3 concept car."
    }
   ]
  },
  {
   "section": "history",
   "claimText": "Development was controlled by Toyota, with outside consultation from Lotus engineer Roger Becker, and Wikipedia credits Toyota with designing the suspension and handling with Becker's help.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "grm-vintage-views",
    "wikipedia-mr2",
    "ttac-rare-rides-sc"
   ],
   "evidence": [
    {
     "ref": "grm-vintage-views",
     "quote": "did seek some outside consultation from Lotus engineer Roger Becker"
    },
    {
     "ref": "wikipedia-mr2",
     "quote": "The MR2's suspension and handling were designed by Toyota with the help of Lotus engineer Roger Becker."
    },
    {
     "ref": "ttac-rare-rides-sc",
     "quote": "The company turned to a Lotus engineer by the name of Roger Becker"
    }
   ]
  },
  {
   "section": "history",
   "claimText": "Toyota introduced the MR2 in 1984 and the US received it a few months later as a 1985 model; the US run ended with the 1989 model year, whose cars were sold until March 1990.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "grm-vintage-views",
    "ttac-rare-rides-sc",
    "mr2wiki-changes",
    "classic-w10"
   ],
   "evidence": [
    {
     "ref": "grm-vintage-views",
     "quote": "The U.S. got the MR2 a few months later, also as a 1985 model."
    },
    {
     "ref": "ttac-rare-rides-sc",
     "quote": "Toyota introduced its new MR2 in 1984 as an ’85 model"
    },
    {
     "ref": "mr2wiki-changes",
     "quote": "Last year of production in the USA, the 1989 model year cars were sold until March of 1990."
    },
    {
     "ref": "classic-w10",
     "quote": "The 1st Generation MR2 was replaced by the 2nd Generation Toyota MR2 (W20) in 1990."
    }
   ]
  },
  {
   "section": "history",
   "claimText": "Motor Trend named the MR2 its Import Car of the Year for 1985.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-mr2",
    "curbside-1989-sc"
   ],
   "evidence": [
    {
     "ref": "wikipedia-mr2",
     "quote": "The MR2 was Motor Trend's Import Car of the Year for 1985."
    },
    {
     "ref": "curbside-1989-sc",
     "quote": "Import Car of the Year"
    }
   ]
  },
  {
   "section": "production",
   "claimText": "Curbside Classic counts North American MR2 sales of 37,674 in 1985 and 31,352 in 1986; no other source consulted gives annual US or North American figures.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "curbside-1986"
   ],
   "evidence": [
    {
     "ref": "curbside-1986",
     "quote": "North American sales were quite good, totaling 37,674 in 1985 (its first full year on the market), and 31,352 in 1986."
    }
   ]
  },
  {
   "section": "production",
   "claimText": "Published worldwide totals for the first-generation MR2 differ: Hagerty UK gives a total production run of 166,104, while JDM Buy Sell reports 163,845 attributed to Autoweek; a Hagerty US article says Toyota had sold 160,000 MR2s worldwide by the time the Miata arrived.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "hagerty-uk-guide",
    "jdmbuysell-guide",
    "hagerty-pricier"
   ],
   "conflictNote": "Hagerty UK states a total production run of 166,104, read first-hand for this research. JDM Buy Sell reports 163,845 attributed to Autoweek; the Autoweek page was not read, so that figure is secondhand. Hagerty's US editorial gives 160,000 sold worldwide by the Miata's arrival, a point-in-time sales figure rather than a total. No Toyota figure was found, and the total is not resolved by any source consulted here.",
   "evidence": [
    {
     "ref": "hagerty-uk-guide",
     "quote": "with 13,579 sold here from a total production run of 166,104."
    },
    {
     "ref": "jdmbuysell-guide",
     "quote": "Published worldwide totals are 163,845 (Autoweek) or 166,104 (Hagerty) for the first generation"
    },
    {
     "ref": "hagerty-pricier",
     "quote": "Toyota had already sold 160,000 MR2s worldwide"
    }
   ]
  },
  {
   "section": "production",
   "claimText": "Curbside Classic estimates that no more than 2,000 supercharged MR2s were likely sold in the US over the car's two model years; this is an estimate, not a count, and no Toyota figure was found.",
   "confidence": "low",
   "status": "unverified",
   "sourceRefs": [
    "curbside-1989-sc"
   ],
   "evidence": [
    {
     "ref": "curbside-1989-sc",
     "quote": "with no more than 2,000 likely sold on these shores over two years"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The supercharged 4A-GZE was sold in the US for the 1988 and 1989 model years only, rated at 145 hp, with T-tops standard on supercharged cars.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "mr2wiki-changes",
    "classic-supercharged",
    "grm-vintage-views",
    "classic-w10"
   ],
   "evidence": [
    {
     "ref": "mr2wiki-changes",
     "quote": "Supercharged engine option introduced, increasing engine output to 145hp."
    },
    {
     "ref": "mr2wiki-changes",
     "quote": "T-tops standard on SC models."
    },
    {
     "ref": "classic-supercharged",
     "quote": "Introduced in 1986 (1988 to 1989 for the US market), the Toyota MR2 Supercharged was a variant"
    },
    {
     "ref": "grm-vintage-views",
     "quote": "In 1988 a 145-horsepower supercharged model was added."
    },
    {
     "ref": "classic-w10",
     "quote": "In 1988, a Supercharged variant (4A-GZE) became available."
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The 4A-GZE uses a belt-driven Roots-type supercharger engaged by an electromagnetic clutch, with an intercooler, and produces 145 hp at 6,400 rpm; the supercharged car also used a heavier transmission.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "wikipedia-mr2",
    "curbside-1989-sc",
    "ttac-rare-rides-sc"
   ],
   "evidence": [
    {
     "ref": "wikipedia-mr2",
     "quote": "The supercharger was belt-driven but actuated by an electromagnetic clutch"
    },
    {
     "ref": "wikipedia-mr2",
     "quote": "It produced 145 hp (147 PS; 108 kW) at 6,400 rpm"
    },
    {
     "ref": "curbside-1989-sc",
     "quote": "Roots-blown and intercooled 4A-GZE engine"
    },
    {
     "ref": "curbside-1989-sc",
     "quote": "The blower incorporated an electromagnetic clutch"
    },
    {
     "ref": "ttac-rare-rides-sc",
     "quote": "Equipped with a Roots supercharger and intercooler, 145 horsepower were accompanied by 137 torques."
    },
    {
     "ref": "ttac-rare-rides-sc",
     "quote": "Supercharged versions suffered from additional weight via the revised engine and new, heftier transmission."
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "Torque for the supercharged 4A-GZE is given as 140 lb-ft by three sources and as 137 lb-ft by two others.",
   "confidence": "medium",
   "status": "disputed",
   "sourceRefs": [
    "hagerty-pricier",
    "curbside-1989-sc",
    "jnc-motorweek",
    "wikipedia-mr2",
    "ttac-rare-rides-sc"
   ],
   "conflictNote": "Hagerty, Curbside Classic and Japanese Nostalgic Car state 140 lb-ft. Wikipedia states 137 lb-ft at 4,400 rpm and The Truth About Cars states 137. No Toyota US press figure was fetched, and the difference is not resolved by any source consulted here.",
   "evidence": [
    {
     "ref": "hagerty-pricier",
     "quote": "the blower brought the MR2 to 145 horsepower and 140 lb-ft of torque"
    },
    {
     "ref": "curbside-1989-sc",
     "quote": "for a healthy 145 horsepower and 140 lb-ft of torque"
    },
    {
     "ref": "jnc-motorweek",
     "quote": "to 145 horsepower and 140 lb-ft of torque"
    },
    {
     "ref": "wikipedia-mr2",
     "quote": "It produced 145 hp (147 PS; 108 kW) at 6,400 rpm and 186 N⋅m; 137 lb⋅ft (19 kg⋅m) of torque at 4,400 rpm"
    },
    {
     "ref": "ttac-rare-rides-sc",
     "quote": "Equipped with a Roots supercharger and intercooler, 145 horsepower were accompanied by 137 torques."
    }
   ]
  },
  {
   "section": "market",
   "claimText": "The 1988 supercharged MR2 with the 5-speed manual started at $16,418, and the fully optioned car MotorWeek tested was over $19,000, per MotorWeek's test as reported by Japanese Nostalgic Car; this rests on one secondary report.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "jnc-motorweek"
   ],
   "evidence": [
    {
     "ref": "jnc-motorweek",
     "quote": "But the MR2 SC with the 5-speed manual started at $16,418 in 1988"
    },
    {
     "ref": "jnc-motorweek",
     "quote": "tested was over $19,000, which would be over $55,000 in 2026 dollars."
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "MotorWeek recorded 0-60 mph in 6.5 seconds and the quarter mile in 15.4 seconds at 90 mph in the supercharged car; The Truth About Cars gives 6.5 seconds with the manual and 7 with the automatic, and Curbside Classic describes the time as in the high six-second range.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "jnc-motorweek",
    "ttac-rare-rides-sc",
    "curbside-1989-sc"
   ],
   "evidence": [
    {
     "ref": "jnc-motorweek",
     "quote": "it clocked 0-60 in just 6.5 seconds and a quarter-mile time of 15.4 seconds at 90 mph."
    },
    {
     "ref": "ttac-rare-rides-sc",
     "quote": "6.5 seconds with the manual transmission, or 7 seconds with an automatic."
    },
    {
     "ref": "curbside-1989-sc",
     "quote": "Mister Two now got to sixty in the high six-second range"
    }
   ]
  },
  {
   "section": "history",
   "claimText": "MotorWeek chose the Pontiac Fiero over the supercharged MR2 in its comparison, although the MR2 weighed 250 lb less.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "jnc-motorweek"
   ],
   "evidence": [
    {
     "ref": "jnc-motorweek",
     "quote": "editors chose the Fiero over the MR2."
    },
    {
     "ref": "jnc-motorweek",
     "quote": "Because the MR2 weighed 250 pounds less"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "Curbside Classic puts the supercharged car at about 2,600 lb; no second source consulted gives a weight for the supercharged car.",
   "confidence": "low",
   "status": "unverified",
   "sourceRefs": [
    "curbside-1989-sc"
   ],
   "evidence": [
    {
     "ref": "curbside-1989-sc",
     "quote": "move the now 2,600 pound MR2 with zest"
    }
   ]
  },
  {
   "section": "history",
   "claimText": "For 1987 a T-top roof became optional and the brake rotors were enlarged, and during 1987 a stronger C-52 transmission replaced the C-50.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "mr2wiki-changes",
    "curbside-1986",
    "wikipedia-mr2"
   ],
   "evidence": [
    {
     "ref": "mr2wiki-changes",
     "quote": "T-top option available."
    },
    {
     "ref": "mr2wiki-changes",
     "quote": "Brake rotors are enlarged."
    },
    {
     "ref": "mr2wiki-changes",
     "quote": "Used new C-52 Transmission which was stronger compared to C-50."
    },
    {
     "ref": "curbside-1986",
     "quote": "a T-top roof became an optional extra for 1987."
    },
    {
     "ref": "wikipedia-mr2",
     "quote": "T-bar roof available in North America and Europe"
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The naturally aspirated 4A-GE was rerated at 115 hp and 100 lb-ft for the 1988 US model year.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "mr2wiki-changes",
    "wikipedia-mr2"
   ],
   "evidence": [
    {
     "ref": "mr2wiki-changes",
     "quote": "Normally aspirated engine now produces 115hp/100lb-ft."
    },
    {
     "ref": "wikipedia-mr2",
     "quote": "North American 4A-GE is also now rated at 115 hp (86 kW)."
    }
   ]
  },
  {
   "section": "history",
   "claimText": "The 1986 car added a third brake light and a clear Toyota rear spoiler; the 1989 car moved the brake light to LEDs in the spoiler and added a larger brake master cylinder, a new head unit and color-coded door handles.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "mr2wiki-changes"
   ],
   "evidence": [
    {
     "ref": "mr2wiki-changes",
     "quote": "Third brake light added."
    },
    {
     "ref": "mr2wiki-changes",
     "quote": "Third brake light changed to LEDs integrated into the spoiler."
    },
    {
     "ref": "mr2wiki-changes",
     "quote": "Larger Brake Master Cylinder"
    },
    {
     "ref": "mr2wiki-changes",
     "quote": "Door handles color coded."
    }
   ]
  },
  {
   "section": "specs",
   "claimText": "The AW11 used the 1,587 cc 4A-GE inline four with a 5-speed manual or 4-speed automatic transmission.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-w10",
    "csmonitor-1985"
   ],
   "evidence": [
    {
     "ref": "classic-w10",
     "quote": "The Base Model was initially introduced with the naturally aspirated 4A-GE 1,587 cc (1.6 L) inline-four engine"
    },
    {
     "ref": "classic-w10",
     "quote": "with a 5-speed manual or 4-speed automatic transmission."
    },
    {
     "ref": "csmonitor-1985",
     "quote": "Equipped with a midship, 1.6-liter engine"
    }
   ]
  },
  {
   "section": "problems",
   "claimText": "Documented faults are rust in the storage buckets from leaking trunk seals, leaking T-top seals and rusted chassis bosses at the engine mounts that can let a mount break free; Hagerty describes a high attrition rate.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "grm-vintage-views",
    "hagerty-pricier"
   ],
   "evidence": [
    {
     "ref": "grm-vintage-views",
     "quote": "When the trunk seal leaks and the buckets rust, you will see the ground."
    },
    {
     "ref": "grm-vintage-views",
     "quote": "Rusted chassis bosses for the front and rear engine mounts can cause the mount to break free of the chassis."
    },
    {
     "ref": "grm-vintage-views",
     "quote": "T-top seals can leak."
    },
    {
     "ref": "hagerty-pricier",
     "quote": "hard driving, deferred maintenance, and prolonged exposure to the elements made for a high attrition rate"
    }
   ]
  },
  {
   "section": "market",
   "claimText": "As of November 2026 classic.com's benchmark for a naturally aspirated manual AW11 is $12,950, with an average of $13,150, a lowest sale of $4,300 and a top sale of $30,750 across 64 sales.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-base-manual"
   ],
   "evidence": [
    {
     "ref": "classic-base-manual",
     "quote": "CMB $12,950"
    },
    {
     "ref": "classic-base-manual",
     "quote": "Avg $13,150"
    },
    {
     "ref": "classic-base-manual",
     "quote": "Lowest Sale $4,300"
    },
    {
     "ref": "classic-base-manual",
     "quote": "Top Sale $30,750"
    },
    {
     "ref": "classic-base-manual",
     "quote": "Sales Count 64"
    },
    {
     "ref": "classic-base-manual",
     "quote": "Availalble between 1985 and 1989, the Toyota MR2 - Base Model - Manual was the first and most common variant of the 1st generation"
    }
   ]
  },
  {
   "section": "market",
   "claimText": "As of November 2026 classic.com's benchmark for a first-generation supercharged MR2 is $21,247, a premium of $8,297 over its naturally aspirated manual benchmark of $12,950.",
   "confidence": "high",
   "status": "verified",
   "sourceRefs": [
    "classic-supercharged",
    "classic-base-manual"
   ],
   "evidence": [
    {
     "ref": "classic-supercharged",
     "quote": "CMB $21,247"
    },
    {
     "ref": "classic-base-manual",
     "quote": "CMB $12,950"
    }
   ],
   "computed": [
    "$8,297"
   ]
  },
  {
   "section": "market",
   "claimText": "Hagerty's editorial gives a 2014 condition #2 value of $9,000 for a supercharged car, a base car's #2 value rising from $7,200 to $12,100, #3 values of $10,000 supercharged and $8,400 base, and one guide update with supercharged cars up 9.3 percent and base cars up 4.2 percent.",
   "confidence": "medium",
   "status": "verified",
   "sourceRefs": [
    "hagerty-pricier"
   ],
   "evidence": [
    {
     "ref": "hagerty-pricier",
     "quote": "In 2014, the condition #2 (Excellent) value for a supercharged model was $9000."
    },
    {
     "ref": "hagerty-pricier",
     "quote": "grew from $7200 to $12,100"
    },
    {
     "ref": "hagerty-pricier",
     "quote": "The #3- condition (Good) value for a blown car is $10,000"
    },
    {
     "ref": "hagerty-pricier",
     "quote": "a base car is $8400."
    },
    {
     "ref": "hagerty-pricier",
     "quote": "supercharged MR2s were up 9.3 percent in the latest update of the Hagerty Price Guide"
    },
    {
     "ref": "hagerty-pricier",
     "quote": "base cars were up 4.2 percent."
    },
    {
     "ref": "hagerty-pricier",
     "quote": "$10,999 (about $26,500 in 2019 dollars)"
    }
   ]
  }
 ]
};
