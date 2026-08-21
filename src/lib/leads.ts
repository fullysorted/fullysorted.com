/**
 * Directory leads — resolving which shop an enquiry belongs to, and whether we
 * may email them directly.
 *
 * Lives in lib/ rather than inside the route so it can be tested in isolation:
 * the routing rules below decide whether a stranger's message reaches a
 * business's inbox, which is not logic to leave untested inside a handler.
 */

type Sql = (strings: TemplateStringsArray, ...values: unknown[]) => Promise<Record<string, unknown>[]>;

/**
 * Header-injection guard for any address that came from a form, and the same
 * check used before an address becomes a Reply-To on outbound mail. Rejects
 * commas, semicolons, angle brackets, quotes and whitespace.
 */
export function isEmailAddress(v: unknown): v is string {
  return typeof v === 'string' && /^[^@\s,;<>"]+@[^@\s,;<>"]+\.[^@\s,;<>"]+$/.test(v.trim());
}

/**
 * A directory enquiry is stored with listing_slug = "provider:<slug>" — there
 * is no listing, the shop is the subject. Returns the shop's slug, or null for
 * an ordinary listing message.
 */
export function providerSlugOf(listingSlug: string | null | undefined): string | null {
  if (!listingSlug || !listingSlug.startsWith('provider:')) return null;
  const slug = listingSlug.slice('provider:'.length).trim();
  return slug || null;
}

export type Relay = {
  providerId: number;
  email: string;
  businessName: string;
  slug: string;
} | null;

/**
 * Decide whether we can send this lead straight to the shop.
 *
 * Returns null — meaning "route it to Chris, as it always did" — for every case
 * where emailing the shop would be wrong rather than merely inconvenient:
 *
 *   • the slug doesn't resolve to a provider
 *   • the listing isn't active (pending, paused, rejected)
 *   • the shop declined our outreach
 *   • the shop has no email on file
 *   • the address is on the suppression list
 *
 * The lead is never lost in any of those cases: it still saves and still
 * reaches Chris, which is exactly the behaviour that existed before the relay.
 */
export async function resolveRelay(sql: Sql, listingSlug: string | null | undefined): Promise<Relay> {
  const slug = providerSlugOf(listingSlug);
  if (!slug) return null;

  const [p] = await sql`
    SELECT id, email, business_name, slug, status, outreach_status
    FROM service_providers
    WHERE slug = ${slug}
    LIMIT 1
  `;
  if (!p) return null;
  if (p.status !== 'active') return null;
  if (p.outreach_status === 'declined') return null;

  const email = typeof p.email === 'string' ? p.email.trim() : '';
  if (!isEmailAddress(email)) return null;

  const [suppressed] = await sql`
    SELECT 1 FROM outreach_suppression WHERE LOWER(email) = ${email.toLowerCase()} LIMIT 1
  `;
  if (suppressed) return null;

  return {
    providerId: Number(p.id),
    email,
    businessName: String(p.business_name),
    slug: String(p.slug),
  };
}
