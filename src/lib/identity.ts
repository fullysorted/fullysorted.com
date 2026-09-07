/**
 * THE IDENTITY SPINE.
 *
 * ── What this replaces ────────────────────────────────────────────────────
 * Until 2026-09-06 Fully Sorted had two identity systems that had never been
 * introduced to each other:
 *
 *   • `users` -- serial id, unique email, role. Referenced by
 *     listings.seller_id, saved_listings.user_id and comments.user_id, and
 *     written by absolutely nothing. Those three features were dead wiring.
 *   • `clerk_user_id` -- a loose varchar on service_providers and gig_orders.
 *     This was the real signed-in identity, and it joined to nothing.
 *
 * Meanwhile eight tables stored a bare email string for the same human.
 *
 * This module makes `users` the single spine, keyed on EMAIL, and demotes
 * Clerk from "the identity" to "an attribute of a user".
 *
 * ── Shadow accounts ───────────────────────────────────────────────────────
 * `getOrCreateUserByEmail` is called the moment an address touches the site.
 * It creates a row with status 'shadow': no signup, no password, no email
 * sent, no UI. A filing cabinet, not an account.
 *
 * When that person later signs in with the same address, `resolveCurrentUser`
 * claims the row and everything they already did becomes theirs retroactively
 * -- their listing, their enquiries, their reviews, their cars.
 *
 * That is what lets the account be the SAVE button rather than the turnstile.
 * Value first, account second, and nothing is lost in between.
 *
 * ── The one rule that must never be broken ────────────────────────────────
 * A SHADOW ROW IS NOT PERMISSION TO EMAIL SOMEBODY.
 * Consent lives where it always did: the form the person actually filled in,
 * plus outreach_suppression. Never derive a send from the existence of a row
 * in `users`. If you are writing a query that selects emails out of this table
 * in order to mail them, stop.
 *
 * ── Why raw SQL and not Drizzle ───────────────────────────────────────────
 * Deliberate. Drizzle names every mapped column in the SQL it emits, so a
 * schema.ts column the database lacks breaks every read of the table (the
 * 2026-08-22 outage). Naming columns explicitly here means a missed migration
 * degrades identity only, instead of taking `users` down wholesale.
 */

import { neon } from '@neondatabase/serverless';

export type IdentityUser = {
  id: number;
  email: string;
  name: string | null;
  avatarUrl: string | null;
  role: string;
  status: string;
  handle: string | null;
  clerkUserId: string | null;
};

function db() {
  if (!process.env.DATABASE_URL) return null;
  return neon(process.env.DATABASE_URL);
}

function row(r: Record<string, unknown> | undefined): IdentityUser | null {
  if (!r) return null;
  return {
    id: Number(r.id),
    email: String(r.email),
    name: (r.name as string) ?? null,
    avatarUrl: (r.avatar_url as string) ?? null,
    role: String(r.role ?? 'user'),
    status: String(r.status ?? 'shadow'),
    handle: (r.handle as string) ?? null,
    clerkUserId: (r.clerk_user_id as string) ?? null,
  };
}

/**
 * The join key. Lowercased and trimmed, always, on every read and every write.
 * Get this wrong once and the spine splits: "Chris@X.com" and "chris@x.com"
 * become two people who each own half of their own history.
 *
 * Returns null for anything that is not plausibly an address, so a typo in a
 * form never creates a junk row.
 */
export function normalizeEmail(raw: string | null | undefined): string | null {
  if (!raw) return null;
  const e = String(raw).trim().toLowerCase();
  if (e.length < 5 || e.length > 255) return null;
  // Deliberately loose. This is a filing decision, not validation: the form
  // that collected the address is where a human gets told they mistyped it.
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) return null;
  return e;
}

/**
 * Find or create the user row for an address. Idempotent and safe to call on
 * every write path, including hot ones.
 *
 * ON CONFLICT DO UPDATE rather than DO NOTHING because DO NOTHING returns no
 * row on conflict, which would turn every repeat visitor into a null.
 *
 * `name` only ever FILLS A BLANK. A person who told us their name once should
 * not have it overwritten by whatever they typed into a later form, and a
 * signed-in member's own profile must never be clobbered by a lead form.
 */
export async function getOrCreateUserByEmail(input: {
  email: string | null | undefined;
  name?: string | null;
}): Promise<IdentityUser | null> {
  const sql = db();
  const email = normalizeEmail(input.email);
  if (!sql || !email) return null;

  const name = input.name?.trim() || null;

  try {
    const rows = (await sql`
      INSERT INTO users (email, name, status)
      VALUES (${email}, ${name}, 'shadow')
      ON CONFLICT (email) DO UPDATE
        SET name = COALESCE(users.name, EXCLUDED.name),
            updated_at = NOW()
      RETURNING id, email, name, avatar_url, role, status, handle, clerk_user_id
    `) as Record<string, unknown>[];
    return row(rows[0]);
  } catch (err) {
    // Identity is additive. A failure here must never take down the thing the
    // person was actually trying to do -- send an enquiry, leave a review.
    console.error('[identity] getOrCreateUserByEmail failed:', err);
    return null;
  }
}

export async function getUserByEmail(
  rawEmail: string | null | undefined,
): Promise<IdentityUser | null> {
  const sql = db();
  const email = normalizeEmail(rawEmail);
  if (!sql || !email) return null;
  try {
    const rows = (await sql`
      SELECT id, email, name, avatar_url, role, status, handle, clerk_user_id
      FROM users WHERE LOWER(email) = ${email} LIMIT 1
    `) as Record<string, unknown>[];
    return row(rows[0]);
  } catch (err) {
    console.error('[identity] getUserByEmail failed:', err);
    return null;
  }
}

export async function getUserByClerkId(
  clerkUserId: string,
): Promise<IdentityUser | null> {
  const sql = db();
  if (!sql || !clerkUserId) return null;
  try {
    const rows = (await sql`
      SELECT id, email, name, avatar_url, role, status, handle, clerk_user_id
      FROM users WHERE clerk_user_id = ${clerkUserId} LIMIT 1
    `) as Record<string, unknown>[];
    return row(rows[0]);
  } catch (err) {
    console.error('[identity] getUserByClerkId failed:', err);
    return null;
  }
}

/**
 * Bind a Clerk account to a user row -- the moment a shadow row becomes an
 * account and its owner inherits everything already filed under that address.
 *
 * Rules, and each one exists for a reason:
 *
 *  1. clerk_user_id wins over email. A member who changes their address in
 *     Clerk is still the same member; we follow the account, not the string.
 *  2. A row already bound to a DIFFERENT Clerk account is never re-bound.
 *     Two people share an inbox more often than you would like. Re-binding
 *     would hand one of them the other's garage.
 *  3. No automatic merging, ever. If a human ends up with two rows, that is
 *     resolved by a token sent to both addresses, not by a heuristic here.
 */
export async function claimUserForClerk(input: {
  clerkUserId: string;
  email: string | null | undefined;
  name?: string | null;
  avatarUrl?: string | null;
}): Promise<IdentityUser | null> {
  const sql = db();
  if (!sql || !input.clerkUserId) return null;

  // 1. Already bound? That row is the answer, whatever the session email says.
  const existing = await getUserByClerkId(input.clerkUserId);
  if (existing) {
    await touch(existing.id);
    // Keep the spine's email in step with the account. Without this, a member
    // who changes their address in Clerk leaves their OLD address sitting in
    // users.email, and the next person to sign up with that freed-up address
    // collides with a row they cannot claim and cannot escape. Skipped
    // silently if the new address is already taken -- rule 3, no auto-merging.
    const wanted = normalizeEmail(input.email);
    if (wanted && wanted !== existing.email) {
      try {
        await sql`
          UPDATE users SET email = ${wanted}, updated_at = NOW()
           WHERE id = ${existing.id}
             AND NOT EXISTS (SELECT 1 FROM users WHERE LOWER(email) = ${wanted})
        `;
      } catch (err) {
        console.error('[identity] email sync skipped:', err);
      }
    }
    return existing;
  }

  // 2. Otherwise find or file the address, then bind it.
  const base = await getOrCreateUserByEmail({
    email: input.email,
    name: input.name,
  });
  if (!base) return null;

  if (base.clerkUserId && base.clerkUserId !== input.clerkUserId) {
    // Rule 2. Somebody else already owns this address. Do not touch it.
    console.warn(
      `[identity] refusing to re-bind user ${base.id}: already claimed by another account`,
    );
    return null;
  }

  try {
    const rows = (await sql`
      UPDATE users
         SET clerk_user_id = ${input.clerkUserId},
             -- A suspended row stays suspended. Signing in is not a way to
             -- undo a ban.
             status        = CASE WHEN status = 'suspended' THEN 'suspended' ELSE 'active' END,
             -- Clerk's copy WINS here, and that is deliberate. A shadow row's
             -- name came from an unauthenticated form: anyone can POST an
             -- enquiry as someone else's address with any name they like, and
             -- COALESCE would have made that stick forever. The signed-in
             -- account is the verified source, so it overwrites.
             avatar_url    = COALESCE(${input.avatarUrl ?? null}, avatar_url),
             name          = COALESCE(${input.name?.trim() || null}, name),
             last_seen_at  = NOW(),
             updated_at    = NOW()
       WHERE id = ${base.id}
         AND clerk_user_id IS NULL
      RETURNING id, email, name, avatar_url, role, status, handle, clerk_user_id
    `) as Record<string, unknown>[];
    // Lost a race with a concurrent request? Re-read rather than guess.
    return row(rows[0]) ?? (await getUserByClerkId(input.clerkUserId));
  } catch (err) {
    console.error('[identity] claimUserForClerk failed:', err);
    return null;
  }
}

/** Cheap presence signal. Written at most once a day per member. */
async function touch(userId: number): Promise<void> {
  const sql = db();
  if (!sql) return;
  try {
    await sql`
      UPDATE users SET last_seen_at = NOW()
       WHERE id = ${userId}
         AND (last_seen_at IS NULL OR last_seen_at < NOW() - INTERVAL '1 day')
    `;
  } catch {
    // Presence is decoration. Never let it fail a request.
  }
}

/**
 * The signed-in member, or null. Self-healing: if the Clerk session has no
 * user row yet -- a member who signed up before this existed, or whose webhook
 * never fired -- it creates and claims one on the spot. There is deliberately
 * no separate webhook to configure, forget, and discover was broken in March.
 *
 * Safe everywhere: returns null when Clerk is not configured, when there is no
 * request context (build time), and when anything at all goes wrong.
 */
export async function resolveCurrentUser(): Promise<IdentityUser | null> {
  const clerkEnabled = !!(
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && process.env.CLERK_SECRET_KEY
  );
  if (!clerkEnabled || !process.env.DATABASE_URL) return null;

  try {
    const { auth, currentUser } = await import('@clerk/nextjs/server');
    const { userId } = await auth();
    if (!userId) return null;

    // Fast path: already bound, no call to Clerk's API needed.
    const known = await getUserByClerkId(userId);
    if (known) {
      if (known.status === 'suspended') return null;
      await touch(known.id);
      return known;
    }

    // Slow path, once per member ever: fetch the profile and claim.
    const cu = await currentUser();
    if (!cu) return null;

    // ONLY the primary address, and ONLY if Clerk says it is verified.
    //
    // This is the security boundary of the whole shadow-account design. A
    // shadow row holds everything an address has ever done on the site: its
    // enquiries, the phone number and car brief attached to them, its reviews,
    // its registry submissions. Claiming one on an UNVERIFIED address would
    // mean anyone who can type victim@example.com into a signup form inherits
    // all of it.
    //
    // So there is no fallback to emailAddresses[0]: an unverified address that
    // happens to sort first is exactly the attack. An unverified session simply
    // has no user row until the address is confirmed, which costs that person
    // nothing except a verification click.
    const primary = cu.emailAddresses?.find(
      (e) => e.id === cu.primaryEmailAddressId,
    );
    if (!primary || primary.verification?.status !== 'verified') {
      return null;
    }

    const name =
      [cu.firstName, cu.lastName].filter(Boolean).join(' ').trim() || null;

    return await claimUserForClerk({
      clerkUserId: userId,
      email: primary.emailAddress,
      name,
      avatarUrl: cu.imageUrl ?? null,
    });
  } catch (err) {
    console.error('[identity] resolveCurrentUser failed:', err);
    return null;
  }
}

/** Staff check. Role on a person, not a shared password in an env var. */
export function isStaff(user: IdentityUser | null): boolean {
  return !!user && (user.role === 'admin' || user.role === 'chris');
}

export function isRep(user: IdentityUser | null): boolean {
  return !!user && (user.role === 'rep' || isStaff(user));
}
