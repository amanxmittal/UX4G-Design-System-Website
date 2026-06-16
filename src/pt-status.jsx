/* global React, ReactDOM */
/* Pattern category: Status & Tracking — full data-driven build */

/* ───────── Frame mockups ───────── */
const F = {
  /* — Application Status Tracker — */
  TrackerUnderReview: (
    <PtMock>
      <MS>INC-2026-MH-04127</MS>
      <MRow><MChip kind="warn">● Under Review</MChip></MRow>
      <MS>SLA · 8 days remaining</MS>
      <MProg pct={72} color="#c97a0c" />
      <MDiv />
      <MRow><MIcon color="#106c35">✓</MIcon><MLabel>Submitted 10 Apr</MLabel></MRow>
      <MRow><MIcon color="#106c35">✓</MIcon><MLabel>Verified 11 Apr</MLabel></MRow>
      <MRow><MIcon color="var(--primary)">●</MIcon><MLabel>Under Review</MLabel></MRow>
    </PtMock>
  ),
  TrackerActionNeeded: (
    <PtMock>
      <MAlert kind="error"><strong>Action Required ·</strong> Upload self-attested income proof by 15 Apr.</MAlert>
      <MBtn kind="danger">Upload now</MBtn>
      <MDiv />
      <MS>This card sits ABOVE the timeline — never inside events.</MS>
    </PtMock>
  ),
  TrackerRejection: (
    <PtMock>
      <MRow><MChip kind="error">Rejected</MChip></MRow>
      <MS><strong>Reason ·</strong> Income proof scan was too blurry.</MS>
      <MDiv />
      <MS><strong>What you can do</strong></MS>
      <MS>1 · Re-scan with better light</MS>
      <MS>2 · Ensure clear JPG/PDF</MS>
      <MBtn>Reapply</MBtn>
    </PtMock>
  ),
  TrackerDelay: (
    <PtMock>
      <MRow><MChip kind="warn">Delayed</MChip></MRow>
      <MS>SLA · 3 days overdue</MS>
      <MProg pct={100} color="#db372d" />
      <MAlert kind="warn">Additional field verification required due to address discrepancy.</MAlert>
      <MS>New expected · 25 Apr 2026</MS>
      <MLabel><span style={{ color: "var(--primary)" }}>Escalate this application →</span></MLabel>
    </PtMock>
  ),
  TrackerApproved: (
    <PtMock>
      <MRow><MChip kind="success">Approved</MChip></MRow>
      <MS>Your Income Certificate has been approved.</MS>
      <MS>Certificate will be issued in 2–3 working days.</MS>
      <MProg pct={85} color="#106c35" />
    </PtMock>
  ),
  TrackerIssued: (
    <PtMock>
      <MRow><MChip kind="success">Issued</MChip></MRow>
      <MBtn kind="success">Download Income Certificate (PDF)</MBtn>
      <MBtn kind="ghost">Save to DigiLocker</MBtn>
      <MS>Valid until 31 Mar 2027</MS>
    </PtMock>
  ),
  TrackerStale: (
    <PtMock>
      <MAlert kind="warn">Status hasn't updated since <strong>12 Apr</strong> — system reporting may be delayed.</MAlert>
      <MS>Last sync · 6 hours ago</MS>
      <MBtn kind="ghost">Refresh status</MBtn>
      <MLabel><span style={{ color: "var(--primary)" }}>Raise a grievance →</span></MLabel>
    </PtMock>
  ),

  /* — Grievance Tracker — */
  GrievanceEscalated: (
    <PtMock>
      <MS>GRV-2026-MH-04127</MS>
      <MRow><MChip kind="purple">● Escalated</MChip></MRow>
      <MAlert kind="warn">SLA · 3 days overdue</MAlert>
      <MDiv />
      <MS><strong>Level 1 · District Officer</strong></MS>
      <MS style={{ color: "var(--gray-500)" }}>Level 2 · State (pending)</MS>
      <MS style={{ color: "var(--gray-500)" }}>Level 3 · CPGRAMS</MS>
    </PtMock>
  ),
  GrievanceResolution: (
    <PtMock>
      <MRow><MChip kind="success">Resolved</MChip></MRow>
      <MAlert kind="success">Complaint resolved on 14 Apr — certificate issued.</MAlert>
      <MH>Are you satisfied with the resolution?</MH>
      <MBtn kind="success">Yes, satisfied</MBtn>
      <MBtn kind="ghost">No, not satisfied</MBtn>
      <MLabel>30 days to reopen</MLabel>
    </PtMock>
  ),
  GrievanceReopen: (
    <PtMock>
      <MH>Why are you not satisfied?</MH>
      <MIn label="Reason · Certificate still not issued ▾" active />
      <MIn label="Additional notes" />
      <MBtn kind="danger">Reopen complaint</MBtn>
      <MBtn kind="ghost">Cancel</MBtn>
    </PtMock>
  ),
  GrievanceCpgrams: (
    <PtMock>
      <MAlert kind="warn"><strong>External portal ·</strong> You will leave this portal and go to cpgrams.gov.in</MAlert>
      <MS>Your complaint reference will be carried over.</MS>
      <MBtn>Continue to CPGRAMS</MBtn>
      <MBtn kind="ghost">Stay on this portal</MBtn>
    </PtMock>
  ),

  /* — Slot Booking — */
  SlotScheduleCard: (
    <PtMock>
      <MAlert kind="warn"><strong>Inspection required</strong> for your Income Certificate.</MAlert>
      <MS>Schedule by 18 Apr 2026</MS>
      <MBtn kind="danger">Schedule now</MBtn>
    </PtMock>
  ),
  SlotSelection: (
    <PtMock>
      <MS>Mon 14 Apr · Pune District Office</MS>
      <MRow><MChip>9:00–9:30 · Booked</MChip></MRow>
      <MRow><MChip>10:00–10:30 · Available</MChip></MRow>
      <MRow><MChip kind="purple">● 11:00–11:30 · Selected</MChip></MRow>
      <MRow><MChip kind="warn">14:00 · Only 2 left</MChip></MRow>
    </PtMock>
  ),
  SlotConfirm: (
    <PtMock>
      <MH>Confirm slot</MH>
      <MS>Mon 14 Apr · 11:00–11:30 AM</MS>
      <MS>Revenue Inspector · 45 Patel Nagar, Kothrud, Pune</MS>
      <MAlert kind="info">Slots not reserved until confirmed.</MAlert>
      <MBtn>Confirm inspection</MBtn>
    </PtMock>
  ),
  SlotConfirmed: (
    <PtMock>
      <MCenter><MCheck /><MH>Inspection Scheduled</MH><MS>INSP-2026-MH-04127</MS></MCenter>
      <MBtn kind="ghost">Add to calendar</MBtn>
      <MBtn kind="ghost">Get directions</MBtn>
    </PtMock>
  ),
  SlotReschedule: (
    <PtMock>
      <MAlert kind="warn">You have <strong>1 reschedule</strong> remaining (max 2 per application).</MAlert>
      <MIn label="New date · 16 Apr 2026 ▾" active />
      <MBtn kind="danger">Reschedule inspection</MBtn>
    </PtMock>
  ),
};

/* ───────── Hero stage ───────── */
function HeroViz() {
  return (
    <>
      <div className="ptc-vc" style={{ top: "20px", right: "10%", width: "230px", transform: "rotate(2deg)" }}>
        <MS>INC-2026-MH-04127</MS>
        <MRow><MChip kind="warn">● Under Review</MChip></MRow>
        <div style={{ marginTop: 8 }}>
          <MProg pct={72} color="#c97a0c" />
          <MLabel>8 days remaining · Expected 20 Apr</MLabel>
        </div>
      </div>
      <div className="ptc-vc" style={{ top: "150px", right: "40%", width: "200px", transform: "rotate(-3deg)" }}>
        <MAlert kind="error"><strong>Action Required ·</strong> Upload self-attested income proof by 15 Apr.</MAlert>
        <div style={{ marginTop: 6 }}><MBtn kind="danger">Upload now</MBtn></div>
      </div>
      <div className="ptc-vc" style={{ top: "10px", right: "50%", width: "160px", transform: "rotate(-2deg)" }}>
        <MRow><MIcon color="#106c35">✓</MIcon><MLabel>Submitted</MLabel></MRow>
        <MRow><MIcon color="#106c35">✓</MIcon><MLabel>Verified</MLabel></MRow>
        <MRow><MIcon color="var(--primary)">●</MIcon><MLabel>Under Review</MLabel></MRow>
      </div>
    </>
  );
}

/* ───────── Shared status vocabulary ───────── */
const STATUS_VOCAB = [
  { name: "Submitted",        color: "#3b5bdb", hex: "#3b5bdb", meaning: "Application received and ARN issued — no officer action yet." },
  { name: "Under Verification", color: "#c97a0c", hex: "#c97a0c", meaning: "Documents being validated by the verifying officer." },
  { name: "Action Needed",    color: "#db372d", hex: "#db372d", meaning: "Citizen must respond — upload, clarify, or re-sign — before SLA resumes." },
  { name: "Approved",         color: "#106c35", hex: "#106c35", meaning: "Decision in citizen's favour; issuance is the next mechanical step." },
  { name: "Issued",           color: "#0f7a3a", hex: "#0f7a3a", meaning: "Certificate or benefit dispatched — downloadable and verifiable." },
  { name: "Rejected",         color: "#a01818", hex: "#a01818", meaning: "Declined with a specific reason and a reapply path." },
];

/* ───────── Pattern data ───────── */
const PATTERNS_DATA = [
  {
    id: "app-tracker",
    num: "PATTERN · 4.1",
    title: "Application Status Tracker",
    lede: "How to tell a citizen where their application actually stands without making them guess. Every state names a reason, a next step, and an honest revised date.",
    whenToUse: [
      "Any service that runs longer than a single session — certificates, licences, benefit applications",
      "Wherever a citizen has a right to know SLA, current stage, and the next expected action",
      "On every channel — web, mobile, kiosk, SMS digest — using the same vocabulary",
    ],
    whenNotFor: "Instant transactions that complete in a single step (e.g., paying a fee that confirms immediately) — these need a receipt, not a tracker.",
    flow: [
      "Citizen opens \"My applications\"",
      "Open ARN → see status card",
      "Read timeline of stages",
      "Act on red card if shown",
      "Download once issued",
    ],
    screensSet: (() => {
      const base = 'assets/images/pattern-screens/status/app-tracker';
      const flow = [
        { id: 'under-review', label: 'Under review', desc: 'Tell the citizen the clock is running and where the work currently sits, without pretending more progress than has actually happened.' },
        { id: 'action-needed', label: 'Action needed', desc: 'When the wait is on the citizen, surface that demand above everything else and pause the service clock until they respond.' },
        { id: 'rejection', label: 'Rejection', desc: 'A rejection without a reason fails the citizen. Name the specific officer cause and pair it with a recoverable next step.' },
        { id: 'delay', label: 'Delay with reason', desc: 'When the original promise slips, replace it with a fresh date and a route to escalate, not a silent timer.' },
        { id: 'approved', label: 'Approved', desc: 'Confirm the decision early so the citizen can stop refreshing, while flagging that the signed artefact still takes a few days.' },
      ];
      const mk = (device, layout) => ({
        id: layout.id, label: layout.label,
        screens: flow.map((s) => ({
          id: device + '-' + layout.id + '-' + s.id,
          label: s.label, desc: s.desc,
          src: base + '/' + device + '-' + layout.id + '-' + s.id + '.png',
        })),
      });
      return {
        intro: 'Five states a citizen meets while waiting on a long service. Each one is honest about progress, the next move, and who owes whom.',
        devices: [
          { id: 'desktop', label: 'Desktop', layouts: [
            mk('desktop', { id: 'fullscreen', label: 'Full screen' }),
            mk('desktop', { id: 'card', label: 'Card' }),
          ] },
          { id: 'mobile',  label: 'Mobile',  layouts: [
            mk('mobile', { id: 'fullscreen', label: 'Full screen' }),
            mk('mobile', { id: 'card', label: 'Card' }),
          ] },
        ],
      };
    })(),
    screens: [
      { name: "Under Review", desc: "Status card with SLA donut + journey timeline beneath.", frame: F.TrackerUnderReview },
      { name: "Action Needed", desc: "Red card ABOVE timeline — never buried inside events.", frame: F.TrackerActionNeeded },
      { name: "Rejection", desc: "Specific reason + \"What you can do\" — generic rejection is never acceptable.", frame: F.TrackerRejection },
      { name: "Delay with reason", desc: "SLA overdue + new expected date + escalate link.", frame: F.TrackerDelay },
      { name: "Approved", desc: "Green — Certificate issuing in 2–3 days.", frame: F.TrackerApproved },
      { name: "Issued", desc: "Download + save to DigiLocker, validity date visible.", frame: F.TrackerIssued },
    ],
    components: [
      { name: "Journey Timeline" }, { name: "SLA Progress Indicator" }, { name: "Badge" },
      { name: "Button" }, { name: "Alert" }, { name: "Card" },
    ],
    behaviour: [
      "Every state has exactly one colour, one label, one CTA — citizens never have to guess what to do next.",
      "Rejection requires an officer-entered reason before the state can be set — the system blocks generic \"rejected\" submissions.",
      "Action Needed cards sit above the timeline and pause the SLA clock until the citizen responds.",
      "Status updates are pushed to SMS within 5 minutes of the officer event; the in-app view matches.",
    ],
    edgeCases: [
      "Rejection: show SPECIFIC reason, not \"Application rejected\" — officer must enter reason before rejecting.",
      "Delay: show \"Why delayed?\" expandable with reason plus revised date from department.",
      "Action Needed: red card ABOVE timeline — never buried inside timeline events.",
      "Issued: certificate download must remain available for minimum 5 years after issuance.",
    ],
    doDont: [
      { do: "Use one colour per state across web, SMS, and kiosk — keep the vocabulary identical.", dont: "Don't ship a generic \"Application rejected\" with no reason and no next step." },
      { do: "Show the revised expected date when a delay is declared.", dont: "Don't let the SLA timer keep counting silently after a delay — surface the new date." },
    ],
    a11y: [
      "Each timeline node has a text label — colour is never the only indicator of state.",
      "Action Needed card uses role=\"alert\" so screen readers announce it on arrival.",
      "Progress donut has an accessible name like \"SLA · 8 days remaining of 21\".",
    ],
    related: [
      { tag: "Pair with", name: "Real-time Progress", href: "#realtime", desc: "The live update layer behind the tracker." },
      { tag: "After", name: "Status Notifications", href: "#notifications", desc: "Off-channel touchpoints (SMS, email) for the same status events." },
      { tag: "Escalate to", name: "Grievance Tracker", href: "#grievance", desc: "If the SLA breaches and the citizen is stuck." },
    ],
    compliance: {
      law: "Right to Public Services Acts (state) · RTI Act 2005",
      body: [
        "State Right to Service Acts mandate disclosure of SLA, current stage, and the officer responsible — the tracker is how this is delivered.",
        "RTI Act 2005 entitles the citizen to know the status of any application — the tracker fulfils this without a formal RTI request.",
        "Generic rejection without a reason violates the duty of natural justice; the system must enforce a reason field.",
      ],
    },
    dataHandling: [
      "Status events are immutable — a state can be added but never silently overwritten; corrections appear as a new event with a reason.",
      "ARN (Application Reference Number) is the only identifier shown in SMS; PII (Aadhaar, name) never travels via SMS body.",
      "Tracker data is retained for 5 years post-issuance to support post-facto verification, audit, and RTI requests.",
    ],
    vle: "VLE operators access the same tracker via the citizen's ARN — they cannot change state, only view and assist. Every VLE view is logged with operator ID.",
    integrations: [
      { sys: "BPM / Workflow engine", purpose: "Source of truth for state transitions — ServiceNow, custom DBT trackers, or e-District backend." },
      { sys: "Notification gateway", purpose: "Pushes SMS / email / WhatsApp on every state change via TRAI-DLT templates." },
      { sys: "e-Sign + DigiLocker", purpose: "Issues the signed PDF and pushes it to the citizen's locker on \"Issued\"." },
    ],
    statusVocab: STATUS_VOCAB,
    errorRecovery: {
      text: [
        "If the backend hasn't reported a transition in 24 hours, mark the status \"Stale\" and offer a manual refresh + grievance link.",
        "Never auto-advance state on a timeout — silence means \"don't know\", not \"approved\".",
        "ARN mismatch (citizen searches with wrong digits) shows \"Application not found\" with a clear search hint, not a server error.",
      ],
      screens: [
        { name: "Stale status", desc: "Backend hasn't reported in 24h — offer refresh and a grievance path.", frame: F.TrackerStale },
      ],
    },
    notifications: [
      { moment: "Submitted",           channel: "SMS + in-app",  content: "ARN issued; expected SLA window." },
      { moment: "Under verification",  channel: "In-app",        content: "Officer name and stage; no SMS to reduce noise." },
      { moment: "Action needed",       channel: "SMS + in-app",  content: "Red alert — what to upload and by when." },
      { moment: "Approved / Issued",   channel: "SMS + email",   content: "Download link (ARN-bound, 24h signed URL)." },
      { moment: "SLA breach (system)", channel: "Email + in-app", content: "Auto-flagged to district officer; citizen sees escalate option." },
    ],
  },

  {
    id: "grievance",
    num: "PATTERN · 4.2",
    title: "Grievance Status Tracker with Escalation",
    lede: "How to show a stuck citizen exactly where their complaint sits and who owes them an answer. Escalation happens on the system, not on the citizen's persistence.",
    whenToUse: [
      "When a citizen is stuck — SLA breached, repeated rejection, or unresolved service issue",
      "Following any \"Action Needed\" in the application tracker that the citizen has fulfilled but state hasn't moved",
      "For service quality complaints that don't depend on an open application (officer conduct, kiosk failure)",
    ],
    whenNotFor: "Application status questions — those belong in the regular tracker. Don't make citizens file a grievance to know their status.",
    flow: [
      "Lodge complaint",
      "Level 1 · District Officer responds",
      "Auto-escalate if SLA breached",
      "Level 2 · State Officer",
      "Final escalation to CPGRAMS",
    ],
    screensSet: (() => {
      const base = 'assets/images/pattern-screens/status/grievance';
      const flow = [
        { id: 'overview', label: 'Overview', desc: 'Anchor the citizen on where their complaint stands now, who is acting on it, and how long they have been waiting at this level.' },
        { id: 'timeline', label: 'Timeline', desc: 'Show every officer action and citizen reply in order, so nothing the department did or did not do can quietly disappear.' },
        { id: 'escalation-tree', label: 'Escalation tree', desc: 'Make the path above the current officer visible from the start, so a citizen never wonders whether anyone senior knows.' },
        { id: 'officer-assigned', label: 'Officer assigned', desc: 'Name a real person with a designation and a way to reach them. Anonymous accountability is no accountability.' },
        { id: 'resolution-feedback', label: 'Resolution feedback', desc: 'Closure belongs to the citizen, not the officer. Ask whether they are satisfied before anyone marks this resolved.' },
        { id: 'reopen-flow', label: 'Reopen flow', desc: 'If the citizen is not satisfied, capture the specific why before reopening so the next officer starts with context, not silence.' },
      ];
      const mk = (device, layout) => ({
        id: layout.id, label: layout.label,
        screens: flow.map((s) => ({
          id: device + '-' + layout.id + '-' + s.id,
          label: s.label, desc: s.desc,
          src: base + '/' + device + '-' + layout.id + '-' + s.id + '.png',
        })),
      });
      return {
        intro: 'Six frames cover the arc from a stuck citizen to a closed complaint. Officers act, the system escalates on time, and the citizen owns closure.',
        devices: [
          { id: 'desktop', label: 'Desktop', layouts: [
            mk('desktop', { id: 'fullscreen', label: 'Full screen' }),
            mk('desktop', { id: 'card', label: 'Card' }),
          ] },
          { id: 'mobile',  label: 'Mobile',  layouts: [
            mk('mobile', { id: 'fullscreen', label: 'Full screen' }),
          ] },
        ],
      };
    })(),
    screens: [
      { name: "Escalated state", desc: "3-level escalation tree below timeline; current level highlighted.", frame: F.GrievanceEscalated },
      { name: "Resolution + feedback", desc: "Are you satisfied? Yes / No buttons; 30-day reopen window stated.", frame: F.GrievanceResolution },
      { name: "Reopen flow", desc: "Bottom-sheet — reason mandatory before reopen.", frame: F.GrievanceReopen },
    ],
    components: [
      { name: "Journey Timeline" }, { name: "Escalation Tree" }, { name: "SLA Progress Indicator" },
      { name: "Badge" }, { name: "Button" }, { name: "Alert" }, { name: "Modal" },
    ],
    behaviour: [
      "Escalation is auto-triggered when SLA breaches at any level — the citizen does not need to push.",
      "Each escalation level shows the responsible officer, SLA, and contact channel.",
      "Resolution closes the complaint only after the citizen marks satisfaction — silent timeouts default to \"open\".",
      "CPGRAMS handoff opens a fresh tab with a portal warning — the cpgrams.gov.in URL is shown in plain text.",
    ],
    edgeCases: [
      "Resolution satisfaction: if \"No\", mandatory reason field before complaint can be reopened.",
      "Reopen window: 30 days from resolution date — after 30 days, citizen must file a fresh complaint.",
      "CPGRAMS: warn user before redirect — \"You will leave this portal and go to cpgrams.gov.in\".",
      "Auto-escalation: system-triggered events appear in timeline as \"System auto-escalated on date\".",
    ],
    doDont: [
      { do: "Auto-escalate on SLA breach — don't make the citizen chase escalation.", dont: "Don't redirect to CPGRAMS silently — always show the external-portal warning first." },
      { do: "Capture a satisfaction reason on \"No\" — that's the signal for reopen.", dont: "Don't reset the SLA clock when escalating; the citizen's wait time carries forward." },
    ],
    a11y: [
      "Escalation tree uses a labelled list — each level is announced with role, name, SLA.",
      "CPGRAMS external-portal warning is read aloud as a live region before redirect.",
      "Reopen modal traps focus; ESC and explicit cancel both close it.",
    ],
    related: [
      { tag: "Precedes", name: "Application Status Tracker", href: "#app-tracker", desc: "Grievances usually start from a stuck application." },
      { tag: "Pair with", name: "Status Notifications", href: "#notifications", desc: "Escalation events trigger SMS to the citizen and the next-level officer." },
    ],
    compliance: {
      law: "CPGRAMS framework · Right to Public Services Acts (state)",
      body: [
        "CPGRAMS (cpgrams.gov.in) is the central grievance portal — final escalation must hand off there with reference continuity.",
        "State RTS Acts require a published escalation matrix; the tree in the UI mirrors the gazette notification.",
        "Satisfaction feedback is mandated as the official close criterion — silent timeouts cannot mark complaints \"resolved\".",
      ],
    },
    statusVocab: [
      { name: "Lodged",         color: "#3b5bdb", hex: "#3b5bdb", meaning: "Complaint accepted, reference issued." },
      { name: "In Progress",    color: "#c97a0c", hex: "#c97a0c", meaning: "Officer at current level is acting on it." },
      { name: "Escalated",      color: "#6f42c1", hex: "#6f42c1", meaning: "Auto-escalated due to SLA breach or citizen request." },
      { name: "Resolved",       color: "#106c35", hex: "#106c35", meaning: "Officer marked resolved; awaiting citizen satisfaction." },
      { name: "Closed",         color: "#5a5a5a", hex: "#5a5a5a", meaning: "Citizen confirmed satisfaction; reopen window started." },
      { name: "Reopened",       color: "#db372d", hex: "#db372d", meaning: "Citizen dissatisfied within 30 days; back to the next level." },
    ],
    officer: {
      body: [
        "Officer view shows queued grievances with SLA timers and auto-escalation flags.",
        "Officer must enter a resolution note before marking resolved — it appears verbatim in the citizen timeline.",
        "Officers cannot mark a complaint \"closed\" — only the citizen's satisfaction does that.",
      ],
    },
    errorRecovery: {
      screens: [
        { name: "CPGRAMS handoff", desc: "Explicit warning before leaving the portal; reference carried over.", frame: F.GrievanceCpgrams },
      ],
    },
  },

  {
    id: "slot-booking",
    num: "PATTERN · 4.3",
    title: "Inspection & Test Slot Scheduling",
    lede: "How to let a citizen pick a time without pretending the office has agreed yet. The slot is provisional, the address is navigable, and reschedules are honestly counted.",
    whenToUse: [
      "Field inspections (income certificate, property mutation, encroachment)",
      "In-person test or interview slots (driving test, recruitment)",
      "Document collection appointments at district offices",
    ],
    whenNotFor: "Walk-in services with no slot system, or fully digital flows that don't need a physical visit.",
    flow: [
      "Schedule action card appears",
      "Select date + time slot",
      "Confirm slot",
      "Officer confirms",
      "Add to calendar / get directions",
    ],
    screensSet: (() => {
      const base = 'assets/images/pattern-screens/status/slot-booking';
      const flow = [
        { id: 'inspection-notification', label: 'Inspection notification', desc: 'Make the new demand on the citizen unmissable, with the deadline named so they can choose when to deal with it.' },
        { id: 'slot-selection', label: 'Slot selection', desc: 'Show what is genuinely open, what is filling up, and what they have chosen, without reserving anything before the citizen commits.' },
        { id: 'confirmation', label: 'Confirmation', desc: 'Before locking the time, give the citizen a name to expect and an address they can actually navigate to from their phone.' },
        { id: 'confirmed', label: 'Confirmed', desc: 'Once the office accepts, hand the citizen the reference, drop the visit into their calendar, and put directions one tap away.' },
        { id: 'reschedule', label: 'Reschedule', desc: 'Be honest that reschedules are finite. Tell the citizen how many they have left before they spend the next one.' },
        { id: 'officer-auto-scheduled', label: 'Officer auto-scheduled', desc: 'When the office has to move the visit, the citizen still gets a named time, a reason, and the same route to push back.' },
      ];
      const mk = (device, layout) => ({
        id: layout.id, label: layout.label,
        screens: flow.map((s) => ({
          id: device + '-' + layout.id + '-' + s.id,
          label: s.label, desc: s.desc,
          src: base + '/' + device + '-' + layout.id + '-' + s.id + '.png',
        })),
      });
      return {
        intro: 'Six frames take a citizen from a new demand on their time to a confirmed visit. Choose, confirm, navigate, and keep reschedules honest.',
        devices: [
          { id: 'desktop', label: 'Desktop', layouts: [
            mk('desktop', { id: 'fullscreen', label: 'Full screen' }),
            mk('desktop', { id: 'card', label: 'Card' }),
          ] },
          { id: 'mobile',  label: 'Mobile',  layouts: [
            mk('mobile', { id: 'card', label: 'Card' }),
          ] },
        ],
      };
    })(),
    screens: [
      { name: "Schedule action card", desc: "Inspection required — Schedule now CTA, with deadline.", frame: F.SlotScheduleCard },
      { name: "Slot selection", desc: "Time slots as rows: available, selected, limited.", frame: F.SlotSelection },
      { name: "Confirmation", desc: "Inspector info + location map + Confirm.", frame: F.SlotConfirm },
      { name: "Confirmed", desc: "Reference + Add to calendar + Get directions.", frame: F.SlotConfirmed },
    ],
    components: [
      { name: "Slot Grid" }, { name: "Button" }, { name: "Alert" },
      { name: "Calendar Event Link" }, { name: "Card" },
    ],
    behaviour: [
      "Slots are visible but not reserved until the citizen confirms — \"Selected\" state is local-only.",
      "On confirm, the slot transitions to \"Pending officer confirmation\"; only after officer accept does it become firm.",
      "Reschedule is allowed twice per application — the third attempt requires officer intervention.",
      "Office address always carries a maps deep-link (Google or Apple) so citizens can navigate.",
    ],
    edgeCases: [
      "Citizen selects slot but officer must confirm — show \"Pending confirmation\" badge after booking.",
      "Reschedule limit: max 2 citizen-initiated reschedules per application.",
      "Office address: link to Google or Apple Maps — citizens need directions to physical location.",
      "Slot held in selection but never confirmed: auto-release after 10 minutes so others can book.",
    ],
    doDont: [
      { do: "Show the inspector's name, office, and a maps link on the confirmation screen.", dont: "Don't reserve the slot the moment the citizen taps it — only on explicit Confirm." },
      { do: "Tell the citizen how many reschedules remain before they take an action.", dont: "Don't let the third reschedule silently fail — route it to an officer with an explanation." },
    ],
    a11y: [
      "Each slot row has a complete spoken label (\"11 AM to 11 30 AM, Available\").",
      "Selected and \"only 2 left\" states are conveyed in text, not just colour.",
      "Maps link has rel=\"noopener\" and an aria-label naming the destination app.",
    ],
    related: [
      { tag: "Triggered by", name: "Application Status Tracker", href: "#app-tracker", desc: "An \"Inspection required\" action card from the tracker opens this flow." },
      { tag: "Pair with", name: "Status Notifications", href: "#notifications", desc: "Slot confirmation, T-24h reminder, and reschedule events go to SMS." },
    ],
    channels: [
      { channel: "Web (citizen)",  ico: "🖥️", body: "Full slot grid with reschedule control; maps deep-link on confirmation." },
      { channel: "Mobile app",     ico: "📱", body: "Compact slot list; OS calendar integration for add-to-calendar." },
      { channel: "SMS reminder",   ico: "✉️", body: "T-24h reminder with date, time, address, and reference — no PII." },
      { channel: "Officer console",ico: "🛡️", body: "Officer queue with capacity, walk-ins, and override slots." },
    ],
    vle: {
      text: "VLE operators can book slots on behalf of citizens with explicit consent and the citizen's mobile recorded. Reschedule limit applies to the application, not the channel.",
      flow: [
        "Citizen visits VLE",
        "VLE opens citizen's ARN",
        "Citizen confirms preferred date verbally",
        "VLE selects + confirms",
        "Receipt printed + SMS to citizen",
      ],
    },
    integrations: [
      { sys: "Officer scheduling backend", purpose: "Source of truth for capacity, walk-ins, and confirmed slots." },
      { sys: "Maps API (Google / Apple)",  purpose: "Deep-link from the address to turn-by-turn directions." },
      { sys: "Calendar (ICS feed)",        purpose: "Add-to-calendar generates an ICS file with location and reference." },
    ],
    errorRecovery: {
      text: [
        "If the officer rejects a selected slot (no longer available), notify the citizen immediately and offer the next 3 nearest slots.",
        "If the citizen no-shows, mark the slot \"Missed\" and force a reschedule — never silently auto-rebook.",
      ],
      screens: [
        { name: "Reschedule with limit", desc: "Citizen sees remaining reschedule count before committing.", frame: F.SlotReschedule },
      ],
    },
    notifications: [
      { moment: "Slot confirmed",    channel: "SMS + in-app",  content: "Date, time, address, reference INSP-XXXX." },
      { moment: "T-24h reminder",    channel: "SMS",           content: "Reminder with address and maps link." },
      { moment: "Rescheduled",       channel: "SMS + in-app",  content: "New slot + remaining reschedule count." },
      { moment: "Missed / no-show",  channel: "In-app",        content: "Prompt to reschedule before the application's overall SLA breaches." },
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
        <PtStickyBar patterns={SIDEBAR_PATTERNS} activeSlug="status-tracking" />
        <PtLeftNav activeSlug="status-tracking" />
        <PtHero
          slug="status-tracking"
          num="P-04"
          tag="P-04 · Status & Tracking · Live"
          title="Status & Tracking"
          desc="Application timelines, grievance escalation, and inspection slot scheduling. Every state has a specific colour, label and CTA — citizens never have to guess what to do next."
          meta={["3 patterns"]}
        >
          <img className="ptc-hero-img" src="assets/images/Status & Tracking.png" alt="Status & Tracking illustration" />
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
