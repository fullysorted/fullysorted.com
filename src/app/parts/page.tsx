import type { Metadata } from "next";
import { PartsKindPage } from "@/components/parts/PartsKindPage";

// One cached read every five minutes, however many people look at the board.
export const revalidate = 300;

export const metadata: Metadata = {
  title: "Collector Car Parts for Sale",
  description:
    "Engine and drivetrain, suspension and brakes, body and trim, interior, wheels and electrical parts for collector cars, listed by Fully Sorted members.",
  alternates: { canonical: "/parts" },
};

export default function PartsPage() {
  return <PartsKindPage kind="part" />;
}
