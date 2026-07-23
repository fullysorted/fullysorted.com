/**
 * Central affiliate configuration.
 *
 * Set NEXT_PUBLIC_AMAZON_TAG in the environment (e.g. Vercel project settings)
 * once your Amazon Associates account is approved — no code change needed, every
 * link picks it up on the next deploy. Until it's set, links still work (they
 * just don't earn a commission), so nothing is ever broken on the page.
 */
export const AMAZON_TAG = (process.env.NEXT_PUBLIC_AMAZON_TAG || "").trim();

export const AFFILIATE_DISCLOSURE =
  "Some links here are affiliate links: Fully Sorted may earn a small commission on qualifying purchases, at no extra cost to you. We only list gear we'd genuinely put in our own garage.";

const AMAZON = "https://www.amazon.com";

function withTag(url: string): string {
  if (!AMAZON_TAG) return url;
  const sep = url.includes("?") ? "&" : "?";
  return `${url}${sep}tag=${encodeURIComponent(AMAZON_TAG)}`;
}

export function amazonSearchLink(keywords: string): string {
  return withTag(`${AMAZON}/s?k=${encodeURIComponent(keywords)}`);
}

export function amazonProductLink(asin: string): string {
  return withTag(`${AMAZON}/dp/${encodeURIComponent(asin)}`);
}

export type Merchant = "amazon" | "retailer" | "auction" | "ebay";

export interface AffiliateItem {
  merchant: Merchant;
  name: string;
  asin?: string;         // pin a specific Amazon product (optional)
  amazonSearch?: string; // otherwise, an Amazon search keyword
  url?: string;          // explicit affiliate URL for a specialist retailer / auction referral
}

/** Resolve the outbound link for an item. An explicit `url` (a specialist or
 *  auction affiliate link you configure) always wins; otherwise we build an
 *  Amazon link so nothing is ever a dead end. */
export function affiliateHref(item: AffiliateItem): string {
  if (item.url) return item.url;
  if (item.asin) return amazonProductLink(item.asin);
  return amazonSearchLink(item.amazonSearch || item.name);
}

export function merchantLabel(m: Merchant): string {
  switch (m) {
    case "amazon": return "Amazon";
    case "ebay": return "eBay";
    case "auction": return "Partner";
    case "retailer": return "Specialist";
    default: return "";
  }
}
