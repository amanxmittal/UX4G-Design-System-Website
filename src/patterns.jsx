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
function Navbar() {
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

const GROUPS = [
  { num: "P-01", name: "Identity & Access",        desc: "Sign in, sign up, OTP verification, session management, account recovery, and authentication error states.",  short: "Sign in, verify, and recover accounts.", href: "UX4G Identity & Access.html",        count: "8 patterns", live: true, thumb: "identity",    image: "assets/images/Identity & Access.png" },
  { num: "P-02", name: "Consent & Declaration",    desc: "DPDP-compliant consent capture, data-sharing transparency, and the declaration step before any submission.",     short: "DPDP consent capture and declarations.", href: "UX4G Consent.html",                  count: "3 patterns", live: true, thumb: "consent",     image: "assets/images/Consent & Declaration.png" },
  { num: "P-03", name: "Application & Submission", desc: "Eligibility checks, form journeys, DigiLocker uploads, save-and-resume drafts, and submission acknowledgements.",   short: "Form journeys, uploads and acknowledgements.", href: "UX4G Application.html",              count: "6 patterns", live: true, thumb: "application", image: "assets/images/Application & Submission.png" },
  { num: "P-04", name: "Status & Tracking",        desc: "Application status with SLA, grievance escalation paths, and inspection slot scheduling — all citizen-aware.",     short: "Track applications, SLAs and escalations.", href: "UX4G Status & Tracking.html",        count: "3 patterns", live: true, thumb: "status",      image: "assets/images/Status & Tracking.png" },
  { num: "P-05", name: "Payment & Transactions",   desc: "PayGov-backed fee payment with UPI / Net Banking / Card / CSC, auto fee-waivers, and recoverable failures.",        short: "Fee payment across UPI, cards and CSC.", href: "UX4G Payments.html",                 count: "1 pattern · 9 frames", live: true, thumb: "payment", image: "assets/images/Payment & Transactions.png" },
  { num: "P-06", name: "Search & Discovery",       desc: "Find services by name or browse by ministry. Bi-lingual search, personalised recommendations, consultation booking.", short: "Find services by name or by ministry.", href: "UX4G Search & Discovery.html",       count: "3 patterns", live: true, thumb: "search",      image: "assets/images/Search & Discovery.png" },
  { num: "P-07", name: "Dashboard & Applications", desc: "The signed-in citizen's home — My Applications, Pending Tasks, Profile, and notification preferences.",              short: "The signed-in citizen's home base.", href: "UX4G Dashboard.html",                count: "3 patterns", live: true, thumb: "dashboard",   image: "assets/images/Dashboard & My applications.png" },
  { num: "P-08", name: "Notifications",            desc: "Notification centre, SMS/Email/WhatsApp templates, real-time push, reminder sequences, and granular preferences.",   short: "Notification centre and message templates.", href: "UX4G Notifications.html",            count: "5 patterns", live: true, thumb: "notify",      image: "assets/images/Notifications.png" },
  { num: "P-09", name: "Feedback & Communication", desc: "Inline feedback, post-service rating, help-centre and contact paths, plus the 22-language switcher.",                short: "Ratings, help centre and language switch.", href: "UX4G Feedback.html",                 count: "4 patterns", live: true, thumb: "feedback",    image: "assets/images/Feedback & Communication.png" },
];

const CONTAINS = [
  { g: "01", n: "Screen flows",         d: "The complete sequence of screens a citizen moves through, end to end." },
  { g: "02", n: "Component references", d: "Which UX4G components make up each screen, drop-in ready, not redrawn." },
  { g: "03", n: "Edge cases",           d: "How to handle errors, timeouts, offline states, and authentication failures." },
  { g: "04", n: "Do's & Don'ts",        d: "What to replicate from the pattern, and what to avoid when adapting it." },
];

/* ───────────────── Pattern category visuals ─────────────────
   Each card's PNG thumbnail recreated as a vector: the main hero element of
   the original illustration only, in the UX4G primary-led palette. Every card
   carries one amber accent, but on a DIFFERENT, category-meaningful element
   each time (keyhole, checks, upload arrow, progress ring, card chip, lens
   handle, donut segment, unread dot, rating star) so the set never reads as a
   template. pv-* classes animate on card hover (keyframes in patterns.css). */
const PATTERN_VISUALS = {
  identity: (
    <svg viewBox="0 0 200 120" fill="none" aria-hidden="true">
      <g className="pv-float">
        <path d="M100 18 L138 32 V62 C138 84 122 98 100 106 C78 98 62 84 62 62 V32 Z" fill="var(--ux4g-color-primary-100)" stroke="var(--primary)" strokeWidth="2.6" strokeLinejoin="round"/>
        <path d="M100 28 L128 38 V62 C128 78 116 89 100 95 C84 89 72 78 72 62 V38 Z" fill="#fff" stroke="var(--ux4g-color-primary-200)" strokeWidth="1.6" strokeLinejoin="round"/>
        <g className="pv-pulse">
          <circle cx="100" cy="58" r="10" fill="var(--amber)"/>
          <path d="M100 58 L93 80 H107 Z" fill="var(--amber)"/>
        </g>
      </g>
    </svg>
  ),
  consent: (
    <svg viewBox="0 0 200 120" fill="none" aria-hidden="true">
      <path d="M58 12 H120 L140 32 V108 H58 Z" fill="#fff" stroke="var(--primary)" strokeWidth="2.4" strokeLinejoin="round"/>
      <path d="M120 12 V32 H140" fill="var(--ux4g-color-primary-100)" stroke="var(--primary)" strokeWidth="2.4" strokeLinejoin="round"/>
      <g className="pv-row pv-row-1">
        <path className="pv-tick" d="M70 47 L75 52.5 L84 41.5" stroke="var(--amber)" strokeWidth="3.4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="92" y="44.5" width="34" height="5" rx="2.5" fill="var(--ux4g-color-primary-200)"/>
      </g>
      <g className="pv-row pv-row-2">
        <path className="pv-tick" d="M70 69 L75 74.5 L84 63.5" stroke="var(--amber)" strokeWidth="3.4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="92" y="66.5" width="34" height="5" rx="2.5" fill="var(--ux4g-color-primary-200)"/>
      </g>
      <g className="pv-row pv-row-3">
        <path className="pv-tick" d="M70 91 L75 96.5 L84 85.5" stroke="var(--amber)" strokeWidth="3.4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="92" y="88.5" width="26" height="5" rx="2.5" fill="var(--ux4g-color-primary-200)"/>
      </g>
    </svg>
  ),
  application: (
    <svg viewBox="0 0 200 120" fill="none" aria-hidden="true">
      <rect x="52" y="28" width="60" height="78" rx="5" fill="#fff" stroke="var(--ux4g-color-primary-200)" strokeWidth="2"/>
      <rect x="60" y="22" width="60" height="78" rx="5" fill="#fff" stroke="var(--ux4g-color-primary-200)" strokeWidth="2"/>
      <g className="pv-float">
        <path d="M68 14 H110 L128 32 V96 H68 Z" fill="#fff" stroke="var(--primary)" strokeWidth="2.4" strokeLinejoin="round"/>
        <path d="M110 14 V32 H128" fill="var(--ux4g-color-primary-100)" stroke="var(--primary)" strokeWidth="2.4" strokeLinejoin="round"/>
        <rect x="78" y="44" width="30" height="11" rx="3" fill="var(--ux4g-color-primary-200)"/>
        <rect x="78" y="63" width="42" height="4.5" rx="2.25" fill="var(--ux4g-color-primary-100)"/>
        <rect x="78" y="73" width="34" height="4.5" rx="2.25" fill="var(--ux4g-color-primary-100)"/>
        <rect x="78" y="83" width="38" height="4.5" rx="2.25" fill="var(--ux4g-color-primary-100)"/>
      </g>
      <path d="M127 104 H149" stroke="var(--amber)" strokeWidth="6" strokeLinecap="round"/>
      <g className="pv-arrow-up">
        <path d="M138 96 V69" stroke="var(--amber)" strokeWidth="6" strokeLinecap="round"/>
        <path d="M127 80 L138 68 L149 80" stroke="var(--amber)" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </svg>
  ),
  status: (
    <svg viewBox="0 0 200 120" fill="none" aria-hidden="true">
      <circle cx="100" cy="58" r="42" fill="none" stroke="var(--ux4g-color-primary-100)" strokeWidth="3"/>
      <circle cx="100" cy="58" r="30" fill="none" stroke="var(--ux4g-color-primary-100)" strokeWidth="3"/>
      <circle className="pv-arc" cx="100" cy="58" r="42" fill="none" stroke="var(--amber)" strokeWidth="5" strokeLinecap="round" strokeDasharray="196 264"/>
      <circle cx="100" cy="58" r="19" fill="#fff" stroke="var(--ux4g-color-primary-200)" strokeWidth="1.6"/>
      <path d="M91 58 L98 65 L110 50" stroke="var(--primary-deep)" strokeWidth="3.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  payment: (
    <svg viewBox="0 0 200 120" fill="none" aria-hidden="true">
      <rect x="56" y="22" width="96" height="60" rx="9" fill="var(--ux4g-color-primary-100)" stroke="var(--ux4g-color-primary-200)" strokeWidth="2"/>
      <g className="pv-float">
        <rect x="44" y="38" width="96" height="60" rx="9" fill="#fff" stroke="var(--primary)" strokeWidth="2.4"/>
        <g className="pv-pulse">
          <rect x="54" y="50" width="21" height="16" rx="3.5" fill="var(--amber)"/>
          <path d="M64.5 50 V66 M54 58 H75" stroke="var(--amber-ink)" strokeWidth="1.3" opacity="0.5"/>
        </g>
        <rect x="54" y="77" width="22" height="5" rx="2.5" fill="var(--ux4g-color-primary-200)"/>
        <rect x="82" y="77" width="22" height="5" rx="2.5" fill="var(--ux4g-color-primary-200)"/>
        <rect x="110" y="77" width="22" height="5" rx="2.5" fill="var(--ux4g-color-primary-200)"/>
      </g>
    </svg>
  ),
  search: (
    <svg viewBox="0 0 200 120" fill="none" aria-hidden="true">
      <rect x="30" y="32" width="122" height="30" rx="15" fill="#fff" stroke="var(--ux4g-color-primary-200)" strokeWidth="2"/>
      <rect className="pv-query" x="42" y="44" width="44" height="6" rx="3" fill="var(--amber)"/>
      <g className="pv-lens">
        <line x1="132" y1="72" x2="152" y2="94" stroke="var(--primary)" strokeWidth="7" strokeLinecap="round"/>
        <circle cx="116" cy="56" r="25" fill="rgba(106,78,255,0.06)" stroke="var(--primary)" strokeWidth="5"/>
      </g>
    </svg>
  ),
  dashboard: (
    <svg viewBox="0 0 200 120" fill="none" aria-hidden="true">
      <rect x="36" y="12" width="128" height="96" rx="8" fill="#fff" stroke="var(--primary)" strokeWidth="2.4"/>
      <line x1="36" y1="30" x2="164" y2="30" stroke="var(--ux4g-color-primary-200)" strokeWidth="1.6"/>
      <circle cx="47" cy="21" r="2.4" fill="var(--ux4g-color-primary-300)"/>
      <circle cx="56" cy="21" r="2.4" fill="var(--ux4g-color-primary-300)"/>
      <circle cx="65" cy="21" r="2.4" fill="var(--ux4g-color-primary-300)"/>
      <circle cx="58" cy="50" r="10" fill="var(--ux4g-color-primary-200)"/>
      <rect x="74" y="44" width="34" height="5" rx="2.5" fill="var(--ux4g-color-primary-200)"/>
      <rect x="74" y="54" width="24" height="4.5" rx="2.25" fill="var(--ux4g-color-primary-100)"/>
      <circle cx="135" cy="51" r="14" fill="none" stroke="var(--ux4g-color-primary-100)" strokeWidth="7"/>
      <circle cx="135" cy="51" r="14" fill="none" stroke="var(--primary)" strokeWidth="7" strokeLinecap="round" strokeDasharray="54 88" transform="rotate(-90 135 51)"/>
      <rect className="pv-bar-light pv-bar-light-1" x="48" y="72" width="62" height="12" rx="3" fill="var(--ux4g-color-primary-100)"/>
      <rect className="pv-bar-amber pv-bar-amber-1" x="116" y="72" width="36" height="12" rx="3" fill="var(--amber)"/>
      <rect className="pv-bar-light pv-bar-light-2" x="48" y="90" width="70" height="12" rx="3" fill="var(--ux4g-color-primary-100)"/>
      <rect className="pv-bar-amber pv-bar-amber-2" x="124" y="90" width="28" height="12" rx="3" fill="var(--amber)"/>
    </svg>
  ),
  notify: (
    <svg viewBox="0 0 200 120" fill="none" aria-hidden="true">
      <path className="pv-wave pv-wave-l" d="M60 38 A30 30 0 0 0 60 80" fill="none" stroke="var(--ux4g-color-primary-200)" strokeWidth="3" strokeLinecap="round"/>
      <path className="pv-wave pv-wave-r" d="M140 38 A30 30 0 0 1 140 80" fill="none" stroke="var(--ux4g-color-primary-200)" strokeWidth="3" strokeLinecap="round"/>
      <g className="pv-bell">
        <circle cx="100" cy="16" r="5" fill="var(--primary)"/>
        <path d="M100 21 C84 21 76 33 76 50 C76 68 70 78 65 84 H135 C130 78 124 68 124 50 C124 33 116 21 100 21 Z" fill="var(--ux4g-color-primary-100)" stroke="var(--primary)" strokeWidth="2.8" strokeLinejoin="round"/>
        <path d="M90 84 A10 10 0 0 0 110 84" fill="none" stroke="var(--primary)" strokeWidth="2.8" strokeLinecap="round"/>
      </g>
      <circle className="pv-ping" cx="125" cy="29" r="9" fill="var(--amber)" stroke="#fff" strokeWidth="3.4"/>
    </svg>
  ),
  feedback: (
    <svg viewBox="0 0 200 120" fill="none" aria-hidden="true">
      <path d="M88 14 H162 A8 8 0 0 1 170 22 V48 A8 8 0 0 1 162 56 H122 L112 67 V56 H88 A8 8 0 0 1 80 48 V22 A8 8 0 0 1 88 14 Z" fill="var(--ux4g-color-primary-100)" stroke="var(--ux4g-color-primary-200)" strokeWidth="2"/>
      <circle className="pv-dot pv-dot-1" cx="112" cy="35" r="3.8" fill="var(--primary)"/>
      <circle className="pv-dot pv-dot-2" cx="125" cy="35" r="3.8" fill="var(--primary)"/>
      <circle className="pv-dot pv-dot-3" cx="138" cy="35" r="3.8" fill="var(--primary)"/>
      <path d="M40 40 H106 A9 9 0 0 1 115 49 V79 A9 9 0 0 1 106 88 H74 L62 100 V88 H40 A9 9 0 0 1 31 79 V49 A9 9 0 0 1 40 40 Z" fill="#fff" stroke="var(--primary)" strokeWidth="2.4"/>
      <rect x="46" y="55" width="52" height="5" rx="2.5" fill="var(--ux4g-color-primary-200)"/>
      <rect x="46" y="66" width="38" height="5" rx="2.5" fill="var(--ux4g-color-primary-100)"/>
      <path className="pv-star" d="M150 64 L154.1 75.3 L166.2 75.8 L156.7 83.2 L160 94.8 L150 88 L140 94.8 L143.3 83.2 L133.8 75.8 L145.9 75.3 Z" fill="var(--amber)"/>
    </svg>
  ),
};

function App() {
  const { toasts, push } = useToasts();
  const stub = (n) => push(`${n}, page coming soon`);

  return (
    <>
      <Navbar onStub={stub} />
      <main className="pt-page">
        <section className="pt-header">
          <div className="container">
            <div className="pt-crumb">
              <a href="index.html">Home</a>
              <span className="sep">/</span>
              <span className="current">Patterns</span>
            </div>
            <div className="pt-title-row">
              <h1 className="pt-h">Patterns</h1>
              <p className="pt-desc">
                Patterns combine components into proven solutions for recurring government service challenges. Use them to design consistent citizen journeys without starting from scratch.
              </p>
            </div>
          </div>
        </section>

        <section className="pt-grid-wrap">
          <div className="container">
            <div className="pt-grid">
              {GROUPS.map((g) => (
                <div key={g.num}
                     className={"pcard " + (g.live ? "live" : "soon")}
                    
                     onClick={() => g.href ? (window.location.href = g.href) : stub(g.name)}>
                  <div className="pc-panel">
                    <div className="pc-art">{PATTERN_VISUALS[g.thumb]}</div>
                    <div className="pc-titlebar">
                      <h3 className="pc-name">{g.name}</h3>
                      <span className="pc-chip count">{g.count}</span>
                    </div>
                  </div>
                  <p className="pc-desc">{g.short}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


      </main>

      <SiteFooter />
      <Toasts items={toasts} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
