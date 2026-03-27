import type { Metadata } from "next";
import { ValueGuideClient } from "./ValueGuideClient";
import { BarChart3, TrendingUp, Database } from "lucide-react";

export const metadata: Metadata = {
  title: "Value Guide — What Is Your Classic Car Worth?",
  description:
    "Get real pricing data for any collector car. Powered by Bring a Trailer results, Classic.com data, and 25 years of Chris Peterson's market expertise.",
};

const STATS = [
  { icon: Database, label: "Auction results", value: "50,000+" },
  { icon: TrendingUp, label: "Markets tracked", value: "12" },
  { icon: BarChart3, label: "Updated", value: "Weekly" },
];

export default function ValueGuidePage() {
  return (
    <main className="min-h-screen" style={{ background: "#faf9f7" }}>

      {/* Light header banner */}
      <section style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: "#E8722A" }}
          >
            Value Guide
          </p>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-4" style={{ color: "#1a1a18" }}>
            What is your
            <br />
            <span style={{ color: "#E8722A" }}>collector car worth?</span>
          </h1>
          <p
            className="text-lg max-w-2xl mb-10"
            style={{ color: "#6b6b5e" }}
          >
            Real auction results, not ask prices. Search by year, make, and
            model to see what cars like yours actually sell for.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8">
            {STATS.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(232,114,42,0.1)" }}
                >
                  <Icon className="w-4 h-4" style={{ color: "#E8722A" }} />
                </div>
                <div>
                  <p className="text-lg font-black leading-tight" style={{ color: "#1a1a18" }}>
                    {value}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "#9a9a8a" }}
                  >
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive client component */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <ValueGuideClient />
      </section>
    </main>
  );
}
