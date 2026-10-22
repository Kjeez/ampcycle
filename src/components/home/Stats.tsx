'use client';

import { useEffect, useRef, useState } from 'react';

const cell: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: 10 };
const num: React.CSSProperties = { fontSize: 'clamp(48px,5vw,80px)', letterSpacing: '-0.04em', lineHeight: 1 };
const cap = 'mono-cap';

/** Headline figures that count up the first time they scroll into view. */
export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [k, setK] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setK(1);
      return;
    }
    let timer = 0;
    const run = () => {
      const t0 = performance.now();
      const tick = () => {
        const t = Math.min(1, (performance.now() - t0) / 1800);
        setK(1 - Math.pow(1 - t, 3));
        if (t < 1) timer = window.setTimeout(tick, 16);
      };
      tick();
    };
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          io.disconnect();
          run();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const border = '1px solid var(--line)';
  return (
    <div
      ref={ref}
      style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,220px),1fr))', borderTop: border }}
    >
      <div style={{ ...cell, padding: '32px 24px 40px 0' }}>
        <div style={num}>
          {Math.round(98 * k)}
          <span className="acc">%</span>
        </div>
        <div className={cap}>Metal recovery efficiency</div>
      </div>
      <div style={{ ...cell, padding: '32px 24px 40px', borderLeft: border }}>
        <div style={num}>
          {Math.round(99 * k)}
          <span className="acc">%</span>
        </div>
        <div className={cap}>Purity · Li, Co, Ni</div>
      </div>
      <div style={{ ...cell, padding: '32px 24px 40px', borderLeft: border }}>
        <div style={num}>{Math.max(1, Math.round(4 * k))}</div>
        <div className={cap}>Stage extraction process</div>
      </div>
      <div style={{ ...cell, padding: '32px 0 40px 24px', borderLeft: border }}>
        <div style={num}>2019</div>
        <div className={cap}>Year founded</div>
      </div>
    </div>
  );
}
