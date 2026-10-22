'use client';

import { useRef } from 'react';
import { useReducedMotion, useScrollFrame } from '@/lib/hooks';

type Props = {
  /** 'page': offset = scrollY × factor. 'center': offset from the container's centre vs the viewport's. */
  mode: 'page' | 'center';
  factor: number;
  /** How far the layer extends past the container top and bottom, e.g. '14%'. */
  overscan: string;
  children: React.ReactNode;
};

/** Oversized layer inside a positioned, overflow-hidden container that drifts on scroll. */
export function Parallax({ mode, factor, overscan, children }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useScrollFrame(() => {
    const el = ref.current;
    if (!el) return;
    let v = 0;
    if (!reduce) {
      if (mode === 'page') v = window.scrollY * factor;
      else {
        const r = el.parentElement!.getBoundingClientRect();
        v = (r.top + r.height / 2 - window.innerHeight / 2) * factor;
      }
    }
    el.style.transform = `translateY(${v}px)`;
  });

  return (
    <div
      ref={ref}
      style={{ position: 'absolute', left: 0, right: 0, top: `-${overscan}`, bottom: `-${overscan}`, willChange: 'transform' }}
    >
      {children}
    </div>
  );
}
