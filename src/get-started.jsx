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

/* ─────────────── Header ─────────────── */
function PageHead() {
  return (
    <section className="gs-header">
      <div className="container">
        <div className="gs-crumb">
          <a href="index.html">Home</a>
          <span className="sep">/</span>
          <span className="current">Get Started</span>
        </div>
        <div className="gs-title-row">
          <h1 className="gs-h">Get Started</h1>
          <p className="gs-desc">
            Everything you need to start designing and building government services with UX4G.
            Choose your path below.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Role cards ─────────────── */

// ── Designer thumbnail ────────────────────────────────────────────────
// On hover: cursor flicks to the selection's right edge, pauses briefly, then
// drags the right edge further out — the left edge mirrors the same distance.
// The two inner card frames widen fluidly with the wrapper. Loops while hovered.
function DesignerIcon({ active }) {
  const refs = React.useRef({});

  React.useEffect(() => {
    const r = refs.current;
    const easeOutCubic = (p) => 1 - Math.pow(1 - p, 3);
    const easeInOutCubic = (p) => p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;

    function apply({ cursorDx, cursorDy, side, leftDx, leftW, rightW }) {
      if (r.selRect) {
        r.selRect.setAttribute('x', 88 - side);
        r.selRect.setAttribute('width', 168 + 2 * side);
      }
      if (r.rightSide) r.rightSide.setAttribute('transform', `translate(${side}, 0)`);
      if (r.leftSide) r.leftSide.setAttribute('transform', `translate(${-side}, 0)`);
      if (r.card1Rect) {
        r.card1Rect.setAttribute('x', 92 + leftDx);
        r.card1Rect.setAttribute('width', leftW);
      }
      if (r.card1Content) r.card1Content.setAttribute('transform', `translate(${leftDx}, 0)`);
      if (r.card2Rect) r.card2Rect.setAttribute('width', rightW);
      if (r.cursor) r.cursor.setAttribute('transform', `translate(${cursorDx}, ${cursorDy})`);
    }

    const REST = { cursorDx: 0, cursorDy: 0, side: 0, leftDx: 0, leftW: 75, rightW: 75 };

    if (!active) { apply(REST); return; }

    let raf, start;
    const period = 1400; // total loop time

    function tick(now) {
      if (start == null) start = now;
      const t = ((now - start) % period) / period;
      let s;
      if (t < 0.15) {
        // A. cursor flies to the right edge of selection
        const p = easeOutCubic(t / 0.15);
        s = { cursorDx: 86 * p, cursorDy: 13 * p, side: 0, leftDx: 0, leftW: 75, rightW: 75 };
      } else if (t < 0.22) {
        // B. small pause at right edge
        s = { cursorDx: 86, cursorDy: 13, side: 0, leftDx: 0, leftW: 75, rightW: 75 };
      } else if (t < 0.62) {
        // C. drag right edge out → left edge mirrors → frames widen
        const p = easeOutCubic((t - 0.22) / 0.40);
        const side = 34 * p;
        s = { cursorDx: 86 + side, cursorDy: 13, side, leftDx: -side, leftW: 75 + side, rightW: 75 + side };
      } else if (t < 0.74) {
        // D. hold expanded
        s = { cursorDx: 120, cursorDy: 13, side: 34, leftDx: -34, leftW: 109, rightW: 109 };
      } else {
        // E. spring back to rest
        const p = easeInOutCubic((t - 0.74) / 0.26);
        const rev = 1 - p;
        const side = 34 * rev;
        s = { cursorDx: 86 * rev + side, cursorDy: 13 * rev, side, leftDx: -side, leftW: 75 + side, rightW: 75 + side };
      }
      apply(s);
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); apply(REST); };
  }, [active]);

  return (
    <svg viewBox="0 0 360 200" fill="none" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
      <rect x="0" y="0" width="360" height="200" rx="14" fill="#EDEBFF"/>

      {/* Dotted alignment guides from top-left of selection */}
      <line x1="88" y1="54" x2="88" y2="18" stroke="#6A4EFF" strokeWidth="1.2" strokeDasharray="2 3" strokeOpacity="0.55"/>
      <line x1="88" y1="54" x2="40" y2="54" stroke="#6A4EFF" strokeWidth="1.2" strokeDasharray="2 3" strokeOpacity="0.55"/>

      {/* Card 1 (left) — rect width + content shift on hover */}
      <rect ref={el => refs.current.card1Rect = el} x="92" y="58" width="75" height="84" rx="5" fill="#FFFFFF" stroke="#D6CFF0" strokeWidth="1.2"/>
      <g ref={el => refs.current.card1Content = el}>
        <rect x="102" y="68" width="16" height="16" rx="2" fill="#FFA827"/>
        <rect x="102" y="92" width="52" height="3.5" rx="1.5" fill="#0F1115"/>
        <rect x="102" y="100" width="42" height="3.5" rx="1.5" fill="#0F1115"/>
        <rect x="102" y="108" width="48" height="3.5" rx="1.5" fill="#0F1115"/>
        <rect x="102" y="124" width="28" height="6" rx="1.5" fill="#4A2BC2"/>
      </g>

      {/* Card 2 (right) — rect width grows to the right, content stays anchored left */}
      <rect ref={el => refs.current.card2Rect = el} x="177" y="58" width="75" height="84" rx="5" fill="#FFFFFF" stroke="#D6CFF0" strokeWidth="1.2"/>
      <rect x="187" y="68" width="16" height="16" rx="2" fill="#FFA827"/>
      <rect x="187" y="92" width="52" height="3.5" rx="1.5" fill="#0F1115"/>
      <rect x="187" y="100" width="42" height="3.5" rx="1.5" fill="#0F1115"/>
      <rect x="187" y="108" width="48" height="3.5" rx="1.5" fill="#0F1115"/>
      <rect x="187" y="124" width="28" height="6" rx="1.5" fill="#4A2BC2"/>

      {/* Selection bounding box — x and width animated */}
      <rect ref={el => refs.current.selRect = el} x="88" y="54" width="168" height="92" rx="2" fill="none" stroke="#4A2BC2" strokeWidth="1.4"/>

      {/* Right-side handles — translate as a group */}
      <g ref={el => refs.current.rightSide = el} fill="#FFFFFF" stroke="#4A2BC2" strokeWidth="1.4">
        <rect x="252" y="50" width="8" height="8" rx="1"/>
        <rect x="252" y="96" width="8" height="8" rx="1"/>
        <rect x="252" y="142" width="8" height="8" rx="1"/>
      </g>
      {/* Left-side handles — mirror translate */}
      <g ref={el => refs.current.leftSide = el} fill="#FFFFFF" stroke="#4A2BC2" strokeWidth="1.4">
        <rect x="84" y="50" width="8" height="8" rx="1"/>
        <rect x="84" y="96" width="8" height="8" rx="1"/>
        <rect x="84" y="142" width="8" height="8" rx="1"/>
      </g>
      {/* Middle handles (top + bottom) — stay anchored at horizontal centre */}
      <g fill="#FFFFFF" stroke="#4A2BC2" strokeWidth="1.4">
        <rect x="168" y="50" width="8" height="8" rx="1"/>
        <rect x="168" y="142" width="8" height="8" rx="1"/>
      </g>

      {/* Cursor pointer — slides via transform */}
      <g ref={el => refs.current.cursor = el}>
        <path d="M170 132 L170 156 L176 150 L180 158 L184 156 L180 148 L188 148 Z"
              fill="#1A1A1A" stroke="#FFFFFF" strokeWidth="1.4" strokeLinejoin="round"/>
      </g>
    </svg>
  );
}

// ── Developer thumbnail ───────────────────────────────────────────────
// On hover: code editor wipes blank then re-types every line in sequence;
// in parallel the floating front card populates icon → text rows → button.
// Loops while hovered.
function DeveloperIcon({ active }) {
  const refs = React.useRef({});
  // Width-budget for each line's clip rect (approx text length + 6px padding)
  const LINE_W = [80, 110, 80, 80, 96, 96, 80];
  const ITEM_KEYS = ['icon', 'tx1', 'tx2', 'tx3', 'btn'];

  React.useEffect(() => {
    const r = refs.current;

    function reveal(allOn) {
      LINE_W.forEach((w, i) => { if (r['clip' + i]) r['clip' + i].setAttribute('width', allOn ? w : 0); });
      ITEM_KEYS.forEach(k => { if (r[k]) r[k].style.opacity = allOn ? 1 : 0; });
    }

    if (!active) { reveal(true); return; }

    // Start by clearing
    reveal(false);

    let raf, start;
    const period = 2000;

    function tick(now) {
      if (start == null) start = now;
      const t = ((now - start) % period) / period;

      // Lines: type sequentially from t=0.06 to t=0.78
      const typeStart = 0.06;
      const typeEnd = 0.78;
      const span = typeEnd - typeStart;
      const linePer = span / LINE_W.length;
      // small overlap so it doesn't look choppy
      const lineDur = linePer * 1.25;

      LINE_W.forEach((maxW, i) => {
        const ls = typeStart + i * linePer;
        const le = ls + lineDur;
        let p = 0;
        if (t < ls) p = 0;
        else if (t >= le) p = 1;
        else p = (t - ls) / (le - ls);
        if (r['clip' + i]) r['clip' + i].setAttribute('width', maxW * p);
      });

      // Front-card items: pop in staggered between t=0.15 and t=0.88
      const itemStart = 0.15;
      const itemSpan = 0.73;
      const step = itemSpan / ITEM_KEYS.length;
      ITEM_KEYS.forEach((k, i) => {
        const showAt = itemStart + i * step;
        const fadeDur = step * 0.6;
        const el = r[k];
        if (!el) return;
        if (t < showAt) el.style.opacity = 0;
        else if (t >= showAt + fadeDur) el.style.opacity = 1;
        else el.style.opacity = ((t - showAt) / fadeDur).toFixed(3);
      });

      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); reveal(true); };
  }, [active]);

  return (
    <svg viewBox="0 0 360 200" fill="none" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
      <defs>
        {LINE_W.map((_, i) => (
          <clipPath key={i} id={"gsd-line-" + i}>
            <rect ref={el => refs.current['clip' + i] = el} x="38" y={62 + i * 14} width="0" height="16"/>
          </clipPath>
        ))}
      </defs>

      <rect x="0" y="0" width="360" height="200" rx="14" fill="#FFF3E6"/>

      {/* Code editor window */}
      <rect x="32" y="42" width="200" height="138" rx="8" fill="#000000" opacity="0.05"/>
      <rect x="30" y="38" width="200" height="138" rx="8" fill="#FFFFFF" stroke="#E5C99A" strokeWidth="1.4"/>
      <path d="M30 46 a8 8 0 0 1 8 -8 h184 a8 8 0 0 1 8 8 v12 h-200 z" fill="#2A1A00"/>
      <circle cx="42" cy="50" r="2.4" fill="#FFA827"/>
      <circle cx="52" cy="50" r="2.4" fill="#FFD899"/>
      <circle cx="62" cy="50" r="2.4" fill="#8A4A00"/>

      {/* Code lines — each wrapped in its own clipPath for typewriter effect */}
      <g fontFamily="'Noto Sans Mono', ui-monospace, SFMono-Regular, monospace" fontSize="9" fontWeight="500">
        <g clipPath="url(#gsd-line-0)"><text x="42" y="78" fill="#8A4A00">{"<"}<tspan fill="#D46F13">gov-card</tspan>{">"}</text></g>
        <g clipPath="url(#gsd-line-1)"><text x="50" y="92" fill="#8A4A00">{"<"}<tspan fill="#D46F13">img</tspan> <tspan fill="#A35A00">slot</tspan>=<tspan fill="#5A3700">"header"</tspan></text></g>
        <g clipPath="url(#gsd-line-2)"><text x="58" y="106" fill="#A35A00">src<tspan fill="#8A4A00">=</tspan><tspan fill="#5A3700">"/img.png"</tspan></text></g>
        <g clipPath="url(#gsd-line-3)"><text x="58" y="120" fill="#A35A00">alt<tspan fill="#8A4A00">=</tspan><tspan fill="#5A3700">"icon"</tspan><tspan fill="#8A4A00">{">"}</tspan></text></g>
        <g clipPath="url(#gsd-line-4)"><text x="50" y="134" fill="#8A4A00">{"<"}<tspan fill="#D46F13">p</tspan>{"> Lorem ipsum"}</text></g>
        <g clipPath="url(#gsd-line-5)"><text x="50" y="148" fill="#8A4A00">{"<"}<tspan fill="#D46F13">a</tspan> <tspan fill="#A35A00">href</tspan>=<tspan fill="#5A3700">"#"</tspan>{"></"}<tspan fill="#D46F13">a</tspan>{">"}</text></g>
        <g clipPath="url(#gsd-line-6)"><text x="42" y="162" fill="#8A4A00">{"</"}<tspan fill="#D46F13">gov-card</tspan>{">"}</text></g>
      </g>

      {/* Floating front card — contents fade in one by one */}
      <g>
        <rect x="206" y="74" width="118" height="98" rx="6" fill="#000000" opacity="0.08"/>
        <rect x="204" y="70" width="118" height="98" rx="6" fill="#FFFFFF" stroke="#E5C99A" strokeWidth="1.4"/>
        <rect ref={el => refs.current.icon = el} x="216" y="82" width="18" height="18" rx="2" fill="#FFA827"/>
        <rect ref={el => refs.current.tx1 = el} x="216" y="108" width="64" height="4" rx="1.5" fill="#0F1115"/>
        <rect ref={el => refs.current.tx2 = el} x="216" y="118" width="54" height="4" rx="1.5" fill="#0F1115"/>
        <rect ref={el => refs.current.tx3 = el} x="216" y="128" width="60" height="4" rx="1.5" fill="#0F1115"/>
        <rect ref={el => refs.current.btn = el} x="216" y="144" width="36" height="7" rx="1.5" fill="#D46F13"/>
      </g>
    </svg>
  );
}

const ROLES = [
  {
    id: "designer",
    Icon: DesignerIcon,
    name: "Designer",
    body: "Access the Figma library, learn how to use design tokens, and understand the system's key design decisions.",
    cta: "Get started as a Designer",
    href: "UX4G Get Started Designer.html",
    tone: "primary",
  },
  {
    id: "developer",
    Icon: DeveloperIcon,
    name: "Developer",
    body: "Set up design tokens, understand government-specific implementation constraints, and explore components in Storybook.",
    cta: "Get started as a Developer",
    href: "UX4G Get Started Developer.html",
    tone: "amber",
  },
];

function RoleCards() {
  const [hovered, setHovered] = React.useState(null);
  return (
    <section className="gs-roles">
      <div className="container">
        <div className="gs-roles-row">
          {ROLES.map((r) => {
            const Icon = r.Icon;
            const active = hovered === r.id;
            return (
              <a
                key={r.id}
                className={"gs-role-card t-" + r.tone}
                href={r.href}
                onMouseEnter={() => setHovered(r.id)}
                onMouseLeave={() => setHovered((p) => (p === r.id ? null : p))}
                onFocus={() => setHovered(r.id)}
                onBlur={() => setHovered((p) => (p === r.id ? null : p))}
              >
                <div className="gs-role-icon"><Icon active={active} /></div>
                <div className="gs-role-body">
                  <h2 className="gs-role-name">I'm a {r.name}</h2>
                  <p className="gs-role-desc">{r.body}</p>
                </div>
                <span className="gs-role-cta">
                  {r.cta} <span className="btn-arrow">→</span>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── What's in the system ─────────────── */
const PILLARS = [
  {
    n: "01",
    name: "Fundamentals",
    desc: "The principles behind every decision — accessibility, inclusivity, and the writing voice that runs through citizen-facing services.",
    href: "UX4G Fundamentals.html",
    accent: "primary",
  },
  {
    n: "02",
    name: "Foundations",
    desc: "The shared visual language — colour, typography, spacing, elevation, motion and the raw design tokens that power everything.",
    href: "UX4G Foundations.html",
    accent: "primary",
  },
  {
    n: "03",
    name: "Components",
    desc: "Reusable UI building blocks with every state, variant and edge case defined — buttons, inputs, OTP cells, badges, alerts.",
    href: "UX4G Components.html",
    accent: "amber",
  },
  {
    n: "04",
    name: "Patterns",
    desc: "Components assembled into solutions for recurring government service scenarios — identity, status pipelines, empty states, escalation flows.",
    href: "UX4G Patterns.html",
    accent: "amber",
  },
  {
    n: "05",
    name: "Build with AI",
    eyebrow: "New",
    desc: "Practical guidance on using Figma AI, Make and code copilots with UX4G — prompting, governance, evaluation and the safe defaults we expect every team to follow.",
    href: "UX4G AI.html",
    accent: "ai",
  },
];

function Pillars() {
  return (
    <section className="gs-pillars">
      <div className="container">
        <div className="gs-pillars-head">
          <span className="gs-eyebrow">What's in the system</span>
          <h2>Five pillars to know before you start</h2>
          <p>From the principles that guide every decision, to the components and patterns your team will reach for every day — and the AI tooling that helps you ship faster without losing the standard.</p>
        </div>

        <div className="gs-pillars-grid">
          {PILLARS.map((p) => (
            <a key={p.n} className={"gs-pillar t-" + p.accent} href={p.href}>
              {p.accent === "ai" && (
                <svg className="pillar-spark" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.5l2.2 5.4 5.4 2.1-5.4 2.2-2.2 5.4-2.2-5.4L4.4 10l5.4-2.1L12 2.5z"/>
                </svg>
              )}
              {p.eyebrow && <span className="pillar-eyebrow">{p.eyebrow}</span>}
              <div className="pillar-name-row">
                <h3 className="pillar-name">{p.name}</h3>
                <span className="pillar-arrow">→</span>
              </div>
              <p className="pillar-desc">{p.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Quick stats ─────────────── */

function App() {
  const { toasts, push } = useToasts();
  return (
    <>
      <Navbar/>
      <main className="gs-page">
        <PageHead/>
        <RoleCards/>
        <Pillars/>
      </main>
      <SiteFooter/>
      <Toasts items={toasts}/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
