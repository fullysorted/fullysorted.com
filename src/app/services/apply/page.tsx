import type { Metadata } from "next";
import { ApplyForm } from "./ApplyForm";
import { CheckCircle, Star, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Apply to Be Listed — Fully Sorted Services Directory",
  description:
    "Join the Fully Sorted vetted services directory. We're looking for the best detailers, mechanics, inspectors, transporters, and restorers in Southern California.",
};

const BENEFITS = [
  {
    icon: Star,
    title: "Personal vetting & write-up",
    body: "Every listed provider gets a 'Chris's Take' — a personal endorsement written by our founder. That's a credibility signal you can't buy.",
  },
  {
    icon: Users,
    title: "In front of serious collectors",
    body: "The people searching this directory are actively buying, maintaining, and selling collector cars. No tire-kickers.",
  },
  {
    icon: CheckCircle,
    title: "Founding provider status",
    body: "Early listings get a Founding Provider badge and priority placement. First in, best positioned.",
  },
];

export default function ApplyPage() {
  return (
    <main className="min-h-screen" style={{ background: "#faf9f7" }}>

      {/* Light header */}
      <section style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#E8722A" }}>
            Services Directory
          </p>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-4" style={{ color: "#1a1a18" }}>
            Apply to be listed.
          </h1>
          <p className="text-lg max-w-2xl leading-relaxed" style={{ color: "#6b6b5e" }}>
            We're building the go-to directory of vetted specialists for Southern
            California collector car owners. If you do exceptional work and want
            to be found by the people who will appreciate it, this is for you.
          </p>

          {/* Benefits row */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {BENEFITS.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex items-start gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: "rgba(232,114,42,0.15)" }}
                >
                  <Icon className="w-4 h-4" style={{ color: "#E8722A" }} />
                </div>
                <div>
                  <p className="text-sm font-bold" style={{ color: "#1a1a18" }}>{title}</p>
                  <p className="text-xs mt-0.5 leading-relaxed" style={{ color: "#6b6b5e" }}>
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <ApplyForm />
      </section>
    </main>
  );
}
