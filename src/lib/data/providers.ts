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
