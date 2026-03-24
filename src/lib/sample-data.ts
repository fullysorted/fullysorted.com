export interface Vehicle {
  id: string;
  title: string;
  year: number;
  make: string;
  model: string;
  variant?: string;
  price: number;
  mileage: number;
  transmission: string;
  engine: string;
  exteriorColor: string;
  interiorColor: string;
  condition: "Excellent" | "Good" | "Fair" | "Project";
  originality: "Original" | "Restored" | "Modified";
  location: string;
  category: string;
  photoCount: number;
  imageUrl: string;
  saves: number;
  comments: number;
  featured: boolean;
  sortedPrice: boolean;
  description: string;
  chrisTake: string;
  compAvg: number;
  compCount: number;
  compSource: string;
  highlights: string[];
  status: "active" | "sold";
  listedAt: string;
  slug: string;
}

export const sampleVehicles: Vehicle[] = [
  {
    id: "1",
    title: "1967 Ford Mustang Fastback S-Code",
    year: 1967,
    make: "Ford",
    model: "Mustang",
    variant: "Fastback S-Code",
    price: 74500,
    mileage: 67200,
    transmission: "4-Speed Manual",
    engine: "390 FE V8",
    exteriorColor: "Acapulco Blue",
    interiorColor: "Black Vinyl",
    condition: "Good",
    originality: "Restored",
    location: "San Diego, CA",
    category: "Muscle",
    photoCount: 24,
    imageUrl: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&h=500&fit=crop",
    saves: 47,
    comments: 12,
    featured: true,
    sortedPrice: true,
    description: "This is a real-deal, numbers-matching '67 S-Code. The paint's been redone — well — and the interior is correct to the build sheet.",
    chrisTake: "At this price point, you're buying one of the last affordable big-block Mustangs before the market catches up. I'd drive this one home.",
    compAvg: 71200,
    compCount: 14,
    compSource: "BaT results, last 18 months",
    highlights: ["Matching-numbers 390 FE V8", "4-speed manual", "Marti Report included", "Correct Acapulco Blue repaint"],
    status: "active",
    listedAt: "2026-03-20",
    slug: "1967-ford-mustang-fastback-s-code",
  },
  {
    id: "2",
    title: "1973 Porsche 911T Targa",
    year: 1973,
    make: "Porsche",
    model: "911T",
    variant: "Targa",
    price: 58000,
    mileage: 89400,
    transmission: "5-Speed Manual",
    engine: "2.4L Flat-6",
    exteriorColor: "Sepia Brown",
    interiorColor: "Tan Leather",
    condition: "Good",
    originality: "Original",
    location: "La Jolla, CA",
    category: "European",
    photoCount: 32,
    imageUrl: "https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?w=800&h=500&fit=crop",
    saves: 63,
    comments: 18,
    featured: true,
    sortedPrice: true,
    description: "CIS injection car with matching numbers throughout. Original Sepia Brown is one of the rarest colors Porsche offered in '73.",
    chrisTake: "Air-cooled 911s have cooled off about 12% from the 2023 peak. That's not a crash — that's the market catching its breath. This is your window.",
    compAvg: 62800,
    compCount: 22,
    compSource: "BaT results, last 18 months",
    highlights: ["Matching numbers", "Rare Sepia Brown", "CIS injection", "Tools and books included"],
    status: "active",
    listedAt: "2026-03-18",
    slug: "1973-porsche-911t-targa",
  },
  {
    id: "3",
    title: "1971 Datsun 240Z Series 1",
    year: 1971,
    make: "Datsun",
    model: "240Z",
    variant: "Series 1",
    price: 42500,
    mileage: 74300,
    transmission: "4-Speed Manual",
    engine: "2.4L Inline-6",
    exteriorColor: "Orange",
    interiorColor: "Black",
    condition: "Good",
    originality: "Restored",
    location: "Oceanside, CA",
    category: "JDM",
    photoCount: 28,
    imageUrl: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&h=500&fit=crop",
    saves: 38,
    comments: 9,
    featured: false,
    sortedPrice: true,
    description: "Clean Series 1 with the correct round-top SU carburetors and the early flat-top dashboard. Full respray in factory Orange.",
    chrisTake: "240Zs are the gateway drug to Japanese classics. This one's sorted — the Series 1 details are all correct and the price is right.",
    compAvg: 44800,
    compCount: 11,
    compSource: "BaT results, last 18 months",
    highlights: ["Series 1 with round-top SUs", "Factory Orange respray", "Flat-top dashboard", "Rust-free California car"],
    status: "active",
    listedAt: "2026-03-22",
    slug: "1971-datsun-240z-series-1",
  },
  {
    id: "4",
    title: "1988 BMW M3 E30",
    year: 1988,
    make: "BMW",
    model: "M3",
    variant: "E30",
    price: 82000,
    mileage: 112000,
    transmission: "5-Speed Manual (Getrag 265)",
    engine: "2.3L S14 Inline-4",
    exteriorColor: "Alpine White",
    interiorColor: "Cardinal Red Leather",
    condition: "Excellent",
    originality: "Original",
    location: "Encinitas, CA",
    category: "European",
    photoCount: 36,
    imageUrl: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=500&fit=crop",
    saves: 89,
    comments: 24,
    featured: true,
    sortedPrice: false,
    description: "Two-owner E30 M3 with full service history from new. Alpine White over Cardinal Red is the combination collectors fight over.",
    chrisTake: "E30 M3s don't dip. They just don't. This one has the service history, the color combo, and the provenance. At $82k it's strong money, but you'll thank yourself in five years.",
    compAvg: 78500,
    compCount: 18,
    compSource: "BaT results, last 18 months",
    highlights: ["Two-owner from new", "Full service history", "Alpine White / Cardinal Red", "Getrag 265 dogleg 5-speed"],
    status: "active",
    listedAt: "2026-03-15",
    slug: "1988-bmw-m3-e30",
  },
  {
    id: "5",
    title: "1969 Chevrolet Camaro Z/28",
    year: 1969,
    make: "Chevrolet",
    model: "Camaro",
    variant: "Z/28",
    price: 68000,
    mileage: 54800,
    transmission: "4-Speed Muncie M21",
    engine: "302 DZ V8",
    exteriorColor: "Hugger Orange",
    interiorColor: "Black Houndstooth",
    condition: "Good",
    originality: "Restored",
    location: "Escondido, CA",
    category: "Muscle",
    photoCount: 22,
    imageUrl: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=500&fit=crop",
    saves: 55,
    comments: 14,
    featured: false,
    sortedPrice: true,
    description: "Correct DZ 302 with the cross-ram intake. Hugger Orange over black houndstooth is period-correct and stunning.",
    chrisTake: "The '69 Z/28 is one of the all-time greats. This one's been restored right — not over-restored — and the DZ 302 is the real deal. Properly sorted.",
    compAvg: 72000,
    compCount: 9,
    compSource: "BaT results, last 24 months",
    highlights: ["Correct DZ 302 V8", "Cross-ram intake", "Muncie M21 close-ratio", "Houndstooth interior"],
    status: "active",
    listedAt: "2026-03-19",
    slug: "1969-chevrolet-camaro-z28",
  },
  {
    id: "6",
    title: "1994 Toyota Supra RZ Twin Turbo",
    year: 1994,
    make: "Toyota",
    model: "Supra",
    variant: "RZ Twin Turbo",
    price: 118000,
    mileage: 62000,
    transmission: "6-Speed Getrag V160",
    engine: "2JZ-GTE Twin Turbo",
    exteriorColor: "Super White",
    interiorColor: "Black Leather",
    condition: "Excellent",
    originality: "Modified",
    location: "San Diego, CA",
    category: "JDM",
    photoCount: 40,
    imageUrl: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&h=500&fit=crop",
    saves: 124,
    comments: 31,
    featured: true,
    sortedPrice: false,
    description: "JDM-spec RZ with the Getrag V160 6-speed. Tastefully modified — single turbo conversion, upgraded intercooler, and a proper tune making 520whp.",
    chrisTake: "The A80 Supra market is insane and it's not slowing down. JDM-spec RZs with the 6-speed are the ones to have. Modified but not abused — this one was built by someone who knew what they were doing.",
    compAvg: 125000,
    compCount: 7,
    compSource: "BaT + private sales, last 18 months",
    highlights: ["JDM-spec RZ", "Getrag V160 6-speed", "Single turbo 520whp", "Full maintenance records"],
    status: "active",
    listedAt: "2026-03-21",
    slug: "1994-toyota-supra-rz-twin-turbo",
  },
];

export interface MarketMover {
  segment: string;
  trend: "up" | "down" | "flat";
  percentage: number;
  insight: string;
}

export const marketMovers: MarketMover[] = [
  {
    segment: "Air-Cooled 911s",
    trend: "down",
    percentage: 3.2,
    insight: "Buying window — prices haven't been this accessible since 2021",
  },
  {
    segment: "E30 M3s",
    trend: "up",
    percentage: 1.8,
    insight: "Steady climb continues. No signs of slowing",
  },
  {
    segment: "JDM Icons (Supra, NSX, GT-R)",
    trend: "up",
    percentage: 4.1,
    insight: "Generational demand is real — new money, same icons",
  },
  {
    segment: "C3 Corvettes",
    trend: "flat",
    percentage: 0.3,
    insight: "Holding steady. Great value if you find the right one",
  },
  {
    segment: "'60s Muscle (Mustang, Camaro)",
    trend: "down",
    percentage: 2.1,
    insight: "Slight correction from 2024 highs. Base models softening, big blocks holding",
  },
  {
    segment: "240Z / Early Datsun",
    trend: "up",
    percentage: 5.6,
    insight: "Fastest-rising segment. Clean Series 1s are crossing $50k regularly",
  },
];
