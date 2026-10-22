'use client';

import { useRef, useState } from 'react';
import { useScrollFrame } from '@/lib/hooks';
import { clamp01 } from '@/lib/site';

type Props = {
  label: string;
  text: string;
  padding: string;
  fontSize: string;
  lineHeight: number;
};

/** Statement whose words light up one by one as the section scrolls through. */
export function WordReveal({ label, text, padding, fontSize, lineHeight }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [p, setP] = useState(0);
  const words = text.split(' ');

  useScrollFrame(() => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight;
    setP(clamp01((vh * 0.85 - r.top) / (r.height * 0.75 + vh * 0.1)));
  });

  return (
    <section ref={ref} style={{ padding: `${padding} var(--gutter)`, display: 'flex', flexDirection: 'column', gap: 40 }}>
      <div className="eyebrow">{label}</div>
      <p style={{ fontSize, lineHeight, letterSpacing: '-0.035em', maxWidth: 1400 }}>
        {words.map((t, i) => {
          const k = clamp01(p * words.length * 1.05 - i);
          return (
            <span
              key={i}
              style={{ display: 'inline-block', marginRight: '.24em', color: `rgba(237,238,233,${0.16 + 0.84 * k})`, transition: 'color .25s' }}
            >
              {t}
            </span>
          );
        })}
      </p>
    </section>
  );
}
