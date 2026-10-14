import type { Metadata } from "next";
import Link from "next/link";
import { resolveCurrentUser } from "@/lib/identity";
import { SERVICE_CATEGORIES } from "@/lib/service-categories";
import { WantedForm } from "./WantedForm";

export const metadata: Metadata = {
  title: "Post a Wanted",
  description: "Tell Fully Sorted members what car, part or specialist you are looking for.",
  alternates: { canonical: "/wanted/new" },
  robots: { index: false },
};

const INK = "#12352A";
const TEAL = "#1C8C87";
const MUTED = "#6B7280";

export default async function NewWantedPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const user = await resolveCurrentUser();
  // Prefill from a Sort it answer ("Post a Wanted"). Plain text only, trimmed;
  // the member reads and edits it before anything is posted.
  const sp = await searchParams;
  const one = (k: string, max: number) => {
    const v = sp[k];
    return (Array.isArray(v) ? v[0] : v ?? "").toString().slice(0, max);
  };
  const kindParam = one("kind", 10);
  const initial = {
    kind: (["car", "part", "service"].includes(kindParam) ? kindParam : "car") as "car" | "part" | "service",
    title: one("title", 120),
    body: one("body", 800),
    make: one("make", 50),
  };
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <Link href="/wanted" className="text-sm font-semibold" style={{ color: TEAL }}>&larr; The wanted board</Link>
        <h1 className="font-display tracking-tight text-3xl sm:text-4xl mt-3 mb-2" style={{ color: INK }}>Post a wanted</h1>
        <p className="text-base leading-relaxed mb-8" style={{ color: MUTED }}>
          Free to post. It gets a quick read before it goes up, and it stays up for 60 days.
        </p>
        {user ? (
          <WantedForm
            handle={user.handle}
            initial={initial}
            categories={SERVICE_CATEGORIES.map((c) => ({ key: c.key, label: c.longLabel }))}
          />
        ) : (
          <div className="rounded-2xl p-6 sm:p-8" style={{ background: "var(--bg-surface)" }}>
            <p className="font-semibold" style={{ color: INK }}>Posting needs an account.</p>
            <p className="text-sm mt-1 leading-relaxed" style={{ color: MUTED }}>
              It is free, and it is how replies reach you without your email going on a public page.
            </p>
            <div className="flex flex-wrap gap-3 mt-5">
              <Link href={`/sign-up?redirect_url=${encodeURIComponent(`/wanted/new${initial.title ? `?kind=${initial.kind}&title=${encodeURIComponent(initial.title)}&body=${encodeURIComponent(initial.body)}&make=${encodeURIComponent(initial.make)}` : ""}`)}`} className="px-5 py-3 rounded-full text-sm font-bold text-white" style={{ background: TEAL }}>Create an account</Link>
              <Link href="/sign-in?redirect_url=/wanted/new" className="px-5 py-3 rounded-full text-sm font-semibold" style={{ color: INK, border: `1px solid ${INK}` }}>Sign in</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
