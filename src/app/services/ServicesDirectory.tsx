'use client';

import { useState, useEffect, useMemo } from 'react';
import { formatBusinessName, formatLocation } from '@/lib/provider-format';
import { useSearchParams } from 'next/navigation';
import { MapPin, Star, Phone, Globe, Shield, Camera, Wrench, Truck, ClipboardCheck, Paintbrush, Hammer, Warehouse, Sparkles, AtSign, Loader2, ArrowRight, Store, Handshake, Armchair, FileText, Gavel } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import ContactLink from '@/components/provider/ContactLink';
import { ProviderBanner } from '@/components/providers/ProviderBanner';
import { ProviderMark } from '@/components/providers/ProviderMark';
import { SERVICE_CATEGORIES, TRADE_CATEGORIES, SALES_CATEGORIES, CATEGORY_TINTS } from '@/lib/service-categories';
import { priceRangeTitle, PRICE_RANGE_KEY } from '@/lib/price-range';
import { ratingDisplay } from '@/lib/reviews';
import { SmartSearch } from '@/components/search/SmartSearch';
import { parseSearchIntent, scoreProvider, type SearchModel } from '@/lib/search-intent';
import {
  WORK_SETTINGS,
  normalizeWorkSettings,
  workSettingLabels,
  type WorkSettingKey,
} from '@/lib/work-settings';

// ─── Service Categories ────────────────────────────────
// Order and labels come from the canonical list so the directory matches the
// homepage exactly. Inactive categories keep an icon so an existing provider
// row never renders without one.
const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  detailing: <Paintbrush className="w-5 h-5" />,
  inspection: <ClipboardCheck className="w-5 h-5" />,
  photography: <Camera className="w-5 h-5" />,
  mechanical: <Wrench className="w-5 h-5" />,
  transport: <Truck className="w-5 h-5" />,
  storage: <Warehouse className="w-5 h-5" />,
  restoration: <Hammer className="w-5 h-5" />,
  bodywork: <Shield className="w-5 h-5" />,
  upholstery: <Armchair className="w-5 h-5" />,
  titling: <FileText className="w-5 h-5" />,
  dealer: <Store className="w-5 h-5" />,
  consignment: <Handshake className="w-5 h-5" />,
  'auction-rep': <Gavel className="w-5 h-5" />,
};
const CATEGORIES = [
  { key: 'all', label: 'All Services', icon: <Sparkles className="w-5 h-5" /> },
  ...SERVICE_CATEGORIES.map((c) => ({
    key: c.key, label: c.label, icon: CATEGORY_ICONS[c.key],
  })),
];
// Two chip rows: the trades, then buying and selling. Same list, split by group.
const TRADE_CHIPS = CATEGORIES.filter((c) => c.key === 'all' || TRADE_CATEGORIES.some((t) => t.key === c.key));
const SALES_CHIPS = CATEGORIES.filter((c) => SALES_CATEGORIES.some((t) => t.key === c.key));

type CategoryKey = string;

const CATEGORY_TINT = CATEGORY_TINTS;
const DEFAULT_TINT = '#1E6091';

// ─── Provider Type ────────────────────────────────────
interface Provider {
  id: number;
  businessName: string;
  category: string;
  description: string;
  location: string;
  rating: string | number;
  reviewCount: number;
  phone: string | null;
  website: string | null;
  instagram: string | null;
  foundingProvider: boolean;
  // Where the work happens. Replaces providerType, which used to cut this
  // directory into "shops" and "freelancers" — see lib/work-settings.ts.
  workSettings?: string[] | null;
  /** Extra category keys beyond the headline one. A dealer with a workshop
      carries 'mechanical' here and appears in both sections. */
  serviceTypes?: string[] | null;
  teamSize?: string | null;
  serviceRadiusMiles?: number | null;
  specialties: string[];
  priceRange: string;
  slug: string;
  avatarUrl: string | null;
  logoUrl?: string | null;
  logoKind?: string | null;
  bannerFocus?: string | null;
}

// ─── Provider Card ────────────────────────────────────
function ProviderCard({ provider, section }: { provider: Provider; section?: string }) {
  const homeLabel = CATEGORIES.find((c) => c.key === provider.category)?.label ?? provider.category;
  // In the grouped view a shop can sit under a trade that is not its headline
  // one (a consignment house that also inspects). Say so on the card, or the
  // section heading and the card label contradict each other.
  const sectionLabel = section && section !== provider.category
    ? CATEGORIES.find((c) => c.key === section)?.label
    : undefined;
  const categoryLabel = sectionLabel ? `${homeLabel} · also ${sectionLabel.toLowerCase()}` : homeLabel;
  const name = formatBusinessName(provider.businessName);
  const rating = ratingDisplay(provider.rating, provider.reviewCount);
  const work = workSettingLabels(provider.workSettings);
  // 2026-10-02: compact card, built for a directory of hundreds rather than a
  // dozen. Shorter banner, two-line description, at most three specialties,
  // and one contact row. Everything else lives on the profile, which is where
  // the card sends people anyway.
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      whileHover={{ y: -2 }}
      className="group bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-[0_18px_40px_-18px_rgba(26,26,24,0.35)] transition-shadow flex flex-col"
    >
      {/* Banner: the shop's own wide photo, cropped around the point they
          tapped, with the mark overlapping its bottom edge. Both fall back to
          something deliberate, so a card never shows a hole. */}
      <Link href={`/services/${provider.slug}`} className="block relative" tabIndex={-1} aria-hidden>
        <ProviderBanner
          name={name}
          avatarUrl={provider.avatarUrl}
          category={provider.category}
          focus={provider.bannerFocus}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="h-24"
        />
        <div className="absolute left-4 -bottom-5">
          <ProviderMark
            name={name}
            category={provider.category}
            logoUrl={provider.logoUrl}
            logoKind={provider.logoKind}
            size={40}
            ring
          />
        </div>
      </Link>
      <p
        className="pl-[68px] pr-4 pt-1.5 text-[10px] uppercase truncate"
        style={{ fontFamily: "var(--font-jetbrains-mono), 'JetBrains Mono', Menlo, monospace", letterSpacing: '0.12em', color: '#1C8C87' }}
      >
        {categoryLabel}
      </p>
      <div className="px-4 pb-4 pt-3 flex flex-col flex-1">
        <div className="flex items-start gap-2 mb-1">
          <h3 className="text-base font-bold text-stone-900 leading-snug flex-1 min-w-0">
            <Link href={`/services/${provider.slug}`} className="transition-colors hover:text-accent focus-visible:underline">
              {name}
            </Link>
          </h3>
          {/* Earned by the review record, not an admin flag. Threshold lives
              in lib/reviews.ts so card, profile and JSON-LD agree. */}
          {rating.topRated && (
            <span className="shrink-0 inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 text-[11px] font-medium px-1.5 py-0.5 rounded-full">
              <Star className="w-3 h-3" aria-hidden /> Top-rated
            </span>
          )}
          {provider.foundingProvider && (
            <span
              className="shrink-0 inline-flex items-center gap-1 text-[11px] font-medium px-1.5 py-0.5 rounded-full"
              style={{ background: 'var(--accent-gold-light)', color: '#8A6E31' }}
              title="Founding provider"
            >
              <Sparkles className="w-3 h-3" aria-hidden /> Founding
            </span>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-stone-500 mb-2">
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3" /> {formatLocation(provider.location)}
          </span>
          {/* No average below the minimum-n threshold. */}
          {rating.show && (
            <>
              <span className="text-stone-300">·</span>
              <span className="flex items-center gap-1">
                <Star className="w-3 h-3 fill-gold text-gold" />
                {Number(provider.rating).toFixed(1)} ({provider.reviewCount})
              </span>
            </>
          )}
          {provider.priceRange && (
            <>
              <span className="text-stone-300">·</span>
              <span className="text-stone-600 font-medium" title={priceRangeTitle(provider.priceRange)}>{provider.priceRange}</span>
            </>
          )}
        </div>

        {/* Where the work happens: the provider's own answer, never inferred. */}
        {work.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-2">
            {work.map((label) => (
              <span
                key={label}
                className="text-[11px] font-medium px-1.5 py-0.5 rounded-full"
                style={{ background: 'var(--accent-light, #E8F0F8)', color: '#1E6091' }}
              >
                {label}
              </span>
            ))}
          </div>
        )}

        <p className="text-sm text-stone-600 line-clamp-2 mb-3">{provider.description}</p>

        {provider.specialties.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {provider.specialties.slice(0, 3).map((spec) => (
              <span key={spec} className="bg-stone-100 text-stone-600 text-[11px] font-medium px-2 py-0.5 rounded-full">
                {spec}
              </span>
            ))}
            {provider.specialties.length > 3 && (
              <span className="text-[11px] text-stone-400 px-1 py-0.5">+{provider.specialties.length - 3}</span>
            )}
          </div>
        )}

        {/* The profile comes first; phone and website are secondary, because
            sending someone straight off-site is the one thing a directory
            should not do. Taps are counted (ContactLink). */}
        <div className="mt-auto flex items-center gap-3 pt-3 border-t border-stone-100">
          <Link
            href={`/services/${provider.slug}`}
            className="inline-flex items-center gap-1 text-sm font-bold text-accent transition-transform hover:translate-x-0.5"
          >
            View profile <ArrowRight className="w-3.5 h-3.5" aria-hidden />
          </Link>
          <span className="flex-1" />
          {provider.phone && (
            <ContactLink
              providerId={provider.id}
              kind="phone"
              href={`tel:${provider.phone}`}
              className="p-1.5 rounded-lg text-stone-500 hover:text-accent hover:bg-stone-50 transition-colors"
            >
              <Phone className="w-4 h-4" aria-label={`Call ${name}`} />
            </ContactLink>
          )}
          {provider.website && (
            <ContactLink
              providerId={provider.id}
              kind="website"
              href={provider.website}
              newTab
              className="p-1.5 rounded-lg text-stone-500 hover:text-accent hover:bg-stone-50 transition-colors"
            >
              <Globe className="w-4 h-4" aria-label={`${name} website`} />
            </ContactLink>
          )}
          {provider.instagram && (
            <ContactLink
              providerId={provider.id}
              kind="instagram"
              href={`https://instagram.com/${provider.instagram.replace('@', '')}`}
              newTab
              className="p-1.5 rounded-lg text-stone-500 hover:text-accent hover:bg-stone-50 transition-colors"
            >
              <AtSign className="w-4 h-4" aria-label={`${name} on Instagram`} />
            </ContactLink>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/** Cards per page in a filtered view, and per trade in the grouped "All" view. Multiples of 3 fill the desktop grid. */
const RESULTS_PAGE = 24;
const SECTION_PREVIEW = 6;
const MOBILE_PREVIEW = 3;

// ─── The results grid ─────────────────────────────────
//
// This was two labelled bands, "Shops & businesses" and "Independent
// specialists", split on provider_type. It is one grid now. The split asked
// providers about their legal form and then made a promise on their behalf —
// the shops band was headed "specialists with a premises you can visit", under
// which sat a one-man mobile appraiser who travels nationwide, while the other
// band stood empty with a dashed placeholder. Where the work happens is a
// filter now, which is the honest shape: an owner narrows, we never assert.
function ResultsGrid({
  providers, count, emptyLine, request,
}: {
  providers: Provider[];
  count: number;
  emptyLine: string;
  /** What the owner was looking for. When set, the empty state asks for it instead of just apologising. */
  request?: string;
}) {
  // With hundreds of shops a filtered view can be long. Show a page at a time.
  const [limit, setLimit] = useState(RESULTS_PAGE);
  // A new filter starts back at the first page (state reset during render,
  // the React-recommended alternative to a setState effect).
  const [seenCount, setSeenCount] = useState(providers.length);
  if (seenCount !== providers.length) {
    setSeenCount(providers.length);
    setLimit(RESULTS_PAGE);
  }
  const visible = providers.slice(0, limit);
  return (
    <section className="mb-12">
      <p className="text-sm text-stone-500 mb-5">
        {count} {count === 1 ? 'specialist' : 'specialists'} listed
      </p>
      {providers.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((provider) => (
              <ProviderCard key={provider.id} provider={provider} />
            ))}
          </AnimatePresence>
        </div>
      ) : null}
      {providers.length > limit && (
        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={() => setLimit((l) => l + RESULTS_PAGE)}
            className="px-5 py-2.5 text-sm font-semibold rounded-xl border-2 border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white transition-colors"
          >
            Show more ({providers.length - limit} left)
          </button>
        </div>
      )}
      {providers.length === 0 && (
        <div className="rounded-2xl border border-dashed border-stone-300 bg-white/60 px-6 py-10 text-center">
          <p className="text-sm text-stone-500 max-w-md mx-auto">{emptyLine}</p>
          {request !== undefined && emptyLine !== '' && <RequestForm need={request} />}
        </div>
      )}
    </section>
  );
}

// ─── One trade, with its own heading and count ────────
// The "All" view used to be one long grid with every trade mixed together.
// It is grouped now: each trade gets a heading, a count, and a way to narrow
// to just that trade. Empty trades are left out here; the chips still list them.
function CategorySection({
  catKey, label, icon, providers, onOnly,
}: {
  catKey: string;
  label: string;
  icon: React.ReactNode;
  providers: Provider[];
  onOnly: (key: string) => void;
}) {
  return (
    <section id={`trade-${catKey}`} className="mb-12 scroll-mt-24">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-5 pb-3" style={{ borderBottom: '1px solid rgba(18,53,42,0.14)' }}>
        <h2 className="flex items-center gap-2.5 font-display font-semibold tracking-tight text-2xl text-stone-900">
          <span style={{ color: CATEGORY_TINT[catKey] ?? DEFAULT_TINT }} aria-hidden>{icon}</span>
          {label}
          <span className="text-base font-medium text-stone-400 tabular-nums">{providers.length}</span>
        </h2>
        <button
          type="button"
          onClick={() => onOnly(catKey)}
          className="text-sm font-semibold underline underline-offset-4 text-stone-500 hover:text-stone-900"
        >
          Show only {label.toLowerCase()}
        </button>
      </div>
      {/* One column on a phone, so the preview is three cards there and six
          on wider screens; the hidden three cost nothing to render. */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 [&>*:nth-child(n+4)]:hidden sm:[&>*:nth-child(n+4)]:flex">
        <AnimatePresence mode="popLayout">
          {providers.slice(0, SECTION_PREVIEW).map((provider) => (
            <ProviderCard key={`${catKey}-${provider.id}`} provider={provider} section={catKey} />
          ))}
        </AnimatePresence>
      </div>
      {/* At volume the "All" view is a preview per trade, not every shop in
          the country. The full list is one tap away. */}
      {providers.length > MOBILE_PREVIEW && (
        <button
          type="button"
          onClick={() => onOnly(catKey)}
          className={`mt-4 text-sm font-semibold text-accent underline underline-offset-4 ${providers.length > SECTION_PREVIEW ? '' : 'sm:hidden'}`}
        >
          See all {providers.length} in {label.toLowerCase()}
        </button>
      )}
    </section>
  );
}

// An empty result is a lead, not a dead end. The owner says what they need and
// where, it goes through /api/contact (the deliver() contract: success is only
// reported once it has reached us), and outreach knows who to go and find.
function RequestForm({ need }: { need: string }) {
  const [what, setWhat] = useState(need);
  const [where, setWhere] = useState('');
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'failed'>('idle');
  const [mailto, setMailto] = useState<string | null>(null);

  if (state === 'sent') {
    return <p className="mt-5 text-sm font-semibold text-stone-900">Got it. We will go and find someone, and email you when we have.</p>;
  }

  const field = 'w-full px-4 py-2.5 bg-white rounded-xl border border-stone-200 text-base sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent';
  return (
    <form
      className="mt-6 max-w-md mx-auto grid gap-2.5 text-left"
      onSubmit={async (e) => {
        e.preventDefault();
        setState('sending');
        try {
          const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: 'Directory request',
              email,
              subject: `Directory request: ${what.slice(0, 120)}`,
              message: `Looking for: ${what}\nWhere: ${where || 'not given'}`,
            }),
          });
          const data = await res.json().catch(() => ({}));
          if (res.ok && data.success) setState('sent');
          else {
            setMailto(typeof data.mailto === 'string' ? data.mailto : null);
            setState('failed');
          }
        } catch {
          setState('failed');
        }
      }}
    >
      <input required value={what} onChange={(e) => setWhat(e.target.value)} aria-label="What you need" placeholder="What you need, and for which car" className={field} />
      <div className="grid sm:grid-cols-2 gap-2.5">
        <input value={where} onChange={(e) => setWhere(e.target.value)} aria-label="City or ZIP code" placeholder="City or ZIP code" autoComplete="postal-code" className={field} />
        <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} aria-label="Your email" placeholder="Your email" autoComplete="email" className={field} />
      </div>
      <button type="submit" disabled={state === 'sending'} className="h-11 rounded-xl text-sm font-bold text-white bg-accent hover:opacity-90 disabled:opacity-60">
        {state === 'sending' ? 'Sending...' : 'Find me someone'}
      </button>
      <p className="text-xs text-center text-stone-500">
        Want more people looking?{' '}
        <Link href="/wanted/new" className="underline font-semibold">Put it on the wanted board</Link>.
      </p>
      {state === 'failed' && (
        <p className="text-sm text-center" style={{ color: '#9a3f2f' }}>
          That did not send.{' '}
          {mailto ? <a href={mailto} className="underline font-semibold">Email it to us instead</a> : 'Please try again in a moment.'}
        </p>
      )}
    </form>
  );
}

// ─── Main Directory Component ──────────────────────────
export default function ServicesDirectory({ models = [] }: { models?: SearchModel[] }) {
  // Initialize from URL params so homepage search + category chips deep-link
  // into a pre-filtered directory (/services?q=... or /services?type=...).
  const searchParams = useSearchParams();
  const initialType = searchParams.get('type');
  const initialQuery = searchParams.get('q') ?? '';
  // An explicit ?type= wins. Otherwise the words decide: "brake job on my 911"
  // opens the directory on Mechanics rather than on an empty phrase match.
  const validType = CATEGORIES.some((c) => c.key === initialType)
    ? (initialType as CategoryKey)
    : parseSearchIntent(initialQuery, models).category ?? 'all';

  const [activeCategory, setActiveCategory] = useState<CategoryKey>(validType);
  // Where the work happens. 'all' plus the three keys from lib/work-settings.
  // A provider who has not answered is never hidden by a filter they could not
  // have matched — see `matches` below.
  const [activeSetting, setActiveSetting] = useState<'all' | WorkSettingKey>('all');
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [providers, setProviders] = useState<Provider[]>([]);
  const [loading, setLoading] = useState(true);
  // An outage and an empty directory are NOT the same thing and must not look
  // the same. "No specialists yet" during a database failure reads as churn.
  const [loadFailed, setLoadFailed] = useState(false);

  // Fetch providers from API
  useEffect(() => {
    fetch('/api/providers')
      .then(async (res) => {
        const data = await res.json().catch(() => ({}));
        if (!res.ok || data.error) throw new Error(data.error || 'Request failed');
        setProviders(Array.isArray(data.providers) ? data.providers : []);
      })
      .catch(() => setLoadFailed(true))
      .finally(() => setLoading(false));
  }, []);

  const intent = useMemo(() => parseSearchIntent(searchQuery, models), [searchQuery, models]);

  const runSearch = (q: string) => {
    setSearchQuery(q);
    const next = parseSearchIntent(q, models);
    if (next.category) setActiveCategory(next.category);
    else if (q.trim() === '') setActiveCategory('all');
  };

  const inCategory = (p: Provider, key: string) =>
    p.category === key || (Array.isArray(p.serviceTypes) && p.serviceTypes.includes(key));

  // Everything except the trade chip. Chip counts come from this, so a number
  // on a chip is always what you get when you press it.
  const matchesOtherFilters = (p: Provider) => {
    // A provider with no work_settings answer has not said no — they have said
    // nothing, and most of the seeded rows predate the question entirely.
    // Hiding them from a filter would make the directory look emptier than it
    // is and punish the shops we onboarded by phone. They stay visible until
    // they tell us otherwise.
    const declared = normalizeWorkSettings(p.workSettings);
    const matchesSetting =
      activeSetting === 'all' || declared.length === 0 || declared.includes(activeSetting);
    // Once the words resolve to a trade, that trade is the filter and the
    // rest of the sentence only sets the order. Without a trade, a provider
    // has to match something: the make, a leftover word, or their name.
    const matchesSearch =
      searchQuery.trim() === '' || intent.category !== null || scoreProvider(p, intent) > 0;
    return matchesSetting && matchesSearch;
  };

  // Marque first, then everything else in the order the API sent it.
  const pool = providers
    .filter(matchesOtherFilters)
    .map((p, i) => ({ p, i, s: scoreProvider(p, intent) }))
    .sort((a, b) => b.s - a.s || a.i - b.i)
    .map((x) => x.p);
  const filtered = activeCategory === 'all' ? pool : pool.filter((p) => inCategory(p, activeCategory));
  const countFor = (key: string) => (key === 'all' ? pool.length : pool.filter((p) => inCategory(p, key)).length);
  const showCounts = !loading && !loadFailed;
  // A trade with nobody in it is hidden rather than shown with a 0. Counted
  // against every provider, not the filtered pool, so chips do not vanish
  // while someone types. Hidden only once the list has loaded.
  const hasAny = (key: string) =>
    key === 'all' || !showCounts || activeCategory === key || providers.some((p) => inCategory(p, key));
  const tradeSections = TRADE_CHIPS.filter((c) => c.key !== 'all')
    .map((c) => ({ ...c, list: pool.filter((p) => inCategory(p, c.key)) }))
    .filter((c) => c.list.length > 0);
  const salesSections = SALES_CHIPS
    .map((c) => ({ ...c, list: pool.filter((p) => inCategory(p, c.key)) }))
    .filter((c) => c.list.length > 0);
  const pickCategory = (key: string) => {
    setActiveCategory(key);
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Search */}
      <div className="mb-6">
        <SmartSearch key={searchQuery} models={models} initialQuery={searchQuery} buttonLabel="Search" onSearch={runSearch} />
      </div>

      {/* Say how the words were read, so a result list never feels arbitrary */}
      {searchQuery.trim() !== '' && (intent.category || intent.make) && (
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-6 text-sm text-stone-600">
          <span>
            Showing{' '}
            <strong className="text-stone-900">
              {intent.category ? CATEGORIES.find((c) => c.key === intent.category)?.label : 'all trades'}
            </strong>
            {intent.make && (
              <>
                , <strong className="text-stone-900">{intent.make}</strong> specialists first
              </>
            )}
            .
          </span>
          {(intent.model || intent.makeSlug) && (
            <Link
              href={intent.model ? `/research/models/${intent.model.slug}` : `/research/models/${intent.makeSlug}`}
              className="font-semibold underline underline-offset-4 text-accent"
            >
              {intent.model ? `Read the ${intent.model.make} ${intent.model.model} history` : `${intent.make} model histories`}
            </Link>
          )}
          <button type="button" onClick={() => runSearch('')} className="underline underline-offset-4 text-stone-500 hover:text-stone-900">
            Clear
          </button>
        </div>
      )}

      {/* Category Filter: the trades, then buying and selling */}
      <div className="flex flex-wrap gap-2 mb-3">
        {TRADE_CHIPS.filter((cat) => hasAny(cat.key)).map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat.key
                ? 'bg-accent text-white shadow-md'
                : 'bg-white text-stone-600 border border-stone-200 hover:bg-accent hover:border-accent hover:text-white'
            }`}
          >
            {cat.icon}
            {cat.label}
            {showCounts && (
              <span className={`tabular-nums text-xs ${activeCategory === cat.key ? 'text-white/75' : 'text-stone-400'}`}>
                {countFor(cat.key)}
              </span>
            )}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-2 mb-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-stone-400 mr-1">
          Buying and selling
        </span>
        {SALES_CHIPS.filter((cat) => hasAny(cat.key)).map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat.key
                ? 'bg-stone-900 text-white shadow-md'
                : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-900 hover:border-stone-900 hover:text-white'
            }`}
          >
            {cat.icon}
            {cat.label}
            {showCounts && (
              <span className={`tabular-nums text-xs ${activeCategory === cat.key ? 'text-white/75' : 'text-stone-400'}`}>
                {countFor(cat.key)}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Where the work happens. Deliberately a filter and not a heading: the
          directory no longer sorts providers into kinds on their behalf, it
          lets an owner narrow to the arrangement that suits their car. */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-stone-400 mr-1">
          Where the work happens
        </span>
        {([{ key: 'all' as const, label: 'Any' }, ...WORK_SETTINGS.map((w) => ({ key: w.key, label: w.ownerLabel }))]).map(
          (opt) => (
            <button
              key={opt.key}
              onClick={() => setActiveSetting(opt.key)}
              aria-pressed={activeSetting === opt.key}
              className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeSetting === opt.key
                  ? 'bg-stone-900 text-white'
                  : 'bg-white text-stone-600 border border-stone-200 hover:border-stone-900'
              }`}
            >
              {opt.label}
            </button>
          ),
        )}
      </div>

      {loading && (
        <p className="text-sm text-stone-500 mb-6 flex items-center gap-2">
          <Loader2 className="w-4 h-4 animate-spin" /> Loading providers...
        </p>
      )}

      {!loading && loadFailed && (
        <div className="rounded-2xl border p-6 text-center mb-6" style={{ borderColor: "rgba(176,85,63,0.3)", background: "rgba(176,85,63,0.06)" }}>
          <p className="font-semibold text-sm" style={{ color: "#9a3f2f" }}>We couldn&apos;t load the directory just now</p>
          <p className="text-sm text-stone-500 mt-1 max-w-md mx-auto">
            This is a problem at our end, not an empty directory. Please refresh in a moment. If it keeps happening, tell us.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 text-sm font-semibold text-white rounded-lg"
            style={{ background: "#1E6091" }}
          >
            Try again
          </button>
        </div>
      )}

      {!loading && !loadFailed && activeCategory !== 'all' && (
        <ResultsGrid
          providers={filtered}
          count={filtered.length}
          emptyLine={
            providers.length === 0
              ? "We're building the directory now. Apply below to be one of the first listed."
              : 'Nobody listed for that yet. Tell us what you need and where, and we will go and find them.'
          }
          request={searchQuery}
        />
      )}
      {/* With no trade chosen, the directory is grouped: one section per trade
          in ownership-year order, then buying and selling. A provider whose
          service_types cover more than one trade shows under each of them. */}
      {!loading && !loadFailed && activeCategory === 'all' && (
        pool.length === 0 ? (
          <ResultsGrid
            providers={[]}
            count={0}
            emptyLine={
              providers.length === 0
                ? "We're building the directory now. Apply below to be one of the first listed."
                : 'Nobody listed for that yet. Tell us what you need and where, and we will go and find them.'
            }
            request={searchQuery}
          />
        ) : (
          <>
            <p className="text-sm text-stone-500 mb-8">
              {pool.length} {pool.length === 1 ? 'specialist' : 'specialists'}
              <span className="hidden sm:inline text-stone-300"> &middot; </span>
              <span className="block sm:inline text-xs text-stone-400 mt-1 sm:mt-0">{PRICE_RANGE_KEY}</span>
            </p>
            {tradeSections.map((c) => (
              <CategorySection key={c.key} catKey={c.key} label={c.label} icon={c.icon} providers={c.list} onOnly={pickCategory} />
            ))}
            {salesSections.length > 0 && (
              <>
                <div className="flex items-baseline justify-between gap-4 mb-6 pt-2" style={{ borderTop: '1px solid rgba(0,0,0,0.1)' }}>
                  <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mt-4">Buying and selling</p>
                  <p className="text-xs text-stone-500 mt-4">Dealers, consignment houses and online auction reps. Marked as such on every listing they post.</p>
                </div>
                {salesSections.map((c) => (
                  <CategorySection key={c.key} catKey={c.key} label={c.label} icon={c.icon} providers={c.list} onOnly={pickCategory} />
                ))}
              </>
            )}
          </>
        )
      )}

      {/* CTA to Apply */}
      <div className="mt-12 relative overflow-hidden rounded-2xl text-center">
        <div className="absolute inset-0" style={{ background: '#12352A' }} />
        <div className="relative p-8">
        <p className="text-[11px] uppercase mb-4" style={{ fontFamily: "var(--font-jetbrains-mono), 'JetBrains Mono', Menlo, monospace", letterSpacing: '0.12em', color: '#F2B27A' }}>
          Founding 500
        </p>
        <h3 className="font-display tracking-tight text-2xl sm:text-3xl mb-3" style={{ color: '#F5EFE6' }}>Join the directory</h3>
        <p className="text-stone-200 mb-2 font-medium">Are you a specialist? Get listed.</p>
        <p className="text-stone-300 mb-6 max-w-xl mx-auto">
          If you do exceptional work with collector cars (inspection, transport, mechanical, body and paint, restoration, detailing, storage, or photography), or you buy, sell or consign them as a licensed dealer, apply to join the directory, build your review record, and get in front of serious collectors who care about who touches their car.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/services/apply"
            className="shine inline-flex items-center justify-center gap-2 bg-white hover:bg-accent-light text-accent font-semibold px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5"
          >
            Apply to be listed
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 border border-white/35 hover:border-white/70 hover:bg-white/10 text-white font-medium px-6 py-3 rounded-xl transition-all"
          >
            Recommend a Provider
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
}
