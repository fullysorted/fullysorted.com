import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Calendar, Flag, ExternalLink, ArrowLeft } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "2026 Formula 1 Calendar — Live",
  description:
    "The complete 2026 Formula 1 World Championship calendar — all 24 rounds, live status, circuits, and dates. The F1 season tracker for collector car enthusiasts.",
  alternates: { canonical: "/events/f1" },
  openGraph: {
    type: "website",
    title: "2026 Formula 1 Calendar | Fully Sorted",
    description:
      "Live tracker for the 2026 F1 World Championship — every round, every circuit, every date.",
    url: "https://fullysorted.com/events/f1",
  },
  twitter: {
    card: "summary_large_image",
    title: "2026 Formula 1 Calendar | Fully Sorted",
    description:
      "Live tracker for the 2026 F1 World Championship — every round, every circuit, every date.",
  },
};

interface JolpicaRace {
  season: string;
  round: string;
  raceName: string;
  Circuit: {
    circuitId: string;
    circuitName: string;
    Location: {
      locality: string;
      country: string;
    };
  };
  date: string;
  time?: string;
}

interface JolpicaResponse {
  MRData: {
    RaceTable: {
      Races: JolpicaRace[];
    };
  };
}

async function getF1Calendar(): Promise<JolpicaRace[]> {
  try {
    const res = await fetch("https://api.jolpi.ca/ergast/f1/2026.json", {
      next: { revalidate: 86400 },
    });
    if (!res.ok) return [];
    const data: JolpicaResponse = await res.json();
    return data.MRData?.RaceTable?.Races ?? [];
  } catch {
    return [];
  }
}

function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00Z");
  return d.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

function getStatus(raceDate: string, nextRaceDate: string | null): "past" | "next" | "future" {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const race = new Date(raceDate + "T00:00:00");
  if (race < today) return "past";
  if (nextRaceDate && raceDate === nextRaceDate) return "next";
  return "future";
}

export const revalidate = 86400;

export default async function F1Page() {
  const races = await getF1Calendar();

  // Find next upcoming race
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const upcoming = races.find((r) => new Date(r.date + "T00:00:00") >= today);
  const nextRaceDate = upcoming?.date ?? null;
  const nextRace = upcoming;

  const eventSchema = races.map((r) => ({
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: r.raceName,
    startDate: r.date,
    location: {
      "@type": "Place",
      name: r.Circuit.circuitName,
      address: {
        "@type": "PostalAddress",
        addressLocality: r.Circuit.Location.locality,
        addressCountry: r.Circuit.Location.country,
      },
    },
    sport: "Formula 1",
  }));

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fullysorted.com" },
      { "@type": "ListItem", position: 2, name: "Events", item: "https://fullysorted.com/events" },
      { "@type": "ListItem", position: 3, name: "F1 Calendar", item: "https://fullysorted.com/events/f1" },
    ],
  };

  return (
    <main className="min-h-screen" style={{ background: "#faf9f7" }}>
      <JsonLd data={[breadcrumbSchema, ...eventSchema]} />

      {/* Hero */}
      <section style={{ background: "#1a1a18", borderBottom: "4px solid #E8722A" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <Link
            href="/events"
            className="inline-flex items-center gap-1.5 text-xs font-semibold mb-6 text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            All events
          </Link>
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#E8722A" }}>
            <Flag className="inline w-3.5 h-3.5 mr-1.5 -mt-0.5" />
            Live · Updated daily
          </p>
          <h1 className="text-4xl sm:text-6xl font-black leading-tight mb-4 text-white">
            2026 Formula 1
            <br />
            <span style={{ color: "#E8722A" }}>World Championship</span>
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed max-w-3xl text-white/70">
            The complete 2026 F1 calendar — all {races.length || 24} rounds, live status,
            and the circuits the modern championship runs on.
          </p>

          {nextRace && (
            <div
              className="mt-8 rounded-2xl p-6 sm:p-8"
              style={{
                background: "rgba(232,114,42,0.12)",
                border: "1px solid rgba(232,114,42,0.4)",
              }}
            >
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#E8722A" }}>
                Next up — Round {nextRace.round}
              </p>
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
                {nextRace.raceName}
              </h2>
              <p className="text-white/80 flex items-center gap-2 text-sm sm:text-base">
                <Calendar className="w-4 h-4" />
                {formatDate(nextRace.date)}
                <span className="mx-2">·</span>
                <MapPin className="w-4 h-4" />
                {nextRace.Circuit.Location.locality}, {nextRace.Circuit.Location.country}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Race grid */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {races.length === 0 ? (
          <div
            className="rounded-2xl p-8 text-center"
            style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)" }}
          >
            <p style={{ color: "#6b6b5e" }}>
              The F1 calendar feed is temporarily unavailable. Check back shortly.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {races.map((race) => {
              const status = getStatus(race.date, nextRaceDate);
              const isPast = status === "past";
              const isNext = status === "next";
              return (
                <div
                  key={race.round}
                  className="rounded-xl overflow-hidden"
                  style={{
                    background: "#fff",
                    border: isNext
                      ? "2px solid #E8722A"
                      : "1px solid rgba(0,0,0,0.07)",
                    opacity: isPast ? 0.55 : 1,
                  }}
                >
                  <div className="grid grid-cols-[80px_1fr_auto] sm:grid-cols-[100px_1fr_auto] gap-0 items-center">
                    {/* Round number */}
                    <div
                      className="p-4 sm:p-6 text-center"
                      style={{
                        background: isNext
                          ? "rgba(232,114,42,0.1)"
                          : "rgba(0,0,0,0.02)",
                        borderRight: "1px solid rgba(0,0,0,0.05)",
                      }}
                    >
                      <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#6b6b5e" }}>
                        Round
                      </p>
                      <p className="text-2xl sm:text-3xl font-black" style={{ color: "#1a1a18" }}>
                        {race.round}
                      </p>
                    </div>

                    {/* Body */}
                    <div className="p-4 sm:p-6 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold leading-snug mb-1 truncate" style={{ color: "#1a1a18" }}>
                        {race.raceName}
                      </h3>
                      <p className="text-xs sm:text-sm flex items-center gap-1.5 mb-1" style={{ color: "#6b6b5e" }}>
                        <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                        <span className="truncate">
                          {race.Circuit.circuitName} · {race.Circuit.Location.locality}, {race.Circuit.Location.country}
                        </span>
                      </p>
                      <p className="text-xs sm:text-sm flex items-center gap-1.5" style={{ color: "#6b6b5e" }}>
                        <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
                        {formatDate(race.date)}
                      </p>
                    </div>

                    {/* Status */}
                    <div className="p-4 sm:p-6">
                      {isNext && (
                        <span
                          className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full text-white whitespace-nowrap"
                          style={{ background: "#E8722A" }}
                        >
                          Next Up
                        </span>
                      )}
                      {isPast && (
                        <span
                          className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full whitespace-nowrap"
                          style={{ background: "rgba(0,0,0,0.06)", color: "#6b6b5e" }}
                        >
                          Finished
                        </span>
                      )}
                      {!isPast && !isNext && (
                        <span
                          className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full whitespace-nowrap"
                          style={{ background: "rgba(232,114,42,0.08)", color: "#E8722A" }}
                        >
                          Upcoming
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Data source */}
        <p className="text-xs mt-6 text-center" style={{ color: "#6b6b5e" }}>
          Calendar data via the Jolpica F1 API · Refreshed every 24 hours
        </p>

        {/* Cross-sell */}
        <div
          className="mt-12 rounded-2xl p-8 text-center"
          style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)" }}
        >
          <h3 className="text-xl font-bold mb-2" style={{ color: "#1a1a18" }}>
            Like watching modern F1? You&apos;ll love historic racing.
          </h3>
          <p className="text-sm mb-4 max-w-xl mx-auto" style={{ color: "#6b6b5e" }}>
            The Grand Prix de Monaco Historique runs the same circuit as the modern F1
            race, with pre-war GP cars, '50s and '60s F1, and Cosworth-era machines.
          </p>
          <a
            href="/events/monaco-historique-2026"
            className="inline-flex items-center gap-1.5 text-sm font-bold px-5 py-2.5 rounded-lg text-white transition-opacity hover:opacity-90"
            style={{ background: "#E8722A" }}
          >
            See Monaco Historique 2026
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>
    </main>
  );
}
