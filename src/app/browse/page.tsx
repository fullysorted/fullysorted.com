import type { Metadata } from "next";
import { BrowseClient } from "./BrowseClient";

export const metadata: Metadata = {
  title: "Browse Collector Cars",
  description:
    "Browse collector cars for sale — Muscle, European, JDM, Vintage, Modern Classic, and more. No dealers, no commissions. Peer-to-peer.",
};

export default function BrowsePage() {
  return <BrowseClient />;
}
