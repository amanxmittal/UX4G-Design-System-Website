/* global React */
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

function Navbar() {
  const links = [
    { l: "Foundations", href: "UX4G Foundations.html" },
    { l: "Fundamentals", href: "UX4G Fundamentals.html" },
    { l: "Components", href: "UX4G Components.html" },
    { l: "Patterns", href: "UX4G Patterns.html" },
    { l: "AI", href: "UX4G AI.html" },
    { l: "Made by You", href: "UX4G Made by You.html" },
  ];
  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="brand" href="UX4G Homepage.html">
          <div className="brand-mark">U4</div>
          <div className="brand-text">
            <div className="row">
              <span className="wordmark">UX4G</span>
              <span className="sub">Design System</span>
            </div>
            <span className="gov">A Government of India Initiative</span>
          </div>
        </a>
        <nav className="nav-links">
          {links.map((x) => (
            <a key={x.l}
               className={"nav-link" + ("AI" === x.l ? " active" : "")}
               href={x.href}
            >{x.l === "Made by You" ? (<><span className="nav-made-by">Made by </span><span className="nav-you">You</span></>) : x.l}</a>
          ))}
        </nav>
        <a className="btn btn-primary" href="UX4G Get Started.html">Get started <span className="btn-arrow">→</span></a>
      </div>
    </header>
  );
}

function Sidebar({ sections, active, extras }) {
  return (
    <aside className="cd-side">
      <p className="side-label">On this page</p>
      <ul>
        {sections.map((s) => (
          <li key={s.id}>
            <a href={"#" + s.id} className={active === s.id ? "active" : ""}>{s.label}</a>
          </li>
        ))}
        {extras && extras.length > 0 ? <li className="divider" aria-hidden="true"></li> : null}
        {(extras || []).map((e, i) => (
          <li key={i}><a className="ext" href={e.href}>{e.label}</a></li>
        ))}
      </ul>
    </aside>
  );
}

function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      const visible = entries.filter((e) => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]) setActive(visible[0].target.id);
    }, { rootMargin: "-140px 0px -55% 0px", threshold: [0, 0.1] });
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [ids]);
  return active;
}

/* Bottom black CTA strip — matches Storybook CTA from Accessibility page */
function BottomCTA({ text, ctaLabel, ctaHref }) {
  return (
    <div className="sb-cta">
      <div className="sb-text" dangerouslySetInnerHTML={{ __html: text }}></div>
      <a className="sb-link" href={ctaHref}>{ctaLabel}</a>
    </div>
  );
}

/* Pager — sits inside cd-main */
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

window.UX4G_AI = { useToasts, Toasts, Navbar, Sidebar, useScrollSpy, BottomCTA, Pager };
