/**
 * Public data access for the gig marketplace (buyer-facing).
 *
 * Only ACTIVE gigs belonging to ACTIVE (approved) providers are ever shown.
 * Degrades gracefully with no DATABASE_URL (returns []/null) so the site
 * builds and renders empty states.
 */

export interface PublicGigPackage {
  id: number;
  tier: string;
  title: string | null;
  description: string | null;
  price: number;
  delivery_days: number | null;
  revisions: number | null;
  features: string[] | null;
}

export interface PublicGig {
  id: number;
  slug: string;
  title: string;
  category: string | null;
  description: string | null;
  images: string[] | null;
  faqs: { q: string; a: string }[] | null;
  requirements: string | null;
  status: string;
  rating: string | null;
  orders_count: number | null;
  // provider
  provider_id: number;
  provider_name: string;
  provider_slug: string;
  provider_location: string | null;
  provider_headline: string | null;
  provider_avatar: string | null;
  provider_verified: boolean | null;
  provider_payouts_enabled: boolean | null;
  from_price: number | null;
}

export interface PublicGigDetail extends PublicGig {
  packages: PublicGigPackage[];
}

function hasDb() {
  return !!process.env.DATABASE_URL;
}
async function sqlClient() {
  const { neon } = await import('@neondatabase/serverless');
  return neon(process.env.DATABASE_URL!);
}

export async function getActiveGigs(category?: string): Promise<PublicGig[]> {
  if (!hasDb()) return [];
  try {
    const sql = await sqlClient();
    const rows = category
      ? await sql`
        SELECT g.id, g.slug, g.title, g.category, g.description, g.images, g.status,
          g.rating, g.orders_count,
          p.id AS provider_id, p.business_name AS provider_name, p.slug AS provider_slug,
          p.location AS provider_location, p.headline AS provider_headline,
          p.avatar_url AS provider_avatar, p.verified AS provider_verified,
          (SELECT MIN(price) FROM gig_packages gp WHERE gp.gig_id = g.id)::int AS from_price
        FROM gigs g JOIN service_providers p ON p.id = g.provider_id
        WHERE g.status = 'active' AND p.status = 'active' AND g.category = ${category}
        ORDER BY g.orders_count DESC NULLS LAST, g.created_at DESC`
      : await sql`
        SELECT g.id, g.slug, g.title, g.category, g.description, g.images, g.status,
          g.rating, g.orders_count,
          p.id AS provider_id, p.business_name AS provider_name, p.slug AS provider_slug,
          p.location AS provider_location, p.headline AS provider_headline,
          p.avatar_url AS provider_avatar, p.verified AS provider_verified,
          (SELECT MIN(price) FROM gig_packages gp WHERE gp.gig_id = g.id)::int AS from_price
        FROM gigs g JOIN service_providers p ON p.id = g.provider_id
        WHERE g.status = 'active' AND p.status = 'active'
        ORDER BY g.orders_count DESC NULLS LAST, g.created_at DESC`;
    return rows as unknown as PublicGig[];
  } catch (e) {
    console.error('getActiveGigs failed:', (e as Error)?.message);
    return [];
  }
}

export async function getGigBySlug(slug: string): Promise<PublicGigDetail | null> {
  if (!hasDb()) return null;
  try {
    const sql = await sqlClient();
    const rows = (await sql`
      SELECT g.id, g.slug, g.title, g.category, g.description, g.images, g.faqs,
        g.requirements, g.status, g.rating, g.orders_count,
        p.id AS provider_id, p.business_name AS provider_name, p.slug AS provider_slug,
        p.location AS provider_location, p.headline AS provider_headline,
        p.avatar_url AS provider_avatar, p.verified AS provider_verified,
        p.payouts_enabled AS provider_payouts_enabled
      FROM gigs g
      JOIN service_providers p ON p.id = g.provider_id
      WHERE LOWER(g.slug) = ${slug.toLowerCase()} AND g.status = 'active' AND p.status = 'active'
      LIMIT 1
    `) as unknown as PublicGig[];
    const gig = rows[0];
    if (!gig) return null;

    const packages = (await sql`
      SELECT id, tier, title, description, price, delivery_days, revisions, features
      FROM gig_packages WHERE gig_id = ${gig.id}
      ORDER BY price ASC
    `) as unknown as PublicGigPackage[];

    const from = packages.length ? Math.min(...packages.map((p) => p.price)) : null;
    return { ...gig, packages, from_price: from };
  } catch (e) {
    console.error('getGigBySlug failed:', (e as Error)?.message);
    return null;
  }
}
