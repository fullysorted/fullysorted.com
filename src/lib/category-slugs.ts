/**
 * Trade key to its owner-facing page slug (/services/category/{slug}).
 * Lives on its own so client components can link to a trade page without
 * pulling all of the page copy in lib/data/categoryPages.ts into the browser.
 * categoryPages.ts reads its slugs from here, so there is one list.
 */
export const CATEGORY_SLUGS: Record<string, string> = {
  inspection: 'pre-purchase-inspection',
  transport: 'enclosed-car-transport',
  titling: 'title-and-registration',
  mechanical: 'classic-car-mechanic',
  bodywork: 'classic-car-body-and-paint',
  restoration: 'classic-car-restoration',
  upholstery: 'classic-car-upholstery',
  detailing: 'classic-car-detailing',
  storage: 'collector-car-storage',
  photography: 'collector-car-photography',
};

/** Where a trade tile or suggestion should land: the trade's own page, or the filtered directory when it has none. */
export function tradeHref(key: string): string {
  const slug = CATEGORY_SLUGS[key];
  return slug ? `/services/category/${slug}` : `/services?type=${encodeURIComponent(key)}`;
}
