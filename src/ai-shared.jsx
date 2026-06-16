/* global React, ReactDOM, SiteNavbar, SiteFooter */
/* Shared shell + building blocks for every page in the AI section.
   Each page file (ai-index.jsx, ai-prompting.jsx, …) imports these globals. */

/* Left-nav model — Overview + the six guides AI-01 … AI-06.
   `var` (not const) so it is reliably shared with the page script files. */
var AI_NAV = [
  { code: "Overview", tag: "AI",    label: "Overview",              href: "UX4G AI.html" },
  { code: "AI-01",    tag: "AI-01", label: "AI in Figma",           href: "UX4G AI Figma.html" },
  { code: "AI-02",    tag: "AI-02", label: "AI coding tools",       href: "UX4G AI Coding.html" },
  { code: "AI-03",    tag: "AI-03", label: "Governance & safety",   href: "UX4G AI Safety.html" },
  { code: "AI-04",    tag: "AI-04", label: "Prompting",             href: "UX4G AI Prompting.html" },
  { code: "AI-05",    tag: "AI-05", label: "Figma Make",            href: "UX4G AI Make.html" },
  { code: "AI-06",    tag: "AI-06", label: "Testing & evaluation",  href: "UX4G AI Testing.html" },
];

/* ── Left quick-nav (modelled on the component page nav) ── */
function AiLeftNav({ current }) {
  return (
    <div className="cd-nav-left-wrap ai-nav-wrap">
      <aside className="cd-nav-left ai-nav">
        <p className="ai-nav__label">
          <span className="ai-nav__spark" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l2.1 5.2L19.5 9l-5.4 1.9L12 16l-2.1-5.1L4.5 9l5.4-1.8z" />
            </svg>
          </span>
          AI section
        </p>
        <nav className="ai-nav__list">
          {AI_NAV.map((item) => {
            const isCurrent = item.code === current;
            return (
              <a
                key={item.code}
                href={item.href}
                className={"ai-nav__item" + (isCurrent ? " current" : "")}
                aria-current={isCurrent ? "page" : undefined}
              >
                <span className="ai-nav__tag">{item.tag}</span>
                <span className="ai-nav__name">{item.label}</span>
              </a>
            );
          })}
        </nav>
      </aside>
    </div>
  );
}

/* ── Right "on this page" rail ── */
function AiOnThisPage({ sections, active }) {
  return (
    <aside className="cd-side ai-side">
      <p className="side-label">On this page</p>
      <ul>
        {sections.map((s) => (
          <li key={s.id}>
            <a href={"#" + s.id} className={active === s.id ? "active" : ""}>{s.label}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

/* ── Scroll-spy for the right rail ── */
function useAiScrollSpy(ids) {
  const [active, setActive] = React.useState(ids[0]);
  React.useEffect(() => {
    const onScroll = () => {
      let cur = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 160) cur = id;
      }
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids.join("|")]);
  return active;
}

/* ── Page shell — navbar + left nav + header + content + footer ── */
function AiShell({ code, title, desc, crumb, sections, children }) {
  const active = useAiScrollSpy(sections.map((s) => s.id));
  const isOverview = code === "Overview";
  return (
    <React.Fragment>
      <SiteNavbar />
      <main className="cd-page ai-page">
        <AiLeftNav current={code} />

        <div className="cd-header-wrap">
          <header className="cd-header ai-header">
            <div className="cd-crumb">
              <a href="index.html">Home</a>
              <span className="sep">/</span>
              {isOverview ? (
                <span className="current">AI</span>
              ) : (
                <React.Fragment>
                  <a href="UX4G AI.html">AI</a>
                  <span className="sep">/</span>
                  <span className="current">{crumb || title}</span>
                </React.Fragment>
              )}
            </div>
            <div className="cd-title-row">
              <h1 className="cd-title ai-title">{title}</h1>
            </div>
            <p className="cd-lede ai-header__desc">{desc}</p>
          </header>
        </div>

        <div className="cd-layout">
          <div className="cd-main">{children}</div>
          <AiOnThisPage sections={sections} active={active} />
        </div>
      </main>
      <SiteFooter />
    </React.Fragment>
  );
}

/* ── Bottom CTA strip — closes each page (matches the Storybook CTA) ── */
function BottomCTA({ text, ctaLabel, ctaHref }) {
  return (
    <div className="sb-cta">
      <div className="sb-text" dangerouslySetInnerHTML={{ __html: text }}></div>
      <a className="sb-link" href={ctaHref}>{ctaLabel}</a>
    </div>
  );
}

/* ── Prev / next pager between AI sub-pages ── */
function Pager({ prev, next }) {
  return (
    <div className="ai-pager">
      {prev ? (
        <a href={prev.href}>
          <span className="pg-dir">← Previous</span>
          <span className="pg-title">{prev.title}</span>
        </a>
      ) : <div />}
      {next ? (
        <a className="next" href={next.href}>
          <span className="pg-dir">Next →</span>
          <span className="pg-title">{next.title}</span>
        </a>
      ) : <div />}
    </div>
  );
}

/* Render helper so each page file is a thin config. */
function renderAiPage(el) {
  ReactDOM.createRoot(document.getElementById("root")).render(el);
}
