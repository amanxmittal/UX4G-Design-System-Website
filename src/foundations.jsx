/* global React, ReactDOM */
const { useState, useCallback } = React;

function useToasts() {
  const [toasts, setToasts] = useState([]);
  const push = useCallback((msg) => {
    const id = Date.now() + Math.random();
    setToasts((t) => [...t, { id, msg }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 2400);
  }, []);
  return { toasts, push };
}
function Toasts({ items }) {
  return (
    <div className="toast-stack">
      {items.map((t) => (
        <div className="toast" key={t.id}>
          <span className="t-mark">i</span>
          <span>{t.msg}</span>
        </div>
      ))}
    </div>
  );
}
function Navbar({ onStub }) {
  const links = [
    { l: "Foundations", href: "UX4G Foundations.html" },
    { l: "Fundamentals", href: "UX4G Fundamentals.html" },
    { l: "Components", href: "UX4G Components.html" },
    { l: "Patterns", href: "UX4G Patterns.html" },
    { l: "Made by You", href: "UX4G Made by You.html" },
  ];
  return (
    <SiteNavbar />
  );
}


const FOUNDATIONS = [
  { num: "F-01", name: "Colour",           desc: "Primary, semantic, and neutral palettes. Includes contrast ratios and token names.", href: "UX4G Colour.html" },
  { num: "F-02", name: "Typography",       desc: "Type scale, weights, and line heights across 22 Indian languages.",                   href: "UX4G Typography.html" },
  { num: "F-03", name: "Spacing",          desc: "A base-4 spacing scale used across all components and layouts.",                       href: "UX4G Spacing.html" },
  { num: "F-04", name: "Layout",           desc: "Grid system, breakpoints, and container widths for mobile, tablet, and desktop.",     href: "UX4G Layout.html" },
  { num: "F-05", name: "Elevation",        desc: "Shadow levels that communicate hierarchy and depth.",                                  href: "UX4G Elevation.html" },
  { num: "F-06", name: "Borders & Radius", desc: "Border widths and corner radius values across component types.",                       href: "UX4G Borders.html" },
];

const PRINCIPLES = [
  { n: "01", name: "Accessibility first",     desc: "WCAG 2.1 AA by default across every foundation decision." },
  { n: "02", name: "Multilingual by design",  desc: "Every scale and spacing works across Devanagari, Tamil, Telugu, and 19 other scripts." },
  { n: "03", name: "Consistent and token-driven", desc: "Every value is a named token, not a magic number." },
  { n: "04", name: "Government-appropriate",  desc: "Calm, clear, trustworthy, not playful or decorative.", amber: true },
];

function FoundationGrid({ stub }) {
  return (
    <div className="fnd-grid">
      {FOUNDATIONS.map(({ num, name, desc, href }) => (
        <div key={num} className="fnd-card" onClick={() => href ? (window.location.href = href) : stub(name)}>
          <div className="fc-panel">
            {num === "F-01" && (
              <svg viewBox="0 0 200 130" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
                <circle cx="38" cy="32" r="14" fill="#EFEBFF" />
                <circle cx="76" cy="32" r="14" fill="#D3C6FF" />
                <circle cx="114" cy="32" r="14" fill="#A78FFF" />
                <circle cx="38" cy="66" r="14" fill="#A78FFF" />
                <circle cx="76" cy="66" r="14" fill="var(--primary)" />
                <circle cx="114" cy="66" r="14" fill="var(--primary-deep)" />
                <circle cx="38" cy="100" r="14" fill="var(--primary-deep)" />
                <circle cx="76" cy="100" r="14" fill="var(--primary-dark)" />
                <circle cx="114" cy="100" r="14" fill="var(--ink)" />
                <rect x="142" y="20" width="38" height="92" rx="6" fill="#fff" stroke="rgba(48,28,125,0.18)" strokeWidth="1" />
                <rect x="148" y="28" width="26" height="3" rx="1.5" fill="var(--primary-dark)" />
                <rect x="148" y="36" width="20" height="2.5" rx="1.25" fill="rgba(48,28,125,0.4)" />
                <rect x="148" y="50" width="26" height="3" rx="1.5" fill="var(--primary)" />
                <rect x="148" y="58" width="20" height="2.5" rx="1.25" fill="rgba(48,28,125,0.4)" />
                <rect x="148" y="72" width="26" height="3" rx="1.5" fill="#A78FFF" />
                <rect x="148" y="80" width="20" height="2.5" rx="1.25" fill="rgba(48,28,125,0.4)" />
              </svg>
            )}
            {num === "F-02" && (
              <svg viewBox="0 0 200 130" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
                <rect x="18" y="34" width="164" height="62" rx="10" fill="#fff" />
                <line x1="32" y1="50" x2="172" y2="50" stroke="rgba(48,28,125,0.3)" strokeDasharray="2 2.5" strokeWidth="0.8" />
                <line x1="32" y1="78" x2="172" y2="78" stroke="rgba(48,28,125,0.3)" strokeDasharray="2 2.5" strokeWidth="0.8" />
                <line x1="32" y1="92" x2="172" y2="92" stroke="rgba(48,28,125,0.3)" strokeDasharray="2 2.5" strokeWidth="0.8" />
                <text x="38" y="88" fontFamily="var(--font-body)" fontSize="42" fontWeight="700" fill="var(--primary)" letterSpacing="-1.5">Ag</text>
                <text x="106" y="88" fontFamily="var(--font-body)" fontSize="42" fontWeight="700" fill="var(--primary-dark)" letterSpacing="-1.5">123</text>
              </svg>
            )}
            {num === "F-03" && (
              <svg viewBox="0 0 200 130" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
                <rect x="34" y="24" width="132" height="76" rx="10" fill="#fff" />
                <rect x="46" y="36" width="60" height="6" rx="3" fill="var(--primary-dark)" />
                <rect x="46" y="48" width="92" height="3" rx="1.5" fill="rgba(48,28,125,0.3)" />
                <rect x="46" y="56" width="76" height="3" rx="1.5" fill="rgba(48,28,125,0.3)" />
                <rect x="46" y="74" width="44" height="14" rx="3" fill="var(--primary)" />
                <rect x="56" y="80" width="24" height="2.5" rx="1.25" fill="#fff" />
                <path d="M 18 26 L 18 98 M 14 26 L 22 26 M 14 98 L 22 98" stroke="var(--primary-dark)" strokeWidth="1.4" fill="none" strokeLinecap="square" />
                <path d="M 182 26 L 182 98 M 178 26 L 186 26 M 178 98 L 186 98" stroke="var(--primary-dark)" strokeWidth="1.4" fill="none" strokeLinecap="square" />
                <path d="M 34 14 L 166 14 M 34 10 L 34 18 M 166 10 L 166 18" stroke="var(--primary-dark)" strokeWidth="1.4" fill="none" strokeLinecap="square" />
                <path d="M 34 110 L 166 110 M 34 106 L 34 114 M 166 106 L 166 114" stroke="var(--primary-dark)" strokeWidth="1.4" fill="none" strokeLinecap="square" />
              </svg>
            )}
            {num === "F-04" && (
              <svg viewBox="0 0 200 130" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
                <rect x="12" y="22" width="40" height="86" rx="6" fill="#fff" stroke="var(--primary-dark)" strokeWidth="1.4" />
                <rect x="18" y="30" width="28" height="14" rx="3" fill="var(--primary)" />
                <rect x="18" y="48" width="28" height="20" rx="3" fill="#EFEBFF" />
                <rect x="18" y="72" width="13" height="13" rx="2" fill="#EFEBFF" />
                <rect x="33" y="72" width="13" height="13" rx="2" fill="#EFEBFF" />
                <rect x="18" y="89" width="28" height="13" rx="6" fill="var(--primary-deep)" />
                <rect x="62" y="18" width="124" height="94" rx="6" fill="#fff" stroke="var(--primary-dark)" strokeWidth="1.4" />
                <rect x="68" y="26" width="60" height="10" rx="2" fill="var(--primary-dark)" />
                <rect x="134" y="26" width="34" height="10" rx="5" fill="var(--primary)" />
                <rect x="68" y="42" width="64" height="44" rx="4" fill="#EFEBFF" />
                <rect x="138" y="42" width="42" height="20" rx="4" fill="#EFEBFF" />
                <rect x="138" y="66" width="42" height="20" rx="4" fill="#EFEBFF" />
                <rect x="68" y="92" width="48" height="14" rx="3" fill="var(--primary-deep)" />
                <rect x="122" y="92" width="58" height="14" rx="3" fill="rgba(48,28,125,0.12)" />
              </svg>
            )}
            {num === "F-05" && (
              <svg viewBox="0 0 200 130" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
                <g transform="translate(100 28) skewX(-30)">
                  <rect x="-40" y="-7" width="80" height="14" rx="2" fill="#A78FFF" />
                </g>
                <g transform="translate(100 50) skewX(-30)">
                  <rect x="-40" y="-7" width="80" height="14" rx="2" fill="#fff" stroke="rgba(48,28,125,0.18)" strokeWidth="0.8" />
                </g>
                <g transform="translate(100 72) skewX(-30)">
                  <rect x="-40" y="-7" width="80" height="14" rx="2" fill="#fff" stroke="rgba(48,28,125,0.18)" strokeWidth="0.8" />
                </g>
                <g transform="translate(100 94) skewX(-30)">
                  <rect x="-40" y="-7" width="80" height="14" rx="2" fill="var(--primary-dark)" />
                </g>
                <line x1="148" y1="44" x2="148" y2="78" stroke="rgba(48,28,125,0.6)" strokeWidth="0.8" strokeDasharray="1.5 2" />
                <path d="M 145 78 L 148 82 L 151 78" fill="none" stroke="rgba(48,28,125,0.6)" strokeWidth="0.8" />
              </svg>
            )}
            {num === "F-06" && (
              <svg viewBox="0 0 200 130" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
                <rect x="14" y="44" width="40" height="42" rx="0" fill="#A78FFF" />
                <rect x="60" y="44" width="40" height="42" rx="4" fill="var(--primary)" />
                <rect x="106" y="44" width="40" height="42" rx="12" fill="var(--primary-deep)" />
                <rect x="152" y="44" width="40" height="42" rx="21" fill="var(--primary-dark)" />
              </svg>
            )}
          </div>
          <div className="fc-body">
            <div className="fc-row">
              <h3 className="fc-name">{name}</h3>
              <span className="fc-chip">{num}</span>
            </div>
            <p className="fc-desc">{desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function App() {
  const { toasts, push } = useToasts();
  const stub = (n) => push(`${n}, page coming soon`);

  return (
    <>
      <Navbar onStub={stub} />
      <main className="fnd-page">
        <header className="mbys-header">
          <div className="container">
            <div className="mbys-crumb">
              <a href="index.html">Home</a>
              <span className="sep">/</span>
              <span className="current">Foundations</span>
            </div>
            <h1 className="mbys-title">Foundations</h1>
            <p className="mbys-contrib" style={{ margin: 0 }}>
              <span className="org" style={{ fontWeight: 400, color: "var(--gray-700)", fontSize: 18, lineHeight: 1.5 }}>
                The shared visual language behind every UX4G component. Colour, typography, spacing and structure — defined once, applied everywhere.
              </span>
            </p>
          </div>
        </header>

        <section className="fnd-grid-wrap">
          <div className="container">
            <FoundationGrid stub={stub} />
          </div>
        </section>

      </main>

      <SiteFooter />
      <Toasts items={toasts} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
