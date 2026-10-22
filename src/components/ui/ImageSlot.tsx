import Image from 'next/image';
import { IMAGES } from '@/lib/images';
import { SlotVideo } from './SlotVideo';

type Props = {
  id: string;
  placeholder: string;
  /** Overrides the IMAGES lookup. */
  src?: string;
  sizes?: string;
  priority?: boolean;
};

const VIDEO = /\.(mp4|webm)$/i;

/**
 * Fills its (positioned) container with a photo or video, or a labelled placeholder
 * until one is set in lib/images.ts. Videos use a same-named .jpg as their poster.
 */
export function ImageSlot({ id, placeholder, src, sizes = '100vw', priority }: Props) {
  const url = src ?? IMAGES[id];
  const alt = placeholder.replace(/^[^:]*:\s*/, '');
  return (
    <div className="slot" data-slot={id}>
      {url && VIDEO.test(url) ? (
        <SlotVideo src={url} poster={url.replace(VIDEO, '.jpg')} label={alt} />
      ) : url ? (
        <Image src={url} alt={alt} fill sizes={sizes} priority={priority} />
      ) : (
        <div className="slot-empty">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="m21 15-5-5L5 21" />
          </svg>
          <span>{placeholder}</span>
        </div>
      )}
    </div>
  );
}
