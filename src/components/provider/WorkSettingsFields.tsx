'use client';

import {
  WORK_SETTINGS,
  TEAM_SIZES,
  normalizeWorkSettings,
  type WorkSettingKey,
} from '@/lib/work-settings';

/**
 * The "where the work happens" control — ONE component, three surfaces.
 *
 * The public application, the provider's own dashboard and the /team console
 * all render this. That is deliberate: the last time this question had a
 * separate implementation per surface it was the business/freelancer fork, and
 * the copy drifted until the directory was making claims the form never asked
 * about. If the wording changes, it changes in one place.
 *
 * Presentational only — every caller owns its own state and its own save.
 *
 * VOICE: the labels always read as the provider's own words ("I travel to the
 * car"), on every surface. In the team console the panel above it says the rep
 * is writing down what the shop told them, so there is no second set of copy
 * to keep in step — which is the failure this component exists to prevent.
 */
export interface WorkSettingsValue {
  workSettings: WorkSettingKey[];
  teamSize: string;
  /** Kept as a string because it is bound to a text/number input. */
  serviceRadiusMiles: string;
}

export default function WorkSettingsFields({
  value,
  onChange,
  invalid = false,
  compact = false,
  idPrefix = 'ws',
}: {
  value: WorkSettingsValue;
  onChange: (next: WorkSettingsValue) => void;
  /** Highlight when a required answer is missing (the public form only). */
  invalid?: boolean;
  /** Denser layout for the team console, where this sits inside a row panel. */
  compact?: boolean;
  /** Unique per instance — the team console renders one panel per provider. */
  idPrefix?: string;
}) {
  const input = compact
    ? 'w-full px-2.5 py-1.5 text-sm bg-white border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent'
    : 'w-full px-3 py-2.5 bg-white border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent';

  const selected = normalizeWorkSettings(value.workSettings);

  const toggle = (key: WorkSettingKey) => {
    const next = selected.includes(key)
      ? selected.filter((k) => k !== key)
      : [...selected, key];
    onChange({
      ...value,
      workSettings: next,
      // Dropping "mobile" clears the radius rather than leaving an orphan
      // number that would still render "travels about 75 miles" on a profile
      // that no longer says it travels anywhere.
      serviceRadiusMiles: next.includes('mobile') ? value.serviceRadiusMiles : '',
    });
  };

  return (
    <div>
      <div
        className={`grid gap-3 ${compact ? 'sm:grid-cols-3' : 'sm:grid-cols-3'} ${
          invalid ? 'ring-2 ring-red-400 rounded-xl p-1' : ''
        }`}
      >
        {WORK_SETTINGS.map((w) => {
          const on = selected.includes(w.key);
          return (
            <button
              type="button"
              key={w.key}
              id={`${idPrefix}-${w.key}`}
              onClick={() => toggle(w.key)}
              aria-pressed={on}
              className={`text-left rounded-xl border-2 transition-all ${compact ? 'p-3' : 'p-4'} ${
                on ? 'border-accent bg-accent-light' : 'border-border bg-white hover:border-accent/50'
              }`}
            >
              <span className={`block font-semibold text-foreground mb-1 ${compact ? 'text-xs' : 'text-sm'}`}>
                {w.providerLabel}
              </span>
              <span className={`block text-text-secondary ${compact ? 'text-[11px] leading-snug' : 'text-xs'}`}>
                {w.providerHint}
              </span>
            </button>
          );
        })}
      </div>

      <div className={`mt-4 grid gap-4 sm:grid-cols-2`}>
        {selected.includes('mobile') && (
          <div>
            <label
              htmlFor={`${idPrefix}-radius`}
              className="block text-sm font-medium text-foreground mb-1.5"
            >
              How far do you travel? (miles)
            </label>
            <input
              id={`${idPrefix}-radius`}
              type="number"
              min={1}
              placeholder="75"
              value={value.serviceRadiusMiles}
              onChange={(e) => onChange({ ...value, serviceRadiusMiles: e.target.value })}
              className={input}
            />
            <p className="text-xs text-text-secondary mt-1.5">
              Optional. Shown as guidance on the profile, never used to hide anyone from a search.
            </p>
          </div>
        )}
        <div>
          <label htmlFor={`${idPrefix}-team`} className="block text-sm font-medium text-foreground mb-1.5">
            How many of you are there?
          </label>
          <select
            id={`${idPrefix}-team`}
            value={value.teamSize}
            onChange={(e) => onChange({ ...value, teamSize: e.target.value })}
            className={input}
          >
            <option value="">Not said</option>
            {TEAM_SIZES.map((t) => (
              <option key={t.key} value={t.key}>
                {t.providerLabel}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
