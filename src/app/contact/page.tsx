import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Chris Peterson and the Fully Sorted team. San Diego, CA.",
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
          Get in Touch
        </h1>
        <p className="text-text-secondary mt-2 text-lg">
          Whether you have a question about a listing, need help with a
          valuation, or just want to talk cars — I&apos;d love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white border border-border rounded-xl p-6">
          <h2 className="font-semibold text-foreground mb-4">Send a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="text-xs font-medium text-text-secondary uppercase tracking-wider block mb-1.5">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full h-11 px-4 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-text-secondary uppercase tracking-wider block mb-1.5">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full h-11 px-4 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-text-secondary uppercase tracking-wider block mb-1.5">
                Subject
              </label>
              <select className="w-full h-11 px-4 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent bg-white">
                <option>General Question</option>
                <option>Listing Inquiry</option>
                <option>Valuation Request</option>
                <option>Service Recommendation</option>
                <option>Partnership</option>
                <option>Press / Media</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-text-secondary uppercase tracking-wider block mb-1.5">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="What's on your mind?"
                className="w-full px-4 py-3 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full h-11 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent-hover transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="bg-surface border border-border rounded-xl p-6">
            <h2 className="font-semibold text-foreground mb-4">
              Direct Contact
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">Location</p>
                  <p className="text-sm text-text-secondary">San Diego, California</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">Phone</p>
                  <a href="tel:+16198232132" className="text-sm text-accent hover:text-accent-hover">
                    (619) 823-2132
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <a href="mailto:chris@fullysorted.com" className="text-sm text-accent hover:text-accent-hover">
                    chris@fullysorted.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">Response Time</p>
                  <p className="text-sm text-text-secondary">
                    Usually within a few hours. I read every message myself.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-border rounded-xl p-6">
            <h2 className="font-semibold text-foreground mb-2">Follow Along</h2>
            <p className="text-sm text-text-secondary mb-4">
              Car photos, market takes, and San Diego life.
            </p>
            <div className="space-y-2">
              <a
                href="https://www.instagram.com/fully.sorted/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-accent hover:text-accent-hover font-medium"
              >
                Instagram — @fully.sorted
              </a>
              <a
                href="https://www.facebook.com/fullysorted/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-accent hover:text-accent-hover font-medium"
              >
                Facebook — @fullysorted
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
