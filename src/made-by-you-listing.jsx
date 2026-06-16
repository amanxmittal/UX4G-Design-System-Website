/* global React, ReactDOM, window */
/* ────────────────────────────────────────────────────────────
   Made by You — All Solutions / All Portals listing pages.
   Driven by window.MBY_LIST_MODE = "solutions" | "portals", set
   by the host HTML before this script loads.
   ──────────────────────────────────────────────────────────── */
const { useState, useMemo, useCallback } = React;

/* useSubmitFlow — opens the VerifyFlow modal in-place from a SubmitBanner.
   Returns the launcher (passed to SubmitBanner) and the rendered modal node. */
function useSubmitFlow() {
  const [flow, setFlow] = useState(null);
  const open  = useCallback((source) => setFlow({ source }), []);
  const close = useCallback(() => setFlow(null), []);
  const modal = flow && window.VerifyFlow
    ? <window.VerifyFlow source={flow.source} onClose={close} initialScreen="email"/>
    : null;
  return { open, modal };
}

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

/* ─────────────── Submit banner (shared) ─────────────── */
function SubmitBanner({ kind, onOpenFlow }) {
  const isPortal = kind === "portal";
  const fallbackHref = "UX4G Made by You.html?share=" + (isPortal ? "portal" : "solution");
  return (
    <a className={"mbyl-submit-banner " + (isPortal ? "portal" : "solution")}
       href={fallbackHref}
       onClick={(e) => {
         /* Open the VerifyFlow modal in-place when available; the href above
            is a graceful fallback for no-JS / new-tab opens. */
         if (window.VerifyFlow && typeof onOpenFlow === "function") {
           e.preventDefault();
           onOpenFlow(isPortal ? "portal" : "solution");
         }
       }}>
      <div className="mbyl-submit-art" aria-hidden="true">
        {isPortal ? (
          /* Portal — monitor with an upload-up arrow inside, on a stand.
             Reads as "publish your portal to the showcase". */
          <svg viewBox="0 0 88 88" fill="none" stroke="currentColor"
               strokeLinecap="round" strokeLinejoin="round">
            <rect x="14" y="18" width="60" height="40" rx="6"
                  strokeOpacity="0.45" strokeWidth="2"/>
            <line x1="14" y1="28" x2="74" y2="28"
                  strokeOpacity="0.30" strokeWidth="1.5"/>
            <circle cx="20" cy="23" r="1.2" fill="currentColor" fillOpacity="0.45" stroke="none"/>
            <circle cx="25" cy="23" r="1.2" fill="currentColor" fillOpacity="0.45" stroke="none"/>
            <circle cx="30" cy="23" r="1.2" fill="currentColor" fillOpacity="0.45" stroke="none"/>
            <path d="M44 50 V36 M37 43 L44 36 L51 43" strokeWidth="2.4"/>
            <path d="M30 64 H58 M40 58 V64 M48 58 V64"
                  strokeOpacity="0.55" strokeWidth="2"/>
          </svg>
        ) : (
          /* Solution — three stacked cards with a + on the top one.
             Reads as "add a new piece to the collection". */
          <svg viewBox="0 0 88 88" fill="none" stroke="currentColor"
               strokeLinecap="round" strokeLinejoin="round">
            <rect x="14" y="18" width="44" height="34" rx="6"
                  strokeOpacity="0.28" strokeWidth="2"/>
            <rect x="22" y="28" width="44" height="34" rx="6"
                  strokeOpacity="0.55" strokeWidth="2"/>
            <rect x="30" y="38" width="44" height="34" rx="6" strokeWidth="2.2"/>
            <path d="M52 49 V61 M46 55 H58" strokeWidth="2.4"/>
          </svg>
        )}
      </div>
      <div className="mbyl-submit-text">
        <h3 className="mbyl-submit-title">
          {isPortal
            ? "Built your website or portal with the UX4G Design System? Put it on the showcase."
            : "Solved something with the UX4G Design System that the catalog doesn't yet have?"}
        </h3>
      </div>
      <span className="mbyl-submit-cta">
        {isPortal ? "Submit your website" : "Contribute a solution"}
        <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 8h10M9 4l4 4-4 4"/>
        </svg>
      </span>
    </a>
  );
}

/* ─────────────── Type icons (mirrored from main + detail pages) ─────────────── */
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

/* ─────────────── SolutionVisual mini-mocks ─────────────── */
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
    <div className={"sol-visual t-" + type}>
      {visuals[id] || <div className="sv-default"></div>}
    </div>
  );
}

/* ─────────────── Data (mirrors made-by-you.jsx) ─────────────── */
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

const PORTALS = [
  { name: "PM-KISAN Samman Nidhi", org: "Ministry of Agriculture & Farmers' Welfare", scope: "central",
    gradient: "linear-gradient(140deg, #FFF8E7 0%, #FFE9B0 55%, #FFD87A 100%)" },
  { name: "MyScheme · Citizen Discovery", org: "National e-Governance Division, MeitY", scope: "central",
    gradient: "linear-gradient(140deg, #EEF2FF 0%, #D8E5FF 55%, #C0D2FF 100%)" },
  { name: "Karnataka Seva Sindhu", org: "Department of e-Governance · Karnataka", scope: "state",
    gradient: "linear-gradient(140deg, #FFF0E8 0%, #FFD9C0 55%, #FFC5A0 100%)" },
  { name: "UP Bhulekh · Land Records", org: "Revenue Department · Uttar Pradesh", scope: "state",
    gradient: "linear-gradient(140deg, #E3F7F5 0%, #C0EDE8 55%, #9EDFD9 100%)" },
  { name: "eShram · Unorganised Workers", org: "Ministry of Labour & Employment", scope: "central",
    gradient: "linear-gradient(140deg, #F2EEFF 0%, #DDD0FF 55%, #C8B8FF 100%)" },
  { name: "TN e-Sevai · Citizen Services", org: "Department of IT · Tamil Nadu", scope: "state",
    gradient: "linear-gradient(140deg, #FFF0F5 0%, #FFD6E5 55%, #FFC0D4 100%)" },
];

/* ─────────────── Shared header (same hierarchy as Foundations) ─────────────── */
function ListingHeader({ crumb, title, lede }) {
  return (
    <header className="mbys-header">
      <div className="container">
        <div className="mbys-crumb">
          <a href="index.html">Home</a>
          <span className="sep">/</span>
          <a href="UX4G Made by You.html">Made by You</a>
          <span className="sep">/</span>
          <span className="current">{crumb}</span>
        </div>
        <h1 className="mbys-title">{title}</h1>
        <p className="mbys-contrib" style={{ margin: 0 }}>
          <span className="org" style={{ fontWeight: 400, color: "var(--gray-700)", fontSize: 18, lineHeight: 1.5 }}>
            {lede}
          </span>
        </p>
      </div>
    </header>
  );
}

const SearchIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="mbyl-search-ic" aria-hidden="true">
    <circle cx="11" cy="11" r="7"/>
    <path d="m20 20-3.5-3.5"/>
  </svg>
);

/* ─────────────── Solutions listing app ─────────────── */
function SolutionsApp() {
  const initialType = useMemo(() => {
    if (typeof window === "undefined") return "all";
    const t = new URLSearchParams(window.location.search).get("type");
    return ["component", "pattern", "flow"].includes(t) ? t : "all";
  }, []);
  const [type, setType] = useState(initialType);  // all | component | pattern | flow
  const [format, setFormat] = useState("all");    // all | figma | code | docs
  const [q, setQ] = useState("");
  const { open: openFlow, modal: flowModal } = useSubmitFlow();

  const counts = useMemo(() => {
    const c = { all: SOLUTIONS.length, component: 0, pattern: 0, flow: 0 };
    SOLUTIONS.forEach((s) => { c[s.type] = (c[s.type] || 0) + 1; });
    return c;
  }, []);

  const filtered = useMemo(() => {
    const qn = q.trim().toLowerCase();
    return SOLUTIONS.filter((s) => {
      if (type !== "all" && s.type !== type) return false;
      if (format !== "all" && !s.formats.includes(format)) return false;
      if (qn && !`${s.name} ${s.org} ${s.desc}`.toLowerCase().includes(qn)) return false;
      return true;
    });
  }, [type, format, q]);

  const isFiltered = type !== "all" || format !== "all" || q.trim().length > 0;
  const clearAll = () => { setType("all"); setFormat("all"); setQ(""); };

  return (
    <>
      <SiteNavbar/>
      <main className="mbyl-page">
        <ListingHeader
          crumb="All solutions"
          title="Solutions from the community"
          lede="Service-specific components, patterns and flows shared by government teams across India, all UX4G-reviewed and ready to adapt."/>

        <section className="container">
          <div className="mbyl-filters">
            <div className="mbyl-filters-row">
              <div className="mbyl-filter-group" role="radiogroup" aria-label="Filter by type">
                <span className="mbyl-filter-label">Type</span>
                {[
                  { k: "all", label: "All" },
                  { k: "component", label: "Components" },
                  { k: "pattern", label: "Patterns" },
                  { k: "flow", label: "Flows" },
                ].map((opt) => (
                  <button key={opt.k} type="button"
                    role="radio"
                    aria-checked={type === opt.k}
                    className={"ux4g-filter-chip-md mbyl-filter-chip" + (type === opt.k ? " active" : "")}
                    onClick={() => setType(opt.k)}>
                    {opt.label}
                    <span className="count">{counts[opt.k]}</span>
                  </button>
                ))}
              </div>

              <div className="mbyl-filter-group" role="radiogroup" aria-label="Filter by available format">
                <span className="mbyl-filter-label">Available as</span>
                {[
                  { k: "all", label: "Any" },
                  { k: "figma", label: "Figma" },
                  { k: "code", label: "Code" },
                  { k: "docs", label: "Docs" },
                ].map((opt) => (
                  <button key={opt.k} type="button"
                    role="radio"
                    aria-checked={format === opt.k}
                    className={"ux4g-filter-chip-md mbyl-filter-chip" + (format === opt.k ? " active" : "")}
                    onClick={() => setFormat(opt.k)}>
                    {opt.label}
                  </button>
                ))}
              </div>

              <div className="mbyl-search">
                {SearchIcon}
                <input type="search"
                  placeholder="Search by name, ministry or keyword"
                  value={q}
                  onChange={(e) => setQ(e.target.value)}/>
              </div>
            </div>

            <div className="mbyl-result-bar">
              <span className="mbyl-result-count">
                {isFiltered
                  ? <>Showing <strong>{filtered.length}</strong> of {SOLUTIONS.length} total solutions</>
                  : <>Showing all <strong>{SOLUTIONS.length}</strong> solutions</>}
              </span>
              {isFiltered && (
                <button type="button" className="mbyl-clear" onClick={clearAll}>
                  Clear filters
                </button>
              )}
            </div>
          </div>

          <SubmitBanner kind="solution" onOpenFlow={openFlow}/>

          <div className="mbyl-grid mby-solutions-grid">
            {filtered.length === 0 && (
              <div className="mbyl-empty">
                <h3>No matches yet</h3>
                <p>Try a wider filter or clear your search. New solutions are added every cycle.</p>
              </div>
            )}
            {filtered.map((s) => {
              const slug = slugify(s.name);
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
        </section>
      </main>
      <SiteFooter/>
      {flowModal}
    </>
  );
}

/* ─────────────── Portals listing app ─────────────── */
function PortalsApp() {
  const [scope, setScope] = useState("all");
  const [q, setQ] = useState("");
  const { open: openFlow, modal: flowModal } = useSubmitFlow();

  const counts = useMemo(() => {
    const c = { all: PORTALS.length, central: 0, state: 0 };
    PORTALS.forEach((p) => { c[p.scope] = (c[p.scope] || 0) + 1; });
    return c;
  }, []);

  const filtered = useMemo(() => {
    const qn = q.trim().toLowerCase();
    return PORTALS.filter((p) => {
      if (scope !== "all" && p.scope !== scope) return false;
      if (qn && !`${p.name} ${p.org}`.toLowerCase().includes(qn)) return false;
      return true;
    });
  }, [scope, q]);

  const isFiltered = scope !== "all" || q.trim().length > 0;
  const clearAll = () => { setScope("all"); setQ(""); };

  return (
    <>
      <SiteNavbar/>
      <main className="mbyl-page">
        <ListingHeader
          crumb="Built with UX4G"
          title="Built with UX4G Design System"
          lede="Government portals and services across India that already build on UX4G. Borrowed components, borrowed patterns, borrowed accessibility work, all in the open."/>

        <section className="container">
          <div className="mbyl-filters">
            <div className="mbyl-filters-row">
              <div className="mbyl-filter-group" role="radiogroup" aria-label="Filter by scope">
                <span className="mbyl-filter-label">Scope</span>
                {[
                  { k: "all", label: "All" },
                  { k: "central", label: "Central" },
                  { k: "state", label: "State / UT" },
                ].map((opt) => (
                  <button key={opt.k} type="button"
                    role="radio"
                    aria-checked={scope === opt.k}
                    className={"ux4g-filter-chip-md mbyl-filter-chip" + (scope === opt.k ? " active" : "")}
                    onClick={() => setScope(opt.k)}>
                    {opt.label}
                    <span className="count">{counts[opt.k]}</span>
                  </button>
                ))}
              </div>

              <div className="mbyl-search">
                {SearchIcon}
                <input type="search"
                  placeholder="Search portals or ministries"
                  value={q}
                  onChange={(e) => setQ(e.target.value)}/>
              </div>
            </div>

            <div className="mbyl-result-bar">
              <span className="mbyl-result-count">
                {isFiltered
                  ? <>Showing <strong>{filtered.length}</strong> of {PORTALS.length} total portals</>
                  : <>Showing all <strong>{PORTALS.length}</strong> portals</>}
              </span>
              {isFiltered && (
                <button type="button" className="mbyl-clear" onClick={clearAll}>
                  Clear filters
                </button>
              )}
            </div>
          </div>

          <SubmitBanner kind="portal" onOpenFlow={openFlow}/>

          <div className="mbyl-grid">
            {filtered.length === 0 && (
              <div className="mbyl-empty">
                <h3>No portals match</h3>
                <p>Try a different scope or clear your filters.</p>
              </div>
            )}
            {filtered.map((p) => (
              <a key={p.name} className="portal-card-h mbyl-portal-card">
                <div className="portal-thumb">
                  <div className="thumb-frame">
                    <div className="thumb-chrome">
                      <span></span><span></span><span></span>
                      <em>{p.scope === "central" ? "india.gov.in" : "gov.in"}</em>
                    </div>
                    <div className="thumb-body" style={{ background: p.gradient }}></div>
                  </div>
                </div>
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
          </div>
        </section>
      </main>
      <SiteFooter/>
      {flowModal}
    </>
  );
}

/* ─────────────── Mount ─────────────── */
const mode = (typeof window !== "undefined" && window.MBY_LIST_MODE) || "solutions";
const Root = mode === "portals" ? PortalsApp : SolutionsApp;
ReactDOM.createRoot(document.getElementById("root")).render(<Root/>);
