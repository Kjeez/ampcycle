'use client';

import { Fragment, useRef } from 'react';
import { useReducedMotion, useScrollFrame } from '@/lib/hooks';

const row: React.CSSProperties = {
  whiteSpace: 'nowrap',
  fontSize: 'clamp(56px,9vw,150px)',
  letterSpacing: '-0.045em',
  lineHeight: 1.05,
  willChange: 'transform',
};
const TOP = ['Lithium', 'Cobalt', 'Nickel', 'Manganese', 'Lithium', 'Cobalt', 'Nickel'];

/** Two rows of material names sliding in opposite directions with scroll. */
export function Marquee() {
  const sec = useRef<HTMLElement>(null);
  const a = useRef<HTMLDivElement>(null);
  const b = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useScrollFrame(() => {
    if (!sec.current || !a.current || !b.current) return;
    const o = reduce ? 0 : (window.innerHeight - sec.current.getBoundingClientRect().top) * 0.45;
    a.current.style.transform = `translateX(${-o - 80}px)`;
    b.current.style.transform = `translateX(${o - 900}px)`;
  });

  return (
    <section
      ref={sec}
      aria-label="Materials we recover"
      style={{
        padding: 'clamp(60px,10vh,120px) 0',
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
      }}
    >
      <div ref={a} style={row}>
        {TOP.map((w, i) => (
          <Fragment key={i}>
            {i > 0 && <span className="acc"> — </span>}
            {w}
          </Fragment>
        ))}
      </div>
      <div ref={b} style={{ ...row, color: 'transparent', WebkitTextStroke: '1px rgba(237,238,233,.45)' }}>
        Copper — Aluminium — Graphite — Copper — Aluminium — Graphite — Copper — Aluminium
      </div>
    </section>
  );
}
