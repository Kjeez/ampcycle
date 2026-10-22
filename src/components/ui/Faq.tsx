'use client';

import { useId, useState } from 'react';

/** Single-open accordion; the first item starts open. */
export function Faq({ items }: { items: [question: string, answer: string][] }) {
  const [open, setOpen] = useState(0);
  const id = useId();

  return (
    <div className="faq">
      {items.map(([q, a], i) => (
        <div key={q} className="faq-item">
          <button
            type="button"
            className="faq-q"
            aria-expanded={open === i}
            aria-controls={`${id}-${i}`}
            onClick={() => setOpen(open === i ? -1 : i)}
          >
            <span>{q}</span>
            <span className="faq-plus" aria-hidden="true">
              +
            </span>
          </button>
          {open === i && (
            <p id={`${id}-${i}`} className="faq-a">
              {a}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
