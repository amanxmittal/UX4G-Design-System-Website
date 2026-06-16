/* global React, ReactDOM */
const { useState, useEffect, useCallback } = React;

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
function Navbar({ onStub }) {
  const links = [
    { l: "Foundations", href: "UX4G Foundations.html" },
    { l: "Fundamentals", href: "UX4G Fundamentals.html" },
    { l: "Components", href: "UX4G Components.html" },
    { l: "Patterns", href: "UX4G Patterns.html" },
    { l: "Made by You", href: "UX4G Made by You.html" },
  ];
  return (
    <SiteNavbar />
  );
}

/* ───────── Phone frame ───────── */
function Phone({ caption, appBar = "MyGov · Sign in", children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div className="phone">
        <div className="phone-screen">
          <div className="phone-statusbar">
            <span>9:41</span>
            <span className="battery"><i></i><i></i><i></i><i></i></span>
          </div>
          <div className="phone-app-bar">
            <span className="b">●</span>
            <span>{appBar}</span>
          </div>
          <div className="ps-body">{children}</div>
        </div>
      </div>
      <div className="phone-cap">{caption}</div>
    </div>
  );
}
function Arrow() { return <span className="arr">→</span>; }

function OtpRow({ values, focus, state }) {
  return (
    <div className="otp-row">
      {[0,1,2,3,4,5].map((i) => (
        <div key={i} className={"otp-box " + (state || "") + (focus === i ? " focus" : "") + (values && values[i] ? "" : " dot")}>
          {values && values[i] ? values[i] : ""}
        </div>
      ))}
    </div>
  );
}

/* ───────── Pattern flows ───────── */

function SignInFlow() {
  return (
    <div className="flow-strip">
      <Phone caption="1 · Landing">
        <p className="ps-title">Sign in to MyGov</p>
        <p className="ps-sub">Enter your registered mobile number to continue.</p>
        <div className="ps-label">Mobile number</div>
        <div className="ps-input filled"><span className="prefix">+91</span><span>98765 43210</span></div>
        <div className="ps-help">We'll send a 6-digit OTP via SMS.</div>
        <div className="ps-btn">Send OTP</div>
        <div className="ps-link">Sign in with Aadhaar instead</div>
      </Phone>
      <Arrow />
      <Phone caption="2 · OTP entry">
        <p className="ps-title">Verify your number</p>
        <p className="ps-sub">OTP sent to +91 98765 43210</p>
        <OtpRow values={["4","8","2","",""]} focus={3} />
        <div className="countdown"><span>Expires in 02:14</span><span className="resend">Resend in 28s</span></div>
        <div className="ps-btn disabled">Verify OTP</div>
        <div className="ps-link">Change number</div>
      </Phone>
      <Arrow />
      <Phone caption="3 · Success">
        <div className="success-screen">
          <div className="success-icon">✓</div>
          <div className="stitle">Signed in</div>
          <div className="ssub">Redirecting to your dashboard…</div>
        </div>
      </Phone>
      <Arrow />
      <Phone caption="4 · Wrong OTP">
        <p className="ps-title">Verify your number</p>
        <p className="ps-sub">OTP sent to +91 98765 43210</p>
        <OtpRow values={["4","8","2","1","9","0"]} state="err" />
        <div className="banner err"><span className="b-icon">!</span><span>The OTP you entered is incorrect. 2 attempts remaining.</span></div>
        <div className="ps-btn ghost">Try again</div>
        <div className="ps-link">Resend OTP</div>
      </Phone>
    </div>
  );
}

function SignUpFlow() {
  return (
    <div className="flow-strip">
      <Phone caption="1 · Create account" appBar="MyGov · Sign up">
        <p className="ps-title">Create your account</p>
        <p className="ps-sub">Citizens with an existing account, please sign in.</p>
        <div className="ps-label">Mobile number</div>
        <div className="ps-input filled"><span className="prefix">+91</span><span>91234 56789</span></div>
        <div className="ps-help ok">✓ Available, new account</div>
        <div className="ps-btn">Send OTP</div>
      </Phone>
      <Arrow />
      <Phone caption="2 · Verify OTP" appBar="MyGov · Sign up">
        <p className="ps-title">Verify your number</p>
        <p className="ps-sub">OTP sent to +91 91234 56789</p>
        <OtpRow values={["1","9","4","8","2","6"]} state="ok" />
        <div className="ps-help ok">✓ OTP verified successfully</div>
        <div className="ps-btn">Continue</div>
      </Phone>
      <Arrow />
      <Phone caption="3 · Profile setup" appBar="MyGov · Profile">
        <p className="ps-title">Tell us about you</p>
        <div className="ps-label">Full name</div>
        <div className="ps-input filled"><span>Priya Sharma</span></div>
        <div className="ps-label">Preferred language</div>
        <div className="ps-input filled" style={{ justifyContent: "space-between" }}><span>हिन्दी (Hindi)</span><span style={{ color: "var(--gray-400)" }}>▾</span></div>
        <div className="ps-help">Site will switch immediately</div>
        <div className="ps-btn">Create account</div>
      </Phone>
      <Arrow />
      <Phone caption="4 · Account created" appBar="MyGov · Welcome">
        <div className="success-screen" style={{ paddingTop: 8 }}>
          <div className="success-icon">✓</div>
          <div className="stitle">Account created</div>
          <div className="ssub">Welcome, Priya.</div>
        </div>
        <div className="banner info" style={{ marginTop: "auto" }}>
          <span className="b-icon">+</span>
          <span><strong>Link Aadhaar (optional)</strong><br/>Faster access to 200+ services.</span>
        </div>
        <div className="ps-btn ghost">Skip for now</div>
      </Phone>
    </div>
  );
}

function OtpFlow() {
  return (
    <div className="flow-strip">
      <Phone caption="1 · OTP entry">
        <p className="ps-title">Verify your number</p>
        <p className="ps-sub">OTP sent to +91 98765 43210</p>
        <OtpRow values={["","","","","",""]} focus={0} />
        <div className="countdown"><span>Expires in 04:58</span><span className="resend">Resend in 59s</span></div>
        <div className="ps-help">Auto-fills from SMS</div>
      </Phone>
      <Arrow />
      <Phone caption="2 · Auto-pasted">
        <p className="ps-title">Verify your number</p>
        <p className="ps-sub">OTP sent to +91 98765 43210</p>
        <OtpRow values={["3","9","1","7","4","2"]} state="ok" />
        <div className="banner info"><span className="b-icon">⌗</span><span>OTP auto-filled from SMS. Verifying…</span></div>
        <div className="ps-btn disabled">Verifying…</div>
      </Phone>
      <Arrow />
      <Phone caption="3 · Wrong OTP">
        <p className="ps-title">Verify your number</p>
        <p className="ps-sub">OTP sent to +91 98765 43210</p>
        <OtpRow values={["3","9","1","7","4","8"]} state="err" />
        <div className="banner err"><span className="b-icon">!</span><span>Incorrect OTP. Please re-enter.</span></div>
        <div className="ps-link">Resend OTP</div>
      </Phone>
      <Arrow />
      <Phone caption="4 · Final warning">
        <p className="ps-title">Verify your number</p>
        <p className="ps-sub">OTP sent to +91 98765 43210</p>
        <OtpRow values={["","","","","",""]} focus={0} />
        <div className="banner warn"><span className="b-icon">⚠</span><span><strong>Last attempt remaining</strong><br/>Account locks for 30 minutes after the next failure.</span></div>
      </Phone>
      <Arrow />
      <Phone caption="5 · Locked">
        <p className="ps-title">Account locked</p>
        <div className="locked-circle">⊘</div>
        <div className="lock-timer">29:42</div>
        <div className="attempts">AUTO-UNLOCKS IN 30 MIN</div>
        <div className="banner err"><span className="b-icon">!</span><span>Too many incorrect attempts. We've paused sign-in for your safety.</span></div>
        <div className="ps-link">Call helpline 1800-XXX-XXXX</div>
      </Phone>
    </div>
  );
}

function SessionFlow() {
  return (
    <div className="flow-strip">
      <Phone caption="1 · 5-min warning" appBar="MyGov · Application form">
        <p className="ps-title" style={{ opacity: 0.6 }}>Caste certificate</p>
        <div className="ps-input placeholder" style={{ opacity: 0.5 }}><span>Applicant name</span></div>
        <div className="ps-input placeholder" style={{ opacity: 0.5 }}><span>District</span></div>
        <div className="session-modal">
          <div className="modal-card">
            <div className="mtitle">Session about to expire</div>
            <div className="mtimer">04:42</div>
            <div className="mtext">Your draft is auto-saved. Stay signed in to continue.</div>
            <div className="mactions">
              <div className="ps-btn ghost">Sign out</div>
              <div className="ps-btn">Stay signed in</div>
            </div>
          </div>
        </div>
      </Phone>
      <Arrow />
      <Phone caption="2 · Urgent warning" appBar="MyGov · Application form">
        <div className="session-modal">
          <div className="modal-card" style={{ borderTop: "3px solid var(--danger)" }}>
            <div className="mtitle" style={{ color: "var(--danger)" }}>Expiring in under a minute</div>
            <div className="mtimer urgent">00:42</div>
            <div className="mtext">Your draft is safe, we'll restore it after you re-authenticate.</div>
            <div className="mactions">
              <div className="ps-btn">Stay signed in</div>
            </div>
          </div>
        </div>
      </Phone>
      <Arrow />
      <Phone caption="3 · Session expired" appBar="MyGov">
        <div className="session-modal">
          <div className="modal-card">
            <div className="mtitle">Session expired</div>
            <div className="banner ok" style={{ marginTop: 4 }}>
              <span className="b-icon">✓</span><span>Your draft is saved. Sign in again to continue.</span>
            </div>
            <div className="mactions">
              <div className="ps-btn">Sign in to resume</div>
            </div>
          </div>
        </div>
      </Phone>
      <Arrow />
      <Phone caption="4 · Re-auth">
        <p className="ps-title">Welcome back, Priya</p>
        <p className="ps-sub">Resuming caste certificate draft</p>
        <div className="ps-label">Mobile number</div>
        <div className="ps-input filled"><span className="prefix">+91</span><span>•••• ••3210</span></div>
        <div className="ps-btn">Send OTP</div>
        <div className="banner info"><span className="b-icon">↻</span><span>You'll return to step 3 of 5 with your draft restored.</span></div>
      </Phone>
      <Arrow />
      <Phone caption="5 · Draft restored" appBar="MyGov · Application form">
        <div className="banner ok"><span className="b-icon">✓</span><span><strong>Draft restored.</strong> Resuming step 3 of 5.</span></div>
        <p className="ps-title" style={{ fontSize: 13 }}>Caste certificate</p>
        <div className="ps-input filled"><span>Priya Sharma</span></div>
        <div className="ps-input filled"><span>Lucknow, UP</span></div>
        <div className="ps-btn">Continue</div>
      </Phone>
    </div>
  );
}

function RecoveryFlow() {
  return (
    <div className="flow-strip">
      <Phone caption="1 · Recover access" appBar="MyGov · Recover">
        <p className="ps-title">Recover your account</p>
        <p className="ps-sub">Most citizens sign in with OTP, try that first.</p>
        <div className="ps-btn">Sign in with OTP instead</div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, margin: "4px 0" }}>
          <div style={{ flex: 1, height: 1, background: "var(--gray-200)" }}></div>
          <span className="ps-help">or recover password</span>
          <div style={{ flex: 1, height: 1, background: "var(--gray-200)" }}></div>
        </div>
        <div className="ps-label">Registered mobile</div>
        <div className="ps-input filled"><span className="prefix">+91</span><span>98765 43210</span></div>
        <div className="ps-btn ghost">Continue</div>
      </Phone>
      <Arrow />
      <Phone caption="2 · Verify OTP" appBar="MyGov · Recover">
        <p className="ps-title">Verify your number</p>
        <p className="ps-sub">OTP sent to +91 98765 43210</p>
        <OtpRow values={["8","2","4","9","",""]} focus={4} />
        <div className="countdown"><span>Expires in 04:08</span><span className="resend active">Resend</span></div>
        <div className="ps-btn disabled">Verify</div>
      </Phone>
      <Arrow />
      <Phone caption="3 · New password" appBar="MyGov · Recover">
        <p className="ps-title">Set a new password</p>
        <div className="ps-label">New password</div>
        <div className="ps-input filled"><span>••••••••••</span></div>
        <div className="strength">
          <div className="bar strong"></div>
          <div className="bar strong"></div>
          <div className="bar strong"></div>
          <div className="bar"></div>
        </div>
        <div className="ps-help ok">Strong, 12 characters, mixed case, number</div>
        <div className="ps-label">Confirm</div>
        <div className="ps-input filled"><span>••••••••••</span></div>
        <div className="ps-btn">Update password</div>
      </Phone>
      <Arrow />
      <Phone caption="4 · Recovered" appBar="MyGov">
        <div className="success-screen">
          <div className="success-icon">✓</div>
          <div className="stitle">Password updated</div>
          <div className="ssub">You're signed in.</div>
        </div>
        <div className="ps-btn">Continue to dashboard</div>
      </Phone>
      <Arrow />
      <Phone caption="5 · Aadhaar fallback" appBar="MyGov · Recover">
        <p className="ps-title">No phone access?</p>
        <p className="ps-sub">Recover with Aadhaar authentication instead.</p>
        <div className="ps-label">Aadhaar number</div>
        <div className="ps-input filled"><span>XXXX XXXX 4521</span></div>
        <div className="banner info"><span className="b-icon">⌗</span><span>You'll receive an OTP on your Aadhaar-linked mobile.</span></div>
        <div className="ps-btn">Send Aadhaar OTP</div>
      </Phone>
    </div>
  );
}

function LockoutFlow() {
  return (
    <div className="flow-strip">
      <Phone caption="1 · First failure">
        <p className="ps-title">Verify your number</p>
        <p className="ps-sub">OTP sent to +91 98765 43210</p>
        <OtpRow values={["4","8","2","1","9","0"]} state="err" />
        <div className="banner err"><span className="b-icon">!</span><span>Incorrect OTP. Please re-enter.</span></div>
        <div className="ps-link">Resend OTP</div>
      </Phone>
      <Arrow />
      <Phone caption="2 · Second failure">
        <p className="ps-title">Verify your number</p>
        <p className="ps-sub">OTP sent to +91 98765 43210</p>
        <OtpRow values={["4","8","2","1","9","0"]} state="err" />
        <div className="banner warn"><span className="b-icon">⚠</span><span><strong>2 of 3 attempts used</strong><br/>One attempt remaining before lockout.</span></div>
      </Phone>
      <Arrow />
      <Phone caption="3 · Final warning">
        <p className="ps-title">Last attempt</p>
        <p className="ps-sub">Be careful, the next failure locks your account for 30 minutes.</p>
        <OtpRow values={["","","","","",""]} focus={0} />
        <div className="banner warn"><span className="b-icon">⚠</span><span>Need help? Request a voice OTP instead.</span></div>
        <div className="ps-link">Switch to voice OTP</div>
      </Phone>
      <Arrow />
      <Phone caption="4 · Locked">
        <p className="ps-title">Account locked</p>
        <div className="locked-circle">⊘</div>
        <div className="lock-timer">29:42</div>
        <div className="attempts">AUTO-UNLOCKS · NO ACTION NEEDED</div>
        <div className="ps-help">For urgent access call <strong>1800-XXX-XXXX</strong>.</div>
      </Phone>
      <Arrow />
      <Phone caption="5 · Auto-unlocked">
        <p className="ps-title">Welcome back</p>
        <div className="banner ok"><span className="b-icon">✓</span><span>Your account is unlocked. You can sign in again.</span></div>
        <div className="ps-label">Mobile number</div>
        <div className="ps-input filled"><span className="prefix">+91</span><span>98765 43210</span></div>
        <div className="ps-btn">Send OTP</div>
      </Phone>
      <Arrow />
      <Phone caption="6 · Suspicious activity">
        <p className="ps-title">Confirm it's you</p>
        <div className="banner info"><span className="b-icon">⌗</span><span><strong>New device detected</strong><br/>Sign-in attempt from Mumbai · Chrome 130</span></div>
        <div className="ps-label">Additional verification</div>
        <OtpRow values={["","","","","",""]} focus={0} />
        <div className="ps-btn">Verify identity</div>
        <div className="ps-link">This wasn't me</div>
      </Phone>
    </div>
  );
}

/* ───────── Pattern section wrapper ───────── */
function Pattern({ id, num, title, lede, Flow, decisions, components, onChip }) {
  return (
    <section id={id} className="ia-pattern">
      <div className="p-num">{num}</div>
      <h2 className="p-title">{title}</h2>
      <p className="p-lede">{lede}</p>
      <Flow />
      <div className="decisions">
        <div className="d-head">Key decisions</div>
        <ul>
          {decisions.map((d, i) => (
            <li key={i}>
              <span className="num">0{i + 1}</span>
              <div><strong>{d.h}</strong>{d.d}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="cu">
        <span className="cu-label">Components used</span>
        {components.map((c) => (
          <a key={c} className="chip" onClick={() => onChip(c)}>{c}</a>
        ))}
      </div>
    </section>
  );
}

/* ───────── Sidebar + sections meta ───────── */
const SECTIONS = [
  { id: "covers",   label: "What this group covers" },
  { id: "sign-in",  label: "Sign In" },
  { id: "sign-up",  label: "Sign Up & Account Creation" },
  { id: "otp",      label: "OTP Verification" },
  { id: "session",  label: "Session Timeout & Re-authentication" },
  { id: "recovery", label: "Forgot Password & Account Recovery" },
  { id: "lockout",  label: "Auth Error & Lockout" },
];

function Sidebar({ active }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: "smooth" });
  };
  return (
    <aside className="ia-side">
      <div className="side-label">On this page</div>
      <ul>
        {SECTIONS.map((s) => (
          <li key={s.id}>
            <a className={active === s.id ? "active" : ""} onClick={() => scrollTo(s.id)}>{s.label}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function App() {
  const { toasts, push } = useToasts();
  const stub = (n) => push(`${n}, page coming soon`);
  const chip = (n) => {
    if (n === "Button") { window.location.href = "UX4G Button.html"; return; }
    stub(n);
  };

  const [active, setActive] = useState("covers");
  useEffect(() => {
    const onScroll = () => {
      const probe = 180;
      let cur = SECTIONS[0].id;
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top < probe) cur = s.id;
      }
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Navbar onStub={stub} />
      <main className="ia-page">
        <div className="ia-layout">
          <div className="ia-main">
            {/* Header */}
            <div className="ia-header">
              <div className="ia-crumb">
                <a href="index.html">Home</a>
                <span className="sep">/</span>
                <a href="UX4G Patterns.html">Patterns</a>
                <span className="sep">/</span>
                <span className="current">Identity & Access</span>
              </div>
              <div className="ia-title-row">
                <h1 className="ia-title">Identity &amp; Access</h1>
                <span className="ia-status"><span className="ld"></span>6 patterns · Live</span>
              </div>
              <p className="ia-desc">
                Patterns for how citizens sign in, verify their identity, and recover access to government services. Built for India, Aadhaar OTP, mobile OTP, and biometric flows included.
              </p>
            </div>

            <Pattern
              id="sign-in" num="PATTERN · 1.1" title="Sign In"
              lede="The default door into any UX4G-powered service, mobile number plus a one-time OTP."
              Flow={SignInFlow}
              components={["Input", "OTP Input", "Button", "Alert", "Banner"]}
              onChip={chip}
              decisions={[
                { h: "Fail early at phone entry, ", d: "detect new vs returning citizens before sending the OTP. Don't waste an SMS just to surface a 'no account found' error." },
                { h: "Resume-draft amber banner, ", d: "if a session expired earlier, show it on the landing screen so citizens know their work is safe." },
                { h: "Voice OTP after 2 failures, ", d: "switch fallback channels automatically. SMS isn't reliable on every network." },
              ]}
            />

            <Pattern
              id="sign-up" num="PATTERN · 1.2" title="Sign Up & Account Creation"
              lede="Mobile-first registration with optional Aadhaar linking, Aadhaar is never a blocker."
              Flow={SignUpFlow}
              components={["Input", "OTP Input", "Dropdown", "Button", "Banner"]}
              onChip={chip}
              decisions={[
                { h: "Detect duplicates at entry, ", d: "never tell a citizen 'this number already has an account' after they typed an OTP. Catch it on blur." },
                { h: "Language preference is sticky and immediate, ", d: "the site switches the moment the dropdown closes, no Save button." },
                { h: "Aadhaar link is optional and skippable, ", d: "celebrate account creation first; offer Aadhaar linking as the next nudge, not a gate." },
              ]}
            />

            <Pattern
              id="otp" num="PATTERN · 1.3" title="OTP Verification"
              lede="Six-digit OTP flow with auto-fill, distinct error messaging, and graceful lockout recovery."
              Flow={OtpFlow}
              components={["OTP Input", "Banner", "Button", "Spinner", "Toast"]}
              onChip={chip}
              decisions={[
                { h: "Auto-submit on full entry, ", d: "Web OTP API + paste detection trigger verification immediately. The Verify button is a backup, not the path." },
                { h: "Distinguish expired vs wrong, ", d: "'OTP expired, request a new one' and 'OTP incorrect, try again' are different problems with different fixes." },
                { h: "Auto-unlock without refresh, ", d: "the locked-state screen counts down to zero and reveals the entry form. No reload, no panic." },
              ]}
            />

            <Pattern
              id="session" num="PATTERN · 1.4" title="Session Timeout & Re-authentication"
              lede="Protect long form-filling sessions with progressive warnings, auto-save, and one-tap draft restoration."
              Flow={SessionFlow}
              components={["Modal", "Banner", "Button", "Toast"]}
              onChip={chip}
              decisions={[
                { h: "Auto-save before warning, ", d: "draft persistence runs continuously. By the time the 5-minute warning appears, the work is already safe." },
                { h: "30 / 15-minute defaults, ", d: "standard sessions get 30 minutes idle. Post-biometric or post-Aadhaar drops to 15, higher stakes, tighter limit." },
                { h: "Return to exact URL, ", d: "after re-auth the citizen lands on the same step of the same form with their inputs already in the fields." },
              ]}
            />

            <Pattern
              id="recovery" num="PATTERN · 1.5" title="Forgot Password & Account Recovery"
              lede="OTP-first recovery, password fallback, and Aadhaar-based recovery for citizens without phone access."
              Flow={RecoveryFlow}
              components={["Input", "OTP Input", "Password input", "Button", "Banner"]}
              onChip={chip}
              decisions={[
                { h: "Promote OTP sign-in over password reset, ", d: "most government accounts don't have passwords. Make the OTP option dominant; password recovery is the secondary path." },
                { h: "Aadhaar recovery for unreachable mobiles, ", d: "lost phone, changed number, network outage, Aadhaar OTP is the recovery floor." },
                { h: "Strength as a meter, not a list, ", d: "Weak / Fair / Strong + a short reason. Don't show citizens an 8-bullet rule list every time they type." },
              ]}
            />

            <Pattern
              id="lockout" num="PATTERN · 1.6" title="Auth Error & Lockout"
              lede="Honest, time-bound lockouts with auto-unlock, never a silent failure or a permanent dead-end."
              Flow={LockoutFlow}
              components={["OTP Input", "Banner", "Button", "Helpline link"]}
              onChip={chip}
              decisions={[
                { h: "Hide attempt count until failure two, ", d: "leaking 'you have 3 attempts left' helps attackers as much as citizens. Reveal urgency only when relevant." },
                { h: "Auto-unlock after 30 minutes, ", d: "no support ticket, no SMS, no manual reset. The countdown is the lock." },
                { h: "Suspicious activity ≠ lockout, ", d: "new device / new location triggers additional verification, not punishment. Most flags are travel or a new SIM." },
              ]}
            />

            {/* Consistency block */}
            <section className="consistency">
              <h2>What stays consistent across all six patterns</h2>
              <div className="grid">
                <div className="col">
                  <div className="cap">RULE · 01</div>
                  <h3>Always show a fallback</h3>
                  <p>Every auth method has an alternative. OTP → Voice OTP → Aadhaar. Never a dead end.</p>
                </div>
                <div className="col">
                  <div className="cap">RULE · 02</div>
                  <h3>Always confirm draft safety</h3>
                  <p>When sessions expire or errors occur, tell the citizen their progress is saved, before asking them to re-authenticate.</p>
                </div>
                <div className="col">
                  <div className="cap">RULE · 03</div>
                  <h3>Always explain lockouts</h3>
                  <p>Show remaining time, show a helpline number, explain why. Never a silent failure.</p>
                </div>
              </div>
            </section>
          </div>
          <Sidebar active={active} />
        </div>
      </main>

      <SiteFooter />
      <Toasts items={toasts} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
