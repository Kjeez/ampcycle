'use client';

import { useRef, useState } from 'react';
import { useScrollFrame } from '@/lib/hooks';
import { clamp01 } from '@/lib/site';

type Step = { n: string; t: string; d: string; meta?: string };

type Props = {
  steps: Step[];
  /** Section progress 0–1 from its bounding rect. */
  measure: 'research' | 'roadmap';
  titleSize: string;
  titleLineHeight: number;
  header: React.ReactNode;
};

const MEASURE = {
  research: (r: DOMRect, vh: number) => (vh * 0.6 - r.top) / (r.height * 0.7),
  roadmap: (r: DOMRect, vh: number) => (vh * 0.75 - r.top) / (vh * 0.7),
};

/** Horizontal line that fills with scroll, lighting each step's dot as it passes. */
export function ProgressSteps({ steps, measure, titleSize, titleLineHeight, header }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [p, setP] = useState(0);

  useScrollFrame(() => {
    const el = ref.current;
    if (el) setP(clamp01(MEASURE[measure](el.getBoundingClientRect(), window.innerHeight)));
  });

  return (
    <section ref={ref} className="sec">
      {header}
      <div>
        <div style={{ height: 1, background: 'var(--line-2)', position: 'relative' }}>
          <div style={{ position: 'absolute', left: 0, top: 0, height: 1, width: `${p * 100}%`, background: 'var(--acc)' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,260px),1fr))', gap: 'clamp(24px,3vw,48px)' }}>
          {steps.map((s, i) => (
            <div key={s.n} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div
                style={{
                  width: 11,
                  height: 11,
                  borderRadius: '50%',
                  background: p * steps.length > i + 0.05 ? 'var(--acc)' : '#3D403B',
                  marginTop: -6,
                  transition: 'background .4s',
                }}
              />
              <div className="mono" style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'var(--dim)', paddingTop: 16 }}>
                <span>{s.n}</span>
                {s.meta && <span>{s.meta}</span>}
              </div>
              <h3 style={{ fontSize: titleSize, letterSpacing: '-0.04em', lineHeight: titleLineHeight }}>{s.t}</h3>
              <p className="body">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
