/* global React, ReactDOM */
/* ────────────────────────────────────────────────────────────
   Foundations — Typography (9-section build, content per
   Documents/Foundations content/ux4g-typography-foundation-recommendation.md)
   Specimens render with the real .ux4g-*-default / -strong utility
   classes from css/ux4g-typescale.css.
   ──────────────────────────────────────────────────────────── */
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

/* ─────────────── Header ─────────────── */
function Header() {
  return (
    <header className="mbys-header">
      <div className="container">
        <div className="mbys-crumb">
          <a href="index.html">Home</a>
          <span className="sep">/</span>
          <a href="UX4G Foundations.html">Foundations</a>
          <span className="sep">/</span>
          <span className="current">Typography</span>
        </div>
        <h1 className="mbys-title">Typography</h1>
        <p className="mbys-contrib" style={{ margin: 0 }}>
          <span className="org" style={{ fontWeight: 400, color: "var(--gray-700)", fontSize: 18, lineHeight: 1.5 }}>
            Typography establishes hierarchy and trust. In government services, clarity is not optional — every citizen, regardless of literacy level, device or connectivity, must be able to read and act on what they see.
          </span>
        </p>
      </div>
    </header>
  );
}

/* ─────────────── Sections ─────────────── */
function Principles() {
  const items = [
    { t: "Optimise for readability",
      b: "Every size, weight and line height decision serves the reader first. Decorative or arbitrary type choices undermine trust in government interfaces." },
    { t: "Communicate hierarchy clearly",
      b: "Use the type scale to signal importance — not colour alone. Any UX4G screen should be scannable; the user should know what to read first." },
    { t: "Accessible for everyone",
      b: "UX4G serves citizens across all literacy levels, device types and network conditions. Type decisions meet WCAG 2.1 AA and GIGW 3.0 minimum sizes." },
  ];
  return (
    <section id="principles" className="col-section">
      <h2 className="col-section-title">Principles</h2>
      <p className="col-section-lede">Three rules behind every type decision.</p>
      <div className="col-principles">
        {items.map((p, i) => (
          <div key={i} className="col-principle">
            <span className="n">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3>{p.t}</h3>
              <p>{p.b}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Typefaces() {
  return (
    <section id="typefaces" className="col-section">
      <h2 className="col-section-title">Typefaces</h2>
      <p className="col-section-lede">Two families, each with a role. Both cover all 22 scheduled Indian languages.</p>

      <div className="col-callout note">
        If Noto Sans fails to load, the <code>system-ui</code> fallback ensures users see a native system font (SF Pro on iOS/macOS, Segoe UI on Windows) rather than a browser default — critical for government services accessed on low-bandwidth or rural networks.
      </div>

      <div className="tp-face">
        <div className="tp-face-head">
          <div>
            <h3 className="tp-face-name">Noto Sans</h3>
            <span className="tp-face-role">UI typeface · all product interfaces</span>
          </div>
          <code className="tp-face-token">--ux4g-font-family-base</code>
        </div>
        <p className="tp-face-rationale">
          Designed by Google to render text in all scripts. "Noto" stands for "No Tofu" — the blank boxes (□) that appear when a font lacks a character. Noto Sans renders consistently in Hindi, Bengali, Tamil, Telugu, Kannada, Malayalam, Gujarati and the remaining Indian scripts, alongside English.
        </p>
        <div className="tp-specimen">
          <span style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: 40 }}>Noto Sans</span>
          <span style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: 40 }}>Noto Sans</span>
          <span style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 40 }}>Noto Sans</span>
          <span style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 40 }}>Noto Sans</span>
        </div>
        <p className="tp-face-weights">Available weights: <strong>Regular 400</strong> · <strong>Medium 500</strong> · <strong>Semibold 600</strong> · <strong>Bold 700</strong>. Used for all headings, body text, labels and UI elements.</p>
      </div>

      <div className="tp-face">
        <div className="tp-face-head">
          <div>
            <h3 className="tp-face-name">Noto Sans Display</h3>
            <span className="tp-face-role">Display typeface · Display styles only (36px+)</span>
          </div>
          <code className="tp-face-token">--ux4g-font-family-display</code>
        </div>
        <p className="tp-face-rationale">
          An optical variant of Noto Sans tuned for large display sizes. Letterforms have slightly more refined stroke contrast and wider tracking, so headings stay legible at scale. Reserve it for the Display category; everything else uses the base family.
        </p>
        <div className="tp-specimen">
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 52 }}>Noto Sans Display</span>
        </div>
        <p className="tp-face-weights">Available weights: <strong>Semibold 600</strong> · <strong>Bold 700</strong>.</p>
      </div>

      <h3 className="col-h3">Font stack</h3>
      <pre className="tp-code">{`/* Base — all UI text */
font-family: "Noto Sans", system-ui, sans-serif;

/* Display — large editorial headings only */
font-family: "Noto Sans Display", "Noto Sans", sans-serif;`}</pre>
    </section>
  );
}

const DISPLAY = [
  ["Display/L",  "ux4g-display-l-default",  60, 80, "Semibold / Bold", "Hero banners — exceptional, full-page landing only"],
  ["Display/M",  "ux4g-display-m-default",  52, 72, "Semibold / Bold", "Large campaign or section hero headings"],
  ["Display/S",  "ux4g-display-s-default",  40, 52, "Semibold / Bold", "Section title on a dashboard landing"],
  ["Display/XS", "ux4g-display-xs-default", 36, 44, "Semibold / Bold", "Section-level hero in compact layouts"],
];
const HEADING = [
  ["Heading/2XL", "ux4g-heading-2xl-default", 40, 44, "Semibold / Bold", "h1",   "Top-level page title (form, dashboard, landing)"],
  ["Heading/XL",  "ux4g-heading-xl-default",  32, 36, "Semibold / Bold", "h1–h2","Primary section heading"],
  ["Heading/L",   "ux4g-heading-l-default",   28, 32, "Semibold / Bold", "h2",   "Secondary section heading"],
  ["Heading/M",   "ux4g-heading-m-default",   24, 28, "Semibold / Bold", "h3",   "Card title, panel heading"],
  ["Heading/S",   "ux4g-heading-s-default",   20, 24, "Semibold / Bold", "h4",   "Sub-section heading"],
  ["Heading/XS",  "ux4g-heading-xs-default",  16, 20, "Semibold / Bold", "h5",   "Small heading, grouped fields title"],
  ["Heading/2XS", "ux4g-heading-2xs-default", 14, 16, "Semibold / Bold", "h6",   "Smallest heading — sidebar label, data table column header"],
];
const TITLE = [
  ["Title/L", "ux4g-title-l-default", 24, 28, "Semibold / Bold", "Component title in a card or modal"],
  ["Title/M", "ux4g-title-m-default", 20, 24, "Semibold / Bold", "Form section title"],
  ["Title/S", "ux4g-title-s-default", 16, 20, "Semibold / Bold", "Small label-weight title, button group heading"],
];
const BODY = [
  ["Body/L",  "ux4g-body-l-default",  18, 24, "Regular / Semibold", "Long-form instructions, multi-paragraph content"],
  ["Body/M",  "ux4g-body-m-default",  16, 24, "Regular / Semibold", "Default body text for most UI"],
  ["Body/S",  "ux4g-body-s-default",  14, 20, "Regular / Semibold", "Helper text, secondary descriptions"],
  ["Body/XS", "ux4g-body-xs-default", 12, 16, "Regular / Semibold", "Captions, legal text, timestamps — minimum usable size"],
];
const LABEL = [
  ["Label/XL", "ux4g-label-xl-default", 16, 20, "Medium / Bold", "Form field labels (default)"],
  ["Label/L",  "ux4g-label-l-default",  14, 18, "Medium / Bold", "Secondary labels, table column headers"],
  ["Label/M",  "ux4g-label-m-default",  12, 16, "Medium / Bold", "Badge text, chip labels, tag text"],
  ["Label/S",  "ux4g-label-s-default",  11, 14, "Medium / Bold", "Micro labels — status tags, compact data; use sparingly"],
];

/* "Medium / Bold" → ["Medium", "Bold"]. Each typestyle ships in two weights
   (`-default` and `-strong`); the meta column lists both like "X / Y" so we
   split on " / " to surface the active one per the row's variant toggle. */
function splitWeights(s) {
  const m = String(s || "").split(/\s*\/\s*/);
  return { def: m[0] || s, strong: m[1] || m[0] || s };
}

function ScaleRow({ row, withTag }) {
  const [variant, setVariant] = useState("default");
  const [style, baseCls, size, lh, weight, ...rest] = row;
  const tag = withTag ? rest[0] : null;
  const use = withTag ? rest[1] : rest[0];
  const cls = baseCls.replace(/-default$/, "-" + variant);
  const w = splitWeights(weight);
  const activeWeight = variant === "strong" ? w.strong : w.def;
  return (
    <div className="tp-scale-row">
      <div className="tp-specimen-line">
        <span className={cls}>The quick brown fox</span>
      </div>
      <div className="tp-scale-meta">
        <div className="tp-meta-head">
          <div className="tp-name">{style}</div>
          <div
            role="group"
            aria-label={style + " weight variant"}
            className="tp-variant-toggle"
          >
            <button
              type="button"
              className={"tp-variant-btn" + (variant === "default" ? " is-active" : "")}
              aria-pressed={variant === "default"}
              onClick={() => setVariant("default")}
            >Default</button>
            <button
              type="button"
              className={"tp-variant-btn" + (variant === "strong" ? " is-active" : "")}
              aria-pressed={variant === "strong"}
              onClick={() => setVariant("strong")}
            >Strong</button>
          </div>
        </div>
        <code className="tp-cls">.{cls}</code>
        <div className="tp-spec">
          <span>{size}px / {(size / 16).toFixed(3).replace(/\.?0+$/, "")}rem</span>
          <span>·</span>
          <span>line {lh}px</span>
          <span>·</span>
          <span>{activeWeight}</span>
          {tag && (<><span>·</span><span><code>&lt;{tag}&gt;</code></span></>)}
        </div>
        <div className="tp-use">{use}</div>
      </div>
    </div>
  );
}

function ScaleBlock({ title, family, rows, withTag }) {
  return (
    <div className="tp-scale-block">
      <div className="tp-scale-head">
        <h3 className="col-h3" style={{ margin: 0 }}>{title}</h3>
        <code className="tp-face-token">{family}</code>
      </div>
      <div className="tp-scale-list">
        {rows.map((r) => (
          <ScaleRow key={r[0]} row={r} withTag={withTag}/>
        ))}
      </div>
    </div>
  );
}

function TypeScale() {
  return (
    <section id="scale" className="col-section">
      <h2 className="col-section-title">Type scale</h2>
      <p className="col-section-lede">
        Five style categories, each with a fixed scale. Every entry below ships as a UX4G utility class — apply it directly to an element.
      </p>
      <ScaleBlock title="Display" family="Noto Sans Display" rows={DISPLAY} withTag={false}/>
      <ScaleBlock title="Heading" family="Noto Sans" rows={HEADING} withTag={true}/>
      <ScaleBlock title="Title"   family="Noto Sans" rows={TITLE} withTag={false}/>
      <ScaleBlock title="Body"    family="Noto Sans" rows={BODY} withTag={false}/>
      <ScaleBlock title="Label"   family="Noto Sans" rows={LABEL} withTag={false}/>

      <div className="col-callout note">
        <strong>Default vs Strong.</strong> Within each style, <code>/default</code> uses the lighter weight and <code>/strong</code> uses the heavier one. Use <code>/strong</code> to add emphasis within a size — do not jump to a larger size for emphasis.
      </div>
    </section>
  );
}

function FontWeights() {
  return (
    <section id="weights" className="col-section">
      <h2 className="col-section-title">Font weights</h2>
      <p className="col-section-lede">Four weights. Use them sparingly — visual emphasis only works if it's rare.</p>
      <div className="tp-weights">
        <div className="tp-weight"><span style={{ fontWeight: 400, fontSize: 24 }}>Regular 400</span><p>All body text, default reading content.</p></div>
        <div className="tp-weight"><span style={{ fontWeight: 500, fontSize: 24 }}>Medium 500</span><p>Labels, UI controls, navigation items.</p></div>
        <div className="tp-weight"><span style={{ fontWeight: 600, fontSize: 24 }}>Semibold 600</span><p>Headings, section titles, interactive labels.</p></div>
        <div className="tp-weight"><span style={{ fontWeight: 700, fontSize: 24 }}>Bold 700</span><p>Strong emphasis — short headings, primary CTAs, key data. Use sparingly.</p></div>
      </div>
      <div className="col-callout note">
        Avoid Bold for long text. Bold draws the eye — if everything is bold, nothing is. Reserve it for short headings, primary actions and moments of critical importance.
      </div>
    </section>
  );
}

function Usage() {
  const rows = [
    ["Page or screen title (main h1)", "Heading/2XL or Heading/XL"],
    ["Section heading (primary division)", "Heading/L or Heading/M"],
    ["Card or panel title", "Heading/M or Title/L"],
    ["Form section title", "Title/M"],
    ["Form field label", "Label/XL or Label/L"],
    ["Default body / paragraph text", "Body/M/Default"],
    ["Instructions / longer copy", "Body/L/Default"],
    ["Helper text below an input", "Body/S/Default"],
    ["Caption, timestamp, legal text", "Body/XS/Default"],
    ["Button label", "Label/XL/Strong"],
    ["Badge, chip or tag text", "Label/M/Strong or Label/S/Strong"],
    ["Navigation item", "Label/XL/Default"],
    ["Data table column header", "Heading/2XS or Label/L"],
    ["Large display / campaign hero", "Display/S or Display/XS"],
  ];
  return (
    <section id="usage" className="col-section">
      <h2 className="col-section-title">Usage guidance</h2>
      <p className="col-section-lede">Quick-reference card for the most-asked designer question — "which style do I use here?"</p>
      <div className="sem-table">
        <div className="sem-table-head"><span>If you need…</span><span>Use this</span></div>
        {rows.map((r, i) => (
          <div key={i} className="sem-table-row"><span>{r[0]}</span><span>{r[1]}</span></div>
        ))}
      </div>
    </section>
  );
}

function Responsive() {
  const rows = [
    ["Display/L", "60px", "40px (Display/S)"],
    ["Display/M", "52px", "36px (Display/XS)"],
    ["Display/S", "40px", "36px (Display/XS)"],
    ["Heading/2XL", "40px", "32px (Heading/XL)"],
    ["Heading/XL", "32px", "28px (Heading/L)"],
    ["Heading/L", "28px", "24px (Heading/M)"],
  ];
  return (
    <section id="responsive" className="col-section">
      <h2 className="col-section-title">Responsive behaviour</h2>
      <p className="col-section-lede">
        UX4G type tokens are currently fixed at all breakpoints. At <code>--ux4g-bp-sm</code> (≤576px) and below, reduce Display and large Heading styles to keep mobile legible.
      </p>
      <div className="sem-table">
        <div className="sem-table-head" style={{ gridTemplateColumns: "1fr 1fr 2fr" }}><span>Style</span><span>Desktop</span><span>Recommended mobile</span></div>
        {rows.map((r, i) => (
          <div key={i} className="sem-table-row" style={{ gridTemplateColumns: "1fr 1fr 2fr" }}>
            {r.map((c, j) => <span key={j}>{c}</span>)}
          </div>
        ))}
      </div>
      <p className="col-foot-note">Body, Label and Title styles render well at every breakpoint without adjustment. Token-level responsive scaling is on the UX4G roadmap.</p>
    </section>
  );
}

function Accessibility() {
  return (
    <section id="accessibility" className="col-section">
      <h2 className="col-section-title">Accessibility</h2>
      <p className="col-section-lede">
        <strong>GIGW 3.0</strong> and <strong>WCAG 2.1 AA</strong> are mandatory for all Government of India digital services. Type sizes and structure must clear these thresholds.
      </p>
      <div className="sem-table">
        <div className="sem-table-head"><span>Rule</span><span>Why</span></div>
        <div className="sem-table-row"><span>Minimum body size 16px (absolute floor 12px)</span><span>Smaller text fails AA for many readers</span></div>
        <div className="sem-table-row"><span>Line height ≥ 1.5× the font size for body text</span><span>WCAG 1.4.12 — spacing for low-vision readers</span></div>
        <div className="sem-table-row"><span>Don't override letter-spacing into unreadable values</span><span>Custom tracking breaks legibility for dyslexic readers</span></div>
        <div className="sem-table-row"><span>Text resizes to 200% without loss of content</span><span>WCAG 1.4.4 — browser zoom must work</span></div>
      </div>

      <h3 className="col-h3">Heading level rules</h3>
      <ul className="tp-rule-list">
        <li>Use only one <code>&lt;h1&gt;</code> per page — typically the page title.</li>
        <li>Use heading levels in descending order. Don't skip (no h2 → h4).</li>
        <li>Use headings for structure, not visual appearance. If you want a "heading look" without semantic meaning, use a Title or Label style.</li>
        <li>Screen reader users navigate by headings — correct semantic structure is as important as colour contrast.</li>
      </ul>

      <div className="col-callout note">
        <strong>Why rem units?</strong> UX4G type tokens use rem for font-size and line-height. 1rem = 16px at browser default. Unlike pixels, rem resizes when a user increases their browser's default font size — critical for low-vision users who rely on browser zoom.
      </div>

      <h3 className="col-h3">Line length</h3>
      <p className="col-foot-note">
        Aim for <strong>50–90 characters per line</strong>, including spaces. Shorter lines are easier to track from line end to line start. Very long lines increase reading fatigue.
      </p>
    </section>
  );
}

function DoDont() {
  const rows = [
    ["Use Heading/2XL for the single h1 page title", "Use multiple h1s on one page"],
    ["Use heading levels in order (h1 → h2 → h3)", "Skip heading levels for visual effect"],
    ["Use Body/M/Default as the default reading text", "Use sizes smaller than 12px for any text"],
    ["Use Label/XL for form field labels", "Use Heading/XS as a form label (wrong semantic role)"],
    ["Use /strong variant for emphasis within a size", "Increase font size to add emphasis"],
    ["Use rem-based sizes — let browser zoom work", "Hard-code px values that block user zoom"],
    ["Use Display styles only for large hero contexts", "Use Display for body content or normal page headings"],
  ];
  return (
    <section id="dodont" className="col-section">
      <h2 className="col-section-title">Do and don't</h2>
      <p className="col-section-lede">Seven common decisions, summarised.</p>
      <div className="dd-table">
        <div className="dd-head"><span>Do</span><span>Don't</span></div>
        {rows.map((r, i) => (
          <div key={i} className="dd-row"><span>{r[0]}</span><span>{r[1]}</span></div>
        ))}
      </div>
    </section>
  );
}

const FND_LIST = [
  { key:"colour",     name:"Colour",          desc:"Palettes, semantic tokens, pairings and contrast",     href:"UX4G Colour.html",     iconCls:"rel-icon-colour",     iconNodes:[<span key="1"/>,<span key="2"/>,<span key="3"/>,<span key="4"/>] },
  { key:"typography", name:"Typography",      desc:"Families, scale, weights and accessibility",            href:"UX4G Typography.html", iconCls:"rel-icon-typography", iconNodes:"Aa" },
  { key:"spacing",    name:"Spacing",         desc:"4px scale, inline / stack / padding / section tokens",  href:"UX4G Spacing.html",    iconCls:"rel-icon-spacing",    iconNodes:[<span key="1"/>,<span key="2"/>,<span key="3"/>] },
  { key:"layout",     name:"Layout",          desc:"Breakpoints, containers, 12-column grid, page regions", href:"UX4G Layout.html",     iconCls:"rel-icon-layout",     iconNodes:Array.from({length:12}).map((_,i)=><span key={i}/>) },
  { key:"elevation",  name:"Elevation",       desc:"Shadow levels, z-index and focus states",               href:"UX4G Elevation.html",  iconCls:"rel-icon-elevation",  iconNodes:<span/> },
  { key:"border",     name:"Border & Radius", desc:"Widths, colours, styles, radius scale and proportionality", href:"UX4G Borders.html",iconCls:"rel-icon-border",     iconNodes:<span/> },
];
function Related({ exclude }) {
  const items = FND_LIST.filter((f) => f.key !== exclude);
  return (
    <section id="related" className="col-section last">
      <h2 className="col-section-title">Related foundations</h2>
      <p className="col-section-lede">Other building blocks of the UX4G design language.</p>
      <div className="rel-grid">
        {items.map((f) => (
          <a key={f.key} href={f.href} className="rel-card">
            <div className={"rel-icon " + f.iconCls}>{f.iconNodes}</div>
            <h3>{f.name}</h3>
            <p>{f.desc}</p>
            <span className="rel-arrow" aria-hidden="true">→</span>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ─────────────── On-this-page rail ─────────────── */
function useScrollSpy(ids){
  const [active,setActive]=React.useState(ids[0]);
  React.useEffect(()=>{
    const onScroll=()=>{
      let cur=ids[0];
      for(const id of ids){
        const el=document.getElementById(id);
        if(el && el.getBoundingClientRect().top<=160) cur=id;
      }
      setActive(cur);
    };
    window.addEventListener("scroll",onScroll,{passive:true});
    onScroll();
    return ()=>window.removeEventListener("scroll",onScroll);
  },[ids.join("|")]);
  return active;
}
function OnThisPage({ items }){
  const active=useScrollSpy(items.map(i=>i.id));
  return (
    <aside className="fnd-side">
      <p className="side-label">On this page</p>
      <ul>{items.map(i=>(
        <li key={i.id}><a href={"#"+i.id} className={active===i.id?"active":""}>{i.label}</a></li>
      ))}</ul>
    </aside>
  );
}
const TYPO_TOC=[
  { id:"principles",    label:"Principles" },
  { id:"typefaces",     label:"Typefaces" },
  { id:"scale",         label:"Type scale" },
  { id:"weights",       label:"Font weights" },
  { id:"usage",         label:"Usage guidance" },
  { id:"responsive",    label:"Responsive behaviour" },
  { id:"accessibility", label:"Accessibility" },
  { id:"dodont",        label:"Do and don't" },
  { id:"related",       label:"Related foundations" },
];

/* ─────────────── App ─────────────── */
function App() {
  const { toasts } = useToasts();
  return (
    <>
      <SiteNavbar/>
      <main className="col-page">
        <Header/>
        <div className="container col-body">
          <div className="fnd-layout">
            <div className="fnd-main">
              <Principles/>
              <Typefaces/>
              <TypeScale/>
              <FontWeights/>
              <Usage/>
              <Responsive/>
              <Accessibility/>
              <DoDont/>
              <Related exclude="typography"/>
            </div>
            <OnThisPage items={TYPO_TOC}/>
          </div>
        </div>
      </main>
      <SiteFooter/>
      <Toasts items={toasts}/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
