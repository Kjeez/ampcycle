import Link from 'next/link';

export function CtaBand({ title, cta, href = '/contact' }: { title: string; cta: string; href?: string }) {
  return (
    <section className="cta-band">
      <h2 data-reveal>{title}</h2>
      <Link data-reveal data-reveal-delay="120" href={href} className="btn btn--dark">
        {cta}
      </Link>
    </section>
  );
}
