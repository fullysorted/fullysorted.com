import type { Metadata } from "next";
import Link from "next/link";
import { PLATFORM_FEE_PCT_LABEL } from "@/lib/payments";
import { FREE_LISTINGS_THRESHOLD } from "@/lib/listing-tiers";

export const metadata: Metadata = {
  alternates: { canonical: "/terms" },
  title: "Terms of Service",
  description:
    "The terms governing your use of the Fully Sorted services directory, marketplace and research hub: who can use it, what each side is responsible for, fees, content, and how disputes are handled.",
};

const LAST_UPDATED = "September 5, 2026";
const CONTACT = "chris@fullysorted.com";

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-xl font-bold mb-3 scroll-mt-28" style={{ color: "#1a1a18" }}>
      {children}
    </h2>
  );
}
function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-base font-bold mt-5 mb-2" style={{ color: "#1a1a18" }}>
      {children}
    </h3>
  );
}
function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 first:mt-0">{children}</p>;
}
function UL({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="mt-3 space-y-2 list-disc pl-5">
      {items.map((it, i) => (
        <li key={i}>{it}</li>
      ))}
    </ul>
  );
}
function A({ href, children }: { href: string; children: React.ReactNode }) {
  const cls = "font-semibold hover:opacity-70 transition-opacity";
  const style = { color: "#1E6091" };
  return href.startsWith("http") || href.startsWith("mailto:") ? (
    <a href={href} className={cls} style={style}>
      {children}
    </a>
  ) : (
    <Link href={href} className={cls} style={style}>
      {children}
    </Link>
  );
}

const TOC: [string, string][] = [
  ["agreement", "1. The agreement"],
  ["eligibility", "2. Who can use Fully Sorted"],
  ["accounts", "3. Accounts"],
  ["role", "4. What Fully Sorted is, and is not"],
  ["marketplace", "5. Listing and buying cars"],
  ["providers", "6. Providers and the directory"],
  ["inquiries", "7. Inquiries and messages"],
  ["reviews", "8. Reviews"],
  ["fees", "9. Fees and payments"],
  ["content", "10. Your content and our license to it"],
  ["conduct", "11. What you may not do"],
  ["ip", "12. Our content and intellectual property"],
  ["research", "13. Research, Value Guide and AI-generated content"],
  ["third-party", "14. Third-party services"],
  ["termination", "15. Suspension and termination"],
  ["disclaimers", "16. Disclaimers"],
  ["liability", "17. Limitation of liability"],
  ["indemnity", "18. Indemnification"],
  ["disputes", "19. Governing law and disputes"],
  ["dmca", "20. Copyright complaints"],
  ["california", "21. Notice to California users"],
  ["general", "22. General terms"],
  ["contact", "23. Contact"],
];

export default function TermsPage() {
  return (
    <main className="min-h-screen" style={{ background: "#faf9f7" }}>
      <section style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#1E6091" }}>
            <span className="inline-flex gap-1" aria-hidden="true">
              <span className="w-1.5 h-1.5" style={{ background: "#1E6091" }} />
              <span className="w-1.5 h-1.5" style={{ background: "#1E6091" }} />
              <span className="w-1.5 h-1.5" style={{ background: "#B08D3F" }} />
            </span>
            Legal
          </p>
          <h1 className="font-display font-semibold tracking-tight text-4xl sm:text-5xl leading-[1.08] mb-4" style={{ color: "#1a1a18" }}>
            Terms of Service
          </h1>
          <p className="text-base leading-relaxed mb-4" style={{ color: "#3a3a30" }}>
            The short version: Fully Sorted introduces owners to specialists and buyers to sellers.
            The deal itself, the work itself and the money for it are between you and the other
            party. Tell the truth in what you post, pay the fees you agree to, and do not abuse
            the people you meet here. The long version is below.
          </p>
          <p className="text-sm" style={{ color: "#9a9a8a" }}>
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <nav
          aria-label="Contents"
          className="rounded-2xl p-6 border mb-8 text-sm"
          style={{ background: "#fff", borderColor: "rgba(0,0,0,0.08)" }}
        >
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#6b6b5e" }}>
            Contents
          </p>
          <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5">
            {TOC.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} className="hover:opacity-70 transition-opacity" style={{ color: "#1E6091" }}>
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div
          className="rounded-2xl p-8 sm:p-10 border space-y-10 text-base leading-relaxed"
          style={{ background: "#fff", borderColor: "rgba(0,0,0,0.08)", color: "#3a3a30" }}
        >
          <div>
            <H2 id="agreement">1. The agreement</H2>
            <P>
              These Terms of Service (&quot;Terms&quot;) are a contract between you and Fully Sorted
              (&quot;Fully Sorted&quot;, &quot;we&quot;, &quot;us&quot;), San Diego, California. They govern
              fullysorted.com and every service we offer through it: the services directory, the
              car marketplace, the research hub, the registry, inquiries and messaging, and our
              emails and texts (together, the &quot;Service&quot;). By using the Service you agree to
              these Terms and to our <A href="/privacy">Privacy Policy</A>, which explains how we
              handle personal information. If you do not agree, do not use the Service.
            </P>
            <P>
              If you use the Service on behalf of a business, you confirm you have authority to
              bind that business, and &quot;you&quot; means the business as well as you personally.
            </P>
          </div>

          <div>
            <H2 id="eligibility">2. Who can use Fully Sorted</H2>
            <P>
              Anyone may browse. To create an account, list a car, apply as a provider, send an
              inquiry, post a review or submit to the registry you must be at least 18 years old
              and able to enter a binding contract. The Service is operated from the United States
              and intended for use there; you are responsible for complying with the laws of
              wherever you are.
            </P>
          </div>

          <div>
            <H2 id="accounts">3. Accounts</H2>
            <P>
              Sign-in is provided by Clerk. You are responsible for everything done through your
              account and for keeping your sign-in method secure. Give us accurate information and
              keep it current; a listing or profile built on a false identity will be removed. One
              person or business may hold one account unless we agree otherwise. Tell us at{" "}
              <A href={`mailto:${CONTACT}`}>{CONTACT}</A> immediately if you believe your account
              has been accessed without permission.
            </P>
          </div>

          <div>
            <H2 id="role">4. What Fully Sorted is, and is not</H2>
            <P>
              Fully Sorted is a venue. We publish directory profiles, car listings and research,
              and we deliver the inquiries you choose to send. We are not a party to any sale,
              quote, booking, repair, transport, storage, inspection or other transaction arranged
              through the Service. We do not employ, supervise or certify providers, we do not
              inspect the cars that are listed, and we do not hold funds for either side except
              where section 9 expressly says a payment runs through us.
            </P>
            <P>
              &quot;Founding member&quot;, &quot;top-rated&quot; and similar labels describe how and when a
              provider joined or how owners have rated them. They are not a warranty from us about
              the quality, licensing, insurance or reliability of anyone&apos;s work. Do your own
              checks before you hand over a car or a deposit. Section 16 has the legal version of
              this paragraph.
            </P>
          </div>

          <div>
            <H2 id="marketplace">5. Listing and buying cars</H2>
            <H3>Sellers</H3>
            <UL
              items={[
                <>You must own the vehicle or be legally authorized to sell it, and it must have a clear, transferable title unless the listing says otherwise in plain words.</>,
                <>Every fact in a listing must be true to the best of your knowledge: year, make, model, VIN or chassis number, mileage and whether it is actual, condition, accident and flood history, title status and brand (salvage, rebuilt, lemon), modifications, and known defects. Photos must be of the actual car as it is now.</>,
                <>Stolen vehicles, vehicles with altered or missing identification numbers, and vehicles you do not have the right to sell may not be listed under any circumstances.</>,
                <>You set the price and you deal with buyers directly. We do not negotiate, collect or disburse the purchase price.</>,
                <>A listing runs for the period of the tier you chose (see <A href="/pricing">pricing</A>) or until you mark it sold or remove it. Please mark cars sold promptly.</>,
                <>Dealers and consignment houses are welcome on the same terms as private sellers, must identify themselves as dealers in the listing, and must comply with the dealer licensing and disclosure laws that apply to them.</>,
              ]}
            />
            <H3>Buyers</H3>
            <UL
              items={[
                <>Listings are written by sellers, not by us. Verify everything that matters to you: get an independent pre-purchase inspection, run the VIN, see the title, and see the car.</>,
                <>Never wire a deposit for a car nobody you trust has seen. We will never ask you to pay us for a car, and no one legitimately acting for us will either.</>,
                <>Any purchase agreement, payment, escrow, shipping or title transfer is between you and the seller. Where we refer you to an escrow or transport company, that company&apos;s terms govern your dealings with it.</>,
              ]}
            />
            <P>
              Report a suspicious listing to <A href={`mailto:${CONTACT}`}>{CONTACT}</A>. We remove
              listings we believe to be fraudulent or misdescribed, and we cooperate with law
              enforcement.
            </P>
          </div>

          <div>
            <H2 id="providers">6. Providers and the directory</H2>
            <P>
              &quot;Providers&quot; are the shops, specialists and independent operators listed in the
              directory. If you are one, the following applies to you in addition to the rest of
              these Terms.
            </P>
            <UL
              items={[
                <>
                  <strong>Accuracy.</strong> Your profile must describe your business truthfully:
                  what you do, where you work, your service area, your team, and your photos, which
                  must show your own work or premises. Do not claim credentials, affiliations,
                  awards or marque specializations you do not hold.
                </>,
                <>
                  <strong>Licenses and insurance.</strong> You are solely responsible for holding
                  every license, registration, permit, bond and insurance policy your trade and
                  location require (for example, a California Bureau of Automotive Repair
                  registration, a motor carrier authority, or an appraiser credential), and for
                  complying with the consumer-protection laws that govern your work, including
                  written estimates and authorization where the law requires them.
                </>,
                <>
                  <strong>Independent businesses.</strong> Providers are independent of Fully
                  Sorted. Nothing here creates an employment, agency, partnership or joint venture.
                  You may not present yourself as acting for Fully Sorted.
                </>,
                <>
                  <strong>Your customers are yours.</strong> An inquiry sent to you belongs to you
                  and the owner who sent it. You may quote, decline, or refer it on. You are not
                  obliged to route any work or payment through us, and we take no share of quoted
                  work.
                </>,
                <>
                  <strong>Founding members.</strong> The first {FREE_LISTINGS_THRESHOLD} providers
                  accepted into the directory are founding members. A founding member&apos;s
                  directory listing is free and remains free for as long as the provider stays in
                  good standing under these Terms, regardless of any fees we may introduce for
                  later joiners or for optional tools. No provider, founding or otherwise, can pay
                  to rank higher in the directory.
                </>,
                <>
                  <strong>Draft profiles.</strong> We may create a draft profile for a business
                  from information it has already published, so owners can find it and the
                  business can claim it. A draft profile is marked as unclaimed, contains only
                  public business information, and is removed on request as described in our{" "}
                  <A href="/privacy#public-sources">Privacy Policy</A>.
                </>,
                <>
                  <strong>Curation.</strong> We decide who appears in the directory. We may decline
                  an application, edit a profile for clarity or accuracy, or remove a provider at
                  any time, including for a pattern of poor reviews, verified complaints,
                  regulatory action, a criminal conviction related to the trade, or a breach of
                  these Terms. We will tell you why when we can.
                </>,
                <>
                  <strong>Fixed-price gigs.</strong> When fixed-price gig bookings open, a provider
                  who offers them will pay the platform fee stated in section 9 and must honor the
                  published price and scope. Until then, a gig-style request reaches you as an
                  inquiry and you quote it directly.
                </>,
              ]}
            />
          </div>

          <div>
            <H2 id="inquiries">7. Inquiries and messages</H2>
            <P>
              Inquiries exist so an owner can reach the specialist they chose. Use them for that.
              Do not send bulk, promotional or unsolicited messages through the Service, do not
              harvest contact details from profiles or listings, and do not contact a user for any
              purpose other than the one they contacted you about. An owner&apos;s message goes only
              to the provider or seller they selected; we do not forward it to others. We may
              review messages to prevent fraud and abuse, and we keep them as described in the{" "}
              <A href="/privacy#retention">Privacy Policy</A>.
            </P>
          </div>

          <div>
            <H2 id="reviews">8. Reviews</H2>
            <UL
              items={[
                <>A review must describe your own first-hand experience with that provider. No reviews of your own business, of a competitor, or on behalf of someone else, and no reviews in exchange for payment, discounts or favors.</>,
                <>Reviews tied to an inquiry sent through the Service are labelled as verified. Other reviews are labelled as unverified. We do not show an average rating until a provider has enough reviews for it to mean something.</>,
                <>Providers may post one public reply per review. Providers cannot edit or delete reviews about them, and neither can we on a provider&apos;s request. We remove reviews only when they breach these Terms (for example, they are fake, defamatory, disclose private information, or are unrelated to the provider&apos;s work), and we say so where a review was removed.</>,
                <>Threatening, bribing or suing a customer over an honest review breaches these Terms and, in California, the Consumer Review Fairness Act and Civil Code section 1670.8. Providers who do it are removed.</>,
              ]}
            />
          </div>

          <div>
            <H2 id="fees">9. Fees and payments</H2>
            <P>
              Current prices are on the <A href="/pricing">pricing page</A>, which forms part of
              these Terms. In summary:
            </P>
            <UL
              items={[
                <>
                  <strong>Browsing, searching and sending inquiries are free</strong> for owners
                  and buyers, and we do not add anything to a price a provider or seller quotes
                  you.
                </>,
                <>
                  <strong>Car listings</strong> carry a one-time, flat listing fee by tier, paid up
                  front, with no commission and no buyer&apos;s premium when the car sells. The first{" "}
                  {FREE_LISTINGS_THRESHOLD} cars listed on the marketplace are free.
                </>,
                <>
                  <strong>Provider directory listings</strong> are free. Founding members keep them
                  free for life (section 6).
                </>,
                <>
                  <strong>Fixed-price gigs</strong> are not open yet. When they open, the provider
                  will pay a platform fee of {PLATFORM_FEE_PCT_LABEL} of a completed gig booked
                  through the Service, deducted from the payout; the buyer pays the published price
                  and nothing more.
                </>,
              ]}
            />
            <P>
              Payments are processed by Stripe under its terms; we do not see or store full card
              details. Listing fees are non-refundable once the listing is published, except where
              we remove a listing through our own error or where the law requires a refund. Prices
              may change for future purchases with notice on the pricing page; a change never
              applies to a listing or founding membership you already hold. You are responsible for
              any taxes on your own sales and services. If a payment is charged back or reversed
              without cause we may suspend the associated account.
            </P>
          </div>

          <div>
            <H2 id="content">10. Your content and our license to it</H2>
            <P>
              You keep ownership of everything you post: listings, photos, videos, descriptions,
              profiles, reviews, replies, registry stories and messages (&quot;Your Content&quot;). You
              confirm you have the rights to post it and that it does not infringe anyone
              else&apos;s rights or privacy.
            </P>
            <P>
              So that the Service can work, you grant Fully Sorted a worldwide, non-exclusive,
              royalty-free license to host, store, reproduce, adapt (for example, resizing a photo
              or generating a search snippet), publish, display and distribute Your Content on the
              Service and in our own marketing of the Service, including our social media accounts,
              newsletters, and search and social previews. For providers, this includes featuring
              your business name, logo, profile photos and review excerpts in campaigns that
              promote the directory and its providers. You may opt out of marketing use by emailing{" "}
              <A href={`mailto:${CONTACT}`}>{CONTACT}</A>; we will stop new uses within ten business
              days. The license ends when you remove the content or your account, except that
              reviews and replies stay published, copies already made in the ordinary course
              (backups, caches, social posts already published) may persist, and de-identified
              market data derived from listings may be kept.
            </P>
            <P>
              We do not claim ownership of Your Content and we do not sell it. We may remove or
              refuse any content that breaches these Terms, and we may edit provider profiles for
              accuracy, format and length.
            </P>
          </div>

          <div>
            <H2 id="conduct">11. What you may not do</H2>
            <UL
              items={[
                <>List, sell or misrepresent a vehicle in breach of section 5, or offer a service you are not legally permitted to perform.</>,
                <>Post anything false, misleading, defamatory, harassing, obscene, hateful, or that discloses another person&apos;s private information.</>,
                <>Impersonate anyone, misstate your affiliation, or create accounts for another person or business without authority.</>,
                <>Scrape, crawl, copy, mirror, frame or bulk-download the Service or its data, by hand or by automation, including provider contact details, listings, market data and research, or use any of it to build a competing directory, dataset or AI training corpus, except as search engines index public pages under our robots directives.</>,
                <>Send spam, chain messages or unsolicited commercial email or texts to people you find here, or sell or share their contact details.</>,
                <>Interfere with the Service: probe, scan or test its vulnerabilities, bypass rate limits or access controls, inject code, or place unreasonable load on it.</>,
                <>Manipulate reviews, rankings or verification, or offer or accept payment for doing so.</>,
                <>Use the Service for money laundering, fraud, title washing, odometer fraud, or any other unlawful purpose.</>,
              ]}
            />
            <P>
              We may investigate suspected breaches, remove content, suspend or terminate accounts,
              and report conduct to law enforcement or regulators, without notice where we think
              notice would defeat the purpose.
            </P>
          </div>

          <div>
            <H2 id="ip">12. Our content and intellectual property</H2>
            <P>
              The Service, its design, code, wordmark, logo, the &quot;Fully Sorted&quot; name, the
              research hub articles, model histories, buying guides, glossary, Value Guide,
              registry structure and the arrangement of the directory are owned by Fully Sorted or
              its licensors and protected by copyright, trademark and other laws. You may view and
              share links to our pages for personal, non-commercial use and quote short excerpts
              with attribution and a link. Any other use, including republishing articles,
              reproducing our data, or using our marks in a way that suggests endorsement, needs
              our written permission. Photographs on the site credited to third parties are used
              under license and remain their owners&apos; property.
            </P>
          </div>

          <div>
            <H2 id="research">13. Research, Value Guide and AI-generated content</H2>
            <P>
              The research hub, model histories, buying guides, market snapshots and the Value
              Guide are editorial and informational. They are compiled from public sources and our
              own experience, they can be wrong or out of date, and they are not an appraisal, an
              inspection, investment advice, or a statement about any particular car. Do not rely
              on them for financing, insurance, tax, legal or purchase decisions without independent
              verification; where a figure matters, hire a licensed appraiser. Where we have too few
              data points for a number to mean anything, we say so rather than publish one.
            </P>
            <P>
              Some content on the Service is drafted with the help of AI systems and reviewed by a
              person before publication, and some tools generate drafts for you (for example, a
              listing description from details you enter). AI output can contain errors. You are
              responsible for checking and, if needed, correcting any AI-drafted text before you
              publish it under your name.
            </P>
          </div>

          <div>
            <H2 id="third-party">14. Third-party services</H2>
            <P>
              The Service relies on providers such as Clerk (sign-in), Stripe (payments), Vercel
              (hosting) and others named in the Privacy Policy, and links to outside sites,
              including auction houses, marketplaces, transport and escrow companies, insurers and
              affiliate shops. Your use of those services and sites is governed by their terms, not
              ours. Where a link is an affiliate link, we may earn a commission at no extra cost to
              you, and we say so on the relevant page. We are not responsible for third-party
              content, products or services.
            </P>
          </div>

          <div>
            <H2 id="termination">15. Suspension and termination</H2>
            <P>
              You may close your account at any time by emailing{" "}
              <A href={`mailto:${CONTACT}`}>{CONTACT}</A>. We may suspend or terminate your access,
              remove your listings or profile, or refuse service if you breach these Terms, if we
              are required to by law, if your conduct creates risk for other users or for us, or
              if we discontinue the Service or a part of it. On termination your right to use the
              Service ends and unpaid fees remain due. Sections 8 (as to published reviews), 10 (as
              to surviving license rights), 12, 13, 16 through 19 and 22 survive termination.
            </P>
          </div>

          <div>
            <H2 id="disclaimers">16. Disclaimers</H2>
            <P>
              THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot;. TO THE FULLEST EXTENT
              PERMITTED BY LAW, FULLY SORTED DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED,
              INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND
              NON-INFRINGEMENT, AND ANY WARRANTY ARISING FROM COURSE OF DEALING OR USAGE OF TRADE.
              WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE OR SECURE, THAT
              ANY LISTING, PROFILE, REVIEW OR RESEARCH IS ACCURATE OR COMPLETE, OR THAT ANY
              PROVIDER, SELLER OR BUYER WILL PERFORM. YOU DEAL WITH OTHER USERS AT YOUR OWN RISK.
              Some jurisdictions do not allow certain warranty exclusions, so some of the above may
              not apply to you.
            </P>
          </div>

          <div>
            <H2 id="liability">17. Limitation of liability</H2>
            <P>
              TO THE FULLEST EXTENT PERMITTED BY LAW, FULLY SORTED AND ITS FOUNDER, OFFICERS,
              CONTRACTORS AND SUPPLIERS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
              CONSEQUENTIAL, EXEMPLARY OR PUNITIVE DAMAGES, OR FOR LOST PROFITS, LOST DATA, LOSS
              OF USE, DIMINISHED VALUE OF A VEHICLE, OR COST OF SUBSTITUTE SERVICES, ARISING OUT OF
              OR RELATED TO THE SERVICE, ANY TRANSACTION OR DEALING BETWEEN USERS, ANY PROVIDER&apos;S
              WORK OR FAILURE TO WORK, OR ANY RELIANCE ON CONTENT, EVEN IF WE HAVE BEEN ADVISED OF
              THE POSSIBILITY. OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS IN ANY TWELVE-MONTH PERIOD
              WILL NOT EXCEED THE GREATER OF THE FEES YOU PAID US IN THAT PERIOD OR ONE HUNDRED US
              DOLLARS ($100). These limits do not apply to liability that cannot be limited by law,
              including for our gross negligence, willful misconduct or fraud.
            </P>
          </div>

          <div>
            <H2 id="indemnity">18. Indemnification</H2>
            <P>
              You will defend, indemnify and hold harmless Fully Sorted and its founder, officers,
              contractors and suppliers from any claim, demand, loss or expense (including
              reasonable attorneys&apos; fees) arising from Your Content, your use of the Service,
              your breach of these Terms or of any law, any vehicle you list or buy, or any
              service you provide or receive through the Service. We may take over the defense of
              any matter you are indemnifying, at our expense, and you will cooperate.
            </P>
          </div>

          <div>
            <H2 id="disputes">19. Governing law and disputes</H2>
            <P>
              These Terms are governed by the laws of the State of California and applicable US
              federal law, without regard to conflict-of-law rules. Before filing any claim, you
              agree to email us at <A href={`mailto:${CONTACT}`}>{CONTACT}</A> with a description
              of the problem and to try in good faith to resolve it with us for 30 days. If that
              fails, any claim relating to these Terms or the Service will be brought exclusively in
              the state or federal courts located in San Diego County, California, and both sides
              consent to that venue, except that either side may bring an eligible claim in small
              claims court, and we may seek an injunction in any court to protect our intellectual
              property or the security of the Service. Any claim must be filed within one year of
              when it arose, or as soon after as the law allows if the law forbids a shorter period.
            </P>
            <P>
              Disputes between users (for example, over a repair, a sale or a review) are between
              those users. We may, but are not obliged to, help facilitate a resolution.
            </P>
          </div>

          <div>
            <H2 id="dmca">20. Copyright complaints</H2>
            <P>
              If you believe content on the Service infringes your copyright, send a notice under
              the Digital Millennium Copyright Act to <A href={`mailto:${CONTACT}`}>{CONTACT}</A>{" "}
              with the subject &quot;DMCA notice&quot;, including: identification of the work and of the
              infringing material with its URL; your contact details; a statement that you believe
              in good faith the use is unauthorized; a statement under penalty of perjury that the
              notice is accurate and that you are the owner or authorized to act for the owner;
              and your physical or electronic signature. We remove infringing material, notify the
              poster, accept counter-notices, and terminate repeat infringers.
            </P>
          </div>

          <div>
            <H2 id="california">21. Notice to California users</H2>
            <P>
              Under California Civil Code section 1789.3, California users are entitled to the
              following notice: the Service is provided by Fully Sorted, San Diego, California.
              Fees are described in section 9 and on the pricing page. Complaints or requests for
              further information may be sent to <A href={`mailto:${CONTACT}`}>{CONTACT}</A>. The
              Complaint Assistance Unit of the Division of Consumer Services of the California
              Department of Consumer Affairs may be contacted in writing at 1625 North Market
              Blvd., Suite N 112, Sacramento, CA 95834, or by telephone at (800) 952-5210.
            </P>
          </div>

          <div>
            <H2 id="general">22. General terms</H2>
            <UL
              items={[
                <><strong>Changes.</strong> We may update these Terms. We will post the new version here with a new date and, for material changes, notify account holders by email or a site notice at least 14 days before they take effect. Continued use after that date is acceptance. Changes never apply retroactively to a listing already purchased or a founding membership already granted.</>,
                <><strong>Electronic communications.</strong> You agree to receive notices, receipts and legal communications from us electronically, at the email on your account.</>,
                <><strong>Entire agreement.</strong> These Terms, the Privacy Policy and the pricing page are the whole agreement between you and us about the Service and replace any earlier terms.</>,
                <><strong>Severability and waiver.</strong> If a provision is unenforceable the rest stays in force and the provision is enforced to the extent allowed. Our not enforcing a provision is not a waiver of it.</>,
                <><strong>Assignment.</strong> You may not transfer your rights under these Terms. We may assign them to a successor to the business, who will honor them.</>,
                <><strong>Force majeure.</strong> Neither side is liable for delay or failure caused by events beyond reasonable control.</>,
                <><strong>No third-party beneficiaries.</strong> These Terms are for you and us alone, except that the people indemnified in section 18 may rely on it.</>,
              ]}
            />
          </div>

          <div>
            <H2 id="contact">23. Contact</H2>
            <P>
              Questions about these Terms go to Chris Peterson, founder, at{" "}
              <A href={`mailto:${CONTACT}`}>{CONTACT}</A>, or through the{" "}
              <A href="/contact">contact form</A>. Our postal address appears in the footer of every
              email we send.
            </P>
          </div>
        </div>
      </section>
    </main>
  );
}
