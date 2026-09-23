'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Loader2, Upload, X, ArrowLeft, ArrowRight, Images } from 'lucide-react';
import { GALLERY_MAX, CAPTION_MAX, type GalleryPhoto } from '@/lib/gallery';

/* ─── Work gallery uploader ──────────────────────────────
   Several photos, each with an optional caption, in the order the shop wants
   them shown. Separate from PhotoUpload, which owns the single lead image and
   has a different job: that one is required and picks the card, this one is
   optional and tells the story.

   Reorder is two buttons, not drag and drop. Drag is a dependency, it does not
   work on a phone without more work than it is worth, and a shop owner moving
   a photo one place left is not a fluid gesture problem. */
export default function GalleryUpload({
  value,
  onChange,
}: {
  value: GalleryPhoto[];
  onChange: (next: GalleryPhoto[]) => void;
}) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [link, setLink] = useState('');

  const full = value.length >= GALLERY_MAX;
  const room = GALLERY_MAX - value.length;

  async function upload(body: FormData): Promise<string> {
    body.append('folder', 'providers');
    const res = await fetch('/api/upload', { method: 'POST', body });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || 'Upload failed. Try again.');
    return data.url as string;
  }

  async function handleFiles(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []);
    e.target.value = ''; // allow re-selecting the same file after an error
    if (!files.length) return;

    setError('');
    setUploading(true);
    // Uploaded one at a time rather than in parallel. A shop owner selecting
    // twelve photos from a phone would otherwise fire twelve concurrent
    // multipart posts at a rate-limited route and get most of them refused.
    const added: GalleryPhoto[] = [];
    try {
      for (const file of files.slice(0, room)) {
        const fd = new FormData();
        fd.append('file', file);
        added.push({ url: await upload(fd) });
      }
      if (files.length > room) {
        setError(`Only ${room} more ${room === 1 ? 'photo fits' : 'photos fit'}. The rest were skipped.`);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed. Try again.');
    } finally {
      // Whatever succeeded before the failure is kept. Losing four good
      // uploads because the fifth failed is the worst version of this.
      if (added.length) onChange([...value, ...added]);
      setUploading(false);
    }
  }

  async function handleLink() {
    const u = link.trim();
    if (!u || full) return;
    setError('');
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append('url', u);
      const url = await upload(fd);
      onChange([...value, { url }]);
      setLink('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not fetch that link.');
    } finally {
      setUploading(false);
    }
  }

  function move(from: number, to: number) {
    if (to < 0 || to >= value.length) return;
    const next = [...value];
    const [item] = next.splice(from, 1);
    next.splice(to, 0, item);
    onChange(next);
  }

  function remove(i: number) {
    onChange(value.filter((_, idx) => idx !== i));
  }

  function caption(i: number, text: string) {
    onChange(value.map((p, idx) => (idx === i ? { ...p, caption: text.slice(0, CAPTION_MAX) } : p)));
  }

  return (
    <div>
      {value.length > 0 && (
        <ul className="grid gap-4 sm:grid-cols-2 mb-5">
          {value.map((photo, i) => (
            <li key={photo.url} className="rounded-xl border border-border bg-white overflow-hidden">
              <div className="relative aspect-[4/3] bg-surface">
                <Image
                  src={photo.url}
                  alt={photo.caption || `Gallery photo ${i + 1}`}
                  fill
                  sizes="(min-width: 640px) 320px, 100vw"
                  className="object-cover"
                  unoptimized
                />
                <button
                  type="button"
                  onClick={() => remove(i)}
                  aria-label={`Remove photo ${i + 1}`}
                  className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/95 border border-border flex items-center justify-center hover:bg-white shadow-sm"
                >
                  <X className="w-4 h-4 text-foreground" />
                </button>
                {i === 0 && (
                  <span className="absolute bottom-2 left-2 text-[11px] font-semibold px-2 py-1 rounded-full bg-white/95 text-foreground border border-border">
                    Shown first
                  </span>
                )}
              </div>
              <div className="p-3">
                <input
                  type="text"
                  value={photo.caption ?? ''}
                  onChange={(e) => caption(i, e.target.value)}
                  maxLength={CAPTION_MAX}
                  placeholder="Optional: what is this? e.g. 1973 911 RS, bare metal"
                  className="w-full px-3 h-9 text-xs border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                />
                <div className="flex items-center gap-1.5 mt-2">
                  <button
                    type="button"
                    onClick={() => move(i, i - 1)}
                    disabled={i === 0}
                    aria-label={`Move photo ${i + 1} earlier`}
                    className="w-8 h-8 rounded-lg border border-border bg-white flex items-center justify-center hover:bg-gray-50 disabled:opacity-40"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => move(i, i + 1)}
                    disabled={i === value.length - 1}
                    aria-label={`Move photo ${i + 1} later`}
                    className="w-8 h-8 rounded-lg border border-border bg-white flex items-center justify-center hover:bg-gray-50 disabled:opacity-40"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[11px] text-text-tertiary ml-1">
                    {i + 1} of {value.length}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

      {value.length === 0 && (
        <div className="rounded-xl border-2 border-dashed border-border bg-white p-6 text-center mb-5">
          <Images className="w-7 h-7 mx-auto mb-2" style={{ color: '#9a9a8a' }} />
          <p className="text-sm font-semibold text-foreground mb-1">No photos yet</p>
          <p className="text-xs text-text-secondary max-w-sm mx-auto">
            Finished cars, work in progress, the shop floor. An owner deciding who touches their car
            is looking for evidence, and this is the only place on your profile that carries any.
          </p>
        </div>
      )}

      <div className="flex flex-wrap items-center gap-2">
        <label
          className={`inline-flex items-center gap-1.5 px-3 h-9 text-xs font-semibold rounded-lg border transition-colors ${
            uploading || full
              ? 'border-border text-text-tertiary bg-gray-50 cursor-not-allowed'
              : 'border-border text-foreground bg-white hover:bg-gray-50 cursor-pointer'
          }`}
        >
          {uploading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Upload className="w-3.5 h-3.5" />}
          {uploading ? 'Uploading…' : 'Add photos'}
          <input
            type="file"
            accept="image/jpeg,image/png,image/webp,image/heic"
            multiple
            className="hidden"
            disabled={uploading || full}
            onChange={handleFiles}
          />
        </label>
        <input
          type="url"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleLink();
            }
          }}
          disabled={uploading || full}
          placeholder="…or paste a link to a photo"
          className="flex-1 min-w-[12rem] px-3 h-9 text-xs border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent disabled:bg-gray-50"
        />
        <button
          type="button"
          onClick={handleLink}
          disabled={uploading || full || !link.trim()}
          className="px-3 h-9 text-xs font-semibold rounded-lg border border-border bg-white hover:bg-gray-50 disabled:opacity-50"
        >
          Fetch
        </button>
      </div>

      <p className="text-[11px] text-text-tertiary mt-2">
        {full
          ? `That is the full ${GALLERY_MAX}. Remove one to add another.`
          : `Up to ${GALLERY_MAX} photos, JPEG/PNG/WebP, max 10MB each. They appear in this order.`}
      </p>
      {error && <p className="text-xs text-red-600 font-medium mt-2">{error}</p>}
    </div>
  );
}
