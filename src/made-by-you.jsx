/* global React, ReactDOM */
const { useState, useCallback, useEffect } = React;

/* ─────────────── Hero visual: "UX" tetris-block assembly ─────────────── */
const UX_CELL = 44;
const UX_COLS = 14;
const UX_LETTER_ROWS = 6;

/* Block letters on a 14-wide grid — U cols 0-5, single-column gap, X cols 7-13. */
const U_PATTERN = [
  "XX..XX",
  "XX..XX",
  "XX..XX",
  "XX..XX",
  "XX..XX",
  "XXXXXX",
];
const X_PATTERN = [
  "XX...XX",
  ".XX.XX.",
  "..XXX..",
  "..XXX..",
  ".XX.XX.",
  "XX...XX",
];
const X_COL_OFFSET = 7;

/* Six pieces lifted from the finished word — together they remove ~60% of cells so
   the initial gapped state is unreadable as "UX". They fall one by one, revealing
   the letters as the last piece locks into place. */
const PIECES = [
  /* P0 — O-block · top of U left pillar */
  [{ r: 0, c: 0 }, { r: 0, c: 1 }, { r: 1, c: 0 }, { r: 1, c: 1 }],
  /* P1 — 2×3 block · right pillar of U, top half */
  [{ r: 0, c: 4 }, { r: 0, c: 5 }, { r: 1, c: 4 }, { r: 1, c: 5 }, { r: 2, c: 4 }, { r: 2, c: 5 }],
  /* P2 — L-shape · lower-left + base of U */
  [{ r: 4, c: 0 }, { r: 4, c: 1 }, { r: 5, c: 0 }, { r: 5, c: 1 }, { r: 5, c: 2 }, { r: 5, c: 3 }],
  /* P3 — S-shape · upper-left arm of X */
  [{ r: 0, c: 7 }, { r: 0, c: 8 }, { r: 1, c: 8 }, { r: 1, c: 9 }],
  /* P4 — 2×3 block · centre cross of X */
  [{ r: 2, c: 9 }, { r: 2, c: 10 }, { r: 2, c: 11 }, { r: 3, c: 9 }, { r: 3, c: 10 }, { r: 3, c: 11 }],
  /* P5 — O-block · lower-right arm of X (lands last) */
  [{ r: 4, c: 11 }, { r: 4, c: 12 }, { r: 5, c: 12 }, { r: 5, c: 13 }],
];

function buildUXLetterCells() {
  const cells = [];
  U_PATTERN.forEach((row, r) =>
    [...row].forEach((ch, c) => { if (ch === "X") cells.push({ r, c }); }));
  X_PATTERN.forEach((row, r) =>
    [...row].forEach((ch, c) => { if (ch === "X") cells.push({ r, c: c + X_COL_OFFSET }); }));
  return cells;
}
const UX_ALL_CELLS = buildUXLetterCells();
const UX_HOLE_KEYS = new Set(PIECES.flat().map((c) => c.r + "-" + c.c));
const UX_STATIC_CELLS = UX_ALL_CELLS.filter((c) => !UX_HOLE_KEYS.has(c.r + "-" + c.c));

function TetrisGrid() {
  const [phase, setPhase] = useState("idle");
  const gridRef = React.useRef(null);

  /* Size the hero visual to the UX board plus headroom for pieces to drop in. */
  useEffect(() => {
    const grid = gridRef.current;
    const visual = grid && grid.parentElement;
    if (!visual) return;
    visual.style.setProperty("--tetris-cols", String(UX_COLS));
    visual.style.setProperty("--tetris-rows", String(UX_LETTER_ROWS + 4));
  }, []);

  /* Loop: idle (gaps) -> drop (pieces fall, amber) -> settled (turn purple)
     -> shimmer -> hold -> dissolve (fade away) -> repeat. */
  useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setPhase("hold"); return; }
    let timer;
    const steps = [
      { ms: 900,  phase: "idle" },     // show the gaps — hard to read "UX"
      { ms: 1500, phase: "drop" },     // 6 pieces fall in staggered (last at ~1220ms)
      { ms: 520,  phase: "settled" },  // all landed -> turn purple
      { ms: 1450, phase: "shimmer" },  // shimmer sweep across the word
      { ms: 1250, phase: "hold" },     // hold the complete word
      { ms: 640,  phase: "dissolve" }, // pieces dissolve away
    ];
    let i = 0;
    const tick = () => {
      const step = steps[i % steps.length];
      setPhase(step.phase);
      i += 1;
      timer = setTimeout(tick, step.ms);
    };
    tick();
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={"v3-ux is-" + phase}
      ref={gridRef}
      aria-hidden="true"
      style={{ "--ux-cell": UX_CELL + "px", "--ux-cols": UX_COLS, "--ux-rows": UX_LETTER_ROWS }}
    >
      <div className="v3-ux-board">
        {/* Static letter blocks */}
        {UX_STATIC_CELLS.map(({ r, c }) => (
          <div
            key={"s" + r + "-" + c}
            className="v3-ux-cell"
            style={{ left: c * UX_CELL, top: r * UX_CELL, "--d": r + c }}
          />
        ))}
        {/* Six falling pieces — each drops with a staggered delay */}
        {PIECES.map((cells, i) => (
          <div key={"piece-" + i} className={"v3-ux-piece v3-ux-piece--" + i}>
            {cells.map(({ r, c }) => (
              <div
                key={r + "-" + c}
                className="v3-ux-cell is-fill"
                style={{ left: c * UX_CELL, top: r * UX_CELL, "--d": r + c }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────── Toasts ─────────────── */
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

/* ─────────────── Site Navbar (matches every other page) ─────────────── */
function Navbar() {
  const links = [
    { l: "Foundations",  href: "UX4G Foundations.html" },
    { l: "Fundamentals", href: "UX4G Fundamentals.html" },
    { l: "Components",   href: "UX4G Components.html" },
    { l: "Patterns",     href: "UX4G Patterns.html" },
    { l: "Made by You",  href: "UX4G Made by You.html" },
  ];
  return (
    <SiteNavbar />
  );
}

/* ─────────────── Inline icons ─────────────── */
const TypeIcon = {
  component: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.5"/>
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.5"/>
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.5"/>
      <rect x="13.5" y="13.5" width="7" height="7" rx="1.5"/>
    </svg>
  ),
  pattern: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3 3 7.5l9 4.5 9-4.5L12 3z"/>
      <path d="m3 12 9 4.5 9-4.5"/>
      <path d="m3 16.5 9 4.5 9-4.5"/>
    </svg>
  ),
  flow: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="5.5" cy="6" r="2.5"/>
      <circle cx="18.5" cy="6" r="2.5"/>
      <circle cx="12" cy="18" r="2.5"/>
      <path d="M8 6h8"/>
      <path d="M6.8 8.2 10.6 15.7"/>
      <path d="M17.2 8.2 13.4 15.7"/>
    </svg>
  ),
};

const Icon = {
  arrow: <span className="i-arrow" aria-hidden="true">→</span>,
  external: (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 3h7v7"/><path d="M13 3 6.5 9.5"/><path d="M11 9.5V13H3V5h3.5"/>
    </svg>
  ),
  figma: (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M5.5 1.5h2v4h-2a2 2 0 010-4z" fill="currentColor"/>
      <path d="M7.5 1.5h2a2 2 0 010 4h-2v-4z" fill="currentColor" opacity="0.7"/>
      <path d="M5.5 5.5h2v4h-2a2 2 0 010-4z" fill="currentColor" opacity="0.5"/>
      <path d="M7.5 5.5h2a2 2 0 010 4h-2v-4z" fill="currentColor" opacity="0.3"/>
      <circle cx="8.5" cy="11.5" r="2" fill="currentColor" opacity="0.5"/>
    </svg>
  ),
  code: (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m5 11-3-3 3-3"/><path d="m11 5 3 3-3 3"/><path d="M9 3.5 7 12.5"/>
    </svg>
  ),
  docs: (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 2h6l3 3v9H4z"/><path d="M10 2v3h3"/><path d="M6 8.5h5M6 11h4"/>
    </svg>
  ),
  build: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 20h16"/><path d="M6 20V9l6-4 6 4v11"/><path d="M10 20v-6h4v6"/>
    </svg>
  ),
  share: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/>
      <path d="m8.2 11 7.6-4M8.2 13l7.6 4"/>
    </svg>
  ),
  review: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3 4.5 6v6c0 4.5 3.2 7.8 7.5 9 4.3-1.2 7.5-4.5 7.5-9V6L12 3z"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>
  ),
};

/* Placeholder portal screenshot — striped SVG with name centred */
function PortalThumb({ gradient }) {
  return (
    <div className="portal-thumb">
      <div className="thumb-frame">
        <div className="thumb-chrome">
          <span></span><span></span><span></span>
          <em>gov.in</em>
        </div>
        <div className="thumb-body" style={{ background: gradient }}></div>
      </div>
    </div>
  );
}

function SolutionVisual({ id, type }) {
  const visuals = {
    "Pension Eligibility Stepper": (
      <div className="sv-stepper">
        <div className="sv-track"><div className="sv-fill" style={{ width: "55%" }}></div></div>
        <div className="sv-dots">
          <span className="d done">1</span>
          <span className="d done">2</span>
          <span className="d on">3</span>
          <span className="d">4</span>
        </div>
        <div className="sv-labels">
          <span>Identity</span><span>Income</span><span className="hot">Eligibility</span><span>Seed</span>
        </div>
      </div>
    ),
    "Multilingual Form Reset": (
      <div className="sv-reset">
        <div className="sv-modal">
          <div className="sv-modal-head">
            <span className="sv-warn">!</span>
            <span className="sv-lang">हिंदी · EN</span>
          </div>
          <div className="sv-modal-body">
            <div className="sv-line w70"></div>
            <div className="sv-line w90"></div>
          </div>
          <div className="sv-modal-actions">
            <span className="sv-btn ghost">रद्द करें</span>
            <span className="sv-btn danger">Reset form</span>
          </div>
        </div>
      </div>
    ),
    "Doorstep Service Tracker": (
      <div className="sv-tracker">
        <div className="sv-pipeline">
          <span className="n done">✓</span><span className="bar done"></span>
          <span className="n done">✓</span><span className="bar done"></span>
          <span className="n on">●</span><span className="bar"></span>
          <span className="n">·</span>
        </div>
        <div className="sv-pipeline-labels">
          <span>Booked</span><span>Picked</span><span className="hot">Out for delivery</span><span>Delivered</span>
        </div>
        <div className="sv-sms">SMS · Out for delivery · PIN 110011</div>
      </div>
    ),
    "Aadhaar-Seed Reminder": (
      <div className="sv-nudge">
        <span className="sv-nudge-ic">⊕</span>
        <div className="sv-nudge-body">
          <div className="sv-line w80"></div>
          <div className="sv-line w60 sm"></div>
        </div>
        <span className="sv-nudge-close">×</span>
        <span className="sv-nudge-cta">Seed Aadhaar →</span>
      </div>
    ),
    "Crop Status Pipeline": (
      <div className="sv-crop">
        <div className="sv-seasons">
          <span className="season on">Kharif</span>
          <span className="season">Rabi</span>
        </div>
        <div className="sv-pipeline">
          <span className="n done">✓</span><span className="bar done"></span>
          <span className="n done">✓</span><span className="bar done"></span>
          <span className="n on">●</span><span className="bar"></span>
          <span className="n">·</span>
        </div>
        <div className="sv-pipeline-labels">
          <span>Sown</span><span>Inspected</span><span className="hot">Insured</span><span>Paid</span>
        </div>
      </div>
    ),
    "Grievance Escalation Map": (
      <div className="sv-tree">
        <div className="sv-tier">
          <span className="tier-n">L1</span>
          <span className="tier-name">Block Officer</span>
          <span className="tier-bar"></span>
        </div>
        <div className="sv-tier hot">
          <span className="tier-n">L2</span>
          <span className="tier-name">District Magistrate</span>
          <span className="tier-bar on"></span>
        </div>
        <div className="sv-tier">
          <span className="tier-n">L3</span>
          <span className="tier-name">State Nodal Officer</span>
          <span className="tier-bar"></span>
        </div>
      </div>
    ),
  };
  return (
    <div className="sol-visual">
      {visuals[id] || <div className="sv-default"></div>}
    </div>
  );
}

/* ─────────────── Page data ─────────────── */
const ATTR_TAGS = [
  "Browse & Reuse",
  "Community-owned",
  "UX4G-reviewed",
  "Always growing",
  "Figma",
  "Code",
  "Docs",
];

const PORTALS = [
  { name: "PM-KISAN Samman Nidhi", org: "Ministry of Agriculture & Farmers' Welfare", scope: "central", tone: "warm",
    gradient: "linear-gradient(140deg, #FFF8E7 0%, #FFE9B0 55%, #FFD87A 100%)" },
  { name: "MyScheme · Citizen Discovery", org: "National e-Governance Division, MeitY", scope: "central", tone: "cool",
    gradient: "linear-gradient(140deg, #EEF2FF 0%, #D8E5FF 55%, #C0D2FF 100%)" },
  { name: "Karnataka Seva Sindhu", org: "Department of e-Governance · Karnataka", scope: "state", tone: "warm",
    gradient: "linear-gradient(140deg, #FFF0E8 0%, #FFD9C0 55%, #FFC5A0 100%)" },
  { name: "UP Bhulekh · Land Records", org: "Revenue Department · Uttar Pradesh", scope: "state", tone: "cool",
    gradient: "linear-gradient(140deg, #E3F7F5 0%, #C0EDE8 55%, #9EDFD9 100%)" },
  { name: "eShram · Unorganised Workers", org: "Ministry of Labour & Employment", scope: "central", tone: "cool",
    gradient: "linear-gradient(140deg, #F2EEFF 0%, #DDD0FF 55%, #C8B8FF 100%)" },
  { name: "TN e-Sevai · Citizen Services", org: "Department of IT · Tamil Nadu", scope: "state", tone: "warm",
    gradient: "linear-gradient(140deg, #FFF0F5 0%, #FFD6E5 55%, #FFC0D4 100%)" },
];

const QUOTES = [
  {
    body: "We were about to build a custom OTP flow for our grievance portal. Found the pattern in UX4G, adapted it in a day. Saved us at least two weeks of design and review cycles.",
    name: "Priya Nair", role: "Product Designer", org: "Ministry of Agriculture & Farmers' Welfare",
  },
  {
    body: "The accessibility checklist alone changed how our team works. We used to ship and patch. Now we test with NVDA and Hindi voiceover before review. The shared scorecard makes it easy for non-designers too.",
    name: "Vikram Sinha", role: "Technical Lead", org: "UP State Government",
  },
  {
    body: "Our portal lists rural housing schemes across eight districts. Borrowing the Made by You status-pipeline component meant our citizens see the same progress UI they recognise from PM-KISAN. Less explaining, more applying.",
    name: "Anjali Deshmukh", role: "Senior UX Researcher", org: "Ministry of Rural Development",
  },
];

const SOLUTIONS = [
  { name: "Pension Eligibility Stepper", org: "Ministry of Rural Development", type: "pattern",
    desc: "A 4-step eligibility checker for NSAP old-age and widow pensions, with inline rule explanations.",
    formats: ["figma", "code", "docs"] },
  { name: "Multilingual Form Reset", org: "Income Tax Department", type: "component",
    desc: "A reset control that warns in the user's selected language before clearing a long form.",
    formats: ["figma", "code"] },
  { name: "Doorstep Service Tracker", org: "Department of Posts", type: "flow",
    desc: "Map, status pipeline and SMS-fallback acknowledgements for India Post doorstep services.",
    formats: ["figma", "docs"] },
  { name: "Aadhaar-Seed Reminder", org: "UIDAI · Ministry of Electronics & IT", type: "component",
    desc: "A gentle, dismissible nudge prompting citizens to seed their Aadhaar to a benefit account.",
    formats: ["figma", "code", "docs"] },
  { name: "Crop Status Pipeline", org: "Ministry of Agriculture & Farmers' Welfare", type: "pattern",
    desc: "Kharif/Rabi season-aware status timeline for PM-KISAN and crop-insurance applications.",
    formats: ["figma", "docs"] },
  { name: "Grievance Escalation Map", org: "Department of Administrative Reforms", type: "flow",
    desc: "Visualises CPGRAMS escalation hierarchy across districts so citizens know who handles their case next.",
    formats: ["docs"] },
];

const STEPS = [
  { n: "01", title: "Build",
    body: "Your team designs a solution for your service using UX4G — a portal, a component, a pattern or a flow.",
    icon: Icon.build },
  { n: "02", title: "Share",
    body: "Submit your work along with supporting Figma files, code snippets or written documentation — whichever you have.",
    icon: Icon.share },
  { n: "03", title: "Review & list",
    body: "The UX4G core team reviews against accessibility, fit and quality. Accepted work gets listed here for every team to find and reuse.",
    icon: Icon.review, reviewed: true },
];

const CRITERIA = [
  { n: "01", name: "Solves a real service problem",
    body: "It addresses a genuine, recurring UX challenge in a government service that isn't already covered by UX4G core." },
  { n: "02", name: "Works across the journey",
    body: "It handles the full citizen journey it targets — not just the happy path. Empty, loading, error and edge states are considered." },
  { n: "03", name: "Comes with documentation",
    body: "States, edge cases and usage guidance are written down. Other teams can pick it up without DMing the original author." },
  { n: "04", name: "Accessible by default",
    body: "Meets WCAG 2.1 AA minimum — keyboard-navigable, screen-reader announced, and tested with at least one Indic script." },
];

/* ─────────────── Hero trust marquee ───────────────
   Placeholder lockups for teams/departments/ministries that have worked with
   UX4G. Each mark is a distinct geometric shape so the strip reads as a wall
   of separate organisations — swap in real logos when available. */
const MARQUEE_LOGOS = [
  { name: "Department", mark: (
    <svg viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="1.8"/><circle cx="14" cy="14" r="4.6" fill="currentColor"/></svg>
  ) },
  { name: "State Authority", mark: (
    <svg viewBox="0 0 28 28" fill="none"><path d="M14 2.6 L24 8.5 V19.5 L14 25.4 L4 19.5 V8.5 Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg>
  ) },
  { name: "Civic Board", mark: (
    <svg viewBox="0 0 28 28" fill="none"><rect x="3" y="3" width="22" height="22" rx="6.5" fill="currentColor"/><path d="M9 19 L19 9" stroke="#fff" strokeWidth="2.6" strokeLinecap="round"/></svg>
  ) },
  { name: "Nodal Ministry", mark: (
    <svg viewBox="0 0 28 28" fill="none"><path d="M14 3 L23 6.6 V14 C23 20 19.2 24 14 25.6 C8.8 24 5 20 5 14 V6.6 Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg>
  ) },
  { name: "Urban Council", mark: (
    <svg viewBox="0 0 28 28" fill="none"><path d="M14 3.5 L23 11 H5 Z" fill="currentColor"/><path d="M14 13.8 L23 21.3 H5 Z" fill="currentColor" opacity="0.5"/></svg>
  ) },
  { name: "Public Agency", mark: (
    <svg viewBox="0 0 28 28" fill="none"><circle cx="10.6" cy="14" r="8.2" stroke="currentColor" strokeWidth="1.8"/><circle cx="17.4" cy="14" r="8.2" stroke="currentColor" strokeWidth="1.8"/></svg>
  ) },
  { name: "Dev. Commission", mark: (
    <svg viewBox="0 0 28 28" fill="none"><circle cx="9.6" cy="9.6" r="4.2" fill="currentColor"/><circle cx="18.4" cy="9.6" r="4.2" fill="currentColor" opacity="0.5"/><circle cx="9.6" cy="18.4" r="4.2" fill="currentColor" opacity="0.5"/><circle cx="18.4" cy="18.4" r="4.2" fill="currentColor"/></svg>
  ) },
  { name: "Regional Bureau", mark: (
    <svg viewBox="0 0 28 28" fill="none"><path d="M14 3 L25 14 L14 25 L3 14 Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><path d="M14 10 L18 14 L14 18 L10 14 Z" fill="currentColor"/></svg>
  ) },
];

/* ─────────────── Sections ─────────────── */
function Hero({ onStub }) {
  const heroRef = React.useRef(null);
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const clamp01 = (v) => v < 0 ? 0 : v > 1 ? 1 : v;
    const smoothstep = (t) => t * t * (3 - 2 * t);
    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight || root.clientHeight;
      const navH = 72;
      const range = Math.max(1, vh - navH);
      const t = clamp01(window.scrollY / range);
      const e = smoothstep(t);
      const scale = 1 - 0.22 * e;
      const blur = (reduce ? 0 : 16 * e);
      const opacity = 1 - 0.92 * e;
      root.style.setProperty("--hero-scale", scale.toFixed(3));
      root.style.setProperty("--hero-blur", blur.toFixed(2) + "px");
      root.style.setProperty("--hero-opacity", opacity.toFixed(3));
      root.style.setProperty("--hero-pointer", t > 0.55 ? "none" : "auto");
      // Aurora fades 1 → 0 by the time Portals' top has covered 75% of viewport from bottom.
      const auroraRange = Math.max(1, vh * 0.75 - navH);
      const at = clamp01(window.scrollY / auroraRange);
      const ae = smoothstep(at);
      root.style.setProperty("--aurora-opacity", (1 - ae).toFixed(3));
    };
    const onScroll = () => { if (raf) return; raf = requestAnimationFrame(update); };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
      root.style.removeProperty("--hero-scale");
      root.style.removeProperty("--hero-blur");
      root.style.removeProperty("--hero-opacity");
      root.style.removeProperty("--hero-pointer");
      root.style.removeProperty("--aurora-opacity");
    };
  }, []);
  return (
    <section className="v3-hero" ref={heroRef}>
      <div className="v3-inner">

        <div className="v3-text">
          <h1 className="v3-h">
            Made by<span className="v3-you">You</span>
          </h1>
          <p className="v3-sub">Unlocking simpler government services, piece by piece.</p>
          <div className="v3-ctas">
            <a className="btn btn-primary btn-lg" href="#showcase" onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("showcase");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}>
              Explore the showcase {Icon.arrow}
            </a>
            <a className="btn btn-ghost btn-lg" onClick={() => onStub("Share your work")}>
              Share your work
            </a>
          </div>
        </div>

        <div className="v3-visual" aria-hidden="true">
          <div className="v3-grid"></div>
          <div className="v3-orb v3-orb-a"></div>
          <div className="v3-orb v3-orb-b"></div>
          <div className="v3-orb v3-orb-c"></div>
          <TetrisGrid />
        </div>
      </div>

      <div className="v3-marquee" aria-hidden="true">
        <p className="v3-marquee-cap">Working with UX4G Design System across government</p>
        <div className="v3-marquee-viewport">
          <div className="v3-marquee-track">
            {[...MARQUEE_LOGOS, ...MARQUEE_LOGOS].map((logo, i) => (
              <div className="v3-logo" key={i}>
                <span className="v3-logo-mark">{logo.mark}</span>
                <span className="v3-logo-name">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Portals({ onStub }) {
  const wrapRef = React.useRef(null);
  const trackRef = React.useRef(null);
  const cards = PORTALS;
  useEffect(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;
    let raf = 0;
    const clamp01 = (v) => v < 0 ? 0 : v > 1 ? 1 : v;
    const computeDist = () => {
      const lastCard = track.lastElementChild;
      if (!lastCard) return 0;
      /* offsetLeft / offsetWidth are layout-only and unaffected by transforms. */
      const lastCenterInTrack = lastCard.offsetLeft + lastCard.offsetWidth / 2;
      const trackLeftAtRest = track.parentElement.getBoundingClientRect().left;
      const viewportCenter = window.innerWidth / 2;
      return Math.max(0, (trackLeftAtRest + lastCenterInTrack) - viewportCenter);
    };
    const apply = () => {
      raf = 0;
      const dist = computeDist();
      const prevCss = parseFloat(wrap.style.getPropertyValue("--carousel-distance")) || 0;
      if (Math.abs(prevCss - dist) > 0.5) {
        wrap.style.setProperty("--carousel-distance", dist + "px");
      }
      const wrapRect = wrap.getBoundingClientRect();
      const vh = window.innerHeight;
      const scrollRange = Math.max(1, wrap.offsetHeight - vh);
      const progress = clamp01(-wrapRect.top / scrollRange);
      const x = -dist * progress;
      track.style.transform = `translateX(${x}px)`;
    };
    const onScroll = () => { if (raf) return; raf = requestAnimationFrame(apply); };
    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", apply);
    const ro = new ResizeObserver(apply);
    ro.observe(track);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", apply);
      ro.disconnect();
      if (raf) cancelAnimationFrame(raf);
      wrap.style.removeProperty("--carousel-distance");
    };
  }, []);
  return (
    <section className="mby-portals" id="showcase" ref={wrapRef}>
      <div className="portals-stage">
        <div className="portals-viewport">
          <div className="portals-track" ref={trackRef}>

            <div className="portals-intro">
              <h2 className="intro-heading">
                Built with{" "}
                <span className="intro-mark">
                  <em className="intro-ux">UX</em>
                  <em className="intro-4g">4G</em>
                </span>{" "}
                Design System.
              </h2>
              <p className="intro-body">
                Government portals and services across India, designed using the UX4G system. Borrowed components, borrowed patterns, borrowed accessibility work, all so the next team ships faster than the last.
              </p>
            </div>

            {cards.map((p) => (
              <a key={p.name}
                className="portal-card-h"
                onClick={(e) => { e.preventDefault(); onStub(p.name); }}>
                <PortalThumb gradient={p.gradient}/>
                <div className="portal-body">
                  <div className="portal-top">
                    <h3 className="portal-name">{p.name}</h3>
                    <span className={"scope-badge " + p.scope}>
                      {p.scope === "central" ? "Central" : "State"}
                    </span>
                  </div>
                  <p className="portal-org">{p.org}</p>
                </div>
              </a>
            ))}
            <div className="portal-card-h portal-cta-h">
              <div className="portal-thumb">
                <div className="thumb-frame">
                  <div className="thumb-chrome">
                    <span></span><span></span><span></span>
                    <em>yourportal.gov.in</em>
                  </div>
                  <div className="thumb-body cta-thumb-body">
                    <div className="cta-inner-frame">
                      <p className="cta-inner-eyebrow">Used UX4G Design System in your product?</p>
                      <div className="cta-inner-actions">
                        <button className="btn btn-primary" onClick={(e) => { e.stopPropagation(); onStub("List your portal"); }}>
                          List your portal here {Icon.arrow}
                        </button>
                        <a className="btn btn-ghost"
                          href="UX4G Made by You All Portals.html"
                          onClick={(e) => e.stopPropagation()}>
                          View more examples
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="portal-body">
                <p className="cta-invite">Your portal could be next.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Quotes() {
  return (
    <section className="mby-quotes">
      <div className="container">
        <div className="mby-section-head quotes-head">
          <div>
            <h2>What teams say.</h2>
          </div>
          <p className="quotes-lead">
            Designers, developers and researchers across India share what changed for them after
            adopting the system — and what they wish more teams knew.
          </p>
        </div>


        <div className="mby-quotes-row">
          {QUOTES.map((q) => (
            <figure className="quote-card" key={q.name}>
              <span className="q-mark" aria-hidden="true">“</span>
              <blockquote className="q-body">{q.body}</blockquote>
              <figcaption className="q-attr">
                <span className="q-avatar" aria-hidden="true">
                  {q.name.split(" ").map((n) => n[0]).slice(0,2).join("")}
                </span>
                <span className="q-meta">
                  <span className="q-name">{q.name}</span>
                  <span className="q-role">{q.role} · {q.org}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

      </div>
    </section>
  );
}

function Solutions({ onStub }) {
  return (
    <section className="mby-solutions">
      <div className="container">
        <div className="mby-section-head">
          <div>
            <h2>Solutions from the community.</h2>
            <p>
              Service-specific components, patterns and flows built by government teams and
              shared for others to adapt — with Figma files, code or documentation, whichever
              the team had to give.
            </p>
          </div>
        </div>

        <div className="mby-solutions-grid">
          {SOLUTIONS.map((s) => {
            const slug = s.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
            return (
              <a key={s.name}
                className="solution-card"
                href={"UX4G Made by You Solution.html?id=" + slug}>
                <div className={"sol-thumb t-" + s.type}>
                  <div className="sol-mock">
                    <SolutionVisual id={s.name} type={s.type}/>
                  </div>
                  <span className={"type-badge sol-type-pin " + s.type}>
                  <span className="t-ic">{TypeIcon[s.type]}</span>
                  <span className="t-label">{s.type}</span>
                </span>
                </div>
                <div className="sol-body">
                  <h3 className="sol-name">{s.name}</h3>
                  <span className="sol-dept">{s.org}</span>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mby-grid-foot">
          <a className="mby-grid-foot-link" href="UX4G Made by You All Solutions.html">
            <span className="text">
              <span className="lead">Browse the full catalog</span>
            </span>
            <span className="arr-badge" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/>
                <path d="m13 5 7 7-7 7"/>
              </svg>
            </span>
          </a>
        </div>

        <div className="sol-share-cta">
          <div className="sol-share-inner">
            <div className="sol-share-text">
              <p className="sol-share-heading">Built something with UX4G?</p>
              <p className="sol-share-sub">If your team solved a problem others will face, list it here. Reviewed and credited to your department.</p>
            </div>
            <button className="btn btn-amber sol-share-btn" type="button"
              onClick={() => onStub("Share your solution")}>
              Share your solution →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="mby-how">
      <div className="container">
        <div className="mby-how-head">
          <h2>How the showcase works.</h2>
          <p>Three steps from your team's portal to every team's library — gentle gatekeeping,
            so every listing here is one you can trust.</p>
        </div>

        <div className="mby-how-row v-flow">
          {STEPS.map((s) => (
            <div key={s.n} className={"hf-step" + (s.reviewed ? " reviewed" : "")}>
              <div className="hf-head">
                <span className="hf-ic">{s.icon}</span>
                <span className="hf-n">Step {s.n}</span>
              </div>
              <h3 className="hf-title">{s.title}</h3>
              <p className="hf-body">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Criteria({ onStub }) {
  return (
    <section className="mby-criteria">
      <div className="container">
        <div className="mby-section-head criteria-head">
          <div>
            <h2>What makes a good solution?</h2>
          </div>
          <p className="criteria-lead">
            It isn't pixel-perfection — it's usefulness. We're looking for things other teams will
            actually pick up and ship.
          </p>
        </div>

        <ol className="mby-criteria-list">
          {CRITERIA.map((c) => (
            <li className="criterion" key={c.n}>
              <span className="cr-num">{c.n}</span>
              <div className="cr-body">
                <h3>{c.name}</h3>
                <p>{c.body}</p>
              </div>
              <span className="cr-tick" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m5 12 4.5 4.5L19 7"/>
                </svg>
              </span>
            </li>
          ))}
        </ol>

        <div className="criteria-cta">
          <a className="btn btn-amber btn-lg" onClick={() => onStub("Share your work")}>
            Share your work {Icon.arrow}
          </a>
          <span className="criteria-cta-meta">
            All submissions are reviewed by the UX4G core team before they appear here.
          </span>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Share-type chooser ─────────────── */
/* The hero (and criteria) CTAs say "Share your work" but Made by You hosts two
   very different submissions — a live portal showcase vs a reusable solution.
   Asking once, up-front, beats forcing the user into the wrong form. */
function ShareTypeChooser({ onPick, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape" && onClose) onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="vfy-scrim"
      onClick={(e) => { if (e.target === e.currentTarget && onClose) onClose(); }}
      data-screen-label="Share-type chooser">
      <div className="vfy-modal vfy-modal-chooser" role="dialog" aria-modal="true" aria-labelledby="share-chooser-h">
        <button type="button" className="vfy-close" onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="m4 4 8 8M12 4l-8 8"/>
          </svg>
        </button>
        <div className="vfy-body">
          <h2 className="vfy-h" id="share-chooser-h">What would you like to share?</h2>
          <p className="vfy-sub">
            Made by You hosts two kinds of contributions. Pick the one that matches what your
            team has built, you can always start the other afterwards.
          </p>

          <div className="chooser-cards">
            <button type="button" className="chooser-card portal" onClick={() => onPick("portal")}>
              <span className="chooser-ic" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4.5" width="18" height="14" rx="2"/>
                  <path d="M3 9h18"/>
                  <circle cx="6" cy="6.75" r=".7" fill="currentColor"/>
                  <circle cx="8.2" cy="6.75" r=".7" fill="currentColor"/>
                  <path d="M7 13h6M7 15.5h4"/>
                </svg>
              </span>
              <span className="chooser-title">Showcase a website</span>
              <span className="chooser-desc">
                Used the UX4G design system in your website or portal? You can make it a part
                of our showcase so other teams can see it in production.
              </span>
              <span className="chooser-cta">
                Submit your website
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4"/>
                </svg>
              </span>
            </button>

            <button type="button" className="chooser-card solution" onClick={() => onPick("solution")}>
              <span className="chooser-ic" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 7h5l2 2h9v9.5a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5z"/>
                  <path d="M8 13h8M8 16h5"/>
                </svg>
              </span>
              <span className="chooser-title">Share a solution</span>
              <span className="chooser-desc">
                Solved a problem using UX4G components and patterns that don't exist in the system
                yet? Submit it and help other teams reuse what you've built.
              </span>
              <span className="chooser-cta">
                Contribute a solution
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4"/>
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div className="vfy-foot no-divider">
          <p className="vfy-helper">
            Both submissions are reviewed by the UX4G core team before they appear on Made by You.
          </p>
        </div>
      </div>
    </div>
  );
}

function App() {
  const { toasts, push } = useToasts();
  const stub = (n) => push(`${n}, page coming soon`);

  // ───── Verify-flow state ─────
  const [flow, setFlow]       = useState(null);   // null | { source: "portal" | "solution" }
  const [chooser, setChooser] = useState(false);  // share-type picker

  const launchFlow = (source) => { setChooser(false); setFlow({ source }); };
  const closeFlow  = () => setFlow(null);

  // Auto-launch the submission flow when the page is opened via the
  // listing-page banner: ?share=solution or ?share=portal.
  useEffect(() => {
    const share = new URLSearchParams(window.location.search).get("share");
    if (share === "solution" || share === "portal") {
      launchFlow(share);
      // Clear the param so a refresh doesn't relaunch the modal.
      const url = new URL(window.location.href);
      url.searchParams.delete("share");
      window.history.replaceState({}, "", url.toString());
    }
  }, []);

  // Re-wire the CTAs that should launch verification.
  // "Share your work" is ambiguous between portal & solution, so it routes
  // through the chooser. Everything else maps directly.
  const onAction = useCallback((label) => {
    if (label === "List your portal")      return launchFlow("portal");
    if (label === "Share your work")       return setChooser(true);
    if (label === "Share your solution")   return launchFlow("solution");
    return stub(label);
  }, []);

  return (
    <>
      <div className="mby-aurora" aria-hidden="true">
        <span className="aurora-blob aurora-blob-1"></span>
        <span className="aurora-blob aurora-blob-2"></span>
        <span className="aurora-blob aurora-blob-3"></span>
      </div>
      <Navbar/>
      <main className="mby-page">
        <Hero onStub={onAction}/>
        <Portals onStub={onAction}/>
        <Quotes/>
        <Solutions onStub={onAction}/>
        <HowItWorks/>
        <Criteria onStub={onAction}/>
      </main>
      <SiteFooter/>
      <Toasts items={toasts}/>

      {chooser && (
        <ShareTypeChooser
          onPick={launchFlow}
          onClose={() => setChooser(false)}
        />
      )}

      {flow && window.VerifyFlow && (
        <window.VerifyFlow source={flow.source} onClose={closeFlow} initialScreen="email"/>
      )}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
