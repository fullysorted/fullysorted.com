"use client";

import { useRouter } from "next/navigation";

type Opt = { slug: string; label: string };

export function CompareSelector({ options, a, b }: { options: Opt[]; a: string; b: string }) {
  const router = useRouter();
  const go = (na: string, nb: string) => {
    const params = new URLSearchParams();
    if (na) params.set("a", na);
    if (nb) params.set("b", nb);
    router.push(`/research/compare${params.toString() ? `?${params}` : ""}`);
  };
  const sel = "w-full h-11 px-3 rounded-xl border border-border bg-white text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent";
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-1.5">Model A</label>
        <select className={sel} value={a} onChange={(e) => go(e.target.value, b)}>
          <option value="">Choose a model…</option>
          {options.map((o) => <option key={o.slug} value={o.slug}>{o.label}</option>)}
        </select>
      </div>
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-1.5">Model B</label>
        <select className={sel} value={b} onChange={(e) => go(a, e.target.value)}>
          <option value="">Choose a model…</option>
          {options.map((o) => <option key={o.slug} value={o.slug}>{o.label}</option>)}
        </select>
      </div>
    </div>
  );
}
