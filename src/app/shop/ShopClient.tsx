"use client";

import { useState } from "react";
import {
  Sparkles,
  Wrench,
  Warehouse,
  BookOpen,
  Gift,
  ArrowUpRight,
  Star,
} from "lucide-react";
import {
  SHOP_CATEGORIES,
  SHOP_PRODUCTS,
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

  return (
    <div>
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
