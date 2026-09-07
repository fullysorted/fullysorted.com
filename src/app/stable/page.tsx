import Link from 'next/link';
import type { Metadata } from 'next';
import { resolveCurrentUser } from '@/lib/identity';
import { listVehicles } from '@/lib/stable/vehicles';
import { StableIntake } from './StableIntake';

export const metadata: Metadata = {
  title: 'The Stable',
  description: 'Your cars, and the record of what has been done to them.',
  robots: { index: false },
};
export const dynamic = 'force-dynamic';

/**
 * /stable -- deliberately PUBLIC.
 *
 * A signed-out visitor gets the whole payoff: identify the car, see its
 * research page, see who works on that marque. The account is offered at the
 * end as the way to KEEP it, which is the settled rule: value first, account
 * second. Protecting this route would put the wall back.
 *
 * Nothing another member owns is ever visible here. Every query is filtered by
 * the signed-in member's id inside lib/stable/vehicles.ts.
 */
export default async function StablePage() {
  const user = await resolveCurrentUser();
  const vehicles = user ? await listVehicles(user.id) : [];

  return (
    <div style={{ backgroundColor: '#faf9f7' }} className="min-h-screen py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground mb-1">
          The Stable
        </h1>
        <p className="text-sm text-text-secondary mb-8">
          Your cars, and the record of what has been done to them. Private unless you
          say otherwise.
        </p>

        <section className="rounded-2xl border border-border bg-white p-6 sm:p-7 mb-6">
          <StableIntake />
        </section>

        {vehicles.length > 0 && (
          <section className="rounded-2xl border border-border bg-white p-6 sm:p-7">
            <h2 className="font-display text-lg font-semibold tracking-tight text-foreground mb-4">
              {vehicles.length === 1 ? 'Your car' : `Your cars (${vehicles.length})`}
            </h2>
            <ul className="divide-y divide-border">
              {vehicles.map((v) => {
                const title =
                  v.nickname ||
                  [v.year, v.make, v.model].filter(Boolean).join(' ') ||
                  'Untitled car';
                return (
                  <li key={v.id} className="py-4">
                    <p className="font-medium text-foreground">{title}</p>
                    <p className="text-xs text-text-secondary mt-1">
                      {v.visibility === 'private' ? 'Private' : 'Public'}
                      {v.vin ? ` · ${v.vin}` : ''}
                      {v.chassisId ? ' · in the chassis register' : ''}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                      {v.modelSlug && (
                        <Link
                          href={`/research/${v.modelSlug}`}
                          className="text-sm text-accent hover:underline"
                        >
                          History for this model
                        </Link>
                      )}
                      {v.make && (
                        <Link
                          href={`/services?q=${encodeURIComponent(v.make)}`}
                          className="text-sm text-accent hover:underline"
                        >
                          Find someone to work on it
                        </Link>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        )}

        {user && vehicles.length === 0 && (
          <p className="text-sm text-text-secondary">
            Nothing in your Stable yet. Put a car in above and this becomes the place
            its record lives.
          </p>
        )}
      </div>
    </div>
  );
}
