'use client';

import { useState } from 'react';
import { X, Plus, Check } from 'lucide-react';
import { COMMON_MARQUES, MARQUES_MAX, MARQUE_LEN_MAX, normalizeMarques } from '@/lib/marques';

/* ─── Marque tags ────────────────────────────────────────
   What this shop works on. Blank is a real, valid answer and the copy says so
   out loud — a generalist body shop should not feel nagged into inventing a
   list, and a shop that only touches air-cooled Porsche should be able to say
   exactly that.

   Quick picks plus free text, not a closed dropdown. A dropdown would be
   wrong within a week: the trade is full of shops whose whole business is one
   marque nobody thought to put in the array. */
export default function MarqueTags({
  value,
  onChange,
}: {
  value: string[];
  onChange: (next: string[]) => void;
}) {
  const [input, setInput] = useState('');
  const [showAll, setShowAll] = useState(false);

  const full = value.length >= MARQUES_MAX;
  const chosen = new Set(value.map((m) => m.toLowerCase()));
  const picks = showAll ? COMMON_MARQUES : COMMON_MARQUES.slice(0, 13);

  function add(tag: string) {
    const next = normalizeMarques([...value, tag]);
    if (next.length !== value.length) onChange(next);
    setInput('');
  }

  function toggle(tag: string) {
    if (chosen.has(tag.toLowerCase())) {
      onChange(value.filter((m) => m.toLowerCase() !== tag.toLowerCase()));
    } else if (!full) {
      add(tag);
    }
  }

  return (
    <div>
      {/* The state of the answer, stated plainly, before any input. A shop
          reading this should know in one line what its profile currently says
          about it. */}
      <div
        className="rounded-xl border p-4 mb-5 text-sm"
        style={{ borderColor: 'var(--border-light)', background: 'var(--bg-surface)' }}
      >
        {value.length === 0 ? (
          <>
            <p className="font-semibold text-foreground mb-1">Right now you work on anything.</p>
            <p className="text-text-secondary">
              Leave this blank and your profile says you take all marques, which is the right answer
              for plenty of shops. Add tags only if you want owners to know you specialize.
            </p>
          </>
        ) : (
          <>
            <p className="font-semibold text-foreground mb-1">
              Your profile says you work on {value.length === 1 ? 'one marque' : `${value.length} marques`}.
            </p>
            <p className="text-text-secondary">
              Owners of other cars can still find and contact you. This tells them where you are the
              specialist, it does not lock anyone out. Clear every tag to go back to working on anything.
            </p>
          </>
        )}
      </div>

      {value.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {value.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 bg-accent-light text-accent text-sm font-medium px-3 py-1.5 rounded-full border border-accent"
            >
              {tag}
              <button
                type="button"
                onClick={() => onChange(value.filter((m) => m !== tag))}
                aria-label={`Remove ${tag}`}
                className="ml-1 text-accent hover:text-accent-hover"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </span>
          ))}
          <button
            type="button"
            onClick={() => onChange([])}
            className="text-xs font-semibold text-text-tertiary hover:text-foreground underline underline-offset-2 px-2"
          >
            Clear all
          </button>
        </div>
      )}

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          maxLength={MARQUE_LEN_MAX}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              if (input.trim()) add(input);
            }
          }}
          disabled={full}
          placeholder="Add a marque, or anything specific like Air-cooled Porsche"
          className="flex-1 px-3 py-2.5 bg-white border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent disabled:bg-gray-50"
        />
        <button
          type="button"
          onClick={() => input.trim() && add(input)}
          disabled={full || !input.trim()}
          className="px-4 py-2.5 bg-surface hover:bg-surface text-foreground font-medium rounded-lg transition-colors disabled:opacity-50"
        >
          Add
        </button>
      </div>

      <p className="text-xs font-semibold text-text-tertiary mb-2 uppercase tracking-wider">Common ones</p>
      <div className="flex flex-wrap gap-1.5">
        {picks.map((tag) => {
          const on = chosen.has(tag.toLowerCase());
          return (
            <button
              key={tag}
              type="button"
              onClick={() => toggle(tag)}
              disabled={full && !on}
              aria-pressed={on}
              className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1.5 rounded-full border transition-colors disabled:opacity-40 ${
                on
                  ? 'bg-accent text-white border-accent'
                  : 'bg-white text-text-secondary border-border hover:border-accent hover:text-foreground'
              }`}
            >
              {on ? <Check className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
              {tag}
            </button>
          );
        })}
        {!showAll && COMMON_MARQUES.length > picks.length && (
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className="text-xs font-semibold text-accent hover:text-accent-hover px-2.5 py-1.5"
          >
            Show more
          </button>
        )}
      </div>

      <p className="text-[11px] text-text-tertiary mt-3">
        {full
          ? `That is the maximum of ${MARQUES_MAX}. Remove one to add another.`
          : `Up to ${MARQUES_MAX}. Free text is fine, so "Prewar American" or "Air-cooled Porsche" works as well as a make.`}
      </p>
    </div>
  );
}
