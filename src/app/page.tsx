import { Stats } from '@/components/home/Stats';
import { Marquee } from '@/components/home/Marquee';
import { Process } from '@/components/home/Process';
import { Calculator } from '@/components/home/Calculator';
import { QuickContactForm } from '@/components/home/QuickContactForm';
import { ImageSlot } from '@/components/ui/ImageSlot';
import { Parallax } from '@/components/ui/Parallax';
import { WordReveal } from '@/components/ui/WordReveal';
import { Faq } from '@/components/ui/Faq';
import { CONTACT } from '@/lib/site';

const TECH = [
  {
    n: '01',
    t: '98% metal recovery efficiency',
    d: 'Achieve 99% purity of lithium, cobalt and nickel for higher-grade materials that go straight back into new cells.',
  },
  {
    n: '02',
    t: 'Minimal chemical waste',
    d: 'A cleaner and more sustainable solution with minimal emissions, using pH-optimised solvents in place of harsh acid leaching.',
  },
  {
    n: '03',
    t: 'Scalable technology',
    d: 'Modular electrolytic cells add capacity as feedstock grows, from a single line to a statewide network.',
  },
];

const ELEMENTS = [
  { num: '03', sym: 'Li', name: 'Lithium', mass: '6.94', tag: 'Battery-grade' },
  { num: '27', sym: 'Co', name: 'Cobalt', mass: '58.93', tag: 'Battery-grade' },
  { num: '28', sym: 'Ni', name: 'Nickel', mass: '58.69', tag: 'Battery-grade' },
  { num: '25', sym: 'Mn', name: 'Manganese', mass: '54.94', tag: 'Recovered' },
  { num: '29', sym: 'Cu', name: 'Copper', mass: '63.55', tag: 'Recovered' },
  { num: '13', sym: 'Al', name: 'Aluminium', mass: '26.98', tag: 'Recovered' },
  { num: '06', sym: 'C', name: 'Graphite', mass: '12.01', tag: 'Recovered' },
];

const PARTNERS = [
  {
    k: 'A',
    slot: 'partner-manufacturers',
    ph: 'Photo: cell manufacturing floor',
    t: 'Battery manufacturers',
    d: 'Production scrap and rejected cells, recovered into material for the next batch.',
  },
  {
    k: 'B',
    slot: 'partner-oems',
    ph: 'Photo: EV battery pack / electronics',
    t: 'EV & electronics OEMs',
    d: 'End-of-life packs safely discharged and processed under strict handling protocols.',
  },
  {
    k: 'C',
    slot: 'partner-waste',
    ph: 'Photo: sorted battery collection',
    t: 'Waste management companies',
    d: 'A dependable destination for the lithium-ion batteries you collect.',
  },
];

const CASE = [
  ['Challenge', 'Warranty returns and end-of-life NMC packs were piling up with no domestic route to recover the metals.'],
  ['Approach', 'Scheduled collection, controlled discharge and processing through our electro-extraction line, with batch-level reporting.'],
  ['Outcome', 'Recovered lithium, cobalt and nickel returned as battery-grade material, with nothing sent to landfill.'],
];

const CASE_STATS: [React.ReactNode, string][] = [
  ['12 t', 'PACKS PROCESSED'],
  ['4.6 t', 'BLACK MASS'],
  [
    <>
      98<span className="acc">%</span>
    </>,
    'METAL RECOVERY',
  ],
  ['0 kg', 'TO LANDFILL'],
];

const ROADMAP = [
  { n: '01', t: 'Automated sorting', d: 'Incoming batteries identified and routed by chemistry and condition.' },
  { n: '02', t: 'IoT-enabled process monitoring', d: 'Live data from every cell and tank to keep recovery consistent.' },
  { n: '03', t: 'Blockchain for traceability', d: 'A verifiable record from collected battery to recovered metal.' },
];

const FAQS: [string, string][] = [
  ['What types of batteries do you recycle?', 'We specialise in recycling lithium-ion batteries commonly used in consumer electronics, electric vehicles and industrial applications.'],
  ['Why is recycling lithium-ion batteries important?', 'Recycling reduces environmental pollution, conserves natural resources, and recovers valuable materials like lithium, cobalt and nickel for reuse.'],
  ['How does your process work?', 'Our electro-extraction process safely discharges batteries, uses pH-optimised solvents for material recovery, and recovers metals through a low-energy electrolytic cell.'],
  ['Do you accept batteries from individual consumers?', 'Currently, we partner with manufacturers, OEMs and waste management companies. Individual consumers should contact local recycling centres for battery disposal.'],
  ['Is there a fee for recycling services?', 'Fees depend on battery type, quantity and specific service requirements. Reach out and we will put together a proposal.'],
  ['How do you ensure safety?', 'We adhere to strict safety protocols, including controlled discharging and handling procedures, to prevent hazards during the recycling process.'],
  ['Are you compliant with regulations?', 'Yes. We comply with all relevant environmental regulations and hold the necessary certifications to ensure responsible recycling practices.'],
];

export default function HomePage() {
  return (
    <>
      <section
        id="top"
        className="gutter"
        style={{ paddingTop: 'clamp(120px,18vh,180px)', display: 'flex', flexDirection: 'column', gap: 'clamp(40px,6vh,72px)' }}
      >
        <div className="split" style={{ gap: 40 }}>
          <div className="stack" style={{ gap: 28 }}>
            <div data-reveal className="eyebrow eyebrow--dot">
              Li-ion battery recycling · India
            </div>
            <h1 data-reveal style={{ fontSize: 'clamp(48px,7.2vw,124px)', lineHeight: 0.94, letterSpacing: '-0.045em', textWrap: 'balance' }}>
              Battery-grade metals from spent lithium-ion cells.
            </h1>
          </div>
          <div data-reveal data-reveal-delay="150" className="stack" style={{ gap: 28, maxWidth: 440, justifySelf: 'end', paddingBottom: 10 }}>
            <p className="lead">
              AmpCycle&apos;s low-energy electrochemical extraction recovers lithium, cobalt and nickel from used batteries at up to 98%
              efficiency, with minimal chemical waste.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="#contact" className="btn btn--acc">
                Partner with us
              </a>
              <a href="#process" className="btn btn--ghost">
                See the process
              </a>
            </div>
          </div>
        </div>
        <div data-reveal data-reveal-delay="250" className="media" style={{ height: 'clamp(320px,66vh,760px)' }}>
          <Parallax mode="page" factor={0.16} overscan="14%">
            <ImageSlot id="hero-facility" placeholder="Hero photo: battery modules / recycling line, wide" priority />
          </Parallax>
          <div className="media-tag" style={{ right: 20, bottom: 18 }}>
            MIDC CHINCHWAD · MAHARASHTRA
          </div>
        </div>
        <Stats />
      </section>

      <Marquee />

      <WordReveal
        label="Why recycle"
        text="Lithium-ion batteries aren't waste. They are the most concentrated source of the metals India's energy transition needs. Recovering them is cleaner than mining them again."
        padding="clamp(120px,22vh,240px)"
        fontSize="clamp(32px,4.4vw,72px)"
        lineHeight={1.1}
      />

      <Process />

      <section id="technology" className="sec" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="split">
          <div data-reveal className="stack">
            <div className="eyebrow">Li-ion extraction technology</div>
            <h2 className="h2">Cleaner chemistry, built to scale.</h2>
          </div>
          <p data-reveal data-reveal-delay="120" className="lead">
            Conventional recovery relies on heat and strong acids. Our electrolytic route works at low energy and keeps chemical waste to a
            minimum.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,280px),1fr))', gap: 'clamp(24px,3vw,48px)' }}>
          {TECH.map((c, i) => (
            <div key={c.n} data-reveal data-reveal-delay={i ? String(i * 100) : undefined} className="tech-card">
              <div className="mono acc" style={{ fontSize: 12 }}>
                {c.n}
              </div>
              <h3 style={{ fontSize: 'clamp(26px,2.4vw,36px)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>{c.t}</h3>
              <p className="body">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="calculator" className="sec" style={{ paddingTop: 0, gap: 'clamp(40px,6vh,64px)' }}>
        <div className="split">
          <div data-reveal className="stack">
            <div className="eyebrow">Recovery estimator</div>
            <h2 className="h2">What&apos;s inside your batteries?</h2>
          </div>
          <p data-reveal data-reveal-delay="120" className="lead">
            Set a volume and chemistry to see roughly how much metal our process could return from it.
          </p>
        </div>
        <Calculator />
      </section>

      <section id="materials" className="sec paper" style={{ gap: 'clamp(40px,7vh,80px)' }}>
        <div className="split">
          <div data-reveal className="stack">
            <div className="eyebrow eyebrow--ink">What we recover</div>
            <h2 className="h2">Critical materials, back in circulation.</h2>
          </div>
          <p data-reveal data-reveal-delay="120" className="lead">
            Batteries from consumer electronics, electric vehicles and industrial storage carry the same finite metals that India imports today.
          </p>
        </div>
        <div className="el-grid">
          {ELEMENTS.map((e) => (
            <div key={e.sym} data-reveal className="el-cell">
              <div className="mono" style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12 }}>
                <span>{e.num}</span>
                <span>{e.mass}</span>
              </div>
              <div style={{ fontSize: 'clamp(56px,5.5vw,88px)', letterSpacing: '-0.05em', lineHeight: 1 }}>{e.sym}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ fontSize: 17 }}>{e.name}</div>
                <div className="pill-tag">{e.tag}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="partners" className="sec" style={{ gap: 'clamp(40px,7vh,80px)' }}>
        <div className="split">
          <div data-reveal className="stack">
            <div className="eyebrow">Who we work with</div>
            <h2 className="h2">Built for the businesses that hold the batteries.</h2>
          </div>
          <p data-reveal data-reveal-delay="120" className="lead">
            We partner with manufacturers, OEMs and waste management companies on recycling programmes tailored to battery type and volume.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,300px),1fr))', gap: 'clamp(20px,2.4vw,36px)' }}>
          {PARTNERS.map((p, i) => (
            <div key={p.k} data-reveal data-reveal-delay={i ? String(i * 100) : undefined} className="stack" style={{ gap: 22 }}>
              <div className="media" style={{ aspectRatio: '4 / 5' }}>
                <ImageSlot id={p.slot} placeholder={p.ph} sizes="(max-width: 700px) 100vw, 33vw" />
              </div>
              <div className="stack" style={{ gap: 10 }}>
                <div className="mono" style={{ fontSize: 12, color: 'var(--dim)' }}>
                  {p.k}
                </div>
                <h3 style={{ fontSize: 28, letterSpacing: '-0.03em' }}>{p.t}</h3>
                <p className="body">{p.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="case" className="sec" style={{ paddingTop: 0, gap: 'clamp(40px,6vh,64px)' }}>
        <div data-reveal className="stack" style={{ paddingTop: 'clamp(60px,10vh,100px)', borderTop: '1px solid var(--line)' }}>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
            <span className="eyebrow">Case study</span>
            <span
              className="mono"
              style={{
                fontSize: 10,
                letterSpacing: '.1em',
                textTransform: 'uppercase',
                color: 'var(--dim)',
                border: '1px dashed rgba(237,238,233,.35)',
                padding: '4px 8px',
                borderRadius: 2,
              }}
            >
              Placeholder figures · replace with real data
            </span>
          </div>
          <h2 style={{ fontSize: 'clamp(34px,4.4vw,72px)', letterSpacing: '-0.045em', lineHeight: 1, maxWidth: 1100, textWrap: 'balance' }}>
            Closing the loop for a two-wheeler EV maker.
          </h2>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,420px),1fr))',
            gap: 'clamp(32px,4vw,72px)',
            alignItems: 'start',
          }}
        >
          <div data-reveal className="media" style={{ aspectRatio: '4 / 3' }}>
            <ImageSlot id="case-study" placeholder="Photo: client packs arriving at the plant" sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
          <div data-reveal data-reveal-delay="120" style={{ display: 'flex', flexDirection: 'column' }}>
            {CASE.map(([k, v], i) => (
              <div key={k} className="kv-row" style={i === CASE.length - 1 ? { borderBottom: '1px solid var(--line-2)' } : undefined}>
                <span className="label" style={{ paddingTop: 3 }}>
                  {k}
                </span>
                <span className="body">{v}</span>
              </div>
            ))}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0,1fr))', gap: 1, background: 'var(--line)', marginTop: 32 }}>
              {CASE_STATS.map(([v, l], i) => (
                <div
                  key={l}
                  style={{
                    background: 'var(--bg)',
                    padding: i % 2 ? 20 : '20px 20px 20px 0',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 6,
                  }}
                >
                  <span style={{ fontSize: 'clamp(36px,3.4vw,52px)', letterSpacing: '-0.04em', lineHeight: 1 }}>{v}</span>
                  <span className="mono" style={{ fontSize: 11, letterSpacing: '.08em', color: 'var(--dim)' }}>
                    {l}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="media" style={{ height: 'clamp(360px,80vh,860px)', borderRadius: 0 }}>
        <Parallax mode="center" factor={-0.18} overscan="18%">
          <ImageSlot id="band-lab" placeholder="Full-bleed photo: electrolytic cell / lab detail" />
        </Parallax>
      </section>

      <section
        id="vision"
        className="sec"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,440px),1fr))',
          gap: 'clamp(48px,6vw,120px)',
          alignItems: 'start',
        }}
      >
        <div data-reveal className="stack pin-wide" style={{ gap: 28 }}>
          <div className="eyebrow">Future roadmap</div>
          <h2 style={{ fontSize: 'clamp(34px,4vw,64px)', letterSpacing: '-0.04em', lineHeight: 1.04, textWrap: 'balance' }}>
            Our vision is to make India a global leader in sustainable battery material recovery.
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p data-reveal className="lead" style={{ margin: '0 0 40px', maxWidth: 520, justifySelf: 'start' }}>
            Next, a statewide recycling ecosystem connecting collection, sorting and extraction.
          </p>
          {ROADMAP.map((r, i) => (
            <div
              key={r.n}
              data-reveal
              className="num-row"
              style={i === ROADMAP.length - 1 ? { borderBottom: '1px solid var(--line-2)' } : undefined}
            >
              <div className="mono acc" style={{ fontSize: 12, paddingTop: 8 }}>
                {r.n}
              </div>
              <div className="stack" style={{ gap: 10 }}>
                <h3 style={{ fontSize: 30, letterSpacing: '-0.03em' }}>{r.t}</h3>
                <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>{r.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="faq"
        className="sec"
        style={{
          paddingTop: 'clamp(100px,14vh,160px)',
          paddingBottom: 'clamp(100px,14vh,160px)',
          borderTop: '1px solid var(--line)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,400px),1fr))',
          gap: 'clamp(40px,6vw,120px)',
          alignItems: 'start',
        }}
      >
        <div data-reveal className="stack pin-wide">
          <div className="eyebrow">FAQ</div>
          <h2 style={{ fontSize: 'clamp(34px,4vw,64px)', letterSpacing: '-0.04em', lineHeight: 1 }}>Common questions</h2>
        </div>
        <Faq items={FAQS} />
      </section>

      <section
        id="contact"
        className="contact-band"
        style={{
          background: 'var(--acc)',
          color: 'var(--bg)',
          padding: 'clamp(100px,14vh,160px) var(--gutter)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,420px),1fr))',
          gap: 'clamp(48px,6vw,120px)',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 56 }}>
          <div data-reveal className="stack">
            <div className="eyebrow" style={{ color: 'inherit' }}>
              Partner with AmpCycle
            </div>
            <h2 style={{ fontSize: 'clamp(40px,5.4vw,92px)', letterSpacing: '-0.05em', lineHeight: 0.95, textWrap: 'balance' }}>
              Let&apos;s recover what&apos;s already been mined.
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px,1fr))', gap: 28, fontSize: 16, lineHeight: 1.55 }}>
            <div className="stack" style={{ gap: 8 }}>
              <div className="label" style={{ color: 'inherit' }}>
                Email · Phone
              </div>
              <a href={`mailto:${CONTACT.email}`} style={{ textDecoration: 'underline', textUnderlineOffset: 4 }}>
                {CONTACT.email}
              </a>
              <a href={`tel:${CONTACT.tel}`}>{CONTACT.phone}</a>
            </div>
            <div className="stack" style={{ gap: 8 }}>
              <div className="label" style={{ color: 'inherit' }}>
                Facility
              </div>
              <div>{CONTACT.address.replace(', India', '')}</div>
            </div>
          </div>
        </div>
        <div data-reveal data-reveal-delay="120" style={{ background: 'var(--bg)', color: 'var(--fg)', borderRadius: 4, padding: 'clamp(28px,3.4vw,48px)' }}>
          <QuickContactForm />
        </div>
      </section>
    </>
  );
}
