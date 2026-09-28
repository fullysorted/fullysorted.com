'use client';

import { useState } from 'react';
import Link from 'next/link';

export interface EditableListing {
  id: number;
  slug: string;
  title: string;
  status: string;
  price: string;
  mileage: string;
  trim: string;
  transmission: string;
  engine: string;
  exteriorColor: string;
  interiorColor: string;
  city: string;
  state: string;
  zipCode: string;
  description: string;
  provenance: string;
}

const field =
  'w-full px-4 py-2.5 bg-white rounded-xl border border-stone-200 text-base sm:text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent';

export default function EditListingForm({ listing }: { listing: EditableListing }) {
  const [f, setF] = useState(listing);
  const [state, setState] = useState<'idle' | 'saving' | 'saved'>('idle');
  const [error, setError] = useState<string | null>(null);
  const set = (k: keyof EditableListing) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setF({ ...f, [k]: e.target.value });
    setState('idle');
  };

  const save = async (markSold = false) => {
    setState('saving');
    setError(null);
    try {
      const res = await fetch(`/api/account/listings/${listing.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...f, markSold }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) throw new Error(data.error || 'That did not save.');
      if (data.listing?.status) setF((prev) => ({ ...prev, status: String(data.listing.status) }));
      setState('saved');
    } catch (e) {
      setError(e instanceof Error ? e.message : 'That did not save.');
      setState('idle');
    }
  };

  const text = (k: keyof EditableListing, label: string, props: React.InputHTMLAttributes<HTMLInputElement> = {}) => (
    <label className="grid gap-1.5 text-sm font-medium text-stone-700">
      {label}
      <input value={String(f[k])} onChange={set(k)} className={field} {...props} />
    </label>
  );

  return (
    <form
      className="grid gap-5"
      onSubmit={(e) => {
        e.preventDefault();
        save();
      }}
    >
      <div className="grid sm:grid-cols-2 gap-4">
        {text('price', 'Price (USD)', { required: true, inputMode: 'numeric' })}
        {text('mileage', 'Mileage', { inputMode: 'numeric' })}
        {text('trim', 'Trim or variant')}
        {text('transmission', 'Transmission')}
        {text('engine', 'Engine')}
        {text('exteriorColor', 'Exterior color')}
        {text('interiorColor', 'Interior color')}
        {text('city', 'City')}
        {text('state', 'State')}
        {text('zipCode', 'ZIP code', { inputMode: 'numeric' })}
      </div>
      <label className="grid gap-1.5 text-sm font-medium text-stone-700">
        Description
        <textarea value={f.description} onChange={set('description')} rows={10} className={field} />
      </label>
      <label className="grid gap-1.5 text-sm font-medium text-stone-700">
        Provenance
        <textarea value={f.provenance} onChange={set('provenance')} rows={4} className={field} />
      </label>

      <div className="flex flex-wrap items-center gap-3">
        <button type="submit" disabled={state === 'saving'} className="h-11 px-6 rounded-xl text-sm font-bold text-white bg-accent hover:opacity-90 disabled:opacity-60">
          {state === 'saving' ? 'Saving...' : 'Save changes'}
        </button>
        <Link href={`/listings/${listing.slug}`} className="text-sm font-semibold underline underline-offset-4 text-stone-600">
          View listing
        </Link>
        {state === 'saved' && <span className="text-sm font-semibold text-stone-900">Saved.</span>}
      </div>
      {error && <p className="text-sm" style={{ color: '#9a3f2f' }}>{error}</p>}

      {f.status === 'active' && (
        <div className="pt-5 mt-2 border-t border-stone-200">
          <p className="text-sm text-stone-600 mb-2">Sold it? Mark it sold and it comes off the marketplace.</p>
          <button
            type="button"
            disabled={state === 'saving'}
            onClick={() => save(true)}
            className="h-10 px-5 rounded-xl text-sm font-semibold border border-stone-300 hover:border-stone-900"
          >
            Mark as sold
          </button>
        </div>
      )}
      {f.status === 'sold' && <p className="text-sm font-semibold text-stone-900">Marked sold.</p>}
    </form>
  );
}
