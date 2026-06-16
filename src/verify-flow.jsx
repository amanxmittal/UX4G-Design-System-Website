/* global React, window */
/* UX4G Verify Flow — all screens (email, OTP, success, portal x3, solution x3, final).
   Plus the top-level FlowController state machine. */
(function () {
const { useState, useEffect, useRef, useMemo } = React;

const {
  VfyIcon, VfyModal, VfyStepBar,
  VfyField, VfyInput, VfyTextarea,
  VfySelect, VfyOtp, VfyConsent,
  GOV_EMAIL_RE, GOV_URL_RE,
} = window;

const D = window.VFY_DATA;

/* ──────────────────────────────────────────────────────────
   Step E1 — Email entry
   ────────────────────────────────────────────────────────── */
function EmailStep({ value, onChange, onSubmit, forceError }) {
  const [touched, setTouched] = useState(false);
  const showErr = (forceError || touched) && value.length > 0 && !GOV_EMAIL_RE.test(value);
  const canSubmit = GOV_EMAIL_RE.test(value);

  return (
    <>
      <div className="vfy-body">
        <h2 className="vfy-h">Verify your government email</h2>
        <p className="vfy-sub">
          Enter your government email address to continue. We'll send you a verification code.
        </p>
        <VfyField
          label="Government email address"
          required
          error={showErr ? "Only .gov.in email addresses are accepted" : null}
          hint={!showErr ? <span style={{ color: "var(--gray-500)" }}>Must end in <strong style={{ color: "var(--gray-700)", fontWeight: 600 }}>.gov.in</strong></span> : null}>
          <div className={"ux4g-input-container ux4g-input-md vfy-input-wrap" + (showErr ? " ux4g-input-error" : "") + (value ? " ux4g-has-value" : "")}>
            <div className="ux4g-input">
              <input
                type="email"
                autoFocus
                className="ux4g-input-input"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onBlur={() => setTouched(true)}
                placeholder="yourname@department.gov.in"
                onKeyDown={(e) => { if (e.key === "Enter" && canSubmit) onSubmit(); }}
              />
            </div>
          </div>
        </VfyField>
      </div>
      <div className="vfy-foot">
        <button type="button"
          className="ux4g-btn ux4g-btn-primary ux4g-btn-lg vfy-btn-full"
          disabled={!canSubmit}
          onClick={onSubmit}>
          Send verification code {VfyIcon.arrowRight}
        </button>
        <p className="vfy-helper">
          We'll only use this email to verify your identity and follow up on your submission.
        </p>
      </div>
    </>
  );
}

/* ──────────────────────────────────────────────────────────
   Step E2 — OTP entry
   ────────────────────────────────────────────────────────── */
function fmtTimer(s) {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

function OtpStep({ email, onSubmit, onChangeEmail, onResend, attemptsLeft, errored, expired }) {
  const [code, setCode] = useState("");
  const [timer, setTimer] = useState(600);          // 10:00
  const [resendCd, setResendCd] = useState(30);     // resend disabled for 30s
  const [shake, setShake] = useState(false);

  useEffect(() => { setCode(""); }, [errored, expired]);
  useEffect(() => {
    if (errored) { setShake(true); const t = setTimeout(() => setShake(false), 400); return () => clearTimeout(t); }
  }, [errored]);

  useEffect(() => {
    if (expired) return;
    const id = setInterval(() => setTimer((t) => Math.max(0, t - 1)), 1000);
    return () => clearInterval(id);
  }, [expired]);

  useEffect(() => {
    if (resendCd <= 0) return;
    const id = setInterval(() => setResendCd((t) => Math.max(0, t - 1)), 1000);
    return () => clearInterval(id);
  }, [resendCd]);

  const timerHit0 = timer === 0;
  const showExpired = expired || timerHit0;
  const canSubmit = code.length === 6 && !showExpired;
  const warn = timer < 60 && !showExpired;

  return (
    <>
      <div className="vfy-body">
        <button type="button" className="vfy-back" onClick={onChangeEmail}>
          {VfyIcon.arrowLeft} Change email address
        </button>
        <h2 className="vfy-h" style={{ marginTop: 10 }}>Enter the verification code</h2>
        <p className="vfy-sub">
          We've sent a 6-digit code to <strong>{email}</strong>. Enter it below to continue.
        </p>

        {showExpired ? (
          <div className="vfy-otp-expired">
            <span className="warn">!</span>
            <span>Code expired. Codes are valid for 10 minutes.</span>
            <span className="resend-link" onClick={() => { onResend(); setTimer(600); setResendCd(30); }}>
              Resend code →
            </span>
          </div>
        ) : (
          <div className="vfy-otp-info">
            <span className={"timer" + (warn ? " warn" : "")}>
              <span className="clock" aria-hidden="true"></span>
              Code expires in {fmtTimer(timer)}
            </span>
          </div>
        )}

        <VfyOtp value={code} onChange={setCode} error={errored || shake} success={false} />

        {errored && (
          <div className="vfy-err-msg" style={{ marginTop: -8, marginBottom: 14 }}>
            {VfyIcon.alert}
            Incorrect code. {attemptsLeft} attempt{attemptsLeft === 1 ? "" : "s"} remaining.
          </div>
        )}

        {!showExpired && (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 4 }}>
            <span style={{ fontSize: 13, color: "var(--gray-500)" }}>
              Didn't get the code?
            </span>
            <button type="button"
              className={"vfy-resend" + (resendCd > 0 ? " disabled" : "")}
              onClick={() => { if (resendCd === 0) { onResend(); setResendCd(30); setTimer(600); } }}>
              {resendCd > 0
                ? <>Resend code <span className="countdown">in {resendCd}s</span></>
                : <>Resend code</>}
            </button>
          </div>
        )}
      </div>

      <div className="vfy-foot">
        <button type="button"
          className="ux4g-btn ux4g-btn-primary ux4g-btn-lg vfy-btn-full"
          disabled={!canSubmit}
          onClick={() => onSubmit(code)}>
          Verify and continue {VfyIcon.arrowRight}
        </button>
      </div>
    </>
  );
}

/* ──────────────────────────────────────────────────────────
   Success flash — 1.5s
   ────────────────────────────────────────────────────────── */
function SuccessFlash({ email }) {
  return (
    <div className="vfy-success-flash">
      <div className="vfy-success-check">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <path d="m5 12 5 5L19 8"/>
        </svg>
      </div>
      <h3>Email verified</h3>
      <p><strong>{email}</strong></p>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
   Portal flow — Step 1: About the portal
   ────────────────────────────────────────────────────────── */
function PortalStep1({ data, set, onNext }) {
  const [touched, setTouched] = useState({});
  const t = (k) => setTouched((x) => ({ ...x, [k]: true }));

  const urlErr = (touched.portalUrl && data.portalUrl && !GOV_URL_RE.test(data.portalUrl))
    ? "Please enter a valid government website URL"
    : null;
  const descLen = data.description.length;

  const canNext =
    data.portalName.trim().length > 0 &&
    GOV_URL_RE.test(data.portalUrl) &&
    data.description.trim().length > 0 &&
    descLen <= 200;

  return (
    <>
      <VfyStepBar step={1} />
      <div className="vfy-body no-pad-top">
        <h2 className="vfy-h" style={{ marginTop: 18 }}>Tell us about your portal</h2>
        <p className="vfy-sub">A few basics so reviewers know what they're looking at.</p>

        <VfyField label="Portal name" required>
          <VfyInput value={data.portalName}
            onChange={(v) => set({ portalName: v })}
            placeholder="e.g. PM Kisan Portal" />
        </VfyField>

        <VfyField label="Website URL" required
          error={urlErr}
          hint={!urlErr ? "Must start with https and end in .gov.in, .nic.in, or .mil.in" : null}>
          <div className={"ux4g-input-container ux4g-input-md vfy-input-wrap" + (urlErr ? " ux4g-input-error" : "") + (data.portalUrl ? " ux4g-has-value" : "")}>
            <div className="ux4g-input">
              <input type="url"
                className="ux4g-input-input"
                value={data.portalUrl}
                onChange={(e) => set({ portalUrl: e.target.value })}
                onBlur={() => t("portalUrl")}
                placeholder="https://yourportal.gov.in" />
            </div>
          </div>
        </VfyField>

        <VfyField label="What does this portal do?" required
          counter={{ value: descLen, max: 200, warn: descLen > 170, over: descLen > 200 }}>
          <VfyTextarea value={data.description}
            onChange={(v) => set({ description: v })}
            placeholder="Describe the portal's purpose in 1–2 lines."
            rows={3} />
        </VfyField>
      </div>
      <div className="vfy-foot">
        <button type="button" className="ux4g-btn ux4g-btn-primary ux4g-btn-lg vfy-btn-full"
          disabled={!canNext} onClick={onNext}>
          Next {VfyIcon.arrowRight}
        </button>
      </div>
    </>
  );
}

/* ──────────────────────────────────────────────────────────
   Portal flow — Step 2: About the organisation
   ────────────────────────────────────────────────────────── */
function PortalStep2({ data, set, onBack, onNext }) {
  const level = data.govLevel;
  const showState = level === "State Government" || level === "Union Territory Administration";
  const showMinistry = level === "Central Government";

  const canNext = Boolean(
    level &&
    data.orgType &&
    data.websiteType &&
    (!showState || data.stateUt) &&
    (!showMinistry || data.ministry)
  );

  return (
    <>
      <VfyStepBar step={2} />
      <div className="vfy-body no-pad-top">
        <h2 className="vfy-h" style={{ marginTop: 18 }}>About your organisation</h2>
        <p className="vfy-sub">So we can attribute and group this portal correctly in the showcase.</p>

        <VfyField label="Level of government" required>
          <VfySelect value={level}
            onChange={(v) => set({ govLevel: v, stateUt: "", ministry: "" })}
            options={D.GOV_LEVELS}
            placeholder="Select level" />
        </VfyField>

        {showState && (
          <VfyField label={level === "State Government" ? "State" : "Union Territory"} required>
            <VfySelect value={data.stateUt}
              onChange={(v) => set({ stateUt: v })}
              options={level === "State Government" ? D.STATES_AND_UTS.filter((s) => !D.ONLY_UTS.includes(s)) : D.ONLY_UTS}
              placeholder={level === "State Government" ? "Search states" : "Search UTs"}
              searchable />
          </VfyField>
        )}

        {showMinistry && (
          <VfyField label="Ministry" required>
            <VfySelect value={data.ministry}
              onChange={(v) => set({ ministry: v })}
              options={D.UNION_MINISTRIES}
              placeholder="Search ministries"
              searchable />
          </VfyField>
        )}

        <VfyField label="Type of organisation" required>
          <VfySelect value={data.orgType}
            onChange={(v) => set({ orgType: v })}
            options={D.ORG_TYPES}
            placeholder="Select organisation type"
            searchable />
        </VfyField>

        <VfyField label="What kind of website is this?" required
          hint="Following GIGW 3.0 vocabulary">
          <VfySelect value={data.websiteType}
            onChange={(v) => set({ websiteType: v })}
            options={D.WEBSITE_TYPES}
            placeholder="Select website type" />
        </VfyField>

        <p className="vfy-helper" style={{ marginTop: 12, padding: "12px 14px", background: "var(--gray-50)", borderRadius: 10, border: "1px solid var(--gray-150)" }}>
          We will prepare the thumbnail for the showcase ourselves — you don't need to submit a screenshot.
        </p>
      </div>
      <div className="vfy-foot">
        <div className="vfy-foot-row">
          <button type="button" className="ux4g-btn ux4g-btn-text-primary ux4g-btn-md vfy-btn-ghost" onClick={onBack}>
            {VfyIcon.arrowLeft} Back
          </button>
          <button type="button" className="ux4g-btn ux4g-btn-primary ux4g-btn-md" disabled={!canNext} onClick={onNext}>
            Next {VfyIcon.arrowRight}
          </button>
        </div>
      </div>
    </>
  );
}

/* ──────────────────────────────────────────────────────────
   Portal flow — Step 3: Review
   ────────────────────────────────────────────────────────── */
function PortalReview({ data, email, onJump, onBack, onSubmit }) {
  const [agreed, setAgreed] = useState(false);

  return (
    <>
      <VfyStepBar step={3} />
      <div className="vfy-body no-pad-top">
        <h2 className="vfy-h" style={{ marginTop: 18 }}>Review your submission</h2>
        <p className="vfy-sub">Check the details below before submitting for review.</p>

        <div className="vfy-review">
          <div className="vfy-review-card">
            <div className="vfy-review-head">
              <span className="vfy-review-title">About the portal</span>
              <button type="button" className="vfy-review-edit" onClick={() => onJump(1)}>
                {VfyIcon.edit} Edit
              </button>
            </div>
            <div className="vfy-review-rows">
              <div className="vfy-review-row">
                <span className="k">Portal name</span>
                <span className="v">{data.portalName || <span className="empty">Not provided</span>}</span>
              </div>
              <div className="vfy-review-row">
                <span className="k">Website URL</span>
                <span className="v url">{data.portalUrl || <span className="empty">Not provided</span>}</span>
              </div>
              <div className="vfy-review-row">
                <span className="k">Description</span>
                <span className="v">{data.description || <span className="empty">Not provided</span>}</span>
              </div>
            </div>
          </div>

          <div className="vfy-review-card">
            <div className="vfy-review-head">
              <span className="vfy-review-title">About the organisation</span>
              <button type="button" className="vfy-review-edit" onClick={() => onJump(2)}>
                {VfyIcon.edit} Edit
              </button>
            </div>
            <div className="vfy-review-rows">
              <div className="vfy-review-row">
                <span className="k">Level of government</span>
                <span className="v">{data.govLevel || <span className="empty">Not provided</span>}</span>
              </div>
              {data.stateUt && (
                <div className="vfy-review-row">
                  <span className="k">State / UT</span>
                  <span className="v">{data.stateUt}</span>
                </div>
              )}
              {data.ministry && (
                <div className="vfy-review-row">
                  <span className="k">Ministry</span>
                  <span className="v">{data.ministry}</span>
                </div>
              )}
              <div className="vfy-review-row">
                <span className="k">Type of organisation</span>
                <span className="v">{data.orgType || <span className="empty">Not provided</span>}</span>
              </div>
              <div className="vfy-review-row">
                <span className="k">Type of website</span>
                <span className="v"><span className="pill">{data.websiteType}</span></span>
              </div>
            </div>
          </div>

          <div className="vfy-review-card">
            <div className="vfy-review-head">
              <span className="vfy-review-title">Verified contact</span>
            </div>
            <div className="vfy-review-rows">
              <div className="vfy-review-row">
                <span className="k">
                  <span style={{ display: "inline-flex", gap: 6, alignItems: "center", color: "var(--success)" }}>
                    {React.cloneElement(VfyIcon.shield, { style: { width: 13, height: 13 } })}
                    Verified email
                  </span>
                </span>
                <span className="v url">{email}</span>
              </div>
            </div>
          </div>
        </div>

        <VfyConsent checked={agreed} onChange={setAgreed}>
          I confirm that I am an authorised representative of this portal and that this portal
          is built using the UX4G design system.
        </VfyConsent>
      </div>
      <div className="vfy-foot">
        <button type="button"
          className="ux4g-btn ux4g-btn-primary ux4g-btn-lg vfy-btn-full"
          disabled={!agreed} onClick={onSubmit}>
          Submit for review
        </button>
        <p className="vfy-helper">
          After submission, we'll send a confirmation to <strong>{email}</strong>. If we list your
          portal, we'll let you know. We may also reach out if we need more details.
        </p>
        <button type="button" className="vfy-back" style={{ alignSelf: "center", marginTop: 4 }} onClick={onBack}>
          {VfyIcon.arrowLeft} Back to step 2
        </button>
      </div>
    </>
  );
}

/* ──────────────────────────────────────────────────────────
   Solution flow — Step 1: About the solution
   ────────────────────────────────────────────────────────── */
function SolutionStep1({ data, set, onNext }) {
  const tagLen = data.tagline.length;
  const descLen = data.description.length;
  const canNext =
    data.solutionName.trim().length > 0 &&
    data.tagline.trim().length > 0 &&
    tagLen <= 140 &&
    data.description.trim().length > 0 &&
    descLen <= 400 &&
    data.solutionType &&
    data.team.trim().length > 0;

  return (
    <>
      <VfyStepBar step={1} total={4} />
      <div className="vfy-body no-pad-top">
        <h2 className="vfy-h" style={{ marginTop: 18 }}>Tell us about your solution</h2>
        <p className="vfy-sub">A few details so reviewers know what they're looking at.</p>

        <VfyField label="Solution name" required>
          <VfyInput value={data.solutionName}
            onChange={(v) => set({ solutionName: v })}
            placeholder="e.g. Grievance Status Timeline" />
        </VfyField>

        <VfyField label="Short tagline" required
          hint="One line summary shown on the Made by You card"
          counter={{ value: tagLen, max: 140, warn: tagLen > 120, over: tagLen > 140 }}>
          <VfyInput value={data.tagline}
            onChange={(v) => set({ tagline: v })}
            placeholder="A 4-step eligibility checker for NSAP pensions, with inline rule explanations." />
        </VfyField>

        <VfyField label="Description" required
          hint="Lede on the solution page — what it is, who built it, where it has run"
          counter={{ value: descLen, max: 400, warn: descLen > 340, over: descLen > 400 }}>
          <VfyTextarea value={data.description}
            onChange={(v) => set({ description: v })}
            placeholder="Describe what the solution does, who built it, and where it has been used."
            rows={4} />
        </VfyField>

        <VfyField label="What kind of solution is this?" required>
          <VfySelect value={data.solutionType}
            onChange={(v) => set({ solutionType: v })}
            options={D.SOLUTION_TYPES}
            placeholder="Component, pattern or flow" />
        </VfyField>

        <VfyField label="Ministry / Department / Team" required>
          <VfyInput value={data.team}
            onChange={(v) => set({ team: v })}
            placeholder="e.g. Ministry of Agriculture, UP State IT Team" />
        </VfyField>
      </div>
      <div className="vfy-foot">
        <button type="button" className="ux4g-btn ux4g-btn-primary ux4g-btn-lg vfy-btn-full"
          disabled={!canNext} onClick={onNext}>
          Next {VfyIcon.arrowRight}
        </button>
      </div>
    </>
  );
}

/* ──────────────────────────────────────────────────────────
   Solution flow — Step 2: Share your work (toggle tiles)
   ────────────────────────────────────────────────────────── */
function ShareTile({ on, onToggle, icon, name, hint, children }) {
  return (
    <div className={"vfy-tile" + (on ? " on" : "")}>
      <div className="vfy-tile-head" onClick={onToggle}>
        <span className="vfy-tile-icon">{icon}</span>
        <span className="vfy-tile-meta">
          <span className="vfy-tile-name">{name}</span>
          <span className="vfy-tile-hint">{hint}</span>
        </span>
        <span className="vfy-tile-check">{VfyIcon.check}</span>
      </div>
      <div className="vfy-tile-body">
        <div className="vfy-tile-body-inner">{children}</div>
      </div>
    </div>
  );
}

function SolutionStep2({ data, set, onBack, onNext }) {
  const noteLen = data.notes.length;
  const has = (k) => data.share[k].on;
  const filled = (k) => data.share[k].on && data.share[k].url.trim().length > 0;
  const anySelected = has("figma") || has("github") || has("doc");
  const anyValid = filled("figma") || filled("github") || filled("doc");
  const [touched, setTouched] = useState(false);
  const showErr = touched && (!anySelected || !anyValid);

  const setShare = (k, patch) => set({
    share: { ...data.share, [k]: { ...data.share[k], ...patch } },
  });

  const goNext = () => {
    setTouched(true);
    if (anySelected && anyValid && noteLen <= 300) onNext();
  };

  return (
    <>
      <VfyStepBar step={2} total={4} />
      <div className="vfy-body no-pad-top">
        <h2 className="vfy-h" style={{ marginTop: 18 }}>Share what you've built</h2>
        <p className="vfy-sub">
          Select everything you're sharing. You must provide at least one link.
        </p>

        <div className="vfy-tiles">
          <ShareTile
            on={has("figma")}
            onToggle={() => setShare("figma", { on: !has("figma") })}
            icon={VfyIcon.figma}
            name="Figma file"
            hint="Design source — frames, components, prototypes">
            <VfyField label="Figma file link" required>
              <div className={"ux4g-input-container ux4g-input-md vfy-input-wrap" + (data.share.figma.url ? " ux4g-has-value" : "")}>
                <div className="ux4g-input">
                  <input type="url"
                    className="ux4g-input-input"
                    placeholder="https://figma.com/file/..."
                    value={data.share.figma.url}
                    onChange={(e) => setShare("figma", { url: e.target.value })} />
                </div>
              </div>
            </VfyField>
            <span className="vfy-tile-note">
              {VfyIcon.info}
              Make sure the link is set to "Anyone with link can view".
            </span>
          </ShareTile>

          <ShareTile
            on={has("github")}
            onToggle={() => setShare("github", { on: !has("github") })}
            icon={VfyIcon.github}
            name="GitHub repository"
            hint="Code — components, examples, README">
            <VfyField label="Repository URL" required>
              <div className={"ux4g-input-container ux4g-input-md vfy-input-wrap" + (data.share.github.url ? " ux4g-has-value" : "")}>
                <div className="ux4g-input">
                  <input type="url"
                    className="ux4g-input-input"
                    placeholder="https://github.com/..."
                    value={data.share.github.url}
                    onChange={(e) => setShare("github", { url: e.target.value })} />
                </div>
              </div>
            </VfyField>
          </ShareTile>

          <ShareTile
            on={has("doc")}
            onToggle={() => setShare("doc", { on: !has("doc") })}
            icon={VfyIcon.doc}
            name="Document"
            hint="Usage guide, decisions log, research notes">
            <VfyField label="Document link" required>
              <div className={"ux4g-input-container ux4g-input-md vfy-input-wrap" + (data.share.doc.url ? " ux4g-has-value" : "")}>
                <div className="ux4g-input">
                  <input type="url"
                    className="ux4g-input-input"
                    placeholder="Link to PDF, Google Doc, or any accessible document"
                    value={data.share.doc.url}
                    onChange={(e) => setShare("doc", { url: e.target.value })} />
                </div>
              </div>
            </VfyField>
          </ShareTile>
        </div>

        {showErr && (
          <div className="vfy-err-msg" style={{ marginTop: -6, marginBottom: 16 }}>
            {VfyIcon.alert}
            Please share at least one link to your solution.
          </div>
        )}

        <VfyField label="Notes for the review team" optional
          counter={{ value: noteLen, max: 300, warn: noteLen > 260, over: noteLen > 300 }}>
          <VfyTextarea value={data.notes}
            onChange={(v) => set({ notes: v })}
            placeholder="Anything else the review team should know — context, constraints, known limitations."
            rows={3} />
        </VfyField>
      </div>
      <div className="vfy-foot">
        <div className="vfy-foot-row">
          <button type="button" className="ux4g-btn ux4g-btn-text-primary ux4g-btn-md vfy-btn-ghost" onClick={onBack}>
            {VfyIcon.arrowLeft} Back
          </button>
          <button type="button" className="ux4g-btn ux4g-btn-primary ux4g-btn-md" onClick={goNext}>
            Next {VfyIcon.arrowRight}
          </button>
        </div>
      </div>
    </>
  );
}

/* ──────────────────────────────────────────────────────────
   Solution flow — Step 3: Page content (previews + when-to-use)
   ────────────────────────────────────────────────────────── */
function SolutionStep3({ data, set, onBack, onNext }) {
  const previews = data.previews || [];
  const goodFor  = data.goodFor  || [];
  const notFor   = data.notFor   || [];

  /* Previews */
  const onFilesPicked = (e) => {
    const files = Array.from(e.target.files || []).slice(0, 6 - previews.length);
    const added = files.map((f) => ({
      url: URL.createObjectURL(f),
      name: f.name,
      caption: "",
    }));
    if (added.length) set({ previews: [...previews, ...added] });
    e.target.value = "";
  };
  const setPreviewCaption = (i, caption) => {
    const next = previews.map((p, k) => (k === i ? { ...p, caption } : p));
    set({ previews: next });
  };
  const removePreview = (i) => {
    const next = previews.filter((_, k) => k !== i);
    set({ previews: next });
  };

  /* Repeaters */
  const updateRow = (key, i, patch) => {
    const arr = data[key].map((row, k) => (k === i ? { ...row, ...patch } : row));
    set({ [key]: arr });
  };
  const addRow = (key, max) => {
    if (data[key].length >= max) return;
    set({ [key]: [...data[key], { strong: "", body: "" }] });
  };
  const removeRow = (key, i, min) => {
    if (data[key].length <= min) return;
    set({ [key]: data[key].filter((_, k) => k !== i) });
  };

  /* Validation */
  const previewsValid = previews.length >= 1 && previews.length <= 6;
  const goodForValid =
    goodFor.length >= 2 && goodFor.length <= 3 &&
    goodFor.every((r) => r.strong.trim() && r.body.trim()
      && r.strong.length <= 60 && r.body.length <= 160);
  const notForValid =
    notFor.length >= 1 && notFor.length <= 2 &&
    notFor.every((r) => r.strong.trim() && r.body.trim()
      && r.strong.length <= 60 && r.body.length <= 160);
  const canNext = previewsValid && goodForValid && notForValid;

  return (
    <>
      <VfyStepBar step={3} total={4} />
      <div className="vfy-body no-pad-top">
        <h2 className="vfy-h" style={{ marginTop: 18 }}>Help others adopt it</h2>
        <p className="vfy-sub">
          What people will see on your solution page — previews of the work and short guidance on when to reach for it.
        </p>

        {/* PREVIEWS */}
        <div className="vfy-section">
          <div className="vfy-section-head">
            <span className="vfy-section-title">Preview images</span>
            <span className="vfy-section-meta">
              {previews.length} of 6 · PNG or JPG up to 2 MB each
            </span>
          </div>

          {previews.length === 0 && (
            <label className="vfy-uploader" htmlFor="vfy-prev-input">
              <span className="vfy-uploader-ic" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="14" rx="2"/>
                  <circle cx="8.5" cy="9.5" r="1.5"/>
                  <path d="m21 14-5-5L7 18"/>
                </svg>
              </span>
              <span className="vfy-uploader-body">
                <span className="vfy-uploader-title">Add preview images</span>
                <span className="vfy-uploader-hint">
                  Drop in screens of the component or flow. For flows, add one image per screen.
                </span>
              </span>
              <span className="vfy-uploader-btn">Choose files</span>
              <input id="vfy-prev-input" type="file" accept="image/png,image/jpeg"
                multiple style={{ display: "none" }}
                onChange={onFilesPicked}/>
            </label>
          )}

          {previews.length > 0 && (
            <>
              <div className="vfy-preview-list">
                {previews.map((p, i) => (
                  <div className="vfy-preview-row" key={p.url}>
                    <div className="vfy-preview-thumb">
                      <img src={p.url} alt={p.name}/>
                    </div>
                    <div className="vfy-preview-fields">
                      <span className="vfy-preview-name" title={p.name}>{p.name}</span>
                      <div className={"ux4g-input-container ux4g-input-md vfy-input-wrap" + (p.caption ? " ux4g-has-value" : "")}>
                        <div className="ux4g-input">
                          <input type="text"
                            className="ux4g-input-input"
                            placeholder="Caption — what does this screen show?"
                            value={p.caption}
                            onChange={(e) => setPreviewCaption(i, e.target.value)}
                            maxLength={140} />
                        </div>
                      </div>
                    </div>
                    <button type="button" className="vfy-preview-remove"
                      aria-label={`Remove ${p.name}`}
                      onClick={() => removePreview(i)}>×</button>
                  </div>
                ))}
              </div>
              {previews.length < 6 && (
                <label className="vfy-uploader-more" htmlFor="vfy-prev-input-more">
                  + Add another image
                  <input id="vfy-prev-input-more" type="file" accept="image/png,image/jpeg"
                    multiple style={{ display: "none" }}
                    onChange={onFilesPicked}/>
                </label>
              )}
            </>
          )}
        </div>

        {/* GOOD FIT */}
        <div className="vfy-section">
          <div className="vfy-section-head">
            <span className="vfy-section-title">Good fit for</span>
            <span className="vfy-section-meta">{goodFor.length} of 3 · Min 2</span>
          </div>
          <p className="vfy-section-hint">
            Where this solution belongs. Each point is a short title and one supporting sentence.
          </p>
          <div className="vfy-repeater">
            {goodFor.map((row, i) => (
              <VfyRepeaterRow key={i} index={i}
                row={row}
                onChange={(p) => updateRow("goodFor", i, p)}
                canRemove={goodFor.length > 2}
                onRemove={() => removeRow("goodFor", i, 2)}
                strongPlaceholder="e.g. Means-tested benefit schemes"
                bodyPlaceholder="One sentence on where this is the right choice." />
            ))}
            {goodFor.length < 3 && (
              <button type="button" className="vfy-repeater-add"
                onClick={() => addRow("goodFor", 3)}>
                + Add another fit
              </button>
            )}
          </div>
        </div>

        {/* NOT FOR */}
        <div className="vfy-section">
          <div className="vfy-section-head">
            <span className="vfy-section-title">Not designed for</span>
            <span className="vfy-section-meta">{notFor.length} of 2 · Min 1</span>
          </div>
          <p className="vfy-section-hint">
            Cases where teams should pick something else instead.
          </p>
          <div className="vfy-repeater">
            {notFor.map((row, i) => (
              <VfyRepeaterRow key={i} index={i}
                row={row}
                onChange={(p) => updateRow("notFor", i, p)}
                canRemove={notFor.length > 1}
                onRemove={() => removeRow("notFor", i, 1)}
                strongPlaceholder="e.g. Single-criterion eligibility"
                bodyPlaceholder="One sentence on why this isn't the right tool." />
            ))}
            {notFor.length < 2 && (
              <button type="button" className="vfy-repeater-add"
                onClick={() => addRow("notFor", 2)}>
                + Add another mismatch
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="vfy-foot">
        <div style={{ display: "flex", gap: 10, justifyContent: "space-between", width: "100%" }}>
          <button type="button" className="ux4g-btn ux4g-btn-text-primary ux4g-btn-md vfy-btn-ghost"
            onClick={onBack}>
            {VfyIcon.arrowLeft} Back
          </button>
          <button type="button" className="ux4g-btn ux4g-btn-primary ux4g-btn-md"
            disabled={!canNext} onClick={onNext}>
            Next {VfyIcon.arrowRight}
          </button>
        </div>
      </div>
    </>
  );
}

function VfyRepeaterRow({ index, row, onChange, canRemove, onRemove, strongPlaceholder, bodyPlaceholder }) {
  return (
    <div className="vfy-repeater-row">
      <div className="vfy-repeater-num">{String(index + 1).padStart(2, "0")}</div>
      <div className="vfy-repeater-fields">
        <div className={"ux4g-input-container ux4g-input-md vfy-input-wrap" + (row.strong ? " ux4g-has-value" : "")}>
          <div className="ux4g-input">
            <input type="text"
              className="ux4g-input-input"
              placeholder={strongPlaceholder}
              value={row.strong}
              maxLength={60}
              onChange={(e) => onChange({ strong: e.target.value })} />
          </div>
        </div>
        <div className={"ux4g-textarea-container ux4g-input-md vfy-textarea-wrap" + (row.body ? " ux4g-has-value" : "")}>
          <div className="ux4g-textarea">
            <textarea
              className="ux4g-textarea-input"
              placeholder={bodyPlaceholder}
              value={row.body}
              maxLength={160}
              rows={2}
              onChange={(e) => onChange({ body: e.target.value })} />
          </div>
        </div>
      </div>
      {canRemove && (
        <button type="button" className="vfy-repeater-remove"
          aria-label="Remove"
          onClick={onRemove}>×</button>
      )}
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
   Solution flow — Step 4: Review
   ────────────────────────────────────────────────────────── */
function SolutionReview({ data, email, onJump, onBack, onSubmit }) {
  const [agreed, setAgreed] = useState(false);
  const shareList = ["figma", "github", "doc"]
    .filter((k) => data.share[k].on && data.share[k].url.trim())
    .map((k) => ({ k, url: data.share[k].url, label: { figma: "Figma file", github: "GitHub repository", doc: "Document" }[k] }));

  return (
    <>
      <VfyStepBar step={4} total={4} />
      <div className="vfy-body no-pad-top">
        <h2 className="vfy-h" style={{ marginTop: 18 }}>Review your submission</h2>
        <p className="vfy-sub">Check the details below before submitting for review.</p>

        <div className="vfy-review">
          <div className="vfy-review-card">
            <div className="vfy-review-head">
              <span className="vfy-review-title">About the solution</span>
              <button type="button" className="vfy-review-edit" onClick={() => onJump(1)}>
                {VfyIcon.edit} Edit
              </button>
            </div>
            <div className="vfy-review-rows">
              <div className="vfy-review-row">
                <span className="k">Name</span>
                <span className="v">{data.solutionName}</span>
              </div>
              <div className="vfy-review-row">
                <span className="k">Type</span>
                <span className="v"><span className="pill">{data.solutionType}</span></span>
              </div>
              <div className="vfy-review-row">
                <span className="k">Team</span>
                <span className="v">{data.team}</span>
              </div>
              <div className="vfy-review-row">
                <span className="k">Tagline</span>
                <span className="v">{data.tagline}</span>
              </div>
              <div className="vfy-review-row">
                <span className="k">Description</span>
                <span className="v">{data.description}</span>
              </div>
            </div>
          </div>

          <div className="vfy-review-card">
            <div className="vfy-review-head">
              <span className="vfy-review-title">Shared materials</span>
              <button type="button" className="vfy-review-edit" onClick={() => onJump(2)}>
                {VfyIcon.edit} Edit
              </button>
            </div>
            <div className="vfy-review-rows">
              {shareList.map((s) => (
                <div className="vfy-review-row" key={s.k}>
                  <span className="k">{s.label}</span>
                  <span className="v url">{s.url}</span>
                </div>
              ))}
              {data.notes && (
                <div className="vfy-review-row">
                  <span className="k">Review notes</span>
                  <span className="v">{data.notes}</span>
                </div>
              )}
            </div>
          </div>

          <div className="vfy-review-card">
            <div className="vfy-review-head">
              <span className="vfy-review-title">Page content</span>
              <button type="button" className="vfy-review-edit" onClick={() => onJump(3)}>
                {VfyIcon.edit} Edit
              </button>
            </div>
            <div className="vfy-review-rows">
              <div className="vfy-review-row">
                <span className="k">Previews</span>
                <span className="v">
                  {(data.previews || []).length === 0 ? "—" : `${data.previews.length} image${data.previews.length === 1 ? "" : "s"}`}
                </span>
              </div>
              {(data.previews || []).length > 0 && (
                <div className="vfy-review-thumbs">
                  {data.previews.map((p, i) => (
                    <img key={i} src={p.url} alt={p.name} className="vfy-review-thumb"/>
                  ))}
                </div>
              )}
              <div className="vfy-review-row">
                <span className="k">Good fit for</span>
                <span className="v">
                  {(data.goodFor || []).map((g, i) => g.strong).filter(Boolean).join(" · ")}
                </span>
              </div>
              <div className="vfy-review-row">
                <span className="k">Not designed for</span>
                <span className="v">
                  {(data.notFor || []).map((n, i) => n.strong).filter(Boolean).join(" · ")}
                </span>
              </div>
            </div>
          </div>

          <div className="vfy-review-card">
            <div className="vfy-review-head">
              <span className="vfy-review-title">Verified contact</span>
            </div>
            <div className="vfy-review-rows">
              <div className="vfy-review-row">
                <span className="k">
                  <span style={{ display: "inline-flex", gap: 6, alignItems: "center", color: "var(--success)" }}>
                    {React.cloneElement(VfyIcon.shield, { style: { width: 13, height: 13 } })}
                    Verified email
                  </span>
                </span>
                <span className="v url">{email}</span>
              </div>
            </div>
          </div>
        </div>

        <VfyConsent checked={agreed} onChange={setAgreed}>
          I confirm this solution was built by my team and that I have the right to share it publicly.
        </VfyConsent>
      </div>
      <div className="vfy-foot">
        <button type="button"
          className="ux4g-btn ux4g-btn-primary ux4g-btn-lg vfy-btn-full"
          disabled={!agreed} onClick={onSubmit}>
          Submit for review
        </button>
        <p className="vfy-helper">
          After submission, we'll send a confirmation to <strong>{email}</strong>. Our team will
          review your work and contact you if we need anything before listing it.
        </p>
        <button type="button" className="vfy-back" style={{ alignSelf: "center", marginTop: 4 }} onClick={onBack}>
          {VfyIcon.arrowLeft} Back to step 3
        </button>
      </div>
    </>
  );
}

/* ──────────────────────────────────────────────────────────
   Final — Submitted
   ────────────────────────────────────────────────────────── */
function SubmittedScreen({ source, email, onClose }) {
  const ticket = useMemo(() => {
    const tag = source === "portal" ? "PRT" : "SOL";
    const n = Math.floor(1000 + Math.random() * 9000);
    return `UX4G-${tag}-${n}`;
  }, [source]);

  return (
    <div className="vfy-final">
      <div className="vfy-success-check">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <path d="m5 12 5 5L19 8"/>
        </svg>
      </div>
      <h2>Submission received</h2>
      <p>
        {source === "portal"
          ? <>Thanks for submitting your portal. We've sent a confirmation to <strong>{email}</strong>. Our team will review it and get back to you.</>
          : <>Thanks for sharing your work. We've sent a confirmation to <strong>{email}</strong>. If your solution is listed on Made by You, we'll let you know.</>}
      </p>
      <button type="button" className="ux4g-btn ux4g-btn-primary ux4g-btn-md" onClick={onClose}>
        Back to Made by You
      </button>
      <div className="vfy-final-meta">
        <span>Reference</span>
        <span className="ticket">{ticket}</span>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
   FlowController — runs the whole state machine
   ────────────────────────────────────────────────────────── */
const DEFAULT_PORTAL = {
  portalName: "", portalUrl: "", description: "",
  govLevel: "", stateUt: "", ministry: "", orgType: "", websiteType: "",
};
const DEFAULT_SOLUTION = {
  solutionName: "", tagline: "", description: "", solutionType: "", team: "",
  share: { figma: { on: false, url: "" }, github: { on: false, url: "" }, doc: { on: false, url: "" } },
  previews: [],   // [{ url, name, caption }]
  goodFor: [{ strong: "", body: "" }, { strong: "", body: "" }],
  notFor:  [{ strong: "", body: "" }],
  notes: "",
};

function VerifyFlow({ source, onClose, initialScreen = "email", seed }) {
  const [screen, setScreen] = useState(initialScreen);
  const [email, setEmail]   = useState(seed?.email || "");
  const [otpAttempts, setOtpAttempts] = useState(3);
  const [otpErr, setOtpErr] = useState(false);
  const [otpExpired, setOtpExpired] = useState(false);
  const [portal, setPortal] = useState({ ...DEFAULT_PORTAL, ...(seed?.portal || {}) });
  const [solution, setSolution] = useState({ ...DEFAULT_SOLUTION, ...(seed?.solution || {}) });
  const [formStep, setFormStep] = useState(seed?.formStep || 1);

  // success flash auto-advances
  useEffect(() => {
    if (screen !== "success") return;
    const t = setTimeout(() => setScreen("form"), 1500);
    return () => clearTimeout(t);
  }, [screen]);

  const verifyCode = (code) => {
    if (code === "123456") {
      setOtpErr(false);
      setScreen("success");
    } else {
      setOtpAttempts((n) => Math.max(0, n - 1));
      setOtpErr(true);
    }
  };

  return (
    <VfyModal source={source} onClose={onClose} hideClose={screen === "success"} wide={source === "solution" && screen === "form"}>
      {screen === "email" && (
        <EmailStep value={email} onChange={setEmail} onSubmit={() => {
          setScreen("otp"); setOtpErr(false); setOtpExpired(false); setOtpAttempts(3);
        }} />
      )}
      {screen === "otp" && (
        <OtpStep email={email}
          attemptsLeft={otpAttempts}
          errored={otpErr}
          expired={otpExpired}
          onChangeEmail={() => { setScreen("email"); setOtpErr(false); }}
          onResend={() => { setOtpErr(false); setOtpExpired(false); setOtpAttempts(3); }}
          onSubmit={verifyCode}
        />
      )}
      {screen === "success" && <SuccessFlash email={email} />}

      {screen === "form" && source === "portal" && formStep === 1 && (
        <PortalStep1 data={portal} set={(p) => setPortal((x) => ({ ...x, ...p }))} onNext={() => setFormStep(2)} />
      )}
      {screen === "form" && source === "portal" && formStep === 2 && (
        <PortalStep2 data={portal} set={(p) => setPortal((x) => ({ ...x, ...p }))}
          onBack={() => setFormStep(1)} onNext={() => setFormStep(3)} />
      )}
      {screen === "form" && source === "portal" && formStep === 3 && (
        <PortalReview data={portal} email={email}
          onJump={setFormStep}
          onBack={() => setFormStep(2)}
          onSubmit={() => setScreen("submitted")} />
      )}

      {screen === "form" && source === "solution" && formStep === 1 && (
        <SolutionStep1 data={solution} set={(p) => setSolution((x) => ({ ...x, ...p }))} onNext={() => setFormStep(2)} />
      )}
      {screen === "form" && source === "solution" && formStep === 2 && (
        <SolutionStep2 data={solution} set={(p) => setSolution((x) => ({ ...x, ...p }))}
          onBack={() => setFormStep(1)} onNext={() => setFormStep(3)} />
      )}
      {screen === "form" && source === "solution" && formStep === 3 && (
        <SolutionStep3 data={solution} set={(p) => setSolution((x) => ({ ...x, ...p }))}
          onBack={() => setFormStep(2)} onNext={() => setFormStep(4)} />
      )}
      {screen === "form" && source === "solution" && formStep === 4 && (
        <SolutionReview data={solution} email={email}
          onJump={setFormStep}
          onBack={() => setFormStep(3)}
          onSubmit={() => setScreen("submitted")} />
      )}

      {screen === "submitted" && (
        <SubmittedScreen source={source} email={email} onClose={onClose} />
      )}
    </VfyModal>
  );
}

Object.assign(window, {
  VerifyFlow,
  EmailStep, OtpStep, SuccessFlash,
  PortalStep1, PortalStep2, PortalReview,
  SolutionStep1, SolutionStep2, SolutionStep3, SolutionReview,
  SubmittedScreen,
});
})();
