'use client';

import { useEffect, useRef } from 'react';

/** Dot + trailing ring cursor for fine pointers; grows over links and photos. */
export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!matchMedia('(pointer: fine)').matches) return;
    const dot = dotRef.current!;
    const ring = ringRef.current!;
    const html = document.documentElement;
    let x = -100,
      y = -100,
      rx = -100,
      ry = -100,
      on = false,
      raf = 0;

    const setRing = (size: number, fill: boolean) => {
      ring.style.width = ring.style.height = `${size}px`;
      ring.style.margin = `${-size / 2}px 0 0 ${-size / 2}px`;
      ring.style.background = fill ? '#EDEEE9' : 'transparent';
      ring.style.borderColor = fill ? 'transparent' : 'rgba(237,238,233,.7)';
    };
    const setDot = (size: number) => {
      dot.style.width = dot.style.height = `${size}px`;
      dot.style.margin = size ? `${-size / 2}px 0 0 ${-size / 2}px` : '0';
    };

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!on) {
        on = true;
        rx = x;
        ry = y;
        html.classList.add('amp-cur');
        dot.style.opacity = ring.style.opacity = '1';
      }
      dot.style.transform = `translate(${x}px,${y}px)`;
    };
    const onOver = (e: MouseEvent) => {
      const t = e.target as Element;
      if (!t.closest) return;
      if (t.closest('input:not([type=range]), textarea')) {
        dot.style.opacity = ring.style.opacity = '0';
        return;
      }
      if (on) dot.style.opacity = ring.style.opacity = '1';
      if (t.closest('a, button, [role=button], input[type=range], label')) {
        setRing(64, true);
        setDot(0);
      } else if (t.closest('[data-slot]')) {
        setRing(84, false);
      } else {
        setRing(36, false);
        setDot(6);
      }
    };
    const onLeave = () => {
      dot.style.opacity = ring.style.opacity = '0';
      on = false;
    };
    const loop = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      ring.style.transform = `translate(${rx.toFixed(1)}px,${ry.toFixed(1)}px)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver);
    document.documentElement.addEventListener('mouseleave', onLeave);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf);
      html.classList.remove('amp-cur');
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cur-ring" aria-hidden="true" />
      <div ref={dotRef} className="cur-dot" aria-hidden="true" />
    </>
  );
}
