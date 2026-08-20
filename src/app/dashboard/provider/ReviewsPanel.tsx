'use client';

import { useCallback, useEffect, useState } from 'react';
import { Loader2, Star, MessageSquare, Quote, Check } from 'lucide-react';
import type { PublicReview } from '@/lib/reviews';

/**
 * The provider's own view of their review record.
 *
 * Deliberately spare on controls. A provider can do exactly two things here:
 * reply publicly to a review, and add a testimonial a client gave them
 * elsewhere. There is no delete, no hide, and no "request removal" button,
 * because there is no endpoint behind one.
 */
export default function ReviewsPanel({ slug }: { slug: string }) {
  const [reviews, setReviews] = useState<PublicReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [openReply, setOpenReply] = useState<number | null>(null);
  const [replyText, setReplyText] = useState('');
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState('');
  const [showAdd, setShowAdd] = useState(false);
  const [t, setT] = useState({ authorName: '', vehicle: '', workType: '', workDate: '', body: '', consent: false });

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/reviews?slug=${encodeURIComponent(slug)}`);
      const d = await res.json();
      setReviews(
        (d.reviews || []).map((r: Record<string, unknown>) => ({
          id: Number(r.id),
          source: r.source === 'testimonial' ? 'testimonial' : 'verified',
          authorName: String(r.author_name),
          vehicle: r.vehicle ? String(r.vehicle) : null,
          workType: r.work_type ? String(r.work_type) : null,
          workDate: r.work_date ? String(r.work_date) : null,
          rating: r.rating == null ? null : Number(r.rating),
          body: String(r.body),
          providerReply: r.provider_reply ? String(r.provider_reply) : null,
          providerRepliedAt: r.provider_replied_at ? String(r.provider_replied_at) : null,
          publishedAt: r.published_at ? String(r.published_at) : null,
          createdAt: String(r.created_at),
        })),
      );
    } catch {
      setReviews([]);
    } finally {
      setLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    load();
  }, [load]);

  async function saveReply(id: number) {
    setBusy(true);
    setMsg('');
    try {
      const res = await fetch('/api/reviews/reply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reviewId: id, reply: replyText }),
      });
      const d = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(d.error || 'Could not save that reply.');
      setOpenReply(null);
      setReplyText('');
      await load();
    } catch (e) {
      setMsg(e instanceof Error ? e.message : 'Could not save that reply.');
    } finally {
      setBusy(false);
    }
  }

  async function addTestimonial() {
    setBusy(true);
    setMsg('');
    try {
      const res = await fetch('/api/reviews/testimonial', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...t, consent: t.consent }),
      });
      const d = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(d.error || 'Could not save that.');
      setMsg('Saved — it goes live once we have checked it.');
      setT({ authorName: '', vehicle: '', workType: '', workDate: '', body: '', consent: false });
      setShowAdd(false);
    } catch (e) {
      setMsg(e instanceof Error ? e.message : 'Could not save that.');
    } finally {
      setBusy(false);
    }
  }

  const input = 'w-full h-10 px-3 text-sm rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-accent/30';

  return (
    <section className="rounded-2xl border border-border bg-white p-6 mt-8">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-1">
        <h2 className="font-display text-lg font-semibold">Your reviews</h2>
        <button
          type="button"
          onClick={() => setShowAdd((v) => !v)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 h-8 rounded-lg border border-border"
        >
          <Quote className="w-3.5 h-3.5" /> Add a client testimonial
        </button>
      </div>
      <p className="text-xs text-text-tertiary mb-5 leading-relaxed">
        Reviews are written by clients we email directly, and they are permanent — you can reply to one publicly, but
        you cannot edit or remove it. A straight, unapologetic reply to a critical review reads better to a prospective
        client than an unbroken wall of fives.
      </p>

      {msg && <p className="text-xs font-medium mb-3 text-accent">{msg}</p>}

      {showAdd && (
        <div className="rounded-xl border border-border bg-surface p-4 mb-5 space-y-2">
          <div className="grid sm:grid-cols-2 gap-2">
            <input className={input} placeholder="Client name *" value={t.authorName} onChange={(e) => setT({ ...t, authorName: e.target.value })} />
            <input className={input} placeholder="The car" value={t.vehicle} onChange={(e) => setT({ ...t, vehicle: e.target.value })} />
            <input className={input} placeholder="Work done" value={t.workType} onChange={(e) => setT({ ...t, workType: e.target.value })} />
            <input className={input} placeholder="When" value={t.workDate} onChange={(e) => setT({ ...t, workDate: e.target.value })} />
          </div>
          <textarea
            className="w-full px-3 py-2 text-sm rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-accent/30"
            rows={3}
            placeholder="What they said, in their words."
            value={t.body}
            onChange={(e) => setT({ ...t, body: e.target.value })}
          />
          <label className="flex items-start gap-2 text-[11px] text-text-secondary leading-relaxed">
            <input type="checkbox" className="mt-0.5" checked={t.consent} onChange={(e) => setT({ ...t, consent: e.target.checked })} />
            <span>
              This is a real client who has given me permission to publish this with their name. It will appear
              labelled as supplied by me, and it will not affect my star rating.
            </span>
          </label>
          <button
            type="button"
            onClick={addTestimonial}
            disabled={busy}
            className="inline-flex items-center gap-1.5 px-3 h-9 text-xs font-semibold text-white rounded-lg bg-accent disabled:opacity-60"
          >
            {busy ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Check className="w-3.5 h-3.5" />} Submit
          </button>
        </div>
      )}

      {loading ? (
        <div className="flex items-center gap-2 text-sm text-text-tertiary py-6">
          <Loader2 className="w-4 h-4 animate-spin" /> Loading…
        </div>
      ) : reviews.length === 0 ? (
        <p className="text-sm text-text-secondary">
          Nothing published yet. Ask us to invite a few past clients — we email them a one-time link and their review
          appears here with your reply box under it.
        </p>
      ) : (
        <ul className="space-y-4">
          {reviews.map((r) => (
            <li key={r.id} className="rounded-xl border border-border p-4">
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                {r.rating ? (
                  <span className="inline-flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5"
                        style={{ fill: i <= r.rating! ? '#B08D3F' : 'transparent', color: i <= r.rating! ? '#B08D3F' : '#d8d4cb' }}
                      />
                    ))}
                  </span>
                ) : null}
                <span className="text-sm font-semibold">{r.authorName}</span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-surface text-text-tertiary">
                  {r.source === 'verified' ? 'Verified client' : 'You supplied this'}
                </span>
              </div>
              <p className="text-sm whitespace-pre-line leading-relaxed">{r.body}</p>

              {r.providerReply && openReply !== r.id && (
                <div className="mt-3 rounded-lg bg-surface border-l-2 border-accent px-3 py-2">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-text-tertiary mb-0.5">Your reply</p>
                  <p className="text-sm whitespace-pre-line">{r.providerReply}</p>
                </div>
              )}

              {openReply === r.id ? (
                <div className="mt-3">
                  <textarea
                    className="w-full px-3 py-2 text-sm rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-accent/30"
                    rows={3}
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="Reply publicly. Short and specific beats defensive."
                  />
                  <div className="flex gap-2 mt-2">
                    <button
                      type="button"
                      onClick={() => saveReply(r.id)}
                      disabled={busy}
                      className="px-3 h-8 text-xs font-semibold text-white rounded-lg bg-accent disabled:opacity-60"
                    >
                      Post reply
                    </button>
                    <button type="button" onClick={() => setOpenReply(null)} className="px-3 h-8 text-xs text-text-tertiary">
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setOpenReply(r.id);
                    setReplyText(r.providerReply || '');
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-text-tertiary mt-3"
                >
                  <MessageSquare className="w-3.5 h-3.5" /> {r.providerReply ? 'Edit your reply' : 'Reply publicly'}
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
