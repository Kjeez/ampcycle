'use client';

import { useState } from 'react';

const ROLES = ['Battery manufacturer', 'EV / electronics OEM', 'Waste management', 'Other'];
const CHEMS = ['NMC', 'LFP', 'NCA', 'LCO', 'Mixed / not sure'];
const VOLS = ['< 1 t', '1–10 t', '10–100 t', '100 t +'];

// Front-end only: wire `onSubmit` to an API route or form service to receive enquiries.
export function ProposalForm() {
  const [sent, setSent] = useState(false);
  const [role, setRole] = useState(0);
  const [chem, setChem] = useState<string[]>([]);
  const [vol, setVol] = useState(1);

  if (sent)
    return (
      <div className="thanks" style={{ minHeight: 520 }}>
        <span className="diamond" />
        <h3 style={{ fontSize: 40, letterSpacing: '-0.035em' }}>Thank you.</h3>
        <p style={{ color: 'var(--muted)', lineHeight: 1.6, maxWidth: 380 }}>
          Our team will review your requirements and get back to you within one business day.
        </p>
        <button type="button" className="link-btn" style={{ paddingTop: 8 }} onClick={() => setSent(false)}>
          SEND ANOTHER →
        </button>
      </div>
    );

  const toggleChem = (c: string) => setChem((s) => (s.includes(c) ? s.filter((x) => x !== c) : [...s, c]));

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="stack" style={{ gap: 8 }}>
        <h2 style={{ fontSize: 'clamp(26px,2.4vw,36px)', letterSpacing: '-0.03em' }}>Request a recycling proposal</h2>
        <p style={{ color: 'var(--dim)', fontSize: 15 }}>Fees depend on battery type, quantity and service requirements.</p>
      </div>
      <div className="fields">
        <label className="field">
          Name
          <input name="name" required placeholder="Your name" autoComplete="name" />
        </label>
        <label className="field">
          Company
          <input name="company" placeholder="Company" autoComplete="organization" />
        </label>
        <label className="field">
          Work email
          <input name="email" required type="email" placeholder="name@company.com" autoComplete="email" />
        </label>
        <label className="field">
          Phone
          <input name="phone" type="tel" placeholder="+91" autoComplete="tel" />
        </label>
      </div>

      <input type="hidden" name="role" value={ROLES[role]} />
      <input type="hidden" name="chemistry" value={chem.join(', ')} />
      <input type="hidden" name="volume" value={VOLS[vol]} />

      <div className="stack" style={{ gap: 12 }}>
        <div className="label">I am a</div>
        <div className="chips" role="group" aria-label="I am a">
          {ROLES.map((r, i) => (
            <button key={r} type="button" className="chip" aria-pressed={role === i} onClick={() => setRole(i)}>
              {r}
            </button>
          ))}
        </div>
      </div>
      <div className="stack" style={{ gap: 12 }}>
        <div className="label">Battery chemistry · select all that apply</div>
        <div className="chips" role="group" aria-label="Battery chemistry">
          {CHEMS.map((c) => (
            <button key={c} type="button" className="chip" aria-pressed={chem.includes(c)} onClick={() => toggleChem(c)}>
              {c}
            </button>
          ))}
        </div>
      </div>
      <div className="stack" style={{ gap: 12 }}>
        <div className="label">Monthly volume</div>
        <div className="seg" role="group" aria-label="Monthly volume">
          {VOLS.map((v, i) => (
            <button key={v} type="button" aria-pressed={vol === i} onClick={() => setVol(i)}>
              {v}
            </button>
          ))}
        </div>
      </div>
      <label className="field">
        Message
        <textarea name="message" rows={3} placeholder="Location, pack formats, timelines" />
      </label>
      <button type="submit" className="btn btn--submit">
        Send enquiry →
      </button>
    </form>
  );
}
