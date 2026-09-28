'use client';

import { useRef } from 'react';
import PhotoUpload from '@/components/media/PhotoUpload';
import { ProviderMark } from '@/components/providers/ProviderMark';
import { DEFAULT_FOCUS, normalizeFocus, normalizeLogoKind, type LogoKind } from '@/lib/provider-images';

export type ProviderImagesValue = {
  avatarUrl: string;
  bannerFocus: string;
  logoUrl: string;
  logoKind: LogoKind;
};

/**
 * The two image slots, used by the apply form, the owner dashboard and the
 * /team console so all three ask the same questions in the same order.
 *
 *   1. Banner, required: a wide photo of the work or the shop, then a tap on
 *      the part that matters.
 *   2. Mark, optional: a logo or a portrait, and which one it is. Skipped,
 *      the site draws a tile from the initials and the trade.
 */
export default function ProviderImagesFields({
  value,
  onChange,
  name,
  category,
  bannerInvalid,
  audience = 'owner',
}: {
  value: ProviderImagesValue;
  onChange: (patch: Partial<ProviderImagesValue>) => void;
  name: string;
  category: string;
  bannerInvalid?: boolean;
  /** The rep is on the phone with the shop; the owner is filling it in. */
  audience?: 'owner' | 'rep';
}) {
  const frame = useRef<HTMLDivElement>(null);
  const focus = normalizeFocus(value.bannerFocus) ?? DEFAULT_FOCUS;
  const [fx, fy] = focus.split(' ').map((v) => parseFloat(v));

  function setFocusFrom(clientX: number, clientY: number) {
    const r = frame.current?.getBoundingClientRect();
    if (!r) return;
    const x = Math.round(Math.max(0, Math.min(1, (clientX - r.left) / r.width)) * 100);
    const y = Math.round(Math.max(0, Math.min(1, (clientY - r.top) / r.height)) * 100);
    onChange({ bannerFocus: `${x}% ${y}%` });
  }

  const you = audience === 'rep' ? 'their' : 'your';

  return (
    <div className="space-y-6">
      {/* ─── Banner ─── */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-1">Main photo *</h3>
        <p className="text-xs text-text-tertiary mb-3">
          A wide photo of {you} work or {you} shop. Landscape, at least 1600 pixels across. Cars over logos,
          daylight over flash.
        </p>
        <PhotoUpload
          value={value.avatarUrl}
          onChange={(url) => onChange({ avatarUrl: url, bannerFocus: DEFAULT_FOCUS })}
          invalid={bannerInvalid}
          shape="wide"
          minWidth={1200}
          label="Upload main photo"
          hint={<>JPEG, PNG or WebP. Big files are shrunk before upload.</>}
        />

        {value.avatarUrl && (
          <div className="mt-4">
            <p className="text-xs font-medium text-foreground mb-2">
              Tap the part of the photo that matters. Every crop keeps that spot in view.
            </p>
            <div
              ref={frame}
              className="relative w-full max-w-md cursor-crosshair select-none rounded-lg overflow-hidden border border-border bg-stone-100"
              onClick={(e) => setFocusFrom(e.clientX, e.clientY)}
              role="button"
              tabIndex={0}
              aria-label="Set the photo's focal point"
              onKeyDown={(e) => {
                const step = 5;
                const moves: Record<string, [number, number]> = {
                  ArrowLeft: [-step, 0], ArrowRight: [step, 0], ArrowUp: [0, -step], ArrowDown: [0, step],
                };
                const m = moves[e.key];
                if (!m) return;
                e.preventDefault();
                const x = Math.max(0, Math.min(100, fx + m[0]));
                const y = Math.max(0, Math.min(100, fy + m[1]));
                onChange({ bannerFocus: `${x}% ${y}%` });
              }}
            >
              {/* The whole photo, uncropped, so the tap maps to the real image. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={value.avatarUrl} alt="" className="block w-full h-auto" draggable={false} />
              <span
                className="absolute w-6 h-6 -ml-3 -mt-3 rounded-full border-2 border-white pointer-events-none"
                style={{ left: `${fx}%`, top: `${fy}%`, boxShadow: '0 0 0 2px rgba(18,53,42,0.6)' }}
                aria-hidden
              />
            </div>

            {/* How it will actually look: the directory card and the profile band. */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-[1fr_1.4fr] gap-3 max-w-md">
              <div>
                <p className="text-[11px] text-text-tertiary mb-1">Directory card</p>
                <div className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={value.avatarUrl} alt="" className="w-full h-20 object-cover rounded-md" style={{ objectPosition: focus }} />
                  <div className="absolute left-2 -bottom-4">
                    <ProviderMark name={name || 'Your shop'} category={category} logoUrl={value.logoUrl || null} logoKind={value.logoKind} size={32} ring />
                  </div>
                </div>
              </div>
              <div>
                <p className="text-[11px] text-text-tertiary mb-1">Profile page</p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={value.avatarUrl} alt="" className="w-full aspect-[3/1] object-cover rounded-md" style={{ objectPosition: focus }} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ─── Mark ─── */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-1">Logo or portrait (optional)</h3>
        <p className="text-xs text-text-tertiary mb-3">
          A logo works best as a PNG with a clear background. A square photo of {audience === 'rep' ? 'the owner' : 'you'} or
          the shop works too. Skip it and the site draws a tile from the initials and the trade.
        </p>
        <div className="flex items-start gap-4">
          <ProviderMark
            name={name || 'Your shop'}
            category={category}
            logoUrl={value.logoUrl || null}
            logoKind={value.logoKind}
            size={72}
          />
          <div className="flex-1 min-w-0">
            <PhotoUpload
              value={value.logoUrl}
              onChange={(url) => onChange({ logoUrl: url })}
              shape="square"
              minWidth={300}
              label="Upload logo or portrait"
              hint={<>At least 400 by 400. JPEG, PNG or WebP.</>}
            />
            {value.logoUrl && (
              <div className="flex flex-wrap items-center gap-2 mt-3">
                <span className="text-xs text-text-tertiary">This is</span>
                {(['logo', 'photo'] as const).map((k) => (
                  <button
                    key={k}
                    type="button"
                    onClick={() => onChange({ logoKind: normalizeLogoKind(k) })}
                    aria-pressed={value.logoKind === k}
                    className={`px-3 h-8 text-xs font-semibold rounded-lg border transition-colors ${
                      value.logoKind === k ? 'border-[#1C8C87] bg-[#E6F3F2] text-[#12352A]' : 'border-border bg-white hover:bg-gray-50'
                    }`}
                  >
                    {k === 'logo' ? 'A logo' : 'A photo'}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => onChange({ logoUrl: '' })}
                  className="ml-auto text-xs font-medium text-text-tertiary hover:text-foreground underline"
                >
                  Remove
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
