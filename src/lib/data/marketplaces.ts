export interface MarketplaceFee {
  label: string;
  value: string;
  note?: string;
}

export interface Marketplace {
  slug: string;
  name: string;
  kind: 'online-auction' | 'live-auction' | 'classifieds' | 'aggregator';
  founded?: string;
  summary: string;
  bestFor: string;
  fees: MarketplaceFee[];
  reserveModel: string;
  buyerNotes: string[];
  sellerNotes: string[];
  sources: { title: string; url: string; publisher: string; retrieved: string }[];
}

export const MARKETPLACES: Marketplace[] = [
  {
    slug: 'bring-a-trailer',
    name: 'Bring a Trailer',
    kind: 'online-auction',
    summary:
      'Online-only auction platform running curated timed listings written by in-house auction specialists. Every listing carries a public comment thread that functions as the main due-diligence channel. Catalogue breadth runs from sub-$10,000 projects to seven-figure cars.',
    bestFor: 'Enthusiast and collector cars where an engaged comment thread adds price.',
    fees: [
      {
        label: "Buyer's fee",
        value: '5% of the winning bid, minimum $250, maximum $7,500',
        note:
          'Charged on top of the winning bid. The headline "Sold for" figure on a listing is the bid alone and excludes the fee, so a $100,000 result costs the buyer $105,000 before tax, title and transport.',
      },
      {
        label: "Buyer's fee, selected categories",
        value: '10% of the winning bid, minimum $250, maximum $4,000',
        note:
          'Applies to Motorcycles, Minibikes & Scooters, Parts and Automobilia, Wheels, ATVs, Go-Karts and Tractors.',
      },
      {
        label: "Buyer's fee outside the US",
        value: 'Capped at EUR 7,500 / GBP 6,000 at 5%, and EUR 4,000 / GBP 3,200 at 10%',
        note:
          "The cap follows the listing's location. VAT is added to BaT's fees where the buyer or seller is in the EU or UK.",
      },
      {
        label: 'Seller listing fee',
        value: '$99 Classic, or $429 Plus (Classic plus $330 of photography and video)',
        note:
          'BaT states this is the only fee a seller pays. White Glove submissions are quoted individually and no price is published.',
      },
    ],
    reserveModel:
      'Both reserve and no-reserve listings run. Reserve amounts are never published and BaT does not announce when a reserve has been met; no-reserve lots carry a yellow No Reserve tag. Sellers may lower a reserve during the auction. Where a reserve is not met, BaT opens a post-auction offer exchange between the seller and the high bidder.',
    buyerNotes: [
      'The fee is additive rather than deducted from seller proceeds. Budget the winning bid plus 5%, capped at $7,500, before tax, title and transport.',
      'Placing a bid authorises a hold on the card on file for the fee on that bid; bidding again triggers a second charge for the difference when the auction closes.',
      'The comment thread is the primary inspection record. Points raised in the closing minutes frequently go unanswered before the clock runs out.',
      'BaT is a venue, not a party to the sale. There is no published arbitration or purchase-protection scheme.',
    ],
    sellerNotes: [
      'The listing fee is charged only once a submission is accepted, and BaT states there is no seller commission on top of it.',
      'Listings must be exclusive to BaT for the duration of the auction, with other advertisements taken down.',
      'Sellers may not bid on their own listing.',
      'An assigned auction specialist writes the listing from seller-supplied information, records and photography.',
    ],
    sources: [
      {
        title: 'How BaT Works: How Our Fees Work',
        url: 'https://bringatrailer.com/how-bat-works/',
        publisher: 'Bring a Trailer',
        retrieved: '2026-08-22',
      },
      {
        title: 'BaT Frequently Asked Questions',
        url: 'https://bringatrailer.com/faq/',
        publisher: 'Bring a Trailer',
        retrieved: '2026-08-22',
      },
    ],
  },
  {
    slug: 'cars-and-bids',
    name: 'Cars & Bids',
    kind: 'online-auction',
    summary:
      'Online-only auction site weighted toward modern enthusiast cars, broadly 1980s onward. Listings are prepared in-house with a documented condition section. The catalogue is smaller than Bring a Trailer and skews to recent performance models.',
    bestFor: 'Modern and youngtimer performance cars rather than pre-war or vintage material.',
    fees: [
      {
        label: "Buyer's fee",
        value: '5% of the final purchase price, minimum $250, maximum $7,500',
        note: 'Charged in addition to the purchase price paid to the seller.',
      },
      {
        label: 'Seller listing fee',
        value: 'None',
        note:
          'Cars & Bids states that listing is free and that sellers receive 100% of the final sale price. Professional photography is an optional paid add-on and its price is not published in the FAQ.',
      },
    ],
    reserveModel:
      'Reserve and no-reserve listings both run, and reserves are not shown to bidders. A seller may lower a reserve during a live auction but cannot add one to a listing launched at no reserve. Where the top bid falls short, Cars & Bids states it may at its sole discretion pay the difference between the highest bid and the reserve; only the high bidder may negotiate after the auction.',
    buyerNotes: [
      'The fee sits on top of the sale price, on the same structure as Bring a Trailer, with the same $250 floor and $7,500 ceiling.',
      'The cap means the effective rate falls below 5% on any result above $150,000.',
      'The published FAQ sets out no formal buyer-protection or arbitration scheme.',
    ],
    sellerNotes: [
      "No listing fee and no seller commission; the buyer's fee is the platform's revenue on a sale.",
      'Cars & Bids states its own data shows no-reserve auctions draw more interest and stronger prices.',
      'A reserve can be lowered mid-auction but cannot be added after launch.',
    ],
    sources: [
      {
        title: 'Cars & Bids FAQ',
        url: 'https://carsandbids.com/faq',
        publisher: 'Cars & Bids',
        retrieved: '2026-08-22',
      },
    ],
  },
  {
    slug: 'pcarmarket',
    name: 'PCARMARKET',
    kind: 'online-auction',
    summary:
      'Online auction and classified marketplace built around Porsche and extending to other collector vehicles, luxury watches, parts and memorabilia. Timed auctions run at least seven to ten days alongside a fixed-price classified section branded MarketPlace.',
    bestFor: 'Porsche and air-cooled specialist material, plus watches and parts.',
    fees: [
      {
        label: "Buyer's fee, vehicles",
        value: '5% of the winning bid, minimum $500, maximum $7,500',
        note:
          'Added to the winning bid. The FAQ page still shows a $5,000 maximum with a parenthetical that it rises to $7,500 after 27 June 2025, while the How It Works page states $7,500 outright. Confirm the figure shown in the bid box.',
      },
      {
        label: "Buyer's fee, parts and memorabilia",
        value: '10% of the winning bid, with no minimum and no maximum',
      },
      {
        label: "Buyer's fee, luxury watches",
        value: '6% of the winning bid, capped at $3,000',
      },
      {
        label: 'Seller listing fee',
        value:
          '$99 for a reserve or no-reserve vehicle auction, $199 for MarketPlace Direct, $69 for parts and memorabilia',
        note:
          'MarketPlace Direct carries no additional charge if the car is later converted to a live auction at the seller request.',
      },
      {
        label: 'Race car seller fee',
        value: '5% of the winning bid or offer',
        note: "Race cars only: PCARMARKET states a seller's fee applies as well as the buyer's fee.",
      },
    ],
    reserveModel:
      'The seller chooses reserve or no reserve, with the reserve agreed with PCARMARKET and reducible by the seller once the auction is running. A reserve auction that ends short may move into a 48-hour period in which PCARMARKET negotiates between the seller and the highest bidders, and it reserves the right to accept an offer on the seller behalf at or above the reserve.',
    buyerNotes: [
      'The $500 minimum fee is twice the $250 floor used by Bring a Trailer and Cars & Bids, which matters most on inexpensive lots.',
      'Bidding authorises the card on file for 5%, 6% or 10% of the bid depending on category; the authorisation is released the next business day if the bid does not win.',
      'Minimum bid increments are $250 on vehicles and $25 on parts and memorabilia.',
    ],
    sellerNotes: [
      'The listing fee is charged when the listing is accepted, and PCARMARKET may charge the card on file once photography is scheduled.',
      'A service fee applies if a seller withdraws, sells outside the platform after the listing fee is collected, or abandons the auction.',
      'Initial auction periods run at least seven to ten days.',
    ],
    sources: [
      {
        title: 'PCARMARKET How It Works',
        url: 'https://www.pcarmarket.com/how-it-works',
        publisher: 'PCARMARKET',
        retrieved: '2026-08-22',
      },
      {
        title: 'PCARMARKET FAQ',
        url: 'https://www.pcarmarket.com/faq',
        publisher: 'PCARMARKET',
        retrieved: '2026-08-22',
      },
    ],
  },
  {
    slug: 'rm-sothebys',
    name: "RM Sotheby's",
    kind: 'live-auction',
    summary:
      'Live catalogue auction house operating a global sale calendar alongside online-only formats. Lots are researched, catalogued and given pre-sale estimates, and consignment is selective. The premium is tiered and varies by sale location.',
    bestFor: 'Higher-value, provenance-led cars where a catalogue and pre-sale estimate matter.',
    fees: [
      {
        label: "Buyer's premium, US sales",
        value: '12% on the first $250,000 of hammer, then 10% on the amount above',
        note: 'Applies to Scottsdale, Miami, Hershey and Monterey. Added to the hammer price.',
      },
      {
        label: "Buyer's premium, Paris, Monte Carlo and Milan",
        value: '15% on the first EUR 200,000, then 12.5% above, plus VAT on the premium',
      },
      {
        label: "Buyer's premium, London",
        value: '15% on the first GBP 200,000, then 12.5% above, plus VAT on the premium',
      },
      {
        label: "Buyer's premium, St. Moritz",
        value: '15% on the first CHF 200,000, then 12.5% above, plus VAT on the premium',
      },
      {
        label: "Buyer's premium, non-motor-car lots",
        value: '20% of hammer',
        note:
          'Covers memorabilia, motorcycles, boats, trailers, jewellery, clothing, parts, accessories, tools and engines.',
      },
      {
        label: 'Cryptocurrency surcharge',
        value: '1% of the total invoice',
        note: 'Applied to hammer plus premium plus any VAT when settling through BitPay.',
      },
      {
        label: 'Seller commission',
        value: 'Not published',
        note: "RM Sotheby's publishes no consignor commission schedule; terms are agreed per consignment.",
      },
    ],
    reserveModel:
      'Most catalogue lots carry a confidential reserve, with selected lots offered without reserve and identified in the catalogue. The premium percentage applying to a given lot is stated on the lot page under Additional Information.',
    buyerNotes: [
      'The Conditions of Business state that sales not listed in the premium clause carry the premium published for that particular auction, so check the specific sale.',
      'Payment is due in full by 5:00 p.m. EST/EDT on the next business day; purchases above $5,000 must be settled by wire unless agreed in advance.',
      'Late payment attracts interest at the US Prime Rate plus 4% for the first 60 days and Prime plus 8% thereafter.',
      "Online bidding carries no additional fee, but the standard buyer's premium still applies.",
    ],
    sellerNotes: [
      'Consignment terms, including commission and any guarantee, are negotiated individually and are not published.',
      "Catalogue estimates exclude the buyer's premium and all taxes.",
      'Each sale is conducted and settled in the currency of its location.',
    ],
    sources: [
      {
        title: 'The Hershey Auction 2026: Conditions of Business',
        url: 'https://rmsothebys.com/auctions/hf26/',
        publisher: "RM Sotheby's",
        retrieved: '2026-08-22',
      },
      {
        title: "RM Sotheby's FAQ",
        url: 'https://rmsothebys.com/faq',
        publisher: "RM Sotheby's",
        retrieved: '2026-08-22',
      },
    ],
  },
  {
    slug: 'gooding',
    name: "Gooding Christie's",
    kind: 'live-auction',
    summary:
      "Live catalogue auction house, founded as Gooding & Company and now trading as Gooding Christie's, running a small number of marquee sale weekends a year plus online-only auctions. Catalogues are heavily researched and consignment is tightly curated.",
    bestFor: 'Blue-chip and concours-level cars offered at marquee sale weekends.',
    fees: [
      {
        label: "Buyer's premium, US live auctions, vehicle lots",
        value: '12% on the first $250,000 of the final bid price, then 10% on the remainder',
      },
      {
        label: "Buyer's premium, online-only auctions, vehicle lots",
        value: '10% of the final bid price',
      },
      {
        label: "Buyer's premium, automobilia lots",
        value: '25% of the final bid price',
      },
      {
        label: 'Seller commission',
        value: 'Not published',
        note: 'No consignor commission schedule appears in the published Conditions of Sale.',
      },
    ],
    reserveModel:
      'Lots are offered subject to reserve unless the catalogue states otherwise. The Conditions of Sale define the winning bid as the final bid price, displayed on the lot page as "Purchased For", and state expressly that the premium is in addition to that figure.',
    buyerNotes: [
      "Catalogue estimates exclude the buyer's premium and all taxes, and the house disclaims reliance on them.",
      'The online-only rate of 10% is flat with no tier, so an online lot above $250,000 carries a lower premium than the same car in a live sale.',
      "Gooding Christie's limits its own liability to the buyer's premium paid on the lot, or to registration fees where no premium was paid.",
      'Risk of loss passes to the buyer at the fall of the hammer.',
    ],
    sellerNotes: [
      'Consignment is selective and commission terms are agreed privately.',
      'A current title in the current owner name is required, or a valid bill of sale disclosed in advance so it can be stated in the catalogue.',
      'Overseas consignments are accepted on whatever title document is valid in that country.',
    ],
    sources: [
      {
        title: "Gooding Christie's Conditions of Sale",
        url: 'https://www.goodingco.com/terms',
        publisher: "Gooding Christie's",
        retrieved: '2026-08-22',
      },
      {
        title: "Gooding Christie's FAQ",
        url: 'https://www.goodingco.com/faq/',
        publisher: "Gooding Christie's",
        retrieved: '2026-08-22',
      },
    ],
  },
  {
    slug: 'bonhams-cars',
    name: 'Bonhams|Cars',
    kind: 'live-auction',
    summary:
      "The motoring arm of Bonhams, running live catalogue sales in the US, UK and Europe. A separately branded online platform at carsonline.bonhams.com, previously The Market, runs timed online auctions on an entirely different fee model with no buyer's fee.",
    bestFor: 'Live catalogue sales in the UK and Europe, plus lower-value online sales through Cars Online.',
    fees: [
      {
        label: "Buyer's premium, US motor cars",
        value: '12% on the first $250,000 of the bid price, then 10% on the amount above',
        note: 'Automobilia is excluded and falls under the general Bonhams category rates.',
      },
      {
        label: "Buyer's premium, UK motor cars and motorcycles",
        value: '15% on the first GBP 500,000 of hammer, then 12% on the excess',
        note: 'VAT at 20% is added to the premium itself.',
      },
      {
        label: "Buyer's premium, US motorcycles",
        value: '15% on the first $100,000 of hammer, then 10% on the excess',
      },
      {
        label: 'General Bonhams categories, for comparison',
        value: 'US and UK: 28%, then 27%, then 21%, then 14.5% across rising hammer bands',
        note:
          'These are the rates for Bonhams sale categories other than motor cars, motorcycles and a few others. Motoring lots are charged well below the house standard.',
      },
      {
        label: "Cars Online buyer's fee",
        value: 'None; the buyer pays the hammer price only',
        note:
          'A non-refundable deposit of 7% of the hammer price, plus VAT for UK and European buyers, is debited automatically when the auction ends.',
      },
      {
        label: 'Cars Online seller fee',
        value: '7% of hammer plus VAT, capped at GBP 7,000',
        note:
          'A concierge fee of GBP 695 plus VAT is payable before the auction where the car is displayed at the platform Oxfordshire premises.',
      },
      {
        label: 'Live-sale seller commission',
        value: 'Not published',
      },
    ],
    reserveModel:
      'Live catalogue lots carry confidential reserves unless offered without reserve. On Cars Online, reserves are agreed with the seller and bidders are told when a reserve is close to being met or has been met; a reserve is generally not applied to a vehicle expected to make under GBP 10,000. Unsold Cars Online lots may be carried for a limited period at a buy-it-now price.',
    buyerNotes: [
      'The motor car premium is far below the general Bonhams rates, which open at 28% in both the US and UK.',
      'UK buyers pay VAT at 20% on the premium itself, separate from any VAT on the car.',
      "On Cars Online there is no buyer's fee, but the 7% deposit is taken immediately at auction end and is non-refundable.",
      'UK and EU consumers buying from a trade seller on Cars Online have a 14-day statutory right to cancel from collection; this does not apply to private-seller purchases.',
    ],
    sellerNotes: [
      'Live-sale consignment commission is agreed per lot and is not published.',
      'Cars Online charges 7% of hammer plus VAT, capped at GBP 7,000, on top of the GBP 695 plus VAT concierge fee.',
      'The Cars Online cap means the seller marginal cost falls to zero above a GBP 100,000 hammer.',
    ],
    sources: [
      {
        title: "Buyer's premium, United States",
        url: 'https://www.bonhams.com/how-to-buy/buyers-premium-united-states/',
        publisher: 'Bonhams',
        retrieved: '2026-08-22',
      },
      {
        title: "Buyer's premium, United Kingdom",
        url: 'https://www.bonhams.com/how-to-buy/buyers-premium-united-kingdom/',
        publisher: 'Bonhams',
        retrieved: '2026-08-22',
      },
      {
        title: 'Bonhams Cars Online FAQ',
        url: 'https://carsonline.bonhams.com/faq',
        publisher: 'Bonhams|Cars',
        retrieved: '2026-08-22',
      },
      {
        title: 'Sell Your Classic Car',
        url: 'https://carsonline.bonhams.com/sell-your-classic-car',
        publisher: 'Bonhams|Cars',
        retrieved: '2026-08-22',
      },
    ],
  },
  {
    slug: 'mecum',
    name: 'Mecum Auctions',
    kind: 'live-auction',
    summary:
      'High-volume live auction operator running multi-day sales with thousands of vehicle lots plus a Road Art memorabilia category. Lots cross the block quickly and are sold as-is, where-is with no warranty of any kind.',
    bestFor: 'Volume American muscle, trucks and mid-market collector cars.',
    fees: [
      {
        label: "Buyer's premium, cars and motorcycles bid in person",
        value: '10% of hammer',
        note: 'Minimum premium of $1,000 on vehicles and $500 on motorcycles.',
      },
      {
        label: "Buyer's premium, cars and motorcycles bid by telephone or internet",
        value: '12% of hammer',
        note: 'Bidding remotely costs two percentage points more than bidding in the room.',
      },
      {
        label: "Buyer's premium, Road Art",
        value: '20% in person, 22% by telephone or internet',
      },
      {
        label: 'Seller entry fee',
        value: '$350 to $1,000, non-refundable',
        note: 'Varies with the day and time slot allocated. Selling at no reserve halves the entry fee.',
      },
      {
        label: 'Seller commission',
        value: '6% at no reserve, 10% with a reserve',
        note: 'Charged only if the lot sells.',
      },
      {
        label: 'Road Art seller fees',
        value: '$100 entry at no reserve or $250 with reserve, plus 20% commission with a $200 minimum per lot',
      },
      {
        label: 'Credit card deposit',
        value: '3% non-refundable processing fee',
      },
    ],
    reserveModel:
      'Both reserve and no-reserve consignments are accepted across all value ranges, with multiple entry positions. No reserve halves the entry fee and cuts commission from 10% to 6%, the clearest published incentive to drop a reserve among the major houses.',
    buyerNotes: [
      'Bidding online or by telephone costs 12% rather than the 10% charged in the room; on a $50,000 hammer that is $1,000 more.',
      'The $1,000 minimum premium on vehicles makes the effective rate 20% on a $5,000 car.',
      'Mecum offers no warranties; every lot sells as-is, where-is and pre-sale inspection is the buyer responsibility.',
      'Pre-bidding with proxy maximums is available on most lots.',
    ],
    sellerNotes: [
      'Entry fees are non-refundable whether or not the vehicle sells.',
      'No reserve halves the entry fee and cuts commission by four percentage points.',
      'Lot placement by day and time drives the entry fee and is the main negotiating variable.',
    ],
    sources: [
      {
        title: 'Mecum Auctions FAQ',
        url: 'https://www.mecum.com/faq/',
        publisher: 'Mecum Auctions',
        retrieved: '2026-08-22',
      },
    ],
  },
  {
    slug: 'barrett-jackson',
    name: 'Barrett-Jackson',
    kind: 'live-auction',
    summary:
      'Live auction operator best known for no-reserve sales staged as televised events, with Scottsdale as the flagship. Reserve consignments are accepted only above published value thresholds. Fee figures sit in the bidder and consignment agreements rather than on the public site.',
    bestFor: 'No-reserve sales of American muscle, restomods and trucks in front of a broadcast audience.',
    fees: [
      {
        label: "Buyer's premium",
        value: 'Not published',
        note:
          "Barrett-Jackson states no buyer's premium percentage on its public bidder or consignment pages. Confirm the figure in the bidder agreement before registering.",
      },
      {
        label: 'Bidder registration fee',
        value: 'Not published; non-refundable',
        note:
          'The site confirms the fee exists and that early registration attracts a reduced rate, but publishes neither amount.',
      },
      {
        label: 'Seller entry fee',
        value: 'Not published',
        note:
          'Stated to vary with the day and time the lot is scheduled, and to include display space. No amounts are given.',
      },
      {
        label: 'Seller commission',
        value: 'Not published; a percentage of hammer',
        note: 'Described only as a commission based on the hammer price.',
      },
      {
        label: 'Consignor withdrawal',
        value: '$3,750 in liquidated damages',
        note: 'Set out on the preliminary consignment request form.',
      },
    ],
    reserveModel:
      'Predominantly no reserve. Reserve placement is considered only for vehicles with an agreed estimated value of $500,000 or more at Scottsdale, or $150,000 or more at Palm Beach, Columbus and Las Vegas, and those thresholds are stated to be subject to change.',
    buyerNotes: [
      'Bidding requires registration, a non-refundable fee and an approved method of payment such as a bank letter of guarantee, bidding collateral or approved financing.',
      'Pre-bidding with proxy maximums is available for vehicles and automobilia.',
      "Because no fee figures are published, the buyer's premium has to be confirmed from the bidder agreement during registration.",
    ],
    sellerNotes: [
      'The published reserve thresholds mean most consignments below $150,000 will run at no reserve.',
      'Withdrawing a consigned vehicle carries $3,750 in liquidated damages under the preliminary consignment request form.',
      'Entry fee bands are tied to the day and time slot allocated to the lot.',
    ],
    sources: [
      {
        title: 'Consignment',
        url: 'https://www.barrett-jackson.com/consignment',
        publisher: 'Barrett-Jackson',
        retrieved: '2026-08-22',
      },
      {
        title: 'Bidders',
        url: 'https://www.barrett-jackson.com/bidders',
        publisher: 'Barrett-Jackson',
        retrieved: '2026-08-22',
      },
    ],
  },
  {
    slug: 'broad-arrow',
    name: 'Broad Arrow Auctions',
    kind: 'live-auction',
    summary:
      'Live catalogue auction house within the Broad Arrow Group, running sales in the US and Europe alongside a private sales business and a finance arm. Premium and registration terms are published per event rather than as a single house schedule.',
    bestFor: 'Mid-to-high-value catalogue consignments at concours-linked events.',
    fees: [
      {
        label: "Buyer's premium, motor car lots",
        value: '12% of the first $250,000 of hammer, then 10% of the amount above',
        note:
          'As published for The Las Vegas Auction 2026. Broad Arrow states premium terms per event, so check the specific sale.',
      },
      {
        label: "Buyer's premium, automobilia and non-motor-car lots",
        value: '25% of hammer',
      },
      {
        label: 'Bidder registration',
        value: '$200 for in-person bidding; telephone, absentee and internet bidding are complimentary',
        note:
          'The in-person fee includes admission for two, a bidder paddle and a catalogue. Registration fees are non-refundable and vary by auction location and type.',
      },
      {
        label: 'Seller commission',
        value: 'Not published as a percentage',
        note:
          'Broad Arrow states the commission is typically a percentage of the final hammer price, and that an auction marketing fee also applies and varies by auction.',
      },
    ],
    reserveModel:
      'Catalogue lots are offered with or without reserve on terms agreed at consignment. Broad Arrow publishes no house-wide reserve policy; premium, registration and reserve terms are stated on each event page and in that event Conditions of Sale.',
    buyerNotes: [
      "The motor car premium matches the RM Sotheby's and Gooding Christie's US structure at 12% and 10% either side of $250,000.",
      'Remote bidding is free while in-person bidding costs $200, the reverse of the Mecum incentive.',
      'Registration is required for each auction, and documentation and payment methods must be re-verified each time.',
      'Automobilia is charged at 25%, more than double the motor car rate.',
    ],
    sellerNotes: [
      'In addition to commission, Broad Arrow lists an auction marketing fee that varies by auction.',
      'Commission is calculated on the hammer price, not on the buyer total.',
      'Terms are set per event, so the relevant figures are those in the specific sale Conditions of Sale.',
    ],
    sources: [
      {
        title: 'The Las Vegas Auction 2026: Buyers Premium and Bidder Registration',
        url: 'https://www.broadarrowauctions.com/events/event/The%20Las%20Vegas%20Auction%202026',
        publisher: 'Broad Arrow Auctions',
        retrieved: '2026-08-22',
      },
      {
        title: 'Broad Arrow Auctions FAQ',
        url: 'https://www.broadarrowauctions.com/faq',
        publisher: 'Broad Arrow Auctions',
        retrieved: '2026-08-22',
      },
    ],
  },
  {
    slug: 'hemmings',
    name: 'Hemmings',
    kind: 'online-auction',
    summary:
      'Long-running collector-car classifieds business that added a curated online auction platform. Vehicles are vetted by a listing specialist before going live, and the classifieds and Make Offer products sit alongside the auction on the same marketplace.',
    bestFor: 'Mid-market American classics, and sellers who want a low flat cost with no commission.',
    fees: [
      {
        label: "Buyer's fee, auctions",
        value: '5% of the purchase price, capped at $10,000',
        note:
          'No minimum is published. The cap is higher than the $7,500 used by Bring a Trailer and Cars & Bids, so the fee keeps rising until a $200,000 result.',
      },
      {
        label: 'Seller listing fee, auctions',
        value: '$99.95',
        note: 'Hemmings states sellers keep 100% of the sale price and pay no commission.',
      },
      {
        label: 'Seller cancellation fee',
        value: '$1,000 on a reserve listing, $500 on a no-reserve listing',
        note:
          'Payable if the seller cancels for any reason, including before the vehicle is listed and before any offer has been made.',
      },
      {
        label: 'Classifieds and Make Offer',
        value: 'Priced by package, selected during the listing flow',
        note:
          'Hemmings publishes no single classifieds rate card; package prices appear in the listing bundle picker. Make Offer sellers retain 100% of the sale price.',
      },
    ],
    reserveModel:
      'Hemmings researches each vehicle and then recommends either a specific reserve or no reserve, which the seller accepts or declines. Once accepted, the cancellation fee attaches. A seller may reduce or waive the reserve during the auction by notifying Hemmings, and once a bid meets or exceeds the reserve the lot is sold.',
    buyerNotes: [
      'The 5% fee becomes binding as soon as a bid or offer is accepted, and is charged to the card on file whether or not the buyer completes the purchase.',
      'The $10,000 cap means the fee does not flatten until $200,000, unlike the $7,500 caps used elsewhere.',
      'Hemmings states it acts only as a venue: the contract is between buyer and seller, and disputes are to be resolved directly between them.',
      'Hemmings recommends an in-person inspection and disclaims responsibility for third-party inspection services.',
    ],
    sellerNotes: [
      'A flat $99.95 with no commission is the lowest published all-in seller cost among the curated online auction platforms.',
      'Cancellation fees of $1,000 with a reserve or $500 at no reserve attach as soon as the reserve recommendation is accepted.',
      "Taking a buyer off-platform can make the seller liable for the buyer's fee even if the car does not sell.",
    ],
    sources: [
      {
        title: 'Why Hemmings: Fee Structure',
        url: 'https://www.hemmings.com/auctions/why-hemmings',
        publisher: 'Hemmings',
        retrieved: '2026-08-22',
      },
      {
        title: 'Hemmings Auctions User Agreement',
        url: 'https://www.hemmings.com/auctions/user-agreement',
        publisher: 'Hemmings',
        retrieved: '2026-08-22',
      },
    ],
  },
  {
    slug: 'classic-com',
    name: 'CLASSIC.COM',
    kind: 'aggregator',
    summary:
      'Search engine and price database for collector vehicles that aggregates listings and results from auction houses, dealers and private sellers, and publishes market indices built from recorded sale prices. It runs no auctions and is not a party to any sale.',
    bestFor: 'Checking comparable sale prices and tracking a model market before bidding elsewhere.',
    fees: [
      {
        label: "Buyer's fee",
        value: 'None',
        note:
          'CLASSIC.COM runs no auctions and takes no buyer-side fee. A click-through sends the buyer to the venue that does charge one.',
      },
      {
        label: 'Private seller listing',
        value: '$49, running until the car sells',
      },
      {
        label: 'CLASSIC Insider subscription',
        value:
          'Free tier at $0; Advanced at $99 per month, discounted to $49 per month under an introductory offer running to 31 October 2026',
        note:
          'Annual billing is stated to save up to 15%. The Advanced tier unlocks historical prices, full comparable sales and advanced charts.',
      },
      {
        label: 'Pro tier for dealers and businesses',
        value: 'Custom pricing',
        note: 'Covers inventory inclusion and professional pricing tools; no rate card is published.',
      },
    ],
    reserveModel:
      'Not applicable. CLASSIC.COM hosts fixed-price private and dealer listings and links out to third-party auctions, so reserve terms are set by whichever venue runs the sale.',
    buyerNotes: [
      'The product is the sold-price database rather than the transaction; comparables and historical pricing sit behind the paid Advanced tier.',
      "Results are aggregated as each venue reports them, so check whether a given headline figure includes that venue's buyer fee before using it as a comparable.",
      'Because CLASSIC.COM is not a party to any sale, it offers no buyer protection or dispute process.',
    ],
    sellerNotes: [
      'A private listing is a flat $49 and runs until the car sells, with no commission on the sale.',
      'Dealers and auction houses feed inventory in under the Pro tier at negotiated pricing.',
      'A listing here buys advertising reach, not a managed sale process.',
    ],
    sources: [
      {
        title: 'Sell your car with CLASSIC.COM',
        url: 'https://www.classic.com/sell',
        publisher: 'CLASSIC.COM',
        retrieved: '2026-08-22',
      },
      {
        title: 'About CLASSIC.COM and CLASSIC Insider pricing',
        url: 'https://www.classic.com/about',
        publisher: 'CLASSIC.COM',
        retrieved: '2026-08-22',
      },
    ],
  },
  {
    slug: 'ebay-motors',
    name: 'eBay Motors',
    kind: 'online-auction',
    summary:
      'General marketplace with a dedicated vehicles category running both auction and fixed-price listings. Listings are written by sellers with no editorial vetting, and the range runs from parts-grade projects to six-figure cars. The seller pays a flat listing fee and there is no final value fee on vehicles.',
    bestFor: 'Project cars, parts-grade vehicles and private-party sales where curation is not needed.',
    fees: [
      {
        label: "Buyer's fee",
        value: 'None',
        note: 'The buyer pays the winning bid or purchase price. eBay charges the seller instead.',
      },
      {
        label: 'Seller listing fee, vehicles over $15,000',
        value: '$79 per listing',
        note:
          'All-inclusive package fee, charged at listing or relisting and non-refundable. For auctions the price band is set by the highest of the starting bid, reserve price or Buy It Now price.',
      },
      {
        label: 'Seller listing fee, vehicles $15,000 or less',
        value: '$34 per listing',
      },
      {
        label: 'Final value fee',
        value: 'None on vehicles',
      },
      {
        label: 'Deposit processing fee',
        value: '2.8% of the deposit amount',
        note:
          'Charged to the seller when the vehicle sells and the buyer pays a deposit at checkout; deducted from the deposit before payout.',
      },
    ],
    reserveModel:
      'Sellers may run auction listings with or without a reserve, or list at a fixed Buy It Now price. Under the current all-inclusive fee there is no separate reserve fee, but a reserve price counts toward the listing price band that sets the fee.',
    buyerNotes: [
      'There is no buyer premium, so an eBay result is directly comparable with a hammer price but not with a Bring a Trailer or Cars & Bids "Sold for" plus fee.',
      'Vehicles are excluded from the eBay Money Back Guarantee and covered instead by Vehicle Purchase Protection, which addresses fraud, title issues and undisclosed defects up to $500,000 per transaction.',
      'The $500,000 limit applies to transactions from 1 August 2026; earlier transactions were capped at $100,000 and excluded damage or mileage misrepresentation on vehicles ten model years or older.',
      'Protection requires the purchase to be completed through eBay Secure Purchase where that is offered, and reimbursement is secondary to any other avenue of recovery.',
    ],
    sellerNotes: [
      'A flat $79 above $15,000, or $34 at or below it, buys the listing outright with no commission on the sale.',
      'Listing fees are charged per listing and per relist and are non-refundable whether or not the vehicle sells.',
      'Listings are unvetted, so presentation, documentation and disclosure are entirely the seller responsibility.',
    ],
    sources: [
      {
        title: 'Fees for selling vehicles on eBay Motors',
        url: 'https://www.ebay.com/help/selling/fees-credits-invoices/selling-fees-vehicles?id=4127',
        publisher: 'eBay',
        retrieved: '2026-08-22',
      },
      {
        title: 'Vehicle Purchase Protection',
        url: 'https://pages.motors.ebay.com/buy/purchase-protection/index.html',
        publisher: 'eBay Motors',
        retrieved: '2026-08-22',
      },
      {
        title: 'eBay Money Back Guarantee policy, motor vehicles excluded',
        url: 'https://www.ebay.com/help/policies/ebay-money-back-guarantee-policy/ebay-vehicle-purchase-protection-program?id=4210',
        publisher: 'eBay',
        retrieved: '2026-08-22',
      },
    ],
  },
];

export const MARKETPLACE_DATA_RETRIEVED = '2026-08-22';
