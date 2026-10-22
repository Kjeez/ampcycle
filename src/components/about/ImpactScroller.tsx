'use client';

import { useRef, useState } from 'react';
import { useScrollFrame } from '@/lib/hooks';
import { clamp01 } from '@/lib/site';
import { ImageSlot } from '@/components/ui/ImageSlot';

const IMPACT = [
  { t: 'Prevents landfill contamination', d: 'Battery materials are recycled instead of leaching into soil and water.', ph: 'Photo: landscape / clean land' },
  { t: 'Empowers local waste collectors', d: 'Generates skilled employment in clean-tech across the collection chain.', ph: 'Photo: collection team at work' },
  { t: 'Reduces reliance on imports', d: 'Recovered metals foster a circular economy for India’s battery industry.', ph: 'Photo: recovered material' },
  { t: 'Net zero waste', d: 'We strive for zero waste by implementing innovative recycling and waste management solutions.', ph: 'Photo: facility / process detail' },
];

/** Pinned section whose card track slides horizontally as you scroll down. */
export function ImpactScroller() {
  const sec = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(0);
  const [dist, setDist] = useState(0);

  useScrollFrame(() => {
    const s = sec.current;
    const t = track.current;
    if (!s || !t) return;
    const vh = window.innerHeight;
    setDist(Math.max(0, t.scrollWidth - window.innerWidth));
    const r = s.getBoundingClientRect();
    setP(clamp01(-r.top / Math.max(1, r.height - vh)));
  });

  const idx = Math.min(3, Math.floor(p * 3.999));

  return (
    <section ref={sec} className="paper" style={{ position: 'relative', height: `calc(100vh + ${Math.round(dist)}px)` }}>
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 'clamp(24px,4vh,48px)',
          boxSizing: 'border-box',
          padding: '88px 0 40px',
        }}
      >
        <div className="gutter" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap' }}>
          <div className="stack" style={{ gap: 14 }}>
            <div className="eyebrow eyebrow--ink">Environmental &amp; social impact</div>
            <h2 style={{ fontSize: 'clamp(30px,min(4.4vw,7vh),72px)', letterSpacing: '-0.045em', lineHeight: 1 }}>What a closed loop changes</h2>
          </div>
          <div className="mono" style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 12, color: 'var(--ink-dim)' }}>
            <div style={{ width: 120, height: 2, background: 'rgba(18,20,18,.15)' }}>
              <div style={{ height: '100%', width: `${p * 100}%`, background: 'var(--ink)' }} />
            </div>
            <span>0{idx + 1} / 04</span>
          </div>
        </div>
        <div
          ref={track}
          className="gutter"
          style={{
            display: 'flex',
            gap: 'clamp(16px,2vw,32px)',
            transform: `translateX(${-Math.round(dist * p)}px)`,
            willChange: 'transform',
            width: 'max-content',
          }}
        >
          {IMPACT.map((c, i) => (
            <div
              key={c.t}
              style={{
                width: 'clamp(280px,38vw,560px)',
                height: 'min(62vh,600px)',
                display: 'flex',
                flexDirection: 'column',
                background: '#F6F6F1',
                border: '1px solid rgba(18,20,18,.12)',
                borderRadius: 4,
                overflow: 'hidden',
                flex: 'none',
              }}
            >
              <div style={{ position: 'relative', flex: 1, minHeight: 0, background: '#DCDCD4' }}>
                <ImageSlot id={`impact-${i + 1}`} placeholder={c.ph} sizes="(max-width: 700px) 280px, 38vw" />
              </div>
              <div style={{ padding: 'clamp(20px,2.4vw,32px)', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div className="mono" style={{ fontSize: 12, color: 'var(--ink-dim)' }}>
                  0{i + 1}
                </div>
                <h3 style={{ fontSize: 'clamp(22px,2vw,30px)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>{c.t}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--ink-muted)', textWrap: 'pretty' }}>{c.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
