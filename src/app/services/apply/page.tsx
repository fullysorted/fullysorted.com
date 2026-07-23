import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Building2, User, ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Join the Fully Sorted Services Directory",
  description:
    "List your collector-car services on Fully Sorted. Choose the path that fits — an established business/shop, or an independent freelancer offering gigs.",
  alternates: { canonical: "/services/apply" },
};

export default function ApplyChooserPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="relative overflow-hidden rounded-3xl mb-12 text-center">
        <Image
          src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1600&q=80"
          alt="Vintage garage workshop"
          fill
          priority
          sizes="(max-width: 960px) 100vw, 896px"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(rgba(15,32,50,0.55), rgba(15,32,50,0.78))" }}
          aria-hidden="true"
        />
        <div className="relative px-6 py-14 sm:px-12 sm:py-16">
          <div className="inline-flex items-center gap-2.5 border border-white/30 bg-white/10 rounded-full px-4 py-1.5 mb-5">
            <span className="flex gap-1" aria-hidden="true">
              <span className="w-1.5 h-1.5" style={{ background: "#6ab04c" }} />
              <span className="w-1.5 h-1.5" style={{ background: "#29ABE2" }} />
              <span className="w-1.5 h-1.5" style={{ background: "#B08D3F" }} />
            </span>
            <span className="text-white text-xs font-bold uppercase tracking-widest">Services Directory</span>
          </div>
        <h1 className="font-display font-semibold tracking-tight text-4xl sm:text-5xl text-white mb-4 leading-[1.08]">
          How do you want to <span style={{ color: "#D9C08A" }}>get listed?</span>
        </h1>
        <p className="text-lg text-white/85 max-w-2xl mx-auto">
          Pick the path that fits you. Not sure? Most one-person operations should choose Freelancer — it’s
          built to get you up and earning with the least friction.
        </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Business */}
        <Link
          href="/services/apply/business"
          className="group bg-white rounded-2xl border border-border p-8 hover:border-accent hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col"
        >
          <div className="w-12 h-12 rounded-xl bg-blue-light flex items-center justify-center mb-5">
            <Building2 className="w-6 h-6 text-blue" />
          </div>
          <h2 className="font-display font-semibold tracking-tight text-2xl text-foreground mb-2">I’m a business or shop</h2>
          <p className="text-text-secondary text-sm mb-5">
            An established company with a storefront, team, or brand. Get a directory profile collectors trust.
          </p>
          <ul className="space-y-2 text-sm text-text-secondary mb-6 flex-1">
            {["Company directory listing", "Team & business details", "Founding Provider badge", "Reviewed personally by Chris"].map(f => (
              <li key={f} className="flex items-start gap-2"><Check className="w-4 h-4 text-green mt-0.5 shrink-0" /> {f}</li>
            ))}
          </ul>
          <span className="inline-flex items-center gap-1.5 font-semibold text-accent">
            Apply as a business <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </Link>

        {/* Freelancer */}
        <Link
          href="/services/apply/freelancer"
          className="group bg-white rounded-2xl border-2 border-accent p-8 hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col relative"
        >
          <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider bg-accent text-white px-2 py-1 rounded-full">
            Most popular
          </span>
          <div className="w-12 h-12 rounded-xl bg-accent-light flex items-center justify-center mb-5">
            <User className="w-6 h-6 text-accent" />
          </div>
          <h2 className="font-display font-semibold tracking-tight text-2xl text-foreground mb-2">I’m an independent / freelancer</h2>
          <p className="text-text-secondary text-sm mb-5">
            A solo specialist — mobile detailer, inspector, photographer, mechanic. Offer fixed-price gigs,
            like Fiverr for the collector-car world.
          </p>
          <ul className="space-y-2 text-sm text-text-secondary mb-6 flex-1">
            {["Guided, step-by-step setup", "Fixed-price gig packages", "Your own earnings dashboard", "We help you write everything"].map(f => (
              <li key={f} className="flex items-start gap-2"><Check className="w-4 h-4 text-green mt-0.5 shrink-0" /> {f}</li>
            ))}
          </ul>
          <span className="inline-flex items-center gap-1.5 font-semibold text-accent">
            Start guided setup <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </Link>
      </div>

      <p className="text-center text-sm text-text-secondary mt-8">
        Either way, listing is free for founding providers. You can always switch later.
      </p>

      <div className="mt-10 rounded-2xl border border-border bg-white p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center gap-5">
        <div className="flex-1">
          <p className="text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: "#1E6091" }}>
            New here?
          </p>
          <h2 className="font-display font-semibold tracking-tight text-xl text-foreground mb-1">
            Read the Provider Playbook first
          </h2>
          <p className="text-sm text-text-secondary">
            A step-by-step guide to building a profile owners trust, pricing your work in tiers, and turning first jobs into steady bookings.
          </p>
        </div>
        <Link
          href="/services/guide"
          className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl border-2 border-foreground text-foreground hover:bg-foreground hover:text-white transition-colors"
        >
          Open the playbook <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
