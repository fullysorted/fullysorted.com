import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "About Chris Peterson",
  description:
    "25 years in the collector car world. San Diego native. Grandson of the founder of Jack in the Box. This is the story behind Fully Sorted.",
};

export default function AboutPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      {/* Header */}
      <header className="mb-12">
        <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
          About Fully Sorted
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
          Built by an enthusiast.
          <br />
          <span className="text-text-secondary">For enthusiasts.</span>
        </h1>
      </header>

      {/* The Story */}
      <div className="prose prose-lg max-w-none space-y-6 text-text-secondary leading-relaxed">
        <p className="text-xl text-foreground leading-relaxed">
          I&apos;m Chris Peterson — a 44-year-old San Diego native with 25 years
          in the collector car world. I grew up in a prestige vintage car
          dealership in Southern California, surrounded by the smell of old
          leather and the sound of carbureted engines since before I could drive.
        </p>

        <p>
          I&apos;ve spent my career evaluating, buying, selling, and advising on
          collector vehicles at every level — from barn-find projects to
          seven-figure concours cars. I&apos;ve worked as a car specialist with
          major auction houses, I&apos;ve driven the original Batmobile around San
          Diego, and I&apos;ve watched this industry evolve from handshake deals
          in dusty garages to a global digital marketplace.
        </p>

        <h2 className="text-2xl font-bold text-foreground pt-4">
          Where It Started
        </h2>

        <p>
          My grandfather, Robert O. Peterson, founded Jack in the Box restaurants
          in San Diego in 1951. He was an innovator — he saw a future others
          didn&apos;t and built something that changed how America ate. That
          entrepreneurial DNA runs in my family.
        </p>

        <p>
          I&apos;m not trying to reinvent fast food. But I am trying to do for the
          collector car community what my grandfather did for drive-through
          dining: make something that was intimidating and fragmented feel
          accessible, trustworthy, and <em>sorted</em>.
        </p>

        <h2 className="text-2xl font-bold text-foreground pt-4">
          Why Fully Sorted Exists
        </h2>

        <p>
          If you&apos;ve ever bought or sold a collector car, you know the pain
          points. Where do you find a reliable pre-purchase inspector? How do you
          know if the asking price is fair? Who do you trust to transport a car
          you just spent $75,000 on? Every collector I know has a mental Rolodex
          of trusted people — but nobody had put it all in one place. Until now.
        </p>

        <p>
          Fully Sorted is the first automotive services hub designed specifically
          for collector cars and the passionate owners who cherish them. It&apos;s
          not another auction house. It&apos;s not a dealer network. It&apos;s a
          peer-to-peer community and marketplace built by me, for you.
        </p>

        <h2 className="text-2xl font-bold text-foreground pt-4">
          Beyond the Cars
        </h2>

        <p>
          Outside of the car world, I&apos;m a gardener, a cook, a hiker, and an
          adventurer. I believe the best conversations happen around a fire pit
          with good food and a cold drink after a long day outdoors. That
          spirit — laid-back but purposeful, knowledgeable but never
          pretentious — is the soul of Fully Sorted.
        </p>

        <p>
          San Diego raised me to be that way, and this site should feel that way
          too. Think of it as my garage door, open to anyone who shares the
          passion.
        </p>

        <p className="text-foreground font-medium">
          Let&apos;s get it sorted.
        </p>
      </div>

      {/* Contact Card */}
      <div className="mt-14 p-6 bg-surface rounded-xl border border-border">
        <h3 className="font-semibold text-foreground mb-4">Get in Touch</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm text-text-secondary">
            <MapPin className="w-4 h-4 text-accent" />
            San Diego, California
          </div>
          <div className="flex items-center gap-3 text-sm text-text-secondary">
            <Phone className="w-4 h-4 text-accent" />
            (619) 823-2132
          </div>
          <div className="flex items-center gap-3 text-sm text-text-secondary">
            <Mail className="w-4 h-4 text-accent" />
            chris@fullysorted.com
          </div>
        </div>
        <div className="mt-5">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
          >
            Send a Message <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
