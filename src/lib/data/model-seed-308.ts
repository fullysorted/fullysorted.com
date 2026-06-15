/**
 * Model draft — Ferrari 308 GTB/GTS, 1975–1985.
 *
 * Cross-checked across multiple INDEPENDENT sources per the Sourcing &
 * Truth-Seeking methodology in RESEARCH-AND-REGISTRY-ROADMAP.md:
 *   - Ferrari AG past-models pages (manufacturer)
 *   - Wikipedia (aggregator citing Ferrari official figures + Sports Car
 *     Market for the vetroresina count)
 *   - 308 GTB Register (308gtb.de) — marque registry, chassis-range based
 *   - Supercar Nostalgia (marque reference, chassis-range production splits)
 *   - Hagerty UK + Hagerty US (reputable journalism / buyer's guides)
 *   - classic.com (aggregated public auction/listing data — directional only)
 *
 * Seeded as status = 'draft' — NOT published. Chris reviews each section +
 * claim in /admin/models before it can go live. Where sources disagree, the
 * conflict is recorded as a 'disputed' claim with both sides.
 *
 * Nothing here is copied verbatim — synthesized in our own words, with
 * citations stored alongside in `sources`.
 */

import type { SeedSource, SeedClaim } from './model-seed-964';

export const seed308 = {
  slug: 'ferrari/308-gtb-gts',
  make: 'Ferrari',
  model: '308 GTB/GTS',
  generation: null as string | null,
  generationCode: null as string | null,
  trim: null as string | null,
  yearStart: 1975,
  yearEnd: 1985,
  bodyStyles: ['Berlinetta (GTB)', 'Targa (GTS)'],
  engines: [
    'F106 AB 2.9L transverse DOHC V8, 4× Weber 40DCNF carburettors (255 PS Euro / 240 PS US)',
    'F106 B 2.9L V8, Bosch K-Jetronic fuel injection — 308 GTBi/GTSi (214 PS Euro / 205 PS US)',
    'F105 AB 2.9L 32-valve V8, K-Jetronic — 308 Quattrovalvole (240 hp Euro / ~230 hp US)',
  ],
  productionTotal: 12112,
  productionNotes:
    'Headline figure is the GTB/GTS family across all four phases (carb, i, QV) and both body styles: 2,897 carb GTB + 3,219 carb GTS + 494 GTBi + 1,743 GTSi + 748 GTB QV + 3,042 GTS QV = 12,143 by the most-cited per-variant figures (Ferrari/Wikipedia). The frequently quoted round number is "over 12,000." We carry 12,112 as a representative total but flag that per-variant counts vary by a few units between sources; the GTSi count in particular is given as 1,743 or 1,749. Excludes the Italian-market 208 GTB/GTS (carb and turbo) and the Michelotto/Group 4/Group B rally specials, which were separate low-volume builds. The early all-fibreglass "vetroresina" GTB is the headline rarity — see the disputed production claim for the 808-vs-712 count.',
  notableTrims: [
    { name: '308 GTB "Vetroresina" (1975–77)', note: 'The early fibreglass-bodied Berlinetta. Scaglietti-built GRP body, ~1,050 kg — the lightest 308. Dry-sump (Euro). The collector prize of the range; build count disputed (808 vs 712).' },
    { name: '308 GTB (steel, 1977–80)', note: 'Bodies switched to steel from ~June 1977, adding roughly 150 kg. Still carbureted; Euro cars kept dry sump to 1981.' },
    { name: '308 GTS (1977–80)', note: 'Targa-roof car launched at the 1977 Frankfurt show. All GTS were steel-bodied and wet-sump. The Magnum, P.I. body style.' },
    { name: '308 GTBi / GTSi (1980–82)', note: 'Bosch K-Jetronic fuel injection for emissions compliance — and the well-documented power dip. The least-powerful of the carb/i/QV trio.' },
    { name: '308 GTB / GTS Quattrovalvole (1982–85)', note: '4-valve heads restored ~240 hp (Euro). Also fixed the sodium-valve weakness of the 2-valve cars. The driver’s pick among the injected cars.' },
    { name: '208 GTB / GTS (and Turbo)', note: 'Italian-market 2.0L tax special (NA 155 hp, later KKK-turbo 220 hp — the first turbo road Ferrari). Not part of the 308 total above.' },
    { name: '308 GTB Michelotto (Gr.4 / Gr.B)', note: 'Padua dealer Michelotto built ~11 Gr.4 and 4 Gr.B rally cars in close collaboration with Ferrari; tarmac-rally winners. Separate from road-car totals.' },
  ],
  specs: {
    'Engine (carb)': 'F106 AB 2,927 cc transverse 90° flat-plane DOHC V8, 4× Weber 40DCNF',
    'Power (carb, Euro)': '255 PS (252 bhp) @ 6,600 rpm',
    'Power (carb, US)': '240 PS (237 bhp) @ 6,600 rpm (emissions-equipped)',
    'Power (GTBi/GTSi, Euro)': '214 PS (211 bhp) — the injection-era dip',
    'Power (Quattrovalvole, Euro)': '240 hp @ 7,000 rpm; ~230 hp US (SAE net)',
    'Torque (QV, Euro)': '260 N·m (192 lb·ft) @ 5,000 rpm',
    'Transmission': '5-speed dog-leg manual transaxle, limited-slip diff',
    'Layout': 'Transverse mid-engine, rear-wheel drive',
    'Suspension': 'All-independent double wishbones, coil springs, anti-roll bars front & rear',
    'Brakes': 'Four-wheel vented discs',
    'Steering': 'Unassisted rack and pinion',
    'Weight (vetroresina)': '~1,050 kg (2,315 lb)',
    'Weight (steel/GTBi)': '~1,286 kg (2,835 lb)',
    'Wheelbase': '2,340 mm (92.1 in)',
    'Designer': 'Leonardo Fioravanti at Pininfarina; bodies built by Scaglietti',
  },
  heroPhoto: null as string | null,
  overallConfidence: 'high' as const,

  summary: `The Ferrari 308 is the car that put a mid-engined V8 Ferrari within reach of a generation — and, thanks to Magnum, P.I., into millions of living rooms. Launched at the 1975 Paris show, it marked the return of Pininfarina styling after the angular, Bertone-designed Dino 308 GT4 2+2. Leonardo Fioravanti’s shape, built by Scaglietti, is widely regarded as one of the most beautiful production Ferraris ever made.

Mechanically it carried a transverse 3.0-litre (2,927 cc) flat-plane V8 mounted across the car ahead of the rear axle, sitting on a tubular frame shared in concept with the GT4 and the original Dino. The Berlinetta GTB arrived first; the targa-topped GTS followed in 1977 and became the body style most people picture.

Over a decade the 308 evolved through three powertrain phases: carbureted (Weber), then Bosch K-Jetronic fuel injection (GTBi/GTSi) which brought a real, well-documented power dip, and finally the four-valve-per-cylinder Quattrovalvole (QV) which clawed most of that power back. The rare, early all-fibreglass "vetroresina" GTB — Ferrari’s first production car with a glass-reinforced-plastic body — is the collector’s prize of the range.`,

  history: `## After the GT4: Pininfarina returns

The 308 GTB debuted at the Paris Motor Show in October 1975 as a two-seat supplement to — and eventual replacement for — the Dino 246, and as a counterpoint to the wedge-shaped Bertone Dino 308 GT4. Where the GT4 was a 2+2 with angular Bertone lines, the new GTB was a short-wheelbase two-seater clothed by Pininfarina’s Leonardo Fioravanti, the designer behind the Daytona, the Dino and the Berlinetta Boxer. The two cars were mechanically related and shared the transverse-V8 tube-frame architecture, but the GTB rode a shorter wheelbase.

## The vetroresina years

The most collectible 308s are the earliest. Although built by Carrozzeria Scaglietti, the first GTBs wore bodywork made entirely of glass-reinforced plastic ("vetroresina" in Italian) — the first time Ferrari used the material on a production car. The payoff was weight: roughly 1,050 kg, the lightest of the whole line. Around June 1977 Ferrari switched to steel bodies, which added on the order of 150 kg. Exactly how many fibreglass cars were built is genuinely disputed (see the production claims) — commonly cited as 808, but the marque register and some chassis-range studies argue for ~712.

## GTS targa and the carbureted core

The targa-topped 308 GTS arrived at the 1977 Frankfurt show with a removable satin-black roof panel that stowed behind the seats. All GTS cars were steel-bodied and used wet-sump lubrication; European GTB coupes kept dry-sump engines until 1981. Carbureted cars ran four twin-choke Weber 40DCNF carburettors, with European output of 255 PS and US cars detuned to around 240 PS by emissions gear.

## Injection, the power dip, and the Quattrovalvole fix

In 1980 Ferrari fitted Bosch K-Jetronic mechanical fuel injection to meet tightening emissions rules, renaming the cars 308 GTBi and GTSi. Cleaner, yes — but slower: European output fell to about 214 PS and US cars to roughly 205 PS, the low point of the range and the reason injected non-QV cars are the enthusiasts’ least-favourite. Ferrari’s answer came in 1982 with the 308 Quattrovalvole (“four valves”): new four-valve-per-cylinder heads pushed European power back to about 240 hp and, as a bonus, replaced the troublesome sodium-filled exhaust valves of the two-valve engines. The QV ran until the 328 replaced it in 1985.`,

  marketNotes: `The 308’s pop-culture halo is unusually strong: Tom Selleck’s red 308 GTS in Magnum, P.I. (1980–1988) made the targa shape an icon, and that association still colours the market — a series-used “ROBIN 1” car is a different (and far pricier) animal than an ordinary 308.

As a snapshot rather than a quote (mid-2020s): aggregated public listing/auction data (classic.com) and Hagerty’s valuations put ordinary, sound driver-grade 308 GTS cars broadly in the high-five-figures, with exceptional, low-mileage or documented examples higher, and the early carbureted GTB — especially the fibreglass vetroresina — commanding a clear premium over later steel injected cars. Within the range the rough collector hierarchy runs: vetroresina GTB and carbureted dry-sump cars at the top; carbureted GTS next; Quattrovalvole respected for usability and power; and the GTBi/GTSi injected non-QV cars generally the most affordable way in (precisely because of the power dip).

These are directional, date-stamped observations — not a price guarantee. Celebrity-provenance and rare-spec cars are outliers. Use the Fully Sorted Value Guide for live comps before buying or selling.`,

  whatToLookFor: `**The belt service is the whole ballgame.** The 308’s timing belts must be changed on schedule; a snapped belt on these interference engines means serious internal damage. Demand documented evidence of a recent major service. The belts themselves aren’t the expensive part — it’s the full "while we’re in there" job (valve adjustment, cam timing, seals, tensioner bearings, water pump, hoses, fluids) that runs into real money.

**Rust on steel cars.** From mid-1977 on the bodies are steel and rust like any car of the era — check the sills, lower doors, the rear of the front wings/arches, and along the black-painted belt line. On the early fibreglass vetroresina cars the panels don’t rust, but water can sit between body and frame, so inspect the steel chassis underneath rather than assuming you’re safe.

**Electrics are fiddly.** Switchgear, the famously messy under-dash wiring, and fuse boxes (look for overheating/melting at the connections) are common trouble spots. Work every switch.

**Know which engine you’re buying.** Carb vs. injected (GTBi/GTSi) vs. Quattrovalvole changes both character and value. Confirm vetroresina vs. steel and dry- vs. wet-sump on early cars. The QV’s four-valve heads also did away with the sodium-valve weakness of the two-valve engines.

**Cam/seal weeps** are often a symptom of a car that has sat rather than been driven. Provenance, tool kit, books and a known-specialist history matter a lot on these.`,

  commonProblems: `**Timing belts / major service.** The signature 308 cost. Belts are inexpensive but must be replaced on time; failure on these interference V8s causes valve/piston damage. The real expense is the comprehensive major service typically done with the belts.

**Rust (steel cars).** Sills, lower doors, rear of front wings and arches, and the black belt line are the usual spots. On vetroresina cars the body won’t rot but the underlying steel chassis can — water traps between body and frame.

**Sodium-valve failure (two-valve engines).** Carb and GTBi/GTSi engines used sodium-filled exhaust valves that can fail at the head/stem joint. The Quattrovalvole’s four-valve heads removed this weakness — a genuine reliability argument for the QV.

**Electrical gremlins.** Disorganised factory under-dash wiring, failing switchgear, and overheating fuse-box connections are common and time-consuming.

**Oil/cam-seal leaks.** Often the result of a car sitting unused; not catastrophic but a maintenance reality.

**The injection-era power dip.** Not a "fault," but worth knowing: GTBi/GTSi cars are noticeably down on power versus both the earlier carbureted cars and the later QV — set expectations accordingly.`,

  valueTrajectory: `Long undervalued as the "affordable Ferrari," the 308 rose with the broader analog-Ferrari market through the late 2010s, with the early carbureted and especially the fibreglass vetroresina cars pulling clearly ahead of later injected steel cars. Quattrovalvole cars are prized for combining usable power with the prettier early-style looks; GTBi/GTSi injected non-QV cars remain the value entry point. The Magnum, P.I. halo keeps GTS demand and visibility high. Directional, mid-2020s snapshot — refresh against live comps before relying on it.`,

  sources: [
    {
      ref: 'ferrari',
      title: '308 GTB / 308 GTS / 308 GTBi / 308 Quattrovalvole (past models)',
      url: 'https://www.ferrari.com/en-EN/auto/308-gtb',
      publisher: 'Ferrari S.p.A.',
      sourceType: 'manufacturer',
      reliability: 'high',
      notes: 'Official manufacturer past-models pages. Source of the per-variant production figures (2,897 GTB; 3,219 GTS; 494 GTBi; 1,743 GTSi; 748 GTB QV; 3,042 GTS QV) and headline specs.',
    },
    {
      ref: 'wikipedia',
      title: 'Ferrari 308 GTB/GTS',
      url: 'https://en.wikipedia.org/wiki/Ferrari_308_GTB/GTS',
      publisher: 'Wikipedia',
      sourceType: 'reference-book',
      reliability: 'medium',
      notes: 'Aggregator citing Ferrari official figures plus Sports Car Market (Ahlgrim, 2012) for the 808 vetroresina count. Good on power figures, dry/wet sump, K-Jetronic, and the Magnum P.I. car-by-season list. Cross-check counts against primary sources.',
    },
    {
      ref: 'reg308',
      title: 'Production Numbers',
      url: 'https://308gtb.de/production-numbers/',
      publisher: '308 GTB Register',
      sourceType: 'registry',
      reliability: 'medium',
      notes: 'Marque registry/enthusiast register. Records the vetroresina count dispute (Ferrari ~808 vs chassis-range studies ~712) and per-variant chassis ranges.',
    },
    {
      ref: 'supercarnostalgia',
      title: 'Ferrari 308 GTB & 308 GTS Guide (and GTBi/GTSi, QV guides)',
      url: 'https://supercarnostalgia.com/blog/ferrari-308-gtb-and-308-gts',
      publisher: 'Supercar Nostalgia',
      sourceType: 'reference-book',
      reliability: 'medium',
      notes: 'Marque reference using chassis-range data; gives the 712 fibreglass figure (chassis 18677–21289) and per-variant splits, dry/wet sump details.',
    },
    {
      ref: 'hagerty-uk',
      title: 'Buying Guide: Ferrari 308',
      url: 'https://www.hagerty.co.uk/articles/buying-guides/buyers-guide-ferrari-308/',
      publisher: 'Hagerty UK',
      sourceType: 'journalism',
      reliability: 'high',
      notes: 'Buyer’s guide — belt service, rust hot-spots, electrical issues, cam-seal leaks, driving character.',
    },
    {
      ref: 'hagerty-us',
      title: 'Your Handy 1976–85 Ferrari 308 Buyer’s Guide',
      url: 'https://www.hagerty.com/media/market-trends/hagerty-insider/your-handy-1976-85-ferrari-308-buyers-guide/',
      publisher: 'Hagerty (US)',
      sourceType: 'journalism',
      reliability: 'high',
      notes: 'US buyer’s guide — major-service cost framing, variant differences, market context.',
    },
    {
      ref: 'classic',
      title: 'Ferrari 308 GTS Market',
      url: 'https://www.classic.com/m/ferrari/308/gts/',
      publisher: 'classic.com',
      sourceType: 'journalism',
      reliability: 'medium',
      notes: 'Aggregated public listing/auction data for directional value trends (snapshot, not a quote).',
    },
  ] as SeedSource[],

  claims: [
    {
      section: 'history',
      claimText:
        'The Pininfarina-designed 308 GTB (designed by Leonardo Fioravanti, built by Scaglietti) debuted at the 1975 Paris show as a return to Pininfarina styling after the Bertone-designed Dino 308 GT4 2+2; the GTS targa followed at the 1977 Frankfurt show.',
      confidence: 'high',
      status: 'verified',
      sourceRefs: ['ferrari', 'wikipedia', 'supercarnostalgia'],
    },
    {
      section: 'specs',
      claimText:
        'The 308 used a 2,927 cc flat-plane DOHC V8 mounted transversely ahead of the rear axle on a tubular frame, with a 5-speed dog-leg manual transaxle and all-independent double-wishbone suspension.',
      confidence: 'high',
      status: 'verified',
      sourceRefs: ['ferrari', 'wikipedia'],
    },
    {
      section: 'production',
      claimText:
        'Only the early fibreglass ("vetroresina") GTB cars used Ferrari’s first GRP production body (~1,050 kg); production switched to steel around June 1977.',
      confidence: 'high',
      status: 'verified',
      sourceRefs: ['wikipedia', 'supercarnostalgia', 'reg308'],
    },
    {
      section: 'production',
      claimText:
        'Approximately 808 fibreglass vetroresina GTBs were built.',
      confidence: 'medium',
      status: 'disputed',
      sourceRefs: ['wikipedia', 'reg308', 'supercarnostalgia'],
      conflictNote:
        'Ferrari and Wikipedia (citing Sports Car Market) state 808 fibreglass cars; the 308 GTB Register and chassis-range studies (e.g. Supercar Nostalgia, chassis 18677–21289) argue for ~712. Both figures appear in reputable marque sources. We present 808 as the most-cited number and flag ~712 as the well-supported alternative rather than picking a winner.',
    },
    {
      section: 'specs',
      claimText:
        'Carbureted European 308s produced about 255 PS (252 bhp); US emissions-equipped cars were down to about 240 PS (237 bhp).',
      confidence: 'medium',
      status: 'disputed',
      sourceRefs: ['wikipedia', 'ferrari', 'hagerty-uk'],
      conflictNote:
        'Sources vary on the carbureted figure: Wikipedia/Ferrari cite 255 PS (Euro) and 240 PS (US), while many enthusiast write-ups and guides quote a round "240 hp" for the European carb car (sometimes conflating Euro and US, or DIN vs SAE measurement). We carry 255 PS Euro / 240 PS US as the best-documented split and note the widely repeated 240-hp figure.',
    },
    {
      section: 'specs',
      claimText:
        'Bosch K-Jetronic fuel injection on the 1980–82 GTBi/GTSi cut European output to about 214 PS (211 bhp) and US output to roughly 205 PS (202 bhp) — the well-documented "power dip" of the range.',
      confidence: 'high',
      status: 'verified',
      sourceRefs: ['wikipedia', 'ferrari', 'hagerty-us'],
    },
    {
      section: 'specs',
      claimText:
        'The 1982–85 Quattrovalvole’s four-valve heads restored European output to about 240 hp and eliminated the sodium-exhaust-valve weakness of the two-valve engines.',
      confidence: 'high',
      status: 'verified',
      sourceRefs: ['wikipedia', 'ferrari'],
      conflictNote:
        'US-market QV output is variously given as 230 hp (Wikipedia/automobile-catalog, SAE net) or rounded to "240 hp" alongside the Euro figure in some summaries. Euro ~240 hp is consistent across sources; US ~230 hp is the better-documented US figure.',
    },
    {
      section: 'production',
      claimText:
        'Per-variant carb/i/QV production is most-commonly cited as: 2,897 carbureted GTB and 3,219 carbureted GTS (1975–80); 494 GTBi and 1,743 GTSi (1980–82); 748 GTB QV and 3,042 GTS QV (1982–85), for a GTB/GTS family total of roughly 12,000–12,150.',
      confidence: 'medium',
      status: 'disputed',
      sourceRefs: ['ferrari', 'wikipedia', 'supercarnostalgia'],
      conflictNote:
        'Per-variant figures vary by a few units between sources; the GTSi count in particular is given as 1,743 (Wikipedia/Ferrari) or 1,749 (some marque references), and the headline family total is usually rounded to "over 12,000." We carry the Ferrari/Wikipedia splits and note the spread. The Italian-market 208 cars and Michelotto rally specials are excluded from this total.',
    },
    {
      section: 'problems',
      claimText:
        'Key ownership realities are the scheduled timing-belt/major service (belt failure damages these interference engines), rust on steel-bodied cars (sills, lower doors, wing/arch rears), and notoriously messy factory electrics/fuse-box connections.',
      confidence: 'high',
      status: 'verified',
      sourceRefs: ['hagerty-uk', 'hagerty-us'],
    },
    {
      section: 'market',
      claimText:
        'The Magnum, P.I. (1980–1988) association gives the 308 GTS an outsized pop-culture halo; early carbureted/vetroresina GTBs command a premium over later injected steel cars, with GTBi/GTSi generally the most affordable entry point. (Directional, mid-2020s snapshot — not a quote.)',
      confidence: 'medium',
      status: 'unverified',
      sourceRefs: ['wikipedia', 'classic', 'hagerty-us'],
      conflictNote:
        'Market commentary is directional and date-stamped (mid-2020s). Values move and celebrity-provenance cars are outliers; this is not a current quote and should be refreshed against live comps before publish.',
    },
  ] as SeedClaim[],
};

export type Seed308 = typeof seed308;
