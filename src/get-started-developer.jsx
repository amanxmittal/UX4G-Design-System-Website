/* global React, ReactDOM */
const { useState, useEffect, useCallback } = React;

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

/* ─────────────── Sidebar ─────────────── */
const SECTIONS = [
  { id: "before", label: "Before you begin" },
  { id: "install", label: "Installation" },
  { id: "tokens", label: "Design Tokens" },
  { id: "a11y", label: "Accessibility baseline" },
  { id: "help", label: "Need help?" },
];

function Sidebar({ active }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: "smooth" });
  };
  return (
    <aside className="gsd-side amber">
      <div className="side-label">On this page</div>
      <ul>
        {SECTIONS.map((s) => (
          <li key={s.id}>
            <a className={active === s.id ? "active" : ""} onClick={() => scrollTo(s.id)}>{s.label}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

/* ─────────────── Header ─────────────── */
function Header() {
  return (
    <section className="gsd-header">
      <div className="container">
        <div className="gsd-crumb">
          <a href="index.html">Home</a>
          <span className="sep">/</span>
          <a href="UX4G Get Started.html">Get Started</a>
          <span className="sep">/</span>
          <span className="current">Developer</span>
        </div>
        <div className="gsd-title-row">
          <h1 className="gsd-title">Developer</h1>
          <p className="gsd-desc">
            Install UX4G in your stack, plug in design tokens, and learn the government-specific
            constraints that don't show up in standard component docs.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Installation ─────────────── */
const FRAMEWORKS = [
  {
    id: "react",
    label: "React",
    intro: "Install the UX4G React package using npm, yarn, or pnpm. Works with React 17+ and the Next.js app router.",
    install: { lang: "bash", lines: ["npm install @ux4g/react @ux4g/tokens"] },
    usage: {
      lang: "tsx",
      lines: [
        "import { Button } from '@ux4g/react';",
        "import '@ux4g/tokens/css';",
        "",
        "export default function Apply() {",
        "  return <Button variant=\"primary\">Apply now</Button>;",
        "}",
      ],
    },
  },
  {
    id: "angular",
    label: "Angular",
    intro: "Install the UX4G Angular module. Compatible with Angular 16+ standalone components and modules.",
    install: { lang: "bash", lines: ["npm install @ux4g/angular @ux4g/tokens"] },
    usage: {
      lang: "ts",
      lines: [
        "import { Ux4gButtonModule } from '@ux4g/angular';",
        "",
        "@NgModule({ imports: [Ux4gButtonModule] })",
        "export class AppModule {}",
      ],
    },
  },
  {
    id: "wc",
    label: "Web Components",
    intro: "Install the framework-agnostic Web Components build. Works in any stack — including legacy server-rendered pages.",
    install: { lang: "bash", lines: ["npm install @ux4g/web-components @ux4g/tokens"] },
    usage: {
      lang: "html",
      lines: [
        "<script type=\"module\" src=\"@ux4g/web-components\"></script>",
        "<link rel=\"stylesheet\" href=\"@ux4g/tokens/css\" />",
        "",
        "<ux4g-button variant=\"primary\">Apply now</ux4g-button>",
      ],
    },
  },
];

function highlight(line, lang) {
  if (!line.trim()) return "&nbsp;";
  var KS = "\u0001K\u0002", SS = "\u0001S\u0002", TS = "\u0001T\u0002", CS = "\u0001C\u0002", ES = "\u0001/\u0002";
  let s = line
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  if (lang === "bash") {
    s = s.replace(/^(\w+)/, KS + "$1" + ES);
    s = s.replace(/(@[a-z0-9-]+\/[a-z0-9-]+)/g, SS + "$1" + ES);
  } else {
    s = s.replace(/('[^']*'|"[^"]*")/g, SS + "$1" + ES);
    s = s.replace(/\b(import|from|export|default|return|function|const|let|var)\b/g, KS + "$1" + ES);
    s = s.replace(/(@?\b(?:NgModule|Ux4gButtonModule|AppModule|Button)\b)/g, TS + "$1" + ES);
    s = s.replace(/(\/\/.*)$/, CS + "$1" + ES);
  }
  return s
    .replace(/\u0001K\u0002/g, '<span class="k">')
    .replace(/\u0001S\u0002/g, '<span class="s">')
    .replace(/\u0001T\u0002/g, '<span class="t">')
    .replace(/\u0001C\u0002/g, '<span class="c">')
    .replace(/\u0001\/\u0002/g, '</span>');
}

function CodeBlock({ block, label }) {
  return (
    <div className="gsd-codeblock">
      <div className="cb-head">
        <span className="cb-lang">{block.lang}</span>
        {label && <span className="cb-label">{label}</span>}
        <span className="cb-copy">Copy</span>
      </div>
      <pre className="cb-body">
        {block.lines.map((ln, i) => (
          <div key={i} className="cb-line">
            <span className="cb-ln">{i + 1}</span>
            <span className="cb-code" dangerouslySetInnerHTML={{ __html: highlight(ln, block.lang) }}/>
          </div>
        ))}
      </pre>
    </div>
  );
}

function Installation({ onStub }) {
  const [tab, setTab] = useState("react");
  const fw = FRAMEWORKS.find((f) => f.id === tab);
  return (
    <section className="gsd-section amber" id="install">
      <h2 className="gsd-sec-title">Installation</h2>
      <p className="gsd-sec-lede">
        UX4G ships as an npm package with support for React, Angular, and Web Components.
        Choose your framework below.
      </p>

      <div className="gsd-tabs" role="tablist">
        {FRAMEWORKS.map((f) => (
          <button
            key={f.id}
            role="tab"
            aria-selected={tab === f.id}
            className={"gsd-tab" + (tab === f.id ? " on" : "")}
            onClick={() => setTab(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="gsd-tab-panel">
        <p className="gsd-tab-intro">{fw.intro}</p>

        <div className="gsd-step-label">
          <span className="num">1</span>Install the package
        </div>
        <CodeBlock block={fw.install}/>

        <div className="gsd-step-label">
          <span className="num">2</span>Import and use a component
        </div>
        <CodeBlock block={fw.usage} label={fw.id === "wc" ? "index.html" : (fw.id === "react" ? "Apply.tsx" : "app.module.ts")}/>

        <a className="gsd-link" onClick={(e) => { e.preventDefault(); onStub("Open Storybook"); }}>
          View full {fw.label} documentation in Storybook <span className="btn-arrow">→</span>
        </a>
      </div>
    </section>
  );
}

/* ─────────────── Design Tokens ─────────────── */
const TOKEN_CATS = [
  {
    name: "Colour",
    desc: "Brand, status, and neutral colour values used across all components.",
    sample: "--ux4g-color-primary-600",
    swatch: "#6A4EFF",
  },
  {
    name: "Typography",
    desc: "Font families, sizes, weights, and line heights for every text role.",
    sample: "--ux4g-font-display-lg",
    swatch: "type",
  },
  {
    name: "Spacing",
    desc: "Margin and padding scale used throughout the layout system, on a 4px grid.",
    sample: "--ux4g-space-4",
    swatch: "space",
  },
  {
    name: "Shadows",
    desc: "Elevation levels from subtle card shadow to full modal overlay.",
    sample: "--ux4g-shadow-md",
    swatch: "shadow",
  },
  {
    name: "Border Radius",
    desc: "Corner radius values from sharp 0px through to fully rounded 999px.",
    sample: "--ux4g-radius-lg",
    swatch: "radius",
  },
  {
    name: "Motion",
    desc: "Duration and easing values for transitions and component animations.",
    sample: "--ux4g-motion-fast",
    swatch: "motion",
  },
];

function TokenSwatch({ kind, value }) {
  if (kind === "type") {
    return <div className="tc-swatch t-type"><span>Aa</span><span>अ</span></div>;
  }
  if (kind === "space") {
    return (
      <div className="tc-swatch t-space">
        <span style={{ width: 4 }}></span>
        <span style={{ width: 8 }}></span>
        <span style={{ width: 16 }}></span>
        <span style={{ width: 24 }}></span>
      </div>
    );
  }
  if (kind === "shadow") {
    return <div className="tc-swatch t-shadow"><div className="card"></div></div>;
  }
  if (kind === "radius") {
    return (
      <div className="tc-swatch t-radius">
        <span style={{ borderRadius: 0 }}></span>
        <span style={{ borderRadius: 4 }}></span>
        <span style={{ borderRadius: 10 }}></span>
        <span style={{ borderRadius: 999 }}></span>
      </div>
    );
  }
  if (kind === "motion") {
    return (
      <div className="tc-swatch t-motion">
        <span className="dot"></span>
      </div>
    );
  }
  return <div className="tc-swatch t-color" style={{ background: value }}></div>;
}

function TokensSection() {
  return (
    <section className="gsd-section amber" id="tokens">
      <h2 className="gsd-sec-title">Design Tokens</h2>
      <p className="gsd-sec-lede">
        Tokens are named design decisions available as CSS custom properties in the npm package.
        They map directly to every UX4G component and can be used independently in custom layouts.
      </p>

      <div className="gsd-token-grid">
        {TOKEN_CATS.map((t) => (
          <div className="token-card" key={t.name}>
            <TokenSwatch kind={t.swatch === "type" || t.swatch === "space" || t.swatch === "shadow" || t.swatch === "radius" || t.swatch === "motion" ? t.swatch : "color"} value={t.swatch}/>
            <div className="tc-body">
              <h4 className="tc-name">{t.name}</h4>
              <p className="tc-desc">{t.desc}</p>
              <code className="tc-var">{t.sample}</code>
            </div>
          </div>
        ))}
      </div>

      <div className="gsd-step-label" style={{ marginTop: 8 }}>
        <span className="num">↳</span>Import the token stylesheet
      </div>
      <CodeBlock block={{ lang: "css", lines: ["@import '@ux4g/tokens/css';"] }}/>

      <p className="gsd-sec-lede" style={{ margin: "16px 0 0" }}>
        For the full token reference — every scale, every value — see <a className="gsd-link" href="UX4G Foundations.html">Foundations →</a>
      </p>
    </section>
  );
}

/* ─────────────── Before you begin ─────────────── */
function BeforeYouBegin({ onStub }) {
  return (
    <section className="gsd-section amber" id="before">
      <h2 className="gsd-sec-title">Before you begin</h2>
      <p className="gsd-sec-lede">
        UX4G is built around Indian government service development guidelines and best practices.
        Before you start building, make sure you're familiar with these — they inform every
        implementation decision in the system.
      </p>

      <div className="gsd-feature-card amber gsd-feature-card--alive">
        <div className="fc-glyph" aria-hidden="true">
          <svg viewBox="0 0 64 64" fill="none">
            <rect className="fc-doc fc-doc-back" x="10" y="8" width="38" height="48" rx="4" fill="#fff" stroke="#FCD9A0" strokeWidth="2"/>
            <rect className="fc-doc fc-doc-mid" x="14" y="8" width="30" height="48" rx="2" fill="#FFF6E2" stroke="#FCD9A0" strokeWidth="2"/>
            <rect className="fc-doc fc-doc-front" x="18" y="8" width="22" height="48" rx="2" fill="#fff" stroke="#FFA827" strokeWidth="2"/>
            <path d="M22 20h14M22 26h14M22 32h10" stroke="#C97A0C" strokeWidth="2" strokeLinecap="round"/>
            <circle className="fc-badge" cx="48" cy="50" r="10" fill="#FFA827"/>
            <path className="fc-check" d="m44 50 3 3 6-6" stroke="#1c1100" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="fc-body">
          <div className="fc-eyebrow">Start here</div>
          <h3 className="fc-title">Are you familiar with government development guidelines?</h3>
          <p className="fc-desc">
            The UX4G website has resources to get you up to speed — including the UX4G Handbook
            and case studies from real government service implementations across ministries and state portals.
          </p>
          <a className="btn btn-primary" onClick={(e) => { e.preventDefault(); onStub("Explore resources"); }}>
            Explore resources on ux4g.gov.in <span className="btn-arrow">→</span>
          </a>
        </div>
      </div>

      <p className="gsd-tail">
        If you're already familiar with the guidelines, you're ready to <a className="gsd-link"
          onClick={(e) => { e.preventDefault(); document.getElementById("install").scrollIntoView({ behavior: "smooth", block: "start" }); }}
        >get started with installation →</a>
      </p>
    </section>
  );
}

/* ─────────────── Accessibility ─────────────── */
function Accessibility() {
  return (
    <section className="gsd-section amber" id="a11y">
      <h2 className="gsd-sec-title">Accessibility baseline</h2>
      <p className="gsd-sec-lede">
        WCAG 2.1 AA is the minimum for all UX4G implementations.
      </p>

      <div className="gsd-a11y">
        <div className="a11y-card">
          <div className="ic">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9"/>
              <path d="M12 3a9 9 0 0 0 0 18z" fill="currentColor"/>
            </svg>
          </div>
          <h4>Colour contrast</h4>
          <p>Verify in context, not just at component level. Status colours especially must be checked against their background.</p>
        </div>
        <div className="a11y-card">
          <div className="ic">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="6" width="18" height="12" rx="2"/>
              <path d="M7 10h2M11 10h2M15 10h2M7 14h10"/>
            </svg>
          </div>
          <h4>Keyboard navigation</h4>
          <p>All interactive components must be fully operable by keyboard. Never suppress focus styles.</p>
        </div>
      </div>

      <a className="gsd-link" href="UX4G Accessibility.html">Read the full accessibility guidelines <span className="btn-arrow">→</span></a>
    </section>
  );
}

/* ─────────────── Need help? ─────────────── */
function NeedHelp({ onStub }) {
  return (
    <section className="gsd-section amber" id="help" style={{ borderBottom: "none" }}>
      <div className="gsd-help-banner">
        <div className="help-glyph" aria-hidden="true">
          <svg viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="34" fill="#fff" stroke="#FCD9A0"/>
            <path d="M30 32a10 10 0 0 1 20 0c0 6-6 7-9 10-1 1-1 3-1 4" stroke="#C97A0C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="40" cy="56" r="2.5" fill="#C97A0C"/>
          </svg>
        </div>
        <div className="help-body">
          <h3>Need help?</h3>
          <p>Reach out to the UX4G team for implementation support — covering integration questions, design-token customisation, and government-specific constraints.</p>
          <div className="help-meta">
            <span className="meta-row"><span className="lab">Response time</span><span className="val">2 working days</span></span>
            <span className="meta-row"><span className="lab">Office hours</span><span className="val">Mon – Fri · 09:30 – 18:00 IST</span></span>
          </div>
        </div>
        <div className="help-action">
          <a className="btn btn-primary btn-lg" onClick={() => onStub("Email UX4G support")}>
            Get in touch <span className="btn-arrow">→</span>
          </a>
          <span className="help-email">support@ux4g.gov.in</span>
        </div>
      </div>
      <p className="gsd-help-secondary">
        You can also refer to the <a className="gsd-link" onClick={(e) => { e.preventDefault(); onStub("UX4G Handbook"); }}>UX4G Handbook on ux4g.gov.in</a> for detailed implementation guidance.
      </p>
    </section>
  );
}

function App() {
  const { toasts, push } = useToasts();
  const stub = (n) => push(`${n}, page coming soon`);
  const [active, setActive] = useState("before");

  useEffect(() => {
    const onScroll = () => {
      const probe = 180;
      let cur = SECTIONS[0].id;
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top < probe) cur = s.id;
      }
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Navbar/>
      <main className="gsd-page">
        <Header/>
        <div className="gsd-layout">
          <div className="gsd-main">
            <BeforeYouBegin onStub={stub}/>
            <Installation onStub={stub}/>
            <TokensSection/>
            <Accessibility/>
            <NeedHelp onStub={stub}/>
          </div>
          <Sidebar active={active}/>
        </div>
      </main>
      <SiteFooter/>
      <Toasts items={toasts}/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
