/**
 * "Running the business" — the cross-cutting provider guide.
 *
 * The eight trade playbooks in providerTracks.ts answer "how do I get booked as
 * a detailer / inspector / transporter". None of them answer the question every
 * specialist actually asks first, usually somewhere around the second phone
 * call: am I a business yet, what do I owe, and what happens when someone hands
 * me the keys to a car worth more than my house.
 *
 * Register: plain, specific, and useful. Not earnest, not a lecture, and never
 * pretending to be advice from a professional we have not hired. Every figure
 * carries its tax year, because these move.
 *
 * MAINTENANCE: the numbers in ch. 3 and ch. 4 are tax-year 2026 and change
 * annually. TAX_YEAR below is the single place to bump. Anything sourced is
 * listed in SOURCES so a reader — or a future editor — can check the work.
 */

export const TAX_YEAR = 2026;

export const GUIDE_DISCLAIMER =
  "General information for people running a small specialist business, current for the 2026 tax year. It is not tax, legal, or insurance advice, we are not your accountant or your attorney, and the thresholds below change, sometimes retroactively. Before you act on any of it, run it past someone licensed in your state.";

export interface GuideCallout {
  kind: "watch" | "note" | "money";
  title: string;
  body: string;
}

export interface GuideSection {
  heading: string;
  body: string[];
  bullets?: { term: string; def: string }[];
  callout?: GuideCallout;
}

export interface GuideChapter {
  slug: string;
  number: number;
  title: string;
  /** One line, shown in the index — the question this chapter answers. */
  question: string;
  icon: string; // lucide key, mapped in the page
  minutes: number;
  sections: GuideSection[];
  checklist?: string[];
}

export const BUSINESS_GUIDE: GuideChapter[] = [
  /* ─────────────────────────────────────────────────────────── 1 ───── */
  {
    slug: "are-you-a-business",
    number: 1,
    title: "You are already a business",
    question: "Do I need to set something up before I can take work?",
    icon: "Building2",
    minutes: 6,
    sections: [
      {
        heading: "Nobody grants you the title",
        body: [
          "If you detailed a car last Saturday and the owner paid you, you were a sole proprietor on Saturday. There is no form to file, no fee to pay, and no moment where someone tells you it has started. In the eyes of the IRS you are a business the first time you take money with the intent of making a profit, and everything that follows in this guide already applies to you.",
          "That is the good news and the whole problem at once. The default costs nothing and takes no time, which is why almost everyone starts there. The default also means there is no line anywhere between you and the work. Your business does not own the polisher; you do. Your business did not agree to that job; you did. And if something goes badly wrong on a car, the claim is not against a company. It is against you, your savings, and in the worst case your house.",
        ],
      },
      {
        heading: "What a sole proprietorship actually is",
        body: [
          "A sole proprietorship is not an entity. It is the absence of one. There is no separate tax return: your business income and expenses go on Schedule C, attached to the same Form 1040 you already file, and the profit flows onto your personal return. There is no separate legal person either, which is the part that matters when a car is on your lift.",
        ],
        bullets: [
          { term: "Liability", def: "Unlimited and personal. A judgment against the business is a judgment against you." },
          { term: "Taxes", def: "Schedule C plus Schedule SE, filed with your personal return. No separate business return." },
          { term: "Cost to start", def: "Nothing, unless your city or county wants a business license. Many do." },
          { term: "Paperwork", def: "Almost none, which is exactly why it hides how much personal risk you are carrying." },
        ],
        callout: {
          kind: "watch",
          title: "The trade you are in makes this sharper than most",
          body: "Plenty of sole proprietors never touch anything they could destroy. You take custody of objects worth six and sometimes seven figures, and you alter their finish, their mechanicals, or their originality. The gap between 'a client is unhappy' and 'a client's insurer is looking for someone to recover from' is much shorter here than it is for a freelance copywriter.",
        },
      },
      {
        heading: "When an LLC starts to earn its keep",
        body: [
          "A single-member LLC does one thing well: it puts a legal wall between the business and everything you own personally. It does not change your taxes at all by default: the IRS treats it as a disregarded entity, meaning you still file Schedule C exactly as before. People form them for the wall, not for a deduction, and anyone who tells you an LLC will lower your tax bill is describing a different decision.",
          "The wall is also conditional. It holds when the business is genuinely separate: its own bank account, its own records, contracts signed in the business's name, no paying the mortgage out of the business account. Run everything through one account and a court can decide the separation was decorative.",
          "Rough guidance, not a rule: if you are taking custody of customers' cars, working on high-value examples, or your annual profit is into five figures, the few hundred dollars a state charges is cheap. If you detail three cars a month for people you know, it may not be yet.",
        ],
        callout: {
          kind: "note",
          title: "California specifically",
          body: "California charges an $800 minimum annual franchise tax on LLCs regardless of whether the business made a dollar, on top of formation and Statement of Information fees. That is a real number to plan around and it catches people out in year one. Confirm the current amount with the Franchise Tax Board before you file.",
        },
      },
      {
        heading: "The S-corp question, answered honestly",
        body: [
          "Sooner or later someone at a show will tell you to elect S-corp status and save a fortune. The mechanism is real: an S-corp lets you split your income into a reasonable salary, which pays employment tax, and distributions, which do not. On high profits, that saves meaningful money.",
          "The costs are also real, and they arrive whether the savings do or not: payroll processing, a separate business tax return, a defensible salary you have to justify, and an accountant who is no longer optional. The savings scale with profit; the costs mostly do not. Which is why the conventional threshold sits somewhere north of roughly $50,000–$80,000 of net profit, and why the honest answer is that this is a question for a CPA with your actual numbers in front of them, not for a guide.",
        ],
      },
    ],
    checklist: [
      "Decide whether you are staying a sole proprietor this year, and write down why",
      "If you are forming an LLC, check your state's annual cost before you file, not after",
      "Open a separate bank account either way: it is free and it is the single highest-value thing on this list",
      "Check whether your city or county requires a business license for your trade",
    ],
  },

  /* ─────────────────────────────────────────────────────────── 2 ───── */
  {
    slug: "the-paperwork",
    number: 2,
    title: "The paperwork that actually matters",
    question: "What do I need to have in place before the money moves?",
    icon: "FileText",
    minutes: 5,
    sections: [
      {
        heading: "Get an EIN even though you do not have to",
        body: [
          "An Employer Identification Number is free, takes about ten minutes on the IRS site, and you can get one as a sole proprietor with no employees. Do it.",
          "The reason is not tax. It is that every client who pays you more than a small amount will ask you to fill in a Form W-9, and that form asks for a taxpayer identification number. Without an EIN, the number you write is your Social Security number. It then sits in the filing systems of every shop, every marketplace, and every owner who has ever hired you. An EIN does the same job and reveals nothing.",
        ],
        callout: {
          kind: "watch",
          title: "Get it from the IRS directly",
          body: "The IRS issues EINs free at irs.gov. Sites that charge you $79 to 'file' one are reselling a form you can complete yourself in a browser. There is no expedited tier and no advantage to paying.",
        },
      },
      {
        heading: "A separate bank account",
        body: [
          "This is the cheapest professionalism you will ever buy. One account the business money goes into and comes out of, and nothing personal touching it.",
          "It makes your Schedule C an afternoon instead of a weekend, because your books are simply the account. It is a prerequisite for an LLC's liability wall meaning anything. And if you are ever audited, the difference between a clean business account and a personal account with business transactions mixed in is the difference between a short conversation and a long one.",
        ],
      },
      {
        heading: "Licenses, permits, and the name on the invoice",
        body: [
          "Requirements vary by city, not just by state, and the trades in this directory sit on different sides of several lines. Some things to check before you invoice:",
        ],
        bullets: [
          { term: "Business license", def: "Most cities require one for any business operating in their limits, including a one-person mobile operation. It is usually cheap and annual." },
          { term: "Fictitious business name (DBA)", def: "Needed if you trade under anything other than your own legal name. Usually a county filing plus, in many places, a published notice." },
          { term: "Seller's permit", def: "If you sell parts, products, or materials, not just labor, you likely need one and you likely need to collect sales tax on those items." },
          { term: "Trade-specific licensing", def: "Some states license automotive repair specifically. In California, shops performing repairs generally register with the Bureau of Automotive Repair; check whether what you do falls inside that definition before you assume it does not." },
          { term: "Motor carrier authority", def: "Transporters hauling vehicles for hire across state lines are in a different regulatory world entirely: USDOT number, operating authority, and cargo insurance minimums." },
        ],
        callout: {
          kind: "note",
          title: "Ask the question in writing",
          body: "City and county licensing desks will usually answer a plain email describing exactly what you do and asking what you need. Keep the reply. A dated answer from the licensing authority is worth considerably more than a forum post if anyone ever asks why you did what you did.",
        },
      },
    ],
    checklist: [
      "Apply for an EIN at irs.gov: free, same day",
      "Open a business bank account and stop using the personal one for work",
      "Check city/county business license requirements for your trade",
      "File a DBA if you trade under a name that is not your own",
      "Find out whether your state licenses your specific trade",
    ],
  },

  /* ─────────────────────────────────────────────────────────── 3 ───── */
  {
    slug: "what-you-owe",
    number: 3,
    title: "What you will owe, and when",
    question: "How much should I be setting aside, and what are the dates?",
    icon: "Calculator",
    minutes: 8,
    sections: [
      {
        heading: "The tax nobody warns you about",
        body: [
          "When you were an employee, your paycheck quietly lost 7.65% to Social Security and Medicare, and your employer paid a matching 7.65% you never saw. Self-employed, you are both halves. That is self-employment tax, it runs at 15.3%, and it is charged on your business profit before any income tax is calculated at all.",
          "It is the single most common reason a first-year specialist gets a tax bill they did not expect. They budgeted for income tax. Nobody mentioned the other one.",
        ],
        bullets: [
          { term: "The rate", def: "15.3%: 12.4% Social Security plus 2.9% Medicare." },
          { term: "What it is charged on", def: "92.35% of your net profit, not the gross you invoiced. The 7.65% haircut approximates the employer half an employee never gets taxed on." },
          { term: "The Social Security cap", def: `The 12.4% portion applies only up to $184,500 of earnings for ${TAX_YEAR}. Above that, only the 2.9% Medicare portion continues, uncapped.` },
          { term: "The floor", def: "You owe it once net self-employment earnings reach $400 for the year. That is not a typo, and it is not per client." },
          { term: "The consolation", def: "Half of what you pay is deductible against your income tax, and it comes off before you even get to itemising." },
        ],
        callout: {
          kind: "money",
          title: "A rough working number",
          body: "Between self-employment tax and federal income tax, most specialists at ordinary profit levels land somewhere around 25–30% of net profit, before state tax. Setting aside 30% of every payment into a separate account the moment it clears is unglamorous and it is why some people never have a bad April.",
        },
      },
      {
        heading: "Quarterly estimated payments",
        body: [
          "Nobody is withholding anything for you any more, so the IRS asks you to pay as you go, four times a year. Miss them and you owe an underpayment penalty on top of the tax. It is calculated like interest, so it is not catastrophic, but it is entirely avoidable.",
          `For the ${TAX_YEAR} tax year the deadlines fall on 15 April ${TAX_YEAR}, 15 June ${TAX_YEAR}, 15 September ${TAX_YEAR}, and 15 January ${TAX_YEAR + 1}. When a date lands on a weekend or holiday it moves to the next business day. Most states with an income tax run their own parallel schedule, usually on the same dates.`,
        ],
        callout: {
          kind: "note",
          title: "Safe harbor: the rule that makes this easy",
          body: "You will not be penalized if you pay at least 90% of what you end up owing this year, OR 100% of what you owed last year (110% if your prior-year adjusted gross income was over $150,000). That second option is the useful one: last year's number is already known, so you can set four equal payments in January and stop thinking about it, even if this year turns out much better than expected.",
        },
      },
      {
        heading: "The deduction worth knowing by name",
        body: [
          "The qualified business income deduction (Section 199A) lets most pass-through business owners deduct up to 20% of qualified business income before income tax is applied. It was scheduled to expire and has since been made permanent, which means it is now worth building into your planning rather than treating as a windfall.",
          "It has income thresholds and phase-outs, and it does not reduce self-employment tax. But at ordinary profit levels for a specialist trade it is a real reduction in the income tax half of your bill, and it is one of the reasons the effective rate on self-employment income is lower than the headline numbers suggest.",
        ],
      },
      {
        heading: "Deductions specific to this trade",
        body: [
          "The rule underneath all of these is that an expense must be ordinary and necessary for your business, and that you must be able to prove it. A shoebox of faded receipts is not proof; a bank statement from the account you only use for the business very nearly is.",
        ],
        bullets: [
          { term: "Mileage or actual costs", def: "Two methods, pick one per vehicle and understand you are largely stuck with the consequence. The standard mileage rate is simpler and often better for a mobile detailer; actual costs can win for a transporter with a real truck. Either way the log is the deduction: without it, neither method survives scrutiny." },
          { term: "Tools and equipment", def: "A polisher, a lift, a paint-depth gauge, a compressor. Larger purchases can often be expensed immediately rather than depreciated over years, which is worth a conversation with your accountant in a year when you buy something significant." },
          { term: "Home office", def: "Legitimate if a space is used regularly and exclusively for business. 'Exclusively' is the word that disqualifies most people: the kitchen table does not count." },
          { term: "Training and certification", def: "Coatings certification, marque-specific training, trade shows. Education that maintains or improves skills in your existing business generally qualifies." },
          { term: "Insurance premiums", def: "Business policies are deductible. The self-employed health insurance deduction is separate and works differently. Ask about it specifically." },
          { term: "Materials consumed on a job", def: "Compounds, pads, film, fluids, consumables. Track these per job and you will also discover what your real margin is, which is usually more useful than the deduction." },
        ],
      },
    ],
    checklist: [
      "Open a second account and move 30% of every payment into it on the day it lands",
      "Put the four estimated-payment dates in your calendar with a reminder a week ahead",
      "Decide your safe-harbor basis: last year's number is usually the easy one",
      "Start a mileage log now; reconstructing one in April does not work",
      "Ask your accountant about Section 199A and about expensing equipment in a heavy purchase year",
    ],
  },

  /* ─────────────────────────────────────────────────────────── 4 ───── */
  {
    slug: "forms-and-1099s",
    number: 4,
    title: "W-9s, 1099s, and who reports what",
    question: "Why is everyone asking me for a W-9, and what will show up in January?",
    icon: "ClipboardCheck",
    minutes: 7,
    sections: [
      {
        heading: "The W-9 is not a tax form",
        body: [
          "It is an information form, and it never goes to the IRS. A business that might have to report payments to you asks you to complete a W-9 so they have your legal name, your business structure, and your taxpayer identification number on file. They keep it. That is the whole transaction.",
          "You will be asked for one constantly: by shops that subcontract to you, by marketplaces, by collectors who run their car through a business. Fill it in properly, put your EIN on it rather than your Social Security number, and keep a completed copy so you are not retyping it every time.",
        ],
        callout: {
          kind: "watch",
          title: "The 24% consequence of not returning one",
          body: "If you do not provide a correct taxpayer identification number when asked, the payer is required to start backup withholding at 24% and send it to the IRS instead of to you. You get it back eventually by filing a return. In the meantime, someone is holding a quarter of your money because a one-page form was inconvenient.",
        },
      },
      {
        heading: "Two different forms, two very different thresholds",
        body: [
          "Which form you get depends on how the money reached you, not on what the work was. This trips people up because the thresholds are an order of magnitude apart.",
        ],
        bullets: [
          { term: "Form 1099-NEC", def: `Issued by a business that paid you directly for services. For ${TAX_YEAR} the threshold rose to $2,000, up from the $600 that stood for decades, and it is inflation-indexed from 2027 onward.` },
          { term: "Form 1099-K", def: `Issued by a payment processor or marketplace that settled card payments to you. The threshold reverted to more than $20,000 AND more than 200 transactions, retroactively restoring the pre-2021 rule after several years of on-again-off-again $600 proposals.` },
          { term: "Both, for the same money", def: "It can happen. If it does, it is a duplication to resolve with your accountant, not two lots of income." },
          { term: "Neither, for a lot of money", def: "Entirely possible under the current thresholds, and completely irrelevant to what you owe." },
        ],
        callout: {
          kind: "watch",
          title: "Several states never went along with the federal threshold",
          body: "Even with the federal 1099-K threshold back at $20,000, a number of states require reporting far lower: around $600 in Maryland, Massachusetts, Vermont, Virginia, Montana, North Carolina and the District of Columbia, $1,000 in New Jersey, $1,200 in Missouri. If you work across state lines, the form may arrive regardless of the federal number.",
        },
      },
      {
        heading: "The thing to actually internalise",
        body: [
          "A 1099 is a copy of what somebody told the IRS about you. It is not a statement of your income, it is not a bill, and its absence is not permission.",
          "You owe tax on your profit whether a form arrives or not. Somebody who paid you $1,800 in cash for a paint correction generates no form at all under the current threshold, and that $1,800 is exactly as taxable as the payment that did generate one. Your books are the source of truth. The forms are just the copies that happen to have been sent.",
        ],
        callout: {
          kind: "note",
          title: "If you are not a US person",
          body: "You complete a W-8BEN or W-8BEN-E instead of a W-9, and a different set of withholding rules applies. Get this one in front of an accountant rather than guessing. The default withholding rate for a missing form is considerably worse than 24%.",
        },
      },
      {
        heading: "What Fully Sorted asks you for",
        body: [
          "Today: nothing. Fully Sorted does not currently sit between an owner's money and your payout, so there is no payment for us to report. Work found through the directory is paid to you directly by the owner, on your terms.",
          "When card payment for fixed-price bookings switches on, that changes: anyone taking card payments through the platform will be asked for a W-9 during setup, because at that point the money is being settled to you and somebody has a reporting obligation. We will ask once, at signup, rather than chasing you in January.",
        ],
      },
    ],
    checklist: [
      "Complete one W-9 with your EIN and keep the PDF where you can find it",
      "Return a W-9 the day it is requested: the alternative is 24% withholding",
      "Track every payment in your own books, form or no form",
      "If you work across state lines, check whether that state has a lower reporting threshold",
      "If you are not a US taxpayer, ask an accountant about W-8BEN before you invoice anyone",
    ],
  },

  /* ─────────────────────────────────────────────────────────── 5 ───── */
  {
    slug: "how-you-earn",
    number: 5,
    title: "How you actually earn here",
    question: "Where does the work come from, and what does it cost me?",
    icon: "Coins",
    minutes: 6,
    sections: [
      {
        heading: "Three routes, one directory",
        body: [
          "Work reaches specialists on Fully Sorted three ways, and they suit different kinds of business.",
        ],
        bullets: [
          { term: "The directory", def: "An owner finds you by trade and location, reads your profile, and contacts you. You quote, you agree terms, you get paid directly. Nothing passes through us." },
          { term: "Fixed-price gigs", def: "A productised service with a defined scope and an upfront price. Once fixed-price gigs open, owners will book one without a quote: best for repeatable work such as a maintenance detail, a pre-purchase inspection, or a photo set." },
          { term: "Routed work", def: "Owners who ask us directly for a specialist. This goes to people whose profiles are complete and whose past clients said the right things." },
        ],
      },
      {
        heading: "You set your prices. That is not a courtesy",
        body: [
          "Fully Sorted does not set your rates, does not tell you how to do the work, and does not own your relationship with a client who found you here. If they come back to you directly next year, that is how it is supposed to work.",
          "That is partly a stance and partly a structural fact: a marketplace that dictates price and method starts to look, legally, like an employer rather than a referral. Keeping rates in your hands keeps you an independent business, which is what you are, and what both of us need you to remain.",
        ],
        callout: {
          kind: "note",
          title: "Which means the pricing decisions are yours to get right",
          body: "Your trade's playbook has tier structures and real price bands for exactly this reason. The reliable pattern across every service marketplace: offer three tiers, make the middle one the one you actually want to sell, and let the top tier make the middle look reasonable.",
        },
      },
      {
        heading: "What it costs",
        body: [
          "A directory listing is free during the founding period, and the founding cohort keeps that. Work you quote and invoice directly is yours in full today: Fully Sorted takes no cut of it, and nothing is taken out of what an owner has to spend on the job.",
          "That changes only once fixed-price gigs open. From that point, the only charge will be a 10% platform fee on gigs booked through the site, still with nothing taken out of what an owner has to spend. Card payment for those bookings is a separate step that comes later still: until a provider is switched on for payouts, a booking arrives as an inquiry and you invoice the owner directly. When card payments do switch on, the processing fee is the honest cost of taking a card, and it will be stated plainly rather than buried.",
        ],
      },
      {
        heading: "What actually gets you booked",
        body: [
          "The profiles that convert are not the ones with the most services listed. They are the ones that make an owner feel safe handing over something irreplaceable.",
          "A real photograph of you or your premises rather than a logo. Specific work on specific cars, with the marque named. Evidence you carry the right insurance. A response time measured in hours rather than days. On a platform where response rate is visible, that compounds. And a scope so clear the owner already knows what they are buying before they message you.",
        ],
      },
    ],
    checklist: [
      "Complete your profile properly, photograph included: it is a requirement, not a nicety",
      "Set three tiers for your most repeatable service and price the middle one deliberately",
      "Name the marques you actually know; vagueness reads as inexperience",
      "Answer inquiries same-day while the owner is still deciding",
    ],
  },

  /* ─────────────────────────────────────────────────────────── 6 ───── */
  {
    slug: "insurance",
    number: 6,
    title: "The insurance conversation",
    question: "What happens if something goes wrong with a client's car?",
    icon: "ShieldCheck",
    minutes: 6,
    sections: [
      {
        heading: "The cover most people are missing",
        body: [
          "General liability covers the visitor who trips over your extension lead. It does not cover the car. This is the single most common and most expensive misunderstanding in the trade.",
          "The cover for damage to a customer's vehicle while it is in your care, custody, or control is called garage-keepers legal liability. If you take possession of cars (to detail, to repair, to store, to photograph, to transport) and you do not have it, then a fire, a theft, or a slipped polisher is coming out of your own pocket, against a valuation set by the collector-car market rather than by a used-car guide.",
        ],
        callout: {
          kind: "watch",
          title: "Your homeowner's policy will not do this",
          body: "Neither will your personal auto policy, and neither will a general liability policy sold to you as 'business insurance' by someone who did not ask what you do. Personal lines exclude business use almost universally. The first time most people discover this is at the point of claim.",
        },
      },
      {
        heading: "What each trade tends to need",
        body: [
          "Not exhaustive, and your broker will have opinions, but the shape of it:",
        ],
        bullets: [
          { term: "Anyone taking custody", def: "Garage-keepers legal liability, with a per-vehicle limit that reflects what you actually work on. A $50,000 limit is irrelevant on a car worth $400,000." },
          { term: "Everyone", def: "Commercial general liability, for injury and third-party property damage that is not the vehicle itself." },
          { term: "Transporters", def: "Commercial auto plus motor truck cargo, at limits that match the cars on the trailer. Owners will ask for the certificate before the ramps come down, and they should." },
          { term: "Mobile operators", def: "Inland marine, which despite the name covers tools and equipment away from a fixed premises." },
          { term: "Anyone giving an opinion", def: "Inspectors and appraisers should look hard at errors and omissions cover. Your exposure is not damage to a car. It is a buyer who relied on your report." },
          { term: "Restoration and storage", def: "Long-duration custody changes the risk profile entirely. Tell your broker how long cars sit and what they are worth in aggregate, because an aggregate limit is what will fail you." },
        ],
      },
      {
        heading: "Agreed value, and why it matters more here",
        body: [
          "Collector cars are insured on agreed value, not on actual cash value with depreciation. The same logic has to run through your business cover. A policy that would settle a 1967 fastback at book value is not cover, it is a disagreement waiting for an incident.",
          "Talk to a broker who writes collector-car business specifically. The generalist who does your neighbour's landscaping company will sell you something, and it will be cheaper, and it will not be the same product.",
        ],
        callout: {
          kind: "note",
          title: "Owners are told to ask you for this",
          body: "Our owner-facing FAQ tells collectors to ask for proof of garage-keepers cover before handing over keys. Have the certificate ready as a PDF. Producing it within the hour makes you look like the professional you are; going quiet for two days does the opposite.",
        },
      },
    ],
    checklist: [
      "Ask a broker specifically about garage-keepers legal liability, by name",
      "Check the per-vehicle limit against the most valuable car you would realistically accept",
      "Keep a current certificate of insurance as a PDF on your phone",
      "Tell your broker the truth about what you work on: undisclosed risk is uninsured risk",
    ],
  },

  /* ─────────────────────────────────────────────────────────── 7 ───── */
  {
    slug: "getting-paid",
    number: 7,
    title: "Getting paid, and the paper that makes it happen",
    question: "How do I protect myself between the handshake and the payment?",
    icon: "ReceiptText",
    minutes: 6,
    sections: [
      {
        heading: "Write down the scope before the keys change hands",
        body: [
          "Almost every dispute in this trade is a disagreement about scope that surfaced at invoicing. The owner remembers a conversation about 'sorting the paint'. You remember quoting a single-stage correction. Both of you are being honest and there is nothing to point at.",
          "A written authorization does not need to be a contract drafted by a lawyer. It needs to say what work is authorized, what it costs, what happens if you find something you did not expect, and when payment is due. An email the client replies 'yes, go ahead' to is vastly better than nothing, and in some states a written estimate before repair work begins is not optional at all.",
        ],
        bullets: [
          { term: "Scope", def: "What you are doing, in specific terms. Name the process, not the outcome." },
          { term: "Price and what triggers a change", def: "The number, and the rule for what happens when the job turns out to be worse than it looked." },
          { term: "Timeline", def: "Including what happens if parts do not arrive. They will not." },
          { term: "Deposit", def: "For anything with materials or a long lead time. Half up front is normal and nobody serious objects." },
          { term: "Condition on arrival", def: "Photographs, dated, before you touch anything. Every panel, the wheels, the interior, the odometer." },
          { term: "Storage after completion", def: "The date free storage ends and the daily rate after it. Write it down before you need it." },
        ],
        callout: {
          kind: "money",
          title: "The photographs are the whole defense",
          body: "A full photographic record on arrival costs four minutes and settles the overwhelming majority of 'that chip was not there before' conversations before they become arguments. Take them even for a client you have known for years. Especially for a client you have known for years, because that is who you will feel worst about arguing with.",
        },
      },
      {
        heading: "When a client goes quiet",
        body: [
          "It happens, and it happens most on the jobs that ran longest. Sequence, in order: a polite invoice, a reminder at fourteen days that references your storage terms, a written demand, and only then anything formal.",
          "Mechanic's liens exist in every state and the rules are unforgiving about notice periods and paperwork. They are also not a first move. A lien is slow, it costs money, and it ends the relationship permanently. Know that the option exists, and structure your deposits so that you rarely need it.",
        ],
      },
      {
        heading: "Books, kept the boring way",
        body: [
          "One business account. Every payment in, every expense out, nothing personal. Reconcile monthly rather than annually. An hour a month is genuinely less painful than a weekend in April, and it means you find out you are underpricing in March rather than the following year.",
          "Keep records for at least three years; longer is safer, and digital copies of receipts are fine. What you are protecting is not just the deduction. It is your ability to answer a question quickly and stop the conversation there.",
        ],
      },
    ],
    checklist: [
      "Write a one-page work authorization you can reuse: scope, price, change rule, storage terms",
      "Take dated arrival photographs on every single job",
      "Take a deposit on anything involving materials or more than a few days",
      "Reconcile the business account once a month",
      "Find out what your state requires in writing before repair work begins",
    ],
  },
];

/** Chapter lookup by slug. */
export function getChapter(slug: string): GuideChapter | undefined {
  return BUSINESS_GUIDE.find((c) => c.slug === slug);
}

export function totalMinutes(): number {
  return BUSINESS_GUIDE.reduce((n, c) => n + c.minutes, 0);
}

/**
 * Every factual claim with a year or a dollar figure attached traces to one of
 * these. Keep this list honest — it is the difference between a guide and an
 * opinion, and it is what makes the annual update tractable.
 */
export const SOURCES: { label: string; url: string }[] = [
  {
    label: "IRS: Form 1099-K threshold FAQs under the One, Big, Beautiful Bill",
    url: "https://www.irs.gov/newsroom/irs-issues-faqs-on-form-1099-k-threshold-under-the-one-big-beautiful-bill-dollar-limit-reverts-to-20000",
  },
  {
    label: "IRS: Qualified business income deduction (Section 199A)",
    url: "https://www.irs.gov/newsroom/qualified-business-income-deduction",
  },
  {
    label: "Social Security Administration: Contribution and benefit base",
    url: "https://www.ssa.gov/oact/cola/cbb.html",
  },
  {
    label: "IRS: Self-employment tax (Social Security and Medicare taxes)",
    url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes",
  },
  {
    label: "IRS: Estimated taxes",
    url: "https://www.irs.gov/businesses/small-businesses-self-employed/estimated-taxes",
  },
  {
    label: "IRS: Apply for an Employer Identification Number, free",
    url: "https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number",
  },
];
