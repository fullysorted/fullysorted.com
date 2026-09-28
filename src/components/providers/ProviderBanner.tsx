import Image from 'next/image';
import { DEFAULT_FOCUS, normalizeFocus, resolveBanner } from '@/lib/provider-images';

/**
 * The wide slot. The shop's own photo, cropped around the point they tapped;
 * failing that the first gallery photo; failing that the trade's stock photo,
 * which only older rows can reach.
 */
export function ProviderBanner({
  name,
  avatarUrl,
  gallery,
  category,
  focus,
  sizes,
  priority = false,
  className = '',
}: {
  name: string;
  avatarUrl?: string | null;
  gallery?: { url: string }[] | null;
  category?: string | null;
  focus?: string | null;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  const { src, own } = resolveBanner({ avatarUrl, gallery, category });
  return (
    <div className={`relative overflow-hidden bg-stone-100 ${className}`}>
      <Image
        src={src}
        alt={own ? `${name}, work photo` : ''}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
        style={{ objectPosition: (own && avatarUrl && normalizeFocus(focus)) || DEFAULT_FOCUS }}
      />
    </div>
  );
}
