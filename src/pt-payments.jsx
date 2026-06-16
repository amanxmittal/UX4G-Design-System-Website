/* global React, ReactDOM */
/* Pattern category: Payment & Transactions — full data-driven build */

/* ───────── Frame mockups ───────── */
const F = {
  PaymentSummary: (
    <PtMock>
      <MS>Step 5 of 5 · Payment</MS>
      <MH>Income Certificate</MH>
      <MDiv />
      <MRow style={{ justifyContent: "space-between" }}><MLabel>Application fee</MLabel><MLabel>₹30.00</MLabel></MRow>
      <MRow style={{ justifyContent: "space-between" }}><MLabel>Processing</MLabel><MLabel>₹5.00</MLabel></MRow>
      <MRow style={{ justifyContent: "space-between" }}><MLabel>GST 18%</MLabel><MLabel>₹6.30</MLabel></MRow>
      <MDiv />
      <MRow style={{ justifyContent: "space-between", fontWeight: 700 }}><MLabel>Total</MLabel><MLabel>₹41.30</MLabel></MRow>
      <MAlert kind="info">Secure payment via BharatKosh (NIC)</MAlert>
    </PtMock>
  ),
  MethodSelector: (
    <PtMock>
      <MH>Choose payment method</MH>
      <MRow><MChip kind="purple">● UPI</MChip><MChip>Net Banking</MChip></MRow>
      <MRow><MChip>Debit/Credit Card</MChip><MChip>BBPS</MChip></MRow>
      <MIn label="name@upi" active />
      <MBtn>Pay ₹41.30</MBtn>
    </PtMock>
  ),
  Processing: (
    <PtMock>
      <MCenter>
        <div style={{ width: 40, height: 40, borderRadius: "50%", border: "3px solid var(--gray-200)", borderTopColor: "var(--primary)" }}></div>
        <MH>Payment in progress</MH>
        <MS>Do not close or refresh</MS>
      </MCenter>
    </PtMock>
  ),
  PaymentSuccess: (
    <PtMock>
      <MCenter><MCheck /><MH>Payment Successful</MH><MS>₹41.30 paid via UPI</MS></MCenter>
      <MDiv />
      <MS>Transaction ID</MS>
      <div style={{ fontFamily: "monospace", fontSize: 10, fontWeight: 700, color: "var(--primary-deep)" }}>BK2026MH1234567</div>
      <MBtn kind="ghost">Download receipt (PDF)</MBtn>
      <MBtn>Track my application</MBtn>
    </PtMock>
  ),
  PaymentFailure: (
    <PtMock>
      <MAlert kind="error"><strong>Payment Failed ·</strong> Bank declined · No amount deducted.</MAlert>
      <MBtn>Try again with UPI</MBtn>
      <MBtn kind="ghost">Try a different method</MBtn>
      <MBtn kind="ghost">Pay at CSC centre</MBtn>
    </PtMock>
  ),
  FeeWaiver: (
    <PtMock>
      <MAlert kind="success"><strong>Application fee waived</strong> for SC/ST applicants · ₹30 waived.</MAlert>
      <MRow style={{ justifyContent: "space-between", fontWeight: 700 }}><MLabel>Total</MLabel><MLabel>₹0.00</MLabel></MRow>
      <MBtn>Proceed without payment</MBtn>
    </PtMock>
  ),
  ReceiptPending: (
    <PtMock>
      <MAlert kind="warn"><strong>Payment received · Receipt pending</strong></MAlert>
      <MS>₹41.30 debited via UPI · Bank confirmation awaited</MS>
      <MDiv />
      <MS>Bank ref no.</MS>
      <div style={{ fontFamily: "monospace", fontSize: 10, fontWeight: 700, color: "var(--primary-deep)" }}>UPI2026A8K42P</div>
      <MBtn>Refresh status</MBtn>
      <MBtn kind="ghost">Notify me when ready</MBtn>
    </PtMock>
  ),
  GatewayTimeout: (
    <PtMock>
      <MAlert kind="warn"><strong>Gateway timeout ·</strong> We're checking the bank for your transaction status. Do not retry yet.</MAlert>
      <MProg pct={60} color="#c97a0c" />
      <MS>Checking with bank · 00:42</MS>
      <MBtn kind="disabled">Retry payment</MBtn>
    </PtMock>
  ),
  DoubleChargeGuard: (
    <PtMock>
      <MAlert kind="info">A payment for this application is already in progress · Started 2 min ago.</MAlert>
      <MS>Bank ref · UPI2026A8K42P</MS>
      <MBtn>Check status</MBtn>
      <MBtn kind="ghost">Cancel previous and retry</MBtn>
    </PtMock>
  ),
  RefundInit: (
    <PtMock>
      <MH>Refund initiated</MH>
      <MRow><MChip kind="purple">Initiated</MChip><MS>15 May 2026</MS></MRow>
      <MS>₹41.30 will be credited to your source account within 5–7 working days.</MS>
      <MDiv />
      <MS>Refund ref</MS>
      <div style={{ fontFamily: "monospace", fontSize: 10, fontWeight: 700, color: "var(--primary-deep)" }}>RFD2026B7H81X</div>
      <MBtn kind="ghost">Download refund receipt</MBtn>
    </PtMock>
  ),
};

/* ───────── Hero stage ───────── */
function HeroViz() {
  return (
    <>
      <div className="ptc-vc" style={{ top: "20px", right: "10%", width: "230px", transform: "rotate(2deg)" }}>
        <MS>Income Certificate Application</MS>
        <MDiv />
        <MRow style={{ justifyContent: "space-between" }}><MLabel>Application fee</MLabel><MLabel>₹30.00</MLabel></MRow>
        <MRow style={{ justifyContent: "space-between" }}><MLabel>Processing</MLabel><MLabel>₹5.00</MLabel></MRow>
        <MRow style={{ justifyContent: "space-between" }}><MLabel>GST 18%</MLabel><MLabel>₹6.30</MLabel></MRow>
        <MDiv />
        <MRow style={{ justifyContent: "space-between", fontWeight: 700 }}><MLabel>Total</MLabel><MLabel>₹41.30</MLabel></MRow>
      </div>
      <div className="ptc-vc" style={{ top: "150px", right: "42%", width: "200px", transform: "rotate(-3deg)" }}>
        <MCenter><MCheck /><MH>Payment Successful</MH><MS>₹41.30 paid via UPI</MS></MCenter>
      </div>
      <div className="ptc-vc" style={{ top: "20px", right: "55%", width: "170px", transform: "rotate(-2deg)" }}>
        <MRow><MChip kind="purple">● UPI</MChip><MChip>Net Banking</MChip></MRow>
        <MRow><MChip>Card</MChip><MChip>BBPS</MChip></MRow>
      </div>
    </>
  );
}

/* ───────── Pattern data ───────── */
const PATTERNS_DATA = [
  {
    id: "payment",
    num: "PATTERN · 5.1",
    title: "Payment & Confirmation",
    lede: "How to take money from a citizen at the end of a long form without losing their data or charging them twice. Government rails first, draft preserved on failure.",

    whenToUse: [
      "Any service that charges a statutory or processing fee — certificates, licences, scheme applications, returns.",
      "Refund initiation when an application is rejected, cancelled, or a duplicate payment is detected.",
      "Bill-pay style flows that settle dues against a citizen account (utility, tax, court fee).",
    ],
    whenNotFor: "Free-of-cost services, status checks, downloads of previously issued documents, or fee waivers where ₹0 is the only outcome — those skip this pattern and go straight to submission.",

    flow: [
      "Show fee summary",
      "Pick a channel",
      "Process via gateway",
      "Confirm success / handle failure",
      "Issue receipt + notification",
    ],

    screensSet: (() => {
      const base = 'assets/images/pattern-screens/payments/payment';
      const fullFlow = [
        { id: 'state-summary-type-mobile-full', label: 'Fee summary', desc: 'Show what the citizen owes before asking how they will pay. Putting the breakdown first means no surprises when the gateway opens.' },
        { id: 'state-method-selection-type-mobile-full', label: 'Method selector', desc: 'Lead with the channel most citizens already trust, order the rest by actual usage. The citizen can switch, but defaults do the work.' },
        { id: 'state-processing-type-mobile-full', label: 'Processing', desc: 'Hold the citizen on a single screen while the bank confirms. Closing here is the top cause of stuck money, so the warning is unmissable.' },
        { id: 'state-success-type-mobile-full', label: 'Success', desc: 'Confirm the debit, hand back proof, then point at what comes next. The transaction ID is selectable so a call to support stays quick.' },
        { id: 'state-failure-type-mobile-full', label: 'Failure', desc: 'Tell the citizen exactly why the bank refused, offer a different route, and keep their form draft intact. Retrying must never mean refilling.' },
        { id: 'state-fee-waiver-type-mobile-full', label: 'Fee waiver', desc: 'When entitlement is detected from Aadhaar, ask before zeroing the total. A silent discount feels like a glitch, a confirmed one feels earned.' },
      ];
      const cardFlow = [
        { id: 'state-summary-type-mobile-card', label: 'Fee summary', desc: 'The same breakdown sized to drop inside an application page rather than take it over. Trust note stays visible without dominating the form.' },
        { id: 'state-method-selection-type-mobile-card', label: 'Method selector', desc: 'Channel choice embedded next to the form so the citizen never loses sight of what they are paying for. Defaults still do the steering.' },
        { id: 'state-processing-type-mobile-card', label: 'Processing', desc: 'An inline waiting state that keeps the surrounding context, with the same blunt warning about not closing or refreshing the page.' },
        { id: 'state-success-type-mobile-card', label: 'Success', desc: 'Confirmation that lives inside the application context, handing over a transaction reference and a clear next step without yanking the citizen elsewhere.' },
        { id: 'state-failure-type-mobile-card', label: 'Failure', desc: 'The bank reason surfaces inside the form context so the citizen can act without losing place. Draft is preserved, retry is one tap.' },
        { id: 'state-fee-waiver-type-mobile-card', label: 'Fee waiver', desc: 'Confirm the entitlement inside the existing layout before the total moves. The citizen sees why they qualify, not just that something changed.' },
      ];
      const desktopFullFlow = [
        { id: 'state-summary-type-desktop-full', label: 'Fee summary', desc: 'Wider canvas means the breakdown and the trust note can sit side by side. Total stays the loudest thing on the screen.' },
        { id: 'state-method-selection-type-desktop-full', label: 'Method selector', desc: 'Two columns of channels with the metadata a desktop user expects to see at a glance. Default still leads with the rail most likely to succeed.' },
        { id: 'state-processing-type-desktop-full', label: 'Processing', desc: 'Full-page wait so the citizen does not wander off mid-debit. The do-not-close warning carries the gateway name to anchor trust.' },
        { id: 'state-success-type-desktop-full', label: 'Success', desc: 'A confirmation that gives the citizen the receipt, the reference, and the next destination in one glance, all selectable for support calls.' },
        { id: 'state-failure-type-desktop-full', label: 'Failure', desc: 'Failure laid out for desktop with the bank reason, a different route, and the offline counter as a last resort. Draft survives the round trip.' },
        { id: 'state-fee-waiver-type-desktop-full', label: 'Fee waiver', desc: 'Confirmation of entitlement before the price moves to zero, sized for desktop so the reason and the change are read together.' },
      ];
      const desktopCardFlow = [
        { id: 'state-summary-type-desktop-card', label: 'Fee summary', desc: 'Breakdown packaged to embed inside a dashboard or a multi-step page. Same numbers, lower visual weight, no loss of clarity on the total.' },
        { id: 'state-method-selection-type-desktop-card', label: 'Method selector', desc: 'Channel picker scoped to sit beside the rest of the application so the citizen never context-switches just to pay the fee.' },
        { id: 'state-processing-type-desktop-card', label: 'Processing', desc: 'Embedded waiting state that holds the surrounding work in place while the bank confirms, warning included without the full-page takeover.' },
        { id: 'state-success-type-desktop-card', label: 'Success', desc: 'Success delivered inside the dashboard context, with the transaction reference and the path to the artefact both reachable without leaving.' },
        { id: 'state-failure-type-desktop-card', label: 'Failure', desc: 'Failure surfaced inside the page the citizen was already on, with the bank reason and a fast route back without losing draft.' },
        { id: 'state-fee-waiver-type-desktop-card', label: 'Fee waiver', desc: 'Entitlement confirmed in place so the dashboard total updates only after the citizen sees the reason. No silent reductions.' },
      ];
      const mk = (device, flow, layoutId, layoutLabel) => ({
        id: layoutId,
        label: layoutLabel,
        screens: flow.map((s) => ({
          id: device + '-default-' + s.id,
          label: s.label,
          desc: s.desc,
          src: base + '/' + device + '-default-' + s.id + '.png',
        })),
      });
      return {
        intro: 'Six frames showing how a fee request behaves end to end. Defaults steer the citizen toward the channel most likely to succeed, failure never costs their form.',
        devices: [
          {
            id: 'desktop',
            label: 'Desktop',
            layouts: [
              mk('desktop', desktopFullFlow, 'full', 'Full screen'),
              mk('desktop', desktopCardFlow, 'card', 'Card'),
            ],
          },
          {
            id: 'mobile',
            label: 'Mobile',
            layouts: [
              mk('mobile', fullFlow, 'full', 'Full screen'),
              mk('mobile', cardFlow, 'card', 'Card'),
            ],
          },
        ],
      };
    })(),

    screens: [
      { name: "Payment summary", desc: "Fee breakdown line by line, total in bold, BharatKosh trust note below.", frame: F.PaymentSummary },
      { name: "Method selector", desc: "Four government channels — UPI, Net Banking, Card, BBPS. UPI is the default in line with NPCI guidance.", frame: F.MethodSelector },
      { name: "Processing", desc: "Full-card spinner with explicit \"do not close or refresh\" — closing here is the #1 cause of stuck transactions.", frame: F.Processing },
      { name: "Payment success", desc: "Green tick, masked method, transaction ID, receipt download, track-application CTA.", frame: F.PaymentSuccess },
      { name: "Fee waiver auto-applied", desc: "SC/ST detected from Aadhaar — fee waived with citizen confirmation before the total drops to ₹0.", frame: F.FeeWaiver },
      { name: "Receipt pending", desc: "Bank debit confirmed but gateway settlement awaited — the most common India gov payment edge case.", frame: F.ReceiptPending },
    ],

    components: [
      { name: "Card" }, { name: "Input" }, { name: "Button" },
      { name: "Alert" }, { name: "Badge" }, { name: "Spinner" }, { name: "Receipt Card" },
    ],

    behaviour: [
      "Before every Pay tap, the system checks for an in-progress transaction on the same application — never let the citizen pay twice.",
      "UPI is the default selected channel; the citizen can switch, but the order is set by NPCI usage data — UPI, Net Banking, Card, BBPS.",
      "On failure the citizen returns to the method selector with the failed channel greyed and the form draft intact — never re-fill.",
      "Receipt is generated server-side from the gateway webhook, not from the success page render — the page only displays the receipt URL.",
      "Auto-detected SC/ST waiver shows a confirmation step before the total drops — never silently zero out the fee.",
    ],

    edgeCases: [
      "Payment success but receipt pending: bank debited, settlement awaited — show the bank reference, poll the gateway, notify when reconciled.",
      "Gateway timeout (>30s no response): hold the retry button, query the bank, only let the citizen retry once status is confirmed.",
      "Double-charge guard: an existing pending transaction is shown with a Check status / Cancel and retry choice — Pay is blocked.",
      "Failed payment with saved draft: form data is held server-side; payment retry must never require re-filling the form.",
      "Refund initiation: rejected applications or duplicate payments trigger a refund record visible in the citizen's dashboard with the source-bank ETA.",
    ],

    doDont: [
      { do: "Route every government payment through BharatKosh / SBIePay / NPCI rails — gateways the Govt of India has certified.", dont: "Don't route government fees through a third-party-only aggregator (Razorpay, PayU) unless the implementation is separately PFMS-certified." },
      { do: "Show the exact fee breakdown including GST before any payment screen.", dont: "Don't surprise the citizen on the gateway page with a processing or convenience fee that wasn't on the summary." },
      { do: "Treat \"payment success but receipt pending\" as a first-class state with its own screen and a notify-me option.", dont: "Don't show a generic spinner or leave the citizen stuck on the processing screen while the bank reconciles." },
    ],

    a11y: [
      "Fee table is a real <table> with row headers — screen readers read \"Application fee, ₹30\".",
      "Processing screen announces \"Payment in progress, do not close or refresh\" as a polite live region.",
      "Transaction ID is selectable text with copy-to-clipboard, not an image.",
      "Method chips form a radio group with arrow-key navigation; the selected channel is announced.",
      "Failure alerts use aria-live=\"assertive\" so the citizen hears the reason without re-focusing the page.",
    ],

    related: [
      { tag: "Before", name: "Government Form with Validation", href: "UX4G Application.html#form", desc: "The form whose fee this pattern collects." },
      { tag: "After", name: "Status Tracking", href: "UX4G Status.html#tracking", desc: "Where the citizen lands with the application reference number." },
      { tag: "Pair with", name: "Notifications & Receipts", href: "UX4G Notifications.html", desc: "DLT SMS and email receipt delivery." },
    ],

    compliance: {
      law: "RBI · PCI-DSS · DPDP 2023 · PFMS",
      body: [
        "Payment aggregators must be RBI-licensed under the 2020 Payment Aggregator Guidelines — third-party gateways need explicit certification for government use.",
        "Card data is PCI-DSS scope: never store full PANs on app servers — only the gateway-issued token ID can be retained.",
        "Payment metadata (amount, time, recipient, citizen ID) is personal data under DPDP 2023 and must be processed with the consent and purpose declared at the fee summary step.",
        "Public Financial Management System (PFMS) rules govern how fees collected are remitted to the consolidated fund — reconciliation reports are mandatory.",
      ],
    },
    dataHandling: [
      "Full card numbers are never stored — only the gateway-issued token ID and last-4 are retained for receipt display.",
      "PII (name, mobile) is kept separate from payment metadata (amount, txn ID, timestamps) — joined only at receipt-render time via a server-side view.",
      "Receipts and refund records are immutable artefacts with hash + timestamp, retained per PFMS audit rules (typically 7 years).",
      "Webhook payloads are signature-verified before being trusted — never accept a success state from a client-side redirect alone.",
    ],
    channels: [
      { channel: "UPI", ico: "₹", body: "NPCI rails · default channel · lowest failure rate · Web OTP / app intent." },
      { channel: "Net Banking", ico: "🏦", body: "70+ banks via BharatKosh / SBIePay · server-to-server confirmation." },
      { channel: "Debit / Credit Card", ico: "💳", body: "Tokenised via the gateway · PAN never touches our servers · 3-D Secure mandatory." },
      { channel: "BBPS / Bharat Bill Pay", ico: "📄", body: "For utility-style government dues · NPCI-operated · same-day settlement." },
    ],
    integrations: [
      { sys: "BharatKosh (NIC)", purpose: "Primary Govt of India payment gateway — non-tax receipts route here by default." },
      { sys: "SBIePay", purpose: "Aggregator across SBI rails for ministries that prefer it over BharatKosh." },
      { sys: "NPCI · UPI", purpose: "UPI rails for the default UPI channel; collect-request and intent-based flows." },
      { sys: "Webhook handler", purpose: "Signature-verified async confirmation — the source of truth for receipt generation, not the redirect." },
      { sys: "GST / Tax receipt generator", purpose: "Issues the GST line on the receipt PDF where the fee is taxable." },
    ],
    statusVocab: [
      { name: "Initiated", color: "Grey", hex: "#5b6470", meaning: "Pay button pressed; gateway has not yet confirmed receipt of the request." },
      { name: "Pending", color: "Amber", hex: "#c97a0c", meaning: "Bank has debited the citizen but settlement / reconciliation is still in progress." },
      { name: "Success", color: "Green", hex: "#106c35", meaning: "Webhook confirmed; receipt generated; application can move to the next stage." },
      { name: "Failed", color: "Red", hex: "#db372d", meaning: "Gateway returned a failure; no amount deducted (or auto-reversed within the same session)." },
      { name: "Refunded", color: "Blue", hex: "#1a5ec2", meaning: "Original txn was successful but later reversed — refund record present in the dashboard." },
      { name: "Reconciled", color: "Deep Green", hex: "#0d4f27", meaning: "Settlement file matched and posted to PFMS — terminal accounting state." },
    ],
    notifications: [
      { moment: "On success", channel: "SMS (TRAI DLT)", content: "Approved template — fee, ref no., service name, helpline." },
      { moment: "On success", channel: "Email", content: "Receipt PDF attached, signed by the gateway with a verifiable hash." },
      { moment: "On failure", channel: "In-app + SMS", content: "Specific reason (Bank declined / Insufficient funds / Cancelled by user) with a Retry deep-link." },
      { moment: "On receipt pending", channel: "Push / SMS", content: "Notify-me toggle — fires once the gateway settles, no manual polling." },
      { moment: "On refund initiated", channel: "SMS + Email", content: "Refund ref, source account last-4, expected credit window (5–7 working days)." },
    ],
    vle: {
      text: "At a CSC counter, the VLE accepts cash from the citizen and pays through the kiosk's pre-authenticated UPI / Net Banking session. The receipt prints on the kiosk printer and is also pushed to the citizen's mobile via DLT SMS. Card swipe is offered only on CSCs with a certified PoS terminal.",
      flow: ["VLE confirms fee with citizen", "Cash collected", "Kiosk pays via UPI", "Print + SMS receipt"],
    },
    errorRecovery: {
      text: [
        "Receipt pending is the highest-volume India gov payment edge case — never collapse it into a generic \"please wait\".",
        "On gateway timeout, the retry button is held disabled until the bank confirms status — re-tapping Pay during an unknown state is what causes double charges.",
        "Refund initiation is automatic for duplicate payments detected by the reconciliation job — the citizen sees a Refunded chip on their dashboard without filing a request.",
      ],
      screens: [
        { name: "Payment failure", desc: "Specific bank reason with a Retry / different method / pay-at-CSC fallback. Draft is preserved.", frame: F.PaymentFailure },
        { name: "Gateway timeout", desc: "Bank-status check in progress · retry button held disabled to prevent double-charge.", frame: F.GatewayTimeout },
        { name: "Double-charge guard", desc: "Existing pending transaction surfaced before a second Pay tap — Check status or Cancel-and-retry.", frame: F.DoubleChargeGuard },
        { name: "Refund initiated", desc: "Refund record with ref number and source-bank ETA · downloadable refund receipt.", frame: F.RefundInit },
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
        <PtStickyBar patterns={SIDEBAR_PATTERNS} activeSlug="payments" />
        <PtLeftNav activeSlug="payments" />
        <PtHero
          slug="payments"
          num="P-05"
          tag="P-05 · Payment & Transactions · Live"
          title="Payment & Transactions"
          desc="Government payments via BharatKosh (NIC) — never third-party-only. Fee breakdowns, UPI / Net Banking / Card / BBPS channels, automatic SC/ST fee waiver, receipt-pending handling, and double-payment prevention."
          meta={["1 pattern · 9 frames"]}
        >
          <img className="ptc-hero-img" src="assets/images/Payment & Transactions.png" alt="Payment & Transactions illustration" />
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
