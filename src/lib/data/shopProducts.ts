import type { Merchant } from "@/lib/affiliate";

/**
 * Garage Essentials — a curated, editorial set of gear worth owning, not a
 * storefront. Each entry names a specific brand collectors actually respect and
 * earns its place on the recommendation, not the SKU. Pin an exact product
 * (add an `asin`) or drop in a specialist/auction affiliate link (`url` +
 * `merchant`) anytime; the shop renders them the same way.
 */

export type ShopCategoryKey =
  | "detailing"
  | "garage"
  | "storage"
  | "library"
  | "enthusiast";

export interface ShopProduct {
  slug: string;
  name: string;
  blurb: string;
  category: ShopCategoryKey;
  merchant: Merchant;
  amazonSearch?: string;
  asin?: string;
  url?: string;
  editorsPick?: boolean;
}

export interface ShopCategory {
  key: ShopCategoryKey;
  label: string;
  icon: string; // lucide key, mapped in the client
  intro: string;
}

export const SHOP_CATEGORIES: ShopCategory[] = [
  {
    key: "detailing",
    label: "Detailing & Paint Care",
    icon: "Sparkles",
    intro: "Paint is where value lives. This is what keeps it right — without harming original finishes.",
  },
  {
    key: "garage",
    label: "Garage & Tools",
    icon: "Wrench",
    intro: "The tools and fluids worth owning before you need them, and worth buying once — properly.",
  },
  {
    key: "storage",
    label: "Storage & Preservation",
    icon: "Warehouse",
    intro: "A collector car spends most of its life parked. These make sure it wakes up well.",
  },
  {
    key: "library",
    label: "The Library",
    icon: "BookOpen",
    intro: "Know the car before you turn a bolt — manuals and histories worth the shelf space.",
  },
  {
    key: "enthusiast",
    label: "For the Enthusiast",
    icon: "Gift",
    intro: "The pieces that live with the car, or stand in for it on the mantel.",
  },
];

export const SHOP_PRODUCTS: ShopProduct[] = [
  // ---- Detailing & Paint Care ----
  {
    slug: "adams-car-shampoo",
    name: "Adam's Polishes Car Shampoo",
    blurb:
      "Adam's pH-balanced shampoo is the enthusiast default — it lifts dirt and cuts grime without stripping wax or attacking soft, original paint. The safest first step in any wash.",
    category: "detailing",
    merchant: "amazon",
    amazonSearch: "Adam's Polishes car wash shampoo",
    editorsPick: true,
  },
  {
    slug: "adams-clay-kit",
    name: "Adam's Polishes Clay Bar Kit",
    blurb:
      "Bonded contaminants dull even a clean car. Adam's clay kit brings paint back to glass-smooth before any polish or coating — you'll feel the difference with your eyes closed.",
    category: "detailing",
    merchant: "amazon",
    amazonSearch: "Adam's Polishes clay bar kit",
  },
  {
    slug: "griots-polisher",
    name: "Griot's Garage Random-Orbital Polisher",
    blurb:
      "The Griot's 6-inch random-orbital is the machine that made paint correction safe for weekend owners — far more forgiving on collector paint than a rotary. Buy once, cry once.",
    category: "detailing",
    merchant: "amazon",
    amazonSearch: "Griot's Garage random orbital polisher",
    editorsPick: true,
  },
  {
    slug: "rag-company-towels",
    name: "The Rag Company Microfiber Towels",
    blurb:
      "Cheap towels put the swirls right back in. The Rag Company's plush microfiber is the least glamorous upgrade that matters most — buy a stack and never look back.",
    category: "detailing",
    merchant: "amazon",
    amazonSearch: "The Rag Company microfiber detailing towels",
  },
  {
    slug: "adams-detail-spray",
    name: "Adam's Polishes Detail Spray",
    blurb:
      "For between-show dust and fingerprints, Adam's Detail Spray keeps a car presentable without a full wash. Keep a bottle in the trunk before every event.",
    category: "detailing",
    merchant: "amazon",
    amazonSearch: "Adam's Polishes detail spray",
  },

  // ---- Garage & Tools ----
  {
    slug: "royal-purple-oil",
    name: "Royal Purple High-Performance Motor Oil",
    blurb:
      "Royal Purple's synthetic is a garage favorite for cars that sit and then get driven hard — strong film strength and additive package for older engines. Match the grade to your marque's spec.",
    category: "garage",
    merchant: "amazon",
    amazonSearch: "Royal Purple high performance synthetic motor oil",
    editorsPick: true,
  },
  {
    slug: "arcan-floor-jack",
    name: "Arcan Low-Profile Aluminum Floor Jack",
    blurb:
      "The Arcan aluminum low-profile jack slides under lowered and vintage cars a standard jack can't reach — and won't wreck your back getting there.",
    category: "garage",
    merchant: "amazon",
    amazonSearch: "Arcan low profile aluminum floor jack",
  },
  {
    slug: "esco-jack-stands",
    name: "ESCO Jack Stands",
    blurb:
      "Never trust a jack alone. A pair of properly rated ESCO stands is the cheapest insurance in the garage — use them every single time.",
    category: "garage",
    merchant: "amazon",
    amazonSearch: "ESCO jack stands pair",
  },
  {
    slug: "tekton-torque-wrench",
    name: "Tekton Torque Wrench",
    blurb:
      "Original fasteners and alloy castings don't forgive over-torquing. A calibrated Tekton torque wrench protects the parts you can't easily replace.",
    category: "garage",
    merchant: "amazon",
    amazonSearch: "Tekton torque wrench 1/2 inch drive",
  },
  {
    slug: "bluedriver-scanner",
    name: "BlueDriver Bluetooth OBD-II Scanner",
    blurb:
      "For anything 1996-on, BlueDriver turns a mystery warning light into a specific answer — before you hand the car (and a blank check) to a shop.",
    category: "garage",
    merchant: "amazon",
    amazonSearch: "BlueDriver bluetooth OBD2 scanner",
  },

  // ---- Storage & Preservation ----
  {
    slug: "battery-tender-jr",
    name: "Battery Tender Junior",
    blurb:
      "The single most important thing for a stored car. The Deltran Battery Tender Junior keeps the battery healthy and the electronics happy through the whole off-season.",
    category: "storage",
    merchant: "amazon",
    amazonSearch: "Battery Tender Junior 800",
    editorsPick: true,
  },
  {
    slug: "stabil-fuel-stabilizer",
    name: "STA-BIL Fuel Stabilizer",
    blurb:
      "Modern ethanol fuel starts degrading in months. STA-BIL keeps the fuel system clean and varnish-free while the car sleeps — a few ounces saves a carburetor rebuild.",
    category: "storage",
    merchant: "amazon",
    amazonSearch: "STA-BIL fuel stabilizer",
  },
  {
    slug: "covercraft-car-cover",
    name: "Covercraft Indoor Car Cover",
    blurb:
      "A soft, breathable Covercraft indoor cover keeps dust off without trapping moisture against the paint. The indoor-specific weave is the detail that matters.",
    category: "storage",
    merchant: "amazon",
    amazonSearch: "Covercraft indoor car cover",
  },
  {
    slug: "race-ramps-flatstoppers",
    name: "Race Ramps FlatStoppers",
    blurb:
      "Tires flat-spot under a stationary car over a long winter. Race Ramps FlatStoppers spread the load and save your rubber — cheaper than a set of tires you didn't need to buy.",
    category: "storage",
    merchant: "amazon",
    amazonSearch: "Race Ramps FlatStoppers tire cradles",
  },

  // ---- The Library ----
  {
    slug: "workshop-manual",
    name: "Haynes / Bentley Workshop Manual",
    blurb:
      "Nothing beats the correct manual for torque specs, sequences, and wiring diagrams. Find the Haynes or Bentley for your marque — it pays for itself the first afternoon.",
    category: "library",
    merchant: "amazon",
    amazonSearch: "Haynes Bentley workshop manual classic car",
    editorsPick: true,
  },
  {
    slug: "buyers-guide",
    name: "Marque Buyer's Guides",
    blurb:
      "The definitive buyer's guide for your model steers you away from one bad car and it has paid for a shelf of books.",
    category: "library",
    merchant: "amazon",
    amazonSearch: "collector car buyers guide book",
  },
  {
    slug: "originality-guide",
    name: "Originality & Restoration References",
    blurb:
      "Concours judging hinges on details. Originality guides document the correct finishes, date codes, and part numbers most owners never learn.",
    category: "library",
    merchant: "amazon",
    amazonSearch: "classic car originality restoration guide book",
  },
  {
    slug: "coffee-table-book",
    name: "The Coffee-Table Books",
    blurb:
      "The books that make the case for why you own the thing at all. Great photography, better company on a slow evening.",
    category: "library",
    merchant: "amazon",
    amazonSearch: "classic car photography coffee table book",
  },

  // ---- For the Enthusiast ----
  {
    slug: "autoart-scale-model",
    name: "AUTOart 1:18 Scale Model",
    blurb:
      "The right AUTOart 1:18 of your car — opening panels, detailed engine, the works — is the gift every enthusiast quietly wants and never buys for themselves.",
    category: "enthusiast",
    merchant: "amazon",
    amazonSearch: "AUTOart 1:18 diecast model car",
  },
  {
    slug: "garage-art",
    name: "Garage Signs & Marque Art",
    blurb:
      "Period signage and marque art turn a garage into a room you actually want to spend time in.",
    category: "enthusiast",
    merchant: "amazon",
    amazonSearch: "vintage automotive garage sign metal",
  },
  {
    slug: "driving-gloves",
    name: "Leather Driving Gloves",
    blurb:
      "String-back driving gloves: entirely unnecessary, completely correct, and quietly wonderful.",
    category: "enthusiast",
    merchant: "amazon",
    amazonSearch: "leather string back driving gloves",
  },
  {
    slug: "art-print",
    name: "Automotive Art Prints",
    blurb:
      "A good print of the right car beats another poster every time — the finishing touch for an office or a hallway.",
    category: "enthusiast",
    merchant: "amazon",
    amazonSearch: "classic car art print poster",
  },
];

export function productsByCategory(key: ShopCategoryKey): ShopProduct[] {
  return SHOP_PRODUCTS.filter((p) => p.category === key);
}
