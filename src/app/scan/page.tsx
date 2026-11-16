import type { Metadata } from "next";
import Link from "next/link";
import { cookies } from "next/headers";
import { resolveCurrentUser } from "@/lib/identity";
import { ADMIN_COOKIE, isAdminCookie } from "@/lib/session-token";
import { SCANNER_ENABLED } from "@/lib/features";
import { scanAccess, listScanItems, countScanItems, scanBudget } from "@/lib/scan";
import type { ScanItem, ScanUsage } from "@/lib/scan-shared";
import { ScanBoard } from "./ScanBoard";

export const metadata: Metadata = {
  title: "Scanner",
  description: "Photograph a part, a model, a poster or a piece of memorabilia and get a draft listing to correct.",
  alternates: { canonical: "/scan" },
  robots: { index: false },
};

// Always rendered per request: the page is the signed-in member's own inventory.
export const dynamic = "force-dynamic";

const INK = "#12352A";
const TEAL = "#1C8C87";
const MUTED = "#6B7280";

export default async function ScanPage() {
  const user = await resolveCurrentUser();
  let items: ScanItem[] = [];
  let total = 0;
  let usage: ScanUsage | null = null;
  let failed = false;
  const access = scanAccess(user, isAdminCookie((await cookies()).get(ADMIN_COOKIE)?.value));
  if (user && access.allowed) {
    try {
      const staff = access.staff;
      const [list, count, budget] = await Promise.all([listScanItems(user.id, { limit: 60 }), countScanItems(user.id), scanBudget(user.id, staff)]);
      items = list;
      total = count;
      usage = { used: budget.used, limit: budget.limit, staff };
    } catch (e) {
      console.error("[scan] page load failed:", e);
      failed = true;
    }
  }
  const ready = SCANNER_ENABLED && !!process.env.ANTHROPIC_API_KEY;
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <Link href="/for-sale" className="text-sm font-semibold" style={{ color: TEAL }}>&larr; For Sale</Link>
        <h1 className="font-display tracking-tight text-3xl sm:text-4xl mt-3 mb-2" style={{ color: INK }}>Scanner</h1>
        <p className="text-base leading-relaxed mb-8" style={{ color: MUTED }}>
          Photograph one item at a time: a model, a part, a poster, a sign. The scanner reads what is printed on it and
          drafts the listing. You correct it, then list it or keep it as your own inventory. Nothing here is public.
        </p>
        {!user ? (
          <div className="rounded-2xl p-6 sm:p-8" style={{ background: "var(--bg-surface)" }}>
            <p className="font-semibold" style={{ color: INK }}>The scanner needs an account.</p>
            <p className="text-sm mt-1 leading-relaxed" style={{ color: MUTED }}>
              An account is what keeps your scans yours, and only yours.
            </p>
            <div className="flex flex-wrap gap-3 mt-5">
              <Link href="/sign-up?redirect_url=/scan" className="px-5 py-3 rounded-full text-sm font-bold text-white" style={{ background: TEAL }}>Create an account</Link>
              <Link href="/sign-in?redirect_url=/scan" className="px-5 py-3 rounded-full text-sm font-semibold" style={{ color: INK, border: `1px solid ${INK}` }}>Sign in</Link>
            </div>
          </div>
        ) : !access.allowed ? (
          <p className="text-sm" style={{ color: MUTED }}>The scanner is not open yet.</p>
        ) : failed || !usage ? (
          <p className="text-sm" style={{ color: MUTED }}>The scanner did not load just now. Please refresh in a moment.</p>
        ) : (
          <ScanBoard initial={items} initialTotal={total} initialUsage={usage} ready={ready} />
        )}
      </div>
    </div>
  );
}
