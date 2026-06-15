import type { Metadata } from "next";
import Link from "next/link";
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
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-accent-light border border-accent rounded-full px-4 py-1.5 mb-5">
          <span className="text-accent text-xs font-bold uppercase tracking-wider">Services Directory</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 leading-tight">
          How do you want to <span className="text-accent">get listed?</span>
        </h1>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          Pick the path that fits you. Not sure? Most one-person operations should choose Freelancer — it’s
          built to get you up and earning with the least friction.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Business */}
        <Link
          href="/services/apply/business"
          className="group bg-white rounded-2xl border border-border p-8 hover:border-accent hover:shadow-lg transition-all flex flex-col"
        >
          <div className="w-12 h-12 rounded-xl bg-accent-light flex items-center justify-center mb-5">
            <Building2 className="w-6 h-6 text-accent" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">I’m a business or shop</h2>
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
          className="group bg-white rounded-2xl border-2 border-accent p-8 hover:shadow-lg transition-all flex flex-col relative"
        >
          <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider bg-accent text-white px-2 py-1 rounded-full">
            Most popular
          </span>
          <div className="w-12 h-12 rounded-xl bg-accent-light flex items-center justify-center mb-5">
            <User className="w-6 h-6 text-accent" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">I’m an independent / freelancer</h2>
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
    </div>
  );
}
