/**
 * Reads what an owner typed into the search box and works out what they meant.
 *
 * The box asks "What does your car need?", so people answer in sentences:
 * "brake job on my 911", "ship a car to Texas", "ppi". The directory used to
 * look for that whole phrase, letter for letter, inside provider names and
 * descriptions, which with a young directory meant nearly every search came
 * back empty. This turns the sentence into three things the site can act on:
 * a trade, a make, and whatever words are left over for ranking.
 *
 * Pure and static on purpose. No database, no network, no model call: it runs
 * in the browser on every keystroke and costs nothing.
 */
import { SERVICE_CATEGORIES, type ServiceCategoryKey } from '@/lib/service-categories';
import { tradeHref } from '@/lib/category-slugs';

/** The slice of a published model history the search needs. Keep it small: it ships to the browser. */
export interface SearchModel {
  /** "porsche/911-964" */
  slug: string;
  make: string;
  model: string;
  yearStart: number | null;
  yearEnd: number | null;
}

/** Trim full model rows down to what the search box needs. */
export function toSearchModels(
  rows: Array<{ slug: string; make: string; model: string; year_start: number | null; year_end: number | null }>,
): SearchModel[] {
  return rows.map((m) => ({ slug: m.slug, make: m.make, model: m.model, yearStart: m.year_start, yearEnd: m.year_end }));
}

export interface SearchIntent {
  raw: string;
  category: ServiceCategoryKey | null;
  /** Display name of the make, e.g. "Porsche". */
  make: string | null;
  /** Make page slug under /research/models, only when a history exists for that make. */
  makeSlug: string | null;
  /** Best matching model history, when the words point at one. */
  model: SearchModel | null;
  /** Words that were not a trade, a make or filler. Used to rank, never to hide. */
  terms: string[];
}

/**
 * What owners actually type, mapped to the trade that does it. Phrases are
 * checked before single words so "paint correction" lands on detailing and
 * not on body and paint.
 */
const TRADE_WORDS: Record<ServiceCategoryKey, string[]> = {
  inspection: [
    'pre purchase inspection', 'pre-purchase inspection', 'prepurchase', 'ppi', 'inspection', 'inspect', 'inspector',
    'appraisal', 'appraiser', 'appraise', 'valuation', 'look over', 'check out a car', 'compression test', 'leakdown',
  ],
  transport: [
    'enclosed transport', 'transport', 'transporter', 'ship', 'shipping', 'shipper', 'haul', 'hauling', 'hauler',
    'trailer', 'tow', 'towing', 'deliver', 'delivery', 'move my car', 'move a car',
  ],
  titling: [
    'title', 'titling', 'registration', 'register', 'dmv', 'plates', 'plate', 'smog', 'bonded title', 'lost title',
    'import paperwork', 'vin verification', 'paperwork',
  ],
  mechanical: [
    'mechanic', 'mechanical', 'service', 'tune up', 'tune-up', 'tune', 'tuning', 'brake', 'brakes', 'engine', 'rebuild',
    'carb', 'carburetor', 'carburettor', 'clutch', 'transmission', 'gearbox', 'suspension', 'alignment', 'electrical',
    'wiring', 'oil leak', 'leak', 'overheating', 'cooling', 'radiator', 'exhaust', 'fuel injection', 'timing belt',
    'belt service', 'major service', 'valve adjustment', 'wont start', "won't start", 'running rough', 'repair', 'fix',
    'diagnose', 'diagnostic', 'ac', 'a/c', 'air conditioning',
  ],
  bodywork: [
    'body and paint', 'body & paint', 'bodywork', 'body shop', 'body work', 'paint', 'respray', 'repaint', 'dent',
    'dents', 'pdr', 'rust', 'rust repair', 'panel', 'metalwork', 'metal work', 'collision', 'scratch', 'chrome',
    'rechrome', 'plating',
  ],
  restoration: [
    'restoration', 'restore', 'restorer', 'restored', 'rotisserie', 'frame off', 'frame-off', 'nut and bolt',
    'concours prep', 'concours', 'recommission', 'recommissioning', 'barn find', 'project car',
  ],
  upholstery: [
    'upholstery', 'upholsterer', 'interior', 'retrim', 're-trim', 'trim shop', 'seat', 'seats', 'leather', 'carpet',
    'carpets', 'headliner', 'convertible top', 'soft top', 'dash', 'dashboard', 'door cards',
  ],
  detailing: [
    'paint correction', 'ceramic coating', 'ceramic', 'detail', 'detailing', 'detailer', 'polish', 'wax', 'ppf',
    'paint protection film', 'clear bra', 'wash', 'dry ice', 'dry ice cleaning', 'engine bay',
  ],
  storage: [
    'storage', 'store', 'storing', 'garage space', 'climate controlled', 'climate-controlled', 'winter storage',
    'keep it', 'park it', 'car condo',
  ],
  photography: [
    'photography', 'photographer', 'photos', 'photo', 'pictures', 'shoot', 'photo shoot', 'video', 'videographer',
    'listing photos',
  ],
  dealer: ['dealer', 'dealers', 'dealership', 'buy a car from'],
  consignment: ['consignment', 'consign', 'sell it for me', 'sell my car for me', 'broker'],
  'auction-rep': ['auction rep', 'auction representation', 'run my auction'],
};

/** Makes owners type, with the shorthand they actually use. Value is the display name. */
const MAKE_ALIASES: Record<string, string> = {
  acura: 'Acura', 'alfa romeo': 'Alfa Romeo', alfa: 'Alfa Romeo', amphicar: 'Amphicar', 'aston martin': 'Aston Martin',
  aston: 'Aston Martin', audi: 'Audi', 'austin healey': 'Austin-Healey', 'austin-healey': 'Austin-Healey',
  healey: 'Austin-Healey', bentley: 'Bentley', bmw: 'BMW', bugatti: 'Bugatti', buick: 'Buick', cadillac: 'Cadillac',
  chevrolet: 'Chevrolet', chevy: 'Chevrolet', chrysler: 'Chrysler', citroen: 'Citroen', datsun: 'Datsun',
  delorean: 'DeLorean', 'de tomaso': 'De Tomaso', detomaso: 'De Tomaso', dodge: 'Dodge', ferrari: 'Ferrari',
  fiat: 'Fiat', ford: 'Ford', honda: 'Honda', jaguar: 'Jaguar', jag: 'Jaguar', jeep: 'Jeep', lamborghini: 'Lamborghini',
  lambo: 'Lamborghini', lancia: 'Lancia', 'land rover': 'Land Rover', lexus: 'Lexus', lincoln: 'Lincoln',
  lotus: 'Lotus', maserati: 'Maserati', mazda: 'Mazda', mclaren: 'McLaren', 'mercedes-benz': 'Mercedes-Benz',
  'mercedes benz': 'Mercedes-Benz', mercedes: 'Mercedes-Benz', benz: 'Mercedes-Benz', merc: 'Mercedes-Benz',
  mg: 'MG', mini: 'Mini', mitsubishi: 'Mitsubishi', morgan: 'Morgan', nissan: 'Nissan', oldsmobile: 'Oldsmobile',
  packard: 'Packard', plymouth: 'Plymouth', pontiac: 'Pontiac', porsche: 'Porsche', 'rolls royce': 'Rolls-Royce',
  'rolls-royce': 'Rolls-Royce', rolls: 'Rolls-Royce', saab: 'Saab', shelby: 'Shelby', subaru: 'Subaru',
  sunbeam: 'Sunbeam', toyota: 'Toyota', triumph: 'Triumph', tvr: 'TVR', volkswagen: 'Volkswagen', vw: 'Volkswagen',
  volvo: 'Volvo',
};

/** Model names famous enough that nobody types the make. */
const MODEL_TO_MAKE: Record<string, string> = {
  '911': 'Porsche', '912': 'Porsche', '914': 'Porsche', '356': 'Porsche', '928': 'Porsche', '944': 'Porsche',
  '964': 'Porsche', '993': 'Porsche', '996': 'Porsche', '997': 'Porsche', '930': 'Porsche', boxster: 'Porsche',
  carrera: 'Porsche', f40: 'Ferrari', f50: 'Ferrari', testarossa: 'Ferrari', dino: 'Ferrari', daytona: 'Ferrari',
  '308': 'Ferrari', '328': 'Ferrari', '355': 'Ferrari', f355: 'Ferrari', '360': 'Ferrari', f430: 'Ferrari',
  '458': 'Ferrari', countach: 'Lamborghini', miura: 'Lamborghini', diablo: 'Lamborghini', 'e-type': 'Jaguar',
  etype: 'Jaguar', xke: 'Jaguar', xk120: 'Jaguar', mustang: 'Ford', bronco: 'Ford', thunderbird: 'Ford',
  corvette: 'Chevrolet', vette: 'Chevrolet', camaro: 'Chevrolet', chevelle: 'Chevrolet', nsx: 'Acura',
  '240z': 'Datsun', '260z': 'Datsun', '280z': 'Datsun', '510': 'Datsun', '300zx': 'Nissan', skyline: 'Nissan',
  'gt-r': 'Nissan', gtr: 'Nissan', supra: 'Toyota', fj40: 'Toyota', 'land cruiser': 'Toyota', miata: 'Mazda',
  rx7: 'Mazda', 'rx-7': 'Mazda', '300sl': 'Mercedes-Benz', gullwing: 'Mercedes-Benz', pagoda: 'Mercedes-Benz',
  '2002': 'BMW', e30: 'BMW', m3: 'BMW', e9: 'BMW', beetle: 'Volkswagen', ghia: 'Volkswagen',
  db5: 'Aston Martin', pantera: 'De Tomaso', cobra: 'Shelby', 'trans am': 'Pontiac',
  firebird: 'Pontiac', challenger: 'Dodge', viper: 'Dodge', cuda: 'Plymouth',
  barracuda: 'Plymouth', defender: 'Land Rover', elan: 'Lotus', esprit: 'Lotus', elise: 'Lotus', tr6: 'Triumph',
  spitfire: 'Triumph', mgb: 'MG', integrale: 'Lancia', stratos: 'Lancia', giulia: 'Alfa Romeo', gtv: 'Alfa Romeo',
};

const GENERIC_MODEL_WORDS = new Set([
  'turbo', 'spider', 'spyder', 'coupe', 'series', 'sport', 'super', 'sedan', 'roadster', 'convertible', 'cabriolet',
  'targa', 'speciale', 'special', 'competizione', 'berlinetta', 'classic', 'grand', 'touring',
]);

const FILLER = new Set([
  'a', 'an', 'the', 'my', 'our', 'for', 'on', 'in', 'of', 'to', 'at', 'with', 'and', 'or', 'i', 'need', 'needs',
  'want', 'looking', 'find', 'someone', 'somebody', 'who', 'can', 'get', 'help', 'job', 'work', 'car', 'cars', 'near',
  'me', 'best', 'good', 'shop', 'shops', 'specialist', 'specialists', 'is', 'it', 'that', 'this', 'have', 'has',
  'done', 'do', 'some', 'new', 'old', 'classic', 'vintage', 'collector',
]);

function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9&/\-' ]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Whole-word (or whole-phrase) test, so "ac" does not fire inside "acura". */
function hasPhrase(haystack: string, phrase: string): boolean {
  return (` ${haystack} `).includes(` ${phrase} `);
}

// Longest phrases first, so the specific reading wins over the general one.
const TRADE_PHRASES: Array<{ phrase: string; key: ServiceCategoryKey }> = (
  Object.entries(TRADE_WORDS) as Array<[ServiceCategoryKey, string[]]>
)
  .filter(([key]) => SERVICE_CATEGORIES.some((c) => c.key === key))
  .flatMap(([key, words]) => words.map((phrase) => ({ phrase: normalize(phrase), key })))
  .sort((a, b) => b.phrase.length - a.phrase.length);

const MAKE_PHRASES = Object.keys(MAKE_ALIASES).sort((a, b) => b.length - a.length);
const MODEL_PHRASES = Object.keys(MODEL_TO_MAKE).sort((a, b) => b.length - a.length);

function strip(haystack: string, phrase: string): string {
  return (` ${haystack} `).replace(` ${phrase} `, ' ').replace(/\s+/g, ' ').trim();
}

export function parseSearchIntent(raw: string, models: SearchModel[] = []): SearchIntent {
  const text = normalize(raw);
  const intent: SearchIntent = { raw: raw.trim(), category: null, make: null, makeSlug: null, model: null, terms: [] };
  if (!text) return intent;

  let rest = text;

  // A category label typed or tapped as-is ("Body & Paint") is the clearest signal there is.
  for (const c of SERVICE_CATEGORIES) {
    const label = normalize(c.label);
    if (hasPhrase(rest, label)) {
      intent.category = c.key;
      rest = strip(rest, label);
      break;
    }
  }
  if (!intent.category) {
    for (const { phrase, key } of TRADE_PHRASES) {
      if (hasPhrase(rest, phrase)) {
        intent.category = key;
        rest = strip(rest, phrase);
        break;
      }
    }
  }

  for (const alias of MAKE_PHRASES) {
    if (hasPhrase(rest, alias)) {
      intent.make = MAKE_ALIASES[alias];
      rest = strip(rest, alias);
      break;
    }
  }

  // A published history the words point at: the whole model name, or one
  // distinctive piece of it ("964", "testarossa"). A make already named has to
  // agree, and generic badge words never count on their own.
  const words = new Set(text.split(' '));
  const candidates = models
    .filter((m) => !intent.make || m.make === intent.make)
    .map((m) => {
      const name = normalize(m.model);
      if (name.length > 1 && hasPhrase(text, name)) return { m, name, weight: 100 + name.length };
      const token = name
        .split(' ')
        .find((t) => words.has(t) && !GENERIC_MODEL_WORDS.has(t) && (/\d/.test(t) ? t.length >= 3 : t.length >= 5));
      return token ? { m, name: token, weight: token.length } : null;
    })
    .filter((x): x is { m: SearchModel; name: string; weight: number } => x !== null)
    .sort((x, y) => y.weight - x.weight);
  // "911" on its own fits a dozen histories. That names the make, not a model.
  const clear = candidates.length > 0 && (candidates[0].weight >= 100 || candidates.filter((c) => c.name === candidates[0].name).length === 1);
  if (candidates.length > 0 && !clear) intent.make = intent.make ?? candidates[0].m.make;
  if (clear) {
    intent.model = candidates[0].m;
    intent.make = intent.make ?? candidates[0].m.make;
    rest = strip(rest, candidates[0].name);
  }

  if (!intent.make) {
    for (const name of MODEL_PHRASES) {
      if (hasPhrase(rest, name)) {
        intent.make = MODEL_TO_MAKE[name];
        break;
      }
    }
  }

  if (intent.make) {
    const hit = models.find((m) => m.make === intent.make);
    intent.makeSlug = hit ? hit.slug.split('/')[0] : null;
  }

  intent.terms = rest.split(' ').filter((w) => w.length > 1 && !FILLER.has(w));
  return intent;
}

export interface Suggestion {
  kind: 'trade' | 'model' | 'make';
  label: string;
  sub: string;
  href: string;
}

/** Suggestions for the dropdown. Cheap enough to run on every keystroke. */
export function suggest(raw: string, models: SearchModel[] = [], limit = 7): Suggestion[] {
  const text = normalize(raw);
  if (text.length < 2) return [];
  const out: Suggestion[] = [];
  const intent = parseSearchIntent(raw, models);

  // Trades: the parsed one first, then any whose label or asked-for line starts like the text.
  const tradeKeys = new Set<ServiceCategoryKey>();
  if (intent.category) tradeKeys.add(intent.category);
  for (const c of SERVICE_CATEGORIES) {
    if (`${normalize(c.label)} ${normalize(c.longLabel)}`.split(' ').some((w) => w.startsWith(text)) || normalize(c.longLabel).startsWith(text)) tradeKeys.add(c.key);
  }
  if (tradeKeys.size === 0) {
    const last = text.split(' ').pop() ?? '';
    if (last.length >= 3) {
      for (const { phrase, key } of TRADE_PHRASES) {
        if (phrase.startsWith(last)) tradeKeys.add(key);
        if (tradeKeys.size >= 2) break;
      }
    }
  }
  for (const key of Array.from(tradeKeys).slice(0, 3)) {
    const c = SERVICE_CATEGORIES.find((x) => x.key === key);
    if (!c) continue;
    const params = new URLSearchParams({ type: c.key });
    if (intent.make) params.set('q', intent.make);
    out.push({
      kind: 'trade',
      label: intent.make ? `${c.label} for ${intent.make}` : c.label,
      sub: c.longLabel,
      // A bare trade lands on its own page (what it is, what to ask, who does it).
      // With a make attached the filtered directory is the better answer.
      href: intent.make ? `/services?${params.toString()}` : tradeHref(c.key),
    });
  }

  // Model histories: the one the words point at, then others that fit.
  const hits: SearchModel[] = intent.model ? [intent.model] : [];
  for (const m of models) {
    if (hits.length >= 4) break;
    if (hits.includes(m)) continue;
    if (intent.make && m.make !== intent.make) continue;
    const hayWords = normalize(`${m.make} ${m.model}`).split(' ');
    const fits = intent.terms.length === 0
      ? Boolean(intent.make)
      : intent.terms.some((t) => hayWords.some((h) => h.startsWith(t)));
    if (fits) hits.push(m);
  }
  for (const m of hits) {
    const years = m.yearStart ? `${m.yearStart}${m.yearEnd && m.yearEnd !== m.yearStart ? `-${m.yearEnd}` : ''}` : '';
    out.push({
      kind: 'model',
      label: `${m.make} ${m.model}`,
      sub: years ? `Model history, ${years}` : 'Model history',
      href: `/research/models/${m.slug}`,
    });
  }

  if (intent.make && !intent.category) {
    out.push({
      kind: 'make',
      label: `${intent.make} specialists`,
      sub: 'Everyone in the directory who works on them',
      href: `/services?q=${encodeURIComponent(intent.make)}`,
    });
  }

  return out.slice(0, limit);
}

/**
 * How well a provider fits the search. Zero means no signal, not "hide":
 * inside a chosen trade every provider stays listed and this only sets order.
 * Make counts most, which is the directory rule: marque, then category.
 */
export function scoreProvider(
  p: { businessName: string; description: string; specialties: string[] },
  intent: SearchIntent,
): number {
  const hay = normalize(`${p.businessName} ${p.description} ${p.specialties.join(' ')}`);
  let score = 0;
  if (intent.make && hasPhrase(hay, normalize(intent.make))) score += 10;
  if (intent.model && hay.includes(normalize(intent.model.model))) score += 4;
  for (const t of intent.terms) if (hay.includes(t)) score += 2;
  if (intent.raw && normalize(p.businessName).includes(normalize(intent.raw))) score += 20;
  return score;
}
