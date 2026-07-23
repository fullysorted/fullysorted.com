import type { Merchant } from "@/lib/affiliate";

/**
 * Garage Essentials — a curated, editorial set of gear worth owning, not a
 * storefront. Each entry earns its place on the recommendation, not the SKU.
 * Swap in specific products (add an `asin`) or specialist/auction affiliate
 * links (set `url` + `merchant`) anytime; the shop renders them the same way.
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
    intro: "The tools worth owning before you need them, and worth buying once — properly.",
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
    slug: "ph-neutral-shampoo",
    name: "pH-neutral car shampoo",
    blurb:
      "A pH-neutral shampoo lifts dirt without stripping wax or attacking soft, original paint. The safest possible first step in any wash.",
    category: "detailing",
    merchant: "amazon",
    amazonSearch: "pH neutral car shampoo detailing",
  },
  {
    slug: "clay-decontamination-kit",
    name: "Clay decontamination kit",
    blurb:
      "Bonded contaminants dull even a clean car. A clay treatment brings paint back to glass-smooth before any polish or coating — you'll feel the difference with your eyes closed.",
    category: "detailing",
    merchant: "amazon",
    amazonSearch: "clay bar decontamination kit auto detailing",
  },
  {
    slug: "dual-action-polisher",
    name: "Dual-action polisher",
    blurb:
      "A random-orbital (dual-action) polisher corrects swirls far more safely than a rotary — the forgiving choice for irreplaceable collector paint. Buy once, cry once.",
    category: "detailing",
    merchant: "amazon",
    amazonSearch: "dual action random orbital car polisher",
    editorsPick: true,
  },
  {
    slug: "plush-microfiber-towels",
    name: "Plush microfiber towels",
    blurb:
      "Cheap towels put the swirls right back in. A set of deep, plush microfiber is the least glamorous upgrade that matters most.",
    category: "detailing",
    merchant: "amazon",
    amazonSearch: "plush microfiber detailing towels",
  },
  {
    slug: "quick-detailer",
    name: "Quick detailer spray",
    blurb:
      "For between-show dust and fingerprints, a quick detailer keeps a car presentable without a full wash. Keep one in the trunk before every event.",
    category: "detailing",
    merchant: "amazon",
    amazonSearch: "quick detailer spray waterless wash",
  },

  // ---- Garage & Tools ----
  {
    slug: "low-profile-floor-jack",
    name: "Low-profile aluminum floor jack",
    blurb:
      "A low-profile jack slides under lowered and vintage cars that a standard jack simply can't reach. Aluminum saves your back on the way in and out of the garage.",
    category: "garage",
    merchant: "amazon",
    amazonSearch: "low profile aluminum floor jack",
  },
  {
    slug: "jack-stands",
    name: "Rated jack stands",
    blurb:
      "Never trust a jack alone. A pair of properly rated stands is the cheapest insurance in the garage — use them every single time.",
    category: "garage",
    merchant: "amazon",
    amazonSearch: "jack stands 3 ton pair",
  },
  {
    slug: "torque-wrench",
    name: "Calibrated torque wrench",
    blurb:
      "Original fasteners and alloy castings don't forgive over-torquing. A calibrated torque wrench protects the parts you can't easily replace.",
    category: "garage",
    merchant: "amazon",
    amazonSearch: "digital torque wrench 1/2 inch",
  },
  {
    slug: "obd2-scanner",
    name: "Bluetooth OBD-II scanner",
    blurb:
      "For anything 1996-on, a scanner turns a mystery warning light into a specific answer — before you hand the car (and a blank check) to a shop.",
    category: "garage",
    merchant: "amazon",
    amazonSearch: "obd2 bluetooth scanner",
  },

  // ---- Storage & Preservation ----
  {
    slug: "battery-tender",
    name: "Battery tender / trickle charger",
    blurb:
      "The single most important thing for a stored car. A quality tender keeps the battery healthy and the electronics happy through the whole off-season.",
    category: "storage",
    merchant: "amazon",
    amazonSearch: "battery tender trickle charger",
    editorsPick: true,
  },
  {
    slug: "fuel-stabilizer",
    name: "Fuel stabilizer",
    blurb:
      "Modern ethanol fuel starts degrading in months. Stabilizer keeps the fuel system clean and varnish-free while the car sleeps.",
    category: "storage",
    merchant: "amazon",
    amazonSearch: "fuel stabilizer ethanol treatment",
  },
  {
    slug: "indoor-car-cover",
    name: "Breathable indoor car cover",
    blurb:
      "A soft, breathable indoor cover keeps dust off without trapping moisture against the paint. The indoor-specific weave is the detail that matters.",
    category: "storage",
    merchant: "amazon",
    amazonSearch: "indoor car cover breathable soft",
  },
  {
    slug: "tire-cradles",
    name: "Tire cradles",
    blurb:
      "Tires flat-spot under a stationary car over a long winter. Cradles spread the load and save your rubber — cheaper than a set of tires you didn't need to buy.",
    category: "storage",
    merchant: "amazon",
    amazonSearch: "tire cradles flat spot prevention storage",
  },

  // ---- The Library ----
  {
    slug: "workshop-manual",
    name: "Factory / workshop manual",
    blurb:
      "Nothing beats the correct manual for torque specs, sequences, and wiring diagrams. Find the one for your marque — it pays for itself the first afternoon.",
    category: "library",
    merchant: "amazon",
    amazonSearch: "classic car workshop manual haynes",
    editorsPick: true,
  },
  {
    slug: "buyers-guide",
    name: "Marque buyer's guides",
    blurb:
      "The definitive buyer's guide for your model steers you away from one bad car and it has paid for a shelf of books.",
    category: "library",
    merchant: "amazon",
    amazonSearch: "collector car buyers guide book",
  },
  {
    slug: "originality-guide",
    name: "Originality & restoration references",
    blurb:
      "Concours judging hinges on details. Originality guides document the correct finishes, date codes, and part numbers most owners never learn.",
    category: "library",
    merchant: "amazon",
    amazonSearch: "classic car originality restoration guide book",
  },
  {
    slug: "coffee-table-book",
    name: "The coffee-table books",
    blurb:
      "The books that make the case for why you own the thing at all. Great photography, better company on a slow evening.",
    category: "library",
    merchant: "amazon",
    amazonSearch: "classic car photography coffee table book",
  },

  // ---- For the Enthusiast ----
  {
    slug: "scale-model",
    name: "1:18 scale model",
    blurb:
      "The right 1:18 die-cast of your car is the gift every enthusiast quietly wants and never buys for themselves.",
    category: "enthusiast",
    merchant: "amazon",
    amazonSearch: "1:18 diecast classic car model",
  },
  {
    slug: "garage-art",
    name: "Garage signs & marque art",
    blurb:
      "Period signage and marque art turn a garage into a room you actually want to spend time in.",
    category: "enthusiast",
    merchant: "amazon",
    amazonSearch: "vintage automotive garage sign metal",
  },
  {
    slug: "driving-gloves",
    name: "Leather driving gloves",
    blurb:
      "String-back driving gloves: entirely unnecessary, completely correct, and quietly wonderful.",
    category: "enthusiast",
    merchant: "amazon",
    amazonSearch: "leather string back driving gloves",
  },
  {
    slug: "art-print",
    name: "Automotive art prints",
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
