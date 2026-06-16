/* global React */
(function () {
  function Av({ initials, size = "m", colour, src, status, square }) {
    const sizes = { xs: 24, s: 32, m: 40, l: 56, xl: 80 };
    const px = sizes[size];
    const bg = colour || "var(--ux4g-bg-primary-subtle)";
    const fg = colour ? "#fff" : "var(--ux4g-text-primary-default)";
    return (
      <span style={{ position: "relative", display: "inline-block" }}>
        <span style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: px,
          height: px,
          borderRadius: square ? 8 : "50%",
          background: src ? `url(${src}) center/cover` : bg,
          color: fg,
          fontSize: Math.round(px * 0.4),
          fontWeight: 600,
          fontFamily: "Noto Sans, sans-serif",
        }}>{src ? "" : initials}</span>
        {status && <span style={{ position: "absolute", bottom: 0, right: 0, width: Math.round(px * 0.3), height: Math.round(px * 0.3), borderRadius: "50%", background: status === "online" ? "#16a34a" : status === "away" ? "#f59e0b" : "var(--ux4g-text-neutral-tertiary)", border: "2px solid var(--ux4g-bg-neutral-elevated)" }}></span>}
      </span>
    );
  }

  function Hero() {
    return (
      <React.Fragment>
        <div className="hb-grain"></div>
        <div className="hb-soft-blur"></div>
        <div className="hb-avatar-mock">
          <div className="hb-avatar-circle">AB</div>
          <div className="hb-avatar-circle">VR</div>
          <div className="hb-avatar-circle">PJ</div>
          <div className="hb-avatar-circle">MK</div>
          <div className="hb-avatar-circle">+12</div>
        </div>
      </React.Fragment>
    );
  }

  const IMG = "assets/images/component-anatomy/avatar/";

  const config = {
    name: "Avatar",
    navName: "Avatar",
    group: "Utility",
    desc: "Profile representation - initials, image, icon. Used in user menus, lists, chat threads, and stacked group displays.",
    bannerVariant: "avatar",
    hero: Hero,

    anatomy: [
      { n: 1, label: "Container", token: "ux4g-bg-primary-subtle" },
      { n: 2, label: "Initials", token: "ux4g-text-primary-default" },
      { n: 3, label: "Image (when present)", token: "ux4g-radius-full" },
      { n: 4, label: "Status indicator", token: "ux4g-bg-success-strong" },
      { n: 5, label: "Border (group stack)", token: "ux4g-bg-neutral-elevated" },
      { n: 6, label: "Shape variant", token: "ux4g-radius-md (square)" },
    ],

    properties: [
      {
        label: "Size",
        desc: "XS for dense table rows. SM for list items. MD is the default. LG for user menus. XL for hero profile cards.",
        img: IMG + "properties-size.png",
        imgAlt: "Initials avatars at five sizes from extra-small to extra-large.",
        demos: [
          { label: "XS · 24px", node: <Av initials="AB" size="xs" /> },
          { label: "SM · 32px", node: <Av initials="AB" size="s" /> },
          { label: "MD · 40px", node: <Av initials="AB" size="m" /> },
          { label: "LG · 56px", node: <Av initials="AB" size="l" /> },
          { label: "XL · 80px", node: <Av initials="AB" size="xl" /> },
        ],
      },
      {
        label: "Content",
        desc: "Initials are the default. Image when the user has uploaded a photograph. Icon for generic accounts (admin, system, support).",
        img: IMG + "properties-content.png",
        imgAlt: "Avatars showing AB initials, VR initials, and a person icon.",
        demos: [
          { label: "Initials", node: <Av initials="AB" /> },
          { label: "Two initials", node: <Av initials="VR" colour="#a78bfa" /> },
          { label: "Single initial", node: <Av initials="A" colour="#34d399" /> },
          { label: "Icon", node: (
            <span style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--ux4g-bg-neutral-soft)", color: "var(--ux4g-text-neutral-secondary)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>
              <span className="ux4g-icon-outlined">person</span>
            </span>
          ) },
        ],
      },
      {
        label: "Status",
        desc: "Optional dot on the corner shows presence - online (green), away (amber), offline (grey). Use sparingly; only when status is actionable.",
        img: IMG + "properties-status.png",
        imgAlt: "Photo avatars with status dots: online (green), busy (amber), and offline (grey).",
        demos: [
          { label: "Online", node: <Av initials="AB" status="online" /> },
          { label: "Away", node: <Av initials="VR" colour="#a78bfa" status="away" /> },
          { label: "Offline", node: <Av initials="PJ" colour="#34d399" status="offline" /> },
        ],
      },
      {
        label: "Shape",
        desc: "Circle is the default for people. Square (with rounded corners) for organisations, departments, schemes.",
        demos: [
          { label: "Circle", node: <Av initials="AB" /> },
          { label: "Square", node: <Av initials="DM" square colour="var(--ux4g-bg-primary-strong)" /> },
        ],
      },
    ],

    scenarios: [
      {
        title: "User menu",
        desc: "Avatar in the top-right opens the user menu. Shows initials with a coloured background derived from the user's name hash.",
        img: IMG + "scenarios-menu.png",
        imgAlt: "An avatar beside the name Anjali Bhattacharya and an email, as in a user menu.",
        stage: <Av initials="AB" size="m" />,
      },
      {
        title: "Stacked group",
        desc: "Show multiple participants in a thread or shared document. Overlap by 8px; cap at 5 visible + a count chip ('+12 more').",
        img: IMG + "scenarios-group.png",
        imgAlt: "Four overlapping avatars with a +12 overflow count.",
        stage: (
          <div style={{ display: "flex" }}>
            <Av initials="AB" colour="var(--ux4g-bg-primary-strong)" />
            <span style={{ marginLeft: -8 }}><Av initials="VR" colour="#a78bfa" /></span>
            <span style={{ marginLeft: -8 }}><Av initials="PJ" colour="#34d399" /></span>
            <span style={{ marginLeft: -8 }}><Av initials="MK" colour="#f59e0b" /></span>
            <span style={{ marginLeft: -8 }}><Av initials="+12" colour="var(--ux4g-bg-neutral-soft)" /></span>
          </div>
        ),
      },
      {
        title: "In a list row",
        desc: "SM size Avatar leads each row in a list (people, applications, files). Initials match the row's primary identity.",
        img: IMG + "scenarios-list.png",
        imgAlt: "An avatar beside Income certificate, submitted 2 days ago, in a list row.",
        stage: (
          <div style={{ display: "flex", flexDirection: "column", gap: 0, width: "100%" }}>
            {[["AB", "Anjali Bhattacharya", "Citizen since 2024"], ["VR", "Vikram Reddy", "Citizen since 2022"]].map(([i, n, s], idx) => (
              <div key={idx} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0", borderBottom: "1px solid var(--ux4g-border-color-neutral-subtle)" }}>
                <Av initials={i} size="s" />
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{n}</div>
                  <div style={{ fontSize: 11, color: "var(--ux4g-text-neutral-secondary)" }}>{s}</div>
                </div>
              </div>
            ))}
          </div>
        ),
      },
      {
        title: "Organisation / department",
        desc: "Square shape for non-person entities - departments, schemes, organisations. Same colour-from-name hash for visual variety.",
        img: IMG + "scenarios-org.png",
        imgAlt: "A large initials avatar beside Ministry of Housing & Urban Affairs.",
        stage: (
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <Av initials="DM" size="m" square colour="var(--ux4g-bg-primary-strong)" />
            <Av initials="SDM" size="m" square colour="#a78bfa" />
            <Av initials="ITD" size="m" square colour="#34d399" />
          </div>
        ),
      },
      {
        title: "With photograph",
        desc: "When the user has uploaded a profile picture, render the image. Always provide initials as fallback for image load failure.",
        stage: <Av size="l" src="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%236366f1'/%3E%3Cstop offset='100%25' stop-color='%23a78bfa'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23g)' width='80' height='80'/%3E%3C/svg%3E" />,
      },
      {
        title: "Hero profile card",
        desc: "XL size Avatar anchors a profile card on the citizen's home page. Bold initials in a deep tonal background.",
        stage: (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <Av initials="AB" size="xl" colour="var(--ux4g-bg-primary-strong)" />
            <div style={{ fontSize: 16, fontWeight: 600 }}>Anjali Bhattacharya</div>
            <div style={{ fontSize: 12, color: "var(--ux4g-text-neutral-secondary)" }}>Citizen since Mar 2024</div>
          </div>
        ),
      },
    ],

    responsive: [
      {
        title: "Sizes don't change at breakpoints",
        desc: "Avatar size is intentional - it signals importance. Sizes stay constant across breakpoints. Containers may resize, but Avatar dimensions don't auto-scale.",
        img: IMG + "responsive-size.png",
        imgAlt: "An avatar shown larger on mobile.",
        sample: (
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <Av initials="AB" size="s" />
            <Av initials="VR" size="m" />
            <Av initials="PJ" size="l" colour="#34d399" />
          </div>
        ),
      },
      {
        title: "Stacked group overlap stays 8px",
        desc: "Group stack overlap stays 8px regardless of viewport. Cap visible avatars at 5 on mobile, 8 on desktop; the rest collapse into '+N' chip.",
        img: IMG + "responsive-fallback.png",
        imgAlt: "An initials avatar used as a fallback when no photo is available.",
        sample: (
          <div style={{ display: "flex" }}>
            <Av initials="AB" />
            <span style={{ marginLeft: -8 }}><Av initials="VR" colour="#a78bfa" /></span>
            <span style={{ marginLeft: -8 }}><Av initials="PJ" colour="#34d399" /></span>
            <span style={{ marginLeft: -8 }}><Av initials="+5" colour="var(--ux4g-bg-neutral-soft)" /></span>
          </div>
        ),
      },
      {
        title: "Tap target stays 44 × 44px",
        desc: "Even XS (24px) Avatars used as buttons get invisible padding to reach 44px. Critical when the Avatar opens a menu or a profile sheet.",
        img: IMG + "responsive-group.png",
        imgAlt: "A stacked avatar group that collapses to a +N count on small screens.",
        sample: <Av initials="AB" size="xs" />,
      },
    ],

    practices: [
      {
        do: {
          img: IMG + "best-practices-1-do.png",
          imgAlt: "An avatar showing initials when no photo exists.",
          rule: "Fall back to initials when there is no photo.",
        },
        dont: {
          img: IMG + "best-practices-1-dont.png",
          imgAlt: "An empty grey circle where an avatar failed to load.",
          rule: "Do not leave a broken or empty avatar; always provide an initials fallback.",
        },
      },
      {
        do: {
          img: IMG + "best-practices-2-do.png",
          imgAlt: "Three avatars at the same consistent size.",
          rule: "Keep avatars a consistent size within a list or group.",
        },
        dont: {
          img: IMG + "best-practices-2-dont.png",
          imgAlt: "Three avatars at mismatched sizes.",
          rule: "Do not mix avatar sizes in the same row.",
        },
      },
      {
        do: {
          img: IMG + "best-practices-3-do.png",
          imgAlt: "An avatar with one or two initials.",
          rule: "Use at most two initials so they stay legible.",
        },
        dont: {
          img: IMG + "best-practices-3-dont.png",
          imgAlt: "An avatar crammed with four letters.",
          rule: "Do not cram many letters into an avatar; they become unreadable.",
        },
      },
    ],

    accessibility: [
      { t: "Avatar has accessible name.", b: "Avatar as a button uses `aria-label='Anjali Bhattacharya'`. Avatar as decoration uses `aria-hidden='true'`. Never empty." },
      { t: "Image alt matches the user's name.", b: "When Avatar shows a photograph, `alt='Anjali Bhattacharya'` - not 'avatar' or 'profile picture'. Screen readers say the name directly." },
      { t: "Status dot is announced.", b: "Status indicator gets `aria-label='Online'` or `'Away'`. The visual dot reinforces but is not the only cue." },
      { t: "Stacked group collapses with count.", b: "When showing N + more, the '+5' chip has `aria-label='5 more participants'` so screen-reader users hear the count." },
      { t: "Avatar as link has descriptive purpose.", b: "If tapping the Avatar opens a profile, the surrounding link gets `aria-label='View profile for Anjali Bhattacharya'`." },
      { t: "Tap target stays 44 × 44px.", b: "Small Avatars (XS / SM) include invisible padding when interactive. Thumb-friendly." },
      { t: "Colour is supplementary.", b: "Don't rely on Avatar background colour to convey meaning. Initials and surrounding text carry the identity." },
    ],

    related: [
      {
        name: "List",
        note: "Avatars almost always appear in Lists - leading each row to give visual identity. SM size is the default in list contexts.",
        preview: (
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13 }}><Av initials="AB" size="s" /> Anjali Bhattacharya</div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13 }}><Av initials="VR" size="s" colour="#a78bfa" /> Vikram Reddy</div>
          </div>
        ),
      },
      {
        name: "Badge",
        note: "For notification counts on the Avatar (3 unread messages), pair Avatar with Badge in the top-right corner.",
        preview: (
          <span style={{ position: "relative", display: "inline-block" }}>
            <Av initials="AB" />
            <span className="ux4g-badge-digit-primary ux4g-badge-m" style={{ position: "absolute", top: -4, right: -4 }}>3</span>
          </span>
        ),
      },
      {
        name: "Tooltip",
        note: "Hovering an Avatar in a dense list opens a Tooltip with the user's full name. Useful when initials alone are ambiguous.",
        preview: (
          <div className="ux4g-tooltip ux4g-tooltip-s show" style={{ position: "relative", transform: "none" }}>
            Anjali Bhattacharya
          </div>
        ),
      },
      {
        name: "Card",
        note: "Profile Cards use XL Avatar at the top, name + role below. Avatar dominates the card header for instant identity.",
        preview: (
          <div style={{ padding: 14, border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 8, textAlign: "center", maxWidth: 180 }}>
            <Av initials="AB" size="l" colour="var(--ux4g-bg-primary-strong)" />
            <div style={{ fontSize: 13, fontWeight: 600, marginTop: 6 }}>Anjali Bhattacharya</div>
          </div>
        ),
      },
    ],
  };

  if (window.UX4G_CP && window.UX4G_CP.render) window.UX4G_CP.render(config);
  else window.UX4G_COMPONENT_CONFIG = config;
})();
