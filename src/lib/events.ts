export interface FSEvent {
  slug: string;
  title: string;
  shortName: string;
  /** ISO date or date-range string for the event start */
  startDate: string; // YYYY-MM-DD
  endDate?: string; // YYYY-MM-DD (omit if single-day)
  /** Human-friendly date label, e.g. "April 12, 2026" or "April 12–13, 2026" */
  dateLabel: string;
  city: string;
  region: string; // state / country
  venueName: string;
  venueAddress: string;
  /** Category badge — one of "Concours", "Auction", "Cars & Coffee", "Tour", "Festival" */
  category: string;
  /** Short hero blurb, 1–2 sentences */
  excerpt: string;
  /** Long-form description in light markdown (## headings, **bold**, paragraphs) */
  body: string;
  /** Optional ticket/info URL */
  url?: string;
  /** Optional tagline shown under the title */
  tagline?: string;
  /** Optional charity / beneficiary callout */
  beneficiary?: string;
  /** Optional image path under /public for hero + OG share */
  heroImage?: string;
  /** Optional override for the OG share image. Defaults to heroImage. */
  ogImage?: string;
  /** Featured = pinned to top of /events index */
  featured?: boolean;
  /** Note from Chris (italicized callout on the detail page) */
  founderNote?: string;
  /** Structured weekend schedule entries */
  schedule?: Array<{
    day: string; // e.g. "Friday, April 24"
    name: string; // e.g. "Motorvault VIP Soirée"
    time?: string; // e.g. "6:00 PM – 10:00 PM"
    description?: string;
  }>;
  /** Structured ticket pricing entries */
  tickets?: Array<{
    name: string;
    price: string;
    note?: string;
  }>;
}

export const events: FSEvent[] = [
  {
    slug: "la-jolla-concours-delegance-2026",
    title: "La Jolla Concours d'Elegance 2026",
    shortName: "La Jolla Concours d'Elegance",
    startDate: "2026-04-24",
    endDate: "2026-04-26",
    dateLabel: "April 24–26, 2026",
    city: "La Jolla",
    region: "California",
    venueName: "Ellen Browning Scripps Park · La Jolla Cove",
    venueAddress: "1100 Coast Blvd, La Jolla, CA 92037",
    category: "Concours",
    tagline: "World-class cars, world-class experience.",
    beneficiary: "La Jolla Historical Society",
    excerpt:
      "The 20th annual La Jolla Concours d'Elegance — three days on the cliffs above La Jolla Cove featuring over 150 exquisite, timeless automobiles, plus a Friday VIP soirée and Saturday's Porsches & Power on Prospect.",
    body: `## A 20-year tradition on the Pacific

The 20th annual La Jolla Concours d'Elegance returns April 24–26, 2026 to its home on the lawn at Ellen Browning Scripps Park, directly above La Jolla Cove. Over the course of three days, the event brings together world-class automobiles, the people who own them, and one of the most beautiful natural settings on the West Coast.

What started in January 2004 as a winter showcase for downtown La Jolla, dreamed up by a few local business owners, has grown into one of the most respected concours events in California. By 2012 the format had matured into the full Concours d'Elegance you'll see today. Twenty years in, it's still curated, still community-rooted, and still unmistakably La Jolla.

## Sunday — The Concours

The main concours runs **Sunday, April 26 from 9:00 AM to 4:00 PM** at La Jolla Cove. The field features over 150 exquisite, timeless automobiles — pre-war classics, post-war European exotics, American muscle, sports racing cars, and modern collectibles — judged by class on the lawn at Scripps Park, with the Pacific as the backdrop.

It's smaller and more curated than the big national concours. That's the point. You can walk the entire field, talk to every owner, and see every car the way it was meant to be seen.

## Friday — Motorvault VIP Soirée

The weekend opens **Friday, April 24 from 6:00 to 10:00 PM** with the Motorvault soirée — an evening of taste and indulgence beside the Pacific Ocean. It's the kind of night where the conversations that shape the rest of the weekend actually happen. Limited capacity, ticketed separately or included with the Ultimate VIP package.

## Saturday — Porsches & Power on Prospect

**Saturday, April 25 from 5:00 to 9:00 PM**, La Jolla Village hosts Porsches & Power on Prospect — Porsches and other performance machinery taking over Prospect Street in the heart of the Village. Free and open to the public. Bring the family, bring a friend who doesn't normally do car events, and let the village do the work.

## Tickets

Tickets are sold through the official La Jolla Concours website. Early-bird pricing closes April 15, 2026 — after that, every tier increases. Buy early.

- **General Admission (Sunday)** — $109 early-bird / $129 after April 15
- **VIP Lounge (Sunday)** — $399 early-bird / $449 after April 15
- **Ocean Suite Lounge (Sunday)** — $545 early-bird / $565 after April 15
- **Motorvault / Friday VIP Soirée** — $399 early-bird / $449 after April 15
- **Ultimate VIP (Friday + Sunday)** — $699 early-bird / $799 after April 15
- **Porsches & Power on Prospect (Saturday)** — Free

## The cause behind the cars

The La Jolla Concours d'Elegance benefits the **La Jolla Historical Society**, founded in 1964 to collect, preserve, and present the heritage of the community for the educational benefit of current and future citizens and visitors. Every ticket sold and every sponsorship secured directly supports that mission. The cars are the draw. Preserving the place where they live is the point.

## What I'd do if you're going

If you're flying in, give yourself the full weekend. Friday night is where you meet people. Saturday is for the village. Sunday is the show. Wear shoes you can walk on grass in for six hours, bring a hat, bring sunscreen, and don't try to do the whole field in the first hour — pace yourself.

If you've never been to this event before, this is the year. Twenty years in, world-class field, world-class setting. There is no better West Coast concours.`,
    url: "https://lajollaconcours.com",
    heroImage: "/events/la-jolla-concours-hero.jpg",
    ogImage: "/events/la-jolla-concours-og.png",
    featured: true,
    founderNote:
      "Full disclosure: I'm Co-Chairman of the La Jolla Concours d'Elegance. I've been involved in shaping the program and I'll be on the lawn all three days. If you're coming, find me — I'd rather meet you in person than over email.",
    schedule: [
      {
        day: "Friday, April 24",
        name: "Motorvault VIP Soirée",
        time: "6:00 PM – 10:00 PM",
        description:
          "An evening of taste and indulgence beside the Pacific Ocean. Limited capacity, ticketed.",
      },
      {
        day: "Saturday, April 25",
        name: "Porsches & Power on Prospect",
        time: "5:00 PM – 9:00 PM",
        description:
          "Porsches and performance machinery take over Prospect Street in the heart of La Jolla Village. Free and open to the public.",
      },
      {
        day: "Sunday, April 26",
        name: "La Jolla Concours d'Elegance",
        time: "9:00 AM – 4:00 PM",
        description:
          "The main event — over 150 exquisite, timeless automobiles judged by class on the lawn at Ellen Browning Scripps Park.",
      },
    ],
    tickets: [
      {
        name: "General Admission (Sunday)",
        price: "$109",
        note: "$129 after April 15",
      },
      {
        name: "VIP Lounge (Sunday)",
        price: "$399",
        note: "$449 after April 15",
      },
      {
        name: "Ocean Suite Lounge (Sunday)",
        price: "$545",
        note: "$565 after April 15",
      },
      {
        name: "Motorvault VIP Soirée (Friday)",
        price: "$399",
        note: "$449 after April 15",
      },
      {
        name: "Ultimate VIP (Friday + Sunday)",
        price: "$699",
        note: "$799 after April 15",
      },
      {
        name: "Porsches & Power on Prospect (Saturday)",
        price: "Free",
      },
    ],
  },
];

export function getEventBySlug(slug: string): FSEvent | undefined {
  return events.find((e) => e.slug === slug);
}

export function getFeaturedEvents(): FSEvent[] {
  return events.filter((e) => e.featured);
}
