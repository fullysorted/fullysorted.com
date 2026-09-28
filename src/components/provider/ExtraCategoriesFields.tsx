'use client';

import { SERVICE_CATEGORIES, EXTRA_CATEGORIES_MAX } from '@/lib/service-categories';

/**
 * "Also offer": the categories a provider works in beyond the headline one.
 * The headline stays a single choice (it sets the card's label and tint); these
 * put the provider in more sections of the directory.
 */
export default function ExtraCategoriesFields({
  headline,
  value,
  onChange,
}: {
  headline: string;
  value: string[];
  onChange: (next: string[]) => void;
}) {
  const options = SERVICE_CATEGORIES.filter((c) => c.key !== headline);
  const selected = value.filter((k) => k !== headline);
  const full = selected.length >= EXTRA_CATEGORIES_MAX;

  return (
    <fieldset>
      <legend className="block text-sm font-medium text-foreground mb-1">Also offer</legend>
      <p className="text-xs text-text-secondary mb-3">
        Anything else you do. You will show up in each of these sections of the directory too.
      </p>
      <div className="flex flex-wrap gap-2">
        {options.map((c) => {
          const on = selected.includes(c.key);
          return (
            <button
              key={c.key}
              type="button"
              aria-pressed={on}
              disabled={!on && full}
              onClick={() => onChange(on ? selected.filter((k) => k !== c.key) : [...selected, c.key])}
              className={`px-3.5 py-1.5 rounded-full text-sm font-medium border transition-colors disabled:opacity-40 ${
                on ? 'bg-stone-900 text-white border-stone-900' : 'bg-white text-stone-700 border-stone-200 hover:border-stone-900'
              }`}
            >
              {c.longLabel}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
