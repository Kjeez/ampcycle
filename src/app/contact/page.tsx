import type { Metadata } from 'next';
import { ProposalForm } from '@/components/contact/ProposalForm';
import { ImageSlot } from '@/components/ui/ImageSlot';
import { Parallax } from '@/components/ui/Parallax';
import { Faq } from '@/components/ui/Faq';
import { CONTACT } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Manufacturers, OEMs and waste management companies: request a lithium-ion battery recycling proposal from AmpCycle.',
};

const FAQS: [string, string][] = [
  ['What types of batteries do you recycle?', 'We specialise in recycling lithium-ion batteries commonly used in consumer electronics, electric vehicles and industrial applications.'],
  ['Why is recycling lithium-ion batteries important?', 'Recycling reduces environmental pollution, conserves natural resources, and recovers valuable materials like lithium, cobalt and nickel for reuse.'],
  ['How does your recycling process work?', 'Our electro-extraction process safely discharges batteries, uses pH-optimised solvents for material recovery, and recovers metals through a low-energy electrolytic cell.'],
  ['Do you accept batteries from individual consumers?', 'Currently, we partner with manufacturers, OEMs and waste management companies. Individual consumers should contact local recycling centres for battery disposal.'],
  ['Is there a fee for recycling services?', 'Fees depend on battery type, quantity and specific service requirements. Please contact us for a customised quote.'],
  ['What safety measures are in place during recycling?', 'We adhere to strict safety protocols, including controlled discharging and handling procedures, to prevent hazards during the recycling process.'],
  ['How can manufacturers partner with you?', 'Manufacturers can reach out via this page to discuss customised recycling solutions and partnership opportunities.'],
  ['How does your process help the environment?', 'Our eco-friendly technology minimises emissions, reduces chemical waste, and supports a circular economy by recovering finite resources.'],
  ['Are you compliant with regulations?', 'Yes, we comply with all relevant environmental regulations and hold necessary certifications to ensure responsible recycling practices.'],
];

const infoRow: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: 10, padding: '32px 0', borderBottom: '1px solid var(--line-2)' };
const big: React.CSSProperties = { fontSize: 'clamp(26px,2.6vw,40px)', letterSpacing: '-0.03em' };

export default function ContactPage() {
  return (
    <>
      <section
        className="gutter"
        style={{ padding: 'clamp(130px,20vh,200px) var(--gutter) clamp(60px,10vh,100px)', display: 'flex', flexDirection: 'column', gap: 32 }}
      >
        <div data-reveal className="eyebrow eyebrow--dot">
          Contact us
        </div>
        <h1 style={{ fontSize: 'clamp(56px,10vw,184px)', lineHeight: 0.88, letterSpacing: '-0.06em', display: 'flex', flexDirection: 'column' }}>
          <span data-reveal style={{ display: 'block' }}>
            Let&apos;s talk
          </span>
          <span data-reveal data-reveal-delay="120" className="acc" style={{ display: 'block' }}>
            batteries.
          </span>
        </h1>
        <p
          data-reveal
          data-reveal-delay="200"
          style={{ fontSize: 'clamp(19px,1.6vw,23px)', lineHeight: 1.45, maxWidth: 620, color: 'var(--muted)', textWrap: 'pretty' }}
        >
          Manufacturers, OEMs and waste management companies can reach out to discuss customised recycling solutions and partnership
          opportunities.
        </p>
      </section>

      <section
        className="sec"
        style={{
          paddingTop: 0,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,380px),1fr))',
          gap: 'clamp(40px,5vw,96px)',
          alignItems: 'start',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid var(--line-2)' }}>
          <a data-reveal href={`mailto:${CONTACT.email}`} style={infoRow}>
            <span className="label">Email</span>
            <span style={big}>{CONTACT.email} ↗</span>
          </a>
          <a data-reveal href={`tel:${CONTACT.tel}`} style={infoRow}>
            <span className="label">Phone</span>
            <span style={big}>{CONTACT.phone}</span>
          </a>
          <div data-reveal style={infoRow}>
            <span className="label">Facility</span>
            <span style={{ fontSize: 'clamp(19px,1.6vw,24px)', lineHeight: 1.4, letterSpacing: '-0.015em', maxWidth: 460 }}>{CONTACT.address}</span>
            <a
              href={CONTACT.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="mono acc"
              style={{ fontSize: 12, letterSpacing: '.06em', paddingTop: 6 }}
            >
              OPEN IN MAPS ↗
            </a>
          </div>
          <div data-reveal style={{ display: 'flex', gap: 14, padding: '28px 0', color: 'var(--dim)', fontSize: 15, lineHeight: 1.6 }}>
            <span className="diamond" style={{ marginTop: 8 }} />
            <span>Individual consumers should contact local recycling centres for battery disposal. We currently partner with businesses only.</span>
          </div>
        </div>

        <div
          data-reveal
          data-reveal-delay="150"
          style={{ background: 'var(--panel)', border: '1px solid rgba(237,238,233,.1)', borderRadius: 4, padding: 'clamp(28px,3.4vw,52px)' }}
        >
          <ProposalForm />
        </div>
      </section>

      <section className="media" style={{ height: 'clamp(340px,70vh,760px)', borderRadius: 0 }}>
        <Parallax mode="center" factor={-0.18} overscan="16%">
          <ImageSlot id="contact-facility" placeholder="Photo: facility exterior, MIDC Chinchwad" />
        </Parallax>
        <div className="media-tag" style={{ left: 'var(--gutter)', top: 28 }}>
          18.63° N · 73.80° E · PUNE
        </div>
      </section>

      <section
        className="sec"
        style={{
          paddingTop: 'clamp(100px,14vh,160px)',
          paddingBottom: 'clamp(100px,14vh,160px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,400px),1fr))',
          gap: 'clamp(40px,6vw,120px)',
          alignItems: 'start',
        }}
      >
        <div data-reveal className="stack" style={{ position: 'sticky', top: 120 }}>
          <div className="eyebrow">Frequently asked questions</div>
          <h2 style={{ fontSize: 'clamp(34px,4vw,64px)', letterSpacing: '-0.04em', lineHeight: 1 }}>Common questions about our services</h2>
        </div>
        <Faq items={FAQS} />
      </section>
    </>
  );
}
