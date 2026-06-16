/* global React, ReactDOM */
/* Pattern category: Notifications — full data-driven build */

/* ───────── Frame mockups ───────── */
const F = {
  /* Notification Centre */
  CentreHeader: (
    <PtMock>
      <MRow><MIcon color="#db372d">3</MIcon><MH>Notifications</MH></MRow>
      <MLabel><span style={{ color: "var(--primary)" }}>Mark all as read</span></MLabel>
      <MDiv />
      <MS><strong>Today</strong></MS>
    </PtMock>
  ),
  CentreActionRequired: (
    <PtMock>
      <div style={{ background: "#fdecea", padding: 8, borderRadius: 4, borderLeft: "3px solid #db372d" }}>
        <MRow><MChip kind="error">● Action Required</MChip></MRow>
        <MS><strong>Income Certificate</strong></MS>
        <MS>Upload your income proof by 15 Apr to avoid rejection.</MS>
        <MS style={{ color: "var(--gray-500)" }}>10:24 AM</MS>
        <MS><span style={{ color: "#db372d" }}>Upload now →</span></MS>
      </div>
    </PtMock>
  ),
  CentreGrouped: (
    <PtMock>
      <MS><strong>Today</strong></MS>
      <MRow><MChip kind="error">●</MChip><MLabel>Action Required · Income Cert.</MLabel></MRow>
      <MRow><MChip kind="purple">●</MChip><MLabel>Status Update · Ration</MLabel></MRow>
      <MDiv />
      <MS><strong>Yesterday</strong></MS>
      <MRow><MChip>○</MChip><MLabel>Draft expiring · Income</MLabel></MRow>
    </PtMock>
  ),
  CentreEmpty: (
    <PtMock>
      <MCenter>
        <div style={{ fontSize: 28 }}>🔔</div>
        <MH>You're all caught up</MH>
        <MS>No new notifications</MS>
      </MCenter>
    </PtMock>
  ),
  CentreDeepLink: (
    <PtMock>
      <MAlert kind="info">Tapping a notification opens the exact relevant screen — never the generic dashboard.</MAlert>
      <MRow><MChip kind="error">● Action Required</MChip></MRow>
      <MBtn>Upload income proof</MBtn>
    </PtMock>
  ),

  /* SMS / Email / WhatsApp templates */
  SmsSubmission: (
    <PtMock>
      <MS>📲 SMS · GOVTIN</MS>
      <div style={{ background: "var(--gray-50)", borderRadius: 8, padding: 10, fontSize: 10, lineHeight: 1.5 }}>
        Dear Ramesh, your Income Certificate application INC-2026-MH-04127 has been submitted. Track status: bit.ly/track — Revenue Dept, Maharashtra Govt
      </div>
      <MS style={{ color: "var(--gray-500)" }}>Template ID · 110720XXXXXXXXXX01</MS>
    </PtMock>
  ),
  SmsUrgent: (
    <PtMock>
      <MS>📲 SMS · URGENT</MS>
      <div style={{ background: "#fdecea", borderRadius: 8, padding: 10, fontSize: 10, lineHeight: 1.5, color: "#aa2920" }}>
        <strong>URGENT</strong> Upload income proof for INC-2026-MH-04127 by 15 Apr or application may be rejected. Upload: bit.ly/upload — Revenue Dept
      </div>
    </PtMock>
  ),
  SmsApproved: (
    <PtMock>
      <MS>📲 SMS</MS>
      <div style={{ background: "#ebf6ef", borderRadius: 8, padding: 10, fontSize: 10, lineHeight: 1.5, color: "#106c35" }}>
        <strong>APPROVED</strong> Your Income Certificate INC-2026-MH-04127 is approved. Download: bit.ly/cert · Valid till 31 Mar 2027 — Revenue Dept
      </div>
    </PtMock>
  ),
  EmailActionRequired: (
    <PtMock>
      <MS>✉ Email · noreply@revenue.mh.gov.in</MS>
      <div style={{ background: "#fdecea", padding: 6, borderRadius: 4, fontSize: 9.5, color: "#aa2920" }}>
        <strong>Action Required by 15 Apr 2026</strong>
      </div>
      <MH>Income Certificate INC-2026-MH-04127</MH>
      <MBtn kind="danger">Upload income proof</MBtn>
      <MS>If not uploaded by the deadline, your application may be rejected.</MS>
    </PtMock>
  ),
  WhatsAppTemplate: (
    <PtMock>
      <MS>💬 WhatsApp · Revenue Dept ✓</MS>
      <div style={{ background: "#dcf8c6", borderRadius: 8, padding: 10, fontSize: 9.5, lineHeight: 1.5 }}>
        Dear Ramesh Kumar,<br />
        • Application: Income Certificate<br />
        • Reference: INC-2026-MH-04127<br />
        • Status: Under Review<br />
        • Expected: 20 Apr 2026<br />
        Track: bit.ly/track
      </div>
    </PtMock>
  ),
  SmsHindi: (
    <PtMock>
      <MS>📲 SMS · हिन्दी</MS>
      <div style={{ background: "var(--gray-50)", borderRadius: 8, padding: 10, fontSize: 10, lineHeight: 1.5 }}>
        प्रिय रमेश, आपका आय प्रमाण-पत्र आवेदन INC-2026-MH-04127 प्रस्तुत किया गया है। स्थिति देखें: bit.ly/track
      </div>
    </PtMock>
  ),
  SmsDltMismatch: (
    <PtMock>
      <MAlert kind="error"><strong>DLT template mismatch</strong> — message variables didn't match the registered template. SMS was blocked by the carrier.</MAlert>
      <MS>Sender · GOVTIN · Template ID · 110720XXXXXXXXXX01</MS>
      <MBtn>Resend with correct template</MBtn>
    </PtMock>
  ),
  EmailBounce: (
    <PtMock>
      <MAlert kind="warn">Email bounced — ramesh@example.com is undeliverable. We'll keep retrying for 24 hours.</MAlert>
      <MBtn kind="ghost">Update email address</MBtn>
    </PtMock>
  ),

  /* Proactive / push */
  PushSystem: (
    <PtMock>
      <div style={{ background: "var(--gray-50)", borderRadius: 8, padding: 10 }}>
        <MRow><MIcon color="var(--primary)">⬛</MIcon><MS><strong>Revenue Dept</strong></MS></MRow>
        <MS><strong>Status Update — Income Certificate</strong></MS>
        <MS>Your application INC-2026-MH-04127 is now Under Review.</MS>
      </div>
    </PtMock>
  ),
  PushBanner: (
    <PtMock>
      <MAlert kind="info"><strong>Status updated just now</strong> — your application moved to Under Review.</MAlert>
    </PtMock>
  ),
  PushTimeline: (
    <PtMock>
      <MRow><MIcon color="#106c35">✓</MIcon><MLabel>Submitted 10 Apr</MLabel></MRow>
      <MRow><MIcon color="#106c35">✓</MIcon><MLabel>Verified 11 Apr</MLabel></MRow>
      <MRow><MIcon color="var(--primary)">●</MIcon><MLabel><strong>Under Review · Just now</strong></MLabel></MRow>
    </PtMock>
  ),
  PushLive: (
    <PtMock>
      <MRow><MChip kind="success">● LIVE</MChip><MLabel>Real-time connection</MLabel></MRow>
      <MS>Updates appear instantly when the department changes status.</MS>
      <MDiv />
      <MRow><MChip kind="warn">● Reconnecting</MChip></MRow>
    </PtMock>
  ),
  PushPermissionDenied: (
    <PtMock>
      <MAlert kind="warn">Push notifications are blocked in your browser. You'll still get SMS and email updates.</MAlert>
      <MBtn kind="ghost">How to enable push</MBtn>
    </PtMock>
  ),

  /* Reminders */
  ReminderD5: (
    <PtMock>
      <MS>📲 D-5</MS>
      <MAlert kind="warn">Your Income Certificate draft expires in <strong>5 days</strong> (16 Apr). Resume: bit.ly/resume</MAlert>
    </PtMock>
  ),
  ReminderD2: (
    <PtMock>
      <MS>📲 D-2</MS>
      <MAlert kind="warn"><strong>Only 2 days left.</strong> Submit your Income Certificate before 16 Apr. Resume: bit.ly/resume</MAlert>
    </PtMock>
  ),
  ReminderD0: (
    <PtMock>
      <MS>📲 D-0</MS>
      <MAlert kind="error">Your Income Certificate draft <strong>expired on 16 Apr</strong>. Start new: bit.ly/apply</MAlert>
    </PtMock>
  ),
  ReminderH1: (
    <PtMock>
      <MS>📲 H-1</MS>
      <MAlert kind="info"><strong>In 1 hour</strong> · Your 11:00 AM inspection. Inspector — Revenue Inspector, Sector 12. Directions: bit.ly/map</MAlert>
    </PtMock>
  ),
  ReminderQuiet: (
    <PtMock>
      <MAlert kind="info">Reminder held — quiet hours (9 PM – 8 AM). Will send at 8:05 AM.</MAlert>
      <MS style={{ color: "var(--gray-500)" }}>TRAI quiet-hours policy</MS>
    </PtMock>
  ),

  /* Preferences */
  PrefsChannels: (
    <PtMock>
      <MH>Notification preferences</MH>
      <MRow style={{ justifyContent: "space-between" }}><MLabel>SMS · +91 ••••• 43210</MLabel><MChip kind="success">On</MChip></MRow>
      <MRow style={{ justifyContent: "space-between" }}><MLabel>Email</MLabel><MChip kind="success">On</MChip></MRow>
      <MRow style={{ justifyContent: "space-between" }}><MLabel>App notifications</MLabel><MChip kind="success">On</MChip></MRow>
      <MRow style={{ justifyContent: "space-between" }}><MLabel>WhatsApp · Opt-in</MLabel><MChip>Off</MChip></MRow>
    </PtMock>
  ),
  PrefsFrequency: (
    <PtMock>
      <MS>How often to notify</MS>
      <MIn label="Immediately ▾" active />
      <MS>Or:</MS>
      <MRow><MChip>Daily summary 6 PM</MChip></MRow>
      <MRow><MChip>Weekly digest</MChip></MRow>
    </PtMock>
  ),
  PrefsMandatory: (
    <PtMock>
      <MAlert kind="info">Mandatory notifications</MAlert>
      <MRow style={{ justifyContent: "space-between" }}><MLabel>🔒 SLA breach alerts</MLabel><MChip>Always on</MChip></MRow>
      <MRow style={{ justifyContent: "space-between" }}><MLabel>🔒 Rejection notices</MLabel><MChip>Always on</MChip></MRow>
      <MLabel>Required by government policy.</MLabel>
    </PtMock>
  ),
  PrefsWhatsAppOptIn: (
    <PtMock>
      <MH>Enable WhatsApp notifications?</MH>
      <MS>We'll send status updates and reminders via WhatsApp to +91 ••••• 43210.</MS>
      <MAlert kind="info">By enabling, you consent to receive WhatsApp messages from verified ministries.</MAlert>
      <MBtn>I consent — enable WhatsApp</MBtn>
      <MBtn kind="ghost">Cancel</MBtn>
    </PtMock>
  ),
  PrefsSaved: (
    <PtMock>
      <MAlert kind="success">Preferences saved · Changes apply immediately.</MAlert>
    </PtMock>
  ),
};

/* ───────── Hero stage ───────── */
function HeroViz() {
  return (
    <>
      <div className="ptc-vc" style={{ top: "10px", right: "12%", width: "240px", transform: "rotate(2deg)" }}>
        <MRow><MIcon color="#db372d">3</MIcon><MH>Notifications</MH></MRow>
        <MDiv />
        <MS><strong>Today</strong></MS>
        <div style={{ background: "#fdecea", padding: 6, borderRadius: 4, marginTop: 4 }}>
          <MS><strong>Action Required</strong> · Upload income proof by 15 Apr</MS>
        </div>
      </div>
      <div className="ptc-vc" style={{ top: "150px", right: "40%", width: "200px", transform: "rotate(-3deg)" }}>
        <MS>📲 SMS</MS>
        <MS>Your Income Certificate INC-2026-MH-04127 is approved. Download: bit.ly/cert</MS>
      </div>
      <div className="ptc-vc" style={{ top: "30px", right: "55%", width: "150px", transform: "rotate(-2deg)" }}>
        <MRow><MChip kind="success">● LIVE</MChip></MRow>
        <MS>Real-time updates</MS>
      </div>
    </>
  );
}

/* ───────── Pattern data ───────── */
const PATTERNS_DATA = [
  /* ───── 8.1 Notification Centre ───── */
  {
    id: "noti-centre",
    num: "PATTERN · 8.1",
    title: "Notification Centre",
    lede: "One persistent home for everything the citizen owes attention to, sorted by urgency. Action items rise to the top, and tapping any row lands on the exact screen that needs them.",

    whenToUse: [
      "Any signed-in service that has more than one in-flight application or recurring update.",
      "Where the citizen needs a single place to triage what needs attention today vs what can wait.",
      "Whenever you need a persistent record of past notifications independent of SMS / email inboxes.",
    ],
    whenNotFor: "Single-purpose utilities with no notification history. Anonymous services where there is no signed-in account to attach a notification record to.",

    flow: [
      "New event fires",
      "Centre badge increments",
      "Citizen opens drawer",
      "Reads / dismisses item",
      "Deep-link to exact screen",
    ],

    screensSet: (() => {
      const base = 'assets/images/pattern-screens/notifications/noti-centre';
      const desktopFlow = [
        { id: '2-drawer-default', label: 'Drawer default', desc: 'A peripheral surface so the citizen can triage updates without leaving the screen they were already working on.' },
        { id: '3-grouped-by-date', label: 'Grouped by date', desc: 'Chronological clusters give recency a shape, so a citizen scanning quickly can tell new from already-handled at a glance.' },
        { id: '4-notification-types', label: 'Notification types', desc: 'Things the citizen must act on are given more weight than informational updates, so urgency is read before the eye reaches the copy.' },
        { id: '5-mark-all-read', label: 'Mark all read', desc: 'A way to clear the count without losing history, because triage is about reducing noise, not deleting the record.' },
        { id: '6-empty-state', label: 'Empty state', desc: 'When nothing needs attention, say so warmly. Calm reassurance beats apologetic "no data found" language and makes empty feel earned, not broken.' },
      ];
      const mobileFlow = [
        { id: '2-drawer-default', label: 'Full-screen default', desc: 'On a phone the centre takes the whole screen, since splitting attention on a small canvas only makes triage harder.' },
        { id: '3-grouped-by-date', label: 'Grouped by date', desc: 'Same day-based clustering, stacked into a single column so the citizen can thumb-scroll without losing track of what is new and what is old.' },
        { id: '4-notification-types', label: 'Notification types', desc: 'Action items pin above everything else from today, because arrival order matters less than what the citizen must do.' },
        { id: '5-mark-all-read', label: 'Mark all read', desc: 'One tap takes the count to zero. Items remain, so the citizen can still revisit what they cleared.' },
        { id: '6-empty-state', label: 'Empty state', desc: 'A reassuring confirmation that the queue is empty. No error tone, no implication the citizen did something wrong.' },
      ];
      const mk = (device, layout, flow) => ({
        id: layout.id, label: layout.label,
        screens: flow.map((s) => ({
          id: device + '-' + layout.id + '-' + s.id,
          label: s.label, desc: s.desc,
          src: base + '/' + device + '-' + layout.id + '-' + s.id + '.png',
        })),
      });
      return {
        intro: 'How the centre behaves across devices: an opinionated feed that surfaces what to act on today, defers the rest, and never feels like an apologetic empty inbox.',
        devices: [
          { id: 'desktop', label: 'Desktop', layouts: [mk('desktop', { id: 'card', label: 'Card' }, desktopFlow)] },
          { id: 'mobile',  label: 'Mobile',  layouts: [mk('mobile',  { id: 'fullscreen', label: 'Full screen' }, mobileFlow)] },
        ],
      };
    })(),

    screens: [
      { name: "Bell + drawer header", desc: "Unread count plus Mark all as read link sit at the top of the drawer.", frame: F.CentreHeader },
      { name: "Action-required item", desc: "Red tint, red dot, distinct visual priority — the citizen sees what to act on first.", frame: F.CentreActionRequired },
      { name: "Grouped by date", desc: "Today, Yesterday, Earlier this week — chronological clustering, never just a flat list.", frame: F.CentreGrouped },
      { name: "Deep link to exact screen", desc: "Tapping a notification jumps to the exact upload / form / page, not the dashboard.", frame: F.CentreDeepLink },
      { name: "Empty state", desc: "Bell illustration plus You're all caught up — the citizen knows nothing is pending.", frame: F.CentreEmpty },
    ],

    components: [
      { name: "Badge" }, { name: "Drawer" }, { name: "Button" }, { name: "Alert · info" }, { name: "Empty State" }, { name: "Chip" },
    ],

    behaviour: [
      "Unread count badge updates in real time when a new notification arrives.",
      "Action-required items pin to the top of the Today group regardless of arrival order.",
      "Mark all as read clears badges instantly; the items themselves stay visible for 30 days.",
      "Tapping a notification deep-links to the precise screen, never to a generic dashboard tile.",
    ],

    edgeCases: [
      "Action required: red dot plus red background tint — visually distinct from informational updates.",
      "Deep links must survive deep app navigation — restore the right tab, scroll, and form step.",
      "Group by date: Today, Yesterday, This week, Older — never a flat scrolling list.",
      "Stale notifications older than 90 days are auto-archived, not deleted, so audit can still find them.",
    ],

    doDont: [
      { do: "Tint action-required rows red and pin them to the top of the day group.", dont: "Treat every notification with the same visual weight — citizens then ignore the urgent ones." },
      { do: "Deep-link to the exact screen the citizen needs to act on.", dont: "Drop the citizen back on the dashboard and make them hunt for the right application." },
    ],

    a11y: [
      "Bell button announces 'Notifications — 3 unread'; updates the count on change.",
      "Drawer is a labelled region with role='dialog' and traps focus while open.",
      "Action-required items carry an additional aria-label='Action required' on top of the visual red tint — never colour-only signalling.",
    ],

    related: [
      { tag: "Feeds into", name: "SMS, Email & WhatsApp Templates", href: "#templates", desc: "Centre entries mirror the SMS / email sent on the same event." },
      { tag: "Controlled by", name: "Notification Preferences", href: "#noti-prefs", desc: "Citizen channel toggles affect what lands in the centre." },
    ],

    behaviourScreens: null,
    dataHandling: [
      "Notification records are stored against the citizen account for 90 days, then auto-archived for 7 years per government record-keeping.",
      "Read / unread state is per-device-synced and persists across sign-outs.",
      "Personal data inside a notification (reference number, masked mobile) is rendered via tokenised IDs — the raw PII is never embedded in the JSON payload sent to the client.",
    ],
    integrations: [
      { sys: "Notification service bus", purpose: "Receives events from every department app and fans out to the centre, push, SMS and email channels." },
      { sys: "Account service", purpose: "Resolves the citizen's preferred language and channel before rendering each row." },
    ],
    notifications: [
      { moment: "Submission complete", channel: "Centre · SMS · Email", content: "Application reference number plus track-status link." },
      { moment: "Status change", channel: "Centre · Push", content: "New status name plus expected next step." },
      { moment: "Action required", channel: "Centre · SMS · Email", content: "Red action-required entry with direct upload deep-link." },
      { moment: "Approval", channel: "Centre · SMS · Email", content: "Download link plus validity dates." },
    ],
    errorRecovery: {
      intro: "When deep-links or the centre itself can't render the latest state.",
      screens: [
        { name: "Empty state", desc: "Bell illustration plus a reassuring 'You're all caught up'. Never an apologetic 'no data found'.", frame: F.CentreEmpty },
        { name: "Deep-link to exact screen", desc: "When a deep-link target is unavailable, fall back to the nearest valid parent screen with a banner explaining where the citizen landed.", frame: F.CentreDeepLink },
      ],
    },
  },

  /* ───── 8.2 SMS, Email & WhatsApp Templates ───── */
  {
    id: "templates",
    num: "PATTERN · 8.2",
    title: "SMS, Email & WhatsApp Templates",
    lede: "How to write a notification that arrives, lands in the right tone, and survives carrier filtering. Each channel earns its own shape, and Hindi ships alongside English by default.",

    whenToUse: [
      "Every transactional touchpoint of a service — submission, status change, action required, approval, rejection, expiry.",
      "Anywhere the citizen is contacted outside the portal — SMS, email, WhatsApp.",
      "Whenever a notification must remain compliant across carriers — and that means using a TRAI-registered DLT template, not free-form text.",
    ],
    whenNotFor: "Promotional or marketing messaging — UX4G services are transactional only. Internal officer alerts (use the Officer-facing pattern instead).",

    flow: [
      "Event fires from department app",
      "Template selected by event type",
      "Variables filled per language",
      "Routed via channel gateway",
      "Delivery receipt logged",
    ],

    screensSet: (() => {
      const base = 'assets/images/pattern-screens/notifications/sms-email';
      const desktopFlow = [
        { id: 'type-submission-email', label: 'Submission email', desc: 'A receipt the citizen can return to later. Carries the reference number prominently and stays readable even when the client blocks rich formatting.' },
        { id: 'type-action-required-email', label: 'Action-required email', desc: 'Built around a single ask, so the citizen never has to hunt for what to do next. Deep-links straight to the upload step.' },
        { id: 'type-status-update-email', label: 'Status update email', desc: 'Neutral, factual writing that explains what changed and what comes next, sized to render cleanly across the older mail clients citizens still use.' },
      ];
      const mobileFlow = [
        { id: 'type-submission-sms', label: 'Submission SMS', desc: 'Confirmation in the citizen-trusted channel. The reference number arrives within seconds, so they can stop worrying whether the submission went through.' },
        { id: 'type-action-required-sms', label: 'Action-required SMS', desc: 'Tone leans urgent because the cost of missing is high. Carries a deadline and a direct path back to the upload.' },
        { id: 'type-approval-sms', label: 'Approval SMS', desc: 'Good news first, then how to claim it. Download link and validity dates sit in the same SMS, so the citizen never has to ask twice.' },
        { id: 'type-rejection-sms', label: 'Rejection SMS', desc: 'Soft delivery of bad news, with the reason and a route to appeal. Never sent via a single chat channel where the citizen might miss it.' },
        { id: 'type-hindi-sms', label: 'Hindi SMS variant', desc: 'Same content, native language. Every English template has a Devanagari sibling, so language is a setting, not a privilege.' },
        { id: 'type-whatsapp', label: 'WhatsApp template', desc: 'Used only when the citizen has explicitly asked for it. Higher open rate makes this great for time-sensitive nudges, never for default sends.' },
      ];
      const mk = (device, layout, flow) => ({
        id: layout.id, label: layout.label,
        screens: flow.map((s) => ({
          id: device + '-' + layout.id + '-' + s.id,
          label: s.label, desc: s.desc,
          src: base + '/' + device + '-' + layout.id + '-' + s.id + '.png',
        })),
      });
      return {
        intro: 'A tour of channel-specific shapes. Email earns long-form context, SMS earns brevity, WhatsApp earns structure, and every template carries an equal Hindi voice.',
        devices: [
          { id: 'desktop', label: 'Desktop', layouts: [mk('desktop', { id: 'default', label: 'Email' }, desktopFlow)] },
          { id: 'mobile',  label: 'Mobile',  layouts: [mk('mobile',  { id: 'default', label: 'SMS / WhatsApp' }, mobileFlow)] },
        ],
      };
    })(),

    screens: [
      { name: "Submission SMS", desc: "Reference number plus track link, under 160 chars, registered DLT template.", frame: F.SmsSubmission },
      { name: "Action-required SMS", desc: "URGENT prefix plus a direct upload link — distinct red tint when shown in the centre.", frame: F.SmsUrgent },
      { name: "Approval SMS", desc: "APPROVED prefix plus a download link and validity dates.", frame: F.SmsApproved },
      { name: "Email — Action required", desc: "Red banner plus a single-action card and a plain-text fallback for clients that block HTML.", frame: F.EmailActionRequired },
      { name: "WhatsApp template", desc: "Verified sender, structured bullet list — opt-in only.", frame: F.WhatsAppTemplate },
      { name: "Hindi SMS variant", desc: "Same template, Devanagari script. Every English template ships with a Hindi sibling.", frame: F.SmsHindi },
    ],

    components: [
      { name: "No interactive components — design as static rendered frames" },
    ],

    behaviour: [
      "SMS body is locked to a TRAI-registered DLT template — variables are the only mutable part. Off-template SMS is filtered by carriers.",
      "Email subject and body are matched to one of a fixed set of approved templates; HTML is table-based to render in Outlook 2010+.",
      "WhatsApp messages use a Meta-approved template ID; non-template messages are blocked by the WhatsApp Business API.",
      "Every transactional message is bilingual by default — the citizen's preferred BCP 47 locale chooses the variant.",
    ],

    edgeCases: [
      "SMS: max 160 characters per message — use the portal's short-link service for any URL.",
      "Email: assume Outlook, Gmail, Apple Mail — use table-based HTML and inline CSS, no <style> blocks.",
      "WhatsApp: opt-in only — never send without explicit WhatsApp consent recorded under DPDP.",
      "Variable mismatch: if a variable name doesn't match the registered template, the SMS is blocked at the carrier. Surface this clearly to the operations team.",
    ],

    doDont: [
      { do: "Register every template on a DLT platform (Vilpower, Jio, Vodafone) with a 6-character header like GOVTIN before going live.", dont: "Ship a free-form SMS body for a transactional event — carriers will block it and the citizen never sees it." },
      { do: "Send a Hindi sibling for every English template the citizen could receive.", dont: "Default the entire country to English and treat regional language as a 'nice-to-have'." },
    ],

    a11y: [
      "Email HTML carries alt text on every image and a plain-text part for screen-reader-friendly fallback.",
      "SMS body avoids ALL-CAPS except for the prefix tag (URGENT, APPROVED) — screen readers spell out ALL-CAPS.",
      "WhatsApp templates avoid emoji-only lines; every emoji is paired with text.",
    ],

    related: [
      { tag: "Surfaced in", name: "Notification Centre", href: "#noti-centre", desc: "Centre entries mirror the templated content sent to the channel." },
      { tag: "Escalation of", name: "Reminder Sequences", href: "#reminders", desc: "Reminders reuse the same template set with D-N variables." },
      { tag: "Gated by", name: "Notification Preferences", href: "#noti-prefs", desc: "Channel preferences determine which templates fire on which channel." },
    ],

    compliance: {
      law: "TRAI DLT (Distributed Ledger Technology) framework · TRAI Notification 2018 · IT Act 2000",
      body: [
        "Every transactional SMS must use a TRAI-registered DLT template tied to a 6-character header (e.g. GOVTIN). Senders must register both the header and the template body on a DLT platform like Vilpower, Jio, or Vodafone before going live.",
        "Promotional and transactional SMS are routed separately — mixing them on a single header is a TRAI violation.",
        "Email from government domains must align SPF, DKIM, and DMARC to prevent spoofing. NIC mail servers enforce DMARC=reject for gov.in domains.",
        "Under DPDP 2023, non-transactional notifications require explicit opt-in. Transactional messages tied to a service the citizen has applied for are exempt.",
      ],
    },
    dataHandling: [
      "Template content (without variables) is treated as public; variables are tokenised and resolved at send-time so PII never sits in the message queue.",
      "Delivery receipts are stored for 7 years per audit retention, with the message body itself stored only as a template ID + variable hash.",
      "WhatsApp opt-in is logged with timestamp, IP, and the exact consent string — withdrawable at any time.",
    ],
    channels: [
      { channel: "SMS · TRAI DLT", ico: "📲", body: "160-char body, GOVTIN header, registered template ID. Carrier-filtered if off-template. Primary channel — every citizen has SMS." },
      { channel: "Email · SPF / DKIM / DMARC", ico: "✉", body: "Table-based HTML for Outlook / Gmail / Apple Mail. Plain-text fallback. Aligned headers for gov.in domains via the NIC mail gateway." },
      { channel: "WhatsApp · Verified sender", ico: "💬", body: "Meta-approved template ID, verified Business sender, opt-in only. Higher open rate than SMS but never the default channel." },
    ],
    integrations: [
      { sys: "SMS aggregator (MSG91 / BSNL gateway)", purpose: "Carrier-bound delivery against the registered DLT template and GOVTIN header." },
      { sys: "C-DAC / NIC mail gateway", purpose: "Government-domain email delivery with SPF / DKIM / DMARC alignment." },
      { sys: "WhatsApp Business API", purpose: "Template-only delivery from a verified ministry sender ID." },
      { sys: "DLT platform (Vilpower / Jio / Vodafone)", purpose: "Hosts the registered header and template IDs; carriers verify against this." },
    ],
    notifications: [
      { moment: "Application submitted", channel: "SMS · Email", content: "Reference number + track link, plain transactional template." },
      { moment: "Status change", channel: "SMS · Push", content: "Short status update with current state and expected next step." },
      { moment: "Action required", channel: "SMS · Email · WhatsApp (if opted-in)", content: "URGENT prefix, deadline, direct upload link." },
      { moment: "Approval", channel: "SMS · Email · WhatsApp (if opted-in)", content: "APPROVED prefix, download link, validity end date." },
      { moment: "Rejection", channel: "SMS · Email", content: "Polite, neutral phrasing, reason, appeal link. Never via WhatsApp alone." },
    ],
    errorRecovery: {
      text: [
        "DLT template mismatch — the most common failure. Variables not matching the registered template are filtered by carriers. Surface to operations with the exact template ID.",
        "Email bounce — retry for 24 hours with exponential backoff, then prompt the citizen to update their email.",
        "WhatsApp not opted in — silently skip the channel, never queue and then ask for consent after the fact.",
      ],
      screens: [
        { name: "DLT template mismatch", desc: "Operations-facing screen surfacing the template ID and the variable that didn't match.", frame: F.SmsDltMismatch },
        { name: "Email bounce", desc: "Citizen-facing prompt to update the email address after a 24-hour retry window.", frame: F.EmailBounce },
      ],
    },
  },

  /* ───── 8.3 Proactive Status Updates ───── */
  {
    id: "proactive",
    num: "PATTERN · 8.3",
    title: "Proactive Status Updates",
    lede: "How to surface change in real time without hijacking the citizen's attention. Updates announce themselves quietly, and the decision to refresh the view always belongs to the citizen.",

    whenToUse: [
      "When the citizen is actively viewing a screen whose data is changing — application status, payment confirmation, slot availability.",
      "Whenever a department triggers a state transition that affects what the citizen sees right now.",
      "When timeliness matters more than completeness — the citizen needs to know now, even if the full record updates later.",
    ],
    whenNotFor: "Low-priority informational changes — surface those in the centre, not as a push. Read-only archival views where freshness has no value.",

    flow: [
      "Department updates status",
      "Notification service publishes event",
      "WebSocket / SSE pushes to active clients",
      "UI banner / toast + centre entry",
      "Citizen acknowledges or deep-links in",
    ],

    screensSet: (() => {
      const base = 'assets/images/pattern-screens/notifications/proactive';
      const desktopFlow = [
        { id: '1-in-app-status-banner', label: 'In-app status banner', desc: 'A quiet announcement that something changed. It eases in, fades out, and never steals focus from what the citizen was reading.' },
        { id: '3-websocket-live-indicator', label: 'WebSocket LIVE indicator', desc: 'Honesty about the connection. The citizen knows updates are flowing in real time, so silence on screen actually means silence in the system.' },
        { id: '4-websocket-reconnecting', label: 'WebSocket reconnecting', desc: 'When the connection drops, say so plainly and degrade behind the scenes. Nothing interrupts the citizen, and the screen keeps working.' },
        { id: '5-page-refresh-prompt', label: 'Page refresh prompt', desc: 'Fresh data is offered, never imposed. The citizen keeps their scroll position and refreshes only when they are ready.' },
      ];
      const mobileFlow = [
        { id: '3-real-time-timeline-update', label: 'Real-time timeline update', desc: 'On mobile the new event slips into the timeline gently, signalling movement without pulling the citizen out of their place.' },
        { id: '4-websocket-live-indicator', label: 'WebSocket LIVE indicator', desc: 'A small reassurance that the live channel is open. Trust grows when the citizen can see whether the system is paying attention.' },
        { id: '5-websocket-reconnecting', label: 'WebSocket reconnecting', desc: 'Graceful degradation rendered honestly to the citizen. The screen stays fully usable while the system quietly retries the connection underneath.' },
        { id: '6-page-refresh-prompt', label: 'Page refresh prompt', desc: 'On a small screen, scroll position is precious. Offer the refresh on the citizen terms, never wipe what they were reading.' },
      ];
      const mk = (device, layout, flow) => ({
        id: layout.id, label: layout.label,
        screens: flow.map((s) => ({
          id: device + '-' + layout.id + '-' + s.id,
          label: s.label, desc: s.desc,
          src: base + '/' + device + '-' + layout.id + '-' + s.id + '.png',
        })),
      });
      return {
        intro: 'How real-time updates land across devices: announce the change, show the connection state honestly, and hand the citizen the decision to refresh.',
        devices: [
          { id: 'desktop', label: 'Desktop', layouts: [mk('desktop', { id: 'card', label: 'Card' }, desktopFlow)] },
          { id: 'mobile',  label: 'Mobile',  layouts: [mk('mobile',  { id: 'fullscreen', label: 'Full screen' }, mobileFlow)] },
        ],
      };
    })(),

    screens: [
      { name: "Push notification", desc: "Android / iOS system notification — title, body, deep-link target.", frame: F.PushSystem },
      { name: "In-app banner", desc: "Status updated just now — auto-dismiss 5s, non-intrusive.", frame: F.PushBanner },
      { name: "Real-time timeline", desc: "New event animates in with a pulsing dot on the journey timeline.", frame: F.PushTimeline },
      { name: "LIVE indicator", desc: "Badge showing whether the WebSocket / SSE connection is live or reconnecting.", frame: F.PushLive },
      { name: "Push permission denied", desc: "Browser blocked push — citizen still receives SMS and email; centre still works.", frame: F.PushPermissionDenied },
    ],

    components: [
      { name: "Alert · info" }, { name: "Badge" }, { name: "Journey Timeline" }, { name: "Status Pipeline" }, { name: "Toast" },
    ],

    behaviour: [
      "Push fires only for significant status transitions — submitted, under review, approved, rejected, action required. Internal recompute events are silent.",
      "Real-time UI uses WebSocket primarily; SSE is the fallback for proxies that strip WebSockets; 30s polling is the final fallback.",
      "When a new event arrives while the citizen is on the affected screen, the banner animates in; the data refreshes only when the citizen opts in — never a force-refresh.",
      "LIVE badge flips to Reconnecting on socket loss; the badge state is itself a non-intrusive indicator, never a modal.",
    ],

    edgeCases: [
      "Push only for significant status changes — not every system event. Internal recomputes are silent.",
      "Real-time UI: WebSocket primary, SSE fallback, 30s polling as the final fallback for legacy networks.",
      "Refresh prompt: non-intrusive — never force-refresh; let the citizen decide when to re-render.",
      "Permission denied: degrade gracefully to SMS + email + centre. Push is never the sole channel.",
    ],

    doDont: [
      { do: "Limit push to significant status transitions the citizen can act on.", dont: "Push every internal event — citizens disable push entirely after the second irrelevant alert." },
      { do: "Animate new events in with a non-intrusive banner that the citizen accepts.", dont: "Force-refresh the whole page when an event arrives and lose the citizen's scroll position." },
    ],

    a11y: [
      "New-update banner is announced via aria-live='polite' — not assertive, never interrupts a screen-reader read.",
      "LIVE indicator is announced as a state ('connection live', 'reconnecting') in addition to colour.",
      "Push permission denial is announced once with the SMS / email fallback path explicitly named.",
    ],

    related: [
      { tag: "Lives in", name: "Notification Centre", href: "#noti-centre", desc: "Every push also drops a centre entry — the citizen never depends on push alone." },
      { tag: "Uses", name: "SMS, Email & WhatsApp Templates", href: "#templates", desc: "Push content is sourced from the same template set as SMS / email." },
    ],

    compliance: {
      law: "DPDP Act 2023 — explicit opt-in for browser push",
      body: [
        "Browser push subscription requires explicit citizen consent — the W3C Push API enforces this. Never trigger the permission prompt without context.",
        "Push payloads must not embed PII directly — use opaque tokens that the client resolves to text after authentication.",
        "Withdrawal of push consent is honoured immediately — the subscription is removed from the notification service bus the same session.",
      ],
    },
    dataHandling: [
      "Push subscriptions are stored against the citizen account encrypted at rest; revoked the same session when the citizen toggles push off.",
      "WebSocket sessions carry an auth token tied to the citizen session — server-side enforced expiry on the same 30-minute idle timeout.",
      "Real-time events are not persisted on the bus beyond delivery — the centre is the durable record.",
    ],
    integrations: [
      { sys: "Firebase Cloud Messaging (Android)", purpose: "Push delivery to Android devices via the citizen-installed app or PWA." },
      { sys: "Apple Push Notification service (iOS)", purpose: "Push delivery to iOS devices via the citizen-installed app." },
      { sys: "WebSocket / SSE gateway", purpose: "Real-time channel for active sessions; falls back to SSE then to 30s polling." },
    ],
    notifications: [
      { moment: "Status change (significant)", channel: "Push · Centre · SMS", content: "New status name with deep-link to the journey timeline." },
      { moment: "Status change (minor)", channel: "Centre only", content: "Silent centre entry; never a push." },
      { moment: "Real-time slot release", channel: "Push (if subscribed)", content: "Slot opened — direct deep-link to slot picker." },
      { moment: "Live socket reconnect", channel: "In-app indicator only", content: "Reconnecting badge; never a push or SMS." },
    ],
    errorRecovery: {
      text: [
        "Push permission denied — the citizen still gets SMS, email, and the centre. Push is never the sole channel.",
        "WebSocket disconnected — the LIVE badge flips to Reconnecting; if still down after 30s, the UI falls back to 30s polling silently.",
        "Push subscription expired (browser cleared cookies) — re-prompt only on a relevant page, never on every visit.",
      ],
      screens: [
        { name: "LIVE / Reconnecting", desc: "Badge showing connection state — non-intrusive, never a modal.", frame: F.PushLive },
        { name: "Push permission denied", desc: "Citizen-facing fallback message confirming SMS and email still work.", frame: F.PushPermissionDenied },
      ],
    },
  },

  /* ───── 8.4 Reminder Sequences ───── */
  {
    id: "reminders",
    num: "PATTERN · 8.4",
    title: "Reminder Sequences",
    lede: "How to nudge a citizen toward a deadline without becoming the channel they mute. Tone escalates as the date approaches, and the day a citizen completes the task, the schedule stops.",

    whenToUse: [
      "When an upcoming deadline matters more than today's status — drafts expiring, certificates expiring, appointments approaching.",
      "Where a single notification at the trigger time is not enough — citizens forget, and the cost of missing the deadline is high.",
      "Whenever the reminder cadence can be defined as a deterministic schedule the citizen can opt out of.",
    ],
    whenNotFor: "Immediate status changes — those belong in the Proactive pattern. Promotional content — UX4G is transactional only.",

    flow: [
      "Deadline scheduled",
      "D-N reminders queued",
      "Each fires at registered time",
      "Quiet hours / dedup applied",
      "Citizen acts or D-0 final fires",
    ],

    screensSet: (() => {
      const base = 'assets/images/pattern-screens/notifications/reminders';
      const desktopFlow = [
        { id: '1-draft-expiry-sequence', label: 'Draft expiry sequence', desc: 'Three nudges that grow in weight: a gentle heads-up, a firmer one, then a final message that names the deadline as a fact.' },
      ];
      const mobileFlow = [
        { id: '1-draft-expiry-sequence', label: 'Draft expiry sequence', desc: 'The same three-step shape on mobile. Each reminder carries the resume link inline, so the citizen can act without opening a portal.' },
        { id: '2-certificate-expiry-sequence', label: 'Certificate expiry sequence', desc: 'Longer runway for renewals. Email leads early when the citizen has time to plan, SMS arrives close to the date when speed matters.' },
        { id: '3-appointment-reminders', label: 'Appointment reminders', desc: 'Short-window nudges before an in-person visit. Carries who to meet and where to go, so the citizen arrives prepared.' },
      ];
      const mk = (device, layout, flow) => ({
        id: layout.id, label: layout.label,
        screens: flow.map((s) => ({
          id: device + '-' + layout.id + '-' + s.id,
          label: s.label, desc: s.desc,
          src: base + '/' + device + '-' + layout.id + '-' + s.id + '.png',
        })),
      });
      return {
        intro: 'How reminder cadences shape over time: gentle at first, firmer near the deadline, and silent the moment the citizen does the thing the reminder was about.',
        devices: [
          { id: 'desktop', label: 'Desktop', layouts: [mk('desktop', { id: 'card', label: 'Card' }, desktopFlow)] },
          { id: 'mobile',  label: 'Mobile',  layouts: [mk('mobile',  { id: 'fullscreen', label: 'Full screen' }, mobileFlow)] },
        ],
      };
    })(),

    screens: [
      { name: "Draft expiry · D-5", desc: "Amber reminder — 5 days left, resume link, soft tone.", frame: F.ReminderD5 },
      { name: "Draft expiry · D-2", desc: "More urgent — Only 2 days left. Same channel, escalated copy.", frame: F.ReminderD2 },
      { name: "Draft expired · D-0", desc: "Red — apply fresh. The expiry is now a fact, not a warning.", frame: F.ReminderD0 },
      { name: "Appointment H-1", desc: "In 1 hour — inspector details, map link.", frame: F.ReminderH1 },
      { name: "Quiet hours hold", desc: "Reminder queued past 9 PM is held until 8:05 AM the next morning.", frame: F.ReminderQuiet },
    ],

    components: [
      { name: "No interactive components — static reminder frames" },
    ],

    behaviour: [
      "Maximum 1 reminder SMS per day per service — duplicates inside the same day are deduplicated at the bus, not at the carrier.",
      "Quiet hours (9 PM – 8 AM) are honoured for non-urgent reminders. SLA breach and rejection notices override the quiet window.",
      "Each reminder reuses the templated content from the SMS / email template set — never invents fresh copy at send-time.",
      "Once the citizen acts (resumes draft, books slot, pays fee), subsequent D-N reminders in the sequence are cancelled.",
    ],

    edgeCases: [
      "Never send more than 1 reminder SMS per day per service — notification fatigue is real and citizens block the sender.",
      "WhatsApp reminder for appointments: higher open rate — use by default when WhatsApp is opted in.",
      "Quiet hours (9 PM – 8 AM IST) — reminders are queued and released at 8:05 AM unless they are SLA / rejection class.",
      "Once the citizen completes the action, the rest of the sequence is cancelled — never send 'remember to do X' after they've done X.",
    ],

    doDont: [
      { do: "Escalate tone with each step — amber at D-5, stronger amber at D-2, red at D-0.", dont: "Send identical copy three days in a row — the citizen learns to ignore the channel." },
      { do: "Cancel remaining reminders the moment the citizen completes the action.", dont: "Continue the schedule and tell the citizen to do something they've already done." },
    ],

    a11y: [
      "Escalating tone is in the wording, not just colour — 'In 2 days' is in the body, not only conveyed by red.",
      "Reminder timestamps are absolute ('Tuesday 16 Apr 10:00') in addition to relative ('In 2 days').",
      "Quiet-hours hold is announced once when applicable, with the release time stated.",
    ],

    related: [
      { tag: "Uses", name: "SMS, Email & WhatsApp Templates", href: "#templates", desc: "Reminders reuse the templated content with D-N variables." },
      { tag: "Surfaced in", name: "Notification Centre", href: "#noti-centre", desc: "Every reminder also drops a centre entry until the deadline passes." },
      { tag: "Controlled by", name: "Notification Preferences", href: "#noti-prefs", desc: "Reminder frequency is partially in the citizen's hands." },
    ],

    compliance: {
      law: "TRAI Quiet Hours · DPDP 2023 · OTT communication rules",
      body: [
        "TRAI's commercial communications regulation honours quiet hours from 9 PM to 8 AM IST for non-critical messages. Government transactional reminders are exempt only when the citizen has an active service requiring immediate action.",
        "Promotional reminders are forbidden on this pattern — UX4G reminders are always tied to a citizen-initiated service.",
        "Daily-cap policy: TRAI permits per-template caps; UX4G enforces a maximum of 1 reminder SMS per day per service at the bus level.",
      ],
    },
    dataHandling: [
      "Reminder schedules are stored against the application record and purged 30 days after the deadline passes.",
      "Reminder delivery receipts feed the same 7-year audit log as transactional notifications.",
      "If the citizen disables reminders, the queued schedule is cancelled the same session — no zombie sends from a stale queue.",
    ],
    channels: [
      { channel: "SMS · 1/day cap", ico: "📲", body: "Primary reminder channel. One per service per day. Honours quiet hours. TRAI DLT template required." },
      { channel: "WhatsApp (opt-in)", ico: "💬", body: "Higher open rate for appointment reminders. Used by default when consented and when the reminder is high-value." },
      { channel: "Email", ico: "✉", body: "Long-form reminder with full context — used at D-5 and D-30 where the citizen has time to read." },
      { channel: "Push", ico: "🔔", body: "H-1 and H-0 only — short timing windows where push beats SMS. Never used for D-5 / D-2." },
    ],
    integrations: [
      { sys: "Reminder scheduler", purpose: "Cron-style queue per application with D-N / H-N entries; honours quiet hours and dedup rules." },
      { sys: "SMS aggregator (MSG91 / BSNL gateway)", purpose: "Carrier-bound delivery against the registered DLT template." },
      { sys: "WhatsApp Business API", purpose: "Template-only reminder delivery for opted-in citizens." },
    ],
    notifications: [
      { moment: "Draft created", channel: "—", content: "D-5 / D-2 / D-0 SMS schedule queued, no immediate send." },
      { moment: "D-5", channel: "SMS · Email", content: "Soft amber 'expires in 5 days' with resume link." },
      { moment: "D-2", channel: "SMS", content: "Escalated amber 'only 2 days left' — same template, stronger copy." },
      { moment: "D-0", channel: "SMS · Email", content: "Red 'expired today, start new' — last contact on this draft." },
      { moment: "Appointment H-1", channel: "SMS · WhatsApp · Push", content: "Inspector details, map link, time-of-day reminder." },
      { moment: "Citizen acts (resume / book / pay)", channel: "—", content: "Remaining schedule cancelled." },
    ],
    errorRecovery: {
      text: [
        "Reminder queued during quiet hours — held until 8:05 AM the next morning.",
        "Reminder send fails (DLT or carrier) — retry once with exponential backoff, then drop. Never accumulate failed reminders into a 'mega-send'.",
        "Citizen unsubscribes mid-sequence — all queued sends in the sequence are cancelled the same session.",
      ],
      screens: [
        { name: "Quiet-hours hold", desc: "Reminder queued past 9 PM held until 8:05 AM. Citizen-invisible operationally; visible in the preferences pane.", frame: F.ReminderQuiet },
      ],
    },
  },

  /* ───── 8.5 Notification Preferences ───── */
  {
    id: "noti-prefs",
    num: "PATTERN · 8.5",
    title: "Notification Preferences",
    lede: "How to give the citizen real control over what reaches them and on which channel. Legal notices stay on by policy, consent is always explicit, and changes take effect immediately.",

    whenToUse: [
      "Inside every signed-in account — a citizen always has a way to manage channels.",
      "After a new channel is added to the platform — the new channel is off by default and surfaces a small badge inviting opt-in.",
      "Whenever a citizen reports notification fatigue — the support flow points here first.",
    ],
    whenNotFor: "Anonymous sessions. Officer-facing dashboards (those have their own escalation preferences pattern).",

    flow: [
      "Open Settings → Notifications",
      "Toggle channels",
      "Pick frequency",
      "Confirm opt-ins (WhatsApp)",
      "Save (applies instantly)",
    ],

    screensSet: (() => {
      const base = 'assets/images/pattern-screens/notifications/noti-prefs';
      const flow = [
        { id: '1-notification-channels', label: 'Notification channels', desc: 'Each channel shows where the message will actually land, so the citizen sees exactly which number or address is in play before choosing.' },
        { id: '2-update-frequency', label: 'Update frequency', desc: 'A choice between real-time, end-of-day digest, or weekly summary. The default favours immediacy, because most government events are time-sensitive.' },
        { id: '3-per-service-preferences', label: 'Per-service preferences', desc: 'For citizens managing many services at once, this lets one application stay loud while another can be set to whisper.' },
        { id: '4-mandatory-notifications', label: 'Mandatory notifications', desc: 'Some legal notices have to reach the citizen. These stay visibly fixed with a plain reason, so control is honest, not theatrical.' },
        { id: '5-whatsapp-notifications', label: 'WhatsApp opt-in', desc: 'Sensitive opt-ins ask the citizen in their own words, never a pre-ticked default. Consent has to be a deliberate act, not an assumption.' },
        { id: '6-manage-all-subscriptions', label: 'Manage all subscriptions', desc: 'A single place to see every active opt-in and walk it back. Withdrawal is honoured the same session, no queue, no friction.' },
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
        intro: 'How a citizen tunes the volume on their own life: choose channels, set frequency, override per service, and consent to anything sensitive in their own words.',
        devices: [
          { id: 'desktop', label: 'Desktop', layouts: [mk('desktop', { id: 'card', label: 'Card' })] },
          { id: 'mobile',  label: 'Mobile',  layouts: [mk('mobile',  { id: 'fullscreen', label: 'Full screen' })] },
        ],
      };
    })(),

    screens: [
      { name: "Channel toggles", desc: "SMS / Email / App / WhatsApp — each with a clear status and the linked number / address.", frame: F.PrefsChannels },
      { name: "Frequency", desc: "Immediately / Daily digest 6 PM / Weekly digest. Default is Immediately for transactional events.", frame: F.PrefsFrequency },
      { name: "Mandatory (locked)", desc: "SLA breach plus Rejection notices — always on, the toggle is disabled with a policy explanation.", frame: F.PrefsMandatory },
      { name: "WhatsApp opt-in", desc: "Explicit consent dialog — never a pre-checked toggle.", frame: F.PrefsWhatsAppOptIn },
      { name: "Saved confirmation", desc: "Green toast confirming changes applied immediately.", frame: F.PrefsSaved },
    ],

    components: [
      { name: "Toggle" }, { name: "Dropdown" }, { name: "Accordion" }, { name: "Alert · info" }, { name: "Button" }, { name: "Chip" },
    ],

    behaviour: [
      "Channel toggles apply immediately — there is no Save button. A bottom toast confirms each change.",
      "Mandatory channels (SLA breach, rejection, legal deadlines) are visibly locked and explained — never silently re-enabled after the citizen disables them.",
      "WhatsApp opt-in is an explicit dialog with the full consent string — pre-checking it is a DPDP violation.",
      "Withdrawing consent for a channel cancels every queued message on that channel in the same session.",
    ],

    edgeCases: [
      "Mandatory notifications (SLA breach, rejection, legal deadlines): always on, cannot be disabled. The toggle is disabled with an explanation, not hidden.",
      "WhatsApp: explicit opt-in required — pre-checked opt-in is a dark pattern and a DPDP Section 6 violation.",
      "Changes: apply immediately, confirm with a bottom toast. No 'Save' button — toggles are the save action.",
      "Citizen disables every channel: the centre still works — citizens can never lose access to mandatory legal notifications.",
    ],

    doDont: [
      { do: "Make mandatory channels visibly locked with a clear explanation of why.", dont: "Hide mandatory channels — citizens then think they have control they don't have, then feel deceived." },
      { do: "Require explicit consent for WhatsApp with the full consent string visible.", dont: "Pre-check WhatsApp opt-in. It is a DPDP Section 6 violation and the citizen can lodge a Data Protection Board complaint." },
    ],

    a11y: [
      "Toggle state is announced as on / off, not just by colour or position.",
      "Disabled (mandatory) toggles announce 'always on, required by policy' — never silently disabled with no reason.",
      "Frequency dropdown supports keyboard arrow navigation and type-to-search.",
    ],

    related: [
      { tag: "Affects", name: "Notification Centre", href: "#noti-centre", desc: "Centre still shows mandatory items even when all channels are off." },
      { tag: "Gates", name: "SMS, Email & WhatsApp Templates", href: "#templates", desc: "Templates fire on the channels the citizen has enabled." },
      { tag: "Throttles", name: "Reminder Sequences", href: "#reminders", desc: "Frequency controls how many reminders the citizen receives." },
    ],

    compliance: {
      law: "DPDP Act 2023 · Section 6 (consent) · Section 7 (notice)",
      body: [
        "Consent must be free, specific, informed, and unambiguous. Pre-ticked WhatsApp opt-in violates Section 6 and is the most common DPDP audit finding.",
        "Citizens have the right to withdraw consent at any time — the platform must honour withdrawal in the same session, not at next sync.",
        "Mandatory notifications tied to a legal obligation (SLA breach, rejection) are exempt from consent — but the citizen must still be told they cannot opt out and why.",
      ],
    },
    dataHandling: [
      "Channel preferences are stored against the citizen account and applied at every send-time lookup — never cached at the bus.",
      "Consent receipts for each opt-in / opt-out are written to the immutable consent log with timestamp, IP, and policy version.",
      "Withdrawal cancels every queued message on that channel the same session.",
    ],
    channels: [
      { channel: "SMS", ico: "📲", body: "On by default for transactional events tied to a citizen-initiated service. Toggle controls non-critical messages only — mandatory legal notices still fire." },
      { channel: "Email", ico: "✉", body: "On by default if an email is on file. Off otherwise — the platform never invents an email address." },
      { channel: "App notifications (push)", ico: "🔔", body: "Off until the citizen grants browser / OS permission. Once granted, the citizen-side toggle controls send." },
      { channel: "WhatsApp", ico: "💬", body: "Off by default. Requires explicit opt-in via a consent dialog. Pre-checking is a DPDP violation." },
    ],
    integrations: [
      { sys: "Account preferences service", purpose: "Stores channel and frequency settings per citizen; consulted by every send-time lookup." },
      { sys: "Consent log", purpose: "Immutable record of every opt-in / opt-out with timestamp, IP, and policy version." },
      { sys: "Notification service bus", purpose: "Honours the citizen's preferences at fan-out time — never overrides them." },
    ],
    notifications: [
      { moment: "Preference saved (toggle)", channel: "In-app toast", content: "Preferences saved · Changes apply immediately." },
      { moment: "WhatsApp opt-in granted", channel: "WhatsApp", content: "Welcome message via the verified ministry sender to confirm the channel is live." },
      { moment: "Channel disabled", channel: "—", content: "All queued messages on that channel cancelled the same session." },
      { moment: "Mandatory message override", channel: "SMS (always)", content: "SLA breach / rejection fires regardless of channel preferences. The citizen is told this in the preferences screen." },
    ],
    errorRecovery: {
      text: [
        "Save fails (network) — the toggle reverts visually, a red toast explains, and the citizen retries. Never silently accept a change that didn't reach the server.",
        "WhatsApp opt-in dialog dismissed without confirming — the toggle stays off and no welcome message is sent.",
        "Mandatory channel disabled attempt — the toggle does not move; a toast explains why and links to the policy.",
      ],
      screens: [
        { name: "WhatsApp opt-in dialog", desc: "Explicit consent dialog — never a pre-checked toggle. The exact consent string is visible.", frame: F.PrefsWhatsAppOptIn },
        { name: "Preferences saved", desc: "Green toast confirming the change reached the server.", frame: F.PrefsSaved },
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
        <PtStickyBar patterns={SIDEBAR_PATTERNS} activeSlug="notifications" />
        <PtLeftNav activeSlug="notifications" />
        <PtHero
          slug="notifications"
          num="P-08"
          tag="P-08 · Notifications · Live"
          title="Notifications"
          desc="Bell-icon notification centre, SMS / Email / WhatsApp templates on TRAI-registered DLT, real-time push and in-app updates, scheduled reminder sequences, and granular preferences — all DPDP-compliant."
          meta={["5 patterns"]}
        >
          <img className="ptc-hero-img" src="assets/images/Notifications.png" alt="Notifications illustration" />
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
