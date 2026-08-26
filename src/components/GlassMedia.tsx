import { useRef, type ReactNode, type RefObject } from 'react';
import { motion } from 'framer-motion';
import { useParallax } from '../lib/motion';

/**
 * The one photo treatment used by About, Services and the Gallery.
 *
 * Every image on the page sits in this frame so the whole site shares a single
 * recipe: an overflow-hidden box, an oversized picture that zooms on hover, a
 * navy scrim, and room for the floating `.glass-caption` panels that give the
 * sections their glassmorphism.
 *
 * The zoom keys off `group-hover`, so **the caller must put `group` on the
 * element it wants to be the hover target** (the card, tile or button) — that
 * way hovering the text of a card also moves its image.
 */
interface GlassMediaProps {
  src: string;
  alt: string;
  /** Scroll-linked drift in px. 0 keeps the image still — and skips the hook. */
  parallax?: number;
  /** Strength of the navy gradient that keeps white labels readable. */
  scrim?: 'none' | 'soft' | 'strong';
  /**
   * Classes for the frame itself — radius, aspect ratio, height. The frame is
   * `relative` and sized by its own box, so give it a height (`h-full`,
   * `aspect-[16/10]`); passing `absolute inset-0` collides with that `relative`
   * and Tailwind's position ordering wins, collapsing the frame to zero height.
   */
  className?: string;
  /** Skip lazy-loading for a photo that is above the fold. */
  priority?: boolean;
  /** Glass captions and badges laid over the photo. */
  children?: ReactNode;
}

const scrims = {
  none: '',
  soft: 'bg-gradient-to-t from-[rgba(10,26,50,0.5)] via-transparent to-transparent',
  strong:
    'bg-gradient-to-t from-[rgba(10,26,50,0.72)] via-[rgba(10,26,50,0.14)] to-transparent',
} as const;

interface ParallaxLayerProps {
  frameRef: RefObject<HTMLDivElement | null>;
  distance: number;
  children: ReactNode;
}

/* Split out so a still image never subscribes to the scroll: a page holds ~19 of
   these frames and only two of them drift. The measured element is the frame,
   not this layer — a layer that measures its own moving self drifts unevenly. */
const ParallaxLayer = ({ frameRef, distance, children }: ParallaxLayerProps) => {
  const y = useParallax(frameRef, distance);
  return (
    <motion.div style={{ y }} className="absolute inset-x-0 -top-[9%] h-[118%]">
      {children}
    </motion.div>
  );
};

const GlassMedia = ({
  src,
  alt,
  parallax = 0,
  scrim = 'soft',
  className = '',
  priority = false,
  children,
}: GlassMediaProps) => {
  const frameRef = useRef<HTMLDivElement>(null);

  const image = (
    <img
      /* Some filenames carry spaces (`Imagerie medicale.jpg`); the sources are
         stored raw, so encoding here is safe and never double-encodes. */
      src={encodeURI(src)}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      className="h-full w-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
    />
  );

  return (
    <div
      ref={frameRef}
      className={`relative isolate overflow-hidden bg-[rgba(15,47,92,0.06)] ${className}`}
    >
      {/* Two layers on purpose: the wrapper carries the parallax transform that
          framer-motion writes inline, the image keeps the CSS hover zoom. On one
          element the inline transform would silently kill `group-hover:scale`. */}
      {parallax > 0 ? (
        <ParallaxLayer frameRef={frameRef} distance={parallax}>
          {image}
        </ParallaxLayer>
      ) : (
        <div className="absolute inset-0">{image}</div>
      )}

      {scrim !== 'none' && (
        <div aria-hidden="true" className={`absolute inset-0 ${scrims[scrim]}`} />
      )}

      {children}
    </div>
  );
};

export default GlassMedia;
