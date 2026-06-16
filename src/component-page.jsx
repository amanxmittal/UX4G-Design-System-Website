/* global React, ReactDOM */
const { useState, useEffect, useRef, useCallback } = React;

/* ───────────────── Toasts + Nav (shared) ───────────────── */
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

/* ───────────────── Reusable Button (real UX4G classes) ───────────────── */
function Btn({ kind = "primary", shape = "rectangle", size = "m", state, danger, iconLeft, iconRight, iconOnly, fullWidth, loading, ariaLabel, children, onClick }) {
  const kindMap = {
    primary:          "ux4g-btn-primary",
    filled:           "ux4g-btn-primary",
    outlined:         "ux4g-btn-outline-primary",
    outline:          "ux4g-btn-outline-primary",
    "outlined-neutral": "ux4g-btn-outline-neutral",
    text:             "ux4g-btn-text-primary",
    "text-neutral":   "ux4g-btn-text-neutral",
    tonal:            "ux4g-btn-tonal-primary",
    destructive:      "ux4g-btn-danger",
  };
  const sizeMap = {
    xs: "ux4g-btn-xs",
    s:  "ux4g-btn-sm",
    m:  "ux4g-btn-md",
    l:  "ux4g-btn-lg",
    xl: "ux4g-btn-xl",
  };
  const cls = [kindMap[kind] || "ux4g-btn-primary", sizeMap[size] || "ux4g-btn-md"];
  if (danger) cls.push("is-danger");
  if (shape === "pill") cls.push("ux4g-btn-pill");
  if (iconOnly) cls.push("r-icon-only");
  if (state) cls.push("state-" + state);
  if (loading) cls.push("state-loading");
  const inlineStyle = fullWidth ? { width: "100%" } : undefined;
  return (
    <button
      className={cls.join(" ")}
      disabled={state === "disabled"}
      onClick={onClick}
      type="button"
      aria-label={ariaLabel || undefined}
      style={inlineStyle}
    >
      {loading && <span className="spin"></span>}
      {iconLeft && !loading && <span className="btn-ico">{iconLeft}</span>}
      {!iconOnly && <span>{children}</span>}
      {iconOnly && !loading && children}
      {iconRight && <span className="btn-ico">{iconRight}</span>}
    </button>
  );
}

/* ───────────────── Left component quick-nav ───────────────── */
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
  "Feedback (Rating)": "UX4G Feedback Rating.html",
  "Draft Status Banner": "UX4G Draft Status Banner.html",
  "SLA Progress Indicator": "UX4G SLA Progress Indicator.html",
  "Carousel": "UX4G Carousel.html",
  "Status Pipeline": "UX4G Status Pipeline.html",
  "Escalation Tree": "UX4G Escalation Tree.html",
  "Journey Timeline": "UX4G Journey Timeline.html",
  "Checklist": "UX4G Checklist.html",
  "Social Links": "UX4G Social Links.html",
  "Biometric Capture": "UX4G Biometric Capture.html",
};

const COMPONENT_NAV = [
  {
    id: "form", name: "Form Elements",
    items: [
      "Button", "Input", "Textarea", "Checkbox", "Radio Button",
      "Switch / Toggle", "Dropdown Menu", "Combobox", "Search", "Slider",
      "Form Field Group", "Input OTP", "Date Picker", "Time Picker", "File Upload",
    ],
  },
  {
    id: "feedback", name: "Feedback",
    items: [
      "Alert / Toast", "Badge", "Tag", "Spinner", "Progress Indicator",
      "Feedback (Rating)", "Draft Status Banner", "SLA Progress Indicator",
      "Empty State", "Tooltip", "Modal", "Dialog", "Popover",
    ],
  },
  {
    id: "data", name: "Data Display",
    items: [
      "Card", "Table", "Accordion", "Carousel", "List", "Avatar", "Image",
      "Status Pipeline", "Journey Timeline", "Escalation Tree", "Checklist",
      "Slot Grid",
    ],
  },
  {
    id: "nav", name: "Navigation",
    items: [
      "Link", "Breadcrumb", "Tab", "Stepper", "Pagination", "Navbar", "Drawer", "Chip", "Chip Group",
    ],
  },
  {
    id: "utility", name: "Utility",
    items: [
      "Divider", "Icon Button", "Footer", "Social Links", "Accessibility Bar",
    ],
  },
  {
    id: "capture", name: "Capture & Verification",
    items: [
      "Biometric Capture",
    ],
  },
];

function ComponentNav({ current, onStub }) {
  const [openGroups, setOpenGroups] = useState(() => {
    const init = {};
    COMPONENT_NAV.forEach((g) => { init[g.id] = g.items.includes(current); });
    return init;
  });
  const toggle = (id) => setOpenGroups((s) => ({ ...s, [id]: !s[id] }));
  const [q, setQ] = useState("");
  const navRef = useRef(null);

  useEffect(() => {
    const PAD_START = 104;
    const PAD_END = 24;
    const SCROLL_RANGE = PAD_START - PAD_END;
    const onScroll = () => {
      if (!navRef.current) return;
      const pad = Math.max(PAD_END, PAD_START - window.scrollY);
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
        <input
          type="text"
          placeholder="Search components"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </label>

      <nav className="cnl-groups">
        {COMPONENT_NAV.map((g) => {
          const filtered = query
            ? g.items.filter((n) => n.toLowerCase().includes(query))
            : g.items;
          if (query && filtered.length === 0) return null;
          const isOpen = query ? true : !!openGroups[g.id];
          return (
            <div className={"cnl-group" + (isOpen ? " open" : "")} key={g.id}>
              <button
                type="button"
                className="cnl-group-head"
                onClick={() => !query && toggle(g.id)}
              >
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
                          <a
                            className={"cnl-item" + (isCurrent ? " current" : "")}
                            href={href}
                            aria-current={isCurrent ? "page" : undefined}
                          >
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

/* ───────────────── Sidebar ───────────────── */
const SECTIONS = [
  { id: "anatomy",        label: "Anatomy" },
  { id: "properties",     label: "Properties" },
  { id: "scenarios",      label: "Scenarios" },
  { id: "responsive",     label: "Responsive" },
  { id: "best-practices", label: "Best practices" },
  { id: "accessibility",  label: "Accessibility" },
  { id: "related",        label: "Related components" },
];
function Sidebar({ active, onStub }) {
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
            <a
              className={active === s.id ? "active" : ""}
              onClick={() => scrollTo(s.id)}
            >{s.label}</a>
          </li>
        ))}
        <li><div className="divider"></div></li>
        <li>
          <a className="ext" onClick={() => onStub("Storybook · Button")}>For developers</a>
        </li>
      </ul>
    </aside>
  );
}

/* ───────────────── Sections ───────────────── */
function HeaderSec({ onStub }) {
  return (
    <div className="cd-header">
      <div className="cd-crumb">
        <a href="index.html">Home</a>
        <span className="sep">/</span>
        <a href="UX4G Components.html">Components</a>
        <span className="sep">/</span>
        <a href="UX4G Components.html#g-form">Form Elements</a>
        <span className="sep">/</span>
        <span className="current">Button</span>
      </div>
      <div className="cd-title-row">
        <h1 className="cd-title">Button</h1>
      </div>
      <p className="cd-desc">
        Triggers actions. Use for form submissions, navigation confirmations, and primary user decisions.
      </p>

      <div className="cd-hero-banner" aria-hidden="true">
        <div className="hb-grain"></div>
        <div className="hb-soft-blur"></div>
        <div className="hb-stack-back"></div>
        <div className="hb-hero-btn">
          <span className="hb-hero-label"></span>
          <span className="hb-hero-arrow">
            <span className="hb-hero-arrow-stem"></span>
            <span className="hb-hero-arrow-head"></span>
          </span>
        </div>
        <div className="hb-ripple">
          <span className="hb-ring r1"></span>
          <span className="hb-ring r2"></span>
          <span className="hb-ring r3"></span>
        </div>
        <svg className="hb-cursor" viewBox="0 0 60 76" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 4 L52 38 L30 42 L42 68 L32 72 L20 46 L6 60 Z"
            fill="var(--amber)"
            stroke="var(--primary-dark)"
            strokeWidth="3"
            strokeLinejoin="round" />
        </svg>
      </div>

      <div className="cd-link-pills">
        <a className="cd-meta-pill" onClick={() => onStub("Code · Button")}>
          <span className="cd-meta-ico" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#gh-clip)">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.3724 0 0 5.3808 0 12.0204C0 17.3304 3.438 21.8364 8.2068 23.4252C8.8068 23.5356 9.0252 23.1648 9.0252 22.8456C9.0252 22.5612 9.0156 21.804 9.0096 20.802C5.6712 21.528 4.9668 19.1904 4.9668 19.1904C4.422 17.8008 3.6348 17.4312 3.6348 17.4312C2.5452 16.6872 3.7176 16.7016 3.7176 16.7016C4.9212 16.7856 5.5548 17.94 5.5548 17.94C6.6252 19.776 8.364 19.2456 9.0468 18.9384C9.1572 18.162 9.4668 17.6328 9.81 17.3328C7.146 17.0292 4.344 15.9972 4.344 11.3916C4.344 10.08 4.812 9.006 5.5788 8.166C5.4552 7.8624 5.0436 6.6396 5.6964 4.986C5.6964 4.986 6.7044 4.662 8.9964 6.2172C9.97532 5.95022 10.9853 5.81423 12 5.8128C13.02 5.8176 14.046 5.9508 15.0048 6.2172C17.2956 4.662 18.3012 4.9848 18.3012 4.9848C18.9564 6.6396 18.5436 7.8624 18.4212 8.166C19.1892 9.006 19.6548 10.08 19.6548 11.3916C19.6548 16.0092 16.848 17.0256 14.1756 17.3232C14.6064 17.694 14.9892 18.4272 14.9892 19.5492C14.9892 21.1548 14.9748 22.452 14.9748 22.8456C14.9748 23.1672 15.1908 23.5416 15.8004 23.424C18.19 22.6225 20.2672 21.0904 21.7386 19.0441C23.2099 16.9977 24.001 14.5408 24 12.0204C24 5.3808 18.6264 0 12 0Z" fill="currentColor"/>
              </g>
              <defs><clipPath id="gh-clip"><rect width="24" height="24" fill="white"/></clipPath></defs>
            </svg>
          </span>
          <span>View code</span>
        </a>
        <a className="cd-meta-pill" onClick={() => onStub("Storybook · Button")}>
          <span className="cd-meta-ico" style={{ background: "#FF4785", color: "#fff" }} aria-hidden="true">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
              <path d="M16.71.243l-.12 2.71a.18.18 0 00.29.15l1.06-.8.9.7a.18.18 0 00.28-.14l-.1-2.76 1.33-.1a1.2 1.2 0 011.279 1.2v21.596a1.2 1.2 0 01-1.26 1.2l-16.096-.72a1.2 1.2 0 01-1.15-1.16l-.75-19.797a1.2 1.2 0 011.13-1.27L16.7.222zM13.64 9.3c0 .47 3.16.24 3.59-.08 0-3.2-1.72-4.89-4.859-4.89-3.15 0-4.899 1.72-4.899 4.29 0 4.45 5.999 4.53 5.999 6.959 0 .7-.32 1.1-1.05 1.1-.96 0-1.35-.49-1.3-2.16 0-.36-3.649-.48-3.769 0-.27 4.03 2.23 5.2 5.099 5.2 2.79 0 4.969-1.49 4.969-4.18 0-4.77-6.099-4.64-6.099-6.999 0-.97.72-1.1 1.13-1.1.45 0 1.25.07 1.19 1.87z"/>
            </svg>
          </span>
          <span>View Storybook</span>
        </a>
        <a className="cd-meta-pill" onClick={() => onStub("Design · Button")}>
          <span className="cd-meta-ico fig" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#fig-clip)">
                <path d="M8.00006 24C10.2081 24 12.0001 22.208 12.0001 20V15.9999H8.00006C5.79205 15.9999 4 17.792 4 20C4 22.208 5.79205 24 8.00006 24Z" fill="#0ACF83"/>
                <path d="M4 12C4 9.79197 5.79205 7.99994 8.00006 7.99994H12.0001V15.9999H8.00006C5.79205 16 4 14.208 4 12Z" fill="#A259FF"/>
                <path d="M4 4.00003C4 1.79203 5.79205 0 8.00006 0H12.0001V7.99997H8.00006C5.79205 7.99997 4 6.20803 4 4.00003Z" fill="#F24E1E"/>
                <path d="M12 0H16.0001C18.2081 0 20.0001 1.79203 20.0001 4.00003C20.0001 6.20803 18.2081 7.99997 16.0001 7.99997H12V0Z" fill="#FF7262"/>
                <path d="M20.0001 12C20.0001 14.208 18.2081 16 16.0001 16C13.792 16 12 14.208 12 12C12 9.79197 13.792 7.99994 16.0001 7.99994C18.2081 7.99994 20.0001 9.79197 20.0001 12Z" fill="#1ABCFE"/>
              </g>
              <defs><clipPath id="fig-clip"><rect width="24" height="24" fill="white"/></clipPath></defs>
            </svg>
          </span>
          <span>View Design</span>
        </a>
      </div>
    </div>
  );
}

/* ───────────────── 01 · Anatomy ───────────────── */
const ANATOMY_LEGEND = [
  {
    n: 1,
    label: "Left Icon (Optional)",
    desc: "Icons help users quickly understand the action associated with the button (e.g., a trash can for delete).",
  },
  {
    n: 2,
    label: "Label",
    desc: "The textual content that briefly and clearly describes the button’s action to the user (e.g., “Submit,” “Save,” “Cancel”).",
  },
  {
    n: 3,
    label: "Right Icon (Optional)",
    desc: "An icon positioned after the Label, often used to indicate more information (e.g., a dropdown arrow).",
  },
  {
    n: 4,
    label: "Container",
    desc: "The background shape (usually rectangular) that encloses the button's content.",
  },
];
function Anatomy() {
  return (
    <section id="anatomy" className="cd-section">
      <div className="cd-section-num">01 / ANATOMY</div>
      <h2 className="cd-section-title ux4g-display-xs-default">Anatomy</h2>
      <div className="anatomy-wrap">
        <div className="anatomy-stage anatomy-stage--image">
          <img src="assets/images/anatomy/button-anatomy.png" alt="Button anatomy — numbered callouts for left icon, label, right icon, and container." />
        </div>
        <div className="anatomy-legend">
          {ANATOMY_LEGEND.map((it) => (
            <div className="leg-item" key={it.n}>
              <span className="leg-num">{it.n}</span>
              <div className="leg-text">
                <span className="leg-label">{it.label}</span>
                <span className="leg-desc">{it.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────── 02 · Properties ───────────────── */
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
function Properties() {
  return (
    <section id="properties" className="cd-section">
      <div className="cd-section-num">02 / PROPERTIES</div>
      <h2 className="cd-section-title ux4g-display-xs-default">Properties</h2>
      <div className="prop-visual">

        <PropRow label="Variant" desc="Sets the visual emphasis. Use Filled for the primary action, Outlined and Tonal for secondary actions, and Text for tertiary or low-emphasis affordances.">
          <div className="cd-stage-img-wrap">
            <img className="cd-stage-img" src="assets/images/component-anatomy/button/properties-variant.png" alt="Button variant property — Filled, Outlined, Text, and Tonal examples labeled with the variant name." />
          </div>
        </PropRow>

        <PropRow label="Destructive" desc="Set Danger to true on any variant for irreversible actions like Delete. The modifier layers a red treatment over the chosen variant — pair with a confirmation dialog.">
          <div className="cd-stage-img-wrap">
            <img className="cd-stage-img" src="assets/images/component-anatomy/button/properties-destructive.png" alt="Destructive Button — Filled, Outlined, and Text variants with the Danger modifier applied to a Delete action." />
          </div>
        </PropRow>

        <PropRow label="Size" desc="Five sizes from Extra-small (24px) to Extra-large (56px). Medium (40px) is the default on desktop; use Large or Extra-large for mobile or hero CTAs and Small/Extra-small only in dense layouts.">
          <div className="cd-stage-img-wrap">
            <img className="cd-stage-img" src="assets/images/component-anatomy/button/properties-size.png" alt="Button size property — Extra-small (24px), Small (32px), Medium (40px), Large (48px) and Extra-large (56px)." />
          </div>
        </PropRow>

        <PropRow label="Icons" desc="Pair icons with a text label whenever space allows. The icon can sit on the leading edge for actions like Add, the trailing edge for directional cues, or replace the spinner glyph when the Button enters its loading state.">
          <div className="cd-stage-img-wrap">
            <img className="cd-stage-img" src="assets/images/component-anatomy/button/properties-icons.png" alt="Button icon property — Leading icon, Trailing icon, and Loading examples." />
          </div>
        </PropRow>

        <PropRow label="Style" desc="Every variant supports the five interaction states — Default, Hover, Pressed, Focused, and Disabled — across both Brand and Neutral tones. Use Brand for purposeful actions, Neutral for low-emphasis controls inside toolbars and tables.">
          <div className="cd-stage-img-wrap">
            <img className="cd-stage-img" src="assets/images/component-anatomy/button/properties-style.png" alt="Button style matrix — Brand and Neutral variants across Default, Hover, Pressed, Focused, and Disabled states." />
          </div>
        </PropRow>

        <PropRow label="Shape" desc="Rectangle is the default and works for most surfaces. Use Pill for marketing CTAs, hero blocks, and emphatic destructive prompts where the rounded geometry adds approachability.">
          <div className="cd-stage-img-wrap">
            <img className="cd-stage-img" src="assets/images/component-anatomy/button/properties-shape.png" alt="Button shape property — Rectangle and Pill examples." />
          </div>
        </PropRow>

      </div>
    </section>
  );
}

/* ───────────────── 03 · Scenarios ───────────────── */
function Scenarios() {
  return (
    <section id="scenarios" className="cd-section">
      <div className="cd-section-num">03 / SCENARIOS</div>
      <h2 className="cd-section-title ux4g-display-xs-default">Scenarios</h2>

      <div className="scn-pair">
        <div className="scn-card">
          <h3 className="scn-title ux4g-heading-s-default">Primary CTA</h3>
          <div className="scn-stage cd-stage-img-wrap">
            <img className="cd-stage-img" src="assets/images/component-anatomy/button/scenarios-primary-cta.png" alt="Scenario — single Filled primary call-to-action button." />
          </div>
          <p className="scn-desc ux4g-body-s-default">The single most important action in a flow. Render the Primary CTA as a Filled Button — there should only ever be one per page section so the user always knows where to commit.</p>
        </div>

        <div className="scn-card">
          <h3 className="scn-title ux4g-heading-s-default">Action pair</h3>
          <div className="scn-stage cd-stage-img-wrap">
            <img className="cd-stage-img" src="assets/images/component-anatomy/button/scenarios-action-pair.png" alt="Scenario — Back (Outlined, leading icon) and Next step (Filled, trailing icon) action pair." />
          </div>
          <p className="scn-desc ux4g-body-s-default">Pair an Outlined back-action with a Filled forward-action to give multi-step flows clear directional intent. Use leading and trailing icons to reinforce direction.</p>
        </div>
      </div>

      <div className="scn-pair">
        <div className="scn-card">
          <h3 className="scn-title ux4g-heading-s-default">Loading state</h3>
          <div className="scn-stage cd-stage-img-wrap">
            <img className="cd-stage-img" src="assets/images/component-anatomy/button/scenarios-loading-state.png" alt="Scenario — Submitting… (Filled) and Loading… (Outlined) buttons in their loading state." />
          </div>
          <p className="scn-desc ux4g-body-s-default">During a network request, swap to the loading state. Keep the label visible so users remember which action they triggered, and surface the spinner inline rather than overlaying the page.</p>
        </div>

        <div className="scn-card">
          <h3 className="scn-title ux4g-heading-s-default">Confirmation required</h3>
          <div className="scn-stage cd-stage-img-wrap">
            <img className="cd-stage-img" src="assets/images/component-anatomy/button/scenarios-confirmation-required.png" alt="Scenario — Pill-shaped Danger Filled button labelled Delete account." />
          </div>
          <p className="scn-desc ux4g-body-s-default">Destructive Buttons never act immediately. Use the Danger modifier and pair the action with a confirmation dialog so the user has a chance to back out.</p>
        </div>
      </div>

      <div className="scn-pair">
        <div className="scn-card">
          <h3 className="scn-title ux4g-heading-s-default">Button group</h3>
          <div className="scn-stage cd-stage-img-wrap">
            <img className="cd-stage-img" src="assets/images/component-anatomy/button/scenarios-button-group.png" alt="Scenario — Track my application, Add to calendar, Return to services and an icon-only Button grouped together." />
          </div>
          <p className="scn-desc ux4g-body-s-default">Combine variants when a screen needs more than one action — Filled for the next step, Outlined for secondary actions, and an Icon-only Button for compact controls inside the same row.</p>
        </div>

        <div className="scn-card">
          <h3 className="scn-title ux4g-heading-s-default">Disabled with reason</h3>
          <div className="scn-stage cd-stage-img-wrap">
            <img className="cd-stage-img" src="assets/images/component-anatomy/button/scenarios-disabled-with-reason.png" alt="Scenario — Disabled Proceed Button paired with a Text-Neutral Decline and exit affordance." />
          </div>
          <p className="scn-desc ux4g-body-s-default">When a Button can't be used yet, disable it AND offer an alternative path nearby — pair it with a Text-Neutral Button so the user can decline or exit gracefully instead of feeling blocked.</p>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── 04 · Responsive ───────────────── */
const RESPONSIVE = [
  {
    title: "Suggested sizes per breakpoint",
    desc: "Default to Extra-small, Small, and Medium on desktop where pointer precision is high; on mobile bump up to Large and Extra-large so the touch target is comfortable for a thumb.",
    img: "responsive-mobile",
    alt: "Responsive — Desktop sizes Extra-small, Small, Medium; Mobile sizes Large, Extra-large.",
  },
  {
    title: "Width modes",
    desc: "Buttons can hug their content (default), fill the available container width, or sit at a fixed width. Use Fill for primary CTAs in form footers, sticky bars, and on narrow mobile viewports.",
    img: "responsive-width-types",
    alt: "Responsive — Auto (hug), Fluid (fill container), and Fixed width Button layouts.",
  },
  {
    title: "44 × 44px tap-target floor",
    desc: "Even Extra-small and Small Buttons preserve a 44 × 44px hit area through invisible padding so motor accessibility is never compromised by visual sizing.",
    img: "responsive-touch-target",
    alt: "Responsive touch target — invisible padding keeps a 44 × 44px minimum tap area around every Button size.",
  },
];
function Responsive() {
  return (
    <section id="responsive" className="cd-section">
      <div className="cd-section-num">04 / RESPONSIVE</div>
      <h2 className="cd-section-title ux4g-display-xs-default">Responsive</h2>
      <div className="resp-list">
        {RESPONSIVE.map((r, i) => (
          <div className="resp-card" key={i}>
            <h3 className="resp-title ux4g-heading-s-default">{r.title}</h3>
            <div className="resp-stage cd-stage-img-wrap">
              <img className="cd-stage-img" src={`assets/images/component-anatomy/button/${r.img}.png`} alt={r.alt} />
            </div>
            <p className="resp-desc ux4g-body-s-default">{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────────────── 05 · Best Practices ───────────────── */
function BestPractices() {
  return (
    <section id="best-practices" className="cd-section">
      <div className="cd-section-num">05 / BEST PRACTICES</div>
      <h2 className="cd-section-title ux4g-display-xs-default">Best practices</h2>

      <div className="dd-pair">
        <div className="dd-card do">
          <div className="dd-stage">
            <img className="cd-stage-img" src="assets/images/component-anatomy/button/best-practices-1-do.png" alt="Do — one Primary CTA per section paired with an Outlined button." />
          </div>
          <div className="dd-rule ux4g-body-s-default">Only include one Filled button (Primary CTA) per main area or page. Use one primary call to action to help people proceed.</div>
        </div>
        <div className="dd-card dont">
          <div className="dd-stage">
            <img className="cd-stage-img" src="assets/images/component-anatomy/button/best-practices-1-dont.png" alt="Don't — multiple Primary Filled buttons competing for attention." />
          </div>
          <div className="dd-rule ux4g-body-s-default">Don't use multiple Filled buttons as they compete for user attention.</div>
        </div>
      </div>

      <div className="dd-pair">
        <div className="dd-card do">
          <div className="dd-stage">
            <img className="cd-stage-img" src="assets/images/component-anatomy/button/best-practices-2-do.png" alt="Do — short, specific button label like 'View report'." />
          </div>
          <div className="dd-rule ux4g-body-s-default">DO keep button labels short, using 2–3 words maximum, and avoid punctuation. Make the label specific and action-oriented (e.g., "Delete").</div>
        </div>
        <div className="dd-card dont">
          <div className="dd-stage">
            <img className="cd-stage-img" src="assets/images/component-anatomy/button/best-practices-2-dont.png" alt="Don't — long descriptive sentence as button label." />
          </div>
          <div className="dd-rule ux4g-body-s-default">DON'T write long, descriptive sentences (e.g., "Click this button to see the final report"). DON'T use vague, generic terms (e.g., "Yes", "OK", or "Confirm" without context).</div>
        </div>
      </div>

      <div className="dd-pair">
        <div className="dd-card do">
          <div className="dd-stage">
            <img className="cd-stage-img" src="assets/images/component-anatomy/button/best-practices-3-do.png" alt="Do — keep button pressable with error message beside the input field." />
          </div>
          <div className="dd-rule ux4g-body-s-default">DO keep buttons pressable and use clear error messages next to the input field to explain why the user can't proceed.</div>
        </div>
        <div className="dd-card dont">
          <div className="dd-stage">
            <img className="cd-stage-img" src="assets/images/component-anatomy/button/best-practices-3-dont.png" alt="Don't — disable the button entirely without feedback." />
          </div>
          <div className="dd-rule ux4g-body-s-default">DON'T disable buttons entirely, especially in forms. Disabled buttons cannot be reached by keyboard users and provide no feedback on the error.</div>
        </div>
      </div>

      <div className="dd-pair">
        <div className="dd-card do">
          <div className="dd-stage">
            <img className="cd-stage-img" src="assets/images/component-anatomy/button/best-practices-4-do.png" alt="Do — correct variant hierarchy: Submit (Filled), Save draft (Outlined), Cancel (Text)." />
          </div>
          <div className="dd-rule ux4g-body-s-default">DO use Filled for the main action, Outlined/Tonal for secondary actions, and Text for tertiary (least important) actions. Use the correct variant hierarchy: Submit (Filled), Save draft (Outlined), Cancel (Text).</div>
        </div>
        <div className="dd-card dont">
          <div className="dd-stage">
            <img className="cd-stage-img" src="assets/images/component-anatomy/button/best-practices-4-dont.png" alt="Don't — every action rendered as Filled, destroying the visual hierarchy." />
          </div>
          <div className="dd-rule ux4g-body-s-default">DON'T use a Text button for a critical action like "Delete User" — use a Danger Filled button instead. And don't render every action as Filled — it kills the hierarchy.</div>
        </div>
      </div>

      <div className="dd-pair">
        <div className="dd-card do">
          <div className="dd-stage">
            <img className="cd-stage-img" src="assets/images/component-anatomy/button/best-practices-5-do.png" alt="Do — standard medium or larger size ensuring 44px touch target." />
          </div>
          <div className="dd-rule ux4g-body-s-default">DO use the standard size (medium or larger) for most actions, ensuring the touch target is at least 44px. Use compact size only in tight spaces like toolbars.</div>
        </div>
        <div className="dd-card dont">
          <div className="dd-stage">
            <img className="cd-stage-img" src="assets/images/component-anatomy/button/best-practices-5-dont.png" alt="Don't — buttons so small they violate touch-target guidelines." />
          </div>
          <div className="dd-rule ux4g-body-s-default">DON'T use buttons so small they violate touch-target guidelines and become hard to tap on mobile.</div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── 06 · Accessibility ───────────────── */
function Accessibility() {
  const items = [
    { t: "Tap targets stay 44 × 44px or larger.", b: "Even XS and SM Buttons preserve hit area through invisible padding. Critical for thumb-first mobile use and motor accessibility." },
    { t: "Disabled Buttons explain why.", b: "Pair every Disabled state with a tooltip or helper text. A Button that does nothing without context feels broken to assistive-tech users." },
    { t: "Loading state announces progress.", b: "The spinner is paired with aria-live so screen-reader users hear the action is in flight, not stuck. Preserve the original label so context isn't lost." },
    { t: "Focus order follows visual order.", b: "Buttons receive focus in document order. Avoid tabindex hacks - fix the layout instead." },
    { t: "Destructive actions require confirmation.", b: "Pair every Danger Button with a Dialog. Never let a single tap commit an irreversible action." },
    { t: "Icon-only Buttons need an accessible name.", b: "Use aria-label when there is no visible text. The label should describe the action, not the icon shape." },
    { t: "Colour is never the only signal.", b: "All Button states (focus, disabled, loading) include a non-colour cue - outline, opacity, or motion - so colour-blind users aren't left out." },
  ];
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

/* ───────────────── 07 · Related Components ───────────────── */
function Related({ onStub }) {
  return (
    <section id="related" className="cd-section">
      <div className="cd-section-num">07 / RELATED</div>
      <h2 className="cd-section-title ux4g-display-xs-default">Related components</h2>
      <div className="related-grid">
        <div className="related-card" onClick={() => onStub("Icon Button")}>
          <div className="r-stage">
            <div className="r-icon-row">
              <Btn kind="primary" iconOnly ariaLabel="Add">+</Btn>
              <Btn kind="outlined" iconOnly ariaLabel="Search">⌕</Btn>
            </div>
          </div>
          <h3 className="r-name ux4g-heading-s-default">Icon Button</h3>
          <p className="r-note ux4g-body-s-default">When you need a Button but have no space for a label. Always pair with a tooltip and aria-label.</p>
          <span className="r-arrow" aria-hidden="true">↗</span>
        </div>

        <div className="related-card" onClick={() => onStub("Dialog")}>
          <div className="r-stage">
            <div className="r-dialog-mock">
              <div className="r-dialog-card">
                <div className="r-dialog-title">Confirm submission</div>
                <div className="r-dialog-actions">
                  <span className="r-dialog-cancel">Cancel</span>
                  <span className="r-dialog-submit">Submit</span>
                </div>
              </div>
            </div>
          </div>
          <h3 className="r-name ux4g-heading-s-default">Dialog</h3>
          <p className="r-note ux4g-body-s-default">Always pair Destructive Buttons with a Dialog so the user can confirm before the action commits.</p>
          <span className="r-arrow" aria-hidden="true">↗</span>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── 08 · For Developers Banner ───────────────── */
function ForDevelopers({ onStub }) {
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
            See the Button's full API reference, props, code examples, and accessibility implementation in the developer reference.
          </p>
          <div className="dev-banner-actions">
            <Btn kind="primary" size="l" onClick={() => onStub("For developers · Button")}>
              For developers
              <span className="dev-cta-arrow" aria-hidden="true">→</span>
            </Btn>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── App ───────────────── */
function App() {
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
      <Navbar onStub={stub} />
      <main className="cd-page">
        <div className="cd-header-wrap">
          <HeaderSec onStub={stub} />
        </div>
        <ComponentNav current="Button" onStub={stub} />
        <div className="cd-layout">
          <div className="cd-main">
            <Anatomy />
            <Properties />
            <Scenarios />
            <Responsive />
            <BestPractices />
            <Accessibility />
            <Related onStub={stub} />
            <ForDevelopers onStub={stub} />
          </div>
          <Sidebar active={active} onStub={stub} />
        </div>
      </main>

      <SiteFooter />
      <Toasts items={toasts} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
