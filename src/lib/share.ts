/**
 * Share cards: one branded 1200x630 image for anything on the site worth
 * passing around. The same image is the OpenGraph/Twitter preview for the
 * page and the picture behind the Share button, so a link pasted into
 * iMessage, WhatsApp, a forum or Instagram carries the wordmark and the photo
 * instead of a grey box.
 *
 * Rendered by /api/og (see app/api/og/route.tsx). This file only knows how to
 * turn a record into the five things the card needs.
 *
 * Absolute URLs use www: the apex 307s to www and crawlers are lazy about
 * following redirects on images.
 */
import { getPublishedModelBySlugResult, modelDisplayName } from '@/lib/data/models';
import { categoryLabel } from '@/lib/service-categories';
import { formatBusinessName, formatLocation } from '@/lib/provider-format';
import { getWantedPost } from '@/lib/wanted';
import { WANTED_KINDS } from '@/lib/wanted-shared';
import { getPartsPost } from '@/lib/parts';
import { PARTS_KINDS, priceLabel, conditionLabel } from '@/lib/parts-shared';

export const SITE_URL = 'https://www.fullysorted.com';

export const SHARE_TYPES = ['model', 'provider', 'listing', 'wanted', 'part'] as const;
export type ShareType = (typeof SHARE_TYPES)[number];

export interface ShareCard {
  /** Small mono line above the title: "Model history", "For sale", ... */
  kicker: string;
  title: string;
  /** One quiet line under the title. */
  line: string;
  /** Absolute image URL, or null for the wordmark-only card. */
  photo: string | null;
  /** Canonical page path. */
  path: string;
}

/** The image URL for a page's card. id is a slug for models/providers/listings and a numeric id for boards. */
export function shareImageUrl(type: ShareType, id: string | number): string {
  return `${SITE_URL}/api/og?type=${type}&id=${encodeURIComponent(String(id))}`;
}

const absolute = (u: string | null | undefined): string | null => {
  if (!u) return null;
  if (/^https?:\/\//i.test(u)) return u;
  return `${SITE_URL}${u.startsWith('/') ? '' : '/'}${u}`;
};

export async function loadShareCard(type: ShareType, id: string): Promise<ShareCard | null> {
  switch (type) {
    case 'model': {
      const [make, ...rest] = id.split('/');
      if (!make || !rest.length) return null;
      const { model: m } = await getPublishedModelBySlugResult(make, rest.join('/'));
      if (!m) return null;
      const years = m.year_start ? `${m.year_start}${m.year_end && m.year_end !== m.year_start ? ` to ${m.year_end}` : ''}` : '';
      const built = m.production_total != null ? `${m.production_total.toLocaleString('en-US')} built` : '';
      return {
        kicker: 'Model history',
        title: modelDisplayName(m),
        line: [years, built].filter(Boolean).join(' · ') || 'History, specs and buyer\'s notes',
        photo: absolute(m.hero_photo),
        path: `/research/models/${m.slug}`,
      };
    }
    case 'provider': {
      if (!process.env.DATABASE_URL) return null;
      const { getDb, schema } = await import('@/lib/db');
      const { and, eq } = await import('drizzle-orm');
      const [p] = await getDb().select().from(schema.serviceProviders)
        .where(and(eq(schema.serviceProviders.slug, id), eq(schema.serviceProviders.status, 'active'))).limit(1);
      if (!p) return null;
      return {
        kicker: categoryLabel(p.category),
        title: formatBusinessName(p.businessName),
        line: formatLocation(p.location),
        photo: absolute(p.avatarUrl),
        path: `/services/${p.slug}`,
      };
    }
    case 'listing': {
      if (!process.env.DATABASE_URL) return null;
      const { getDb, schema } = await import('@/lib/db');
      const { and, eq } = await import('drizzle-orm');
      const [l] = await getDb().select().from(schema.listings)
        .where(and(eq(schema.listings.slug, id), eq(schema.listings.status, 'active'))).limit(1);
      if (!l) return null;
      const photos = (l.photos as string[] | null) ?? [];
      const price = l.price != null ? `$${Number(l.price).toLocaleString('en-US')}` : '';
      const where = [l.city, l.state].filter(Boolean).join(', ');
      return {
        kicker: 'For sale',
        title: `${l.year} ${l.make} ${l.model}${l.trim ? ` ${l.trim}` : ''}`.trim(),
        line: [price, where].filter(Boolean).join(' · '),
        photo: absolute(l.heroPhoto ?? photos[0]),
        path: `/listings/${l.slug}`,
      };
    }
    case 'wanted': {
      const n = Number(id);
      if (!Number.isInteger(n) || n <= 0) return null;
      const w = await getWantedPost(n, null);
      if (!w) return null;
      const kind = WANTED_KINDS.find((k) => k.key === w.kind)?.singular ?? 'Wanted';
      return {
        kicker: `${kind} wanted`,
        title: w.title,
        line: w.feeText ? `Finder's fee: ${w.feeText}` : [w.make, w.location].filter(Boolean).join(' · ') || 'On the Fully Sorted wanted board',
        photo: null,
        path: `/wanted/${w.id}`,
      };
    }
    case 'part': {
      const n = Number(id);
      if (!Number.isInteger(n) || n <= 0) return null;
      const p = await getPartsPost(n, null);
      if (!p) return null;
      const kind = PARTS_KINDS.find((k) => k.key === p.kind)?.singular ?? 'Part';
      return {
        kicker: p.status === 'sold' ? `${kind} · sold` : `${kind} for sale`,
        title: p.title,
        line: [priceLabel(p.price), conditionLabel(p.condition), p.location].filter(Boolean).join(' · '),
        photo: p.photos[0] ?? null,
        path: `/parts/${p.id}`,
      };
    }
  }
}
