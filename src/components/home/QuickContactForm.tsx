'use client';

import { useState } from 'react';

const ROLES = ['Battery manufacturer', 'OEM', 'Waste management', 'Other'];

// Front-end only: wire `onSubmit` to an API route or form service to receive enquiries.
export function QuickContactForm() {
  const [sent, setSent] = useState(false);
  const [role, setRole] = useState(0);

  if (sent)
    return (
      <div className="thanks" style={{ minHeight: 420, gap: 16 }}>
        <span className="diamond" style={{ width: 12, height: 12 }} />
        <h3 style={{ fontSize: 36, letterSpacing: '-0.03em' }}>Thank you.</h3>
        <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>Our team will get back to you within one business day.</p>
      </div>
    );

  return (
    <form
      className="form"
      style={{ gap: 26 }}
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="fields" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px,1fr))' }}>
        <label className="field">
          Name
          <input name="name" required placeholder="Your name" autoComplete="name" />
        </label>
        <label className="field">
          Company
          <input name="company" placeholder="Company" autoComplete="organization" />
        </label>
      </div>
      <label className="field">
        Work email
        <input name="email" required type="email" placeholder="name@company.com" autoComplete="email" />
      </label>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div className="label">I am a</div>
        <input type="hidden" name="role" value={ROLES[role]} />
        <div className="chips" role="group" aria-label="I am a">
          {ROLES.map((r, i) => (
            <button key={r} type="button" className="chip" aria-pressed={role === i} onClick={() => setRole(i)}>
              {r}
            </button>
          ))}
        </div>
      </div>
      <label className="field">
        Message
        <textarea name="message" rows={3} placeholder="Battery chemistry, monthly volume, location" />
      </label>
      <button type="submit" className="btn btn--submit" style={{ padding: '15px 28px' }}>
        Send message →
      </button>
    </form>
  );
}
