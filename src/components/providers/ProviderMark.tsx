import Image from 'next/image';
import { TradeIcon } from '@/components/home/TradeIcon';
import type { ServiceCategoryKey } from '@/lib/service-categories';
import {
  DEFAULT_MARK_TINT,
  MARK_TINTS,
  initialsFor,
  normalizeLogoKind,
} from '@/lib/provider-images';

/**
 * The square slot: a shop's logo, a portrait, or a drawn trade tile.
 *
 * A logo is shown whole on white and never cropped. A photo fills the square.
 * With neither, the tile is drawn here: initials in the display serif on the
 * trade's muted tint, the trade silhouette ghosted in the corner. No files, no
 * generation service, and the same shop gets the same tile every time.
 */
export function ProviderMark({
  name,
  category,
  logoUrl,
  logoKind,
  size = 56,
  ring = false,
  className = '',
}: {
  name: string;
  category: string | null | undefined;
  logoUrl?: string | null;
  logoKind?: string | null;
  size?: number;
  /** White border, for when the mark overlaps a photo. */
  ring?: boolean;
  className?: string;
}) {
  const radius = Math.round(size * 0.22);
  const ringStyle = ring
    ? { border: `${size >= 96 ? 4 : 3}px solid #FFFFFF`, boxShadow: '0 6px 18px -8px rgba(18,53,42,0.45)' }
    : { border: '1px solid rgba(18,53,42,0.12)' };
  const box = { width: size, height: size, borderRadius: radius, ...ringStyle };

  if (logoUrl) {
    const kind = normalizeLogoKind(logoKind);
    const pad = kind === 'logo' ? Math.round(size * 0.1) : 0;
    return (
      <div className={`relative shrink-0 overflow-hidden bg-white ${className}`} style={box}>
        <div className="absolute" style={{ inset: pad }}>
          <Image
            src={logoUrl}
            alt={kind === 'logo' ? `${name} logo` : `${name}, owner photo`}
            fill
            sizes={`${size * 2}px`}
            className={kind === 'logo' ? 'object-contain' : 'object-cover'}
          />
        </div>
      </div>
    );
  }

  const tint = MARK_TINTS[category ?? ''] ?? DEFAULT_MARK_TINT;
  return (
    <div
      className={`relative shrink-0 overflow-hidden select-none ${className}`}
      style={{ ...box, background: tint }}
      role="img"
      aria-label={`${name} mark`}
    >
      <TradeIcon
        k={(category ?? 'mechanical') as ServiceCategoryKey}
        color="#F5EFE6"
        className="absolute opacity-[0.14]"
        // Oversized and pushed off the corner so it reads as texture, not a badge.
        style={{ width: size * 0.78, height: size * 0.78, right: -size * 0.14, bottom: -size * 0.14 }}
      />
      <span
        className="font-display absolute inset-0 flex items-center justify-center"
        style={{ color: '#F5EFE6', fontSize: Math.round(size * 0.4), lineHeight: 1, letterSpacing: '0.02em' }}
        aria-hidden
      >
        {initialsFor(name)}
      </span>
    </div>
  );
}
