/**
 * Provider Tracks — category-tailored onboarding content for specialists.
 *
 * Each track powers a page at /services/guide/[slug] and gives a specific
 * trade (detailer, inspector, photographer, …) the gig ideas, pricing shape,
 * portfolio checklist, and client-requirement list that actually fit their
 * work — instead of one generic playbook for everyone.
 *
 * `category` matches the value in the freelancer apply form's CATEGORIES list,
 * so a track page can deep-link ?category=… and preselect the right option.
 */

export type Tier = {
  name: string;
  price: string; // display string, e.g. "$150–$300"
  turnaround: string;
  includes: string[];
};

export type GigIdea = { title: string; blurb: string };

export type ProviderTrack = {
  slug: string;
  category: string; // must match apply-form CATEGORIES value
  label: string; // short nav label
  icon: string; // lucide icon key (mapped in the page)
  eyebrow: string;
  headline: string;
  hiredFor: string; // one-liner: what owners hire this trade for
  intro: string;
  gigIdeas: GigIdea[];
  pricingNote: string;
  tiers?: Tier[]; // omitted for quote-based trades (e.g. restoration)
  quoteBased?: boolean;
  addOns: string[];
  portfolio: string[];
  requirements: string[];
  tips: string[];
  keywords: string[];
  faqs: { q: string; a: string }[];
};

export const PROVIDER_TRACKS: ProviderTrack[] = [
  {
    slug: "detailing",
    category: "Detailing & Paint Correction",
    label: "Detailing",
    icon: "Sparkles",
    eyebrow: "Detailing & Paint Correction",
    headline: "Turn paint into a portfolio",
    hiredFor: "Paint correction, ceramic coating, show prep, and preserving original finishes.",
    intro:
      "Collector-car owners obsess over paint — original single-stage lacquer, soft European clear, a concours finish that has to survive judging. They are not buying a car wash; they are trusting you with a finish that can be worth five figures on its own. Package that expertise into clear tiers and prove it with before/afters.",
    gigIdeas: [
      { title: "Maintenance detail", blurb: "Safe wash, decontamination, and protection to keep a sorted car sorted between shows." },
      { title: "Single-stage paint correction", blurb: "One-step machine polish to remove light swirls and restore gloss — the everyday upgrade." },
      { title: "Multi-stage correction + ceramic", blurb: "Full compound-and-refine plus a ceramic coating; your flagship, highest-margin gig." },
      { title: "Concours show prep", blurb: "Deadline-driven prep to a judging standard, engine bay and undercarriage included." },
      { title: "Interior & leather restoration", blurb: "Deep clean, condition, and protect original leather, wood, and trim." },
    ],
    pricingNote:
      "Anchor with three tiers so buyers self-select by ambition and budget. Most pick the middle — make it your best-value correction package.",
    tiers: [
      { name: "Standard", price: "$150–$350", turnaround: "1 day", includes: ["Safe hand wash & dry", "Iron/tar decontamination", "Spray sealant or wax", "Interior wipe-down & vacuum"] },
      { name: "Enhanced", price: "$450–$900", turnaround: "1–2 days", includes: ["Everything in Standard", "Single-stage machine correction", "6-month sealant", "Trim & tire dressing", "Before/after documentation"] },
      { name: "Concours", price: "$1,200+", turnaround: "3–5 days", includes: ["Multi-stage paint correction", "Ceramic coating (2–5 yr)", "Engine bay & undercarriage detail", "Show-ready hand finish"] },
    ],
    addOns: [
      "Ceramic coating upgrade",
      "Paint decontamination / clay",
      "Engine bay detail",
      "Headlight restoration",
      "Interior deep clean & leather conditioning",
      "Paint-depth reading report",
    ],
    portfolio: [
      "Before/after paint under both sun and LED swirl light",
      "Macro shots of swirl and defect removal",
      "Water-beading / coating hydrophobics",
      "Engine bay and interior transformations",
      "A finished car in editorial light",
    ],
    requirements: [
      "Paint type: original single-stage, factory clear, or resprayed",
      "Current condition and any known defects",
      "Indoor space, power, and water access at the location",
      "Whether it is for a show — and the show date",
      "Any areas to avoid (delicate original paint, patina to preserve)",
    ],
    tips: [
      "Never wet-sand or aggressively cut original paint without written disclosure — measure depth with a gauge first and document it.",
      "Photograph in consistent lighting so your before/afters are believable, not flattering.",
      "For original-paint cars, sell preservation, not perfection — collectors often value honest patina over a mirror finish.",
    ],
    keywords: ["paint correction", "ceramic coating", "concours detailing", "swirl removal", "original paint preservation"],
    faqs: [
      { q: "How do I price paint correction when every car is different?", a: "Price by process, not by car: a defined single-stage vs multi-stage vs ceramic package, each with a paint-condition assumption stated up front. Ask for photos in your requirements, and note that heavily defected or repainted panels may need a custom quote." },
      { q: "Should I offer ceramic coating as a tier or an add-on?", a: "Both. Build it into your top Concours tier and also offer it as a paid add-on to the middle tier — that captures buyers who want correction now and coating as the upsell." },
    ],
  },
  {
    slug: "inspection",
    category: "Pre-Purchase Inspection",
    label: "Inspection",
    icon: "ClipboardCheck",
    eyebrow: "Pre-Purchase Inspection",
    headline: "Be the expert eyes buyers can't be",
    hiredFor: "Remote pre-purchase inspections, condition reports, and an honest deal-or-walk verdict.",
    intro:
      "Most collector cars are bought at a distance — an auction two states away, a dealer across the country. The buyer can't be there, so they hire you to be. A great PPI isn't a checklist; it's a written, photographed, defensible opinion that a five- or six-figure decision rests on. Sell rigor and independence.",
    gigIdeas: [
      { title: "Standard PPI", blurb: "Full visual inspection, cold start, road test, and a photo report — the core remote-buyer gig." },
      { title: "Concours-level PPI", blurb: "Compression/leakdown, paint-depth survey, on-a-lift undercarriage, and a detailed written report." },
      { title: "Auction-lot inspection", blurb: "Fast, deadline-driven inspection and verdict before a specific lot crosses the block." },
      { title: "Numbers-matching verification", blurb: "VIN, chassis, engine, and gearbox number checks against factory records and registries." },
      { title: "Video walkaround", blurb: "Narrated cold-start and walkaround video so the buyer sees and hears the car themselves." },
    ],
    pricingNote:
      "Price by depth of inspection and speed of turnaround. Buyers racing an auction clock will pay a premium for a same-day report.",
    tiers: [
      { name: "Standard", price: "$250–$450", turnaround: "2–3 days", includes: ["Cold-start observation", "Full exterior/interior survey", "Road test", "50+ photo report", "Verbal deal-or-walk summary"] },
      { name: "Enhanced", price: "$500–$850", turnaround: "2–4 days", includes: ["Everything in Standard", "Compression / leakdown test", "Paint-depth gauge survey", "On-a-lift undercarriage check", "Written report"] },
      { name: "Concours", price: "$1,000+", turnaround: "3–5 days", includes: ["Borescope of cylinders", "Fluid analysis", "Numbers-matching & provenance research", "Full formal condition report", "Narrated video"] },
    ],
    addOns: [
      "Same-day / rush report",
      "Narrated video walkaround",
      "Chassis/engine number verification",
      "Provenance & history-file review",
      "Dyno or road-load data",
    ],
    portfolio: [
      "A sample (redacted) written report",
      "Photos of real findings — accident repair, rust, over-spray",
      "Cold-start / walkaround video clips",
      "Your inspection setup: lift, paint gauge, borescope",
    ],
    requirements: [
      "Listing URL, VIN/chassis number, and photos",
      "Car's exact location and how to get access to it",
      "Seller or auction-house contact and viewing window",
      "Deadline — especially if an auction is ending",
      "The buyer's specific worries (rust, matching numbers, accident history)",
    ],
    tips: [
      "Always insist on a genuine cold start — a pre-warmed engine hides the faults buyers most need to know about.",
      "Photograph the VIN and every number you verify; your report is only as strong as its evidence.",
      "State conflicts of interest plainly. Your independence from the seller is the entire product — protect it.",
    ],
    keywords: ["pre-purchase inspection", "PPI", "classic car condition report", "remote car inspection", "numbers matching"],
    faqs: [
      { q: "How do I handle a car I have to travel to inspect?", a: "Build travel into a clearly stated service radius with a mileage or day-rate add-on beyond it. Set expectations in your requirements list so an auction-lot buyer knows the timeline before they book." },
      { q: "What protects me if a buyer disputes my report?", a: "Document everything — photos, video, and a written report with dated evidence for each finding. Describe what you observed on the day rather than guaranteeing the future, and keep your records. Rigor and evidence are your best protection." },
    ],
  },
  {
    slug: "transport",
    category: "Transport & Shipping",
    label: "Transport",
    icon: "Truck",
    eyebrow: "Transport & Shipping",
    headline: "Move irreplaceable metal, safely",
    hiredFor: "Enclosed and open transport, auction pickups, and white-glove single-car delivery.",
    intro:
      "A collector shipping a car is trusting a stranger with something that can't be replaced and often can't be driven onto a trailer. The job is bought on trust: your rig, your straps, your insurance, and your condition-report process matter more than your price. Show all of it.",
    gigIdeas: [
      { title: "Open transport", blurb: "Cost-effective shared-load transport for drivers and project cars." },
      { title: "Enclosed transport", blurb: "Weather- and debris-protected enclosed hauling — the default for valuable classics." },
      { title: "White-glove single-car", blurb: "One car, one trailer, liftgate loading, and direct door-to-door service." },
      { title: "Auction pickup & delivery", blurb: "Collect a won lot from the auction house and deliver it deadline-tight." },
      { title: "Show & event logistics", blurb: "Storage-to-show and back, coordinated around the event calendar." },
    ],
    pricingNote:
      "Transport pricing is route- and service-driven. Publish clear service levels and quote each route, rather than a single flat number.",
    tiers: [
      { name: "Open", price: "Quoted by route", turnaround: "Scheduled", includes: ["Shared open trailer", "Soft-tie securing", "Standard cargo insurance", "Pickup & delivery photos"] },
      { name: "Enclosed", price: "Quoted by route", turnaround: "Scheduled", includes: ["Enclosed trailer", "Soft-tie / wheel-net securing", "Higher insurance limit", "Condition report at pickup & drop"] },
      { name: "White-glove", price: "Quoted by route", turnaround: "Priority", includes: ["Single-car enclosed", "Liftgate / low-angle loading", "Climate-aware transit", "Direct door-to-door, one driver"] },
    ],
    addOns: [
      "Enclosed upgrade",
      "Expedited / guaranteed dates",
      "Additional insurance coverage",
      "Non-running / inop winch loading",
      "Short-term storage either end",
    ],
    portfolio: [
      "Your rig and trailer, inside and out",
      "Soft-tie / wheel-net securing on a real classic",
      "Liftgate or low-clearance loading in progress",
      "Your condition-report / photo process at pickup",
    ],
    requirements: [
      "Pickup and delivery ZIP codes",
      "Preferred dates and any hard deadline",
      "Running or non-running, and ground clearance / modifications",
      "Declared value for insurance",
      "Access notes at both ends (narrow street, gated, low garage)",
    ],
    tips: [
      "Soft ties only on a collector car — never chain down a classic. Say so on your profile; owners look for it.",
      "Do a photographed condition report at pickup and delivery. It protects you and reassures the owner.",
      "Verify your cargo insurance limit actually covers the car's value before you quote — and show the limit.",
    ],
    keywords: ["enclosed car transport", "classic car shipping", "collector car transport", "auction car pickup", "white-glove auto transport"],
    faqs: [
      { q: "Should I show prices if every route is different?", a: "Show service levels and a way to get an instant route quote rather than a flat price. Buyers care most about enclosed-vs-open and insurance limits; make those unmistakable and let the route drive the number." },
      { q: "How do I win against cheap brokers?", a: "Sell what brokers can't: your own equipment, your soft-tie method, your insurance limit, and a photographed condition report. Collectors shipping valuable cars are buying peace of mind, not the lowest bid." },
    ],
  },
  {
    slug: "photography",
    category: "Automotive Photography",
    label: "Photography",
    icon: "Camera",
    eyebrow: "Automotive Photography",
    headline: "The photos that sell the car",
    hiredFor: "Listing photo sets, editorial shoots, provenance documentation, and film.",
    intro:
      "On a collector-car listing, photography is the product. A great set adds real money to a sale and a weak one buries it. Sellers hire you for a consistent, honest, beautiful set — and increasingly for the documentation photos that become part of a car's permanent history file.",
    gigIdeas: [
      { title: "Listing / sale package", blurb: "A complete, consistent set built to sell — exterior, interior, engine, and the honest detail shots buyers want." },
      { title: "Editorial / feature shoot", blurb: "Location-based hero images for a feature, a wall print, or a marque's own marketing." },
      { title: "Provenance documentation set", blurb: "VIN, odometer, engine numbers, options, and flaws — the archival record collectors keep with the car." },
      { title: "Film & video walkaround", blurb: "A narrated or cinematic walkaround and cold-start film for the listing." },
      { title: "Rolling & drone", blurb: "Motion and aerial work for editorial and social." },
    ],
    pricingNote:
      "Price by deliverable count, location, and usage. A listing set is volume; an editorial shoot is craft — tier them differently.",
    tiers: [
      { name: "Standard", price: "$250–$450", turnaround: "2–3 days", includes: ["On-location or studio", "25 edited images", "Exterior, interior, engine, detail", "Web-ready delivery"] },
      { name: "Enhanced", price: "$600–$1,200", turnaround: "3–5 days", includes: ["Editorial location shoot", "50+ edited images", "Golden-hour / twilight set", "Full documentation frames", "Print-ready files"] },
      { name: "Concours", price: "$1,500+", turnaround: "5–7 days", includes: ["Stills + cinematic film", "Drone & rolling shots", "Multi-location", "Licensed for marketing use"] },
    ],
    addOns: [
      "Same-day turnaround",
      "Video / film add-on",
      "Drone / aerial",
      "Twilight / night shoot",
      "Print-ready & licensed files",
    ],
    portfolio: [
      "A full consistent set from one car — not just single hero shots",
      "Exterior hero, interior, engine bay, and detail macros",
      "A twilight or golden-hour frame",
      "Rolling and, if you offer it, drone work",
    ],
    requirements: [
      "Car location and whether the shoot is indoor or outdoor",
      "Intended use: online listing, print, or marketing",
      "Preferred locations or backdrop, if any",
      "License-plate visibility preference",
      "Deadline (listing go-live or auction date)",
    ],
    tips: [
      "Always shoot the documentation frames — VIN, odometer, engine number, options, and honest flaws. They add provenance value and buyers trust the set more.",
      "Deliver a consistent look across the whole set; a matched grade reads as professional, a mixed one reads as amateur.",
      "Golden hour and clean reflections do more for a car than any filter — scout the light before you scout the pose.",
    ],
    keywords: ["automotive photography", "car listing photos", "classic car photographer", "editorial car shoot", "collector car documentation"],
    faqs: [
      { q: "Listing photos or editorial — which should I lead with?", a: "Lead with the listing package as your volume gig; it is what most sellers need and books fastest. Offer editorial and film as your premium tiers for owners who want images that outlive the sale." },
      { q: "How many images should a package include?", a: "Enough to tell the whole honest story of the car — typically 25 for a listing set and 50+ for editorial. State the count per tier so buyers know exactly what they are getting." },
    ],
  },
  {
    slug: "mechanical",
    category: "Mechanical & Repair",
    label: "Mechanical",
    icon: "Wrench",
    eyebrow: "Mechanical & Repair",
    headline: "Keep the legends running",
    hiredFor: "Recommissioning, tuning, system overhauls, and pre-event mechanical checks.",
    intro:
      "Collector cars sit, and sitting breaks things. Owners need a specialist who knows the quirks of a specific marque and era — the right carb jets, the correct-spec parts, the ignition setup nobody under fifty remembers. Sell that specialism, not general repair.",
    gigIdeas: [
      { title: "Recommissioning after storage", blurb: "Fluids, brakes, fuel system, ignition — safely wake a car that's been parked for years." },
      { title: "Pre-event mechanical check", blurb: "A go/no-go safety and reliability pass before a rally, tour, or track day." },
      { title: "Carburetor rebuild & tune", blurb: "Rebuild, jet, and synchronize to period-correct spec." },
      { title: "Brake system overhaul", blurb: "Master cylinder, wheel cylinders/calipers, lines, and bleed for a car meant to actually be driven." },
      { title: "Electrical diagnosis", blurb: "Track down the gremlins in old wiring, charging, and ignition systems." },
    ],
    pricingNote:
      "Offer defined-scope jobs at fixed prices, and a labor rate for diagnosis. Note that parts are quoted separately once sourced.",
    tiers: [
      { name: "Standard", price: "$150–$400", turnaround: "1–2 days", includes: ["Service & safety inspection", "Fluids and filters", "Findings report", "Labor for a single defined job"] },
      { name: "Enhanced", price: "$500–$1,500", turnaround: "3–7 days", includes: ["Single-system overhaul (brakes, fuel, ignition)", "Correct-spec parts sourcing", "Bench testing", "Road-test validation"] },
      { name: "Concours", price: "Quoted", turnaround: "Project", includes: ["Full recommissioning", "Multi-system sorting", "Dyno / tune", "Documented photo record"] },
    ],
    addOns: [
      "Dyno tune",
      "Mobile / on-site service",
      "Correct-spec parts sourcing",
      "Rush / pre-event scheduling",
    ],
    portfolio: [
      "Before/after of rebuilt components",
      "Dyno sheets or tune data",
      "Tidy, correct engine bays and wiring",
      "Documentation of a full recommissioning",
    ],
    requirements: [
      "Year, make, model, and engine/spec",
      "Symptoms and when they occur",
      "Known service history and recent work",
      "Parts availability or originality requirements",
      "Deadline — especially for a specific event",
    ],
    tips: [
      "Source correct-spec parts and say you do — the wrong jets or plugs on a classic are a resale red flag.",
      "Photo-document the work; owners keep it in the history file and it supports the car's value.",
      "Return the old parts to the owner. It signals honesty and proves the work was done.",
    ],
    keywords: ["classic car mechanic", "recommissioning", "carburetor tuning", "vintage car repair", "marque specialist"],
    faqs: [
      { q: "How do I quote when I can't see the car yet?", a: "Sell defined-scope jobs (a brake overhaul, a carb rebuild) at fixed labor prices with parts quoted after sourcing, and charge diagnosis at your labor rate. Use your requirements list to get symptoms and history up front so surprises are rare." },
      { q: "Should I list general repair or a specialism?", a: "A specialism, every time. 'Air-cooled Porsche ignition and carburetion' wins the right owners and higher rates; 'general auto repair' competes with every shop in town." },
    ],
  },
  {
    slug: "restoration",
    category: "Restoration",
    label: "Restoration",
    icon: "Hammer",
    eyebrow: "Restoration",
    headline: "Bring history back to life",
    hiredFor: "Concours and driver-quality restorations, from nut-and-bolt rebuilds to sympathetic preservation.",
    intro:
      "Restoration is the highest-trust, highest-value work on the platform — a multi-month, five- or six-figure project where the owner is betting on your craft and your judgment. These jobs are quoted and scoped, not bought off a menu. Your listing's job is to prove you can be trusted with the whole car.",
    gigIdeas: [
      { title: "Concours nut-and-bolt", blurb: "Complete disassembly to a judging standard — the flagship restoration." },
      { title: "Driver-quality restoration", blurb: "A beautiful, honest car built to be enjoyed rather than judged." },
      { title: "Mechanical restoration", blurb: "Engine, drivetrain, brakes, and suspension to as-new, keeping the patina outside." },
      { title: "Preservation / sympathetic", blurb: "Stabilize and conserve an original car rather than restore it away." },
      { title: "Interior & trim restoration", blurb: "Upholstery, wood, chrome, and trim returned to correct spec." },
    ],
    pricingNote:
      "Restoration is quote-based. Scope the project in writing, phase the billing, and set milestones — never a single fixed number.",
    quoteBased: true,
    addOns: [
      "Phased / staged project billing",
      "Sourcing of rare or NOS parts",
      "Provenance & originality research",
      "Show preparation and entry support",
    ],
    portfolio: [
      "Full build threads — bare metal to finished car",
      "Panel, paint, and body process shots",
      "Before/after of a completed project",
      "Detail of correctness: badges, fasteners, finishes",
    ],
    requirements: [
      "Project goal: concours, driver, mechanical, or preservation",
      "Realistic budget range and timeline",
      "Originality goals (matching-numbers, period-correct, restomod)",
      "The car's current state and completeness",
      "Documentation and parts that come with the car",
    ],
    tips: [
      "Agree the scope in writing before any spanner turns — scope creep is where restoration relationships break down.",
      "Phase the billing against milestones so the owner sees progress and you are never carrying the whole risk.",
      "Photo-document every stage. It reassures the owner, becomes part of the car's provenance, and protects its resale value.",
    ],
    keywords: ["classic car restoration", "concours restoration", "nut and bolt restoration", "marque restoration specialist", "car preservation"],
    faqs: [
      { q: "Why isn't restoration a fixed-price gig?", a: "Because no two projects are alike and hidden rust or missing parts change everything. List restoration as a directory/quote service: show your work, capture the project scope in your requirements, and quote each car after a proper assessment." },
      { q: "How do I win a restoration commission online?", a: "Depth of proof. Full before-to-after build documentation, evidence of correctness, and a clear scoping-and-milestone process reassure an owner far more than a low quote on a job this large." },
    ],
  },
  {
    slug: "bodywork",
    category: "Body Work & Paint",
    label: "Body & Paint",
    icon: "PaintBucket",
    eyebrow: "Body Work & Paint",
    headline: "Panel, metal, and colour done right",
    hiredFor: "Respray, rust and panel repair, accident work, and period-correct colour matching.",
    intro:
      "Bodywork on a collector car is a correctness game as much as a craft one. The wrong paint system, a modern base-clear where the factory ran single-stage, or panel gaps that don't match the era can quietly cost an owner value. Sell your eye for originality alongside your finish quality.",
    gigIdeas: [
      { title: "Full respray", blurb: "Bare-metal or scuff-and-shoot respray in a correct, documented colour." },
      { title: "Panel & rust repair", blurb: "Cut, fabricate, and blend — restoring structure and shape, not just hiding it." },
      { title: "Accident / collision repair", blurb: "Structural and cosmetic repair to a collector standard." },
      { title: "Colour match & blend", blurb: "Match original single-stage or metallic and blend invisibly into adjacent panels." },
      { title: "Lead loading & metal finishing", blurb: "Period-correct techniques for cars that deserve them." },
    ],
    pricingNote:
      "Spot and single-panel work can be tiered; a full respray is best quoted after seeing the car. Be explicit about the paint system.",
    tiers: [
      { name: "Standard", price: "$400–$1,200", turnaround: "2–4 days", includes: ["Single-panel repair or respray", "Colour match", "Blend into adjacent panels", "Cut & polish"] },
      { name: "Enhanced", price: "$1,500–$4,000", turnaround: "1–2 weeks", includes: ["Multi-panel work", "Rust remediation", "Correct paint system (single-stage or base/clear)", "Panel-gap correction"] },
      { name: "Concours", price: "Quoted", turnaround: "Project", includes: ["Bare-metal full respray", "Metal finishing / lead loading", "Show-standard block & finish", "Full documentation"] },
    ],
    addOns: [
      "Colour change",
      "Period-correct single-stage paint",
      "Rust remediation",
      "Trim, chrome, and badge refinishing",
    ],
    portfolio: [
      "Bare metal and block-sanding stages",
      "Rust repair before/after with fabricated metal",
      "Colour match shown across a panel edge under light",
      "Corrected, period-correct panel gaps",
    ],
    requirements: [
      "Panels affected and the nature of the damage",
      "Current paint: original, resprayed, single-stage or base/clear",
      "Factory colour code, if known",
      "Originality goals — matching finish vs upgrade",
      "Deadline and whether it is for a show or sale",
    ],
    tips: [
      "Match the paint system to the car's originality — a modern base/clear on a car that left the factory in single-stage can cost value. Ask, then advise.",
      "Document rust repair fully; hidden filler is the thing collectors fear most, and proof of proper metalwork is a selling point.",
      "Respect period-correct panel gaps. Too-perfect can be as wrong as too-loose.",
    ],
    keywords: ["classic car respray", "rust repair", "paint matching", "collision repair classic", "bare metal respray"],
    faqs: [
      { q: "Single-stage or base/clear — which should I quote?", a: "Whichever matches the car's originality goal. For a numbers-matching concours car, period-correct single-stage often protects value; for a driver or restomod, a durable base/clear may be the right call. Ask the owner's intent in your requirements and advise from there." },
      { q: "Can I fix-price a full respray?", a: "Rarely — hidden rust and prep vary too much. Offer spot and single-panel work at set prices, and quote full resprays after inspecting the car, using your requirements list to gather photos first." },
    ],
  },
  {
    slug: "storage",
    category: "Storage",
    label: "Storage",
    icon: "Warehouse",
    eyebrow: "Storage",
    headline: "A safe home between drives",
    hiredFor: "Climate-controlled storage, maintenance programs, and full collection management.",
    intro:
      "Storing a collector car well is active, not passive — climate, security, battery and tyre care, and the occasional start-up all protect the asset. Owners are trusting you with cars they can't replace, sometimes for years. Sell the specifics of your facility and your care program, not just square footage.",
    gigIdeas: [
      { title: "Climate-controlled storage", blurb: "Monthly indoor storage in a temperature- and humidity-managed facility." },
      { title: "Maintenance program", blurb: "Battery tending, tyre care, and periodic start-ups so the car is ready when the owner is." },
      { title: "Show-season in & out", blurb: "Seasonal storage timed around the event and driving calendar." },
      { title: "Long-term dry storage", blurb: "Extended preservation storage with a documented condition baseline." },
      { title: "Collection management", blurb: "Full-service care, records, and logistics for a multi-car collection." },
    ],
    pricingNote:
      "Storage is recurring. Offer clear monthly tiers by level of care, and add event transport or detailing as recurring upsells.",
    tiers: [
      { name: "Standard", price: "$150–$300 / mo", turnaround: "Monthly", includes: ["Secure indoor bay", "Car cover", "Basic access by appointment", "Documented intake condition"] },
      { name: "Enhanced", price: "$300–$600 / mo", turnaround: "Monthly", includes: ["Climate-controlled space", "Battery tender & tyre care", "Monthly start-up & report", "Priority access"] },
      { name: "Concours", price: "$600+ / mo", turnaround: "Monthly", includes: ["Premium climate-controlled", "Full maintenance program", "Detailing between drives", "Event transport coordination"] },
    ],
    addOns: [
      "Monthly wash / detail",
      "Periodic mechanical checks",
      "Transport to and from events",
      "Photo condition reports",
    ],
    portfolio: [
      "Facility interior, security, and climate systems",
      "Cars stored properly — covers, spacing, tenders",
      "Your intake condition-report process",
      "Access and handling areas",
    ],
    requirements: [
      "Car dimensions and whether it runs",
      "Storage duration and expected access frequency",
      "Declared value and insurance requirements",
      "Any special needs (trickle charge, fluid drain, cover type)",
      "Whether event transport or detailing is wanted",
    ],
    tips: [
      "Lead with your specifics: humidity control, security, fire suppression, and 24/7 monitoring are what collectors actually compare.",
      "Agree access terms up front — owners want to know they can see or collect their car without friction.",
      "Battery tending and tyre care sound minor but signal that you understand what parked collector cars actually need.",
    ],
    keywords: ["classic car storage", "climate controlled car storage", "collection management", "collector car storage facility", "vehicle preservation"],
    faqs: [
      { q: "How do I compete with cheap warehouse storage?", a: "By selling care, not space. Climate control, security, a maintenance program, and a documented intake condition are what set collector-grade storage apart from a cold shed — make them the headline." },
      { q: "Should storage be a fixed gig or a directory listing?", a: "Offer clear monthly tiers so owners can compare at a glance, and treat multi-car collection management as a quote-based directory service. Recurring add-ons like detailing and event transport lift the value of every space." },
    ],
  },
];

export function getTrack(slug: string): ProviderTrack | undefined {
  return PROVIDER_TRACKS.find((t) => t.slug === slug);
}

export function trackSlugs(): string[] {
  return PROVIDER_TRACKS.map((t) => t.slug);
}
