'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef } from 'react';
import { useReducedMotion, useScrollFrame } from '@/lib/hooks';
import { CONTACT, FOOTER_NAV } from '@/lib/site';
import { Logo } from './Logo';

export function Footer() {
  const pathname = usePathname();
  const word = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  // The wordmark rises into place as the page bottoms out.
  useScrollFrame(() => {
    const el = word.current;
    if (!el) return;
    const left = document.documentElement.scrollHeight - window.innerHeight - window.scrollY;
    el.style.transform = `translateY(${reduce ? 0 : Math.max(0, left) * 0.25}px)`;
  });

  return (
    <footer className="site-footer" data-bordered={pathname === '/contact'}>
      <div className="footer-cols">
        <div style={{ maxWidth: 280 }}>
          <div style={{ alignSelf: 'flex-start' }}>
            <Logo height={26} />
          </div>
          <p style={{ color: 'var(--dim)', lineHeight: 1.6 }}>
            Pioneering sustainable battery recycling solutions for a greener future.
          </p>
        </div>
        <div>
          <div className="label">Explore</div>
          {FOOTER_NAV.map((n) => (
            <Link key={n.href} href={n.href}>
              {n.label}
            </Link>
          ))}
        </div>
        <div>
          <div className="label">Contact</div>
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          <a href={`tel:${CONTACT.tel}`}>{CONTACT.phone}</a>
          <span style={{ color: 'var(--dim)' }}>{CONTACT.area}</span>
        </div>
      </div>
      <div className="footer-base">
        <span>© 2026 AMPCYCLE</span>
        <span>PUNE, INDIA</span>
      </div>
      <div ref={word} className="wordmark" aria-hidden="true">
        AmpCycle<span className="acc">.</span>
      </div>
    </footer>
  );
}
