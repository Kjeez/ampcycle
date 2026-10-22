'use client';

import { useState } from 'react';

const CHEMS = [
  { label: 'NMC', bm: 0.38, m: { Li: 1.6, Ni: 11, Co: 3.7, Mn: 3.4, Cu: 9, Al: 6 }, note: 'Nickel manganese cobalt. Common in EVs and two-wheelers.' },
  { label: 'LFP', bm: 0.33, m: { Li: 1.2, Ni: 0, Co: 0, Mn: 0, Cu: 10, Al: 7 }, note: 'Lithium iron phosphate. Common in buses, three-wheelers and storage.' },
  { label: 'NCA', bm: 0.37, m: { Li: 1.5, Ni: 14, Co: 2.6, Mn: 0, Cu: 9, Al: 6 }, note: 'Nickel cobalt aluminium. Used in some EVs and power tools.' },
  { label: 'LCO', bm: 0.4, m: { Li: 2.0, Ni: 0, Co: 17, Mn: 0, Cu: 8, Al: 5 }, note: 'Lithium cobalt oxide. Found in phones, laptops and electronics.' },
];
const NAMES = { Li: 'Lithium', Ni: 'Nickel', Co: 'Cobalt', Mn: 'Manganese', Cu: 'Copper', Al: 'Aluminium' } as const;
const BATTERY_METALS = ['Li', 'Ni', 'Co'];
const RECOVERY = 0.98;

// Slider 0–100 maps logarithmically to 100 kg – 100 t, rounded to 2 significant figures.
const massFor = (v: number) => {
  const raw = 100 * Math.pow(10, (v / 100) * 3);
  const p = Math.pow(10, Math.floor(Math.log10(raw)) - 1);
  return Math.round(raw / p) * p;
};
const fmt = (x: number) =>
  x >= 1000
    ? (x / 1000).toLocaleString('en-IN', { maximumFractionDigits: x >= 10000 ? 0 : 1 }) + ' t'
    : Math.round(x).toLocaleString('en-IN') + ' kg';

const label: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: 8 };

export function Calculator() {
  const [v, setV] = useState(57);
  const [ci, setCi] = useState(0);
  const kg = massFor(v);
  const c = CHEMS[ci];
  const max = Math.max(...Object.values(c.m));

  return (
    <div
      data-reveal
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,400px),1fr))',
        border: '1px solid var(--line-2)',
        borderRadius: 4,
        background: 'var(--panel-2)',
        overflow: 'hidden',
      }}
    >
      <div style={{ padding: 'clamp(28px,3.4vw,52px)', display: 'flex', flexDirection: 'column', gap: 40, borderRight: '1px solid rgba(237,238,233,.1)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <label className="label" htmlFor="calc-mass">
            Battery mass
          </label>
          <div style={{ fontSize: 'clamp(48px,5.6vw,92px)', letterSpacing: '-0.05em', lineHeight: 1 }}>
            {kg >= 1000 ? (kg / 1000).toLocaleString('en-IN', { maximumFractionDigits: 1 }) : kg.toLocaleString('en-IN')}
            <span style={{ fontSize: '.4em', color: 'var(--dim)', letterSpacing: '-0.02em', marginLeft: 10 }}>{kg >= 1000 ? 'tonnes' : 'kg'}</span>
          </div>
          <input
            id="calc-mass"
            type="range"
            min={0}
            max={100}
            step={1}
            value={v}
            onChange={(e) => setV(Number(e.target.value))}
            aria-valuetext={fmt(kg)}
            style={{ width: '100%', accentColor: 'var(--acc)', height: 24, margin: 0, cursor: 'pointer' }}
          />
          <div className="mono" style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'var(--faint)' }}>
            <span>100 kg</span>
            <span>1 t</span>
            <span>10 t</span>
            <span>100 t</span>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div className="label">Cell chemistry</div>
          <div className="seg" role="group" aria-label="Cell chemistry">
            {CHEMS.map((x, i) => (
              <button key={x.label} type="button" aria-pressed={i === ci} onClick={() => setCi(i)} style={{ padding: '12px 4px' }}>
                {x.label}
              </button>
            ))}
          </div>
          <div style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--dim)' }}>{c.note}</div>
        </div>
      </div>

      <div style={{ padding: 'clamp(28px,3.4vw,52px)', display: 'flex', flexDirection: 'column', gap: 28 }} aria-live="polite">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 16, paddingBottom: 24, borderBottom: '1px solid rgba(237,238,233,.1)' }}>
          <div style={label}>
            <div className="label">Black mass</div>
            <div style={{ fontSize: 'clamp(36px,3.6vw,56px)', letterSpacing: '-0.04em', lineHeight: 1 }}>{fmt(kg * c.bm)}</div>
          </div>
          <div className="mono" style={{ fontSize: 11, color: 'var(--faint)', textAlign: 'right' }}>
            @ 98% RECOVERY
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {(Object.keys(NAMES) as (keyof typeof NAMES)[]).map((sym) => {
            const pct = c.m[sym];
            const on = pct > 0;
            const key = BATTERY_METALS.includes(sym);
            const bc = on && key ? 'var(--acc)' : on ? 'var(--muted)' : '#3D403B';
            return (
              <div
                key={sym}
                style={{ display: 'grid', gridTemplateColumns: '44px minmax(0,1fr) auto', gap: 16, alignItems: 'center', opacity: on ? 1 : 0.35, transition: 'opacity .4s' }}
              >
                <div
                  className="mono"
                  style={{ width: 44, height: 44, border: `1px solid ${bc}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, color: bc, transition: 'all .4s' }}
                >
                  {sym}
                </div>
                <div style={label}>
                  <div style={{ fontSize: 15 }}>{NAMES[sym]}</div>
                  <div style={{ height: 3, background: '#232622' }}>
                    <div
                      style={{
                        height: '100%',
                        width: `${(pct / max) * 100}%`,
                        background: key ? 'var(--acc)' : '#7D8078',
                        transition: 'width .6s var(--ease-out)',
                      }}
                    />
                  </div>
                </div>
                <div style={{ fontSize: 20, letterSpacing: '-0.02em', minWidth: 96, textAlign: 'right' }}>
                  {on ? fmt((kg * pct) / 100 * RECOVERY) : '—'}
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ fontSize: 12, lineHeight: 1.55, color: 'var(--faint)', paddingTop: 8 }}>
          Indicative only. Based on typical cell composition and 98% metal recovery efficiency. Actual yields depend on pack design, state of
          charge and feedstock.
        </div>
      </div>
    </div>
  );
}
