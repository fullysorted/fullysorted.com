import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { SortItBox } from "@/components/search/SortItBox";
import { SORT_IT_ENABLED } from "@/lib/features";

export const metadata: Metadata = {
  title: "Sort it: ask anything about your collector car",
  description:
    "Ask a question about a collector car, a part, or the work it needs. Answers cite their sources and point to the specialist, listing or model history to see next.",
  alternates: { canonical: "/sort-it" },
};

export default function SortItPage() {
  if (!SORT_IT_ENABLED) notFound();
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
      <PageHero
        eyebrow="Ask"
        title="Sort it"
        sub="Ask anything about a collector car. You get an answer with its sources and who to see next."
        width="3xl"
      >
        <div className="mt-8">
          <SortItBox />
        </div>
      </PageHero>
    </div>
  );
}
