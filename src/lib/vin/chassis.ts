/**
 * Pre-1981 chassis and VIN decoder.
 *
 * The 17-character VIN only exists from model year 1981, and NHTSA's vPIC
 * returns nothing useful before that. For most of what this site is for, the
 * chassis number IS the car's identity, and every factory numbered its cars
 * its own way. This file holds those numbering systems as data plus a few
 * small positional decoders.
 *
 * THE RULE: a wrong answer is worse than none. Every table here came from a
 * source (factory production lists reproduced by registries, marque clubs,
 * the Jaguar Daimler Heritage Trust register guide), researched 2026-09-29.
 * Where sources disagreed, the row was left out rather than guessed. A code
 * that is not in a table decodes to what IS certain (make, model, year) and
 * leaves the variant blank.
 *
 * Confidence:
 *   high   - self-identifying positional format, two sources agree
 *   medium - single source, range-based, or production year rather than
 *            model year. Callers should say "looks like", not "is".
 *
 * Bare serial numbers ("4103", "881234") could belong to any make, so the
 * range-only systems (356, early 911/912, Jaguar XK and 3.8 E-Type, Ferrari)
 * only run when the make is known from the text or the form.
 *
 * Sources, per system:
 *   Porsche 1964-80   turbosition.com/en/porsche-vin; bigporsche.com factory
 *                     lists (VIN70s/73s/76s/79s911.htm); Porsche Club GB 2.7
 *                     Carrera register PDF; 911uk.com VIN decoder
 *   Porsche 914       en.wikipedia.org/wiki/Porsche_914; p914.org/p914_vin.htm
 *   Porsche 356       asahi-net.or.jp/~fc5m-sss/specificat.html (single source)
 *   Jaguar            JDHT E-type register guide RG001F; Jag-Lovers XK range list
 *   Mercedes-Benz     mb107.com/specs/vin-decoder.htm; peachparts W113 thread
 *   Corvette          mamotorworks VIN-Decoding-C1-C3; corvetteactioncenter.com
 *   Mustang           jegs.com, classicindustries.com, uniquecarsandparts.com.au
 *   GM 1965-80        chevellestuff.net, arencambre.com, camaros.org,
 *                     firstgenfirebird.org, classicindustries Firebird decoder
 *   Chrysler 1968-80  motales.com VIN decoder; 71superbee.com VIN breakdown
 *   Ferrari           ferrarichat road-car production list; dacorsa.com
 *   BMC / Triumph     mgocspares.co.uk, mgexp.com, Wikipedia (Austin-Healey),
 *                     britishcarforum (Moss Motors TR4A breaks)
 */

export type ChassisDecode = {
  /** The chunk of the input that decoded, as typed. */
  matched: string;
  /** Same, compacted and upper-cased: what should go in the chassis field. */
  chassis: string;
  make: string;
  /** Null when the number fits several models (see candidates). */
  model: string | null;
  variant: string | null;
  year: number | null;
  /** Set when only a span is known. */
  yearRange: [number, number] | null;
  body: string | null;
  market: string | null;
  engine: string | null;
  plant: string | null;
  serial: string | null;
  /** Research page this number points at, when we know it. The caller checks it is published. */
  slug: string | null;
  /** Several models fit the number; ask rather than pick. */
  candidates: string[];
  confidence: 'high' | 'medium';
  /** One line naming the numbering system, for display. */
  system: string;
  notes: string[];
};

type Draft = Omit<ChassisDecode, 'matched' | 'chassis'> & { chassis?: string };

function base(make: string, system: string, confidence: 'high' | 'medium'): Draft {
  return {
    make, model: null, variant: null, year: null, yearRange: null, body: null,
    market: null, engine: null, plant: null, serial: null, slug: null,
    candidates: [], confidence, system, notes: [],
  };
}

// ── Make hints ──────────────────────────────────────────────────────────────

const MAKE_WORDS: [RegExp, string][] = [
  [/\bporsche\b/i, 'Porsche'],
  [/\bferrari\b|\bdino\b/i, 'Ferrari'],
  [/\bjaguar\b|\bjag\b|\be-?type\b|\bxk\s?1[245]0\b/i, 'Jaguar'],
  [/\bmercedes\b|\bbenz\b|\bpagoda\b/i, 'Mercedes-Benz'],
  [/\bcorvette\b|\bchevrolet\b|\bchevy\b|\bcamaro\b|\bchevelle\b|\bnova\b/i, 'Chevrolet'],
  [/\bpontiac\b|\bfirebird\b|\bgto\b|\btrans ?am\b/i, 'Pontiac'],
  [/\bford\b|\bmustang\b|\bshelby\b/i, 'Ford'],
  [/\bplymouth\b|\bdodge\b|\bmopar\b|\bcuda\b|\bbarracuda\b|\bchallenger\b|\bcharger\b|\broad ?runner\b/i, 'Chrysler'],
  [/\baustin[- ]?healey\b|\bhealey\b/i, 'Austin-Healey'],
  [/\bmg\b|\bmgb\b|\bmga\b/i, 'MG'],
  [/\btriumph\b|\btr4a?\b/i, 'Triumph'],
  [/\bdatsun\b|\bnissan\b|\b240z\b|\b280z\b|\b510\b/i, 'Datsun'],
];

/** The make a piece of text or a form field names, normalized to our family keys. */
export function makeFamily(text: string | null | undefined): string | null {
  const t = String(text ?? '');
  for (const [re, make] of MAKE_WORDS) if (re.test(t)) return make;
  return null;
}

// ── Porsche ─────────────────────────────────────────────────────────────────

const PORSCHE_BODY: Record<string, string> = { '0': 'Coupe', '1': 'Targa', '2': 'Coupe (Karmann-built)' };

/** 911 engine/variant digit for 1970-79 (position 5). Returns [variant, market]. */
function porsche911Variant(year: number, code: string, serial: number): [string, string | null] | null {
  if (year <= 1973) {
    if (code === '1') return ['T', year >= 1972 ? 'US' : null];
    if (code === '2') return ['E', null];
    if (code === '3') return ['S', null];
    if (code === '5' && year >= 1972) return ['T', 'Rest of world'];
    if (code === '6' && year === 1973) return ['Carrera RS 2.7', null];
    return null;
  }
  if (year <= 1975) {
    if (code === '1') return ['2.7', 'Rest of world'];
    if (code === '2' && year === 1975) return ['S', 'US'];
    if (code === '3') return ['S', 'Rest of world'];
    if (code === '4') return ['Carrera 2.7', 'US'];
    if (code === '6') {
      if (year === 1974 && serial >= 9001) return ['Carrera 3.0 RS', 'Rest of world'];
      return ['Carrera 2.7', 'Rest of world'];
    }
    return null;
  }
  if (year <= 1977) {
    if (code === '1' && year === 1976) return ['2.7', 'Japan'];
    if (code === '2') return ['S', 'US'];
    if (code === '3') return ['2.7', 'Rest of world'];
    if (code === '6') {
      if (year === 1976 && serial >= 9001) return ['Carrera 2.7', 'Rest of world'];
      return ['Carrera 3.0', 'Rest of world'];
    }
    return null;
  }
  // 1978-79
  if (code === '2') return ['SC 3.0', 'US'];
  if (code === '3') return ['SC 3.0', serial >= 9501 ? 'Japan' : 'Rest of world'];
  return null;
}

function porscheSlugFor911(year: number): string | null {
  if (year <= 1973) return 'porsche/911-long-hood';
  if (year >= 1978) return 'porsche/911-sc';
  return null; // No 1974-77 page yet.
}

function decodePorscheCoded(c: string): Draft | null {
  // 1970-79, ten digits: MMM Y E B NNNN
  let m = c.match(/^(911|930|914|924|928|931)(\d)(\d)(\d)(\d{4})$/);
  if (m) {
    const [, type, y, e, b, s] = m;
    const serial = parseInt(s, 10);
    const year = 1970 + parseInt(y, 10);
    const d = base('Porsche', 'Porsche 10-digit chassis number, 1970-79', 'high');
    d.serial = s;
    d.year = year;

    if (type === '911') {
      d.model = '911';
      const v = porsche911Variant(year, e, serial);
      if (v) { d.variant = v[0]; d.market = v[1]; }
      else d.notes.push(`Variant code ${e} is not in our tables for ${year}. The year and model are certain.`);
      d.body = PORSCHE_BODY[b] && (b !== '2' || year <= 1971) ? PORSCHE_BODY[b] : null;
      d.slug = porscheSlugFor911(year);
      if (d.variant === 'Carrera RS 2.7') d.body = 'Coupe';
      return d;
    }
    if (type === '930') {
      if (year < 1975) return null;
      d.model = '911 Turbo';
      d.variant = year <= 1977 ? '930 Turbo 3.0' : '930 Turbo 3.3';
      d.body = 'Coupe';
      if (e === '7') d.market = serial >= 9501 ? 'Japan' : 'Rest of world';
      else if (e === '8') d.market = 'US';
      d.slug = 'porsche/911-930-turbo';
      return d;
    }
    if (type === '914') {
      if (e === '4' && b === '3' && year <= 1972) {
        d.model = '914'; d.variant = '914/6'; d.body = 'Targa'; d.engine = '2.0 flat-six';
        d.slug = 'porsche/914';
        return d;
      }
      if (e === '2' && b === '3' && year === 1972) {
        d.model = '916'; d.body = 'Targa'; d.confidence = 'medium';
        d.notes.push('One of about eleven 916 prototypes. Worth a certificate from Porsche.');
        return d;
      }
      return null;
    }
    if (type === '928') {
      if (year < 1978) return null;
      d.model = '928';
      d.body = 'Coupe';
      if (year === 1978) {
        if (e === '1') d.market = 'Rest of world';
        else if (e === '2') d.market = serial >= 9501 ? 'Japan' : 'US/Canada';
      }
      d.slug = 'porsche/928';
      return d;
    }
    if (type === '924') {
      if (year < 1976) return null;
      d.model = '924'; d.slug = 'porsche/924';
      return d;
    }
    if (type === '931') {
      if (year < 1978) return null;
      d.model = '924'; d.variant = 'Turbo'; d.slug = 'porsche/924';
      return d;
    }
  }

  // 1980: 9x A 0 M E NNNN. Model from digits 1-2 plus digit 5.
  m = c.match(/^9([123])A0(\d)(\d)(\d{4})$/);
  if (m) {
    const [, t, mdl, e, s] = m;
    const key = `9${t}${mdl}`;
    const d = base('Porsche', 'Porsche chassis number, 1980', 'high');
    d.year = 1980; d.serial = s;
    if (key === '911') {
      d.model = '911'; d.variant = 'SC 3.0'; d.slug = 'porsche/911-sc';
      d.market = e === '3' ? 'Rest of world' : e === '4' ? 'US' : null;
      d.notes.push('From 1980 the chassis number no longer says coupe or Targa.');
      return d;
    }
    if (key === '930') {
      d.model = '911 Turbo'; d.variant = '930 Turbo 3.3'; d.body = 'Coupe';
      d.market = 'Rest of world'; d.slug = 'porsche/911-930-turbo';
      return d;
    }
    if (key === '928') {
      d.model = '928'; d.body = 'Coupe'; d.slug = 'porsche/928';
      return d;
    }
    if (key === '924') { d.model = '924'; d.slug = 'porsche/924'; return d; }
    if (key === '931') { d.model = '924'; d.variant = 'Turbo'; d.slug = 'porsche/924'; return d; }
    return null;
  }

  // 1969, nine digits: MM 9 E B NNNN
  m = c.match(/^(11|12)9(\d)([012])(\d{4})$/);
  if (m) {
    const [, mm, e, b, s] = m;
    const d = base('Porsche', 'Porsche 9-digit chassis number, 1969', 'high');
    d.year = 1969; d.serial = s; d.body = PORSCHE_BODY[b];
    if (mm === '11') {
      const v: Record<string, string> = { '1': 'T', '2': 'E', '3': 'S' };
      if (!v[e]) return null;
      d.model = '911'; d.variant = v[e]; d.slug = 'porsche/911-long-hood';
    } else {
      if (e !== '0') return null;
      d.model = '912'; d.slug = 'porsche/912';
    }
    return d;
  }

  // 1968, eight digits: MM 8 V NNNN
  m = c.match(/^(11|12)8(\d)(\d{4})$/);
  if (m) {
    const [, mm, v, s] = m;
    const d = base('Porsche', 'Porsche 8-digit chassis number, 1968', 'high');
    d.year = 1968; d.serial = s;
    if (mm === '11') {
      d.model = '911'; d.slug = 'porsche/911-long-hood';
      const coupe: Record<string, string> = { '0': 'S', '1': 'L', '2': 'T', '9': 'R' };
      if (coupe[v]) { d.variant = coupe[v]; d.body = 'Coupe'; }
      else if (/[5-8]/.test(v)) d.body = 'Targa';
      else d.notes.push(`Variant code ${v} is disputed between sources, so we have left it blank.`);
      if (v === '9') d.notes.push('911 R: about twenty built. Get this one documented by Porsche.');
    } else {
      d.model = '912'; d.slug = 'porsche/912';
      if (v === '0') d.body = 'Coupe (Karmann-built)';
    }
    return d;
  }

  // 914/4, VW-style: 47 Y 2 9 NNNNN
  m = c.match(/^47([0-6])29(\d{5})$/);
  if (m) {
    const d = base('Porsche', 'Porsche 914 (VW-style) chassis number, 1970-76', 'high');
    d.year = 1970 + parseInt(m[1], 10);
    d.model = '914'; d.variant = '914/4'; d.body = 'Targa'; d.serial = m[2];
    d.slug = 'porsche/914';
    d.notes.push('Engine size (1.7, 1.8 or 2.0) is in the engine number, not the chassis number.');
    return d;
  }
  return null;
}

type Range = { lo: number; hi: number; year?: number; years?: [number, number]; model: string; variant?: string; body?: string; slug?: string };

const PORSCHE_RANGES: Range[] = [
  // 911 / 912, 1964-67. Single source (turbosition), so medium.
  { lo: 300001, hi: 300232, years: [1964, 1965], model: '911', body: 'Coupe', slug: 'porsche/911-long-hood' },
  { lo: 300233, hi: 303390, year: 1965, model: '911', body: 'Coupe', slug: 'porsche/911-long-hood' },
  { lo: 303391, hi: 305100, year: 1966, model: '911', body: 'Coupe', slug: 'porsche/911-long-hood' },
  { lo: 305101, hi: 308522, year: 1967, model: '911', body: 'Coupe', slug: 'porsche/911-long-hood' },
  { lo: 350001, hi: 351970, year: 1965, model: '912', body: 'Coupe', slug: 'porsche/912' },
  { lo: 450001, hi: 454470, year: 1965, model: '912', body: 'Coupe (Karmann-built)', slug: 'porsche/912' },
  // 356. Single source; rows are production years, not model years.
  { lo: 50099, hi: 51645, year: 1953, model: '356', variant: 'Pre-A', body: 'Coupe' },
  { lo: 51646, hi: 53008, year: 1954, model: '356', variant: 'Pre-A', body: 'Coupe' },
  { lo: 53009, hi: 55000, year: 1955, model: '356', variant: 'Pre-A or 356A', body: 'Coupe' },
  { lo: 55001, hi: 58311, year: 1956, model: '356', variant: '356A', body: 'Coupe' },
  { lo: 58312, hi: 59090, year: 1957, model: '356', variant: '356A', body: 'Coupe' },
  { lo: 100001, hi: 102504, years: [1957, 1958], model: '356', variant: '356A (T2)', body: 'Coupe' },
  { lo: 102505, hi: 106174, year: 1958, model: '356', variant: '356A', body: 'Coupe' },
  { lo: 106175, hi: 108917, year: 1959, model: '356', variant: '356A', body: 'Coupe' },
  { lo: 108918, hi: 110237, year: 1959, model: '356', variant: '356B (T5)', body: 'Coupe' },
  { lo: 110238, hi: 114650, year: 1960, model: '356', variant: '356B (T5)', body: 'Coupe' },
  { lo: 117601, hi: 118950, year: 1961, model: '356', variant: '356B (T6)', body: 'Coupe' },
  { lo: 118951, hi: 121099, year: 1962, model: '356', variant: '356B', body: 'Coupe' },
  { lo: 121100, hi: 123042, year: 1962, model: '356', variant: '356B (T6)', body: 'Coupe' },
  { lo: 123043, hi: 125239, year: 1963, model: '356', variant: '356B', body: 'Coupe' },
  { lo: 126001, hi: 128104, year: 1963, model: '356', variant: '356C', body: 'Coupe' },
  { lo: 128105, hi: 130511, year: 1964, model: '356', variant: '356C', body: 'Coupe' },
  { lo: 130512, hi: 131930, year: 1965, model: '356', variant: '356C', body: 'Coupe' },
  { lo: 201601, hi: 202200, year: 1961, model: '356', variant: '356B', body: 'Karmann hardtop' },
  { lo: 212172, hi: 214400, year: 1963, model: '356', variant: '356B', body: 'Coupe (Karmann-built)' },
  { lo: 215001, hi: 216738, year: 1963, model: '356', variant: '356C', body: 'Coupe (Karmann-built)' },
  { lo: 216739, hi: 219069, year: 1964, model: '356', variant: '356C', body: 'Coupe (Karmann-built)' },
  { lo: 219070, hi: 222579, year: 1965, model: '356', variant: '356C', body: 'Coupe (Karmann-built)' },
  { lo: 60001, hi: 60394, year: 1953, model: '356', variant: 'Pre-A', body: 'Cabriolet' },
  { lo: 60395, hi: 60722, year: 1954, model: '356', variant: 'Pre-A', body: 'Cabriolet' },
  { lo: 60723, hi: 61000, year: 1955, model: '356', variant: 'Pre-A or 356A', body: 'Cabriolet' },
  { lo: 61001, hi: 61499, year: 1956, model: '356', variant: '356A', body: 'Cabriolet' },
  { lo: 61500, hi: 61892, year: 1957, model: '356', variant: '356A', body: 'Cabriolet' },
  { lo: 150150, hi: 151531, year: 1958, model: '356', variant: '356A', body: 'Cabriolet' },
  { lo: 151532, hi: 152475, year: 1959, model: '356', variant: '356A', body: 'Cabriolet' },
  { lo: 152476, hi: 152943, year: 1959, model: '356', variant: '356B (T5)', body: 'Cabriolet' },
  { lo: 152944, hi: 154560, year: 1960, model: '356', variant: '356B', body: 'Cabriolet' },
  { lo: 154561, hi: 155569, year: 1961, model: '356', variant: '356B', body: 'Cabriolet' },
  { lo: 156201, hi: 157768, years: [1961, 1962], model: '356', variant: '356B (T6)', body: 'Cabriolet' },
  { lo: 159833, hi: 160750, year: 1964, model: '356', variant: '356C', body: 'Cabriolet' },
  { lo: 80001, hi: 80200, year: 1954, model: '356', variant: '1500', body: 'Speedster' },
  { lo: 80201, hi: 81900, year: 1955, model: '356', variant: 'Pre-A or 356A', body: 'Speedster' },
  { lo: 81901, hi: 82850, year: 1956, model: '356', variant: '356A', body: 'Speedster' },
  { lo: 82851, hi: 84366, year: 1957, model: '356', variant: '356A', body: 'Speedster' },
  { lo: 84367, hi: 84922, year: 1958, model: '356', variant: '356A', body: 'Speedster' },
  { lo: 85501, hi: 86830, years: [1958, 1959], model: '356', variant: '356A', body: 'Convertible D' },
  { lo: 86831, hi: 87391, year: 1959, model: '356', variant: '356B', body: 'Roadster' },
  { lo: 87392, hi: 88920, year: 1960, model: '356', variant: '356B', body: 'Roadster' },
  { lo: 88921, hi: 89483, year: 1961, model: '356', variant: '356B', body: 'Roadster' },
];

function fromRange(make: string, system: string, r: Range, n: number): Draft {
  const d = base(make, system, 'medium');
  d.model = r.model; d.variant = r.variant ?? null; d.body = r.body ?? null;
  d.serial = String(n);
  if (r.year) d.year = r.year;
  if (r.years) d.yearRange = r.years;
  d.slug = r.slug ?? null;
  return d;
}

function decodePorscheRange(c: string): Draft | null {
  const m = c.match(/^(\d{5,6})S?$/);
  if (!m) return null;
  const n = parseInt(m[1], 10);
  const r = PORSCHE_RANGES.find((x) => n >= x.lo && n <= x.hi);
  if (!r) return null;
  const d = fromRange('Porsche', r.model === '356'
    ? 'Porsche 356 chassis range'
    : 'Porsche 911/912 chassis range, 1964-67', r, n);
  if (r.model === '356') {
    d.slug = 'porsche/356';
    d.notes.push('356 ranges are by production year, which can differ from the title year.');
  }
  if (c.endsWith('S') && r.model === '911' && (r.year ?? 0) >= 1966) d.variant = 'S';
  return d;
}

// ── Jaguar ──────────────────────────────────────────────────────────────────

const JAGUAR_RANGES: (Range & { market: string })[] = [
  { lo: 660001, hi: 661176, years: [1949, 1954], model: 'XK120', body: 'Open two-seater', market: 'RHD' },
  { lo: 670001, hi: 676438, years: [1949, 1954], model: 'XK120', body: 'Open two-seater', market: 'LHD' },
  { lo: 669001, hi: 669195, years: [1951, 1954], model: 'XK120', body: 'Fixed head coupe', market: 'RHD' },
  { lo: 679001, hi: 681485, years: [1951, 1954], model: 'XK120', body: 'Fixed head coupe', market: 'LHD' },
  { lo: 667001, hi: 667295, years: [1952, 1954], model: 'XK120', body: 'Drophead coupe', market: 'RHD' },
  { lo: 677001, hi: 678472, years: [1953, 1954], model: 'XK120', body: 'Drophead coupe', market: 'LHD' },
  { lo: 800001, hi: 800074, years: [1954, 1956], model: 'XK140', body: 'Open two-seater', market: 'RHD' },
  { lo: 810001, hi: 813282, years: [1954, 1957], model: 'XK140', body: 'Open two-seater', market: 'LHD' },
  { lo: 804001, hi: 804843, years: [1954, 1956], model: 'XK140', body: 'Fixed head coupe', market: 'RHD' },
  { lo: 814001, hi: 815966, years: [1954, 1957], model: 'XK140', body: 'Fixed head coupe', market: 'LHD' },
  { lo: 807001, hi: 807480, years: [1954, 1957], model: 'XK140', body: 'Drophead coupe', market: 'RHD' },
  { lo: 817001, hi: 819311, years: [1954, 1957], model: 'XK140', body: 'Drophead coupe', market: 'LHD' },
  { lo: 820001, hi: 820093, years: [1958, 1960], model: 'XK150', body: 'Open two-seater', market: 'RHD' },
  { lo: 830001, hi: 832174, years: [1957, 1960], model: 'XK150', body: 'Open two-seater', market: 'LHD' },
  { lo: 824001, hi: 825369, years: [1957, 1960], model: 'XK150', body: 'Fixed head coupe', market: 'RHD' },
  { lo: 834001, hi: 847095, years: [1957, 1960], model: 'XK150', body: 'Fixed head coupe', market: 'LHD' },
  { lo: 827001, hi: 827663, years: [1957, 1960], model: 'XK150', body: 'Drophead coupe', market: 'RHD' },
  { lo: 837001, hi: 839010, years: [1957, 1960], model: 'XK150', body: 'Drophead coupe', market: 'LHD' },
  { lo: 850001, hi: 850943, years: [1961, 1964], model: 'E-Type', variant: 'Series 1 3.8', body: 'Open two-seater', market: 'RHD', slug: 'jaguar/e-type-series-1' },
  { lo: 875001, hi: 881886, years: [1961, 1964], model: 'E-Type', variant: 'Series 1 3.8', body: 'Open two-seater', market: 'LHD', slug: 'jaguar/e-type-series-1' },
  { lo: 860001, hi: 861799, years: [1961, 1964], model: 'E-Type', variant: 'Series 1 3.8', body: 'Fixed head coupe', market: 'RHD', slug: 'jaguar/e-type-series-1' },
  { lo: 885001, hi: 890872, years: [1961, 1964], model: 'E-Type', variant: 'Series 1 3.8', body: 'Fixed head coupe', market: 'LHD', slug: 'jaguar/e-type-series-1' },
];

// Letter-prefix E-Types. [prefix, lo, hi, years, variant, body, market]
const ETYPE_PREFIX: [string, number, number, [number, number], string, string, string][] = [
  ['1E', 1001, 2183, [1964, 1968], 'Series 1 4.2', 'Open two-seater', 'RHD'],
  ['1E', 10001, 18367, [1964, 1968], 'Series 1 4.2', 'Open two-seater', 'LHD'],
  ['1E', 20001, 21958, [1964, 1968], 'Series 1 4.2', 'Fixed head coupe', 'RHD'],
  ['1E', 30001, 35814, [1964, 1968], 'Series 1 4.2', 'Fixed head coupe', 'LHD'],
  ['1E', 50001, 51379, [1965, 1968], 'Series 1 4.2 2+2', 'Fixed head coupe', 'RHD'],
  ['1E', 75001, 79221, [1965, 1968], 'Series 1 4.2 2+2', 'Fixed head coupe', 'LHD'],
  ['1R', 1001, 1776, [1968, 1970], 'Series 2', 'Open two-seater', 'RHD'],
  ['1R', 7001, 14853, [1968, 1970], 'Series 2', 'Open two-seater', 'LHD'],
  ['1R', 20001, 21071, [1968, 1970], 'Series 2', 'Fixed head coupe', 'RHD'],
  ['1R', 25001, 28786, [1968, 1970], 'Series 2', 'Fixed head coupe', 'LHD'],
  ['1R', 35001, 36041, [1968, 1970], 'Series 2 2+2', 'Fixed head coupe', 'RHD'],
  ['1R', 40001, 44287, [1968, 1970], 'Series 2 2+2', 'Fixed head coupe', 'LHD'],
];

function decodeJaguarPrefix(c: string): Draft | null {
  const m = c.match(/^(1E|1R|2R|1S)(\d{4,5})[A-Z]{0,3}$/);
  if (!m) return null;
  const [, p, digits] = m;
  const n = parseInt(digits, 10);
  const d = base('Jaguar', 'Jaguar E-Type chassis number (JDHT register)', 'high');
  d.model = 'E-Type'; d.serial = digits;
  if (p === '2R') {
    d.variant = 'Series 2'; d.market = 'US'; d.yearRange = [1970, 1970]; d.confidence = 'medium';
    d.notes.push('2R numbers were used on late US Series 2 cars.');
    return d;
  }
  if (p === '1S') {
    d.variant = 'Series 3 V12'; d.yearRange = [1970, 1974]; d.confidence = 'medium';
    return d;
  }
  const row = ETYPE_PREFIX.find((r) => r[0] === p && n >= r[1] && n <= r[2]);
  if (!row) {
    d.variant = p === '1E' ? 'Series 1 4.2' : 'Series 2';
    d.yearRange = p === '1E' ? [1964, 1968] : [1968, 1970];
    d.confidence = 'medium';
    d.notes.push('The number is outside the published ranges for its prefix. Worth checking the plate.');
  } else {
    d.variant = row[4]; d.yearRange = row[3]; d.body = row[5]; d.market = row[6];
  }
  if (p === '1E') d.slug = 'jaguar/e-type-series-1';
  return d;
}

function decodeJaguarRange(c: string): Draft | null {
  const m = c.match(/^(\d{6})[A-Z]{0,3}$/);
  if (!m) return null;
  const n = parseInt(m[1], 10);
  const r = JAGUAR_RANGES.find((x) => n >= x.lo && n <= x.hi);
  if (!r) return null;
  const d = fromRange('Jaguar', 'Jaguar chassis range (factory list)', r, n);
  d.market = r.market;
  d.confidence = 'high';
  return d;
}

// ── Mercedes-Benz ───────────────────────────────────────────────────────────

const MB_TYPES: Record<string, { model: string; years: [number, number]; body: string; slug?: string }> = {
  '113042': { model: '230SL', years: [1963, 1967], body: 'Roadster', slug: 'mercedes-benz/sl-pagoda-w113' },
  '113043': { model: '250SL', years: [1966, 1968], body: 'Roadster', slug: 'mercedes-benz/sl-pagoda-w113' },
  '113044': { model: '280SL', years: [1967, 1971], body: 'Roadster', slug: 'mercedes-benz/sl-pagoda-w113' },
  '198040': { model: '300SL', years: [1954, 1957], body: 'Gullwing coupe', slug: 'mercedes-benz/300sl-w198' },
  '198042': { model: '300SL', years: [1957, 1963], body: 'Roadster', slug: 'mercedes-benz/300sl-w198' },
  '121040': { model: '190SL', years: [1955, 1963], body: 'Roadster' },
  '121042': { model: '190SL', years: [1955, 1963], body: 'Roadster' },
};

function decodeMercedes(c: string): Draft | null {
  const m = c.match(/^(113|198|121)(0\d{2})(\d)(\d)(\d{5,6})$/);
  if (!m) return null;
  const t = MB_TYPES[m[1] + m[2]];
  if (!t) return null;
  const d = base('Mercedes-Benz', `Mercedes-Benz chassis number, type ${m[1]}.${m[2]}`, 'high');
  d.model = t.model; d.yearRange = t.years; d.body = t.body; d.slug = t.slug ?? null;
  d.serial = m[5];
  d.market = m[3] === '1' ? 'LHD' : m[3] === '2' ? 'RHD' : null;
  if (m[1] === '113') {
    d.variant = m[4] === '2' ? 'Automatic' : m[4] === '0' ? 'Manual' : null;
    d.notes.push('Mercedes chassis numbers carry no year. The build date is on the data card.');
  }
  return d;
}

// ── Corvette and other GM ───────────────────────────────────────────────────

const GM_PLANT: Record<string, string> = {
  A: 'Atlanta', B: 'Baltimore', C: 'Southgate', D: 'Doraville', F: 'Flint', G: 'Framingham',
  J: 'Janesville', K: 'Kansas City', L: 'Van Nuys', N: 'Norwood', P: 'Pontiac', R: 'Arlington',
  S: 'St. Louis', T: 'Tarrytown', U: 'Lordstown', W: 'Willow Run', Y: 'Wilmington', Z: 'Fremont',
  '1': 'Oshawa', '2': 'Ste. Therese',
};

const CORVETTE_ENGINE: Record<number, Record<string, string>> = {
  1972: { K: '350 (base)', L: '350 LT1', W: '454 LS5' },
  1973: { J: '350 L48', T: '350 L82', Z: '454 LS4' },
  1974: { J: '350 L48', T: '350 L82', Z: '454 LS4' },
  1975: { J: '350 L48', T: '350 L82' },
  1976: { L: '350 L48', X: '350 L82' },
  1977: { L: '350 L48', X: '350 L82' },
  1978: { L: '350 L48', '4': '350 L82' },
  1979: { '8': '350 L48', '4': '350 L82' },
  1980: { H: '305 LG4', '8': '350 L48', '6': '350 L82' },
};

function gmYear(ch: string, from1972 = false): number | null {
  if (ch === 'A') return 1980;
  if (!/\d/.test(ch)) return null;
  const n = parseInt(ch, 10);
  if (from1972) return n >= 2 ? 1970 + n : null;
  return n >= 5 ? 1960 + n : n <= 1 ? 1970 + n : null;
}

function corvetteSlug(year: number): string {
  return year <= 1962 ? 'chevrolet/corvette-c1' : year <= 1967 ? 'chevrolet/corvette-c2' : 'chevrolet/corvette-c3';
}

function decodeCorvette(c: string): Draft | null {
  let m = c.match(/^(?:V)?E(5[3-7])([FS])(\d{6})$/) || c.match(/^J(5[89])(S)(\d{6})$/);
  if (m) {
    const year = 1900 + parseInt(m[1], 10);
    if (c.startsWith('V') && year !== 1955) return null;
    const d = base('Chevrolet', 'Corvette serial number, 1953-59', 'high');
    d.model = 'Corvette'; d.year = year; d.plant = m[2] === 'F' ? 'Flint' : 'St. Louis';
    d.serial = m[3]; d.slug = corvetteSlug(year);
    if (c.startsWith('V')) d.engine = 'V8';
    return d;
  }
  m = c.match(/^([0-4])08(67|37)S(\d{6})$/);
  if (m) {
    const year = 1960 + parseInt(m[1], 10);
    if (m[2] === '37' && year < 1963) return null;
    const d = base('Chevrolet', 'Corvette VIN, 1960-64', 'high');
    d.model = 'Corvette'; d.year = year; d.plant = 'St. Louis'; d.serial = m[3];
    d.body = m[2] === '67' ? 'Convertible' : 'Coupe'; d.slug = corvetteSlug(year);
    return d;
  }
  m = c.match(/^194(37|67)(\d)S(\d{6})$/);
  if (m) {
    const year = gmYear(m[2]);
    if (!year || year > 1971) return null;
    const d = base('Chevrolet', 'Corvette VIN, 1965-71', 'high');
    d.model = 'Corvette'; d.year = year; d.plant = 'St. Louis'; d.serial = m[3];
    d.body = m[1] === '67' ? 'Convertible' : 'Coupe'; d.slug = corvetteSlug(year);
    return d;
  }
  m = c.match(/^1Z(37|67|87)([A-Z0-9])([2-9A])S(\d{6})$/);
  if (m) {
    const year = gmYear(m[3], true)!;
    const d = base('Chevrolet', 'Corvette VIN, 1972-80', 'high');
    d.model = 'Corvette'; d.year = year; d.plant = 'St. Louis'; d.serial = m[4];
    d.body = m[1] === '67' ? 'Convertible' : 'Coupe';
    d.engine = CORVETTE_ENGINE[year]?.[m[2]] ?? null;
    if (year === 1978 && parseInt(m[4], 10) >= 900001) d.variant = 'Indy Pace Car';
    d.slug = corvetteSlug(year);
    return d;
  }
  return null;
}

const GM_BODY: Record<string, string> = {
  '07': 'Coupe', '11': '2-door sedan', '17': '2-door hardtop', '27': '2-door coupe', '35': 'Wagon', '37': '2-door hardtop',
  '39': '4-door hardtop', '67': 'Convertible', '69': '4-door sedan', '80': 'El Camino', '87': 'Coupe',
};

function decodeGm(c: string): Draft | null {
  // 1965-71: D SS BB Y P NNNNNN
  let m = c.match(/^([12])(\d)(\d)(\d{2})(\d)([A-Z12])(\d{6})$/);
  if (m) {
    const [, div, s1, s2, body, y, plant, serial] = m;
    const year = gmYear(y);
    if (!year || year > 1971) return null;
    const d = base(div === '1' ? 'Chevrolet' : 'Pontiac', 'GM 13-character VIN, 1965-71', 'high');
    d.year = year; d.plant = GM_PLANT[plant] ?? null; d.serial = serial; d.body = GM_BODY[body] ?? null;
    const v8 = parseInt(s2, 10) % 2 === 0;
    if (div === '1') {
      if (s1 === '1') { d.model = 'Chevy II / Nova'; d.engine = v8 ? 'V8' : 'Six'; }
      else if (s1 === '2' && year >= 1967) {
        d.model = 'Camaro'; d.engine = v8 ? 'V8' : 'Six';
        if (year <= 1969) d.slug = 'chevrolet/camaro-1st-gen';
      }
      else if (s1 === '3') {
        d.model = 'Chevelle'; d.engine = v8 ? 'V8' : 'Six';
        if (s2 === '8' && year >= 1966 && year <= 1969) {
          d.variant = 'SS 396';
          if (year >= 1968) d.slug = 'chevrolet/chevelle-ss';
        }
      }
      else return null;
      if (year <= 1971 && d.model !== 'Camaro') d.notes.push('Before 1968 an SS was an option, not always in the VIN.');
      return d;
    }
    // Pontiac
    if (s1 === '4' && s2 === '2' && year >= 1966) { d.model = 'GTO'; d.slug = 'pontiac/gto-1964-74'; return d; }
    if (s1 === '2' && year >= 1967) {
      d.model = 'Firebird';
      if (year >= 1970) {
        const fb: Record<string, string> = { '3': 'Base', '4': 'Esprit', '6': 'Formula', '8': 'Trans Am' };
        d.variant = fb[s2] ?? null;
      }
      return d;
    }
    return null;
  }
  // 1972-80: D S BB E Y P NNNNNN
  m = c.match(/^([12])([A-Z])(\d{2})([A-Z0-9])([2-9A])([A-Z12])(\d{6})$/);
  if (m) {
    const [, div, series, body, eng, y, plant, serial] = m;
    const year = gmYear(y, true);
    if (!year) return null;
    const d = base(div === '1' ? 'Chevrolet' : 'Pontiac', 'GM 13-character VIN, 1972-80', 'high');
    d.year = year; d.plant = GM_PLANT[plant] ?? null; d.serial = serial; d.body = GM_BODY[body] ?? null;
    if (div === '1') {
      if (series === 'Q' && year <= 1979) { d.model = 'Camaro'; return d; }
      if (series === 'S') { d.model = 'Camaro'; d.variant = year <= 1978 ? 'Type LT' : 'Berlinetta'; return d; }
      return null;
    }
    const fb: Record<string, [string, number, number]> = {
      S: ['Base', 1972, 1980], T: ['Esprit', 1972, 1980], U: ['Formula', 1972, 1980],
      V: ['Trans Am', 1972, 1975], W: ['Trans Am', 1976, 1980],
    };
    const f = fb[series];
    if (!f || year < f[1] || year > f[2]) return null;
    d.model = 'Firebird'; d.variant = f[0];
    const fe: Record<string, [string, number, number]> = {
      D: ['250 six', 1972, 1976], M: ['350 2bbl', 1972, 1976], L: ['350 4bbl', 1977, 1979],
      K: ['403 4bbl', 1977, 1979], W: ['455 HO', 1975, 1976], A: ['231 V6', 1978, 1980],
    };
    const e = fe[eng];
    if (e && year >= e[1] && year <= e[2]) d.engine = e[0];
    return d;
  }
  return null;
}

// ── Ford Mustang and Shelby ─────────────────────────────────────────────────

const MUSTANG_ENGINE: Record<string, Record<string, string>> = {
  '1965': { U: '170 six', T: '200 six', F: '260 V8', C: '289 2V', A: '289 4V', D: '289 4V', K: '289 Hi-Po' },
  '1966': { T: '200 six', C: '289 2V', A: '289 4V', K: '289 Hi-Po' },
  '1967': { T: '200 six', C: '289 2V', A: '289 4V', K: '289 Hi-Po', S: '390 GT' },
  '1968': { T: '200 six', C: '289 2V', F: '302 2V', J: '302 4V', X: '390 2V', S: '390 4V', R: '428 Cobra Jet', W: '427' },
  '1969': { T: '200 six', L: '250 six', F: '302 2V', H: '351 2V', M: '351 4V', G: 'Boss 302', S: '390 4V', Q: '428 Cobra Jet', R: '428 Cobra Jet Ram Air', Z: 'Boss 429' },
  '1970': { T: '200 six', L: '250 six', F: '302 2V', H: '351 2V', M: '351 4V', G: 'Boss 302', Q: '428 Cobra Jet', R: '428 Cobra Jet Ram Air', Z: 'Boss 429' },
  '1971': { L: '250 six', F: '302 2V', H: '351 2V', M: '351 4V', Q: '351 Cobra Jet', R: 'Boss 351', C: '429 Cobra Jet', J: '429 Cobra Jet Ram Air' },
  '1972': { L: '250 six', F: '302 2V', H: '351 2V', Q: '351 Cobra Jet', R: '351 HO' },
  '1973': { L: '250 six', F: '302 2V', H: '351 2V', Q: '351 Cobra Jet' },
};

function decodeMustang(c: string, hint: string | null): Draft | null {
  const shelby = c.match(/^SFM5([SR])(\d{3})$/);
  if (shelby) {
    const n = parseInt(shelby[2], 10);
    if (n < 1 || n > 562) return null;
    const d = base('Shelby', 'Shelby serial number, 1965', 'high');
    d.model = 'GT350'; d.year = 1965; d.serial = shelby[2];
    d.variant = shelby[1] === 'R' ? 'GT350R (competition)' : 'GT350 (street)';
    d.body = 'Fastback'; d.slug = 'shelby/gt350';
    return d;
  }
  const m = c.match(/^([0-35-9])([FRT])(0[1-9])([A-Z0-9])(\d{6})$/);
  if (!m) return null;
  const [, y, plant, body, eng, serial] = m;
  const year = parseInt(y, 10) >= 5 ? 1960 + parseInt(y, 10) : 1970 + parseInt(y, 10);
  let bodyName: string | null = null;
  if (year <= 1966) bodyName = ({ '07': 'Hardtop', '08': 'Convertible', '09': 'Fastback' } as Record<string, string>)[body] ?? null;
  else {
    const b: Record<string, string> = { '01': 'Hardtop', '02': 'Fastback', '03': 'Convertible' };
    if (year >= 1969) { b['04'] = 'Grande hardtop'; b['05'] = 'Mach 1 fastback'; }
    bodyName = b[body] ?? null;
  }
  if (!bodyName) return null;
  const d = base('Ford', 'Ford 11-character VIN, Mustang 1965-73', hint === 'Ford' ? 'high' : 'medium');
  d.model = 'Mustang'; d.year = year; d.serial = serial; d.body = bodyName;
  if (bodyName.startsWith('Mach 1')) d.variant = 'Mach 1';
  if (bodyName.startsWith('Grande')) d.variant = 'Grande';
  d.plant = ({ F: 'Dearborn', R: 'San Jose', T: 'Metuchen' } as Record<string, string>)[plant];
  d.engine = MUSTANG_ENGINE[String(year)]?.[eng] ?? null;
  if (year <= 1968) d.slug = 'ford/mustang-first-gen';
  if (hint !== 'Ford') d.notes.push('Read as a Mustang from the body code. Other Fords of the period share the format.');
  return d;
}

// ── Chrysler (Plymouth / Dodge) ─────────────────────────────────────────────

const MOPAR_LINE: Record<string, { make: string; model: string; years: [number, number]; slug?: [string, number, number] }> = {
  B: { make: 'Plymouth', model: 'Barracuda', years: [1968, 1974], slug: ['plymouth/barracuda-e-body', 1970, 1974] },
  J: { make: 'Dodge', model: 'Challenger', years: [1970, 1974], slug: ['dodge/challenger-1st-gen', 1970, 1974] },
  R: { make: 'Plymouth', model: 'Belvedere / Satellite', years: [1968, 1974] },
  X: { make: 'Dodge', model: 'Charger', years: [1968, 1970], slug: ['dodge/charger-1968-1970', 1968, 1970] },
  W: { make: 'Dodge', model: 'Coronet', years: [1968, 1974] },
  L: { make: 'Dodge', model: 'Dart', years: [1968, 1976] },
  V: { make: 'Plymouth', model: 'Valiant', years: [1968, 1976] },
};

const MOPAR_BODY: Record<string, string> = {
  '21': '2-door coupe (post)', '23': '2-door hardtop', '27': 'Convertible', '29': '2-door sports coupe', '41': '4-door sedan',
};

const MOPAR_ENGINE_6869: Record<string, string> = { J: '426 Hemi', L: '440 4bbl', M: '440 Six Barrel', H: '383 4bbl', P: '340 4bbl', F: '318' };
const MOPAR_ENGINE_7071: Record<string, string> = {
  R: '426 Hemi', V: '440 Six Pack', U: '440 4bbl', N: '383 4bbl', L: '383 2bbl', H: '340 4bbl', J: '340 Six Pack', G: '318', C: '225 six',
};

function decodeMopar(c: string): Draft | null {
  const m = c.match(/^([BJRXWLV])([A-Z])(\d)(\d)([A-Z0-9])(\d)([A-Z])(\d{6})$/);
  if (!m) return null;
  const [, line, cls, doors, bodyDigit, eng, y, , serial] = m;
  const info = MOPAR_LINE[line];
  const yd = parseInt(y, 10);
  // 0 means 1970 or 1980; every line here is a 1968-76 car, so read 1970.
  const year = yd >= 6 ? 1960 + yd : 1970 + yd;
  if (year < info.years[0] || year > info.years[1]) return null;
  const d = base(info.make, 'Chrysler 13-character VIN, 1968-80', 'high');
  d.model = info.model; d.year = year; d.serial = serial;
  d.body = MOPAR_BODY[doors + bodyDigit] ?? null;
  const key = line + cls;
  if (key === 'BS' && year >= 1970) d.variant = "'Cuda";
  if (key === 'JS') d.variant = 'R/T';
  if (key === 'RM') { d.model = 'Road Runner'; }
  if (key === 'RS' && year <= 1971) { d.model = 'GTX'; }
  if (key === 'XS') d.variant = 'R/T';
  if (line === 'W' && year >= 1971) { d.model = 'Charger'; }
  if (key === 'WS') d.variant = 'R/T';
  if (key === 'WM') d.variant = 'Super Bee';
  if (key === 'VS' && year >= 1970) { d.model = 'Duster'; d.variant = '340'; }
  const et = year <= 1969 ? MOPAR_ENGINE_6869 : year <= 1971 ? MOPAR_ENGINE_7071 : null;
  d.engine = et?.[eng] ?? null;
  if (info.slug && year >= info.slug[1] && year <= info.slug[2]) d.slug = info.slug[0];
  if (d.engine === '426 Hemi') d.notes.push('A Hemi VIN is worth a broadcast sheet and a fender tag to go with it.');
  return d;
}

// ── British and Japanese prefixes ───────────────────────────────────────────

function decodeBritishJapanese(c: string): Draft | null {
  let m = c.match(/^H?(BN1|BN2|BN4|BN6|BN7|BT7|BJ7|BJ8)(L)?(\d{3,6})$/);
  if (m) {
    const t: Record<string, [string, string, [number, number], string]> = {
      BN1: ['100', '3-speed with overdrive', [1953, 1955], 'Open two-seater'],
      BN2: ['100', '4-speed with overdrive', [1955, 1956], 'Open two-seater'],
      BN4: ['100-Six', '', [1956, 1959], '2+2'],
      BN6: ['100-Six', '', [1958, 1959], 'Open two-seater'],
      BN7: ['3000', 'Mk I/II', [1959, 1962], 'Open two-seater'],
      BT7: ['3000', 'Mk I/II', [1959, 1962], '2+2'],
      BJ7: ['3000', 'Mk II convertible', [1962, 1964], '2+2 convertible'],
      BJ8: ['3000', 'Mk III', [1964, 1967], '2+2 convertible'],
    };
    const r = t[m[1]];
    const d = base('Austin-Healey', 'Austin-Healey car number prefix', 'high');
    d.model = r[0]; d.variant = r[1] || null; d.yearRange = r[2]; d.body = r[3];
    d.market = m[2] ? 'LHD' : null; d.serial = m[3];
    if (r[0] === '3000') d.slug = 'austin-healey/3000';
    return d;
  }
  m = c.match(/^HAN5(L)?(\d{3,6})$/);
  if (m) {
    const d = base('Austin-Healey', 'Austin-Healey car number prefix', 'high');
    d.model = 'Sprite'; d.variant = 'Mk I ("Bugeye")'; d.yearRange = [1958, 1961];
    d.market = m[1] ? 'LHD' : null; d.serial = m[2];
    return d;
  }
  m = c.match(/^GH([ND])([12345])([UL])?(\d{3,6})G?$/);
  if (m) {
    const d = base('MG', 'MG (BMC) car number prefix', 'high');
    const series = m[2];
    const gt = m[1] === 'D';
    if (series === '1' || series === '2') {
      if (gt) return null;
      d.model = 'MGA'; d.variant = series === '1' ? '1600' : '1600 Mk II';
      d.yearRange = series === '1' ? [1959, 1961] : [1961, 1962]; d.body = 'Roadster';
    } else {
      d.model = 'MGB'; d.body = gt ? 'GT' : 'Roadster'; d.slug = 'mg/mgb';
      d.variant = series === '3' ? 'Mk I' : series === '4' ? 'Mk II' : null;
      d.yearRange = series === '3' ? [gt ? 1965 : 1962, 1967] : series === '4' ? [1967, 1969] : [1969, 1980];
    }
    d.market = m[3] === 'U' ? 'US' : m[3] === 'L' ? 'LHD' : null;
    d.serial = m[4];
    return d;
  }
  m = c.match(/^CT(C)?(\d{1,5})(L|O|LO)?$/);
  if (m) {
    const d = base('Triumph', 'Triumph commission number', 'high');
    d.serial = m[2];
    if (m[1]) {
      const n = parseInt(m[2], 10);
      d.model = 'TR4A';
      if (n >= 50001 && n <= 63736) d.year = 1965;
      else if (n >= 63737 && n <= 75000) d.year = 1966;
      else if (n >= 75001 && n <= 78684) d.year = 1967;
      else d.yearRange = [1965, 1967];
      if (d.year) { d.confidence = 'medium'; d.notes.push('TR4A year breaks are approximate. A British Motor Museum certificate settles it.'); }
    } else {
      d.model = 'TR4'; d.yearRange = [1961, 1965];
    }
    if (m[3]?.includes('L')) d.market = 'LHD';
    return d;
  }
  m = c.match(/^(H|R)?(L)?S30(U)?(\d{5,6})$/);
  if (m) {
    const d = base('Datsun', 'Datsun S30 chassis prefix', 'medium');
    d.model = null; d.candidates = ['240Z', '260Z', '280Z'];
    d.market = m[2] ? 'LHD' : 'RHD'; d.serial = m[4];
    if (m[1] === 'H' && m[2]) { d.candidates = ['240Z', '280Z']; d.notes.push('HLS30 covers both the US 240Z and the US 280Z. The build date on the plate settles which.'); }
    if (m[1] === 'R') { d.model = '260Z'; d.candidates = []; }
    return d;
  }
  m = c.match(/^(W)?PL510(\d{5,6})$/);
  if (m) {
    const d = base('Datsun', 'Datsun 510 chassis prefix', 'high');
    d.model = '510'; d.body = m[1] ? 'Wagon' : 'Sedan'; d.yearRange = [1968, 1973];
    d.serial = m[2]; d.slug = 'datsun/510';
    return d;
  }
  m = c.match(/^SP(L)?311(\d{5,6})$/);
  if (m) {
    const d = base('Datsun', 'Datsun roadster chassis prefix', 'high');
    d.model = '1600 Roadster'; d.yearRange = [1965, 1970]; d.body = 'Roadster';
    d.market = m[1] ? 'LHD' : null; d.serial = m[2];
    return d;
  }
  return null;
}

// ── Ferrari (candidates only) ───────────────────────────────────────────────

const FERRARI: [number, number, [number, number], string, string?][] = [
  [357, 447, [1955, 1956], '250 Europa GT'],
  [423, 501, [1956, 1956], '410 Superamerica (Series I)'],
  [461, 675, [1956, 1957], '250 GT Boano'],
  [503, 1523, [1956, 1959], '250 GT LWB Berlinetta "Tour de France"'],
  [655, 1475, [1957, 1959], '250 GT Cabriolet (Series I)'],
  [671, 721, [1957, 1957], '410 Superamerica (Series II)'],
  [679, 887, [1957, 1958], '250 GT Ellena'],
  [725, 2821, [1957, 1961], '250 GT Pininfarina Coupe'],
  [769, 1715, [1957, 1960], '250 GT LWB California Spyder'],
  [1015, 1495, [1958, 1959], '410 Superamerica (Series III)'],
  [1213, 3783, [1959, 1962], '250 GT Cabriolet (Series II)'],
  [1287, 4961, [1959, 1963], '250 GT/E 2+2'],
  [1517, 5139, [1959, 1964], '400 Superamerica'],
  [1539, 4065, [1960, 1963], '250 GT SWB Berlinetta'],
  [1795, 4137, [1960, 1963], '250 GT SWB California Spyder'],
  [2947, 10193, [1964, 1967], '330 GT 2+2'],
  [3223, 5575, [1962, 1964], '250 GTO'],
  [3849, 5955, [1962, 1964], '250 GT Lusso', 'ferrari/250-gt-lusso'],
  [4953, 5125, [1963, 1963], '330 America'],
  [5161, 8979, [1964, 1966], '275 GTB', 'ferrari/275-gtb'],
  [6001, 8653, [1964, 1966], '275 GTS'],
  [5951, 8897, [1964, 1966], '500 Superfast'],
  [6431, 11613, [1966, 1968], '330 GTC', 'ferrari/330-gtc'],
  [7835, 11713, [1966, 1968], '330 GTS'],
  [8347, 10369, [1966, 1967], '365 California'],
  [9021, 11069, [1966, 1968], '275 GTB/4', 'ferrari/275-gtb'],
  [7499, 14099, [1968, 1971], '365 GT 2+2'],
  [10241, 12795, [1968, 1969], '365 GTC'],
  [10287, 17615, [1968, 1974], '365 GTB/4 Daytona', 'ferrari/365-gtb4-daytona'],
  [13741, 16289, [1970, 1972], '365 GTC/4'],
  [15897, 19709, [1972, 1976], '365 GT4 2+2'],
  [19271, 38487, [1976, 1981], '512 BB', 'ferrari/512-bb'],
];

function decodeFerrari(c: string, text: string): Draft | null {
  const m = c.match(/^0*(\d{3,5})(GT|SA|EU|SF|AL)?$/);
  if (!m) return null;
  const n = parseInt(m[1], 10);
  const d = base('Ferrari', 'Ferrari serial number (model ranges overlap)', 'medium');
  d.serial = m[1];
  if (/\bdino\b|\b246\b/i.test(text) && n >= 400 && n <= 7650) {
    d.model = 'Dino 246 GT'; d.yearRange = [1969, 1974]; d.slug = 'ferrari/dino-246';
    return d;
  }
  if (n % 2 === 0) d.notes.push('Even serial numbers were generally competition cars. Worth a Ferrari Classiche check.');
  const hits = FERRARI.filter((r) => n >= r[0] && n <= r[1]);
  if (!hits.length) return null;
  // The text often names the model: "330 GTC 10123". Use it to narrow.
  const flat = text.toLowerCase().replace(/[^a-z0-9]/g, '');
  const named = hits.filter((h) => {
    const key = h[3].split(' (')[0].replace(/"[^"]*"/g, '').toLowerCase().replace(/[^a-z0-9]/g, '');
    if (key.length > 3 && flat.includes(key)) return true;
    // Or a distinctive word: "Daytona", "Lusso", "California".
    const generic = new Set(['series', 'cabriolet', 'berlinetta', 'spyder', 'coupe', 'pininfarina']);
    return (h[3].toLowerCase().match(/[a-z]{5,}/g) ?? [])
      .some((w) => !generic.has(w) && new RegExp(`\\b${w}\\b`, 'i').test(text));
  });
  const pick = named.length === 1 ? named : hits;
  if (pick.length === 1) {
    const h = pick[0];
    d.model = h[3]; d.yearRange = h[2]; d.slug = h[4] ?? null;
  } else {
    d.candidates = pick.map((h) => h[3]);
    const lo = Math.min(...pick.map((h) => h[2][0]));
    const hi = Math.max(...pick.map((h) => h[2][1]));
    d.yearRange = [lo, hi];
    d.notes.push('Several models were built in this serial range. Which one is on the title?');
  }
  return d;
}

// ── Entry point ─────────────────────────────────────────────────────────────

function compact(s: string): string {
  return s.toUpperCase().replace(/[\s.\-\/#]/g, '');
}

function tryAll(c: string, hint: string | null, text: string): Draft | null {
  if (c.length < 3 || c.length > 17) return null;
  // Self-identifying formats run regardless of the make hint.
  const selfId =
    decodePorscheCoded(c) ||
    decodeJaguarPrefix(c) ||
    decodeMercedes(c) ||
    decodeCorvette(c) ||
    decodeGm(c) ||
    decodeMopar(c) ||
    decodeMustang(c, hint) ||
    decodeBritishJapanese(c);
  if (selfId) {
    // A hint that contradicts a self-identifying format is a reason to doubt it.
    const fam = selfId.make === 'Plymouth' || selfId.make === 'Dodge' ? 'Chrysler'
      : selfId.make === 'Shelby' ? 'Ford' : selfId.make;
    if (hint && fam !== hint) return null;
    return selfId;
  }
  // Range-only systems need the make.
  if (hint === 'Porsche') return decodePorscheRange(c);
  if (hint === 'Jaguar') return decodeJaguarRange(c);
  if (hint === 'Ferrari') return decodeFerrari(c, text);
  return null;
}

/**
 * Find and decode a chassis number anywhere in what somebody typed.
 * "1973 911S chassis 911 330 1237" and "9113301237" both work: runs of up to
 * four adjacent tokens are joined, because people type these with spaces.
 * The longest decodable run wins.
 */
export function decodeChassis(input: string, makeHint?: string | null): ChassisDecode | null {
  const text = String(input ?? '').trim().slice(0, 200);
  if (!text) return null;
  const hint = makeFamily(makeHint) ?? makeFamily(text);

  const tokens = text.split(/\s+/).filter(Boolean);
  let best: ChassisDecode | null = null;
  for (let i = 0; i < tokens.length; i++) {
    for (let j = Math.min(tokens.length, i + 4); j > i; j--) {
      const raw = tokens.slice(i, j).join(' ');
      const c = compact(raw);
      if (!/\d/.test(c)) continue;
      // A four-digit year on its own is not a chassis number.
      if (/^(18|19|20)\d{2}$/.test(c) && hint !== 'Ferrari') continue;
      const d = tryAll(c, hint, text);
      if (d && (!best || c.length > best.chassis.length)) {
        best = { ...d, matched: raw, chassis: c } as ChassisDecode;
      }
    }
  }
  return best;
}

/** One line for the UI: "1973 Porsche 911 S, Coupe". */
export function describeDecode(d: ChassisDecode): string {
  const yr = d.year ? String(d.year) : d.yearRange ? (d.yearRange[0] === d.yearRange[1] ? String(d.yearRange[0]) : `${d.yearRange[0]}-${d.yearRange[1]}`) : '';
  const name = [yr, d.make, d.model ?? '', d.variant ?? ''].filter(Boolean).join(' ');
  return [name, d.body, d.market, d.engine].filter(Boolean).join(', ');
}
