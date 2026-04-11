import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, MapPin, ArrowRight, Flag } from "lucide-react";
import { events } from "@/lib/events";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Collector Car Events",
  description:
    "The collector car events Chris Peterson actually attends — concours, auctions, tours, and cars-and-coffee meets that are worth your weekend. Curated personally.",
  alternates: { canonical: "/events" },
  openGraph: {
    type: "website",
    title: "Collector Car Events | Fully Sorted",
    description:
      "The collector car events Chris Peterson actually attends — curated personally.",
    url: "https://fullysorted.com/events",
  },
  twitter: {
    card: "summary_large_image",
    title: "Collector Car Events | Fully Sorted",
    description:
      "The collector car events Chris Peterson actually attends — curated personally.",
  },
};

export default function EventsPage() {
  // Sort by start date ascending
  const sorted = [...events].sort((a, b) =>
    a.startDate.localeCompare(b.startDate)
  );

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Fully Sorted — Collector Car Events",
    itemListElement: sorted.map((e, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://fullysorted.com/events/${e.slug}`,
      name: e.title,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://fullysorted.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Events",
        item: "https://fullysorted.com/events",
      },
    ],
  };

  return (
    <main className="min-h-screen" style={{ background: "#faf9f7" }}>
      <JsonLd data={[itemListSchema, breadcrumbSchema]} />

      {/* Hero */}
      <section
        style={{
          background: "#fff",
          borderBottom: "1px solid rgba(0,0,0,0.07)",
        }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: "#E8722A" }}
          >
            Events
          </p>
          <h1
            className="text-4xl sm:text-5xl font-black leading-tight mb-6"
            style={{ color: "#1a1a18" }}
          >
            The events worth your weekend.
            <br />
            <span style={{ color: "#E8722A" }}>
              Curated personally.
            </span>
          </h1>
          <p
            className="text-lg sm:text-xl leading-relaxed max-w-3xl"
            style={{ color: "#6b6b5e" }}
          >
            Concours, auctions, tours, and cars-and-coffee meets that
            actually move the needle. Every event on this list is one
            I&apos;ve been to, am going to, or am directly involved
            with — no pay-to-list, no algorithmic filler.
          </p>
        </div>
      </section>

      {/* Events list */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Live F1 calendar feature */}
        <Link
          href="/events/f1"
          className="group block rounded-2xl overflow-hidden mb-6 transition-all hover:shadow-lg"
          style={{ background: "#1a1a18", border: "1px solid #1a1a18" }}
        >
          <div className="grid md:grid-cols-[1fr_2fr] gap-0">
            <div
              className="p-6 sm:p-8 flex flex-col justify-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(232,114,42,0.18), rgba(232,114,42,0.04))",
                borderRight: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span
                className="text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-1.5"
                style={{ color: "#E8722A" }}
              >
                <Flag className="w-3.5 h-3.5" />
                Live · Updated daily
              </span>
              <p className="text-2xl sm:text-3xl font-black leading-tight mb-1 text-white">
                2026 Season
              </p>
              <p className="text-sm text-white/60">24 rounds · 5 continents</p>
            </div>
            <div className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-2 leading-snug text-white">
                Formula 1 World Championship
              </h2>
              <p className="text-sm sm:text-base leading-relaxed mb-4 text-white/70">
                The complete 2026 F1 calendar with live status — every round,
                every circuit, every date. Pulled from the official feed and
                refreshed daily.
              </p>
              <div
                className="inline-flex items-center gap-1.5 text-sm font-semibold"
                style={{ color: "#E8722A" }}
              >
                Open the live calendar
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </div>
        </Link>

        <div className="space-y-6">
          {sorted.map((event) => (
            <Link
              key={event.slug}
              href={`/events/${event.slug}`}
              className="group block rounded-2xl overflow-hidden bg-white hover:shadow-lg transition-all"
              style={{ border: "1px solid rgba(0,0,0,0.07)" }}
            >
              <div className="grid md:grid-cols-[1fr_2fr] gap-0">
                {/* Date block */}
                <div
                  className="p-6 sm:p-8 flex flex-col justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(232,114,42,0.06), rgba(232,114,42,0.02))",
                    borderRight: "1px solid rgba(0,0,0,0.05)",
                  }}
                >
                  <span
                    className="text-xs font-bold uppercase tracking-widest mb-2"
                    style={{ color: "#E8722A" }}
                  >
                    {event.category}
                  </span>
                  <p
                    className="text-2xl sm:text-3xl font-black leading-tight mb-1"
                    style={{ color: "#1a1a18" }}
                  >
                    {event.dateLabel}
                  </p>
                  <p
                    className="text-sm flex items-center gap-1.5"
                    style={{ color: "#6b6b5e" }}
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    {event.city}, {event.region}
                  </p>
                </div>

                {/* Body */}
                <div className="p-6 sm:p-8">
                  <h2
                    className="text-xl sm:text-2xl font-bold mb-2 leading-snug group-hover:text-orange-600 transition-colors"
                    style={{ color: "#1a1a18" }}
                  >
                    {event.title}
                  </h2>
                  <p
                    className="text-sm sm:text-base leading-relaxed mb-4"
                    style={{ color: "#6b6b5e" }}
                  >
                    {event.excerpt}
                  </p>
                  <div
                    className="inline-flex items-center gap-1.5 text-sm font-semibold"
                    style={{ color: "#E8722A" }}
                  >
                    Full event details
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Submit CTA */}
        <div
          className="mt-12 rounded-2xl p-8 text-center"
          style={{
            background: "#fff",
            border: "1px solid rgba(0,0,0,0.07)",
          }}
        >
          <Calendar
            className="w-8 h-8 mx-auto mb-3"
            style={{ color: "#E8722A" }}
          />
          <h3
            className="text-xl font-bold mb-2"
            style={{ color: "#1a1a18" }}
          >
            Running an event collectors should know about?
          </h3>
          <p
            className="text-sm mb-4 max-w-xl mx-auto"
            style={{ color: "#6b6b5e" }}
          >
            Send me the details. If it&apos;s the kind of event I&apos;d
            tell a friend about, it goes on this page. No fee.
          </p>
          <a
            href="mailto:chris@fullysorted.com?subject=Event submission"
            className="inline-flex items-center gap-1.5 text-sm font-bold px-5 py-2.5 rounded-lg text-white transition-opacity hover:opacity-90"
            style={{ background: "#E8722A" }}
          >
            Submit an event
          </a>
        </div>
      </section>
    </main>
  );
}
