import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { resolveCurrentUser } from "@/lib/identity";
import { getPartsPost, getRelatedParts } from "@/lib/parts";
import { PARTS_KINDS, conditionLabel, kindHref, partsCategory, priceLabel, shippingLabel } from "@/lib/parts-shared";
import { tradeHref } from "@/lib/category-slugs";
import { PartsCard } from "@/components/parts/PartsCard";
import { shareImageUrl, SITE_URL } from "@/lib/share";
import { ShareButton } from "@/components/share/ShareButton";
import { PartsActions } from "./PartsActions";
import { PartsPhotos } from "./PartsPhotos";
import { FinishPayment } from "./FinishPayment";

const INK = "#12352A";
const TEAL = "#1C8C87";
const MUTED = "#6B7280";
const RULE = "rgba(18,53,42,0.14)";
const MONO = "var(--font-jetbrains-mono), 'JetBrains Mono', Menlo, monospace";

type Props = { params: Promise<{ id: string }>; searchParams: Promise<{ posted?: string; paid?: string }> };

async function load(idRaw: string) {
  const id = Number(idRaw);
  if (!Number.isInteger(id) || id <= 0) return null;
  const viewer = await resolveCurrentUser();
  try {
    return await getPartsPost(id, viewer?.id ?? null);
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await load((await params).id);
  if (!post) return { title: "Parts" };
  const title = `${post.title}${post.status === "sold" ? " (sold)" : ` for sale, ${priceLabel(post.price).toLowerCase()}`}`;
  const description = post.body.slice(0, 155);
  const image = shareImageUrl("part", post.id);
  return {
    title,
    description,
    alternates: { canonical: `/parts/${post.id}` },
    robots: post.status === "open" ? undefined : { index: false },
    openGraph: { title, description, url: `${SITE_URL}/parts/${post.id}`, siteName: "Fully Sorted", images: [{ url: image, width: 1200, height: 630, alt: post.title }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

const day = (iso: string | null) => (iso ? new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) : "");

export default async function PartsPostPage({ params, searchParams }: Props) {
  const post = await load((await params).id);
  if (!post) notFound();
  const sp = await searchParams;
  const justPosted = sp.posted === "1";
  const backFromCheckout = sp.paid === "1";
  const kind = PARTS_KINDS.find((k) => k.key === post.kind)?.singular ?? post.kind;
  const open = post.status === "open";
  const sold = post.status === "sold";
  const shelf = partsCategory(post.category);
  const kindPlural = PARTS_KINDS.find((k) => k.key === post.kind)?.label ?? "Parts";
  const related = open || sold ? await getRelatedParts(post) : [];

  const facts: [string, string][] = [];
  const car = [post.make, post.model].filter(Boolean).join(" ");
  if (car) facts.push(["Fits", car]);
  if (post.partNumber) facts.push(["Part number", post.partNumber]);
  const cond = conditionLabel(post.condition);
  if (cond) facts.push(["Condition", cond]);
  const ship = shippingLabel(post.shipping);
  if (ship) facts.push(["Shipping", ship]);
  if (post.location) facts.push(["Where", post.location]);

  const jsonLd = open ? {
    "@context": "https://schema.org",
    "@type": "Product",
    name: post.title,
    description: post.body.slice(0, 500),
    image: post.photos,
    ...(post.price != null ? { offers: { "@type": "Offer", price: post.price, priceCurrency: "USD", availability: "https://schema.org/InStock", url: `${SITE_URL}/parts/${post.id}` } } : {}),
  } : null;

  return (
    <div className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
      {jsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <nav aria-label="Breadcrumb" className="text-sm font-semibold flex flex-wrap gap-x-2" style={{ color: MUTED }}>
          <Link href="/for-sale" style={{ color: TEAL }}>For sale</Link>
          <span>/</span>
          <Link href={kindHref(post.kind)} style={{ color: TEAL }}>{kindPlural}</Link>
          {shelf && (<><span>/</span><Link href={`/parts/category/${shelf.slug}`} style={{ color: TEAL }}>{shelf.label}</Link></>)}
        </nav>

        {post.mine && post.status === "pending" && (
          <div className="mt-5 rounded-xl p-4 text-sm" style={{ background: "var(--bg-surface)", color: INK }}>
            {justPosted ? "Got it. " : ""}This listing is waiting for a quick read before it goes up. Only you can see it for now. You will get an email when it is live.
          </div>
        )}
        {post.mine && post.status === "unpaid" && (
          backFromCheckout ? (
            <div className="mt-5 rounded-xl p-4 text-sm" style={{ background: "var(--bg-surface)", color: INK }}>
              Payment received. Stripe takes a moment to confirm it; refresh this page in a minute and the listing moves to its quick read.
            </div>
          ) : (
            <FinishPayment id={post.id} />
          )
        )}
        {post.mine && (post.status === "rejected" || post.status === "removed") && (
          <div className="mt-5 rounded-xl p-4 text-sm" style={{ background: "rgba(176,85,63,0.06)", color: "#9a3f2f" }}>
            This listing is not on the board. Only you can see this page.
          </div>
        )}
        {sold && (
          <div className="mt-5 rounded-xl p-4 text-sm font-semibold" style={{ background: "var(--bg-surface)", color: INK }}>Sold. This one has gone.</div>
        )}

        <div className="grid gap-8 lg:grid-cols-[1fr_380px] mt-6 items-start">
          <div>
            <PartsPhotos photos={post.photos} title={post.title} />
            <p className="mt-8 text-base sm:text-lg leading-relaxed whitespace-pre-line" style={{ color: INK }}>{post.body}</p>
            {facts.length > 0 && (
              <dl className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3 rounded-2xl p-5" style={{ border: `1px solid ${RULE}` }}>
                {facts.map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-xs uppercase tracking-wider" style={{ color: MUTED }}>{k}</dt>
                    <dd className="font-medium mt-0.5" style={{ color: INK }}>{v}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>

          <div className="lg:sticky lg:top-24">
            <p className="text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.12em", color: TEAL }}>{shelf?.label ?? kind}{sold ? " · sold" : " for sale"}</p>
            <h1 className="font-display tracking-tight text-2xl sm:text-3xl leading-tight mt-2" style={{ color: INK }}>{post.title}</h1>
            <p className="font-display text-3xl mt-3" style={{ color: sold ? MUTED : INK }}>{sold ? "Sold" : priceLabel(post.price)}</p>
            <p className="text-sm mt-2" style={{ color: MUTED }}>
              {post.handle ? `@${post.handle}` : "A member"} · listed {day(post.createdAt)}
              {open && post.expiresAt ? ` · up until ${day(post.expiresAt)}` : ""}
            </p>
            {(open || sold) && (
              <div className="mt-4">
                <ShareButton
                  title={post.title}
                  text={`${post.title} on Fully Sorted, ${priceLabel(post.price).toLowerCase()}`}
                  url={`${SITE_URL}/parts/${post.id}`}
                  image={shareImageUrl("part", post.id)}
                  filename={`fully-sorted-part-${post.id}`}
                />
              </div>
            )}

            <PartsActions id={post.id} mine={post.mine} open={open} pending={post.status === "pending"} handle={post.handle} replyCount={post.replyCount} />

            {open && !post.mine && (
              <p className="text-xs mt-6 leading-relaxed" style={{ color: MUTED }}>
                Everything above is the seller&apos;s description, not ours. Ask for more photos, check the part number against
                your car, and pay in a way you can dispute. Fully Sorted is not a party to the sale.
              </p>
            )}
          </div>
        </div>

        {(related.length > 0 || shelf?.trade) && (
          <div className="mt-16 pt-10" style={{ borderTop: `1px solid ${RULE}` }}>
            {related.length > 0 && (
              <>
                <div className="flex items-baseline justify-between mb-5">
                  <h2 className="font-display text-2xl" style={{ color: INK }}>More like this</h2>
                  <Link href={shelf ? `/parts/category/${shelf.slug}` : `${kindHref(post.kind)}#board`} className="text-sm font-semibold" style={{ color: TEAL }}>
                    {shelf ? `All ${shelf.label.toLowerCase()}` : `All ${kindPlural.toLowerCase()}`}
                  </Link>
                </div>
                <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {related.map((r) => <li key={r.id}><PartsCard p={r} /></li>)}
                </ul>
              </>
            )}
            {shelf?.trade && (
              <p className="text-sm mt-8" style={{ color: MUTED }}>
                Buying this for a car that needs it fitted?{" "}
                <Link href={tradeHref(shelf.trade)} className="font-semibold underline underline-offset-4" style={{ color: TEAL }}>Find a pro who knows the car</Link>.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
