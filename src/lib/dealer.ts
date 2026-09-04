/**
 * Who is selling a car on the marketplace, and what a buyer is owed when it
 * is a dealer.
 *
 * The "no dealers" positioning was retired 2026-09-04. Dealers list on the
 * same terms and at the same fee as private sellers; the difference is that a
 * dealer listing is marked as one and carries the disclosures below. One
 * file so the sell form, the listing page, the card badge and the admin
 * console all say the same thing.
 */
export type SellerType = 'private' | 'dealer';

export const SELLER_TYPES: { value: SellerType; label: string; hint: string }[] = [
  {
    value: 'private',
    label: 'Private owner',
    hint: 'You own the car and are selling it yourself.',
  },
  {
    value: 'dealer',
    label: 'Licensed dealer',
    hint: 'A dealership, consignment house or broker selling in the course of business.',
  },
];

export function normalizeSellerType(v: unknown): SellerType {
  return v === 'dealer' ? 'dealer' : 'private';
}

export function isDealer(v: unknown): boolean {
  return normalizeSellerType(v) === 'dealer';
}

/** Short badge label. */
export const DEALER_BADGE = 'Dealer';

/**
 * What appears on every dealer listing, above the seller's own fee note.
 * Plain statements of fact, not legal advice, and no promises on the
 * dealer's behalf.
 */
export const DEALER_DISCLOSURE: string[] = [
  'This car is offered by a licensed motor vehicle dealer, not a private owner.',
  'Fully Sorted is not a party to the sale. The contract, title transfer and any warranty are between you and the dealer.',
  'The asking price shown is the dealer’s advertised price. Documentation fees, dealer fees, sales tax, registration and delivery are set by the dealer and are not included unless the listing says so.',
  'In the United States the FTC Used Car Rule requires a dealer to display a Buyers Guide on the vehicle stating whether it is sold as-is or with a warranty. Ask for it before you agree to anything.',
  'Dealer licensing is regulated by the state. Verify the licence number with the issuing state before sending money.',
];

/** What the dealer agrees to at the sell step. Recorded with the listing. */
export const DEALER_ATTESTATION =
  'I confirm this vehicle is offered by a licensed dealer, that the business name and licence number above are accurate, and that the listing will be marked as a dealer listing with the disclosures Fully Sorted attaches to dealer sales.';
