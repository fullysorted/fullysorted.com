/**
 * The corner lines behind a white header (2026-10-15, from Chris's artwork).
 * Two stepped lines top-left, two bottom-right, thin and quiet. Drawn as SVG,
 * not the PNG, so they stay sharp at any width and cost nothing to load.
 * Each corner keeps its own proportions, so a phone crops nothing awkwardly;
 * the corners just get smaller.
 */
const STROKE = "rgba(18,53,42,0.42)";

export function HeaderLines() {
  // Full-bleed: the lines run off the screen edges like the artwork, even
  // inside a centered container. The parent section clips the overflow.
  return (
    <div aria-hidden className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-screen overflow-hidden">
      <svg
        className="absolute left-0 top-0 w-[26vw] max-w-[380px] min-w-[170px]"
        viewBox="0 0 520 210"
        fill="none"
      >
        <polyline points="0,38 379,38 518,137" stroke={STROKE} strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        <polyline points="0,127 229,127 336,204" stroke={STROKE} strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
      </svg>
      <svg
        className="absolute right-0 bottom-0 w-[34vw] max-w-[520px] min-w-[200px]"
        viewBox="907 685 765 220"
        fill="none"
      >
        <polyline points="1672,690 1392,690 1238,799" stroke={STROKE} strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        <polyline points="1672,774 1435,774 1256,900 907,900" stroke={STROKE} strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
      </svg>
    </div>
  );
}
