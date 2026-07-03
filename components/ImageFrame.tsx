import Image from 'next/image';
import { ImageIcon } from 'lucide-react';

interface ImageFrameProps {
  /** Drop a real photo path here (e.g. "/studio/ems.jpg") to replace the placeholder. */
  src?: string;
  alt: string;
  /** Caption shown on the empty placeholder so the team knows what belongs here. */
  label?: string;
  className?: string;
  /** Responsive `sizes` hint for next/image. */
  sizes?: string;
  priority?: boolean;
}

/**
 * Branded image slot. With `src` it renders an optimized `next/image` (cover fill);
 * without one it renders a labelled placeholder with corner brackets so every
 * photo location on the page is obvious and ready to fill.
 */
export default function ImageFrame({
  src,
  alt,
  label,
  className = '',
  sizes = '100vw',
  priority = false,
}: ImageFrameProps) {
  return (
    <div
      className={`group relative overflow-hidden border border-white/[0.06] bg-[#18181B] ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      ) : (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-3"
          aria-label={alt}
          role="img"
        >
          {/* grid texture */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
          <ImageIcon
            size={36}
            className="relative text-[#2E2E2E] transition-colors duration-300 group-hover:text-[#C8F000]/50"
            aria-hidden="true"
          />
          {label && (
            <span className="relative px-4 text-center font-body text-[11px] font-medium uppercase tracking-[0.22em] text-[#666666]">
              {label}
            </span>
          )}

          {/* corner brackets */}
          <span
            aria-hidden="true"
            className="absolute left-4 top-4 h-4 w-4 border-l border-t border-[#C8F000]/30"
          />
          <span
            aria-hidden="true"
            className="absolute right-4 top-4 h-4 w-4 border-r border-t border-[#C8F000]/30"
          />
          <span
            aria-hidden="true"
            className="absolute bottom-4 left-4 h-4 w-4 border-b border-l border-[#C8F000]/30"
          />
          <span
            aria-hidden="true"
            className="absolute bottom-4 right-4 h-4 w-4 border-b border-r border-[#C8F000]/30"
          />
        </div>
      )}

      {/* lime hairline reveal on hover */}
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-0 z-10 h-[2px] w-0 bg-[#C8F000] transition-all duration-500 ease-out group-hover:w-full"
      />
    </div>
  );
}
