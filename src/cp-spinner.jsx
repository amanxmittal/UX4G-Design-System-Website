/* global React */
(function () {
  function Sp({ size = "md" }) {
    return <span className={"ux4g-spinner ux4g-spinner-" + size}></span>;
  }

  function Hero() {
    return (
      <React.Fragment>
        <div className="hb-grain"></div>
        <div className="hb-soft-blur"></div>
        <div className="hb-spin-mock">
          <div className="hb-spin-ring"></div>
          <div className="hb-spin-bar"><div className="hb-spin-bar-fill"></div></div>
        </div>
      </React.Fragment>
    );
  }

  const IMG = "assets/images/component-anatomy/spinner/";

  const config = {
    name: "Spinner",
    navName: "Spinner",
    group: "Feedback",
    desc: "Indeterminate loader for short waits - API calls, validation, search. Tells users 'system is working' without forecasting how long.",
    bannerVariant: "spinner",
    hero: Hero,

    anatomy: [
      { n: 1, label: "Track / arc", token: "ux4g-bg-primary-strong" },
      { n: 2, label: "Background ring", token: "ux4g-bg-neutral-soft" },
      { n: 3, label: "Stroke width", token: "ux4g-border-width-md" },
      { n: 4, label: "Rotation animation", token: "1.4s linear infinite" },
      { n: 5, label: "Optional label", token: "ux4g-body-s-default" },
    ],

    properties: [
      {
        label: "Size",
        desc: "SM for inline use within buttons or text. MD is the default. LG for centered page-loading states. XL for hero / splash loading.",
        img: IMG + "properties-size.png",
        imgAlt: "Spinner arcs at small, medium, and large sizes.",
        demos: [
          { label: "SM · 16px", node: <Sp size="sm" /> },
          { label: "MD · 24px", node: <Sp size="md" /> },
          { label: "LG · 36px", node: <Sp size="lg" /> },
        ],
      },
      {
        label: "Colour",
        desc: "Primary by default. White / on-primary when sitting on coloured backgrounds (inside Primary buttons, dark surfaces).",
        img: IMG + "properties-colour.png",
        imgAlt: "A primary spinner on a light background, and a light spinner on a dark brand surface.",
        demos: [
          { label: "Primary on light", node: <Sp /> },
          { label: "On primary surface", node: (
            <div style={{ background: "var(--ux4g-bg-primary-strong)", padding: 12, borderRadius: 8 }}>
              <span className="ux4g-spinner ux4g-spinner-md" style={{ borderTopColor: "#fff", borderColor: "rgba(255,255,255,0.3)" }}></span>
            </div>
          ) },
        ],
      },
      {
        label: "With label",
        desc: "Pair the spinner with a brief label ('Loading…', 'Verifying…', 'Submitting…'). Especially important when the wait may exceed 2 seconds.",
        img: IMG + "properties-label.png",
        imgAlt: "A spinner with an inline Loading label, and a spinner with a stacked label below it.",
        demos: [
          { label: "Inline label", node: (
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Sp size="sm" />
              <span style={{ fontSize: 13, color: "var(--ux4g-text-neutral-secondary)" }}>Loading services…</span>
            </div>
          ) },
          { label: "Stacked label", node: (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <Sp size="lg" />
              <span style={{ fontSize: 13, color: "var(--ux4g-text-neutral-secondary)" }}>Verifying Aadhaar OTP…</span>
            </div>
          ) },
        ],
      },
    ],

    scenarios: [
      {
        title: "Inside a Submit button",
        desc: "When a form is submitted, the Submit button shows a spinner and the label changes ('Submit' → 'Submitting…'). Button is disabled to prevent double-fire.",
        img: IMG + "scenarios-button.png",
        imgAlt: "A submit button showing a light spinner and Submitting label.",
        stage: <button className="ux4g-btn-primary ux4g-btn-md state-loading"><span className="spin"></span>Submitting application…</button>,
      },
      {
        title: "Search results loading",
        desc: "After the user types, replace the search icon with a spinner briefly. Cap at 300ms - cache common queries to feel instant.",
        img: IMG + "scenarios-search.png",
        imgAlt: "A small spinner with a Searching services label while results load.",
        stage: (
          <div className="ux4g-search ux4g-search-m" style={{ width: "100%", maxWidth: 320 }}>
            <span style={{ marginLeft: 4 }}><Sp size="sm" /></span>
            <input type="text" className="ux4g-search-input" defaultValue="property tax" readOnly />
          </div>
        ),
      },
      {
        title: "Page-level loading",
        desc: "On initial page load (data fetch), center the spinner with a label in the page area. Skeleton screen is better for content-heavy pages.",
        img: IMG + "scenarios-page.png",
        imgAlt: "A large spinner with a Loading your dashboard label for a full-page load.",
        stage: (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, padding: 40 }}>
            <Sp size="lg" />
            <span style={{ fontSize: 14, color: "var(--ux4g-text-neutral-secondary)" }}>Loading your applications…</span>
          </div>
        ),
      },
      {
        title: "Inline validation",
        desc: "While async-validating an input (PAN format, Aadhaar lookup), show a small spinner at the trailing edge of the field.",
        img: IMG + "scenarios-inline.png",
        imgAlt: "A tiny spinner with a Checking availability label for inline validation.",
        stage: (
          <div className="ux4g-input-container ux4g-input-md" style={{ width: "100%" }}>
            <div className="ux4g-input" style={{ display: "flex", alignItems: "center", paddingRight: 12 }}>
              <input type="text" className="ux4g-input-input" defaultValue="ABCDE1234F" readOnly style={{ flex: 1 }} />
              <Sp size="sm" />
            </div>
          </div>
        ),
      },
      {
        title: "Skeleton over spinner for content",
        desc: "For card grids and lists, show skeleton placeholders instead of a centered spinner. Skeletons preserve layout and feel faster.",
        img: IMG + "scenarios-skeleton.png",
        imgAlt: "Skeleton placeholder bars used instead of a spinner for content.",
        stage: (
          <div style={{ display: "flex", flexDirection: "column", gap: 8, width: "100%" }}>
            <div style={{ height: 12, background: "var(--ux4g-bg-neutral-soft)", borderRadius: 4, width: "60%" }}></div>
            <div style={{ height: 10, background: "var(--ux4g-bg-neutral-soft)", borderRadius: 4 }}></div>
            <div style={{ height: 10, background: "var(--ux4g-bg-neutral-soft)", borderRadius: 4, width: "80%" }}></div>
          </div>
        ),
      },
      {
        title: "Long-wait fallback",
        desc: "If the spinner has been visible for 8+ seconds, change the label to a more honest message ('Still working…') or offer a cancel action.",
        img: IMG + "scenarios-longwait.png",
        imgAlt: "A spinner with a long-wait message that the task can take up to a minute.",
        stage: (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <Sp size="lg" />
            <span style={{ fontSize: 14, color: "var(--ux4g-text-neutral-secondary)" }}>Still working - server is busy…</span>
            <button className="ux4g-btn-text-primary ux4g-btn-sm">Cancel</button>
          </div>
        ),
      },
    ],

    responsive: [
      {
        title: "Size scales up on mobile for page-level loading",
        desc: "Page-loading spinners use LG on desktop, XL on mobile. More visible on smaller screens where the spinner is the only on-screen element.",
        img: IMG + "responsive-size.png",
        imgAlt: "A larger spinner used for page-level loading on mobile.",
        sample: (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <Sp size="lg" />
            <span style={{ fontSize: 13, color: "var(--ux4g-text-neutral-secondary)" }}>Loading…</span>
          </div>
        ),
      },
      {
        title: "Inline spinners stay SM regardless of breakpoint",
        desc: "Spinners inside buttons, inputs, and search bars stay SM size everywhere. Constancy matters more than scaling here.",
        img: IMG + "responsive-inline.png",
        imgAlt: "An inline spinner that stays small on every breakpoint.",
        sample: <button className="ux4g-btn-primary ux4g-btn-md state-loading"><span className="spin"></span>Loading</button>,
      },
      {
        title: "Reduced motion replaces spin with progress bar",
        desc: "If `prefers-reduced-motion: reduce` is set, swap the rotating spinner for a non-animated bar or pulsing dot. No epileptic risk.",
        img: IMG + "responsive-reducedmotion.png",
        imgAlt: "A progress bar shown instead of a spin for reduced-motion users.",
        sample: <Sp size="md" />,
      },
    ],

    practices: [
      {
        do: {
          img: IMG + "best-practices-1-do.png",
          imgAlt: "A spinner with a Loading your applications label.",
          rule: "Pair a spinner with a label so users know what is loading.",
        },
        dont: {
          img: IMG + "best-practices-1-dont.png",
          imgAlt: "A bare spinner with no label.",
          rule: "Do not show a bare spinner with no context for a noticeable wait.",
        },
      },
      {
        do: {
          img: IMG + "best-practices-2-do.png",
          imgAlt: "Skeleton placeholder bars for content.",
          rule: "Use a skeleton for content that has a known layout.",
        },
        dont: {
          img: IMG + "best-practices-2-dont.png",
          imgAlt: "A single spinner standing in for a content area.",
          rule: "Do not use one spinner for a whole content area; a skeleton conveys more.",
        },
      },
      {
        do: {
          img: IMG + "best-practices-3-do.png",
          imgAlt: "A small inline spinner next to its label.",
          rule: "Size the spinner to its context — small when inline.",
        },
        dont: {
          img: IMG + "best-practices-3-dont.png",
          imgAlt: "An oversized spinner dwarfing its inline label.",
          rule: "Do not use an oversized spinner inline; it overpowers the text.",
        },
      },
    ],

    accessibility: [
      { t: "Use aria-busy='true' on the loading region.", b: "Wrap the loading area in `aria-busy='true'`. Screen readers announce 'busy' so users know not to interact yet." },
      { t: "Label announces what's loading.", b: "Pair the spinner with text like 'Loading services'. The text itself is what screen readers read - the spinner is decoration." },
      { t: "Use role='status' for the loading region.", b: "Wrap the spinner + label in `<div role='status'>` so screen readers announce changes when the load completes." },
      { t: "Don't auto-focus the spinner.", b: "The spinner is decoration, not focusable. Keep focus on the trigger (button) that started the action." },
      { t: "Respect prefers-reduced-motion.", b: "If the user has reduced motion enabled, replace the rotating spinner with a non-animated indicator (static icon, pulsing dot)." },
      { t: "Long waits announce progress.", b: "If the wait exceeds 8 seconds, change the label to 'Still working…' so the screen reader re-announces and users hear the action isn't stuck." },
      { t: "Spinner inside a button keeps the label.", b: "`<button aria-label='Submit application' aria-busy='true'>Submitting…</button>`. Label stays consistent for screen readers." },
    ],

    related: [
      {
        name: "Progress Indicator",
        note: "When you know the percentage (file upload, multi-step form), use Progress Indicator. Spinner is for unknown waits; Progress is for measurable.",
        preview: (
          <div style={{ width: "100%" }}>
            <div style={{ height: 8, background: "var(--ux4g-bg-neutral-soft)", borderRadius: 4, overflow: "hidden" }}>
              <div style={{ width: "68%", height: "100%", background: "var(--ux4g-bg-primary-strong)" }}></div>
            </div>
          </div>
        ),
      },
      {
        name: "Skeleton",
        note: "For content-heavy areas (cards, list rows, tables), use Skeleton placeholders. Preserves layout and feels faster than a spinner.",
        preview: (
          <div style={{ display: "flex", flexDirection: "column", gap: 6, width: "100%" }}>
            <div style={{ height: 10, background: "var(--ux4g-bg-neutral-soft)", borderRadius: 4 }}></div>
            <div style={{ height: 10, background: "var(--ux4g-bg-neutral-soft)", borderRadius: 4, width: "70%" }}></div>
          </div>
        ),
      },
      {
        name: "Alert / Toast",
        note: "When the wait ends (success or failure), surface the result via Alert. Spinner reports activity; Alert reports outcome.",
        preview: (
          <div className="ux4g-alert ux4g-alert-success" style={{ padding: 10 }}>
            <span className="ux4g-alert-icon ux4g-icon-outlined">check_circle</span>
            <div className="ux4g-alert-content"><p className="ux4g-alert-title" style={{ fontSize: 13 }}>Submitted</p></div>
          </div>
        ),
      },
      {
        name: "Button",
        note: "Spinners commonly appear inside Buttons during async actions. Pair with state='loading' to disable and visually indicate.",
        preview: <button className="ux4g-btn-primary ux4g-btn-md state-loading"><span className="spin"></span>Submitting</button>,
      },
    ],
  };

  if (window.UX4G_CP && window.UX4G_CP.render) window.UX4G_CP.render(config);
  else window.UX4G_COMPONENT_CONFIG = config;
})();
