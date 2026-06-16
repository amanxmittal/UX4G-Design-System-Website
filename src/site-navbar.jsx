/* global React */
/* Shared SiteNavbar — the single navigation bar used across every UX4G page.
   Three top-level items: Design System (opens a mega menu), Made by You,
   and the Get started button. The four design-system sections — Fundamentals,
   Foundations, Components, Patterns — are nested inside the Design System
   mega menu. */

/* Search index — all top-level destinations. Each entry: title, tag (the
   page-section the result lives under), description, href (HTML file), and
   thumb (a hue identifier; the result renders a tinted swatch with the page's
   initial letter when no image asset exists). Keep this list ordered as the
   user would scan it: foundations → components → patterns → meta. */
const SEARCH_INDEX = [
  /* Fundamentals */
  { title: "Get started", tag: "Fundamentals", desc: "Pick your role to begin: design or build with UX4G.", href: "UX4G Get Started.html", hue: "violet" },
  { title: "For designers", tag: "Fundamentals", desc: "Figma kit, anatomy callouts, handoff specs.", href: "UX4G Get Started Designer.html", hue: "violet" },
  { title: "For developers", tag: "Fundamentals", desc: "npm package, API reference, code examples.", href: "UX4G Get Started Developer.html", hue: "violet" },

  /* Foundations */
  { title: "Colour", tag: "Foundations", desc: "Primitive + semantic palette, contrast rules, dark mode.", href: "UX4G Colour.html", hue: "amber" },
  { title: "Typography", tag: "Foundations", desc: "Noto Sans + Display, type scale, weight variants.", href: "UX4G Typography.html", hue: "amber" },
  { title: "Spacing", tag: "Foundations", desc: "8-step scale, density tokens, layout rhythm.", href: "UX4G Spacing.html", hue: "amber" },
  { title: "Elevation", tag: "Foundations", desc: "Shadow levels, z-index system, focus states.", href: "UX4G Elevation.html", hue: "amber" },
  { title: "Layout / Slot Grid", tag: "Foundations", desc: "12-column grid, breakpoints, page templates.", href: "UX4G Layout.html", hue: "amber" },
  { title: "Border + Radius", tag: "Foundations", desc: "Border widths, radius scale, focus rings.", href: "UX4G Borders.html", hue: "amber" },

  /* Components — Form */
  { title: "Button", tag: "Components", desc: "Variants, sizes, states, do/don't, responsive.", href: "UX4G Button.html", hue: "primary" },
  { title: "Link", tag: "Components", desc: "Inline and standalone link styles.", href: "UX4G Link.html", hue: "primary" },
  { title: "Input", tag: "Components", desc: "Single-line text entry with labels and validation.", href: "UX4G Input.html", hue: "primary" },
  { title: "Textarea", tag: "Components", desc: "Multi-line text entry with resize behaviour.", href: "UX4G Textarea.html", hue: "primary" },
  { title: "Checkbox", tag: "Components", desc: "Single and group checkboxes.", href: "UX4G Checkbox.html", hue: "primary" },
  { title: "Radio Button", tag: "Components", desc: "Mutually exclusive single-choice control.", href: "UX4G Radio.html", hue: "primary" },
  { title: "Switch / Toggle", tag: "Components", desc: "Binary on/off state, instant feedback.", href: "UX4G Switch.html", hue: "primary" },
  { title: "Dropdown Menu", tag: "Components", desc: "Single-select from a longer list.", href: "UX4G Dropdown.html", hue: "primary" },
  { title: "Combobox", tag: "Components", desc: "Typeahead search + select.", href: "UX4G Combobox.html", hue: "primary" },
  { title: "Search", tag: "Components", desc: "Search field with autocomplete and history.", href: "UX4G Search.html", hue: "primary" },
  { title: "Slider", tag: "Components", desc: "Continuous numeric range selection.", href: "UX4G Slider.html", hue: "primary" },
  { title: "Form Field Group", tag: "Components", desc: "Field labels, helper text, error states.", href: "UX4G Form Field Group.html", hue: "primary" },
  { title: "Input OTP", tag: "Components", desc: "One-time-passcode entry with autoFill.", href: "UX4G Input OTP.html", hue: "primary" },
  { title: "Date Picker", tag: "Components", desc: "Calendar date selection — single date or range.", href: "UX4G Date Picker.html", hue: "primary" },
  { title: "Time Picker", tag: "Components", desc: "Time-of-day entry — AM/PM or 24-hour.", href: "UX4G Time Picker.html", hue: "primary" },
  { title: "File Upload", tag: "Components", desc: "Drag-and-drop and click-to-upload patterns.", href: "UX4G File Upload.html", hue: "primary" },

  /* Components — Feedback */
  { title: "Alert / Toast", tag: "Components", desc: "Inline alerts and ephemeral toast notifications.", href: "UX4G Alert.html", hue: "primary" },
  { title: "Badge", tag: "Components", desc: "Count + status badges; pinned to other elements.", href: "UX4G Badge.html", hue: "primary" },
  { title: "Tag", tag: "Components", desc: "Removable / static tag chips for categorisation.", href: "UX4G Tag.html", hue: "primary" },
  { title: "Spinner", tag: "Components", desc: "Indeterminate loading spinner.", href: "UX4G Spinner.html", hue: "primary" },
  { title: "Progress Indicator", tag: "Components", desc: "Determinate linear progress with steps.", href: "UX4G Progress.html", hue: "primary" },
  { title: "Feedback (Rating)", tag: "Components", desc: "Star and emoji rating capture.", href: "UX4G Feedback Rating.html", hue: "primary" },
  { title: "Empty State", tag: "Components", desc: "First-run, zero-data, and no-results displays.", href: "UX4G Empty State.html", hue: "primary" },
  { title: "Tooltip", tag: "Components", desc: "Hover/focus tooltip with arrow.", href: "UX4G Tooltip.html", hue: "primary" },
  { title: "Modal", tag: "Components", desc: "Dialog overlay for blocking interactions.", href: "UX4G Modal.html", hue: "primary" },
  { title: "Dialog", tag: "Components", desc: "Inline dialog for non-blocking confirmation.", href: "UX4G Dialog.html", hue: "primary" },
  { title: "Popover", tag: "Components", desc: "Floating panel anchored to a trigger.", href: "UX4G Popover.html", hue: "primary" },

  /* Components — Data Display */
  { title: "Card", tag: "Components", desc: "Surface for grouped content with hover state.", href: "UX4G Card.html", hue: "primary" },
  { title: "Table", tag: "Components", desc: "Data table with sort, filter, pagination.", href: "UX4G Table.html", hue: "primary" },
  { title: "Accordion", tag: "Components", desc: "Expand/collapse content sections.", href: "UX4G Accordion.html", hue: "primary" },
  { title: "Carousel", tag: "Components", desc: "Horizontal scrolling card carousel.", href: "UX4G Carousel.html", hue: "primary" },
  { title: "List", tag: "Components", desc: "Vertical list with dividers and density modes.", href: "UX4G List.html", hue: "primary" },
  { title: "Avatar", tag: "Components", desc: "User and entity avatars with fallback initials.", href: "UX4G Avatar.html", hue: "primary" },
  { title: "Status Pipeline", tag: "Components", desc: "Stepped progress for citizen service journeys.", href: "UX4G Status Pipeline.html", hue: "primary" },
  { title: "Journey Timeline", tag: "Components", desc: "Vertical timeline for application history.", href: "UX4G Journey Timeline.html", hue: "primary" },

  /* Components — Navigation */
  { title: "Breadcrumb", tag: "Components", desc: "Path-based navigation with collapse on overflow.", href: "UX4G Breadcrumb.html", hue: "primary" },
  { title: "Tab", tag: "Components", desc: "Tabbed content with keyboard navigation.", href: "UX4G Tab.html", hue: "primary" },
  { title: "Stepper", tag: "Components", desc: "Multi-step form progress indicator.", href: "UX4G Stepper.html", hue: "primary" },
  { title: "Pagination", tag: "Components", desc: "Page-number navigation with first/last jumps.", href: "UX4G Pagination.html", hue: "primary" },
  { title: "Navbar", tag: "Components", desc: "Primary navigation bar with sticky behaviour.", href: "UX4G Navbar.html", hue: "primary" },
  { title: "Drawer", tag: "Components", desc: "Side-panel for secondary navigation.", href: "UX4G Drawer.html", hue: "primary" },
  { title: "Chip", tag: "Components", desc: "Filter chip with selected/unselected states.", href: "UX4G Chip.html", hue: "primary" },

  /* Patterns */
  { title: "Identity & Access", tag: "Patterns", desc: "Sign-in, OTP, account recovery patterns.", href: "UX4G Identity & Access.html", hue: "primary", img: "assets/images/Identity & Access.png" },
  { title: "Consent & Declaration", tag: "Patterns", desc: "DPDP-compliant consent and declaration flows.", href: "UX4G Consent.html", hue: "primary", img: "assets/images/Consent.png" },
  { title: "Application & Submission", tag: "Patterns", desc: "Multi-step application forms and review.", href: "UX4G Application.html", hue: "primary", img: "assets/images/Application & Submission.png" },
  { title: "Status & Tracking", tag: "Patterns", desc: "Application status, SLA, escalation patterns.", href: "UX4G Status & Tracking.html", hue: "primary", img: "assets/images/Status & Tracking.png" },
  { title: "Payment & Transactions", tag: "Patterns", desc: "BharatKosh-integrated payment flows.", href: "UX4G Payments.html", hue: "primary", img: "assets/images/Payment & Transactions.png" },
  { title: "Search & Discovery", tag: "Patterns", desc: "Service catalogue search with Bhashini voice.", href: "UX4G Search & Discovery.html", hue: "primary", img: "assets/images/Search & Discovery.png" },
  { title: "Dashboard & Applications", tag: "Patterns", desc: "Citizen dashboard, application history, alerts.", href: "UX4G Dashboard.html", hue: "primary", img: "assets/images/Dashboard & Applications.png" },
  { title: "Notifications", tag: "Patterns", desc: "TRAI-DLT SMS, email, in-app notification system.", href: "UX4G Notifications.html", hue: "primary", img: "assets/images/Notifications.png" },
  { title: "Feedback & Communication", tag: "Patterns", desc: "CPGRAMS grievance, ratings, language switch.", href: "UX4G Feedback.html", hue: "primary", img: "assets/images/Feedback & Communication.png" },

  /* Made by You */
  { title: "Made by You", tag: "Made by You", desc: "Government portals and citizen solutions built on UX4G.", href: "UX4G Made by You.html", hue: "violet" },
  { title: "All Solutions", tag: "Made by You", desc: "Browse every community-contributed solution.", href: "UX4G Made by You All Solutions.html", hue: "violet" },
  { title: "All Portals", tag: "Made by You", desc: "Live government portals built using UX4G.", href: "UX4G Made by You All Portals.html", hue: "violet" },
];

/* Build per-tag tag styling so the result row can colour-code by section. */
const TAG_HUE = {
  "Fundamentals": "violet",
  "Foundations":  "amber",
  "Components":   "primary",
  "Patterns":     "primary",
  "Made by You":  "violet",
};

/* OS detection for the search-shortcut hint. macOS shows ⌘ K (the Apple
   command glyph), every other platform shows Ctrl K. We default to non-mac
   during SSR / first paint to avoid showing ⌘ to Windows users. */
function detectIsMac() {
  if (typeof navigator === "undefined") return false;
  const platform = (navigator.userAgentData && navigator.userAgentData.platform)
    || navigator.platform || navigator.userAgent || "";
  return /Mac|iPhone|iPod|iPad/i.test(platform);
}

function SiteNavbar() {
  const [megaOpen, setMegaOpen] = React.useState(false);
  const [isMac, setIsMac] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [activeIdx, setActiveIdx] = React.useState(0);
  const headerRef = React.useRef(null);
  const megaRef = React.useRef(null);
  const searchInputRef = React.useRef(null);

  /* Resolve platform on mount so the shortcut hint matches the user's OS. */
  React.useEffect(() => { setIsMac(detectIsMac()); }, []);

  /* Open the search palette: expand input, hide nav-links, dim main content,
     and focus the input on the next frame so the keyboard caret is ready. */
  const openSearch = React.useCallback(() => {
    setSearchOpen(true);
    setMegaOpen(false);
    requestAnimationFrame(() => {
      if (searchInputRef.current) searchInputRef.current.focus();
    });
  }, []);
  const closeSearch = React.useCallback(() => {
    setSearchOpen(false);
    setQuery("");
    setActiveIdx(0);
  }, []);

  /* Body class toggle so non-navbar CSS (backdrop blur on main content) can react. */
  React.useEffect(() => {
    document.body.classList.toggle("is-searching", searchOpen);
    if (searchOpen) document.body.style.overflow = "hidden";
    else document.body.style.removeProperty("overflow");
    return () => { document.body.classList.remove("is-searching"); document.body.style.removeProperty("overflow"); };
  }, [searchOpen]);

  /* Filter index by query — match on title, tag, and description so users
     can type "color", "consent", or "form" and get useful hits. */
  const results = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return SEARCH_INDEX.filter((r) => {
      const hay = (r.title + " " + r.tag + " " + r.desc).toLowerCase();
      return hay.includes(q);
    }).slice(0, 12);
  }, [query]);
  React.useEffect(() => { setActiveIdx(0); }, [query]);

  /* Global Cmd/Ctrl + K opens search, Esc closes. */
  React.useEffect(() => {
    const onKey = (e) => {
      const k = (e.key || "").toLowerCase();
      if ((e.metaKey || e.ctrlKey) && k === "k") {
        const t = e.target;
        const tag = t && t.tagName;
        const editable = t && (t.isContentEditable || ((tag === "INPUT" || tag === "TEXTAREA") && t !== searchInputRef.current));
        if (editable) return;
        e.preventDefault();
        openSearch();
        return;
      }
      if (k === "escape" && searchOpen) { e.preventDefault(); closeSearch(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openSearch, closeSearch, searchOpen]);

  /* Arrow-key + Enter navigation inside the results list. */
  const onSearchKey = (e) => {
    if (!results.length) return;
    if (e.key === "ArrowDown") { e.preventDefault(); setActiveIdx((i) => (i + 1) % results.length); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActiveIdx((i) => (i - 1 + results.length) % results.length); }
    else if (e.key === "Enter") {
      e.preventDefault();
      const r = results[activeIdx];
      if (r) window.location.href = r.href;
    }
  };

  const DESIGN_SYSTEM = [
    {
      name: "Fundamentals",
      href: "UX4G Fundamentals.html",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 5.4A2.4 2.4 0 0 1 6.4 3H20v14H6.4A2.4 2.4 0 0 0 4 19.4z" />
          <path d="M4 19.4A2.4 2.4 0 0 1 6.4 17H20v4H6.4A2.4 2.4 0 0 1 4 19.4z" />
        </svg>
      ),
    },
    {
      name: "Foundations",
      href: "UX4G Foundations.html",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3 2.5 8 12 13l9.5-5z" />
          <path d="M2.5 13 12 18l9.5-5" />
        </svg>
      ),
    },
    {
      name: "Components",
      href: "UX4G Components.html",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7.6" height="7.6" rx="1.6" />
          <rect x="13.4" y="3" width="7.6" height="7.6" rx="1.6" />
          <rect x="3" y="13.4" width="7.6" height="7.6" rx="1.6" />
          <rect x="13.4" y="13.4" width="7.6" height="7.6" rx="1.6" />
        </svg>
      ),
    },
    {
      name: "Patterns",
      href: "UX4G Patterns.html",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="6" cy="6" r="3" />
          <circle cx="18" cy="18" r="3" />
          <path d="M9 6h6a3 3 0 0 1 3 3v6" />
        </svg>
      ),
    },
    {
      name: "AI",
      href: "UX4G AI.html",
      ai: true,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3l1.9 4.7L18.6 9.6 13.9 11.5 12 16.2 10.1 11.5 5.4 9.6 10.1 7.7z" />
          <path d="M18.5 14.5l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z" />
        </svg>
      ),
    },
  ];

  /* Which Design System section the current page belongs to — covers each of
     the four hub pages AND all of their child pages, so the matching mega-menu
     card shows the active state. */
  const here =
    typeof window !== "undefined"
      ? decodeURIComponent((window.location.pathname.split("/").pop() || ""))
      : "";
  const FOUNDATIONS_PAGES = [
    "UX4G Foundations.html", "UX4G Colour.html", "UX4G Typography.html",
    "UX4G Spacing.html", "UX4G Borders.html", "UX4G Elevation.html",
    "UX4G Layout.html",
  ];
  const FUNDAMENTALS_PAGES = [
    "UX4G Fundamentals.html", "UX4G Accessibility.html", "UX4G Content.html",
  ];
  const AI_PAGES = [
    "UX4G AI.html", "UX4G AI Prompting.html", "UX4G AI Figma.html",
    "UX4G AI Make.html", "UX4G AI Coding.html", "UX4G AI Testing.html",
    "UX4G AI Safety.html",
  ];
  function detectSection() {
    if (typeof window !== "undefined") {
      /* component detail pages load cp-template.jsx -> window.UX4G_CP */
      if (window.UX4G_CP) return "Components";
      /* pattern detail pages load pt-shell.jsx -> window.PtNavbar / PtHero */
      if (window.PtHero || window.PtNavbar) return "Patterns";
    }
    if (here === "UX4G Components.html") return "Components";
    if (here === "UX4G Patterns.html") return "Patterns";
    if (FOUNDATIONS_PAGES.indexOf(here) !== -1) return "Foundations";
    if (FUNDAMENTALS_PAGES.indexOf(here) !== -1) return "Fundamentals";
    if (AI_PAGES.indexOf(here) !== -1) return "AI";
    return null;
  }
  const activeSection = detectSection();
  const onDesignSystem = activeSection !== null;
  const onMadeByYou = here === "UX4G Made by You.html"
    || here === "UX4G Made by You Solution.html"
    || here === "UX4G Made by You All Solutions.html"
    || here === "UX4G Made by You All Portals.html";

  React.useEffect(() => {
    if (!megaOpen) return undefined;
    const onKey = (e) => { if (e.key === "Escape") setMegaOpen(false); };
    const onDown = (e) => {
      const inHeader = headerRef.current && headerRef.current.contains(e.target);
      const inMega = megaRef.current && megaRef.current.contains(e.target);
      if (!inHeader && !inMega) setMegaOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
    };
  }, [megaOpen]);

  const caret = (
    <svg className="nav-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );

  return (
    <React.Fragment>
    <header className={"nav" + (megaOpen ? " nav--mega-open" : "")} ref={headerRef}>
      <div className="nav-inner">
        <a className="brand" href="index.html">
          <img src="assets/national-emblem.svg" alt="" aria-hidden="true" className="brand-emblem" />
          <img src="assets/ux4g-wordmark.svg" alt="UX4G" className="brand-logo" />
          <div className="brand-text">
            <span className="sub">Design System</span>
          </div>
        </a>

        {searchOpen && (
          <div className="nav-search-label" aria-hidden="true">
            Search inside{" "}
            <span className="nav-search-label-mark">
              <span className="nav-search-label-ux">UX</span><span className="nav-search-label-4g">4G</span>
            </span>{" "}
            Design System
          </div>
        )}

        <div className={"nav-search" + (searchOpen ? " is-open" : "")}>
          {!searchOpen && (
            <button
              type="button"
              className="nav-search-trigger"
              onClick={openSearch}
              aria-label="Search the design system"
            >
              <svg className="nav-search-icon" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="1.8"
                   strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
              <span className="nav-search-placeholder">Search</span>
              <kbd className="nav-search-kbd" aria-hidden="true">
                <span className="nav-search-mod">{isMac ? "⌘" : "Ctrl"}</span>
                <span className="nav-search-key">K</span>
              </kbd>
            </button>
          )}
          {searchOpen && (
            <div className="nav-search-field">
              <svg className="nav-search-icon" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="1.8"
                   strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
              <input
                ref={searchInputRef}
                type="search"
                className="nav-search-input"
                placeholder="Search components, patterns, foundations…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onSearchKey}
                aria-label="Search the design system"
              />
              {query && (
                <button
                  type="button"
                  className="nav-search-clear"
                  onClick={() => { setQuery(""); searchInputRef.current && searchInputRef.current.focus(); }}
                  aria-label="Clear search"
                >
                  <svg viewBox="0 0 16 16" width="16" height="16" fill="none"
                       stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="8" cy="8" r="6.5" />
                    <path d="m5 5 6 6M11 5l-6 6" />
                  </svg>
                </button>
              )}
              <button
                type="button"
                className="nav-search-close"
                onClick={closeSearch}
                aria-label="Close search"
              >
                <svg viewBox="0 0 16 16" width="16" height="16" fill="none"
                     stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m4 4 8 8M12 4l-8 8"/>
                </svg>
              </button>
            </div>
          )}
        </div>

        <nav className="nav-links">
          <button
            type="button"
            className={
              "nav-link nav-mega-trigger" +
              (onDesignSystem ? " active" : "") +
              (megaOpen ? " is-open" : "")
            }
            aria-expanded={megaOpen}
            aria-haspopup="true"
            onClick={() => setMegaOpen((o) => !o)}
          >
            Design System {caret}
          </button>
          <a className={"nav-link" + (onMadeByYou ? " active" : "")} href="UX4G Made by You.html">
            Made by You
          </a>
          <a className="btn btn-primary" href="UX4G Get Started.html">Get started</a>
        </nav>
      </div>
    </header>

      {/* Search backdrop + results panel — sibling of the navbar so the
          backdrop's blur isn't clipped by the navbar's own stacking context. */}
      {searchOpen && (
        <>
          <div className="nav-search-backdrop" onClick={closeSearch} aria-hidden="true" />
          <div
            className="nav-search-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Search results"
          >
            <div className="nav-search-panel-inner">
              {!query && (
                <div className="nav-search-empty">
                  <p className="nav-search-empty-title">Start typing to search.</p>
                  <p className="nav-search-empty-desc">
                    Find any foundation, component, pattern, or page from the design system.
                  </p>
                </div>
              )}
              {query && results.length === 0 && (
                <div className="nav-search-empty">
                  <p className="nav-search-empty-title">No matches for “{query}”.</p>
                  <p className="nav-search-empty-desc">
                    Try a shorter keyword like “color”, “button”, or “consent”.
                  </p>
                </div>
              )}
              {results.length > 0 && (
                <ul className="nav-search-results" role="listbox">
                  {results.map((r, i) => {
                    const initial = (r.title || "?").trim().charAt(0).toUpperCase();
                    const hue = r.hue || TAG_HUE[r.tag] || "primary";
                    return (
                      <li key={r.href} role="option" aria-selected={i === activeIdx}>
                        <a
                          href={r.href}
                          className={"nav-search-result" + (i === activeIdx ? " is-active" : "")}
                          onMouseEnter={() => setActiveIdx(i)}
                        >
                          <span className={"nav-search-thumb nav-search-thumb--" + hue}>
                            {r.img ? (
                              <img src={r.img} alt="" aria-hidden="true" />
                            ) : (
                              <span className="nav-search-thumb-letter" aria-hidden="true">{initial}</span>
                            )}
                          </span>
                          <span className="nav-search-result-body">
                            <span className="nav-search-result-tag">{r.tag}</span>
                            <span className="nav-search-result-title">{r.title}</span>
                            <span className="nav-search-result-desc">{r.desc}</span>
                          </span>
                          <span className="nav-search-result-arrow" aria-hidden="true">↵</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
        </>
      )}

      {/* Mega menu — rendered as a sibling of the navbar (not a descendant) so
          its backdrop-filter blur isn't cancelled by the navbar's own one. */}
      <div
        className={"nav-mega" + (megaOpen ? " is-open" : "")}
        role="region"
        aria-label="Design System sections"
        ref={megaRef}
      >
        <div className="nav-mega-inner">
          {DESIGN_SYSTEM.map((p) => (
            <a
              key={p.name}
              className={
                "nav-mega-card" +
                (p.ai ? " nav-mega-card--ai" : "") +
                (p.name === activeSection ? " is-active" : "")
              }
              href={p.href}
              tabIndex={megaOpen ? 0 : -1}
              aria-current={p.name === activeSection ? "page" : undefined}
            >
              <span className="nav-mega-card__icon">{p.icon}</span>
              <span className="nav-mega-card__name">{p.name}</span>
              <span className="nav-mega-card__arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                     strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
