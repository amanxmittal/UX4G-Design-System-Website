/* global React */
(function () {
  function B({ variant = "dot", severity = "primary", value, size = "m" }) {
    if (variant === "dot") {
      const sz = { s: 8, m: 10, l: 12 }[size] || 10;
      return <span style={{ display: "inline-block", width: sz, height: sz, borderRadius: "50%", background: `var(--ux4g-bg-${severity}-strong)` }}></span>;
    }
    const sizeStyles = { s: { fontSize: 10, padding: "2px 6px", minWidth: 16 }, m: { fontSize: 11, padding: "2px 8px", minWidth: 20 }, l: { fontSize: 13, padding: "4px 10px", minWidth: 24 } }[size];
    return <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: 999, background: `var(--ux4g-bg-${severity}-strong)`, color: "#fff", fontWeight: 700, ...sizeStyles }}>{value}</span>;
  }

  function Hero() {
    return (
      <React.Fragment>
        <div className="hb-grain"></div>
        <div className="hb-soft-blur"></div>
        <div className="hb-tag-mock">
          <div className="hb-tag-chip amber">3</div>
          <div className="hb-tag-chip">12</div>
          <div className="hb-tag-chip outline">●</div>
          <div className="hb-tag-chip">99+</div>
          <div className="hb-tag-chip amber">●</div>
        </div>
      </React.Fragment>
    );
  }

  const IMG = "assets/images/component-anatomy/badge/";

  const config = {
    name: "Badge",
    navName: "Badge",
    group: "Feedback",
    desc: "Compact status marker or notification count. Dots signal state; numbers show counts. Always pair with a parent element - never standalone.",
    bannerVariant: "badge",
    hero: Hero,

    anatomy: [
      { n: 1, label: "Container", token: "ux4g-radius-full" },
      { n: 2, label: "Background fill", token: "ux4g-bg-primary-strong" },
      { n: 3, label: "Number / glyph", token: "ux4g-text-on-primary" },
      { n: 4, label: "Border (when overlaid)", token: "ux4g-bg-neutral-elevated" },
      { n: 5, label: "Parent anchor", token: "ux4g-bg-neutral-elevated" },
    ],

    properties: [
      {
        label: "Variant",
        desc: "Dot: presence-only marker (no count). Digit: numeric badge for unread counts and quantities.",
        img: IMG + "properties-variant.png",
        imgAlt: "Badge variants: a dot, a digit badge showing 3, and a wider count badge.",
        demos: [
          { label: "Dot", node: <B variant="dot" severity="primary" /> },
          { label: "Digit", node: <B variant="digit" severity="primary" value="3" /> },
          { label: "Digit 99+", node: <B variant="digit" severity="primary" value="99+" /> },
        ],
      },
      {
        label: "Severity",
        desc: "Primary for default counts. Success for verified, completed. Warning for pending. Danger for errors and required actions.",
        img: IMG + "properties-severity.png",
        imgAlt: "Dot badges in four severities: brand (purple), success (green), warning (amber), and danger (red).",
        demos: [
          { label: "Primary", node: <B variant="dot" severity="primary" /> },
          { label: "Success", node: <B variant="dot" severity="success" /> },
          { label: "Warning", node: <B variant="dot" severity="warning" /> },
          { label: "Danger", node: <B variant="dot" severity="error" /> },
        ],
      },
      {
        label: "Size",
        desc: "Small for compact icon overlays. Medium for nav items. Large for hero counts where the badge is the focal point.",
        img: IMG + "properties-size.png",
        imgAlt: "Three badge types: a dot, a digit, and an icon badge.",
        demos: [
          { label: "Small", node: <B variant="digit" severity="primary" value="3" size="s" /> },
          { label: "Medium", node: <B variant="digit" severity="primary" value="3" size="m" /> },
          { label: "Large", node: <B variant="digit" severity="primary" value="3" size="l" /> },
        ],
      },
    ],

    scenarios: [
      {
        title: "Unread count on inbox icon",
        desc: "Badge overlays the inbox icon to show unread count. Top-right corner; small white border to separate from the icon underneath.",
        img: IMG + "scenarios-unread.png",
        imgAlt: "A red digit badge showing 3 unread messages.",
        stage: (
          <span style={{ position: "relative", display: "inline-block" }}>
            <button className="ux4g-icon-btn ux4g-icon-btn-md"><span className="ux4g-icon-outlined">mail</span></button>
            <span style={{ position: "absolute", top: 4, right: 4 }}><B variant="digit" severity="error" value="5" size="s" /></span>
          </span>
        ),
      },
      {
        title: "Status dot on Avatar",
        desc: "Small dot on the avatar's corner signals presence - online, away, offline. Coloured + white border so it pops on any avatar background.",
        img: IMG + "scenarios-status.png",
        imgAlt: "A green dot badge indicating online status.",
        stage: (
          <span style={{ position: "relative", display: "inline-block" }}>
            <span style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--ux4g-bg-primary-subtle)", color: "var(--ux4g-text-primary-default)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 600 }}>AB</span>
            <span style={{ position: "absolute", bottom: 0, right: 0, border: "2px solid var(--ux4g-bg-neutral-elevated)", borderRadius: "50%", padding: 0 }}><B variant="dot" severity="success" /></span>
          </span>
        ),
      },
      {
        title: "Tab badge for unread items",
        desc: "Tab labels can include a count badge - 'Inbox (5)'. Use Badge for visual emphasis when the count drives action.",
        img: IMG + "scenarios-tab.png",
        imgAlt: "A brand digit badge showing 9 pending tasks on a tab.",
        stage: (
          <div className="ux4g-tab ux4g-tab-underline ux4g-tab-md">
            <ul className="ux4g-tab-list" role="tablist" style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", gap: 24 }}>
              <li className="ux4g-tab-item is-active" role="tab" style={{ display: "flex", alignItems: "center", gap: 6 }}>Inbox <B variant="digit" severity="error" value="5" size="s" /></li>
              <li className="ux4g-tab-item" role="tab">Sent</li>
              <li className="ux4g-tab-item" role="tab">Drafts</li>
            </ul>
          </div>
        ),
      },
      {
        title: "Nav item with notification dot",
        desc: "Sidebar nav items can carry a small dot indicating new activity. No count - just 'something new here' to draw attention.",
        img: IMG + "scenarios-nav.png",
        imgAlt: "A red dot badge marking new activity on a nav item.",
        stage: (
          <div style={{ display: "flex", flexDirection: "column", gap: 4, width: 220 }}>
            <div style={{ padding: "10px 14px", borderRadius: 6, display: "flex", justifyContent: "space-between", alignItems: "center", background: "var(--ux4g-bg-primary-subtle)" }}><span style={{ fontSize: 14 }}>Applications</span><B variant="dot" severity="error" /></div>
            <div style={{ padding: "10px 14px", fontSize: 14 }}>Documents</div>
            <div style={{ padding: "10px 14px", fontSize: 14 }}>Settings</div>
          </div>
        ),
      },
      {
        title: "Count capped at 99+",
        desc: "Counts above 99 display as '99+' to prevent the badge from growing too wide. Same UX everywhere - Instagram, Gmail, etc.",
        img: IMG + "scenarios-cap.png",
        imgAlt: "A count badge, with counts capping at 99+.",
        stage: (
          <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
            <span style={{ position: "relative", display: "inline-block" }}>
              <button className="ux4g-icon-btn ux4g-icon-btn-md"><span className="ux4g-icon-outlined">notifications</span></button>
              <span style={{ position: "absolute", top: 0, right: 0 }}><B variant="digit" severity="error" value="99+" size="s" /></span>
            </span>
          </div>
        ),
      },
      {
        title: "Suppressed when zero",
        desc: "When the count drops to 0, hide the badge entirely. Showing '0' is visual noise and tells the user nothing new.",
        img: IMG + "scenarios-zero.png",
        imgAlt: "A greyed badge illustrating that no badge shows when the count is zero.",
        stage: (
          <button className="ux4g-icon-btn ux4g-icon-btn-md"><span className="ux4g-icon-outlined">mail</span></button>
        ),
      },
    ],

    responsive: [
      {
        title: "Badge size stays constant across breakpoints",
        desc: "The visual size is intentional - downsizing on mobile hurts readability. Position adjusts to stay on top-right of parent, but size doesn't shrink.",
        img: IMG + "responsive-size.png",
        imgAlt: "A badge that stays the same size on every screen.",
        sample: (
          <span style={{ position: "relative", display: "inline-block" }}>
            <button className="ux4g-icon-btn ux4g-icon-btn-md"><span className="ux4g-icon-outlined">mail</span></button>
            <span style={{ position: "absolute", top: 0, right: 0 }}><B variant="digit" severity="error" value="3" size="s" /></span>
          </span>
        ),
      },
      {
        title: "Border thickness scales with parent size",
        desc: "When the badge overlays a circle (avatar) or icon, its border is 2px on small avatars and 3px on large to maintain visual separation.",
        img: IMG + "responsive-border.png",
        imgAlt: "A bordered badge whose border separates it from the parent.",
        sample: (
          <span style={{ position: "relative", display: "inline-block" }}>
            <span style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--ux4g-bg-primary-subtle)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 600 }}>AB</span>
            <span style={{ position: "absolute", bottom: 2, right: 2, border: "3px solid var(--ux4g-bg-neutral-elevated)", borderRadius: "50%", padding: 0 }}><B variant="dot" severity="success" size="m" /></span>
          </span>
        ),
      },
      {
        title: "Tap target follows parent",
        desc: "Badge itself isn't a tap target - it's a marker on a parent (icon button, avatar). The parent already meets 44 × 44px.",
        img: IMG + "responsive-tap.png",
        imgAlt: "A dot badge whose tap target is the parent element, not the dot.",
        sample: <B variant="digit" severity="primary" value="3" />,
      },
    ],

    practices: [
      {
        do: {
          img: IMG + "best-practices-1-do.png",
          imgAlt: "A digit badge showing the number 5.",
          rule: "Use a digit badge to show an actual count.",
        },
        dont: {
          img: IMG + "best-practices-1-dont.png",
          imgAlt: "A plain dot where a count was expected.",
          rule: "Do not use a dot when the user needs to see the count.",
        },
      },
      {
        do: {
          img: IMG + "best-practices-2-do.png",
          imgAlt: "A red badge used for an alert.",
          rule: "Use semantic colour — red for alerts that need action.",
        },
        dont: {
          img: IMG + "best-practices-2-dont.png",
          imgAlt: "A green badge used for an alert.",
          rule: "Do not pick off-semantic colours; green reads as success, not an alert.",
        },
      },
      {
        do: {
          img: IMG + "best-practices-3-do.png",
          imgAlt: "A bordered badge sitting on a parent.",
          rule: "Add a border when the badge overlaps a parent so it stays legible.",
        },
        dont: {
          img: IMG + "best-practices-3-dont.png",
          imgAlt: "A borderless badge blending into the parent.",
          rule: "Do not omit the border on overlay; the badge blends into the parent.",
        },
      },
    ],

    accessibility: [
      { t: "Badge announces its meaning, not just its number.", b: "Use `aria-label='5 unread messages'` on the parent. Just '5' tells users nothing." },
      { t: "Severity is announced via colour-independent text.", b: "If the badge means 'urgent', say so in the parent's aria-label. Colour reinforces; text carries the meaning." },
      { t: "Numeric counts use real numerals.", b: "Don't use Unicode digit-circles (①, ②) - screen readers may not announce them. Real numerals (1, 2) are universally read." },
      { t: "Badge doesn't trap focus.", b: "Badge is decoration / marker - never focusable. The parent (icon button, link) is the keyboard target." },
      { t: "Live region for count changes.", b: "When the count changes (new message arrives), wrap the parent in `aria-live='polite'` so screen readers announce 'now 6 unread messages'." },
      { t: "Colour-independent severity cue.", b: "Don't rely on red alone for 'danger'. Pair severity colour with text in the parent's aria-label ('5 urgent items')." },
      { t: "Tap target is the parent, not the badge.", b: "Badge has no click handler. The parent button or link handles interaction with full 44 × 44px target." },
    ],

    related: [
      {
        name: "Tag",
        note: "For labelled status markers ('Verified', 'Pending') with text, use Tag. Badge is for compact counts and dots.",
        preview: <span className="ux4g-tag-tonal-success">Verified</span>,
      },
      {
        name: "Avatar",
        note: "Status dots overlay Avatars to show presence. Badge digit overlays Avatars for new-message counts.",
        preview: (
          <span style={{ position: "relative", display: "inline-block" }}>
            <span style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--ux4g-bg-primary-subtle)", color: "var(--ux4g-text-primary-default)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 600 }}>AB</span>
            <span style={{ position: "absolute", bottom: -2, right: -2, border: "2px solid var(--ux4g-bg-neutral-elevated)", borderRadius: "50%", padding: 0 }}><B variant="dot" severity="success" /></span>
          </span>
        ),
      },
      {
        name: "Alert / Toast",
        note: "For one-off notifications that need full message text, use Alert. Badge is a persistent marker; Alert is a moment-in-time message.",
        preview: (
          <div className="ux4g-alert ux4g-alert-success" style={{ padding: 10 }}>
            <span className="ux4g-alert-icon ux4g-icon-outlined">check_circle</span>
            <div className="ux4g-alert-content"><p className="ux4g-alert-title" style={{ fontSize: 13 }}>Saved</p></div>
          </div>
        ),
      },
      {
        name: "Icon Button",
        note: "Icon Buttons in toolbars and nav often carry a Badge in the top-right corner for unread counts and new-feature dots.",
        preview: (
          <button className="ux4g-icon-btn ux4g-icon-btn-md"><span className="ux4g-icon-outlined">notifications</span></button>
        ),
      },
    ],
  };

  if (window.UX4G_CP && window.UX4G_CP.render) window.UX4G_CP.render(config);
  else window.UX4G_COMPONENT_CONFIG = config;
})();
