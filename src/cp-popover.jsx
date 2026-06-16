/* global React */
(function () {
  function Pop({ title, body, actions, anchor }) {
    return (
      <div style={{ display: "inline-flex", flexDirection: "column", gap: 8, alignItems: "center" }}>
        <div style={{ background: "var(--ux4g-bg-neutral-elevated)", border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 10, padding: "14px 16px", boxShadow: "0 12px 28px -4px rgba(48, 28, 125, 0.18)", maxWidth: 280, position: "relative" }}>
          {title && <div style={{ fontSize: 14, fontWeight: 600, marginBottom: body || actions ? 6 : 0 }}>{title}</div>}
          {body && <div style={{ fontSize: 13, color: "var(--ux4g-text-neutral-secondary)" }}>{body}</div>}
          {actions && <div style={{ marginTop: 10, display: "flex", gap: 6 }}>{actions}</div>}
        </div>
        {anchor}
      </div>
    );
  }

  function Hero() {
    return (
      <React.Fragment>
        <div className="hb-grain"></div>
        <div className="hb-soft-blur"></div>
        <div className="hb-modal-mock" style={{ width: 320 }}>
          <div className="hb-modal-title">Service availability</div>
          <div className="hb-modal-body"></div>
          <div className="hb-modal-body short"></div>
          <div className="hb-modal-actions" style={{ marginTop: 8 }}>
            <span className="hb-modal-btn ghost">Learn more</span>
            <span className="hb-modal-btn solid">Got it</span>
          </div>
        </div>
      </React.Fragment>
    );
  }

  const config = {
    name: "Popover",
    navName: "Popover",
    group: "Feedback",
    desc: "Anchored helper for contextual content - date pickers, menus, info bubbles. Less blocking than a Modal; more interactive than a Tooltip.",
    bannerVariant: "modal",
    hero: Hero,

    anatomy: [
      { n: 1, label: "Surface", token: "ux4g-bg-neutral-elevated" },
      { n: 2, label: "Title", token: "ux4g-title-s-strong" },
      { n: 3, label: "Body content", token: "ux4g-body-s-default" },
      { n: 4, label: "Pointer / arrow", token: "ux4g-bg-neutral-elevated" },
      { n: 5, label: "Anchor element", token: "ux4g-bg-neutral-elevated" },
      { n: 6, label: "Footer actions (optional)", token: "ux4g-padding-s" },
      { n: 7, label: "Elevation", token: "ux4g-elevation-3" },
    ],

    properties: [
      {
        label: "Content type",
        desc: "Info Popover for short explanations. Menu Popover for action lists. Form Popover for compact 1-2 field inputs (e.g. inline date picker).",
        demos: [
          { label: "Info", node: <Pop title="Service availability" body="Online for all 36 states from April 2026." anchor={<button className="ux4g-icon-btn ux4g-icon-btn-md"><span className="ux4g-icon-outlined">info</span></button>} /> },
          { label: "Menu", node: (
            <Pop body={
              <div style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 13 }}>
                <div style={{ padding: "6px 0" }}>Edit</div>
                <div style={{ padding: "6px 0" }}>Duplicate</div>
                <div style={{ padding: "6px 0", color: "var(--ux4g-text-error-default)" }}>Delete</div>
              </div>
            } anchor={<button className="ux4g-icon-btn ux4g-icon-btn-md"><span className="ux4g-icon-outlined">more_vert</span></button>} />
          ) },
        ],
      },
      {
        label: "Position",
        desc: "Auto-positions to stay in viewport - top, bottom, left, right. Pointer / arrow follows. Pick an anchor side; Popover flips if needed.",
        demos: [
          { label: "Above anchor", node: <Pop title="Tip" body="Tap to confirm" anchor={<button className="ux4g-btn-outline-primary ux4g-btn-md">Trigger</button>} /> },
        ],
      },
      {
        label: "With actions",
        desc: "Popovers can hold a Dismiss + Action pair for onboarding hints or feature announcements. Keep actions to 1-2 max.",
        demos: [
          { label: "Onboarding hint", node: <Pop title="New feature" body="Track your SLA in real-time from the new dashboard." actions={<><button className="ux4g-btn-text-primary ux4g-btn-sm">Skip</button><button className="ux4g-btn-primary ux4g-btn-sm">Try it</button></>} anchor={<button className="ux4g-icon-btn ux4g-icon-btn-md"><span className="ux4g-icon-outlined">notifications</span></button>} /> },
        ],
      },
    ],

    scenarios: [
      {
        title: "Info bubble next to a field",
        desc: "Tapping an (i) icon next to a field opens a Popover explaining the field's purpose, format, or compliance requirement.",
        stage: <Pop title="Why we ask" body="Your Aadhaar is shared with ITD only once for PAN linking. We don't store it." anchor={<button className="ux4g-icon-btn ux4g-icon-btn-md"><span className="ux4g-icon-outlined">help_outline</span></button>} />,
      },
      {
        title: "Date picker as a Popover",
        desc: "Tapping a date field opens a calendar in a Popover anchored below the field. Doesn't block the page like a Modal would.",
        stage: (
          <Pop body={
            <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4, padding: 4 }}>
              {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => <div key={"h"+i} style={{ fontSize: 11, color: "var(--ux4g-text-neutral-tertiary)", textAlign: "center" }}>{d}</div>)}
              {[1,2,3,4,5,6,7,8,9,10,11,12,13,14].map((d) => (
                <div key={d} style={{ padding: "4px 6px", fontSize: 12, textAlign: "center", borderRadius: 4, background: d === 12 ? "var(--ux4g-bg-primary-strong)" : "transparent", color: d === 12 ? "#fff" : "var(--ux4g-text-neutral-primary)", fontWeight: d === 12 ? 600 : 400 }}>{d}</div>
              ))}
            </div>
          } anchor={<div className="ux4g-input-container ux4g-input-md" style={{ width: 180 }}><div className="ux4g-input"><span className="ux4g-input-leading-icon ux4g-icon-outlined">calendar_today</span><input type="text" className="ux4g-input-input" defaultValue="12 / 05 / 2026" readOnly /></div></div>} />
        ),
      },
      {
        title: "Action menu (⋮)",
        desc: "The 3-dot menu on a row opens a Popover with row-specific actions - Edit, Duplicate, Delete. Each action commits on tap.",
        stage: (
          <Pop body={
            <div style={{ display: "flex", flexDirection: "column", gap: 0, fontSize: 13, minWidth: 140 }}>
              <div style={{ padding: "8px 12px", cursor: "pointer" }}>Edit</div>
              <div style={{ padding: "8px 12px", cursor: "pointer" }}>Duplicate</div>
              <div style={{ padding: "8px 12px", borderTop: "1px solid var(--ux4g-border-color-neutral-subtle)", color: "var(--ux4g-text-error-default)", cursor: "pointer" }}>Delete</div>
            </div>
          } anchor={<button className="ux4g-icon-btn ux4g-icon-btn-md"><span className="ux4g-icon-outlined">more_vert</span></button>} />
        ),
      },
      {
        title: "Onboarding spotlight",
        desc: "First-time users see a Popover anchored to a new feature with a 'Got it' or 'Show me' action. Auto-dismiss on first interaction.",
        stage: <Pop title="Track your SLA" body="See exactly how many days remain on every application." actions={<><button className="ux4g-btn-text-primary ux4g-btn-sm">Skip</button><button className="ux4g-btn-primary ux4g-btn-sm">Show me</button></>} anchor={<button className="ux4g-btn-outline-primary ux4g-btn-md">View applications</button>} />,
      },
      {
        title: "User profile preview",
        desc: "Hovering an avatar in a list opens a Popover with name, role, and quick actions. Less heavy than navigating to the full profile.",
        stage: (
          <Pop body={
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <span style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--ux4g-bg-primary-subtle)", color: "var(--ux4g-text-primary-default)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 600 }}>AB</span>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600 }}>Anjali Bhattacharya</div>
                <div style={{ fontSize: 11, color: "var(--ux4g-text-neutral-secondary)" }}>Citizen · since 2024</div>
              </div>
            </div>
          } anchor={<span style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--ux4g-bg-primary-subtle)", color: "var(--ux4g-text-primary-default)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 600 }}>AB</span>} />
        ),
      },
      {
        title: "Color / option picker",
        desc: "For compact selection grids (theme colour, status), Popover holds the grid anchored to the trigger. Commits on tap; closes on selection.",
        stage: (
          <Pop body={
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 6 }}>
              {["#6366f1", "#16a34a", "#dc2626", "#f59e0b", "#06b6d4", "#8b5cf6", "#ec4899", "#10b981", "#f97316", "#3b82f6"].map((c) => (
                <span key={c} style={{ width: 24, height: 24, background: c, borderRadius: 6, cursor: "pointer", border: c === "#6366f1" ? "2px solid var(--ux4g-text-neutral-primary)" : "none" }}></span>
              ))}
            </div>
          } anchor={<button className="ux4g-btn-outline-primary ux4g-btn-md">Theme</button>} />
        ),
      },
    ],

    responsive: [
      {
        title: "Auto-flip to stay in viewport",
        desc: "Below-anchor Popovers flip to above if they'd overflow the viewport bottom. Pointer follows. No manual position juggling needed.",
        sample: <Pop title="Available in 36 states" body="From April 2026." anchor={<button className="ux4g-btn-outline-primary ux4g-btn-md">Anchor</button>} />,
      },
      {
        title: "Bottom sheet on mobile (≤ 480px)",
        desc: "Below 480px, Popovers with a body taller than 200px become bottom sheets - easier to reach with one thumb than a floating anchor.",
        sample: <Pop title="Choose date" body="Calendar grid would appear here." anchor={<button className="ux4g-btn-outline-primary ux4g-btn-md">Pick date</button>} />,
      },
      {
        title: "Max width 320px",
        desc: "Popovers cap at 320px width on desktop, 280px on mobile. Beyond that, content reads poorly - use a Modal or page for richer content.",
        sample: <Pop title="Quick info" body="Service availability across 36 states and UTs from April 2026 onwards." anchor={<button className="ux4g-icon-btn ux4g-icon-btn-md"><span className="ux4g-icon-outlined">info</span></button>} />,
      },
    ],

    practices: [
      {
        do: { stage: <Pop title="Why we ask" body="Aadhaar shared with ITD once for PAN linking." anchor={<button className="ux4g-icon-btn ux4g-icon-btn-md"><span className="ux4g-icon-outlined">help_outline</span></button>} />, rule: "Popover for nice-to-have explanations - users read if they need it." },
        dont: { stage: <Pop title="ERROR" body="Form has 3 errors above." anchor={<span></span>} />, rule: "Critical errors hidden in Popovers get missed. Surface inline." },
      },
      {
        do: { stage: <Pop body={<div style={{ padding: "8px 12px", fontSize: 13 }}>Edit</div>} anchor={<button className="ux4g-icon-btn ux4g-icon-btn-md"><span className="ux4g-icon-outlined">more_vert</span></button>} />, rule: "Use Popover for action menus and contextual pickers." },
        dont: { stage: <Pop title="Welcome!" body="Long onboarding text that should be on a dedicated page." anchor={<button className="ux4g-btn-primary ux4g-btn-md">OK</button>} />, rule: "Long content in a Popover cramps reading - use a page or Modal." },
      },
      {
        do: { stage: <Pop title="Tip" body="Press ⌘K to search." actions={<button className="ux4g-btn-text-primary ux4g-btn-sm">Got it</button>} anchor={<button className="ux4g-btn-outline-primary ux4g-btn-md">Action</button>} />, rule: "Onboarding Popovers always have a dismiss action - never trap users." },
        dont: { stage: <Pop title="Welcome" body="Long text" anchor={<button className="ux4g-btn-primary ux4g-btn-md">Action</button>} />, rule: "No dismiss = users may not realise they need to tap outside." },
      },
      {
        do: { stage: <Pop body={<div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 4 }}>{[...Array(8)].map((_, i) => <div key={i} style={{ padding: "4px 8px", fontSize: 12, textAlign: "center", borderRadius: 4, background: i === 2 ? "var(--ux4g-bg-primary-subtle)" : "transparent" }}>{i + 1}</div>)}</div>} anchor={<button className="ux4g-btn-outline-primary ux4g-btn-md">Pick</button>} />, rule: "Compact pickers (date, colour) work perfectly in Popovers." },
        dont: { stage: <Pop body="Single-line tip" anchor={<button className="ux4g-icon-btn ux4g-icon-btn-md"><span className="ux4g-icon-outlined">info</span></button>} />, rule: "Single-line tips belong in Tooltips - lighter, hover-triggered." },
      },
    ],

    accessibility: [
      { t: "Use role='dialog' or 'menu' as fits.", b: "Info Popovers use `role='dialog'`. Action menus use `role='menu'` with `role='menuitem'` children. Tells screen readers what to expect." },
      { t: "Focus moves to the Popover on open.", b: "Unlike Tooltips, Popovers take focus when opened. First interactive element gets focus; Escape returns to the trigger." },
      { t: "Escape closes and returns focus.", b: "Pressing Escape dismisses the Popover and returns focus to the trigger. No keyboard user gets stuck inside." },
      { t: "Click-outside dismisses for non-modal Popovers.", b: "For info / menu Popovers, clicking outside closes them. For form Popovers (date picker), require an explicit Done or auto-dismiss on selection." },
      { t: "aria-haspopup on the trigger.", b: "The trigger button gets `aria-haspopup='dialog' aria-expanded='false'`. Screen readers announce 'has popup, collapsed'." },
      { t: "Body content uses aria-describedby.", b: "Link the Popover body to the trigger via `aria-describedby`. Screen readers announce the body content alongside the trigger." },
      { t: "Tap targets stay 44 × 44px.", b: "Each menu item or button inside the Popover meets the 44px floor. Touch-friendly without compromising desktop density." },
    ],

    related: [
      {
        name: "Tooltip",
        note: "For short, hover-only hints with no interaction, use Tooltip. Popover supports focus, clicks, and richer content.",
        preview: (
          <div className="ux4g-tooltip ux4g-tooltip-s show" style={{ position: "relative", transform: "none" }}>
            Verified by Aadhaar
          </div>
        ),
      },
      {
        name: "Modal",
        note: "For blocking confirmations or forms that need centred focus, use Modal. Popover stays anchored to a trigger; Modal takes over the viewport.",
        preview: (
          <div style={{ background: "var(--ux4g-bg-neutral-elevated)", boxShadow: "0 8px 16px rgba(0,0,0,0.08)", borderRadius: 8, padding: 14, maxWidth: 240 }}>
            <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 8 }}>Confirm submission</div>
            <div style={{ display: "flex", gap: 6, justifyContent: "flex-end" }}>
              <button className="ux4g-btn-outline-primary ux4g-btn-sm">Cancel</button>
              <button className="ux4g-btn-primary ux4g-btn-sm">Submit</button>
            </div>
          </div>
        ),
      },
      {
        name: "Drawer",
        note: "For lists, filters, or detail panels that exceed Popover space, use Drawer - slides in from screen edge, more room.",
        preview: (
          <div style={{ width: 140, height: 100, background: "var(--ux4g-bg-neutral-elevated)", border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 8, padding: 10 }}>
            <div style={{ fontWeight: 600, fontSize: 12, marginBottom: 6 }}>Filters</div>
            <div style={{ height: 6, background: "var(--ux4g-bg-neutral-soft)", borderRadius: 3 }}></div>
          </div>
        ),
      },
      {
        name: "Dropdown Menu",
        note: "For single-select pickers from a list of values, use Dropdown. Popover is generic; Dropdown is specialised for value-selection.",
        preview: (
          <div className="ux4g-dropdown" style={{ width: "100%" }}>
            <div className="ux4g-dropdown-control">
              <div className="ux4g-dropdown-value"><span className="ux4g-dropdown-text">English (en-IN)</span></div>
              <span className="ux4g-dropdown-caret ux4g-icon-outlined">arrow_drop_down</span>
            </div>
          </div>
        ),
      },
    ],
  };

  if (window.UX4G_CP && window.UX4G_CP.render) window.UX4G_CP.render(config);
  else window.UX4G_COMPONENT_CONFIG = config;
})();
