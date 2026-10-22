'use client';

import { useRef, useState } from 'react';
import { useScrollFrame } from '@/lib/hooks';
import { clamp01 } from '@/lib/site';
import { ImageSlot } from '@/components/ui/ImageSlot';

const STEPS = [
  {
    n: '01',
    title: 'Battery crushing and material separation',
    desc: 'The first step involves carefully crushing spent batteries and separating different materials using advanced sorting technologies. This ensures maximum recovery of valuable materials while maintaining safety standards.',
    slot: 'tech-step-1',
    ph: 'Photo: crushing & sorting line',
  },
  {
    n: '02',
    title: 'Black mass collection',
    desc: 'The crushed materials are processed to collect black mass, a powder containing valuable metals like lithium, cobalt and nickel. This concentrated form makes further processing more efficient.',
    slot: 'tech-step-2',
    ph: 'Photo: black mass close-up',
  },
  {
    n: '03',
    title: 'Electrochemical extraction',
    desc: 'Using our electrolytic cell technology, we extract valuable metals through a low-energy electrochemical process. This method is more environmentally friendly than traditional extraction methods.',
    slot: 'tech-step-3',
    ph: 'Photo: electrolytic cell in operation',
  },
  {
    n: '04',
    title: 'High-purity metal recovery',
    desc: 'The final step produces high-purity metals ready for reuse in new batteries. Any remaining residues are safely disposed of or further processed for other applications.',
    slot: 'tech-step-4',
    ph: 'Photo: recovered metal salts',
  },
];

/** Vertical four-step timeline whose spine fills as you read down it. */
export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(0);

  useScrollFrame(() => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setP(clamp01((window.innerHeight * 0.55 - r.top) / r.height));
  });

  return (
    <div ref={ref} style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
      <div style={{ position: 'absolute', left: 11, top: 8, bottom: 8, width: 1, background: 'var(--line-2)' }} />
      <div style={{ position: 'absolute', left: 11, top: 8, width: 1, height: `${p * 100}%`, background: 'var(--acc)' }} />
      {STEPS.map((t, i) => {
        const lit = p * 4.2 > i + 0.1;
        return (
          <div
            key={t.n}
            style={{ display: 'grid', gridTemplateColumns: '24px minmax(0,1fr)', gap: 'clamp(20px,3vw,48px)', paddingBottom: 'clamp(56px,10vh,120px)' }}
          >
            <div
              style={{
                width: 23,
                height: 23,
                borderRadius: '50%',
                border: `1px solid ${lit ? 'var(--acc)' : 'var(--line-3)'}`,
                background: 'var(--bg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                zIndex: 1,
                transition: 'border-color .4s',
              }}
            >
              <div style={{ width: 9, height: 9, borderRadius: '50%', background: lit ? 'var(--acc)' : '#2F322E', transition: 'background .4s' }} />
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,340px),1fr))',
                gap: 'clamp(24px,4vw,72px)',
                alignItems: 'start',
              }}
            >
              <div data-reveal className="stack" style={{ gap: 18 }}>
                <div className="mono" style={{ fontSize: 12, letterSpacing: '.12em', color: 'var(--dim)' }}>
                  STEP {t.n}
                </div>
                <h3 style={{ fontSize: 'clamp(28px,3vw,48px)', letterSpacing: '-0.035em', lineHeight: 1.05, textWrap: 'balance' }}>{t.title}</h3>
                <p className="body" style={{ fontSize: 17, lineHeight: 1.65, maxWidth: 480 }}>
                  {t.desc}
                </p>
              </div>
              <div data-reveal data-reveal-delay="120" className="media" style={{ aspectRatio: '16 / 10' }}>
                <ImageSlot id={t.slot} placeholder={t.ph} sizes="(max-width: 900px) 100vw, 45vw" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
