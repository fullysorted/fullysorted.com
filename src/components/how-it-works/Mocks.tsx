import Link from "next/link";
import Image from "next/image";
import { Camera, Mail, MessageCircle, Star, CheckCircle2 } from "lucide-react";
import { categoryLabel } from "@/lib/service-categories";
import { formatBusinessName, formatLocation } from "@/lib/provider-format";
import type { RecentProvider } from "@/lib/data/providers";

/**
 * Faithful, server-safe mocks of the pieces of the site a visitor meets on
 * the way through. Each one is drawn from the real component it stands in
 * for and uses the same tokens, so it reads as the thing itself. Where the
 * real component can be rendered directly (listing card, model card, the
 * trade grid, provider cards) the page does that instead.
 */

const INK = "#12352A";
const TEAL = "#1C8C87";
const MUTED = "#6B7280";
const RULE = "rgba(18,53,42,0.14)";
const MONO = "var(--font-jetbrains-mono), 'JetBrains Mono', Menlo, monospace";

function Field({ label, value, wide = false }: { label: string; value: string; wide?: boolean }) {
  return (
    <div className={wide ? "sm:col-span-2" : ""}>
      <p className="text-[11px] font-semibold uppercase tracking-wider mb-1" style={{ color: "#9a9a8a" }}>{label}</p>
      <div className="h-10 px-3 flex items-center rounded-lg text-sm bg-white" style={{ border: "1px solid #e7e5e4", color: "#1a1a18" }}>
        {value}
      </div>
    </div>
  );
}

/** The enquiry an owner sends from a profile, as the shop receives it. */
export function BriefMock() {
  return (
    <div className="rounded-xl bg-white overflow-hidden" style={{ border: `1px solid ${RULE}` }}>
      <div className="px-4 py-3 flex items-center gap-2 text-sm" style={{ borderBottom: `1px solid ${RULE}`, color: MUTED }}>
        <Mail className="w-4 h-4" style={{ color: TEAL }} aria-hidden />
        New enquiry via Fully Sorted
      </div>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Field label="Car" value="1972 Alfa Romeo GTV 2000" />
        <Field label="Where it is" value="Carlsbad, CA" />
        <Field label="What it needs" value="Pre-purchase inspection before Friday. Compression and leak-down, underside photos, a view on the Webers." wide />
        <Field label="Reply to" value="The owner's email, shown to you only" />
      </div>
      <div className="px-4 pb-4 flex items-center gap-3">
        <span className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold text-white" style={{ background: INK }}>Reply</span>
        <span className="text-xs" style={{ color: "#9a9a8a" }}>One job, described. No form to chase.</span>
      </div>
    </div>
  );
}

/** A review with the shop's reply under it. */
export function ReviewMock() {
  return (
    <div className="rounded-xl bg-white p-4 sm:p-5" style={{ border: `1px solid ${RULE}` }}>
      <div className="flex items-center gap-1" aria-label="Five stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-4 h-4" style={{ color: "#B08D3F", fill: "#B08D3F" }} aria-hidden />
        ))}
        <span className="ml-2 text-xs" style={{ color: "#9a9a8a" }}>Owner, 1972 Alfa Romeo GTV</span>
      </div>
      <p className="mt-3 text-sm leading-relaxed" style={{ color: "#3a3a30" }}>
        Found a cracked exhaust manifold the seller had not mentioned and a tired clutch. Report had forty photos. I paid eleven hundred less than asking because of it.
      </p>
      <div className="mt-4 pl-4" style={{ borderLeft: `3px solid ${TEAL}` }}>
        <p className="text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.12em", color: TEAL }}>Reply from the shop</p>
        <p className="mt-1 text-sm leading-relaxed" style={{ color: "#3a3a30" }}>
          Glad it helped. The manifold is a known weak point on the 2000; we have a used one on the shelf if you go ahead.
        </p>
      </div>
      <p className="mt-4 text-xs" style={{ color: "#9a9a8a" }}>
        A shop can answer a review. It can never remove one. No average is shown until there are three.
      </p>
    </div>
  );
}

/** A pre-built profile waiting for the shop to approve it. */
export function ClaimMock() {
  return (
    <div className="rounded-xl bg-white overflow-hidden" style={{ border: `1px solid ${RULE}` }}>
      <div className="px-4 py-2.5 flex items-center justify-between text-xs" style={{ background: "#FFF8E8", borderBottom: `1px solid ${RULE}`, color: "#8a6d2f" }}>
        <span>Draft built from public information. Not live until you approve it.</span>
      </div>
      <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-[96px_1fr] gap-4">
        <div className="w-24 h-24 rounded-lg flex items-center justify-center" style={{ background: "#F4F6F5", border: `1px dashed ${RULE}` }}>
          <Camera className="w-6 h-6" style={{ color: "#9a9a8a" }} aria-hidden />
        </div>
        <div>
          <p className="text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.12em", color: TEAL }}>Service and mechanical</p>
          <p className="mt-1 font-semibold text-lg leading-snug" style={{ color: INK }}>Your shop&apos;s name</p>
          <p className="text-sm" style={{ color: MUTED }}>Your city, your state</p>
          <p className="mt-2 text-sm leading-relaxed" style={{ color: "#3a3a30" }}>
            Two or three plain sentences about what you do, written from your own website. You edit every word.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-white" style={{ background: INK }}>
              <CheckCircle2 className="w-4 h-4" aria-hidden /> Approve and go live
            </span>
            <span className="text-sm font-semibold" style={{ color: MUTED }}>Fix something first</span>
            <span className="text-sm font-semibold" style={{ color: MUTED }}>Take it down</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/** The first screen of /sell: four fields and the photos. */
export function SellMock() {
  return (
    <div className="rounded-xl bg-white p-4 sm:p-5" style={{ border: `1px solid ${RULE}` }}>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <Field label="Year" value="1967" />
        <Field label="Make" value="Alfa Romeo" />
        <Field label="Model" value="Spider 1600" />
        <Field label="Asking" value="$49,950" />
      </div>
      <div className="mt-3 grid grid-cols-4 sm:grid-cols-6 gap-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="aspect-[4/3] rounded-md flex items-center justify-center" style={{ background: "#F4F6F5", border: `1px dashed ${RULE}` }}>
            <Camera className="w-4 h-4" style={{ color: "#c8c8c0" }} aria-hidden />
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs" style={{ color: "#9a9a8a" }}>
        Four fields and the photos get the listing started. The description comes next, and a line on what needs attention is encouraged; buyers trust listings that admit something.
      </p>
    </div>
  );
}

/** The package step, without the prices (those appear only on /sell). */
export function PackageMock() {
  const tiers = [
    { name: "Standard", d: "30 days, 20 photos" },
    { name: "Featured", d: "60 days, 40 photos and a video", on: true },
    { name: "Premium", d: "Until it sells, no limits" },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {tiers.map((t) => (
        <div key={t.name} className="rounded-xl bg-white p-4" style={{ border: t.on ? `2px solid ${INK}` : `1px solid ${RULE}` }}>
          <p className="font-semibold" style={{ color: INK }}>{t.name}</p>
          <p className="mt-1 text-sm" style={{ color: MUTED }}>{t.d}</p>
          <p className="mt-3 text-xs" style={{ color: "#9a9a8a" }}>Price shown here, paid once.</p>
        </div>
      ))}
    </div>
  );
}

/** Real provider cards, same markup as the homepage. */
export function ProviderCards({ providers }: { providers: RecentProvider[] }) {
  if (providers.length === 0) return null;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {providers.slice(0, 3).map((p) => (
        <Link
          key={p.slug}
          href={`/services/${p.slug}`}
          className="group block rounded-xl overflow-hidden bg-white transition-shadow hover:shadow-md"
          style={{ border: `1px solid ${RULE}` }}
        >
          <div className="relative aspect-[4/3]" style={{ background: "#F4F6F5" }}>
            <Image src={p.avatar_url} alt={`${formatBusinessName(p.business_name)} photo`} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" />
          </div>
          <div className="p-3">
            <p className="text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.12em", color: TEAL }}>{categoryLabel(p.category)}</p>
            <p className="mt-1 font-semibold leading-snug group-hover:underline underline-offset-4" style={{ color: INK }}>{formatBusinessName(p.business_name)}</p>
            {p.location && <p className="text-sm" style={{ color: MUTED }}>{formatLocation(p.location)}</p>}
          </div>
        </Link>
      ))}
    </div>
  );
}

/** The one-line Wanted post, as it sits on the board. */
export function WantedMock() {
  return (
    <div className="rounded-xl bg-white p-4 sm:p-5 flex items-start gap-3" style={{ border: `1px solid ${RULE}` }}>
      <MessageCircle className="w-5 h-5 mt-0.5 shrink-0" style={{ color: TEAL }} aria-hidden />
      <div>
        <p className="font-semibold" style={{ color: INK }}>Wanted: 1966 to 1969 Alfa Romeo Duetto, red preferred, West Coast, up to $60,000</p>
        <p className="mt-1 text-sm" style={{ color: MUTED }}>Private sellers and shops both welcome. Full history a plus. Finder&apos;s fee offered.</p>
      </div>
    </div>
  );
}
