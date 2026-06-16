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
  { id: "get-file", label: "Get the Figma file" },
  { id: "setup", label: "Set up your file" },
  { id: "themecraft", label: "Customise with Themecraft" },
  { id: "start", label: "Start designing" },
  { id: "icons", label: "Icons" },
  { id: "help", label: "Need help?" },
];

function Sidebar({ active }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: "smooth" });
  };
  return (
    <aside className="gsd-side">
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
          <span className="current">Designer</span>
        </div>
        <div className="gsd-title-row">
          <h1 className="gsd-title">Designer</h1>
          <p className="gsd-desc">
            Get set up with UX4G in Figma, customise the brand to your service,
            and start designing with the system's components and patterns.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Section 1 · Before you begin ─────────────── */
function BeforeYouBegin({ onStub }) {
  return (
    <section className="gsd-section" id="before">
      <h2 className="gsd-sec-title">Before you begin</h2>
      <p className="gsd-sec-lede">
        UX4G is built around Indian government service design guidelines and best practices.
        Before you start designing, make sure you're familiar with these — they inform every
        decision in the system.
      </p>

      <div className="gsd-feature-card gsd-feature-card--alive">
        <div className="fc-glyph" aria-hidden="true">
          <svg viewBox="0 0 64 64" fill="none">
            <rect className="fc-doc fc-doc-back" x="10" y="8" width="38" height="48" rx="4" fill="#fff" stroke="#A78FFF" strokeWidth="2"/>
            <rect className="fc-doc fc-doc-mid" x="14" y="8" width="30" height="48" rx="2" fill="#F2EFFF" stroke="#A78FFF" strokeWidth="2"/>
            <rect className="fc-doc fc-doc-front" x="18" y="8" width="22" height="48" rx="2" fill="#fff" stroke="#6A4EFF" strokeWidth="2"/>
            <path d="M22 20h14M22 26h14M22 32h10" stroke="#4A2BC2" strokeWidth="2" strokeLinecap="round"/>
            <circle className="fc-badge" cx="48" cy="50" r="10" fill="#FFA827"/>
            <path className="fc-check" d="m44 50 3 3 6-6" stroke="#1c1100" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="fc-body">
          <div className="fc-eyebrow">Start here</div>
          <h3 className="fc-title">Are you familiar with government UX guidelines?</h3>
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
          onClick={(e) => { e.preventDefault(); document.getElementById("get-file").scrollIntoView({ behavior: "smooth", block: "start" }); }}
        >get the Figma file →</a>
      </p>
    </section>
  );
}

/* ─────────────── Step list helper ─────────────── */
function StepList({ children }) {
  return <ol className="gsd-stepslist">{children}</ol>;
}
function Step({ n, title, children }) {
  return (
    <li className="gsd-steprow">
      <span className="step-num">{n}</span>
      <div className="step-content">
        <h4 className="step-name">{title}</h4>
        <div className="step-content-body">{children}</div>
      </div>
    </li>
  );
}

/* ─────────────── Section 2 · Get the Figma file ─────────────── */
function GetFile({ onStub }) {
  return (
    <section className="gsd-section" id="get-file">
      <h2 className="gsd-sec-title">Get the Figma file</h2>
      <p className="gsd-sec-lede">
        The UX4G Design System file is published on Figma Community. It includes all components,
        patterns, design tokens, and documentation.
      </p>

      <StepList>
        <Step n="1" title="Find the file">
          <p>Search for <strong>UX4G Design System</strong> on Figma Community or use the direct link below.</p>
          <a className="btn btn-primary" onClick={(e) => { e.preventDefault(); onStub("Open UX4G on Figma Community"); }}>
            Open UX4G on Figma Community <span className="btn-arrow">→</span>
          </a>
        </Step>
        <Step n="2" title="Duplicate to your drafts">
          <p>Click <strong>Duplicate to your drafts</strong>. Figma will create a local copy in your drafts.</p>
          <div className="step-note small">
            <span className="ic">!</span>
            <span>The file will open as a draft — do not work from drafts directly.</span>
          </div>
        </Step>
        <Step n="3" title="Move to your project">
          <p>Move the duplicated file from your drafts into your team project. This ensures your team has access and changes are tracked.</p>
          <div className="how-row">
            <span className="how-lab">How to move</span>
            <span className="how-path">
              <code>Right-click file in drafts</code>
              <span className="sep">→</span>
              <code>Move to Project</code>
              <span className="sep">→</span>
              <code>Select your project</code>
            </span>
          </div>
        </Step>
      </StepList>
    </section>
  );
}

/* ─────────────── Section 3 · Set up your file ─────────────── */
function SetupFile() {
  return (
    <section className="gsd-section" id="setup">
      <h2 className="gsd-sec-title">Set up your file</h2>
      <p className="gsd-sec-lede">
        Once the file is in your project, publish the library so your team can use UX4G components
        across their design files.
      </p>

      <StepList>
        <Step n="1" title="Publish the library">
          <p>From inside the UX4G design file you just moved.</p>
          <div className="how-row">
            <span className="how-lab">Path</span>
            <span className="how-path">
              <code>Open the file</code>
              <span className="sep">→</span>
              <code>Assets panel</code>
              <span className="sep">→</span>
              <code>Book icon</code>
              <span className="sep">→</span>
              <code>Publish library</code>
            </span>
          </div>
        </Step>
        <Step n="2" title="Enable in your design files">
          <p>In any design file where you want to use UX4G components.</p>
          <div className="how-row">
            <span className="how-lab">Path</span>
            <span className="how-path">
              <code>Assets</code>
              <span className="sep">→</span>
              <code>Libraries</code>
              <span className="sep">→</span>
              <code>Enable UX4G Design System</code>
            </span>
          </div>
        </Step>
      </StepList>

      <div className="step-note">
        <span className="ic">i</span>
        <span>Publishing makes components, styles, and variables available to <strong>everyone in your team project</strong> — not just the file owner.</span>
      </div>
    </section>
  );
}

/* ─────────────── Section 4 · Themecraft ─────────────── */
function Themecraft({ onStub }) {
  const rows = [
    {
      name: "Primary colour",
      desc: "Used across all components wherever brand colour appears — buttons, active states, links, progress indicators, focus rings.",
      affects: true,
    },
    {
      name: "Secondary colour",
      desc: "Available as a token for use in your design workflows and mockups. Not used by any UX4G component directly.",
      affects: false,
    },
    {
      name: "Tertiary colour",
      desc: "Same as secondary — available for your design work, not applied to components.",
      affects: false,
    },
    {
      name: "Typography",
      desc: "Font families and weights mapped to the type scale tokens used throughout the system.",
      affects: true,
    },
  ];
  return (
    <section className="gsd-section" id="themecraft">
      <span className="gsd-callout"><span className="star">✶</span>Optional · brand customisation</span>
      <h2 className="gsd-sec-title">Customise with Themecraft</h2>
      <p className="gsd-sec-lede">
        UX4G ships with a default government brand. If your service has its own brand guidelines,
        use the UX4G Themecraft Figma plugin to customise the token values without touching the
        components themselves.
      </p>

      <a className="btn btn-primary" onClick={(e) => { e.preventDefault(); onStub("Get UX4G Themecraft"); }} style={{ marginBottom: 32 }}>
        Get UX4G Themecraft on Figma Community <span className="btn-arrow">→</span>
      </a>

      <h3 className="gsd-sub-title">What you can customise</h3>
      <div className="gsd-tc-table">
        {rows.map((r) => (
          <div className={"tc-row" + (r.affects ? " affects" : " info")} key={r.name}>
            <div className="tc-row-head">
              <h4>{r.name}</h4>
              <span className="tc-applies">
                {r.affects
                  ? (<><span className="dot ok"></span>Applied to components</>)
                  : (<><span className="dot info"></span>Token only — not applied</>)}
              </span>
            </div>
            <p>{r.desc}</p>
          </div>
        ))}
      </div>

      <div className="gsd-warning">
        <span className="warn-ic" aria-hidden="true">!</span>
        <div className="warn-body">
          <div className="warn-title">Heads up about secondary and tertiary colours</div>
          <p>Secondary and tertiary colours <strong>will not affect any components</strong> after customisation.
          UX4G components only use the primary brand colour. These tokens are provided for your design workflow —
          use them in mockups and layouts where needed.</p>
        </div>
      </div>

      <div className="gsd-after">
        <span className="after-lab">After customising</span>
        <p>Open the Variables panel in Figma <code>(right sidebar → Local variables)</code> and review all
          token values to make sure nothing is missing or incorrect before you start designing.</p>
      </div>
    </section>
  );
}

/* ─────────────── Section 5 · Start designing ─────────────── */
function StartDesigning() {
  const rows = [
    {
      name: "Follow component and pattern guidelines",
      body: "Every component and pattern on the UX4G website has documented states, edge cases, and usage rules. Check these before designing with any component.",
      links: [
        { l: "Browse components", href: "UX4G Components.html" },
        { l: "Browse patterns", href: "UX4G Patterns.html" },
      ],
    },
    {
      name: "Check the Figma file documentation",
      body: "The design system Figma file includes per-component documentation. Read the notes on any component you use — they may include government-specific constraints not obvious from the visual alone.",
    },
    {
      name: "Design for real constraints",
      body: "UX4G components are built for Indian government service contexts — low-literacy users, VLE kiosks, 2G networks, 22 scheduled languages. Design with these in mind, not just the happy path.",
    },
  ];
  return (
    <section className="gsd-section" id="start">
      <h2 className="gsd-sec-title">Start designing</h2>
      <p className="gsd-sec-lede">
        With your file set up and tokens customised, you're ready to design. A few things to keep
        in mind as you work:
      </p>

      <div className="gsd-guidance">
        {rows.map((r, i) => (
          <div className="guid-row" key={r.name}>
            <span className="guid-n">{String(i + 1).padStart(2, "0")}</span>
            <div className="guid-body">
              <h4>{r.name}</h4>
              <p>{r.body}</p>
              {r.links && (
                <div className="guid-links">
                  {r.links.map((lk) => (
                    <a key={lk.l} className="gsd-link" href={lk.href}>{lk.l} <span className="btn-arrow">→</span></a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────── Section 6 · Icons ─────────────── */
function Icons({ onStub }) {
  return (
    <section className="gsd-section" id="icons">
      <h2 className="gsd-sec-title">Icons</h2>
      <p className="gsd-sec-lede">
        UX4G uses <strong>Material Design Icons</strong> as its default icon library.
      </p>

      <a className="btn btn-primary" onClick={(e) => { e.preventDefault(); onStub("Get Material Design Icons"); }} style={{ marginBottom: 28 }}>
        Get Material Design Icons on Figma Community <span className="btn-arrow">→</span>
      </a>

      <h3 className="gsd-sub-title">Replacing icons with your own library</h3>
      <p className="gsd-sub-desc">
        If your project uses a different icon library and it is published in your team project,
        you can swap icons using Figma's instance swap feature.
      </p>

      <div className="how-row stacked">
        <span className="how-lab">How to swap</span>
        <span className="how-path">
          <code>Select icon instance</code>
          <span className="sep">→</span>
          <code>Right sidebar · Instance</code>
          <span className="sep">→</span>
          <code>Swap to equivalent in your library</code>
        </span>
      </div>

      <div className="step-note" style={{ marginTop: 18 }}>
        <span className="ic">i</span>
        <span>Ensure your replacement icons are at the <strong>same size as the originals</strong> — UX4G components use <code>24px</code> icons by default.</span>
      </div>
    </section>
  );
}

/* ─────────────── Section 7 · Need help? ─────────────── */
function NeedHelp({ onStub }) {
  return (
    <section className="gsd-section" id="help" style={{ borderBottom: "none" }}>
      <div className="gsd-help-banner purple">
        <div className="help-glyph" aria-hidden="true">
          <svg viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="34" fill="#fff" stroke="#D7CCFF"/>
            <path d="M30 32a10 10 0 0 1 20 0c0 6-6 7-9 10-1 1-1 3-1 4" stroke="#4A2BC2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="40" cy="56" r="2.5" fill="#4A2BC2"/>
          </svg>
        </div>
        <div className="help-body">
          <h3>Need help?</h3>
          <p>Reach out to the UX4G team for design support — covering Figma library questions, Themecraft customisation, and government UX guidance.</p>
          <div className="help-meta">
            <span className="meta-row"><span className="lab">Response time</span><span className="val">2 working days</span></span>
            <span className="meta-row"><span className="lab">Office hours</span><span className="val">Mon – Fri · 09:30 – 18:00 IST</span></span>
          </div>
        </div>
        <div className="help-action">
          <a className="btn btn-primary btn-lg" onClick={() => onStub("Email UX4G design team")}>
            Get in touch <span className="btn-arrow">→</span>
          </a>
          <span className="help-email">design@ux4g.gov.in</span>
        </div>
      </div>
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
            <GetFile onStub={stub}/>
            <SetupFile/>
            <Themecraft onStub={stub}/>
            <StartDesigning/>
            <Icons onStub={stub}/>
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
