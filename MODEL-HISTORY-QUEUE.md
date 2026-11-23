# Model history queue

The daily run (`MODEL-HISTORY-DAILY.md`) takes the first rows whose status is
`queued`, top to bottom. Reorder rows to change priority. Add a row to add a
car. Status values: `queued`, `written YYYY-MM-DD`, `held YYYY-MM-DD: reason`. A `queued`
row whose notes begin with UPGRADE already has a file: the writer improves it
under spec section 12 instead of starting again.

Order is a judgment of US ownership-search demand and of gaps beside pages
already published, set 2026-11-17. It is not measured. When fresh demand data
exists (Search Console, or a rerun of the autocomplete harvest in
`research-hub-demand-data-2026-09-21`), reorder by that.

File path is `src/lib/data/model-seed-<file stem>.ts`.

| # | Status | Slug | File stem | Export | Make | Model | Generation | US model years | Scope notes |
|---|---|---|---|---|---|---|---|---|---|
| 1 | written 2026-11-17 | jeep/cherokee-xj | cherokee-xj | seedCherokeeXj | Jeep | Cherokee | XJ | 1984-2001 | |
| 2 | written 2026-11-17 | volkswagen/vanagon | vanagon | seedVanagon | Volkswagen | Vanagon | T3 | 1980-1991 | |
| 3 | written 2026-11-17 | bmw/3-series-e30 | 3-series-e30 | seed3SeriesE30 | BMW | 3 Series | E30 | 1984-1991 | |
| 4 | written 2026-11-17 | chevrolet/corvette-c4 | corvette-c4 | seedCorvetteC4 | Chevrolet | Corvette | C4 | 1984-1996 | |
| 5 | written 2026-11-18 | chevrolet/3100-advance-design | 3100-advance-design | seed3100AdvanceDesign | Chevrolet | 3100 | Advance Design | 1947-1955 | UPGRADE of an existing file, held 2026-11-17, not registered. Year-by-year identification and five dated Hagerty Marketplace results are checked and sound. Missing: a US price new, any production figure, a period source, and a rust and repair source above low reliability. Try the GM Heritage Center vehicle information kits for 1947-55 Chevrolet trucks and a Hemmings buyer's guide. Remove the $1,419 price and the HotCars NADA values (one low-reliability source). Hood script is 1947 only, Hydra-Matic is 1954, drop the 1947-49 span on the 90 hp figure and the 235 'through 1955' line. Rewrite whatToLookFor, commonProblems and valueTrajectory as description. Set confidence low if the gaps stay open. |
| 6 | written 2026-11-17 | mercedes-benz/sl-r129 | sl-r129 | seedSlR129 | Mercedes-Benz | SL | R129 | 1990-2002 | |
| 7 | written 2026-11-17 | porsche/cayman-987 | cayman-987 | seedCayman987 | Porsche | Cayman | 987 | 2006-2012 | |
| 8 | written 2026-11-17 | lincoln/continental-1961-69 | continental-1961-69 | seedContinental196169 | Lincoln | Continental | Fourth generation | 1961-1969 | |
| 9 | written 2026-11-18 | toyota/4runner-1st-gen | 4runner-1st-gen | seed4Runner1stGen | Toyota | 4Runner | First generation | 1984-1989 | Removable top, solid front axle through 1985, 22R and 22RE, the 3VZ V6, SR5. The Land Cruisers have their own pages. Rust and head gasket questions. |
| 10 | written 2026-11-19 | chevrolet/camaro-2nd-gen | camaro-2nd-gen | seedCamaro2ndGen | Chevrolet | Camaro | Second generation | 1970-1981 | Split-bumper RS, Z28 on and off, the 1974 and 1978 restyles. The first-generation Camaro and the 1970-81 Trans Am have their own pages. |
| 11 | written 2026-11-19 | volvo/p1800 | p1800 | seedP1800 | Volvo | P1800 | P1800, 1800S, 1800E, 1800ES | 1961-1973 | Jensen-built cars against Swedish-built, B18 and B20, D-Jetronic on the E, the ES wagon. Rust is the question readers arrive with. |
| 12 | written 2026-11-20 | saab/900-classic | 900-classic | seed900Classic | Saab | 900 | Classic | 1979-1993 | Turbo, 16-valve, SPG, convertible to 1994. Gearbox and headliner questions. |
| 13 | written 2026-11-20 | ford/f-100-1953-56 | f-100-1953-56 | seedF100195356 | Ford | F-100 | Second generation | 1953-1956 | Flathead to Y-block, the 1956 wraparound windshield and big back window. The 1967-72 F-100 has its own page. Do not infer F-100 production from truck-line totals. |
| 14 | written 2026-11-21 | mazda/mx-5-nb | mx-5-nb | seedMx5Nb | Mazda | MX-5 Miata | NB | 1999-2005 | 10th Anniversary, Special Editions, Mazdaspeed 2004-05. The NA has its own page. Frame rail rust. |
| 15 | written 2026-11-21 | jeep/wrangler-yj | wrangler-yj | seedWranglerYj | Jeep | Wrangler | YJ | 1987-1995 | Square headlights, 2.5 and 4.2 then 4.0, Renegade, Sahara. The CJ-5 and CJ-7 have their own page. |
| 16 | written 2026-11-22 | bmw/m-coupe-z3 | m-coupe-z3 | seedMCoupeZ3 | BMW | M Coupe | E36/8 | 1999-2002 | S52 against S54 cars, US production by engine, subframe and rear floor. Mention the M Roadster in a sentence. |
| 17 | written 2026-11-22 | datsun/280zx | 280zx | seed280zx | Datsun | 280ZX | S130 | 1979-1983 | 2+2, Turbo from 1981, T-tops, 10th Anniversary. The 240Z and 280Z have their own pages. |
| 18 | written 2026-11-23 | chevrolet/impala-1961-64 | impala-1961-64 | seedImpala196164 | Chevrolet | Impala | Third generation | 1961-1964 | SS from 1961, the 409, bubble top 1961-62, the 1964 as lowrider canon. Production is published by series, not always by Impala alone: say which. |
| 19 | written 2026-11-23 | mercedes-benz/g-class-w463 | g-class-w463 | seedGClassW463 | Mercedes-Benz | G-Class | W463 | 2002-2018 | Official US sales from 2002; the Europa International gray-market cars before that in two sentences. G500, G55 AMG, G550, G63. Rust and transfer case questions. |
| 20 | queued | honda/civic-si-em1 | civic-si-em1 | seedCivicSiEm1 | Honda | Civic Si | EM1 | 1999-2000 | B16A2, the three colors, theft history as an ownership fact, originality premium. The CRX and Integra Type R have their own pages. |
| 21 | queued | toyota/mr2-aw11 | mr2-aw11 | seedMr2Aw11 | Toyota | MR2 | AW11 | 1985-1989 | 4A-GE, supercharged 4A-GZE from 1988, T-top. The SW20 has its own page. |
| 22 | queued | jaguar/xk120 | xk120 | seedXk120 | Jaguar | XK120 | | 1949-1954 | Alloy-bodied first 242 against steel cars (cite the count from sources), roadster, fixed head, drophead, SE. US was the main market. |
| 23 | queued | chevrolet/corvair | corvair | seedCorvair | Chevrolet | Corvair | Early and late model | 1960-1969 | Monza, Spyder and Corsa turbo, the 1965 suspension change, Nader and the NHTSA 1972 finding from the government source. |
| 24 | queued | mitsubishi/3000gt-vr-4 | 3000gt-vr-4 | seed3000gtVr4 | Mitsubishi | 3000GT VR-4 | Z16A | 1991-1999 | Active aero, four-wheel steering, the Spyder retractable hardtop 1995-96, Dodge Stealth R/T Turbo in a sentence. Transfer case recall from NHTSA. |
| 25 | queued | pontiac/firebird-1st-gen | firebird-1st-gen | seedFirebird1stGen | Pontiac | Firebird | First generation | 1967-1969 | 400, Ram Air, the 1969 Trans Am (697 coupes and 8 convertibles is the usual figure: verify it). The 1970-81 Trans Am has its own page. |
| 26 | queued | aston-martin/v8-vantage-2006-17 | v8-vantage-2006-17 | seedV8Vantage200617 | Aston Martin | V8 Vantage | VH | 2006-2017 | 4.3 against 4.7, manual against Sportshift, N420, S, GT. The manual DB9 has its own page. Clutch life and running cost. |
| 27 | queued | subaru/impreza-wrx-sti-gd | impreza-wrx-sti-gd | seedImprezaWrxStiGd | Subaru | Impreza WRX STI | GD | 2004-2007 | US cars only: EJ257, DCCD, the 2006 facelift, 2007 Limited. Ringland and head gasket questions, labeled by source. |
| 28 | queued | ferrari/mondial | mondial | seedMondial | Ferrari | Mondial | 8, QV, 3.2, t | 1981-1993 | Coupe and cabriolet, the transverse to longitudinal change on the t. Major service cost is why readers arrive. |
| 29 | queued | lamborghini/gallardo | gallardo | seedGallardo | Lamborghini | Gallardo | | 2004-2014 | Gated manual take rate if any source publishes one, E-gear clutch life, LP560-4, Superleggera, Balboni. 14,022 built is the usual figure: verify it. |
| 30 | queued | rolls-royce/silver-shadow | silver-shadow | seedSilverShadow | Rolls-Royce | Silver Shadow | I and II | 1966-1980 | Citroen-licensed hydraulics, the Shadow II of 1977, Bentley T in a sentence. Brake and hydraulic system cost is the ownership question. |
| 31 | queued | plymouth/road-runner-1968-70 | road-runner-1968-70 | seedRoadRunner196870 | Plymouth | Road Runner | First generation | 1968-1970 | 383, 440 Six Barrel, Hemi, the horn. The Superbird has its own page. Production by engine from at least two sources. |
| 32 | queued | alfa-romeo/gtv-105 | gtv-105 | seedGtv105 | Alfa Romeo | GTV | 105 Series | 1965-1974 | Sprint GT, GT Veloce, 1750 and 2000 GTV, SPICA injection on US cars. The 105 Spider has its own page. |
| 33 | queued | volkswagen/thing-type-181 | thing-type-181 | seedThingType181 | Volkswagen | Thing | Type 181 | 1973-1974 | Two US model years, Acapulco edition, why US sales ended (cite the regulation from a source). |
| 34 | queued | jeep/wrangler-tj | wrangler-tj | seedWranglerTj | Jeep | Wrangler | TJ | 1997-2006 | Coil springs, Rubicon from 2003, Unlimited (LJ) 2004-06. Frame rust. |
| 35 | queued | mg/mga | mga | seedMga | MG | MGA | | 1956-1962 | 1500, 1600, Mk II, Twin Cam and its reputation, coupe. The MGB has its own page. |
| 36 | queued | toyota/land-cruiser-100 | land-cruiser-100 | seedLandCruiser100 | Toyota | Land Cruiser | 100 Series | 1998-2007 | 2UZ-FE, AHC suspension, Lexus LX 470 in a sentence. The FJ40, 60 and 80 have their own pages. |
| 37 | queued | buick/riviera-1963-65 | riviera-1963-65 | seedRiviera196365 | Buick | Riviera | First generation | 1963-1965 | Bill Mitchell's design story from sources, the 1965 Gran Sport and clamshell headlights. |
| 38 | queued | nissan/skyline-r33 | skyline-r33 | seedSkylineR33 | Nissan | Skyline GT-R | R33 | 1995-1998 | Never sold new in the US: say so, and give import eligibility by build date from the government source. The R32 and R34 have their own pages. |
