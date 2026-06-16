/* global React, ReactDOM */
/* Pattern category: Feedback & Communication — full data-driven build */

/* ───────── Frame mockups ───────── */
const F = {
  /* ── 9.1 Inline feedback ── */
  FieldStates: (
    <PtMock>
      <MIn label="₹1,80,000" />
      <MAlert kind="success">Amount format looks correct.</MAlert>
      <MIn label="Mobile · 9876543" />
      <MAlert kind="error">Enter a valid 10-digit number.</MAlert>
      <MIn label="Aadhaar number" />
      <MS>Enter 12 digits — we'll prefill your name and address.</MS>
    </PtMock>
  ),
  ConditionalGuidance: (
    <PtMock>
      <MS>Category · SC ▾</MS>
      <MAlert kind="warn">Since you selected SC, please upload your caste certificate in the Documents step.</MAlert>
    </PtMock>
  ),
  OfficerNote: (
    <PtMock>
      <div style={{ background: "#fff3e0", padding: 8, borderRadius: 6, borderLeft: "3px solid #c97a0c" }}>
        <MS><strong>Note from Revenue Inspector</strong> · 12 Apr 2026, 11:34 AM</MS>
        <MS>Please resubmit the income proof with a clearer scan — current file shows glare on the figures row.</MS>
      </div>
    </PtMock>
  ),
  RealTimeStatus: (
    <PtMock>
      <MRow><MIcon color="var(--primary)">⟳</MIcon><MLabel>Verifying income_proof.pdf</MLabel></MRow>
      <MProg pct={66} />
      <MS>Check 2 of 3 passed</MS>
    </PtMock>
  ),
  StatusVocab: (
    <PtMock>
      <MS><strong>Status colour reference</strong></MS>
      <MDiv />
      <MRow><MChip>Submitted</MChip><MS>Grey · #6C757D</MS></MRow>
      <MRow><MChip kind="warn">Under Review</MChip><MS>Amber</MS></MRow>
      <MRow><MChip kind="success">Approved</MChip><MS>Green</MS></MRow>
      <MRow><MChip kind="error">Rejected</MChip><MS>Red</MS></MRow>
      <MRow><MChip kind="purple">Escalated</MChip><MS>Dark Blue</MS></MRow>
    </PtMock>
  ),
  FieldRecovery: (
    <PtMock>
      <MIn label="98765" active />
      <MAlert kind="error">Mobile number must be 10 digits. You've entered 5.</MAlert>
      <MS>Format · +91 followed by 10 digits</MS>
    </PtMock>
  ),

  /* ── 9.2 Service completion + rating / feedback ── */
  CompletionRating: (
    <PtMock>
      <MCenter><MCheck /><MH>Income Certificate Downloaded</MH></MCenter>
      <MBtn kind="ghost">Save to DigiLocker</MBtn>
      <MDiv />
      <MS><strong>How was your experience with this service?</strong></MS>
      <MRow><MChip>★</MChip><MChip>★</MChip><MChip>★</MChip><MChip kind="warn">★</MChip><MChip>★</MChip></MRow>
    </PtMock>
  ),
  DimensionRatings: (
    <PtMock>
      <MS>Was the form easy to fill?</MS>
      <MRow><MChip>😡</MChip><MChip>😞</MChip><MChip>😐</MChip><MChip>🙂</MChip><MChip kind="success">😊</MChip></MRow>
      <MS>Was status tracking clear?</MS>
      <MRow><MChip>😡</MChip><MChip>😞</MChip><MChip kind="warn">😐</MChip><MChip>🙂</MChip><MChip>😊</MChip></MRow>
      <MS>Was processing time acceptable?</MS>
      <MRow><MChip>😡</MChip><MChip kind="error">😞</MChip><MChip>😐</MChip><MChip>🙂</MChip><MChip>😊</MChip></MRow>
    </PtMock>
  ),
  ThankYou: (
    <PtMock>
      <MCenter><MCheck /><MH>Thank you for your feedback</MH><MS>Your input helps improve government services.</MS></MCenter>
      <MS>Returning to My Applications in 4s…</MS>
    </PtMock>
  ),
  AlreadyRated: (
    <PtMock>
      <MS>You rated this service on 11 Apr 2026</MS>
      <div style={{ opacity: 0.6 }}>
        <MRow><MChip kind="warn">★</MChip><MChip kind="warn">★</MChip><MChip kind="warn">★</MChip><MChip kind="warn">★</MChip><MChip>★</MChip></MRow>
      </div>
      <MLabel><span style={{ color: "var(--primary)" }}>Edit your feedback</span></MLabel>
    </PtMock>
  ),
  LowRatingFollowup: (
    <PtMock>
      <MS><strong>Sorry to hear that.</strong> What went wrong?</MS>
      <MRow><MChip>Too many steps</MChip><MChip>Unclear status</MChip></MRow>
      <MRow><MChip>Document upload</MChip><MChip>Took too long</MChip></MRow>
      <MIn label="Tell us more (optional)" />
      <MBtn>Submit feedback</MBtn>
    </PtMock>
  ),
  AnonymousFeedback: (
    <PtMock>
      <MAlert kind="info">Feedback is anonymous unless you tick "Contact me about this".</MAlert>
      <MS>☐ Contact me about this feedback</MS>
      <MBtn kind="ghost">Submit anonymously</MBtn>
    </PtMock>
  ),
  OfficerDashboardCSAT: (
    <PtMock>
      <MS>Revenue Dept · Income Certificate</MS>
      <MH>CSAT this week · 4.2 ★</MH>
      <MRow><MChip kind="success">↑ 0.3 vs last week</MChip></MRow>
      <MDiv />
      <MS>Top friction · Document upload (38%)</MS>
      <MS>Top praise · Quick processing (52%)</MS>
    </PtMock>
  ),

  /* ── 9.3 Contact & support ── */
  HelpLanding: (
    <PtMock>
      <MH>Help Centre</MH>
      <MIn label="🔍 Search help articles" active />
      <MRow><MChip>Application Issues</MChip></MRow>
      <MRow><MChip>Documents</MChip><MChip>Payments</MChip></MRow>
      <MRow><MChip>Account</MChip><MChip>Technical</MChip></MRow>
    </PtMock>
  ),
  FaqArticle: (
    <PtMock>
      <MS>Help › Application Issues</MS>
      <MH>How do I track my application?</MH>
      <MS>1 · Sign in · 2 · My Applications · 3 · Tap on the application card → status tracker.</MS>
      <MDiv />
      <MS>Was this helpful?</MS>
      <MRow><MBtn kind="ghost">👍 Yes</MBtn><MBtn kind="ghost">👎 No</MBtn></MRow>
    </PtMock>
  ),
  ContactOptions: (
    <PtMock>
      <MH>Still need help?</MH>
      <MDiv />
      <MS>📞 Phone · 1800-XXX-XXXX</MS>
      <MS>Toll-free · Mon–Sat 9 AM – 6 PM</MS>
      <MBtn>Call now</MBtn>
      <MDiv />
      <MRow><MChip kind="success">● Available</MChip><MLabel>Live chat</MLabel></MRow>
      <MBtn kind="ghost">Start chat</MBtn>
    </PtMock>
  ),
  CscLocator: (
    <PtMock>
      <MH>Find a CSC near you</MH>
      <MS>Visit a Common Service Centre for in-person help.</MS>
      <MIn label="📍 Pin code or area" />
      <MBtn>Find CSC centres</MBtn>
      <MLabel>Opens csc.gov.in</MLabel>
    </PtMock>
  ),
  GrievanceFile: (
    <PtMock>
      <MH>Raise a grievance</MH>
      <MS>Routes via CPGRAMS · Govt of India</MS>
      <MIn label="Application ID · MH-IC-2026-887214" />
      <MIn label="Category · Delay in processing ▾" />
      <MIn label="Describe the issue" />
      <MBtn>Submit grievance</MBtn>
    </PtMock>
  ),
  GrievanceTrack: (
    <PtMock>
      <MS>Grievance · CPGRAMS-MH/2026/0042178</MS>
      <MH>Under review at Revenue Dept</MH>
      <MProg pct={50} color="#c97a0c" />
      <MS>SLA · 12 of 30 days elapsed</MS>
      <MRow><MChip kind="warn">Assigned</MChip><MLabel>Revenue Inspector · Pune</MLabel></MRow>
    </PtMock>
  ),
  OfficerQueue: (
    <PtMock>
      <MS>Officer queue · Revenue Inspector</MS>
      <MH>14 open grievances</MH>
      <MRow><MChip kind="error">3 SLA-breaching</MChip><MChip kind="warn">5 due this week</MChip></MRow>
      <MDiv />
      <MRow><MChip>#42178</MChip><MLabel>Delay · Day 12 of 30</MLabel></MRow>
      <MRow><MChip kind="error">#42091</MChip><MLabel>SLA breached · Day 31</MLabel></MRow>
    </PtMock>
  ),
  HelplineDown: (
    <PtMock>
      <MAlert kind="warn">Live chat is offline right now. Try phone (1800-XXX-XXXX) or leave a message.</MAlert>
      <MIn label="Your message" />
      <MBtn>Send message</MBtn>
      <MS>We reply within 1 working day.</MS>
    </PtMock>
  ),

  /* ── 9.4 Language switcher ── */
  LangHeader: (
    <PtMock>
      <MRow><MChip kind="purple">🌐 English ▾</MChip></MRow>
      <MS>Tap to switch language</MS>
    </PtMock>
  ),
  LangDropdown: (
    <PtMock>
      <MRow><MChip kind="purple">✓ English</MChip></MRow>
      <MRow><MChip>हिंदी (Hindi)</MChip></MRow>
      <MRow><MChip>मराठी (Marathi)</MChip></MRow>
      <MRow><MChip>தமிழ் (Tamil)</MChip></MRow>
      <MLabel><span style={{ color: "var(--primary)" }}>See all 22 languages →</span></MLabel>
    </PtMock>
  ),
  LangModal: (
    <PtMock>
      <MH>Choose your language</MH>
      <MIn label="🔍 Search languages" />
      <MRow><MChip kind="purple">EN</MChip><MChip>HI</MChip><MChip>MR</MChip></MRow>
      <MRow><MChip>TA</MChip><MChip>TE</MChip><MChip>BN</MChip></MRow>
      <MRow><MChip>GU</MChip><MChip>PA</MChip><MChip>KN</MChip></MRow>
      <MRow><MChip>ML</MChip><MChip>OR</MChip><MChip>AS</MChip></MRow>
    </PtMock>
  ),
  LangFirstVisit: (
    <PtMock>
      <MH>Choose your preferred language</MH>
      <MS>You can change this anytime in the header.</MS>
      <MRow><MChip>English</MChip><MChip>हिंदी</MChip></MRow>
      <MRow><MChip>मराठी</MChip><MChip>தமிழ்</MChip></MRow>
      <MBtn>Continue</MBtn>
      <MLabel>Or continue in English</MLabel>
    </PtMock>
  ),
  LangComingSoon: (
    <PtMock>
      <MRow><MChip>संथाली</MChip><MChip kind="warn">Coming soon</MChip></MRow>
      <MS>Santhali translations are in review. Continue in English or Hindi for now.</MS>
      <MBtn kind="ghost">Continue in Hindi</MBtn>
    </PtMock>
  ),
  LangMissingString: (
    <PtMock>
      <MAlert kind="info">Some labels show in English because the Tamil translation is pending review.</MAlert>
      <MS>Affected: 12 of 340 strings on this page.</MS>
    </PtMock>
  ),
};

/* ───────── Hero stage ───────── */
function HeroViz() {
  return (
    <>
      <div className="ptc-vc" style={{ top: "20px", right: "10%", width: "230px", transform: "rotate(2deg)" }}>
        <MH>How was your experience?</MH>
        <MS>Income Certificate</MS>
        <MRow><MChip>★</MChip><MChip>★</MChip><MChip>★</MChip><MChip kind="warn">★</MChip><MChip>★</MChip></MRow>
        <MS>Tap a star to rate</MS>
      </div>
      <div className="ptc-vc" style={{ top: "140px", right: "40%", width: "210px", transform: "rotate(-3deg)" }}>
        <MH>Help Centre</MH>
        <MIn label="🔍 Search help articles" />
        <MRow><MChip>Phone</MChip><MChip kind="success">● Chat</MChip></MRow>
      </div>
      <div className="ptc-vc" style={{ top: "30px", right: "55%", width: "150px", transform: "rotate(-2deg)" }}>
        <MS>🌐 English ▾</MS>
        <MRow><MChip kind="purple">EN</MChip><MChip>हिं</MChip><MChip>த</MChip></MRow>
      </div>
    </>
  );
}

/* ───────── Pattern data ───────── */
const PATTERNS_DATA = [
  /* ───── 9.1 Inline Feedback & Status Communication ───── */
  {
    id: "inline-feedback",
    num: "PATTERN · 9.1",
    title: "Inline Feedback & Status Communication",
    lede: "How to tell the citizen what just happened without making them resubmit to find out. Validation lives next to the field, officer voices stay distinct from system noise.",

    whenToUse: [
      "Any form field that can be validated as the citizen types or blurs.",
      "Conditional sections of a form that depend on a prior answer (caste category, scheme eligibility, income slab).",
      "Communicating an officer's clarification or rejection reason back to the citizen inside a form.",
      "Showing the live verification state of an uploaded document or external API call.",
    ],
    whenNotFor: "Page-level success or error events — those use a banner or modal, not inline field feedback. Marketing or promotional content — inline feedback is a functional channel only.",

    flow: [
      "Citizen types or selects",
      "Inline validate · success / error / hint",
      "Conditional sections appear",
      "Officer note routed back",
      "Status colour applied consistently",
    ],

    screensSet: (() => {
      const base = "assets/images/pattern-screens/feedback/inline";
      const flow = [
        { id: "frame-1", label: "Positive inline validation",
          desc: "Confirm a value is good the moment it parses, so the citizen knows they are on track without waiting for Submit to reveal it." },
        { id: "frame-2", label: "Field-level error",
          desc: "When a field fails, name the rule and the value the citizen typed. Generic 'Invalid' forces a guess, specific text gives a fix." },
        { id: "frame-3", label: "Neutral hint",
          desc: "Set expectations before the citizen types, so they know the format and what the system will do with the value once it lands." },
        { id: "frame-4", label: "Conditional guidance",
          desc: "When an earlier answer changes what comes next, surface the new requirement the instant it applies, not after a save the citizen never made." },
        { id: "frame-5", label: "Officer note to citizen",
          desc: "A message from a named human sits differently from a system warning. Designation, date, and a clear voice keep the officer accountable and the citizen oriented." },
        { id: "frame-6", label: "Real-time verification status",
          desc: "When the system checks a document in stages, narrate each stage so the citizen sees motion instead of guessing whether the upload stalled." },
      ];
      const mk = (device, layout, suffix) => ({
        id: layout.id, label: layout.label,
        screens: flow.map((s) => ({
          id: device + "-" + layout.id + "-" + s.id,
          label: s.label, desc: s.desc,
          src: base + "/" + device + "-default-" + s.id + "-type-" + suffix + ".png",
        })),
      });
      return {
        intro: "Six moments in a form's life where the citizen needs to know where they stand, from a passing field to an officer's clarification routed back into the page.",
        devices: [
          { id: "desktop", label: "Desktop", layouts: [
            mk("desktop", { id: "card",       label: "Card" },        "card"),
            mk("desktop", { id: "fullscreen", label: "Full screen" }, "desktop-full"),
          ] },
          { id: "mobile",  label: "Mobile",  layouts: [
            mk("mobile",  { id: "fullscreen", label: "Full screen" }, "full-screen"),
            mk("mobile",  { id: "card",       label: "Card" },        "card"),
          ] },
        ],
      };
    })(),

    screens: [
      { name: "Field-level feedback", desc: "Green, red, grey states inline below fields. Colour is never alone — always paired with text.", frame: F.FieldStates },
      { name: "Conditional guidance", desc: "Triggered by dropdown answer — appears instantly without saving the form.", frame: F.ConditionalGuidance },
      { name: "Officer note", desc: "Distinct amber card with officer designation, date, and the clarification text.", frame: F.OfficerNote },
      { name: "Real-time status", desc: "Document verification with inline progress bar and step counter.", frame: F.RealTimeStatus },
      { name: "Status colour vocabulary", desc: "Reference frame — the single source of truth for status colours across the platform.", frame: F.StatusVocab },
    ],

    components: [
      { name: "Alert · all variants" }, { name: "Progress Indicator" }, { name: "Badge" }, { name: "Card" }, { name: "Input" },
    ],

    behaviour: [
      "Field-level validation fires on blur for length / format checks, on submit for cross-field rules — never on every keystroke.",
      "Conditional guidance appears immediately when the trigger changes; it does not require a Save tap.",
      "Officer notes are visually distinct from system messages — amber left-border, officer name + designation, timestamp always visible.",
      "Colour is paired with an icon or text label — never used alone. Reds use an alert icon, greens a tick, amber an info or warning glyph.",
      "Status colour pairings are documented once and referenced everywhere — never invent a new pairing per screen.",
    ],

    edgeCases: [
      "Conditional guidance change after form save: re-validate the dependent fields and surface any new requirements before submit.",
      "Officer note arrives while citizen is editing: append below current draft with a clear 'new note' indicator, do not overwrite input.",
      "Two errors on one field (format + range): show the actionable one first; never stack red walls.",
      "Real-time verification times out: keep the field editable, fall back to async verification with a status chip.",
    ],

    doDont: [
      { do: "Place success / error inline below the field with both colour and icon.", dont: "Rely on red text alone — fails WCAG 1.4.1 (use of colour)." },
      { do: "Make the status-colour vocabulary the single source of truth — link to it from your team handbook.", dont: "Invent a new shade for 'Pending verification' that does not exist in the vocabulary table." },
      { do: "Show officer designation and date on every note so the citizen knows who said what when.", dont: "Style officer notes like generic system toasts — they get ignored." },
    ],

    a11y: [
      "Field errors are linked to the input via aria-describedby and announced via aria-live='polite'.",
      "Status chips include an off-screen text label (e.g. 'status: under review') in addition to the colour.",
      "Officer note region has role='note' and an accessible name 'Officer message from <designation>'.",
      "All foreground / background pairings in the status vocabulary meet WCAG 2.1 AA 4.5:1 for text.",
    ],

    related: [
      { tag: "After", name: "Service Completion & Feedback", href: "#completion", desc: "Once the service ends, capture the rating." },
      { tag: "Pair with", name: "Contact & Support", href: "#contact", desc: "Citizens turn to support when inline feedback can't unblock them." },
    ],

    compliance: {
      law: "WCAG 2.1 AA · Use of Colour (1.4.1) · Contrast (1.4.3)",
      body: [
        "Colour alone must never communicate state — every status pairs colour with text or an icon.",
        "Status chips and inline alerts meet 4.5:1 contrast for text and 3:1 for UI components.",
        "Government accessibility guidelines (GIGW 3.0) reinforce the same rule for all citizen-facing services.",
      ],
    },
    statusVocab: {
      intro: "Colour is never used alone. Every status maps to a colour family from the tag system. Switch the tag style above to compare Tonal, Filled, Outline, and Text. Hover any swatch for the semantic and base tokens.",
      items: [
        { name: "Submitted",              family: "brand",   meaning: "Initial state after citizen submits application." },
        { name: "Under review",           family: "warning", meaning: "Department reviewing the application." },
        { name: "Approved",               family: "success", meaning: "Application approved, not yet issued." },
        { name: "Rejected",               family: "error",   meaning: "Application rejected with reason." },
        { name: "Action needed",          family: "warning", meaning: "Citizen must take an action to proceed." },
        { name: "Action needed (urgent)", family: "error",   meaning: "Citizen must take an action to proceed (urgent)." },
        { name: "Issued",                 family: "success", meaning: "Certificate issued after approval." },
        { name: "Escalated",              family: "error",   meaning: "Lodge: escalated to higher authority." },
        { name: "Under appeal",           family: "warning", meaning: "Lodge: at appellate level." },
        { name: "Reopened",               family: "warning", meaning: "Lodge: complaint reopened." },
        { name: "Closed unsatisfied",     family: "neutral", meaning: "Lodge: closed without satisfaction." },
        { name: "Information",            family: "info",    meaning: "Any informational badge that does not map to a status." },
      ],
    },
    errorRecovery: {
      text: [
        "When inline validation fails, the error text names what is wrong and what to fix — never just 'Invalid'.",
        "Officer rejection inline notes always carry a 'Reupload' or 'Edit' action that re-opens the relevant step.",
      ],
      screens: [
        { name: "Field error with format hint", desc: "Error text names the rule and the citizen's current value — gives them enough to fix it without re-reading the label.", frame: F.FieldRecovery },
      ],
    },
  },

  /* ───── 9.2 Service Completion & Feedback ───── */
  {
    id: "completion",
    num: "PATTERN · 9.2",
    title: "Service Completion & Feedback",
    lede: "How to ask the citizen what they thought without sabotaging the moment they finally finished. Rating sits below the artefact, never on top of it, and a 'no' costs the citizen nothing.",

    whenToUse: [
      "Immediately after a citizen-facing service completes — certificate issued, benefit credited, appointment booked.",
      "On the success page itself, below the primary download / proceed action.",
      "When the team wants both a quick CSAT score and the option of richer dimension-level signal.",
    ],
    whenNotFor: "During a service — never interrupt the task with a rating prompt. After a failure — apologise and route to recovery, not a rating widget.",

    flow: [
      "Service completes · success page",
      "Primary action (download / save)",
      "Inline 5-star prompt",
      "Optional dimension ratings",
      "Thank-you + auto-redirect",
    ],

    screensSet: (() => {
      const base = "assets/images/pattern-screens/feedback/completion";
      const flow = [
        { id: "frame-1", label: "Service Completed page", desc: "First confirm the citizen got what they came for. Saving to DigiLocker sits next to the download so the artefact survives a phone change." },
        { id: "frame-2", label: "Rate your experience", desc: "A request that lives below the certificate, not on top of it. Skip is a peer of Submit, so dismissing carries no cost." },
        { id: "frame-3", label: "Low-rating follow-up", desc: "When the citizen says it went badly, give them somewhere to put the why. Chip categories keep the burden low, the textarea stays optional." },
        { id: "frame-4", label: "Comment filled", desc: "Submit lights up only when there is something to submit. Premature enabling teaches citizens to ignore the button state." },
        { id: "frame-5", label: "Feedback submitted", desc: "Acknowledge the feedback, then get out of the way. No follow-up asks, no satisfaction-of-satisfaction loops." },
      ];
      return {
        intro: "Five frames showing how rating fits inside a completed service. Reward the citizen first, ask second, and let a no stay a no.",
        devices: [
          { id: "desktop", label: "Desktop", layouts: [
            { id: "card", label: "Card", screens: flow.map((s) => ({
              id: "desktop-card-" + s.id, label: s.label, desc: s.desc,
              src: base + "/desktop-default-" + s.id + "-type-card.png",
            })) },
          ] },
          { id: "mobile", label: "Mobile", layouts: [
            { id: "fullscreen", label: "Full screen", screens: flow.map((s) => ({
              id: "mobile-fullscreen-" + s.id, label: s.label, desc: s.desc,
              src: base + "/mobile-default-" + s.id + "-type-full-screen.png",
            })) },
            { id: "card", label: "Card", screens: flow.map((s, i) => ({
              id: "mobile-card-" + s.id, label: s.label, desc: s.desc,
              src: base + "/mobile-default-frame-pattern-type-service-completion-and-feedback-property-3-mobile-property-4-" + (i + 1) + "-property-5-card.png",
            })) },
          ] },
        ],
      };
    })(),

    screens: [
      { name: "Completion + rating", desc: "Certificate downloaded confirmation with a 5-star prompt inline (not modal). Citizen can ignore and leave.", frame: F.CompletionRating },
      { name: "Dimension ratings", desc: "3 emoji-scale rows shown after the main star tap — ease, clarity, time. Each is optional.", frame: F.DimensionRatings },
      { name: "Submitted thank-you", desc: "Confirmation + auto-redirect to My Applications after 4 seconds.", frame: F.ThankYou },
      { name: "Already rated", desc: "Past rating shown dimmed with an Edit link — never force a re-rate.", frame: F.AlreadyRated },
      { name: "Low-rating follow-up", desc: "When citizen gives 1-2 stars, show structured chips + free text to capture what went wrong.", frame: F.LowRatingFollowup },
      { name: "Anonymous by default", desc: "Feedback is anonymous unless the citizen opts in to be contacted.", frame: F.AnonymousFeedback },
    ],

    components: [
      { name: "Feedback widget" }, { name: "Button" }, { name: "Alert · success" }, { name: "Chip" }, { name: "Input · textarea" },
    ],

    behaviour: [
      "Feedback is always optional — never block the certificate download or the redirect behind a rating.",
      "Show feedback below the download button, not as a modal — do not interrupt the primary task.",
      "Dimension ratings only appear after the main star is tapped — never front-load three rows.",
      "Low rating (1-2 stars) reveals a structured follow-up; high rating skips straight to thank-you.",
      "Re-rating is allowed via Edit — the latest rating supersedes; both timestamps are stored.",
      "Submit is debounced 500ms so a double-tap doesn't double-submit.",
    ],

    edgeCases: [
      "Citizen leaves without rating: that is fine — no nag, no email reminder.",
      "Already rated this service: show the prior rating dimmed with an Edit link, don't show a fresh empty widget.",
      "Service partially failed (e.g. cert issued but DigiLocker save failed): rate the primary service only — the secondary failure has its own recovery path.",
      "Anonymous feedback that contains identifying detail: store as anonymous; never auto-link to the citizen's record.",
    ],

    doDont: [
      { do: "Show feedback inline below the success action.", dont: "Block the download with a modal that requires a rating first." },
      { do: "Treat the main star as the gateway — dimension ratings appear after.", dont: "Show 4 rating widgets at once and overwhelm the citizen on a success page." },
      { do: "Keep feedback anonymous by default; opt-in to contact.", dont: "Auto-attach the citizen's name and mobile to every CSAT submission." },
    ],

    a11y: [
      "Star widget is a radiogroup; each star is a radio with aria-label='Rate 1 of 5', up to 'Rate 5 of 5'.",
      "Emoji scales include text labels for screen readers — 'Very dissatisfied' through 'Very satisfied'.",
      "Thank-you state is announced via aria-live='polite' before the redirect timer starts.",
      "Auto-redirect can be cancelled by focusing any button on the page — never strand a slow reader.",
    ],

    related: [
      { tag: "Before", name: "Inline Feedback & Status Communication", href: "#inline-feedback", desc: "Field-level feedback during the service." },
      { tag: "After", name: "Contact & Support", href: "#contact", desc: "If the citizen reports a problem in low-rating follow-up." },
    ],

    dataHandling: [
      "Ratings are stored anonymous by default — the citizen's identity is attached only if they opt in to be contacted.",
      "Free-text comments are PII-scanned before they reach the officer dashboard; Aadhaar, mobile, and email are auto-redacted.",
      "Aggregate scores are surfaced at the service level (e.g. Income Certificate · Revenue Dept) — never at the individual officer level on the public dashboard.",
      "Raw feedback is retained 24 months; aggregate scores indefinitely. Citizens can request deletion of their own submissions.",
    ],
    officer: {
      body: [
        "Each department has a CSAT dashboard surfacing weekly score, top friction points, and top praise — anonymised at the service level.",
        "Low-rating themes ('document upload', 'unclear status') feed back into the next quarterly service-review meeting.",
        "Officer-level scores are never shown publicly — only to the officer themselves and their reporting authority, to avoid gaming.",
      ],
      screens: [
        { name: "Department CSAT card", desc: "Weekly CSAT with delta, top friction theme, top praise theme. Anonymised at the service level.", frame: F.OfficerDashboardCSAT },
      ],
    },
    integrations: [
      { sys: "Service analytics backend", purpose: "Stores ratings, comments, dimension scores, and surfaces aggregates to the officer dashboard." },
      { sys: "PII redaction service", purpose: "Strips Aadhaar / mobile / email from free-text comments before they hit the dashboard." },
      { sys: "DigiLocker", purpose: "Where the primary completion action — saving the issued certificate — lands." },
    ],
    notifications: [
      { moment: "Service completion", channel: "In-app", content: "Inline 5-star prompt on the success page itself." },
      { moment: "Low rating submitted", channel: "Email · service owner", content: "Themed digest weekly — never one email per submission, prevents alert fatigue." },
      { moment: "Edited rating", channel: "Internal log", content: "Both timestamps are stored; the latest rating wins on the dashboard." },
    ],
  },

  /* ───── 9.3 Contact & Support ───── */
  {
    id: "contact",
    num: "PATTERN · 9.3",
    title: "Contact & Support",
    lede: "How to help the citizen help themselves first, while keeping a real human one tap away. Self-service comes first, the phone number never hides, formal redress stays its own path.",

    whenToUse: [
      "On every signed-in dashboard via a persistent Help link in the header or footer.",
      "On error states where the citizen has exhausted inline recovery options.",
      "Whenever the citizen needs human help — phone, chat, email, in-person CSC, or a formal grievance.",
    ],
    whenNotFor: "Marketing or promotional contact (newsletters, surveys) — those have their own opt-in channel and never sit in the Help Centre.",

    flow: [
      "Help search · self-service",
      "FAQ article + helpful vote",
      "Contact options · phone / chat / email",
      "CSC locator · in-person",
      "Grievance · formal CPGRAMS route",
    ],

    screensSet: (() => {
      const base = "assets/images/pattern-screens/feedback/contact";
      const desktopFlow = [
        { id: "frame-1-help-centre-landing", label: "Help Centre landing", desc: "Lead with search and a small set of categories. Most citizens know roughly what they want, so let them type their way to it before calling." },
        { id: "frame-2-help-article",        label: "FAQ article",         desc: "Answer the question the citizen actually asked, then offer the next four likely questions so they rarely need to come back to search." },
        { id: "frame-3-contact-options",     label: "Still need help?",    desc: "When search did not unblock them, offer human channels in priority order. Phone comes first because government services must keep a voice available." },
        { id: "frame-4-live-chat",           label: "Live Chat Support",   desc: "Show real wait time before the citizen commits. A truthful 'two minutes' beats a promised 'instant' every time, and keeps the fallback honest." },
        { id: "frame-4-live-chat-active-session", label: "Help Centre · card layout", desc: "The same Help Centre composed inside a signed-in shell, so the citizen never loses the application they were partway through." },
        { id: "frame-5-complaint-submission", label: "File a complaint",   desc: "Formal redress is a separate path with its own SLA clock. Keep it visibly distinct so casual feedback never gets routed into a legal pipeline." },
        { id: "frame-6-csc-locator",          label: "Find your nearest Service Centre", desc: "For citizens who need a desk and a person, point them to the nearest centre with distance and hours, not just an address." },
      ];
      const mobileFlow = desktopFlow.filter((s) => s.id !== "frame-4-live-chat-active-session");
      const mk = (device, layoutId, layoutLabel, suffix, flow) => ({
        id: layoutId, label: layoutLabel,
        screens: flow.map((s) => ({
          id: device + "-" + layoutId + "-" + s.id,
          label: s.label, desc: s.desc,
          src: base + "/" + device + "-default-" + s.id + "-type-" + suffix + ".png",
        })),
      });
      return {
        intro: "Seven frames walk from search-first self-service into human channels, ending with a formal grievance route and an in-person centre for citizens who need a desk.",
        devices: [
          { id: "desktop", label: "Desktop", layouts: [
            mk("desktop", "card", "Card", "card", desktopFlow),
          ] },
          { id: "mobile", label: "Mobile", layouts: [
            mk("mobile", "fullscreen", "Full screen", "full-screen", mobileFlow),
            mk("mobile", "card",       "Card",        "card",        mobileFlow),
          ] },
        ],
      };
    })(),

    screens: [
      { name: "Help centre landing", desc: "Search + 5 category cards. Self-service first — phone is below the fold but the toll-free number is in the footer of every page.", frame: F.HelpLanding },
      { name: "FAQ article", desc: "Accordion answer + helpful Yes/No vote. Feeds back into the Help Centre's ranking.", frame: F.FaqArticle },
      { name: "Contact options", desc: "Phone, chat, email, walk-in — in priority order. Phone always visible.", frame: F.ContactOptions },
      { name: "CSC locator", desc: "External link to csc.gov.in for in-person help — citizens may need a VLE.", frame: F.CscLocator },
      { name: "File a grievance", desc: "Formal complaint routed via CPGRAMS · Govt of India for redressal with SLA.", frame: F.GrievanceFile },
      { name: "Track a grievance", desc: "Citizen view — current status, assigned officer, SLA progress, and escalation if breached.", frame: F.GrievanceTrack },
    ],

    components: [
      { name: "Search" }, { name: "Accordion" }, { name: "Card" }, { name: "Button" }, { name: "Feedback widget" }, { name: "Progress · SLA" },
    ],

    behaviour: [
      "FAQ comes before contact options on the page — reduces call volume by an order of magnitude.",
      "Toll-free phone number is always visible on the Contact panel and in the global footer.",
      "Live-chat availability is shown with a real status dot, not just an 'always there' badge.",
      "Grievance flow is a separate, formal path — never quietly mixed with general feedback.",
      "Grievance ID is shown immediately on file and stored under the citizen's My Applications screen.",
      "CSC locator is an external link with a clear 'Opens csc.gov.in' note — never opened in-app.",
    ],

    edgeCases: [
      "Helpline outside hours: show 'Mon–Sat 9 AM – 6 PM' next to the number; do not place a Call button at 2 AM.",
      "Live chat offline: hide the Start chat button and surface message-leave fallback that promises a 1-working-day reply.",
      "Anonymous grievance: allowed for sensitive complaints, but loses the ability to be tracked or auto-updated via SMS.",
      "Duplicate grievance: when the same citizen files twice for one application, merge to the earlier ID and notify.",
      "Language not understood at helpline: route to a multilingual agent; surface that wait time may be longer.",
      "Attachment too large at grievance file: chunked upload up to 5 MB, otherwise direct citizen to CSC.",
    ],

    doDont: [
      { do: "Show FAQ first — most citizens self-serve when given the chance.", dont: "Lead with the phone number and skip self-service entirely." },
      { do: "Keep the toll-free helpline visible on every page footer.", dont: "Hide the phone number three clicks deep — government services require a human path." },
      { do: "Surface a Was-this-helpful vote on FAQs and rank by it.", dont: "Order FAQs alphabetically and never improve them." },
      { do: "File grievances into CPGRAMS with an SLA clock.", dont: "Route formal complaints into the same generic inbox as feedback." },
    ],

    a11y: [
      "Help search is a native input with role='searchbox' and a visible label, not just a placeholder.",
      "FAQ accordion follows the WAI-ARIA accordion pattern — arrow keys cycle headings, Enter expands.",
      "Phone number is a tel: link, announced as 'Call 1800 toll free' for screen readers.",
      "Chat availability dot has an off-screen label — 'Live chat available' or 'Live chat offline'.",
      "Grievance form errors are associated with their inputs by aria-describedby and announced politely.",
    ],

    related: [
      { tag: "Before", name: "Inline Feedback & Status Communication", href: "#inline-feedback", desc: "Inline recovery is tried before contact." },
      { tag: "Pair with", name: "Language Switcher", href: "#language", desc: "Help content respects the citizen's language preference." },
    ],

    compliance: {
      law: "CPGRAMS guidelines · Right to Public Services Acts (state) · RTI Act 2005",
      body: [
        "Formal grievances are routed through the Centralised Public Grievance Redress and Monitoring System (CPGRAMS), the Govt of India's official portal.",
        "State Right-to-Public-Services Acts impose SLAs on each service — the grievance flow shows the citizen the applicable SLA clock.",
        "Records of grievances and their resolution are RTI-accessible — never store anything in this flow you would not be comfortable disclosing.",
        "Anonymous grievances are allowed but cannot benefit from SMS status updates — make that trade-off visible up front.",
      ],
    },
    channels: [
      { channel: "Web", ico: "💻", body: "Help Centre, FAQs, grievance form, chat, contact directory — the canonical home." },
      { channel: "Mobile app", ico: "📱", body: "Same as web with a persistent Help icon in the bottom tab bar." },
      { channel: "SMS", ico: "✉️", body: "Outbound status updates only — citizens cannot file via SMS, but receive acknowledgement and status changes there." },
      { channel: "Toll-free helpline", ico: "📞", body: "1800-XXX-XXXX · Mon–Sat 9 AM – 6 PM · multilingual agents · CDAC IVR handles after-hours leave-a-message." },
      { channel: "Email", ico: "📧", body: "support@<department>.gov.in for non-urgent queries; 1 working day reply SLA." },
      { channel: "In-person · CSC", ico: "🏢", body: "Common Service Centre — a VLE can file the grievance on the citizen's behalf and hand over the receipt." },
    ],
    officer: {
      body: [
        "Each grievance officer sees a queue ordered by SLA proximity — breaches at the top, due-this-week next.",
        "An SLA timer ticks down per grievance. At T-3 days, the officer gets an alert; at breach, the case auto-escalates to the redressal authority above.",
        "Officers can request more information from the citizen via the same SMS / email channel — citizen reply re-opens the case in the officer's queue.",
        "Closure requires a resolution note that is visible to the citizen, an RTI-safe record, and the citizen's confirmation or a 7-day auto-close window.",
      ],
      screens: [
        { name: "Officer grievance queue", desc: "Ordered by SLA proximity — breaches first, due-this-week next. Day counters live.", frame: F.OfficerQueue },
      ],
    },
    integrations: [
      { sys: "CPGRAMS", purpose: "Govt of India grievance portal — formal grievances are filed and tracked here, not in a parallel ticketing tool." },
      { sys: "State grievance DB", purpose: "Per-state mirror that handles routing inside the state Right-to-Public-Services framework." },
      { sys: "Ticketing tool · Freshdesk-style", purpose: "Internal queue for officers; never the system of record — CPGRAMS / state DB is authoritative." },
      { sys: "SMS / email notification gateway", purpose: "Sends acknowledgement, status changes, SLA-breach alerts, and resolution notes." },
      { sys: "CDAC voice helpline IVR", purpose: "After-hours leave-a-message; multilingual; logs the call ID against the citizen's record." },
      { sys: "CSC portal", purpose: "VLE-mediated filing and retrieval at a Common Service Centre." },
    ],
    statusVocab: [
      { name: "Open", color: "Grey", hex: "#6C757D", meaning: "Filed, not yet acknowledged." },
      { name: "Acknowledged", color: "Blue", hex: "#1F6FEB", meaning: "Receipt issued; SLA clock started." },
      { name: "Assigned", color: "Amber", hex: "#C97A0C", meaning: "Routed to a named officer; awaiting first action." },
      { name: "Under review", color: "Amber", hex: "#C97A0C", meaning: "Officer is investigating; may request more information." },
      { name: "Resolved", color: "Green", hex: "#106C35", meaning: "Officer marked the issue addressed; awaiting citizen confirmation." },
      { name: "Closed", color: "Green", hex: "#0B5128", meaning: "Citizen confirmed, or auto-closed after 7 days of no response." },
      { name: "Reopened", color: "Amber", hex: "#C97A0C", meaning: "Citizen rejected the resolution; back into the officer's queue." },
      { name: "Escalated", color: "Dark Blue", hex: "#1F3F8B", meaning: "SLA breached or officer routed upward; new SLA at the next level." },
    ],
    errorRecovery: {
      text: [
        "Live chat offline: hide Start-chat, surface a message-leave fallback that promises a 1-working-day reply.",
        "CPGRAMS write fails: queue locally, mark the grievance ID as 'Pending sync', retry every 5 min for 24 h, then alert support.",
        "Attachment too large: ask the citizen to compress or visit a CSC where a VLE can scan / upload at higher quota.",
        "Language not understood at helpline: route to a multilingual agent and warn the citizen the wait may be longer.",
        "Duplicate grievance for one application: merge to the earlier ID and notify the citizen on both channels.",
      ],
      screens: [
        { name: "Helpline / chat offline", desc: "Falls back to a message form with a clear 1-working-day reply promise.", frame: F.HelplineDown },
      ],
    },
    notifications: [
      { moment: "Grievance filed", channel: "SMS + email", content: "Acknowledgement with the grievance ID, applicable SLA, and how to track." },
      { moment: "Assigned to officer", channel: "SMS", content: "Officer designation + name; tells the citizen who is now handling the case." },
      { moment: "More info requested", channel: "SMS + in-app", content: "Tap link to reply with a document or clarification; the case re-opens in the officer queue on reply." },
      { moment: "SLA T-3 days", channel: "Internal · officer", content: "Officer alerted that the SLA is about to breach; not sent to the citizen." },
      { moment: "SLA breached · escalation", channel: "SMS + email", content: "Citizen informed the case is escalated to the next redressal authority with a new SLA." },
      { moment: "Resolved", channel: "SMS + email", content: "Resolution note inline. 7-day window to confirm or reopen; auto-close otherwise." },
    ],
    vle: {
      text: "At a CSC, a VLE files the grievance on behalf of the citizen — useful when the citizen is offline, has low literacy, or has a complex attachment that exceeds the citizen's quota. The VLE's CSC ID is logged alongside the citizen's identity for audit.",
      flow: ["Citizen reaches CSC", "VLE authenticates", "VLE files via CPGRAMS portal", "Receipt printed for citizen", "Status SMS to citizen's mobile"],
      screens: [
        { name: "VLE-mediated grievance filing", desc: "CSC operator fills the grievance form on the citizen's behalf and prints the acknowledgement.", frame: F.GrievanceFile },
      ],
    },
  },

  /* ───── 9.4 Language Switcher ───── */
  {
    id: "language",
    num: "PATTERN · 9.4",
    title: "Language Switcher",
    lede: "How to meet every citizen in their own language without losing what they typed. Detect first, let the citizen override, and honour partial coverage with grace instead of silence.",

    whenToUse: [
      "On every page header, persistent and reachable in one tap.",
      "On the first-visit screen when no language preference has been stored.",
      "Inside settings as a permanent change option, separate from the header quick-switch.",
    ],
    whenNotFor: "Pages that only ever render in English (developer docs, raw API responses) — those should not pretend to offer translation.",

    flow: [
      "Detect from Accept-Language",
      "Header globe + current language",
      "Dropdown — 6 top languages",
      "Full modal — all 22 + English",
      "Re-render UI immediately",
    ],

    screensSet: (() => {
      const base = "assets/images/pattern-screens/feedback/language";
      const flow = [
        { id: "frame-1-header-selector",        label: "Choose your interface language", desc: "Start from a sensible guess based on the browser, and say so. The citizen sees a default they can trust or change in one tap." },
        { id: "frame-2-dropdown-open",          label: "Pick a language dropdown",       desc: "Show the few languages most likely to match this citizen first, with a clear way out to the full list when none of them fit." },
        { id: "frame-3-full-language-list",     label: "All scheduled languages",        desc: "Every constitutionally scheduled language belongs on this list, each rendered in its own script so the citizen recognises it at a glance." },
        { id: "frame-4-first-visit-prompt",     label: "Choose your preferred language", desc: "On a citizen's first visit, ask once and remember forever. A one-time choice is worth more than a header that gets ignored." },
        { id: "frame-5-inline-toggle",          label: "Inline language toggle",         desc: "Halfway through a form is the worst place to lose work, so a language swap repaints labels and keeps every value the citizen has already typed." },
        { id: "frame-6-content-not-available",  label: "Translation in progress",        desc: "Be honest when a translation is not ready. Offer a working fallback and a browser-translate escape rather than silently serving English." },
      ];
      const mk = (device, layoutId, layoutLabel, suffix) => ({
        id: layoutId, label: layoutLabel,
        screens: flow.map((s) => ({
          id: device + "-" + layoutId + "-" + s.id,
          label: s.label, desc: s.desc,
          src: base + "/" + device + "-default-" + s.id + "-type-" + suffix + ".png",
        })),
      });
      return {
        intro: "Six frames covering detection, override, the full 22-plus list, the first-visit welcome, mid-form switching, and an honest fallback when a translation is not ready.",
        devices: [
          { id: "desktop", label: "Desktop", layouts: [
            mk("desktop", "card",       "Card",        "card"),
            mk("desktop", "fullscreen", "Full screen", "fullscreen"),
          ] },
          { id: "mobile", label: "Mobile", layouts: [
            mk("mobile", "fullscreen", "Full screen", "full-screen"),
            mk("mobile", "card",       "Card",        "card"),
          ] },
        ],
      };
    })(),

    screens: [
      { name: "Header selector", desc: "Globe icon + current language + chevron. One tap reaches the dropdown.", frame: F.LangHeader },
      { name: "Dropdown — top 6", desc: "Most-used languages plus a 'See all 22 languages' link.", frame: F.LangDropdown },
      { name: "Full language modal", desc: "4×6 grid of all 23 scheduled languages with a search.", frame: F.LangModal },
      { name: "First-visit prompt", desc: "Full-screen language card for new users — picks the default from Accept-Language but lets the citizen override.", frame: F.LangFirstVisit },
      { name: "Coming soon variant", desc: "Languages that are not yet fully translated show a 'Coming soon' tag and route the citizen to a covered fallback.", frame: F.LangComingSoon },
    ],

    components: [
      { name: "Dropdown" }, { name: "Modal" }, { name: "Button" }, { name: "Alert · info" }, { name: "Search · in modal" },
    ],

    behaviour: [
      "Default language is detected from the browser Accept-Language header on first visit.",
      "Once selected, the preference is stored as a BCP 47 tag on the citizen's profile and as a cookie for anonymous sessions.",
      "Switching language re-renders the UI immediately — no page reload if the framework supports runtime locale swap.",
      "Numerals follow the language convention (Devanagari numerals for Hindi when the citizen prefers; Latin otherwise).",
      "Dates are formatted per the locale convention — DD MMM YYYY in English, DD MMMM YYYY in Hindi.",
      "Untranslated strings fall back to English (or Hindi) with a small note rather than showing keys or blanks.",
    ],

    edgeCases: [
      "Accept-Language not set or set to a language we do not support: default to English with a one-tap switch to Hindi.",
      "Translation not yet available for a chosen language: show 'Coming soon' tag and route to a covered fallback.",
      "Citizen switches mid-form: keep their input intact, re-render labels only — never reset the values.",
      "Mixed-script free text from the citizen: store in original Unicode, transliterate only for system logging.",
      "Right-to-left support: not yet required for the 22 scheduled languages, but the layout must not assume LTR-only.",
      "Audio / voice content untranslated: fall back to text only; never play English audio inside a Hindi page silently.",
    ],

    doDont: [
      { do: "Detect from Accept-Language as the default and let the citizen override on first visit.", dont: "Force every citizen to pick a language on every visit." },
      { do: "Render the language name in its own script — हिंदी not Hindi.", dont: "List 22 languages in Latin transliteration only." },
      { do: "Show a 'Coming soon' tag for languages still in translation review.", dont: "Show a language and serve half its strings in English with no warning." },
      { do: "Persist the preference as BCP 47 and apply on every session.", dont: "Reset to English every time the citizen signs out." },
    ],

    a11y: [
      "Language selector is a button with aria-haspopup and aria-expanded; the dropdown is a menu with role='menu'.",
      "Each language item has both its script name and an off-screen English name for screen readers ('हिंदी, Hindi').",
      "Switching language updates document.lang on the html element so screen readers swap voices.",
      "The full-language modal traps focus and can be dismissed with Escape.",
      "Selected language has aria-current='true' and a visible tick — not colour alone.",
    ],

    related: [
      { tag: "Pair with", name: "Contact & Support", href: "#contact", desc: "Help content respects the citizen's language preference." },
      { tag: "Before", name: "Inline Feedback & Status Communication", href: "#inline-feedback", desc: "All inline strings must be available in every supported language." },
    ],

    compliance: {
      law: "Constitution of India · Eighth Schedule · 22 scheduled languages",
      body: [
        "The Eighth Schedule lists 22 official languages — every UX4G implementation must plan a translation pipeline that covers all 22 plus English.",
        "Languages may be released incrementally; 'Coming soon' is acceptable as long as it is honest and points to a working fallback.",
        "The Official Languages Act and state-level language policies further mandate at least Hindi + English + the state's official language on every government service.",
      ],
    },
    dataHandling: [
      "Language preference is stored as a BCP 47 tag (en, hi-IN, mr, ta, etc.) on the citizen's profile.",
      "For anonymous sessions, the preference is stored in a first-party cookie with a 1-year expiry.",
      "Translation memory and glossaries are managed centrally; departments contribute terms but cannot override the canonical glossary mid-flow.",
      "Free-text citizen input is always stored in its original script — never transliterated server-side without explicit consent.",
    ],
    integrations: [
      { sys: "Translation memory · central glossary", purpose: "Authoritative source for every UI string across all 22 languages plus English." },
      { sys: "ICU MessageFormat runtime", purpose: "Handles pluralisation, gender, and number formatting per locale." },
      { sys: "BCP 47 locale resolver", purpose: "Maps Accept-Language headers and stored preferences to the closest supported locale." },
    ],
    errorRecovery: {
      text: [
        "Missing translation: fall back to English with a small inline note so the citizen knows it is not their browser misbehaving.",
        "Locale resolution fails: default to English, log the unresolved tag, and surface a one-tap Hindi switch.",
        "Locale swap mid-form fails to re-render: keep input intact, show a small banner offering a manual refresh that preserves the draft.",
      ],
      screens: [
        { name: "Untranslated strings fallback", desc: "Some labels remain in English with a clear note — never silently mix scripts without telling the citizen.", frame: F.LangMissingString },
      ],
    },
    notifications: [
      { moment: "First visit · no preference", channel: "In-app", content: "Full-screen language card with the Accept-Language guess pre-selected." },
      { moment: "Language switched", channel: "In-app polite toast", content: "Confirms the new language and stores the preference; announced via aria-live." },
      { moment: "Coming-soon language picked", channel: "In-app", content: "Explains the language is partial and proposes a fallback the citizen can opt into." },
    ],
  },
];

/* ───────── Sidebar items ───────── */
const SIDEBAR_PATTERNS = PATTERNS_DATA.map((p) => ({
  id: p.id,
  num: p.num,
  title: p.title,
  subs: PtPatternSubs(p),
}));

function App() {
  return (
    <>
      <PtNavbar />
      <main className="ptc-page">
        <PtStickyBar patterns={SIDEBAR_PATTERNS} activeSlug="feedback" />
        <PtLeftNav activeSlug="feedback" />
        <PtHero
          slug="feedback"
          num="P-09"
          tag="P-09 · Feedback & Communication · Live"
          title="Feedback & Communication"
          desc="Inline field feedback, post-service rating capture, help-centre + contact paths including CPGRAMS grievance, and the 22-language switcher. The patterns that close the loop between citizen and government."
          meta={["4 patterns"]}
        >
          <img className="ptc-hero-img" src="assets/images/Feedback & Communication.png" alt="Feedback & Communication illustration" />
        </PtHero>

        <div className="ptc-layout">
          <div className="ptc-main">
            {PATTERNS_DATA.map((p) => <PtPatternFull key={p.id} p={p} />)}
          </div>
          <PtSidebar patterns={SIDEBAR_PATTERNS} />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
