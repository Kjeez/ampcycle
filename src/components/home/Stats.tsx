'use client';

import { useEffect, useRef, useState } from 'react';

const cell: React.CSSProperties = { display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 10 };
const num: React.CSSProperties = { fontSize: 'clamp(36px,5vw,80px)', letterSpacing: '-0.04em', lineHeight: 1 };
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

  return (
    <div ref={ref} className="stats">
      <div style={cell}>
        <div style={num}>
          {Math.round(98 * k)}
          <span className="acc">%</span>
        </div>
        <div className={cap}>Extraction efficiency</div>
      </div>
      <div style={cell}>
        <div style={num}>
          {(99.9 * k).toFixed(1)}
          <span className="acc">%</span>
        </div>
        <div className={cap}>Material purity</div>
      </div>
      <div style={cell}>
        <div style={num}>
          {Math.round(30 * k)}
          <span className="acc">%</span>
        </div>
        <div className={cap}>Lower energy consumption</div>
      </div>
      <div style={cell}>
        <div style={{ ...num, fontSize: 'clamp(22px,3.2vw,52px)', minHeight: 'clamp(36px,5vw,80px)', display: 'flex', alignItems: 'flex-end' }}>
          Proprietary
        </div>
        <div className={cap}>Extraction technology</div>
      </div>
    </div>
  );
}
