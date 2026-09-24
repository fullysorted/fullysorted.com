import Link from "next/link";
import { PARTS_KINDS, conditionLabel, priceLabel, type PartsPost } from "@/lib/parts-shared";

const INK = "#12352A";
const TEAL = "#1C8C87";
const MUTED = "#6B7280";
const RULE = "rgba(18,53,42,0.14)";

/** One listing. `compact` is the thumbnail row used in sidebars (model pages); the default is the board tile. */
export function PartsCard({ p, compact = false }: { p: PartsPost; compact?: boolean }) {
  const kind = PARTS_KINDS.find((k) => k.key === p.kind)?.singular ?? "Part";
  const sold = p.status === "sold";
  const facts = [conditionLabel(p.condition), [p.make, p.model].filter(Boolean).join(" "), p.location].filter(Boolean);
  const photo = p.photos[0] ?? null;

  if (compact) {
    return (
      <Link href={`/parts/${p.id}`} className="flex gap-3 group">
        {photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={photo} alt={p.title} className="w-16 h-12 rounded-lg object-cover shrink-0" style={{ background: "#eee" }} />
        ) : (
          <div className="w-16 h-12 rounded-lg shrink-0" style={{ background: "#eee" }} />
        )}
        <div className="min-w-0">
          <p className="text-sm font-semibold truncate group-hover:opacity-70 transition-opacity" style={{ color: "#1a1a18" }}>{p.title}</p>
          <p className="text-sm font-bold" style={{ color: "#1E6091" }}>{sold ? "Sold" : priceLabel(p.price)}</p>
          {facts.length > 0 && <p className="text-[11px] truncate" style={{ color: "#9a9a8a" }}>{facts.join(" · ")}</p>}
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/parts/${p.id}`} className="block rounded-2xl bg-white overflow-hidden h-full transition-shadow hover:shadow-md" style={{ border: `1px solid ${RULE}` }}>
      <div className="relative aspect-[4/3]" style={{ background: "#F4F6F5" }}>
        {photo && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={photo} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
        )}
        {sold && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded text-[11px] font-bold uppercase tracking-wider" style={{ background: INK, color: "#fff" }}>Sold</span>
        )}
        {p.photos.length > 1 && (
          <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded text-[11px] font-semibold" style={{ background: "rgba(255,255,255,0.92)", color: INK }}>
            {p.photos.length} photos
          </span>
        )}
      </div>
      <div className="p-4">
        <span className="block text-[11px] font-bold uppercase tracking-wider" style={{ color: TEAL }}>{kind}</span>
        <span className="block font-display text-lg leading-snug mt-1" style={{ color: INK }}>{p.title}</span>
        <span className="block font-bold mt-1.5" style={{ color: sold ? MUTED : INK }}>{sold ? "Sold" : priceLabel(p.price)}</span>
        {facts.length > 0 && <span className="block text-sm mt-1.5" style={{ color: MUTED }}>{facts.join(" · ")}</span>}
        <span className="block text-xs mt-3" style={{ color: MUTED }}>{p.handle ? `@${p.handle}` : "Member"}</span>
      </div>
    </Link>
  );
}
