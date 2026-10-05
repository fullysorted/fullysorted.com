import type { Metadata } from "next";
import Link from "next/link";
import { resolveCurrentUser } from "@/lib/identity";
import { getPublishedModels, modelDisplayName } from "@/lib/data/models";
import { PartsForm } from "./PartsForm";
import { partsCategory, kindHref, PARTS_KINDS, PARTS_FREE_LISTINGS, type PartsKind, type PartsAccess } from "@/lib/parts-shared";
import { getPartsAccess } from "@/lib/parts";
import { PlanPanel } from "./PlanPanel";

export const metadata: Metadata = {
  title: "List a Part, Memorabilia or Artwork",
  description: "List a collector car part, memorabilia or artwork for sale on Fully Sorted.",
  alternates: { canonical: "/parts/new" },
  robots: { index: false },
};

const INK = "#12352A";
const TEAL = "#1C8C87";
const MUTED = "#6B7280";

type Props = { searchParams: Promise<{ model?: string; kind?: string; shelf?: string }> };

export default async function NewPartsPage({ searchParams }: Props) {
  const user = await resolveCurrentUser();
  const sp = await searchParams;
  const preset = sp.model ?? "";
  // The kind arrives as ?kind= or through one of its shelves.
  const kind: PartsKind = partsCategory(sp.shelf)?.kind ?? (PARTS_KINDS.some((k) => k.key === sp.kind) ? (sp.kind as PartsKind) : "part");
  const heading = kind === "memorabilia" ? "List memorabilia" : kind === "art" ? "List artwork" : "List a part";
  const backLabel = PARTS_KINDS.find((k) => k.key === kind)?.label ?? "Parts";
  let access: PartsAccess | null = null;
  if (user) {
    try { access = await getPartsAccess(user.id); } catch { access = null; }
  }
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
        <Link href={kindHref(kind)} className="text-sm font-semibold" style={{ color: TEAL }}>&larr; {backLabel}</Link>
        <h1 className="font-display tracking-tight text-3xl sm:text-4xl mt-3 mb-2" style={{ color: INK }}>{heading}</h1>
        <p className="text-base leading-relaxed mb-8" style={{ color: MUTED }}>
          It gets a quick read before it goes up, and it stays up for 90 days. The first{" "}
          {PARTS_FREE_LISTINGS} listings on the board are free; after that it is a small fee per listing, or a monthly
          seller plan.
        </p>
        {access?.plan && <PlanPanel plan={access.plan} live={access.live} maxLive={access.maxLive} active={access.mode === "plan"} />}
        {user && access ? (
          <PartsForm handle={user.handle} models={models} presetModelSlug={preset} presetKind={kind} presetShelf={sp.shelf} access={access} />
        ) : user ? (
          <p className="text-sm" style={{ color: MUTED }}>The form did not load just now. Please refresh in a moment.</p>
        ) : (
          <div className="rounded-2xl p-6 sm:p-8" style={{ background: "var(--bg-surface)" }}>
            <p className="font-semibold" style={{ color: INK }}>Listing needs an account.</p>
            <p className="text-sm mt-1 leading-relaxed" style={{ color: MUTED }}>
              An account is free, and it is how buyers reach you without your email going on a public page.
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
