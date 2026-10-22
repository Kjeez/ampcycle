// CSS-driven intro overlay; hidden via html.no-intro after the first visit in a session.
export function Intro() {
  return (
    <div className="intro" aria-hidden="true">
      <div className="intro-row">
        <span className="intro-dia" />
        <span className="intro-word">
          {'AmpCycle'.split('').map((ch, i) => (
            <span key={i} style={{ animationDelay: `${120 + i * 45}ms` }}>
              {ch}
            </span>
          ))}
        </span>
      </div>
      <div className="intro-bar">
        <span />
      </div>
      <div className="intro-cap">RECOVERING CRITICAL METALS · INDIA</div>
    </div>
  );
}
