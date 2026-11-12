import type { Metadata } from 'next';
import Link from 'next/link';
import { ImpactScroller } from '@/components/about/ImpactScroller';
import { ImageSlot } from '@/components/ui/ImageSlot';
import { Parallax } from '@/components/ui/Parallax';
import { WordReveal } from '@/components/ui/WordReveal';
import { CtaBand } from '@/components/ui/CtaBand';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Critical raw materials are single-use, polluting to mine and concentrated in a few countries. AmpCycle is building a cleaner way to recover them.',
};

// Figures from the AmpCycle pitch deck.
const FACTS = [
  { big: '~5%', d: 'of lithium-ion batteries are recycled today' },
  { big: '15 t+', d: 'of CO₂ emitted to extract one tonne of lithium' },
  { big: '70,000 MT', d: 'of lithium-ion waste generated in India every year' },
  { big: 'Few', d: 'countries, such as Congo, Chile and Australia, hold the limited reserves' },
];

const PROBLEMS = [
  {
    n: '01',
    t: 'Existing methods are inefficient',
    d: 'Today’s recycling produces low-value outputs at high cost, leaving lithium-ion waste processing with near-zero profitability and falling prices.',
  },
  {
    n: '02',
    t: 'The environmental cost is high',
    d: 'Extracting one tonne of lithium emits around 15 tonnes of CO₂. Most lithium-ion batteries are dumped, burned or dismantled informally, contaminating soil and groundwater.',
  },
  {
    n: '03',
    t: 'Livelihoods and pollution',
    d: 'With only about 5% of batteries recycled and little infrastructure, collectors are pushed into low-margin disposal practices that barely cover their costs.',
  },
];

const METHODS = [
  {
    k: 'Pyrometallurgy',
    points: [
      'Emits high CO₂ and toxic gases from high-temperature metal extraction.',
      'Demands high-cost furnaces and large-scale industrial infrastructure.',
    ],
  },
  {
    k: 'Hydrometallurgy',
    points: [
      'Generates hazardous chemical waste and acidic effluents.',
      'Requires expensive chemical processing infrastructure and treatment systems.',
    ],
  },
];

const ANSWER = [
  { n: '01', big: '98% · 99.9%', d: 'Extraction efficiency, and purity of the recovered materials.' },
  { n: '02', big: '30% less', d: 'Energy needed than conventional processes, with low chemical cost.' },
  { n: '03', big: 'Electricity only', d: 'The process uses only electricity for extraction, minimising waste and emissions.' },
  { n: '04', big: 'Modular', d: 'A simplified process with fewer steps, scalable at different localities.' },
];

const FOUNDERS = [
  { name: 'Sahaj Joshi', role: 'Co-Founder & CFO' },
  { name: 'Sayli Gaikwad', role: 'Co-Founder & Lead Developer' },
  { name: 'Harjinder Chugh', role: 'Co-Founder & CTO' },
];

const statement: React.CSSProperties = { fontSize: 'clamp(24px,2.4vw,40px)', lineHeight: 1.15, letterSpacing: '-0.03em', textWrap: 'balance' };
const grid = (min: number): React.CSSProperties => ({
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fit, minmax(min(100%,${min}px),1fr))`,
});

export default function AboutPage() {
  return (
    <>
      <section className="gutter" style={{ paddingTop: 'clamp(130px,20vh,200px)', display: 'flex', flexDirection: 'column', gap: 'clamp(48px,8vh,96px)' }}>
        <div className="stack" style={{ gap: 28, maxWidth: 1300 }}>
          <div data-reveal className="eyebrow eyebrow--dot">
            About AmpCycle · The problem
          </div>
          <h1 data-reveal style={{ fontSize: 'clamp(48px,8vw,140px)', lineHeight: 0.92, letterSpacing: '-0.05em', textWrap: 'balance' }}>
            The energy transition has a hidden crisis<span className="acc">.</span>
          </h1>
        </div>
        <div style={{ ...grid(380), gap: 'clamp(32px,5vw,96px)', alignItems: 'end' }}>
          <div data-reveal className="media" style={{ aspectRatio: '4 / 3' }}>
            <Parallax mode="page" factor={0.12} overscan="12%">
              <ImageSlot id="about-hero" placeholder="Photo: team at the facility" sizes="(max-width: 900px) 100vw, 50vw" priority />
            </Parallax>
          </div>
          <div data-reveal data-reveal-delay="150" className="stack" style={{ gap: 24, maxWidth: 540 }}>
            <p style={{ fontSize: 'clamp(20px,1.7vw,24px)', lineHeight: 1.45, letterSpacing: '-0.015em', textWrap: 'pretty' }}>
              The world is moving to sustainable energy, but the critical raw materials it runs on are vulnerable to supply disruption, hurting
              every country that holds no reserves of its own.
            </p>
            <p className="body" style={{ fontSize: 17, lineHeight: 1.65 }}>
              Lithium, cobalt, nickel and graphite are recycled so inefficiently that they are effectively single-use. That creates supply
              bottlenecks and drives prices up.
            </p>
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingBottom: 0 }}>
        <div className="facts">
          {FACTS.map((f) => (
            <div key={f.big} data-reveal>
              <div style={{ fontSize: 'clamp(36px,4.4vw,72px)', letterSpacing: '-0.045em', lineHeight: 1 }}>{f.big}</div>
              <p className="body" style={{ maxWidth: 260 }}>
                {f.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      <WordReveal
        label="The challenge"
        text="Most lithium-ion batteries are dumped, burned or dismantled informally. The metals inside are lost, and the soil and water around them pay the price."
        padding="clamp(120px,22vh,240px)"
        fontSize="clamp(30px,4.2vw,68px)"
        lineHeight={1.1}
      />

      <section className="sec" style={{ paddingTop: 0, gap: 'clamp(40px,7vh,80px)' }}>
        <div data-reveal className="stack" style={{ maxWidth: 900 }}>
          <div className="eyebrow">Three problems</div>
          <h2 className="h2">Why critical minerals stay single-use.</h2>
        </div>
        <div style={{ ...grid(280), gap: 'clamp(24px,3vw,48px)' }}>
          {PROBLEMS.map((p, i) => (
            <div key={p.n} data-reveal data-reveal-delay={i ? String(i * 100) : undefined} className="tech-card">
              <div className="mono acc" style={{ fontSize: 12 }}>
                {p.n}
              </div>
              <h3 style={{ fontSize: 'clamp(24px,2.2vw,34px)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>{p.t}</h3>
              <p className="body">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="sec paper" style={{ gap: 'clamp(40px,7vh,80px)' }}>
        <div className="split">
          <div data-reveal className="stack">
            <div className="eyebrow eyebrow--ink">Hydrometallurgy &amp; pyrometallurgy</div>
            <h2 className="h2">The standard processes don&apos;t work.</h2>
          </div>
          <p data-reveal data-reveal-delay="120" className="lead">
            Both are widely used, and both require extensive manual handling, chemical processing and multi-stage material separation.
          </p>
        </div>
        <div style={{ ...grid(360), gap: 'clamp(24px,3vw,48px)' }}>
          {METHODS.map((m, i) => (
            <div
              key={m.k}
              data-reveal
              data-reveal-delay={i ? '120' : undefined}
              style={{ borderTop: '1px solid var(--ink)', paddingTop: 28, display: 'flex', flexDirection: 'column', gap: 20 }}
            >
              <h3 style={{ fontSize: 'clamp(28px,2.8vw,44px)', letterSpacing: '-0.035em', lineHeight: 1 }}>{m.k}</h3>
              {m.points.map((pt) => (
                <div key={pt} style={{ display: 'flex', gap: 14, fontSize: 17, lineHeight: 1.55, color: 'var(--ink-muted)' }}>
                  <span style={{ flex: 'none', width: 8, height: 8, marginTop: 9, background: 'var(--ink)', transform: 'rotate(45deg)' }} />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="sec" style={{ ...grid(420), gap: 'clamp(48px,6vw,120px)', alignItems: 'start' }}>
        <div data-reveal className="stack pin-wide" style={{ gap: 24 }}>
          <div className="eyebrow">Critical raw materials mining</div>
          <h2 style={{ fontSize: 'clamp(34px,4vw,64px)', letterSpacing: '-0.04em', lineHeight: 1.02, textWrap: 'balance' }}>
            Mining them is among the most polluting work there is.
          </h2>
        </div>
        <div className="stack" style={{ gap: 28 }}>
          <p data-reveal className="body" style={{ fontSize: 18, lineHeight: 1.65 }}>
            Very few countries, such as Congo, Chile and Australia, hold limited reserves of lithium, cobalt and nickel, which keeps costs high
            for everyone else.
          </p>
          <p data-reveal className="body" style={{ fontSize: 18, lineHeight: 1.65 }}>
            Mining these minerals consumes enormous energy and generates massive CO₂ emissions. During and after mining, the surrounding area
            becomes unlivable, and toxic chemicals and tailings contaminate groundwater, soil and ecosystems for decades.
          </p>
          <div data-reveal style={{ ...grid(200), gap: 1, background: 'var(--line)', marginTop: 12 }}>
            <div style={{ background: 'var(--bg)', padding: '24px 24px 24px 0' }}>
              <div style={{ fontSize: 'clamp(36px,3.4vw,52px)', letterSpacing: '-0.04em', lineHeight: 1 }}>75% · 80%</div>
              <p className="body" style={{ marginTop: 10 }}>
                of aluminium and copper is recycled globally.
              </p>
            </div>
            <div style={{ background: 'var(--bg)', padding: 24 }}>
              <div style={{ fontSize: 'clamp(36px,3.4vw,52px)', letterSpacing: '-0.04em', lineHeight: 1 }}>
                98<span className="acc">%</span>
              </div>
              <p className="body" style={{ marginTop: 10 }}>
                of the critical raw materials in Li-ion batteries is what we are working to recycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0, gap: 'clamp(40px,7vh,80px)' }}>
        <div className="split">
          <div data-reveal className="stack">
            <div className="eyebrow">Our answer</div>
            <h2 className="h2">Sustainable, efficient extraction.</h2>
          </div>
          <Link data-reveal data-reveal-delay="120" href="/technology" className="btn btn--ghost" style={{ justifySelf: 'end' }}>
            Explore the technology →
          </Link>
        </div>
        <div style={{ ...grid(260), borderTop: '1px solid var(--line-2)' }}>
          {ANSWER.map((n) => (
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
              <div style={{ fontSize: 'clamp(34px,3.4vw,56px)', letterSpacing: '-0.045em', lineHeight: 1 }}>{n.big}</div>
              <p className="body" style={{ maxWidth: 300 }}>
                {n.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      <ImpactScroller />

      <section className="sec" style={{ ...grid(420), gap: 'clamp(48px,6vw,120px)' }}>
        <div data-reveal className="stack" style={{ gap: 28, paddingTop: 28, borderTop: '1px solid var(--acc)' }}>
          <div className="eyebrow">Our mission</div>
          <p style={statement}>
            Revolutionizing battery recycling through sustainable technology and innovative solutions for a greener future.
          </p>
        </div>
        <div data-reveal data-reveal-delay="150" className="stack" style={{ gap: 28, paddingTop: 28, borderTop: '1px solid rgba(237,238,233,.3)' }}>
          <div className="eyebrow eyebrow--dim">Our vision</div>
          <p style={statement}>
            To build India&apos;s sovereign materials ecosystem by transforming critical minerals into high-purity advanced materials,
            strengthening domestic capabilities, reducing import dependence, and positioning India as a global leader in strategic material
            innovation.
          </p>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0, gap: 'clamp(48px,8vh,80px)' }}>
        <div style={{ ...grid(360), gap: 'clamp(32px,5vw,96px)', alignItems: 'center' }}>
          <div data-reveal className="media" style={{ aspectRatio: '4 / 5', maxWidth: 520 }}>
            <ImageSlot id="about-founder" placeholder="Portrait: Ravindra Joshi" sizes="(max-width: 900px) 100vw, 520px" />
          </div>
          <div data-reveal data-reveal-delay="150" className="stack" style={{ gap: 24, maxWidth: 560 }}>
            <div className="eyebrow">Leadership</div>
            <h2 style={{ fontSize: 'clamp(36px,4.4vw,72px)', letterSpacing: '-0.045em', lineHeight: 1 }}>Ravindra Joshi</h2>
            <div className="mono" style={{ fontSize: 13, letterSpacing: '.06em', color: 'var(--dim)' }}>
              CO-FOUNDER &amp; CEO
            </div>
            <p className="body" style={{ fontSize: 17, lineHeight: 1.65 }}>
              An engineer and entrepreneur, Ravindra founded AmpCycle in 2019 to build a chemical-free, energy-efficient way to recover the
              metals inside India&apos;s lithium-ion batteries.
            </p>
          </div>
        </div>
        <div style={{ ...grid(220), borderTop: '1px solid var(--line-2)' }}>
          {FOUNDERS.map((f) => (
            <div key={f.name} data-reveal style={{ padding: '28px 24px 0 0', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ fontSize: 'clamp(22px,2vw,28px)', letterSpacing: '-0.025em' }}>{f.name}</div>
              <div className="mono" style={{ fontSize: 12, letterSpacing: '.06em', color: 'var(--dim)', textTransform: 'uppercase' }}>
                {f.role}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBand title="Build the loop with us." cta="Partner with AmpCycle →" />
    </>
  );
}
