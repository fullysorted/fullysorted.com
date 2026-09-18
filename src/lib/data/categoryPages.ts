/**
 * Owner-facing landing pages, one per trade: /services/category/{slug}.
 *
 * The directory is a client-side filter, so until these existed there was no
 * indexable page answering "collector car pre-purchase inspection" or "classic
 * car transport". Each page explains the job in plain terms, lists the
 * specialists currently in that category, and answers the questions an owner
 * actually asks.
 *
 * COPY RULES that apply here: no prices (we have no minimum-n data to quote),
 * no "vetted" or "verified", no em dashes, no first person singular.
 */
import type { ServiceCategoryKey } from '@/lib/service-categories';

export interface CategoryPageCopy {
  key: ServiceCategoryKey;
  slug: string;
  /** H1 and title stem. What an owner would type. */
  heading: string;
  metaDescription: string;
  intro: string[];
  ask: string[];
  faqs: { q: string; a: string }[];
}

export const CATEGORY_PAGES: CategoryPageCopy[] = [
  {
    key: 'inspection',
    slug: 'pre-purchase-inspection',
    heading: 'Collector Car Pre-Purchase Inspection',
    metaDescription:
      'Find a pre-purchase inspection specialist for a collector car. What a proper PPI covers, what to ask before you book, and inspectors reviewed by real owners.',
    intro: [
      'A pre-purchase inspection is an independent look at a car before the money moves. On a collector car it matters more than on a modern one, because the expensive problems are the ones a seller does not photograph: rust under fresh undercoating, a non-original engine, filler under good paint, a tired gearbox that behaves for a ten minute drive.',
      'A useful inspection is done by someone who knows the model, not just cars in general. It should end with a written report and photos you can read from another state, because most collector cars are bought at a distance.',
    ],
    ask: [
      'Have you inspected this model before, and what do you check on it that you would not on another car?',
      'Does the inspection include a compression or leak-down test, a paint meter reading on every panel, and the car on a lift?',
      'Will you confirm the chassis, engine and gearbox numbers against the title and the factory pattern?',
      'What does the report look like, how many photos, and how soon after the visit does it arrive?',
    ],
    faqs: [
      { q: 'Is a pre-purchase inspection worth it on a collector car?', a: 'Yes, for almost any car bought unseen or from a seller you do not know. The inspection fee is small against the cost of one hidden problem such as structural rust, a replaced engine or accident repair, and the report is also leverage in the price conversation.' },
      { q: 'Who should arrange the inspection, the buyer or the seller?', a: 'The buyer. The inspector works for whoever pays, and an inspection arranged by the seller answers the seller\'s questions. A reasonable seller will make the car available to an inspector the buyer chooses.' },
      { q: 'Can an inspection be done if the car is in another state?', a: 'Yes. That is the normal case. The inspector travels to the car or the car goes to a nearby shop with a lift, and the buyer gets a written report with photos and usually a phone call.' },
    ],
  },
  {
    key: 'transport',
    slug: 'enclosed-car-transport',
    heading: 'Collector Car Transport',
    metaDescription:
      'Find enclosed transport for a collector car. Open versus enclosed, carrier versus broker, insurance questions to ask, and transporters reviewed by real owners.',
    intro: [
      'Moving a collector car is mostly a question of who is actually driving the truck. A broker sells the job on to whichever carrier takes it; a carrier owns the truck and loads the car personally. Both can work, but the owner should know which one is being hired.',
      'Enclosed transport keeps weather, road debris and curious eyes off the car, and is the usual choice for anything with fresh paint, low ground clearance or real value. Open transport is cheaper and fine for a driver-quality car on a short run.',
    ],
    ask: [
      'Are you the carrier or a broker, and whose name is on the cargo insurance certificate?',
      'What is the cargo coverage per vehicle, and does it cover agreed value or actual cash value?',
      'Is loading by liftgate or ramps, and how do you handle a low car or one that does not run?',
      'Is the quote door to door, and what is the realistic pickup window rather than the optimistic one?',
    ],
    faqs: [
      { q: 'Should a collector car ship enclosed or open?', a: 'Enclosed for anything with valuable paint, a soft top, low clearance or a long winter route. Open is reasonable for a sound driver on a shorter trip in fair weather. The price gap is real, so it is a judgment about the car, not a rule.' },
      { q: 'What is the difference between a transport broker and a carrier?', a: 'A carrier owns the truck and moves the car. A broker takes the booking and assigns it to a carrier. Brokers offer reach and scheduling; carriers offer one accountable person. Ask which one is quoting, and ask for the carrier\'s insurance certificate either way.' },
      { q: 'Does my own insurance cover the car in transit?', a: 'Often, but not always, and the terms vary. Check with the collector car insurer before the truck arrives, and photograph the car thoroughly at pickup so condition is documented on the bill of lading.' },
    ],
  },
  {
    key: 'titling',
    slug: 'title-and-registration',
    heading: 'Collector Car Title and Registration Help',
    metaDescription:
      'Find help with collector car titles and registration: lost titles, bonded titles, out-of-state and imported cars, and number mismatches. Specialists reviewed by real owners.',
    intro: [
      'Paperwork stops more collector car deals than rust does. Barn finds with no title, cars last registered decades ago, imports with foreign documents, and chassis numbers that do not match what the state has on file are all ordinary problems with known routes through them.',
      'A title and registration specialist knows the route for a given state and gets the file through without the owner spending days in line. The rules differ by state, so the first question is always where the car will be registered.',
    ],
    ask: [
      'Which states do you file in, and have you handled this exact situation in mine?',
      'What documents do you need from me before you start, and which can you obtain yourself?',
      'If the number on the car does not match the paperwork, what is the process and who inspects it?',
      'What is the realistic timeline, and what could make it longer?',
    ],
    faqs: [
      { q: 'Can a collector car with no title be registered?', a: 'Usually yes, but the route depends on the state. Common paths are a bonded title, a court-ordered title, or registration on a bill of sale for vehicles over a certain age. A specialist will know which applies and what evidence of ownership is needed.' },
      { q: 'What paperwork does an imported car need?', a: 'At minimum the customs entry documents, proof of ownership from the country of origin, and whatever the state asks for on top. Cars over 25 years old are exempt from federal safety standards, which simplifies import but does not replace state titling.' },
      { q: 'What if the VIN on the car does not match the title?', a: 'Stop and sort it out before buying if possible. Mismatches are often clerical, especially on older cars titled by engine number, but they need a state inspection and a corrected title. Buying first and fixing later is the expensive order.' },
    ],
  },
  {
    key: 'mechanical',
    slug: 'classic-car-mechanic',
    heading: 'Classic and Collector Car Mechanics',
    metaDescription:
      'Find a mechanic who knows your collector car. How to choose a marque specialist, what to ask before dropping off the keys, and shops reviewed by real owners.',
    intro: [
      'The difference between a general repair shop and a specialist is pattern recognition. Someone who has done forty of the same engine knows which noise is normal, which part fails next, and which supplier sells the version that fits. That knowledge is what the labor rate is paying for.',
      'The best fit is usually a shop that works on the marque, or at least the era and country. Carburetors, mechanical fuel injection, points ignition and early electronic systems are each their own trade.',
    ],
    ask: [
      'How many of this model or engine have you worked on, and what do they usually need?',
      'Do you source parts, and do you tell the owner when a part is reproduction, used or new old stock?',
      'How do you handle estimates when the job grows once things are apart?',
      'Do you document the work with photos and an itemized invoice the next owner can read?',
    ],
    faqs: [
      { q: 'How do I find a mechanic for an older or unusual car?', a: 'Start with the marque. Shops that specialize in a make or era have the tools, the parts contacts and the experience. Owner reviews from people with the same car are worth more than general ratings, and the local marque club usually knows who is good.' },
      { q: 'Should a collector car go to a dealer or an independent?', a: 'For most cars over twenty years old, an independent specialist. Franchised dealers are set up for current models, and the technicians who knew the older cars have often moved to independent shops.' },
      { q: 'Why does service history matter so much on a collector car?', a: 'Because it is the evidence. A documented record of what was done, when and by whom is what separates a sorted car from one that merely runs, and it follows the car to the next owner.' },
    ],
  },
  {
    key: 'bodywork',
    slug: 'classic-car-body-and-paint',
    heading: 'Collector Car Body and Paint Shops',
    metaDescription:
      'Find a body and paint shop for a collector car. Metalwork versus filler, original colors, realistic timelines, and shops reviewed by real owners.',
    intro: [
      'Paint is the last ten percent of a body job. The work that decides how a car looks in five years is underneath: how rust was cut out, whether panels were repaired in metal or shaped in filler, and how the gaps were set before any color went on.',
      'Collector car body work is slow by nature. Shops that do it well tend to have a queue, and a quote that is much faster or cheaper than the others is describing a different job.',
    ],
    ask: [
      'Is rust repaired with new metal, and can I see photos of a job at the bare-metal stage?',
      'Will the color be matched to the factory code, and in what paint system?',
      'Who strips and refits trim, glass and seals, and how are original parts stored?',
      'What is the timeline, how are delays communicated, and how is the work billed along the way?',
    ],
    faqs: [
      { q: 'Should a collector car be repainted or is original paint worth keeping?', a: 'Sound original paint is increasingly valued, even with wear, because it cannot be recreated. Repaint when the paint has failed or is hiding problems, not just because it is imperfect. A paint meter reading tells a buyer which one they are looking at.' },
      { q: 'Why do body and paint jobs take so long?', a: 'Because the hidden work expands once the car is stripped, and because curing, blocking and refitting cannot be rushed. Several months is ordinary for a full repaint done properly, longer with rust repair.' },
      { q: 'Does a color change hurt value?', a: 'Often, on cars where originality is documented and prized. A factory-correct color for the chassis is the safe choice; a period-correct alternative is a smaller risk than a modern custom shade.' },
    ],
  },
  {
    key: 'restoration',
    slug: 'classic-car-restoration',
    heading: 'Collector Car Restoration Shops',
    metaDescription:
      'Find a restoration shop for a collector car. How to scope a restoration, what to ask about billing and documentation, and shops reviewed by real owners.',
    intro: [
      'A restoration is a long relationship with a shop, measured in months or years. The cars that come out well are the ones where the scope was agreed at the start: concours correct, a sympathetic recommissioning, or a usable driver. Each is a legitimate goal and each is a different budget.',
      'The shop\'s experience with the specific model matters more than its size. Correct finishes, fasteners and assembly order are model knowledge, and a judge or an informed buyer will notice.',
    ],
    ask: [
      'Which examples of this model have you restored, and can I speak with those owners?',
      'Is billing time and materials or fixed stages, and how often are invoices and photo updates sent?',
      'What work is done in house and what is sent out, and to whom?',
      'How is the restoration documented, and do I receive the full photo record at the end?',
    ],
    faqs: [
      { q: 'How long does a full restoration take?', a: 'Commonly one to three years for a complete body-off restoration, depending on the car, parts availability and the shop\'s queue. Any shop promising much less is either describing a lighter job or guessing.' },
      { q: 'Is it cheaper to restore a car or buy one already restored?', a: 'Buying a finished car is almost always cheaper than restoring one to the same level, because restoration cost regularly exceeds the finished value. People restore for the specific car, the history or the satisfaction, and should go in knowing that.' },
      { q: 'What is the difference between restoration and recommissioning?', a: 'Restoration takes the car apart and renews it. Recommissioning makes a sound but dormant car safe and reliable again, leaving original finishes alone. For an unrestored survivor, recommissioning usually protects more value.' },
    ],
  },
  {
    key: 'upholstery',
    slug: 'classic-car-upholstery',
    heading: 'Collector Car Upholstery and Interior Trim',
    metaDescription:
      'Find an upholstery and interior trim specialist for a collector car. Correct materials, repair versus retrim, convertible tops, and trimmers reviewed by real owners.',
    intro: [
      'Interior work is where a restoration is most often given away. The wrong grain of leather, modern foam that sits too proud, or a carpet in the wrong weave is visible to anyone who knows the car, and it is the part of the car the owner looks at most.',
      'A good trimmer will talk first about what can be saved. Original seats with honest wear, cleaned and conditioned, often suit a car better than a fresh retrim.',
    ],
    ask: [
      'Can you source the correct material and pattern for this model, and from which supplier?',
      'Can the original covers be repaired and refitted rather than replaced?',
      'Do you rebuild seat frames, springs and padding, or only fit new covers?',
      'Do you also handle convertible tops, headliners and carpet sets?',
    ],
    faqs: [
      { q: 'Should original upholstery be repaired or replaced?', a: 'Repair it where the material is still sound. Original interiors are valued, and leather can often be cleaned, fed and re-dyed. Replace when the material is breaking down or the padding has collapsed.' },
      { q: 'Are interior kits as good as a custom retrim?', a: 'Some kits are very good and some are approximate. Quality depends on the supplier and the model. A trimmer who has fitted the kit before will know whether it needs rework to sit properly.' },
      { q: 'How long does an interior retrim take?', a: 'A few weeks for seats alone, longer for a full interior with carpets, panels, headliner and a top. Material lead times are often the longest part.' },
    ],
  },
  {
    key: 'detailing',
    slug: 'classic-car-detailing',
    heading: 'Collector Car Detailing and Paint Correction',
    metaDescription:
      'Find a detailer who understands collector cars: single-stage paint, thin original finishes, patina, and concours preparation. Detailers reviewed by real owners.',
    intro: [
      'Detailing a collector car is a preservation job. Older single-stage paint and thin original finishes do not tolerate the aggressive machine polishing that suits a modern clear coat, and once original paint is cut through it is gone.',
      'The right detailer measures before polishing, knows when to stop, and treats chrome, rubber, leather and wood as separate materials with separate needs.',
    ],
    ask: [
      'Do you measure paint thickness before any correction, and what will you not polish?',
      'Have you worked on single-stage or lacquer paint, and how does your process change?',
      'What products go on original leather, wood and rubber?',
      'Do you offer show preparation, and will you work at the car\'s location?',
    ],
    faqs: [
      { q: 'Is paint correction safe on original paint?', a: 'It can be, in careful hands and in moderation. Every correction removes material. On thin original paint the goal is to improve gloss with the least cutting possible, and to accept some marks rather than chase perfection.' },
      { q: 'Should a collector car be ceramic coated?', a: 'It is a reasonable choice on sound, modern or repainted finishes that see regular use. On fragile original paint, many owners and judges prefer a traditional wax that can be removed without abrasion.' },
      { q: 'How often should a collector car be detailed?', a: 'A thorough detail once or twice a year is typical for a car that is driven, with gentle washing in between. Cars in storage need less polishing and more attention to dust, humidity and covers.' },
    ],
  },
  {
    key: 'storage',
    slug: 'collector-car-storage',
    heading: 'Collector Car Storage',
    metaDescription:
      'Find storage for a collector car. Climate control, security, battery and fluid care, access and insurance questions, and facilities reviewed by real owners.',
    intro: [
      'Cars deteriorate from sitting as surely as from driving. Humidity works on metal and leather, fuel goes stale, tires flat-spot, batteries die and seals dry out. Good storage is a controlled environment plus someone paying attention.',
      'Facilities range from a secure dry building to full concierge care with exercise drives, trickle charging and delivery. The right level depends on how long the car sits and how much the owner wants to do personally.',
    ],
    ask: [
      'Is the building climate and humidity controlled, and what range is it held to?',
      'What security, fire protection and insurance does the facility carry, and what must my own policy cover?',
      'Are batteries maintained, tires checked and cars started or exercised on a schedule?',
      'How much notice is needed to collect the car, and are there access hours or fees?',
    ],
    faqs: [
      { q: 'Does a collector car need climate-controlled storage?', a: 'In humid, coastal or very cold climates it is a real benefit, mainly for controlling humidity. In a dry, mild climate a clean, sealed, secure building is often enough. Stable conditions matter more than a particular temperature.' },
      { q: 'How should a car be prepared for storage?', a: 'Clean it inside and out, fill the tank and add stabilizer, change the oil if it is due, raise tire pressure, connect a battery maintainer and use a breathable cover. Leave the handbrake off on a level floor.' },
      { q: 'Is a stored car covered by insurance?', a: 'The facility\'s policy generally covers the building and its liability, not the full value of each car. Keep an agreed-value collector policy in force and tell the insurer where the car is kept.' },
    ],
  },
  {
    key: 'photography',
    slug: 'collector-car-photography',
    heading: 'Collector Car Photography',
    metaDescription:
      'Find a photographer for a collector car listing or portfolio. The shot list buyers expect, what to ask before booking, and photographers reviewed by real owners.',
    intro: [
      'Photographs sell collector cars, and they do it by answering questions. A remote buyer wants the underside, the stampings, the panel gaps, the flaws and the paperwork as much as the three-quarter beauty shot. A complete, honest gallery brings better offers and fewer wasted conversations.',
      'A photographer who shoots cars for sale knows the list and the light. The job is documentation first and atmosphere second.',
    ],
    ask: [
      'Do you shoot a full sale gallery including underside, engine bay, numbers and flaws?',
      'How many finished images are delivered, at what resolution, and how quickly?',
      'Do you shoot video, including cold start, walk-around and driving footage?',
      'Who owns usage rights, and can the images be used on any listing site?',
    ],
    faqs: [
      { q: 'How many photos does a collector car listing need?', a: 'More than feels necessary. A thorough gallery commonly runs well over a hundred images, covering exterior, interior, engine bay, underside, numbers, tools, records and every known flaw.' },
      { q: 'Should flaws be photographed?', a: 'Yes. Showing them builds trust, heads off disputes after the sale and saves time with buyers who would have walked away on inspection anyway.' },
      { q: 'Is professional photography worth it for a private sale?', a: 'For most cars of real value, yes. The cost is small against the difference that a complete, well lit gallery makes to the number and quality of inquiries.' },
    ],
  },
];

export function getCategoryPage(slug: string): CategoryPageCopy | undefined {
  return CATEGORY_PAGES.find((c) => c.slug === slug);
}
