// Run: npx tsx scripts/chassis-test.mts
const { decodeChassis, describeDecode } = await import('../src/lib/vin/chassis.js');

type Case = [string, string | null, Record<string, unknown> | null];
const cases: Case[] = [
  ['911-330-1237', null, { make: 'Porsche', model: '911', variant: 'S', year: 1973, body: 'Coupe', slug: 'porsche/911-long-hood' }],
  ['1973 Porsche 911S chassis 911 330 1237', null, { year: 1973, variant: 'S' }],
  ['9113600463', null, { variant: 'Carrera RS 2.7', year: 1973 }],
  ['9114609050', null, { variant: 'Carrera 3.0 RS', year: 1974 }],
  ['9306800123', null, { model: '911 Turbo', year: 1976, market: 'US' }],
  ['9119209999', null, { variant: 'SC 3.0', market: 'US', year: 1979, slug: 'porsche/911-sc' }],
  ['91A0134831', null, { model: '911', year: 1980, market: 'Rest of world' }],
  ['119310098', null, { year: 1969, variant: 'S', body: 'Targa' }],
  ['11800050', null, { year: 1968, variant: 'S', body: 'Coupe' }],
  ['4702913312', null, { model: '914', year: 1970 }],
  ['9140430100', null, { variant: '914/6', year: 1970 }],
  ['9288200500', null, { model: '928', year: 1978, market: 'US/Canada' }],
  ['302000', 'Porsche', { model: '911', year: 1965 }],
  ['82000', 'Porsche', { model: '356', body: 'Speedster', year: 1956 }],
  ['302000', null, null],
  ['1E 12345', null, { model: 'E-Type', variant: 'Series 1 4.2', market: 'LHD', body: 'Open two-seater' }],
  ['877123', 'Jaguar', { variant: 'Series 1 3.8', market: 'LHD' }],
  ['113.044-10-012345', null, { model: '280SL', market: 'LHD', variant: 'Manual' }],
  ['198.040-10-00123', null, { model: '300SL', body: 'Gullwing coupe' }],
  ['19804010001234', null, { model: '300SL', body: 'Gullwing coupe' }],
  ['E53F001001', null, { model: 'Corvette', year: 1953, plant: 'Flint' }],
  ['30837S100001', null, { year: 1963, body: 'Coupe', slug: 'chevrolet/corvette-c2' }],
  ['194675S100001', null, { year: 1965, body: 'Convertible' }],
  ['1Z37L2S500001', null, { year: 1972, engine: '350 LT1' }],
  ['124379N506070', null, { model: 'Camaro', year: 1969, plant: 'Norwood', engine: 'V8' }],
  ['138177B101265', null, { model: 'Chevelle', variant: 'SS 396', year: 1967 }],
  ['242179P123456', null, { make: 'Pontiac', model: 'GTO', year: 1969 }],
  ['2W87Z9N123456', null, { model: 'Firebird', variant: 'Trans Am', year: 1979 }],
  ['5F07K423456', 'Ford', { model: 'Mustang', year: 1965, body: 'Hardtop', engine: '289 Hi-Po', confidence: 'high' }],
  ['9F02Z123456', null, { engine: 'Boss 429', body: 'Fastback', confidence: 'medium' }],
  ['SFM5S123', null, { make: 'Shelby', model: 'GT350' }],
  ['WM23N1G118784', null, { model: 'Charger', variant: 'Super Bee', year: 1971, engine: '383 4bbl' }],
  ['BS23R0B100001', null, { variant: "'Cuda", year: 1970, engine: '426 Hemi', slug: 'plymouth/barracuda-e-body' }],
  ['RM23H9A100001', null, { model: 'Road Runner', year: 1969, engine: '383 4bbl' }],
  ['HBJ8L/12345', null, { model: '3000', variant: 'Mk III', market: 'LHD' }],
  ['GHN5UD123456G', null, null],
  ['GHN5U123456G', null, { model: 'MGB', market: 'US' }],
  ['CTC60000L', null, { model: 'TR4A', year: 1965 }],
  ['HLS30-12345', null, { make: 'Datsun', model: null }],
  ['Ferrari 5071', null, { make: 'Ferrari', model: null }],
  ['Ferrari 250 GT Lusso 5071', null, { model: '250 GT Lusso', slug: 'ferrari/250-gt-lusso' }],
  ['Ferrari Daytona 14999', null, { model: '365 GTB/4 Daytona' }],
  ['1972 Datsun 240Z', null, null],
  ['1985 Porsche 911', null, null],
  ['9113301237', 'Ferrari', null],
];

let fail = 0;
for (const [input, hint, want] of cases) {
  const d = decodeChassis(input, hint);
  let ok = true;
  if (want === null) ok = d === null;
  else if (!d) ok = false;
  else for (const [k, v] of Object.entries(want)) if ((d as Record<string, unknown>)[k] !== v) ok = false;
  if (!ok) fail++;
  console.log(ok ? 'ok  ' : 'FAIL', input.padEnd(40), d ? describeDecode(d) + (d.candidates.length ? ` [${d.candidates.join(' | ')}]` : '') : 'null');
}
console.log(fail ? `${fail} failed` : 'all passed');
process.exit(fail ? 1 : 0);
