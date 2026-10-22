'use client';

import { useEffect } from 'react';

/**
 * Fades up every [data-reveal] element as it enters the viewport.
 * Optional data-reveal-delay="150" staggers it (ms). Watches the DOM so
 * elements from client navigation or conditional renders are picked up.
 */
export function RevealManager() {
  useEffect(() => {
    const show = (el: Element) => {
      el.classList.add('is-in');
      io.unobserve(el);
    };
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && show(e.target)),
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' },
    );

    // Catches anything already on screen (or skipped past) that IO hasn't fired for.
    const checkVisible = () => {
      const vh = window.innerHeight;
      document.querySelectorAll('[data-rv]:not(.is-in)').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.96 && r.bottom > 0) show(el);
      });
    };

    const scan = () => {
      document.querySelectorAll<HTMLElement>('[data-reveal]:not([data-rv])').forEach((el) => {
        el.setAttribute('data-rv', '');
        const d = el.getAttribute('data-reveal-delay');
        if (d) el.style.setProperty('--rd', `${d}ms`);
        io.observe(el);
      });
      checkVisible();
    };

    let raf = 0;
    const queue = () => {
      if (!raf)
        raf = requestAnimationFrame(() => {
          raf = 0;
          scan();
        });
    };
    const mo = new MutationObserver(queue);
    mo.observe(document.body, { childList: true, subtree: true });
    window.addEventListener('scroll', checkVisible, { passive: true });
    scan();
    const fallback = setTimeout(checkVisible, 1200);

    return () => {
      mo.disconnect();
      io.disconnect();
      window.removeEventListener('scroll', checkVisible);
      clearTimeout(fallback);
      cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
