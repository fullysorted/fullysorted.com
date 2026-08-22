import type { Metadata } from "next";
import { ResearchNav } from "@/components/research/ResearchNav";
import { VinDecoderClient } from "./VinDecoderClient";

// The decoder itself is interactive and has to be a client component, which
// cannot export metadata. Splitting it out lets this page — a strong search
// term that was inheriting the layout's generic title — describe itself.
export const metadata: Metadata = {
  title: "Free VIN Decoder & Recall Check",
  description:
    "Decode any VIN for year, make, model, engine, drivetrain and build plant, and see open NHTSA recall campaigns. Free, no account needed.",
  alternates: { canonical: "/vin" },
};

export default function VinPage() {
  return (
    <div style={{ background: "#faf9f7" }} className="min-h-screen">
      <ResearchNav active="vin" />
      <VinDecoderClient />
    </div>
  );
}
