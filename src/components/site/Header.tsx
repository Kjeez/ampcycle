'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useScrollFrame } from '@/lib/hooks';
import { CONTACT, NAV } from '@/lib/site';

const MENU = [{ href: '/', label: 'Home' }, ...NAV, { href: '/contact', label: 'Contact' }];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useScrollFrame(() => setScrolled(window.scrollY > 40));

  // Close on navigation; lock page scroll and listen for Escape while open.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const html = document.documentElement;
    html.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth > 760 && setOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      html.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  const current = (href: string) => (pathname === href ? 'page' : undefined);

  return (
    <>
      <header className="site-header" data-scrolled={scrolled || open}>
        <Link href="/" className="logo">
          AmpCycle
        </Link>
        <nav className="site-nav" aria-label="Main">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} aria-current={current(n.href)}>
              {n.label}
            </Link>
          ))}
          <Link href="/contact" className="nav-cta" aria-current={current('/contact')}>
            Contact
          </Link>
        </nav>
        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </header>

      <div id="mobile-menu" className="mobile-menu" data-open={open} aria-hidden={!open} inert={!open}>
        <nav aria-label="Mobile">
          {MENU.map((n, i) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={current(n.href)}
              style={{ transitionDelay: open ? `${80 + i * 50}ms` : '0ms' }}
              onClick={() => n.href === pathname && setOpen(false)}
            >
              <span className="mono">0{i + 1}</span>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="mobile-menu-foot">
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          <a href={`tel:${CONTACT.tel}`}>{CONTACT.phone}</a>
          <span>{CONTACT.area}</span>
        </div>
      </div>
    </>
  );
}
