import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  ExternalLink,
  ArrowRight,
  Heart,
  Ticket,
  Clock,
} from "lucide-react";
import { events, getEventBySlug } from "@/lib/events";
import { JsonLd } from "@/components/seo/JsonLd";

interface Props {
  params: Promise<{ slug: string }>;
}

const SITE = "https://fullysorted.com";
const FALLBACK_OG = "/opengraph-image.png";

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return { title: "Event Not Found" };

  const ogImage =
    event.ogImage ?? event.heroImage ?? FALLBACK_OG;
  const url = `${SITE}/events/${event.slug}`;
  const title = `${event.title} — ${event.dateLabel}`;
  const description = event.excerpt;

  return {
    title,
    description,
    alternates: { canonical: `/events/${event.slug}` },
    openGraph: {
      type: "article",
      title,
      description,
      url,
      siteName: "Fully Sorted",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: event.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

// Editorial hero photography — moody classics that sit well under the green overlay
const HERO_PHOTOS = [
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80",
  "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1600&q=80",
  "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1600&q=80",
  "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1600&q=80",
];

function heroPhotoFor(slug: string): string {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) hash = (hash + slug.charCodeAt(i)) % 997;
  return HERO_PHOTOS[hash % HERO_PHOTOS.length];
}

// Lightweight markdown → HTML for body
function renderBody(content: string): string {
  return content
    .split("\n\n")
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return "";
      if (trimmed.startsWith("## ")) {
        return `<h2>${trimmed.slice(3)}</h2>`;
      }
      if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
        return `<p><strong>${trimmed.slice(2, -2)}</strong></p>`;
      }
      const withBold = trimmed.replace(
        /\*\*(.+?)\*\*/g,
        "<strong>$1</strong>"
      );
      return `<p>${withBold}</p>`;
    })
    .join("");
}

export default async function EventPage({ params }: Props) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  const html = renderBody(event.body);
  const url = `${SITE}/events/${event.slug}`;

  // schema.org Event JSON-LD
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    startDate: event.startDate,
    ...(event.endDate ? { endDate: event.endDate } : {}),
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode:
      "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: event.venueName,
      address: {
        "@type": "PostalAddress",
        streetAddress: event.venueAddress,
        addressLocality: event.city,
        addressRegion: event.region,
        addressCountry: "US",
      },
    },
    description: event.excerpt,
    url,
    image: [
      `${SITE}${event.ogImage ?? event.heroImage ?? FALLBACK_OG}`,
    ],
    organizer: {
      "@type": "Organization",
      name: "Fully Sorted",
      url: SITE,
    },
    ...(event.tickets && event.tickets.length > 0
      ? {
          offers: event.tickets.map((t) => ({
            "@type": "Offer",
            name: t.name,
            price: t.price.replace(/[^0-9.]/g, "") || "0",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            url: event.url ?? url,
            ...(t.note ? { description: t.note } : {}),
          })),
        }
      : {}),
    ...(event.schedule && event.schedule.length > 0
      ? {
          subEvent: event.schedule.map((s) => ({
            "@type": "Event",
            name: s.name,
            ...(s.description ? { description: s.description } : {}),
            location: {
              "@type": "Place",
              name: event.venueName,
              address: {
                "@type": "PostalAddress",
                addressLocality: event.city,
                addressRegion: event.region,
                addressCountry: "US",
              },
            },
          })),
        }
      : {}),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Events",
        item: `${SITE}/events`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: event.title,
        item: url,
      },
    ],
  };

  // Other events for the footer rail
  const others = events.filter((e) => e.slug !== slug).slice(0, 3);

  return (
    <main className="min-h-screen" style={{ background: "#faf9f7" }}>
      <JsonLd data={[eventSchema, breadcrumbSchema]} />

      {/* Hero header */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(15,32,50,0.6), rgba(15,32,50,0.8)), url('${heroPhotoFor(event.slug)}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderBottom: "1px solid rgba(0,0,0,0.07)",
        }}
      >
        <div
          className="absolute inset-0 film-grain opacity-[0.05] pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <Link
            href="/events"
            className="inline-flex items-center gap-1.5 text-sm font-medium mb-8 transition-colors text-white/70 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4" />
            All Events
          </Link>

          {/* Category badge */}
          <span
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4 text-white"
            style={{
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.3)",
            }}
          >
            <span className="flex gap-1" aria-hidden="true">
              <span className="w-1.5 h-1.5" style={{ background: "#6ab04c" }} />
              <span className="w-1.5 h-1.5" style={{ background: "#1E6091" }} />
              <span className="w-1.5 h-1.5" style={{ background: "#B08D3F" }} />
            </span>
            {event.category}
          </span>

          <h1 className="font-display font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl leading-[1.08] mb-3 text-white">
            {event.title}
          </h1>

          {event.tagline && (
            <p
              className="text-base sm:text-lg font-semibold uppercase tracking-wider mb-5"
              style={{ color: "#D9BC7A" }}
            >
              {event.tagline}
            </p>
          )}

          <p className="text-lg leading-relaxed max-w-3xl mb-6 text-white/85">
            {event.excerpt}
          </p>

          {/* Date + venue chips */}
          <div className="flex flex-wrap gap-3">
            <div
              className="glass inline-flex items-center gap-2 text-sm font-semibold px-3.5 py-2 rounded-lg"
              style={{ color: "#1a1a18" }}
            >
              <Calendar className="w-4 h-4 text-accent" />
              {event.dateLabel}
            </div>
            <div
              className="glass inline-flex items-center gap-2 text-sm font-semibold px-3.5 py-2 rounded-lg"
              style={{ color: "#1a1a18" }}
            >
              <MapPin className="w-4 h-4 text-accent" />
              {event.venueName}, {event.city}
            </div>
            {event.url && (
              <a
                href={event.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold px-3.5 py-2 rounded-lg text-white bg-accent hover:bg-accent-hover transition-colors"
              >
                Official Site
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, #1E6091 35%, #B08D3F 65%, transparent)",
          }}
          aria-hidden="true"
        />
      </section>

      {/* Body */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main column */}
          <div className="lg:col-span-2">
            {event.founderNote && (
              <div
                className="rounded-2xl p-5 mb-8"
                style={{
                  background: "rgba(30,96,145,0.07)",
                  border: "1px solid rgba(30,96,145,0.28)",
                }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-2 text-accent"
                >
                  Note from Chris
                </p>
                <p
                  className="text-sm sm:text-base italic leading-relaxed"
                  style={{ color: "#1a1a18" }}
                >
                  {event.founderNote}
                </p>
              </div>
            )}

            <div
              className="article-body"
              dangerouslySetInnerHTML={{ __html: html }}
            />

            {/* Weekend schedule */}
            {event.schedule && event.schedule.length > 0 && (
              <div className="mt-12">
                <div className="flex items-center gap-2 mb-5">
                  <Clock className="w-5 h-5 text-accent" />
                  <h2
                    className="font-display font-semibold tracking-tight text-xl sm:text-2xl"
                    style={{ color: "#1a1a18" }}
                  >
                    Weekend schedule
                  </h2>
                </div>
                <div className="space-y-4">
                  {event.schedule.map((s) => (
                    <div
                      key={`${s.day}-${s.name}`}
                      className="rounded-2xl p-5"
                      style={{
                        background: "#fff",
                        border: "1px solid rgba(0,0,0,0.07)",
                      }}
                    >
                      <p
                        className="text-xs font-bold uppercase tracking-widest mb-1 text-accent"
                      >
                        {s.day}
                      </p>
                      <p
                        className="font-bold text-base sm:text-lg leading-snug"
                        style={{ color: "#1a1a18" }}
                      >
                        {s.name}
                      </p>
                      {s.time && (
                        <p
                          className="text-sm font-medium mt-1"
                          style={{ color: "#6b6b5e" }}
                        >
                          {s.time}
                        </p>
                      )}
                      {s.description && (
                        <p
                          className="text-sm mt-2 leading-relaxed"
                          style={{ color: "#6b6b5e" }}
                        >
                          {s.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tickets */}
            {event.tickets && event.tickets.length > 0 && (
              <div className="mt-12">
                <div className="flex items-center gap-2 mb-5">
                  <Ticket className="w-5 h-5 text-accent" />
                  <h2
                    className="font-display font-semibold tracking-tight text-xl sm:text-2xl"
                    style={{ color: "#1a1a18" }}
                  >
                    Tickets
                  </h2>
                </div>
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(0,0,0,0.07)",
                  }}
                >
                  {event.tickets.map((t, i) => (
                    <div
                      key={t.name}
                      className="flex items-center justify-between px-5 py-4"
                      style={{
                        borderTop:
                          i === 0
                            ? "none"
                            : "1px solid rgba(0,0,0,0.06)",
                      }}
                    >
                      <div className="min-w-0 pr-3">
                        <p
                          className="font-semibold text-sm sm:text-base"
                          style={{ color: "#1a1a18" }}
                        >
                          {t.name}
                        </p>
                        {t.note && (
                          <p
                            className="text-xs mt-0.5"
                            style={{ color: "#9a9a8a" }}
                          >
                            {t.note}
                          </p>
                        )}
                      </div>
                      <p
                        className="price-display text-base sm:text-lg shrink-0 text-accent"
                      >
                        {t.price}
                      </p>
                    </div>
                  ))}
                </div>
                {event.url && (
                  <a
                    href={event.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold px-5 py-3 rounded-lg text-white bg-accent hover:bg-accent-hover transition-colors"
                  >
                    Buy tickets on lajollaconcours.com
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            )}

            <div
              className="mt-12 pt-8 flex items-center justify-between"
              style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}
            >
              <Link
                href="/events"
                className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors text-accent hover:text-accent-hover"
              >
                <ArrowLeft className="w-4 h-4" />
                All Events
              </Link>
              <p className="text-xs text-stone-400">
                Questions? chris@fullysorted.com
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div
              className="rounded-2xl p-5"
              style={{
                background: "#fff",
                border: "1px solid rgba(0,0,0,0.07)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
              }}
            >
              <p
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: "#9a9a8a" }}
              >
                Event Details
              </p>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt
                    className="text-xs uppercase tracking-wider mb-0.5"
                    style={{ color: "#9a9a8a" }}
                  >
                    Date
                  </dt>
                  <dd
                    className="font-semibold"
                    style={{ color: "#1a1a18" }}
                  >
                    {event.dateLabel}
                  </dd>
                </div>
                <div>
                  <dt
                    className="text-xs uppercase tracking-wider mb-0.5"
                    style={{ color: "#9a9a8a" }}
                  >
                    Venue
                  </dt>
                  <dd
                    className="font-semibold"
                    style={{ color: "#1a1a18" }}
                  >
                    {event.venueName}
                  </dd>
                  <dd className="text-xs" style={{ color: "#6b6b5e" }}>
                    {event.venueAddress}
                  </dd>
                </div>
                <div>
                  <dt
                    className="text-xs uppercase tracking-wider mb-0.5"
                    style={{ color: "#9a9a8a" }}
                  >
                    Category
                  </dt>
                  <dd
                    className="font-semibold"
                    style={{ color: "#1a1a18" }}
                  >
                    {event.category}
                  </dd>
                </div>
                {event.beneficiary && (
                  <div>
                    <dt
                      className="text-xs uppercase tracking-wider mb-0.5"
                      style={{ color: "#9a9a8a" }}
                    >
                      Benefiting
                    </dt>
                    <dd
                      className="font-semibold flex items-center gap-1.5"
                      style={{ color: "#1a1a18" }}
                    >
                      <Heart className="w-3.5 h-3.5 text-gold" />
                      {event.beneficiary}
                    </dd>
                  </div>
                )}
              </dl>
            </div>

            <div
              className="rounded-2xl p-5"
              style={{
                background: "rgba(30,96,145,0.06)",
                border: "1px solid rgba(30,96,145,0.18)",
              }}
            >
              <p
                className="font-bold text-sm mb-1"
                style={{ color: "#1a1a18" }}
              >
                Heading to this event?
              </p>
              <p
                className="text-xs mb-3"
                style={{ color: "#6b6b5e" }}
              >
                Bringing a car to sell after the show? List it for $9.99
                with a simple one-time flat fee.
              </p>
              <Link
                href="/sell"
                className="inline-flex items-center gap-1.5 text-xs font-bold transition-colors text-accent hover:text-accent-hover"
              >
                List a Car <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Other events */}
        {others.length > 0 && (
          <div className="mt-16">
            <div className="flex items-center gap-2 mb-6">
              <div
                className="w-6 h-px"
                style={{ background: "#1E6091" }}
              />
              <h2 className="text-sm font-bold text-stone-400 uppercase tracking-widest">
                More Events
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {others.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/events/${rel.slug}`}
                  className="block rounded-2xl p-5 bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
                  style={{ border: "1px solid rgba(0,0,0,0.10)" }}
                >
                  <span
                    className="text-xs font-bold uppercase tracking-wider text-accent"
                  >
                    {rel.category}
                  </span>
                  <h3 className="font-bold text-stone-800 mt-2 leading-snug group-hover:text-accent transition-colors text-sm">
                    {rel.title}
                  </h3>
                  <p className="text-xs text-stone-400 mt-2 line-clamp-2">
                    {rel.excerpt}
                  </p>
                  <div
                    className="flex items-center gap-1 mt-3 text-xs font-semibold text-accent"
                  >
                    <Calendar className="w-3 h-3" />
                    {rel.dateLabel}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
