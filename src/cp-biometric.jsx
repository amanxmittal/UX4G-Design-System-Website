/* global React */
(function () {
  function B({ state = "ready" }) {
    return (
      <div style={{ width: 220, height: 220, position: "relative", borderRadius: 12, background: state === "ready" ? "var(--ux4g-bg-neutral-soft)" : state === "scanning" ? "var(--ux4g-bg-primary-subtle)" : state === "success" ? "var(--ux4g-bg-success-subtle)" : "var(--ux4g-bg-error-subtle)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ position: "absolute", top: 16, left: 16, width: 20, height: 20, borderTop: "3px solid var(--ux4g-text-primary-default)", borderLeft: "3px solid var(--ux4g-text-primary-default)" }}></span>
        <span style={{ position: "absolute", top: 16, right: 16, width: 20, height: 20, borderTop: "3px solid var(--ux4g-text-primary-default)", borderRight: "3px solid var(--ux4g-text-primary-default)" }}></span>
        <span style={{ position: "absolute", bottom: 16, left: 16, width: 20, height: 20, borderBottom: "3px solid var(--ux4g-text-primary-default)", borderLeft: "3px solid var(--ux4g-text-primary-default)" }}></span>
        <span style={{ position: "absolute", bottom: 16, right: 16, width: 20, height: 20, borderBottom: "3px solid var(--ux4g-text-primary-default)", borderRight: "3px solid var(--ux4g-text-primary-default)" }}></span>
        <span className="ux4g-icon-outlined" style={{ fontSize: 56, color: state === "success" ? "var(--ux4g-text-success-default)" : state === "error" ? "var(--ux4g-text-error-default)" : "var(--ux4g-text-primary-default)" }}>{state === "success" ? "check_circle" : state === "error" ? "error" : "fingerprint"}</span>
      </div>
    );
  }
  function Hero() {
    return (
      <React.Fragment>
        <div className="hb-grain"></div>
        <div className="hb-soft-blur"></div>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 3, width: 220, height: 220, borderRadius: 24, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 24px 48px -12px rgba(48,28,125,0.5)" }}>
          {/* corners */}
          {["tl","tr","bl","br"].map(c => (
            <span key={c} style={{
              position: "absolute", width: 28, height: 28,
              borderColor: "var(--amber)", borderStyle: "solid",
              borderWidth: c === "tl" ? "4px 0 0 4px" : c === "tr" ? "4px 4px 0 0" : c === "bl" ? "0 0 4px 4px" : "0 4px 4px 0",
              top: c.startsWith("t") ? 16 : "auto",
              bottom: c.startsWith("b") ? 16 : "auto",
              left: c.endsWith("l") ? 16 : "auto",
              right: c.endsWith("r") ? 16 : "auto",
              borderRadius: c === "tl" ? "6px 0 0 0" : c === "tr" ? "0 6px 0 0" : c === "bl" ? "0 0 0 6px" : "0 0 6px 0",
            }}></span>
          ))}
          <svg width="80" height="96" viewBox="0 0 80 96" fill="none" aria-hidden="true">
            <path d="M40 8c-16 0-28 12-28 28v18c0 9 2 18 6 26" stroke="var(--primary-dark)" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
            <path d="M40 20c-10 0-18 8-18 18v18c0 7 1 14 4 20" stroke="var(--primary-dark)" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
            <path d="M40 32c-6 0-10 4-10 10v14c0 6 1 12 3 16" stroke="var(--amber)" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
            <path d="M40 44v18" stroke="var(--primary-dark)" strokeWidth="3.5" strokeLinecap="round"/>
          </svg>
        </div>
      </React.Fragment>
    );
  }
  const config = {
    name: "Biometric Capture", navName: "Biometric Capture", group: "Capture & Verification",
    desc: "Fingerprint and face capture frame with retry, quality check, and timeout. Used in Aadhaar-linked verification flows at service centres.",
    bannerVariant: "card", hero: Hero,
    anatomy: [
      { n: 1, label: "Capture frame", token: "ux4g-bg-neutral-soft" },
      { n: 2, label: "Corner brackets", token: "ux4g-border-color-primary-strong" },
      { n: 3, label: "Glyph (fingerprint / face)", token: "ux4g-icon-outlined" },
      { n: 4, label: "Status state", token: "ready / scanning / success / error" },
      { n: 5, label: "Instruction text", token: "ux4g-body-s-default" },
      { n: 6, label: "Retry action", token: "ux4g-btn-primary" },
    ],
    properties: [
      { label: "State", desc: "Ready (corners + glyph). Scanning (pulsing border). Success (green + check). Error (red + retry hint).", demos: [
        { label: "Ready", node: <B state="ready" /> },
        { label: "Scanning", node: <B state="scanning" /> },
        { label: "Success", node: <B state="success" /> },
        { label: "Error", node: <B state="error" /> },
      ] },
    ],
    scenarios: [
      { title: "Fingerprint capture", desc: "Citizen places thumb on biometric reader. Frame pulses while scanning; turns green on success.", stage: (<div style={{ textAlign: "center" }}><B state="ready" /><div style={{ fontSize: 13, marginTop: 12 }}>Place your thumb on the reader</div></div>) },
      { title: "Face capture - selfie", desc: "Front camera frame with face-shape oval overlay. Real-time feedback on lighting and alignment.", stage: <B state="scanning" /> },
      { title: "Capture failed - retry", desc: "When biometric fails (smudged finger, bad lighting), surface error state with clear retry action.", stage: (<div style={{ textAlign: "center" }}><B state="error" /><div style={{ fontSize: 13, marginTop: 12, color: "var(--ux4g-text-error-default)" }}>Couldn't read - try again with a clean finger</div><button className="ux4g-btn-primary ux4g-btn-sm" style={{ marginTop: 12 }}>Retry</button></div>) },
      { title: "Success - move forward", desc: "On success, brief green state + check icon. Automatically proceeds to next step after 2s.", stage: (<div style={{ textAlign: "center" }}><B state="success" /><div style={{ fontSize: 13, marginTop: 12, color: "var(--ux4g-text-success-default)" }}>✓ Biometric captured</div></div>) },
    ],
    responsive: [
      { title: "Frame scales to viewport", desc: "Frame size capped at 320px on desktop, 220px on tablet, viewport width minus padding on mobile.", sample: <B /> },
      { title: "Camera permission prompt", desc: "On first use, browser asks for camera permission. Show fallback UI explaining why we need it.", sample: <B /> },
    ],
    practices: [
      { do: { stage: (<div style={{ textAlign: "center" }}><B state="error" /><div style={{ fontSize: 12, marginTop: 8 }}>Couldn't read - clean finger and retry</div></div>), rule: "Specific error guidance helps users recover - 'clean finger' is actionable." }, dont: { stage: (<div style={{ textAlign: "center" }}><B state="error" /><div style={{ fontSize: 12, marginTop: 8 }}>Failed</div></div>), rule: "'Failed' tells users nothing useful - they just retry blindly." } },
      { do: { stage: <B state="ready" />, rule: "Show corner brackets - clear visual cue where to place finger / face." }, dont: { stage: (<div style={{ width: 220, height: 220, background: "var(--ux4g-bg-neutral-soft)", borderRadius: 12 }}></div>), rule: "Blank frame doesn't tell users where to position." } },
    ],
    accessibility: [
      { t: "Capture status announces live.", b: "Status changes ('Scanning', 'Success', 'Failed') announce in `aria-live='polite'`." },
      { t: "Provide non-biometric fallback.", b: "Always offer OTP-based fallback for users who can't use biometric (no fingerprint, vision impairment for face capture)." },
      { t: "Camera permission rejected handled.", b: "If user blocks camera, surface clear explanation and fallback to OTP flow. Don't dead-end." },
      { t: "Instructions in clear language.", b: "'Place your thumb on the reader' - simple, action-oriented. Avoid technical jargon ('verify biometric authentication')." },
      { t: "Timeout has retry path.", b: "If capture times out (10s), offer clear retry button. Don't auto-fail without recovery." },
    ],
    related: [
      { name: "Input OTP", note: "Always provide OTP-based fallback for users who can't use biometric. OTP is the accessible alternative.", preview: (<div style={{ display: "flex", gap: 4 }}>{[..."4837"].map((d, i) => <div key={i} style={{ width: 24, height: 28, border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 600, fontSize: 13 }}>{d}</div>)}</div>) },
      { name: "Modal", note: "Biometric capture often happens inside a Modal so the rest of the page doesn't distract.", preview: (<div style={{ padding: 12, border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 8, maxWidth: 180 }}><div style={{ fontWeight: 600, fontSize: 13 }}>Verify identity</div></div>) },
      { name: "Alert / Toast", note: "After successful capture, surface a brief success Toast before moving to next screen.", preview: (<div className="ux4g-alert ux4g-alert-success" style={{ padding: 10 }}><span className="ux4g-alert-icon ux4g-icon-outlined">check_circle</span><div className="ux4g-alert-content"><p className="ux4g-alert-title" style={{ fontSize: 13 }}>Captured</p></div></div>) },
      { name: "Slot Grid", note: "Before biometric capture, users often book a slot at a service centre via Slot Grid.", preview: (<div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 4, maxWidth: 120 }}><span style={{ padding: 4, fontSize: 11, border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 4, textAlign: "center" }}>09:00</span><span style={{ padding: 4, fontSize: 11, background: "var(--ux4g-bg-primary-strong)", color: "#fff", borderRadius: 4, textAlign: "center" }}>10:00</span></div>) },
    ],
  };
  if (window.UX4G_CP && window.UX4G_CP.render) window.UX4G_CP.render(config);
  else window.UX4G_COMPONENT_CONFIG = config;
})();
