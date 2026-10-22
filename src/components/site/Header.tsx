'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useScrollFrame } from '@/lib/hooks';
import { NAV } from '@/lib/site';

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  useScrollFrame(() => setScrolled(window.scrollY > 40));

  const current = (href: string) => (pathname === href ? 'page' : undefined);

  return (
    <header className="site-header" data-scrolled={scrolled}>
      <Link href="/" className="logo">
        AmpCycle
      </Link>
      <nav className="site-nav">
        {NAV.map((n) => (
          <Link key={n.href} href={n.href} aria-current={current(n.href)}>
            {n.label}
          </Link>
        ))}
        <Link href="/contact" className="nav-cta" aria-current={current('/contact')}>
          Contact
        </Link>
      </nav>
    </header>
  );
}
