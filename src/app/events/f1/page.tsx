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
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,32,50,0.62), rgba(15,32,50,0.82)), url('https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderBottom: "1px solid rgba(0,0,0,0.07)",
        }}
      >
        <div
          className="absolute inset-0 film-grain opacity-[0.05] pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <Link
            href="/events"
            className="inline-flex items-center gap-1.5 text-xs font-semibold mb-6 text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            All events
          </Link>
          <p className="text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2" style={{ color: "#6ab04c" }}>
            <span className="flex gap-1" aria-hidden="true">
              <span className="w-1.5 h-1.5" style={{ background: "#6ab04c" }} />
              <span className="w-1.5 h-1.5" style={{ background: "#1E6091" }} />
              <span className="w-1.5 h-1.5" style={{ background: "#B08D3F" }} />
            </span>
            <Flag className="inline w-3.5 h-3.5" />
            Live · Updated daily
          </p>
          <h1 className="font-display font-semibold tracking-tight text-4xl sm:text-6xl leading-[1.08] mb-4 text-white">
            2026 Formula 1
            <br />
            <span style={{ color: "#D9BC7A" }}>World Championship</span>
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed max-w-3xl text-white/85">
            The complete 2026 F1 calendar — all {races.length || 24} rounds, live status,
            and the circuits the modern championship runs on.
          </p>

          {nextRace && (
            <div
              className="mt-8 rounded-2xl p-6 sm:p-8"
              style={{
                background: "rgba(30,96,145,0.35)",
                border: "1px solid rgba(255,255,255,0.25)",
                backdropFilter: "blur(6px)",
              }}
            >
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#D9BC7A" }}>
                Next up — Round {nextRace.round}
              </p>
              <h2 className="font-display font-semibold tracking-tight text-2xl sm:text-3xl text-white mb-2">
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
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, #1E6091 35%, #B08D3F 65%, transparent)",
          }}
          aria-hidden="true"
        />
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
                      ? "2px solid #1E6091"
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
                          ? "rgba(30,96,145,0.08)"
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
                          className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full text-white whitespace-nowrap bg-accent"
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
                          style={{ background: "rgba(30,96,145,0.08)", color: "#1E6091" }}
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
          <h3 className="font-display font-semibold tracking-tight text-xl mb-2" style={{ color: "#1a1a18" }}>
            Like watching modern F1? You&apos;ll love historic racing.
          </h3>
          <p className="text-sm mb-4 max-w-xl mx-auto" style={{ color: "#6b6b5e" }}>
            The Grand Prix de Monaco Historique runs the same circuit as the modern F1
            race, with pre-war GP cars, '50s and '60s F1, and Cosworth-era machines.
          </p>
          <a
            href="/events/monaco-historique-2026"
            className="inline-flex items-center gap-1.5 text-sm font-bold px-5 py-2.5 rounded-lg text-white bg-accent hover:bg-accent-hover transition-colors"
          >
            See Monaco Historique 2026
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>
    </main>
  );
}
