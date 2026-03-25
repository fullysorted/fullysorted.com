"use client";

import { useEffect, useState, useCallback } from "react";
import {
  MessageSquare, Mail, Phone, DollarSign, ExternalLink,
  Archive, CheckCircle, Loader2, Filter, ChevronDown, ChevronUp,
} from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { Suspense } from "react";

interface Message {
  id: number;
  listing_id: number | null;
  listing_slug: string | null;
  listing_title: string | null;
  sender_name: string;
  sender_email: string;
  sender_phone: string | null;
  message_text: string;
  type: string;
  offer_amount: number | null;
  status: string;
  admin_notes: string | null;
  created_at: string;
}

const TYPE_COLORS: Record<string, { color: string; bg: string }> = {
  inquiry: { color: "#2563eb", bg: "#dbeafe" },
  offer:   { color: "#7c3aed", bg: "#ede9fe" },
  general: { color: "#6b7280", bg: "#f3f4f6" },
};

const STATUS_OPTIONS = ["all", "new", "read", "replied", "archived"];
const TYPE_OPTIONS = ["all", "inquiry", "offer", "general"];

function MessagesContent() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [updating, setUpdating] = useState<number | null>(null);
  const [noteInputs, setNoteInputs] = useState<Record<number, string>>({});

  const load = useCallback(async () => {
    setLoading(true);
    const params = new URLSearchParams({ limit: "100" });
    if (statusFilter !== "all") params.set("status", statusFilter);
    if (typeFilter !== "all") params.set("type", typeFilter);
    const res = await fetch(`/api/admin/messages?${params}`);
    if (res.ok) {
      const data = await res.json();
      setMessages(data.messages || []);
    }
    setLoading(false);
  }, [statusFilter, typeFilter]);

  useEffect(() => { load(); }, [load]);

  async function updateMessage(id: number, updates: Record<string, unknown>) {
    setUpdating(id);
    await fetch("/api/admin/messages", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, ...updates }),
    });
    await load();
    setUpdating(null);
  }

  function formatDate(d: string) {
    return new Date(d).toLocaleString("en-US", {
      month: "short", day: "numeric", year: "numeric",
      hour: "numeric", minute: "2-digit",
    });
  }

  const unreadCount = messages.filter(m => m.status === "new").length;

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Messages</h1>
          <p className="text-sm text-text-secondary mt-0.5">
            {unreadCount > 0 ? (
              <span className="text-accent font-semibold">{unreadCount} unread · </span>
            ) : null}
            {messages.length} total messages
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border border-border rounded-xl p-4 flex flex-wrap items-center gap-4">
        <div>
          <p className="text-xs font-medium text-text-secondary mb-1.5">Status</p>
          <div className="flex gap-1.5 flex-wrap">
            {STATUS_OPTIONS.map(s => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                  statusFilter === s ? "text-white" : "bg-surface text-text-secondary hover:bg-surface/80"
                }`}
                style={statusFilter === s ? { backgroundColor: "#C1440E" } : {}}
              >
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-medium text-text-secondary mb-1.5">Type</p>
          <div className="flex gap-1.5 flex-wrap">
            {TYPE_OPTIONS.map(t => (
              <button
                key={t}
                onClick={() => setTypeFilter(t)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                  typeFilter === t ? "text-white" : "bg-surface text-text-secondary hover:bg-surface/80"
                }`}
                style={typeFilter === t ? { backgroundColor: "#7c3aed" } : {}}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Messages list */}
      {loading ? (
        <div className="flex items-center justify-center py-16 gap-3 text-text-secondary">
          <Loader2 className="w-5 h-5 animate-spin text-accent" />
          Loading messages…
        </div>
      ) : messages.length === 0 ? (
        <div className="bg-white border border-border rounded-xl py-16 text-center">
          <MessageSquare className="w-10 h-10 text-text-tertiary mx-auto mb-3" />
          <p className="text-text-tertiary text-sm">No messages found</p>
        </div>
      ) : (
        <div className="space-y-2">
          {messages.map((msg) => {
            const typeStyle = TYPE_COLORS[msg.type] || TYPE_COLORS.general;
            const isNew = msg.status === "new";
            const expanded = expandedId === msg.id;

            return (
              <div
                key={msg.id}
                className={`bg-white border rounded-xl overflow-hidden transition-colors ${
                  isNew ? "border-accent/30" : "border-border"
                }`}
              >
                {/* Summary row */}
                <button
                  onClick={() => {
                    setExpandedId(expanded ? null : msg.id);
                    if (isNew) updateMessage(msg.id, { status: "read" });
                  }}
                  className="w-full text-left p-4 flex items-start gap-4 hover:bg-surface/30 transition-colors"
                >
                  {/* Avatar */}
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                    style={{ backgroundColor: "#C1440E" }}
                  >
                    {msg.sender_name.charAt(0).toUpperCase()}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-semibold text-foreground text-sm">{msg.sender_name}</span>
                      <span
                        className="px-2 py-0.5 rounded-full text-xs font-semibold"
                        style={{ color: typeStyle.color, backgroundColor: typeStyle.bg }}
                      >
                        {msg.type}
                      </span>
                      {isNew && (
                        <span className="w-2 h-2 rounded-full bg-accent shrink-0" title="Unread" />
                      )}
                      {msg.status === "replied" && (
                        <span className="text-xs text-green-700 font-medium">✓ Replied</span>
                      )}
                    </div>
                    {msg.listing_title && (
                      <p className="text-xs text-text-secondary mt-0.5 truncate">
                        Re: {msg.listing_title}
                      </p>
                    )}
                    {msg.offer_amount && (
                      <p className="text-xs font-bold text-purple-700 mt-0.5">
                        Offer: {formatPrice(msg.offer_amount)}
                      </p>
                    )}
                    <p className="text-xs text-text-tertiary mt-0.5 truncate">
                      {msg.message_text}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-1 shrink-0">
                    <span className="text-xs text-text-tertiary">{formatDate(msg.created_at)}</span>
                    {expanded ? <ChevronUp className="w-4 h-4 text-text-tertiary" /> : <ChevronDown className="w-4 h-4 text-text-tertiary" />}
                  </div>
                </button>

                {/* Expanded detail */}
                {expanded && (
                  <div className="border-t border-border bg-surface/20 p-4 space-y-4">
                    {/* Full message */}
                    <div className="bg-white border border-border rounded-lg p-4">
                      <p className="text-sm text-foreground leading-relaxed whitespace-pre-wrap">
                        {msg.message_text}
                      </p>
                    </div>

                    {/* Contact info */}
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <a
                        href={`mailto:${msg.sender_email}?subject=Re: ${encodeURIComponent(msg.listing_title || "Your inquiry on Fully Sorted")}`}
                        className="inline-flex items-center gap-1.5 text-accent hover:underline"
                      >
                        <Mail className="w-4 h-4" />
                        {msg.sender_email}
                      </a>
                      {msg.sender_phone && (
                        <a
                          href={`tel:${msg.sender_phone}`}
                          className="inline-flex items-center gap-1.5 text-text-secondary hover:text-foreground"
                        >
                          <Phone className="w-4 h-4" />
                          {msg.sender_phone}
                        </a>
                      )}
                      {msg.listing_slug && (
                        <a
                          href={`/listings/${msg.listing_slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-text-secondary hover:text-foreground"
                        >
                          <ExternalLink className="w-4 h-4" />
                          View listing
                        </a>
                      )}
                    </div>

                    {/* Admin notes */}
                    <div>
                      <label className="text-xs font-medium text-text-secondary block mb-1">
                        Admin Notes
                      </label>
                      <textarea
                        rows={2}
                        value={noteInputs[msg.id] ?? msg.admin_notes ?? ""}
                        onChange={e => setNoteInputs(prev => ({ ...prev, [msg.id]: e.target.value }))}
                        placeholder="Add internal notes…"
                        className="w-full text-sm px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 resize-none"
                      />
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-wrap items-center gap-2">
                      <a
                        href={`mailto:${msg.sender_email}?subject=Re: ${encodeURIComponent(msg.listing_title || "Your inquiry on Fully Sorted")}&body=Hi ${encodeURIComponent(msg.sender_name)},%0A%0A`}
                        onClick={() => updateMessage(msg.id, { status: "replied", adminNotes: noteInputs[msg.id] || msg.admin_notes })}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-green-600 hover:bg-green-700 transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5" /> Reply via Email
                      </a>
                      <button
                        onClick={() => updateMessage(msg.id, { status: "replied", adminNotes: noteInputs[msg.id] || msg.admin_notes })}
                        disabled={updating === msg.id}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border border-green-600 text-green-700 hover:bg-green-50 transition-colors disabled:opacity-60"
                      >
                        <CheckCircle className="w-3.5 h-3.5" /> Mark Replied
                      </button>
                      <button
                        onClick={() => updateMessage(msg.id, { status: "archived", adminNotes: noteInputs[msg.id] || msg.admin_notes })}
                        disabled={updating === msg.id}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border border-border text-text-secondary hover:bg-surface transition-colors disabled:opacity-60"
                      >
                        <Archive className="w-3.5 h-3.5" /> Archive
                      </button>
                      {noteInputs[msg.id] !== undefined && noteInputs[msg.id] !== msg.admin_notes && (
                        <button
                          onClick={() => updateMessage(msg.id, { adminNotes: noteInputs[msg.id] })}
                          className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white transition-colors"
                          style={{ backgroundColor: "#C1440E" }}
                        >
                          Save Notes
                        </button>
                      )}
                      {updating === msg.id && <Loader2 className="w-4 h-4 animate-spin text-accent" />}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function AdminMessagesPage() {
  return (
    <Suspense>
      <MessagesContent />
    </Suspense>
  );
}
