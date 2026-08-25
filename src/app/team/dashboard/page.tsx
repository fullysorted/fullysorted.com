"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  UserPlus, Search, Loader2, Copy, Check, Mail, Phone, MapPin,
  Send, BellRing, XCircle, LogOut, ChevronDown, ChevronUp, ExternalLink,
  StickyNote, Pencil, ImageIcon, Star, Quote,
} from "lucide-react";
import { CATEGORY_OPTIONS } from '@/lib/service-categories';
import PhotoUpload from '@/components/media/PhotoUpload';
import { PROVIDER_REVIEWS_PUBLIC } from '@/lib/features';

/* ─── Types ─────────────────────────────────────────────── */
interface PipelineProvider {
  id: number;
  business_name: string;
  owner_name: string | null;
  email: string;
  phone: string | null;
  category: string;
  location: string;
  website: string | null;
  instagram: string | null;
  description: string | null;
  specialties: string[] | null;
  years_in_business: string | null;
  status: string;
  outreach_status: string | null;
  outreach_sent_at: string | null;
  outreach_responded_at: string | null;
  outreach_notes: string | null;
  outreach_added_by: string | null;
  claim_token: string | null;
  slug: string;
  created_at: string;
  avatar_url: string | null;
  outreach_opted_out_at: string | null;
  owner_linked: boolean;
  outreach_last_edited_by: string | null;
  outreach_last_edited_at: string | null;
}

const CATEGORIES = CATEGORY_OPTIONS;

const STAGES: Array<{ key: string; label: string; color: string; bg: string }> = [
  { key: "staged", label: "To invite", color: "#d97706", bg: "#fef3c7" },
  { key: "sent", label: "Invited", color: "#1E6091", bg: "#E8F0F8" },
  { key: "claimed", label: "Approved — managing", color: "#16a34a", bg: "#dcfce7" },
  { key: "list_only", label: "Listed as-is", color: "#0f766e", bg: "#ccfbf1" },
  // Declined is a real stage now, not a delete. It is excluded from the "all"
  // board so it never clutters the working list, but it is one click away.
  { key: "declined", label: "Declined", color: "#b91c1c", bg: "#fee2e2" },
];

function stageInfo(s: string | null) {
  return STAGES.find((x) => x.key === s) || { key: s || "?", label: s || "—", color: "#6b7280", bg: "#f3f4f6" };
}

function timeAgo(dateStr: string | null): string {
  if (!dateStr) return "—";
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86400000);
  if (days === 0) return "Today";
  if (days === 1) return "Yesterday";
  return `${days}d ago`;
}

const EMPTY_FORM = {
  // Category starts blank on purpose. Pre-selecting one meant a skipped dropdown
  // could never fail validation, and a transport company would go live reading
  // "is a detailing specialist".
  businessName: "", ownerName: "", email: "", phone: "", category: "",
  location: "", website: "", instagram: "", specialties: "", yearsInBusiness: "",
  notes: "", avatarUrl: "",
};

/* ─── Page ──────────────────────────────────────────────── */
export default function TeamDashboard() {
  const router = useRouter();
  const [providers, setProviders] = useState<PipelineProvider[]>([]);
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [stage, setStage] = useState("all");
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ ...EMPTY_FORM });
  const [addedBy, setAddedBy] = useState("");
  const [submitting, setSubmitting] = useState<"invite" | "only" | null>(null);
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");
  const [busyId, setBusyId] = useState<number | null>(null);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [noteDraft, setNoteDraft] = useState("");
  // The whole editable profile, not just the contact line. A shop that gets
  // renamed, moves, or turns out to be a restoration house rather than a
  // mechanic is a normal outcome of a call — the rep should not need Chris.
  const EMPTY_EDIT = {
    businessName: "", ownerName: "", email: "", phone: "", category: "",
    location: "", website: "", instagram: "", specialties: "", yearsInBusiness: "",
    description: "", avatarUrl: "",
  };
  const [edit, setEdit] = useState({ ...EMPTY_EDIT });
  const [photoInvalid, setPhotoInvalid] = useState(false);
  const [rowMsg, setRowMsg] = useState<{ id: number; msg: string; err?: boolean } | null>(null);
  // Reviews panel — one open at a time, same as the rest of the row UI.
  const EMPTY_INVITE = { clientName: "", clientEmail: "", workType: "" };
  const EMPTY_TESTIMONIAL = { authorName: "", vehicle: "", workType: "", workDate: "", body: "", consent: false };
  const [invite, setInvite] = useState({ ...EMPTY_INVITE });
  const [testimonial, setTestimonial] = useState({ ...EMPTY_TESTIMONIAL });
  const [reviewTab, setReviewTab] = useState<"invite" | "testimonial">("invite");
  const [inviteLink, setInviteLink] = useState("");
  const [linkUrl, setLinkUrl] = useState("");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("fs_team_name");
      if (saved) setAddedBy(saved);
    } catch { /* ignore */ }
  }, []);

  const load = useCallback(async () => {
    setLoading(true);
    setLoadError("");
    const params = new URLSearchParams();
    if (stage !== "all") params.set("stage", stage);
    if (search) params.set("q", search);
    try {
      const res = await fetch(`/api/team/providers?${params}`);
      if (res.status === 401) {
        router.push("/team");
        return;
      }
      const data = await res.json().catch(() => ({}));
      // Anything other than a clean 200 must NOT paint an empty board. An
      // empty board reads as "your work is gone" and the rep re-enters it all.
      if (!res.ok) {
        throw new Error(data.error || `Couldn't load the pipeline (${res.status}).`);
      }
      setProviders(data.providers || []);
      const c: Record<string, number> = {};
      for (const row of data.counts || []) c[row.outreach_status] = row.count;
      setCounts(c);
    } catch (e) {
      setLoadError(
        e instanceof Error
          ? `${e.message} Your saved shops are safe — this is a loading problem, not lost data. Try again in a moment, and tell Chris if it persists.`
          : "Couldn't load the pipeline. Your saved shops are safe.",
      );
    } finally {
      setLoading(false);
    }
  }, [stage, search, router]);

  useEffect(() => {
    load();
  }, [load]);

  function setField(k: string, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  async function addProvider(sendInvite: boolean) {
    // The API enforces this too — checking here saves the round trip and
    // points at the exact field.
    if (!form.avatarUrl) {
      setPhotoInvalid(true);
      document.getElementById("add-photo")?.scrollIntoView({ behavior: "smooth", block: "center" });
      setFormError("A shop photo or logo is required — add one in the highlighted box at the top of this form.");
      return;
    }
    setSubmitting(sendInvite ? "invite" : "only");
    setFormError("");
    setFormSuccess("");
    try {
      if (addedBy) {
        try { window.localStorage.setItem("fs_team_name", addedBy); } catch { /* ignore */ }
      }
      const res = await fetch("/api/team/providers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, addedBy, sendInvite }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setFormSuccess(
        sendInvite
          ? data.inviteSent
            ? `${form.businessName} added — invite emailed to ${form.email}.`
            : `${form.businessName} added, but the invite email failed — use "Send invite" on the row below.`
          : `${form.businessName} added. Send the invite when they're ready.`,
      );
      setForm({ ...EMPTY_FORM });
      load();
    } catch (e) {
      setFormError(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setSubmitting(null);
    }
  }

  async function sendInvite(p: PipelineProvider, reminder: boolean) {
    setBusyId(p.id);
    setRowMsg(null);
    try {
      const res = await fetch("/api/team/invite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: p.id, reminder }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send");
      setRowMsg({ id: p.id, msg: `${reminder ? "Reminder" : "Invite"} sent to ${data.sentTo}` });
      load();
    } catch (e) {
      setRowMsg({ id: p.id, msg: e instanceof Error ? e.message : "Failed to send", err: true });
    } finally {
      setBusyId(null);
    }
  }

  async function copyLink(p: PipelineProvider) {
    if (!p.claim_token) return;
    const url = `https://www.fullysorted.com/services/claim/${p.claim_token}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopiedId(p.id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      setRowMsg({ id: p.id, msg: url });
    }
  }

  async function optOut(p: PipelineProvider) {
    if (!confirm(`Mark ${p.business_name} as "not interested"? Their listing comes down and we won't contact them again. You can undo this from the Declined tab if you hit it by mistake.`)) return;
    setBusyId(p.id);
    try {
      const res = await fetch("/api/team/providers", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: p.id, action: "opt_out" }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      load();
    } catch (e) {
      setRowMsg({ id: p.id, msg: e instanceof Error ? e.message : "Failed", err: true });
    } finally {
      setBusyId(null);
    }
  }

  async function undoOptOut(p: PipelineProvider) {
    setBusyId(p.id);
    try {
      const res = await fetch("/api/team/providers", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: p.id, action: "undo_opt_out" }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      setRowMsg({ id: p.id, msg: `Put back in the pipeline as "${stageInfo(data.stage).label}". They are no longer suppressed.` });
      load();
    } catch (e) {
      setRowMsg({ id: p.id, msg: e instanceof Error ? e.message : "Failed", err: true });
    } finally {
      setBusyId(null);
    }
  }

  async function saveNotes(p: PipelineProvider) {
    setBusyId(p.id);
    try {
      const res = await fetch("/api/team/providers", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: p.id, notes: noteDraft }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to save");
      setRowMsg({ id: p.id, msg: "Notes saved" });
      load();
    } catch (e) {
      setRowMsg({ id: p.id, msg: e instanceof Error ? e.message : "Failed to save", err: true });
    } finally {
      setBusyId(null);
    }
  }

  // Edit the provider's details. PATCH only carries fields that actually
  // changed, so an untouched field is never overwritten — and an optional
  // field cleared to empty is sent, because clearing a wrong website is a
  // real edit rather than a no-op.
  function editSetField(k: string, v: string) {
    setEdit((prev) => ({ ...prev, [k]: v }));
  }

  async function saveDetails(p: PipelineProvider) {
    const current: Record<string, string> = {
      businessName: p.business_name || "",
      ownerName: p.owner_name || "",
      email: p.email || "",
      phone: p.phone || "",
      category: p.category || "",
      location: p.location || "",
      website: p.website || "",
      instagram: p.instagram || "",
      specialties: (p.specialties || []).join("\n"),
      yearsInBusiness: p.years_in_business || "",
      description: p.description || "",
      avatarUrl: p.avatar_url || "",
    };
    if (addedBy) {
      try { window.localStorage.setItem("fs_team_name", addedBy); } catch { /* ignore */ }
    }
    const payload: Record<string, unknown> = { id: p.id, editedBy: addedBy || null };
    for (const [k, was] of Object.entries(current)) {
      const now = (edit as Record<string, string>)[k] ?? "";
      if (now.trim() === was.trim()) continue;
      // One specialty per line, so a specialty that itself contains a comma
      // survives a round trip through this form.
      payload[k] = k === "specialties" ? now.split("\n").map((x) => x.trim()).filter(Boolean) : now;
    }
    if (Object.keys(payload).length === 2) {
      setRowMsg({ id: p.id, msg: "Nothing changed." });
      return;
    }
    setBusyId(p.id);
    try {
      const res = await fetch("/api/team/providers", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to save");
      // Re-seed from what the server actually stored. It normalises (adds a
      // scheme to a website, strips an @ off a handle, lowercases an email), so
      // a panel left open would otherwise keep re-sending the pre-normalised
      // text as though it were a fresh edit.
      const saved = data.provider;
      if (saved) {
        setEdit({
          businessName: saved.business_name || "",
          ownerName: saved.owner_name || "",
          email: saved.email || "",
          phone: saved.phone || "",
          category: saved.category || "",
          location: saved.location || "",
          website: saved.website || "",
          instagram: saved.instagram || "",
          specialties: (saved.specialties || []).join("\n"),
          yearsInBusiness: saved.years_in_business || "",
          description: saved.description || "",
          avatarUrl: saved.avatar_url || "",
        });
      }
      setRowMsg({ id: p.id, msg: "Details updated" });
      load();
    } catch (e) {
      setRowMsg({ id: p.id, msg: e instanceof Error ? e.message : "Failed to save", err: true });
    } finally {
      setBusyId(null);
    }
  }

  // Ask a client of this shop for a real, verified review. The email goes from
  // us to them; the shop never sees the token and cannot pull the review once
  // it lands. This is the whole point — a directory where shops could bury bad
  // reviews would be worth nothing to a buyer.
  async function sendReviewInvite(p: PipelineProvider) {
    if (!invite.clientName.trim() || !invite.clientEmail.trim()) {
      setRowMsg({ id: p.id, msg: "Client name and email are both needed.", err: true });
      return;
    }
    setBusyId(p.id);
    setInviteLink("");
    try {
      const res = await fetch("/api/reviews/invite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          providerId: p.id,
          clientName: invite.clientName.trim(),
          clientEmail: invite.clientEmail.trim(),
          workType: invite.workType.trim() || undefined,
          invitedBy: addedBy || undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        // A send failure still leaves a working link — hand it over by phone
        // rather than losing the ask.
        if (data.reviewUrl) setInviteLink(data.reviewUrl);
        throw new Error(data.error || "Failed to send");
      }
      setRowMsg({ id: p.id, msg: `Review invite sent to ${invite.clientEmail}` });
      setInvite({ ...EMPTY_INVITE });
    } catch (e) {
      setRowMsg({ id: p.id, msg: e instanceof Error ? e.message : "Failed to send", err: true });
    } finally {
      setBusyId(null);
    }
  }

  // Type in praise the shop already has. Published with a label, attributed,
  // and it never touches the star average.
  async function addTestimonial(p: PipelineProvider) {
    if (!testimonial.authorName.trim() || testimonial.body.trim().length < 20) {
      setRowMsg({ id: p.id, msg: "Need the client's name and their actual words.", err: true });
      return;
    }
    if (!testimonial.consent) {
      setRowMsg({ id: p.id, msg: "Tick the permission box — it is the basis for publishing it.", err: true });
      return;
    }
    setBusyId(p.id);
    try {
      const res = await fetch("/api/reviews/testimonial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          providerId: p.id,
          authorName: testimonial.authorName.trim(),
          vehicle: testimonial.vehicle.trim() || undefined,
          workType: testimonial.workType.trim() || undefined,
          workDate: testimonial.workDate.trim() || undefined,
          body: testimonial.body.trim(),
          consent: true,
          submittedBy: addedBy || "team",
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to save");
      setRowMsg({ id: p.id, msg: "Saved — it goes live once Chris checks it." });
      setTestimonial({ ...EMPTY_TESTIMONIAL });
    } catch (e) {
      setRowMsg({ id: p.id, msg: e instanceof Error ? e.message : "Failed to save", err: true });
    } finally {
      setBusyId(null);
    }
  }

  // Email the shop a link that attaches a login to the listing they already
  // have. Before this existed, a shop we onboarded by phone could never get an
  // account at all — signing up showed them "you don't have a provider profile
  // yet" while their listing sat live, and applying again made a duplicate.
  async function sendAccountLink(p: PipelineProvider) {
    setBusyId(p.id);
    setLinkUrl("");
    try {
      const res = await fetch("/api/providers/link/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ providerId: p.id }),
      });
      const data = await res.json();
      if (data.linkUrl) setLinkUrl(data.linkUrl);
      if (!res.ok || !data.success) throw new Error(data.error || "Couldn't send it");
      setRowMsg({ id: p.id, msg: `Login link sent to ${data.sentTo}` });
    } catch (e) {
      setRowMsg({ id: p.id, msg: e instanceof Error ? e.message : "Couldn't send it", err: true });
    } finally {
      setBusyId(null);
    }
  }

  async function handleLogout() {
    await fetch("/api/team/auth", { method: "DELETE" });
    router.push("/team");
  }

  const totalCount = Object.values(counts).reduce((a, b) => a + b, 0);
  const liveCount = (counts["claimed"] || 0) + (counts["list_only"] || 0);

  const inputCls =
    "w-full h-10 px-3 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent";

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f5f4f0" }}>
      {/* Header */}
      <header className="border-b border-border bg-white">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold"
              style={{ backgroundColor: "#1E6091" }}
            >
              FS
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground leading-tight">Onboarding Console</p>
              <p className="text-xs text-text-secondary">Fully Sorted — Provider Team</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-text-secondary hover:text-foreground"
          >
            <LogOut className="w-3.5 h-3.5" /> Sign out
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {STAGES.map((s) => (
            <button
              key={s.key}
              onClick={() => setStage(stage === s.key ? "all" : s.key)}
              className={`bg-white rounded-xl border p-4 text-left transition-shadow hover:shadow-sm ${
                stage === s.key ? "border-accent ring-2 ring-accent/20" : "border-border"
              }`}
            >
              <p className="text-2xl font-bold text-foreground">{counts[s.key] || 0}</p>
              <p className="text-xs font-medium mt-0.5" style={{ color: s.color }}>{s.label}</p>
            </button>
          ))}
        </div>
        <p className="text-xs text-text-secondary -mt-3">
          {totalCount} in pipeline · {liveCount} live in the directory
        </p>

        {/* Add provider */}
        <div className="bg-white rounded-2xl border border-border">
          <button
            onClick={() => setShowForm(!showForm)}
            className="w-full flex items-center justify-between px-5 py-4"
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
              <UserPlus className="w-4 h-4" style={{ color: "#1E6091" }} />
              Add a provider from a call
            </span>
            {showForm ? <ChevronUp className="w-4 h-4 text-text-secondary" /> : <ChevronDown className="w-4 h-4 text-text-secondary" />}
          </button>

          {showForm && (
            <div className="px-5 pb-5 border-t border-border pt-4">
              {/* Photo first. It used to sit in the middle of a twelve-field grid
                  as a small dashed square, which is why a rep on a call hit
                  "photo is required" and reported there was nowhere to upload
                  one. Required fields do not belong below the fold. */}
              <div
                id="add-photo"
                className="rounded-xl p-4 mb-4 scroll-mt-24"
                style={{
                  background: photoInvalid ? "rgba(220,38,38,0.05)" : "rgba(30,96,145,0.05)",
                  border: `1px solid ${photoInvalid ? "rgba(220,38,38,0.45)" : "rgba(30,96,145,0.18)"}`,
                }}
              >
                <div className="flex items-center gap-2 mb-2.5">
                  <span
                    className="text-[10px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded"
                    style={{
                      color: photoInvalid ? "#b91c1c" : "#1E6091",
                      background: photoInvalid ? "rgba(220,38,38,0.10)" : "rgba(30,96,145,0.10)",
                    }}
                  >
                    Required
                  </span>
                  <label className="text-sm font-bold text-foreground">Shop photo or logo</label>
                </div>
                <PhotoUpload
                  value={form.avatarUrl}
                  onChange={(url) => { setField("avatarUrl", url); setPhotoInvalid(false); }}
                  invalid={photoInvalid}
                />
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <div>
                  <label className="text-xs font-medium text-text-secondary block mb-1">Business name *</label>
                  <input className={inputCls} value={form.businessName} onChange={(e) => setField("businessName", e.target.value)} placeholder="Coastal Classics Detailing" />
                </div>
                <div>
                  <label className="text-xs font-medium text-text-secondary block mb-1">Owner name *</label>
                  <input className={inputCls} value={form.ownerName} onChange={(e) => setField("ownerName", e.target.value)} placeholder="Mike Rivera" />
                </div>
                <div>
                  <label className="text-xs font-medium text-text-secondary block mb-1">Email *</label>
                  <input className={inputCls} type="email" value={form.email} onChange={(e) => setField("email", e.target.value)} placeholder="mike@coastalclassics.com" />
                </div>
                <div>
                  <label className="text-xs font-medium text-text-secondary block mb-1">Phone</label>
                  <input className={inputCls} value={form.phone} onChange={(e) => setField("phone", e.target.value)} placeholder="(619) 555-0132" />
                </div>
                <div>
                  <label className="text-xs font-medium text-text-secondary block mb-1">Category *</label>
                  <select className={inputCls} value={form.category} onChange={(e) => setField("category", e.target.value)}>
                    <option value="">Choose a category…</option>
                    {CATEGORIES.map((c) => (
                      <option key={c.value} value={c.value}>{c.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium text-text-secondary block mb-1">Location (city, state) *</label>
                  <input className={inputCls} value={form.location} onChange={(e) => setField("location", e.target.value)} placeholder="San Diego, CA" />
                </div>
                <div>
                  <label className="text-xs font-medium text-text-secondary block mb-1">Website</label>
                  <input className={inputCls} value={form.website} onChange={(e) => setField("website", e.target.value)} placeholder="https://…" />
                </div>
                <div>
                  <label className="text-xs font-medium text-text-secondary block mb-1">Instagram</label>
                  <input className={inputCls} value={form.instagram} onChange={(e) => setField("instagram", e.target.value)} placeholder="@handle" />
                </div>
                <div>
                  <label className="text-xs font-medium text-text-secondary block mb-1">Years in business</label>
                  <input className={inputCls} value={form.yearsInBusiness} onChange={(e) => setField("yearsInBusiness", e.target.value)} placeholder="12" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs font-medium text-text-secondary block mb-1">Specialties (comma-separated)</label>
                  <input className={inputCls} value={form.specialties} onChange={(e) => setField("specialties", e.target.value)} placeholder="Ceramic coating, paint correction, concours prep" />
                </div>
                <div>
                  <label className="text-xs font-medium text-text-secondary block mb-1">Your name (for the record)</label>
                  <input className={inputCls} value={addedBy} onChange={(e) => setAddedBy(e.target.value)} placeholder="e.g. Dave" />
                </div>
                <div className="sm:col-span-2 lg:col-span-3">
                  <label className="text-xs font-medium text-text-secondary block mb-1">Call notes (internal only)</label>
                  <textarea
                    className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                    rows={2}
                    value={form.notes}
                    onChange={(e) => setField("notes", e.target.value)}
                    placeholder="Spoke 7/23 — interested, prefers email. Busy until August."
                  />
                </div>
              </div>

              {formError && <p className="text-sm text-red-600 font-medium mt-3">{formError}</p>}
              {formSuccess && <p className="text-sm text-green-700 font-medium mt-3">{formSuccess}</p>}

              <div className="flex flex-wrap gap-3 mt-4">
                <button
                  onClick={() => addProvider(true)}
                  disabled={submitting !== null}
                  className="inline-flex items-center gap-2 px-5 h-11 text-sm font-semibold text-white rounded-lg disabled:opacity-60"
                  style={{ backgroundColor: "#1E6091" }}
                >
                  {submitting === "invite" ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                  Add &amp; email invite now
                </button>
                <button
                  onClick={() => addProvider(false)}
                  disabled={submitting !== null}
                  className="inline-flex items-center gap-2 px-5 h-11 text-sm font-semibold rounded-lg border border-border text-foreground bg-white hover:bg-gray-50 disabled:opacity-60"
                >
                  {submitting === "only" ? <Loader2 className="w-4 h-4 animate-spin" /> : <UserPlus className="w-4 h-4" />}
                  Add without emailing
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Search + filter */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative flex-1 min-w-[220px]">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary" />
            <input
              className="w-full h-10 pl-9 pr-3 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
              placeholder="Search business, owner, email, city…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          {stage !== "all" && (
            <button onClick={() => setStage("all")} className="text-xs font-medium text-accent underline">
              Clear filter ({stageInfo(stage).label})
            </button>
          )}
        </div>

        {/* Pipeline */}
        <div className="bg-white rounded-2xl border border-border overflow-hidden">
          {loading ? (
            <div className="p-10 text-center">
              <Loader2 className="w-5 h-5 animate-spin mx-auto text-text-tertiary" />
            </div>
          ) : loadError ? (
            <div className="p-8 text-center">
              <p className="text-sm font-semibold text-red-700 mb-1">Couldn&apos;t load the pipeline</p>
              <p className="text-sm text-text-secondary max-w-md mx-auto">{loadError}</p>
              <button
                onClick={load}
                className="mt-4 inline-flex items-center gap-2 px-4 h-9 text-xs font-semibold text-white rounded-lg"
                style={{ backgroundColor: "#1E6091" }}
              >
                Try again
              </button>
            </div>
          ) : providers.length === 0 ? (
            <div className="p-10 text-center text-sm text-text-secondary">
              No providers here yet. Add your first one from a call above.
            </div>
          ) : (
            <ul className="divide-y divide-border">
              {providers.map((p) => {
                const s = stageInfo(p.outreach_status);
                const expanded = expandedId === p.id;
                const canInvite = !!p.claim_token && !["claimed", "list_only"].includes(p.outreach_status || "");
                const invited = p.outreach_status === "sent";
                return (
                  <li key={p.id} className="px-5 py-4">
                    <div className="flex flex-wrap items-center gap-3">
                      {p.avatar_url ? (
                        <Image
                          src={p.avatar_url}
                          alt=""
                          width={40}
                          height={40}
                          className="w-10 h-10 rounded-lg object-cover border border-border bg-white shrink-0"
                          unoptimized
                        />
                      ) : (
                        <div
                          className="w-10 h-10 rounded-lg border border-dashed border-border bg-white flex items-center justify-center shrink-0"
                          title="No photo yet — add one in the details panel"
                        >
                          <ImageIcon className="w-4 h-4 text-text-tertiary" />
                        </div>
                      )}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="text-sm font-semibold text-foreground truncate">{p.business_name}</p>
                          <span
                            className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold"
                            style={{ color: s.color, backgroundColor: s.bg }}
                          >
                            {s.label}
                          </span>
                          {invited && p.outreach_sent_at && (
                            <span className="text-[11px] text-text-tertiary">invited {timeAgo(p.outreach_sent_at)}</span>
                          )}
                        </div>
                        <p className="text-xs text-text-secondary mt-0.5 flex items-center gap-3 flex-wrap">
                          {p.owner_name && <span>{p.owner_name}</span>}
                          <span className="inline-flex items-center gap-1"><Mail className="w-3 h-3" />{p.email}</span>
                          {p.phone && <span className="inline-flex items-center gap-1"><Phone className="w-3 h-3" />{p.phone}</span>}
                          <span className="inline-flex items-center gap-1"><MapPin className="w-3 h-3" />{p.location}</span>
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5 flex-wrap">
                        {canInvite && (
                          <button
                            onClick={() => sendInvite(p, invited)}
                            disabled={busyId === p.id}
                            className="inline-flex items-center gap-1.5 px-3 h-8 text-xs font-semibold text-white rounded-lg disabled:opacity-60"
                            style={{ backgroundColor: invited ? "#B08D3F" : "#1E6091" }}
                            title={invited ? "Send a gentle reminder email" : "Email the approval link"}
                          >
                            {busyId === p.id ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : invited ? <BellRing className="w-3.5 h-3.5" /> : <Send className="w-3.5 h-3.5" />}
                            {invited ? "Reminder" : "Send invite"}
                          </button>
                        )}
                        {p.claim_token && (
                          <button
                            onClick={() => copyLink(p)}
                            className="inline-flex items-center gap-1.5 px-3 h-8 text-xs font-medium rounded-lg border border-border text-foreground bg-white hover:bg-gray-50"
                            title="Copy the approval link (for texting it, or reading over the phone)"
                          >
                            {copiedId === p.id ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                            {copiedId === p.id ? "Copied" : "Copy link"}
                          </button>
                        )}
                        {["claimed", "list_only"].includes(p.outreach_status || "") && (
                          <a
                            href={`/services/${p.slug}`}
                            target="_blank"
                            className="inline-flex items-center gap-1.5 px-3 h-8 text-xs font-medium rounded-lg border border-border text-foreground bg-white hover:bg-gray-50"
                          >
                            <ExternalLink className="w-3.5 h-3.5" /> View live
                          </a>
                        )}
                        <button
                          onClick={() => {
                            setExpandedId(expanded ? null : p.id);
                            setNoteDraft(p.outreach_notes || "");
                            setEdit({
                              businessName: p.business_name || "",
                              ownerName: p.owner_name || "",
                              email: p.email || "",
                              phone: p.phone || "",
                              category: p.category || "",
                              location: p.location || "",
                              website: p.website || "",
                              instagram: p.instagram || "",
                              specialties: (p.specialties || []).join("\n"),
                              yearsInBusiness: p.years_in_business || "",
                              description: p.description || "",
                              avatarUrl: p.avatar_url || "",
                            });
                            setRowMsg(null);
                          }}
                          className="inline-flex items-center gap-1.5 px-2.5 h-8 text-xs font-medium rounded-lg border border-border text-text-secondary bg-white hover:bg-gray-50"
                          title="Notes & details"
                        >
                          <StickyNote className="w-3.5 h-3.5" />
                          {expanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                        </button>
                      </div>
                    </div>

                    {rowMsg?.id === p.id && (
                      <p className={`text-xs font-medium mt-2 ${rowMsg.err ? "text-red-600" : "text-green-700"}`}>{rowMsg.msg}</p>
                    )}

                    {expanded && (
                      <div className="mt-3 rounded-xl border border-border bg-[#fafaf7] p-4 space-y-3">
                        <div>
                          <label className="text-xs font-semibold text-text-secondary block mb-1">
                            Call notes (internal — never shown to the provider)
                          </label>
                          <textarea
                            className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-accent/30"
                            rows={3}
                            value={noteDraft}
                            onChange={(e) => setNoteDraft(e.target.value)}
                          />
                          <div className="flex items-center gap-3 mt-2">
                            <button
                              onClick={() => saveNotes(p)}
                              disabled={busyId === p.id}
                              className="inline-flex items-center gap-1.5 px-3 h-8 text-xs font-semibold text-white rounded-lg disabled:opacity-60"
                              style={{ backgroundColor: "#1E6091" }}
                            >
                              <Pencil className="w-3 h-3" /> Save notes
                            </button>
                            {p.outreach_added_by && (
                              <span className="text-[11px] text-text-tertiary">Added by {p.outreach_added_by} · {timeAgo(p.created_at)}</span>
                            )}
                          </div>
                        </div>
                        <div className="pt-3 border-t border-border">
                          <p className="text-xs font-semibold text-text-secondary mb-1">
                            Edit this provider
                          </p>
                          {p.owner_linked ? (
                            <p className="text-[11px] text-text-tertiary leading-relaxed">
                              {p.business_name} has its own login and writes its own profile now.
                              Editing it here would paint over the owner&rsquo;s words with no way
                              back, so it&rsquo;s locked. Ask them to change it, or ask Chris.
                            </p>
                          ) : p.outreach_status === "declined" ? (
                            <p className="text-[11px] text-text-tertiary leading-relaxed">
                              This shop asked to be removed, so its details are frozen. If that was
                              a mistake, hit Undo first.
                            </p>
                          ) : (
                          <>
                          <p className="text-[11px] text-text-tertiary mb-2 leading-relaxed">
                            Everything the owner would fix on the call. Changes go live on their
                            profile straight away. The web address stays the same even if the
                            business name changes, so any link already sent out still works.
                          </p>
                          <div className="grid sm:grid-cols-2 gap-3 mb-3">
                            <div>
                              <label className="text-[11px] font-medium text-text-tertiary block mb-1">Business name</label>
                              <input
                                className="w-full h-9 px-3 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-accent/30"
                                value={edit.businessName}
                                onChange={(e) => editSetField("businessName", e.target.value)}
                              />
                            </div>
                            <div>
                              <label className="text-[11px] font-medium text-text-tertiary block mb-1">Owner name</label>
                              <input
                                className="w-full h-9 px-3 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-accent/30"
                                value={edit.ownerName}
                                onChange={(e) => editSetField("ownerName", e.target.value)}
                              />
                            </div>
                            <div>
                              <label className="text-[11px] font-medium text-text-tertiary block mb-1">Email</label>
                              <input
                                className="w-full h-9 px-3 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-accent/30"
                                type="email"
                                value={edit.email}
                                onChange={(e) => editSetField("email", e.target.value)}
                              />
                            </div>
                            <div>
                              <label className="text-[11px] font-medium text-text-tertiary block mb-1">Phone</label>
                              <input
                                className="w-full h-9 px-3 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-accent/30"
                                value={edit.phone}
                                onChange={(e) => editSetField("phone", e.target.value)}
                              />
                            </div>
                            <div>
                              <label className="text-[11px] font-medium text-text-tertiary block mb-1">Category</label>
                              <select
                                className="w-full h-9 px-3 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-accent/30"
                                value={edit.category}
                                onChange={(e) => editSetField("category", e.target.value)}
                              >
                                {!CATEGORIES.some((c) => c.value === edit.category) && (
                                  <option value={edit.category}>{edit.category || "Pick a category"}</option>
                                )}
                                {CATEGORIES.map((c) => (
                                  <option key={c.value} value={c.value}>{c.label}</option>
                                ))}
                              </select>
                            </div>
                            <div>
                              <label className="text-[11px] font-medium text-text-tertiary block mb-1">Location</label>
                              <input
                                className="w-full h-9 px-3 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-accent/30"
                                value={edit.location}
                                onChange={(e) => editSetField("location", e.target.value)}
                              />
                            </div>
                            <div>
                              <label className="text-[11px] font-medium text-text-tertiary block mb-1">Website</label>
                              <input
                                className="w-full h-9 px-3 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-accent/30"
                                placeholder="shopname.com"
                                value={edit.website}
                                onChange={(e) => editSetField("website", e.target.value)}
                              />
                            </div>
                            <div>
                              <label className="text-[11px] font-medium text-text-tertiary block mb-1">Instagram</label>
                              <input
                                className="w-full h-9 px-3 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-accent/30"
                                placeholder="handle, without the @"
                                value={edit.instagram}
                                onChange={(e) => editSetField("instagram", e.target.value)}
                              />
                            </div>
                            <div>
                              <label className="text-[11px] font-medium text-text-tertiary block mb-1">Specialties (one per line)</label>
                              <textarea
                                className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-accent/30"
                                rows={3}
                                placeholder={"Air-cooled 911\nEngine rebuilds\nConcours prep"}
                                value={edit.specialties}
                                onChange={(e) => editSetField("specialties", e.target.value)}
                              />
                            </div>
                            <div>
                              <label className="text-[11px] font-medium text-text-tertiary block mb-1">Years in business</label>
                              <input
                                className="w-full h-9 px-3 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-accent/30"
                                value={edit.yearsInBusiness}
                                onChange={(e) => editSetField("yearsInBusiness", e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="mb-3">
                            <label className="text-[11px] font-medium text-text-tertiary block mb-1">
                              Description (this is the paragraph on their public profile)
                            </label>
                            <textarea
                              className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-accent/30"
                              rows={4}
                              value={edit.description}
                              onChange={(e) => editSetField("description", e.target.value)}
                            />
                          </div>
                          <div className="mb-3">
                            <PhotoUpload
                              value={edit.avatarUrl}
                              onChange={(url) => editSetField("avatarUrl", url)}
                            />
                          </div>
                          <div className="mb-3 max-w-xs">
                            <label className="text-[11px] font-medium text-text-tertiary block mb-1">
                              Your name (recorded against this edit)
                            </label>
                            <input
                              className="w-full h-9 px-3 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-accent/30"
                              value={addedBy}
                              onChange={(e) => setAddedBy(e.target.value)}
                            />
                          </div>
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => saveDetails(p)}
                              disabled={busyId === p.id}
                              className="inline-flex items-center gap-1.5 px-3 h-8 text-xs font-semibold text-white rounded-lg disabled:opacity-60"
                              style={{ backgroundColor: "#1E6091" }}
                            >
                              <Check className="w-3 h-3" /> Save changes
                            </button>
                            {p.outreach_last_edited_at && (
                              <span className="text-[11px] text-text-tertiary">
                                Last edited{p.outreach_last_edited_by ? ` by ${p.outreach_last_edited_by}` : ""} ·{" "}
                                {timeAgo(p.outreach_last_edited_at)}
                              </span>
                            )}
                          </div>
                          </>
                          )}
                        </div>
                        <div className="pt-3 border-t border-border">
                          <p className="text-xs font-semibold text-text-secondary mb-1">Account access</p>
                          <p className="text-[11px] text-text-tertiary mb-2 leading-relaxed">
                            Sends {p.email} a one-time link to set up a login for this listing, so they can edit their
                            own details and reply to reviews. Good line on a call: &ldquo;I&rsquo;ll email you a link
                            now — takes a minute and then it&rsquo;s yours.&rdquo;
                          </p>
                          <button
                            onClick={() => sendAccountLink(p)}
                            disabled={busyId === p.id}
                            className="inline-flex items-center gap-1.5 px-3 h-8 text-xs font-semibold text-white rounded-lg disabled:opacity-60"
                            style={{ backgroundColor: "#1E6091" }}
                          >
                            <Mail className="w-3 h-3" /> Send login link
                          </button>
                          {linkUrl && (
                            <p className="text-[11px] mt-2 break-all text-text-tertiary">
                              Link (in case the email doesn&rsquo;t land): {linkUrl}
                            </p>
                          )}
                        </div>

                        {PROVIDER_REVIEWS_PUBLIC && (
                          <div className="pt-3 border-t border-border">
                            <p className="text-xs font-semibold text-text-secondary mb-1">
                              Reviews for {p.business_name}
                            </p>
                            <p className="text-[11px] text-text-tertiary mb-2 leading-relaxed">
                              On the call, ask: &ldquo;who are two or three clients who&rsquo;d say something good?&rdquo;
                              Send them an invite and it becomes a verified review with stars. If they&rsquo;d rather
                              not have their clients emailed, type up praise they already have instead — it publishes
                              labelled as theirs and counts towards no rating.
                            </p>

                            <div className="flex gap-2 mb-3">
                              <button
                                onClick={() => setReviewTab("invite")}
                                className={`px-2.5 h-7 text-[11px] font-semibold rounded-lg border ${
                                  reviewTab === "invite"
                                    ? "bg-[#1E6091] text-white border-[#1E6091]"
                                    : "bg-white text-text-secondary border-border"
                                }`}
                              >
                                <Star className="w-3 h-3 inline mr-1" /> Ask a client
                              </button>
                              <button
                                onClick={() => setReviewTab("testimonial")}
                                className={`px-2.5 h-7 text-[11px] font-semibold rounded-lg border ${
                                  reviewTab === "testimonial"
                                    ? "bg-[#1E6091] text-white border-[#1E6091]"
                                    : "bg-white text-text-secondary border-border"
                                }`}
                              >
                                <Quote className="w-3 h-3 inline mr-1" /> Type a testimonial
                              </button>
                            </div>

                            {reviewTab === "invite" ? (
                              <div>
                                <div className="grid sm:grid-cols-3 gap-2 mb-2">
                                  <input
                                    className="h-9 px-3 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-accent/30"
                                    placeholder="Client name *"
                                    value={invite.clientName}
                                    onChange={(e) => setInvite({ ...invite, clientName: e.target.value })}
                                  />
                                  <input
                                    className="h-9 px-3 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-accent/30"
                                    type="email"
                                    placeholder="Client email *"
                                    value={invite.clientEmail}
                                    onChange={(e) => setInvite({ ...invite, clientEmail: e.target.value })}
                                  />
                                  <input
                                    className="h-9 px-3 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-accent/30"
                                    placeholder="Work done (optional)"
                                    value={invite.workType}
                                    onChange={(e) => setInvite({ ...invite, workType: e.target.value })}
                                  />
                                </div>
                                <button
                                  onClick={() => sendReviewInvite(p)}
                                  disabled={busyId === p.id}
                                  className="inline-flex items-center gap-1.5 px-3 h-8 text-xs font-semibold text-white rounded-lg disabled:opacity-60"
                                  style={{ backgroundColor: "#1E6091" }}
                                >
                                  <Send className="w-3 h-3" /> Send review invite
                                </button>
                                {inviteLink && (
                                  <p className="text-[11px] mt-2 break-all text-text-tertiary">
                                    Email failed, but the link works — pass it on: {inviteLink}
                                  </p>
                                )}
                              </div>
                            ) : (
                              <div>
                                <div className="grid sm:grid-cols-2 gap-2 mb-2">
                                  <input
                                    className="h-9 px-3 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-accent/30"
                                    placeholder="Client name *"
                                    value={testimonial.authorName}
                                    onChange={(e) => setTestimonial({ ...testimonial, authorName: e.target.value })}
                                  />
                                  <input
                                    className="h-9 px-3 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-accent/30"
                                    placeholder="The car (e.g. 1973 911 T)"
                                    value={testimonial.vehicle}
                                    onChange={(e) => setTestimonial({ ...testimonial, vehicle: e.target.value })}
                                  />
                                  <input
                                    className="h-9 px-3 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-accent/30"
                                    placeholder="Work done"
                                    value={testimonial.workType}
                                    onChange={(e) => setTestimonial({ ...testimonial, workType: e.target.value })}
                                  />
                                  <input
                                    className="h-9 px-3 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-accent/30"
                                    placeholder="When (e.g. Spring 2024)"
                                    value={testimonial.workDate}
                                    onChange={(e) => setTestimonial({ ...testimonial, workDate: e.target.value })}
                                  />
                                </div>
                                <textarea
                                  className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 mb-2"
                                  rows={3}
                                  placeholder="What the client actually said — their words, not a rewrite."
                                  value={testimonial.body}
                                  onChange={(e) => setTestimonial({ ...testimonial, body: e.target.value })}
                                />
                                <label className="flex items-start gap-2 text-[11px] text-text-secondary mb-2 leading-relaxed">
                                  <input
                                    type="checkbox"
                                    className="mt-0.5"
                                    checked={testimonial.consent}
                                    onChange={(e) => setTestimonial({ ...testimonial, consent: e.target.checked })}
                                  />
                                  <span>
                                    The shop confirms this client is real and has given permission to publish this
                                    with their name. Ask them on the call — do not tick it for them.
                                  </span>
                                </label>
                                <button
                                  onClick={() => addTestimonial(p)}
                                  disabled={busyId === p.id}
                                  className="inline-flex items-center gap-1.5 px-3 h-8 text-xs font-semibold text-white rounded-lg disabled:opacity-60"
                                  style={{ backgroundColor: "#1E6091" }}
                                >
                                  <Check className="w-3 h-3" /> Save testimonial
                                </button>
                              </div>
                            )}
                          </div>
                        )}
                        <div className="pt-2 border-t border-border">
                          {p.outreach_status === "declined" ? (
                            <button
                              onClick={() => undoOptOut(p)}
                              disabled={busyId === p.id}
                              className="inline-flex items-center gap-1.5 text-xs font-medium"
                              style={{ color: "#1E6091" }}
                            >
                              <Check className="w-3.5 h-3.5" /> Undo — put them back in the pipeline
                            </button>
                          ) : (
                            <button
                              onClick={() => optOut(p)}
                              disabled={busyId === p.id}
                              className="inline-flex items-center gap-1.5 text-xs font-medium text-red-600 hover:text-red-700"
                            >
                              <XCircle className="w-3.5 h-3.5" /> Owner said no — take the listing down
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <p className="text-[11px] text-text-tertiary text-center pb-8">
          This console can add providers and send approval invites. Site admin (listings, orders) lives at /admin.
        </p>
      </main>
    </div>
  );
}
