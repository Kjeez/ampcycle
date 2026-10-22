'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { PAGE_LABELS } from '@/lib/site';

type Phase = 'idle' | 'cover' | 'reveal';

/**
 * Wipes an accent panel over the page on internal navigation, pushes the new
 * route once covered, then lifts the panel when the new page has rendered.
 */
export function PageTransition() {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>('idle');
  const [label, setLabel] = useState('');
  const pending = useRef<string | null>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.('a');
      if (!a || (a.target && a.target !== '_self') || a.hasAttribute('download')) return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin) return;

      if (url.pathname === location.pathname) {
        // Same page: hash links scroll natively; a bare link goes back to the top.
        if (!url.hash) {
          e.preventDefault();
          e.stopPropagation();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        return;
      }
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      e.preventDefault();
      e.stopPropagation(); // keep next/link from navigating before the panel covers
      if (pending.current) return;
      const href = url.pathname + url.search + url.hash;
      pending.current = href;
      router.prefetch(href);
      setLabel(PAGE_LABELS[url.pathname] ?? 'AmpCycle');
      setPhase('cover');
      setTimeout(() => router.push(href), 760);
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, [router]);

  useEffect(() => {
    if (!pending.current) return;
    pending.current = null;
    setPhase('reveal');
  }, [pathname]);

  if (phase === 'idle') return null;
  return (
    <div
      className={`pt pt--${phase}`}
      aria-hidden="true"
      onAnimationEnd={(e) => {
        if (e.animationName === 'pt-out') setPhase('idle');
      }}
    >
      <div className="pt-mask">
        <div className="pt-label">{label}</div>
      </div>
    </div>
  );
}
