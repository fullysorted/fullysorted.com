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
        className="relative aspect-[16/9] sm:aspect-[16/8] rounded-2xl overflow-hidden mb-3 cursor-zoom-in"
        style={{ background: "#1a1914" }}
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
            <span
              className="px-3 py-1 text-xs font-bold text-white rounded-lg shadow-lg"
              style={{ background: "#E8722A" }}
            >
              Featured
            </span>
          )}
          {vehicle.sortedPrice && (
            <span
              className="px-3 py-1 text-xs font-bold text-white rounded-lg flex items-center gap-1 shadow-lg"
              style={{ background: "#6ab04c" }}
            >
              <CheckCircle className="w-3 h-3" /> Sorted Price
            </span>
          )}
        </div>

        {/* Photo counter */}
        <div className="absolute bottom-4 right-4 px-3 py-1.5 text-sm font-medium bg-black/70 text-white rounded-lg flex items-center gap-1.5 backdrop-blur-sm">
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
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors backdrop-blur-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors backdrop-blur-sm"
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
                "relative w-20 h-14 rounded-xl overflow-hidden shrink-0 border-2 transition-all",
                i === activeIndex
                  ? "opacity-100"
                  : "border-transparent opacity-45 hover:opacity-75"
              )}
              style={i === activeIndex ? { borderColor: "#E8722A" } : {}}
            >
              <Image
                src={url}
                alt={`Photo ${i + 1}`}
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

            <div className="absolute bottom-6 text-white/50 text-sm">
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    // Save to DB (async, non-blocking)
    fetch("/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        listingId: vehicle.id ?? null,
        listingSlug: vehicle.slug,
        listingTitle: vehicle.title,
        senderName: name,
        senderEmail: email,
        messageText: message,
        type: "inquiry",
      }),
    }).catch(() => {});

    // Also open mailto as fallback
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
    "w-full px-3 py-2.5 text-sm border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-400 transition-colors bg-white";

  if (sent) {
    return (
      <div className="text-center py-6">
        <div
          className="w-14 h-14 rounded-2xl mx-auto mb-3 flex items-center justify-center"
          style={{ background: "rgba(106,176,76,0.12)" }}
        >
          <CheckCircle className="w-8 h-8" style={{ color: "#6ab04c" }} />
        </div>
        <p className="font-bold text-stone-800 text-lg">Message sent!</p>
        <p className="text-sm text-stone-400 mt-1 max-w-xs mx-auto">
          Your email client opened with the message pre-filled.
        </p>
        <button
          onClick={onClose}
          className="mt-4 px-5 py-2.5 text-sm font-semibold text-white rounded-xl hover:opacity-90 transition-opacity"
          style={{ background: "#E8722A" }}
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
          <label className="text-xs font-semibold text-stone-400 uppercase tracking-wide block mb-1.5">
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
          <label className="text-xs font-semibold text-stone-400 uppercase tracking-wide block mb-1.5">
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
        <label className="text-xs font-semibold text-stone-400 uppercase tracking-wide block mb-1.5">
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
        className="w-full h-12 text-white text-sm font-bold rounded-xl hover:opacity-90 transition-all disabled:opacity-60 flex items-center justify-center gap-2"
        style={{ background: "#E8722A" }}
      >
        <MessageCircle className="w-4 h-4" />
        {sending ? "Opening email..." : "Send Message"}
      </button>
      <p className="text-xs text-stone-400 text-center">
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
      }).catch(() => {});
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
    <div style={{ background: "#faf9f7" }} className="min-h-screen">
      {/* Light top bar with breadcrumb */}
      <div className="relative" style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/browse"
              className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
              style={{ color: "#6b6b5e" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#1a1a18")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#6b6b5e")}
            >
              <ArrowLeft className="w-4 h-4" />
              Browse
            </Link>
            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors"
                style={{ color: "#6b6b5e", border: "1px solid rgba(0,0,0,0.12)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#1a1a18";
                  (e.currentTarget as HTMLElement).style.borderColor = "#E8722A";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#6b6b5e";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,0,0,0.12)";
                }}
              >
                <Share2 className="w-3.5 h-3.5" />
                {shared ? "Copied!" : "Share"}
              </button>
              <button
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors"
                style={{ color: "#6b6b5e", border: "1px solid rgba(0,0,0,0.12)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#1a1a18";
                  (e.currentTarget as HTMLElement).style.borderColor = "#E8722A";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#6b6b5e";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,0,0,0.12)";
                }}
              >
                <Heart className="w-3.5 h-3.5" />
                Save
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        {/* Photo Gallery */}
        <div className="mb-8">
          <PhotoGallery vehicle={vehicle} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title & Location */}
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-stone-900">
                {vehicle.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-stone-400">
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

            {/* Expert Take */}
            {vehicle.chrisTake && (
              <div
                className="rounded-2xl p-5"
                style={{ background: "rgba(232,114,42,0.06)", border: "1px solid rgba(232,114,42,0.15)" }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-xl text-white flex items-center justify-center text-xs font-bold shrink-0"
                    style={{ background: "#E8722A" }}
                  >
                    FS
                  </div>
                  <div>
                    <p className="font-bold text-stone-800 text-sm">Expert Take</p>
                    <p className="text-stone-600 mt-1 leading-relaxed text-sm">
                      &ldquo;{vehicle.chrisTake}&rdquo;
                    </p>
                    <p className="text-xs text-stone-400 mt-1">— Fully Sorted</p>
                  </div>
                </div>
              </div>
            )}

            {/* Description */}
            {vehicle.description && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-px" style={{ background: "#E8722A" }} />
                  <h2 className="text-sm font-bold text-stone-400 uppercase tracking-widest">
                    About This Car
                  </h2>
                </div>
                <p className="text-stone-600 leading-relaxed whitespace-pre-line">
                  {vehicle.description}
                </p>
              </div>
            )}

            {/* Highlights */}
            {vehicle.highlights.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-px" style={{ background: "#E8722A" }} />
                  <h2 className="text-sm font-bold text-stone-400 uppercase tracking-widest">
                    Highlights
                  </h2>
                </div>
                <ul className="space-y-2.5">
                  {vehicle.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2.5 text-sm text-stone-600"
                    >
                      <CheckCircle
                        className="w-4 h-4 mt-0.5 shrink-0"
                        style={{ color: "#6ab04c" }}
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Specs Table */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-px" style={{ background: "#E8722A" }} />
                <h2 className="text-sm font-bold text-stone-400 uppercase tracking-widest">
                  Specifications
                </h2>
              </div>
              <div
                className="rounded-2xl overflow-hidden"
                style={{ border: "1px solid rgba(0,0,0,0.07)" }}
              >
                <div className="grid grid-cols-2 divide-x divide-stone-100">
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
                        "px-4 py-3 flex justify-between bg-white",
                        i >= 2 && "border-t border-stone-100"
                      )}
                    >
                      <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                        {spec.label}
                      </span>
                      <span className="text-sm font-medium text-stone-800">
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
            <div
              className="rounded-2xl p-5 sticky top-20"
              style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
            >
              <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">
                Asking Price
              </p>
              <p className="text-3xl font-bold text-stone-900">
                {formatPrice(vehicle.price)}
              </p>

              {/* Pricing Verdict */}
              {vehicle.compAvg > 0 && (
                <div
                  className="mt-4 pt-4"
                  style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}
                >
                  <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-2.5">
                    Pricing Verdict
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-stone-400">BaT Average</span>
                      <span className="font-semibold text-stone-800">
                        {formatPrice(vehicle.compAvg)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-400">vs. Market</span>
                      <span
                        className="font-bold flex items-center gap-1"
                        style={{ color: isAbove ? "#E8722A" : "#6ab04c" }}
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
                    {vehicle.compCount > 0 && (
                      <div className="flex justify-between">
                        <span className="text-stone-400">Comps Found</span>
                        <span className="font-medium text-stone-800">{vehicle.compCount}</span>
                      </div>
                    )}
                  </div>

                  {vehicle.sortedPrice ? (
                    <div
                      className="mt-3 px-3 py-2.5 rounded-xl"
                      style={{ background: "rgba(106,176,76,0.08)", border: "1px solid rgba(106,176,76,0.2)" }}
                    >
                      <p
                        className="text-xs font-bold flex items-center gap-1"
                        style={{ color: "#6ab04c" }}
                      >
                        <CheckCircle className="w-3.5 h-3.5" />
                        Fair Market Price
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: "rgba(106,176,76,0.8)" }}>
                        Within range of recent comparable sales
                      </p>
                    </div>
                  ) : (
                    <div
                      className="mt-3 px-3 py-2.5 rounded-xl"
                      style={{ background: "rgba(232,114,42,0.07)", border: "1px solid rgba(232,114,42,0.18)" }}
                    >
                      <p
                        className="text-xs font-bold"
                        style={{ color: "#E8722A" }}
                      >
                        Above Average
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: "rgba(232,114,42,0.7)" }}>
                        Condition or rarity may justify the premium
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Contact Seller */}
              <div className="mt-5 space-y-2.5">
                <button
                  onClick={() => setContactOpen(true)}
                  className="w-full h-12 text-white text-sm font-bold rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2"
                  style={{ background: "#E8722A" }}
                >
                  <MessageCircle className="w-4 h-4" />
                  Contact Seller
                </button>
                <a
                  href={`mailto:chris@fullysorted.com?subject=${encodeURIComponent(`Offer: ${vehicle.title}`)}&body=${encodeURIComponent(`Hi,\n\nI'd like to make an offer on your ${vehicle.title} listed at $${vehicle.price.toLocaleString()}.\n\nMy offer: $\n\n[Your message here]`)}`}
                  className="w-full h-12 border text-sm font-medium rounded-xl hover:bg-stone-50 transition-colors flex items-center justify-center"
                  style={{ borderColor: "rgba(0,0,0,0.1)", color: "#555" }}
                >
                  Make an Offer
                </a>
              </div>
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
            className="fixed inset-0 z-50 bg-black/60 flex items-end sm:items-center justify-center p-4 backdrop-blur-sm"
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
                  <h3 className="font-bold text-stone-800 text-lg">
                    Contact Seller
                  </h3>
                  <p className="text-xs text-stone-400 mt-0.5">{vehicle.title}</p>
                </div>
                <button
                  onClick={() => setContactOpen(false)}
                  className="w-8 h-8 rounded-full hover:bg-stone-100 flex items-center justify-center text-stone-400 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <ContactForm
                vehicle={vehicle}
                onClose={() => setContactOpen(false)}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
