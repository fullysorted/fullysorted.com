"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Share2,
  MapPin,
  Gauge,
  Cog,
  CheckCircle,
  ArrowLeft,
  MessageCircle,
  TrendingDown,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  X,
  Camera,
} from "lucide-react";
import { formatPrice, formatMileage, cn } from "@/lib/utils";
import type { Vehicle } from "@/lib/sample-data";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  vehicle: Vehicle;
}

function PhotoGallery({ vehicle }: { vehicle: Vehicle }) {
  const allPhotos =
    vehicle.photos && vehicle.photos.length > 0
      ? vehicle.photos
      : [vehicle.imageUrl];

  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const goNext = () => setActiveIndex((i) => (i + 1) % allPhotos.length);
  const goPrev = () =>
    setActiveIndex((i) => (i - 1 + allPhotos.length) % allPhotos.length);

  return (
    <>
      {/* Main image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="relative aspect-[16/9] sm:aspect-[16/8] rounded-xl overflow-hidden mb-3 bg-surface cursor-zoom-in"
        onClick={() => setLightboxOpen(true)}
      >
        <Image
          src={allPhotos[activeIndex]}
          alt={`${vehicle.title} — photo ${activeIndex + 1}`}
          fill
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="object-cover"
          priority
        />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          {vehicle.featured && (
            <span className="px-3 py-1 text-xs font-semibold bg-orange text-white rounded-md">
              Featured
            </span>
          )}
          {vehicle.sortedPrice && (
            <span className="px-3 py-1 text-xs font-semibold bg-green text-white rounded-md flex items-center gap-1">
              <CheckCircle className="w-3 h-3" /> Sorted Price
            </span>
          )}
        </div>

        {/* Photo counter */}
        <div className="absolute bottom-4 right-4 px-3 py-1.5 text-sm font-medium bg-black/60 text-white rounded-lg flex items-center gap-1.5">
          <Camera className="w-3.5 h-3.5" />
          {activeIndex + 1} / {allPhotos.length}
        </div>

        {/* Prev / Next arrows */}
        {allPhotos.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </motion.div>

      {/* Thumbnail strip */}
      {allPhotos.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {allPhotos.map((url, i) => (
            <button
              key={url + i}
              onClick={() => setActiveIndex(i)}
              className={cn(
                "relative w-20 h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all",
                i === activeIndex
                  ? "border-accent opacity-100"
                  : "border-transparent opacity-55 hover:opacity-85"
              )}
            >
              <Image
                src={url}
                alt={`Thumbnail ${i + 1}`}
                fill
                sizes="80px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              onClick={() => setLightboxOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>

            {allPhotos.length > 1 && (
              <>
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    goPrev();
                  }}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    goNext();
                  }}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="relative w-full max-w-5xl max-h-[85vh] aspect-[16/10] mx-16"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={allPhotos[activeIndex]}
                alt={`${vehicle.title} — photo ${activeIndex + 1}`}
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-contain"
                priority
              />
            </motion.div>

            <div className="absolute bottom-6 text-white/60 text-sm">
              {activeIndex + 1} / {allPhotos.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function ContactForm({
  vehicle,
  onClose,
}: {
  vehicle: Vehicle;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(
    `Hi, I'm interested in your ${vehicle.title}. Is it still available?`
  );
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    const subject = `Inquiry: ${vehicle.title} — Fully Sorted`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}\n\nListing: ${typeof window !== "undefined" ? window.location.href : ""}`;
    window.open(
      `mailto:chris@fullysorted.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    );
    setTimeout(() => {
      setSent(true);
      setSending(false);
    }, 400);
  };

  const inputClass =
    "w-full px-3 py-2.5 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors bg-white";

  if (sent) {
    return (
      <div className="text-center py-6">
        <CheckCircle className="w-12 h-12 text-green mx-auto mb-3" />
        <p className="font-semibold text-foreground">Message sent!</p>
        <p className="text-sm text-text-secondary mt-1 max-w-xs mx-auto">
          Your email client opened with the message pre-filled. We&apos;ll
          connect you with the seller shortly.
        </p>
        <button
          onClick={onClose}
          className="mt-4 px-5 py-2.5 text-sm font-semibold bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors"
        >
          Done
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-medium text-text-secondary block mb-1">
            Your Name
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Smith"
            className={inputClass}
          />
        </div>
        <div>
          <label className="text-xs font-medium text-text-secondary block mb-1">
            Email
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@example.com"
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label className="text-xs font-medium text-text-secondary block mb-1">
          Message
        </label>
        <textarea
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputClass} resize-none`}
        />
      </div>
      <button
        type="submit"
        disabled={sending}
        className="w-full h-11 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent-hover transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
      >
        <MessageCircle className="w-4 h-4" />
        {sending ? "Opening email..." : "Send Message"}
      </button>
      <p className="text-xs text-text-tertiary text-center">
        Your message will be sent via email to connect you with the seller.
      </p>
    </form>
  );
}

export function ListingDetail({ vehicle }: Props) {
  const [contactOpen, setContactOpen] = useState(false);
  const [shared, setShared] = useState(false);

  // Track view on mount
  useEffect(() => {
    if (vehicle.slug) {
      fetch(`/api/listings/view?slug=${encodeURIComponent(vehicle.slug)}`, {
        method: "POST",
      }).catch(() => {
        // fail silently
      });
    }
  }, [vehicle.slug]);

  const priceDiff = vehicle.price - vehicle.compAvg;
  const priceDiffPct = ((priceDiff / vehicle.compAvg) * 100).toFixed(1);
  const isAbove = priceDiff > 0;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: vehicle.title,
          text: `Check out this ${vehicle.title} on Fully Sorted — $${vehicle.price.toLocaleString()}`,
          url: window.location.href,
        });
      } catch {
        // user cancelled
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      setShared(true);
      setTimeout(() => setShared(false), 2000);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
      {/* Back Link */}
      <Link
        href="/browse"
        className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-foreground mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Browse
      </Link>

      {/* Photo Gallery */}
      <div className="mb-6">
        <PhotoGallery vehicle={vehicle} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Title & Location */}
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
              {vehicle.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-text-secondary">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {vehicle.location}
              </span>
              <span className="flex items-center gap-1">
                <Gauge className="w-4 h-4" />
                {formatMileage(vehicle.mileage)} miles
              </span>
              <span className="flex items-center gap-1">
                <Cog className="w-4 h-4" />
                {vehicle.transmission}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium border border-border rounded-lg hover:bg-surface transition-colors">
              <Heart className="w-4 h-4" />
              Save
            </button>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium border border-border rounded-lg hover:bg-surface transition-colors"
            >
              <Share2 className="w-4 h-4" />
              {shared ? "Link copied!" : "Share"}
            </button>
          </div>

          {/* Expert Take */}
          {vehicle.chrisTake && (
            <div className="bg-surface border border-border rounded-xl p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold shrink-0">
                  FS
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    Expert Take
                  </p>
                  <p className="text-text-secondary mt-1 leading-relaxed">
                    &ldquo;{vehicle.chrisTake}&rdquo;
                  </p>
                  <p className="text-xs text-text-secondary mt-1">
                    — Fully Sorted
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Description */}
          <div>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              About This Car
            </h2>
            <p className="text-text-secondary leading-relaxed whitespace-pre-line">
              {vehicle.description}
            </p>
          </div>

          {/* Highlights */}
          {vehicle.highlights.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                Highlights
              </h2>
              <ul className="space-y-2">
                {vehicle.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 text-sm text-text-secondary"
                  >
                    <CheckCircle className="w-4 h-4 text-green mt-0.5 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Specs Table */}
          <div>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              Specifications
            </h2>
            <div className="bg-white border border-border rounded-xl overflow-hidden">
              <div className="grid grid-cols-2 divide-x divide-border">
                {[
                  { label: "Year", value: vehicle.year },
                  { label: "Make", value: vehicle.make },
                  {
                    label: "Model",
                    value: `${vehicle.model}${vehicle.variant ? ` ${vehicle.variant}` : ""}`,
                  },
                  { label: "Engine", value: vehicle.engine },
                  { label: "Transmission", value: vehicle.transmission },
                  {
                    label: "Mileage",
                    value: `${formatMileage(vehicle.mileage)} miles`,
                  },
                  { label: "Exterior", value: vehicle.exteriorColor },
                  { label: "Interior", value: vehicle.interiorColor },
                  { label: "Condition", value: vehicle.condition },
                  { label: "Originality", value: vehicle.originality },
                ].map((spec, i) => (
                  <div
                    key={spec.label}
                    className={cn(
                      "px-4 py-3 flex justify-between",
                      i >= 2 && "border-t border-border"
                    )}
                  >
                    <span className="text-xs font-medium text-text-secondary uppercase tracking-wider">
                      {spec.label}
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-5">
          {/* Price Card */}
          <div className="bg-white border border-border rounded-xl p-5 sticky top-24">
            <p className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-1">
              Asking Price
            </p>
            <p className="price-display text-3xl text-foreground">
              {formatPrice(vehicle.price)}
            </p>

            {/* Pricing Verdict */}
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                Pricing Verdict
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-secondary">BaT Average</span>
                  <span className="price-display font-medium">
                    {formatPrice(vehicle.compAvg)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">vs. Market</span>
                  <span
                    className={cn(
                      "font-semibold flex items-center gap-1",
                      isAbove ? "text-orange" : "text-green"
                    )}
                  >
                    {isAbove ? (
                      <TrendingUp className="w-3.5 h-3.5" />
                    ) : (
                      <TrendingDown className="w-3.5 h-3.5" />
                    )}
                    {isAbove ? "+" : ""}
                    {priceDiffPct}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Comps Found</span>
                  <span className="font-medium">{vehicle.compCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Source</span>
                  <span className="text-xs text-text-tertiary">
                    {vehicle.compSource}
                  </span>
                </div>
              </div>

              {vehicle.sortedPrice ? (
                <div className="mt-3 px-3 py-2 bg-green-light rounded-lg">
                  <p className="text-xs font-semibold text-green flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Fair Market Price
                  </p>
                  <p className="text-xs text-green/80 mt-0.5">
                    Within range of recent comparable sales
                  </p>
                </div>
              ) : (
                <div className="mt-3 px-3 py-2 bg-orange-light rounded-lg">
                  <p className="text-xs font-semibold text-accent">
                    Above Average
                  </p>
                  <p className="text-xs text-accent/80 mt-0.5">
                    Priced above recent comps — condition or rarity may justify
                  </p>
                </div>
              )}
            </div>

            {/* Contact Seller */}
            <div className="mt-5 space-y-2.5">
              <button
                onClick={() => setContactOpen(true)}
                className="w-full h-12 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent-hover transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Contact Seller
              </button>
              <a
                href={`mailto:chris@fullysorted.com?subject=${encodeURIComponent(`Offer: ${vehicle.title}`)}&body=${encodeURIComponent(`Hi,\n\nI'd like to make an offer on your ${vehicle.title} listed at $${vehicle.price.toLocaleString()}.\n\nMy offer: $\n\n[Your message here]`)}`}
                className="w-full h-12 border border-border text-foreground text-sm font-medium rounded-lg hover:bg-surface transition-colors flex items-center justify-center"
              >
                Make an Offer
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <AnimatePresence>
        {contactOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 flex items-end sm:items-center justify-center p-4"
            onClick={() => setContactOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="font-bold text-foreground text-lg">
                    Contact Seller
                  </h3>
                  <p className="text-xs text-text-secondary mt-0.5">
                    {vehicle.title}
                  </p>
                </div>
                <button
                  onClick={() => setContactOpen(false)}
                  className="w-8 h-8 rounded-full hover:bg-surface flex items-center justify-center text-text-secondary transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <ContactForm vehicle={vehicle} onClose={() => setContactOpen(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
