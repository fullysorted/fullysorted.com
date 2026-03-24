'use client';

import { useState, useCallback, useRef } from 'react';
import { Camera, X, Upload, Loader2, GripVertical, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface UploadedPhoto {
  url: string;
  name: string;
  size: number;
  isHero?: boolean;
}

interface PhotoUploaderProps {
  photos: UploadedPhoto[];
  onChange: (photos: UploadedPhoto[]) => void;
  maxPhotos?: number;
}

export default function PhotoUploader({ photos, onChange, maxPhotos = 20 }: PhotoUploaderProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [uploading, setUploading] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const uploadFile = async (file: File): Promise<UploadedPhoto | null> => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Upload failed');
      }

      const data = await res.json();
      return {
        url: data.url,
        name: file.name,
        size: file.size,
      };
    } catch (err) {
      console.error('Upload error:', err);
      return null;
    }
  };

  const handleFiles = useCallback(async (files: FileList | File[]) => {
    setError(null);
    const fileArray = Array.from(files);

    if (photos.length + fileArray.length > maxPhotos) {
      setError(`Maximum ${maxPhotos} photos allowed. You can add ${maxPhotos - photos.length} more.`);
      return;
    }

    // Show uploading state for each file
    const uploadingNames = fileArray.map(f => f.name);
    setUploading(prev => [...prev, ...uploadingNames]);

    const results = await Promise.all(fileArray.map(uploadFile));
    const successful = results.filter((r): r is UploadedPhoto => r !== null);

    // Mark first photo as hero if none exists
    const updatedPhotos = [...photos, ...successful];
    if (updatedPhotos.length > 0 && !updatedPhotos.some(p => p.isHero)) {
      updatedPhotos[0].isHero = true;
    }

    onChange(updatedPhotos);
    setUploading(prev => prev.filter(name => !uploadingNames.includes(name)));

    if (successful.length < fileArray.length) {
      setError(`${fileArray.length - successful.length} file(s) failed to upload.`);
    }
  }, [photos, onChange, maxPhotos]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  }, [handleFiles]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const removePhoto = (index: number) => {
    const updated = photos.filter((_, i) => i !== index);
    // Reassign hero if needed
    if (photos[index].isHero && updated.length > 0) {
      updated[0].isHero = true;
    }
    onChange(updated);
  };

  const setHero = (index: number) => {
    const updated = photos.map((p, i) => ({
      ...p,
      isHero: i === index,
    }));
    onChange(updated);
  };

  return (
    <div className="space-y-4">
      {/* Drop Zone */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => fileInputRef.current?.click()}
        className={`
          relative border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all
          ${isDragging
            ? 'border-amber-500 bg-amber-50'
            : 'border-stone-300 hover:border-amber-400 hover:bg-stone-50'
          }
        `}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp,image/heic"
          multiple
          onChange={(e) => e.target.files && handleFiles(e.target.files)}
          className="hidden"
        />
        <div className="flex flex-col items-center gap-3">
          {uploading.length > 0 ? (
            <>
              <Loader2 className="w-10 h-10 text-amber-500 animate-spin" />
              <p className="text-stone-600 font-medium">Uploading {uploading.length} photo(s)...</p>
            </>
          ) : (
            <>
              <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center">
                <Camera className="w-7 h-7 text-amber-600" />
              </div>
              <div>
                <p className="text-stone-700 font-medium">
                  Drop photos here or <span className="text-amber-600">browse</span>
                </p>
                <p className="text-stone-400 text-sm mt-1">
                  JPEG, PNG, WebP, or HEIC — up to 10MB each — {maxPhotos - photos.length} remaining
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}

      {/* Photo Tips */}
      {photos.length === 0 && (
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
          <p className="text-stone-700 text-sm font-medium mb-2">Photo tips from Chris:</p>
          <ul className="text-stone-600 text-sm space-y-1">
            <li>&bull; Shoot in natural light — early morning or golden hour is best</li>
            <li>&bull; Get all four corners, the engine bay, interior, trunk, and undercarriage</li>
            <li>&bull; Include close-ups of any flaws — honesty sells more cars than polish</li>
            <li>&bull; First photo is your hero shot — make it count</li>
          </ul>
        </div>
      )}

      {/* Photo Grid */}
      {photos.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          <AnimatePresence>
            {photos.map((photo, index) => (
              <motion.div
                key={photo.url}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="relative group aspect-[4/3] rounded-xl overflow-hidden bg-stone-100"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.url}
                  alt={photo.name}
                  className="w-full h-full object-cover"
                />

                {/* Hero Badge */}
                {photo.isHero && (
                  <div className="absolute top-2 left-2 flex items-center gap-1 bg-amber-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                    <Star className="w-3 h-3 fill-white" /> Hero
                  </div>
                )}

                {/* Overlay Actions */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                  {!photo.isHero && (
                    <button
                      type="button"
                      onClick={() => setHero(index)}
                      className="p-2 bg-white/90 rounded-lg text-amber-600 hover:bg-white transition-colors"
                      title="Set as hero photo"
                    >
                      <Star className="w-4 h-4" />
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => removePhoto(index)}
                    className="p-2 bg-white/90 rounded-lg text-red-500 hover:bg-white transition-colors"
                    title="Remove photo"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Drag Handle */}
                <div className="absolute top-2 right-2 p-1 bg-black/30 rounded text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <GripVertical className="w-3 h-3" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Add More Button */}
          {photos.length < maxPhotos && (
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="aspect-[4/3] rounded-xl border-2 border-dashed border-stone-300 hover:border-amber-400 flex flex-col items-center justify-center gap-2 text-stone-400 hover:text-amber-600 transition-colors"
            >
              <Upload className="w-6 h-6" />
              <span className="text-xs font-medium">Add More</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
}
