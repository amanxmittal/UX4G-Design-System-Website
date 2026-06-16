/* global React, ReactDOM */
/* Pattern category: Consent & Declaration — full data-driven build */

/* ───────── Frame mockups ───────── */
const F = {
  ConsentPurpose: (
    <PtMock>
      <MS>DPDP · Purpose-specific consent</MS>
      <MH>Your Data, Your Control</MH>
      <MS>To process your Income Certificate, the Revenue Dept needs:</MS>
      <MDiv />
      <MRow><MChip kind="error">Required</MChip><MLabel>Aadhaar (e-KYC)</MLabel></MRow>
      <MRow><MChip kind="error">Required</MChip><MLabel>Address proof</MLabel></MRow>
      <MRow><MChip>Optional</MChip><MLabel>Email for updates</MLabel></MRow>
      <MS>☐ I consent to sharing the required information</MS>
      <MBtn kind="disabled">Proceed</MBtn>
    </PtMock>
  ),
  ConsentRequired: (
    <PtMock>
      <MS>Step 2 of 4</MS>
      <MH>One required consent missing</MH>
      <MAlert kind="warn"><strong>Address proof</strong> is required to verify residence. Without it, your Income Certificate cannot be issued.</MAlert>
      <MBtn>Review and consent</MBtn>
      <MBtn kind="ghost">Exit application</MBtn>
    </PtMock>
  ),
  ConsentAlready: (
    <PtMock>
      <MAlert kind="success">You consented on <strong>10 Apr 2026</strong> · Policy v2.1</MAlert>
      <MS>Required data: Aadhaar, Address · Optional: Email</MS>
      <MBtn>Proceed</MBtn>
      <MLabel><span style={{ color: "#db372d" }}>Withdraw consent</span></MLabel>
    </PtMock>
  ),
  ConsentWithdraw: (
    <PtMock>
      <MH>Withdraw consent?</MH>
      <MAlert kind="warn">If you withdraw, this application will be cancelled and your draft erased after 30 days as per DPDP retention rules.</MAlert>
      <MBtn kind="danger">Withdraw and cancel</MBtn>
      <MBtn kind="ghost">Keep application active</MBtn>
    </PtMock>
  ),
  ConsentLog: (
    <PtMock>
      <MH>Consent history</MH>
      <MRow><MChip kind="success">Active</MChip><MLabel>Income Cert · 10 Apr 2026</MLabel></MRow>
      <MRow><MChip kind="success">Active</MChip><MLabel>PM Kisan DBT · 22 Mar 2026</MLabel></MRow>
      <MRow><MChip>Withdrawn</MChip><MLabel>SMS Updates · 15 Apr 2026</MLabel></MRow>
      <MLabel><span style={{ color: "var(--primary)" }}>Download consent history PDF</span></MLabel>
    </PtMock>
  ),

  ShareDisclosure: (
    <PtMock>
      <MH>Data Sharing Consent</MH>
      <MRow><MChip kind="purple">DPDP Section 7</MChip></MRow>
      <MDiv />
      <MRow><MChip kind="error">Required</MChip><MLabel>Bank of India</MLabel></MRow>
      <MS>Aadhaar last-4 + Name · Account matching · 1 year</MS>
      <MRow><MChip kind="error">Required</MChip><MLabel>Payment Corporation</MLabel></MRow>
      <MS>Txn ID · Settlement · 90 days</MS>
      <MRow><MChip>Optional</MChip><MLabel>SMS Gateway · for notifications</MLabel></MRow>
      <MBtn>Confirm sharing</MBtn>
    </PtMock>
  ),
  SharePauseService: (
    <PtMock>
      <MH>Withdraw bank sharing?</MH>
      <MAlert kind="warn">Withdrawing will <strong>pause your PM Kisan</strong> bank transfer from next cycle. You can re-consent any time.</MAlert>
      <MBtn kind="danger">Withdraw consent</MBtn>
      <MBtn kind="ghost">Keep sharing active</MBtn>
    </PtMock>
  ),
  SharePerRecipient: (
    <PtMock>
      <MS>Choose what to share with each recipient</MS>
      <MRow><MLabel>Bank of India</MLabel><MChip kind="purple">Required</MChip></MRow>
      <MRow><MChip>☑ Aadhaar last-4</MChip><MChip>☑ Name</MChip></MRow>
      <MDiv />
      <MRow><MLabel>SMS Gateway</MLabel><MChip>Optional</MChip></MRow>
      <MRow><MChip>☐ Mobile number</MChip></MRow>
      <MBtn>Save preferences</MBtn>
    </PtMock>
  ),

  DeclarationScroll: (
    <PtMock>
      <MH>Declaration</MH>
      <div style={{ background: "var(--gray-50)", borderRadius: 4, padding: 8, fontSize: 8.5, color: "var(--gray-600)", lineHeight: 1.5, maxHeight: 76, overflow: "hidden", position: "relative" }}>
        I solemnly declare that the information furnished in this application is true and correct to the best of my knowledge and belief. I understand that any false statement renders me liable for penal action under Section 193 IPC…
        <div style={{ position: "absolute", inset: "auto 0 0 0", height: 24, background: "linear-gradient(180deg,transparent,var(--gray-50))" }}></div>
      </div>
      <MLabel>↓ Scroll to read all</MLabel>
      <MS>☐ I have read and agree (disabled until scrolled)</MS>
    </PtMock>
  ),
  DeclarationPenalty: (
    <PtMock>
      <MAlert kind="warn"><strong>Legal notice ·</strong> Furnishing false information is punishable under Section 193 IPC — up to 7 years imprisonment.</MAlert>
      <MS>☑ I have read and agree to the above declaration</MS>
      <MIn label="Sign with your full name (as per Aadhaar)" active />
    </PtMock>
  ),
  DeclarationReady: (
    <PtMock>
      <MS>☑ I have read and agree</MS>
      <MIn label="Ramesh Kumar" active />
      <MAlert kind="success">Name matches Aadhaar record</MAlert>
      <MBtn>Submit application</MBtn>
    </PtMock>
  ),
  DeclarationNameMismatch: (
    <PtMock>
      <MIn label="Ramesh K." active />
      <MAlert kind="error">Name doesn't match Aadhaar. Use the full name as on Aadhaar to sign.</MAlert>
      <MBtn kind="disabled">Submit application</MBtn>
    </PtMock>
  ),
};

/* ───────── Hero stage ───────── */
function HeroViz() {
  return (
    <>
      <div className="ptc-vc" style={{ top: "20px", right: "8%", width: "230px", transform: "rotate(2deg)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
          <MChip kind="purple">DPDP · Required</MChip>
        </div>
        <div style={{ fontSize: 11, fontWeight: 700, marginBottom: 6 }}>Your Data, Your Control</div>
        <div style={{ fontSize: 9, color: "var(--gray-600)", lineHeight: 1.4 }}>To process your Income Certificate, the Revenue Dept will use:</div>
        <div style={{ marginTop: 8, fontSize: 9, lineHeight: 1.6 }}>
          ☑ Aadhaar — Required<br />
          ☑ Address — Required<br />
          ☐ Email — Optional
        </div>
      </div>
      <div className="ptc-vc" style={{ top: "150px", right: "42%", width: "200px", transform: "rotate(-3deg)" }}>
        <MAlert kind="warn">Required consent not given — you cannot proceed.</MAlert>
        <div style={{ marginTop: 8 }}><MBtn>Review consent</MBtn></div>
      </div>
      <div className="ptc-vc" style={{ top: "10px", right: "50%", width: "150px", transform: "rotate(-2deg)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ width: 22, height: 22, borderRadius: "50%", background: "#106c35", color: "#fff", display: "grid", placeItems: "center", fontSize: 11 }}>✓</div>
          <div style={{ fontSize: 10, fontWeight: 600 }}>Consented 10 Apr</div>
        </div>
      </div>
    </>
  );
}

/* ───────── Pattern data ───────── */
const PATTERNS_DATA = [
  {
    id: "consent-capture",
    num: "PATTERN · 2.1",
    title: "Consent Capture",
    lede: "What the citizen agrees to and why, written so the purpose is unmistakable. Required and optional asks are kept apart, so a yes here is a yes only to this.",
    whenToUse: [
      "Any time a service begins collecting or processing personal data",
      "Before fetching Aadhaar e-KYC or any UIDAI-bound API",
      "Whenever the purpose, retention, or recipients of data change mid-flow",
    ],
    whenNotFor: "Public information requests, status checks, or anonymous content browsing where no personal data is collected.",
    flow: [
      "Open service",
      "Show purpose + data table",
      "Citizen reviews required vs optional",
      "Tick required consent",
      "Proceed to form",
    ],
    screensSet: (() => {
      const base = "assets/images/pattern-screens/consent/consent-capture";
      const flow = [
        { card: "state-default-type-card", full: "state-default-type-full-screen",
          label: "Default", desc: "Open with what is being asked and why. Required and optional sit apart so a citizen can say yes to one without the other." },
        { card: "state-consent-not-given-type-card", full: "state-consent-not-given-type-full-screen",
          label: "Consent not given", desc: "When the required tick is missing, the path forward stays closed. The reason is named, so the citizen knows which ask still needs an answer." },
        { card: "state-consent-log-type-card", full: "state-consent-log-type-full-screen",
          label: "Consent log", desc: "A standing record of what was agreed, when, and under which policy version. Withdrawing is a peer action, not buried under settings." },
      ];
      const mk = (device, layoutId, layoutLabel, key) => ({
        id: layoutId, label: layoutLabel,
        screens: flow.map((s) => ({
          id: device + "-default-" + s[key],
          label: s.label, desc: s.desc,
          src: base + "/" + device + "-default-" + s[key] + ".png",
        })),
      });
      return {
        intro: "Three states of the same ask: the offer, the moment it stalls without a yes, and the receipt the citizen can revisit later.",
        devices: [
          { id: "desktop", label: "Desktop", layouts: [
            mk("desktop", "card",       "Card",        "card"),
            mk("desktop", "fullscreen", "Full screen", "full"),
          ]},
          { id: "mobile",  label: "Mobile",  layouts: [
            mk("mobile",  "card",       "Card",        "card"),
            mk("mobile",  "fullscreen", "Full screen", "full"),
          ]},
        ],
      };
    })(),
    screens: [
      { name: "Purpose statement", desc: "Header, purpose, required + optional table, single checkbox below.", frame: F.ConsentPurpose },
      { name: "Required missing", desc: "Amber callout when a required consent isn't given. Citizen cannot proceed.", frame: F.ConsentRequired },
      { name: "Already consented", desc: "Green confirmation with the policy version stamp and a Withdraw option.", frame: F.ConsentAlready },
    ],
    components: [
      { name: "Checkbox" }, { name: "Button" }, { name: "Alert" }, { name: "Card" }, { name: "Chip" },
    ],
    behaviour: [
      "The proceed action stays disabled until every required consent is checked.",
      "Each required item shows the data fields used, the purpose, and how long the data is retained.",
      "Optional consents pre-checked is not allowed under DPDP — every box starts empty.",
      "Re-visiting a service that already has valid consent skips the page but shows the consent date and a Withdraw link.",
    ],
    edgeCases: [
      "Purpose change after consent: ask again, do not silently extend the original consent.",
      "Policy version bump: anyone signed on an older version sees the changes diff before proceeding.",
      "Minor (under 18): require parent / guardian consent flow per DPDP Section 9.",
    ],
    doDont: [
      { do: "List every data field by name — \"Aadhaar (last-4)\", not \"identity data\".", dont: "Don't hide what you collect behind vague labels like \"identity data\" or \"profile information\"." },
      { do: "Show retention period and recipient for each required consent.", dont: "Don't bundle multiple consents under one checkbox or pre-tick optional rows." },
    ],
    a11y: [
      "Each checkbox has a visible label and a hidden description naming the data fields.",
      "Required state is announced — not signalled only by colour.",
      "Disabled Proceed has aria-disabled and a tooltip explaining which consent is missing.",
    ],
    related: [
      { tag: "Pair with", name: "Data Sharing Consent", href: "#data-sharing", desc: "Separate consent for sharing data with banks, partners, or other ministries." },
      { tag: "Final step", name: "Declaration Before Submission", href: "#declaration", desc: "The attestation that follows after all consents are captured." },
    ],
    compliance: {
      law: "DPDP Act 2023 · Section 6",
      body: [
        "Consent must be free, specific, informed, unconditional, and unambiguous.",
        "Pre-ticked boxes and bundled consents are explicitly prohibited.",
        "Every consent record must include date, time, version, IP, and consent text — retrievable by the citizen.",
      ],
    },
    dataHandling: [
      "Only the fields tied to the stated purpose are collected — no \"future use\" sweeps.",
      "Consent log is retained 7 years per DPDP record-keeping requirements, separate from service data.",
      "Withdrawal triggers data minimisation: keep only what is required by other laws (tax, audit) and erase the rest within 30 days.",
    ],
    integrations: [
      { sys: "DPDP Consent Manager", purpose: "Issue and store consent artefacts with version stamps." },
      { sys: "DigiLocker (optional)", purpose: "Bind consent receipt to the citizen's locker for self-service retrieval." },
    ],
    errorRecovery: {
      text: [
        "If the consent service is down, queue the request and show the citizen \"Saved — we'll request consent again when the service is back.\"",
        "Never auto-grant consent on a retry — every retry is a fresh ask.",
      ],
      screens: [
        { name: "Withdraw consent", desc: "Modal that explains the downstream effect before destruction.", frame: F.ConsentWithdraw },
        { name: "Consent history", desc: "Citizen-visible log of every active and withdrawn consent.", frame: F.ConsentLog },
      ],
    },
  },

  {
    id: "data-sharing",
    num: "PATTERN · 2.2",
    title: "Data Sharing Consent",
    lede: "Sharing data is a separate ask from collecting it, and each recipient is named by hand. Withdrawal stays available even when it pauses a benefit downstream.",
    whenToUse: [
      "Sharing identity or transactional data with any external entity (bank, partner ministry, payment processor)",
      "Linking a service to a DBT account for direct benefit transfer",
      "Onward sharing where the purpose differs from the original collection purpose",
    ],
    whenNotFor: "Internal departmental processing of data already collected for the same purpose; sharing with court / law-enforcement under legal compulsion (consent isn't required and pretending it is misleads the citizen).",
    flow: [
      "Service triggers share",
      "Show recipient + fields + retention",
      "Citizen ticks per recipient",
      "Consent receipt issued",
      "Data shared via DEPA / Consent Manager",
    ],
    screensSet: (() => {
      const base = "assets/images/pattern-screens/consent/data-sharing";
      const flow = [
        { card: "state-disclosure-type-card", full: "state-disclosure-type-full-screen",
          label: "Disclosure", desc: "Each recipient is named in full, with the exact fields and how long they keep them. No bundled language, no trusted-partner shorthand." },
        { card: "state-manage-type-card", full: "state-manage-type-full-screen",
          label: "Manage shares", desc: "Per-recipient control, so a citizen can agree to the bank and decline the SMS gateway in the same view, without backing out." },
        { card: "state-withdraw-type-card", full: "state-withdraw-type-full-screen",
          label: "Withdraw", desc: "Withdrawal always succeeds first; the downstream effect, like a paused benefit, is named honestly but never used to block the choice." },
        { card: "state-history-type-card", full: "state-history-type-full-screen",
          label: "Share history", desc: "A standing record of every recipient, the fields they got, the consent version, and whether the share is still active or revoked." },
      ];
      const mk = (device, layoutId, layoutLabel, key) => ({
        id: layoutId, label: layoutLabel,
        screens: flow.map((s) => ({
          id: device + "-default-" + s[key],
          label: s.label, desc: s.desc,
          src: base + "/" + device + "-default-" + s[key] + ".png",
        })),
      });
      return {
        intro: "Four states of a sharing ask: who gets what, per-recipient control, withdrawal with the consequences shown honestly, and the audit the citizen can revisit.",
        devices: [
          { id: "desktop", label: "Desktop", layouts: [
            mk("desktop", "card",       "Card",        "card"),
            mk("desktop", "fullscreen", "Full screen", "full"),
          ]},
          { id: "mobile",  label: "Mobile",  layouts: [
            mk("mobile",  "card",       "Card",        "card"),
            mk("mobile",  "fullscreen", "Full screen", "full"),
          ]},
        ],
      };
    })(),
    screens: [
      { name: "Sharing disclosure", desc: "Per-recipient cards listing exact fields, purpose, retention period.", frame: F.ShareDisclosure },
      { name: "Per-recipient toggles", desc: "Each recipient gets its own consent block — granular, not bundled.", frame: F.SharePerRecipient },
    ],
    components: [
      { name: "Checkbox" }, { name: "Card" }, { name: "Chip" }, { name: "Button" }, { name: "Alert" },
    ],
    behaviour: [
      "Each recipient is named — \"Bank of India\", not \"partner banks\".",
      "Granting is per-recipient: a citizen can share with the bank but decline SMS gateway.",
      "Withdrawal must always succeed — the system acknowledges it before showing any downstream impact.",
    ],
    edgeCases: [
      "If a required recipient's consent is withdrawn, the linked service pauses but the consent receipt remains valid up to its expiry.",
      "Re-consent prompt: triggered when a recipient changes the purpose or extends retention.",
      "Recipients added later require a fresh consent — never inherited from the original.",
    ],
    doDont: [
      { do: "Name every recipient explicitly with their role — \"Bank of India · for direct credit\".", dont: "Don't hide recipients behind labels like \"trusted partners\" or \"affiliated services\"." },
      { do: "Show what each recipient gets — exact fields, not categories.", dont: "Don't refuse withdrawal because the citizen has an active benefit linked to that share." },
    ],
    a11y: [
      "Each recipient block is a labelled region — screen reader reads \"recipient: Bank of India, required, 4 fields shared\".",
      "Withdrawal confirmation is announced when triggered.",
      "Per-row required / optional state is in text, not just colour.",
    ],
    related: [
      { tag: "Before", name: "Consent Capture", href: "#consent-capture", desc: "Collection consent is captured first; sharing is a separate, later ask." },
      { tag: "Final step", name: "Declaration Before Submission", href: "#declaration", desc: "Sharing consents are recapped in the declaration." },
    ],
    compliance: {
      law: "DPDP Act 2023 · Section 7 · DEPA framework",
      body: [
        "Sharing consent is separate from collection consent — they cannot be merged into one box.",
        "Every recipient must be named, with purpose and retention disclosed before consent is sought.",
        "Withdrawal is a citizen right and cannot be denied; downstream impact may be acknowledged but never used to block withdrawal.",
      ],
    },
    dataHandling: [
      "Shared data is bound by a DEPA-style consent artefact — recipients can verify validity without re-asking the citizen.",
      "Each share is logged with timestamp, recipient ID, fields shared, and consent version.",
      "On withdrawal, the recipient is notified and must purge or stop using the data within 30 days unless a separate legal basis applies.",
    ],
    integrations: [
      { sys: "DPDP Consent Manager", purpose: "Issues and signs consent artefacts for each recipient." },
      { sys: "DEPA / Account Aggregator", purpose: "For financial data shares, routes via licensed AAs." },
      { sys: "Recipient APIs", purpose: "Banks, partner ministries, payment processors receiving the data." },
    ],
    errorRecovery: {
      text: [
        "If sharing fails mid-flow, the consent receipt is voided and the citizen is shown the failed recipient.",
        "Partial shares are never silently retried — every retry asks again.",
      ],
      screens: [
        { name: "Pause downstream service", desc: "Withdrawal modal naming the affected service before destruction.", frame: F.SharePauseService },
      ],
    },
  },

  {
    id: "declaration",
    num: "PATTERN · 2.3",
    title: "Declaration Before Submission",
    lede: "The legal weight made unavoidable. The citizen must read to the end before agreeing, the penalty notice stays in view, and the signature only accepts the registered name.",
    whenToUse: [
      "Before submitting any application that creates a legal record (certificates, returns, benefit claims)",
      "Whenever false declarations carry penal consequences",
      "Final step of an Application Submission pattern",
    ],
    whenNotFor: "Information browsing, profile edits, or queries that don't carry legal weight.",
    flow: [
      "All form steps validated",
      "Show declaration text",
      "Citizen scrolls fully",
      "Tick agree + type name",
      "Submit",
    ],
    screensSet: (() => {
      const base = "assets/images/pattern-screens/consent/declaration";
      const flow = [
        { id: "1-declaration", label: "Declaration",
          desc: "Open with the declaration in full, scrollable in place. Agreement stays locked until the citizen has reached the end of the legal text." },
        { id: "2-after-scroll", label: "After scroll",
          desc: "Once the citizen has read to the bottom, agreement unlocks. The Section 193 IPC penalty notice stays visible the whole time, never tucked away." },
        { id: "3-ready-to-submit", label: "Ready to submit",
          desc: "Agreement ticked and a typed signature that matches the Aadhaar-registered name. Only then does submission become available, never before." },
      ];
      const mk = (device, layout) => ({
        id: layout.id,
        label: layout.label,
        screens: flow.map((s) => ({
          id: device + "-" + layout.id + "-" + s.id,
          label: s.label,
          desc: s.desc,
          src: base + "/" + device + "-" + layout.id + "-" + s.id + ".png",
        })),
      });
      return {
        intro: "Three states of the final attestation: declaration shown in full, scroll-to-read complete, and the ready-to-submit moment with a verified typed signature.",
        devices: [
          {
            id: "desktop",
            label: "Desktop",
            layouts: [
              mk("desktop", { id: "card",       label: "Card" }),
              mk("desktop", { id: "fullscreen", label: "Full screen" }),
            ],
          },
          {
            id: "mobile",
            label: "Mobile",
            layouts: [
              mk("mobile", { id: "card",       label: "Card" }),
              mk("mobile", { id: "fullscreen", label: "Full screen" }),
            ],
          },
        ],
      };
    })(),
    screens: [
      { name: "Scroll to read", desc: "Declaration in a scrollable box. The agree checkbox is disabled until the scroll reaches the end.", frame: F.DeclarationScroll },
      { name: "Penalty notice", desc: "Amber Section 193 IPC warning — never collapsible — sits above the agree row.", frame: F.DeclarationPenalty },
      { name: "Ready to submit", desc: "Tick checked and typed name matches Aadhaar — Submit activates.", frame: F.DeclarationReady },
    ],
    components: [
      { name: "Checkbox" }, { name: "Button" }, { name: "Alert" }, { name: "Input" },
    ],
    behaviour: [
      "The agree checkbox is hard-disabled until the citizen scrolls to the end of the declaration text.",
      "The penalty notice (Section 193 IPC) is always visible — not collapsible, not behind a tooltip.",
      "Typed signature is validated against the Aadhaar-registered name before Submit activates.",
      "Submit fires a server-side declaration check too — never trust the client tick alone.",
    ],
    edgeCases: [
      "Citizen tries to paste declaration text or auto-scroll — block, and require a scroll gesture.",
      "Name with surname variations: allow Aadhaar-canonical match (\"Ramesh Kumar\" matches \"Ramesh kumar\" but not \"R Kumar\").",
      "Submit while offline: hold the submission, re-confirm the declaration once back online before sending.",
    ],
    doDont: [
      { do: "Keep the penalty notice persistent, high-contrast amber, and always visible.", dont: "Don't hide the legal penalty behind an info icon or collapsible region." },
      { do: "Validate the typed name against Aadhaar before activating Submit.", dont: "Don't allow Submit without the declaration being explicitly ticked and re-validated server-side." },
    ],
    a11y: [
      "Scrollable declaration is a labelled region; screen reader announces \"scroll to read all\" and the unlock state.",
      "Disabled Submit explains why — \"Read the declaration to enable\".",
      "Penalty notice is read aloud as it appears, not just visually styled.",
    ],
    related: [
      { tag: "Before", name: "Consent Capture", href: "#consent-capture", desc: "All required consents must be collected before declaration." },
      { tag: "Pair with", name: "Data Sharing Consent", href: "#data-sharing", desc: "Sharing consents are recapped in the declaration's recipients list." },
    ],
    compliance: {
      law: "Section 193 IPC · CPC Order VI Rule 15",
      body: [
        "Furnishing false information in a government declaration is punishable by up to 7 years imprisonment.",
        "Government form standards require the legal penalty notice to be always visible — never collapsible.",
        "The declaration record (text, version, timestamp, signature) is stored as an immutable artefact.",
      ],
    },
    errorRecovery: {
      screens: [
        { name: "Name mismatch", desc: "Inline error when the typed signature doesn't match the Aadhaar-registered name.", frame: F.DeclarationNameMismatch },
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
        <PtStickyBar patterns={SIDEBAR_PATTERNS} activeSlug="consent" />
        <PtLeftNav activeSlug="consent" />
        <PtHero
          slug="consent"
          num="P-02"
          tag="P-02 · Consent & Declaration · Live"
          title="Consent & Declaration"
          desc="DPDP-compliant consent flows — purpose-specific, granular, withdrawable. Plus the declaration step that precedes any final submission of an application."
          meta={["3 patterns"]}
        >
          <img className="ptc-hero-img" src="assets/images/Consent & Declaration.png" alt="Consent & Declaration illustration" />
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
