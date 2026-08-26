import { useState } from 'react';
import { LoaderCircle } from 'lucide-react';

interface MapEmbedProps {
  src: string;
  title: string;
  /** Announced while the map is still loading. */
  loadingLabel: string;
}

/**
 * Google Maps iframe with a placeholder held over it until it paints.
 *
 * The frame is lazy-loaded, so on a long page this sits idle until the reader
 * nears the footer — without the placeholder the panel reads as a broken empty
 * box in the meantime. The overlay fades rather than unmounting, so the map is
 * never revealed by a hard cut.
 */
const MapEmbed = ({ src, title, loadingLabel }: MapEmbedProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <iframe
        src={src}
        onLoad={() => setIsLoaded(true)}
        className={`absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500 ${
          isLoaded ? 'opacity-90 hover:opacity-100' : 'opacity-0'
        }`}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
      />

      <div
        role="status"
        aria-live="polite"
        className={`absolute inset-0 flex items-center justify-center gap-2 bg-[rgba(224,74,77,0.04)] transition-opacity duration-500 ${
          isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <LoaderCircle
          aria-hidden="true"
          className="h-5 w-5 animate-spin text-brand-red-ink"
          strokeWidth={2.2}
        />
        <span className="text-xs text-ink-muted">{loadingLabel}</span>
      </div>
    </>
  );
};

export default MapEmbed;
