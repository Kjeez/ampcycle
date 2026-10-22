import type { Metadata } from 'next';
import { CellDiagram } from '@/components/technology/CellDiagram';
import { Timeline } from '@/components/technology/Timeline';
import { ImageSlot } from '@/components/ui/ImageSlot';
import { Parallax } from '@/components/ui/Parallax';
import { ProgressSteps } from '@/components/ui/ProgressSteps';
import { CtaBand } from '@/components/ui/CtaBand';

export const metadata: Metadata = {
  title: 'Technology',
  description: 'Low-energy electrochemical extraction that recovers 98% of the metal in spent lithium-ion batteries at 99% purity.',
};

const COMPARE = [
  { k: 'Primary route', a: 'High-temperature smelting or strong-acid leaching', b: 'Low-energy electrochemical extraction' },
  { k: 'Energy use', a: 'Heat-intensive', b: 'Lower energy consumption than conventional processes' },
  { k: 'Chemical waste', a: 'Acid effluent and emissions to treat', b: 'Minimal chemical waste and emissions' },
  { k: 'Recovery', a: 'Varies by route and feedstock', b: '98% metal recovery, 99% purity of Li, Co, Ni' },
  { k: 'Scale', a: 'Large, centralised plants', b: 'Modular cells for localised recycling hubs' },
];

const ROADMAP = [
  { n: '01', t: 'Automated sorting', d: 'Incoming batteries identified and routed by chemistry and condition.' },
  { n: '02', t: 'IoT-enabled process monitoring', d: 'Live data from every cell and tank to keep recovery consistent.' },
  { n: '03', t: 'Blockchain for traceability', d: 'A verifiable record from collected battery to recovered metal.' },
];

const compareRow: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'minmax(0,.8fr) minmax(0,1fr) minmax(0,1fr)',
  gap: 'clamp(12px,2vw,32px)',
  borderBottom: '1px solid rgba(18,20,18,.2)',
};

export default function TechnologyPage() {
  return (
    <>
      <section className="gutter" style={{ paddingTop: 'clamp(130px,20vh,200px)', display: 'flex', flexDirection: 'column', gap: 'clamp(40px,6vh,72px)' }}>
        <div className="stack" style={{ gap: 28, maxWidth: 1300 }}>
          <div data-reveal className="eyebrow eyebrow--dot">
            Technology · Electro-extraction
          </div>
          <h1 data-reveal style={{ fontSize: 'clamp(52px,8.4vw,148px)', lineHeight: 0.92, letterSpacing: '-0.05em' }}>
            Revolutionizing battery recycling.
          </h1>
        </div>
        <div className="split" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,380px),1fr))' }}>
          <p
            data-reveal
            data-reveal-delay="120"
            style={{ fontSize: 'clamp(20px,1.8vw,26px)', lineHeight: 1.4, letterSpacing: '-0.015em', maxWidth: 560, textWrap: 'pretty' }}
          >
            Leading the way in sustainable Li-ion battery recycling with 98% efficiency.
          </p>
          <div data-reveal data-reveal-delay="200" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
            <a href="#cell" className="btn btn--ghost">
              Inside the cell ↓
            </a>
          </div>
        </div>
        <div data-reveal data-reveal-delay="250" className="media" style={{ height: 'clamp(320px,70vh,780px)' }}>
          <Parallax mode="page" factor={0.16} overscan="14%">
            <ImageSlot id="tech-hero" placeholder="Process video still / plant footage, wide" priority />
          </Parallax>
        </div>
      </section>

      <CellDiagram />

      <section className="sec" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="split">
          <div data-reveal className="stack">
            <div className="eyebrow">Our process</div>
            <h2 className="h2">Four stages, one closed loop.</h2>
          </div>
          <p data-reveal data-reveal-delay="120" className="lead">
            AmpCycle&apos;s extraction technology takes a battery from end of life to metal that can go into a new cell.
          </p>
        </div>
        <Timeline />
      </section>

      <section className="sec paper" style={{ gap: 'clamp(40px,7vh,80px)' }}>
        <div data-reveal className="stack" style={{ maxWidth: 900 }}>
          <div className="eyebrow eyebrow--ink">Why it&apos;s different</div>
          <h2 className="h2">Less heat. Less acid. More metal back.</h2>
        </div>
        <div role="table" aria-label="Conventional recycling compared with AmpCycle" style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid var(--ink)' }}>
          <div
            role="row"
            className="mono"
            style={{ ...compareRow, padding: '18px 0', fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--ink-dim)' }}
          >
            <span role="columnheader" />
            <span role="columnheader">Conventional recycling</span>
            <span role="columnheader" style={{ color: 'var(--ink)' }}>
              AmpCycle electro-extraction
            </span>
          </div>
          {COMPARE.map((c) => (
            <div key={c.k} role="row" data-reveal style={{ ...compareRow, padding: 'clamp(20px,3.4vh,34px) 0', alignItems: 'baseline' }}>
              <span role="rowheader" className="mono" style={{ fontSize: 12, letterSpacing: '.06em', color: 'var(--ink-dim)' }}>
                {c.k}
              </span>
              <span role="cell" style={{ fontSize: 'clamp(15px,1.4vw,20px)', lineHeight: 1.4, color: 'var(--ink-dim)' }}>
                {c.a}
              </span>
              <span role="cell" style={{ fontSize: 'clamp(17px,1.7vw,26px)', lineHeight: 1.3, letterSpacing: '-0.02em' }}>
                {c.b}
              </span>
            </div>
          ))}
        </div>
      </section>

      <ProgressSteps
        steps={ROADMAP}
        measure="roadmap"
        titleSize="clamp(26px,2.4vw,36px)"
        titleLineHeight={1.1}
        header={
          <div className="split">
            <div data-reveal className="stack">
              <div className="eyebrow">Future roadmap</div>
              <h2 className="h2">A statewide recycling ecosystem.</h2>
            </div>
            <p data-reveal data-reveal-delay="120" className="lead">
              Our vision is to make India a global leader in sustainable battery material recovery.
            </p>
          </div>
        }
      />

      <CtaBand title="Bring us your batteries." cta="Start a conversation →" />
    </>
  );
}
