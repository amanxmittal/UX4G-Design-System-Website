/* global React, ReactDOM, window */
/* ────────────────────────────────────────────────────────────
   Made by You — Solution detail page
   Template renders any community solution by slug.
   URL: UX4G Made by You Solution.html?id=<slug>

   Page structure (matches the rest of the site, no side nav):
     1. Header        — breadcrumb, type badge, title, contributor, description, resources
     2. Preview       — full-width, carousel-capable (multi-slide for flows)
     3. When to use   — good / not-for guidance
     4. More solutions — 3-up related community work
   ──────────────────────────────────────────────────────────── */
const { useState, useCallback, useMemo, useEffect } = React;

/* ─────────────── Toasts ─────────────── */
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

/* ─────────────── Inline icons ─────────────── */
const Icon = {
  arrow: <span className="i-arrow" aria-hidden="true">→</span>,
  figma: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M8.00006 24C10.2081 24 12.0001 22.208 12.0001 20V15.9999H8.00006C5.79205 15.9999 4 17.792 4 20C4 22.208 5.79205 24 8.00006 24Z" fill="#0ACF83"/>
      <path d="M4 12C4 9.79197 5.79205 7.99994 8.00006 7.99994H12.0001V15.9999H8.00006C5.79205 16 4 14.208 4 12Z" fill="#A259FF"/>
      <path d="M4 4.00003C4 1.79203 5.79205 0 8.00006 0H12.0001V7.99997H8.00006C5.79205 7.99997 4 6.20803 4 4.00003Z" fill="#F24E1E"/>
      <path d="M12 0H16.0001C18.2081 0 20.0001 1.79203 20.0001 4.00003C20.0001 6.20803 18.2081 7.99997 16.0001 7.99997H12V0Z" fill="#FF7262"/>
      <path d="M20.0001 12C20.0001 14.208 18.2081 16 16.0001 16C13.792 16 12 14.208 12 12C12 9.79197 13.792 7.99994 16.0001 7.99994C18.2081 7.99994 20.0001 9.79197 20.0001 12Z" fill="#1ABCFE"/>
    </svg>
  ),
  code: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.3724 0 0 5.3808 0 12.0204C0 17.3304 3.438 21.8364 8.2068 23.4252C8.8068 23.5356 9.0252 23.1648 9.0252 22.8456C9.0252 22.5612 9.0156 21.804 9.0096 20.802C5.6712 21.528 4.9668 19.1904 4.9668 19.1904C4.422 17.8008 3.6348 17.4312 3.6348 17.4312C2.5452 16.6872 3.7176 16.7016 3.7176 16.7016C4.9212 16.7856 5.5548 17.94 5.5548 17.94C6.6252 19.776 8.364 19.2456 9.0468 18.9384C9.1572 18.162 9.4668 17.6328 9.81 17.3328C7.146 17.0292 4.344 15.9972 4.344 11.3916C4.344 10.08 4.812 9.006 5.5788 8.166C5.4552 7.8624 5.0436 6.6396 5.6964 4.986C5.6964 4.986 6.7044 4.662 8.9964 6.2172C9.97532 5.95022 10.9853 5.81423 12 5.8128C13.02 5.8176 14.046 5.9508 15.0048 6.2172C17.2956 4.662 18.3012 4.9848 18.3012 4.9848C18.9564 6.6396 18.5436 7.8624 18.4212 8.166C19.1892 9.006 19.6548 10.08 19.6548 11.3916C19.6548 16.0092 16.848 17.0256 14.1756 17.3232C14.6064 17.694 14.9892 18.4272 14.9892 19.5492C14.9892 21.1548 14.9748 22.452 14.9748 22.8456C14.9748 23.1672 15.1908 23.5416 15.8004 23.424C18.19 22.6225 20.2672 21.0904 21.7386 19.0441C23.2099 16.9977 24.001 14.5408 24 12.0204C24 5.3808 18.6264 0 12 0Z" fill="currentColor"/>
    </svg>
  ),
  docs: (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 2h6l3 3v9H4z"/><path d="M10 2v3h3"/><path d="M6 8.5h5M6 11h4"/>
    </svg>
  ),
  prev: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="15 18 9 12 15 6"/>
    </svg>
  ),
  next: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  ),
  component: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.5"/>
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.5"/>
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.5"/>
      <rect x="13.5" y="13.5" width="7" height="7" rx="1.5"/>
    </svg>
  ),
  pattern: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3 3 7.5l9 4.5 9-4.5L12 3z"/>
      <path d="m3 12 9 4.5 9-4.5"/>
      <path d="m3 16.5 9 4.5 9-4.5"/>
    </svg>
  ),
  flow: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="5.5" cy="6" r="2.5"/>
      <circle cx="18.5" cy="6" r="2.5"/>
      <circle cx="12" cy="18" r="2.5"/>
      <path d="M8 6h8"/>
      <path d="M6.8 8.2 10.6 15.7"/>
      <path d="M17.2 8.2 13.4 15.7"/>
    </svg>
  ),
};
const TYPE_ICON = { component: Icon.component, pattern: Icon.pattern, flow: Icon.flow };

/* ─────────────── Mini visual (used in "more solutions" cards) ─────────────── */
function SolutionVisual({ id, type }) {
  const visuals = {
    "Pension Eligibility Stepper": (
      <div className="sv-stepper">
        <div className="sv-track"><div className="sv-fill" style={{ width: "55%" }}></div></div>
        <div className="sv-dots">
          <span className="d done">1</span>
          <span className="d done">2</span>
          <span className="d on">3</span>
          <span className="d">4</span>
        </div>
        <div className="sv-labels">
          <span>Identity</span><span>Income</span><span className="hot">Eligibility</span><span>Seed</span>
        </div>
      </div>
    ),
    "Multilingual Form Reset": (
      <div className="sv-reset">
        <div className="sv-modal">
          <div className="sv-modal-head">
            <span className="sv-warn">!</span>
            <span className="sv-lang">हिंदी · EN</span>
          </div>
          <div className="sv-modal-body">
            <div className="sv-line w70"></div>
            <div className="sv-line w90"></div>
          </div>
          <div className="sv-modal-actions">
            <span className="sv-btn ghost">रद्द करें</span>
            <span className="sv-btn danger">Reset form</span>
          </div>
        </div>
      </div>
    ),
    "Doorstep Service Tracker": (
      <div className="sv-tracker">
        <div className="sv-pipeline">
          <span className="n done">✓</span><span className="bar done"></span>
          <span className="n done">✓</span><span className="bar done"></span>
          <span className="n on">●</span><span className="bar"></span>
          <span className="n">·</span>
        </div>
        <div className="sv-pipeline-labels">
          <span>Booked</span><span>Picked</span><span className="hot">Out for delivery</span><span>Delivered</span>
        </div>
        <div className="sv-sms">SMS · Out for delivery · PIN 110011</div>
      </div>
    ),
    "Aadhaar-Seed Reminder": (
      <div className="sv-nudge">
        <span className="sv-nudge-ic">⊕</span>
        <div className="sv-nudge-body">
          <div className="sv-line w80"></div>
          <div className="sv-line w60 sm"></div>
        </div>
        <span className="sv-nudge-close">×</span>
        <span className="sv-nudge-cta">Seed Aadhaar →</span>
      </div>
    ),
    "Crop Status Pipeline": (
      <div className="sv-crop">
        <div className="sv-seasons">
          <span className="season on">Kharif</span>
          <span className="season">Rabi</span>
        </div>
        <div className="sv-pipeline">
          <span className="n done">✓</span><span className="bar done"></span>
          <span className="n done">✓</span><span className="bar done"></span>
          <span className="n on">●</span><span className="bar"></span>
          <span className="n">·</span>
        </div>
        <div className="sv-pipeline-labels">
          <span>Sown</span><span>Inspected</span><span className="hot">Insured</span><span>Paid</span>
        </div>
      </div>
    ),
    "Grievance Escalation Map": (
      <div className="sv-tree">
        <div className="sv-tier">
          <span className="tier-n">L1</span>
          <span className="tier-name">Block Officer</span>
          <span className="tier-bar"></span>
        </div>
        <div className="sv-tier hot">
          <span className="tier-n">L2</span>
          <span className="tier-name">District Magistrate</span>
          <span className="tier-bar on"></span>
        </div>
        <div className="sv-tier">
          <span className="tier-n">L3</span>
          <span className="tier-name">State Nodal Officer</span>
          <span className="tier-bar"></span>
        </div>
      </div>
    ),
  };
  return (
    <div className={"sol-visual t-" + type}>
      <span className="sol-visual-stamp">by <em>You</em></span>
      {visuals[id] || <div className="sv-default"></div>}
    </div>
  );
}

/* ─────────────── Slugify ─────────────── */
const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

/* ─────────────── Solutions: catalog + detail content ─────────────── */
const SOLUTIONS = [
  { name: "Pension Eligibility Stepper", org: "Ministry of Rural Development", type: "pattern",
    desc: "A 4-step eligibility checker for NSAP old-age and widow pensions, with inline rule explanations.",
    formats: ["figma", "code", "docs"] },
  { name: "Multilingual Form Reset", org: "Income Tax Department", type: "component",
    desc: "A reset control that warns in the user's selected language before clearing a long form.",
    formats: ["figma", "code"] },
  { name: "Doorstep Service Tracker", org: "Department of Posts", type: "flow",
    desc: "Map, status pipeline and SMS-fallback acknowledgements for India Post doorstep services.",
    formats: ["figma", "docs"] },
  { name: "Aadhaar-Seed Reminder", org: "UIDAI · Ministry of Electronics & IT", type: "component",
    desc: "A gentle, dismissible nudge prompting citizens to seed their Aadhaar to a benefit account.",
    formats: ["figma", "code", "docs"] },
  { name: "Crop Status Pipeline", org: "Ministry of Agriculture & Farmers' Welfare", type: "pattern",
    desc: "Kharif/Rabi season-aware status timeline for PM-KISAN and crop-insurance applications.",
    formats: ["figma", "docs"] },
  { name: "Grievance Escalation Map", org: "Department of Administrative Reforms", type: "flow",
    desc: "Visualises CPGRAMS escalation hierarchy across districts so citizens know who handles their case next.",
    formats: ["docs"] },
];

/* ─────────────── Preview slide library ─────────────── */
/* Each entry is one slide of a per-solution carousel. The flow-type
   solutions ship multiple slides; component/pattern entries can be
   single slides until their teams contribute more. */
const PensionStepperSlide = (
  <div className="mbys-slide-stepper">
    <div className="mbys-slide-screen-head">
      <h3 className="mbys-slide-title">Old-Age Pension · NSAP eligibility</h3>
      <span className="mbys-slide-step">Step 3 of 4</span>
    </div>

    <div className="lg-stepper">
      <div className="lg-stepper-track">
        <div className="lg-stepper-fill"></div>
      </div>
      <div className="lg-stepper-row">
        <div className="lg-step done">
          <span className="node"></span>
          <span className="step-label">Identity</span>
          <span className="step-meta">Verified</span>
        </div>
        <div className="lg-step done">
          <span className="node"></span>
          <span className="step-label">Income</span>
          <span className="step-meta">Below cap</span>
        </div>
        <div className="lg-step on">
          <span className="node"><span className="step-n">3</span></span>
          <span className="step-label">Eligibility</span>
          <span className="step-meta">Checking</span>
        </div>
        <div className="lg-step">
          <span className="node"><span className="step-n">4</span></span>
          <span className="step-label">Seed</span>
          <span className="step-meta">Aadhaar</span>
        </div>
      </div>
    </div>

    <div className="lg-step-content">
      <div className="lg-step-content-head">
        <h4 className="lg-step-content-title">Eligibility rules · NSAP-OAP</h4>
        <span className="lg-step-content-count">2 of 3 passed</span>
      </div>
      <div className="lg-rules">
        <div className="lg-rule">
          <span className="r-tick">✓</span>
          <div className="r-body">
            <span className="r-title">Age is 60 years or above</span>
            <span className="r-explain">From Aadhaar DOB · 64 years on 12 Mar 2026</span>
          </div>
        </div>
        <div className="lg-rule">
          <span className="r-tick">✓</span>
          <div className="r-body">
            <span className="r-title">BPL household</span>
            <span className="r-explain">SECC-2011 BPL list · Block Bichhia, Mandla</span>
          </div>
        </div>
        <div className="lg-rule pending">
          <span className="r-tick">·</span>
          <div className="r-body">
            <span className="r-title">No other central pension drawn</span>
            <span className="r-explain">Checking PFMS · usually 4–6 seconds</span>
          </div>
        </div>
      </div>
    </div>

    <div className="lg-actions">
      <span className="back">← Back to Income</span>
      <span className="next-btn">Continue to Seed →</span>
    </div>
  </div>
);

/* Reusable generic slide — wraps the small SolutionVisual mock at a
   larger scale on a tinted backdrop. Used for solutions without a
   bespoke per-step preview yet. */
function GenericSlide({ id, type, caption }) {
  return (
    <div className="mbys-slide-generic">
      <div className="mbys-slide-frame">
        <SolutionVisual id={id} type={type}/>
      </div>
      {caption && <p className="mbys-slide-caption">{caption}</p>}
    </div>
  );
}

/* Doorstep Service Tracker — three flow screens for the carousel */
function DoorstepBookSlide() {
  return (
    <div className="mbys-flow-screen">
      <div className="mbys-flow-screen-head">
        <h3 className="mbys-slide-title">Book a doorstep visit</h3>
        <span className="mbys-flow-step">Screen 1 of 3</span>
      </div>
      <div className="mbys-flow-fields">
        <label>Service requested</label>
        <div className="mbys-flow-input">Passport reissue · Tatkal</div>
        <label>Address</label>
        <div className="mbys-flow-input">42 / 7, Sector 19, Dwarka, New Delhi 110075</div>
        <label>Preferred slot</label>
        <div className="mbys-flow-slots">
          <span className="slot">9–11 AM</span>
          <span className="slot on">11 AM–1 PM</span>
          <span className="slot">3–5 PM</span>
        </div>
      </div>
      <div className="mbys-flow-cta">Confirm booking →</div>
    </div>
  );
}
function DoorstepTrackSlide() {
  return (
    <div className="mbys-flow-screen">
      <div className="mbys-flow-screen-head">
        <h3 className="mbys-slide-title">Live status</h3>
        <span className="mbys-flow-step">Screen 2 of 3</span>
      </div>
      <div className="mbys-flow-pipeline">
        <div className="mbys-pip-rail">
          <span className="dot done"></span><span className="seg done"></span>
          <span className="dot done"></span><span className="seg done"></span>
          <span className="dot on"></span><span className="seg"></span>
          <span className="dot"></span>
        </div>
        <div className="mbys-pip-labels">
          <span>Booked<em>10:14 AM</em></span>
          <span>Picked<em>11:42 AM</em></span>
          <span className="hot">Out for delivery<em>Now</em></span>
          <span>Delivered<em>ETA 4:30 PM</em></span>
        </div>
      </div>
      <div className="mbys-flow-map">
        <div className="mbys-map-grid"></div>
        <div className="mbys-map-pin"></div>
        <div className="mbys-map-route"></div>
      </div>
    </div>
  );
}
function DoorstepSmsSlide() {
  return (
    <div className="mbys-flow-screen">
      <div className="mbys-flow-screen-head">
        <h3 className="mbys-slide-title">SMS fallback</h3>
        <span className="mbys-flow-step">Screen 3 of 3</span>
      </div>
      <p className="mbys-flow-helper">When a citizen's session has timed out, we still keep them informed by SMS — written in their portal language.</p>
      <div className="mbys-sms-mock">
        <div className="sms-from">India Post · DM-IPOST</div>
        <p>Your passport pickup is out for delivery. Track at indiapost.gov.in/track/IPB42718. SMS HELP to 166.</p>
        <div className="sms-time">11:43 AM · Today</div>
      </div>
      <div className="mbys-sms-mock alt">
        <div className="sms-from">India Post · DM-IPOST</div>
        <p>आपका पासपोर्ट डिलीवरी के लिए निकल चुका है। ट्रैक करें indiapost.gov.in/hi</p>
        <div className="sms-time">11:43 AM · Today</div>
      </div>
    </div>
  );
}

/* Grievance Escalation Map — two slides */
function GrievanceMapSlide() {
  return (
    <div className="mbys-flow-screen">
      <div className="mbys-flow-screen-head">
        <h3 className="mbys-slide-title">Escalation tiers</h3>
        <span className="mbys-flow-step">Screen 1 of 2</span>
      </div>
      <div className="mbys-tier-list">
        <div className="mbys-tier-row done">
          <span className="lvl">L1</span>
          <div className="body">
            <strong>Block Development Officer</strong>
            <span>Filed · 2 Mar · Closed without resolution</span>
          </div>
          <span className="window">15 days</span>
        </div>
        <div className="mbys-tier-row on">
          <span className="lvl">L2</span>
          <div className="body">
            <strong>District Magistrate</strong>
            <span>Re-opened by citizen · Awaiting response</span>
          </div>
          <span className="window">30 days</span>
        </div>
        <div className="mbys-tier-row">
          <span className="lvl">L3</span>
          <div className="body">
            <strong>State Nodal Officer</strong>
            <span>Available after L2 closure</span>
          </div>
          <span className="window">60 days</span>
        </div>
      </div>
    </div>
  );
}
function GrievanceCitizenSlide() {
  return (
    <div className="mbys-flow-screen">
      <div className="mbys-flow-screen-head">
        <h3 className="mbys-slide-title">What the citizen sees</h3>
        <span className="mbys-flow-step">Screen 2 of 2</span>
      </div>
      <div className="mbys-citizen-card">
        <span className="mbys-cit-badge">Your complaint · CPGRAMS / DOPT / 2026 / 04212</span>
        <h4>Pension arrears not credited</h4>
        <p>Your complaint is currently with the District Magistrate, Bilaspur. If you don't hear back by <strong>2 April 2026</strong>, you can escalate to the State Nodal Officer.</p>
        <div className="mbys-cit-cta">
          <span className="ghost">Send reminder</span>
          <span className="primary">Escalate when due →</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────── Slug → detail content ─────────────── */
const DETAILS = {
  "pension-eligibility-stepper": {
    meta: "nsap.gov.in/apply",
    description: "A 4-step eligibility checker for NSAP old-age and widow pensions that walks the applicant through Identity, Income, Eligibility and Aadhaar seeding, with inline rule explanations so they understand why they qualify before submitting. Shared by the NSAP team after running it across three districts in Madhya Pradesh and Odisha.",
    resources: {
      figma:  "https://figma.com/community/file/ux4g-pension-stepper",
      github: "https://github.com/ux4g-community/pension-stepper",
      docs:   "https://docs.ux4g.gov.in/community/pension-stepper",
    },
    previews: [
      { caption: "Step 3 of the eligibility check — each rule explains itself inline.",
        render: PensionStepperSlide },
    ],
    goodFor: [
      { strong: "Means-tested benefit schemes", body: "NSAP, PMVVY, state widow and disability pensions, anywhere eligibility is a checklist of citizen-verifiable rules." },
      { strong: "Multi-rule applications with mixed sources", body: "When eligibility depends on identity, income, Aadhaar seed and demographic rules from different ministries that should be checked one at a time." },
      { strong: "Shared-device counter operation", body: "CSC desks, gram panchayat kiosks and rural BPO operators who need to explain each rule out loud to the applicant before tapping next." },
    ],
    notFor: [
      { strong: "Single-criterion eligibility", body: "If the rule is just \"are you above 60?\" a stepper adds friction, a single inline check is better." },
      { strong: "Document-upload-heavy onboarding", body: "The pattern handles rule-checking, not file uploads. Pair it with a separate document-collection flow rather than retrofitting upload steps in." },
    ],
  },
  "multilingual-form-reset": {
    meta: "incometax.gov.in/efile",
    description: "A reset control that warns the applicant in their chosen language before wiping a long Income Tax form, mirroring the form's language toggle so the warning, cancel and destructive actions all appear in Hindi when the form is in Hindi. English mirrors are kept for screen readers operating in mixed-language mode.",
    resources: {
      figma:  "https://figma.com/community/file/ux4g-multilingual-reset",
      github: "https://github.com/ux4g-community/multilingual-reset",
    },
    previews: [
      { caption: "Hindi reset confirmation. The destructive action keeps its red treatment in every locale.",
        render: <GenericSlide id="Multilingual Form Reset" type="component"/> },
    ],
    goodFor: [
      { strong: "Long, multi-section forms", body: "Tax filings, scheme applications and registration flows where reset means losing real work." },
      { strong: "Bilingual or trilingual portals", body: "Any portal that already supports language switching at the page level and needs that choice respected inside warning dialogs." },
    ],
    notFor: [
      { strong: "Short, single-screen forms", body: "A two-field contact form does not need a confirmation step, and adding one trains users to dismiss future warnings." },
      { strong: "Auto-saving forms", body: "If the form persists drafts to the server, reset should be cheap. Warn for clear-and-submit, not for clear-and-resume." },
    ],
  },
  "doorstep-service-tracker": {
    meta: "indiapost.gov.in/doorstep",
    description: "Map, status pipeline and SMS-fallback acknowledgements for India Post doorstep services, designed for rural delivery routes where a postman may take half a day between picks. Treats timestamps as approximate, and falls back to SMS in the citizen's portal language when their session has timed out.",
    resources: {
      figma: "https://figma.com/community/file/ux4g-doorstep-tracker",
      docs:  "https://docs.ux4g.gov.in/community/doorstep-tracker",
    },
    previews: [
      { caption: "Booking screen. The slot picker uses three windows so the postman's route stays plannable.",
        render: <DoorstepBookSlide/> },
      { caption: "Live status with the map below. Times are deliberately framed as approximate.",
        render: <DoorstepTrackSlide/> },
      { caption: "SMS fallback in English and Hindi, sent when the citizen's session has timed out.",
        render: <DoorstepSmsSlide/> },
    ],
    goodFor: [
      { strong: "Field-officer mediated services", body: "Anywhere a government employee physically moves between citizen and office, and the citizen needs to see progress in between." },
      { strong: "Services with SMS as the primary notification channel", body: "Most rural India Post, Aadhaar enrolment camps and revenue department visits, where a webpage is opened once and then never again." },
    ],
    notFor: [
      { strong: "Instant digital transactions", body: "If the service completes in under a minute, a tracker adds noise. Use a simple confirmation pattern instead." },
    ],
  },
  "aadhaar-seed-reminder": {
    meta: "uidai.gov.in/account",
    description: "A gentle, dismissible nudge at the top of a benefits dashboard for citizens whose Aadhaar isn't yet seeded to their benefit account. Built by the UIDAI design cell after testing seven variants of escalating language, the least pushy one produced the highest seeding rate.",
    resources: {
      figma:  "https://figma.com/community/file/ux4g-aadhaar-seed-nudge",
      github: "https://github.com/ux4g-community/aadhaar-seed-nudge",
      docs:   "https://docs.ux4g.gov.in/community/aadhaar-seed-nudge",
    },
    previews: [
      { caption: "Default state. Subordinate to system alerts, but visible enough to act on at a glance.",
        render: <GenericSlide id="Aadhaar-Seed Reminder" type="component"/> },
    ],
    goodFor: [
      { strong: "Dashboards with optional account linkage", body: "Anywhere the next best action is set-and-forget configuration, not a transaction." },
      { strong: "Reminder patterns that need to coexist with critical alerts", body: "Visually subordinate to red error banners, never competes for attention." },
    ],
    notFor: [
      { strong: "Time-sensitive compliance prompts", body: "If a citizen must act before a deadline or face a penalty, use the patterns guidance for warnings instead." },
    ],
  },
  "crop-status-pipeline": {
    meta: "pmkisan.gov.in/status",
    description: "Kharif and Rabi season-aware status timeline for PM-KISAN and crop-insurance applications, keeping a farmer's two parallel applications stacked instead of interleaved. Submitted by the Agriculture ministry's Telangana pilot team after they found farmers filing duplicates because the existing portal merged both seasons into one.",
    resources: {
      figma: "https://figma.com/community/file/ux4g-crop-pipeline",
      docs:  "https://docs.ux4g.gov.in/community/crop-pipeline",
    },
    previews: [
      { caption: "Season toggle keeps Kharif and Rabi pipelines visually distinct.",
        render: <GenericSlide id="Crop Status Pipeline" type="pattern"/> },
    ],
    goodFor: [
      { strong: "Seasonal or cyclical applications", body: "Any scheme where the same citizen applies multiple times a year and needs to track each instance separately." },
      { strong: "Status views with strong domain vocabulary", body: "Pipelines that benefit from labels familiar to the user, Kharif and Rabi, monsoon and post-monsoon, rather than generic stage names." },
    ],
    notFor: [
      { strong: "Linear, one-off services", body: "If a citizen applies once and the application ends, use a simple progress bar instead." },
    ],
  },
  "grievance-escalation-map": {
    meta: "pgportal.gov.in",
    description: "Visualises the CPGRAMS escalation hierarchy across districts so citizens know who handles their case next, and how long each level takes. A docs-first contribution, the team shared written guidance and a Figma map rather than a built component, so adopters should expect to wire it into their own grievance backend.",
    resources: {
      docs: "https://docs.ux4g.gov.in/community/grievance-escalation-map",
    },
    previews: [
      { caption: "Internal escalation map. Each level shows the citizen's right-to-escalate window.",
        render: <GrievanceMapSlide/> },
      { caption: "Citizen-facing card. Names the officer in plain language, with the escalation deadline.",
        render: <GrievanceCitizenSlide/> },
    ],
    goodFor: [
      { strong: "Grievance portals with explicit escalation tiers", body: "CPGRAMS-connected services where the citizen has a right to escalate at fixed intervals." },
      { strong: "Cross-department referral surfaces", body: "Anywhere a single complaint can be routed through more than one office before closure." },
    ],
    notFor: [
      { strong: "Single-team support flows", body: "If a complaint is resolved by one team without an escalation path, a status pipeline is enough." },
    ],
  },
};

/* ─────────────── Slug resolution ─────────────── */
function resolveSlug() {
  if (typeof window === "undefined") return slugify(SOLUTIONS[0].name);
  const qs = new URLSearchParams(window.location.search);
  const id = qs.get("id");
  if (!id) return slugify(SOLUTIONS[0].name);
  const hit = SOLUTIONS.find((s) => slugify(s.name) === id);
  return hit ? id : slugify(SOLUTIONS[0].name);
}

/* ─────────────── Header (Foundations/Colour-style) ─────────────── */
function Header({ solution, detail }) {
  return (
    <header className="mbys-header">
      <div className="container">
        <div className="mbys-crumb">
          <a href="index.html">Home</a>
          <span className="sep">/</span>
          <a href="UX4G Made by You.html">Made by You</a>
          <span className="sep">/</span>
          <a href={"UX4G Made by You All Solutions.html?type=" + solution.type}>
            {solution.type.charAt(0).toUpperCase() + solution.type.slice(1) + "s"}
          </a>
          <span className="sep">/</span>
          <span className="current">{solution.name}</span>
        </div>

        <h1 className="mbys-title">{solution.name}</h1>

        <p className="mbys-contrib">
          <span className="label">Contributed by</span>
          <span className="org">{solution.org}</span>
        </p>

        <div className="mbys-desc">
          <p className="lede">{detail.description}</p>
        </div>

      </div>
    </header>
  );
}

/* ─────────────── Resource buttons (right rail of preview row) ─────────────── */
const RESOURCE_DEFS = [
  { key: "figma",  label: "Open in Figma",     variant: "",     icon: Icon.figma },
  { key: "github", label: "View on GitHub",    variant: "code", icon: Icon.code  },
  { key: "docs",   label: "Read documentation", variant: "docs", icon: Icon.docs  },
];

function ResourceButton({ def, href }) {
  const disabled = !href;
  const cls = "mbys-res-btn"
    + (def.variant ? " " + def.variant : "")
    + (disabled ? " is-disabled" : "");

  if (disabled) {
    return (
      <span className={cls} aria-disabled="true">
        <span className="ic">{def.icon}</span>
        <span className="mbys-res-btn-body">
          <span className="label">{def.label}</span>
          <span className="state">Not available</span>
        </span>
      </span>
    );
  }
  return (
    <a className={cls} href={href} target="_blank" rel="noopener">
      <span className="ic">{def.icon}</span>
      <span className="mbys-res-btn-body">
        <span className="label">{def.label}</span>
      </span>
      <span className="arr">→</span>
    </a>
  );
}

/* ─────────────── Preview carousel ─────────────── */
function PreviewCarousel({ solution, detail }) {
  const slides = detail.previews || [];
  const [i, setI] = useState(0);
  const total = slides.length;
  const single = total <= 1;

  const go = useCallback((next) => {
    if (single) return;
    setI((cur) => (next + total) % total);
  }, [single, total]);

  /* Arrow-key navigation when carousel section is focus-within. */
  const ref = React.useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || single) return undefined;
    const onKey = (e) => {
      if (!el.contains(document.activeElement) && document.activeElement !== document.body) return;
      if (e.key === "ArrowLeft")  go(i - 1);
      if (e.key === "ArrowRight") go(i + 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [i, go, single]);

  if (total === 0) return null;
  const current = slides[i];

  return (
    <section className="mbys-preview-section" ref={ref}>
      <div className="container">
        <div className="mbys-section-eyebrow">
          <span className="mby-eyebrow">The solution</span>
        </div>
        <div className="mbys-preview-row">

          {/* LEFT: preview / carousel */}
          <div className="mbys-preview-col">
            <div className="mbys-preview-frame">
              <div className="mbys-preview-stage">
                <div className="mbys-preview-slide-wrap" data-slide={i + 1}>
                  {current.render}
                </div>
              </div>
            </div>

            <div className="mbys-preview-meta-row">
              {current.caption && (
                <p className="mbys-preview-caption">{current.caption}</p>
              )}

              {!single && (
                <div className="ux4g-pagination-wrapper mbys-pagination">
                  <div className="ux4g-pagination ux4g-pagination-dotted ux4g-pagination-compact">
                    <button type="button"
                      className={"ux4g-pagination-prev" + (i === 0 ? " disabled" : "")}
                      aria-label="Previous slide"
                      onClick={() => go(i - 1)}>
                      {Icon.prev}
                    </button>
                    <div className="ux4g-pagination-dots" role="tablist" aria-label="Preview slides">
                      {slides.map((_, k) => (
                        <span key={k}
                          role="tab"
                          tabIndex={0}
                          aria-selected={k === i}
                          aria-label={`Slide ${k + 1} of ${total}`}
                          className={"ux4g-page-dot" + (k === i ? " ux4g-active" : "")}
                          onClick={() => setI(k)}
                          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setI(k); } }}/>
                      ))}
                    </div>
                    <button type="button"
                      className={"ux4g-pagination-next" + (i === total - 1 ? " disabled" : "")}
                      aria-label="Next slide"
                      onClick={() => go(i + 1)}>
                      {Icon.next}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: type pill + stacked resource buttons (always 3, disabled if missing) */}
          <aside className="mbys-res-rail" aria-label="Solution resources">
            <div className={"mbys-type-pill mbys-type-pill-" + solution.type} aria-hidden="true">
              <span className="ic">{TYPE_ICON[solution.type]}</span>
              <span className="mbys-res-btn-body">
                <span className="label">{solution.type}</span>
              </span>
            </div>
            {RESOURCE_DEFS.map((def) => (
              <ResourceButton key={def.key}
                def={def}
                href={detail.resources[def.key]}/>
            ))}
          </aside>

        </div>
      </div>
    </section>
  );
}

/* ─────────────── When to use ─────────────── */
function WhenToUse({ detail }) {
  return (
    <section className="sd-usage" data-screen-label="When to use this">
      <div className="container">
        <div className="sd-usage-head">
          <span className="mby-eyebrow">Usage guidance</span>
          <h2>When to use this</h2>
        </div>

        <div className="sd-usage-grid">
          <div className="sd-usage-card good">
            <div className="sd-usage-card-head">
              <span className="sd-usage-icon">✓</span>
              <h3>Good fit for</h3>
            </div>
            <ul className="sd-usage-list">
              {detail.goodFor.map((b, i) => (
                <li key={i}>
                  <span className="b-dot">✓</span>
                  <span className="b-body">
                    <span className="b-strong">{b.strong}</span>
                    {b.body}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="sd-usage-card bad">
            <div className="sd-usage-card-head">
              <span className="sd-usage-icon">×</span>
              <h3>Not designed for</h3>
            </div>
            <ul className="sd-usage-list">
              {detail.notFor.map((b, i) => (
                <li key={i}>
                  <span className="b-dot">×</span>
                  <span className="b-body">
                    <span className="b-strong">{b.strong}</span>
                    {b.body}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="sd-usage-note">
          <span className="n-ic">i</span>
          <span>
            This solution is contributed by the community. UX4G is not responsible for
            its creation or ongoing maintenance. For UX4G core components and patterns
            that are maintained by UX4G, see the
            {" "}<a href="UX4G Components.html">Components</a> and
            {" "}<a href="UX4G Patterns.html">Patterns</a> sections.
          </span>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Related solution card ─────────────── */
function RelatedCard({ s }) {
  const href = "UX4G Made by You Solution.html?id=" + slugify(s.name);
  return (
    <a className="solution-card" href={href}>
      <div className={"sol-thumb t-" + s.type}>
        <div className="sol-mock">
          <SolutionVisual id={s.name} type={s.type}/>
        </div>
        <span className={"type-badge sol-type-pin " + s.type}>
          <span className="t-ic">{TYPE_ICON[s.type]}</span>
          <span className="t-label">{s.type}</span>
        </span>
      </div>
      <div className="sol-body">
        <h3 className="sol-name">{s.name}</h3>
        <span className="sol-dept">{s.org}</span>
      </div>
    </a>
  );
}

/* ─────────────── More solutions ─────────────── */
function MoreSolutions({ activeName }) {
  const others = SOLUTIONS.filter((s) => s.name !== activeName).slice(0, 3);
  return (
    <section className="sd-more" data-screen-label="More solutions">
      <div className="container">
        <div className="sd-more-head">
          <div>
            <span className="mby-eyebrow">From the community</span>
            <h2>More solutions</h2>
          </div>
          <p className="sub">
            Other components, patterns and flows shared by teams across India,
            all UX4G-reviewed and ready to adapt.
          </p>
        </div>

        <div className="sd-more-grid">
          {others.map((s) => <RelatedCard key={s.name} s={s}/>)}
        </div>

        <div className="sd-browse-all">
          <a href="UX4G Made by You All Solutions.html">
            Browse all solutions <span className="arr">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── App ─────────────── */
function App() {
  const { toasts, push } = useToasts();
  const stub = useCallback((n) => push(`${n}, page coming soon`), [push]);

  const slug = useMemo(() => resolveSlug(), []);
  const solution = useMemo(
    () => SOLUTIONS.find((s) => slugify(s.name) === slug) || SOLUTIONS[0],
    [slug]
  );
  const detail = DETAILS[slug] || DETAILS[slugify(SOLUTIONS[0].name)];

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.title = `${solution.name} · Made by You · UX4G Design System`;
    }
  }, [solution.name]);

  return (
    <>
      <SiteNavbar/>
      <main className="mbys-page">
        <Header solution={solution} detail={detail}/>
        <PreviewCarousel solution={solution} detail={detail}/>
        <WhenToUse detail={detail}/>
        <MoreSolutions activeName={solution.name}/>
      </main>
      <SiteFooter/>
      <Toasts items={toasts}/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
