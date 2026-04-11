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
  {
    slug: "monterey-car-week-2026",
    title: "Monterey Car Week 2026",
    shortName: "Monterey Car Week",
    startDate: "2026-08-08",
    endDate: "2026-08-16",
    dateLabel: "August 8–16, 2026",
    city: "Monterey, Pebble Beach & Carmel",
    region: "California",
    venueName: "Monterey Peninsula",
    venueAddress: "Monterey, CA 93940",
    category: "Concours",
    tagline: "The most important week on the collector car calendar.",
    excerpt:
      "Nine days on the Monterey Peninsula. Pebble Beach Concours d'Elegance, The Quail, Concorso Italiano, RM Sotheby's, Gooding, Bonhams, Mecum, the Tour d'Elegance, and historic racing at Laguna Seca. If you only do one car week a year, this is the one.",
    body: `## The center of the collector car universe

For one week every August, the entire collector car world flies to a 17-mile stretch of California coast between Monterey, Pebble Beach, and Carmel. Auctions transact hundreds of millions of dollars. Concours fields stretch the length of fairways. Historic Formula 1 cars run flat out at Laguna Seca. Hotels are booked a year out. And every important conversation in this hobby happens, eventually, at some lawn party off 17 Mile Drive.

It's not a single event. It's the most concentrated collection of separate, world-class events anywhere in the car world, all running in parallel for nine days.

## The Sunday — Pebble Beach Concours d'Elegance

The week culminates **Sunday, August 16, 2026** with the 75th Pebble Beach Concours d'Elegance on the 18th fairway of Pebble Beach Golf Links. It is the most important concours in the world. Best of Show at Pebble is the most coveted prize a collector car can win. The field is invitation-only, every car is meticulously researched, and the judging is brutal. Sunday morning the cars roll up onto the lawn at dawn while the fog burns off the bay.

## The auctions

Four major houses run sales across the week, and together they typically transact between $400M and $500M:

- **RM Sotheby's Monterey** — Thursday/Friday at the Monterey Conference Center
- **Gooding & Company** — Friday/Saturday at the Pebble Beach equestrian center
- **Bonhams Quail Lodge** — Friday at Quail Lodge in Carmel Valley
- **Mecum Monterey** — Wednesday through Saturday at the Hyatt Regency

Whether you're buying or just watching, the auctions are the financial heartbeat of the week. Get a paddle even if you're not bidding — the floor energy is the point.

## Friday — The Quail

**The Quail, A Motorsports Gathering** on Friday, August 14 at Quail Lodge & Golf Club is the most exclusive ticket of the week. Capped attendance, lavish hospitality, manufacturer concept reveals, and a curated field that punches well above its size. Tickets sell out in hours when they go on sale.

## Concorso Italiano

**Concorso Italiano** on Saturday, August 15 at Black Horse Golf Course in Seaside is the all-Italian celebration — Ferrari, Lamborghini, Maserati, Alfa Romeo, Lancia, Fiat. Less precious than Pebble, more festival, just as serious about the cars.

## Historic racing — Monterey Motorsports Reunion

**WeatherTech Raceway Laguna Seca** hosts the Monterey Motorsports Reunion the weekend of August 14–16, with the Pre-Reunion the prior weekend. Pre-war GP cars, '50s sports racers, '60s F1, Can-Am, Trans-Am, Group C — the cars run hard. Pre-Reunion is the local secret: same paddock, half the crowd.

## Pebble Beach Tour d'Elegance

**Thursday, August 13**, the Pebble Beach Tour d'Elegance puts the Concours field on the road for a 70-mile drive down Highway 1 through Big Sur and back. If you can't get into Sunday, stand on Ocean Avenue in Carmel around lunchtime and watch the field roll through town. Free, public, unforgettable.

## What I'd do if you've never been

Don't try to do everything. You can't. Pick three things and do them well. My recommendation for first-timers: Tour d'Elegance Thursday morning in Carmel (free), one auction preview (RM or Gooding), and Sunday at Pebble. That's plenty for a first year.

If you're going deeper: add Pre-Reunion at Laguna Seca the weekend before, The Quail Friday, and Concorso Italiano Saturday.

Book your hotel in January. Seriously. By April everything within an hour is gone.`,
    url: "https://pebblebeachconcours.net",
    heroImage: "/events/monterey-car-week-hero.jpg",
    ogImage: "/events/monterey-car-week-og.png",
    featured: true,
    schedule: [
      {
        day: "Saturday, August 8 – Sunday, August 9",
        name: "Monterey Pre-Reunion at Laguna Seca",
        description:
          "Same cars, same paddock, half the crowd. The locals' weekend at WeatherTech Raceway Laguna Seca before the main Reunion.",
      },
      {
        day: "Wednesday, August 12 – Saturday, August 15",
        name: "Mecum Monterey",
        description:
          "Mecum's Monterey sale at the Hyatt Regency Monterey — typically 600+ collector cars across four days.",
      },
      {
        day: "Thursday, August 13",
        name: "Pebble Beach Tour d'Elegance",
        description:
          "The Concours field hits the road for a 70-mile drive down Highway 1 through Big Sur. Free to watch from Carmel.",
      },
      {
        day: "Thursday, August 13 – Friday, August 14",
        name: "RM Sotheby's Monterey",
        description:
          "RM Sotheby's flagship US sale at the Monterey Conference Center. Consistently the highest-grossing auction of the week.",
      },
      {
        day: "Friday, August 14",
        name: "The Quail, A Motorsports Gathering",
        description:
          "The most exclusive ticket of Car Week. Capped attendance, manufacturer reveals, and a curated field at Quail Lodge in Carmel Valley.",
      },
      {
        day: "Friday, August 14",
        name: "Bonhams Quail Lodge Auction",
        description:
          "Bonhams' Monterey sale at Quail Lodge — runs the same day as The Quail gathering.",
      },
      {
        day: "Friday, August 14 – Saturday, August 15",
        name: "Gooding & Company Pebble Beach",
        description:
          "Gooding's flagship sale on the Pebble Beach equestrian center grounds.",
      },
      {
        day: "Friday, August 14 – Sunday, August 16",
        name: "Monterey Motorsports Reunion",
        description:
          "Historic racing at WeatherTech Raceway Laguna Seca. Pre-war GP through Group C — the cars run hard.",
      },
      {
        day: "Saturday, August 15",
        name: "Concorso Italiano",
        description:
          "The all-Italian celebration at Black Horse Golf Course in Seaside. Ferrari, Lamborghini, Maserati, Alfa Romeo, Lancia, Fiat.",
      },
      {
        day: "Sunday, August 16",
        name: "Pebble Beach Concours d'Elegance",
        description:
          "The 75th Pebble Beach Concours on the 18th fairway of Pebble Beach Golf Links. The most important concours in the world.",
      },
    ],
  },
  {
    slug: "concorso-villa-deste-2026",
    title: "Concorso d'Eleganza Villa d'Este 2026",
    shortName: "Villa d'Este",
    startDate: "2026-06-05",
    endDate: "2026-06-07",
    dateLabel: "June 5–7, 2026",
    city: "Cernobbio, Lake Como",
    region: "Italy",
    venueName: "Villa d'Este & Villa Erba",
    venueAddress: "Via Regina 40, 22012 Cernobbio CO, Italy",
    category: "Concours",
    tagline: "The European Pebble Beach. Lake Como, since 1929.",
    excerpt:
      "The most beautiful concours in the world. A weekend on the shores of Lake Como hosted by the Villa d'Este Hotel and the BMW Group, with a private Saturday at Villa d'Este and a public Sunday at Villa Erba.",
    body: `## The most beautiful setting in the car world

The Concorso d'Eleganza Villa d'Este has been held on the shores of Lake Como since 1929. There is no contest about the venue: a 16th-century villa hotel built into the hillside above the lake, with the cars displayed on the hotel's private gardens and the Alps framing the view across the water. Pebble Beach is the most important concours in the world; Villa d'Este is the most beautiful.

The event is co-organized by the Villa d'Este Hotel and the BMW Group, which has been the title partner since 1999 and the operating partner since 2009. The format is split across two days and two venues.

## Saturday — Villa d'Este (private)

Saturday is the invitation-only day at Villa d'Este itself. Roughly 50 cars are displayed on the hotel's terraced gardens directly above the lake, judged by an international jury. The setting is intimate — small field, beautiful cars, beautiful lake, and a guest list that reads like a who's who of European collecting.

## Sunday — Villa Erba (public)

Sunday opens to the public at neighboring **Villa Erba**, a separate lakeside estate a short walk down the shoreline. The full Concours field moves to Villa Erba for the day, joined by a much larger gathering of clubs, special displays, and a public concours alongside the main event. Tickets are sold to the public for Sunday only.

## Best of Show

The two Best of Show prizes — the Coppa d'Oro Villa d'Este (voted by the public on Sunday) and the Trofeo BMW Group (voted by the jury on Saturday) — are among the most prestigious wins in vintage car collecting. Cars that win at Villa d'Este are immediately validated as among the best examples in the world.

## What I'd do if you're going

Fly into Milan Malpensa, drive to Como (about an hour), and stay anywhere in or around Cernobbio if you can manage it. Saturday is invitation-only, so unless you're a guest of an exhibitor, this is a Sunday-at-Villa-Erba trip. Get the early ferry from Como, arrive at Villa Erba right when it opens, and budget a full day. The lake itself is the second show — bring a camera and don't rush.

If you have an extra day, drive the lake. The roads around Como are some of the best driving roads in Europe and the Alfa and Ferrari factories are both within striking distance.`,
    url: "https://www.concorsodeleganzavilladeste.com",
    heroImage: "/events/villa-deste-hero.jpg",
    ogImage: "/events/villa-deste-og.png",
    featured: true,
  },
  {
    slug: "monaco-historique-2026",
    title: "Grand Prix de Monaco Historique 2026",
    shortName: "Monaco Historique",
    startDate: "2026-05-08",
    endDate: "2026-05-10",
    dateLabel: "May 8–10, 2026",
    city: "Monte Carlo",
    region: "Monaco",
    venueName: "Circuit de Monaco",
    venueAddress: "Circuit de Monaco, Monte Carlo, Monaco",
    category: "Tour",
    tagline: "Pre-war GP cars and historic F1 on the streets of Monte Carlo.",
    excerpt:
      "The biennial historic Grand Prix on the actual Monaco circuit. Pre-war Bugattis, '50s and '60s F1, sports racers, and Cosworth-era F1 cars all running flat out through Casino Square and down to the harbor — two weeks before the modern F1 race uses the same streets.",
    body: `## A real Grand Prix on the real circuit

Every two years — only in even years — the Automobile Club de Monaco transforms the streets of Monte Carlo into a historic Grand Prix circuit two weekends before the modern Formula 1 race. Same circuit. Same Casino Square. Same harbor chicane. Same tunnel. Different cars: pre-war Bugattis and ERAs, '50s front-engine F1, '60s and '70s rear-engine F1, sports racers, and Cosworth-era 3-litre F1 cars from the '70s and early '80s.

This is not a parade. The cars run flat out, in anger, on the actual circuit, with proper grids and proper races. Drivers crash. Marshals work. The Armco bites.

## Series

The weekend is divided into seven or eight series grouped by era and class — pre-war GP, post-war front-engine F1, '60s 1.5-litre F1, '60s/'70s 3-litre F1, '70s F3, sports racers, and so on. Each series gets practice on Friday, qualifying Saturday, and a race on Sunday.

## Why this matters

There are exactly two ways to see what a real Monaco Grand Prix from the 1950s, '60s, or '70s actually looked and sounded like. One is grainy newsreel footage. The other is to stand at Casino Square or Tabac corner during this weekend and watch the actual cars, on the actual circuit, doing what they were built to do.

The Monaco Historique is the only event in the world that puts genuine historic GP cars on a genuine GP circuit with genuine Armco and genuine consequences. Goodwood Revival is incredible but it's a closed track. The Mille Miglia is incredible but it's a road rally. This is a race, in Monte Carlo, on the streets where Fangio and Moss and Stewart and Lauda raced.

## What I'd do if you're going

Fly into Nice, take the train along the coast (one of the most beautiful train rides anywhere), and stay in or near Monte Carlo if your wallet allows — otherwise base in Beaulieu-sur-Mer or Èze and train in. General admission tickets get you into bleacher sections at several corners; grandstand seats at Casino, Sainte-Dévote, or the harbor cost more but are worth it if you can swing it.

This is biennial. If you miss 2026, the next one is 2028. Go.`,
    url: "https://www.monaco-historique.com",
    heroImage: "/events/monaco-historique-hero.jpg",
    ogImage: "/events/monaco-historique-og.png",
    featured: true,
  },
];

export function getEventBySlug(slug: string): FSEvent | undefined {
  return events.find((e) => e.slug === slug);
}

export function getFeaturedEvents(): FSEvent[] {
  return events.filter((e) => e.featured);
}
