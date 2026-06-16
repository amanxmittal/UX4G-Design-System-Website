/* global React */
(function () {
  function Tip({ content, position = "top", size = "s", trigger }) {
    return (
      <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        {position === "bottom" && trigger}
        <div className={"ux4g-tooltip ux4g-tooltip-" + size + " show"} style={{ position: "relative", transform: "none" }}>
          {content}
        </div>
        {position !== "bottom" && trigger}
      </div>
    );
  }

  function Hero() {
    return (
      <React.Fragment>
        <div className="hb-grain"></div>
        <div className="hb-soft-blur"></div>
        <div className="hb-tip-mock">
          <div className="hb-tip-bubble">Verified by OTP</div>
          <div className="hb-tip-target">?</div>
        </div>
      </React.Fragment>
    );
  }

  const IMG = "assets/images/component-anatomy/tooltip/";

  const config = {
    name: "Tooltip",
    navName: "Tooltip",
    group: "Feedback",
    desc: "Contextual hint on hover or focus. Use for icon-button labels, abbreviation expansions, and constraint explanations - never for critical information.",
    bannerVariant: "tooltip",
    hero: Hero,

    anatomy: [
      { n: 1, label: "Bubble", token: "ux4g-bg-neutral-strong" },
      { n: 2, label: "Text", token: "ux4g-text-on-strong" },
      { n: 3, label: "Pointer / arrow", token: "ux4g-bg-neutral-strong" },
      { n: 4, label: "Anchor element", token: "ux4g-bg-neutral-elevated" },
      { n: 5, label: "Offset gap", token: "ux4g-space-xs" },
      { n: 6, label: "Padding", token: "ux4g-padding-s" },
    ],

    properties: [
      {
        label: "Position",
        desc: "Top is the default. Bottom for triggers near the top of the viewport. Left and right for triggers in narrow vertical strips.",
        img: IMG + "properties-position.png",
        imgAlt: "The same tooltip shown above its anchor and below its anchor.",
        demos: [
          { label: "Top", node: <Tip content="Verified by OTP" trigger={<button className="ux4g-btn-outline-primary ux4g-btn-md">Hover</button>} /> },
          { label: "Bottom", node: <Tip content="Verified by OTP" position="bottom" trigger={<button className="ux4g-btn-outline-primary ux4g-btn-md">Hover</button>} /> },
        ],
      },
      {
        label: "Size",
        desc: "Small for one-line hints (default). Medium for two-line constraints. Never use Tooltip for paragraphs - use Popover instead.",
        img: IMG + "properties-size.png",
        imgAlt: "A small tooltip and a medium tooltip on icon buttons.",
        demos: [
          { label: "Small", node: <Tip size="s" content="Verified" trigger={<span className="ux4g-icon-outlined" style={{ fontSize: 22, padding: 8 }}>info</span>} /> },
          { label: "Medium", node: <Tip size="m" content="Verified by OTP on 12 Apr 2026" trigger={<span className="ux4g-icon-outlined" style={{ fontSize: 22, padding: 8 }}>info</span>} /> },
        ],
      },
      {
        label: "Trigger",
        desc: "Tooltips appear on hover (desktop) and focus (keyboard). On touch, tap-and-hold opens; tap-away dismisses. Never required to complete a task.",
        img: IMG + "properties-trigger.png",
        imgAlt: "A tooltip on an icon button and a tooltip on a dashed-underline text trigger.",
        demos: [
          { label: "Icon button", node: <Tip content="Add new application" trigger={<button className="ux4g-icon-btn ux4g-icon-btn-md"><span className="ux4g-icon-outlined">add</span></button>} /> },
          { label: "Text label", node: <Tip content="Disabled until OTP verified" trigger={<span style={{ borderBottom: "1px dashed var(--ux4g-text-neutral-tertiary)" }}>OTP-locked</span>} /> },
        ],
      },
    ],

    scenarios: [
      {
        title: "Icon-button label",
        desc: "Icon-only buttons need a Tooltip to clarify their purpose. The icon plus its accessible name (aria-label) drive the Tooltip content.",
        img: IMG + "scenarios-icon-label.png",
        imgAlt: "An icon button showing the tooltip 'Add new application'.",
        stage: <Tip content="Add application" trigger={<button className="ux4g-icon-btn ux4g-icon-btn-md"><span className="ux4g-icon-outlined">add</span></button>} />,
      },
      {
        title: "Disabled button explanation",
        desc: "When a button is disabled, attach a Tooltip explaining why. Critical - disabled buttons feel broken without context.",
        img: IMG + "scenarios-disabled-btn.png",
        imgAlt: "A disabled Submit button with a tooltip explaining 'Complete OTP verification first'.",
        stage: <Tip content="Complete OTP verification first" trigger={<button className="ux4g-btn-primary ux4g-btn-md" disabled>Submit</button>} />,
      },
      {
        title: "Abbreviation expansion",
        desc: "Government acronyms (DPDP, BBPS, NPCI) get a Tooltip with the full expansion. Underline with dashed line to hint at hoverability.",
        img: IMG + "scenarios-abbreviation.png",
        imgAlt: "A dashed-underline 'DPDP Act' trigger expanding to 'Digital Personal Data Protection Act, 2023'.",
        stage: <Tip content="Digital Personal Data Protection Act 2023" trigger={<span style={{ borderBottom: "1px dashed var(--ux4g-text-neutral-tertiary)", cursor: "help" }}>DPDP</span>} />,
      },
      {
        title: "Constraint hint",
        desc: "When a field has a non-obvious constraint (max length, format), show it in a Tooltip on focus. Frees up the form layout for the field itself.",
        img: IMG + "scenarios-constraint.png",
        imgAlt: "An info icon with the tooltip 'PIN code must be exactly 6 digits'.",
        stage: <Tip content="6-digit numeric, no spaces" trigger={<div className="ux4g-input-container ux4g-input-md" style={{ width: 180 }}><div className="ux4g-input"><input type="text" className="ux4g-input-input" defaultValue="411014" readOnly /></div></div>} />,
      },
      {
        title: "Avatar identification",
        desc: "Tooltip on hover of an avatar shows the user's full name. Useful in dense list views where the avatar shows initials only.",
        img: IMG + "scenarios-avatar.png",
        imgAlt: "An avatar showing the tooltip 'Priya Sharma — District Officer'.",
        stage: <Tip content="Anjali Bhattacharya" trigger={<span className="ux4g-avatar ux4g-avatar-m" style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--ux4g-bg-primary-subtle)", color: "var(--ux4g-text-primary-default)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 600 }}>AB</span>} />,
      },
      {
        title: "Don't use for critical info",
        desc: "Tooltips disappear on tap-away and don't work for screen readers without focus management. Critical errors live as text on the page.",
        img: IMG + "scenarios-not-critical.png",
        imgAlt: "A tooltip carrying only supplementary, non-critical text.",
        stage: (
          <div className="ux4g-input-container ux4g-input-md state-error" style={{ width: 220 }}>
            <div className="ux4g-input">
              <input type="text" className="ux4g-input-input" defaultValue="12" readOnly />
            </div>
            <span style={{ fontSize: 12, color: "var(--ux4g-text-error-default)", marginTop: 4, display: "block" }}>Enter a valid 6-digit PIN code</span>
          </div>
        ),
      },
    ],

    responsive: [
      {
        title: "Long-press to open on touch",
        desc: "On touch devices, tap-and-hold the trigger for 500ms to open. Tap outside to dismiss. Never expect hover to work on phones.",
        img: IMG + "responsive-touch.png",
        imgAlt: "An icon button with a touch ripple, opened by long-press on touch devices.",
        sample: <Tip content="Add application" trigger={<button className="ux4g-icon-btn ux4g-icon-btn-md"><span className="ux4g-icon-outlined">add</span></button>} />,
      },
      {
        title: "Auto-flip to stay in viewport",
        desc: "If a top-positioned Tooltip would overflow the top of the viewport, it flips to bottom. Smart positioning never gets cut off.",
        img: IMG + "responsive-flip.png",
        imgAlt: "A tooltip that flips below its anchor to stay within the viewport.",
        sample: <Tip content="Verified by OTP" position="bottom" trigger={<span className="ux4g-icon-outlined" style={{ fontSize: 22, padding: 8 }}>info</span>} />,
      },
      {
        title: "Text wraps at 240px max width",
        desc: "Tooltips cap at 240px on mobile (320px desktop). Beyond that, content wraps. If you need a paragraph, use a Popover instead.",
        img: IMG + "responsive-wrap.png",
        imgAlt: "A tooltip whose text wraps onto multiple lines at its maximum width.",
        sample: <Tip size="m" content="This service is online for all 36 states and UTs from April 2026 onwards." trigger={<span className="ux4g-icon-outlined" style={{ fontSize: 22, padding: 8 }}>info</span>} />,
      },
    ],

    practices: [
      {
        do: { img: IMG + "best-practices-1-do.png", imgAlt: "A concise tooltip, 'Add new application'.", stage: <Tip content="Add new" trigger={<button className="ux4g-icon-btn ux4g-icon-btn-md"><span className="ux4g-icon-outlined">add</span></button>} />, rule: "One-line concise content. Tooltip is a hint, not a paragraph." },
        dont: { img: IMG + "best-practices-1-dont.png", imgAlt: "A tooltip stuffed with a long multi-line paragraph.", stage: <Tip size="m" content="This icon button adds a new entry to the table above and assigns it a unique reference ID for tracking." trigger={<button className="ux4g-icon-btn ux4g-icon-btn-md"><span className="ux4g-icon-outlined">add</span></button>} />, rule: "Long Tooltip is hard to read mid-hover - use Popover or inline text." },
      },
      {
        do: { img: IMG + "best-practices-2-do.png", imgAlt: "A disabled button paired with a tooltip explaining why.", stage: <Tip content="Complete OTP first" trigger={<button className="ux4g-btn-primary ux4g-btn-md" disabled>Submit</button>} />, rule: "Pair every disabled button with a Tooltip explaining why." },
        dont: { img: IMG + "best-practices-2-dont.png", imgAlt: "A disabled button with no explanatory tooltip.", stage: <button className="ux4g-btn-primary ux4g-btn-md" disabled>Submit</button>, rule: "Disabled with no explanation feels broken." },
      },
      {
        do: { img: IMG + "best-practices-3-do.png", imgAlt: "A tooltip carrying nice-to-have 'Verified' context.", stage: <Tip content="Verified" trigger={<span className="ux4g-icon-outlined" style={{ fontSize: 22, padding: 8 }}>check_circle</span>} />, rule: "Use Tooltip for nice-to-have context. The icon alone is interpretable." },
        dont: { img: IMG + "best-practices-3-dont.png", imgAlt: "An error message hidden inside a tooltip.", stage: (<div className="ux4g-input-container ux4g-input-md state-error" style={{ width: 200 }}><div className="ux4g-input"><input type="text" className="ux4g-input-input" defaultValue="12" readOnly /></div><Tip content="Must be 12 digits" trigger={<span className="ux4g-icon-outlined" style={{ marginLeft: 4 }}>error</span>} /></div>), rule: "Don't hide error messages in Tooltips - users tap away before reading." },
      },
      {
        do: { img: IMG + "best-practices-4-do.png", imgAlt: "A dashed-underline hover cue signalling a tooltip is available.", stage: <Tip content="DPDP Act 2023" trigger={<span style={{ borderBottom: "1px dashed var(--ux4g-text-neutral-tertiary)" }}>DPDP</span>} />, rule: "Visual cue (dashed underline) hints that hover gives more info." },
        dont: { img: IMG + "best-practices-4-dont.png", imgAlt: "Plain text with no cue that a tooltip exists.", stage: <Tip content="DPDP Act 2023" trigger={<span>DPDP</span>} />, rule: "No hover cue means users never discover the Tooltip." },
      },
    ],

    accessibility: [
      { t: "Tooltip is supplementary, never required.", b: "Critical information lives as page text. Tooltips disappear on tap-away, fail on touch, and are inconsistent across screen readers." },
      { t: "Triggered by focus, not just hover.", b: "Keyboard users tab to the trigger - the Tooltip must open on `:focus-visible`, not just `:hover`. Built-in `<button title='…'>` does this automatically." },
      { t: "Linked via aria-describedby.", b: "The trigger references the Tooltip's id with `aria-describedby`. Screen readers announce trigger then Tooltip content." },
      { t: "Escape closes the Tooltip.", b: "Pressing Escape while hovering closes the Tooltip. Critical for keyboard users who may want to dismiss without moving focus." },
      { t: "Tooltip does not trap focus.", b: "Focus stays on the trigger. The Tooltip is informational - users don't tab into it." },
      { t: "Touch users get tap-and-hold.", b: "On touch, 500ms long-press opens the Tooltip; tap-away dismisses. Never block flow waiting for hover to register." },
      { t: "Avoid Tooltip on touch-only elements.", b: "If an element only exists for touch (mobile-only menu), don't use a Tooltip. Use inline text or a Popover that opens on tap." },
    ],

    related: [
      {
        name: "Popover",
        note: "For longer, scrollable, or interactive content (date picker, info panel with links), use Popover. Tooltip is for short hints.",
        preview: (
          <div style={{ background: "var(--ux4g-bg-neutral-elevated)", border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 6, padding: 10, fontSize: 12, maxWidth: 200 }}>
            <div style={{ fontWeight: 600, marginBottom: 4 }}>Service availability</div>
            <div style={{ color: "var(--ux4g-text-neutral-secondary)" }}>Online for all 36 states from Apr 2026.</div>
          </div>
        ),
      },
      {
        name: "Alert / Toast",
        note: "For dynamic feedback after an action (saved, failed), use Alert or Toast. Tooltips don't reach users who weren't hovering.",
        preview: (
          <div className="ux4g-alert ux4g-alert-success" style={{ padding: 10 }}>
            <span className="ux4g-alert-icon ux4g-icon-outlined">check_circle</span>
            <div className="ux4g-alert-content"><p className="ux4g-alert-title" style={{ fontSize: 13 }}>Saved</p></div>
          </div>
        ),
      },
      {
        name: "Icon Button",
        note: "Every Icon Button needs a Tooltip. The visual icon alone fails screen readers and users who don't recognise the symbol.",
        preview: (
          <button className="ux4g-icon-btn ux4g-icon-btn-md"><span className="ux4g-icon-outlined">add</span></button>
        ),
      },
      {
        name: "Badge",
        note: "For persistent status markers (Verified, Pending), use Badge. Tooltip is on-hover; Badge stays visible to convey status at a glance.",
        preview: (
          <span className="ux4g-tag-tonal-success">Verified</span>
        ),
      },
    ],
  };

  if (window.UX4G_CP && window.UX4G_CP.render) window.UX4G_CP.render(config);
  else window.UX4G_COMPONENT_CONFIG = config;
})();
