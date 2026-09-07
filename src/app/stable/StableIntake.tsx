'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth, SignInButton } from '@clerk/nextjs';

/**
 * "What have you got?"
 *
 * One field. A VIN or plain text, never both required. The payoff arrives
 * before anything is asked for: the car, its research page, and specialists
 * for the marque. Only then does anything mention keeping it.
 *
 * A signed-out visitor who identifies a car has it held in sessionStorage, so
 * signing in does not throw the car away and make them type it twice. That is
 * the difference between the account being a save button and being a wall.
 */

type ModelPage = {
  slug: string;
  make: string;
  model: string;
  generation: string | null;
  yearStart: number | null;
  yearEnd: number | null;
};

type Specialist = {
  slug: string;
  businessName: string;
  category: string | null;
  location: string | null;
};

type Identified = {
  car: { year: number | null; make: string | null; model: string | null; trim: string | null; vin: string | null };
  vinNote: string | null;
  modelPage: ModelPage | null;
  /** Several generations fit and nothing in the input separated them. */
  modelAlternatives?: ModelPage[];
  specialists: Specialist[];
};

const PENDING_KEY = 'fs_pending_car';

export function StableIntake() {
  const router = useRouter();
  const { isSignedIn, isLoaded } = useAuth();
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Identified | null>(null);
  const [chosen, setChosen] = useState<ModelPage | null>(null);
  const [saved, setSaved] = useState(false);

  // Pick the car back up after a sign-in round trip.
  useEffect(() => {
    try {
      const held = sessionStorage.getItem(PENDING_KEY);
      if (held) setResult(JSON.parse(held) as Identified);
    } catch {
      // Private browsing, or storage disabled. Nothing is lost that matters.
    }
  }, []);

  async function identify(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    setBusy(true);
    setError(null);
    setSaved(false);
    try {
      const res = await fetch('/api/stable/identify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Could not look that up.');
      setResult(data as Identified);
      try { sessionStorage.setItem(PENDING_KEY, JSON.stringify(data)); } catch {}
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not look that up.');
    } finally {
      setBusy(false);
    }
  }

  async function save() {
    if (!result) return;
    setBusy(true);
    setError(null);
    try {
      const res = await fetch('/api/stable/vehicles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...result.car,
          // Whichever generation he picked, or the one we were sure of.
          modelSlug: (chosen ?? result.modelPage)?.slug ?? null,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Could not save that.');
      try { sessionStorage.removeItem(PENDING_KEY); } catch {}
      setSaved(true);
      setInput('');
      // Re-render the server component above so the new car appears in the list.
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not save that.');
    } finally {
      setBusy(false);
    }
  }

  function startOver() {
    setResult(null);
    setChosen(null);
    setSaved(false);
    setInput('');
    try { sessionStorage.removeItem(PENDING_KEY); } catch {}
  }

  const car = result?.car;
  const title = car
    ? [car.year, car.make, car.model].filter(Boolean).join(' ') || 'Your car'
    : '';

  return (
    <div>
      {!result && (
        <form onSubmit={identify}>
          <label htmlFor="stable-input" className="block font-display text-lg font-semibold text-foreground mb-2">
            What have you got?
          </label>
          <p className="text-sm text-text-secondary mb-4">
            A VIN, or just tell us. &ldquo;1972 Datsun 240Z&rdquo; is plenty.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              id="stable-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="1972 Datsun 240Z"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder:text-text-secondary/60 focus:outline-none focus:ring-2 focus:ring-accent/40"
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              className="px-5 py-3 rounded-lg bg-accent text-white font-medium disabled:opacity-50 hover:opacity-90 transition-opacity"
            >
              {busy ? 'Looking…' : 'Look it up'}
            </button>
          </div>
        </form>
      )}

      {error && <p className="mt-4 text-sm text-red-700">{error}</p>}

      {result && (
        <div>
          <div className="flex items-baseline justify-between gap-4 mb-1">
            <h3 className="font-display text-xl font-semibold text-foreground">{title}</h3>
            <button onClick={startOver} className="text-sm text-text-secondary hover:text-foreground">
              Start over
            </button>
          </div>
          {car?.trim && <p className="text-sm text-text-secondary">{car.trim}</p>}
          {car?.vin && <p className="text-xs text-text-secondary mt-1 font-mono">{car.vin}</p>}
          {result.vinNote && (
            <p className="text-xs text-amber-700 mt-2">{result.vinNote}</p>
          )}

          {/* Beat one: his car's page. */}
          {result.modelPage && (
            <div className="mt-5 rounded-xl border border-border bg-white p-4">
              <p className="text-sm text-text-secondary mb-1">We have a history for this one.</p>
              <Link
                href={`/research/${result.modelPage.slug}`}
                className="font-medium text-accent hover:underline"
              >
                {result.modelPage.make} {result.modelPage.model}
                {result.modelPage.generation ? ` (${result.modelPage.generation})` : ''}
                {result.modelPage.yearStart
                  ? `, ${result.modelPage.yearStart}${result.modelPage.yearEnd ? `–${result.modelPage.yearEnd}` : ''}`
                  : ''}
              </Link>
            </div>
          )}

          {/* Several generations fit, and nothing he typed separated them.
              "1985 Porsche 911" is genuinely three different cars, so ask him
              instead of picking one and calling it his. */}
          {!result.modelPage && (result.modelAlternatives?.length ?? 0) > 0 && (
            <div className="mt-5 rounded-xl border border-border bg-white p-4">
              <p className="text-sm text-text-secondary mb-2">
                {chosen ? 'Filed as:' : 'A few of these fit. Which one is yours?'}
              </p>
              <div className="flex flex-wrap gap-2">
                {result.modelAlternatives!.map((m) => (
                  <button
                    key={m.slug}
                    type="button"
                    onClick={() => setChosen(chosen?.slug === m.slug ? null : m)}
                    className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
                      chosen?.slug === m.slug
                        ? 'border-accent bg-accent-light text-foreground'
                        : 'border-border text-accent hover:border-accent'
                    }`}
                    aria-pressed={chosen?.slug === m.slug}
                  >
                    {m.model}{m.generation ? ` (${m.generation})` : ''}
                  </button>
                ))}
              </div>
              {chosen && (
                <a
                  href={`/research/${chosen.slug}`}
                  className="inline-block mt-3 text-sm text-accent hover:underline"
                >
                  Read its history
                </a>
              )}
            </div>
          )}

          {/* Beat two: people who work on it. Rendered only when there are any. */}
          {result.specialists.length > 0 && (
            <div className="mt-4 rounded-xl border border-border bg-white p-4">
              <p className="text-sm text-text-secondary mb-2">
                Shops that work on {car?.make}:
              </p>
              <ul className="space-y-1">
                {result.specialists.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/services/${p.slug}`} className="text-sm text-accent hover:underline">
                      {p.businessName}
                    </Link>
                    {p.location && (
                      <span className="text-xs text-text-secondary"> · {p.location}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Beat three, and only now: keep it. */}
          <div className="mt-6">
            {saved ? (
              <p className="text-sm text-foreground">
                Saved. It is in your Stable.{' '}
                <button onClick={startOver} className="text-accent hover:underline">
                  Add another
                </button>
              </p>
            ) : !isLoaded ? null : isSignedIn ? (
              <button
                onClick={save}
                disabled={busy}
                className="px-5 py-3 rounded-lg bg-accent text-white font-medium disabled:opacity-50 hover:opacity-90 transition-opacity"
              >
                {busy ? 'Saving…' : 'Keep this in my Stable'}
              </button>
            ) : (
              <div>
                <SignInButton mode="modal">
                  <button className="px-5 py-3 rounded-lg bg-accent text-white font-medium hover:opacity-90 transition-opacity">
                    Keep this in my Stable
                  </button>
                </SignInButton>
                <p className="text-xs text-text-secondary mt-2">
                  Free, and the car is private unless you say otherwise. We will hold
                  it while you sign in.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
