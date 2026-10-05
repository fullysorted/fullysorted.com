import type { Metadata } from "next";
import { PartsKindPage } from "@/components/parts/PartsKindPage";

// One cached read every five minutes, however many people look at the board.
export const revalidate = 300;

export const metadata: Metadata = {
  title: "Automotive Art for Sale: Paintings, Posters and Prints",
  description:
    "Original automotive paintings, race and event posters, limited prints and period photographs, listed by Fully Sorted members and artists.",
  alternates: { canonical: "/artwork" },
};

export default function ArtworkPage() {
  return <PartsKindPage kind="art" />;
}
