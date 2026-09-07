import Link from 'next/link';
import type { Metadata } from 'next';
import { resolveCurrentUser } from '@/lib/identity';

export const metadata: Metadata = { title: 'Your account', robots: { index: false } };
export const dynamic = 'force-dynamic';

/**
 * /account -- the ONE member surface.
 *
 * Before this page existed, the header's "Dashboard" link sent every signed-in
 * person to /dashboard/provider, which opens by asking them to list a service.
 * That assumed every human with an account is a shop. Most of them are car
 * owners, and being asked to advertise a business you do not run is a strange
 * way to be welcomed.
 *
 * So this page leads with the car and mentions the shop last. It shows only
 * what is true: cars actually attributed to this member, enquiries they
 * actually sent, and a shop panel only when a provider row is actually linked
 * to their account.
 */

type Row = Record<string, unknown>;

async function load(userId: number, clerkUserId: string | null) {
  if (!process.env.DATABASE_URL) return { cars: [], enquiries: [], provider: null };
  const { neon } = await import('@neondatabase/serverless');
  const sql = neon(process.env.DATABASE_URL);

  // Each query is independent and failure-tolerant. A member with a broken
  // panel should still see the rest of their account.
  const safe = async (fn: () => Promise<Row[]>) => {
    try { return await fn(); } catch (e) { console.error('[account]', e); return []; }
  };

  const [cars, enquiries, providerRows] = await Promise.all([
    safe(() => sql`
      SELECT id, slug, year, make, model, price, status, hero_photo, created_at
      FROM listings WHERE seller_id = ${userId}
      ORDER BY created_at DESC LIMIT 24
    ` as Promise<Row[]>),
    safe(() => sql`
      SELECT id, listing_title, listing_slug, type, created_at
      FROM messages WHERE user_id = ${userId}
      ORDER BY created_at DESC LIMIT 10
    ` as Promise<Row[]>),
    clerkUserId
      ? safe(() => sql`
          SELECT slug, business_name FROM service_providers
          WHERE clerk_user_id = ${clerkUserId} LIMIT 1
        ` as Promise<Row[]>)
      : Promise.resolve([] as Row[]),
  ]);

  return { cars, enquiries, provider: providerRows[0] ?? null };
}

function Panel({ title, action, children }: {
  title: string;
  action?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-border bg-white p-6 sm:p-7 mb-6">
      <div className="flex items-baseline justify-between gap-4 mb-4">
        <h2 className="font-display text-lg font-semibold tracking-tight text-foreground">{title}</h2>
        {action}
      </div>
      {children}
    </section>
  );
}

export default async function AccountPage() {
  const user = await resolveCurrentUser();

  if (!user) {
    // Middleware protects /account, so this is the "signed in but we could not
    // reach the database" case. Say that, rather than pretending to be empty.
    return (
      <div style={{ backgroundColor: '#faf9f7' }} className="min-h-screen py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground mb-2">
            Your account
          </h1>
          <p className="text-sm text-text-secondary">
            We could not load your account just now. Refresh in a moment, and if it keeps
            happening tell us at{' '}
            <a className="text-accent underline" href="mailto:chris@fullysorted.com">
              chris@fullysorted.com
            </a>.
          </p>
        </div>
      </div>
    );
  }

  const { cars, enquiries, provider } = await load(user.id, user.clerkUserId);
  const firstName = user.name?.split(' ')[0];

  return (
    <div style={{ backgroundColor: '#faf9f7' }} className="min-h-screen py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground mb-1">
          {firstName ? `Hello, ${firstName}` : 'Your account'}
        </h1>
        <p className="text-sm text-text-secondary mb-8">{user.email}</p>

        {/* ── The cars. Always first. ─────────────────────────────────────── */}
        <Panel
          title="Your cars"
          action={
            cars.length > 0 ? (
              <Link href="/sell" className="text-sm font-medium text-accent hover:underline">
                Add another
              </Link>
            ) : null
          }
        >
          {cars.length === 0 ? (
            <div>
              <p className="text-sm text-text-secondary mb-4">
                Nothing here yet. Add a car and this becomes the place its record lives:
                what it is, what has been done to it, and who did the work.
              </p>
              <Link
                href="/sell"
                className="inline-block px-4 py-2.5 text-sm font-medium rounded-lg bg-accent text-white hover:opacity-90 transition-opacity"
              >
                Add a car
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-border">
              {cars.map((c) => (
                <li key={String(c.id)} className="py-3 flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <Link
                      href={`/listings/${String(c.slug)}`}
                      className="font-medium text-foreground hover:text-accent truncate block"
                    >
                      {String(c.year)} {String(c.make)} {String(c.model)}
                    </Link>
                    <p className="text-xs text-text-secondary mt-0.5 capitalize">
                      {String(c.status)}
                      {c.price ? ` · $${Number(c.price).toLocaleString()}` : ''}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </Panel>

        {/* ── Enquiries they sent ─────────────────────────────────────────── */}
        {enquiries.length > 0 && (
          <Panel title="Your enquiries">
            <ul className="divide-y divide-border">
              {enquiries.map((m) => (
                <li key={String(m.id)} className="py-3">
                  <p className="text-sm text-foreground">
                    {m.listing_title ? String(m.listing_title) : 'Enquiry'}
                  </p>
                  <p className="text-xs text-text-secondary mt-0.5">
                    {m.created_at ? new Date(String(m.created_at)).toLocaleDateString() : ''}
                  </p>
                </li>
              ))}
            </ul>
          </Panel>
        )}

        {/* ── Service bookings live on their own page already ─────────────── */}
        <Panel
          title="Service bookings"
          action={
            <Link href="/orders" className="text-sm font-medium text-accent hover:underline">
              Open
            </Link>
          }
        >
          <p className="text-sm text-text-secondary">
            Anything you have booked or requested from a shop.
          </p>
        </Panel>

        {/* ── The shop panel. Only when there actually is one. ────────────── */}
        {provider ? (
          <Panel
            title="Your shop"
            action={
              <Link
                href="/dashboard/provider"
                className="text-sm font-medium text-accent hover:underline"
              >
                Manage
              </Link>
            }
          >
            <p className="text-sm text-text-secondary">
              {String(provider.business_name)} is listed in the directory.{' '}
              <Link href={`/services/${String(provider.slug)}`} className="text-accent hover:underline">
                View your public profile
              </Link>
              .
            </p>
          </Panel>
        ) : (
          // Last, quiet, and phrased as a question rather than an instruction.
          // This is the line the old dashboard opened with.
          <p className="text-sm text-text-secondary mt-8">
            Work on cars for a living?{' '}
            <Link href="/services/apply" className="text-accent hover:underline">
              List your business
            </Link>
            .
          </p>
        )}
      </div>
    </div>
  );
}
