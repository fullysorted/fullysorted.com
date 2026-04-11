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
  /** Optional image path under /public for hero + OG share */
  heroImage?: string;
  /** Optional override for the OG share image. Defaults to heroImage. */
  ogImage?: string;
  /** Featured = pinned to top of /events index */
  featured?: boolean;
  /** Note from Chris (italicized callout on the detail page) */
  founderNote?: string;
}

export const events: FSEvent[] = [
  {
    slug: "la-jolla-concours-delegance-2026",
    title: "La Jolla Concours d'Elegance 2026",
    shortName: "La Jolla Concours d'Elegance",
    startDate: "2026-04-12",
    dateLabel: "April 12, 2026",
    city: "La Jolla",
    region: "California",
    venueName: "Ellen Browning Scripps Park",
    venueAddress: "Ellen Browning Scripps Park, La Jolla, CA 92037",
    category: "Concours",
    excerpt:
      "One of Southern California's most respected concours events, set on the cliffs above La Jolla Cove. Roughly 150 invited vehicles, judged by class, in one of the most beautiful settings in the country.",
    body: `## What it is

The La Jolla Concours d'Elegance is an invitation-only judged concours held annually on the lawn at Ellen Browning Scripps Park, directly above La Jolla Cove. The field typically includes around 150 vehicles spanning pre-war classics, post-war European exotics, American muscle, race cars, and a rotating featured marque.

It's smaller and more curated than the big national concours — and that's the point. You can actually walk the entire field, talk to every owner, and see every car the way it was meant to be seen.

## Why it matters for collectors

A few reasons the event punches above its weight:

**The setting.** It's on the Pacific. The light, the salt air, the backdrop — there is no better photographic environment for a concours-grade car in North America.

**The judging is serious.** Class judging is run by experienced judges with deep marque expertise. A class win at La Jolla means something.

**The provenance trail.** Cars that show here often surface later at the major spring auctions with a documented La Jolla appearance in the file. That matters.

**The community.** The cars-and-coffee, tour, and gala events around the main concours weekend are where serious West Coast collectors actually talk shop. If you're trying to understand current sentiment in the upper end of the market, this is the room to be in.

## The featured marques and honorees

Each year the event spotlights a marque, a class, or an automotive figure. The featured selections are announced ahead of the show on the official La Jolla Concours website, and the field is curated around them. Check the official site closer to the date for the current year's lineup.

## Tickets and access

General admission tickets, VIP packages, and patron tables are sold through the official La Jolla Concours website. Tickets sell out — the VIP and patron packages go first.

## What I'd do if you're going

If you're flying in for it, give yourself the full weekend. The Friday tour and the Saturday cars-and-coffee at the Cove are where you'll meet people. Sunday is the show. Bring sunscreen, bring a hat, and wear something you'd be comfortable in for six hours of walking on grass.

If you've never been — this is the one West Coast concours I'd fly across the country for.`,
    url: "https://lajollaconcours.com",
    heroImage: "/events/la-jolla-concours-hero.jpg",
    ogImage: "/events/la-jolla-concours-og.png",
    featured: true,
    founderNote:
      "Full disclosure: I'm Co-Chairman of the La Jolla Concours d'Elegance. I helped curate the field and I'll be on the lawn all weekend. If you're coming, find me — I'd rather meet you in person than over email.",
  },
];

export function getEventBySlug(slug: string): FSEvent | undefined {
  return events.find((e) => e.slug === slug);
}

export function getFeaturedEvents(): FSEvent[] {
  return events.filter((e) => e.featured);
}
