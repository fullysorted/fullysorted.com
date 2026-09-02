/**
 * Collector car glossary — the words that actually appear in listings, auction
 * catalogue copy, inspection reports and title paperwork.
 *
 * Editorial rules for anyone adding to this file:
 *  - Definitions run one to three sentences. Plain English, specific, no filler.
 *  - Where a term is routinely used to mislead, say so in `watchOut`. That is
 *    the most useful thing this page does.
 *  - Where a term genuinely has no settled meaning, the definition must say so
 *    rather than pick a side.
 *  - `seeAlso` holds slugs, and every one of them must resolve to a real term.
 *  - Anything checked against an outside source belongs in GLOSSARY_SOURCES.
 *    Do not invent citations.
 */

export type GlossaryCategory =
  | "condition"
  | "provenance"
  | "market"
  | "mechanical"
  | "bodywork"
  | "paperwork"
  | "process"
  | "import";

export interface GlossaryTerm {
  slug: string;
  term: string;
  category: GlossaryCategory;
  definition: string;
  alsoKnownAs?: string[];
  /** How the term gets misused in listings. */
  watchOut?: string;
  /** Slugs of related terms — must resolve. */
  seeAlso?: string[];
}

export const GLOSSARY_CATEGORIES: {
  key: GlossaryCategory;
  label: string;
  blurb: string;
}[] = [
  {
    key: "condition",
    label: "Condition and restoration",
    blurb:
      "What a car has had done to it, and the vocabulary sellers use to describe how much of that work was necessary.",
  },
  {
    key: "provenance",
    label: "Provenance and documentation",
    blurb:
      "The paper and stampings that tie a specific car to a specific factory build, and the terms for cars that only look like they do.",
  },
  {
    key: "market",
    label: "Auctions and market",
    blurb:
      "How cars are priced, bid on, bought in and talked about after the sale.",
  },
  {
    key: "mechanical",
    label: "Mechanical",
    blurb:
      "Engine, drivetrain and chassis terms that turn up in inspection reports and service history.",
  },
  {
    key: "bodywork",
    label: "Bodywork and paint",
    blurb:
      "Structure, panel work and paint, where the largest hidden costs in an old car usually sit.",
  },
  {
    key: "paperwork",
    label: "Title and paperwork",
    blurb:
      "Title brands, registration documents in other markets, and the mileage disclosures attached to them.",
  },
  {
    key: "process",
    label: "Buying process",
    blurb:
      "Inspection, payment, transport and insurance: the mechanics of getting a car bought and moved.",
  },
  {
    key: "import",
    label: "Import and homologation",
    blurb:
      "The rules governing which cars can legally cross into a market, and the motorsport regulations that created many of the cars people want to import.",
  },
];

export const GLOSSARY: GlossaryTerm[] = [
  /* ───────────────────────────────── condition ───────────────────────── */
  {
    slug: "survivor",
    term: "Survivor",
    category: "condition",
    definition:
      "An unrestored car retaining a substantial proportion of its factory paint, interior, drivetrain and chassis finishes. The word has two lives: as a certification mark originating with Bloomington Gold in 1989, which requires a car to judge at least 50 percent original in three of four assessed areas, and as loose trade shorthand for anything that has never been fully restored. Nothing forces a listing to mean the former.",
    alsoKnownAs: ["Unrestored", "Original-paint car"],
    watchOut:
      "Routinely applied to cars that have had a respray, a retrim or an engine rebuild, on the reasoning that the shell was never off the frame. Ask which specific components are claimed as original and how that was established.",
    seeAlso: ["patina", "preservation-class", "correct-vs-original", "barn-find"],
  },
  {
    slug: "driver-quality",
    term: "Driver quality",
    category: "condition",
    definition:
      "A car sound enough to be used regularly without embarrassment or immediate expenditure, with cosmetic flaws that would cost real money to put right. It is a description of intent rather than a graded standard, and sits roughly at condition #3.",
    alsoKnownAs: ["Driver", "Good driver"],
    watchOut:
      "The phrase absorbs an enormous range. It is used both for a tidy, sorted car with tired paint and for a car with structural rust that currently happens to run.",
    seeAlso: ["condition-3", "condition-4", "rolling-restoration"],
  },
  {
    slug: "concours",
    term: "Concours",
    category: "condition",
    definition:
      "A standard of presentation prepared for judged competition, where finish, correctness of fasteners, markings and materials are assessed against factory specification. Serious concours cars are frequently better finished than they were when new, and are not intended for regular road use.",
    alsoKnownAs: ["Concours d'Elegance standard", "Condition #1"],
    watchOut:
      "\"Concours\" in a listing usually means \"very clean\" rather than \"has been judged\". A car that has actually competed will have scores and a class; ask for them.",
    seeAlso: ["condition-1", "preservation-class", "correct-vs-original"],
  },
  {
    slug: "barn-find",
    term: "Barn find",
    category: "condition",
    definition:
      "A car recovered from long-term static storage, typically undriven for years or decades and sold in the state it was found. The value proposition is untouched originality and the discovery story; the liability is everything that perishes when a car sits.",
    watchOut:
      "The phrase has become a marketing device applied to any dusty car, including ones deliberately staged. It also carries no implication that the car is complete, that it turns over, or that the paperwork exists.",
    seeAlso: ["garage-find", "survivor", "recommissioning", "patina"],
  },
  {
    slug: "garage-find",
    term: "Garage find",
    category: "condition",
    definition:
      "The same idea as a barn find, applied to a car stored indoors in a domestic garage. The distinction is usually favorable, since a dry garage is a far better environment than an agricultural building.",
    watchOut:
      "Used interchangeably with \"barn find\" for effect. Neither term tells you anything about the storage conditions, which is the only part that matters mechanically.",
    seeAlso: ["barn-find", "recommissioning"],
  },
  {
    slug: "recommissioning",
    term: "Recommissioning",
    category: "condition",
    definition:
      "Returning a car that has stood unused to safe running order: fluids, fuel system, brakes, tires, perishable rubber and electrics. It is explicitly not restoration, and on a long-stored car it routinely runs into five figures.",
    alsoKnownAs: ["Sorting", "Fettling"],
    watchOut:
      "\"Only needs recommissioning\" is one of the most expensive sentences in a listing. It typically excludes anything found once the car is running.",
    seeAlso: ["barn-find", "garage-find", "rolling-restoration"],
  },
  {
    slug: "rolling-restoration",
    term: "Rolling restoration",
    category: "condition",
    definition:
      "Restoring a car in stages while continuing to use it, rather than taking it off the road for a single program of work. Done properly it spreads cost and keeps the car exercised; described loosely it means work has been started and not finished.",
    watchOut:
      "Frequently used to frame deferred maintenance as a plan. Ask what has been completed, what is outstanding, and whether the completed work was done to the standard the rest will need to match.",
    seeAlso: ["driver-quality", "frame-on-restoration", "recommissioning"],
  },
  {
    slug: "frame-off-restoration",
    term: "Frame-off restoration",
    category: "condition",
    definition:
      "A restoration in which the body is separated from the chassis so that both can be stripped, repaired and refinished independently. It is the most complete approach for a body-on-frame car and by far the most expensive.",
    alsoKnownAs: ["Nut-and-bolt restoration", "Ground-up restoration"],
    watchOut:
      "The term is applied to unibody cars where there is no separate frame to remove, in which case it is meaningless. It also says nothing about quality: a frame-off restoration can be badly done.",
    seeAlso: [
      "frame-on-restoration",
      "rotisserie-restoration",
      "unibody-vs-body-on-frame",
    ],
  },
  {
    slug: "frame-on-restoration",
    term: "Frame-on restoration",
    category: "condition",
    definition:
      "A restoration carried out with the body left on the chassis. Perfectly legitimate where the underside is sound, and considerably cheaper, but the chassis top face, body mounts and inner structure cannot be fully inspected or refinished.",
    seeAlso: ["frame-off-restoration", "rust-repair-vs-rust-removal"],
  },
  {
    slug: "rotisserie-restoration",
    term: "Rotisserie restoration",
    category: "condition",
    definition:
      "A restoration in which the bare shell is mounted on a rotating jig so it can be turned for access to the floors and underside. It signals how the work was carried out, not how far it went.",
    watchOut:
      "Photographs of a shell on a rotisserie are used as proof of thoroughness. They prove the shell was rotated; they do not show what was welded into it.",
    seeAlso: ["frame-off-restoration", "bare-metal-respray", "patch-panel"],
  },
  {
    slug: "preservation-class",
    term: "Preservation class",
    category: "condition",
    definition:
      "A judged class at concours events for original, unrestored cars, assessed on the quality and extent of surviving factory finish rather than on perfection. Its existence is why unrestored cars can now out-value restored equivalents.",
    alsoKnownAs: ["Preservation award"],
    seeAlso: ["survivor", "patina", "concours"],
  },
  {
    slug: "patina",
    term: "Patina",
    category: "condition",
    definition:
      "Honest surface aging of original finishes (dulled paint, softened brightwork, worn leather), valued as evidence of an unrestored car. Where the line falls between patina and damage is genuinely contested, and two experienced people will place it differently on the same car.",
    watchOut:
      "Used to reframe rust, failed lacquer, mismatched panels and torn trim as a virtue. Surface oxidation on a sound panel and rot through a sill are not the same thing.",
    seeAlso: ["survivor", "preservation-class", "rust-repair-vs-rust-removal"],
  },
  {
    slug: "resto-mod",
    term: "Resto-mod",
    category: "condition",
    definition:
      "A car restored to a high cosmetic standard but deliberately re-engineered with modern components: typically brakes, suspension, drivetrain, cooling or air conditioning. Value tracks the quality of the build and the reputation of the builder rather than the model's standard price guide.",
    alsoKnownAs: ["Restomod", "Pro-touring"],
    watchOut:
      "A resto-mod cannot be numbers-matching in any meaningful sense, and the original parts are frequently long gone. Ask whether they were retained and are included.",
    seeAlso: ["matching-numbers", "correct-vs-original", "money-car"],
  },
  {
    slug: "correct-vs-original",
    term: "Correct vs original",
    category: "condition",
    definition:
      "\"Original\" means the part fitted at the factory is still on the car. \"Correct\" means the part matches factory specification but is not necessarily the one the car was built with: a period-dated replacement, or a reproduction to the right pattern. The distinction drives large price differences and is the single most useful question to ask about any component.",
    alsoKnownAs: ["Date-correct", "Correct-type"],
    watchOut:
      "The two words are used interchangeably in listings, almost always in the direction that flatters the car.",
    seeAlso: ["date-coded", "matching-numbers", "refurbished", "survivor"],
  },
  {
    slug: "refurbished",
    term: "Refurbished",
    category: "condition",
    definition:
      "A component cleaned, repaired and refinished rather than replaced or fully rebuilt. Applied to trim, brightwork, wheels and instruments it is a real and desirable process; applied to mechanical assemblies it is vague and carries no defined scope.",
    watchOut:
      "\"Refurbished engine\" tells you nothing. Ask what was measured, what was replaced, who did it, and whether there is an itemised invoice.",
    seeAlso: ["rebuilt-vs-remanufactured", "top-end-rebuild"],
  },
  {
    slug: "sympathetic-restoration",
    term: "Sympathetic restoration",
    category: "condition",
    definition:
      "Repair work carried out with the deliberate aim of keeping as much original material and finish as possible, rather than replacing it. The intent is that the car reads as unrestored afterwards.",
    watchOut:
      "There is no standard behind the phrase, and it is increasingly used to describe ordinary partial restoration. It can also be used to explain away a car that has been restored inconsistently.",
    seeAlso: ["patina", "survivor", "preservation-class"],
  },

  /* ──────────────────────────────── provenance ───────────────────────── */
  {
    slug: "matching-numbers",
    term: "Matching numbers",
    category: "provenance",
    definition:
      "A claim that a car retains the major components it was built with, verified by stampings and castings that tie those components to the chassis. Its meaning is genuinely unsettled: it originates with Chevrolet's practice from 1960 of stamping a derivative of the chassis number onto the engine, and most other manufacturers never did anything equivalent, so on those cars the phrase can only ever mean date-code consistency rather than a true match.",
    alsoKnownAs: ["Numbers-matching", "Matching-numbers car"],
    watchOut:
      "Used to mean anything from a verified block stamping checked against factory records to nothing at all. It is not a defined standard, no body polices it, and a seller may be describing only the engine, only the date codes, or only what the previous owner told them. Ask which components, which numbers, and what documents them.",
    seeAlso: [
      "numbers-matching-engine",
      "numbers-matching-drivetrain",
      "born-with",
      "date-coded",
      "chassis-number",
    ],
  },
  {
    slug: "numbers-matching-engine",
    term: "Numbers-matching engine",
    category: "provenance",
    definition:
      "The engine block the car left the factory with, identified by a stamped pad or casting number that corresponds to the chassis or VIN. On marques that never stamped a chassis derivative on the engine, the strongest available claim is a block of the correct type with casting and assembly dates preceding the car's build date.",
    watchOut:
      "Engine pads can be restamped, and restamped pads are common enough on high-value American muscle cars that specialist inspection is standard practice. A photograph of a stamping is not verification.",
    seeAlso: ["matching-numbers", "date-coded", "born-with", "top-end-rebuild"],
  },
  {
    slug: "born-with",
    term: "Born-with",
    category: "provenance",
    definition:
      "A component fitted to the car on the production line and still present: the strictest form of the originality claim. Applied most often to the engine, gearbox and rear axle.",
    alsoKnownAs: ["Born-with engine", "Original to the car"],
    watchOut:
      "Distinct from a period-correct replacement of the same specification, though listings blur the two. A \"born-with\" claim needs documentary support, not just a matching date code.",
    seeAlso: ["matching-numbers", "correct-vs-original", "build-sheet"],
  },
  {
    slug: "date-coded",
    term: "Date-coded",
    category: "provenance",
    definition:
      "A part carrying a manufacturing date stamp or casting mark that falls in a plausible window before the car was assembled. Date-code consistency across castings, glass, wheels, carburettors and electrical components is how originality is assessed on marques with no chassis-to-engine stamping.",
    watchOut:
      "A correct date code proves the part is of the right period, not that it is the part this car was built with. Correctly dated components are traded specifically to make cars look original.",
    seeAlso: ["correct-vs-original", "matching-numbers", "born-with"],
  },
  {
    slug: "build-sheet",
    term: "Build sheet",
    category: "provenance",
    definition:
      "The factory document specifying how an individual car was to be assembled: model, paint, trim, drivetrain and options. Copies were frequently left in the car during assembly and turn up decades later under seats, above the fuel tank or behind trim panels.",
    watchOut:
      "A loose build sheet found in a car proves only that a build sheet is in that car. Confirm that the sequence or VIN reference on the sheet matches the shell it came out of.",
    seeAlso: ["broadcast-sheet", "window-sticker", "fender-tag", "marti-report"],
  },
  {
    slug: "window-sticker",
    term: "Window sticker",
    category: "provenance",
    definition:
      "The label required on new cars sold in the United States showing model, standard equipment, itemised options and the manufacturer's suggested retail price. An original surviving sticker is strong evidence of a car's factory specification and delivering dealer.",
    alsoKnownAs: ["Monroney label", "Monroney sticker"],
    watchOut:
      "Reproduction stickers are widely available and are legitimately produced by some documentation services. A reproduction is a reference document, not provenance; check which one is being offered.",
    seeAlso: ["build-sheet", "marti-report", "certificate-of-origin"],
  },
  {
    slug: "broadcast-sheet",
    term: "Broadcast sheet",
    category: "provenance",
    definition:
      "Chrysler's assembly-line build document, generated to instruct each station on how a specific car was to be built and often left inside the shell. In Mopar circles it carries more weight than the fender tag because it lists the full option content.",
    watchOut:
      "Reproductions exist, and a sheet found loose in a car is only useful if its sequence number ties to that car. Sun-faded, correctly aged fakes are a known problem on high-value cars.",
    seeAlso: ["build-sheet", "fender-tag", "matching-numbers"],
  },
  {
    slug: "fender-tag",
    term: "Fender tag",
    category: "provenance",
    definition:
      "A stamped metal plate riveted to the inner wing on Chrysler products, coding the car's paint, trim, body style, major options and build date. It is the quickest factory-specification check available on a Mopar and it stays with the shell.",
    alsoKnownAs: ["Data plate", "Cowl tag"],
    watchOut:
      "Tags are reproduced and restamped, and rivets are the usual tell. A tag alone does not authenticate a car; it needs to agree with the VIN, the broadcast sheet and the body stampings.",
    seeAlso: ["broadcast-sheet", "vin", "build-sheet"],
  },
  {
    slug: "marti-report",
    term: "Marti Report",
    category: "provenance",
    definition:
      "A production report generated from Ford's own database under license, covering Ford, Lincoln and Mercury vehicles built in the United States and Canada from 1967 onwards. It confirms original color, trim, axle ratio, options, build and sale dates, dealer, and how many cars were produced to the same specification.",
    watchOut:
      "It documents what Ford built against that VIN: not what is bolted to the car in front of you. A Marti Report and a car that does not match it is a common combination.",
    seeAlso: ["build-sheet", "window-sticker", "vin", "clone"],
  },
  {
    slug: "kardex",
    term: "Kardex",
    category: "provenance",
    definition:
      "Porsche's factory record card for an individual car, originating as a warranty and service record rather than a build sheet. It typically shows chassis, engine and gearbox numbers, colors, optional equipment, the delivering dealer and first owner, and any factory-recorded engine or transmission change.",
    watchOut:
      "Original Kardex copies are hard to obtain, and what is commonly supplied instead is a modern Certificate of Authenticity transcribed from the record: a useful document, but a transcription, with the transcription errors that implies.",
    seeAlso: ["heritage-certificate", "chassis-number", "matching-numbers"],
  },
  {
    slug: "certificate-of-origin",
    term: "Certificate of Origin",
    category: "provenance",
    definition:
      "The manufacturer's document establishing a vehicle's existence before it is first titled, surrendered to the state when the first registration is issued. For a never-registered car, or a kit or continuation build, it is the document that starts the title chain.",
    alsoKnownAs: ["MCO", "MSO", "Manufacturer's Statement of Origin"],
    watchOut:
      "An MCO offered with an older car usually means the car has never been titled, which can be an obstacle rather than a bonus depending on the state.",
    seeAlso: ["clean-title", "bonded-title", "continuation"],
  },
  {
    slug: "classiche-certification",
    term: "Classiche certification",
    category: "provenance",
    definition:
      "Ferrari's factory authentication program for road cars over twenty years old and for its competition models, resulting in a bound certificate (the Red Book) issued after inspection and review by a certification committee. Chassis originality is a prerequisite; bodywork, mechanical and electrical systems are also examined.",
    alsoKnownAs: ["Red Book", "Ferrari Classiche"],
    watchOut:
      "Certification is not universally treated as a positive. Some owners of significant cars decline it, and the program's willingness to certify cars fitted with factory-supplied replacement components is a live argument in the market.",
    seeAlso: ["heritage-certificate", "kardex", "matching-numbers"],
  },
  {
    slug: "heritage-certificate",
    term: "Heritage certificate",
    category: "provenance",
    definition:
      "A manufacturer or marque-archive document confirming a car's original specification and build details from factory records, issued under various names by Jaguar, BMW, Mercedes-Benz, Porsche and others.",
    alsoKnownAs: ["Certificate of Authenticity", "Birth certificate"],
    watchOut:
      "It records what the factory built, not what survives. It also does not authenticate the shell in front of you against that record.",
    seeAlso: ["kardex", "classiche-certification", "marti-report"],
  },
  {
    slug: "chassis-number",
    term: "Chassis number",
    category: "provenance",
    definition:
      "The manufacturer's unique identifier for an individual car, stamped into the frame or structure and, on pre-1981 cars, the primary identity in the absence of a standardised VIN. In European and competition-car usage the chassis number is the car's identity for provenance purposes.",
    watchOut:
      "On cars where a shell has been replaced, or where two cars have been combined, which chassis number legitimately applies is a well-known area of dispute, particularly for competition cars with continuous racing histories.",
    seeAlso: ["vin", "matching-numbers", "kardex", "tool-room-copy"],
  },
  {
    slug: "vin",
    term: "VIN",
    category: "provenance",
    definition:
      "Vehicle Identification Number. Standardised at seventeen characters for cars built from the 1981 model year for the North American market, encoding manufacturer, model, engine, plant and sequence. Earlier cars use shorter, manufacturer-specific formats.",
    alsoKnownAs: ["Vehicle Identification Number"],
    watchOut:
      "Pre-1981 numbers vary in length and format, which routinely breaks online history checks and insurance and registration systems: an absent record for an older car usually means the format was rejected, not that the car is suspect.",
    seeAlso: ["chassis-number", "fender-tag", "clean-title", "odometer-discrepancy"],
  },
  {
    slug: "continuation",
    term: "Continuation",
    category: "provenance",
    definition:
      "A car built by the original manufacturer, to the original specification and usually within the original chassis-number sequence, after production had ended. Jaguar's Lightweight E-Type and XKSS and Aston Martin's DB4 GT programs are the reference examples.",
    watchOut:
      "A continuation is a new car with factory sanction, not an original. The word is borrowed by third-party builders with no factory involvement, for whom \"recreation\" is the accurate term.",
    seeAlso: ["recreation", "replica", "tool-room-copy", "certificate-of-origin"],
  },
  {
    slug: "recreation",
    term: "Recreation",
    category: "provenance",
    definition:
      "A car built to replicate a specific original, generally without factory sanction, and often on a genuine donor chassis of the same model. Common where the original was a competition variant built in tiny numbers.",
    alsoKnownAs: ["Evocation", "Evocazione"],
    watchOut:
      "Recreations built on genuine donor cars are the hardest category to police, because the chassis is real and the specification is not. The distinction between a recreation and a fraudulently represented original is documentation.",
    seeAlso: ["continuation", "tribute", "clone", "replica", "tool-room-copy"],
  },
  {
    slug: "tribute",
    term: "Tribute",
    category: "provenance",
    definition:
      "A car modified to present as a higher-specification model it was not built as: a base Mustang finished as a Shelby, a 911 finished as an RS. The term implies the seller is being open about what the car is.",
    watchOut:
      "\"Tribute\", \"clone\", \"recreation\" and \"replica\" are used interchangeably and inconsistently across markets, and none is a defined category. What matters is what the car's own paperwork says it left the factory as.",
    seeAlso: ["clone", "recreation", "replica", "marti-report"],
  },
  {
    slug: "clone",
    term: "Clone",
    category: "provenance",
    definition:
      "American usage for a car converted to appear as a rarer or more valuable variant of the same model. Functionally the same thing as a tribute; the word choice tends to reflect region and seller preference rather than any difference in the car.",
    watchOut:
      "A well-executed clone can carry correct tags, correct drivetrain and correct trim codes. The VIN and the factory build record are what separate it from the real thing, which is why documentation services exist.",
    seeAlso: ["tribute", "recreation", "marti-report", "fender-tag"],
  },
  {
    slug: "replica",
    term: "Replica",
    category: "provenance",
    definition:
      "A car built from scratch to resemble another model, typically on a purpose-made or donor chassis with no relationship to the original manufacturer. Cobra and Lancia Stratos replicas are the volume examples.",
    watchOut:
      "Replicas are legitimate and often well engineered, but they are titled and valued as what they are. Some are registered on donor-car paperwork of an entirely different model, which affects insurance and resale.",
    seeAlso: ["recreation", "continuation", "tool-room-copy", "certificate-of-origin"],
  },
  {
    slug: "tool-room-copy",
    term: "Tool-room copy",
    category: "provenance",
    definition:
      "A recreation built to original drawings using original or original-pattern tooling, often by former factory personnel or the specialist who built the originals. The top of the recreation hierarchy in construction quality.",
    watchOut:
      "It remains a recreation regardless of who built it or what tooling was used. The phrase carries authority it has not earned when applied loosely.",
    seeAlso: ["continuation", "recreation", "replica", "chassis-number"],
  },

  /* ────────────────────────────────── market ─────────────────────────── */
  {
    slug: "reserve",
    term: "Reserve",
    category: "market",
    definition:
      "The confidential minimum the seller will accept, agreed with the auction house before the sale. Bidding below it does not create a sale, and the reserve is normally not disclosed to bidders.",
    watchOut:
      "A reserve set well above the market is the usual cause of a car appearing at three consecutive sales. Check whether a car has run before and at what level it stalled.",
    seeAlso: ["no-reserve", "bought-in", "no-sale", "provisional-bid"],
  },
  {
    slug: "no-reserve",
    term: "No reserve",
    category: "market",
    definition:
      "The car sells to the highest bid regardless of level. It concentrates bidding and generally produces stronger results than a reserved consignment of the same car, because bidders know a sale will occur.",
    alsoKnownAs: ["Absolute auction", "Selling regardless"],
    watchOut:
      "Genuinely no-reserve lots occasionally sell far below market. Some houses permit the seller or an agent to bid, which is not the same thing as no reserve. Read the conditions of sale.",
    seeAlso: ["reserve", "hammer-price", "well-bought"],
  },
  {
    slug: "hammer-price",
    term: "Hammer price",
    category: "market",
    definition:
      "The winning bid as called by the auctioneer, before buyer's premium, taxes and fees. It is the number reported in most auction results.",
    watchOut:
      "Comparing a hammer price to an all-in private sale price understates the auction car by the premium, commonly ten percent or more. Establish which figure a quoted comp refers to.",
    seeAlso: ["buyers-premium", "comp", "sellers-commission"],
  },
  {
    slug: "buyers-premium",
    term: "Buyer's premium",
    category: "market",
    definition:
      "A percentage of the hammer price added to the invoice and paid by the buyer to the auction house. Rates vary by house and are often tiered, falling as the hammer price rises.",
    watchOut:
      "The premium is frequently itself taxable, and online platforms sometimes cap it in absolute terms. Work out the total invoice before bidding, not after.",
    seeAlso: ["hammer-price", "sellers-commission"],
  },
  {
    slug: "sellers-commission",
    term: "Seller's commission",
    category: "market",
    definition:
      "The percentage of the hammer price the consignor pays the auction house, separate from the buyer's premium. On high-value or heavily contested consignments it is routinely negotiated down, sometimes to zero.",
    alsoKnownAs: ["Vendor's commission", "Seller's fee"],
    seeAlso: ["buyers-premium", "consignment", "hammer-price"],
  },
  {
    slug: "bought-in",
    term: "Bought-in",
    category: "market",
    definition:
      "An auction lot that failed to reach its reserve and was retained by the seller. The auction house records it as unsold, and the highest bid is a matter of record even though no sale occurred.",
    alsoKnownAs: ["BI", "Unsold"],
    watchOut:
      "A bought-in lot's high bid gets quoted as if it were a sale price. It is a bid nobody had to honor, and it sets a ceiling rather than a value.",
    seeAlso: ["no-sale", "reserve", "post-block-sale", "provisional-bid"],
  },
  {
    slug: "no-sale",
    term: "No-sale",
    category: "market",
    definition:
      "The outcome when a lot crosses the block without meeting its reserve. Functionally the same event as a bought-in, described from the sale-result side rather than the auction-house side.",
    watchOut:
      "Repeated no-sales attach to a car's record and are visible in auction databases. A car with three no-sales in eighteen months is telling you something about the seller's expectations.",
    seeAlso: ["bought-in", "reserve", "post-block-sale"],
  },
  {
    slug: "provisional-bid",
    term: "Provisional bid",
    category: "market",
    definition:
      "The highest bid on a lot that did not meet its reserve, held open so the auction house can put it to the seller after the lot leaves the block. Many bought-in cars convert to sales this way.",
    alsoKnownAs: ["Referred bid", "Subject to confirmation"],
    watchOut:
      "A provisional bid usually binds the bidder for a stated period while the seller decides. Check how long you are committed before making one.",
    seeAlso: ["post-block-sale", "bought-in", "reserve"],
  },
  {
    slug: "post-block-sale",
    term: "Post-block sale",
    category: "market",
    definition:
      "A sale agreed after the lot has been through the ring unsold, negotiated by the auction house between the underbidder and the seller, usually within a defined window after the auction.",
    alsoKnownAs: ["After-sale", "Sold post-block"],
    watchOut:
      "Post-block results are reported inconsistently. Some databases record them as sales at the negotiated figure, others as no-sales, which distorts comparables for that model.",
    seeAlso: ["provisional-bid", "bought-in", "comp"],
  },
  {
    slug: "comp",
    term: "Comp",
    category: "market",
    definition:
      "A comparable: a recorded sale of a similar car used to argue a value. Useful comps match on specification, condition, documentation, mileage and market, and are recent enough to reflect current conditions.",
    alsoKnownAs: ["Comparable", "Comparable sale"],
    watchOut:
      "Comps are selected to support a position. Sellers quote the strongest result for the model; buyers quote the weakest. Ask what the excluded sales did, and whether the quoted figure includes premium.",
    seeAlso: ["hammer-price", "market-correct", "book-value", "post-block-sale"],
  },
  {
    slug: "market-correct",
    term: "Market-correct",
    category: "market",
    definition:
      "A price consistent with recent comparable sales, neither a bargain nor an outlier. The term appears in auction analysis to describe a result that needs no explanation.",
    watchOut:
      "It is a judgement, not a measurement, and it depends entirely on which comps the speaker chose. Sellers use it to mean \"do not negotiate\".",
    seeAlso: ["comp", "well-bought", "money-car", "book-value"],
  },
  {
    slug: "money-car",
    term: "Money car",
    category: "market",
    definition:
      "The specification of a model that carries a substantial premium over its siblings: typically the right engine, gearbox, color combination and options, in the right production year. On some models the money car is worth several times a standard example.",
    watchOut:
      "Which specification counts as the money car shifts with fashion and is argued over within every marque community. It is also exactly the specification that gets cloned.",
    seeAlso: ["clone", "tribute", "comp", "market-correct"],
  },
  {
    slug: "well-bought",
    term: "Well-bought",
    category: "market",
    definition:
      "Auction-report shorthand for a car that sold below what the commentator considers its market level. The opposite verdict is \"well-sold\".",
    watchOut:
      "It is one person's opinion published shortly after a sale, with no visibility of the car's condition report or any undisclosed issues. Cars are often well-bought for a reason.",
    seeAlso: ["market-correct", "comp", "hammer-price"],
  },
  {
    slug: "condition-1",
    term: "Condition #1",
    category: "market",
    definition:
      "The top grade in the four-point scale used by valuation guides: a concours car, better than the day it left the factory, with correct materials and finishes throughout. Very few cars in any model population qualify.",
    alsoKnownAs: ["Concours", "#1 condition"],
    watchOut:
      "Price guides publish a #1 value for every model, which encourages sellers to quote it. Actual #1 cars are rare and generally known within their marque community.",
    seeAlso: ["condition-2", "concours", "book-value"],
  },
  {
    slug: "condition-2",
    term: "Condition #2",
    category: "market",
    definition:
      "An excellent car, capable of winning a local or regional show, with flaws visible only on close inspection and performance equal to a good new example of its era. The realistic top end for a car that is actually used.",
    alsoKnownAs: ["Excellent", "#2 condition"],
    seeAlso: ["condition-1", "condition-3", "book-value"],
  },
  {
    slug: "condition-3",
    term: "Condition #3",
    category: "market",
    definition:
      "A good, sound, well-functioning car suitable for regular use, which looks presentable to a casual observer but may carry some incorrect components and visible wear. Most cars offered as \"driver quality\" belong here.",
    alsoKnownAs: ["Good", "#3 condition", "Driver"],
    seeAlso: ["condition-2", "condition-4", "driver-quality"],
  },
  {
    slug: "condition-4",
    term: "Condition #4",
    category: "market",
    definition:
      "A fair car: running and usable, with obvious wear such as pitted chrome, chipped glass, dents and imperfect paint, but complete and not missing major components.",
    alsoKnownAs: ["Fair", "#4 condition"],
    watchOut:
      "The scale stops at #4. Cars needing full restoration or that do not run sit below the scale entirely and are valued as projects, not as #4 cars.",
    seeAlso: ["condition-3", "driver-quality", "rolling-restoration"],
  },
  {
    slug: "book-value",
    term: "Book value",
    category: "market",
    definition:
      "A figure from a published valuation guide for a given model in a given condition grade. Guides are compiled from recorded sales and lag the market, sometimes by several months.",
    watchOut:
      "Book value is a starting point, not a price. Guides cannot see documentation quality, option content, color or ownership history, all of which move real prices well outside the published band.",
    seeAlso: ["condition-1", "condition-4", "comp", "appraisal-vs-valuation"],
  },
  {
    slug: "private-treaty",
    term: "Private treaty",
    category: "market",
    definition:
      "A negotiated sale between buyer and seller, sometimes brokered by an auction house outside its public sales. It offers confidentiality and no premium, at the cost of the price discovery an open auction provides.",
    alsoKnownAs: ["Private sale"],
    watchOut:
      "Private treaty prices are not published, so they do not become comps and cannot be verified when quoted later.",
    seeAlso: ["brokerage", "comp", "escrow"],
  },
  {
    slug: "deaccession",
    term: "Deaccession",
    category: "market",
    definition:
      "The formal disposal of a car from a museum or institutional collection, usually under a governing policy and often through public auction. Deaccessioned cars arrive with institutional records, which is a provenance advantage.",
    watchOut:
      "Museum ownership is not a condition guarantee. Static display cars frequently have not run in years and need full recommissioning.",
    seeAlso: ["recommissioning", "private-treaty", "heritage-certificate"],
  },

  /* ──────────────────────────────── mechanical ───────────────────────── */
  {
    slug: "numbers-matching-drivetrain",
    term: "Numbers-matching drivetrain",
    category: "mechanical",
    definition:
      "A claim extending the matching-numbers argument beyond the engine to the gearbox and rear axle, verified by stamped or cast identifiers and date codes on each unit. On most marques these are date codes rather than chassis derivatives, so the claim is one of consistency rather than proof.",
    watchOut:
      "Gearboxes and axles are consumable. A car with its original engine and a replaced gearbox is common and often disclosed only if asked about directly.",
    seeAlso: ["matching-numbers", "numbers-matching-engine", "date-coded", "limited-slip-differential"],
  },
  {
    slug: "rebuilt-vs-remanufactured",
    term: "Rebuilt vs remanufactured",
    category: "mechanical",
    definition:
      "\"Rebuilt\" generally means the original unit was disassembled and the parts found to be worn were replaced. \"Remanufactured\" generally implies a production process restoring the unit to a defined specification with all wear items replaced regardless of measured condition. Neither term is legally defined for engines, and usage varies between suppliers.",
    watchOut:
      "Both words appear on invoices for work as limited as new rings and a hone. The document that matters is an itemised bill showing what was measured, what was machined and what was replaced.",
    seeAlso: ["top-end-rebuild", "refurbished", "compression-test"],
  },
  {
    slug: "top-end-rebuild",
    term: "Top-end rebuild",
    category: "mechanical",
    definition:
      "Work confined to the cylinder heads and valvetrain (valves, guides, seats, springs and gaskets) without disturbing the crankshaft, bearings or pistons. Legitimate and common, but it addresses only half the engine.",
    watchOut:
      "Frequently described in listings simply as \"engine rebuilt\". A fresh top end on a bottom end with high mileage can mask, and sometimes accelerate, wear below.",
    seeAlso: ["rebuilt-vs-remanufactured", "compression-test", "leak-down-test", "blow-by"],
  },
  {
    slug: "compression-test",
    term: "Compression test",
    category: "mechanical",
    definition:
      "Measuring the peak pressure each cylinder generates while cranking, to assess sealing. Absolute numbers vary by engine design; the useful information is the spread between cylinders, with more than about ten percent variance indicating a problem.",
    watchOut:
      "A compression test tells you that a cylinder is down, not why. It should be followed by a leak-down test before any conclusion is drawn about cost.",
    seeAlso: ["leak-down-test", "blow-by", "ppi"],
  },
  {
    slug: "leak-down-test",
    term: "Leak-down test",
    category: "mechanical",
    definition:
      "Pressurising each cylinder at top dead center and measuring the percentage of air escaping, while listening for where it goes: the exhaust indicates exhaust valves, the intake indicates intake valves, the crankcase indicates rings, the cooling system indicates a head gasket or crack.",
    alsoKnownAs: ["Leakdown test", "Cylinder leakage test"],
    watchOut:
      "The percentage alone means little without the accompanying diagnosis of where the air was going. Ask for both figures and observations.",
    seeAlso: ["compression-test", "blow-by", "ppi", "top-end-rebuild"],
  },
  {
    slug: "blow-by",
    term: "Blow-by",
    category: "mechanical",
    definition:
      "Combustion gases escaping past the piston rings into the crankcase, visible as vapour from the oil filler or breather and detectable as crankcase pressure. Some is normal on any engine; a lot indicates worn rings or bores.",
    watchOut:
      "Sellers attribute heavy blow-by to a cold engine or an old design. Assess it at operating temperature and cross-reference with a leak-down test.",
    seeAlso: ["leak-down-test", "compression-test", "rebuilt-vs-remanufactured"],
  },
  {
    slug: "cam-belt-interval",
    term: "Cam belt interval",
    category: "mechanical",
    definition:
      "The manufacturer's replacement schedule for a toothed rubber camshaft drive belt, specified in both mileage and elapsed years. On interference engines a failed belt destroys valves and often pistons, so the time element applies regardless of use.",
    alsoKnownAs: ["Timing belt service", "Cambelt"],
    watchOut:
      "On mid-engined Ferraris of the 1980s and 1990s the job requires engine-out access and is a five-figure service. \"Belts done\" in a listing needs a dated invoice naming the shop, not a verbal assurance.",
    seeAlso: ["ppi", "twin-cam", "fuel-bladder"],
  },
  {
    slug: "fuel-bladder",
    term: "Fuel bladder",
    category: "mechanical",
    definition:
      "A flexible rubber fuel cell used in place of a rigid tank on some competition-derived road cars, notably Lamborghini and certain Ferrari models. Bladders perish with age and have a defined replacement interval independent of mileage.",
    watchOut:
      "Replacement is expensive and frequently deferred, and a perished bladder can leave a car undrivable and unsaleable. On affected models the date of last replacement is a specific question to ask.",
    seeAlso: ["cam-belt-interval", "ppi", "recommissioning"],
  },
  {
    slug: "dry-sump",
    term: "Dry sump",
    category: "mechanical",
    definition:
      "A lubrication system storing oil in a separate tank rather than in a sump beneath the crankshaft, using scavenge pumps to return it. It allows a lower engine installation and maintains oil pressure under sustained cornering loads.",
    watchOut:
      "Dry-sump cars have specific warm-up and oil-level checking procedures, and a level read at the wrong moment is meaningless. It also adds pumps, lines and a tank to the list of things that leak.",
    seeAlso: ["twin-cam", "flat-plane-crank"],
  },
  {
    slug: "twin-cam",
    term: "Twin-cam",
    category: "mechanical",
    definition:
      "An engine with two camshafts operating the valves in each cylinder head, one for intake and one for exhaust, allowing better breathing and higher engine speeds than a single-camshaft design.",
    alsoKnownAs: ["DOHC", "Double overhead cam", "Bialbero"],
    watchOut:
      "On a V-configuration engine \"twin-cam\" can mean one camshaft per bank (two in total) rather than four. The unambiguous descriptions are DOHC and quad-cam.",
    seeAlso: ["cam-belt-interval", "hemi", "dry-sump"],
  },
  {
    slug: "hemi",
    term: "Hemi",
    category: "mechanical",
    definition:
      "An engine with hemispherical combustion chambers, allowing large valves set at a wide angle and a central spark plug. Numerous manufacturers built hemispherical-chamber engines, but in American collector usage Hemi is a Chrysler trade name and refers to their specific engine families.",
    watchOut:
      "In muscle-car listings \"Hemi\" implies the Chrysler 426 and its value. Applied generically to any hemispherical-chamber engine it is technically defensible and commercially misleading.",
    seeAlso: ["twin-cam", "matching-numbers", "money-car"],
  },
  {
    slug: "flat-plane-crank",
    term: "Flat-plane crank",
    category: "mechanical",
    definition:
      "A V8 crankshaft with its crankpins arranged at 180 degrees, giving even firing between banks, lower rotating mass and higher permissible engine speeds, at the cost of secondary vibration. Characteristic of Ferrari V8s and of some later purpose-built performance engines.",
    alsoKnownAs: ["180-degree crank"],
    seeAlso: ["twin-cam", "dry-sump"],
  },
  {
    slug: "limited-slip-differential",
    term: "Limited slip differential",
    category: "mechanical",
    definition:
      "A differential that limits the speed difference between driven wheels so torque is not lost entirely to the wheel with least grip. Manufacturers marketed their own designs under trade names: Positraction at GM, Traction-Lok at Ford, Sure-Grip at Chrysler.",
    alsoKnownAs: ["LSD", "Positraction", "Posi", "Sure-Grip", "Traction-Lok"],
    watchOut:
      "Clutch-type units wear out and can be functionally open while still carrying the correct axle tag. A tag is a specification claim, not a working component.",
    seeAlso: ["numbers-matching-drivetrain", "date-coded", "overdrive"],
  },
  {
    slug: "overdrive",
    term: "Overdrive",
    category: "mechanical",
    definition:
      "An additional ratio above direct drive, reducing engine speed at cruising pace. On older British cars it is typically an electrically engaged epicyclic unit bolted to the back of the gearbox (Laycock de Normanville being the common type), operable in selected gears.",
    watchOut:
      "Overdrive was often optional and is a meaningful value difference. A non-functioning unit is usually a solenoid, an earth or low oil level, but can be an expensive internal rebuild.",
    seeAlso: ["synchro", "limited-slip-differential", "numbers-matching-drivetrain"],
  },
  {
    slug: "synchro",
    term: "Synchro",
    category: "mechanical",
    definition:
      "The synchroniser mechanism that matches shaft speeds so a gear can be engaged without clashing. Worn synchros produce a crunch on a swift change, most commonly into second gear.",
    alsoKnownAs: ["Synchromesh", "Baulk ring"],
    watchOut:
      "Many pre-war and early post-war gearboxes have no synchro on first, or none at all, and require double-declutching. That is correct operation, not a fault. Establish which the car has before diagnosing.",
    seeAlso: ["overdrive", "numbers-matching-drivetrain"],
  },
  {
    slug: "kingpin",
    term: "Kingpin",
    category: "mechanical",
    definition:
      "The pivot pin about which a front stub axle steers on a beam-axle or older independent front suspension, running in bushes that require periodic greasing and wear over time.",
    watchOut:
      "Worn kingpins present as vague steering and are frequently attributed to steering box wear instead. Replacement means reaming bushes to fit, which is machine-shop work rather than a bolt-on repair.",
    seeAlso: ["swing-axle", "drum-vs-disc"],
  },
  {
    slug: "swing-axle",
    term: "Swing axle",
    category: "mechanical",
    definition:
      "A rear suspension design in which each half-shaft pivots only at the differential, so wheel camber changes markedly with suspension travel. Used on early Volkswagens, Porsches, Triumphs and Corvairs among others.",
    watchOut:
      "The geometry's tendency to tuck a wheel under at the limit is well documented, and many cars were later fitted with camber compensators or converted to independent designs. Whether a car retains its original setup affects both handling and originality.",
    seeAlso: ["kingpin", "correct-vs-original"],
  },
  {
    slug: "drum-vs-disc",
    term: "Drum vs disc",
    category: "mechanical",
    definition:
      "Drum brakes act by expanding shoes against the inside of a rotating drum; disc brakes clamp pads against an exposed rotor. Discs resist heat fade far better, which is why disc conversions are among the most common modifications to pre-1960s cars.",
    watchOut:
      "A front disc conversion is a safety improvement and an originality deduction at the same time. Ask whether the original components were kept, because putting a car back to standard later is otherwise expensive.",
    seeAlso: ["correct-vs-original", "resto-mod", "kingpin"],
  },

  /* ──────────────────────────────── bodywork ─────────────────────────── */
  {
    slug: "bondo",
    term: "Bondo",
    category: "bodywork",
    definition:
      "A trade name for polyester body filler, used generically for any plastic filler. A thin skim over a properly repaired panel is normal professional practice; thick filler is used to disguise damage or corrosion rather than repair it.",
    alsoKnownAs: ["Body filler", "Plastic filler", "P38"],
    watchOut:
      "Filler depth is measurable with a paint gauge in seconds and a magnet finds it for free. Any panel reading dramatically thicker than the rest of the car warrants an explanation.",
    seeAlso: ["lead-loading", "patch-panel", "rust-repair-vs-rust-removal", "ppi"],
  },
  {
    slug: "lead-loading",
    term: "Lead loading",
    category: "bodywork",
    definition:
      "The pre-filler method of smoothing panel joints and low spots with body solder, wiped into place with a wooden paddle. Factories used it at roof and quarter-panel seams into the 1970s, and its presence at those seams is original rather than a sign of repair.",
    alsoKnownAs: ["Body solder", "Leading"],
    watchOut:
      "Factory lead at a seam is often reported as accident repair by inspectors unfamiliar with the era. Equally, lead is used in restoration to hide amateur repairs from a magnet.",
    seeAlso: ["bondo", "patch-panel", "panel-gap"],
  },
  {
    slug: "panel-gap",
    term: "Panel gap",
    category: "bodywork",
    definition:
      "The spacing between adjacent body panels. Consistency matters more than tightness, and the benchmark is the car's own factory standard: many desirable cars left the line with gaps that would be unacceptable today.",
    watchOut:
      "Uneven gaps indicate a shell that has been apart, hung badly, or damaged. Judge each side against the other and against known-good examples of the same model, not against a modern car.",
    seeAlso: ["shut-line", "rotisserie-restoration", "unibody-vs-body-on-frame"],
  },
  {
    slug: "shut-line",
    term: "Shut line",
    category: "bodywork",
    definition:
      "British usage for the visible line where an opening panel meets fixed bodywork. Where \"panel gap\" describes the width of the space, \"shut line\" describes the line itself and whether it runs straight and parallel.",
    alsoKnownAs: ["Shutline"],
    seeAlso: ["panel-gap", "replacement-panel"],
  },
  {
    slug: "respray",
    term: "Respray",
    category: "bodywork",
    definition:
      "Repainting a car, in whole or in part. The word alone specifies nothing about preparation, extent, or whether the car was disassembled, which is precisely the range that separates a two-thousand pound job from a forty-thousand pound one.",
    alsoKnownAs: ["Repaint", "Refinish"],
    watchOut:
      "\"Full respray\" is used both for a bare-metal, glass-out refinish and for a blow-over in the original color. Ask what came off the car, what was stripped, and who did it.",
    seeAlso: ["blow-over", "bare-metal-respray", "colour-change"],
  },
  {
    slug: "blow-over",
    term: "Blow-over",
    category: "bodywork",
    definition:
      "A quick repaint applied over existing paint with minimal preparation and without removing trim, glass or door seals. It improves appearance at distance and lasts poorly, and overspray on rubbers and behind badges is the standard tell.",
    alsoKnownAs: ["Blow-in", "Scuff and shoot"],
    watchOut:
      "Frequently sold as a respray. A blow-over also hides filler, corrosion and the previous color, and paint applied over failing paint fails with it.",
    seeAlso: ["respray", "bare-metal-respray", "colour-change"],
  },
  {
    slug: "colour-change",
    term: "Color change",
    category: "bodywork",
    definition:
      "A car repainted in a color other than the one it was built in. Verifiable against the body tag, build sheet or factory record, and visible in door shuts, under carpet and in the boot.",
    alsoKnownAs: ["Off-color", "Repainted from original"],
    watchOut:
      "A color change is a value deduction on documented cars and is regularly omitted from listings. Original-color evidence is easy to look for and easy for a seller to avoid photographing.",
    seeAlso: ["respray", "build-sheet", "fender-tag", "correct-vs-original"],
  },
  {
    slug: "bare-metal-respray",
    term: "Bare-metal respray",
    category: "bodywork",
    definition:
      "Stripping the body to clean steel before refinishing, so that all previous paint, filler and any hidden corrosion is exposed and dealt with. It is the most thorough approach and the only one that guarantees what is underneath the new paint.",
    alsoKnownAs: ["Down to bare metal", "Full strip"],
    watchOut:
      "The claim is common and the photographic evidence rare. A genuine bare-metal job produces a documented sequence of images; without them the claim is unverifiable after the fact.",
    seeAlso: ["respray", "blow-over", "rotisserie-restoration", "bondo"],
  },
  {
    slug: "rust-repair-vs-rust-removal",
    term: "Rust repair vs rust removal",
    category: "bodywork",
    definition:
      "Removal means cutting corroded steel out entirely and letting in sound metal. Repair, as commonly practiced, can mean anything from that down to treating, filling and painting over corrosion that remains in the panel. Only the first stops the process.",
    watchOut:
      "\"Rust treated\" and \"rust repaired\" are the phrases doing the work here. Ask whether metal was cut out, what was let in, and whether the inner structure behind the visible repair was addressed.",
    seeAlso: ["patch-panel", "replacement-panel", "bondo", "patina"],
  },
  {
    slug: "patch-panel",
    term: "Patch panel",
    category: "bodywork",
    definition:
      "A section of steel fabricated or bought in to replace a localised corroded area, butt-welded or lap-welded into the existing panel. Standard, accepted repair practice when the surrounding metal is sound and the weld is dressed properly.",
    watchOut:
      "Lap-welded and seam-sealed patches trap moisture and corrode again from behind. Patches over structural areas (sills, floors, chassis rails, suspension mounts) need to be assessed for what they are hiding.",
    seeAlso: ["replacement-panel", "rust-repair-vs-rust-removal", "bondo"],
  },
  {
    slug: "replacement-panel",
    term: "Replacement panel",
    category: "bodywork",
    definition:
      "A complete new panel (wing, door, quarter, floor) fitted in place of the original. May be new old stock, a current manufacturer part, or a reproduction, and the three differ substantially in fit and in effect on originality.",
    watchOut:
      "Reproduction panel quality varies enormously by supplier and model, and poor-fitting reproductions are the usual explanation for inconsistent shut lines on an otherwise smart restoration.",
    seeAlso: ["patch-panel", "shut-line", "panel-gap", "correct-vs-original"],
  },
  {
    slug: "galvanised-chassis",
    term: "Galvanised chassis",
    category: "bodywork",
    definition:
      "A chassis given a zinc coating for corrosion protection, either at the factory (as on later Land Rover and some Alfa Romeo and Porsche production) or during restoration, where a bare frame is sent out for hot-dip galvanising.",
    watchOut:
      "A galvanised replacement chassis is a durability upgrade and an originality question at once, and on some models a replacement frame carries its own identity implications for registration.",
    seeAlso: ["chassis-number", "unibody-vs-body-on-frame", "correct-vs-original"],
  },
  {
    slug: "unibody-vs-body-on-frame",
    term: "Unibody vs body-on-frame",
    category: "bodywork",
    definition:
      "In a unibody the body panels and floor structure carry the loads as one welded assembly. In body-on-frame construction a separate ladder chassis carries the running gear and the body is bolted on top. The distinction determines how a car can be repaired and restored.",
    alsoKnownAs: ["Unitary construction", "Unitised body"],
    watchOut:
      "Structural corrosion or accident damage in a unibody is far more consequential than in a body-on-frame car, because the rusted section is the structure. \"Frame-off restoration\" claimed for a unibody car is a contradiction.",
    seeAlso: ["monocoque", "frame-off-restoration", "galvanised-chassis"],
  },
  {
    slug: "monocoque",
    term: "Monocoque",
    category: "bodywork",
    definition:
      "A structure in which the outer skin carries the loads. Used in road-car contexts more or less interchangeably with unibody, though in strict engineering and racing usage a true monocoque carries loads in the skin itself, which few production cars do.",
    watchOut:
      "The word is applied to any car without a separate chassis, and to carbon-fibre tubs, which are structurally a different thing again. In listings it usually just means \"no separate frame\".",
    seeAlso: ["unibody-vs-body-on-frame", "galvanised-chassis"],
  },

  /* ──────────────────────────────── paperwork ────────────────────────── */
  {
    slug: "clean-title",
    term: "Clean title",
    category: "paperwork",
    definition:
      "A US title carrying no damage or history brand. It records that no insurer has declared the car a total loss in a state that reported it: not that the car has never been damaged or repaired.",
    alsoKnownAs: ["Clear title"],
    watchOut:
      "Cars are moved between states specifically to shed brands, a practice known as title washing. Run the VIN through a national database rather than relying on the physical document.",
    seeAlso: ["salvage-title", "rebuilt-title", "vin", "lien"],
  },
  {
    slug: "salvage-title",
    term: "Salvage title",
    category: "paperwork",
    definition:
      "A brand applied when an insurer declares a vehicle a total loss, usually because repair cost exceeded a state-set percentage of value. A salvage-titled car generally cannot be registered for road use until it is repaired and re-inspected.",
    watchOut:
      "Thresholds and definitions differ by state, so an identical car can be salvage in one and clean in another. A salvage brand on a collector car is a permanent value deduction even after repair.",
    seeAlso: ["rebuilt-title", "clean-title", "bonded-title"],
  },
  {
    slug: "rebuilt-title",
    term: "Rebuilt title",
    category: "paperwork",
    definition:
      "A brand applied to a previously salvage-titled vehicle that has been repaired and passed a state inspection permitting it to return to the road. The brand stays with the vehicle for life.",
    alsoKnownAs: ["Reconstructed title", "Revived salvage"],
    watchOut:
      "The inspection confirms roadworthiness and that parts were not stolen. It is not an assessment of repair quality, and it says nothing about structural integrity.",
    seeAlso: ["salvage-title", "clean-title", "ppi"],
  },
  {
    slug: "bonded-title",
    term: "Bonded title",
    category: "paperwork",
    definition:
      "A title issued by a state where ownership cannot be documented, backed by a surety bond (typically for one and a half to twice the vehicle's value) that indemnifies any later claimant. The bond usually runs three to five years, after which the brand can generally be removed.",
    alsoKnownAs: ["Certificate of title, bonded", "Surety bond title"],
    watchOut:
      "A bonded title is a real title but a visible one, and a prior owner surfacing during the bond period can claim against it. Some states do not offer the process at all.",
    seeAlso: ["bonded-title-process", "lost-title", "bill-of-sale-only", "clean-title"],
  },
  {
    slug: "jump-title",
    term: "Jump title",
    category: "paperwork",
    definition:
      "An open title: one signed by the registered owner but never transferred into a subsequent seller's name, so the buyer receives a document naming someone they have never met.",
    alsoKnownAs: ["Open title", "Floating title"],
    watchOut:
      "Accepting one leaves you unable to prove the chain between the named owner and yourself, and back taxes, liens or an odometer problem attach to you. It is also illegal in most states.",
    seeAlso: ["title-jumping", "bill-of-sale-only", "lien", "clean-title"],
  },
  {
    slug: "title-jumping",
    term: "Title jumping",
    category: "paperwork",
    definition:
      "The practice of buying a vehicle and reselling it without registering it in the intermediate seller's name, so the title passes from the original owner directly to the final buyer. It is generally illegal, and is done to avoid tax, fees, dealer licensing requirements or disclosure obligations.",
    alsoKnownAs: ["Title skipping", "Curbstoning"],
    watchOut:
      "Sellers explain the mismatched name as a favor for a friend or a deceased relative's estate. Either explanation may be true; neither removes your exposure if it is not.",
    seeAlso: ["jump-title", "bill-of-sale-only", "odometer-discrepancy"],
  },
  {
    slug: "lost-title",
    term: "Lost title",
    category: "paperwork",
    definition:
      "A title the registered owner cannot produce. Where the owner is alive, traceable and matches state records, a duplicate is straightforward. Where they are not, the route is a bonded title or a state-specific alternative procedure.",
    watchOut:
      "\"Title is lost, easy to replace\" is only true when the seller is the person on record. If the last recorded owner is untraceable or deceased, the process becomes long, uncertain and occasionally impossible.",
    seeAlso: ["bonded-title", "bonded-title-process", "bill-of-sale-only"],
  },
  {
    slug: "bill-of-sale-only",
    term: "Bill of sale only",
    category: "paperwork",
    definition:
      "A car sold with no title, on a receipt alone. A handful of states title only newer vehicles and issue nothing for older ones, in which case this is normal; everywhere else it means the title problem is being transferred to you.",
    alsoKnownAs: ["No title", "BOS only"],
    watchOut:
      "Whether you can register the car depends entirely on your own state's rules, not the seller's. Confirm the route to a title before paying, not after.",
    seeAlso: ["bonded-title", "lost-title", "jump-title", "certificate-of-origin"],
  },
  {
    slug: "v5c",
    term: "V5C",
    category: "paperwork",
    definition:
      "The UK vehicle registration certificate issued by the DVLA, recording the registered keeper, the vehicle's technical details and its keeper history. It explicitly states that it is not proof of ownership: it identifies who is responsible for the vehicle, which is not the same person as the legal owner.",
    alsoKnownAs: ["Logbook", "V5", "Registration document"],
    watchOut:
      "Because it is not a title, UK buyers rely on the keeper record, a finance check and the invoice chain instead. A V5C in the seller's name proves they are the keeper, nothing more.",
    seeAlso: ["export-certificate", "lien", "kardex"],
  },
  {
    slug: "export-certificate",
    term: "Export certificate",
    category: "paperwork",
    definition:
      "The document a country issues when a vehicle is deregistered for export, showing chassis number, specification, first registration date and recorded mileage. The Japanese export certificate is the standard reference for age and mileage on JDM imports.",
    alsoKnownAs: ["De-registration certificate", "Export certificate of cancellation"],
    watchOut:
      "The translation supplied by an exporter is not the certificate. Ask for a scan of the original document, and note that a recorded odometer reading is a reading at deregistration, not a verified life history.",
    seeAlso: ["jdm", "twenty-five-year-rule", "hs-7", "tmu"],
  },
  {
    slug: "lien",
    term: "Lien",
    category: "paperwork",
    definition:
      "A creditor's legal claim against a vehicle, recorded on the title, that must be discharged before clear ownership transfers. Outstanding finance is the common case; a repairer's lien for unpaid work is the other.",
    alsoKnownAs: ["Encumbrance", "Outstanding finance"],
    watchOut:
      "A lien follows the car, not the borrower. Check for one before payment, and where finance is outstanding pay the lienholder directly rather than the seller.",
    seeAlso: ["clean-title", "escrow", "v5c"],
  },
  {
    slug: "odometer-discrepancy",
    term: "Odometer discrepancy",
    category: "paperwork",
    definition:
      "A recorded mileage that conflicts with an earlier record, a service history or the physical state of the car. It may indicate a rolled-back odometer, a replaced instrument cluster, a five-digit gauge that has rolled over, or a clerical error.",
    watchOut:
      "A replaced cluster is a legitimate explanation but must be documented at the time of replacement. An undocumented discrepancy attaches to the title permanently in most US states.",
    seeAlso: ["tmu", "exempt-mileage", "title-jumping", "vin"],
  },
  {
    slug: "tmu",
    term: "TMU",
    category: "paperwork",
    definition:
      "True mileage unknown. A disclosure that the reading on the odometer cannot be relied upon: because the instrument has been replaced, has rolled over, has failed, or because the history cannot be substantiated.",
    alsoKnownAs: ["True mileage unknown", "Not actual mileage"],
    watchOut:
      "On a car sold as low-mileage, TMU is the point of the sale. Establish whether the mileage claim rests on documents or on the number in the gauge.",
    seeAlso: ["odometer-discrepancy", "exempt-mileage", "export-certificate"],
  },
  {
    slug: "exempt-mileage",
    term: "Exempt mileage",
    category: "paperwork",
    definition:
      "A title notation that federal odometer disclosure was not required for the transfer. The US exemption period was extended from ten to twenty years effective 1 January 2021, applying on a rolling basis to vehicles of the 2011 model year and later; vehicles of model year 2010 and earlier remain under the old ten-year rule and are exempt.",
    alsoKnownAs: ["Odometer exempt", "Mileage exempt"],
    watchOut:
      "Exempt does not mean the mileage is unverified in fact: it means nobody was legally required to attest to it. On collector cars this is normal, and mileage claims must rest on the service and ownership record instead.",
    seeAlso: ["tmu", "odometer-discrepancy", "clean-title"],
  },

  /* ───────────────────────────────── process ─────────────────────────── */
  {
    slug: "ppi",
    term: "PPI",
    category: "process",
    definition:
      "Pre-purchase inspection. An independent assessment commissioned by the buyer, ideally by a specialist in the marque, covering structure, mechanicals, paint depth, identity numbers and documentation, and delivered as a written report with photographs.",
    alsoKnownAs: ["Pre-purchase inspection", "Buyer's inspection"],
    watchOut:
      "An inspection arranged and paid for by the seller is not a PPI. Nor is a report from the shop that has maintained or restored the car, however good that shop is.",
    seeAlso: ["compression-test", "leak-down-test", "appraisal-vs-valuation", "bondo"],
  },
  {
    slug: "escrow",
    term: "Escrow",
    category: "process",
    definition:
      "Holding purchase funds with a neutral third party who releases them once agreed conditions are met: typically title transfer and delivery. Standard practice on long-distance and international collector car sales.",
    watchOut:
      "Fraudulent escrow services are a well-established scam, usually introduced by the seller. Verify the escrow company independently and never use one whose details arrived only from the other party.",
    seeAlso: ["lien", "private-treaty", "brokerage"],
  },
  {
    slug: "transport-open-vs-enclosed",
    term: "Transport, open vs enclosed",
    category: "process",
    definition:
      "Open transport carries cars on an uncovered multi-car trailer: cheaper, more frequent, exposed to weather and road debris. Enclosed transport uses a covered trailer, usually with a lift gate, soft straps and fewer cars per load, at roughly one and a half to two times the cost.",
    watchOut:
      "\"Enclosed\" covers everything from a dedicated air-ride single-car van to a shared box trailer with wheel straps. Ask about loading method, tie-down type and how many other cars share the load.",
    seeAlso: ["consignment", "escrow", "agreed-value-vs-stated-value"],
  },
  {
    slug: "consignment",
    term: "Consignment",
    category: "process",
    definition:
      "Placing a car with an auction house or dealer to sell on the owner's behalf, with the owner retaining title until sale. Terms cover commission, reserve, entry fees, photography, storage and insurance while the car is held.",
    watchOut:
      "Entry and marketing fees are commonly payable whether or not the car sells. Establish what is owed on a no-sale before signing.",
    seeAlso: ["sellers-commission", "bought-in", "brokerage", "reserve"],
  },
  {
    slug: "brokerage",
    term: "Brokerage",
    category: "process",
    definition:
      "An agent representing a buyer or seller in a negotiated private sale, paid a fee or percentage. Buyer-side brokers source, inspect and negotiate; seller-side brokers market discreetly and manage the transaction.",
    watchOut:
      "A broker taking a fee from both sides has a conflict that should be disclosed in writing. Establish who the broker acts for before sharing your budget.",
    seeAlso: ["private-treaty", "consignment", "escrow"],
  },
  {
    slug: "appraisal-vs-valuation",
    term: "Appraisal vs valuation",
    category: "process",
    definition:
      "An appraisal is a documented opinion of a specific car's value by a named appraiser who has inspected it, prepared for a stated purpose such as insurance, estate or dispute. A valuation is a market estimate for a model in a condition grade, generally derived from published data without inspecting the individual car.",
    watchOut:
      "The words are used interchangeably in listings. An insurer, a court and a tax authority will want the first; a price guide gives you the second.",
    seeAlso: ["book-value", "agreed-value-vs-stated-value", "comp", "ppi"],
  },
  {
    slug: "agreed-value-vs-stated-value",
    term: "Agreed value vs stated value",
    category: "process",
    definition:
      "Under agreed value the insurer commits in writing to pay a set sum on a total loss, with no post-loss valuation argument. Under stated value the policy typically pays the stated amount or actual cash value, whichever is lower, so the insurer retains the option of valuing the car itself after the loss.",
    alsoKnownAs: ["Guaranteed value", "Stated amount"],
    watchOut:
      "The two are marketed in near-identical language. The distinction lives in the policy wording: look for the phrase \"or actual cash value, whichever is less\", which converts the promise into a ceiling.",
    seeAlso: ["appraisal-vs-valuation", "book-value", "transport-open-vs-enclosed"],
  },
  {
    slug: "bonded-title-process",
    term: "Bonded title process",
    category: "process",
    definition:
      "The route to a title where ownership cannot be documented: establish the state offers it, obtain a value appraisal, buy a surety bond at the state's required multiple of that value, submit it with a VIN inspection and application, and hold the branded title until the bond period expires.",
    watchOut:
      "It is a state-level process with no federal equivalent, and eligibility varies: several states will not bond a title for a vehicle over a certain age, and some do not offer bonded titles at all.",
    seeAlso: ["bonded-title", "lost-title", "bill-of-sale-only", "appraisal-vs-valuation"],
  },

  /* ────────────────────────────────── import ─────────────────────────── */
  {
    slug: "twenty-five-year-rule",
    term: "25-year rule",
    category: "import",
    definition:
      "The US exemption allowing a vehicle at least twenty-five years old to be imported without demonstrating compliance with Federal Motor Vehicle Safety Standards. Eligibility is calculated from the month and year of manufacture, not the model year, so a car built in June 2001 becomes eligible in June 2026.",
    alsoKnownAs: ["25-year exemption", "FMVSS exemption"],
    watchOut:
      "It exempts a car from NHTSA safety requirements only. EPA emissions compliance is a separate question with its own timeline, and the two are constantly conflated in seller listings.",
    seeAlso: ["twenty-one-year-epa-rule", "hs-7", "registered-importer", "jdm", "export-certificate"],
  },
  {
    slug: "twenty-one-year-epa-rule",
    term: "21-year EPA rule",
    category: "import",
    definition:
      "The EPA exemption treating a vehicle over twenty-one calendar years old as exempt from federal emissions certification, provided its engine is in original or equivalent configuration. Because it runs four years ahead of the NHTSA rule, the safety exemption is normally the binding constraint.",
    watchOut:
      "An engine swap or significant modification can defeat the exemption, and the vehicle then needs an independent commercial importer route. Individual states may impose their own emissions requirements regardless of the federal position.",
    seeAlso: ["twenty-five-year-rule", "hs-7", "federalised", "grey-market"],
  },
  {
    slug: "show-or-display",
    term: "Show or Display",
    category: "import",
    definition:
      "A NHTSA exemption permitting import of vehicles under twenty-five years old that the agency has determined to be of historical or technological significance, subject to an approved application and an annual mileage limit. Only specific models on NHTSA's list qualify.",
    watchOut:
      "It waives FMVSS requirements only: EPA emissions compliance still applies separately unless the car is over twenty-one years old. Approval is per-vehicle, not per-model, and the mileage restriction runs with the car.",
    seeAlso: ["twenty-five-year-rule", "twenty-one-year-epa-rule", "registered-importer", "hs-7"],
  },
  {
    slug: "registered-importer",
    term: "Registered Importer",
    category: "import",
    definition:
      "A firm authorized by NHTSA to bring non-conforming vehicles into FMVSS compliance and certify them. Required for any vehicle under twenty-five years old that is not otherwise exempt, and the modification work routinely runs to five figures.",
    alsoKnownAs: ["RI"],
    watchOut:
      "An RI can only work on models NHTSA has determined are capable of being brought into conformity. If the model is not on that list, no amount of money makes the car importable.",
    seeAlso: ["twenty-five-year-rule", "federalised", "hs-7", "show-or-display"],
  },
  {
    slug: "hs-7",
    term: "HS-7",
    category: "import",
    definition:
      "The NHTSA declaration form filed with US Customs when a vehicle is imported, on which the importer checks the box stating the legal basis for entry. Box 1 covers vehicles at least twenty-five years old and therefore not subject to FMVSS.",
    alsoKnownAs: ["HS-7 Declaration", "DOT form HS-7"],
    watchOut:
      "The declaration is made under penalty, and the wrong box is one of the common routes to a seized car. An EPA form 3520-1 is filed alongside it and covers a different set of exemptions.",
    seeAlso: ["twenty-five-year-rule", "twenty-one-year-epa-rule", "registered-importer", "export-certificate"],
  },
  {
    slug: "grey-market",
    term: "Gray market",
    category: "import",
    definition:
      "Vehicles imported outside the manufacturer's official distribution channel, typically to a specification never sold in that market. In the US the term attaches particularly to European cars federalized by private importers in the late 1970s and 1980s, before the rules tightened in 1988.",
    alsoKnownAs: ["Grey market", "Parallel import"],
    watchOut:
      "Period gray-market conversions vary hugely in quality and many carry non-original bumpers, lighting and emissions equipment. Whether a car can be returned to original specification and still be registered depends on the state.",
    seeAlso: ["federalised", "registered-importer", "twenty-five-year-rule"],
  },
  {
    slug: "jdm",
    term: "JDM",
    category: "import",
    definition:
      "Japanese Domestic Market: a vehicle or part built for sale in Japan rather than for export, generally right-hand drive and often to a different specification than the equivalent export model.",
    watchOut:
      "The term is used loosely for any Japanese performance car, including US-market ones. It is a specification claim, not a brand: a US-market Supra is not a JDM car, and the difference is material to both value and importability.",
    seeAlso: ["rhd-lhd", "twenty-five-year-rule", "export-certificate", "gentlemens-agreement"],
  },
  {
    slug: "rhd-lhd",
    term: "RHD / LHD",
    category: "import",
    definition:
      "Right-hand drive and left-hand drive. Determines which markets a car was built for and, in collector terms, frequently which market it is worth most in: an original RHD car is generally worth more in a right-hand-drive market and less elsewhere.",
    watchOut:
      "Converted cars exist in both directions and are a substantial value deduction. Conversion evidence shows in the bulkhead, dashboard structure, wiper sweep and pedal box, not in the position of the steering wheel.",
    seeAlso: ["jdm", "grey-market", "federalised"],
  },
  {
    slug: "federalised",
    term: "Federalized",
    category: "import",
    definition:
      "A vehicle modified to meet US federal safety and emissions requirements so it can be legally sold and registered. Period federalization typically meant new bumpers, side markers, sealed-beam headlamps, catalysts and speedometer changes.",
    alsoKnownAs: ["Federalised", "US-spec conversion"],
    watchOut:
      "Some cars described as federalized were never properly certified, and the paperwork trail from the era is often missing. Confirm the car's entry documents exist before assuming its registration is secure.",
    seeAlso: ["grey-market", "registered-importer", "hs-7", "twenty-one-year-epa-rule"],
  },
  {
    slug: "homologation",
    term: "Homologation",
    category: "import",
    definition:
      "Certifying a model as eligible for a class of competition by building a required number of road-going examples to a defined specification. The road cars produced solely to satisfy these rules (homologation specials) are among the most collectable of their eras.",
    alsoKnownAs: ["Homologation special"],
    watchOut:
      "The word is also used for regulatory type approval, an unrelated meaning. In a listing it usually signals motorsport eligibility, and the specific claim is worth checking against the FIA homologation papers for that model.",
    seeAlso: ["group-a", "group-b", "gentlemens-agreement", "money-car"],
  },
  {
    slug: "group-a",
    term: "Group A",
    category: "import",
    definition:
      "The FIA category for modified production touring and rally cars that replaced Group B as the World Rally Championship's top class from 1987. Homologation originally required 5,000 identical cars built in twelve consecutive months, reduced to 2,500 in 1993, with smaller evolution runs permitted on top.",
    watchOut:
      "Because Group A demanded volume production, its homologation specials are far more numerous than Group B's, which is why they are cheaper, not why they are less significant.",
    seeAlso: ["group-b", "homologation", "jdm"],
  },
  {
    slug: "group-b",
    term: "Group B",
    category: "import",
    definition:
      "The FIA rally category running from 1982 to 1986, requiring only 200 road-going examples for homologation, with evolution versions permitted after a further 20 cars. It was banned with effect from the end of 1986 following fatal accidents during that season.",
    watchOut:
      "\"Group B\" is applied to cars that were merely contemporary with the era, and to models homologated in Group B but never competitive. The FIA homologation papers settle whether a given model was actually homologated.",
    seeAlso: ["group-a", "homologation", "money-car"],
  },
  {
    slug: "gentlemens-agreement",
    term: "Gentlemen's agreement",
    category: "import",
    definition:
      "The informal understanding among Japanese manufacturers, from the late 1980s until the mid-2000s, to declare no more than 276 horsepower for cars sold in Japan. The figure was a published limit rather than an engineering one, and several cars of the era are widely understood to have exceeded it as built.",
    alsoKnownAs: ["276 hp limit", "The 280 PS agreement"],
    watchOut:
      "Quoted output figures for JDM performance cars of this period are therefore not reliable comparisons, and claimed dyno figures for standard cars should be read against that.",
    seeAlso: ["jdm", "homologation", "group-a"],
  },
];

export const GLOSSARY_SOURCES: { title: string; url: string; publisher: string }[] = [
  {
    title: "About Our Conditions",
    url: "https://www.hagerty.com/valuation-tools/about-our-conditions",
    publisher: "Hagerty Valuation Tools",
  },
  {
    title: "How \"numbers-matching\" came to matter for collector cars",
    url: "https://insider.hagerty.com/trends/how-numbers-matching-came-to-matter-for-collector-cars/",
    publisher: "Hagerty Insider",
  },
  {
    title: "Number matching",
    url: "https://en.wikipedia.org/wiki/Number_matching",
    publisher: "Wikipedia",
  },
  {
    title: "What Makes a Survivor?",
    url: "https://www.sportscarmarket.com/news/what-makes-a-survivor",
    publisher: "Sports Car Market",
  },
  {
    title: "Marti Reports",
    url: "https://www.martiauto.com/martireports.cfm",
    publisher: "Marti Auto Works",
  },
  {
    title: "Kardex v. Certificate of Authenticity",
    url: "https://derwhites356literature.com/KardexvCertificateofAuthenticity.html",
    publisher: "Der Whites 356 Literature",
  },
  {
    title: "Ferrari Classiche: Certification",
    url: "https://www.ferrari.com/en-EN/auto/classiche-certification",
    publisher: "Ferrari",
  },
  {
    title: "The US 25-Year Car Import Rule: What It Means",
    url: "https://www.jdmbuysell.com/learn/topics/25-year-rule/",
    publisher: "JDMbuysell",
  },
  {
    title: "Application for Permission to Import a Motor Vehicle for Show and Display",
    url: "https://www.nhtsa.gov/sites/nhtsa.gov/files/documents/app_permissionimportmotorvehicle_showanddisplay_form_111920_v3_secured.pdf",
    publisher: "NHTSA",
  },
  {
    title: "Importing classic or antique vehicles / cars for personal use",
    url: "https://www.help.cbp.gov/s/article/Article-1100",
    publisher: "U.S. Customs and Border Protection",
  },
  {
    title: "Consumer Alert: Changes to Odometer Disclosure Requirements",
    url: "https://www.nhtsa.gov/press-releases/consumer-alert-changes-odometer-disclosure-requirements",
    publisher: "NHTSA",
  },
  {
    title: "Odometer Exemption Change Effective January 1, 2021",
    url: "https://www.notary.org/article-odometer-exemption-change-effective-january-1-2021",
    publisher: "National Notary Association",
  },
  {
    title: "What is the difference between Agreed Value vs. Stated Value",
    url: "https://www.lelandwest.com/stated-value-vs-agreed-value-classic-car-insurance.cfm",
    publisher: "Leland West Insurance Brokers",
  },
  {
    title: "Bonded Titles: Frequently Asked Questions",
    url: "https://suretysolutions.com/suretynews/bonded-titles-frequently-asked-questions/",
    publisher: "Surety Solutions",
  },
  {
    title: "Title Jumping: How to Spot It, Avoid Title Skipping & Felony Risk",
    url: "https://sca.auction/blog/article/title-jumping-how-to-spot-it-avoid-title-skipping-felony-risk",
    publisher: "SCA Auction",
  },
  {
    title: "V5C logbook – your complete guide",
    url: "https://www.rac.co.uk/drive/advice/buying-and-selling-guides/v5c-logbook-your-complete-guide/",
    publisher: "RAC",
  },
  {
    title: "Group A",
    url: "https://en.wikipedia.org/wiki/Group_A",
    publisher: "Wikipedia",
  },
  {
    title: "Group B or not Group B?",
    url: "https://www.hagerty.co.uk/articles/group-b-or-not-group-b/",
    publisher: "Hagerty UK",
  },
  {
    title:
      "The Japanese Gentlemen's Agreement on Horsepower: A Failed Rule of Self-Restraint",
    url: "https://www.autoevolution.com/news/the-japanese-gentlemen-s-agreement-on-horsepower-a-failed-rule-of-self-restraint-229607.html",
    publisher: "autoevolution",
  },
];
