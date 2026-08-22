export interface ImportSection {
  id: string;
  heading: string;
  body: string;
  keyPoints?: string[];
}

export interface ImportSource {
  ref: string;
  title: string;
  url: string;
  publisher: string;
  isPrimary: boolean;
  retrieved: string;
}

export const IMPORT_SECTIONS: ImportSection[] = [
  {
    id: 'nhtsa-25-year',
    heading: 'The 25-year exemption (NHTSA)',
    body: `The federal prohibition on importing a non-conforming vehicle sits in 49 U.S.C. 30112(a), which bars any person from importing a motor vehicle "manufactured on or after the date an applicable motor vehicle safety standard ... takes effect unless the vehicle ... complies with the standard and is covered by a certification issued under section 30115". The exemption most buyers care about is one line of the exception list at 49 U.S.C. 30112(b)(9): the prohibition does not apply to "a motor vehicle that is at least 25 years old". There is no further qualification in the statute — no model list, no petition, no inspection.

The implementing regulation is 49 CFR Part 591. Section 591.5 requires that every vehicle offered for importation carry a declaration, and paragraph 591.5(i)(1) is the 25-year declaration: "The vehicle is 25 or more years old." That declaration is made on NHTSA Declaration Form HS-7, *Importation of Motor Vehicles and Motor Vehicle Equipment Subject to Public Law 100-562* (OMB 2127-0002), by checking Box 1. Box 1 on the current revision reads: "The vehicle is 25 or more years old or the equipment item was manufactured on a date when no applicable Federal Motor Vehicle Safety Standard or Theft Prevention Standard was in effect", and the box has a field for the vehicle's date of manufacture.

The point that costs people money is that the clock runs on the build date, not the model year. NHTSA's own importation FAQ states it plainly: "You should note that the 25 year period runs from the date of the vehicle's manufacture." A car sold as a model year 2001 may have been built in mid-2000 or in late 2001, and only the actual date of manufacture matters. Where the build date is not on a manufacturer's label, NHTSA's FAQ says the importer "should have documentation available such as an invoice showing the date the vehicle was first sold or a registration document showing that the vehicle was registered at least 25 years ago", and that "Absent such information, a statement from a recognized vehicle historical society identifying the age of the vehicle could be used."

The HS-7 is a sworn federal declaration. The form carries the warning that "Any person knowingly making a false declaration is subject to a fine of not more than $10,000 or imprisonment for not more than 5 years or both (18 U.S.C. 1001)." Rounding a build date up to clear the 25-year line is not an administrative shortcut; it is a false statement on a federal form.`,
    keyPoints: [
      'Statutory exemption: 49 U.S.C. 30112(b)(9) — "a motor vehicle that is at least 25 years old"',
      'Regulatory declaration: 49 CFR 591.5(i)(1) — "The vehicle is 25 or more years old"',
      'Filed on NHTSA Form HS-7, Box 1, which asks for the date of manufacture',
      'NHTSA: "the 25 year period runs from the date of the vehicle’s manufacture" — not the model year',
      'A false HS-7 declaration is prosecutable under 18 U.S.C. 1001',
    ],
  },
  {
    id: 'epa-21-year',
    heading: 'The EPA rule is separate, and it is 21 years',
    body: `Clearing NHTSA does not clear the EPA. Emissions are administered under the Clean Air Act and 40 CFR Part 85, Subpart P, and the declaration is made on EPA Form 3520-1, *Description and Declaration of Motor Vehicle or Motor Vehicle Engine* (OMB 2060-0717), filed with CBP at entry alongside the HS-7. CBP's own regulation at 19 CFR 12.73 makes the EPA requirements a condition of admissibility, and 19 CFR 12.80 does the same for the DOT safety standards. They are two independent gates on the same shipment.

The EPA's age exemption is 21 years, not 25, and it is calculated differently. Code E on Form 3520-1 covers a "vehicle at least 21 years old (calendar year of manufacture subtracted from year of importation) and in original unmodified configuration". The regulation uses the term "original production (OP) year", defined at 40 CFR 85.1502 as "the calendar year in which the motor vehicle or motor vehicle engine was originally produced by the OEM", with age determined "by subtracting the original production year of the vehicle from the calendar year of importation". So EPA's test is crude calendar arithmetic on whole years, while NHTSA's is a date-to-date test. A vehicle built in December 2005 is 21 OP years old for EPA purposes on 1 January 2026, but will not be 25 years old for NHTSA purposes until December 2030.

Two conditions attach to Code E that are easy to miss. The vehicle must be in its "original unmodified configuration", and EPA's guidance is specific about engines: in *Procedures for Importing Vehicles and Engines into the United States* (EPA-420-B-10-027) the agency states that "Vehicles at least 21 years old with replacement engines are not eligible for this exemption unless they contain equivalent or newer EPA certified engines and emission control systems." EPA's current web guidance adds that it "has long interpreted the equivalence requirement to mean that the engine must be identical to the engine that was originally installed", and directs importers to its Imports Hotline before shipping such a vehicle. An engine swap — common on JDM cars — can therefore break the EPA exemption on a car that is comfortably clear of the NHTSA 25-year line.

One nuance worth flagging rather than glossing: the codified exemption at 40 CFR 85.1511(f)(2) for a vehicle "greater than twenty OP years old" is written as conditional on importation "by a certificate holder", while EPA's own importing procedures document describes the 21-OP-year exemption as one of the exemptions available to an individual importer, and Form 3520-1 Code E is not restricted on its face. The 21-year route is used routinely by private importers, but the relationship between the regulatory text and EPA's operating practice is not something to rely on second-hand — confirm with the EPA Imports Hotline before shipping.`,
    keyPoints: [
      'EPA filing is Form 3520-1; NHTSA filing is Form HS-7. Both are filed at entry.',
      'EPA exemption Code E: at least 21 years old by calendar-year subtraction, per 40 CFR 85.1502 definition of "OP years old"',
      'EPA measures whole calendar years; NHTSA measures from the exact date of manufacture',
      'Code E requires "original unmodified configuration" — a non-original engine can void it',
      'CBP ties both regimes to admissibility: 19 CFR 12.73 (EPA), 19 CFR 12.80 (DOT)',
    ],
  },
  {
    id: 'cbp-mechanics',
    heading: 'CBP mechanics, duty rates and paperwork',
    body: `CBP is the agency that actually admits the car. Its guidance for importing a vehicle lists the documents to have at the port: "the shipper's or carrier's original bill of lading, the bill of sale, foreign registration, and any other documents covering the vehicle", plus the two agency declarations — importers must "complete EPA form 3520-1 and DOT form HS-7, declaring the emissions and safety provisions under which the vehicle is being imported."

Formal entry generates the customs paperwork a state DMV will later want to see. California's DMV registration manual, for example, requires "Evidence or documentation to prove that the vehicle was imported legally and cleared U.S. Customs and Border Protection (CBP)" and names the acceptable forms as "CBP forms 7501, 3461, 6059, 3299, or 3311, stamped or endorsed by CBP". CBP Form 7501 is the Entry Summary and is the single most important document to obtain and keep; a car without it is very hard to register and very hard to resell.

Duty is where the car-versus-truck distinction bites. CBP states that foreign-made vehicles "are generally dutiable at the following rates: Auto 2.5%, Trucks 25%, Motorcycles 2.4% or free". Those rates trace to the Harmonized Tariff Schedule: passenger cars of heading 8703 (for example subheading 8703.23.01) carry a 2.5% general rate, while goods-transport vehicles of subheadings 8704.21.01 and 8704.31.01, gross vehicle weight not exceeding 5 metric tons, carry 25%.

The 25% truck rate is not a modern protectionist measure; it is a sixty-year-old retaliation that was never withdrawn. Presidential Proclamation 3564 of 4 December 1963 (77 Stat. 1034) recited that "the European Economic Community maintains unreasonable import restrictions upon imports of poultry from the United States" and that these "directly and substantially burden United States commerce", and in response increased duties on a short list of goods. One of the four entries in that list reads: "Automobile trucks valued at $1,000 or more (provided for in item 692.05) __ 25% ad val." That is the origin of what the trade press calls the chicken tax. Classification is a CBP determination made on the vehicle as presented, so how a body style is classified is worth resolving with a broker before the car ships, not after it lands.`,
    keyPoints: [
      'Documents: bill of lading, bill of sale, foreign registration, HS-7, EPA 3520-1',
      'Duty: 2.5% passenger cars (HTS 8703), 25% goods-transport vehicles up to 5 t GVW (HTS 8704.21 / 8704.31), 2.4% or free motorcycles',
      'Keep the CBP-endorsed entry paperwork — Form 7501 in particular — for registration and resale',
      'The 25% truck rate originates in Presidential Proclamation 3564 (4 Dec 1963), retaliation for EEC poultry restrictions',
    ],
  },
  {
    id: 'show-or-display',
    heading: 'Show or Display',
    body: `Show or Display is a narrow, permission-based route for cars that are not yet 25 years old. It sits in the same regulation as the racing and research exemptions: 49 CFR 591.5(j) covers a vehicle imported "solely for the purpose of ... Show or display", and requires that "The importer has received written permission from NHTSA". On the HS-7 it is Box 10, which declares that the vehicle "is being imported solely for the purpose of show and display, and I state that I will comply with all applicable restrictions on importers of such vehicles as specified in 49 CFR 591.7."

Eligibility is decided case by case by NHTSA on a written application, and the bar is high. NHTSA's FAQ describes the qualifying class as "Certain motor vehicles that are deemed to be of unusual historical or technological significance", and sets out the general screens: "a motor vehicle will not be determined eligible for importation for purposes of show or display if more than five hundred vehicles of the same model were produced, if a version of the vehicle was originally manufactured for sale in the U.S. and certified as complying with all applicable FMVSS, or if the vehicle has been determined eligible for importation based on its capability of being modified to comply with all applicable FMVSS." NHTSA's *How to Import a Motor Vehicle for Show or Display* guidance frames the same test as whether more than 500 were produced and, if so, whether "the applicant must establish that the vehicle is of exceptional technological and/or historical significance".

The living restriction is mileage. Under 49 CFR 591.6(f)(2) the importer must state that until the vehicle "is not less than 25 years old", they will not sell it, transfer possession or title, license it or operate it on public roads except on terms NHTSA authorises; must hold an insurance policy conditioned on the vehicle not accumulating "more than 2,500 miles in any 12-month period"; must allow NHTSA to inspect the vehicle at any time to verify that; and must state that the vehicle "will not be used on the public roads unless it is in compliance with the regulations of the Environmental Protection Agency." Breach is not a paperwork matter: 49 CFR 591.7(d) provides that violating a term of the authorisation, "including a failure to allow inspection upon request to verify that the accumulated mileage of the vehicle is not more than 2,500 miles in any 12-month period, shall be considered a violation of 49 U.S.C. 30112(a) for which a civil penalty may be imposed", and "will also act to void the authorization and require the exportation of the vehicle."

The difference from the 25-year route is therefore total. The 25-year route is a declaration made at the border and the car is then an ordinary used car in federal terms. Show or Display is a licence with a locked title, a mileage cap, an inspection right and an export remedy attached, and it still has to satisfy the EPA separately.`,
    keyPoints: [
      'Regulatory basis: 49 CFR 591.5(j) (show or display) and 591.6(f)(2) (conditions); HS-7 Box 10',
      'Requires advance written permission from NHTSA on a case-by-case application',
      'General screen: more than 500 of the model produced, or a US-certified version existed, normally disqualifies',
      '2,500 miles in any 12-month period, enforced through an insurance condition and a NHTSA inspection right',
      'No sale, transfer of title or licensing until the car reaches 25 years old',
      'Does not exempt the car from EPA requirements',
    ],
  },
  {
    id: 'registered-importers',
    heading: 'Registered Importers and the RI route',
    body: `A vehicle under 25 years old that was not built to FMVSS can, in principle, be imported permanently, but only through a Registered Importer. NHTSA defines an RI as "a business that has been approved as [an RI] by the National Highway Traffic Safety Administration to import vehicles that were not originally manufactured to comply with applicable Federal Motor Vehicle Safety Standards (FMVSSs), and to perform the necessary modifications to bring the vehicles into conformance." Registration is governed by 49 CFR Part 592.

Two things must be true at once. First, NHTSA must have determined under 49 CFR Part 593 that the specific model and model year is eligible for importation — an import eligibility decision, published in the Federal Register and identified by a VSP or VCP number. Second, the importer must be an RI or be under contract with one. 49 CFR 591.5(f) states the declaration: the importer has furnished a bond "in an amount equal to 150% of the dutiable value of the vehicle", and either is a currently registered RI, or "has executed a contract or other agreement with an importer who has registered with NHTSA pursuant to part 592", and in either case NHTSA has determined the model and model year eligible. The same paragraph excludes salvage and reconstructed vehicles.

The obligations on the RI are set out at 49 CFR 592.6(a): it must confirm eligibility before importation, bring the vehicle into conformity with all applicable safety and bumper standards, and furnish a certification to NHTSA "within 120 calendar days after such entry". The 150% bond exists "to ensure that such vehicle either will be brought into conformity ... or will be exported (at no cost to the United States) by the importer or the Secretary of Homeland Security or abandoned to the United States." NHTSA's FAQ states the same bond figure as "150 percent of the declared value of the vehicle". The RI must retain the entry records, including the HS-7 declaration, for ten years.

For a private buyer the practical reading is that the RI route is narrow, expensive and dependent on someone else's continuing good standing. It only exists for models NHTSA has already ruled eligible, the list is short, and the bond does not come back until NHTSA releases it.`,
    keyPoints: [
      'RI registration under 49 CFR Part 592; model eligibility decisions under 49 CFR Part 593',
      'Declaration at entry: 49 CFR 591.5(f), HS-7 Box 3',
      'Bond of 150% of the dutiable value, released only on NHTSA acceptance of the conformity certification',
      'Conformity work and certification due within 120 calendar days of entry (49 CFR 592.6(a))',
      'The alternative to conformity is export or abandonment to the United States',
    ],
  },
  {
    id: 'state-registration',
    heading: 'State registration is a separate problem',
    body: `Federal admissibility is not permission to drive. Titling and registration are state functions, and several states apply requirements that a legally imported 25-year-old car does not automatically satisfy. This is the step that most often strands an otherwise clean import, and it is worth checking against the specific state's own published procedure before buying.

California is the clearest documented example. The DMV's *Vehicle Industry Registration Procedures Manual* section 12.050 treats any vehicle "imported and originally manufactured for use in other countries" as a direct import, and for registration requires CBP-endorsed entry documents plus "Evidence that the vehicle was modified to meet Department of Transportation (DOT) Federal Motor Vehicle Safety Standards (FMVSS)" and "Evidence that the vehicle was modified to meet U.S. Environmental Protection Agency (EPA) standards and requirements", in the form of labels or a manufacturer's letter. The manual instructs staff that for "a 1968 year model or newer auto or commercial vehicle" that does not comply with US emission requirements the applicant is to be referred to CARB, and states that "Vehicles that cannot be converted to comply with U.S. safety and U.S. and/or California emission standards cannot be registered for on-highway or off-highway use." Section 12.020 sets out a separate, narrow exemption path for used direct imports "more than two years old upon date of entry through 1975 year model", conditioned on residency or engine displacement. The manual as published does not spell out a general carve-out for vehicles admitted federally under the 25-year exemption, which is a gap buyers should resolve with the DMV and CARB directly rather than assume away.

Maine is the clearest example of a categorical state prohibition. The Maine Secretary of State convened a *Working Group to Study the Safety and Use of Nonconforming Vehicles on Maine's Roads and Highways* under Resolve Chapter 29 (2025), covering "mini trucks, antique military vehicles and any other vehicle under 10,000 pounds" that are currently barred from Maine roads. The group's 2026 final report recommended no change to current law, leaving Japanese mini trucks and ex-military vehicles unregisterable for road use in Maine, on the stated ground that they cannot meet the Federal Motor Vehicle Safety Standards for their year of manufacture.

States also move in the other direction, and quickly. The Texas bill analysis for S.B. 1816 (89th Legislature, 2025) records that "In April 2024, the Texas Department of Motor Vehicles (DMV) reversed their ban on the registration and operation of Kei miniature vehicles on public roads", and the bill was introduced to put that reversal on a statutory footing. The practical lesson is that a kei truck or an imported military vehicle can be perfectly legal federally and still be unregisterable where you live, and that the position in a given state can change within a single legislative session.`,
    keyPoints: [
      'Federal admission does not create a right to title or register in any state',
      'California DMV VIRPM 12.050 requires evidence of FMVSS and EPA compliance for direct imports, and refers non-complying 1968-or-newer vehicles to CARB',
      'Maine bars mini trucks and antique military vehicles from road registration; a 2026 state working group recommended keeping that ban',
      'Texas DMV reversed its kei vehicle registration ban in April 2024, later codified via S.B. 1816 (2025)',
      'Kei trucks and ex-military vehicles are the categories most often refused at state level',
    ],
  },
  {
    id: 'rolling-window',
    heading: 'The rolling eligibility window',
    body: `Because 49 U.S.C. 30112(b)(9) and 49 CFR 591.5(i)(1) turn on the vehicle being "at least 25 years old", and because NHTSA reads that period as running from the date of manufacture, eligibility is per-vehicle and rolls forward continuously. There is no annual list and no 1 January cut-off. A car built in March 2001 became importable in March 2026; an otherwise identical car from the same production run built in October 2001 is not importable until October 2026.

This matters most at the boundary between model years. Model year is a marketing and homologation designation, not a build date, and Japanese and European production runs routinely start months before the nominal model year. A car titled abroad as a 2002 model but built in September 2001 clears the NHTSA line in September 2026, while a 2001-model car built in November 2000 cleared it in November 2025. The evidence that decides it is the manufacturer's build plate or, failing that, the documentary evidence NHTSA's FAQ describes — a first-sale invoice, a registration document at least 25 years old, or a statement from a recognised vehicle historical society.

The EPA gate is never the binding constraint for a car in this window. EPA's 21-year test subtracts the original production year from the calendar year of importation, so in 2026 anything with an OP year of 2005 or earlier already qualifies for Code E, provided it is in original unmodified configuration. Any car old enough for the NHTSA 25-year exemption is comfortably past the EPA line. The exception is configuration, not age: a replacement engine can disqualify a car from Code E regardless of how old it is.

Sellers advertise cars as "eligible next year" on model year alone. Before committing money, get a photograph of the build plate and match the month to the month of the intended entry.`,
    keyPoints: [
      'Eligibility is per-vehicle by build date, not by model year or calendar year',
      'A car built in month M of year Y becomes NHTSA-eligible in month M of year Y+25',
      'Build plate first; NHTSA accepts first-sale invoices, 25-year-old registration documents, or a recognised historical society statement as fallback evidence',
      'EPA (21 OP years) is never the limiting factor for a car clearing the NHTSA 25-year line',
    ],
  },
  {
    id: 'enforcement',
    heading: 'Enforcement reality and the resale trap',
    body: `The government's remedy for a badly imported vehicle is seizure, and then export, abandonment or destruction. The customs authority is 19 U.S.C. 1595a(c)(2)(A): merchandise may be seized and forfeited where "its importation or entry is subject to any restriction or prohibition which is imposed by law relating to health, safety, or conservation and the merchandise is not in compliance with the applicable rule, regulation, or statute." EPA states the same in its own guidance for importers: "the U.S. Customs and Border Protection and/or EPA can seize and/or export any goods that arrive at a United States port of entry without the appropriate Independent Commercial Importer (ICI) arrangements or a valid EPA exemption, and can levy other fines and penalties." The DOT regulations contemplate the same outcome; 49 CFR 591.7(f)(1), for a vehicle whose eligibility petition fails, requires the importer to deliver the vehicle "unless it is destroyed (with destruction documented by proof), to the Secretary of Homeland Security for export, or abandon the vehicle to the United States". Destruction is not a rumour. CBP published a video release titled "CBP destroys an illegally imported Land Rover", subtitled "CBP destroys a Land Rover Defender", last modified 28 September 2016.

Prosecutions follow the paperwork rather than the car. In a Florida case announced by EPA, importers brought in roughly 45 foreign vehicles that did not meet Clean Air Act and DOT standards by falsely claiming they were for temporary personal use by foreign nationals, then "obtained American titles for the vehicles which were subsequently sold to buyers in the United States". Sentences announced on 29 March 2002 included four months' imprisonment plus four months' home detention and $165,000 restitution for one defendant, a year and a day plus $375,000 restitution for another, and $135,000 in fines and restitution for the importing company. The false-declaration exposure on the HS-7 itself is up to a $10,000 fine or five years, or both, under 18 U.S.C. 1001.

The specific risk when buying a car already in the country is that the defect travels with the vehicle and the clock is long. Under 19 U.S.C. 1621 a forfeiture action may be brought within five years of the offence being discovered, or within two years of the property's involvement being discovered, whichever is later, and where the violation arises out of fraud the five-year period for a section 1592 action runs from the discovery of the fraud — not from the date of entry. A car that has been titled and sold twice can still be seized.

The Nissan Skyline episode is the best-documented illustration of good-faith buyers being caught by someone else's paperwork. In *Final Decision To Partially Rescind Decision That Nonconforming 1990-1999 Nissan GTS and GTR Passenger Cars Are Eligible for Importation*, 71 FR 10591 (1 March 2006), NHTSA rescinded eligibility number VCP-17 after learning "through an investigation, that air bags were only installed as standard equipment on a limited range of vehicles produced within the models years covered by the petition". The rescission was prospective and did not make earlier imports unlawful, but the notice also records that "NHTSA has not released the DOT Conformance bonds on a number of Skyline vehicles that were not originally manufactured with required air bags, for want of evidence that those vehicles have been altered to comply with FMVSS No. 208 in the manner described in the petition." Ten owners who had bought in good faith asked for relief; the agency said their vehicles' disposition was outside the scope of the decision and offered only case-by-case consideration.

Before money moves on a car already in the United States, ask for the CBP-endorsed entry paperwork, the HS-7 showing which box was ticked, the EPA 3520-1 with its declared code, and — if it came in through an RI — written evidence that NHTSA released the conformance bond. If the seller cannot produce them, the correct assumption is that they do not exist.`,
    keyPoints: [
      'Seizure authority: 19 U.S.C. 1595a(c)(2)(A) for goods failing a health or safety restriction',
      'EPA states outright that CBP and EPA can seize and/or export non-compliant vehicles',
      'CBP has published footage of an illegally imported Land Rover Defender being destroyed (28 Sep 2016)',
      'Limitations under 19 U.S.C. 1621 run from discovery, not entry — an old car can still be seized',
      'False HS-7 declaration: up to $10,000 and/or 5 years under 18 U.S.C. 1001',
      'Demand the CBP entry documents, HS-7, EPA 3520-1 and, for RI cars, proof of bond release before buying',
    ],
  },
];

export const IMPORT_SOURCES: ImportSource[] = [
  {
    ref: 'usc-30112',
    title: '49 U.S.C. 30112 — Prohibitions on manufacturing, selling, and importing noncomplying motor vehicles and equipment',
    url: 'https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title49-section30112&num=0&edition=prelim',
    publisher: 'Office of the Law Revision Counsel, U.S. House of Representatives',
    isPrimary: true,
    retrieved: '2026-08-22',
  },
  {
    ref: 'usc-30117',
    title: '49 U.S.C. 30117 — Providing information to, and maintaining records on, purchasers',
    url: 'https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title49-section30117&num=0&edition=prelim',
    publisher: 'Office of the Law Revision Counsel, U.S. House of Representatives',
    isPrimary: true,
    retrieved: '2026-08-22',
  },
  {
    ref: 'usc-30146',
    title: '49 U.S.C. 30146 — Release of motor vehicles and bonds',
    url: 'https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title49-section30146&num=0&edition=prelim',
    publisher: 'Office of the Law Revision Counsel, U.S. House of Representatives',
    isPrimary: true,
    retrieved: '2026-08-22',
  },
  {
    ref: 'cfr-591',
    title: '49 CFR Part 591 — Importation of Vehicles and Equipment Subject to Federal Safety, Bumper and Theft Prevention Standards',
    url: 'https://www.ecfr.gov/current/title-49/subtitle-B/chapter-V/part-591',
    publisher: 'Electronic Code of Federal Regulations (eCFR)',
    isPrimary: true,
    retrieved: '2026-08-22',
  },
  {
    ref: 'cfr-591-5',
    title: '49 CFR 591.5 — Declarations required for importation',
    url: 'https://www.ecfr.gov/current/title-49/subtitle-B/chapter-V/part-591/section-591.5',
    publisher: 'Electronic Code of Federal Regulations (eCFR)',
    isPrimary: true,
    retrieved: '2026-08-22',
  },
  {
    ref: 'cfr-592',
    title: '49 CFR Part 592 — Registered Importers of Vehicles Not Originally Manufactured To Conform to the Federal Motor Vehicle Safety Standards',
    url: 'https://www.ecfr.gov/current/title-49/subtitle-B/chapter-V/part-592',
    publisher: 'Electronic Code of Federal Regulations (eCFR)',
    isPrimary: true,
    retrieved: '2026-08-22',
  },
  {
    ref: 'nhtsa-hs7',
    title: 'HS-7 Declaration Form — Importation of Motor Vehicles and Motor Vehicle Equipment Subject to Public Law 100-562 (Rev. 02-2020)',
    url: 'https://www.nhtsa.gov/sites/nhtsa.gov/files/documents/hs7_rv9-tag.pdf',
    publisher: 'National Highway Traffic Safety Administration',
    isPrimary: true,
    retrieved: '2026-08-22',
  },
  {
    ref: 'nhtsa-faq',
    title: 'Importation and Certification FAQs',
    url: 'https://www.nhtsa.gov/importing-vehicle/importation-and-certification-faqs',
    publisher: 'National Highway Traffic Safety Administration',
    isPrimary: true,
    retrieved: '2026-08-22',
  },
  {
    ref: 'nhtsa-vig',
    title: 'Vehicle Importation Guidelines — Vehicles Imported From Other (Non-Canadian) Countries',
    url: 'https://www.nhtsa.gov/sites/nhtsa.dot.gov/files/documents/imported_from_other_countries_non-canadian.pdf',
    publisher: 'National Highway Traffic Safety Administration',
    isPrimary: true,
    retrieved: '2026-08-22',
  },
  {
    ref: 'nhtsa-sd',
    title: 'How to Import a Motor Vehicle for Show or Display (15 October 2012)',
    url: 'https://www.nhtsa.gov/sites/nhtsa.gov/files/documents/how_to_import_show_display_10152012-tag.pdf',
    publisher: 'National Highway Traffic Safety Administration',
    isPrimary: true,
    retrieved: '2026-08-22',
  },
  {
    ref: 'nhtsa-ri',
    title: 'Registered Importers',
    url: 'https://www.nhtsa.gov/importing-vehicle/registered-importers',
    publisher: 'National Highway Traffic Safety Administration',
    isPrimary: true,
    retrieved: '2026-08-22',
  },
  {
    ref: 'fr-skyline-2006',
    title: 'Final Decision To Partially Rescind Decision That Nonconforming 1990-1999 Nissan GTS and GTR Passenger Cars Are Eligible for Importation, 71 FR 10591 (1 March 2006)',
    url: 'https://www.federalregister.gov/documents/2006/03/01/06-1896/final-decision-to-partially-rescind-decision-that-nonconforming-1990-1999-nissan-gts-and-gtr',
    publisher: 'Federal Register / NHTSA',
    isPrimary: true,
    retrieved: '2026-08-22',
  },
  {
    ref: 'cfr-85-1511',
    title: '40 CFR 85.1511 — Exemptions and exclusions',
    url: 'https://www.ecfr.gov/current/title-40/chapter-I/subchapter-C/part-85/subpart-P/section-85.1511',
    publisher: 'Electronic Code of Federal Regulations (eCFR)',
    isPrimary: true,
    retrieved: '2026-08-22',
  },
  {
    ref: 'cfr-85-1502',
    title: '40 CFR 85.1502 — Definitions (including "original production (OP) year" and "OP years old")',
    url: 'https://www.ecfr.gov/current/title-40/chapter-I/subchapter-C/part-85/subpart-P/section-85.1502',
    publisher: 'Electronic Code of Federal Regulations (eCFR)',
    isPrimary: true,
    retrieved: '2026-08-22',
  },
  {
    ref: 'epa-3520-1',
    title: 'EPA Form 3520-1 — Description and Declaration of Motor Vehicle or Motor Vehicle Engine (August 2024)',
    url: 'https://www.epa.gov/system/files/documents/2024-08/form3520-1-2024-08-secured-enabled.pdf',
    publisher: 'U.S. Environmental Protection Agency',
    isPrimary: true,
    retrieved: '2026-08-22',
  },
  {
    ref: 'epa-learn',
    title: 'Learn About Importing Vehicles and Engines',
    url: 'https://www.epa.gov/importing-vehicles-and-engines/learn-about-importing-vehicles-and-engines',
    publisher: 'U.S. Environmental Protection Agency',
    isPrimary: true,
    retrieved: '2026-08-22',
  },
  {
    ref: 'epa-procedures',
    title: 'Procedures for Importing Vehicles and Engines into the United States (EPA-420-B-10-027)',
    url: 'https://nepis.epa.gov/Exe/ZyPDF.cgi?Dockey=P10081IS.pdf',
    publisher: 'U.S. Environmental Protection Agency',
    isPrimary: true,
    retrieved: '2026-08-22',
  },
  {
    ref: 'epa-florida-2002',
    title: 'Illegal Florida Importer, Two Men Sentenced in Florida (news release, 29 March 2002)',
    url: 'https://www.epa.gov/archive/epapages/newsroom_archive/newsreleases/491dba90ee7c9ef285256b8b0076bdec.html',
    publisher: 'U.S. Environmental Protection Agency (archived newsroom)',
    isPrimary: true,
    retrieved: '2026-08-22',
  },
  {
    ref: 'cbp-importing-car',
    title: 'Importing a Motor Vehicle',
    url: 'https://www.cbp.gov/trade/basic-import-export/importing-car',
    publisher: 'U.S. Customs and Border Protection',
    isPrimary: true,
    retrieved: '2026-08-22',
  },
  {
    ref: 'cbp-defender-video',
    title: 'CBP destroys an illegally imported Land Rover (video release, last modified 28 September 2016)',
    url: 'https://www.cbp.gov/newsroom/video-gallery/video-library/cbp-destroys-land-rover-defender',
    publisher: 'U.S. Customs and Border Protection',
    isPrimary: true,
    retrieved: '2026-08-22',
  },
  {
    ref: 'cfr-19-12',
    title: '19 CFR Part 12 — Special Classes of Merchandise (12.73 EPA motor vehicles; 12.80 Federal motor vehicle safety standards)',
    url: 'https://www.ecfr.gov/current/title-19/chapter-I/part-12',
    publisher: 'Electronic Code of Federal Regulations (eCFR)',
    isPrimary: true,
    retrieved: '2026-08-22',
  },
  {
    ref: 'usc-1595a',
    title: '19 U.S.C. 1595a — Aiding unlawful importation',
    url: 'https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title19-section1595a&num=0&edition=prelim',
    publisher: 'Office of the Law Revision Counsel, U.S. House of Representatives',
    isPrimary: true,
    retrieved: '2026-08-22',
  },
  {
    ref: 'usc-1621',
    title: '19 U.S.C. 1621 — Limitation of actions',
    url: 'https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title19-section1621&num=0&edition=prelim',
    publisher: 'Office of the Law Revision Counsel, U.S. House of Representatives',
    isPrimary: true,
    retrieved: '2026-08-22',
  },
  {
    ref: 'hts-8703',
    title: 'Harmonized Tariff Schedule of the United States — heading 8703 (passenger motor cars), general rate 2.5%',
    url: 'https://hts.usitc.gov/search?query=8703.23',
    publisher: 'U.S. International Trade Commission',
    isPrimary: true,
    retrieved: '2026-08-22',
  },
  {
    ref: 'hts-8704',
    title: 'Harmonized Tariff Schedule of the United States — subheadings 8704.21.01 and 8704.31.01 (goods-transport vehicles, GVW not exceeding 5 t), general rate 25%',
    url: 'https://hts.usitc.gov/search?query=8704.31',
    publisher: 'U.S. International Trade Commission',
    isPrimary: true,
    retrieved: '2026-08-22',
  },
  {
    ref: 'proc-3564',
    title: 'Proclamation 3564 — Increasing Rates of Duty on Specified Articles (4 December 1963), 77 Stat. 1034',
    url: 'https://www.govinfo.gov/content/pkg/STATUTE-77/pdf/STATUTE-77-Pg1034.pdf',
    publisher: 'U.S. Government Publishing Office (Statutes at Large)',
    isPrimary: true,
    retrieved: '2026-08-22',
  },
  {
    ref: 'ca-dmv-12050',
    title: 'Vehicle Industry Registration Procedures Manual, 12.050 Direct Import Vehicles',
    url: 'https://www.dmv.ca.gov/portal/handbook/vehicle-industry-registration-procedures-manual-2/nonresident-vehicles/direct-import-vehicles/',
    publisher: 'California Department of Motor Vehicles',
    isPrimary: true,
    retrieved: '2026-08-22',
  },
  {
    ref: 'ca-dmv-12020',
    title: 'Vehicle Industry Registration Procedures Manual, 12.020 California Noncertified/Direct Import Vehicle Exemptions',
    url: 'https://www.dmv.ca.gov/portal/handbook/vehicle-industry-registration-procedures-manual-2/nonresident-vehicles/california-noncertified-direct-import-vehicle-exemptions/',
    publisher: 'California Department of Motor Vehicles',
    isPrimary: true,
    retrieved: '2026-08-22',
  },
  {
    ref: 'ca-dmv-12025',
    title: 'Vehicle Industry Registration Procedures Manual, 12.025 California Noncertified/Direct Import Vehicle Registration Refusals (H&SC 43150-43156)',
    url: 'https://www.dmv.ca.gov/portal/handbook/vehicle-industry-registration-procedures-manual-2/nonresident-vehicles/california-noncertified-direct-import-vehicle-registration-refusals/',
    publisher: 'California Department of Motor Vehicles',
    isPrimary: true,
    retrieved: '2026-08-22',
  },
  {
    ref: 'me-nonconforming',
    title: 'Working Group to Study the Safety and Use of Nonconforming Vehicles on Maine’s Roads and Highways (Resolve Chapter 29, 2025) and 2026 Final Report',
    url: 'https://www.maine.gov/sos/Working-Group-Nonconforming-Vehicles',
    publisher: 'Maine Department of the Secretary of State',
    isPrimary: true,
    retrieved: '2026-08-22',
  },
  {
    ref: 'tx-sb1816',
    title: 'Texas S.B. 1816 Bill Analysis, 89th Legislature (2025) — miniature vehicles',
    url: 'https://capitol.texas.gov/tlodocs/89R/analysis/html/SB01816F.htm',
    publisher: 'Texas Legislature Online',
    isPrimary: true,
    retrieved: '2026-08-22',
  },
];

export const IMPORT_ELIGIBILITY: { year: number; note: string }[] = [
  {
    year: 2026,
    note: 'Vehicles with a date of manufacture in 2001 reach 25 years during 2026, each on the 25th anniversary of its own build date. Broadly the 2001 model year, plus any 2002-model car built before the end of 2001. A 2001-model car built in late 2000 was already eligible in 2025.',
  },
  {
    year: 2027,
    note: 'Vehicles built in 2002 — broadly the 2002 model year, plus 2003-model cars built during 2002. Build month decides the month of eligibility.',
  },
  {
    year: 2028,
    note: 'Vehicles built in 2003 — broadly the 2003 model year, plus 2004-model cars built during 2003.',
  },
  {
    year: 2029,
    note: 'Vehicles built in 2004 — broadly the 2004 model year, plus 2005-model cars built during 2004.',
  },
  {
    year: 2030,
    note: 'Vehicles built in 2005 — broadly the 2005 model year, plus 2006-model cars built during 2005.',
  },
  {
    year: 2031,
    note: 'Vehicles built in 2006 — broadly the 2006 model year, plus 2007-model cars built during 2006.',
  },
];

export const IMPORT_DATA_RETRIEVED = '2026-08-22';

export const IMPORT_DISCLAIMER =
  'This page is general information about United States vehicle import law, compiled on 22 August 2026 from the statutes, regulations, agency forms and agency guidance cited in the sources list. It is not legal advice, it is not customs or tax advice, and it is not a substitute for the current text of the law. Federal rules, tariff classifications and state registration requirements change, agency practice does not always track the regulatory text exactly, and the correct treatment of any particular vehicle depends on facts — its date of manufacture, its configuration, its classification and the state it will be registered in — that only an inspection of that vehicle and its documents can establish. Verify the position for your own vehicle with NHTSA, the EPA Imports Hotline, U.S. Customs and Border Protection, your state titling agency, a licensed customs broker or a qualified attorney before committing money or shipping anything.';
