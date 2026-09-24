import type { Metadata } from "next";
import Link from "next/link";
import { resolveCurrentUser } from "@/lib/identity";
import { getPublishedModels, modelDisplayName } from "@/lib/data/models";
import { PartsForm } from "./PartsForm";

export const metadata: Metadata = {
  title: "List a Part or Memorabilia",
  description: "List a collector car part or a piece of memorabilia for sale on Fully Sorted. Free, no fee on the sale.",
  alternates: { canonical: "/parts/new" },
  robots: { index: false },
};

const INK = "#12352A";
const TEAL = "#1C8C87";
const MUTED = "#6B7280";

type Props = { searchParams: Promise<{ model?: string }> };

export default async function NewPartsPage({ searchParams }: Props) {
  const user = await resolveCurrentUser();
  const preset = (await searchParams).model ?? "";
  // The model list is the one thing here that costs a query, and only signed-in
  // members see the form, so it is fetched only for them.
  let models: { slug: string; name: string; make: string; model: string }[] = [];
  if (user) {
    try {
      models = (await getPublishedModels()).map((m) => ({ slug: m.slug, name: modelDisplayName(m), make: m.make, model: m.model }));
    } catch { /* the field degrades to free text */ }
  }
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <Link href="/parts" className="text-sm font-semibold" style={{ color: TEAL }}>&larr; Parts and memorabilia</Link>
        <h1 className="font-display tracking-tight text-3xl sm:text-4xl mt-3 mb-2" style={{ color: INK }}>List a part</h1>
        <p className="text-base leading-relaxed mb-8" style={{ color: MUTED }}>
          Free. No fee when it sells. It gets a quick read before it goes up, and it stays up for 90 days.
        </p>
        {user ? (
          <PartsForm handle={user.handle} models={models} presetModelSlug={preset} />
        ) : (
          <div className="rounded-2xl p-6 sm:p-8" style={{ background: "var(--bg-surface)" }}>
            <p className="font-semibold" style={{ color: INK }}>Listing needs an account.</p>
            <p className="text-sm mt-1 leading-relaxed" style={{ color: MUTED }}>
              It is free, and it is how buyers reach you without your email going on a public page.
            </p>
            <div className="flex flex-wrap gap-3 mt-5">
              <Link href="/sign-up?redirect_url=/parts/new" className="px-5 py-3 rounded-full text-sm font-bold text-white" style={{ background: TEAL }}>Create an account</Link>
              <Link href="/sign-in?redirect_url=/parts/new" className="px-5 py-3 rounded-full text-sm font-semibold" style={{ color: INK, border: `1px solid ${INK}` }}>Sign in</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
