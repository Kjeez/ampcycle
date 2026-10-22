import type { Metadata } from 'next';
import Link from 'next/link';
import { ImpactScroller } from '@/components/about/ImpactScroller';
import { ImageSlot } from '@/components/ui/ImageSlot';
import { Parallax } from '@/components/ui/Parallax';
import { WordReveal } from '@/components/ui/WordReveal';
import { CtaBand } from '@/components/ui/CtaBand';

export const metadata: Metadata = {
  title: 'About',
  description: 'Founded in 2019, AmpCycle is building a cleaner way to recover the critical metals inside India’s lithium-ion batteries.',
};

const INNOV = [
  { n: '01', big: '98% · 99%', d: 'Metal recovery efficiency, and purity of lithium, cobalt and nickel.' },
  { n: '02', big: 'Lower energy', d: 'Lower energy consumption compared to conventional processes.' },
  { n: '03', big: 'Minimal waste', d: 'Minimal chemical waste and emissions, making it a more sustainable solution.' },
  { n: '04', big: 'Scalable', d: 'Enables localised recycling hubs and reduces dependency on lithium imports.' },
];

const statement: React.CSSProperties = { fontSize: 'clamp(28px,3vw,48px)', lineHeight: 1.12, letterSpacing: '-0.035em', textWrap: 'balance' };

export default function AboutPage() {
  return (
    <>
      <section className="gutter" style={{ paddingTop: 'clamp(130px,20vh,200px)', display: 'flex', flexDirection: 'column', gap: 'clamp(48px,8vh,96px)' }}>
        <div className="stack" style={{ gap: 28 }}>
          <div data-reveal className="eyebrow eyebrow--dot">
            About us · Future of sustainability
          </div>
          <h1 style={{ fontSize: 'clamp(64px,13vw,240px)', lineHeight: 0.86, letterSpacing: '-0.06em', display: 'flex', flexDirection: 'column' }}>
            <span data-reveal style={{ display: 'block' }}>
              Reinventing
            </span>
            <span data-reveal data-reveal-delay="120" style={{ display: 'block', paddingLeft: 'clamp(0px,12vw,240px)' }}>
              currents<span className="acc">.</span>
            </span>
          </h1>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,380px),1fr))',
            gap: 'clamp(32px,5vw,96px)',
            alignItems: 'end',
          }}
        >
          <div data-reveal className="media" style={{ aspectRatio: '4 / 3' }}>
            <Parallax mode="page" factor={0.12} overscan="12%">
              <ImageSlot id="about-hero" placeholder="Photo: team at the facility" sizes="(max-width: 900px) 100vw, 50vw" priority />
            </Parallax>
          </div>
          <div data-reveal data-reveal-delay="150" className="stack" style={{ gap: 24, maxWidth: 520 }}>
            <p style={{ fontSize: 'clamp(20px,1.7vw,24px)', lineHeight: 1.45, letterSpacing: '-0.015em', textWrap: 'pretty' }}>
              With the rapid rise of electric vehicles and consumer electronics, lithium-ion battery waste is accumulating at an unprecedented rate.
            </p>
            <p className="body" style={{ fontSize: 17, lineHeight: 1.65 }}>
              AmpCycle addresses this urgent issue with a cutting-edge extraction process, which efficiently recovers lithium, cobalt, nickel and
              other critical materials while minimising waste and pollution.
            </p>
            <div
              className="mono"
              style={{ display: 'flex', gap: 40, paddingTop: 12, borderTop: '1px solid var(--line-2)', fontSize: 12, letterSpacing: '.08em', color: 'var(--dim)' }}
            >
              <span>EST. 2019</span>
              <span>INDIA</span>
            </div>
          </div>
        </div>
      </section>

      <WordReveal
        label="The challenge"
        text="By 2030, millions of tons of lithium-ion battery waste will be generated globally, posing severe environmental and resource challenges."
        padding="clamp(140px,26vh,280px)"
        fontSize="clamp(32px,4.6vw,76px)"
        lineHeight={1.08}
      />

      <section className="sec" style={{ paddingTop: 0, gap: 'clamp(40px,7vh,80px)' }}>
        <div className="split">
          <div data-reveal className="stack">
            <div className="eyebrow">Our innovation</div>
            <h2 className="h2">A breakthrough in Li-ion recycling.</h2>
          </div>
          <Link data-reveal data-reveal-delay="120" href="/technology" className="btn btn--ghost" style={{ justifySelf: 'end' }}>
            Explore the technology →
          </Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,300px),1fr))', borderTop: '1px solid var(--line-2)' }}>
          {INNOV.map((n) => (
            <div
              key={n.n}
              data-reveal
              style={{ padding: '36px 28px 40px 0', borderBottom: '1px solid var(--line-2)', display: 'flex', flexDirection: 'column', gap: 20 }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="mono acc" style={{ fontSize: 12 }}>
                  {n.n}
                </span>
                <span className="diamond" />
              </div>
              <div style={{ fontSize: 'clamp(40px,4vw,64px)', letterSpacing: '-0.045em', lineHeight: 1 }}>{n.big}</div>
              <p className="body" style={{ maxWidth: 320 }}>
                {n.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      <ImpactScroller />

      <section
        className="sec"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,420px),1fr))', gap: 'clamp(48px,6vw,120px)' }}
      >
        <div data-reveal className="stack" style={{ gap: 28, paddingTop: 28, borderTop: '1px solid var(--acc)' }}>
          <div className="eyebrow">Our mission</div>
          <p style={statement}>
            Revolutionizing battery recycling through sustainable technology and innovative solutions for a greener future.
          </p>
        </div>
        <div data-reveal data-reveal-delay="150" className="stack" style={{ gap: 28, paddingTop: 28, borderTop: '1px solid rgba(237,238,233,.3)' }}>
          <div className="eyebrow eyebrow--dim">Our vision</div>
          <p style={statement}>To make India a global leader in sustainable battery material recovery.</p>
        </div>
      </section>

      <section
        className="sec"
        style={{
          paddingTop: 0,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,360px),1fr))',
          gap: 'clamp(32px,5vw,96px)',
          alignItems: 'center',
        }}
      >
        <div data-reveal className="media" style={{ aspectRatio: '4 / 5', maxWidth: 520 }}>
          <ImageSlot id="about-founder" placeholder="Portrait: Ravindra Joshi" sizes="(max-width: 900px) 100vw, 520px" />
        </div>
        <div data-reveal data-reveal-delay="150" className="stack" style={{ gap: 24, maxWidth: 560 }}>
          <div className="eyebrow">Leadership</div>
          <h2 style={{ fontSize: 'clamp(36px,4.4vw,72px)', letterSpacing: '-0.045em', lineHeight: 1 }}>Ravindra Joshi</h2>
          <div className="mono" style={{ fontSize: 13, letterSpacing: '.06em', color: 'var(--dim)' }}>
            FOUNDER &amp; CEO
          </div>
          <p className="body" style={{ fontSize: 17, lineHeight: 1.65 }}>
            An engineer and entrepreneur, Ravindra founded AmpCycle in 2019 to build a chemical-free, energy-efficient way to recover the
            metals inside India&apos;s lithium-ion batteries.
          </p>
        </div>
      </section>

      <CtaBand title="Build the loop with us." cta="Partner with AmpCycle →" />
    </>
  );
}
