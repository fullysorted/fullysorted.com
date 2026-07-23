import type { Metadata } from "next";
import { Database } from "lucide-react";
import { SubmitSaleForm } from "./SubmitSaleForm";

export const metadata: Metadata = {
  title: "Report a Sale — Help Build the Best Collector-Car Data | Fully Sorted",
  description: "Know a collector-car sale price? Add it to Fully Sorted's market data. Reviewed before publishing; we only use the factual sale details.",
  alternates: { canonical: "/submit-sale" },
};

export default function SubmitSalePage() {
  return (
    <div style={{ backgroundColor: "#faf9f7" }} className="min-h-screen">
      <div className="relative overflow-hidden text-white" style={{ background: "linear-gradient(160deg, #10233b 0%, #0b1a2e 60%, #0a1626 100%)" }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent 0%, #1E6091 35%, #B08D3F 65%, transparent 100%)" }} />
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 py-14 sm:py-16 text-center">
          <div className="inline-flex items-center gap-2 mb-3"><Database className="w-5 h-5" style={{ color: "#D9C08A" }} /><span className="text-xs font-bold uppercase tracking-widest text-white/70">Report a Sale</span></div>
          <h1 className="font-display font-semibold tracking-tight text-3xl sm:text-4xl mb-3">Know a sale price? Add it.</h1>
          <p className="text-stone-300">Every real result you add makes the collector-car market a little more transparent — and helps the next buyer and seller. Takes a minute; we verify before it goes live.</p>
        </div>
      </div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <SubmitSaleForm />
      </div>
    </div>
  );
}
