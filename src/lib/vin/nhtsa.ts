/**
 * NHTSA vPIC VIN decoder + recall lookup.
 *
 * Uses the U.S. National Highway Traffic Safety Administration's public,
 * free, no-key APIs:
 *   - vPIC DecodeVinValues  (VIN → year/make/model/trim/engine/plant/body…)
 *   - api.nhtsa.gov recalls (open recalls by year/make/model)
 *
 * This is government open data — legal to use with attribution, no license or
 * contract required. We do NOT touch title/brand/odometer history (Carfax /
 * AutoCheck / NMVTIS) — those require being a licensed/approved provider.
 */

const VPIC_BASE = 'https://vpic.nhtsa.dot.gov/api/vehicles';
const RECALLS_BASE = 'https://api.nhtsa.gov/recalls/recallsByVehicle';

export interface DecodedVin {
  vin: string;
  modelYear: string | null;
  make: string | null;
  model: string | null;
  trim: string | null;
  series: string | null;
  bodyClass: string | null;
  vehicleType: string | null;
  engineCylinders: string | null;
  displacementL: string | null;
  fuelType: string | null;
  drivetrain: string | null;
  transmission: string | null;
  doors: string | null;
  plantCountry: string | null;
  plantCity: string | null;
  manufacturer: string | null;
  errorCode: string | null;
  errorText: string | null;
}

export interface RecallItem {
  campaign: string;
  component: string;
  summary: string;
  consequence: string;
  remedy: string;
  reportDate: string;
}

export function isPlausibleVin(vin: string): boolean {
  // 17 chars, alphanumeric, no I/O/Q (post-1981 standard).
  return /^[A-HJ-NPR-Z0-9]{17}$/i.test(vin.trim());
}

function val(v: unknown): string | null {
  const s = typeof v === 'string' ? v.trim() : '';
  return s && s !== 'Not Applicable' && s !== '0' ? s : null;
}

export async function decodeVin(rawVin: string): Promise<DecodedVin> {
  const vin = rawVin.trim().toUpperCase();
  const url = `${VPIC_BASE}/DecodeVinValues/${encodeURIComponent(vin)}?format=json`;
  const res = await fetch(url, { headers: { Accept: 'application/json' } });
  if (!res.ok) {
    throw new Error(`NHTSA vPIC returned ${res.status}`);
  }
  const data = await res.json();
  const r = (data?.Results?.[0] ?? {}) as Record<string, unknown>;

  return {
    vin,
    modelYear: val(r.ModelYear),
    make: val(r.Make),
    model: val(r.Model),
    trim: val(r.Trim),
    series: val(r.Series),
    bodyClass: val(r.BodyClass),
    vehicleType: val(r.VehicleType),
    engineCylinders: val(r.EngineCylinders),
    displacementL: val(r.DisplacementL),
    fuelType: val(r.FuelTypePrimary),
    drivetrain: val(r.DriveType),
    transmission: val(r.TransmissionStyle),
    doors: val(r.Doors),
    plantCountry: val(r.PlantCountry),
    plantCity: val(r.PlantCity),
    manufacturer: val(r.Manufacturer),
    errorCode: val(r.ErrorCode),
    errorText: val(r.ErrorText),
  };
}

/** Best-effort open-recall lookup. Returns [] if year/make/model are missing. */
export async function getRecalls(
  modelYear: string | null,
  make: string | null,
  model: string | null
): Promise<RecallItem[]> {
  if (!modelYear || !make || !model) return [];
  const url =
    `${RECALLS_BASE}?make=${encodeURIComponent(make)}` +
    `&model=${encodeURIComponent(model)}&modelYear=${encodeURIComponent(modelYear)}`;
  try {
    const res = await fetch(url, { headers: { Accept: 'application/json' } });
    if (!res.ok) return [];
    const data = await res.json();
    const results = Array.isArray(data?.results) ? data.results : [];
    return results.map((x: Record<string, unknown>) => ({
      campaign: String(x.NHTSACampaignNumber ?? ''),
      component: String(x.Component ?? ''),
      summary: String(x.Summary ?? ''),
      consequence: String(x.Consequence ?? ''),
      remedy: String(x.Remedy ?? ''),
      reportDate: String(x.ReportReceivedDate ?? ''),
    }));
  } catch {
    return [];
  }
}
