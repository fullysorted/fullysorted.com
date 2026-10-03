// Public provider slugs for the sitemap.
//
// Thirty founding providers going live with no sitemap entries means thirty
// pages earning no search traffic on day one — which is most of the reason a
// shop agrees to be listed at all.

export interface PublicProviderSlug {
  slug: string;
  updated_at: string | null;
}

export async function getPublicProviderSlugs(): Promise<PublicProviderSlug[]> {
  if (!process.env.DATABASE_URL) return [];
  try {
    const { neon } = await import('@neondatabase/serverless');
    const sql = neon(process.env.DATABASE_URL);
    const rows = (await sql`
      SELECT slug, updated_at
      FROM service_providers
      WHERE status = 'active' AND slug IS NOT NULL AND slug <> ''
      ORDER BY created_at DESC
      LIMIT 5000
    `) as PublicProviderSlug[];
    return rows;
  } catch {
    return [];
  }
}

// Providers for a category landing page (/services/category/{slug}). Matches
// the headline category or an extra key in service_types, as the directory does.
export interface CategoryProvider {
  slug: string;
  business_name: string;
  location: string | null;
  description: string | null;
}

export async function getProvidersForCategory(key: string): Promise<CategoryProvider[]> {
  if (!process.env.DATABASE_URL) return [];
  try {
    const { neon } = await import('@neondatabase/serverless');
    const sql = neon(process.env.DATABASE_URL);
    const rows = (await sql`
      SELECT slug, business_name, location, description
      FROM service_providers
      WHERE status = 'active' AND slug IS NOT NULL AND slug <> ''
        AND (category = ${key} OR COALESCE(service_types, '[]'::jsonb) ? ${key})
      ORDER BY created_at ASC
      LIMIT 60
    `) as CategoryProvider[];
    return rows;
  } catch {
    return [];
  }
}

// Newest live providers for the homepage "Recently joined" strip. Photo
// required (it is required at onboarding anyway) so the strip never shows a
// blank card. `total` is every live provider, for the "see all" link.
export interface RecentProvider {
  slug: string;
  business_name: string;
  category: string;
  location: string | null;
  avatar_url: string;
}

export async function getRecentProviders(limit = 4): Promise<{ providers: RecentProvider[]; total: number }> {
  if (!process.env.DATABASE_URL) return { providers: [], total: 0 };
  try {
    const { neon } = await import('@neondatabase/serverless');
    const sql = neon(process.env.DATABASE_URL);
    const rows = (await sql`
      SELECT slug, business_name, category, location, avatar_url,
             COUNT(*) OVER ()::int AS total
      FROM service_providers
      WHERE status = 'active' AND slug IS NOT NULL AND slug <> ''
        AND avatar_url IS NOT NULL AND avatar_url <> ''
      ORDER BY created_at DESC
      LIMIT ${limit}
    `) as (RecentProvider & { total: number })[];
    return { providers: rows, total: rows[0]?.total ?? 0 };
  } catch {
    return { providers: [], total: 0 };
  }
}

// Every active provider, public fields only (no phone or website: those are
// for members). Feeds the server-rendered fallback on /services so the main
// directory page carries shop names and profile links in its HTML. The
// interactive directory is client-only (it reads search params), so without
// this the page a crawler or AI agent fetched listed no shops at all.
export interface DirectoryProvider {
  slug: string;
  business_name: string;
  category: string | null;
  location: string | null;
}

export async function getDirectoryProviders(): Promise<DirectoryProvider[]> {
  if (!process.env.DATABASE_URL) return [];
  try {
    const { neon } = await import('@neondatabase/serverless');
    const sql = neon(process.env.DATABASE_URL);
    const rows = (await sql`
      SELECT slug, business_name, category, location
      FROM service_providers
      WHERE status = 'active' AND slug IS NOT NULL AND slug <> ''
      ORDER BY business_name ASC
      LIMIT 2000
    `) as DirectoryProvider[];
    return rows;
  } catch {
    return [];
  }
}
