/* global React, ReactDOM */
/* UX4G Component Page Template - shared shell for all component pages.
   Each component page provides a CONFIG and a custom HERO/banner via window.UX4G_COMPONENT_CONFIG. */

(function () {
  const { useState, useEffect, useRef, useCallback } = React;

  /* ───────────────── Toasts ───────────────── */
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

  /* ───────────────── Navbar ───────────────── */
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

  /* ───────────────── Btn (real UX4G button) ───────────────── */
  function Btn({ kind = "primary", size = "m", state, iconLeft, iconRight, loading, children, onClick, ...rest }) {
    const kindMap = {
      primary: "ux4g-btn-primary",
      outlined: "ux4g-btn-outline-primary",
      text: "ux4g-btn-text-primary",
      tonal: "ux4g-btn-tonal-primary",
      destructive: "ux4g-btn-danger",
    };
    const sizeMap = { xs: "ux4g-btn-xs", s: "ux4g-btn-sm", m: "ux4g-btn-md", l: "ux4g-btn-lg", xl: "ux4g-btn-xl" };
    const cls = [kindMap[kind] || "ux4g-btn-primary", sizeMap[size] || "ux4g-btn-md"];
    if (loading) cls.push("state-loading");
    return (
      <button className={cls.join(" ")} disabled={state === "disabled"} onClick={onClick} type="button" {...rest}>
        {loading && <span className="spin"></span>}
        {iconLeft && !loading && <span className="btn-ico">{iconLeft}</span>}
        <span>{children}</span>
        {iconRight && <span className="btn-ico">{iconRight}</span>}
      </button>
    );
  }

  /* ───────────────── Left ComponentNav ───────────────── */
  const COMPONENT_NAV = [
    { id: "form", name: "Form Elements", items: [
      "Button", "Input", "Textarea", "Checkbox", "Radio Button",
      "Switch / Toggle", "Dropdown Menu", "Combobox", "Search", "Slider",
      "Form Field Group", "Input OTP", "Date Picker", "Time Picker", "File Upload",
    ]},
    { id: "feedback", name: "Feedback", items: [
      "Alert / Toast", "Badge", "Tag", "Spinner", "Progress Indicator",
      "Feedback (Rating)", "Draft Status Banner", "SLA Progress Indicator",
      "Empty State", "Tooltip", "Modal", "Dialog", "Popover",
    ]},
    { id: "data", name: "Data Display", items: [
      "Card", "Table", "Accordion", "Carousel", "List", "Avatar", "Image",
      "Status Pipeline", "Journey Timeline", "Escalation Tree", "Checklist",
      "Slot Grid",
    ]},
    { id: "nav", name: "Navigation", items: [
      "Link", "Breadcrumb", "Tab", "Stepper", "Pagination", "Navbar", "Drawer", "Chip", "Chip Group",
    ]},
    { id: "utility", name: "Utility", items: [
      "Divider", "Icon Button", "Footer", "Social Links", "Accessibility Bar",
    ]},
    { id: "capture", name: "Capture & Verification", items: [
      "Biometric Capture",
    ]},
  ];

  // Map component nav names to HTML pages.
  const PAGE_MAP = {
    "Button": "UX4G Button.html",
    "Input": "UX4G Input.html",
    "Textarea": "UX4G Textarea.html",
    "Checkbox": "UX4G Checkbox.html",
    "Radio Button": "UX4G Radio.html",
    "Switch / Toggle": "UX4G Switch.html",
    "Dropdown Menu": "UX4G Dropdown.html",
    "Combobox": "UX4G Combobox.html",
    "Search": "UX4G Search.html",
    "Slider": "UX4G Slider.html",
    "Form Field Group": "UX4G Form Field Group.html",
    "Input OTP": "UX4G Input OTP.html",
    "Date Picker": "UX4G Date Picker.html",
    "Time Picker": "UX4G Time Picker.html",
    "File Upload": "UX4G File Upload.html",
    "Link": "UX4G Link.html",
    "Alert / Toast": "UX4G Alert.html",
    "Badge": "UX4G Badge.html",
    "Tag": "UX4G Tag.html",
    "Spinner": "UX4G Spinner.html",
    "Progress Indicator": "UX4G Progress.html",
    "Tooltip": "UX4G Tooltip.html",
    "Modal": "UX4G Modal.html",
    "Dialog": "UX4G Dialog.html",
    "Popover": "UX4G Popover.html",
    "Empty State": "UX4G Empty State.html",
    "Card": "UX4G Card.html",
    "Table": "UX4G Table.html",
    "Accordion": "UX4G Accordion.html",
    "List": "UX4G List.html",
    "Avatar": "UX4G Avatar.html",
    "Image": "UX4G Image.html",
    "Breadcrumb": "UX4G Breadcrumb.html",
    "Tab": "UX4G Tab.html",
    "Stepper": "UX4G Stepper.html",
    "Pagination": "UX4G Pagination.html",
    "Navbar": "UX4G Navbar.html",
    "Drawer": "UX4G Drawer.html",
    "Chip": "UX4G Chip.html",
    "Chip Group": "UX4G Chip Group.html",
    "Divider": "UX4G Divider.html",
    "Icon Button": "UX4G Icon Button.html",
    "Footer": "UX4G Footer.html",
    "Accessibility Bar": "UX4G Accessibility Bar.html",
    "Feedback Rating": "UX4G Feedback Rating.html",
    "Feedback (Rating)": "UX4G Feedback Rating.html",
    "Draft Status Banner": "UX4G Draft Status Banner.html",
    "SLA Progress Indicator": "UX4G SLA Progress Indicator.html",
    "Carousel": "UX4G Carousel.html",
    "Status Pipeline": "UX4G Status Pipeline.html",
    "Escalation Tree": "UX4G Escalation Tree.html",
    "Journey Timeline": "UX4G Journey Timeline.html",
    "Checklist": "UX4G Checklist.html",
    "Slot Grid": "UX4G Slot Grid.html",
    "Social Links": "UX4G Social Links.html",
    "Biometric Capture": "UX4G Biometric Capture.html",
  };

  function ComponentNav({ current, onStub }) {
    const [openGroups, setOpenGroups] = useState(() => {
      const init = {};
      COMPONENT_NAV.forEach((g) => { init[g.id] = g.items.includes(current); });
      return init;
    });
    const toggle = (id) => setOpenGroups((s) => {
      const next = {};
      COMPONENT_NAV.forEach((g) => { next[g.id] = false; });
      next[id] = !s[id];
      return next;
    });
    const [q, setQ] = useState("");
    const navRef = useRef(null);
    useEffect(() => {
      const onScroll = () => {
        if (!navRef.current) return;
        const pad = Math.max(24, 104 - window.scrollY);
        navRef.current.style.paddingTop = pad + "px";
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
      return () => window.removeEventListener("scroll", onScroll);
    }, []);
    const query = q.trim().toLowerCase();
    return (
      <div className="cd-nav-left-wrap">
      <aside className="cd-nav-left" ref={navRef}>
        <label className="cnl-search">
          <span className="cnl-search-ico" aria-hidden="true">⌕</span>
          <input type="text" placeholder="Search components" value={q} onChange={(e) => setQ(e.target.value)} />
        </label>
        <nav className="cnl-groups">
          {COMPONENT_NAV.map((g) => {
            const filtered = query ? g.items.filter((n) => n.toLowerCase().includes(query)) : g.items;
            if (query && filtered.length === 0) return null;
            const isOpen = query ? true : !!openGroups[g.id];
            return (
              <div className={"cnl-group" + (isOpen ? " open" : "")} key={g.id}>
                <button type="button" className="cnl-group-head" onClick={() => !query && toggle(g.id)}>
                  <span className="cnl-group-name">{g.name}</span>
                  <span className="cnl-group-count">{filtered.length}</span>
                  <span className="cnl-chev" aria-hidden="true">
                    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 4.5 L6 7.5 L9 4.5" />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <ul className="cnl-items">
                    {filtered.map((name) => {
                      const isCurrent = name === current;
                      const href = PAGE_MAP[name];
                      if (href) {
                        return (
                          <li key={name}>
                            <a className={"cnl-item" + (isCurrent ? " current" : "")} href={href} aria-current={isCurrent ? "page" : undefined}>
                              <span className="cnl-label">{name}</span>
                            </a>
                          </li>
                        );
                      }
                      return (
                        <li key={name}>
                          <a className="cnl-item" onClick={() => onStub(name)}>
                            <span className="cnl-label">{name}</span>
                            <span className="cnl-soon">Soon</span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </nav>
      </aside>
      </div>
    );
  }

  /* ───────────────── Right Sidebar (on-this-page) ───────────────── */
  const SECTIONS = [
    { id: "anatomy", label: "Anatomy" },
    { id: "properties", label: "Properties" },
    { id: "scenarios", label: "Scenarios" },
    { id: "responsive", label: "Responsive" },
    { id: "best-practices", label: "Best practices" },
    { id: "accessibility", label: "Accessibility" },
    { id: "related", label: "Related components" },
  ];
  function Sidebar({ active, onStub, componentName }) {
    const scrollTo = (id) => {
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top, behavior: "smooth" });
      }
    };
    return (
      <aside className="cd-side" style={{ margin: "0px" }}>
        <div className="side-label">On this page</div>
        <ul>
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a className={active === s.id ? "active" : ""} onClick={() => scrollTo(s.id)}>{s.label}</a>
            </li>
          ))}
          <li><div className="divider"></div></li>
          <li>
            <a className="ext" onClick={() => onStub(`Storybook · ${componentName}`)}>For developers</a>
          </li>
        </ul>
      </aside>
    );
  }

  /* ───────────────── Header (with custom banner) ───────────────── */
  function HeaderSec({ config, onStub }) {
    const Hero = config.hero;
    const GROUP_ANCHOR = {
      "Form Elements": "form",
      "Feedback": "feedback",
      "Data Display": "data",
      "Navigation": "nav",
      "Utility": "utility",
      "Capture & Verification": "capture",
    };
    const groupHref = "UX4G Components.html" + (GROUP_ANCHOR[config.group] ? "#g-" + GROUP_ANCHOR[config.group] : "");
    return (
      <div className="cd-header">
        <div className="cd-crumb">
          <a href="index.html">Home</a>
          <span className="sep">/</span>
          <a href="UX4G Components.html">Components</a>
          <span className="sep">/</span>
          <a href={groupHref}>{config.group}</a>
          <span className="sep">/</span>
          <span className="current">{config.name}</span>
        </div>
        <div className="cd-title-row">
          <h1 className="cd-title">{config.name}</h1>
        </div>
        <p className="cd-desc">{config.desc}</p>

        <div className={"cd-hero-banner cd-hero-banner--" + (config.bannerVariant || "default")} aria-hidden="true">
          {Hero ? <Hero /> : null}
        </div>

        <div className="cd-link-pills">
          <a className="cd-meta-pill" onClick={() => onStub(`Code · ${config.name}`)}>
            <span className="cd-meta-ico" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.3724 0 0 5.3808 0 12.0204C0 17.3304 3.438 21.8364 8.2068 23.4252C8.8068 23.5356 9.0252 23.1648 9.0252 22.8456C9.0252 22.5612 9.0156 21.804 9.0096 20.802C5.6712 21.528 4.9668 19.1904 4.9668 19.1904C4.422 17.8008 3.6348 17.4312 3.6348 17.4312C2.5452 16.6872 3.7176 16.7016 3.7176 16.7016C4.9212 16.7856 5.5548 17.94 5.5548 17.94C6.6252 19.776 8.364 19.2456 9.0468 18.9384C9.1572 18.162 9.4668 17.6328 9.81 17.3328C7.146 17.0292 4.344 15.9972 4.344 11.3916C4.344 10.08 4.812 9.006 5.5788 8.166C5.4552 7.8624 5.0436 6.6396 5.6964 4.986C5.6964 4.986 6.7044 4.662 8.9964 6.2172C9.97532 5.95022 10.9853 5.81423 12 5.8128C13.02 5.8176 14.046 5.9508 15.0048 6.2172C17.2956 4.662 18.3012 4.9848 18.3012 4.9848C18.9564 6.6396 18.5436 7.8624 18.4212 8.166C19.1892 9.006 19.6548 10.08 19.6548 11.3916C19.6548 16.0092 16.848 17.0256 14.1756 17.3232C14.6064 17.694 14.9892 18.4272 14.9892 19.5492C14.9892 21.1548 14.9748 22.452 14.9748 22.8456C14.9748 23.1672 15.1908 23.5416 15.8004 23.424C18.19 22.6225 20.2672 21.0904 21.7386 19.0441C23.2099 16.9977 24.001 14.5408 24 12.0204C24 5.3808 18.6264 0 12 0Z" fill="currentColor"/>
              </svg>
            </span>
            <span>View code</span>
          </a>
          <a className="cd-meta-pill" onClick={() => onStub(`Storybook · ${config.name}`)}>
            <span className="cd-meta-ico" style={{ background: "#FF4785", color: "#fff" }} aria-hidden="true">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                <path d="M16.71.243l-.12 2.71a.18.18 0 00.29.15l1.06-.8.9.7a.18.18 0 00.28-.14l-.1-2.76 1.33-.1a1.2 1.2 0 011.279 1.2v21.596a1.2 1.2 0 01-1.26 1.2l-16.096-.72a1.2 1.2 0 01-1.15-1.16l-.75-19.797a1.2 1.2 0 011.13-1.27L16.7.222zM13.64 9.3c0 .47 3.16.24 3.59-.08 0-3.2-1.72-4.89-4.859-4.89-3.15 0-4.899 1.72-4.899 4.29 0 4.45 5.999 4.53 5.999 6.959 0 .7-.32 1.1-1.05 1.1-.96 0-1.35-.49-1.3-2.16 0-.36-3.649-.48-3.769 0-.27 4.03 2.23 5.2 5.099 5.2 2.79 0 4.969-1.49 4.969-4.18 0-4.77-6.099-4.64-6.099-6.999 0-.97.72-1.1 1.13-1.1.45 0 1.25.07 1.19 1.87z"/>
              </svg>
            </span>
            <span>View Storybook</span>
          </a>
          <a className="cd-meta-pill" onClick={() => onStub(`Design · ${config.name}`)}>
            <span className="cd-meta-ico fig" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.00006 24C10.2081 24 12.0001 22.208 12.0001 20V15.9999H8.00006C5.79205 15.9999 4 17.792 4 20C4 22.208 5.79205 24 8.00006 24Z" fill="#0ACF83"/>
                <path d="M4 12C4 9.79197 5.79205 7.99994 8.00006 7.99994H12.0001V15.9999H8.00006C5.79205 16 4 14.208 4 12Z" fill="#A259FF"/>
                <path d="M4 4.00003C4 1.79203 5.79205 0 8.00006 0H12.0001V7.99997H8.00006C5.79205 7.99997 4 6.20803 4 4.00003Z" fill="#F24E1E"/>
                <path d="M12 0H16.0001C18.2081 0 20.0001 1.79203 20.0001 4.00003C20.0001 6.20803 18.2081 7.99997 16.0001 7.99997H12V0Z" fill="#FF7262"/>
                <path d="M20.0001 12C20.0001 14.208 18.2081 16 16.0001 16C13.792 16 12 14.208 12 12C12 9.79197 13.792 7.99994 16.0001 7.99994C18.2081 7.99994 20.0001 9.79197 20.0001 12Z" fill="#1ABCFE"/>
              </svg>
            </span>
            <span>View Design</span>
          </a>
        </div>
      </div>
    );
  }

  /* ───────────────── Section helpers ─────────────────
     Each section renders an <img> when its config slot provides `img`,
     and falls back to the existing React-node renderer otherwise. This
     lets new Figma-exported PNGs swap in for the live mocks one
     component at a time without breaking unconverted components. */
  function Anatomy({ config }) {
    const legend = config.anatomy || [];
    const Diagram = config.anatomyDiagram;
    return (
      <section id="anatomy" className="cd-section">
        <div className="cd-section-num">01 / ANATOMY</div>
        <h2 className="cd-section-title ux4g-display-xs-default">Anatomy</h2>
        <div className="anatomy-wrap">
          <div className={"anatomy-stage" + (config.anatomyImg ? " anatomy-stage--image" : "")} aria-label={`${config.name} anatomy diagram`}>
            {config.anatomyImg
              ? <img className="cd-stage-img" src={config.anatomyImg} alt={config.anatomyImgAlt || `${config.name} anatomy`} />
              : (Diagram ? <Diagram /> : <span className="anatomy-stage-note">Annotated diagram coming soon</span>)}
          </div>
          <div className="anatomy-legend">
            {legend.map((it, i) => (
              <div className="leg-item" key={i}>
                <span className="leg-num">{it.n}</span>
                <div className="leg-text">
                  <span className="leg-label">{it.label}</span>
                  {it.desc && <span className="leg-desc">{it.desc}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  function PropRow({ label, desc, children }) {
    return (
      <div className="prop-row">
        <span className="prop-row-label ux4g-heading-s-default">{label}</span>
        <div className="prop-row-demos">{children}</div>
        {desc && <p className="prop-row-desc ux4g-body-s-default">{desc}</p>}
      </div>
    );
  }
  function PropDemo({ label, wide, children }) {
    return (
      <div className={"prop-demo" + (wide ? " prop-demo--wide" : "")}>
        <div className="prop-demo-stage">{children}</div>
        <span className="prop-demo-label ux4g-label-m-default">{label}</span>
      </div>
    );
  }

  function Properties({ config }) {
    const rows = config.properties || [];
    return (
      <section id="properties" className="cd-section">
        <div className="cd-section-num">02 / PROPERTIES</div>
        <h2 className="cd-section-title ux4g-display-xs-default">Properties</h2>
        <div className="prop-visual">
          {rows.map((row, i) => (
            <PropRow key={i} label={row.label} desc={row.desc}>
              {row.img
                ? <div className="prop-demo prop-demo--wide"><div className="prop-demo-stage cd-stage-img-wrap"><img className="cd-stage-img" src={row.img} alt={row.imgAlt || `${config.name} ${row.label.toLowerCase()}`} /></div></div>
                : (row.demos || []).map((d, j) => (
                    <PropDemo key={j} label={d.label} wide={d.wide}>{d.node}</PropDemo>
                  ))}
            </PropRow>
          ))}
        </div>
      </section>
    );
  }

  function Scenarios({ config }) {
    const scenarios = config.scenarios || [];
    // group into pairs of 2
    const pairs = [];
    for (let i = 0; i < scenarios.length; i += 2) pairs.push(scenarios.slice(i, i + 2));
    return (
      <section id="scenarios" className="cd-section">
        <div className="cd-section-num">03 / SCENARIOS</div>
        <h2 className="cd-section-title ux4g-display-xs-default">Scenarios</h2>
        {pairs.map((pair, pi) => (
          <div className="scn-pair" key={pi}>
            {pair.map((s, si) => (
              <div className="scn-card" key={si}>
                <h3 className="scn-title ux4g-heading-s-default">{s.title}</h3>
                <div className={"scn-stage" + (s.img ? " cd-stage-img-wrap" : "")}>
                  {s.img
                    ? <img className="cd-stage-img" src={s.img} alt={s.imgAlt || s.title} />
                    : s.stage}
                </div>
                <p className="scn-desc ux4g-body-s-default">{s.desc}</p>
              </div>
            ))}
          </div>
        ))}
      </section>
    );
  }

  function Responsive({ config }) {
    const list = config.responsive || [];
    return (
      <section id="responsive" className="cd-section">
        <div className="cd-section-num">04 / RESPONSIVE</div>
        <h2 className="cd-section-title ux4g-display-xs-default">Responsive</h2>
        <div className="resp-list">
          {list.map((r, i) => (
            <div className="resp-card" key={i}>
              <h3 className="resp-title ux4g-heading-s-default">{r.title}</h3>
              <div className={"resp-stage" + (r.img ? " cd-stage-img-wrap" : "")}>
                {r.img
                  ? <img className="cd-stage-img" src={r.img} alt={r.imgAlt || r.title} />
                  : r.sample}
              </div>
              <p className="resp-desc ux4g-body-s-default">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  function BestPractices({ config }) {
    const items = config.practices || [];
    const check = (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
    );
    const dismiss = (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
    );
    return (
      <section id="best-practices" className="cd-section">
        <div className="cd-section-num">05 / BEST PRACTICES</div>
        <h2 className="cd-section-title ux4g-display-xs-default">Best practices</h2>
        {items.map((pair, i) => (
          <div className="dd-pair" key={i}>
            <div className="dd-card do">
              <div className="dd-stage">
                <span className="dd-badge" aria-hidden="true">{check}</span>
                {pair.do.img
                  ? <img className="cd-stage-img" src={pair.do.img} alt={pair.do.imgAlt || "Do · " + pair.do.rule.slice(0, 60)} />
                  : pair.do.stage}
              </div>
              <div className="dd-rule ux4g-body-s-default">{pair.do.rule}</div>
            </div>
            <div className="dd-card dont">
              <div className="dd-stage">
                <span className="dd-badge" aria-hidden="true">{dismiss}</span>
                {pair.dont.img
                  ? <img className="cd-stage-img" src={pair.dont.img} alt={pair.dont.imgAlt || "Don't · " + pair.dont.rule.slice(0, 60)} />
                  : pair.dont.stage}
              </div>
              <div className="dd-rule ux4g-body-s-default">{pair.dont.rule}</div>
            </div>
          </div>
        ))}
      </section>
    );
  }

  function Accessibility({ config }) {
    const items = config.accessibility || [];
    return (
      <section id="accessibility" className="cd-section">
        <div className="cd-section-num">06 / ACCESSIBILITY</div>
        <h2 className="cd-section-title ux4g-display-xs-default">Accessibility</h2>
        <div className="a11y-list">
          {items.map((it, i) => (
            <div className="a11y-row" key={i}>
              <div className="a-num">{i + 1}</div>
              <div className="a-body ux4g-body-m-default">
                <strong>{it.t}</strong>
                {it.b}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  function Related({ config, onStub }) {
    const related = config.related || [];
    return (
      <section id="related" className="cd-section">
        <div className="cd-section-num">07 / RELATED</div>
        <h2 className="cd-section-title ux4g-display-xs-default">Related components</h2>
        <div className="related-grid">
          {related.map((r, i) => (
            <div className="related-card" key={i} onClick={() => {
              const href = PAGE_MAP[r.name];
              if (href) window.location.href = href;
              else onStub(r.name);
            }}>
              <div className="r-stage">{r.preview}</div>
              <h3 className="r-name ux4g-heading-s-default">{r.name}</h3>
              <p className="r-note ux4g-body-s-default">{r.note}</p>
              <span className="r-arrow" aria-hidden="true">↗</span>
            </div>
          ))}
        </div>
      </section>
    );
  }

  function ForDevelopers({ config, onStub }) {
    return (
      <section id="developers" className="cd-section dev-section">
        <div className="dev-banner">
          <div className="dev-banner-deco" aria-hidden="true">
            <span className="dev-deco-grid"></span>
            <span className="dev-deco-glow"></span>
            <span className="dev-deco-icon">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </span>
          </div>
          <div className="dev-banner-body">
            <h3 className="dev-banner-title ux4g-heading-xl-default">Building with UX4G?</h3>
            <p className="dev-banner-text ux4g-body-m-default">
              See the {config.name}'s full API reference, props, code examples, and accessibility implementation in the developer reference.
            </p>
            <div className="dev-banner-actions">
              <button className="ux4g-btn-primary ux4g-btn-lg" onClick={() => onStub(`For developers · ${config.name}`)}>
                For developers
                <span className="dev-cta-arrow" aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* ───────────────── App ───────────────── */
  function App({ config }) {
    const { toasts, push } = useToasts();
    const stub = (n) => push(`${n}, page coming soon`);
    const [active, setActive] = useState("anatomy");

    useEffect(() => {
      const onScroll = () => {
        const probe = 180;
        let cur = SECTIONS[0].id;
        for (const s of SECTIONS) {
          const el = document.getElementById(s.id);
          if (!el) continue;
          const top = el.getBoundingClientRect().top;
          if (top < probe) cur = s.id;
        }
        setActive(cur);
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
      <>
        <Navbar />
        <main className="cd-page">
          <div className="cd-header-wrap">
            <HeaderSec config={config} onStub={stub} />
          </div>
          <ComponentNav current={config.navName || config.name} onStub={stub} />
          <div className="cd-layout">
            <div className="cd-main">
              <Anatomy config={config} />
              <Properties config={config} />
              <Scenarios config={config} />
              <Responsive config={config} />
              <BestPractices config={config} />
              <Accessibility config={config} />
              <Related config={config} onStub={stub} />
              <ForDevelopers config={config} onStub={stub} />
            </div>
            <Sidebar active={active} onStub={stub} componentName={config.name} />
          </div>
        </main>
        <SiteFooter />
        <Toasts items={toasts} />
      </>
    );
  }

  // Expose helpers on window so component config files can use them
  window.UX4G_CP = { Btn, App, PAGE_MAP };

  // Render when a config is registered. Components either set the config before
  // this script loads OR call window.UX4G_CP.render(config) later.
  window.UX4G_CP.render = function (config) {
    const root = document.getElementById("root");
    if (!root) return;
    ReactDOM.createRoot(root).render(<App config={config} />);
  };
  if (window.UX4G_COMPONENT_CONFIG) {
    window.UX4G_CP.render(window.UX4G_COMPONENT_CONFIG);
  }
})();
