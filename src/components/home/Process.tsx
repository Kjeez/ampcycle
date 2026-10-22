'use client';

import { useRef, useState } from 'react';
import { useScrollFrame } from '@/lib/hooks';
import { clamp01 } from '@/lib/site';

type Kind = 'battery' | 'mass' | 'cell' | 'metal';

const STEPS: { n: string; kind: Kind; label: string; title: string; desc: string; out: string }[] = [
  {
    n: '01',
    kind: 'battery',
    label: 'Crush & separate',
    title: 'Battery crushing and material separation',
    desc: 'Spent batteries are safely discharged, then crushed and sorted with advanced separation technology. Casings, copper and aluminium are pulled out early to maximise recovery while maintaining safety standards.',
    out: 'Output · casing, Cu & Al foils',
  },
  {
    n: '02',
    kind: 'mass',
    label: 'Black mass',
    title: 'Black mass collection',
    desc: 'The crushed material is processed into black mass, a fine powder concentrating lithium, cobalt and nickel. This concentrated form makes further processing far more efficient.',
    out: 'Output · Li, Co, Ni concentrate',
  },
  {
    n: '03',
    kind: 'cell',
    label: 'Electro-extraction',
    title: 'Electrochemical extraction',
    desc: 'Our electrolytic cell extracts the valuable metals through a low-energy electrochemical process with pH-optimised solvents, a cleaner route than traditional extraction methods.',
    out: 'Process · low-energy electrolytic cell',
  },
  {
    n: '04',
    kind: 'metal',
    label: 'Metal recovery',
    title: 'High-purity metal recovery',
    desc: 'The final stage produces high-purity metals ready for reuse in new batteries. Any remaining residues are safely disposed of or further processed for other applications.',
    out: 'Output · up to 99% pure Li, Co, Ni',
  },
];

const mono = (size: number, extra?: React.CSSProperties): React.CSSProperties => ({
  fontFamily: 'var(--mono)',
  fontSize: size,
  ...extra,
});

function Icon({ kind, ic, liq }: { kind: Kind; ic: string; liq: string }) {
  const t = 'background .5s, border-color .5s';
  if (kind === 'battery')
    return (
      <div style={{ display: 'flex', alignItems: 'center', width: '62%', height: '46%' }}>
        <div style={{ flex: 1, height: '100%', border: `1.5px solid ${ic}`, borderRadius: 2, display: 'flex', gap: 3, padding: 3, boxSizing: 'border-box', transition: t }}>
          {[0, 1, 2].map((i) => (
            <div key={i} style={{ flex: 1, background: ic, transition: t }} />
          ))}
        </div>
        <div style={{ width: '6%', height: '36%', background: ic, transition: t }} />
      </div>
    );
  if (kind === 'mass')
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-end', gap: 3, width: '60%' }}>
        {[22, 16, 26, 18, 28, 20, 24].map((w, i) => (
          <div key={i} style={{ width: `${w}%`, aspectRatio: 1, borderRadius: '50%', background: ic, transition: t }} />
        ))}
      </div>
    );
  if (kind === 'cell')
    return (
      <div style={{ position: 'relative', width: '62%', height: '56%', borderStyle: 'none solid solid', borderWidth: 1.5, borderColor: ic, borderRadius: '0 0 3px 3px', transition: t }}>
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: '58%', background: liq, transition: t }} />
        <div style={{ position: 'absolute', left: '26%', top: '-18%', width: 5, height: '90%', background: ic, transition: t }} />
        <div style={{ position: 'absolute', right: '26%', top: '-18%', width: 5, height: '90%', background: ic, transition: t }} />
      </div>
    );
  return (
    <div style={{ display: 'flex', gap: 4, width: '72%', fontFamily: 'var(--mono)', fontSize: 'clamp(9px,.8vw,12px)' }}>
      {['Li', 'Co', 'Ni'].map((s) => (
        <div key={s} style={{ flex: 1, aspectRatio: 1, border: `1.5px solid ${ic}`, color: ic, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: t }}>
          {s}
        </div>
      ))}
    </div>
  );
}

/** Pinned 4-step walkthrough of the extraction line, driven by scroll. */
export function Process() {
  const ref = useRef<HTMLElement>(null);
  const [p, setP] = useState(0);
  const [roomy, setRoomy] = useState(true);

  useScrollFrame(() => {
    const el = ref.current;
    if (!el) return;
    const vh = window.innerHeight;
    const r = el.getBoundingClientRect();
    setP(clamp01(-r.top / Math.max(1, r.height - vh)));
    setRoomy(vh >= 760 && window.innerWidth >= 760);
  });

  const step = Math.min(3, Math.floor(p * 3.999));
  const steps = STEPS.map((s, i) => {
    const active = i === step;
    const done = i < step;
    return {
      ...s,
      active,
      done,
      bc: active ? 'var(--acc)' : done ? 'color-mix(in oklab, var(--acc) 45%, #2A2D29)' : '#2F322E',
      bg: active ? 'color-mix(in oklab, var(--acc) 9%, #111311)' : '#111311',
      glow: active ? '0 0 48px color-mix(in oklab, var(--acc) 22%, transparent)' : 'none',
      ic: active ? 'var(--acc)' : done ? '#7D8078' : '#3D403B',
      liq: active ? 'color-mix(in oklab, var(--acc) 30%, transparent)' : 'rgba(237,238,233,.06)',
      lab: active ? 'var(--fg)' : 'var(--faint)',
      conn: clamp01((p * 4 - i - 0.6) / 0.4) * 100,
      seg: clamp01(p * 4 - i) * 100,
    };
  });

  return (
    <section id="process" ref={ref} style={{ position: 'relative', height: '440vh', borderTop: '1px solid var(--line)' }}>
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          boxSizing: 'border-box',
          padding: '92px var(--gutter) 36px',
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(20px,4vh,44px)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div className="eyebrow">The process · Electro-extraction</div>
            <h2 style={{ fontSize: 'clamp(26px,min(4vw,6.4vh),64px)', letterSpacing: '-0.04em', lineHeight: 1 }}>
              From spent cell to high-purity metal
            </h2>
          </div>
          <div style={mono(14, { color: 'var(--dim)' })}>
            <span style={{ color: 'var(--fg)' }}>{STEPS[step].n}</span> / 04
          </div>
        </div>

        <div
          style={{
            flex: 1,
            minHeight: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,320px),1fr))',
            gap: 'clamp(20px,4vw,72px)',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'grid', alignItems: 'center' }} aria-live="polite">
            {steps.map((s) => (
              <div
                key={s.n}
                aria-hidden={!s.active}
                style={{
                  gridArea: '1 / 1',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: 'clamp(12px,2.4vh,22px)',
                  opacity: s.active ? 1 : 0,
                  transform: `translateY(${s.active ? 0 : s.done ? -28 : 28}px)`,
                  transition: 'opacity .6s ease, transform .7s var(--ease-out)',
                  pointerEvents: 'none',
                }}
              >
                <div style={mono(12, { letterSpacing: '.12em', color: 'var(--dim)' })}>STEP {s.n}</div>
                <h3 style={{ fontSize: 'clamp(28px,3vw,46px)', letterSpacing: '-0.035em', lineHeight: 1.05, maxWidth: 520, textWrap: 'balance' }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--muted)', maxWidth: 480, textWrap: 'pretty' }}>{s.desc}</p>
                <div className="eyebrow--dot" style={mono(12, { letterSpacing: '.06em', color: 'var(--acc)' })}>
                  {s.out}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              border: '1px solid var(--line)',
              borderRadius: 4,
              backgroundColor: 'var(--panel-2)',
              backgroundImage:
                'linear-gradient(rgba(237,238,233,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(237,238,233,.04) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
              padding: 'clamp(20px,3vw,36px)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(24px,5vh,56px)',
            }}
          >
            <div style={mono(11, { display: 'flex', justifyContent: 'space-between', letterSpacing: '.1em', color: 'var(--faint)' })}>
              <span>FIG. 01 — EXTRACTION LINE</span>
              <span style={{ color: 'var(--fg)' }}>{Math.round(p * 100)}%</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0,1fr))' }}>
              {steps.map((s, i) => (
                <div key={s.n} style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
                  <div style={{ position: 'relative', width: '100%', aspectRatio: '1 / .78' }}>
                    {i < 3 && (
                      <div style={{ position: 'absolute', top: '50%', left: '86%', width: '28%', height: 2, background: '#2A2D29' }}>
                        <div style={{ height: '100%', width: `${s.conn}%`, background: 'var(--acc)' }} />
                      </div>
                    )}
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: '14%',
                        right: '14%',
                        border: `1.5px solid ${s.bc}`,
                        background: s.bg,
                        borderRadius: 3,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'border-color .5s, background .5s, box-shadow .5s',
                        boxShadow: s.glow,
                      }}
                    >
                      <Icon kind={s.kind} ic={s.ic} liq={s.liq} />
                    </div>
                  </div>
                  <div style={mono(11, { letterSpacing: '.04em', textAlign: 'center', color: s.lab, transition: 'color .5s', padding: '0 4px' })}>
                    {s.n} · {s.label}
                  </div>
                </div>
              ))}
            </div>
            {roomy && (
              <div
                style={mono(11, {
                  borderTop: '1px dashed var(--line-2)',
                  paddingTop: 16,
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: 16,
                  letterSpacing: '.06em',
                  color: 'var(--faint)',
                  flexWrap: 'wrap',
                })}
              >
                <span>INPUT · END-OF-LIFE LI-ION</span>
                <span>OUTPUT · BATTERY-GRADE METAL</span>
              </div>
            )}
          </div>
        </div>

        {roomy && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0,1fr))', gap: 12 }}>
            {steps.map((s) => (
              <div key={s.n} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div style={{ height: 2, background: '#2A2D29' }}>
                  <div style={{ height: '100%', width: `${s.seg}%`, background: 'var(--acc)' }} />
                </div>
                <div style={mono(11, { letterSpacing: '.06em', color: s.lab, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' })}>
                  {s.n} {s.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
