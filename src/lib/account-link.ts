import { randomBytes } from 'crypto';

/**
 * Linking a Fully Sorted account to an existing provider listing.
 *
 * ── Why this exists ──────────────────────────────────────────────────────
 * `service_providers.clerk_user_id` used to be written only at INSERT, by the
 * public apply form, from whatever session happened to submit it. No route
 * updated it afterwards. The consequence: every shop the team onboarded by
 * phone was permanently accountless. They could sign up, but the dashboard
 * matches on `clerk_user_id`, found nothing, and offered them a button that
 * created a second listing with a new slug. Two listings, one shop.
 *
 * ── The security model ───────────────────────────────────────────────────
 * Redeeming a link token hands someone control of a real business's public
 * listing — its contact details, its review replies, and its payouts if the
 * gig rail ever opens. So the token is treated like a password reset, because
 * that is exactly what it is:
 *
 *   1. It is emailed ONLY to the address already stored on the provider row.
 *      A caller never chooses the destination, so requesting a link for a shop
 *      you don't control just mails that shop.
 *   2. 24 bytes of entropy, unique, and single-use — cleared on redemption.
 *   3. It expires. An old invite forwarded around an office two months later
 *      is not a way in.
 *   4. It refuses a row that is already linked. A listing can be claimed once;
 *      after that a human has to be involved, which is the correct amount of
 *      friction for "someone else already owns this business's page".
 *   5. It refuses a Clerk user who already owns a different listing, because
 *      the dashboard resolves one provider per user and would silently pick
 *      one of the two.
 *
 * On success the address on file is notified, so a link nobody expected is
 * visible to the business rather than silent.
 */

/** How long a link invite stays good. Long enough to survive a holiday. */
export const LINK_TOKEN_TTL_DAYS = 14;

type Sql = (strings: TemplateStringsArray, ...values: unknown[]) => Promise<Record<string, unknown>[]>;

export function makeLinkToken(): string {
  return randomBytes(24).toString('base64url');
}

/** Idempotent, house pattern — safe to call on any request that links. */
export async function ensureAccountLinkColumns(sql: Sql): Promise<void> {
  await sql`ALTER TABLE service_providers ADD COLUMN IF NOT EXISTS account_link_token VARCHAR(64)`;
  await sql`ALTER TABLE service_providers ADD COLUMN IF NOT EXISTS account_link_sent_at TIMESTAMPTZ`;
  await sql`ALTER TABLE service_providers ADD COLUMN IF NOT EXISTS account_link_expires_at TIMESTAMPTZ`;
  await sql`ALTER TABLE service_providers ADD COLUMN IF NOT EXISTS account_linked_at TIMESTAMPTZ`;
  await sql`CREATE UNIQUE INDEX IF NOT EXISTS service_providers_link_token_idx ON service_providers (account_link_token)`;
}

export type LinkTarget = {
  providerId: number;
  businessName: string;
  slug: string;
  email: string;
  token: string;
};

export type MintResult =
  | { ok: true; target: LinkTarget }
  | { ok: false; reason: 'not_found' | 'already_linked' | 'no_email' | 'declined' };

/**
 * Mint a link token for a provider, REUSING a still-valid one if there is one.
 *
 * This used to replace the token unconditionally. That is the ordinary password
 * reset behaviour, but it combines badly with an email send that can fail: the
 * old token was destroyed before the new one was sent, so a provider who had a
 * working link in their inbox and pressed "send me the link" while the mail
 * provider was down ended up with nothing that worked and no way to get one.
 * Re-sending the SAME live token is idempotent, survives a failed send, and
 * still lets a genuinely expired or already-used token be replaced.
 */
export async function mintAccountLink(sql: Sql, opts: { providerId?: number; email?: string }): Promise<MintResult> {
  const rows = opts.providerId
    ? await sql`
        SELECT id, business_name, slug, email, clerk_user_id, outreach_status,
               account_link_token,
               (account_link_expires_at IS NOT NULL AND account_link_expires_at > NOW()) AS link_still_valid
        FROM service_providers WHERE id = ${opts.providerId} LIMIT 1`
    : await sql`
        SELECT id, business_name, slug, email, clerk_user_id, outreach_status,
               account_link_token,
               (account_link_expires_at IS NOT NULL AND account_link_expires_at > NOW()) AS link_still_valid
        FROM service_providers
        WHERE LOWER(email) = ${String(opts.email ?? '').trim().toLowerCase()}
          AND status <> 'rejected'
        ORDER BY created_at ASC LIMIT 1`;

  const p = rows[0];
  if (!p) return { ok: false, reason: 'not_found' };
  if (p.clerk_user_id) return { ok: false, reason: 'already_linked' };
  if (p.outreach_status === 'declined') return { ok: false, reason: 'declined' };

  const email = typeof p.email === 'string' ? p.email.trim() : '';
  if (!email) return { ok: false, reason: 'no_email' };

  const liveToken =
    p.link_still_valid && typeof p.account_link_token === 'string' && p.account_link_token
      ? p.account_link_token
      : null;
  const token = liveToken ?? makeLinkToken();

  if (liveToken) {
    // Same token, same expiry — only record that we sent it again.
    await sql`
      UPDATE service_providers
      SET account_link_sent_at = NOW(), updated_at = NOW()
      WHERE id = ${Number(p.id)}
    `;
  } else {
    await sql`
      UPDATE service_providers
      SET account_link_token = ${token},
          account_link_sent_at = NOW(),
          account_link_expires_at = NOW() + (${LINK_TOKEN_TTL_DAYS} * INTERVAL '1 day'),
          updated_at = NOW()
      WHERE id = ${Number(p.id)}
    `;
  }

  return {
    ok: true,
    target: {
      providerId: Number(p.id),
      businessName: String(p.business_name),
      slug: String(p.slug),
      email,
      token,
    },
  };
}

export type LinkLookup =
  | { state: 'ok'; providerId: number; businessName: string; slug: string; email: string }
  | { state: 'not_found' }
  | { state: 'expired'; businessName: string }
  | { state: 'already_linked'; businessName: string; slug: string };

/** Read-only view for the link page, so it can explain itself rather than 404. */
export async function lookupAccountLink(sql: Sql, token: string): Promise<LinkLookup> {
  if (!token) return { state: 'not_found' };
  const [p] = await sql`
    SELECT id, business_name, slug, email, clerk_user_id,
           account_link_expires_at,
           (account_link_expires_at IS NOT NULL AND account_link_expires_at < NOW()) AS expired
    FROM service_providers
    WHERE account_link_token = ${token}
    LIMIT 1
  `;
  if (!p) return { state: 'not_found' };
  if (p.clerk_user_id) {
    return { state: 'already_linked', businessName: String(p.business_name), slug: String(p.slug) };
  }
  if (p.expired) return { state: 'expired', businessName: String(p.business_name) };
  return {
    state: 'ok',
    providerId: Number(p.id),
    businessName: String(p.business_name),
    slug: String(p.slug),
    email: typeof p.email === 'string' ? p.email : '',
  };
}

export type ConsumeResult =
  | { ok: true; providerId: number; businessName: string; slug: string; email: string }
  | { ok: false; reason: 'not_found' | 'expired' | 'already_linked' | 'user_has_listing' };

/**
 * Redeem the token for a signed-in Clerk user. This is the one and only place
 * in the codebase that sets `clerk_user_id` on an existing row.
 *
 * The final UPDATE re-checks every precondition in its WHERE clause rather than
 * trusting the SELECT above it, so two tabs redeeming the same token at the
 * same moment cannot both succeed.
 */
export async function consumeAccountLink(sql: Sql, token: string, clerkUserId: string): Promise<ConsumeResult> {
  if (!token || !clerkUserId) return { ok: false, reason: 'not_found' };

  const found = await lookupAccountLink(sql, token);
  if (found.state === 'not_found') return { ok: false, reason: 'not_found' };
  if (found.state === 'expired') return { ok: false, reason: 'expired' };
  if (found.state === 'already_linked') return { ok: false, reason: 'already_linked' };

  // One listing per account: the dashboard resolves a single provider for a
  // user, so a second would be invisible and confusing rather than useful.
  const [existing] = await sql`
    SELECT id FROM service_providers WHERE clerk_user_id = ${clerkUserId} LIMIT 1
  `;
  if (existing && Number(existing.id) !== found.providerId) {
    return { ok: false, reason: 'user_has_listing' };
  }

  const updated = await sql`
    UPDATE service_providers
    SET clerk_user_id = ${clerkUserId},
        account_linked_at = NOW(),
        account_link_token = NULL,
        account_link_expires_at = NULL,
        updated_at = NOW()
    WHERE account_link_token = ${token}
      AND clerk_user_id IS NULL
      AND (account_link_expires_at IS NULL OR account_link_expires_at > NOW())
    RETURNING id, business_name, slug, email
  `;
  const row = updated[0];
  if (!row) return { ok: false, reason: 'already_linked' };

  return {
    ok: true,
    providerId: Number(row.id),
    businessName: String(row.business_name),
    slug: String(row.slug),
    email: typeof row.email === 'string' ? row.email : '',
  };
}
