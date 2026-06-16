/* global React */
(function () {
  function Acc({ items }) {
    return (
      <div className="ux4g-accordion" style={{ width: "100%" }}>
        {items.map((it, i) => (
          <div className="ux4g-accordion__item" key={i} style={{ borderBottom: "1px solid var(--ux4g-border-color-neutral-subtle)" }}>
            <h2 className="ux4g-accordion__header" style={{ margin: 0 }}>
              <button className={"ux4g-accordion__button" + (it.open ? "" : " collapsed")} style={{ width: "100%", textAlign: "left", padding: "16px 20px", background: "transparent", border: "none", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}>
                <span className="ux4g-accordion__title" style={{ fontSize: 15, fontWeight: 500 }}>{it.title}</span>
                <span style={{ transform: it.open ? "rotate(180deg)" : "none", transition: "transform 0.2s", color: "var(--ux4g-text-neutral-tertiary)" }}>▾</span>
              </button>
            </h2>
            {it.open && (
              <div className="ux4g-accordion__collapse show" style={{ padding: "0 20px 16px", fontSize: 13, color: "var(--ux4g-text-neutral-secondary)" }}>
                {it.body}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

  function Hero() {
    return (
      <React.Fragment>
        <div className="hb-grain"></div>
        <div className="hb-soft-blur"></div>
        <div className="hb-acc-mock">
          <div className="hb-acc-row open"><span className="hb-acc-row-text">Required documents</span><span className="hb-acc-chev"></span></div>
          <div className="hb-acc-body">
            <div className="hb-acc-body-row"></div>
            <div className="hb-acc-body-row short"></div>
          </div>
          <div className="hb-acc-row"><span className="hb-acc-row-text">Eligibility criteria</span><span className="hb-acc-chev"></span></div>
          <div className="hb-acc-row"><span className="hb-acc-row-text">Processing time</span><span className="hb-acc-chev"></span></div>
        </div>
      </React.Fragment>
    );
  }

  const config = {
    name: "Accordion",
    navName: "Accordion",
    group: "Data Display",
    desc: "Vertically stacked sections for long-form content - FAQs, eligibility criteria, terms. Users scan headers and expand only what interests them.",
    bannerVariant: "accordion",
    hero: Hero,

    anatomy: [
      { n: 1, label: "Item container", token: "ux4g-bg-neutral-elevated" },
      { n: 2, label: "Header / trigger", token: "ux4g-label-l-default" },
      { n: 3, label: "Chevron icon", token: "ux4g-icon-outlined" },
      { n: 4, label: "Body content", token: "ux4g-body-s-default" },
      { n: 5, label: "Separator", token: "ux4g-border-color-neutral-subtle" },
      { n: 6, label: "Focus ring", token: "ux4g-border-color-primary-strong" },
    ],

    properties: [
      {
        label: "Expand behaviour",
        desc: "Single: only one item open at a time (opens close others). Multiple: any combination open. Default to single for FAQs.",
        demos: [
          { label: "Single", wide: true, node: <Acc items={[
            { title: "What documents do I need?", open: true, body: "Aadhaar (original + photocopy), proof of address, recent photograph." },
            { title: "Who is eligible?" },
            { title: "How long does it take?" },
          ]} /> },
        ],
      },
      {
        label: "Density",
        desc: "Default for citizen-facing FAQs (16px text, 16px padding). Compact for admin / form helpers (14px text, 12px padding).",
        demos: [
          { label: "Default", wide: true, node: <Acc items={[{ title: "What documents do I need?", open: true, body: "Aadhaar, proof of address, photograph." }]} /> },
        ],
      },
    ],

    scenarios: [
      {
        title: "FAQ section",
        desc: "Long FAQ pages use Accordion to keep the scroll manageable. Headers always visible; bodies expand on tap.",
        stage: <Acc items={[
          { title: "How do I apply for an income certificate?", open: true, body: "Visit the Income Certificate service page, click Apply, and follow the 5-step form. Verification takes 7-10 working days." },
          { title: "What if my application is rejected?" },
          { title: "Can I check the status online?" },
          { title: "Is there a fee?" },
        ]} />,
      },
      {
        title: "Required documents checklist",
        desc: "Show users what they need before they start. Each document type expands to show acceptable formats, alternatives, and tips.",
        stage: <Acc items={[
          { title: "1. Identity proof", open: true, body: "Aadhaar (preferred), PAN, Voter ID, or Passport. Original required; we'll capture an image for record." },
          { title: "2. Address proof" },
          { title: "3. Income proof" },
        ]} />,
      },
      {
        title: "Inline form helper",
        desc: "Inside a long form, accordions hide non-mandatory fields. Users expand only the optional sections they want to fill.",
        stage: <Acc items={[
          { title: "Optional: Bank details for direct credit", open: true, body: "If you want benefits credited to your bank account directly via DBT, add your account number and IFSC code." },
          { title: "Optional: Email for SMS + email updates" },
        ]} />,
      },
      {
        title: "Step-by-step instructions",
        desc: "Walk-through guides use Accordion with step numbers in headers. Users expand each step as they complete it.",
        stage: <Acc items={[
          { title: "Step 1 of 5: Verify identity", open: true, body: "Enter your Aadhaar number and click 'Send OTP'. The 6-digit code arrives on your registered mobile within 30 seconds." },
          { title: "Step 2 of 5: Add address proof" },
          { title: "Step 3 of 5: Upload photograph" },
        ]} />,
      },
      {
        title: "Comparison - terms of service",
        desc: "Multi-mode Accordion for long policy pages. Users open multiple sections at once to compare clauses.",
        stage: <Acc items={[
          { title: "Data sharing under DPDP Act 2023", open: true, body: "Your data is shared only with the consuming department for the specific service requested. Audit trail accessible via your DigiLocker." },
          { title: "Data retention policy", open: true, body: "Personal data retained for 7 years post-service completion as required by law. After that, anonymised and archived." },
          { title: "Right to grievance" },
        ]} />,
      },
      {
        title: "Disabled item",
        desc: "When an item is unavailable (feature not yet released, locked by previous step), keep it visible but disabled with a hint.",
        stage: <Acc items={[
          { title: "Account settings", open: true, body: "Edit your contact details and preferences." },
          { title: "Advanced settings (Pro feature)" },
        ]} />,
      },
    ],

    responsive: [
      {
        title: "Tap targets stay 44 × 44px on headers",
        desc: "Each header gets at least 44px height regardless of label length. Critical for thumb-first mobile FAQ pages.",
        sample: <Acc items={[{ title: "Question 1", open: true, body: "Answer." }]} />,
      },
      {
        title: "Body width matches container",
        desc: "Body content expands to the accordion's full width. On narrow viewports, body wraps naturally - never truncates.",
        sample: <Acc items={[{ title: "Long question that may wrap to two lines on a narrow viewport", open: true, body: "Body content also wraps naturally." }]} />,
      },
      {
        title: "Open state survives orientation change",
        desc: "Which items are open is preserved through orientation rotations. Don't snap closed - users lose place.",
        sample: <Acc items={[{ title: "Q1", open: true, body: "Open across rotation." }, { title: "Q2", open: true, body: "Also open." }]} />,
      },
    ],

    practices: [
      {
        do: { stage: <Acc items={[{ title: "Required documents", open: true, body: "Aadhaar, PAN, photograph." }]} />, rule: "Default-open the most-asked item. Reduces clicks for the common case." },
        dont: { stage: <Acc items={[{ title: "Required documents" }, { title: "Eligibility" }, { title: "Fees" }]} />, rule: "All-collapsed default forces users to expand before reading anything." },
      },
      {
        do: { stage: <Acc items={[{ title: "Q1?", open: true, body: "A1." }, { title: "Q2?" }, { title: "Q3?" }]} />, rule: "Use Accordion for content users scan and explore selectively." },
        dont: { stage: <Acc items={[{ title: "Submit", open: true, body: <button className="ux4g-btn-primary ux4g-btn-sm">Submit application</button> }]} />, rule: "Accordion is not a button - hiding the Submit action behind an expand is broken UX." },
      },
      {
        do: { stage: <Acc items={[{ title: "What is DPDP?", open: true, body: "DPDP Act 2023 protects personal data." }]} />, rule: "Question as header, answer in body. Familiar from every FAQ ever." },
        dont: { stage: <Acc items={[{ title: "DPDP", open: true, body: "Digital Personal Data Protection Act 2023..." }]} />, rule: "Acronym alone as header makes users open every item to find what they need." },
      },
      {
        do: { stage: <Acc items={[{ title: "Section A" }, { title: "Section B" }, { title: "Section C" }]} />, rule: "3-7 items is the sweet spot. More than 7 and users lose their place." },
        dont: { stage: <Acc items={[...Array(15)].map((_, i) => ({ title: "Item " + (i + 1) }))} />, rule: "15 items in an Accordion is a list, not a navigational aid." },
      },
    ],

    accessibility: [
      { t: "Each header is a button.", b: "Wrap the title in `<button>`, not a div with onClick. Native button gets keyboard focus, Enter/Space activation, and screen-reader announcement for free." },
      { t: "aria-expanded reflects state.", b: "The button gets `aria-expanded='true'` when open, `'false'` when closed. Screen readers announce 'expanded' / 'collapsed' alongside the title." },
      { t: "Body uses aria-controls.", b: "The button's `aria-controls` points to the body's id, and the body has the matching id. Screen readers know they're related." },
      { t: "Heading element for accordion headers.", b: "Wrap each button in an `<h3>` (or `<h2>`, matching document outline). Screen readers can use heading navigation to jump between accordion items." },
      { t: "Chevron is decorative.", b: "Hide the chevron from screen readers with `aria-hidden='true'`. The `aria-expanded` already announces state." },
      { t: "Focus stays on the trigger.", b: "Opening or closing doesn't move focus. Tab continues from the trigger to the next focusable element (inside the body if open, next header if closed)." },
      { t: "Tap targets stay 44 × 44px.", b: "Each header button gets at least 44px height even if the label is short. Touch-friendly without breaking the visual rhythm." },
    ],

    related: [
      {
        name: "Tab",
        note: "For mutually exclusive views that share screen space (Overview / Documents / History), use Tab. Accordion stacks vertically - shows multiple at once.",
        preview: (
          <div className="ux4g-tab ux4g-tab-underline ux4g-tab-sm">
            <ul className="ux4g-tab-list" role="tablist" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li className="ux4g-tab-item is-active" role="tab">Overview</li>
              <li className="ux4g-tab-item" role="tab">Documents</li>
            </ul>
          </div>
        ),
      },
      {
        name: "List",
        note: "For simple data lists with no expand behaviour (people, files), use List. Accordion is for content with collapsible bodies.",
        preview: (
          <div style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 13 }}>
            <div style={{ padding: "6px 10px" }}>Anjali Bhattacharya</div>
            <div style={{ padding: "6px 10px" }}>Vikram Reddy</div>
          </div>
        ),
      },
      {
        name: "Card",
        note: "For independent content units that don't share a Q&A pattern, use Card. Accordion is for hierarchical FAQ-style content.",
        preview: (
          <div style={{ padding: 12, border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 8, fontSize: 13, maxWidth: 200 }}>
            <div style={{ fontWeight: 600, marginBottom: 4 }}>Income Certificate</div>
            <div style={{ color: "var(--ux4g-text-neutral-secondary)" }}>Issued by SDM office.</div>
          </div>
        ),
      },
      {
        name: "Empty State",
        note: "When an accordion section's body has no content, render an Empty State inside instead of an empty body.",
        preview: (
          <div style={{ padding: 12, textAlign: "center", border: "1px dashed var(--ux4g-border-color-neutral-subtle)", borderRadius: 6, color: "var(--ux4g-text-neutral-secondary)", fontSize: 12 }}>
            <div>No documents in this section</div>
          </div>
        ),
      },
    ],
  };

  if (window.UX4G_CP && window.UX4G_CP.render) window.UX4G_CP.render(config);
  else window.UX4G_COMPONENT_CONFIG = config;
})();
