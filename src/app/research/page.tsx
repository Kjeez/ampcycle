import type { Metadata } from 'next';
import Link from 'next/link';
import { FocusAreas } from '@/components/research/FocusAreas';
import { ImageSlot } from '@/components/ui/ImageSlot';
import { Parallax } from '@/components/ui/Parallax';
import { ProgressSteps } from '@/components/ui/ProgressSteps';

export const metadata: Metadata = {
  title: 'Research',
  description: 'AmpCycle R&D: electrochemical extraction, solvent chemistry, black mass characterisation, process monitoring and traceability.',
};

const STAGES = [
  { n: '01', meta: 'GRAMS', t: 'Bench', d: 'Lab-scale experiments validate a chemistry or cell change and set the target for purity and recovery.' },
  { n: '02', meta: 'KILOGRAMS', t: 'Pilot', d: 'Continuous runs on real black mass prove the change holds up over time and across feedstock.' },
  { n: '03', meta: 'TONNES', t: 'Scale', d: 'Proven designs move into modular production cells, ready to be replicated in regional hubs.' },
];

const COLLAB = [
  { n: '01', t: 'Academic research', d: 'Joint projects and student work on electrochemistry, separation and materials analysis.' },
  { n: '02', t: 'Industry pilots', d: 'Trials on your scrap or end-of-life cells to test recovery on a specific chemistry.' },
  { n: '03', t: 'Equipment and sensing', d: 'Partners building cells, sensors and automation for continuous operation.' },
  { n: '04', t: 'Policy and standards', d: 'Work on traceability and recovery reporting under India’s battery waste rules.' },
];

export default function ResearchPage() {
  return (
    <>
      <section className="gutter" style={{ paddingTop: 'clamp(130px,20vh,200px)', display: 'flex', flexDirection: 'column', gap: 'clamp(40px,6vh,72px)' }}>
        <div className="split" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,440px),1fr))', gap: 40 }}>
          <div className="stack" style={{ gap: 28 }}>
            <div data-reveal className="eyebrow eyebrow--dot">
              Research &amp; development
            </div>
            <h1 data-reveal style={{ fontSize: 'clamp(52px,8vw,140px)', lineHeight: 0.92, letterSpacing: '-0.05em', textWrap: 'balance' }}>
              The chemistry behind the loop.
            </h1>
          </div>
          <p data-reveal data-reveal-delay="150" className="lead">
            Our R&amp;D work develops and refines the electrochemical process at the heart of AmpCycle, from bench experiments in Pune to modular
            cells ready for scale.
          </p>
        </div>
        <div data-reveal data-reveal-delay="250" className="media" style={{ height: 'clamp(320px,64vh,720px)' }}>
          <Parallax mode="page" factor={0.16} overscan="14%">
            <ImageSlot id="research-hero" placeholder="Photo: lab bench, glassware, electrochemical setup" priority />
          </Parallax>
          <div className="media-tag" style={{ right: 20, bottom: 18 }}>
            AMPCYCLE LAB · PUNE
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingBottom: 0, gap: 'clamp(40px,7vh,72px)' }}>
        <div data-reveal className="stack" style={{ maxWidth: 900 }}>
          <div className="eyebrow">Focus areas</div>
          <h2 className="h2">Five problems we work on.</h2>
        </div>
        <FocusAreas />
      </section>

      <ProgressSteps
        steps={STAGES}
        measure="research"
        titleSize="clamp(30px,3vw,48px)"
        titleLineHeight={1}
        header={
          <div className="split">
            <div data-reveal className="stack">
              <div className="eyebrow">From lab to line</div>
              <h2 className="h2">How an idea reaches the plant floor.</h2>
            </div>
            <p data-reveal data-reveal-delay="120" className="lead">
              Every change to the process is proven at small scale first, then run continuously on real feedstock before it reaches production.
            </p>
          </div>
        }
      />

      <section
        className="sec paper"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,420px),1fr))', gap: 'clamp(48px,6vw,120px)', alignItems: 'start' }}
      >
        <div data-reveal className="stack" style={{ gap: 24 }}>
          <div className="eyebrow eyebrow--ink">Collaborate</div>
          <h2 style={{ fontSize: 'clamp(36px,4.6vw,76px)', letterSpacing: '-0.045em', lineHeight: 1, textWrap: 'balance' }}>
            Research partners welcome.
          </h2>
          <p className="lead" style={{ maxWidth: 480, justifySelf: 'start' }}>
            We work with universities, research institutes and industry on open problems in lithium-ion battery recycling. If your work overlaps
            with ours, we&apos;d like to hear from you.
          </p>
          <Link href="/contact" className="btn btn--ink" style={{ alignSelf: 'flex-start' }}>
            Propose a collaboration →
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid var(--ink)' }}>
          {COLLAB.map((c) => (
            <div
              key={c.n}
              data-reveal
              style={{ display: 'grid', gridTemplateColumns: '48px minmax(0,1fr)', gap: 16, padding: '28px 0', borderBottom: '1px solid rgba(18,20,18,.2)' }}
            >
              <span className="mono" style={{ fontSize: 12, color: 'var(--ink-dim)', paddingTop: 6 }}>
                {c.n}
              </span>
              <div className="stack" style={{ gap: 8 }}>
                <div style={{ fontSize: 'clamp(20px,1.8vw,26px)', letterSpacing: '-0.02em' }}>{c.t}</div>
                <div style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ink-muted)' }}>{c.d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
