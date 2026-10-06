import type { Metadata } from "next";
import { SubmitSaleForm } from "./SubmitSaleForm";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Report a Sale",
  description: "Know a collector-car sale price? Add it to Fully Sorted's market data. Reviewed before publishing; we only use the factual sale details.",
  alternates: { canonical: "/submit-sale" },
};

export default function SubmitSalePage() {
  return (
    <div style={{ backgroundColor: "#faf9f7" }} className="min-h-screen">
      <PageHero
        eyebrow="Report a Sale"
        width="3xl"
        
        title={<>Know a sale price? Add it.</>}
        sub={<>Every real result you add makes the collector-car market a little more transparent, and helps the next buyer and seller. Takes a minute; each submission is checked against its source before it is published.</>}
      />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <SubmitSaleForm />
      </div>
    </div>
  );
}
