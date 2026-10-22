'use client';

import { useRef, useState } from 'react';
import { useScrollFrame } from '@/lib/hooks';
import { clamp01 } from '@/lib/site';

type Look = { bc: string; bg: string; ic: string; liq: string; lab: string; on: boolean };

const look = (i: number, step: number): Look => {
  const on = i === step;
  const done = i < step;
  return {
    on,
    bc: on ? 'var(--acc)' : done ? 'color-mix(in oklab, var(--acc) 40%, #2F322E)' : '#2F322E',
    bg: on ? 'color-mix(in oklab, var(--acc) 10%, #121412)' : '#121412',
    ic: on ? 'var(--acc)' : done ? '#6E716A' : '#34372F',
    liq: on ? 'color-mix(in oklab, var(--acc) 32%, transparent)' : 'rgba(237,238,233,.05)',
    lab: on ? 'var(--acc)' : 'var(--faint)',
  };
};

const T = 'border-color .5s, background .5s, color .5s';

function Part({
  box,
  look: l,
  note,
  noteWidth = 'clamp(100px,17vw,230px)',
  label,
  shape,
  children,
}: {
  box: React.CSSProperties;
  look: Look;
  note: string;
  noteWidth?: string;
  label: string;
  shape: React.CSSProperties;
  children: React.ReactNode;
}) {
  return (
    <div style={{ position: 'absolute', ...box }}>
      <div
        style={{
          position: 'absolute',
          bottom: 'calc(100% + 10px)',
          left: '50%',
          transform: 'translateX(-50%)',
          width: noteWidth,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 10,
          opacity: l.on ? 1 : 0,
          transition: 'opacity .5s',
          pointerEvents: 'none',
        }}
      >
        <div style={{ fontSize: 'clamp(12px,1.15vw,16px)', lineHeight: 1.35, textWrap: 'balance' }}>{note}</div>
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--acc)' }} />
        <div style={{ height: 'clamp(20px,5vh,48px)', borderLeft: '1.5px dotted var(--fg)' }} />
      </div>
      <div style={{ position: 'absolute', inset: 0, border: `1.5px solid ${l.bc}`, background: l.bg, transition: T, ...shape }}>{children}</div>
      <div
        className="mono"
        style={{
          position: 'absolute',
          top: 'calc(100% + 12px)',
          left: 0,
          right: 0,
          fontSize: 'clamp(9px,.85vw,12px)',
          letterSpacing: '.04em',
          color: l.lab,
          transition: 'color .5s',
        }}
      >
        {label}
      </div>
    </div>
  );
}

function Pipe({ left, top, width, on }: { left: string; top: string; width: string; on: boolean }) {
  return (
    <div style={{ position: 'absolute', left, top, width, height: 2, background: '#2A2D29' }}>
      <div style={{ height: '100%', width: on ? '100%' : '0%', background: 'var(--acc)', transition: 'width .8s' }} />
    </div>
  );
}

/** Pinned schematic of the extraction line; scroll steps through feed → solvent → cell → metal. */
export function CellDiagram() {
  const ref = useRef<HTMLElement>(null);
  const [p, setP] = useState(0);

  useScrollFrame(() => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setP(clamp01(-r.top / Math.max(1, r.height - window.innerHeight)));
  });

  const step = Math.min(3, Math.floor(p * 3.999));
  const [a, b, c, d] = [0, 1, 2, 3].map((i) => look(i, step));
  const plate2 = step === 2 ? 'color-mix(in oklab, var(--acc) 55%, #121412)' : '#2A2D29';

  return (
    <section
      id="cell"
      ref={ref}
      style={{ position: 'relative', height: '440vh', marginTop: 'clamp(80px,12vh,140px)', borderTop: '1px solid var(--line)' }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          boxSizing: 'border-box',
          padding: '96px var(--gutter) 32px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'clamp(12px,2.6vh,28px)',
          textAlign: 'center',
        }}
      >
        <div className="eyebrow">Inside the extraction line</div>
        <h2 style={{ fontSize: 'clamp(30px,min(4.6vw,7vh),76px)', letterSpacing: '-0.045em', lineHeight: 1 }}>
          Low-energy electrochemical extraction
        </h2>
        <div style={{ flex: 1, minHeight: 0, width: '100%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
          <div
            style={{
              position: 'relative',
              width: 'min(100%, 1180px, calc((100vh - 440px) * 2.3))',
              aspectRatio: '1000 / 430',
              marginTop: 'clamp(110px,18vh,150px)',
            }}
          >
            <Pipe left="17%" top="44%" width="21%" on={step >= 1} />
            <Pipe left="33%" top="72%" width="5%" on={step >= 2} />
            <Pipe left="74%" top="72%" width="7%" on={step >= 3} />

            <Part
              box={{ left: '2%', top: '36%', width: '15%', height: '52%' }}
              look={a}
              note="Spent cells reduced to black mass, a lithium, cobalt and nickel concentrate."
              label="Black mass feed"
              shape={{ borderRadius: '4px 4px 10px 10px', overflow: 'hidden' }}
            >
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: 0,
                  height: '58%',
                  backgroundImage: `radial-gradient(circle, ${a.ic} 1.6px, transparent 2.2px)`,
                  backgroundSize: '9px 9px',
                }}
              />
            </Part>

            <Part
              box={{ left: '21%', top: '52%', width: '12%', height: '36%' }}
              look={b}
              note="pH-optimised solvents for material recovery, in place of strong acids."
              label="Solvent"
              shape={{ borderRadius: '50% 50% 8px 8px / 16% 16% 8px 8px', overflow: 'hidden' }}
            >
              <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: '62%', background: b.liq, transition: T }} />
            </Part>

            <Part
              box={{ left: '38%', top: '30%', width: '36%', height: '58%' }}
              look={c}
              note="Modular electrolytic cells extract metals at low energy, more cleanly than traditional methods."
              noteWidth="clamp(150px,20vw,280px)"
              label="Electrolytic cell stack"
              shape={{
                borderRadius: 4,
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-evenly',
                padding: '0 4%',
                boxSizing: 'border-box',
              }}
            >
              <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: '66%', background: c.liq, transition: T }} />
              {Array.from({ length: 9 }, (_, i) => (
                <div
                  key={i}
                  style={{ position: 'relative', width: '3%', height: i % 2 ? '78%' : '86%', background: i % 2 ? plate2 : c.ic, transition: T }}
                />
              ))}
            </Part>

            <Part
              box={{ left: '81%', top: '46%', width: '16%', height: '42%' }}
              look={d}
              note="High-purity lithium, cobalt and nickel, ready for new batteries."
              label="Recovered metal"
              shape={{
                borderRadius: '50% 50% 8px 8px / 14% 14% 8px 8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6%',
              }}
            >
              {['Li', 'Co', 'Ni'].map((s) => (
                <div
                  key={s}
                  className="mono"
                  style={{
                    width: '22%',
                    aspectRatio: 1,
                    border: `1.5px solid ${d.ic}`,
                    color: d.ic,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 'clamp(8px,.8vw,12px)',
                    transition: T,
                  }}
                >
                  {s}
                </div>
              ))}
            </Part>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, paddingTop: 'clamp(28px,5vh,56px)' }}>
          <div style={{ display: 'flex', gap: 8 }}>
            {[0, 1, 2, 3].map((i) => (
              <div key={i} style={{ width: 28, height: 2, background: i <= step ? 'var(--acc)' : '#2F322E', transition: 'background .4s' }} />
            ))}
          </div>
          <div className="mono acc" style={{ fontSize: 12, letterSpacing: '.08em' }}>
            {p > 0.97 ? 'Continue ↓' : `Scroll to unpack · 0${step + 1} / 04`}
          </div>
        </div>
      </div>
    </section>
  );
}
