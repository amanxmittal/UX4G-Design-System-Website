/* global React, ReactDOM */
/* Pattern category: Identity & Access — full data-driven build */

/* ───────── Frame mockups (reused from previous build) ───────── */
const F = {
  SignInLanding: (
    <PtMock>
      <MS>Ministry of Revenue · Maharashtra</MS>
      <MH>Sign in to your account</MH>
      <MIn label="+91 — Mobile number" active />
      <MBtn>Send OTP</MBtn>
      <MBtn kind="ghost">Sign in with Aadhaar</MBtn>
      <MLabel>New here? <span style={{ color: "var(--primary)" }}>Register</span></MLabel>
    </PtMock>
  ),
  OtpEntry: (
    <PtMock>
      <MS>OTP sent to +91 ••••• 43210</MS>
      <MH>Enter the OTP</MH>
      <MOtp pattern={[{v:"4",state:"f"},{v:"8"},{v:"3"},{v:""},{v:""},{v:""}]} />
      <MLabel>Resend in 00:43</MLabel>
      <MBtn>Verify OTP</MBtn>
    </PtMock>
  ),
  SignInSuccess: (
    <PtMock>
      <MCenter>
        <MCheck />
        <MH>Signed in successfully</MH>
        <MS>Redirecting to My Applications…</MS>
      </MCenter>
    </PtMock>
  ),
  SessionResume: (
    <PtMock>
      <MAlert kind="warn">Your session ended — sign in to continue your Income Certificate application.</MAlert>
      <MIn label="+91 98765 43210" />
      <MBtn>Send OTP</MBtn>
      <MS>Draft saved · 3 min ago</MS>
    </PtMock>
  ),
  NotRegistered: (
    <PtMock>
      <MIn label="+91 98765 43219" active />
      <MAlert kind="error">This number is not registered. <strong>Register here →</strong></MAlert>
      <MBtn kind="disabled">Send OTP</MBtn>
    </PtMock>
  ),
  AadhaarSignIn: (
    <PtMock>
      <MS>Sign in via Aadhaar</MS>
      <MIn label="•••• •••• 4519" />
      <MRow style={{ gap: 6 }}>
        <MChip kind="purple">OTP</MChip>
        <MChip>Face</MChip>
        <MChip>Fingerprint</MChip>
      </MRow>
      <MBtn>Continue</MBtn>
    </PtMock>
  ),
  WrongOtp: (
    <PtMock>
      <MOtp pattern={[{v:"4",state:"e"},{v:"8",state:"e"},{v:"3",state:"e"},{v:"2",state:"e"},{v:"1",state:"e"},{v:"9",state:"e"}]} />
      <MAlert kind="error">Incorrect OTP · 2 attempts remaining</MAlert>
      <MBtn>Try again</MBtn>
    </PtMock>
  ),
  Locked: (
    <PtMock>
      <MCenter>
        <MIcon color="#db372d">🔒</MIcon>
        <MH>Account locked</MH>
        <MS>Try again in 28:43</MS>
      </MCenter>
      <MLabel>Need help? <span style={{color:"var(--primary)"}}>1800-XXX-XXXX</span></MLabel>
    </PtMock>
  ),
  VoiceFallback: (
    <PtMock>
      <MOtp pattern={[{v:""},{v:""},{v:""},{v:""},{v:""},{v:""}]} />
      <MLabel>Didn't receive SMS?</MLabel>
      <MBtn kind="ghost">Get OTP via voice call</MBtn>
    </PtMock>
  ),
  SignUpEntry: (
    <PtMock>
      <MH>Create your account</MH>
      <MIn label="+91 — Mobile number" active />
      <MBtn>Send OTP</MBtn>
      <MLabel>Already registered? <span style={{color:"var(--primary)"}}>Sign in</span></MLabel>
    </PtMock>
  ),
  SignUpProfile: (
    <PtMock>
      <MH>Complete your profile</MH>
      <MIn label="Full name" />
      <MIn label="Email (optional)" />
      <MIn label="Language preference · English ▾" />
      <MBtn>Create account</MBtn>
    </PtMock>
  ),
  AccountCreated: (
    <PtMock>
      <MCenter><MCheck /><MH>Welcome, Ramesh Kumar</MH><MS>Account created</MS></MCenter>
      <MBtn>Link Aadhaar now</MBtn>
      <MBtn kind="ghost">Skip & browse services</MBtn>
    </PtMock>
  ),
  DuplicateMobile: (
    <PtMock>
      <MIn label="+91 98765 43210" />
      <MAlert kind="warn">This number is already registered. <strong>Sign in instead?</strong></MAlert>
      <MBtn kind="ghost">Use a different number</MBtn>
    </PtMock>
  ),
  SessionWarn: (
    <PtMock>
      <MH>Your session is expiring</MH>
      <MS>04:47 remaining</MS>
      <MProg pct={28} color="#c97a0c" />
      <MBtn>Stay signed in</MBtn>
      <MBtn kind="ghost">Sign out now</MBtn>
    </PtMock>
  ),
  SessionExpired: (
    <PtMock>
      <MH>Session ended</MH>
      <MS>Your form progress has been saved.</MS>
      <MAlert kind="info">Sign in to continue where you left off.</MAlert>
      <MBtn>Sign in</MBtn>
    </PtMock>
  ),
  WelcomeBack: (
    <PtMock>
      <MAlert kind="success"><strong>Welcome back, Ramesh</strong> — your draft has been restored.</MAlert>
      <MH>Income Certificate · Step 3 of 5</MH>
      <MProg pct={60} />
    </PtMock>
  ),
  RecoveryEntry: (
    <PtMock>
      <MH>Forgot password?</MH>
      <MS>Most services use OTP login — you may not need a password.</MS>
      <MIn label="+91 — Mobile number" active />
      <MBtn>Sign in with OTP</MBtn>
      <MBtn kind="ghost">Reset password instead</MBtn>
    </PtMock>
  ),
  NewPassword: (
    <PtMock>
      <MH>Create new password</MH>
      <MIn label="New password ●●●●●●●●" />
      <MIn label="Confirm password" />
      <MProg pct={66} color="#c97a0c" />
      <MLabel>Strength · Fair</MLabel>
      <MS>✓ 8+ chars · ✓ Number · ✗ Uppercase</MS>
      <MBtn>Reset password</MBtn>
    </PtMock>
  ),
  AadhaarRecovery: (
    <PtMock>
      <MAlert kind="info">Don't have your phone? Recover with Aadhaar OTP instead.</MAlert>
      <MIn label="•••• •••• 4519" />
      <MBtn>Send Aadhaar OTP</MBtn>
    </PtMock>
  ),
  FinalAttempt: (
    <PtMock>
      <MAlert kind="error">This is your <strong>last attempt</strong> before a 30-minute lockout.</MAlert>
      <MOtp pattern={[{v:""},{v:""},{v:""},{v:""},{v:""},{v:""}]} />
      <MBtn>Verify OTP</MBtn>
    </PtMock>
  ),
  AutoUnlock: (
    <PtMock>
      <MAlert kind="success">You can now try signing in again.</MAlert>
      <MIn label="+91 — Mobile number" active />
      <MBtn>Send OTP</MBtn>
    </PtMock>
  ),
  Suspicious: (
    <PtMock>
      <MAlert kind="warn">We detected a sign-in from a new device. Please verify your identity before continuing.</MAlert>
      <MBtn>Verify identity</MBtn>
    </PtMock>
  ),
  AadhaarContext: (
    <PtMock>
      <MS>Income Certificate · Step 2 of 5</MS>
      <MH>Verify your identity</MH>
      <MAlert kind="info">Aadhaar verification ensures your details match government records.</MAlert>
      <MRow><MChip kind="purple">UIDAI verified</MChip></MRow>
      <MS>☐ I consent to Aadhaar-based eKYC.</MS>
      <MBtn kind="disabled">Proceed</MBtn>
    </PtMock>
  ),
  AadhaarMethod: (
    <PtMock>
      <MH>Choose verification method</MH>
      <MRow><MChip kind="purple">● OTP</MChip><MChip>Face</MChip></MRow>
      <MRow><MChip>Fingerprint</MChip><MChip>TOTP</MChip></MRow>
      <MBtn>Continue with OTP</MBtn>
    </PtMock>
  ),
  AadhaarVerified: (
    <PtMock>
      <MCenter><MCheck /><MH>Identity verified</MH></MCenter>
      <MS>Ramesh Kumar · UID •••• •••• 4519</MS>
    </PtMock>
  ),
  VleKiosk: (
    <PtMock>
      <MS>VLE Kiosk · Aadhaar verification</MS>
      <MRow><MChip kind="purple">● Fingerprint</MChip><MChip>OTP</MChip></MRow>
      <MAlert kind="info">Place your finger on the scanner.</MAlert>
      <MBtn>Scan now</MBtn>
    </PtMock>
  ),
  BioConsent: (
    <PtMock>
      <MH>Camera consent</MH>
      <MS>Your face data is used for verification only and is not stored on our servers.</MS>
      <MBtn>I consent — continue</MBtn>
      <MBtn kind="ghost">Use OTP instead</MBtn>
    </PtMock>
  ),
  BioAlign: (
    <PtMock>
      <MAlert kind="info">Blink twice, then slowly turn your head.</MAlert>
      <MCenter>
        <div style={{ width: 80, height: 100, border: "2px solid var(--primary)", borderRadius: "50%/40%" }}></div>
      </MCenter>
      <MProg pct={45} />
    </PtMock>
  ),
  BioFallback: (
    <PtMock>
      <MAlert kind="warn">Switching to OTP verification after 2 failed attempts.</MAlert>
      <MOtp pattern={[{v:"",state:"f"},{v:""},{v:""},{v:""},{v:""},{v:""}]} />
      <MBtn>Verify with OTP</MBtn>
    </PtMock>
  ),
};

/* ───────── Pattern data ───────── */
const PATTERNS_DATA = [
  /* ───── 1.1 Sign In ───── */
  {
    id: "sign-in",
    num: "PATTERN · 1.1",
    title: "Sign In",
    lede: "The default door into any UX4G service. Lead with mobile plus OTP because every citizen owns that, keep Aadhaar a step away, and drop returning citizens back on their draft.",

    whenToUse: [
      "A citizen needs to access a personalised dashboard, draft, or any service that stores prior input under their identity.",
      "A service requires only proof of mobile ownership for low-stakes access (status checks, downloads of previously issued certificates).",
      "A returning user has an in-progress application and you want to drop them back exactly where they left off.",
    ],
    whenNotFor: "First-time citizens with no account — use Sign Up. For services that need verified identity beyond mobile (eKYC, biometric), use the Aadhaar Authentication Gate inline after sign-in instead.",

    flow: [
      "Sign-in landing",
      "Method toggle (OTP / Aadhaar)",
      "OTP entry",
      "Verify → success",
      "Resume on session expiry",
    ],

    screensSet: (() => {
      const base = "assets/images/pattern-screens/identity/sign-in";
      const step = {
        signInOtp:      { label: "Sign in — Mobile OTP",      desc: "Start with the one credential every citizen already carries. The number field leads, everything else (register, help) waits politely beneath." },
        signInPassword: { label: "Sign in — Username / Password", desc: "Some services still issue passwords. Keep this path quiet so OTP stays the default, and never make it look like the recommended route." },
        otp:            { label: "OTP entry",                 desc: "A single job per screen. The citizen reads the code, types six digits, and the screen verifies the moment the last digit lands." },
        aadhaar:        { label: "Aadhaar sign-in",           desc: "Offered only when the service genuinely needs verified identity. Method choice stays with the citizen so a broken camera never blocks them." },
        success:        { label: "Sign-in success",           desc: "Confirm fast and get out of the way. The citizen came to do something else, not to admire a green check." },
      };
      const make = (device, layout, ids) => ({
        id: layout.id,
        label: layout.label,
        screens: ids.map((s) => ({
          id: device + "-" + layout.id + "-" + s,
          label: step[s].label,
          desc: step[s].desc,
          src: base + "/" + device + "-" + layout.id + "-" + ({
            signInOtp: "sign-in-otp", signInPassword: "sign-in-password",
            otp: "otp", aadhaar: "aadhaar", success: "success",
          })[s] + ".png",
        })),
      });
      const order = ["signInOtp", "signInPassword", "otp", "aadhaar", "success"];
      return {
        intro: "Five frames showing the journey from landing to dashboard. Each layout adapts the same intent: keep the credential entry simple, the fallback paths visible, and the recovery routes obvious.",
        devices: [
          {
            id: "desktop",
            label: "Desktop",
            layouts: [
              make("desktop", { id: "column",     label: "Column" },     order),
              make("desktop", { id: "fullscreen", label: "Full screen" }, order),
              make("desktop", { id: "card",       label: "Card" },       order),
            ],
          },
          {
            id: "mobile",
            label: "Mobile",
            layouts: [
              make("mobile", { id: "fullscreen", label: "Full screen" }, order),
              make("mobile", { id: "card",       label: "Card" },       order),
            ],
          },
        ],
      };
    })(),

    components: [
      { name: "Input" }, { name: "OTP Input" },
      { name: "Button · primary" }, { name: "Button · outlined" }, { name: "Button · ghost" },
      { name: "Alert · amber warning" }, { name: "Spinner" },
    ],

    behaviour: [
      "OTP auto-submits when the 6th digit is entered, or on Web OTP API auto-fill — never requires a button tap after auto-fill.",
      "Countdown timer is plain text, not animated, to stay readable for screen readers.",
      "Already-signed-in citizens are auto-redirected to their dashboard — they never see the sign-in form a second time in the same session.",
      "Pasting an OTP triggers immediate verification on paste-end, not after a delay.",
    ],

    edgeCases: [
      "Mobile not registered: inline error with Register link, Send OTP disabled until input cleared.",
      "OTP delivery failure: show Get OTP via voice call as fallback after 2 minutes of no SMS.",
      "Suspicious sign-in (new device, new location): require additional verification before granting session.",
      "Lockout after 3 wrong OTPs: 30-minute timer with auto-unlock; helpline number visible.",
    ],

    doDont: [
      { do: "Show Register prominently below the form on first paint — new users should never feel stuck.", dont: "Hide Register inside a Help link or place it only at the end of the OTP flow." },
      { do: "Pre-fill the mobile number on session-expiry return so the citizen sees one tap to resume.", dont: "Clear the mobile field on every page load and ask them to re-enter it from memory." },
    ],

    a11y: [
      "Focus moves from mobile input → Send OTP → first OTP cell in source order; no focus traps.",
      "Each OTP cell uses inputmode=\"numeric\" and aria-label=\"OTP digit 1 of 6\" through 6.",
      "Countdown timer is announced as polite live region updates every 15 seconds (not every second).",
      "All buttons have minimum 44×44 touch targets and visible focus ring meeting 3:1 contrast.",
    ],

    related: [
      { tag: "Before", name: "Sign Up & Account Creation", href: "#sign-up", desc: "What new citizens take first." },
      { tag: "After", name: "Session Timeout & Re-Auth", href: "#session", desc: "How an active session ends and resumes." },
    ],

    compliance: {
      law: "TRAI DLT registration — OTP SMS delivery",
      body: "All OTP SMS must be sent from a TRAI-registered Distributed Ledger Technology entity ID and approved template. Generic transactional SMS routes are non-compliant and may be blocked by carriers. Register the sender ID and the OTP template body with TRAI before going live.",
    },
    dataHandling: [
      "Mobile number is stored hashed alongside the citizen's account record.",
      "Session token is stored as an HTTP-only, Secure, SameSite=Strict cookie with a 30-minute idle expiry (15 minutes if the session was created via Aadhaar biometric).",
      "OTPs are stored only as one-way hashes; the plaintext OTP is never persisted server-side once verified or expired.",
    ],
    vle: {
      text: "At a CSC counter, the VLE operates sign-in on behalf of the citizen. The kiosk variant offers both biometric (fingerprint scanner) and OTP — but never webcam face authentication. The VLE's identity is logged alongside the citizen's session for auditability.",
      flow: ["VLE auth", "Citizen mobile", "Fingerprint scan", "Session opens"],
      screens: [
        { name: "Kiosk method selector", desc: "Fingerprint primary on the scanner; OTP fallback via voice if the citizen's mobile is not present.", frame: F.VleKiosk },
      ],
    },
    integrations: [
      { sys: "UIDAI eKYC API", purpose: "Validates Aadhaar number and triggers the chosen verification method (OTP / Face / Fingerprint / TOTP)." },
      { sys: "Mobile OTP gateway", purpose: "Sends SMS via TRAI-registered route; supports voice OTP fallback after 2 minutes." },
    ],
    errorRecovery: {
      intro: "The three primary failure paths for sign-in. Each is a labelled screen.",
      screens: [
        { name: "Unregistered mobile", desc: "Surfaced inline before OTP is sent — never burn an SMS on a non-existent account.", frame: F.NotRegistered },
        { name: "Voice OTP fallback", desc: "After 2 minutes of failed SMS delivery, offer voice OTP via TRAI-registered voice route.", frame: F.VoiceFallback },
        { name: "Auto-unlock after lockout", desc: "After 3 wrong attempts the account is locked 30 minutes; auto-unlock fires when the timer hits zero with a success toast.", frame: F.AutoUnlock },
      ],
    },
  },

  /* ───── 1.2 Sign Up ───── */
  {
    id: "sign-up",
    num: "PATTERN · 1.2",
    title: "Sign Up & Account Creation",
    lede: "How a first-time citizen creates an account without burning effort on dead ends. Catch duplicates before any SMS goes out, and let any Indian script in the name field.",

    whenToUse: [
      "A citizen has no account on this portal and needs to access a service that stores prior input.",
      "The service requires the citizen's name and language preference at minimum.",
      "Aadhaar linking can be deferred — it is never mandatory for account creation itself.",
    ],
    whenNotFor: "Anonymous services that only need a download token or one-time OTP-verified payment — do not force account creation for those.",

    flow: [
      "Entry (mobile)",
      "OTP verification",
      "Profile setup (name, email, language)",
      "Account created",
      "Optional Aadhaar linking",
    ],

    screensSet: (() => {
      const base = "assets/images/pattern-screens/identity/sign-up";
      const mk = (device, layout, list) => ({
        id: layout.id,
        label: layout.label,
        screens: list.map((s) => ({
          id: device + "-" + layout.id + "-" + s.id,
          label: s.label,
          desc: s.desc,
          src: base + "/" + device + "-" + layout.id + "-" + s.id + ".png",
        })),
      });
      const desktopFlow = [
        { id: "sign-in", label: "Sign in entry", desc: "Sign-up reuses the sign-in shell so registration feels like one continuous space, not a separate maze the citizen had to find." },
        { id: "otp", label: "OTP verification", desc: "Proof of mobile ownership is the only gate. Verification finishes the moment the code lands, so nobody hunts for a Verify control." },
        { id: "aadhaar-input", label: "Aadhaar input", desc: "Aadhaar is offered, never required. Skipping costs nothing because the dashboard can ask again when the citizen has time." },
        { id: "success", label: "Account created", desc: "Confirm the account exists, then move on. The citizen came here to start a service, not to celebrate a registration." },
        { id: "session-expiry", label: "Session expiry", desc: "If the citizen drops off mid-signup, resume from the last completed step rather than starting them over from the mobile field." },
      ];
      const mobileFlow = [
        { id: "create-account", label: "Create account", desc: "On a phone, one decision per screen. The citizen gives a number, the device handles the rest, no scrolling to find next steps." },
        { id: "verify-mobile", label: "Verify mobile", desc: "A screen that exists for one job. Code entry sits in the thumb zone so verification works one-handed at a counter or in a queue." },
        { id: "complete-your-profile", label: "Complete profile", desc: "Ask for the minimum the service truly needs. The name field accepts every Indian script so nobody transliterates themselves." },
        { id: "set-password", label: "Set password", desc: "Only the citizens who chose password auth see this screen. Everyone else skips it because OTP is the default everywhere else." },
        { id: "success", label: "Account created", desc: "Hand the citizen back to the service they originally came for, not to a generic dashboard they did not ask to see." },
      ];
      return {
        intro: "How registration changes shape by device. Desktop folds steps into the sign-in shell, mobile splits them apart so each screen owns one decision.",
        devices: [
          {
            id: "desktop",
            label: "Desktop",
            layouts: [
              mk("desktop", { id: "column",     label: "Column" },     desktopFlow),
              mk("desktop", { id: "fullscreen", label: "Full screen" }, desktopFlow),
              mk("desktop", { id: "card",       label: "Card" },       desktopFlow),
            ],
          },
          {
            id: "mobile",
            label: "Mobile",
            layouts: [
              mk("mobile", { id: "fullscreen", label: "Full screen" }, mobileFlow),
              mk("mobile", { id: "card",       label: "Card" },       mobileFlow),
            ],
          },
        ],
      };
    })(),

    screens: [
      { name: "Entry", desc: "Create your account, mobile input, Send OTP. Already registered? Sign in link below.", frame: F.SignUpEntry },
      { name: "OTP verification", desc: "Standard OTP component with 45s countdown.", frame: F.OtpEntry },
      { name: "Profile setup", desc: "Full name (required), email (optional), language preference dropdown.", frame: F.SignUpProfile },
      { name: "Account created", desc: "Green tick, name shown, options to link Aadhaar or browse services.", frame: F.AccountCreated },
      { name: "Duplicate mobile error", desc: "Amber alert at phone entry step — number already registered, Sign in suggestion.", frame: F.DuplicateMobile },
    ],

    components: [
      { name: "Input" }, { name: "OTP Input" }, { name: "Dropdown · language" },
      { name: "Button" }, { name: "Alert" },
    ],

    behaviour: [
      "Duplicate-mobile check runs as soon as the citizen leaves the mobile field — before any OTP is sent.",
      "Name field accepts Devanagari, Tamil, Telugu, Bengali, Gujarati, and other Unicode Indian scripts — no input filter restricting to Latin.",
      "Language preference dropdown is sorted by speaker count, not alphabetical — Hindi, Bengali, Marathi, Telugu, Tamil first.",
    ],

    edgeCases: [
      "Duplicate mobile detected: fail early at phone entry — do not let user complete OTP for an existing account.",
      "Aadhaar linking declined: complete account creation normally; offer linking again on dashboard.",
      "Email omitted: account proceeds — only the mobile number is required.",
    ],

    doDont: [
      { do: "Detect duplicates at phone-entry and route to sign-in immediately.", dont: "Allow OTP to be sent and verified before checking if the account exists — burns a SMS and frustrates the citizen." },
      { do: "Make Aadhaar linking prominent but optional with clear benefits messaging.", dont: "Block account creation completion behind Aadhaar linking." },
    ],

    a11y: [
      "Field labels are real <label> elements associated to inputs by for/id — placeholders alone are not labels.",
      "Required vs optional fields are indicated both visually and in the accessible name (e.g., 'Email · optional').",
      "Language dropdown supports keyboard arrow navigation and type-to-search.",
    ],

    related: [
      { tag: "After", name: "Sign In", href: "#sign-in", desc: "Returning citizens use sign-in." },
      { tag: "Optional", name: "Aadhaar Authentication Gate", href: "#aadhaar", desc: "Link Aadhaar after account creation." },
    ],

    dataHandling: [
      "Mobile number is hashed and stored as the account's primary identifier.",
      "Name is stored in original Unicode script with a transliterated Latin fallback for system logging.",
      "Language preference is stored as a BCP 47 tag (en, hi, mr, ta, etc.) and applied as the default locale on every subsequent session.",
    ],
    integrations: [
      { sys: "Mobile OTP gateway", purpose: "Sends registration OTP via TRAI-registered route." },
    ],
    errorRecovery: {
      intro: "Sign-up failure paths shown as screens.",
      screens: [
        { name: "Duplicate mobile detected", desc: "Stops the flow at phone entry with a direct Sign-in link — never let OTP be sent for an existing account.", frame: F.DuplicateMobile },
        { name: "Voice OTP fallback", desc: "Identical to the Sign In voice fallback — appears after 2 minutes of failed SMS.", frame: F.VoiceFallback },
      ],
    },
  },

  /* ───── 1.3 OTP Verification ───── */
  {
    id: "otp",
    num: "PATTERN · 1.3",
    title: "OTP Verification",
    lede: "How to ask for a one-time code without making the citizen babysit it. Distinguish wrong from expired, hand off to voice when SMS fails, and lock out cleanly when needed.",

    whenToUse: [
      "Inside any flow that needs proof of mobile or Aadhaar-linked-mobile ownership.",
      "When the citizen has already provided the number — this pattern never asks for the mobile itself.",
      "As a step inside Sign In, Sign Up, Recovery, Aadhaar gate, or Payment flows.",
    ],
    whenNotFor: "Direct OTP-less authentication paths (saved device, SSO). Standalone identity verification without a prior phone-number step.",

    flow: [
      "OTP sent",
      "Entry · countdown",
      "Resend / Voice fallback",
      "Verify success → next step",
      "Errors: wrong / expired / lockout",
    ],

    screensSet: (() => {
      const base = "assets/images/pattern-screens/identity/otp";
      const flow = [
        { id: "enter-otp",      label: "OTP entry",        desc: "Show the masked number first so the citizen knows which device to check. The countdown sets expectation without nagging." },
        { id: "resend-active",  label: "Resend active",    desc: "When the timer ends, resend and voice both wake up together. No silent failures, no asking the citizen to wait without a reason." },
        { id: "wrong-attempt",  label: "Wrong OTP",        desc: "Quietly flag the first mistake and stay silent on count. The citizen sees what to do, not how close they are to getting locked out." },
        { id: "last-attempt",   label: "Last attempt",     desc: "Now warn loudly. The citizen deserves to know the next wrong code costs them thirty minutes, before they tap submit." },
        { id: "locked",         label: "Locked",           desc: "Hide the input, show the wait. A live timer plus a helpline beats a dead form that gives the citizen nothing to do next." },
        { id: "success",        label: "Verified",         desc: "Acknowledge briefly and continue the original flow. OTP is a step, not a destination, so do not linger on the confirmation." },
      ];
      const mk = (device, layout) => ({
        id: layout.id, label: layout.label,
        screens: flow.map((s) => ({
          id: device + "-" + layout.id + "-" + s.id,
          label: s.label, desc: s.desc,
          src: base + "/" + device + "-" + layout.id + "-" + s.id + ".png",
        })),
      });
      return {
        intro: "Six frames covering the full OTP state machine. Entry, resend, soft error, last-chance warning, lockout, success, so every branch has a designed answer.",
        devices: [
          { id: "desktop", label: "Desktop", layouts: [
            mk("desktop", { id: "column",     label: "Column" }),
            mk("desktop", { id: "fullscreen", label: "Full screen" }),
            mk("desktop", { id: "card",       label: "Card" }),
          ]},
          { id: "mobile", label: "Mobile", layouts: [
            mk("mobile", { id: "fullscreen", label: "Full screen" }),
            mk("mobile", { id: "card",       label: "Card" }),
          ]},
        ],
      };
    })(),

    screens: [
      { name: "OTP entry", desc: "Delivery context shown above (OTP sent to +91 ••••• 43210), 6-box input, countdown.", frame: F.OtpEntry },
      { name: "Voice OTP fallback", desc: "Appears after first SMS resend if delivery is failing.", frame: F.VoiceFallback },
      { name: "Wrong OTP", desc: "Red boxes, inline error, attempt counter from the second failure onward.", frame: F.WrongOtp },
      { name: "Final attempt warning", desc: "Strong amber alert — last attempt before 30-minute lockout.", frame: F.FinalAttempt },
      { name: "Locked", desc: "All inputs disabled, lock icon, live countdown, helpline shown.", frame: F.Locked },
    ],

    components: [
      { name: "OTP Input" }, { name: "Button" }, { name: "Alert · error" }, { name: "Alert · amber" },
    ],

    behaviour: [
      "Auto-submit fires when the 6th digit is filled or Web OTP API auto-completes — no extra button tap.",
      "Expired OTP and wrong OTP have distinct messages — never collapse them into a single 'OTP failed' string.",
      "Resend disabled until countdown reaches zero; never let the citizen burn quota.",
      "Paste handling validates the pasted string immediately, not on the next blur.",
    ],

    edgeCases: [
      "Auto-submit on paste or Web OTP fill — do not require a button tap after auto-fill.",
      "Expired OTP vs wrong OTP: show 'OTP expired' vs 'Incorrect OTP' as distinct messages.",
      "Aadhaar OTP: show 'OTP sent to Aadhaar-linked mobile — if you don't have access, use a different method'.",
    ],

    doDont: [
      { do: "Auto-submit verification as soon as the OTP is complete.", dont: "Force the citizen to read the OTP, type it, then tap Verify after auto-fill already filled it." },
      { do: "Show distinct messages for expired vs wrong OTP.", dont: "Collapse both into a single 'OTP failed — try again' that gives no clue what to do next." },
    ],

    a11y: [
      "Each OTP cell has aria-label='OTP digit X of 6'.",
      "Errors are announced via aria-live='assertive' polite region; success via aria-live='polite'.",
      "Lock countdown updates the live region only every 60 seconds — not every second.",
    ],

    related: [
      { tag: "Used by", name: "Sign In", href: "#sign-in", desc: "OTP verification is the second step." },
      { tag: "Used by", name: "Aadhaar Authentication Gate", href: "#aadhaar", desc: "Aadhaar OTP method." },
    ],

    compliance: {
      law: "TRAI DLT registration",
      body: "OTP SMS must use a TRAI-registered DLT entity ID and template. Off-template SMS will be filtered by Indian carriers. Voice-OTP fallbacks must use a separate TRAI-registered voice route.",
    },
    vle: {
      text: "At a CSC counter, when the citizen's phone is not present, the VLE can request a voice OTP to be played through the kiosk speaker. The voice route also reads back the OTP twice for audibility.",
      screens: [
        { name: "Voice OTP at kiosk", desc: "Kiosk speaker plays back the OTP twice; the VLE then types it on the citizen's behalf.", frame: F.VoiceFallback },
      ],
    },
    integrations: [
      { sys: "SMS gateway · TRAI DLT", purpose: "Primary OTP delivery channel." },
      { sys: "Voice OTP route", purpose: "Fallback after 2 minutes of failed SMS delivery." },
      { sys: "Web OTP API (Android Chrome)", purpose: "Auto-fills OTP from origin-bound SMS without copy-paste." },
    ],
    errorRecovery: {
      intro: "The three failure stages from first wrong OTP through to auto-unlock.",
      screens: [
        { name: "Wrong OTP", desc: "Red border, inline error, attempt counter from the second failure onward. Remaining attempts hidden on the first failure.", frame: F.WrongOtp },
        { name: "Final attempt warning", desc: "Strong amber alert — last attempt before a 30-minute lockout.", frame: F.FinalAttempt },
        { name: "Locked", desc: "All inputs disabled, lock icon, live countdown, helpline visible. Resend is hidden entirely.", frame: F.Locked },
        { name: "Auto-unlock", desc: "Countdown reaches zero, form refreshes, success toast confirms the citizen can try again.", frame: F.AutoUnlock },
      ],
    },
  },

  /* ───── 1.4 Session Timeout ───── */
  {
    id: "session",
    num: "PATTERN · 1.4",
    title: "Session Timeout & Re-Authentication",
    lede: "How to end a session without throwing away the citizen's work. Save early, warn calmly, escalate only when needed, and return them to the exact field they were filling.",

    whenToUse: [
      "Any signed-in service that holds form drafts or other unsaved citizen input.",
      "Services with idle-timeout requirements (Aadhaar-bound sessions, government portals with mandated timeouts).",
      "When the cost of losing input is higher than the friction of re-authenticating.",
    ],
    whenNotFor: "Stateless services where no data is held server-side. Single-page utilities where the citizen is in and out in under 2 minutes.",

    flow: [
      "5-min warning modal",
      "1-min escalated warning",
      "Session expired modal",
      "Re-auth sign-in",
      "Welcome back · draft restored",
    ],

    screensSet: (() => {
      const base = "assets/images/pattern-screens/identity/session";
      const flow = [
        { id: "session-warning", label: "Session warning",  desc: "First warning lands five minutes early so the citizen can choose, not react. Staying signed in is one tap, sign-out is equally easy." },
        { id: "urgent-warning",  label: "Urgent warning",    desc: "At the one-minute mark the tone shifts. Same actions, sharper visuals, because the citizen now needs to decide right now." },
        { id: "session-expired", label: "Session expired",   desc: "Time is up, but the work is safe. The screen blocks the form and points at the only useful next step, which is signing back in." },
      ];
      const mk = (device) => ({
        id: "default", label: "Modal",
        screens: flow.map((s) => ({
          id: device + "-default-" + s.id, label: s.label, desc: s.desc,
          src: base + "/" + device + "-default-" + s.id + ".png",
        })),
      });
      return {
        intro: "Three frames showing how the session ends without losing work. Warn gently, escalate when needed, and confirm the draft is safe before sign-out.",
        devices: [
          { id: "desktop", label: "Desktop", layouts: [mk("desktop")] },
          { id: "mobile",  label: "Mobile",  layouts: [mk("mobile")] },
        ],
      };
    })(),

    screens: [
      { name: "Expiry warning modal", desc: "5 minutes remaining, live countdown, Stay signed in / Sign out.", frame: F.SessionWarn },
      { name: "Session expired", desc: "Modal — session ended, form progress saved, sign-in prompt, not dismissible.", frame: F.SessionExpired },
      { name: "Re-auth sign-in", desc: "Returns the citizen to the exact page with draft intact.", frame: F.SessionResume },
      { name: "Welcome back toast", desc: "Post re-auth — draft-restored confirmation, citizen continues mid-form.", frame: F.WelcomeBack },
    ],

    components: [
      { name: "Modal" }, { name: "Button" }, { name: "Alert" }, { name: "OTP Input" },
    ],

    behaviour: [
      "Auto-save fires every 30 seconds AND on every blur — never wait for the timeout warning to save.",
      "Warning modal shows at T-5 minutes, escalated styling at T-1 minute (border turns amber, text becomes urgent).",
      "Session-expired modal is non-dismissible — close button removed, ESC disabled.",
      "Re-auth redirects to the exact deep-link URL the citizen was on, not the dashboard.",
    ],

    edgeCases: [
      "Auto-save form data BEFORE the session expires — never lose citizen input.",
      "30-minute default timeout; 15-minute timeout post-Aadhaar biometric auth.",
      "After re-auth: redirect to exact URL with form pre-filled from saved draft.",
    ],

    doDont: [
      { do: "Show a 5-minute warning with a live countdown so the citizen has time to act.", dont: "Silently expire the session and let the citizen find out when they hit Submit." },
      { do: "Pre-fill the mobile number and the saved draft after re-auth.", dont: "Send the citizen to the dashboard after re-auth and force them to navigate back to their form." },
    ],

    a11y: [
      "Warning modal is announced via role='alertdialog' and traps focus inside the modal.",
      "Live countdown updates an aria-live='polite' region every 60 seconds, not every second.",
      "Stay signed in is the focused default button — Enter confirms it.",
    ],

    related: [
      { tag: "Before", name: "Sign In", href: "#sign-in", desc: "How the session was created." },
      { tag: "After", name: "Save & Resume (Application)", href: "UX4G Application.html#save-resume", desc: "Long-term draft recovery." },
    ],

    dataHandling: [
      "Form draft is persisted to encrypted server-side storage every 30 seconds and on field blur.",
      "Session token expiry is enforced server-side — the client-side countdown is only for UI.",
      "Drafts persist for the application's configured retention window (typically 30 days), independent of the session.",
    ],
    errorRecovery: {
      intro: "What happens when the session ends and how the citizen lands back on their form.",
      screens: [
        { name: "Session expired", desc: "Non-dismissible modal explaining the session ended and the form progress was saved.", frame: F.SessionExpired },
        { name: "Re-auth sign-in", desc: "Returns the citizen to the exact deep-link URL, not the dashboard.", frame: F.SessionResume },
        { name: "Draft restored", desc: "Post re-auth — green welcome toast confirms the draft was restored. The citizen continues mid-form.", frame: F.WelcomeBack },
      ],
    },
  },

  /* ───── 1.5 Forgot Password ───── */
  {
    id: "recovery",
    num: "PATTERN · 1.5",
    title: "Forgot Password & Account Recovery",
    lede: "How to get a stuck citizen back in without a password reset they did not actually need. Try the mobile first, only fall back to Aadhaar when the phone is gone.",

    whenToUse: [
      "On password-supporting portals when the citizen cannot recall their password.",
      "When the mobile is accessible — start with Sign in with OTP rather than reset.",
      "When the mobile is not accessible — offer the Aadhaar OTP recovery path.",
    ],
    whenNotFor: "OTP-only portals (most government services) — do not build a password reset flow for them at all.",

    flow: [
      "Recovery entry (OTP-led)",
      "OTP verify",
      "New password (if password-supporting)",
      "Reset success",
      "Aadhaar fallback",
    ],

    screensSet: (() => {
      const base = "assets/images/pattern-screens/identity/recovery";
      const flow = [
        { id: "forgot-password",                label: "Recovery entry",      desc: "Lead with the cheapest fix. Most citizens forgot their password but still own their phone, so a fresh OTP solves it without a reset." },
        { id: "verify-otp",                     label: "Verify OTP",          desc: "Reuse the same OTP step the citizen sees during sign-in. Familiarity matters more than novelty when someone is already frustrated." },
        { id: "create-password",                label: "Create password",     desc: "Only shown on portals that actually issue passwords. Strength feedback guides without scolding, and rules update as the citizen types." },
        { id: "aadhar-based-account-recovery",  label: "Aadhaar fallback",    desc: "When the phone is lost or stolen, identity has to come from somewhere. Aadhaar is the last resort, never the lead path." },
        { id: "success",                        label: "Recovery success",    desc: "Confirm access is restored, then send the citizen forward. The recovery loop closes here, no extra steps required." },
      ];
      const mk = (device, layout) => ({ id: layout.id, label: layout.label,
        screens: flow.map((s) => ({
          id: device + "-" + layout.id + "-" + s.id, label: s.label, desc: s.desc,
          src: base + "/" + device + "-" + layout.id + "-" + s.id + ".png",
        })),
      });
      return {
        intro: "Five frames covering recovery for both password and OTP-only portals. Each step keeps cheaper paths in front and the heavier Aadhaar fallback one click deeper.",
        devices: [
          { id: "desktop", label: "Desktop", layouts: [
            mk("desktop", { id: "column",     label: "Column" }),
            mk("desktop", { id: "fullscreen", label: "Full screen" }),
            mk("desktop", { id: "card",       label: "Card" }),
          ]},
          { id: "mobile", label: "Mobile", layouts: [
            mk("mobile", { id: "fullscreen", label: "Full screen" }),
            mk("mobile", { id: "card",       label: "Card" }),
          ]},
        ],
      };
    })(),

    screens: [
      { name: "Recovery entry", desc: "OTP-led — Sign in with OTP as the primary CTA, reset password as secondary.", frame: F.RecoveryEntry },
      { name: "New password", desc: "Strength indicator, requirements checklist, confirm field.", frame: F.NewPassword },
      { name: "Aadhaar alternative", desc: "Recover via Aadhaar OTP if the registered mobile is inaccessible.", frame: F.AadhaarRecovery },
    ],

    components: [
      { name: "Input" }, { name: "OTP Input" }, { name: "Button" }, { name: "Alert" }, { name: "Progress · strength bar" },
    ],

    behaviour: [
      "Strength bar updates on every keystroke with debounce; never blocks typing.",
      "Password requirements checklist updates state in real time (green tick on satisfied, grey otherwise).",
      "Eye-toggle reveals the password only while the touch / mouse is held — never permanently visible.",
    ],

    edgeCases: [
      "Most government portals use OTP-only login — show 'Sign in with OTP' as the primary option.",
      "Unregistered mobile: 'No account found for this number. Register?' with link.",
      "Password strength: min 8 chars, 1 uppercase, 1 digit, 1 special — show strength meter.",
    ],

    doDont: [
      { do: "Lead with 'Sign in with OTP instead' — it solves 90% of forgot-password cases without resetting anything.", dont: "Treat forgot-password as the default recovery path on OTP-only portals." },
    ],

    a11y: [
      "Strength bar progress is also expressed in text (Weak / Fair / Strong) and announced on change.",
      "Requirements checklist uses aria-pressed or aria-checked on satisfied items.",
    ],

    related: [
      { tag: "Before", name: "Sign In", href: "#sign-in", desc: "The signed-in flow citizens are trying to return to." },
      { tag: "Fallback", name: "Aadhaar Authentication Gate", href: "#aadhaar", desc: "Identity recovery via Aadhaar." },
    ],

    compliance: {
      law: "Note · most government portals are OTP-only",
      body: "Many UX4G implementations do not have passwords at all. Confirm with the implementing team whether their portal supports password-based login before designing a password reset flow. If they are OTP-only, this pattern collapses to just 'Sign in with OTP' and the Aadhaar fallback — do not build a password reset path that has no use.",
    },
    errorRecovery: {
      intro: "Recovery paths when the mobile is inaccessible or unregistered.",
      screens: [
        { name: "Aadhaar OTP recovery", desc: "When the registered mobile is inaccessible, the citizen recovers via Aadhaar OTP — never the default path.", frame: F.AadhaarRecovery },
        { name: "Unregistered mobile", desc: "Clear message that no account exists, with a Register link as the primary next step.", frame: F.NotRegistered },
      ],
    },
  },

  /* ───── 1.6 Auth Error & Lockout ───── */
  {
    id: "lockout",
    num: "PATTERN · 1.6",
    title: "Auth Error & Account Lockout",
    lede: "How to push back on bad attempts without scaring honest citizens. Whisper the first mistake, warn before the last, and lock cleanly with a way back in.",

    whenToUse: [
      "Inside every OTP-based authentication flow — Sign In, Sign Up, Recovery, Aadhaar gate.",
      "Inside payment OTP confirmation flows.",
      "Anywhere a sequence of wrong attempts can compromise an account.",
    ],
    whenNotFor: "Form-validation errors that are not security-related — those use inline field errors, not this escalation pattern.",

    flow: [
      "First wrong OTP · inline",
      "Second · amber + attempts",
      "Final · red warning",
      "Locked · 30 min",
      "Auto-unlock · ready",
      "Suspicious activity · extra verify",
    ],

    screensSet: (() => {
      const base = "assets/images/pattern-screens/identity/lockout";
      const flow = [
        { id: "otp-verification",   label: "OTP verification",   desc: "The healthy starting point. No errors, no warnings, just the citizen and the code, so any deviation later reads clearly against this baseline." },
        { id: "first-attempt",      label: "First wrong attempt", desc: "Acknowledge the slip, hide the count. A typo is not a security event, so do not turn it into one on the citizen's first try." },
        { id: "final-attempt",      label: "Final attempt",       desc: "Tell the citizen the truth before they lose access. One more wrong code means thirty minutes out, and saying so prevents the lockout most of the time." },
        { id: "locked",             label: "Locked",              desc: "Block the form so retries cannot happen, but show the clock and a human to call. A locked screen with no exit is worse than a wait." },
        { id: "auto-unlock",        label: "Auto-unlock",         desc: "When the wait ends, the form returns ready to try. The citizen does not have to refresh, navigate, or guess that they can proceed." },
        { id: "suspicious-activity",label: "Suspicious activity", desc: "When the sign-in looks unusual, add a step rather than denying access. The citizen recognises themselves, an attacker does not." },
      ];
      const mk = (device, layout) => ({ id: layout.id, label: layout.label,
        screens: flow.map((s) => ({
          id: device + "-" + layout.id + "-" + s.id, label: s.label, desc: s.desc,
          src: base + "/" + device + "-" + layout.id + "-" + s.id + ".png",
        })),
      });
      return {
        intro: "Six frames showing how feedback escalates from typo to threat. Each step gives the citizen room to recover before the next one closes a door.",
        devices: [
          { id: "desktop", label: "Desktop", layouts: [
            mk("desktop", { id: "column",     label: "Column" }),
            mk("desktop", { id: "fullscreen", label: "Full screen" }),
            mk("desktop", { id: "card",       label: "Card" }),
          ]},
          { id: "mobile", label: "Mobile", layouts: [
            mk("mobile", { id: "fullscreen", label: "Full screen" }),
            mk("mobile", { id: "card",       label: "Card" }),
          ]},
        ],
      };
    })(),

    screens: [
      { name: "First wrong OTP", desc: "Inline error below boxes; attempts hidden initially.", frame: F.WrongOtp },
      { name: "Final attempt", desc: "Red banner — explicit lockout threat before the third failure.", frame: F.FinalAttempt },
      { name: "Locked", desc: "All controls disabled, countdown, helpline; resend hidden.", frame: F.Locked },
      { name: "Auto-unlock", desc: "Countdown reaches zero, form refreshes with success toast.", frame: F.AutoUnlock },
      { name: "Suspicious activity", desc: "Amber alert above form — new device, please verify identity.", frame: F.Suspicious },
    ],

    components: [
      { name: "OTP Input" }, { name: "Alert · error" }, { name: "Alert · amber" }, { name: "Button" },
    ],

    behaviour: [
      "Lockout: 30 minutes after 3 failed OTP attempts — auto-unlock fires when the timer hits zero.",
      "Never reveal remaining attempts until after the second failure — reduces brute-force information leakage.",
      "Suspicious activity (new device, new geo) adds an additional verification step but does not lock the account immediately.",
    ],

    edgeCases: [
      "Lockout: 30 minutes after 3 failed OTP attempts — auto-unlock after timer expires.",
      "Never reveal which attempts remain until the second failure — reduces brute-force information.",
      "Suspicious activity: different device or new location — trigger additional verification step.",
    ],

    doDont: [
      { do: "Hide remaining-attempts on the first wrong attempt; reveal from the second.", dont: "Show 'You have 2 attempts left' on the first wrong attempt — gives free reconnaissance to attackers." },
      { do: "Show a 30-minute lockout countdown so the citizen knows when to come back.", dont: "Lock the account silently or for an indeterminate duration." },
    ],

    a11y: [
      "Lockout countdown is announced once at lock-start and once at unlock — not continuously.",
      "Helpline number is announced as a full readable string for screen readers.",
    ],

    related: [
      { tag: "Inside", name: "OTP Verification", href: "#otp", desc: "This pattern is the failure escalation for OTP." },
    ],

    errorRecovery: {
      intro: "Each escalation stage from first wrong attempt through to auto-unlock — this pattern is itself a recovery flow, so every state is a screen.",
      screens: [
        { name: "First wrong OTP", desc: "Inline error only. Remaining attempts intentionally hidden to reduce information leakage.", frame: F.WrongOtp },
        { name: "Final attempt warning", desc: "Red banner with explicit lockout threat before the third failure.", frame: F.FinalAttempt },
        { name: "Locked", desc: "All controls disabled. 30-minute countdown live, helpline visible, resend hidden entirely.", frame: F.Locked },
        { name: "Auto-unlock", desc: "Countdown reaches zero — fresh sign-in form returns with success toast.", frame: F.AutoUnlock },
        { name: "Suspicious activity", desc: "New device or new geolocation triggers an additional verification step above the form.", frame: F.Suspicious },
      ],
    },
  },

  /* ───── 1.7 Aadhaar Authentication Gate ───── */
  {
    id: "aadhaar",
    num: "PATTERN · 1.7",
    title: "Aadhaar Authentication Gate",
    lede: "How to verify identity through UIDAI without trapping the citizen on a method that fails. Earn consent first, then keep four routes open and let failure pick the next one.",

    whenToUse: [
      "When a service legally requires verified identity beyond mobile ownership (income certificate, caste certificate, scheme enrolment).",
      "Inside form flows at the 'Verify Identity' step, never at sign-in.",
      "When eKYC data must be matched against UIDAI records (name, DOB, gender, address).",
    ],
    whenNotFor: "Low-stakes services (status checks, downloads). Anonymous browsing. Any flow where the citizen has not yet signed in.",

    flow: [
      "Context + consent",
      "Method selector",
      "Verify (OTP / Face / Fingerprint / TOTP)",
      "Success · masked UID",
      "Failure · fallback to another method",
    ],

    screensSet: (() => {
      const base = "assets/images/pattern-screens/identity/aadhaar";
      const flow = [
        { id: "entry",    label: "Context + consent",  desc: "Name the service, name what is shared, and wait for an active opt-in. A pre-checked consent here is a DPDP violation, not a shortcut." },
        { id: "otp",      label: "OTP method",         desc: "The cheapest method first. If the Aadhaar-linked phone is in hand, the citizen verifies without touching biometrics at all." },
        { id: "face",     label: "Face authentication",desc: "Camera capture when the device and lighting allow it. Useful for remote applicants, never the only option on offer." },
        { id: "totp",     label: "TOTP method",        desc: "A time-based code from the m-Aadhaar app, for citizens who installed it once and now have no signal at all." },
        { id: "vle-mode", label: "VLE kiosk mode",     desc: "At a service centre the operator drives a hardware scanner. Webcam face auth disappears here because the environment cannot guarantee a clean capture." },
        { id: "success",  label: "Verified",           desc: "Confirm identity using only the parts of the UID that the citizen needs to see, then move forward. No celebration of personal data." },
        { id: "failure",  label: "Failure",            desc: "Say what went wrong with this method, then point to a different one. Forcing a retry of the same broken method is the worst answer." },
        { id: "lockout",  label: "Lockout",            desc: "When every method has failed, give the citizen a person to call. UIDAI lockouts cannot be designed around, only escalated cleanly." },
      ];
      const mk = (device, layout) => ({ id: layout.id, label: layout.label,
        screens: flow.map((s) => ({
          id: device + "-" + layout.id + "-" + s.id, label: s.label, desc: s.desc,
          src: base + "/" + device + "-" + layout.id + "-" + s.id + ".png",
        })),
      });
      return {
        intro: "Eight frames covering the four UIDAI methods, the consent gate, success, failure, and lockout. A kiosk variant swaps webcam capture for a hardware scanner.",
        devices: [
          { id: "desktop", label: "Desktop", layouts: [
            mk("desktop", { id: "column",     label: "Column" }),
            mk("desktop", { id: "fullscreen", label: "Full screen" }),
            mk("desktop", { id: "card",       label: "Card" }),
          ]},
          { id: "mobile", label: "Mobile", layouts: [
            mk("mobile", { id: "fullscreen", label: "Full screen" }),
            mk("mobile", { id: "card",       label: "Card" }),
          ]},
        ],
      };
    })(),

    screens: [
      { name: "Context + consent", desc: "Service name, UIDAI trust badge, mandatory consent checkbox.", frame: F.AadhaarContext },
      { name: "Method selector", desc: "4 radio cards — OTP, Face, Fingerprint, TOTP. Proceed disabled until consent checked.", frame: F.AadhaarMethod },
      { name: "OTP flow", desc: "Aadhaar-linked mobile OTP input.", frame: F.OtpEntry },
      { name: "Success", desc: "Identity verified — name and masked UID, auto-advance.", frame: F.AadhaarVerified },
      { name: "VLE kiosk mode", desc: "Fingerprint primary, OTP fallback — no webcam face auth.", frame: F.VleKiosk },
    ],

    components: [
      { name: "Biometric Capture" }, { name: "OTP Input" }, { name: "Button group" },
      { name: "Alert" }, { name: "Checkbox" }, { name: "Badge" },
    ],

    behaviour: [
      "Proceed button is disabled until the consent checkbox is checked — never auto-check.",
      "Method selector remembers the citizen's last choice across sessions.",
      "Failure routes back to the method selector with the failed method greyed and a suggestion to try a different one.",
      "VLE kiosk variant detects the operating context and hides webcam face authentication.",
    ],

    edgeCases: [
      "UIDAI API timeout beyond 10 seconds: show spinner with 'This is taking longer than usual please wait'.",
      "Aadhaar not linked to service: 'Link your Aadhaar at nearest CSC or eKYC contact 1947'.",
      "VLE kiosk: never offer webcam face auth — only hardware fingerprint scanner or OTP.",
    ],

    doDont: [
      { do: "Require explicit consent before showing any verification method.", dont: "Pre-check the consent checkbox — that is a DPDP violation." },
      { do: "Offer cross-method fallback after a failure — try a different method, not the same one.", dont: "Force the citizen to retry the same method that just failed." },
    ],

    a11y: [
      "Method radio cards are a proper radio group — arrow keys cycle, Space selects.",
      "Consent checkbox is associated to its label by for/id and required attribute is exposed.",
      "Biometric capture component announces 'Verifying with UIDAI' politely.",
    ],

    related: [
      { tag: "Used by", name: "Government Form with Validation", href: "UX4G Application.html#form", desc: "Form's identity step." },
      { tag: "Inside", name: "Biometric Verification Flow", href: "#biometric", desc: "Face / fingerprint specifics." },
    ],

    compliance: {
      law: "DPDP Act 2023 + UIDAI eKYC circular",
      body: [
        "Explicit consent is mandatory before any biometric activation. Pre-checked consent boxes are explicitly called out as a dark pattern and are a DPDP violation.",
        "Raw biometric data is never retained — only the verification result (pass/fail) is stored. The UIDAI eKYC circular limits permitted use to the stated service purpose.",
      ],
    },
    dataHandling: [
      "Only the verification result (success / failure) plus a masked UID (last 4 digits) is stored against the application record.",
      "Raw biometric data (face, fingerprint) is processed in memory only and discarded immediately after the UIDAI response.",
      "The exact consent string, timestamp, IP, and policy version are written to an immutable consent log.",
    ],
    vle: {
      text: "At a CSC kiosk, fingerprint via hardware scanner is the primary verification path. Webcam face authentication is never used in this context — the kiosk environment is uncontrolled and the device-readiness checks for the fingerprint scanner are more reliable.",
      flow: ["VLE auth", "Citizen consent", "Fingerprint primary", "OTP fallback if scanner fails"],
      screens: [
        { name: "Kiosk method selector", desc: "Fingerprint primary; OTP fallback. Webcam face authentication is never offered at a kiosk.", frame: F.VleKiosk },
      ],
    },
    integrations: [
      { sys: "UIDAI eKYC API", purpose: "Primary verification endpoint for OTP / Face / Fingerprint." },
      { sys: "UIDAI TOTP service", purpose: "Time-based one-time password verification — 30-second validity bar." },
    ],
    errorRecovery: {
      intro: "What happens when UIDAI verification fails or times out, and how the citizen gets to a working method.",
      screens: [
        { name: "Method failure", desc: "Method-specific error with cross-method fallback. Method selector returns with the failed method greyed.", frame: F.AadhaarMethod },
        { name: "Locked after 3 fails", desc: "All three methods exhausted — gate locked for 30 minutes with an escalation path to in-person verification.", frame: F.Locked },
      ],
    },
  },

  /* ───── 1.8 Biometric Verification Flow ───── */
  {
    id: "biometric",
    num: "PATTERN · 1.8",
    title: "Biometric Verification Flow",
    lede: "How to capture a face for UIDAI without leaving the citizen stranded when the camera fights back. Earn consent, prove liveness, then quietly switch to OTP after two misses.",

    whenToUse: [
      "Inside the Aadhaar Authentication Gate when the citizen has chosen Face or Fingerprint.",
      "On standalone identity-verification flows that match against UIDAI.",
      "When the device has a working camera (face) or hardware fingerprint scanner (kiosk).",
    ],
    whenNotFor: "Low-bandwidth or no-camera environments. Mobile devices in landscape mode where face capture is unreliable. Public kiosks without controlled lighting.",

    flow: [
      "Consent gate",
      "Camera permission",
      "Face alignment + liveness",
      "Processing",
      "Success · masked UID",
      "Auto-fallback to OTP after 2 failures",
    ],

    screensSet: (() => {
      const base = "assets/images/pattern-screens/identity/biometric";
      const flow = [
        { id: "consent-gate",        label: "Consent gate",       desc: "The camera stays off until the citizen actively agrees. Naming what is captured and why is the only honest way to ask." },
        { id: "camera-permission",   label: "Camera permission",  desc: "When the browser prompt appears, explain what is about to happen underneath it. A denied prompt should not feel like a dead end." },
        { id: "face-alignment",      label: "Face alignment",     desc: "Real-time hints turn camera framing from a guessing game into a guided action. The citizen knows when they are doing it right." },
        { id: "liveness-check",      label: "Liveness check",     desc: "A small action proves a real person is present. Keep the instruction natural so the citizen does not feel inspected." },
        { id: "processing",          label: "Processing",         desc: "Block input while UIDAI responds, but show the system is working. Silent spinners on slow connections feel like a freeze." },
        { id: "success",             label: "Success",            desc: "Confirm identity briefly with only the parts of the UID the citizen needs to see, then advance without making them tap again." },
        { id: "failure-retry",       label: "Failure / Retry",    desc: "Tell the citizen which thing went wrong, like lighting or alignment, so the retry has a chance of succeeding this time." },
        { id: "otp-fallback",        label: "OTP fallback",       desc: "After two failed captures the flow switches on its own. The citizen never has to admit defeat to find the cheaper path." },
        { id: "camera-unavailable",  label: "Camera unavailable", desc: "No camera, no permission, no problem. The OTP path appears with no scolding so the verification still completes." },
      ];
      const mkDesktop = (layout) => ({ id: layout.id, label: layout.label,
        screens: flow.map((s) => ({
          id: "desktop-" + layout.id + "-" + s.id, label: s.label, desc: s.desc,
          src: base + "/desktop-" + layout.id + "-" + s.id + ".png",
        })),
      });
      const mkMobile = () => ({ id: "default", label: "Mobile",
        screens: flow.map((s) => ({
          id: "mobile-default-" + s.id, label: s.label, desc: s.desc,
          src: base + "/mobile-default-" + s.id + ".png",
        })),
      });
      return {
        intro: "Nine frames covering the full face-capture journey, from consent through liveness to a graceful OTP fallback when the camera or the citizen cannot cooperate.",
        devices: [
          { id: "desktop", label: "Desktop", layouts: [
            mkDesktop({ id: "card",   label: "Card" }),
            mkDesktop({ id: "column", label: "Column" }),
          ]},
          { id: "mobile",  label: "Mobile",  layouts: [mkMobile()] },
        ],
      };
    })(),

    screens: [
      { name: "Consent gate", desc: "Before camera activates — explicit consent.", frame: F.BioConsent },
      { name: "Face alignment + liveness", desc: "Oval guide, blink then turn instructions.", frame: F.BioAlign },
      { name: "Auto-fallback to OTP", desc: "After 2 failures, switches to OTP without user action.", frame: F.BioFallback },
    ],

    components: [
      { name: "Biometric Capture" }, { name: "OTP Input" }, { name: "Button" }, { name: "Alert" },
    ],

    behaviour: [
      "Camera does not activate until consent is checked and Continue is tapped — no exceptions.",
      "Liveness checks combine blink + slight head turn — single-frame face match is insufficient.",
      "Two consecutive failures trigger automatic OTP fallback — the citizen does not have to choose it.",
      "Poor-lighting detection runs locally before any data is sent to UIDAI.",
    ],

    edgeCases: [
      "Liveness checks prevent photo-spoofing — minimum: blink plus slight head turn.",
      "Auto-switch to OTP after 2 biometric failures without requiring user to select.",
      "Poor lighting: detect dark frame and warn before sending to UIDAI.",
    ],

    doDont: [
      { do: "Process biometric data in-memory and discard after verification.", dont: "Store the captured face image on any server, even temporarily." },
      { do: "Auto-fallback to OTP after 2 failures.", dont: "Force the citizen to manually pick another method after every failure." },
    ],

    a11y: [
      "Face alignment instructions are announced as voice prompts in addition to visual cues.",
      "Liveness prompts (blink, turn) are large-text and high-contrast.",
      "Fallback to OTP is announced as a polite live-region update when it triggers.",
    ],

    related: [
      { tag: "Parent", name: "Aadhaar Authentication Gate", href: "#aadhaar", desc: "Biometric is one of its methods." },
      { tag: "Fallback", name: "OTP Verification", href: "#otp", desc: "Triggered on 2 biometric failures." },
    ],

    compliance: {
      law: "DPDP Act 2023 — biometric data provisions",
      body: "Biometric data is processed in memory only — no on-disk storage on the client or the server. Only the pass/fail result is logged. Explicit consent before camera activation is mandatory.",
    },
    dataHandling: [
      "Face / fingerprint capture is processed in memory and discarded immediately after the UIDAI response.",
      "Only the pass/fail result is logged, alongside the masked UID and timestamp.",
      "No raw biometric, even temporarily, is written to disk or shared storage.",
    ],
    vle: {
      text: "Kiosk variant uses fingerprint hardware scanner (USB) with device-readiness checks for the driver and SDK. Webcam face authentication is never offered at the kiosk.",
      screens: [
        { name: "Kiosk fingerprint", desc: "USB scanner with driver/SDK readiness checks. Face authentication is hidden in this context.", frame: F.VleKiosk },
      ],
    },
    integrations: [
      { sys: "UIDAI face authentication API", purpose: "Face match endpoint." },
      { sys: "Liveness detection SDK", purpose: "Local blink/head-turn detection before sending to UIDAI." },
    ],
    errorRecovery: {
      intro: "Failure detection runs before any data leaves the device. Fallback to OTP is automatic.",
      screens: [
        { name: "Liveness in progress", desc: "Blink + slight head turn — single-frame face match is insufficient.", frame: F.BioAlign },
        { name: "Auto-fallback to OTP", desc: "After 2 consecutive failures, the flow switches to OTP automatically — the citizen does not have to pick it.", frame: F.BioFallback },
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
        <PtStickyBar patterns={SIDEBAR_PATTERNS} activeSlug="identity-access" />
        <PtLeftNav activeSlug="identity-access" />
        <PtHero
          slug="identity-access"
          num="P-01"
          tag="P-01 · Identity & Access · Live"
          title="Identity & Access"
          desc="Patterns for how citizens sign in, verify their identity, and recover access to government services. Built for India — Aadhaar OTP, mobile OTP, and biometric flows included."
          meta={["8 patterns"]}
        >
          <img className="ptc-hero-img" src="assets/images/Identity & Access.png" alt="Identity & Access illustration" />
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
