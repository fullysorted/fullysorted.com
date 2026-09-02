"use client";

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Sparkles,
  Wrench,
  Warehouse,
  BookOpen,
  Gift,
  ArrowUpRight,
  ArrowLeft,
  Star,
  KeyRound,
  Search,
} from "lucide-react";
import {
  SHOP_CATEGORIES,
  SHOP_PRODUCTS,
  SHOP_KITS,
  kitProducts,
  type ShopProduct,
  type ShopCategoryKey,
} from "@/lib/data/shopProducts";
import { affiliateHref, merchantLabel } from "@/lib/affiliate";

const ICONS: Record<string, React.ElementType> = {
  Sparkles,
  Wrench,
  Warehouse,
  BookOpen,
  Gift,
  KeyRound,
  Search,
};

function ProductCard({ p }: { p: ShopProduct }) {
  const cat = SHOP_CATEGORIES.find((c) => c.key === p.category);
  const Icon = ICONS[cat?.icon ?? "Sparkles"] ?? Sparkles;
  return (
    <a
      href={affiliateHref(p)}
      target="_blank"
      rel="sponsored nofollow noopener noreferrer"
      className="group flex flex-col rounded-2xl bg-white border border-border p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
    >
      <div className="flex items-center justify-between mb-3">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: "rgba(30,96,145,0.08)" }}
        >
          <Icon className="w-5 h-5" style={{ color: "#1E6091" }} />
        </div>
        {p.editorsPick && (
          <span
            className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full"
            style={{ color: "#8a6d2f", backgroundColor: "rgba(176,141,63,0.12)", border: "1px solid rgba(176,141,63,0.3)" }}
          >
            <Star className="w-3 h-3" /> Editor&rsquo;s pick
          </span>
        )}
      </div>
      <h3 className="text-base font-bold text-foreground mb-1.5">{p.name}</h3>
      <p className="text-sm text-text-secondary leading-relaxed flex-1">{p.blurb}</p>
      <span
        className="mt-4 inline-flex items-center gap-1 text-xs font-semibold transition-colors"
        style={{ color: "#1E6091" }}
      >
        View on {merchantLabel(p.merchant)}
        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </span>
    </a>
  );
}

function CategoryBlock({ categoryKey }: { categoryKey: ShopCategoryKey }) {
  const cat = SHOP_CATEGORIES.find((c) => c.key === categoryKey)!;
  const items = SHOP_PRODUCTS.filter((p) => p.category === categoryKey);
  const Icon = ICONS[cat.icon] ?? Sparkles;
  if (items.length === 0) return null;
  return (
    <section className="mb-14">
      <div className="flex items-center gap-2.5 mb-1.5">
        <Icon className="w-5 h-5" style={{ color: "#1E6091" }} />
        <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">{cat.label}</h2>
      </div>
      <p className="text-sm text-text-secondary max-w-2xl mb-6">{cat.intro}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((p) => (
          <ProductCard key={p.slug} p={p} />
        ))}
      </div>
    </section>
  );
}

export function ShopClient() {
  const [active, setActive] = useState<ShopCategoryKey | "all">("all");
  const shown = active === "all" ? SHOP_CATEGORIES.map((c) => c.key) : [active];

  // The open kit lives in the URL, not in state: a model page, a care guide or
  // an email can link straight to /shop?kit=show-day, and the back button does
  // what a reader expects. Deriving it rather than syncing it into state also
  // keeps this out of an effect.
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const kitSlug = searchParams.get("kit");
  const kit = kitSlug ? SHOP_KITS.find((k) => k.slug === kitSlug) ?? null : null;

  function openKit(slug: string) {
    router.replace(`${pathname}?kit=${encodeURIComponent(slug)}`, { scroll: false });
  }

  function closeKit() {
    router.replace(pathname, { scroll: false });
  }

  // A kit takes over the page: it is a single answer to a single moment, and
  // burying it under the full catalogue defeats the point of having one.
  if (kit) {
    const items = kitProducts(kit);
    const KitIcon = ICONS[kit.icon] ?? Sparkles;
    return (
      <div>
        <button
          onClick={closeKit}
          className="inline-flex items-center gap-1.5 text-sm font-semibold mb-6 hover:opacity-70 transition-opacity"
          style={{ color: "#1E6091" }}
        >
          <ArrowLeft className="w-4 h-4" /> All of the shop
        </button>

        <div className="rounded-2xl p-6 sm:p-7 mb-8" style={{ background: "rgba(30,96,145,0.06)", border: "1px solid rgba(30,96,145,0.18)" }}>
          <div className="flex items-center gap-2.5 mb-1.5">
            <KitIcon className="w-5 h-5" style={{ color: "#1E6091" }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#1E6091" }}>
              {kit.when}
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mb-2">
            {kit.label}
          </h2>
          <p className="text-sm text-text-secondary max-w-2xl leading-relaxed">{kit.intro}</p>
          <p className="text-xs text-text-tertiary mt-3">
            {items.length} things, in the order they matter. Buy the ones you don&rsquo;t already own.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((p) => (
            <ProductCard key={p.slug} p={p} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Kits — the shop's own front door. Each one is a moment, not a category. */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground mb-1.5">
          Start with the moment you&rsquo;re in
        </h2>
        <p className="text-sm text-text-secondary max-w-2xl mb-5">
          Four kits for the four times an owner actually needs to buy something. Everything in them is
          from the list below, grouped by the job rather than by the shelf.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SHOP_KITS.map((k) => {
            const Icon = ICONS[k.icon] ?? Sparkles;
            const n = kitProducts(k).length;
            return (
              <button
                key={k.slug}
                onClick={() => openKit(k.slug)}
                className="group text-left rounded-2xl bg-white border border-border p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:border-accent"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: "rgba(30,96,145,0.08)" }}>
                  <Icon className="w-5 h-5" style={{ color: "#1E6091" }} />
                </div>
                <p className="text-[11px] font-bold uppercase tracking-wider mb-1" style={{ color: "#9a9a8a" }}>
                  {k.when}
                </p>
                <h3 className="text-base font-bold text-foreground mb-1">{k.label}</h3>
                <p className="text-xs text-text-secondary">{n} things</p>
              </button>
            );
          })}
        </div>
      </section>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        <button
          onClick={() => setActive("all")}
          className={
            "px-4 py-2 rounded-full text-sm font-medium border transition-colors " +
            (active === "all"
              ? "text-white border-transparent"
              : "text-text-secondary border-border hover:border-accent hover:text-accent")
          }
          style={active === "all" ? { backgroundColor: "#1E6091" } : undefined}
        >
          Everything
        </button>
        {SHOP_CATEGORIES.map((c) => {
          const on = active === c.key;
          const Icon = ICONS[c.icon] ?? Sparkles;
          return (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={
                "inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border transition-colors " +
                (on ? "text-white border-transparent" : "text-text-secondary border-border hover:border-accent hover:text-accent")
              }
              style={on ? { backgroundColor: "#1E6091" } : undefined}
            >
              <Icon className="w-3.5 h-3.5" /> {c.label}
            </button>
          );
        })}
      </div>

      {shown.map((key) => (
        <CategoryBlock key={key} categoryKey={key} />
      ))}
    </div>
  );
}
