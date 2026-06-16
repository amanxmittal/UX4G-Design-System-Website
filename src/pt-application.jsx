/* global React, ReactDOM */
/* Pattern category: Application & Submission — full data-driven build */

/* ───────── Frame mockups ───────── */
const F = {
  /* Eligibility */
  EligibilityIntro: (
    <PtMock>
      <MS>Income Certificate</MS>
      <MH>Check eligibility</MH>
      <MAlert kind="info">5 questions · about 2 minutes</MAlert>
      <MBtn>Start eligibility check</MBtn>
      <MBtn kind="ghost">Skip and apply directly</MBtn>
    </PtMock>
  ),
  EligibilityQuestion: (
    <PtMock>
      <MS>Question 3 of 5</MS>
      <MProg pct={60} />
      <MH>What is your household annual income?</MH>
      <MRow><MChip>Below ₹1L</MChip></MRow>
      <MRow><MChip kind="purple">● ₹1L–2L</MChip></MRow>
      <MRow><MChip>₹2L–5L</MChip></MRow>
      <MBtn>Continue</MBtn>
    </PtMock>
  ),
  EligibilityEligible: (
    <PtMock>
      <MCenter><MCheck /><MH>You are eligible</MH></MCenter>
      <MS>✓ Resident of Maharashtra</MS>
      <MS>✓ Income below ₹2L</MS>
      <MS>✓ Has Aadhaar</MS>
      <MBtn>Apply now · 15 mins</MBtn>
    </PtMock>
  ),
  EligibilityNotEligible: (
    <PtMock>
      <MAlert kind="error">Not eligible · Income ₹2L–5L exceeds the ₹2L limit.</MAlert>
      <MH>Try this instead</MH>
      <MS>Middle Class Housing Scheme — eligible for incomes up to ₹6L.</MS>
      <MBtn kind="ghost">View scheme</MBtn>
    </PtMock>
  ),

  /* Journey progress */
  JourneyDesktop: (
    <PtMock variant="wide">
      <div style={{ display: "flex", gap: 8, alignItems: "center", justifyContent: "space-between", fontSize: 9 }}>
        <MRow><MIcon color="#106c35">1</MIcon><MLabel>Eligibility</MLabel></MRow>
        <MRow><MIcon color="#106c35">2</MIcon><MLabel>Personal</MLabel></MRow>
        <MRow><MIcon color="var(--primary)">3</MIcon><MLabel>Documents</MLabel></MRow>
        <MRow><MIcon>4</MIcon><MLabel>Review</MLabel></MRow>
        <MRow><MIcon>5</MIcon><MLabel>Submit</MLabel></MRow>
      </div>
    </PtMock>
  ),
  JourneyMobile: (
    <PtMock>
      <MS>Step 3 of 5</MS>
      <MH>Documents</MH>
      <MProg pct={60} />
      <MLabel>About 6 minutes remaining</MLabel>
    </PtMock>
  ),
  JourneyResume: (
    <PtMock>
      <MAlert kind="warn">Resuming from Step 3 — your previous answers are pre-filled.</MAlert>
      <MBtn>Continue from Step 3</MBtn>
    </PtMock>
  ),

  /* Form */
  FormNormal: (
    <PtMock>
      <MH>Personal Information</MH>
      <MRow><MChip kind="purple">Aadhaar</MChip><MLabel>Ramesh Kumar</MLabel></MRow>
      <MRow><MChip kind="purple">Aadhaar</MChip><MLabel>15/08/1985</MLabel></MRow>
      <MIn label="Category · SC ▾" />
      <MIn label="Mobile · ✓ Verified" />
      <MIn label="Email (optional)" />
      <MBtn>Continue to documents</MBtn>
    </PtMock>
  ),
  FormInlineError: (
    <PtMock>
      <MIn label="9876543" active />
      <MAlert kind="error">Enter a valid 10-digit mobile number.</MAlert>
      <MIn label="Email" />
    </PtMock>
  ),
  FormErrorBanner: (
    <PtMock>
      <MAlert kind="error"><strong>Please fix 2 errors</strong><br/>1 · Valid email required<br/>2 · Category not selected</MAlert>
      <MBtn kind="disabled">Continue</MBtn>
    </PtMock>
  ),
  FormCascading: (
    <PtMock>
      <MIn label="State · Maharashtra ▾" active />
      <MIn label="District · Loading…" />
      <MLabel>Fetching district options</MLabel>
    </PtMock>
  ),

  /* Upload */
  UploadChecklist: (
    <PtMock>
      <MH>Required documents · 2 of 4</MH>
      <MProg pct={50} />
      <MRow><MIcon color="#106c35">✓</MIcon><MLabel>Aadhaar Card</MLabel></MRow>
      <MRow><MIcon>!</MIcon><MLabel>Income proof</MLabel></MRow>
      <MBtn kind="ghost">Fetch from DigiLocker</MBtn>
      <MRow><MIcon>!</MIcon><MLabel>Residence proof</MLabel></MRow>
      <MRow><MIcon>○</MIcon><MLabel>Caste cert. (optional)</MLabel></MRow>
    </PtMock>
  ),
  UploadProgress: (
    <PtMock>
      <MS>Uploading income_proof.pdf</MS>
      <MProg pct={65} />
      <MLabel>65%</MLabel>
    </PtMock>
  ),
  UploadQualityFlag: (
    <PtMock>
      <MAlert kind="warn"><strong>Quality check ·</strong> Document appears blurry.</MAlert>
      <MBtn kind="ghost">Keep this one</MBtn>
      <MBtn>Re-upload</MBtn>
    </PtMock>
  ),
  UploadAllDone: (
    <PtMock>
      <MAlert kind="success">All required documents uploaded.</MAlert>
      <MBtn>Proceed to review</MBtn>
    </PtMock>
  ),
  UploadDigiLocker: (
    <PtMock>
      <MH>DigiLocker</MH>
      <MS>Sign in to fetch verified copies of:</MS>
      <MRow><MChip kind="purple">Aadhaar</MChip><MChip kind="purple">PAN</MChip></MRow>
      <MBtn>Connect DigiLocker</MBtn>
      <MBtn kind="ghost">Upload manually instead</MBtn>
    </PtMock>
  ),

  /* Save & resume */
  SaveDraftBanner: (
    <PtMock>
      <MAlert kind="warn"><strong>Income Certificate ·</strong> Last saved 10 Apr · Step 3 of 5</MAlert>
      <MBtn>Resume application</MBtn>
      <MBtn kind="ghost">Start fresh</MBtn>
    </PtMock>
  ),
  SaveResumeSummary: (
    <PtMock>
      <MH>Continue your application?</MH>
      <MRow><MIcon color="#106c35">✓</MIcon><MLabel>Eligibility</MLabel></MRow>
      <MRow><MIcon color="#106c35">✓</MIcon><MLabel>Personal</MLabel></MRow>
      <MRow><MIcon color="var(--primary)">→</MIcon><MLabel>Documents</MLabel></MRow>
      <MBtn>Continue from Step 3</MBtn>
    </PtMock>
  ),
  SaveAutoIndicator: (
    <PtMock>
      <MRow><MChip kind="success">✓ Saved 3:14 PM</MChip></MRow>
      <MH>Documents</MH>
      <MIn label="Aadhaar uploaded" />
    </PtMock>
  ),
  SaveExitConfirm: (
    <PtMock>
      <MH>Unsaved changes</MH>
      <MS>If you leave now, changes since your last save will be lost.</MS>
      <MBtn>Save draft and leave</MBtn>
      <MBtn kind="ghost">Stay on this page</MBtn>
      <MLabel><span style={{color:"#db372d"}}>Leave without saving</span></MLabel>
    </PtMock>
  ),
  SaveOffline: (
    <PtMock>
      <MAlert kind="warn">You are offline — draft saved on this device. It will sync when you reconnect.</MAlert>
      <MRow><MChip>Saving offline</MChip></MRow>
    </PtMock>
  ),

  /* Submission */
  SubmissionSuccess: (
    <PtMock>
      <MCenter>
        <MCheck />
        <MH>Application Submitted!</MH>
        <MS>Your Income Certificate application is under review.</MS>
      </MCenter>
    </PtMock>
  ),
  SubmissionReference: (
    <PtMock>
      <MS>Application Reference</MS>
      <div style={{ background: "var(--gray-50)", border: "1px solid var(--gray-150)", borderRadius: 4, padding: "8px 10px", fontFamily: "monospace", fontSize: 11, fontWeight: 700, color: "var(--primary-deep)" }}>INC-2026-MH-04127 ⧉</div>
      <MLabel>Tap to copy</MLabel>
    </PtMock>
  ),
  SubmissionNextSteps: (
    <PtMock>
      <MH>What happens next</MH>
      <MS><strong>1 ·</strong> Document verification (3–5 working days)</MS>
      <MS><strong>2 ·</strong> Field inspection if required</MS>
      <MS><strong>3 ·</strong> Certificate issued within 30 days (SLA)</MS>
      <MBtn>Track my application</MBtn>
    </PtMock>
  ),
  SubmissionQueued: (
    <PtMock>
      <MAlert kind="warn">Application queued — will be submitted when connection is restored.</MAlert>
    </PtMock>
  ),
  SubmissionPendingRetry: (
    <PtMock>
      <MAlert kind="error">We couldn't confirm submission with the server.</MAlert>
      <MS>Status · Pending confirmation</MS>
      <MBtn>Retry submission</MBtn>
      <MLabel>Do not re-submit a new application — it may create a duplicate.</MLabel>
    </PtMock>
  ),
};

/* ───────── Hero stage ───────── */
function HeroViz() {
  return (
    <>
      <div className="ptc-vc" style={{ top: "10px", right: "30%", width: "240px", transform: "rotate(-3deg)" }}>
        <div style={{ fontSize: 10, color: "var(--gray-500)", marginBottom: 6 }}>Step 3 of 5</div>
        <div style={{ fontSize: 11, fontWeight: 700, marginBottom: 8 }}>Documents</div>
        <MProg pct={60} />
        <MS>About 6 minutes remaining</MS>
      </div>
      <div className="ptc-vc" style={{ top: "120px", right: "10%", width: "200px", transform: "rotate(2deg)" }}>
        <MAlert kind="success">Application submitted successfully</MAlert>
        <div style={{ marginTop: 6, fontSize: 9, fontFamily: "monospace", color: "var(--primary-deep)" }}>INC-2026-MH-04127</div>
      </div>
      <div className="ptc-vc" style={{ top: "90px", right: "55%", width: "180px", transform: "rotate(-2deg)" }}>
        <MRow><MIcon color="#106c35">✓</MIcon><MLabel>Aadhaar Card</MLabel></MRow>
        <MRow><MIcon color="#106c35">✓</MIcon><MLabel>Income proof</MLabel></MRow>
        <MRow><MIcon color="#c97a0c">!</MIcon><MLabel>Residence proof</MLabel></MRow>
      </div>
    </>
  );
}

/* ───────── Pattern data ───────── */
const PATTERNS_DATA = [
  /* ───── 3.1 Eligibility Check Wizard ───── */
  {
    id: "eligibility",
    num: "PATTERN · 3.1",
    title: "Eligibility Check Wizard",
    lede: "Filter out ineligible citizens before they invest fifteen minutes typing personal data. One question per screen keeps focus high, and a no always points to a better-fitting scheme.",

    whenToUse: [
      "Means-tested schemes (income, caste, residency) where eligibility filters most traffic.",
      "Long-form services where a 2-minute check saves a 15-minute form for ineligible citizens.",
      "Anywhere a citizen could realistically be redirected to a better-fitting scheme.",
    ],
    whenNotFor: "Universal services (any citizen qualifies), pure information lookups, or services where eligibility can only be determined after full documentation review.",

    flow: [
      "Intro · expectations",
      "Question 1 — N (one per screen)",
      "Compute result",
      "Eligible · Apply CTA",
      "Not eligible · alternative scheme",
    ],

    screensSet: (() => {
      const base = "assets/images/pattern-screens/application/eligibility";
      const flow = [
        { id: "flow-1-intro",         label: "Intro · expectations",      desc: "Set the contract up front so the citizen knows the time cost before answering anything. Confident users can skip straight to apply." },
        { id: "flow-2-question-1",    label: "Question 1",                desc: "One question, one screen. The first criterion gets its own breath so the citizen reads it, not skims it." },
        { id: "flow-3-question-2",    label: "Question 2",                desc: "Advance only when the citizen has actually answered. No accidental forward motion from a stray tap." },
        { id: "flow-4-question-3",    label: "Question 3",                desc: "Visible progress reassures the citizen that this is a five-question quiz, not an endless funnel of hidden criteria." },
        { id: "flow-5-question-4",    label: "Question 4",                desc: "Answers live only in the browser until the citizen chooses to apply. Walking away costs them nothing." },
        { id: "flow-6-question-5",    label: "Question 5",                desc: "Last criterion before the verdict. The citizen has now told the wizard enough to make a fair decision." },
        { id: "flow-7-eligible",      label: "Eligible result",           desc: "Recap which criteria passed so the verdict is auditable, then point straight at the application with a time estimate." },
        { id: "flow-8-not-eligible",  label: "Not eligible",              desc: "Name the criterion that failed and offer a scheme that might fit instead. A no should never end the journey." },
        { id: "flow-9-conditional",   label: "Conditional result",        desc: "When document checks downstream could still flip the verdict, say likely eligible. Honest framing beats premature celebration." },
      ];
      const mk = (device, layout, typeSlug) => ({
        id: layout.id,
        label: layout.label,
        screens: flow.map((s) => ({
          id: device + "-" + layout.id + "-" + s.id,
          label: s.label,
          desc: s.desc,
          src: base + "/" + device + "-default-" + s.id + "-type-" + device + "-" + typeSlug + ".png",
        })),
      });
      return {
        intro: "Nine frames that walk a citizen from a two-minute anonymous quiz to a verdict. Five questions in between, and every verdict points somewhere useful next.",
        devices: [
          {
            id: "desktop",
            label: "Desktop",
            layouts: [
              mk("desktop", { id: "column",     label: "Column" },     "column"),
              mk("desktop", { id: "fullscreen", label: "Full screen" }, "full"),
              mk("desktop", { id: "card",       label: "Card" },       "card"),
            ],
          },
          {
            id: "mobile",
            label: "Mobile",
            layouts: [
              mk("mobile", { id: "fullscreen", label: "Full screen" }, "full"),
              mk("mobile", { id: "card",       label: "Card" },       "card"),
            ],
          },
        ],
      };
    })(),

    screens: [
      { name: "Intro", desc: "Time estimate, question count, Start primary. Skip-and-apply available as a ghost option for confident users.", frame: F.EligibilityIntro },
      { name: "Question screen", desc: "One question per screen, top progress bar, large radio chips. Continue activates after a choice.", frame: F.EligibilityQuestion },
      { name: "Eligible result", desc: "Green tick, criteria recap, Apply now primary CTA with time estimate.", frame: F.EligibilityEligible },
      { name: "Not eligible", desc: "Red banner explaining which criterion failed, with an alternative scheme suggestion as a ghost CTA.", frame: F.EligibilityNotEligible },
    ],

    components: [
      { name: "Single-Question Screen Layout" }, { name: "Progress bar" }, { name: "Radio chips" },
      { name: "Button" }, { name: "Alert" }, { name: "Eligibility Result Screen" },
    ],

    behaviour: [
      "No personal data is collected during eligibility — only criteria questions. The wizard runs anonymously.",
      "Aadhaar-signed-in citizens have eligible criteria auto-checked (state, age) — they only answer the unknown ones.",
      "On Not eligible, always surface at least one alternative scheme — never end with a hard rejection.",
      "Drop-off analytics is logged per question to identify confusing copy and improve the wizard over time.",
    ],

    edgeCases: [
      "Citizen exits mid-quiz: do not persist answers (they may not represent the household).",
      "All criteria pass but a downstream document check could still reject — say \"likely eligible\" not \"approved\".",
      "Translated question carries a different threshold (₹2L vs ₹2,00,000): keep the numeric anchor identical across locales.",
    ],

    doDont: [
      { do: "Use one question per screen with a clear progress bar and time estimate.", dont: "Cram 5 questions into a single dense form — defeats the focus purpose." },
      { do: "Offer an alternative scheme when ineligible — never leave the citizen at a dead end.", dont: "End the flow with a flat \"You are not eligible\" and no next step." },
    ],

    a11y: [
      "Each question is a radio group with a single labelled fieldset and arrow-key navigation.",
      "Progress is announced as \"Question 3 of 5\" before the question text, not just visually.",
      "Result screens use role=\"status\" so success/failure is announced once, not on every focus.",
    ],

    related: [
      { tag: "Before", name: "Journey Progress Indicator", href: "#journey", desc: "The eligibility step is shown as Step 1 on the full journey." },
      { tag: "After", name: "Government Form with Validation", href: "#form", desc: "Eligible citizens enter the main application." },
    ],

    dataHandling: [
      "Answers are held in client memory only — never sent to the server unless the citizen proceeds to apply.",
      "If the citizen is signed in, only the final eligibility result (pass/fail + scheme code) is logged against their profile, not the individual answers.",
    ],
  },

  /* ───── 3.2 Journey Progress Indicator ───── */
  {
    id: "journey",
    num: "PATTERN · 3.2",
    title: "Journey Progress Indicator",
    lede: "Hold the citizen's place inside a long application without ever losing their work. Two-word labels keep the map readable, and progress is one direction only so nothing skips ahead unsaved.",

    whenToUse: [
      "Any application split into 3 or more discrete steps where context across steps matters.",
      "Forms where the citizen may legitimately want to come back later — the indicator doubles as a resume map.",
      "Services with mandated step-by-step processes (e.g., RTI filing, scheme enrolment with multiple ministries).",
    ],
    whenNotFor: "Single-screen forms, two-step OTP flows, or services where ordering is fluid and back-jumps are expected.",

    flow: [
      "Render stepper at top",
      "Highlight current step",
      "Continue saves and advances",
      "Resume on return",
      "Submit on final step",
    ],

    screensSet: (() => {
      const base = "assets/images/pattern-screens/application/journey";
      const flow = [
        { id: "state-default", label: "Default progress",   desc: "The citizen always sees where they are and what is left. Done, doing, and to do remain visually distinct without reading the labels." },
        { id: "state-resume",  label: "Resume state",       desc: "A returning citizen lands exactly where they left, with prior answers restored. The map turns into a homing beacon for unfinished work." },
        { id: "state-error",   label: "Step error",         desc: "When a downstream rule reopens earlier work, the citizen learns before they tap forward. Quiet regression would feel like a bug, not a system." },
      ];
      const mk = (device, layout, typeSlug) => ({
        id: layout.id,
        label: layout.label,
        screens: flow.map((s) => ({
          id: device + "-" + layout.id + "-" + s.id,
          label: s.label,
          desc: s.desc,
          src: base + "/" + device + "-default-" + s.id + "-type-" + device + "-" + typeSlug + ".png",
        })),
      });
      return {
        intro: "Three states for the same map: a fresh walk through, a returning citizen picking up a draft, and a backend rule quietly reopening a step the citizen thought was done.",
        devices: [
          {
            id: "desktop",
            label: "Desktop",
            layouts: [
              mk("desktop", { id: "column",     label: "Column" },     "column"),
              mk("desktop", { id: "fullscreen", label: "Full screen" }, "full"),
              mk("desktop", { id: "card",       label: "Card" },       "card"),
            ],
          },
          {
            id: "mobile",
            label: "Mobile",
            layouts: [
              mk("mobile", { id: "fullscreen", label: "Full screen" }, "full"),
              mk("mobile", { id: "card",       label: "Card" },       "card"),
            ],
          },
        ],
      };
    })(),

    screens: [
      { name: "Desktop stepper", desc: "Horizontal pinned 5-step indicator with completed, current, and future states distinct.", frame: F.JourneyDesktop },
      { name: "Mobile summary", desc: "Compact Step X of Y header, progress bar, and time-remaining estimate below.", frame: F.JourneyMobile },
      { name: "Resume state", desc: "Amber banner on re-entry — Resuming from Step 3, previous answers pre-filled.", frame: F.JourneyResume },
    ],

    components: [
      { name: "Stepper" }, { name: "Progress bar" }, { name: "Alert · draft banner" }, { name: "Button" },
    ],

    behaviour: [
      "Step labels are 2 words maximum — Personal, Documents, Payment — never full sentences.",
      "Continue auto-saves before advancing — never let a step transition lose data.",
      "Step nodes for future steps are visible but not clickable — forward-only navigation.",
      "Completed steps are clickable to review (read-only) but require Edit to make changes — confirms intent.",
    ],

    edgeCases: [
      "Citizen completes Step 4 then a backend rule reopens Step 2: surface a banner before they next continue, do not silently regress them.",
      "Mobile width below 360px: collapse the stepper to Step X of Y text and hide individual nodes.",
      "Time-remaining estimate is wrong: show a range (5–8 minutes) rather than a single number to avoid false precision.",
    ],

    doDont: [
      { do: "Save on every Continue tap before advancing.", dont: "Let a network failure on Continue lose the step's data — save first, then advance." },
      { do: "Use 2-word step labels.", dont: "Use full sentences like \"Tell us about your address\" — they truncate on mobile and clutter the stepper." },
    ],

    a11y: [
      "Stepper is a list with aria-current=\"step\" on the active node — screen reader announces \"Step 3 of 5, Documents, current\".",
      "Future step nodes have aria-disabled=\"true\" and are not in the tab order.",
      "Progress bar exposes aria-valuenow / aria-valuemax — not just a CSS width.",
    ],

    related: [
      { tag: "Pair with", name: "Government Form with Validation", href: "#form", desc: "Every step is a form section governed by this pattern." },
      { tag: "After", name: "Save & Resume", href: "#save-resume", desc: "The resume banner on Step 3 comes from save-and-resume." },
    ],
  },

  /* ───── 3.3 Government Form with Validation ───── */
  {
    id: "form",
    num: "PATTERN · 3.3",
    title: "Government Form with Validation",
    lede: "The workhorse for any real government form. Aadhaar-known facts stay locked, citizen-supplied facts stay editable, and mistakes surface where the citizen can still fix them without losing context.",

    whenToUse: [
      "Any structured citizen-data form (personal info, address, scheme details, returns).",
      "Forms with mixed read-only Aadhaar fields and editable citizen-supplied fields.",
      "Forms with cascading dependencies (state → district → tehsil) or async validation.",
    ],
    whenNotFor: "Single-field search inputs, free-form feedback forms, or anonymous browsing screens.",

    flow: [
      "Render Aadhaar-prefilled fields",
      "Citizen fills editable fields",
      "Inline validate on blur",
      "Form-level validate on submit",
      "Auto-save on every blur",
    ],

    screensSet: (() => {
      const base = "assets/images/pattern-screens/application/form";
      const flow = [
        { id: "state-default",          label: "Default state",       desc: "Facts the government already knows about the citizen sit locked at the top. The citizen only fills in what the system genuinely needs from them." },
        { id: "state-inline-error",     label: "Inline error",        desc: "Catch the mistake the moment the citizen looks away from a field. The rest of the form stays calm so context is not lost." },
        { id: "state-submission-error", label: "Submission error",    desc: "When submit reveals multiple problems, gather them at the top with one tap to jump to each. No hunting for what went wrong." },
        { id: "state-success",          label: "Submission success",  desc: "A clean submit is acknowledged in place with a reference number the citizen can quote. Proof of filing arrives without a page reload." },
      ];
      const mk = (device, layout, typeSlug) => ({
        id: layout.id,
        label: layout.label,
        screens: flow.map((s) => ({
          id: device + "-" + layout.id + "-" + s.id,
          label: s.label,
          desc: s.desc,
          src: base + "/" + device + "-default-" + s.id + "-type-" + device + "-" + typeSlug + ".png",
        })),
      });
      return {
        intro: "Four moments in the life of a long form: a clean start, a mistake caught early, a stack of mistakes caught late, and a clean submission that survives the round trip.",
        devices: [
          {
            id: "desktop",
            label: "Desktop",
            layouts: [
              mk("desktop", { id: "fullscreen", label: "Full screen" }, "full"),
              mk("desktop", { id: "workspace",  label: "Workspace" },   "workspace"),
              mk("desktop", { id: "card",       label: "Card" },        "card"),
            ],
          },
          {
            id: "mobile",
            label: "Mobile",
            layouts: [
              mk("mobile", { id: "fullscreen", label: "Full screen" }, "full"),
              mk("mobile", { id: "card",       label: "Card" },        "card"),
            ],
          },
        ],
      };
    })(),

    screens: [
      { name: "Normal state", desc: "Aadhaar-prefilled fields (read-only) sit above editable fields. Each prefilled field carries an Update via UIDAI link.", frame: F.FormNormal },
      { name: "Inline error", desc: "Field-level error on blur — red border, message below the input. Other fields remain untouched.", frame: F.FormInlineError },
      { name: "Form error banner", desc: "On submit with errors — top-of-form banner lists errors with jump links to each invalid field.", frame: F.FormErrorBanner },
      { name: "Cascading dropdown", desc: "District options load asynchronously after state is selected. The dependent field shows a loading state.", frame: F.FormCascading },
    ],

    components: [
      { name: "Input" }, { name: "Combobox" }, { name: "Dropdown" }, { name: "Date Picker" },
      { name: "Form Field Group" }, { name: "Button" }, { name: "Alert · error" }, { name: "Draft Status Banner" },
    ],

    behaviour: [
      "Aadhaar-prefilled fields (name, DOB, gender, address) are read-only grey — never editable on the form itself.",
      "State and district dropdowns are cascading — district options load via LGDN API after state is selected.",
      "Date of birth uses DD/MM/YYYY triplet inputs — never a calendar widget, for accessibility and low-literacy users.",
      "Auto-save fires on every field blur AND every 30 seconds — never wait for an explicit Save button.",
    ],

    edgeCases: [
      "Paste into a validated field: run validation immediately on paste, not on the next blur.",
      "Citizen edits an Aadhaar-prefilled field via dev tools: server-side check rejects on submit — never trust the client.",
      "LGDN cascade API timeout: keep the parent value, show a retry link in the dependent field, never collapse the form.",
    ],

    doDont: [
      { do: "Use DD/MM/YYYY triplet inputs for date of birth.", dont: "Use a calendar widget for DOB — breaks keyboard accessibility and confuses low-literacy users." },
      { do: "Show inline errors on blur and a banner with jump links on submit.", dont: "Wait until submit to surface every error — citizens lose context for what they typed where." },
    ],

    a11y: [
      "Every input has a real <label> associated via for/id; placeholder text is not a label substitute.",
      "Inline errors are announced via aria-live=\"polite\" and the input gets aria-invalid=\"true\".",
      "Jump links in the error banner move focus to the invalid field, not just scroll — screen-reader users need the focus shift.",
      "Required vs optional state is in the accessible name (\"Email · optional\"), not colour alone.",
    ],

    related: [
      { tag: "Inside", name: "Journey Progress Indicator", href: "#journey", desc: "Each form section is one step of the journey." },
      { tag: "Pair with", name: "Document Scan & Upload", href: "#upload", desc: "Documents step usually follows the personal-info form." },
      { tag: "Identity", name: "Aadhaar Authentication Gate", href: "UX4G Identity Access.html#aadhaar", desc: "Prefill source for read-only fields." },
    ],

    compliance: {
      law: "DPDP Act 2023 · IT Act 2000",
      body: [
        "Only data fields tied to the stated purpose may be collected (DPDP data-minimisation).",
        "Form drafts containing personal data must be encrypted at rest.",
        "Read-only Aadhaar fields cannot be edited by the citizen or operator — corrections go through UIDAI per the Aadhaar Act.",
      ],
    },
    dataHandling: [
      "Aadhaar-derived fields are stored as references to the UIDAI eKYC artefact, not as duplicated personal data.",
      "Editable fields are encrypted at rest using AES-256 and the encryption key is rotated quarterly.",
      "Draft data is bound to the citizen's account and never accessible by other users or operators without explicit assignment.",
    ],
    vle: {
      text: "At a CSC counter, the VLE fills the form on the citizen's behalf with the citizen present. The operator's ID is logged alongside the form data, and the citizen's signature is captured on the declaration step before submit.",
      flow: ["VLE auth", "Citizen identification", "Operator-assisted fill", "Citizen reviews", "Submit"],
    },
    integrations: [
      { sys: "UIDAI eKYC", purpose: "Source of read-only prefilled fields (name, DOB, gender, address)." },
      { sys: "LGDN (Local Government Directory)", purpose: "State / district / tehsil cascading dropdowns." },
      { sys: "DigiLocker", purpose: "Optional fetch of address proof and verified copies of supporting documents." },
    ],
    errorRecovery: {
      text: [
        "Validation runs in two passes — inline on blur for field-level errors, then a form-level pass on submit that opens a banner with jump links.",
        "If the auto-save endpoint fails, queue the save locally and retry every 30 seconds with exponential backoff. Never block the citizen from typing while a save is pending.",
      ],
      screens: [
        { name: "Inline blur error", desc: "Per-field error on blur. Other fields stay untouched.", frame: F.FormInlineError },
        { name: "Submit-time banner", desc: "Form-level error banner at the top with jump links to each invalid field.", frame: F.FormErrorBanner },
      ],
    },
  },

  /* ───── 3.4 Document Scan & Upload ───── */
  {
    id: "upload",
    num: "PATTERN · 3.4",
    title: "Document Scan & Upload",
    lede: "Get supporting documents from the citizen without making the phone camera the enemy. Pull verified copies from DigiLocker when possible, and let quality flags warn rather than lock anyone out.",

    whenToUse: [
      "Any service that requires supporting documents (identity proof, address proof, income proof, caste cert).",
      "Forms where DigiLocker namespace coverage allows fetching verified copies (Aadhaar, PAN, marksheets, RC).",
      "Mobile-first services where citizens scan documents on the phone camera.",
    ],
    whenNotFor: "Form-only services that need no supporting documents. Services where the document is generated server-side (downloads, payslips).",

    flow: [
      "Render document checklist",
      "DigiLocker fetch where supported",
      "Camera scan or file pick",
      "AI quality check · warn if blurry",
      "Mark complete · proceed",
    ],

    screensSet: (() => {
      const base = "assets/images/pattern-screens/application/upload";
      const flow = [
        { id: "state-checklist",  label: "Checklist",         desc: "Show what is needed up front so the citizen can decide whether to do this now or come back with a passport in hand." },
        { id: "state-uploading",  label: "Uploading",         desc: "Per-file progress reassures the citizen the upload is moving. Cancel stays reachable so a wrong file does not become a final file." },
        { id: "state-ai-warning", label: "AI quality flag",   desc: "When the system suspects a blurry scan, advise but defer. False positives must never lock a citizen out of a real entitlement." },
        { id: "state-complete",   label: "All uploaded",      desc: "Confirm completeness in plain language so the citizen knows nothing else stands between them and submission. Forward motion is now safe." },
      ];
      const mk = (device, layout, typeSlug) => ({
        id: layout.id,
        label: layout.label,
        screens: flow.map((s) => ({
          id: device + "-" + layout.id + "-" + s.id,
          label: s.label,
          desc: s.desc,
          src: base + "/" + device + "-default-" + s.id + "-type-" + device + "-" + typeSlug + ".png",
        })),
      });
      return {
        intro: "From an empty checklist to every document accounted for. Quality warnings appear along the way, but the citizen, never the algorithm, decides what to send.",
        devices: [
          {
            id: "desktop",
            label: "Desktop",
            layouts: [
              mk("desktop", { id: "fullscreen", label: "Full screen" }, "full"),
              mk("desktop", { id: "workspace",  label: "Workspace" },   "workspace"),
              mk("desktop", { id: "card",       label: "Card" },        "card"),
            ],
          },
          {
            id: "mobile",
            label: "Mobile",
            layouts: [
              mk("mobile", { id: "fullscreen", label: "Full screen" }, "full"),
              mk("mobile", { id: "card",       label: "Card" },        "card"),
            ],
          },
        ],
      };
    })(),

    screens: [
      { name: "Checklist", desc: "Required vs optional, per-document badges, DigiLocker fetch button where the namespace is supported.", frame: F.UploadChecklist },
      { name: "DigiLocker fetch", desc: "Connect modal listing which documents can be fetched in verified form, with an upload-manually fallback.", frame: F.UploadDigiLocker },
      { name: "Uploading", desc: "Per-file progress bar in row with percent, cancel available until complete.", frame: F.UploadProgress },
      { name: "AI quality flag", desc: "Amber alert — Document appears blurry. Keep this one or Re-upload — never blocks.", frame: F.UploadQualityFlag },
      { name: "All uploaded", desc: "Green success banner when all required documents are uploaded — Proceed unlocks.", frame: F.UploadAllDone },
    ],

    components: [
      { name: "File Upload component" }, { name: "Checklist" }, { name: "Button" }, { name: "Badge" },
      { name: "Alert · info" }, { name: "Alert · amber" }, { name: "Modal" }, { name: "Progress bar" },
    ],

    behaviour: [
      "AI quality check warns on blur, glare, or wrong-document-type — but never blocks. The officer makes the final call.",
      "DigiLocker fetch is shown only for document types within a DigiLocker namespace (Aadhaar, PAN, marksheets, RC).",
      "Self-attestation reminder is shown once below the checklist — never on every upload.",
      "Re-upload remains available right up until submission — uploads are not final until the application is filed.",
    ],

    edgeCases: [
      "File too large (> 5 MB): client-side compress before upload; if still over, surface clear size guidance.",
      "Unsupported MIME (HEIC, TIFF): convert to JPEG client-side or prompt the citizen to retake as JPG/PDF.",
      "DigiLocker fetch fails (UIDAI down or unlinked): fall back silently to manual upload with a one-line explanation.",
    ],

    doDont: [
      { do: "Warn on quality issues but let the citizen keep the file — final call belongs to the officer.", dont: "Hard-block uploads on AI quality scores — false positives lock citizens out of services." },
      { do: "Show DigiLocker only for namespaces it supports.", dont: "Show DigiLocker on every document type — failed fetches teach citizens to ignore the button." },
    ],

    a11y: [
      "Upload status (uploading, complete, failed) is announced via aria-live=\"polite\" — not just visual chrome.",
      "File input has a labelled drop zone and a clearly focusable Choose file button — never just a styled div.",
      "Camera permission prompt is preceded by plain-language consent — never auto-trigger.",
    ],

    related: [
      { tag: "Before", name: "Government Form with Validation", href: "#form", desc: "Personal info step comes first." },
      { tag: "After", name: "Submission Acknowledgement", href: "#submission", desc: "Once all docs are uploaded the application can be submitted." },
    ],

    compliance: {
      law: "IT Act 2000 · Aadhaar Act 2016 · DPDP Act 2023",
      body: [
        "Self-attested electronic documents are legally accepted under the IT Act 2000 — physical attestation is not required.",
        "Aadhaar copies fetched via DigiLocker use a masked UID per UIDAI's Aadhaar masking circular.",
        "Document storage retention follows the service's stated purpose — no indefinite \"future use\" retention.",
      ],
    },
    dataHandling: [
      "Uploaded files are virus-scanned at the edge before being written to encrypted storage.",
      "Original filenames are sanitised; the canonical name is the document type + reference number.",
      "Files are retained for the service's stated retention period and purged on schedule, with a citizen-visible deletion log.",
    ],
    vle: {
      text: "At a CSC kiosk, the VLE uses a flatbed scanner or document camera attached to the kiosk. The kiosk variant suppresses the citizen-phone DigiLocker QR fallback and exposes a direct DigiLocker login through the kiosk browser.",
      flow: ["Citizen consent", "Scan via kiosk camera", "Quality preview", "Operator confirms", "Mark uploaded"],
    },
    integrations: [
      { sys: "DigiLocker", purpose: "Fetch verified copies of Aadhaar, PAN, marksheets, RC, and other namespaced documents." },
      { sys: "Document AI", purpose: "Quality detection — blur, glare, wrong document type — to warn the citizen before upload." },
      { sys: "Antivirus scanner", purpose: "Edge scan of every uploaded file before persistence." },
    ],
    errorRecovery: {
      text: [
        "Upload failure mid-transfer retries automatically up to 3 times before surfacing a manual retry.",
        "DigiLocker fetch failure falls back silently to manual upload — never blocks the citizen.",
      ],
      screens: [
        { name: "Quality flag", desc: "Warns but does not block — the citizen can keep the file. Officer reviews at verification.", frame: F.UploadQualityFlag },
      ],
    },
  },

  /* ───── 3.5 Save & Resume ───── */
  {
    id: "save-resume",
    num: "PATTERN · 3.5",
    title: "Save & Resume",
    lede: "Treat the citizen's time as the scarcest resource in the room. Work saves quietly in the background so a phone call, a power cut, or a different device never costs anyone their progress.",

    whenToUse: [
      "Any multi-step form where the citizen may leave and return later.",
      "Long applications (5+ steps, > 10 minutes) where session loss would be costly.",
      "Cross-device journeys where the citizen starts on mobile and continues on desktop (or vice versa).",
    ],
    whenNotFor: "Single-screen utilities that complete in under 2 minutes. Anonymous services where there is no citizen identity to bind a draft to.",

    flow: [
      "Citizen starts form · draft created",
      "Auto-save on blur + every 30s",
      "Citizen exits",
      "Returns later · draft banner",
      "Resume from last step",
    ],

    screensSet: (() => {
      const base = "assets/images/pattern-screens/application/save-resume";
      const flow = [
        { id: "state-draft-banner-landing",    label: "Draft banner · landing",     desc: "A returning citizen sees their unfinished work waiting on the service landing. The draft is the path, not a hidden state to hunt for." },
        { id: "state-resume-screen",           label: "Resume summary",             desc: "Recap what is done and what is left before dropping the citizen back into the form. Resuming is a decision, not a surprise." },
        { id: "state-incomplete-resume",       label: "Incomplete resume",          desc: "When a returning step still has gaps, show them honestly. The citizen sees what blocks submission instead of guessing why progress stalled." },
        { id: "state-in-form-autosave",        label: "In-form auto-save",          desc: "Saving is a passive whisper, not a popup. The citizen keeps typing, and the system reassures them work is safe." },
        { id: "state-in-form-draft-expiry",    label: "Draft expiry warning",       desc: "Give the citizen a full week of notice before retention rules purge their draft. Surprise deletions feel like punishment, not policy." },
        { id: "state-unsaved-changes-modal",   label: "Unsaved changes modal",      desc: "When the citizen tries to leave with unsaved edits, default to saving. The safe path should require zero thought." },
        { id: "state-discard-draft-modal",     label: "Discard draft modal",        desc: "Deletion is permanent, so make the choice deliberate. The citizen should never lose a draft to a stray tap." },
      ];
      const mk = (device, layout, typeSlug) => ({
        id: layout.id,
        label: layout.label,
        screens: flow.map((s) => ({
          id: device + "-" + layout.id + "-" + s.id,
          label: s.label,
          desc: s.desc,
          src: base + "/" + device + "-default-" + s.id + "-type-" + device + "-" + typeSlug + ".png",
        })),
      });
      return {
        intro: "Seven moments when a draft, an exit, or a network drop could lose the citizen's work. Each one resolves without ever blocking the keyboard or hiding what was saved.",
        devices: [
          {
            id: "desktop",
            label: "Desktop",
            layouts: [
              mk("desktop", { id: "fullscreen", label: "Full screen" }, "full"),
              mk("desktop", { id: "card",       label: "Card" },        "card"),
            ],
          },
          {
            id: "mobile",
            label: "Mobile",
            layouts: [
              mk("mobile", { id: "fullscreen", label: "Full screen" }, "full"),
              mk("mobile", { id: "card",       label: "Card" },        "card"),
            ],
          },
        ],
      };
    })(),

    screens: [
      { name: "Draft banner", desc: "On the service landing — returning user sees their draft with last-saved time and step.", frame: F.SaveDraftBanner },
      { name: "Resume summary", desc: "Step-by-step summary on resume — completed steps ticked, current step highlighted, Continue.", frame: F.SaveResumeSummary },
      { name: "Auto-save indicator", desc: "Saving… → Saved 3:14 PM in the top-right of the form — passive, not modal.", frame: F.SaveAutoIndicator },
      { name: "Exit confirmation", desc: "Unsaved changes since the last save — modal asks to save before leaving.", frame: F.SaveExitConfirm },
      { name: "Offline save", desc: "Network loss — draft queued locally, will sync when the connection returns.", frame: F.SaveOffline },
    ],

    components: [
      { name: "Alert · draft banner" }, { name: "Button" }, { name: "Modal · confirmation" },
      { name: "Card" }, { name: "Stepper" }, { name: "Chip · saved status" },
    ],

    behaviour: [
      "Auto-save fires on every field blur AND every 30 seconds — never solely on an explicit save tap.",
      "On resume, Aadhaar-derived fields re-verify with UIDAI before being shown — the masked UID in storage is not enough.",
      "Network loss switches to local-queue mode; the saved indicator turns amber and reads \"Saving offline\".",
      "Multiple drafts for the same service: surface a draft list, never silently overwrite.",
    ],

    edgeCases: [
      "Draft older than 30 days: expire per DPDP retention rules and inform the citizen at resume.",
      "Citizen resumes on a different device: re-verify Aadhaar before exposing prefilled personal data on the new device.",
      "Concurrent edits across two devices: last write wins, but show a conflict banner so the citizen can review the diff.",
    ],

    doDont: [
      { do: "Show a passive saved-indicator and an exit-confirmation modal.", dont: "Block typing with a modal while saving — let the citizen keep working." },
      { do: "Re-verify Aadhaar on resume.", dont: "Restore prefilled UIDAI data on a new device without re-verification — DPDP and UIDAI both prohibit it." },
    ],

    a11y: [
      "Saved indicator updates via aria-live=\"polite\" — not every keystroke, only on state change.",
      "Exit confirmation modal traps focus and the default focused button is the safe choice (Save).",
      "Resume banner is read once when the page loads, not on every focus traversal.",
    ],

    related: [
      { tag: "Pair with", name: "Journey Progress Indicator", href: "#journey", desc: "The resume banner restores the citizen to the right step." },
      { tag: "Inside", name: "Government Form with Validation", href: "#form", desc: "Form auto-save triggers the underlying save logic." },
      { tag: "After", name: "Session Timeout & Re-Auth", href: "UX4G Identity Access.html#session", desc: "Long-term draft survives session expiry." },
    ],

    compliance: {
      law: "DPDP Act 2023 · UIDAI Aadhaar masking circular",
      body: [
        "Drafts containing personal data must be encrypted at rest and bound to a single citizen account.",
        "UID is stored masked (last 4 digits visible) per UIDAI's masking circular — full UID is never persisted in draft form.",
        "Draft retention follows DPDP — 30 days is typical; longer retention requires a stated lawful purpose.",
      ],
    },
    dataHandling: [
      "Drafts are encrypted at rest using AES-256 with per-tenant key isolation.",
      "Full UID is replaced by the masked form on save; the eKYC artefact reference is stored separately.",
      "Drafts expire and are purged 30 days after the last save, with a citizen-visible warning 7 days before expiry.",
    ],
    errorRecovery: {
      text: [
        "Save failures retry automatically with exponential backoff. After three failed attempts, the indicator turns red and a manual Retry is offered.",
        "Offline drafts sync on reconnect — the citizen sees a confirmation toast when the queued save reaches the server.",
      ],
      screens: [
        { name: "Offline save queued", desc: "Network loss — draft queued locally, syncs on reconnect.", frame: F.SaveOffline },
        { name: "Exit confirmation", desc: "Modal asks to save before leaving when there are unsaved changes since the last auto-save.", frame: F.SaveExitConfirm },
      ],
    },
  },

  /* ───── 3.6 Submission Acknowledgement ───── */
  {
    id: "submission",
    num: "PATTERN · 3.6",
    title: "Submission Acknowledgement",
    lede: "Close the application with proof the citizen can quote on a phone call tomorrow. Success is never claimed without a reference number, and a flaky network never gets mistaken for a clean submit.",

    whenToUse: [
      "Final step of any application after declaration is signed.",
      "Whenever a downstream officer workflow will reference the submission via an ARN.",
      "Whenever the citizen will need proof of submission for follow-up (RTI Act, Right to Public Services timelines).",
    ],
    whenNotFor: "Information lookups, dashboard reads, or any action without a stateful follow-up workflow.",

    flow: [
      "Declaration signed · Submit fires",
      "Server allocates ARN",
      "Success screen with ARN",
      "Next-steps panel + Track CTA",
      "Notifications (SMS + email)",
    ],

    screensSet: (() => {
      const base = "assets/images/pattern-screens/application/submission";
      const flow = [
        { id: "state-success",          label: "Success",            desc: "Hand the citizen a reference number they can copy in one tap and quote on a call next week. Proof of filing should outlive the browser tab." },
        { id: "state-queued",           label: "Queued (offline)",   desc: "When the network drops mid-submit, say so honestly. A queued state is kinder than a faked success that disappears later." },
        { id: "state-submission-error", label: "Submission error",   desc: "If the server stumbles, hold the door open with an explicit retry and a warning against double-submitting. No silent failure, no duplicate filings." },
      ];
      const mk = (device, layout, typeSlug) => ({
        id: layout.id,
        label: layout.label,
        screens: flow.map((s) => ({
          id: device + "-" + layout.id + "-" + s.id,
          label: s.label,
          desc: s.desc,
          src: base + "/" + device + "-default-" + s.id + "-type-" + device + "-" + typeSlug + ".png",
        })),
      });
      return {
        intro: "Three honest endings to a long application: a confirmed reference number, an offline submission patiently queued, and a server hiccup that keeps the door open for retry.",
        devices: [
          {
            id: "desktop",
            label: "Desktop",
            layouts: [
              mk("desktop", { id: "fullscreen", label: "Full screen" }, "full"),
              mk("desktop", { id: "card",       label: "Card" },        "card"),
            ],
          },
          {
            id: "mobile",
            label: "Mobile",
            layouts: [
              mk("mobile", { id: "fullscreen", label: "Full screen" }, "full"),
              mk("mobile", { id: "card",       label: "Card" },        "card"),
            ],
          },
        ],
      };
    })(),

    screens: [
      { name: "Success", desc: "Full-screen check, Application Submitted, brief context line below.", frame: F.SubmissionSuccess },
      { name: "Reference number", desc: "Large monospace ARN with one-tap copy. Stored in the citizen's profile for future reference.", frame: F.SubmissionReference },
      { name: "Next steps", desc: "Numbered list of what happens next, with the statutory SLA, and Track my application primary.", frame: F.SubmissionNextSteps },
      { name: "Queued (offline)", desc: "Amber banner — submission queued, will go when the connection returns. Never shows a fake success.", frame: F.SubmissionQueued },
      { name: "Pending confirmation", desc: "API failed mid-submit — pending state with explicit retry. Warns against duplicate submission.", frame: F.SubmissionPendingRetry },
    ],

    components: [
      { name: "Alert · success" }, { name: "Button" }, { name: "Card · receipt" },
      { name: "Journey Timeline · abbreviated" }, { name: "Badge" }, { name: "Monospace text block" },
    ],

    behaviour: [
      "Never show the success screen without a confirmed ARN — if the API call fails, show the pending state with a manual retry.",
      "ARN renders in monospace, large, with a copy button — citizens routinely quote this number on calls and follow-ups.",
      "Offline submissions queue and submit on reconnect — they show \"Queued\" rather than fake success.",
      "On submit success, send SMS and email acknowledgement via TRAI DLT-registered templates within 30 seconds.",
    ],

    edgeCases: [
      "Server returns 200 but no ARN: treat as failure and show pending — never display \"success\" without an ARN.",
      "Citizen taps Submit twice: idempotency key on the request prevents a duplicate ARN.",
      "SMS gateway down: surface a banner explaining the SMS may be delayed, but never hide the ARN on screen.",
    ],

    doDont: [
      { do: "Always show the ARN in monospace with a copy button on the success screen.", dont: "Show a green tick and \"Success\" without surfacing the ARN — the citizen needs the number for follow-up." },
      { do: "Show a pending state with retry when the submit API fails.", dont: "Show a fake success on failure and silently lose the submission." },
    ],

    a11y: [
      "Success state is announced once via role=\"status\" with the ARN read aloud.",
      "Copy-to-clipboard fires a polite live-region announcement: \"Reference number copied\".",
      "Next-steps numbered list uses an ordered list element — screen readers announce \"step 1 of 3\".",
    ],

    related: [
      { tag: "Before", name: "Save & Resume", href: "#save-resume", desc: "The draft is finalised and converted into a submitted application." },
      { tag: "Final step", name: "Consent & Declaration", href: "UX4G Consent Declaration.html#declaration", desc: "Declaration is signed before submission fires." },
    ],

    compliance: {
      law: "RTI Act 2005 · Right to Public Services Acts · IT Act 2000",
      body: [
        "Every submission must be acknowledged with a unique reference number — RTI Act 2005 requires it for any application of record.",
        "Right to Public Services Acts (state-specific) mandate displaying the statutory SLA on the acknowledgement.",
        "Electronic acknowledgements are legally valid records under the IT Act 2000 — physical receipts are not required.",
      ],
    },
    dataHandling: [
      "The ARN is generated server-side using a tamper-evident format that includes the scheme code, year, state, and a sequence.",
      "The acknowledgement record (ARN, timestamp, citizen ID, scheme) is stored as an immutable audit log entry.",
      "The signed declaration text, version, and timestamp are stamped onto the acknowledgement record.",
    ],
    channels: [
      { channel: "Web", ico: "🌐", body: "On-screen success page with ARN, next steps, and a Track CTA." },
      { channel: "SMS", ico: "📱", body: "DLT-registered template with the ARN and Track link. Delivered within 30 seconds of submit." },
      { channel: "Email", ico: "✉️", body: "Acknowledgement PDF attached, with the signed declaration and the next-steps summary." },
      { channel: "DigiLocker", ico: "🗂", body: "Optional — citizen can elect to push the acknowledgement PDF to their DigiLocker." },
    ],
    integrations: [
      { sys: "ARN generator", purpose: "Allocates the unique reference number per scheme / state / year sequence." },
      { sys: "SMS gateway · TRAI DLT", purpose: "Sends the acknowledgement SMS with the ARN via a registered template." },
      { sys: "Email service", purpose: "Sends the acknowledgement PDF and signed declaration." },
      { sys: "DigiLocker", purpose: "Optional push of the acknowledgement PDF to the citizen's locker." },
    ],
    notifications: [
      { moment: "On submit success", channel: "SMS + Email", content: "ARN, scheme name, statutory SLA, and a Track link." },
      { moment: "On submit failure", channel: "In-app", content: "Pending state with explicit retry and a warning against duplicate submission." },
      { moment: "Acknowledgement PDF ready", channel: "Email", content: "PDF attachment with signed declaration and next-steps summary." },
    ],
    errorRecovery: {
      text: [
        "Submit failures show a pending state with explicit retry — never a fake success.",
        "Idempotency keys ensure repeated submit taps don't create duplicate ARNs.",
        "Offline submissions queue locally and submit when the connection returns; the citizen sees a clear queued state, not a fake success.",
      ],
      screens: [
        { name: "Pending · retry", desc: "API failed mid-submit. Explicit retry; warning against duplicate submission.", frame: F.SubmissionPendingRetry },
        { name: "Queued offline", desc: "Submission queued locally — sends on reconnect with a citizen-visible toast.", frame: F.SubmissionQueued },
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
        <PtStickyBar patterns={SIDEBAR_PATTERNS} activeSlug="application" />
        <PtLeftNav activeSlug="application" />
        <PtHero
          slug="application"
          num="P-03"
          tag="P-03 · Application & Submission · Live"
          title="Application & Submission"
          desc="Eligibility checks, multi-step form journeys, document upload via DigiLocker, save-and-resume drafts, and the acknowledgement that closes every successful submission."
          meta={["6 patterns"]}
        >
          <img className="ptc-hero-img" src="assets/images/Application & Submission.png" alt="Application & Submission illustration" />
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
