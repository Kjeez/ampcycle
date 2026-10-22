'use client';

import { useEffect, useLayoutEffect, useRef, useSyncExternalStore } from 'react';

/**
 * Calls `fn` (rAF-throttled) on scroll and resize, once on mount, and a few
 * more times over the first seconds while fonts and images settle the layout.
 */
export function useScrollFrame(fn: () => void) {
  const fnRef = useRef(fn);
  useLayoutEffect(() => {
    fnRef.current = fn;
  });

  useEffect(() => {
    let raf = 0;
    const run = () => {
      raf = 0;
      fnRef.current();
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(run);
    };
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    run();
    let n = 0;
    const poll = setInterval(() => {
      schedule();
      if (++n > 14) clearInterval(poll);
    }, 400);
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      clearInterval(poll);
      cancelAnimationFrame(raf);
    };
  }, []);
}

const REDUCE = '(prefers-reduced-motion: reduce)';
const subscribeReduce = (cb: () => void) => {
  const m = matchMedia(REDUCE);
  m.addEventListener('change', cb);
  return () => m.removeEventListener('change', cb);
};

export function useReducedMotion() {
  return useSyncExternalStore(
    subscribeReduce,
    () => matchMedia(REDUCE).matches,
    () => false,
  );
}
