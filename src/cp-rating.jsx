/* global React */
(function () {
  function R({ value = 4, max = 5, size = "md", showLabel }) {
    const sz = { sm: 14, md: 20, lg: 28 }[size];
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ display: "flex", gap: 4 }}>
          {Array.from({ length: max }).map((_, i) => (
            <span key={i} style={{ color: i < value ? "var(--amber)" : "var(--ux4g-text-neutral-tertiary)", fontSize: sz }}>★</span>
          ))}
        </div>
        {showLabel && <span style={{ fontSize: 12, color: "var(--ux4g-text-neutral-secondary)" }}>{value} of {max}</span>}
      </div>
    );
  }
  function Hero() {
    return (
      <React.Fragment>
        <div className="hb-grain"></div>
        <div className="hb-soft-blur"></div>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 3, display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
          <div style={{ display: "flex", gap: 10 }}>
            {[1,2,3,4,5].map(i => (
              <span key={i} style={{ fontSize: 56, color: i <= 4 ? "var(--amber)" : "rgba(255,255,255,0.25)", textShadow: i <= 4 ? "0 0 30px rgba(255,168,39,0.6)" : "none", lineHeight: 1 }}>★</span>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
            <span style={{ fontFamily: "var(--ux4g-ff-display, sans-serif)", fontSize: 48, fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1 }}>4.2</span>
            <span style={{ fontFamily: "var(--ux4g-ff-display, sans-serif)", fontSize: 13, color: "rgba(255,255,255,0.65)", letterSpacing: "0.06em" }}>1,284 RESPONSES</span>
          </div>
        </div>
      </React.Fragment>
    );
  }
  const config = {
    name: "Feedback (Rating)", navName: "Feedback (Rating)", group: "Feedback",
    desc: "Star rating + free-text capture for post-service experience surveys. The standard exit interview after service completion.",
    bannerVariant: "badge", hero: Hero,
    anatomy: [
      { n: 1, label: "Star (active)", token: "var(--amber)" },
      { n: 2, label: "Star (inactive)", token: "ux4g-text-neutral-tertiary" },
      { n: 3, label: "Star count", token: "5 (default)" },
      { n: 4, label: "Optional textarea", token: "ux4g-textarea" },
      { n: 5, label: "Submit action", token: "ux4g-btn-primary" },
    ],
    properties: [
      { label: "Size", desc: "Small for compact contexts (table rows). Medium is default. Large for exit-survey hero screens.", demos: [
        { label: "Small", node: <R value={4} size="sm" /> },
        { label: "Medium", node: <R value={4} size="md" /> },
        { label: "Large", node: <R value={4} size="lg" /> },
      ] },
      { label: "Value", desc: "0 to 5 stars (typical). Empty state for new ratings; filled state shows past rating.", demos: [
        { label: "Empty", node: <R value={0} /> },
        { label: "Partial", node: <R value={3} /> },
        { label: "Full", node: <R value={5} /> },
        { label: "With label", node: <R value={4} showLabel /> },
      ] },
    ],
    scenarios: [
      { title: "Exit survey after service", desc: "Large stars + optional text feedback. Auto-submits on star tap; text saves on blur.", stage: (<div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }}><div style={{ fontSize: 16, fontWeight: 600 }}>How was your experience?</div><R value={4} size="lg" /><textarea placeholder="Optional feedback…" readOnly style={{ width: "100%", height: 60, padding: 8, border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 6, resize: "none" }}></textarea></div>) },
      { title: "Display average rating", desc: "Average score with response count below. Compact display in service detail pages.", stage: (<div style={{ textAlign: "center" }}><R value={4} /><div style={{ fontSize: 11, color: "var(--ux4g-text-neutral-secondary)", marginTop: 6 }}>4.2 · 1,284 RESPONSES</div></div>) },
      { title: "Inline review row", desc: "Each individual review in a list shows stars + reviewer + date. Small size keeps row dense.", stage: (<div style={{ display: "flex", alignItems: "center", gap: 12, padding: 8, fontSize: 13 }}><R value={5} size="sm" /><span>Anjali B.</span><span style={{ color: "var(--ux4g-text-neutral-secondary)" }}>· 14 Apr 2026</span></div>) },
      { title: "Read-only display", desc: "On scheme pages, average rating with star count - no interaction, just informational.", stage: <R value={4} showLabel /> },
    ],
    responsive: [
      { title: "Tap targets stay 44 × 44px per star", desc: "Even small stars have 44px tap area. Critical for mobile thumb taps.", sample: <R value={4} /> },
      { title: "Layout stacks on mobile", desc: "Below 480px, rating + textarea + submit stack vertically. Submit becomes full-width.", sample: <R value={4} size="lg" /> },
    ],
    practices: [
      { do: { stage: <R value={4} showLabel />, rule: "Show numeric value alongside stars - 4.2 of 5 reads cleaner than counting." }, dont: { stage: <R value={4} />, rule: "Stars alone make users squint to count." } },
      { do: { stage: <R value={4} size="lg" />, rule: "Use large stars for primary ratings. Easy to tap accurately." }, dont: { stage: <R value={4} size="sm" />, rule: "Small stars hard to tap precisely - users misclick." } },
    ],
    accessibility: [
      { t: "Each star is a button.", b: "Star is `<button aria-label='Rate 4 stars'>`. Keyboard users tab through stars; Enter selects." },
      { t: "Current value uses aria-valuenow.", b: "Container has `role='slider' aria-valuemin='1' aria-valuemax='5' aria-valuenow='4'`. Screen readers announce current rating." },
      { t: "Visual cue beyond color.", b: "Filled vs outlined shape - not just amber vs grey. Works in monochrome." },
      { t: "Feedback text is optional.", b: "Don't require text for the rating to submit. Forced text creates abandoned forms." },
    ],
    related: [
      { name: "Tag", note: "Average rating shown as a Tag next to a service name - 'PMAY 4.2★' is a compact summary.", preview: <span className="ux4g-tag-tonal-success">4.2 ★</span> },
      { name: "Textarea", note: "Optional written feedback paired with rating uses Textarea below the stars.", preview: <textarea placeholder="Optional feedback…" readOnly style={{ width: "100%", height: 40, padding: 8, border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 6, resize: "none" }}></textarea> },
      { name: "Alert / Toast", note: "After submitting rating, surface a thank-you Toast briefly to confirm receipt.", preview: (<div className="ux4g-alert ux4g-alert-success" style={{ padding: 10 }}><span className="ux4g-alert-icon ux4g-icon-outlined">check_circle</span><div className="ux4g-alert-content"><p className="ux4g-alert-title" style={{ fontSize: 13 }}>Thanks for your feedback</p></div></div>) },
      { name: "Modal", note: "For surveys with multiple questions (NPS + specific topics), pair Rating with a Modal containing the full survey.", preview: (<div style={{ padding: 12, border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 8, fontSize: 12, maxWidth: 200 }}><div style={{ fontWeight: 600 }}>Survey</div></div>) },
    ],
  };
  if (window.UX4G_CP && window.UX4G_CP.render) window.UX4G_CP.render(config);
  else window.UX4G_COMPONENT_CONFIG = config;
})();
