/* global React, ReactDOM */
/* ────────────────────────────────────────────────────────────
   Foundations — Colour (10-section build, content per
   Documents/Foundations content/ux4g-color-foundation-recommendation.md)
   Header reuses mbys-header. Section eyebrows removed.
   All hex values mirror css/colors.tokens.css → Figma Base/Colors.
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

/* ─────────────── Brand ramps — synced to css/colors.tokens.css ─────────────── */
const PRIMARY_RAMP = [
  ["50",  "#F2EFFF", false],  ["100", "#DCD4FF", false],
  ["200", "#C0B3FF", false],  ["300", "#A391FF", false],
  ["400", "#8670FF", false],  ["500", "#6A4EFF", true, true],
  ["600", "#4A2BC2", true],   ["700", "#3D239F", true],
  ["800", "#301C7D", true],   ["900", "#24145C", true],
  ["950", "#1A0E3D", true],
];
const SECONDARY_RAMP = [
  ["50",  "#FFF7E6", false],  ["100", "#FFE7BF", false],
  ["200", "#FFD899", false],  ["300", "#FFC973", false],
  ["400", "#FFBA4D", false],  ["500", "#FFA827", false, true],
  ["600", "#FF8F1F", false],  ["700", "#D46F13", true],
  ["800", "#AD530A", true],   ["900", "#873C05", true],
  ["950", "#612800", true],
];
const TERTIARY_RAMP = [
  ["50",  "#F6EFFB", false],  ["100", "#E9DAF3", false],
  ["200", "#D9BFEA", false],  ["300", "#C8A3E0", false],
  ["400", "#B686D6", false],  ["500", "#A66ACC", true, true],
  ["600", "#8E55B3", true],   ["700", "#75419A", true],
  ["800", "#5D2F80", true],   ["900", "#462166", true],
  ["950", "#32174A", true],
];
const NEUTRAL_RAMP = [
  ["0",    "#FFFFFF", false],  ["50",   "#FAFAFA", false],
  ["100",  "#F5F5F5", false],  ["200",  "#E5E5E5", false],
  ["300",  "#D9D9D9", false],  ["400",  "#A1A1A1", false],
  ["500",  "#737373", true, true], ["600",  "#525252", true],
  ["700",  "#404040", true],   ["800",  "#262626", true],
  ["900",  "#171717", true],   ["950",  "#0A0A0A", true],
  ["1000", "#000000", true],
];

/* Extended palettes — same five-stop preview (50/200/500/700/900) for compactness */
const EXT_PALETTES = [
  { name: "Red",      base: "#E83A37", stops: ["#FEECEB","#F8B5B3","#E83A37","#A02321","#5A1413"] },
  { name: "Blue",     base: "#1F6FD0", stops: ["#E8F1FB","#B3D1F3","#1F6FD0","#1A4F94","#0E2C55"] },
  { name: "Sky Blue", base: "#0EA7E0", stops: ["#E7F6FD","#A8DEF3","#0EA7E0","#0A75A0","#053E54"] },
  { name: "Cyan",     base: "#0DB6BB", stops: ["#E7F8F9","#A6E4E6","#0DB6BB","#0A8084","#053E40"] },
  { name: "Green",    base: "#1E8C4A", stops: ["#EBF6EF","#B9DDC5","#1E8C4A","#106C35","#0A4221"] },
  { name: "Lime",     base: "#7CC52F", stops: ["#F2F9E8","#D4ECB1","#7CC52F","#588B22","#2E4912"] },
  { name: "Yellow",   base: "#F2C71F", stops: ["#FEF6D8","#F8E289","#F2C71F","#A38715","#5A4A09"] },
  { name: "Gold",     base: "#D4A013", stops: ["#FBF1D2","#EFD475","#D4A013","#8C690D","#473608"] },
  { name: "Orange",   base: "#F2752C", stops: ["#FEEBDC","#F9BE91","#F2752C","#A6501F","#5A2A0F"] },
  { name: "Purple",   base: "#A66ACC", stops: ["#F6EFFB","#D9BFEA","#A66ACC","#75419A","#462166"] },
  { name: "Pink",     base: "#E83A8C", stops: ["#FEECF4","#F8B5D3","#E83A8C","#A02261","#5A1336"] },
];

/* ─────────────── Helpers ─────────────── */
function Ramp({ ramp, tokenRole }) {
  return (
    <div className="ramp">
      {ramp.map(([stop, hex, dark, base]) => (
        <div key={stop}
          className={"stop " + (dark ? "dark " : "light ") + (base ? "base" : "")}
          style={{ background: hex }}>
          {base && <span className="base-mark">BASE</span>}
          <span className="num">{stop}</span>
          <span className="hex">{hex}</span>
          <span className="tok">--ux4g-color-{tokenRole}-{stop}</span>
        </div>
      ))}
    </div>
  );
}

function Header() {
  return (
    <header className="mbys-header">
      <div className="container">
        <div className="mbys-crumb">
          <a href="index.html">Home</a>
          <span className="sep">/</span>
          <a href="UX4G Foundations.html">Foundations</a>
          <span className="sep">/</span>
          <span className="current">Colour</span>
        </div>
        <h1 className="mbys-title">Colour</h1>
        <p className="mbys-contrib" style={{ margin: 0 }}>
          <span className="org" style={{ fontWeight: 400, color: "var(--gray-700)", fontSize: 18, lineHeight: 1.5 }}>
            Color in UX4G is purposeful, not decorative. Every value has a token, every token has a job, and every pairing meets WCAG 2.1 AA so government services stay legible for every citizen.
          </span>
        </p>
      </div>
    </header>
  );
}

/* ─────────────── Sections ─────────────── */
function Principles() {
  const items = [
    { t: "Purposeful",
      b: "Colour communicates meaning — status, hierarchy, action. It is never used as decoration or to make a UI 'look nice'. Red is error, green is success, primary purple is the primary action — always." },
    { t: "Accessible by default",
      b: "Every colour pairing in UX4G meets WCAG 2.1 Level AA contrast — the minimum required by GIGW 3.0 for all central and state government digital services." },
    { t: "Token-driven",
      b: "Never use a hex value directly in product code. Always use a semantic token. This keeps the entire system consistent and future-proof for theming." },
  ];
  return (
    <section id="principles" className="col-section">
      <h2 className="col-section-title">Principles</h2>
      <p className="col-section-lede">Three rules that govern every colour decision in UX4G.</p>
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

function System() {
  return (
    <section id="system" className="col-section">
      <h2 className="col-section-title">How the colour system works</h2>
      <p className="col-section-lede">
        UX4G colour runs on a two-tier model. Primitive tokens hold the raw values. Semantic tokens reference primitives and describe a job. Components only ever reference semantic tokens.
      </p>

      <div className="col-tier-diagram">
        <div className="tier">
          <span className="label">Primitive</span>
          <code>--ux4g-color-primary-600</code>
          <span className="value">#4A2BC2</span>
        </div>
        <span className="arrow">→</span>
        <div className="tier">
          <span className="label">Semantic</span>
          <code>--ux4g-bg-primary-strong</code>
          <span className="value">references the primitive</span>
        </div>
        <span className="arrow">→</span>
        <div className="tier">
          <span className="label">Component</span>
          <code>.ux4g-btn-primary</code>
          <span className="value">references the semantic token</span>
        </div>
      </div>

      <div className="col-callout">
        <strong>Primitive tokens are reference values only.</strong> Use them when you are defining a new semantic token. Never use them directly in product or component code. Components and layouts must always reference semantic tokens.
      </div>

      <h3 className="col-h3">Glossary</h3>
      <div className="col-glossary">
        <div><strong>Primitive token</strong><span>A raw colour value with a numeric step (e.g. <code>--ux4g-color-primary-500</code>). Never use directly in UI.</span></div>
        <div><strong>Semantic token</strong><span>A purpose-named token that references a primitive (e.g. <code>--ux4g-bg-primary-strong</code>). Use this in all components and layouts.</span></div>
        <div><strong>Role</strong><span>The specific UI context a semantic token is designed for — primary button background, error text, default body text.</span></div>
      </div>
    </section>
  );
}

function PrimitivePalettes() {
  return (
    <section id="primitives" className="col-section">
      <h2 className="col-section-title">Primitive palettes</h2>
      <p className="col-section-lede">
        Each ramp moves from <strong>50</strong> (lightest tint) to <strong>950</strong> (deepest shade). The base <strong>500</strong> is the value you would reach for first. Brand palettes drive UI; extended palettes are for illustrations and data viz only.
      </p>

      <div className="pal-block">
        <div className="pal-head">
          <h3 className="pal-name">Primary <span className="anchor">Indigo-violet · <code>--ux4g-color-primary-*</code></span></h3>
          <span className="pal-tag">11 stops · 50 → 950</span>
        </div>
        <Ramp ramp={PRIMARY_RAMP} tokenRole="primary"/>
      </div>

      <div className="pal-block">
        <div className="pal-head">
          <h3 className="pal-name">Secondary <span className="anchor">Amber · <code>--ux4g-color-secondary-*</code></span></h3>
          <span className="pal-tag">11 stops · 50 → 950</span>
        </div>
        <Ramp ramp={SECONDARY_RAMP} tokenRole="secondary"/>
      </div>

      <div className="pal-block">
        <div className="pal-head">
          <h3 className="pal-name">Tertiary <span className="anchor">Purple · <code>--ux4g-color-tertiary-*</code></span></h3>
          <span className="pal-tag">11 stops · 50 → 950</span>
        </div>
        <Ramp ramp={TERTIARY_RAMP} tokenRole="tertiary"/>
      </div>

      <div className="pal-block">
        <div className="pal-head">
          <h3 className="pal-name">Neutral <span className="anchor">Greyscale · <code>--ux4g-color-neutral-*</code></span></h3>
          <span className="pal-tag">13 stops · 0 → 1000</span>
        </div>
        <Ramp ramp={NEUTRAL_RAMP} tokenRole="neutral"/>
      </div>

      <h3 className="col-h3" style={{ marginTop: 48 }}>Extended palettes</h3>
      <p className="col-section-lede" style={{ marginBottom: 22 }}>
        Use these only for illustrations, data visualisation, and decorative artwork. Never use them as semantic UI colours — the semantic tokens in the next section are the only safe path for status, action, and feedback.
      </p>
      <div className="ext-grid">
        {EXT_PALETTES.map((p) => (
          <div key={p.name} className="ext-card">
            <div className="ext-head">
              <span className="ext-name">{p.name}</span>
              <code className="ext-tok">--ux4g-color-{p.name.toLowerCase().replace(/\s+/g, "-")}-500</code>
            </div>
            <div className="ext-strip">
              {p.stops.map((hex, i) => (
                <div key={i} className="ext-stop" style={{ background: hex }} title={hex}/>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SemanticTokens() {
  return (
    <section id="semantic" className="col-section">
      <h2 className="col-section-title">Semantic tokens by purpose</h2>
      <p className="col-section-lede">
        Five token groups, each with a clear job. These are the only tokens components and product code should reference.
      </p>

      <h3 className="col-h3">Background</h3>
      <SemTable rows={[
        ["--ux4g-bg-neutral-elevated", "neutral-0", "Page background, modal surface"],
        ["--ux4g-bg-neutral", "neutral-50", "App shell background"],
        ["--ux4g-bg-neutral-soft", "neutral-100", "Card / panel surface"],
        ["--ux4g-bg-neutral-subtle", "neutral-200", "Hover state on list rows"],
        ["--ux4g-bg-primary-soft", "primary-50", "Primary tinted surface (info callout)"],
        ["--ux4g-bg-primary-strong", "primary-600", "Primary filled button, active nav item"],
        ["--ux4g-bg-primary-stronger", "primary-800", "Primary button hover / pressed"],
        ["--ux4g-bg-success-soft → strong", "green-50 → 600", "Success banner background (soft → filled)"],
        ["--ux4g-bg-error-soft → strong", "red-50 → 600", "Error banner background"],
        ["--ux4g-bg-warning-soft → strong", "orange-50 → 600", "Warning banner background"],
        ["--ux4g-bg-info-soft → strong", "cyan-50 → 600", "Info banner background"],
      ]} cols={["Token", "Maps to", "Use when"]} />

      <h3 className="col-h3">Text</h3>
      <SemTable rows={[
        ["--ux4g-text-neutral-primary", "Default body text, headings"],
        ["--ux4g-text-neutral-secondary", "Labels, captions, helper text"],
        ["--ux4g-text-neutral-tertiary", "Placeholder text, disabled text"],
        ["--ux4g-text-neutral-inverse", "Text on dark / filled backgrounds"],
        ["--ux4g-text-brand-primary-default", "Brand-coloured text links, emphasis"],
        ["--ux4g-text-status-success", "Success message text"],
        ["--ux4g-text-status-error", "Error message text"],
        ["--ux4g-text-status-warning", "Warning message text"],
        ["--ux4g-text-status-info", "Info message text"],
      ]} cols={["Token", "Use when"]} />

      <h3 className="col-h3">Border</h3>
      <SemTable rows={[
        ["--ux4g-border-color-neutral-subtle", "Dividers, card outlines (light)"],
        ["--ux4g-border-color-neutral-default", "Form field borders (default state)"],
        ["--ux4g-border-color-neutral-strong", "Form field borders (focused / active)"],
        ["--ux4g-border-color-primary-default", "Primary-tinted border"],
        ["--ux4g-border-color-primary-strong", "Primary interactive border (selected)"],
        ["--ux4g-border-color-error-strong", "Error state form input border"],
        ["--ux4g-border-color-success-strong", "Success state border"],
      ]} cols={["Token", "Use when"]} />

      <h3 className="col-h3">Icon</h3>
      <SemTable rows={[
        ["--ux4g-icon-status-success", "Success icon fill"],
        ["--ux4g-icon-status-error", "Error icon fill"],
        ["--ux4g-icon-status-warning", "Warning icon fill"],
        ["--ux4g-icon-status-info", "Info icon fill"],
        ["--ux4g-icon-neutral-inverse", "Icon on dark / filled background"],
      ]} cols={["Token", "Use when"]} />
      <div className="col-callout note">
        <strong>Icons need 3:1 contrast minimum (WCAG 1.4.11), not 4.5:1.</strong> The icon tokens are calibrated for that threshold — do not substitute text-colour tokens for icons.
      </div>

      <h3 className="col-h3">Link states</h3>
      <SemTable rows={[
        ["--ux4g-text-link-default-default", "Default"],
        ["--ux4g-text-link-default-hover", "Hover"],
        ["--ux4g-text-link-default-active", "Active / pressed"],
        ["--ux4g-text-link-default-visited", "Visited"],
        ["--ux4g-text-link-default-disabled", "Disabled"],
        ["--ux4g-text-link-default-inverse", "On dark background"],
      ]} cols={["Token", "State"]} />
    </section>
  );
}

function SemTable({ rows, cols }) {
  const gt = cols.length === 3 ? "1.4fr 1fr 2fr" : "1.4fr 2fr";
  return (
    <div className="sem-table">
      <div className="sem-table-head" style={{ gridTemplateColumns: gt }}>
        {cols.map((c) => <span key={c}>{c}</span>)}
      </div>
      {rows.map((r, i) => (
        <div key={i} className="sem-table-row" style={{ gridTemplateColumns: gt }}>
          {r.map((cell, j) => (
            <span key={j}>{j === 0 ? <code>{cell}</code> : cell}</span>
          ))}
        </div>
      ))}
    </div>
  );
}

function Pairings() {
  const pairs = [
    { tBg: "var(--ux4g-bg-neutral-elevated, #fff)", tFg: "#171717",
      bg: "--ux4g-bg-neutral-elevated", fg: "--ux4g-text-neutral-primary",
      label: "Body text on white", sample: "Apply for ration card" },
    { tBg: "#fff", tFg: "#737373",
      bg: "--ux4g-bg-neutral-soft", fg: "--ux4g-text-neutral-secondary",
      label: "Helper text on white", sample: "Provide your 12-digit Aadhaar number." },
    { tBg: "#4A2BC2", tFg: "#fff",
      bg: "--ux4g-bg-primary-strong", fg: "--ux4g-text-neutral-inverse",
      label: "Primary button", sample: "Submit application" },
    { tBg: "#EBF6EF", tFg: "#106C35",
      bg: "--ux4g-bg-success-soft", fg: "--ux4g-text-status-success",
      label: "Success banner", sample: "✓ Application submitted" },
    { tBg: "#FDECEB", tFg: "#DB372D",
      bg: "--ux4g-bg-error-soft", fg: "--ux4g-text-status-error",
      label: "Error banner", sample: "✕ Aadhaar verification failed" },
    { tBg: "#FFF1DA", tFg: "#C97A0C",
      bg: "--ux4g-bg-warning-soft", fg: "--ux4g-text-status-warning",
      label: "Warning banner", sample: "! Document expires in 2 days" },
    { tBg: "#E8F1FB", tFg: "#1F6FD0",
      bg: "--ux4g-bg-info-soft", fg: "--ux4g-text-status-info",
      label: "Info banner", sample: "i Bring original ID at the counter" },
    { tBg: "#171717", tFg: "#fff",
      bg: "--ux4g-bg-neutral-inverse", fg: "--ux4g-text-neutral-inverse",
      label: "Inverse surface", sample: "Need help? Call 1800-11-1551" },
  ];
  return (
    <section id="pairings" className="col-section">
      <h2 className="col-section-title">Recommended pairings</h2>
      <p className="col-section-lede">
        Safe token combinations rendered as real examples. When a designer asks "which text token goes on which background?" — this is the answer.
      </p>
      <div className="pair-grid">
        {pairs.map((p, i) => (
          <div key={i} className="pair-card" style={{ background: p.tBg }}>
            <div className="pair-sample" style={{ color: p.tFg }}>{p.sample}</div>
            <div className="pair-meta" style={{ background: "rgba(255,255,255,0.92)" }}>
              <span className="pair-label">{p.label}</span>
              <code>text · {p.fg}</code>
              <code>bg · {p.bg}</code>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function InteractionStates() {
  const STATES = [
    { state: "Default",        rule: "Base semantic token",      token: "--ux4g-bg-primary-strong",        ref: "primary-600",
      btn: { bg: "#4A2BC2", color: "#fff", boxShadow: "none" } },
    { state: "Hover",          rule: "One step darker",          token: "--ux4g-bg-primary-strong-hover",  ref: "primary-700",
      btn: { bg: "#3D239F", color: "#fff", boxShadow: "0 4px 12px -4px rgba(48,28,125,0.35)" } },
    { state: "Active / Pressed", rule: "Two steps darker",       token: "--ux4g-bg-primary-stronger",      ref: "primary-800",
      btn: { bg: "#301C7D", color: "#fff", boxShadow: "0 1px 0 rgba(0,0,0,0.1) inset" } },
    { state: "Focus",          rule: "Dedicated focus token",    token: "--ux4g-shadow-focus-ring",        ref: "not a fill colour",
      btn: { bg: "#4A2BC2", color: "#fff", boxShadow: "0 0 0 2px #fff, 0 0 0 4px #4A2BC2" } },
    { state: "Disabled",       rule: "Neutral disabled",         token: "--ux4g-bg-neutral-disabled",      ref: "neutral-200 / neutral-disabled text",
      btn: { bg: "#E5E5E5", color: "#A1A1A1", boxShadow: "none", cursor: "not-allowed" } },
  ];
  return (
    <section id="states" className="col-section">
      <h2 className="col-section-title">Interaction states</h2>
      <p className="col-section-lede">
        Default → hover → active → focus → disabled. These rules apply to every interactive colour in UX4G so contributors don't invent their own hover values.
      </p>

      <div className="ix-states-grid">
        {STATES.map((s) => (
          <div key={s.state} className="ix-state-card">
            <div className="ix-state-stage">
              <span className="ix-btn" style={{
                background: s.btn.bg,
                color: s.btn.color,
                boxShadow: s.btn.boxShadow,
                cursor: s.btn.cursor || "pointer",
              }}>Submit application</span>
            </div>
            <div className="ix-state-meta">
              <span className="ix-state-label">{s.state}</span>
              <p className="ix-state-rule">{s.rule}</p>
              <code className="ix-state-token">{s.token}</code>
              <span className="ix-state-ref">{s.ref}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="col-callout note">
        Focus indicators must clear a 3:1 contrast ratio against adjacent colours (WCAG 1.4.11). Use <code>--ux4g-shadow-focus-ring</code> — never substitute a border colour token for focus.
      </div>
    </section>
  );
}

function Accessibility() {
  return (
    <section id="contrast" className="col-section">
      <h2 className="col-section-title">Accessibility and WCAG</h2>
      <p className="col-section-lede">
        <strong>GIGW 3.0</strong> (Guidelines for Indian Government Websites, published by NIC/MeitY) mandates WCAG 2.1 Level AA compliance for all central and state government digital services. Colour contrast is not optional — it is a legal requirement.
      </p>
      <SemTable rows={[
        ["Normal text (< 18px regular / < 14px bold)", "4.5 : 1", "1.4.3 AA"],
        ["Large text (≥ 18px regular / ≥ 14px bold)", "3 : 1", "1.4.3 AA"],
        ["Icons and UI components", "3 : 1", "1.4.11 AA"],
        ["Focus indicator", "3 : 1", "1.4.11 AA"],
      ]} cols={["Use case", "Minimum ratio", "WCAG criterion"]} />

      <h3 className="col-h3">Never use colour alone</h3>
      <div className="ctr-grid">
        <div className="ctr-card pass">
          <div className="head"><span>✓ DO · colour + icon + label</span></div>
          <div className="stage" style={{ background: "var(--ux4g-bg-error)" }}>
            <div className="lg" style={{ color: "var(--ux4g-text-status-danger-default, var(--danger))", display: "inline-flex", alignItems: "center", gap: 8 }}>
              <span className="ux4g-icon" aria-hidden="true" style={{ fontSize: 22 }}>cancel</span>
              Aadhaar verification failed
            </div>
            <div className="sm" style={{ color: "var(--ux4g-text-status-danger-default, var(--danger))" }}>Number does not match UIDAI records.</div>
          </div>
          <div className="rule">Red border, red text, error icon, and clear label all share the load. Anyone — including colour-blind users — can read the state.</div>
        </div>
        <div className="ctr-card fail">
          <div className="head"><span>✕ DON'T · colour only</span></div>
          <div className="stage" style={{ background: "#fff" }}>
            <div className="lg" style={{ color: "#171717", borderLeft: "3px solid #DB372D", paddingLeft: 12 }}>Aadhaar verification</div>
            <div className="sm" style={{ color: "#737373", paddingLeft: 12 }}>123412341234</div>
          </div>
          <div className="rule">A red stripe alone can't communicate failure. Users who can't distinguish red see only a neutral row.</div>
        </div>
      </div>

      <div className="col-callout note">
        <strong>Colour blindness prevalence</strong> (NIH): approximately 8% of adult men and 0.5% of adult women have some form of colour insensitivity. Red–green is the most common. Always combine colour with a secondary indicator — icon, label, pattern, or text — for any meaningful UI state.
      </div>

      <p className="col-foot-note">
        <strong>Testing tools:</strong> WebAIM Contrast Checker · Stark (Figma plugin) · browser DevTools accessibility panel.
      </p>
    </section>
  );
}

function DoDont() {
  const rows = [
    ["Use semantic tokens (--ux4g-bg-primary-strong)", "Hard-code hex values (#4A2BC2)"],
    ["Pair colour with icon + text for all status states", "Use colour alone to convey error / success / warning"],
    ["One primary CTA per screen — everything else supports", "Multiple primary-coloured buttons competing for attention"],
    ["Use neutral backgrounds for content pages", "Use saturated brand colours as page-level backgrounds"],
    ["Use the extended palette only for illustrations and data viz", "Use extended colours (lime, gold, pink) for UI status"],
  ];
  return (
    <section id="dodont" className="col-section">
      <h2 className="col-section-title">Do and don't</h2>
      <p className="col-section-lede">Five common decisions, summarised.</p>
      <div className="dd-table">
        <div className="dd-head"><span>Do</span><span>Don't</span></div>
        {rows.map((r, i) => (
          <div key={i} className="dd-row"><span>{r[0]}</span><span>{r[1]}</span></div>
        ))}
      </div>
    </section>
  );
}

function DarkMode() {
  return (
    <section id="darkmode" className="col-section">
      <h2 className="col-section-title">Dark mode</h2>
      <p className="col-section-lede">
        UX4G currently ships a single light theme. The semantic token naming convention (<code>--ux4g-bg-primary-strong</code> rather than <code>--ux4g-color-white</code>) is intentionally theme-agnostic — a dark theme can be added by remapping primitive tokens without changing any component code.
      </p>
      <div className="dm-grid">
        <div className="dm-card dm-card-light">
          <div className="dm-tag">Available today</div>
          <div className="dm-preview" style={{ background: "#fff" }}>
            <div className="dm-row"><span className="dm-h" style={{ color: "#171717" }}>Apply for ration card</span></div>
            <div className="dm-row"><span className="dm-b" style={{ color: "#525252" }}>Provide your 12-digit Aadhaar number.</span></div>
            <div className="dm-row"><span className="dm-btn" style={{ background: "#4A2BC2", color: "#fff" }}>Submit application</span></div>
          </div>
          <p className="dm-cap">Light theme — the default UX4G rendering.</p>
        </div>
        <div className="dm-card dm-card-dark">
          <div className="dm-tag">Roadmap</div>
          <div className="dm-preview" style={{ background: "#171717" }}>
            <div className="dm-row"><span className="dm-h" style={{ color: "#FAFAFA" }}>Apply for ration card</span></div>
            <div className="dm-row"><span className="dm-b" style={{ color: "#A1A1A1" }}>Provide your 12-digit Aadhaar number.</span></div>
            <div className="dm-row"><span className="dm-btn" style={{ background: "#8670FF", color: "#171717" }}>Submit application</span></div>
          </div>
          <p className="dm-cap">Dark theme — same components, primitive tokens remapped.</p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Related foundations ─────────────── */
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

/* ─────────────── App ─────────────── */
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

const COL_TOC=[
  { id:"principles",   label:"Principles" },
  { id:"system",       label:"How the system works" },
  { id:"primitives",   label:"Primitive palettes" },
  { id:"semantic",     label:"Semantic tokens" },
  { id:"pairings",     label:"Recommended pairings" },
  { id:"states",       label:"Interaction states" },
  { id:"contrast",     label:"Accessibility & WCAG" },
  { id:"dodont",       label:"Do and don't" },
  { id:"darkmode",     label:"Dark mode" },
  { id:"related",      label:"Related foundations" },
];

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
              <System/>
              <PrimitivePalettes/>
              <SemanticTokens/>
              <Pairings/>
              <InteractionStates/>
              <Accessibility/>
              <DoDont/>
              <DarkMode/>
              <Related exclude="colour"/>
            </div>
            <OnThisPage items={COL_TOC}/>
          </div>
        </div>
      </main>
      <SiteFooter/>
      <Toasts items={toasts}/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
