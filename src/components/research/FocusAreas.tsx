'use client';

import { useRef, useState } from 'react';
import { useScrollFrame } from '@/lib/hooks';
import { ImageSlot } from '@/components/ui/ImageSlot';

const FOCUS = [
  {
    t: 'Electrochemical extraction',
    d: 'Refining cell design, electrode materials and operating conditions so each metal is recovered selectively, at the lowest practical energy.',
    tags: ['Electrolytic cells', 'Selectivity'],
    ph: 'Photo: electrolytic cell prototype',
  },
  {
    t: 'Solvent chemistry',
    d: 'Developing pH-optimised solvent systems that take the place of strong acids, with the aim of reusing them across batches.',
    tags: ['pH control', 'Reagent reuse'],
    ph: 'Photo: solvent preparation',
  },
  {
    t: 'Black mass characterisation',
    d: 'Mapping how NMC, LFP, NCA and LCO black mass behaves so the process adapts to mixed, real-world feedstock.',
    tags: ['Mixed chemistries', 'Feedstock analysis'],
    ph: 'Photo: black mass samples',
  },
  {
    t: 'Process monitoring',
    d: 'IoT sensing across cells and tanks, giving the data needed to hold recovery and purity steady as volumes grow.',
    tags: ['IoT', 'Process control'],
    ph: 'Photo: sensors / control panel',
  },
  {
    t: 'Traceability',
    d: 'Tools for a verifiable record that links each collected battery to the metal it becomes.',
    tags: ['Blockchain', 'Chain of custody'],
    ph: 'Photo: tagged battery intake',
  },
];

/** Scrolling list of focus areas beside a sticky photo that swaps to match the item nearest the viewport centre. */
export function FocusAreas() {
  const list = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useScrollFrame(() => {
    const el = list.current;
    if (!el) return;
    const mid = window.innerHeight * 0.5;
    let best = 0;
    let bestD = Infinity;
    Array.from(el.children).forEach((c, i) => {
      const r = c.getBoundingClientRect();
      const d = Math.abs(r.top + r.height / 2 - mid);
      if (d < bestD) {
        bestD = d;
        best = i;
      }
    });
    setActive(best);
  });

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,420px),1fr))',
        gap: 'clamp(32px,5vw,96px)',
        alignItems: 'start',
      }}
    >
      <div ref={list} style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid var(--line-2)' }}>
        {FOCUS.map((f, i) => {
          const on = i === active;
          return (
            <div
              key={f.t}
              style={{
                padding: 'clamp(32px,7vh,64px) 0',
                borderBottom: '1px solid var(--line-2)',
                display: 'grid',
                gridTemplateColumns: '56px minmax(0,1fr)',
                gap: 16,
                opacity: on ? 1 : 0.38,
                transition: 'opacity .5s',
              }}
            >
              <div className="mono" style={{ fontSize: 12, color: on ? 'var(--acc)' : 'var(--dim)', paddingTop: 10, transition: 'color .5s' }}>
                0{i + 1}
              </div>
              <div className="stack" style={{ gap: 14 }}>
                <h3 style={{ fontSize: 'clamp(28px,2.8vw,44px)', letterSpacing: '-0.035em', lineHeight: 1.05 }}>{f.t}</h3>
                <p className="body" style={{ lineHeight: 1.65, maxWidth: 480 }}>
                  {f.d}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, paddingTop: 4 }}>
                  {f.tags.map((g) => (
                    <span key={g} className="tag">
                      {g}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="media" style={{ position: 'sticky', top: 110, aspectRatio: '4 / 5', maxHeight: 'calc(100vh - 150px)' }}>
        {FOCUS.map((f, i) => {
          const on = i === active;
          return (
            <div
              key={f.t}
              aria-hidden={!on}
              style={{
                position: 'absolute',
                inset: 0,
                opacity: on ? 1 : 0,
                transform: `scale(${on ? 1 : 1.06})`,
                transition: 'opacity .7s ease, transform 1.2s var(--ease-out)',
                pointerEvents: on ? 'auto' : 'none',
              }}
            >
              <ImageSlot id={`research-focus-${i + 1}`} placeholder={f.ph} sizes="(max-width: 900px) 100vw, 45vw" />
            </div>
          );
        })}
        <div className="media-tag" style={{ left: 20, bottom: 18 }}>
          FOCUS 0{active + 1} · {FOCUS[active].t.toUpperCase()}
        </div>
      </div>
    </div>
  );
}
