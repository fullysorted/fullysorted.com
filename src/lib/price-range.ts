/**
 * The "$" to "$$$$" tier a provider picks for itself on the apply form and
 * the dashboard. It is self-reported and relative, never a quote, so every
 * place it shows gets the same one-line explanation on hover.
 */
const WORDS: Record<string, string> = {
  '$': 'budget',
  '$$': 'mid-range',
  '$$$': 'premium',
  '$$$$': 'top end',
};

export function priceRangeTitle(range: string | null | undefined): string | undefined {
  if (!range) return undefined;
  const word = WORDS[range];
  return word
    ? `Price range ${range} of $$$$ (${word}). The shop's own read on where its prices sit, not a quote.`
    : "The shop's own read on where its prices sit, not a quote.";
}

/** One-line key for the directory header. */
export const PRICE_RANGE_KEY = '$ to $$$$ is each shop’s own read on its prices, budget to top end.';
