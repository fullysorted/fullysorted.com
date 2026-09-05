import type { Metadata } from "next";
import Link from "next/link";
import { PrivacyChoices } from "@/components/legal/PrivacyChoices";

export const metadata: Metadata = {
  alternates: { canonical: "/privacy" },
  title: "Privacy Policy",
  description:
    "What Fully Sorted collects, why, who sees it, how long we keep it, and the choices you have, including your California privacy rights.",
};

const LAST_UPDATED = "September 5, 2026";
const CONTACT = "chris@fullysorted.com";

/* ------------------------------------------------------------------ */
/* Small presentational helpers so the policy reads as one document.   */
/* ------------------------------------------------------------------ */

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
  const external = href.startsWith("http");
  const cls = "font-semibold hover:opacity-70 transition-opacity";
  const style = { color: "#1E6091" };
  return external ? (
    <a href={href} className={cls} style={style} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ) : (
    <Link href={href} className={cls} style={style}>
      {children}
    </Link>
  );
}

const TOC: [string, string][] = [
  ["scope", "1. Who this covers"],
  ["collect", "2. What we collect"],
  ["public-sources", "3. Business information from public sources"],
  ["use", "4. How we use it"],
  ["ai", "5. AI features"],
  ["share", "6. Who we share it with"],
  ["public", "7. What is public on the site"],
  ["cookies", "8. Cookies, analytics and advertising"],
  ["email", "9. Email and text messages"],
  ["retention", "10. How long we keep it"],
  ["security", "11. Security"],
  ["your-choices", "12. Your choices and your rights"],
  ["california", "13. California privacy notice"],
  ["other", "14. Visitors outside California and the US"],
  ["children", "15. Children"],
  ["changes", "16. Changes to this policy"],
  ["contact", "17. Contact"],
];

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-base leading-relaxed mb-4" style={{ color: "#3a3a30" }}>
            The short version: we collect what it takes to run a collector car directory and
            marketplace, we do not sell your personal information, and analytics and advertising
            cookies stay off until you say otherwise. The long version is below, in plain English.
          </p>
          <p className="text-sm" style={{ color: "#9a9a8a" }}>
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        {/* Contents */}
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
          {/* 1 */}
          <div>
            <H2 id="scope">1. Who this covers</H2>
            <P>
              This policy is written by Fully Sorted (&quot;Fully Sorted&quot;, &quot;we&quot;, &quot;us&quot;), based
              in San Diego, California. It covers fullysorted.com, our emails and text messages, and
              any other place we link to it. It applies to everyone who uses the site: people
              browsing, owners listing or researching a car, buyers, and the specialists, shops and
              other businesses (&quot;providers&quot;) who appear in the services directory.
            </P>
            <P>
              It does not cover the practices of providers, sellers or buyers you deal with through
              the site. Once you contact a specialist or agree a sale, what they do with your details
              is between you and them. It also does not cover third-party sites we link to.
            </P>
          </div>

          {/* 2 */}
          <div>
            <H2 id="collect">2. What we collect</H2>
            <H3>Information you give us</H3>
            <UL
              items={[
                <>
                  <strong>Account details.</strong> Name, email address and, if you add it, a phone
                  number and profile photo. Sign-in is handled by Clerk, our authentication
                  provider; if you sign in with Google or another identity provider, we receive
                  the name, email and profile picture that provider shares. We never see your
                  password.
                </>,
                <>
                  <strong>Vehicle listings.</strong> Year, make, model, VIN or chassis number,
                  mileage, condition, price, location, description, photos and video, and the
                  tier you choose. Sale submissions to our research registry work the same way.
                </>,
                <>
                  <strong>Provider applications and profiles.</strong> Business name, contact
                  name, business email and phone, website, address or service area, trades,
                  marques and specialties, where the work happens (workshop, mobile, remote),
                  team size, photos, and anything you write in your profile.
                </>,
                <>
                  <strong>Inquiries and messages.</strong> When you contact a provider or a
                  seller through the site we collect your name, email, phone if you give it, your
                  message, and any optional details about the car you choose to add (year, make,
                  model, chassis, condition, location, timing and budget range). Nothing in that
                  optional panel is required.
                </>,
                <>
                  <strong>Reviews and comments.</strong> The text and rating you submit, the name
                  you choose to show, and the fact that a review was tied to a completed inquiry
                  where that applies. Providers may post a reply, which is also public.
                </>,
                <>
                  <strong>Saved listings and alerts.</strong> Cars you save and the searches or
                  price alerts you ask us to email you about.
                </>,
                <>
                  <strong>Registry submissions.</strong> Chassis numbers, ownership history,
                  documents, photos and owner stories you submit to the research registry.
                </>,
                <>
                  <strong>Payments.</strong> Listing fees are processed by Stripe. Stripe collects
                  your card details directly; we receive a confirmation, the last four digits of the
                  card, the card brand, and your billing name and email. Full card numbers never
                  touch our servers. If provider payouts are switched on in future, Stripe will
                  collect the identity and bank details it needs from providers under its own
                  privacy policy.
                </>,
                <>
                  <strong>Correspondence.</strong> Emails, contact-form messages, support requests
                  and phone or text conversations with us, including notes we make about them.
                </>,
              ]}
            />

            <H3>Information collected automatically</H3>
            <UL
              items={[
                <>
                  <strong>Device and log data.</strong> IP address, browser type, operating system,
                  referring page, the pages you view and when, and the rough location an IP address
                  implies (city level). Our hosting provider, Vercel, keeps standard server logs.
                </>,
                <>
                  <strong>Cookies and similar technologies.</strong> Essential cookies for
                  sign-in, security and your preferences; and, only with your consent, analytics
                  and advertising cookies. Section 8 has the detail and the off switch.
                </>,
                <>
                  <strong>Abuse prevention.</strong> We rate-limit public forms by IP address and
                  keep short-lived records of attempts to stop floods and spam.
                </>,
              ]}
            />

            <H3>Information from other sources</H3>
            <UL
              items={[
                <>
                  <strong>Vehicle data.</strong> When you enter a VIN we send it to the US
                  National Highway Traffic Safety Administration&apos;s public vPIC decoder to fill
                  in year, make, model and specifications. The VIN alone is sent, never your name.
                </>,
                <>
                  <strong>Market data.</strong> Published auction results and asking prices from
                  public sources, which relate to cars rather than to you.
                </>,
                <>
                  <strong>Business information about providers.</strong> See section 3.
                </>,
              ]}
            />
          </div>

          {/* 3 */}
          <div>
            <H2 id="public-sources">3. Business information from public sources</H2>
            <P>
              The directory is seeded by hand. Before a shop has signed up, we may create a draft
              profile for it using information the business has already made public: its name,
              trade, address, phone number, website, and a short description of what it does,
              taken from its own website, club and event listings, and similar public sources. We
              do this so that owners searching for help see real businesses, and so that the shop
              can claim a ready-made profile in one click rather than starting from nothing.
            </P>
            <P>
              If we hold a draft profile for your business you can claim it, correct it, or have
              it removed at any time by emailing <A href={`mailto:${CONTACT}`}>{CONTACT}</A>.
              Removal is permanent: we keep only your business email on a suppression list so we
              do not contact you or re-create the profile. We do not create draft profiles from
              non-public sources, and we do not collect personal information about individuals
              beyond a business contact name where the business itself publishes one.
            </P>
          </div>

          {/* 4 */}
          <div>
            <H2 id="use">4. How we use it</H2>
            <UL
              items={[
                <>To run the site: create accounts, publish listings and profiles, deliver inquiries to the provider or seller you chose, process listing fees, and send the emails the service depends on (confirmations, replies, alerts you asked for).</>,
                <>To build a trustworthy directory: verify that a review comes from a real inquiry, let providers reply, and keep out fraud, spam and duplicate accounts.</>,
                <>To improve the site: understand which pages, research articles and trades people actually use, fix errors, and test changes. Where this uses analytics cookies it happens only with your consent.</>,
                <>To communicate with you: answer your questions, tell you about changes to the service or this policy, and, if you have not opted out, tell you about new features and research. Every marketing email has an unsubscribe link.</>,
                <>To measure our own advertising, only with your consent (section 8).</>,
                <>To meet legal obligations, enforce our <A href="/terms">Terms of Service</A>, and protect the rights and safety of users, providers and the public.</>,
              ]}
            />
            <P>
              We do not use your personal information to make decisions with legal or similarly
              significant effects on you, and we do not build profiles of individuals for
              advertising.
            </P>
          </div>

          {/* 5 */}
          <div>
            <H2 id="ai">5. AI features</H2>
            <P>
              Some features use large language models supplied by Anthropic: for example, drafting
              a listing description from the details you enter, drafting the copy on a provider
              profile, and producing the model histories in our research hub. When you use one of
              these features, the text and vehicle details you provide are sent to Anthropic&apos;s
              API to generate the result. Under Anthropic&apos;s commercial terms that data is not used
              to train its models. We do not send your account credentials, payment details or
              private messages to any AI provider. Anything generated for you is a draft you can
              edit or discard before it is published.
            </P>
          </div>

          {/* 6 */}
          <div>
            <H2 id="share">6. Who we share it with</H2>
            <P>We do not sell personal information, and we do not rent lists. We share it in these cases:</P>
            <UL
              items={[
                <>
                  <strong>With the person you chose to contact.</strong> An inquiry goes to the
                  provider or seller you selected, with your name, contact details and message,
                  and only to them. We do not forward one inquiry to several shops.
                </>,
                <>
                  <strong>With service providers who work for us</strong>, under contracts that
                  limit them to our instructions: Vercel (hosting, file storage for photos, and
                  privacy-preserving aggregate analytics), Neon (database), Clerk (sign-in), Stripe
                  (payments), Resend (transactional email), Anthropic (AI features, section 5), and
                  Google and Meta (analytics and advertising measurement, only with your consent,
                  section 8).
                </>,
                <>
                  <strong>Publicly, when you publish.</strong> Listings, provider profiles, reviews,
                  comments and registry stories are public by design. Section 7 lists exactly what
                  shows.
                </>,
                <>
                  <strong>When the law requires it</strong>, for example a subpoena or court order,
                  or when we believe in good faith that disclosure is needed to prevent fraud,
                  protect someone&apos;s safety, or enforce our terms.
                </>,
                <>
                  <strong>If the business changes hands.</strong> If Fully Sorted is acquired or
                  merges, your information may transfer with it; this policy would continue to
                  apply until you are told otherwise.
                </>,
                <>
                  <strong>Aggregated or de-identified data</strong> that cannot reasonably
                  identify you, such as how many inquiries a trade receives in a month. We commit
                  not to try to re-identify it.
                </>,
              ]}
            />
          </div>

          {/* 7 */}
          <div>
            <H2 id="public">7. What is public on the site</H2>
            <UL
              items={[
                <>
                  <strong>Car listings</strong> show everything you enter except your email and
                  phone number, which are only released to a buyer when you reply to them. Think
                  before including a full VIN, license plate or house number in photos or text; we
                  recommend cropping plates and stating a city rather than a street.
                </>,
                <>
                  <strong>Provider profiles</strong> show the business name, trades, service area,
                  photos, description, reviews and replies, and the business contact details the
                  provider chooses to display.
                </>,
                <>
                  <strong>Reviews and comments</strong> show the display name you chose and the
                  date. Reviews cannot be deleted by the provider they are about, which is what
                  makes them worth reading.
                </>,
                <>
                  <strong>Registry entries</strong> show the vehicle history and owner stories
                  submitted, with owner names only where the submitter asked for them to appear.
                </>,
              ]}
            />
            <P>
              Public pages can be indexed by search engines and copied by others. If you remove a
              listing or profile we remove it from the site promptly, but we cannot recall copies
              made while it was live.
            </P>
          </div>

          {/* 8 */}
          <div>
            <H2 id="cookies">8. Cookies, analytics and advertising</H2>
            <P>
              A cookie is a small file your browser stores. We use two kinds, and you choose
              whether the second kind is on.
            </P>
            <H3>Essential (always on)</H3>
            <UL
              items={[
                <>Clerk session cookies that keep you signed in and protect against forged requests.</>,
                <>Our own preference storage, such as your cookie choice and a dismissed banner.</>,
                <>Stripe cookies on checkout pages, used for fraud prevention.</>,
                <>Vercel Analytics, which counts page views without cookies or cross-site identifiers and does not identify you.</>,
              ]}
            />
            <H3>Analytics and advertising (off until you accept)</H3>
            <UL
              items={[
                <>
                  <strong>Google Analytics 4</strong> tells us which pages are read and how people
                  move through the site. Google may set cookies and receives your IP address and
                  device information. Google Analytics 4 does not store IP addresses, and we keep
                  Google&apos;s data-sharing settings at the minimum it allows.
                </>,
                <>
                  <strong>Meta Pixel</strong> lets us see whether our own ads on Instagram and
                  Facebook led to a visit or a signup. Meta receives your IP address, device
                  information and the pages you viewed, and can link that to your Meta account if
                  you have one. Under California law this counts as &quot;sharing&quot; for
                  cross-context behavioral advertising, which is why it is off by default and why
                  you can switch it off below.
                </>,
              ]}
            />
            <P>
              We do not use advertising networks that follow you across unrelated sites, we do not
              sell browsing data, and we honor the Global Privacy Control browser signal: if your
              browser sends it, analytics and advertising cookies stay off and we record you as
              opted out. Your choice is stored in this browser only, so make it again on other
              devices. You can also block or clear cookies in your browser settings; the site
              works without the optional ones.
            </P>
            <PrivacyChoices />
          </div>

          {/* 9 */}
          <div>
            <H2 id="email">9. Email and text messages</H2>
            <P>
              <strong>Service emails</strong> (inquiry deliveries, receipts, listing status, reply
              notifications, review requests tied to a real inquiry, and security notices) are
              part of using the site and are sent to the address on your account.
            </P>
            <P>
              <strong>Marketing emails</strong>, including research and feature news, go only to
              people who signed up or asked for them. Every one carries an unsubscribe link and our
              postal address, and unsubscribes are processed within ten business days as the
              CAN-SPAM Act requires; in practice it is immediate. Provider outreach emails include
              a one-line opt-out, and we keep a suppression list so a business that says no is not
              contacted again.
            </P>
            <P>
              <strong>Text messages.</strong> We only text people who gave us a mobile number and
              agreed to be texted. Reply STOP to any message to end them. Carrier rates may apply.
            </P>
          </div>

          {/* 10 */}
          <div>
            <H2 id="retention">10. How long we keep it</H2>
            <UL
              items={[
                <>Account data: for as long as the account exists, then deleted or de-identified within 30 days of a verified deletion request.</>,
                <>Listings and photos: while the listing is live, plus 90 days so a sale can be completed and disputes resolved, then deleted from storage. Sold-price data may be kept in de-identified form for market research.</>,
                <>Provider profiles: while the provider is in the directory. Removed profiles are deleted, except the suppression entry described in section 3.</>,
                <>Inquiries and messages: three years from the last message, so both sides have a record of what was agreed and so reviews can be verified against a real inquiry.</>,
                <>Reviews: for the life of the provider profile they are attached to, because a review record that can be quietly erased is worth nothing.</>,
                <>Payment records: seven years, as tax and accounting rules require.</>,
                <>Server logs and rate-limit records: 30 days or less.</>,
                <>Analytics data: Google Analytics is set to its shortest retention period (two months for user-level data).</>,
              ]}
            />
            <P>
              We may keep information longer where the law requires it, to resolve a dispute, or
              to enforce our terms, and we may keep de-identified data indefinitely.
            </P>
          </div>

          {/* 11 */}
          <div>
            <H2 id="security">11. Security</H2>
            <P>
              Everything travels over HTTPS. Data is stored with providers that hold independent
              security certifications, in encrypted form at rest. Access to production data is
              limited to the people who need it to run the site, behind two-factor authentication.
              Payment details are handled entirely by Stripe, a PCI DSS Level 1 processor. Public
              forms are rate-limited and screened for abuse.
            </P>
            <P>
              No system is perfectly secure. If we learn of a breach that affects your personal
              information we will tell you without unreasonable delay, and in any case within the
              time California law requires, and we will tell you what happened and what we are
              doing about it. Please report suspected security problems to{" "}
              <A href={`mailto:${CONTACT}`}>{CONTACT}</A>.
            </P>
          </div>

          {/* 12 */}
          <div>
            <H2 id="your-choices">12. Your choices and your rights</H2>
            <P>Whoever you are and wherever you live, you can:</P>
            <UL
              items={[
                <><strong>See and correct</strong> your account, listing and profile details from your dashboard at any time.</>,
                <><strong>Delete</strong> your account and data by emailing us. We verify the request against the email on the account and complete it within 30 days, subject to the retention rules in section 10.</>,
                <><strong>Opt out of analytics and advertising cookies</strong> using the control in section 8, or by turning on Global Privacy Control in your browser.</>,
                <><strong>Unsubscribe</strong> from marketing email with the link in any message, and from texts by replying STOP.</>,
                <><strong>Have a draft business profile removed</strong> (section 3).</>,
                <><strong>Ask us what we hold about you</strong> and receive a copy in a portable format.</>,
              ]}
            />
            <P>
              To exercise any of these, email <A href={`mailto:${CONTACT}`}>{CONTACT}</A> or use
              the <A href="/contact">contact form</A>. We will not treat you differently for
              exercising a privacy right. You may also appoint someone to make a request for you;
              we will ask for proof that you authorized them.
            </P>
          </div>

          {/* 13 */}
          <div>
            <H2 id="california">13. California privacy notice</H2>
            <P>
              This section is our notice at collection under the California Consumer Privacy Act
              as amended by the California Privacy Rights Act (together, the &quot;CCPA&quot;). It
              applies to California residents and supplements the rest of this policy.
            </P>
            <H3>Categories of personal information collected in the last 12 months</H3>
            <UL
              items={[
                <><strong>Identifiers:</strong> name, email, phone, postal address or city, account ID, IP address. Source: you, your device. Purpose: run the service, communicate, prevent fraud.</>,
                <><strong>Customer records:</strong> billing name, last four card digits, card brand. Source: you via Stripe. Purpose: payments and receipts.</>,
                <><strong>Commercial information:</strong> listings created, tiers purchased, inquiries sent, saved cars, reviews. Source: you. Purpose: run the service, verify reviews, improve the site.</>,
                <><strong>Internet activity:</strong> pages viewed, referrers, device and browser data. Source: your device, analytics cookies with consent. Purpose: run and improve the site, measure our own ads.</>,
                <><strong>Geolocation (coarse):</strong> city-level location inferred from IP, and any location you enter. Source: your device, you. Purpose: show relevant providers and listings.</>,
                <><strong>Audio and visual:</strong> photos and video you upload. Source: you. Purpose: display your listing or profile.</>,
                <><strong>Professional information:</strong> business name, trade, role, for providers. Source: you, public sources (section 3). Purpose: the directory.</>,
                <><strong>Inferences:</strong> we do not build inferential profiles about individuals.</>,
              ]}
            />
            <P>
              <strong>Sensitive personal information.</strong> We do not intentionally collect
              sensitive personal information as the CCPA defines it (government ID numbers, precise
              geolocation, account log-in with credentials we hold, racial or ethnic origin,
              religious beliefs, health, sexual orientation, or the contents of mail, email or
              texts where we are not the intended recipient). Please do not put such information
              in listings, profiles or messages. Sign-in credentials are held by Clerk, not by us.
            </P>
            <P>
              <strong>Sale and sharing.</strong> We have not sold personal information in the last
              12 months and we do not sell it. With your consent we &quot;share&quot; internet activity
              information with Meta for cross-context behavioral advertising, as described in
              section 8. You can opt out at any time with the{" "}
              <a href="#your-choices" className="font-semibold" style={{ color: "#1E6091" }}>
                Do Not Sell or Share My Personal Information
              </a>{" "}
              control in section 8, or by using a browser that sends the Global Privacy Control
              signal, which we honor as a valid opt-out. We have no actual knowledge of selling or
              sharing the personal information of anyone under 16.
            </P>
            <H3>Your CCPA rights</H3>
            <UL
              items={[
                <>To <strong>know</strong> what personal information we have collected about you, the categories of sources, our purposes, and the categories of third parties we disclosed it to, and to receive a copy.</>,
                <>To <strong>delete</strong> personal information we collected from you, with the exceptions the law allows (for example, completing a transaction, security, or legal obligations).</>,
                <>To <strong>correct</strong> inaccurate personal information.</>,
                <>To <strong>opt out of sale or sharing</strong> (section 8).</>,
                <>To <strong>limit use of sensitive personal information</strong>; we do not use it for anything beyond what the law permits without limitation, so no separate control is needed.</>,
                <>To <strong>not be discriminated against</strong> for exercising any of these rights.</>,
              ]}
            />
            <P>
              <strong>How to make a request.</strong> Email{" "}
              <A href={`mailto:${CONTACT}`}>{CONTACT}</A> with &quot;California privacy
              request&quot; in the subject, or use the <A href="/contact">contact form</A>. We will
              confirm receipt within 10 business days and respond within 45 days, extendable once
              by another 45 days with notice. To verify you, we match the request to the email on
              your account and may ask you to confirm details only the account holder would know;
              we never ask for government ID unless the law requires it. An authorized agent may
              submit a request with your signed permission. Requests are free up to twice in 12
              months.
            </P>
            <P>
              <strong>Financial incentives.</strong> Founding-provider free listings and
              free-listing promotions for the first cars on the marketplace are offered to
              everyone on the same terms and are not conditioned on the collection or retention
              of personal information, so they are not financial incentive programs under the CCPA.
            </P>
            <P>
              <strong>Shine the Light.</strong> California Civil Code section 1798.83 lets
              residents ask which personal information we disclosed to third parties for their own
              direct marketing. The answer is none; we do not do that.
            </P>
            <P>
              <strong>Metrics.</strong> The CCPA asks businesses of a certain size to publish
              request statistics. We are below that threshold today; if that changes we will
              publish them here.
            </P>
          </div>

          {/* 14 */}
          <div>
            <H2 id="other">14. Visitors outside California and the US</H2>
            <P>
              Fully Sorted is a US service and your information is stored and processed in the
              United States. Residents of other US states with privacy laws (including Colorado,
              Connecticut, Oregon, Texas, Utah and Virginia) have rights similar to those in
              section 13; use the same contact and we will honor them. If you visit from the EU,
              UK or elsewhere, we process your information on the basis of performing the service
              you asked for, our legitimate interest in running and securing the site, your
              consent for optional cookies, and legal obligations; you may exercise the rights in
              section 12 and lodge a complaint with your local authority. By using the site from
              outside the US you understand your information will be transferred to the US, which
              may not offer the same protections as your home jurisdiction.
            </P>
          </div>

          {/* 15 */}
          <div>
            <H2 id="children">15. Children</H2>
            <P>
              Fully Sorted is for adults. You must be 18 or older to create an account, list a car,
              apply as a provider or contact anyone through the site. We do not knowingly collect
              personal information from anyone under 18. If you believe a minor has given us
              information, email <A href={`mailto:${CONTACT}`}>{CONTACT}</A> and we will delete it.
            </P>
          </div>

          {/* 16 */}
          <div>
            <H2 id="changes">16. Changes to this policy</H2>
            <P>
              When we change this policy we update the date at the top. For material changes,
              such as a new category of data or a new purpose, we will tell account holders by
              email or a notice on the site before the change takes effect. Earlier versions are
              available on request.
            </P>
          </div>

          {/* 17 */}
          <div>
            <H2 id="contact">17. Contact</H2>
            <P>
              Privacy questions and requests go to Chris Peterson, founder, at{" "}
              <A href={`mailto:${CONTACT}`}>{CONTACT}</A>, or through the{" "}
              <A href="/contact">contact form</A>. Our postal address appears in the footer of
              every email we send. A person reads every message; there is no ticket queue to fall
              into.
            </P>
          </div>
        </div>
      </section>
    </main>
  );
}
