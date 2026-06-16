/* global React */
(function () {
  function ES({ icon = "inbox", title, message, action }) {
    return (
      <div style={{ width: "100%", padding: 32, textAlign: "center", border: "1.5px dashed var(--ux4g-border-color-neutral-subtle)", borderRadius: 12, background: "var(--ux4g-bg-neutral-soft)" }}>
        <span className="ux4g-icon-outlined" style={{ fontSize: 48, color: "var(--ux4g-text-neutral-tertiary)" }}>{icon}</span>
        <div style={{ fontSize: 15, fontWeight: 600, marginTop: 12 }}>{title}</div>
        {message && <div style={{ fontSize: 13, color: "var(--ux4g-text-neutral-secondary)", marginTop: 4 }}>{message}</div>}
        {action && <div style={{ marginTop: 16 }}>{action}</div>}
      </div>
    );
  }
  function Hero() {
    return (
      <React.Fragment>
        <div className="hb-grain"></div>
        <div className="hb-soft-blur"></div>
        <div className="hb-modal-mock" style={{ width: 380, padding: "40px 28px", display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
          <div style={{ width: 72, height: 72, borderRadius: 16, background: "rgba(255,168,39,0.15)", border: "2px dashed var(--amber)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M3 7l9-4 9 4M3 7v10l9 4 9-4V7M3 7l9 4m9-4l-9 4m0 0v10" stroke="var(--amber)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div style={{ fontFamily: "var(--ux4g-ff-display, sans-serif)", fontSize: 18, fontWeight: 700, color: "var(--primary-dark)" }}>No applications yet</div>
          <div style={{ fontSize: 13, color: "var(--primary-dark)", opacity: 0.6, textAlign: "center", maxWidth: 240 }}>When you file your first service, it will appear here.</div>
          <div style={{ marginTop: 4, padding: "8px 20px", borderRadius: 6, background: "var(--primary-dark)", color: "#fff", fontFamily: "var(--ux4g-ff-display, sans-serif)", fontSize: 13, fontWeight: 600 }}>Start application</div>
        </div>
      </React.Fragment>
    );
  }
  const config = {
    name: "Empty State", navName: "Empty State", group: "Feedback",
    desc: "Helpful, never apologetic. Guides the user to the next action when there's no data. Always offers a clear path forward.",
    bannerVariant: "card", hero: Hero,
    anatomy: [
      { n: 1, label: "Container", token: "ux4g-bg-neutral-soft" },
      { n: 2, label: "Illustration / icon", token: "ux4g-icon-outlined" },
      { n: 3, label: "Title", token: "ux4g-title-s-strong" },
      { n: 4, label: "Message", token: "ux4g-body-s-default" },
      { n: 5, label: "Primary action", token: "ux4g-btn-primary" },
      { n: 6, label: "Secondary action", token: "ux4g-btn-text-primary" },
    ],
    properties: [
      { label: "Type", desc: "No items yet (first-use). No matches (after filter). Error (server failed). Each has its own copy and CTA.", demos: [
        { label: "No items yet", node: <ES icon="inbox" title="No applications yet" message="Start by browsing services." action={<button className="ux4g-btn-primary ux4g-btn-sm">Browse services</button>} /> },
        { label: "No matches", node: <ES icon="search_off" title="No results found" message="Try a different search term." /> },
        { label: "Error", node: <ES icon="error_outline" title="Couldn't load" message="Try again or contact support." action={<button className="ux4g-btn-primary ux4g-btn-sm">Retry</button>} /> },
      ] },
    ],
    scenarios: [
      { title: "Empty inbox first-use", desc: "User has no applications yet. Friendly tone + primary action to browse services.", stage: <ES icon="inbox" title="No applications yet" message="File your first one to track it here." action={<button className="ux4g-btn-primary ux4g-btn-sm">Browse services</button>} /> },
      { title: "Empty search results", desc: "User's filter returned nothing. Suggest alternatives or clear filters.", stage: <ES icon="search_off" title='No results for "xyz"' message="Try a different search term or clear filters." action={<button className="ux4g-btn-outline-primary ux4g-btn-sm">Clear filters</button>} /> },
      { title: "Permission-denied empty", desc: "User doesn't have access to view this section. Explain why and offer a path (contact admin).", stage: <ES icon="lock" title="Not available for your role" message="Contact your admin to request access." /> },
      { title: "Server error fallback", desc: "When the server fails to load data, show a recoverable error state with retry action.", stage: <ES icon="error_outline" title="Couldn't load applications" message="The server didn't respond. Your draft is preserved." action={<button className="ux4g-btn-primary ux4g-btn-sm">Retry</button>} /> },
    ],
    responsive: [
      { title: "Compact padding on mobile", desc: "Below 480px, padding shrinks from 32px to 20px to fit better in narrow viewports.", sample: <ES icon="inbox" title="No items" message="Compact mobile view" /> },
      { title: "Action stays full-width on mobile", desc: "Primary action becomes full-width on small screens for thumb-friendly tap.", sample: <ES icon="inbox" title="No items" action={<button className="ux4g-btn-primary ux4g-btn-md" style={{ width: "100%" }}>Browse</button>} /> },
    ],
    practices: [
      { do: { stage: <ES icon="inbox" title="No applications yet" message="Start by browsing services." action={<button className="ux4g-btn-primary ux4g-btn-sm">Browse services</button>} />, rule: "Always offer a next-step action - users shouldn't leave empty-handed." }, dont: { stage: <ES icon="inbox" title="No items" />, rule: "Dead-end empty state leaves users wondering what to do." } },
      { do: { stage: <ES icon="search_off" title="No matches" message="Try a different search term." />, rule: "Friendly message guides users to recover from their own filter." }, dont: { stage: <ES icon="error_outline" title="FAILED" message="0 results returned." />, rule: "Tech-jargon empty state feels broken even when it's just empty data." } },
    ],
    accessibility: [
      { t: "Use role='status' for empty regions.", b: "Empty state region uses `role='status' aria-live='polite'`. Screen readers announce 'no applications yet' when state changes." },
      { t: "Icon is decorative; title carries meaning.", b: "Icon gets `aria-hidden='true'`. Title and message are the accessible content." },
      { t: "Action button is keyboard-reachable.", b: "Tab from page content into the empty state's CTA. Users shouldn't get trapped in a dead region." },
      { t: "Distinct from error state.", b: "Empty (no items) and error (failed to load) have different copy and severity. Don't conflate." },
    ],
    related: [
      { name: "Card", note: "Empty state often replaces a Card grid when there are no items.", preview: (<div style={{ padding: 12, border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 8, fontSize: 13, maxWidth: 180 }}><div style={{ fontWeight: 600 }}>Card title</div></div>) },
      { name: "Table", note: "Empty state replaces table body when no rows. Better than rendering an empty table.", preview: (<div style={{ padding: 8, fontSize: 11, border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 4 }}><div style={{ background: "var(--ux4g-bg-neutral-soft)", padding: 4, fontWeight: 600 }}>HEADERS</div></div>) },
      { name: "Search", note: "When search has no results, surface Empty State inside the suggestions menu.", preview: (<div className="ux4g-search" style={{ width: "100%" }}><span className="ux4g-search-leading-icon ux4g-icon-outlined">search</span><input type="text" className="ux4g-search-input" placeholder="Search" readOnly /></div>) },
      { name: "Alert / Toast", note: "For temporary 'no results' messages, use Alert. Empty State is persistent; Alert is transient.", preview: (<div className="ux4g-alert ux4g-alert-info" style={{ padding: 10 }}><span className="ux4g-alert-icon ux4g-icon-outlined">info</span><div className="ux4g-alert-content"><p className="ux4g-alert-title" style={{ fontSize: 13 }}>No matches</p></div></div>) },
    ],
  };
  if (window.UX4G_CP && window.UX4G_CP.render) window.UX4G_CP.render(config);
  else window.UX4G_COMPONENT_CONFIG = config;
})();
