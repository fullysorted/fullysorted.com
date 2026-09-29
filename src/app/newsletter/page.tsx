import type { Metadata } from "next";
import Link from "next/link";
import { confirmByToken, getByToken } from "@/lib/newsletter";
import { SignupForm } from "@/components/newsletter/SignupForm";
import { CarDoodle } from "@/components/newsletter/CarDoodle";
import { ManagePrefs, UnsubscribeButton } from "./NewsletterClient";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "New cars and new shops, near you",
  description: "A short email when a car you'd want is listed or a good specialist joins near you. No more than once a week.",
  alternates: { canonical: "/newsletter" },
};

const INK = "#12352A";
const MUTED = "#5f6b66";

type SP = Promise<{ c?: string; u?: string; m?: string }>;

export default async function NewsletterPage({ searchParams }: { searchParams: SP }) {
  const sp = await searchParams;

  // ─── Confirm (link in the confirmation email) ──────────────────────────────
  if (sp.c) {
    const sub = await confirmByToken(sp.c).catch(() => null);
    return (
      <Shell>
        {!sub ? (
          <Missing />
        ) : sub.status === "unsubscribed" ? (
          <>
            <H>This address was unsubscribed.</H>
            <P>Sign up again below if you changed your mind.</P>
            <div className="mt-6"><SignupForm variant="page" source="page" /></div>
          </>
        ) : (
          <>
            <CarDoodle driving className="w-32 mb-4" />
            <H>You&apos;re on the list.</H>
            <P>The first one comes when there&apos;s something worth sending. Tune it below, or leave it as is.</P>
            <div className="mt-6"><ManagePrefs token={sp.c} initial={pub(sub)} /></div>
          </>
        )}
      </Shell>
    );
  }

  // ─── Manage (link in every email) ──────────────────────────────────────────
  if (sp.m) {
    const sub = await getByToken(sp.m).catch(() => null);
    return (
      <Shell>
        {!sub ? <Missing /> : sub.status === "unsubscribed" ? (
          <>
            <H>This address is unsubscribed.</H>
            <div className="mt-6"><SignupForm variant="page" source="page" /></div>
          </>
        ) : (
          <>
            <H>Your email settings</H>
            <P>{sub.email}{sub.status === "pending" ? " · not confirmed yet, check your inbox" : ""}</P>
            <div className="mt-6"><ManagePrefs token={sp.m} initial={pub(sub)} /></div>
          </>
        )}
      </Shell>
    );
  }

  // ─── Unsubscribe (asks first, so link scanners can't do it for you) ────────
  if (sp.u) {
    const sub = await getByToken(sp.u).catch(() => null);
    return (
      <Shell>
        {!sub ? <Missing /> : <UnsubscribeButton token={sp.u} email={sub.email} already={sub.status === "unsubscribed"} manageHref={`/newsletter?m=${sp.u}`} />}
      </Shell>
    );
  }

  // ─── Plain signup page, for links from social and email signatures ────────
  return (
    <Shell>
      <SignupForm
        variant="page"
        source="page"
        eyebrow="The short list"
        title="New cars and new shops, near you."
        blurb="A short email when a car you'd want is listed, or a good specialist joins near you. Pick what you care about, add a ZIP if you want it local. No more than once a week, and one click to leave."
      />
    </Shell>
  );
}

function pub(s: { wantCars: boolean; wantShops: boolean; wantResearch: boolean; zip: string | null; radiusMi: number; marques: string[] }) {
  return { wantCars: s.wantCars, wantShops: s.wantShops, wantResearch: s.wantResearch, zip: s.zip, radiusMi: s.radiusMi, marques: s.marques };
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white min-h-[70vh]">
      <div className="max-w-xl mx-auto px-4 sm:px-6 py-14 sm:py-20">{children}</div>
    </div>
  );
}
function H({ children }: { children: React.ReactNode }) {
  return <h1 className="font-display tracking-tight text-3xl sm:text-4xl" style={{ color: INK }}>{children}</h1>;
}
function P({ children }: { children: React.ReactNode }) {
  return <p className="text-[15px] mt-2" style={{ color: MUTED }}>{children}</p>;
}
function Missing() {
  return (
    <>
      <H>That link has run out of road.</H>
      <P>It may be old or cut off by your email app. Sign up again and a fresh one comes straight over.</P>
      <div className="mt-6"><SignupForm variant="page" source="page" /></div>
      <p className="text-sm mt-6" style={{ color: MUTED }}>Or <Link href="/contact" className="underline">get in touch</Link>.</p>
    </>
  );
}
