/* global React, ReactDOM */
/* Pattern category: Dashboard & Applications — full data-driven build */

/* ───────── Frame mockups ───────── */
const F = {
  /* 7.1 Citizen dashboard — My Applications */
  CitizenHeader: (
    <PtMock>
      <MS>Good morning, Ramesh</MS>
      <MH>My Applications</MH>
      <MRow><MChip>Active 2</MChip><MChip kind="error">Action 1</MChip></MRow>
      <MRow><MChip kind="success">Done 5</MChip><MChip>Total 8</MChip></MRow>
    </PtMock>
  ),
  CitizenFilters: (
    <PtMock>
      <MRow><MChip kind="purple">● All 8</MChip><MChip>Active 2</MChip></MRow>
      <MRow><MChip>Needs action 1</MChip><MChip>Completed 5</MChip></MRow>
      <MDiv />
      <MH>Income Certificate</MH>
      <MS>Revenue Dept · INC-2026-MH-04127</MS>
      <MRow><MChip kind="warn">SLA · 8 of 15 days</MChip></MRow>
    </PtMock>
  ),
  CitizenActionCard: (
    <PtMock>
      <div style={{ borderLeft: "3px solid #db372d", paddingLeft: 8 }}>
        <MH>Income Certificate</MH>
        <MS>Upload income proof by 15 Apr</MS>
        <MRow><MChip kind="error">Action needed</MChip><MChip kind="warn">8 days left</MChip></MRow>
        <MBtn kind="danger">Upload now</MBtn>
      </div>
    </PtMock>
  ),
  CitizenCertificates: (
    <PtMock>
      <MS>Certificates · DigiLocker linked</MS>
      <MRow><MChip kind="success">Issued</MChip><MLabel>Birth Cert. · 22 Mar 2026</MLabel></MRow>
      <MRow><MChip kind="success">Issued</MChip><MLabel>Caste Cert. · 11 Feb 2026</MLabel></MRow>
      <MLabel><span style={{ color: "var(--primary)" }}>Open in DigiLocker →</span></MLabel>
    </PtMock>
  ),
  CitizenBenefits: (
    <PtMock>
      <MH>My Benefits</MH>
      <MRow><MChip kind="success">PM Kisan</MChip><MLabel>₹2,000 · 12 Apr</MLabel></MRow>
      <MRow><MChip kind="success">Ujjwala LPG</MChip><MLabel>Subsidy · Mar</MLabel></MRow>
      <MRow><MChip>Scholarship</MChip><MLabel>Under review</MLabel></MRow>
      <MLabel><span style={{ color: "var(--primary)" }}>DBT-Mission status →</span></MLabel>
    </PtMock>
  ),
  CitizenEmpty: (
    <PtMock>
      <MCenter>
        <div style={{ fontSize: 28 }}>📥</div>
        <MH>No active applications</MH>
        <MS>Start with one of these popular services:</MS>
      </MCenter>
      <MRow><MChip>Income Certificate</MChip></MRow>
      <MRow><MChip>Ration Card</MChip><MChip>Birth Cert.</MChip></MRow>
    </PtMock>
  ),

  /* 7.2 Officer dashboard */
  OfficerQueue: (
    <PtMock>
      <MS>Revenue Officer · Pune Tehsil</MS>
      <MH>My Queue · 14 cases</MH>
      <MRow><MChip kind="error">Breached 2</MChip><MChip kind="warn">At risk 3</MChip></MRow>
      <MRow><MChip kind="success">On track 9</MChip></MRow>
    </PtMock>
  ),
  OfficerCaseRow: (
    <PtMock>
      <MRow><MChip kind="error">SLA breach</MChip><MS>2 days over</MS></MRow>
      <MH>Income Certificate · INC-…04127</MH>
      <MS>Ramesh Kumar · Assigned 28 Mar</MS>
      <MRow><MChip>Verify docs</MChip></MRow>
      <MBtn>Open case</MBtn>
    </PtMock>
  ),
  OfficerSlaTimer: (
    <PtMock>
      <MS>SLA · Right to Public Services Act</MS>
      <MH>15 working days · day 11</MH>
      <MProg pct={73} color="#c97a0c" />
      <MAlert kind="warn">At risk · 4 days remaining</MAlert>
      <MBtn>Take action</MBtn>
    </PtMock>
  ),
  OfficerAssignment: (
    <PtMock>
      <MH>Reassign case</MH>
      <MS>INC-2026-MH-04127</MS>
      <MIn label="Choose officer · A. Patil ▾" active />
      <MIn label="Reason for reassignment" />
      <MBtn>Reassign</MBtn>
      <MBtn kind="ghost">Cancel</MBtn>
    </PtMock>
  ),
  OfficerBulkAction: (
    <PtMock>
      <MS>3 cases selected</MS>
      <MRow><MChip>Assign</MChip><MChip>Forward</MChip><MChip>Mark on-hold</MChip></MRow>
      <MAlert kind="info">Bulk actions log against your officer ID.</MAlert>
      <MBtn>Confirm</MBtn>
    </PtMock>
  ),
  OfficerEmpty: (
    <PtMock>
      <MCenter>
        <MCheck color="#106c35" />
        <MH>Queue cleared</MH>
        <MS>No cases assigned to you right now.</MS>
      </MCenter>
    </PtMock>
  ),

  /* 7.3 Service explorer */
  ExplorerHome: (
    <PtMock>
      <MH>Find a service</MH>
      <MIn label="Search · Income, Ration, Land…" active />
      <MRow><MChip kind="purple">● All</MChip><MChip>Certificates</MChip></MRow>
      <MRow><MChip>Benefits</MChip><MChip>Licences</MChip></MRow>
    </PtMock>
  ),
  ExplorerCategory: (
    <PtMock>
      <MS>Certificates · 24 services</MS>
      <MH>Income Certificate</MH>
      <MS>Revenue Dept · 15 working days · ₹50</MS>
      <MRow><MChip kind="success">Aadhaar e-KYC</MChip><MChip>DigiLocker</MChip></MRow>
      <MBtn>Apply now</MBtn>
    </PtMock>
  ),
  ExplorerDetail: (
    <PtMock>
      <MH>Income Certificate</MH>
      <MRow><MChip kind="purple">Revenue Dept</MChip></MRow>
      <MS>SLA · 15 working days · ₹50 fee</MS>
      <MAlert kind="info">Documents needed: Aadhaar, Address proof, Salary slip.</MAlert>
      <MBtn>Start application</MBtn>
      <MBtn kind="ghost">Save for later</MBtn>
    </PtMock>
  ),
  ExplorerRecommend: (
    <PtMock>
      <MS>Recommended for you</MS>
      <MRow><MChip kind="purple">PM Kisan</MChip><MLabel>Active</MLabel></MRow>
      <MS>Based on your profile + previous applications</MS>
      <MRow><MChip>Ration Card renewal</MChip></MRow>
      <MRow><MChip>Scholarship</MChip></MRow>
    </PtMock>
  ),
  ExplorerNoResults: (
    <PtMock>
      <MIn label="firearm licence" />
      <MAlert kind="warn">No matching services in Maharashtra. Try a different keyword or contact 1800-XXX.</MAlert>
      <MBtn kind="ghost">Browse all categories</MBtn>
    </PtMock>
  ),
};

/* ───────── Hero stage ───────── */
function HeroViz() {
  return (
    <>
      <div className="ptc-vc" style={{ top: "10px", right: "8%", width: "240px", transform: "rotate(2deg)" }}>
        <MS>Good morning, Ramesh</MS>
        <MDiv />
        <MRow style={{ gap: 6 }}><MChip>Active 2</MChip><MChip kind="error">Action 1</MChip></MRow>
        <MRow style={{ gap: 6 }}><MChip kind="success">Done 5</MChip><MChip>Total 8</MChip></MRow>
      </div>
      <div className="ptc-vc" style={{ top: "140px", right: "30%", width: "230px", transform: "rotate(-3deg)" }}>
        <div style={{ borderLeft: "3px solid #db372d", paddingLeft: 8 }}>
          <MRow><MChip kind="error">Action Needed</MChip></MRow>
          <MS>Income Certificate · Upload by 15 Apr</MS>
          <div style={{ marginTop: 6 }}><MBtn kind="danger">Upload now</MBtn></div>
        </div>
      </div>
      <div className="ptc-vc" style={{ top: "30px", right: "55%", width: "160px", transform: "rotate(-2deg)" }}>
        <MIcon color="var(--primary)">RK</MIcon>
        <div style={{ marginTop: 6 }}><MChip kind="success">Verified</MChip></div>
      </div>
    </>
  );
}

/* ───────── Pattern data ───────── */
const PATTERNS_DATA = [
  /* ───── 7.1 Citizen Dashboard ───── */
  {
    id: "my-apps",
    num: "PATTERN · 7.1",
    title: "Citizen Dashboard",
    lede: "How to bring a citizen back to one trusted place without making them hunt. Anything that needs them surfaces first, and the SLA clock stays visible on every active case.",

    whenToUse: [
      "Any signed-in citizen surface that summarises applications, certificates, and benefits.",
      "When a citizen returns to a portal after a previous interaction — the dashboard is the landing page after sign-in.",
      "When a service needs to surface action-required items without making the citizen hunt through tabs.",
    ],
    whenNotFor: "Anonymous landing pages or service discovery surfaces — use the Service Explorer pattern instead. Officer / admin queue views — those use the Officer Dashboard pattern.",

    flow: [
      "Sign in",
      "Dashboard loads",
      "Action-needed pinned",
      "Filter by status",
      "Open application or certificate",
    ],

    screensSet: (() => {
      const base = 'assets/images/pattern-screens/dashboard/my-applications';
      const flow = [
        { id: 'default', label: 'Default', desc: 'Returning citizen sees what needs them today, what is moving along, and what is already done, in that order.' },
        { id: 'empty', label: 'Empty state', desc: 'A first visit should never feel like a dead end. Three popular services give the citizen a way to begin.' },
        { id: 'search', label: 'Search', desc: 'When the list grows long, the citizen filters by what they remember, the service name or the reference they were given.' },
        { id: 'bulk-select', label: 'Bulk select', desc: 'Once a citizen has many closed cases, they need to tidy, save, or share several at once without opening each one.' },
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
        intro: 'Four frames showing how the dashboard greets a returning citizen, a brand-new citizen, someone hunting for one case, and someone tidying many at once.',
        devices: [
          { id: 'desktop', label: 'Desktop', layouts: [mk('desktop', { id: 'default', label: 'Default' })] },
          { id: 'mobile',  label: 'Mobile',  layouts: [mk('mobile',  { id: 'default', label: 'Default' })] },
        ],
      };
    })(),
    screens: [
      { name: "Dashboard header", desc: "Greeting line, citizen name, four status counts as chips.", frame: F.CitizenHeader },
      { name: "Filter tabs + cards", desc: "All / Active / Needs action / Completed. Each card shows service, department, status, SLA.", frame: F.CitizenFilters },
      { name: "Action-needed card", desc: "Red left-border, action chip, urgent CTA. Pinned to top regardless of date.", frame: F.CitizenActionCard },
      { name: "Certificates · DigiLocker", desc: "Issued certificates linked to DigiLocker for one-tap retrieval.", frame: F.CitizenCertificates },
      { name: "Benefits panel", desc: "DBT credits and active schemes with the most recent disbursal date.", frame: F.CitizenBenefits },
      { name: "Empty state", desc: "First-time users see three popular services as quick-start cards.", frame: F.CitizenEmpty },
    ],

    components: [
      { name: "Card" }, { name: "Badge" }, { name: "SLA Progress Indicator" },
      { name: "Tab" }, { name: "Filter Chip Group" }, { name: "Button" }, { name: "Empty State" },
    ],

    behaviour: [
      "Action-needed applications always pin to the top regardless of date — never sort them by recency.",
      "Dashboard renders citizen data only — never any other person's record, even partial, even cached, even on shared devices.",
      "SLA progress is shown on every active card; an overdue card replaces the donut with a red Overdue badge.",
      "Empty state always shows three popular services so a first-time user is never stuck on a blank screen.",
    ],

    edgeCases: [
      "Returning user: action-needed applications always pinned to top regardless of date.",
      "Empty state: show 3 most popular services as quick-start cards.",
      "SLA overdue: red Overdue badge replaces SLA donut when past deadline.",
      "Shared / family device: every dashboard load forces re-auth if last session was more than 30 minutes idle.",
    ],

    doDont: [
      { do: "Pin action-required items to the top so the citizen sees them on first paint.", dont: "Bury action-required items by sorting strictly by created date." },
      { do: "Show absolute SLA dates (Issued by 15 Apr 2026) on every active card.", dont: "Use vague relative phrasing like 'in a few days' for SLA deadlines." },
    ],

    a11y: [
      "Status counts are announced as text — '2 active, 1 needs action, 5 completed' — not just colour chips.",
      "Action-needed cards carry aria-label='Action required, Income Certificate' so screen-reader users hear urgency first.",
      "SLA progress has both a percentage and an absolute date in the accessible name.",
    ],

    related: [
      { tag: "After", name: "Officer Dashboard", href: "#officer-dashboard", desc: "The internal mirror image — same patterns, role-bound view." },
      { tag: "Before", name: "Service Explorer", href: "#service-explorer", desc: "How citizens discover new services to start." },
    ],

    compliance: {
      law: "DPDP Act 2023 · Right to Public Services Acts (state-wise)",
      body: [
        "DPDP — a citizen sees only their own data; no cross-account leakage even in cached lists or counts.",
        "Right to Public Services Acts mandate SLA disclosure on every government service — every active card surfaces the SLA window prominently.",
        "Sensitive identifiers (Aadhaar UID, account numbers) are masked on the dashboard surface; full values appear only inside an application's detail view after re-confirmation.",
      ],
    },
    dataHandling: [
      "Only the signed-in citizen's records are fetched — server-side authorisation, never client-side filtering of a wider response.",
      "Counts are computed server-side per session; the client never receives the IDs of other applications.",
      "Dashboard data is cached only in the session storage of an authenticated session; signing out purges the cache.",
    ],
    vle: {
      text: "At a CSC kiosk, the VLE opens the citizen's dashboard on their behalf after biometric authentication. The kiosk variant hides certain personal financial details (bank balances, full account numbers) and prints a one-page summary instead of letting the VLE browse freely. Every VLE-assisted view is logged with the VLE's operator ID alongside the session.",
      flow: ["VLE login", "Citizen biometric", "Restricted dashboard", "Print summary"],
      screens: [
        { name: "Kiosk citizen view", desc: "Same status chips and action cards; bank details and personal preferences hidden.", frame: F.CitizenHeader },
      ],
    },
    channels: [
      { channel: "Web", ico: "W", body: "Full dashboard with filters, certificates, benefits, and notification preferences. Default channel on desktop and laptop." },
      { channel: "Mobile PWA", ico: "M", body: "Vertically stacked cards. Action-needed pinned to top. Push notifications for SLA breach and new disbursals." },
      { channel: "SMS digest", ico: "S", body: "Weekly summary text — counts only, no personal data. Reply STATUS<space>ID for the latest update on one application." },
    ],
    integrations: [
      { sys: "DigiLocker", purpose: "Surface issued certificates with one-tap retrieval — never re-store the certificate locally." },
      { sys: "Aadhaar-linked profile", purpose: "Read-only name, DOB, address pull from UIDAI; updates are routed back to UIDAI, never written locally." },
      { sys: "DBT Mission", purpose: "Active scheme list with last disbursal date and amount, refreshed at sign-in." },
      { sys: "Payment Gateway History API", purpose: "Past application fee payments, receipts, and refund status." },
    ],
    statusVocab: [
      { name: "Active",        color: "#1e6091", hex: "#1e6091", meaning: "Application in progress, within SLA, no action needed from citizen." },
      { name: "Action needed", color: "#db372d", hex: "#db372d", meaning: "Citizen must upload, pay, or respond before SLA expires." },
      { name: "Under review",  color: "#c97a0c", hex: "#c97a0c", meaning: "With the department — verification or approval in progress." },
      { name: "Completed",     color: "#106c35", hex: "#106c35", meaning: "Certificate issued, benefit credited, or service successfully closed." },
      { name: "Rejected",      color: "#6b1f1f", hex: "#6b1f1f", meaning: "Application denied with reason; appeal window may still be open." },
      { name: "On hold",       color: "#6b6b6b", hex: "#6b6b6b", meaning: "Paused — typically waiting on a third-party verification or court order." },
    ],
    notifications: [
      { moment: "Action needed",   channel: "SMS · in-app badge · email", content: "'Upload income proof for INC-2026-MH-04127 by 15 Apr' with deep-link to the upload step." },
      { moment: "Status change",   channel: "In-app · email digest",       content: "Movement between Active → Under review → Completed; never every micro-step inside Under review." },
      { moment: "Weekly digest",   channel: "Email · Sunday 9pm IST",      content: "Counts plus action-needed items only. No personal data in the email body." },
      { moment: "SLA-breach risk", channel: "SMS · push",                  content: "Fires 48 hours before SLA expiry if no action has been taken." },
      { moment: "DBT credited",    channel: "SMS · in-app",                content: "'₹2,000 credited to your linked account · PM Kisan · 12 Apr'." },
    ],
  },

  /* ───── 7.2 Officer Dashboard ───── */
  {
    id: "tasks",
    num: "PATTERN · 7.2",
    title: "Officer Dashboard",
    lede: "How to keep an officer honest with the SLA clock. The cases under most pressure rise to the top, and every action they take is recorded against their name.",

    whenToUse: [
      "Officer or admin staff who process citizen applications inside a department.",
      "Any role with a queue of cases, an SLA window, and the ability to forward / reassign / take action.",
      "When SLA accountability is enforced — a card-level countdown is the right surface, not a per-citizen view.",
    ],
    whenNotFor: "Citizen-facing dashboards — those use the Citizen Dashboard pattern. Read-only audit / monitoring views — those use a separate Reporting pattern.",

    flow: [
      "Officer signs in",
      "Queue loads · breached first",
      "Open case",
      "Take action / reassign",
      "Log + notify citizen",
    ],

    screensSet: (() => {
      const base = 'assets/images/pattern-screens/dashboard/pending-tasks';
      const flow = [
        { id: 'default', label: 'Default', desc: 'The officer arrives to find the most pressured cases waiting first, so triage happens before they have to decide anything.' },
        { id: 'empty', label: 'Empty queue', desc: 'A clear queue should feel earned, not broken. The acknowledgement lets the officer trust that nothing is hiding.' },
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
        intro: 'Two frames showing how the officer queue behaves when work is waiting and how it behaves when the unit has finally caught up.',
        devices: [
          { id: 'desktop', label: 'Desktop', layouts: [mk('desktop', { id: 'default', label: 'Default' })] },
          { id: 'mobile',  label: 'Mobile',  layouts: [mk('mobile',  { id: 'default', label: 'Default' })] },
        ],
      };
    })(),
    screens: [
      { name: "Queue header", desc: "Officer identity, unit, three SLA bands as chips. Breached count is the first number a citizen-facing officer sees.", frame: F.OfficerQueue },
      { name: "Case row · breached", desc: "Red SLA-breach badge, days over, citizen name, assigned date, Open case CTA.", frame: F.OfficerCaseRow },
      { name: "SLA timer", desc: "Days used vs working days available under the Right to Public Services Act, amber band at-risk threshold.", frame: F.OfficerSlaTimer },
      { name: "Reassign case", desc: "Officer picker, mandatory reason field — every reassignment is logged.", frame: F.OfficerAssignment },
      { name: "Bulk actions", desc: "Multi-select cases for Assign / Forward / Mark on-hold; the action writes to the audit log against the officer's ID.", frame: F.OfficerBulkAction },
      { name: "Queue empty", desc: "Green tick state — no cases assigned. Officers see this only when their unit is fully clear.", frame: F.OfficerEmpty },
    ],

    components: [
      { name: "Card" }, { name: "SLA Progress Indicator" }, { name: "Filter Chip Group" },
      { name: "Table" }, { name: "Dropdown" }, { name: "Button" }, { name: "Alert" }, { name: "Empty State" },
    ],

    behaviour: [
      "SLA-breached cases pin to the top regardless of recency — the working-days timer never resets.",
      "At-risk threshold fires 48 hours before SLA expiry — the card border turns amber and the SLA chip becomes warn.",
      "Every officer action (open, forward, reassign, on-hold, decide) writes a row to the immutable audit log with the officer ID and timestamp.",
      "Reassignment requires a written reason; cases cannot be silently moved between officers.",
    ],

    edgeCases: [
      "SLA expiry hits while officer is mid-action: the case auto-flags as breached but the in-progress action completes normally.",
      "Officer is reassigned out of the unit: their queue empties immediately and active cases route to the unit head for redistribution.",
      "Bulk on-hold: only allowed with a reason category (court order, citizen-requested, document mismatch) — never free-text.",
      "Public holiday calendar: SLA working-days clock pauses on state-declared holidays; the citizen sees the adjusted expected date.",
    ],

    doDont: [
      { do: "Sort by SLA pressure first, created date second — breached cases must be unmissable.", dont: "Sort officer queues by case ID or alphabetical citizen name." },
      { do: "Require a reason on every reassignment and on-hold action.", dont: "Allow silent reassignment between officers — accountability collapses without a written reason." },
    ],

    a11y: [
      "SLA state is announced in text — 'breached, 2 days over' — not just by the red border.",
      "Bulk-action checkboxes have aria-checked plus a live region announcing 'N cases selected'.",
      "Reassign modal traps focus; the reason field is required and marked as such in the accessible name.",
    ],

    related: [
      { tag: "Mirror of", name: "Citizen Dashboard", href: "#my-apps", desc: "Same cards, citizen-facing view." },
      { tag: "Used by", name: "Application Status Tracker", href: "UX4G Status.html", desc: "The citizen-visible status that officer actions update." },
    ],

    compliance: {
      law: "Right to Public Services Acts (state-wise) · DPDP Act 2023",
      body: [
        "Right to Public Services Acts mandate SLA disclosure on every service — the officer queue surfaces the same clock the citizen sees, in working days.",
        "DPDP — officers see only the cases assigned to them or their unit. Cross-unit access is logged as a privileged action and requires unit-head approval.",
        "Every officer action writes to an immutable audit log; the log is the legal record of when and by whom each step was performed.",
      ],
    },
    dataHandling: [
      "Server-side role and unit checks gate every API call — never trust a client-side role string to limit a query.",
      "Audit log entries are append-only — corrections are written as new entries referencing the original, never overwrites.",
      "Officer action history is retained per state RTI / audit norms (typically 7 years) separately from the citizen application data.",
    ],
    officer: {
      body: [
        "The officer dashboard is a separate, role-bound surface — citizens never see it and officers never see the citizen-facing dashboard for their own cases.",
        "SLA timers are the heart of this view. Working days only, state-holiday-aware, with at-risk and breached bands wired to the at-risk and breach thresholds defined by the state RTI rules.",
        "Bulk actions write per-case audit rows — one bulk action never collapses to a single log entry.",
        "An officer reassigned out of the unit loses access on the next dashboard load; in-flight tabs are revoked via short-lived session tokens.",
      ],
      screens: [
        { name: "SLA timer detail", desc: "Day-by-day countdown with amber at-risk band kicking in at 48h before expiry.", frame: F.OfficerSlaTimer },
        { name: "Reassignment with reason", desc: "Mandatory reason field; the dropdown lists eligible officers in the same unit.", frame: F.OfficerAssignment },
        { name: "Bulk action audit", desc: "Multi-select with the per-officer log notice — N cases × one row each.", frame: F.OfficerBulkAction },
      ],
    },
    integrations: [
      { sys: "Workflow / case management engine", purpose: "Source of truth for queues, assignments, and SLA clocks." },
      { sys: "Audit log service", purpose: "Append-only sink for every officer action — separately retained from application data." },
      { sys: "State holiday calendar API", purpose: "Drives the working-days clock so SLAs pause correctly on state holidays." },
      { sys: "Notification gateway", purpose: "Sends SLA-breach alerts to officer and unit head; sends citizen-facing status notifications on action." },
    ],
    statusVocab: [
      { name: "Open",       color: "#1e6091", hex: "#1e6091", meaning: "Assigned to an officer, within SLA, awaiting their next action." },
      { name: "At risk",    color: "#c97a0c", hex: "#c97a0c", meaning: "Less than 48 working hours of SLA remaining; amber band visible." },
      { name: "Breached",   color: "#db372d", hex: "#db372d", meaning: "Past SLA — pinned to top of queue; escalation visible to unit head." },
      { name: "On hold",    color: "#6b6b6b", hex: "#6b6b6b", meaning: "Paused by reasoned action — court order, citizen-requested, document mismatch." },
      { name: "Closed",     color: "#106c35", hex: "#106c35", meaning: "Approved or rejected with reason; final audit row written." },
      { name: "Reassigned", color: "#5a3aa8", hex: "#5a3aa8", meaning: "Moved to another officer with a written reason; original timer continues." },
    ],
    notifications: [
      { moment: "New case assigned",   channel: "In-app badge · email",       content: "'INC-2026-MH-04127 assigned to you · SLA 15 working days from today'." },
      { moment: "At-risk threshold",   channel: "In-app · email",             content: "Fires 48 working hours before SLA expiry to the assigned officer." },
      { moment: "SLA breach",          channel: "In-app · email · unit head", content: "Sent to officer and copied to unit head; case pins to top of queue." },
      { moment: "Reassignment",        channel: "In-app · audit log",         content: "Both officers notified; reason field included in the notification body." },
      { moment: "End-of-day digest",   channel: "Email · 7pm IST",            content: "Unit-level summary — breached, at-risk, on-hold counts. No citizen PII in the body." },
    ],
    errorRecovery: {
      intro: "SLA breach is the failure mode that matters most. Each state is a surfaced screen — the officer never has to dig for it.",
      screens: [
        { name: "Breached case banner", desc: "Red banner on the case detail with days-over count and direct CTA to decide.", frame: F.OfficerCaseRow },
        { name: "On-hold reason capture", desc: "Reasoned pause — reason category required; free-text not allowed.", frame: F.OfficerAssignment },
      ],
    },
  },

  /* ───── 7.3 Service Explorer ───── */
  {
    id: "profile",
    num: "PATTERN · 7.3",
    title: "Service Explorer",
    lede: "How a citizen finds the right service without starting blind. Time, cost, and paperwork are stated up front so the decision to begin is an informed one.",

    whenToUse: [
      "Citizen-facing browse surfaces that list every service a portal offers.",
      "Profile-aware recommendations after the citizen has signed in.",
      "Search-driven discovery — by service name, by department, or by life event (\"moving house\", \"having a baby\").",
    ],
    whenNotFor: "Officer-only internal tools or admin consoles. Application flows themselves — those live in the Government Form pattern.",

    flow: [
      "Open explorer",
      "Search or browse category",
      "Service detail",
      "Review documents + fee",
      "Start application",
    ],

    screensSet: (() => {
      const base = 'assets/images/pattern-screens/dashboard/citizen-profile';
      const flow = [
        { id: 'default', label: 'Default', desc: 'The citizen sees who the portal thinks they are, sourced from Aadhaar and never silently mutated, so trust in the record holds.' },
        { id: 'edit', label: 'Edit', desc: 'When a citizen needs to change a detail, identity fields stay locked to UIDAI and their update is routed back to the source of truth.' },
        { id: 'delete-account', label: 'Delete account', desc: 'Leaving is a right under DPDP, so the citizen sees exactly what they lose before they confirm, with no quiet defaults.' },
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
        intro: 'Three frames showing how the citizen reads their record, edits what they can, and exits the portal entirely if they choose to.',
        devices: [
          { id: 'desktop', label: 'Desktop', layouts: [mk('desktop', { id: 'default', label: 'Default' })] },
          { id: 'mobile',  label: 'Mobile',  layouts: [mk('mobile',  { id: 'default', label: 'Default' })] },
        ],
      };
    })(),
    screens: [
      { name: "Explorer home", desc: "Search input front and centre; category chips below. Same shell on web and PWA.", frame: F.ExplorerHome },
      { name: "Category list", desc: "Services in a category with department, SLA, fee, and required-auth chips on each card.", frame: F.ExplorerCategory },
      { name: "Service detail", desc: "Department badge, SLA + fee, documents needed banner, Start / Save for later.", frame: F.ExplorerDetail },
      { name: "Recommended for you", desc: "Profile-aware list — based on Aadhaar profile, past applications, and active benefits.", frame: F.ExplorerRecommend },
      { name: "No results", desc: "Empty search state with the helpline number and a Browse all categories fallback.", frame: F.ExplorerNoResults },
    ],

    components: [
      { name: "Input · search" }, { name: "Filter Chip Group" }, { name: "Card" },
      { name: "Badge" }, { name: "Alert" }, { name: "Button" }, { name: "Empty State" },
    ],

    behaviour: [
      "Service detail always surfaces SLA in working days, fee in rupees, and required documents — before the Start button.",
      "Search ranks state-resident services first; cross-state services appear only when the citizen explicitly opts in.",
      "Recommended services are profile-aware but never reveal the underlying reasoning beyond 'Based on your profile + previous applications'.",
      "Saving a service for later writes a draft slot to the dashboard with no application started yet — no SLA clock running.",
    ],

    edgeCases: [
      "No state match: empty state with helpline and Browse all categories — never an empty grid with no explanation.",
      "Citizen in a state different from their Aadhaar address: warn before starting, then route to the right state portal.",
      "Search query is one of 22 Indian scripts: stem and match across scripts, never restrict to Latin.",
      "Service is temporarily unavailable (departmental outage): show an info banner on the detail card and disable Start.",
    ],

    doDont: [
      { do: "Surface SLA, fee, and required documents on the service detail before the Start button.", dont: "Hide fee or document requirements behind a Continue button so the citizen learns mid-flow." },
      { do: "Disable Start with a clear reason when a service is temporarily unavailable.", dont: "Let a citizen begin and fail on submit because the backend is down." },
    ],

    a11y: [
      "Search input has a real <label>, not just a placeholder; accessible name is 'Search government services'.",
      "Category chips function as a single-select radio group keyboard-navigable with arrow keys.",
      "Service cards announce 'Income Certificate, Revenue Department, 15 working days, ₹50' so screen-reader users hear SLA and fee before navigating in.",
    ],

    related: [
      { tag: "Before", name: "Citizen Dashboard", href: "#my-apps", desc: "Once a service is started, it appears on the dashboard." },
      { tag: "Next", name: "Government Form with Validation", href: "UX4G Application.html#form", desc: "The application form itself, after Start." },
    ],

    compliance: {
      law: "Right to Public Services Acts · DPDP Act 2023",
      body: [
        "RTPS — every listed service must publish its SLA, fee, and required documents. The Service Explorer surfaces all three on the detail card before the citizen commits.",
        "DPDP — recommendations use profile data the citizen has already consented to share; never surface inferred sensitive categories (health, caste, religion) as filters.",
      ],
    },
    dataHandling: [
      "Service catalogue is public data — cached aggressively at the edge with a short TTL per state.",
      "Personalisation queries run server-side with a per-session token; the recommendation engine returns ranked service IDs, never the raw profile features used.",
      "Search queries are logged anonymously for ranking improvements; never tied to the citizen's identity beyond the session.",
    ],
    vle: {
      text: "At a CSC kiosk, the VLE uses the Service Explorer to find the right service on the citizen's behalf. The kiosk variant prints a one-page summary of the service detail (SLA, fee, documents) for the citizen to take home before they commit to the application.",
      flow: ["VLE searches", "Open detail", "Print summary", "Citizen consents", "Start application"],
      screens: [
        { name: "Kiosk service detail", desc: "Same detail card; Print summary added next to Start application.", frame: F.ExplorerDetail },
      ],
    },
    channels: [
      { channel: "Web", ico: "W", body: "Full search, category, and recommendation surfaces with rich service detail." },
      { channel: "Mobile PWA", ico: "M", body: "Search-first layout; categories under a single tap; offline catalogue cache for low-bandwidth areas." },
      { channel: "SMS lookup", ico: "S", body: "Reply SVC<space>keyword to the helpline number for a one-line service summary plus the start URL." },
      { channel: "Voice helpline · 1800-XXX", ico: "V", body: "IVR-driven service lookup — citizen says the service name, system reads SLA, fee, and nearest CSC location." },
    ],
    integrations: [
      { sys: "Service catalogue", purpose: "Source of truth for every service — SLA, fee, eligible states, required documents." },
      { sys: "DBT Mission scheme directory", purpose: "Benefit / scheme entries with eligibility rules." },
      { sys: "Recommendation engine", purpose: "Profile-aware ranking based on consented data — Aadhaar address, past applications, active benefits." },
      { sys: "State holiday + working-hours calendar", purpose: "Drives the SLA display so the citizen sees realistic expected dates." },
    ],
    errorRecovery: {
      intro: "What the citizen sees when search returns nothing or a service is unavailable.",
      screens: [
        { name: "No matching services", desc: "Empty search with helpline number and Browse all categories fallback.", frame: F.ExplorerNoResults },
        { name: "Service temporarily down", desc: "Info banner on the detail card; Start application disabled until the department's backend recovers.", frame: F.ExplorerDetail },
      ],
    },
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
        <PtStickyBar patterns={SIDEBAR_PATTERNS} activeSlug="dashboard" />
        <PtLeftNav activeSlug="dashboard" />
        <PtHero
          slug="dashboard"
          num="P-07"
          tag="P-07 · Dashboard & Applications · Live"
          title="Dashboard & Applications"
          desc="The signed-in citizen's home, the officer's role-bound queue, and the discovery surface that connects them. Three patterns that surface the right action at the right time — to the right person."
          meta={["3 patterns"]}
        >
          <img className="ptc-hero-img" src="assets/images/Dashboard & My applications.png" alt="Dashboard & Applications illustration" />
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
