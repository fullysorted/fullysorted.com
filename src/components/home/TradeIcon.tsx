import type { ServiceCategoryKey } from "@/lib/service-categories";

/**
 * One solid silhouette per trade, drawn on a 24-unit grid. Filled shapes, not
 * strokes, so they read at 24px and recolor with `fill`. A category without a
 * glyph here gets the wrench.
 */
const PATHS: Partial<Record<ServiceCategoryKey, string>> = {
  photography:
    "M9 3l-1.5 2H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3.5L15 3zm3 5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 2.2a2.3 2.3 0 1 0 0 4.6 2.3 2.3 0 0 0 0-4.6z",
  detailing:
    "M9 2h4v2h-1v2.2l4.5 1.3V9l-4.5-1.2V9a5 5 0 0 1 3 4.6V21a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-7.4A5 5 0 0 1 10 9V4H9zM18 2l.9 1.9L21 5l-2.1 1.1L18 8l-.9-1.9L15 5l2.1-1.1z",
  inspection:
    "M9.5 2a7.5 7.5 0 0 1 6 12l6.2 6.2-2.1 2.1-6.2-6.2A7.5 7.5 0 1 1 9.5 2zm0 3a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm-2 3.2l1.4 1.4 2.8-2.8 1.4 1.4-4.2 4.2-2.8-2.8z",
  mechanical:
    "M21.7 6.1a5.5 5.5 0 0 1-7.3 6.6L7.1 20a2.1 2.1 0 0 1-3-3l7.3-7.3a5.5 5.5 0 0 1 6.6-7.3l-3.2 3.2.7 2.9 2.9.7z",
  transport:
    "M2 5h12v10h1V8h4l3 4v5h-2.2a2.5 2.5 0 0 1-4.6 0H9.8a2.5 2.5 0 0 1-4.6 0H2zm14 5v2.5h3.6L17.8 10z",
  restoration:
    "M5 13l2-6h10l2 6h1a1 1 0 0 1 1 1v5h-3v-2H6v2H3v-5a1 1 0 0 1 1-1zm2.4-1h9.2l-1-3H8.4zM4 20h16v2H4zM17 2l.7 1.5 1.5.7-1.5.7L17 6.4l-.7-1.5-1.5-.7 1.5-.7z",
  bodywork:
    "M3 4h9l2 3h7v3H8l-1 8H4l1-8H3zm4.5 5.2L6.3 19h1.4l1.2-9.8zM12 12h9v9h-2v-7h-7z",
  upholstery:
    "M5 3h3v9h8V3h3v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm-1 13h16v2h-1v4h-2v-4H7v4H5v-4H4z",
  storage:
    "M12 2l10 6v14H2V8zm-6 9v2h12v-2zm0 4v2h12v-2zm0 4v1h12v-1z",
  titling:
    "M6 2h9l5 5v15H6zm2 8v2h10v-2zm0 4v2h7v-2zm9.5 4a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z",
};

export function TradeIcon({
  k,
  className,
  color = "#12352A",
}: {
  k: ServiceCategoryKey;
  className?: string;
  color?: string;
}) {
  const d = PATHS[k] ?? PATHS.mechanical!;
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <path d={d} fill={color} />
    </svg>
  );
}
