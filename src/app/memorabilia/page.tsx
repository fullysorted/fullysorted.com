import type { Metadata } from "next";
import { PartsKindPage } from "@/components/parts/PartsKindPage";

// One cached read every five minutes, however many people look at the board.
export const revalidate = 300;

export const metadata: Metadata = {
  title: "Automobilia and Car Memorabilia for Sale",
  description:
    "Sales brochures, owner and workshop manuals, dealer signs, scale models and racing gear, listed by Fully Sorted members. No fee on the sale.",
  alternates: { canonical: "/memorabilia" },
};

export default function MemorabiliaPage() {
  return <PartsKindPage kind="memorabilia" />;
}
