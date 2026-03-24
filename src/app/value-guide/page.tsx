import type { Metadata } from "next";
import { ValueGuideClient } from "./ValueGuideClient";

export const metadata: Metadata = {
  title: "Value Guide — What Is Your Classic Car Worth?",
  description:
    "Get real pricing data for any collector car. Powered by Bring a Trailer results, Classic.com data, and 25 years of Chris Peterson's market expertise.",
};

export default function ValueGuidePage() {
  return <ValueGuideClient />;
}
